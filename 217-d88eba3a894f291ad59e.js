"use strict";(self.webpackChunkYaswanth_Palika=self.webpackChunkYaswanth_Palika||[]).push([[217],{39217:function(e,t,n){function o(e,t,n,o,r,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(o,r)}n.r(t),n.d(t,{renderImageToString:function(){return b},swapPlaceholderImage:function(){return h}});var r,a=n(64687),i=n.n(a),c=n(93723),u=n(67294),s=n(97762),l=(n(92369),new WeakMap),d=navigator.connection||navigator.mozConnection||navigator.webkitConnection,f=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function v(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function g(e,t,n,o,r,a){var i=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),u=n.has(t);function s(e){var t=this;this.removeEventListener("load",s);var n=e.currentTarget,o=new Image;o.src=n.currentSrc,o.decode?o.decode().then((function(){v(t,c),null==r||r({wasCached:u})})).catch((function(e){v(t,c),null==a||a(e)})):(v(this,c),null==r||r({wasCached:u}))}return i.addEventListener("load",s),null==o||o({wasCached:u}),Array.from(i.parentElement.children).forEach((function(e){var t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),i.complete&&s.call(i,{currentTarget:i}),function(){i&&i.removeEventListener("load",s)}}function h(e,t,a,u,s,f,v){if(!(0,c.h)()){var h,b,m,w=(j=function(){h=g(e,t,a,s,f,v)},"IntersectionObserver"in window?(r||(r=new IntersectionObserver((function(e){e.forEach((function(e){var t;e.isIntersecting&&(null==(t=l.get(e.target))||t(),l.delete(e.target))}))}),{rootMargin:"4g"!==(null==d?void 0:d.effectiveType)||null!=d&&d.saveData?"2500px":"1250px"})),function(e){return l.set(e,j),r.observe(e),function(){r&&e&&(l.delete(e),r.unobserve(e))}}):function(){return j(),function(){}}),p=w(e);return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(b=u.objectFit)?b:"cover",e.dataset.objectPosition=""+(null!=(m=u.objectPosition)?m:"50% 50%"),(y=i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="objectFitPolyfill"in window,e.t0){e.next=4;break}return e.next=4,n.e(231).then(n.t.bind(n,27231,23));case 4:window.objectFitPolyfill(t);case 5:case"end":return e.stop()}}),e)})),k=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=y.apply(e,t);function i(e){o(a,n,r,i,c,"next",e)}function c(e){o(a,n,r,i,c,"throw",e)}i(void 0)}))},function(e){return k.apply(this,arguments)})(e)),function(){h&&h(),p()}}var y,k,j;return g(e,t,a,s,f,v)}function b(e){var t=e.image,n=e.loading,o=void 0===n?"lazy":n,r=e.isLoading,a=e.isLoaded,i=e.imgClassName,l=e.imgStyle,d=void 0===l?{}:l,v=e.objectPosition,g=e.backgroundColor,h=e.objectFit,b=void 0===h?"cover":h,m=(0,c._)(e,f),w=t.width,p=t.height,y=t.layout,k=t.images,j=t.placeholder,C=t.backgroundColor;return d=(0,c.a)({objectFit:b,objectPosition:v,backgroundColor:g},d),(0,s.renderToStaticMarkup)(u.createElement(c.L,{layout:y,width:w,height:p},u.createElement(c.P,(0,c.a)({},(0,c.g)(j,a,y,w,p,C,b,v))),u.createElement(c.M,(0,c.a)({},m,{width:w,height:p,className:i},(0,c.b)(r,a,k,o,d)))))}}}]);
//# sourceMappingURL=217-d88eba3a894f291ad59e.js.map