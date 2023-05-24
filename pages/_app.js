import { useEffect } from 'react';
import NextNProgress from 'nextjs-progressbar';
import 'react-responsive-modal/styles.css';
import '@/styles/globals.scss';
import InnerLayout from '../components/InnerLayout';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.className = pageProps.bodyClass ? pageProps.bodyClass : '';
  });
  const getLayout =
    Component.getLayout || ((page) => <InnerLayout>{page}</InnerLayout>);
  return getLayout(
    <>
      <NextNProgress color="#1A1A1A" />
      <Component {...pageProps} />
    </>
  );
}
