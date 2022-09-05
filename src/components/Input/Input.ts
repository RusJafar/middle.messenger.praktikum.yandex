import BlockComponent from '../../utils/BlockComponent';
import InputTemplate from './Input.tmpl.ts';

interface InputProps {
    placeholder: string,
    className: string,
    name: string,
    type: string,
    max: string,
    min: string,
    pattern: string
}

export default class Input extends BlockComponent {
    constructor(props: InputProps) {
        super("div", props);
    }

    render() {
        const {placeholder, className, name, type, max, min, pattern} = this.props;
        return this.compile(InputTemplate, {placeholder, className, name, type, max, min, pattern});
    }

    componentDidUpdate(oldProps, newProps) {
        return oldProps.text !== newProps.text? true: false;
    }
}