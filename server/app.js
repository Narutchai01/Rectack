const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://admin1234:admin1234@cluster0.ldksh5t.mongodb.net/";

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/posts/create', async (req, res) => {
    const post = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('HuaweiCloud').collection('post').insertOne({
        id: parseInt(post.id),
        fname: post.fname,
        lname: post.lname,
        postname: post.postname,
        email: post.email,
        avatar: post.avatar
    });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "post with ID = " + post.id + " is created",
        "post": post
    });
})


app.get('/posts', async (req, res) => {
    // const id = parseInt(req.params.id);
    const client = new MongoClient(uri);
    await client.connect();
    const posts = await client.db('HuaweiCloud').collection('post').find({}).toArray();
    await client.close();
    res.status(200).send(posts);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})