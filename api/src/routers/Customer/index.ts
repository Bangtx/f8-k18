import express, {Request, Response} from "express";
import customerService from '../../services/Customer'
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
  res.json(await customerService.getList());
});

export default router;