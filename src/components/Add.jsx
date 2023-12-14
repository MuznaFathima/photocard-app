import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addDetails } from '../service/allapi';


function Add({handleResponse}) {

    const[uploadData,setuploadData]=useState({id:"",photo:"",title:"",desc:""})

    const[show,setShow]=useState(false)

    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)


    const setInput=(e)=>{

        const{name,value}=e.target
        setuploadData({...uploadData,[name]:value})

    }
    console.log(uploadData);


    const handleAdd=async()=>{

        const {id,photo,title,desc}=uploadData
        if(!id || !photo ||!title ||!desc){
            console.log("fill the columns completely!!");
        }
        else{

            const response= await addDetails(uploadData)
           handleResponse(response.data)
            setShow(false)
        }
    }

  return (
    <div className='container d-flex justify-content-end'>


<Button variant="warning" onClick={handleShow} style={{marginTop:"10px"}}>
        Add Photos
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Photo & details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" name='id' onChange={setInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Photo</Form.Label>
        <Form.Control type="text" name='photo' onChange={setInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name='title' onChange={setInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea14">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} name='desc' onChange={setInput} />
      </Form.Group>
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Finish
          </Button>
        </Modal.Footer>
      </Modal>

    </div>

  )
}

export default Add