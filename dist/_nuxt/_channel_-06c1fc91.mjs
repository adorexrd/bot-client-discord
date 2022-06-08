import{_ as y,a as B,b,c as k}from"./UsersBar-06757891.mjs";import{_ as w,r as n,u as A,a as G,b as M,o as C,s as _,c as h,d,e as f,f as r,g,h as N}from"./entry-c37171d9.mjs";const S={setup(v,{expose:m}){m();const i=n([]),e=n(!0),a=A(),s=G(),o=n([]),l=n([]),c=n([]);M({title:"Bot Client"}),C(()=>{_.emit("setActiveChannel",s.params.channel),_.on("newMessage",t=>{c.value.push(t)})});function u(t){a.push(`/${t}`)}function x(t){a.push(`/${s.params.guild}/${t}`)}$fetch("http://localhost:5555/getGuilds").then(t=>{i.value=t.guilds,e.value=!1}),$fetch("http://localhost:5555/getChannels",{method:"POST",body:JSON.stringify({activeGuild:s.params.guild})}).then(t=>{o.value=t.channels}),$fetch("http://localhost:5555/getUsers",{method:"POST",body:JSON.stringify({activeGuild:s.params.guild})}).then(t=>{l.value=t.users});const p={guilds:i,loading:e,router:a,route:s,channels:o,users:l,messages:c,changeActiveGuild:u,changeActiveChannel:x,ref:n,onBeforeMount:C,socket:_};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}},O={key:0,class:"h-screen flex justify-center items-center text-gray-200 text-4xl"},V=g("svg",{role:"status",class:"inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),g("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),j=N("Y\xFCkleniyor... "),P=[V,j],T={key:1,class:"flex justify-start items-start"};function Z(v,m,i,e,a,s){const o=y,l=B,c=b,u=k;return h(),d("div",null,[e.loading?(h(),d("div",O,P)):f("",!0),e.loading?f("",!0):(h(),d("div",T,[r(o,{guilds:e.guilds,changeActiveGuild:e.changeActiveGuild},null,8,["guilds"]),r(l,{channels:e.channels,changeActiveChannel:e.changeActiveChannel},null,8,["channels"]),r(c,{messages:e.messages},null,8,["messages"]),r(u,{users:e.users},null,8,["users"])]))])}var U=w(S,[["render",Z]]);export{U as default};
