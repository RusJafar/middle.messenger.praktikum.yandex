import Handlebars from 'handlebars';
import '../components';
import '../helpers';
import {chats} from '../mockData/chatsList';
import error500 from '../components/error500/error500';
import error404 from '../components/error404/error404';
import render from '../utils/renderDOM';
import LoginFormPage from "../pages/LoginPage/LoginFormPage";
import RegistrationFormBlock from "../blocks/RegistrationFormBlock/RegistrationFormBlock";
import Chats from "../pages/Chat/Chat";
import Profile from "../pages/Profile/Profile";
import Router from "../utils/Router";
import {AuthController} from "../controllers/AuthController";

enum Routes {
    Index = '/',
    Register = '/sing-up',
    Profile = '/settings',
    Messenger = '/messenger'
}


window.addEventListener('DOMContentLoaded', async () => {
    Router
        .use(Routes.Index, LoginFormPage)
        .use(Routes.Register, RegistrationFormBlock)
        .use(Routes.Profile, Profile)
        .use(Routes.Messenger, Chats)

    let isProtectedRoute = true;

    switch (window.location.pathname) {
        case Routes.Index:
        case Routes.Register:
        isProtectedRoute = false;
        break;
    }

    try {
        await AuthController.fetchUser();

        Router.start();

        if (!isProtectedRoute) {
            Router.go(Routes.Profile)
        }
    } catch (e) {
        Router.start();

        if (isProtectedRoute) {
            Router.go(Routes.Index);
        }
    }
})




// const userData = {
//     avatar: '',
//     name: 'Russel',
//     email: 'rus@rus.com',
//     login: 'RusJafar',
//     second_name: 'Tafary',
//     chat_name: 'RusJafar',
//     phone: '89520504196'
// }
//
//
// if (window.location.href.includes('login')) {
//     const loginForm = new LoginFormBlock();
//     render('#loginForm', loginForm);
// }
//
// if (window.location.href.includes('registration')) {
//     const registrationFormBlock = new RegistrationFormBlock();
//     render('#registrationForm', registrationFormBlock);
//
// }
//
// if (window.location.href.includes('500')) {
//     console.log('500');
//     const compile = Handlebars.compile(error500);
//     document.getElementById(`error500`).innerHTML  = compile({});
// }
//
// if (window.location.href.includes('404')) {
//     console.log('404');
//     const compile = Handlebars.compile(error404);
//     document.getElementById('error404').innerHTML = compile({});
// }
//
// if (window.location.href.includes('profile')) {
//     console.log('profile');
//     const profilePage  = new Profile(userData)
//     render('#profile', profilePage);
// }
//
// const pageHref = window.location.href;
// if (pageHref.includes('chats') || pageHref.includes('single-chat')) {
//     const singleChatData = chats[1];
//     console.log(singleChatData)
//     const chatListBlock = new Chats({chats, singleChatData});
//     window.addEventListener('DOMContentLoaded', () => {
//         render('#chatList', chatListBlock)
//     });
// }
