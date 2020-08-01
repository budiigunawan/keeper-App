const route = require("express").Router();
const Controller = require("../Controllers/ControllerNote");

route.get("/",Controller.getAllNotes);
route.get("/:id",Controller.getNote);
route.post("/",Controller.createNote);
route.put("/:id",Controller.updateNote);
route.delete("/:id",Controller.deleteNote);

module.exports = route