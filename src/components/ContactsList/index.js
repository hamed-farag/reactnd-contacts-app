import React from "react";

import Contact from "../Contact";

export default function ContactsList(props) {
  const { data, actions } = props;

  const onDeleteContact = (contact) => {
    actions.handleDeleteContact(contact);
  };

  return data.contacts.map((contact) => (
    <Contact
      key={contact.id}
      data={{ contact }}
      actions={{ handleDeleteContact: onDeleteContact }}
    />
  ));
}
