import NextLink from 'next/link'
import { ShopLayout } from '../../components/layouts';
import { Box, Typography } from '@mui/material';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import Link from 'next/link';

const emptyPage = () => {
  return (
    <ShopLayout title='carrito vacio' pageDescription='aun no realizas tu primera compra'>
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' sx={{flexDirection: {xs: 'column', sm: 'row'}}}>
            <RemoveShoppingCartOutlined sx={{fontSize: 100}}/>
            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                <Typography>Aun no tienes articulos en tu carrito</Typography>
                <NextLink href='/' passHref legacyBehavior>
                  <Link color='secondary'>
                    <h2>regresar</h2>
                  </Link>
                </NextLink>
            </Box>
        </Box>
    </ShopLayout>
  );
};

export default emptyPage;