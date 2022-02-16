import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap'
import '../ModalMovie/ModalMovie.css'
import { useState ,useRef} from 'react';
import axios from 'axios';

export default function ModalMovie ({cardInfo,show,handelClick,title}){
    
    const input =useRef()
    const [comment,setComment]=useState();

    const addTofav = async()=>{
let comment = input.current.value;
        let fav ={original_title:cardInfo.title,overview:cardInfo.overview,poster_path:cardInfo.poster_path,release_date:cardInfo.release_date,comment:comment}
    await  axios.post(`https://msaqer-app.herokuapp.com/addMovie`,fav).then(()=>{
console.log("add");
      }).catch(err=>{
          console.log(err);
      })
    }

    return(
        

        <>
     
    <Modal show={show} onHide={handelClick} animation={false}>

                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{cardInfo.title}</h3>
                    <img alt="" src={`https://image.tmdb.org/t/p/original/${cardInfo.poster_path}`} />
                    <div>
                        <label htmlFor="op">Write Your comment :</label>
                        <input ref={input} placeholder="Write Your comment" type="text" id="op" onChange={()=>{
                            
                            // setComment(input.current.value)
                            
                        }}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"  onClick={()=>{
                       addTofav()
                       handelClick();
                    }}> Add To Favorite </Button>
                </Modal.Footer>


            </Modal>


        </>
    )

  
}