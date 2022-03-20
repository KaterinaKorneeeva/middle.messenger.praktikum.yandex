enum Methods {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

type RequestOptions = {
  method?: Methods;
  headers?: Record<string, string>;
  timeout?: number;
  data?: any;
  withCredentials?: boolean;
};

function queryStringify(data: Record<string, unknown>) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}



export default class HTTPTransport {
  public baseUrl: string;

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public get = (url: string, options: RequestOptions = {}): Promise<XMLHttpRequest> => this.request(url, {
    ...options,
    method: Methods.Get
  }, options.timeout);

  public post = (url: string, options: RequestOptions = {}): Promise<XMLHttpRequest> => this.request(url, {
    ...options,
    method: Methods.Post
  }, options.timeout);

  public put = (url: string, options: RequestOptions = {}): Promise<XMLHttpRequest> => this.request(url, {
    ...options,
    method: Methods.Put
  }, options.timeout);

  public patch = (url: string, options: RequestOptions = {}): Promise<XMLHttpRequest> => this.request(url, {
    ...options,
    method: Methods.Patch
  }, options.timeout);

  public delete = (url: string, options: RequestOptions = {}): Promise<XMLHttpRequest> => this.request(url, {
    ...options,
    method: Methods.Delete
  }, options.timeout);

  request = (url: string, options: RequestOptions = {}, timeout = 5000): Promise<XMLHttpRequest> => {
    const {
      headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method,
      data,
    } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === Methods.Get;

      xhr.open(
        method,
        isGet && !!data
          ? `${this.baseUrl}${url}${queryStringify(data)}`
          : `${this.baseUrl}${url}`,
      );

      if (options.withCredentials) {
        xhr.withCredentials = true;
      }

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
