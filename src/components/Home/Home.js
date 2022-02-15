import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Movie from "../Movie/Movie";
import MovieList from "../MovieList/MovieList";

export default function Home(){
    const [data,setData]=useState([]);
  const getTrending = async()=>{
return await axios.get(`https://msaqer-app.herokuapp.com/trending`).then(result=>{
    
return result.data.results
    
}).catch(err=>{
console.log(err);
})
  }

  useEffect(()=>{
void(async()=>{
    let trending = await getTrending()
setData(trending);

})();

  },[]);
return(
    <>
    
<MovieList/>



</>
)

}



// {/* <Container className='div-container'>
/* <Row md={3}>    
{data.id?( 
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} />
  <Card.Body>
    <Card.Title>{data.title}</Card.Title>
    <Card.Text>
    {data.overview}
    </Card.Text>
    <Button variant="primary">Add To favourite</Button>
  </Card.Body>
</Card>
)
:(<h1>There no have data, pleax try later</h1>)}  
</Row> */
// </Container>  */
