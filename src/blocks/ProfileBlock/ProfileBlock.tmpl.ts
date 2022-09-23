export default `
<div class="profile flex direction_row">
    <div class="profile-left-column flex">
        <button class="profile-back-button">Назад</button>
    </div>
    <div class="profile-right-section flex">
        <div class="profile-centre-section flex align_items_center direction_column">
            <div class="profile-avatar-section">
                <div class="profile-user-avatar-con">
                    Ava here
                    <!--                    <img src="" alt="avatar" />-->
                </div>
                <div class="profile-avatar-user-name">
                    <span class="profile-user-name">Russel</span>
                </div>
            </div>
            <div class="profile-user-info-section">
                <div class="profile-user-info-section">
                    <label for="email">Email</label>
                    {{{emailInput}}}
                </div>
                <div class="profile-user-info-section">
                    <label for="login">Логин</label>
                    {{{loginInput}}}
                </div>
                <div class="profile-user-info-section">
                    <label for="first_name">Имя</label>
                   {{{nameInput}}}
                </div>
                <div class="profile-user-info-section">
                    <label for="second_name">Фамилия</label>
                    {{{secondNameInput}}}
                </div>
                <div class="profile-user-info-section">
                    <label for="display_name">Имя в чате</label>
                    {{{displayName}}}
                </div>
                <div class="profile-user-info-section">
                    <label for="phone">Телефон</label>
                    <input
                            class="profile-user-info"
                            type="text"
                            name="phone"
                            disabled="true"
                            placeholder="Телефон"
                    id="phone"
                    value="+7 999 777 65 43"/>
                </div>
            </div>
            <div class="profile-action-panel-section">
                <div class="profile-change-data-section">
                {{{changeDataButton}}}
                </div>
                <div class="profile-change-data-section">
                    <span class="profile-change-data-button">Изенить пароль</span>
                </div>
                <div class="profile-change-data-section">
                    <span class="profile-change-data-button__exit">Выйти</span>
                </div>
            </div>
        </div>
    </div>
</div>
`;
