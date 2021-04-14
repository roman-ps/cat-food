const GETDATA_URL = 'js/data.json';

const loadData = () => {
  return fetch(GETDATA_URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
}

export {loadData}
