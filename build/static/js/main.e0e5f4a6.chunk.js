(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(18),i=n.n(r),o=(n(28),n(29),n(4)),s=n.n(o),l=n(6),b=n(5),d=n(19),j=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),u=(n(48),n(20)),f=n(23),h=n.n(f),p=n(0);var v=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,r=Object(c.useState)([]),i=Object(b.a)(r,2),o=i[0],d=i[1],f=Object(c.useState)(""),v=Object(b.a)(f,2),g=v[0],m=v[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(n);case 2:t=e.sent,d(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h1",{children:t}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"row-posters",children:o.map((function(e){return Object(p.jsx)("img",{onClick:function(){return function(e){g?m(""):(console.log(e),h()((null===e||void 0===e?void 0:e.name)||e.original_title||e.original_title||"").then((function(e){console.log(e+"betee");var t=new URLSearchParams(new URL(e).search);m(t.get("v")),console.log("yup working")})).catch((function(e){return console.log(e)})))}(e)},className:"row_poster ".concat(a&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),alt:e.name})}))}),Object(p.jsx)("center",{children:g&&Object(p.jsx)(u.a,{videoId:g,opts:{height:"400",width:"690",playerVars:{autoplay:1}}})})]})},g={fetchTrending:"/trending/all/week?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&language=en-US",fetchNetflixOriginals:"/discover/tv?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&with_networks=213",fetchTopRated:"/movie/upcoming?api_key=".concat("a9774a8039a16ea6f4d4b2c48fe199ed"),fetchAction:"/discover/movie?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&with_genres=28",fetchComedy:"/discover/movie?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&with_genres=35",fetchHorror:"/discover/movie?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&with_genres=27",fetchRomance:"/discover/movie?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&with_genres=10749",fetchDocumentaries:"/discover/movie?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&with_genres=99"};n(71);var m=function(){var e,t,n=Object(c.useState)([]),a=Object(b.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(g.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(p.jsxs)("header",{className:"banner",style:{backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(r.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(p.jsxs)("div",{className:"banner_content",children:[Object(p.jsx)("h1",{className:"banner_title",children:(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)}),Object(p.jsxs)("div",{className:"banner_buttons",children:[Object(p.jsx)("button",{className:"banner_button",children:"Play"}),Object(p.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(p.jsx)("h1",{className:"banner_description",children:(e=null===r||void 0===r?void 0:r.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(p.jsx)("div",{className:"banner-fade-bottom"})]})};n(72);var O=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(p.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[Object(p.jsx)("img",{id:"logo",src:"https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"}),Object(p.jsx)("img",{id:"user",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"})]})};var x=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsx)(m,{}),Object(p.jsx)("br",{}),Object(p.jsx)(v,{title:"NETFLIX ORIGINALS",fetchUrl:g.fetchNetflixOriginals,isLargeRow:!0}),Object(p.jsx)("br",{}),Object(p.jsx)(v,{title:"Upcoming Movies",fetchUrl:g.fetchTopRated}),Object(p.jsx)("br",{}),Object(p.jsx)(v,{title:"Trending Now",fetchUrl:g.fetchTrending}),Object(p.jsx)("br",{}),Object(p.jsx)(v,{title:"Action Movies",fetchUrl:g.fetchAction}),Object(p.jsx)("br",{}),Object(p.jsx)(v,{title:"Horror Movies",fetchUrl:g.fetchHorror}),Object(p.jsx)("br",{}),Object(p.jsx)(v,{title:"Roamnce Movies",fetchUrl:g.fetchRomance}),Object(p.jsx)("br",{}),Object(p.jsx)(v,{title:"Documentaries",fetchUrl:g.fetchDocumentaries}),Object(p.jsx)("br",{}),Object(p.jsx)("script",{type:"text/javascript",src:"https://unpkg.com/movie-trailer"})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),w()}},[[73,1,2]]]);
//# sourceMappingURL=main.e0e5f4a6.chunk.js.map