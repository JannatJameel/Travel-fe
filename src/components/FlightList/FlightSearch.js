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
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25.5ch",
    },
    display: "flex",
    flexWrap: "wrap",
    marginRight: 100,
    marginLeft: 130,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 200,
  },
  buttons: {
    marginLeft: 130,
  },
}));

const FlightSearch = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const search = useSelector((state) => state.flight.search);
  const user = useSelector((state) => state.user.user);
  let isAirline = null;
  if (user !== null) isAirline = user.isAirline;
  if (isAirline === true) {
    dispatch(airlineFlights());
    history.replace("/dashboard");
  }

  console.log("search length", Object.keys(search).length);

  const [roundtrip, setRoundtrip] = useState(
    Object.keys(search).length === 6 ? true : false
  );

  const [flight, setFlight] = useState(search);

  const handleChange = (event) => {
    if (!roundtrip) delete flight.returnDate;
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
    localStorage.setItem("roundtrip", roundtrip);
    history.push("/departure-flights");
  };

  return (
    <Container maxWidth="md">
      <div class="card w-75">
        <div class="card-body">
          <div className={classes.buttons}>
            <Button onClick={() => setRoundtrip(true)} color="primary">
              Roundtrip
            </Button>
            <Button onClick={() => setRoundtrip(false)} color="primary">
              One-way
            </Button>
          </div>
          <div className={classes.root}>
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

            <Button onClick={handleSubmit} variant="contained" color="primary">
              Search
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const travellers = ["1", "2", "3", "4", "5", "6"];
const flightClass = ["Economy", "Business"];

export default FlightSearch;
