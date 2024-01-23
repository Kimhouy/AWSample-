// const express = require('express');
// const router = express.Router();


// const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
// const S3ClientData = new S3Client({
//     credentials: {
//         accessKeyId: process.env.BUCKET_ACCESS,
//         secretAccessKey: process.env.BUCKET_SECRETE,
//     },
//     region: process.env.BUCKET_LOCATION,
// })


//   const fileUploading = async (req, res) => {
//     try {
//         const params = {
//             Bucket: process.env.BUCKET_NAME, 
//             Key: req.file.originalname, 
//             Body: req.file.buffer, 
//             ContentType: req.file.mimetype, 
//             ACL: 'public-read'
//           }
//         const command = new PutObjectCommand(params)
//   // send image
//   await S3ClientData.send(command)
//     } catch (error) {
//         res.status(404).json(error)
//         console.log(error)
//     }
//   }

//   router.post('/file', fileUploading)
////////////////////////////////////////////
// const AWS = require('aws-sdk')


// s3 = new AWS.S3({
//     credentials: {
//         accessKeyId: process.env.BUCKET_KEY,
//         secreteAccessKey: process.env.BUCKET_SECRETE
//     },
//     region: 'us-east-1'
// })

// // AWS.config.update({region: 'us-east-1'})

// router.post('/files', async ({files}, res) => {
//     const params = {
//         Bucket: process.env.BUCKET_NAME,
//         // Bucket: 'synergydiybucket',
//         // Key: files.file.name,
//         Key: files.file.name,
//         Body: Buffer.from(files.file.data),
//         ContentType: files.file.mimetype,
//         ACL: 'public-read'
//     }
    
//     s3.upload(params, function (err, data) {
//         err && console.log("Error", err)
//         data && console.log("Upload Success", data.Location)
//     })

//     res.send( body= 'OK')
// })


//   module.exports = router;

const AWS = require('aws-sdk')
const AWS3 = require('@aws-sdk/client-s3')

// const region = 'us-east-2'
const region =  'ap-southeast-2'
const accessKeyId = 'AKIA5RJLSRYO66A2HE74'
const secreteKey = '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'

AWS.config.update({region, credentials: {accessKeyId: accessKeyId, secretAccessKey: secreteKey}})

//v3 config
const s3Instance = new AWS3.S3Client({region, credentials: {accessKeyId,secretAccessKey: secreteKey, endpoint: 's3-ap-southeast-2.amazonaws.com'}})
// const s3 = new AwsClient.AWS.S3({ region: 'ap-southeast-2', endpoint: 's3-ap-southeast-2.amazonaws.com' });




module.exports = {
    AWS,
    s3Instance
}
