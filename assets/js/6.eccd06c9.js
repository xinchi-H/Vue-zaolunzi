(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{152:function(t,n,e){"use strict";var r=e(4),i=e(15),a=e(16),s=e(76),c=e(74),o=e(6),u=e(95).f,l=e(96).f,f=e(9).f,p=e(97).trim,d=r.Number,h=d,v=d.prototype,g="Number"==a(e(75)(v)),b="trim"in String.prototype,w=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){var e,r,i,a=(n=b?n.trim():p(n,3)).charCodeAt(0);if(43===a||45===a){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===a){switch(n.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+n}for(var s,o=n.slice(2),u=0,l=o.length;u<l;u++)if((s=o.charCodeAt(u))<48||s>i)return NaN;return parseInt(o,r)}}return+n};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof d&&(g?o((function(){v.valueOf.call(e)})):"Number"!=a(e))?s(new h(w(n)),e,d):w(n)};for(var m,N=e(8)?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;N.length>y;y++)i(h,m=N[y])&&!i(d,m)&&f(d,m,l(h,m));d.prototype=v,v.constructor=d,e(11)(r,"Number",d)}},154:function(t,n,e){},155:function(t,n,e){},162:function(t,n,e){"use strict";var r=e(154);e.n(r).a},163:function(t,n,e){"use strict";var r=e(3),i=e(77)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(98)("includes")},164:function(t,n,e){"use strict";var r=e(3),i=e(165);r(r.P+r.F*e(166)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},165:function(t,n,e){var r=e(78),i=e(17);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(i(t))}},166:function(t,n,e){var r=e(2)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},167:function(t,n,e){"use strict";var r=e(155);e.n(r).a},168:function(t,n,e){"use strict";e(14),e(25),e(54),e(152);var r={name:"lunzi-row",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(n){n.gutter=t.gutter}))}},i=(e(162),e(1)),a=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"30dc2308",null);n.a=a.exports},169:function(t,n,e){"use strict";var r=e(10),i=(e(152),e(163),e(164),e(25),e(14),e(20),e(26),function(t){var n=Object.keys(t),e=!0;return n.forEach((function(t){["span","offset"].includes(t)||(e=!1)})),e}),a={name:"lunzi-col",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:i},narrowPc:{type:Object,validator:i},pc:{type:Object,validator:i},widePc:{type:Object,validator:i}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var e=[];return t.span&&e.push("col-".concat(n).concat(t.span)),t.offset&&e.push("offset-".concat(n).concat(t.offset)),e}},computed:{colClass:function(){var t=this.span,n=this.offset,e=this.ipad,i=this.narrowPc,a=this.pc,s=this.widePc,c=this.createClasses;return Object(r.a)(c({span:t,offset:n})).concat(Object(r.a)(c(e,"ipad-")),Object(r.a)(c(i,"narrow-pc-")),Object(r.a)(c(a,"pc-")),Object(r.a)(c(s,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},s=(e(167),e(1)),c=Object(s.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"7398fd06",null);n.a=c.exports},176:function(t,n,e){},205:function(t,n,e){"use strict";var r=e(176);e.n(r).a},226:function(t,n,e){"use strict";e.r(n);var r=e(168),i=e(169),a={components:{"g-row":r.a,"g-col":i.a}},s=(e(205),e(1)),c=Object(s.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("g-row",{attrs:{gutter:"20"}},[n("g-col",{attrs:{span:"12",ipad:{span:8},"narrow-pc":{span:4},pc:{span:2},"wide-pc":{span:1}}},[n("div",{staticClass:"demoCol"},[this._v("1")])]),this._v(" "),n("g-col",{attrs:{span:"12",ipad:{span:16},"narrow-pc":{span:20},pc:{span:22},"wide-pc":{span:23}}},[n("div",{staticClass:"demoCol"},[this._v("10")])])],1)],1)}),[],!1,null,"26dbe7b9",null);n.default=c.exports}}]);