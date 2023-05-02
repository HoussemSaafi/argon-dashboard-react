/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import MovingText from 'react-moving-text'
import { motion, useScroll } from "framer-motion";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";
import Index from "views/Index";
import Button3D from "components/Button3D";

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
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
  const Letters = ['a'];
  return (
    <>
       <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="main-content" ref={mainContent}>
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  {Letters.map((letter, index) =>
                    <MovingText
                      type="fadeIn"
                      duration="1800ms"
                      delay="index * 100ms"
                      direction="alternate-reverse"
                      timing="linear"
                      iteration="infinite"
                      fillMode="forwards">
                      <h10 className="logotitle" style={{color:'white', fontSize:50}}>JobMagnet.io <i class="ni ni-atom"></i></h10>
                    </MovingText>)}
                  <p className="text-lead text-light">
                      Job search got you stuck? Let JobMagnet pull you out of that rut!
                  </p>
                </Col>
              </Row>
              <br></br>
              <Row className="justify-content-center">
              </Row>     
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Index/>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
