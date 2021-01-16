const Base_URL = 'https://restcountries.eu/rest/v2';
function fetchCountry(cn) {
  return fetch(`${Base_URL}/name/${cn}`).then(responce => {
    if (responce.status !== 404) {
      return responce.json();
    }
  });
}
export default { fetchCountry };
