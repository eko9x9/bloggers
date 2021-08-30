import type { AppProps } from 'next/app';
import "../assets/scss/main.scss";
import 'swiper/swiper.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
