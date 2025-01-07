import React, { useState } from 'react';
import { useAuth } from "../context/AuthProvider";
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const url = 'https://localhost:7017/api/Auth/login';
      const response = await axios.post(url, { email, password });
      const { role: userRole } = response.data;
      console.log('User Role:', userRole);
      login({ email, role: userRole });
      if (role && role !== userRole) {
        setError('Selected role does not match the user role.');
        return;
      }

      // Redirect to the appropriate dashboard based on userRole
      switch (userRole) {
        case 'admin':
          console.log('Navigating to Admin Dashboard');
          navigate('/admin-dashboard');
          break;
        case 'collector':
          console.log('Navigating to Collector Dashboard');
          navigate('/collector-dashboard');
          break;
        case 'user':
          console.log('Navigating to User Dashboard');
          navigate('/user-dashboard');
          break;
        default:
          setError('Invalid user role.');
      }
      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
    
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="text-center mb-4">Login</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="role" className="mb-3">
              <Form.Label>Select Role</Form.Label>
              <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="collector">Garbage Collector</option>
              </Form.Select>
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              Login
            </Button>
          </Form>
          <div className="text-center mt-3">
            <span>Don't have an account? </span>
            <Link to="/signup">Sign up</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
