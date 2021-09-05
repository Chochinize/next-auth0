import {useState} from 'react'

const BE = () => {

const initial = {
    name:'',
    email:'',
    password:''
}
const [account,setAccount]=useState(initial)

// useEffect(() => {
//     // redirect to home if user is authenticated
//     if (user) Router.replace("/");
//   }, [user]);

  
const submitHandler=(e)=>{
    e. preventDefault() 
    console.log(account)
    
}
const onChangehandler = (e)=>{
    e.preventDefault()
    setAccount({name:e.target.value})
}

console.log(account)
    return (
        <div className='grid grid-cols-[1fr]'>
         <form onSubmit={submitHandler}>
  <label>
    Name:
    <input 
    type="text"
    name="name"
    onChange={onChangehandler}

    
    />
  </label>
  <label>
    Email:
    <input type="email" name="email" />
  </label>
  <label>
    Password:
    <input type="password" name="password" />
  </label>
  <input type="submit" value="Submit" />
</form>

            <div className="m-2 text-center bg-blue-100"> HELLO</div>
            <h1>For compression</h1>
            <h2>{account.name}</h2>
        </div>
        );
}
 
export default BE;