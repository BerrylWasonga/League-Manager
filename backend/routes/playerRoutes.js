import express from 'express';
import {
  registerPlayer,
  getPlayers,
  getPlayerById,
  searchPlayers,
} from '../controllers/playerController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, registerPlayer)
  .get(protect, getPlayers);

router.get('/search', protect, searchPlayers);
router.get('/:id', protect, getPlayerById);

export default router;