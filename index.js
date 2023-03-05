import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv" 
dotenv.config()
const {PORT, DB_USER,DB_PASS,DB_HOST,DB_NAME}=process.env

const app = express();

// REST API
// CRUD
// create - post - more secured so login \ register will also go with post
// read - getgit remote add origin git@github.com:ChanaButon/goCodeShop1.git
// update - put \ patch
// delete - delete

 app.use(express.json());
 app.use(express.static("client/build"))
 const todoSchema = new mongoose.Schema({
    title:{
      type: String,
      required: true
    },
    isDone:{
      type: Boolean,
      default:false
    },
    dateCreated:{
      type: Date,
      default: Date.now()
    }
  })
  
  const productSchema = new mongoose.Schema({
    price:{
      type: Number,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    img:{
      type:String,
      required:true
    },
    dateCreated:{
      type:Date,
      default:Date.now()
    },
    category:{
      type:String,
      required:true
    }
  })
  const Todo = mongoose.model('Todo', todoSchema)
  const Product = mongoose.model('Product', productSchema)
  


// app.get("/api/todo",(req,res)=>{
//     res.send("Hello Todo")
// });


// app.get("/api/Todo/:TodoId",(req,res)=>{
//     const params =req.params;
//     console.log(params);
//     res.send(params);
// });


// app.post("/api/addTodo",(req,res)=>{
//     const newTodo={...req.body};
//     res.send(newTodo);
// });



// app.put("/api/editTodo/:TodoId",(req,res)=>{
//     const { TodoId }=req.params;
//     const todo1={
//         id:"1",
//         title: "jaket",
//         price:"150",
//         type:"famle"
//     };  
//     const newTodoProperties = { ...req.body };
//     const newTodoAfterMerrge={...todo1,...newTodoProperties}
//     res.send(newTodoAfterMerrge)

// })

// app.delete("/api/delete/:TodoId",(req,res)=>{
//     const todo=[{
//         id:"1",
//         title: "jaket",
//         price:"150",
//         type:"famle"
//     },
//     {
//         id:"2",
//         title: "jaket",
//         price:"150",
//         type:"famle"
//     },
//     {
//         id:"3",
//         title: "jaket",
//         price:"150",
//         type:"famle"
//     }];  
//     const {TodoId}=req.params;
//     const indexParams = todo.findIndex(p=>p.id===TodoId)
//     const clone = {...todo}
//     if(indexParams ===-1){
//         res.send("error,no found a product",todo)
//     }
    
//     clone.splice(indexParams,1)
//     res.send(clone)
// });


app.post("/api/addTodo", async (req, res) => {
    try{
      const todoTitle = { ...req.body };
      const createdTodo = new Todo(todoTitle)
      await createdTodo.save()
      res.send(createdTodo);
  
    }catch(e){
      console.log(e)
      res.status(500).send(e.message)
    }
  });
  
  app.get("/api/todos", async (req,res) => {
    try{
      const todos = await Todo.find({})
      res.send(todos)
    } catch(e){
      console.log(e)
      res.status(500).send(e.message)
    }
  })
  app.get("/api/todo/:todoId", async(req,res) => {
    try{
      const {todoId} = req.params
      const singleTodo = await Todo.findOne({_id: todoId})
      if(!singleTodo){
        res.status(404).send({message: "no such todo with the specific id"})
      }
      res.send(singleTodo)
    } catch(e){
      console.log(e)
      res.send(e.message)
    }
  })
  
  app.put("/api/updateTodo/:todoId", async(req,res) => {
    try{
      const {todoId} = req.params
  
      const singleTodo = await Todo.findOne({_id: todoId})
  
      if(!singleTodo){
        res.status(404).send({message: "no such todo with the specific id"})
      }
  
      singleTodo.isDone = true;
      await singleTodo.save()
  
      res.send(singleTodo)
    } catch(e){
      console.log(e)
      res.send(e.message)
    }
  })
  app.delete("/api/deleteTodo/:todoId", async(req,res) => {
    try{
      const {todoId} = req.params
      const singleTodo = await Todo.findOneAndDelete({_id: todoId})
      if(!singleTodo){
        res.status(404).send({message: "no such todo with the specific id"})
      }
      res.send(singleTodo)
    } catch(e){
      console.log(e)
      res.send(e.message)
    }
  })

  // mongodb+srv://chanabuton:<password>@cluster0.gis9gve.mongodb.net/test
 
  
  mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true$w=majority`,
    {userNewUrlParser:true,useUnifiedTopology: true},
    (err)=>{
      app.listen(PORT||8000,()=>{
        console.log("err",err);
        console.log("listen")
      })
    }
  )



// mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://127.0.0.1:27017/todos",{
//     useNewUrlParser: true,
//     // useUnifiedToopology:true,
// });

// app.listen(PORT, () => {
//     console.log(`listening on port ${PORT}`);
//   });