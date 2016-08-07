# node-qconf-promise
Qihoo360 QConf(https://github.com/Qihoo360/QConf) Node.js addon.

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][npm-url]
[![Node.js dependencies][david-image]][david-url]

## Installation

```
$ npm install node-qconf-promise --save
```

Notes:

* You need set the Environment Variable QCONF_INSTALL before install this addon.

```
$ export QCONF_INSTALL=/home/work/local/qconf(For MacOS use: export QCONF_INSTALL=/usr/local/qconf)
$ npm install node-qconf-promise --save
```

## Useage

```
var qconf = require('node-qconf-promise');

console.log('version:', qconf.version())
console.log('getConf:', qconf.getConf('/demo'))
console.log('getBatchKeys:', qconf.getBatchKeys('/backend', 'test'))
console.log('getBatchConf:', qconf.getBatchConf('/backend/umem/users'))
console.log('getAllHost:', qconf.getAllHost('/backend/umem/users'))
console.log('getHost:', qconf.getHost('/backend/umem/users'))

qconf.getAllHost_promise('/path/to/node', {maxRetryTimes: 3}).then(function(value) {
  console.log('使用promise获取的是 ' + value)
}, function(err) {
  console.log('使用promise失败 ' + err)
})

```


[npm-image]: https://img.shields.io/npm/v/node-qconf.svg?style=flat-square
[npm-url]: https://npmjs.org/package/node-qconf
[downloads-image]: https://img.shields.io/npm/dm/node-qconf.svg?style=flat-square
[david-image]: https://img.shields.io/david/bluedapp/node-qconf.svg?style=flat-square
[david-url]: https://david-dm.org/bluedapp/node-qconf
