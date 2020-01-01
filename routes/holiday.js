const router = require('express').Router()
const {body} = require('express-validator')
const getHoliday = require('../controllers/getHoliday')
const postHoliday = require('../controllers/postHoliday')


router.get('/holidays', getHoliday.getHoliday)

router.post('/holiday/create', [
    body('holidayType').isString().trim().isLength({min: 3}),
    body('religion').isLength({min: 3}).isString().trim(),
    body('generalHoliday').isLength({min: 3}).isString().trim(),
    body('ethnicitySpecification').isLength({min: 3}).isString().trim(),
    body('holidayName').isLength({min: 3}).isString().trim(),
    body('holidayDate').isLength({min: 3}).trim()
] ,postHoliday.postHoliday)

module.exports = router