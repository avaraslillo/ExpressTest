const uuid = require('uuid').v4;
const User = require('../models/user');

const MOCK_USERS=[
    {
        id: 1,
        name: 'Alex',
        comunne: 'Macul'
    },
    {
        id: 2,
        name: 'Patricio',
        comunne: 'Ñuñoa'
    },
    {
        id: 3,
        name: 'Marcelo',
        comunne: 'Maipú'
    }
]

const getAllUsers = async(req, res) => {
    try{
        const users = await User.find();
        res.json({
            status: 'success',
            data:{
                users: users
            }
        });
    }
    catch(err){
        console.log(err);
    }
}

const getUserByID = async(req, res) => {
    console.log(req.params);
    const {id} = req.params;
    
    try{
        const user = await User.findById(id);
        res.json({
            status: 'success',
            data:{
                user: user
            }
        });
    }
    catch(err){
        console.log(err);
    }
}



const saveUser = async(req, res) => {
    const body = req.body;
    try{
        const newUser = await User.create(body);
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        })
    }
    catch(err){
        console.log(err);
    }


}

const deleteUser = async(req, res) => {
    console.log(req.params);
    const {id} = req.params;
    try{
        const user = await User.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
            data: {
                user: user
            }
        })
    }
    catch(err){
        console.log(err);
    }
}

const updateUser = async(req, res) => {
    console.log(req.params);
    const {id} = req.params;
    const body = req.body;
    try{
        console.log(body);
        const user = await User.findByIdAndUpdate(id, body);
        //const user = await User.updateOne({_id:id}, body);
        console.log(user);
        res.status(200).json({
            status: 'success',
            data: {
                user: user
            }
        })
    }
    catch(err){
        console.log(err);
    }

}

module.exports = {
    getAllUsers,
    getUserByID,
    saveUser,
    deleteUser,
    updateUser
}