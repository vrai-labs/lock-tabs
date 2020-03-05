var supertokenslock=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.getNewInstance=function(){return new r.default}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function u(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,u)}c((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(2);function a(e){return new Promise((function(t){return setTimeout(t,e)}))}function u(e){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",n="",r=0;r<e;r++){n+=t[Math.floor(Math.random()*t.length)]}return n}var c=function(){function e(){this.acquiredIatSet=new Set,this.id=Date.now().toString()+u(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),void 0===e.waiters&&(e.waiters=[])}return e.prototype.acquireLock=function(t,n){return void 0===n&&(n=5e3),r(this,void 0,void 0,(function(){var r,o,c,s,l,d;return i(this,(function(i){switch(i.label){case 0:r=Date.now()+u(4),o=Date.now()+n,c="browser-tabs-lock-key-"+t,s=window.localStorage,i.label=1;case 1:return Date.now()<o?[4,a(30)]:[3,8];case 2:return i.sent(),null!==s.getItem(c)?[3,5]:(l=this.id+"-"+t+"-"+r,[4,a(Math.floor(25*Math.random()))]);case 3:return i.sent(),s.setItem(c,JSON.stringify({id:this.id,iat:r,timeoutKey:l,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,a(30)];case 4:return i.sent(),null!==(d=s.getItem(c))&&(d=JSON.parse(d)).id===this.id&&d.iat===r?(this.acquiredIatSet.add(r),this.refreshLockWhileAcquired(c,r),[2,!0]):[3,7];case 5:return e.lockCorrector(),[4,this.waitForSomethingToChange(o)];case 6:i.sent(),i.label=7;case 7:return r=Date.now()+u(4),[3,1];case 8:return[2,!1]}}))}))},e.prototype.refreshLockWhileAcquired=function(e,t){return r(this,void 0,void 0,(function(){var n=this;return i(this,(function(a){return setTimeout((function(){return r(n,void 0,void 0,(function(){var n,r;return i(this,(function(i){switch(i.label){case 0:return[4,o.default().lock(t)];case 1:return i.sent(),this.acquiredIatSet.has(t)?(n=window.localStorage,null===(r=n.getItem(e))?(o.default().unlock(t),[2]):((r=JSON.parse(r)).timeRefreshed=Date.now(),n.setItem(e,JSON.stringify(r)),o.default().unlock(t),this.refreshLockWhileAcquired(e,t),[2])):(o.default().unlock(t),[2])}}))}))}),1e3),[2]}))}))},e.prototype.waitForSomethingToChange=function(t){return r(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){var r=!1,i=Date.now(),o=50,a=!1;function u(){if(a||(window.removeEventListener("storage",u),e.removeFromWaiting(u),clearTimeout(c),a=!0),!r){r=!0;var t=o-(Date.now()-i);t>0?setTimeout(n,t):n()}}window.addEventListener("storage",u),e.addToWaiting(u);var c=setTimeout(u,Math.max(0,t-Date.now()))}))];case 1:return n.sent(),[2]}}))}))},e.addToWaiting=function(t){this.removeFromWaiting(t),void 0!==e.waiters&&e.waiters.push(t)},e.removeFromWaiting=function(t){void 0!==e.waiters&&(e.waiters=e.waiters.filter((function(e){return e!==t})))},e.notifyWaiters=function(){void 0!==e.waiters&&e.waiters.slice().forEach((function(e){return e()}))},e.prototype.releaseLock=function(e){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.releaseLock__private__(e)];case 1:return[2,t.sent()]}}))}))},e.prototype.releaseLock__private__=function(t){return r(this,void 0,void 0,(function(){var n,r,a;return i(this,(function(i){switch(i.label){case 0:return n=window.localStorage,r="browser-tabs-lock-key-"+t,null===(a=n.getItem(r))?[2]:(a=JSON.parse(a)).id!==this.id?[3,2]:[4,o.default().lock(a.iat)];case 1:i.sent(),this.acquiredIatSet.delete(a.iat),n.removeItem(r),o.default().unlock(a.iat),e.notifyWaiters(),i.label=2;case 2:return[2]}}))}))},e.lockCorrector=function(){for(var t=Date.now()-5e3,n=window.localStorage,r=Object.keys(n),i=!1,o=0;o<r.length;o++){var a=r[o];if(a.includes("browser-tabs-lock-key")){var u=n.getItem(a);null!==u&&(void 0===(u=JSON.parse(u)).timeRefreshed&&u.timeAcquired<t||void 0!==u.timeRefreshed&&u.timeRefreshed<t)&&(n.removeItem(a),i=!0)}}i&&e.notifyWaiters()},e.waiters=void 0,e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){var e=this;this.locked=new Map,this.addToLocked=function(t,n){var r=e.locked.get(t);void 0===r?void 0===n?e.locked.set(t,[]):e.locked.set(t,[n]):void 0!==n&&(r.unshift(n),e.locked.set(t,r))},this.isLocked=function(t){return e.locked.has(t)},this.lock=function(t){return new Promise((function(n,r){e.isLocked(t)?e.addToLocked(t,n):(e.addToLocked(t),n())}))},this.unlock=function(t){var n=e.locked.get(t);if(void 0!==n&&0!==n.length){var r=n.pop();e.locked.set(t,n),void 0!==r&&setTimeout(r,0)}else e.locked.delete(t)}}return e.getInstance=function(){return void 0===e.instance&&(e.instance=new e),e.instance},e}();t.default=function(){return r.getInstance()}}]);