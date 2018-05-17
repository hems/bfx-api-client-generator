'use strict'

const Model = require('../model')
{{> node.models.fields (lookup node.models __FILENAME__) }}

{{> node.models.simple_class this }}

{{pascal_case __FILENAME__}}.type = {}
const types = ['exchange', 'margin', 'funding']

types.forEach((t) => {
  {{pascal_case __FILENAME__}}.type[t.toUpperCase()] = t
})

module.exports = {{pascal_case __FILENAME__}}
