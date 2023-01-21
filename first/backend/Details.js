const mongoose = require("mongoose");


const userdetails = new mongoose.Schema(
    { 
        name:String,
        email:{type:String,unique:true},
        password:String,
        date:String,
        score:String
    },

    {
        collection:"information",
    },
);

mongoose.model("information",userdetails);