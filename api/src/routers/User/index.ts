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
];

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "123e4567-e89b-12d3-a456-426614174000"
 *                   name:
 *                     type: string
 *                     example: John Doe
 *                   age:
 *                     type: integer
 *                     example: 20
 */
router.get('/', (req: Request, res: Response) => {
  res.json(users);
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John
 *               age:
 *                 type: integer
 *                 example: 20
 *     responses:
 *       '200':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123e4567-e89b-12d3-a456-426614174000"
 *                 name:
 *                   type: string
 *                   example: John
 *                 age:
 *                   type: integer
 *                   example: 20
 *       '400':
 *         description: Validation error
 */
router.post('/', async (req: Request, res: Response) => {
  const newUser = plainToInstance(UserCreateDto, req.body);
  const errors = await validate(newUser);

  if (errors.length > 0) {
    return res.status(400).json(errors);
  }

  const createdUser = {...newUser, id: v7()};
  users.push(createdUser);
  res.json(createdUser);
});

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Replace new user
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John
 *               age:
 *                 type: integer
 *                 example: 20
 *     responses:
 *       '200':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123e4567-e89b-12d3-a456-426614174000"
 *                 name:
 *                   type: string
 *                   example: John
 *                 age:
 *                   type: integer
 *                   example: 20
 *       '400':
 *         description: Validation error
 */
router.put('/:id', (req: Request, res: Response) => {
  const userId = req.params.id as string;
  const newUser = req.body;

  let curIdx = users.findIndex(u => u.id === userId);
  if (curIdx < 0) {
    res.status(404).send(`Can not find user with id ${userId}`);
    return;
  }

  let curUser = users[curIdx];
  curUser = {...curUser, ...newUser};

  users[curIdx] = curUser;
  res.json(curUser);
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete an user
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *          description: Deleted successfully
 *       '400':
 *         description: Validation error
 */
router.delete('/:id', (req: Request, res: Response) => {})

export default router;