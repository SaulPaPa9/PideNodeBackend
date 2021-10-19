
const express = require('express');
const cors = require('cors');
const APIRoutes = require('./Routes/APIRoutes');
const APIMiddelwares = require("./Middelwares/APIMiddelwares");

class ServerApp
{
   // Sets the properties to be used in ths class to create the server
   constructor(express)
   {
       this.expressServerApp = express();
   }

   //Properties
   get ExpressServerApp() { return this.expressServerApp; }

   // Functions
   ConfigureServer()
   {
     // Set Settings Values
     this.ExpressServerApp.set('appName', 'PideServerApp');
     this.ExpressServerApp.set('port', process.env.PORT || 3000);

   }

   ApplyMiddleware()
   {
     //JSON objects management
     this.ExpressServerApp.use(express.json());

     // CORS to allow transmit data with orthers endpoints
     this.ExpressServerApp.use(cors());

     //Register Server Routes
     APIRoutes.RegisterRoutes(this.ExpressServerApp, express);

     // Register Server App Middelwares
     APIMiddelwares.RegisterMiddelwares(this.ExpressServerApp);
   }

   RunServer()
   {
        // Configure Server Settings
        this.ConfigureServer();

        // Apply Middlewares
        this.ApplyMiddleware();

        let serverPort = this.ExpressServerApp.get('port');

        this.ExpressServerApp.listen(serverPort, () => {
            console.log(`Express Server Application is running on port ${serverPort}`);
        });
   }
  }

// Run Express Server
const expressServer = new ServerApp(express);
// Start server
expressServer.RunServer();
