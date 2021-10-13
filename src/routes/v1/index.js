import express from 'express';
import { HttpStatusCode } from '../../utilities/constants';

const router = express.Router();

// status api
router.get('/status', (req, res) => {
   res.status(HttpStatusCode.OK).json({
      message: 'ok'
   })
})

//board api 



export const apiV1 = router