export interface IProduct {
  _id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ISize[];
  slug: string;
  tags: string[];
  title: string;
  type: IType;
  gender: 'hombre' | 'mujer' | 'unisex';

  createdAt: string;
  updatedAt: string;
}

export type ISize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | '3XL';
export type IType = 'camisetas' | 'buzos' | 'gorras';
