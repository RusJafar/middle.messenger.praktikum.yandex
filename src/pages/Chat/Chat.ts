import BlockComponent from '../../utils/BlockComponent';
import ChatListBlock from "../../blocks/ChatListBlock/ChatListBlock";
import chatTemplate from './Chst.tmpl'
import SingleChatComponent from '../../components/singleChat/SingleChatComponent'
import SingleChatHeader from "../../components/singleChatHeader/SingleChatHeader";
import {ChatsProps} from "./ChatTypes";
import SingleChatMessageInput from "../../components/singleChatMessageInput/SingleChatMessageInput";



export default class Chats extends BlockComponent {
    constructor(props: ChatsProps) {
        super('div', props);
    }

    init() {
        const {chats, singleChatData} = this.props;
        this.children.chatList = new ChatListBlock({chats});
        this.children.singleChat = new SingleChatComponent({chats});
        this.children.singleChatHeader = new SingleChatHeader({singleChatData});
        this.children.singleChatMessageInput = new SingleChatMessageInput();
    }

    render() {
        return this.compile(chatTemplate, {});
    }
}