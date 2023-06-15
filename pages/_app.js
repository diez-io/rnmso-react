import { useEffect } from 'react';
import NextNProgress from 'nextjs-progressbar';
import 'react-responsive-modal/styles.css';
import '@/styles/globals.scss';
import { useSelector } from 'react-redux';
import InnerLayout from '@/components/InnerLayout';
import { selectBg } from '@/store/bgSlice';

import { wrapper } from '@/store';

function App({ Component, pageProps }) {
  const bg = useSelector(selectBg);
  useEffect(() => {
    document.body.className = bg;
  }, [bg]);
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <InnerLayout fontsColor={pageProps.fontsColor}>{page}</InnerLayout>
    ));
  return getLayout(
    <>
      <NextNProgress color="#1A1A1A" />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
