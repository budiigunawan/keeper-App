const Note = require("../Models/Note");

class NoteController {
    static getAllNotes(req,res){
        Note.find((err,result)=>{
            if(err){
                res.status(500).json(err)
            } else {
                if(result.length == 0){
                    res.status(404).json({message:"Notes not Found"})
                } else {
                    res.status(200).json(result)
                }
            }
        })
    }

    static getNote(req,res){
        const {id} = req.params
        Note.find({_id:id},(err,result)=>{
            if(err){
                res.status(500).json(err)
            } else {
                if(result.length == 0){
                    res.status(404).json({message:"Note not Found"})
                } else {
                    res.status(200).json(result)
                }
            }
        })
    }

    static createNote(req,res){
        const {title,content} = req.body;
        const newNote = new Note({
            title,
            content
        });
        newNote.save((err,doc)=>{
            if(err){
                res.status(500).json(err)
            } else {
                res.status(201).json({message:"Successfully added a new note"})
            }
        })
    }

    static updateNote(req,res){
        const {id} = req.params
        const {title,content} = req.body;

        Note.update(
            {_id:id},
            {title,content},
            {overwrite: true},
            (err)=>{
                if(err){
                    res.status(500).json(err)
                } else {
                    res.status(201).json({message:"Successfully updated note"})
                }
            }
        )
    }

    static deleteNote(req,res){
        Note.deleteOne({_id:req.params.id},(err)=>{
            if(err){
                res.status(500).json(err)
            } else {
                res.status(201).json({message:"Successfully deleted note"})
            }
        })
    }
}

module.exports = NoteController;