const Quote = require('../models/Quote');

// POST /api/quotes  -> create a new quote
// This handles: house removals, office removals, furniture, parcel, etc.
const createQuote = async (req, res) => {
  try {
    const {
      typeOfMove,       // 'house', 'office', 'furniture', 'parcel'
      pickupAddress,
      dropoffAddress,
      movingDate,
      bedrooms,         // for house removals
      officeSize,       // for office removals
      itemsDescription, // for furniture removals
      parcelDetails,    // for parcel removals
      distanceKm        // optional: distance for pricing
    } = req.body;

    // ---- Simple pricing logic (you can tweak later) ----
    let basePrice = 0;

    switch (typeOfMove) {
      case 'house':
        // base + per bedroom
        basePrice = 80 + (Number(bedrooms) || 1) * 40;
        break;
      case 'office':
        // base + per office size unit (small/medium/large mapped to 1/2/3 on frontend later)
        basePrice = 100 + (Number(officeSize) || 1) * 50;
        break;
      case 'furniture':
        // flat + handling
        basePrice = 60;
        break;
      case 'parcel':
        // cheap base for small parcel jobs
        basePrice = 25;
        break;
      default:
        return res.status(400).json({ message: 'Invalid typeOfMove' });
    }

    // Add a distance multiplier if provided
    let distanceExtra = 0;
    if (distanceKm) {
      distanceExtra = Number(distanceKm) * 1.2; // £1.20 per km (example)
    }

    const totalPrice = Math.round((basePrice + distanceExtra) * 100) / 100;

    const quote = await Quote.create({
      customer: req.user ? req.user._id : null, // will work when auth is wired
      typeOfMove,
      pickupAddress,
      dropoffAddress,
      movingDate,
      bedrooms,
      officeSize,
      itemsDescription,
      parcelDetails,
      distanceKm,
      price: totalPrice,
      status: 'pending'
    });

    return res.status(201).json(quote);
  } catch (error) {
    console.error('Error creating quote:', error);
    return res.status(500).json({ message: 'Server error creating quote' });
  }
};

// GET /api/quotes  -> admin: list all quotes
const getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    return res.json(quotes);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return res.status(500).json({ message: 'Server error fetching quotes' });
  }
};

// GET /api/quotes/my  -> customer: see their own quotes
const getMyQuotes = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authorised' });
    }

    const quotes = await Quote.find({ customer: req.user._id }).sort({ createdAt: -1 });
    return res.json(quotes);
  } catch (error) {
    console.error('Error fetching my quotes:', error);
    return res.status(500).json({ message: 'Server error fetching your quotes' });
  }
};

module.exports = {
  createQuote,
  getAllQuotes,
  getMyQuotes
};