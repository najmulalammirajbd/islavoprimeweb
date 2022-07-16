import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath:
            'https://clinquant-bombolone-afdcfc.netlify.app/001.jpg',
    },
    {
        imgPath:
            'https://clinquant-bombolone-afdcfc.netlify.app/002.jpg',
    },
    {
        imgPath:
            'https://clinquant-bombolone-afdcfc.netlify.app/003.jpg',
    },
    {
        imgPath:
            'https://clinquant-bombolone-afdcfc.netlify.app/004.jpg',
    },
    {
        imgPath:
            'https://clinquant-bombolone-afdcfc.netlify.app/005.jpg',
    },
    {
        imgPath:
            'https://clinquant-bombolone-afdcfc.netlify.app/006.jpg',
    },
    {
        imgPath:
            'https://clinquant-bombolone-afdcfc.netlify.app/007.jpg',
    },
    {
        imgPath:
            'https://clinquant-bombolone-afdcfc.netlify.app/008.jpg',
    },
    {
        imgPath:
            'https://clinquant-bombolone-afdcfc.netlify.app/009.jpg',
    },
    {
        imgPath:
            'https://clinquant-bombolone-afdcfc.netlify.app/010.jpg',
    },
    {
        imgPath:
            'https://clinquant-bombolone-afdcfc.netlify.app/011.jpg',
    },
    {
        imgPath:
            'https://clinquant-bombolone-afdcfc.netlify.app/012.jpg',
    },
    {
        imgPath:
            'https://clinquant-bombolone-afdcfc.netlify.app/013.jpg',
    },

];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: 5,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >

            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div >
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: '100%',
                                    display: 'block',
                                    maxWidth: "100%",
                                    overflow: 'hidden',
                                    width: '100%',
                                    textAlign: 'center',
                                    alignItems: 'center'
                                }}
                                src={step.imgPath}

                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >

                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}

                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;
