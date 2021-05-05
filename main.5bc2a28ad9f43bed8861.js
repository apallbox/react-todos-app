(self.webpackChunkreact_todos_app=self.webpackChunkreact_todos_app||[]).push([[179],{226:(e,t,o)=>{"use strict";var n,a=o(294),r=o(60),d=o(714),l=o(603),c=o(407),i=o(676),s=o(244),u=o(734);!function(e){e[e.New=0]="New",e[e.Done=1]="Done",e[e.Cancelled=2]="Cancelled"}(n||(n={}));var m,f=function(){function e(e){this.todo=e}return e.prototype.markNew=function(){this.todo.status=n.New},e.prototype.markDone=function(){this.todo.status=n.Done},e.prototype.markCancelled=function(){this.todo.status=n.Cancelled},e.prototype.toggleDone=function(){e.isDone(this.todo)?this.markNew():this.markDone()},e.prototype.toggleCancelled=function(){e.isCancelled(this.todo)?this.markNew():this.markCancelled()},e.isNew=function(e){return e.status===n.New},e.isDone=function(e){return e.status===n.Done},e.isCancelled=function(e){return e.status===n.Cancelled},e}(),p=(0,c.oM)({name:"todos",initialState:[],reducers:{todoAdded:{prepare:function(e){return{payload:{id:(0,c.x0)(),text:e,status:n.New}}},reducer:function(e,t){e.push(t.payload)}},todoUpdated:function(e,t){var o=t.payload,n=o.id,a=o.text,r=o.status,d=e.find((function(e){return e.id===n}));d&&(d.text=a,d.status=r)},todoRemoved:function(e,t){var o=t.payload,n=e.findIndex((function(e){return e.id===o}));n<0||e.splice(n,1)},todoMarkedNew:function(e,t){var o=t.payload,n=e.find((function(e){return e.id===o}));n&&new f(n).markNew()},todoMarkedDone:function(e,t){var o=t.payload,n=e.find((function(e){return e.id===o}));n&&new f(n).markDone()},todoMarkedCancelled:function(e,t){var o=t.payload,n=e.find((function(e){return e.id===o}));n&&new f(n).markCancelled()},todoToggledDone:function(e,t){var o=t.payload,n=e.find((function(e){return e.id===o}));n&&new f(n).toggleDone()},todoToggledCancelled:function(e,t){var o=t.payload,n=e.find((function(e){return e.id===o}));n&&new f(n).toggleCancelled()}}}),v=(m=p.actions).todoAdded,E=(m.todoUpdated,m.todoRemoved),_=(m.todoMarkedNew,m.todoMarkedDone,m.todoMarkedCancelled,m.todoToggledDone),N=m.todoToggledCancelled;const g=p.reducer;var k=(0,i.UY)({todos:g}),C={key:"root",version:1,storage:u.Z},h=(0,s.OJ)(C,k),w=(0,c.xC)({reducer:h,middleware:(0,c.Bx)({serializableCheck:{ignoredActions:[s._P,s.I2,s.E7,s.ex,s.e,s.Nz]}})}),y=(0,s.p5)(w),D=o(570);function b(e){var t=(0,d.v9)((function(e){return e.todos.filter((function(e){return f.isDone(e)}))})),o=(0,d.v9)((function(e){return e.todos.filter((function(e){return!f.isCancelled(e)}))}));return a.createElement("div",{className:"todo-counter"},e.label,": ",o.length-t.length," / ",o.length,";")}function x(){var e=(0,a.useState)(""),t=e[0],o=e[1],n=(0,d.I0)();return a.createElement("form",{className:"todo-form"},a.createElement("div",{className:"todo-form__input"},a.createElement("textarea",{className:"todo-form__text",value:t,onChange:function(e){o(e.target.value)},autoFocus:!0})),a.createElement("div",{className:"todo-form__submit"},a.createElement("input",{type:"submit",onClick:function(e){n(v(t)),o("")},disabled:!Boolean(t),value:"Submit"})))}var M=o(184),I=o.n(M);function T(e){var t=(0,d.I0)();return a.createElement("div",{className:I()({"todo-item":!0,"todo-item--cancelled":f.isCancelled(e.todo)})},a.createElement("div",{className:"todo-item__status"},a.createElement("input",{id:e.todo.id,type:"checkbox",checked:f.isDone(e.todo),onChange:function(o){t(_(e.todo.id))}})),a.createElement("div",{className:"todo-item__text"},a.createElement("label",{htmlFor:e.todo.id},e.todo.text)),a.createElement("ul",{className:"todo-item__actions"},a.createElement("li",{className:"todo-item__action"},a.createElement("button",{onClick:function(o){t(N(e.todo.id))}},f.isCancelled(e.todo)?"Activate":"Cancel")),a.createElement("li",{className:"todo-item__action"},a.createElement("button",{onClick:function(o){confirm('Item "'+e.todo.text+'" will be removed. Are you sure?')&&t(E(e.todo.id))}},"Remove"))))}function A(){var e=(0,d.v9)((function(e){return e.todos}));return a.createElement("div",{className:"todo-list"},e.map((function(e){return a.createElement("li",{className:"todo-list__item",key:e.id},a.createElement(T,{todo:e}))})))}const S=(0,D.w)((function(){return a.createElement("div",{className:"app"},a.createElement("div",{className:"app__wrapper"},a.createElement("header",{className:"app__header"},a.createElement("div",{className:"app__logo"},"Todos")),a.createElement("main",{className:"app__main"},a.createElement(b,{label:"Todos remaining"}),a.createElement(A,null),a.createElement(x,null)),a.createElement("footer",{className:"app__footer"})))}));var z=document.getElementById("app");r.render(a.createElement(a.StrictMode,null,a.createElement(d.zt,{store:w},a.createElement(l.r,{loading:null,persistor:y},a.createElement(S,null)))),z)}},e=>{"use strict";var t=t=>e(e.s=t);e.O(0,[216],(()=>(t(658),t(226)))),e.O()}]);