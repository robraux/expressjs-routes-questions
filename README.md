Overview
====================
When attempting to setup an injected routing pattern, if you setup the router as middleware and inject the app reference into the route configuration, the defined error route behaves oddly.

Each call that uses the error route increases the nodejs stack size, never releasing the references. This causes the stack to grow until you hit the v8 "max-stack-size" configured limit. 

Note that the stack does _not_ grow if the error (4 args) handler is not utilized. 

Why does this happen? Hopefull this branch will serve as an example for someone else to investigate or explain. 

Which branch has what
====================

* master : working version (based on https://github.com/visionmedia/express/blob/master/examples/mvc/lib/boot.js)
* goofy  : stack increasing on each request

Running either branch
==================

`npm install`

then

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

    GET /ping 500 4ms - 21
    stack length: 51
    GET /ping 500 2ms - 21
    stack length: 56
    GET /ping 500 1ms - 21
    stack length: 61
    GET /ping 500 1ms - 21
    stack length: 66
    GET /ping 500 1ms - 21
    stack length: 71
    GET /ping 500 1ms - 21
    stack length: 76
    GET /ping 500 1ms - 21
    stack length: 81
    GET /ping 500 1ms - 21
    stack length: 86
    GET /ping 500 1ms - 21
    stack length: 91
    GET /ping 500 1ms - 21
    stack length: 96
    GET /ping 500 1ms - 21


