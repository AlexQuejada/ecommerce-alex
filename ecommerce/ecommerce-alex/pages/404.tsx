import React from 'react';
import { ShopLayout } from '../components/layouts';
import { Box, Typography } from '@mui/material';

const Custom404 = () => {
  return (
    <ShopLayout title='page no found' pageDescription='No hay nada que mostrar'>
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' sx={{flexDirection: {xs: 'column', sm: 'row'}}}>
            <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>
              404 |
            </Typography>
            <Typography marginLeft={4} fontSize={35} fontWeight={40}>no se encuentra lo que estas buscando </Typography>
        </Box>
    </ShopLayout>
  );
};

export default Custom404;