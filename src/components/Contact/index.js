import React from "react";
import PropTypes from "prop-types";

function Contact(props) {
  const { data, actions } = props;
  const { contact } = data;
  const { handleDeleteContact } = actions;

  return (
    <div className="contact-list-item">
      <div
        className="contact-avatar"
        style={{ backgroundImage: `url(${contact.avatarURL})` }}
      />
      <div className="contact-details">
        <p>{contact.name}</p>
        <p>{contact.handle}</p>
      </div>
      <div
        className="contact-remove"
        onClick={() => handleDeleteContact(contact)}
      />
    </div>
  );
}

Contact.prototype = {
  data: PropTypes.shape({
    contact: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      handle: PropTypes.string,
      avatarURL: PropTypes.string,
    }).isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    handleDeleteContact: PropTypes.func.isRequired,
  }).isRequired,
};

export default Contact;
