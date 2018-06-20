const userService = require('../services/user.service');

exports.getUsers = async function(req, res, next) {
  try {
    const users = await userService.getUsers();
    return res.status(200).json({status: 200, data: users, message: 'Users successfully received'});
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.getUser = async function(req, res, next) {
  try {
    const userId = req.params.id;
    const user = await userService.getUser(userId);
    return res.status(200).json({status: 200, data: user, message: 'User successfully received'});
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.createUser = async function(req, res, next) {
  const userToCreate = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    occupation: req.body.occupation,
    dateOfBirth: req.body.dateOfBirth,
    photo: req.body.photo
  };
  try {
    const createdUser = await userService.createUser(userToCreate);
    return res.status(201).json({status: 201, data: createdUser, message: 'User successfully created'});
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.updateUser = async function(req, res, next) {
  const id = req.params.id;
  const userToUpdate = {
    id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    occupation: req.body.occupation,
    dateOfBirth: req.body.dateOfBirth,
    photo: req.body.photo
  };
  try {
    const updatedUser = await userService.updateUser(userToUpdate);
    if (updatedUser) {
      return res.status(200).json({status: 200, data: updatedUser, message: 'User successfully updated'});
    } else {
      return res.status(400).json({status: 400, message: 'User update failed'});
    }
  } catch(e) {
    return res.status(400).json({status: 400., message: e.message});
  }
};

exports.removeUser = async function(req, res, next) {
  const id = req.params.id;
  try{
    await userService.deleteUser(id);
    return res.status(204).json({status:204});
  } catch(e) {
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.upload = async function(req, res, next) {
  if (!req.file) {
    return res.send({
      success: false
    });
  } else {
    console.log(req.file);
    debugger;
    return res.status(201).json({
      status: 201, filePath: req.file.path
    });
  }
};
