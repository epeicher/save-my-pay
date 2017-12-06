import axios from 'axios';

export function addSpending(spending) {
  return axios
    .post('/api/payments', spending)
    .then(function(response) {
      console.log(response);
    })
    .catch(e => console.error(e));
}
