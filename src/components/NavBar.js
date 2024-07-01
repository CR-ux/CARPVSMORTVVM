// src/components/NavBar.js
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import createTheme from '@mui/material/styles/createTheme';
import React from 'react';
import { Link } from 'react-router-dom';
import { themeOptions } from '../theme';

const theme = createTheme({themeOptions});

const Navbar = () => (
  <AppBar position="static">
    <Toolbar themeOptions={theme}>
      <Typography variant="h4" style={{ flexGrow: 0.2 }} sx={{ color: 'text.primary', fontSize: 17 }}>
       CARPVS MORTVVM RP et al-
      </Typography>
      <Box>
      <Button sx={{ color: 'text.primary', fontSize: 70 }} color="inherit" component={Link} to="/">Lore</Button>
      </Box><Box>
      <Button sx={{ color: 'text.primary', fontSize: 70}} color="inherit" component={Link} to="/grimoire">Grimoire</Button>
     </Box><Box>
      <Button sx={{ color: 'text.primary', fontSize: 70, fontWeight: 'medium' }} color="inherit" component={Link} to="/rituals">Rituals</Button>
      </Box><Box>
      <Button sx={{ color: 'text.primary', fontSize: 70, fontWeight: 'medium' }} color="inherit" component={Link} to="/sigils">Sigils</Button>
      </Box><Box>
      <Button sx={{ color: 'text.primary', fontSize: 70, fontWeight: 'medium' }} color="inherit" component={Link} to="/visage">Visage</Button>
      </Box><Box>
      <Button sx={{ color: 'text.primary', fontSize: 70, fontWeight: 'medium' }} color="inherit" component={Link} to="/aura">Aura</Button>
      </Box><Box>
      <Button sx={{ color: 'text.primary', fontSize: 70, fontWeight: 'medium' }} color="inherit" component={Link} to="/coven">Coven</Button>
      </Box><Box>
      <Button sx={{ color: 'text.primary', fontSize: 20, fontWeight: 'medium', typography: {fontFamily: 'Times New Roman'}}} color="inherit" component={Link} to="/azoth">xP>sO;b</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;