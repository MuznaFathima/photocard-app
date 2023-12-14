import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deletePhoto, editphoto, getphotos } from '../service/allapi';
import { Form, Modal, Row } from 'react-bootstrap';
import { Edit, Eye, Trash } from 'react-feather';
import './LandingStyle.css'

editphoto
function Cards({serverRes}) {

    const[allphotos,setallPhotos]=useState([])
    
    const getallphotos=async ()=>{

      let  response=await getphotos()
        setallPhotos(response.data)
    }
    console.log(allphotos);

    
// for deleting card
    const handleDeletePhoto= async(id)=>{
    
        let response=await deletePhoto(id)
        console.log(response);
        getallphotos()
    }
    // for card  view according to id 
    const [selectedphoto,setselectedPhoto]=useState(null)
 
 
  const [fullscreen, setFullscreen] = useState(true);
  const [view, setView] = useState(false);

  function handleShow(id) {
    setFullscreen(true);
    setselectedPhoto((allphotos.find((photo) => photo.id === id)))
    
    setView(true);
  }
// for updating card
const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDesc, setEditedDesc] = useState('');
const [show,setShow]=useState(false)
  const handleEditPhoto = (photo) => {
    setselectedPhoto(photo);
    setEditMode(true);
    setShow(true);
    setEditedTitle(photo.title);
    setEditedDesc(photo.desc);
  };

  const handleUpdate = async () => {
    if (selectedphoto) {
      const updatedPhoto = {
        id: selectedphoto.id,
        title: editedTitle,
        desc: editedDesc,
        photo: selectedphoto.photo // Keep the image unchanged
      };
  
      try {
        await editphoto(selectedphoto.id, updatedPhoto); // Pass the photo ID and updated data to editphoto
        getallphotos();
        setEditMode(false);
        setShow(false);
      } catch (error) {
        // Handle error
      }
    }
  };

  // function to print card

  const printcard=()=>{



    const content=document.getElementById('printable-card')

    // open a new window for printing

    const printwindow=window.open('','_blank')


    printwindow.document.write('<html><head><title >Print</title></head><body>');

    //  writing html element content to the window

    printwindow.document.write(content.innerHTML)


    printwindow.document.write('</body></html>');
    
    // close writing to the window
    printwindow.document.close();

    // trigger print functionality
    printwindow.print()


  }


  useEffect(() => {
    getallphotos()

  
  }, [serverRes])

  return (
   <>
      <div className='container' >
    
  <Row xs={1} md={2} lg={3}>
    
  { allphotos&&allphotos.map(photo=>( <Card id='printable-card'   key={photo.id} style={{ width: '18rem',   marginRight:"30px",marginTop:"10px" }} className='card'>
  <Card.Img  variant="top" src={photo.photo} style={{height:"20rem"}} className='images' />
  <Card.Body >
    <Card.Title>{photo.title}</Card.Title>
    <Card.Text>
      {photo.desc}
    </Card.Text>
    <Button variant="danger" onClick={()=>handleDeletePhoto(photo.id)} ><Trash size={17} className='btn1'></Trash></Button>
    <Button variant="success" style={{marginLeft:"10px"}} onClick={()=>handleShow(photo.id)} className='btn2' ><Eye size={17}></Eye></Button>
    <Button variant='warning' style={{marginLeft:"10px"}} ><Edit size={17} onClick={()=>handleEditPhoto(photo)}/></Button>
    <Button className='print' variant='dark' onClick={printcard}>
          Print
        </Button>
  </Card.Body>
  </Card>))
  
   }
  
  </Row>
      </div>
      <div >
 
      
      <Modal show={view} fullscreen={fullscreen} onHide={() => setView(false)}>
  <Modal.Header closeButton>
    <Modal.Title>
      {selectedphoto && (
       
          <img
            src={selectedphoto.photo}
            alt="Selected"
            height="300px"
            width="300px"
          />
          
   
      )}
    </Modal.Title>
  </Modal.Header>
  </Modal>


  <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
  <Modal.Header closeButton>
    <Modal.Title>
      {selectedphoto && (
        <img
          src={selectedphoto.photo}
          alt="Selected"
          height="300px"
          width="300px"
        />
      )}
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {editMode ? (
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter title'
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Enter description'
            value={editedDesc}
            onChange={(e) => setEditedDesc(e.target.value)}
          />
        </Form.Group>
      </Form>
    ) : (
      selectedphoto && <p>{selectedphoto.desc}</p>
    )}
  </Modal.Body>
  <Modal.Footer>
    {editMode ? (
      <Button variant='primary' onClick={handleUpdate}>
        Save Changes
      </Button>
    ) : (
      <Button variant='secondary' onClick={() => setEditMode(true)}>
        Edit
      </Button>
    )}
  </Modal.Footer>
</Modal>


  
    


        </div>
   </>
  )
}

export default Cards