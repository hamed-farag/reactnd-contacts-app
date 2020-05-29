import React from "react";

import Contact from "../Contact";

import { getContacts, deleteContact } from "../../utils/ContactsAPI";

export default class ContactsList extends React.Component {
  state = {
    contacts: [],
    query: "",
  };

  handleQuery = (query) => {
    this.setState({
      query: query.trim(),
    });
  };

  componentDidMount() {
    getContacts().then((response) => {
      this.setState({
        contacts: response.contacts,
      });
    });
  }

  handleDeleteContact = (contact) => {
    this.setState(
      (prevState) => ({
        contacts: prevState.contacts.filter((cont) => cont.id !== contact.id),
      }),
      () => {
        deleteContact(contact);
      }
    );
  };

  onDeleteContact = (contact) => {
    this.handleDeleteContact(contact);
  };

  render() {
    const { contacts, query } = this.state;

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
            actions={{ handleDeleteContact: this.onDeleteContact }}
          />
        ))}
      </div>
    );
  }
}
