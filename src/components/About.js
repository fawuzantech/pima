import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <Container style={{ marginTop: '50px', textAlign: 'center' }}>
      <Row className="align-items-center">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="/images/pic.jpg" />
          </Card>
        </Col>
        <Col md={6}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>About Me</h2>
           
          <p>
            With experience in React Nodejs Java Mysql, I enjoy working on challenging projects and constantly learning new skills.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
