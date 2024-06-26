const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const { start } = require('repl');

const PORT = process.env.PORT || 9000;

const MONGO_URL = 'mongodb+srv://baliram:J58zxz0dWHd22XkW@nasacluster.pyuwpap.mongodb.net/?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', ()=> {
    console.log('MongoDB connection ready!');
})

mongoose.connection.on('error', (err) => {
    console.error(err);
})

async function startServer() {
    await mongoose.connect(MONGO_URL);

    server.listen(PORT, ()=> {
        console.log(`Listening to port ${PORT}...`);
    })
}

startServer();


