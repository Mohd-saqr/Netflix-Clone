import Modal from 'react-bootstrap/Modal'
import axios from 'axios';
import { useState ,useEffect} from 'react';
import {  Button} from "react-bootstrap";


export default function AlertDialog({open,handleDialogClose,id,getFavData}) {

  
    return (
      <div>
       <Modal show={open} onHide={handleDialogClose } animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you want to delete the movie</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDialogClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
               
              HandelDelete(id);
              
              handleDialogClose();
              
            }
            
              }>
            Save Changes
            {open=false}
          </Button>
        </Modal.Footer>
      </Modal>
      
      </div>
      
    );


    async function  HandelDelete (id){
        await axios.delete(`https://msaqer-app.herokuapp.com/DELETE/${id}`)
       .then(()=>{
 console.log("done");
 getFavData();
       }
         ).catch(err =>{
           console.log(err);
         })
     }

 

 }
  