import { Route, Switch } from "react-router";
// Components
import Home from "./Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
