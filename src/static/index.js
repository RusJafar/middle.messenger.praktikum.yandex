import Handlebars from 'handlebars';
import "../components";
import '../helpers';
import {chats} from '../mockData/chatsList';

if (window.location.href.includes('login')) {
    console.log('Login')
}

if (window.location.href.includes('registration')) {
    console.log('registration')
}

const pageHref = window.location.href;
if (pageHref.includes('chats') || pageHref.includes('single-chat')) {
    console.log('cats')
    const chatsTemplate = `
            {{#each chats as |chat|}}
                {{> messageListItem chat}}
            {{/each}}
    `;

    const chatHeader = `
    {{> singleChatHeader singleChatData}}
    <hr class="single-chat-header_hr">
    `;

    const singleChat = `
      {{#unless chats}}
        <div class="splash-screen w_100">
            Выберите чат чтобы отправить сообщение
        </div>
      {{/unless}}
      {{#each chats}}
        {{> singleChatMessageItem }}
      {{/each}}
    `;

    const messageInput = `
        <hr class="single-chat-header_hr">
        {{> singleChatMessageInput }}
    `;
    window.addEventListener('DOMContentLoaded', () => {
        const compileChatList = Handlebars.compile(chatsTemplate);
        document.getElementById('chatList').innerHTML = compileChatList({chats});

        const singleChatData = chats[0];
        const compileSingleChat = Handlebars.compile(singleChat);
        document.getElementById('singleChat').innerHTML = compileSingleChat({chats});

        const compileChatHeader = Handlebars.compile(chatHeader);
        document.getElementById('chatHeader').innerHTML = compileChatHeader({singleChatData});

        const compileMessageInput= Handlebars.compile(messageInput);
        document.getElementById('messageInput').innerHTML = compileMessageInput({singleChatData});
    });
}






