// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
import { Link } from 'react-router-dom';
function  NavBar() {
  return (
    <div>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;900&display=swap" rel="stylesheet" />
        <header className="box-shadow">
          <div className="section logo">
            <span className="white">Movie </span><span className="green">  Reviews</span>
          </div>
          <div className="section">
            <ul>
              <li><Link to="/MovieDetails">Get</Link></li>
              <li><Link to="/MoviePost">Add Movie</Link></li>
              <li><Link to="/MovieUpdate">Update</Link></li>
              <li><Link to="/MovieDelete">MovieDelete</Link></li>
            </ul>
          </div>
        </header>
      </div>
   
    
  );
}

export default NavBar;