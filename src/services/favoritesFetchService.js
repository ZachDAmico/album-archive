export const getFavoriteAlbums = () => {
  return fetch(`http://localhost:8088/records?favorite=true`).then((response) =>
    response.json()
  );
};
