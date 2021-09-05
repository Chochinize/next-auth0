import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;
import  {Provider} from 'next-auth/client'
import { AppContextProvider } from '../Context/state'
// import 'tailwindcss/tailwind.css'
import '../styles/styles.css'
import Navbar  from './../Components/Navbar'
import Layout from '../Components/Layout'

function MyApp({ Component, pageProps }) {




        return (
        <Layout>
        <AppContextProvider>
        <Provider session={pageProps}>
        <Component {...pageProps} />
        </Provider>
        
        </AppContextProvider>
        </Layout>
        
        )
        }

export default MyApp
