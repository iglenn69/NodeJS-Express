const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin'); // Imports the admin.js file
const shopRoutes = require('./routes/shop'); // Imports the shop.js file

app.use(bodyParser.urlencoded({extended: false})); // Adds a middleware

app.use('/admin', adminRoutes); // Adds a middleware (adminRoutes) to the middleware stack (app.use) 
app.use(shopRoutes); // Adds a middleware (shopRoutes) to the middleware stack (app.use)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); // Sends a response
}); 

app.listen(3000); // Starts a server on port 3000 => http://localhost:3000

