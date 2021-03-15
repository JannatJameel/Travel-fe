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

  const passenger = [];
  while (passenger.length < passengersNum) {
    passenger.push({
      firstName: "",
      lastName: "",
      passport: "",
    });
  }
  console.log("passenger", passenger);
  const [passengers, setPassengers] = useState(passenger);

  const handleChange = (event, i) => {
    console.log("event", event.target);
    passengers[i][event.target.name] = event.target.value;
    console.log("first passenger", passengers[0]);
    setPassengers(passengers);
  };
  // console.log("Test", [{ ...passenger[0], firstName: "Hi Hi" }]);

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
                value={passengers[parseInt(traveller) - 1].firstName}
                onChange={(event) =>
                  handleChange(event, parseInt(traveller) - 1)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                value={passengers[parseInt(traveller) - 1].lastName}
                onChange={(event) =>
                  handleChange(event, parseInt(traveller) - 1)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box mb={6}>
                <TextField
                  required
                  name="passport"
                  label="Passport"
                  fullWidth
                  value={passengers[parseInt(traveller) - 1].passport}
                  onChange={(event) =>
                    handleChange(event, parseInt(traveller) - 1)
                  }
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
