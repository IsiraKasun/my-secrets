import mongoose, { Schema, Document } from 'mongoose';

export interface SecretInterace extends Document {
  title: string;
  secret: number;
}

const SecretSchema: Schema = new Schema({
  title: { type: String, required: true },
  secret: { type: String, required: true },
});

export default mongoose.model<SecretInterace>('Secret', SecretSchema);