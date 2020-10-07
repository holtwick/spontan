// Copyright (c) 2018. Dirk Holtwick <holtwick.de>

let config = {
  devServer: {
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  },
}

module.exports = config
