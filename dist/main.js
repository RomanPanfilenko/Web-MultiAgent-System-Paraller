!function(t){var i={};function n(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=i,n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,i){if(1&i&&(t=n(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)n.d(e,o,function(i){return t[i]}.bind(null,o));return e},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="",n(n.s=4)}([function(t,i,n){
/*!
 * Sync/Async forEach
 * https://github.com/cowboy/javascript-sync-async-foreach
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * http://benalman.com/about/license/
 */
!function(t){t.forEach=function(t,i,n){var e=-1,o=t.length>>>0;!function s(a){var r,l=!1===a;do{++e}while(!(e in t)&&e!==o);l||e===o?n&&n(!l,t):(a=i.call({async:function(){return r=!0,s}},t[e],e,t),r||s(a))}()}}(i||this)},function(t,i){},function(t,i){},function(t,i){},function(t,i,n){"use strict";n.r(i);const e={BallRadius:20,width:window.innerWidth,height:window.innerHeight,SmashKoef:20,PotencialRadius:200,destation:20};class o{constructor(t,i){this.id=i,this.Radius=e.BallRadius;let n=Math.random()*e.width,o=Math.random()*e.height,s=1+2*Math.random(),a=Math.random()*Math.PI*2;this.Position={X:n,Y:o},this.PreviousPosition={X:n,Y:o},this.BestFunctionValue={X:n,Y:o},this.Speed={X:Math.cos(a)*s*5,Y:Math.sin(a)*s*5},this.Velocity=s,this.Angle=a,this.BestFunctionValue={X:n,Y:o},this.ConnectRadius=600,this.isPotencial=!1}}n(1),n(2),n(3);class s{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.randomX=Math.random(),this.randomY=Math.random(),this.Init()}Init(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}StartDraw(t){this.ctx.lineWidth=t.Radius,this.ctx.beginPath(),this.ctx.translate(this.randomX,this.randomY),this.ctx.lineCap="round",this.ctx.moveTo(t.Position.X,t.Position.Y),this.ctx.lineTo(t.Position.X,t.Position.Y),this.ctx.stroke()}StepDraw(t){this.ctx.lineWidth=t.Radius+10,this.ctx.beginPath(),this.ctx.lineCap="round",this.ctx.strokeStyle="black",this.ctx.moveTo(t.PreviousPosition.X,t.PreviousPosition.Y),this.ctx.lineTo(t.PreviousPosition.X,t.PreviousPosition.Y),this.ctx.stroke()}NewBallDraw(t){this.ctx.lineWidth=t.Radius,this.ctx.beginPath(),this.ctx.lineCap="round",this.ctx.strokeStyle="orange",this.ctx.moveTo(t.Position.X,t.Position.Y),this.ctx.lineTo(t.Position.X,t.Position.Y),this.ctx.stroke()}ReDraw(t,i){this.ctx.lineWidth=t.Radius,this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(i.x,i.y),this.ctx.stroke()}StopDraw(){this.ctx.translate(-randomX,-randomY)}}for(var a=[],r=(e.SmashKoef,[]),l=0;l<60;++l)a.push(new o(20,l));window.onload=function(){var t,i;this.document.getElementById("c").width=window.innerWidth,this.document.getElementById("c").height=window.innerHeight,t=n(0).forEach,i=new s(c),a.forEach(t=>{var o=new Blob(["("+animationParaller.toString()+")()"],{type:"text/javascript"}),s=(window.URL||window.webkitURL).createObjectURL(o);let l=new Worker(s);l.onmessage=o=>{let s=JSON.parse(o.data);switch(a[s.ball.id]=s.ball,s.status){case"start":i.StartDraw(t);break;case"step":i.StepDraw(s.ball),i.NewBallDraw(s.ball);let o=function(t){var i=n(0).forEach,o=[],s=[];return i(a,(function(i,n,a){let r=t.Position.X-i.Position.X,l=t.Position.Y-i.Position.Y,c=r*r+l*l;if(Math.sqrt(Math.pow(Math.abs(i.Position.X-t.Position.X),2)+Math.pow(Math.abs(i.Position.Y-t.Position.Y),2))<=t.ConnectRadius&&(s.push(i),c<=e.SmashKoef*(2*i.Radius))){var h={ball:i,dx:r,dy:l};o.push(h)}})),{nearsBalls:o,ballsInRadius:s}}(s.ball),c={status:"old",nearsBalls:o.nearsBalls,ballsInRadius:o.ballsInRadius,ball:s.ball};a[s.ball.id].inPotencial=s.isPotencial,a.every(t=>1==t.inPotencial)&&r.forEach(t=>{t.worker.terminate()}),l.postMessage(JSON.stringify(c));break;case"reDraw":i.ReDraw(s.ball,s.additionalBall);break;case"stop":i.StopDraw()}};let c={worker:l,postModel:{ball:t,enviroment:e,nearest:[],ballsInRadisu:[],status:"new"}};r.push(c)}),t(r,(t,i)=>{t.worker.postMessage(JSON.stringify(t.postModel))})}}]);