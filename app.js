const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

//middleware and route handling
app.use('/auth',authRoutes);

app.get('/',(req,res)=>{
    res.send("Hiiii");
})
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
});
