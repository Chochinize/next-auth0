import Link from 'next/link'
import Image from 'next/image';
import { signIn,signOut,useSession} from 'next-auth/client'

const Navbar = () => {

    const[session,loading]=useSession()
    
    return (
        <nav className='flex justify-end  gap-6 m-8 p-10 bg-gradient-to-r from-purple-300 via-pink-500 to-red-500  bg-yellow-300 shadow-xl'>
 {!session && (
        <>
        Not  signed in 
        <button onClick={signIn}>Sign in</button>
    </>

     )}
      {session && (
        <>
        
        <div className='text-[16px]'>
            You are signed in  as <pre>{session?.user?.name}</pre>
            </div>
        <button onClick={signOut}>Sign Out</button>
    </>

     )}
            
                
            <div>
                {}
               {/* <Link href='/'><a className='text-white font-thin text-xl m-20 sm:text-xl  '>Home</a></Link>
               <Link href='/about'><a className='text-white font-thin text-sm sm:text-xl '>About</a></Link>
               <Link href='/new'><a className='text-white font-thin text-sm sm:text-xl '>SignUp</a></Link>
               <Link href='/SignIn/'><a className='text-white font-thin text-sm sm:text-xl '>SignIn</a></Link> */}
            </div>
        </nav>
    );
}
 
export default Navbar;