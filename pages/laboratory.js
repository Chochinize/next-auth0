import useUser from  '../lib/hooks'
import useSWR, { SWRConfig } from 'swr'
import {useState,useEffect} from 'react'


const fetcher = (url)=> fetch(url).then((res)=> res.json())
const API = 'http://localhost:3000/api/people'


const Laboratory = ({fallback}) => {
console.log(fallback);
return (
    <SWRConfig value={{fallback}}>
            <Article />
        </SWRConfig>
      );
    }
    export default Laboratory;
    
    
    const  Article = ()=>{
        

        const initialState = {
    
            text:'trn'
        }
        const [style,setStyle] = useState(initialState)
        
      

        const {data} = useSWR(API,fetcher)
        const pp = data.data.map(i=>(<div className='trn '>{i.name}</div>))   
        return  <div className='min-h-screen bg-indigo-500   bg-gradient-to-tl from-transparent to to-black  m-6 tranpa'>
         <h1>
                {pp}
         </h1>
     </div>
 }
 
 
 
 export async function getStaticProps(){


    

    // const ax = await axios(API)
     const info = await fetcher(API)
    
     
    return {
        props:{
        fallback:{
            [API]:info
        }
        },
        revalidate:3

        
    }
}
