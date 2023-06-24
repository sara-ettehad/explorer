import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createContact(contact){
    return (
        <Card 
            id={contact.id}
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.tel}
            email={contact.email}
        />
    )
}
function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar img="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"/>
            {contacts.map(createContact)}
        </div>
    );
}

export default App;