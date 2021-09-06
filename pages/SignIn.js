import Loader from '../Components/Loader';
import {useState,useEffect} from 'react'
import {useRouter} from 'next/router'

const LogInFront = () => {
    
    // const  [user,{mutate}]  = useUser()
    // const bb = async()=>{
    //   const c = await mutate();
    //   console.log(await mutate())  
    // }
    // bb()
    const router = useRouter()
    const initialForm = {
        name:'',
        email:'',
        password:''
    }
    
    const [issubmitting,setIsSubmitting] = useState(false);
    const [form,setForm] = useState(initialForm)
    const [errors,setErrors] = useState({})
    const [inc,setInc] = useState('')

    const submitFormHandler = (e)=>{
        e.preventDefault()
        let errs = validate();
        setErrors(errs)
        setIsSubmitting(true)
    }
    const validate = ()=>{
        let err = {};
        if(!form.name  || !form.email){
            
            throw  new Error`${err.name}  is  requeired`
            // err.name = 'is requeired'
        }
        
        return err;
    }



    const handleChange = (e)=>{
        setForm({
            ...form,[e.target.name]:e.target.value
        })
    }
    useEffect(()=>{
        if(issubmitting){
            if(Object.keys(errors).length === 0){
                LogTheUserIn()
            }
            else{
                setIsSubmitting(false)
            }
        }
    },[errors])
    const LogTheUserIn = async()=>{
        try {
            const res = await fetch('http://localhost:3000/api',{
                method:'POST',
                headers:{
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(form)
            })
            if(res.status === 200){
                const sps = await res.json()
                router.push('/')
                console.log(sps)

            }else{
                const sps  =  await  res.json()
                console.log(sps)
            }

            
        } catch (error) {
            console.log('Some error')
        }
    }


    return (
        <div className='grid grid-cols-1 m-10 p-20 border-2 w-max hover:shadow-xl relative '>
         
        <div>
        <h1 className='text-xs text-black/[0.5] hover:text-black  hover:transform scale-120 relative -top-10'>Authentication</h1>
            {issubmitting ?  <Loader/> :    <form onSubmit={submitFormHandler} className='flex flex-wrap w-min text-center gap-6' >
            <label >
Name:

<input 
className='placeholder-shadow-xl outline-none text-center border-b-2  ' 
type="text"
name="name"

placeholder="...Your Asterix..."
onChange={handleChange}

required
/>

</label>
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
onChange={handleChange}/>
</label>
{inc}
<button type="submit" value="Submit" className='m-auto'>Log In</button>

            </form>}
        </div>
</div>
      );
}
 
export default LogInFront;