(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3:function(e,t,o){e.exports=o(9)},8:function(e,t,o){},9:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(2),d=o.n(a);o(8);function i(){return r.a.createElement("div",{className:"h-screen md:h-screen py-8  bg-gradient-to-r from-purple-600 to-indigo-800"},r.a.createElement(l,null))}function l(){const[e,t]=Object(n.useState)([]),[o,a]=Object(n.useState)(""),[d,i]=Object(n.useState)(!1);function l(){i(e=>!e)}return r.a.createElement("div",{className:"max-w-xl mx-auto"},r.a.createElement(m,{toAddItems:function(e){t(t=>[...t,e])},todo:o,setTodo:a}),r.a.createElement(c,{todoList:e,onUpdateMarkedItem:function(e){t(t=>t.map(t=>t.id===e?{...t,marked:!t.marked}:t))},onEditTodo:function(e,o){a(e),t(e=>e.filter(e=>e.id!==o))},onDeleteTodo:function(e){t(t=>t.filter(t=>t.id!==e))},onClearComplete:function(){t(e=>e.filter(e=>!e.marked))},onReset:l}),r.a.createElement(p,{isWarningOpen:d,onReset:l,onResetConfirmed:function(){a(""),t([]),i(!1)}}))}function m(e){let{toAddItems:t,todo:o,setTodo:n}=e;return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!o)return;const r={todo:o,marked:!1,id:crypto.randomUUID()};t(r),n("")},className:"bg-white shadow-xl flex py-10 px-8 rounded-md space-x-10"},r.a.createElement("input",{type:"text",value:o,onChange:e=>n(e.target.value),placeholder:"Task to be done..",className:"px-4 border border-gray-400 font-medium placeholder:font-normal w-full text-blue-800 focus:outline-none focus:border-purple-600 py-2 rounded-md "}),r.a.createElement("button",{className:"border hover:scale-110 transition-transform bg-gradient-to-r from-purple-600 to-indigo-800 text-white font-medium py-2 px-8 rounded-md"},"Add"))}function c(e){let{todoList:t,onUpdateMarkedItem:o,onEditTodo:n,onDeleteTodo:a,onClearComplete:d,onReset:i}=e;return t.length>0&&r.a.createElement("div",{className:"bg-white shadow-xl mt-16 px-8 pt-8 pb-8 rounded-md"},t.map(e=>r.a.createElement(s,{todo:e,key:e.id,onUpdateMarkedItem:o,onEditTodo:n,onDeleteTodo:a})),r.a.createElement("div",{className:"flex justify-between mt-10"},r.a.createElement("button",{onClick:i,className:"border hover:scale-110 transition-transform bg-gradient-to-r from-red-600 to-indigo-800 text-white font-medium py-2 px-8 rounded-md"},"Reset"),r.a.createElement("button",{onClick:d,className:"border focus:outline-none hover:scale-110 transition-transform bg-gradient-to-r from-purple-600 to-indigo-800 text-white font-medium py-2 px-8 rounded-md"},"Clear completed")))}function s(e){let{todo:t,onUpdateMarkedItem:o,onEditTodo:n,onDeleteTodo:a}=e;return r.a.createElement("div",{className:"bg-white flex justify-between py-4 pb-2 border-b border-gray-300"},r.a.createElement("div",{className:"flex items-center gap-6"},r.a.createElement("p",{onClick:()=>o(t.id),className:"font-bold text-purple-600 border border-gray-400 cursor-pointer px-1 rounded-md ".concat(t.marked?"text-opacity-100":"text-opacity-0"," shadow-md")},"\u2713"),r.a.createElement("p",{className:"font-medium ".concat(t.marked?"line-through text-purple-400":"decoration-none text-purple-900","  text-lg")},t.todo)),r.a.createElement("div",{className:"flex gap-5"},r.a.createElement(u,{img:"/edit-11.png",onClick:()=>n(t.todo,t.id)}),r.a.createElement(u,{img:"/delete-32.png",onClick:()=>a(t.id)})))}function u(e){let{img:t,onClick:o}=e;return r.a.createElement("section",{onClick:o,className:"bg-gradient-to-r cursor-pointer hover:scale-110 transition-transform from-purple-600 to-indigo-800 rounded-md hover: py-3 px-3"},r.a.createElement("img",{src:t,alt:"delete",className:"w-4"}))}function p(e){let{onReset:t,isWarningOpen:o,onResetConfirmed:n}=e;return r.a.createElement("div",{className:"flex justify-center bg-black transition-all duration-400 fixed h-screen top-0 left-0 right-0 bg-opacity-50 items-center ".concat(o?"w-full overflow-none":"overflow-hidden w-0"," ")},r.a.createElement("div",{className:"border py-5 max-w-md px-8 rounded-md bg-white font-medium italic text-red-800 text-center"},r.a.createElement("p",null,"Are you sure you want to reset? this action cannot be undone"),r.a.createElement("div",{className:"mt-6 space-x-5"},r.a.createElement("button",{onClick:t,className:"border focus:outline-none hover:scale-110 transition-transform bg-gradient-to-r from-green-600 to-indigo-800 text-white font-medium py-2 px-8 rounded-md"},"Cancel"),r.a.createElement("button",{onClick:n,className:"border focus:outline-none hover:scale-110 transition-transform bg-gradient-to-r from-red-600 to-indigo-800 text-white font-medium py-2 px-8 rounded-md"},"Reset"))))}d.a.render(r.a.createElement(i,null),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.d7b8c6e5.chunk.js.map