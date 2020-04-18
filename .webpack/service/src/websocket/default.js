!function(e,n){for(var t in n)e[t]=n[t]}(exports,function(e){var n={};function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)t.d(r,u,function(n){return e[n]}.bind(null,u));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=25)}([function(e,n){e.exports=require("babel-runtime/regenerator")},function(e,n){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,n){e.exports=require("babel-runtime/core-js/json/stringify")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.deleteOneAsync=n.updateManyAsync=n.pullItemsAsync=n.pushItemsAsync=n.upsertOneAsync=n.updateOneAsync=n.insertManyAsync=n.insertOneAsync=n.listManyOrAsync=n.listManyInAsync=n.listManyAsync=n.findOneAsync=void 0;var r=o(t(4)),u=o(t(5)),a=o(t(0)),s=o(t(1)),c=t(6);function o(e){return e&&e.__esModule?e:{default:e}}var i,f,l,d,p,y,v,b,x,O,A,h;n.findOneAsync=(i=(0,s.default)(a.default.mark((function e(n,t,r){var u;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.connectDB)(n);case 2:return u=e.sent,e.abrupt("return",u.findOne(t,r));case 4:case"end":return e.stop()}}),e,void 0)}))),function(e,n,t){return i.apply(this,arguments)}),n.listManyAsync=(f=(0,s.default)(a.default.mark((function e(n,t,r,u){var s;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.connectDB)(n);case 2:return s=e.sent,e.abrupt("return",s.find(t).sort(r).project(u).toArray());case 4:case"end":return e.stop()}}),e,void 0)}))),function(e,n,t,r){return f.apply(this,arguments)}),n.listManyInAsync=(l=(0,s.default)(a.default.mark((function e(n,t,s){var o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},f=arguments[4],l=arguments[5];return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.connectDB)(n);case 2:return o=e.sent,e.abrupt("return",o.find((0,u.default)((0,r.default)({},t,{$in:s}),i)).sort(f).project(l).toArray());case 4:case"end":return e.stop()}}),e,void 0)}))),function(e,n,t){return l.apply(this,arguments)}),n.listManyOrAsync=(d=(0,s.default)(a.default.mark((function e(n,t,r,s,o){var i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.connectDB)(n);case 2:return i=e.sent,e.abrupt("return",i.find((0,u.default)({$or:t},r)).sort(s).project(o).toArray());case 4:case"end":return e.stop()}}),e,void 0)}))),function(e,n,t,r,u){return d.apply(this,arguments)}),n.insertOneAsync=(p=(0,s.default)(a.default.mark((function e(n,t){var r;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.connectDB)(n);case 2:return r=e.sent,e.next=5,r.insertOne(t);case 5:return e.abrupt("return",e.sent.ops[0]);case 6:case"end":return e.stop()}}),e,void 0)}))),function(e,n){return p.apply(this,arguments)}),n.insertManyAsync=(y=(0,s.default)(a.default.mark((function e(n,t){var r;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.connectDB)(n);case 2:return r=e.sent,e.next=5,r.insertMany(t);case 5:return e.abrupt("return",e.sent.ops);case 6:case"end":return e.stop()}}),e,void 0)}))),function(e,n){return y.apply(this,arguments)}),n.updateOneAsync=(v=(0,s.default)(a.default.mark((function e(n,t,r){var u,s,o;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.connectDB)(n);case 2:return u=e.sent,e.next=5,u.findOneAndUpdate(t,{$set:r},{returnOriginal:!1});case 5:return s=e.sent,o=s.value,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e,void 0)}))),function(e,n,t){return v.apply(this,arguments)}),n.upsertOneAsync=(b=(0,s.default)(a.default.mark((function e(n,t,r){var u,s,o;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.connectDB)(n);case 2:return u=e.sent,e.next=5,u.findOneAndUpdate(t,{$set:r},{returnOriginal:!1,upsert:!0});case 5:return s=e.sent,o=s.value,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e,void 0)}))),function(e,n,t){return b.apply(this,arguments)}),n.pushItemsAsync=(x=(0,s.default)(a.default.mark((function e(n,t,r){var u,s,o;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.connectDB)(n);case 2:return u=e.sent,e.next=5,u.findOneAndUpdate(t,{$push:r},{returnOriginal:!1});case 5:return s=e.sent,o=s.value,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e,void 0)}))),function(e,n,t){return x.apply(this,arguments)}),n.pullItemsAsync=(O=(0,s.default)(a.default.mark((function e(n,t,r){var u,s,o;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.connectDB)(n);case 2:return u=e.sent,e.next=5,u.findOneAndUpdate(t,{$pull:r},{returnOriginal:!1});case 5:return s=e.sent,o=s.value,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e,void 0)}))),function(e,n,t){return O.apply(this,arguments)}),n.updateManyAsync=(A=(0,s.default)(a.default.mark((function e(n,t,r){var u,s,o;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.connectDB)(n);case 2:return u=e.sent,e.next=5,u.updateMany(t,{$set:r});case 5:return s=e.sent,o=s.value,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e,void 0)}))),function(e,n,t){return A.apply(this,arguments)}),n.deleteOneAsync=(h=(0,s.default)(a.default.mark((function e(n,t){var r,u,s;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.connectDB)(n);case 2:return r=e.sent,e.next=5,r.findOneAndUpdate(t,{$set:{active:!1}},{returnOriginal:!1});case 5:return u=e.sent,s=u.value,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e,void 0)}))),function(e,n){return h.apply(this,arguments)})},function(e,n){e.exports=require("babel-runtime/helpers/defineProperty")},function(e,n){e.exports=require("babel-runtime/helpers/extends")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.connectDB=void 0;var r,u=c(t(0)),a=c(t(1)),s=(n.connectDB=(r=(0,a.default)(u.default.mark((function e(n){var t,r,a,c;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=process.env.MDB_USERNAME,r=process.env.MDB_PASSWORD,a=process.env.MDB_DATABASE,console.log(t,r,a),void 0!==global.client){e.next=10;break}return console.log("client is undefined. connecting again."),c="mongodb+srv://"+t+":"+r+"@cluster0-sb1ds.mongodb.net/"+a+"?retryWrites=true&w=majority",global.client=new s.MongoClient(c,{useNewUrlParser:!0,useUnifiedTopology:!0}),e.next=10,global.client.connect();case 10:return e.abrupt("return",global.client.db(a).collection(n));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)}),t(7));function c(e){return e&&e.__esModule?e:{default:e}}},function(e,n){e.exports=require("mongodb")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.COLLECTIONS={USER:"users",CHAT:"chats",ROOM:"rooms"}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Entity=void 0;var r=t(3);n.Entity=function(e){return{collection:function(){return e},create:function(n){return(0,r.insertOneAsync)(e,n)},createMany:function(n){var t=n.map((function(e){return e}));return(0,r.insertManyAsync)(e,t)},upsert:function(n,t){return(0,r.upsertOneAsync)(e,n,t)},update:function(n,t){return(0,r.updateOneAsync)(e,n,t)},updateMany:function(n,t){return(0,r.updateManyAsync)(e,n,t)},find:function(n){return(0,r.findOneAsync)(e,n)},list:function(n,t,u){return(0,r.listManyAsync)(e,n,t,u)},listIn:function(n,t,u,a,s){return(0,r.listManyInAsync)(e,n,t,u,a,s)},listOr:function(n,t,u,a){return(0,r.listManyOrAsync)(e,n,t,u,a)},delete:function(n){return(0,r.deleteOneAsync)(e,n)},push:function(n,t){return(0,r.pushItemsAsync)(e,n,t)},pull:function(n,t){return(0,r.pullItemsAsync)(e,n,t)}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.encode=function(e){return r.sign(e,u.JWT_PASSWORD)},n.verifyHeader=function(e){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=e.split(" ");if(2===n.length){var t=n[0],a=n[1];if(/^Bearer$/i.test(t))return r.verify(a,u.JWT_PASSWORD)}throw new Error}(e.Authorization);return delete global.auth,global.auth=n,n};var r=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(t(11)),u=t(12)},function(e,n){e.exports=require("jsonwebtoken")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.JWT_PASSWORD="Password1234"},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(8),u=t(9),a=r.COLLECTIONS.USER,s=(0,u.Entity)(a);n.default=s},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(8),u=t(9),a=r.COLLECTIONS.ROOM,s=(0,u.Entity)(a);n.default=s},function(e,n){e.exports=require("uuid")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(8),u=t(9),a=r.COLLECTIONS.CHAT,s=(0,u.Entity)(a);n.default=s},,,,,,,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.handler=void 0;var r=p(t(26)),u=p(t(0)),a=p(t(1)),s=p(t(2)),c=p(t(27)),o=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(t(28)),i=p(t(15)),f=(t(10),p(t(13))),l=p(t(16)),d=p(t(14));function p(e){return e&&e.__esModule?e:{default:e}}var y,v=function(e,n,t){return new c.default((function(r,c){var o;e.postToConnection({ConnectionId:n,Data:(0,s.default)(t)},(o=(0,a.default)(u.default.mark((function e(t,a){var s;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,f.default.find({connections:n});case 3:return s=e.sent,e.next=6,f.default.pull({id:s.id},{connections:n});case 6:c(t);case 7:r(a);case 8:case"end":return e.stop()}}),e,void 0)}))),function(e,n){return o.apply(this,arguments)}))}))};n.handler=(y=(0,a.default)(u.default.mark((function e(n){var t,a,p,y,b,x,O,A,h,m,w,M,_,g,j,k,D,P,S,I,B;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=n.requestContext,a=n.body,p=t.connectionId,y=t.domainName,b=t.stage,x=JSON.parse(a),O=x.data,A=O.type,h=O.senderId,m=O.recipientId,w=O.roomId,O.message,O.id=i.default.v4(),O.createdOn=(new Date).getTime(),"connect"!==A){e.next=10;break}return e.next=10,f.default.push({id:h},{connections:p});case 10:if("send"!==A){e.next=30;break}if(M=new o.ApiGatewayManagementApi({apiVersion:"2018-11-29",endpoint:"https://"+y+"/"+b}),!m){e.next=18;break}return e.next=15,f.default.find({id:m});case 15:return _=e.sent,e.next=18,c.default.all(_.connections.map((function(e){return v(M,e,O)})));case 18:if(!w){e.next=28;break}return e.next=21,d.default.find({id:w});case 21:return j=e.sent,k=j.userIds,D=void 0===k?[]:k,e.next=25,f.default.listIn("id",D);case 25:return P=e.sent,e.next=28,c.default.all((g=[]).concat.apply(g,(0,r.default)(P.map((function(e){return e.connections})))).filter((function(e){return e!==p})).map((function(e){return v(M,e,O)})));case 28:return e.next=30,l.default.create(O);case 30:if("invite"!==A){e.next=38;break}return S=new o.ApiGatewayManagementApi({apiVersion:"2018-11-29",endpoint:"https://"+y+"/"+b}),e.next=34,f.default.find({username:O.username});case 34:return I=e.sent,B=I.connections,e.next=38,c.default.all(B.map((function(e){return v(S,e,O)})));case 38:return e.abrupt("return",{statusCode:200,headers:{"Access-Control-Allow-Origin":"*"},body:(0,s.default)({})});case 41:return e.prev=41,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{statusCode:500,headers:{"Access-Control-Allow-Origin":"*"},body:(0,s.default)(e.t0,["name","message"])});case 45:case"end":return e.stop()}}),e,void 0,[[0,41]])}))),function(e){return y.apply(this,arguments)})},function(e,n){e.exports=require("babel-runtime/helpers/toConsumableArray")},function(e,n){e.exports=require("babel-runtime/core-js/promise")},function(e,n){e.exports=require("aws-sdk")}]));