const pool = require('../models/db')

exports.getAllPosts = async (req,res) =>{
    try {
        const result = await pool.query('SELECT * FROM posts');
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Error while fetching post!');
    }
}

exports.createPost = async (req,res) =>{
    const {title,content} = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO posts(title,content) VALUES ($1,$2) RETURNING *',[title,content]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Error while creating post!');
    }
}

exports.updatePost = async(req,res) =>{
    const { id } = req.params;
    const { title,content } = req.body;
    try {
        const result = await pool.query(
            'UPDATE posts SET title = $1,content = $2 WHERE id = $3 RETURNING *',[title,content,id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Error at upadting post");
    }
}

exports.deletePost = async (req,res) =>{
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *',[id]);
        res.json({message:`Item with id ${id} deleted successfully`});
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Error while deleting post")
    }
}