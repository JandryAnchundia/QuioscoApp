import '../styles/globals.css'
import {QuioscoPrivider} from '../context/QuioscoPrivider'

function MyApp({ Component, pageProps }) {
  return (
    <QuioscoPrivider>

      <Component {...pageProps} />

    </QuioscoPrivider>
  )
}

export default MyApp
