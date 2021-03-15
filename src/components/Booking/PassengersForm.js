// Styling
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";

const PassengersForm = () => {
  const passengers = localStorage.getItem("passengers");

  const count = [];
  while (count.length < passengers) count.push(`${count.length + 1}`);
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="phone"
                label="Phone Number"
                fullWidth
                autoComplete="phone"
                helperText="with country code"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="passport"
                label="Passport Number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Box mb={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label="Main contact person"
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
