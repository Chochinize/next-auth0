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