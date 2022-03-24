import React, {useState, useEffect} from 'react';
import Message from '../Message/Message';
import Navbar from '../Navbar/Navbar';
import "./MessagesPage.css";

function MessagesPage() {

  const [messages, setmessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/message", {
          mode: 'cors',  // this can not be 'no-cors'
          method: "GET",
          headers: new Headers({
              'Accept': "application/json",
              "content-type": "application/json"
          })
      });
      const data = await res.json();
      if (res.status > 200 || !data) {
          console.log(res.status);
          alert("Messages not found")
      } else {
          console.log(data.messages);
          setmessages(data.messages);
      }
  }
  fetchData();
  },[])
  

  return (
    <>
      <Navbar />
      <div className="messages-wrapper">
        {
          messages.map((data) => {
            return <Message key={data._id} name={data.name} phone={data.phone} message={data.message}/>
          })
        }

      </div>
    </>
  )
}

export default MessagesPage