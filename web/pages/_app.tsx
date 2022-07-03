import 'styles/globals.css'
import type { AppProps } from 'next/app'
// https://mui.com/material-ui/react-css-baseline/
//github.com/codedthemes/berry-free-react-admin-template
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'

import themes from 'themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes()}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default MyApp
