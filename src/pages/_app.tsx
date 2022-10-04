import type { AppProps } from 'next/app';

import 'normalize.css/normalize.css';
import '@/styles/globals.css';
import '@/styles/fonts.css';
import '@/styles/variables.css';

import Header from '@/components/header';
import Footer from '@/components/footer';

/**
 * Modified 'App' file to share the same Header and Footer components in the entire application/website.
 *
 * _Remove Header and Footer components if you don't want them globally in all your application_
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
