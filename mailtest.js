const sgMail = require('@sendgrid/mail')
const API = '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'
sgMail.setApiKey(API)


const  data = {
    to:'enty@abv.bg',
    from:'chochinize@gmail.com',
    subject:'New web Form',
    text:'Some friendly message',
    html:'<h1>JHELLO EMAIl</h1>'
}

sgMail.send(data).then(res=>console.log(res))
console.log(data)