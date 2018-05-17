'use strict'

const models = {
  {{#each node.models}}
  {{pascal_case @key}}: require('./{{@key}}'){{#unless @last}},{{/unless}}
  {{/each}}
}

module.exports = models
