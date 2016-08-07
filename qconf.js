var qconf = require('bindings')('qconf')

const defaultRetryDelay = 20 // 默认重试间隔
const defaultRetryTimes = 1 // 默认重试次数

var promiseWay = function (fn, path, opt) {
  return new Promise((resolve, reject) => {
    opt = opt || {}
    let host = fn(path)
    if (host) {
      console.log('第一次就获取到')
      resolve(host)
    } else {
      console.log('第一次没有获取到，然后重试')
      const maxRetryTimes = opt.maxRetryTimes || defaultRetryTimes
      let retryDelay = opt.retryDelay || defaultRetryDelay
      let count = 0
      const timer = setInterval(function () {
        console.log('尝试中 count = ' + count)
        if (count < maxRetryTimes) {
          host = fn(path)
          if (host) {
            console.log('获取到了 count = ' + count);
            clearInterval(timer)
            resolve(host)
          } else {
            count = count + 1
          }
        } else {
          console.log('最后也没有获取到')
          clearInterval(timer)
          reject(new Error(404))
        }
      }, retryDelay)
    }
  })
}

// module.exports = qconf;
var version = function () {
  return qconf.version()
}

var getConf = function (path) {
  return qconf.getConf(path)
}

var getConf_promise = function (path, opt) {
  return promiseWay(qconf.getConf, path, opt)
}

var getBatchKeys = function (path) {
  return qconf.getBatchKeys(path)
}

var getBatchKeys_promise = function (path, opt) {
  return promiseWay(qconf.getBatchKeys, path, opt)
}

var getBatchConf = function (path) {
  return qconf.getBatchConf(path)
}

var getBatchConf_promise = function (path, opt) {
  return promiseWay(qconf.getBatchConf, path, opt)
}

var getAllHost = function (path) {
  return qconf.getAllHost(path)
}

var getAllHost_promise = function (path, opt) {
  return promiseWay(qconf.getAllHost, path, opt)
}

var getHost = function (path) {
  return qconf.getHost(path)
}

var getHost_promise = function (path, opt) {
  return promiseWay(qconf.getHost, path, opt)
}

module.exports = {
  version: version,
  getConf: getConf,
  getConf_promise: getConf_promise,
  getBatchKeys: getBatchKeys,
  getBatchKeys_promise: getBatchKeys_promise,
  getBatchConf: getBatchConf,
  getBatchConf_promise: getBatchConf_promise,
  getAllHost: getAllHost,
  getAllHost_promise: getAllHost_promise,
  getHost: getHost,
  getHost_promise: getHost_promise
}
