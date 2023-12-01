import { ShopLayout } from '../components/layouts'
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import { initialData } from '../database/products'
import ProductList from '../components/products/ProductList'

export default function Home() {
  return (
    <ShopLayout title={'Black House'} pageDescription={'Bienvenido a black House la mejor tienda virtual'}>
    <Typography variant='h1' component='h1'>tienda</Typography>
    <Typography variant='h2' sx={{mb: 1}}>articulos</Typography>
     
    <ProductList products={initialData.products as any}/>
    </ShopLayout>
  )
}
