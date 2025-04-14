const express = require('express')
const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')

const pool = require('../db/db')
const result = require('../utils/result')
const config = require ('../utils/config')

const router = express.Router()


router.post('/registration', (req, res) => {
    const { full_name, email, password, phone_no } = req.body
    const encryptedPassword = String(cryptoJs.SHA256(password))
    const sql = `INSERT INTO user(full_name, email, password, phone_no) VALUES(?,?,?,?)`
    pool.query(sql, [full_name, email, encryptedPassword, phone_no], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.post('/signin', (req, res) => {
    const { email, password } = req.body
    const encryptedPassword = String(cryptoJs.SHA256(password))
    const sql = `SELECT * FROM user WHERE email = ? AND password = ?`
    pool.query(sql, [email, encryptedPassword], (error, data) => {
        if (data) {
            if (data.length != 0) {
                const payload = {
                    userId: data[0].id
                }
                const token = jwt.sign(payload, config.secret)
                const body = {
                    token: token,
                    name: `${data[0].firstName} ${data[0].lastName}`
                }
                res.send(result.createSuccessResult(body))
            }
            else
                res.send(result.createErrorResult("Invalid email or password"))
        }
        else
            res.send(result.createErrorResult(error))
    })
})


module.exports = router