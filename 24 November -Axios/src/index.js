const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const app = express();

// const middleware = require('./globalMiddleware/glbMiddleware')
// app.use( middleware.captureInfo)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//----------------------------------------------------------------------------
var dateTime = require('node-datetime');
const midGlb = function(req, res, next){
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    console.log(formatted, ",", req.ip, ",", req.originalUrl);    
next()
}
app.use(midGlb)
//-----------------------------------------------------------------------------

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/Aman_Kumar?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log('mongodb running and connected'))
    .catch(err => console.log(err))

//"mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/Aman_Kumar?retryWrites=true&w=majority"


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});