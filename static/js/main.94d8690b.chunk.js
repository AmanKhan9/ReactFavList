(this.webpackJsonpfriendslist=this.webpackJsonpfriendslist||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),s=n.n(r),i=(n(12),n(13),n(3)),o=n(4),u=(n(14),n(0)),l=a.a.memo((function(e){var t=e.name,n=e.removeFriend,c=e.markFavourite,a=e.isFavourite;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"row friend-row col-md-12",children:[Object(u.jsx)("div",{className:"col-md-6",children:t}),Object(u.jsxs)("div",{className:"col-md-6 buttonDiv",children:[Object(u.jsxs)("button",{type:"button",className:"btn btn-sm",onClick:function(){return c(t)},children:[!a&&Object(u.jsx)("i",{className:"far fa-star"}),a&&Object(u.jsx)("i",{className:"fas fa-star"})]}),Object(u.jsx)("button",{type:"button",className:"btn btn-sm",onClick:function(){return n(t)},children:Object(u.jsx)("i",{class:"far fa-trash-alt"})})]})]})})}),(function(e,t){return e.name===t.name&&e.isFavourite===t.isFavourite}));n(16),n(17);var j=function(e){var t=e.goToNextPage,n=e.goToPreviousPage,c=e.currentPage,a=e.totalPages,r=e.changePage;return Object(u.jsxs)("div",{className:"col-md-6 pagination-div",children:[Object(u.jsx)("button",{onClick:n,className:"prev ".concat(1===c||0===a?"disabled":""),children:Object(u.jsx)("i",{class:"fas fa-backward"})}),function(){var e,t;return a<=4?(e=1,t=a):c<=3?(e=1,t=4):c+1>=a?(e=a-3,t=a):(e=c-2,t=c+1),Object(i.a)(Array(t+1-e).keys()).map((function(t){return e+t}))}().map((function(e,t){return Object(u.jsx)("button",{onClick:r,className:"paginationItem ".concat(c===e?"active":"disabled"),children:Object(u.jsx)("span",{children:e})},t)})),Object(u.jsx)("button",{onClick:t,className:"next ".concat(c===a||0===a?"disabled":""),children:Object(u.jsx)("i",{class:"fas fa-forward"})})]})};function b(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)({}),b=Object(o.a)(s,2),f=b[0],m=b[1],d=Object(c.useState)(""),v=Object(o.a)(d,2),O=v[0],h=v[1],g=Math.ceil(a.length/4),x=Object(c.useState)(1),F=Object(o.a)(x,2),p=F[0],k=F[1];function N(e){r((function(t){return t.filter((function(t){return t.name!==e}))}))}function P(e){r((function(t){for(var n=Object(i.a)(t),c=0;c<n.length;c++)if(n[c].name===e){n[c].isFavourite=!n[c].isFavourite;break}return console.log(n),n}))}return Object(c.useEffect)((function(){h(""),m({})}),[a.length]),Object(c.useEffect)((function(){k(g)}),[g]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"col-md-4 mainDiv",children:[Object(u.jsx)("input",{className:"col-md-10",onKeyPress:function(e){"Enter"===e.key&&""!==O&&r((function(e){return[].concat(Object(i.a)(e),[{name:O,isFavourite:!1}])}))},onChange:function(e){h(e.target.value)},value:O,placeholder:"Enter your friend's name"}),Object(u.jsx)("button",{onClick:function(){for(var e={},t=0;t<a.length;t++)if(a[t].name===O){e=a[t];break}m(e)},className:"btn-search col-md-1",children:Object(u.jsx)("i",{class:"fas fa-search"})}),Object(u.jsx)("button",{className:"btn-sort col-md-1",onClick:function(){r((function(e){for(var t=[],n=0;n<e.length;n++)e[n].isFavourite&&t.push(e[n]);for(var c=0;c<e.length;c++)e[c].isFavourite||t.push(e[c]);return t}))},children:Object(u.jsx)("i",{class:"fas fa-sort"})}),0===Object.keys(f).length&&Object(u.jsx)("div",{children:function(){var e=4*(p-1),t=e+4;return a.slice(e,t)}().map((function(e){return Object(u.jsx)(l,{name:e.name,removeFriend:N,markFavourite:P,isFavourite:e.isFavourite},e.name)}))}),Object.keys(f).length>0&&Object(u.jsx)("div",{children:Object(u.jsx)(l,{name:f.name,removeFriend:N,markFavourite:P,isFavourite:f.isFavourite})})]}),Object(u.jsx)(j,{goToNextPage:function(){k((function(e){return e+1}))},goToPreviousPage:function(){k((function(e){return e-1}))},totalPages:g,currentPage:p,changePage:function(e){var t=Number(e.target.textContent);k(t)}})]})}var f=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(b,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(18);s.a.render(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),m()}],[[19,1,2]]]);
//# sourceMappingURL=main.94d8690b.chunk.js.map