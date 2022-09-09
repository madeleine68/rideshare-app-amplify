const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser')
//////////////////////////////////////////////////////////////////

const cors = require("cors");
// var corsOptions = {
//     credentials: true,
//     origin: "*"
//   };
// app.use(cors(corsOptions));
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}))
// app.use(cors())
app.use(cookieParser())
//////////////////////////////////////////////////////////////////



app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json());

app.post('/', (req, res)=>{
    const {name} = req.body;
    console.log("req.body: ",req.body)
    
    res.send(`Welcome ${name}`);
})
app.get('/', (req, res)=>{
    res.status(200).send({
        "a":1,
        "b":2,
        "url":"localhost:6000/"});
});

app.get('/hello', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello GFG Learner!</h1>");
});


//db
const db = require("./app/models");
db.sequelize.sync();

//db1 - driver signup
const db1 = require("./app/models/driver-signup-index");
db1.sequelize.sync();

//db3 -Admin signup
const db3 = require("./app/models/admin.index");
db3.sequelize.sync();

//db4 - Payment
const db4 = require("./app/models/payment.index");
db4.sequelize.sync();
//added Route
require("./app/routes/drivers.routes.js")(app);
require("./app/routes/driver-signup.routes.js")(app);
require("./app/routes/driver-signin.routes.js")(app);
require("./app/routes/status-change.routes.js")(app);
require("./app/routes/admin.routes.js")(app);
require("./app/routes/payment.routes")(app);
const PORT = process.env.PORT ||6006;
// app.listen(PORT, (error) =>{
//     if(!error)
//         console.log("Server is Successfully Running, App is listening on port "+ PORT)
//     else 
//         console.log("Error occurred, server can't start", error);
//     }
// )


//#######################################################################
//                          Payment Settings
//#######################################################################

// const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const app = express();
// const port = process.env.PORT || 5000;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// app.listen(port, error => {
//   if (error) throw error;
//   console.log('Server running on port ' + port);
// });

app.post('/payment', (req, res) => {
  console.log("\n POST request initiated...\n")
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };
  //if seats available, then proceed
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
        //if there was any error, add one seat to the driver
      res.status(500).send({ error: stripeErr });
    } else {
      //deduct one from the seats
      //notify the admin
      //notify the driver
      //notify the passenger
      
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.listen(PORT, (error) =>{
  if(!error)
      console.log("Server is Successfully Running, App is listening on port "+ PORT)
  else 
      console.log("Error occurred, server can't start", error);
  }
)