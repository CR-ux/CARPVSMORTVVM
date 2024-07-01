// src/pages/Rituals.js
import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

const Rituals = () => (
  <Container>
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Rituals
      </Typography>
      <Typography variant="body1">
        Documentation of my performance art, styled as OVID's Transfiguration.
      </Typography>
      {/* Add more content here */}
    </Paper>
  </Container>
);

export default Rituals;