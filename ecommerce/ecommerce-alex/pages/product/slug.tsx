import { Box, Grid, Typography, Button, Chip } from "@mui/material";
import { ShopLayout } from "../../components/layouts"
import { ProductSlidesShow, SizeSelector } from "../../components/products";
import { initialData } from '../../database/products';
import { ItemCounter } from "../../components/ui";


const product = initialData.products[0]

const ProductPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlidesShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            {/* titulos */}
            <Typography variant="h1" component='h1'>{product.title}</Typography>
            <Typography variant="subtitle1" component='h2'>{`$${product.price}`}</Typography>
            {/* cantidad */}
            <Box sx={{ my: 2 }} >
              <Typography variant="subtitle2">Cantidad</Typography>
              {/* itemCounter */}
              <ItemCounter />
              <SizeSelector
                // selectedSize={product.sizes[0]} 
                sizes={product.sizes} />
            </Box>
            <Button color="secondary" className='circular-btn'>
              Agregar a carrito
            </Button>
            {/* <Chip label='No hay disponibles' color='error' variant='outlined' /> */}
            {/* Descripcion */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default ProductPage