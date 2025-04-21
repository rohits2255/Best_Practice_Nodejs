const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;


//local imports
const { getLocalIP } = require('../utils/network.utils')

// Middleware
app.use(cors({
    origin: 'localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))


//health check
app.get('/health', (req, res) => {
    res.status(200).send('Server is up and running');
})

const server = app.listen(port, () => {
    console.log(`Application is running on: http://${getLocalIP()}:${port}`);
    console.log(`Helath check url : http://${getLocalIP()}:${port}/health`);
});


module.exports = server;