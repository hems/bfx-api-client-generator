/* eslint-env mocha */
'use strict'

const { {{pascal_case __FILENAME__}} } = require('../../../lib/models')
const testModel = require('../../helpers/test_model')

describe('{{pascal_case __FILENAME__}} model', () => {
  testModel({
    model: {{pascal_case __FILENAME__}},
    values: {
      symbol: 'fUSD'
    },

    orderedFields: [
      'symbol', 'frr', 'bid', 'bidPeriod', 'bidSize', 'ask', 'askPeriod',
      'askSize', 'dailyChange', 'dailyChangePerc', 'lastPrice', 'volume',
      'high', 'low'
    ]
  })
})
