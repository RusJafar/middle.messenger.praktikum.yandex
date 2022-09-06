import BlockComponent from '../../utils/BlockComponent';
import loginFormTemplate from './LoginFormBlock.tmpl';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import * as console from "console";

//Валидация
//https://habr.com/ru/post/123845/

export default class LoginFormBlock extends BlockComponent {
    constructor(props) {
        super(props);
    }

    init() {
        this.children.button = new Button({
            text: 'Авторизоваться',
            className: 'login-form__button',
            type: 'submit',
            events: {
                click: () => console.log('clicked')
            }
        });
        this.children.loginInput = new Input({
            placeholder: 'Логин',
            className: 'login-form__input',
            name: 'login',
            type: 'text',
            max: '20',
            min: '3',
            pattern: 'pattern',
            value: '',
            events: {
                keyup: (e) => {
                    console.log(e.target.value)
                    this.props.value = e.target.value
                },
                focus: (e) => {
                    console.log(e.target.value)

                },
                blur: (e) => {
                    const value = e.target.value;
                    console.log('blur ' + e.target.value)
                    if (!(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(value))) {
                        e.target.classList += ' required';
                    }
                }
            }
        });
        this.children.loginPassword = new Input({
            placeholder: 'Пароль',
            className: 'login-form__input',
            name: 'password',
            type: 'text',
            max: '40',
            min: '8',
            pattern: 'pattern',
            value: 'dd',
            events: {
                keyup: (e) => {
                    this.setProps({value: e.target.value})
                    console.log(this.props)
                },
                focus: (e) => {
                    console.log('focuse')

                },
                blur: (e) => {
                    const value = e.target.value;
                    console.log('blur ' + value)
                    if (!(/(?=^.{3,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).{8,10}$/.test(value))) {
                        e.target.classList += ' required';
                    }
                }
            }
        });
    }

    render() {
        return this.compile(loginFormTemplate, {});
    }

    componentDidUpdate(oldProps, newProps) {
        return oldProps.text !== newProps.text ? true : false;
    }
}