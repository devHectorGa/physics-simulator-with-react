(this["webpackJsonpphysics-simulator-with-react"]=this["webpackJsonpphysics-simulator-with-react"]||[]).push([[6],{39:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var i,r=n(0),c=n(36),s=n.n(c),a=n(4),o=n(5).c.div(i||(i=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100vh - 90px);\n"]))),d=n(1);var u=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=window.innerWidth,i=window.innerHeight-75;return Object(r.useEffect)((function(){var r=s.a.Engine,c=s.a.Render,a=s.a.World,o=s.a.Bodies,d=s.a.Mouse,u=s.a.Runner,l=s.a.MouseConstraint,h=r.create(),w=c.create({element:e.current,canvas:t.current,engine:h,options:{width:n,height:i,wireframes:!1,showAngleIndicator:!0,showCollisions:!0,showVelocity:!0}}),f=o.circle(n/2,10,30,{restitution:.5}),v=o.circle(10,20,30,{restitution:.5});a.add(h.world,[o.rectangle(n/2+1,i-26,n,50,{isStatic:!0}),o.rectangle(n-101,i/2,200,20,{isStatic:!0})]),a.add(h.world,[f,v]);var p=d.create(w.canvas),b=l.create(h,{mouse:p,constraint:{stiffness:.2,render:{visible:!1}}});a.add(h.world,b),s.a.Events.on(b,"mousedown",(function(){a.add(h.world,o.circle(150,50,30,{restitution:.7}))})),u.run(h),c.run(w)}),[]),Object(d.jsx)(o,{ref:e,children:Object(d.jsx)("canvas",{ref:t})})}}}]);
//# sourceMappingURL=6.648689db.chunk.js.map