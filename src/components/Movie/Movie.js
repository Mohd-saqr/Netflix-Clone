import { Card, Button,Container,Row} from "react-bootstrap";
import '../Movie/Movie.css'
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";
import UpdateModal from "../UpdateModal/UpdateModal";
import AlertDialog from "../AlertDialog/AlertDialog";
export default function Movie({data,page,getFavData}){
  const [open, setOpen] = useState(false);
  const [id, setid] = useState(0);
  const [openUpdateDialog,setopenUpdateDialog] = useState(false);

  const [ele,setEle] = useState({});

    const [title,setTitleInput] = useState("");
    const [image,setImageInput] = useState("");
    const [comment,setCommentInput] = useState("");


  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseUpdate = () => {
    setopenUpdateDialog(false);
  };
  
    const [show,setShow]=useState(false)
    const [cardInfo,setcardInfo]=useState({})
const handelClick=()=>{
    setShow(false)
}
    return(
        <div className="movieCon">
        <Container className='div-container'>
  <Row md={3}>
{/* startRow1 */}
      {
data.length && data.map(el=>{

  switch(page){
    case "home":
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
    case "fav":
      return(
        <Card style={{ width: '18rem' ,margin:"15px" }} key={el.id} >
          <Card.Img  variant="top" src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
            {el.overview}
            </Card.Text>
            <Card.Text>
           <h4>comment :</h4> {el.comment}
            </Card.Text>
            <Button onClick={()=>{
                setopenUpdateDialog(true)
                setcardInfo(el)
                setEle(el);
                setTitleInput(el.title);
                setCommentInput(el.comment);
                setImageInput(el.poster_path);
            }} variant="primary">Update</Button>
             <Button onClick={()=>{
              setOpen(true)
              setid(el.id)
              
            }} variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      )
    default :
    console.log("nothig");
  }

  })// ------end of map
 
  
}      {/* // -endRow- */}



      

  </Row>
  
  
  </Container> 
  <ModalMovie cardInfo={cardInfo} show={show} handelClick={handelClick}/>
  <AlertDialog open={open} handleDialogClose={handleClose}  id={id} getFavData={getFavData}/>
  <UpdateModal openUpdateDialog={openUpdateDialog} handleCloseUpdate={handleCloseUpdate} ele={ele} getFavData={getFavData}
      titleInput={title}
      setTitleInput= {setTitleInput}
      imageInput ={image}
      setImageInput = {image}
      commentInput = {comment}
      setCommentInput ={setCommentInput}
      cardInfo={cardInfo}
      /> 
        
        
        
        
        
        
        </div>
    )




}



