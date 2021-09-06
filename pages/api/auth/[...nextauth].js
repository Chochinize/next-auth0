import NextAuth from "next-auth"
import Providers from "next-auth/providers"

const  options = {
    providers:[
        Providers.GitHub({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        Providers.Credentials({
            name:'Email ',
            credentials:{
                email:{label:'Email', type:'text', placeholder:'Email'},
                
            }
        })
        // Providers.Twitter({
        //     clientId:'',
        //     clientSecret:""
        // }),
        // Providers.Email({
        //     server:{
        //         host:process.env.EMAIL_SERVER_HOST,
        //         port:process.env.EMAIL_SERVER_USER,
        //         auth:{
        //             user:process.env.EMAIL_SERVER_PORT,
        //             password:process.env.EMAIL_SERVER_PASSWORD
        //         }
        //     },
        //     from: process.env.EMAIL_SERVER_FROM
                      
        // }),
    ],
    
    
    }


export default  async(req,res) =>  NextAuth(req,res,options)