webpackJsonp([0],{"+HH2":function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"columns is-mobile"},[e("div",{staticClass:"column has-border-right"},[e("Head2HeadRegionalPointsSingle",{attrs:{rider1:this.rider1,rider2:this.rider2}})],1),e("div",{staticClass:"column"},[e("Head2HeadRegionalPointsSingle",{attrs:{rider1:this.rider2,rider2:this.rider1}})],1)])])},staticRenderFns:[]};e.a=r},"//r/":function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"has-text-centered"},[i("p",{staticClass:"heading small-margin-top"},[t._v("Regional Points")]),i("p",{staticClass:"subtitle is-7"},[t._v("\n      "+t._s(t.rider1.bar.regionalChampionship.raced)+" races\n    ")]),i("p",{staticClass:"title is-4 small-margin-bottom",staticStyle:{"margin-top":"0","margin-right":"0"}},[t._v("\n      "+t._s(t.rider1.bar.regionalChampionship.totalPoints)+"\n      "),i("sup",{directives:[{name:"show",rawName:"v-show",value:t.showRegionalDiff,expression:"showRegionalDiff"}],staticClass:"subtitle is-7"},[i("span",{staticClass:"win-diff"},[t._v("+"+t._s(t.regionalDiff))])])])])},staticRenderFns:[]};e.a=r},"/Ud6":function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-burger",class:{"is-active":this.menuIsActive},attrs:{"data-target":"navMenu"},on:{click:this.toggleMenu}},[e("span"),e("span"),e("span")])},staticRenderFns:[]};e.a=r},"/qcc":function(t,e,i){"use strict";var r=i("Qv49"),a=i("//r/"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},"05C/":function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"columns is-mobile"},[e("div",{staticClass:"column has-border-right"},[e("Head2HeadAveragePointsSingle",{attrs:{rider1:this.rider1,rider2:this.rider2}})],1),e("div",{staticClass:"column"},[e("Head2HeadAveragePointsSingle",{attrs:{rider1:this.rider2,rider2:this.rider1}})],1)])])},staticRenderFns:[]};e.a=r},"1VLk":function(t,e,i){"use strict";var r=i("ZIgq"),a=i("QZqN"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},"3DCl":function(t,e,i){"use strict";var r=i("mkfb"),a=i("AwLN"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},"4Maa":function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"columns is-mobile"},[e("div",{staticClass:"column has-border-right"},[e("Head2HeadRacesSingle",{attrs:{races:this.rider1RaceWins}})],1),e("div",{staticClass:"column"},[e("Head2HeadRacesSingle",{attrs:{races:this.rider2RaceWins}})],1)]),e("Head2HeadRaceDetail",{attrs:{title:"",rider1Races:this.rider1Short,rider2Races:this.rider2Short}})],1)},staticRenderFns:[]};e.a=r},"4tzP":function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"has-text-centered"},[e("p",{staticClass:"heading"},[this._v("Rank")]),e("LineChart",{attrs:{chartData:this.positionHistory,height:200}})],1)},staticRenderFns:[]};e.a=r},"57fK":function(t,e,i){"use strict";var r=i("l0cf"),a=i("uZ0H"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},"5PlU":function(t,e,i){var r=i("RY/4"),a=i("dSzd")("iterator"),n=i("/bQp");t.exports=i("FeBl").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||n.hasOwnProperty(r(e))}},"5m4w":function(t,e,i){"use strict";var r=i("IJMP");e.a={name:"head2head-banner",props:["rider1","rider2","is-mobile"],components:{Head2HeadBannerSingle:r.a}}},"5zde":function(t,e,i){i("zQR9"),i("qyJz"),t.exports=i("FeBl").Array.from},"6+GS":function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar hero is-primary is-bold"},[e("div",{staticClass:"navbar-brand"},[e("p",{staticClass:"navbar-item"},[this._v("\n        "+this._s(this.title)+"\n      ")]),e("MenuMobile")],1),e("MenuDesktop")],1)])},staticRenderFns:[]};e.a=r},"75CS":function(t,e,i){"use strict";var r=i("kaUX");e.a={name:"head2head-average-points",filters:r.a,props:["rider1","rider2"],methods:{},computed:{showPredictedDiff:function(){return this.predictedDiff>0},predictedDiff:function(){return this.rider1.bar.predictedFinalPoints-this.rider2.bar.predictedFinalPoints},showAveragePointsPerRaceDiff:function(){return this.averagePointsPerRaceDiff>0},averagePointsPerRaceDiff:function(){return this.rider1.bar.averagePointsPerRace-this.rider2.bar.averagePointsPerRace},showAveragePointsPerShortRaceDiff:function(){return this.averagePointsPerShortRaceDiff>0},averagePointsPerShortRaceDiff:function(){return this.rider1.bar.averagePointsPerShortRace-this.rider2.bar.averagePointsPerShortRace},showAveragePointsPerMediumRaceDiff:function(){return this.averagePointsPerMediumRaceDiff>0},averagePointsPerMediumRaceDiff:function(){return this.rider1.bar.averagePointsPerMediumRace-this.rider2.bar.averagePointsPerMediumRace},showAveragePointsPerLongRaceDiff:function(){return this.averagePointsPerLongRaceDiff>0},averagePointsPerLongRaceDiff:function(){return this.rider1.bar.averagePointsPerLongRace-this.rider2.bar.averagePointsPerLongRace}}}},"7qVf":function(t,e,i){"use strict";var r=i("U2SU");e.a={name:"head2head-bar-points",props:["rider1","rider2","is-mobile"],components:{Head2HeadAveragePointsSingle:r.a}}},"9YCY":function(t,e,i){"use strict";var r=i("Xwg2"),a=i("/Ud6"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},AHSm:function(t,e,i){"use strict";var r=i("a+Tw"),a=i("4Maa"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},AHTq:function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[t.isMobile?t._e():i("NavBar"),t.isMobile?i("NavBarMobile"):t._e(),t.isMobile?t._e():t._t("header",[i("PageHeader",{attrs:{slot:"header",title:t.title,subtitle:t.subtitle},slot:"header"})]),i("div",{staticClass:"container"},[i("div",{staticClass:"content"},[t._t("default")],2)]),t._m(0)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer medium-margin-top no-padding-top no-padding-bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("p",[this._v("Made by "),e("a",{attrs:{href:"mailto:justin.ramel@gmail.com",target:"_blank",rel:"noopener"}},[this._v("Justin Ramel")]),this._v(".")])])])])}]};e.a=r},AwLN:function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"has-text-centered small-margin-bottom"},[i("p",{staticClass:"heading small-margin-top"},[t._v("Points")]),i("p",{staticClass:"title is-4 no-margin-top"},[t._v("\n      "+t._s(t.rider1.bar.totals.grand)+"\n      "),i("sup",{directives:[{name:"show",rawName:"v-show",value:t.showGrandDiff,expression:"showGrandDiff"}],staticClass:"subtitle is-7"},[i("span",{staticClass:"win-diff"},[t._v("+"+t._s(t.grandDiff))])])])])},staticRenderFns:[]};e.a=r},ENYB:function(t,e,i){"use strict";var r=i("Dd8w"),a=i.n(r),n=i("NYxO"),s=i("9YCY"),o=i("57fK");e.a={name:"nav-bar",components:{MenuMobile:s.a,MenuDesktop:o.a},computed:a()({},Object(n.mapGetters)({title:"title/getTitle"}))}},FPAx:function(t,e,i){"use strict";var r=i("QTbA"),a=i("oOnT"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},FmKd:function(t,e,i){"use strict";e.a={name:"cant-complete",props:["flag"]}},Gu7T:function(t,e,i){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(i("c/Tr"));e.default=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return(0,r.default)(t)}},IJMP:function(t,e,i){"use strict";var r=i("KX9g"),a=i("U6Oa"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},KX9g:function(t,e,i){"use strict";var r=i("Dd8w"),a=i.n(r),n=i("kaUX"),s=i("JxW5"),o=i("ORKS");e.a={name:"head2head-banner-single",filters:n.a,props:["rider"],components:{BarComplete:o.a},methods:{getRaces:function(t){return this.events.map(function(e){var i=function(t,e){return t.find(function(t){return t.eventId===e})||{date:"",raceCategory:"",barPosition:"",bar:0}}(t.races,e.id),r=function(t){return"DNF"===t.position||"DNS"===t.position?t.position:t.barPosition}(i);return{eventId:e.id,raceCategory:e.length,date:e.date,course:e.course,position:r,points:i.bar,time:i.time}})}},computed:{maxBarPoints:function(){return s.default.maxPoints},riderRaces:function(){return this.getRaces(this.rider)},rider2Races:function(){return this.getRaces(this.rider2)},riderRaceWins:function(){var t=this;return this.riderRaces.map(function(e){var i=t.rider2Races.find(function(t){return t.eventId===e.eventId});return a()({},e,{win:!(!e.position||!i.position)&&e.points>i.points,head2head:e.position&&i.position})})},rider2RaceWins:function(){var t=this;return this.rider2Races.map(function(e){var i=t.riderRaces.find(function(t){return t.eventId===e.eventId});return a()({},e,{win:!(!e.position||!i.position)&&e.points>i.points,head2head:e.position&&i.position})})}}}},KtXE:function(t,e,i){"use strict";var r=i("kaUX"),a=i("snwr");e.a={name:"head2head-races-single",filters:r.a,components:{Head2HeadTable:a.a},props:["races"],data:function(){return{showShort:!1}},computed:{wins:function(){return this.races.filter(function(t){return t.win}).length},shortWins:function(){return this.races.filter(function(t){return"short"===t.raceCategory&&t.win}).length},mediumWins:function(){return this.races.filter(function(t){return"medium"===t.raceCategory&&t.win}).length},longWins:function(){return this.races.filter(function(t){return"long"===t.raceCategory&&t.win}).length},short:function(){return this.races.filter(function(t){return"short"===t.raceCategory&&t.head2head})},medium:function(){return this.races.filter(function(t){return"medium"===t.raceCategory&&t.head2head})},long:function(){return this.races.filter(function(t){return"long"===t.raceCategory&&t.head2head})}}}},LMhq:function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Page",{attrs:{title:t.title}},[i("Head2HeadBanner",{attrs:{rider1:t.rider1,rider2:t.rider2,"is-mobile":t.isMobile}}),i("hr",{staticClass:"no-margin-top no-margin-bottom"}),i("Head2HeadBarPoints",{attrs:{rider1:t.rider1,rider2:t.rider2,"is-mobile":t.isMobile}}),i("hr",{staticClass:"no-margin-top no-margin-bottom"}),i("Head2HeadAveragePoints",{attrs:{rider1:t.rider1,rider2:t.rider2,"is-mobile":t.isMobile}}),i("hr",{staticClass:"no-margin-top no-margin-bottom"}),i("Head2HeadRaces",{attrs:{rider1:t.rider1,rider2:t.rider2,events:t.events,"is-mobile":t.isMobile}}),i("Head2HeadPointsChart",{attrs:{rider1:t.rider1,rider2:t.rider2,"is-mobile":t.isMobile}}),i("Head2HeadPositionChart",{attrs:{rider1:t.rider1,rider2:t.rider2,"is-mobile":t.isMobile}})],1)},staticRenderFns:[]};e.a=r},LmCr:function(t,e,i){"use strict";var r=i("FmKd"),a=i("pIUh"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},Mtiv:function(t,e,i){"use strict";var r=i("Dd8w"),a=i.n(r),n=i("NYxO"),s=i("57fK"),o=i("9YCY");e.a={name:"nav-bar-mobile",components:{MenuDesktop:s.a,MenuMobile:o.a},computed:a()({},Object(n.mapGetters)({title:"title/getTitle"}))}},ORKS:function(t,e,i){"use strict";var r=i("xZvE"),a=i("cLHn"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},Pw2Q:function(t,e,i){"use strict";var r=i("kaUX");e.a={name:"head2head-table",filters:r.a,props:["races"],computed:{wins:function(){return this.races.filter(function(t){return t.win}).length},showRaces:function(){return this.races.length>0}}}},QTbA:function(t,e,i){"use strict";var r=i("Gu7T"),a=i.n(r),n=i("z1J/");e.a={name:"head2head-points-chart",components:{LineChart:n.a},props:["rider1","rider2"],computed:{pointsHistory:function(){var t=this.rider1.barHistory.map(function(t){return t.points.grand}),e=this.rider2.barHistory.map(function(t){return t.points.grand}),i=function(t,e){return Array(t.length-e.length).fill(0)},r=[];return r=t.length>e.length?this.rider1.barHistory.map(function(t){return t.name}):this.rider2.barHistory.map(function(t){return t.name}),t.length>e.length&&e.unshift.apply(e,a()(i(t,e))),e.length>t.length&&t.unshift.apply(t,a()(i(e,t))),{labels:r,datasets:[{label:this.rider1.name,backgroundColor:"forestgreen",borderColor:"forestgreen",borderWidth:1,fill:!1,data:t},{label:this.rider2.name,backgroundColor:"#a6192e",borderColor:"#a6192e",borderWidth:1,fill:!1,data:e}]}}}}},QZqN:function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"columns is-mobile"},[e("div",{staticClass:"column has-border-right"},[e("Head2HeadBarPointsSingle",{attrs:{rider1:this.rider1,rider2:this.rider2}})],1),e("div",{staticClass:"column"},[e("Head2HeadBarPointsSingle",{attrs:{rider1:this.rider2,rider2:this.rider1}})],1)])])},staticRenderFns:[]};e.a=r},Qv49:function(t,e,i){"use strict";var r=i("Dd8w"),a=i.n(r),n=i("kaUX"),s=i("JxW5");e.a={name:"head2head-bar-points",filters:n.a,props:["rider1","rider2"],data:function(){return a()({},s.default)},computed:{regionalDiff:function(){return this.rider1.bar.regionalChampionship.totalPoints-this.rider2.bar.regionalChampionship.totalPoints},showRegionalDiff:function(){return this.regionalDiff>0}}}},RRwv:function(t,e,i){"use strict";var r=i("KtXE"),a=i("mEok"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},SxTt:function(t,e,i){"use strict";var r=i("5m4w"),a=i("ZLaZ"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},U2SU:function(t,e,i){"use strict";var r=i("75CS"),a=i("mJB7"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},U6Oa:function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"has-text-centered small-margin-bottom"},[i("p",{staticClass:"title is-4 small-padding-top is-capitalized"},[i("nuxt-link",{attrs:{to:{name:"riders-id",params:{id:t.rider.id}}}},[t._v("\n        "+t._s(t.rider.name)+"\n      ")])],1),i("p",{staticClass:"subtitle is-6"},[i("nuxt-link",{attrs:{to:{name:"clubs-name",params:{name:t.rider.club}}}},[t._v("\n        "+t._s(t.rider.club)+"\n      ")])],1),i("p",{staticClass:"heading no-margin-bottom"},[t._v("Rank")]),i("p",{staticClass:"title is-3 no-margin-bottom"},[t._v("\n      "+t._s(t.rider.position)+"\n      "),i("sup",{staticClass:"subtitle is-7 tight-ordinal"},[t._v(t._s(t._f("ordinalOnly")(t.rider.position)))])]),i("p",{staticClass:"heading"},[t._v(t._s(t.rider.category))]),i("BarComplete",{attrs:{complete:t.rider.bar.complete,"can-complete":t.rider.bar.canComplete}})],1)},staticRenderFns:[]};e.a=r},Uijt:function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar"},[e("div",{staticClass:"navbar-brand"},[e("p",{staticClass:"navbar-item"},[this._v("\n        "+this._s(this.title)+"\n      ")]),e("MenuMobile")],1),e("MenuDesktop")],1)])},staticRenderFns:[]};e.a=r},Uyz7:function(t,e,i){"use strict";e.a={maxRaces:6,maxShort:6,maxMedium:0,maxLong:0,maxPoints:720,maxPointsShort:720,maxPointsMedium:0,maxPointsLong:0,jbarMaxRaces:6,jbarMaxShort:6,jbarMaxMedium:0,jbarMaxLong:0,jbarMaxPoints:720,jbarMaxPointsShort:720,jbarMaxPointsMedium:0,jbarMaxPointsLong:0,barPositions:120,minimumQualifyingRaces:3,short:"short",medium:"medium",long:"long"}},VHSU:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("a1hW"),a=i("LMhq"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.default=n.exports},VjQF:function(t,e,i){"use strict";var r=i("hmBB"),a=i("bQk2"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},Xd32:function(t,e,i){i("+tPU"),i("zQR9"),t.exports=i("5PlU")},Xwg2:function(t,e,i){"use strict";var r=i("Dd8w"),a=i.n(r),n=i("NYxO");e.a={name:"menu",methods:a()({},Object(n.mapMutations)({toggleMenu:"menu/toggle"})),computed:a()({},Object(n.mapGetters)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))}},YFWx:function(t,e,i){"use strict";var r=i("mtWM"),a=i.n(r);e.a=a.a.create({baseURL:"http://justinramel.com/ndca-hc-2017/"})},YHwN:function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.races,function(e){return i("div",{key:e.id,staticClass:"has-text-centered"},[i("p",{staticClass:"no-margin-bottom"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.win,expression:"race.win"}],staticClass:"icon is-warning is-small"},[i("i",{staticClass:"fa fa-trophy"})]),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.win,expression:"!race.win"}],staticClass:"icon is-warning is-small"})]),i("p",{staticClass:"heading no-margin-bottom"},[t._v("\n      "+t._s(t._f("date")(e.date))+"\n    ")]),i("p",{staticClass:"title is-5 no-padding-top small-margin-bottom"},[i("nuxt-link",{attrs:{to:{name:"results-id",params:{id:e.eventId}}}},[t._v("\n        "+t._s(e.course)+"\n      ")])],1),i("p",{staticClass:"heading no-margin-bottom"},[t._v("Position")]),i("p",{staticClass:"title is-5 small-margin-bottom"},[t._v("\n      "+t._s(e.position)+"\n      "),i("sup",{staticClass:"subtitle is-7 tight-ordinal"},[t._v(t._s(t._f("ordinalOnly")(e.position)))])]),i("p",{staticClass:"heading no-margin-bottom"},[t._v("Points")]),i("p",{staticClass:"title is-5"},[t._v(t._s(e.points))]),i("p",{staticClass:"heading no-margin-bottom"},[t._v("Time")]),i("p",{staticClass:"title is-5"},[t._v(t._s(t._f("time")(e.time)))]),i("hr",{staticClass:"no-margin-bottom no-margin-top"})])}))},staticRenderFns:[]};e.a=r},ZIgq:function(t,e,i){"use strict";var r=i("3DCl");e.a={name:"head2head-bar-points",props:["rider1","rider2","is-mobile"],components:{Head2HeadBarPointsSingle:r.a}}},ZLaZ:function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"columns is-mobile"},[e("div",{staticClass:"column has-border-right"},[e("Head2HeadBannerSingle",{attrs:{rider:this.rider1}})],1),e("div",{staticClass:"column"},[e("Head2HeadBannerSingle",{attrs:{rider:this.rider2}})],1)])])},staticRenderFns:[]};e.a=r},Zsqs:function(t,e,i){"use strict";var r=i("dE02"),a=i("4tzP"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},"a+Tw":function(t,e,i){"use strict";var r=i("Dd8w"),a=i.n(r),n=i("RRwv"),s=i("snwr"),o=i("VjQF");e.a={name:"head2head-races",props:["rider1","rider2","events","is-mobile"],components:{Head2HeadRacesSingle:n.a,Head2HeadTable:s.a,Head2HeadRaceDetail:o.a},data:function(){return{showShort:!1}},methods:{getRaces:function(t){return this.events.map(function(e){var i=function(t,e){return t.find(function(t){return t.eventId===e})||{date:"",raceCategory:"",barPosition:"",bar:0}}(t.races,e.id),r=function(t){return"DNF"===t.position||"DNS"===t.position?t.position:t.barPosition}(i);return{eventId:e.id,raceCategory:e.length,date:e.date,course:e.course,position:r,points:i.bar,time:i.time}})}},computed:{rider1Races:function(){return this.getRaces(this.rider1)},rider2Races:function(){return this.getRaces(this.rider2)},rider1RaceWins:function(){var t=this;return this.rider1Races.map(function(e){var i=t.rider2Races.find(function(t){return t.eventId===e.eventId});return a()({},e,{win:!(!e.position||!i.position)&&e.points>i.points,head2head:e.position&&i.position})})},rider2RaceWins:function(){var t=this;return this.rider2Races.map(function(e){var i=t.rider1Races.find(function(t){return t.eventId===e.eventId});return a()({},e,{win:!(!e.position||!i.position)&&e.points>i.points,head2head:e.position&&i.position})})},rider1Short:function(){return this.rider1RaceWins.filter(function(t){return"short"===t.raceCategory&&t.head2head})},rider1Medium:function(){return this.rider1RaceWins.filter(function(t){return"medium"===t.raceCategory&&t.head2head})},rider1Long:function(){return this.rider1RaceWins.filter(function(t){return"long"===t.raceCategory&&t.head2head})},rider2Short:function(){return this.rider2RaceWins.filter(function(t){return"short"===t.raceCategory&&t.head2head})},rider2Medium:function(){return this.rider2RaceWins.filter(function(t){return"medium"===t.raceCategory&&t.head2head})},rider2Long:function(){return this.rider2RaceWins.filter(function(t){return"long"===t.raceCategory&&t.head2head})}}}},a1hW:function(t,e,i){"use strict";var r=i("Dd8w"),a=i.n(r),n=i("//Fk"),s=i.n(n),o=i("d7EF"),c=i.n(o),l=i("YFWx"),u=i("NYxO"),d=i("uZCW"),f=i("SxTt"),h=i("1VLk"),m=i("cYGi"),v=i("AHSm"),p=i("g6U0"),g=i("FPAx"),b=i("Zsqs");e.a={name:"head2head-id",components:{Page:d.a,Head2HeadBanner:f.a,Head2HeadBarPoints:h.a,Head2HeadRegionalPoints:m.a,Head2HeadRaces:v.a,Head2HeadAveragePoints:p.a,Head2HeadPointsChart:g.a,Head2HeadPositionChart:b.a},asyncData:function(t){var e=t.params,i=t.error,r=function(t){return l.a.get("data/riders/"+t+".json")},a=e.ids.split("vs"),n=c()(a,2),o=n[0],u=n[1];return s.a.all([r(o),r(u)]).then(function(t){var e=c()(t,2),i=e[0],r=e[1];return{rider1:i.data,rider2:r.data}}).catch(function(t){i({statusCode:404,message:"Rider not found"})})},computed:a()({},Object(u.mapGetters)({events:"events/data",isMobile:"is-mobile/isMobile"}),{title:function(){return this.rider1.name+" v "+this.rider2.name}})}},bQk2:function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-collapse",{staticClass:"card",attrs:{open:t.show},on:{"update:open":function(e){t.show=e}}},[i("div",{staticClass:"card-header",attrs:{slot:"trigger"},slot:"trigger"},[i("p",{staticClass:"card-header-title small-margin-top no-padding-top no-padding-bottom"},[t._v("\n          "+t._s(t.title)+" Race Wins\n        ")]),i("a",{staticClass:"card-header-icon"},[i("b-icon",{attrs:{icon:t.show?"caret-up":"caret-down"}})],1)]),i("div",{staticClass:"card-content has-text-centered no-padding-top"},[i("div",{staticClass:"content small-margin-top"},[i("div",{staticClass:"columns is-mobile"},[i("div",{staticClass:"column has-border-right"},[i("Head2HeadTable",{attrs:{races:t.rider1Races}})],1),i("div",{staticClass:"column"},[i("Head2HeadTable",{attrs:{races:t.rider2Races}})],1)])])])])},staticRenderFns:[]};e.a=r},"c/Tr":function(t,e,i){t.exports={default:i("5zde"),__esModule:!0}},cLHn:function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{directives:[{name:"show",rawName:"v-show",value:this.complete,expression:"complete"}],staticClass:"tag is-success"},[this._v("Complete")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!this.complete,expression:"!complete"}],staticClass:"tag is-info"},[this._v("Incomplete")]),e("CantComplete",{attrs:{flag:this.canComplete}})],1)},staticRenderFns:[]};e.a=r},cYGi:function(t,e,i){"use strict";var r=i("tV6U"),a=i("+HH2"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},d7EF:function(t,e,i){"use strict";e.__esModule=!0;var r=n(i("us/S")),a=n(i("BO1k"));function n(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,e){var i=[],r=!0,n=!1,s=void 0;try{for(var o,c=(0,a.default)(t);!(r=(o=c.next()).done)&&(i.push(o.value),!e||i.length!==e);r=!0);}catch(t){n=!0,s=t}finally{try{!r&&c.return&&c.return()}finally{if(n)throw s}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},dE02:function(t,e,i){"use strict";var r=i("Gu7T"),a=i.n(r),n=i("z1J/");e.a={name:"head2head-position-chart",components:{LineChart:n.a},props:["rider1","rider2"],computed:{positionHistory:function(){var t=this.rider1.barHistory.map(function(t){return t.position}),e=this.rider2.barHistory.map(function(t){return t.position}),i=function(t,e){return Array(t.length-e.length).fill(0)},r=[];return r=t.length>e.length?this.rider1.barHistory.map(function(t){return t.name}):this.rider2.barHistory.map(function(t){return t.name}),t.length>e.length&&e.unshift.apply(e,a()(i(t,e))),e.length>t.length&&t.unshift.apply(t,a()(i(e,t))),{labels:r,datasets:[{label:this.rider1.name,backgroundColor:"forestgreen",borderColor:"forestgreen",borderWidth:1,fill:!1,data:t},{label:this.rider2.name,backgroundColor:"#a6192e",borderColor:"#a6192e",borderWidth:1,fill:!1,data:e}]}}}}},fBQ2:function(t,e,i){"use strict";var r=i("evD5"),a=i("X8DO");t.exports=function(t,e,i){e in t?r.f(t,e,a(0,i)):t[e]=i}},fNCm:function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero is-primary is-bold"},[e("div",{staticClass:"hero-body tight"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))]),e("h2",{staticClass:"subtitle"},[this._v(this._s(this.subtitle))])])])])},staticRenderFns:[]};e.a=r},g6U0:function(t,e,i){"use strict";var r=i("7qVf"),a=i("05C/"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},hPg5:function(t,e,i){"use strict";e.a={name:"header",props:["title","subtitle"]}},hmBB:function(t,e,i){"use strict";var r=i("snwr");e.a={name:"head2head-races",props:["title","rider1Races","rider2Races"],components:{Head2HeadTable:r.a},data:function(){return{show:!1}}}},htll:function(t,e,i){"use strict";var r=i("Mtiv"),a=i("6+GS"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},hwoc:function(t,e,i){var r=i("wJHc");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("20f330e8",r,!0,{sourceMap:!1})},kaUX:function(t,e,i){"use strict";var r=i("PJh5"),a=i.n(r),n=i("Uyz7"),s={currency:function(t){return"£"+t.toFixed(2)},decimal:function(t){return t.toFixed(2)},integer:function(t){return parseInt(t)},date:function(t){return t.split(" ")[0]+" "+t.split(" ")[1].substring(0,3)},time:function(t){return t||"N/A"},closingDate:function(t){return a()(t+" 23:59","DD MMMM YYYY HH:mm",!0).fromNow(!0)},directionIcon:function(t){return t<0?"fa fa-caret-up":t>0?"fa fa-caret-down":"fa fa-ellipsis-h"},directionClass:function(t){return t<0?"icon is-success is-small":t>0?"icon is-danger is-small":"icon is-small"},direction:function(t){return 0===t?"":Math.abs(t)},ordinal:function(t){if("DNS"===t||"DNF"===t||"N/A"===t||""===t)return t;var e=["th","st","nd","rd"],i=t%100;return t+(e[(i-20)%10]||e[i]||e[0])},ordinalOnly:function(t){if("DNS"===t||"DNF"===t||"N/A"===t||""===t)return"";if(t>120)return"";var e=["th","st","nd","rd"],i=t%100;return e[(i-20)%10]||e[i]||e[0]},removeZeroPoints:function(t){return 0===t?"":t},distance:function(t){return""+t.substring(0,1).toUpperCase()+t.substring(1)},barPosition:function(t){return t>n.a.barPositions?"":t},barPoints:function(t){return 0===t?"":t},positive:function(t){return Math.abs(t)},firstLetter:function(t){return t?t.substring(0,1):""},camel:function(t){return t.toLowerCase().replace(/^\w|\s\w/g,function(t){return t.toUpperCase()})}};e.a=s},l0cf:function(t,e,i){"use strict";var r=i("Dd8w"),a=i.n(r),n=i("NYxO");e.a={name:"menu-desktop",computed:a()({},Object(n.mapGetters)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))}},l69i:function(t,e,i){"use strict";var r=i("Dd8w"),a=i.n(r),n=i("NYxO"),s=i("s9Qj"),o=i("htll"),c=i("npdG");e.a={name:"layout",props:["title","subtitle"],components:{NavBar:s.a,NavBarMobile:o.a,PageHeader:c.a},methods:a()({},Object(n.mapMutations)({setTitle:"title/setTitle"})),computed:a()({},Object(n.mapGetters)({isMobile:"is-mobile/isMobile"})),mounted:function(){this.setTitle(this.title)}}},mEok:function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"has-text-centered"},[e("p",{staticClass:"heading small-margin-top"},[this._v("Races")]),e("p",{staticClass:"title is-2"},[this._v("\n      "+this._s(this.wins)+"\n      "),this._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-warning is-large"},[e("i",{staticClass:"fa fa-trophy"})])}]};e.a=r},mJB7:function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"has-text-centered small-margin-top"},[i("p",{staticClass:"heading"},[t._v("Average Points")]),i("h1",{staticClass:"title is-5 no-margin-top"},[t._v("\n    "+t._s(t._f("decimal")(t.rider1.bar.averagePointsPerRace))+"\n    "),i("sup",{directives:[{name:"show",rawName:"v-show",value:t.showAveragePointsPerRaceDiff,expression:"showAveragePointsPerRaceDiff"}],staticClass:"subtitle is-7"},[i("span",{staticClass:"win-diff"},[t._v("+"+t._s(t._f("decimal")(t.averagePointsPerRaceDiff)))])])]),i("p",{staticClass:"heading"},[t._v("Average points total")]),i("p",{staticClass:"title is-5 no-margin-top small-margin-bottom",staticStyle:{"margin-top":"0"}},[t._v("\n    "+t._s(t.rider1.bar.predictedFinalPoints)+"\n    "),i("sup",{directives:[{name:"show",rawName:"v-show",value:t.showPredictedDiff,expression:"showPredictedDiff"}],staticClass:"subtitle is-7"},[i("span",{staticClass:"win-diff"},[t._v("+"+t._s(t._f("decimal")(t.predictedDiff)))])])])])},staticRenderFns:[]};e.a=r},mkfb:function(t,e,i){"use strict";var r=i("Dd8w"),a=i.n(r),n=i("kaUX"),s=i("JxW5");e.a={name:"head2head-bar-points",filters:n.a,props:["rider1","rider2"],data:function(){return a()({},s.default)},computed:{grandDiff:function(){return this.rider1.bar.totals.grand-this.rider2.bar.totals.grand},showGrandDiff:function(){return this.grandDiff>0},shortDiff:function(){return this.rider1.bar.totals.short-this.rider2.bar.totals.short},showShortDiff:function(){return this.shortDiff>0},mediumDiff:function(){return this.rider1.bar.totals.medium-this.rider2.bar.totals.medium},showMediumDiff:function(){return this.mediumDiff>0},longDiff:function(){return this.rider1.bar.totals.long-this.rider2.bar.totals.long},showLongDiff:function(){return this.longDiff>0}}}},npdG:function(t,e,i){"use strict";var r=i("hPg5"),a=i("fNCm");var n=function(t){i("hwoc")},s=i("VU/8")(r.a,a.a,!1,n,"data-v-a2c4da0c",null);e.a=s.exports},oOnT:function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"has-text-centered small-margin-top"},[e("p",{staticClass:"heading"},[this._v("Points")]),e("LineChart",{attrs:{chartData:this.pointsHistory,height:200}})],1)},staticRenderFns:[]};e.a=r},pIUh:function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{directives:[{name:"show",rawName:"v-show",value:!this.flag,expression:"!flag"}],staticClass:"tag is-danger"},[this._v("Can't Complete")])},staticRenderFns:[]};e.a=r},qyJz:function(t,e,i){"use strict";var r=i("+ZMJ"),a=i("kM2E"),n=i("sB3e"),s=i("msXi"),o=i("Mhyx"),c=i("QRG4"),l=i("fBQ2"),u=i("3fs2");a(a.S+a.F*!i("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,a,d,f=n(t),h="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,p=void 0!==v,g=0,b=u(f);if(p&&(v=r(v,m>2?arguments[2]:void 0,2)),void 0==b||h==Array&&o(b))for(i=new h(e=c(f.length));e>g;g++)l(i,g,p?v(f[g],g):f[g]);else for(d=b.call(f),i=new h;!(a=d.next()).done;g++)l(i,g,p?s(d,v,[a.value,g],!0):a.value);return i.length=g,i}})},s9Qj:function(t,e,i){"use strict";var r=i("ENYB"),a=i("Uijt"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},snwr:function(t,e,i){"use strict";var r=i("Pw2Q"),a=i("YHwN"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},tV6U:function(t,e,i){"use strict";var r=i("/qcc");e.a={name:"head2head-regional-points",props:["rider1","rider2","is-mobile"],components:{Head2HeadRegionalPointsSingle:r.a}}},uZ0H:function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar-menu",class:{"is-active":t.menuIsActive},attrs:{id:"navMenu"}},[i("div",{staticClass:"navbar-start"},[i("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),i("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/events"}},[t._v("Events & Results")]),i("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[i("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"bar"}}},[t._v("Tables")]),i("div",{staticClass:"navbar-dropdown"},[i("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"bar"}}},[t._v("Overall")]),i("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"vbar"}}},[t._v("Vets")]),i("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"lbar"}}},[t._v("Ladies")]),i("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"jbar"}}},[t._v("Junior")]),i("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-bar"}}},[t._v("Team")])],1)],1),i("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[i("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"riders"}}},[t._v("Riders")]),i("div",{staticClass:"navbar-dropdown"},[i("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"riders"}}},[t._v("Find Rider")]),i("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"head2head"}}},[t._v("Head 2 Head")])],1)],1)],1),i("div",{staticClass:"navbar-end"})])},staticRenderFns:[]};e.a=r},uZCW:function(t,e,i){"use strict";var r=i("l69i"),a=i("AHTq"),n=i("VU/8")(r.a,a.a,!1,null,null,null);e.a=n.exports},"us/S":function(t,e,i){t.exports={default:i("Xd32"),__esModule:!0}},wJHc:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".tight[data-v-a2c4da0c]{padding:16px;padding:1rem}",""])},xZvE:function(t,e,i){"use strict";var r=i("LmCr");e.a={name:"bar-complete",props:["complete","can-complete"],components:{CantComplete:r.a}}},"z1J/":function(t,e,i){"use strict";var r=i("UlOv"),a=(i.n(r),r.mixins.reactiveProp);e.a=r.Line.extend({mixins:[a],props:["chartData"],mounted:function(){this.renderChart(this.chartData,{scales:{xAxes:[{gridLines:{display:!0}}],yAxes:[{gridLines:{display:!0}}]}})}})}});