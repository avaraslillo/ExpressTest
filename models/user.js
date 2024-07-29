const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    comunne: {
        type: String,
        required: [true, 'Comunne is required']
    },
    region:{
        type: String,
        required: [true, 'Region is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    birthDate:{
        type: Date,
        required: [true, 'Birth Date is required']
    },
    rut:{
        type: String,
        required: [true, 'RUT is required']
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User