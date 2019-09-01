const Joi = require('joi');
const mongoose = require('mongoose');
const {customerSchema} = require('./customer');
const {movieSchema} = require('./movie');

const rentalSchema = new mongoose.Schema({
  customer: customerSchema,
  movie: [movieSchema]
});

const Rental = mongoose.model('Rental', rentalSchema);

exports.Rental = Rental;
exports.rentalSchema = rentalSchema;