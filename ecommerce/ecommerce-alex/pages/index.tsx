import { ShopLayout } from '../components/layouts'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <ShopLayout title={'Black House'} pageDescription={'Bienvenido a black House la mejor tienda virtual'}>
    <Typography variant='h1' component='h1'>tienda</Typography>
    <Typography variant='h2' sx={{mb: 1}}>articulos</Typography>
    </ShopLayout>
  )
}
