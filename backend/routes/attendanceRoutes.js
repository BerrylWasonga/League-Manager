import express from 'express';
import {
  markAttendance,
  getAttendanceByDate,
  getAttendanceStats,
} from '../controllers/attendanceController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, markAttendance);

router.get('/stats', protect, getAttendanceStats);
router.get('/:date', protect, getAttendanceByDate);

export default router;