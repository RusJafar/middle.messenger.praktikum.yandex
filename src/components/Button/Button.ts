import BlockComponent from '../../utils/BlockComponent';
import ButtonTemplate from './Button.tmpl';

interface ButtonProps { className: string; text: string; events: { click: () => void } }


export default class Button extends BlockComponent {
    constructor(props: ButtonProps) {
        super("div", props);
    }

    render() {
        const {text, className} = this.props;
        const buttonTemplate: any = ButtonTemplate; //TODO
        return this.compile(buttonTemplate, {text, className});
    }

    componentDidUpdate(oldProps, newProps) {
        return oldProps.text !== newProps.text? true: false;
    }
}