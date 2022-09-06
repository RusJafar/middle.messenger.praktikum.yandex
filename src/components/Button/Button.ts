import BlockComponent from '../../utils/BlockComponent';
import ButtonTemplate from './Button.tmpl';

interface ButtonProps {
    className: string;
    text: string;
    type: string;
    events: { click: (e) => void }
}


export default class Button extends BlockComponent {
    constructor(props: ButtonProps) {
        super("div", props);
    }

    render() {
        const {text, className} = this.props;
        const buttonTemplate: any = ButtonTemplate;
        return this.compile(buttonTemplate, {text, className});
    }

    componentDidUpdate(oldProps, newProps) {
        return oldProps.text !== newProps.text ? true : false;
    }
}