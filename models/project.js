<<<<<<< HEAD
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: String, default: 'Pending' }
  },
  { timestamps: true }
);

export default mongoose.model('Project', ProjectSchema);
=======
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: String, default: 'Pending' }
  },
  { timestamps: true }
);

export default mongoose.model('Project', ProjectSchema);
>>>>>>> 52dd01c52d5d779a24bf328da073b58c3b304f6f
