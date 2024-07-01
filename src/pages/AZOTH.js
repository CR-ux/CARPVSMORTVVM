// src/pages/Azoth.js
import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

const Azoth = () => (
  <Container>
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h1" gutterBottom>
        AZOTH
      </Typography>
      <Typography variant="body1">
        Detailed magick system documentation and reference materials for personalised monthly tarot readings with original score composition.
      </Typography>
      {/* Add detailed documentation here */}
    </Paper>
  </Container>
);

export default Azoth;