import mongoose, { model } from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone: {
    type: Number,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
