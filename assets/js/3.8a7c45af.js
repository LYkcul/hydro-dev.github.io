(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{281:function(t,e,s){},487:function(t,e,s){"use strict";var n=s(281);s.n(n).a},533:function(t,e,s){"use strict";function n(t){return new Promise(e=>setTimeout(e,t))}async function i(t,e,s,i){if(!s)return;const a=[...s];t.content.push(e);for(let t of a)await n(i),e.text+=t}s.r(e);var a={props:{title:String,static:Boolean,content:{type:Array,required:!0},startDelay:{type:Number,default:600},endDelay:{type:Number,default:1e3},typeDelay:{type:Number,default:100},lineDelay:{type:Number,default:100}},data(){return{lines:this.getLines()}},watch:{content(){if(this.lines=this.getLines(),this.static)return this.startStatic()}},async mounted(){if(this.static)return this.startStatic();for(;;)await this.start()},methods:{getLines(){return this.content.map(t=>({content:[],...t,shown:!1,active:!1}))},startStatic(){this.lines.forEach(t=>t.shown=!0)},async start(){await n(this.startDelay),this.lines.forEach(t=>t.shown=!1);for(const t of this.lines){t.shown=!0;const e=t.lineDelay||this.lineDelay;if(!t.type){await n(e);continue}const s=t.typeDelay||this.typeDelay;if("select"!==t.type){if(t.content=[],"question"===t.type?t.content.push({text:"? ",class:"prefix"},{text:t.message,class:"message"},{text:" » ",class:"hint"}):"input"===t.type&&t.content.push({text:"$ ",class:"prefix"}),t.active=!0,"input"===t.type){const[e]=t.text.split(" ",1);await i(t,{text:"",class:"input"},e,s),await i(t,{text:""},t.text.slice(e.length),s)}else await i(t,{text:""},t.text,s);await n(e),"question"===t.type&&(t.content[0]={text:"√ ",class:"success"}),t.active=!1}else{t.content=[{text:"? ",class:"prefix"},{text:t.message,class:"message"},{text:" » "+t.hint,class:"hint"}];for(const e of t.choices)t.content.push({tag:"br"},{text:"    "+e,class:""});let i=4;t.content[i].class="accent",t.content[i].text=">"+t.content[i].text.slice(1);for(const e of t.actions)await n(s),t.content[i].class="",t.content[i].text=" "+t.content[i].text.slice(1),"1"===e?i+=2:"2"===e&&(i-=2),t.content[i].class="accent",t.content[i].text=">"+t.content[i].text.slice(1);await n(e);const a=t.content[i].text.slice(4);t.content[0]={text:"√ ",class:"success"},t.content[2].text=" » ",t.content.splice(3,1/0,{text:a})}}await n(this.endDelay)}},render(t){const e=!this.title&&this.static;return t("panel-view",{class:"terminal",style:{height:16*(1.4*this.lines.length+(e?2:3.4))+"px"},props:{title:this.title,controls:!e}},this.lines.map(({type:e,active:s,content:n,shown:i,message:a},c)=>{const o=n.map(e=>"string"==typeof e?e:t(e.tag||"span",{class:e.class},e.text));return t("div",{key:c,class:["line",e,{active:s,shown:i}]},o)}))}},c=(s(487),s(2)),o=Object(c.a)(a,void 0,void 0,!1,null,null,null);e.default=o.exports}}]);