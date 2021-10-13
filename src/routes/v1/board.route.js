import express from 'express';
// import { HttpStatusCode } from '../../utilities/constants';/
import { BoardController } from '../../controllers/board.controller';

const router = express.Router();

router.route('/')
.get((req, res) => res.json({message:'get board'}))
.post(BoardController.createNew)


export const boardRoutes =  router