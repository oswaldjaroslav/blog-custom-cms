import { Document, Schema, Model, model } from 'mongoose';

export interface CategoryInterface extends Document {
    name: string;
}

const CategorySchema: Schema = new Schema({
    name: String
});

export const Category: Model<CategoryInterface> = model<CategoryInterface>('Category', CategorySchema);