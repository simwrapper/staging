import{d as o,n as i}from"./index-20e8de26.js";import n from"./XyHexagons-3d23b927.js";import"./index-dffaaa0f.js";import"./index-1759c666.js";import"./util-52c79c95.js";import"./HTTPFileSystem-8b936912.js";import"./CollapsiblePanel-14864aa3.js";import"./DrawingTool-6f8b4801.js";import"./layer-164c13b1.js";import"./text-layer-f6f11c4f.js";import"./path-layer-35865ca1.js";import"./ZoomButtons-fffe1ca5.js";import"./deckgl-15d2eeaf.js";import"./extends-98964cd2.js";import"./index-3cb0914b.js";import"./arc-layer-6bd71d6b.js";import"./column-layer-fcf4d617.js";const s=o({name:"XyHexagonsPanel",components:{XyHexagons:n},props:{fileSystemConfig:{type:Object,required:!0},subfolder:{type:String,required:!0},files:{type:Array,required:!0},config:{type:Object,required:!0}},mounted(){this.isLoaded()},methods:{isLoaded(){this.$emit("isLoaded")}}});var m=function(){var e=this,r=e._self._c;return e._self._setupProxy,r("xy-hexagons",{staticClass:"deck-map",attrs:{root:e.fileSystemConfig.slug,subfolder:e.subfolder,config:e.config,thumbnail:!1},on:{error:function(t){return e.$emit("error",t)}}})},p=[];var a=i(s,m,p,!1,null,"718ba526",null,null);const O=a.exports;export{O as default};
//# sourceMappingURL=hexagons-29daab4f.js.map