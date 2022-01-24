import React from 'react';
import { Box, FormControl, Input } from '@mui/material'

export const Main = () => {
  return (
    <Box component='main'>
      <Box component='div'>
        <video src='#' alt="video" />
        <Box component="form" display="flex" flexDirection="column">
          <FormControl>
            <Input type='text' id="name" placeholder='Twoje imie'/>
          </FormControl>
          <FormControl>
            <Input type='text' id="name" placeholder='Twoje nazwisko'/>
          </FormControl>
          <FormControl>
            <Input type='text' id="name" placeholder='Phone number'/>
          </FormControl>
          <FormControl>
            <Input type='text' id="name" placeholder='Email'/>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
};

