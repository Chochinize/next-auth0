const sgMail = require('@sendgrid/mail');

console.log(sgMail)
sgMail.setApiKey(process.env.SENDGRID_API_KET)

module.exports = class Email{
    constructor(user,url){
        this.to = user.email;
        this.url = url;
        this.fromEmail = 'chochinize@gmail.com'
        this.fromName = 'chochinize'
    }
    async sendMagicLink() {
        const mailOptions = {
            to:this.to,
            from:{
                email:this.fromEmail,
                name:this.fromName
            },
            templateId:'de3f4e610c064f43803a91f612795a6e ',
            dynamic_template_data:{
                url:this.url,
            },
        
        }
        await sgMail.send(mailOptions).then(()=>{},console.error)
    }
}