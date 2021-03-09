import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 20,
    margin: "auto",
    maxWidth: 500,
  },
}));

const FlightCard = ({ flight }) => {
  const classes = useStyles();
  console.log("from card", flight);
  return (
    <div margin="10">
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography gutterBottom variant="subtitle1">
              {flight.departureTime} - {flight.arrivalTime}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {flight.departureAirport} - {flight.arrivalAirport}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Gulf Air
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1" gutterBottom>
              1h 20m
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle1">BD{flight.price}</Typography>
            <Typography variant="body2" color="textSecondary">
              Per Traveller
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default FlightCard;
