import BlockComponent from '../../utils/BlockComponent';
import registrationFormBlockTmpl from './RegistrationFormBlock.tmpl';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
    validateName,
    validateLogin,
    validatePhone,
    validatePass,
    validateEmail
} from '../../utils/dataValidators'


export default class RegistrationFormBlock extends BlockComponent {
    constructor(props) {
        super(props);
    }

    init() {
        this.children.button = new Button({
            text: 'Зарегистрироваться',
            className: 'login-form__button',
            type: 'submit',
            events: {
                click: (e) => {
                    e.preventDefault();
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
                    console.log(e.target.value)
                },
                blur: (e) => {
                    const value = e.target.value;
                    if (!validateEmail(value)) {
                        e.target.classList.add('required');
                    } else {
                        e.target.classList.remove('required');
                    }
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
                    const value = e.target.value;
                    this.props.value = value
                },
                blur: (e) => {
                    const value = e.target.value;
                    if (!validateLogin(value)) {
                        e.target.classList.add('required');
                    } else {
                        e.target.classList.remove('required');
                    }
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
                    const value = e.target.value;
                    this.props.value = value
                },
                blur: (e) => {
                    const value = e.target.value;
                    if (!validateName(value)) {
                        e.target.classList.add('required');
                    } else {
                        e.target.classList.remove('required');
                    }
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
                    const value = e.target.value;
                    this.props.value = value
                },
                blur: (e) => {
                    const value = e.target.value;
                    if (!validateName(value)) {
                        e.target.classList.add('required');
                    } else {
                        e.target.classList.remove('required');
                    }
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
            pattern: 'pattern',
            value: '',

            events: {
                keyup: (e) => {
                    const value = e.target.value;
                    this.props.value = value
                },
                blur: (e) => {
                    const value = e.target.value;
                    if (!validatePhone(value)) {
                        e.target.classList.add('required');
                    } else {
                        e.target.classList.remove('required');
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
                    const value = e.target.value;
                    this.props.value = value
                },
                blur: (e) => {
                    const value = e.target.value;
                    if (!validatePass(value)) {
                        e.target.classList.add('required');
                    } else {
                        e.target.classList.remove('required');
                    }
                }
            }
        });
        this.children.loginPasswordRepeat = new Input({
            placeholder: 'Повторите пароль',
            className: 'login-form__input',
            name: 'repeat_password',
            type: 'text',
            max: '40',
            min: '8',
            pattern: 'pattern',
            value: '',
            events: {
                keyup: (e) => {
                    const value = e.target.value;
                    this.props.value = value
                },
                blur: (e) => {
                    const value = e.target.value;
                    if (!validatePass(value)) {
                        e.target.classList.add('required');
                    } else {
                        e.target.classList.remove('required');
                    }
                }
            }
        });
    }

    render() {
        const {text} = this.props;
        return this.compile(registrationFormBlockTmpl, {text});
    }

    componentDidUpdate(oldProps, newProps) {
        return oldProps.text !== newProps.text ? true : false;
    }
}