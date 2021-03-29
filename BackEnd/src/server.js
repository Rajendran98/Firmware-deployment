const express =require('express');
const bodyParser=require('body-parser');
const cors=require('cors')
var Routes=require('./routes/app')
class App {
    constructor() {
        this.expressApp = express()
        // this.configs = {
        //     get port() {
        //         return process.env.PORT || 5090
        //     }
        // }
    }
    applyMiddleware() {
        this.expressApp.use(bodyParser.json())
        this.expressApp.use(cors())
        new Routes (this.expressApp)
       
    }

    run() {
        this.expressApp.listen(4080,() => {console.log("The port running successfully at 4080")
        })
    }
}

//Runs the thing
const app = new App()
app.applyMiddleware()
app.run()
