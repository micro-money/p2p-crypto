require('dotenv').config()
import app from './App'
const port = process.env.PORT || 9000;

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
});