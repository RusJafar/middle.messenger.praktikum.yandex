export default `
<div>
      {{#unless chats}}
        <div class="splash-screen w_100">
            Выберите чат чтобы отправить сообщение
        </div>
      {{/unless}}
      {{#each chats}}
        {{> singleChatMessageItem }}
      {{/each}}
</div>
`;
