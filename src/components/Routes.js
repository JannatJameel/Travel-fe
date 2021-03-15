import { Route, Switch } from "react-router";
// Components
import Home from "./Home";
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";
import UserProfile from "./UserProfile";
import DepartureFlights from "./FlightList/DepartureFlights";
import ReturnFlights from "./FlightList/ReturnFlights";
import FlightReview from "./Booking/FlightReview";
import Checkout from "./Booking/Checkout";

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
        <FlightReview />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/my-profile">
        <UserProfile />
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
