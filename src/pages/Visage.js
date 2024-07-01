// src/pages/Visage.js
import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

const Visage = () => (
  <Container>
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Visage
      </Typography>
      <Typography variant="body1">
        Access the documentary featuring and scored by me (behind a paywall).
      </Typography>
      {/* Add a Vimeo link and implement paywall logic here */}
    </Paper>
  </Container>
);

export default Visage;