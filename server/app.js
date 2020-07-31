const express = require("express");
const app = express()
const port = 3000;
const mongoose = require("mongoose")

app.use(express.json());
app.use(express.urlencoded({extended:true}));

///Database connection and Model///
mongoose.connect("mongodb://localhost:27017/keeperDB", {useNewUrlParser: true, useUnifiedTopology: true});

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title must be filled"]
    },
    content: {
        type: String,
        required: [true, "Content must be filled"]
    }
})

const Note = mongoose.model("Note",noteSchema)

///Route and Controller///
///get all///
app.get("/",(req,res)=>{
    Note.find((err,result)=>{
        if(err){
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

///get one///
app.get("/:id",(req,res)=>{
    const {id} = req.params
    Note.find({_id:id},(err,result)=>{
        if(err){
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

///create///
app.post("/",(req,res)=>{
    const {title,content} = req.body;
    const newNote = new Note({
        title,
        content
    });
    newNote.save((err,doc)=>{
        if(err){
            res.send(err)
        } else {
            res.send("Successfully added a new note")
        }
    })
})

///update///
app.put("/:id",(req,res)=>{
    const {id} = req.params
    const {title,content} = req.body;

    Note.update(
        {_id:id},
        {title,content},
        {overwrite: true},
        (err)=>{
            if(err){
                res.send(err)
            } else {
                res.send("Successfully updated note")
            }
        }
    )
})

///delete///
app.delete("/:id",(req,res)=>{
    Note.deleteOne({_id:req.params.id},(err)=>{
        if(err){
            res.send(err)
        } else {
            res.send("Successfully delete note")
        }
    })
})

app.listen(port,()=>{
    console.log("This server is running on port",port);
})