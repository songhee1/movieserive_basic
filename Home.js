import { useState, useEffect } from "react";
import Detail from "./Detail";
function Home(){
   const [loading, setLoading]=useState(true);
   const [movies,setMovies]=useState([]);
   useEffect( ()=>(
       fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
      .then(res=>res.json())
      .then(json=>{
        setLoading(false);      
        setMovies(json.data.movies);  
    }))
    ,[]);
    console.log(movies);
    return(
      <div>
      <ul>  
      {loading? <h1>Loading...</h1>:
          <div>
          {movies.map((movie)=>(
            <Detail 
            key={movie.id}
            id={movie.id}
            title={movie.title} year={movie.year} 
            coverImage={movie.medium_cover_image} rating={movie.rating}
            runtime={movie.runtime} summary={movie.summary}
            genres={movie.genres}/>
          ))}
          </div>
      }
      </ul>
      </div>
   );
}
export default Home;
