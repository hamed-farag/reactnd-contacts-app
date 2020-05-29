export function getContacts() {
  return fetch(`${process.env.REACT_APP_API_URL}/contacts`, {
    headers: { Authorization: "651er2g4df651s6fs" },
  }).then((response) => response.json());
}

export function deleteContact(contact) {
  return fetch(`${process.env.REACT_APP_API_URL}/contacts/${contact.id}`, {
    method: "DELETE",
    headers: { Authorization: "651er2g4df651s6fs" },
  }).then((response) => response.json());
}

export function createContact(contact) {
  fetch(`${process.env.REACT_APP_API_URL}/contacts`, {
    method: "POST",
    headers: {
      Authorization: "651er2g4df651s6fs",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
}
