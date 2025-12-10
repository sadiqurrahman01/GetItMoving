// backend/models/Quote.js
const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },

    // What type of job is this quote for?
    type: {
      type: String,
      enum: [
        'house_removal',
        'office_removal',
        'furniture_removal',
        'parcel_delivery',
        'store_run',   // e.g. IKEA, B&Q, etc.
        'van_hire',
      ],
      required: true,
    },

    // Locations
    pickupAddress: { type: String, required: true },
    dropoffAddress: { type: String, required: true },

    // For distance-based & time-based pricing
    distanceKm: { type: Number, required: true },
    hours: { type: Number, default: 0 },

    // Extra details for some job types
    bedrooms: { type: Number, default: 0 },      // house removals
    officeSize: { type: String, default: '' },   // office removals

    vehicleSize: {
      type: String,
      enum: ['small_van', 'medium_van', 'large_van'],
      default: 'medium_van',
    },

    // Store name (IKEA, B&Q, etc.) for store runs
    storeName: { type: String, default: '' },

    // Price breakdown
    basePrice: { type: Number, required: true },
    distancePrice: { type: Number, required: true },
    timePrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },

    currency: { type: String, default: 'GBP' },

    status: {
      type: String,
      enum: ['draft', 'accepted', 'rejected', 'expired'],
      default: 'draft',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Quote', QuoteSchema);