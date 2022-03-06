import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
function Detail({id, title, year, coverImage,rating, runtime, summary,genres}){
    return(
    <div>
        <div>
           <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <img src={coverImage} alt="해당 영화 사진"/>
            <div>
            <strong>
                year:{year}, rating:{rating}, runtime:{runtime}
                <div>summary:{summary}</div>
            </strong>
            </div>
            <h3>genres</h3>
            <ul>
                {genres.map((genre)=>(
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>  
    </div>
    );
}
Detail.propTypes={
    id : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    coverImage:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    runtime:PropTypes.number.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Detail;
