import mongoose from 'mongoose';

const CoffeeSchema = new mongoose.Schema(
  {
    kilos: {
      type: Number,
      required: [true, 'Please provide a value'],
      trim: true,
    },
    barID: {
      type: mongoose.Types.ObjectId,
      ref: 'Bar',
      required: [true, 'Please provide Bar'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Coffee', CoffeeSchema);
