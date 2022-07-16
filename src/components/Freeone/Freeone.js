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
                    <Button>Free</Button>
                </Box>
            </div>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item><img style={{ width: 400 }} src="https://clinquant-bombolone-afdcfc.netlify.app/002.jpg" /></Item>
                    <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        <Button variant="text">Text</Button> <br />
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Item><img style={{ width: 400 }} src="https://clinquant-bombolone-afdcfc.netlify.app/003.jpg" /></Item>
                    <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        <Button variant="text">Text</Button> <br />
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Item><img style={{ width: 400 }} src="https://clinquant-bombolone-afdcfc.netlify.app/004.jpg" /></Item>
                    <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        <Button variant="text">Text</Button> <br />
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Item><img style={{ width: 400 }} src="https://clinquant-bombolone-afdcfc.netlify.app/005.jpg" /></Item>
                    <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        <Button variant="text">Text</Button> <br />
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Item><img style={{ width: 400 }} src="https://clinquant-bombolone-afdcfc.netlify.app/006.jpg" /></Item>
                    <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        <Button variant="text">Text</Button> <br />
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Item><img style={{ width: 400 }} src="https://clinquant-bombolone-afdcfc.netlify.app/007.jpg" /></Item>
                    <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        <Button variant="text">Text</Button> <br />
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Item><img style={{ width: 400 }} src="https://clinquant-bombolone-afdcfc.netlify.app/008.jpg" /></Item>
                    <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        <Button variant="text">Text</Button> <br />
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Item><img style={{ width: 400 }} src="https://clinquant-bombolone-afdcfc.netlify.app/009.jpg" /></Item>
                    <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        <Button variant="text">Text</Button> <br />
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Item><img style={{ width: 400 }} src="https://clinquant-bombolone-afdcfc.netlify.app/010.jpg" /></Item>
                    <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        <Button variant="text">Text</Button> <br />
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Item><img style={{ width: 400 }} src="https://clinquant-bombolone-afdcfc.netlify.app/011.jpg" /></Item>
                    <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        <Button variant="text">Text</Button> <br />
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Item><img style={{ width: 400 }} src="https://clinquant-bombolone-afdcfc.netlify.app/012.jpg" /></Item>
                    <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        <Button variant="text">Text</Button> <br />
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Item><img style={{ width: 400 }} src="https://clinquant-bombolone-afdcfc.netlify.app/013.jpg" /></Item>
                    <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        <Button variant="text">Text</Button> <br />
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
