import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <Container style={{ marginTop: '50px', textAlign: 'center' }}>
      <Row className="align-items-center">
        <Col md={6}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ahoy , Poised to have you here</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
            Hi, I'm Fawuzan Pima, a passionate developer who loves building web applications.
          </p>
          <Button variant="primary" href="https://docs.google.com/document/d/1vKPUlPek3mkaIMbB7NndjChOqAVSuQ2LqimzFw0EvVg">Download CV</Button>
        </Col>
        <Col md={6}>
          <img
            src="/images/pic.jpg"
            alt="Fawuzan Pima"
            className="img-fluid rounded-circle"
            style={{ maxWidth: '100%', height: 'auto', boxShadow: '0 0 15px rgba(0,0,0,0.2)' }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="mt-5">
          <h2>Projects</h2>
          <Card className="mb-4">
            <Card.Img variant="top" src="/images/Travelly.jpeg" />
            <Card.Body>
              <Card.Title>Travelly</Card.Title>
              <Card.Text>
                A travel website built on Html5 , Css3 and Javascript and Google fonts api
              </Card.Text>
              <Button variant="primary" href="https://travelly-phi.vercel.app/"> Project Demo</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
