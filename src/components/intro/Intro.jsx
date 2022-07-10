import React from 'react'
import './Intro.scss';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';


function Intro() {

  return (
    <section class="intro" id="intro">
      <div class="info">
      <Avatar
        alt="Javier Martínez"
        src="https://media-exp2.licdn.com/dms/image/C5103AQGvSUoGNFLyZw/profile-displayphoto-shrink_800_800/0/1517003903061?e=1662595200&v=beta&t=oY4XPa8zEeG-8x05HvVV5bKLRm1LcCGlAbiwFmS_CfA"
        sx={{ width: 256, height: 256 }}
      />
        <h1>Javier Martínez</h1>
        <h2>Desarrollador y Administrador de sistemas</h2>
      </div>
      <div class="botones">
        <a class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-sghohy-MuiButtonBase-root-MuiButton-root" href='#sobremi'>Sobre Mí</a>
        <Button variant="contained" endIcon={<SendIcon />}>
        Enviar mensaje
      </Button>
      </div>
    </section>
  )
}

export default Intro