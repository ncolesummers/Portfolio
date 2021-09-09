import '../styles/global.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { AppProps } from 'next/app'

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
