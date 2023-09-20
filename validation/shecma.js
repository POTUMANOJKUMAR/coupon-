const joi = require("@hapi/joi")

const schema = 
 joi.object({
    offer_name:joi.string().max(20).min(2).required(),

    coupan_code:joi.string().alphanum().required(),

    discountpercentage:joi.number().max(100).required(), 

    discountamount:joi.number().max(100).required(), 

    start_time:joi.date().iso().required(), 

    end_time:joi.date().iso().required(), 

    terms_and_conditions:joi.string().min(5).max(100).required()
});

module.exports = schema

