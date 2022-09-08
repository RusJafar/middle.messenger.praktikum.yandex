const registrationForm = `
<div class="modal flex justify_content_between align_items_center direction_column">
        <div class="modal__title-con">
            <h2 class="modal__title">Регистрация</h2>
        </div>
        <form class="login-form  flex align_items_center direction_column">
            <div class="login-form__inputs flex align_items_center direction_column">
                <input class="login-form__input" type="text" name="email" placeholder="Почта"/>
                <input class="login-form__input" type="text" name="login" placeholder="Логин"/>
                <input class="login-form__input" type="text" name="first_name" placeholder="Имя"/>
                <input class="login-form__input" type="text" name="second_name" placeholder="Фамилия"/>
                <input class="login-form__input" type="text" name="phone" placeholder="Телефон"/>
                <input class="login-form__input" type="text" name="password" placeholder="Пароль"/>
                <input class="login-form__input" type="text" name="repeat_password" placeholder="Повторите пароль"/>
            </div>
            <div class="login-form__buttons flex align_items_center direction_column mt-2">
                <button type="submit" class="login-form__button">Зарегистрироваться</button>
                <a href="login.html" alt="Войти" class="registration-link">Войти</a>
            </div>
        </form>
    </div>
`;

export default registrationForm;