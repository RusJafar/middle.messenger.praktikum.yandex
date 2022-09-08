// import Handlebars from 'handlebars';
// import template from './singleChatHeader.tmpl';
//
// Handlebars.registerPartial('singleChatHeader', template);


import BlockComponent from '../../utils/BlockComponent';
import SingleChatHeaderTemplate from './SingleChatHeader.tmpl'

interface SingleChatHeaderProps {
    unread_count: number,
    last_message: { time: string, user: { phone: string, second_name: string, avatar: string, login: string, first_name: string, email: string }, content: string },
    id: number,
    avatar: null,
    title: string
}


export default class SingleChatHeader extends BlockComponent {
    constructor(props: { singleChatData: SingleChatHeaderProps }) {
        super("div", props);
    }

    render() {
        const {singleChatData} = this.props;
        const {avatar, title, last_message} = singleChatData;
        const buttonTemplate: string = SingleChatHeaderTemplate;
        return this.compile(buttonTemplate, {avatar, title, last_message});
    }

    componentDidUpdate(oldProps, newProps) {
        return JSON.stringify(oldProps) === JSON.stringify(newProps);
    }
}