import BlockComponent from '../../utils/BlockComponent';
import ProfileTemplate from './ProfileBlock.tmpl';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
    validateName,
    validateLogin,
    validatePhone,
    validateEmail, checkInputData
} from '../../utils/dataValidators'
import {ProfileProps} from "../../pages/Profile/ProfileTypes";
import {chats} from "../../mockData/chatsList";
import TextButton from "../../components/TextButton/textButton";


export default class ProfileBlock extends BlockComponent<ProfileProps> {
    state;
    children: { [index: string]: BlockComponent };

    constructor(props: any = {}) {
        super('div', props);
        this.children = {};
        this.state = {
            formData: {
                email: '',
                login: '',
                first_name: '',
                second_name: '',
                phone: '',
                name: ''
            }
        }
    }

    isDataValid = () => {
        Object.entries(this.state.formData).forEach((item: [key: string, value: string]) => {
            switch (item[0]) {
                case 'login':
                    if (!validateLogin(item[1])) this.children.loginInput.className = ' required';
                    break;
                case 'email':
                    if (!validateEmail(item[1])) this.children.emailInput.className = ' required';
                    break;
                case 'first_name':
                    if (!validateName(item[1])) this.children.firstName.className = ' required';
                    break;
                case 'second_name':
                    if (!validateName(item[1])) this.children.secondName.className = ' required';
                    break;
                case 'phone':
                    if (!validatePhone(item[1])) this.children.inputPhone.className = ' required';
                    break;
            }
        })
    }

    init() {
        const {name, second_name, login, email, phone, chat_name} = this.props;
        this.children.changeDataButton = new TextButton({
            text: 'Изменить данные',
            className: 'profile-change-data-button',
            type: 'submit',
            events: {
                click: (e) => {
                    e.preventDefault();
                    Object.entries(this.props.children)
                }
            }
        });

        this.children.emailInput = new Input({
            placeholder: email,
            className: 'profile-user-info',
            name: 'email',
            type: 'text',
            max: '40',
            min: '5',
            pattern: 'pattern',
            value: '',
            disabled: true,
            events: {
                keyup: (e) => {
                    this.state.formData.email = e.target?.value;
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
            placeholder: login,
            className: 'profile-user-info',
            name: 'login',
            type: 'text',
            max: '20',
            min: '3',
            pattern: 'pattern',
            value: '',
            disabled: true,
            events: {
                keyup: (e) => {
                    this.state.formData.login = e.target?.value;
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
            placeholder: name,
            className: 'profile-user-info',
            name: 'first_name',
            type: 'text',
            max: '40',
            min: '3',
            pattern: 'pattern',
            value: '',
            disabled: true,
            events: {
                keyup: (e) => {
                    this.state.formData.name = e.target?.value;
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
            placeholder: second_name,
            className: 'profile-user-info',
            name: 'second_name',
            type: 'text',
            max: '40',
            min: '3',
            pattern: 'pattern',
            value: '',
            disabled: true,
            events: {
                keyup: (e) => {
                    this.state.formData.second_name = e.target?.value;
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
            placeholder: phone,
            className: 'profile-user-info',
            name: 'phone',
            type: 'tel',
            max: '10',
            min: '15',
            pattern: null,
            value: '',
            disabled: true,
            events: {
                keyup: (e) => {
                    this.state.formData.phone = e.target?.value;
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
        this.children.displayName = new Input({
            placeholder: chat_name,
            className: 'profile-user-info',
            name: 'chat_name',
            type: 'text',
            max: '40',
            min: '3',
            pattern: 'pattern',
            value: '',
            disabled: true,
            events: {
                keyup: (e) => {
                    this.state.formData.second_name = e.target?.value;
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
    }

    render() {
        return this.compile(ProfileTemplate, {});
    }
}