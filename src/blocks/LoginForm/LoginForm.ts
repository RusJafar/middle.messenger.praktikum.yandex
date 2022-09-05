import BlockComponent from '../../utils/BlockComponent';
import loginFormTemplate from './LoginForm.tmpl';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";



export default class LoginForm extends BlockComponent {
    constructor(props) {
        super("div", props);
    }
    init() {
        this.children.button = new Button({
            text: 'Авторизоваться',
            className: 'login-form__button',
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
            pattern: 'pattern'
        });
        this.children.loginPassword = new Input({
            placeholder: 'Пароль',
            className: 'login-form__input',
            name: 'password',
            type: 'text',
            max: '40',
            min: '8',
            pattern: 'pattern'
        });
    }

    render() {
        const {text} = this.props;
        return this.compile(loginFormTemplate, {text});
    }

    componentDidUpdate(oldProps, newProps) {
        return oldProps.text !== newProps.text? true: false;
    }
}