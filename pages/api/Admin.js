// const fastify = require('fastify')({ logger: true })
// const moment =  require('moment')
const fs = require('fs');
// const path = require('path');
// const PORT = 5000;
// const {people,ages} = require('./people') ;

const fspromise = fs.promises;



const core = './../M11';
// console.log(core)



  

setInterval(()=>{
    fs.readdir(__dirname,(err,files)=>{
        console.log(files.forEach(file=>{
            return file
        }))
    })
},10000)

// fs.rmdirSync('./../MRR', { recursive: true });

// if(!fs.existsSync('./../pinko')){
//     fspromise.mkdir('./../pinko',(err)=>{
//         if(err){
//             console.log(err)
//         }

//         console.log('folder created')
//     })
// }


 if(!fs.existsSync(core)){
     fspromise.mkdir(core,err=>{
         if(err){
             console.log(err)
         }
     })
     const pa = 'import BE from \'../../Components/backend\' ';
     const data =  `${pa}`+'\n'+ 'const Foo = () => { return (<div> <BE/></div>)}' + '\n' +'export default Foo'
     fspromise.writeFile(`${core}/index.js`, data,err=>{
         if(err){
             console.log(err)
         }
     })
     
    }
   

// if(fs.existsSync('./../pinko')){

//     fs.writeFile('./../pinko/index.js', 'const Foo = () => { return (<button className="m-2 text-center bg-blue-100"> HELLO</button>)}' + '\n' +'export default Foo', function(err){
//         if(err) throw err
//     })
//     console.log('doesnt exist')
// }


