// src/pages/Coven.js
import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

const Coven = () => (
  <Container>
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Coven
      </Typography>
      <Typography variant="body1">
        Exclusive community forum and hermetic lodge for Patrons.
      </Typography>
      {/* Implement forum logic or embed a community platform here */}
    </Paper>
  </Container>
);

export default Coven;