import React from 'react';
import Contact from '../Contact/Contact';
import "./Contacts.css";

function Contacts() {

    const contactList = [
        {
            _id: 988464,
            name: 'John Mayer',
            phone: '+12099216581'
        },
        {
            _id: 21356,
            name: 'Steve Rogers',
            phone: '+12243359185'
        },
        {
            _id: 6546565,
            name: 'Tony Stark',
            phone: '+447883196637'
        }
    ]



    return (
        <>
            <div className='contacts-wrapper'>
                <div className="contact-header">
                    <h1>List of Contacts</h1>
                </div>
                <div className="contact-footer">
                    {
                        contactList.map((obj) => {
                            return <Contact key={obj._id} name={obj.name} phone={obj.phone}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Contacts