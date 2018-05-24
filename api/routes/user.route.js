const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { userValidationRules } = require('../utils/validation');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/',  userValidationRules('create'), userController.createUser);
router.put('/:id', userValidationRules('update'), userController.updateUser);
router.delete('/:id', userController.removeUser);


module.exports = router;
