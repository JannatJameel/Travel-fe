import { Route, Switch } from "react-router";
// Components
import Home from "./Home";
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";
import UserProfile from "./UserProfile";
import AirlineProfile from "./AirlineProfile";
import FlightEditForm from "./AirlineProfile/FlightEditForm";
import DepartureFlightsPage from "./FlightList/DepartureFlightsPage";
import ReturnFlightsPage from "./FlightList/ReturnFlightsPage";
import FlightReview from "./Booking/FlightReview";
import Checkout from "./Booking/Checkout";

const Routes = () => {
  return (
    <Switch>
      <Route path="/departure-flights">
        <DepartureFlightsPage />
      </Route>
      <Route path="/return-flights">
        <ReturnFlightsPage />
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
      <Route path="/dashboard">
        <AirlineProfile />
      </Route>
      <Route path="/flights/:flightId/edit">
        <FlightEditForm />
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
