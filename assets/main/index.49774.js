window.__require=function t(e,o,r){function n(i,p){if(!o[i]){if(!e[i]){var u=i.split("/");if(u=u[u.length-1],!e[u]){var f="function"==typeof __require&&__require;if(!p&&f)return f(u,!0);if(c)return c(u,!0);throw new Error("Cannot find module '"+i+"'")}i=u}var s=o[i]={exports:{}};e[i][0].call(s.exports,function(t){return n(e[i][1][t]||t)},s,s.exports,t,e,o,r)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)n(r[i]);return n}({BeltConveyorScript:[function(t,e,o){"use strict";cc._RF.push(e,"12c2fCxno9Brp2Nghd+OjgN","BeltConveyorScript");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.impulse=null,e}return n(e,t),e.prototype.start=function(){this.getComponent(cc.Collider3D).on("collision-stay",this.onCollision,this)},e.prototype.onCollision=function(t){t.otherCollider.node.getComponent(cc.RigidBody3D).applyForce(this.impulse,cc.v3(0,0,0))},c([u(cc.Vec3)],e.prototype,"impulse",void 0),c([p],e)}(cc.Component);o.default=f,cc._RF.pop()},{}],CameraScript:[function(t,e,o){"use strict";cc._RF.push(e,"28f3aWc+25LW5fF5Bp9Ye6z","CameraScript");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.Camera=null,e.startTouchLocation=null,e.startCameraPosition=null,e}return n(e,t),e.prototype.start=function(){},c([u(cc.Node)],e.prototype,"Camera",void 0),c([p],e)}(cc.Component);o.default=f,cc._RF.pop()},{}],Helloworld:[function(t,e,o){"use strict";cc._RF.push(e,"d7c7bDDlExNA4FeVEY3nA10","Helloworld");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){cc.director.getPhysics3DManager().enabled=!0},c([p],e)}(cc.Component));o.default=u,cc._RF.pop()},{}],InputScript:[function(t,e,o){"use strict";cc._RF.push(e,"cb4760WqoFDH7BmwHnP1Nzx","InputScript");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.KonnbeaObject=null,e.Obj=null,e}return n(e,t),e.prototype.start=function(){this.addPrefab()},e.prototype.addPrefab=function(){var t=cc.instantiate(this.Obj);t.setPosition(this.node.parent.getPosition()),console.log(t),this.KonnbeaObject.addChild(t)},c([u(cc.Node)],e.prototype,"KonnbeaObject",void 0),c([u(cc.Prefab)],e.prototype,"Obj",void 0),c([p],e)}(cc.Component);o.default=f,cc._RF.pop()},{}],TransformationScript:[function(t,e,o){"use strict";cc._RF.push(e,"756acTUmfpGpp6e4zNtNk3o","TransformationScript");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){this.getComponent(cc.Collider3D).on("trigger-exit",this.onCollision,this)},e.prototype.onCollision=function(){},c([p],e)}(cc.Component));o.default=u,cc._RF.pop()},{}]},{},["BeltConveyorScript","CameraScript","Helloworld","InputScript","TransformationScript"]);