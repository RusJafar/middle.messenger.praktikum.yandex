export default `
<div>
<div class="chats-feed">
        <div class="header-bar flex direction_column">
            <div class="header-bar__profile flex justify_content_end">
                <a href="profile.html" >Профиль ></a>
            </div>
            <input class="chats-feed__search-input" type="text" placeholder="Поиск"/>
        </div>
        <div class="chats-feed__list flex direction_column">
            {{{chatList}}}
        </div>
</div>

<div class="chat-right-column">
    <div id="chatHeader"></div>
    <div class="single-chat">
        {{{singleChatHeader}}}
        {{{singleChat}}}
        
    </div>
    {{{singleChatMessageInput}}}
</div>

</div>
`;