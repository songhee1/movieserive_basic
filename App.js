import Home from './Home';
import Movie from './Movie';
import {Routes, Route} from 'react-router-dom';
function App(){
    return(
        <Routes>
          <Route path="/movie/:id" element={<Movie/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
    );
}
export default App;
