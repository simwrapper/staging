import{d as u,g,U as m,B as c,S as f,n as p}from"./index-9e16213c.js";import{V as y}from"./VuePlotly-544cafff.js";import{b as x}from"./DashBoard-37e82d6f.js";import"./index-d85b59ed.js";import"./HTTPFileSystem-231ef203.js";import"./TopSheet-5ddf39e4.js";const S=u({name:"BarChartPanel",components:{VuePlotly:y},props:{fileSystemConfig:{type:Object,required:!0},subfolder:{type:String,required:!0},files:{type:Array,required:!0},config:{type:Object,required:!0},cardTitle:{type:String,required:!0},cardId:String,datamanager:{type:Object,required:!0}},data:()=>({globalState:g.state,dataSet:{},id:"scatter-"+Math.floor(1e12*Math.random()),layout:{height:300,margin:{t:8,b:0,l:0,r:0,pad:2},font:{color:"#444444",family:m},xaxis:{automargin:!0,autorange:!0,title:{text:"",standoff:12},animate:!0},yaxis:{automargin:!0,autorange:!0,title:{text:"",standoff:16},animate:!0},legend:{orientation:"v",x:1,y:1}},data:[],options:{displaylogo:!1,responsive:!0,modeBarButtonsToRemove:["pan2d","zoom2d","select2d","lasso2d","zoomIn2d","zoomOut2d","autoScale2d","hoverClosestCartesian","hoverCompareCartesian","resetScale2d","toggleSpikelines","resetViewMapbox"],toImageButtonOptions:{format:"png",filename:"scatter-plot",width:null,height:null}}}),async mounted(){this.updateTheme(),this.options.toImageButtonOptions.filename=x(this.cardTitle,this.subfolder),this.dataSet=await this.loadData(),this.updateChart(),this.$emit("dimension-resizer",{id:this.cardId,resizer:this.changeDimensions}),this.$emit("isLoaded")},beforeDestroy(){var t;(t=this.datamanager)==null||t.removeFilterListener(this.config,this.handleFilterChanged)},watch:{"globalState.isDarkMode"(){this.updateTheme()}},methods:{changeDimensions(t){this.layout=Object.assign({},this.layout,t)},handleFilterChanged(){if(!this.datamanager)return;const{filteredRows:t}=this.datamanager.getFilteredDataset(this.config);if(!t||!t.length)this.dataSet={allRows:{}};else{const e={},a=Object.keys(t[0]);a.forEach(i=>e[i]={name:i,values:[]}),t.forEach(i=>{a.forEach(o=>e[o].values.push(i[o]))}),this.dataSet={allRows:e}}this.updateChart()},updateTheme(){const t={paper_bgcolor:c[this.globalState.colorScheme],plot_bgcolor:c[this.globalState.colorScheme],font:{color:this.globalState.isDarkMode?"#cccccc":"#444444"}};this.layout=Object.assign({},this.layout,t)},async loadData(){try{let t=await this.datamanager.getDataset(this.config);if(!this.config.filters)return t;this.datamanager.addFilterListener(this.config,this.handleFilterChanged);for(const[e,a]of Object.entries(this.config.filters)){const i={dataset:this.config.dataset,column:e,value:a,range:Array.isArray(a)};this.datamanager.setFilter(i)}return{allRows:{}}}catch(t){console.error(""+t)}return{allRows:{}}},updateChart(){this.layout.xaxis.title.text=this.config.xAxisTitle||this.config.xAxisName||"",this.layout.yaxis.title.text=this.config.yAxisTitle||this.config.yAxisName||"";try{this.config.groupBy?this.updateChartWithGroupBy():this.updateChartSimple()}catch(t){const e=""+t;this.$emit("error",{type:f.ERROR,msg:e,desc:"Add a desription..."})}},updateChartWithGroupBy(){},updateChartSimple(){const t=this.dataSet.allRows||{};if(!Object.keys(t).length)return;this.config.factor;const a=this.config.columns||this.config.usedCol||[this.config.y];this.config.legendName&&this.config.legendName,this.config.legendTitle&&this.config.legendTitle;let i=!0;const o=["x"];for(const s of o)t[this.config[s]]||(this.$store.commit("error",`${this.cardTitle}: "${this.config.dataset}" ${o} column "${s}" missing`),i=!1);if(!i)return;let r=t[this.config.x].values||[];this.config.skipFirstRow&&(r=r.slice(1));const h=this.config.markerSize||3;for(let s=0;s<a.length;s++){const l=a[s],d=l;let n=t[l].values;this.config.skipFirstRow&&(n=n.slice(1)),this.data.push({x:r,y:n,name:d,mode:"markers",type:"scatter",textinfo:"label+percent",textposition:"inside",automargin:!0,showlegend:!0,marker:{size:h}})}}}});var _=function(){var e=this,a=e._self._c;return e._self._setupProxy,a("VuePlotly",{staticClass:"myplot",attrs:{data:e.data,layout:e.layout,options:e.options,id:e.id}})},b=[];var C=p(S,_,b,!1,null,"5a661283",null,null);const B=C.exports;export{B as default};
//# sourceMappingURL=scatter-822dee2c.js.map