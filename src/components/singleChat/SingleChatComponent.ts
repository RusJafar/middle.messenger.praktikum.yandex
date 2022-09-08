import BlockComponent from '../../utils/BlockComponent';
import singleChatTemplate from './SingleChatComponent.tmpl'



export default class SingleChatComponent extends BlockComponent {
    constructor(props) {
        super('div', props);
    }

    render() {
        const {chats} = this.props;
        return this.compile(singleChatTemplate, {chats});
    }

    componentDidUpdate(oldProps, newProps) {
        return JSON.stringify(oldProps)===JSON.stringify(newProps);
    }
}