/* npm packages */
import bodyParser          from 'body-parser'
import express             from 'express'
import morgan              from 'morgan'
import path                from 'path'
import {Request, Response} from 'express'
import {createConnection}  from 'typeorm'
import 'reflect-metadata'
/* local imports */
import {Router}   from './router'

/* init config */
import 'dotenv/config'

/* log start-up */
console.log(`Starting Queer Boots in ${process.env.NODE_ENV} mode...`)

/* do everything within typeORM connection */
createConnection().then(async connection => {

    /* make sure config is valid */
    process.env.NODE_ENV = process.env.NODE_ENV || 'development'
    process.env.PORT     = process.env.PORT     || '3030'

    /* initialize express app */
    const app = express()
    app.set('views', path.join(__dirname, '../app/views'))
    app.set('view engine', 'pug')

    /* https/proxy settings */
    if(process.env.USE_HTTPS == 'true') app.set('trust proxy', 1)

    /* set up request logging to console via morgan */
    if(process.env.NODE_ENV == 'development') { app.use(morgan('dev'))  }
    else                                      { app.use(morgan('tiny')) }

    /* serve /assets folder statically */
    app.use('/assets', express.static(path.join(__dirname, '../app/assets')))

    /* make sure request bodies are parsed properly */
    app.use(bodyParser.urlencoded({ extended: false }))

    /* useful local function for doing static links in views etc */
    app.locals.path = (x: string) => process.env.ROOT_URL + x

    /* initialize routes */
    new Router(app)

    /* all done! start listening */
    app.listen(+process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`))

}).catch(error => {
    console.log("TypeORM connection error:", error)
})