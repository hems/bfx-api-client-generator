/* eslint-env mocha */
'use strict'

const { {{pascal_case __FILENAME__}} } = require('../../../lib/models')
const testModel = require('../../helpers/test_model')

describe('{{pascal_case __FILENAME__}} model', () => {
  testModel({
    model: {{pascal_case __FILENAME__}},
    boolFields: ['notify', 'hidden', 'renew'],
    orderedFields: [
      'id', 'symbol', 'mtsCreate', 'mtsUpdate', 'amount', 'amountOrig', 'type',
      null, null, 'flags', 'status', null, null, null, 'rate', 'period',
      'notify', 'hidden', null, 'renew', 'rateReal'
    ]
  })
})
