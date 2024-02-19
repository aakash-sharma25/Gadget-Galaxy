const express= require("express");
const cors = require("cors")
const { connectDB } = require("./config/db");
const authRoute = require("./routes/authRoute");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoute = require("./routes/productRoute");
require("dotenv").config();
const path = require("path");




const app = express();
app.use(cors());
app.use(express.json())

//database connection

connectDB();

//routes

app.use("/api/v1/auth" , authRoute)

app.use("/api/v1/category" , categoryRoutes)
app.use("/api/v1/product" , productRoute)


app.use(expre.static(path.join(__dirname,'./client/build')));

app.get('*',(req,res)=>{
    res.sendFile((path.join(__dirname,'./client/build/index.html')))
});

const PORT = process.env.PORT ;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})