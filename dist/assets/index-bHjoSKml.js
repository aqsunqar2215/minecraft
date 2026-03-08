(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Bo="183",Ju=0,vl=1,Qu=2,Es=1,eh=2,Sr=3,di=0,Jt=1,wn=2,qn=0,Ji=1,Sl=2,Ml=3,yl=4,th=5,yi=100,nh=101,ih=102,rh=103,sh=104,ah=200,oh=201,lh=202,ch=203,za=204,Ga=205,uh=206,hh=207,dh=208,fh=209,ph=210,mh=211,gh=212,_h=213,xh=214,Ha=0,Va=1,Wa=2,er=3,Xa=4,Ya=5,qa=6,Ka=7,ko=0,vh=1,Sh=2,In=0,Wc=1,Xc=2,Yc=3,qc=4,Kc=5,Zc=6,$c=7,jc=300,Ai=301,tr=302,$s=303,js=304,Hs=306,Tr=1e3,on=1001,Za=1002,ft=1003,Mh=1004,zr=1005,Gt=1006,Js=1007,bi=1008,an=1009,Jc=1010,Qc=1011,Ar=1012,zo=1013,Un=1014,Cn=1015,Zn=1016,Go=1017,Ho=1018,wr=1020,eu=35902,tu=35899,nu=1021,iu=1022,xn=1023,$n=1026,Ti=1027,ru=1028,Vo=1029,nr=1030,Wo=1031,Xo=1033,bs=33776,Ts=33777,As=33778,ws=33779,$a=35840,ja=35841,Ja=35842,Qa=35843,eo=36196,to=37492,no=37496,io=37488,ro=37489,so=37490,ao=37491,oo=37808,lo=37809,co=37810,uo=37811,ho=37812,fo=37813,po=37814,mo=37815,go=37816,_o=37817,xo=37818,vo=37819,So=37820,Mo=37821,yo=36492,Eo=36494,bo=36495,To=36283,Ao=36284,wo=36285,Co=36286,yh=3200,su=0,Eh=1,li="",Yt="srgb",ir="srgb-linear",Ds="linear",at="srgb",Li=7680,El=519,bh=512,Th=513,Ah=514,Yo=515,wh=516,Ch=517,qo=518,Rh=519,bl=35044,Tl="300 es",Rn=2e3,Cr=2001;function Ih(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ph(){const i=Ls("canvas");return i.style.display="block",i}const Al={};function wl(...i){const e="THREE."+i.shift();console.log(e,...i)}function au(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=au(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=au(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Us(...i){const e=i.join(" ");e in Al||(Al[e]=!0,Ne(...i))}function Dh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Lh={[Ha]:Va,[Wa]:qa,[Xa]:Ka,[er]:Ya,[Va]:Ha,[qa]:Wa,[Ka]:Xa,[Ya]:er};class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cs=Math.PI/180,Ro=180/Math.PI;function Ur(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Uh(i,e){return(i%e+e)%e}function Qs(i,e,t){return(1-t)*i+t*e}function cr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ar{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],h=s[a+0],m=s[a+1],g=s[a+2],M=s[a+3];if(d!==M||l!==h||c!==m||u!==g){let p=l*h+c*m+u*g+d*M;p<0&&(h=-h,m=-m,g=-g,M=-M,p=-p);let f=1-o;if(p<.9995){const y=Math.acos(p),T=Math.sin(y);f=Math.sin(f*y)/T,o=Math.sin(o*y)/T,l=l*f+h*o,c=c*f+m*o,u=u*f+g*o,d=d*f+M*o}else{l=l*f+h*o,c=c*f+m*o,u=u*f+g*o,d=d*f+M*o;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-o*m,e[t+2]=c*g+u*m+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),h=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new N,Cl=new ar;class ze{constructor(e,t,n,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],M=r[0],p=r[3],f=r[6],y=r[1],T=r[4],b=r[7],R=r[2],w=r[5],I=r[8];return s[0]=a*M+o*y+l*R,s[3]=a*p+o*T+l*w,s[6]=a*f+o*b+l*I,s[1]=c*M+u*y+d*R,s[4]=c*p+u*T+d*w,s[7]=c*f+u*b+d*I,s[2]=h*M+m*y+g*R,s[5]=h*p+m*T+g*w,s[8]=h*f+m*b+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=t*d+n*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=d*M,e[1]=(r*c-u*n)*M,e[2]=(o*n-r*a)*M,e[3]=h*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new ze,Rl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nh(){const i={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Kn(r.r),r.g=Kn(r.g),r.b=Kn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Qi(r.r),r.g=Qi(r.g),r.b=Qi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?Ds:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ir]:{primaries:e,whitePoint:n,transfer:Ds,toXYZ:Rl,fromXYZ:Il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Rl,fromXYZ:Il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}const Je=Nh();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class Fh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=Ls("canvas")),Ui.width=e.width,Ui.height=e.height;const r=Ui.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Kn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oh=0;class Ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(na(r[a].image)):s.push(na(r[a]))}else s=na(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let Bh=0;const ia=new N;class Ht extends sr{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=on,r=on,s=Gt,a=bi,o=xn,l=an,c=Ht.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Ur(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tr:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tr:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=jc;Ht.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],M=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,b=(m+1)/2,R=(f+1)/2,w=(u+h)/4,I=(d+M)/4,x=(g+p)/4;return T>b&&T>R?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=w/n,s=I/n):b>R?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=w/r,s=x/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=I/s,r=x/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-M)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kh extends sr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Ht(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ko(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends kh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ou extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zh extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mt{constructor(e,t,n,r,s,a,o,l,c,u,d,h,m,g,M,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,d,h,m,g,M,p)}set(e,t,n,r,s,a,o,l,c,u,d,h,m,g,M,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=M,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ni.setFromMatrixColumn(e,0).length(),s=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*d,g=o*u,M=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=c*u,M=c*d;t[0]=h+M*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=c*u,M=c*d;t[0]=h-M*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*d,g=o*u,M=o*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+M,t[1]=l*d,t[5]=M*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,M=o*c;t[0]=l*u,t[4]=M-h*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-M*d}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,M=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+M,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=M*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gh,e,Hh)}lookAt(e,t,n){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ei.crossVectors(n,en),ei.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ei.crossVectors(n,en)),ei.normalize(),Gr.crossVectors(en,ei),r[0]=ei.x,r[4]=Gr.x,r[8]=en.x,r[1]=ei.y,r[5]=Gr.y,r[9]=en.y,r[2]=ei.z,r[6]=Gr.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],M=n[6],p=n[10],f=n[14],y=n[3],T=n[7],b=n[11],R=n[15],w=r[0],I=r[4],x=r[8],S=r[12],Y=r[1],C=r[5],k=r[9],F=r[13],W=r[2],B=r[6],V=r[10],O=r[14],Q=r[3],J=r[7],ce=r[11],fe=r[15];return s[0]=a*w+o*Y+l*W+c*Q,s[4]=a*I+o*C+l*B+c*J,s[8]=a*x+o*k+l*V+c*ce,s[12]=a*S+o*F+l*O+c*fe,s[1]=u*w+d*Y+h*W+m*Q,s[5]=u*I+d*C+h*B+m*J,s[9]=u*x+d*k+h*V+m*ce,s[13]=u*S+d*F+h*O+m*fe,s[2]=g*w+M*Y+p*W+f*Q,s[6]=g*I+M*C+p*B+f*J,s[10]=g*x+M*k+p*V+f*ce,s[14]=g*S+M*F+p*O+f*fe,s[3]=y*w+T*Y+b*W+R*Q,s[7]=y*I+T*C+b*B+R*J,s[11]=y*x+T*k+b*V+R*ce,s[15]=y*S+T*F+b*O+R*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],M=e[7],p=e[11],f=e[15],y=l*m-c*h,T=o*m-c*d,b=o*h-l*d,R=a*m-c*u,w=a*h-l*u,I=a*d-o*u;return t*(M*y-p*T+f*b)-n*(g*y-p*R+f*w)+r*(g*T-M*R+f*I)-s*(g*b-M*w+p*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],M=e[13],p=e[14],f=e[15],y=t*o-n*a,T=t*l-r*a,b=t*c-s*a,R=n*l-r*o,w=n*c-s*o,I=r*c-s*l,x=u*M-d*g,S=u*p-h*g,Y=u*f-m*g,C=d*p-h*M,k=d*f-m*M,F=h*f-m*p,W=y*F-T*k+b*C+R*Y-w*S+I*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/W;return e[0]=(o*F-l*k+c*C)*B,e[1]=(r*k-n*F-s*C)*B,e[2]=(M*I-p*w+f*R)*B,e[3]=(h*w-d*I-m*R)*B,e[4]=(l*Y-a*F-c*S)*B,e[5]=(t*F-r*Y+s*S)*B,e[6]=(p*b-g*I-f*T)*B,e[7]=(u*I-h*b+m*T)*B,e[8]=(a*k-o*Y+c*x)*B,e[9]=(n*Y-t*k-s*x)*B,e[10]=(g*w-M*b+f*y)*B,e[11]=(d*b-u*w-m*y)*B,e[12]=(o*S-a*C-l*x)*B,e[13]=(t*C-n*S+r*x)*B,e[14]=(M*T-g*R-p*y)*B,e[15]=(u*R-d*T+h*y)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,m=s*u,g=s*d,M=a*u,p=a*d,f=o*d,y=l*c,T=l*u,b=l*d,R=n.x,w=n.y,I=n.z;return r[0]=(1-(M+f))*R,r[1]=(m+b)*R,r[2]=(g-T)*R,r[3]=0,r[4]=(m-b)*w,r[5]=(1-(h+f))*w,r[6]=(p+y)*w,r[7]=0,r[8]=(g+T)*I,r[9]=(p-y)*I,r[10]=(1-(h+M))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ni.set(r[0],r[1],r[2]).length();const o=Ni.set(r[4],r[5],r[6]).length(),l=Ni.set(r[8],r[9],r[10]).length();s<0&&(a=-a),mn.copy(this);const c=1/a,u=1/o,d=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,t.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=Rn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),m=(n+r)/(n-r);let g,M;if(l)g=s/(a-s),M=a*s/(a-s);else if(o===Rn)g=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Cr)g=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Rn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),m=-(n+r)/(n-r);let g,M;if(l)g=1/(a-s),M=a/(a-s);else if(o===Rn)g=-2/(a-s),M=-(a+s)/(a-s);else if(o===Cr)g=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ni=new N,mn=new mt,Gh=new N(0,0,0),Hh=new N(1,1,1),ei=new N,Gr=new N,en=new N,Pl=new mt,Dl=new ar;class Nn{constructor(e=0,t=0,n=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class lu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vh=0;const Ll=new N,Fi=new ar,Gn=new mt,Hr=new N,ur=new N,Wh=new N,Xh=new ar,Ul=new N(1,0,0),Nl=new N(0,1,0),Fl=new N(0,0,1),Ol={type:"added"},Yh={type:"removed"},Oi={type:"childadded",child:null},ra={type:"childremoved",child:null};class Dt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new N,t=new Nn,n=new ar,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new ze}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Ul,e)}rotateY(e){return this.rotateOnAxis(Nl,e)}rotateZ(e){return this.rotateOnAxis(Fl,e)}translateOnAxis(e,t){return Ll.copy(e).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ul,e)}translateY(e){return this.translateOnAxis(Nl,e)}translateZ(e){return this.translateOnAxis(Fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hr.copy(e):Hr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(ur,Hr,this.up):Gn.lookAt(Hr,ur,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ol),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yh),ra.child=e,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ol),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Wh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Xh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new N(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yn extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qh={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),f=this._getHandJoint(c,M);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=Uh(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=aa(a,s,e+1/3),this.g=aa(a,s,e),this.b=aa(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=cu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Je.workingToColorSpace(kt.copy(this),e),Math.round(Ze(kt.r*255,0,255))*65536+Math.round(Ze(kt.g*255,0,255))*256+Math.round(Ze(kt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(kt.copy(this),t);const n=kt.r,r=kt.g,s=kt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Yt){Je.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,r=kt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Vr);const n=Qs(ti.h,Vr.h,t),r=Qs(ti.s,Vr.s,t),s=Qs(ti.l,Vr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new $e;$e.NAMES=cu;class Zo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new Zo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kh extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gn=new N,Hn=new N,oa=new N,Vn=new N,Bi=new N,ki=new N,Bl=new N,la=new N,ca=new N,ua=new N,ha=new xt,da=new xt,fa=new xt;class hn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){gn.subVectors(r,t),Hn.subVectors(n,t),oa.subVectors(e,t);const a=gn.dot(gn),o=gn.dot(Hn),l=gn.dot(oa),c=Hn.dot(Hn),u=Hn.dot(oa),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ha.setScalar(0),da.setScalar(0),fa.setScalar(0),ha.fromBufferAttribute(e,t),da.fromBufferAttribute(e,n),fa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ha,s.x),a.addScaledVector(da,s.y),a.addScaledVector(fa,s.z),a}static isFrontFacing(e,t,n,r){return gn.subVectors(n,t),Hn.subVectors(e,t),gn.cross(Hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),gn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Bi.subVectors(r,n),ki.subVectors(s,n),la.subVectors(e,n);const l=Bi.dot(la),c=ki.dot(la);if(l<=0&&c<=0)return t.copy(n);ca.subVectors(e,r);const u=Bi.dot(ca),d=ki.dot(ca);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Bi,a);ua.subVectors(e,s);const m=Bi.dot(ua),g=ki.dot(ua);if(g>=0&&m<=g)return t.copy(s);const M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ki,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Bl.subVectors(s,r),o=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(Bl,o);const f=1/(p+M+h);return a=M*f,o=h*f,t.copy(n).addScaledVector(Bi,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Nr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(s,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),Xr.subVectors(this.max,hr),zi.subVectors(e.a,hr),Gi.subVectors(e.b,hr),Hi.subVectors(e.c,hr),ni.subVectors(Gi,zi),ii.subVectors(Hi,Gi),mi.subVectors(zi,Hi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-mi.z,mi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,mi.z,0,-mi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-mi.y,mi.x,0];return!pa(t,zi,Gi,Hi,Xr)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,zi,Gi,Hi,Xr))?!1:(Yr.crossVectors(ni,ii),t=[Yr.x,Yr.y,Yr.z],pa(t,zi,Gi,Hi,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wn=[new N,new N,new N,new N,new N,new N,new N,new N],_n=new N,Wr=new Nr,zi=new N,Gi=new N,Hi=new N,ni=new N,ii=new N,mi=new N,hr=new N,Xr=new N,Yr=new N,gi=new N;function pa(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){gi.fromArray(i,s);const o=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const bt=new N,qr=new nt;let Zh=0;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bl,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bl&&(e.usage=this.usage),e}}class uu extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hu extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dn extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const $h=new Nr,dr=new N,ma=new N;class Vs{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$h.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(dr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(ma)),this.expandByPoint(dr.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jh=0;const ln=new mt,ga=new Dt,Vi=new N,tn=new Nr,fr=new Nr,Pt=new N;class fn extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ih(e)?hu:uu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(tn.min,fr.min),tn.expandByPoint(Pt),Pt.addVectors(tn.max,fr.max),tn.expandByPoint(Pt)):(tn.expandByPoint(fr.min),tn.expandByPoint(fr.max))}tn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pt.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),Pt.add(Vi)),r=Math.max(r,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new N,l[x]=new N;const c=new N,u=new N,d=new N,h=new nt,m=new nt,g=new nt,M=new N,p=new N;function f(x,S,Y){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,Y),h.fromBufferAttribute(s,x),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,Y),u.sub(c),d.sub(c),m.sub(h),g.sub(h);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(C),o[x].add(M),o[S].add(M),o[Y].add(M),l[x].add(p),l[S].add(p),l[Y].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,S=y.length;x<S;++x){const Y=y[x],C=Y.start,k=Y.count;for(let F=C,W=C+k;F<W;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new N,b=new N,R=new N,w=new N;function I(x){R.fromBufferAttribute(r,x),w.copy(R);const S=o[x];T.copy(S),T.sub(R.multiplyScalar(R.dot(S))).normalize(),b.crossVectors(w,S);const C=b.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,C)}for(let x=0,S=y.length;x<S;++x){const Y=y[x],C=Y.start,k=Y.count;for(let F=C,W=C+k;F<W;F+=3)I(e.getX(F+0)),I(e.getX(F+1)),I(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),M=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*u;for(let f=0;f<u;f++)h[g++]=c[m++]}return new jt(h,u,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Jh=0;class or extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Ji,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ga,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xn=new N,_a=new N,Kr=new N,ri=new N,xa=new N,Zr=new N,va=new N;class du{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_a.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(_a);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Kr),o=ri.dot(this.direction),l=-ri.dot(Kr),c=ri.lengthSq(),u=Math.abs(1-a*a);let d,h,m,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const M=1/u;d*=M,h*=M,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_a).addScaledVector(Kr,h),m}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,r,s){xa.subVectors(t,e),Zr.subVectors(n,e),va.crossVectors(xa,Zr);let a=this.direction.dot(va),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const l=o*this.direction.dot(Zr.crossVectors(ri,Zr));if(l<0)return null;const c=o*this.direction.dot(xa.cross(ri));if(c<0||l+c>a)return null;const u=-o*ri.dot(va);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wi extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kl=new mt,_i=new du,$r=new Vs,zl=new N,jr=new N,Jr=new N,Qr=new N,Sa=new N,es=new N,Gl=new N,ts=new N;class Vt extends Dt{constructor(e=new fn,t=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Sa.fromBufferAttribute(d,e),a?es.addScaledVector(Sa,u):es.addScaledVector(Sa.sub(t),u))}t.add(es)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!($r.containsPoint(_i.origin)===!1&&(_i.intersectSphere($r,zl)===null||_i.origin.distanceToSquared(zl)>(e.far-e.near)**2))&&(kl.copy(s).invert(),_i.copy(e.ray).applyMatrix4(kl),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const p=h[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=y,R=T;b<R;b+=3){const w=o.getX(b),I=o.getX(b+1),x=o.getX(b+2);r=ns(this,f,e,n,c,u,d,w,I,x),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=g,f=M;p<f;p+=3){const y=o.getX(p),T=o.getX(p+1),b=o.getX(p+2);r=ns(this,a,e,n,c,u,d,y,T,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const p=h[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=y,R=T;b<R;b+=3){const w=b,I=b+1,x=b+2;r=ns(this,f,e,n,c,u,d,w,I,x),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=g,f=M;p<f;p+=3){const y=p,T=p+1,b=p+2;r=ns(this,a,e,n,c,u,d,y,T,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Qh(i,e,t,n,r,s,a,o){let l;if(e.side===Jt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===di,o),l===null)return null;ts.copy(o),ts.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ts);return c<t.near||c>t.far?null:{distance:c,point:ts.clone(),object:i}}function ns(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,jr),i.getVertexPosition(l,Jr),i.getVertexPosition(c,Qr);const u=Qh(i,e,t,n,jr,Jr,Qr,Gl);if(u){const d=new N;hn.getBarycoord(Gl,jr,Jr,Qr,d),r&&(u.uv=hn.getInterpolatedAttribute(r,o,l,c,d,new nt)),s&&(u.uv1=hn.getInterpolatedAttribute(s,o,l,c,d,new nt)),a&&(u.normal=hn.getInterpolatedAttribute(a,o,l,c,d,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};hn.getNormal(jr,Jr,Qr,h.normal),u.face=h,u.barycoord=d}return u}class ed extends Ht{constructor(e=null,t=1,n=1,r,s,a,o,l,c=ft,u=ft,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ma=new N,td=new N,nd=new ze;class Mi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ma.subVectors(n,t).cross(td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ma),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nd.getNormalMatrix(e),r=this.coplanarPoint(Ma).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Vs,id=new nt(.5,.5),is=new N;class $o{constructor(e=new Mi,t=new Mi,n=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],m=s[7],g=s[8],M=s[9],p=s[10],f=s[11],y=s[12],T=s[13],b=s[14],R=s[15];if(r[0].setComponents(c-a,m-u,f-g,R-y).normalize(),r[1].setComponents(c+a,m+u,f+g,R+y).normalize(),r[2].setComponents(c+o,m+d,f+M,R+T).normalize(),r[3].setComponents(c-o,m-d,f-M,R-T).normalize(),n)r[4].setComponents(l,h,p,b).normalize(),r[5].setComponents(c-l,m-h,f-p,R-b).normalize();else if(r[4].setComponents(c-l,m-h,f-p,R-b).normalize(),t===Rn)r[5].setComponents(c+l,m+h,f+p,R+b).normalize();else if(t===Cr)r[5].setComponents(l,h,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){xi.center.set(0,0,0);const t=id.distanceTo(e.center);return xi.radius=.7071067811865476+t,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(is.x=r.normal.x>0?e.max.x:e.min.x,is.y=r.normal.y>0?e.max.y:e.min.y,is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fu extends or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ns=new N,Fs=new N,Hl=new mt,pr=new du,rs=new Vs,ya=new N,Vl=new N;class rd extends Dt{constructor(e=new fn,t=new fu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ns.fromBufferAttribute(t,r-1),Fs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ns.distanceTo(Fs);e.setAttribute("lineDistance",new dn(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),rs.radius+=s,e.ray.intersectsSphere(rs)===!1)return;Hl.copy(r).invert(),pr.copy(e.ray).applyMatrix4(Hl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=m,p=g-1;M<p;M+=c){const f=u.getX(M),y=u.getX(M+1),T=ss(this,e,pr,l,f,y,M);T&&t.push(T)}if(this.isLineLoop){const M=u.getX(g-1),p=u.getX(m),f=ss(this,e,pr,l,M,p,g-1);f&&t.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=m,p=g-1;M<p;M+=c){const f=ss(this,e,pr,l,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){const M=ss(this,e,pr,l,g-1,m,g-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ss(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Ns.fromBufferAttribute(o,r),Fs.fromBufferAttribute(o,s),t.distanceSqToSegment(Ns,Fs,ya,Vl)>n)return;ya.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ya);if(!(c<e.near||c>e.far))return{distance:c,point:Vl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Wl=new N,Xl=new N;class sd extends rd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Wl.fromBufferAttribute(t,r),Xl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Wl.distanceTo(Xl);e.setAttribute("lineDistance",new dn(n,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pu extends Ht{constructor(e=[],t=Ai,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jo extends Ht{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rr extends Ht{constructor(e,t,n=Un,r,s,a,o=ft,l=ft,c,u=$n,d=1){if(u!==$n&&u!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ad extends Rr{constructor(e,t=Un,n=Ai,r,s,a=ft,o=ft,l,c=$n){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mu extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vn extends fn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(d,2));function g(M,p,f,y,T,b,R,w,I,x,S){const Y=b/I,C=R/x,k=b/2,F=R/2,W=w/2,B=I+1,V=x+1;let O=0,Q=0;const J=new N;for(let ce=0;ce<V;ce++){const fe=ce*C-F;for(let ue=0;ue<B;ue++){const De=ue*Y-k;J[M]=De*y,J[p]=fe*T,J[f]=W,c.push(J.x,J.y,J.z),J[M]=0,J[p]=0,J[f]=w>0?1:-1,u.push(J.x,J.y,J.z),d.push(ue/I),d.push(1-ce/x),O+=1}}for(let ce=0;ce<x;ce++)for(let fe=0;fe<I;fe++){const ue=h+fe+B*ce,De=h+fe+B*(ce+1),qe=h+(fe+1)+B*(ce+1),ke=h+(fe+1)+B*ce;l.push(ue,De,ke),l.push(De,qe,ke),Q+=6}o.addGroup(m,Q,S),m+=Q,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const as=new N,os=new N,Ea=new N,ls=new hn;class od extends fn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Cs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:M,b:p,c:f}=ls;if(M.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),ls.getNormal(Ea),d[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){const T=(y+1)%3,b=d[y],R=d[T],w=ls[u[y]],I=ls[u[T]],x=`${b}_${R}`,S=`${R}_${b}`;S in h&&h[S]?(Ea.dot(h[S].normal)<=s&&(m.push(w.x,w.y,w.z),m.push(I.x,I.y,I.z)),h[S]=null):x in h||(h[x]={index0:c[y],index1:c[T],normal:Ea.clone()})}}for(const g in h)if(h[g]){const{index0:M,index1:p}=h[g];as.fromBufferAttribute(o,M),os.fromBufferAttribute(o,p),m.push(as.x,as.y,as.z),m.push(os.x,os.y,os.z)}this.setAttribute("position",new dn(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ws extends fn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,m=[],g=[],M=[],p=[];for(let f=0;f<u;f++){const y=f*h-a;for(let T=0;T<c;T++){const b=T*d-s;g.push(b,-y,0),M.push(0,0,1),p.push(T/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const T=y+c*f,b=y+c*(f+1),R=y+1+c*(f+1),w=y+1+c*f;m.push(T,b,w),m.push(b,R,w)}this.setIndex(m),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(M,3)),this.setAttribute("uv",new dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.widthSegments,e.heightSegments)}}function rr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=rr(i[t]);for(const r in n)e[r]=n[r]}return e}function ld(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const cd={clone:rr,merge:Xt};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dd extends Fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Io extends or{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=ko,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fd extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pd extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _u extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class md extends _u{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ba=new mt,Yl=new N,ql=new N;class gd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yl),ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ql),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Cr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cs=new N,us=new ar,yn=new N;class xu extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cs,us,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cs,us,yn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(cs,us,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cs,us,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new N,Kl=new nt,Zl=new nt;class un extends xu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Kl,Zl),t.subVectors(Zl,Kl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Jo extends xu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _d extends gd{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xd extends _u{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new _d}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Wi=-90,Xi=1;class vd extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Wi,Xi,e,t);r.layers=this.layers,this.add(r);const s=new un(Wi,Xi,e,t);s.layers=this.layers,this.add(s);const a=new un(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const o=new un(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const l=new un(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new un(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sd extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function $l(i,e,t,n){const r=Md(n);switch(t){case nu:return i*e;case ru:return i*e/r.components*r.byteLength;case Vo:return i*e/r.components*r.byteLength;case nr:return i*e*2/r.components*r.byteLength;case Wo:return i*e*2/r.components*r.byteLength;case iu:return i*e*3/r.components*r.byteLength;case xn:return i*e*4/r.components*r.byteLength;case Xo:return i*e*4/r.components*r.byteLength;case bs:case Ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case As:case ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ja:case Qa:return Math.max(i,16)*Math.max(e,8)/4;case $a:case Ja:return Math.max(i,8)*Math.max(e,8)/2;case eo:case to:case io:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case no:case so:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yo:case Eo:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case To:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wo:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Md(i){switch(i){case an:case Jc:return{byteLength:1,components:1};case Ar:case Qc:case Zn:return{byteLength:2,components:1};case Go:case Ho:return{byteLength:2,components:4};case Un:case zo:case Cn:return{byteLength:4,components:1};case eu:case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);function vu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function yd(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<d.length;m++){const g=d[h],M=d[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,d[h]=M)}d.length=h+1;for(let m=0,g=d.length;m<g;m++){const M=d[m];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Od=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ef=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,If=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Of=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Ed,alphahash_pars_fragment:bd,alphamap_fragment:Td,alphamap_pars_fragment:Ad,alphatest_fragment:wd,alphatest_pars_fragment:Cd,aomap_fragment:Rd,aomap_pars_fragment:Id,batching_pars_vertex:Pd,batching_vertex:Dd,begin_vertex:Ld,beginnormal_vertex:Ud,bsdfs:Nd,iridescence_fragment:Fd,bumpmap_pars_fragment:Od,clipping_planes_fragment:Bd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:zd,clipping_planes_vertex:Gd,color_fragment:Hd,color_pars_fragment:Vd,color_pars_vertex:Wd,color_vertex:Xd,common:Yd,cube_uv_reflection_fragment:qd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:Zd,displacementmap_vertex:$d,emissivemap_fragment:jd,emissivemap_pars_fragment:Jd,colorspace_fragment:Qd,colorspace_pars_fragment:ef,envmap_fragment:tf,envmap_common_pars_fragment:nf,envmap_pars_fragment:rf,envmap_pars_vertex:sf,envmap_physical_pars_fragment:gf,envmap_vertex:af,fog_vertex:of,fog_pars_vertex:lf,fog_fragment:cf,fog_pars_fragment:uf,gradientmap_pars_fragment:hf,lightmap_pars_fragment:df,lights_lambert_fragment:ff,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:_f,lights_toon_pars_fragment:xf,lights_phong_fragment:vf,lights_phong_pars_fragment:Sf,lights_physical_fragment:Mf,lights_physical_pars_fragment:yf,lights_fragment_begin:Ef,lights_fragment_maps:bf,lights_fragment_end:Tf,logdepthbuf_fragment:Af,logdepthbuf_pars_fragment:wf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Rf,map_fragment:If,map_pars_fragment:Pf,map_particle_fragment:Df,map_particle_pars_fragment:Lf,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Nf,morphinstance_vertex:Ff,morphcolor_vertex:Of,morphnormal_vertex:Bf,morphtarget_pars_vertex:kf,morphtarget_vertex:zf,normal_fragment_begin:Gf,normal_fragment_maps:Hf,normal_pars_fragment:Vf,normal_pars_vertex:Wf,normal_vertex:Xf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:qf,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:Zf,iridescence_pars_fragment:$f,opaque_fragment:jf,packing:Jf,premultiplied_alpha_fragment:Qf,project_vertex:ep,dithering_fragment:tp,dithering_pars_fragment:np,roughnessmap_fragment:ip,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:sp,shadowmap_pars_vertex:ap,shadowmap_vertex:op,shadowmask_pars_fragment:lp,skinbase_vertex:cp,skinning_pars_vertex:up,skinning_vertex:hp,skinnormal_vertex:dp,specularmap_fragment:fp,specularmap_pars_fragment:pp,tonemapping_fragment:mp,tonemapping_pars_fragment:gp,transmission_fragment:_p,transmission_pars_fragment:xp,uv_pars_fragment:vp,uv_pars_vertex:Sp,uv_vertex:Mp,worldpos_vertex:yp,background_vert:Ep,background_frag:bp,backgroundCube_vert:Tp,backgroundCube_frag:Ap,cube_vert:wp,cube_frag:Cp,depth_vert:Rp,depth_frag:Ip,distance_vert:Pp,distance_frag:Dp,equirect_vert:Lp,equirect_frag:Up,linedashed_vert:Np,linedashed_frag:Fp,meshbasic_vert:Op,meshbasic_frag:Bp,meshlambert_vert:kp,meshlambert_frag:zp,meshmatcap_vert:Gp,meshmatcap_frag:Hp,meshnormal_vert:Vp,meshnormal_frag:Wp,meshphong_vert:Xp,meshphong_frag:Yp,meshphysical_vert:qp,meshphysical_frag:Kp,meshtoon_vert:Zp,meshtoon_frag:$p,points_vert:jp,points_frag:Jp,shadow_vert:Qp,shadow_frag:em,sprite_vert:tm,sprite_frag:nm},le={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},An={basic:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Xt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Xt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Xt([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Xt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Xt([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Xt([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Xt([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Xt([le.lights,le.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};An.physical={uniforms:Xt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const hs={r:0,b:0,g:0},vi=new Nn,im=new mt;function rm(i,e,t,n,r,s){const a=new $e(0);let o=r===!0?0:1,l,c,u=null,d=0,h=null;function m(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const b=y.backgroundBlurriness>0;T=e.get(T,b)}return T}function g(y){let T=!1;const b=m(y);b===null?p(a,o):b&&b.isColor&&(p(b,1),T=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,T){const b=m(T);b&&(b.isCubeTexture||b.mapping===Hs)?(c===void 0&&(c=new Vt(new vn(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:rr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),vi.copy(T.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(im.makeRotationFromEuler(vi)),c.material.toneMapped=Je.getTransfer(b.colorSpace)!==at,(u!==b||d!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Vt(new Ws(2,2),new Fn({name:"BackgroundMaterial",uniforms:rr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Je.getTransfer(b.colorSpace)!==at,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,T){y.getRGB(hs,gu(i)),t.buffers.color.setClear(hs.r,hs.g,hs.b,T,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:g,addToRenderList:M,dispose:f}}function sm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(C,k,F,W,B){let V=!1;const O=d(C,W,F,k);s!==O&&(s=O,c(s.object)),V=m(C,W,F,B),V&&g(C,W,F,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(C,k,F,W),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function d(C,k,F,W){const B=W.wireframe===!0;let V=n[k.id];V===void 0&&(V={},n[k.id]=V);const O=C.isInstancedMesh===!0?C.id:0;let Q=V[O];Q===void 0&&(Q={},V[O]=Q);let J=Q[F.id];J===void 0&&(J={},Q[F.id]=J);let ce=J[B];return ce===void 0&&(ce=h(l()),J[B]=ce),ce}function h(C){const k=[],F=[],W=[];for(let B=0;B<t;B++)k[B]=0,F[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:W,object:C,attributes:{},index:null}}function m(C,k,F,W){const B=s.attributes,V=k.attributes;let O=0;const Q=F.getAttributes();for(const J in Q)if(Q[J].location>=0){const fe=B[J];let ue=V[J];if(ue===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),fe===void 0||fe.attribute!==ue||ue&&fe.data!==ue.data)return!0;O++}return s.attributesNum!==O||s.index!==W}function g(C,k,F,W){const B={},V=k.attributes;let O=0;const Q=F.getAttributes();for(const J in Q)if(Q[J].location>=0){let fe=V[J];fe===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor));const ue={};ue.attribute=fe,fe&&fe.data&&(ue.data=fe.data),B[J]=ue,O++}s.attributes=B,s.attributesNum=O,s.index=W}function M(){const C=s.newAttributes;for(let k=0,F=C.length;k<F;k++)C[k]=0}function p(C){f(C,0)}function f(C,k){const F=s.newAttributes,W=s.enabledAttributes,B=s.attributeDivisors;F[C]=1,W[C]===0&&(i.enableVertexAttribArray(C),W[C]=1),B[C]!==k&&(i.vertexAttribDivisor(C,k),B[C]=k)}function y(){const C=s.newAttributes,k=s.enabledAttributes;for(let F=0,W=k.length;F<W;F++)k[F]!==C[F]&&(i.disableVertexAttribArray(F),k[F]=0)}function T(C,k,F,W,B,V,O){O===!0?i.vertexAttribIPointer(C,k,F,B,V):i.vertexAttribPointer(C,k,F,W,B,V)}function b(C,k,F,W){M();const B=W.attributes,V=F.getAttributes(),O=k.defaultAttributeValues;for(const Q in V){const J=V[Q];if(J.location>=0){let ce=B[Q];if(ce===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const fe=ce.normalized,ue=ce.itemSize,De=e.get(ce);if(De===void 0)continue;const qe=De.buffer,ke=De.type,Z=De.bytesPerElement,ee=ke===i.INT||ke===i.UNSIGNED_INT||ce.gpuType===zo;if(ce.isInterleavedBufferAttribute){const te=ce.data,Ue=te.stride,ge=ce.offset;if(te.isInstancedInterleavedBuffer){for(let Fe=0;Fe<J.locationSize;Fe++)f(J.location+Fe,te.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Fe=0;Fe<J.locationSize;Fe++)p(J.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Fe=0;Fe<J.locationSize;Fe++)T(J.location+Fe,ue/J.locationSize,ke,fe,Ue*Z,(ge+ue/J.locationSize*Fe)*Z,ee)}else{if(ce.isInstancedBufferAttribute){for(let te=0;te<J.locationSize;te++)f(J.location+te,ce.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let te=0;te<J.locationSize;te++)p(J.location+te);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let te=0;te<J.locationSize;te++)T(J.location+te,ue/J.locationSize,ke,fe,ue*Z,ue/J.locationSize*te*Z,ee)}}else if(O!==void 0){const fe=O[Q];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(J.location,fe);break;case 3:i.vertexAttrib3fv(J.location,fe);break;case 4:i.vertexAttrib4fv(J.location,fe);break;default:i.vertexAttrib1fv(J.location,fe)}}}}y()}function R(){S();for(const C in n){const k=n[C];for(const F in k){const W=k[F];for(const B in W){const V=W[B];for(const O in V)u(V[O].object),delete V[O];delete W[B]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;const k=n[C.id];for(const F in k){const W=k[F];for(const B in W){const V=W[B];for(const O in V)u(V[O].object),delete V[O];delete W[B]}}delete n[C.id]}function I(C){for(const k in n){const F=n[k];for(const W in F){const B=F[W];if(B[C.id]===void 0)continue;const V=B[C.id];for(const O in V)u(V[O].object),delete V[O];delete B[C.id]}}}function x(C){for(const k in n){const F=n[k],W=C.isInstancedMesh===!0?C.id:0,B=F[W];if(B!==void 0){for(const V in B){const O=B[V];for(const Q in O)u(O[Q].object),delete O[Q];delete B[V]}delete F[W],Object.keys(F).length===0&&delete n[k]}}}function S(){Y(),a=!0,s!==r&&(s=r,c(s.object))}function Y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:Y,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:p,disableUnusedAttributes:y}}function am(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,n,1)}function l(c,u,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let M=0;M<d;M++)g+=u[M]*h[M];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function om(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==xn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const x=I===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==an&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Cn&&!x)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,maxSamples:R,samples:w}}function lm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Mi,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||r;return r=h,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,T=y*4;let b=f.clippingState||null;l.value=b,b=u(g,h,T,m);for(let R=0;R!==T;++R)b[R]=t[R];f.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,g){const M=d!==null?d.length:0;let p=null;if(M!==0){if(p=l.value,g!==!0||p===null){const f=m+M*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let T=0,b=m;T!==M;++T,b+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}const ui=4,jl=[.125,.215,.35,.446,.526,.582],Ei=20,cm=256,mr=new Jo,Jl=new $e;let Ta=null,Aa=0,wa=0,Ca=!1;const um=new N;class Ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=um}=s;Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,Aa,wa),this._renderer.xr.enabled=Ca,e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Zn,format:xn,colorSpace:ir,depthBuffer:!1},r=ec(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hm(s)),this._blurMaterial=fm(s,e,t),this._ggxMaterial=dm(s,e,t)}return r}_compileMaterial(e){const t=new Vt(new fn,e);this._renderer.compile(t,mr)}_sceneToCubeUV(e,t,n,r,s){const l=new un(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(Jl),d.toneMapping=In,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new vn,new wi({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,p=M.material;let f=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,f=!0):(p.color.copy(Jl),f=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const R=this._cubeSize;Yi(r,b*R,T>2?R:0,R,R),d.setRenderTarget(r),f&&d.render(M,l),d.render(e,l)}d.toneMapping=m,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ai||e.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,mr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,m=d*h,{_lodMax:g}=this,M=this._sizeLods[n],p=3*M*(n>g-ui?n-g+ui:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-t,Yi(s,p,f,3*M,2*M),r.setRenderTarget(s),r.render(o,mr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Yi(e,p,f,3*M,2*M),r.setRenderTarget(e),r.render(o,mr)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ei-1),M=s/g,p=isFinite(s)?1+Math.floor(u*M):Ei;p>Ei&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);const f=[];let y=0;for(let I=0;I<Ei;++I){const x=I/M,S=Math.exp(-x*x/2);f.push(S),I===0?y+=S:I<p&&(y+=2*S)}for(let I=0;I<f.length;I++)f[I]=f[I]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-n;const b=this._sizeLods[r],R=3*b*(r>T-ui?r-T+ui:0),w=4*(this._cubeSize-b);Yi(t,R,w,3*b,2*b),l.setRenderTarget(t),l.render(d,mr)}}function hm(i){const e=[],t=[],n=[];let r=i;const s=i-ui+1+jl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-ui?l=jl[a-i+ui-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,M=3,p=2,f=1,y=new Float32Array(M*g*m),T=new Float32Array(p*g*m),b=new Float32Array(f*g*m);for(let w=0;w<m;w++){const I=w%3*2/3-1,x=w>2?0:-1,S=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];y.set(S,M*g*w),T.set(h,p*g*w);const Y=[w,w,w,w,w,w];b.set(Y,f*g*w)}const R=new fn;R.setAttribute("position",new jt(y,M)),R.setAttribute("uv",new jt(T,p)),R.setAttribute("faceIndex",new jt(b,f)),n.push(new Vt(R,null)),r>ui&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ec(i,e,t){const n=new Pn(i,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function dm(i,e,t){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function fm(i,e,t){const n=new Float32Array(Ei),r=new N(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function tc(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function nc(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Xs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Su extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new pu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vn(5,5,5),s=new Fn({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:qn});s.uniforms.tEquirect.value=t;const a=new Vt(r,s),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=Gt),new vd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function pm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===$s||m===js)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const M=new Su(g.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,g=m===$s||m===js,M=m===Ai||m===tr;if(g||M){let p=t.get(h);const f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new Ql(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const y=h.image;return g&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new Ql(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,m){return m===$s?h.mapping=Ai:m===js&&(h.mapping=tr),h}function l(h){let m=0;const g=6;for(let M=0;M<g;M++)h[M]!==void 0&&m++;return m===g}function c(h){const m=h.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function mm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Us("WebGLRenderer: "+n+" extension not supported."),r}}}function gm(i,e,t,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(d){const h=[],m=d.index,g=d.attributes.position;let M=0;if(g===void 0)return;if(m!==null){const y=m.array;M=m.version;for(let T=0,b=y.length;T<b;T+=3){const R=y[T+0],w=y[T+1],I=y[T+2];h.push(R,w,w,I,I,R)}}else{const y=g.array;M=g.version;for(let T=0,b=y.length/3-1;T<b;T+=3){const R=T+0,w=T+1,I=T+2;h.push(R,w,w,I,I,R)}}const p=new(g.count>=65535?hu:uu)(h,1);p.version=M;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function _m(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){i.drawElements(n,m,s,h*a),t.update(m,n,1)}function c(h,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,h*a,g),t.update(m,n,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}function d(h,m,g,M){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/a,m[f],M[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,M,0,g);let f=0;for(let y=0;y<g;y++)f+=m[y]*M[y];t.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function xm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vm(i,e,t){const n=new WeakMap,r=new xt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let Y=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",Y)};var m=Y;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),M===!0&&(b=2),p===!0&&(b=3);let R=o.attributes.position.count*b,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const I=new Float32Array(R*w*4*d),x=new ou(I,R,w,d);x.type=Cn,x.needsUpdate=!0;const S=b*4;for(let C=0;C<d;C++){const k=f[C],F=y[C],W=T[C],B=R*w*4*C;for(let V=0;V<k.count;V++){const O=V*S;g===!0&&(r.fromBufferAttribute(k,V),I[B+O+0]=r.x,I[B+O+1]=r.y,I[B+O+2]=r.z,I[B+O+3]=0),M===!0&&(r.fromBufferAttribute(F,V),I[B+O+4]=r.x,I[B+O+5]=r.y,I[B+O+6]=r.z,I[B+O+7]=0),p===!0&&(r.fromBufferAttribute(W,V),I[B+O+8]=r.x,I[B+O+9]=r.y,I[B+O+10]=r.z,I[B+O+11]=W.itemSize===4?r.w:1)}}h={count:d,texture:x,size:new nt(R,w)},n.set(o,h),o.addEventListener("dispose",Y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Sm(i,e,t,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Mm={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[Yc]:"CINEON_TONE_MAPPING",[qc]:"ACES_FILMIC_TONE_MAPPING",[Zc]:"AGX_TONE_MAPPING",[$c]:"NEUTRAL_TONE_MAPPING",[Kc]:"CUSTOM_TONE_MAPPING"};function ym(i,e,t,n,r){const s=new Pn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new Pn(e,t,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),o=new fn;o.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new dn([0,2,0,0,2,0],2));const l=new dd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Vt(o,l),u=new Jo(-1,1,1,-1,0,1);let d=null,h=null,m=!1,g,M=null,p=[],f=!1;this.setSize=function(y,T){s.setSize(y,T),a.setSize(y,T);for(let b=0;b<p.length;b++){const R=p[b];R.setSize&&R.setSize(y,T)}},this.setEffects=function(y){p=y,f=p.length>0&&p[0].isRenderPass===!0;const T=s.width,b=s.height;for(let R=0;R<p.length;R++){const w=p[R];w.setSize&&w.setSize(T,b)}},this.begin=function(y,T){if(m||y.toneMapping===In&&p.length===0)return!1;if(M=T,T!==null){const b=T.width,R=T.height;(s.width!==b||s.height!==R)&&this.setSize(b,R)}return f===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=In,!0},this.hasRenderPass=function(){return f},this.end=function(y,T){y.toneMapping=g,m=!0;let b=s,R=a;for(let w=0;w<p.length;w++){const I=p[w];if(I.enabled!==!1&&(I.render(y,R,b,T),I.needsSwap!==!1)){const x=b;b=R,R=x}}if(d!==y.outputColorSpace||h!==y.toneMapping){d=y.outputColorSpace,h=y.toneMapping,l.defines={},Je.getTransfer(d)===at&&(l.defines.SRGB_TRANSFER="");const w=Mm[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(M),y.render(c,u),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Mu=new Ht,Po=new Rr(1,1),yu=new ou,Eu=new zh,bu=new pu,ic=[],rc=[],sc=new Float32Array(16),ac=new Float32Array(9),oc=new Float32Array(4);function lr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ic[r];if(s===void 0&&(s=new Float32Array(r),ic[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ys(i,e){let t=rc[e];t===void 0&&(t=new Int32Array(e),rc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Em(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function wm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;oc.set(n),i.uniformMatrix2fv(this.addr,!1,oc),Ct(t,n)}}function Cm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;ac.set(n),i.uniformMatrix3fv(this.addr,!1,ac),Ct(t,n)}}function Rm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;sc.set(n),i.uniformMatrix4fv(this.addr,!1,sc),Ct(t,n)}}function Im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function Bm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Po.compareFunction=t.isReversedDepthBuffer()?qo:Yo,s=Po):s=Mu,t.setTexture2D(e||s,r)}function km(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Eu,r)}function zm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||bu,r)}function Gm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||yu,r)}function Hm(i){switch(i){case 5126:return Em;case 35664:return bm;case 35665:return Tm;case 35666:return Am;case 35674:return wm;case 35675:return Cm;case 35676:return Rm;case 5124:case 35670:return Im;case 35667:case 35671:return Pm;case 35668:case 35672:return Dm;case 35669:case 35673:return Lm;case 5125:return Um;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Gm}}function Vm(i,e){i.uniform1fv(this.addr,e)}function Wm(i,e){const t=lr(e,this.size,2);i.uniform2fv(this.addr,t)}function Xm(i,e){const t=lr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ym(i,e){const t=lr(e,this.size,4);i.uniform4fv(this.addr,t)}function qm(i,e){const t=lr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Km(i,e){const t=lr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zm(i,e){const t=lr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $m(i,e){i.uniform1iv(this.addr,e)}function jm(i,e){i.uniform2iv(this.addr,e)}function Jm(i,e){i.uniform3iv(this.addr,e)}function Qm(i,e){i.uniform4iv(this.addr,e)}function eg(i,e){i.uniform1uiv(this.addr,e)}function tg(i,e){i.uniform2uiv(this.addr,e)}function ng(i,e){i.uniform3uiv(this.addr,e)}function ig(i,e){i.uniform4uiv(this.addr,e)}function rg(i,e,t){const n=this.cache,r=e.length,s=Ys(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Po:a=Mu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function sg(i,e,t){const n=this.cache,r=e.length,s=Ys(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Eu,s[a])}function ag(i,e,t){const n=this.cache,r=e.length,s=Ys(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||bu,s[a])}function og(i,e,t){const n=this.cache,r=e.length,s=Ys(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||yu,s[a])}function lg(i){switch(i){case 5126:return Vm;case 35664:return Wm;case 35665:return Xm;case 35666:return Ym;case 35674:return qm;case 35675:return Km;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return jm;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return eg;case 36294:return tg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}class cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hm(t.type)}}class ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lg(t.type)}}class hg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function lc(i,e){i.seq.push(e),i.map[e.id]=e}function dg(i,e,t){const n=i.name,r=n.length;for(Ra.lastIndex=0;;){const s=Ra.exec(n),a=Ra.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){lc(t,c===void 0?new cg(o,i,e):new ug(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new hg(o),lc(t,d)),t=d}}}class Rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);dg(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function cc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const fg=37297;let pg=0;function mg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const uc=new ze;function gg(i){Je._getMatrix(uc,Je.workingColorSpace,i);const e=`mat3( ${uc.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Ds:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+mg(i.getShaderSource(e),o)}else return s}function _g(i,e){const t=gg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const xg={[Wc]:"Linear",[Xc]:"Reinhard",[Yc]:"Cineon",[qc]:"ACESFilmic",[Zc]:"AgX",[$c]:"Neutral",[Kc]:"Custom"};function vg(i,e){const t=xg[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ds=new N;function Sg(){Je.getLuminanceCoefficients(ds);const i=ds.x.toFixed(4),e=ds.y.toFixed(4),t=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function yg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Eg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Mr(i){return i!==""}function dc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(bg,Ag)}const Tg=new Map;function Ag(i,e){let t=Ge[e];if(t===void 0){const n=Tg.get(e);if(n!==void 0)t=Ge[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(i){return i.replace(wg,Cg)}function Cg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Rg={[Es]:"SHADOWMAP_TYPE_PCF",[Sr]:"SHADOWMAP_TYPE_VSM"};function Ig(i){return Rg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Pg={[Ai]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE_UV"};function Dg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Pg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Lg={[tr]:"ENVMAP_MODE_REFRACTION"};function Ug(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Lg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ng={[ko]:"ENVMAP_BLENDING_MULTIPLY",[vh]:"ENVMAP_BLENDING_MIX",[Sh]:"ENVMAP_BLENDING_ADD"};function Fg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ng[i.combine]||"ENVMAP_BLENDING_NONE"}function Og(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Bg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ig(t),c=Dg(t),u=Ug(t),d=Fg(t),h=Og(t),m=Mg(t),g=yg(s),M=r.createProgram();let p,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),f.length>0&&(f+=`
`)):(p=[mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),f=[mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Ge.tonemapping_pars_fragment:"",t.toneMapping!==In?vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,_g("linearToOutputTexel",t.outputColorSpace),Sg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),a=Do(a),a=dc(a,t),a=fc(a,t),o=Do(o),o=dc(o,t),o=fc(o,t),a=pc(a),o=pc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=y+p+a,b=y+f+o,R=cc(r,r.VERTEX_SHADER,T),w=cc(r,r.FRAGMENT_SHADER,b);r.attachShader(M,R),r.attachShader(M,w),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function I(C){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(M)||"",F=r.getShaderInfoLog(R)||"",W=r.getShaderInfoLog(w)||"",B=k.trim(),V=F.trim(),O=W.trim();let Q=!0,J=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,R,w);else{const ce=hc(r,R,"vertex"),fe=hc(r,w,"fragment");et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+ce+`
`+fe)}else B!==""?Ne("WebGLProgram: Program Info Log:",B):(V===""||O==="")&&(J=!1);J&&(C.diagnostics={runnable:Q,programLog:B,vertexShader:{log:V,prefix:p},fragmentShader:{log:O,prefix:f}})}r.deleteShader(R),r.deleteShader(w),x=new Rs(r,M),S=Eg(r,M)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=r.getProgramParameter(M,fg)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pg++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=w,this}let kg=0;class zg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gg(e),t.set(e,n)),n}}class Gg{constructor(e){this.id=kg++,this.code=e,this.usedTimes=0}}function Hg(i,e,t,n,r,s){const a=new lu,o=new zg,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,S,Y,C,k){const F=C.fog,W=k.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||B,V),Q=O&&O.mapping===Hs?O.image.height:null,J=m[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ne("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=ce!==void 0?ce.length:0;let ue=0;W.morphAttributes.position!==void 0&&(ue=1),W.morphAttributes.normal!==void 0&&(ue=2),W.morphAttributes.color!==void 0&&(ue=3);let De,qe,ke,Z;if(J){const st=An[J];De=st.vertexShader,qe=st.fragmentShader}else De=x.vertexShader,qe=x.fragmentShader,o.update(x),ke=o.getVertexShaderID(x),Z=o.getFragmentShaderID(x);const ee=i.getRenderTarget(),te=i.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,ge=k.isBatchedMesh===!0,Fe=!!x.map,Rt=!!x.matcap,je=!!O,rt=!!x.aoMap,ct=!!x.lightMap,He=!!x.bumpMap,St=!!x.normalMap,P=!!x.displacementMap,Et=!!x.emissiveMap,it=!!x.metalnessMap,ht=!!x.roughnessMap,be=x.anisotropy>0,E=x.clearcoat>0,_=x.dispersion>0,L=x.iridescence>0,$=x.sheen>0,j=x.transmission>0,K=be&&!!x.anisotropyMap,ve=E&&!!x.clearcoatMap,ae=E&&!!x.clearcoatNormalMap,Pe=E&&!!x.clearcoatRoughnessMap,Le=L&&!!x.iridescenceMap,ne=L&&!!x.iridescenceThicknessMap,re=$&&!!x.sheenColorMap,Se=$&&!!x.sheenRoughnessMap,ye=!!x.specularMap,pe=!!x.specularColorMap,Ve=!!x.specularIntensityMap,D=j&&!!x.transmissionMap,oe=j&&!!x.thicknessMap,se=!!x.gradientMap,_e=!!x.alphaMap,ie=x.alphaTest>0,q=!!x.alphaHash,Me=!!x.extensions;let Oe=In;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const dt={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:qe,defines:x.defines,customVertexShaderID:ke,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ge,batchingColor:ge&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ir,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:Rt,envMap:je,envMapMode:je&&O.mapping,envMapCubeUVHeight:Q,aoMap:rt,lightMap:ct,bumpMap:He,normalMap:St,displacementMap:P,emissiveMap:Et,normalMapObjectSpace:St&&x.normalMapType===Eh,normalMapTangentSpace:St&&x.normalMapType===su,metalnessMap:it,roughnessMap:ht,anisotropy:be,anisotropyMap:K,clearcoat:E,clearcoatMap:ve,clearcoatNormalMap:ae,clearcoatRoughnessMap:Pe,dispersion:_,iridescence:L,iridescenceMap:Le,iridescenceThicknessMap:ne,sheen:$,sheenColorMap:re,sheenRoughnessMap:Se,specularMap:ye,specularColorMap:pe,specularIntensityMap:Ve,transmission:j,transmissionMap:D,thicknessMap:oe,gradientMap:se,opaque:x.transparent===!1&&x.blending===Ji&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:ie,alphaHash:q,combine:x.combine,mapUv:Fe&&g(x.map.channel),aoMapUv:rt&&g(x.aoMap.channel),lightMapUv:ct&&g(x.lightMap.channel),bumpMapUv:He&&g(x.bumpMap.channel),normalMapUv:St&&g(x.normalMap.channel),displacementMapUv:P&&g(x.displacementMap.channel),emissiveMapUv:Et&&g(x.emissiveMap.channel),metalnessMapUv:it&&g(x.metalnessMap.channel),roughnessMapUv:ht&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:ve&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:re&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(x.sheenRoughnessMap.channel),specularMapUv:ye&&g(x.specularMap.channel),specularColorMapUv:pe&&g(x.specularColorMap.channel),specularIntensityMapUv:Ve&&g(x.specularIntensityMap.channel),transmissionMapUv:D&&g(x.transmissionMap.channel),thicknessMapUv:oe&&g(x.thicknessMap.channel),alphaMapUv:_e&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(St||be),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Fe||_e),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&St===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:Et&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Y in x.defines)S.push(Y),S.push(x.defines[Y]);return x.isRawShaderMaterial===!1&&(f(S,x),y(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function f(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),x.push(a.mask)}function T(x){const S=m[x.type];let Y;if(S){const C=An[S];Y=cd.clone(C.uniforms)}else Y=x.uniforms;return Y}function b(x,S){let Y=u.get(S);return Y!==void 0?++Y.usedTimes:(Y=new Bg(i,S,x,r),c.push(Y),u.set(S,Y)),Y}function R(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function I(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:T,acquireProgram:b,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:I}}function Vg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Wg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _c(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,g,M,p,f){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:m,material:g,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:p,group:f},i[e]=y):(y.id=h.id,y.object=h,y.geometry=m,y.material=g,y.materialVariant=a(h),y.groupOrder=M,y.renderOrder=h.renderOrder,y.z=p,y.group=f),e++,y}function l(h,m,g,M,p,f){const y=o(h,m,g,M,p,f);g.transmission>0?n.push(y):g.transparent===!0?r.push(y):t.push(y)}function c(h,m,g,M,p,f){const y=o(h,m,g,M,p,f);g.transmission>0?n.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function u(h,m){t.length>1&&t.sort(h||Wg),n.length>1&&n.sort(m||gc),r.length>1&&r.sort(m||gc)}function d(){for(let h=e,m=i.length;h<m;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function Xg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new _c,i.set(n,[a])):r>=s.length?(a=new _c,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new $e};break;case"SpotLight":t={position:new N,direction:new N,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function qg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Kg=0;function Zg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $g(i){const e=new Yg,t=qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new mt,a=new mt;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,M=0,p=0,f=0,y=0,T=0,b=0,R=0,w=0,I=0;c.sort(Zg);for(let S=0,Y=c.length;S<Y;S++){const C=c[S],k=C.color,F=C.intensity,W=C.distance;let B=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===nr?B=C.shadow.map.texture:B=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=k.r*F,d+=k.g*F,h+=k.b*F;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],F);I++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const O=C.shadow,Q=t.get(C);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=C.shadow.matrix,y++}n.directional[m]=V,m++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(k).multiplyScalar(F),V.distance=W,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[M]=V;const O=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,O.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[M]=O.matrix,C.castShadow){const Q=t.get(C);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,n.spotShadow[M]=Q,n.spotShadowMap[M]=B,b++}M++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(k).multiplyScalar(F),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=V,p++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const O=C.shadow,Q=t.get(C);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,Q.shadowCameraNear=O.camera.near,Q.shadowCameraFar=O.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=V,g++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(F),V.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[f]=V,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==m||x.pointLength!==g||x.spotLength!==M||x.rectAreaLength!==p||x.hemiLength!==f||x.numDirectionalShadows!==y||x.numPointShadows!==T||x.numSpotShadows!==b||x.numSpotMaps!==R||x.numLightProbes!==I)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=b+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,x.directionalLength=m,x.pointLength=g,x.spotLength=M,x.rectAreaLength=p,x.hemiLength=f,x.numDirectionalShadows=y,x.numPointShadows=T,x.numSpotShadows=b,x.numSpotMaps=R,x.numLightProbes=I,n.version=Kg++)}function l(c,u){let d=0,h=0,m=0,g=0,M=0;const p=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const T=c[f];if(T.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),d++}else if(T.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),h++}else if(T.isHemisphereLight){const b=n.hemi[M];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function xc(i){const e=new $g(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function jg(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new xc(i),e.set(r,[o])):s>=a.length?(o=new xc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,e0=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],t0=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],vc=new mt,gr=new N,Ia=new N;function n0(i,e,t){let n=new $o;const r=new nt,s=new nt,a=new xt,o=new fd,l=new pd,c={},u=t.maxTextureSize,d={[di]:Jt,[Jt]:di,[wn]:wn},h=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Jg,fragmentShader:Qg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Vt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let f=this.type;this.render=function(w,I,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===eh&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Es);const S=i.getRenderTarget(),Y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(qn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=f!==this.type;F&&I.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(B=>B.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,B=w.length;W<B;W++){const V=w[W],O=V.shadow;if(O===void 0){Ne("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const Q=O.getFrameExtents();r.multiply(Q),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,O.mapSize.y=s.y));const J=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=J,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Sr){if(V.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Pn(r.x,r.y,{format:nr,type:Zn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new Rr(r.x,r.y,Cn),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=$n,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ft,O.map.depthTexture.magFilter=ft}else V.isPointLight?(O.map=new Su(r.x),O.map.depthTexture=new ad(r.x,Un)):(O.map=new Pn(r.x,r.y),O.map.depthTexture=new Rr(r.x,r.y,Un)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=$n,this.type===Es?(O.map.depthTexture.compareFunction=J?qo:Yo,O.map.depthTexture.minFilter=Gt,O.map.depthTexture.magFilter=Gt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ft,O.map.depthTexture.magFilter=ft);O.camera.updateProjectionMatrix()}const ce=O.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<ce;fe++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,fe),i.clear();else{fe===0&&(i.setRenderTarget(O.map),i.clear());const ue=O.getViewport(fe);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),k.viewport(a)}if(V.isPointLight){const ue=O.camera,De=O.matrix,qe=V.distance||ue.far;qe!==ue.far&&(ue.far=qe,ue.updateProjectionMatrix()),gr.setFromMatrixPosition(V.matrixWorld),ue.position.copy(gr),Ia.copy(ue.position),Ia.add(e0[fe]),ue.up.copy(t0[fe]),ue.lookAt(Ia),ue.updateMatrixWorld(),De.makeTranslation(-gr.x,-gr.y,-gr.z),vc.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),O._frustum.setFromProjectionMatrix(vc,ue.coordinateSystem,ue.reversedDepth)}else O.updateMatrices(V);n=O.getFrustum(),b(I,x,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===Sr&&y(O,x),O.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,Y,C)};function y(w,I){const x=e.update(M);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pn(r.x,r.y,{format:nr,type:Zn})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(I,null,x,h,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(I,null,x,m,M,null)}function T(w,I,x,S){let Y=null;const C=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)Y=C;else if(Y=x.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const k=Y.uuid,F=I.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let B=W[F];B===void 0&&(B=Y.clone(),W[F]=B,I.addEventListener("dispose",R)),Y=B}if(Y.visible=I.visible,Y.wireframe=I.wireframe,S===Sr?Y.side=I.shadowSide!==null?I.shadowSide:I.side:Y.side=I.shadowSide!==null?I.shadowSide:d[I.side],Y.alphaMap=I.alphaMap,Y.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,Y.map=I.map,Y.clipShadows=I.clipShadows,Y.clippingPlanes=I.clippingPlanes,Y.clipIntersection=I.clipIntersection,Y.displacementMap=I.displacementMap,Y.displacementScale=I.displacementScale,Y.displacementBias=I.displacementBias,Y.wireframeLinewidth=I.wireframeLinewidth,Y.linewidth=I.linewidth,x.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const k=i.properties.get(Y);k.light=x}return Y}function b(w,I,x,S,Y){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&Y===Sr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const F=e.update(w),W=w.material;if(Array.isArray(W)){const B=F.groups;for(let V=0,O=B.length;V<O;V++){const Q=B[V],J=W[Q.materialIndex];if(J&&J.visible){const ce=T(w,J,S,Y);w.onBeforeShadow(i,w,I,x,F,ce,Q),i.renderBufferDirect(x,null,F,ce,w,Q),w.onAfterShadow(i,w,I,x,F,ce,Q)}}}else if(W.visible){const B=T(w,W,S,Y);w.onBeforeShadow(i,w,I,x,F,B,null),i.renderBufferDirect(x,null,F,B,w,null),w.onAfterShadow(i,w,I,x,F,B,null)}}const k=w.children;for(let F=0,W=k.length;F<W;F++)b(k[F],I,x,S,Y)}function R(w){w.target.removeEventListener("dispose",R);for(const x in c){const S=c[x],Y=w.target.uuid;Y in S&&(S[Y].dispose(),delete S[Y])}}}function i0(i,e){function t(){let D=!1;const oe=new xt;let se=null;const _e=new xt(0,0,0,0);return{setMask:function(ie){se!==ie&&!D&&(i.colorMask(ie,ie,ie,ie),se=ie)},setLocked:function(ie){D=ie},setClear:function(ie,q,Me,Oe,dt){dt===!0&&(ie*=Oe,q*=Oe,Me*=Oe),oe.set(ie,q,Me,Oe),_e.equals(oe)===!1&&(i.clearColor(ie,q,Me,Oe),_e.copy(oe))},reset:function(){D=!1,se=null,_e.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,se=null,_e=null,ie=null;return{setReversed:function(q){if(oe!==q){const Me=e.get("EXT_clip_control");q?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),oe=q;const Oe=ie;ie=null,this.setClear(Oe)}},getReversed:function(){return oe},setTest:function(q){q?ee(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(q){se!==q&&!D&&(i.depthMask(q),se=q)},setFunc:function(q){if(oe&&(q=Lh[q]),_e!==q){switch(q){case Ha:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case er:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=q}},setLocked:function(q){D=q},setClear:function(q){ie!==q&&(ie=q,oe&&(q=1-q),i.clearDepth(q))},reset:function(){D=!1,se=null,_e=null,ie=null,oe=!1}}}function r(){let D=!1,oe=null,se=null,_e=null,ie=null,q=null,Me=null,Oe=null,dt=null;return{setTest:function(st){D||(st?ee(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(st){oe!==st&&!D&&(i.stencilMask(st),oe=st)},setFunc:function(st,kn,zn){(se!==st||_e!==kn||ie!==zn)&&(i.stencilFunc(st,kn,zn),se=st,_e=kn,ie=zn)},setOp:function(st,kn,zn){(q!==st||Me!==kn||Oe!==zn)&&(i.stencilOp(st,kn,zn),q=st,Me=kn,Oe=zn)},setLocked:function(st){D=st},setClear:function(st){dt!==st&&(i.clearStencil(st),dt=st)},reset:function(){D=!1,oe=null,se=null,_e=null,ie=null,q=null,Me=null,Oe=null,dt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,m=[],g=null,M=!1,p=null,f=null,y=null,T=null,b=null,R=null,w=null,I=new $e(0,0,0),x=0,S=!1,Y=null,C=null,k=null,F=null,W=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,O=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=O>=1):Q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=O>=2);let J=null,ce={};const fe=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),De=new xt().fromArray(fe),qe=new xt().fromArray(ue);function ke(D,oe,se,_e){const ie=new Uint8Array(4),q=i.createTexture();i.bindTexture(D,q),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<se;Me++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(oe+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return q}const Z={};Z[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(er),He(!1),St(vl),ee(i.CULL_FACE),rt(qn);function ee(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function te(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ue(D,oe){return d[D]!==oe?(i.bindFramebuffer(D,oe),d[D]=oe,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function ge(D,oe){let se=m,_e=!1;if(D){se=h.get(oe),se===void 0&&(se=[],h.set(oe,se));const ie=D.textures;if(se.length!==ie.length||se[0]!==i.COLOR_ATTACHMENT0){for(let q=0,Me=ie.length;q<Me;q++)se[q]=i.COLOR_ATTACHMENT0+q;se.length=ie.length,_e=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,_e=!0);_e&&i.drawBuffers(se)}function Fe(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Rt={[yi]:i.FUNC_ADD,[nh]:i.FUNC_SUBTRACT,[ih]:i.FUNC_REVERSE_SUBTRACT};Rt[rh]=i.MIN,Rt[sh]=i.MAX;const je={[ah]:i.ZERO,[oh]:i.ONE,[lh]:i.SRC_COLOR,[za]:i.SRC_ALPHA,[ph]:i.SRC_ALPHA_SATURATE,[dh]:i.DST_COLOR,[uh]:i.DST_ALPHA,[ch]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[fh]:i.ONE_MINUS_DST_COLOR,[hh]:i.ONE_MINUS_DST_ALPHA,[mh]:i.CONSTANT_COLOR,[gh]:i.ONE_MINUS_CONSTANT_COLOR,[_h]:i.CONSTANT_ALPHA,[xh]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(D,oe,se,_e,ie,q,Me,Oe,dt,st){if(D===qn){M===!0&&(te(i.BLEND),M=!1);return}if(M===!1&&(ee(i.BLEND),M=!0),D!==th){if(D!==p||st!==S){if((f!==yi||b!==yi)&&(i.blendEquation(i.FUNC_ADD),f=yi,b=yi),st)switch(D){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sl:i.blendFunc(i.ONE,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",D);break}else switch(D){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ml:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",D);break}y=null,T=null,R=null,w=null,I.set(0,0,0),x=0,p=D,S=st}return}ie=ie||oe,q=q||se,Me=Me||_e,(oe!==f||ie!==b)&&(i.blendEquationSeparate(Rt[oe],Rt[ie]),f=oe,b=ie),(se!==y||_e!==T||q!==R||Me!==w)&&(i.blendFuncSeparate(je[se],je[_e],je[q],je[Me]),y=se,T=_e,R=q,w=Me),(Oe.equals(I)===!1||dt!==x)&&(i.blendColor(Oe.r,Oe.g,Oe.b,dt),I.copy(Oe),x=dt),p=D,S=!1}function ct(D,oe){D.side===wn?te(i.CULL_FACE):ee(i.CULL_FACE);let se=D.side===Jt;oe&&(se=!se),He(se),D.blending===Ji&&D.transparent===!1?rt(qn):rt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const _e=D.stencilWrite;o.setTest(_e),_e&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Et(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){Y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),Y=D)}function St(D){D!==Ju?(ee(i.CULL_FACE),D!==C&&(D===vl?i.cullFace(i.BACK):D===Qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),C=D}function P(D){D!==k&&(V&&i.lineWidth(D),k=D)}function Et(D,oe,se){D?(ee(i.POLYGON_OFFSET_FILL),(F!==oe||W!==se)&&(F=oe,W=se,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,se))):te(i.POLYGON_OFFSET_FILL)}function it(D){D?ee(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function ht(D){D===void 0&&(D=i.TEXTURE0+B-1),J!==D&&(i.activeTexture(D),J=D)}function be(D,oe,se){se===void 0&&(J===null?se=i.TEXTURE0+B-1:se=J);let _e=ce[se];_e===void 0&&(_e={type:void 0,texture:void 0},ce[se]=_e),(_e.type!==D||_e.texture!==oe)&&(J!==se&&(i.activeTexture(se),J=se),i.bindTexture(D,oe||Z[D]),_e.type=D,_e.texture=oe)}function E(){const D=ce[J];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function $(){try{i.texSubImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function j(){try{i.texSubImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function ae(){try{i.texStorage2D(...arguments)}catch(D){et("WebGLState:",D)}}function Pe(){try{i.texStorage3D(...arguments)}catch(D){et("WebGLState:",D)}}function Le(){try{i.texImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function ne(){try{i.texImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function re(D){De.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),De.copy(D))}function Se(D){qe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),qe.copy(D))}function ye(D,oe){let se=c.get(oe);se===void 0&&(se=new WeakMap,c.set(oe,se));let _e=se.get(D);_e===void 0&&(_e=i.getUniformBlockIndex(oe,D.name),se.set(D,_e))}function pe(D,oe){const _e=c.get(oe).get(D);l.get(oe)!==_e&&(i.uniformBlockBinding(oe,_e,D.__bindingPointIndex),l.set(oe,_e))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},J=null,ce={},d={},h=new WeakMap,m=[],g=null,M=!1,p=null,f=null,y=null,T=null,b=null,R=null,w=null,I=new $e(0,0,0),x=0,S=!1,Y=null,C=null,k=null,F=null,W=null,De.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:te,bindFramebuffer:Ue,drawBuffers:ge,useProgram:Fe,setBlending:rt,setMaterial:ct,setFlipSided:He,setCullFace:St,setLineWidth:P,setPolygonOffset:Et,setScissorTest:it,activeTexture:ht,bindTexture:be,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:Le,texImage3D:ne,updateUBOMapping:ye,uniformBlockBinding:pe,texStorage2D:ae,texStorage3D:Pe,texSubImage2D:$,texSubImage3D:j,compressedTexSubImage2D:K,compressedTexSubImage3D:ve,scissor:re,viewport:Se,reset:Ve}}function r0(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):Ls("canvas")}function M(E,_,L){let $=1;const j=be(E);if((j.width>L||j.height>L)&&($=L/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const K=Math.floor($*j.width),ve=Math.floor($*j.height);d===void 0&&(d=g(K,ve));const ae=_?g(K,ve):d;return ae.width=K,ae.height=ve,ae.getContext("2d").drawImage(E,0,0,K,ve),Ne("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+ve+")."),ae}else return"data"in E&&Ne("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,_,L,$,j=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let K=_;if(_===i.RED&&(L===i.FLOAT&&(K=i.R32F),L===i.HALF_FLOAT&&(K=i.R16F),L===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(K=i.R8UI),L===i.UNSIGNED_SHORT&&(K=i.R16UI),L===i.UNSIGNED_INT&&(K=i.R32UI),L===i.BYTE&&(K=i.R8I),L===i.SHORT&&(K=i.R16I),L===i.INT&&(K=i.R32I)),_===i.RG&&(L===i.FLOAT&&(K=i.RG32F),L===i.HALF_FLOAT&&(K=i.RG16F),L===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(K=i.RG8UI),L===i.UNSIGNED_SHORT&&(K=i.RG16UI),L===i.UNSIGNED_INT&&(K=i.RG32UI),L===i.BYTE&&(K=i.RG8I),L===i.SHORT&&(K=i.RG16I),L===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(K=i.RGB8UI),L===i.UNSIGNED_SHORT&&(K=i.RGB16UI),L===i.UNSIGNED_INT&&(K=i.RGB32UI),L===i.BYTE&&(K=i.RGB8I),L===i.SHORT&&(K=i.RGB16I),L===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),L===i.UNSIGNED_INT&&(K=i.RGBA32UI),L===i.BYTE&&(K=i.RGBA8I),L===i.SHORT&&(K=i.RGBA16I),L===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(L===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){const ve=j?Ds:Je.getTransfer($);L===i.FLOAT&&(K=i.RGBA32F),L===i.HALF_FLOAT&&(K=i.RGBA16F),L===i.UNSIGNED_BYTE&&(K=ve===at?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(E,_){let L;return E?_===null||_===Un||_===wr?L=i.DEPTH24_STENCIL8:_===Cn?L=i.DEPTH32F_STENCIL8:_===Ar&&(L=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Un||_===wr?L=i.DEPTH_COMPONENT24:_===Cn?L=i.DEPTH_COMPONENT32F:_===Ar&&(L=i.DEPTH_COMPONENT16),L}function R(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==ft&&E.minFilter!==Gt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function w(E){const _=E.target;_.removeEventListener("dispose",w),x(_),_.isVideoTexture&&u.delete(_)}function I(E){const _=E.target;_.removeEventListener("dispose",I),Y(_)}function x(E){const _=n.get(E);if(_.__webglInit===void 0)return;const L=E.source,$=h.get(L);if($){const j=$[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(E),Object.keys($).length===0&&h.delete(L)}n.remove(E)}function S(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const L=E.source,$=h.get(L);delete $[_.__cacheKey],a.memory.textures--}function Y(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let j=0;j<_.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[$][j]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=E.textures;for(let $=0,j=L.length;$<j;$++){const K=n.get(L[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(L[$])}n.remove(E)}let C=0;function k(){C=0}function F(){const E=C;return E>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),C+=1,E}function W(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function B(E,_){const L=n.get(E);if(E.isVideoTexture&&it(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&L.__version!==E.version){const $=E.image;if($===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(L,E,_);return}}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function V(E,_){const L=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){Z(L,E,_);return}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function O(E,_){const L=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){Z(L,E,_);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function Q(E,_){const L=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&L.__version!==E.version){ee(L,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}const J={[Tr]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},ce={[ft]:i.NEAREST,[Mh]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[Js]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},fe={[bh]:i.NEVER,[Rh]:i.ALWAYS,[Th]:i.LESS,[Yo]:i.LEQUAL,[Ah]:i.EQUAL,[qo]:i.GEQUAL,[wh]:i.GREATER,[Ch]:i.NOTEQUAL};function ue(E,_){if(_.type===Cn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Gt||_.magFilter===Js||_.magFilter===zr||_.magFilter===bi||_.minFilter===Gt||_.minFilter===Js||_.minFilter===zr||_.minFilter===bi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,J[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,J[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,J[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ce[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,fe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ft||_.minFilter!==zr&&_.minFilter!==bi||_.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function De(E,_){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",w));const $=_.source;let j=h.get($);j===void 0&&(j={},h.set($,j));const K=W(_);if(K!==E.__cacheKey){j[K]===void 0&&(j[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),j[K].usedTimes++;const ve=j[E.__cacheKey];ve!==void 0&&(j[E.__cacheKey].usedTimes--,ve.usedTimes===0&&S(_)),E.__cacheKey=K,E.__webglTexture=j[K].texture}return L}function qe(E,_,L){return Math.floor(Math.floor(E/L)/_)}function ke(E,_,L,$){const K=E.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,L,$,_.data);else{K.sort((ne,re)=>ne.start-re.start);let ve=0;for(let ne=1;ne<K.length;ne++){const re=K[ve],Se=K[ne],ye=re.start+re.count,pe=qe(Se.start,_.width,4),Ve=qe(re.start,_.width,4);Se.start<=ye+1&&pe===Ve&&qe(Se.start+Se.count-1,_.width,4)===pe?re.count=Math.max(re.count,Se.start+Se.count-re.start):(++ve,K[ve]=Se)}K.length=ve+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),Le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ne=0,re=K.length;ne<re;ne++){const Se=K[ne],ye=Math.floor(Se.start/4),pe=Math.ceil(Se.count/4),Ve=ye%_.width,D=Math.floor(ye/_.width),oe=pe,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ve,D,oe,se,L,$,_.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function Z(E,_,L){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const j=De(E,_),K=_.source;t.bindTexture($,E.__webglTexture,i.TEXTURE0+L);const ve=n.get(K);if(K.version!==ve.__version||j===!0){t.activeTexture(i.TEXTURE0+L);const ae=Je.getPrimaries(Je.workingColorSpace),Pe=_.colorSpace===li?null:Je.getPrimaries(_.colorSpace),Le=_.colorSpace===li||ae===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ne=M(_.image,!1,r.maxTextureSize);ne=ht(_,ne);const re=s.convert(_.format,_.colorSpace),Se=s.convert(_.type);let ye=T(_.internalFormat,re,Se,_.colorSpace,_.isVideoTexture);ue($,_);let pe;const Ve=_.mipmaps,D=_.isVideoTexture!==!0,oe=ve.__version===void 0||j===!0,se=K.dataReady,_e=R(_,ne);if(_.isDepthTexture)ye=b(_.format===Ti,_.type),oe&&(D?t.texStorage2D(i.TEXTURE_2D,1,ye,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ye,ne.width,ne.height,0,re,Se,null));else if(_.isDataTexture)if(Ve.length>0){D&&oe&&t.texStorage2D(i.TEXTURE_2D,_e,ye,Ve[0].width,Ve[0].height);for(let ie=0,q=Ve.length;ie<q;ie++)pe=Ve[ie],D?se&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,pe.width,pe.height,re,Se,pe.data):t.texImage2D(i.TEXTURE_2D,ie,ye,pe.width,pe.height,0,re,Se,pe.data);_.generateMipmaps=!1}else D?(oe&&t.texStorage2D(i.TEXTURE_2D,_e,ye,ne.width,ne.height),se&&ke(_,ne,re,Se)):t.texImage2D(i.TEXTURE_2D,0,ye,ne.width,ne.height,0,re,Se,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,ye,Ve[0].width,Ve[0].height,ne.depth);for(let ie=0,q=Ve.length;ie<q;ie++)if(pe=Ve[ie],_.format!==xn)if(re!==null)if(D){if(se)if(_.layerUpdates.size>0){const Me=$l(pe.width,pe.height,_.format,_.type);for(const Oe of _.layerUpdates){const dt=pe.data.subarray(Oe*Me/pe.data.BYTES_PER_ELEMENT,(Oe+1)*Me/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Oe,pe.width,pe.height,1,re,dt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,ne.depth,re,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,ye,pe.width,pe.height,ne.depth,0,pe.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,ne.depth,re,Se,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,ye,pe.width,pe.height,ne.depth,0,re,Se,pe.data)}else{D&&oe&&t.texStorage2D(i.TEXTURE_2D,_e,ye,Ve[0].width,Ve[0].height);for(let ie=0,q=Ve.length;ie<q;ie++)pe=Ve[ie],_.format!==xn?re!==null?D?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,pe.width,pe.height,re,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,ye,pe.width,pe.height,0,pe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?se&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,pe.width,pe.height,re,Se,pe.data):t.texImage2D(i.TEXTURE_2D,ie,ye,pe.width,pe.height,0,re,Se,pe.data)}else if(_.isDataArrayTexture)if(D){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,ye,ne.width,ne.height,ne.depth),se)if(_.layerUpdates.size>0){const ie=$l(ne.width,ne.height,_.format,_.type);for(const q of _.layerUpdates){const Me=ne.data.subarray(q*ie/ne.data.BYTES_PER_ELEMENT,(q+1)*ie/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,ne.width,ne.height,1,re,Se,Me)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,re,Se,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ne.width,ne.height,ne.depth,0,re,Se,ne.data);else if(_.isData3DTexture)D?(oe&&t.texStorage3D(i.TEXTURE_3D,_e,ye,ne.width,ne.height,ne.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,re,Se,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ne.width,ne.height,ne.depth,0,re,Se,ne.data);else if(_.isFramebufferTexture){if(oe)if(D)t.texStorage2D(i.TEXTURE_2D,_e,ye,ne.width,ne.height);else{let ie=ne.width,q=ne.height;for(let Me=0;Me<_e;Me++)t.texImage2D(i.TEXTURE_2D,Me,ye,ie,q,0,re,Se,null),ie>>=1,q>>=1}}else if(Ve.length>0){if(D&&oe){const ie=be(Ve[0]);t.texStorage2D(i.TEXTURE_2D,_e,ye,ie.width,ie.height)}for(let ie=0,q=Ve.length;ie<q;ie++)pe=Ve[ie],D?se&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,re,Se,pe):t.texImage2D(i.TEXTURE_2D,ie,ye,re,Se,pe);_.generateMipmaps=!1}else if(D){if(oe){const ie=be(ne);t.texStorage2D(i.TEXTURE_2D,_e,ye,ie.width,ie.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Se,ne)}else t.texImage2D(i.TEXTURE_2D,0,ye,re,Se,ne);p(_)&&f($),ve.__version=K.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ee(E,_,L){if(_.image.length!==6)return;const $=De(E,_),j=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+L);const K=n.get(j);if(j.version!==K.__version||$===!0){t.activeTexture(i.TEXTURE0+L);const ve=Je.getPrimaries(Je.workingColorSpace),ae=_.colorSpace===li?null:Je.getPrimaries(_.colorSpace),Pe=_.colorSpace===li||ve===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Le=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,re=[];for(let q=0;q<6;q++)!Le&&!ne?re[q]=M(_.image[q],!0,r.maxCubemapSize):re[q]=ne?_.image[q].image:_.image[q],re[q]=ht(_,re[q]);const Se=re[0],ye=s.convert(_.format,_.colorSpace),pe=s.convert(_.type),Ve=T(_.internalFormat,ye,pe,_.colorSpace),D=_.isVideoTexture!==!0,oe=K.__version===void 0||$===!0,se=j.dataReady;let _e=R(_,Se);ue(i.TEXTURE_CUBE_MAP,_);let ie;if(Le){D&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ve,Se.width,Se.height);for(let q=0;q<6;q++){ie=re[q].mipmaps;for(let Me=0;Me<ie.length;Me++){const Oe=ie[Me];_.format!==xn?ye!==null?D?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me,0,0,Oe.width,Oe.height,ye,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me,Ve,Oe.width,Oe.height,0,Oe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me,0,0,Oe.width,Oe.height,ye,pe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me,Ve,Oe.width,Oe.height,0,ye,pe,Oe.data)}}}else{if(ie=_.mipmaps,D&&oe){ie.length>0&&_e++;const q=be(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ve,q.width,q.height)}for(let q=0;q<6;q++)if(ne){D?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,re[q].width,re[q].height,ye,pe,re[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ve,re[q].width,re[q].height,0,ye,pe,re[q].data);for(let Me=0;Me<ie.length;Me++){const dt=ie[Me].image[q].image;D?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me+1,0,0,dt.width,dt.height,ye,pe,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me+1,Ve,dt.width,dt.height,0,ye,pe,dt.data)}}else{D?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ye,pe,re[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ve,ye,pe,re[q]);for(let Me=0;Me<ie.length;Me++){const Oe=ie[Me];D?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me+1,0,0,ye,pe,Oe.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me+1,Ve,ye,pe,Oe.image[q])}}}p(_)&&f(i.TEXTURE_CUBE_MAP),K.__version=j.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function te(E,_,L,$,j,K){const ve=s.convert(L.format,L.colorSpace),ae=s.convert(L.type),Pe=T(L.internalFormat,ve,ae,L.colorSpace),Le=n.get(_),ne=n.get(L);if(ne.__renderTarget=_,!Le.__hasExternalTextures){const re=Math.max(1,_.width>>K),Se=Math.max(1,_.height>>K);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,K,Pe,re,Se,_.depth,0,ve,ae,null):t.texImage2D(j,K,Pe,re,Se,0,ve,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,ne.__webglTexture,0,P(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,ne.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(E,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const $=_.depthTexture,j=$&&$.isDepthTexture?$.type:null,K=b(_.stencilBuffer,j),ve=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Et(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(_),K,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(_),K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,E)}else{const $=_.textures;for(let j=0;j<$.length;j++){const K=$[j],ve=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),Pe=T(K.internalFormat,ve,ae,K.colorSpace);Et(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(_),Pe,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(_),Pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(E,_,L){const $=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ue(i.TEXTURE_CUBE_MAP,_.depthTexture);const Le=s.convert(_.depthTexture.format),ne=s.convert(_.depthTexture.type);let re;_.depthTexture.format===$n?re=i.DEPTH_COMPONENT24:_.depthTexture.format===Ti&&(re=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,re,_.width,_.height,0,Le,ne,null)}}else B(_.depthTexture,0);const K=j.__webglTexture,ve=P(_),ae=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,Pe=_.depthTexture.format===Ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===$n)Et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pe,ae,K,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,Pe,ae,K,0);else if(_.depthTexture.format===Ti)Et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pe,ae,K,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,Pe,ae,K,0);else throw new Error("Unknown depthTexture format")}function Fe(E){const _=n.get(E),L=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=$}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let $=0;$<6;$++)ge(_.__webglFramebuffer[$],E,$);else{const $=E.texture.mipmaps;$&&$.length>0?ge(_.__webglFramebuffer[0],E,0):ge(_.__webglFramebuffer,E,0)}else if(L){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),Ue(_.__webglDepthbuffer[$],E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,K)}}else{const $=E.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ue(_.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(E,_,L){const $=n.get(E);_!==void 0&&te($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Fe(E)}function je(E){const _=E.texture,L=n.get(E),$=n.get(_);E.addEventListener("dispose",I);const j=E.textures,K=E.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,a.memory.textures++),K){L.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[ae]=[];for(let Pe=0;Pe<_.mipmaps.length;Pe++)L.__webglFramebuffer[ae][Pe]=i.createFramebuffer()}else L.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)L.__webglFramebuffer[ae]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ae=0,Pe=j.length;ae<Pe;ae++){const Le=n.get(j[ae]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Et(E)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){const Pe=j[ae];L.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[ae]);const Le=s.convert(Pe.format,Pe.colorSpace),ne=s.convert(Pe.type),re=T(Pe.internalFormat,Le,ne,Pe.colorSpace,E.isXRRenderTarget===!0),Se=P(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,re,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,L.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ue(i.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)te(L.__webglFramebuffer[ae][Pe],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe);else te(L.__webglFramebuffer[ae],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,Pe=j.length;ae<Pe;ae++){const Le=j[ae],ne=n.get(Le);let re=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,ne.__webglTexture),ue(re,Le),te(L.__webglFramebuffer,E,Le,i.COLOR_ATTACHMENT0+ae,re,0),p(Le)&&f(re)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),ue(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)te(L.__webglFramebuffer[Pe],E,_,i.COLOR_ATTACHMENT0,ae,Pe);else te(L.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,ae,0);p(_)&&f(ae),t.unbindTexture()}E.depthBuffer&&Fe(E)}function rt(E){const _=E.textures;for(let L=0,$=_.length;L<$;L++){const j=_[L];if(p(j)){const K=y(E),ve=n.get(j).__webglTexture;t.bindTexture(K,ve),f(K),t.unbindTexture()}}}const ct=[],He=[];function St(E){if(E.samples>0){if(Et(E)===!1){const _=E.textures,L=E.width,$=E.height;let j=i.COLOR_BUFFER_BIT;const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(E),ae=_.length>1;if(ae)for(let Le=0;Le<_.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Pe=E.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Le=0;Le<_.length;Le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Le]);const ne=n.get(_[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,L,$,0,0,L,$,j,i.NEAREST),l===!0&&(ct.length=0,He.length=0,ct.push(i.COLOR_ATTACHMENT0+Le),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ct.push(K),He.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Le=0;Le<_.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Le]);const ne=n.get(_[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function P(E){return Math.min(r.maxSamples,E.samples)}function Et(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function it(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function ht(E,_){const L=E.colorSpace,$=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==ir&&L!==li&&(Je.getTransfer(L)===at?($!==xn||j!==an)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",L)),_}function be(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=O,this.setTextureCube=Q,this.rebindTextures=Rt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function s0(i,e){function t(n,r=li){let s;const a=Je.getTransfer(r);if(n===an)return i.UNSIGNED_BYTE;if(n===Go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jc)return i.BYTE;if(n===Qc)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===zo)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===nu)return i.ALPHA;if(n===iu)return i.RGB;if(n===xn)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===ru)return i.RED;if(n===Vo)return i.RED_INTEGER;if(n===nr)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===Xo)return i.RGBA_INTEGER;if(n===bs||n===Ts||n===As||n===ws)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===As)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===ja||n===Ja||n===Qa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===to||n===no||n===io||n===ro||n===so||n===ao)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===eo||n===to)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===no)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===io)return s.COMPRESSED_R11_EAC;if(n===ro)return s.COMPRESSED_SIGNED_R11_EAC;if(n===so)return s.COMPRESSED_RG11_EAC;if(n===ao)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===oo||n===lo||n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===So||n===Mo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===oo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ho)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_o)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===So)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===Eo||n===bo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yo)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===To||n===Ao||n===wo||n===Co)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===To)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ao)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Co)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const a0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new mu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Fn({vertexShader:a0,fragmentShader:o0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new Ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c0 extends sr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null;const M=typeof XRWebGLBinding<"u",p=new l0,f={},y=t.getContextAttributes();let T=null,b=null;const R=[],w=[],I=new nt;let x=null;const S=new un;S.viewport=new xt;const Y=new un;Y.viewport=new xt;const C=[S,Y],k=new Sd;let F=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=R[Z];return ee===void 0&&(ee=new sa,R[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=R[Z];return ee===void 0&&(ee=new sa,R[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=R[Z];return ee===void 0&&(ee=new sa,R[Z]=ee),ee.getHandSpace()};function B(Z){const ee=w.indexOf(Z.inputSource);if(ee===-1)return;const te=R[ee];te!==void 0&&(te.update(Z.inputSource,Z.frame,c||a),te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",O);for(let Z=0;Z<R.length;Z++){const ee=w[Z];ee!==null&&(w[Z]=null,R[Z].disconnect(ee))}F=null,W=null,p.reset();for(const Z in f)delete f[Z];e.setRenderTarget(T),m=null,h=null,d=null,r=null,b=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",V),r.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Ue=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=y.stencil?Ti:$n,Ue=y.stencil?wr:Un);const Fe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Pn(h.textureWidth,h.textureHeight,{format:xn,type:an,depthTexture:new Rr(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Pn(m.framebufferWidth,m.framebufferHeight,{format:xn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(Z){for(let ee=0;ee<Z.removed.length;ee++){const te=Z.removed[ee],Ue=w.indexOf(te);Ue>=0&&(w[Ue]=null,R[Ue].disconnect(te))}for(let ee=0;ee<Z.added.length;ee++){const te=Z.added[ee];let Ue=w.indexOf(te);if(Ue===-1){for(let Fe=0;Fe<R.length;Fe++)if(Fe>=w.length){w.push(te),Ue=Fe;break}else if(w[Fe]===null){w[Fe]=te,Ue=Fe;break}if(Ue===-1)break}const ge=R[Ue];ge&&ge.connect(te)}}const Q=new N,J=new N;function ce(Z,ee,te){Q.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(te.matrixWorld);const Ue=Q.distanceTo(J),ge=ee.projectionMatrix.elements,Fe=te.projectionMatrix.elements,Rt=ge[14]/(ge[10]-1),je=ge[14]/(ge[10]+1),rt=(ge[9]+1)/ge[5],ct=(ge[9]-1)/ge[5],He=(ge[8]-1)/ge[0],St=(Fe[8]+1)/Fe[0],P=Rt*He,Et=Rt*St,it=Ue/(-He+St),ht=it*-He;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ht),Z.translateZ(it),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ge[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const be=Rt+it,E=je+it,_=P-ht,L=Et+(Ue-ht),$=rt*je/E*be,j=ct*je/E*be;Z.projectionMatrix.makePerspective(_,L,$,j,be,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function fe(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ee=Z.near,te=Z.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(te=p.depthFar)),k.near=Y.near=S.near=ee,k.far=Y.far=S.far=te,(F!==k.near||W!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),F=k.near,W=k.far),k.layers.mask=Z.layers.mask|6,S.layers.mask=k.layers.mask&-5,Y.layers.mask=k.layers.mask&-3;const Ue=Z.parent,ge=k.cameras;fe(k,Ue);for(let Fe=0;Fe<ge.length;Fe++)fe(ge[Fe],Ue);ge.length===2?ce(k,S,Y):k.projectionMatrix.copy(S.projectionMatrix),ue(Z,k,Ue)};function ue(Z,ee,te){te===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ro*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(Z){return f[Z]};let De=null;function qe(Z,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){const te=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Ue=!1;te.length!==k.cameras.length&&(k.cameras.length=0,Ue=!0);for(let je=0;je<te.length;je++){const rt=te[je];let ct=null;if(m!==null)ct=m.getViewport(rt);else{const St=d.getViewSubImage(h,rt);ct=St.viewport,je===0&&(e.setRenderTargetTextures(b,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(b))}let He=C[je];He===void 0&&(He=new un,He.layers.enable(je),He.viewport=new xt,C[je]=He),He.matrix.fromArray(rt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(rt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ct.x,ct.y,ct.width,ct.height),je===0&&(k.matrix.copy(He.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ue===!0&&k.cameras.push(He)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){d=n.getBinding();const je=d.getDepthInformation(te[0]);je&&je.isValid&&je.texture&&p.init(je,r.renderState)}if(ge&&ge.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let je=0;je<te.length;je++){const rt=te[je].camera;if(rt){let ct=f[rt];ct||(ct=new mu,f[rt]=ct);const He=d.getCameraImage(rt);ct.sourceTexture=He}}}}for(let te=0;te<R.length;te++){const Ue=w[te],ge=R[te];Ue!==null&&ge!==void 0&&ge.update(Ue,ee,c||a)}De&&De(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ke=new vu;ke.setAnimationLoop(qe),this.setAnimationLoop=function(Z){De=Z},this.dispose=function(){}}}const Si=new Nn,u0=new mt;function h0(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,gu(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,y,T,b){f.isMeshBasicMaterial?s(p,f):f.isMeshLambertMaterial?(s(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),M(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,y,T):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Jt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Jt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f),T=y.envMap,b=y.envMapRotation;T&&(p.envMap.value=T,Si.copy(b),Si.x*=-1,Si.y*=-1,Si.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),p.envMapRotation.value.setFromMatrix4(u0.makeRotationFromEuler(Si)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,T){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=T*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Jt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function M(p,f){const y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function d0(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const b=T.program;n.uniformBlockBinding(y,b)}function c(y,T){let b=r[y.id];b===void 0&&(g(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",p));const R=T.program;n.updateUBOMapping(y,R);const w=e.render.frame;s[y.id]!==w&&(h(y),s[y.id]=w)}function u(y){const T=d();y.__bindingPointIndex=T;const b=i.createBuffer(),R=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const T=r[y.id],b=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,I=b.length;w<I;w++){const x=Array.isArray(b[w])?b[w]:[b[w]];for(let S=0,Y=x.length;S<Y;S++){const C=x[S];if(m(C,w,S,R)===!0){const k=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let B=0;B<F.length;B++){const V=F[B],O=M(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,k+W,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,T,b,R){const w=y.value,I=T+"_"+b;if(R[I]===void 0)return typeof w=="number"||typeof w=="boolean"?R[I]=w:R[I]=w.clone(),!0;{const x=R[I];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return R[I]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function g(y){const T=y.uniforms;let b=0;const R=16;for(let I=0,x=T.length;I<x;I++){const S=Array.isArray(T[I])?T[I]:[T[I]];for(let Y=0,C=S.length;Y<C;Y++){const k=S[Y],F=Array.isArray(k.value)?k.value:[k.value];for(let W=0,B=F.length;W<B;W++){const V=F[W],O=M(V),Q=b%R,J=Q%O.boundary,ce=Q+J;b+=J,ce!==0&&R-ce<O.storage&&(b+=R-ce),k.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=O.storage}}}const w=b%R;return w>0&&(b+=R-w),y.__size=b,y.__cache={},this}function M(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",y),T}function p(y){const T=y.target;T.removeEventListener("dispose",p);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const f0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function p0(){return En===null&&(En=new ed(f0,16,16,nr,Zn),En.name="DFG_LUT",En.minFilter=Gt,En.magFilter=Gt,En.wrapS=on,En.wrapT=on,En.generateMipmaps=!1,En.needsUpdate=!0),En}class m0{constructor(e={}){const{canvas:t=Ph(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=an}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=m,p=new Set([Xo,Wo,Vo]),f=new Set([an,Un,Ar,wr,Go,Ho]),y=new Uint32Array(4),T=new Int32Array(4);let b=null,R=null;const w=[],I=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let Y=!1;this._outputColorSpace=Yt;let C=0,k=0,F=null,W=-1,B=null;const V=new xt,O=new xt;let Q=null;const J=new $e(0);let ce=0,fe=t.width,ue=t.height,De=1,qe=null,ke=null;const Z=new xt(0,0,fe,ue),ee=new xt(0,0,fe,ue);let te=!1;const Ue=new $o;let ge=!1,Fe=!1;const Rt=new mt,je=new N,rt=new xt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function St(){return F===null?De:1}let P=n;function Et(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bo}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",dt,!1),P===null){const U="webgl2";if(P=Et(U,v),P===null)throw Et(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw et("WebGLRenderer: "+v.message),v}let it,ht,be,E,_,L,$,j,K,ve,ae,Pe,Le,ne,re,Se,ye,pe,Ve,D,oe,se,_e;function ie(){it=new mm(P),it.init(),oe=new s0(P,it),ht=new om(P,it,e,oe),be=new i0(P,it),ht.reversedDepthBuffer&&h&&be.buffers.depth.setReversed(!0),E=new xm(P),_=new Vg,L=new r0(P,it,be,_,ht,oe,E),$=new pm(S),j=new yd(P),se=new sm(P,j),K=new gm(P,j,E,se),ve=new Sm(P,K,j,se,E),pe=new vm(P,ht,L),re=new lm(_),ae=new Hg(S,$,it,ht,se,re),Pe=new h0(S,_),Le=new Xg,ne=new jg(it),ye=new rm(S,$,be,ve,g,l),Se=new n0(S,ve,ht),_e=new d0(P,E,ht,be),Ve=new am(P,it,E),D=new _m(P,it,E),E.programs=ae.programs,S.capabilities=ht,S.extensions=it,S.properties=_,S.renderLists=Le,S.shadowMap=Se,S.state=be,S.info=E}ie(),M!==an&&(x=new ym(M,t.width,t.height,r,s));const q=new c0(S,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const v=it.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=it.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(v){v!==void 0&&(De=v,this.setSize(fe,ue,!1))},this.getSize=function(v){return v.set(fe,ue)},this.setSize=function(v,U,X=!0){if(q.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=v,ue=U,t.width=Math.floor(v*De),t.height=Math.floor(U*De),X===!0&&(t.style.width=v+"px",t.style.height=U+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(fe*De,ue*De).floor()},this.setDrawingBufferSize=function(v,U,X){fe=v,ue=U,De=X,t.width=Math.floor(v*X),t.height=Math.floor(U*X),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(M===an){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(V)},this.getViewport=function(v){return v.copy(Z)},this.setViewport=function(v,U,X,G){v.isVector4?Z.set(v.x,v.y,v.z,v.w):Z.set(v,U,X,G),be.viewport(V.copy(Z).multiplyScalar(De).round())},this.getScissor=function(v){return v.copy(ee)},this.setScissor=function(v,U,X,G){v.isVector4?ee.set(v.x,v.y,v.z,v.w):ee.set(v,U,X,G),be.scissor(O.copy(ee).multiplyScalar(De).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(v){be.setScissorTest(te=v)},this.setOpaqueSort=function(v){qe=v},this.setTransparentSort=function(v){ke=v},this.getClearColor=function(v){return v.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,X=!0){let G=0;if(v){let z=!1;if(F!==null){const he=F.texture.format;z=p.has(he)}if(z){const he=F.texture.type,me=f.has(he),de=ye.getClearColor(),Ee=ye.getClearAlpha(),Ae=de.r,Be=de.g,We=de.b;me?(y[0]=Ae,y[1]=Be,y[2]=We,y[3]=Ee,P.clearBufferuiv(P.COLOR,0,y)):(T[0]=Ae,T[1]=Be,T[2]=We,T[3]=Ee,P.clearBufferiv(P.COLOR,0,T))}else G|=P.COLOR_BUFFER_BIT}U&&(G|=P.DEPTH_BUFFER_BIT),X&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),ye.dispose(),Le.dispose(),ne.dispose(),_.dispose(),$.dispose(),ve.dispose(),se.dispose(),_e.dispose(),ae.dispose(),q.dispose(),q.removeEventListener("sessionstart",hl),q.removeEventListener("sessionend",dl),fi.stop()};function Me(v){v.preventDefault(),wl("WebGLRenderer: Context Lost."),Y=!0}function Oe(){wl("WebGLRenderer: Context Restored."),Y=!1;const v=E.autoReset,U=Se.enabled,X=Se.autoUpdate,G=Se.needsUpdate,z=Se.type;ie(),E.autoReset=v,Se.enabled=U,Se.autoUpdate=X,Se.needsUpdate=G,Se.type=z}function dt(v){et("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function st(v){const U=v.target;U.removeEventListener("dispose",st),kn(U)}function kn(v){zn(v),_.remove(v)}function zn(v){const U=_.get(v).programs;U!==void 0&&(U.forEach(function(X){ae.releaseProgram(X)}),v.isShaderMaterial&&ae.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,X,G,z,he){U===null&&(U=ct);const me=z.isMesh&&z.matrixWorld.determinant()<0,de=Yu(v,U,X,G,z);be.setMaterial(G,me);let Ee=X.index,Ae=1;if(G.wireframe===!0){if(Ee=K.getWireframeAttribute(X),Ee===void 0)return;Ae=2}const Be=X.drawRange,We=X.attributes.position;let we=Be.start*Ae,ot=(Be.start+Be.count)*Ae;he!==null&&(we=Math.max(we,he.start*Ae),ot=Math.min(ot,(he.start+he.count)*Ae)),Ee!==null?(we=Math.max(we,0),ot=Math.min(ot,Ee.count)):We!=null&&(we=Math.max(we,0),ot=Math.min(ot,We.count));const Mt=ot-we;if(Mt<0||Mt===1/0)return;se.setup(z,G,de,X,Ee);let gt,lt=Ve;if(Ee!==null&&(gt=j.get(Ee),lt=D,lt.setIndex(gt)),z.isMesh)G.wireframe===!0?(be.setLineWidth(G.wireframeLinewidth*St()),lt.setMode(P.LINES)):lt.setMode(P.TRIANGLES);else if(z.isLine){let Ot=G.linewidth;Ot===void 0&&(Ot=1),be.setLineWidth(Ot*St()),z.isLineSegments?lt.setMode(P.LINES):z.isLineLoop?lt.setMode(P.LINE_LOOP):lt.setMode(P.LINE_STRIP)}else z.isPoints?lt.setMode(P.POINTS):z.isSprite&&lt.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Us("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ot=z._multiDrawStarts,Te=z._multiDrawCounts,Qt=z._multiDrawCount,Qe=Ee?j.get(Ee).bytesPerElement:1,pn=_.get(G).currentProgram.getUniforms();for(let Mn=0;Mn<Qt;Mn++)pn.setValue(P,"_gl_DrawID",Mn),lt.render(Ot[Mn]/Qe,Te[Mn])}else if(z.isInstancedMesh)lt.renderInstances(we,Mt,z.count);else if(X.isInstancedBufferGeometry){const Ot=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Te=Math.min(X.instanceCount,Ot);lt.renderInstances(we,Mt,Te)}else lt.render(we,Mt)};function ul(v,U,X){v.transparent===!0&&v.side===wn&&v.forceSinglePass===!1?(v.side=Jt,v.needsUpdate=!0,kr(v,U,X),v.side=di,v.needsUpdate=!0,kr(v,U,X),v.side=wn):kr(v,U,X)}this.compile=function(v,U,X=null){X===null&&(X=v),R=ne.get(X),R.init(U),I.push(R),X.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(R.pushLight(z),z.castShadow&&R.pushShadow(z))}),v!==X&&v.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(R.pushLight(z),z.castShadow&&R.pushShadow(z))}),R.setupLights();const G=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let me=0;me<he.length;me++){const de=he[me];ul(de,X,z),G.add(de)}else ul(he,X,z),G.add(he)}),R=I.pop(),G},this.compileAsync=function(v,U,X=null){const G=this.compile(v,U,X);return new Promise(z=>{function he(){if(G.forEach(function(me){_.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){z(v);return}setTimeout(he,10)}it.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ks=null;function Xu(v){Ks&&Ks(v)}function hl(){fi.stop()}function dl(){fi.start()}const fi=new vu;fi.setAnimationLoop(Xu),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(v){Ks=v,q.setAnimationLoop(v),v===null?fi.stop():fi.start()},q.addEventListener("sessionstart",hl),q.addEventListener("sessionend",dl),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;const X=q.enabled===!0&&q.isPresenting===!0,G=x!==null&&(F===null||X)&&x.begin(S,F);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,U,F),R=ne.get(v,I.length),R.init(U),I.push(R),Rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ue.setFromProjectionMatrix(Rt,Rn,U.reversedDepth),Fe=this.localClippingEnabled,ge=re.init(this.clippingPlanes,Fe),b=Le.get(v,w.length),b.init(),w.push(b),q.enabled===!0&&q.isPresenting===!0){const me=S.xr.getDepthSensingMesh();me!==null&&Zs(me,U,-1/0,S.sortObjects)}Zs(v,U,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(qe,ke),He=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,He&&ye.addToRenderList(b,v),this.info.render.frame++,ge===!0&&re.beginShadows();const z=R.state.shadowsArray;if(Se.render(z,v,U),ge===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&x.hasRenderPass())===!1){const me=b.opaque,de=b.transmissive;if(R.setupLights(),U.isArrayCamera){const Ee=U.cameras;if(de.length>0)for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){const We=Ee[Ae];pl(me,de,v,We)}He&&ye.render(v);for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){const We=Ee[Ae];fl(b,v,We,We.viewport)}}else de.length>0&&pl(me,de,v,U),He&&ye.render(v),fl(b,v,U)}F!==null&&k===0&&(L.updateMultisampleRenderTarget(F),L.updateRenderTargetMipmap(F)),G&&x.end(S),v.isScene===!0&&v.onAfterRender(S,v,U),se.resetDefaultState(),W=-1,B=null,I.pop(),I.length>0?(R=I[I.length-1],ge===!0&&re.setGlobalState(S.clippingPlanes,R.state.camera)):R=null,w.pop(),w.length>0?b=w[w.length-1]:b=null};function Zs(v,U,X,G){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)X=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)R.pushLight(v),v.castShadow&&R.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Ue.intersectsSprite(v)){G&&rt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Rt);const me=ve.update(v),de=v.material;de.visible&&b.push(v,me,de,X,rt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Ue.intersectsObject(v))){const me=ve.update(v),de=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),rt.copy(v.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),rt.copy(me.boundingSphere.center)),rt.applyMatrix4(v.matrixWorld).applyMatrix4(Rt)),Array.isArray(de)){const Ee=me.groups;for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){const We=Ee[Ae],we=de[We.materialIndex];we&&we.visible&&b.push(v,me,we,X,rt.z,We)}}else de.visible&&b.push(v,me,de,X,rt.z,null)}}const he=v.children;for(let me=0,de=he.length;me<de;me++)Zs(he[me],U,X,G)}function fl(v,U,X,G){const{opaque:z,transmissive:he,transparent:me}=v;R.setupLightsView(X),ge===!0&&re.setGlobalState(S.clippingPlanes,X),G&&be.viewport(V.copy(G)),z.length>0&&Br(z,U,X),he.length>0&&Br(he,U,X),me.length>0&&Br(me,U,X),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function pl(v,U,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[G.id]===void 0){const we=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[G.id]=new Pn(1,1,{generateMipmaps:!0,type:we?Zn:an,minFilter:bi,samples:Math.max(4,ht.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const he=R.state.transmissionRenderTarget[G.id],me=G.viewport||V;he.setSize(me.z*S.transmissionResolutionScale,me.w*S.transmissionResolutionScale);const de=S.getRenderTarget(),Ee=S.getActiveCubeFace(),Ae=S.getActiveMipmapLevel();S.setRenderTarget(he),S.getClearColor(J),ce=S.getClearAlpha(),ce<1&&S.setClearColor(16777215,.5),S.clear(),He&&ye.render(X);const Be=S.toneMapping;S.toneMapping=In;const We=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),R.setupLightsView(G),ge===!0&&re.setGlobalState(S.clippingPlanes,G),Br(v,X,G),L.updateMultisampleRenderTarget(he),L.updateRenderTargetMipmap(he),it.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ot=0,Mt=U.length;ot<Mt;ot++){const gt=U[ot],{object:lt,geometry:Ot,material:Te,group:Qt}=gt;if(Te.side===wn&&lt.layers.test(G.layers)){const Qe=Te.side;Te.side=Jt,Te.needsUpdate=!0,ml(lt,X,G,Ot,Te,Qt),Te.side=Qe,Te.needsUpdate=!0,we=!0}}we===!0&&(L.updateMultisampleRenderTarget(he),L.updateRenderTargetMipmap(he))}S.setRenderTarget(de,Ee,Ae),S.setClearColor(J,ce),We!==void 0&&(G.viewport=We),S.toneMapping=Be}function Br(v,U,X){const G=U.isScene===!0?U.overrideMaterial:null;for(let z=0,he=v.length;z<he;z++){const me=v[z],{object:de,geometry:Ee,group:Ae}=me;let Be=me.material;Be.allowOverride===!0&&G!==null&&(Be=G),de.layers.test(X.layers)&&ml(de,U,X,Ee,Be,Ae)}}function ml(v,U,X,G,z,he){v.onBeforeRender(S,U,X,G,z,he),v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(S,U,X,G,v,he),z.transparent===!0&&z.side===wn&&z.forceSinglePass===!1?(z.side=Jt,z.needsUpdate=!0,S.renderBufferDirect(X,U,G,z,v,he),z.side=di,z.needsUpdate=!0,S.renderBufferDirect(X,U,G,z,v,he),z.side=wn):S.renderBufferDirect(X,U,G,z,v,he),v.onAfterRender(S,U,X,G,z,he)}function kr(v,U,X){U.isScene!==!0&&(U=ct);const G=_.get(v),z=R.state.lights,he=R.state.shadowsArray,me=z.state.version,de=ae.getParameters(v,z.state,he,U,X),Ee=ae.getProgramCacheKey(de);let Ae=G.programs;G.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const Be=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;G.envMap=$.get(v.envMap||G.environment,Be),G.envMapRotation=G.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Ae===void 0&&(v.addEventListener("dispose",st),Ae=new Map,G.programs=Ae);let We=Ae.get(Ee);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===me)return _l(v,de),We}else de.uniforms=ae.getUniforms(v),v.onBeforeCompile(de,S),We=ae.acquireProgram(de,Ee),Ae.set(Ee,We),G.uniforms=de.uniforms;const we=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(we.clippingPlanes=re.uniform),_l(v,de),G.needsLights=Ku(v),G.lightsStateVersion=me,G.needsLights&&(we.ambientLightColor.value=z.state.ambient,we.lightProbe.value=z.state.probe,we.directionalLights.value=z.state.directional,we.directionalLightShadows.value=z.state.directionalShadow,we.spotLights.value=z.state.spot,we.spotLightShadows.value=z.state.spotShadow,we.rectAreaLights.value=z.state.rectArea,we.ltc_1.value=z.state.rectAreaLTC1,we.ltc_2.value=z.state.rectAreaLTC2,we.pointLights.value=z.state.point,we.pointLightShadows.value=z.state.pointShadow,we.hemisphereLights.value=z.state.hemi,we.directionalShadowMatrix.value=z.state.directionalShadowMatrix,we.spotLightMatrix.value=z.state.spotLightMatrix,we.spotLightMap.value=z.state.spotLightMap,we.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=We,G.uniformsList=null,We}function gl(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=Rs.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function _l(v,U){const X=_.get(v);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Yu(v,U,X,G,z){U.isScene!==!0&&(U=ct),L.resetTextureUnits();const he=U.fog,me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,de=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ir,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ae=$.get(G.envMap||me,Ee),Be=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,We=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color;let gt=In;G.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(gt=S.toneMapping);const lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ot=lt!==void 0?lt.length:0,Te=_.get(G),Qt=R.state.lights;if(ge===!0&&(Fe===!0||v!==B)){const It=v===B&&G.id===W;re.setState(G,v,It)}let Qe=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Qt.state.version||Te.outputColorSpace!==de||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==Ae||G.fog===!0&&Te.fog!==he||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==re.numPlanes||Te.numIntersection!==re.numIntersection)||Te.vertexAlphas!==Be||Te.vertexTangents!==We||Te.morphTargets!==we||Te.morphNormals!==ot||Te.morphColors!==Mt||Te.toneMapping!==gt||Te.morphTargetsCount!==Ot)&&(Qe=!0):(Qe=!0,Te.__version=G.version);let pn=Te.currentProgram;Qe===!0&&(pn=kr(G,U,z));let Mn=!1,pi=!1,Pi=!1;const ut=pn.getUniforms(),Lt=Te.uniforms;if(be.useProgram(pn.program)&&(Mn=!0,pi=!0,Pi=!0),G.id!==W&&(W=G.id,pi=!0),Mn||B!==v){be.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ut.setValue(P,"projectionMatrix",v.projectionMatrix),ut.setValue(P,"viewMatrix",v.matrixWorldInverse);const Qn=ut.map.cameraPosition;Qn!==void 0&&Qn.setValue(P,je.setFromMatrixPosition(v.matrixWorld)),ht.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ut.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),B!==v&&(B=v,pi=!0,Pi=!0)}if(Te.needsLights&&(Qt.state.directionalShadowMap.length>0&&ut.setValue(P,"directionalShadowMap",Qt.state.directionalShadowMap,L),Qt.state.spotShadowMap.length>0&&ut.setValue(P,"spotShadowMap",Qt.state.spotShadowMap,L),Qt.state.pointShadowMap.length>0&&ut.setValue(P,"pointShadowMap",Qt.state.pointShadowMap,L)),z.isSkinnedMesh){ut.setOptional(P,z,"bindMatrix"),ut.setOptional(P,z,"bindMatrixInverse");const It=z.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ut.setValue(P,"boneTexture",It.boneTexture,L))}z.isBatchedMesh&&(ut.setOptional(P,z,"batchingTexture"),ut.setValue(P,"batchingTexture",z._matricesTexture,L),ut.setOptional(P,z,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",z._indirectTexture,L),ut.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",z._colorsTexture,L));const Jn=X.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&pe.update(z,X,pn),(pi||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,ut.setValue(P,"receiveShadow",z.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Lt.envMapIntensity.value=U.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=p0()),pi&&(ut.setValue(P,"toneMappingExposure",S.toneMappingExposure),Te.needsLights&&qu(Lt,Pi),he&&G.fog===!0&&Pe.refreshFogUniforms(Lt,he),Pe.refreshMaterialUniforms(Lt,G,De,ue,R.state.transmissionRenderTarget[v.id]),Rs.upload(P,gl(Te),Lt,L)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Rs.upload(P,gl(Te),Lt,L),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ut.setValue(P,"center",z.center),ut.setValue(P,"modelViewMatrix",z.modelViewMatrix),ut.setValue(P,"normalMatrix",z.normalMatrix),ut.setValue(P,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const It=G.uniformsGroups;for(let Qn=0,Di=It.length;Qn<Di;Qn++){const xl=It[Qn];_e.update(xl,pn),_e.bind(xl,pn)}}return pn}function qu(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Ku(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,U,X){const G=_.get(v);G.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),_.get(v.texture).__webglTexture=U,_.get(v.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const X=_.get(v);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0};const Zu=P.createFramebuffer();this.setRenderTarget=function(v,U=0,X=0){F=v,C=U,k=X;let G=null,z=!1,he=!1;if(v){const de=_.get(v);if(de.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),V.copy(v.viewport),O.copy(v.scissor),Q=v.scissorTest,be.viewport(V),be.scissor(O),be.setScissorTest(Q),W=-1;return}else if(de.__webglFramebuffer===void 0)L.setupRenderTarget(v);else if(de.__hasExternalTextures)L.rebindTextures(v,_.get(v.texture).__webglTexture,_.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Be=v.depthTexture;if(de.__boundDepthTexture!==Be){if(Be!==null&&_.has(Be)&&(v.width!==Be.image.width||v.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(v)}}const Ee=v.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(he=!0);const Ae=_.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?G=Ae[U][X]:G=Ae[U],z=!0):v.samples>0&&L.useMultisampledRTT(v)===!1?G=_.get(v).__webglMultisampledFramebuffer:Array.isArray(Ae)?G=Ae[X]:G=Ae,V.copy(v.viewport),O.copy(v.scissor),Q=v.scissorTest}else V.copy(Z).multiplyScalar(De).floor(),O.copy(ee).multiplyScalar(De).floor(),Q=te;if(X!==0&&(G=Zu),be.bindFramebuffer(P.FRAMEBUFFER,G)&&be.drawBuffers(v,G),be.viewport(V),be.scissor(O),be.setScissorTest(Q),z){const de=_.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,de.__webglTexture,X)}else if(he){const de=U;for(let Ee=0;Ee<v.textures.length;Ee++){const Ae=_.get(v.textures[Ee]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,X,de)}}else if(v!==null&&X!==0){const de=_.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,X)}W=-1},this.readRenderTargetPixels=function(v,U,X,G,z,he,me,de=0){if(!(v&&v.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=_.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){be.bindFramebuffer(P.FRAMEBUFFER,Ee);try{const Ae=v.textures[de],Be=Ae.format,We=Ae.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!ht.textureFormatReadable(Be)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(We)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-G&&X>=0&&X<=v.height-z&&P.readPixels(U,X,G,z,oe.convert(Be),oe.convert(We),he)}finally{const Ae=F!==null?_.get(F).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(v,U,X,G,z,he,me,de=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=_.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee)if(U>=0&&U<=v.width-G&&X>=0&&X<=v.height-z){be.bindFramebuffer(P.FRAMEBUFFER,Ee);const Ae=v.textures[de],Be=Ae.format,We=Ae.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!ht.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),P.readPixels(U,X,G,z,oe.convert(Be),oe.convert(We),0);const ot=F!==null?_.get(F).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,ot);const Mt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Dh(P,Mt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.deleteBuffer(we),P.deleteSync(Mt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,X=0){const G=Math.pow(2,-X),z=Math.floor(v.image.width*G),he=Math.floor(v.image.height*G),me=U!==null?U.x:0,de=U!==null?U.y:0;L.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,me,de,z,he),be.unbindTexture()};const $u=P.createFramebuffer(),ju=P.createFramebuffer();this.copyTextureToTexture=function(v,U,X=null,G=null,z=0,he=0){let me,de,Ee,Ae,Be,We,we,ot,Mt;const gt=v.isCompressedTexture?v.mipmaps[he]:v.image;if(X!==null)me=X.max.x-X.min.x,de=X.max.y-X.min.y,Ee=X.isBox3?X.max.z-X.min.z:1,Ae=X.min.x,Be=X.min.y,We=X.isBox3?X.min.z:0;else{const Lt=Math.pow(2,-z);me=Math.floor(gt.width*Lt),de=Math.floor(gt.height*Lt),v.isDataArrayTexture?Ee=gt.depth:v.isData3DTexture?Ee=Math.floor(gt.depth*Lt):Ee=1,Ae=0,Be=0,We=0}G!==null?(we=G.x,ot=G.y,Mt=G.z):(we=0,ot=0,Mt=0);const lt=oe.convert(U.format),Ot=oe.convert(U.type);let Te;U.isData3DTexture?(L.setTexture3D(U,0),Te=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(L.setTexture2DArray(U,0),Te=P.TEXTURE_2D_ARRAY):(L.setTexture2D(U,0),Te=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Qt=P.getParameter(P.UNPACK_ROW_LENGTH),Qe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pn=P.getParameter(P.UNPACK_SKIP_PIXELS),Mn=P.getParameter(P.UNPACK_SKIP_ROWS),pi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,gt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,Be),P.pixelStorei(P.UNPACK_SKIP_IMAGES,We);const Pi=v.isDataArrayTexture||v.isData3DTexture,ut=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const Lt=_.get(v),Jn=_.get(U),It=_.get(Lt.__renderTarget),Qn=_.get(Jn.__renderTarget);be.bindFramebuffer(P.READ_FRAMEBUFFER,It.__webglFramebuffer),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Di=0;Di<Ee;Di++)Pi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(v).__webglTexture,z,We+Di),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(U).__webglTexture,he,Mt+Di)),P.blitFramebuffer(Ae,Be,me,de,we,ot,me,de,P.DEPTH_BUFFER_BIT,P.NEAREST);be.bindFramebuffer(P.READ_FRAMEBUFFER,null),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||_.has(v)){const Lt=_.get(v),Jn=_.get(U);be.bindFramebuffer(P.READ_FRAMEBUFFER,$u),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,ju);for(let It=0;It<Ee;It++)Pi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Lt.__webglTexture,z,We+It):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Lt.__webglTexture,z),ut?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Jn.__webglTexture,he,Mt+It):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Jn.__webglTexture,he),z!==0?P.blitFramebuffer(Ae,Be,me,de,we,ot,me,de,P.COLOR_BUFFER_BIT,P.NEAREST):ut?P.copyTexSubImage3D(Te,he,we,ot,Mt+It,Ae,Be,me,de):P.copyTexSubImage2D(Te,he,we,ot,Ae,Be,me,de);be.bindFramebuffer(P.READ_FRAMEBUFFER,null),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ut?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(Te,he,we,ot,Mt,me,de,Ee,lt,Ot,gt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Te,he,we,ot,Mt,me,de,Ee,lt,gt.data):P.texSubImage3D(Te,he,we,ot,Mt,me,de,Ee,lt,Ot,gt):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,he,we,ot,me,de,lt,Ot,gt.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,he,we,ot,gt.width,gt.height,lt,gt.data):P.texSubImage2D(P.TEXTURE_2D,he,we,ot,me,de,lt,Ot,gt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Qt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Mn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,pi),he===0&&U.generateMipmaps&&P.generateMipmap(Te),be.unbindTexture()},this.initRenderTarget=function(v){_.get(v).__webglFramebuffer===void 0&&L.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?L.setTextureCube(v,0):v.isData3DTexture?L.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?L.setTexture2DArray(v,0):L.setTexture2D(v,0),be.unbindTexture()},this.resetState=function(){C=0,k=0,F=null,be.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Ke=16,ci=256,sn=62,Pa=1/20,Tu=.25,hi=10,Is=.28,g0=300,_0=.2,x0=1.9,Sc=4,v0=18,S0=4.317,M0=5.612,Da=3.1,y0=8.9,Mc=32,E0=.18,yc=18,b0=10,T0=4.8,Ec=1.9,A0=3.2,w0=.5,C0=2.4,R0=6.2,I0=1.05,fs=24,P0=.16,Ps=.78,D0=22,L0=28,Au=.06,U0=.18,N0=-.06,F0=4.4,O0=.6,B0=1.8,Qo=1.62,bc=.0022,el=5,Tc=8239103;class k0{position;velocity=new N;yaw=0;pitch=0;onGround=!1;isInWater=!1;headInWater=!1;waterSurfaceY=null;waterSubmersion=0;waterFlow=new N;width=O0;height=B0;eyeHeight=Qo;constructor(e){this.position=e.clone()}get halfWidth(){return this.width/2}}class z0{camera;constructor(e){this.camera=new un(75,e,.1,600),this.camera.rotation.order="YXZ"}updateAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}sync(e){this.camera.position.set(e.position.x,e.position.y+Qo,e.position.z),this.camera.rotation.y=e.yaw,this.camera.rotation.x=e.pitch}}const G0="/assets/block_dirt-BsJ5GJa0.png",H0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAC3CAYAAABZhW/lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAgPSURBVHhe7d2/b9u8FsZx0pJsxQ6SFsjef69Tl3YpOnTIUKBAkX+0BZo0P2yFEu9wk3cg4uY895qv7YPvB9BCxCnNPHYFHB0yvnv3LgfAgVk5ABwrwgw34tXV1dHcZuScw/X1dTm81Xq9DuM4lsP/t6ZpQt/35fCLcs7h/v6+HN7q4eHBPOf5fB7m83k5vBPL5TLEGMvhg8Y3M9wgzHCDMMMNwgw3CDPcIMxwgzDDDcIMNwgz3CDMcCNeXl7uvJydUgoppXL4RbPZzFySzTmHu7u7cnirpmmqlGRjjKFpmnL4RTnnME1TyNm2zMrPzmYz8/tLKYXb29tyeCvr+wtPZXXrz7dtG9q2LYdfNI5jeHx8LIe3il+/frWtnGAYBvMkaj7nsFgszAvn3WazCb9//y6Hd6Lve/M6d11n/vJKKYXNZlMOb8VtBtwgzHCDMMMNwgw3CDPcIMxwgzDDDcIMNwgz3DBXAFNKYZqmcvhFSgUwxmiuHj2zlnCbpgmz2e4/r9M0mcv14ancu2/qnBVt25rXuWkac+lbnbM5zErb/jAMYRiGcngnVquVOcy1pJTCer0uh7c6hDkrjw0cK9vHCTgChBluEGa4QZjhBmGGG4QZbhBmuEGY4QZhhhvmCuAwDOZy9jiO5p9VtW1rrqYp3dnTNJnnPI6jVOE8PT01z0OhzFnpgleN42juKK/JHGZF3/dVSqfqzvmr1Sp0XVcOv2i9XkslasX5+XmVMNecs0J51KEmbjPgBmGGG4QZbhBmuEGY4QZhhhuEGW4QZrhBmOHGLOccrJdV+bq/Xc8lWetV6/fnSu9P/fnn10AXP336ZFq9Wht3j+MobSit/LGVEnLXdebSt7IJdowxLJfLcngrpQSvrEVNv379Mq+Hss6qvd9mlN9Kr12K8rWvXTXU/N0xxoO4VOXrd3XtPczArhBmuEGY4QZhhhuEGW4QZrhBmOEGYYYbhBluxC9fvpjKU6vVylzOVnbOzzkfRmfvbGbe/V2Zc4xROrC9Vtu+sj1CjDEsFgvznG9vb8073M/nc/OWB13XhbOzs3J4K/NWA8ozA4fSAn+MarXt19zt/+HhwTxnJcyLxSJcXFyUw1vZvoqAI0CY4QZhhhuEGW4QZrhBmOEGYYYbhBluEGa4ET9//myqAC6XS3M5O6VkLm/W3NFdsdlszB3GbdtKHdeKm5sb86MAikk8VH25XJorgCmlf7aBeI1yELy6znvfaqBt23B6eloO/+tubm7Cnz9/yuEXqWVWxc+fP80fqpqUMB8KbjPgBmGGG4QZbhBmuEGY4QZhhhuEGW4QZrhBmOGGuQLYdZ3UvayUN09OTsrhrayl0PBUwrV2OitNuGrXsDJnpZytvD/VYrEoh7ZqmuYgqoXmMCuGYTC3tasOoWtYVas0rGzpUFOtRx1Utq9a4AgQZrhBmOEGYYYbhBluEGa4QZjhBmGGG4QZbszKI1t3dT1v3v3aVb5uX5eqfP1rVw21fu+hKI+Dfu2KP3782Hk5OwiHlKeUwt3dXTn8ohhjODs7M/8RlR3drb8zPHWUr1arcngr5XcrlOdJaqvxHlNKUqd6vLq6sqWuksfHR3OYQwjh/PzcvHBKmBWHsj3CIYW5BjXM3DPDDcIMNwgz3CDMcIMwww3CDDcIM9wgzHCDMMONeHl5ufMKoNLprFYAlS5g5VD1ruvMc44xSvNQKB3l0zRJWzr0fV8OHzTlUYegHASv6PvevHBqmGtR5lyT9xK8Qs0GtxlwgzDDDcIMNwgz3CDMcIMwww3CDDcIM9wgzHAjfvz40VQB7PveXMJV2uuf28Qtcs7VNtdW5qyylsnDU4naahxHc+lbPVRdoRwEr5imSdq0Pr5//96UpDdv3piPBlB2dFeeGcg5h/v7+3J4Jw5lt39lF/pa66xar9fmD1VN3GbADcIMNwgz3CDMcIMwww3CDDcIM9wgzHCDMMON+OHDB1MF8PT0NHRdVw6/KKVkbsqczWbmcm/OWdqvVzmgPKVkrqblnKWKV9/35nl0XWc+OL7WOgexC34YBnM5W+kojzGa1yLU6s4+FKvVyvwBVKhdw8dI2dRdoWyQrnaUc5sBNwgz3CDMcIMwww3CDDcIM9wgzHCDMMMNwgw3zGEuD93e51VD+W/s86oh5/xPKfm1Kz+V661X+fp9XeZy9iF04MYYw8nJibnMqpSzlTLrOI7mn1Up3dmKzWYTrq+vy+GtrGscnp49sT5DoXTBN00TTk5OyuGtzN/Mh6DWt5bqUOahKv8H+NtVfuu9dpWv38d1VGEG/oYwww3CDDcIM9wgzHCDMMMNwgw3CDPcIMxwI37//t1Uznqu8lgoJctpmswt/iH8t2XeWmpVdvt/rmRZpJSkLQ8Uyvtr21Z6f8o6bzYb899b2dJBWef5fB7evn1bDm8Vr66ubDMWKM851AxGreccas5Z0XWdtBeGVa54QoFisViEi4uLcngrbjPgBmGGG4QZbhBmuEGY4QZhhhuEGW4QZrhBmOFG/Pbtm6kCqBz2rezoXlPbtmE22/3ndZqmg3h/TdOYu6JVNdZNpR5ev/etBmoeUI7/Xa2d82va/8cP2BHCDDcIM9wgzHCDMMMNwgw3CDPcIMxwgzDDDXMFUDnsW6EeUF6L0jWsiDFKHddKp7Mii4fXL5dL8zyUzn1lLVTmMHs3DIPUiq9QgqHs9q+oeXi98qhDrY7ywG0GPCHMcIMwww3CDDcIM9wgzHCDMMMNwgw3CDPcIMxw4z8CfcNMRR0yZQAAAABJRU5ErkJggg==",Ac="/assets/block_grass-C3Hh9XCo.png",V0="/assets/block_wood-Dz4P-Zf-.png",W0="/assets/coal-BYeG7OUw.png",X0="/assets/diamond-CDM8VJeY.png",Y0="/assets/grasstop-C0Nm7LP8.png",q0="/assets/iron-CBVCmW2a.png",K0="/assets/sand-DuNtU91y.png",wu=["grass_top","grass_side","dirt","stone","cobblestone","oak_log_side","oak_log_top","oak_leaves","oak_planks","bedrock","sand","gravel","coal_ore","iron_ore","gold_ore","diamond_ore","water","glass","crafting_top","crafting_side","crafting_front","furnace_top","furnace_side","furnace_front","chest_top","chest_side","chest_front"],Ir=6,Os=1,Ce=16,wc=Math.ceil(wu.length/Ir),Pr=Ir*Ce+(Ir-1)*Os,Dr=wc*Ce+(wc-1)*Os,Lo=Pr,Uo=Dr,Z0={coal_ore:{src:W0},diamond_ore:{src:X0},dirt:{src:G0},grass_top:{src:Y0},grass_side:{src:V0},iron_ore:{src:q0},oak_log_side:{src:Ac},oak_log_top:{src:Ac},sand:{src:K0},stone:{src:H0}};let La=null,tl="",ps=null;const Cu=new Set,$0=new Map(wu.map((i,e)=>[i,e])),Ru=(i,e=1)=>{const t=i>>16&255,n=i>>8&255,r=i&255;return`rgba(${t}, ${n}, ${r}, ${e})`},pt=(i,e,t)=>{const n=Math.sin((i+t*13.17)*12.9898+(e-t*7.31)*78.233)*43758.5453;return n-Math.floor(n)},Ci=i=>{const e=$0.get(i);if(e===void 0)throw new Error(`Missing atlas entry for texture key "${i}".`);const t=e%Ir,n=Math.floor(e/Ir);return{x:t*(Ce+Os),y:n*(Ce+Os)}},nl=i=>{const e=i.getContext("2d");if(!e)throw new Error("2D canvas context is required for the block texture atlas.");return e},Ie=(i,e,t,n,r,s=1)=>{const a=Ci(e);i.fillStyle=Ru(r,s),i.fillRect(a.x+t,a.y+n,1,1)},qt=(i,e,t)=>{const n=Ci(e);i.fillStyle=Ru(t),i.fillRect(n.x,n.y,Ce,Ce)},j0=(i,e)=>{const t=Ci(e);i.clearRect(t.x,t.y,Ce,Ce)},Iu=(i,e,t,n)=>{const r=Ci(e);i.clearRect(r.x+t,r.y+n,1,1)},qs=(i,e,t,n,r,s=.68)=>{for(let a=0;a<Ce;a+=1)for(let o=0;o<Ce;o+=1){const l=pt(o,a,t);l>s?Ie(i,e,o,a,r):l<1-s&&Ie(i,e,o,a,n)}},Lr=(i,e,t,n,r,s)=>{qt(i,e,t),qs(i,e,s,n,r,.7)},Pu=(i,e)=>{qt(i,e,7426351),qs(i,e,11,5913887,9134909,.69)},J0=i=>{qt(i,"grass_top",6267981),qs(i,"grass_top",21,4357430,7980640,.7);for(let e=0;e<Ce;e+=1)for(let t=0;t<Ce;t+=1)pt(t,e,22)>.84&&Ie(i,"grass_top",t,e,10475376)},Q0=i=>{Pu(i,"grass_side");for(let e=0;e<4;e+=1)for(let t=0;t<Ce;t+=1){const r=pt(t,e,31)>.5?6992727:5081666;Ie(i,"grass_side",t,e,r)}for(let e=0;e<Ce;e+=1)pt(e,0,32)>.72&&(Ie(i,"grass_side",e,4,6069321),Ie(i,"grass_side",e,5,5081666))},e_=i=>{qt(i,"cobblestone",8421504);for(let e=0;e<Ce;e+=1)for(let t=0;t<Ce;t+=1)(t+e%3)%5===0||(e+t%2)%5===0?Ie(i,"cobblestone",t,e,6250335):pt(t,e,41)>.73&&Ie(i,"cobblestone",t,e,10132122)},t_=i=>{qt(i,"oak_log_side",8017200);for(let e=0;e<Ce;e+=1){const t=e%4,n=t===0?6636321:t===2?9725242:8476719;for(let r=0;r<Ce;r+=1)Ie(i,"oak_log_side",e,r,n),pt(e,r,51)>.86&&Ie(i,"oak_log_side",e,r,11960392)}},n_=i=>{qt(i,"oak_log_top",13081443);for(let e=0;e<4;e+=1){const t=e*2,n=Ce-1-e*2,r=e%2===0?10187589:12160088;for(let s=t;s<=n;s+=1)Ie(i,"oak_log_top",s,t,r),Ie(i,"oak_log_top",s,n,r),Ie(i,"oak_log_top",t,s,r),Ie(i,"oak_log_top",n,s,r)}Ie(i,"oak_log_top",7,7,7688495),Ie(i,"oak_log_top",8,7,7688495),Ie(i,"oak_log_top",7,8,7688495),Ie(i,"oak_log_top",8,8,7688495)},i_=i=>{qt(i,"oak_leaves",0);const e=4030260;for(let t=0;t<Ce;t+=1)for(let n=0;n<Ce;n+=1){const r=pt(n,t,61);if(r>.18){const s=r>.76?6072651:r<.34?3039528:e;Ie(i,"oak_leaves",n,t,s)}else Iu(i,"oak_leaves",n,t)}},Du=(i,e)=>{qt(i,e,11632713);for(let t=0;t<Ce;t+=1)for(let n=0;n<Ce;n+=1)t%4===0?Ie(i,e,n,t,9331511):n%7===0&&t%4!==1?Ie(i,e,n,t,9726010):pt(n,t,71)>.85&&Ie(i,e,n,t,13210971)},r_=i=>{qt(i,"sand",14272906),qs(i,"sand",81,12890732,15523231,.72)},s_=i=>{qt(i,"gravel",8684676);for(let e=0;e<Ce;e+=1)for(let t=0;t<Ce;t+=1){const n=pt(t,e,91),r=n>.75?10526880:n<.24?6710886:8947848;Ie(i,"gravel",t,e,r)}},ms=(i,e,t,n)=>{Lr(i,e,8224125,6579300,10000536,t);for(let r=1;r<Ce-1;r+=1)for(let s=1;s<Ce-1;s+=1)pt(s,r,t+1)>.85&&(Ie(i,e,s,r,n),pt(s,r,t+2)>.6&&Ie(i,e,s+1,r,n),pt(s,r,t+3)>.6&&Ie(i,e,s,r+1,n))},a_=i=>{qt(i,"glass",0);for(let e=0;e<Ce;e+=1)for(let t=0;t<Ce;t+=1)Iu(i,"glass",t,e);for(let e=0;e<Ce;e+=1)Ie(i,"glass",e,0,14678271,.9),Ie(i,"glass",e,Ce-1,14678271,.9),Ie(i,"glass",0,e,14678271,.9),Ie(i,"glass",Ce-1,e,14678271,.9);for(let e=2;e<Ce-2;e+=1)e%4===0&&(Ie(i,"glass",e,e-1,11986418,.75),Ie(i,"glass",e+1,e,11986418,.75))},o_=i=>{j0(i,"water");for(let e=0;e<Ce;e+=1)for(let t=0;t<Ce;t+=1){const n=pt(t*.75,e*1.1,161),r=pt(t*.35,e*2.2,162),s=n>.82?9428223:n<.18?2051975:r>.72?4035276:2715304,a=e<3?.82:r>.76?.9:.86;Ie(i,"water",t,e,s,a)}for(let e=0;e<Ce;e+=1)pt(e,0,163)>.48&&Ie(i,"water",e,3,14152191,.93),pt(e,0,164)>.58&&Ie(i,"water",e,9,8376319,.82)},l_=i=>{qt(i,"crafting_top",9134903);for(let e=0;e<Ce;e+=1)for(let t=0;t<Ce;t+=1)t%4===0||e%4===0?Ie(i,"crafting_top",t,e,5058328):pt(t,e,101)>.82&&Ie(i,"crafting_top",t,e,11830090)},c_=i=>{Du(i,"crafting_side");for(let e=4;e<12;e+=1)for(let t=4;t<12;t+=1){const n=(t+e)%2===0?5979170:8016429;Ie(i,"crafting_side",t,e,n)}},u_=i=>{qt(i,"crafting_front",8214578);for(let e=2;e<14;e+=1)for(let t=2;t<14;t+=1)t===2||t===13||e===2||e===13?Ie(i,"crafting_front",t,e,5584157):e<8&&t%3===0?Ie(i,"crafting_front",t,e,11633999):e>=8&&pt(t,e,111)>.7&&Ie(i,"crafting_front",t,e,6307881)},h_=i=>{Lr(i,"furnace_top",7631988,5789784,9276813,121);for(let e=2;e<Ce-2;e+=1)Ie(i,"furnace_top",e,2,5526612),Ie(i,"furnace_top",e,Ce-3,5526612),Ie(i,"furnace_top",2,e,5526612),Ie(i,"furnace_top",Ce-3,e,5526612)},Lu=(i,e)=>{Lr(i,e,7566195,5987163,9342606,131);for(let t=0;t<Ce;t+=4)for(let n=0;n<Ce;n+=1)Ie(i,e,n,t,5526612)},d_=i=>{Lu(i,"furnace_front");for(let e=3;e<6;e+=1)for(let t=4;t<12;t+=1)Ie(i,"furnace_front",t,e,3092271);for(let e=8;e<14;e+=1)for(let t=3;t<13;t+=1)Ie(i,"furnace_front",t,e,t===3||t===12||e===8||e===13?1907997:4934475)},f_=i=>{qt(i,"chest_top",11564085);for(let e=0;e<Ce;e+=1)for(let t=0;t<Ce;t+=1)e===3||e===12?Ie(i,"chest_top",t,e,8014622):pt(t,e,141)>.82&&Ie(i,"chest_top",t,e,13142856)},Uu=(i,e)=>{qt(i,e,11366193);for(let t=0;t<Ce;t+=1)for(let n=0;n<Ce;n+=1)n===1||n===Ce-2||t===2||t===Ce-3?Ie(i,e,n,t,8014622):pt(n,t,151)>.8&&Ie(i,e,n,t,13142342)},p_=i=>{Uu(i,"chest_front");for(let e=5;e<11;e+=1)for(let t=7;t<9;t+=1)Ie(i,"chest_front",t,e,14996077);Ie(i,"chest_front",6,7,8151846),Ie(i,"chest_front",9,7,8151846)},m_=i=>{i.clearRect(0,0,Pr,Dr),J0(i),Q0(i),Pu(i,"dirt"),Lr(i,"stone",8224125,6645093,10066329,1),e_(i),t_(i),n_(i),i_(i),Du(i,"oak_planks"),Lr(i,"bedrock",4210752,2039583,5987163,2),r_(i),s_(i),ms(i,"coal_ore",3,2763306),ms(i,"iron_ore",4,11634543),ms(i,"gold_ore",5,14138436),ms(i,"diamond_ore",6,4704991),o_(i),a_(i),l_(i),c_(i),u_(i),h_(i),Lu(i,"furnace_side"),d_(i),f_(i),Uu(i,"chest_side"),p_(i)},g_=()=>{const i=document.createElement("canvas");return i.width=Pr,i.height=Dr,m_(nl(i)),tl=i.toDataURL(),i},Nu=()=>(La||(La=g_()),La),__=async i=>new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error(`Failed to load texture asset: ${i}`)),n.src=i}),x_=(i,e,t)=>{const n=i.imageSmoothingEnabled;i.imageSmoothingEnabled=!1,i.drawImage(t,0,0,t.naturalWidth,t.naturalHeight,e.x,e.y,Ce,Ce),i.imageSmoothingEnabled=n},v_=(i,e,t,n)=>{const r=Ci(e),s=n.get(t.src);if(!s)throw new Error(`Missing loaded texture image for ${t.src}.`);i.clearRect(r.x,r.y,Ce,Ce),x_(i,r,s)},S_=()=>{if(ps)return ps;const i=Nu(),e=nl(i),t=Object.entries(Z0);return ps=(async()=>{const n=[...new Set(t.map(([,s])=>s.src))],r=new Map(await Promise.all(n.map(async s=>[s,await __(s)])));for(const[s,a]of t)v_(e,s,a,r);tl=i.toDataURL();for(const s of Cu)s.needsUpdate=!0})().catch(n=>{console.error("Failed to apply imported block textures.",n)}),ps},Fu=()=>{const i=Nu();return S_(),i},Ou=()=>{const i=Fu(),e=new jo(i);return e.magFilter=ft,e.minFilter=ft,e.generateMipmaps=!1,e.colorSpace=Yt,e.needsUpdate=!0,Cu.add(e),e},M_=()=>{const i=document.createElement("canvas");i.width=32,i.height=32;const e=nl(i);for(let n=0;n<i.height;n+=1)for(let r=0;r<i.width;r+=1){const s=pt(r*.72,n*1.08,211),a=pt(r*.25,n*1.85,212),l=pt(r*1.1,n*.48,213)>.88?"#f1fdff":s>.79?"#61bcff":s<.16?"#072f57":a>.66?"#116db8":"#0b5494";e.fillStyle=l,e.fillRect(r,n,1,1)}e.fillStyle="#f6feff";for(let n=0;n<i.width;n+=1){const r=n*3%i.height;e.fillRect(n,r,1,1),n%5===0&&(e.fillStyle="#8fd8ff",e.fillRect(n,(r+9)%i.height,1,1),e.fillStyle="#f6feff")}const t=new jo(i);return t.wrapS=Tr,t.wrapT=Tr,t.magFilter=ft,t.minFilter=ft,t.generateMipmaps=!1,t.colorSpace=Yt,t.needsUpdate=!0,t},y_=()=>(Fu(),tl),E_=i=>{const e=Ci(i),t=.5,n=(e.x+t)/Pr,r=(e.x+Ce-t)/Pr,s=1-(e.y+Ce-t)/Dr,a=1-(e.y+t)/Dr;return[n,s,r,a]},Bu=i=>{const e=Ci(i);return{x:e.x,y:e.y,size:Ce}},H={Air:0,Grass:1,Dirt:2,Stone:3,Cobblestone:4,OakLog:5,OakLeaves:6,OakPlanks:7,Bedrock:8,Sand:9,Gravel:10,CoalOre:11,IronOre:12,GoldOre:13,DiamondOre:14,Water:15,Glass:16,CraftingTable:17,Furnace:18,Chest:19},Wt=i=>({top:i,bottom:i,north:i,south:i,east:i,west:i}),Cc=(i,e,t)=>({top:i,bottom:e,north:t,south:t,east:t,west:t}),b_=()=>({top:"furnace_top",bottom:"furnace_top",north:"furnace_front",south:"furnace_side",east:"furnace_side",west:"furnace_side"}),T_=()=>({top:"chest_top",bottom:"chest_top",north:"chest_front",south:"chest_side",east:"chest_side",west:"chest_side"}),A_=()=>({top:"crafting_top",bottom:"oak_planks",north:"crafting_front",south:"crafting_side",east:"crafting_side",west:"crafting_side"}),zt=new Map([[H.Air,{name:"Air",dropId:H.Air,hardness:0,solid:!1,opaque:!1,renderable:!1,faceTextures:Wt("stone")}],[H.Grass,{name:"Grass",dropId:H.Dirt,hardness:.6,solid:!0,opaque:!0,renderable:!0,faceTextures:Cc("grass_top","dirt","grass_side")}],[H.Dirt,{name:"Dirt",dropId:H.Dirt,hardness:.5,solid:!0,opaque:!0,renderable:!0,faceTextures:Wt("dirt")}],[H.Stone,{name:"Stone",dropId:H.Cobblestone,hardness:1.5,solid:!0,opaque:!0,renderable:!0,faceTextures:Wt("stone")}],[H.Cobblestone,{name:"Cobblestone",dropId:H.Cobblestone,hardness:2,solid:!0,opaque:!0,renderable:!0,faceTextures:Wt("cobblestone")}],[H.OakLog,{name:"Oak Log",dropId:H.OakLog,hardness:2,solid:!0,opaque:!0,renderable:!0,faceTextures:Cc("oak_log_top","oak_log_top","oak_log_side")}],[H.OakLeaves,{name:"Oak Leaves",dropId:H.Air,hardness:.2,solid:!0,opaque:!0,renderable:!0,faceTextures:Wt("oak_leaves")}],[H.OakPlanks,{name:"Oak Planks",dropId:H.OakPlanks,hardness:2,solid:!0,opaque:!0,renderable:!0,faceTextures:Wt("oak_planks")}],[H.Bedrock,{name:"Bedrock",dropId:H.Air,hardness:Number.POSITIVE_INFINITY,solid:!0,opaque:!0,renderable:!0,faceTextures:Wt("bedrock")}],[H.Sand,{name:"Sand",dropId:H.Sand,hardness:.5,solid:!0,opaque:!0,renderable:!0,faceTextures:Wt("sand")}],[H.Gravel,{name:"Gravel",dropId:H.Gravel,hardness:.6,solid:!0,opaque:!0,renderable:!0,faceTextures:Wt("gravel")}],[H.CoalOre,{name:"Coal Ore",dropId:H.CoalOre,hardness:3,solid:!0,opaque:!0,renderable:!0,faceTextures:Wt("coal_ore")}],[H.IronOre,{name:"Iron Ore",dropId:H.IronOre,hardness:3,solid:!0,opaque:!0,renderable:!0,faceTextures:Wt("iron_ore")}],[H.GoldOre,{name:"Gold Ore",dropId:H.GoldOre,hardness:3,solid:!0,opaque:!0,renderable:!0,faceTextures:Wt("gold_ore")}],[H.DiamondOre,{name:"Diamond Ore",dropId:H.DiamondOre,hardness:3,solid:!0,opaque:!0,renderable:!0,faceTextures:Wt("diamond_ore")}],[H.Water,{name:"Water",dropId:H.Air,hardness:0,solid:!1,opaque:!1,renderable:!0,faceTextures:Wt("water")}],[H.Glass,{name:"Glass",dropId:H.Air,hardness:.3,solid:!0,opaque:!1,renderable:!0,faceTextures:Wt("glass")}],[H.CraftingTable,{name:"Crafting Table",dropId:H.CraftingTable,hardness:2.5,solid:!0,opaque:!0,renderable:!0,faceTextures:A_()}],[H.Furnace,{name:"Furnace",dropId:H.Furnace,hardness:3.5,solid:!0,opaque:!0,renderable:!0,faceTextures:b_()}],[H.Chest,{name:"Chest",dropId:H.Chest,hardness:2.5,solid:!0,opaque:!0,renderable:!0,faceTextures:T_()}]]),Ft={getName(i){return(zt.get(i)??zt.get(H.Air)).name},getFaceTexture(i,e){return(zt.get(i)??zt.get(H.Air)).faceTextures[e]},getInventoryTexture(i){const e=zt.get(i)??zt.get(H.Air);return e.itemTexture??e.faceTextures.north},getHardness(i){return(zt.get(i)??zt.get(H.Air)).hardness},getDropId(i){return(zt.get(i)??zt.get(H.Air)).dropId??i},isSolid(i){return(zt.get(i)??zt.get(H.Air)).solid},isOpaque(i){return(zt.get(i)??zt.get(H.Air)).opaque},isRenderable(i){return(zt.get(i)??zt.get(H.Air)).renderable},isLiquid(i){return i===H.Water}},w_=i=>`data:image/svg+xml;utf8,${encodeURIComponent(i)}`,At=i=>w_(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">${i.join("")}</svg>`),xe=(i,e,t,n,r)=>`<rect x="${i}" y="${e}" width="${t}" height="${n}" fill="${r}"/>`,yt=(i,e)=>`<polygon points="${i}" fill="${e}"/>`,Bs=(i,e,t,n)=>`<circle cx="${i}" cy="${e}" r="${t}" fill="${n}"/>`,On="#69452a",Dn="#9b6b42",Ri={wood:{dark:"#7b5127",light:"#d6a25d",mid:"#b98245",tint:12157509},stone:{dark:"#5a5a5a",light:"#b3b3b3",mid:"#858585",tint:8750469},iron:{dark:"#8893a2",light:"#e5edf5",mid:"#c0c9d4",tint:12634580},gold:{dark:"#a5760d",light:"#ffe175",mid:"#dfb63b",tint:14661179},diamond:{dark:"#1f97a6",light:"#bfffff",mid:"#4cd6e4",tint:5035748}},ku=(i,e,t)=>At([yt("8,1 14,6 12,13 4,15 2,6",t),yt("8,2 13,6 11.5,12 4.5,14 3,6",i),yt("8,3 11.5,6 10.5,10.5 6,12.5 4.5,6",e)]),zu=(i,e,t)=>At([yt("3,10 5,5 11,5 13,10 11,12 5,12",t),yt("3.5,9.5 5.3,5.8 10.7,5.8 12.5,9.5 10.8,11.2 5.2,11.2",i),xe(5,6,6,1,e),xe(4.5,8,7,1,e)]),C_=()=>At([yt("6,14 8,14 10,2 8,2",On),yt("7,14 8.5,14 10.5,2 9,2",Dn)]),R_=()=>At([yt("6,15 8,15 10,6 8,6",On),yt("7,15 8.5,15 10.2,6 8.9,6",Dn),yt("5,7 7,3 9,1 11,3 10,7","#ff8f24"),yt("6,7 7.5,4.5 8.6,3.2 10,4.2 9.4,7","#ffe178")]),I_=()=>At([xe(3,1,2,14,On),xe(11,1,2,14,On),xe(5,3,6,2,Dn),xe(5,7,6,2,Dn),xe(5,11,6,2,Dn)]),P_=()=>At([xe(2,2,12,7,"#8f5d2e"),xe(3,3,10,5,"#b98245"),xe(7,9,2,5,On),xe(4,5,8,1,"#d6a25d")]),D_=()=>At([yt("2,7 4,11 12,11 14,7 12,13 4,13","#8f5d2e"),yt("4,7.5 5,10 11,10 12,7.5 10.8,11.5 5.2,11.5","#c99151")]),L_=()=>At([xe(4,4,8,2,"#77808d"),xe(3,6,2,7,"#77808d"),xe(11,6,2,7,"#77808d"),xe(5,11,6,2,"#c6d0db"),xe(5,6,6,5,"#98a3b1")]),U_=()=>At([yt("8,1 13,4 12,11 8,15 4,11 3,4","#6e4a26"),yt("8,2 12,4.5 11,10.5 8,13.6 5,10.5 4,4.5","#b88346"),xe(7,3,2,8,"#d1c4a4"),xe(5,6,6,2,"#d1c4a4")]),N_=()=>At([Bs(5,11,2.2,"#aab4c2"),Bs(11,11,2.2,"#aab4c2"),yt("5,10 8,8 12,2 13,3 9,9 6,11","#d7dfe9"),yt("11,10 8,8 4,2 3,3 7,9 10,11","#8e98a5")]),F_=()=>At([yt("2,5 4,12 12,12 14,5 12,5 11,9 5,9 4,5","#6a7381"),xe(4,5,8,4,"#a2acba"),Bs(5,13,1.5,"#49515d"),Bs(11,13,1.5,"#49515d")]),O_=i=>At([xe(7,4,2,10,On),xe(8,4,1,10,Dn),xe(2,1,12,2,i.dark),xe(3,3,2,2,i.mid),xe(7,3,2,2,i.light),xe(11,3,2,2,i.mid)]),B_=i=>At([xe(8,3,2,11,On),xe(9,3,1,11,Dn),xe(4,1,5,5,i.dark),xe(5,2,5,4,i.mid),xe(4,5,3,2,i.light)]),k_=i=>At([xe(7,5,2,9,On),xe(8,5,1,9,Dn),yt("5,1 11,1 12,5 4,5",i.dark),yt("6,2 10,2 10.8,4.2 5.2,4.2",i.light)]),z_=i=>At([xe(8,3,2,11,On),xe(9,3,1,11,Dn),xe(4,1,6,2,i.dark),xe(4,3,3,2,i.mid),xe(7,3,2,1,i.light)]),G_=i=>At([xe(7,2,2,8,i.dark),yt("8,1 10,3 6,3",i.light),xe(5,9,6,2,i.mid),xe(7,11,2,4,On),xe(6,13,4,1,Dn)]),H_=i=>At([xe(3,3,10,3,i.dark),xe(2,6,3,5,i.mid),xe(11,6,3,5,i.mid),xe(5,6,6,4,i.light),xe(6,10,4,1,i.dark)]),V_=i=>At([xe(2,2,4,4,i.dark),xe(10,2,4,4,i.dark),xe(5,3,6,3,i.light),xe(3,6,10,8,i.mid),xe(6,7,4,6,i.light)]),W_=i=>At([xe(3,2,10,4,i.dark),xe(4,6,4,8,i.mid),xe(8,6,4,8,i.mid),xe(5,7,2,6,i.light),xe(9,7,2,6,i.light)]),X_=i=>At([xe(3,3,4,7,i.dark),xe(9,3,4,7,i.dark),xe(2,10,6,3,i.mid),xe(8,10,6,3,i.mid),xe(3,11,3,1,i.light),xe(10,11,3,1,i.light)]),A={Air:H.Air,Grass:H.Grass,Dirt:H.Dirt,Stone:H.Stone,Cobblestone:H.Cobblestone,OakLog:H.OakLog,OakLeaves:H.OakLeaves,OakPlanks:H.OakPlanks,Bedrock:H.Bedrock,Sand:H.Sand,Gravel:H.Gravel,CoalOre:H.CoalOre,IronOre:H.IronOre,GoldOre:H.GoldOre,DiamondOre:H.DiamondOre,Water:H.Water,Glass:H.Glass,CraftingTable:H.CraftingTable,Furnace:H.Furnace,Chest:H.Chest,Stick:1e3,Coal:1001,IronIngot:1002,GoldIngot:1003,Diamond:1004,Torch:1005,Ladder:1006,Bowl:1007,Sign:1008,Bucket:1009,Shield:1010,Shears:1011,Minecart:1012,WoodenPickaxe:1100,WoodenAxe:1101,WoodenShovel:1102,WoodenHoe:1103,WoodenSword:1104,StonePickaxe:1200,StoneAxe:1201,StoneShovel:1202,StoneHoe:1203,StoneSword:1204,IronPickaxe:1300,IronAxe:1301,IronShovel:1302,IronHoe:1303,IronSword:1304,GoldPickaxe:1400,GoldAxe:1401,GoldShovel:1402,GoldHoe:1403,GoldSword:1404,DiamondPickaxe:1500,DiamondAxe:1501,DiamondShovel:1502,DiamondHoe:1503,DiamondSword:1504,IronHelmet:1600,IronChestplate:1601,IronLeggings:1602,IronBoots:1603,GoldHelmet:1700,GoldChestplate:1701,GoldLeggings:1702,GoldBoots:1703,DiamondHelmet:1800,DiamondChestplate:1801,DiamondLeggings:1802,DiamondBoots:1803},Y_=[A.Air,A.Grass,A.Dirt,A.Stone,A.Cobblestone,A.OakLog,A.OakLeaves,A.OakPlanks,A.Bedrock,A.Sand,A.Gravel,A.CoalOre,A.IronOre,A.GoldOre,A.DiamondOre,A.Water,A.Glass,A.CraftingTable,A.Furnace,A.Chest],Xe=new Map;for(const i of Y_)Xe.set(i,{kind:"block",maxStackSize:i===A.Air?0:64,name:Ft.getName(i),placeBlockId:i!==A.Air&&Ft.isRenderable(i)?i:void 0,tint:16777215,visual:{kind:"block",texture:Ft.getInventoryTexture(i)}});Xe.set(A.Stick,{kind:"material",maxStackSize:64,name:"Stick",tint:12157509,visual:{kind:"svg",dataUrl:C_()}});Xe.set(A.Coal,{kind:"material",maxStackSize:64,name:"Coal",tint:3092271,visual:{kind:"svg",dataUrl:ku("#3d3d3d","#616161","#171717")}});Xe.set(A.IronIngot,{kind:"material",maxStackSize:64,name:"Iron Ingot",tint:Ri.iron.tint,visual:{kind:"svg",dataUrl:zu("#c0c9d4","#edf4fb","#8d97a6")}});Xe.set(A.GoldIngot,{kind:"material",maxStackSize:64,name:"Gold Ingot",tint:Ri.gold.tint,visual:{kind:"svg",dataUrl:zu("#dfb63b","#ffe67b","#9d7114")}});Xe.set(A.Diamond,{kind:"material",maxStackSize:64,name:"Diamond",tint:Ri.diamond.tint,visual:{kind:"svg",dataUrl:ku("#4cd6e4","#bfffff","#177985")}});Xe.set(A.Torch,{kind:"utility",maxStackSize:64,name:"Torch",tint:16759881,visual:{kind:"svg",dataUrl:R_()}});Xe.set(A.Ladder,{kind:"utility",maxStackSize:64,name:"Ladder",tint:12157509,visual:{kind:"svg",dataUrl:I_()}});Xe.set(A.Bowl,{kind:"utility",maxStackSize:64,name:"Bowl",tint:12157509,visual:{kind:"svg",dataUrl:D_()}});Xe.set(A.Sign,{kind:"utility",maxStackSize:16,name:"Oak Sign",tint:12157509,visual:{kind:"svg",dataUrl:P_()}});Xe.set(A.Bucket,{kind:"utility",maxStackSize:16,name:"Bucket",tint:Ri.iron.tint,visual:{kind:"svg",dataUrl:L_()}});Xe.set(A.Shield,{kind:"utility",maxStackSize:1,name:"Shield",tint:12157509,visual:{kind:"svg",dataUrl:U_()}});Xe.set(A.Shears,{kind:"tool",maxStackSize:1,name:"Shears",tint:Ri.iron.tint,tool:{harvestLevel:0,miningSpeed:2,type:"shears"},visual:{kind:"svg",dataUrl:N_()}});Xe.set(A.Minecart,{kind:"utility",maxStackSize:1,name:"Minecart",tint:10661050,visual:{kind:"svg",dataUrl:F_()}});const Fr=(i,e,t,n)=>{const r=Ri[i];Xe.set(e.pickaxe,{kind:"tool",maxStackSize:1,name:`${n} Pickaxe`,tint:r.tint,tool:{harvestLevel:t.harvestLevel,miningSpeed:t.miningSpeed,type:"pickaxe"},visual:{kind:"svg",dataUrl:O_(r)}}),Xe.set(e.axe,{kind:"tool",maxStackSize:1,name:`${n} Axe`,tint:r.tint,tool:{harvestLevel:t.harvestLevel,miningSpeed:t.miningSpeed,type:"axe"},visual:{kind:"svg",dataUrl:B_(r)}}),Xe.set(e.shovel,{kind:"tool",maxStackSize:1,name:`${n} Shovel`,tint:r.tint,tool:{harvestLevel:t.harvestLevel,miningSpeed:t.miningSpeed,type:"shovel"},visual:{kind:"svg",dataUrl:k_(r)}}),Xe.set(e.hoe,{kind:"tool",maxStackSize:1,name:`${n} Hoe`,tint:r.tint,tool:{harvestLevel:t.harvestLevel,miningSpeed:t.miningSpeed,type:"hoe"},visual:{kind:"svg",dataUrl:z_(r)}}),Xe.set(e.sword,{kind:"tool",maxStackSize:1,name:`${n} Sword`,tint:r.tint,tool:{harvestLevel:t.harvestLevel,miningSpeed:t.miningSpeed,type:"sword"},visual:{kind:"svg",dataUrl:G_(r)}})};Fr("wood",{axe:A.WoodenAxe,hoe:A.WoodenHoe,pickaxe:A.WoodenPickaxe,shovel:A.WoodenShovel,sword:A.WoodenSword},{harvestLevel:1,miningSpeed:2},"Wooden");Fr("stone",{axe:A.StoneAxe,hoe:A.StoneHoe,pickaxe:A.StonePickaxe,shovel:A.StoneShovel,sword:A.StoneSword},{harvestLevel:2,miningSpeed:4},"Stone");Fr("iron",{axe:A.IronAxe,hoe:A.IronHoe,pickaxe:A.IronPickaxe,shovel:A.IronShovel,sword:A.IronSword},{harvestLevel:3,miningSpeed:6},"Iron");Fr("gold",{axe:A.GoldAxe,hoe:A.GoldHoe,pickaxe:A.GoldPickaxe,shovel:A.GoldShovel,sword:A.GoldSword},{harvestLevel:1,miningSpeed:12},"Golden");Fr("diamond",{axe:A.DiamondAxe,hoe:A.DiamondHoe,pickaxe:A.DiamondPickaxe,shovel:A.DiamondShovel,sword:A.DiamondSword},{harvestLevel:4,miningSpeed:8},"Diamond");const il=(i,e,t)=>{const n=Ri[i];Xe.set(e.helmet,{kind:"armor",maxStackSize:1,name:`${t} Helmet`,tint:n.tint,visual:{kind:"svg",dataUrl:H_(n)}}),Xe.set(e.chestplate,{kind:"armor",maxStackSize:1,name:`${t} Chestplate`,tint:n.tint,visual:{kind:"svg",dataUrl:V_(n)}}),Xe.set(e.leggings,{kind:"armor",maxStackSize:1,name:`${t} Leggings`,tint:n.tint,visual:{kind:"svg",dataUrl:W_(n)}}),Xe.set(e.boots,{kind:"armor",maxStackSize:1,name:`${t} Boots`,tint:n.tint,visual:{kind:"svg",dataUrl:X_(n)}})};il("iron",{boots:A.IronBoots,chestplate:A.IronChestplate,helmet:A.IronHelmet,leggings:A.IronLeggings},"Iron");il("gold",{boots:A.GoldBoots,chestplate:A.GoldChestplate,helmet:A.GoldHelmet,leggings:A.GoldLeggings},"Golden");il("diamond",{boots:A.DiamondBoots,chestplate:A.DiamondChestplate,helmet:A.DiamondHelmet,leggings:A.DiamondLeggings},"Diamond");const Tt={getName(i){return(Xe.get(i)??Xe.get(A.Air)).name},getKind(i){return(Xe.get(i)??Xe.get(A.Air)).kind},getMaxStackSize(i){return(Xe.get(i)??Xe.get(A.Air)).maxStackSize},getPlaceBlockId(i){return(Xe.get(i)??Xe.get(A.Air)).placeBlockId??H.Air},getTint(i){return(Xe.get(i)??Xe.get(A.Air)).tint},getTool(i){return(Xe.get(i)??Xe.get(A.Air)).tool??null},getVisual(i){return(Xe.get(i)??Xe.get(A.Air)).visual},has(i){return Xe.has(i)},isPlaceable(i){return this.getPlaceBlockId(i)!==H.Air},isTool(i){return this.getTool(i)!==null}},_t=(i,e,t,n,r)=>({width:i,height:e,ingredients:t,output:n,minGridSize:r??(Math.max(i,e)<=2?2:3)}),_r=(i,e)=>[_t(3,3,[i,i,i,null,A.Stick,null,null,A.Stick,null],{itemId:e.pickaxe,count:1},3),_t(2,3,[i,i,i,A.Stick,null,A.Stick],{itemId:e.axe,count:1},3),_t(2,3,[i,i,null,A.Stick,null,A.Stick],{itemId:e.hoe,count:1},3),_t(1,3,[i,A.Stick,A.Stick],{itemId:e.shovel,count:1},3),_t(1,3,[i,i,A.Stick],{itemId:e.sword,count:1},3)],Ua=(i,e)=>[_t(3,2,[i,i,i,i,null,i],{itemId:e.helmet,count:1},3),_t(3,3,[i,null,i,i,i,i,i,i,i],{itemId:e.chestplate,count:1},3),_t(3,3,[i,i,i,i,null,i,i,null,i],{itemId:e.leggings,count:1},3),_t(3,2,[i,null,i,i,null,i],{itemId:e.boots,count:1},3)],q_=[_t(1,1,[A.OakLog],{itemId:A.OakPlanks,count:4},2),_t(1,2,[A.OakPlanks,A.OakPlanks],{itemId:A.Stick,count:4},2),_t(1,2,[A.Coal,A.Stick],{itemId:A.Torch,count:4},2),_t(2,2,[A.OakPlanks,A.OakPlanks,A.OakPlanks,A.OakPlanks],{itemId:A.CraftingTable,count:1},2),_t(3,3,[A.Cobblestone,A.Cobblestone,A.Cobblestone,A.Cobblestone,null,A.Cobblestone,A.Cobblestone,A.Cobblestone,A.Cobblestone],{itemId:A.Furnace,count:1},3),_t(3,3,[A.OakPlanks,A.OakPlanks,A.OakPlanks,A.OakPlanks,null,A.OakPlanks,A.OakPlanks,A.OakPlanks,A.OakPlanks],{itemId:A.Chest,count:1},3),_t(3,3,[A.Stick,null,A.Stick,A.Stick,A.Stick,A.Stick,A.Stick,null,A.Stick],{itemId:A.Ladder,count:3},3),_t(3,3,[A.OakPlanks,A.OakPlanks,A.OakPlanks,A.OakPlanks,A.OakPlanks,A.OakPlanks,null,A.Stick,null],{itemId:A.Sign,count:3},3),_t(3,2,[A.OakPlanks,null,A.OakPlanks,null,A.OakPlanks,null],{itemId:A.Bowl,count:4},3),_t(3,2,[A.IronIngot,null,A.IronIngot,null,A.IronIngot,null],{itemId:A.Bucket,count:1},3),_t(2,2,[null,A.IronIngot,A.IronIngot,null],{itemId:A.Shears,count:1},2),_t(3,3,[A.OakPlanks,A.IronIngot,A.OakPlanks,A.OakPlanks,A.OakPlanks,A.OakPlanks,null,A.OakPlanks,null],{itemId:A.Shield,count:1},3),_t(3,2,[A.IronIngot,null,A.IronIngot,A.IronIngot,A.IronIngot,A.IronIngot],{itemId:A.Minecart,count:1},3),..._r(A.OakPlanks,{axe:A.WoodenAxe,hoe:A.WoodenHoe,pickaxe:A.WoodenPickaxe,shovel:A.WoodenShovel,sword:A.WoodenSword}),..._r(A.Cobblestone,{axe:A.StoneAxe,hoe:A.StoneHoe,pickaxe:A.StonePickaxe,shovel:A.StoneShovel,sword:A.StoneSword}),..._r(A.IronIngot,{axe:A.IronAxe,hoe:A.IronHoe,pickaxe:A.IronPickaxe,shovel:A.IronShovel,sword:A.IronSword}),..._r(A.GoldIngot,{axe:A.GoldAxe,hoe:A.GoldHoe,pickaxe:A.GoldPickaxe,shovel:A.GoldShovel,sword:A.GoldSword}),..._r(A.Diamond,{axe:A.DiamondAxe,hoe:A.DiamondHoe,pickaxe:A.DiamondPickaxe,shovel:A.DiamondShovel,sword:A.DiamondSword}),...Ua(A.IronIngot,{boots:A.IronBoots,chestplate:A.IronChestplate,helmet:A.IronHelmet,leggings:A.IronLeggings}),...Ua(A.GoldIngot,{boots:A.GoldBoots,chestplate:A.GoldChestplate,helmet:A.GoldHelmet,leggings:A.GoldLeggings}),...Ua(A.Diamond,{boots:A.DiamondBoots,chestplate:A.DiamondChestplate,helmet:A.DiamondHelmet,leggings:A.DiamondLeggings})],Rc=(i,e)=>{if(i.length!==e.length)return!1;for(let t=0;t<i.length;t+=1)if(i[t]!==e[t])return!1;return!0},K_=(i,e,t)=>{const n=[];for(let r=0;r<t;r+=1)for(let s=0;s<e;s+=1)n.push(i[r*e+(e-1-s)]);return n},Z_=(i,e)=>{let t=e,n=e,r=-1,s=-1;for(let u=0;u<i.length;u+=1){const d=i[u];if(d.count<=0||d.itemId===A.Air)continue;const h=u%e,m=Math.floor(u/e);t=Math.min(t,h),n=Math.min(n,m),r=Math.max(r,h),s=Math.max(s,m)}if(r<0||s<0)return null;const a=r-t+1,o=s-n+1,l=[],c=[];for(let u=n;u<=s;u+=1)for(let d=t;d<=r;d+=1){const h=u*e+d,m=i[h];if(m.count>0&&m.itemId!==A.Air){l.push(m.itemId),c.push(h);continue}l.push(null)}return{width:a,height:o,pattern:l,occupiedIndices:c}},Ic=(i,e)=>{const t=Z_(i,e);if(!t)return null;for(const n of q_)if(!(n.minGridSize>e)&&!(n.width!==t.width||n.height!==t.height)&&(Rc(t.pattern,n.ingredients)||Rc(K_(t.pattern,t.width,t.height),n.ingredients)))return{occupiedIndices:[...t.occupiedIndices],output:{...n.output}};return null},qi=9,$_=27,j_=4,J_=9,ai=()=>({itemId:A.Air,count:0}),Ki=i=>{i.itemId=A.Air,i.count=0},Pc=i=>({itemId:i.itemId,count:i.count});class Q_{hotbar=Array.from({length:qi},ai);main=Array.from({length:$_},ai);playerCraft=Array.from({length:j_},ai);tableCraft=Array.from({length:J_},ai);heldSlot=null;selectedHotbarIndex=0;openScreen="closed";playerCraftMatch=null;playerCraftResult=ai();tableCraftMatch=null;tableCraftResult=ai();constructor(){this.seedInventory(),this.refreshCrafting()}get isOpen(){return this.openScreen!=="closed"}get screen(){return this.openScreen}get isCraftingTableOpen(){return this.openScreen==="crafting_table"}get slots(){return[...this.hotbar,...this.main]}getHotbarSlots(){return this.hotbar}getMainSlots(){return this.main}getPlayerCraftResult(){return this.playerCraftResult}getTableCraftResult(){return this.tableCraftResult}setSelectedHotbar(e){this.selectedHotbarIndex=(e%qi+qi)%qi}cycleHotbar(e){this.setSelectedHotbar(this.selectedHotbarIndex+e)}getSelectedSlot(){return this.hotbar[this.selectedHotbarIndex]}getSelectedItemId(){const e=this.getSelectedSlot();return e.count>0?e.itemId:A.Air}getSelectedPlaceBlockId(){return Tt.getPlaceBlockId(this.getSelectedItemId())}consumeSelectedItem(){const e=this.getSelectedSlot();return e.count<=0?!1:(e.count-=1,e.count===0&&Ki(e),!0)}addItem(e,t){return t<=0||!Tt.has(e)||Tt.getMaxStackSize(e)<=0?t:this.insertIntoSlots(e,t,[this.hotbar,this.main])}toggleOpen(){if(this.isOpen){this.close();return}this.togglePlayerInventory()}interactWithSlot(e){if(e<qi){this.interact({index:e,section:"hotbar"},{button:"left",shiftKey:!1});return}this.interact({index:e-qi,section:"main"},{button:"left",shiftKey:!1})}togglePlayerInventory(){if(this.openScreen==="inventory"){this.close();return}this.openScreen="inventory",this.refreshCrafting()}openCraftingTable(){this.openScreen="crafting_table",this.refreshCrafting()}close(){this.returnCraftGrid(this.playerCraft),this.returnCraftGrid(this.tableCraft),this.openScreen="closed",this.refreshCrafting()}interact(e,t){if(t.shiftKey){this.quickMove(e),this.refreshCrafting();return}if(e.section==="playerResult"){this.takeCraftingResult("player"),this.refreshCrafting();return}if(e.section==="tableResult"){this.takeCraftingResult("table"),this.refreshCrafting();return}const n=this.resolveSlot(e);n&&(t.button==="left"?this.handleLeftClick(n):this.handleRightClick(n),this.refreshCrafting())}handleLeftClick(e){if(!this.heldSlot){if(e.count<=0)return;this.heldSlot=Pc(e),Ki(e);return}if(e.count<=0){e.itemId=this.heldSlot.itemId,e.count=this.heldSlot.count,this.heldSlot=null;return}const t=Tt.getMaxStackSize(e.itemId);if(e.itemId===this.heldSlot.itemId&&e.count<t){const r=Math.min(t-e.count,this.heldSlot.count);e.count+=r,this.heldSlot.count-=r,this.heldSlot.count===0&&(this.heldSlot=null);return}const n=Pc(e);e.itemId=this.heldSlot.itemId,e.count=this.heldSlot.count,this.heldSlot=n}handleRightClick(e){if(!this.heldSlot){if(e.count<=0)return;const n=Math.ceil(e.count/2);this.heldSlot={itemId:e.itemId,count:n},e.count-=n,e.count===0&&Ki(e);return}if(e.count<=0){e.itemId=this.heldSlot.itemId,e.count=1,this.heldSlot.count-=1,this.heldSlot.count===0&&(this.heldSlot=null);return}const t=Tt.getMaxStackSize(e.itemId);e.itemId!==this.heldSlot.itemId||e.count>=t||(e.count+=1,this.heldSlot.count-=1,this.heldSlot.count===0&&(this.heldSlot=null))}takeCraftingResult(e){const t=e==="player"?this.playerCraftMatch:this.tableCraftMatch;t&&this.canHoldCraftResult(t.output.itemId,t.output.count)&&(this.heldSlot?this.heldSlot.count+=t.output.count:this.heldSlot={itemId:t.output.itemId,count:t.output.count},this.consumeCraftingIngredients(e,t.occupiedIndices))}quickMove(e){if(e.section==="playerResult"){this.quickCraftAll("player");return}if(e.section==="tableResult"){this.quickCraftAll("table");return}const t=this.resolveSlot(e);if(!(!t||t.count<=0)){if(e.section==="main"){this.moveSlotToTargets(t,[this.hotbar]);return}if(e.section==="hotbar"){this.moveSlotToTargets(t,[this.main]);return}this.moveSlotToTargets(t,[this.main,this.hotbar])}}quickCraftAll(e){for(;;){const t=e==="player"?this.playerCraftMatch:this.tableCraftMatch;if(!t||!this.canInsertFully(t.output.itemId,t.output.count,[this.hotbar,this.main])||this.insertIntoSlots(t.output.itemId,t.output.count,[this.hotbar,this.main])>0)return;this.consumeCraftingIngredients(e,t.occupiedIndices),this.refreshCrafting()}}canHoldCraftResult(e,t){const n=Tt.getMaxStackSize(e);return this.heldSlot?this.heldSlot.itemId===e&&this.heldSlot.count+t<=n:t<=n}canInsertFully(e,t,n){const r=Tt.getMaxStackSize(e);let s=0;for(const a of n.flat()){if(a.count<=0){s+=r;continue}a.itemId===e&&(s+=r-a.count)}return s>=t}consumeCraftingIngredients(e,t){const n=e==="player"?this.playerCraft:this.tableCraft;for(const r of t){const s=n[r];s.count<=0||(s.count-=1,s.count===0&&Ki(s))}}moveSlotToTargets(e,t){const n=this.insertIntoSlots(e.itemId,e.count,t);n!==e.count&&(e.count=n,e.count===0&&Ki(e))}insertIntoSlots(e,t,n){let r=t;const s=n.flat(),a=Tt.getMaxStackSize(e);for(const o of s){if(o.itemId!==e||o.count>=a)continue;const l=Math.min(a-o.count,r);if(o.count+=l,r-=l,r===0)return 0}for(const o of s){if(o.count>0)continue;const l=Math.min(a,r);if(o.itemId=e,o.count=l,r-=l,r===0)return 0}return r}returnCraftGrid(e){for(const t of e){if(t.count<=0)continue;const n=this.insertIntoSlots(t.itemId,t.count,[this.hotbar,this.main]);t.count=n,t.count===0&&Ki(t)}}refreshCrafting(){this.playerCraftMatch=Ic(this.playerCraft,2),this.tableCraftMatch=Ic(this.tableCraft,3),this.playerCraftResult=this.playerCraftMatch?{...this.playerCraftMatch.output}:ai(),this.tableCraftResult=this.tableCraftMatch?{...this.tableCraftMatch.output}:ai()}resolveSlot(e){return"index"in e?e.section==="hotbar"?this.hotbar[e.index]??null:e.section==="main"?this.main[e.index]??null:e.section==="playerCraft"?this.playerCraft[e.index]??null:e.section==="tableCraft"?this.tableCraft[e.index]??null:null:null}seedInventory(){[{itemId:A.WoodenPickaxe,count:1},{itemId:A.WoodenAxe,count:1},{itemId:A.WoodenShovel,count:1},{itemId:A.OakLog,count:24},{itemId:A.OakPlanks,count:24},{itemId:A.Stick,count:16},{itemId:A.Cobblestone,count:32},{itemId:A.CraftingTable,count:1}].forEach((n,r)=>{this.hotbar[r]={...n}}),[{itemId:A.StonePickaxe,count:1},{itemId:A.IronPickaxe,count:1},{itemId:A.DiamondPickaxe,count:1},{itemId:A.StoneAxe,count:1},{itemId:A.StoneShovel,count:1},{itemId:A.IronIngot,count:8},{itemId:A.Diamond,count:4},{itemId:A.Dirt,count:32},{itemId:A.Sand,count:32},{itemId:A.Glass,count:16},{itemId:A.Chest,count:1},{itemId:A.Furnace,count:1}].forEach((n,r)=>{this.main[r]={...n}})}}const yr=(i,e,t)=>Math.min(t,Math.max(e,i)),Zt=(i,e)=>Math.floor(i/e),oi=(i,e)=>{const t=i%e;return t<0?t+e:t},xr=(i,e,t=0)=>{const n=Math.sin(i*127.1+e*311.7+t*19.19)*43758.5453;return n-Math.floor(n)},ex=(i,e,t)=>{const n=new N(-Math.sin(i),0,-Math.cos(i)),r=new N(-n.z,0,n.x);return n.multiplyScalar(e).add(r.multiplyScalar(t))};class ks{blocks=new Uint8Array(Ke*ci*Ke);mesh=null;waterMesh=null;chunkX;chunkZ;constructor(e,t){this.chunkX=e,this.chunkZ=t}get key(){return`${this.chunkX},${this.chunkZ}`}get worldX(){return this.chunkX*Ke}get worldZ(){return this.chunkZ*Ke}getBlock(e,t,n){return this.blocks[ks.index(e,t,n)]}setBlock(e,t,n,r){this.blocks[ks.index(e,t,n)]=r}static index(e,t,n){return e+n*Ke+t*Ke*Ke}}const Zi=.35,No={top:{corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],neighborOffset:[0,1,0],normal:[0,1,0],shade:1,uvTemplate:[[0,0],[0,1],[1,1],[1,0]]},bottom:{corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],neighborOffset:[0,-1,0],normal:[0,-1,0],shade:.58,uvTemplate:[[0,0],[1,0],[1,1],[0,1]]},north:{corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],neighborOffset:[0,0,-1],normal:[0,0,-1],shade:.8,uvTemplate:[[0,0],[0,1],[1,1],[1,0]]},south:{corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],neighborOffset:[0,0,1],normal:[0,0,1],shade:.8,uvTemplate:[[0,0],[1,0],[1,1],[0,1]]},east:{corners:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],neighborOffset:[1,0,0],normal:[1,0,0],shade:.72,uvTemplate:[[0,0],[0,1],[1,1],[1,0]]},west:{corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],neighborOffset:[-1,0,0],normal:[-1,0,0],shade:.72,uvTemplate:[[0,0],[1,0],[1,1],[0,1]]}},tx=()=>({colors:[],indices:[],normals:[],positions:[],uvs:[]}),nx=i=>{if(i.indices.length===0)return null;const e=new fn;return e.setAttribute("position",new jt(new Float32Array(i.positions),3)),e.setAttribute("normal",new jt(new Float32Array(i.normals),3)),e.setAttribute("uv",new jt(new Float32Array(i.uvs),2)),e.setAttribute("color",new jt(new Float32Array(i.colors),3)),e.setIndex(i.indices),e.computeBoundingSphere(),e},ix=i=>Ft.isRenderable(i)&&!Ft.isLiquid(i),rx=i=>i===H.Water,sx=(i,e)=>e!==i&&!Ft.isOpaque(e),ax=(i,e)=>e!==H.Water&&!Ft.isOpaque(e),ox=(i,e,t,n,r)=>i!==H.Water||r(e,t+1,n)===H.Water?1:Ps,lx=(i,e,t,n,r,s,a,o,l,c)=>{const u=No[o],d=i.positions.length/3,h=c==="atlas"?E_(Ft.getFaceTexture(a,o)):null;for(let m=0;m<u.corners.length;m+=1){const[g,M,p]=u.corners[m],f=M===1?l:M;let y=0,T=0;if(h){const[b,R,w,I]=h,[x,S]=u.uvTemplate[m];y=x===0?b:w,T=S===0?R:I}else o==="top"||o==="bottom"?(y=(r+g)*Zi,T=(s+p)*Zi):o==="north"||o==="south"?(y=(r+g)*Zi,T=(t+f)*Zi):(y=(s+p)*Zi,T=(t+f)*Zi);i.positions.push(e+g,t+f,n+p),i.normals.push(...u.normal),i.uvs.push(y,T),i.colors.push(u.shade,u.shade,u.shade)}i.indices.push(d,d+1,d+2,d,d+2,d+3)},Dc=(i,e,t,n,r,s)=>{const a=tx();for(let o=0;o<Ke;o+=1)for(let l=0;l<ci;l+=1)for(let c=0;c<Ke;c+=1){const u=i.getBlock(o,l,c);if(!t(u))continue;const d=i.worldX+o,h=i.worldZ+c,m=r?ox(u,d,l,h,e):1;for(const g of Object.keys(No)){const M=No[g],[p,f,y]=M.neighborOffset,T=e(d+p,l+f,h+y);n(u,T)&&lx(a,o,l,c,d,h,u,g,m,s)}}return nx(a)},cx={build(i,e){return{solidGeometry:Dc(i,e,ix,sx,!1,"atlas"),waterGeometry:Dc(i,e,rx,ax,!0,"water")}}},Gu=Math.sqrt(3),ux=.5*(Gu-1),vr=(3-Gu)/6,hx=1/3,bn=1/6,Er=i=>Math.floor(i)|0,Lc=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),Na=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function nn(i=Math.random){const e=Hu(i),t=new Float64Array(e).map(r=>Lc[r%12*2]),n=new Float64Array(e).map(r=>Lc[r%12*2+1]);return function(s,a){let o=0,l=0,c=0;const u=(s+a)*ux,d=Er(s+u),h=Er(a+u),m=(d+h)*vr,g=d-m,M=h-m,p=s-g,f=a-M;let y,T;p>f?(y=1,T=0):(y=0,T=1);const b=p-y+vr,R=f-T+vr,w=p-1+2*vr,I=f-1+2*vr,x=d&255,S=h&255;let Y=.5-p*p-f*f;if(Y>=0){const F=x+e[S],W=t[F],B=n[F];Y*=Y,o=Y*Y*(W*p+B*f)}let C=.5-b*b-R*R;if(C>=0){const F=x+y+e[S+T],W=t[F],B=n[F];C*=C,l=C*C*(W*b+B*R)}let k=.5-w*w-I*I;if(k>=0){const F=x+1+e[S+1],W=t[F],B=n[F];k*=k,c=k*k*(W*w+B*I)}return 70*(o+l+c)}}function gs(i=Math.random){const e=Hu(i),t=new Float64Array(e).map(s=>Na[s%12*3]),n=new Float64Array(e).map(s=>Na[s%12*3+1]),r=new Float64Array(e).map(s=>Na[s%12*3+2]);return function(a,o,l){let c,u,d,h;const m=(a+o+l)*hx,g=Er(a+m),M=Er(o+m),p=Er(l+m),f=(g+M+p)*bn,y=g-f,T=M-f,b=p-f,R=a-y,w=o-T,I=l-b;let x,S,Y,C,k,F;R>=w?w>=I?(x=1,S=0,Y=0,C=1,k=1,F=0):R>=I?(x=1,S=0,Y=0,C=1,k=0,F=1):(x=0,S=0,Y=1,C=1,k=0,F=1):w<I?(x=0,S=0,Y=1,C=0,k=1,F=1):R<I?(x=0,S=1,Y=0,C=0,k=1,F=1):(x=0,S=1,Y=0,C=1,k=1,F=0);const W=R-x+bn,B=w-S+bn,V=I-Y+bn,O=R-C+2*bn,Q=w-k+2*bn,J=I-F+2*bn,ce=R-1+3*bn,fe=w-1+3*bn,ue=I-1+3*bn,De=g&255,qe=M&255,ke=p&255;let Z=.6-R*R-w*w-I*I;if(Z<0)c=0;else{const ge=De+e[qe+e[ke]];Z*=Z,c=Z*Z*(t[ge]*R+n[ge]*w+r[ge]*I)}let ee=.6-W*W-B*B-V*V;if(ee<0)u=0;else{const ge=De+x+e[qe+S+e[ke+Y]];ee*=ee,u=ee*ee*(t[ge]*W+n[ge]*B+r[ge]*V)}let te=.6-O*O-Q*Q-J*J;if(te<0)d=0;else{const ge=De+C+e[qe+k+e[ke+F]];te*=te,d=te*te*(t[ge]*O+n[ge]*Q+r[ge]*J)}let Ue=.6-ce*ce-fe*fe-ue*ue;if(Ue<0)h=0;else{const ge=De+1+e[qe+1+e[ke+1]];Ue*=Ue,h=Ue*Ue*(t[ge]*ce+n[ge]*fe+r[ge]*ue)}return 32*(c+u+d+h)}}function Hu(i){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(i()*(256-n)),s=t[n];t[n]=t[r],t[r]=s}for(let n=256;n<512;n++)t[n]=t[n-256];return t}const Ut=i=>{let e=i>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}};class dx{continental;erosionField;peaksField;hillsField;mountainRegionField;mountainRidgeField;plateauField;detailField;lakeField;pondField;riverField;temperatureField;moistureField;cavePrimaryField;caveSecondaryField;caveTunnelField;ore;constructor(e){this.continental=nn(Ut(e)),this.erosionField=nn(Ut(e+1)),this.peaksField=nn(Ut(e+2)),this.hillsField=nn(Ut(e+3)),this.mountainRegionField=nn(Ut(e+4)),this.mountainRidgeField=nn(Ut(e+5)),this.plateauField=nn(Ut(e+6)),this.detailField=nn(Ut(e+7)),this.temperatureField=nn(Ut(e+8)),this.moistureField=nn(Ut(e+9)),this.riverField=nn(Ut(e+10)),this.lakeField=nn(Ut(e+11)),this.pondField=nn(Ut(e+16)),this.cavePrimaryField=gs(Ut(e+12)),this.caveSecondaryField=gs(Ut(e+13)),this.caveTunnelField=gs(Ut(e+14)),this.ore=gs(Ut(e+15))}continentalness(e,t){const n=this.continental(e/380,t/380),r=this.peaksField(e/180,t/180)*.2;return n+r}erosion(e,t){return this.erosionField(e/170,t/170)}peaks(e,t){return this.mountainRidge(e,t)}hills(e,t){return this.hillsField(e/120,t/120)}mountainRegion(e,t){const n=e+this.continental(e/420,t/420)*52,r=t+this.erosionField(e/420,t/420)*52;return(this.mountainRegionField(n/520,r/520)+1)*.5}mountainRidge(e,t){const n=e+this.hillsField(e/180,t/180)*34,r=t+this.detailField(e/180,t/180)*34,s=1-Math.abs(this.mountainRidgeField(n/210,r/210));return s*s*s}plateau(e,t){return this.plateauField(e/260,t/260)}detail(e,t){return this.detailField(e/58,t/58)}temperature(e,t){return this.temperatureField(e/260,t/260)}moisture(e,t){return this.moistureField(e/250,t/250)}river(e,t){const n=e+this.detailField(e/140,t/140)*34,r=t+this.erosionField(e/140,t/140)*34;return 1-Math.abs(this.riverField(n/210,r/210))}lake(e,t){const n=e+this.temperatureField(e/170,t/170)*20,r=t+this.moistureField(e/170,t/170)*20;return(this.lakeField(n/280,r/280)+1)*.5}pond(e,t){const n=e+this.detailField(e/90,t/90)*18+this.moistureField(e/150,t/150)*10,r=t+this.hillsField(e/90,t/90)*18+this.temperatureField(e/150,t/150)*10;return(this.pondField(n/120,r/120)+1)*.5}cavePrimary(e,t,n){return this.cavePrimaryField(e/34,t/26,n/34)}caveSecondary(e,t,n){return this.caveSecondaryField(e/18,t/20,n/18)}caveTunnel(e,t,n){return Math.abs(this.caveTunnelField(e/48,t/22,n/48))}oreDensity(e,t,n){return this.ore(e/12,t/12,n/12)}}const fx=sn-14,px=126,Nt=(i,e,t)=>{const n=yr((t-i)/(e-i),0,1);return n*n*(3-2*n)},Tn=(i,e,t)=>i+(e-i)*t;class mx{noise;seed;constructor(e=1337){this.seed=e,this.noise=new dx(e)}getSurfaceHeight(e,t){return this.sampleSurfaceProfile(e,t).height}getSurfaceProfile(e,t){return this.sampleSurfaceProfile(e,t)}populateTerrain(e){for(let t=0;t<Ke;t+=1)for(let n=0;n<Ke;n+=1){const r=e.worldX+t,s=e.worldZ+n,a=this.sampleSurfaceProfile(r,s);for(let o=0;o<=a.height;o+=1){if(o===0){e.setBlock(t,o,n,H.Bedrock);continue}if(o<5&&xr(r+this.seed,s-o,o)>.57){e.setBlock(t,o,n,H.Bedrock);continue}if(o===a.height){e.setBlock(t,o,n,a.topBlock);continue}if(o>=a.height-a.fillerDepth){e.setBlock(t,o,n,a.fillerBlock);continue}this.shouldCarveCave(r,o,s,a.height)||e.setBlock(t,o,n,this.pickStoneVariant(r,o,s))}if(a.waterLevel!==null)for(let o=a.height+1;o<=a.waterLevel;o+=1)e.setBlock(t,o,n,H.Water)}}populateFeatures(e,t,n){for(let r=0;r<Ke;r+=1)for(let s=0;s<Ke;s+=1){const a=e.worldX+r,o=e.worldZ+s,l=this.sampleSurfaceProfile(a,o);this.shouldPlaceTreeAt(a,o,l)&&this.placeTree(a,l.height+1,o,l.biome,t,n)}}sampleSurfaceProfile(e,t){const n=this.noise.continentalness(e,t),r=this.noise.erosion(e,t),s=this.noise.hills(e,t),a=this.noise.plateau(e,t),o=this.noise.mountainRegion(e,t),l=this.noise.mountainRidge(e,t),c=this.noise.detail(e,t),u=this.noise.lake(e,t),d=this.noise.pond(e,t),h=this.noise.river(e,t),m=this.noise.temperature(e,t),g=this.noise.moisture(e,t),M=Nt(-.32,.38,n),p=1-Nt(.18,.82,r),f=Nt(.16,.84,r),y=1-Nt(-.02,.56,n),T=Nt(.18,.84,y),b=Nt(.44,.72,o)*(.6+M*.4),R=Nt(.64,.86,o)*Nt(-.04,.42,n)*(.72+p*.28),w=Nt(.22,.78,y)*(1-Math.min(1,R*1.25))*(1-T*.28),I=1-Nt(.38,.8,o),x=this.selectBiome(m,g,R,o);let S=sn-5;switch(S+=n*7,S+=s*Tn(2.3,7.2,b),S+=a*2.1,S+=c*Tn(.9,2.1,b),S+=I*.8,S+=b*(3+Math.max(0,s)*3.5),S+=R*(12+l*28+Math.max(0,a)*5)*(.78+p*.22),S-=Nt(.34,.76,-n)*8,x){case"desert":S=Tn(S,sn-2+n*4+s*1.4+c*.6,.55),S-=1.5;break;case"forest":S+=1.5+Math.max(0,s)*.7;break;case"highlands":S+=6+l*10;break;case"plains":S-=1.2;break}const Y=sn-Tn(4.2,10.6,T)+s*.85+c*.4-Math.max(0,a)*.35;S=Tn(S,Y,T*(.72+f*.2));const C=sn+1+s*.4+c*.18-Math.max(0,a)*.1;S=Tn(S,C,w*.9);const k=S,F=this.sampleRiverMask(h,x,n,R),W=this.sampleLakeMask(u,F,x,n,g,R),B=this.samplePondMask(d,F,W,x,n,g,R,f),V=F*Tn(3.2,7.8,R),O=W*Tn(4.2,6.8,M),Q=B*Tn(1.8,4.6,.35+M*.65);S-=V+O+Q;const J=F>=.18?sn:null,ce=W>=.2?Math.floor(Math.min(sn+2,S+O*.92)):null,fe=B>=.24?Math.floor(Math.min(k-V-O*.28,S+Q*.94+.35)):null,ue=T>=.16&&R<.22?sn:null,De=Math.max(ue??Number.NEGATIVE_INFINITY,J??Number.NEGATIVE_INFINITY,ce??Number.NEGATIVE_INFINITY,fe??Number.NEGATIVE_INFINITY),qe=Number.isFinite(De)?De:null;if(qe!==null){const te=ue!==null?Tn(1.8,3.4,y):1;S=Math.min(S,qe-te)}if(qe===null&&y>.18){const te=sn+.8+Nt(.18,.92,y)*1.4;S=Math.max(S,te)}const ke=Math.max(fx,Math.min(px,Math.floor(S))),Z=qe!==null&&ke<qe,ee=3+Math.floor(xr(e,t,this.seed+19)*2)+(x==="desert"?2:0);if(Z){const te=x==="highlands"?H.Gravel:H.Sand;return{biome:x,fillerBlock:te,fillerDepth:Math.max(2,ee-1),height:ke,topBlock:te,waterLevel:qe}}return ke<=sn+1&&x!=="highlands"?{biome:x,fillerBlock:H.Sand,fillerDepth:Math.max(2,ee-1),height:ke,topBlock:H.Sand,waterLevel:null}:x==="highlands"&&ke>=110?{biome:x,fillerBlock:H.Stone,fillerDepth:2,height:ke,topBlock:H.Stone,waterLevel:null}:x==="highlands"&&ke>=96?{biome:x,fillerBlock:H.Stone,fillerDepth:3,height:ke,topBlock:H.Gravel,waterLevel:null}:x==="desert"?{biome:x,fillerBlock:H.Sand,fillerDepth:ee,height:ke,topBlock:H.Sand,waterLevel:null}:{biome:x,fillerBlock:H.Dirt,fillerDepth:ee,height:ke,topBlock:H.Grass,waterLevel:null}}selectBiome(e,t,n,r){return n>.34||r>.82?"highlands":e>.34&&t<-.22&&n<.22?"desert":t>.08&&n<.4?"forest":"plains"}sampleRiverMask(e,t,n,r){if(t==="desert"&&n<.18)return 0;const s=r>.3?.965:.95,a=Math.max(0,(e-s)/(1-s));if(a<=.06)return 0;const o=.45+Nt(-.35,.12,n)*.55,l=1-r*.35;return Math.min(1,Math.pow(a,1.55)*o*l)}sampleLakeMask(e,t,n,r,s,a){if(t>.2||n==="desert")return 0;const o=a>.35?.97:.94,l=Math.max(0,(e-o)/(1-o));if(l<=.08)return 0;const c=Nt(-.18,.28,r),u=.55+Nt(-.18,.38,s)*.45,d=1-a*.45;return Math.min(1,Math.pow(l,2.2)*c*u*d)}samplePondMask(e,t,n,r,s,a,o,l){if(r==="desert"||r==="highlands"||t>.12||n>.18)return 0;const c=r==="forest"?.76:.81,u=Math.max(0,(e-c)/(1-c));if(u<=.04)return 0;const d=Nt(-.08,.32,s),h=.5+Nt(-.12,.44,a)*.5,m=1-o*.6;return Math.min(1,Math.pow(u,1.45)*d*h*m*(.45+l*.55))}shouldCarveCave(e,t,n,r){if(t<=8||t>=r-4)return!1;const s=this.noise.cavePrimary(e,t,n),a=this.noise.caveSecondary(e,t,n),o=this.noise.caveTunnel(e,t,n);if(r-t<6)return!1;const c=s>.56&&a>-.14,u=o<.05&&a>-.26;return c||u}pickStoneVariant(e,t,n){const r=this.noise.oreDensity(e,t,n);return t<=16&&r>.78?H.DiamondOre:t<=30&&r>.74?H.GoldOre:t<=64&&r>.69?H.IronOre:r>.63?H.CoalOre:H.Stone}shouldPlaceTreeAt(e,t,n){if(n.topBlock!==H.Grass||n.height<=sn+1||n.height+8>=ci)return!1;const r=this.getTreeChance(n.biome);if(r<=0)return!1;const s=xr(e*.77,t*1.19,this.seed+211);return s<1-r||!this.isTreeAnchor(e,t,s)?!1:this.hasGentleSlope(e,t,n.height)}getTreeChance(e){switch(e){case"forest":return .055;case"highlands":return .01;case"plains":return .018;case"desert":return 0}}isTreeAnchor(e,t,n){for(let r=-2;r<=2;r+=1)for(let s=-2;s<=2;s+=1)if(!(s===0&&r===0)&&xr((e+s)*.77,(t+r)*1.19,this.seed+211)>n)return!1;return!0}hasGentleSlope(e,t,n){const r=this.getSurfaceHeight(e,t-1),s=this.getSurfaceHeight(e,t+1),a=this.getSurfaceHeight(e-1,t),o=this.getSurfaceHeight(e+1,t);return Math.abs(n-r)<=2&&Math.abs(n-s)<=2&&Math.abs(n-a)<=2&&Math.abs(n-o)<=2}placeTree(e,t,n,r,s,a){const o=(r==="forest"?5:4)+Math.floor(xr(e,n,this.seed+307)*3);for(let u=0;u<o;u+=1){const d=t+u,h=a(e,d,n);(h===H.Air||h===H.OakLeaves)&&s(e,d,n,H.OakLog)}const l=t+o-2,c=t+o+1;for(let u=l;u<=c;u+=1){const d=u-l,h=u===c?1:r==="forest"&&d===1?3:2;for(let m=-h;m<=h;m+=1)for(let g=-h;g<=h;g+=1){if(Math.abs(g)+Math.abs(m)+Math.max(0,d-1)>h+1||g===0&&m===0&&u<t+o)continue;const p=e+g,f=n+m;a(p,u,f)===H.Air&&s(p,u,f,H.OakLeaves)}}}}const gx=8,_s=1,xs=2,vs=72,Ss=18,Uc=1,_x=2,Ms=12,Nc=16,Fa=.001,$i=1e-4,xx=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0}],Fc=i=>i>0&&(i&i-1)===0;class vx{group=new Yn;chunks=new Map;atlasTexture=Ou();waterTexture=M_();solidMaterial=new Io({alphaTest:.15,flatShading:!0,map:this.atlasTexture,vertexColors:!0});waterMaterial=new wi({color:2854888,depthWrite:!0,fog:!1,map:this.waterTexture,opacity:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2,side:wn,transparent:!1,vertexColors:!1});generator=new mx;dynamicWaterBlocks=new Set;lastStreamCenterKey=null;spawnTransform=null;waterAnimationTime=0;buildInitialWorld(e){this.ensureChunksAround(0,0,e+Uc),this.lastStreamCenterKey=this.getChunkKey(0,0)}getChunkCoordinatesFor(e,t){return`${Zt(Math.floor(e),Ke)}, ${Zt(Math.floor(t),Ke)}`}getSpawnPosition(){return this.getSpawnTransform().position}getSurfaceHeight(e,t){return this.generator.getSurfaceHeight(e,t)}getSurfaceColumn(e,t){return this.generator.getSurfaceProfile(e,t)}getSpawnTransform(){return this.spawnTransform||(this.spawnTransform=this.findSpawnTransform()),{pitch:this.spawnTransform.pitch,position:this.spawnTransform.position.clone(),yaw:this.spawnTransform.yaw}}update(e){this.waterAnimationTime+=e,this.waterTexture.offset.set((this.waterAnimationTime*U0%1+1)%1,(this.waterAnimationTime*N0%1+1)%1)}getWaterAnimationState(){return{primary:{u:Number(this.waterTexture.offset.x.toFixed(4)),v:Number(this.waterTexture.offset.y.toFixed(4))},time:Number(this.waterAnimationTime.toFixed(3))}}getWaterTextureState(){const e=this.waterTexture.image,t=e?.width??0,n=e?.height??0;return{width:t,height:n,isPowerOfTwo:Fc(t)&&Fc(n)}}updateStreaming(e,t,n){const r=Zt(Math.floor(e),Ke),s=Zt(Math.floor(t),Ke),a=this.getChunkKey(r,s);a!==this.lastStreamCenterKey&&(this.ensureChunksAround(r,s,n+Uc),this.pruneDistantChunks(r,s,n+_x),this.lastStreamCenterKey=a)}getWorldMetrics(e=64){let t=0,n=0,r=0,s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY;for(let c=-e;c<=e;c+=1)for(let u=-e;u<=e;u+=1){const d=this.generator.getSurfaceProfile(u,c);r+=d.height,s=Math.min(s,d.height),a=Math.max(a,d.height),d.height>=96&&(n+=1),d.waterLevel!==null&&(t+=1,o=Math.min(o,Math.hypot(u,c)))}const l=(e*2+1)**2;return{averageHeight:Number((r/l).toFixed(2)),maxHeight:a,minHeight:s,mountainColumns:n,nearestWaterDistance:o===Number.POSITIVE_INFINITY?null:Number(o.toFixed(2)),totalColumns:l,waterColumns:t}}getLoadedChunkSummary(){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;for(const s of this.chunks.values())e=Math.min(e,s.chunkX),t=Math.max(t,s.chunkX),n=Math.min(n,s.chunkZ),r=Math.max(r,s.chunkZ);return this.chunks.size===0?{count:0,maxChunkX:0,maxChunkZ:0,minChunkX:0,minChunkZ:0}:{count:this.chunks.size,maxChunkX:t,maxChunkZ:r,minChunkX:e,minChunkZ:n}}getBlockId(e,t,n){if(t<0||t>=ci)return H.Air;const r=Zt(e,Ke),s=Zt(n,Ke),a=this.chunks.get(`${r},${s}`);return a?a.getBlock(oi(e,Ke),t,oi(n,Ke)):H.Air}isSolidBlockAt(e,t,n){return Ft.isSolid(this.getBlockId(e,t,n))}sampleWaterState(e,t,n,r=Qo){const s=e.x-t,a=e.x+t,o=e.y,l=e.y+n,c=e.z-t,u=e.z+t,d=Math.floor(s),h=Math.floor(a-$i),m=Math.floor(o),g=Math.floor(l-$i),M=Math.floor(c),p=Math.floor(u-$i);let f=0,y=0,T=Number.NEGATIVE_INFINITY;const b=new N;for(let I=m;I<=g;I+=1)for(let x=M;x<=p;x+=1)for(let S=d;S<=h;S+=1){if(this.getBlockId(S,I,x)!==H.Water)continue;const Y=this.getWaterSurfaceY(S,I,x),C=Math.min(a,S+1)-Math.max(s,S),k=Math.min(l,Y)-Math.max(o,I),F=Math.min(u,x+1)-Math.max(c,x);if(C<=0||k<=0||F<=0)continue;const W=C*k*F;f+=W,T=Math.max(T,Y);const B=this.getWaterFlowVector(S,I,x);B.lengthSq()<=0||(b.addScaledVector(B,W),y+=W)}y>0&&b.multiplyScalar(1/y),b.lengthSq()>1&&b.normalize();const R=Math.max($i,t*2*(t*2)*n),w=Math.min(1,f/R);return{flow:b,headInWater:this.isPointInWater(e.x,e.y+r,e.z),isInWater:w>Au,submersion:w,surfaceY:T===Number.NEGATIVE_INFINITY?null:Number(T.toFixed(3))}}setBlockId(e,t,n,r){if(t<0||t>=ci)return!1;const s=Zt(e,Ke),a=Zt(n,Ke),o=this.chunks.get(`${s},${a}`);if(!o)return!1;if(o.getBlock(oi(e,Ke),t,oi(n,Ke))===r)return!0;o.setBlock(oi(e,Ke),t,oi(n,Ke),r),this.dynamicWaterBlocks.delete(this.getBlockKey(e,t,n));const c=new Map([[o.key,o]]);return this.rebuildDynamicWaterAround(e,t,n,c),this.remeshChunks(c.values()),!0}isPointInWater(e,t,n){const r=Math.floor(e),s=Math.floor(t),a=Math.floor(n);return this.getBlockId(r,s,a)!==H.Water?!1:t<this.getWaterSurfaceY(r,s,a)-$i}getWaterSurfaceY(e,t,n){return this.getBlockId(e,t,n)!==H.Water||this.getBlockId(e,t+1,n)===H.Water?t+1:t+Ps}getWaterFlowVector(e,t,n){let r=0,s=0;const a=this.getWaterSurfaceY(e,t,n),o=[{dx:1,dz:0},{dx:-1,dz:0},{dx:0,dz:1},{dx:0,dz:-1}];for(const c of o){const u=e+c.dx,d=n+c.dz,h=this.getBlockId(u,t,d);if(h===H.Water){const g=a-this.getWaterSurfaceY(u,t,d);g>$i&&(r+=c.dx*g,s+=c.dz*g);continue}if(Ft.isSolid(h))continue;const m=this.getBlockId(u,t-1,d);if(!Ft.isSolid(m)){r+=c.dx,s+=c.dz;continue}m===H.Water&&(r+=c.dx*.35,s+=c.dz*.35)}const l=new N(r,0,s);return l.lengthSq()>1&&l.normalize(),l}rebuildDynamicWaterAround(e,t,n,r){const s={minX:e-Ms,maxX:e+Ms,minY:Math.max(0,t-Nc),maxY:Math.min(ci-1,t+Nc),minZ:n-Ms,maxZ:n+Ms};this.clearDynamicWater(s,r);const a=[],o=new Map,l=new Map;for(let u=s.minY;u<=s.maxY;u+=1)for(let d=s.minZ;d<=s.maxZ;d+=1)for(let h=s.minX;h<=s.maxX;h+=1)this.hasLoadedChunkAt(h,d)&&this.getBlockId(h,u,d)===H.Water&&this.enqueuePropagatedWaterCell(a,o,h,u,d,this.getWaterColumnSurfaceY(h,u,d));let c=0;for(;c<a.length;){const u=a[c];c+=1;for(const d of xx){const h=u.x+d.dx,m=u.y+d.dy,g=u.z+d.dz;if(!this.isWithinDynamicWaterBounds(s,h,m,g)||!this.hasLoadedChunkAt(h,g))continue;const M=this.getBlockId(h,m,g),p=this.getBlockKey(h,m,g);if(Ft.isSolid(M))continue;if(M===H.Water){this.enqueuePropagatedWaterCell(a,o,h,m,g,Math.max(u.surfaceY,this.getWaterColumnSurfaceY(h,m,g)));continue}if(M!==H.Air||!this.canFillDynamicWaterCell(m,u.surfaceY))continue;const f=l.get(p)??Number.NEGATIVE_INFINITY;u.surfaceY<=f+Fa||this.setBlockIdFast(h,m,g,H.Water)&&(this.dynamicWaterBlocks.add(p),l.set(p,u.surfaceY),this.markDirtyChunk(h,g,r),this.enqueuePropagatedWaterCell(a,o,h,m,g,u.surfaceY))}}}clearDynamicWater(e,t){for(const n of[...this.dynamicWaterBlocks]){const[r,s,a]=n.split(",").map(Number);this.isWithinDynamicWaterBounds(e,r,s,a)&&(this.getBlockId(r,s,a)===H.Water&&(this.setBlockIdFast(r,s,a,H.Air),this.markDirtyChunk(r,a,t)),this.dynamicWaterBlocks.delete(n))}}enqueuePropagatedWaterCell(e,t,n,r,s,a){const o=this.getBlockKey(n,r,s),l=t.get(o);l!==void 0&&a<=l+Fa||(t.set(o,a),e.push({x:n,y:r,z:s,surfaceY:a}))}canFillDynamicWaterCell(e,t){return e+Ps<=t+Fa}getWaterColumnSurfaceY(e,t,n){let r=t;for(;r+1<ci&&this.getBlockId(e,r+1,n)===H.Water;)r+=1;return this.getBlockId(e,r+1,n)===H.Water?r+1:r+Ps}isWithinDynamicWaterBounds(e,t,n,r){return t>=e.minX&&t<=e.maxX&&n>=e.minY&&n<=e.maxY&&r>=e.minZ&&r<=e.maxZ}hasLoadedChunkAt(e,t){return this.chunks.has(this.getChunkKey(Zt(e,Ke),Zt(t,Ke)))}getBlockKey(e,t,n){return`${e},${t},${n}`}markDirtyChunk(e,t,n){const r=this.getChunkKey(Zt(e,Ke),Zt(t,Ke)),s=this.chunks.get(r);s&&n.set(r,s)}remeshChunks(e){for(const t of this.collectChunkNeighborhood(e,1))this.remeshChunk(t)}getChunkKey(e,t){return`${e},${t}`}collectChunkNeighborhood(e,t){const n=new Map;for(const r of e)for(let s=-t;s<=t;s+=1)for(let a=-t;a<=t;a+=1){const o=this.chunks.get(this.getChunkKey(r.chunkX+a,r.chunkZ+s));o&&n.set(o.key,o)}return[...n.values()]}ensureChunksAround(e,t,n){const r=[],s=[];for(let o=t-n;o<=t+n;o+=1)for(let l=e-n;l<=e+n;l+=1){const c=this.getChunkKey(l,o);if(this.chunks.has(c))continue;const u=l-e,d=o-t;s.push({chunkX:l,chunkZ:o,distanceSquared:u*u+d*d,key:c})}s.sort((o,l)=>o.distanceSquared-l.distanceSquared);for(const o of s){const l=new ks(o.chunkX,o.chunkZ);this.generator.populateTerrain(l),this.chunks.set(o.key,l),r.push(l)}if(r.length===0)return;const a=this.collectChunkNeighborhood(r,1);for(const o of a)this.generator.populateFeatures(o,(l,c,u,d)=>this.setBlockIdFast(l,c,u,d),(l,c,u)=>this.getBlockId(l,c,u));for(const o of this.collectChunkNeighborhood(a,1))this.remeshChunk(o)}pruneDistantChunks(e,t,n){for(const[r,s]of this.chunks)Math.abs(s.chunkX-e)<=n&&Math.abs(s.chunkZ-t)<=n||(this.disposeChunk(s),this.chunks.delete(r))}setBlockIdFast(e,t,n,r){if(t<0||t>=ci)return!1;const s=Zt(e,Ke),a=Zt(n,Ke),o=this.chunks.get(`${s},${a}`);return o?(o.setBlock(oi(e,Ke),t,oi(n,Ke),r),!0):!1}remeshChunk(e){const{solidGeometry:t,waterGeometry:n}=cx.build(e,(r,s,a)=>this.getBlockId(r,s,a));if(this.disposeChunk(e),t){const r=new Vt(t,this.solidMaterial);r.position.set(e.worldX,0,e.worldZ),e.mesh=r,this.group.add(r)}if(n){const r=new Vt(n,this.waterMaterial);r.position.set(e.worldX,0,e.worldZ),r.renderOrder=1,e.waterMesh=r,this.group.add(r)}}disposeChunk(e){e.mesh&&(this.group.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh=null),e.waterMesh&&(this.group.remove(e.waterMesh),e.waterMesh.geometry.dispose(),e.waterMesh=null)}findSpawnTransform(){let e=null;for(let t=-vs;t<=vs;t+=1)for(let n=-vs;n<=vs;n+=1){const r=this.generator.getSurfaceProfile(n,t),s=r.height;if(!this.hasSpawnHeadroom(n,s,t))continue;const a=this.pickSpawnDirection(n,s+1,t),o=Math.max(0,s-(sn+6))*1.8+Math.abs(s-sn)*.35,l=this.measureSpawnWaterAffinity(n,t),c=r.topBlock===H.Grass?26:r.topBlock===H.Sand?-24:r.topBlock===H.Gravel?-10:-14,u=this.measureSpawnOpenness(n,s+1,t)+a.clearance*2-o-Math.hypot(n,t)*.08+l+c;(!e||u>e.score)&&(e={footY:s+1+.01,score:u,worldX:n,worldZ:t,yaw:a.yaw})}return e?{pitch:-.42,position:new N(e.worldX+.5,e.footY,e.worldZ+.5),yaw:e.yaw}:{pitch:0,position:new N(0+.5,this.generator.getSurfaceHeight(0,0)+1.01,0+.5),yaw:Math.PI}}hasSpawnHeadroom(e,t,n){if(!Ft.isSolid(this.getBlockId(e,t,n)))return!1;for(let r=t+1;r<=t+2;r+=1)if(this.getBlockId(e,r,n)!==H.Air)return!1;return!0}measureSpawnOpenness(e,t,n){let r=0;const s=t-1;for(let a=-xs;a<=xs;a+=1)for(let o=-xs;o<=xs;o+=1)if(!(o===0&&a===0))for(let l=0;l<=1;l+=1)r+=this.getBlockId(e+o,t+l,n+a)===H.Air?1:-1.5;for(let a=-_s;a<=_s;a+=1)for(let o=-_s;o<=_s;o+=1)r-=Math.abs(this.generator.getSurfaceHeight(e+o,n+a)-s)*.75;return r}measureSpawnWaterAffinity(e,t){let n=Number.POSITIVE_INFINITY,r=0;for(let o=-Ss;o<=Ss;o+=2)for(let l=-Ss;l<=Ss;l+=2){if(l===0&&o===0)continue;const c=this.generator.getSurfaceProfile(e+l,t+o);if(c.waterLevel===null)continue;const u=c.waterLevel-c.height;if(u<2)continue;const d=Math.hypot(l,o);d<n&&(n=d,r=u)}if(!Number.isFinite(n))return 0;const s=Math.max(0,18-n)*.9,a=Math.min(7,r*1.4);return s+a}pickSpawnDirection(e,t,n){const r=[{dx:0,dz:-1,yaw:0},{dx:1,dz:0,yaw:Math.PI/2},{dx:0,dz:1,yaw:Math.PI},{dx:-1,dz:0,yaw:-Math.PI/2}];let s=r[0],a=-1/0;for(const o of r){let l=0;for(let c=1;c<=gx;c+=1){const u=e+o.dx*c,d=n+o.dz*c;if(this.getBlockId(u,t,d)!==H.Air||this.getBlockId(u,t+1,d)!==H.Air)break;l+=1}l>a&&(a=l,s=o)}return{clearance:a,yaw:s.yaw}}}const cn=Is/2,Sx=.35,Oc=1,Mx=.28,Bc=.84;class yx{group=new Yn;geometry=new vn(Is,Is,Is);drops=[];materialCache=new Map;scratch=new N;world;constructor(e){this.world=e}get count(){return this.drops.length}spawn(e,t,n,r,s){if(e===A.Air)return;const a=new Vt(this.geometry,this.getMaterial(e));a.castShadow=!1,a.receiveShadow=!1,a.rotation.x=.5+Math.random()*.35,a.rotation.y=Math.random()*Math.PI*2;const o=new N((Math.random()-.5)*2.1,2.4+Math.random()*.9,(Math.random()-.5)*2.1);s&&o.addScaledVector(s,.85);const l={ageSeconds:0,bobOffset:Math.random()*Math.PI*2,grounded:!1,itemId:e,mesh:a,pickupDelaySeconds:_0,position:new N(t+.5+(Math.random()-.5)*.18,n+.48,r+.5+(Math.random()-.5)*.18),velocity:o};this.group.add(a),this.drops.push(l),this.updateMesh(l)}update(e,t,n){const r=Math.min(e,Tu);for(let s=this.drops.length-1;s>=0;s-=1){const a=this.drops[s];if(a.ageSeconds+=r,a.pickupDelaySeconds=Math.max(0,a.pickupDelaySeconds-r),a.ageSeconds>=g0){this.removeAt(s);continue}if(this.applyPickupAttraction(a,t),this.integrate(a,r),this.updateMesh(a),a.pickupDelaySeconds>0||(this.scratch.set(t.position.x,t.position.y+Oc,t.position.z),a.position.distanceTo(this.scratch)>x0))continue;n.addItem(a.itemId,1)===0&&this.removeAt(s)}}applyPickupAttraction(e,t){if(e.pickupDelaySeconds>0)return;this.scratch.set(t.position.x,t.position.y+Oc,t.position.z),this.scratch.sub(e.position);const n=this.scratch.length();if(n>Sc||n<=.001)return;this.scratch.multiplyScalar(1/n);const r=14+(Sc-n)*10;e.velocity.addScaledVector(this.scratch,r/20)}integrate(e,t){const n=Math.max(Math.abs(e.velocity.x),Math.abs(e.velocity.y),Math.abs(e.velocity.z))*t,r=Math.max(1,Math.ceil(n/Sx)),s=t/r;for(let a=0;a<r;a+=1)e.grounded=!1,e.velocity.y-=v0*s,this.moveAxis(e,"x",e.velocity.x*s),this.moveAxis(e,"z",e.velocity.z*s),this.moveAxis(e,"y",e.velocity.y*s);e.grounded&&(e.velocity.x*=Bc,e.velocity.z*=Bc,Math.abs(e.velocity.x)<.02&&(e.velocity.x=0),Math.abs(e.velocity.z)<.02&&(e.velocity.z=0))}moveAxis(e,t,n){if(Math.abs(n)<1e-4)return;e.position[t]+=n;const r=Math.floor(e.position.x-cn),s=Math.floor(e.position.x+cn-1e-4),a=Math.floor(e.position.y-cn),o=Math.floor(e.position.y+cn-1e-4),l=Math.floor(e.position.z-cn),c=Math.floor(e.position.z+cn-1e-4);let u=!1,d=e.position[t];for(let h=a;h<=o;h+=1)for(let m=l;m<=c;m+=1)for(let g=r;g<=s;g+=1)this.world.isSolidBlockAt(g,h,m)&&(u=!0,t==="x"&&(d=n>0?Math.min(d,g-cn-1e-4):Math.max(d,g+1+cn+1e-4)),t==="z"&&(d=n>0?Math.min(d,m-cn-1e-4):Math.max(d,m+1+cn+1e-4)),t==="y"&&(d=n>0?Math.min(d,h-cn-1e-4):Math.max(d,h+1+cn+1e-4)));if(u){if(e.position[t]=d,t==="y"){n<0?(e.grounded=!0,e.velocity.y=Math.abs(e.velocity.y)>1?-e.velocity.y*Mx:0):e.velocity.y=0;return}e.velocity[t]*=-.2}}updateMesh(e){const t=e.grounded?Math.sin(e.ageSeconds*4.6+e.bobOffset)*.08:0;e.mesh.position.set(e.position.x,e.position.y+t,e.position.z),e.mesh.rotation.y+=.045}removeAt(e){const[t]=this.drops.splice(e,1);t&&this.group.remove(t.mesh)}getMaterial(e){const t=this.materialCache.get(e);if(t)return t;const n=Tt.getVisual(e);let r;if(n.kind==="block"){const s=Bu(n.texture),a=Ou();a.needsUpdate=!0,a.wrapS=on,a.wrapT=on,a.repeat.set(s.size/Lo,s.size/Uo),a.offset.set(s.x/Lo,1-(s.y+s.size)/Uo),r=new Io({alphaTest:.1,flatShading:!0,map:a,transparent:!0})}else r=new Io({color:Tt.getTint(e),flatShading:!0});return this.materialCache.set(e,r),r}}class Ex{keys=new Set;mouseButtons=new Set;pressed=new Set;documentRef;pointerLockTarget=null;lookDelta={x:0,y:0};constructor(e){this.documentRef=e,window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("blur",this.handleBlur),this.documentRef.addEventListener("mousemove",this.handleMouseMove),this.documentRef.addEventListener("pointerlockchange",this.handlePointerLockChange)}attachPointerLockTarget(e){this.pointerLockTarget=e,e.addEventListener("click",this.handlePointerLockRequest)}isPointerLocked(){return this.documentRef.pointerLockElement===this.pointerLockTarget}isKeyDown(e){return this.keys.has(e)}consumePressed(e){const t=this.pressed.has(e);return this.pressed.delete(e),t}consumeLookDelta(){const e=this.lookDelta;return this.lookDelta={x:0,y:0},e}isMouseButtonDown(e){return this.mouseButtons.has(e)}handlePointerLockRequest=()=>{!this.pointerLockTarget||this.isPointerLocked()||this.pointerLockTarget.requestPointerLock()};handleKeyDown=e=>{this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code),(e.code==="Space"||e.code==="ShiftLeft"||e.code==="ShiftRight"||e.code.startsWith("Key"))&&e.preventDefault()};handleKeyUp=e=>{this.keys.delete(e.code)};handleMouseDown=e=>{this.mouseButtons.add(e.button)};handleMouseUp=e=>{this.mouseButtons.delete(e.button)};handleBlur=()=>{this.keys.clear(),this.pressed.clear(),this.mouseButtons.clear(),this.lookDelta={x:0,y:0}};handleMouseMove=e=>{this.isPointerLocked()&&(this.lookDelta.x+=e.movementX,this.lookDelta.y+=e.movementY)};handlePointerLockChange=()=>{this.isPointerLocked()||(this.mouseButtons.clear(),this.lookDelta={x:0,y:0})}}const $t=1e-4,bx=.45;class Tx{world;constructor(e){this.world=e}sampleWaterState(e){return this.world.sampleWaterState(e.position,e.halfWidth,e.height,e.eyeHeight)}move(e,t){const n=Math.max(Math.abs(e.velocity.x),Math.abs(e.velocity.y),Math.abs(e.velocity.z))*t,r=Math.max(1,Math.ceil(n/bx)),s=t/r;e.onGround=!1;for(let a=0;a<r;a+=1)this.moveAxis(e,"x",e.velocity.x*s),this.moveAxis(e,"z",e.velocity.z*s),this.moveAxis(e,"y",e.velocity.y*s)}moveAxis(e,t,n){if(Math.abs(n)<$t)return;const r=e.position.clone();if(e.position[t]+=n,!this.hasSolidCollision(e)||t!=="y"&&e.isInWater&&this.tryStepOutOfWater(e,r))return;const s=this.getCollisionBounds(e.position.x,e.position.y,e.position.z,e.halfWidth,e.height);let a=!1,o=e.position[t];for(let l=s.minY;l<=s.maxY;l+=1)for(let c=s.minZ;c<=s.maxZ;c+=1)for(let u=s.minX;u<=s.maxX;u+=1)this.world.isSolidBlockAt(u,l,c)&&(a=!0,t==="x"&&(o=n>0?Math.min(o,u-e.halfWidth-$t):Math.max(o,u+1+e.halfWidth+$t)),t==="z"&&(o=n>0?Math.min(o,c-e.halfWidth-$t):Math.max(o,c+1+e.halfWidth+$t)),t==="y"&&(o=n>0?Math.min(o,l-e.height-$t):Math.max(o,l+1+$t)));a&&(e.position[t]=o,e.velocity[t]=0,t==="y"&&n<0&&(e.onGround=!0))}hasSolidCollision(e){const t=this.getCollisionBounds(e.position.x,e.position.y,e.position.z,e.halfWidth,e.height);for(let n=t.minY;n<=t.maxY;n+=1)for(let r=t.minZ;r<=t.maxZ;r+=1)for(let s=t.minX;s<=t.maxX;s+=1)if(this.world.isSolidBlockAt(s,n,r))return!0;return!1}getCollisionBounds(e,t,n,r,s){return{minX:Math.floor(e-r),maxX:Math.floor(e+r-$t),minY:Math.floor(t),maxY:Math.floor(t+s-$t),minZ:Math.floor(n-r),maxZ:Math.floor(n+r-$t)}}tryStepOutOfWater(e,t){const n=t.y+I0+$t,r=new Set,s=this.getCollisionBounds(e.position.x,e.position.y,e.position.z,e.halfWidth,e.height);for(let o=Math.floor(t.y-$t);o<=Math.floor(n);o+=1)for(let l=s.minZ;l<=s.maxZ;l+=1)for(let c=s.minX;c<=s.maxX;c+=1){if(!this.world.isSolidBlockAt(c,o,l))continue;const u=o+1;u<=t.y+$t||u>n||r.add(u)}const a=[...r].sort((o,l)=>o-l);for(const o of a)if(e.position.y=o+$t,!this.hasSolidCollision(e))return e.velocity.y=Math.max(0,e.velocity.y),e.onGround=!0,!0;return e.position.y=t.y,!1}}const Ax=new N(190,132,-280),kc=360,ji=6,Oa=1.8,wx=15909725,Cx=16773798,zc=16776680,Rx=16777215,Ix=13819882,Px=[{baseOffset:new N(-250,150,-240),driftPhase:0,driftSpeed:3.2,pattern:["001100","011110","111111","011110"]},{baseOffset:new N(-30,158,-330),driftPhase:73,driftSpeed:2.6,pattern:["0011100","0111110","1111111","0111110"]},{baseOffset:new N(240,146,-170),driftPhase:141,driftSpeed:2.1,pattern:["0001100","0111110","0011100"]},{baseOffset:new N(150,154,90),driftPhase:219,driftSpeed:1.7,pattern:["00011000","00111100","01111110","00111100"]}];class Dx{canvas;scene;renderer;skyGroup=new Yn;cloudRigs=[];skyStartTime=performance.now();resizeHandler=null;constructor(e){this.canvas=document.createElement("canvas"),e.append(this.canvas),this.scene=new Kh,this.scene.background=new $e(Tc),this.scene.fog=new Zo(Tc,.0075);const t=new md(16777215,5267568,1.9),n=new xd(16774354,1.9);n.position.set(96,160,64),this.buildSkyDecor(),this.scene.add(t,n,this.skyGroup),this.renderer=new m0({antialias:!0,canvas:this.canvas,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.handleResize(),window.addEventListener("resize",this.handleResize)}get aspect(){return this.canvas.width/this.canvas.height}setResizeHandler(e){this.resizeHandler=e,e(this.aspect)}render(e){this.updateSkyDecor(e),this.renderer.render(this.scene,e)}buildSkyDecor(){const e=Lx();e.position.copy(Ax),this.skyGroup.add(e);for(const t of Px){const n=Ux(t.pattern);this.cloudRigs.push({anchor:n,baseOffset:t.baseOffset.clone(),driftPhase:t.driftPhase,driftSpeed:t.driftSpeed}),this.skyGroup.add(n)}}updateSkyDecor(e){this.skyGroup.position.set(e.position.x,0,e.position.z);const t=(performance.now()-this.skyStartTime)/1e3;for(const n of this.cloudRigs){const r=(t*n.driftSpeed+n.driftPhase)%kc-kc/2;n.anchor.position.set(n.baseOffset.x+r,n.baseOffset.y,n.baseOffset.z)}}handleResize=()=>{const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.resizeHandler?.(e/t)}}function Lx(){const i=new Yn,e=ys(26,26,2.2,wx),t=ys(18,18,2.5,Cx),n=ys(4.5,4.5,2.8,zc),r=ys(4.5,4.5,2.8,zc);return n.position.set(-6,6,.3),r.position.set(4,-3,.3),i.add(e,t,n,r),i}function Ux(i){const e=new Yn,t=new wi({color:Rx,depthWrite:!1,fog:!1,opacity:.96,transparent:!0}),n=new wi({color:Ix,depthWrite:!1,fog:!1,opacity:.92,transparent:!0}),r=new vn(ji,Oa,ji),s=new vn(ji,Oa*.6,ji),a=(i[0].length-1)/2,o=(i.length-1)/2;for(let l=0;l<i.length;l+=1)for(let c=0;c<i[l].length;c+=1){if(i[l][c]!=="1")continue;const u=(c-a)*ji,d=(l-o)*ji,h=new Vt(r,t),m=new Vt(s,n);h.position.set(u,0,d),m.position.set(u,-Oa*.75,d),e.add(h,m)}return e}function ys(i,e,t,n){return new Vt(new vn(i,e,t),new wi({color:n,depthWrite:!1,fog:!1}))}const Nx=54,Fx=i=>{const e=i.getBoundingClientRect().width;if(e>0)return e;const t=Number.parseFloat(window.getComputedStyle(i).width);return Number.isFinite(t)&&t>0?t:Nx},Ox=i=>Math.round(Math.min(46,Math.max(28,Fx(i)*.74))),Fo=(i,e,t=!1)=>{const{button:n,count:r,icon:s,label:a}=e;if(i.count<=0){n.setAttribute("aria-label","Empty slot"),n.removeAttribute("title"),s.classList.remove("slot-icon--filled"),s.classList.remove("slot-icon--block","slot-icon--svg"),s.setAttribute("aria-hidden","true"),s.style.backgroundImage="",s.style.backgroundPosition="",s.style.backgroundRepeat="",s.style.backgroundSize="",s.style.width="",s.style.height="",r.textContent="",a&&(a.textContent="");return}const o=Tt.getName(i.itemId),l=Tt.getVisual(i.itemId);n.setAttribute("aria-label",`${o} x${i.count}`),n.title=o,s.classList.add("slot-icon--filled"),s.setAttribute("aria-hidden","false"),s.classList.remove("slot-icon--block","slot-icon--svg");const c=Ox(n);if(s.style.width=`${c}px`,s.style.height=`${c}px`,l.kind==="block"){s.classList.add("slot-icon--block");const u=Bu(l.texture),d=c/u.size;s.style.backgroundImage=`url("${y_()}")`,s.style.backgroundPosition=`-${u.x*d}px -${u.y*d}px`,s.style.backgroundRepeat="no-repeat",s.style.backgroundSize=`${Lo*d}px ${Uo*d}px`}else s.classList.add("slot-icon--svg"),s.style.backgroundImage=`url("${l.dataUrl}")`,s.style.backgroundPosition="center",s.style.backgroundRepeat="no-repeat",s.style.backgroundSize="100% 100%";r.textContent=i.count>1?String(i.count):"",a&&(a.textContent=t?o:"")};class Bx{root;slots=[];constructor(e){this.root=document.createElement("div"),this.root.className="hotbar",e.append(this.root);for(let t=0;t<9;t+=1){const n=document.createElement("div");n.className="hotbar-slot";const r=document.createElement("span");r.className="slot-icon";const s=document.createElement("span");s.className="slot-count",n.append(r,s),this.root.append(n),this.slots.push({baseClassName:"hotbar-slot",button:n,icon:r,count:s})}}render(e){this.root.classList.toggle("hotbar--hidden",e.isOpen),e.getHotbarSlots().forEach((t,n)=>{const r=this.slots[n];r.button.className=n===e.selectedHotbarIndex?"hotbar-slot hotbar-slot--selected":r.baseClassName,Fo(t,r)})}}const Ba=i=>"index"in i?`${i.section}:${i.index}`:i.section;class kx{overlay;heldPreview;heldPreviewCount;heldPreviewIcon;onSlotInteract;playerScreen;slotViews=new Map;tableScreen;mouseX=window.innerWidth/2;mouseY=window.innerHeight/2;constructor(e,t){this.onSlotInteract=t,this.overlay=document.createElement("div"),this.overlay.className="inventory-overlay",this.overlay.addEventListener("mousemove",n=>{this.mouseX=n.clientX,this.mouseY=n.clientY,this.positionHeldPreview()}),e.append(this.overlay),this.playerScreen=this.buildPlayerInventoryScreen(),this.tableScreen=this.buildCraftingTableScreen(),this.heldPreview=document.createElement("div"),this.heldPreview.className="inventory-held-preview",this.heldPreviewIcon=document.createElement("span"),this.heldPreviewIcon.className="slot-icon",this.heldPreviewCount=document.createElement("span"),this.heldPreviewCount.className="slot-count",this.heldPreview.append(this.heldPreviewIcon,this.heldPreviewCount),this.overlay.append(this.heldPreview)}render(e){if(this.overlay.classList.toggle("inventory-overlay--open",e.isOpen),this.playerScreen.classList.toggle("inventory-screen--active",e.screen==="inventory"),this.tableScreen.classList.toggle("inventory-screen--active",e.screen==="crafting_table"),e.getMainSlots().forEach((t,n)=>{this.renderSlot({section:"main",index:n},t)}),e.getHotbarSlots().forEach((t,n)=>{this.renderSlot({section:"hotbar",index:n},t,n===e.selectedHotbarIndex)}),e.playerCraft.forEach((t,n)=>{this.renderSlot({section:"playerCraft",index:n},t)}),e.tableCraft.forEach((t,n)=>{this.renderSlot({section:"tableCraft",index:n},t)}),this.renderSlot({section:"playerResult"},e.getPlayerCraftResult(),!1,!0),this.renderSlot({section:"tableResult"},e.getTableCraftResult(),!1,!0),!e.isOpen||!e.heldSlot){this.heldPreview.classList.remove("inventory-held-preview--visible");return}this.heldPreview.classList.add("inventory-held-preview--visible"),this.positionHeldPreview(),Fo(e.heldSlot,{button:this.heldPreview,icon:this.heldPreviewIcon,count:this.heldPreviewCount})}buildPlayerInventoryScreen(){const e=this.createScreen("Survival Inventory"),t=e.querySelector(".inventory-panel");if(!t)throw new Error("Inventory panel root was not created.");const n=document.createElement("div");n.className="inventory-layout",t.append(n);const r=document.createElement("div");r.className="inventory-left-column",n.append(r),r.append(this.createCharacterCard()),r.append(this.createCraftCard("Crafting",2,"playerCraft","playerResult"));const s=document.createElement("div");return s.className="inventory-right-column",n.append(s),s.append(this.createStorageCard("Inventory","main")),t.append(this.createFooterHotbar()),e}buildCraftingTableScreen(){const e=this.createScreen("Crafting Table"),t=e.querySelector(".inventory-panel");if(!t)throw new Error("Crafting table panel root was not created.");const n=this.createCraftCard("Crafting",3,"tableCraft","tableResult");return n.classList.add("inventory-card--wide"),t.append(n),t.append(this.createStorageCard("Inventory","main")),t.append(this.createFooterHotbar()),e}createScreen(e){const t=document.createElement("div");t.className="inventory-screen",t.dataset.screen=e.toLowerCase().replaceAll(" ","-"),this.overlay.append(t);const n=document.createElement("div");n.className="inventory-panel",t.append(n);const r=document.createElement("div");return r.className="inventory-header",r.textContent=e,n.append(r),t}createCharacterCard(){const e=document.createElement("div");e.className="inventory-card inventory-character-card";const t=document.createElement("div");t.className="inventory-label",t.textContent="Character",e.append(t);const n=document.createElement("div");n.className="inventory-character-preview",n.innerHTML=['<div class="inventory-character-head"></div>','<div class="inventory-character-body"></div>','<div class="inventory-character-arm inventory-character-arm--left"></div>','<div class="inventory-character-arm inventory-character-arm--right"></div>','<div class="inventory-character-leg inventory-character-leg--left"></div>','<div class="inventory-character-leg inventory-character-leg--right"></div>'].join(""),e.append(n);const r=document.createElement("div");return r.className="inventory-hint",r.textContent="LMB move stack  •  RMB split/place 1  •  Shift+Click quick move",e.append(r),e}createCraftCard(e,t,n,r){const s=document.createElement("div");s.className="inventory-card";const a=document.createElement("div");a.className="inventory-label",a.textContent=e,s.append(a);const o=document.createElement("div");o.className="crafting-cluster",s.append(o);const l=document.createElement("div");l.className=t===2?"crafting-grid crafting-grid--2":"crafting-grid crafting-grid--3",o.append(l);for(let u=0;u<t*t;u+=1)l.append(this.createSlotButton({section:n,index:u},"inventory-slot"));const c=document.createElement("div");return c.className="crafting-arrow",c.textContent="→",o.append(c),o.append(this.createSlotButton({section:r},"inventory-slot inventory-slot--result")),s}createStorageCard(e,t){const n=document.createElement("div");n.className="inventory-card inventory-storage-card";const r=document.createElement("div");r.className="inventory-label",r.textContent=e,n.append(r);const s=document.createElement("div");s.className="inventory-grid",n.append(s);for(let a=0;a<27;a+=1)s.append(this.createSlotButton({section:t,index:a},"inventory-slot"));return n}createFooterHotbar(){const e=document.createElement("div");e.className="inventory-footer";const t=document.createElement("div");t.className="inventory-label",t.textContent="Hotbar",e.append(t);const n=document.createElement("div");n.className="inventory-grid inventory-grid--hotbar",e.append(n);for(let r=0;r<9;r+=1)n.append(this.createSlotButton({section:"hotbar",index:r},"inventory-slot"));return e}createSlotButton(e,t){const n=document.createElement("button");n.type="button",n.className=t,n.dataset.slot=Ba(e);const r=document.createElement("span");r.className="slot-icon";const s=document.createElement("span");s.className="slot-count",n.append(r,s),n.addEventListener("mousedown",l=>{if(l.button!==0&&l.button!==2)return;l.preventDefault();const c={button:l.button===2?"right":"left",shiftKey:l.shiftKey};this.onSlotInteract(e,c)}),n.addEventListener("contextmenu",l=>{l.preventDefault()});const a=Ba(e),o=this.slotViews.get(a)??[];return o.push({button:n,icon:r,count:s,baseClassName:t}),this.slotViews.set(a,o),n}renderSlot(e,t,n=!1,r=!1){const s=this.slotViews.get(Ba(e))??[];for(const a of s)a.button.className=[a.baseClassName,n?"inventory-slot--selected":"",r&&t.count>0?"inventory-slot--result":""].filter(Boolean).join(" "),Fo(t,a)}positionHeldPreview(){this.heldPreview.style.left=`${this.mouseX+10}px`,this.heldPreview.style.top=`${this.mouseY+10}px`}}class zx{player;input;physics;camera;constructor(e,t,n,r){this.player=e,this.input=t,this.physics=n,this.camera=r}applyLook(e){this.player.yaw-=e.x*bc,this.player.pitch=yr(this.player.pitch-e.y*bc,-Math.PI/2+.01,Math.PI/2-.01)}fixedUpdate(e){const t=Number(this.input.isKeyDown("KeyW"))-Number(this.input.isKeyDown("KeyS")),n=Number(this.input.isKeyDown("KeyD"))-Number(this.input.isKeyDown("KeyA")),r=ex(this.player.yaw,t,n),s=this.physics.sampleWaterState(this.player);this.applyWaterState(s),s.isInWater?this.updateSwimming(r,e):this.updateWalking(r,t,n,e),this.physics.move(this.player,e),this.applyWaterState(this.physics.sampleWaterState(this.player)),this.camera.sync(this.player)}applyWaterState(e){this.player.isInWater=e.isInWater,this.player.headInWater=e.headInWater,this.player.waterSurfaceY=e.surfaceY,this.player.waterSubmersion=e.submersion,this.player.waterFlow.copy(e.flow)}updateWalking(e,t,n,r){const s=this.input.isKeyDown("ShiftLeft")||this.input.isKeyDown("ShiftRight")?M0:S0;e.lengthSq()>0&&e.normalize().multiplyScalar(s);const a=this.player.onGround?yc:yc*E0,o=Math.min(1,a*r);this.player.velocity.x+=(e.x-this.player.velocity.x)*o,this.player.velocity.z+=(e.z-this.player.velocity.z)*o,t===0&&n===0&&this.player.onGround&&(this.player.velocity.x*=.82,this.player.velocity.z*=.82),this.input.consumePressed("Space")&&this.player.onGround&&(this.player.velocity.y=y0,this.player.onGround=!1),this.player.velocity.y=Math.max(this.player.velocity.y-Mc*r,-50)}updateSwimming(e,t){const n=e.lengthSq()>0;n&&e.normalize().multiplyScalar(Da);const r=Math.min(1,b0*t);this.player.velocity.x+=(e.x-this.player.velocity.x)*r,this.player.velocity.z+=(e.z-this.player.velocity.z)*r;const s=Math.max(0,1-A0*t);n||(this.player.velocity.x*=s,this.player.velocity.z*=s);const a=this.input.isKeyDown("Space")?1:0,o=this.input.isKeyDown("ShiftLeft")||this.input.isKeyDown("ShiftRight")?1:0,l=yr((this.player.waterSubmersion-Au)/.28,0,1),c=o>0?.38:1,u=o>0?.14:1,d=Math.max(0,this.player.waterSubmersion-.45)*T0*c;let h=!1;const m=this.player.waterSurfaceY===null?0:(()=>{const y=this.player.waterSurfaceY-P0-this.player.position.y;h=y<-.04;const T=y>=0?y*fs:y*fs*.42;return yr(T*l*u,-fs*.38,fs*.6)})(),g=d+m+a*L0-o*D0-Mc*w0;this.player.velocity.y+=g*t,this.player.velocity.y*=Math.max(0,1-F0*t),a===0&&h&&this.player.velocity.y>0&&(this.player.velocity.y*=.72),o>0&&this.player.velocity.y>0&&(this.player.velocity.y*=.5),this.player.velocity.x+=this.player.waterFlow.x*Ec*Math.max(.15,this.player.waterSubmersion)*t,this.player.velocity.z+=this.player.waterFlow.z*Ec*Math.max(.15,this.player.waterSubmersion)*t;const M=Math.hypot(this.player.velocity.x,this.player.velocity.z),p=a>0?R0:C0;if(M>Da*1.35){const f=Da*1.35/M;this.player.velocity.x*=f,this.player.velocity.z*=f}this.player.velocity.y=yr(this.player.velocity.y,-6.2,p),(a>0||o>0)&&(this.player.onGround=!1)}}class Gx{world;constructor(e){this.world=e}cast(e,t,n){const r={x:Math.floor(e.x),y:Math.floor(e.y),z:Math.floor(e.z)},s=new N;for(let a=0;a<=n;a+=.1){s.copy(e).addScaledVector(t,a);const o={x:Math.floor(s.x),y:Math.floor(s.y),z:Math.floor(s.z)},l=this.world.getBlockId(o.x,o.y,o.z);if(Ft.isSolid(l))return{block:o,previous:{...r},blockId:l,distance:a};r.x=o.x,r.y=o.y,r.z=o.z}return null}}const rl=64,Hx=rl*hi,Vx=rl,Gc=[[32,2,28,17],[28,17,35,28],[35,28,31,45],[31,45,25,61],[28,17,15,21],[15,21,8,32],[8,32,17,43],[35,28,49,24],[49,24,58,14],[49,24,53,39],[17,43,10,56],[53,39,57,54],[24,9,16,6],[39,11,47,7],[23,33,14,35],[40,40,50,44],[28,52,18,56],[33,50,44,57],[21,27,18,15],[42,30,47,18]],Wx=()=>{const i=document.createElement("canvas");i.width=Hx,i.height=Vx;const e=i.getContext("2d");if(!e)throw new Error("2D canvas context is required for the breaking overlay atlas.");e.clearRect(0,0,i.width,i.height),e.lineCap="round",e.lineJoin="round";for(let n=0;n<hi;n+=1){const r=n*rl,s=Math.ceil((n+1)/hi*Gc.length);e.save(),e.translate(r,0);for(let a=0;a<s;a+=1){const[o,l,c,u]=Gc[a],d=n<3?2:n<7?2.5:3;e.beginPath(),e.strokeStyle="rgba(0, 0, 0, 0.55)",e.lineWidth=d+1.5,e.moveTo(o,l),e.lineTo(c,u),e.stroke(),e.beginPath(),e.strokeStyle=`rgba(255, 255, 255, ${.38+n*.045})`,e.lineWidth=d,e.moveTo(o,l),e.lineTo(c,u),e.stroke()}e.restore()}const t=new jo(i);return t.magFilter=ft,t.minFilter=ft,t.generateMipmaps=!1,t.colorSpace=Yt,t.wrapS=on,t.wrapT=on,t.repeat.set(1/hi,1),t.offset.set(0,0),t.needsUpdate=!0,t};class Xx{object;texture=Wx();constructor(){const e=new wi({alphaTest:.08,depthWrite:!1,map:this.texture,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,transparent:!0});this.object=new Vt(new vn(1.008,1.008,1.008),e),this.object.visible=!1}show(e,t,n,r){this.object.visible=!0,this.object.position.set(e+.5,t+.5,n+.5),this.setStage(r)}hide(){this.object.visible=!1}setStage(e){const t=Math.max(0,Math.min(hi-1,Math.floor(e)));this.texture.offset.x=t/hi}}class Yx{constructor(e){const t=document.createElement("div");t.className="crosshair",e.append(t)}}class qx{object;constructor(){const e=new od(new vn(1.01,1.01,1.01)),t=new fu({color:16777215});this.object=new sd(e,t),this.object.visible=!1}show(e,t,n){this.object.visible=!0,this.object.position.set(e+.5,t+.5,n+.5)}hide(){this.object.visible=!1}}const Kx={},Zx=new Map([[H.Grass,{dropItemId:A.Dirt,preferredTool:"shovel"}],[H.Dirt,{preferredTool:"shovel"}],[H.Stone,{dropItemId:A.Cobblestone,minHarvestLevel:1,preferredTool:"pickaxe",requiredTool:"pickaxe"}],[H.Cobblestone,{minHarvestLevel:1,preferredTool:"pickaxe",requiredTool:"pickaxe"}],[H.OakLog,{preferredTool:"axe"}],[H.OakLeaves,{dropItemId:A.Air}],[H.OakPlanks,{preferredTool:"axe"}],[H.Bedrock,{dropItemId:A.Air}],[H.Sand,{preferredTool:"shovel"}],[H.Gravel,{preferredTool:"shovel"}],[H.CoalOre,{dropItemId:A.Coal,minHarvestLevel:1,preferredTool:"pickaxe",requiredTool:"pickaxe"}],[H.IronOre,{minHarvestLevel:2,preferredTool:"pickaxe",requiredTool:"pickaxe"}],[H.GoldOre,{minHarvestLevel:3,preferredTool:"pickaxe",requiredTool:"pickaxe"}],[H.DiamondOre,{dropItemId:A.Diamond,minHarvestLevel:3,preferredTool:"pickaxe",requiredTool:"pickaxe"}],[H.Water,{dropItemId:A.Air}],[H.Glass,{dropItemId:A.Air}],[H.CraftingTable,{preferredTool:"axe"}],[H.Furnace,{minHarvestLevel:1,preferredTool:"pickaxe",requiredTool:"pickaxe"}],[H.Chest,{preferredTool:"axe"}]]),$x=i=>Zx.get(i)??Kx,sl=(i,e)=>{const t=Ft.getHardness(i);if(!Number.isFinite(t)||t<=0)return{canHarvest:!1,dropItemId:A.Air,durationSeconds:Number.POSITIVE_INFINITY,minHarvestLevel:0,preferredTool:null,requiredTool:null};const n=$x(i),r=Tt.getTool(e),s=n.preferredTool??null,a=n.requiredTool??null,o=n.minHarvestLevel??0,l=!!r&&s===r.type,c=!a||!!r&&r.type===a&&r.harvestLevel>=o,u=l?r.miningSpeed:1,d=Math.max(.18,t*(c?1.5:5)/u);return{canHarvest:c,dropItemId:c?n.dropItemId??i:A.Air,durationSeconds:d,minHarvestLevel:o,preferredTool:s,requiredTool:a}},jn=document.querySelector("#app");if(!jn)throw new Error('App root element "#app" was not found.');jn.replaceChildren();const Bn=new Dx(jn),Ln=new Ex(document);Ln.attachPointerLockTarget(Bn.canvas);const Sn=new z0(Bn.aspect);Bn.setResizeHandler(i=>{Sn.updateAspect(i)});const vt=new vx;vt.buildInitialWorld(el);Bn.scene.add(vt.group);const al=vt.getSpawnTransform(),Re=new k0(al.position);Re.yaw=al.yaw;Re.pitch=al.pitch;const jx=new Tx(vt),Hc=new zx(Re,Ln,jx,Sn),Jx=new Gx(vt),Ye=new Q_,Or=new yx(vt);new Yx(jn);const Qx=new Bx(jn),ev=new kx(jn,(i,e)=>{Ye.interact(i,e)}),Oo=new qx,ol=new Xx;Bn.scene.add(Oo.object);Bn.scene.add(ol.object);Bn.scene.add(Or.group);const ll=document.createElement("div");ll.className="hud-panel";jn.append(ll);const cl=document.createElement("div");cl.className="hud-help";cl.innerHTML=["<strong>WebCraft Playable Slice</strong>","Click to lock pointer","WASD move, Shift sprint / dive, Space jump / swim up","Hold left click to break, right click place / use table","Scroll or 1-9 to change slot, E inventory"].join("<br />");jn.append(cl);const zs=document.createElement("div");zs.className="water-overlay";jn.append(zs);Sn.sync(Re);let ka=0,Vc=performance.now(),tt=null,Gs=0,rn=null;const tv=new N,nv=(i,e)=>`${i.block.x},${i.block.y},${i.block.z},${i.blockId},${e}`,br=()=>{rn=null,Gs=0,ol.hide()},iv=()=>{for(let i=0;i<9;i+=1)Ln.consumePressed(`Digit${i+1}`)&&Ye.setSelectedHotbar(i)},rv=()=>{Ye.isOpen?Ye.close():Ye.togglePlayerInventory(),Ye.isOpen&&(document.exitPointerLock?.(),br())},sv=(i,e,t)=>{const n=Re.position.x-Re.halfWidth,r=Re.position.x+Re.halfWidth,s=Re.position.y,a=Re.position.y+Re.height,o=Re.position.z-Re.halfWidth,l=Re.position.z+Re.halfWidth;return n<i+1&&r>i&&s<e+1&&a>e&&o<t+1&&l>t},Ii=()=>{if(tt=Jx.cast(Sn.camera.position,Sn.camera.getWorldDirection(tv),6),tt){Oo.show(tt.block.x,tt.block.y,tt.block.z);return}Oo.hide()},av=()=>{if(!tt||tt.blockId===H.Bedrock)return!1;const i={...tt.block},e=sl(tt.blockId,Ye.getSelectedItemId()),t=Sn.camera.getWorldDirection(new N).setY(.4).normalize();return vt.setBlockId(i.x,i.y,i.z,H.Air)?(e.dropItemId!==A.Air&&Or.spawn(e.dropItemId,i.x,i.y,i.z,t),Ii(),!0):!1},ov=i=>{if(!Ln.isPointerLocked()||Ye.isOpen||!Ln.isMouseButtonDown(0)||!tt||tt.blockId===H.Bedrock){br();return}const e=Ye.getSelectedItemId(),t=sl(tt.blockId,e);if(!Number.isFinite(t.durationSeconds)){br();return}const n=nv(tt,e),r=t.durationSeconds;(!rn||rn.key!==n)&&(rn={durationSeconds:r,key:n,progressSeconds:0}),rn.durationSeconds=r,rn.progressSeconds=Math.min(rn.progressSeconds+i,rn.durationSeconds),Gs=rn.progressSeconds/rn.durationSeconds;const s=Math.min(hi-1,Math.floor(Gs*hi));ol.show(tt.block.x,tt.block.y,tt.block.z,s),!(rn.progressSeconds<rn.durationSeconds)&&(av(),br())},lv=()=>{if(!tt)return;const i=Ye.getSelectedPlaceBlockId();if(i===H.Air)return;const{x:e,y:t,z:n}=tt.previous;vt.getBlockId(e,t,n)===H.Air&&(sv(e,t,n)||vt.setBlockId(e,t,n,i)&&(Ye.consumeSelectedItem(),Ii()))};Bn.canvas.addEventListener("contextmenu",i=>{i.preventDefault()});Bn.canvas.addEventListener("mousedown",i=>{if(!(!Ln.isPointerLocked()||Ye.isOpen)&&i.button===2){if(tt?.blockId===H.CraftingTable){Ye.openCraftingTable(),document.exitPointerLock?.(),br();return}lv()}});window.addEventListener("wheel",i=>{Ye.isOpen||(Ye.cycleHotbar(i.deltaY>0?1:-1),i.preventDefault())},{passive:!1});const cv=i=>{const e=Sn.camera.getWorldDirection(new N).normalize(),t=Sn.camera.position.clone().addScaledVector(e,3),n=Math.floor(t.x),r=Math.floor(t.y),s=Math.floor(t.z);for(let a=-1;a<=1;a+=1)for(let o=-1;o<=1;o+=1)for(let l=-1;l<=1;l+=1)vt.setBlockId(n+a,r+o,s+l,H.Air);return vt.setBlockId(n,r,s,i),Ii(),{x:n,y:r,z:s}},uv=(i,e,t)=>{const n=vt.getSurfaceHeight(Math.floor(i),Math.floor(e))+1.05;return Re.position.set(i,t??n,e),Re.velocity.set(0,0,0),Re.onGround=!1,vt.updateStreaming(Re.position.x,Re.position.z,el),Sn.sync(Re),Ii(),{x:Re.position.x,y:Re.position.y,z:Re.position.z}},hv=(i,e,t,n)=>{const r=vt.setBlockId(i,e,t,n);return r&&Ii(),r},dv=(i,e)=>(Re.yaw=i,Re.pitch=e,Sn.sync(Re),Ii(),{pitch:Re.pitch,yaw:Re.yaw}),fv=()=>{const{x:i,y:e,z:t}=Re.position,n=tt?`${Ft.getName(tt.blockId)} @ ${tt.block.x},${tt.block.y},${tt.block.z}`:"none",r=Ye.getSelectedItemId(),s=tt?sl(tt.blockId,r):null,a=rn&&tt?`${Math.round(Gs*100)}%`:"idle",o=Ye.screen==="inventory"?"inventory open":Ye.screen==="crafting_table"?"crafting table open":Ln.isPointerLocked()?"locked":"click to play",l=Re.isInWater?`${Math.round(Re.waterSubmersion*100)}% ${Re.headInWater?"head-wet":"body-wet"}`:"dry",c=Re.isInWater?`${Re.waterFlow.x.toFixed(2)}, ${Re.waterFlow.z.toFixed(2)}`:"0.00, 0.00";return[`Pointer: ${o}`,`XYZ: ${i.toFixed(1)} ${e.toFixed(1)} ${t.toFixed(1)}`,`Chunk: ${vt.getChunkCoordinatesFor(i,t)}`,`Grounded: ${Re.onGround?"yes":"no"}`,`Water: ${l}`,`Current: ${c}`,`Target: ${n}`,`Mining: ${a}`,`Drop: ${!s||s.dropItemId===A.Air?"none":Tt.getName(s.dropItemId)}`,`Drops: ${Or.count}`,`Selected: ${r===A.Air?"hand":Tt.getName(r)}`].join("<br />")},Vu=()=>JSON.stringify({screen:Ye.screen,player:{headInWater:Re.headInWater,isInWater:Re.isInWater,onGround:Re.onGround,submersion:Number(Re.waterSubmersion.toFixed(3)),x:Number(Re.position.x.toFixed(2)),y:Number(Re.position.y.toFixed(2)),z:Number(Re.position.z.toFixed(2))},selected:Tt.getName(Ye.getSelectedItemId()),selectedIndex:Ye.selectedHotbarIndex,hotbar:Ye.getHotbarSlots().map(i=>i.count>0?{count:i.count,item:Tt.getName(i.itemId)}:null),held:Ye.heldSlot?{count:Ye.heldSlot.count,item:Tt.getName(Ye.heldSlot.itemId)}:null,playerCraft:Ye.playerCraft.map(i=>i.count>0?{count:i.count,item:Tt.getName(i.itemId)}:null),tableCraft:Ye.tableCraft.map(i=>i.count>0?{count:i.count,item:Tt.getName(i.itemId)}:null),target:tt?{item:Ft.getName(tt.blockId),x:tt.block.x,y:tt.block.y,z:tt.block.z}:null,water:{current:{x:Number(Re.waterFlow.x.toFixed(3)),z:Number(Re.waterFlow.z.toFixed(3))},headInWater:Re.headInWater,isInWater:Re.isInWater,submersion:Number(Re.waterSubmersion.toFixed(3))},drops:Or.count});window.__webcraftDebug={closeUi:()=>Ye.close(),getScreen:()=>Ye.screen,getLoadedChunkSummary:()=>vt.getLoadedChunkSummary(),getSurfaceColumn:(i,e)=>{const t=vt.getSurfaceColumn(Math.floor(i),Math.floor(e));return{height:t.height,topBlock:t.topBlock,waterLevel:t.waterLevel}},getWaterAnimationState:()=>vt.getWaterAnimationState(),getWaterTextureState:()=>vt.getWaterTextureState(),getWorldMetrics:(i=64)=>vt.getWorldMetrics(i),interactSlot:(i,e)=>Ye.interact(i,e),openCraftingTable:()=>Ye.openCraftingTable(),openInventory:()=>Ye.togglePlayerInventory(),placeDebugTarget:cv,renderGameToText:Vu,setBlockAt:hv,setView:dv,setSelectedHotbar:i=>Ye.setSelectedHotbar(i),teleportTo:uv};window.render_game_to_text=Vu;const Wu=i=>{const e=Math.min((i-Vc)/1e3,Tu);if(Vc=i,Ln.consumePressed("KeyE")&&rv(),iv(),Ye.isOpen)Ln.consumeLookDelta();else for(Hc.applyLook(Ln.consumeLookDelta()),ka+=e;ka>=Pa;)Hc.fixedUpdate(Pa),ka-=Pa;vt.update(e),vt.updateStreaming(Re.position.x,Re.position.z,el),Ii(),ov(e),Or.update(e,Re,Ye),ll.innerHTML=fv(),Qx.render(Ye),ev.render(Ye),zs.classList.toggle("water-overlay--submerged",Re.headInWater),zs.style.opacity=Re.headInWater?"0.58":Re.isInWater?"0.22":"0",Bn.render(Sn.camera),requestAnimationFrame(Wu)};requestAnimationFrame(Wu);
