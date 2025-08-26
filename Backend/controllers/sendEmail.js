const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    secure: true,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})


async function sendEmail(req, res) {
    const myMail = process.env.EMAIL_USER;
    const { naam, mail, msg } = req.body;
    console.log('Received email request:', { naam, mail, msg });
    if (!naam || !mail || !msg) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const toSelf = transporter.sendMail({
        from: `"${naam}" <${`vikashkyp0028@gmail.com`}>`, // Use the name and email from the request
        to: myMail, // Send to the configured email address
        replyTo: mail,
        subject: `Message from ${naam}`,
        text: `Name: ${naam}\nEmail: ${mail}\nMessage:\n${msg}`,
        html: `
        <h2>Message from Portfolio</h2>
        <p><strong>Message:</strong></p>
        <p style="margin-left:3px">${msg}</p><br />
        <p><strong>Name:</strong> ${naam}</p>
        <p><strong>Email:</strong> ${mail}</p>`,
    });

    const toUser = transporter.sendMail({
        from: `"Vikash" <${myMail}>`, // Use the name and email from the request
        to: mail, // Send to the user's email address
        subject: `Thank you for contacting me, ${naam}!`,
        text: `Hey ${naam},
        Thank you so much for getting in touch through my portfolio!
        I truly appreciate you taking the time to write. I’ve received your message and will personally review it as soon as possible. You can expect a response within the next 24–48 hours.
        In the meantime, feel free to explore more of my work or connect with me on LinkedIn.
        Looking forward to chatting with you soon!

        Warm regards,  
        Vikash Kumar`,

        html: `
        <p>Hey <strong>${naam}</strong>,</p
        <p>Thank you so much for getting in touch through my portfolio!</p>
        <p>I truly appreciate you taking the time to write. I’ve received your message and will personally review it as soon as possible. You can expect a response within the next <strong>24–48 hours</strong>.</p>
        <p>In the meantime, feel free to explore more of my work or connect with me on LinkedIn.</p>
        <p style="margin-top: 1rem;">Looking forward to chatting with you soon!</p>
        <p style="margin-top: 2rem;">Warm regards,<br/><strong>Vikash</strong></p>
`

    });

    await Promise.all([toSelf, toUser])
        .then(() => {
            console.log('📨 Mail successfully yeeted.');
            res.status(200).json({ message: 'Message sent. Check your inbox!' });
        })
        .catch((error) => {
            console.error('💥 Mail failed to launch:', error);
            res.status(500).json({ error: 'Oops! Email delivery crashed into a firewall.' });
        });

}

module.exports = sendEmail;


/*
complete syntax of transporter: transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email.' });
    }
    console.log('Email sent successfully:', info.response);
    res.status(200).json({ message: 'Email sent successfully.' });
}
*/