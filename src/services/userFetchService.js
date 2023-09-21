export const getRecordUsers = () => {
  return fetch(`http://localhost:8088/recordUsers`).then((response) =>
    response.json()
  );
};

export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/recordUsers?email=${email}`).then((res) =>
    res.json()
  );
};

export const createUser = (customer) => {
  return fetch("http://localhost:8088/recordUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json());
};
