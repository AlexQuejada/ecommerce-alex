import NextLink from 'next/link'

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';


export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        {/* passHref para que se pase a nuestro componet link legacyBehavior para que sea compatible con Next12 */}
        <NextLink href='/' passHref legacyBehavior>
          <Link display='flex' alignItems='center'>
            <Typography variant='h6'>Ecommerce |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        {/* styles de movil basado en los brekpoints de material*/}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NextLink href='/category/hombre' passHref legacyBehavior>
            <Link>
              <Button>Hombre</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/mujer' passHref legacyBehavior>
            <Link>
              <Button>Mujere</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/unisex' passHref legacyBehavior>
            <Link>
              <Button>Unisex</Button>
            </Link>
          </NextLink>
        </Box>


        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href="/cart" passHref legacyBehavior>
          <Link>
            <IconButton>
              <Badge badgeContent={5} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button>
          Menú
        </Button>
      </Toolbar>
    </AppBar>
  )
}
