import React, { useState } from "react";
import "./Auth.scss";
import { BsFillQuestionCircleFill, BsGlobe2 } from "react-icons/bs";
import { GrTrophy, GrLineChart } from "react-icons/gr";
import Input from "../../Component/Input/Input";
import Button from "../../Component/Button/Button";
import {useNavigate } from "react-router-dom";

const SignUp = () => {
  let Navigate=useNavigate();
  let initialState = {
    Name: "",
    Email: "",
    Password: "",
    Uid: "",
  };
  const [UserData, setUserData] = useState(initialState);
  const [ToogleToLogin, setToogleToLogin] = useState(false);

  let SignUpFunc = (e) => {
    // console.log(UserData);
    let flag = false;
    if (
      UserData.Email === "" ||
      UserData.Password === "" ||
      UserData.Name === ""
    ) {
      alert("All Fields Must be Filled");
    } else {
      let prevData = JSON.parse(localStorage.getItem("UserData"));
      if (prevData === null) {
        let random = Math.floor(Math.random() * 100000);
        UserData.Uid = random;
        localStorage.setItem("UserData", JSON.stringify([UserData]));
        alert("SignUp Successfully");
      } else {
        prevData.map((val) => {
          if (val.Email === UserData.Email) {
            flag = true;
            alert("Email Already Exist");
          }
        });
        if (flag === false) {
          let random = Math.floor(Math.random() * 100000);
          UserData.Uid = random;
          prevData.push(UserData);
          localStorage.setItem("UserData", JSON.stringify(prevData));
          alert("SignUp Successfully");
        }
      }
    }
    e.preventDefault(); // to stop page from Refreshing
    Array.from(document.querySelectorAll("Input")).forEach(
      (val) => (val.value = "")
    ); // to clear input fields
  };

  let InputHandler = (e) => {
    let { name, value } = e.target;
    setUserData({ ...UserData, [name]: value });
  };

  let LoginFunc=(e)=>{
    e.preventDefault();
    let flag = false;
      if (
        UserData.Email === "" ||
        UserData.Password === ""
      ) {
        alert("All Fields Must be Filled");
      }
      else{
    let prevData=JSON.parse(localStorage.getItem("UserData"));
    if (prevData === null) {
      alert("There is Currently No User ..!");
    } else {
      prevData.map((val) => {
        if ( UserData.Email.localeCompare(val.Email,undefined,{sensitivity:'base'})===0 && UserData.Password.localeCompare(val.Password,undefined,{sensitivity:'base'})===0 ) {
          UserData.Uid = val.Uid;
          UserData.Name=val.Name;
          flag = true;
          localStorage.setItem("LoginDetails", JSON.stringify(UserData));
        }
      });
    }
    if (flag === true) {
      alert("Login SuccessFully");
      // to clear all fields
      Array.from(document.querySelectorAll("Input")).forEach(
        (val) => (val.value = "")
      );
      Navigate("/home");
    }
     else if (prevData != null && flag == false) {
      alert("Password and UserName Not Matched");
    }
  }

    

  }

  return (
    <div className="main">
      <div className="Info">
        <div className="Icons">
          <h2>Join the Community </h2>
          <span>
            <BsFillQuestionCircleFill /> Get Stuck ? ___ Ask A Question{" "}
          </span>
          <span className="voting-icon">
            <GrLineChart /> Unlock Privileges By Answering And Voting Answers..
          </span>
          <span>
            <GrTrophy /> Get Rewards And Earn Points
          </span>
          <span>
            <BsGlobe2 /> Help Others to Build A Strong Community.
          </span>
        </div>
      </div>
      {ToogleToLogin == false ? (
        <div className="form-container">
          <div className="form">
            <form onSubmit={SignUpFunc}>
              <span>
                <strong> Display Name</strong>
              </span>
              <Input name="Name" typ="text" func={InputHandler} />
              <br />
              <span>
                <strong>Email</strong>
              </span>
              <Input name="Email" typ="Email" func={InputHandler} /> <br />
              <span>
                <strong>Password</strong>
              </span>
              <Input name="Password" typ="password" func={InputHandler} />
              <div className="terms">
                <Input typ="checkbox" />
                <label>
                  By clicking “Sign up”, you agree to our terms of service,
                  privacy policy and cookie policy
                </label>
              </div>
              <Button val="SignUp" typ="submit" />
            </form>
            <p>
              <i>
                Already Have An Account ?{" "}
                <strong onClick={() => setToogleToLogin(true)}>Login</strong>
              </i>
            </p>
          </div>
        </div>
      ) : (
        // LOGIN FUNCTIONALITY
        <div className="form-container">
          <div className="form">
            <form onSubmit={LoginFunc}>
              <span>
                <strong>Email</strong>
              </span>
              <Input name="Email" typ="Email" func={InputHandler} /> <br />
              <span>
                <strong>Password</strong>
              </span>
              <Input name="Password" typ="password" func={InputHandler} />
              <div className="terms">
                <Input typ="checkbox" />
                <label>
                  By clicking “Sign up”, you agree to our terms of service,
                  privacy policy and cookie policy
                </label>
              </div>
              <Button val="Login" typ="submit" />
            </form>
            <p>
              <i>
                Don't Have An Account ?
                <strong onClick={() => setToogleToLogin(false)}> SignUp</strong>
              </i>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
