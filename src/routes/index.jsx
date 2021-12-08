import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Habits from "../pages/Habits";
import Goals from "../pages/Goals";
import Groups from "../pages/Groups";
import Activities from "../pages/Activities";
import About from "../pages/About";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Login} path="/login" />
        <Route component={SignUp} path="/signup" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Habits} path="/habits" />
        <Route component={Goals} path="/goals" />
        <Route component={Groups} path="/groups" />
        <Route component={Activities} path="/activities" />
        <Route component={About} path="/about" />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
