import express, {Request, Response} from "express";
import customerService from '../../services/Customer'
import {plainToInstance} from "class-transformer";
import {CustomerCreateDto} from "../../dtos";
import {validate} from "class-validator";
import {ValidationPipe} from "../../utils/Validation";


const router = express.Router();

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Retrieve a list of customers
 *     responses:
 *       200:
 *         description: A list of customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: int
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 */
router.get('/', async (req: Request, res: Response) => {
  res.json(await customerService.getList())
})


/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create customers
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 */
router.post('/', ValidationPipe(CustomerCreateDto), async (req: Request, res: Response) => {
  const newCustomer = req.body
  res.json(await customerService.create(newCustomer))
})

/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Replace customers
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 */
router.put('/:id', ValidationPipe(CustomerCreateDto), async (req: Request, res: Response) => {
  const customerId = Number(req.params.id);
  const newCustomer = req.body
  res.json(await customerService.updateById(customerId, newCustomer))
})

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Xoá khách hàng
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *     tags:
 *       - Customers
 *     responses:
 *       400:
 *         description: Dữ liệu không hợp lệ
 */

router.delete("/:id", async (req: Request, res: Response) => {
  const customerId = Number(req.params.id);

  res.json(await customerService.deleteById(customerId));

  res.status(204).send(`Delete`);
});

export default router;