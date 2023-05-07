import React from 'react'
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

export default function Basic() {
    const mainContent = React.useRef(null);
    const location = useLocation();
    const getRoutes = (routes) => {
      return routes.map((prop, key) => {
        if (prop.layout === "/upload") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        } else {
          return null;
        }
      });
    };
  
  
  return (
    <Switch>
    {getRoutes(routes)}
    <Redirect from="*" to="/upload/job" />
  </Switch>
)
}
