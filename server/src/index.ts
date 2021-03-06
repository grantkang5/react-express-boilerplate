import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as morgan from "morgan";
import * as cors from "cors";
import "reflect-metadata";
import { createConnection } from "typeorm";
import AppModule from "./modules/app.module";

const PORT = 4000;

createConnection()
  .then(async () => {
    const app = express()
      .use(helmet())
      .use(morgan('dev'))
      .use(cors())
      .use(bodyParser.json());

    const { schema } = AppModule.forRoot({});

    const server = new ApolloServer({
      schema,
      context: ({ req, res }) => ({ req, res })
    });

    app.get("/secret", (req, res) => {
      res.status(200).send("ZA WARUDO");
    });

    server.applyMiddleware({ app });
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
  })
  .catch(error => console.log(error));
