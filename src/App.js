import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import MoviePost from './pages/MoviePost';
import MovieUpdate from './pages/MovieUpdate';
import MovieDel from './pages/MovieDelete';
// import Navbar from './pages/NavBar';
function App() {
  return (
    <div className="navbar">
 
     <NavBar az/>
      <Routes>
        {/* <Route path='/' element={<Navbar/>}/> */}
        <Route  index 
        path='/' element={<Home/>}/>
        <Route path="/MovieDetails" element={<MovieDetails/>}/>
        <Route path="/MoviePost"  element={<MoviePost/>}/>
        <Route path="/MovieUpdate"  element={<MovieUpdate/>}/>
        <Route path="/MovieDelete"  element={<MovieDel/>}/>
      </Routes>
 
     </div>
  );
}

export default App;
