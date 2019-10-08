const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@liondev-6acyr.mongodb.net/instarocket?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(require('./routes'));

app.listen(3000, err => {
    if(err) throw err;
    console.log(`Server Running successfully.`);
})
