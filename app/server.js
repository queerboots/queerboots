/* npm packages */
import bodyParser from 'body-parser'
import express    from 'express'
import flash      from 'express-flash-messages'
import morgan     from 'morgan'
import path       from 'path'
/* local imports */
import Routes     from './routes'

/* init config */
import 'dotenv/config'
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.PORT     = process.env.PORT     || 3030

/* log start-up */
console.log(`Starting Queer Boots in ${process.env.NODE_ENV} mode...`)

/* initialize express app */
const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

/* https/proxy settings */
if(process.env.USE_HTTPS == 'true') app.set('trust proxy', 1)

/* set up request logging to console via morgan */
if(process.env.NODE_ENV == 'development') { app.use(morgan('dev'))  }
else                                      { app.use(morgan('tiny')) }

/* serve /assets folder statically */
app.use('/assets', express.static(path.join(__dirname, 'assets')))

/* make sure request bodies are parsed properly */
app.use(bodyParser.urlencoded({ extended: false }))

/* use express-flash-messages for notifs */
app.use(flash())

/* useful local function for doing static links in views etc */
app.locals.path = (x) => process.env.ROOT_URL + x

/* initialize routes */
Routes(app)

/* all done! start listening */
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`))