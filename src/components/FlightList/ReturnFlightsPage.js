import { useState } from "react";
import { useSelector } from "react-redux";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
// Components
import NavBar from "../Navbar";
import FilterBar from "./FilterBar";
import FlightSearch from "./FlightSearch";
import ReturnFlights from "./ReturnFlights";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ReturnFlightsPage = () => {
  const classes = useStyles();

  const airlinesList = useSelector((state) => state.flight.airlines).map(
    (airline) => airline.name
  );

  const entries = airlinesList.map((airline) => [airline, false]);
  const airlines = Object.fromEntries(entries);

  const [flightTime, setFlightTime] = useState({
    departureTime: "",
    arrivalTime: "",
  });

  const [airline, setAirline] = useState(airlines);
  const [price, setPrice] = useState([0, 1000]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <NavBar />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <FilterBar
              flightTime={flightTime}
              setFlightTime={setFlightTime}
              airlinesList={airlinesList}
              airlines={airlines}
              airline={airline}
              setAirline={setAirline}
              price={price}
              setPrice={setPrice}
            />
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <FlightSearch />
        <ReturnFlights
          flightTime={flightTime}
          airline={airline}
          price={price}
        />
      </main>
    </div>
  );
};

export default ReturnFlightsPage;
