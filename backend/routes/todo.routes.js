const express = require("express");
const { TodoModel } = require("../models/TodoModel");

const todosRouter = express.Router();

todosRouter.get("/", async (req, res) => {
  try {
    let data = await TodoModel.find();
    res.send(data);
  } catch (error) {
    console.error("Error in fetching todos:", error);
    }
  });

todosRouter.post("/addtodo", async (req, res) => {
  try {
    let data = new TodoModel(req.body);
    await data.save();
    res.send({
      message: "Todo added successfully",
    });
  } catch (error) {
    console.error("Error in adding todo:", error);
    res.send({
      message:error.message
    });
  }
});

//insert operation
todosRouter.patch("/:id",async(req,res)=>{
  try {
    const {id}=req.params
    await TodoModel.findByIdAndUpdate({_id:id},req.body)
    res.send({
      message:"todo updated"
  })
 } catch (error) {
  res.send({
    message:error.message
  })
  }
})

//delete operation
todosRouter.delete("/:id",async(req,res)=>{
  try {
    const {id}=req.params
    await TodoModel.findByIdAndDelete({_id:id},req.body)
    res.send({
      message:"todo deleted"
  })
 } catch (error) {
  res.send({
    message:error.message
  })
  }
})

module.exports = {
  todosRouter
};
