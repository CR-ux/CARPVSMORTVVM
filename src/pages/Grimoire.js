// src/pages/Grimoire.js
import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

const Grimoire = () => (
  <Container>
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Grimoire
      </Typography>
      <Typography variant="body1">
        This section contains my lyrics and writings, styled as a handwritten spell book.
      </Typography>
      {/* Add more content here */}
    </Paper>
  </Container>
);

export default Grimoire;