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

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

const Functionalities = () => {
    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                <Container fluid>
                    <div className="header-body">
                        {/* Card stats */}
                        <Row>
                            <Col md="6">
                                <motion.div
                                    className="box"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Card className="card-stats mb-4 mb-xl-0">
                                        <CardBody>
                                            <Row>
                                                <div className="col">
                                                    <CardTitle
                                                        tag="h5"
                                                        className="text-uppercase text-muted mb-0"
                                                    >
                                                        General key notes.
                                                    </CardTitle>
                                                    <span className="h2 font-weight-bold mb-0">
                                                        Score My Resume
                                                    </span>
                                                </div>
                                                <Col className="col-auto">
                                                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                                        <i className="ni ni-single-copy-04" />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className="mt-3 mb-0 text-muted text-sm">
                                                <span className="text-nowrap">Get expert feedback on your resume</span>
                                            </p>
                                        </CardBody>
                                    </Card>
                                </motion.div>
                            </Col>
                            <Col md="6">
                                <motion.div
                                    className="box"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Card className="card-stats mb-4 mb-xl-0">
                                        <CardBody>
                                            <Row>
                                                <div className="col">
                                                    <CardTitle
                                                        tag="h5"
                                                        className="text-uppercase text-muted mb-0"
                                                    >
                                                        Specific help.
                                                    </CardTitle>
                                                    <span className="h2 font-weight-bold mb-0">Targeted Resume</span>
                                                </div>
                                                <Col className="col-auto">
                                                    <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                                        <i className="ni ni-ruler-pencil" />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className="mt-3 mb-0 text-muted text-sm">
                                                <span className="text-nowrap">Tailor your resume to a job description</span>
                                            </p>
                                        </CardBody>
                                    </Card>
                                </motion.div>
                            </Col>
                        </Row>

                    </div>
                </Container>
            </div>
        </>
    );
};

export default Functionalities;
