import EventBus from "../EventBus/EventBus";
import {v4 as makeUUID} from 'uuid';


export default class Block {
    props;
    eventBus;
    _id = null;
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update"
    };

    _element = null;
    _meta = null;

    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName = "div", propsAndChildren) {
        const {children, props} = this._getPropsAndChildren(propsAndChildren);
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };
        this._id = makeUUID();

        this.children = children;
        this.props = this._makePropsProxy({...props, __id: this._id});

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    _createResources() {
        const {tagName} = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        console.log(`INIT PROPS ${JSON.stringify(this.props)}`)
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }

    _componentDidMount() {
        this.componentDidMount();

        Object.entries(this.children).forEach(child => {
            child.dispatchComponentDidMount();
        })
    }

    componentDidMount(oldProps) {
    }

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps, newProps) {
        console.log(`Old props: ${JSON.stringify(oldProps)} \nNew props ${JSON.stringify(newProps)}`)
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    componentDidUpdate(oldProps, newProps) {
        return true;
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }
        console.log('Update props ' + JSON.stringify(nextProps))
        Object.assign(this.props, nextProps)
    };

    get element() {
        return this._element;
    }

    _render() {
        const block = this.render();
        // this._removeEventListeners();
        console.log('_RENDER')
        this._element.replaceWith(block);
        this._addEvents();
    }

    render() {
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props) {
        const self = this;
        return new Proxy(props, {
            get(target, prop) {
                // if (prop.indexOf('_') === 0) {
                //     throw new Error('Нет доступа')
                // }
                const value = target[prop];
                console.log(`Get data ${JSON.stringify(target)}: ${target[prop]}`);
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop, value) {
                // if (prop.indexOf('_') === 0) {
                //     throw new Error('Нет доступа')
                // }
                const oldTarget = {...target};
                target[prop] = value;
                console.log(`Set data ${prop} ${value}`);
                console.log(`Target ${JSON.stringify(target[prop])}`);
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty(target, prop) {
                throw new Error('Нет доступа');
            }
        });

    }

    _createDocumentElement(tagName) {
        const element = document.createElement(tagName);
        element.setAttribute('data-id', this._id);
        return element;
    }

    show() {
        this.getContent().style.display = 'block';
    }

    hide() {
        this.getContent().style.display = "none";

    }

    _addEvents() {
        const {events = {}} = this.props;
        console.log(`EVENTS ${JSON.stringify(events)}`)
        Object.keys(events).forEach(eventName => {
            this._element.addEventListener(eventName, events[eventName])
        });
    }

    _removeEventListeners() {
        const {events} = this.props;
        Object.entries(events).forEach(([eventName, listener]) => {
            this._element.removeEventListener(eventName, listener)
        })

        Object.values(this.children).forEach(child => {
            const {events} = child.props;
            Object.entries(events).forEach(([eventName, listener]) => {
                child.removeEventListener(eventName, listener)
            })
        })
    }

    _getPropsAndChildren(propsAndChildren) {
        const children = {};
        const props = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return {children, props};
    }

    compile(template, props) {
        const propsAndStabs = {...props};

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStabs[key] = `<div data-id"=${child._id}"></div>`
        });
        const compile = Handlebars.compile(template);
        const fragment = document.createElement('template');
        fragment.innerHTML = compile(propsAndStabs);

        Object.values(this.children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
            stub.replaceWith(child.getContent().outerHTML);
        })

        console.log(`Compile ${JSON.stringify(propsAndStabs)}`)
        console.log(`Compile/Children ${JSON.stringify(this.children)}`)

        return fragment.content;
    }
}