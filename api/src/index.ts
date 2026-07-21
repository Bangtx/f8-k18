import express, { type Express } from 'express';
import {userRouter} from './routers'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import 'reflect-metadata'
import {AppDataSource} from "./config/database";

const app: Express = express()

AppDataSource.initialize()

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'F88 API',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/**/*.ts'],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/users', userRouter)
app.listen(3000)