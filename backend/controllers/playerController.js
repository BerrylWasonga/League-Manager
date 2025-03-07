import asyncHandler from 'express-async-handler';
import Player from '../models/playerModel.js';

// @desc    Register a new player
// @route   POST /api/players
// @access  Private
const registerPlayer = asyncHandler(async (req, res) => {
  const player = await Player.create(req.body);
  res.status(201).json(player);
});

// @desc    Get all players
// @route   GET /api/players
// @access  Private
const getPlayers = asyncHandler(async (req, res) => {
  const players = await Player.find({});
  res.json(players);
});

// @desc    Get player by ID
// @route   GET /api/players/:id
// @access  Private
const getPlayerById = asyncHandler(async (req, res) => {
  const player = await Player.findById(req.params.id);
  if (player) {
    res.json(player);
  } else {
    res.status(404);
    throw new Error('Player not found');
  }
});

// @desc    Search players
// @route   GET /api/players/search
// @access  Private
const searchPlayers = asyncHandler(async (req, res) => {
  const { q } = req.query;
  const players = await Player.find({
    $or: [
      { fullName: { $regex: q, $options: 'i' } },
      { team: { $regex: q, $options: 'i' } },
    ],
  });
  res.json(players);
});

export { registerPlayer, getPlayers, getPlayerById, searchPlayers };