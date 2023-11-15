import '../App.css'
import {AiOutlineMenu} from "react-icons/ai"
export const Navbar = () => {
  return (
    <section className="navbar">
      <div className="navContainer">
      <div className="navLink">
        <a href="">Portfolio</a>
        <a href="">About us</a>
        <a href="">Career</a>
        <a href="">Blog</a>
      </div>
      <div className="navName">
        <p>STRUCTURA</p>
      </div>
      <div className="navContact">
        <a href="">Contact us</a>
        <AiOutlineMenu className='menu-bar'/>
      </div>
      </div>
    </section>
  );
};
