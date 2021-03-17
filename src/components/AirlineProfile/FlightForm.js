import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: "flex",
  //   flexWrap: "wrap",
  // },
  textField: {
    marginLeft: "40%",
    width: "40ch",
  },
  button: {
    marginLeft: "50%",
    marginTop: "2%",
  },
}));

const FlightForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [flight, setFlight] = useState({});

  const allAirports = useSelector((state) => state.flight.airports);
  const departureAirports = allAirports.map((airport) => airport.location);
  const arrivalAirports = departureAirports.filter(
    (airport) => airport !== flight.departureAirport
  );

  const handleChange = (event) => {
    setFlight({ ...flight, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {};

  return (
    <div>
      <div>
        {/* Departure Airport */}
        <Autocomplete
          id="departureAirport"
          value={flight.departureAirport}
          onChange={(event, newValue) => {
            setFlight({ ...flight, departureAirport: newValue });
          }}
          options={departureAirports}
          getOptionLabel={(option) => option}
          style={{ width: 200 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Departure Airport"
              variant="outlined"
            />
          )}
        />
        <br /> <br />
        {/* Arrival Airport */}
        <Autocomplete
          id="arrivalAirports"
          value={flight.arrivalAirport}
          onChange={(event, newValue) => {
            setFlight({ ...flight, arrivalAirport: newValue });
          }}
          options={arrivalAirports}
          getOptionLabel={(option) => option}
          style={{ width: 200 }}
          renderInput={(params) => (
            <TextField {...params} label="Arrival Airport" variant="outlined" />
          )}
        />
        <br /> <br />
        {/* Departure Date */}
        <TextField
          name="departureDate"
          value={flight.departureDate}
          onChange={handleChange}
          variant="outlined"
          label="Departure Date"
          type="date"
          defaultValue={new Date()}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br /> <br />
        {/* Arrival Date */}
        <TextField
          name="arrivalDate"
          value={flight.arrivalDate}
          onChange={handleChange}
          variant="outlined"
          label="Arrival Date"
          type="date"
          defaultValue={new Date()}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br /> <br />
        {/* Departure Time */}
        <TextField
          name="departureTime"
          value={flight.departureTime}
          onChange={handleChange}
          variant="outlined"
          label="Departure Time"
          type="time"
          defaultValue={new Date()}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br /> <br />
        {/* Arrival Time */}
        <TextField
          name="arrivalTime"
          value={flight.arrivalTime}
          onChange={handleChange}
          variant="outlined"
          label="Arrival Time"
          type="time"
          defaultValue={new Date()}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br /> <br />
        {/* Business Seats */}
        <TextField
          name="availableBusiness"
          value={flight.availableBusiness}
          onChange={handleChange}
          variant="outlined"
          label="Business Seats"
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br /> <br />
        {/* Economy Seats */}
        <TextField
          name="economyBusiness"
          value={flight.economyBusiness}
          onChange={handleChange}
          variant="outlined"
          label="Economy Seats"
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br /> <br />
        {/* Business Price */}
        <TextField
          name="priceBusiness"
          value={flight.priceBusiness}
          onChange={handleChange}
          variant="outlined"
          label="Business Price"
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br /> <br />
        {/* Economy Price */}
        <TextField
          name="priceEconomy"
          value={flight.priceEconomy}
          onChange={handleChange}
          variant="outlined"
          label="Economy Price"
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Add
      </Button>
    </div>
  );
};

export default FlightForm;
