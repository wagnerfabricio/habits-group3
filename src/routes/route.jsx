//finalizada porém ainda não implementada...

import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const token = localStorage.getItem("@habits:token");

  return (
    <ReactDOMRoute
      {...rest}
      // render={() => {
      //   return isPrivate && !token ? <Redirect to="/" /> : <Component />;
      // }}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : "/dashboard"} />
        );
      }}
    />
  );
};

export default Route;
