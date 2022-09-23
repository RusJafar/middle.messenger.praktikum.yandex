export default `
    <input class="{{className}}" 
    type="{{type}}" name="{{name}}" 
    placeholder="{{placeholder}}" 
    pattern="{{pattern}}" 
    min="{{min}}" 
    max="{{max}}"
    value="{{value}}"
    {{#if disabled}}
        disabled="{{disabled}}"
    {{/if}}/>
`