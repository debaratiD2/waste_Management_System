import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const GarbageCollectorManagement = () => {
//   const [collectors, setCollectors] = useState([]);

//   useEffect(() => {
//     // Fetch collectors data
//     axios.get('https://localhost:7017/api/Collectors')
//       .then((response) => setCollectors(response.data))
//       .catch((err) => console.error('Error fetching collectors', err));
//   }, []);

  return (
    <div>
      <h4>Garbage Collector Management</h4>
      {/* <Button variant="primary" className="mb-3">Assign New Collector</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Area</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {collectors.map((collector, index) => (
            <tr key={collector.id}>
              <td>{index + 1}</td>
              <td>{collector.name}</td>
              <td>{collector.area}</td>
              <td>
                <Button variant="warning" className="me-2">Edit</Button>
                <Button variant="danger">Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </div>
  );
};

export default GarbageCollectorManagement;
