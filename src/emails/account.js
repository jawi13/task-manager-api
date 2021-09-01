const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'jawi13@outlook.com',
        subject: 'Welcome!',
        text: ` Welcome to the app, ${name}.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jawi13@outlook.com',
        subject: 'Bye',
        text: `Hi ${name}, why did you cancel?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}