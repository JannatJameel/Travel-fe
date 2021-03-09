
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useState } from "react";
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

  //   const [value, setValue] = useState("");

  const [flight, setFlight] = useState({
    departureDate: "",
    returnDate: "",
  });
  console.log(flight);
  const handleSubmit = () => {
    console.log(flight);
  };

  const handleChange = (event) => {
    setFlight({ ...flight, [event.target.name]: event.target.value });
    console.log("SUBMIT", flight);
  };
  //Show and hide element
  var hidden = false;
  function action() {
    hidden = !hidden;
    if (hidden) {
      document.getElementById("togglee").style.visibility = "hidden";
    } else {
      document.getElementById("togglee").style.visibility = "visible";
    }
  }
  return (
    <Container maxWidth="md">
      <div class="card w-75">
        <div class="card-body">
          <h5 class="card-title">Flights</h5>

          <Button onClick={action} color="primary">
            Roundtrip
          </Button>
          <Button onClick={action} color="primary">
            One-way
          </Button>

          <br />
          {/* Departure Flight */}
          <Autocomplete
            value={flight.departureLocation}
            name="departureLocation"
            id="combo-box-demo"
            onChange={(event, newValue) => {
              setFlight({ ...flight, departureLocation: newValue });
            }}
            options={departureLocation}
            getOptionLabel={(option) => option}
            style={{ width: 200 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Departure Location"
                variant="outlined"
              />
            )}
          />
          {/* Return Flight */}
          <div id="togglee">
            <Autocomplete
              value={flight.returnLocation}
              name="returnLocation"
              id="combo-box-demo"
              onChange={(event, newValue) => {
                setFlight({ ...flight, returnLocation: newValue });
              }}
              options={returnLocation}
              getOptionLabel={(option) => option}
              style={{ width: 200 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Return Location"
                  variant="outlined"
                />
              )}
            />
          </div>

          <br />
          {/* Travelers */}
          <Autocomplete
            value={flight.travelers}
            name="travelers"
            id="combo-box-demo"
            onChange={(event, newValue) => {
              setFlight({ ...flight, travelers: newValue });
            }}
            options={travelers}
            getOptionLabel={(option) => option}
            style={{ width: 200 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Number of Travelers"
                variant="outlined"
              />
            )}
          />
          {/* Flying Class */}
          <Autocomplete
            value={flight.flightClass}
            name="flightClass"
            id="combo-box-demo"
            onChange={(event, newValue) => {
              setFlight({ ...flight, flightClass: newValue });
            }}
            options={flightClass}
            getOptionLabel={(option) => option}
            style={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} label="Flying Class" variant="outlined" />
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
              id="date"
              label="Departure Date"
              type="date"
              defaultValue="2021-03-08"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          {/* Return Date */}

          <form className={classes.container} noValidate>
            <TextField
              name="returnDate"
              value={flight.returnDate}
              onChange={handleChange}
              variant="outlined"
              id="date"
              label="Return Date"
              type="date"
              defaultValue="2021-03-08"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>

          <Button onClick={handleSubmit} variant="contained" color="primary">
            Search
          </Button>
        </div>
      </div>
    </Container>
  );
};
const departureLocation = ["Bahrain", "UAE", "KSA"];
const returnLocation = ["Bahrain", "UAE", "KSA"];
const travelers = ["1 Adult", "2 Adults", "3 Adults"];
const flightClass = ["Economy", "Business Class", "First Class"];

export default Home;
//Home branch

