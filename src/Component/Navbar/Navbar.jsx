import {React,useState} from 'react'
import './Navbar.scss'
// import {images} from '../../constants'
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'
import { Link,useNavigate } from 'react-router-dom';

const Navbar = () => {
  let Navigate=useNavigate();
  const [Toggle, setToggle] = useState(false)


  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="Logo Here"></img> */}
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
          <li className="app__flex p-text" key={`link ${item}`}>
            <div />
            {/* <Link to={`/${item}`}>{item}</Link> */}
            <a onClick={() => Navigate(`/${item}`)}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {Toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
                <li key={`${item}`}>
                  {/* <Link to={`/${item}`}>{item}</Link> */}
                  <a onClick={() => Navigate(`/${item}`)}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar