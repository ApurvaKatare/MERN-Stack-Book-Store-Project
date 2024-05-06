import  Mongoose  from "mongoose";

 const bookSchema = Mongoose.Schema(
    {
        title:
        {
           type: String,
           required: true,
        },
        author:
        {
            type:String,
            required: true,
        },
        publishYear:
        {
            type:Number,
            required: true,
        },
        cost:
        {
            type:Number,
            required: true,
        },
        description:
        {
            type:String,
            required: true,
        },
        imageUrl:
        {
            type:String,
            required:true,
        }
    },
{
    timestamps:true,
}

);

export const Book=Mongoose.model('cat',bookSchema);