import express, {Request, Response} from "express";
import productService from '../../services/Product'
import {plainToInstance} from "class-transformer";
import {ProductCreateDto} from "../../dtos";
import {validate} from "class-validator";
import {ValidationPipe} from "../../utils/Validation";


const router = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of products
 *     responses:
 *       200:
 *         description: A list of products
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
 *                   price:
 *                     type: string
 *                     example: John Doe
 *                   description:
 *                     type: string
 *                     example: John Doe
 */
router.get('/', async (req: Request, res: Response) => {
  res.json(await productService.getList())
})


/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create products
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe *
 *               price:
 *                 type: string
 *                 example: John Doe *
 *               description:
 *                 type: string
 *                 example: John Doe
 */
router.post('/', ValidationPipe(ProductCreateDto), async (req: Request, res: Response) => {
  const newProduct = req.body
  res.json(await productService.create(newProduct))
})

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Replace products
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
 *               price:
 *                 type: string
 *                 example: John Doe *
 *               description:
 *                 type: string
 *                 example: John Doe
 */
router.put('/:id', ValidationPipe(ProductCreateDto), async (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  const newProduct = req.body
  res.json(await productService.updateById(productId, newProduct))
})

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete Product
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *     tags:
 *       - Products
 *     responses:
 *       400:
 *         description: Dữ liệu không hợp lệ
 */

router.delete("/:id", async (req: Request, res: Response) => {
  const productId = Number(req.params.id);

  res.json(await productService.deleteById(productId));

  res.status(204).send(`Delete`);
});

export default router;