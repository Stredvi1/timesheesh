import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';

export default function Layout({children, session}) {
    return (
        <>
            <SessionProvider session={session}>
                <Head>
                    <title>TimeShift</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

            <Navbar/>
            <main>{children}</main>
            <Footer/>


            <style jsx>{`
              main {
                width: 100%;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }`}</style>

            <style jsx global>{`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
              }

              * {
                box-sizing: border-box;
              }

              a {
                text-decoration: none;
                color: white;
              }
            `}</style>
        </>
    )
}