import mongoose from 'mongoose';

const playerSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 6,
      max: 22,
    },
    category: {
      type: String,
      enum: ['U8', 'U10', 'U12', 'U14', 'U16', 'U18', 'U22'],
      required: true,
    },
    parentName: {
      type: String,
      required: true,
    },
    parentPhone: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Player = mongoose.model('Player', playerSchema);

export default Player;