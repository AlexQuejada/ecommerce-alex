import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '../interfaces';

const productSchema = new Schema(
  {
    description: { type: String, required: true, default: '' },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: {
          values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
          message: '{VALUE} no es un tamaño válido',
        },
      },
    ],
    slug: { type: String, reuqired: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
      type: String,
      enum: {
        values: ['camisetas', 'buzos', 'gorras'],
        message: '{VALUE} no es un tipo válido',
      },
      default: 'camisetas',
    },
    gender: {
      type: String,
      enum: {
        values: ['hombre', 'mujer', 'unisex'],
        message: '{VALUE} no es un genero válido',
      },
      default: 'hombre',
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ title: 'text', tags: 'text' });

const Product: Model<IProduct> =
  mongoose.models.Product || model('Product', productSchema);

export default Product;
