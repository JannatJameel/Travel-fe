import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

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

const FlightCard = () => {
  const classes = useStyles();

  return (
    <div margin="10">
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography gutterBottom variant="subtitle1">
              6:00pm - 8:00pm
            </Typography>
            <Typography variant="body2" gutterBottom>
              Manama(BAH) - Riyadh(RUH)
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
            <Typography variant="subtitle1">$400</Typography>
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
