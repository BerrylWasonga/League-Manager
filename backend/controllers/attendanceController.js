import asyncHandler from 'express-async-handler';
import Attendance from '../models/attendanceModel.js';

// @desc    Mark attendance
// @route   POST /api/attendance
// @access  Private
const markAttendance = asyncHandler(async (req, res) => {
  const { playerId, date, present } = req.body;
  
  const attendance = await Attendance.findOneAndUpdate(
    { player: playerId, date: new Date(date) },
    { present },
    { new: true, upsert: true }
  ).populate('player');
  
  res.json(attendance);
});

// @desc    Get attendance by date
// @route   GET /api/attendance/:date
// @access  Private
const getAttendanceByDate = asyncHandler(async (req, res) => {
  const date = new Date(req.params.date);
  const attendance = await Attendance.find({
    date: {
      $gte: new Date(date.setHours(0, 0, 0)),
      $lt: new Date(date.setHours(23, 59, 59)),
    },
  }).populate('player');
  
  res.json(attendance);
});

// @desc    Get attendance stats
// @route   GET /api/attendance/stats
// @access  Private
const getAttendanceStats = asyncHandler(async (req, res) => {
  const { start, end } = req.query;
  
  const stats = await Attendance.aggregate([
    {
      $match: {
        date: {
          $gte: new Date(start),
          $lte: new Date(end),
        },
      },
    },
    {
      $group: {
        _id: null,
        totalPlayers: { $sum: 1 },
        presentCount: {
          $sum: { $cond: ['$present', 1, 0] },
        },
      },
    },
  ]);

  if (stats.length > 0) {
    const { totalPlayers, presentCount } = stats[0];
    res.json({
      totalPlayers,
      presentCount,
      absentCount: totalPlayers - presentCount,
      percentage: (presentCount / totalPlayers) * 100,
    });
  } else {
    res.json({
      totalPlayers: 0,
      presentCount: 0,
      absentCount: 0,
      percentage: 0,
    });
  }
});

export { markAttendance, getAttendanceByDate, getAttendanceStats };