const express = require('express')

const app = express();

app.use(express.json())


const connection = require('./config/db.config')
connection.once('open', ()=> {
    console.log("DB Connected")
})
connection.on('error', () => {
    console.log("DB Connection Error")
})


app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))
// require('./routes/')

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});