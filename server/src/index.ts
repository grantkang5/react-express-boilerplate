import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as morgan from "morgan";
import * as cors from "cors";
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as session from 'express-session';
import sessionConfig from "./config/session";
import strategy from './config/passport'
import * as passport from 'passport'
import 'dotenv/config'

import AppModule from "./modules/app.module";
import router from "./auth/routes";

const PORT = 4000;

createConnection()
  .then(async () => {
    const app = express()
      .use(helmet())
      .use(morgan("dev"))
      .use(cors())
      .use(bodyParser.json());

    app.use(session(sessionConfig))
    passport.use(strategy)
    app.use(passport.initialize())
    app.use(passport.session())

    passport.serializeUser((user, done) => done(null, user))
    passport.deserializeUser((user, done) => done(null, user))

    const { schema } = AppModule.forRoot({});

    const server = new ApolloServer({
      schema,
      context: ({ req, res }) => ({ req, res })
    });

    app.use(router)

    app.get("/secret", (req, res) => {
      res.status(200).send("ZA WARUDO");
    });

    server.applyMiddleware({ app });
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
  })
  .catch(error => console.log(error));
