!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("babel-runtime/core-js/json/stringify")},function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handler=void 0;var r=i(n(1)),o=i(n(0)),u=i(n(2)),c=n(4);function i(e){return e&&e.__esModule?e:{default:e}}var a;t.handler=(a=(0,u.default)(r.default.mark((function e(){var t,n;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={text:"abcd"},e.next=4,(0,c.connectDB)("test");case 4:return n=e.sent,e.next=7,n.insertOne(t);case 7:return e.abrupt("return",{statusCode:200,body:(0,o.default)(t)});case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{statusCode:500,body:(0,o.default)(e.t0)});case 14:case"end":return e.stop()}}),e,void 0,[[0,10]])}))),function(){return a.apply(this,arguments)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.connectDB=void 0;var r,o=i(n(1)),u=i(n(2)),c=(t.connectDB=(r=(0,u.default)(o.default.mark((function e(t){var n,r,u,i;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=process.env.MDB_USERNAME,r=process.env.MDB_PASSWORD,u=process.env.MDB_DATABASE,console.log(n,r,u),void 0!==global.client){e.next=10;break}return console.log("client is undefined. connecting again."),i="mongodb+srv://"+n+":"+r+"@cluster0-sb1ds.mongodb.net/"+u+"?retryWrites=true&w=majority",global.client=new c.MongoClient(i,{useNewUrlParser:!0,useUnifiedTopology:!0}),e.next=10,global.client.connect();case 10:return e.abrupt("return",global.client.db(u).collection(t));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)}),n(5));function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=require("mongodb")}]));