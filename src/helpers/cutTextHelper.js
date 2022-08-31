import Handlebars from 'handlebars';

Handlebars.registerHelper('cutTextHelper', (text, count) => new Handlebars.SafeString(`${text.split(count)}${text.length > count ? '...' : ''}`));
