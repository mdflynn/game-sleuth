(this["webpackJsonpgame-sleuth"]=this["webpackJsonpgame-sleuth"]||[]).push([[0],{43:function(e,a,s){},44:function(e,a,s){},45:function(e,a,s){},47:function(e,a,s){},56:function(e,a,s){},57:function(e,a,s){},58:function(e,a,s){},59:function(e,a,s){},60:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s(1),n=s(22),r=s.n(n),i=(s(43),s(44),s(7)),l=(s(45),s(21)),j=s.n(l),m=s(28),d=function(){var e=Object(m.a)(j.a.mark((function e(a){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.boardgameatlas.com/api/search?".concat(a,"&fuzzy_match=true&client_id=U4cPDqoedb"));case 2:return s=e.sent,e.next=5,s.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),o=function(){var e=Object(m.a)(j.a.mark((function e(a){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.boardgameatlas.com/api/game/".concat(a,"?client_id=U4cPDqoedb"));case 2:return s=e.sent,e.next=5,s.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),u=(s(47),s(5)),h=function(e){var a=e.id,s=e.name,c=e.min_players,n=e.max_players,r=e.image_url,i=e.rank;return Object(t.jsx)(u.b,{to:"/game/".concat(a),className:"preview-link",children:Object(t.jsxs)("section",{className:"game-preview",children:[Object(t.jsx)("img",{className:"game-image",src:r,alt:s}),Object(t.jsxs)("div",{className:"preview-info",children:[Object(t.jsx)("h3",{className:"game-title",children:s}),Object(t.jsxs)("p",{children:[c,"-",n," Players"]}),i<=1e4&&Object(t.jsxs)("p",{children:["Sleuth Ranking: ",i]})]})]})})},b=s(3),x=s.p+"static/media/mag-hand.16eacb00.png",O=function(){var e=Object(c.useState)([]),a=Object(i.a)(e,2),s=a[0],n=a[1],r=Object(c.useState)(!1),l=Object(i.a)(r,2),j=l[0],m=l[1],o=Object(b.g)().criteria;Object(c.useEffect)((function(){var e=u();d(e).then((function(e){e.games.length>0?n(O(e.games)):m(!0)})).catch((function(e){return console.log(e)}))}),[]);var u=function(){switch(o){case"trending":return"order_by=reddit_week_count&limit=10";case"top-10":return"order_by=rank&limit=10";case"max_players=2":return"max_players=2";case"max_players=4":return"max_players=4";default:return o}},O=function(e){if(e)return e.map((function(e){return{id:e.id,name:e.name,min_players:e.min_players,max_players:e.max_players,min_age:e.min_age,image_url:e.image_url,description:e.description,price:e.price,url:e.url,primary_publisher:e.primary_publisher,mechanics:e.mechanics,average_user_rating:e.average_user_rating,num_user_ratings:e.num_user_ratings,rank:e.rank,trending_rank:e.trending_rank,rules_url:e.rules_url}}))};return Object(t.jsxs)("section",{className:"displayed-games-section",children:[0===s.length&&(j?Object(t.jsxs)("h3",{className:"status-font",children:["No search results",Object(t.jsx)("br",{}),"Try again!"]}):Object(t.jsxs)("section",{children:[Object(t.jsx)("h3",{className:"status-font",children:"...Sleuthing Games..."}),Object(t.jsx)("img",{className:"mag-hand-search",alt:"Magnifier Hand",src:x})]})),s.length>0&&Object(t.jsxs)("section",{children:[Object(t.jsxs)("h2",{className:"search-title",children:["Search Results"," ",Object(t.jsxs)("span",{className:"matches-num",children:["(",s.length," matches)"]})]}),Object(t.jsx)("div",{className:"search-results",children:s.map((function(e){return function(e){return Object(t.jsx)(h,{id:e.id,name:e.name,image_url:e.image_url,rank:e.rank,min_players:e.min_players,max_players:e.max_players},e.id)}(e)}))}),Object(t.jsx)("img",{className:"mag-hand-static",alt:"Magnifier Hand",src:x})]})]})},p=(s(56),s(71)),g=s(73),f=function(){var e=Object(c.useState)([1,5]),a=Object(i.a)(e,2),s=a[0],n=a[1],r=Object(c.useState)([10,90]),l=Object(i.a)(r,2),j=l[0],m=l[1],d=Object(c.useState)([10,50]),o=Object(i.a)(d,2),u=o[0],h=o[1],O=Object(c.useState)(""),f=Object(i.a)(O,2),v=f[0],N=f[1],_=Object(c.useState)(!1),y=Object(i.a)(_,2),k=y[0],S=y[1],w=Object(c.useState)(""),P=Object(i.a)(w,2),C=P[0],L=P[1],T=function(e){e.preventDefault();var a="gt_min_players=".concat(s[0]-1,"&lt_max_players=").concat(s[1]+1),t="&gt_min_playtime=".concat(j[0],"&lt_max_playtime=").concat(j[1]),c="&lt_price=".concat(u[0],"&gt_price").concat(u[1]),n=v?"name=".concat(v):a+t+c;L(n),S(!0)};return k?Object(t.jsx)(b.a,{to:"/".concat(C)}):Object(t.jsxs)("section",{children:[Object(t.jsxs)("div",{className:"search-box",children:[Object(t.jsx)("h2",{children:"Search for a game!"}),Object(t.jsxs)("form",{children:[Object(t.jsx)("div",{className:"user-box",children:Object(t.jsx)("input",{id:"search-input",type:"text",name:"searchName",value:v,onChange:function(e){N(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&T(e)},placeholder:"Search by name"})}),Object(t.jsxs)("div",{className:"user-box",children:[Object(t.jsx)(p.a,{component:"span",id:"range-slider",gutterBottom:!0,children:Object(t.jsx)("h3",{className:"search-criteria-font",children:"Number of Players"})}),Object(t.jsxs)("div",{className:"values-display",children:[Object(t.jsx)("span",{className:"value",children:s[0]}),Object(t.jsx)("span",{className:"value",children:s[1]})]}),Object(t.jsx)(g.a,{className:"slider",min:1,max:8,value:s,onChange:function(e,a){n(a)},valueLabelDisplay:"auto",getAriaLabel:function(){return"aria-slider"},"data-testid":"numPlayer-slider"})]}),Object(t.jsxs)("div",{className:"user-box",children:[Object(t.jsx)(p.a,{component:"span",id:"range-slider",gutterBottom:!0,children:Object(t.jsx)("h3",{className:"search-criteria-font",children:"Playtime (minutes)"})}),Object(t.jsxs)("div",{className:"values-display",children:[Object(t.jsx)("span",{className:"value",children:j[0]}),Object(t.jsx)("span",{className:"value",children:j[1]})]}),Object(t.jsx)(g.a,{className:"slider",min:0,max:240,value:j,onChange:function(e,a){m(a)},valueLabelDisplay:"auto",getAriaLabel:function(){return"aria-slider"},"data-testid":"playtime-slider"})]}),Object(t.jsxs)("div",{className:"user-box",children:[Object(t.jsx)(p.a,{component:"span",id:"range-slider",gutterBottom:!0,children:Object(t.jsx)("h3",{className:"search-criteria-font",children:"Price"})}),Object(t.jsxs)("div",{className:"values-display",children:[Object(t.jsx)("span",{className:"value",children:"$ "+u[0]}),Object(t.jsx)("span",{className:"value",children:"$ "+u[1]})]}),Object(t.jsx)(g.a,{className:"slider",min:5,max:100,value:u,onChange:function(e,a){h(a)},valueLabelDisplay:"auto",getAriaLabel:function(){return"aria-slider"},"data-testid":"price-slider"})]}),Object(t.jsxs)("a",{href:"#",onClick:T,children:[Object(t.jsx)("span",{}),Object(t.jsx)("span",{}),Object(t.jsx)("span",{}),Object(t.jsx)("span",{}),"Submit"]})]})]}),Object(t.jsx)("img",{className:"mag-hand-search-form",alt:"Magnifier Hand",src:x})]})},v=(s(57),function(){return Object(t.jsxs)("main",{className:"container",children:[Object(t.jsxs)("ul",{className:"list-wrapper",children:[Object(t.jsx)(u.b,{className:"remove-link",to:"/form",children:Object(t.jsx)("li",{className:"search-form",children:Object(t.jsx)("h3",{className:"title",children:"Sleuth for Games"})})}),Object(t.jsx)(u.b,{className:"remove-link",to:"/trending",children:Object(t.jsx)("li",{className:"search-trending","data-value":"trending",children:Object(t.jsx)("h3",{className:"title",children:"Trending Games"})})}),Object(t.jsx)(u.b,{className:"remove-link",to:"/top",children:Object(t.jsx)("li",{className:"search-top","data-value":"top-10",children:Object(t.jsx)("h3",{className:"title",children:"The Top 100"})})}),Object(t.jsx)(u.b,{className:"remove-link",to:"/max_player=2",children:Object(t.jsx)("li",{className:"search-two-player","data-value":"max_players=2",children:Object(t.jsx)("h3",{className:"title",children:"2 Player Games"})})}),Object(t.jsx)(u.b,{className:"remove-link",to:"/max_players=4",children:Object(t.jsx)("li",{className:"search-four-player","data-value":"max_player=4",children:Object(t.jsx)("h3",{className:"title",children:"4 Player Games"})})})]}),Object(t.jsx)("img",{className:"mag-hand-home",alt:"Magnifier Hand",src:x})]})}),N=(s(58),function(){var e=Object(c.useState)(null),a=Object(i.a)(e,2),s=a[0],n=a[1],r=Object(c.useState)({}),l=Object(i.a)(r,2),j=l[0],m=l[1],u=Object(c.useState)({}),h=Object(i.a)(u,2),x=h[0],O=h[1],p=Object(c.useState)(null),g=Object(i.a)(p,2),f=g[0],v=g[1],N=Object(b.g)();Object(c.useEffect)((function(){if(!s){var e=!0;d("ids=".concat(N.id)).then((function(a){e&&n(a.games[0])})).catch((function(a){e&&v(a)}));return["categories","mechanics"].forEach((function(a){o(a).then((function(s){if(e)switch(a){case"categories":O(s);break;case"mechanics":m(s)}})).catch((function(a){e&&v(a)}))})),function(){e=!1}}}),[s,N.id]);return s?Object(t.jsx)("section",{className:"solo-view-wrapper","data-testid":"solo-view-test",children:Object(t.jsxs)("div",{className:"view-backdrop",children:[f&&Object(t.jsxs)("h1",{children:["Unexpected Error Occured: ",f]}),Object(t.jsxs)("div",{className:"solo-game-overview",children:[Object(t.jsx)("div",{className:"solo-image-wrapper",children:Object(t.jsx)("img",{className:"solo-game-image",src:s.image_url,alt:s.name})}),Object(t.jsxs)("div",{className:"solo-game-details",children:[Object(t.jsx)("h1",{className:"solo-game-title",children:s.name}),Object(t.jsxs)("h3",{children:[s.min_players,"-",s.max_players," Players"]}),Object(t.jsxs)("p",{children:["Published by ",s.primary_publisher.name]}),Object(t.jsxs)("p",{children:["Sleuth Rank: ",s.rank," "]}),Object(t.jsxs)("p",{children:[s.average_user_rating.toFixed(1)," / 5 (",s.num_user_ratings," ratings)"]}),0!==s.trending_rank&&Object(t.jsxs)("p",{children:["Currently Trending at #",s.trending_rank]}),Object(t.jsxs)("p",{children:["Recommended Age: ",s.min_age,"+"]}),Object(t.jsxs)("p",{children:["MSRP: $",s.price]})]})]}),Object(t.jsxs)("div",{className:"solo-sub-details",children:[j.mechanics&&Object(t.jsxs)("div",{children:[Object(t.jsx)("i",{children:Object(t.jsx)("b",{children:"Mechanics: "})}),s.mechanics.map((function(e){return function(e){return j.mechanics.find((function(a){return a.id===e.id})).name}(e)})).join(", ")]}),Object(t.jsx)("br",{}),x.categories&&Object(t.jsxs)("div",{children:[Object(t.jsx)("i",{children:Object(t.jsx)("b",{children:"Categories: "})}),s.categories.map((function(e){return function(e){return x.categories.find((function(a){return a.id===e.id})).name}(e)})).join(", ")]})]}),Object(t.jsxs)("div",{className:"solo-description-wrapper",children:[Object(t.jsxs)("div",{className:"solo-desc-background",children:[Object(t.jsxs)("h3",{className:"solo-game-description",children:[s.name," at a glance:"]}),Object(t.jsx)("div",{className:"solo-game-description",dangerouslySetInnerHTML:{__html:s.description}})]}),Object(t.jsxs)("div",{className:"links-section",children:[Object(t.jsx)("h4",{className:"info-link",children:"Sleuth Links: "}),Object(t.jsx)("a",{className:"info-link",href:s.url,children:"See more at Board Game Atlas"}),s.rules_url&&Object(t.jsx)("a",{className:"info-link",href:s.rules_url,children:"Show Me The Rules"})]})]})]})}):Object(t.jsx)("h3",{className:"solo-loading-text",children:"...Sleuthing Details..."})}),_=(s(59),s.p+"static/media/sleuth.47043243.png"),y=function(){return Object(t.jsx)("nav",{className:"nav-styling",children:Object(t.jsx)(u.b,{className:"sleuth-link",to:"/",children:Object(t.jsxs)("div",{className:"sleuth-div",children:[Object(t.jsx)("h2",{children:"Game"}),Object(t.jsx)("img",{className:"sleuth-img",src:_,alt:"sleuth logo"}),Object(t.jsx)("h2",{children:"Sleuth"})]})})})},k=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(y,{}),Object(t.jsx)("main",{className:"App",children:Object(t.jsxs)(b.d,{children:[Object(t.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(t.jsx)(v,{})}}),Object(t.jsx)(b.b,{exact:!0,path:"/form",render:function(){return Object(t.jsx)(f,{})}}),Object(t.jsx)(b.b,{exact:!0,path:"/:criteria",component:O}),Object(t.jsx)(b.b,{exact:!0,path:"/game/:id",render:function(){return Object(t.jsx)(N,{})}}),Object(t.jsx)(b.b,{render:function(){return Object(t.jsxs)("section",{children:[Object(t.jsx)("h2",{children:"This page does not exist"}),Object(t.jsx)(u.b,{to:"/",children:Object(t.jsx)("button",{children:"Return Home"})})]})}})]})})]})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,75)).then((function(a){var s=a.getCLS,t=a.getFID,c=a.getFCP,n=a.getLCP,r=a.getTTFB;s(e),t(e),c(e),n(e),r(e)}))};r.a.render(Object(t.jsx)(u.a,{children:Object(t.jsx)(k,{})}),document.getElementById("root")),S()}},[[60,1,2]]]);
//# sourceMappingURL=main.3f0f5da0.chunk.js.map