export default `
   {{#each chats as |chat|}}
                {{> messageListItem chat}}
    {{/each}}
`;
