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
    default: 'guitarist',
  },
  location: {
    type: String,
    maxlength: 30,
    trim: true,
    default: 'München',
  },
  wifi: {
    type: String,
    maxlength: 25,
    trim: true,
    default: '---',
  },
  notes: {
    type: String,
    maxlength: 250,
    trim: true,
    default: '---',
  },
  // Phone
  phoneNumber: {
    type: String,
    maxlength: 25,
    trim: true,
    default: '---',
  },
  unlockPhoneCode: {
    type: String,
    maxlength: 25,
    trim: true,
    default: '---',
  },
  phonePin: {
    type: String,
    maxlength: 25,
    trim: true,
    default: '---',
  },
  phonePuk: {
    type: String,
    maxlength: 25,
    trim: true,
    default: '---',
  },
  // tablet
  tabletUnlock: {
    type: String,
    maxlength: 25,
    trim: true,
    default: '---',
  },
  tabletPin: {
    type: String,
    maxlength: 25,
    trim: true,
    default: '---',
  },
  tabletPuk: {
    type: String,
    maxlength: 25,
    trim: true,
    default: '---',
  },
  //kasse
  kasseUser: {
    type: String,
    maxlength: 25,
    trim: true,
    default: '---',
  },
  registerPassword: {
    type: String,
    maxlength: 25,
    trim: true,
    default: '---',
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide user'],
  },
});

export default mongoose.model('Bar', BarSchema);
