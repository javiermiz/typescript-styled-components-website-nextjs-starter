import type { AppProps } from 'next/app';
import 'normalize.css/normalize.css';
import '@/styles/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

/**
 * Custom 'App' component.
 *
 * More info: https://nextjs.org/docs/advanced-features/custom-app
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
