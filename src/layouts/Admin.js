import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar.js";
import routes from "routes.js";
import SideBarNav from "components/SideBarNav";
import ScanPage from "views/ScanPage";

const Admin = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
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
    <>
      {/* <Sidebar
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/argon-react.png"),
          imgAlt: "..."
        }}
      /> */}

<div style={{ display: 'flex', height: '100vh' }}>

    <SideBarNav/>

    <div style={{ flex: 1 }}>


    <div className="main-content">
      <div><ScanPage/></div>
      </div>

  </div>

</div>

    </>
  );
};

export default Admin;
