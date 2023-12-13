import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap"
        />
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;