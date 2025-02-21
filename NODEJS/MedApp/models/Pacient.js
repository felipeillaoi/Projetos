import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pacientSchema = new Schema( {
    name: {
        type: String,
        required: [true, "Doctor name is required"]
    },
    birthDate: {
        type: Date,
        required: [true, "Date of birth is required"]
    },
    email: {    
        type: String,
        required: [true, "Email is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const pacient = mongoose.model('Pacient', pacientSchema);

export default pacient;