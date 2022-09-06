import BlockComponent from '../../utils/BlockComponent';
// @ts-ignore
import InputTemplate from "./Input.tmpl.ts";


interface InputProps {
    min: string;
    max: string;
    name: string;
    pattern: string;
    className: string;
    placeholder: string;
    type: string;
    value: string;
    events: {
        keyup: (e) => void;
        blur?: (e) => void
    }
}

export default class Input extends BlockComponent {
    constructor(props: InputProps) {
        super("div", props);
    }

    render() {
        const {placeholder, className, name, type, max, min, pattern, value} = this.props;
        return this.compile(InputTemplate, {placeholder, className, name, type, max, min, pattern, value});
    }

    componentDidUpdate(oldProps, newProps) {
        return oldProps.text !== newProps.text ? true : false;
    }
}