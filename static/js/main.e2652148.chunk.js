(this.webpackJsonpwanderlust=this.webpackJsonpwanderlust||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(8),i=n.n(s),o=n(2),u=n.n(o),j=n(4),d=n(5),l=(n(3),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),h=function(e){var t,n=e.currentDay;return Object(c.jsxs)("div",{className:"weather",id:"weather1",children:[Object(c.jsx)("h2",{children:l[(new Date).getDay()]}),Object(c.jsxs)("h2",{children:["Temperature: ",(t=n.main.temp,(t-273.15).toFixed(0)),"\xb0C"]}),Object(c.jsxs)("h2",{children:["Condition: ",n.weather[0].description]}),Object(c.jsxs)("h2",{children:["Wind: ",n.wind.speed," Km/hr"]}),Object(c.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(n.weather[0].icon,"@2x.png"),alt:n.name})]})},b=function(e){var t=e.forecast;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{id:"destination",children:Object(c.jsx)("h2",{children:t.name})}),Object(c.jsx)("div",{className:"sectiontitle",children:Object(c.jsx)("h2",{children:"CURRENT WEATHER"})}),Object(c.jsx)("section",{id:"weather",children:Object(c.jsx)(h,{currentDay:t})})]})},x=function(e){var t=e.name,n=e.location,r=e.iconSource,a=e.id;return Object(c.jsxs)("div",{className:"venue",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("img",{className:"venueimage",src:r,alt:t}),Object(c.jsx)("h3",{children:"Address:"}),Object(c.jsx)("p",{children:n.address}),Object(c.jsx)("p",{children:n.city}),Object(c.jsx)("p",{children:n.country})]},a)},O=function(e){var t=e.venues;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"sectiontitle",children:Object(c.jsx)("h2",{children:"TOP ATTRACTIONS"})}),Object(c.jsx)("section",{id:"venues",children:t.map((function(e,t){if(t>4)return null;var n=e.categories[0].icon,r="".concat(n.prefix,"bg_64").concat(n.suffix);return Object(c.jsx)(x,{name:e.name,location:e.location,iconSource:r,id:t},t)}))}),Object(c.jsx)("footer",{})]})};n(15).config();var p={getVenues:function(e){return Object(j.a)(u.a.mark((function t(){var n,c,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat("https://api.foursquare.com/v2/venues/explore?near=").concat(e,"&limit=10&client_id=").concat("C1HCEVEOKXMXSVBTJ2SMJL2UVTOKPZYTSQLO4Q1A55EJKSXN","&client_secret=").concat("2FIBBFTEYUQOOY4CS3CABYBPHEARWUO0KQXU2VW3GDLG23YM","&v=20201230"),t.prev=1,t.next=4,fetch(n);case 4:if(!(c=t.sent).ok){t.next=13;break}return t.next=8,c.json();case 8:return r=t.sent,console.log(r),a=(a=r.response.groups[0].items).map((function(e){return e.venue})),t.abrupt("return",a);case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})))()},getForecast:function(e){return Object(j.a)(u.a.mark((function t(){var n,c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat("https://api.openweathermap.org/data/2.5/weather","?&q=").concat(e,"&APPID=").concat("75cd72df178ed39030732459c2a5fbf1"),t.prev=1,t.next=4,fetch(n);case 4:if(!(c=t.sent).ok){t.next=10;break}return t.next=8,c.json();case 8:return r=t.sent,t.abrupt("return",r);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))()}},f=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),a=n[0],s=n[1],i=e.executeSearch;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("header",{children:Object(c.jsx)("img",{className:"logo",src:"https://content.codecademy.com/courses/intermediate-javascript-requests/wanderlust/logo.svg",alt:"logo"})}),Object(c.jsxs)("main",{children:[Object(c.jsx)("h1",{children:"Where do you want to land?"}),Object(c.jsx)("input",{type:"text",id:"city",placeholder:"Enter City",value:a,onChange:function(e){var t=e.target;s(t.value)}}),Object(c.jsx)("button",{id:"button",type:"submit",onClick:function(){return i(a)},children:"Submit"})]})]})},m=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)({}),i=Object(d.a)(s,2),o=i[0],l=i[1],h=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t,!e.t0){e.next=5;break}return e.next=4,p.getVenues(t);case 4:e.t0=e.sent;case 5:if(n=e.t0,a(n),e.t1=t,!e.t1){e.next=12;break}return e.next=11,p.getForecast(t);case 11:e.t1=e.sent;case 12:c=e.t1,l(c);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{executeSearch:h}),Object(c.jsxs)("div",{className:"container",children:[o&&Object.entries(o).length>0&&Object(c.jsx)(b,{forecast:o}),n&&n.length>0&&Object(c.jsx)(O,{venues:n})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),v()},3:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.e2652148.chunk.js.map