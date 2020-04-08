'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for todolist object.
 */
let TransactSchema = new Schema({

    accountNum: {
        type: String,
        required: [true, 'Account Number is required']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    }
},
    {
        versionKey: false
    });

// Duplicate the id field as mongoose returns _id field instead of id.
TransactSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
TransactSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('transact', TransactSchema);