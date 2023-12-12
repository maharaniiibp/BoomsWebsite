import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
 
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;