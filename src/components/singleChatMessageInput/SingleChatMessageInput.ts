// import Handlebars from 'handlebars';
// import template from './singleChatMessageInput.tmpl';
//
// Handlebars.registerPartial('singleChatMessageInput', template);


import BlockComponent from "../../utils/BlockComponent";
import SingleChatMessageInputTemplate from './singleChatMessageInput.tmpl'


export default class SingleChatMessageInput extends BlockComponent {
    constructor(props = {}) {
        super("div", props);
    }

    render() {
        const {text, className} = this.props;
        const buttonTemplate: any = SingleChatMessageInputTemplate;
        return this.compile(buttonTemplate, {text, className});
    }

    componentDidUpdate(oldProps, newProps) {
        return JSON.stringify(oldProps) === JSON.stringify(newProps);
    }
}