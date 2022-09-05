class EventBus {
    constructor() {
        this.listeners = {};
    }

    on(event, callback) {
        //Коtд здесь
        if(!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event, callback) {
        //Код здесь
        if(!this.lstener[event]) {
            throw new Event(`Нет такого события ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
    )
    }

    emit(event, ...args) {
        //Код здесь
        if(!this.listeners[event]) {
            throw new Event(`Нет события ${event}`)
        }
        this.listeners[event].forEach(listener => {
            listener(...args);
        })
    }
}

const eventBus = new EventBus();

const handlerEvent1 = (arg1, arg2) => {
    console.log('first', arg1, arg2);
};

const handlerEvent2 = (arg1, arg2) => {
    console.log('second', arg1, arg2);
};

try {
    eventBus.emit('common:event-1', 42, 10);
} catch (error) {
    console.log(error); // Error: Нет события: common:event-1
}

eventBus.on('common:event-1', handlerEvent1);
eventBus.on('common:event-1', handlerEvent2);

eventBus.emit('common:event-1', 42, 10);
eventBus.off('common:event-1', handlerEvent2);

eventBus.emit('common:event-1', 84, 20);

/*
	* Вывод в консоли должен быть следующий:
Error: Нет события: common:event-1
first 42 10
second 42 10
first 84 20
*/

const props = {
    name: 'Abby',
    chat: 'the last of us. Part II',
    getChat() {
        this._privateMethod();
    },
    _privateMethod() {
        console.log(this._privateProp);
    },
    __privateMethodToo() {},
    _privateProp: 'Нельзя получить просто так',
};

const proxyProps = new Proxy(props, {
    get(target, prop) {
        if(prop.indexOf('_') === 0) {
            throw new Error('Нет доступа')
        }
        const value = target[prop];
        console.log(`Get data ${value}`);
        return typeof value === 'fanction'? value.bind(target): value;
    },
    set(target, prop, value) {
        if(prop.indexOf('_') === 0) {
            throw new Error('Нет доступа')
        }
        target[prop] = value;
        console.log(`Set data ${prop} ${value}`);
        return true;
    },
    deleteProperty(target, prop) {
        if(prop.indexOf('_') === 0) {
            throw new Error('Нет доступа')
        }
        target[prop] = null;
    }
});

proxyProps.getChat();
delete proxyProps.chat;

proxyProps.newProp = 2;
console.log(proxyProps.newProp);

try {
    proxyProps._newPrivateProp = 'Super game';
} catch (error) {
    console.log(error);
}

try {
    delete proxyProps._privateProp;
} catch (error) {
    console.log(error); // Error: Нет прав
}

/*
	* Вывод в консоль следующий:
Нельзя получить просто так
2
Error: Нет прав
Error: Нет прав
*/

class Button extends Block {
    constructor(props) {
        // Создаём враппер дом-элемент button
        super("button", props);
    }

    render() {
        // В проекте должен быть ваш собственный шаблонизатор
        return `<div>${this.props.text}</div>`;
    }

    componentDidUpdate(oldProps, newProps) {
        if(oldProps.text !== newProps.text) {
            //this.props = newProps;
            return true;
        }
        return false;
    }
}

function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    block.dispatchComponentDidMount();
    return root;
}

const button = new Button({
    text: 'Click me',
});

// app — это class дива в корне DOM
render(".app", button);

// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
    button.setProps({
        text: 'Click me, please',
    });
}, 1000);


const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH'
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data) {
    // Можно делать трансформацию GET-параметров в отдельной функции
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

    promise.post(url, options).then(response => response).catch((err) => {
        if(countRetry(options.retries)) {
            fetchWithRetry(url, options.retries - 1);
        }

        throw new Error(err);
    })
}