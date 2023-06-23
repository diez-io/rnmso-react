import NextNProgress from 'nextjs-progressbar';
import 'react-responsive-modal/styles.css';
import '@/styles/globals.scss';
import { Provider } from 'react-redux';
import InnerLayout from '@/components/InnerLayout';

import { wrapper } from '@/store';

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const getLayout = Component.getLayout
    ? (page) => <Provider store={store}>{Component.getLayout(page)}</Provider>
    : (page) => (
        <Provider store={store}>
          <InnerLayout>{page}</InnerLayout>
        </Provider>
      );
  return getLayout(
    <>
      <NextNProgress color="#1A1A1A" />
      <Component {...props.pageProps} />
    </>
  );
}
