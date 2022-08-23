import Handlebars from 'handlebars';
import "../components";
import '../helpers';
import {chats} from '../mockData/chatsList';
import loginFormTmpl from '../components/loginForm/loginForm.tmpl'
import registrationForm from "../components/registrationForm/registrationForm.tmpl";
import error500 from "../components/error500/error500";
import error404 from "../components/error404/error404";
import singleChat from "../components/singleChat/singleChat";
import chatHeader from "../components/chatHeader/chatHeader";
import sendMessagePanel from "../components/sendMessagePanel/sendMessagePanel";
import chatListLeftBar from "../components/chatListLeftBar/chatListLeftBar";

if (window.location.href.includes('login')) {
    const compile = Handlebars.compile(loginFormTmpl);
    document.getElementById('loginForm').innerHTML = compile({});
}

if (window.location.href.includes('registration')) {
    console.log('registration')
    const compile = Handlebars.compile(registrationForm);
    document.getElementById('registrationForm').innerHTML = compile({});
}

if (window.location.href.includes('500')) {
    console.log('500')
    const compile = Handlebars.compile(error500);
    document.getElementById('error500').innerHTML = compile({});
}

if (window.location.href.includes('404')) {
    console.log('404')
    const compile = Handlebars.compile(error404);
    document.getElementById('error404').innerHTML = compile({});
}

const pageHref = window.location.href;
if (pageHref.includes('chats') || pageHref.includes('single-chat')) {
    console.log('cats')
    window.addEventListener('DOMContentLoaded', () => {
        const compileChatList = Handlebars.compile(chatListLeftBar);
        document.getElementById('chatList').innerHTML = compileChatList({chats});

        const singleChatData = chats[0];
        const compileSingleChat = Handlebars.compile(singleChat);
        document.getElementById('singleChat').innerHTML = compileSingleChat({chats});

        const compileChatHeader = Handlebars.compile(chatHeader);
        document.getElementById('chatHeader').innerHTML = compileChatHeader({singleChatData});

        const compileMessageInput= Handlebars.compile(sendMessagePanel);
        document.getElementById('messageInput').innerHTML = compileMessageInput({singleChatData});
    });
}






