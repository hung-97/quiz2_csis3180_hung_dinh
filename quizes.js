const mongoose = require('mongoose')
const express = require('express')

app = express();


mongoose.connect('mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exam')
const quizesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    sid: {type: String, required: true}
})


const QuizesModel = mongoose.model('Quizes', quizesSchema)

const port = process.env.PORT || 7000;

app.get('/', (req,res)=> {
 const quiz1 = new QuizesModel({
    name: 'Hung Dinh',
    sid: '300331448'
 })

 QuizesModel.insertMany([quiz1]);

 res.send('<h2>Document Added</h2>')
})

app.listen(port, () => {
    console.log(port)
})