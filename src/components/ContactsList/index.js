import React from "react";
import { Link } from "react-router-dom";

import Contact from "../Contact";

export default class ContactsList extends React.Component {
  state = {
    query: "",
  };

  handleQuery = (query) => {
    this.setState({
      query: query.trim(),
    });
  };

  render() {
    const { query } = this.state;
    const { contacts } = this.props.data;
    const { onDeleteContact } = this.props.actions;

    const showingContacts =
      query === ""
        ? contacts
        : contacts.filter((contact) =>
            contact.name.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            type="text"
            value={query}
            className="search-contacts"
            placeholder="Search for contact"
            onChange={(e) => this.handleQuery(e.target.value)}
          />
          <Link to="/create" className="add-contact" />
        </div>
        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Now Showing {showingContacts.length} of {contacts.length}
            </span>
            <button onClick={() => this.handleQuery("")}>
              Show all contacts
            </button>
          </div>
        )}
        {showingContacts.map((contact) => (
          <Contact
            key={contact.id}
            data={{ contact }}
            actions={{ handleDeleteContact: onDeleteContact }}
          />
        ))}
      </div>
    );
  }
}
