import { Schema, model } from 'mongoose';

const levelSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  guildId: {
    type: String,
    required: true,
  },
  xp: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 0,
  }
});


// module.exports = model('userLevel', levelSchema);
export const userLevel = model('userLevel', levelSchema);