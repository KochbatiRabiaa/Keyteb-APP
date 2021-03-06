
const mongoose= require('mongoose')


//Schema

const bookShema=new mongoose.Schema({
    category: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },
    language: {
        type: String,
    
    },
    price: {
        type: String,
        required: true
    },
   bookCover: {
        type: String,
        required: true
    },
    pages:{
        type: Number,
        required: true
    } ,
    createdBy :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:false,
    }
},
    {timestamps:true}
)


const Book=mongoose.model('Book', bookShema)

module.exports=Book

