const load_partials = require('../../src/lib/load_partials')
const load_helpers  = require('../../src/lib/load_helpers')

module.exports = new Promise(async (resolve) => {

  await load_partials(__dirname + "/partials")

  await load_helpers(__dirname + "/helpers")

  resolve({
    GITHUB_URL: 'https://github.com/bitfinexcom/bitfinex-api-node/',

    API_URL: 'https://api.bitfinex.com',
    WS_URL : 'wss://api.bitfinex.com/ws',

    BASE_TIMEOUT: 15000,

    node: { 
      models: require('./node.models') 
    },

    functions: [{
      partial: 'auth_request_no_params',

      name: 'wallets',
      http_path: 'wallets',
      transformer: 'Wallet',

      doc: {
        REFERENCE: 'https://docs.bitfinex.com/v2/reference#rest-auth-wallets'
      }
    },{
      partial: 'auth_request_no_params',

      name: 'positions',
      http_path: 'positions',
      transformer: 'Position',

      doc: {
        REFERENCE: 'https://docs.bitfinex.com/v2/reference#rest-auth-wallets'
      }
    },{
      partial: 'auth_request_no_params',

      name: 'performance',
      http_path: 'stats/perf:1D/hist',
      transformer: 'Position',

      doc: {
        REFERENCE: 'https://docs.bitfinex.com/v2/reference#rest-auth-wallets'
      }
    },{
      partial: 'auth_request_no_params',

      name: 'activeOrders',
      http_path: 'orders',
      transformer: 'Order',

      doc: {
        REFERENCE: 'https://docs.bitfinex.com/v2/reference#rest-auth-orders'
      }
    },{
      partial: 'public_legacy',

      name: 'symbols',
      http_path: 'symbols',

      doc: {
        description: 'Get a list of valid symbol names',
        REFERENCE: 'https://docs.bitfinex.com/v1/reference#rest-public-symbols'
      }
    },{
      partial: 'public_legacy',

      name: 'symbolsDetails',
      http_path: 'symbols_details',

      doc: {
        description: 'Get a list of valid symbol names and details',
        REFERENCE: 'https://docs.bitfinex.com/v1/reference#rest-public-symbols'
      }
    },{
      partial: 'public_legacy',

      name: 'accountInfo',
      http_path: 'account_infos',

      doc: {
        description: 'Request information about your account',
        REFERENCE: 'https://docs.bitfinex.com/v1/reference#rest-public-symbols'
      }
    },{
      partial: 'public_legacy',

      name: 'accountFees',
      http_path: 'account_fees',

      doc: {
        description: 'Request account withdrawl fees',
        REFERENCE: 'https://docs.bitfinex.com/v1/reference#rest-public-symbols'
      }
    },{
      partial: 'public_legacy',

      name: 'accountSummary',
      http_path: 'summary',

      doc: {
        description: `Returns a 30-day summary of your trading volume and return on margin
     * funding.`,
        REFERENCE: 'https://docs.bitfinex.com/v1/reference#rest-public-symbols'
      }
    }]

  })

});