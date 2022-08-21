export default `
    <div class="single-chat-header flex direction_row align_items_center">
      <div class="single-chat-header__avatar-con">
          <div class="">
            {{#if this.avatar}}
            <span class="chat-item__user_initials flex justify_space_around align_items_center">
                <img src="{{this.avatar}}" alt="" />
            </span>
            {{else}}
                <span class="chat-item__user_initials flex justify_space_around align_items_center">
                {{getInitialHelper this.last_message.user.first_name this.last_message.user.second_name}}
                </span>
            {{/if}}
            </div>
        </div>
      <div class="single-chat-header__info-con flex direction_row space-between">
        <div class="single-chat-header__name-con">
            <div class="single-chat-header__name">
            {{this.title}}
            </div>
        </div>
        <div onclick={alert('Hello')} class="single-chat-header__menu-con flex direction_column space-between align_fixed_end">
            <div class="single-chat-header__menu">
               &#8942;
            </div>
        </div>
    </div>
    </div>
`;