import { StringToBoolean } from "class-variance-authority/types";
import { Document, model,  models,  Schema } from "mongoose";

export interface IImage extends Document {

  title: string; // String is required for title
  transformationType: string; // String is required for transformationType
  publicId: string; // String is required for publicId
  secureUrl: URL; // URL is required for secureUrl
  width?: number; // Optional field for width
  height?: number; // Optional field for height
  config?: Record<string, any>; // Optional field for config (can be an object of any shape)
  transformationUrl?: URL; // Optional field for transformationUrl (URL)
  aspectRatio?: string; // Optional field for aspectRatio
  color?: string; // Optional field for color
  prompt?: string; // Optional field for prompt
  author: {
    _id: string;
    firstName: string,
    lastName: string
  },
  createdAt?: Date; // Date field for creation timestamp
  updatedAt?: Date; // Date field for update timestamp
}

const ImageSchema = new Schema({
  title: {
    type: String, required: true
  },
  transformationType: {
    type: String, required:true
  },
  publicId: { 
    type: String, required: true
  },
  secureUrl: {
    type: URL, required: true
  },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: {
    type: String
  },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;
