import React from "react";
import { Link } from "react-router-dom";
import serializeForm from "form-serialize";

import ImageInput from "../../ImageInput";

export default function CreateContact(props) {
  const handleSubmit = function(e) {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    props.actions.onCreateContact(values);
    props.history.push("/");
  };

  return (
    <div>
      <Link className="close-create-contact" to="/">
        Close
      </Link>
      <form className="create-contact-form" onSubmit={handleSubmit}>
        <ImageInput
          className="create-contact-avatar-input"
          name="avatarURL"
          maxHeight={65}
        />
        <div className="create-contact-details">
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Handle" name="handle" />
          <button>Add Contact</button>
        </div>
      </form>
    </div>
  );
}
