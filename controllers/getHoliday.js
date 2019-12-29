const Holiday = require('../models/Holiday')

exports.getHoliday = async (req, res, next)=>{
    const day = req.query.day
    const month = req.query.month
    const year = req.query.year

    try{

    if(isNaN(day) || isNaN(month) || isNaN(year)){
        const err = new Error('Day, month or year must be a valid number type')
        err.statusCode = 400
        throw err
    }
    if(parseInt(day) > 31 || parseInt(month) > 12 || parseInt(year) <= 2018){
        const err = new Error('Invalid day, month or year value')
        err.statusCode = 400
        throw err  
    }

    const holidayResult = await Holiday.find({holidayDate: new Date(`${year}-${month}-${day}`)})

    if(holidayResult.length === 0){
        const err = new Error('No holiday is found on this date')
        err.statusCode = 204
        throw err
    }
    res.status(200).json({holidays: holidayResult})
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
            
        }
        next(err)
    }

    

}