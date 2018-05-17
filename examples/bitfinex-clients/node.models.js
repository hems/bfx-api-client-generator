module.exports = {
  alert         : {
    BOOL_FIELDS : [],
    FIELDS      : {
      key       : 0,
      type      : 1,
      symbol    : 2,
      price     : 3
    }
  },

  balance_info  : {
    BOOL_FIELDS : [],
    FIELDS      : {
      amount    : 0,
      amountNet : 1
    }
  },

  candle        : {
    BOOL_FIELDS : [],
    FIELDS      : {
      mts       : 0,
      open      : 1,
      close     : 2,
      high      : 3,
      low       : 4,
      volume    : 5
    }
  },

  funding_credit    : {
    BOOL_FIELDS     : ['notify', 'hidden', 'renew', 'noClose'],
    FIELDS          : {
      id            : 0,
      symbol        : 1,
      side          : 2,
      mtsCreate     : 3,
      mtsUpdate     : 4,
      amount        : 5,
      flags         : 6,
      status        : 7,
      rate          : 11,
      period        : 12,
      mtsOpening    : 13,
      mtsLastPayout : 14,
      notify        : 15,
      hidden        : 16,
      renew         : 18,
      rateReal      : 19,
      noClose       : 20,
      positionPair  : 21
    }
  },

  funding_info      : { not_implemented: true },

  funding_loan      : {
    BOOL_FIELDS     : ['notify', 'hidden', 'renew', 'noClose'],
    FIELDS          : {
      id            : 0,
      symbol        : 1,
      side          : 2,
      mtsCreate     : 3,
      mtsUpdate     : 4,
      amount        : 5,
      flags         : 6,
      status        : 7,
      rate          : 11,
      period        : 12,
      mtsOpening    : 13,
      mtsLastPayout : 14,
      notify        : 15,
      hidden        : 16,
      renew         : 18,
      rateReal      : 19,
      noClose       : 20
    }
  },

  funding_offer  : {
    BOOL_FIELDS  : ['notify', 'hidden', 'renew'],
    FIELDS       : {
      id         : 0,
      symbol     : 1,
      mtsCreate  : 2,
      mtsUpdate  : 3,
      amount     : 4,
      amountOrig : 5,
      type       : 6,
      flags      : 9,
      status     : 10,
      rate       : 14,
      period     : 15,
      notify     : 16,
      hidden     : 17,
      renew      : 19,
      rateReal   : 20
    }
  },

  funding_ticker      : {
    BOOL_FIELDS       : [],
    FIELDS            : {
      symbol          : 0,
      frr             : 1,
      bid             : 2,
      bidPeriod       : 3,
      bidSize         : 4,
      ask             : 5,
      askPeriod       : 6,
      askSize         : 7,
      dailyChange     : 8,
      dailyChangePerc : 9,
      lastPrice       : 10,
      volume          : 11,
      high            : 12,
      low             : 13
    }
  },

  funding_trade : {
    BOOL_FIELDS : [],
    FIELDS      : {
      id        : 0,
      symbol    : 1,
      mtsCreate : 2,
      offerID   : 3,
      amount    : 4,
      rate      : 5,
      period    : 6,
      maker     : 7
    }
  },

  margin_info          : {
    BOOL_FIELDS        : [],
    FIELDS             : {
      userPL           : 0,
      userSwaps        : 1,
      symbol           : 2,
      tradeableBalance : 3,
      marginBalance    : 4,
      marginNet        : 5
    }
  },

  notification   : {
    BOOL_FIELDS  : [],
    FIELDS       : {
      mts        : 0,
      type       : 1,
      messageID  : 2,
      notifyInfo : 3,
      code       : 4,
      status     : 5,
      text       : 6
    }
  },

  order             : {
    BOOL_FIELDS     : ['notify'],
    FIELDS          : {
      id            : 0,
      gid           : 1,
      cid           : 2,
      symbol        : 3,
      mtsCreate     : 4,
      mtsUpdate     : 5,
      amount        : 6,
      amountOrig    : 7,
      type          : 8,
      typePrev      : 9,
      flags         : 12,
      status        : 13,
      price         : 16,
      priceAvg      : 17,
      priceTrailing : 18,
      priceAuxLimit : 19,
      notify        : 23,
      placedId      : 25
    }
  },

  order_book        : {},

  position              : {
    BOOL_FIELDS         : [],
    FIELDS              : {
      symbol            : 0,
      status            : 1,
      amount            : 2,
      basePrice         : 3,
      marginFunding     : 4,
      marginFundingType : 5,
      pl                : 6,
      plPerc            : 7,
      liquidationPrice  : 8,
      leverage          : 9
    }
  },

  public_trade  : {
    BOOL_FIELDS : [],
    FIELDS      : {
      id        : 0,
      mts       : 1,
      amount    : 2,
      price     : 3
    }
  },

  trade           : {
    BOOL_FIELDS   : ['maker'],
    FIELDS        : {
      id          : 0,
      pair        : 1,
      mtsCreate   : 2,
      orderID     : 3,
      execAmount  : 4,
      execPrice   : 5,
      orderType   : 6,
      orderPrice  : 7,
      maker       : 8,
      fee         : 9,
      feeCurrency : 10
    }
  },

  trading_ticker      : {
    BOOL_FIELDS       : [],
    FIELDS            : {
      symbol          : 0,
      bid             : 1,
      bidSize         : 2,
      ask             : 3,
      askSize         : 4,
      dailyChange     : 5,
      dailyChangePerc : 6,
      lastPrice       : 7,
      volume          : 8,
      high            : 9,
      low             : 10
    }
  },

  wallet                : {
    BOOL_FIELDS         : [],
    FIELDS              : {
      type              : 0,
      currency          : 1,
      balance           : 2,
      unsettledInterest : 3,
      balanceAvailable  : 4
    }
  }

}
