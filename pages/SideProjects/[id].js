import {useState,useEffect} from 'react'
import axios from 'axios'

import  Loader from '../../Components/Loader'


const API = process.env.PIZZA_ADDRESS1
const CART = process.env.USER_CART 
//  1.Get  static paths declare all  possible  routing  pages
//  2.It's neccessery to be done before rendering
//  3.Needet to be Stringify => .map(i=>Stringify(i))
    export async function getStaticPaths() {
   const props = {};
        const res = await fetch(API)
        const posts = await res.json()
        const paths = posts.data.map((i) => ({
          params: { id: i._id.toString() },
        }))
        return { paths, fallback: true }
      }
//  1.Static generated props for each single page
//  2.Fetch for Cart product and add it after thet to the component
export  const  getStaticProps = async(context)=>{
    // async function myFunction() {
    //     const csrfToken = await getCsrfToken()
    //     console.log(csrfToken)
    //     /* ... */
    //   }
    //   myFunction();
    const  LoadData =   await fetch(CART);
   const loadedData =  await LoadData.json()
    try {
        const  res =   await fetch(API+context.params.id);
       const  data = await res.json()  
       return {
        props:{
        fallback:data,
        skeleton:loadedData
     },
     revalidate: 1,
    }
    } catch (error) {
        return{
            props:{}
        }
    }
}

 
  
  

// 1. Main Component with mutated data to the  component 
const Pages = ({fallback,skeleton}) => {
    
        
    // async function myFunction() {
    //     const csrfToken = await getCsrfToken()
    //     console.log('Tova e token',csrfToken)
    //     /* ... */
    //   }
    //   myFunction();





const [add,setAdd] = useState({})
const [number,setNumber] = useState(0)
const [price,setPrice] =useState(null)
const [spinner,setStpinner] =useState(false)
console.log(number)

const  addToBasket= (data,price)=>{
    setStpinner(true)
    setPrice(pre=>price)
    setNumber(prev=>prev+1)
    setTimeout(() => {
        sendDataToBackEnd(number,price,fallback.data._id)
        setStpinner(false)
        setAdd({...add,data})
    }, 300);
   
}

const sendDataToBackEnd  = async (num,pr,id)=>{ 
    
    await axios.post(`${API}${id}`, {count:num,price:pr,item:id})
    
 
}
const deleteDataFromBackend = async(id,numb)=>{
    await axios.put(`${API}${id}`,{count:numb,id:id})
}

const deleteItem=(ids,n)=>{
    setNumber(pre=>pre-1)
    if(number <= 0){
        setNumber(0)
    }
    deleteDataFromBackend(ids,n)
}
useEffect(()=>{
    console.log(skeleton.message,fallback.data)
    const   fil  =  skeleton.message.find(i=>i._id ===fallback.data._id)  
if(!fil)   return   
    setNumber(fil.count)
    //  setNumber(...skeleton.message.filter(i=>i._id ===fallback.data._id).map(k=>k.count))
},[])



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
                <b>quatity: {number} <span onClick={()=>deleteItem(fallback.data._id,number)}>-</span> </b>
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