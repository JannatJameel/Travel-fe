import { Route, Switch } from "react-router";
// Components
import Home from "./Home";
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";
import FlightList from "./FlightList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/flights">
        <FlightList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
