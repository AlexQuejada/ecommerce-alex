
import NextLink from 'next/link'
import { ShopLayout } from '../../components/layouts'
import { Box, Button, Card, CardContent, Divider, Grid, Typography, Link } from '@mui/material'

import { CartList, OrderSummary } from '../../components/cart'


const SummaryPage = () => {
  return (
    <ShopLayout title={'resumen de oriden'} pageDescription={'Resumen de la orden'}>
      <Typography component='h1' variant='h1'>Resumen de la orden</Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          {/* CartList */}
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen (3 productos)</Typography>
              <Divider sx={{ my: 2 }} />
              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Direccion de entrega</Typography>
                <NextLink href='/checkout/address' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography>Andres Reyes</Typography>
              <Typography>Carrera 2</Typography>
              <Typography>Los pinos</Typography>
              <Typography>Colombia</Typography>
              <Typography>+57 312 542 5425</Typography>

              <Divider sx={{ my: 1 }} />
              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Button color='secondary' className='circular-btn' fullWidth>
                Confirmar Orden
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage