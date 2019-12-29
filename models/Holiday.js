const mongoose = require('mongoose')

const Schema = mongoose.Schema

const holidaySchema = new Schema({
    holidayType: {
        //this could be public or non-public holiday
        type: String,
        required: true   
    },

    religion: {
        // it comes in either of christianity, islam, traditional or null
        type: String,
        required: true
    },
    generalHoliday: {
        // it comes in either general or non-general holiday
        type: String,
        required: true
    },
   ethnicitySpecification: {
       // name of the ethnic group which the holiday belong to. if it's general, it will return null
       type: String,
       required: true
   },
   holidayName: {
       type: String,
       required: true
   },

   holidayDate: {
    type: Date,
    required: true 
   }

})

module.exports = mongoose.model('Holiday', holidaySchema)

