export default `
<div>
   {{#each chats as |chat|}}
                {{> messageListItem chat}}
    {{/each}}
</div>
`;