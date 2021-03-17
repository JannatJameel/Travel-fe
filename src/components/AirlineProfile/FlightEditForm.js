import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { flightUpdate } from "../../store/actions/flightActions";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// Components
import Loading from "../Loading";

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
  const history = useHistory();

  const { flightId } = useParams();
  const foundFlight = useSelector((state) =>
    state.flight.airlineFlights.find((flight) => flight.id === +flightId)
  );

  const [flight, setFlight] = useState(foundFlight ? foundFlight : null);

  useEffect(() => {
    if (foundFlight)
      setFlight({
        ...foundFlight,
        departureAirport: foundFlight.departureAirport.location,
        arrivalAirport: foundFlight.arrivalAirport.location,
      });
  }, [foundFlight]);

  const allAirports = useSelector((state) => state.flight.airports);

  if (!flight) return <Loading />;

  const departureAirports = allAirports.map((airport) => airport.location);
  const arrivalAirports = departureAirports.filter(
    (airport) => airport !== flight.departureAirport
  );

  const handleChange = (event) => {
    setFlight({ ...flight, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    if (flight.departureTime.length === 5)
      flight.departureTime = flight.departureTime + ":00";
    if (flight.arrivalTime.length === 5)
      flight.arrivalTime = flight.arrivalTime + ":00";
    flight.availableBusiness = +flight.availableBusiness;
    flight.availableEconomy = +flight.availableEconomy;
    flight.priceBusiness = +flight.priceBusiness;
    flight.priceEconomy = +flight.priceEconomy;
    console.log(flight);
    dispatch(flightUpdate(flight));
    history.replace("/");
  };

  return (
    <div>
      <div>
        <br /> <br />
        {/* Departure Airport */}
        <Autocomplete
          value={flight.departureAirport}
          onChange={(event, newValue) => {
            setFlight({ ...flight, departureAirport: newValue });
          }}
          options={departureAirports}
          getOptionLabel={(option) => option}
          className={classes.textField}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Departure Airport"
              variant="outlined"
            />
          )}
        />
        <br />
        {/* Arrival Airport */}
        <Autocomplete
          value={flight.arrivalAirport}
          onChange={(event, newValue) => {
            setFlight({ ...flight, arrivalAirport: newValue });
          }}
          options={arrivalAirports}
          getOptionLabel={(option) => option}
          className={classes.textField}
          renderInput={(params) => (
            <TextField {...params} label="Arrival Airport" variant="outlined" />
          )}
        />
        <br />
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
          name="availableEconomy"
          value={flight.availableEconomy}
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
      </div>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Edit
      </Button>
      <Link href="/dashboard" style={{ textDecoration: "none" }}>
        <Button className={classes.button} variant="contained" color="primary">
          Cancel
        </Button>
      </Link>
    </div>
  );
};

export default FlightForm;
