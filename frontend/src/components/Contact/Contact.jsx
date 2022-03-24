import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Contact.css";

function Contact(props) {

  const navigate = useNavigate();

  function handleClick() {
    console.log("ieofijwoeiwoiejoi");
    navigate(
      "/contact-info",
      {
      state: {
        name: props.name,
        phone: props.phone
      }}
      );
  }

  return (
    <div onClick={handleClick} className='contact'>
        <h3>{props.name}</h3>
        <h6>{props.phone}</h6>
    </div>
  )
}

export default Contact