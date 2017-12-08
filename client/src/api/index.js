import axios from 'axios';

export function addSpending(spending) {
  return axios.post('/api/payments', spending).catch(e => {
    const error = e.response.data.error;
    if (error) throw new Error(error);

    const customError = new Error();
    customError.Errors = e.response.data;
    throw customError;
  });
}
