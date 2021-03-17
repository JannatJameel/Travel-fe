// Styling
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
    maxWidth: 700,
  },
}));

const FlightCard = ({ flight }) => {
  const classes = useStyles();

  return (
    <div margin="10">
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography gutterBottom variant="subtitle1">
              {flight.departureDate.split("-").reverse().join("-")}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              {flight.departureTime} - {flight.arrivalTime}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {flight.departureAirport.name} ({flight.departureAirport.location}
              ) - {flight.arrivalAirport.name} ({flight.arrivalAirport.location}
              )
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {flight.airline.name}
            </Typography>
          </Grid>
          <Grid item xs>
            {/* <Typography variant="body1" gutterBottom>
              1h 20m
            </Typography> */}
          </Grid>
          <Grid item xs>
            <br />
            <br />
            <Typography variant="body2">
              Economy BD {flight.priceEconomy}
            </Typography>
            <Typography variant="body2">
              Business BD {flight.priceBusiness}
            </Typography>
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
