import React, { Component } from "react";

import ContactsList from "./components/ContactsList";

import { getContacts, deleteContact } from "./utils/ContactsAPI";

class App extends Component {
  state = {
    contacts: [],
  };

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

  componentDidMount() {
    getContacts().then((response) => {
      this.setState({
        contacts: response.contacts,
      });
    });
  }

  render() {
    return (
      <ContactsList
        data={{ contacts: this.state.contacts }}
        actions={{ onDeleteContact: this.handleDeleteContact }}
      />
    );
  }
}

export default App;
