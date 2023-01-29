import mongoose from 'mongoose';

const CoffeeConsumptionSchema = new mongoose.Schema(
  {
    kilos: {
      type: Number,
      required: [true, 'Please provide a value'],
      trim: true,
    },
    barID: {
      type: mongoose.Types.ObjectId,
      ref: 'Bar',
      required: [true, 'Please provide bar'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('CoffeeCons', CoffeeConsumptionSchema);
