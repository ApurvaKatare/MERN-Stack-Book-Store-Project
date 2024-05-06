import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import Mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';
 
const app = express();

//middleware for parsing request body
app.use(express.json());
//middleware for handling cors policy
//option 1:allow all origins with default cors(*)
 app.use(cors());
app.use('/books',booksRoute);
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("welcome to mernstack tutorial");
})



Mongoose.connect(mongoDBURL)
    .then((result) => {
        console.log('app connected to database');
        app.listen(PORT, () => {
            console.log(`app is listening to port : ${PORT} `);
        });

    }).catch((err) => {
        console.log(err);
    });

