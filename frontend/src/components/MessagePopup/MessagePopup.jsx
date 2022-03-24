import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';

function MessagePopup({show, handleClose, name, phone}) {
    const [text, settext] = useState(`Your OTP is ${Math.floor((Math.random() * 1000000) + 100000)}`);
    let value ="";

    const handleOnChange = (e) => {
        value = e.target.value;
        settext(value);
    }

    const handleOnClick = async (e) => {
        console.log("click");
        e.preventDefault();
        const res = await fetch("/message/send", {
            mode: 'cors',  // this can ot be 'no-cors'
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    name: name,
                    phone: phone,
                    message: text
                }
            )
        });
        if (res.status !== 200) {
            alert("Not Sent");
        } else {
            settext("");
            alert("Message sent successfuly");
        }
    }

  return (

    <div>
        <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Send Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div >
                        <form method="POST">
                            <div >
                                <textarea onChange={handleOnChange} value={text} type="text" placeholder="Message" />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" className="btn btn-secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button type="submit" onClick={handleOnClick} disabled={!text.trim()}>Send</button>

                </Modal.Footer>
            </Modal>
    </div>
  )
}

export default MessagePopup