

const Id = () => {
    return (
        <div>
            HHH
        </div>
      );
}


export async function getStaticProps(){

        
    const res = await fetch('http://localhost:3000/api/users');
const data = await res.json();

// if(!data){
//     return {
//         redirect:{
//             destination:'/login',
//             permanent:false,
//         },
//     }
// }
return {
    props:{potes:data}
}
}


export default Id;