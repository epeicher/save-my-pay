const express = require('express');
const router = express.Router();
const util = require('util');
const csvStringify = require('csv-stringify');
const csvStringifyAsync = util.promisify(csvStringify);
const dropboxApi = require('./dropboxApi');

router.post('/', function(req, res, next) {
  if (!req.body) return res.status(400).send('Invalid request');

  const errors = validateRequest(req.body);

  if (errors.length !== 0) return res.status(400).send(errors.join('\n'));

  const csvRow = encodeRequest(req.body);

  if (!csvRow) return res.status(400).send('Invalid request');

  console.log('about to add', csvRow);
  encodeRequest(req.body)
    .then(r => dropboxApi.addPayment(r))
    .then(x => res.send('respond with a resource'))
    .catch(e => res.status(500).send(e));
});

function validateRequest(payment) {
  let errors = [];
  if (!payment.parentCategory)
    errors.push(`Por favor selecciona una Categoría`);
  if (!payment.subCategory)
    errors.push(`Por favor selecciona una Sub-Categoría`);
  if (!payment.amount) errors.push(`Por favor añade una Cantidad`);

  return errors;
}

function encodeRequest(payment) {
  let matrix = [];
  let row = [];
  row.push(getFormatedDate(payment.timestamp));
  row.push(payment.parentCategory);
  row.push(payment.subCategory);
  row.push(payment.amount);
  row.push(payment.notes);
  matrix.push(row);
  return csvStringifyAsync(matrix);
}

function getFormatedDate(timestamp) {
  if (!timestamp) return new Date().toLocaleString();
  return new Date(timestamp).toLocaleString();
}

module.exports = router;
