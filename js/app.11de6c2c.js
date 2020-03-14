(function(t){function e(e){for(var r,s,c=e[0],o=e[1],u=e[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="weather-forecast-app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0782":function(t,e,n){"use strict";var r=n("d8dd"),a=n.n(r);a.a},"0ab0":function(t,e,n){"use strict";var r=n("c432"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column justify-content-center",attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col col-10 col-md-12 col-lg-9 col-xl-8"},[n("div",{staticClass:"content my-5 d-flex flex-column justify-content-center"},[n("div",{staticClass:"row justify-content-between"},[n("div",{staticClass:"col-md-7"},[n("h1",{staticClass:"content__title content__title--accent mb-1"},[t._v(t._s(this.city))]),t._m(0)]),n("div",{staticClass:"col d-flex flex-column align-items-end"},[n("Search",{attrs:{handleSubmit:t.handleSubmit,error:t.error}})],1)]),t.forecasts.length?n("div",{staticClass:"row"},t._l(t.forecasts,(function(e,r){return n("div",{key:r,staticClass:"col-md-4"},[n("Card",{attrs:{loading:t.loading,temperature:e.temperature,name:e.name,description:e.description,image:e.image,date:e.date}})],1)})),0):n("div",{staticClass:"row"},t._l(3,(function(e){return n("div",{key:e,staticClass:"col-md-4"},[n("Card",{attrs:{loading:t.loading}})],1)})),0)])])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"content__subtitle mb-3"},[t._v(" Weahter forecast for next "),n("span",{staticClass:"content__subtitle--accent"},[t._v("3")]),t._v(" days ")])}],s=(n("a4d3"),n("e01a"),n("99af"),n("13d5"),n("fb6a"),n("b0c0"),n("4fad"),n("d3b7"),n("ac1f"),n("5319"),n("1276"),n("2909")),c=n("3835"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",class:{"card--loading":t.loading}},[n("div",{staticClass:"card__inner"},[n("div",{staticClass:"card__header d-flex justify-content-between align-items-center"},[n("div",{staticClass:"card__heading"},[t._v(t._s(t.humanizedDate))]),n("div",{staticClass:"card__chip"},[t._v(t._s(t.humanizeTemperature))])]),n("div",{staticClass:"card__body d-flex my-3 justify-content-center"},[n("img",{staticClass:"card__image",attrs:{src:t.image}})]),n("div",{staticClass:"card__footer"},[n("div",{staticClass:"card__title"},[t._v(t._s(t.name))]),n("div",{staticClass:"card__subtitle"},[t._v(t._s(t.description))])])])])},u=[],l=(n("a9e3"),n("5b4d")),d=n.n(l),f={name:"Card",props:{temperature:{type:Number,default:0},name:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:d.a},date:{type:Date,default:function(){}},loading:Boolean},computed:{humanizeTemperature:function(){return"".concat(Math.round(this.temperature)," °C")},humanizedDate:function(){return void 0!==this.date?new Date(this.date).toLocaleDateString("en-Us",{month:"long",day:"numeric"}):""}}},p=f,m=(n("0ab0"),n("2877")),h=Object(m["a"])(p,o,u,!1,null,null,null),v=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search my-2 my-ms-0"},[n("div",{staticClass:"search__field"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.search,expression:"search",modifiers:{trim:!0}}],staticClass:"search__input",attrs:{type:"text",placeholder:"Enter your city"},domProps:{value:t.search},on:{change:t.onSubmit,input:function(e){e.target.composing||(t.search=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("button",{staticClass:"search__button",on:{click:t.onSubmit}},[n("svg",{staticClass:"search__icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),n("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])]),n("p",{staticClass:"search__error-box"},[t._v(t._s(t.error))])])},y=[],b=(n("841c"),{name:"Search",props:{handleSubmit:Function,error:String},data:function(){return{search:""}},methods:{onSubmit:function(){this.handleSubmit(this.search)}}}),_=b,w=(n("0782"),Object(m["a"])(_,g,y,!1,null,null,null)),C=w.exports,A=(n("2f88"),{name:"App",components:{Card:v,Search:C},mounted:function(){this.getForecasts()},methods:{handleSubmit:function(t){this.query=t,this.getForecasts()},getForecasts:function(){var t=this;return this.loading=!0,fetch(this.getApiLink(this.query)).then((function(t){return t.json()})).then((function(e){var n=e.cod,r=e.message,a=e.list,i=e.city;if(200==n)return{city:i.name,forecasts:t.processForecasts(a).slice(1,4)};throw new Error(r)})).then((function(e){var n=e.city,r=e.forecasts;t.city=n,t.forecasts=r,t.loading=!1,t.error=""})).catch((function(e){t.loading=!1,t.error=e.message}))},processForecasts:function(t){var e=[],n=t.reduce((function(t,e){var n=e.dt_txt.split(" "),r=Object(c["a"])(n,1),a=r[0];return a in t?t[a].push(e):t[a]=[e],t}),{});for(var r in n){var a=this.processDateForecasts(n[r]),i=a.averageTemperature,s=a.weatherInfo;e.push({temperature:i,date:new Date(r),name:s.name,description:s.description,image:s.image})}return e},processDateForecasts:function(t){for(var e=this,n=[],r=[],a=0,i=t.length;a<i;a++)n.push(t[a].main.temp),r.push.apply(r,Object(s["a"])(t[a].weather));var c=r.reduce((function(t,n){return n.id in t?t[n.id].frequency++:t[n.id]={frequency:1,weather:{name:n.main,description:n.description,image:e.getIconLink(e.getIconId(n.icon))}},t}),{}),o=n.reduce((function(t,e){return t+e}))/n.length,u=Object.entries(c).sort((function(t,e){return e[1].frequency-t[1].frequency}))[0][1].weather;return{averageTemperature:o,weatherInfo:u}},getApiLink:function(t){return"".concat(this.api.uri,"?q=").concat(t,"&appid=").concat(this.api.key,"&units=metric")},getIconLink:function(t){return"".concat(this.icon.src).concat(t).concat(this.icon.type,"@2x.png")},getIconId:function(t){return t.replace(/(n|d)$/,"")}},data:function(){return{loading:!1,city:"Rostov-on-Don",query:"rostov-on-don",error:"",api:{uri:"https://api.openweathermap.org/data/2.5/forecast",key:"7084209d6a19d061780e6cadbf38b319"},icon:{type:"d",src:"http://openweathermap.org/img/wn/"},forecasts:[]}}}),x=A,j=(n("034f"),Object(m["a"])(x,a,i,!1,null,null,null)),S=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(S)}}).$mount("#app")},"5b4d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAADe0lEQVR4nO3cWahNURzH8a8picg1hqLEC4UMGe6DKfMDhaQkojwpRZQHxZs3PChSui+elGSWkHnMTB5MV0mUISQUrSy6xO24Z6//f+38PnW6t+5t/9Y5v3P2uPZBRERERERERERERERERERERERERMRMM6ugl8tnFLWoGqAWGAoMBHoAHePfmgNvgBfATeA6cAZ4XERw5837ilhMo1omTyhGf2AiMB6YArStYKlTG/x+Agiv5mngQs5PNPdC+gDrgQVVLmdsfATHgbXAuQLGV7jmOQ4K6ALUAQ8KKON344CzwDFgeMHLrlqOhcwD7sQiUm7jwurvIrAqYcY/y62QbcCusP00zNwInMpl9Z1TIYeApU7ZtfFT2dsp/6ccCmkZN7STncfRL67CXEvJoZDDDfaAvHUFznuuvrwL2R43rjnpDlwCWnmMybOQWcASx/zGDAY2eAR7FdIe2OmUXanVHqtSr0K2x1JyZ/6m8SikEzDXIbcpwh7XdMtAj0K2OmRWYwfQwirMupDwjptjnFmtbsAkqzDrQqZW8D85mmY1JutCphjnFWW+1cGiZSHtrDeQBaqJp+2TsyxkbImuUP6JyafbspCRhlkpDLEIsSxkgGFWCl0sQiwL6WmYlUIlEyuqZllIB8OsFFpbhFgW8tUwq7QsC8l1hktWLF+k9yV4PRrzxSLEspBnhlkpvLMIsSzknmFWCq8tQiwLuWyYlcIdixDLQo4ZZqVw1CLEspDncfZ5GX2KE/mSs94V3VvSQnYDby2CrAsx+dgnsN8qyLqQa3G6Zpl8Bg5Yjdfj6HmxQ2Y1wu0Kr6zCPAq5XaJd4A/AJstAr/NLi5xy/9Vy60CvQm4Ba5yyK7Unzsky5XkGdmO81y9H4dbqZR7j8iwkXB8ZA9Q7juFvRsUDWXM5XKMYHb5XIINx/BDu5LrrFZ5DIU+BEcCjDMYS5o0d8RxALlfxHsZZKVed8sNxxiDLA8C/yemyatjnHxm/ucFSXbxj6obv0/8ut+vc4TTFujhL8ErirPp4nLEQeJI4q2K5TjwId+YOA2YD9wtedjhruxLoC2wpeNlVy32u7e74mAlMiD97NWE57+KBXthgH8xsr+4XZZn8vCc+VjT4mqYhcXpnmFXfJv5f+G6Uj3F79DJedj0Zr1ZmW4KIiIiIiIiIiIiIiIiIiIiIiIjI/wH4BqdEdDZEJK4oAAAAAElFTkSuQmCC"},"85ec":function(t,e,n){},c432:function(t,e,n){},d8dd:function(t,e,n){}});
//# sourceMappingURL=app.11de6c2c.js.map