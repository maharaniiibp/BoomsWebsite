// import '@/styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '@/components/footer';
// import Head from 'next/head';
// // import { Navbar } from 'react-bootstrap';
// import Navbar from '@/components/navbar';
// import SaleBanner from  '@/components/sale-banner'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     AOS.init({
//       // Pengaturan AOS jika diperlukan
//     });
//   }, []);

  // return (
  //   <div>
  //     <Head>
  //       <link
  //         rel="stylesheet"
  //         href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap"
  //       />        
  //     </Head>
  //     <SaleBanner/>
  //     <Navbar/>
  //     <Component {...pageProps} />
  //     <Footer/>
  //   </div>
  // );
// }

// export default MyApp;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/footer';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import SaleBanner from  '@/components/sale-banner'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // Pengaturan AOS jika diperlukan
    });
  }, []);
  
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap"
        />        
      </Head>
      <SaleBanner/>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;
