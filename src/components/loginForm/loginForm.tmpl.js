const loginFormTmpl = `
<div class="modal flex justify_content_between align_items_center direction_column">
        <div class="modal__title-con">
            <h2 class="modal__title">Вход</h2>
        </div>
        <form class="login-form  flex align_items_center direction_column">
            <div class="login-form__inputs flex align_items_center direction_column">
                <input class="login-form__input" type="text" name="login" placeholder="Логин"/>
                <input class="login-form__input" type="text" pasword="password" placeholder="Пароль"/>
            </div>
            <div class="login-form__buttons flex align_items_center direction_column mt-2">
                <button type="submit" class="login-form__button">Авторизоаться</button>
            </div>
        </form>
    </div>
`
export default loginFormTmpl;