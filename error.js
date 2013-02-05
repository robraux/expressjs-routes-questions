"use strict"

module.exports = function error(err, req, res, next) {

  var st = require('stack-trace')

  console.log("stack length:", st.get().length)

  return res.send(500)

}