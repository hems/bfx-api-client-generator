'use strict'

const Model = require('../model')
{{> node.models.fields (lookup node.models __FILENAME__) }}

{{> node.models.simple_class this }}

{{pascal_case __FILENAME__}}.status = {}
{{pascal_case __FILENAME__}}.type = { // TODO: enquire about case sensitivity
  LEND: 'lend',
  LOAN: 'loan'
}

const statuses = ['ACTIVE', 'EXECUTED', 'PARTIALLY FILLED', 'CANCELED']
statuses.forEach((s) => {
  {{pascal_case __FILENAME__}}.status[s.split(' ').join('_')] = s
})

module.exports = {{pascal_case __FILENAME__}}
