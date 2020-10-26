import React, { useEffect, useState } from "react";
import { Col, Container, Image, Nav, Row, Button } from "react-bootstrap";
import imageFile from "../../assets/img/loginimage.jpg";
import "./register.css";
import { AnimatedSwitch } from "react-router-transition";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Role from "./section/role";
import Register from "./section/register"
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
export default function Auth() {
  return (
    <Container className="d-flex bg-white justify-self-center align-self-center p-0 my-5">
      <Col className="col-4 d-flex justify-content-start p-0 LoginSideImage">
        <Image style={{ width: "inherit" }} src={imageFile} />
      </Col>
      <Col>
        <Row>
          <Nav
            variant="pills"
            className="d-flex align-items-center justify-content-end w-100 m-4"
          >
            <Nav.Item>
              <Nav.Link href="/home" className="vet-title-2">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="vet-title-2">
                Khusus Doctor
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="vet-title-2">
                Cari Klinik
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">
                <Button className="vet-title-2 px-4 v-text-donker v-bg-mustard border-0">
                  Login
                </Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Switch>
          <Route exact path="/auth" component={Role} />
          <Route exact path="/auth/register/:id" component={Register} />
        </Switch>
        <Row className="justify-content-center">
        <p className="vet-body-1 v-text-donker">
          Already have account? Please{" "}
          <a href="#" className="v-text-mustard">
            Sign In
          </a>
        </p>
      </Row>
      </Col>
    </Container>
  );
}