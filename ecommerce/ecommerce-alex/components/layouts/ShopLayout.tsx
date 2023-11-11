import React, { FC } from 'react';
import Head from 'next/head';
import { Margin } from '@mui/icons-material';
import { Navbar } from '../ui';
interface props{
  title: string
  pageDescription: string
  imagenFullUrl?: string 
}

export const ShopLayout: FC<props> = ({children, title, pageDescription, imagenFullUrl }) =>{
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name='description' content={pageDescription} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />
        

        {
          imagenFullUrl &&(
            <meta name='og:title' content={imagenFullUrl} />
          )
        }
      </head>
      <nav>
        <Navbar />
      </nav>
      <main style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: '0px 30px'}
      }>
        {children}
      </main>
      <footer>
        
      </footer>
    </>
  )
}
