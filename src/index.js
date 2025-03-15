// problem of consistency of writing code
// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"


import connectDB from "./db/index.js";

dotenv.config({path:'./env'})

connectDB()

/*
import mongoose from "mongoose";
import {DB_NAME} from "./constants"
*/

// first approach all code in index file

/*
import express from "express"
const app = express()

// more professional approach use IFFIs
// always while connecting with the database wrap the code in try-catch block

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        // sometime our app doesn't want to talk due to some problems thats why we listen for them below
        app.on("ERROR",(error) => {
            console.log("error ho gya",error);
            throw error
        })
        app.listen(process.env.PORT,() => {
            console.log(`App is listening at port ${PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR=>",error);
        throw err
    }
})()   */