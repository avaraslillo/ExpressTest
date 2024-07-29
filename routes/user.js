const express = require('express');
const router = express.Router();

const {getAllUsers,getUserByID,saveUser,deleteUser,updateUser} = require('../controllers/user');



router.get('/', getAllUsers);

router.get('/:id', getUserByID);

router.post('/', saveUser);

router.delete('/:id', deleteUser);

router.patch('/:id',updateUser)

module.exports = router;

