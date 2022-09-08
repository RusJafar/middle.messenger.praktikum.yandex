// import Handlebars from 'handlebars';
// import template from './singleChatHeader.tmpl';
//
// Handlebars.registerPartial('singleChatHeader', template);


import BlockComponent from '../../utils/BlockComponent';
import SingleChatTemplate from "../singleChat/SingleChatComponent.tmpl";

interface SingleChatHeaderProps { unread_count: number, last_message: { time: string, user: { phone: string, second_name: string, avatar: string, login: string, first_name: string, email: string }, content: string }, id: number, avatar: null, title: string }


export default class SingleChatHeader extends BlockComponent {
    constructor(props: { singleChatData: SingleChatHeaderProps }) {
        super("div", props);
    }

    render() {
        const {avatar, title} = this.props;
        const buttonTemplate: string = SingleChatTemplate;
        return this.compile(buttonTemplate, {avatar, title});
    }

    componentDidUpdate(oldProps, newProps) {
        return JSON.stringify(oldProps)===JSON.stringify(newProps);
    }
}