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
