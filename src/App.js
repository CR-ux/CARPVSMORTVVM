// src/App.js
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Azoth from './pages/AZOTH';
import Aura from './pages/Aura';
import Coven from './pages/Coven';
import Grimoire from './pages/Grimoire';
import Lore from './pages/Lore';
import Rituals from './pages/Rituals';
import Sigils from './pages/Sigils';
import Visage from './pages/Visage';
import { themeOptions } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Lore />} />
          <Route path="/grimoire" element={<Grimoire />} />
          <Route path="/rituals" element={<Rituals />} />
          <Route path="/sigils" element={<Sigils />} />
          <Route path="/visage" element={<Visage />} />
          <Route path="/aura" element={<Aura />} />
          <Route path="/coven" element={<Coven />} />
          <Route path="/azoth" element={<Azoth />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}