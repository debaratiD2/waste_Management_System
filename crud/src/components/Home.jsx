import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserTie,
  faTruck,
  faUsers,
  faChartLine,
  faMapMarkedAlt,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const clickSignUp = () =>{
        navigate('/login');
    }
    const register = () =>{
        navigate('/signup');
    }
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <div className="bg-success text-white py-5">
        <Container className="text-center">
          <Row>
            <Col>
              <h1 className="display-4 fw-bold mb-3">Smart Waste Management System</h1>
              <p className="lead mb-4">
                Efficient, sustainable, and smart solutions for urban waste management.
              </p>
              <Button
                variant="light"
                size="lg"
                className="text-success fw-bold px-4 py-2"
                onClick={clickSignUp}
              >
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* User Roles Section */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">Our Platform Users</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faUserTie} size="3x" className="text-success mb-3" />
                <Card.Title>Admin</Card.Title>
                <Card.Text>
                  System administrators manage operations, monitor performance metrics, and
                  ensure smooth platform functionality.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faTruck} size="3x" className="text-success mb-3" />
                <Card.Title>Garbage Collector</Card.Title>
                <Card.Text>
                  Field personnel follow optimized routes and receive real-time updates for
                  efficient waste collection.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faUsers} size="3x" className="text-success mb-3" />
                <Card.Title>Resident</Card.Title>
                <Card.Text>
                  Local residents can report bin status and provide feedback for timely waste
                  collection services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <div className="bg-white py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">Key Features</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="text-center shadow-sm border-0">
                <Card.Body>
                  <FontAwesomeIcon
                    icon={faChartLine}
                    size="3x"
                    className="text-success mb-3"
                  />
                  <Card.Title>Real-time Analytics</Card.Title>
                  <Card.Text>
                    Monitor waste collection metrics and system performance in real-time.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow-sm border-0">
                <Card.Body>
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    size="3x"
                    className="text-success mb-3"
                  />
                  <Card.Title>Route Optimization</Card.Title>
                  <Card.Text>
                    Smart routing algorithms for efficient waste collection paths.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow-sm border-0">
                <Card.Body>
                  <FontAwesomeIcon
                    icon={faBell}
                    size="3x"
                    className="text-success mb-3"
                  />
                  <Card.Title>Alert System</Card.Title>
                  <Card.Text>
                    Instant notifications for bin status and collection updates.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Call to Action */}
      <Container className="py-5 text-center">
        <h2 className="fw-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-4">
          Join our platform and contribute to a cleaner, more sustainable environment.
        </p>
        <Button variant="success" size="lg" className="px-4 py-2" onClick={register}>
          Sign Up Now
        </Button>
      </Container>
    </div>
  );
};

export default Home;
