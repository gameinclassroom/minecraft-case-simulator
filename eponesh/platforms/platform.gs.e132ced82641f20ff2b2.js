(self.webpackChunkgame_score_sdk=self.webpackChunkgame_score_sdk||[]).push([[766],{2059:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});class n{constructor(){this.canAddShortcut=!1}addShortcut(){return t=this,e=void 0,n=function*(){return!1},new((r=void 0)||(r=Promise))((function(i,o){function s(t){try{c(n.next(t))}catch(t){o(t)}}function a(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}));var t,e,r,n}}},5572:(t,e,r)=>{"use strict";r.d(e,{VK:()=>n,yl:()=>i});const n={success:!0,payload:{}},i={success:!1,payload:{}}},2712:(t,e,r)=>{"use strict";r.d(e,{aD:()=>l,FU:()=>f,hc:()=>v});const n=(t,e)=>({type:t,getLink:e}),i=n("facebook",(t=>`//www.facebook.com/sharer/sharer.php?u=${t.url}`)),o=n("whatsapp",(t=>`//api.whatsapp.com/send?text=${t.text}%20${t.url}`)),s=n("telegram",(t=>`//t.me/share/url?url=${t.url}&text=${t.text}`)),a=n("vkontakte",(t=>`//vk.com/share.php?url=${t.url}&title=${t.text}&image=${t.image}`)),c=n("twitter",(t=>`//twitter.com/share?text=${t.text}&url=${t.url}`)),u=n("odnoklassniki",(t=>`//connect.ok.ru/offer?url=${t.url}&title=${t.text}&imageUrl=${t.image}`)),h=n("viber",(t=>`viber://forward?text=${t.text}%20${t.url}`)),d=n("moymir",(t=>`//connect.mail.ru/share?url=${t.url}&title=${t.text}&image_url=${t.image}`)),l=[o,s,a,u,h,d],f=[i,c,s,o,h],v=[i,c,s,o,h,a,u,d]},6390:(t,e,r)=>{"use strict";function n(){try{return window.top.location.href||location.href}catch(t){return location.href}}r.d(e,{T:()=>n})},4555:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>m});var n=r(6390),i=r(8293),o=function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{c(n.next(t))}catch(t){o(t)}}function a(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))};class s{constructor(t){this.config=t}get appUrl(){return(0,n.T)()}init(){return o(this,void 0,void 0,(function*(){const t=(0,i._)();return this.ready=t.ready,t.done(this),t.ready}))}getPlayer(){return o(this,void 0,void 0,(function*(){const t=(0,i._)();return t.done({id:0,name:"",photoSmall:"",photoMedium:"",photoLarge:""}),t.ready}))}showRewardedVideo(){const t=(0,i._)();return t.done(!1),t.ready}showPreloader(){const t=(0,i._)();return t.done(!1),t.ready}showFullscreen(){const t=(0,i._)();return t.done(!1),t.ready}showSticky(){const t=(0,i._)();return t.done(!1),t.ready}closeSticky(){}refreshSticky(){return this.closeSticky(),this.showSticky()}}var a=function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{c(n.next(t))}catch(t){o(t)}}function a(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))};class c{constructor(t){this.sdk=t,this.hasCredetials=!1}getPlayerAuthInfo(){return a(this,void 0,void 0,(function*(){const t=(0,i._)();return yield this.sdk.ready,t.done({}),t.ready}))}getPlayerContext(){return a(this,void 0,void 0,(function*(){return{platformData:yield this.getPlayerAuthInfo(),key:""}}))}loginPlayer(){return a(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}getPlayer(){return a(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}isPlatformAvatar(){return!1}}var u=function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{c(n.next(t))}catch(t){o(t)}}function a(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))};class h{constructor(t){this.sdk=t,this.isStickyAvailable=!1,this.isFullscreenAvailable=!1,this.isRewardedAvailable=!1,this.isPreloaderAvailable=!1}showPreloader(){return u(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showPreloader().catch((()=>!1))}))}showFullscreen(){return u(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showFullscreen().catch((()=>!1))}))}showRewardedVideo(){return u(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showRewardedVideo().catch((()=>!1))}))}showSticky(){return u(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showSticky().catch((()=>!1))}))}refreshSticky(){return u(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.refreshSticky().catch((()=>!1))}))}closeSticky(){return u(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.closeSticky()}))}}var d=r(2712),l=r(5942),f=r(5572);class v{constructor(t){this.sdk=t,this.hasIntegratedAuth=!1,this.isExternalLinksAllowed=!0,this.isSecretCodeAuthAvailable=!0,this._hasAuthModal=!1,this.type=l.z.NONE,this.socialNetworks=d.hc}getSDK(){return this.sdk}getNativeSDK(){return this.sdk}requestPermissions(){return t=this,e=void 0,n=function*(){return f.VK},new((r=void 0)||(r=Promise))((function(i,o){function s(t){try{c(n.next(t))}catch(t){o(t)}}function a(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}));var t,e,r,n}}class y{constructor(t){this.sdk=t,this.isSupportsShare=!0,this.isSupportsNativeShare=!1,this.isSupportsNativePosts=!1,this.isSupportsNativeInvite=!1,this.isSupportsNativeCommunityJoin=!1,this.canJoinCommunity=!0}share(t){return Promise.resolve(!1)}post(t){return Promise.resolve(!1)}invite(t){return Promise.resolve(!1)}joinCommunity(){return Promise.resolve(!1)}}var p=function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{c(n.next(t))}catch(t){o(t)}}function a(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))};class w{constructor(t){this.sdk=t,this.isSupportsPayments=!1,this.isServerValidation=!1}mapProducts(t,e){return p(this,void 0,void 0,(function*(){return e}))}fetchPurchases(){return p(this,void 0,void 0,(function*(){return{payload:{},purchases:[]}}))}purchase(t){return p(this,void 0,void 0,(function*(){return{}}))}consume(t){return p(this,void 0,void 0,(function*(){return{}}))}}var k=r(2059);function m(t){return e=this,r=void 0,i=function*(){const e=new s({}),[,,r]=yield Promise.all([e.init(),t.setupStorage([]),t.fetchConfig()]),n=new c(e);return{adsAdapter:new h(e),appAdapter:new k.Z,playerAdapter:n,platformAdapter:new v(e),socialsAdapter:new y(e),paymentsAdapter:new w(e),projectConfig:r}},new((n=void 0)||(n=Promise))((function(t,o){function s(t){try{c(i.next(t))}catch(t){o(t)}}function a(t){try{c(i.throw(t))}catch(t){o(t)}}function c(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(t){t(r)}))).then(s,a)}c((i=i.apply(e,r||[])).next())}));var e,r,n,i}}}]);