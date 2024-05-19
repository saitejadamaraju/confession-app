
import express from 'express';
import {getConfessions,updateConfessions,deleteConfessions} from "../controllers/confessions.controller.js"
import ProtectRoute from '../middleware/ProtectRoute.js';

const router= express.Router();

router.get('/receive/:username',ProtectRoute,getConfessions);

router.post('/send/:username',updateConfessions);

router.delete('/delete',deleteConfessions);

export default router;