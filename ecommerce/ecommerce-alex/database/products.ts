interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'hombre' | 'mujer' | 'unisex';
  }
  
  type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | '3XL';
  type ValidTypes = 'camisetas' | 'buzos' | 'gorras';
  
  interface SeedData {
    products: SeedProduct[];
  }
  
  export const initialData: SeedData = {
    products: [
      {
        description:
          'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
        images: ['Android_M1_B.jpg', 'Android_M1_N.jpg'],
        inStock: 7,
        price: 69000,
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        slug: 'camiseta-logo-cent-developer-android',
        type: 'camisetas',
        tags: ['sweatshirt'],
        title: 'Camiseta Developer Android',
        gender: 'hombre',
      },
      {
        description:
          'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
        images: ['Angular_M1_B.jpg', 'Angular_M1_B.jpg'],
        inStock: 5,
        price: 69000,
        sizes: ['XS', 'S', 'M', 'XL', 'XXL'],
        slug: 'camiseta-logo-cent-developer-angular',
        type: 'camisetas',
        tags: ['angular'],
        title: 'Camiseta Developer Angular',
        gender: 'hombre',
      },
      {
        description:
          'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
        images: ['Archlinux1_B.jpg', 'Archlinux1_N.jpg'],
        inStock: 13,
        price: 69000,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        slug: 'camiseta-logo-cent-developer-archlnux',
        type: 'camisetas',
        tags: ['archlinux'],
        title: 'Camiseta Arch Linux',
        gender: 'hombre',
      },
      {
        description:
          'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
        images: ['Aws_M1_B.jpg', 'Aws_M1_N.jpg'],
        inStock: 50,
        price: 45,
        sizes: ['XS', 'S', 'M', 'L'],
        slug: 'camiseta-logo-cent-developer-aws',
        type: 'camisetas',
        tags: ['aws'],
        title: 'Camiseta AWS',
        gender: 'hombre',
      },
      {
        description:
          'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
        images: ['Aws_Azure_M1_B.jpg', 'Aws_Azure_M1.jpg'],
        inStock: 50,
        price: 40,
        sizes: ['M', 'L', 'XL', 'XXL'],
        slug: 'camiseta-logo-cent-developer-aws-azure',
        type: 'camisetas',
        tags: ['azure', 'aws'],
        title: 'Camiseta Azure - AWS',
        gender: 'hombre',
      },
      {
        description:
          'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
        images: ['Azure_M1_B.jpg', 'Azure_M1_N.jpg'],
        inStock: 0,
        price: 35,
        sizes: ['M', 'L', 'XL', 'XXL'],
        slug: 'camiseta-logo-cent-developer-azure',
        type: 'camisetas',
        tags: ['azure'],
        title: "Camiseta Azure",
        gender: 'hombre',
      }
    ],
  };