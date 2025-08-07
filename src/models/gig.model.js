const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  shortTitle: { type: String, required: true },
  shortDesc: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  cover: { type: String, required: true },
  images: { type: [String], required: true },
  deliveryTime: { type: Number, required: true },
  revisionNumber: { type: Number, required: true },
  features: { type: [String], required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Gig', gigSchema);
