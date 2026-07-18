import express, {Express, Request, Response, IRoute} from "express";
import {plainToInstance} from "class-transformer";
import {validate} from "class-validator";
import {v7} from "uuid";
import {UserCreateDto} from "../../dtos";

const router = express.Router();

const users = [
  {
    id: v7(),
    name: 'Hoang Xuan Bach',
    age: 22
  },
  {
    id: v7(),
    name: 'Vuong Duc tien',
    age: 23
  }
]

router.get('/', (req: Request, res: Response) => {
  res.json(users)
});


router.post('/', async (req: Request, res: Response) => {
  const newUser = plainToInstance(UserCreateDto, req.body)
  const errors = await validate(newUser)

  if (errors.length > 0) {
    return res.status(400).json(errors)
  }

  users.push({...newUser, id: v7()})
  res.json(newUser)
})


router.put('/:id', (req: Request, res: Response) => {
  const userId = req.params.id as string
  const newUser = req.body

  let curIdx = users.findIndex(u => u.id === userId)
  if (curIdx < 0) {
    res.status(404).send(`Can not find user with id ${userId}`)
  }

  let curUser = users[curIdx]
  curUser = {...curUser, ...newUser}

  users[curIdx] = curUser
  res.json(curUser)
})

router.patch('/:id', (req: Request, res: Response) => {
  const userId = req.params.id as string
  const newUser = req.body

  let curIdx = users.findIndex(u => u.id === userId)
  if (curIdx < 0) {
    res.status(404).send(`Can not find user with id ${userId}`)
  }

  let curUser = users[curIdx]
  curUser = {...curUser, ...newUser}

  users[curIdx] = curUser
  res.json(curUser)
})

export default router