import * as Handlebars from "handlebars";


Handlebars.registerHelper("getInitialHelper", (firstName, secondName) => {
    const noSymbol = 0;
    const firstIndex = 0;
    return new Handlebars.SafeString(
        `${firstName || firstName?.length === noSymbol
            ? firstName[firstIndex].toUpperCase()
            : ''}${secondName || secondName?.length === noSymbol
            ? secondName[firstIndex].toUpperCase()
            : ''}`);
});