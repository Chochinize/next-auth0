import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
    
    return (
        <header className='grid  grid-cols-3   font-thin  bg-gradient-to-r from-blue-500 to-blue-200  md:place-items-center      mb-10   lg:grid-cols-3     s   lg:text-2xl '>
            <div className='p-2 text-center m-6 fancy-link w-max tracking-widest'><Link href='/development'><a> DEVELOPERS </a></Link> </div>
           
            <div className='p-2 text-center m-6 fancy-link w-max tracking-widest' ><Link href='/backend'><a>  BACKEND</a></Link></div>
         
            {/* <div className='p-2 text-center m-6 fancy-link w-max tracking-widest'><Link href='/SideProjects/'><a> SIDE PROJECTS</a></Link> </div> */}
        
        </header>
      );
}
 
export default Header;