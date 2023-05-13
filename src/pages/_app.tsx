import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import store from 'redux/configStore';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
