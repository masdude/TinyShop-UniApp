(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-register"],{"250e":function(e,t,i){var r=i("cd98");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=i("4f06").default;a("55c2c9cd",r,!0,{sourceMap:!1,shadowMode:!1})},"31ae":function(e,t,i){"use strict";i.r(t);var r=i("b33f"),a=i("9fba");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("7aea");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"0eed23ec",null,!1,r["a"],s);t["default"]=c.exports},"7aea":function(e,t,i){"use strict";var r=i("250e"),a=i.n(r);a.a},9370:function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("8e6e"),i("ac6a"),i("456d"),i("96cf");var a=r(i("3b8d")),n=r(i("bd86")),s=i("2f62"),o=i("7ded"),c=r(i("5028"));function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){(0,n.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var l={data:function(){return{registerParams:{mobile:"",password:"",password_repetition:"",promoCode:"",nickname:"",code:""},reqBody:{},codeSeconds:0,smsCodeBtnDisabled:!0}},onLoad:function(e){var t=(0,c.default)().valueOf()/1e3-uni.getStorageSync("registerSmsCodeTime");t<60&&t>0?(this.codeSeconds=this.$mConstDataConfig.sendCodeTime-parseInt(t,10),this.handleSmsCodeTime(this.codeSeconds)):(this.codeSeconds=this.$mConstDataConfig.sendCodeTime,this.smsCodeBtnDisabled=!1,uni.removeStorageSync("registerSmsCodeTime")),this.registerParams.promoCode=e.promo_code},methods:p({},(0,s.mapMutations)(["login"]),{navBack:function(){this.$mRouter.back()},navTo:function(e){this.$mRouter.push({route:e})},getSmsCode:function(){var e=this;this.reqBody["mobile"]=this.registerParams["mobile"];var t=this.$mGraceChecker.check(this.reqBody,this.$mFormRule.sendCodeRule);t?this.$http.post(o.smsCode,{mobile:this.registerParams.mobile,usage:"register"}).then((function(t){e.$mHelper.toast("验证码发送成功, 验证码是".concat(t.data)),e.smsCodeBtnDisabled=!0,uni.setStorageSync("registerSmsCodeTime",t.timestamp),e.handleSmsCodeTime(59)})):this.$mHelper.toast(this.$mGraceChecker.error)},handleSmsCodeTime:function(e){var t=this,i=setInterval((function(){0===e?(clearInterval(i),t.smsCodeBtnDisabled=!1):(t.codeSeconds=e,t.smsCodeBtnDisabled=!0,e--)}),1e3)},toRegister:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.reqBody["mobile"]=this.registerParams["mobile"],this.reqBody["password"]=this.registerParams["password"],this.reqBody["code"]=this.registerParams["code"],this.reqBody["nickname"]=this.registerParams["nickname"],t=this.$mGraceChecker.check(this.reqBody,this.$mFormRule.registerRule),t){e.next=8;break}return this.$mHelper.toast(this.$mGraceChecker.error),e.abrupt("return");case 8:if(this.registerParams["password"]===this.registerParams["password_repetition"]){e.next=11;break}return this.$mHelper.toast("两次输入的密码不一致"),e.abrupt("return");case 11:return this.reqBody["password_repetition"]=this.registerParams["password_repetition"],this.reqBody["promoCode"]=this.registerParams["promoCode"],this.reqBody.group="tinyShopH5",e.next=16,this.$http.post(o.registerByPass,this.reqBody).then((function(){i.$mHelper.toast("恭喜您注册成功"),i.$mRouter.push({route:"/pages/public/login"})}));case 16:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()})};t.default=l},"9fba":function(e,t,i){"use strict";i.r(t);var r=i("9370"),a=i.n(r);for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=a.a},b33f:function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-text",{staticClass:"back-btn iconfont iconzuojiantou-up",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navBack.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"right-top-sign"}),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"left-top-sign"},[e._v("REGISTER")]),i("v-uni-view",{staticClass:"welcome"},[e._v("账号注册！")]),i("v-uni-view",{staticClass:"input-content"},[i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[e._v("手机号码")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号码",maxlength:"11"},model:{value:e.registerParams.mobile,callback:function(t){e.$set(e.registerParams,"mobile",t)},expression:"registerParams.mobile"}})],1),i("v-uni-view",{staticClass:"input-item input-item-sms-code"},[i("v-uni-view",{staticClass:"input-wrapper"},[i("v-uni-view",{staticClass:"rf-input-wrapper"},[i("v-uni-view",{staticClass:"tit"},[e._v("验证码")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入验证码",maxlength:"4","data-key":"mobile"},model:{value:e.registerParams.code,callback:function(t){e.$set(e.registerParams,"code",t)},expression:"registerParams.code"}})],1),i("v-uni-view",{staticClass:"sms-code-btn",attrs:{disabled:e.smsCodeBtnDisabled},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.getSmsCode.apply(void 0,arguments)}}},[e.smsCodeBtnDisabled?i("v-uni-text",{staticClass:"sms-code-resend"},[e._v(e._s("重新发送 ("+e.codeSeconds+")"))]):i("v-uni-text",[e._v("获取验证码")])],1)],1)],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[e._v("密码")]),i("v-uni-input",{attrs:{type:"password",placeholder:"请输入密码",maxlength:"18"},model:{value:e.registerParams.password,callback:function(t){e.$set(e.registerParams,"password",t)},expression:"registerParams.password"}})],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[e._v("确认密码")]),i("v-uni-input",{attrs:{type:"password",placeholder:"请输入确认密码",maxlength:"18"},model:{value:e.registerParams.password_repetition,callback:function(t){e.$set(e.registerParams,"password_repetition",t)},expression:"registerParams.password_repetition"}})],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[e._v("昵称")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入您的昵称",maxlength:"12"},model:{value:e.registerParams.nickname,callback:function(t){e.$set(e.registerParams,"nickname",t)},expression:"registerParams.nickname"}})],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[e._v("邀请码")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入您的邀请码"},model:{value:e.registerParams.promoCode,callback:function(t){e.$set(e.registerParams,"promoCode",t)},expression:"registerParams.promoCode"}})],1),i("v-uni-button",{staticClass:"confirm-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toRegister.apply(void 0,arguments)}}},[e._v("注册")])],1)],1),i("v-uni-view",{staticClass:"register-section"},[e._v("已经注册过了?"),i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo("/pages/public/login")}}},[e._v("马上登录")])],1)],1)},n=[]},cd98:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'.container[data-v-0eed23ec]{padding-top:60px;position:relative;width:100vw;overflow:hidden;background:#fff}.container .wrapper[data-v-0eed23ec]{position:relative;width:100vw;z-index:90;background:#fff;padding-bottom:%?40?%}.container .wrapper .welcome[data-v-0eed23ec]{position:relative;left:%?50?%;top:%?-90?%;font-size:%?46?%;color:#555;text-shadow:1px 0 1px rgba(0,0,0,.3)}.container .wrapper .input-content[data-v-0eed23ec]{padding:0 %?60?%}.container .wrapper .input-item[data-v-0eed23ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?30?%;background:#f8f6fc;height:%?120?%;border-radius:4px;margin-bottom:%?50?%}.container .wrapper .input-item[data-v-0eed23ec]:last-child{margin-bottom:0}.container .wrapper .input-item .tit[data-v-0eed23ec]{height:%?50?%;line-height:%?56?%;font-size:%?26?%;color:#606266}.container .wrapper .input-item uni-input[data-v-0eed23ec]{height:%?60?%;font-size:%?30?%;color:#303133;width:100%}.container .wrapper .input-item-sms-code[data-v-0eed23ec]{position:relative;width:100%}.container .wrapper .input-item-sms-code .sms-code-btn[data-v-0eed23ec]{position:absolute;color:#111;right:%?20?%;bottom:%?20?%;font-size:%?28?%}.container .wrapper .input-item-sms-code .sms-code-resend[data-v-0eed23ec]{color:#999}.container .wrapper .input-item-sms-code .sms-code-btn[data-v-0eed23ec]:after{border:none;background-color:initial}.container .wrapper .confirm-btn[data-v-0eed23ec]{width:%?630?%;height:%?76?%;line-height:%?76?%;border-radius:50px;margin-top:%?70?%;background:#fa436a;color:#fff;font-size:%?32?%}.container .wrapper .confirm-btn[data-v-0eed23ec]:after{border-radius:100px}.container .wrapper .forget-section[data-v-0eed23ec]{font-size:%?26?%;color:#4399fc;text-align:center;margin-top:%?40?%}.container .back-btn[data-v-0eed23ec]{position:absolute;left:%?40?%;z-index:9999;padding-top:0;top:%?40?%;font-size:%?40?%;color:#303133}.container .left-top-sign[data-v-0eed23ec]{font-size:%?120?%;color:#f8f8f8;position:relative;left:%?-16?%}.container .right-top-sign[data-v-0eed23ec]{position:absolute;top:%?80?%;right:%?-30?%;z-index:95}.container .right-top-sign[data-v-0eed23ec]:before,.container .right-top-sign[data-v-0eed23ec]:after{display:block;content:"";width:%?400?%;height:%?80?%;background:#b4f3e2}.container .right-top-sign[data-v-0eed23ec]:before{-webkit-transform:rotate(50deg);transform:rotate(50deg);border-radius:0 50px 0 0}.container .right-top-sign[data-v-0eed23ec]:after{position:absolute;right:%?-198?%;top:0;-webkit-transform:rotate(-50deg);transform:rotate(-50deg);border-radius:50px 0 0 0}.container .register-section[data-v-0eed23ec]{margin:%?30?% 0 %?50?%;width:100%;font-size:%?26?%;color:#606266;text-align:center}.container .register-section uni-text[data-v-0eed23ec]{color:#4399fc;margin-left:%?10?%}.footer[data-v-0eed23ec]{width:100%;text-align:center;margin:%?20?% 0 %?20?%;font-size:%?26?%}.footer .protocol[data-v-0eed23ec]{color:#fa436a;margin:0 %?10?%}',""]),e.exports=t}}]);