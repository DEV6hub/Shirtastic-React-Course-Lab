import axios from 'axios';
import { CREATE_USER } from '../../constants/ActionTypes';

// TODO AH Move this somewhere else
export const createUser = (data) => {
  return (dispatch) => {
    return axios({
      method: 'post',
      url: 'http://localhost:9000/userInfo',
      data,
    })
      .then((response) => {
        console.log(response);
        dispatch({
          type: CREATE_USER,
          response: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
