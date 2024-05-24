"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function CategoryTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{color:"white",
        "@media (max-width: 601px)": {
          height:"5vh",
        },
        }}
      >
        <Tab sx={{color:"white"}} value="one" label="Item One" />
        <Tab sx={{color:"white"}} value="two" label="Item Two" />
        <Tab sx={{color:"white"}} value="three" label="Item Three" />
      </Tabs>
    </Box>
  );
}
