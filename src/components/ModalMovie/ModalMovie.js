import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap'
import '../ModalMovie/ModalMovie.css'
import axios from 'axios';

export default function ModalMovie ({cardInfo,show,handelClick}){
   
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
                        <input placeholder="Write Your comment" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" > Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}