(this.webpackJsonpmusicplayer=this.webpackJsonpmusicplayer||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),n=c(4),a=c.n(n),r=(c(10),c(2)),l=(c(11),c(12),c(0));function u(e){var t=e.playBarActivate,c=e.playBarMusicInfor,s=e.checkClickThumbsUp,n=e.setplayBarMusicInfor,a=Object(i.useState)(!1),u=Object(r.a)(a,2),o=u[0],b=u[1],j=Object(i.useState)(0),d=Object(r.a)(j,2),f=d[0],h=d[1],m=Object(i.useState)(!1),O=Object(r.a)(m,2),p=O[0],k=O[1],v=Object(i.useState)(0),y=Object(r.a)(v,2),C=y[0],S=y[1];Object(i.useEffect)((function(){c&&(S(c.time),h(0))}),[c]),Object(i.useEffect)((function(){if(t&&c&&!p){var e=setInterval((function(){h((function(e){return e<c.time?e+1:e}))}),1e3);return function(){return clearInterval(e)}}}),[t,p,c]),Object(i.useEffect)((function(){fetch("https://musicdata.link/").then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.res.length;t++)e.res[t].title===c.title&&n(e.res[t])}))}),[s]);var x=Object(i.useCallback)((function(){k((function(e){return!e})),b((function(e){return!e}))}),[k,b]);return Object(l.jsxs)("footer",{style:{display:t?"flex":"none"},id:"player-footer",children:[Object(l.jsx)("div",{id:"song-progress-bar",children:Object(l.jsx)("div",{style:{width:"".concat(f/C*100,"%")},id:"progress"})}),Object(l.jsxs)("div",{id:"playingNow-wrap",children:[Object(l.jsxs)("div",{className:"playingNow",children:[Object(l.jsx)("img",{src:c.albumCover,className:"music-cover"}),Object(l.jsx)("div",{className:"music-title",children:c.title}),Object(l.jsx)("div",{className:"music-artist",children:c.artist}),Object(l.jsx)("div",{className:"music-album",children:c.album}),Object(l.jsxs)("div",{className:"music-playTime",children:[parseInt(String(c.time/60)),":",c.time%60]}),Object(l.jsx)("div",{className:"music-likes",children:c.likes}),Object(l.jsx)("div",{className:"music-views",children:c.views})]}),Object(l.jsxs)("div",{className:"player-operation",children:[Object(l.jsx)("i",{style:{display:o?"block":"none"},className:"fas fa-play",onClick:x}),Object(l.jsx)("i",{style:{display:o?"none":"block"},className:"fas fa-pause",onClick:x}),Object(l.jsx)("i",{className:"fas fa-volume-down"})]})]})]})}c(14);function o(e){var t=e.setSearchInput,c=e.setSortType,s=e.setGenreType,n=e.rankSideBarActivate,a=Object(i.useCallback)((function(e,i,n){t(e),s(i),c(n)}),[t,s,c]);return Object(l.jsxs)("div",{style:{display:n?"flex":"none"},className:"rank-sidebar",children:[Object(l.jsx)("div",{className:"sidebar-menu",onClick:function(){return a("","",m.VIEWS)},children:"\uc804\uccb4"}),Object(l.jsx)("div",{className:"sidebar-pop",onClick:function(){return a("","POP",m.VIEWS)},children:"POP"}),Object(l.jsx)("div",{className:"sidebar-kpop",onClick:function(){return a("","KPOP",m.VIEWS)},children:"K-POP"}),Object(l.jsx)("div",{className:"sidebar-rock",onClick:function(){return a("","ROCK",m.VIEWS)},children:"ROCK"}),Object(l.jsx)("div",{className:"sidebar-likes",onClick:function(){return a("","",m.LIKES)},children:"\uc88b\uc544\uc694\uc21c"})]})}c(15);function b(e){var t=e.setSearchInput,c=Object(i.useState)(""),s=Object(r.a)(c,2),n=s[0],a=s[1],u=Object(i.useCallback)((function(){return t(n)}),[t,n]);return Object(l.jsxs)("div",{id:"serach-bar",children:[Object(l.jsx)("div",{id:"search-input-wrapper",children:Object(l.jsx)("input",{type:"text",id:"search-input",onChange:function(e){return a(e.target.value)}})}),Object(l.jsx)("div",{id:"search-icon",children:Object(l.jsx)("i",{className:"fas fa-search",onClick:u})})]})}c(16);function j(e){var t=e.setSearchInput,c=e.setSortType,s=e.setLibraryType,n=e.setGenreType,a=e.setRankSideBarActivate,u=Object(i.useState)(!0),o=Object(r.a)(u,2),j=o[0],d=o[1],f=Object(i.useState)(!1),h=Object(r.a)(f,2),O=h[0],p=h[1],k=Object(i.useState)(!1),v=Object(r.a)(k,2),y=v[0],C=v[1],S=Object(i.useCallback)((function(){t(""),n(""),s(""),c(m.LIKES),O&&(p((function(e){return!e})),a(!O)),j||d((function(e){return!e})),y&&C((function(e){return!e}))}),[t,n,s,c,a,O,p,d,j,C,y]),x=Object(i.useCallback)((function(){n(""),s(""),t(""),c(m.VIEWS),O||(p((function(e){return!e})),a(!O)),j&&d((function(e){return!e})),y&&C((function(e){return!e}))}),[t,n,s,c,a,O,p,d,j,C,y]),I=Object(i.useCallback)((function(){s("selected"),n(""),O&&(p((function(e){return!e})),a(!O)),j&&d((function(e){return!e})),y||C((function(e){return!e}))}),[n,s,a,O,p,d,j,C,y]);return console.log(O),Object(l.jsxs)("nav",{id:"player-navBar",children:[Object(l.jsx)("div",{id:"logo",children:"MUSIGRAM"}),Object(l.jsxs)("div",{id:"menu-bar",children:[Object(l.jsx)("i",{style:{color:j?"white":"black"},onClick:S,className:"fas fa-home"}),Object(l.jsx)("i",{style:O?{color:"white"}:{color:"black"},className:"fas fa-chart-bar",onClick:x}),Object(l.jsx)("i",{style:y?{color:"white"}:{color:"black"},className:"far fa-list-alt",onClick:I})]}),Object(l.jsx)(b,{setSearchInput:t})]})}var d=c(5);c(17);function f(e){var t=e.music,c=e.setplayBarActivate,s=e.setplayBarMusicInfor,n=e.setMusicList,a=e.operationActivate,u=e.checkClickLibrary,o=e.setCheckClickLibrary,b=Object(i.useState)(!1),j=Object(r.a)(b,2),d=j[0],f=j[1];Object(i.useEffect)((function(){fetch("https://musicdata.link/").then((function(e){return e.json()})).then((function(e){return n(e.res)}))}),[u]);var h=Object(i.useCallback)((function(){d||(c(!d),f(!d)),s(t)}),[c,f,s,d,t]),m=Object(i.useCallback)((function(){fetch("https://musicdata.link/addLib/".concat(t.title),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lib:"selected"})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),o(!u)}),[o,u,t]),O=Object(i.useCallback)((function(){fetch("https://musicdata.link/delLib/".concat(t.title),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),o(!u)}),[o,u,t]);return Object(l.jsxs)("div",{style:{visibility:a?"visible":"hidden",clipPath:a?"polygon(0 0, 100% 0, 100% 100%, 0 100%)":"polygon(0 0, 100% 0, 0 0, 0 0)",height:"100px",overflow:"hidden",transition:"all 300ms"},className:"music-sub-operation",children:[Object(l.jsx)("div",{className:"sub-operation-menus",onClick:h,children:"\uc7ac\uc0dd"}),Object(l.jsx)("div",{className:"sub-operation-menus",onClick:m,children:"\uc990\uaca8\ucc3e\uae30\uc5d0 \ub2f4\uae30"}),Object(l.jsx)("div",{className:"sub-operation-menus",onClick:O,children:"\uc990\uaca8\ucc3e\uae30\uc5d0\uc11c \uc0ad\uc81c"})]})}c(18);function h(e){var t=e.music,c=e.setplayBarActivate,s=e.setplayBarMusicInfor,n=e.setMusicList,a=e.checkClickThumbsUp,u=e.setCheckClickThumbsUp,o=e.checkClickLibrary,b=e.setCheckClickLibrary,j=Object(i.useState)(!1),h=Object(r.a)(j,2),m=h[0],O=h[1];Object(i.useEffect)((function(){fetch("https://musicdata.link/").then((function(e){return e.json()})).then((function(e){return n(e.res)}))}),[a]);var p=Object(i.useCallback)((function(){t.isLike?(fetch("https://musicdata.link/subLikes/".concat(t.title),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){return console.log(e.res)})),u(!a)):(fetch("https://musicdata.link/addLikes/".concat(t.title),{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e.res)})),u((function(e){return!e})))}),[t,u,a]),k=Object(i.useCallback)((function(e){"inSide"===e?O((function(e){return!e})):m&&O(!1)}),[O,m]);return Object(l.jsx)("div",{className:"music",children:Object(l.jsxs)("div",{className:"music-info",children:[Object(l.jsx)("img",{src:t.albumCover,className:"music-cover"}),Object(l.jsx)("div",{className:"music-title",children:t.title}),Object(l.jsx)("div",{className:"music-artist",children:t.artist}),Object(l.jsx)("div",{className:"music-album",children:t.album}),Object(l.jsxs)("div",{className:"music-playTime",children:[Math.floor(t.time/60),":",t.time%60]}),Object(l.jsx)("div",{className:"music-likes",children:t.likes}),Object(l.jsx)("div",{className:"music-views",children:t.views}),Object(l.jsx)("i",{style:{color:t.isLike?"white":"black"},className:"fas fa-thumbs-up",onClick:p}),Object(l.jsx)("i",{className:"fas fa-ellipsis-v list-ellipsis",onClick:function(){k("inSide")},children:Object(l.jsx)(d.a,{onOutsideClick:function(){k("outSide")},children:Object(l.jsx)(f,{music:t,setplayBarActivate:c,setplayBarMusicInfor:s,setMusicList:n,operationActivate:m,checkClickLibrary:o,setCheckClickLibrary:b})})})]})})}var m;c(19);function O(e){var t=e.sortType,c=e.setGenreType,s=e.searchInput,n=e.libraryType,a=e.musicList,r=e.setplayBarActivate,u=e.setplayBarMusicInfor,o=e.setMusicList,b=e.checkClickThumbsUp,j=e.setCheckClickThumbsUp,d=e.checkClickLibrary,f=e.setCheckClickLibrary;return Object(i.useEffect)((function(){fetch("https://musicdata.link/").then((function(e){return e.json()})).then((function(e){return o(e.res)}))}),[d]),Object(l.jsx)("main",{id:"player-main",children:a.filter((function(e){return e.title.includes(s)})).filter((function(e){return e.genre.includes(c)})).filter((function(e){return e.library.includes(n)})).sort((function(e,c){switch(t){case m.ALBUMS:return e.album.localeCompare(c.album);case m.ARTISTS:return e.artist.localeCompare(c.artist);case m.TITLES:return e.title.localeCompare(c.title);case m.LIKES:return c.likes-e.likes;case m.VIEWS:return c.views-e.views;default:return e.album.localeCompare(c.album)}})).map((function(e){return Object(l.jsx)(h,{music:e,setplayBarActivate:r,setplayBarMusicInfor:u,setMusicList:o,checkClickThumbsUp:b,setCheckClickThumbsUp:j,checkClickLibrary:d,setCheckClickLibrary:f},e.title+e.album+e.artist)}))})}function p(e){var t=e.playBarMusicInfor,c=e.setplayBarMusicInfor,s=Object(i.useState)(""),n=Object(r.a)(s,2),a=n[0],b=n[1],d=Object(i.useState)(m.LIKES),f=Object(r.a)(d,2),h=f[0],p=f[1],k=Object(i.useState)(""),v=Object(r.a)(k,2),y=v[0],C=v[1],S=Object(i.useState)(""),x=Object(r.a)(S,2),I=x[0],T=x[1],L=Object(i.useState)([]),N=Object(r.a)(L,2),g=N[0],B=N[1],E=Object(i.useState)(!1),M=Object(r.a)(E,2),w=M[0],A=M[1],P=Object(i.useState)(!1),U=Object(r.a)(P,2),K=U[0],R=U[1],V=Object(i.useState)(!1),W=Object(r.a)(V,2),G=W[0],F=W[1],D=Object(i.useState)(!1),J=Object(r.a)(D,2),q=J[0],z=J[1];return Object(l.jsxs)("div",{id:"musicPlayer",children:[Object(l.jsx)(j,{setSearchInput:b,setSortType:p,setLibraryType:T,setGenreType:C,setRankSideBarActivate:A}),Object(l.jsxs)("div",{id:"main-wr",children:[Object(l.jsx)(o,{setSearchInput:b,setSortType:p,setGenreType:C,rankSideBarActivate:w}),Object(l.jsx)(O,{sortType:h,setGenreType:y,searchInput:a,libraryType:I,musicList:g,setplayBarActivate:R,setplayBarMusicInfor:c,setMusicList:B,checkClickThumbsUp:G,setCheckClickThumbsUp:F,checkClickLibrary:q,setCheckClickLibrary:z})]}),Object(l.jsx)(u,{playBarActivate:K,playBarMusicInfor:t,setplayBarMusicInfor:c,checkClickThumbsUp:G})]})}!function(e){e[e.TITLES=0]="TITLES",e[e.ARTISTS=1]="ARTISTS",e[e.ALBUMS=2]="ALBUMS",e[e.LIKES=3]="LIKES",e[e.VIEWS=4]="VIEWS"}(m||(m={}));var k=function(){var e=Object(i.useState)({title:"",artist:"",album:"",albumCover:"https://musicdata.link/images/background.jpg",time:0,likes:0,views:0,library:"",genre:"",isLike:!1}),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{id:"background-wrap",children:[Object(l.jsx)("div",{id:"background",style:{backgroundImage:"url(".concat(c.albumCover,")")}}),Object(l.jsx)(p,{playBarMusicInfor:c,setplayBarMusicInfor:s})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),i(e),s(e),n(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.73baf8a2.chunk.js.map