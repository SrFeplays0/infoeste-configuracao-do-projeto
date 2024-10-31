import express from 'express';
import usuarioController from '../controllers/usuarioController.js';

const router = express.Router();
const crtl = new usuarioController();

router.post("/criar", crtl.criar);

export default router;