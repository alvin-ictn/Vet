import React, { useEffect, useState } from "react";
import { Button, Col, Nav, Row, Form } from "react-bootstrap";
import "../register.css";
import { VetMail, VetUser, VetLock, VetEye} from "../../../assets/icons";
import { useParams } from "react-router-dom";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
export default function Register() {
  const [isLoading, setLoading] = useState(false);
  const [option, setOption] = useState(true);
  const [highlight, setHighlight] = useState(0);
  let { id } = useParams();

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleChoice = (num = 0) => {
    setHighlight(num);
    setOption(false);
  };

  const handleClick = () => setLoading(true);
  return (
    <>
      <Row className="mx-4 justify-content-center flex-column">
        <p className="vet-heading v-text-donker">Buat Akun Baru</p>
        <p className="vet-body-1 v-text-donker">
          Daftarkan dirimu untuk menggunakan Aplikasi Kami
        </p>
      </Row>
      <Row className="register-section m-4 px-5 d-flex justify-content-center">
        <Form className="register-form w-100 mx-5 registerForm px-5">
          <Form.Group className="form-register">
            <Form.Control type="email" placeholder="Alamat Email Kamu" />
          </Form.Group>
          <Form.Group className="form-register">
            <Form.Control type="text" placeholder="Username Kamu" />
          </Form.Group>
          <Form.Group className="form-register">
            <Form.Control type="password" placeholder="Password Kamu" />
            <VetEye className="register-eye"/>
          </Form.Group>
          <Form.Group className="form-register">
            <Form.Control type="text" placeholder="Nomor Telefon Kamu" />
          </Form.Group>
          <Row className="p-0 m-0 d-flex justify-content-center">
            <Button
              className="v-bg-mustard v-text-donker border-0 font-weight-bold w-100"
              disabled={isLoading || option}
              onClick={!isLoading ? handleClick : null}
            >
              {isLoading ? "Loading…" : "Selanjutnya"}
            </Button>
          </Row>
        </Form>
      </Row>
    </>
  );
}
