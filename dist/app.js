(function(t){function e(e){for(var n,i,r=e[0],c=e[1],u=e[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{padding:"10px"}},[a("v-content",[a("Landing")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[a("v-card",{staticClass:"pa-2"},[a("div",{staticClass:"row-header",staticStyle:{height:"38px",overflow:"hidden"}},[a("div",{staticClass:"background-triangle-big "},[t._v("Thống kê hồ sơ theo năm")]),a("div",{staticStyle:{width:"200px"}},[a("v-select",{attrs:{width:"200px",items:t.yearList,"item-value":"value","item-text":"name"},model:{value:t.yearSelected,callback:function(e){t.yearSelected=e},expression:"yearSelected"}})],1)]),a("v-layout",{attrs:{wrap:"","align-center":""}},[a("v-flex",{attrs:{md3:"",xs:"",12:""}},[a("apexchart",{attrs:{type:"pie",width:"400",options:t.chartOptionsYear,series:t.statisticalYear}})],1),a("v-flex",{attrs:{md9:"",xs12:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{md3:"",xs12:"","text-center":""}},[a("h1",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.processCount))]),a("p",[t._v("Tổng số đã giải quyết")])]),a("v-flex",{attrs:{md3:"",xs12:"","text-center":""}},[a("h1",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.releaseCount))]),a("p",[t._v("Hoàn thành")])]),a("v-flex",{attrs:{md3:"",xs12:"","text-center":""}},[a("h1",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.processingCount))]),a("p",[t._v("Đang xử lý")])]),a("v-flex",{attrs:{md3:"",xs12:"","text-center":""}},[a("h1",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.cancelledCount))]),a("p",[t._v("Rút hồ sơ")])])],1)],1)],1)],1)],1),a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pa-2",attrs:{md4:"",xs12:""}},[a("v-card",{staticClass:"pa-2"},[a("div",{staticStyle:{height:"38px",overflow:"hidden"}},[a("div",{staticClass:"background-triangle-big "},[t._v("Sở ban ngành")])]),a("apexchart",{attrs:{type:"pie",width:"400",options:t.chartOptionsSoQuanXa,series:t.statisticalSBN}})],1)],1),a("v-flex",{staticClass:"pa-2",attrs:{md4:"",xs12:""}},[a("v-card",{staticClass:"pa-2"},[a("div",{staticStyle:{height:"38px",overflow:"hidden"}},[a("div",{staticClass:"background-triangle-big "},[t._v("Quận/ Huyện/ Thị xã")])]),a("apexchart",{attrs:{type:"pie",width:"400",options:t.chartOptionsSoQuanXa,series:t.statisticalQUAN_HUYEN}})],1)],1),a("v-flex",{staticClass:"pa-2",attrs:{md4:"",xs12:""}},[a("v-card",{staticClass:"pa-2"},[a("div",{staticStyle:{height:"38px",overflow:"hidden"}},[a("div",{staticClass:"background-triangle-big "},[t._v("Xã/ Phường/ Thị trấn")])]),a("apexchart",{attrs:{type:"pie",width:"400",options:t.chartOptionsSoQuanXa,series:t.statisticalXA_PHUONG}})],1)],1)],1)],1),a("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[a("v-card",{staticClass:"pa-2"},[a("div",{staticClass:"row-header",staticStyle:{height:"38px",overflow:"hidden"}},[a("div",{staticClass:"background-triangle-big "},[t._v("Thống kê theo tháng")]),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{md7:""}},[a("div",{staticStyle:{display:"flex","align-items":"center",height:"40px"}},[a("span",{staticClass:"mx-3",class:{"groupcode-active":"SBN"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(e){t.groupCode="SBN"}}},[t._v("SỞ BAN NGÀNH")]),a("span",{staticClass:"mx-3",class:{"groupcode-active":"QUAN_HUYEN"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(e){t.groupCode="QUAN_HUYEN"}}},[t._v("QUẬN/ HUYỆN/ THỊ XÃ")]),a("span",{staticClass:"mx-3",class:{"groupcode-active":"XA_PHUONG"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(e){t.groupCode="XA_PHUONG"}}},[t._v("XÃ/ PHƯỜNG/ THỊ TRẤN")])])]),a("v-flex",{staticClass:"text-right",attrs:{md5:""}},[a("v-select",{staticStyle:{width:"27%",display:"inline-block",margin:"0 10px"},attrs:{items:t.monthList,"item-text":"name","item-value":"value"},model:{value:t.monthSelected,callback:function(e){t.monthSelected=e},expression:"monthSelected"}}),a("v-select",{staticStyle:{width:"27%",display:"inline-block",margin:"0 10px"},attrs:{items:t.yearList,"item-text":"name","item-value":"value"},model:{value:t.yearSelected2,callback:function(e){t.yearSelected2=e},expression:"yearSelected2"}}),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"mx-2",attrs:{text:t.isTable,small:"",color:"#1976d2"},on:{click:function(e){t.isTable=!1}}},n),[a("i",{staticClass:"fa fa-pie-chart",attrs:{"aria-hidden":"true"}})])]}}])},[a("span",[t._v("Xem dạng biểu đồ")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"mx-2",attrs:{text:!t.isTable,small:"",color:"#1976d2"},on:{click:function(e){t.isTable=!0}}},n),[a("i",{staticClass:"fa fa-table",attrs:{"aria-hidden":"true"}})])]}}])},[a("span",[t._v("Xem dạng bảng biểu")])])],1)],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{md3:""}},["XA_PHUONG"===t.groupCode?a("v-select",{staticClass:"my-2",attrs:{items:t.listDoiTuong,"item-text":"itemName","item-value":"itemCode"},model:{value:t.distGroupSelected,callback:function(e){t.distGroupSelected=e},expression:"distGroupSelected"}}):t._e()],1),a("v-flex",{attrs:{xs12:""}},[t.isTable?t._e():a("apexchart",{attrs:{type:"bar",height:"330",options:t.chartOptionsMonth,series:t.statisticalMonth}}),t.isTable?a("v-data-table",{attrs:{"hide-default-footer":""},scopedSlots:t._u([{key:"header",fn:function(e){e.props.headers;return[a("thead",[a("tr",[a("th",{staticClass:"text-center",attrs:{rowspan:"3"}},[a("span",[t._v("STT")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"3"}},[a("span",[t._v("Đơn vị")])]),a("th",{staticClass:"text-center",attrs:{colspan:"5"}},[a("span",[t._v("Nhận giải quyết")])]),a("th",{staticClass:"text-center",attrs:{colspan:"7"}},[a("span",[t._v("Kết quả nhận giải quyết")])]),a("th",{staticClass:"text-center",attrs:{colspan:"3"}},[a("span",[t._v("Đang giải quyết")])]),a("th",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[a("span",[t._v("Tạm dừng bổ sung điều kiện")])]),a("th",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[a("span",[t._v("Rút không giải quyết")])]),a("th",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[a("span",[t._v("Tỉ lệ sớm và đúng hạn")])])]),a("tr",[a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Tổng số")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Tồn trước")])]),a("th",{staticClass:"text-center",attrs:{colspan:"3"}},[a("span",[t._v("Nhận trong kì")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Tổng số")])]),a("th",{staticClass:"text-center",attrs:{colspan:"3"}},[a("span",[t._v("Tình hình thực hiện")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Từ chối giải quyết")])]),a("th",{staticClass:"text-center",attrs:{colspan:"2"}},[a("span",[t._v("Trả kết quả")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Tổng số")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Còn hạn")])]),a("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[a("span",[t._v("Quá hạn")])])]),a("tr",[a("th",{staticClass:"text-center"},[a("span",[t._v("Tổng số")])]),a("th",{staticClass:"text-center"},[a("span",[t._v("Một cửa")])]),a("th",{staticClass:"text-center"},[a("span",[t._v("Trước hạn")])]),a("th",{staticClass:"text-center"},[a("span",[t._v("Đúng hạn")])]),a("th",{staticClass:"text-center"},[a("span",[t._v("Quá hạn")])]),a("th",{staticClass:"text-center"},[a("span",[t._v("Đã trả")])]),a("th",{staticClass:"text-center"},[a("span",[t._v("Chưa trả")])])])])]}},{key:"body",fn:function(e){e.items;return[a("tbody",[a("tr",[a("td",[t._v("a")])])])]}}],null,!1,1990976908)}):t._e()],1),t._v(" "+t._s(t.yearSelected)+" ")],1)],1)],1)],1)],1)},r=[],c=a("bc3a"),u=a.n(c),l={components:{},data:function(){return{groupCode:"SBN",yearSelected:(new Date).getFullYear(),yearSelected2:(new Date).getFullYear(),monthSelected:(new Date).getMonth()+1,distGroupSelected:"",isTable:!1,statisticalYear:[44,55],statisticalSBN:[44,55,12,23,34,52],statisticalQUAN_HUYEN:[44,55,12,23,34,52],statisticalXA_PHUONG:[44,55,12,23,34,52],statisticalMonth:[{name:"Hồ sơ nộp trực tiếp",data:[44,55,41,64,22,43,21]},{name:"Hồ sơ nộp trực tuyến",data:[53,32,33,52,13,44,32]}],chartOptionsYear:{labels:["Xử lý đúng hạn","Xử lý quá hạn"]},chartOptionsMonth:{chart:{type:"bar",height:430},plotOptions:{bar:{horizontal:!0,dataLabels:{position:"top"}}},dataLabels:{enabled:!0,offsetX:-6,style:{fontSize:"12px",colors:["#fff"]}},stroke:{show:!0,width:1,colors:["#fff"]},xaxis:{categories:["Xã 01 ","Xã 01","Xã 01","Xã 01","Xã 01","Xã 01","Xã 01"]}},chartOptionsSoQuanXa:{labels:["Trong hạn","Quá hạn","Hoàn thành đúng hạn","Hoàn thành quá hạn","Xin rút","Chờ bổ sung"]},monthList:[{name:"Tháng 1",value:1},{name:"Tháng 2",value:2},{name:"Tháng 3",value:3},{name:"Tháng 4",value:4},{name:"Tháng 5",value:5},{name:"Tháng 6",value:6},{name:"Tháng 7",value:7},{name:"Tháng 8",value:8},{name:"Tháng 9",value:9},{name:"Tháng 10",value:10},{name:"Tháng 11",value:11},{name:"Tháng 12",value:12}],listDoiTuong:[],statistics:{betimesCount:1,cancelledCount:0,companyId:0,deniedCount:0,domainCode:"",domainName:"",doneCount:21,dossierOnline3Count:0,dossierOnline4Count:0,govAgencyCode:"",govAgencyName:"",groupId:223437,insideCount:0,interoperatingCount:95,month:0,onegateCount:1,onlineCount:10,ontimeCount:2,ontimePercentage:14,outsideCount:0,overdueCount:185,overtimeCount:18,overtimeInside:18,overtimeOutside:0,processCount:241,processingCount:194,receiveDossierSatCount:0,receivedCount:11,releaseCount:21,releaseDossierSatCount:0,releasingCount:0,remainingCount:230,reporting:!1,saturdayCount:0,system:0,totalCount:241,undueCount:9,unresolvedCount:0,viaPostalCount:0,waitingCount:26,year:2020},statisticsSBN:{betimesCount:1,cancelledCount:0,companyId:0,deniedCount:0,domainCode:"",domainName:"",doneCount:21,dossierOnline3Count:0,dossierOnline4Count:0,govAgencyCode:"",govAgencyName:"",groupId:223437,insideCount:0,interoperatingCount:95,month:0,onegateCount:1,onlineCount:10,ontimeCount:2,ontimePercentage:14,outsideCount:0,overdueCount:185,overtimeCount:18,overtimeInside:18,overtimeOutside:0,processCount:241,processingCount:194,receiveDossierSatCount:0,receivedCount:11,releaseCount:21,releaseDossierSatCount:0,releasingCount:0,remainingCount:230,reporting:!1,saturdayCount:0,system:0,totalCount:241,undueCount:9,unresolvedCount:0,viaPostalCount:0,waitingCount:26,year:2020},statisticsQUAN_HUYEN:{betimesCount:1,cancelledCount:0,companyId:0,deniedCount:0,domainCode:"",domainName:"",doneCount:21,dossierOnline3Count:0,dossierOnline4Count:0,govAgencyCode:"",govAgencyName:"",groupId:223437,insideCount:0,interoperatingCount:95,month:0,onegateCount:1,onlineCount:10,ontimeCount:2,ontimePercentage:14,outsideCount:0,overdueCount:185,overtimeCount:18,overtimeInside:18,overtimeOutside:0,processCount:241,processingCount:194,receiveDossierSatCount:0,receivedCount:11,releaseCount:21,releaseDossierSatCount:0,releasingCount:0,remainingCount:230,reporting:!1,saturdayCount:0,system:0,totalCount:241,undueCount:9,unresolvedCount:0,viaPostalCount:0,waitingCount:26,year:2020},statisticsXA_PHUONG:{betimesCount:1,cancelledCount:0,companyId:0,deniedCount:0,domainCode:"",domainName:"",doneCount:21,dossierOnline3Count:0,dossierOnline4Count:0,govAgencyCode:"",govAgencyName:"",groupId:223437,insideCount:0,interoperatingCount:95,month:0,onegateCount:1,onlineCount:10,ontimeCount:2,ontimePercentage:14,outsideCount:0,overdueCount:185,overtimeCount:18,overtimeInside:18,overtimeOutside:0,processCount:241,processingCount:194,receiveDossierSatCount:0,receivedCount:11,releaseCount:21,releaseDossierSatCount:0,releasingCount:0,remainingCount:230,reporting:!1,saturdayCount:0,system:0,totalCount:241,undueCount:9,unresolvedCount:0,viaPostalCount:0,waitingCount:26,year:2020}}},computed:{yearList:function(){for(var t=[],e=(new Date).getFullYear(),a=0;a<=10;a++)t.push({name:"Năm "+(e-a),value:e-a});return t}},created:function(){var t=this;this.$nextTick((function(){t.getDictgroups("XA_PHUONG"),t.getStatisticsYear(),t.getStatisticsYearSBN(),t.getStatisticsYearQUAN_HUYEN(),t.getStatisticsYearXA_PHUONG()}))},watch:{yearSelected:function(){this.getStatisticsYear(),this.getStatisticsYearSBN(),this.getStatisticsYearQUAN_HUYEN(),this.getStatisticsYearXA_PHUONG()},yearSelected2:function(){this.getStatisticsMonth(this.groupCode)},monthSelected:function(){this.getStatisticsMonth(this.groupCode)},distGroupSelected:function(){this.getStatisticsMonth(this.groupCode)},groupCode:function(t){this.getStatisticsMonth(t)}},methods:{getDictgroups:function(t){var e=this,a=window.location.origin,n={url:a+"/o/rest/v2/dictcollections/REPORT_GROUP/dictgroups/"+t+"/dictitems",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"}};u.a.request(n).then((function(t){e.listDoiTuong=t.data.data})).catch()},getStatisticsYear:function(){var t=this,e=window.location.origin,a={url:e+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",agency:"total",system:"total",year:t.yearSelected,month:0}};u.a.request(a).then((function(e){t.statistics=e.data.data[0],t.statisticalYear=[e.data.data[0].waitingCount,e.data.data[0].ontimeCount]})).catch()},getStatisticsYearSBN:function(){var t=this,e=window.location.origin,a={url:e+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",agency:"total",system:"total",year:t.yearSelected,month:0,groupCode:"SBN"}};u.a.request(a).then((function(e){t.statisticsSBN=e.data.data[0],t.statisticalSBN=[e.data.data[0].undueCount,e.data.data[0].overdueCount,e.data.data[0].ontimeCount,e.data.data[0].overtimeCount,e.data.data[0].cancelledCount,e.data.data[0].waitingCount]})).catch()},getStatisticsYearQUAN_HUYEN:function(){var t=this,e=window.location.origin,a={url:e+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",agency:"total",system:"total",year:t.yearSelected,month:0,groupCode:"QUAN_HUYEN"}};u.a.request(a).then((function(e){t.statisticsQUAN_HUYEN=e.data.data[0],t.statisticalQUAN_HUYEN=[e.data.data[0].undueCount,e.data.data[0].overdueCount,e.data.data[0].ontimeCount,e.data.data[0].overtimeCount,e.data.data[0].cancelledCount,e.data.data[0].waitingCount]})).catch()},getStatisticsYearXA_PHUONG:function(){var t=this,e=window.location.origin,a={url:e+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",agency:"total",system:"total",year:t.yearSelected,month:0,groupCode:"XA_PHUONG"}};u.a.request(a).then((function(e){t.statisticsXA_PHUONG=e.data.data[0],t.statisticalXA_PHUONG=[e.data.data[0].undueCount,e.data.data[0].overdueCount,e.data.data[0].ontimeCount,e.data.data[0].overtimeCount,e.data.data[0].cancelledCount,e.data.data[0].waitingCount]})).catch()},getStatisticsMonth:function(t){var e=this,a=window.location.origin,n={};n="XA_PHUONG"===t?{url:a+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",agency:"total",system:"total",year:e.yearSelected2,month:e.monthSelected,groupCode:t,parentAgency:e.distGroupSelected}}:{url:a+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",agency:"total",system:"total",year:e.yearSelected2,month:e.monthSelected,groupCode:t}},u.a.request(n).then((function(t){e.statisticsXA_PHUONG=t.data.data[0],e.statisticalXA_PHUONG=[t.data.data[0].undueCount,t.data.data[0].overdueCount,t.data.data[0].ontimeCount,t.data.data[0].overtimeCount,t.data.data[0].cancelledCount,t.data.data[0].waitingCount]})).catch()}}},d=l,p=(a("7869"),a("2877")),h=a("6544"),g=a.n(h),C=a("8336"),v=a("b0af"),m=a("a523"),y=a("8fea"),f=a("0e8f"),S=a("a722"),x=a("b974"),w=a("3a2f"),_=Object(p["a"])(d,i,r,!1,null,null,null),b=_.exports;g()(_,{VBtn:C["a"],VCard:v["a"],VContainer:m["a"],VDataTable:y["a"],VFlex:f["a"],VLayout:S["a"],VSelect:x["a"],VTooltip:w["a"]});var N={name:"App",components:{Landing:b},data:function(){return{}}},T=N,O=a("7496"),A=a("a75b"),U=Object(p["a"])(T,s,o,!1,null,null,null),H=U.exports;g()(U,{VApp:O["a"],VContent:A["a"]});a("1f54");var X=a("f309");n["a"].use(X["a"]);var P=new X["a"]({icons:{iconfont:"fa4"}}),k=a("1321"),G=a.n(k);n["a"].use(G.a),n["a"].component("apexchart",G.a),n["a"].config.productionTip=!1;var Y=void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0;u.a.defaults.withCredentials=!0,u.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",u.a.defaults.headers.common["groupId"]=Y,new n["a"]({vuetify:P,render:function(t){return t(H)}}).$mount("#app_report_charts")},7869:function(t,e,a){"use strict";var n=a("83d2"),s=a.n(n);s.a},"83d2":function(t,e,a){}});
//# sourceMappingURL=app.js.map