export const fetchGeojson = url => {
  return fetch(url).then(function(response) {
    return response.json();
  });
};
