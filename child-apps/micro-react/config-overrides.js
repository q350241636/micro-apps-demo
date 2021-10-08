module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config.devServer= {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
  console.log('覆盖webpack配置',config)
  return config
}
