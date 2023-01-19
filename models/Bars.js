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
  },
  location: {
    type: String,
    maxlength: 30,
    trim: true,
    default: 'München',
  },
  notes: {
    type: String,
    maxlength: 250,
    trim: true,
  },
  // Phone
  phoneNumber: {
    type: String,
    maxlength: 25,
    trim: true,
  },
  unlockPhoneCode: {
    type: String,
    maxlength: 25,
    trim: true,
  },
  phonePin: {
    type: String,
    maxlength: 25,
    trim: true,
  },
  phonePuk: {
    type: String,
    maxlength: 25,
    trim: true,
  },
  tabletCodes: {
    type: String,
    maxlength: 256,
    trim: true,
  },
  kassenCodes: {
    type: String,
    maxlength: 256,
    trim: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide user'],
  },
});

export default mongoose.model('Bar', BarSchema);
