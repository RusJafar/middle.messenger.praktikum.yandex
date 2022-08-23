const express = require('express') ;
const dotenv = require('dotenv')


dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/dist`));

app.listen(process.env.PORT || PORT, () => {
    console.log(`Express app listening on port ${PORT}`);
});
