import AWS from "aws-sdk";
import axios from "axios";

const key = process.env.IAM_AWS_ACCESS_KEY_ID;
const secretKey = process.env.IAM_AWS_SECRET_ACCESS_KEY;

export default function sendMail(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    AWS.config.update({
        region: 'us-west-1',
        accessKeyId: key,
        secretAccessKey: secretKey
    });

    const params = {
        Destination: {
            BccAddresses: [
            ], 
            CcAddresses: [
            ], 
            ToAddresses: [
                "trishajjohnson@gmail.com"
            ]
        }, 
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8", 
                    Data: `
        *** Message submitted via Energy of 
        Jade contact form.***
                    
        From: ${name}
        Email: ${email}

        Message:

        ${message}`
        }
            }, 
            Subject: {
                Charset: "UTF-8", 
                Data: `Message from <${name}> - Energy of Jade`
            }
        },
        Source: "trishajjohnson@gmail.com", 
    };

    const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' })
                                .sendEmail(params).promise();
       
    sendPromise.then(
        function (data) {
            console.log("message sent: ", data.MessageId);
            res.status(200).json({ message: `Message sent: ${data.MessageId}` })
        }).catch(
            function (err) {
                console.error(err, err.stack);
            });
}