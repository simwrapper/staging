import{d as a,n as i}from"./index-20e8de26.js";const u=a({name:"LegendBox",props:{legendStore:{type:Object,required:!0}},data:()=>({}),beforeDestroy(){this.legendStore.clear()},computed:{sections(){return this.legendStore.state.sections}},methods:{sectionTitle(t){let e=t.column;return t.normalColumn&&(e+=` / ${t.normalColumn}`),t.relative?e+=" (% Diff)":t.diff&&(e+=" (Diff)"),e},getRowsInSection(t){return t?t.values.filter(r=>!Number.isNaN(r.label)):void 0},getRowLabel(t){return t.label},getRowStyle(t){return Array.isArray(t.value)?{backgroundColor:`rgb(${t.value[0]},${t.value[1]},${t.value[2]})`,width:"1rem",height:"1rem",border:"1px solid #88888844"}:{backgroundColor:"#779",width:"2rem",height:`${t.value/2}px`,margin:"auto 0 4px 0"}},getLabelStyle(t){return Array.isArray(t.value)?{marginLeft:"4px"}:{display:"flex",flexDirection:"column-reverse",marginLeft:"4px",marginBottom:"-2px"}}}});var c=function(){var e=this,r=e._self._c;return e._self._setupProxy,e.sections.length?r("div",{staticClass:"legend-box"},e._l(e.sections,function(l,s){return r("div",{key:l.section,staticClass:"legend-section"},[r("p",{style:{marginBottom:"0.25rem",marginTop:s?"1rem":""}},[r("b",[e._v(e._s(e.sectionTitle(l)))])]),e._l(e.getRowsInSection(l),function(n,o){return r("div",{key:o,staticClass:"section-row"},[r("div",{staticClass:"row-value",style:e.getRowStyle(n)}),r("div",{staticClass:"row-label",style:e.getLabelStyle(n)},[e._v(e._s(e.getRowLabel(n)))])])})],2)}),0):e._e()},d=[];var m=i(u,c,d,!1,null,"1c28d060",null,null);const _=m.exports;export{_ as L};
//# sourceMappingURL=LegendBox-c3e925f1.js.map