import{o as e,c as t,F as n,r as s,a as r,t as i,T as a,w as o,b as l,d,e as c,f as g,v as h,g as m,h as u,i as v,j as p,k as f}from"./vendor.81da14f3.js";var w={props:["list"]};const y={class:"flex flex-col mr-3"},x=r("h3",{class:"text-xl border-b"},"My cascades",-1),k={key:0,class:""},S={class:""},b={class:"ml-auto mt-1"},C=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1),T={key:1,class:""},$=r("div",{class:""},"No saved cascades",-1);w.render=function(a,o,l,d,c,g){return e(),t("div",y,[x,l.list&&l.list.length>0?(e(),t("div",k,[(e(!0),t(n,null,s(l.list,(n=>(e(),t("div",{class:"cursor-pointer flex flex-row align-baseline mb-1 hover:bg-blue-100 rounded px-1 transition-color duration-100",key:n,onClick:e=>a.$emit("selected",n)},[r("div",S,i(n),1),r("div",b,[(e(),t("svg",{onClick:e=>a.$emit("delete",n),xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[C],8,["onClick"]))])],8,["onClick"])))),128))])):(e(),t("div",T,[$]))])};const W=["green","blue","red","yellow","indigo","purple","pink"];var M={data:()=>({panning:{}}),computed:{isPanning(){var e,t,n,s;return!!(null==(t=null==(e=this.panning)?void 0:e.mouseStart)?void 0:t.x)&&!!(null==(s=null==(n=this.panning)?void 0:n.mouseStart)?void 0:s.y)},columnWidth(){return this.$store.getters.settings.yearWidth},years(){const e=this.$store.getters.events;if(!e||0===e.length)return{start:2e3,end:2010};let t=e[0].startingYear(),n=e[0].getNextYear();for(let s of e)s.startingYear()<t&&(t=s.startingYear()),s.getNextYear()>n&&(n=s.getNextYear());return{start:t-1,end:n+6}},numColumns(){return this.years.end-this.years.start},numRows(){return this.$store.getters.events.length+1}},created(){document.getElementById("timelineContainer").addEventListener("mousedown",this.mouseDown),window.addEventListener("mouseup",this.mouseUp),window.addEventListener("mousemove",this.mouseMove)},methods:{mouseDown(e){e.stopPropagation();const t=document.getElementById("timelineContainer");t.style.cssText="cursor: grabbing;",this.panning={mouseStart:{x:e.clientX,y:e.clientY},containerStart:{x:t.scrollLeft,y:t.scrollTop}}},mouseUp(e){document.getElementById("timelineContainer").style.cssText="cursor: grab;",this.panning={}},mouseMove(e){if(!this.isPanning)return;e.stopPropagation();const t=document.getElementById("timelineContainer");t.scrollLeft=this.panning.containerStart.x+(this.panning.mouseStart.x-e.clientX),t.scrollTop=this.panning.containerStart.y+(this.panning.mouseStart.y-e.clientY)},eventBarClass(e){let t="eventBar transition opacity-50 rounded shadow ";const n=e.event.tags[0];return this.$store.getters.tags[n]?W.includes(this.$store.getters.tags[n])&&(t+=`bg-${this.$store.getters.tags[n].toLowerCase()}-300 `):t+="bg-gray-300 ",t},eventBarStyle(e){let t=`width: ${this.getWidthForRange(e.range)}px;`;const n=e.event.tags[0];return this.$store.getters.tags[n]&&!W.includes(this.$store.getters.tags[n])&&(t+=` background-color: ${this.$store.getters.tags[n]}`),t},getWidthForRange(e){var t,n;if(e.to){const s=(13-(null!=(t=e.from.month)?t:1))*(this.columnWidth/12);return e.to.month?e.from.year===e.to.year?(1+e.to.month-(null!=(n=e.from.month)?n:1))*(this.columnWidth/12):s+(e.to.year-e.from.year-1)*this.columnWidth+e.to.month*(this.columnWidth/12):e.from.year===e.to.year?s:s+(e.to.year-e.from.year)*this.columnWidth}return e.from.month?10:this.columnWidth},getLeftMarginForDate(e,t){let n=(e.startingYear()-this.years.start)*this.columnWidth;return t.month?n+this.columnWidth/12*(t.month-1):n+0},range:(e,t=0)=>[...Array(e).keys()].map((e=>e+t))}};const I={class:"relative"},D={id:"years",class:"flex absolute inset-0 pointer-events-none"},E={class:"yearTitle text-sm"},B={id:"events"},H=r("div",{class:"h-24"},null,-1),F={class:"eventDate"},Y=r("div",{style:{height:"50vh"}},null,-1);M.render=function(l,d,c,g,h,m){return e(),t("div",I,[r("div",D,[(e(!0),t(n,null,s(m.range(m.years.end-m.years.start+1,m.years.start),(n=>(e(),t("div",{class:"year flex-shrink-0",key:n,style:`width: ${this.columnWidth}px`},[r("h6",E,i(n),1)],4)))),128))]),r("div",B,[H,r(a,{name:"eventRow"},{default:o((()=>[(e(!0),t(n,null,s(l.$store.getters.filteredEvents,(n=>(e(),t("div",{class:"eventRow",key:n.eventString,style:{"margin-left":`${this.getLeftMarginForDate(n,n.range.from)}px`}},[r("div",{class:m.eventBarClass(n),style:m.eventBarStyle(n)},null,6),r("p",F,i(n.getDateHtml()),1),r("p",{class:"eventTitle",innerHTML:n.getInnerHtml()},null,8,["innerHTML"])],4)))),128))])),_:1}),Y])])};class L{constructor(e){this.originalString=e;const t=e.indexOf("//");t>=0&&(e=e.substring(0,t));const[n,s]=e.split("-");this.from=this.toYearMonthDay(n),this.to=s?this.toYearMonthDay(s):void 0}toYearMonthDay(e){"now"===e&&(e=(new Date).toLocaleDateString());let[t,n,s]=e.split("/").reverse();const r=parseInt(t);return n?s?{year:r,month:parseInt(s),day:parseInt(n)}:{year:r,month:parseInt(n)}:{year:r}}getNextYear(){return this.to?this.to.year+1:this.from.year+1}}class N{constructor(e){this.linkRegex=/\[([\w\s\d\.]+)\]\((https?:\/\/[\w\d./?=#]+)\)/g;let t=N.reverseString(e);const n=new Set;let s;this.tags=[];let r=0;for(;null!==(s=/(?:^(\w+)# )/gm.exec(t));)s.forEach(((e,t)=>{if(1===t){const t=N.reverseString(e);n.has(t)||(n.add(t),this.tags.push(t)),r=e.length+2}})),t=t.substring(r);this.eventDescription=N.reverseString(t.trim())}getInnerHtml(){return this.eventDescription.replace(this.linkRegex,((e,t,n)=>`<a class="underline" href="${n}">${t}</a>`))}static reverseString(e){return e.split("").reverse().join("")}}class R{constructor(e,t,n){this.eventString=e,this.range=t,this.event=n}startingYear(){return this.range.from.year}getNextYear(){return this.range.getNextYear()}getInnerHtml(){return this.event.getInnerHtml()}getDateHtml(){return this.range.originalString}static fromString(e){const t=e.indexOf(":");if(-1===t)return;const n=e.substring(0,t).trim(),s=new L(n),r=new N(e.substring(t+1).trim());return new R(e,s,r)}}const j=["green","blue","red","yellow","indigo","purple","pink"];var A=l({state:()=>({filter:new Set,eventsString:"// Comments start with two slashes: `//`\n// Settings start with an exclamation point: `!`\n// Tags start with a pound sign: `#`\n\n!yearWidth: 120\n\n// This is an indication that events tagged `#Work` will be colored #e13\n#Work: #e13\n\n08/2008-05/2012: Psych degree #Education\n02/2010-06/2012: Dispatcher #Work\n10/2010: Barn built across the street\n06/2011-08/2011: Westover Air Reserve Base #Work\n\n// 2013\n03/15/2013-04/2015: China #Work\n\n// 2014\n07/2014: 4th of July in DC\n\n// 2015\n05/2015-08/2015: Summer classes so I can graduate in two years #Education\n05/2015: James graduation\n06/2015: Built desk\n06/2015: Kim and Matt wedding\n08/2015-05/2017: CS degree #Education\n\n// 2016\n05/22/2016-08/12/2016: Cardinal Health #Work\n08/16/2016-08/27/2016: Italy\n\n// 2017\n05/2017-05/2018: Cladwell #Work\n06/10/2017-06/17/2017: The Hague & Copenhagen\n\n// 2018\n07/21/2018-07/22/2018: Chicago\n07/26/2018-07/31/2018: LA and Seattle (interviewing)\n08/04/2018-08/14/2018: Mexico City\n09/05/2018-09/11/2018: Hong Kong and Macau\n09/19/2018-09/22/2018: Road trip to Seattle\n10/01/2018-01/2021: [Google](https://www.google.com) #Work\n12/28/2018-12/29/2018: Nemacolin and Fallingwater\n\n// 2019\n06/08/2019: Paula's wedding\n07/04/2019: 4th of July in Seattle with siblings\n08/23/2019-08/27/2019: SF and Bishop's Ranch\n09/2019: Hawaii with Google\n12/20/2019-12/22/2019: Train from Seattle to Chicago\n12/2019: Christmas at home, Dad to hospital\n\n// 2020\n02/29/2020: Molly and Kaitlyn to Seattle (thus starting covid)\n03/28/2020: James to Austin\n05/24/2020: Sold the Impala\n07/2020: Oregon & Crater Lake\n08/2020: Mt. Rainier\n08/2020: Oak Island\n09/2020: Hurricane Ridge\n9/2020: Trip to Coeur d'Alene\n11/2020: Trip to Denver\n12/2020: Reese\n12/25/2020: Christmas in Blaine\n\n// 2021\n01/2021: qr.new featured on [Hacker News](https://news.ycombinator.com/item?id=25481772)\n02/2021: Hawaii\n02/01/2021-now: Working on [swink](https://sw.ink) full time #Work\n05/25/2021: [cascade.page](https://cascade.page) featured on [Hacker News](https://news.ycombinator.com/item?id=27282842)\n06/05/2021-06/12/2021: Ohio and James's Party"}),mutations:{setEventsString(e,t){e.eventsString=t},clearFilters(e){e.filter.clear()},filterTag(e,t){e.filter.has(t)?e.filter.delete(t):e.filter.add(t)}},getters:{trimmedAndFilteredEntries:e=>e.eventsString.split("\n").filter((e=>!!e&&null===e.match(/^\s*\/\/.*/))).map((e=>e.trim())),events:(e,t)=>t.trimmedAndFilteredEntries.filter((e=>!e.startsWith("!")&&!e.startsWith("#"))).map(R.fromString).filter((e=>!!e)),filteredEvents:(e,t)=>t.events.filter((t=>0===e.filter.size||t.event.tags.some((t=>e.filter.has(t))))),settings(e,t){const n={yearWidth:120};for(let s of t.trimmedAndFilteredEntries){let e=s;if(e.startsWith("!yearWidth")){const t=parseInt(e.substring(e.indexOf(":")+1).trim());n.yearWidth=t?Math.min(1200,Math.max(10,t)):120}}return n},tags(e,t){let n=0;const s=new Set(t.events.flatMap((e=>e.event.tags))),r=t.trimmedAndFilteredEntries.filter((e=>e.startsWith("#"))).map((e=>e.substring(1).split(": "))),i={};for(let a of r)i[a[0]]=a[1];for(let a of s)i[a]||(i[a]=j[n++%j.length]);return i}}}),O={methods:{buttonClass(e){const t=this.$store.getters.tags[e];return j.includes(t)?`bg-${t}-300`:""},buttonStyle(e){const t=this.$store.getters.tags[e];return j.includes(t)?"":`background-color: ${t}`},filterTag(e){this.$store.commit("filterTag",e)},clearFilters(){this.$store.commit("clearFilters")}}};const P={class:"flex flex-col justify-end ml-2 mb-3"},J={class:"flex flex-row"},G={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},K=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1);O.render=function(a,o,l,g,h,m){return e(),t("div",P,[r("div",J,[Object.keys(a.$store.getters.tags).length>0?(e(),t("button",{key:0,class:"mr-2 rounded bg-gray-800 hover:bg-gray-700 px-2",onClick:o[1]||(o[1]=(...e)=>m.clearFilters&&m.clearFilters(...e))}," Show all ")):d("",!0),(e(!0),t(n,null,s(Object.keys(a.$store.getters.tags),(n=>(e(),t("button",{class:"\n          flex flex-row\n          items-center\n          mr-2\n          rounded\n          bg-gray-800\n          hover:bg-gray-700\n          px-2\n        ",key:n,onClick:e=>m.filterTag(n)},[r("div",{class:["h-4 w-4 rounded mr-2",m.buttonClass(n)],style:m.buttonStyle(n)},[a.$store.state.filter.has(n)?(e(),t("svg",G,[K])):d("",!0)],6),c(" "+i(n),1)],8,["onClick"])))),128))])])};var U={components:{Timeline:M,Storage:w,Tags:O},data:()=>({collapsed:!1,currentTimelineName:"",list:[]}),mounted(){this.getTimelines()},methods:{deleteTimeline(e){confirm(`Delete ${e}?`)&&(localStorage.removeItem(e),this.list.splice(this.list.indexOf(e),1),localStorage.setItem("timelines",this.list.join(",")))},selectedTimeline(e){this.loadTimeline(e)},save(){const e=prompt("Save cascade as: ",this.currentTimelineName);if(e){if(localStorage.setItem(e,this.$store.state.eventsString),this.list.includes(e))return;this.list.push(e),localStorage.setItem("timelines",this.list.join(","))}},loadTimeline(e){var t;this.$store.commit("setEventsString",null!=(t=localStorage.getItem(e))?t:""),this.currentTimelineName=e},getTimelines(){const e=localStorage.getItem("timelines");e&&(this.list=e.split(","),this.loadTimeline(this.list[0]))}}};const V={class:"flex flex-row"},X={class:"backdrop-filter backdrop-blur-sm"},q={class:"flex flex-row"},z=r("div",{class:"underline flex items-end"},[r("a",{href:"https://github.com/kochrt/timeline-maker"},"GitHub")],-1),_={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Q=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1),Z={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ee=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1),te={class:"flex md:flex-row flex-col pt-3"},ne={class:""},se={class:"flex flex-col mb-3 text-black"};U.render=function(n,s,a,o,l,p){const f=v("storage"),w=v("timeline"),y=v("tags");return e(),t("div",V,[r("div",X,[r("div",q,[z,r("button",{class:"\n            ml-auto\n            hover:bg-gray-500\n            rounded\n            px-3\n            flex flex-row\n            items-center\n          ",onClick:s[1]||(s[1]=e=>l.collapsed=!l.collapsed)},[c(i(l.collapsed?"Expand":"Collapse")+" ",1),l.collapsed?d("",!0):(e(),t("svg",_,[Q])),l.collapsed?(e(),t("svg",Z,[ee])):d("",!0)])]),g(r("div",te,[r(f,{list:l.list,onSelected:p.selectedTimeline,onDelete:p.deleteTimeline},null,8,["list","onSelected","onDelete"]),r("div",ne,[r("div",se,[g(r("textarea",{class:"border shadow-md flex-grow p-2 font-mono text-sm",name:"eventsField",cols:"55",rows:"12","onUpdate:modelValue":s[2]||(s[2]=e=>n.$store.state.eventsString=e)},null,512),[[m,n.$store.state.eventsString]]),r("button",{class:"\n                bg-blue-100\n                mt-3\n                rounded\n                shadow-md\n                hover:shadow-none\n                transition-all\n                duration-100\n              ",onClick:s[3]||(s[3]=(...e)=>p.save&&p.save(...e))}," Save cascade ")]),(e(),t(u,{to:"#timelineContainer"},[r(w)]))])],512),[[h,!l.collapsed]])]),r(y,{tags:n.tags},null,8,["tags"])])};var re=p({name:"App",components:{MainVue:U}});re.render=function(n,s,r,i,a,o){const l=v("main-vue");return e(),t(l)};const ie=f(re);ie.use(A),ie.mount("#app");
