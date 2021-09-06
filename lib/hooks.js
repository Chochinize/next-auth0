// import  useSWR  from  'swr'

// export  const  fetcher = (url) =>fetch(url).then(r=>r.json())

//  const useUser  = ()=>{

//     const  {data,mutate}=  useSWR('/api/users',fetcher)
//     const loading = !data
//     const user  = data?.user
//     return [user,{mutate,loading}]
//     // return  <div>hello {data.name}</div>
// }
// export default useUser