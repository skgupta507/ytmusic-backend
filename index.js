const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config({ path: './.env' });
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(require('./routes/homepage'));
app.use(require('./routes/option'));
app.get('*', (req, res) => {
    res.status(200).json({ message: 'bad request' });
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})
