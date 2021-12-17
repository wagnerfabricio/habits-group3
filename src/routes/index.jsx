import { Switch } from "react-router-dom";
import Route from "./route";
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
        <Route component={Dashboard} path="/dashboard" isPrivate />
        <Route component={Habits} path="/habits" isPrivate />
        <Route component={Goals} path="/goals" isPrivate />
        <Route component={Groups} path="/groups" isPrivate />
        <Route component={Activities} path="/activities" isPrivate />
        <Route component={About} path="/about" />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
