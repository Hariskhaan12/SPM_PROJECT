import React from 'react'
import './Header.scss'
import Button from '../../Component/Button/Button';
import {useNavigate} from 'react-router-dom'



const Header = () => {
  let Navigate = useNavigate();
  
  let btnStyle = {
    backgroundColor: "Black",
    color: "#ffff",
    padding: "15px",
    borderRadius: "2px",
    fontWeight: "Bold",
  };
  
  let JoinCommunity = () => {
    Navigate("/Auth");
    console.log("Community Joined..!");
  };



  return (
    <div className="main">
      <div className="main-div">
        <h1>
          Learn <br /> <span className="span-1">&</span>
          <span className="span-2"> Grown Together</span>
        </h1>
      </div>
      <div className='btn-div'>
        <Button
          val="Join The Community"
          styl={btnStyle}
          func={JoinCommunity}
        ></Button>
      </div>
    </div>
  );
}

export default Header