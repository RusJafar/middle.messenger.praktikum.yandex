import BlockComponent from '../../utils/BlockComponent';
import ButtonTemplate from './TextButton.tmpl';
import ButtonProps from "../Button/ButtonTypes";

export default class TextButton extends BlockComponent<ButtonProps> {
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