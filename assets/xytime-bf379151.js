import{d as o,n as i}from"./index-20e8de26.js";import m from"./XyTime-934d652d.js";import"./lil-gui.esm-1e0f7d72.js";import"./index-1759c666.js";import"./index-3cb0914b.js";import"./util-52c79c95.js";import"./HTTPFileSystem-8b936912.js";import"./CollapsiblePanel-14864aa3.js";import"./DrawingTool-6f8b4801.js";import"./layer-164c13b1.js";import"./text-layer-f6f11c4f.js";import"./path-layer-35865ca1.js";import"./LegendBox-c3e925f1.js";import"./LegendStore-3aadd543.js";import"./TimeSlider-e6b90300.js";import"./deckgl-15d2eeaf.js";import"./extends-98964cd2.js";import"./index-b2f1e90c.js";import"./data-filter-3794c124.js";import"./layer-extension-7f167267.js";import"./ZoomButtons-fffe1ca5.js";const n=o({name:"XyTimeÜanel",components:{XyTime:m},props:{fileSystemConfig:{type:Object,required:!0},subfolder:{type:String,required:!0},files:{type:Array,required:!0},config:{type:Object,required:!0},datamanager:Object},mounted(){},methods:{isLoaded(){this.$emit("isLoaded")}}});var a=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("xy-time",{staticClass:"deck-map",attrs:{root:e.fileSystemConfig.slug,subfolder:e.subfolder,config:e.config,thumbnail:!1,datamanager:e.datamanager},on:{isLoaded:e.isLoaded,error:function(r){return e.$emit("error",r)}}})},p=[];var s=i(n,a,p,!1,null,"64c48d59",null,null);const z=s.exports;export{z as default};
//# sourceMappingURL=xytime-bf379151.js.map