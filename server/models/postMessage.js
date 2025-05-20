import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  creator: String,
  title: String,
  message: String,
  tags: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('PostMessage', postSchema);
