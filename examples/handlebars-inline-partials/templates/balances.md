{{#*inline "print_random"}}
{{name}} : {{balance}} BTC
{{/inline}}
{{#each balances}}
  {{> print_random}}
{{/each}}
