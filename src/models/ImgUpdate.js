import { Schema, model } from 'mongoose';

const ImgUpdateSchema = new Schema({
  userId: {
    type: String,
  },
  guildId: {
    type: String,
  },
  Imgname: {
    type: String,
    require: true
  },
  url: {
    type: String,
    require: true
  }
});



export const updateImg = model('updateImg', ImgUpdateSchema);