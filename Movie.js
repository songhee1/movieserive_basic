import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
function Movie(){
    const [loading,setLoading]=useState(true);
    const [movie,setMovie]=useState(
        {
        id:'',url:'',slug:'', image:''
        }
    );
    const {id}=useParams();
    console.log(id);
    const getMovie=async()=>{
        const json=await(
           await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(
        {
         id:json.data.movie.id, url:json.data.movie.url, 
         slug:json.data.movie.slug, image:json.data.movie.medium_cover_image
        } );
        console.log(json);
        setLoading(false);
        console.log(movie);

    };
    useEffect(()=>{
       getMovie();
    },[]);
    return(
    <div> 
      {loading ? <h2>Loading...</h2> : 
       <div>
       <h1>
       Details : 
       </h1>
       <img src={movie.image} alt='영화이미지'></img>({movie.id})
       <div>
           <h3>URL ADDRESS IS HERE - {movie.url}</h3>
       </div>
       <div>
           <h4>Slug : {movie.slug}</h4>
       </div>
       <div>

       </div>  
       
       </div>
      } 
    </div>
    );

}

export default Movie;
