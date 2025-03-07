import mongoose from 'mongoose';

const attendanceSchema = mongoose.Schema(
  {
    player: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Player',
    },
    date: {
      type: Date,
      required: true,
    },
    present: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index to prevent duplicate attendance records
attendanceSchema.index({ player: 1, date: 1 }, { unique: true });

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;