import NextAuth from "next-auth"
import Providers from "next-auth/providers"


const  options = {
    providers:[
        Providers.GitHub({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        // Providers.Credentials({
        //     name:'Email ',
        //     credentials:{
        //         email:{label:'Email', type:'text', placeholder:'ewqeqw'},
                
        //     }
        // }),
        // Providers.Twitter({
        //     clientId:process.env.TWITTER_InnnnnnnnnD,
        //     clientSecret:process.env.TWITTER_SECRET
        // }),
        Providers.Auth0({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            clientDomain: process.env.AUTH0_DOMAINnnnnn
        }),
        Providers.Email({
            server:{
                host:process.env.EMAIL_SERVER_HOST,
                port:process.env.EMAIL_SERVER_PORT,
                auth:{
                    user:process.env.EMAIL_SERVER_USER,
                    password:process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_SERVER_FROM,
                      
            
        }),

    ],
    
 
 
    }


export default  async(req,res) =>  NextAuth(req,res,options)