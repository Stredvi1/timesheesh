import Layout from '../components/layout/layout'
import {SessionProvider} from "next-auth/react";

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
      <SessionProvider session={session}>
        <Layout session={session}>
            <Component {...pageProps} />
        </Layout>
      </SessionProvider>
  );
}
