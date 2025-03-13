const mongoose=require("mongoose");

const connectDB = async ()=>{
    try {
        const con = await mongoose.connect("mongodb://localhost:27017/myUnite"); // stored the connection in con variable
        console.log("DB connected : ");
        console.log(con.connection.host); // to know who hosted the server (localhost) 
        
        
    } catch (error) {
        console.error("error connecting to DB ",error.message);
        process.exit(1); // to exit the process or stop the server bcoz db is not connected , process is an inbuild method (process.exit)
        
    }
}

module.exports =connectDB;



