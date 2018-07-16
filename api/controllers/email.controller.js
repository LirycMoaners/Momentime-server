var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'mail.momen-time.com',
    port: 465,
    secure: true,
    auth: {
        user: 'contact@momen-time.com',
        pass: 'we83Mr01jJ'
    },
    tls: {
        rejectUnauthorized: false
    }
});

exports.send_email = function(req, res) {
    var email = req.body;

    var mailOptions = {
        from: 'contact@momen-time.com',
        to: 'contact@momen-time.com',
        subject: "[Momen'time] - " + email.subject,
        text: 'Email: ' + email.from + '\nTel: ' + email.tel + '\n\n' + email.text
    };

    var mailOptions2 = {
        from: 'contact@momen-time.com',
        to: email.from,
        subject: "[Momen'time] - Demande transmise !",
        text: "Bonjour,\n\nVotre demande '" + email.subject + "' m'a bien été transmise !"
            + "\nMerci d'avoir fait appel à mes services, je vous contacterai au plus vite pour que votre projet se réalise !"
            + "\n\nMomen'time\nEdouard Delaunay\nPhotographe\ncontact@momen-time.com\nmomen-time.com"
    }
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send(error);
        } else {
            transporter.sendMail(mailOptions2, function(error2, info2){
                if (error) {
                    console.log(error2);
                    res.status(500).send(error2);
                } else {
                    res.status(200).send('Emails sent !');
                }
            });
        }
    });
};
