import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import "./ContactInfo.css"
import Navbar from '../Navbar/Navbar'
import MessagePopup from '../MessagePopup/MessagePopup';

function ContactInfo() {
  const location = useLocation();
  const {name, phone} = location.state;
  const [show, setshow] = useState(false);

  const handleShow = () => {
    setshow(true);
  }
  const handleClose = () => {
    setshow(false);
  }

  return (
    <>
        <Navbar/>
        <div className="contact-info">
            <h3>{name}</h3>
            <h6>{phone}</h6>
            <button className='send-btn' onClick={handleShow}>Send Message</button>
            <MessagePopup show={show} handleClose={handleClose} name={name} phone={phone}/>
        </div>
    </>
  )
}

export default ContactInfo