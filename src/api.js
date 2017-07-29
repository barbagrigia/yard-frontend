/* @flow */

const apiUrl = 'https://yard-api.now.sh';
export const imagesUrl = 'https://s3-eu-central-1.amazonaws.com/yard-images';

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

export function get(resource: string, headers: ?Object): Promise<any> {
  return request('GET', resource, headers).then(r => r.json());
}

export function post(resource: string, body: JSON, headers: ?Object): Promise<any> {
  return request('POST', resource, headers, JSON.stringify(body));
}

export function put(resource: string, body: JSON, headers: ?Object): Promise<any> {
  return request('PUT', resource, headers, JSON.stringify(body));
}
