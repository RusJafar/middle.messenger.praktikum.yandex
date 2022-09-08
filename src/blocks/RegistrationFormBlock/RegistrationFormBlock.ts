import BlockComponent from '../../utils/BlockComponent';
import registrationFormBlockTmpl from './RegistrationFormBlock.tmpl';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
    validateName,
    validateLogin,
    validatePhone,
    validatePass,
    validateEmail, checkInputData
} from '../../utils/dataValidators'
import {RegistrationBlockStateType} from "./RegistrationFormBlockTypes";


export default class RegistrationFormBlock extends BlockComponent {
    state: RegistrationBlockStateType;
    children: { [index: string]: BlockComponent };

    constructor(props: any) {
        super('div', props);
        this.children = {};
        this.state = {
            email: '',
            login: '',
            password: '',
            first_name: '',
            second_name: '',
            phone: '',
            repeat_password: ''
        }
    }

    isDataValid = () => {
        Object.entries(this.state).forEach((item: string[]) => {
            switch (item[0]) {
                case 'login':
                    if (!validateLogin(item[1])) this.children.loginInput.className = ' required';
                    break;
                case 'email':
                    if (!validateEmail(item[1])) this.children.loginPassword.className = ' required';
                    break;
                case 'password':
                    if (!validatePass(item[1])) this.children.loginPassword.className = ' required';
                    break;
                case 'first_name':
                    if (!validateName(item[1])) this.children.loginPassword.className = ' required';
                    break;
                case 'second_name':
                    if (!validateName(item[1])) this.children.loginPassword.className = ' required';
                    break;
                case 'phone':
                    if (!validatePhone(item[1])) this.children.loginPassword.className = ' required';
                    break;
                case 'repeat_password':
                    if (!validatePass(item[1])) this.children.loginPassword.className = ' required';
                    break;
            }
        })
    }

    init() {
        this.children.button = new Button({
            text: 'Зарегистрироваться',
            className: 'login-form__button',
            type: 'submit',
            events: {
                click: (e) => {
                    e.preventDefault();
                    console.log(JSON.stringify(this.state))
                    this.isDataValid();
                }
            }
        });
        this.children.emailInput = new Input({
            placeholder: 'Почта',
            className: 'login-form__input',
            name: 'email',
            type: 'text',
            max: '40',
            min: '5',
            pattern: 'pattern',
            value: '',
            events: {
                keyup: (e) => {
                    this.state.email = e.target.value;
                },
                focus: (e) => {
                    const target = e.target;
                    checkInputData(target, validateEmail);
                },
                blur: (e) => {
                    const target = e.target;
                    checkInputData(target, validateEmail);
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
                    this.state.login = e.target.value;
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
        this.children.nameInput = new Input({
            placeholder: 'Имя',
            className: 'login-form__input',
            name: 'first_name',
            type: 'text',
            max: '40',
            min: '3',
            pattern: 'pattern',
            value: '',
            events: {
                keyup: (e) => {
                    this.state.name = e.target.value;
                },
                focus: (e) => {
                    const target = e.target;
                    checkInputData(target, validateName);
                },
                blur: (e) => {
                    const target = e.target;
                    checkInputData(target, validateName);
                }
            }
        });
        this.children.secondNameInput = new Input({
            placeholder: 'Фамилия',
            className: 'login-form__input',
            name: 'second_name',
            type: 'text',
            max: '40',
            min: '3',
            pattern: 'pattern',
            value: '',
            events: {
                keyup: (e) => {
                    this.state.second_name = e.target.value;
                },
                focus: (e) => {
                    const target = e.target;
                    checkInputData(target, validateName);
                },
                blur: (e) => {
                    const target = e.target;
                    checkInputData(target, validateName);
                }
            }
        });
        this.children.phoneInput = new Input({
            placeholder: 'Телефон',
            className: 'login-form__input',
            name: 'phone',
            type: 'tel',
            max: '10',
            min: '15',
            pattern: null,
            value: '',

            events: {
                keyup: (e) => {
                    this.state.phone = e.target.value;
                },
                focus: (e) => {
                    const target = e.target;
                    checkInputData(target, validatePhone);
                },
                blur: (e) => {
                    const target = e.target;
                    checkInputData(target, validatePhone);
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
            pattern: null,
            value: '',

            events: {
                keyup: (e) => {
                    this.state.password = e.target.value;
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
        this.children.loginPasswordRepeat = new Input({
            placeholder: 'Повторите пароль',
            className: 'login-form__input',
            name: 'repeat_password',
            type: 'password',
            max: '40',
            min: '8',
            pattern: null,
            value: '',
            events: {
                keyup: (e) => {
                    this.state.repeat_password = e.target.value;
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

    render() {
        const {text} = this.props;
        return this.compile(registrationFormBlockTmpl, {text});
    }
}