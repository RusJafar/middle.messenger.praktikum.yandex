export default `
<div class="single-chat__message-list">
    <div class="single-chat__single-message">
        <div class="single-chat__message-group">
            <div class="single-chat__message flex w_100 justify_content_end">
               <div class="single-chat__message-content">
                    <span class="single-chat__message-text">
                    {{this.last_message.content}}
                    </span>
                    <div class="single-chat__meta flex justify_content_end">
                        <span>22:00</span>
                    </div>
               </div>
            </div>
        </div>
    </div>
</div>
`;