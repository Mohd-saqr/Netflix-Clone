import { Card, Button,Container,Row} from "react-bootstrap";
import '../Movie/Movie.css'
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";
export default function Movie({data}){
    const [show,setShow]=useState(false)
    const [cardInfo,setcardInfo]=useState({})
const handelClick=()=>{
    setShow(false)
}
    return(
        <div className="movieCon">
        <Container className='div-container'>
  <Row md={3}>

      {
data.length && data.map(el=>{
   
return(
    
  <Card style={{ width: '18rem' ,margin:"15px" }} key={el.id} >
    <Card.Img  variant="top" src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} />
    <Card.Body>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text>
      {el.overview}
      </Card.Text>
      <Button onClick={()=>{
          setShow(true)
          setcardInfo(el)
      }} variant="primary">Add To favourite</Button>
    </Card.Body>
  </Card>
)
  })
 
  
}

 
      

  </Row>
  
  
  </Container> 
  <ModalMovie cardInfo={cardInfo} show={show} handelClick={handelClick}/>
        </div>
    )
}