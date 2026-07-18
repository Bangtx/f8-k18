import express, { type Express } from 'express';
import {userRouter} from './routers'

const app: Express = express();

app.use(express.json());

app.use('/users', userRouter)
app.listen(3000);