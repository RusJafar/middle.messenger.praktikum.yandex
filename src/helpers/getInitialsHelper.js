import * as Handlebars from "handlebars";


Handlebars.registerHelper("getInitialHelper", (firstName, secondName) => {
    return new Handlebars.SafeString(
        `${firstName || firstName?.length === 0
            ? firstName[0].toUpperCase()
            : ''}${secondName || secondName?.length === 0
            ? secondName[0].toUpperCase()
            : ''}`);
});