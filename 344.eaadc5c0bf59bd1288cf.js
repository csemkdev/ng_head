(self.webpackChunkvuexy_admin_template=self.webpackChunkvuexy_admin_template||[]).push([[344],{6344:function(e,t,n){"use strict";n.d(t,{z1:function(){return _},mZ:function(){return j}});var r=n(8784),o=n(2250),i=n(1112),a=n(1998),s=n(5959),u=n(878),c=n(8318),l=n(6994),f=n(1101),g=n(3835),d=n(4019),h=n(611),b=n(3982),m=n(9996),v=n(7727),p=n(4689),y=n(1116),k=n(1785);function S(e){return Boolean(e.parentElement&&"picture"===e.parentElement.nodeName.toLowerCase())}function C(e){return"img"===e.nodeName.toLowerCase()}function I(e,t,n){return C(e)?n&&"srcset"in e?e.srcset=t:e.src=t:e.style.backgroundImage="url('".concat(t,"')"),e}function w(e){return function(t){for(var n=t.parentElement.getElementsByTagName("source"),r=0;r<n.length;r++){var o=n[r].getAttribute(e);o&&("srcset"in n[r]?n[r].srcset=o:n[r].src=o)}}}var z=w("defaultImage"),P=w("lazyLoad"),Z=w("errorImage");function L(e){return function(t,n,r){C(t)&&S(t)&&e(t),n&&I(t,n,r)}}var O=L(z),N=L(P),x=L(Z),E="ng-lazyloaded",A="ng-lazyloading";function B(e,t){e.className=e.className.replace(t,"")}function T(e,t){e.className.includes(t)||(e.className+=" ".concat(t))}var q=function(e){(0,r.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.apply(this,arguments)).observers=new WeakMap,e.intersectionSubject=new s.xQ,e.uniqKey={},e}return(0,a.Z)(n,[{key:"getObservable",value:function(e){var t=this;if(this.skipLazyLoading(e))return(0,u.of)({isIntersecting:!0});if(e.customObservable)return e.customObservable;var n=e.scrollContainer||this.uniqKey,r={root:e.scrollContainer||null};e.offset&&(r.rootMargin="".concat(e.offset,"px"));var o=this.observers.get(n);return o||(o=new IntersectionObserver(function(e){return t.loadingCallback(e)},r),this.observers.set(n,o)),o.observe(e.element),c.y.create(function(n){var r=t.intersectionSubject.pipe((0,g.h)(function(t){return t.target===e.element})).subscribe(n);return function(){r.unsubscribe(),o.unobserve(e.element)}})}},{key:"isVisible",value:function(e){return e.isIntersecting}},{key:"loadingCallback",value:function(e){var t=this;e.forEach(function(e){return t.intersectionSubject.next(e)})}}]),n}(function(e){(0,r.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"setup",value:function(e){var t;O(e.element,e.defaultImagePath,e.useSrcset),e.imagePath&&T(e.element,A),(t=e.element).className&&t.className.includes("ng-lazyloaded")&&B(e.element,E)}},{key:"finally",value:function(e){T(e.element,E),B(e.element,A)}},{key:"loadImage",value:function(e){if(this.skipLazyLoading(e))return[e.imagePath];var t,n=e.element,r=e.useSrcset,o=e.imagePath,i=e.decode;if(C(n)&&S(n)){var a=n.parentNode.cloneNode(!0);t=a.getElementsByTagName("img")[0],P(t),I(t,o,r)}else t=new Image,C(n)&&n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),C(n)&&n.sizes&&(t.sizes=n.sizes),r&&"srcset"in t?t.srcset=o:t.src=o;return i&&t.decode?t.decode().then(function(){return o}):new Promise(function(e,n){t.onload=function(){return e(o)},t.onerror=function(){return n(null)}})}},{key:"setErrorImage",value:function(e,t){var n=t.element;x(n,t.errorImagePath,t.useSrcset),T(n,"ng-failed-lazyloaded")}},{key:"setLoadedImage",value:function(e,t){N(t.element,e,t.useSrcset)}},{key:"isDisabled",value:function(){return(0,y.PM)(this.platformId)&&!this.isBot()}},{key:"skipLazyLoading",value:function(e){return this.isBot(e)}},{key:"isBot",value:function(e){var t;return!(null===(t=this.navigator)||void 0===t||!t.userAgent)&&/googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora\ link\ preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|duckduckbot|prerender/i.test(this.navigator.userAgent)}}]),n}(function(){function e(){(0,i.Z)(this,e),this.navigator="undefined"!=typeof window?window.navigator:void 0}return(0,a.Z)(e,[{key:"setPlatformId",value:function(e){this.platformId=e}},{key:"onDestroy",value:function(e){}},{key:"onAttributeChange",value:function(e){}}]),e}())),D=new k.OlP("LazyLoadImageHooks"),_=function(){var e=function(){function e(t,n,r,o){(0,i.Z)(this,e),this.onStateChange=new k.vpe,this.elementRef=t,this.ngZone=n,this.propertyChanges$=new l.t,this.hooks=o,this.hooks.setPlatformId(r),this.uid=Math.random().toString(36).substr(2,9)}return(0,a.Z)(e,[{key:"ngOnChanges",value:function(){!0!==this.debug||this.debugSubscription||(this.debugSubscription=this.onStateChange.subscribe(function(e){return console.log(e)})),this.propertyChanges$.next({element:this.elementRef.nativeElement,imagePath:this.lazyImage,defaultImagePath:this.defaultImage,errorImagePath:this.errorImage,useSrcset:this.useSrcset,offset:this.offset?0|this.offset:0,scrollContainer:this.scrollTarget,customObservable:this.customObservable,decode:this.decode,onStateChange:this.onStateChange,id:this.uid})}},{key:"ngAfterContentInit",value:function(){var e=this;if(this.hooks.isDisabled())return null;this.ngZone.runOutsideAngular(function(){e.loadSubscription=e.propertyChanges$.pipe((0,d.b)(function(t){return e.hooks.onAttributeChange(t)}),(0,d.b)(function(e){return e.onStateChange.emit({reason:"setup"})}),(0,d.b)(function(t){return e.hooks.setup(t)}),(0,p.w)(function(t){return t.imagePath?e.hooks.getObservable(t).pipe(function(e,t){return function(n){return n.pipe((0,d.b)(function(e){return t.onStateChange.emit({reason:"observer-emit",data:e})}),(0,g.h)(function(n){return e.isVisible(n,t)}),(0,h.q)(1),(0,d.b)(function(){return t.onStateChange.emit({reason:"start-loading"})}),(0,b.zg)(function(){return e.loadImage(t)}),(0,d.b)(function(){return t.onStateChange.emit({reason:"mount-image"})}),(0,d.b)(function(n){return e.setLoadedImage(n,t)}),(0,d.b)(function(){return t.onStateChange.emit({reason:"loading-succeeded"})}),(0,m.U)(function(){return!0}),(0,v.K)(function(n){return t.onStateChange.emit({reason:"loading-failed",data:n}),e.setErrorImage(n,t),(0,u.of)(!1)}),(0,d.b)(function(){t.onStateChange.emit({reason:"finally"}),e.finally(t)}))}}(e.hooks,t)):(0,f.F)()})).subscribe({next:function(){return null}})})}},{key:"ngOnDestroy",value:function(){var e,t,n=this;this.propertyChanges$.pipe((0,h.q)(1)).subscribe({next:function(e){return n.hooks.onDestroy(e)}}).unsubscribe(),null===(e=this.loadSubscription)||void 0===e||e.unsubscribe(),null===(t=this.debugSubscription)||void 0===t||t.unsubscribe()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(k.Y36(k.SBq),k.Y36(k.R0b),k.Y36(k.Lbi),k.Y36(D))},e.\u0275dir=k.lG2({type:e,selectors:[["","lazyLoad",""]],inputs:{lazyImage:["lazyLoad","lazyImage"],defaultImage:"defaultImage",errorImage:"errorImage",scrollTarget:"scrollTarget",customObservable:"customObservable",offset:"offset",useSrcset:"useSrcset",decode:"decode",debug:"debug"},outputs:{onStateChange:"onStateChange"},features:[k.TTD]}),e}(),j=function(){var e=(0,a.Z)(function e(){(0,i.Z)(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=k.oAB({type:e}),e.\u0275inj=k.cJS({providers:[{provide:D,useClass:q}]}),e}()}}]);