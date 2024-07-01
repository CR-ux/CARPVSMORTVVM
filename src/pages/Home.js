// src/pages/Home.js
import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

const Home = () => (
  <Container>
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to My Artist Website
      </Typography>
      <Typography variant="body1">
        This is the home of all my creative endeavors. Explore the sections to learn more.
      </Typography>
      {/* Add more content here */}
    </Paper>
  </Container>
);

export default Home;