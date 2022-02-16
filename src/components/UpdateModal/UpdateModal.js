import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap'
import '../ModalMovie/ModalMovie.css'
import axios from 'axios';
import { useState,useRef } from 'react';


export default function UpdateModal({openUpdateDialog,handleCloseUpdate,ele,getFavData,
    titleInput,
    setTitleInput,
    imageInput,
    setImageInput,
    commentInput,
    setCommentInput
}){
    
    // const [title,settitle]=useState();
    // const [poster_path,setposter_path]=useState(`${`https://image.tmdb.org/t/p/original/${cardInfo.poster_path}`}`);
    // const [comment,setComment]=useState(cardInfo.comment);
    // const titleinput =useRef();
    // const poster_pathinput =useRef();
    // const commentinput =useRef();
   

   
    const update = async(id)=>{
        let updated = {title:titleInput, overview:ele.overview,poster_path:ele.poster_path, release_date:ele.release_date,comment:commentInput} 
       
axios.put(`https://msaqer-app.herokuapp.com/UPDATE/${id}`,updated).then(()=>{
    console.log("updated");
    getFavData();
}).catch(err=>{
    console.log(err);
})

    }
    return(
        

        <>
     
    <Modal show={openUpdateDialog} onHide={handleCloseUpdate} animation={false}>

                <Modal.Header closeButton>
                    <Modal.Title>Add </Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                <input   type="text"  value={titleInput} onChange={(e)=>{
                    setTitleInput(e.target.value)
                    
                   
                }}/>
                <br></br>
                <textarea  value={imageInput} onChange={(e)=>{
                    setImageInput(e.target.value)
                }} />
                    <div>
                        <label htmlFor="op">Write Your comment :</label>
                        <input  placeholder="Write Your comment" value={commentInput} type="text" id="op" onChange={(e)=>{
                            setCommentInput(e.target.value);
                           console.log(ele.id);
                        }}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>{
              update(ele.id);
              handleCloseUpdate();
                    }} > Update</Button>
                </Modal.Footer>


            </Modal>


        </>
    )
}