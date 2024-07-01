// src/pages/Sigils.js
import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

const Sigils = () => (
  <Container>
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Sigils
      </Typography>
      <Typography variant="body1">
        Documentation of my visual art.
      </Typography>
      {/* Add more content here */}
    </Paper>
  </Container>
);

export default Sigils;