import{d,g as h,S as r,n as c}from"./index-9e16213c.js";import{_ as f}from"./vue-good-table.esm-c2eb33ba.js";const u=d({name:"TablePanel",components:{VueGoodTable:f},props:{fileSystemConfig:{type:Object,required:!0},subfolder:{type:String,required:!0},files:{type:Array,required:!0},config:{type:Object,required:!0},cardTitle:{type:String,required:!0},cardId:String,datamanager:{type:Object,required:!0}},data:()=>({globalState:h.state,dataSet:{},id:"line-"+Math.floor(1e12*Math.random()),YAMLrequirementsLine:{dataset:""},YAMLdeprecations:[],columns:[],rows:[],paginationOptions:{enabled:!0,perPageDropdown:[],dropdownAllowAll:!1,perPage:5},dataColumnNames:["date"],percentColumnNames:["percent"],hideHeader:void 0,isFullsize:!1}),async mounted(){this.dataSet=await this.loadData(),this.prepareData(),this.$emit("isLoaded")},beforeDestroy(){var t;(t=this.datamanager)==null||t.removeFilterListener(this.config,this.handleFilterChanged)},methods:{handleFilterChanged(){if(!this.datamanager)return;const{filteredRows:t}=this.datamanager.getFilteredDataset(this.config);if(!t||!t.length)this.dataSet={allRows:{}};else{const i={},s=Object.keys(t[0]);s.forEach(n=>i[n]={name:n,values:[]}),t.forEach(n=>{s.forEach(e=>i[e].values.push(n[e]))}),this.dataSet={allRows:i}}},async loadData(){if(!this.files.length)return{};try{let t=await this.datamanager.getDataset(this.config,{highPrecision:!0});if(!this.config.filters)return t;this.datamanager.addFilterListener(this.config,this.handleFilterChanged);for(const[i,s]of Object.entries(this.config.filters)){const n={dataset:this.config.dataset,column:i,value:s,range:Array.isArray(s)};this.datamanager.setFilter(n)}return{allRows:{}}}catch(t){console.error(""+t)}return{allRows:{}}},validateYAML(){for(const t in this.YAMLrequirementsLine)t in this.config||this.$emit("error",{type:r.ERROR,msg:`tablev2: missing required key: ${t}`,desc:JSON.stringify(this.config)});for(const t of this.YAMLdeprecations)this.config[t]&&this.$emit("error",{type:r.WARNING,msg:`tablev2: deprecated field: ${t}`,desc:JSON.stringify(this.config)})},onlyNumbers(t){return t.every(i=>typeof i=="number"||i==null)},onlyDates(t){return t.every(i=>i.length==10&&i.split("-").length==3)},columnFilterFn(t,i){return t.toString().includes(i.toString())},prepareData(){let t=0,i,s=[],n=[];this.columns=[],this.rows=[],Object.entries(this.dataSet.allRows).forEach(([e,o])=>{let a=e;a.indexOf(".")>-1&&(a=l=>l[e]),this.columns.push({label:e.charAt(0).toUpperCase()+e.slice(1),field:a,hidden:!1,filterOptions:{enabled:!0,filterFn:this.columnFilterFn}}),i=o,t=i.values.length});for(let e=0;e<t;e++)this.rows.push({});Object.entries(this.dataSet.allRows).forEach(([e,o])=>{i=o,this.onlyNumbers(i.values)?s.push(e):this.onlyDates(i.values)&&n.push(e),t=i.values.length;for(let a=0;a<t;a++)this.rows[a][e]=i.values[a]}),Object.values(this.columns).forEach(e=>{s.includes(e.field)&&Object.assign(e,{type:"number",tdClass:"vgt-right-align-text-for-numbers"}),(n.includes(e.field)||this.dataColumnNames.includes(e.field))&&(Object.assign(e,{type:"date"}),Object.assign(e,{dateInputFormat:"yyyy-MM-dd"}),Object.assign(e,{dateOutputFormat:"yyyy-MM-dd"})),this.percentColumnNames.includes(e.field)&&Object.assign(e,{type:"percentage"})});for(let e=0;e<this.columns.length;e++)this.config.enableFilter?(this.columns[e].filterOptions.enabled=!0,this.columns[e].filterOptions.filterFn=this.columnFilterFn):this.columns[e].filterOptions.enabled=!1;if(Object.keys(this.config).includes("show")&&Object.keys(this.config).includes("hide"))for(let e=0;e<this.columns.length;e++)this.config.show.includes(this.columns[e].field)||(this.columns[e].hidden=!0);else if(Object.keys(this.config).includes("show"))for(let e=0;e<this.columns.length;e++)this.config.show.includes(this.columns[e].field)||(this.columns[e].hidden=!0);else if(Object.keys(this.config).includes("hide"))for(let e=0;e<this.columns.length;e++)this.config.hide.includes(this.columns[e].field)&&(this.columns[e].hidden=!0);t<5?(this.paginationOptions.perPage=t,this.paginationOptions={...this.paginationOptions,perPageDropdown:[t]}):t<10?this.paginationOptions={...this.paginationOptions,perPageDropdown:[5]}:t<20?this.paginationOptions={...this.paginationOptions,perPageDropdown:[5,10]}:this.paginationOptions={...this.paginationOptions,perPageDropdown:[5,10,20]},this.config.style=="topsheet"&&(this.hideHeader=!0,this.isFullsize=!0),this.config.hideHeader!=null&&(this.hideHeader=this.config.hideHeader),(this.isFullsize||this.config.fullsize||this.config.showAllRows||this.config.showallrows||this.config.showAllrows)&&(this.paginationOptions.enabled=!1),t<5&&(this.paginationOptions.enabled=!1)}}});var g=function(){var i=this,s=i._self._c;return i._self._setupProxy,s("vue-good-table",{staticClass:"plugin-panel",class:[i.globalState.isDarkMode?"darktable":"lighttable",i.hideHeader?"hide-header":"",this.config.style=="topsheet"?"topsheet-style":""],attrs:{columns:i.columns,rows:i.rows,"fixed-header":!0,"pagination-options":i.paginationOptions,styleClass:"vgt-table striped bordered condensed"}})},p=[];var m=c(u,g,p,!1,null,"627f26e8",null,null);const O=m.exports;export{O as default};
//# sourceMappingURL=table-101d64d7.js.map