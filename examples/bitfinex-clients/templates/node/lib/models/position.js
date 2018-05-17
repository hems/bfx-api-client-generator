'use strict'

const Model = require('../model')
{{> node.models.fields (lookup node.models __FILENAME__) }}

{{> node.models.simple_class this }}

{{pascal_case __FILENAME__}}.status = {}
const statuses = ['ACTIVE', 'CLOSED']
statuses.forEach((s) => {
  {{pascal_case __FILENAME__}}.status[s] = s
})

module.exports = {{pascal_case __FILENAME__}}
