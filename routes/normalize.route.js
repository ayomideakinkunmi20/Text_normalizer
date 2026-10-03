import express from 'express';
import {normalizeController} from '../controllers/normalize.controller.js';
import {validateNormalizeRequest} from '../middlewares/validateRequest.js';

const router = express.Router();

router.post('/',validateNormalizeRequest,normalizeController);

export default router;