/* eslint-env mocha */
'use strict'

const { {{pascal_case __FILENAME__}} } = require('../../../lib/models')
const testModel = require('../../helpers/test_model')

describe('{{pascal_case __FILENAME__}} model', () => {
  testModel({
    model: {{pascal_case __FILENAME__}},
    boolFields: ['notify', 'hidden', 'renew', 'noClose'],
    orderedFields: [
      'id', 'symbol', 'side', 'mtsCreate', 'mtsUpdate', 'amount', 'flags',
      'status', null, null, null, 'rate', 'period', 'mtsOpening',
      'mtsLastPayout', 'notify', 'hidden', null, 'renew', 'rateReal', 'noClose'
    ]
  })
})
