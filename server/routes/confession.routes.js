
import express from 'express';
import {getConfessions,updateConfessions} from "../controllers/confessions.controller.js"
import ProtectRoute from '../middleware/ProtectRoute.js';

const router= express.Router();

router.get('/receive/:username',ProtectRoute,getConfessions);

router.post('/send/:username',updateConfessions);

export default router;