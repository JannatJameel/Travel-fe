import { Route, Switch } from "react-router";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
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
      <Route path="/flight">
        <FlightList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
