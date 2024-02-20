const nodemailer = require('nodemailer');
const readline = require('readline');

// Set up email configuration
const transporter = nodemailer.createTransport({
    service: 'mail.ru',
    auth: {
        user: 'mailsender.test@mail.ru',
        pass: 'A3jnKPFNegyTqwMspSAU'
    }
});

// Function to send email
function sendEmail(recipient, subject, text) {
    const mailOptions = {
        from: 'mailsender.test@mail.ru',
        to: recipient,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('Error occurred:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// Function to get email details from user input
function getEmailDetails() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Recipient email address: ', (recipient) => {
        rl.question('Email subject: ', (subject) => {
            rl.question('Email body: ', (body) => {
                sendEmail(recipient, subject, body);
                rl.close();
            });
        });
    });
}

getEmailDetails();
