import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setSearch,
  searchDepartures,
  searchReturns,
  airlineFlights,
} from "../../store/actions/flightActions";
// Styling
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.user.user);
  let isAirline = null;
  if (user !== null) isAirline = user.isAirline;
  if (isAirline === true) {
    dispatch(airlineFlights());
    history.replace("/dashboard");
  }

  const [roundtrip, setRoundtrip] = useState(false);

  const [flight, setFlight] = useState(
    roundtrip ? { departureDate: "", returnDate: "" } : { departureDate: "" }
  );

  const handleChange = (event) => {
    setFlight({ ...flight, [event.target.name]: event.target.value });
  };

  const allAirports = useSelector((state) => state.flight.airports);
  const departureAirports = allAirports.map((airport) => airport.location);
  const arrivalAirports = departureAirports.filter(
    (airport) => airport !== flight.departureAirport
  );

  const handleSubmit = () => {
    dispatch(setSearch(flight));
    dispatch(searchDepartures(flight, history));
    if (roundtrip) dispatch(searchReturns(flight));
    localStorage.setItem("passengers", flight.passengers);
    localStorage.setItem("class", flight.flightClass);
    history.push("/departure-flights");
  };

  return (
    <Container maxWidth="md">
      <div class="card w-75">
        <div class="card-body">
          <br />
          <Button onClick={() => setRoundtrip(true)} color="primary">
            Roundtrip
          </Button>
          <Button onClick={() => setRoundtrip(false)} color="primary">
            One-way
          </Button>
          <br />
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
          <br />
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
              <TextField
                {...params}
                label="Arrival Airport"
                variant="outlined"
              />
            )}
          />
          <br />
          {/* Travellers */}
          <Autocomplete
            id="travellers"
            value={flight.passengers}
            onChange={(event, newValue) => {
              setFlight({ ...flight, passengers: parseInt(newValue) });
            }}
            options={travellers}
            getOptionLabel={(option) => option}
            style={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} label="Travellers" variant="outlined" />
            )}
          />
          <br />
          {/* Flying Class */}
          <Autocomplete
            id="flightClass"
            value={flight.flightClass}
            onChange={(event, newValue) => {
              setFlight({ ...flight, flightClass: newValue.toLowerCase() });
            }}
            options={flightClass}
            getOptionLabel={(option) => option}
            style={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} label="Class" variant="outlined" />
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
          <br />
          <br />
          {/* Return Date */}
          {roundtrip && (
            <TextField
              name="returnDate"
              value={flight.returnDate}
              onChange={handleChange}
              variant="outlined"
              label="Return Date"
              type="date"
              defaultValue={new Date()}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
          <br /> <br />
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Search
          </Button>
        </div>
      </div>
    </Container>
  );
};

const travellers = ["1", "2", "3", "4", "5", "6"];
const flightClass = ["Economy", "Business"];

export default Home;
