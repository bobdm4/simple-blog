(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0yd9":function(n,t,e){"use strict";e.d(t,"a",(function(){return v}));var r=e("o0o1"),o=e.n(r),u=e("rePB"),i=e("zLVn");function a(n,t){if(null==n)return{};var e,r,o=Object(i.a)(n,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(r=0;r<u.length;r++)e=u[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var c=e("q1tI"),s=e.n(c),f=e("/MKj"),l=e("kngY"),p=(e("8Bbg"),s.a.createElement);function d(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function b(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(Object(e),!0).forEach((function(t){Object(u.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var y,v=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.ssr,r=void 0===e||e,u=function(t){var e=t.initialReduxState,r=a(t,["initialReduxState"]),o=O(e);return p(f.a,{store:o},p(n,r))};return(r||n.getInitialProps)&&(u.getInitialProps=function(t){var e,r;return o.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(e=O(),t.reduxStore=e,"function"!==typeof n.getInitialProps){u.next=8;break}return u.next=5,o.a.awrap(n.getInitialProps(t));case 5:u.t0=u.sent,u.next=9;break;case 8:u.t0={};case 9:return r=u.t0,u.abrupt("return",b({},r,{initialReduxState:e.getState()}));case 11:case"end":return u.stop()}}),null,null,null,Promise)}),u},O=function(n){return y||(y=Object(l.a)(n)),y}},"23aj":function(n,t,e){"use strict";e.r(t);var r=e("q1tI"),o=e.n(r),u=e("648L"),i=e("h4VS"),a=e("YFqc"),c=e.n(a),s=e("vOnD"),f=e("AIQV"),l=e("/MKj"),p=o.a.createElement;function d(){var n=Object(i.a)(["\n    text-decoration: none;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 20px;\n    font-weight: 700;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n"]);return d=function(){return n},n}function b(){var n=Object(i.a)(["\n    outline: none;\n    border: none;\n    padding: 10px;\n    cursor: pointer;\n    margin-top: 1rem;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 15px;\n    font-weight: 600;\n\n    &:hover {\n        color: grey;\n    }\n"]);return b=function(){return n},n}function y(){var n=Object(i.a)(["\n    outline: none;\n    border: none;\n    padding: 10px;\n    cursor: pointer;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 15px;\n    font-weight: 600;\n\n    &:hover {\n        color: grey;\n    }\n"]);return y=function(){return n},n}function v(){var n=Object(i.a)(["\n    width: 30%;\n    height: 30vh;\n    display: flex;\n    padding: 1rem;\n    flex-direction: column;\n    justify-content: space-between;\n    background-color: #f7f7f7;\n    margin-bottom: 1rem;\n"]);return v=function(){return n},n}function O(){var n=Object(i.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    list-style: none;\n"]);return O=function(){return n},n}function g(){var n=Object(i.a)(["\n    text-align: center;\n    font-family: 'Montserrat', sans-serif;\n    margin-bottom: 1rem;\n"]);return g=function(){return n},n}function h(){var n=Object(i.a)(["\n    width: 80%;\n    margin: 1.5rem auto;\n    display: flex;\n    flex-direction: column;\n"]);return h=function(){return n},n}var m=s.b.div(h()),_=s.b.h2(g()),S=s.b.ul(O()),w=s.b.li(v()),j=s.b.button(y()),E=s.b.button(b()),P=s.b.a(d()),T=function(){var n=Object(l.c)((function(n){return n.posts}));n.reverse();var t=Object(l.b)();return p(m,null,p(_,null,"Posts"),p(S,null,n.map((function(n){return p(w,{key:n.id},p(c.a,{as:"/posts/".concat(n.id,"?_embed=comments"),href:"/posts/[id]"},p(P,null,p("span",null,n.title),p(E,null,"Read more"))),p(j,{onClick:function(){return t(Object(f.c)(n.id))}},"Delete post"))}))))},x=e("0yd9"),C=o.a.createElement,R=function(){var n=Object(l.b)();return Object(r.useEffect)((function(){n(Object(f.e)())}),[]),C(u.a,null,C(T,null))};R.getInitialProps=function(n){return(0,n.reduxStore.dispatch)(Object(f.e)()),{}};t.default=Object(x.a)(R)},"5HXA":function(n,t,e){"use strict";var r=e("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(n){return n}}},"8Bbg":function(n,t,e){n.exports=e("B5Ud")},B5Ud:function(n,t,e){"use strict";var r=e("/GRZ"),o=e("i2R6"),u=e("48fX"),i=e("tCBg"),a=e("T0f4"),c=e("vJKn");function s(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=a(n);if(t){var o=a(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return i(this,e)}}var f=e("AroE");t.__esModule=!0,t.Container=function(n){0;return n.children},t.createUrl=y,t.default=void 0;var l=f(e("q1tI")),p=e("g/15");function d(n){var t,e,r;return c.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=n.Component,e=n.ctx,o.next=3,c.awrap((0,p.loadGetInitialProps)(t,e));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}t.AppInitialProps=p.AppInitialProps;var b=function(n){u(e,n);var t=s(e);function e(){return r(this,e),t.apply(this,arguments)}return o(e,[{key:"componentDidCatch",value:function(n,t){throw n}},{key:"render",value:function(){var n=this.props,t=n.router,e=n.Component,r=n.pageProps,o=n.__N_SSG,u=n.__N_SSP;return l.default.createElement(e,Object.assign({},r,o||u?{}:{url:y(t)}))}}]),e}(l.default.Component);function y(n){var t=n.pathname,e=n.asPath,r=n.query;return{get query(){return r},get pathname(){return t},get asPath(){return e},back:function(){n.back()},push:function(t,e){return n.push(t,e)},pushTo:function(t,e){var r=e?t:"",o=e||t;return n.push(r,o)},replace:function(t,e){return n.replace(t,e)},replaceTo:function(t,e){var r=e?t:"",o=e||t;return n.replace(r,o)}}}t.default=b,b.origGetInitialProps=d,b.getInitialProps=d},Bldr:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("23aj")}])},kngY:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var r=e("ANjH");function o(n){return function(t){var e=t.dispatch,r=t.getState;return function(t){return function(o){return"function"===typeof o?o(e,r,n):t(o)}}}}var u=o();u.withExtraArgument=o;var i=u,a=e("5HXA");function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function s(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=e("BoJa"),l=Object(r.combineReducers)({posts:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.g.GET_ALL_POSTS_SUCCESS:return s(t.payload.posts);case f.g.CREATE_POST_START_SUCCESS:return[].concat(s(n),[t.payload.newpost]);case f.g.CREATE_COM_START_SUCCESS:return[].concat(s(n),[t.payload.newcom]);case f.g.DELETE_POST_SUCCESS:return n.filter((function(n){return n.id!==t.payload.id}));default:return n}},currentPost:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.g.GET_CURRENT_POST_SUCCESS:return t.payload.post;case f.g.CLEAR_CURRENT_POST:return null;default:return n}}}),p={posts:[],currentPost:null},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return Object(r.createStore)(l,n,Object(a.composeWithDevTools)(Object(r.applyMiddleware)(i)))}},o0o1:function(n,t,e){n.exports=e("ls82")},rePB:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.d(t,"a",(function(){return r}))}},[["Bldr",0,1,2,3,5,4,6]]]);