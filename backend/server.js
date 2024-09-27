const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`); // Use `${PORT}`
    });
}).catch((err) => {
    console.log(`Connection error: ${err}`); // Use `${err}`
});


app.get('/',(req,res)=>{
    res.send("Hey this is home page...")
})
