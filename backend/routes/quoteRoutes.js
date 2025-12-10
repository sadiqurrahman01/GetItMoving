const express = require('express');
const router = express.Router();
const {
  createQuote,
  getAllQuotes,
  getMyQuotes
} = require('../controllers/quoteController');

const { protect, adminOnly } = require('../middleware/authMiddleware');

// PUBLIC – customers can request a quote
router.post('/', createQuote);

// PROTECTED – customers can view their quotes
router.get('/my', protect, getMyQuotes);

// ADMIN ONLY – view all quotes
router.get('/', protect, adminOnly, getAllQuotes);

module.exports = router;