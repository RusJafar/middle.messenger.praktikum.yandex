import BlockComponent from '../../utils/BlockComponent';
import ButtonTemplate from './Button.tmpl';

interface ButtonProps {
    className: string;
    text: string;
    type: string;
    disabled?: string
    events: { click: (e) => void }
}


export default class Button extends BlockComponent {
    constructor(props: ButtonProps) {
        super("div", props);
    }

    render() {
        const {text, className, disabled} = this.props;
        const buttonTemplate: any = ButtonTemplate;
        return this.compile(buttonTemplate, {text, className, disabled});
    }

    componentDidUpdate(oldProps, newProps) {
        return JSON.stringify(oldProps)===JSON.stringify(newProps);
    }
}