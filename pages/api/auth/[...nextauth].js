import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {getUser} from "../getUser";

export const authOptions = {
    providers:[
        CredentialsProvider({
            name: "credentials",
            credentials:{
                login:{label: "email", type: "text"},
                password: {label: "password", type: "password"},
            },
            async authorize(credentials) {
                const { login: email, password } = credentials;
                const user = await prisma.tlogin.findUnique({where:{email}});

                if (!user || !(await compare(password, user.password))){
                    
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/components/loginForm"
    },
}
export default NextAuth(authOptions)