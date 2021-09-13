import {useState} from 'react'
import axios from 'axios'
import {getCsrfToken} from 'next-auth/client'
import  Loader from '../../Components/Loader'


const API = 'http://localhost:3000/api/Pizza-Store/'


    export async function getStaticPaths() {


   const props = {};

          

        const res = await fetch(API)
        const posts = await res.json()
     
      
        const paths = posts.data.map((i) => ({
          params: { id: i._id.toString() },
        }))
 
 
        return { paths, fallback: false }
      }

export const  getStaticProps = async(context)=>{
 
  


    // async function myFunction() {
    //     const csrfToken = await getCsrfToken()
    //     console.log(csrfToken)
    //     /* ... */
    //   }
    //   myFunction();

  
    try {
        const  res =   await fetch('http://localhost:3000/api/Pizza-Store/'+context.params.id);
       const  data = await res.json()
        
       return {
        props:{
        fallback:data
        
        },
        revalidate:3

        
    }
    } catch (error) {
        return{
            props:{}
        }
    }

 
  
  

}

const Pages = ({fallback}) => {

        
    // async function myFunction() {
    //     const csrfToken = await getCsrfToken()
    //     console.log('Tova e token',csrfToken)
    //     /* ... */
    //   }
    //   myFunction();


console.log(fallback.data._id)

const [add,setAdd] = useState({})
const [number,setNumber] = useState(0)
const [price,setPrice] =useState(null)
const [spinner,setStpinner] =useState(false)


const  addToBasket= (data,price)=>{
    setStpinner(true)
    setTimeout(() => {
        sendDataToBackEnd(number,price,fallback.data._id)
        
        setStpinner(false)
        setNumber(prev=>prev+1)
        setAdd({...add,data})
        setPrice(pre=>price)
    }, 300);
   
}

const sendDataToBackEnd  = async (num,pr,id)=>{ 
    
    await axios.post(`${API}${id}`, {count:num,price:pr,item:id})
    
 
}
const deleteDataFromBackend = async(id,numb)=>{
    await axios.patch(`${API}${id}`,{count:numb,id:id})
}

const deleteItem=(ids)=>{
    setNumber(pre=>pre-1)
    if(number <= 0){
        setNumber(0)
    }
    deleteDataFromBackend(ids)



}
    return ( 
        <div className='grid grid-cols-[3fr,1fr] border-2 max-h '>

        <div className="grid grid-rows-[1fr] grid-flow-col gap-5 border-2 m-6 p-4 h- relative ">
  <div className="items-center">
      <img src={fallback.data.image} className='rounded-full w-48 h-48'/>
  </div>
  
  <div className    ="row-span-3 col-span-3 border-2 text-center ">
      <b>{fallback.data.name}</b>
      <p className='border-t-2 m-6 pt-10'>{fallback.data.description}</p>
      <p className='border-t-2 m-6 pt-10'> costs:{fallback.data.price}</p>
       
      <button onClick={()=>addToBasket(fallback.data.name,fallback.data.price)}>Add to Basket</button>
  </div>
      </div>
        <aside className='m-6 p-4 border-2  absolute right-0 w-1/4  '>
  <div className="row-span-1 border-2  ">Your Basket</div>
            <div className='flex justify-between'>
                <h5>{add.data}</h5>
                <b>quatity: {number} <span onClick={()=>deleteItem(fallback.data._id)}>-</span> </b>
                <div>
                    {spinner ? <Loader/>: ''}
                </div>
                <b> price:{price}$</b>
                
            </div>
            {/* {add.map((i,idx)=>{
                return(
                    <div key={idx} className='p-2 border-2 flex justify-between  relative'>
                        {i}
                    </div>
                )
            })} */}
        <div  className='border-2 p-6  m-6 text-center hover:bg-red-100'>  Proceed to payment </div>
        </aside>
        </div>
     );
}
 
export default Pages;