<<<<<<< HEAD
import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model('Task', TaskSchema);
=======
import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model('Task', TaskSchema);
>>>>>>> 52dd01c52d5d779a24bf328da073b58c3b304f6f
