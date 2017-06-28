const apiUrl = 'https://api.jqestate.ru/v1/';
export const imagesUrl = 'https://images.jqestate.ru';


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const { status, body } = response;
  const error = {
    status,
    body,
  };

  throw error;
}

const request = (method, resource, headers, body = null) =>
  fetch(apiUrl + resource, {
    method,
    body,
  }).then(checkStatus);

export function get(resource, headers) {
  return request('GET', resource, headers).then(r => r.json());
}

export function post(resource, body, headers) {
  return request('POST', resource, headers, JSON.stringify(body));
}

export function put(resource, body, headers) {
  return request('PUT', resource, headers, JSON.stringify(body));
}
