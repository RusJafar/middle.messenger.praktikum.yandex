import BlockComponent from '../../utils/BlockComponent';
import loginFormTemplate from './LoginFormBlock.tmpl';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
    validateLogin,
    validatePass,
    checkInputData
} from '../../utils/dataValidators'
import {LoginFormBlockStateType} from "./LoginFormTypes";
import {AuthController} from "../../controllers/AuthController";
import {SigninData} from "../../api/AuthAPI";
import render from "../../utils/renderDOM";


export default class LoginFormPage extends BlockComponent {
    state: LoginFormBlockStateType;

    constructor(props: any = {}) {
        super('div', props);
        this.state = {
            login: '',
            password: '',
        }
    }

    isDataValid = () => {
        Object.entries(this.state).forEach((item: [key: string, value: string]) => {
            switch (item[0]) {
                case 'login':
                    if (!validateLogin(item[1])) this.children.loginInput.className = ' required';
                    break;
                case 'password':
                    if (!validatePass(item[1])) this.children.loginPassword.className = ' required';
                    break;
            }
        })
    }

    init() {
        this.children.button = new Button({
            text: 'Авторизоваться',
            className: 'login-form__button',
            type: 'submit',
            disabled: null,
            events: {
                click: (e) => {
                    e.preventDefault();
                    console.log(JSON.stringify(this.state))
                    this.isDataValid();
                    this.onSubmit();
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
                    console.log(e.target?.value)
                    this.state.login = e.target?.value;
                },
                focus: (e) => {
                    const target = e.target;
                    checkInputData(target, validateLogin);
                },
                blur: (e) => {
                    const target = e.target;
                    checkInputData(target, validateLogin);
                }
            }
        });
        this.children.loginPassword = new Input({
            placeholder: 'Пароль',
            className: 'login-form__input',
            name: 'password',
            type: 'password',
            max: '40',
            min: '8',
            pattern: 'pattern',
            value: '',
            events: {
                keyup: (e) => {
                    this.state.password = e.target?.value;
                    console.log(this.props);

                },
                focus: (e) => {
                    const target = e.target;
                    checkInputData(target, validatePass);

                },
                blur: (e) => {
                    const target = e.target;
                    checkInputData(target, validatePass);
                }
            }
        });
    }

    onSubmit = async () => {
        const values = Object
            .values(this.children)
            .filter(child => child instanceof Input)
            .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

        const data = Object.fromEntries(values);

        const authController = new AuthController();
        await authController.signin(data as SigninData)
    }

    render() {
        return this.compile(loginFormTemplate, {});
    }
}