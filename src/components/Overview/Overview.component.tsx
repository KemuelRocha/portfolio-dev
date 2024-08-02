import type { FunctionComponent } from 'react';
import type { OverviewProps } from './Overview.interface';
import { Box, Button, Container, Typography } from '@mui/material';

export const Overview: FunctionComponent<OverviewProps> = () => {
  return (
    <Container maxWidth='lg'>
      <Box display='flex' alignItems='center'>
        <Box display='flex' flexDirection='column' alignItems='flex-start'>
          <Typography variant='h6'>Olá, sou</Typography>
          <Typography variant='h3'>Engenheiro da Computação,</Typography>
          <Typography mt={3}>
            Meu nome é Kemuel, tenho 27 anos e sou Engenheiro da Computação.
            Atualmente, atuo como desenvolvedor fullstack. Neste portfólio,
            apresento alguns dos projetos mais significativos que desenvolvi
            ao longo da minha carreira, destacando minha experiência em diversas
            tecnologias e minha paixão por criar soluções inovadoras.
          </Typography>
          <Button variant='contained' sx={{ mt: 3 }}>Sobre Mim</Button>
        </Box>
        <Box display='flex' alignItems='center' ml={-10}>
          <img
            src='/images/kemuel-perfil.svg'
            alt='Engenheiro'
            style={{
              maxHeight: '640px',
              width: 'auto',
            }}
          />
        </Box>
      </Box>
    </Container>
  )
};
