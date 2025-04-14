const express = require('express')

const pool = require('../db/db')
const result = require('../utils/result')

const router = express.Router()

router.post('/', (req, res) => {
    const { title, description } = req.body
    const sql = `INSERT INTO categories (title,description) VALUES(?,?)`
    pool.query(sql, [title, description], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.get('/', (req, res) => {
    const sql = `SELECT id, title, description FROM categories `
    pool.query(sql, (error, data) => {
    res.send(result.createResult(error,data))
    })
})

module.exports= router