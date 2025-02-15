import express from 'express'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'

dotenv.config()

let app = express()
let PORT = process.env.PORT ?? 8080

import profileRoute  from './route/profile.route.js'
app.use(profileRoute)


app.listen(PORT, () => console.log("This server is running on http://localhost:" + PORT))