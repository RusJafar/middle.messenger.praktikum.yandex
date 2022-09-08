import Handlebars from 'handlebars';
import '../components';
import '../helpers';
import {chats} from '../mockData/chatsList';
import error500 from '../components/error500/error500';
import error404 from '../components/error404/error404';
import profile from '../components/profile/profile';
import render from '../utils/renderDOM';
import LoginFormBlock from "../blocks/LoginForm/LoginFormBlock";
import RegistrationFormBlock from "../blocks/RegistrationFormBlock/RegistrationFormBlock";
import Chats from "../pages/Chat/Chat";


if (window.location.href.includes('login')) {
    const loginForm = new LoginFormBlock()
    render('#loginForm', loginForm)
}

if (window.location.href.includes('registration')) {
    const registrationFormBlock = new RegistrationFormBlock();
    render('#registrationForm', registrationFormBlock);

}

if (window.location.href.includes('500')) {
    console.log('500');
    const compile = Handlebars.compile(error500);
    document.getElementById('error500').innerHTML = compile({});
}

if (window.location.href.includes('404')) {
    console.log('404');
    const compile = Handlebars.compile(error404);
    document.getElementById('error404').innerHTML = compile({});
}

if (window.location.href.includes('profile')) {
    console.log('profile');
    const compile = Handlebars.compile(profile);
    document.getElementById('profile').innerHTML = compile({});
}

const pageHref = window.location.href;
if (pageHref.includes('chats') || pageHref.includes('single-chat')) {
    const singleChatData = chats[1];
    console.log(singleChatData)
    const chatListBlock = new Chats({chats, singleChatData});
    window.addEventListener('DOMContentLoaded', () => {
        render('#chatList', chatListBlock)
    });
}
