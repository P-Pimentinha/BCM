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
    maxlength: 50,
    trim: true,
    default: 'no value',
  },
  notes: {
    type: String,
    maxlength: 250,
    trim: true,
    default: 'no value',
  },
  phoneCodes: {
    type: String,
    maxlength: 256,
    trim: true,
    default: 'no value',
  },
  tabletCodes: {
    type: String,
    maxlength: 256,
    trim: true,
    default: 'no value',
  },
  kassenCodes: {
    type: String,
    maxlength: 256,
    trim: true,
    default: 'no value',
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide user'],
  },
});

export default mongoose.model('Bar', BarSchema);
