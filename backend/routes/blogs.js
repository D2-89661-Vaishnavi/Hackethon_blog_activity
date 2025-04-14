const express = require('express')

const pool = require('../db/db')
const result = require('../utils/result')

const router = express.Router()

//add new block
router.post('/', (req, res) => {
    const { title, details,category_id } = req.body
    console.log(req.body)
    const sql = `INSERT INTO blogs (title,details,user_id,category_id) VALUES(?,?,?,?)`
    pool.query(sql, [title,details,req.headers.userId,category_id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})
// edit my blocks 
router.put('/', (req, res) => {
    const {title,details, id} = req.body
    const sql = `UPDATE blogs set title=? ,details=?  WHERE id =? AND user_id=?;`
    pool.query(sql,[title,details,id,req.headers.userId], (error, data) => {
    res.send(result.createResult(error,data))
    })
})

// view all MY blocks 
router.get('/', (req, res) => {
    const sql = `SELECT * FROM blogs where user_id=? `
    pool.query(sql,[req.headers.userId], (error, data) => {
    res.send(result.createResult(error,data))
    })
})

// view all available blocks 
router.get('/all_blogs', (req, res) => {
    const sql = `SELECT * FROM blogs `
    pool.query(sql, (error, data) => {
    res.send(result.createResult(error,data))
    })
})

// delete blocks 
router.delete('/:id', (req, res) => {
    const sql = `DELETE FROM blogs where id=? and user_id=?`
    pool.query(sql,[req.params.id,req.headers.userId], (error, data) => {
    res.send(result.createResult(error,data))
    })
})

//Search blogs
router.get('/:title', (req, res) => {
    const sql = `SELECT * FROM blogs WHERE title LIKE '%?%'`
    pool.query(sql,[req.params.title], (error, data) => {
    res.send(result.createResult(error,data))
    })
})




module.exports= router