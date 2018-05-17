'use strict'

const Model = require('../model')
{{> node.models.fields (lookup node.models __FILENAME__) }}

{{> node.models.simple_class this }}

module.exports = {{pascal_case __FILENAME__}}
