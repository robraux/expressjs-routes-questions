Which branch has what
====================

* master : working version
* goofy  : stack increasing on each request

Running either branch
==================

`node app.js`

Then hit http://HOST:9999/ping

Master Branch: stack doesn't grow
===========

stack length: 36
GET /ping 500 16ms - 21
stack length: 36
GET /ping 500 1ms - 21
stack length: 36
GET /ping 500 1ms - 21
stack length: 36
GET /ping 500 1ms - 21
stack length: 36
GET /ping 500 1ms - 21
stack length: 36
GET /ping 500 0ms - 21
stack length: 36
GET /ping 500 1ms - 21
stack length: 36
GET /ping 500 1ms - 21
stack length: 36
GET /ping 500 1ms - 21
stack length: 36
GET /ping 500 0ms - 21

Goofy Branch: stack grows every call
==============
