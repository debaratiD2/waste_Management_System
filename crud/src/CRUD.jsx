import React, { Fragment, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const CRUD =()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[roleId,setRoleId] = useState(0);

  const[editUser_Id,setEditUser_Id] = useState('');
  const[editName,setEditName] = useState('');
  const[editEmail,setEditEmail] = useState('');
  const[editPassword,setEditPassword] = useState('');
  const[editRoleId,setEditRoleId] = useState(0);




    const empdata = [
        {
        user_id : 1,
        username : "admin",
        email:'admin@example.com',
        password_hash: 'hashed_password_1',
        role_id :1
    },
    {
        user_id : 2,
        username : "user1",
        email:'user1@example.com',
        password_hash: 'hashed_password_2',
        role_id :2
    },
    {
        user_id : 3,
        username : "user2",
        email:'user2@example.com',
        password_hash: 'hashed_password_3',
        role_id :2
    },
]
    const [data, setData] = useState([]);
    useEffect(()=>{
      //setData(empdata);
      getData();
    },[])

    const getData = () => {
      axios.get('https://localhost:7017/api/User')
      .then((result)=>{
        setData(result.data)
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    
    const handleSave = () =>{
      const url = "https://localhost:7017/api/User";
      const data = {
        "UserName":name,
        "Email":email,
        "Password_hashed":password,
        "Role_id":roleId


      }
      axios.post(url,data)
      .then((result)=>{
        getData();
        clear();
        toast.success("New user added to the record");
      }).catch((error)=>{
        toast.error(error);
      })
    }

    const clear = () =>{
      setName('');
      setEmail('');
      setPassword('');
      setEditName("");
      setEditPassword('');
      setEditPassword('');
    }

    const handleEdit = (id) =>{
        //alert("Are You sure?");
        //alert(id);
        handleShow();
        axios.get(`https://localhost:7017/api/User/${id}`)
        .then((result)=>{
          setEditName(result.data.userName);
          setEditEmail(result.data.email);
          setEditPassword(result.data.password_hashed);
          setEditRoleId(result.data.roleId);
          setEditUser_Id(id);
          setData(result.data);
        })
        .catch((error)=>{
          console.log(error)
        })
    }

    const handleDelete = (id) =>{
        if(window.confirm("Are you sure to delete this entry")=== true){
           // alert(id);
           axios.delete(`https://localhost:7017/api/User/${id}`)
           .then((result)=>{
            if(result.status===200){
              toast.success("User removed from the record");
              getData();
            }
           }).catch((error)=>{
            toast.error(error);
          })
        }
        //alert("Are You sure?");
       // alert(id);
    }
    const handleUpdate = () => {
        const url = `https://localhost:7017/api/User/${editUser_Id}`;
        const data = {
         // "#":user_Id,
          "User_Id" : editUser_Id,
          "UserName":editName,
          "Email":editEmail,
          "Password_hashed":editPassword,
          "Role_id":editRoleId 
        }
        axios.put(url,data)
        .then((result)=>{
          handleClose();
          getData();
          clear();
          toast.success("User's been updated");
        }).catch((error)=>{
          toast.error(error);
        })
    }
    useEffect(()=>{
        setData(empdata);
    },[])
  return (
    <div>
        <Fragment>
          <ToastContainer />
        <Container>
        <Row>
        <Col>
        <input type='text' className='form-control' placeholder='Enter Username' value={name} onChange={(e)=>setName(e.target.value)}/>
        </Col>
        <Col>
        <input type='email' className='form-control' placeholder='Enter email' value={email} onChange={(e)=> setEmail(e.target.value)}/> </Col>
        <Col>
        <input type='password' className='form-control' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/></Col>
        <Col>
        <Col>
        <input type='text' className='form-control' placeholder='Enter Role' value={roleId} onChange={(e)=>setRoleId(e.target.value)}/>
        </Col>
        <button className='btn btn-primary'onClick={()=>handleSave()}>Submit</button>
        </Col>
      </Row>
    </Container>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>user_Id</th>
          {/* <th>User_ID</th> */}
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            data && data.length > 0 ?
            data.map((item,index)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        {/* <td>{item.user_id}</td> */}
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.password_hash}</td>
                        <td>{item.role_id}</td>
                        <td colSpan={3}>
                            <button className='btn btn-primary' onClick={()=>handleEdit(item.user_Id)}>Edit</button> &nbsp;
                            <button className='btn btn-danger' onClick={()=>handleDelete(item.user_Id)}>Delete</button>

                        </td>

                    </tr>
                )
            })
            :"Loading......"
        }
        
        
      </tbody>
    </Table>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Proceed?
        <Container>
        <Row>
        <Col>
        <input type='text' className='form-control' placeholder='Enter Username' value={editName} onChange={(e)=>setEditName(e.target.value)}/>
        </Col>
        <Col>
        <input type='email' className='form-control' placeholder='Enter email' value={editEmail} onChange={(e)=> setEditEmail(e.target.value)}/> </Col>
        <Col>
        <input type='password' className='form-control' placeholder='Enter Password' value={editPassword} onChange={(e)=>setEditPassword(e.target.value)}/></Col>
        <Col>
        <Col>
        <input type='text' className='form-control' placeholder='Enter Role' value={editRoleId} onChange={(e)=>setEditRoleId(e.target.value)}/>
        </Col>
        
        </Col>
      </Row>
    </Container>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </Fragment>
    </div>
    
  )
}

export default CRUD;