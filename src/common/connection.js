
import mongoose from 'mongoose';

const {
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

export default mongoose
  .connect(
    `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));