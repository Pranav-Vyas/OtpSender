import React from 'react';
import "./Message.css"

function Message(props) {
  return (
    <div className='message-container'>
        <div className="message-header row">
            <div className="message-name col">
                <h4>{props.name}</h4>
            </div>
            <div className="message-phone col">
                <h5>{props.phone}</h5>
            </div>
        </div>
        <div className="message-footer">
            <p>{props.message}</p>
        </div>
    </div>
  )
}

export default Message