import mail  from '@sendgrid/mail'

const API = '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'
mail.setApiKey(API)

export default (req,res)=>{

    if(req.method === "POST"){

        const body = req.body
        console.log(body)
        const  message = `
        Name :${body.name}\r\n
        Email :${body.email}\r\n
        Message:${body.message}`;
        
        const  data = {
            to:'ln.ferrari@hotmail.com',
            from:'chochinize@gmail.com',
            subject:'New web Form',
            text:message,
            html:message.replace(/\r\n/g,'<br>')
        }
        
        mail.send(data).then(res=>console.log(res))
        
        res.status(200).json({status:'Ok'})
    }
}
