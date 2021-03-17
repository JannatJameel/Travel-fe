import { useState } from "react";
import decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../../store/actions/bookingActions";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// Components
import BookingReview from "./BookingReview";
import PaymentForm from "./PaymentForm";
import PassengersForm from "./PassengersForm";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Travellers details", "Payment details", "Review all trips"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PassengersForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <BookingReview />;
    default:
      throw new Error("Unknown step");
  }
}

const Checkout = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const bookings = useSelector((state) => state.booking.bookings);
  const passengers = useSelector((state) => state.booking.passengers);

  const token = localStorage.getItem("myToken");

  let userId = null;
  if (token !== null) userId = decode(localStorage.getItem("myToken")).id;

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleCheckout = () => {
    let cart = [];
    bookings.length === 2
      ? (cart = {
          user: userId,
          flights: [
            {
              flightId: bookings[0].id,
              flightClass: localStorage.getItem("class"),
              passengers: parseInt(localStorage.getItem("passengers")),
            },
            {
              flightId: bookings[1].id,
              flightClass: localStorage.getItem("class"),
              passengers: parseInt(localStorage.getItem("passengers")),
            },
          ],
          passengers: passengers,
        })
      : (cart = {
          user: userId,
          flights: [
            {
              flightId: bookings[0].id,
              flightClass: localStorage.getItem("class"),
              passengers: parseInt(localStorage.getItem("passengers")),
            },
          ],
          passengers: passengers,
        });
    dispatch(checkout(cart));
    history.replace("/");
    alert("Thank you for booking with us!");
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Complete Your Booking
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for booking with us.
                </Typography>
                {/* <Typography variant="subtitle1">
                  If you need to add more text
                </Typography> */}
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {!(activeStep === steps.length - 1) && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Next
                    </Button>
                  )}
                  {activeStep === steps.length - 1 && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleCheckout}
                      className={classes.button}
                    >
                      checkout
                    </Button>
                  )}
                </div>
              </>
            )}
          </>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
