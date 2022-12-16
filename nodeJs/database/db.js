const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/task');

    

}

connect()
    .then((res) => {
        console.log('Database Connected')
    })
    .catch((err) => {
        console.log(err);
        return;
    })