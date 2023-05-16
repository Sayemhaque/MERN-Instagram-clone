const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

//mdsayemofficial1000
//QcWQg7fDbYDjc58C

// mongobd connection

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Instagram:I1eF89R0mdtKQ5Vv@simple-crud-2023.h8uagaz.mongodb.net/?retryWrites=true&w=majority";



const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("database connected")

    const userDB = client.db("userDB");
    const users = userDB.collection("users");
    const posts = userDB.collection('posts')
    

    app.get("/posts", async (req, res) => {
        const cursor = posts.find().sort({createdAt: -1})
        const result = await cursor.toArray()
        res.send(result)
      })

     app.post('/user' , async (req,res) => {
        const user = {...req.body , createdAt: new Date()};
        const result = await users.insertOne(user);
        res.send(result)
     })

     app.post('/post' , async (req,res) => {
      const post = {...req.body , createdAt: new Date()};
        const result = await posts.insertOne(post)
        res.send(result)
     })


     app.put('/like/:id' , async (req,res) => {
      const id = req.params.id;
      const userId = req.body.userId
        const result = await posts.updateOne(
        { _id: new ObjectId(id) },
        { $push: { likes: userId } }
     )
       res.send(result)
     }) 
    app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))

  } catch (error) {
    console.log(error)
  }
}
run();



