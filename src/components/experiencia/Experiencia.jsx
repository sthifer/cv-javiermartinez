import React from 'react'
import './Experiencia.scss'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

function Experiencia() {
  return (
    <>
    <section class="experiencia" id="experiencia">
    <h2>Experiencia en el sector:</h2>
      <Timeline position="alternate" class="timeline">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Sep 2020 - Actualidad
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <img width="150px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/NTT-Data-Logo.svg/2560px-NTT-Data-Logo.svg.png" alt="NTT Data Europe"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Solutions Analyst
          </Typography>
          <Typography>NTT DATA Europe</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Mar 2017 - Ago 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <img width="150px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/NTT-Data-Logo.svg/2560px-NTT-Data-Logo.svg.png" alt="NTT Data Europe"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Solutions Assistant
          </Typography>
          <Typography>NTT DATA Europe</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Abr 2014 - Mar 2015
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
          <img width="150px" src="https://www.mindcovid.org/images/equipo/1605000347hospitaluniversitariopriancipedeasturias.jpg" alt="Hospital Universitario Príncipe de Asturias"/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Servicio Técnico de Sistemas
          </Typography>
          <Typography>Hospital Universitario Príncipe de Asturias</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </section>
  </>
  )
}

export default Experiencia