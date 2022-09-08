import BlockComponent from '../../utils/BlockComponent';
import chatListTemplate from './ChatListBlok.tmpl';

export default class ChatListBlock extends BlockComponent {
    constructor(props) {
        super("div", props);
    }

    render() {
        const {chats} = this.props;
        return this.compile(chatListTemplate, {chats});
    }

    componentDidUpdate(oldProps, newProps) {
        return JSON.stringify(oldProps) === JSON.stringify(newProps);
    }
}