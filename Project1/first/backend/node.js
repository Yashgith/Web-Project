const express = require("express");


const path = require('path')

const router = express.Router();

const app = express();

app.use(express.urlencoded({extended:true}));

app.use(express.json()); 

app.use("/",router)

const compiler = require("compilex")

const mongoose = require("mongoose");

const mongoclient = require('mongodb').MongoClient 

const cors = require("cors");

const bcrypt =require("bcryptjs");

const jwt = require("jsonwebtoken");

const jwtsecret = "jwljf'pwjfojeofwo0237408240248(){}kfjrjwou994uPJcKKLJASJLV,/sljfjvnmvweuvmourvnanorvamcomvcuweovuworvwionrwornvrwrwnwucneuprwucrourrwceo"

app.use(cors());

const mediaroutes = require("./Media")

const mongourl="mongodb+srv://Yash:Yash@cluster0.by2zmvs.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery",true);

mongoose.connect(mongourl,{
    useNewUrlParser:true
}).then(()=>{console.log("Connected to Database")})
.catch((e)=>console.log(e))


  


// app.post("/post",async(req,res)=>{
    
    //     console.log(req.body);
    
    // })
    
    require("./Details");
    
    const user = mongoose.model("information");


    require("./Quizdata");

    const quizuser = mongoose.model("quizinformation");


    
    
    
    app.post("/Signup",async(req,res)=>{
        
        
        const {name,email,password,date} = req.body;

        
        const encrypt = await bcrypt.hash(password,10);
        
        try{
            
            const olduser = await user.findOne({email});
            
            if(olduser){
                return res.json({error:"User Exists"});
            }
            await user.create({
                name,
                email,
                password:encrypt,
                date,
            });
            
            return res.json({status:"Ok"});
        }
        catch(error){
            return res.json({status:"error",error:"User Already Exists"});
        }
    });

    app.get("/quizform",(req,res)=>{
   
        
        quizuser.find().then((result)=>{
            res.send(result)
        }).catch((error)=>{
            
            console.log(error);    
        })
        // res.json("ok")
        // res.status(201).json({email})

        //  database.Collection('quizinformation').find({}).toArray((err,result)=>{
        //     if(err) throw err
        //     res.send(result)
        //  })

    })
    
    app.post("/quizform",async (req,res) =>{

        
        const {name,email,password,score,scorehtml,scorecss,scorejava,scorephp,attendence} = req.body;
        
        
        const encrypt = await bcrypt.hash(password,10);
        
        await quizuser.create({
            name,
            email,
            password:encrypt,
            score,
            scorehtml,
            scorecss,
            scorejava,
            scorephp,
            attendence,
        });
        
        return res.json({status:"Ok"});
        
        // }
        // catch(error){
            //     return res.json({status:"error",error:"User Already Exists"});
            // }
            
            
        })

        const mediaRoutes = require("./Mediaroutes");

        app.use("/api/v1/media", mediaRoutes);

        app.use('/public',express.static(path.join(__dirname,'public')));
        
  
        


    

    app.post("/login-user", async (req,res) =>{

        const {email,password} = req.body;

        const User = await user.findOne({email}).lean();

        if(!User)
        {
            return res.json({error:"User Not Found"});
        }
        if(await bcrypt.compare(password,User.password))
        { 
            const token = jwt.sign({email:User.email},jwtsecret); 

         if(res.status(201)){
            return res.json({status:"ok"
                ,data:token});
        }
        else{
           return res.json({error:"error"})
       }

        }

        
        res.json({status:"error",error:"invalid password"})
    }) 


    // app.post("/quizlogin",async (req,res)=>{
        
    //     const {name,email,password}=req.body;

    //     const loginuser= await user.findOne({email});


    //         if(!loginuser)
    //         {
    //             return res.json("Your are not Registered user");
    //         }

    //         if(await bcrypt.compare(password,userold.password))
    //     {
    //         const token = jwt.sign({email:user.email},jwtsecret); 

    //     if(res.status(201)){
    //         return res.json({status:"ok"
    //             ,data:token});
    //     }
    //     else{
    //         return res.json({error:"error"})
    //     }

    //      }
        
    //     res.json({status:"error",error:"invalid password"})
    // })


    

    app.listen(5000,()=>{
        console.log("Server Started");
    })

