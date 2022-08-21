export default `
{{#unless @index}}
<hr class="chats-feed_hr"/>
{{/unless}}
<a href="#"
<div class="chat-item flex direction_row">
    <div class="chat-item__avatar-con">
        <div class="w_100 h_100">
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
    <div class="chat-item__info-con flex direction_row space-between">
        <div class="chat-item__name-con">
            <div class="chat-item__name">
            {{this.last_message.user.first_name}} {{this.last_message.user.second_name}}
            </div>
            <div class="chat-item__last-action">
                {{cutTextHelper this.last_message.content 15}}
            </div>
        </div>
        <div class="chat-item__time-con flex direction_column space-between align_fixed_end">
            <div class="chat-item__time-action">
                <span class="chat-item__action-time">{{dateHelper this.last_message.time}}</span>
            </div>
            <div class="w_100 h_100">
            {{# if this.unread_count}}
                <span class="chat-item__new-action-count flex justify_space_around align_items_center">{{this.unread_count}}</span>
             {{/if}}
            </div>
        </div>
    </div>
</div>
</a>
<hr class="chats-feed_hr"/>
`