const { validationResult } = require('express-validator/check');
const { check, param, body } = require('express-validator/check');
const userService = require('../services/user.service');

exports.validationErrorHandler = function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
};

exports.userValidationRules = function(action) {
    let rules = [];
    const isEmailTakenValidator = body('email').custom(value => {
        return userService.getUserByEmail(value).then((user) => {
            if(user) {
                return Promise.reject('E-mail address already in use');
            }
        })
    });
    switch(action) {
        case 'create':
            rules = [check('email').isEmail(),
                     isEmailTakenValidator];
        break;
        case 'update':
            rules = [param('id').exists(),
                     check('email').isEmail(),
                     check('firstName').not().isEmpty()];
        break;
    }
    return rules;
};