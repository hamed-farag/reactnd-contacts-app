import React, { Component } from "react";
import { Route } from "react-router-dom";

import ContactsList from "./components/ContactsList";
import CreateContact from "./components/CreateContact";

import { getContacts, deleteContact, createContact } from "./utils/ContactsAPI";

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

  handleCreateContact = (values) => {
    this.setState(
      (prevState) => ({
        contacts: [...prevState.contacts, values],
      }),
      () => {
        createContact(values);
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
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ContactsList
              data={{ contacts: this.state.contacts }}
              actions={{ onDeleteContact: this.handleDeleteContact }}
            />
          )}
        />
        <Route
          path="/create"
          render={({ history }) => (
            <CreateContact
              history={history}
              actions={{ onCreateContact: this.handleCreateContact }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
