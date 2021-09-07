import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
    
    return (
        <header className='font-thin gap-2 sm:grid grid-cols-[1fr,1fr]  bg-gradient-to-r from-gray-100  border-b-2  justify-center    md:grid-cols-[10rem,10rem,10rem,10rem,10rem]  gap-2 text-md lg:text-2xl m-6'>
            <div className='p-2 text-center m-6 fancy-link w-max tracking-widest'><Link href='/development'><a> DEVELOPERS </a></Link> </div>
            <div className='p-2 text-center m-6 fancy-link w-max tracking-widest ' ><Link href='/frontend'><a> FRONTEND</a></Link></div>
            <div className='p-2 text-center m-6 fancy-link w-max tracking-widest' ><Link href='/backend'><a>  BACKEND</a></Link></div>
            <div className='p-2 text-center m-6 fancy-link w-max tracking-widest'><Link href='/laboratory'><a> LABORATORY</a></Link> </div>
            <div className='p-2 text-center m-6 fancy-link w-max tracking-widest'><Link href='/SideProjects'><a> SIDE PROJECTS</a></Link> </div>
        
        </header>
      );
}
 
export default Header;