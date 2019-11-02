var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'ravina18@navgurukul.org',
        pass: '*************'
    }
});

var mailOptions = {
    from: 'ravina18@navgurukul.org',
    to: 'ravinasingh697@gmail.com',
    subject: 'using Node js, sending this mail:)',
    text: 'want you to check once weather concept is clear or not!'
};

/*function sleep() {
    console.log("I am taking time for execute:)");
}

setTimeout(sleep, 30000);*/

setTimeout(function(){
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        }else {
            console.log('Email sent: ' + info.response);
        }
    })
}, 50000);

console.log("Sending....")