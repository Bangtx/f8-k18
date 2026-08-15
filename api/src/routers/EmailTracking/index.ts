import express, {Express, Request, Response, IRoute} from "express";

const router = express.Router();

/**
 * @swagger
 * /email_tracking:
 *   responses:
 *     200:
 *       description: tracking email status
 */
router.get('/', (req: Request, res: Response) => {
  console.log("the email have been read")
  res.send("hihi");
});

export default router