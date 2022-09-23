import mongoose from 'mongoose';
const { Schema } = mongoose;

const historySchema = new Schema({
  longitude:  { type: String },
  latitude: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref:'User' }
}, { timestamps: true });

export default mongoose.model('History', historySchema);