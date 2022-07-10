import React from 'react'
import './Estudios.scss'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '70%',
  margin: 'auto',
}));


function Estudios() {
  return (
    <>
    <section class="estudios" id="estudios">
      <h2>Estudios Realizados:</h2>
      <Box sx={{ flexGrow: 1 }} class="box">
        <Grid container spacing={2} columns={15}>
          <Grid item xs={5}>
            <Item>
              <h3>Bootcamp <span>Front-End Developer</span></h3>
              <p>Realizado en: <span>Upgrade hub</span></p>
              <p>Desde <span>Marzo-2022</span> - Hasta <span>Julio-2022</span></p>
              <p>HTML, CSS, SASS, BOOTSTRAP, BEM, JS, ANGULAR, REACT</p>
              <p>180 horas lectivas</p>
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item>
              <h3>Grado superior: <span>Desarrollo de aplicaciones multiplataforma</span></h3>
              <p>Realizado en: <span>San Roman</span></p>
              <p>Desde <span>2015</span> - Hasta <span>2017</span></p>
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item>
              <h3>Grado superior: <span>Administración de sistemas informáticos en red</span></h3>
              <p>Realizado en: <span>Cepal</span></p>
              <p>Desde <span>2013</span> - Hasta <span>2015</span></p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </section>
    </>
  )
}

export default Estudios