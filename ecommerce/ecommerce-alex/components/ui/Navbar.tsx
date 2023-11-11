import NextLink from 'next/link'

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';


export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref legacyBehavior>
          <Link display='flex' alignItems='center' >
            <Typography variant='h6'>Black house |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NextLink href='/category/inicio' passHref legacyBehavior>
            <Link>
              <Button>Inicio</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/preferencia' passHref legacyBehavior>
            <Link>
              <Button>preferencias</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/mas' passHref legacyBehavior>
            <Link>
              <Button>mas</Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <NextLink href='/cart' passHref legacyBehavior>
          <Link>
            <IconButton>
              <Badge badgeContent={5} color='secondary'>
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