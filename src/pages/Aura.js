// src/pages/Aura.js
import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

const Aura = () => (
  <Container>
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Aura
      </Typography>
      <Typography variant="body1">
        Access my radio show and podcast (behind a paywall).
      </Typography>
      {/* Add RSS feed link and implement paywall logic here */}
    </Paper>
  </Container>
);

export default Aura;