(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),s=n.n(c),a=n(4),o=n.n(a),i=(n(15),n(3)),u=n.n(i),p=n(5),h=n(6),d=n(7),f=n(9),j=n(8),l=function(t){Object(f.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(h.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={posts:[]},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(p.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://127.0.0.1:8000/posts");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,this.setState({posts:n}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsx)("div",{children:this.state.posts.map((function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:t.title}),Object(r.jsx)("span",{children:t.content})]},t.id)}))})}}]),n}(c.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),s(t),a(t)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.2ac35e81.chunk.js.map