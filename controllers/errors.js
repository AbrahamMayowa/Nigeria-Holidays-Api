const router = require('express').Router()


exports.error404 = (req, res, next)=>{
    res.status(404).json({message: 'Endpoint is not exist.'})

}

exports.error500 = (error, req, res, next)=>{
    const status = error.statusCode || 500
    const message = error.message
    const data = error.data

    res.status(status).json({message: message, data: data})
}