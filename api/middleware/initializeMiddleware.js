import express from "express";
import indexRouter from '../v1/routes/user.js';
import passport from  'passport';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from "cors";
import passportjs from '../../app/config/passport.js';
// import passportjs from '../../app/config/passport.js.';
var corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"],
};

export default (app)=>{
    app.use(passport.initialize())
    passportjs(passport)
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    // app.use(express.static(path.join(__dirname, 'public')));
    app.use(cors(corsOption));
   
    app.use('/v1/api', indexRouter);
    


}