(function(t){function a(a){for(var e,i,o=a[0],c=a[1],l=a[2],h=0,u=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);p&&p(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,a=0;a<r.length;a++){for(var s=r[a],e=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(e=!1)}e&&(r.splice(a--,1),t=i(i.s=s[0]))}return t}var e={},n={app:0},r=[];function i(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,a,s){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)i.d(s,e,function(a){return t[a]}.bind(null,e));return s},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var p=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-app",{staticStyle:{padding:"10px"}},[s("v-content",[s("Landing")],1)],1)},r=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[s("v-card",{staticClass:"pa-2"},[s("div",{staticClass:"row-header",staticStyle:{height:"38px",overflow:"hidden"}},[s("div",{staticClass:"background-triangle-big "},[t._v("Thống kê hồ sơ theo năm")]),s("div",{staticStyle:{width:"200px"}},[s("v-select",{attrs:{width:"200px",items:t.yearList,"item-value":"value","item-text":"name"}})],1)]),s("v-layout",{attrs:{wrap:"","align-center":""}},[s("v-flex",{attrs:{md3:"",xs:"",12:""}},[s("apexchart",{attrs:{type:"pie",width:"400",options:t.chartOptionsYear,series:t.statisticalYear}})],1),s("v-flex",{attrs:{md9:"",xs12:""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{md3:"",xs12:"","text-center":""}},[s("h1",{staticStyle:{color:"#1976d2"}},[t._v("324233")]),s("p",[t._v("Tổng số đã giải quyết")])]),s("v-flex",{attrs:{md3:"",xs12:"","text-center":""}},[s("h1",{staticStyle:{color:"#1976d2"}},[t._v("324233")]),s("p",[t._v("Hoàn thành")])]),s("v-flex",{attrs:{md3:"",xs12:"","text-center":""}},[s("h1",{staticStyle:{color:"#1976d2"}},[t._v("324233")]),s("p",[t._v("Đang xử lý")])]),s("v-flex",{attrs:{md3:"",xs12:"","text-center":""}},[s("h1",{staticStyle:{color:"#1976d2"}},[t._v("324233")]),s("p",[t._v("Rút hồ sơ")])])],1)],1)],1)],1)],1),s("v-flex",{attrs:{xs12:""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{staticClass:"pa-2",attrs:{md4:"",xs12:""}},[s("v-card",{staticClass:"pa-2"},[s("div",{staticStyle:{height:"38px",overflow:"hidden"}},[s("div",{staticClass:"background-triangle-big "},[t._v("Sở ban ngành")])]),s("apexchart",{attrs:{type:"pie",width:"400",options:t.chartOptionsSoQuanXa,series:t.statisticalSo}})],1)],1),s("v-flex",{staticClass:"pa-2",attrs:{md4:"",xs12:""}},[s("v-card",{staticClass:"pa-2"},[s("div",{staticStyle:{height:"38px",overflow:"hidden"}},[s("div",{staticClass:"background-triangle-big "},[t._v("Quận/ Huyện/ Thị xã")])]),s("apexchart",{attrs:{type:"pie",width:"400",options:t.chartOptionsSoQuanXa,series:t.statisticalQuan}})],1)],1),s("v-flex",{staticClass:"pa-2",attrs:{md4:"",xs12:""}},[s("v-card",{staticClass:"pa-2"},[s("div",{staticStyle:{height:"38px",overflow:"hidden"}},[s("div",{staticClass:"background-triangle-big "},[t._v("Xã/ Phường/ Thị trấn")])]),s("apexchart",{attrs:{type:"pie",width:"400",options:t.chartOptionsSoQuanXa,series:t.statisticalXa}})],1)],1)],1)],1),s("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[s("v-card",{staticClass:"pa-2"},[s("div",{staticClass:"row-header",staticStyle:{height:"38px",overflow:"hidden"}},[s("div",{staticClass:"background-triangle-big "},[t._v("Thống kê theo tháng")]),s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{md7:""}},[s("div",{staticStyle:{display:"flex","align-items":"center",height:"40px"}},[s("span",{staticClass:"mx-3",class:{"groupcode-active":"SBN"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(a){t.groupCode="SBN"}}},[t._v("SỞ BAN NGÀNH")]),s("span",{staticClass:"mx-3",class:{"groupcode-active":"QUAN_HUYEN"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(a){t.groupCode="QUAN_HUYEN"}}},[t._v("QUẬN/ HUYỆN/ THỊ XÃ")]),s("span",{staticClass:"mx-3",class:{"groupcode-active":"XA_PHUONG"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(a){t.groupCode="XA_PHUONG"}}},[t._v("XÃ/ PHƯỜNG/ THỊ TRẤN")])])]),s("v-flex",{staticClass:"text-right",attrs:{md5:""}},[s("v-select",{staticStyle:{width:"20%",display:"inline-block",margin:"0 10px"},attrs:{items:t.monthList}}),s("v-select",{staticStyle:{width:"20%",display:"inline-block",margin:"0 10px"},attrs:{items:t.yearList,"item-text":"name","item-value":"value"}}),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[s("v-btn",t._g({staticClass:"mx-2",attrs:{text:t.isTable,small:"",color:"#1976d2"},on:{click:function(a){t.isTable=!1}}},e),[s("i",{staticClass:"fa fa-pie-chart",attrs:{"aria-hidden":"true"}})])]}}])},[s("span",[t._v("Xem dạng biểu đồ")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[s("v-btn",t._g({staticClass:"mx-2",attrs:{text:!t.isTable,small:"",color:"#1976d2"},on:{click:function(a){t.isTable=!0}}},e),[s("i",{staticClass:"fa fa-table",attrs:{"aria-hidden":"true"}})])]}}])},[s("span",[t._v("Xem dạng bảng biểu")])])],1)],1)],1),s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{md3:""}},[s("v-select",{staticClass:"my-2",attrs:{items:t.listDoiTuong,"item-text":"itemName","item-value":"itemCode"}})],1),s("v-flex",{attrs:{xs12:""}},[t.isTable?t._e():s("apexchart",{attrs:{type:"bar",height:"330",options:t.chartOptionsMonth,series:t.statisticalMonth}}),t.isTable?s("v-data-table",{attrs:{"hide-default-footer":""},scopedSlots:t._u([{key:"header",fn:function(a){a.props.headers;return[s("thead",[s("tr",[s("th",{staticClass:"text-center",attrs:{rowspan:"3"}},[s("span",[t._v("STT")])]),s("th",{staticClass:"text-center",attrs:{rowspan:"3"}},[s("span",[t._v("Đơn vị")])]),s("th",{staticClass:"text-center",attrs:{colspan:"5"}},[s("span",[t._v("Nhận giải quyết")])]),s("th",{staticClass:"text-center",attrs:{colspan:"7"}},[s("span",[t._v("Kết quả nhận giải quyết")])]),s("th",{staticClass:"text-center",attrs:{colspan:"3"}},[s("span",[t._v("Đang giải quyết")])]),s("th",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[s("span",[t._v("Tạm dừng bổ sung điều kiện")])]),s("th",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[s("span",[t._v("Rút không giải quyết")])]),s("th",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[s("span",[t._v("Tỉ lệ sớm và đúng hạn")])])]),s("tr",[s("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[s("span",[t._v("Tổng số")])]),s("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[s("span",[t._v("Tồn trước")])]),s("th",{staticClass:"text-center",attrs:{colspan:"3"}},[s("span",[t._v("Nhận trong kì")])]),s("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[s("span",[t._v("Tổng số")])]),s("th",{staticClass:"text-center",attrs:{colspan:"3"}},[s("span",[t._v("Tình hình thực hiện")])]),s("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[s("span",[t._v("Từ chối giải quyết")])]),s("th",{staticClass:"text-center",attrs:{colspan:"2"}},[s("span",[t._v("Trả kết quả")])]),s("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[s("span",[t._v("Tổng số")])]),s("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[s("span",[t._v("Còn hạn")])]),s("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[s("span",[t._v("Quá hạn")])])]),s("tr",[s("th",{staticClass:"text-center"},[s("span",[t._v("Tổng số")])]),s("th",{staticClass:"text-center"},[s("span",[t._v("Một cửa")])]),s("th",{staticClass:"text-center"},[s("span",[t._v("Trước hạn")])]),s("th",{staticClass:"text-center"},[s("span",[t._v("Đúng hạn")])]),s("th",{staticClass:"text-center"},[s("span",[t._v("Quá hạn")])]),s("th",{staticClass:"text-center"},[s("span",[t._v("Đã trả")])]),s("th",{staticClass:"text-center"},[s("span",[t._v("Chưa trả")])])])])]}},{key:"body",fn:function(a){a.items;return[s("tbody",[s("tr",[s("td",[t._v("a")])])])]}}],null,!1,1990976908)}):t._e()],1)],1)],1)],1)],1)],1)},o=[],c=s("bc3a"),l=s.n(c),p={components:{},data:function(){return{groupCode:"SBN",isTable:!1,statisticalYear:[44,55],statisticalSo:[44,55,12,23,34,52],statisticalQuan:[44,55,12,23,34,52],statisticalXa:[44,55,12,23,34,52],statisticalMonth:[{name:"Hồ sơ nộp trực tiếp",data:[44,55,41,64,22,43,21]},{name:"Hồ sơ nộp trực tuyến",data:[53,32,33,52,13,44,32]}],chartOptionsYear:{labels:["Xử lý đúng hạn","Xử lý quá hạn"]},chartOptionsMonth:{chart:{type:"bar",height:430},plotOptions:{bar:{horizontal:!0,dataLabels:{position:"top"}}},dataLabels:{enabled:!0,offsetX:-6,style:{fontSize:"12px",colors:["#fff"]}},stroke:{show:!0,width:1,colors:["#fff"]},xaxis:{categories:["Xã 01 ","Xã 01","Xã 01","Xã 01","Xã 01","Xã 01","Xã 01"]}},chartOptionsSoQuanXa:{labels:["Trong hạn","Quá hạn","Hoàn thành đúng hạn","Hoàn thành quá hạn","Xin rút","Chờ bổ sung"]},monthList:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],listDoiTuong:[]}},computed:{yearList:function(){for(var t=[],a=(new Date).getFullYear(),s=0;s<=10;s++)t.push({name:"Năm "+(a-s),value:a-s});return t}},created:function(){var t=this;this.$nextTick((function(){t.getDictgroups(t.groupCode)}))},methods:{getDictgroups:function(t){var a=this,s=window.location.origin,e={url:s+"/o/rest/v2/dictcollections/REPORT_GROUP/dictgroups/"+t+"/dictitems",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"}};l.a.request(e).then((function(t){a.listDoiTuong=t.data.data})).catch()}}},h=p,u=(s("7869"),s("2877")),d=s("6544"),v=s.n(d),g=s("8336"),f=s("b0af"),x=s("a523"),y=s("8fea"),m=s("0e8f"),_=s("a722"),b=s("b974"),C=s("3a2f"),w=Object(u["a"])(h,i,o,!1,null,null,null),T=w.exports;v()(w,{VBtn:g["a"],VCard:f["a"],VContainer:x["a"],VDataTable:y["a"],VFlex:m["a"],VLayout:_["a"],VSelect:b["a"],VTooltip:C["a"]});var S={name:"App",components:{Landing:T},data:function(){return{}}},k=S,O=s("7496"),X=s("a75b"),N=Object(u["a"])(k,n,r,!1,null,null,null),H=N.exports;v()(N,{VApp:O["a"],VContent:X["a"]});s("1f54");var P=s("f309");e["a"].use(P["a"]);var Q=new P["a"]({icons:{iconfont:"fa4"}}),j=s("1321"),q=s.n(j);e["a"].use(q.a),e["a"].component("apexchart",q.a),e["a"].config.productionTip=!1,new e["a"]({vuetify:Q,render:function(t){return t(H)}}).$mount("#app_report_charts")},7869:function(t,a,s){"use strict";var e=s("83d2"),n=s.n(e);n.a},"83d2":function(t,a,s){}});
//# sourceMappingURL=app.js.map