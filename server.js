const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send('Test Base Route');
});


// Defining Routes
app.use('/api/cache', require('./routes/api/cache'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening at ${PORT}`));