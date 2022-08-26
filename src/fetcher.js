import {API_URL} from './constants';
import {pfApi} from "./axios/axios.config";

export const fetcher = async (key) => {
  try {
    const res = await pfApi.get(`${API_URL}${key}`);
    console.log('FETCHER:', key);
    return res.data;
  } catch (e) {
    console.log(`Fetcher error. Endpoint: ${key}. ${e}`);
    throw new Error(e.message);
  }
};
