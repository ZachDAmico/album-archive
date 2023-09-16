export const getRecords = () => {
  return fetch(
    `http://localhost:8088/records?_expand=genre&_expand=recordUser`
  ).then((response) => response.json());
};
