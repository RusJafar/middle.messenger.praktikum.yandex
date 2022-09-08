
global.value

enum METHODS  {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH'
};


function queryStringify(data) {
    let params = [];
    
    Object.entries(data).forEach(([key, value]) => {
        params.push(`${key}=${value}`);
    })

    return `?${params.join('&')}`
}

type Options = {
    data: any,
    method: string,
    headers: string,
    timeout: number
}

class HTTPTransport {
    get = (url: string, options: Options) => {
        if(options.data) {
            url += queryStringify(options.data);
        }

        return this.request(url, {data: options.data, headers: options.headers, method: METHODS.GET, timeout:options.timeout});
    };

    post = (url, options: Options) => {

        return this.request(url, {data: options.data, headers: options.headers, method: METHODS.GET, timeout: options.timeout});
    };

    put = (url, options: Options) => {

        return this.request(url, {data: options.data, headers: options.headers, method: METHODS.GET, timeout:options.timeout});
    };
    delete = (url, options:Options) => {

        return this.request(url, {data: options.data, headers: options.headers, method: METHODS.GET, timeout:options.timeout});
    };

    request = (url: string, options: Options) => {
        const {data, method, headers, timeout} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url);

            xhr.onload = function() {
                return resolve(xhr)
            }

            xhr.onerror = reject;
            xhr.onabort = reject;
            xhr.withCredentials = true;
            xhr.ontimeout = reject;
            xhr.timeout = timeout;
            xhr.setRequestHeader(headers && "Content-type", "application/json")

            if(method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        })
    };
}

function fetchWithRetry(url, options) {
    // код
    const promise = new HTTPTransport();
    ;

    const countRetry = (retries) =>  {
        if(retries > 0) {
            return true;
        }
        return false;
    }

    return promise.post(url, options).then(response => response).catch((err) => {
        if(countRetry(options.retries)) {
            fetchWithRetry(url, options.retries - 1);
        }

        throw new Error(err);
    })
}