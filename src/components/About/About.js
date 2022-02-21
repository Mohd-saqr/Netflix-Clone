
import { Card,Button } from 'react-bootstrap';
import '../About/About.css'
export default function About(){
return(
    <>
    <Card className="text-center">
  <Card.Header>About The developer</Card.Header>
  <Card.Body className='body'>
    <Card.Title>Mohammed saqr</Card.Title>
    <Card.Text  id="text">
    Software Developer with a background in Electrical Engineering, I have experience building websites, backend web applications, front end and software, I specialize in Java and have professional experience working with JavaScript, I also have experience working with ReactJS, Android Studio, intellij idea, VScode , GitHub ,I have always been the best problem solver.    </Card.Text>
    <Button variant="primary" onClick={()=>{
        window.location.href = 'https://www.linkedin.com/in/moh-d-saqr-aa5851232/';
    }}>linkedin acount</Button>
    <Button variant="primary" onClick={()=>{
        window.open('mailto:mohammedsaqerjo@gmail.com');
    }}>Email</Button>
    <Button variant="primary" onClick={()=>{
        window.location.href = 'https://github.com/Mohd-saqr';

    }}>GitHub Acount</Button>


  </Card.Body>
  <Card.Footer className="text-muted">Welcome</Card.Footer>
</Card>
    
   

    
    </>
)
}