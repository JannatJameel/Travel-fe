import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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

const DepartureDate = () => {
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate>
      <TextField
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
  );
};

export default DepartureDate;
