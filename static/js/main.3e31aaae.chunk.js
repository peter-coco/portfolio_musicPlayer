(this.webpackJsonpmusicplayer=this.webpackJsonpmusicplayer||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,,,,function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),i=c(5),a=c.n(i),r=(c(15),c(2)),l=(c(16),c(17),c(1));function u(e){var t=e.playBarActivate,c=e.playBarMusicInfor,n=e.checkClickThumbsUp,i=e.setplayBarMusicInfor,a=Object(s.useState)(!1),u=Object(r.a)(a,2),o=u[0],b=u[1],j=Object(s.useState)(0),d=Object(r.a)(j,2),f=d[0],h=d[1],O=Object(s.useState)(!1),p=Object(r.a)(O,2),m=p[0],v=p[1],y=Object(s.useState)(0),k=Object(r.a)(y,2),S=k[0],x=k[1];Object(s.useEffect)((function(){c&&(x(c.time),h(0))}),[c]),Object(s.useEffect)((function(){if(t&&c&&!m){var e=setInterval((function(){h((function(e){return e<c.time?e+1:e}))}),1e3);return function(){return clearInterval(e)}}}),[t,m,c]),Object(s.useEffect)((function(){fetch("https://3.128.153.230:8080/").then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.res.length;t++)e.res[t].title===c.title&&i(e.res[t])}))}),[n]);var C=Object(s.useCallback)((function(){v((function(e){return!e})),b((function(e){return!e}))}),[v,b]);return Object(l.jsxs)("footer",{style:{display:t?"flex":"none"},id:"player-footer",children:[Object(l.jsx)("div",{id:"song-progress-bar",children:Object(l.jsx)("div",{style:{width:"".concat(f/S*100,"%")},id:"progress"})}),Object(l.jsxs)("div",{id:"playingNow-wrap",children:[Object(l.jsxs)("div",{className:"playingNow",children:[Object(l.jsx)("img",{src:c.albumCover,className:"music-cover"}),Object(l.jsx)("div",{className:"music-title",children:c.title}),Object(l.jsx)("div",{className:"music-artist",children:c.artist}),Object(l.jsx)("div",{className:"music-album",children:c.album}),Object(l.jsxs)("div",{className:"music-playTime",children:[parseInt(String(c.time/60)),":",c.time%60]}),Object(l.jsx)("div",{className:"music-likes",children:c.likes}),Object(l.jsx)("div",{className:"music-views",children:c.views})]}),Object(l.jsxs)("div",{className:"player-operation",children:[Object(l.jsx)("i",{style:{display:o?"block":"none"},className:"fas fa-play",onClick:C}),Object(l.jsx)("i",{style:{display:o?"none":"block"},className:"fas fa-pause",onClick:C}),Object(l.jsx)("i",{className:"fas fa-volume-down"})]})]})]})}c(19);function o(e){var t=e.setSearchInput,c=e.setSortType,n=e.setGenreType,i=e.rankSideBarActivate,a=Object(s.useCallback)((function(e,s,i){t(e),n(s),c(i)}),[t,n,c]);return Object(l.jsxs)("div",{style:{display:i?"flex":"none"},className:"rank-sidebar",children:[Object(l.jsx)("div",{className:"sidebar-menu",onClick:function(){return a("","",O.VIEWS)},children:"\uc804\uccb4"}),Object(l.jsx)("div",{className:"sidebar-pop",onClick:function(){return a("","POP",O.VIEWS)},children:"POP"}),Object(l.jsx)("div",{className:"sidebar-kpop",onClick:function(){return a("","KPOP",O.VIEWS)},children:"K-POP"}),Object(l.jsx)("div",{className:"sidebar-rock",onClick:function(){return a("","ROCK",O.VIEWS)},children:"ROCK"}),Object(l.jsx)("div",{className:"sidebar-likes",onClick:function(){return a("","",O.LIKES)},children:"\uc88b\uc544\uc694\uc21c"})]})}c(20);function b(e){var t=e.setSearchInput,c=Object(s.useState)(""),n=Object(r.a)(c,2),i=n[0],a=n[1],u=Object(s.useCallback)((function(){return t(i)}),[t,i]);return Object(l.jsxs)("div",{id:"serach-bar",children:[Object(l.jsx)("div",{id:"search-input-wrapper",children:Object(l.jsx)("input",{type:"text",id:"search-input",onChange:function(e){return a(e.target.value)}})}),Object(l.jsx)("div",{id:"search-icon",children:Object(l.jsx)("i",{className:"fas fa-search",onClick:u})})]})}c(21);function j(e){var t=e.setSearchInput,c=e.setSortType,n=e.setLibraryType,i=e.setGenreType,a=e.setRankSideBarActivate,u=Object(s.useState)(!0),o=Object(r.a)(u,2),j=o[0],d=o[1],f=Object(s.useState)(!1),h=Object(r.a)(f,2),p=h[0],m=h[1],v=Object(s.useState)(!1),y=Object(r.a)(v,2),k=y[0],S=y[1],x=Object(s.useCallback)((function(){t(""),i(""),n(""),c(O.LIKES),p&&(m((function(e){return!e})),a(!p)),j||d((function(e){return!e})),k&&S((function(e){return!e}))}),[t,i,n,c,a,p,m,d,j,S,k]),C=Object(s.useCallback)((function(){i(""),n(""),t(""),c(O.VIEWS),p||(m((function(e){return!e})),a(!p)),j&&d((function(e){return!e})),k&&S((function(e){return!e}))}),[t,i,n,c,a,p,m,d,j,S,k]),I=Object(s.useCallback)((function(){n("selected"),i(""),p&&(m((function(e){return!e})),a(!p)),j&&d((function(e){return!e})),k||S((function(e){return!e}))}),[i,n,a,p,m,d,j,S,k]);return console.log(p),Object(l.jsxs)("nav",{id:"player-navBar",children:[Object(l.jsx)("div",{id:"logo",children:"MUSIGRAM"}),Object(l.jsxs)("div",{id:"menu-bar",children:[Object(l.jsx)("i",{style:{color:j?"white":"black"},onClick:x,className:"fas fa-home"}),Object(l.jsx)("i",{style:p?{color:"white"}:{color:"black"},className:"fas fa-chart-bar",onClick:C}),Object(l.jsx)("i",{style:k?{color:"white"}:{color:"black"},className:"far fa-list-alt",onClick:I})]}),Object(l.jsx)(b,{setSearchInput:t})]})}var d=c(8);c(22);function f(e){var t=e.music,c=e.setplayBarActivate,n=e.setplayBarMusicInfor,i=e.setMusicList,a=e.operationActivate,u=Object(s.useState)(!1),o=Object(r.a)(u,2),b=o[0],j=o[1],d=Object(s.useState)(!1),f=Object(r.a)(d,2),h=f[0],O=f[1];Object(s.useEffect)((function(){fetch("http://3.128.153.230:8080/").then((function(e){return e.json()})).then((function(e){return i(e.res)}))}),[h]);var p=Object(s.useCallback)((function(){b||(c(!b),j(!b)),n(t)}),[c,j,n,b,t]),m=Object(s.useCallback)((function(){fetch("http://3.128.153.230:8080/addLib/".concat(t.title),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lib:"selected"})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),O(!h)}),[O,h,t]),v=Object(s.useCallback)((function(){fetch("http://3.128.153.230:8080/delLib/".concat(t.title),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),O(!h)}),[O,h,t]);return Object(l.jsxs)("div",{style:{visibility:a?"visible":"hidden",clipPath:a?"polygon(0 0, 100% 0, 100% 100%, 0 100%)":"polygon(0 0, 100% 0, 0 0, 0 0)",height:"100px",overflow:"hidden",transition:"all 300ms"},className:"music-sub-operation",children:[Object(l.jsx)("div",{className:"sub-operation-menus",onClick:p,children:"\uc7ac\uc0dd"}),Object(l.jsx)("div",{className:"sub-operation-menus",onClick:m,children:"\uc990\uaca8\ucc3e\uae30\uc5d0 \ub2f4\uae30"}),Object(l.jsx)("div",{className:"sub-operation-menus",onClick:v,children:"\uc990\uaca8\ucc3e\uae30\uc5d0\uc11c \uc0ad\uc81c"})]})}c(23);function h(e){var t=e.music,c=e.setplayBarActivate,n=e.setplayBarMusicInfor,i=e.setMusicList,a=e.checkClickThumbsUp,u=e.setCheckClickThumbsUp,o=Object(s.useState)(!1),b=Object(r.a)(o,2),j=b[0],h=b[1];Object(s.useEffect)((function(){fetch("https://3.128.153.230:8080/").then((function(e){return e.json()})).then((function(e){return i(e.res)}))}),[a]);var O=Object(s.useCallback)((function(){t.isLike?(fetch("http://3.128.153.230:8080/subLikes/".concat(t.title),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){return console.log(e.res)})),u(!a)):(fetch("https://3.128.153.230:8080/addLikes/".concat(t.title),{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e.res)})),u((function(e){return!e})))}),[t,u,a]),p=Object(s.useCallback)((function(e){"inSide"===e?h((function(e){return!e})):j&&h(!1)}),[h,j]);return Object(l.jsx)("div",{className:"music",children:Object(l.jsxs)("div",{className:"music-info",children:[Object(l.jsx)("img",{src:t.albumCover,className:"music-cover"}),Object(l.jsx)("div",{className:"music-title",children:t.title}),Object(l.jsx)("div",{className:"music-artist",children:t.artist}),Object(l.jsx)("div",{className:"music-album",children:t.album}),Object(l.jsxs)("div",{className:"music-playTime",children:[Math.floor(t.time/60),":",t.time%60]}),Object(l.jsx)("div",{className:"music-likes",children:t.likes}),Object(l.jsx)("div",{className:"music-views",children:t.views}),Object(l.jsx)("i",{style:{color:t.isLike?"white":"black"},className:"fas fa-thumbs-up",onClick:O}),Object(l.jsx)("i",{className:"fas fa-ellipsis-v list-ellipsis",onClick:function(){p("inSide")},children:Object(l.jsx)(d.a,{onOutsideClick:function(){p("outSide")},children:Object(l.jsx)(f,{music:t,setplayBarActivate:c,setplayBarMusicInfor:n,setMusicList:i,operationActivate:j})})})]})})}var O;c(24);function p(e){var t=e.sortType,c=e.setGenreType,n=e.searchInput,i=e.libraryType,a=e.musicList,r=e.setplayBarActivate,u=e.setplayBarMusicInfor,o=e.setMusicList,b=e.checkClickThumbsUp,j=e.setCheckClickThumbsUp;return Object(s.useEffect)((function(){fetch("https://3.128.153.230:8080/").then((function(e){return e.json()})).then((function(e){return o(e.res)}))}),[]),Object(l.jsx)("main",{id:"player-main",children:a.filter((function(e){return e.title.includes(n)})).filter((function(e){return e.genre.includes(c)})).filter((function(e){return e.library.includes(i)})).sort((function(e,c){switch(t){case O.ALBUMS:return e.album.localeCompare(c.album);case O.ARTISTS:return e.artist.localeCompare(c.artist);case O.TITLES:return e.title.localeCompare(c.title);case O.LIKES:return c.likes-e.likes;case O.VIEWS:return c.views-e.views;default:return e.album.localeCompare(c.album)}})).map((function(e){return Object(l.jsx)(h,{music:e,setplayBarActivate:r,setplayBarMusicInfor:u,setMusicList:o,checkClickThumbsUp:b,setCheckClickThumbsUp:j},e.title+e.album+e.artist)}))})}function m(e){var t=e.playBarMusicInfor,c=e.setplayBarMusicInfor,n=Object(s.useState)(""),i=Object(r.a)(n,2),a=i[0],b=i[1],d=Object(s.useState)(O.LIKES),f=Object(r.a)(d,2),h=f[0],m=f[1],v=Object(s.useState)(""),y=Object(r.a)(v,2),k=y[0],S=y[1],x=Object(s.useState)(""),C=Object(r.a)(x,2),I=C[0],T=C[1],N=Object(s.useState)([]),g=Object(r.a)(N,2),L=g[0],B=g[1],E=Object(s.useState)(!1),M=Object(r.a)(E,2),w=M[0],A=M[1],P=Object(s.useState)(!1),U=Object(r.a)(P,2),R=U[0],W=U[1],K=Object(s.useState)(!1),G=Object(r.a)(K,2),V=G[0],F=G[1];return Object(l.jsxs)("div",{id:"musicPlayer",children:[Object(l.jsx)(j,{setSearchInput:b,setSortType:m,setLibraryType:T,setGenreType:S,setRankSideBarActivate:A}),Object(l.jsxs)("div",{id:"main-wr",children:[Object(l.jsx)(o,{setSearchInput:b,setSortType:m,setGenreType:S,rankSideBarActivate:w}),Object(l.jsx)(p,{sortType:h,setGenreType:k,searchInput:a,libraryType:I,musicList:L,setplayBarActivate:W,setplayBarMusicInfor:c,setMusicList:B,checkClickThumbsUp:V,setCheckClickThumbsUp:F})]}),Object(l.jsx)(u,{playBarActivate:R,playBarMusicInfor:t,setplayBarMusicInfor:c,checkClickThumbsUp:V})]})}!function(e){e[e.TITLES=0]="TITLES",e[e.ARTISTS=1]="ARTISTS",e[e.ALBUMS=2]="ALBUMS",e[e.LIKES=3]="LIKES",e[e.VIEWS=4]="VIEWS"}(O||(O={}));var v=function(){var e=Object(s.useState)({title:"",artist:"",album:"",albumCover:"http://drive.google.com/uc?export=view&id=1lHhCXG7SWw3aA7aJsInieWGaR9dFPO5W",time:0,likes:0,views:0,library:"",genre:"",isLike:!1}),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{id:"background-wrap",children:[Object(l.jsx)("div",{style:{backgroundImage:"url(".concat(c.albumCover,")")},id:"background"}),Object(l.jsx)(m,{playBarMusicInfor:c,setplayBarMusicInfor:n})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))},k=c(3),S=c(10),x=c(4),C="COUNT/INCRESE",I={count:0},T=Object(k.combineReducers)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(x.a)(Object(x.a)({},e),{},{count:t.count});default:return e}}}),N=(c(31),c(33),Object(k.compose)(Object(k.applyMiddleware)())),g=Object(k.createStore)(T,N);a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(S.a,{store:g,children:Object(l.jsx)(v,{})})}),document.getElementById("root")),y()}],[[34,1,2]]]);
//# sourceMappingURL=main.3e31aaae.chunk.js.map