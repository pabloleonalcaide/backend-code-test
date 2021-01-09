
import mongoose from "mongoose";
export interface GeniallyInterface extends mongoose.Document {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  modifiedAt: Date;
  deletedAt: Date;
}

const GeniallySchema: mongoose.Schema = new mongoose.Schema({
  _id: {type: mongoose.Schema.Types.String},
  name: {type: mongoose.Schema.Types.String, required: true},
  description: {type: mongoose.Schema.Types.String},
  createdAt: {type: mongoose.Schema.Types.Date},
  modifiedAt: {type: mongoose.Schema.Types.Date},
  deletedAt: {type: mongoose.Schema.Types.Date}
});


export const GeniallyMongoModel = mongoose.model("genially", GeniallySchema);
