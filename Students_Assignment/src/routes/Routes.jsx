import { Route, Switch } from "react-router-dom";
import { StudentComp } from "../components/Students";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <StudentComp />
      </Route>
    </Switch>
  );
}
