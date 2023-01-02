import express from 'express'
import bodyParser from 'body-parser'
const app = express()
const PORT = 3000

import routerRoutes from './routes/users.js'

app.use(bodyParser.json())
app.use('/users', routerRoutes)

app.get('/', (req, res) => {
    console.log('Hello') 
    res.sendFile('./index.html')
})

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`))