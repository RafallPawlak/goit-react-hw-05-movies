"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{1127:function(e,t,n){n.d(t,{N:function(){return c}});var r=n(5861),a=n(7757),i=n.n(a),s=n(3263),c=function(){var e=(0,r.Z)(i().mark((function e(t,n,r){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/".concat(t),{method:"get",params:{api_key:"cfb3f1c097fdc1e68787a815ffed0794",query:n,page:r}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},4012:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(1087),a=n(7689),i="MovieList_list__psP2f",s="MovieList_title__IznO5",c="MovieList_item__uj8y-",o="MovieList_link__CQ7eq",u=n(184),l=function(e){var t=e.movies,n=e.titlePage,l=void 0===n?null:n,f=(0,a.TH)();return(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)("h1",{className:s,children:l}),(0,u.jsx)("ul",{className:i,children:t.map((function(e){var t=e.id,n=e.title,a=e.name;return(0,u.jsx)("li",{className:c,children:(0,u.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:f},className:o,children:n||a})},t)}))})]})}},9544:function(e,t,n){n.r(t);var r=n(9439),a=n(2791),i=n(1127),s=n(4012),c=n(184);t.default=function(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),n=t[0],o=t[1];if((0,a.useEffect)((function(){(0,i.N)("/trending/movie/day").then((function(e){o(e.results)})).catch(console.log)}),[]),n)return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.Z,{movies:n,titlePage:"Trending today"})})}}}]);
//# sourceMappingURL=544.f4b9e881.chunk.js.map