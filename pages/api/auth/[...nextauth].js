import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {compare} from "bcrypt";
import prisma from "/lib/prisma";

export const authOptions = {
    providers:[
        CredentialsProvider({
            name: "credentials",
            credentials:{
                login:{label: "email", type: "text"},
                password: {label: "password", type: "password"},
            },
            async authorize(credentials) {
                const { email, password } = credentials;

                if (!email || !password) {
                    throw new Error("Missing email or password");
                }
                const user = await prisma.tlogin.findUnique({where:{email}});

                if (!user || !(await compare(password, user.password))){
                    throw new Error("Invalid email or password");
                }

                //const [perm] = await prisma.$queryRaw`SELECT permissionID, userID, fullName FROM userpermissions WHERE loginID = ${user.tLoginID}`;
                const perm = await prisma.userpermissions.findUnique({where: {loginID: user.tLoginID}});

                if (perm && perm.permissionID) {
                    user.role = perm.permissionID;
                    user.id = perm.userID;
                    user.name = perm.fullName;
                }

                console.log(user);

                return user;
            }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.role = user.role;
                token.email = user.email;
                token.id = user.id;
                token.name = user.name;
            }

            return token;
        },
        async session({session, token}) {
            if (session.user) {
                session.user.role = token.role;
                session.user.email = token.email;
                session.user.id = token.id;
                session.user.name = token.name;
                delete session.user.image;
            }

            return session;
        }
    },
    session: {
        strategy: "jwt"
    }
}

export default NextAuth(authOptions);
