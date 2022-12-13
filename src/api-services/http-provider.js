import axios from 'axios';
import { getToken } from '../utils/auth.util';

export const BASEURL = 'http://3.130.186.158/sandbox/lawyerdup/api/web/v1/';
const BASE_URL = BASEURL;

export async function getApiRequestHeader() {
  const authToken = await getToken();
  const key = authToken?.key || '';
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + key,
  };
}

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  withCredentials: false,
});

export async function updateHeaders() {
  const header = await getApiRequestHeader();
  instance.defaults.headers = header;
}

export async function request({ method, url, data, headers }) {
  if (headers === undefined) {
    await updateHeaders();
  }
  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }

  return response;
}

export async function newRequest({ method, url, data, headers }) {
  if (headers === undefined) {
    await updateHeaders();
  }
  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error.response;
  }

  if (
    response.status
      ? response.status.toString().indexOf('2') !== 0
      : response.data.status.toString().indexOf('2') !== 0
  ) {
    // eslint-disable-next-line
    throw { response };
  } else {
    return response.data;
  }
}

export async function get(url, params, featureAndAction, config) {
  for (var key in params) {
    url = url + '' + params[key];
  }
  return request({ method: 'get', url, data: { featureAndAction }, ...config });
}

export async function del(url, params, config) {
  return request({ method: 'delete', url, data: { params }, ...config });
}

export async function post(url, data, featureAndAction, config) {
  return request({ method: 'post', url, data, ...config });
}

export async function put(url, data, config) {
  return newRequest({ method: 'put', url, data, ...config });
}
export async function patch(url, data, config) {
  return newRequest({ method: 'patch', url, data, ...config });
}
export const independentRequest = async (url, method, data) => {
  const promise = axios[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }
  const payload = response;
  return payload;
};


