import Link from "next/link";
import {useState,useEffect} from 'react';
import { useRouter } from "next/router";
import Loader from "../Components/Loader";
import { getRouteRegex } from "next/dist/shared/lib/router/utils";



const NewNote = ()=>{
    const [form,setForm] = useState({
        name:'',
        password:'',
        email:''
        
    })
    const [issubmitting,setIsSubmitting] = useState(false);
    const [errors,setErrors]=useState({});
    const router = useRouter();


  
const   handleSubmit=(e)=>{
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
}

useEffect(()=>{
    if(issubmitting){
        if(Object.keys(errors).length === 0 ){
            createNote();
            // alert('success')
        }
        else{
            setIsSubmitting(false)
        }
    }
},[errors])


const createNote = async()=>{   
    try {
        console.log(form)
        const res = await fetch('http://localhost:3000/api/people',{
            method:'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(form)
        })
        if(res.status !==200){
            router.push('/new')
        }else{
            router.push('/')
        }
    } catch (error) {
        console.log('Some error')
    }
}


const handleChange = (e)=>{
 setForm({
     ...form,[e.target.name]:e.target.value
 })
}

const validate = ()=>{
    let err = {};
    if(!form.name){
        err.name = 'is required'
    }
  
    console.log(err)
    return err;
}
    return(
        <div className='grid grid-cols-1 m-10 p-20 border-2 w-max hover:shadow-xl relative '>
         
                <div>
                <h1 className='text-xs text-black/[0.5] hover:text-black  hover:transform scale-120 relative -top-10'>Authentication</h1>
                    {issubmitting ?  <Loader/> :    <form onSubmit={handleSubmit} className='flex flex-wrap w-min text-center gap-6' >
                    <labe >
    Name:
    
    <input 
    className='placeholder-shadow-xl outline-none text-center border-b-2  ' 
    type="text"
    name="name"

    placeholder="...Your Asterix..."
    onChange={handleChange}

    required
    />
    
  </labe>
  <label>
    Email:
    <input
    className='placeholder-shadow-xl outline-none text-center border-b-2'
    type="email"
    name="email"
    placeholder="...Your Algorithmus..."
    onChange={handleChange} />
  </label>
  <label>
    Password:
    <input 
    type="password"
    name="password"
    className='placeholder-shadow-xl outline-none text-center border-b-2'
    placeholder='... Your password ...'
    onChange={handleChange}
    />
    
  </label>
  <button type="submit" value="Submit">create new records</button>

                    </form>}
                </div>
        </div>
    )
}
export default NewNote;