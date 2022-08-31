const chatListLeftBar = `
   {{#each chats as |chat|}}
                {{> messageListItem chat}}
    {{/each}}
`;

export default chatListLeftBar;
