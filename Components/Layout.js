import AppContext from "../Context/state";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {useContext} from 'react'
import Main from './Main'
import Header from "./Header";
import Image from 'next/image'
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