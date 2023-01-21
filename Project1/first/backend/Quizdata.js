const mongoose = require('mongoose');


const quizdetails = new mongoose.Schema(
    {
        name:String,
        email:{type:String,unique:true},
        password:String,
        score:String,
        scorehtml:String,
        scorecss:String,
        scorejava:String,
        scorephp:String,
        attendence:String,
    },

    {
        collection:"quizinformation",
    }

    );
    
mongoose.model("quizinformation",quizdetails);