import Image from 'next/image'
import skull from  './../public/Skull.jpg'
import Link from 'next/link'
const NotFound = () => {
    return ( 
        <div className='font-anton text-4xl text-center '>
            <Image src={skull} width={100} height={100}/>
            
            <p>Go back to the <Link href='/'><a className='text-blue-400'>Homeage</a></Link></p>
        </div>
     );
}
 
export default NotFound;