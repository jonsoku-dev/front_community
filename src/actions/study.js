import axios from 'axios';
import { GET_STUDIES } from './types';

export const getStudies = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/v1/bootcamps');
    dispatch({
      type: GET_STUDIES,
      payload: res.data,
    });
    console.log(res.data, 'action : study - getStudies');
  } catch (err) {
    console.error(err);
  }
};
