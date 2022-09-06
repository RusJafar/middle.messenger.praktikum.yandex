export default `
    <div class="modal flex justify_content_between align_items_center direction_column">
        <div class="modal__title-con">
            <h2 class="modal__title">Регистрация</h2>
        </div>
        <form class="login-form  flex align_items_center direction_column">
            <div class="login-form__inputs flex align_items_center direction_column">
            {{{emailInput}}}
            {{{loginInput}}}
            {{{nameInput}}}
            {{{secondNameInput}}}
            {{{phoneInput}}}
            {{{loginPassword}}}
            {{{loginPasswordRepeat}}}
            </div>
            <div class="login-form__buttons flex align_items_center direction_column mt-2">
                   {{{button}}}
                <a href="login.html" alt="Войти" class="registration-link">Войти</a>
            </div>
        </form>
    </div>
`;