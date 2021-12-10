import "@fortawesome/fontawesome-svg-core/styles.css";
import { Provider } from "next-auth/client";
import { AppContextProvider } from "../Context/state";
import 'tailwindcss/tailwind.css'
import "../styles/styles.css";

import Layout from "../Components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps}>
      <Layout>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </Layout>
    </Provider>
  );
}

export default MyApp;
