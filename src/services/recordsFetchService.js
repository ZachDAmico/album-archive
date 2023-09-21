export const getRecordsById = (userId) => {
  return fetch(
    ` http://localhost:8088/records?recordUserId=${userId}&_expand=genre`
  ).then((response) => response.json());
};

export const getAllRecords = () => {
  return fetch(`http://localhost:8088/records`).then((response) =>
    response.json()
  );
};

export const postRecord = (record) => {
  return fetch(`http://localhost:8088/records`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(record),
  });
};

export const editRecord = (id, updatedRecord) => {
  return fetch(`http://localhost:8088/records/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedRecord),
  });
};

export const getRecordById = (id) => {
  return fetch(`http://localhost:8088/records/${id}`).then((response) =>
    response.json()
  );
};

export const deleteRecord = (id) => {
  return fetch(`http://localhost:8088/records/${id}`, {
    method: "DELETE",
  });
};
