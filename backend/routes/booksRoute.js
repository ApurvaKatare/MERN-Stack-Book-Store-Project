import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();
//route to save new book
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear||
            !request.body.cost||
            !request.body.description||
            !request.body.imageUrl
        ) {
            return response.status(400).send({
                message: 'send all required fields:title ,Author,publishYear,cost,description,imageUrl'
            });
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
            cost: request.body.cost,
            description: request.body.description,
            imageUrl: request.body.imageUrl,

        };
        const book = await Book.create(newBook);

        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for get all bookes from database
router.get("/", async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(201).json({
            count: books.length,
            data: books
        });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

});

//route for get one booke from database by id
router.get("/:id", async (request, response) => {
    try {
        const {id} = request.params;
        const book = await Book.findById(id);
        return response.status(201).json(book);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

});

//route to update book
router.put("/:id", async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear||
            !request.body.cost||
            !request.body.description||
            !request.body.imageUrl
        ) {
            return response.status(400).send({
                message: 'send all required fields:title ,author,publishYear,cost,description,imageUrl'
            });
        }


        const {id} = request.params;
        const result = await Book.findByIdAndUpdate(id,request.body);

        if(!result)
        {
        return response.status(404).json({message:'Book not found'});
    }
    return response.status(200).send({message:'book updated successfully'});
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

});

//route to delete book
router.delete("/:id", async (request, response) => {
    try {

        const {id} = request.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result)
        {
        return response.status(404).json({message:'Book not found'});
    }
    return response.status(200).send({message:'book deleted successfully'});
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

});
export default router;