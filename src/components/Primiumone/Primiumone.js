import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
                <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                    <Button>Premium</Button>
                </Box>
            </div>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item><img style={{ width: 400 }} src="https://clinquant-bombolone-afdcfc.netlify.app/001.jpg" /></Item>
                    <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        <Button variant="text">Text</Button> <br />
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
