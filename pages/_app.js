import propTypes from 'prop-types'
import '../node_modules/normalize.css/normalize.css'
import '../static/styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: propTypes.func.isRequired,
  pageProps: propTypes.object.isRequired
}

export default MyApp
