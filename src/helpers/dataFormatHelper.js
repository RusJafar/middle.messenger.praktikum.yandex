import * as Handlebars from "handlebars";


Handlebars.registerHelper("dateHelper", (UTSTime) => {
    const time = new Date(UTSTime);

    return new Handlebars.SafeString(`${time.getHours()}:${time.getMinutes()}`);
});