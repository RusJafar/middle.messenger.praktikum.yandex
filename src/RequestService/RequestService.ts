const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH'
};

function queryStringify(data) {
    let path = '?';
    let params = [];

    Object.entries(data).forEach(([key, value]) => {
        params.push(`${key}=${value}`);
    })

    return `?${params.join('&')}`
}

class HTTPTransport {
    get = (url, options = {}) => {
        console.log(options.data)
        if(options.data) {
            url += queryStringify(options.data);
        }

        return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };

    post = (url, options = {}) => {

        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    put = (url, options = {}) => {

        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };
    delete = (url, options = {}) => {

        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
    request = (url, options) => {
        const {data, method, headers, timeout} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url);

            xhr.onload = function() {
                return resolve(xhr)
            }

            xhr.onerror = reject;
            xhr.onabord = reject;
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