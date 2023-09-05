const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    amount: {
        type: String,
        trim: true
    },
    payment_type: {
        type: String,
        trim: true
    },
    provider: {
        type: String,
        trim: true
    },
    account_number: {
        type: Number,
        trim: true
    },
    status: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    order :{
        type : mongoose.Types.ObjectId,
        ref:'order'
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Payment = mongoose.model("payment", PaymentSchema);
module.exports = Payment;