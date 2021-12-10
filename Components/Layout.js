import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";

const Layout = ({children}) => {

    



    return (
        <div>
            <Navbar/>
  
            <Header/>
            <div className='min-h-screen'>
            {children}
            </div>

            <Footer/>
        </div>
    );
}
 
export default Layout;