import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPassengersInfo } from "../../store/actions/bookingActions";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const PassengersForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const passengersNum = localStorage.getItem("passengers");

  const count = [];
  while (count.length < passengersNum) count.push(`${count.length + 1}`);

  const passenger = [];
  while (passenger.length < passengersNum) {
    passenger.push({});
  }

  const [passengers, setPassengers] = useState(passenger);

  const handleChange = (event, i) => {
    passengers[i][event.target.name] = event.target.value;
    setPassengers(passengers);
  };

  const handleSubmit = () => {
    const keys = passengers.map((passenger) => Object.keys(passenger));
    const newKeys = keys.map((passenger) =>
      passenger.map((key) => key.slice(0, -1))
    );
    const values = passengers.map((passenger) => Object.values(passenger));
    let i = 0;
    const passengersInfo = [];
    while (i < keys.length) {
      const passengerInfo = Object.fromEntries([
        [newKeys[i][0], values[i][0]],
        [newKeys[i][1], values[i][1]],
        [newKeys[i][2], parseInt(values[i][2])],
      ]);
      passengersInfo.push(passengerInfo);
      i++;
    }
    dispatch(setPassengersInfo(passengersInfo));
  };

  return (
    <>
      {count.map((traveller) => (
        <>
          <Typography variant="h6" gutterBottom>
            Traveller {traveller}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name={`firstName${traveller}`}
                label="First name"
                fullWidth
                autoComplete="given-name"
                value={
                  passengers[parseInt(traveller) - 1][`firstName${traveller}`]
                }
                onChange={(event) =>
                  handleChange(event, parseInt(traveller) - 1)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name={`lastName${traveller}`}
                label="Last name"
                fullWidth
                autoComplete="family-name"
                value={
                  passengers[parseInt(traveller) - 1][`lastName${traveller}`]
                }
                onChange={(event) =>
                  handleChange(event, parseInt(traveller) - 1)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box mb={6}>
                <TextField
                  required
                  name={`passport${traveller}`}
                  label="Passport"
                  fullWidth
                  type="number"
                  value={
                    passengers[parseInt(traveller) - 1][`passport${traveller}`]
                  }
                  onChange={(event) =>
                    handleChange(event, parseInt(traveller) - 1)
                  }
                />
              </Box>
            </Grid>
          </Grid>
        </>
      ))}
      <div className={classes.buttons}>
        <Button
          className={classes.button}
          onClick={handleSubmit}
          variant="contained"
          // color="primary"
        >
          Test
        </Button>
      </div>
    </>
  );
};

export default PassengersForm;
