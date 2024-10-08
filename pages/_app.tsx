import type { AppProps } from 'next/app';

import '../styles/globals.scss';
import '../styles/ProfilePicture.scss';
export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return <Component {...pageProps} />;
}
