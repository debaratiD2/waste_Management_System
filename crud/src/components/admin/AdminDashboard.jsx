import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTrash, faChartBar, faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom'; // Link for navigation and Outlet for rendering child routes

const AdminDashboard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#343a40', color: 'white' }}>
        <div className="p-3 text-center">
          <h4>Admin Dashboard</h4>
        </div>
        <Nav defaultActiveKey="user-management" className="flex-column">
          <Nav.Item>
            <Nav.Link as={Link} to="/admin-dashboard/user-management">
              <FontAwesomeIcon icon={faUsers} /> User Management
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/admin-dashboard/garbage-collector">
              <FontAwesomeIcon icon={faTrash} /> Garbage Collectors
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/admin-dashboard/waste-overview">
              <FontAwesomeIcon icon={faTrash} /> Waste Overview
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/admin-dashboard/analytics">
              <FontAwesomeIcon icon={faChartBar} /> Analytics
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/admin-dashboard/notifications">
              <FontAwesomeIcon icon={faBell} /> Notifications
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/admin-dashboard/settings">
              <FontAwesomeIcon icon={faCog} /> Settings
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Container>
          {/* The active tab's content will be rendered here using <Outlet /> */}
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default AdminDashboard;
