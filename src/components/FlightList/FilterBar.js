// Styling
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    marginLeft: "5%",
    margin: theme.spacing(3),
  },
  textField: {
    marginLeft: "5%",
    width: "20ch",
  },
  range: {
    marginLeft: "5%",
    width: 200,
  },
}));

const FilterBar = ({
  flightTime,
  setFlightTime,
  airlinesList,
  airlines,
  airline,
  setAirline,
  price,
  setPrice,
}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setFlightTime({
      ...flightTime,
      [event.target.name]: event.target.value + ":00",
    });
  };

  const handleAirline = (event) => {
    setAirline({ ...airline, [event.target.name]: event.target.checked });
  };

  const handlePrice = (event, newValue) => {
    setPrice(newValue);
  };

  return (
    <div>
      <br />
      <TextField
        name="departureTime"
        value={flightTime.departureTime}
        onChange={handleChange}
        label="Departure Time"
        type="time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br /> <br />
      <TextField
        name="arrivalTime"
        value={flightTime.arrivalTime}
        onChange={handleChange}
        label="Arrival Time"
        type="time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
      <br />
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Airlines</FormLabel>
          <FormGroup>
            {airlinesList.map((airline, i) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={airlines[i]}
                    onChange={handleAirline}
                    name={airline}
                    color="primary"
                  />
                }
                label={airline}
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
      <div className={classes.range}>
        <FormLabel component="legend">Price (BD)</FormLabel>
        <Slider
          value={price}
          onChange={handlePrice}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          max={1000}
        />
      </div>
    </div>
  );
};

export default FilterBar;
