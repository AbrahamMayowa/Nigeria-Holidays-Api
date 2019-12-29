const Holiday = require('../models/Holiday')
const {validationResult} = require('express-validator')

exports.postHoliday = async (req, res, next)=>{
    const holidayType = req.body.holidayType
    const religion = req.body.religion
    const generalHoliday = req.body.generalHoliday
    const ethnicitySpecification = req.body.ethnicitySpecification
    const holidayName = req.body.holidayName
    const holidayDate = req.body.holidayDate

    const errors = validationResult(req);

    try{
    if (!errors.isEmpty()) {
        const err = new Error('validation failed. The data is incorrect')
        err.statusCode = 422
        throw err
    }
    
    const saveHoliday =  await new Holiday({
        holidayType: holidayType,
        religion: religion,
        generalHoliday: generalHoliday,
        ethnicitySpecification: ethnicitySpecification,
        holidayName: holidayName,
        holidayDate: holidayDate

    })

    await saveHoliday.save()

    res.status(201).json({message: 'Holiday entry created successfully'})

    }catch(error){
        if(!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }

}