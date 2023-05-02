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
                console.log(user.tLoginID);
                //todo get role from db

                return {...user, role: 1};
            }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.role = user.role;
                token.email = user.email;
            }

            return token;
        },
        async session({session, token}) {
            if (session.user) {
                session.user.role = token.role;
                session.user.email = token.email;
            }

            return session;
        }
    },
    session: {
        strategy: "jwt"
    },
}
export default NextAuth(authOptions);
