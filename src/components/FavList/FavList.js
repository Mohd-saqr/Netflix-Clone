import axios from "axios";
import { useState ,useEffect} from "react";
import Movie from '../Movie/Movie'
export default function FavList(){
const [data,setData]=useState({})
const page="fav"


function getFavData(){
    axios.get('https://msaqer-app.herokuapp.com/getMovies')
    .then(result=>{
        return setData(result.data)
    })
    
}
useEffect(()=>{
    getFavData()   
},[])

return(
    <>
    <Movie data={data} page={page} getFavData={getFavData}/>
    </>
)


}