import { useState } from "react";
// Styling
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const PassengersForm = () => {
  const passengersNum = localStorage.getItem("passengers");

  const count = [];
  while (count.length < passengersNum) count.push(`${count.length + 1}`);

  let index = 0;
  const passenger = [];
  while (passenger.length < passengersNum) {
    passenger.push({
      index: index,
      firstName: "",
      lastName: "",
      passport: "",
    });
    index++;
  }

  const [passengers, setPassengers] = useState(passenger);
  const [test, setTest] = useState(passenger[0]);

  const handleChange = (event) =>
    setPassengers([
      ...passengers,
      { ...passengers[0], [event.target.name]: event.target.value },
    ]);
  console.log("Test", [{ ...passenger[0], firstName: "Hi Hi" }]);

  console.log("Passengers array", passengers);

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
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                // value={test.firstName}
                value={passengers[parseInt(traveller) - 1].firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name={`lastName${traveller}`}
                label="Last name"
                fullWidth
                autoComplete="family-name"
                value={passenger[`lastName${traveller}`]}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box mb={6}>
                <TextField
                  required
                  name={`passport${traveller}`}
                  label="Passport"
                  fullWidth
                  value={passenger[`passport${traveller}`]}
                  onChange={handleChange}
                />
              </Box>
            </Grid>
          </Grid>
        </>
      ))}
    </>
  );
};

export default PassengersForm;
