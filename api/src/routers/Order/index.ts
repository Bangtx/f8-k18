import express, {Express, Request, Response, IRoute} from "express";
import {orderService} from "../../services/Order";
import {ValidationPipe} from "../../utils/Validation";
import {OrderCreateDto} from "../../dtos/Order";
import {Transactional} from "typeorm-transactional";

const router = express.Router()

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: get orders
 *     responses:
 *       200:
 *         description: get orders
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
 *                   date:
 *                     type: string
 *                     example: 2026-07-25
 *                   totalAmount:
 *                     type: integer
 *                     example: 30000000
 *                   details:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: int
 *                           example: 1
 *                         product:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: int
 *                               example: 1
 *                             name:
 *                               type: string
 *                               example: I phone 17 promax
 */

router.get('/', async (req: Request, res: Response) => {
  res.json(await orderService.getList());
});


/**
 * @swagger
 * /orders:
 *   post:
 *     summary: create orders
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: date
 *                 example: 2026-07-25
 *               customerId:
 *                 type: int
 *                 example: 1
 *               details:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: int
 *                       example: 1
 *                     quantity:
 *                       type: int
 *                       example: 2
 *     responses:
 *       200:
 *         description: get orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: int
 *                   example: 1
 *                 date:
 *                   type: string
 *                   example: 2026-07-25
 *                 totalAmount:
 *                   type: integer
 *                   example: 30000000
 *                 details:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: int
 *                         example: 1
 *                       product:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: int
 *                             example: 1
 *                           name:
 *                             type: string
 *                             example: I phone 17 promax
 */
router.post('/', ValidationPipe(OrderCreateDto), async (req: Request, res: Response) => {
  const payload = req.body
  const result =  await orderService.create(payload)
  console.log(JSON.stringify(result))
  res.json(result)
})

export default router