import {useEffect,useState} from 'react'
// import { get } from 'mongoose';
import useUser from '../lib/hooks'
import Link from 'next/link'
const Backend = ({potes}) => {

const [log,setLog] = useState(false)
const  [user,{mutate}] =  useUser()




const edit = (id)=>{
    // console.log(id)
}

const LogOn = ()=>{
    setLog(!log)
}




    return ( 
        <table className=''>
        <div className='min-h-screen  bg-gray-100/[0.5] bg-gradient-to-tl from-transparent to bg-gray-200/[0.3]  m-6' >
            <h1 className='text-center text text-2xl '>Control Panel</h1>
              <tr className='grid grid-cols-6 text-right'>
    <th className='bg-blue-100 text- '>Username</th>
    <th className=' bg-blue-100 '>Email</th>
    <th className='bg-blue-100 '>Password</th>
    <th>Time of creation</th>
    <th>ID</th>
    
  </tr> 


  

               
               
           
                    
           {potes.data.map(item=>{


               
               
               return (
                   <div className='border-b-2 grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr] justify-between gap-2' key={item._id}>
               
                    <Link href={`/api/users/${item._id}`}>
                    <a className='bg-red-200 text-center'>{item.name}
                    </a>
                    </Link>
                    <Link href={`/api/users/${item._id}`}>
                    <a className='bg-red-300 text-center'>{item.email}
                    </a>
                    </Link>
                    <Link href={`/api/users/${item._id}`}>
                    <a className='bg-red-400  text-center'>{item.password}
                    </a>
                    </Link>
                    <Link href={`/${item._id}`}>
                    <a className='bg-red-500  text-center'>{item.date}
                    </a>
                    </Link>
                    <Link href={`/api/users/${item._id}`}>
                    <a className='bg-red-700  text-center'>{item._id}
                    </a>
                    </Link>
                  
                    <button onClick={()=>LogOn()} className='bg-red-200'>edit file</button>
                       </div>
               )
            })}
        </div>
            </table>
     
     );
    }

    export async function getStaticProps(){

        const res = await fetch('http://localhost:3000/api/users/');
    const data = await res.json();
    
    if(!data){
        return {
            redirect:{
                destination:'/login',
                permanent:false,
            },
        }
    }
    return {
        props:{potes:data}
    }
}


 
export default Backend;
