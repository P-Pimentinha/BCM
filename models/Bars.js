import mongoose from 'mongoose';

const BarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 50,
    trim: true,
  },
  address: {
    type: String,
    minlength: 3,
    maxlength: 50,
    trim: true,
    default: 'no value',
  },
  location: {
    type: String,
    maxlength: 30,
    trim: true,
    default: 'München',
  },
  phonenumber: {
    type: String,
    minlength: 3,
    maxlength: 50,
    trim: true,
    default: 'no value',
  },
  notes: {
    type: String,
    minlength: 3,
    maxlength: 250,
    trim: true,
    default: 'no value',
  },
});

export default mongoose.model('Bar', BarSchema);
