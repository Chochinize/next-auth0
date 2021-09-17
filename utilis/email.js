const sgMail = require('@sendgrid/mail');

console.log(sgMail)
sgMail.setApiKey(process.env.EMAIL_SERVER_PASSWORD)

module.exports = class Email{
    constructor(user,url){
        this.to = user.email;
        this.url = url;
        this.fromEmail = 'chochinize@gmail.com'
        this.fromName = 'chochinize'
    }
    async sendMagicLink() {
        const mailOptions = {
            to:'enty@abv.bg',
            from:{
                email:'chochinize@gmail.com',
                name:'Cho'
            },
            subject:'New web Form',
            text:'Some friendly message',
            templateId:'de3f4e610c064f43803a91f612795a6e ',
            dynamic_template_data:{
                url:this.url,
            },
        
        }
        await sgMail.send(mailOptions).then(res=>console.log(res))
    }
}