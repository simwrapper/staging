import{d,n as c,g as l,S as f,m as y,C as g}from"./index-9e16213c.js";import{r as w}from"./index-e24927de.js";import{c as _,l as F}from"./turf.es-8ac32224.js";import{d as u}from"./index-2a06dd4e.js";import{n as b}from"./nprogress-ea5e195a.js";import{C as x,p as v}from"./Coords-23d23a7c.js";import{r as C}from"./index-ba4820ee.js";import{y as L}from"./index-d85b59ed.js";import{f as k}from"./util-8aa83d73.js";import{C as M}from"./CollapsiblePanel-95d764e0.js";import{Z as T}from"./ZoomButtons-9a79fa5f.js";import{H as D}from"./HTTPFileSystem-231ef203.js";import"./fxp-26b9b10f.js";const $={messages:{en:{linewidth:"Line widths:",legend:"Legend:"},de:{linewidth:"Linienbreite:",legend:"Legende:"}}},O=d({name:"LegendBoxOD",i18n:$,props:{rows:{type:Array,required:!0}}});var z=function(){var e=this,i=e._self._c;return e._self._setupProxy,i("div",{attrs:{id:"legend-container"}},[i("p",{staticClass:"title"},[e._v(e._s(e.$t("legend")))]),e._l(e.rows,function(s){return i("div",{staticClass:"legend-item"},[typeof s=="string"&&s.includes("#")?i("div",{staticClass:"legend-col",style:{"background-color":s}}):e._e(),typeof s=="string"&&!s.includes("#")&&s=="↓"?i("div",{staticClass:"legend-element1"},[e._v(e._s(s))]):e._e(),typeof s=="string"&&!s.includes("#")&&s!="↓"?i("div",{staticClass:"legend-element2"},[e._v(e._s(s))]):e._e()])})],2)},V=[];var A=c(O,z,V,!1,null,"3d3d9829",null,null);const j=A.exports,E=d({name:"LineFilterSlider",props:{initialValue:{type:Number,required:!0}},data:()=>({sliderValue:0,options:{size:"is-small",indicator:!0,min:0,max:100,"tooltip-always":!0,tooltip:!0,data:[0,1,2,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,"Alle"]}}),mounted(){this.options["custom-formatter"]=t=>""+this.options.data[t],this.sliderValue=this.initialValue,this.sliderValue=this.options.data.includes(this.initialValue)?this.options.data.indexOf(this.initialValue):0,this.options.max=this.options.data.length-1},watch:{sliderValue(t){this.$emit("change",this.options.data[t])}}});var I=function(){var e=this,i=e._self._c;return e._self._setupProxy,i("b-slider",e._b({staticClass:"time-slider",attrs:{"tooltip-always":""},model:{value:e.sliderValue,callback:function(s){e.sliderValue=s},expression:"sliderValue"}},"b-slider",e.options,!1),e._l(e.options.data,function(s,a){return i("b-slider-tick",{key:a,attrs:{value:a}})}),1)},R=[];var W=c(E,I,R,!1,null,"db28c001",null,null);const Y=W.exports,P={messages:{en:{linewidth:"Line widths:",legend:"Legend:",trips:"trips"},de:{linewidth:"Linienbreite:",legend:"Legende:",trips:"Fahrten"}}},B=d({name:"LineFilterSlider",i18n:P,props:{rows:{type:Array,required:!0}}});var X=function(){var e=this,i=e._self._c;return e._self._setupProxy,i("div",{attrs:{id:"scale-container"}},[i("p",{staticClass:"title"},[e._v(e._s(e.$t("linewidth")))]),i("div",{staticClass:"scale-element"},[e._v(e._s("|↔︎|"))]),i("div",{staticClass:"scale-scale"},[e._v(e._s(`~ ${this.rows[0]} `+e.$t("trips")))]),i("p")])},N=[];var G=c(B,X,N,!1,null,"05aee5dc",null,null);const q=G.exports,H=d({name:"TimeSliderX",components:{},props:{useRange:Boolean,all:String,stops:{type:Array,required:!0}},data:()=>({sliderValue:0}),computed:{allStops(){return[...this.all?[this.all]:[],...this.stops]},stopLabel(){return Array.isArray(this.sliderValue)?`${this.allStops[this.sliderValue[0]]} : ${this.allStops[this.sliderValue[1]]}`:this.allStops[this.sliderValue]}},watch:{useRange(t){t?this.sliderValue=[1,this.allStops.length-1]:this.sliderValue=this.sliderValue[0]},sliderValue(){const t=Array.isArray(this.sliderValue)?[this.allStops[this.sliderValue[0]],this.allStops[this.sliderValue[1]]]:this.allStops[this.sliderValue];this.$emit("change",t)}},mounted(){},methods:{}});var Z=function(){var e=this,i=e._self._c;return e._self._setupProxy,i("div",{staticClass:"time-slider"},[i("b-slider",{attrs:{min:0,max:e.stops.length,tooltip:!1},model:{value:e.sliderValue,callback:function(s){e.sliderValue=s},expression:"sliderValue"}},e._l(e.allStops,function(s,a){return i("b-slider-tick",{key:s,attrs:{value:a}})}),1),i("p",[i("b",[e._v(e._s(e.stopLabel))])])],1)},K=[];var U=c(H,Z,K,!1,null,"e8e0a0de",null,null);const J=U.exports,Q=d({name:"ScaleSlider",props:{stops:{type:Array,required:!0},initialValue:{type:Number,required:!0}},data:()=>({sliderValue:1,options:{"tooltip-always":!0,min:0,size:"is-small",max:100,indicator:!0,data:[],"custom-formatter":{}}}),mounted(){this.options["custom-formatter"]=t=>""+this.options.data[t],this.options.max=this.stops.length-1,this.options.data=this.stops,this.sliderValue=this.stops.includes(this.initialValue)?this.stops.indexOf(this.initialValue):0},watch:{sliderValue(){this.sliderChangedEvent()}},methods:{sliderChangedEvent(){this.$emit("change",this.options.data[this.sliderValue])}}});var ee=function(){var e=this,i=e._self._c;return e._self._setupProxy,e.options.data.length?i("b-slider",e._b({staticClass:"time-slider",model:{value:e.sliderValue,callback:function(s){e.sliderValue=s},expression:"sliderValue"}},"b-slider",e.options,!1),e._l(e.options.data,function(s,a){return i("b-slider-tick",{key:a,attrs:{value:a}})}),1):e._e()},te=[];var ie=c(Q,ee,te,!1,null,"44e9347b",null,null);const se=ie.exports;function ae(){return new Worker("/staging/assets/AggregateDatasetStreamer.worker-89f2607e.js")}const oe={messages:{en:{legend:"Legend:",lineWidth:"Line width:",lineWidths:"Line widths",hide:"Hide smaller than",time:"Time of Day",duration:"Duration",circle:"Centroids",showCentroids:"Show centroids",showNumbers:"Show totals",total:"Totals for",origins:"Origins",dest:"Destinations"},de:{}}},p="Alle >>",re=0,S=[1,3,5,10,25,50,100,150,200,300,400,450,500,1e3,5e3],ne=d({name:"AggregateOD",i18n:oe,components:{CollapsiblePanel:M,LegendBox:j,LineFilterSlider:Y,ScaleBox:q,ScaleSlider:se,TimeSlider:J,ZoomButtons:T},props:{root:{type:String,required:!0},subfolder:{type:String,required:!0},yamlConfig:String,config:Object,thumbnail:Boolean},data:()=>({globalState:l.state,isFinishedLoading:!1,myState:{subfolder:"",yamlConfig:"",thumbnail:!1},vizDetails:{csvFile:"",shpFile:"",dbfFile:"",projection:"",scaleFactor:1,title:"",description:"",mapIsIndependent:!1},standaloneYAMLconfig:{csvFile:"",shpFile:"",dbfFile:"",projection:"",scaleFactor:1,title:"",description:"",mapIsIndependent:!1},YAMLrequirementsOD:{shpFile:"",dbfFile:"",csvFile:"",projection:"",scaleFactor:1},containerId:`c${Math.floor(1e12*Math.random())}`,mapId:`map-c${Math.floor(1e12*Math.random())}`,centroids:{},centroidSource:{},linkData:{},spiderLinkFeatureCollection:{},zoneData:{},dailyData:{},marginals:{},hoveredStateId:0,rowName:"",colName:"",headers:[],geojson:{},idColumn:"",mapIsIndependent:!1,showTimeRange:!1,showCentroids:!0,showCentroidLabels:!0,isOrigin:!0,selectedCentroid:0,maxZonalTotal:0,loadingText:"Aggregierte Quell-Ziel Muster",mymap:{},project:{},scaleFactor:1,scaleValues:S,currentScale:S[0],currentTimeBin:p,allTimeBinsLabel:p,lineFilter:0,projection:"",hoverId:null,_mapExtentXYXY:null,_maximum:null,bounceTimeSlider:{},bounceScaleSlider:{},bounceLineFilter:{},resizer:null,isMapMoving:!1,isDarkMode:!1,csvWorker:null}),computed:{fileSystem(){const t=this.$store.state.svnProjects.filter(e=>e.slug===this.root);if(t.length===0)throw console.log("no such project"),Error;return t[0]},fileApi(){return new D(this.fileSystem,l)},isMobile(){const t=window,e=document,i=e.documentElement,s=e.getElementsByTagName("body")[0],a=t.innerWidth||i.clientWidth||s.clientWidth;return t.innerHeight||i.clientHeight||s.clientHeight,a<640},legendRows(){return["#00aa66","#880033","↓","↑"]},scaleRows(){return[Math.min(Math.round((1200*Math.pow(this.currentScale,-1)+20)*Math.sqrt(this.scaleFactor)),1e3*this.scaleFactor)]}},methods:{setupResizer(){this.resizer=new ResizeObserver(()=>{this.mymap&&this.mymap.resize()});const t=document.getElementById(this.containerId);this.resizer.observe(t)},configureSettings(){(this.vizDetails.lineWidths||this.vizDetails.lineWidth)&&(this.currentScale=this.vizDetails.lineWidth||this.vizDetails.lineWidths||1),this.vizDetails.hideSmallerThan&&(this.lineFilter=this.vizDetails.hideSmallerThan)},handleMapMotion(){const t={longitude:this.mymap.getCenter().lng,latitude:this.mymap.getCenter().lat,bearing:this.mymap.getBearing(),zoom:this.mymap.getZoom(),pitch:this.mymap.getPitch()};this.mapIsIndependent||this.$store.commit("setMapCamera",t),this.isMapMoving||(this.isMapMoving=!0)},async getVizDetails(){if(this.config)this.validateYAML(),this.vizDetails=Object.assign({},this.config);else try{const t=this.myState.yamlConfig.indexOf("/")>-1?this.myState.yamlConfig:this.myState.subfolder+"/"+this.myState.yamlConfig,e=await this.fileApi.getFileText(t);this.standaloneYAMLconfig=Object.assign({},L.parse(e)),this.validateYAML(),this.setVizDetails()}catch(t){console.error(""+t)}this.$emit("title",this.vizDetails.title),this.scaleFactor=this.vizDetails.scaleFactor,this.projection=this.vizDetails.projection,this.mapIsIndependent=!!this.vizDetails.mapIsIndependent,this.idColumn=this.vizDetails.idColumn?this.vizDetails.idColumn:"id",b.done()},validateYAML(){const t=new RegExp(".*(yml|yaml)$").test(this.myState.yamlConfig);let e={};t?e=this.standaloneYAMLconfig:e=this.config;for(const i in this.YAMLrequirementsOD)i in e||this.$emit("error",{type:f.ERROR,msg:`${this.yamlConfig}: missing required key: ${i}`,desc:""})},setVizDetails(){this.vizDetails=Object.assign({},this.vizDetails,this.standaloneYAMLconfig);const t=this.vizDetails.title?this.vizDetails.title:"Aggregate OD";this.$emit("title",t)},async findFilenameFromWildcard(t){let e=t.indexOf("/")>-1?t.substring(0,t.lastIndexOf("/")):this.subfolder;const{files:i}=await this.fileApi.getDirectory(e);let s=t.indexOf("/")===-1?t:t.substring(t.lastIndexOf("/")+1);const a=k(i,s);if(a.length===1)return`${e}/${a[0]}`;throw Error("File not found: "+t)},async loadFiles(){try{this.loadingText="Dateien laden...";const t=await this.findFilenameFromWildcard(`${this.myState.subfolder}/${this.vizDetails.shpFile}`),e=await this.findFilenameFromWildcard(`${this.myState.subfolder}/${this.vizDetails.dbfFile}`),i=await this.fileApi.getFileBlob(t),s=await C.arraybuffer(i),a=await this.fileApi.getFileBlob(e),o=await C.arraybuffer(a);return{shpFile:s,dbfFile:o}}catch(t){const e=t;let i=e.statusText||""+e;return e.url&&(i+=": "+e.url),console.error(i),this.loadingText=""+t,this.$emit("error",i),null}},async setupMap(){try{this.mymap=new y.Map({container:this.mapId,style:l.getters.mapStyle,logoPosition:"top-left"})}catch{console.error("HUH?");return}try{const t=localStorage.getItem(this.$route.fullPath+"-bounds");if(t){const e=JSON.parse(t),i=this.isMobile?0:1,s={top:50*i,bottom:50*i,right:100*i,left:50*i};this.$store.commit("setMapCamera",{longitude:.5*(e[0]+e[2]),latitude:.5*(e[1]+e[3]),zoom:8,pitch:0,bearing:0,jump:!0})}}catch{}if(this.mymap.on("click",this.handleEmptyClick),this.mymap.on("load",this.mapIsReady),this.mymap.on("move",this.handleMapMotion),this.thumbnail){let t=document.getElementsByClassName("mapboxgl-ctrl mapboxgl-ctrl-attrib mapboxgl-compact");for(const e of t)e.setAttribute("style","display: none");t=document.getElementsByClassName("mapboxgl-ctrl mapboxgl-ctrl-group");for(const e of t)e.setAttribute("style","display: none");t=document.getElementsByClassName("mapboxgl-ctrl-logo");for(const e of t)e.setAttribute("style","display: none")}else{let t=document.getElementsByClassName("mapboxgl-ctrl-logo");for(const e of t)e.setAttribute("style","margin-bottom: 3rem;")}},handleEmptyClick(t){this.mymap.queryRenderedFeatures(t.point).filter(e=>e.source==="centroids"||e.source==="spider-source").length===0&&(this.fadeUnselectedLinks(-1),this.selectedCentroid=0,this.isMobile)},async mapIsReady(){const t=await this.loadFiles();t&&(this.geojson=await this.processShapefile(t),this.geojson&&this.loadCSVData()),b.done()},createSpiderLinks(){this.spiderLinkFeatureCollection={type:"FeatureCollection",features:[]};for(const t of Object.keys(this.linkData)){const e=this.linkData[t];if(!(e.daily<=this.lineFilter))try{const i=this.centroids[e.orig].geometry.coordinates,s=this.centroids[e.dest].geometry.coordinates,a=i[1]-s[1]>0?"#00aa66":"#880033",o=.7,r={id:t,orig:e.orig||0,dest:e.dest||0,daily:e.daily||0,color:a,fade:o};r[p]=e.daily,e.values.forEach((m,n)=>{r[this.headers[n]]=m??0});const h={type:"Feature",properties:r,geometry:{type:"LineString",coordinates:[i,s]}};this.spiderLinkFeatureCollection.features.push(h)}catch{}}},updateSpiderLinks(){this.createSpiderLinks(),this.selectedCentroid?this.fadeUnselectedLinks(this.selectedCentroid):this.mymap.getSource("spider-source").setData(this.spiderLinkFeatureCollection)},buildSpiderLinks(){this.mymap.getSource("spider-source")||(this.createSpiderLinks(),this.mymap.addSource("spider-source",{data:this.spiderLinkFeatureCollection,type:"geojson"})),this.mymap.getLayer("spider-layer")&&this.mymap.removeLayer("spider-layer"),this.mymap.addLayer({id:"spider-layer",source:"spider-source",type:"line",paint:{"line-color":["get","color"],"line-width":["*",1/500*this.scaleFactor,["get","daily"]],"line-offset":["*",.5,["get","daily"]],"line-opacity":["get","fade"]},filter:[">",["get",this.currentTimeBin],0]},"centroid-layer"),this.changedScale(this.currentScale);const t=this;this.mymap.on("click","spider-layer",function(e){t.clickedOnSpiderLink(e)}),this.mymap.on("mousemove","spider-layer",function(e){t.mymap.getCanvas().style.cursor=e?"pointer":"grab"}),this.mymap.on("mouseleave","spider-layer",function(){t.mymap.getCanvas().style.cursor="grab"})},clickedOrigins(){this.isOrigin=!0,this.updateCentroidLabels(),this.convertRegionColors(this.geojson),this.mymap.getSource("shpsource").setData(this.geojson)},clickedDestinations(){this.isOrigin=!1,this.updateCentroidLabels(),this.convertRegionColors(this.geojson),this.mymap.getSource("shpsource").setData(this.geojson)},updateCentroidLabels(){const t=this.isOrigin?"{dailyFrom}":"{dailyTo}",e=this.isOrigin?"widthFrom":"widthTo";this.mymap.getLayer("centroid-layer")&&this.mymap.removeLayer("centroid-layer"),this.mymap.getLayer("centroid-label-layer")&&this.mymap.removeLayer("centroid-label-layer"),this.showCentroids&&this.mymap.addLayer({layout:{visibility:this.thumbnail?"none":"visible"},id:"centroid-layer",source:"centroids",type:"circle",paint:{"circle-color":"#ec0","circle-radius":["get",e],"circle-stroke-width":2,"circle-stroke-color":"white"},filter:[">",["get",this.isOrigin?"dailyFrom":"dailyTo"],0]}),this.showCentroidLabels&&this.mymap.addLayer({id:"centroid-label-layer",source:"centroids",type:"symbol",layout:{"text-field":t,"text-size":11},paint:this.showCentroids?{}:{"text-halo-color":"white","text-halo-width":2},filter:[">",["get",this.isOrigin?"dailyFrom":"dailyTo"],0]})},unselectAllCentroids(){this.fadeUnselectedLinks(-1),this.selectedCentroid=0},clickedOnCentroid(t){t.originalEvent.stopPropagating=!0;const i=t.features[0].properties.id;if(i===this.selectedCentroid){this.unselectAllCentroids();return}this.selectedCentroid=i,this.fadeUnselectedLinks(i)},fadeUnselectedLinks(t){const e=this.mymap;for(const i of this.spiderLinkFeatureCollection.features){const s=i.properties.id.split(":");let a=s[0]===String(t)||s[1]===String(t)?.7:re;t===-1&&(a=.7),i.properties.fade=a}e.getSource("spider-source").setData(this.spiderLinkFeatureCollection)},clickedOnSpiderLink(t){if(t.originalEvent.stopPropagating)return;const e=t.features[0].properties,i=Math.round(1e4*e.daily*this.scaleFactor)/1e4;let s=0;const a=""+e.dest+":"+e.orig;this.linkData[a]&&(s=Math.round(1e4*this.linkData[a].daily*this.scaleFactor)/1e4);const o=i+s;let r=`<h1><b>${o} Bidirectional Trip${o!==1?"s":""}</b></h1>`;r+='<p style="width: max-content">_________________________</p>',r+=`<p style="width: max-content">${i} trip${i!==1?"s":""} // ${s} reverse trip${s!==1?"s":""}</p>`,new y.Popup({closeOnClick:!0}).setLngLat(t.lngLat).setHTML(r).addTo(this.mymap)},convertRegionColors(t){for(const e of t.features){if(!e.properties)continue;let a=128+127*(1-(this.isOrigin?e.properties.dailyFrom:e.properties.dailyTo)/this.maxZonalTotal);a||(a=255),e.properties.blue=a}},handleCentroidsForTimeOfDayChange(t){const e={type:"FeatureCollection",features:[]};for(const s of this.geojson.features){const a=_(s);a.properties.id=s.id;const o=this.calculateCentroidValuesForZone(t,s);a.properties.dailyFrom=Math.round(1e4*o.from*this.scaleFactor)/1e4,a.properties.dailyTo=Math.round(1e4*o.to*this.scaleFactor)/1e4;let r=Math.log10(a.properties.dailyFrom);a.properties.widthFrom=6+r*3.5,r=Math.log10(a.properties.dailyTo),a.properties.widthTo=6+r*3.5,s.properties||(s.properties={}),s.properties.dailyFrom=o.from,s.properties.dailyTo=o.to,a.properties.dailyFrom+a.properties.dailyTo>0&&(e.features.push(a),s.properties&&(this.centroids[s.properties[this.idColumn]]=a))}this.centroidSource=e,this.mymap.getSource("centroids").setData(this.centroidSource),this.updateCentroidLabels()},calculateCentroidValuesForZone(t,e){let i=0,s=0;if(t==="Alle >>")return s=e.properties.dailyTo,i=e.properties.dailyFrom,{from:i,to:s};const a=this.marginals.from[e.id],o=this.marginals.to[e.id];if(Array.isArray(t)){let h=this.headers.indexOf(t[0])-1;h<0&&(h=0);const m=this.headers.indexOf(t[1])-1;for(let n=h;n<=m;n++)i+=a?Math.round(a[n]):0,s+=o?Math.round(o[n]):0;return{from:i,to:s}}const r=this.headers.indexOf(t)-1;return i=a?Math.round(a[r]):0,s=o?Math.round(o[r]):0,{from:i,to:s}},buildCentroids(t){const e={type:"FeatureCollection",features:[]};for(const i of t.features){if(!i.id)continue;const s=_(i);s.properties.id=i.id,s.id=i.id;let a=Math.round(this.marginals.rowTotal[i.id]),o=Math.round(this.marginals.colTotal[i.id]);a||(a=0),o||(o=0),s.properties.dailyFrom=a*this.scaleFactor,s.properties.dailyTo=o*this.scaleFactor;let r=Math.log10(s.properties.dailyFrom);s.properties.widthFrom=6+r*3.5,r=Math.log10(s.properties.dailyTo),s.properties.widthTo=6+r*3.5,a&&(this.maxZonalTotal=Math.max(this.maxZonalTotal,a)),o&&(this.maxZonalTotal=Math.max(this.maxZonalTotal,o)),i.properties||(i.properties={}),i.properties.dailyFrom=a,i.properties.dailyTo=o,s.properties.dailyFrom+s.properties.dailyTo>0&&(e.features.push(s),i.properties&&(this.centroids[i.id]=s),this.updateMapExtent(s.geometry.coordinates))}this.centroidSource=e,this.mymap.getSource("centroids")||this.mymap.addSource("centroids",{data:this.centroidSource,type:"geojson"}),this.updateCentroidLabels(),this.mymap.on("click","centroid-layer",i=>{this.clickedOnCentroid(i)}),this.mymap.on("mousemove","centroid-layer",i=>{this.mymap.getCanvas().style.cursor=i?"pointer":"grab"}),this.mymap.on("mouseleave","centroid-layer",()=>{this.mymap.getCanvas().style.cursor="grab"})},setMapExtent(){localStorage.setItem(this.$route.fullPath+"-bounds",JSON.stringify(this._mapExtentXYXY));const t=this.thumbnail?{animate:!1}:{padding:{top:25,bottom:25,right:100,left:100},animate:!1};this.mymap.fitBounds(this._mapExtentXYXY,t)},setupKeyListeners(){window.addEventListener("keyup",t=>{t.keyCode===27&&this.pressedEscape()}),window.addEventListener("keydown",t=>{t.keyCode===38&&this.pressedArrowKey(-1),t.keyCode===40&&this.pressedArrowKey(1)})},processGeojson(){for(const t of this.geojson.features){const e=t.properties;e.dailyFrom!==0||e.dailyTo!==0?t.properties.isVisible=!0:t.properties.isVisible=!1}},async processShapefile(t){this.loadingText="Verkehrsnetz bauarbeiten...";const e=await w(t.shpFile,t.dbfFile);e.features.length>150&&(this.lineFilter=10),this.loadingText="Koordinaten berechnen...";for(const i of e.features){const s=i.properties;if(!this.idColumn&&s&&(this.idColumn=Object.keys(s)[0]),!(this.idColumn in s)){this.$emit("error",`Shapefile does not contain ID column "${this.idColumn}"`);return}i.properties&&(i.id=i.properties[this.idColumn]);try{i.geometry.type==="MultiPolygon"?this.convertMultiPolygonCoordinatesToWGS84(i):this.convertPolygonCoordinatesToWGS84(i)}catch(a){console.error("ERR with feature: "+i),console.error(a)}}return e},convertPolygonCoordinatesToWGS84(t){for(const e of t.geometry.coordinates){const i=[];for(const s of e){const a=x.toLngLat(this.projection,s);i.push(a)}e.length=0,e.push(...i)}},origConvertMultiPolygonCoordinatesToWGS84(t){for(const e of t.geometry.coordinates){const i=e[0],s=[];for(const a of i){const o=v(this.projection,"WGS84",a);s.push(o)}e[0]=s}},convertMultiPolygonCoordinatesToWGS84(t){t.geometry.coordinates=this.recurseWGS84(t.geometry.coordinates)},recurseWGS84(t){const e=[];for(let i of t)Array.isArray(i[0])?e.push(this.recurseWGS84(i)):e.push(v(this.projection,"WGS84",i));return e},async getDailyDataSummary(){const t={},e={},i={},s={};for(const a of Object.keys(this.zoneData)){i[a]=Array(this.headers.length-1).fill(0);for(const o of Object.keys(this.zoneData[a])){t[a]||(t[a]=0),e[o]||(e[o]=0),this.dailyData[a][o]&&(t[a]+=this.dailyData[a][o],e[o]+=this.dailyData[a][o]),s[o]||(s[o]=Array(this.headers.length-1).fill(0));for(let r=0;r<this.headers.length-1;r++)this.zoneData[a][o][r]&&(i[a][r]+=this.zoneData[a][o][r],s[o][r]+=this.zoneData[a][o][r])}}return{rowTotal:t,colTotal:e,from:i,to:s}},async loadCSVData(){this.loadingText="Load CSV data...";let t="";try{t=await this.findFilenameFromWildcard(`${this.myState.subfolder}/${this.vizDetails.csvFile}`)}catch{this.$store.commit("error",`Error loading ${this.myState.subfolder}/${this.vizDetails.csvFile}`);return}this.csvWorker=new ae,this.csvWorker.onmessage=e=>{var s,a;const i=e.data;i.status?this.loadingText=i.status:i.error?((s=this.csvWorker)==null||s.terminate(),this.loadingText=i.error,this.$emit("error",{type:f.ERROR,msg:`Aggr.OD: Error loading "${this.myState.subfolder}/${this.vizDetails.csvFile}"`,desc:"Check the path and filename"})):i.finished&&((a=this.csvWorker)==null||a.terminate(),this.finishedLoadingData(i))},this.csvWorker.postMessage({fileSystem:this.fileSystem,filePath:t})},async finishedLoadingData(t){console.log(222,"done"),this.loadingText="Building diagram...",this.isFinishedLoading=!0,await this.$nextTick(),this.rowName=t.rowName,this.colName=t.colName,this.headers=t.headers,this.dailyData=t.dailyZoneData,this.zoneData=t.zoneData,this.linkData=t.dailyLinkData,this.marginals=await this.getDailyDataSummary(),this.buildCentroids(this.geojson),this.convertRegionColors(this.geojson),this.addGeojsonToMap(this.geojson),this.setMapExtent(),this.buildSpiderLinks(),this.setupKeyListeners(),this.loadingText=""},updateMapExtent(t){this._mapExtentXYXY[0]=Math.min(this._mapExtentXYXY[0],t[0]),this._mapExtentXYXY[1]=Math.min(this._mapExtentXYXY[1],t[1]),this._mapExtentXYXY[2]=Math.max(this._mapExtentXYXY[2],t[0]),this._mapExtentXYXY[3]=Math.max(this._mapExtentXYXY[3],t[1])},addGeojsonToMap(t){this.processGeojson(),this.addGeojsonLayers(t),this.addNeighborhoodHoverEffects()},addGeojsonLayers(t){this.mymap.getSource("shpsource")||this.mymap.addSource("shpsource",{data:t,type:"geojson"}),this.mymap.getLayer("shplayer-fill")&&this.mymap.removeLayer("shplayer-fill"),this.mymap.addLayer({id:"shplayer-fill",source:"shpsource",type:"fill",paint:{"fill-color":["rgb",["get","blue"],["get","blue"],255],"fill-opacity":.5}},"water"),this.mymap.getLayer("shplayer-border")&&this.mymap.removeLayer("shplayer-border"),this.mymap.addLayer({id:"shplayer-border",source:"shpsource",type:"line",paint:{"line-color":"#66f","line-opacity":.5,"line-width":["case",["boolean",["feature-state","hover"],!1],3,1]},filter:["==","isVisible",!0]},"centroid-layer")},addNeighborhoodHoverEffects(){const t=this;this.mymap.on("mousemove","shplayer-fill",function(e){const i=t.mymap;e.features.length>0&&(t.hoveredStateId&&i.setFeatureState({source:"shpsource",id:t.hoveredStateId},{hover:!1}),t.hoveredStateId=e.features[0].properties[t.idColumn],i.setFeatureState({source:"shpsource",id:t.hoveredStateId},{hover:!0}))}),this.mymap.on("mouseleave","shplayer-fill",function(){const e=t.mymap;t.hoveredStateId&&e.setFeatureState({source:"shpsource",id:t.hoveredStateId},{hover:!1}),t.hoveredStateId=null})},offsetLineByMeters(t,e){try{return F(t,e,{units:"meters"})}catch{}return t},pressedEscape(){this.unselectAllCentroids()},pressedArrowKey(t){},changedTimeSlider(t){this.currentTimeBin=t;const e=this.currentScale/500*this.scaleFactor;if(this.showTimeRange==!1)this.mymap.setPaintProperty("spider-layer","line-width",["*",e,["get",t]]),this.mymap.setPaintProperty("spider-layer","line-offset",["*",.5*e,["get",t]]);else{const i=["+"];let s=!1;for(const a of this.headers)a===t[0]&&(s=!0),a!==p&&(s&&i.push(["get",a]),a===t[1]&&(s=!1));this.mymap.setPaintProperty("spider-layer","line-width",["*",e,i]),this.mymap.setPaintProperty("spider-layer","line-offset",["*",.5*e,i])}this.handleCentroidsForTimeOfDayChange(t)},changedScale(t){this.isFinishedLoading&&(this.currentScale=t,this.changedTimeSlider(this.currentTimeBin))},changedLineFilter(t){t==="Alle"?this.lineFilter=1/0:this.lineFilter=t,this.updateSpiderLinks()}},watch:{"globalState.viewState"(t){if(this.mapIsIndependent)return;if(!this.mymap||this.isMapMoving||this.thumbnail){this.isMapMoving=!1;return}const{bearing:e,longitude:i,latitude:s,zoom:a,pitch:o}=t;if(a)try{this.mymap.off("move",this.handleMapMotion),this.mymap.jumpTo({bearing:e,zoom:a,center:[i,s],pitch:o}),this.mymap.on("move",this.handleMapMotion)}catch{}},"$store.state.colorScheme"(){this.isDarkMode=this.$store.state.colorScheme===g.DarkMode,this.mymap&&(this.mymap.setStyle(l.getters.mapStyle),this.mymap.on("style.load",()=>{this.buildCentroids(this.geojson),this.buildSpiderLinks(),this.addGeojsonToMap(this.geojson)}))},"$store.state.resizeEvents"(){this.mymap&&this.mymap.resize()},showTimeRange(){},showCentroids(){this.updateCentroidLabels()},showCentroidLabels(){this.updateCentroidLabels()}},async created(){this._mapExtentXYXY=[180,90,-180,-90],this._maximum=0},async mounted(){l.commit("setFullScreen",!this.thumbnail),this.isDarkMode=this.$store.state.colorScheme===g.DarkMode,this.bounceTimeSlider=u.debounce(this.changedTimeSlider,100),this.bounceScaleSlider=u.debounce(this.changedScale,50),this.bounceLineFilter=u.debounce(this.changedLineFilter,250),this.myState.thumbnail=this.thumbnail,this.myState.yamlConfig=this.yamlConfig||"",this.myState.subfolder=this.subfolder,await this.getVizDetails(),!this.thumbnail&&(this.setupMap(),this.configureSettings(),this.setupResizer())},beforeDestroy(){this.csvWorker&&this.csvWorker.terminate()},destroyed(){l.commit("setFullScreen",!1)}});var le=function(){var e=this,i=e._self._c;return e._self._setupProxy,i("div",{staticClass:"mycomponent",attrs:{id:e.containerId}},[e.thumbnail?e._e():i("zoom-buttons",{staticClass:"zoom-buttons"}),i("div",{staticClass:"map-container"},[i("div",{staticClass:"mymap",attrs:{id:e.mapId}}),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.thumbnail&&e.loadingText,expression:"!thumbnail && loadingText"}],staticClass:"status-blob"},[i("p",[e._v(e._s(e.loadingText))])]),!e.thumbnail&&!e.loadingText?i("div",{staticClass:"lower-left"},[i("div",{staticClass:"subheading"},[e._v(e._s(e.$t("lineWidths")))]),i("scale-slider",{staticClass:"scale-slider",attrs:{stops:e.scaleValues,initialValue:e.currentScale},on:{change:e.bounceScaleSlider}}),i("div",{staticClass:"subheading"},[e._v(e._s(e.$t("hide")))]),i("line-filter-slider",{staticClass:"scale-slider",attrs:{initialValue:e.lineFilter},on:{change:e.bounceLineFilter}})],1):e._e(),!e.thumbnail&&!e.isMobile?i("div",{staticClass:"lower-right"},[i("legend-box",{staticClass:"complication",attrs:{rows:e.legendRows}}),i("scale-box",{staticClass:"complication",attrs:{rows:e.scaleRows}})],1):e._e()]),e.thumbnail?e._e():i("div",{staticClass:"widgets",style:{padding:e.yamlConfig?"0 0.5rem 0.5rem 0.5rem":"0 0"}},[this.headers.length>2?i("div",{staticClass:"widget-column",staticStyle:{"min-width":"8rem"}},[i("h4",{staticClass:"heading"},[e._v(e._s(e.$t("time")))]),i("b-checkbox",{staticClass:"checkbox",model:{value:e.showTimeRange,callback:function(s){e.showTimeRange=s},expression:"showTimeRange"}},[e._v(e._s(e.$t("duration")))]),i("time-slider",{staticClass:"xtime-slider",attrs:{useRange:e.showTimeRange,stops:e.headers,all:e.allTimeBinsLabel},on:{change:e.bounceTimeSlider}})],1):e._e(),i("div",{staticClass:"widget-column"},[i("h4",{staticClass:"heading"},[e._v(e._s(e.$t("circle")))]),i("b-checkbox",{staticClass:"checkbox",model:{value:e.showCentroids,callback:function(s){e.showCentroids=s},expression:"showCentroids"}},[e._v(" "+e._s(e.$t("showCentroids")))]),i("b-checkbox",{staticClass:"checkbox",model:{value:e.showCentroidLabels,callback:function(s){e.showCentroidLabels=s},expression:"showCentroidLabels"}},[e._v(" "+e._s(e.$t("showNumbers")))])],1),i("div",{staticClass:"widget-column",staticStyle:{margin:"0 0 0 auto"}},[i("h4",{staticClass:"heading"},[e._v(e._s(e.$t("total")))]),i("b-button",{staticClass:"is-small",class:{"is-link":e.isOrigin,"is-active":e.isOrigin},on:{click:e.clickedOrigins}},[e._v(e._s(e.$t("origins")))]),i("b-button",{staticClass:"is-small",class:{"is-link":!e.isOrigin,"is-active":!e.isOrigin},attrs:{hint:"Hide"},on:{click:e.clickedDestinations}},[e._v(e._s(e.$t("dest")))])],1)])],1)},de=[];var ce=c(ne,le,de,!1,null,"c1ac0463",null,null);const Fe=ce.exports;export{Fe as default};
//# sourceMappingURL=AggregateOd-4c44963a.js.map