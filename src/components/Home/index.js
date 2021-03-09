import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAirports } from "../../store/actions/flightActions";
import { searchDepartures } from "../../store/actions/flightActions";
import { searchReturns } from "../../store/actions/flightActions";
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
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  dispatch(fetchAirports());

  const [roundtrip, setRoundtrip] = useState(false);

  const [flight, setFlight] = useState(
    roundtrip ? { departureDate: "", returnDate: "" } : { departureDate: "" }
  );

  const handleChange = (event) => {
    setFlight({ ...flight, [event.target.name]: event.target.value });
    console.log("SUBMIT", flight);
  };

  const handleSubmit = () => {
    dispatch(searchDepartures(flight));
    dispatch(searchReturns(flight));
    history.push("/flights");
  };

  return (
    <Container maxWidth="md">
      <div class="card w-75">
        <div class="card-body">
          <h5 class="card-title">Flights</h5>

          <Button onClick={() => setRoundtrip(true)} color="primary">
            Roundtrip
          </Button>
          <Button onClick={() => setRoundtrip(false)} color="primary">
            One-way
          </Button>

          <br />
          {/* Departure Flight */}
          <Autocomplete
            id="departureDestination"
            value={flight.departureAirport}
            onChange={(event, newValue) => {
              setFlight({ ...flight, departureAirport: newValue });
            }}
            options={departureAirport}
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

          {/* Return Flight */}
          <div id="togglee">
            <Autocomplete
              id="returnLocation"
              value={flight.returnAirport}
              onChange={(event, newValue) => {
                setFlight({ ...flight, returnAirport: newValue });
              }}
              options={returnAirport}
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
          </div>

          <br />

          {/* Travellers */}
          <Autocomplete
            id="travellers"
            value={flight.passengers}
            onChange={(event, newValue) => {
              setFlight({ ...flight, passengers: parseInt(newValue) });
            }}
            options={travelers}
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
          <form className={classes.container} noValidate>
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
          </form>

          <br />

          {/* Return Date */}
          {roundtrip && (
            <form className={classes.container} noValidate>
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
            </form>
          )}

          <Button onClick={handleSubmit} variant="contained" color="primary">
            Search
          </Button>
        </div>
      </div>
    </Container>
  );
};
const departureAirport = ["BH", "UAE", "KSA"];
const returnAirport = ["BH", "UAE", "KSA"];
const travelers = ["1", "2", "3"];
const flightClass = ["Economy", "Business"];

export default Home;
