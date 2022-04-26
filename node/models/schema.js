// const { string } = require('jade/lib/utils');
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Skills: [{
        type: String,
    }],

    Education: [{
        nameOfInstitution: {
            type: String,
        },
        typeOfDegree: {
            type: String,
        },
        fieldOfStudy: {
            type: String,
        }
    }],
    Employment: [{
        nameOfCompany: {
            type: String,
        },
        titleOfJob: {
            type: String,
        },
        duration: {
            type: String,
        }
    }],
});

const User = mongoose.model('user_info', UserSchema);
module.exports = User;