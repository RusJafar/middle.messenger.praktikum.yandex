export default `
<div class="background_green flex align_items_center" style="height: 100%">
<div class="modal flex justify_content_between align_items_center direction_column">
        <div class="modal__title-con">
            <h2 class="modal__title">Вход</h2>
        </div>
        <form class="login-form  flex align_items_center direction_column">
            <div class="login-form__inputs flex align_items_center direction_column">
                {{{loginInput}}}
                {{{loginPassword}}}
            </div>
            <div class="login-form__buttons flex align_items_center direction_column mt-2">
                {{{button}}}
            </div>
        </form>
    </div>
    </div>
`;
