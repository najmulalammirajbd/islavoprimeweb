import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
    {
        label: '১ম ধাপ',
        description: `প্রথমে আপনি অ্যাকাউন্ট তৈরি করুন অথবা লগইন করুন`,
    },
    {
        label: '২য় ধাপ',
        description:
            'নির্দিস্ট নাম্বারে টাকা প্রেরণ করে ফরম পূরণ করুন',
    },
    {
        label: '৩য় ধাপ',
        description: `অটোমেটিক্যালি আপনাকে প্রিমিয়াম অপশনে নিয়ে যাওয়া হবে`,
    },
];

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption"></Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'শেষকরুন' : 'পরবর্তী'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        পূর্ববর্তী
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>অভিনন্দন আপনি এখন প্রিমিয়াম গ্রাহক</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        ধাপগুলো পূণরায় দেখুন
                    </Button>
                </Paper>
            )}
        </Box>
    );
}
