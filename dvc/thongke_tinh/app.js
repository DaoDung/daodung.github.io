(function(t){function a(a){for(var n,r,o=a[0],c=a[1],l=a[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(a);while(p.length)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,o=1;o<e.length;o++){var c=e[o];0!==s[c]&&(n=!1)}n&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},s={app:0},i=[];function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var d=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticStyle:{padding:"10px"}},[e("v-content",[e("Landing")],1)],1)},i=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{width:"1300px",margin:"0 auto"}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-card",{staticClass:"pa-2"},[e("div",{staticClass:"row-header",staticStyle:{height:"38px",overflow:"hidden"}},[e("div",{staticClass:"background-triangle-big1 "},[t._v("THỐNG KÊ THEO NĂM")]),e("div",{staticStyle:{width:"200px"}},[e("v-select",{attrs:{width:"200px",items:t.yearList,"item-value":"value","item-text":"name"},model:{value:t.yearSelected,callback:function(a){t.yearSelected=a},expression:"yearSelected"}})],1)]),e("v-layout",{attrs:{wrap:"","align-center":""}},[e("v-flex",{attrs:{md3:"",xs:"",12:""}},[e("apexchart",{attrs:{type:"pie",width:"400",options:t.chartOptionsYear,series:t.statisticalYear}})],1),e("v-flex",{attrs:{md9:"",xs12:""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{md3:"",xs12:"","text-center":""}},[e("h1",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.processCount))]),e("p",[t._v("Tổng số đã giải quyết")])]),e("v-flex",{attrs:{md3:"",xs12:"","text-center":""}},[e("h1",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.releaseCount))]),e("p",[t._v("Hoàn thành")])]),e("v-flex",{attrs:{md3:"",xs12:"","text-center":""}},[e("h1",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.processingCount))]),e("p",[t._v("Đang xử lý")])]),e("v-flex",{attrs:{md3:"",xs12:"","text-center":""}},[e("h1",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.cancelledCount))]),e("p",[t._v("Rút hồ sơ")])])],1)],1)],1)],1)],1),e("v-flex",{attrs:{xs12:""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"pa-2",attrs:{md4:"",xs12:""}},[e("v-card",{staticClass:"pa-2"},[e("div",{staticStyle:{height:"38px",overflow:"hidden"}},[e("div",{staticClass:"background-triangle-big1 "},[t._v("SỞ BAN NGÀNH")])]),e("apexchart",{attrs:{type:"pie",width:"400",options:t.chartOptionsSoQuanXa,series:t.statisticalSBN}})],1)],1),e("v-flex",{staticClass:"pa-2",attrs:{md4:"",xs12:""}},[e("v-card",{staticClass:"pa-2"},[e("div",{staticStyle:{height:"38px",overflow:"hidden"}},[e("div",{staticClass:"background-triangle-big1 "},[t._v("QUẬN/ HUYỆN/ THỊ XÃ")])]),e("apexchart",{attrs:{type:"pie",width:"400",options:t.chartOptionsSoQuanXa,series:t.statisticalQUAN_HUYEN}})],1)],1),e("v-flex",{staticClass:"pa-2",attrs:{md4:"",xs12:""}},[e("v-card",{staticClass:"pa-2"},[e("div",{staticStyle:{height:"38px",overflow:"hidden"}},[e("div",{staticClass:"background-triangle-big1 "},[t._v("XÃ/ PHƯỜNG/ THỊ TRẤN")])]),e("div",{staticStyle:{width:"100%"}},[e("apexchart",{attrs:{type:"pie",width:"400",options:t.chartOptionsSoQuanXa,series:t.statisticalXA_PHUONG}})],1)])],1)],1)],1),e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-card",{staticClass:"pa-2"},[e("div",{staticClass:"row-header",staticStyle:{height:"38px",overflow:"hidden"}},[e("div",{staticClass:"background-triangle-big1",staticStyle:{width:"228px"}},[t._v("THỐNG KÊ THEO THÁNG")]),e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{md7:""}},[e("div",{staticStyle:{display:"flex","align-items":"center",height:"40px"}},[e("span",{staticClass:"mx-3",class:{"groupcode-active":"SBN"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(a){t.groupCode="SBN"}}},[t._v("SỞ BAN NGÀNH")]),e("span",{staticClass:"mx-3",class:{"groupcode-active":"QUAN_HUYEN"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(a){t.groupCode="QUAN_HUYEN"}}},[t._v("QUẬN/ HUYỆN/ THỊ XÃ")]),e("span",{staticClass:"mx-3",class:{"groupcode-active":"XA_PHUONG"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(a){t.groupCode="XA_PHUONG"}}},[t._v("XÃ/ PHƯỜNG/ THỊ TRẤN")])])]),e("v-flex",{staticClass:"text-right",attrs:{md5:""}},[e("v-select",{staticStyle:{width:"27%",display:"inline-block",margin:"0 10px"},attrs:{items:t.monthList,"item-text":"name","item-value":"value"},model:{value:t.monthSelected,callback:function(a){t.monthSelected=a},expression:"monthSelected"}}),e("v-select",{staticStyle:{width:"27%",display:"inline-block",margin:"0 10px"},attrs:{items:t.yearList,"item-text":"name","item-value":"value"},model:{value:t.yearSelected2,callback:function(a){t.yearSelected2=a},expression:"yearSelected2"}}),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-btn",t._g({staticClass:"mx-2",attrs:{text:t.isTable,small:"",color:"#1976d2"},on:{click:function(a){t.isTable=!1}}},n),[e("i",{staticClass:"fa fa-pie-chart",attrs:{"aria-hidden":"true"}})])]}}])},[e("span",[t._v("Xem dạng biểu đồ")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-btn",t._g({staticClass:"mx-2",attrs:{text:!t.isTable,small:"",color:"#1976d2"},on:{click:function(a){t.isTable=!0}}},n),[e("i",{staticClass:"fa fa-table",attrs:{"aria-hidden":"true"}})])]}}])},[e("span",[t._v("Xem dạng bảng biểu")])])],1)],1)],1),e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{md3:""}},["XA_PHUONG"===t.groupCode?e("v-select",{staticClass:"my-2",attrs:{items:t.listDoiTuong,"item-text":"itemName","item-value":"itemCode"},model:{value:t.distGroupSelected,callback:function(a){t.distGroupSelected=a},expression:"distGroupSelected"}}):t._e()],1),e("v-flex",{attrs:{xs12:""}},[t.isTable||t.isLoading?t._e():e("apexchart",{attrs:{height:t.heightChart,options:t.chartOptionsMonth,series:t.statisticalMonth}}),t.isTable?e("v-data-table",{staticClass:"my-2",attrs:{"hide-default-footer":""},scopedSlots:t._u([{key:"header",fn:function(a){a.props.headers;return[e("thead",[e("tr",[e("th",{staticClass:"text-center",attrs:{rowspan:"3"}},[e("span",[t._v("STT")])]),e("th",{staticClass:"text-center",attrs:{rowspan:"3"}},[e("span",[t._v("Đơn vị")])]),e("th",{staticClass:"text-center",attrs:{colspan:"5"}},[e("span",[t._v("Nhận giải quyết")])]),e("th",{staticClass:"text-center",attrs:{colspan:"7"}},[e("span",[t._v("Kết quả nhận giải quyết")])]),e("th",{staticClass:"text-center",attrs:{colspan:"3"}},[e("span",[t._v("Đang giải quyết")])]),e("th",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[e("span",[t._v("Tạm dừng bổ sung điều kiện")])]),e("th",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[e("span",[t._v("Rút không giải quyết")])]),e("th",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[e("span",[t._v("Tỉ lệ sớm và đúng hạn")])])]),e("tr",[e("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[e("span",[t._v("Tổng số")])]),e("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[e("span",[t._v("Tồn trước")])]),e("th",{staticClass:"text-center",attrs:{colspan:"3"}},[e("span",[t._v("Nhận trong kì")])]),e("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[e("span",[t._v("Tổng số")])]),e("th",{staticClass:"text-center",attrs:{colspan:"3"}},[e("span",[t._v("Tình hình thực hiện")])]),e("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[e("span",[t._v("Từ chối giải quyết")])]),e("th",{staticClass:"text-center",attrs:{colspan:"2"}},[e("span",[t._v("Trả kết quả")])]),e("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[e("span",[t._v("Tổng số")])]),e("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[e("span",[t._v("Còn hạn")])]),e("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[e("span",[t._v("Quá hạn")])])]),e("tr",[e("th",{staticClass:"text-center"},[e("span",[t._v("Tổng số")])]),e("th",{staticClass:"text-center"},[e("span",[t._v("Một cửa")])]),e("th",{staticClass:"text-center"},[e("span",[t._v("Trực tuyến")])]),e("th",{staticClass:"text-center"},[e("span",[t._v("Trước hạn")])]),e("th",{staticClass:"text-center"},[e("span",[t._v("Đúng hạn")])]),e("th",{staticClass:"text-center"},[e("span",[t._v("Quá hạn")])]),e("th",{staticClass:"text-center"},[e("span",[t._v("Đã trả")])]),e("th",{staticClass:"text-center"},[e("span",[t._v("Chưa trả")])])])])]}},{key:"body",fn:function(a){a.items;return[e("tbody",[e("tr",{staticClass:"note__column"},[e("td",{attrs:{align:"center"}},[t._v("(1)")]),e("td",{attrs:{align:"center"}},[t._v("(2)")]),e("td",{attrs:{align:"center"}},[t._v("(3)")]),e("td",{attrs:{align:"center"}},[t._v("(4)")]),e("td",{attrs:{align:"center"}},[t._v("(5)")]),e("td",{attrs:{align:"center"}},[t._v("(6)")]),e("td",{attrs:{align:"center"}},[t._v("(7)")]),e("td",{attrs:{align:"center"}},[t._v("(8)")]),e("td",{attrs:{align:"center"}},[t._v("(9)")]),e("td",{attrs:{align:"center"}},[t._v("(10)")]),e("td",{attrs:{align:"center"}},[t._v("(11)")]),e("td",{attrs:{align:"center"}},[t._v("(12)")]),e("td",{attrs:{align:"center"}},[t._v("(13)")]),e("td",{attrs:{align:"center"}},[t._v("(14)")]),e("td",{attrs:{align:"center"}},[t._v("(15)")]),e("td",{attrs:{align:"center"}},[t._v("(16)")]),e("td",{attrs:{align:"center"}},[t._v("(17)")]),e("td",{attrs:{align:"center"}},[t._v("(18)")]),e("td",{attrs:{align:"center"}},[t._v("(19)")]),e("td",{attrs:{align:"center"}},[t._v("(20)")])]),t._l(t.danhSachThongKeThang,(function(a,n){return e("tr",{key:n},[e("td",{attrs:{align:"center"}},[t._v(t._s(n))]),e("td",{staticStyle:{padding:"8px 10px"},attrs:{align:"left"}},[t._v(t._s(a.govAgencyName))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.processCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.remainingCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.receivedCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.onegateCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.onlineCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.releaseCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.betimesCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.ontimeCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.overtimeCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.unresolvedCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.doneCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.releasingCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.processingCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.undueCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.overdueCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.waitingCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.cancelledCount))]),e("td",{attrs:{align:"center"}},[t._v(t._s(a.ontimePercentage))])])}))],2)]}}],null,!1,1811052208)}):t._e()],1)],1)],1),t._v(" "+t._s(t.heightChart)+" ")],1)],1)],1)},o=[],c=e("bc3a"),l=e.n(c),d={components:{},data:function(){return{groupCode:"SBN",isLoading:!1,yearSelected:(new Date).getFullYear(),yearSelected2:(new Date).getFullYear(),monthSelected:(new Date).getMonth()+1,distGroupSelected:"",isTable:!1,statisticalYear:[44,50],statisticalSBN:[44,44,44,44,44,44],statisticalQUAN_HUYEN:[44,44,44,44,44,44],statisticalXA_PHUONG:[44,44,44,44,44,44],statisticalMonth:[{name:"Hồ sơ nộp trực tiếp",data:[20,23]},{name:"Hồ sơ nộp trực tuyến",data:[20,23]}],chartOptionsYear:{labels:["Xử lý đúng hạn","Xử lý quá hạn"]},chartOptionsMonth:{grid:{padding:{top:0,right:0,bottom:0,left:0}},chart:{type:"bar",locales:[{name:"en",options:{toolbar:{exportToSVG:"Tải xuống SVG",exportToPNG:"Tải xuống PNG"}}}]},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1,offsetX:-12,style:{fontSize:"12px",colors:["#fff"]}},stroke:{show:!0,width:1,colors:["#fff"]},xaxis:{categories:[]}},chartOptionsSoQuanXa:{labels:["Trong hạn","Quá hạn","Hoàn thành đúng hạn","Hoàn thành quá hạn","Xin rút","Chờ bổ sung"]},monthList:[{name:"Tháng 1",value:1},{name:"Tháng 2",value:2},{name:"Tháng 3",value:3},{name:"Tháng 4",value:4},{name:"Tháng 5",value:5},{name:"Tháng 6",value:6},{name:"Tháng 7",value:7},{name:"Tháng 8",value:8},{name:"Tháng 9",value:9},{name:"Tháng 10",value:10},{name:"Tháng 11",value:11},{name:"Tháng 12",value:12}],listDoiTuong:[],statistics:{betimesCount:1,cancelledCount:0,companyId:0,deniedCount:0,domainCode:"",domainName:"",doneCount:21,dossierOnline3Count:0,dossierOnline4Count:0,govAgencyCode:"",govAgencyName:"",groupId:1,insideCount:0,interoperatingCount:95,month:0,onegateCount:1,onlineCount:10,ontimeCount:2,ontimePercentage:14,outsideCount:0,overdueCount:185,overtimeCount:18,overtimeInside:18,overtimeOutside:0,processCount:241,processingCount:194,receiveDossierSatCount:0,receivedCount:11,releaseCount:21,releaseDossierSatCount:0,releasingCount:0,remainingCount:230,reporting:!1,saturdayCount:0,system:0,totalCount:241,undueCount:9,unresolvedCount:0,viaPostalCount:0,waitingCount:26,year:2020},danhSachThongKeThang:[]}},computed:{yearList:function(){for(var t=[],a=(new Date).getFullYear(),e=0;e<=3;e++)t.push({name:"Năm "+(a-e),value:a-e});return t},heightChart:function(){return this.statisticalMonth[0].data.length<5?"300":"auto"}},created:function(){var t=this;this.$nextTick((function(){t.getDictgroups("QUAN_HUYEN"),t.getStatisticsYear(),t.getStatisticsYearSBN(),t.getStatisticsYearQUAN_HUYEN(),t.getStatisticsYearXA_PHUONG(),t.getStatisticsMonth(t.groupCode)}))},watch:{yearSelected:function(){this.getStatisticsYear(),this.getStatisticsYearSBN(),this.getStatisticsYearQUAN_HUYEN(),this.getStatisticsYearXA_PHUONG()},yearSelected2:function(){this.getStatisticsMonth(this.groupCode)},monthSelected:function(){this.getStatisticsMonth(this.groupCode)},distGroupSelected:function(){this.getStatisticsMonth(this.groupCode)},groupCode:function(t){this.getStatisticsMonth(t)}},methods:{getDictgroups:function(t){var a=this,e=window.location.origin,n={url:e+"/o/rest/v2/dictcollections/REPORT_GROUP/dictgroups/"+t+"/dictitems",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"}};l.a.request(n).then((function(t){t.data.data&&(a.listDoiTuong=t.data.data,a.distGroupSelected=t.data.data[0].itemCode)})).catch()},getStatisticsYear:function(){var t=this,a=window.location.origin,e={url:a+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{year:t.yearSelected,month:0}};l.a.request(e).then((function(a){a.data.data&&(t.statistics=a.data.data[0],t.statisticalYear=[a.data.data[0].waitingCount,a.data.data[0].ontimeCount])})).catch()},getStatisticsYearSBN:function(){var t=this,a=window.location.origin,e={url:a+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{year:t.yearSelected,month:0,groupCode:"SBN"}};l.a.request(e).then((function(a){a.data.data&&(t.statisticalSBN=[a.data.data[0].undueCount,a.data.data[0].overdueCount,a.data.data[0].ontimeCount,a.data.data[0].overtimeCount,a.data.data[0].cancelledCount,a.data.data[0].waitingCount])})).catch()},getStatisticsYearQUAN_HUYEN:function(){var t=this,a=window.location.origin,e={url:a+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{year:t.yearSelected,month:0,groupCode:"QUAN_HUYEN"}};l.a.request(e).then((function(a){a.data.data&&(t.statisticalQUAN_HUYEN=[a.data.data[0].undueCount,a.data.data[0].overdueCount,a.data.data[0].ontimeCount,a.data.data[0].overtimeCount,a.data.data[0].cancelledCount,a.data.data[0].waitingCount])})).catch()},getStatisticsYearXA_PHUONG:function(){var t=this,a=window.location.origin,e={url:a+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",year:t.yearSelected,month:0,groupCode:"XA_PHUONG"}};l.a.request(e).then((function(a){a.data.data&&(t.statisticalXA_PHUONG=[a.data.data[0].undueCount,a.data.data[0].overdueCount,a.data.data[0].ontimeCount,a.data.data[0].overtimeCount,a.data.data[0].cancelledCount,a.data.data[0].waitingCount])})).catch()},getStatisticsMonth:function(t){var a=this;a.isLoading=!0;var e=window.location.origin,n={};n="XA_PHUONG"===t?{url:e+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",year:a.yearSelected2,month:a.monthSelected,groupCode:t,parentAgency:a.distGroupSelected}}:{url:e+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",year:a.yearSelected2,month:a.monthSelected,groupCode:t}},l.a.request(n).then((function(t){if(a.statisticalMonth[0].data=[],a.statisticalMonth[1].data=[],a.chartOptionsMonth.xaxis.categories=[],t.data.data){a.danhSachThongKeThang=t.data.data;for(var e=0;e<t.data.data.length;e++)a.statisticalMonth[0].data.push(t.data.data[e+1].onegateCount),a.statisticalMonth[1].data.push(t.data.data[e+1].onlineCount),a.chartOptionsMonth.xaxis.categories.push(t.data.data[e+1].govAgencyName),a.isLoading=!1}})).catch()}}},u=d,p=(e("7869"),e("2877")),h=e("6544"),g=e.n(h),v=e("8336"),m=e("b0af"),_=e("8fea"),C=e("0e8f"),f=e("a722"),y=e("b974"),x=e("3a2f"),S=Object(p["a"])(u,r,o,!1,null,null,null),w=S.exports;g()(S,{VBtn:v["a"],VCard:m["a"],VDataTable:_["a"],VFlex:C["a"],VLayout:f["a"],VSelect:y["a"],VTooltip:x["a"]});var b={name:"App",components:{Landing:w},data:function(){return{}}},N=b,T=e("7496"),O=e("a75b"),H=Object(p["a"])(N,s,i,!1,null,null,null),G=H.exports;g()(H,{VApp:T["a"],VContent:O["a"]});e("1f54");var A=e("f309");n["a"].use(A["a"]);var U=new A["a"]({icons:{iconfont:"fa4"}}),k=e("1321"),Y=e.n(k);n["a"].use(Y.a),n["a"].component("apexchart",Y.a),n["a"].config.productionTip=!1;var P=void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():223437;l.a.defaults.withCredentials=!0,l.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",l.a.defaults.headers.common["groupId"]=P,new n["a"]({vuetify:U,render:function(t){return t(G)}}).$mount("#app_report_charts")},7869:function(t,a,e){"use strict";var n=e("83d2"),s=e.n(n);s.a},"83d2":function(t,a,e){}});
//# sourceMappingURL=app.js.map