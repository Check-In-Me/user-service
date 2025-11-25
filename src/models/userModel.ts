import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: false
    },

    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },

    kycStatus: {
        type: String,
        enum: ["pending", "verified", "rejected"],
        default: "pending",
    },

    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date }
},
    { timestamps: true }
);