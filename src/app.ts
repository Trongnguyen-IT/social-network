import { Route } from './cores/interfaces'
import express from 'express'

class App {
    public app: express.Application
    public port: String | Number

    constructor(routes: Route[]) {
        this.app = express()
        this.port = process.env.PORT || 5000
        this.initializeRoutes(routes)
    }

    private initializeRoutes(routes: Route[]) {
        routes.forEach((route) => {
            this.app.use('/', route.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening port::: ${this.port}`)
        })
    }
}

export default App


