import { useState } from "react";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
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

const FilterBar = () => {
  const classes = useStyles();

  const [airline, setAirline] = useState({
    test1: false,
    test2: false,
    test3: false,
  });

  const [price, setPrice] = useState([20, 200]);

  const handleAirline = (event) => {
    setAirline({ ...airline, [event.target.name]: event.target.checked });
    console.log("airline", airline);
  };
  const { test1, test2, test3 } = airline;

  const handlePrice = (event, newValue) => {
    setPrice(newValue);
    console.log("price", price);
  };

  return (
    <div>
      <br />
      <TextField
        label="Departure Time"
        type="time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br /> <br />
      <TextField
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={test1}
                  onChange={handleAirline}
                  name="test1"
                  color="primary"
                />
              }
              label="Test 1"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={test2}
                  onChange={handleAirline}
                  name="test2"
                  color="primary"
                />
              }
              label="Test 2"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={test3}
                  onChange={handleAirline}
                  name="test3"
                  color="primary"
                />
              }
              label="Test 3"
            />
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
