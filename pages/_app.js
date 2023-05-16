import { useEffect } from 'react'
import NextNProgress from 'nextjs-progressbar'
import '@/styles/globals.css'
import InnerLayout from '../components/InnerLayout'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.className = pageProps.bodyClass ?  pageProps.bodyClass : '';
  });
  const getLayout = Component.getLayout ||((page) =>  <InnerLayout>{page}</InnerLayout>);
  return getLayout(
      <>
        <NextNProgress />
        <Component {...pageProps} />
      </>
  );
}
