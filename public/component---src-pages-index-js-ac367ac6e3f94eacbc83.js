(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return m}));var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),a=n("Bl7J"),u=n("vrFN"),c=n("FlKi"),s=n.n(c),l=n("wG+1"),f=n("9eSz"),d=n.n(f),p=function(e){var t=e.archives;return t?o.a.createElement(o.a.Fragment,null,t.map((function(e){return o.a.createElement(i.Link,{to:"/archive/"+e.node._meta.uid,key:e.node._meta.id,className:s.a.featuredArchive},o.a.createElement(d.a,{className:s.a.image,fluid:e.node.hero_imageSharp.childImageSharp.fluid,alt:e.node.hero_image.alt}),o.a.createElement("div",{className:s.a.text},o.a.createElement("h2",null,l.RichText.asText(e.node.title)),o.a.createElement("p",null,e.node.archive_number&&o.a.createElement(o.a.Fragment,null,"◊ Project ",e.node.archive_number),e.node.year&&o.a.createElement(o.a.Fragment,null," ",o.a.createElement("br",null),"Archived ",Object(l.Date)(e.node.year).getFullYear()))))}))):null};t.default=function(e){var t=e.data.prismic.allArchives.edges;return o.a.createElement(a.a,null,o.a.createElement(u.a,{title:"Home"}),o.a.createElement(p,{archives:t}))};var m={id:"4223147399",source:"\n  query SliderData {\n    prismic {\n      allArchives(sortBy: archive_number_DESC) {\n        edges {\n          node {\n            title\n            location\n            year\n            archive_number\n            services\n            hero_image\n            hero_imageSharp {\n              id\n              uid\n              childImageSharp {\n                id\n                fluid {\n                  ...GatsbyImageSharpFluid\n                }\n              }\n            }\n            _meta {\n              id\n              uid\n            }\n          }\n        }\n      }\n    }\n  }\n",toString:function(){return this.id}}},"wG+1":function(e,t,n){var r;n("V+eJ"),n("Oyvg"),n("f3/d"),n("/SS/"),n("pIFo"),n("Vd3H"),n("dZ+Y"),n("DNiP"),n("XfO3"),n("HEwt"),n("a1Th"),n("h7Nl"),n("LK8F"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("KKXr"),n("8+KV"),n("bWfx"),n("91GP"),n("2Spj"),n("hHhE"),n("rE2o"),n("ioFf"),n("HAE/"),"undefined"!=typeof self&&self,r=function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./node_modules/object-assign/index.js":function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,u,c=a(e),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))o.call(n,l)&&(c[l]=n[l]);if(r){u=r(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(c[u[f]]=n[u[f]])}}return c}},"./node_modules/prismic-helpers/dist/prismic-helpers.min.js":function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=r(n(2)),i=r(n(1));e.exports={Link:o.default,Date:i.default}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return null;var t=24==e.length?e.substring(0,22)+":"+e.substring(22,24):e;return new Date(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={url:function(e,t){return"Document"===e.link_type?t?t(e,e.isBroken):"":e.url}}},function(e,t,n){e.exports=n(0)}])},"./node_modules/prismic-richtext/dist/prismic-richtext.min.js":function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){var r=n(3);e.exports=function(e){return function t(n){return 0===arguments.length||r(n)?t:e.apply(this,arguments)}}},function(e,t,n){var r=n(0),o=n(3);e.exports=function(e){return function t(n,i){switch(arguments.length){case 0:return t;case 1:return o(n)?t:r((function(t){return e(n,t)}));default:return o(n)&&o(i)?t:o(n)?r((function(t){return e(t,i)})):o(i)?r((function(t){return e(n,t)})):e(n,i)}}}},function(e,t,n){"use strict";var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.PRIORITIES=t.NODE_TYPES=void 0;var i={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"};t.NODE_TYPES=i;var a=(o(r={},i.heading1,4),o(r,i.heading2,4),o(r,i.heading3,4),o(r,i.heading4,4),o(r,i.heading5,4),o(r,i.heading6,4),o(r,i.paragraph,3),o(r,i.preformatted,5),o(r,i.strong,6),o(r,i.em,6),o(r,i.oList,1),o(r,i.list,1),o(r,i.listItem,1),o(r,i.oListItem,1),o(r,i.image,1),o(r,i.embed,1),o(r,i.hyperlink,3),o(r,i.label,4),o(r,i.span,7),r);t.PRIORITIES=a},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(12)),o=d(n(15)),i=d(n(16)),a=d(n(17)),u=d(n(21)),c=d(n(7)),s=n(23),l=n(2),f=n(8);function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return function(e,t){return t.reduce((function(e,t){var n=(0,u.default)(e);if(n){if(n.some((function(e){return e.isParentOf(t)})))return(0,a.default)(e).concat([n.concat(t)]);var r=(0,u.default)(n);return r&&function(e,t){return e.end>=t.start}(r,t)?(0,a.default)(e).concat([n.concat(t)]):e.concat([[t]])}return[[t]]}),[])}(0,(0,i.default)([function(e,t){return e.start-t.start},function(e,t){return e.end-t.end}],e))}function y(e){if(0===e.length)throw new Error("Unable to elect node on empty list");var t=function(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(e.sort((function(e,t){if(e.isParentOf(t))return-1;if(t.isParentOf(e))return 1;var n=l.PRIORITIES[e.type]-l.PRIORITIES[t.type];return 0===n?e.text.length-t.text.length:n})));return{elected:t[0],others:t.slice(1)}}function h(e,t,n){if(t.length>0)return function(e,t,n){return t.reduce((function(r,o,i){var a=[],u=0===i&&o.start>n.lower,c=i===t.length-1&&n.upper>o.end;if(u){var s=new f.TextNode(n.lower,o.start,e.slice(n.lower,o.start));a=a.concat(s)}else{var l=t[i-1];if(l&&o.start>l.end){var d=e.slice(l.end,o.start),p=new f.TextNode(l.end,o.start,d);a=a.concat(p)}}if(a=a.concat(o),c){var m=new f.TextNode(o.end,n.upper,e.slice(o.end,n.upper));a=a.concat(m)}return r.concat(a)}),[])}(e,v(e,t),n);var r=e.slice(n.lower,n.upper);return[new f.TextNode(n.lower,n.upper,r)]}function v(e,t){var n=m((0,o.default)((function(e){return e.start}),t)).map(y),i=(0,r.default)(n.map((function(t){return function(e,t){var n=t.others.reduce((function(n,r){var o=n.inner,i=n.outer,a=function(e,t,n){return n.start<t.start?{inner:f.SpanNode.slice(n,t.start,n.end,e),outer:f.SpanNode.slice(n,n.start,t.start,e)}:n.end>t.end?{inner:f.SpanNode.slice(n,n.start,t.end,e),outer:f.SpanNode.slice(n,t.end,n.end,e)}:{inner:n}}(e,t.elected,r);return{inner:o.concat(a.inner),outer:a.outer?i.concat(a.outer):i}}),{inner:[],outer:[]}),r=n.inner,o=n.outer;return[t.elected.setChildren(h(e,r,t.elected.boundaries()))].concat(v(e,o))}(e,t)})));return(0,o.default)((function(e){return e.start}),i)}var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"fromRichText",value:function(e){return{key:(0,c.default)(),children:e.reduce((function(e,t,n){if(s.RichTextBlock.isEmbedBlock(t.type)||s.RichTextBlock.isImageBlock(t.type))return e.concat(new f.BlockNode(t.type,t));var r=function(e){var t=e.spans.map((function(t){var n=e.text.slice(t.start,t.end);return new f.SpanNode(t.start,t.end,t.type,n,[],t)})),n={lower:0,upper:e.text.length};return h(e.text,t,n)}(t),o=e[e.length-1];if(s.RichTextBlock.isListItem(t.type)&&o&&o instanceof f.ListBlockNode){var i=new f.ListItemBlockNode(t,r),u=o.addChild(i);return(0,a.default)(e).concat(u)}if(s.RichTextBlock.isOrderedListItem(t.type)&&o&&o instanceof f.OrderedListBlockNode){var c=new f.OrderedListItemBlockNode(t,r),l=o.addChild(c);return(0,a.default)(e).concat(l)}if(s.RichTextBlock.isListItem(t.type)){var d=new f.ListItemBlockNode(t,r),p=new f.ListBlockNode(s.RichTextBlock.emptyList(),[d]);return e.concat(p)}if(s.RichTextBlock.isOrderedListItem(t.type)){var m=new f.OrderedListItemBlockNode(t,r),y=new f.OrderedListBlockNode(s.RichTextBlock.emptyOrderedList(),[m]);return e.concat(y)}return e.concat(new f.BlockNode(t.type,t,r))}),[])}}}])&&p(t,n),e}();t.default=b},function(e,t){e.exports=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)}},function(e,t){e.exports=function(e){return"[object String]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ListBlockNode=t.OrderedListBlockNode=t.OrderedListItemBlockNode=t.ListItemBlockNode=t.BlockNode=t.TextNode=t.SpanNode=t.Node=void 0;var r,o=(r=n(7))&&r.__esModule?r:{default:r},i=n(2);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var p=function e(t,n,r){d(this,e),this.key=(0,o.default)(),this.type=t,this.element=n,this.children=r};t.Node=p;var m=function(e){function t(e,n,r,o,i,a){var u;return d(this,t),(u=s(this,l(t).call(this,r,a,i))).start=e,u.end=n,u.text=o,u.children=i,u}return f(t,p),c(t,[{key:"boundaries",value:function(){return{lower:this.start,upper:this.end}}},{key:"isParentOf",value:function(e){return this.start<=e.start&&this.end>=e.end}},{key:"setChildren",value:function(e){return new t(this.start,this.end,this.type,this.text,e,this.element)}}],[{key:"slice",value:function(e,n,r,o){return new t(n,r,e.type,o.slice(n,r),e.children,e.element)}}]),t}();t.SpanNode=m;var y=function(e){function t(e,n,r){d(this,t);var o={type:i.NODE_TYPES.span,start:e,end:n,text:r};return s(this,l(t).call(this,e,n,i.NODE_TYPES.span,r,[],o))}return f(t,m),t}();t.TextNode=y;var h=function(e){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return d(this,t),s(this,l(t).call(this,e,n,r))}return f(t,p),t}();t.BlockNode=h;var v=function(e){function t(e,n){return d(this,t),s(this,l(t).call(this,i.NODE_TYPES.listItem,e,n))}return f(t,h),t}();t.ListItemBlockNode=v;var b=function(e){function t(e,n){return d(this,t),s(this,l(t).call(this,i.NODE_TYPES.oListItem,e,n))}return f(t,h),t}();t.OrderedListItemBlockNode=b;var g=function(e){function t(e,n){return d(this,t),s(this,l(t).call(this,i.NODE_TYPES.oList,e,n))}return f(t,h),c(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.OrderedListBlockNode=g;var x=function(e){function t(e,n){return d(this,t),s(this,l(t).call(this,i.NODE_TYPES.list,e,n))}return f(t,h),c(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.ListBlockNode=x},function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";var r=u(n(11)),o=u(n(4)),i=u(n(24)),a=n(2);function u(e){return e&&e.__esModule?e:{default:e}}e.exports={asText:r.default,asTree:o.default.fromRichText,serialize:i.default,Elements:a.NODE_TYPES}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t){var n="string"==typeof t?t:" ";return e.map((function(e){return e.text})).join(n)}},function(e,t,n){var r=n(0)(n(13)(!0));e.exports=r},function(e,t,n){var r=n(14);e.exports=function(e){return function t(n){for(var o,i,a,u=[],c=0,s=n.length;c<s;){if(r(n[c]))for(a=0,i=(o=e?t(n[c]):n[c]).length;a<i;)u[u.length]=o[a],a+=1;else u[u.length]=n[c];c+=1}return u}}},function(e,t,n){var r=n(0),o=n(5),i=n(6),a=r((function(e){return!!o(e)||!!e&&"object"==typeof e&&!i(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1))}));e.exports=a},function(e,t,n){var r=n(1)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,n){var r=e(t),o=e(n);return r<o?-1:r>o?1:0}))}));e.exports=r},function(e,t,n){var r=n(1)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,n){for(var r=0,o=0;0===r&&o<e.length;)r=e[o](t,n),o+=1;return r}))}));e.exports=r},function(e,t,n){var r=n(18)(0,-1);e.exports=r},function(e,t,n){var r=n(19),o=n(20)(r("slice",(function(e,t,n){return Array.prototype.slice.call(n,e,t)})));e.exports=o},function(e,t,n){var r=n(5);e.exports=function(e,t){return function(){var n=arguments.length;if(0===n)return t();var o=arguments[n-1];return r(o)||"function"!=typeof o[e]?t.apply(this,arguments):o[e].apply(o,Array.prototype.slice.call(arguments,0,n-1))}}},function(e,t,n){var r=n(0),o=n(1),i=n(3);e.exports=function(e){return function t(n,a,u){switch(arguments.length){case 0:return t;case 1:return i(n)?t:o((function(t,r){return e(n,t,r)}));case 2:return i(n)&&i(a)?t:i(n)?o((function(t,n){return e(t,a,n)})):i(a)?o((function(t,r){return e(n,t,r)})):r((function(t){return e(n,a,t)}));default:return i(n)&&i(a)&&i(u)?t:i(n)&&i(a)?o((function(t,n){return e(t,n,u)})):i(n)&&i(u)?o((function(t,n){return e(t,a,n)})):i(a)&&i(u)?o((function(t,r){return e(n,t,r)})):i(n)?r((function(t){return e(t,a,u)})):i(a)?r((function(t){return e(n,t,u)})):i(u)?r((function(t){return e(n,a,t)})):e(n,a,u)}}}},function(e,t,n){var r=n(22)(-1);e.exports=r},function(e,t,n){var r=n(1),o=n(6),i=r((function(e,t){var n=e<0?t.length+e:e;return o(t)?t.charAt(n):t[n]}));e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RichTextBlock=void 0;var r=n(2);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.text=n,this.spans=r}var t,n;return t=e,(n=[{key:"isEmbedBlock",value:function(e){return e===r.NODE_TYPES.embed}},{key:"isImageBlock",value:function(e){return e===r.NODE_TYPES.image}},{key:"isList",value:function(e){return e===r.NODE_TYPES.list}},{key:"isOrderedList",value:function(e){return e===r.NODE_TYPES.oList}},{key:"isListItem",value:function(e){return e===r.NODE_TYPES.listItem}},{key:"isOrderedListItem",value:function(e){return e===r.NODE_TYPES.oListItem}},{key:"emptyList",value:function(){return{type:r.NODE_TYPES.list,spans:[],text:""}}},{key:"emptyOrderedList",value:function(){return{type:r.NODE_TYPES.oList,spans:[],text:""}}}])&&o(t,n),e}();t.RichTextBlock=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(4))&&r.__esModule?r:{default:r},i=n(8);t.default=function(e,t,n){return o.default.fromRichText(e).children.map((function(e,r){return function(e,t,n,r){return function e(n,o){var a=n instanceof i.SpanNode?n.text:null,u=n.children.reduce((function(t,n,r){return t.concat([e(n,r)])}),[]);return r&&r(n.type,n.element,a,u,o)||t(n.type,n.element,a,u,o)}(e,n)}(e,t,r,n)}))}}])},"./node_modules/prop-types/checkPropTypes.js":function(e,t,n){"use strict";var r=function(){},o=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=Function.call.bind(Object.prototype.hasOwnProperty);function u(e,t,n,u,c){for(var s in e)if(a(e,s)){var l;try{if("function"!=typeof e[s]){var f=Error((u||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw f.name="Invariant Violation",f}l=e[s](t,s,u,n,null,o)}catch(p){l=p}if(!l||l instanceof Error||r((u||"React class")+": type specification of "+n+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var d=c?c():"";r("Failed "+n+" type: "+l.message+(null!=d?d:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},u.resetWarningCache=function(){i={}},e.exports=u},"./node_modules/prop-types/factoryWithTypeCheckers.js":function(e,t,n){"use strict";var r=n("./node_modules/react-is/index.js"),o=n("./node_modules/object-assign/index.js"),i=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=n("./node_modules/prop-types/checkPropTypes.js"),u=Function.call.bind(Object.prototype.hasOwnProperty),c=function(){};function s(){return null}c=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,l={array:m("array"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:p(s),arrayOf:function(e){return p((function(t,n,r,o,a){if("function"!=typeof e)return new d("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u))return new d("Invalid "+o+" `"+a+"` of type `"+h(u)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<u.length;c++){var s=e(u,c,r,o,a+"["+c+"]",i);if(s instanceof Error)return s}return null}))},element:p((function(t,n,r,o,i){var a=t[n];return e(a)?null:new d("Invalid "+o+" `"+i+"` of type `"+h(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(e,t,n,o,i){var a=e[t];return r.isValidElementType(a)?null:new d("Invalid "+o+" `"+i+"` of type `"+h(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||"<<anonymous>>";return new d("Invalid "+o+" `"+i+"` of type `"+((u=t[n]).constructor&&u.constructor.name?u.constructor.name:"<<anonymous>>")+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var u;return null}))},node:p((function(e,t,n,r,o){return y(e[t])?null:new d("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,n,r,o,a){if("function"!=typeof e)return new d("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],s=h(c);if("object"!==s)return new d("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in c)if(u(c,l)){var f=e(c,l,r,o,a+"."+l,i);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return arguments.length>1?c("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):c("Invalid argument supplied to oneOf, expected an array."),s;function t(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(f(a,e[u]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===v(t)?String(t):t}));return new d("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")}return p(t)},oneOfType:function(e){if(!Array.isArray(e))return c("Invalid argument supplied to oneOfType, expected an instance of array."),s;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+b(n)+" at index "+t+"."),s}return p((function(t,n,r,o,a){for(var u=0;u<e.length;u++)if(null==(0,e[u])(t,n,r,o,a,i))return null;return new d("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}))},shape:function(e){return p((function(t,n,r,o,a){var u=t[n],c=h(u);if("object"!==c)return new d("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var l=e[s];if(l){var f=l(u,s,r,o,a+"."+s,i);if(f)return f}}return null}))},exact:function(e){return p((function(t,n,r,a,u){var c=t[n],s=h(c);if("object"!==s)return new d("Invalid "+a+" `"+u+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var l=o({},t[n],e);for(var f in l){var p=e[f];if(!p)return new d("Invalid "+a+" `"+u+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(c,f,r,a,u+"."+f,i);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){this.message=e,this.stack=""}function p(e){var n={},r=0;function o(o,a,u,s,l,f,p){if(s=s||"<<anonymous>>",f=f||u,p!==i){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var y=s+":"+u;!n[y]&&r<3&&(c("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[y]=!0,r++)}}return null==a[u]?o?null===a[u]?new d("The "+l+" `"+f+"` is marked as required in `"+s+"`, but its value is `null`."):new d("The "+l+" `"+f+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(a,u,s,l,f)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function m(e){return p((function(t,n,r,o,i,a){var u=t[n];return h(u)!==e?new d("Invalid "+o+" `"+i+"` of type `"+v(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!y(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!y(a[1]))return!1}return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function v(e){if(null==e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function b(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,l.checkPropTypes=a,l.resetWarningCache=a.resetWarningCache,l.PropTypes=l,l}},"./node_modules/prop-types/index.js":function(e,t,n){var r=n("./node_modules/react-is/index.js");e.exports=n("./node_modules/prop-types/factoryWithTypeCheckers.js")(r.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/react-is/cjs/react-is.development.js":function(e,t,n){"use strict";!function(){Object.defineProperty(t,"__esModule",{value:!0});var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!=typeof console&&console.warn(i);try{throw new Error(i)}catch(a){}},g=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];b.apply(void 0,[t].concat(r))}};function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case s:case l:case o:case a:case i:case d:return p;default:var h=p&&p.$$typeof;switch(h){case c:case f:case u:return h;default:return t}}case y:case m:case r:return t}}}var O=s,w=l,j=c,E=u,_=n,S=f,k=o,T=y,P=m,I=r,N=a,R=i,L=d,B=!1;function A(e){return x(e)===l}t.typeOf=x,t.AsyncMode=O,t.ConcurrentMode=w,t.ContextConsumer=j,t.ContextProvider=E,t.Element=_,t.ForwardRef=S,t.Fragment=k,t.Lazy=T,t.Memo=P,t.Portal=I,t.Profiler=N,t.StrictMode=R,t.Suspense=L,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===a||e===i||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===u||e.$$typeof===c||e.$$typeof===f||e.$$typeof===h||e.$$typeof===v)},t.isAsyncMode=function(e){return B||(B=!0,g(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||x(e)===s},t.isConcurrentMode=A,t.isContextConsumer=function(e){return x(e)===c},t.isContextProvider=function(e){return x(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===f},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===y},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===r},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===d}}()},"./node_modules/react-is/index.js":function(e,t,n){"use strict";e.exports=n("./node_modules/react-is/cjs/react-is.development.js")},"./src/Component.js":function(e,t,n){"use strict";n.r(t),n("react");var r=n("./node_modules/prop-types/index.js"),o=n("./node_modules/prismic-richtext/dist/prismic-richtext.min.js"),i=n("./src/richtext.js");function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e){var t=e.Component,n=e.elements,r=e.htmlSerializer,c=e.linkResolver,s=e.render,l=(e.renderAsText,e.serializeHyperlink),f=a(e,["Component","elements","htmlSerializer","linkResolver","render","renderAsText","serializeHyperlink"]),d=r||l&&function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=e.reduce((function(e,t){var n=t.type,r=t.fn;return Object.assign({},e,u({},n,r))}),{});return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t[e]?t[e].apply(t,[e].concat(r)):null}}({},[{type:o.Elements.hyperlink,fn:l}]);return s?Object(i.renderRichText)(s,c,d,t,n,f):null};c.propTypes={Component:r.node,linkResolver:r.func,htmlSerializer:r.func,elements:r.object,serializeHyperlink:function(e,t,n){if(e.serializeHyperlink&&e.htmlSerializer)return new Error("You cannot specify both 'htmlSerializer' and 'serializeHyperlink'. The latter will be ignored by '".concat(n,"'."))},render:function(e,t,n){if(!e.render)return new Error("Prop 'render' was not specified in '".concat(n,"'."))}},c.asText=i.asText,c.render=i.renderRichText,c.displayName="RichText",t.default=c},"./src/embeds.js":function(e,t,n){"use strict";function r(e){var t=e.property,n=e.src,r=e.id;window&&function(e,n){var r,o=document.getElementsByTagName("script")[0],i=window[t]||{};document.getElementById(n)||((r=document.createElement("script")).id=n,r.src=e,o.parentNode.insertBefore(r,o),i._e=[],i.ready=function(e){i._e.push(e)})}(n,r)}n.r(t),n.d(t,"createScript",(function(){return r})),n.d(t,"embeds",(function(){return o}));var o={Twitter:{property:"twttr",src:"https://platform.twitter.com/widgets.js",id:"twitter-wjs",load:function(){window&&window.twttr&&window.twttr.widgets.load()}},Facebook:{property:"FB",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3",id:"fb-wjs",load:function(e){window&&window.FB&&window.FB.XFBML.parse(e)}},Instagram:{property:"instgrm",src:"https://www.instagram.com/embed.js",id:"insta-wjs",load:function(){window&&window.instgrm&&window.instgrm.Embeds.process()}}}},"./src/index.js":function(e,t,n){var r=n("./node_modules/prismic-helpers/dist/prismic-helpers.min.js"),o=n("./node_modules/prismic-richtext/dist/prismic-richtext.min.js"),i=n("./src/Component.js");e.exports={Date:r.Date,Elements:o.Elements,Link:r.Link,RichText:i.default}},"./src/richtext.js":function(e,t,n){"use strict";n.r(t),n.d(t,"asText",(function(){return p})),n.d(t,"renderRichText",(function(){return m}));var r=n("react"),o=n("./node_modules/prismic-richtext/dist/prismic-richtext.min.js"),i=n.n(o),a=n("./node_modules/prismic-helpers/dist/prismic-helpers.min.js"),u=n("./src/embeds.js");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s="undefined"!=typeof window?n("./src/embeds.js").createScript:function(){};function l(e,t,n,i,c,l,p){if(t[n])return function(e,t,n,o){return Object(r.createElement)(t,{key:"element-".concat(e,"-").concat(o+1),children:n})}(n,t[n],l,p);switch(n){case o.Elements.heading1:return d("h1",i,l,p);case o.Elements.heading2:return d("h2",i,l,p);case o.Elements.heading3:return d("h3",i,l,p);case o.Elements.heading4:return d("h4",i,l,p);case o.Elements.heading5:return d("h5",i,l,p);case o.Elements.heading6:return d("h6",i,l,p);case o.Elements.paragraph:return d("p",i,l,p);case o.Elements.preformatted:return d("pre",i,l,p);case o.Elements.strong:return d("strong",i,l,p);case o.Elements.em:return d("em",i,l,p);case o.Elements.listItem:case o.Elements.oListItem:return d("li",i,l,p);case o.Elements.list:return d("ul",i,l,p);case o.Elements.oList:return d("ol",i,l,p);case o.Elements.image:return function(e,t,n){var o=t.linkTo?a.Link.url(t.linkTo,e):null,i=t.linkTo&&t.linkTo.target?{target:t.linkTo.target}:{},u=i.target?{rel:"noopener"}:{},c=Object(r.createElement)("img",{src:t.url,alt:t.alt||""});return Object(r.createElement)("p",f({className:[t.label||"","block-img"].join(" ")},n),o?Object(r.createElement)("a",Object.assign({href:o},i,u),c):c)}(e,i,p);case o.Elements.embed:return function(e,t){u.embeds[e.oembed.provider_name]&&s(u.embeds[e.oembed.provider_name]);var n="embed embed-".concat(e.oembed.provider_name.toLowerCase()),o=Object.assign({"data-oembed":e.oembed.embed_url,"data-oembed-type":e.oembed.type,"data-oembed-provider":e.oembed.provider_name,ref:function(t){u.embeds[e.oembed.provider_name]&&u.embeds[e.oembed.provider_name].load(t)}},e.label?{className:"".concat(n," ").concat(e.label)}:{className:n}),i=Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:e.oembed.html}});return Object(r.createElement)("div",f(o,t),i)}(i,p);case o.Elements.hyperlink:return function(e,t,n,o){var i=t.data.target?{target:t.data.target}:{},u=t.data.target?{rel:"noopener"}:{},c=Object.assign({href:a.Link.url(t.data,e)},i,u);return Object(r.createElement)("a",f(c,o),n)}(e,i,l,p);case o.Elements.label:return function(e,t,n){var o=e.data?Object.assign({},{className:e.data.label}):{};return Object(r.createElement)("span",f(o,n),t)}(i,l,p);case o.Elements.span:return function(e){return e?e.split("\n").reduce((function(e,t){if(0===e.length)return[t];var n=(e.length+1)/2-1,o=Object(r.createElement)("br",f({},n));return e.concat([o,t])}),[]):null}(c);default:return null}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object.assign(e,{key:t})}function d(e,t,n,o){var i=t.label?Object.assign({},{className:t.label}):{};return Object(r.createElement)(e,f(i,o),n)}var p=function(e){return i.a.asText(e)},m=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.Fragment,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};if("[object Array]"!==Object.prototype.toString.call(e))return console.warn("Rich text argument should be an Array. Received ".concat("undefined"==typeof richtext?"undefined":c(richtext))),null;var s=i.a.serialize(e,l.bind(null,t,a),n);return Object(r.createElement)(o,u,s)}},0:function(e,t,n){e.exports=n("./src/index.js")},react:function(t,n){t.exports=e}})},e.exports=r(n("q1tI"))}}]);
//# sourceMappingURL=component---src-pages-index-js-ac367ac6e3f94eacbc83.js.map