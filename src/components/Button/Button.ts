import BlockComponent from '../../utils/BlockComponent';
import ButtonTemplate from './Button.tmpl';
import ButtonProps from "./ButtonTypes";

export default class Button extends BlockComponent {
    constructor(props: ButtonProps) {
        super("div", props);
    }

    render() {
        const {text, className, disabled} = this.props;
        const buttonTemplate: any = ButtonTemplate;
        return this.compile(buttonTemplate, {text, className, disabled});
    }

    componentDidUpdate(oldProps: ButtonProps, newProps: ButtonProps) {
        return JSON.stringify(oldProps) === JSON.stringify(newProps);
    }
}