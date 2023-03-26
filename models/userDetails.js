const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    // password: {
    //     type: String,
    //     required: true,
    // },
    mobileNo: {
        type: Number,
        required: true,
    },
    // stateAdd: {
    //     type: String,
    //     required: true,
    // },
    // zipcode: {
    //     type: String,
    //     required: true,
    // },
    // link : {
    //     type: String,
    //     required: true,
    // },
    // web : {
    //     type: String,
    //     required: true,
    // },
},
{
    collection:"UserDetails",
});

mongoose.model("UserDetails", UserDetailsSchema);