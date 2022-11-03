import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/text.css';
import '../styles/block.css';
import '../styles/trinket.css'
import '../styles/anim.css';
import SSRProvider from 'react-bootstrap/SSRProvider';

/**
 * Do not touch this function, it will break things.
 * 
 * @param ...
 * @returns ... 
 */
function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
        <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp
