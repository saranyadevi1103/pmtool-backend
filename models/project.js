import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: String, default: 'Pending' }
  },
  { timestamps: true }
);

export default mongoose.model('Project', ProjectSchema);
