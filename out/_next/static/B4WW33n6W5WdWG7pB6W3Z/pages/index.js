(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0yd9":function(n,t,e){"use strict";e.d(t,"a",(function(){return _}));var r=e("o0o1"),o=e.n(r),i=e("rePB"),u=e("zLVn");function a(n,t){if(null==n)return{};var e,r,o=Object(u.a)(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var c=e("q1tI"),s=e.n(c),f=e("/MKj"),l=e("kngY"),p=(e("8Bbg"),s.a.createElement);function d(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function b(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(Object(e),!0).forEach((function(t){Object(i.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var O,_=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.ssr,r=void 0===e||e,i=function(t){var e=t.initialReduxState,r=a(t,["initialReduxState"]),o=S(e);return p(f.a,{store:o},p(n,r))};return(r||n.getInitialProps)&&(i.getInitialProps=function(t){var e,r;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e=S(),t.reduxStore=e,"function"!==typeof n.getInitialProps){i.next=8;break}return i.next=5,o.a.awrap(n.getInitialProps(t));case 5:i.t0=i.sent,i.next=9;break;case 8:i.t0={};case 9:return r=i.t0,i.abrupt("return",b({},r,{initialReduxState:e.getState()}));case 11:case"end":return i.stop()}}),null,null,null,Promise)}),i},S=function(n){return O||(O=Object(l.a)(n)),O}},"23aj":function(n,t,e){"use strict";e.r(t);var r=e("q1tI"),o=e.n(r),i=e("648L"),u=e("h4VS"),a=e("YFqc"),c=e.n(a),s=e("vOnD"),f=e("AIQV"),l=e("/MKj"),p=o.a.createElement;function d(){var n=Object(u.a)(["\n    text-decoration: none;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 20px;\n    font-weight: 700;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n"]);return d=function(){return n},n}function b(){var n=Object(u.a)(["\n    outline: none;\n    border: none;\n    padding: 10px;\n    cursor: pointer;\n    margin-top: 1rem;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 15px;\n    font-weight: 600;\n\n    &:hover {\n        color: grey;\n    }\n"]);return b=function(){return n},n}function O(){var n=Object(u.a)(["\n    outline: none;\n    border: none;\n    padding: 10px;\n    cursor: pointer;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 15px;\n    font-weight: 600;\n\n    &:hover {\n        color: grey;\n    }\n"]);return O=function(){return n},n}function _(){var n=Object(u.a)(["\n    width: 30%;\n    height: 30vh;\n    display: flex;\n    padding: 1rem;\n    flex-direction: column;\n    justify-content: space-between;\n    background-color: #f7f7f7;\n    margin-bottom: 1rem;\n"]);return _=function(){return n},n}function S(){var n=Object(u.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    list-style: none;\n"]);return S=function(){return n},n}function E(){var n=Object(u.a)(["\n    text-align: center;\n    font-family: 'Montserrat', sans-serif;\n    margin-bottom: 1rem;\n"]);return E=function(){return n},n}function v(){var n=Object(u.a)(["\n    width: 80%;\n    margin: 1.5rem auto;\n    display: flex;\n    flex-direction: column;\n"]);return v=function(){return n},n}var y=s.b.div(v()),T=s.b.h2(E()),g=s.b.ul(S()),h=s.b.li(_()),m=s.b.button(O()),P=s.b.button(b()),w=s.b.a(d()),j=function(){var n=Object(l.c)((function(n){return n.posts})),t=Object(l.b)();return p(y,null,p(T,null,"Posts"),p(g,null,n.map((function(n){return p(h,{key:n.id},p(c.a,{as:"/posts/".concat(n.id),href:"/posts/[id]"},p(w,null,p("span",null,n.title),p(P,null,"Read more"))),p(m,{onClick:function(){return t(Object(f.b)(n.id))}},"Delete post"))}))))},R=e("0yd9"),C=o.a.createElement,x=function(){var n=Object(l.b)();return Object(r.useEffect)((function(){n(Object(f.d)())}),[]),C(i.a,null,C(j,null))};x.getInitialProps=function(n){return(0,n.reduxStore.dispatch)(Object(f.d)()),{}};t.default=Object(R.a)(x)},"5HXA":function(n,t,e){"use strict";var r=e("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(n){return n}}},"8Bbg":function(n,t,e){n.exports=e("B5Ud")},B5Ud:function(n,t,e){"use strict";var r=e("/GRZ"),o=e("i2R6"),i=e("48fX"),u=e("tCBg"),a=e("T0f4"),c=e("vJKn");function s(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=a(n);if(t){var o=a(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return u(this,e)}}var f=e("AroE");t.__esModule=!0,t.Container=function(n){0;return n.children},t.createUrl=O,t.default=void 0;var l=f(e("q1tI")),p=e("g/15");function d(n){var t,e,r;return c.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=n.Component,e=n.ctx,o.next=3,c.awrap((0,p.loadGetInitialProps)(t,e));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}t.AppInitialProps=p.AppInitialProps;var b=function(n){i(e,n);var t=s(e);function e(){return r(this,e),t.apply(this,arguments)}return o(e,[{key:"componentDidCatch",value:function(n,t){throw n}},{key:"render",value:function(){var n=this.props,t=n.router,e=n.Component,r=n.pageProps,o=n.__N_SSG,i=n.__N_SSP;return l.default.createElement(e,Object.assign({},r,o||i?{}:{url:O(t)}))}}]),e}(l.default.Component);function O(n){var t=n.pathname,e=n.asPath,r=n.query;return{get query(){return r},get pathname(){return t},get asPath(){return e},back:function(){n.back()},push:function(t,e){return n.push(t,e)},pushTo:function(t,e){var r=e?t:"",o=e||t;return n.push(r,o)},replace:function(t,e){return n.replace(t,e)},replaceTo:function(t,e){var r=e?t:"",o=e||t;return n.replace(r,o)}}}t.default=b,b.origGetInitialProps=d,b.getInitialProps=d},Bldr:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("23aj")}])},kngY:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var r=e("ANjH");function o(n){return function(t){var e=t.dispatch,r=t.getState;return function(t){return function(o){return"function"===typeof o?o(e,r,n):t(o)}}}}var i=o();i.withExtraArgument=o;var u=i,a=e("5HXA");function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function s(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=e("BoJa"),l=Object(r.combineReducers)({posts:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.n.GET_ALL_POSTS_SUCCESS:return s(t.payload.posts);case f.n.CREATE_POST_START_SUCCESS:return[].concat(s(n),[t.payload.newpost]);case f.n.DELETE_POST_SUCCESS:return n.filter((function(n){return n.id!==t.payload.id}));default:return n}},currentPost:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.n.GET_CURRENT_POST_SUCCESS:return t.payload.post;case f.n.CLEAR_CURRENT_POST:return null;default:return n}},isLoading:function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.n.CREATE_POST_START:case f.n.DELETE_POST_START:case f.n.GET_CURRENT_POST_START:case f.n.GET_ALL_POSTS_START:return!0;case f.n.CREATE_POST_ERROR:case f.n.CREATE_POST_START_SUCCESS:case f.n.DELETE_POST_SUCCESS:case f.n.DELETE_POST_ERROR:case f.n.GET_ALL_POSTS_ERROR:case f.n.GET_ALL_POSTS_SUCCESS:case f.n.GET_CURRENT_POST_ERROR:case f.n.GET_CURRENT_POST_SUCCESS:return!1;default:return n}}}),p={posts:[],currentPost:null,isLoading:!1},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return Object(r.createStore)(l,n,Object(a.composeWithDevTools)(Object(r.applyMiddleware)(u)))}},o0o1:function(n,t,e){n.exports=e("ls82")},rePB:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.d(t,"a",(function(){return r}))}},[["Bldr",0,1,2,3,4,5,6]]]);