const express = require('express'),
    dotenv = require('dotenv')



dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/dist`));

app.route('/login').get((req, res) => {
    res.sendFile(`${__dirname}/dist/login.html`);
});

app.route('/registration').get((req, res) => {
    res.sendFile(`${__dirname}/dist/registration.html`);
});

app.route('/chats').get((req, res) => {
    res.sendFile(`${__dirname}/dist/chats.html`);
});

app.route('/single-chat').get((req, res) => {
    res.sendFile(`${__dirname}/dist/single-chat.html`);
});

app.route('/profile').get((req, res) => {
    res.sendFile(`${__dirname}/dist/profile.html`);
});

app.route('/404').get((req, res) => {
    res.sendFile(`${__dirname}/dist/404.html`);
});

app.route('/500').get((req, res) => {
    if(res.status === 404) {}
});


app.listen(process.env.PORT || PORT, () => {
    console.log(`Express app listening on port ${PORT}`);
});
