import * as React from 'react';
import dayjs from 'dayjs';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useSelector } from 'react-redux';


const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const deliveryEmailAddress = useSelector((state) => state.deliveryEmailAddress.deliveryEmailAddress);
  const travelerName = useSelector((state) => state.travelerName.travelerName);
  const sponsorBackground = useSelector((state) => state.sponsorBackground.sponsorBackground);
  const companion = useSelector((state) => state.companion.companion);
  const visitingCountry = useSelector((state) => state.visitingCountry.visitingCountry);
  const dailyBudget = useSelector((state) => state.dailyBudget.dailyBudget);
  const entireBudget = useSelector((state) => state.entireBudget.entireBudget);
  const whatsappInfo = useSelector((state) => state.whatsappInfo.whatsappInfo);
  const facebookInfo = useSelector((state) => state.facebookInfo.facebookInfo);
  const backgroundInfo = useSelector((state) => state.backgroundInfo.backgroundInfo);
  const selectedVisa = useSelector((state) => state.selectedVisa);
  const selectedSponsor = useSelector((state) => state.selectedSponsor)
  const startDate = useSelector((state) => state.startDate.startDate);
  const formattedStartDate = dayjs(startDate).format('MMMM D, YYYY');
  const endDate = useSelector((state) => state.endDate.endDate);
  const formattedEndDate = dayjs(endDate).format('MMMM D, YYYY');



  const handleNext = () => {
    setActiveStep(activeStep + 1);
    alert(`Start Date: ${formattedStartDate}`)
    alert(`End Date: ${formattedEndDate}`)
    alert(`Selected Sponsor: ${selectedSponsor}`)
    alert(`Selected Visa: ${selectedVisa}`)
    alert(`deliveryEmailAddress: ${deliveryEmailAddress}`)
    alert(`travelerName: ${travelerName}`)
    alert(`Sponsor Background: ${sponsorBackground}`);
    alert(`Companion: ${companion}`);
    alert(`Visiting Country: ${visitingCountry}`);
    alert(`Daily Budget: ${dailyBudget}`);
    alert(`Entire Budget: ${entireBudget}`);
    alert(`WhatsApp Info: ${whatsappInfo}`);
    alert(`Facebook Info: ${facebookInfo}`);
    alert(`Background Info: ${backgroundInfo}`);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" align="center" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            width: 350,
            height: 50,
            backgroundColor: 'orangered',
            marginTop: -5,
            borderRadius: 4,
            paddingTop: 1
          }}> 
          <Typography component="h3" variant="h6" align="center" color={'white'} >
            Visa Application Bundle
          </Typography>
          </Box>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}