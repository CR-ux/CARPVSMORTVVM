// src/pages/Lore.js
import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

const Lore = () => (
  <Container>
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Lore
      </Typography>
      <Typography variant="body1">
        Welcome to the biography section. Here you will find detailed information about my journey, influences, and evolution as an artist, formatted as an archaic epic or lost tome.
      </Typography>
      {/* Add more content here */}
    </Paper>
  </Container>
);

export default Lore;