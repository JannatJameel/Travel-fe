import { Route, Switch } from "react-router";
// Components
import Home from "./Home";
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";
import DepartureFlights from "./FlightList/DepartureFlights";
import ReturnFlights from "./FlightList/ReturnFlights";
import Booking from "./Booking";

const Routes = () => {
  return (
    <Switch>
      <Route path="/departure-flights">
        <DepartureFlights />
      </Route>
      <Route path="/return-flights">
        <ReturnFlights />
      </Route>
      <Route path="/booking">
        <Booking />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
