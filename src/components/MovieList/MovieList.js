import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import Movie from "../Movie/Movie";


// const apiKey =process.env.API_KEY
export default function MovieList(){

    const [data,setData]=useState([]);
    const getTrending = async()=>{
  return await axios.get(`https://msaqer-app.herokuapp.com/search`).then(result=>{
    console.log(result.data);
  return result.data
      
  }).catch(err=>{
  console.log(err);
  })
    }
  
    useEffect(()=>{
  void(async()=>{
    
      let trending = await getTrending()
      setData(trending)
  })()
},[])
  return(
 <>
  
  <Movie data={data}/>
  </>
  )


}
  

