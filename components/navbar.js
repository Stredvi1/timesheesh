import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import * as Icon from '@mui/icons-material/';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Icon.LoupeOutlined  />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TimeShift
          </Typography>
          <Button color="inherit" href={'/newUser'}>Přidat uživatele</Button>
          <Button color="inherit">Odhlášení</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}