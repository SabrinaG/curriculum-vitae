export const interceptors = {
  headers: [],
};

const basePath = options => (options.basePath ? options.basePath : 'http://localhost:3000/');

const getApiPath = (path, options) => {
  const resultPath = basePath(options) + path;

  return resultPath;
};

const buildHeaders = (initialHeaders = {}) => interceptors.headers.reduce(
  async (previous, interceptor) => {
    const headers = await previous;
    return interceptor(headers);
  },
  Promise.resolve(initialHeaders),
);

const callApi = async (path, options = {}) => {
  const body = options.body ? options.body : null;
  const headers = await buildHeaders({
    Accept: 'application/json',
    Authorization: 'Basic c2FicmluYTpndWlh',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, OPTIONS, HEAD, DELETE',
    'Access-Control-Allow-Headers': 'Origin,Accept,authorization,DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type',
    'Content-Type': (options.headers || {})['Content-Type'] || 'application/json',
    ...(options.headers || {}),
  });
  if (!body) {
    delete headers['Content-Type'];
  }
  return fetch(getApiPath(path, options), {
    ...options,
    body,
    headers,
  })
    .then((response) => {
      const contentType = response.headers.get('content-type');
      if (contentType && (contentType.indexOf('application/json') !== -1 || contentType.indexOf('application/geo+json') !== -1)) {
        return response.json();
      }
      return response;
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Failed to fetch profile info with message log: ', err);
      throw err;
    });
};

export default callApi;
