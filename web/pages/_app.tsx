import 'styles/globals.css'
import type { AppProps } from 'next/app'
// https://mui.com/material-ui/react-css-baseline/
import CssBaseline from '@mui/material/CssBaseline'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
