import BlockComponent from '../../utils/BlockComponent';
import loginFormTemplate from './LoginFormBlock.tmpl';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
    validateLogin,
    validatePass,
} from '../../utils/dataValidators'
import {LoginFormBlockStateType} from "./LoginFormTypes";


export default class LoginFormBlock extends BlockComponent {
    state: LoginFormBlockStateType;
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            isLoginValid: false,
            isPassValid: false
        }
    }

    isDataValid = () => {
        if(this.state.isLoginValid && this.state.isPassValid) {
            this.children.button.setProps({disabled: ''})
        } else {
            this.children.button.setProps({disabled: 'disabled'})
        }
    }


    init() {
        this.children.button = new Button({
            text: 'Авторизоваться',
            className: 'login-form__button',
            type: 'submit',
            disabled: 'disabled',
            events: {
                click: (e) => {
                    e.preventDefault();
                    console.log(JSON.stringify(this.state))
                    this. isDataValid();

                }
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
                    this.state.login = e.target.value;
                },
                focus: (e) => {
                    console.log(e.target.value)

                },
                blur: (e) => {
                    const value = e.target.value;
                    const isDataValid = validateLogin(value);

                    if (!isDataValid) {
                        e.target.classList.add('required');
                        this.state.isLoginValid = false;
                        this.isDataValid();
                    } else {
                        e.target.classList.remove('required');
                        this.state.isLoginValid = true;
                        this.isDataValid();
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
            value: '',
            events: {
                keyup: (e) => {
                    this.state.password = e.target.value;
                    console.log(this.props);

                },
                focus: () => {
                    console.log('focuse')

                },
                blur: (e) => {
                    const value = e.target.value;
                    const isDataValid = validatePass(value);
                    if (!isDataValid) {
                        e.target.classList.add('required');
                        this.state.isPassValid = false;
                        this.isDataValid();
                    } else {
                        e.target.classList.remove('required');
                        this.state.isPassValid = true;
                        this.isDataValid();
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