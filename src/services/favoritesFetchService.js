export const getFavoritesById = (userId) => {
  return fetch(
    `http://localhost:8088/records?recordUserId=${userId}&favorite=true`
  ).then((response) => response.json());
};
