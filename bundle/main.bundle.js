(function() {
(()=>{var Em=Object.create;var Bu=Object.defineProperty;var _m=Object.getOwnPropertyDescriptor;var km=Object.getOwnPropertyNames;var bm=Object.getPrototypeOf,Tm=Object.prototype.hasOwnProperty;var ta=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Sm=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of km(t))!Tm.call(e,a)&&a!==r&&Bu(e,a,{get:()=>t[a],enumerable:!(n=_m(t,a))||n.enumerable});return e};var ft=(e,t,r)=>(r=e!=null?Em(bm(e)):{},Sm(t||!e||!e.__esModule?Bu(r,"default",{value:e,enumerable:!0}):r,e));var Qu=ta(_e=>{"use strict";var Ai=Symbol.for("react.element"),Cm=Symbol.for("react.portal"),Am=Symbol.for("react.fragment"),Fm=Symbol.for("react.strict_mode"),Pm=Symbol.for("react.profiler"),Im=Symbol.for("react.provider"),Nm=Symbol.for("react.context"),Lm=Symbol.for("react.forward_ref"),Dm=Symbol.for("react.suspense"),Om=Symbol.for("react.memo"),Rm=Symbol.for("react.lazy"),Uu=Symbol.iterator;function Mm(e){return e===null||typeof e!="object"?null:(e=Uu&&e[Uu]||e["@@iterator"],typeof e=="function"?e:null)}var Wu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gu=Object.assign,Vu={};function Pa(e,t,r){this.props=e,this.context=t,this.refs=Vu,this.updater=r||Wu}Pa.prototype.isReactComponent={};Pa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xu(){}Xu.prototype=Pa.prototype;function c0(e,t,r){this.props=e,this.context=t,this.refs=Vu,this.updater=r||Wu}var f0=c0.prototype=new Xu;f0.constructor=c0;Gu(f0,Pa.prototype);f0.isPureReactComponent=!0;var zu=Array.isArray,ju=Object.prototype.hasOwnProperty,u0={current:null},$u={key:!0,ref:!0,__self:!0,__source:!0};function Yu(e,t,r){var n,a={},i=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)ju.call(t,n)&&!$u.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(s===1)a.children=r;else if(1<s){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];a.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)a[n]===void 0&&(a[n]=s[n]);return{$$typeof:Ai,type:e,key:i,ref:o,props:a,_owner:u0.current}}function Bm(e,t){return{$$typeof:Ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function d0(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ai}function Um(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Hu=/\/+/g;function l0(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Um(""+e.key):t.toString(36)}function Ko(e,t,r,n,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ai:case Cm:o=!0}}if(o)return o=e,a=a(o),e=n===""?"."+l0(o,0):n,zu(a)?(r="",e!=null&&(r=e.replace(Hu,"$&/")+"/"),Ko(a,t,r,"",function(f){return f})):a!=null&&(d0(a)&&(a=Bm(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Hu,"$&/")+"/")+e)),t.push(a)),1;if(o=0,n=n===""?".":n+":",zu(e))for(var s=0;s<e.length;s++){i=e[s];var l=n+l0(i,s);o+=Ko(i,t,r,l,a)}else if(l=Mm(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=n+l0(i,s++),o+=Ko(i,t,r,l,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Yo(e,t,r){if(e==null)return e;var n=[],a=0;return Ko(e,n,"","",function(i){return t.call(r,i,a++)}),n}function zm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var zt={current:null},Qo={transition:null},Hm={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:Qo,ReactCurrentOwner:u0};function Ku(){throw Error("act(...) is not supported in production builds of React.")}_e.Children={map:Yo,forEach:function(e,t,r){Yo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Yo(e,function(){t++}),t},toArray:function(e){return Yo(e,function(t){return t})||[]},only:function(e){if(!d0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_e.Component=Pa;_e.Fragment=Am;_e.Profiler=Pm;_e.PureComponent=c0;_e.StrictMode=Fm;_e.Suspense=Dm;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hm;_e.act=Ku;_e.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Gu({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=u0.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ju.call(t,l)&&!$u.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];n.children=s}return{$$typeof:Ai,type:e.type,key:a,ref:i,props:n,_owner:o}};_e.createContext=function(e){return e={$$typeof:Nm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Im,_context:e},e.Consumer=e};_e.createElement=Yu;_e.createFactory=function(e){var t=Yu.bind(null,e);return t.type=e,t};_e.createRef=function(){return{current:null}};_e.forwardRef=function(e){return{$$typeof:Lm,render:e}};_e.isValidElement=d0;_e.lazy=function(e){return{$$typeof:Rm,_payload:{_status:-1,_result:e},_init:zm}};_e.memo=function(e,t){return{$$typeof:Om,type:e,compare:t===void 0?null:t}};_e.startTransition=function(e){var t=Qo.transition;Qo.transition={};try{e()}finally{Qo.transition=t}};_e.unstable_act=Ku;_e.useCallback=function(e,t){return zt.current.useCallback(e,t)};_e.useContext=function(e){return zt.current.useContext(e)};_e.useDebugValue=function(){};_e.useDeferredValue=function(e){return zt.current.useDeferredValue(e)};_e.useEffect=function(e,t){return zt.current.useEffect(e,t)};_e.useId=function(){return zt.current.useId()};_e.useImperativeHandle=function(e,t,r){return zt.current.useImperativeHandle(e,t,r)};_e.useInsertionEffect=function(e,t){return zt.current.useInsertionEffect(e,t)};_e.useLayoutEffect=function(e,t){return zt.current.useLayoutEffect(e,t)};_e.useMemo=function(e,t){return zt.current.useMemo(e,t)};_e.useReducer=function(e,t,r){return zt.current.useReducer(e,t,r)};_e.useRef=function(e){return zt.current.useRef(e)};_e.useState=function(e){return zt.current.useState(e)};_e.useSyncExternalStore=function(e,t,r){return zt.current.useSyncExternalStore(e,t,r)};_e.useTransition=function(){return zt.current.useTransition()};_e.version="18.3.1"});var it=ta((h4,Ju)=>{"use strict";Ju.exports=Qu()});var sd=ta(Re=>{"use strict";function x0(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,a=e[n];if(0<Jo(a,t))e[n]=t,e[r]=a,r=n;else break e}}function Ar(e){return e.length===0?null:e[0]}function qo(e){if(e.length===0)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,a=e.length,i=a>>>1;n<i;){var o=2*(n+1)-1,s=e[o],l=o+1,f=e[l];if(0>Jo(s,r))l<a&&0>Jo(f,s)?(e[n]=f,e[l]=r,n=l):(e[n]=s,e[o]=r,n=o);else if(l<a&&0>Jo(f,r))e[n]=f,e[l]=r,n=l;else break e}}return t}function Jo(e,t){var r=e.sortIndex-t.sortIndex;return r!==0?r:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Zu=performance,Re.unstable_now=function(){return Zu.now()}):(h0=Date,qu=h0.now(),Re.unstable_now=function(){return h0.now()-qu});var Zu,h0,qu,Gr=[],kn=[],Wm=1,mr=null,Lt=3,es=!1,ra=!1,Pi=!1,rd=typeof setTimeout=="function"?setTimeout:null,nd=typeof clearTimeout=="function"?clearTimeout:null,ed=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m0(e){for(var t=Ar(kn);t!==null;){if(t.callback===null)qo(kn);else if(t.startTime<=e)qo(kn),t.sortIndex=t.expirationTime,x0(Gr,t);else break;t=Ar(kn)}}function v0(e){if(Pi=!1,m0(e),!ra)if(Ar(Gr)!==null)ra=!0,y0(w0);else{var t=Ar(kn);t!==null&&E0(v0,t.startTime-e)}}function w0(e,t){ra=!1,Pi&&(Pi=!1,nd(Ii),Ii=-1),es=!0;var r=Lt;try{for(m0(t),mr=Ar(Gr);mr!==null&&(!(mr.expirationTime>t)||e&&!od());){var n=mr.callback;if(typeof n=="function"){mr.callback=null,Lt=mr.priorityLevel;var a=n(mr.expirationTime<=t);t=Re.unstable_now(),typeof a=="function"?mr.callback=a:mr===Ar(Gr)&&qo(Gr),m0(t)}else qo(Gr);mr=Ar(Gr)}if(mr!==null)var i=!0;else{var o=Ar(kn);o!==null&&E0(v0,o.startTime-t),i=!1}return i}finally{mr=null,Lt=r,es=!1}}var ts=!1,Zo=null,Ii=-1,ad=5,id=-1;function od(){return!(Re.unstable_now()-id<ad)}function p0(){if(Zo!==null){var e=Re.unstable_now();id=e;var t=!0;try{t=Zo(!0,e)}finally{t?Fi():(ts=!1,Zo=null)}}else ts=!1}var Fi;typeof ed=="function"?Fi=function(){ed(p0)}:typeof MessageChannel<"u"?(g0=new MessageChannel,td=g0.port2,g0.port1.onmessage=p0,Fi=function(){td.postMessage(null)}):Fi=function(){rd(p0,0)};var g0,td;function y0(e){Zo=e,ts||(ts=!0,Fi())}function E0(e,t){Ii=rd(function(){e(Re.unstable_now())},t)}Re.unstable_IdlePriority=5;Re.unstable_ImmediatePriority=1;Re.unstable_LowPriority=4;Re.unstable_NormalPriority=3;Re.unstable_Profiling=null;Re.unstable_UserBlockingPriority=2;Re.unstable_cancelCallback=function(e){e.callback=null};Re.unstable_continueExecution=function(){ra||es||(ra=!0,y0(w0))};Re.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ad=0<e?Math.floor(1e3/e):5};Re.unstable_getCurrentPriorityLevel=function(){return Lt};Re.unstable_getFirstCallbackNode=function(){return Ar(Gr)};Re.unstable_next=function(e){switch(Lt){case 1:case 2:case 3:var t=3;break;default:t=Lt}var r=Lt;Lt=t;try{return e()}finally{Lt=r}};Re.unstable_pauseExecution=function(){};Re.unstable_requestPaint=function(){};Re.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=Lt;Lt=e;try{return t()}finally{Lt=r}};Re.unstable_scheduleCallback=function(e,t,r){var n=Re.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?n+r:n):r=n,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=r+a,e={id:Wm++,callback:t,priorityLevel:e,startTime:r,expirationTime:a,sortIndex:-1},r>n?(e.sortIndex=r,x0(kn,e),Ar(Gr)===null&&e===Ar(kn)&&(Pi?(nd(Ii),Ii=-1):Pi=!0,E0(v0,r-n))):(e.sortIndex=a,x0(Gr,e),ra||es||(ra=!0,y0(w0))),e};Re.unstable_shouldYield=od;Re.unstable_wrapCallback=function(e){var t=Lt;return function(){var r=Lt;Lt=t;try{return e.apply(this,arguments)}finally{Lt=r}}}});var cd=ta((g4,ld)=>{"use strict";ld.exports=sd()});var h1=ta(fr=>{"use strict";var Gm=it(),lr=cd();function re(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xh=new Set,qi={};function ga(e,t){Ja(e,t),Ja(e+"Capture",t)}function Ja(e,t){for(qi[e]=t,e=0;e<t.length;e++)xh.add(t[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),V0=Object.prototype.hasOwnProperty,Vm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fd={},ud={};function Xm(e){return V0.call(ud,e)?!0:V0.call(fd,e)?!1:Vm.test(e)?ud[e]=!0:(fd[e]=!0,!1)}function jm(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $m(e,t,r,n){if(t===null||typeof t>"u"||jm(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Gt(e,t,r,n,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Tt[e]=new Gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Tt[t]=new Gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Tt[e]=new Gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Tt[e]=new Gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Tt[e]=new Gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Tt[e]=new Gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Tt[e]=new Gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Tt[e]=new Gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Tt[e]=new Gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rc=/[\-:]([a-z])/g;function Mc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rc,Mc);Tt[t]=new Gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rc,Mc);Tt[t]=new Gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rc,Mc);Tt[t]=new Gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Tt[e]=new Gt(e,1,!1,e.toLowerCase(),null,!1,!1)});Tt.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Tt[e]=new Gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bc(e,t,r,n){var a=Tt.hasOwnProperty(t)?Tt[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($m(t,r,a,n)&&(r=null),n||a===null?Xm(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var dn=Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rs=Symbol.for("react.element"),La=Symbol.for("react.portal"),Da=Symbol.for("react.fragment"),Uc=Symbol.for("react.strict_mode"),X0=Symbol.for("react.profiler"),mh=Symbol.for("react.provider"),vh=Symbol.for("react.context"),zc=Symbol.for("react.forward_ref"),j0=Symbol.for("react.suspense"),$0=Symbol.for("react.suspense_list"),Hc=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var wh=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var dd=Symbol.iterator;function Ni(e){return e===null||typeof e!="object"?null:(e=dd&&e[dd]||e["@@iterator"],typeof e=="function"?e:null)}var Ke=Object.assign,_0;function zi(e){if(_0===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);_0=t&&t[1]||""}return`
`+_0+e}var k0=!1;function b0(e,t){if(!e||k0)return"";k0=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var n=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){n=f}e.call(t.prototype)}else{try{throw Error()}catch(f){n=f}e()}}catch(f){if(f&&n&&typeof f.stack=="string"){for(var a=f.stack.split(`
`),i=n.stack.split(`
`),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==i[s]){var l=`
`+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{k0=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?zi(e):""}function Ym(e){switch(e.tag){case 5:return zi(e.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 2:case 15:return e=b0(e.type,!1),e;case 11:return e=b0(e.type.render,!1),e;case 1:return e=b0(e.type,!0),e;default:return""}}function Y0(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Da:return"Fragment";case La:return"Portal";case X0:return"Profiler";case Uc:return"StrictMode";case j0:return"Suspense";case $0:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vh:return(e.displayName||"Context")+".Consumer";case mh:return(e._context.displayName||"Context")+".Provider";case zc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hc:return t=e.displayName||null,t!==null?t:Y0(e.type)||"Memo";case Tn:t=e._payload,e=e._init;try{return Y0(e(t))}catch{}}return null}function Km(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y0(t);case 8:return t===Uc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qm(e){var t=yh(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ns(e){e._valueTracker||(e._valueTracker=Qm(e))}function Eh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=yh(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Is(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function K0(e,t){var r=t.checked;return Ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function hd(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Un(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _h(e,t){t=t.checked,t!=null&&Bc(e,"checked",t,!1)}function Q0(e,t){_h(e,t);var r=Un(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?J0(e,t.type,r):t.hasOwnProperty("defaultValue")&&J0(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pd(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function J0(e,t,r){(t!=="number"||Is(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Hi=Array.isArray;function Xa(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Un(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Z0(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(re(91));return Ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gd(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(re(92));if(Hi(r)){if(1<r.length)throw Error(re(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Un(r)}}function kh(e,t){var r=Un(t.value),n=Un(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function xd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function q0(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var as,Th=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(as=as||document.createElement("div"),as.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=as.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function eo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jm=["Webkit","ms","Moz","O"];Object.keys(Vi).forEach(function(e){Jm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vi[t]=Vi[e]})});function Sh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Vi.hasOwnProperty(e)&&Vi[e]?(""+t).trim():t+"px"}function Ch(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=Sh(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var Zm=Ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ec(e,t){if(t){if(Zm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(re(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(re(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(re(61))}if(t.style!=null&&typeof t.style!="object")throw Error(re(62))}}function tc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rc=null;function Wc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nc=null,ja=null,$a=null;function md(e){if(e=wo(e)){if(typeof nc!="function")throw Error(re(280));var t=e.stateNode;t&&(t=il(t),nc(e.stateNode,e.type,t))}}function Ah(e){ja?$a?$a.push(e):$a=[e]:ja=e}function Fh(){if(ja){var e=ja,t=$a;if($a=ja=null,md(e),t)for(e=0;e<t.length;e++)md(t[e])}}function Ph(e,t){return e(t)}function Ih(){}var T0=!1;function Nh(e,t,r){if(T0)return e(t,r);T0=!0;try{return Ph(e,t,r)}finally{T0=!1,(ja!==null||$a!==null)&&(Ih(),Fh())}}function to(e,t){var r=e.stateNode;if(r===null)return null;var n=il(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(re(231,t,typeof r));return r}var ac=!1;if(ln)try{Ia={},Object.defineProperty(Ia,"passive",{get:function(){ac=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{ac=!1}var Ia;function qm(e,t,r,n,a,i,o,s,l){var f=Array.prototype.slice.call(arguments,3);try{t.apply(r,f)}catch(u){this.onError(u)}}var Xi=!1,Ns=null,Ls=!1,ic=null,ev={onError:function(e){Xi=!0,Ns=e}};function tv(e,t,r,n,a,i,o,s,l){Xi=!1,Ns=null,qm.apply(ev,arguments)}function rv(e,t,r,n,a,i,o,s,l){if(tv.apply(this,arguments),Xi){if(Xi){var f=Ns;Xi=!1,Ns=null}else throw Error(re(198));Ls||(Ls=!0,ic=f)}}function xa(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Lh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vd(e){if(xa(e)!==e)throw Error(re(188))}function nv(e){var t=e.alternate;if(!t){if(t=xa(e),t===null)throw Error(re(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return vd(a),e;if(i===n)return vd(a),t;i=i.sibling}throw Error(re(188))}if(r.return!==n.return)r=a,n=i;else{for(var o=!1,s=a.child;s;){if(s===r){o=!0,r=a,n=i;break}if(s===n){o=!0,n=a,r=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===r){o=!0,r=i,n=a;break}if(s===n){o=!0,n=i,r=a;break}s=s.sibling}if(!o)throw Error(re(189))}}if(r.alternate!==n)throw Error(re(190))}if(r.tag!==3)throw Error(re(188));return r.stateNode.current===r?e:t}function Dh(e){return e=nv(e),e!==null?Oh(e):null}function Oh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Oh(e);if(t!==null)return t;e=e.sibling}return null}var Rh=lr.unstable_scheduleCallback,wd=lr.unstable_cancelCallback,av=lr.unstable_shouldYield,iv=lr.unstable_requestPaint,nt=lr.unstable_now,ov=lr.unstable_getCurrentPriorityLevel,Gc=lr.unstable_ImmediatePriority,Mh=lr.unstable_UserBlockingPriority,Ds=lr.unstable_NormalPriority,sv=lr.unstable_LowPriority,Bh=lr.unstable_IdlePriority,tl=null,$r=null;function lv(e){if($r&&typeof $r.onCommitFiberRoot=="function")try{$r.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Lr=Math.clz32?Math.clz32:uv,cv=Math.log,fv=Math.LN2;function uv(e){return e>>>=0,e===0?32:31-(cv(e)/fv|0)|0}var is=64,os=4194304;function Wi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Os(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,i=e.pingedLanes,o=r&268435455;if(o!==0){var s=o&~a;s!==0?n=Wi(s):(i&=o,i!==0&&(n=Wi(i)))}else o=r&~a,o!==0?n=Wi(o):i!==0&&(n=Wi(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Lr(t),a=1<<r,n|=e[r],t&=~a;return n}function dv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hv(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Lr(i),s=1<<o,l=a[o];l===-1?(!(s&r)||s&n)&&(a[o]=dv(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function oc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uh(){var e=is;return is<<=1,!(is&4194240)&&(is=64),e}function S0(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function mo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lr(t),e[t]=r}function pv(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Lr(r),i=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~i}}function Vc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Lr(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var Ce=0;function zh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hh,Xc,Wh,Gh,Vh,sc=!1,ss=[],In=null,Nn=null,Ln=null,ro=new Map,no=new Map,Cn=[],gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yd(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":ro.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(t.pointerId)}}function Li(e,t,r,n,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},t!==null&&(t=wo(t),t!==null&&Xc(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function xv(e,t,r,n,a){switch(t){case"focusin":return In=Li(In,e,t,r,n,a),!0;case"dragenter":return Nn=Li(Nn,e,t,r,n,a),!0;case"mouseover":return Ln=Li(Ln,e,t,r,n,a),!0;case"pointerover":var i=a.pointerId;return ro.set(i,Li(ro.get(i)||null,e,t,r,n,a)),!0;case"gotpointercapture":return i=a.pointerId,no.set(i,Li(no.get(i)||null,e,t,r,n,a)),!0}return!1}function Xh(e){var t=ia(e.target);if(t!==null){var r=xa(t);if(r!==null){if(t=r.tag,t===13){if(t=Lh(r),t!==null){e.blockedOn=t,Vh(e.priority,function(){Wh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Es(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=lc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);rc=n,r.target.dispatchEvent(n),rc=null}else return t=wo(r),t!==null&&Xc(t),e.blockedOn=r,!1;t.shift()}return!0}function Ed(e,t,r){Es(e)&&r.delete(t)}function mv(){sc=!1,In!==null&&Es(In)&&(In=null),Nn!==null&&Es(Nn)&&(Nn=null),Ln!==null&&Es(Ln)&&(Ln=null),ro.forEach(Ed),no.forEach(Ed)}function Di(e,t){e.blockedOn===t&&(e.blockedOn=null,sc||(sc=!0,lr.unstable_scheduleCallback(lr.unstable_NormalPriority,mv)))}function ao(e){function t(a){return Di(a,e)}if(0<ss.length){Di(ss[0],e);for(var r=1;r<ss.length;r++){var n=ss[r];n.blockedOn===e&&(n.blockedOn=null)}}for(In!==null&&Di(In,e),Nn!==null&&Di(Nn,e),Ln!==null&&Di(Ln,e),ro.forEach(t),no.forEach(t),r=0;r<Cn.length;r++)n=Cn[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Cn.length&&(r=Cn[0],r.blockedOn===null);)Xh(r),r.blockedOn===null&&Cn.shift()}var Ya=dn.ReactCurrentBatchConfig,Rs=!0;function vv(e,t,r,n){var a=Ce,i=Ya.transition;Ya.transition=null;try{Ce=1,jc(e,t,r,n)}finally{Ce=a,Ya.transition=i}}function wv(e,t,r,n){var a=Ce,i=Ya.transition;Ya.transition=null;try{Ce=4,jc(e,t,r,n)}finally{Ce=a,Ya.transition=i}}function jc(e,t,r,n){if(Rs){var a=lc(e,t,r,n);if(a===null)L0(e,t,n,Ms,r),yd(e,n);else if(xv(a,e,t,r,n))n.stopPropagation();else if(yd(e,n),t&4&&-1<gv.indexOf(e)){for(;a!==null;){var i=wo(a);if(i!==null&&Hh(i),i=lc(e,t,r,n),i===null&&L0(e,t,n,Ms,r),i===a)break;a=i}a!==null&&n.stopPropagation()}else L0(e,t,n,null,r)}}var Ms=null;function lc(e,t,r,n){if(Ms=null,e=Wc(n),e=ia(e),e!==null)if(t=xa(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Lh(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ms=e,null}function jh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ov()){case Gc:return 1;case Mh:return 4;case Ds:case sv:return 16;case Bh:return 536870912;default:return 16}default:return 16}}var Fn=null,$c=null,_s=null;function $h(){if(_s)return _s;var e,t=$c,r=t.length,n,a="value"in Fn?Fn.value:Fn.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===a[i-n];n++);return _s=a.slice(e,1<n?1-n:void 0)}function ks(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ls(){return!0}function _d(){return!1}function cr(e){function t(r,n,a,i,o){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ls:_d,this.isPropagationStopped=_d,this}return Ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),t}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yc=cr(ai),vo=Ke({},ai,{view:0,detail:0}),yv=cr(vo),C0,A0,Oi,rl=Ke({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oi&&(Oi&&e.type==="mousemove"?(C0=e.screenX-Oi.screenX,A0=e.screenY-Oi.screenY):A0=C0=0,Oi=e),C0)},movementY:function(e){return"movementY"in e?e.movementY:A0}}),kd=cr(rl),Ev=Ke({},rl,{dataTransfer:0}),_v=cr(Ev),kv=Ke({},vo,{relatedTarget:0}),F0=cr(kv),bv=Ke({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),Tv=cr(bv),Sv=Ke({},ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cv=cr(Sv),Av=Ke({},ai,{data:0}),bd=cr(Av),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Iv[e])?!!t[e]:!1}function Kc(){return Nv}var Lv=Ke({},vo,{key:function(e){if(e.key){var t=Fv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(e){return e.type==="keypress"?ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dv=cr(Lv),Ov=Ke({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=cr(Ov),Rv=Ke({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),Mv=cr(Rv),Bv=Ke({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uv=cr(Bv),zv=Ke({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=cr(zv),Wv=[9,13,27,32],Qc=ln&&"CompositionEvent"in window,ji=null;ln&&"documentMode"in document&&(ji=document.documentMode);var Gv=ln&&"TextEvent"in window&&!ji,Yh=ln&&(!Qc||ji&&8<ji&&11>=ji),Sd=" ",Cd=!1;function Kh(e,t){switch(e){case"keyup":return Wv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oa=!1;function Vv(e,t){switch(e){case"compositionend":return Qh(t);case"keypress":return t.which!==32?null:(Cd=!0,Sd);case"textInput":return e=t.data,e===Sd&&Cd?null:e;default:return null}}function Xv(e,t){if(Oa)return e==="compositionend"||!Qc&&Kh(e,t)?(e=$h(),_s=$c=Fn=null,Oa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yh&&t.locale!=="ko"?null:t.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jv[e.type]:t==="textarea"}function Jh(e,t,r,n){Ah(n),t=Bs(t,"onChange"),0<t.length&&(r=new Yc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var $i=null,io=null;function $v(e){lp(e,0)}function nl(e){var t=Ba(e);if(Eh(t))return e}function Yv(e,t){if(e==="change")return t}var Zh=!1;ln&&(ln?(fs="oninput"in document,fs||(P0=document.createElement("div"),P0.setAttribute("oninput","return;"),fs=typeof P0.oninput=="function"),cs=fs):cs=!1,Zh=cs&&(!document.documentMode||9<document.documentMode));var cs,fs,P0;function Fd(){$i&&($i.detachEvent("onpropertychange",qh),io=$i=null)}function qh(e){if(e.propertyName==="value"&&nl(io)){var t=[];Jh(t,io,e,Wc(e)),Nh($v,t)}}function Kv(e,t,r){e==="focusin"?(Fd(),$i=t,io=r,$i.attachEvent("onpropertychange",qh)):e==="focusout"&&Fd()}function Qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(io)}function Jv(e,t){if(e==="click")return nl(t)}function Zv(e,t){if(e==="input"||e==="change")return nl(t)}function qv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Or=typeof Object.is=="function"?Object.is:qv;function oo(e,t){if(Or(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!V0.call(t,a)||!Or(e[a],t[a]))return!1}return!0}function Pd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Id(e,t){var r=Pd(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Pd(r)}}function ep(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ep(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tp(){for(var e=window,t=Is();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Is(e.document)}return t}function Jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function e2(e){var t=tp(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ep(r.ownerDocument.documentElement,r)){if(n!==null&&Jc(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(n.start,a);n=n.end===void 0?i:Math.min(n.end,a),!e.extend&&i>n&&(a=n,n=i,i=a),a=Id(r,i);var o=Id(r,n);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var t2=ln&&"documentMode"in document&&11>=document.documentMode,Ra=null,cc=null,Yi=null,fc=!1;function Nd(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;fc||Ra==null||Ra!==Is(n)||(n=Ra,"selectionStart"in n&&Jc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Yi&&oo(Yi,n)||(Yi=n,n=Bs(cc,"onSelect"),0<n.length&&(t=new Yc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Ra)))}function us(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Ma={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionend:us("Transition","TransitionEnd")},I0={},rp={};ln&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete Ma.animationend.animation,delete Ma.animationiteration.animation,delete Ma.animationstart.animation),"TransitionEvent"in window||delete Ma.transitionend.transition);function al(e){if(I0[e])return I0[e];if(!Ma[e])return e;var t=Ma[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in rp)return I0[e]=t[r];return e}var np=al("animationend"),ap=al("animationiteration"),ip=al("animationstart"),op=al("transitionend"),sp=new Map,Ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(e,t){sp.set(e,t),ga(t,[e])}for(ds=0;ds<Ld.length;ds++)hs=Ld[ds],Dd=hs.toLowerCase(),Od=hs[0].toUpperCase()+hs.slice(1),Hn(Dd,"on"+Od);var hs,Dd,Od,ds;Hn(np,"onAnimationEnd");Hn(ap,"onAnimationIteration");Hn(ip,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(op,"onTransitionEnd");Ja("onMouseEnter",["mouseout","mouseover"]);Ja("onMouseLeave",["mouseout","mouseover"]);Ja("onPointerEnter",["pointerout","pointerover"]);Ja("onPointerLeave",["pointerout","pointerover"]);ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ga("onBeforeInput",["compositionend","keypress","textInput","paste"]);ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function Rd(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,rv(n,t,void 0,e),e.currentTarget=null}function lp(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],l=s.instance,f=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;Rd(a,s,f),i=l}else for(o=0;o<n.length;o++){if(s=n[o],l=s.instance,f=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;Rd(a,s,f),i=l}}}if(Ls)throw e=ic,Ls=!1,ic=null,e}function He(e,t){var r=t[gc];r===void 0&&(r=t[gc]=new Set);var n=e+"__bubble";r.has(n)||(cp(t,e,2,!1),r.add(n))}function N0(e,t,r){var n=0;t&&(n|=4),cp(r,e,n,t)}var ps="_reactListening"+Math.random().toString(36).slice(2);function so(e){if(!e[ps]){e[ps]=!0,xh.forEach(function(r){r!=="selectionchange"&&(r2.has(r)||N0(r,!1,e),N0(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ps]||(t[ps]=!0,N0("selectionchange",!1,t))}}function cp(e,t,r,n){switch(jh(t)){case 1:var a=vv;break;case 4:a=wv;break;default:a=jc}r=a.bind(null,t,r,e),a=void 0,!ac||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function L0(e,t,r,n,a){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;o=o.return}for(;s!==null;){if(o=ia(s),o===null)return;if(l=o.tag,l===5||l===6){n=i=o;continue e}s=s.parentNode}}n=n.return}Nh(function(){var f=i,u=Wc(r),g=[];e:{var d=sp.get(e);if(d!==void 0){var p=Yc,x=e;switch(e){case"keypress":if(ks(r)===0)break e;case"keydown":case"keyup":p=Dv;break;case"focusin":x="focus",p=F0;break;case"focusout":x="blur",p=F0;break;case"beforeblur":case"afterblur":p=F0;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=_v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Mv;break;case np:case ap:case ip:p=Tv;break;case op:p=Uv;break;case"scroll":p=yv;break;case"wheel":p=Hv;break;case"copy":case"cut":case"paste":p=Cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Td}var h=(t&4)!==0,v=!h&&e==="scroll",w=h?d!==null?d+"Capture":null:d;h=[];for(var m=f,E;m!==null;){E=m;var F=E.stateNode;if(E.tag===5&&F!==null&&(E=F,w!==null&&(F=to(m,w),F!=null&&h.push(lo(m,F,E)))),v)break;m=m.return}0<h.length&&(d=new p(d,x,null,r,u),g.push({event:d,listeners:h}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&r!==rc&&(x=r.relatedTarget||r.fromElement)&&(ia(x)||x[cn]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(x=r.relatedTarget||r.toElement,p=f,x=x?ia(x):null,x!==null&&(v=xa(x),x!==v||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=f),p!==x)){if(h=kd,F="onMouseLeave",w="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(h=Td,F="onPointerLeave",w="onPointerEnter",m="pointer"),v=p==null?d:Ba(p),E=x==null?d:Ba(x),d=new h(F,m+"leave",p,r,u),d.target=v,d.relatedTarget=E,F=null,ia(u)===f&&(h=new h(w,m+"enter",x,r,u),h.target=E,h.relatedTarget=v,F=h),v=F,p&&x)t:{for(h=p,w=x,m=0,E=h;E;E=Na(E))m++;for(E=0,F=w;F;F=Na(F))E++;for(;0<m-E;)h=Na(h),m--;for(;0<E-m;)w=Na(w),E--;for(;m--;){if(h===w||w!==null&&h===w.alternate)break t;h=Na(h),w=Na(w)}h=null}else h=null;p!==null&&Md(g,d,p,h,!1),x!==null&&v!==null&&Md(g,v,x,h,!0)}}e:{if(d=f?Ba(f):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var P=Yv;else if(Ad(d))if(Zh)P=Zv;else{P=Qv;var D=Kv}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=Jv);if(P&&(P=P(e,f))){Jh(g,P,r,u);break e}D&&D(e,d,f),e==="focusout"&&(D=d._wrapperState)&&D.controlled&&d.type==="number"&&J0(d,"number",d.value)}switch(D=f?Ba(f):window,e){case"focusin":(Ad(D)||D.contentEditable==="true")&&(Ra=D,cc=f,Yi=null);break;case"focusout":Yi=cc=Ra=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Nd(g,r,u);break;case"selectionchange":if(t2)break;case"keydown":case"keyup":Nd(g,r,u)}var k;if(Qc)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Oa?Kh(e,r)&&(L="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(Yh&&r.locale!=="ko"&&(Oa||L!=="onCompositionStart"?L==="onCompositionEnd"&&Oa&&(k=$h()):(Fn=u,$c="value"in Fn?Fn.value:Fn.textContent,Oa=!0)),D=Bs(f,L),0<D.length&&(L=new bd(L,e,null,r,u),g.push({event:L,listeners:D}),k?L.data=k:(k=Qh(r),k!==null&&(L.data=k)))),(k=Gv?Vv(e,r):Xv(e,r))&&(f=Bs(f,"onBeforeInput"),0<f.length&&(u=new bd("onBeforeInput","beforeinput",null,r,u),g.push({event:u,listeners:f}),u.data=k))}lp(g,t)})}function lo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Bs(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=to(e,r),i!=null&&n.unshift(lo(e,i,a)),i=to(e,t),i!=null&&n.push(lo(e,i,a))),e=e.return}return n}function Na(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Md(e,t,r,n,a){for(var i=t._reactName,o=[];r!==null&&r!==n;){var s=r,l=s.alternate,f=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&f!==null&&(s=f,a?(l=to(r,i),l!=null&&o.unshift(lo(r,l,s))):a||(l=to(r,i),l!=null&&o.push(lo(r,l,s)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var n2=/\r\n?/g,a2=/\u0000|\uFFFD/g;function Bd(e){return(typeof e=="string"?e:""+e).replace(n2,`
`).replace(a2,"")}function gs(e,t,r){if(t=Bd(t),Bd(e)!==t&&r)throw Error(re(425))}function Us(){}var uc=null,dc=null;function hc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,i2=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,o2=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(e){return Ud.resolve(null).then(e).catch(s2)}:pc;function s2(e){setTimeout(function(){throw e})}function D0(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),ao(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);ao(t)}function Dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ii=Math.random().toString(36).slice(2),jr="__reactFiber$"+ii,co="__reactProps$"+ii,cn="__reactContainer$"+ii,gc="__reactEvents$"+ii,l2="__reactListeners$"+ii,c2="__reactHandles$"+ii;function ia(e){var t=e[jr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[cn]||r[jr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=zd(e);e!==null;){if(r=e[jr])return r;e=zd(e)}return t}e=r,r=e.parentNode}return null}function wo(e){return e=e[jr]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ba(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(re(33))}function il(e){return e[co]||null}var xc=[],Ua=-1;function Wn(e){return{current:e}}function We(e){0>Ua||(e.current=xc[Ua],xc[Ua]=null,Ua--)}function Me(e,t){Ua++,xc[Ua]=e.current,e.current=t}var zn={},Mt=Wn(zn),Jt=Wn(!1),fa=zn;function Za(e,t){var r=e.type.contextTypes;if(!r)return zn;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Zt(e){return e=e.childContextTypes,e!=null}function zs(){We(Jt),We(Mt)}function Hd(e,t,r){if(Mt.current!==zn)throw Error(re(168));Me(Mt,t),Me(Jt,r)}function fp(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(re(108,Km(e)||"Unknown",a));return Ke({},r,n)}function Hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,fa=Mt.current,Me(Mt,e),Me(Jt,Jt.current),!0}function Wd(e,t,r){var n=e.stateNode;if(!n)throw Error(re(169));r?(e=fp(e,t,fa),n.__reactInternalMemoizedMergedChildContext=e,We(Jt),We(Mt),Me(Mt,e)):We(Jt),Me(Jt,r)}var nn=null,ol=!1,O0=!1;function up(e){nn===null?nn=[e]:nn.push(e)}function f2(e){ol=!0,up(e)}function Gn(){if(!O0&&nn!==null){O0=!0;var e=0,t=Ce;try{var r=nn;for(Ce=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}nn=null,ol=!1}catch(a){throw nn!==null&&(nn=nn.slice(e+1)),Rh(Gc,Gn),a}finally{Ce=t,O0=!1}}return null}var za=[],Ha=0,Ws=null,Gs=0,vr=[],wr=0,ua=null,an=1,on="";function na(e,t){za[Ha++]=Gs,za[Ha++]=Ws,Ws=e,Gs=t}function dp(e,t,r){vr[wr++]=an,vr[wr++]=on,vr[wr++]=ua,ua=e;var n=an;e=on;var a=32-Lr(n)-1;n&=~(1<<a),r+=1;var i=32-Lr(t)+a;if(30<i){var o=a-a%5;i=(n&(1<<o)-1).toString(32),n>>=o,a-=o,an=1<<32-Lr(t)+a|r<<a|n,on=i+e}else an=1<<i|r<<a|n,on=e}function Zc(e){e.return!==null&&(na(e,1),dp(e,1,0))}function qc(e){for(;e===Ws;)Ws=za[--Ha],za[Ha]=null,Gs=za[--Ha],za[Ha]=null;for(;e===ua;)ua=vr[--wr],vr[wr]=null,on=vr[--wr],vr[wr]=null,an=vr[--wr],vr[wr]=null}var sr=null,or=null,je=!1,Nr=null;function hp(e,t){var r=yr(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Gd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,sr=e,or=Dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,sr=e,or=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ua!==null?{id:an,overflow:on}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=yr(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,sr=e,or=null,!0):!1;default:return!1}}function mc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vc(e){if(je){var t=or;if(t){var r=t;if(!Gd(e,t)){if(mc(e))throw Error(re(418));t=Dn(r.nextSibling);var n=sr;t&&Gd(e,t)?hp(n,r):(e.flags=e.flags&-4097|2,je=!1,sr=e)}}else{if(mc(e))throw Error(re(418));e.flags=e.flags&-4097|2,je=!1,sr=e}}}function Vd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;sr=e}function xs(e){if(e!==sr)return!1;if(!je)return Vd(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hc(e.type,e.memoizedProps)),t&&(t=or)){if(mc(e))throw pp(),Error(re(418));for(;t;)hp(e,t),t=Dn(t.nextSibling)}if(Vd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(re(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){or=Dn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}or=null}}else or=sr?Dn(e.stateNode.nextSibling):null;return!0}function pp(){for(var e=or;e;)e=Dn(e.nextSibling)}function qa(){or=sr=null,je=!1}function ef(e){Nr===null?Nr=[e]:Nr.push(e)}var u2=dn.ReactCurrentBatchConfig;function Ri(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(re(309));var n=r.stateNode}if(!n)throw Error(re(147,e));var a=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=a.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(re(284));if(!r._owner)throw Error(re(290,e))}return e}function ms(e,t){throw e=Object.prototype.toString.call(t),Error(re(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xd(e){var t=e._init;return t(e._payload)}function gp(e){function t(w,m){if(e){var E=w.deletions;E===null?(w.deletions=[m],w.flags|=16):E.push(m)}}function r(w,m){if(!e)return null;for(;m!==null;)t(w,m),m=m.sibling;return null}function n(w,m){for(w=new Map;m!==null;)m.key!==null?w.set(m.key,m):w.set(m.index,m),m=m.sibling;return w}function a(w,m){return w=Bn(w,m),w.index=0,w.sibling=null,w}function i(w,m,E){return w.index=E,e?(E=w.alternate,E!==null?(E=E.index,E<m?(w.flags|=2,m):E):(w.flags|=2,m)):(w.flags|=1048576,m)}function o(w){return e&&w.alternate===null&&(w.flags|=2),w}function s(w,m,E,F){return m===null||m.tag!==6?(m=W0(E,w.mode,F),m.return=w,m):(m=a(m,E),m.return=w,m)}function l(w,m,E,F){var P=E.type;return P===Da?u(w,m,E.props.children,F,E.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Tn&&Xd(P)===m.type)?(F=a(m,E.props),F.ref=Ri(w,m,E),F.return=w,F):(F=Ps(E.type,E.key,E.props,null,w.mode,F),F.ref=Ri(w,m,E),F.return=w,F)}function f(w,m,E,F){return m===null||m.tag!==4||m.stateNode.containerInfo!==E.containerInfo||m.stateNode.implementation!==E.implementation?(m=G0(E,w.mode,F),m.return=w,m):(m=a(m,E.children||[]),m.return=w,m)}function u(w,m,E,F,P){return m===null||m.tag!==7?(m=ca(E,w.mode,F,P),m.return=w,m):(m=a(m,E),m.return=w,m)}function g(w,m,E){if(typeof m=="string"&&m!==""||typeof m=="number")return m=W0(""+m,w.mode,E),m.return=w,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case rs:return E=Ps(m.type,m.key,m.props,null,w.mode,E),E.ref=Ri(w,null,m),E.return=w,E;case La:return m=G0(m,w.mode,E),m.return=w,m;case Tn:var F=m._init;return g(w,F(m._payload),E)}if(Hi(m)||Ni(m))return m=ca(m,w.mode,E,null),m.return=w,m;ms(w,m)}return null}function d(w,m,E,F){var P=m!==null?m.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return P!==null?null:s(w,m,""+E,F);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case rs:return E.key===P?l(w,m,E,F):null;case La:return E.key===P?f(w,m,E,F):null;case Tn:return P=E._init,d(w,m,P(E._payload),F)}if(Hi(E)||Ni(E))return P!==null?null:u(w,m,E,F,null);ms(w,E)}return null}function p(w,m,E,F,P){if(typeof F=="string"&&F!==""||typeof F=="number")return w=w.get(E)||null,s(m,w,""+F,P);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case rs:return w=w.get(F.key===null?E:F.key)||null,l(m,w,F,P);case La:return w=w.get(F.key===null?E:F.key)||null,f(m,w,F,P);case Tn:var D=F._init;return p(w,m,E,D(F._payload),P)}if(Hi(F)||Ni(F))return w=w.get(E)||null,u(m,w,F,P,null);ms(m,F)}return null}function x(w,m,E,F){for(var P=null,D=null,k=m,L=m=0,M=null;k!==null&&L<E.length;L++){k.index>L?(M=k,k=null):M=k.sibling;var R=d(w,k,E[L],F);if(R===null){k===null&&(k=M);break}e&&k&&R.alternate===null&&t(w,k),m=i(R,m,L),D===null?P=R:D.sibling=R,D=R,k=M}if(L===E.length)return r(w,k),je&&na(w,L),P;if(k===null){for(;L<E.length;L++)k=g(w,E[L],F),k!==null&&(m=i(k,m,L),D===null?P=k:D.sibling=k,D=k);return je&&na(w,L),P}for(k=n(w,k);L<E.length;L++)M=p(k,w,L,E[L],F),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?L:M.key),m=i(M,m,L),D===null?P=M:D.sibling=M,D=M);return e&&k.forEach(function(X){return t(w,X)}),je&&na(w,L),P}function h(w,m,E,F){var P=Ni(E);if(typeof P!="function")throw Error(re(150));if(E=P.call(E),E==null)throw Error(re(151));for(var D=P=null,k=m,L=m=0,M=null,R=E.next();k!==null&&!R.done;L++,R=E.next()){k.index>L?(M=k,k=null):M=k.sibling;var X=d(w,k,R.value,F);if(X===null){k===null&&(k=M);break}e&&k&&X.alternate===null&&t(w,k),m=i(X,m,L),D===null?P=X:D.sibling=X,D=X,k=M}if(R.done)return r(w,k),je&&na(w,L),P;if(k===null){for(;!R.done;L++,R=E.next())R=g(w,R.value,F),R!==null&&(m=i(R,m,L),D===null?P=R:D.sibling=R,D=R);return je&&na(w,L),P}for(k=n(w,k);!R.done;L++,R=E.next())R=p(k,w,L,R.value,F),R!==null&&(e&&R.alternate!==null&&k.delete(R.key===null?L:R.key),m=i(R,m,L),D===null?P=R:D.sibling=R,D=R);return e&&k.forEach(function(J){return t(w,J)}),je&&na(w,L),P}function v(w,m,E,F){if(typeof E=="object"&&E!==null&&E.type===Da&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case rs:e:{for(var P=E.key,D=m;D!==null;){if(D.key===P){if(P=E.type,P===Da){if(D.tag===7){r(w,D.sibling),m=a(D,E.props.children),m.return=w,w=m;break e}}else if(D.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Tn&&Xd(P)===D.type){r(w,D.sibling),m=a(D,E.props),m.ref=Ri(w,D,E),m.return=w,w=m;break e}r(w,D);break}else t(w,D);D=D.sibling}E.type===Da?(m=ca(E.props.children,w.mode,F,E.key),m.return=w,w=m):(F=Ps(E.type,E.key,E.props,null,w.mode,F),F.ref=Ri(w,m,E),F.return=w,w=F)}return o(w);case La:e:{for(D=E.key;m!==null;){if(m.key===D)if(m.tag===4&&m.stateNode.containerInfo===E.containerInfo&&m.stateNode.implementation===E.implementation){r(w,m.sibling),m=a(m,E.children||[]),m.return=w,w=m;break e}else{r(w,m);break}else t(w,m);m=m.sibling}m=G0(E,w.mode,F),m.return=w,w=m}return o(w);case Tn:return D=E._init,v(w,m,D(E._payload),F)}if(Hi(E))return x(w,m,E,F);if(Ni(E))return h(w,m,E,F);ms(w,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,m!==null&&m.tag===6?(r(w,m.sibling),m=a(m,E),m.return=w,w=m):(r(w,m),m=W0(E,w.mode,F),m.return=w,w=m),o(w)):r(w,m)}return v}var ei=gp(!0),xp=gp(!1),Vs=Wn(null),Xs=null,Wa=null,tf=null;function rf(){tf=Wa=Xs=null}function nf(e){var t=Vs.current;We(Vs),e._currentValue=t}function wc(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ka(e,t){Xs=e,tf=Wa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qt=!0),e.firstContext=null)}function _r(e){var t=e._currentValue;if(tf!==e)if(e={context:e,memoizedValue:t,next:null},Wa===null){if(Xs===null)throw Error(re(308));Wa=e,Xs.dependencies={lanes:0,firstContext:e}}else Wa=Wa.next=e;return t}var oa=null;function af(e){oa===null?oa=[e]:oa.push(e)}function mp(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,af(t)):(r.next=a.next,a.next=r),t.interleaved=r,fn(e,n)}function fn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Sn=!1;function of(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function On(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,ke&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,fn(e,r)}return a=n.interleaved,a===null?(t.next=t,af(n)):(t.next=a.next,a.next=t),n.interleaved=t,fn(e,r)}function bs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Vc(e,r)}}function jd(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=o:i=i.next=o,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function js(e,t,r,n){var a=e.updateQueue;Sn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,f=l.next;l.next=null,o===null?i=f:o.next=f,o=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=f:s.next=f,u.lastBaseUpdate=l))}if(i!==null){var g=a.baseState;o=0,u=f=l=null,s=i;do{var d=s.lane,p=s.eventTime;if((n&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,h=s;switch(d=t,p=r,h.tag){case 1:if(x=h.payload,typeof x=="function"){g=x.call(p,g,d);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,d=typeof x=="function"?x.call(p,g,d):x,d==null)break e;g=Ke({},g,d);break e;case 2:Sn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=a.effects,d===null?a.effects=[s]:d.push(s))}else p={eventTime:p,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(f=u=p,l=g):u=u.next=p,o|=d;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;d=s,s=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(!0);if(u===null&&(l=g),a.baseState=l,a.firstBaseUpdate=f,a.lastBaseUpdate=u,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);ha|=o,e.lanes=o,e.memoizedState=g}}function $d(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(re(191,a));a.call(n)}}}var yo={},Yr=Wn(yo),fo=Wn(yo),uo=Wn(yo);function sa(e){if(e===yo)throw Error(re(174));return e}function sf(e,t){switch(Me(uo,t),Me(fo,e),Me(Yr,yo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:q0(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=q0(t,e)}We(Yr),Me(Yr,t)}function ti(){We(Yr),We(fo),We(uo)}function wp(e){sa(uo.current);var t=sa(Yr.current),r=q0(t,e.type);t!==r&&(Me(fo,e),Me(Yr,r))}function lf(e){fo.current===e&&(We(Yr),We(fo))}var $e=Wn(0);function $s(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var R0=[];function cf(){for(var e=0;e<R0.length;e++)R0[e]._workInProgressVersionPrimary=null;R0.length=0}var Ts=dn.ReactCurrentDispatcher,M0=dn.ReactCurrentBatchConfig,da=0,Ye=null,ut=null,xt=null,Ys=!1,Ki=!1,ho=0,d2=0;function Dt(){throw Error(re(321))}function ff(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Or(e[r],t[r]))return!1;return!0}function uf(e,t,r,n,a,i){if(da=i,Ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ts.current=e===null||e.memoizedState===null?x2:m2,e=r(n,a),Ki){i=0;do{if(Ki=!1,ho=0,25<=i)throw Error(re(301));i+=1,xt=ut=null,t.updateQueue=null,Ts.current=v2,e=r(n,a)}while(Ki)}if(Ts.current=Ks,t=ut!==null&&ut.next!==null,da=0,xt=ut=Ye=null,Ys=!1,t)throw Error(re(300));return e}function df(){var e=ho!==0;return ho=0,e}function Xr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?Ye.memoizedState=xt=e:xt=xt.next=e,xt}function kr(){if(ut===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=ut.next;var t=xt===null?Ye.memoizedState:xt.next;if(t!==null)xt=t,ut=e;else{if(e===null)throw Error(re(310));ut=e,e={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},xt===null?Ye.memoizedState=xt=e:xt=xt.next=e}return xt}function po(e,t){return typeof t=="function"?t(e):t}function B0(e){var t=kr(),r=t.queue;if(r===null)throw Error(re(311));r.lastRenderedReducer=e;var n=ut,a=n.baseQueue,i=r.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}n.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,n=n.baseState;var s=o=null,l=null,f=i;do{var u=f.lane;if((da&u)===u)l!==null&&(l=l.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),n=f.hasEagerState?f.eagerState:e(n,f.action);else{var g={lane:u,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};l===null?(s=l=g,o=n):l=l.next=g,Ye.lanes|=u,ha|=u}f=f.next}while(f!==null&&f!==i);l===null?o=n:l.next=s,Or(n,t.memoizedState)||(Qt=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do i=a.lane,Ye.lanes|=i,ha|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function U0(e){var t=kr(),r=t.queue;if(r===null)throw Error(re(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Or(i,t.memoizedState)||(Qt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function yp(){}function Ep(e,t){var r=Ye,n=kr(),a=t(),i=!Or(n.memoizedState,a);if(i&&(n.memoizedState=a,Qt=!0),n=n.queue,hf(bp.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||xt!==null&&xt.memoizedState.tag&1){if(r.flags|=2048,go(9,kp.bind(null,r,n,a,t),void 0,null),mt===null)throw Error(re(349));da&30||_p(r,t,a)}return a}function _p(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function kp(e,t,r,n){t.value=r,t.getSnapshot=n,Tp(t)&&Sp(e)}function bp(e,t,r){return r(function(){Tp(t)&&Sp(e)})}function Tp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Or(e,r)}catch{return!0}}function Sp(e){var t=fn(e,1);t!==null&&Dr(t,e,1,-1)}function Yd(e){var t=Xr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:e},t.queue=e,e=e.dispatch=g2.bind(null,Ye,e),[t.memoizedState,e]}function go(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Cp(){return kr().memoizedState}function Ss(e,t,r,n){var a=Xr();Ye.flags|=e,a.memoizedState=go(1|t,r,void 0,n===void 0?null:n)}function sl(e,t,r,n){var a=kr();n=n===void 0?null:n;var i=void 0;if(ut!==null){var o=ut.memoizedState;if(i=o.destroy,n!==null&&ff(n,o.deps)){a.memoizedState=go(t,r,i,n);return}}Ye.flags|=e,a.memoizedState=go(1|t,r,i,n)}function Kd(e,t){return Ss(8390656,8,e,t)}function hf(e,t){return sl(2048,8,e,t)}function Ap(e,t){return sl(4,2,e,t)}function Fp(e,t){return sl(4,4,e,t)}function Pp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ip(e,t,r){return r=r!=null?r.concat([e]):null,sl(4,4,Pp.bind(null,t,e),r)}function pf(){}function Np(e,t){var r=kr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ff(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Lp(e,t){var r=kr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ff(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Dp(e,t,r){return da&21?(Or(r,t)||(r=Uh(),Ye.lanes|=r,ha|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qt=!0),e.memoizedState=r)}function h2(e,t){var r=Ce;Ce=r!==0&&4>r?r:4,e(!0);var n=M0.transition;M0.transition={};try{e(!1),t()}finally{Ce=r,M0.transition=n}}function Op(){return kr().memoizedState}function p2(e,t,r){var n=Mn(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Rp(e))Mp(t,r);else if(r=mp(e,t,r,n),r!==null){var a=Wt();Dr(r,e,n,a),Bp(r,t,n)}}function g2(e,t,r){var n=Mn(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Rp(e))Mp(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,r);if(a.hasEagerState=!0,a.eagerState=s,Or(s,o)){var l=t.interleaved;l===null?(a.next=a,af(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}r=mp(e,t,a,n),r!==null&&(a=Wt(),Dr(r,e,n,a),Bp(r,t,n))}}function Rp(e){var t=e.alternate;return e===Ye||t!==null&&t===Ye}function Mp(e,t){Ki=Ys=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Bp(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Vc(e,r)}}var Ks={readContext:_r,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},x2={readContext:_r,useCallback:function(e,t){return Xr().memoizedState=[e,t===void 0?null:t],e},useContext:_r,useEffect:Kd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ss(4194308,4,Pp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ss(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ss(4,2,e,t)},useMemo:function(e,t){var r=Xr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Xr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=p2.bind(null,Ye,e),[n.memoizedState,e]},useRef:function(e){var t=Xr();return e={current:e},t.memoizedState=e},useState:Yd,useDebugValue:pf,useDeferredValue:function(e){return Xr().memoizedState=e},useTransition:function(){var e=Yd(!1),t=e[0];return e=h2.bind(null,e[1]),Xr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Ye,a=Xr();if(je){if(r===void 0)throw Error(re(407));r=r()}else{if(r=t(),mt===null)throw Error(re(349));da&30||_p(n,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,Kd(bp.bind(null,n,i,e),[e]),n.flags|=2048,go(9,kp.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Xr(),t=mt.identifierPrefix;if(je){var r=on,n=an;r=(n&~(1<<32-Lr(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=ho++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=d2++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},m2={readContext:_r,useCallback:Np,useContext:_r,useEffect:hf,useImperativeHandle:Ip,useInsertionEffect:Ap,useLayoutEffect:Fp,useMemo:Lp,useReducer:B0,useRef:Cp,useState:function(){return B0(po)},useDebugValue:pf,useDeferredValue:function(e){var t=kr();return Dp(t,ut.memoizedState,e)},useTransition:function(){var e=B0(po)[0],t=kr().memoizedState;return[e,t]},useMutableSource:yp,useSyncExternalStore:Ep,useId:Op,unstable_isNewReconciler:!1},v2={readContext:_r,useCallback:Np,useContext:_r,useEffect:hf,useImperativeHandle:Ip,useInsertionEffect:Ap,useLayoutEffect:Fp,useMemo:Lp,useReducer:U0,useRef:Cp,useState:function(){return U0(po)},useDebugValue:pf,useDeferredValue:function(e){var t=kr();return ut===null?t.memoizedState=e:Dp(t,ut.memoizedState,e)},useTransition:function(){var e=U0(po)[0],t=kr().memoizedState;return[e,t]},useMutableSource:yp,useSyncExternalStore:Ep,useId:Op,unstable_isNewReconciler:!1};function Pr(e,t){if(e&&e.defaultProps){t=Ke({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function yc(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Ke({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ll={isMounted:function(e){return(e=e._reactInternals)?xa(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Wt(),a=Mn(e),i=sn(n,a);i.payload=t,r!=null&&(i.callback=r),t=On(e,i,a),t!==null&&(Dr(t,e,a,n),bs(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Wt(),a=Mn(e),i=sn(n,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=On(e,i,a),t!==null&&(Dr(t,e,a,n),bs(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Wt(),n=Mn(e),a=sn(r,n);a.tag=2,t!=null&&(a.callback=t),t=On(e,a,n),t!==null&&(Dr(t,e,n,r),bs(t,e,n))}};function Qd(e,t,r,n,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,o):t.prototype&&t.prototype.isPureReactComponent?!oo(r,n)||!oo(a,i):!0}function Up(e,t,r){var n=!1,a=zn,i=t.contextType;return typeof i=="object"&&i!==null?i=_r(i):(a=Zt(t)?fa:Mt.current,n=t.contextTypes,i=(n=n!=null)?Za(e,a):zn),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ll,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Jd(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ll.enqueueReplaceState(t,t.state,null)}function Ec(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},of(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=_r(i):(i=Zt(t)?fa:Mt.current,a.context=Za(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(yc(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ll.enqueueReplaceState(a,a.state,null),js(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ri(e,t){try{var r="",n=t;do r+=Ym(n),n=n.return;while(n);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function z0(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function _c(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var w2=typeof WeakMap=="function"?WeakMap:Map;function zp(e,t,r){r=sn(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Js||(Js=!0,Nc=n),_c(e,t)},r}function Hp(e,t,r){r=sn(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){_c(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){_c(e,t),typeof n!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Zd(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new w2;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=L2.bind(null,e,t,r),t.then(e,e))}function qd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eh(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=sn(-1,1),t.tag=2,On(r,t,1))),r.lanes|=1),e)}var y2=dn.ReactCurrentOwner,Qt=!1;function Ht(e,t,r,n){t.child=e===null?xp(t,null,r,n):ei(t,e.child,r,n)}function th(e,t,r,n,a){r=r.render;var i=t.ref;return Ka(t,a),n=uf(e,t,r,n,i,a),r=df(),e!==null&&!Qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,un(e,t,a)):(je&&r&&Zc(t),t.flags|=1,Ht(e,t,n,a),t.child)}function rh(e,t,r,n,a){if(e===null){var i=r.type;return typeof i=="function"&&!_f(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Wp(e,t,i,n,a)):(e=Ps(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(r=r.compare,r=r!==null?r:oo,r(o,n)&&e.ref===t.ref)return un(e,t,a)}return t.flags|=1,e=Bn(i,n),e.ref=t.ref,e.return=t,t.child=e}function Wp(e,t,r,n,a){if(e!==null){var i=e.memoizedProps;if(oo(i,n)&&e.ref===t.ref)if(Qt=!1,t.pendingProps=n=i,(e.lanes&a)!==0)e.flags&131072&&(Qt=!0);else return t.lanes=e.lanes,un(e,t,a)}return kc(e,t,r,n,a)}function Gp(e,t,r){var n=t.pendingProps,a=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Va,ir),ir|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(Va,ir),ir|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,Me(Va,ir),ir|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,Me(Va,ir),ir|=n;return Ht(e,t,a,r),t.child}function Vp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function kc(e,t,r,n,a){var i=Zt(r)?fa:Mt.current;return i=Za(t,i),Ka(t,a),r=uf(e,t,r,n,i,a),n=df(),e!==null&&!Qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,un(e,t,a)):(je&&n&&Zc(t),t.flags|=1,Ht(e,t,r,a),t.child)}function nh(e,t,r,n,a){if(Zt(r)){var i=!0;Hs(t)}else i=!1;if(Ka(t,a),t.stateNode===null)Cs(e,t),Up(t,r,n),Ec(t,r,n,a),n=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,f=r.contextType;typeof f=="object"&&f!==null?f=_r(f):(f=Zt(r)?fa:Mt.current,f=Za(t,f));var u=r.getDerivedStateFromProps,g=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==n||l!==f)&&Jd(t,o,n,f),Sn=!1;var d=t.memoizedState;o.state=d,js(t,n,o,a),l=t.memoizedState,s!==n||d!==l||Jt.current||Sn?(typeof u=="function"&&(yc(t,r,u,n),l=t.memoizedState),(s=Sn||Qd(t,r,s,n,d,l,f))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),o.props=n,o.state=l,o.context=f,n=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,vp(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:Pr(t.type,s),o.props=f,g=t.pendingProps,d=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=_r(l):(l=Zt(r)?fa:Mt.current,l=Za(t,l));var p=r.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==g||d!==l)&&Jd(t,o,n,l),Sn=!1,d=t.memoizedState,o.state=d,js(t,n,o,a);var x=t.memoizedState;s!==g||d!==x||Jt.current||Sn?(typeof p=="function"&&(yc(t,r,p,n),x=t.memoizedState),(f=Sn||Qd(t,r,f,n,d,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),o.props=n,o.state=x,o.context=l,n=f):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),n=!1)}return bc(e,t,r,n,i,a)}function bc(e,t,r,n,a,i){Vp(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return a&&Wd(t,r,!1),un(e,t,i);n=t.stateNode,y2.current=t;var s=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=ei(t,e.child,null,i),t.child=ei(t,null,s,i)):Ht(e,t,s,i),t.memoizedState=n.state,a&&Wd(t,r,!0),t.child}function Xp(e){var t=e.stateNode;t.pendingContext?Hd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hd(e,t.context,!1),sf(e,t.containerInfo)}function ah(e,t,r,n,a){return qa(),ef(a),t.flags|=256,Ht(e,t,r,n),t.child}var Tc={dehydrated:null,treeContext:null,retryLane:0};function Sc(e){return{baseLanes:e,cachePool:null,transitions:null}}function jp(e,t,r){var n=t.pendingProps,a=$e.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Me($e,a&1),e===null)return vc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,i?(n=t.mode,i=t.child,o={mode:"hidden",children:o},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ul(o,n,0,null),e=ca(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Sc(r),t.memoizedState=Tc,e):gf(t,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return E2(e,t,o,n,s,a,r);if(i){i=n.fallback,o=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:n.children};return!(o&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Bn(a,l),n.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=Bn(s,i):(i=ca(i,o,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,o=e.child.memoizedState,o=o===null?Sc(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~r,t.memoizedState=Tc,n}return i=e.child,e=i.sibling,n=Bn(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function gf(e,t){return t=ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vs(e,t,r,n){return n!==null&&ef(n),ei(t,e.child,null,r),e=gf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function E2(e,t,r,n,a,i,o){if(r)return t.flags&256?(t.flags&=-257,n=z0(Error(re(422))),vs(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,a=t.mode,n=ul({mode:"visible",children:n.children},a,0,null),i=ca(i,a,o,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&ei(t,e.child,null,o),t.child.memoizedState=Sc(o),t.memoizedState=Tc,i);if(!(t.mode&1))return vs(e,t,o,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var s=n.dgst;return n=s,i=Error(re(419)),n=z0(i,n,void 0),vs(e,t,o,n)}if(s=(o&e.childLanes)!==0,Qt||s){if(n=mt,n!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,fn(e,a),Dr(n,e,a,-1))}return Ef(),n=z0(Error(re(421))),vs(e,t,o,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=D2.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,or=Dn(a.nextSibling),sr=t,je=!0,Nr=null,e!==null&&(vr[wr++]=an,vr[wr++]=on,vr[wr++]=ua,an=e.id,on=e.overflow,ua=t),t=gf(t,n.children),t.flags|=4096,t)}function ih(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),wc(e.return,t,r)}function H0(e,t,r,n,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=a)}function $p(e,t,r){var n=t.pendingProps,a=n.revealOrder,i=n.tail;if(Ht(e,t,n.children,r),n=$e.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ih(e,r,t);else if(e.tag===19)ih(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Me($e,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&$s(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),H0(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&$s(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}H0(t,!0,r,null,i);break;case"together":H0(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function un(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(re(153));if(t.child!==null){for(e=t.child,r=Bn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Bn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function _2(e,t,r){switch(t.tag){case 3:Xp(t),qa();break;case 5:wp(t);break;case 1:Zt(t.type)&&Hs(t);break;case 4:sf(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;Me(Vs,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Me($e,$e.current&1),t.flags|=128,null):r&t.child.childLanes?jp(e,t,r):(Me($e,$e.current&1),e=un(e,t,r),e!==null?e.sibling:null);Me($e,$e.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return $p(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Me($e,$e.current),n)break;return null;case 22:case 23:return t.lanes=0,Gp(e,t,r)}return un(e,t,r)}var Yp,Cc,Kp,Qp;Yp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Cc=function(){};Kp=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,sa(Yr.current);var i=null;switch(r){case"input":a=K0(e,a),n=K0(e,n),i=[];break;case"select":a=Ke({},a,{value:void 0}),n=Ke({},n,{value:void 0}),i=[];break;case"textarea":a=Z0(e,a),n=Z0(e,n),i=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Us)}ec(r,n);var o;r=null;for(f in a)if(!n.hasOwnProperty(f)&&a.hasOwnProperty(f)&&a[f]!=null)if(f==="style"){var s=a[f];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(qi.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in n){var l=n[f];if(s=a!=null?a[f]:void 0,n.hasOwnProperty(f)&&l!==s&&(l!=null||s!=null))if(f==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(i||(i=[]),i.push(f,r)),r=l;else f==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(f,l)):f==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(f,""+l):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(qi.hasOwnProperty(f)?(l!=null&&f==="onScroll"&&He("scroll",e),i||s===l||(i=[])):(i=i||[]).push(f,l))}r&&(i=i||[]).push("style",r);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};Qp=function(e,t,r,n){r!==n&&(t.flags|=4)};function Mi(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function k2(e,t,r){var n=t.pendingProps;switch(qc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return Zt(t.type)&&zs(),Ot(t),null;case 3:return n=t.stateNode,ti(),We(Jt),We(Mt),cf(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(xs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nr!==null&&(Oc(Nr),Nr=null))),Cc(e,t),Ot(t),null;case 5:lf(t);var a=sa(uo.current);if(r=t.type,e!==null&&t.stateNode!=null)Kp(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(re(166));return Ot(t),null}if(e=sa(Yr.current),xs(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[jr]=t,n[co]=i,e=(t.mode&1)!==0,r){case"dialog":He("cancel",n),He("close",n);break;case"iframe":case"object":case"embed":He("load",n);break;case"video":case"audio":for(a=0;a<Gi.length;a++)He(Gi[a],n);break;case"source":He("error",n);break;case"img":case"image":case"link":He("error",n),He("load",n);break;case"details":He("toggle",n);break;case"input":hd(n,i),He("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},He("invalid",n);break;case"textarea":gd(n,i),He("invalid",n)}ec(r,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?n.textContent!==s&&(i.suppressHydrationWarning!==!0&&gs(n.textContent,s,e),a=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&gs(n.textContent,s,e),a=["children",""+s]):qi.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&He("scroll",n)}switch(r){case"input":ns(n),pd(n,i,!0);break;case"textarea":ns(n),xd(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Us)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bh(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[jr]=t,e[co]=n,Yp(e,t,!1,!1),t.stateNode=e;e:{switch(o=tc(r,n),r){case"dialog":He("cancel",e),He("close",e),a=n;break;case"iframe":case"object":case"embed":He("load",e),a=n;break;case"video":case"audio":for(a=0;a<Gi.length;a++)He(Gi[a],e);a=n;break;case"source":He("error",e),a=n;break;case"img":case"image":case"link":He("error",e),He("load",e),a=n;break;case"details":He("toggle",e),a=n;break;case"input":hd(e,n),a=K0(e,n),He("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=Ke({},n,{value:void 0}),He("invalid",e);break;case"textarea":gd(e,n),a=Z0(e,n),He("invalid",e);break;default:a=n}ec(r,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Ch(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Th(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&eo(e,l):typeof l=="number"&&eo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(qi.hasOwnProperty(i)?l!=null&&i==="onScroll"&&He("scroll",e):l!=null&&Bc(e,i,l,o))}switch(r){case"input":ns(e),pd(e,n,!1);break;case"textarea":ns(e),xd(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Un(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Xa(e,!!n.multiple,i,!1):n.defaultValue!=null&&Xa(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Us)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ot(t),null;case 6:if(e&&t.stateNode!=null)Qp(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(re(166));if(r=sa(uo.current),sa(Yr.current),xs(t)){if(n=t.stateNode,r=t.memoizedProps,n[jr]=t,(i=n.nodeValue!==r)&&(e=sr,e!==null))switch(e.tag){case 3:gs(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gs(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[jr]=t,t.stateNode=n}return Ot(t),null;case 13:if(We($e),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&or!==null&&t.mode&1&&!(t.flags&128))pp(),qa(),t.flags|=98560,i=!1;else if(i=xs(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(re(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(re(317));i[jr]=t}else qa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ot(t),i=!1}else Nr!==null&&(Oc(Nr),Nr=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||$e.current&1?dt===0&&(dt=3):Ef())),t.updateQueue!==null&&(t.flags|=4),Ot(t),null);case 4:return ti(),Cc(e,t),e===null&&so(t.stateNode.containerInfo),Ot(t),null;case 10:return nf(t.type._context),Ot(t),null;case 17:return Zt(t.type)&&zs(),Ot(t),null;case 19:if(We($e),i=t.memoizedState,i===null)return Ot(t),null;if(n=(t.flags&128)!==0,o=i.rendering,o===null)if(n)Mi(i,!1);else{if(dt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=$s(e),o!==null){for(t.flags|=128,Mi(i,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Me($e,$e.current&1|2),t.child}e=e.sibling}i.tail!==null&&nt()>ni&&(t.flags|=128,n=!0,Mi(i,!1),t.lanes=4194304)}else{if(!n)if(e=$s(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Mi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!je)return Ot(t),null}else 2*nt()-i.renderingStartTime>ni&&r!==1073741824&&(t.flags|=128,n=!0,Mi(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(r=i.last,r!==null?r.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=nt(),t.sibling=null,r=$e.current,Me($e,n?r&1|2:r&1),t):(Ot(t),null);case 22:case 23:return yf(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?ir&1073741824&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),null;case 24:return null;case 25:return null}throw Error(re(156,t.tag))}function b2(e,t){switch(qc(t),t.tag){case 1:return Zt(t.type)&&zs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ti(),We(Jt),We(Mt),cf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return lf(t),null;case 13:if(We($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(re(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return We($e),null;case 4:return ti(),null;case 10:return nf(t.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var ws=!1,Rt=!1,T2=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Ga(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Je(e,t,n)}else r.current=null}function Ac(e,t,r){try{r()}catch(n){Je(e,t,n)}}var oh=!1;function S2(e,t){if(uc=Rs,e=tp(),Jc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var o=0,s=-1,l=-1,f=0,u=0,g=e,d=null;t:for(;;){for(var p;g!==r||a!==0&&g.nodeType!==3||(s=o+a),g!==i||n!==0&&g.nodeType!==3||(l=o+n),g.nodeType===3&&(o+=g.nodeValue.length),(p=g.firstChild)!==null;)d=g,g=p;for(;;){if(g===e)break t;if(d===r&&++f===a&&(s=o),d===i&&++u===n&&(l=o),(p=g.nextSibling)!==null)break;g=d,d=g.parentNode}g=p}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(dc={focusedElem:e,selectionRange:r},Rs=!1,fe=t;fe!==null;)if(t=fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,fe=e;else for(;fe!==null;){t=fe;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,v=x.memoizedState,w=t.stateNode,m=w.getSnapshotBeforeUpdate(t.elementType===t.type?h:Pr(t.type,h),v);w.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(F){Je(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,fe=e;break}fe=t.return}return x=oh,oh=!1,x}function Qi(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Ac(t,r,i)}a=a.next}while(a!==n)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Fc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Jp(e){var t=e.alternate;t!==null&&(e.alternate=null,Jp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jr],delete t[co],delete t[gc],delete t[l2],delete t[c2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zp(e){return e.tag===5||e.tag===3||e.tag===4}function sh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pc(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Us));else if(n!==4&&(e=e.child,e!==null))for(Pc(e,t,r),e=e.sibling;e!==null;)Pc(e,t,r),e=e.sibling}function Ic(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ic(e,t,r),e=e.sibling;e!==null;)Ic(e,t,r),e=e.sibling}var kt=null,Ir=!1;function bn(e,t,r){for(r=r.child;r!==null;)qp(e,t,r),r=r.sibling}function qp(e,t,r){if($r&&typeof $r.onCommitFiberUnmount=="function")try{$r.onCommitFiberUnmount(tl,r)}catch{}switch(r.tag){case 5:Rt||Ga(r,t);case 6:var n=kt,a=Ir;kt=null,bn(e,t,r),kt=n,Ir=a,kt!==null&&(Ir?(e=kt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):kt.removeChild(r.stateNode));break;case 18:kt!==null&&(Ir?(e=kt,r=r.stateNode,e.nodeType===8?D0(e.parentNode,r):e.nodeType===1&&D0(e,r),ao(e)):D0(kt,r.stateNode));break;case 4:n=kt,a=Ir,kt=r.stateNode.containerInfo,Ir=!0,bn(e,t,r),kt=n,Ir=a;break;case 0:case 11:case 14:case 15:if(!Rt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ac(r,t,o),a=a.next}while(a!==n)}bn(e,t,r);break;case 1:if(!Rt&&(Ga(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Je(r,t,s)}bn(e,t,r);break;case 21:bn(e,t,r);break;case 22:r.mode&1?(Rt=(n=Rt)||r.memoizedState!==null,bn(e,t,r),Rt=n):bn(e,t,r);break;default:bn(e,t,r)}}function lh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new T2),t.forEach(function(n){var a=O2.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Fr(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:kt=s.stateNode,Ir=!1;break e;case 3:kt=s.stateNode.containerInfo,Ir=!0;break e;case 4:kt=s.stateNode.containerInfo,Ir=!0;break e}s=s.return}if(kt===null)throw Error(re(160));qp(i,o,a),kt=null,Ir=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(f){Je(a,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)e1(t,e),t=t.sibling}function e1(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fr(t,e),Vr(e),n&4){try{Qi(3,e,e.return),cl(3,e)}catch(h){Je(e,e.return,h)}try{Qi(5,e,e.return)}catch(h){Je(e,e.return,h)}}break;case 1:Fr(t,e),Vr(e),n&512&&r!==null&&Ga(r,r.return);break;case 5:if(Fr(t,e),Vr(e),n&512&&r!==null&&Ga(r,r.return),e.flags&32){var a=e.stateNode;try{eo(a,"")}catch(h){Je(e,e.return,h)}}if(n&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=r!==null?r.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&_h(a,i),tc(s,o);var f=tc(s,i);for(o=0;o<l.length;o+=2){var u=l[o],g=l[o+1];u==="style"?Ch(a,g):u==="dangerouslySetInnerHTML"?Th(a,g):u==="children"?eo(a,g):Bc(a,u,g,f)}switch(s){case"input":Q0(a,i);break;case"textarea":kh(a,i);break;case"select":var d=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?Xa(a,!!i.multiple,p,!1):d!==!!i.multiple&&(i.defaultValue!=null?Xa(a,!!i.multiple,i.defaultValue,!0):Xa(a,!!i.multiple,i.multiple?[]:"",!1))}a[co]=i}catch(h){Je(e,e.return,h)}}break;case 6:if(Fr(t,e),Vr(e),n&4){if(e.stateNode===null)throw Error(re(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(h){Je(e,e.return,h)}}break;case 3:if(Fr(t,e),Vr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{ao(t.containerInfo)}catch(h){Je(e,e.return,h)}break;case 4:Fr(t,e),Vr(e);break;case 13:Fr(t,e),Vr(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(vf=nt())),n&4&&lh(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(Rt=(f=Rt)||u,Fr(t,e),Rt=f):Fr(t,e),Vr(e),n&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!u&&e.mode&1)for(fe=e,u=e.child;u!==null;){for(g=fe=u;fe!==null;){switch(d=fe,p=d.child,d.tag){case 0:case 11:case 14:case 15:Qi(4,d,d.return);break;case 1:Ga(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){n=d,r=d.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(h){Je(n,r,h)}}break;case 5:Ga(d,d.return);break;case 22:if(d.memoizedState!==null){fh(g);continue}}p!==null?(p.return=d,fe=p):fh(g)}u=u.sibling}e:for(u=null,g=e;;){if(g.tag===5){if(u===null){u=g;try{a=g.stateNode,f?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,l=g.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Sh("display",o))}catch(h){Je(e,e.return,h)}}}else if(g.tag===6){if(u===null)try{g.stateNode.nodeValue=f?"":g.memoizedProps}catch(h){Je(e,e.return,h)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;u===g&&(u=null),g=g.return}u===g&&(u=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Fr(t,e),Vr(e),n&4&&lh(e);break;case 21:break;default:Fr(t,e),Vr(e)}}function Vr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Zp(r)){var n=r;break e}r=r.return}throw Error(re(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(eo(a,""),n.flags&=-33);var i=sh(e);Ic(e,i,a);break;case 3:case 4:var o=n.stateNode.containerInfo,s=sh(e);Pc(e,s,o);break;default:throw Error(re(161))}}catch(l){Je(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function C2(e,t,r){fe=e,t1(e,t,r)}function t1(e,t,r){for(var n=(e.mode&1)!==0;fe!==null;){var a=fe,i=a.child;if(a.tag===22&&n){var o=a.memoizedState!==null||ws;if(!o){var s=a.alternate,l=s!==null&&s.memoizedState!==null||Rt;s=ws;var f=Rt;if(ws=o,(Rt=l)&&!f)for(fe=a;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?uh(a):l!==null?(l.return=o,fe=l):uh(a);for(;i!==null;)fe=i,t1(i,t,r),i=i.sibling;fe=a,ws=s,Rt=f}ch(e,t,r)}else a.subtreeFlags&8772&&i!==null?(i.return=a,fe=i):ch(e,t,r)}}function ch(e){for(;fe!==null;){var t=fe;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Rt||cl(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Rt)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Pr(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&$d(t,i,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}$d(t,o,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var u=f.memoizedState;if(u!==null){var g=u.dehydrated;g!==null&&ao(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Rt||t.flags&512&&Fc(t)}catch(d){Je(t,t.return,d)}}if(t===e){fe=null;break}if(r=t.sibling,r!==null){r.return=t.return,fe=r;break}fe=t.return}}function fh(e){for(;fe!==null;){var t=fe;if(t===e){fe=null;break}var r=t.sibling;if(r!==null){r.return=t.return,fe=r;break}fe=t.return}}function uh(e){for(;fe!==null;){var t=fe;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{cl(4,t)}catch(l){Je(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(l){Je(t,a,l)}}var i=t.return;try{Fc(t)}catch(l){Je(t,i,l)}break;case 5:var o=t.return;try{Fc(t)}catch(l){Je(t,o,l)}}}catch(l){Je(t,t.return,l)}if(t===e){fe=null;break}var s=t.sibling;if(s!==null){s.return=t.return,fe=s;break}fe=t.return}}var A2=Math.ceil,Qs=dn.ReactCurrentDispatcher,xf=dn.ReactCurrentOwner,Er=dn.ReactCurrentBatchConfig,ke=0,mt=null,ot=null,bt=0,ir=0,Va=Wn(0),dt=0,xo=null,ha=0,fl=0,mf=0,Ji=null,Kt=null,vf=0,ni=1/0,rn=null,Js=!1,Nc=null,Rn=null,ys=!1,Pn=null,Zs=0,Zi=0,Lc=null,As=-1,Fs=0;function Wt(){return ke&6?nt():As!==-1?As:As=nt()}function Mn(e){return e.mode&1?ke&2&&bt!==0?bt&-bt:u2.transition!==null?(Fs===0&&(Fs=Uh()),Fs):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:jh(e.type)),e):1}function Dr(e,t,r,n){if(50<Zi)throw Zi=0,Lc=null,Error(re(185));mo(e,r,n),(!(ke&2)||e!==mt)&&(e===mt&&(!(ke&2)&&(fl|=r),dt===4&&An(e,bt)),qt(e,n),r===1&&ke===0&&!(t.mode&1)&&(ni=nt()+500,ol&&Gn()))}function qt(e,t){var r=e.callbackNode;hv(e,t);var n=Os(e,e===mt?bt:0);if(n===0)r!==null&&wd(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&wd(r),t===1)e.tag===0?f2(dh.bind(null,e)):up(dh.bind(null,e)),o2(function(){!(ke&6)&&Gn()}),r=null;else{switch(zh(n)){case 1:r=Gc;break;case 4:r=Mh;break;case 16:r=Ds;break;case 536870912:r=Bh;break;default:r=Ds}r=c1(r,r1.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function r1(e,t){if(As=-1,Fs=0,ke&6)throw Error(re(327));var r=e.callbackNode;if(Qa()&&e.callbackNode!==r)return null;var n=Os(e,e===mt?bt:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=qs(e,n);else{t=n;var a=ke;ke|=2;var i=a1();(mt!==e||bt!==t)&&(rn=null,ni=nt()+500,la(e,t));do try{I2();break}catch(s){n1(e,s)}while(!0);rf(),Qs.current=i,ke=a,ot!==null?t=0:(mt=null,bt=0,t=dt)}if(t!==0){if(t===2&&(a=oc(e),a!==0&&(n=a,t=Dc(e,a))),t===1)throw r=xo,la(e,0),An(e,n),qt(e,nt()),r;if(t===6)An(e,n);else{if(a=e.current.alternate,!(n&30)&&!F2(a)&&(t=qs(e,n),t===2&&(i=oc(e),i!==0&&(n=i,t=Dc(e,i))),t===1))throw r=xo,la(e,0),An(e,n),qt(e,nt()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(re(345));case 2:aa(e,Kt,rn);break;case 3:if(An(e,n),(n&130023424)===n&&(t=vf+500-nt(),10<t)){if(Os(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Wt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=pc(aa.bind(null,e,Kt,rn),t);break}aa(e,Kt,rn);break;case 4:if(An(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var o=31-Lr(n);i=1<<o,o=t[o],o>a&&(a=o),n&=~i}if(n=a,n=nt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*A2(n/1960))-n,10<n){e.timeoutHandle=pc(aa.bind(null,e,Kt,rn),n);break}aa(e,Kt,rn);break;case 5:aa(e,Kt,rn);break;default:throw Error(re(329))}}}return qt(e,nt()),e.callbackNode===r?r1.bind(null,e):null}function Dc(e,t){var r=Ji;return e.current.memoizedState.isDehydrated&&(la(e,t).flags|=256),e=qs(e,t),e!==2&&(t=Kt,Kt=r,t!==null&&Oc(t)),e}function Oc(e){Kt===null?Kt=e:Kt.push.apply(Kt,e)}function F2(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],i=a.getSnapshot;a=a.value;try{if(!Or(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~mf,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Lr(t),n=1<<r;e[r]=-1,t&=~n}}function dh(e){if(ke&6)throw Error(re(327));Qa();var t=Os(e,0);if(!(t&1))return qt(e,nt()),null;var r=qs(e,t);if(e.tag!==0&&r===2){var n=oc(e);n!==0&&(t=n,r=Dc(e,n))}if(r===1)throw r=xo,la(e,0),An(e,t),qt(e,nt()),r;if(r===6)throw Error(re(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,aa(e,Kt,rn),qt(e,nt()),null}function wf(e,t){var r=ke;ke|=1;try{return e(t)}finally{ke=r,ke===0&&(ni=nt()+500,ol&&Gn())}}function pa(e){Pn!==null&&Pn.tag===0&&!(ke&6)&&Qa();var t=ke;ke|=1;var r=Er.transition,n=Ce;try{if(Er.transition=null,Ce=1,e)return e()}finally{Ce=n,Er.transition=r,ke=t,!(ke&6)&&Gn()}}function yf(){ir=Va.current,We(Va)}function la(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,i2(r)),ot!==null)for(r=ot.return;r!==null;){var n=r;switch(qc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&zs();break;case 3:ti(),We(Jt),We(Mt),cf();break;case 5:lf(n);break;case 4:ti();break;case 13:We($e);break;case 19:We($e);break;case 10:nf(n.type._context);break;case 22:case 23:yf()}r=r.return}if(mt=e,ot=e=Bn(e.current,null),bt=ir=t,dt=0,xo=null,mf=fl=ha=0,Kt=Ji=null,oa!==null){for(t=0;t<oa.length;t++)if(r=oa[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,i=r.pending;if(i!==null){var o=i.next;i.next=a,n.next=o}r.pending=n}oa=null}return e}function n1(e,t){do{var r=ot;try{if(rf(),Ts.current=Ks,Ys){for(var n=Ye.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Ys=!1}if(da=0,xt=ut=Ye=null,Ki=!1,ho=0,xf.current=null,r===null||r.return===null){dt=1,xo=t,ot=null;break}e:{var i=e,o=r.return,s=r,l=t;if(t=bt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=l,u=s,g=u.tag;if(!(u.mode&1)&&(g===0||g===11||g===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=qd(o);if(p!==null){p.flags&=-257,eh(p,o,s,i,t),p.mode&1&&Zd(i,f,t),t=p,l=f;var x=t.updateQueue;if(x===null){var h=new Set;h.add(l),t.updateQueue=h}else x.add(l);break e}else{if(!(t&1)){Zd(i,f,t),Ef();break e}l=Error(re(426))}}else if(je&&s.mode&1){var v=qd(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),eh(v,o,s,i,t),ef(ri(l,s));break e}}i=l=ri(l,s),dt!==4&&(dt=2),Ji===null?Ji=[i]:Ji.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var w=zp(i,l,t);jd(i,w);break e;case 1:s=l;var m=i.type,E=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Rn===null||!Rn.has(E)))){i.flags|=65536,t&=-t,i.lanes|=t;var F=Hp(i,s,t);jd(i,F);break e}}i=i.return}while(i!==null)}o1(r)}catch(P){t=P,ot===r&&r!==null&&(ot=r=r.return);continue}break}while(!0)}function a1(){var e=Qs.current;return Qs.current=Ks,e===null?Ks:e}function Ef(){(dt===0||dt===3||dt===2)&&(dt=4),mt===null||!(ha&268435455)&&!(fl&268435455)||An(mt,bt)}function qs(e,t){var r=ke;ke|=2;var n=a1();(mt!==e||bt!==t)&&(rn=null,la(e,t));do try{P2();break}catch(a){n1(e,a)}while(!0);if(rf(),ke=r,Qs.current=n,ot!==null)throw Error(re(261));return mt=null,bt=0,dt}function P2(){for(;ot!==null;)i1(ot)}function I2(){for(;ot!==null&&!av();)i1(ot)}function i1(e){var t=l1(e.alternate,e,ir);e.memoizedProps=e.pendingProps,t===null?o1(e):ot=t,xf.current=null}function o1(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=b2(r,t),r!==null){r.flags&=32767,ot=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{dt=6,ot=null;return}}else if(r=k2(r,t,ir),r!==null){ot=r;return}if(t=t.sibling,t!==null){ot=t;return}ot=t=e}while(t!==null);dt===0&&(dt=5)}function aa(e,t,r){var n=Ce,a=Er.transition;try{Er.transition=null,Ce=1,N2(e,t,r,n)}finally{Er.transition=a,Ce=n}return null}function N2(e,t,r,n){do Qa();while(Pn!==null);if(ke&6)throw Error(re(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(re(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(pv(e,i),e===mt&&(ot=mt=null,bt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ys||(ys=!0,c1(Ds,function(){return Qa(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Er.transition,Er.transition=null;var o=Ce;Ce=1;var s=ke;ke|=4,xf.current=null,S2(e,r),e1(r,e),e2(dc),Rs=!!uc,dc=uc=null,e.current=r,C2(r,e,a),iv(),ke=s,Ce=o,Er.transition=i}else e.current=r;if(ys&&(ys=!1,Pn=e,Zs=a),i=e.pendingLanes,i===0&&(Rn=null),lv(r.stateNode,n),qt(e,nt()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Js)throw Js=!1,e=Nc,Nc=null,e;return Zs&1&&e.tag!==0&&Qa(),i=e.pendingLanes,i&1?e===Lc?Zi++:(Zi=0,Lc=e):Zi=0,Gn(),null}function Qa(){if(Pn!==null){var e=zh(Zs),t=Er.transition,r=Ce;try{if(Er.transition=null,Ce=16>e?16:e,Pn===null)var n=!1;else{if(e=Pn,Pn=null,Zs=0,ke&6)throw Error(re(331));var a=ke;for(ke|=4,fe=e.current;fe!==null;){var i=fe,o=i.child;if(fe.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var f=s[l];for(fe=f;fe!==null;){var u=fe;switch(u.tag){case 0:case 11:case 15:Qi(8,u,i)}var g=u.child;if(g!==null)g.return=u,fe=g;else for(;fe!==null;){u=fe;var d=u.sibling,p=u.return;if(Jp(u),u===f){fe=null;break}if(d!==null){d.return=p,fe=d;break}fe=p}}}var x=i.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var v=h.sibling;h.sibling=null,h=v}while(h!==null)}}fe=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,fe=o;else e:for(;fe!==null;){if(i=fe,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Qi(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,fe=w;break e}fe=i.return}}var m=e.current;for(fe=m;fe!==null;){o=fe;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,fe=E;else e:for(o=m;fe!==null;){if(s=fe,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:cl(9,s)}}catch(P){Je(s,s.return,P)}if(s===o){fe=null;break e}var F=s.sibling;if(F!==null){F.return=s.return,fe=F;break e}fe=s.return}}if(ke=a,Gn(),$r&&typeof $r.onPostCommitFiberRoot=="function")try{$r.onPostCommitFiberRoot(tl,e)}catch{}n=!0}return n}finally{Ce=r,Er.transition=t}}return!1}function hh(e,t,r){t=ri(r,t),t=zp(e,t,1),e=On(e,t,1),t=Wt(),e!==null&&(mo(e,1,t),qt(e,t))}function Je(e,t,r){if(e.tag===3)hh(e,e,r);else for(;t!==null;){if(t.tag===3){hh(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Rn===null||!Rn.has(n))){e=ri(r,e),e=Hp(t,e,1),t=On(t,e,1),e=Wt(),t!==null&&(mo(t,1,e),qt(t,e));break}}t=t.return}}function L2(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Wt(),e.pingedLanes|=e.suspendedLanes&r,mt===e&&(bt&r)===r&&(dt===4||dt===3&&(bt&130023424)===bt&&500>nt()-vf?la(e,0):mf|=r),qt(e,t)}function s1(e,t){t===0&&(e.mode&1?(t=os,os<<=1,!(os&130023424)&&(os=4194304)):t=1);var r=Wt();e=fn(e,t),e!==null&&(mo(e,t,r),qt(e,r))}function D2(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),s1(e,r)}function O2(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(re(314))}n!==null&&n.delete(t),s1(e,r)}var l1;l1=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Jt.current)Qt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Qt=!1,_2(e,t,r);Qt=!!(e.flags&131072)}else Qt=!1,je&&t.flags&1048576&&dp(t,Gs,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Cs(e,t),e=t.pendingProps;var a=Za(t,Mt.current);Ka(t,r),a=uf(null,t,n,e,a,r);var i=df();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Zt(n)?(i=!0,Hs(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,of(t),a.updater=ll,t.stateNode=a,a._reactInternals=t,Ec(t,n,e,r),t=bc(null,t,n,!0,i,r)):(t.tag=0,je&&i&&Zc(t),Ht(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Cs(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=M2(n),e=Pr(n,e),a){case 0:t=kc(null,t,n,e,r);break e;case 1:t=nh(null,t,n,e,r);break e;case 11:t=th(null,t,n,e,r);break e;case 14:t=rh(null,t,n,Pr(n.type,e),r);break e}throw Error(re(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Pr(n,a),kc(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Pr(n,a),nh(e,t,n,a,r);case 3:e:{if(Xp(t),e===null)throw Error(re(387));n=t.pendingProps,i=t.memoizedState,a=i.element,vp(e,t),js(t,n,null,r);var o=t.memoizedState;if(n=o.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=ri(Error(re(423)),t),t=ah(e,t,n,r,a);break e}else if(n!==a){a=ri(Error(re(424)),t),t=ah(e,t,n,r,a);break e}else for(or=Dn(t.stateNode.containerInfo.firstChild),sr=t,je=!0,Nr=null,r=xp(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(qa(),n===a){t=un(e,t,r);break e}Ht(e,t,n,r)}t=t.child}return t;case 5:return wp(t),e===null&&vc(t),n=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,hc(n,a)?o=null:i!==null&&hc(n,i)&&(t.flags|=32),Vp(e,t),Ht(e,t,o,r),t.child;case 6:return e===null&&vc(t),null;case 13:return jp(e,t,r);case 4:return sf(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ei(t,null,n,r):Ht(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Pr(n,a),th(e,t,n,a,r);case 7:return Ht(e,t,t.pendingProps,r),t.child;case 8:return Ht(e,t,t.pendingProps.children,r),t.child;case 12:return Ht(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Me(Vs,n._currentValue),n._currentValue=o,i!==null)if(Or(i.value,o)){if(i.children===a.children&&!Jt.current){t=un(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=sn(-1,r&-r),l.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var u=f.pending;u===null?l.next=l:(l.next=u.next,u.next=l),f.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),wc(i.return,r,t),s.lanes|=r;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(re(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),wc(o,r,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ht(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Ka(t,r),a=_r(a),n=n(a),t.flags|=1,Ht(e,t,n,r),t.child;case 14:return n=t.type,a=Pr(n,t.pendingProps),a=Pr(n.type,a),rh(e,t,n,a,r);case 15:return Wp(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Pr(n,a),Cs(e,t),t.tag=1,Zt(n)?(e=!0,Hs(t)):e=!1,Ka(t,r),Up(t,n,a),Ec(t,n,a,r),bc(null,t,n,!0,e,r);case 19:return $p(e,t,r);case 22:return Gp(e,t,r)}throw Error(re(156,t.tag))};function c1(e,t){return Rh(e,t)}function R2(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yr(e,t,r,n){return new R2(e,t,r,n)}function _f(e){return e=e.prototype,!(!e||!e.isReactComponent)}function M2(e){if(typeof e=="function")return _f(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zc)return 11;if(e===Hc)return 14}return 2}function Bn(e,t){var r=e.alternate;return r===null?(r=yr(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ps(e,t,r,n,a,i){var o=2;if(n=e,typeof e=="function")_f(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Da:return ca(r.children,a,i,t);case Uc:o=8,a|=8;break;case X0:return e=yr(12,r,t,a|2),e.elementType=X0,e.lanes=i,e;case j0:return e=yr(13,r,t,a),e.elementType=j0,e.lanes=i,e;case $0:return e=yr(19,r,t,a),e.elementType=$0,e.lanes=i,e;case wh:return ul(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mh:o=10;break e;case vh:o=9;break e;case zc:o=11;break e;case Hc:o=14;break e;case Tn:o=16,n=null;break e}throw Error(re(130,e==null?e:typeof e,""))}return t=yr(o,r,t,a),t.elementType=e,t.type=n,t.lanes=i,t}function ca(e,t,r,n){return e=yr(7,e,n,t),e.lanes=r,e}function ul(e,t,r,n){return e=yr(22,e,n,t),e.elementType=wh,e.lanes=r,e.stateNode={isHidden:!1},e}function W0(e,t,r){return e=yr(6,e,null,t),e.lanes=r,e}function G0(e,t,r){return t=yr(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function B2(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=S0(0),this.expirationTimes=S0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=S0(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function kf(e,t,r,n,a,i,o,s,l){return e=new B2(e,t,r,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=yr(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},of(i),e}function U2(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:La,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function f1(e){if(!e)return zn;e=e._reactInternals;e:{if(xa(e)!==e||e.tag!==1)throw Error(re(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(re(171))}if(e.tag===1){var r=e.type;if(Zt(r))return fp(e,r,t)}return t}function u1(e,t,r,n,a,i,o,s,l){return e=kf(r,n,!0,e,a,i,o,s,l),e.context=f1(null),r=e.current,n=Wt(),a=Mn(r),i=sn(n,a),i.callback=t??null,On(r,i,a),e.current.lanes=a,mo(e,a,n),qt(e,n),e}function dl(e,t,r,n){var a=t.current,i=Wt(),o=Mn(a);return r=f1(r),t.context===null?t.context=r:t.pendingContext=r,t=sn(i,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=On(a,t,o),e!==null&&(Dr(e,a,o,i),bs(e,a,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function bf(e,t){ph(e,t),(e=e.alternate)&&ph(e,t)}function z2(){return null}var d1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tf(e){this._internalRoot=e}hl.prototype.render=Tf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(re(409));dl(e,t,null,null)};hl.prototype.unmount=Tf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pa(function(){dl(null,e,null,null)}),t[cn]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gh();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Cn.length&&t!==0&&t<Cn[r].priority;r++);Cn.splice(r,0,e),r===0&&Xh(e)}};function Sf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gh(){}function H2(e,t,r,n,a){if(a){if(typeof n=="function"){var i=n;n=function(){var f=el(o);i.call(f)}}var o=u1(t,n,e,0,null,!1,!1,"",gh);return e._reactRootContainer=o,e[cn]=o.current,so(e.nodeType===8?e.parentNode:e),pa(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var s=n;n=function(){var f=el(l);s.call(f)}}var l=kf(e,0,!1,null,null,!1,!1,"",gh);return e._reactRootContainer=l,e[cn]=l.current,so(e.nodeType===8?e.parentNode:e),pa(function(){dl(t,l,r,n)}),l}function gl(e,t,r,n,a){var i=r._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var s=a;a=function(){var l=el(o);s.call(l)}}dl(t,o,e,a)}else o=H2(r,t,e,a,n);return el(o)}Hh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Wi(t.pendingLanes);r!==0&&(Vc(t,r|1),qt(t,nt()),!(ke&6)&&(ni=nt()+500,Gn()))}break;case 13:pa(function(){var n=fn(e,1);if(n!==null){var a=Wt();Dr(n,e,1,a)}}),bf(e,1)}};Xc=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var r=Wt();Dr(t,e,134217728,r)}bf(e,134217728)}};Wh=function(e){if(e.tag===13){var t=Mn(e),r=fn(e,t);if(r!==null){var n=Wt();Dr(r,e,t,n)}bf(e,t)}};Gh=function(){return Ce};Vh=function(e,t){var r=Ce;try{return Ce=e,t()}finally{Ce=r}};nc=function(e,t,r){switch(t){case"input":if(Q0(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=il(n);if(!a)throw Error(re(90));Eh(n),Q0(n,a)}}}break;case"textarea":kh(e,r);break;case"select":t=r.value,t!=null&&Xa(e,!!r.multiple,t,!1)}};Ph=wf;Ih=pa;var W2={usingClientEntryPoint:!1,Events:[wo,Ba,il,Ah,Fh,wf]},Bi={findFiberByHostInstance:ia,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G2={bundleType:Bi.bundleType,version:Bi.version,rendererPackageName:Bi.rendererPackageName,rendererConfig:Bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dh(e),e===null?null:e.stateNode},findFiberByHostInstance:Bi.findFiberByHostInstance||z2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ui.isDisabled&&Ui.supportsFiber))try{tl=Ui.inject(G2),$r=Ui}catch{}var Ui;fr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W2;fr.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sf(t))throw Error(re(200));return U2(e,t,null,r)};fr.createRoot=function(e,t){if(!Sf(e))throw Error(re(299));var r=!1,n="",a=d1;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=kf(e,1,!1,null,null,r,!1,n,a),e[cn]=t.current,so(e.nodeType===8?e.parentNode:e),new Tf(t)};fr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(re(188)):(e=Object.keys(e).join(","),Error(re(268,e)));return e=Dh(t),e=e===null?null:e.stateNode,e};fr.flushSync=function(e){return pa(e)};fr.hydrate=function(e,t,r){if(!pl(t))throw Error(re(200));return gl(null,e,t,!0,r)};fr.hydrateRoot=function(e,t,r){if(!Sf(e))throw Error(re(405));var n=r!=null&&r.hydratedSources||null,a=!1,i="",o=d1;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=u1(t,null,e,1,r??null,a,!1,i,o),e[cn]=t.current,so(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new hl(t)};fr.render=function(e,t,r){if(!pl(t))throw Error(re(200));return gl(null,e,t,!1,r)};fr.unmountComponentAtNode=function(e){if(!pl(e))throw Error(re(40));return e._reactRootContainer?(pa(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};fr.unstable_batchedUpdates=wf;fr.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!pl(r))throw Error(re(200));if(e==null||e._reactInternals===void 0)throw Error(re(38));return gl(e,t,r,!1,n)};fr.version="18.3.1-next-f1338f8080-20240426"});var x1=ta((m4,g1)=>{"use strict";function p1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p1)}catch(e){console.error(e)}}p1(),g1.exports=h1()});var v1=ta(Cf=>{"use strict";var m1=x1();Cf.createRoot=m1.createRoot,Cf.hydrateRoot=m1.hydrateRoot;var v4});var Hr=ft(it()),Cu=ft(v1());var Af=`/*
! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

[type='text'],input:where(:not([type])),[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select{
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, input:where(:not([type])):focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder{
  color: #6b7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder{
  color: #6b7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper{
  padding: 0;
}

::-webkit-date-and-time-value{
  min-height: 1.5em;
  text-align: inherit;
}

::-webkit-datetime-edit{
  display: inline-flex;
}

::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{
  padding-top: 0;
  padding-bottom: 0;
}

select{
  background-image: url(\${y});
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[multiple],[size]:where(select:not([size="1"])){
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio']{
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox']{
  border-radius: 0px;
}

[type='radio']{
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked{
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked{
  background-image: url(\${w});
}

@media (forced-colors: active) {

  [type='checkbox']:checked{
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='radio']:checked{
  background-image: url(\${x});
}

@media (forced-colors: active) {

  [type='radio']:checked{
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus{
  border-color: transparent;
  background-color: currentColor;
}

[type='checkbox']:indeterminate{
  background-image: url(\${E});
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media (forced-colors: active) {

  [type='checkbox']:indeterminate{
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus{
  border-color: transparent;
  background-color: currentColor;
}

[type='file']{
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus{
  outline: 1px solid ButtonText;
  outline: 1px auto -webkit-focus-ring-color;
}

*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.container{
  width: 100%;
}
@media (min-width: 640px){

  .container{
    max-width: 640px;
  }
}
@media (min-width: 768px){

  .container{
    max-width: 768px;
  }
}
@media (min-width: 1024px){

  .container{
    max-width: 1024px;
  }
}
@media (min-width: 1280px){

  .container{
    max-width: 1280px;
  }
}
@media (min-width: 1536px){

  .container{
    max-width: 1536px;
  }
}
.sr-only{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.pointer-events-none{
  pointer-events: none;
}
.pointer-events-auto{
  pointer-events: auto;
}
.\\!visible{
  visibility: visible !important;
}
.visible{
  visibility: visible;
}
.collapse{
  visibility: collapse;
}
.static{
  position: static;
}
.\\!fixed{
  position: fixed !important;
}
.fixed{
  position: fixed;
}
.absolute{
  position: absolute;
}
.relative{
  position: relative;
}
.sticky{
  position: sticky;
}
.inset-0{
  inset: 0;
}
.-bottom-3{
  bottom: -12px;
}
.-left-2{
  left: -8px;
}
.-right-2{
  right: -8px;
}
.-right-3{
  right: -12px;
}
.-top-2{
  top: -8px;
}
.-top-3{
  top: -12px;
}
.-top-4{
  top: -16px;
}
.-top-8{
  top: -32px;
}
.bottom-0{
  bottom: 0;
}
.bottom-2{
  bottom: 8px;
}
.bottom-full{
  bottom: 100%;
}
.left-0{
  left: 0;
}
.left-1\\/2{
  left: 50%;
}
.left-full{
  left: 100%;
}
.right-0{
  right: 0;
}
.right-2{
  right: 8px;
}
.right-3{
  right: 12px;
}
.right-4{
  right: 16px;
}
.right-full{
  right: 100%;
}
.top-0{
  top: 0;
}
.top-4{
  top: 16px;
}
.top-full{
  top: 100%;
}
.z-0{
  z-index: 0;
}
.z-10{
  z-index: 10;
}
.z-20{
  z-index: 20;
}
.z-50{
  z-index: 50;
}
.z-\\[9999999999\\]{
  z-index: 9999999999;
}
.z-\\[999999999\\]{
  z-index: 999999999;
}
.m-0{
  margin: 0;
}
.mx-2{
  margin-left: 8px;
  margin-right: 8px;
}
.mx-auto{
  margin-left: auto;
  margin-right: auto;
}
.my-2{
  margin-top: 8px;
  margin-bottom: 8px;
}
.mb-0{
  margin-bottom: 0;
}
.mb-0\\.5{
  margin-bottom: 2px;
}
.mb-1{
  margin-bottom: 4px;
}
.mb-1\\.5{
  margin-bottom: 6px;
}
.mb-2{
  margin-bottom: 8px;
}
.mb-3{
  margin-bottom: 12px;
}
.mb-4{
  margin-bottom: 16px;
}
.mb-5{
  margin-bottom: 20px;
}
.mb-6{
  margin-bottom: 24px;
}
.mb-8{
  margin-bottom: 32px;
}
.ml-0{
  margin-left: 0;
}
.ml-0\\.5{
  margin-left: 2px;
}
.ml-1{
  margin-left: 4px;
}
.ml-2{
  margin-left: 8px;
}
.ml-3{
  margin-left: 12px;
}
.ml-4{
  margin-left: 16px;
}
.ml-7{
  margin-left: 28px;
}
.mr-1{
  margin-right: 4px;
}
.mr-2{
  margin-right: 8px;
}
.mr-3{
  margin-right: 12px;
}
.mt-0{
  margin-top: 0;
}
.mt-0\\.5{
  margin-top: 2px;
}
.mt-1{
  margin-top: 4px;
}
.mt-1\\.5{
  margin-top: 6px;
}
.mt-10{
  margin-top: 40px;
}
.mt-2{
  margin-top: 8px;
}
.mt-3{
  margin-top: 12px;
}
.mt-4{
  margin-top: 16px;
}
.mt-6{
  margin-top: 24px;
}
.mt-auto{
  margin-top: auto;
}
.box-border{
  box-sizing: border-box;
}
.line-clamp-2{
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.block{
  display: block;
}
.inline-block{
  display: inline-block;
}
.inline{
  display: inline;
}
.flex{
  display: flex;
}
.inline-flex{
  display: inline-flex;
}
.table{
  display: table;
}
.grid{
  display: grid;
}
.hidden{
  display: none;
}
.h-0{
  height: 0;
}
.h-1{
  height: 4px;
}
.h-1\\.5{
  height: 6px;
}
.h-10{
  height: 40px;
}
.h-12{
  height: 48px;
}
.h-14{
  height: 56px;
}
.h-16{
  height: 64px;
}
.h-2{
  height: 8px;
}
.h-20{
  height: 80px;
}
.h-3{
  height: 12px;
}
.h-3\\.5{
  height: 14px;
}
.h-4{
  height: 16px;
}
.h-48{
  height: 192px;
}
.h-5{
  height: 20px;
}
.h-6{
  height: 24px;
}
.h-64{
  height: 256px;
}
.h-7{
  height: 28px;
}
.h-8{
  height: 32px;
}
.h-auto{
  height: auto;
}
.h-fit{
  height: -moz-fit-content;
  height: fit-content;
}
.h-full{
  height: 100%;
}
.max-h-40{
  max-height: 160px;
}
.max-h-44{
  max-height: 176px;
}
.max-h-60{
  max-height: 240px;
}
.max-h-72{
  max-height: 288px;
}
.max-h-\\[300px\\]{
  max-height: 300px;
}
.max-h-\\[400px\\]{
  max-height: 400px;
}
.max-h-\\[80vh\\]{
  max-height: 80vh;
}
.max-h-\\[85vh\\]{
  max-height: 85vh;
}
.max-h-\\[90vh\\]{
  max-height: 90vh;
}
.max-h-full{
  max-height: 100%;
}
.min-h-0{
  min-height: 0;
}
.min-h-6{
  min-height: 24px;
}
.w-0{
  width: 0;
}
.w-1{
  width: 4px;
}
.w-1\\.5{
  width: 6px;
}
.w-10{
  width: 40px;
}
.w-12{
  width: 48px;
}
.w-14{
  width: 56px;
}
.w-16{
  width: 64px;
}
.w-2{
  width: 8px;
}
.w-20{
  width: 80px;
}
.w-3{
  width: 12px;
}
.w-3\\.5{
  width: 14px;
}
.w-36{
  width: 144px;
}
.w-4{
  width: 16px;
}
.w-48{
  width: 192px;
}
.w-5{
  width: 20px;
}
.w-6{
  width: 24px;
}
.w-64{
  width: 256px;
}
.w-7{
  width: 28px;
}
.w-8{
  width: 32px;
}
.w-\\[100px\\]{
  width: 100px;
}
.w-\\[1200px\\]{
  width: 1200px;
}
.w-\\[200px\\]{
  width: 200px;
}
.w-\\[260px\\]{
  width: 260px;
}
.w-\\[400px\\]{
  width: 400px;
}
.w-\\[450px\\]{
  width: 450px;
}
.w-\\[500px\\]{
  width: 500px;
}
.w-\\[600px\\]{
  width: 600px;
}
.w-\\[90\\%\\]{
  width: 90%;
}
.w-auto{
  width: auto;
}
.w-fit{
  width: -moz-fit-content;
  width: fit-content;
}
.w-full{
  width: 100%;
}
.w-screen{
  width: 100vw;
}
.min-w-0{
  min-width: 0;
}
.min-w-48{
  min-width: 192px;
}
.min-w-6{
  min-width: 24px;
}
.min-w-fit{
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-2xl{
  max-width: 672px;
}
.max-w-\\[400px\\]{
  max-width: 400px;
}
.max-w-full{
  max-width: 100%;
}
.max-w-md{
  max-width: 448px;
}
.max-w-sm{
  max-width: 384px;
}
.max-w-xl{
  max-width: 576px;
}
.flex-1{
  flex: 1 1 0%;
}
.flex-auto{
  flex: 1 1 auto;
}
.flex-none{
  flex: none;
}
.flex-shrink{
  flex-shrink: 1;
}
.flex-shrink-0{
  flex-shrink: 0;
}
.shrink-0{
  flex-shrink: 0;
}
.flex-grow{
  flex-grow: 1;
}
.origin-top-right{
  transform-origin: top right;
}
.-translate-x-1\\/2{
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-x-16{
  --tw-translate-x: -64px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-32{
  --tw-translate-y: -128px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-full{
  --tw-translate-y: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-32{
  --tw-translate-x: 128px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-16{
  --tw-translate-y: 64px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[1px\\]{
  --tw-translate-y: 1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90{
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-0{
  --tw-scale-x: 0;
  --tw-scale-y: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-100{
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform{
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform-gpu{
  transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes ping{

  75%, 100%{
    transform: scale(2);
    opacity: 0;
  }
}
.animate-ping{
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes pulse{

  50%{
    opacity: .5;
  }
}
.animate-pulse{
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes spin{

  to{
    transform: rotate(360deg);
  }
}
.animate-spin{
  animation: spin 1s linear infinite;
}
.cursor-default{
  cursor: default;
}
.cursor-not-allowed{
  cursor: not-allowed;
}
.cursor-pointer{
  cursor: pointer;
}
.cursor-wait{
  cursor: wait;
}
.select-none{
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.scroll-py-2{
  scroll-padding-top: 8px;
  scroll-padding-bottom: 8px;
}
.list-inside{
  list-style-position: inside;
}
.list-disc{
  list-style-type: disc;
}
.grid-cols-3{
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-cols-4{
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.flex-row{
  flex-direction: row;
}
.flex-col{
  flex-direction: column;
}
.items-start{
  align-items: flex-start;
}
.items-end{
  align-items: flex-end;
}
.items-center{
  align-items: center;
}
.items-baseline{
  align-items: baseline;
}
.justify-start{
  justify-content: flex-start;
}
.justify-end{
  justify-content: flex-end;
}
.justify-center{
  justify-content: center;
}
.justify-between{
  justify-content: space-between;
}
.gap-0{
  gap: 0;
}
.gap-0\\.5{
  gap: 2px;
}
.gap-1{
  gap: 4px;
}
.gap-1\\.5{
  gap: 6px;
}
.gap-16{
  gap: 64px;
}
.gap-2{
  gap: 8px;
}
.gap-2\\.5{
  gap: 10px;
}
.gap-3{
  gap: 12px;
}
.gap-4{
  gap: 16px;
}
.gap-6{
  gap: 24px;
}
.gap-x-1{
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-1\\.5{
  -moz-column-gap: 6px;
       column-gap: 6px;
}
.space-x-1 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(4px * var(--tw-space-x-reverse));
  margin-left: calc(4px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(8px * var(--tw-space-x-reverse));
  margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-3 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(12px * var(--tw-space-x-reverse));
  margin-left: calc(12px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-4 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(16px * var(--tw-space-x-reverse));
  margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(4px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(4px * var(--tw-space-y-reverse));
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6px * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(8px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(8px * var(--tw-space-y-reverse));
}
.space-y-3 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(12px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(12px * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(16px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(16px * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(24px * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]){
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-gray-100 > :not([hidden]) ~ :not([hidden]){
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}
.divide-gray-200 > :not([hidden]) ~ :not([hidden]){
  --tw-divide-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity));
}
.divide-gray-300 > :not([hidden]) ~ :not([hidden]){
  --tw-divide-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-divide-opacity));
}
.overflow-auto{
  overflow: auto;
}
.overflow-hidden{
  overflow: hidden;
}
.overflow-scroll{
  overflow: scroll;
}
.overflow-x-auto{
  overflow-x: auto;
}
.overflow-y-auto{
  overflow-y: auto;
}
.overflow-y-scroll{
  overflow-y: scroll;
}
.truncate{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-ellipsis{
  text-overflow: ellipsis;
}
.whitespace-nowrap{
  white-space: nowrap;
}
.break-all{
  word-break: break-all;
}
.rounded{
  border-radius: 4px;
}
.rounded-2xl{
  border-radius: 16px;
}
.rounded-\\[24px\\]{
  border-radius: 24px;
}
.rounded-full{
  border-radius: 9999px;
}
.rounded-lg{
  border-radius: 8px;
}
.rounded-md{
  border-radius: 6px;
}
.rounded-xl{
  border-radius: 12px;
}
.rounded-t{
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.rounded-t-2xl{
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.rounded-t-lg{
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.border{
  border-width: 1px;
}
.border-2{
  border-width: 2px;
}
.border-\\[3px\\]{
  border-width: 3px;
}
.border-b{
  border-bottom-width: 1px;
}
.border-b-2{
  border-bottom-width: 2px;
}
.border-l{
  border-left-width: 1px;
}
.border-l-\\[1px\\]{
  border-left-width: 1px;
}
.border-r{
  border-right-width: 1px;
}
.border-t{
  border-top-width: 1px;
}
.border-t-2{
  border-top-width: 2px;
}
.border-none{
  border-style: none;
}
.border-amber-400\\/30{
  border-color: rgb(251 191 36 / 0.3);
}
.border-amber-500\\/20{
  border-color: rgb(245 158 11 / 0.2);
}
.border-amber-500\\/30{
  border-color: rgb(245 158 11 / 0.3);
}
.border-blue-500\\/20{
  border-color: rgb(59 130 246 / 0.2);
}
.border-blue-500\\/30{
  border-color: rgb(59 130 246 / 0.3);
}
.border-emerald-400\\/30{
  border-color: rgb(52 211 153 / 0.3);
}
.border-emerald-500\\/30{
  border-color: rgb(16 185 129 / 0.3);
}
.border-gray-300{
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.border-gray-900{
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}
.border-indigo-400\\/30{
  border-color: rgb(129 140 248 / 0.3);
}
.border-orange-300\\/50{
  border-color: rgb(253 186 116 / 0.5);
}
.border-purple-400\\/50{
  border-color: rgb(192 132 252 / 0.5);
}
.border-purple-500\\/20{
  border-color: rgb(168 85 247 / 0.2);
}
.border-purple-500\\/30{
  border-color: rgb(168 85 247 / 0.3);
}
.border-purple-500\\/40{
  border-color: rgb(168 85 247 / 0.4);
}
.border-purple-500\\/50{
  border-color: rgb(168 85 247 / 0.5);
}
.border-red-500\\/30{
  border-color: rgb(239 68 68 / 0.3);
}
.border-rose-500\\/30{
  border-color: rgb(244 63 94 / 0.3);
}
.border-white{
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}
.border-white\\/10{
  border-color: rgb(255 255 255 / 0.1);
}
.border-white\\/5{
  border-color: rgb(255 255 255 / 0.05);
}
.border-yellow-500\\/20{
  border-color: rgb(234 179 8 / 0.2);
}
.border-zinc-400{
  --tw-border-opacity: 1;
  border-color: rgb(161 161 170 / var(--tw-border-opacity));
}
.border-zinc-500\\/30{
  border-color: rgb(113 113 122 / 0.3);
}
.border-zinc-600{
  --tw-border-opacity: 1;
  border-color: rgb(82 82 91 / var(--tw-border-opacity));
}
.border-zinc-600\\/30{
  border-color: rgb(82 82 91 / 0.3);
}
.border-zinc-600\\/50{
  border-color: rgb(82 82 91 / 0.5);
}
.border-zinc-700{
  --tw-border-opacity: 1;
  border-color: rgb(63 63 70 / var(--tw-border-opacity));
}
.border-zinc-700\\/30{
  border-color: rgb(63 63 70 / 0.3);
}
.border-zinc-700\\/50{
  border-color: rgb(63 63 70 / 0.5);
}
.border-zinc-800{
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity));
}
.border-zinc-800\\/50{
  border-color: rgb(39 39 42 / 0.5);
}
.border-zinc-900{
  --tw-border-opacity: 1;
  border-color: rgb(24 24 27 / var(--tw-border-opacity));
}
.bg-amber-200\\/90{
  background-color: rgb(253 230 138 / 0.9);
}
.bg-amber-500\\/10{
  background-color: rgb(245 158 11 / 0.1);
}
.bg-amber-500\\/20{
  background-color: rgb(245 158 11 / 0.2);
}
.bg-black\\/20{
  background-color: rgb(0 0 0 / 0.2);
}
.bg-black\\/40{
  background-color: rgb(0 0 0 / 0.4);
}
.bg-black\\/60{
  background-color: rgb(0 0 0 / 0.6);
}
.bg-black\\/70{
  background-color: rgb(0 0 0 / 0.7);
}
.bg-black\\/80{
  background-color: rgb(0 0 0 / 0.8);
}
.bg-blue-200{
  --tw-bg-opacity: 1;
  background-color: rgb(191 219 254 / var(--tw-bg-opacity));
}
.bg-blue-500{
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
.bg-blue-500\\/10{
  background-color: rgb(59 130 246 / 0.1);
}
.bg-blue-500\\/20{
  background-color: rgb(59 130 246 / 0.2);
}
.bg-blue-500\\/5{
  background-color: rgb(59 130 246 / 0.05);
}
.bg-blue-900\\/50{
  background-color: rgb(30 58 138 / 0.5);
}
.bg-emerald-400{
  --tw-bg-opacity: 1;
  background-color: rgb(52 211 153 / var(--tw-bg-opacity));
}
.bg-emerald-500\\/20{
  background-color: rgb(16 185 129 / 0.2);
}
.bg-gray-100{
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.bg-gray-300{
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}
.bg-gray-500{
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}
.bg-gray-900{
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
.bg-gray-900\\/80{
  background-color: rgb(17 24 39 / 0.8);
}
.bg-green-100{
  --tw-bg-opacity: 1;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity));
}
.bg-green-400{
  --tw-bg-opacity: 1;
  background-color: rgb(74 222 128 / var(--tw-bg-opacity));
}
.bg-green-500{
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}
.bg-green-500\\/20{
  background-color: rgb(34 197 94 / 0.2);
}
.bg-green-600{
  --tw-bg-opacity: 1;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity));
}
.bg-green-900\\/50{
  background-color: rgb(20 83 45 / 0.5);
}
.bg-indigo-500\\/10{
  background-color: rgb(99 102 241 / 0.1);
}
.bg-indigo-500\\/20{
  background-color: rgb(99 102 241 / 0.2);
}
.bg-indigo-500\\/30{
  background-color: rgb(99 102 241 / 0.3);
}
.bg-indigo-600{
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
}
.bg-orange-500\\/10{
  background-color: rgb(249 115 22 / 0.1);
}
.bg-purple-400{
  --tw-bg-opacity: 1;
  background-color: rgb(192 132 252 / var(--tw-bg-opacity));
}
.bg-purple-500{
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity));
}
.bg-purple-500\\/10{
  background-color: rgb(168 85 247 / 0.1);
}
.bg-purple-500\\/20{
  background-color: rgb(168 85 247 / 0.2);
}
.bg-purple-500\\/50{
  background-color: rgb(168 85 247 / 0.5);
}
.bg-red-100{
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity));
}
.bg-red-300{
  --tw-bg-opacity: 1;
  background-color: rgb(252 165 165 / var(--tw-bg-opacity));
}
.bg-red-500{
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}
.bg-red-500\\/10{
  background-color: rgb(239 68 68 / 0.1);
}
.bg-red-500\\/20{
  background-color: rgb(239 68 68 / 0.2);
}
.bg-red-900\\/50{
  background-color: rgb(127 29 29 / 0.5);
}
.bg-rose-400{
  --tw-bg-opacity: 1;
  background-color: rgb(251 113 133 / var(--tw-bg-opacity));
}
.bg-rose-500\\/20{
  background-color: rgb(244 63 94 / 0.2);
}
.bg-slate-100{
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}
.bg-transparent{
  background-color: transparent;
}
.bg-white{
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.bg-yellow-100{
  --tw-bg-opacity: 1;
  background-color: rgb(254 249 195 / var(--tw-bg-opacity));
}
.bg-yellow-200{
  --tw-bg-opacity: 1;
  background-color: rgb(254 240 138 / var(--tw-bg-opacity));
}
.bg-yellow-400{
  --tw-bg-opacity: 1;
  background-color: rgb(250 204 21 / var(--tw-bg-opacity));
}
.bg-yellow-500{
  --tw-bg-opacity: 1;
  background-color: rgb(234 179 8 / var(--tw-bg-opacity));
}
.bg-yellow-500\\/10{
  background-color: rgb(234 179 8 / 0.1);
}
.bg-yellow-500\\/20{
  background-color: rgb(234 179 8 / 0.2);
}
.bg-zinc-400{
  --tw-bg-opacity: 1;
  background-color: rgb(161 161 170 / var(--tw-bg-opacity));
}
.bg-zinc-500{
  --tw-bg-opacity: 1;
  background-color: rgb(113 113 122 / var(--tw-bg-opacity));
}
.bg-zinc-500\\/20{
  background-color: rgb(113 113 122 / 0.2);
}
.bg-zinc-600{
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 91 / var(--tw-bg-opacity));
}
.bg-zinc-700{
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity));
}
.bg-zinc-700\\/30{
  background-color: rgb(63 63 70 / 0.3);
}
.bg-zinc-700\\/40{
  background-color: rgb(63 63 70 / 0.4);
}
.bg-zinc-700\\/50{
  background-color: rgb(63 63 70 / 0.5);
}
.bg-zinc-800{
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}
.bg-zinc-800\\/20{
  background-color: rgb(39 39 42 / 0.2);
}
.bg-zinc-800\\/30{
  background-color: rgb(39 39 42 / 0.3);
}
.bg-zinc-800\\/40{
  background-color: rgb(39 39 42 / 0.4);
}
.bg-zinc-800\\/50{
  background-color: rgb(39 39 42 / 0.5);
}
.bg-zinc-900{
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity));
}
.bg-zinc-900\\/50{
  background-color: rgb(24 24 27 / 0.5);
}
.bg-zinc-900\\/95{
  background-color: rgb(24 24 27 / 0.95);
}
.bg-opacity-10{
  --tw-bg-opacity: 0.1;
}
.bg-opacity-25{
  --tw-bg-opacity: 0.25;
}
.bg-opacity-40{
  --tw-bg-opacity: 0.4;
}
.bg-opacity-50{
  --tw-bg-opacity: 0.5;
}
.bg-gradient-to-b{
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}
.bg-gradient-to-br{
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
.bg-gradient-to-r{
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.bg-gradient-to-tr{
  background-image: linear-gradient(to top right, var(--tw-gradient-stops));
}
.from-amber-400{
  --tw-gradient-from: #fbbf24 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(251 191 36 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-amber-500{
  --tw-gradient-from: #f59e0b var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-amber-500\\/10{
  --tw-gradient-from: rgb(245 158 11 / 0.1) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-amber-500\\/20{
  --tw-gradient-from: rgb(245 158 11 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-amber-500\\/5{
  --tw-gradient-from: rgb(245 158 11 / 0.05) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-amber-500\\/90{
  --tw-gradient-from: rgb(245 158 11 / 0.9) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-blue-500{
  --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-blue-500\\/20{
  --tw-gradient-from: rgb(59 130 246 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-emerald-500\\/90{
  --tw-gradient-from: rgb(16 185 129 / 0.9) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(16 185 129 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-green-400{
  --tw-gradient-from: #4ade80 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(74 222 128 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-green-500{
  --tw-gradient-from: #22c55e var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(34 197 94 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-green-500\\/20{
  --tw-gradient-from: rgb(34 197 94 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(34 197 94 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-indigo-500{
  --tw-gradient-from: #6366f1 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-indigo-500\\/20{
  --tw-gradient-from: rgb(99 102 241 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-indigo-600{
  --tw-gradient-from: #4f46e5 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(79 70 229 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-orange-500{
  --tw-gradient-from: #f97316 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(249 115 22 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-400{
  --tw-gradient-from: #c084fc var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(192 132 252 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-500{
  --tw-gradient-from: #a855f7 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-500\\/10{
  --tw-gradient-from: rgb(168 85 247 / 0.1) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-500\\/20{
  --tw-gradient-from: rgb(168 85 247 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-600{
  --tw-gradient-from: #9333ea var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(147 51 234 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-600\\/20{
  --tw-gradient-from: rgb(147 51 234 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(147 51 234 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-900\\/20{
  --tw-gradient-from: rgb(88 28 135 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(88 28 135 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-rose-500\\/20{
  --tw-gradient-from: rgb(244 63 94 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(244 63 94 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-yellow-200{
  --tw-gradient-from: #fef08a var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(254 240 138 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-yellow-500{
  --tw-gradient-from: #eab308 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(234 179 8 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-700{
  --tw-gradient-from: #3f3f46 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(63 63 70 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-700\\/80{
  --tw-gradient-from: rgb(63 63 70 / 0.8) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(63 63 70 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-800{
  --tw-gradient-from: #27272a var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(39 39 42 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-800\\/50{
  --tw-gradient-from: rgb(39 39 42 / 0.5) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(39 39 42 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-800\\/80{
  --tw-gradient-from: rgb(39 39 42 / 0.8) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(39 39 42 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-800\\/95{
  --tw-gradient-from: rgb(39 39 42 / 0.95) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(39 39 42 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-900{
  --tw-gradient-from: #18181b var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(24 24 27 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-900\\/95{
  --tw-gradient-from: rgb(24 24 27 / 0.95) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(24 24 27 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.via-zinc-900{
  --tw-gradient-to: rgb(24 24 27 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #18181b var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-zinc-900\\/50{
  --tw-gradient-to: rgb(24 24 27 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), rgb(24 24 27 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.to-amber-400{
  --tw-gradient-to: #fbbf24 var(--tw-gradient-to-position);
}
.to-amber-500{
  --tw-gradient-to: #f59e0b var(--tw-gradient-to-position);
}
.to-amber-600\\/10{
  --tw-gradient-to: rgb(217 119 6 / 0.1) var(--tw-gradient-to-position);
}
.to-amber-600\\/90{
  --tw-gradient-to: rgb(217 119 6 / 0.9) var(--tw-gradient-to-position);
}
.to-blue-400{
  --tw-gradient-to: #60a5fa var(--tw-gradient-to-position);
}
.to-blue-500{
  --tw-gradient-to: #3b82f6 var(--tw-gradient-to-position);
}
.to-blue-500\\/20{
  --tw-gradient-to: rgb(59 130 246 / 0.2) var(--tw-gradient-to-position);
}
.to-cyan-400{
  --tw-gradient-to: #22d3ee var(--tw-gradient-to-position);
}
.to-cyan-500\\/20{
  --tw-gradient-to: rgb(6 182 212 / 0.2) var(--tw-gradient-to-position);
}
.to-emerald-400{
  --tw-gradient-to: #34d399 var(--tw-gradient-to-position);
}
.to-emerald-500{
  --tw-gradient-to: #10b981 var(--tw-gradient-to-position);
}
.to-emerald-500\\/20{
  --tw-gradient-to: rgb(16 185 129 / 0.2) var(--tw-gradient-to-position);
}
.to-emerald-600{
  --tw-gradient-to: #059669 var(--tw-gradient-to-position);
}
.to-emerald-600\\/90{
  --tw-gradient-to: rgb(5 150 105 / 0.9) var(--tw-gradient-to-position);
}
.to-green-400{
  --tw-gradient-to: #4ade80 var(--tw-gradient-to-position);
}
.to-indigo-600{
  --tw-gradient-to: #4f46e5 var(--tw-gradient-to-position);
}
.to-orange-400{
  --tw-gradient-to: #fb923c var(--tw-gradient-to-position);
}
.to-orange-500\\/20{
  --tw-gradient-to: rgb(249 115 22 / 0.2) var(--tw-gradient-to-position);
}
.to-pink-400{
  --tw-gradient-to: #f472b6 var(--tw-gradient-to-position);
}
.to-pink-500{
  --tw-gradient-to: #ec4899 var(--tw-gradient-to-position);
}
.to-pink-500\\/20{
  --tw-gradient-to: rgb(236 72 153 / 0.2) var(--tw-gradient-to-position);
}
.to-pink-600{
  --tw-gradient-to: #db2777 var(--tw-gradient-to-position);
}
.to-purple-400{
  --tw-gradient-to: #c084fc var(--tw-gradient-to-position);
}
.to-purple-500{
  --tw-gradient-to: #a855f7 var(--tw-gradient-to-position);
}
.to-purple-500\\/10{
  --tw-gradient-to: rgb(168 85 247 / 0.1) var(--tw-gradient-to-position);
}
.to-purple-600\\/10{
  --tw-gradient-to: rgb(147 51 234 / 0.1) var(--tw-gradient-to-position);
}
.to-purple-800\\/20{
  --tw-gradient-to: rgb(107 33 168 / 0.2) var(--tw-gradient-to-position);
}
.to-purple-900\\/30{
  --tw-gradient-to: rgb(88 28 135 / 0.3) var(--tw-gradient-to-position);
}
.to-transparent{
  --tw-gradient-to: transparent var(--tw-gradient-to-position);
}
.to-violet-400{
  --tw-gradient-to: #a78bfa var(--tw-gradient-to-position);
}
.to-violet-500\\/20{
  --tw-gradient-to: rgb(139 92 246 / 0.2) var(--tw-gradient-to-position);
}
.to-yellow-400{
  --tw-gradient-to: #facc15 var(--tw-gradient-to-position);
}
.to-yellow-500{
  --tw-gradient-to: #eab308 var(--tw-gradient-to-position);
}
.to-yellow-500\\/10{
  --tw-gradient-to: rgb(234 179 8 / 0.1) var(--tw-gradient-to-position);
}
.to-yellow-500\\/5{
  --tw-gradient-to: rgb(234 179 8 / 0.05) var(--tw-gradient-to-position);
}
.to-zinc-500{
  --tw-gradient-to: #71717a var(--tw-gradient-to-position);
}
.to-zinc-600{
  --tw-gradient-to: #52525b var(--tw-gradient-to-position);
}
.to-zinc-700{
  --tw-gradient-to: #3f3f46 var(--tw-gradient-to-position);
}
.to-zinc-800{
  --tw-gradient-to: #27272a var(--tw-gradient-to-position);
}
.to-zinc-800\\/30{
  --tw-gradient-to: rgb(39 39 42 / 0.3) var(--tw-gradient-to-position);
}
.to-zinc-800\\/50{
  --tw-gradient-to: rgb(39 39 42 / 0.5) var(--tw-gradient-to-position);
}
.to-zinc-800\\/80{
  --tw-gradient-to: rgb(39 39 42 / 0.8) var(--tw-gradient-to-position);
}
.to-zinc-800\\/90{
  --tw-gradient-to: rgb(39 39 42 / 0.9) var(--tw-gradient-to-position);
}
.to-zinc-800\\/95{
  --tw-gradient-to: rgb(39 39 42 / 0.95) var(--tw-gradient-to-position);
}
.to-zinc-900{
  --tw-gradient-to: #18181b var(--tw-gradient-to-position);
}
.to-zinc-900\\/95{
  --tw-gradient-to: rgb(24 24 27 / 0.95) var(--tw-gradient-to-position);
}
.to-zinc-950{
  --tw-gradient-to: #09090b var(--tw-gradient-to-position);
}
.bg-clip-text{
  -webkit-background-clip: text;
          background-clip: text;
}
.fill-green-500{
  fill: #22c55e;
}
.fill-white{
  fill: #fff;
}
.object-cover{
  -o-object-fit: cover;
     object-fit: cover;
}
.p-1{
  padding: 4px;
}
.p-1\\.5{
  padding: 6px;
}
.p-2{
  padding: 8px;
}
.p-2\\.5{
  padding: 10px;
}
.p-3{
  padding: 12px;
}
.p-4{
  padding: 16px;
}
.p-6{
  padding: 24px;
}
.px-1{
  padding-left: 4px;
  padding-right: 4px;
}
.px-1\\.5{
  padding-left: 6px;
  padding-right: 6px;
}
.px-2{
  padding-left: 8px;
  padding-right: 8px;
}
.px-2\\.5{
  padding-left: 10px;
  padding-right: 10px;
}
.px-3{
  padding-left: 12px;
  padding-right: 12px;
}
.px-4{
  padding-left: 16px;
  padding-right: 16px;
}
.px-6{
  padding-left: 24px;
  padding-right: 24px;
}
.px-8{
  padding-left: 32px;
  padding-right: 32px;
}
.py-0{
  padding-top: 0;
  padding-bottom: 0;
}
.py-0\\.5{
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1{
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5{
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-2{
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-2\\.5{
  padding-top: 10px;
  padding-bottom: 10px;
}
.py-3{
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4{
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-6{
  padding-top: 24px;
  padding-bottom: 24px;
}
.pb-3{
  padding-bottom: 12px;
}
.pb-4{
  padding-bottom: 16px;
}
.pb-6{
  padding-bottom: 24px;
}
.pl-4{
  padding-left: 16px;
}
.pr-1{
  padding-right: 4px;
}
.pr-2{
  padding-right: 8px;
}
.pr-3{
  padding-right: 12px;
}
.pr-4{
  padding-right: 16px;
}
.pt-0{
  padding-top: 0;
}
.pt-0\\.5{
  padding-top: 2px;
}
.pt-2{
  padding-top: 8px;
}
.pt-3{
  padding-top: 12px;
}
.text-left{
  text-align: left;
}
.text-center{
  text-align: center;
}
.text-right{
  text-align: right;
}
.font-mono{
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.font-sans{
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.font-serif{
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}
.text-2xl{
  font-size: 24px;
  line-height: 32px;
}
.text-3xl{
  font-size: 30px;
  line-height: 36px;
}
.text-4xl{
  font-size: 36px;
  line-height: 36px;
}
.text-\\[10px\\]{
  font-size: 10px;
}
.text-\\[11px\\]{
  font-size: 11px;
}
.text-base{
  font-size: 16px;
  line-height: 24px;
}
.text-lg{
  font-size: 18px;
  line-height: 28px;
}
.text-sm{
  font-size: 14px;
  line-height: 20px;
}
.text-xl{
  font-size: 20px;
  line-height: 28px;
}
.text-xs{
  font-size: 12px;
  line-height: 16px;
}
.font-bold{
  font-weight: 700;
}
.font-medium{
  font-weight: 500;
}
.font-normal{
  font-weight: 400;
}
.font-semibold{
  font-weight: 600;
}
.uppercase{
  text-transform: uppercase;
}
.lowercase{
  text-transform: lowercase;
}
.italic{
  font-style: italic;
}
.leading-6{
  line-height: 24px;
}
.leading-relaxed{
  line-height: 1.625;
}
.tracking-tight{
  letter-spacing: -0.025em;
}
.tracking-wide{
  letter-spacing: 0.025em;
}
.tracking-wider{
  letter-spacing: 0.05em;
}
.text-amber-200\\/60{
  color: rgb(253 230 138 / 0.6);
}
.text-amber-400{
  --tw-text-opacity: 1;
  color: rgb(251 191 36 / var(--tw-text-opacity));
}
.text-amber-500\\/50{
  color: rgb(245 158 11 / 0.5);
}
.text-amber-500\\/80{
  color: rgb(245 158 11 / 0.8);
}
.text-amber-900{
  --tw-text-opacity: 1;
  color: rgb(120 53 15 / var(--tw-text-opacity));
}
.text-black{
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-blue-200{
  --tw-text-opacity: 1;
  color: rgb(191 219 254 / var(--tw-text-opacity));
}
.text-blue-200\\/60{
  color: rgb(191 219 254 / 0.6);
}
.text-blue-300{
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
}
.text-blue-400{
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity));
}
.text-cyan-400{
  --tw-text-opacity: 1;
  color: rgb(34 211 238 / var(--tw-text-opacity));
}
.text-emerald-300{
  --tw-text-opacity: 1;
  color: rgb(110 231 183 / var(--tw-text-opacity));
}
.text-emerald-400{
  --tw-text-opacity: 1;
  color: rgb(52 211 153 / var(--tw-text-opacity));
}
.text-gray-200{
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}
.text-gray-300{
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}
.text-gray-400{
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.text-gray-500{
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.text-gray-600{
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}
.text-gray-800{
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
.text-gray-900{
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.text-green-200{
  --tw-text-opacity: 1;
  color: rgb(187 247 208 / var(--tw-text-opacity));
}
.text-green-200\\/60{
  color: rgb(187 247 208 / 0.6);
}
.text-green-400{
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity));
}
.text-green-500{
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity));
}
.text-green-700{
  --tw-text-opacity: 1;
  color: rgb(21 128 61 / var(--tw-text-opacity));
}
.text-green-800{
  --tw-text-opacity: 1;
  color: rgb(22 101 52 / var(--tw-text-opacity));
}
.text-indigo-200\\/60{
  color: rgb(199 210 254 / 0.6);
}
.text-indigo-300{
  --tw-text-opacity: 1;
  color: rgb(165 180 252 / var(--tw-text-opacity));
}
.text-indigo-400{
  --tw-text-opacity: 1;
  color: rgb(129 140 248 / var(--tw-text-opacity));
}
.text-indigo-600{
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity));
}
.text-orange-400{
  --tw-text-opacity: 1;
  color: rgb(251 146 60 / var(--tw-text-opacity));
}
.text-orange-400\\/30{
  color: rgb(251 146 60 / 0.3);
}
.text-pink-400{
  --tw-text-opacity: 1;
  color: rgb(244 114 182 / var(--tw-text-opacity));
}
.text-purple-100{
  --tw-text-opacity: 1;
  color: rgb(243 232 255 / var(--tw-text-opacity));
}
.text-purple-200{
  --tw-text-opacity: 1;
  color: rgb(233 213 255 / var(--tw-text-opacity));
}
.text-purple-300{
  --tw-text-opacity: 1;
  color: rgb(216 180 254 / var(--tw-text-opacity));
}
.text-purple-400{
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity));
}
.text-purple-500{
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity));
}
.text-purple-500\\/50{
  color: rgb(168 85 247 / 0.5);
}
.text-purple-500\\/80{
  color: rgb(168 85 247 / 0.8);
}
.text-red-200{
  --tw-text-opacity: 1;
  color: rgb(254 202 202 / var(--tw-text-opacity));
}
.text-red-400{
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity));
}
.text-red-500{
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}
.text-red-600\\/75{
  color: rgb(220 38 38 / 0.75);
}
.text-rose-200\\/60{
  color: rgb(254 205 211 / 0.6);
}
.text-rose-300{
  --tw-text-opacity: 1;
  color: rgb(253 164 175 / var(--tw-text-opacity));
}
.text-rose-400{
  --tw-text-opacity: 1;
  color: rgb(251 113 133 / var(--tw-text-opacity));
}
.text-transparent{
  color: transparent;
}
.text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.text-white\\/60{
  color: rgb(255 255 255 / 0.6);
}
.text-white\\/70{
  color: rgb(255 255 255 / 0.7);
}
.text-white\\/90{
  color: rgb(255 255 255 / 0.9);
}
.text-yellow-200\\/60{
  color: rgb(254 240 138 / 0.6);
}
.text-yellow-200\\/80{
  color: rgb(254 240 138 / 0.8);
}
.text-yellow-200\\/90{
  color: rgb(254 240 138 / 0.9);
}
.text-yellow-300{
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity));
}
.text-yellow-400{
  --tw-text-opacity: 1;
  color: rgb(250 204 21 / var(--tw-text-opacity));
}
.text-yellow-500{
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity));
}
.text-yellow-500\\/20{
  color: rgb(234 179 8 / 0.2);
}
.text-yellow-900{
  --tw-text-opacity: 1;
  color: rgb(113 63 18 / var(--tw-text-opacity));
}
.text-zinc-100{
  --tw-text-opacity: 1;
  color: rgb(244 244 245 / var(--tw-text-opacity));
}
.text-zinc-200{
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity));
}
.text-zinc-300{
  --tw-text-opacity: 1;
  color: rgb(212 212 216 / var(--tw-text-opacity));
}
.text-zinc-400{
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity));
}
.text-zinc-500{
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity));
}
.text-zinc-600{
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity));
}
.text-zinc-700{
  --tw-text-opacity: 1;
  color: rgb(63 63 70 / var(--tw-text-opacity));
}
.text-zinc-700\\/30{
  color: rgb(63 63 70 / 0.3);
}
.text-zinc-900{
  --tw-text-opacity: 1;
  color: rgb(24 24 27 / var(--tw-text-opacity));
}
.underline{
  text-decoration-line: underline;
}
.line-through{
  text-decoration-line: line-through;
}
.placeholder-zinc-500::-moz-placeholder{
  --tw-placeholder-opacity: 1;
  color: rgb(113 113 122 / var(--tw-placeholder-opacity));
}
.placeholder-zinc-500::placeholder{
  --tw-placeholder-opacity: 1;
  color: rgb(113 113 122 / var(--tw-placeholder-opacity));
}
.opacity-0{
  opacity: 0;
}
.opacity-100{
  opacity: 1;
}
.opacity-25{
  opacity: 0.25;
}
.opacity-50{
  opacity: 0.5;
}
.opacity-75{
  opacity: 0.75;
}
.shadow{
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-2xl{
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\\[0_8px_32px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.4\\)\\]{
  --tw-shadow: 0 8px 32px rgba(0,0,0,0.4);
  --tw-shadow-colored: 0 8px 32px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-inner{
  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg{
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm{
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl{
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-indigo-500\\/20{
  --tw-shadow-color: rgb(99 102 241 / 0.2);
  --tw-shadow: var(--tw-shadow-colored);
}
.shadow-purple-500\\/5{
  --tw-shadow-color: rgb(168 85 247 / 0.05);
  --tw-shadow: var(--tw-shadow-colored);
}
.outline{
  outline-style: solid;
}
.ring-1{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-2{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-amber-500\\/20{
  --tw-ring-color: rgb(245 158 11 / 0.2);
}
.ring-black{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));
}
.ring-indigo-400\\/60{
  --tw-ring-color: rgb(129 140 248 / 0.6);
}
.ring-white\\/5{
  --tw-ring-color: rgb(255 255 255 / 0.05);
}
.ring-opacity-5{
  --tw-ring-opacity: 0.05;
}
.blur{
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.blur-3xl{
  --tw-blur: blur(64px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter{
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-lg{
  --tw-backdrop-blur: blur(16px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-md{
  --tw-backdrop-blur: blur(12px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-sm{
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-filter{
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all{
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-opacity{
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform{
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-200{
  transition-duration: 200ms;
}
.duration-300{
  transition-duration: 300ms;
}
.duration-500{
  transition-duration: 500ms;
}
.duration-700{
  transition-duration: 700ms;
}
.ease-in-out{
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out{
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
@tailwind forms;
.hover\\:-translate-y-1:hover{
  --tw-translate-y: -4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:translate-y-\\[-2px\\]:hover{
  --tw-translate-y: -2px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:scale-105:hover{
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:scale-\\[1\\.02\\]:hover{
  --tw-scale-x: 1.02;
  --tw-scale-y: 1.02;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:rounded-full:hover{
  border-radius: 9999px;
}
.hover\\:border-amber-500\\/40:hover{
  border-color: rgb(245 158 11 / 0.4);
}
.hover\\:border-indigo-500\\/20:hover{
  border-color: rgb(99 102 241 / 0.2);
}
.hover\\:border-purple-500\\/20:hover{
  border-color: rgb(168 85 247 / 0.2);
}
.hover\\:border-purple-500\\/30:hover{
  border-color: rgb(168 85 247 / 0.3);
}
.hover\\:border-purple-500\\/50:hover{
  border-color: rgb(168 85 247 / 0.5);
}
.hover\\:border-red-500\\/30:hover{
  border-color: rgb(239 68 68 / 0.3);
}
.hover\\:border-zinc-600\\/50:hover{
  border-color: rgb(82 82 91 / 0.5);
}
.hover\\:bg-amber-500\\/30:hover{
  background-color: rgb(245 158 11 / 0.3);
}
.hover\\:bg-black:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}
.hover\\:bg-blue-300:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(147 197 253 / var(--tw-bg-opacity));
}
.hover\\:bg-blue-500:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
.hover\\:bg-gray-100:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.hover\\:bg-gray-50:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.hover\\:bg-green-500:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}
.hover\\:bg-green-500\\/30:hover{
  background-color: rgb(34 197 94 / 0.3);
}
.hover\\:bg-green-600:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity));
}
.hover\\:bg-indigo-500:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(99 102 241 / var(--tw-bg-opacity));
}
.hover\\:bg-indigo-700:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(67 56 202 / var(--tw-bg-opacity));
}
.hover\\:bg-purple-400:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(192 132 252 / var(--tw-bg-opacity));
}
.hover\\:bg-purple-500:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity));
}
.hover\\:bg-purple-500\\/20:hover{
  background-color: rgb(168 85 247 / 0.2);
}
.hover\\:bg-red-400:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(248 113 113 / var(--tw-bg-opacity));
}
.hover\\:bg-red-500\\/20:hover{
  background-color: rgb(239 68 68 / 0.2);
}
.hover\\:bg-red-500\\/30:hover{
  background-color: rgb(239 68 68 / 0.3);
}
.hover\\:bg-yellow-300:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity));
}
.hover\\:bg-zinc-600:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 91 / var(--tw-bg-opacity));
}
.hover\\:bg-zinc-600\\/40:hover{
  background-color: rgb(82 82 91 / 0.4);
}
.hover\\:bg-zinc-600\\/50:hover{
  background-color: rgb(82 82 91 / 0.5);
}
.hover\\:bg-zinc-700:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity));
}
.hover\\:bg-zinc-700\\/30:hover{
  background-color: rgb(63 63 70 / 0.3);
}
.hover\\:bg-zinc-700\\/40:hover{
  background-color: rgb(63 63 70 / 0.4);
}
.hover\\:bg-zinc-700\\/50:hover{
  background-color: rgb(63 63 70 / 0.5);
}
.hover\\:bg-zinc-700\\/60:hover{
  background-color: rgb(63 63 70 / 0.6);
}
.hover\\:bg-zinc-800:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}
.hover\\:bg-zinc-800\\/50:hover{
  background-color: rgb(39 39 42 / 0.5);
}
.hover\\:bg-zinc-800\\/80:hover{
  background-color: rgb(39 39 42 / 0.8);
}
.hover\\:from-amber-300:hover{
  --tw-gradient-from: #fcd34d var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(252 211 77 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-amber-400\\/90:hover{
  --tw-gradient-from: rgb(251 191 36 / 0.9) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(251 191 36 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-emerald-400\\/90:hover{
  --tw-gradient-from: rgb(52 211 153 / 0.9) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(52 211 153 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-indigo-400:hover{
  --tw-gradient-from: #818cf8 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(129 140 248 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-purple-500:hover{
  --tw-gradient-from: #a855f7 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-purple-500\\/10:hover{
  --tw-gradient-from: rgb(168 85 247 / 0.1) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-yellow-400:hover{
  --tw-gradient-from: #facc15 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(250 204 21 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-zinc-600:hover{
  --tw-gradient-from: #52525b var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(82 82 91 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-zinc-600\\/80:hover{
  --tw-gradient-from: rgb(82 82 91 / 0.8) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(82 82 91 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-zinc-700:hover{
  --tw-gradient-from: #3f3f46 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(63 63 70 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:to-amber-500\\/90:hover{
  --tw-gradient-to: rgb(245 158 11 / 0.9) var(--tw-gradient-to-position);
}
.hover\\:to-blue-500\\/10:hover{
  --tw-gradient-to: rgb(59 130 246 / 0.1) var(--tw-gradient-to-position);
}
.hover\\:to-emerald-500\\/90:hover{
  --tw-gradient-to: rgb(16 185 129 / 0.9) var(--tw-gradient-to-position);
}
.hover\\:to-indigo-500:hover{
  --tw-gradient-to: #6366f1 var(--tw-gradient-to-position);
}
.hover\\:to-orange-300:hover{
  --tw-gradient-to: #fdba74 var(--tw-gradient-to-position);
}
.hover\\:to-pink-500:hover{
  --tw-gradient-to: #ec4899 var(--tw-gradient-to-position);
}
.hover\\:to-purple-400:hover{
  --tw-gradient-to: #c084fc var(--tw-gradient-to-position);
}
.hover\\:to-yellow-300:hover{
  --tw-gradient-to: #fde047 var(--tw-gradient-to-position);
}
.hover\\:to-zinc-500:hover{
  --tw-gradient-to: #71717a var(--tw-gradient-to-position);
}
.hover\\:to-zinc-600:hover{
  --tw-gradient-to: #52525b var(--tw-gradient-to-position);
}
.hover\\:to-zinc-700\\/80:hover{
  --tw-gradient-to: rgb(63 63 70 / 0.8) var(--tw-gradient-to-position);
}
.hover\\:text-blue-300:hover{
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
}
.hover\\:text-gray-300:hover{
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}
.hover\\:text-gray-500:hover{
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.hover\\:text-gray-900:hover{
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.hover\\:text-purple-300:hover{
  --tw-text-opacity: 1;
  color: rgb(216 180 254 / var(--tw-text-opacity));
}
.hover\\:text-purple-400:hover{
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity));
}
.hover\\:text-red-300:hover{
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity));
}
.hover\\:text-red-400:hover{
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity));
}
.hover\\:text-white:hover{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.hover\\:text-zinc-200:hover{
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity));
}
.hover\\:text-zinc-300:hover{
  --tw-text-opacity: 1;
  color: rgb(212 212 216 / var(--tw-text-opacity));
}
.hover\\:shadow-lg:hover{
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.hover\\:shadow-xl:hover{
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.hover\\:shadow-amber-400\\/25:hover{
  --tw-shadow-color: rgb(251 191 36 / 0.25);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-green-500\\/20:hover{
  --tw-shadow-color: rgb(34 197 94 / 0.2);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-purple-500\\/10:hover{
  --tw-shadow-color: rgb(168 85 247 / 0.1);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-purple-500\\/20:hover{
  --tw-shadow-color: rgb(168 85 247 / 0.2);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-purple-500\\/25:hover{
  --tw-shadow-color: rgb(168 85 247 / 0.25);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-purple-500\\/5:hover{
  --tw-shadow-color: rgb(168 85 247 / 0.05);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-yellow-400\\/25:hover{
  --tw-shadow-color: rgb(250 204 21 / 0.25);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-zinc-500\\/25:hover{
  --tw-shadow-color: rgb(113 113 122 / 0.25);
  --tw-shadow: var(--tw-shadow-colored);
}
.focus\\:border-indigo-500:focus{
  --tw-border-opacity: 1;
  border-color: rgb(99 102 241 / var(--tw-border-opacity));
}
.focus\\:border-purple-500\\/50:focus{
  border-color: rgb(168 85 247 / 0.5);
}
.focus\\:outline-none:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\\:ring-1:focus{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-2:focus{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-blue-500:focus{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
}
.focus\\:ring-indigo-500:focus{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));
}
.focus\\:ring-indigo-600:focus{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(79 70 229 / var(--tw-ring-opacity));
}
.focus\\:ring-purple-500\\/50:focus{
  --tw-ring-color: rgb(168 85 247 / 0.5);
}
.focus\\:ring-offset-2:focus{
  --tw-ring-offset-width: 2px;
}
.focus-visible\\:outline:focus-visible{
  outline-style: solid;
}
.focus-visible\\:outline-2:focus-visible{
  outline-width: 2px;
}
.focus-visible\\:outline-offset-2:focus-visible{
  outline-offset: 2px;
}
.focus-visible\\:outline-blue-600:focus-visible{
  outline-color: #2563eb;
}
.focus-visible\\:outline-green-600:focus-visible{
  outline-color: #16a34a;
}
.focus-visible\\:outline-indigo-600:focus-visible{
  outline-color: #4f46e5;
}
.focus-visible\\:outline-purple-600:focus-visible{
  outline-color: #9333ea;
}
.focus-visible\\:outline-red-600:focus-visible{
  outline-color: #dc2626;
}
.disabled\\:opacity-50:disabled{
  opacity: 0.5;
}
.group:hover .group-hover\\:block{
  display: block;
}
.group:hover .group-hover\\:rotate-180{
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.group:hover .group-hover\\:scale-105{
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.group:hover .group-hover\\:scale-110{
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.group:hover .group-hover\\:bg-black\\/0{
  background-color: rgb(0 0 0 / 0);
}
.group:hover .group-hover\\:from-amber-500{
  --tw-gradient-from: #f59e0b var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.group:hover .group-hover\\:from-blue-500{
  --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.group:hover .group-hover\\:from-green-500{
  --tw-gradient-from: #22c55e var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(34 197 94 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.group:hover .group-hover\\:from-indigo-500{
  --tw-gradient-from: #6366f1 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.group:hover .group-hover\\:from-rose-500{
  --tw-gradient-from: #f43f5e var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(244 63 94 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.group:hover .group-hover\\:to-cyan-500{
  --tw-gradient-to: #06b6d4 var(--tw-gradient-to-position);
}
.group:hover .group-hover\\:to-emerald-500{
  --tw-gradient-to: #10b981 var(--tw-gradient-to-position);
}
.group:hover .group-hover\\:to-orange-500{
  --tw-gradient-to: #f97316 var(--tw-gradient-to-position);
}
.group:hover .group-hover\\:to-pink-500{
  --tw-gradient-to: #ec4899 var(--tw-gradient-to-position);
}
.group:hover .group-hover\\:to-violet-500{
  --tw-gradient-to: #8b5cf6 var(--tw-gradient-to-position);
}
.group:hover .group-hover\\:text-amber-400{
  --tw-text-opacity: 1;
  color: rgb(251 191 36 / var(--tw-text-opacity));
}
.group:hover .group-hover\\:text-purple-300{
  --tw-text-opacity: 1;
  color: rgb(216 180 254 / var(--tw-text-opacity));
}
.group:hover .group-hover\\:text-purple-400{
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity));
}
.group:hover .group-hover\\:text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.group:hover .group-hover\\:text-zinc-200{
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity));
}
.group:hover .group-hover\\:text-zinc-300{
  --tw-text-opacity: 1;
  color: rgb(212 212 216 / var(--tw-text-opacity));
}
.group:hover .group-hover\\:opacity-100{
  opacity: 1;
}
@media (min-width: 640px){

  .sm\\:mt-0{
    margin-top: 0;
  }

  .sm\\:items-start{
    align-items: flex-start;
  }

  .sm\\:items-end{
    align-items: flex-end;
  }

  .sm\\:p-6{
    padding: 24px;
  }

  .sm\\:pl-0{
    padding-left: 0;
  }

  .sm\\:text-left{
    text-align: left;
  }
}
@media (min-width: 768px){

  .md\\:p-20{
    padding: 80px;
  }
}
`,Ff=Af;function V2(){return`
    * {
      box-sizing: border-box;
    }
    
    #app-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999999;
    }
    
    #app-container > * {
      pointer-events: auto;
    }
  `}var oi=class e{static ID_SHADOW="shadow-container-panda-extract";static build(){let t=document.createElement("div");t.id=e.ID_SHADOW;let r=t.attachShadow({mode:"open"}),n=document.createElement("style");return n.textContent=`
    :host {
      color: initial;
      font-family: sans-serif;
      font-size: initial;
      line-height: initial;
      letter-spacing: initial;
      text-align: left;
    }
    ${V2()}
    ${Af}
  `,r.appendChild(n),t}static remove(){let t=document.getElementById(e.ID_SHADOW);t&&t.remove()}static getShadowRoot(){let t=document.getElementById(e.ID_SHADOW);return t||(t=e.build(),document.body.appendChild(t)),t.shadowRoot}static isContainerInBody(){return document.getElementById(e.ID_SHADOW)!=null}},Pf=oi;var pe=ft(it());var ne=ft(it());var xl=ft(it());function br({size:e="medium",color:t="primary",className:r="",text:n=""}){let a=()=>{switch(e){case"small":return"spinner-small";case"large":return"spinner-large";default:return"spinner-medium"}},i=()=>{switch(t){case"secondary":return"spinner-secondary";case"white":return"spinner-white";default:return"spinner-primary"}};return xl.default.createElement("div",{className:`loading-spinner ${a()} ${i()} ${r}`},xl.default.createElement("div",{className:"spinner-circle"}),n&&xl.default.createElement("span",{className:"spinner-text"},n))}var vt=Object.freeze({TEXT:"text",IMAGE_URL:"image-url",LINK_URL:"link-url",EMAIL:"email"}),b4=Object.freeze({EXTRACT:"EXTRACT",EXTRACT_TEXT:"EXTRACT_TEXT",EXTRACT_HTML:"EXTRACT_HTML",EXTRACT_ATTRIBUTE:"EXTRACT_ATTRIBUTE",EXTRACT_IMAGE_URL:"EXTRACT_IMAGE_URL",EXTRACT_LINK_URL:"EXTRACT_LINK_URL"}),w1=/^(#text|BR|SPAN|EM|STRONG|I|B|U|MARK|SMALL|A)$/i;var Eo={TEXT:"text",LINK_URL:"link-url",IMAGE_URL:"image-url",EMAIL:"email"};var St={IDLE:"idle",RUNNING:"running",STOPPING:"stopping",ERROR:"error",COMPLETED:"completed"},si={CLIPBOARD:"clipboard",CSV:"csv",EXCEL:"excel",JSON:"json",GOOGLE_SHEETS:"google-sheets"},Vt={RUN:"run",PAGE_DETAILS:"page-details",EXTRACT_EMAILS:"extract-emails",DOWNLOAD_IMAGES:"download-images",HELP:"help",SETTINGS:"settings"};var ml={DOWNLOAD_IMAGES:"download-images",DOWNLOAD_FILE:"download-file",REQUEST_CLIPBOARD_PERMISSIONS:"request-clipboard-permissions",PAGE_DETAILS_HIGHLIGHT:"page-details-highlight",PAGE_DETAILS_SELECTED:"page-details-selected",PAGE_DETAILS_EXTRACT:"page-details-extract",STOP_PAGE_DETAILS_EXTRACTION:"stop-page-details-extraction",EXTRACT_EMAILS:"extract-emails",EXTRACT_EMAILS_STOP:"extract-emails-stop",STATUS_UPDATE_EXTRACT:"status-update-extract",STATUS_UPDATE_EXTRACT_EMAILS:"status-update-extract-emails"},vl={PERMISSIONS_GRANTED:"permissionsGranted",PERMISSIONS_CLIPBOARD_GRANTED:"permissionsClipboardGranted",REQUEST_HIGHLIGHT_TAB_ID:"requestHighlightTabId",EXTRACT_SETTINGS:"extractSettings"};var y1={extractImages:!0,extractAriaLabel:!1,removeEmptyGroupsThreshold:.2,removeSimilarGroupsThreshold:.9};var Po={};Po.version="0.18.5";var va=1200,vi=1252,X2=[874,932,936,949,950,1250,1251,1252,1253,1254,1255,1256,1257,1258,1e4],j2={0:1252,1:65001,2:65001,77:1e4,128:932,129:949,130:1361,134:936,136:950,161:1253,162:1254,163:1258,177:1255,178:1256,186:1257,204:1251,222:874,238:1250,255:1252,69:6969},sg=function(e){X2.indexOf(e)!=-1&&(vi=j2[0]=e)};function $2(){sg(1252)}var Io=function(e){va=e,sg(e)};function Y2(){Io(1200),$2()}function K2(e){for(var t=[],r=0;r<e.length>>1;++r)t[r]=String.fromCharCode(e.charCodeAt(2*r+1)+(e.charCodeAt(2*r)<<8));return t.join("")}var wl=function(t){return String.fromCharCode(t)},E1=function(t){return String.fromCharCode(t)},Oe;var Jr=null,_o=!0,Xn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function No(e){for(var t="",r=0,n=0,a=0,i=0,o=0,s=0,l=0,f=0;f<e.length;)r=e.charCodeAt(f++),i=r>>2,n=e.charCodeAt(f++),o=(r&3)<<4|n>>4,a=e.charCodeAt(f++),s=(n&15)<<2|a>>6,l=a&63,isNaN(n)?s=l=64:isNaN(a)&&(l=64),t+=Xn.charAt(i)+Xn.charAt(o)+Xn.charAt(s)+Xn.charAt(l);return t}function mn(e){var t="",r=0,n=0,a=0,i=0,o=0,s=0,l=0;e=e.replace(/[^\w\+\/\=]/g,"");for(var f=0;f<e.length;)i=Xn.indexOf(e.charAt(f++)),o=Xn.indexOf(e.charAt(f++)),r=i<<2|o>>4,t+=String.fromCharCode(r),s=Xn.indexOf(e.charAt(f++)),n=(o&15)<<4|s>>2,s!==64&&(t+=String.fromCharCode(n)),l=Xn.indexOf(e.charAt(f++)),a=(s&3)<<6|l,l!==64&&(t+=String.fromCharCode(a));return t}var Se=function(){return typeof Buffer<"u"&&typeof process<"u"&&typeof process.versions<"u"&&!!process.versions.node}(),wn=function(){if(typeof Buffer<"u"){var e=!Buffer.from;if(!e)try{Buffer.from("foo","utf8")}catch{e=!0}return e?function(t,r){return r?new Buffer(t,r):new Buffer(t)}:Buffer.from.bind(Buffer)}return function(){}}();function ya(e){return Se?Buffer.alloc?Buffer.alloc(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}function _1(e){return Se?Buffer.allocUnsafe?Buffer.allocUnsafe(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}var Br=function(t){return Se?wn(t,"binary"):t.split("").map(function(r){return r.charCodeAt(0)&255})};function Hl(e){if(typeof ArrayBuffer>"u")return Br(e);for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0;n!=e.length;++n)r[n]=e.charCodeAt(n)&255;return t}function Mo(e){if(Array.isArray(e))return e.map(function(n){return String.fromCharCode(n)}).join("");for(var t=[],r=0;r<e.length;++r)t[r]=String.fromCharCode(e[r]);return t.join("")}function Q2(e){if(typeof Uint8Array>"u")throw new Error("Unsupported");return new Uint8Array(e)}var Ft=Se?function(e){return Buffer.concat(e.map(function(t){return Buffer.isBuffer(t)?t:wn(t)}))}:function(e){if(typeof Uint8Array<"u"){var t=0,r=0;for(t=0;t<e.length;++t)r+=e[t].length;var n=new Uint8Array(r),a=0;for(t=0,r=0;t<e.length;r+=a,++t)if(a=e[t].length,e[t]instanceof Uint8Array)n.set(e[t],r);else{if(typeof e[t]=="string")throw"wtf";n.set(new Uint8Array(e[t]),r)}return n}return[].concat.apply([],e.map(function(i){return Array.isArray(i)?i:[].slice.call(i)}))};function J2(e){for(var t=[],r=0,n=e.length+250,a=ya(e.length+255),i=0;i<e.length;++i){var o=e.charCodeAt(i);if(o<128)a[r++]=o;else if(o<2048)a[r++]=192|o>>6&31,a[r++]=128|o&63;else if(o>=55296&&o<57344){o=(o&1023)+64;var s=e.charCodeAt(++i)&1023;a[r++]=240|o>>8&7,a[r++]=128|o>>2&63,a[r++]=128|s>>6&15|(o&3)<<4,a[r++]=128|s&63}else a[r++]=224|o>>12&15,a[r++]=128|o>>6&63,a[r++]=128|o&63;r>n&&(t.push(a.slice(0,r)),r=0,a=ya(65535),n=65530)}return t.push(a.slice(0,r)),Ft(t)}var hi=/\u0000/g,yl=/[\u0001-\u0006]/g;function pi(e){for(var t="",r=e.length-1;r>=0;)t+=e.charAt(r--);return t}function Ur(e,t){var r=""+e;return r.length>=t?r:Ze("0",t-r.length)+r}function Gf(e,t){var r=""+e;return r.length>=t?r:Ze(" ",t-r.length)+r}function Al(e,t){var r=""+e;return r.length>=t?r:r+Ze(" ",t-r.length)}function Z2(e,t){var r=""+Math.round(e);return r.length>=t?r:Ze("0",t-r.length)+r}function q2(e,t){var r=""+e;return r.length>=t?r:Ze("0",t-r.length)+r}var k1=Math.pow(2,32);function li(e,t){if(e>k1||e<-k1)return Z2(e,t);var r=Math.round(e);return q2(r,t)}function Fl(e,t){return t=t||0,e.length>=7+t&&(e.charCodeAt(t)|32)===103&&(e.charCodeAt(t+1)|32)===101&&(e.charCodeAt(t+2)|32)===110&&(e.charCodeAt(t+3)|32)===101&&(e.charCodeAt(t+4)|32)===114&&(e.charCodeAt(t+5)|32)===97&&(e.charCodeAt(t+6)|32)===108}var b1=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],If=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];function ew(e){return e||(e={}),e[0]="General",e[1]="0",e[2]="0.00",e[3]="#,##0",e[4]="#,##0.00",e[9]="0%",e[10]="0.00%",e[11]="0.00E+00",e[12]="# ?/?",e[13]="# ??/??",e[14]="m/d/yy",e[15]="d-mmm-yy",e[16]="d-mmm",e[17]="mmm-yy",e[18]="h:mm AM/PM",e[19]="h:mm:ss AM/PM",e[20]="h:mm",e[21]="h:mm:ss",e[22]="m/d/yy h:mm",e[37]="#,##0 ;(#,##0)",e[38]="#,##0 ;[Red](#,##0)",e[39]="#,##0.00;(#,##0.00)",e[40]="#,##0.00;[Red](#,##0.00)",e[45]="mm:ss",e[46]="[h]:mm:ss",e[47]="mmss.0",e[48]="##0.0E+0",e[49]="@",e[56]='"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "',e}var qe={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "'},T1={5:37,6:38,7:39,8:40,23:0,24:0,25:0,26:0,27:14,28:14,29:14,30:14,31:14,50:14,51:14,52:14,53:14,54:14,55:14,56:14,57:14,58:14,59:1,60:2,61:3,62:4,67:9,68:10,69:12,70:13,71:14,72:14,73:15,74:16,75:17,76:20,77:21,78:22,79:45,80:46,81:47,82:0},tw={5:'"$"#,##0_);\\("$"#,##0\\)',63:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',41:'_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'};function Pl(e,t,r){for(var n=e<0?-1:1,a=e*n,i=0,o=1,s=0,l=1,f=0,u=0,g=Math.floor(a);f<t&&(g=Math.floor(a),s=g*o+i,u=g*f+l,!(a-g<5e-8));)a=1/(a-g),i=o,o=s,l=f,f=u;if(u>t&&(f>t?(u=l,s=i):(u=f,s=o)),!r)return[0,n*s,u];var d=Math.floor(n*s/u);return[d,n*s-d*u,u]}function El(e,t,r){if(e>2958465||e<0)return null;var n=e|0,a=Math.floor(86400*(e-n)),i=0,o=[],s={D:n,T:a,u:86400*(e-n)-a,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(s.u)<1e-6&&(s.u=0),t&&t.date1904&&(n+=1462),s.u>.9999&&(s.u=0,++a==86400&&(s.T=a=0,++n,++s.D)),n===60)o=r?[1317,10,29]:[1900,2,29],i=3;else if(n===0)o=r?[1317,8,29]:[1900,1,0],i=6;else{n>60&&--n;var l=new Date(1900,0,1);l.setDate(l.getDate()+n-1),o=[l.getFullYear(),l.getMonth()+1,l.getDate()],i=l.getDay(),n<60&&(i=(i+6)%7),r&&(i=lw(l,o))}return s.y=o[0],s.m=o[1],s.d=o[2],s.S=a%60,a=Math.floor(a/60),s.M=a%60,a=Math.floor(a/60),s.H=a,s.q=i,s}var lg=new Date(1899,11,31,0,0,0),rw=lg.getTime(),nw=new Date(1900,2,1,0,0,0);function cg(e,t){var r=e.getTime();return t?r-=1461*24*60*60*1e3:e>=nw&&(r+=24*60*60*1e3),(r-(rw+(e.getTimezoneOffset()-lg.getTimezoneOffset())*6e4))/(24*60*60*1e3)}function Vf(e){return e.indexOf(".")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/,"$1")}function aw(e){return e.indexOf("E")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,"$1E").replace(/(E[+-])(\d)$/,"$10$2")}function iw(e){var t=e<0?12:11,r=Vf(e.toFixed(12));return r.length<=t||(r=e.toPrecision(10),r.length<=t)?r:e.toExponential(5)}function ow(e){var t=Vf(e.toFixed(11));return t.length>(e<0?12:11)||t==="0"||t==="-0"?e.toPrecision(6):t}function sw(e){var t=Math.floor(Math.log(Math.abs(e))*Math.LOG10E),r;return t>=-4&&t<=-1?r=e.toPrecision(10+t):Math.abs(t)<=9?r=iw(e):t===10?r=e.toFixed(10).substr(0,12):r=ow(e),Vf(aw(r.toUpperCase()))}function Uf(e,t){switch(typeof e){case"string":return e;case"boolean":return e?"TRUE":"FALSE";case"number":return(e|0)===e?e.toString(10):sw(e);case"undefined":return"";case"object":if(e==null)return"";if(e instanceof Date)return $n(14,cg(e,t&&t.date1904),t)}throw new Error("unsupported value in General format: "+e)}function lw(e,t){t[0]-=581;var r=e.getDay();return e<60&&(r=(r+6)%7),r}function cw(e,t,r,n){var a="",i=0,o=0,s=r.y,l,f=0;switch(e){case 98:s=r.y+543;case 121:switch(t.length){case 1:case 2:l=s%100,f=2;break;default:l=s%1e4,f=4;break}break;case 109:switch(t.length){case 1:case 2:l=r.m,f=t.length;break;case 3:return If[r.m-1][1];case 5:return If[r.m-1][0];default:return If[r.m-1][2]}break;case 100:switch(t.length){case 1:case 2:l=r.d,f=t.length;break;case 3:return b1[r.q][0];default:return b1[r.q][1]}break;case 104:switch(t.length){case 1:case 2:l=1+(r.H+11)%12,f=t.length;break;default:throw"bad hour format: "+t}break;case 72:switch(t.length){case 1:case 2:l=r.H,f=t.length;break;default:throw"bad hour format: "+t}break;case 77:switch(t.length){case 1:case 2:l=r.M,f=t.length;break;default:throw"bad minute format: "+t}break;case 115:if(t!="s"&&t!="ss"&&t!=".0"&&t!=".00"&&t!=".000")throw"bad second format: "+t;return r.u===0&&(t=="s"||t=="ss")?Ur(r.S,t.length):(n>=2?o=n===3?1e3:100:o=n===1?10:1,i=Math.round(o*(r.S+r.u)),i>=60*o&&(i=0),t==="s"?i===0?"0":""+i/o:(a=Ur(i,2+n),t==="ss"?a.substr(0,2):"."+a.substr(2,t.length-1)));case 90:switch(t){case"[h]":case"[hh]":l=r.D*24+r.H;break;case"[m]":case"[mm]":l=(r.D*24+r.H)*60+r.M;break;case"[s]":case"[ss]":l=((r.D*24+r.H)*60+r.M)*60+Math.round(r.S+r.u);break;default:throw"bad abstime format: "+t}f=t.length===3?1:2;break;case 101:l=s,f=1;break}var u=f>0?Ur(l,f):"";return u}function jn(e){var t=3;if(e.length<=t)return e;for(var r=e.length%t,n=e.substr(0,r);r!=e.length;r+=t)n+=(n.length>0?",":"")+e.substr(r,t);return n}var fg=/%/g;function fw(e,t,r){var n=t.replace(fg,""),a=t.length-n.length;return pn(e,n,r*Math.pow(10,2*a))+Ze("%",a)}function uw(e,t,r){for(var n=t.length-1;t.charCodeAt(n-1)===44;)--n;return pn(e,t.substr(0,n),r/Math.pow(10,3*(t.length-n)))}function ug(e,t){var r,n=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(t==0)return"0.0E+0";if(t<0)return"-"+ug(e,-t);var a=e.indexOf(".");a===-1&&(a=e.indexOf("E"));var i=Math.floor(Math.log(t)*Math.LOG10E)%a;if(i<0&&(i+=a),r=(t/Math.pow(10,i)).toPrecision(n+1+(a+i)%a),r.indexOf("e")===-1){var o=Math.floor(Math.log(t)*Math.LOG10E);for(r.indexOf(".")===-1?r=r.charAt(0)+"."+r.substr(1)+"E+"+(o-r.length+i):r+="E+"+(o-i);r.substr(0,2)==="0.";)r=r.charAt(0)+r.substr(2,a)+"."+r.substr(2+a),r=r.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");r=r.replace(/\+-/,"-")}r=r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(s,l,f,u){return l+f+u.substr(0,(a+i)%a)+"."+u.substr(i)+"E"})}else r=t.toExponential(n);return e.match(/E\+00$/)&&r.match(/e[+-]\d$/)&&(r=r.substr(0,r.length-1)+"0"+r.charAt(r.length-1)),e.match(/E\-/)&&r.match(/e\+/)&&(r=r.replace(/e\+/,"e")),r.replace("e","E")}var dg=/# (\?+)( ?)\/( ?)(\d+)/;function dw(e,t,r){var n=parseInt(e[4],10),a=Math.round(t*n),i=Math.floor(a/n),o=a-i*n,s=n;return r+(i===0?"":""+i)+" "+(o===0?Ze(" ",e[1].length+1+e[4].length):Gf(o,e[1].length)+e[2]+"/"+e[3]+Ur(s,e[4].length))}function hw(e,t,r){return r+(t===0?"":""+t)+Ze(" ",e[1].length+2+e[4].length)}var hg=/^#*0*\.([0#]+)/,pg=/\).*[0#]/,gg=/\(###\) ###\\?-####/;function Xt(e){for(var t="",r,n=0;n!=e.length;++n)switch(r=e.charCodeAt(n)){case 35:break;case 63:t+=" ";break;case 48:t+="0";break;default:t+=String.fromCharCode(r)}return t}function S1(e,t){var r=Math.pow(10,t);return""+Math.round(e*r)/r}function C1(e,t){var r=e-Math.floor(e),n=Math.pow(10,t);return t<(""+Math.round(r*n)).length?0:Math.round(r*n)}function pw(e,t){return t<(""+Math.round((e-Math.floor(e))*Math.pow(10,t))).length?1:0}function gw(e){return e<2147483647&&e>-2147483648?""+(e>=0?e|0:e-1|0):""+Math.floor(e)}function Tr(e,t,r){if(e.charCodeAt(0)===40&&!t.match(pg)){var n=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return r>=0?Tr("n",n,r):"("+Tr("n",n,-r)+")"}if(t.charCodeAt(t.length-1)===44)return uw(e,t,r);if(t.indexOf("%")!==-1)return fw(e,t,r);if(t.indexOf("E")!==-1)return ug(t,r);if(t.charCodeAt(0)===36)return"$"+Tr(e,t.substr(t.charAt(1)==" "?2:1),r);var a,i,o,s,l=Math.abs(r),f=r<0?"-":"";if(t.match(/^00+$/))return f+li(l,t.length);if(t.match(/^[#?]+$/))return a=li(r,0),a==="0"&&(a=""),a.length>t.length?a:Xt(t.substr(0,t.length-a.length))+a;if(i=t.match(dg))return dw(i,l,f);if(t.match(/^#+0+$/))return f+li(l,t.length-t.indexOf("0"));if(i=t.match(hg))return a=S1(r,i[1].length).replace(/^([^\.]+)$/,"$1."+Xt(i[1])).replace(/\.$/,"."+Xt(i[1])).replace(/\.(\d*)$/,function(x,h){return"."+h+Ze("0",Xt(i[1]).length-h.length)}),t.indexOf("0.")!==-1?a:a.replace(/^0\./,".");if(t=t.replace(/^#+([0.])/,"$1"),i=t.match(/^(0*)\.(#*)$/))return f+S1(l,i[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,i[1].length?"0.":".");if(i=t.match(/^#{1,3},##0(\.?)$/))return f+jn(li(l,0));if(i=t.match(/^#,##0\.([#0]*0)$/))return r<0?"-"+Tr(e,t,-r):jn(""+(Math.floor(r)+pw(r,i[1].length)))+"."+Ur(C1(r,i[1].length),i[1].length);if(i=t.match(/^#,#*,#0/))return Tr(e,t.replace(/^#,#*,/,""),r);if(i=t.match(/^([0#]+)(\\?-([0#]+))+$/))return a=pi(Tr(e,t.replace(/[\\-]/g,""),r)),o=0,pi(pi(t.replace(/\\/g,"")).replace(/[0#]/g,function(x){return o<a.length?a.charAt(o++):x==="0"?"0":""}));if(t.match(gg))return a=Tr(e,"##########",r),"("+a.substr(0,3)+") "+a.substr(3,3)+"-"+a.substr(6);var u="";if(i=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(i[4].length,7),s=Pl(l,Math.pow(10,o)-1,!1),a=""+f,u=pn("n",i[1],s[1]),u.charAt(u.length-1)==" "&&(u=u.substr(0,u.length-1)+"0"),a+=u+i[2]+"/"+i[3],u=Al(s[2],o),u.length<i[4].length&&(u=Xt(i[4].substr(i[4].length-u.length))+u),a+=u,a;if(i=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(i[1].length,i[4].length),7),s=Pl(l,Math.pow(10,o)-1,!0),f+(s[0]||(s[1]?"":"0"))+" "+(s[1]?Gf(s[1],o)+i[2]+"/"+i[3]+Al(s[2],o):Ze(" ",2*o+1+i[2].length+i[3].length));if(i=t.match(/^[#0?]+$/))return a=li(r,0),t.length<=a.length?a:Xt(t.substr(0,t.length-a.length))+a;if(i=t.match(/^([#0?]+)\.([#0]+)$/)){a=""+r.toFixed(Math.min(i[2].length,10)).replace(/([^0])0+$/,"$1"),o=a.indexOf(".");var g=t.indexOf(".")-o,d=t.length-a.length-g;return Xt(t.substr(0,g)+a+t.substr(t.length-d))}if(i=t.match(/^00,000\.([#0]*0)$/))return o=C1(r,i[1].length),r<0?"-"+Tr(e,t,-r):jn(gw(r)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(x){return"00,"+(x.length<3?Ur(0,3-x.length):"")+x})+"."+Ur(o,i[1].length);switch(t){case"###,##0.00":return Tr(e,"#,##0.00",r);case"###,###":case"##,###":case"#,###":var p=jn(li(l,0));return p!=="0"?f+p:"";case"###,###.00":return Tr(e,"###,##0.00",r).replace(/^0\./,".");case"#,###.00":return Tr(e,"#,##0.00",r).replace(/^0\./,".");default:}throw new Error("unsupported format |"+t+"|")}function xw(e,t,r){for(var n=t.length-1;t.charCodeAt(n-1)===44;)--n;return pn(e,t.substr(0,n),r/Math.pow(10,3*(t.length-n)))}function mw(e,t,r){var n=t.replace(fg,""),a=t.length-n.length;return pn(e,n,r*Math.pow(10,2*a))+Ze("%",a)}function xg(e,t){var r,n=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(t==0)return"0.0E+0";if(t<0)return"-"+xg(e,-t);var a=e.indexOf(".");a===-1&&(a=e.indexOf("E"));var i=Math.floor(Math.log(t)*Math.LOG10E)%a;if(i<0&&(i+=a),r=(t/Math.pow(10,i)).toPrecision(n+1+(a+i)%a),!r.match(/[Ee]/)){var o=Math.floor(Math.log(t)*Math.LOG10E);r.indexOf(".")===-1?r=r.charAt(0)+"."+r.substr(1)+"E+"+(o-r.length+i):r+="E+"+(o-i),r=r.replace(/\+-/,"-")}r=r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(s,l,f,u){return l+f+u.substr(0,(a+i)%a)+"."+u.substr(i)+"E"})}else r=t.toExponential(n);return e.match(/E\+00$/)&&r.match(/e[+-]\d$/)&&(r=r.substr(0,r.length-1)+"0"+r.charAt(r.length-1)),e.match(/E\-/)&&r.match(/e\+/)&&(r=r.replace(/e\+/,"e")),r.replace("e","E")}function Kr(e,t,r){if(e.charCodeAt(0)===40&&!t.match(pg)){var n=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return r>=0?Kr("n",n,r):"("+Kr("n",n,-r)+")"}if(t.charCodeAt(t.length-1)===44)return xw(e,t,r);if(t.indexOf("%")!==-1)return mw(e,t,r);if(t.indexOf("E")!==-1)return xg(t,r);if(t.charCodeAt(0)===36)return"$"+Kr(e,t.substr(t.charAt(1)==" "?2:1),r);var a,i,o,s,l=Math.abs(r),f=r<0?"-":"";if(t.match(/^00+$/))return f+Ur(l,t.length);if(t.match(/^[#?]+$/))return a=""+r,r===0&&(a=""),a.length>t.length?a:Xt(t.substr(0,t.length-a.length))+a;if(i=t.match(dg))return hw(i,l,f);if(t.match(/^#+0+$/))return f+Ur(l,t.length-t.indexOf("0"));if(i=t.match(hg))return a=(""+r).replace(/^([^\.]+)$/,"$1."+Xt(i[1])).replace(/\.$/,"."+Xt(i[1])),a=a.replace(/\.(\d*)$/,function(x,h){return"."+h+Ze("0",Xt(i[1]).length-h.length)}),t.indexOf("0.")!==-1?a:a.replace(/^0\./,".");if(t=t.replace(/^#+([0.])/,"$1"),i=t.match(/^(0*)\.(#*)$/))return f+(""+l).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,i[1].length?"0.":".");if(i=t.match(/^#{1,3},##0(\.?)$/))return f+jn(""+l);if(i=t.match(/^#,##0\.([#0]*0)$/))return r<0?"-"+Kr(e,t,-r):jn(""+r)+"."+Ze("0",i[1].length);if(i=t.match(/^#,#*,#0/))return Kr(e,t.replace(/^#,#*,/,""),r);if(i=t.match(/^([0#]+)(\\?-([0#]+))+$/))return a=pi(Kr(e,t.replace(/[\\-]/g,""),r)),o=0,pi(pi(t.replace(/\\/g,"")).replace(/[0#]/g,function(x){return o<a.length?a.charAt(o++):x==="0"?"0":""}));if(t.match(gg))return a=Kr(e,"##########",r),"("+a.substr(0,3)+") "+a.substr(3,3)+"-"+a.substr(6);var u="";if(i=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(i[4].length,7),s=Pl(l,Math.pow(10,o)-1,!1),a=""+f,u=pn("n",i[1],s[1]),u.charAt(u.length-1)==" "&&(u=u.substr(0,u.length-1)+"0"),a+=u+i[2]+"/"+i[3],u=Al(s[2],o),u.length<i[4].length&&(u=Xt(i[4].substr(i[4].length-u.length))+u),a+=u,a;if(i=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(i[1].length,i[4].length),7),s=Pl(l,Math.pow(10,o)-1,!0),f+(s[0]||(s[1]?"":"0"))+" "+(s[1]?Gf(s[1],o)+i[2]+"/"+i[3]+Al(s[2],o):Ze(" ",2*o+1+i[2].length+i[3].length));if(i=t.match(/^[#0?]+$/))return a=""+r,t.length<=a.length?a:Xt(t.substr(0,t.length-a.length))+a;if(i=t.match(/^([#0]+)\.([#0]+)$/)){a=""+r.toFixed(Math.min(i[2].length,10)).replace(/([^0])0+$/,"$1"),o=a.indexOf(".");var g=t.indexOf(".")-o,d=t.length-a.length-g;return Xt(t.substr(0,g)+a+t.substr(t.length-d))}if(i=t.match(/^00,000\.([#0]*0)$/))return r<0?"-"+Kr(e,t,-r):jn(""+r).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(x){return"00,"+(x.length<3?Ur(0,3-x.length):"")+x})+"."+Ur(0,i[1].length);switch(t){case"###,###":case"##,###":case"#,###":var p=jn(""+l);return p!=="0"?f+p:"";default:if(t.match(/\.[0#?]*$/))return Kr(e,t.slice(0,t.lastIndexOf(".")),r)+Xt(t.slice(t.lastIndexOf(".")))}throw new Error("unsupported format |"+t+"|")}function pn(e,t,r){return(r|0)===r?Kr(e,t,r):Tr(e,t,r)}function vw(e){for(var t=[],r=!1,n=0,a=0;n<e.length;++n)switch(e.charCodeAt(n)){case 34:r=!r;break;case 95:case 42:case 92:++n;break;case 59:t[t.length]=e.substr(a,n-a),a=n+1}if(t[t.length]=e.substr(a),r===!0)throw new Error("Format |"+e+"| unterminated string ");return t}var mg=/\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;function vg(e){for(var t=0,r="",n="";t<e.length;)switch(r=e.charAt(t)){case"G":Fl(e,t)&&(t+=6),t++;break;case'"':for(;e.charCodeAt(++t)!==34&&t<e.length;);++t;break;case"\\":t+=2;break;case"_":t+=2;break;case"@":++t;break;case"B":case"b":if(e.charAt(t+1)==="1"||e.charAt(t+1)==="2")return!0;case"M":case"D":case"Y":case"H":case"S":case"E":case"m":case"d":case"y":case"h":case"s":case"e":case"g":return!0;case"A":case"a":case"\u4E0A":if(e.substr(t,3).toUpperCase()==="A/P"||e.substr(t,5).toUpperCase()==="AM/PM"||e.substr(t,5).toUpperCase()==="\u4E0A\u5348/\u4E0B\u5348")return!0;++t;break;case"[":for(n=r;e.charAt(t++)!=="]"&&t<e.length;)n+=e.charAt(t);if(n.match(mg))return!0;break;case".":case"0":case"#":for(;t<e.length&&("0#?.,E+-%".indexOf(r=e.charAt(++t))>-1||r=="\\"&&e.charAt(t+1)=="-"&&"0#".indexOf(e.charAt(t+2))>-1););break;case"?":for(;e.charAt(++t)===r;);break;case"*":++t,(e.charAt(t)==" "||e.charAt(t)=="*")&&++t;break;case"(":case")":++t;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;t<e.length&&"0123456789".indexOf(e.charAt(++t))>-1;);break;case" ":++t;break;default:++t;break}return!1}function ww(e,t,r,n){for(var a=[],i="",o=0,s="",l="t",f,u,g,d="H";o<e.length;)switch(s=e.charAt(o)){case"G":if(!Fl(e,o))throw new Error("unrecognized character "+s+" in "+e);a[a.length]={t:"G",v:"General"},o+=7;break;case'"':for(i="";(g=e.charCodeAt(++o))!==34&&o<e.length;)i+=String.fromCharCode(g);a[a.length]={t:"t",v:i},++o;break;case"\\":var p=e.charAt(++o),x=p==="("||p===")"?p:"t";a[a.length]={t:x,v:p},++o;break;case"_":a[a.length]={t:"t",v:" "},o+=2;break;case"@":a[a.length]={t:"T",v:t},++o;break;case"B":case"b":if(e.charAt(o+1)==="1"||e.charAt(o+1)==="2"){if(f==null&&(f=El(t,r,e.charAt(o+1)==="2"),f==null))return"";a[a.length]={t:"X",v:e.substr(o,2)},l=s,o+=2;break}case"M":case"D":case"Y":case"H":case"S":case"E":s=s.toLowerCase();case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(t<0||f==null&&(f=El(t,r),f==null))return"";for(i=s;++o<e.length&&e.charAt(o).toLowerCase()===s;)i+=s;s==="m"&&l.toLowerCase()==="h"&&(s="M"),s==="h"&&(s=d),a[a.length]={t:s,v:i},l=s;break;case"A":case"a":case"\u4E0A":var h={t:s,v:s};if(f==null&&(f=El(t,r)),e.substr(o,3).toUpperCase()==="A/P"?(f!=null&&(h.v=f.H>=12?"P":"A"),h.t="T",d="h",o+=3):e.substr(o,5).toUpperCase()==="AM/PM"?(f!=null&&(h.v=f.H>=12?"PM":"AM"),h.t="T",o+=5,d="h"):e.substr(o,5).toUpperCase()==="\u4E0A\u5348/\u4E0B\u5348"?(f!=null&&(h.v=f.H>=12?"\u4E0B\u5348":"\u4E0A\u5348"),h.t="T",o+=5,d="h"):(h.t="t",++o),f==null&&h.t==="T")return"";a[a.length]=h,l=s;break;case"[":for(i=s;e.charAt(o++)!=="]"&&o<e.length;)i+=e.charAt(o);if(i.slice(-1)!=="]")throw'unterminated "[" block: |'+i+"|";if(i.match(mg)){if(f==null&&(f=El(t,r),f==null))return"";a[a.length]={t:"Z",v:i.toLowerCase()},l=i.charAt(1)}else i.indexOf("$")>-1&&(i=(i.match(/\$([^-\[\]]*)/)||[])[1]||"$",vg(e)||(a[a.length]={t:"t",v:i}));break;case".":if(f!=null){for(i=s;++o<e.length&&(s=e.charAt(o))==="0";)i+=s;a[a.length]={t:"s",v:i};break}case"0":case"#":for(i=s;++o<e.length&&"0#?.,E+-%".indexOf(s=e.charAt(o))>-1;)i+=s;a[a.length]={t:"n",v:i};break;case"?":for(i=s;e.charAt(++o)===s;)i+=s;a[a.length]={t:s,v:i},l=s;break;case"*":++o,(e.charAt(o)==" "||e.charAt(o)=="*")&&++o;break;case"(":case")":a[a.length]={t:n===1?"t":s,v:s},++o;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(i=s;o<e.length&&"0123456789".indexOf(e.charAt(++o))>-1;)i+=e.charAt(o);a[a.length]={t:"D",v:i};break;case" ":a[a.length]={t:s,v:s},++o;break;case"$":a[a.length]={t:"t",v:"$"},++o;break;default:if(",$-+/():!^&'~{}<>=\u20ACacfijklopqrtuvwxzP".indexOf(s)===-1)throw new Error("unrecognized character "+s+" in "+e);a[a.length]={t:"t",v:s},++o;break}var v=0,w=0,m;for(o=a.length-1,l="t";o>=0;--o)switch(a[o].t){case"h":case"H":a[o].t=d,l="h",v<1&&(v=1);break;case"s":(m=a[o].v.match(/\.0+$/))&&(w=Math.max(w,m[0].length-1)),v<3&&(v=3);case"d":case"y":case"M":case"e":l=a[o].t;break;case"m":l==="s"&&(a[o].t="M",v<2&&(v=2));break;case"X":break;case"Z":v<1&&a[o].v.match(/[Hh]/)&&(v=1),v<2&&a[o].v.match(/[Mm]/)&&(v=2),v<3&&a[o].v.match(/[Ss]/)&&(v=3)}switch(v){case 0:break;case 1:f.u>=.5&&(f.u=0,++f.S),f.S>=60&&(f.S=0,++f.M),f.M>=60&&(f.M=0,++f.H);break;case 2:f.u>=.5&&(f.u=0,++f.S),f.S>=60&&(f.S=0,++f.M);break}var E="",F;for(o=0;o<a.length;++o)switch(a[o].t){case"t":case"T":case" ":case"D":break;case"X":a[o].v="",a[o].t=";";break;case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":a[o].v=cw(a[o].t.charCodeAt(0),a[o].v,f,w),a[o].t="t";break;case"n":case"?":for(F=o+1;a[F]!=null&&((s=a[F].t)==="?"||s==="D"||(s===" "||s==="t")&&a[F+1]!=null&&(a[F+1].t==="?"||a[F+1].t==="t"&&a[F+1].v==="/")||a[o].t==="("&&(s===" "||s==="n"||s===")")||s==="t"&&(a[F].v==="/"||a[F].v===" "&&a[F+1]!=null&&a[F+1].t=="?"));)a[o].v+=a[F].v,a[F]={v:"",t:";"},++F;E+=a[o].v,o=F-1;break;case"G":a[o].t="t",a[o].v=Uf(t,r);break}var P="",D,k;if(E.length>0){E.charCodeAt(0)==40?(D=t<0&&E.charCodeAt(0)===45?-t:t,k=pn("n",E,D)):(D=t<0&&n>1?-t:t,k=pn("n",E,D),D<0&&a[0]&&a[0].t=="t"&&(k=k.substr(1),a[0].v="-"+a[0].v)),F=k.length-1;var L=a.length;for(o=0;o<a.length;++o)if(a[o]!=null&&a[o].t!="t"&&a[o].v.indexOf(".")>-1){L=o;break}var M=a.length;if(L===a.length&&k.indexOf("E")===-1){for(o=a.length-1;o>=0;--o)a[o]==null||"n?".indexOf(a[o].t)===-1||(F>=a[o].v.length-1?(F-=a[o].v.length,a[o].v=k.substr(F+1,a[o].v.length)):F<0?a[o].v="":(a[o].v=k.substr(0,F+1),F=-1),a[o].t="t",M=o);F>=0&&M<a.length&&(a[M].v=k.substr(0,F+1)+a[M].v)}else if(L!==a.length&&k.indexOf("E")===-1){for(F=k.indexOf(".")-1,o=L;o>=0;--o)if(!(a[o]==null||"n?".indexOf(a[o].t)===-1)){for(u=a[o].v.indexOf(".")>-1&&o===L?a[o].v.indexOf(".")-1:a[o].v.length-1,P=a[o].v.substr(u+1);u>=0;--u)F>=0&&(a[o].v.charAt(u)==="0"||a[o].v.charAt(u)==="#")&&(P=k.charAt(F--)+P);a[o].v=P,a[o].t="t",M=o}for(F>=0&&M<a.length&&(a[M].v=k.substr(0,F+1)+a[M].v),F=k.indexOf(".")+1,o=L;o<a.length;++o)if(!(a[o]==null||"n?(".indexOf(a[o].t)===-1&&o!==L)){for(u=a[o].v.indexOf(".")>-1&&o===L?a[o].v.indexOf(".")+1:0,P=a[o].v.substr(0,u);u<a[o].v.length;++u)F<k.length&&(P+=k.charAt(F++));a[o].v=P,a[o].t="t",M=o}}}for(o=0;o<a.length;++o)a[o]!=null&&"n?".indexOf(a[o].t)>-1&&(D=n>1&&t<0&&o>0&&a[o-1].v==="-"?-t:t,a[o].v=pn(a[o].t,a[o].v,D),a[o].t="t");var R="";for(o=0;o!==a.length;++o)a[o]!=null&&(R+=a[o].v);return R}var A1=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;function F1(e,t){if(t==null)return!1;var r=parseFloat(t[2]);switch(t[1]){case"=":if(e==r)return!0;break;case">":if(e>r)return!0;break;case"<":if(e<r)return!0;break;case"<>":if(e!=r)return!0;break;case">=":if(e>=r)return!0;break;case"<=":if(e<=r)return!0;break}return!1}function yw(e,t){var r=vw(e),n=r.length,a=r[n-1].indexOf("@");if(n<4&&a>-1&&--n,r.length>4)throw new Error("cannot find right format for |"+r.join("|")+"|");if(typeof t!="number")return[4,r.length===4||a>-1?r[r.length-1]:"@"];switch(r.length){case 1:r=a>-1?["General","General","General",r[0]]:[r[0],r[0],r[0],"@"];break;case 2:r=a>-1?[r[0],r[0],r[0],r[1]]:[r[0],r[1],r[0],"@"];break;case 3:r=a>-1?[r[0],r[1],r[0],r[2]]:[r[0],r[1],r[2],"@"];break;case 4:break}var i=t>0?r[0]:t<0?r[1]:r[2];if(r[0].indexOf("[")===-1&&r[1].indexOf("[")===-1)return[n,i];if(r[0].match(/\[[=<>]/)!=null||r[1].match(/\[[=<>]/)!=null){var o=r[0].match(A1),s=r[1].match(A1);return F1(t,o)?[n,r[0]]:F1(t,s)?[n,r[1]]:[n,r[o!=null&&s!=null?2:1]]}return[n,i]}function $n(e,t,r){r==null&&(r={});var n="";switch(typeof e){case"string":e=="m/d/yy"&&r.dateNF?n=r.dateNF:n=e;break;case"number":e==14&&r.dateNF?n=r.dateNF:n=(r.table!=null?r.table:qe)[e],n==null&&(n=r.table&&r.table[T1[e]]||qe[T1[e]]),n==null&&(n=tw[e]||"General");break}if(Fl(n,0))return Uf(t,r);t instanceof Date&&(t=cg(t,r.date1904));var a=yw(n,t);if(Fl(a[1]))return Uf(t,r);if(t===!0)t="TRUE";else if(t===!1)t="FALSE";else if(t===""||t==null)return"";return ww(a[1],t,r,a[0])}function wg(e,t){if(typeof t!="number"){t=+t||-1;for(var r=0;r<392;++r){if(qe[r]==null){t<0&&(t=r);continue}if(qe[r]==e){t=r;break}}t<0&&(t=391)}return qe[t]=e,t}function Wl(e){for(var t=0;t!=392;++t)e[t]!==void 0&&wg(e[t],t)}function Gl(){qe=ew()}var yg=/[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;function Ew(e){var t=typeof e=="number"?qe[e]:e;return t=t.replace(yg,"(\\d+)"),new RegExp("^"+t+"$")}function _w(e,t,r){var n=-1,a=-1,i=-1,o=-1,s=-1,l=-1;(t.match(yg)||[]).forEach(function(g,d){var p=parseInt(r[d+1],10);switch(g.toLowerCase().charAt(0)){case"y":n=p;break;case"d":i=p;break;case"h":o=p;break;case"s":l=p;break;case"m":o>=0?s=p:a=p;break}}),l>=0&&s==-1&&a>=0&&(s=a,a=-1);var f=(""+(n>=0?n:new Date().getFullYear())).slice(-4)+"-"+("00"+(a>=1?a:1)).slice(-2)+"-"+("00"+(i>=1?i:1)).slice(-2);f.length==7&&(f="0"+f),f.length==8&&(f="20"+f);var u=("00"+(o>=0?o:0)).slice(-2)+":"+("00"+(s>=0?s:0)).slice(-2)+":"+("00"+(l>=0?l:0)).slice(-2);return o==-1&&s==-1&&l==-1?f:n==-1&&a==-1&&i==-1?u:f+"T"+u}var kw=function(){var e={};e.version="1.2.0";function t(){for(var k=0,L=new Array(256),M=0;M!=256;++M)k=M,k=k&1?-306674912^k>>>1:k>>>1,k=k&1?-306674912^k>>>1:k>>>1,k=k&1?-306674912^k>>>1:k>>>1,k=k&1?-306674912^k>>>1:k>>>1,k=k&1?-306674912^k>>>1:k>>>1,k=k&1?-306674912^k>>>1:k>>>1,k=k&1?-306674912^k>>>1:k>>>1,k=k&1?-306674912^k>>>1:k>>>1,L[M]=k;return typeof Int32Array<"u"?new Int32Array(L):L}var r=t();function n(k){var L=0,M=0,R=0,X=typeof Int32Array<"u"?new Int32Array(4096):new Array(4096);for(R=0;R!=256;++R)X[R]=k[R];for(R=0;R!=256;++R)for(M=k[R],L=256+R;L<4096;L+=256)M=X[L]=M>>>8^k[M&255];var J=[];for(R=1;R!=16;++R)J[R-1]=typeof Int32Array<"u"?X.subarray(R*256,R*256+256):X.slice(R*256,R*256+256);return J}var a=n(r),i=a[0],o=a[1],s=a[2],l=a[3],f=a[4],u=a[5],g=a[6],d=a[7],p=a[8],x=a[9],h=a[10],v=a[11],w=a[12],m=a[13],E=a[14];function F(k,L){for(var M=L^-1,R=0,X=k.length;R<X;)M=M>>>8^r[(M^k.charCodeAt(R++))&255];return~M}function P(k,L){for(var M=L^-1,R=k.length-15,X=0;X<R;)M=E[k[X++]^M&255]^m[k[X++]^M>>8&255]^w[k[X++]^M>>16&255]^v[k[X++]^M>>>24]^h[k[X++]]^x[k[X++]]^p[k[X++]]^d[k[X++]]^g[k[X++]]^u[k[X++]]^f[k[X++]]^l[k[X++]]^s[k[X++]]^o[k[X++]]^i[k[X++]]^r[k[X++]];for(R+=15;X<R;)M=M>>>8^r[(M^k[X++])&255];return~M}function D(k,L){for(var M=L^-1,R=0,X=k.length,J=0,ce=0;R<X;)J=k.charCodeAt(R++),J<128?M=M>>>8^r[(M^J)&255]:J<2048?(M=M>>>8^r[(M^(192|J>>6&31))&255],M=M>>>8^r[(M^(128|J&63))&255]):J>=55296&&J<57344?(J=(J&1023)+64,ce=k.charCodeAt(R++)&1023,M=M>>>8^r[(M^(240|J>>8&7))&255],M=M>>>8^r[(M^(128|J>>2&63))&255],M=M>>>8^r[(M^(128|ce>>6&15|(J&3)<<4))&255],M=M>>>8^r[(M^(128|ce&63))&255]):(M=M>>>8^r[(M^(224|J>>12&15))&255],M=M>>>8^r[(M^(128|J>>6&63))&255],M=M>>>8^r[(M^(128|J&63))&255]);return~M}return e.table=r,e.bstr=F,e.buf=P,e.str=D,e}(),Le=function(){var t={};t.version="1.2.1";function r(y,T){for(var _=y.split("/"),b=T.split("/"),S=0,C=0,B=Math.min(_.length,b.length);S<B;++S){if(C=_[S].length-b[S].length)return C;if(_[S]!=b[S])return _[S]<b[S]?-1:1}return _.length-b.length}function n(y){if(y.charAt(y.length-1)=="/")return y.slice(0,-1).indexOf("/")===-1?y:n(y.slice(0,-1));var T=y.lastIndexOf("/");return T===-1?y:y.slice(0,T+1)}function a(y){if(y.charAt(y.length-1)=="/")return a(y.slice(0,-1));var T=y.lastIndexOf("/");return T===-1?y:y.slice(T+1)}function i(y,T){typeof T=="string"&&(T=new Date(T));var _=T.getHours();_=_<<6|T.getMinutes(),_=_<<5|T.getSeconds()>>>1,y.write_shift(2,_);var b=T.getFullYear()-1980;b=b<<4|T.getMonth()+1,b=b<<5|T.getDate(),y.write_shift(2,b)}function o(y){var T=y.read_shift(2)&65535,_=y.read_shift(2)&65535,b=new Date,S=_&31;_>>>=5;var C=_&15;_>>>=4,b.setMilliseconds(0),b.setFullYear(_+1980),b.setMonth(C-1),b.setDate(S);var B=T&31;T>>>=5;var V=T&63;return T>>>=6,b.setHours(T),b.setMinutes(V),b.setSeconds(B<<1),b}function s(y){dr(y,0);for(var T={},_=0;y.l<=y.length-4;){var b=y.read_shift(2),S=y.read_shift(2),C=y.l+S,B={};switch(b){case 21589:_=y.read_shift(1),_&1&&(B.mtime=y.read_shift(4)),S>5&&(_&2&&(B.atime=y.read_shift(4)),_&4&&(B.ctime=y.read_shift(4))),B.mtime&&(B.mt=new Date(B.mtime*1e3));break}y.l=C,T[b]=B}return T}var l;function f(){return l||(l={})}function u(y,T){if(y[0]==80&&y[1]==75)return Mu(y,T);if((y[0]|32)==109&&(y[1]|32)==105)return gm(y,T);if(y.length<512)throw new Error("CFB file size "+y.length+" < 512");var _=3,b=512,S=0,C=0,B=0,V=0,z=0,U=[],H=y.slice(0,512);dr(H,0);var te=g(H);switch(_=te[0],_){case 3:b=512;break;case 4:b=4096;break;case 0:if(te[1]==0)return Mu(y,T);default:throw new Error("Major Version: Expected 3 or 4 saw "+_)}b!==512&&(H=y.slice(0,b),dr(H,28));var oe=y.slice(0,b);d(H,_);var ue=H.read_shift(4,"i");if(_===3&&ue!==0)throw new Error("# Directory Sectors: Expected 0 saw "+ue);H.l+=4,B=H.read_shift(4,"i"),H.l+=4,H.chk("00100000","Mini Stream Cutoff Size: "),V=H.read_shift(4,"i"),S=H.read_shift(4,"i"),z=H.read_shift(4,"i"),C=H.read_shift(4,"i");for(var se=-1,le=0;le<109&&(se=H.read_shift(4,"i"),!(se<0));++le)U[le]=se;var ge=p(y,b);v(z,C,ge,b,U);var ze=m(ge,B,U,b);ze[B].name="!Directory",S>0&&V!==ce&&(ze[V].name="!MiniFAT"),ze[U[0]].name="!FAT",ze.fat_addrs=U,ze.ssz=b;var Yt={},at=[],ar=[],Si=[];E(B,ze,ge,at,S,Yt,ar,V),x(ar,Si,at),at.shift();var Ci={FileIndex:ar,FullPaths:Si};return T&&T.raw&&(Ci.raw={header:oe,sectors:ge}),Ci}function g(y){if(y[y.l]==80&&y[y.l+1]==75)return[0,0];y.chk(ye,"Header Signature: "),y.l+=16;var T=y.read_shift(2,"u");return[y.read_shift(2,"u"),T]}function d(y,T){var _=9;switch(y.l+=2,_=y.read_shift(2)){case 9:if(T!=3)throw new Error("Sector Shift: Expected 9 saw "+_);break;case 12:if(T!=4)throw new Error("Sector Shift: Expected 12 saw "+_);break;default:throw new Error("Sector Shift: Expected 9 or 12 saw "+_)}y.chk("0600","Mini Sector Shift: "),y.chk("000000000000","Reserved: ")}function p(y,T){for(var _=Math.ceil(y.length/T)-1,b=[],S=1;S<_;++S)b[S-1]=y.slice(S*T,(S+1)*T);return b[_-1]=y.slice(_*T),b}function x(y,T,_){for(var b=0,S=0,C=0,B=0,V=0,z=_.length,U=[],H=[];b<z;++b)U[b]=H[b]=b,T[b]=_[b];for(;V<H.length;++V)b=H[V],S=y[b].L,C=y[b].R,B=y[b].C,U[b]===b&&(S!==-1&&U[S]!==S&&(U[b]=U[S]),C!==-1&&U[C]!==C&&(U[b]=U[C])),B!==-1&&(U[B]=b),S!==-1&&b!=U[b]&&(U[S]=U[b],H.lastIndexOf(S)<V&&H.push(S)),C!==-1&&b!=U[b]&&(U[C]=U[b],H.lastIndexOf(C)<V&&H.push(C));for(b=1;b<z;++b)U[b]===b&&(C!==-1&&U[C]!==C?U[b]=U[C]:S!==-1&&U[S]!==S&&(U[b]=U[S]));for(b=1;b<z;++b)if(y[b].type!==0){if(V=b,V!=U[V])do V=U[V],T[b]=T[V]+"/"+T[b];while(V!==0&&U[V]!==-1&&V!=U[V]);U[b]=-1}for(T[0]+="/",b=1;b<z;++b)y[b].type!==2&&(T[b]+="/")}function h(y,T,_){for(var b=y.start,S=y.size,C=[],B=b;_&&S>0&&B>=0;)C.push(T.slice(B*J,B*J+J)),S-=J,B=ma(_,B*4);return C.length===0?G(0):Ft(C).slice(0,y.size)}function v(y,T,_,b,S){var C=ce;if(y===ce){if(T!==0)throw new Error("DIFAT chain shorter than expected")}else if(y!==-1){var B=_[y],V=(b>>>2)-1;if(!B)return;for(var z=0;z<V&&(C=ma(B,z*4))!==ce;++z)S.push(C);v(ma(B,b-4),T-1,_,b,S)}}function w(y,T,_,b,S){var C=[],B=[];S||(S=[]);var V=b-1,z=0,U=0;for(z=T;z>=0;){S[z]=!0,C[C.length]=z,B.push(y[z]);var H=_[Math.floor(z*4/b)];if(U=z*4&V,b<4+U)throw new Error("FAT boundary crossed: "+z+" 4 "+b);if(!y[H])break;z=ma(y[H],U)}return{nodes:C,data:M1([B])}}function m(y,T,_,b){var S=y.length,C=[],B=[],V=[],z=[],U=b-1,H=0,te=0,oe=0,ue=0;for(H=0;H<S;++H)if(V=[],oe=H+T,oe>=S&&(oe-=S),!B[oe]){z=[];var se=[];for(te=oe;te>=0;){se[te]=!0,B[te]=!0,V[V.length]=te,z.push(y[te]);var le=_[Math.floor(te*4/b)];if(ue=te*4&U,b<4+ue)throw new Error("FAT boundary crossed: "+te+" 4 "+b);if(!y[le]||(te=ma(y[le],ue),se[te]))break}C[oe]={nodes:V,data:M1([z])}}return C}function E(y,T,_,b,S,C,B,V){for(var z=0,U=b.length?2:0,H=T[y].data,te=0,oe=0,ue;te<H.length;te+=128){var se=H.slice(te,te+128);dr(se,64),oe=se.read_shift(2),ue=jl(se,0,oe-U),b.push(ue);var le={name:ue,type:se.read_shift(1),color:se.read_shift(1),L:se.read_shift(4,"i"),R:se.read_shift(4,"i"),C:se.read_shift(4,"i"),clsid:se.read_shift(16),state:se.read_shift(4,"i"),start:0,size:0},ge=se.read_shift(2)+se.read_shift(2)+se.read_shift(2)+se.read_shift(2);ge!==0&&(le.ct=F(se,se.l-8));var ze=se.read_shift(2)+se.read_shift(2)+se.read_shift(2)+se.read_shift(2);ze!==0&&(le.mt=F(se,se.l-8)),le.start=se.read_shift(4,"i"),le.size=se.read_shift(4,"i"),le.size<0&&le.start<0&&(le.size=le.type=0,le.start=ce,le.name=""),le.type===5?(z=le.start,S>0&&z!==ce&&(T[z].name="!StreamData")):le.size>=4096?(le.storage="fat",T[le.start]===void 0&&(T[le.start]=w(_,le.start,T.fat_addrs,T.ssz)),T[le.start].name=le.name,le.content=T[le.start].data.slice(0,le.size)):(le.storage="minifat",le.size<0?le.size=0:z!==ce&&le.start!==ce&&T[z]&&(le.content=h(le,T[z].data,(T[V]||{}).data))),le.content&&dr(le.content,0),C[ue]=le,B.push(le)}}function F(y,T){return new Date((wt(y,T+4)/1e7*Math.pow(2,32)+wt(y,T)/1e7-11644473600)*1e3)}function P(y,T){return f(),u(l.readFileSync(y),T)}function D(y,T){var _=T&&T.type;switch(_||Se&&Buffer.isBuffer(y)&&(_="buffer"),_||"base64"){case"file":return P(y,T);case"base64":return u(Br(mn(y)),T);case"binary":return u(Br(y),T)}return u(y,T)}function k(y,T){var _=T||{},b=_.root||"Root Entry";if(y.FullPaths||(y.FullPaths=[]),y.FileIndex||(y.FileIndex=[]),y.FullPaths.length!==y.FileIndex.length)throw new Error("inconsistent CFB structure");y.FullPaths.length===0&&(y.FullPaths[0]=b+"/",y.FileIndex[0]={name:b,type:5}),_.CLSID&&(y.FileIndex[0].clsid=_.CLSID),L(y)}function L(y){var T="Sh33tJ5";if(!Le.find(y,"/"+T)){var _=G(4);_[0]=55,_[1]=_[3]=50,_[2]=54,y.FileIndex.push({name:T,type:2,content:_,size:4,L:69,R:69,C:69}),y.FullPaths.push(y.FullPaths[0]+T),M(y)}}function M(y,T){k(y);for(var _=!1,b=!1,S=y.FullPaths.length-1;S>=0;--S){var C=y.FileIndex[S];switch(C.type){case 0:b?_=!0:(y.FileIndex.pop(),y.FullPaths.pop());break;case 1:case 2:case 5:b=!0,isNaN(C.R*C.L*C.C)&&(_=!0),C.R>-1&&C.L>-1&&C.R==C.L&&(_=!0);break;default:_=!0;break}}if(!(!_&&!T)){var B=new Date(1987,1,19),V=0,z=Object.create?Object.create(null):{},U=[];for(S=0;S<y.FullPaths.length;++S)z[y.FullPaths[S]]=!0,y.FileIndex[S].type!==0&&U.push([y.FullPaths[S],y.FileIndex[S]]);for(S=0;S<U.length;++S){var H=n(U[S][0]);b=z[H],b||(U.push([H,{name:a(H).replace("/",""),type:1,clsid:Ue,ct:B,mt:B,content:null}]),z[H]=!0)}for(U.sort(function(ue,se){return r(ue[0],se[0])}),y.FullPaths=[],y.FileIndex=[],S=0;S<U.length;++S)y.FullPaths[S]=U[S][0],y.FileIndex[S]=U[S][1];for(S=0;S<U.length;++S){var te=y.FileIndex[S],oe=y.FullPaths[S];if(te.name=a(oe).replace("/",""),te.L=te.R=te.C=-(te.color=1),te.size=te.content?te.content.length:0,te.start=0,te.clsid=te.clsid||Ue,S===0)te.C=U.length>1?1:-1,te.size=0,te.type=5;else if(oe.slice(-1)=="/"){for(V=S+1;V<U.length&&n(y.FullPaths[V])!=oe;++V);for(te.C=V>=U.length?-1:V,V=S+1;V<U.length&&n(y.FullPaths[V])!=n(oe);++V);te.R=V>=U.length?-1:V,te.type=1}else n(y.FullPaths[S+1]||"")==n(oe)&&(te.R=S+1),te.type=2}}}function R(y,T){var _=T||{};if(_.fileType=="mad")return xm(y,_);switch(M(y),_.fileType){case"zip":return cm(y,_)}var b=function(ue){for(var se=0,le=0,ge=0;ge<ue.FileIndex.length;++ge){var ze=ue.FileIndex[ge];if(ze.content){var Yt=ze.content.length;Yt>0&&(Yt<4096?se+=Yt+63>>6:le+=Yt+511>>9)}}for(var at=ue.FullPaths.length+3>>2,ar=se+7>>3,Si=se+127>>7,Ci=ar+le+at+Si,ea=Ci+127>>7,s0=ea<=109?0:Math.ceil((ea-109)/127);Ci+ea+s0+127>>7>ea;)s0=++ea<=109?0:Math.ceil((ea-109)/127);var tn=[1,s0,ea,Si,at,le,se,0];return ue.FileIndex[0].size=se<<6,tn[7]=(ue.FileIndex[0].start=tn[0]+tn[1]+tn[2]+tn[3]+tn[4]+tn[5])+(tn[6]+7>>3),tn}(y),S=G(b[7]<<9),C=0,B=0;{for(C=0;C<8;++C)S.write_shift(1,he[C]);for(C=0;C<8;++C)S.write_shift(2,0);for(S.write_shift(2,62),S.write_shift(2,3),S.write_shift(2,65534),S.write_shift(2,9),S.write_shift(2,6),C=0;C<3;++C)S.write_shift(2,0);for(S.write_shift(4,0),S.write_shift(4,b[2]),S.write_shift(4,b[0]+b[1]+b[2]+b[3]-1),S.write_shift(4,0),S.write_shift(4,4096),S.write_shift(4,b[3]?b[0]+b[1]+b[2]-1:ce),S.write_shift(4,b[3]),S.write_shift(-4,b[1]?b[0]-1:ce),S.write_shift(4,b[1]),C=0;C<109;++C)S.write_shift(-4,C<b[2]?b[1]+C:-1)}if(b[1])for(B=0;B<b[1];++B){for(;C<236+B*127;++C)S.write_shift(-4,C<b[2]?b[1]+C:-1);S.write_shift(-4,B===b[1]-1?ce:B+1)}var V=function(ue){for(B+=ue;C<B-1;++C)S.write_shift(-4,C+1);ue&&(++C,S.write_shift(-4,ce))};for(B=C=0,B+=b[1];C<B;++C)S.write_shift(-4,Ve.DIFSECT);for(B+=b[2];C<B;++C)S.write_shift(-4,Ve.FATSECT);V(b[3]),V(b[4]);for(var z=0,U=0,H=y.FileIndex[0];z<y.FileIndex.length;++z)H=y.FileIndex[z],H.content&&(U=H.content.length,!(U<4096)&&(H.start=B,V(U+511>>9)));for(V(b[6]+7>>3);S.l&511;)S.write_shift(-4,Ve.ENDOFCHAIN);for(B=C=0,z=0;z<y.FileIndex.length;++z)H=y.FileIndex[z],H.content&&(U=H.content.length,!(!U||U>=4096)&&(H.start=B,V(U+63>>6)));for(;S.l&511;)S.write_shift(-4,Ve.ENDOFCHAIN);for(C=0;C<b[4]<<2;++C){var te=y.FullPaths[C];if(!te||te.length===0){for(z=0;z<17;++z)S.write_shift(4,0);for(z=0;z<3;++z)S.write_shift(4,-1);for(z=0;z<12;++z)S.write_shift(4,0);continue}H=y.FileIndex[C],C===0&&(H.start=H.size?H.start-1:ce);var oe=C===0&&_.root||H.name;if(U=2*(oe.length+1),S.write_shift(64,oe,"utf16le"),S.write_shift(2,U),S.write_shift(1,H.type),S.write_shift(1,H.color),S.write_shift(-4,H.L),S.write_shift(-4,H.R),S.write_shift(-4,H.C),H.clsid)S.write_shift(16,H.clsid,"hex");else for(z=0;z<4;++z)S.write_shift(4,0);S.write_shift(4,H.state||0),S.write_shift(4,0),S.write_shift(4,0),S.write_shift(4,0),S.write_shift(4,0),S.write_shift(4,H.start),S.write_shift(4,H.size),S.write_shift(4,0)}for(C=1;C<y.FileIndex.length;++C)if(H=y.FileIndex[C],H.size>=4096)if(S.l=H.start+1<<9,Se&&Buffer.isBuffer(H.content))H.content.copy(S,S.l,0,H.size),S.l+=H.size+511&-512;else{for(z=0;z<H.size;++z)S.write_shift(1,H.content[z]);for(;z&511;++z)S.write_shift(1,0)}for(C=1;C<y.FileIndex.length;++C)if(H=y.FileIndex[C],H.size>0&&H.size<4096)if(Se&&Buffer.isBuffer(H.content))H.content.copy(S,S.l,0,H.size),S.l+=H.size+63&-64;else{for(z=0;z<H.size;++z)S.write_shift(1,H.content[z]);for(;z&63;++z)S.write_shift(1,0)}if(Se)S.l=S.length;else for(;S.l<S.length;)S.write_shift(1,0);return S}function X(y,T){var _=y.FullPaths.map(function(z){return z.toUpperCase()}),b=_.map(function(z){var U=z.split("/");return U[U.length-(z.slice(-1)=="/"?2:1)]}),S=!1;T.charCodeAt(0)===47?(S=!0,T=_[0].slice(0,-1)+T):S=T.indexOf("/")!==-1;var C=T.toUpperCase(),B=S===!0?_.indexOf(C):b.indexOf(C);if(B!==-1)return y.FileIndex[B];var V=!C.match(yl);for(C=C.replace(hi,""),V&&(C=C.replace(yl,"!")),B=0;B<_.length;++B)if((V?_[B].replace(yl,"!"):_[B]).replace(hi,"")==C||(V?b[B].replace(yl,"!"):b[B]).replace(hi,"")==C)return y.FileIndex[B];return null}var J=64,ce=-2,ye="d0cf11e0a1b11ae1",he=[208,207,17,224,161,177,26,225],Ue="00000000000000000000000000000000",Ve={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:ce,FREESECT:-1,HEADER_SIGNATURE:ye,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:Ue,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]};function et(y,T,_){f();var b=R(y,_);l.writeFileSync(T,b)}function tt(y){for(var T=new Array(y.length),_=0;_<y.length;++_)T[_]=String.fromCharCode(y[_]);return T.join("")}function rt(y,T){var _=R(y,T);switch(T&&T.type||"buffer"){case"file":return f(),l.writeFileSync(T.filename,_),_;case"binary":return typeof _=="string"?_:tt(_);case"base64":return No(typeof _=="string"?_:tt(_));case"buffer":if(Se)return Buffer.isBuffer(_)?_:wn(_);case"array":return typeof _=="string"?Br(_):_}return _}var gt;function A(y){try{var T=y.InflateRaw,_=new T;if(_._processChunk(new Uint8Array([3,0]),_._finishFlushFlag),_.bytesRead)gt=y;else throw new Error("zlib does not expose bytesRead")}catch(b){console.error("cannot use native zlib: "+(b.message||b))}}function O(y,T){if(!gt)return Ou(y,T);var _=gt.InflateRaw,b=new _,S=b._processChunk(y.slice(y.l),b._finishFlushFlag);return y.l+=b.bytesRead,S}function N(y){return gt?gt.deflateRawSync(y):Fu(y)}var I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Y=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],W=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function Z(y){var T=(y<<1|y<<11)&139536|(y<<5|y<<15)&558144;return(T>>16|T>>8|T)&255}for(var ee=typeof Uint8Array<"u",K=ee?new Uint8Array(256):[],ve=0;ve<256;++ve)K[ve]=Z(ve);function we(y,T){var _=K[y&255];return T<=8?_>>>8-T:(_=_<<8|K[y>>8&255],T<=16?_>>>16-T:(_=_<<8|K[y>>16&255],_>>>24-T))}function Ne(y,T){var _=T&7,b=T>>>3;return(y[b]|(_<=6?0:y[b+1]<<8))>>>_&3}function me(y,T){var _=T&7,b=T>>>3;return(y[b]|(_<=5?0:y[b+1]<<8))>>>_&7}function Xe(y,T){var _=T&7,b=T>>>3;return(y[b]|(_<=4?0:y[b+1]<<8))>>>_&15}function Qe(y,T){var _=T&7,b=T>>>3;return(y[b]|(_<=3?0:y[b+1]<<8))>>>_&31}function de(y,T){var _=T&7,b=T>>>3;return(y[b]|(_<=1?0:y[b+1]<<8))>>>_&127}function xr(y,T,_){var b=T&7,S=T>>>3,C=(1<<_)-1,B=y[S]>>>b;return _<8-b||(B|=y[S+1]<<8-b,_<16-b)||(B|=y[S+2]<<16-b,_<24-b)||(B|=y[S+3]<<24-b),B&C}function en(y,T,_){var b=T&7,S=T>>>3;return b<=5?y[S]|=(_&7)<<b:(y[S]|=_<<b&255,y[S+1]=(_&7)>>8-b),T+3}function Zn(y,T,_){var b=T&7,S=T>>>3;return _=(_&1)<<b,y[S]|=_,T+1}function Fa(y,T,_){var b=T&7,S=T>>>3;return _<<=b,y[S]|=_&255,_>>>=8,y[S+1]=_,T+8}function Au(y,T,_){var b=T&7,S=T>>>3;return _<<=b,y[S]|=_&255,_>>>=8,y[S+1]=_&255,y[S+2]=_>>>8,T+16}function n0(y,T){var _=y.length,b=2*_>T?2*_:T+5,S=0;if(_>=T)return y;if(Se){var C=_1(b);if(y.copy)y.copy(C);else for(;S<y.length;++S)C[S]=y[S];return C}else if(ee){var B=new Uint8Array(b);if(B.set)B.set(y);else for(;S<_;++S)B[S]=y[S];return B}return y.length=b,y}function Wr(y){for(var T=new Array(y),_=0;_<y;++_)T[_]=0;return T}function jo(y,T,_){var b=1,S=0,C=0,B=0,V=0,z=y.length,U=ee?new Uint16Array(32):Wr(32);for(C=0;C<32;++C)U[C]=0;for(C=z;C<_;++C)y[C]=0;z=y.length;var H=ee?new Uint16Array(z):Wr(z);for(C=0;C<z;++C)U[S=y[C]]++,b<S&&(b=S),H[C]=0;for(U[0]=0,C=1;C<=b;++C)U[C+16]=V=V+U[C-1]<<1;for(C=0;C<z;++C)V=y[C],V!=0&&(H[C]=U[V+16]++);var te=0;for(C=0;C<z;++C)if(te=y[C],te!=0)for(V=we(H[C],b)>>b-te,B=(1<<b+4-te)-1;B>=0;--B)T[V|B<<te]=te&15|C<<4;return b}var a0=ee?new Uint16Array(512):Wr(512),i0=ee?new Uint16Array(32):Wr(32);if(!ee){for(var qn=0;qn<512;++qn)a0[qn]=0;for(qn=0;qn<32;++qn)i0[qn]=0}(function(){for(var y=[],T=0;T<32;T++)y.push(5);jo(y,i0,32);var _=[];for(T=0;T<=143;T++)_.push(8);for(;T<=255;T++)_.push(9);for(;T<=279;T++)_.push(7);for(;T<=287;T++)_.push(8);jo(_,a0,288)})();var im=function(){for(var T=ee?new Uint8Array(32768):[],_=0,b=0;_<W.length-1;++_)for(;b<W[_+1];++b)T[b]=_;for(;b<32768;++b)T[b]=29;var S=ee?new Uint8Array(259):[];for(_=0,b=0;_<Y.length-1;++_)for(;b<Y[_+1];++b)S[b]=_;function C(V,z){for(var U=0;U<V.length;){var H=Math.min(65535,V.length-U),te=U+H==V.length;for(z.write_shift(1,+te),z.write_shift(2,H),z.write_shift(2,~H&65535);H-- >0;)z[z.l++]=V[U++]}return z.l}function B(V,z){for(var U=0,H=0,te=ee?new Uint16Array(32768):[];H<V.length;){var oe=Math.min(65535,V.length-H);if(oe<10){for(U=en(z,U,+(H+oe==V.length)),U&7&&(U+=8-(U&7)),z.l=U/8|0,z.write_shift(2,oe),z.write_shift(2,~oe&65535);oe-- >0;)z[z.l++]=V[H++];U=z.l*8;continue}U=en(z,U,+(H+oe==V.length)+2);for(var ue=0;oe-- >0;){var se=V[H];ue=(ue<<5^se)&32767;var le=-1,ge=0;if((le=te[ue])&&(le|=H&-32768,le>H&&(le-=32768),le<H))for(;V[le+ge]==V[H+ge]&&ge<250;)++ge;if(ge>2){se=S[ge],se<=22?U=Fa(z,U,K[se+1]>>1)-1:(Fa(z,U,3),U+=5,Fa(z,U,K[se-23]>>5),U+=3);var ze=se<8?0:se-4>>2;ze>0&&(Au(z,U,ge-Y[se]),U+=ze),se=T[H-le],U=Fa(z,U,K[se]>>3),U-=3;var Yt=se<4?0:se-2>>1;Yt>0&&(Au(z,U,H-le-W[se]),U+=Yt);for(var at=0;at<ge;++at)te[ue]=H&32767,ue=(ue<<5^V[H])&32767,++H;oe-=ge-1}else se<=143?se=se+48:U=Zn(z,U,1),U=Fa(z,U,K[se]),te[ue]=H&32767,++H}U=Fa(z,U,0)-1}return z.l=(U+7)/8|0,z.l}return function(z,U){return z.length<8?C(z,U):B(z,U)}}();function Fu(y){var T=G(50+Math.floor(y.length*1.1)),_=im(y,T);return T.slice(0,_)}var Pu=ee?new Uint16Array(32768):Wr(32768),Iu=ee?new Uint16Array(32768):Wr(32768),Nu=ee?new Uint16Array(128):Wr(128),Lu=1,Du=1;function om(y,T){var _=Qe(y,T)+257;T+=5;var b=Qe(y,T)+1;T+=5;var S=Xe(y,T)+4;T+=4;for(var C=0,B=ee?new Uint8Array(19):Wr(19),V=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],z=1,U=ee?new Uint8Array(8):Wr(8),H=ee?new Uint8Array(8):Wr(8),te=B.length,oe=0;oe<S;++oe)B[I[oe]]=C=me(y,T),z<C&&(z=C),U[C]++,T+=3;var ue=0;for(U[0]=0,oe=1;oe<=z;++oe)H[oe]=ue=ue+U[oe-1]<<1;for(oe=0;oe<te;++oe)(ue=B[oe])!=0&&(V[oe]=H[ue]++);var se=0;for(oe=0;oe<te;++oe)if(se=B[oe],se!=0){ue=K[V[oe]]>>8-se;for(var le=(1<<7-se)-1;le>=0;--le)Nu[ue|le<<se]=se&7|oe<<3}var ge=[];for(z=1;ge.length<_+b;)switch(ue=Nu[de(y,T)],T+=ue&7,ue>>>=3){case 16:for(C=3+Ne(y,T),T+=2,ue=ge[ge.length-1];C-- >0;)ge.push(ue);break;case 17:for(C=3+me(y,T),T+=3;C-- >0;)ge.push(0);break;case 18:for(C=11+de(y,T),T+=7;C-- >0;)ge.push(0);break;default:ge.push(ue),z<ue&&(z=ue);break}var ze=ge.slice(0,_),Yt=ge.slice(_);for(oe=_;oe<286;++oe)ze[oe]=0;for(oe=b;oe<30;++oe)Yt[oe]=0;return Lu=jo(ze,Pu,286),Du=jo(Yt,Iu,30),T}function sm(y,T){if(y[0]==3&&!(y[1]&3))return[ya(T),2];for(var _=0,b=0,S=_1(T||1<<18),C=0,B=S.length>>>0,V=0,z=0;!(b&1);){if(b=me(y,_),_+=3,b>>>1)b>>1==1?(V=9,z=5):(_=om(y,_),V=Lu,z=Du);else{_&7&&(_+=8-(_&7));var U=y[_>>>3]|y[(_>>>3)+1]<<8;if(_+=32,U>0)for(!T&&B<C+U&&(S=n0(S,C+U),B=S.length);U-- >0;)S[C++]=y[_>>>3],_+=8;continue}for(;;){!T&&B<C+32767&&(S=n0(S,C+32767),B=S.length);var H=xr(y,_,V),te=b>>>1==1?a0[H]:Pu[H];if(_+=te&15,te>>>=4,!(te>>>8&255))S[C++]=te;else{if(te==256)break;te-=257;var oe=te<8?0:te-4>>2;oe>5&&(oe=0);var ue=C+Y[te];oe>0&&(ue+=xr(y,_,oe),_+=oe),H=xr(y,_,z),te=b>>>1==1?i0[H]:Iu[H],_+=te&15,te>>>=4;var se=te<4?0:te-2>>1,le=W[te];for(se>0&&(le+=xr(y,_,se),_+=se),!T&&B<ue&&(S=n0(S,ue+100),B=S.length);C<ue;)S[C]=S[C-le],++C}}}return T?[S,_+7>>>3]:[S.slice(0,C),_+7>>>3]}function Ou(y,T){var _=y.slice(y.l||0),b=sm(_,T);return y.l+=b[1],b[0]}function Ru(y,T){if(y)typeof console<"u"&&console.error(T);else throw new Error(T)}function Mu(y,T){var _=y;dr(_,0);var b=[],S=[],C={FileIndex:b,FullPaths:S};k(C,{root:T.root});for(var B=_.length-4;(_[B]!=80||_[B+1]!=75||_[B+2]!=5||_[B+3]!=6)&&B>=0;)--B;_.l=B+4,_.l+=4;var V=_.read_shift(2);_.l+=6;var z=_.read_shift(4);for(_.l=z,B=0;B<V;++B){_.l+=20;var U=_.read_shift(4),H=_.read_shift(4),te=_.read_shift(2),oe=_.read_shift(2),ue=_.read_shift(2);_.l+=8;var se=_.read_shift(4),le=s(_.slice(_.l+te,_.l+te+oe));_.l+=te+oe+ue;var ge=_.l;_.l=se+4,lm(_,U,H,C,le),_.l=ge}return C}function lm(y,T,_,b,S){y.l+=2;var C=y.read_shift(2),B=y.read_shift(2),V=o(y);if(C&8257)throw new Error("Unsupported ZIP encryption");for(var z=y.read_shift(4),U=y.read_shift(4),H=y.read_shift(4),te=y.read_shift(2),oe=y.read_shift(2),ue="",se=0;se<te;++se)ue+=String.fromCharCode(y[y.l++]);if(oe){var le=s(y.slice(y.l,y.l+oe));(le[21589]||{}).mt&&(V=le[21589].mt),((S||{})[21589]||{}).mt&&(V=S[21589].mt)}y.l+=oe;var ge=y.slice(y.l,y.l+U);switch(B){case 8:ge=O(y,H);break;case 0:break;default:throw new Error("Unsupported ZIP Compression method "+B)}var ze=!1;C&8&&(z=y.read_shift(4),z==134695760&&(z=y.read_shift(4),ze=!0),U=y.read_shift(4),H=y.read_shift(4)),U!=T&&Ru(ze,"Bad compressed size: "+T+" != "+U),H!=_&&Ru(ze,"Bad uncompressed size: "+_+" != "+H),o0(b,ue,ge,{unsafe:!0,mt:V})}function cm(y,T){var _=T||{},b=[],S=[],C=G(1),B=_.compression?8:0,V=0,z=!1;z&&(V|=8);var U=0,H=0,te=0,oe=0,ue=y.FullPaths[0],se=ue,le=y.FileIndex[0],ge=[],ze=0;for(U=1;U<y.FullPaths.length;++U)if(se=y.FullPaths[U].slice(ue.length),le=y.FileIndex[U],!(!le.size||!le.content||se=="Sh33tJ5")){var Yt=te,at=G(se.length);for(H=0;H<se.length;++H)at.write_shift(1,se.charCodeAt(H)&127);at=at.slice(0,at.l),ge[oe]=kw.buf(le.content,0);var ar=le.content;B==8&&(ar=N(ar)),C=G(30),C.write_shift(4,67324752),C.write_shift(2,20),C.write_shift(2,V),C.write_shift(2,B),le.mt?i(C,le.mt):C.write_shift(4,0),C.write_shift(-4,V&8?0:ge[oe]),C.write_shift(4,V&8?0:ar.length),C.write_shift(4,V&8?0:le.content.length),C.write_shift(2,at.length),C.write_shift(2,0),te+=C.length,b.push(C),te+=at.length,b.push(at),te+=ar.length,b.push(ar),V&8&&(C=G(12),C.write_shift(-4,ge[oe]),C.write_shift(4,ar.length),C.write_shift(4,le.content.length),te+=C.l,b.push(C)),C=G(46),C.write_shift(4,33639248),C.write_shift(2,0),C.write_shift(2,20),C.write_shift(2,V),C.write_shift(2,B),C.write_shift(4,0),C.write_shift(-4,ge[oe]),C.write_shift(4,ar.length),C.write_shift(4,le.content.length),C.write_shift(2,at.length),C.write_shift(2,0),C.write_shift(2,0),C.write_shift(2,0),C.write_shift(2,0),C.write_shift(4,0),C.write_shift(4,Yt),ze+=C.l,S.push(C),ze+=at.length,S.push(at),++oe}return C=G(22),C.write_shift(4,101010256),C.write_shift(2,0),C.write_shift(2,0),C.write_shift(2,oe),C.write_shift(2,oe),C.write_shift(4,ze),C.write_shift(4,te),C.write_shift(2,0),Ft([Ft(b),Ft(S),C])}var $o={htm:"text/html",xml:"text/xml",gif:"image/gif",jpg:"image/jpeg",png:"image/png",mso:"application/x-mso",thmx:"application/vnd.ms-officetheme",sh33tj5:"application/octet-stream"};function fm(y,T){if(y.ctype)return y.ctype;var _=y.name||"",b=_.match(/\.([^\.]+)$/);return b&&$o[b[1]]||T&&(b=(_=T).match(/[\.\\]([^\.\\])+$/),b&&$o[b[1]])?$o[b[1]]:"application/octet-stream"}function um(y){for(var T=No(y),_=[],b=0;b<T.length;b+=76)_.push(T.slice(b,b+76));return _.join(`\r
`)+`\r
`}function dm(y){var T=y.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(U){var H=U.charCodeAt(0).toString(16).toUpperCase();return"="+(H.length==1?"0"+H:H)});T=T.replace(/ $/mg,"=20").replace(/\t$/mg,"=09"),T.charAt(0)==`
`&&(T="=0D"+T.slice(1)),T=T.replace(/\r(?!\n)/mg,"=0D").replace(/\n\n/mg,`
=0A`).replace(/([^\r\n])\n/mg,"$1=0A");for(var _=[],b=T.split(`\r
`),S=0;S<b.length;++S){var C=b[S];if(C.length==0){_.push("");continue}for(var B=0;B<C.length;){var V=76,z=C.slice(B,B+V);z.charAt(V-1)=="="?V--:z.charAt(V-2)=="="?V-=2:z.charAt(V-3)=="="&&(V-=3),z=C.slice(B,B+V),B+=V,B<C.length&&(z+="="),_.push(z)}}return _.join(`\r
`)}function hm(y){for(var T=[],_=0;_<y.length;++_){for(var b=y[_];_<=y.length&&b.charAt(b.length-1)=="=";)b=b.slice(0,b.length-1)+y[++_];T.push(b)}for(var S=0;S<T.length;++S)T[S]=T[S].replace(/[=][0-9A-Fa-f]{2}/g,function(C){return String.fromCharCode(parseInt(C.slice(1),16))});return Br(T.join(`\r
`))}function pm(y,T,_){for(var b="",S="",C="",B,V=0;V<10;++V){var z=T[V];if(!z||z.match(/^\s*$/))break;var U=z.match(/^(.*?):\s*([^\s].*)$/);if(U)switch(U[1].toLowerCase()){case"content-location":b=U[2].trim();break;case"content-type":C=U[2].trim();break;case"content-transfer-encoding":S=U[2].trim();break}}switch(++V,S.toLowerCase()){case"base64":B=Br(mn(T.slice(V).join("")));break;case"quoted-printable":B=hm(T.slice(V));break;default:throw new Error("Unsupported Content-Transfer-Encoding "+S)}var H=o0(y,b.slice(_.length),B,{unsafe:!0});C&&(H.ctype=C)}function gm(y,T){if(tt(y.slice(0,13)).toLowerCase()!="mime-version:")throw new Error("Unsupported MAD header");var _=T&&T.root||"",b=(Se&&Buffer.isBuffer(y)?y.toString("binary"):tt(y)).split(`\r
`),S=0,C="";for(S=0;S<b.length;++S)if(C=b[S],!!/^Content-Location:/i.test(C)&&(C=C.slice(C.indexOf("file")),_||(_=C.slice(0,C.lastIndexOf("/")+1)),C.slice(0,_.length)!=_))for(;_.length>0&&(_=_.slice(0,_.length-1),_=_.slice(0,_.lastIndexOf("/")+1),C.slice(0,_.length)!=_););var B=(b[1]||"").match(/boundary="(.*?)"/);if(!B)throw new Error("MAD cannot find boundary");var V="--"+(B[1]||""),z=[],U=[],H={FileIndex:z,FullPaths:U};k(H);var te,oe=0;for(S=0;S<b.length;++S){var ue=b[S];ue!==V&&ue!==V+"--"||(oe++&&pm(H,b.slice(te,S),_),te=S)}return H}function xm(y,T){var _=T||{},b=_.boundary||"SheetJS";b="------="+b;for(var S=["MIME-Version: 1.0",'Content-Type: multipart/related; boundary="'+b.slice(2)+'"',"","",""],C=y.FullPaths[0],B=C,V=y.FileIndex[0],z=1;z<y.FullPaths.length;++z)if(B=y.FullPaths[z].slice(C.length),V=y.FileIndex[z],!(!V.size||!V.content||B=="Sh33tJ5")){B=B.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(ge){return"_x"+ge.charCodeAt(0).toString(16)+"_"}).replace(/[\u0080-\uFFFF]/g,function(ge){return"_u"+ge.charCodeAt(0).toString(16)+"_"});for(var U=V.content,H=Se&&Buffer.isBuffer(U)?U.toString("binary"):tt(U),te=0,oe=Math.min(1024,H.length),ue=0,se=0;se<=oe;++se)(ue=H.charCodeAt(se))>=32&&ue<128&&++te;var le=te>=oe*4/5;S.push(b),S.push("Content-Location: "+(_.root||"file:///C:/SheetJS/")+B),S.push("Content-Transfer-Encoding: "+(le?"quoted-printable":"base64")),S.push("Content-Type: "+fm(V,B)),S.push(""),S.push(le?dm(H):um(H))}return S.push(b+`--\r
`),S.join(`\r
`)}function mm(y){var T={};return k(T,y),T}function o0(y,T,_,b){var S=b&&b.unsafe;S||k(y);var C=!S&&Le.find(y,T);if(!C){var B=y.FullPaths[0];T.slice(0,B.length)==B?B=T:(B.slice(-1)!="/"&&(B+="/"),B=(B+T).replace("//","/")),C={name:a(T),type:2},y.FileIndex.push(C),y.FullPaths.push(B),S||Le.utils.cfb_gc(y)}return C.content=_,C.size=_?_.length:0,b&&(b.CLSID&&(C.clsid=b.CLSID),b.mt&&(C.mt=b.mt),b.ct&&(C.ct=b.ct)),C}function vm(y,T){k(y);var _=Le.find(y,T);if(_){for(var b=0;b<y.FileIndex.length;++b)if(y.FileIndex[b]==_)return y.FileIndex.splice(b,1),y.FullPaths.splice(b,1),!0}return!1}function wm(y,T,_){k(y);var b=Le.find(y,T);if(b){for(var S=0;S<y.FileIndex.length;++S)if(y.FileIndex[S]==b)return y.FileIndex[S].name=a(_),y.FullPaths[S]=_,!0}return!1}function ym(y){M(y,!0)}return t.find=X,t.read=D,t.parse=u,t.write=rt,t.writeFile=et,t.utils={cfb_new:mm,cfb_add:o0,cfb_del:vm,cfb_mov:wm,cfb_gc:ym,ReadShift:So,CheckField:Lg,prep_blob:dr,bconcat:Ft,use_zlib:A,_deflateRaw:Fu,_inflateRaw:Ou,consts:Ve},t}(),_l;function bw(e){return typeof e=="string"?Hl(e):Array.isArray(e)?Q2(e):e}function Bo(e,t,r){if(typeof _l<"u"&&_l.writeFileSync)return r?_l.writeFileSync(e,t,r):_l.writeFileSync(e,t);if(typeof Deno<"u"){if(r&&typeof t=="string")switch(r){case"utf8":t=new TextEncoder(r).encode(t);break;case"binary":t=Hl(t);break;default:throw new Error("Unsupported encoding "+r)}return Deno.writeFileSync(e,t)}var n=r=="utf8"?hn(t):t;if(typeof IE_SaveFile<"u")return IE_SaveFile(n,e);if(typeof Blob<"u"){var a=new Blob([bw(n)],{type:"application/octet-stream"});if(typeof navigator<"u"&&navigator.msSaveBlob)return navigator.msSaveBlob(a,e);if(typeof saveAs<"u")return saveAs(a,e);if(typeof URL<"u"&&typeof document<"u"&&document.createElement&&URL.createObjectURL){var i=URL.createObjectURL(a);if(typeof chrome=="object"&&typeof(chrome.downloads||{}).download=="function")return URL.revokeObjectURL&&typeof setTimeout<"u"&&setTimeout(function(){URL.revokeObjectURL(i)},6e4),chrome.downloads.download({url:i,filename:e,saveAs:!0});var o=document.createElement("a");if(o.download!=null)return o.download=e,o.href=i,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL&&typeof setTimeout<"u"&&setTimeout(function(){URL.revokeObjectURL(i)},6e4),i}}if(typeof $<"u"&&typeof File<"u"&&typeof Folder<"u")try{var s=File(e);return s.open("w"),s.encoding="binary",Array.isArray(t)&&(t=Mo(t)),s.write(t),s.close(),t}catch(l){if(!l.message||!l.message.match(/onstruct/))throw l}throw new Error("cannot save file "+e)}function Nt(e){for(var t=Object.keys(e),r=[],n=0;n<t.length;++n)Object.prototype.hasOwnProperty.call(e,t[n])&&r.push(t[n]);return r}function P1(e,t){for(var r=[],n=Nt(e),a=0;a!==n.length;++a)r[e[n[a]][t]]==null&&(r[e[n[a]][t]]=n[a]);return r}function Xf(e){for(var t=[],r=Nt(e),n=0;n!==r.length;++n)t[e[r[n]]]=r[n];return t}function Vl(e){for(var t=[],r=Nt(e),n=0;n!==r.length;++n)t[e[r[n]]]=parseInt(r[n],10);return t}function Tw(e){for(var t=[],r=Nt(e),n=0;n!==r.length;++n)t[e[r[n]]]==null&&(t[e[r[n]]]=[]),t[e[r[n]]].push(r[n]);return t}var Il=new Date(1899,11,30,0,0,0);function tr(e,t){var r=e.getTime();t&&(r-=1462*24*60*60*1e3);var n=Il.getTime()+(e.getTimezoneOffset()-Il.getTimezoneOffset())*6e4;return(r-n)/(24*60*60*1e3)}var Eg=new Date,Sw=Il.getTime()+(Eg.getTimezoneOffset()-Il.getTimezoneOffset())*6e4,I1=Eg.getTimezoneOffset();function _g(e){var t=new Date;return t.setTime(e*24*60*60*1e3+Sw),t.getTimezoneOffset()!==I1&&t.setTime(t.getTime()+(t.getTimezoneOffset()-I1)*6e4),t}var N1=new Date("2017-02-19T19:06:09.000Z"),kg=isNaN(N1.getFullYear())?new Date("2/19/17"):N1,Cw=kg.getFullYear()==2017;function $t(e,t){var r=new Date(e);if(Cw)return t>0?r.setTime(r.getTime()+r.getTimezoneOffset()*60*1e3):t<0&&r.setTime(r.getTime()-r.getTimezoneOffset()*60*1e3),r;if(e instanceof Date)return e;if(kg.getFullYear()==1917&&!isNaN(r.getFullYear())){var n=r.getFullYear();return e.indexOf(""+n)>-1||r.setFullYear(r.getFullYear()+100),r}var a=e.match(/\d+/g)||["2017","2","19","0","0","0"],i=new Date(+a[0],+a[1]-1,+a[2],+a[3]||0,+a[4]||0,+a[5]||0);return e.indexOf("Z")>-1&&(i=new Date(i.getTime()-i.getTimezoneOffset()*60*1e3)),i}function Xl(e,t){if(Se&&Buffer.isBuffer(e)){if(t){if(e[0]==255&&e[1]==254)return hn(e.slice(2).toString("utf16le"));if(e[1]==254&&e[2]==255)return hn(K2(e.slice(2).toString("binary")))}return e.toString("binary")}if(typeof TextDecoder<"u")try{if(t){if(e[0]==255&&e[1]==254)return hn(new TextDecoder("utf-16le").decode(e.slice(2)));if(e[0]==254&&e[1]==255)return hn(new TextDecoder("utf-16be").decode(e.slice(2)))}var r={"\u20AC":"\x80","\u201A":"\x82",\u0192:"\x83","\u201E":"\x84","\u2026":"\x85","\u2020":"\x86","\u2021":"\x87","\u02C6":"\x88","\u2030":"\x89",\u0160:"\x8A","\u2039":"\x8B",\u0152:"\x8C",\u017D:"\x8E","\u2018":"\x91","\u2019":"\x92","\u201C":"\x93","\u201D":"\x94","\u2022":"\x95","\u2013":"\x96","\u2014":"\x97","\u02DC":"\x98","\u2122":"\x99",\u0161:"\x9A","\u203A":"\x9B",\u0153:"\x9C",\u017E:"\x9E",\u0178:"\x9F"};return Array.isArray(e)&&(e=new Uint8Array(e)),new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g,function(i){return r[i]||i})}catch{}for(var n=[],a=0;a!=e.length;++a)n.push(String.fromCharCode(e[a]));return n.join("")}function rr(e){if(typeof JSON<"u"&&!Array.isArray(e))return JSON.parse(JSON.stringify(e));if(typeof e!="object"||e==null)return e;if(e instanceof Date)return new Date(e.getTime());var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=rr(e[r]));return t}function Ze(e,t){for(var r="";r.length<t;)r+=e;return r}function gn(e){var t=Number(e);if(!isNaN(t))return isFinite(t)?t:NaN;if(!/\d/.test(e))return t;var r=1,n=e.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g,function(){return r*=100,""});return!isNaN(t=Number(n))||(n=n.replace(/[(](.*)[)]/,function(a,i){return r=-r,i}),!isNaN(t=Number(n)))?t/r:t}var Aw=["january","february","march","april","may","june","july","august","september","october","november","december"];function Lo(e){var t=new Date(e),r=new Date(NaN),n=t.getYear(),a=t.getMonth(),i=t.getDate();if(isNaN(i))return r;var o=e.toLowerCase();if(o.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)){if(o=o.replace(/[^a-z]/g,"").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/,""),o.length>3&&Aw.indexOf(o)==-1)return r}else if(o.match(/[a-z]/))return r;return n<0||n>8099?r:(a>0||i>1)&&n!=101?t:e.match(/[^-0-9:,\/\\]/)?r:t}function Ee(e,t,r){if(e.FullPaths){if(typeof r=="string"){var n;return Se?n=wn(r):n=J2(r),Le.utils.cfb_add(e,t,n)}Le.utils.cfb_add(e,t,r)}else e.file(t,r)}function jf(){return Le.utils.cfb_new()}var ct=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`;var Fw={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"},$f=Xf(Fw);var Yf=/[&<>'"]/g,Pw=/[\u0000-\u0008\u000b-\u001f]/g;function Pe(e){var t=e+"";return t.replace(Yf,function(r){return $f[r]}).replace(Pw,function(r){return"_x"+("000"+r.charCodeAt(0).toString(16)).slice(-4)+"_"})}function L1(e){return Pe(e).replace(/ /g,"_x0020_")}var bg=/[\u0000-\u001f]/g;function Iw(e){var t=e+"";return t.replace(Yf,function(r){return $f[r]}).replace(/\n/g,"<br/>").replace(bg,function(r){return"&#x"+("000"+r.charCodeAt(0).toString(16)).slice(-4)+";"})}function Nw(e){var t=e+"";return t.replace(Yf,function(r){return $f[r]}).replace(bg,function(r){return"&#x"+r.charCodeAt(0).toString(16).toUpperCase()+";"})}function Lw(e){return e.replace(/(\r\n|[\r\n])/g,"&#10;")}function Dw(e){switch(e){case 1:case!0:case"1":case"true":case"TRUE":return!0;default:return!1}}function Nf(e){for(var t="",r=0,n=0,a=0,i=0,o=0,s=0;r<e.length;){if(n=e.charCodeAt(r++),n<128){t+=String.fromCharCode(n);continue}if(a=e.charCodeAt(r++),n>191&&n<224){o=(n&31)<<6,o|=a&63,t+=String.fromCharCode(o);continue}if(i=e.charCodeAt(r++),n<240){t+=String.fromCharCode((n&15)<<12|(a&63)<<6|i&63);continue}o=e.charCodeAt(r++),s=((n&7)<<18|(a&63)<<12|(i&63)<<6|o&63)-65536,t+=String.fromCharCode(55296+(s>>>10&1023)),t+=String.fromCharCode(56320+(s&1023))}return t}function D1(e){var t=ya(2*e.length),r,n,a=1,i=0,o=0,s;for(n=0;n<e.length;n+=a)a=1,(s=e.charCodeAt(n))<128?r=s:s<224?(r=(s&31)*64+(e.charCodeAt(n+1)&63),a=2):s<240?(r=(s&15)*4096+(e.charCodeAt(n+1)&63)*64+(e.charCodeAt(n+2)&63),a=3):(a=4,r=(s&7)*262144+(e.charCodeAt(n+1)&63)*4096+(e.charCodeAt(n+2)&63)*64+(e.charCodeAt(n+3)&63),r-=65536,o=55296+(r>>>10&1023),r=56320+(r&1023)),o!==0&&(t[i++]=o&255,t[i++]=o>>>8,o=0),t[i++]=r%256,t[i++]=r>>>8;return t.slice(0,i).toString("ucs2")}function O1(e){return wn(e,"binary").toString("utf8")}var kl="foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3",To=Se&&(O1(kl)==Nf(kl)&&O1||D1(kl)==Nf(kl)&&D1)||Nf,hn=Se?function(e){return wn(e,"utf8").toString("binary")}:function(e){for(var t=[],r=0,n=0,a=0;r<e.length;)switch(n=e.charCodeAt(r++),!0){case n<128:t.push(String.fromCharCode(n));break;case n<2048:t.push(String.fromCharCode(192+(n>>6))),t.push(String.fromCharCode(128+(n&63)));break;case(n>=55296&&n<57344):n-=55296,a=e.charCodeAt(r++)-56320+(n<<10),t.push(String.fromCharCode(240+(a>>18&7))),t.push(String.fromCharCode(144+(a>>12&63))),t.push(String.fromCharCode(128+(a>>6&63))),t.push(String.fromCharCode(128+(a&63)));break;default:t.push(String.fromCharCode(224+(n>>12))),t.push(String.fromCharCode(128+(n>>6&63))),t.push(String.fromCharCode(128+(n&63)))}return t.join("")};var Ow=function(){var e=[["nbsp"," "],["middot","\xB7"],["quot",'"'],["apos","'"],["gt",">"],["lt","<"],["amp","&"]].map(function(t){return[new RegExp("&"+t[0]+";","ig"),t[1]]});return function(r){for(var n=r.replace(/^[\t\n\r ]+/,"").replace(/[\t\n\r ]+$/,"").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/[\t\n\r ]+/g," ").replace(/<\s*[bB][rR]\s*\/?>/g,`
`).replace(/<[^>]*>/g,""),a=0;a<e.length;++a)n=n.replace(e[a][0],e[a][1]);return n}}();var Tg=/(^\s|\s$|\n)/;function Pt(e,t){return"<"+e+(t.match(Tg)?' xml:space="preserve"':"")+">"+t+"</"+e+">"}function Do(e){return Nt(e).map(function(t){return" "+t+'="'+e[t]+'"'}).join("")}function ae(e,t,r){return"<"+e+(r!=null?Do(r):"")+(t!=null?(t.match(Tg)?' xml:space="preserve"':"")+">"+t+"</"+e:"/")+">"}function zf(e,t){try{return e.toISOString().replace(/\.\d*/,"")}catch(r){if(t)throw r}return""}function Rw(e,t){switch(typeof e){case"string":var r=ae("vt:lpwstr",Pe(e));return t&&(r=r.replace(/&quot;/g,"_x0022_")),r;case"number":return ae((e|0)==e?"vt:i4":"vt:r8",Pe(String(e)));case"boolean":return ae("vt:bool",e?"true":"false")}if(e instanceof Date)return ae("vt:filetime",zf(e));throw new Error("Unable to serialize "+e)}var yt={CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/metadata/core-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",CT:"http://schemas.openxmlformats.org/package/2006/content-types",RELS:"http://schemas.openxmlformats.org/package/2006/relationships",TCMNT:"http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",dc:"http://purl.org/dc/elements/1.1/",dcterms:"http://purl.org/dc/terms/",dcmitype:"http://purl.org/dc/dcmitype/",mx:"http://schemas.microsoft.com/office/mac/excel/2008/main",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",sjs:"http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",vt:"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",xsi:"http://www.w3.org/2001/XMLSchema-instance",xsd:"http://www.w3.org/2001/XMLSchema"},yi=["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"],hr={o:"urn:schemas-microsoft-com:office:office",x:"urn:schemas-microsoft-com:office:excel",ss:"urn:schemas-microsoft-com:office:spreadsheet",dt:"uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",mv:"http://macVmlSchemaUri",v:"urn:schemas-microsoft-com:vml",html:"http://www.w3.org/TR/REC-html40"};function Mw(e,t){for(var r=1-2*(e[t+7]>>>7),n=((e[t+7]&127)<<4)+(e[t+6]>>>4&15),a=e[t+6]&15,i=5;i>=0;--i)a=a*256+e[t+i];return n==2047?a==0?r*(1/0):NaN:(n==0?n=-1022:(n-=1023,a+=Math.pow(2,52)),r*Math.pow(2,n-52)*a)}function Bw(e,t,r){var n=(t<0||1/t==-1/0?1:0)<<7,a=0,i=0,o=n?-t:t;isFinite(o)?o==0?a=i=0:(a=Math.floor(Math.log(o)/Math.LN2),i=o*Math.pow(2,52-a),a<=-1023&&(!isFinite(i)||i<Math.pow(2,52))?a=-1022:(i-=Math.pow(2,52),a+=1023)):(a=2047,i=isNaN(t)?26985:0);for(var s=0;s<=5;++s,i/=256)e[r+s]=i&255;e[r+6]=(a&15)<<4|i&15,e[r+7]=a>>4|n}var R1=function(e){for(var t=[],r=10240,n=0;n<e[0].length;++n)if(e[0][n])for(var a=0,i=e[0][n].length;a<i;a+=r)t.push.apply(t,e[0][n].slice(a,a+r));return t},M1=Se?function(e){return e[0].length>0&&Buffer.isBuffer(e[0][0])?Buffer.concat(e[0].map(function(t){return Buffer.isBuffer(t)?t:wn(t)})):R1(e)}:R1,B1=function(e,t,r){for(var n=[],a=t;a<r;a+=2)n.push(String.fromCharCode(bo(e,a)));return n.join("").replace(hi,"")},jl=Se?function(e,t,r){return Buffer.isBuffer(e)?e.toString("utf16le",t,r).replace(hi,""):B1(e,t,r)}:B1,U1=function(e,t,r){for(var n=[],a=t;a<t+r;++a)n.push(("0"+e[a].toString(16)).slice(-2));return n.join("")},Sg=Se?function(e,t,r){return Buffer.isBuffer(e)?e.toString("hex",t,t+r):U1(e,t,r)}:U1,z1=function(e,t,r){for(var n=[],a=t;a<r;a++)n.push(String.fromCharCode(ui(e,a)));return n.join("")},Ei=Se?function(t,r,n){return Buffer.isBuffer(t)?t.toString("utf8",r,n):z1(t,r,n)}:z1,Cg=function(e,t){var r=wt(e,t);return r>0?Ei(e,t+4,t+4+r-1):""},Kf=Cg,Ag=function(e,t){var r=wt(e,t);return r>0?Ei(e,t+4,t+4+r-1):""},Qf=Ag,Fg=function(e,t){var r=2*wt(e,t);return r>0?Ei(e,t+4,t+4+r-1):""},Jf=Fg,Pg=function(t,r){var n=wt(t,r);return n>0?jl(t,r+4,r+4+n):""},Zf=Pg,Ig=function(e,t){var r=wt(e,t);return r>0?Ei(e,t+4,t+4+r):""},qf=Ig,Ng=function(e,t){return Mw(e,t)},Nl=Ng,eu=function(t){return Array.isArray(t)||typeof Uint8Array<"u"&&t instanceof Uint8Array};Se&&(Kf=function(t,r){if(!Buffer.isBuffer(t))return Cg(t,r);var n=t.readUInt32LE(r);return n>0?t.toString("utf8",r+4,r+4+n-1):""},Qf=function(t,r){if(!Buffer.isBuffer(t))return Ag(t,r);var n=t.readUInt32LE(r);return n>0?t.toString("utf8",r+4,r+4+n-1):""},Jf=function(t,r){if(!Buffer.isBuffer(t))return Fg(t,r);var n=2*t.readUInt32LE(r);return t.toString("utf16le",r+4,r+4+n-1)},Zf=function(t,r){if(!Buffer.isBuffer(t))return Pg(t,r);var n=t.readUInt32LE(r);return t.toString("utf16le",r+4,r+4+n)},qf=function(t,r){if(!Buffer.isBuffer(t))return Ig(t,r);var n=t.readUInt32LE(r);return t.toString("utf8",r+4,r+4+n)},Nl=function(t,r){return Buffer.isBuffer(t)?t.readDoubleLE(r):Ng(t,r)},eu=function(t){return Buffer.isBuffer(t)||Array.isArray(t)||typeof Uint8Array<"u"&&t instanceof Uint8Array});function Uw(){jl=function(e,t,r){return Oe.utils.decode(1200,e.slice(t,r)).replace(hi,"")},Ei=function(e,t,r){return Oe.utils.decode(65001,e.slice(t,r))},Kf=function(e,t){var r=wt(e,t);return r>0?Oe.utils.decode(vi,e.slice(t+4,t+4+r-1)):""},Qf=function(e,t){var r=wt(e,t);return r>0?Oe.utils.decode(va,e.slice(t+4,t+4+r-1)):""},Jf=function(e,t){var r=2*wt(e,t);return r>0?Oe.utils.decode(1200,e.slice(t+4,t+4+r-1)):""},Zf=function(e,t){var r=wt(e,t);return r>0?Oe.utils.decode(1200,e.slice(t+4,t+4+r)):""},qf=function(e,t){var r=wt(e,t);return r>0?Oe.utils.decode(65001,e.slice(t+4,t+4+r)):""}}typeof Oe<"u"&&Uw();var ui=function(e,t){return e[t]},bo=function(e,t){return e[t+1]*256+e[t]},zw=function(e,t){var r=e[t+1]*256+e[t];return r<32768?r:(65535-r+1)*-1},wt=function(e,t){return e[t+3]*(1<<24)+(e[t+2]<<16)+(e[t+1]<<8)+e[t]},ma=function(e,t){return e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]},Hw=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]};function So(e,t){var r="",n,a,i=[],o,s,l,f;switch(t){case"dbcs":if(f=this.l,Se&&Buffer.isBuffer(this))r=this.slice(this.l,this.l+2*e).toString("utf16le");else for(l=0;l<e;++l)r+=String.fromCharCode(bo(this,f)),f+=2;e*=2;break;case"utf8":r=Ei(this,this.l,this.l+e);break;case"utf16le":e*=2,r=jl(this,this.l,this.l+e);break;case"wstr":if(typeof Oe<"u")r=Oe.utils.decode(va,this.slice(this.l,this.l+2*e));else return So.call(this,e,"dbcs");e=2*e;break;case"lpstr-ansi":r=Kf(this,this.l),e=4+wt(this,this.l);break;case"lpstr-cp":r=Qf(this,this.l),e=4+wt(this,this.l);break;case"lpwstr":r=Jf(this,this.l),e=4+2*wt(this,this.l);break;case"lpp4":e=4+wt(this,this.l),r=Zf(this,this.l),e&2&&(e+=2);break;case"8lpp4":e=4+wt(this,this.l),r=qf(this,this.l),e&3&&(e+=4-(e&3));break;case"cstr":for(e=0,r="";(o=ui(this,this.l+e++))!==0;)i.push(wl(o));r=i.join("");break;case"_wstr":for(e=0,r="";(o=bo(this,this.l+e))!==0;)i.push(wl(o)),e+=2;e+=2,r=i.join("");break;case"dbcs-cont":for(r="",f=this.l,l=0;l<e;++l){if(this.lens&&this.lens.indexOf(f)!==-1)return o=ui(this,f),this.l=f+1,s=So.call(this,e-l,o?"dbcs-cont":"sbcs-cont"),i.join("")+s;i.push(wl(bo(this,f))),f+=2}r=i.join(""),e*=2;break;case"cpstr":if(typeof Oe<"u"){r=Oe.utils.decode(va,this.slice(this.l,this.l+e));break}case"sbcs-cont":for(r="",f=this.l,l=0;l!=e;++l){if(this.lens&&this.lens.indexOf(f)!==-1)return o=ui(this,f),this.l=f+1,s=So.call(this,e-l,o?"dbcs-cont":"sbcs-cont"),i.join("")+s;i.push(wl(ui(this,f))),f+=1}r=i.join("");break;default:switch(e){case 1:return n=ui(this,this.l),this.l++,n;case 2:return n=(t==="i"?zw:bo)(this,this.l),this.l+=2,n;case 4:case-4:return t==="i"||!(this[this.l+3]&128)?(n=(e>0?ma:Hw)(this,this.l),this.l+=4,n):(a=wt(this,this.l),this.l+=4,a);case 8:case-8:if(t==="f")return e==8?a=Nl(this,this.l):a=Nl([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0),this.l+=8,a;e=8;case 16:r=Sg(this,this.l,e);break}}return this.l+=e,r}var Ww=function(e,t,r){e[r]=t&255,e[r+1]=t>>>8&255,e[r+2]=t>>>16&255,e[r+3]=t>>>24&255},Gw=function(e,t,r){e[r]=t&255,e[r+1]=t>>8&255,e[r+2]=t>>16&255,e[r+3]=t>>24&255},Vw=function(e,t,r){e[r]=t&255,e[r+1]=t>>>8&255};function Xw(e,t,r){var n=0,a=0;if(r==="dbcs"){for(a=0;a!=t.length;++a)Vw(this,t.charCodeAt(a),this.l+2*a);n=2*t.length}else if(r==="sbcs"){if(typeof Oe<"u"&&vi==874)for(a=0;a!=t.length;++a){var i=Oe.utils.encode(vi,t.charAt(a));this[this.l+a]=i[0]}else for(t=t.replace(/[^\x00-\x7F]/g,"_"),a=0;a!=t.length;++a)this[this.l+a]=t.charCodeAt(a)&255;n=t.length}else if(r==="hex"){for(;a<e;++a)this[this.l++]=parseInt(t.slice(2*a,2*a+2),16)||0;return this}else if(r==="utf16le"){var o=Math.min(this.l+e,this.length);for(a=0;a<Math.min(t.length,e);++a){var s=t.charCodeAt(a);this[this.l++]=s&255,this[this.l++]=s>>8}for(;this.l<o;)this[this.l++]=0;return this}else switch(e){case 1:n=1,this[this.l]=t&255;break;case 2:n=2,this[this.l]=t&255,t>>>=8,this[this.l+1]=t&255;break;case 3:n=3,this[this.l]=t&255,t>>>=8,this[this.l+1]=t&255,t>>>=8,this[this.l+2]=t&255;break;case 4:n=4,Ww(this,t,this.l);break;case 8:if(n=8,r==="f"){Bw(this,t,this.l);break}case 16:break;case-4:n=4,Gw(this,t,this.l);break}return this.l+=n,this}function Lg(e,t){var r=Sg(this,this.l,e.length>>1);if(r!==e)throw new Error(t+"Expected "+e+" saw "+r);this.l+=e.length>>1}function dr(e,t){e.l=t,e.read_shift=So,e.chk=Lg,e.write_shift=Xw}function Zr(e,t){e.l+=t}function G(e){var t=ya(e);return dr(t,0),t}function er(){var e=[],t=Se?256:2048,r=function(f){var u=G(f);return dr(u,0),u},n=r(t),a=function(){n&&(n.length>n.l&&(n=n.slice(0,n.l),n.l=n.length),n.length>0&&e.push(n),n=null)},i=function(f){return n&&f<n.length-n.l?n:(a(),n=r(Math.max(f+1,t)))},o=function(){return a(),Ft(e)},s=function(f){a(),n=f,n.l==null&&(n.l=n.length),i(t)};return{next:i,push:s,end:o,_bufs:e}}function Q(e,t,r,n){var a=+t,i;if(!isNaN(a)){n||(n=Bb[a].p||(r||[]).length||0),i=1+(a>=128?1:0)+1,n>=128&&++i,n>=16384&&++i,n>=2097152&&++i;var o=e.next(i);a<=127?o.write_shift(1,a):(o.write_shift(1,(a&127)+128),o.write_shift(1,a>>7));for(var s=0;s!=4;++s)if(n>=128)o.write_shift(1,(n&127)+128),n>>=7;else{o.write_shift(1,n);break}n>0&&eu(r)&&e.push(r)}}function Co(e,t,r){var n=rr(e);if(t.s?(n.cRel&&(n.c+=t.s.c),n.rRel&&(n.r+=t.s.r)):(n.cRel&&(n.c+=t.c),n.rRel&&(n.r+=t.r)),!r||r.biff<12){for(;n.c>=256;)n.c-=256;for(;n.r>=65536;)n.r-=65536}return n}function H1(e,t,r){var n=rr(e);return n.s=Co(n.s,t.s,r),n.e=Co(n.e,t.s,r),n}function Ao(e,t){if(e.cRel&&e.c<0)for(e=rr(e);e.c<0;)e.c+=t>8?16384:256;if(e.rRel&&e.r<0)for(e=rr(e);e.r<0;)e.r+=t>8?1048576:t>5?65536:16384;var r=Ie(e);return!e.cRel&&e.cRel!=null&&(r=Yw(r)),!e.rRel&&e.rRel!=null&&(r=jw(r)),r}function Lf(e,t){return e.s.r==0&&!e.s.rRel&&e.e.r==(t.biff>=12?1048575:t.biff>=8?65536:16384)&&!e.e.rRel?(e.s.cRel?"":"$")+Bt(e.s.c)+":"+(e.e.cRel?"":"$")+Bt(e.e.c):e.s.c==0&&!e.s.cRel&&e.e.c==(t.biff>=12?16383:255)&&!e.e.cRel?(e.s.rRel?"":"$")+It(e.s.r)+":"+(e.e.rRel?"":"$")+It(e.e.r):Ao(e.s,t.biff)+":"+Ao(e.e,t.biff)}function tu(e){return parseInt($w(e),10)-1}function It(e){return""+(e+1)}function jw(e){return e.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")}function $w(e){return e.replace(/\$(\d+)$/,"$1")}function ru(e){for(var t=Kw(e),r=0,n=0;n!==t.length;++n)r=26*r+t.charCodeAt(n)-64;return r-1}function Bt(e){if(e<0)throw new Error("invalid column "+e);var t="";for(++e;e;e=Math.floor((e-1)/26))t=String.fromCharCode((e-1)%26+65)+t;return t}function Yw(e){return e.replace(/^([A-Z])/,"$$$1")}function Kw(e){return e.replace(/^\$([A-Z])/,"$1")}function Qw(e){return e.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function Et(e){for(var t=0,r=0,n=0;n<e.length;++n){var a=e.charCodeAt(n);a>=48&&a<=57?t=10*t+(a-48):a>=65&&a<=90&&(r=26*r+(a-64))}return{c:r-1,r:t-1}}function Ie(e){for(var t=e.c+1,r="";t;t=(t-1)/26|0)r=String.fromCharCode((t-1)%26+65)+r;return r+(e.r+1)}function pr(e){var t=e.indexOf(":");return t==-1?{s:Et(e),e:Et(e)}:{s:Et(e.slice(0,t)),e:Et(e.slice(t+1))}}function lt(e,t){return typeof t>"u"||typeof t=="number"?lt(e.s,e.e):(typeof e!="string"&&(e=Ie(e)),typeof t!="string"&&(t=Ie(t)),e==t?e:e+":"+t)}function Ge(e){var t={s:{c:0,r:0},e:{c:0,r:0}},r=0,n=0,a=0,i=e.length;for(r=0;n<i&&!((a=e.charCodeAt(n)-64)<1||a>26);++n)r=26*r+a;for(t.s.c=--r,r=0;n<i&&!((a=e.charCodeAt(n)-48)<0||a>9);++n)r=10*r+a;if(t.s.r=--r,n===i||a!=10)return t.e.c=t.s.c,t.e.r=t.s.r,t;for(++n,r=0;n!=i&&!((a=e.charCodeAt(n)-64)<1||a>26);++n)r=26*r+a;for(t.e.c=--r,r=0;n!=i&&!((a=e.charCodeAt(n)-48)<0||a>9);++n)r=10*r+a;return t.e.r=--r,t}function W1(e,t){var r=e.t=="d"&&t instanceof Date;if(e.z!=null)try{return e.w=$n(e.z,r?tr(t):t)}catch{}try{return e.w=$n((e.XF||{}).numFmtId||(r?14:0),r?tr(t):t)}catch{return""+t}}function vn(e,t,r){return e==null||e.t==null||e.t=="z"?"":e.w!==void 0?e.w:(e.t=="d"&&!e.z&&r&&r.dateNF&&(e.z=r.dateNF),e.t=="e"?Uo[e.v]||e.v:t==null?W1(e,e.v):W1(e,t))}function ka(e,t){var r=t&&t.sheet?t.sheet:"Sheet1",n={};return n[r]=e,{SheetNames:[r],Sheets:n}}function Dg(e,t,r){var n=r||{},a=e?Array.isArray(e):n.dense;Jr!=null&&a==null&&(a=Jr);var i=e||(a?[]:{}),o=0,s=0;if(i&&n.origin!=null){if(typeof n.origin=="number")o=n.origin;else{var l=typeof n.origin=="string"?Et(n.origin):n.origin;o=l.r,s=l.c}i["!ref"]||(i["!ref"]="A1:A1")}var f={s:{c:1e7,r:1e7},e:{c:0,r:0}};if(i["!ref"]){var u=Ge(i["!ref"]);f.s.c=u.s.c,f.s.r=u.s.r,f.e.c=Math.max(f.e.c,u.e.c),f.e.r=Math.max(f.e.r,u.e.r),o==-1&&(f.e.r=o=u.e.r+1)}for(var g=0;g!=t.length;++g)if(t[g]){if(!Array.isArray(t[g]))throw new Error("aoa_to_sheet expects an array of arrays");for(var d=0;d!=t[g].length;++d)if(!(typeof t[g][d]>"u")){var p={v:t[g][d]},x=o+g,h=s+d;if(f.s.r>x&&(f.s.r=x),f.s.c>h&&(f.s.c=h),f.e.r<x&&(f.e.r=x),f.e.c<h&&(f.e.c=h),t[g][d]&&typeof t[g][d]=="object"&&!Array.isArray(t[g][d])&&!(t[g][d]instanceof Date))p=t[g][d];else if(Array.isArray(p.v)&&(p.f=t[g][d][1],p.v=p.v[0]),p.v===null)if(p.f)p.t="n";else if(n.nullError)p.t="e",p.v=0;else if(n.sheetStubs)p.t="z";else continue;else typeof p.v=="number"?p.t="n":typeof p.v=="boolean"?p.t="b":p.v instanceof Date?(p.z=n.dateNF||qe[14],n.cellDates?(p.t="d",p.w=$n(p.z,tr(p.v))):(p.t="n",p.v=tr(p.v),p.w=$n(p.z,p.v))):p.t="s";if(a)i[x]||(i[x]=[]),i[x][h]&&i[x][h].z&&(p.z=i[x][h].z),i[x][h]=p;else{var v=Ie({c:h,r:x});i[v]&&i[v].z&&(p.z=i[v].z),i[v]=p}}}return f.s.c<1e7&&(i["!ref"]=lt(f)),i}function _i(e,t){return Dg(null,e,t)}function Jw(e){return e.read_shift(4,"i")}function zr(e,t){return t||(t=G(4)),t.write_shift(4,e),t}function Ut(e){var t=e.read_shift(4);return t===0?"":e.read_shift(t,"dbcs")}function _t(e,t){var r=!1;return t==null&&(r=!0,t=G(4+2*e.length)),t.write_shift(4,e.length),e.length>0&&t.write_shift(0,e,"dbcs"),r?t.slice(0,t.l):t}function Zw(e){return{ich:e.read_shift(2),ifnt:e.read_shift(2)}}function qw(e,t){return t||(t=G(4)),t.write_shift(2,e.ich||0),t.write_shift(2,e.ifnt||0),t}function nu(e,t){var r=e.l,n=e.read_shift(1),a=Ut(e),i=[],o={t:a,h:a};if(n&1){for(var s=e.read_shift(4),l=0;l!=s;++l)i.push(Zw(e));o.r=i}else o.r=[{ich:0,ifnt:0}];return e.l=r+t,o}function ey(e,t){var r=!1;return t==null&&(r=!0,t=G(15+4*e.t.length)),t.write_shift(1,0),_t(e.t,t),r?t.slice(0,t.l):t}var ty=nu;function ry(e,t){var r=!1;return t==null&&(r=!0,t=G(23+4*e.t.length)),t.write_shift(1,1),_t(e.t,t),t.write_shift(4,1),qw({ich:0,ifnt:0},t),r?t.slice(0,t.l):t}function Cr(e){var t=e.read_shift(4),r=e.read_shift(2);return r+=e.read_shift(1)<<16,e.l++,{c:t,iStyleRef:r}}function ba(e,t){return t==null&&(t=G(8)),t.write_shift(-4,e.c),t.write_shift(3,e.iStyleRef||e.s),t.write_shift(1,0),t}function Ta(e){var t=e.read_shift(2);return t+=e.read_shift(1)<<16,e.l++,{c:-1,iStyleRef:t}}function Sa(e,t){return t==null&&(t=G(4)),t.write_shift(3,e.iStyleRef||e.s),t.write_shift(1,0),t}var ny=Ut,Og=_t;function au(e){var t=e.read_shift(4);return t===0||t===4294967295?"":e.read_shift(t,"dbcs")}function Ll(e,t){var r=!1;return t==null&&(r=!0,t=G(127)),t.write_shift(4,e.length>0?e.length:4294967295),e.length>0&&t.write_shift(0,e,"dbcs"),r?t.slice(0,t.l):t}var ay=Ut,Hf=au,iu=Ll;function Rg(e){var t=e.slice(e.l,e.l+4),r=t[0]&1,n=t[0]&2;e.l+=4;var a=n===0?Nl([0,0,0,0,t[0]&252,t[1],t[2],t[3]],0):ma(t,0)>>2;return r?a/100:a}function Mg(e,t){t==null&&(t=G(4));var r=0,n=0,a=e*100;if(e==(e|0)&&e>=-(1<<29)&&e<1<<29?n=1:a==(a|0)&&a>=-(1<<29)&&a<1<<29&&(n=1,r=1),n)t.write_shift(-4,((r?a:e)<<2)+(r+2));else throw new Error("unsupported RkNumber "+e)}function Bg(e){var t={s:{},e:{}};return t.s.r=e.read_shift(4),t.e.r=e.read_shift(4),t.s.c=e.read_shift(4),t.e.c=e.read_shift(4),t}function iy(e,t){return t||(t=G(16)),t.write_shift(4,e.s.r),t.write_shift(4,e.e.r),t.write_shift(4,e.s.c),t.write_shift(4,e.e.c),t}var Ca=Bg,ki=iy;function bi(e){if(e.length-e.l<8)throw"XLS Xnum Buffer underflow";return e.read_shift(8,"f")}function Ea(e,t){return(t||G(8)).write_shift(8,e,"f")}function oy(e){var t={},r=e.read_shift(1),n=r>>>1,a=e.read_shift(1),i=e.read_shift(2,"i"),o=e.read_shift(1),s=e.read_shift(1),l=e.read_shift(1);switch(e.l++,n){case 0:t.auto=1;break;case 1:t.index=a;var f=gy[a];f&&(t.rgb=q1(f));break;case 2:t.rgb=q1([o,s,l]);break;case 3:t.theme=a;break}return i!=0&&(t.tint=i>0?i/32767:i/32768),t}function Dl(e,t){if(t||(t=G(8)),!e||e.auto)return t.write_shift(4,0),t.write_shift(4,0),t;e.index!=null?(t.write_shift(1,2),t.write_shift(1,e.index)):e.theme!=null?(t.write_shift(1,6),t.write_shift(1,e.theme)):(t.write_shift(1,5),t.write_shift(1,0));var r=e.tint||0;if(r>0?r*=32767:r<0&&(r*=32768),t.write_shift(2,r),!e.rgb||e.theme!=null)t.write_shift(2,0),t.write_shift(1,0),t.write_shift(1,0);else{var n=e.rgb||"FFFFFF";typeof n=="number"&&(n=("000000"+n.toString(16)).slice(-6)),t.write_shift(1,parseInt(n.slice(0,2),16)),t.write_shift(1,parseInt(n.slice(2,4),16)),t.write_shift(1,parseInt(n.slice(4,6),16)),t.write_shift(1,255)}return t}function sy(e){var t=e.read_shift(1);e.l++;var r={fBold:t&1,fItalic:t&2,fUnderline:t&4,fStrikeout:t&8,fOutline:t&16,fShadow:t&32,fCondense:t&64,fExtend:t&128};return r}function ly(e,t){t||(t=G(2));var r=(e.italic?2:0)|(e.strike?8:0)|(e.outline?16:0)|(e.shadow?32:0)|(e.condense?64:0)|(e.extend?128:0);return t.write_shift(1,r),t.write_shift(1,0),t}var Ug=2,ur=3,bl=11;var Ol=19;var Tl=64,cy=65,fy=71;var uy=4108,dy=4126,At=80;var G1={1:{n:"CodePage",t:Ug},2:{n:"Category",t:At},3:{n:"PresentationFormat",t:At},4:{n:"ByteCount",t:ur},5:{n:"LineCount",t:ur},6:{n:"ParagraphCount",t:ur},7:{n:"SlideCount",t:ur},8:{n:"NoteCount",t:ur},9:{n:"HiddenCount",t:ur},10:{n:"MultimediaClipCount",t:ur},11:{n:"ScaleCrop",t:bl},12:{n:"HeadingPairs",t:uy},13:{n:"TitlesOfParts",t:dy},14:{n:"Manager",t:At},15:{n:"Company",t:At},16:{n:"LinksUpToDate",t:bl},17:{n:"CharacterCount",t:ur},19:{n:"SharedDoc",t:bl},22:{n:"HyperlinksChanged",t:bl},23:{n:"AppVersion",t:ur,p:"version"},24:{n:"DigSig",t:cy},26:{n:"ContentType",t:At},27:{n:"ContentStatus",t:At},28:{n:"Language",t:At},29:{n:"Version",t:At},255:{},2147483648:{n:"Locale",t:Ol},2147483651:{n:"Behavior",t:Ol},1919054434:{}},V1={1:{n:"CodePage",t:Ug},2:{n:"Title",t:At},3:{n:"Subject",t:At},4:{n:"Author",t:At},5:{n:"Keywords",t:At},6:{n:"Comments",t:At},7:{n:"Template",t:At},8:{n:"LastAuthor",t:At},9:{n:"RevNumber",t:At},10:{n:"EditTime",t:Tl},11:{n:"LastPrinted",t:Tl},12:{n:"CreatedDate",t:Tl},13:{n:"ModifiedDate",t:Tl},14:{n:"PageCount",t:ur},15:{n:"WordCount",t:ur},16:{n:"CharCount",t:ur},17:{n:"Thumbnail",t:fy},18:{n:"Application",t:At},19:{n:"DocSecurity",t:ur},255:{},2147483648:{n:"Locale",t:Ol},2147483651:{n:"Behavior",t:Ol},1919054434:{}};function hy(e){return e.map(function(t){return[t>>16&255,t>>8&255,t&255]})}var py=hy([0,16777215,16711680,65280,255,16776960,16711935,65535,0,16777215,16711680,65280,255,16776960,16711935,65535,8388608,32768,128,8421376,8388736,32896,12632256,8421504,10066431,10040166,16777164,13434879,6684774,16744576,26316,13421823,128,16711935,16776960,65535,8388736,8388608,32896,255,52479,13434879,13434828,16777113,10079487,16751052,13408767,16764057,3368703,3394764,10079232,16763904,16750848,16737792,6710937,9868950,13158,3381606,13056,3355392,10040064,10040166,3355545,3355443,16777215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),gy=rr(py),Uo={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"};var xy={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.sheet.macroEnabled.main+xml":"workbooks","application/vnd.ms-excel.sheet.binary.macroEnabled.main":"workbooks","application/vnd.ms-excel.addin.macroEnabled.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":"sheets","application/vnd.ms-excel.worksheet":"sheets","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":"charts","application/vnd.ms-excel.chartsheet":"charts","application/vnd.ms-excel.macrosheet+xml":"macros","application/vnd.ms-excel.macrosheet":"macros","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":"dialogs","application/vnd.ms-excel.dialogsheet":"dialogs","application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":"strs","application/vnd.ms-excel.sharedStrings":"strs","application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":"styles","application/vnd.ms-excel.styles":"styles","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":"comments","application/vnd.ms-excel.comments":"comments","application/vnd.ms-excel.threadedcomments+xml":"threadedcomments","application/vnd.ms-excel.person+xml":"people","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"metadata","application/vnd.ms-excel.sheetMetadata":"metadata","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.ms-office.chartcolorstyle+xml":"TODO","application/vnd.ms-office.chartstyle+xml":"TODO","application/vnd.ms-office.chartex+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"links","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"links","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"TODO","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO","image/png":"TODO",sheet:"js"},Sl={workbooks:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",xlsm:"application/vnd.ms-excel.sheet.macroEnabled.main+xml",xlsb:"application/vnd.ms-excel.sheet.binary.macroEnabled.main",xlam:"application/vnd.ms-excel.addin.macroEnabled.main+xml",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"},strs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",xlsb:"application/vnd.ms-excel.sharedStrings"},comments:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",xlsb:"application/vnd.ms-excel.comments"},sheets:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",xlsb:"application/vnd.ms-excel.worksheet"},charts:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",xlsb:"application/vnd.ms-excel.chartsheet"},dialogs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",xlsb:"application/vnd.ms-excel.dialogsheet"},macros:{xlsx:"application/vnd.ms-excel.macrosheet+xml",xlsb:"application/vnd.ms-excel.macrosheet"},metadata:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",xlsb:"application/vnd.ms-excel.sheetMetadata"},styles:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",xlsb:"application/vnd.ms-excel.styles"}};function zg(){return{workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],threadedcomments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],metadata:[],people:[],TODO:[],xmlns:""}}function Hg(e,t){var r=Tw(xy),n=[],a;n[n.length]=ct,n[n.length]=ae("Types",null,{xmlns:yt.CT,"xmlns:xsd":yt.xsd,"xmlns:xsi":yt.xsi}),n=n.concat([["xml","application/xml"],["bin","application/vnd.ms-excel.sheet.binary.macroEnabled.main"],["vml","application/vnd.openxmlformats-officedocument.vmlDrawing"],["data","application/vnd.openxmlformats-officedocument.model+data"],["bmp","image/bmp"],["png","image/png"],["gif","image/gif"],["emf","image/x-emf"],["wmf","image/x-wmf"],["jpg","image/jpeg"],["jpeg","image/jpeg"],["tif","image/tiff"],["tiff","image/tiff"],["pdf","application/pdf"],["rels","application/vnd.openxmlformats-package.relationships+xml"]].map(function(l){return ae("Default",null,{Extension:l[0],ContentType:l[1]})}));var i=function(l){e[l]&&e[l].length>0&&(a=e[l][0],n[n.length]=ae("Override",null,{PartName:(a[0]=="/"?"":"/")+a,ContentType:Sl[l][t.bookType]||Sl[l].xlsx}))},o=function(l){(e[l]||[]).forEach(function(f){n[n.length]=ae("Override",null,{PartName:(f[0]=="/"?"":"/")+f,ContentType:Sl[l][t.bookType]||Sl[l].xlsx})})},s=function(l){(e[l]||[]).forEach(function(f){n[n.length]=ae("Override",null,{PartName:(f[0]=="/"?"":"/")+f,ContentType:r[l][0]})})};return i("workbooks"),o("sheets"),o("charts"),s("themes"),["strs","styles"].forEach(i),["coreprops","extprops","custprops"].forEach(s),s("vba"),s("comments"),s("threadedcomments"),s("drawings"),o("metadata"),s("people"),n.length>2&&(n[n.length]="</Types>",n[1]=n[1].replace("/>",">")),n.join("")}var be={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",SHEET:"http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",XPATH:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",XMISS:"http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",XLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",CXML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",CXMLP:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",CMNT:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",SST:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",STY:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",THEME:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",CHART:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",CHARTEX:"http://schemas.microsoft.com/office/2014/relationships/chartEx",CS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",WS:["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],DS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",MS:"http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",IMG:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",DRAW:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",XLMETA:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",TCMNT:"http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",PEOPLE:"http://schemas.microsoft.com/office/2017/10/relationships/person",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"};function Wg(e){var t=e.lastIndexOf("/");return e.slice(0,t+1)+"_rels/"+e.slice(t+1)+".rels"}function gi(e){var t=[ct,ae("Relationships",null,{xmlns:yt.RELS})];return Nt(e["!id"]).forEach(function(r){t[t.length]=ae("Relationship",null,e["!id"][r])}),t.length>2&&(t[t.length]="</Relationships>",t[1]=t[1].replace("/>",">")),t.join("")}function Fe(e,t,r,n,a,i){if(a||(a={}),e["!id"]||(e["!id"]={}),e["!idx"]||(e["!idx"]=1),t<0)for(t=e["!idx"];e["!id"]["rId"+t];++t);if(e["!idx"]=t+1,a.Id="rId"+t,a.Type=n,a.Target=r,i?a.TargetMode=i:[be.HLINK,be.XPATH,be.XMISS].indexOf(a.Type)>-1&&(a.TargetMode="External"),e["!id"][a.Id])throw new Error("Cannot rewrite rId "+t);return e["!id"][a.Id]=a,e[("/"+a.Target).replace("//","/")]=a,t}function my(e){var t=[ct];t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`),t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);for(var r=0;r<e.length;++r)t.push('  <manifest:file-entry manifest:full-path="'+e[r][0]+'" manifest:media-type="'+e[r][1]+`"/>
`);return t.push("</manifest:manifest>"),t.join("")}function X1(e,t,r){return['  <rdf:Description rdf:about="'+e+`">
`,'    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/'+(r||"odf")+"#"+t+`"/>
`,`  </rdf:Description>
`].join("")}function vy(e,t){return['  <rdf:Description rdf:about="'+e+`">
`,'    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="'+t+`"/>
`,`  </rdf:Description>
`].join("")}function wy(e){var t=[ct];t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);for(var r=0;r!=e.length;++r)t.push(X1(e[r][0],e[r][1])),t.push(vy("",e[r][0]));return t.push(X1("","Document","pkg")),t.push("</rdf:RDF>"),t.join("")}function Gg(){return'<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS '+Po.version+"</meta:generator></office:meta></office:document-meta>"}var wa=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]];function Df(e,t,r,n,a){a[e]!=null||t==null||t===""||(a[e]=t,t=Pe(t),n[n.length]=r?ae(e,t,r):Pt(e,t))}function Vg(e,t){var r=t||{},n=[ct,ae("cp:coreProperties",null,{"xmlns:cp":yt.CORE_PROPS,"xmlns:dc":yt.dc,"xmlns:dcterms":yt.dcterms,"xmlns:dcmitype":yt.dcmitype,"xmlns:xsi":yt.xsi})],a={};if(!e&&!r.Props)return n.join("");e&&(e.CreatedDate!=null&&Df("dcterms:created",typeof e.CreatedDate=="string"?e.CreatedDate:zf(e.CreatedDate,r.WTF),{"xsi:type":"dcterms:W3CDTF"},n,a),e.ModifiedDate!=null&&Df("dcterms:modified",typeof e.ModifiedDate=="string"?e.ModifiedDate:zf(e.ModifiedDate,r.WTF),{"xsi:type":"dcterms:W3CDTF"},n,a));for(var i=0;i!=wa.length;++i){var o=wa[i],s=r.Props&&r.Props[o[1]]!=null?r.Props[o[1]]:e?e[o[1]]:null;s===!0?s="1":s===!1?s="0":typeof s=="number"&&(s=String(s)),s!=null&&Df(o[0],s,null,n,a)}return n.length>2&&(n[n.length]="</cp:coreProperties>",n[1]=n[1].replace("/>",">")),n.join("")}var xi=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]],Xg=["Worksheets","SheetNames","NamedRanges","DefinedNames","Chartsheets","ChartNames"];function jg(e){var t=[],r=ae;return e||(e={}),e.Application="SheetJS",t[t.length]=ct,t[t.length]=ae("Properties",null,{xmlns:yt.EXT_PROPS,"xmlns:vt":yt.vt}),xi.forEach(function(n){if(e[n[1]]!==void 0){var a;switch(n[2]){case"string":a=Pe(String(e[n[1]]));break;case"bool":a=e[n[1]]?"true":"false";break}a!==void 0&&(t[t.length]=r(n[0],a))}}),t[t.length]=r("HeadingPairs",r("vt:vector",r("vt:variant","<vt:lpstr>Worksheets</vt:lpstr>")+r("vt:variant",r("vt:i4",String(e.Worksheets))),{size:2,baseType:"variant"})),t[t.length]=r("TitlesOfParts",r("vt:vector",e.SheetNames.map(function(n){return"<vt:lpstr>"+Pe(n)+"</vt:lpstr>"}).join(""),{size:e.Worksheets,baseType:"lpstr"})),t.length>2&&(t[t.length]="</Properties>",t[1]=t[1].replace("/>",">")),t.join("")}function $g(e){var t=[ct,ae("Properties",null,{xmlns:yt.CUST_PROPS,"xmlns:vt":yt.vt})];if(!e)return t.join("");var r=1;return Nt(e).forEach(function(a){++r,t[t.length]=ae("property",Rw(e[a],!0),{fmtid:"{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",pid:r,name:Pe(a)})}),t.length>2&&(t[t.length]="</Properties>",t[1]=t[1].replace("/>",">")),t.join("")}var j1={Title:"Title",Subject:"Subject",Author:"Author",Keywords:"Keywords",Comments:"Description",LastAuthor:"LastAuthor",RevNumber:"Revision",Application:"AppName",LastPrinted:"LastPrinted",CreatedDate:"Created",ModifiedDate:"LastSaved",Category:"Category",Manager:"Manager",Company:"Company",AppVersion:"Version",ContentStatus:"ContentStatus",Identifier:"Identifier",Language:"Language"};function yy(e,t){var r=[];return Nt(j1).map(function(n){for(var a=0;a<wa.length;++a)if(wa[a][1]==n)return wa[a];for(a=0;a<xi.length;++a)if(xi[a][1]==n)return xi[a];throw n}).forEach(function(n){if(e[n[1]]!=null){var a=t&&t.Props&&t.Props[n[1]]!=null?t.Props[n[1]]:e[n[1]];switch(n[2]){case"date":a=new Date(a).toISOString().replace(/\.\d*Z/,"Z");break}typeof a=="number"?a=String(a):a===!0||a===!1?a=a?"1":"0":a instanceof Date&&(a=new Date(a).toISOString().replace(/\.\d*Z/,"")),r.push(Pt(j1[n[1]]||n[1],a))}}),ae("DocumentProperties",r.join(""),{xmlns:hr.o})}function Ey(e,t){var r=["Worksheets","SheetNames"],n="CustomDocumentProperties",a=[];return e&&Nt(e).forEach(function(i){if(Object.prototype.hasOwnProperty.call(e,i)){for(var o=0;o<wa.length;++o)if(i==wa[o][1])return;for(o=0;o<xi.length;++o)if(i==xi[o][1])return;for(o=0;o<r.length;++o)if(i==r[o])return;var s=e[i],l="string";typeof s=="number"?(l="float",s=String(s)):s===!0||s===!1?(l="boolean",s=s?"1":"0"):s=String(s),a.push(ae(L1(i),s,{"dt:dt":l}))}}),t&&Nt(t).forEach(function(i){if(Object.prototype.hasOwnProperty.call(t,i)&&!(e&&Object.prototype.hasOwnProperty.call(e,i))){var o=t[i],s="string";typeof o=="number"?(s="float",o=String(o)):o===!0||o===!1?(s="boolean",o=o?"1":"0"):o instanceof Date?(s="dateTime.tz",o=o.toISOString()):o=String(o),a.push(ae(L1(i),o,{"dt:dt":s}))}}),"<"+n+' xmlns="'+hr.o+'">'+a.join("")+"</"+n+">"}function _y(e){var t=typeof e=="string"?new Date(Date.parse(e)):e,r=t.getTime()/1e3+11644473600,n=r%Math.pow(2,32),a=(r-n)/Math.pow(2,32);n*=1e7,a*=1e7;var i=n/Math.pow(2,32)|0;i>0&&(n=n%Math.pow(2,32),a+=i);var o=G(8);return o.write_shift(4,n),o.write_shift(4,a),o}function $1(e,t){var r=G(4),n=G(4);switch(r.write_shift(4,e==80?31:e),e){case 3:n.write_shift(-4,t);break;case 5:n=G(8),n.write_shift(8,t,"f");break;case 11:n.write_shift(4,t?1:0);break;case 64:n=_y(t);break;case 31:case 80:for(n=G(4+2*(t.length+1)+(t.length%2?0:2)),n.write_shift(4,t.length+1),n.write_shift(0,t,"dbcs");n.l!=n.length;)n.write_shift(1,0);break;default:throw new Error("TypedPropertyValue unrecognized type "+e+" "+t)}return Ft([r,n])}var Yg=["CodePage","Thumbnail","_PID_LINKBASE","_PID_HLINKS","SystemIdentifier","FMTID"];function ky(e){switch(typeof e){case"boolean":return 11;case"number":return(e|0)==e?3:5;case"string":return 31;case"object":if(e instanceof Date)return 64;break}return-1}function Y1(e,t,r){var n=G(8),a=[],i=[],o=8,s=0,l=G(8),f=G(8);if(l.write_shift(4,2),l.write_shift(4,1200),f.write_shift(4,1),i.push(l),a.push(f),o+=8+l.length,!t){f=G(8),f.write_shift(4,0),a.unshift(f);var u=[G(4)];for(u[0].write_shift(4,e.length),s=0;s<e.length;++s){var g=e[s][0];for(l=G(8+2*(g.length+1)+(g.length%2?0:2)),l.write_shift(4,s+2),l.write_shift(4,g.length+1),l.write_shift(0,g,"dbcs");l.l!=l.length;)l.write_shift(1,0);u.push(l)}l=Ft(u),i.unshift(l),o+=8+l.length}for(s=0;s<e.length;++s)if(!(t&&!t[e[s][0]])&&!(Yg.indexOf(e[s][0])>-1||Xg.indexOf(e[s][0])>-1)&&e[s][1]!=null){var d=e[s][1],p=0;if(t){p=+t[e[s][0]];var x=r[p];if(x.p=="version"&&typeof d=="string"){var h=d.split(".");d=(+h[0]<<16)+(+h[1]||0)}l=$1(x.t,d)}else{var v=ky(d);v==-1&&(v=31,d=String(d)),l=$1(v,d)}i.push(l),f=G(8),f.write_shift(4,t?p:2+s),a.push(f),o+=8+l.length}var w=8*(i.length+1);for(s=0;s<i.length;++s)a[s].write_shift(4,w),w+=i[s].length;return n.write_shift(4,o),n.write_shift(4,i.length),Ft([n].concat(a).concat(i))}function K1(e,t,r,n,a,i){var o=G(a?68:48),s=[o];o.write_shift(2,65534),o.write_shift(2,0),o.write_shift(4,842412599),o.write_shift(16,Le.utils.consts.HEADER_CLSID,"hex"),o.write_shift(4,a?2:1),o.write_shift(16,t,"hex"),o.write_shift(4,a?68:48);var l=Y1(e,r,n);if(s.push(l),a){var f=Y1(a,null,null);o.write_shift(16,i,"hex"),o.write_shift(4,68+l.length),s.push(f)}return Ft(s)}function by(e,t){t||(t=G(e));for(var r=0;r<e;++r)t.write_shift(1,0);return t}function Ty(e,t){return e.read_shift(t)===1}function jt(e,t){return t||(t=G(2)),t.write_shift(2,+!!e),t}function Kg(e){return e.read_shift(2,"u")}function Sr(e,t){return t||(t=G(2)),t.write_shift(2,e),t}function Qg(e,t,r){return r||(r=G(2)),r.write_shift(1,t=="e"?+e:+!!e),r.write_shift(1,t=="e"?1:0),r}function Jg(e,t,r){var n=e.read_shift(r&&r.biff>=12?2:1),a="sbcs-cont",i=va;if(r&&r.biff>=8&&(va=1200),!r||r.biff==8){var o=e.read_shift(1);o&&(a="dbcs-cont")}else r.biff==12&&(a="wstr");r.biff>=2&&r.biff<=5&&(a="cpstr");var s=n?e.read_shift(n,a):"";return va=i,s}function Sy(e){var t=e.t||"",r=1,n=G(3+(r>1?2:0));n.write_shift(2,t.length),n.write_shift(1,(r>1?8:0)|1),r>1&&n.write_shift(2,r);var a=G(2*t.length);a.write_shift(2*t.length,t,"utf16le");var i=[n,a];return Ft(i)}function Cy(e,t,r){var n;if(r){if(r.biff>=2&&r.biff<=5)return e.read_shift(t,"cpstr");if(r.biff>=12)return e.read_shift(t,"dbcs-cont")}var a=e.read_shift(1);return a===0?n=e.read_shift(t,"sbcs-cont"):n=e.read_shift(t,"dbcs-cont"),n}function Ay(e,t,r){var n=e.read_shift(r&&r.biff==2?1:2);return n===0?(e.l++,""):Cy(e,n,r)}function Fy(e,t,r){if(r.biff>5)return Ay(e,t,r);var n=e.read_shift(1);return n===0?(e.l++,""):e.read_shift(n,r.biff<=4||!e.lens?"cpstr":"sbcs-cont")}function Zg(e,t,r){return r||(r=G(3+2*e.length)),r.write_shift(2,e.length),r.write_shift(1,1),r.write_shift(31,e,"utf16le"),r}function Q1(e,t){t||(t=G(6+e.length*2)),t.write_shift(4,1+e.length);for(var r=0;r<e.length;++r)t.write_shift(2,e.charCodeAt(r));return t.write_shift(2,0),t}function Py(e){var t=G(512),r=0,n=e.Target;n.slice(0,7)=="file://"&&(n=n.slice(7));var a=n.indexOf("#"),i=a>-1?31:23;switch(n.charAt(0)){case"#":i=28;break;case".":i&=-3;break}t.write_shift(4,2),t.write_shift(4,i);var o=[8,6815827,6619237,4849780,83];for(r=0;r<o.length;++r)t.write_shift(4,o[r]);if(i==28)n=n.slice(1),Q1(n,t);else if(i&2){for(o="e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "),r=0;r<o.length;++r)t.write_shift(1,parseInt(o[r],16));var s=a>-1?n.slice(0,a):n;for(t.write_shift(4,2*(s.length+1)),r=0;r<s.length;++r)t.write_shift(2,s.charCodeAt(r));t.write_shift(2,0),i&8&&Q1(a>-1?n.slice(a+1):"",t)}else{for(o="03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "),r=0;r<o.length;++r)t.write_shift(1,parseInt(o[r],16));for(var l=0;n.slice(l*3,l*3+3)=="../"||n.slice(l*3,l*3+3)=="..\\";)++l;for(t.write_shift(2,l),t.write_shift(4,n.length-3*l+1),r=0;r<n.length-3*l;++r)t.write_shift(1,n.charCodeAt(r+3*l)&255);for(t.write_shift(1,0),t.write_shift(2,65535),t.write_shift(2,57005),r=0;r<6;++r)t.write_shift(4,0)}return t.slice(0,t.l)}function _a(e,t,r,n){return n||(n=G(6)),n.write_shift(2,e),n.write_shift(2,t),n.write_shift(2,r||0),n}function Iy(e,t,r){var n=r.biff>8?4:2,a=e.read_shift(n),i=e.read_shift(n,"i"),o=e.read_shift(n,"i");return[a,i,o]}function Ny(e){var t=e.read_shift(2),r=e.read_shift(2),n=e.read_shift(2),a=e.read_shift(2);return{s:{c:n,r:t},e:{c:a,r}}}function qg(e,t){return t||(t=G(8)),t.write_shift(2,e.s.r),t.write_shift(2,e.e.r),t.write_shift(2,e.s.c),t.write_shift(2,e.e.c),t}function ou(e,t,r){var n=1536,a=16;switch(r.bookType){case"biff8":break;case"biff5":n=1280,a=8;break;case"biff4":n=4,a=6;break;case"biff3":n=3,a=6;break;case"biff2":n=2,a=4;break;case"xla":break;default:throw new Error("unsupported BIFF version")}var i=G(a);return i.write_shift(2,n),i.write_shift(2,t),a>4&&i.write_shift(2,29282),a>6&&i.write_shift(2,1997),a>8&&(i.write_shift(2,49161),i.write_shift(2,1),i.write_shift(2,1798),i.write_shift(2,0)),i}function Ly(e,t){var r=!t||t.biff==8,n=G(r?112:54);for(n.write_shift(t.biff==8?2:1,7),r&&n.write_shift(1,0),n.write_shift(4,859007059),n.write_shift(4,5458548|(r?0:536870912));n.l<n.length;)n.write_shift(1,r?0:32);return n}function Dy(e,t){var r=!t||t.biff>=8?2:1,n=G(8+r*e.name.length);n.write_shift(4,e.pos),n.write_shift(1,e.hs||0),n.write_shift(1,e.dt),n.write_shift(1,e.name.length),t.biff>=8&&n.write_shift(1,1),n.write_shift(r*e.name.length,e.name,t.biff<8?"sbcs":"utf16le");var a=n.slice(0,n.l);return a.l=n.l,a}function Oy(e,t){var r=G(8);r.write_shift(4,e.Count),r.write_shift(4,e.Unique);for(var n=[],a=0;a<e.length;++a)n[a]=Sy(e[a],t);var i=Ft([r].concat(n));return i.parts=[r.length].concat(n.map(function(o){return o.length})),i}function Ry(){var e=G(18);return e.write_shift(2,0),e.write_shift(2,0),e.write_shift(2,29280),e.write_shift(2,17600),e.write_shift(2,56),e.write_shift(2,0),e.write_shift(2,0),e.write_shift(2,1),e.write_shift(2,500),e}function My(e){var t=G(18),r=1718;return e&&e.RTL&&(r|=64),t.write_shift(2,r),t.write_shift(4,0),t.write_shift(4,64),t.write_shift(4,0),t.write_shift(4,0),t}function By(e,t){var r=e.name||"Arial",n=t&&t.biff==5,a=n?15+r.length:16+2*r.length,i=G(a);return i.write_shift(2,(e.sz||12)*20),i.write_shift(4,0),i.write_shift(2,400),i.write_shift(4,0),i.write_shift(2,0),i.write_shift(1,r.length),n||i.write_shift(1,1),i.write_shift((n?1:2)*r.length,r,n?"sbcs":"utf16le"),i}function Uy(e,t,r,n){var a=G(10);return _a(e,t,n,a),a.write_shift(4,r),a}function zy(e,t,r,n,a){var i=!a||a.biff==8,o=G(8+ +i+(1+i)*r.length);return _a(e,t,n,o),o.write_shift(2,r.length),i&&o.write_shift(1,1),o.write_shift((1+i)*r.length,r,i?"utf16le":"sbcs"),o}function Hy(e,t,r,n){var a=r&&r.biff==5;n||(n=G(a?3+t.length:5+2*t.length)),n.write_shift(2,e),n.write_shift(a?1:2,t.length),a||n.write_shift(1,1),n.write_shift((a?1:2)*t.length,t,a?"sbcs":"utf16le");var i=n.length>n.l?n.slice(0,n.l):n;return i.l==null&&(i.l=i.length),i}function Wy(e,t){var r=t.biff==8||!t.biff?4:2,n=G(2*r+6);return n.write_shift(r,e.s.r),n.write_shift(r,e.e.r+1),n.write_shift(2,e.s.c),n.write_shift(2,e.e.c+1),n.write_shift(2,0),n}function J1(e,t,r,n){var a=r&&r.biff==5;n||(n=G(a?16:20)),n.write_shift(2,0),e.style?(n.write_shift(2,e.numFmtId||0),n.write_shift(2,65524)):(n.write_shift(2,e.numFmtId||0),n.write_shift(2,t<<4));var i=0;return e.numFmtId>0&&a&&(i|=1024),n.write_shift(4,i),n.write_shift(4,0),a||n.write_shift(4,0),n.write_shift(2,0),n}function Gy(e){var t=G(8);return t.write_shift(4,0),t.write_shift(2,e[0]?e[0]+1:0),t.write_shift(2,e[1]?e[1]+1:0),t}function Vy(e,t,r,n,a,i){var o=G(8);return _a(e,t,n,o),Qg(r,i,o),o}function Xy(e,t,r,n){var a=G(14);return _a(e,t,n,a),Ea(r,a),a}function jy(e,t,r){if(r.biff<8)return $y(e,t,r);for(var n=[],a=e.l+t,i=e.read_shift(r.biff>8?4:2);i--!==0;)n.push(Iy(e,r.biff>8?12:6,r));if(e.l!=a)throw new Error("Bad ExternSheet: "+e.l+" != "+a);return n}function $y(e,t,r){e[e.l+1]==3&&e[e.l]++;var n=Jg(e,t,r);return n.charCodeAt(0)==3?n.slice(1):n}function Yy(e){var t=G(2+e.length*8);t.write_shift(2,e.length);for(var r=0;r<e.length;++r)qg(e[r],t);return t}function Ky(e){var t=G(24),r=Et(e[0]);t.write_shift(2,r.r),t.write_shift(2,r.r),t.write_shift(2,r.c),t.write_shift(2,r.c);for(var n="d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "),a=0;a<16;++a)t.write_shift(1,parseInt(n[a],16));return Ft([t,Py(e[1])])}function Qy(e){var t=e[1].Tooltip,r=G(10+2*(t.length+1));r.write_shift(2,2048);var n=Et(e[0]);r.write_shift(2,n.r),r.write_shift(2,n.r),r.write_shift(2,n.c),r.write_shift(2,n.c);for(var a=0;a<t.length;++a)r.write_shift(2,t.charCodeAt(a));return r.write_shift(2,0),r}function Jy(e){return e||(e=G(4)),e.write_shift(2,1),e.write_shift(2,1),e}function Zy(e,t,r){if(!r.cellStyles)return Zr(e,t);var n=r&&r.biff>=12?4:2,a=e.read_shift(n),i=e.read_shift(n),o=e.read_shift(n),s=e.read_shift(n),l=e.read_shift(2);n==2&&(e.l+=2);var f={s:a,e:i,w:o,ixfe:s,flags:l};return(r.biff>=5||!r.biff)&&(f.level=l>>8&7),f}function qy(e,t){var r=G(12);r.write_shift(2,t),r.write_shift(2,t),r.write_shift(2,e.width*256),r.write_shift(2,0);var n=0;return e.hidden&&(n|=1),r.write_shift(1,n),n=e.level||0,r.write_shift(1,n),r.write_shift(2,0),r}function e5(e){for(var t=G(2*e),r=0;r<e;++r)t.write_shift(2,r+1);return t}function t5(e,t,r){var n=G(15);return Ho(n,e,t),n.write_shift(8,r,"f"),n}function r5(e,t,r){var n=G(9);return Ho(n,e,t),n.write_shift(2,r),n}var n5=function(){var e={1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127,8:865,9:437,10:850,11:437,13:437,14:850,15:437,16:850,17:437,18:850,19:932,20:850,21:437,22:850,23:865,24:437,25:437,26:850,27:437,28:863,29:850,31:852,34:852,35:852,36:860,37:850,38:866,55:850,64:852,77:936,78:949,79:950,80:874,87:1252,88:1252,89:1252,108:863,134:737,135:852,136:857,204:1257,255:16969},t=Xf({1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127});function r(s,l){var f=[],u=ya(1);switch(l.type){case"base64":u=Br(mn(s));break;case"binary":u=Br(s);break;case"buffer":case"array":u=s;break}dr(u,0);var g=u.read_shift(1),d=!!(g&136),p=!1,x=!1;switch(g){case 2:break;case 3:break;case 48:p=!0,d=!0;break;case 49:p=!0,d=!0;break;case 131:break;case 139:break;case 140:x=!0;break;case 245:break;default:throw new Error("DBF Unsupported Version: "+g.toString(16))}var h=0,v=521;g==2&&(h=u.read_shift(2)),u.l+=3,g!=2&&(h=u.read_shift(4)),h>1048576&&(h=1e6),g!=2&&(v=u.read_shift(2));var w=u.read_shift(2),m=l.codepage||1252;g!=2&&(u.l+=16,u.read_shift(1),u[u.l]!==0&&(m=e[u[u.l]]),u.l+=1,u.l+=2),x&&(u.l+=36);for(var E=[],F={},P=Math.min(u.length,g==2?521:v-10-(p?264:0)),D=x?32:11;u.l<P&&u[u.l]!=13;)switch(F={},F.name=Oe.utils.decode(m,u.slice(u.l,u.l+D)).replace(/[\u0000\r\n].*$/g,""),u.l+=D,F.type=String.fromCharCode(u.read_shift(1)),g!=2&&!x&&(F.offset=u.read_shift(4)),F.len=u.read_shift(1),g==2&&(F.offset=u.read_shift(2)),F.dec=u.read_shift(1),F.name.length&&E.push(F),g!=2&&(u.l+=x?13:14),F.type){case"B":(!p||F.len!=8)&&l.WTF&&console.log("Skipping "+F.name+":"+F.type);break;case"G":case"P":l.WTF&&console.log("Skipping "+F.name+":"+F.type);break;case"+":case"0":case"@":case"C":case"D":case"F":case"I":case"L":case"M":case"N":case"O":case"T":case"Y":break;default:throw new Error("Unknown Field Type: "+F.type)}if(u[u.l]!==13&&(u.l=v-1),u.read_shift(1)!==13)throw new Error("DBF Terminator not found "+u.l+" "+u[u.l]);u.l=v;var k=0,L=0;for(f[0]=[],L=0;L!=E.length;++L)f[0][L]=E[L].name;for(;h-- >0;){if(u[u.l]===42){u.l+=w;continue}for(++u.l,f[++k]=[],L=0,L=0;L!=E.length;++L){var M=u.slice(u.l,u.l+E[L].len);u.l+=E[L].len,dr(M,0);var R=Oe.utils.decode(m,M);switch(E[L].type){case"C":R.trim().length&&(f[k][L]=R.replace(/\s+$/,""));break;case"D":R.length===8?f[k][L]=new Date(+R.slice(0,4),+R.slice(4,6)-1,+R.slice(6,8)):f[k][L]=R;break;case"F":f[k][L]=parseFloat(R.trim());break;case"+":case"I":f[k][L]=x?M.read_shift(-4,"i")^2147483648:M.read_shift(4,"i");break;case"L":switch(R.trim().toUpperCase()){case"Y":case"T":f[k][L]=!0;break;case"N":case"F":f[k][L]=!1;break;case"":case"?":break;default:throw new Error("DBF Unrecognized L:|"+R+"|")}break;case"M":if(!d)throw new Error("DBF Unexpected MEMO for type "+g.toString(16));f[k][L]="##MEMO##"+(x?parseInt(R.trim(),10):M.read_shift(4));break;case"N":R=R.replace(/\u0000/g,"").trim(),R&&R!="."&&(f[k][L]=+R||0);break;case"@":f[k][L]=new Date(M.read_shift(-8,"f")-621356832e5);break;case"T":f[k][L]=new Date((M.read_shift(4)-2440588)*864e5+M.read_shift(4));break;case"Y":f[k][L]=M.read_shift(4,"i")/1e4+M.read_shift(4,"i")/1e4*Math.pow(2,32);break;case"O":f[k][L]=-M.read_shift(-8,"f");break;case"B":if(p&&E[L].len==8){f[k][L]=M.read_shift(8,"f");break}case"G":case"P":M.l+=E[L].len;break;case"0":if(E[L].name==="_NullFlags")break;default:throw new Error("DBF Unsupported data type "+E[L].type)}}}if(g!=2&&u.l<u.length&&u[u.l++]!=26)throw new Error("DBF EOF Marker missing "+(u.l-1)+" of "+u.length+" "+u[u.l-1].toString(16));return l&&l.sheetRows&&(f=f.slice(0,l.sheetRows)),l.DBF=E,f}function n(s,l){var f=l||{};f.dateNF||(f.dateNF="yyyymmdd");var u=_i(r(s,f),f);return u["!cols"]=f.DBF.map(function(g){return{wch:g.len,DBF:g}}),delete f.DBF,u}function a(s,l){try{return ka(n(s,l),l)}catch(f){if(l&&l.WTF)throw f}return{SheetNames:[],Sheets:{}}}var i={B:8,C:250,L:1,D:8,"?":0,"":0};function o(s,l){var f=l||{};if(+f.codepage>=0&&Io(+f.codepage),f.type=="string")throw new Error("Cannot write DBF to JS string");var u=er(),g=zl(s,{header:1,raw:!0,cellDates:!0}),d=g[0],p=g.slice(1),x=s["!cols"]||[],h=0,v=0,w=0,m=1;for(h=0;h<d.length;++h){if(((x[h]||{}).DBF||{}).name){d[h]=x[h].DBF.name,++w;continue}if(d[h]!=null){if(++w,typeof d[h]=="number"&&(d[h]=d[h].toString(10)),typeof d[h]!="string")throw new Error("DBF Invalid column name "+d[h]+" |"+typeof d[h]+"|");if(d.indexOf(d[h])!==h){for(v=0;v<1024;++v)if(d.indexOf(d[h]+"_"+v)==-1){d[h]+="_"+v;break}}}}var E=Ge(s["!ref"]),F=[],P=[],D=[];for(h=0;h<=E.e.c-E.s.c;++h){var k="",L="",M=0,R=[];for(v=0;v<p.length;++v)p[v][h]!=null&&R.push(p[v][h]);if(R.length==0||d[h]==null){F[h]="?";continue}for(v=0;v<R.length;++v){switch(typeof R[v]){case"number":L="B";break;case"string":L="C";break;case"boolean":L="L";break;case"object":L=R[v]instanceof Date?"D":"C";break;default:L="C"}M=Math.max(M,String(R[v]).length),k=k&&k!=L?"C":L}M>250&&(M=250),L=((x[h]||{}).DBF||{}).type,L=="C"&&x[h].DBF.len>M&&(M=x[h].DBF.len),k=="B"&&L=="N"&&(k="N",D[h]=x[h].DBF.dec,M=x[h].DBF.len),P[h]=k=="C"||L=="N"?M:i[k]||0,m+=P[h],F[h]=k}var X=u.next(32);for(X.write_shift(4,318902576),X.write_shift(4,p.length),X.write_shift(2,296+32*w),X.write_shift(2,m),h=0;h<4;++h)X.write_shift(4,0);for(X.write_shift(4,0|(+t[vi]||3)<<8),h=0,v=0;h<d.length;++h)if(d[h]!=null){var J=u.next(32),ce=(d[h].slice(-10)+"\0\0\0\0\0\0\0\0\0\0\0").slice(0,11);J.write_shift(1,ce,"sbcs"),J.write_shift(1,F[h]=="?"?"C":F[h],"sbcs"),J.write_shift(4,v),J.write_shift(1,P[h]||i[F[h]]||0),J.write_shift(1,D[h]||0),J.write_shift(1,2),J.write_shift(4,0),J.write_shift(1,0),J.write_shift(4,0),J.write_shift(4,0),v+=P[h]||i[F[h]]||0}var ye=u.next(264);for(ye.write_shift(4,13),h=0;h<65;++h)ye.write_shift(4,0);for(h=0;h<p.length;++h){var he=u.next(m);for(he.write_shift(1,0),v=0;v<d.length;++v)if(d[v]!=null)switch(F[v]){case"L":he.write_shift(1,p[h][v]==null?63:p[h][v]?84:70);break;case"B":he.write_shift(8,p[h][v]||0,"f");break;case"N":var Ue="0";for(typeof p[h][v]=="number"&&(Ue=p[h][v].toFixed(D[v]||0)),w=0;w<P[v]-Ue.length;++w)he.write_shift(1,32);he.write_shift(1,Ue,"sbcs");break;case"D":p[h][v]?(he.write_shift(4,("0000"+p[h][v].getFullYear()).slice(-4),"sbcs"),he.write_shift(2,("00"+(p[h][v].getMonth()+1)).slice(-2),"sbcs"),he.write_shift(2,("00"+p[h][v].getDate()).slice(-2),"sbcs")):he.write_shift(8,"00000000","sbcs");break;case"C":var Ve=String(p[h][v]!=null?p[h][v]:"").slice(0,P[v]);for(he.write_shift(1,Ve,"sbcs"),w=0;w<P[v]-Ve.length;++w)he.write_shift(1,32);break}}return u.next(1).write_shift(1,26),u.end()}return{to_workbook:a,to_sheet:n,from_sheet:o}}(),a5=function(){var e={AA:"\xC0",BA:"\xC1",CA:"\xC2",DA:195,HA:"\xC4",JA:197,AE:"\xC8",BE:"\xC9",CE:"\xCA",HE:"\xCB",AI:"\xCC",BI:"\xCD",CI:"\xCE",HI:"\xCF",AO:"\xD2",BO:"\xD3",CO:"\xD4",DO:213,HO:"\xD6",AU:"\xD9",BU:"\xDA",CU:"\xDB",HU:"\xDC",Aa:"\xE0",Ba:"\xE1",Ca:"\xE2",Da:227,Ha:"\xE4",Ja:229,Ae:"\xE8",Be:"\xE9",Ce:"\xEA",He:"\xEB",Ai:"\xEC",Bi:"\xED",Ci:"\xEE",Hi:"\xEF",Ao:"\xF2",Bo:"\xF3",Co:"\xF4",Do:245,Ho:"\xF6",Au:"\xF9",Bu:"\xFA",Cu:"\xFB",Hu:"\xFC",KC:"\xC7",Kc:"\xE7",q:"\xE6",z:"\u0153",a:"\xC6",j:"\u0152",DN:209,Dn:241,Hy:255,S:169,c:170,R:174,"B ":180,0:176,1:177,2:178,3:179,5:181,6:182,7:183,Q:185,k:186,b:208,i:216,l:222,s:240,y:248,"!":161,'"':162,"#":163,"(":164,"%":165,"'":167,"H ":168,"+":171,";":187,"<":188,"=":189,">":190,"?":191,"{":223},t=new RegExp("\x1BN("+Nt(e).join("|").replace(/\|\|\|/,"|\\||").replace(/([?()+])/g,"\\$1")+"|\\|)","gm"),r=function(d,p){var x=e[p];return typeof x=="number"?E1(x):x},n=function(d,p,x){var h=p.charCodeAt(0)-32<<4|x.charCodeAt(0)-48;return h==59?d:E1(h)};e["|"]=254;function a(d,p){switch(p.type){case"base64":return i(mn(d),p);case"binary":return i(d,p);case"buffer":return i(Se&&Buffer.isBuffer(d)?d.toString("binary"):Mo(d),p);case"array":return i(Xl(d),p)}throw new Error("Unrecognized type "+p.type)}function i(d,p){var x=d.split(/[\n\r]+/),h=-1,v=-1,w=0,m=0,E=[],F=[],P=null,D={},k=[],L=[],M=[],R=0,X;for(+p.codepage>=0&&Io(+p.codepage);w!==x.length;++w){R=0;var J=x[w].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g,n).replace(t,r),ce=J.replace(/;;/g,"\0").split(";").map(function(I){return I.replace(/\u0000/g,";")}),ye=ce[0],he;if(J.length>0)switch(ye){case"ID":break;case"E":break;case"B":break;case"O":break;case"W":break;case"P":ce[1].charAt(0)=="P"&&F.push(J.slice(3).replace(/;;/g,";"));break;case"C":var Ue=!1,Ve=!1,et=!1,tt=!1,rt=-1,gt=-1;for(m=1;m<ce.length;++m)switch(ce[m].charAt(0)){case"A":break;case"X":v=parseInt(ce[m].slice(1))-1,Ve=!0;break;case"Y":for(h=parseInt(ce[m].slice(1))-1,Ve||(v=0),X=E.length;X<=h;++X)E[X]=[];break;case"K":he=ce[m].slice(1),he.charAt(0)==='"'?he=he.slice(1,he.length-1):he==="TRUE"?he=!0:he==="FALSE"?he=!1:isNaN(gn(he))?isNaN(Lo(he).getDate())||(he=$t(he)):(he=gn(he),P!==null&&vg(P)&&(he=_g(he))),typeof Oe<"u"&&typeof he=="string"&&(p||{}).type!="string"&&(p||{}).codepage&&(he=Oe.utils.decode(p.codepage,he)),Ue=!0;break;case"E":tt=!0;var A=rE(ce[m].slice(1),{r:h,c:v});E[h][v]=[E[h][v],A];break;case"S":et=!0,E[h][v]=[E[h][v],"S5S"];break;case"G":break;case"R":rt=parseInt(ce[m].slice(1))-1;break;case"C":gt=parseInt(ce[m].slice(1))-1;break;default:if(p&&p.WTF)throw new Error("SYLK bad record "+J)}if(Ue&&(E[h][v]&&E[h][v].length==2?E[h][v][0]=he:E[h][v]=he,P=null),et){if(tt)throw new Error("SYLK shared formula cannot have own formula");var O=rt>-1&&E[rt][gt];if(!O||!O[1])throw new Error("SYLK shared formula cannot find base");E[h][v][1]=nE(O[1],{r:h-rt,c:v-gt})}break;case"F":var N=0;for(m=1;m<ce.length;++m)switch(ce[m].charAt(0)){case"X":v=parseInt(ce[m].slice(1))-1,++N;break;case"Y":for(h=parseInt(ce[m].slice(1))-1,X=E.length;X<=h;++X)E[X]=[];break;case"M":R=parseInt(ce[m].slice(1))/20;break;case"F":break;case"G":break;case"P":P=F[parseInt(ce[m].slice(1))];break;case"S":break;case"D":break;case"N":break;case"W":for(M=ce[m].slice(1).split(" "),X=parseInt(M[0],10);X<=parseInt(M[1],10);++X)R=parseInt(M[2],10),L[X-1]=R===0?{hidden:!0}:{wch:R},su(L[X-1]);break;case"C":v=parseInt(ce[m].slice(1))-1,L[v]||(L[v]={});break;case"R":h=parseInt(ce[m].slice(1))-1,k[h]||(k[h]={}),R>0?(k[h].hpt=R,k[h].hpx=ax(R)):R===0&&(k[h].hidden=!0);break;default:if(p&&p.WTF)throw new Error("SYLK bad record "+J)}N<1&&(P=null);break;default:if(p&&p.WTF)throw new Error("SYLK bad record "+J)}}return k.length>0&&(D["!rows"]=k),L.length>0&&(D["!cols"]=L),p&&p.sheetRows&&(E=E.slice(0,p.sheetRows)),[E,D]}function o(d,p){var x=a(d,p),h=x[0],v=x[1],w=_i(h,p);return Nt(v).forEach(function(m){w[m]=v[m]}),w}function s(d,p){return ka(o(d,p),p)}function l(d,p,x,h){var v="C;Y"+(x+1)+";X"+(h+1)+";K";switch(d.t){case"n":v+=d.v||0,d.f&&!d.F&&(v+=";E"+cu(d.f,{r:x,c:h}));break;case"b":v+=d.v?"TRUE":"FALSE";break;case"e":v+=d.w||d.v;break;case"d":v+='"'+(d.w||d.v)+'"';break;case"s":v+='"'+d.v.replace(/"/g,"").replace(/;/g,";;")+'"';break}return v}function f(d,p){p.forEach(function(x,h){var v="F;W"+(h+1)+" "+(h+1)+" ";x.hidden?v+="0":(typeof x.width=="number"&&!x.wpx&&(x.wpx=Rl(x.width)),typeof x.wpx=="number"&&!x.wch&&(x.wch=Ml(x.wpx)),typeof x.wch=="number"&&(v+=Math.round(x.wch))),v.charAt(v.length-1)!=" "&&d.push(v)})}function u(d,p){p.forEach(function(x,h){var v="F;";x.hidden?v+="M0;":x.hpt?v+="M"+20*x.hpt+";":x.hpx&&(v+="M"+20*Bl(x.hpx)+";"),v.length>2&&d.push(v+"R"+(h+1))})}function g(d,p){var x=["ID;PWXL;N;E"],h=[],v=Ge(d["!ref"]),w,m=Array.isArray(d),E=`\r
`;x.push("P;PGeneral"),x.push("F;P0;DG0G8;M255"),d["!cols"]&&f(x,d["!cols"]),d["!rows"]&&u(x,d["!rows"]),x.push("B;Y"+(v.e.r-v.s.r+1)+";X"+(v.e.c-v.s.c+1)+";D"+[v.s.c,v.s.r,v.e.c,v.e.r].join(" "));for(var F=v.s.r;F<=v.e.r;++F)for(var P=v.s.c;P<=v.e.c;++P){var D=Ie({r:F,c:P});w=m?(d[F]||[])[P]:d[D],!(!w||w.v==null&&(!w.f||w.F))&&h.push(l(w,d,F,P,p))}return x.join(E)+E+h.join(E)+E+"E"+E}return{to_workbook:s,to_sheet:o,from_sheet:g}}(),i5=function(){function e(i,o){switch(o.type){case"base64":return t(mn(i),o);case"binary":return t(i,o);case"buffer":return t(Se&&Buffer.isBuffer(i)?i.toString("binary"):Mo(i),o);case"array":return t(Xl(i),o)}throw new Error("Unrecognized type "+o.type)}function t(i,o){for(var s=i.split(`
`),l=-1,f=-1,u=0,g=[];u!==s.length;++u){if(s[u].trim()==="BOT"){g[++l]=[],f=0;continue}if(!(l<0)){var d=s[u].trim().split(","),p=d[0],x=d[1];++u;for(var h=s[u]||"";(h.match(/["]/g)||[]).length&1&&u<s.length-1;)h+=`
`+s[++u];switch(h=h.trim(),+p){case-1:if(h==="BOT"){g[++l]=[],f=0;continue}else if(h!=="EOD")throw new Error("Unrecognized DIF special command "+h);break;case 0:h==="TRUE"?g[l][f]=!0:h==="FALSE"?g[l][f]=!1:isNaN(gn(x))?isNaN(Lo(x).getDate())?g[l][f]=x:g[l][f]=$t(x):g[l][f]=gn(x),++f;break;case 1:h=h.slice(1,h.length-1),h=h.replace(/""/g,'"'),_o&&h&&h.match(/^=".*"$/)&&(h=h.slice(2,-1)),g[l][f++]=h!==""?h:null;break}if(h==="EOD")break}}return o&&o.sheetRows&&(g=g.slice(0,o.sheetRows)),g}function r(i,o){return _i(e(i,o),o)}function n(i,o){return ka(r(i,o),o)}var a=function(){var i=function(l,f,u,g,d){l.push(f),l.push(u+","+g),l.push('"'+d.replace(/"/g,'""')+'"')},o=function(l,f,u,g){l.push(f+","+u),l.push(f==1?'"'+g.replace(/"/g,'""')+'"':g)};return function(l){var f=[],u=Ge(l["!ref"]),g,d=Array.isArray(l);i(f,"TABLE",0,1,"sheetjs"),i(f,"VECTORS",0,u.e.r-u.s.r+1,""),i(f,"TUPLES",0,u.e.c-u.s.c+1,""),i(f,"DATA",0,0,"");for(var p=u.s.r;p<=u.e.r;++p){o(f,-1,0,"BOT");for(var x=u.s.c;x<=u.e.c;++x){var h=Ie({r:p,c:x});if(g=d?(l[p]||[])[x]:l[h],!g){o(f,1,0,"");continue}switch(g.t){case"n":var v=_o?g.w:g.v;!v&&g.v!=null&&(v=g.v),v==null?_o&&g.f&&!g.F?o(f,1,0,"="+g.f):o(f,1,0,""):o(f,0,v,"V");break;case"b":o(f,0,g.v?1:0,g.v?"TRUE":"FALSE");break;case"s":o(f,1,0,!_o||isNaN(g.v)?g.v:'="'+g.v+'"');break;case"d":g.w||(g.w=$n(g.z||qe[14],tr($t(g.v)))),_o?o(f,0,g.w,"V"):o(f,1,0,g.w);break;default:o(f,1,0,"")}}}o(f,-1,0,"EOD");var w=`\r
`,m=f.join(w);return m}}();return{to_workbook:n,to_sheet:r,from_sheet:a}}(),ex=function(){function e(g){return g.replace(/\\b/g,"\\").replace(/\\c/g,":").replace(/\\n/g,`
`)}function t(g){return g.replace(/\\/g,"\\b").replace(/:/g,"\\c").replace(/\n/g,"\\n")}function r(g,d){for(var p=g.split(`
`),x=-1,h=-1,v=0,w=[];v!==p.length;++v){var m=p[v].trim().split(":");if(m[0]==="cell"){var E=Et(m[1]);if(w.length<=E.r)for(x=w.length;x<=E.r;++x)w[x]||(w[x]=[]);switch(x=E.r,h=E.c,m[2]){case"t":w[x][h]=e(m[3]);break;case"v":w[x][h]=+m[3];break;case"vtf":var F=m[m.length-1];case"vtc":switch(m[3]){case"nl":w[x][h]=!!+m[4];break;default:w[x][h]=+m[4];break}m[2]=="vtf"&&(w[x][h]=[w[x][h],F])}}}return d&&d.sheetRows&&(w=w.slice(0,d.sheetRows)),w}function n(g,d){return _i(r(g,d),d)}function a(g,d){return ka(n(g,d),d)}var i=["socialcalc:version:1.5","MIME-Version: 1.0","Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`),o=["--SocialCalcSpreadsheetControlSave","Content-type: text/plain; charset=UTF-8"].join(`
`)+`
`,s=["# SocialCalc Spreadsheet Control Save","part:sheet"].join(`
`),l="--SocialCalcSpreadsheetControlSave--";function f(g){if(!g||!g["!ref"])return"";for(var d=[],p=[],x,h="",v=pr(g["!ref"]),w=Array.isArray(g),m=v.s.r;m<=v.e.r;++m)for(var E=v.s.c;E<=v.e.c;++E)if(h=Ie({r:m,c:E}),x=w?(g[m]||[])[E]:g[h],!(!x||x.v==null||x.t==="z")){switch(p=["cell",h,"t"],x.t){case"s":case"str":p.push(t(x.v));break;case"n":x.f?(p[2]="vtf",p[3]="n",p[4]=x.v,p[5]=t(x.f)):(p[2]="v",p[3]=x.v);break;case"b":p[2]="vt"+(x.f?"f":"c"),p[3]="nl",p[4]=x.v?"1":"0",p[5]=t(x.f||(x.v?"TRUE":"FALSE"));break;case"d":var F=tr($t(x.v));p[2]="vtc",p[3]="nd",p[4]=""+F,p[5]=x.w||$n(x.z||qe[14],F);break;case"e":continue}d.push(p.join(":"))}return d.push("sheet:c:"+(v.e.c-v.s.c+1)+":r:"+(v.e.r-v.s.r+1)+":tvf:1"),d.push("valueformat:1:text-wiki"),d.join(`
`)}function u(g){return[i,o,s,o,f(g),l].join(`
`)}return{to_workbook:a,to_sheet:n,from_sheet:u}}(),o5=function(){function e(u,g,d,p,x){x.raw?g[d][p]=u:u===""||(u==="TRUE"?g[d][p]=!0:u==="FALSE"?g[d][p]=!1:isNaN(gn(u))?isNaN(Lo(u).getDate())?g[d][p]=u:g[d][p]=$t(u):g[d][p]=gn(u))}function t(u,g){var d=g||{},p=[];if(!u||u.length===0)return p;for(var x=u.split(/[\r\n]/),h=x.length-1;h>=0&&x[h].length===0;)--h;for(var v=10,w=0,m=0;m<=h;++m)w=x[m].indexOf(" "),w==-1?w=x[m].length:w++,v=Math.max(v,w);for(m=0;m<=h;++m){p[m]=[];var E=0;for(e(x[m].slice(0,v).trim(),p,m,E,d),E=1;E<=(x[m].length-v)/10+1;++E)e(x[m].slice(v+(E-1)*10,v+E*10).trim(),p,m,E,d)}return d.sheetRows&&(p=p.slice(0,d.sheetRows)),p}var r={44:",",9:"	",59:";",124:"|"},n={44:3,9:2,59:1,124:0};function a(u){for(var g={},d=!1,p=0,x=0;p<u.length;++p)(x=u.charCodeAt(p))==34?d=!d:!d&&x in r&&(g[x]=(g[x]||0)+1);x=[];for(p in g)Object.prototype.hasOwnProperty.call(g,p)&&x.push([g[p],p]);if(!x.length){g=n;for(p in g)Object.prototype.hasOwnProperty.call(g,p)&&x.push([g[p],p])}return x.sort(function(h,v){return h[0]-v[0]||n[h[1]]-n[v[1]]}),r[x.pop()[1]]||44}function i(u,g){var d=g||{},p="";Jr!=null&&d.dense==null&&(d.dense=Jr);var x=d.dense?[]:{},h={s:{c:0,r:0},e:{c:0,r:0}};u.slice(0,4)=="sep="?u.charCodeAt(5)==13&&u.charCodeAt(6)==10?(p=u.charAt(4),u=u.slice(7)):u.charCodeAt(5)==13||u.charCodeAt(5)==10?(p=u.charAt(4),u=u.slice(6)):p=a(u.slice(0,1024)):d&&d.FS?p=d.FS:p=a(u.slice(0,1024));var v=0,w=0,m=0,E=0,F=0,P=p.charCodeAt(0),D=!1,k=0,L=u.charCodeAt(0);u=u.replace(/\r\n/mg,`
`);var M=d.dateNF!=null?Ew(d.dateNF):null;function R(){var X=u.slice(E,F),J={};if(X.charAt(0)=='"'&&X.charAt(X.length-1)=='"'&&(X=X.slice(1,-1).replace(/""/g,'"')),X.length===0)J.t="z";else if(d.raw)J.t="s",J.v=X;else if(X.trim().length===0)J.t="s",J.v=X;else if(X.charCodeAt(0)==61)X.charCodeAt(1)==34&&X.charCodeAt(X.length-1)==34?(J.t="s",J.v=X.slice(2,-1).replace(/""/g,'"')):aE(X)?(J.t="n",J.f=X.slice(1)):(J.t="s",J.v=X);else if(X=="TRUE")J.t="b",J.v=!0;else if(X=="FALSE")J.t="b",J.v=!1;else if(!isNaN(m=gn(X)))J.t="n",d.cellText!==!1&&(J.w=X),J.v=m;else if(!isNaN(Lo(X).getDate())||M&&X.match(M)){J.z=d.dateNF||qe[14];var ce=0;M&&X.match(M)&&(X=_w(X,d.dateNF,X.match(M)||[]),ce=1),d.cellDates?(J.t="d",J.v=$t(X,ce)):(J.t="n",J.v=tr($t(X,ce))),d.cellText!==!1&&(J.w=$n(J.z,J.v instanceof Date?tr(J.v):J.v)),d.cellNF||delete J.z}else J.t="s",J.v=X;if(J.t=="z"||(d.dense?(x[v]||(x[v]=[]),x[v][w]=J):x[Ie({c:w,r:v})]=J),E=F+1,L=u.charCodeAt(E),h.e.c<w&&(h.e.c=w),h.e.r<v&&(h.e.r=v),k==P)++w;else if(w=0,++v,d.sheetRows&&d.sheetRows<=v)return!0}e:for(;F<u.length;++F)switch(k=u.charCodeAt(F)){case 34:L===34&&(D=!D);break;case P:case 10:case 13:if(!D&&R())break e;break;default:break}return F-E>0&&R(),x["!ref"]=lt(h),x}function o(u,g){return!(g&&g.PRN)||g.FS||u.slice(0,4)=="sep="||u.indexOf("	")>=0||u.indexOf(",")>=0||u.indexOf(";")>=0?i(u,g):_i(t(u,g),g)}function s(u,g){var d="",p=g.type=="string"?[0,0,0,0]:vT(u,g);switch(g.type){case"base64":d=mn(u);break;case"binary":d=u;break;case"buffer":g.codepage==65001?d=u.toString("utf8"):g.codepage&&typeof Oe<"u"?d=Oe.utils.decode(g.codepage,u):d=Se&&Buffer.isBuffer(u)?u.toString("binary"):Mo(u);break;case"array":d=Xl(u);break;case"string":d=u;break;default:throw new Error("Unrecognized type "+g.type)}return p[0]==239&&p[1]==187&&p[2]==191?d=To(d.slice(3)):g.type!="string"&&g.type!="buffer"&&g.codepage==65001?d=To(d):g.type=="binary"&&typeof Oe<"u"&&g.codepage&&(d=Oe.utils.decode(g.codepage,Oe.utils.encode(28591,d))),d.slice(0,19)=="socialcalc:version:"?ex.to_sheet(g.type=="string"?d:To(d),g):o(d,g)}function l(u,g){return ka(s(u,g),g)}function f(u){for(var g=[],d=Ge(u["!ref"]),p,x=Array.isArray(u),h=d.s.r;h<=d.e.r;++h){for(var v=[],w=d.s.c;w<=d.e.c;++w){var m=Ie({r:h,c:w});if(p=x?(u[h]||[])[w]:u[m],!p||p.v==null){v.push("          ");continue}for(var E=(p.w||(vn(p),p.w)||"").slice(0,10);E.length<10;)E+=" ";v.push(E+(w===0?" ":""))}g.push(v.join(""))}return g.join(`
`)}return{to_workbook:l,to_sheet:s,from_sheet:f}}();var Z1=function(){function e(A,O,N){if(A){dr(A,A.l||0);for(var I=N.Enum||rt;A.l<A.length;){var Y=A.read_shift(2),W=I[Y]||I[65535],Z=A.read_shift(2),ee=A.l+Z,K=W.f&&W.f(A,Z,N);if(A.l=ee,O(K,W,Y))return}}}function t(A,O){switch(O.type){case"base64":return r(Br(mn(A)),O);case"binary":return r(Br(A),O);case"buffer":case"array":return r(A,O)}throw"Unsupported type "+O.type}function r(A,O){if(!A)return A;var N=O||{};Jr!=null&&N.dense==null&&(N.dense=Jr);var I=N.dense?[]:{},Y="Sheet1",W="",Z=0,ee={},K=[],ve=[],we={s:{r:0,c:0},e:{r:0,c:0}},Ne=N.sheetRows||0;if(A[2]==0&&(A[3]==8||A[3]==9)&&A.length>=16&&A[14]==5&&A[15]===108)throw new Error("Unsupported Works 3 for Mac file");if(A[2]==2)N.Enum=rt,e(A,function(de,xr,en){switch(en){case 0:N.vers=de,de>=4096&&(N.qpro=!0);break;case 6:we=de;break;case 204:de&&(W=de);break;case 222:W=de;break;case 15:case 51:N.qpro||(de[1].v=de[1].v.slice(1));case 13:case 14:case 16:en==14&&(de[2]&112)==112&&(de[2]&15)>1&&(de[2]&15)<15&&(de[1].z=N.dateNF||qe[14],N.cellDates&&(de[1].t="d",de[1].v=_g(de[1].v))),N.qpro&&de[3]>Z&&(I["!ref"]=lt(we),ee[Y]=I,K.push(Y),I=N.dense?[]:{},we={s:{r:0,c:0},e:{r:0,c:0}},Z=de[3],Y=W||"Sheet"+(Z+1),W="");var Zn=N.dense?(I[de[0].r]||[])[de[0].c]:I[Ie(de[0])];if(Zn){Zn.t=de[1].t,Zn.v=de[1].v,de[1].z!=null&&(Zn.z=de[1].z),de[1].f!=null&&(Zn.f=de[1].f);break}N.dense?(I[de[0].r]||(I[de[0].r]=[]),I[de[0].r][de[0].c]=de[1]):I[Ie(de[0])]=de[1];break;default:}},N);else if(A[2]==26||A[2]==14)N.Enum=gt,A[2]==14&&(N.qpro=!0,A.l=0),e(A,function(de,xr,en){switch(en){case 204:Y=de;break;case 22:de[1].v=de[1].v.slice(1);case 23:case 24:case 25:case 37:case 39:case 40:if(de[3]>Z&&(I["!ref"]=lt(we),ee[Y]=I,K.push(Y),I=N.dense?[]:{},we={s:{r:0,c:0},e:{r:0,c:0}},Z=de[3],Y="Sheet"+(Z+1)),Ne>0&&de[0].r>=Ne)break;N.dense?(I[de[0].r]||(I[de[0].r]=[]),I[de[0].r][de[0].c]=de[1]):I[Ie(de[0])]=de[1],we.e.c<de[0].c&&(we.e.c=de[0].c),we.e.r<de[0].r&&(we.e.r=de[0].r);break;case 27:de[14e3]&&(ve[de[14e3][0]]=de[14e3][1]);break;case 1537:ve[de[0]]=de[1],de[0]==Z&&(Y=de[1]);break;default:break}},N);else throw new Error("Unrecognized LOTUS BOF "+A[2]);if(I["!ref"]=lt(we),ee[W||Y]=I,K.push(W||Y),!ve.length)return{SheetNames:K,Sheets:ee};for(var me={},Xe=[],Qe=0;Qe<ve.length;++Qe)ee[K[Qe]]?(Xe.push(ve[Qe]||K[Qe]),me[ve[Qe]]=ee[ve[Qe]]||ee[K[Qe]]):(Xe.push(ve[Qe]),me[ve[Qe]]={"!ref":"A1"});return{SheetNames:Xe,Sheets:me}}function n(A,O){var N=O||{};if(+N.codepage>=0&&Io(+N.codepage),N.type=="string")throw new Error("Cannot write WK1 to JS string");var I=er(),Y=Ge(A["!ref"]),W=Array.isArray(A),Z=[];ie(I,0,i(1030)),ie(I,6,l(Y));for(var ee=Math.min(Y.e.r,8191),K=Y.s.r;K<=ee;++K)for(var ve=It(K),we=Y.s.c;we<=Y.e.c;++we){K===Y.s.r&&(Z[we]=Bt(we));var Ne=Z[we]+ve,me=W?(A[K]||[])[we]:A[Ne];if(!(!me||me.t=="z"))if(me.t=="n")(me.v|0)==me.v&&me.v>=-32768&&me.v<=32767?ie(I,13,p(K,we,me.v)):ie(I,14,h(K,we,me.v));else{var Xe=vn(me);ie(I,15,g(K,we,Xe.slice(0,239)))}}return ie(I,1),I.end()}function a(A,O){var N=O||{};if(+N.codepage>=0&&Io(+N.codepage),N.type=="string")throw new Error("Cannot write WK3 to JS string");var I=er();ie(I,0,o(A));for(var Y=0,W=0;Y<A.SheetNames.length;++Y)(A.Sheets[A.SheetNames[Y]]||{})["!ref"]&&ie(I,27,tt(A.SheetNames[Y],W++));var Z=0;for(Y=0;Y<A.SheetNames.length;++Y){var ee=A.Sheets[A.SheetNames[Y]];if(!(!ee||!ee["!ref"])){for(var K=Ge(ee["!ref"]),ve=Array.isArray(ee),we=[],Ne=Math.min(K.e.r,8191),me=K.s.r;me<=Ne;++me)for(var Xe=It(me),Qe=K.s.c;Qe<=K.e.c;++Qe){me===K.s.r&&(we[Qe]=Bt(Qe));var de=we[Qe]+Xe,xr=ve?(ee[me]||[])[Qe]:ee[de];if(!(!xr||xr.t=="z"))if(xr.t=="n")ie(I,23,R(me,Qe,Z,xr.v));else{var en=vn(xr);ie(I,22,k(me,Qe,Z,en.slice(0,239)))}}++Z}}return ie(I,1),I.end()}function i(A){var O=G(2);return O.write_shift(2,A),O}function o(A){var O=G(26);O.write_shift(2,4096),O.write_shift(2,4),O.write_shift(4,0);for(var N=0,I=0,Y=0,W=0;W<A.SheetNames.length;++W){var Z=A.SheetNames[W],ee=A.Sheets[Z];if(!(!ee||!ee["!ref"])){++Y;var K=pr(ee["!ref"]);N<K.e.r&&(N=K.e.r),I<K.e.c&&(I=K.e.c)}}return N>8191&&(N=8191),O.write_shift(2,N),O.write_shift(1,Y),O.write_shift(1,I),O.write_shift(2,0),O.write_shift(2,0),O.write_shift(1,1),O.write_shift(1,2),O.write_shift(4,0),O.write_shift(4,0),O}function s(A,O,N){var I={s:{c:0,r:0},e:{c:0,r:0}};return O==8&&N.qpro?(I.s.c=A.read_shift(1),A.l++,I.s.r=A.read_shift(2),I.e.c=A.read_shift(1),A.l++,I.e.r=A.read_shift(2),I):(I.s.c=A.read_shift(2),I.s.r=A.read_shift(2),O==12&&N.qpro&&(A.l+=2),I.e.c=A.read_shift(2),I.e.r=A.read_shift(2),O==12&&N.qpro&&(A.l+=2),I.s.c==65535&&(I.s.c=I.e.c=I.s.r=I.e.r=0),I)}function l(A){var O=G(8);return O.write_shift(2,A.s.c),O.write_shift(2,A.s.r),O.write_shift(2,A.e.c),O.write_shift(2,A.e.r),O}function f(A,O,N){var I=[{c:0,r:0},{t:"n",v:0},0,0];return N.qpro&&N.vers!=20768?(I[0].c=A.read_shift(1),I[3]=A.read_shift(1),I[0].r=A.read_shift(2),A.l+=2):(I[2]=A.read_shift(1),I[0].c=A.read_shift(2),I[0].r=A.read_shift(2)),I}function u(A,O,N){var I=A.l+O,Y=f(A,O,N);if(Y[1].t="s",N.vers==20768){A.l++;var W=A.read_shift(1);return Y[1].v=A.read_shift(W,"utf8"),Y}return N.qpro&&A.l++,Y[1].v=A.read_shift(I-A.l,"cstr"),Y}function g(A,O,N){var I=G(7+N.length);I.write_shift(1,255),I.write_shift(2,O),I.write_shift(2,A),I.write_shift(1,39);for(var Y=0;Y<I.length;++Y){var W=N.charCodeAt(Y);I.write_shift(1,W>=128?95:W)}return I.write_shift(1,0),I}function d(A,O,N){var I=f(A,O,N);return I[1].v=A.read_shift(2,"i"),I}function p(A,O,N){var I=G(7);return I.write_shift(1,255),I.write_shift(2,O),I.write_shift(2,A),I.write_shift(2,N,"i"),I}function x(A,O,N){var I=f(A,O,N);return I[1].v=A.read_shift(8,"f"),I}function h(A,O,N){var I=G(13);return I.write_shift(1,255),I.write_shift(2,O),I.write_shift(2,A),I.write_shift(8,N,"f"),I}function v(A,O,N){var I=A.l+O,Y=f(A,O,N);if(Y[1].v=A.read_shift(8,"f"),N.qpro)A.l=I;else{var W=A.read_shift(2);F(A.slice(A.l,A.l+W),Y),A.l+=W}return Y}function w(A,O,N){var I=O&32768;return O&=-32769,O=(I?A:0)+(O>=8192?O-16384:O),(I?"":"$")+(N?Bt(O):It(O))}var m={51:["FALSE",0],52:["TRUE",0],70:["LEN",1],80:["SUM",69],81:["AVERAGEA",69],82:["COUNTA",69],83:["MINA",69],84:["MAXA",69],111:["T",1]},E=["","","","","","","","","","+","-","*","/","^","=","<>","<=",">=","<",">","","","","","&","","","","","","",""];function F(A,O){dr(A,0);for(var N=[],I=0,Y="",W="",Z="",ee="";A.l<A.length;){var K=A[A.l++];switch(K){case 0:N.push(A.read_shift(8,"f"));break;case 1:W=w(O[0].c,A.read_shift(2),!0),Y=w(O[0].r,A.read_shift(2),!1),N.push(W+Y);break;case 2:{var ve=w(O[0].c,A.read_shift(2),!0),we=w(O[0].r,A.read_shift(2),!1);W=w(O[0].c,A.read_shift(2),!0),Y=w(O[0].r,A.read_shift(2),!1),N.push(ve+we+":"+W+Y)}break;case 3:if(A.l<A.length){console.error("WK1 premature formula end");return}break;case 4:N.push("("+N.pop()+")");break;case 5:N.push(A.read_shift(2));break;case 6:{for(var Ne="";K=A[A.l++];)Ne+=String.fromCharCode(K);N.push('"'+Ne.replace(/"/g,'""')+'"')}break;case 8:N.push("-"+N.pop());break;case 23:N.push("+"+N.pop());break;case 22:N.push("NOT("+N.pop()+")");break;case 20:case 21:ee=N.pop(),Z=N.pop(),N.push(["AND","OR"][K-20]+"("+Z+","+ee+")");break;default:if(K<32&&E[K])ee=N.pop(),Z=N.pop(),N.push(Z+E[K]+ee);else if(m[K]){if(I=m[K][1],I==69&&(I=A[A.l++]),I>N.length){console.error("WK1 bad formula parse 0x"+K.toString(16)+":|"+N.join("|")+"|");return}var me=N.slice(-I);N.length-=I,N.push(m[K][0]+"("+me.join(",")+")")}else return K<=7?console.error("WK1 invalid opcode "+K.toString(16)):K<=24?console.error("WK1 unsupported op "+K.toString(16)):K<=30?console.error("WK1 invalid opcode "+K.toString(16)):K<=115?console.error("WK1 unsupported function opcode "+K.toString(16)):console.error("WK1 unrecognized opcode "+K.toString(16))}}N.length==1?O[1].f=""+N[0]:console.error("WK1 bad formula parse |"+N.join("|")+"|")}function P(A){var O=[{c:0,r:0},{t:"n",v:0},0];return O[0].r=A.read_shift(2),O[3]=A[A.l++],O[0].c=A[A.l++],O}function D(A,O){var N=P(A,O);return N[1].t="s",N[1].v=A.read_shift(O-4,"cstr"),N}function k(A,O,N,I){var Y=G(6+I.length);Y.write_shift(2,A),Y.write_shift(1,N),Y.write_shift(1,O),Y.write_shift(1,39);for(var W=0;W<I.length;++W){var Z=I.charCodeAt(W);Y.write_shift(1,Z>=128?95:Z)}return Y.write_shift(1,0),Y}function L(A,O){var N=P(A,O);N[1].v=A.read_shift(2);var I=N[1].v>>1;if(N[1].v&1)switch(I&7){case 0:I=(I>>3)*5e3;break;case 1:I=(I>>3)*500;break;case 2:I=(I>>3)/20;break;case 3:I=(I>>3)/200;break;case 4:I=(I>>3)/2e3;break;case 5:I=(I>>3)/2e4;break;case 6:I=(I>>3)/16;break;case 7:I=(I>>3)/64;break}return N[1].v=I,N}function M(A,O){var N=P(A,O),I=A.read_shift(4),Y=A.read_shift(4),W=A.read_shift(2);if(W==65535)return I===0&&Y===3221225472?(N[1].t="e",N[1].v=15):I===0&&Y===3489660928?(N[1].t="e",N[1].v=42):N[1].v=0,N;var Z=W&32768;return W=(W&32767)-16446,N[1].v=(1-Z*2)*(Y*Math.pow(2,W+32)+I*Math.pow(2,W)),N}function R(A,O,N,I){var Y=G(14);if(Y.write_shift(2,A),Y.write_shift(1,N),Y.write_shift(1,O),I==0)return Y.write_shift(4,0),Y.write_shift(4,0),Y.write_shift(2,65535),Y;var W=0,Z=0,ee=0,K=0;return I<0&&(W=1,I=-I),Z=Math.log2(I)|0,I/=Math.pow(2,Z-31),K=I>>>0,K&2147483648||(I/=2,++Z,K=I>>>0),I-=K,K|=2147483648,K>>>=0,I*=Math.pow(2,32),ee=I>>>0,Y.write_shift(4,ee),Y.write_shift(4,K),Z+=16383+(W?32768:0),Y.write_shift(2,Z),Y}function X(A,O){var N=M(A,14);return A.l+=O-14,N}function J(A,O){var N=P(A,O),I=A.read_shift(4);return N[1].v=I>>6,N}function ce(A,O){var N=P(A,O),I=A.read_shift(8,"f");return N[1].v=I,N}function ye(A,O){var N=ce(A,14);return A.l+=O-10,N}function he(A,O){return A[A.l+O-1]==0?A.read_shift(O,"cstr"):""}function Ue(A,O){var N=A[A.l++];N>O-1&&(N=O-1);for(var I="";I.length<N;)I+=String.fromCharCode(A[A.l++]);return I}function Ve(A,O,N){if(!(!N.qpro||O<21)){var I=A.read_shift(1);A.l+=17,A.l+=1,A.l+=2;var Y=A.read_shift(O-21,"cstr");return[I,Y]}}function et(A,O){for(var N={},I=A.l+O;A.l<I;){var Y=A.read_shift(2);if(Y==14e3){for(N[Y]=[0,""],N[Y][0]=A.read_shift(2);A[A.l];)N[Y][1]+=String.fromCharCode(A[A.l]),A.l++;A.l++}}return N}function tt(A,O){var N=G(5+A.length);N.write_shift(2,14e3),N.write_shift(2,O);for(var I=0;I<A.length;++I){var Y=A.charCodeAt(I);N[N.l++]=Y>127?95:Y}return N[N.l++]=0,N}var rt={0:{n:"BOF",f:Kg},1:{n:"EOF"},2:{n:"CALCMODE"},3:{n:"CALCORDER"},4:{n:"SPLIT"},5:{n:"SYNC"},6:{n:"RANGE",f:s},7:{n:"WINDOW1"},8:{n:"COLW1"},9:{n:"WINTWO"},10:{n:"COLW2"},11:{n:"NAME"},12:{n:"BLANK"},13:{n:"INTEGER",f:d},14:{n:"NUMBER",f:x},15:{n:"LABEL",f:u},16:{n:"FORMULA",f:v},24:{n:"TABLE"},25:{n:"ORANGE"},26:{n:"PRANGE"},27:{n:"SRANGE"},28:{n:"FRANGE"},29:{n:"KRANGE1"},32:{n:"HRANGE"},35:{n:"KRANGE2"},36:{n:"PROTEC"},37:{n:"FOOTER"},38:{n:"HEADER"},39:{n:"SETUP"},40:{n:"MARGINS"},41:{n:"LABELFMT"},42:{n:"TITLES"},43:{n:"SHEETJS"},45:{n:"GRAPH"},46:{n:"NGRAPH"},47:{n:"CALCCOUNT"},48:{n:"UNFORMATTED"},49:{n:"CURSORW12"},50:{n:"WINDOW"},51:{n:"STRING",f:u},55:{n:"PASSWORD"},56:{n:"LOCKED"},60:{n:"QUERY"},61:{n:"QUERYNAME"},62:{n:"PRINT"},63:{n:"PRINTNAME"},64:{n:"GRAPH2"},65:{n:"GRAPHNAME"},66:{n:"ZOOM"},67:{n:"SYMSPLIT"},68:{n:"NSROWS"},69:{n:"NSCOLS"},70:{n:"RULER"},71:{n:"NNAME"},72:{n:"ACOMM"},73:{n:"AMACRO"},74:{n:"PARSE"},102:{n:"PRANGES??"},103:{n:"RRANGES??"},104:{n:"FNAME??"},105:{n:"MRANGES??"},204:{n:"SHEETNAMECS",f:he},222:{n:"SHEETNAMELP",f:Ue},65535:{n:""}},gt={0:{n:"BOF"},1:{n:"EOF"},2:{n:"PASSWORD"},3:{n:"CALCSET"},4:{n:"WINDOWSET"},5:{n:"SHEETCELLPTR"},6:{n:"SHEETLAYOUT"},7:{n:"COLUMNWIDTH"},8:{n:"HIDDENCOLUMN"},9:{n:"USERRANGE"},10:{n:"SYSTEMRANGE"},11:{n:"ZEROFORCE"},12:{n:"SORTKEYDIR"},13:{n:"FILESEAL"},14:{n:"DATAFILLNUMS"},15:{n:"PRINTMAIN"},16:{n:"PRINTSTRING"},17:{n:"GRAPHMAIN"},18:{n:"GRAPHSTRING"},19:{n:"??"},20:{n:"ERRCELL"},21:{n:"NACELL"},22:{n:"LABEL16",f:D},23:{n:"NUMBER17",f:M},24:{n:"NUMBER18",f:L},25:{n:"FORMULA19",f:X},26:{n:"FORMULA1A"},27:{n:"XFORMAT",f:et},28:{n:"DTLABELMISC"},29:{n:"DTLABELCELL"},30:{n:"GRAPHWINDOW"},31:{n:"CPA"},32:{n:"LPLAUTO"},33:{n:"QUERY"},34:{n:"HIDDENSHEET"},35:{n:"??"},37:{n:"NUMBER25",f:J},38:{n:"??"},39:{n:"NUMBER27",f:ce},40:{n:"FORMULA28",f:ye},142:{n:"??"},147:{n:"??"},150:{n:"??"},151:{n:"??"},152:{n:"??"},153:{n:"??"},154:{n:"??"},155:{n:"??"},156:{n:"??"},163:{n:"??"},174:{n:"??"},175:{n:"??"},176:{n:"??"},177:{n:"??"},184:{n:"??"},185:{n:"??"},186:{n:"??"},187:{n:"??"},188:{n:"??"},195:{n:"??"},201:{n:"??"},204:{n:"SHEETNAMECS",f:he},205:{n:"??"},206:{n:"??"},207:{n:"??"},208:{n:"??"},256:{n:"??"},259:{n:"??"},260:{n:"??"},261:{n:"??"},262:{n:"??"},263:{n:"??"},265:{n:"??"},266:{n:"??"},267:{n:"??"},268:{n:"??"},270:{n:"??"},271:{n:"??"},384:{n:"??"},389:{n:"??"},390:{n:"??"},393:{n:"??"},396:{n:"??"},512:{n:"??"},514:{n:"??"},513:{n:"??"},516:{n:"??"},517:{n:"??"},640:{n:"??"},641:{n:"??"},642:{n:"??"},643:{n:"??"},644:{n:"??"},645:{n:"??"},646:{n:"??"},647:{n:"??"},648:{n:"??"},658:{n:"??"},659:{n:"??"},660:{n:"??"},661:{n:"??"},662:{n:"??"},665:{n:"??"},666:{n:"??"},768:{n:"??"},772:{n:"??"},1537:{n:"SHEETINFOQP",f:Ve},1600:{n:"??"},1602:{n:"??"},1793:{n:"??"},1794:{n:"??"},1795:{n:"??"},1796:{n:"??"},1920:{n:"??"},2048:{n:"??"},2049:{n:"??"},2052:{n:"??"},2688:{n:"??"},10998:{n:"??"},12849:{n:"??"},28233:{n:"??"},28484:{n:"??"},65535:{n:""}};return{sheet_to_wk1:n,book_to_wk3:a,to_workbook:t}}();var s5=/^\s|\s$|[\t\n\r]/;function tx(e,t){if(!t.bookSST)return"";var r=[ct];r[r.length]=ae("sst",null,{xmlns:yi[0],count:e.Count,uniqueCount:e.Unique});for(var n=0;n!=e.length;++n)if(e[n]!=null){var a=e[n],i="<si>";a.r?i+=a.r:(i+="<t",a.t||(a.t=""),a.t.match(s5)&&(i+=' xml:space="preserve"'),i+=">"+Pe(a.t)+"</t>"),i+="</si>",r[r.length]=i}return r.length>2&&(r[r.length]="</sst>",r[1]=r[1].replace("/>",">")),r.join("")}function l5(e){return[e.read_shift(4),e.read_shift(4)]}function c5(e,t){return t||(t=G(8)),t.write_shift(4,e.Count),t.write_shift(4,e.Unique),t}var f5=ey;function u5(e){var t=er();Q(t,159,c5(e));for(var r=0;r<e.length;++r)Q(t,19,f5(e[r]));return Q(t,160),t.end()}function d5(e){if(typeof Oe<"u")return Oe.utils.encode(vi,e);for(var t=[],r=e.split(""),n=0;n<r.length;++n)t[n]=r[n].charCodeAt(0);return t}function rx(e){var t=0,r,n=d5(e),a=n.length+1,i,o,s,l,f;for(r=ya(a),r[0]=n.length,i=1;i!=a;++i)r[i]=n[i-1];for(i=a-1;i>=0;--i)o=r[i],s=t&16384?1:0,l=t<<1&32767,f=s|l,t=f^o;return t^52811}var h5=function(){function e(a,i){switch(i.type){case"base64":return t(mn(a),i);case"binary":return t(a,i);case"buffer":return t(Se&&Buffer.isBuffer(a)?a.toString("binary"):Mo(a),i);case"array":return t(Xl(a),i)}throw new Error("Unrecognized type "+i.type)}function t(a,i){var o=i||{},s=o.dense?[]:{},l=a.match(/\\trowd.*?\\row\b/g);if(!l.length)throw new Error("RTF missing table");var f={s:{c:0,r:0},e:{c:0,r:l.length-1}};return l.forEach(function(u,g){Array.isArray(s)&&(s[g]=[]);for(var d=/\\\w+\b/g,p=0,x,h=-1;x=d.exec(u);){switch(x[0]){case"\\cell":var v=u.slice(p,d.lastIndex-x[0].length);if(v[0]==" "&&(v=v.slice(1)),++h,v.length){var w={v,t:"s"};Array.isArray(s)?s[g][h]=w:s[Ie({r:g,c:h})]=w}break}p=d.lastIndex}h>f.e.c&&(f.e.c=h)}),s["!ref"]=lt(f),s}function r(a,i){return ka(e(a,i),i)}function n(a){for(var i=["{\\rtf1\\ansi"],o=Ge(a["!ref"]),s,l=Array.isArray(a),f=o.s.r;f<=o.e.r;++f){i.push("\\trowd\\trautofit1");for(var u=o.s.c;u<=o.e.c;++u)i.push("\\cellx"+(u+1));for(i.push("\\pard\\intbl"),u=o.s.c;u<=o.e.c;++u){var g=Ie({r:f,c:u});s=l?(a[f]||[])[u]:a[g],!(!s||s.v==null&&(!s.f||s.F))&&(i.push(" "+(s.w||(vn(s),s.w))),i.push("\\cell"))}i.push("\\pard\\intbl\\row")}return i.join("")+"}"}return{to_workbook:r,to_sheet:e,from_sheet:n}}();function q1(e){for(var t=0,r=1;t!=3;++t)r=r*256+(e[t]>255?255:e[t]<0?0:e[t]);return r.toString(16).toUpperCase().slice(1)}var p5=6;var xn=p5;function Rl(e){return Math.floor((e+Math.round(128/xn)/256)*xn)}function Ml(e){return Math.floor((e-5)/xn*100+.5)/100}function Wf(e){return Math.round((e*xn+5)/xn*256)/256}function su(e){e.width?(e.wpx=Rl(e.width),e.wch=Ml(e.wpx),e.MDW=xn):e.wpx?(e.wch=Ml(e.wpx),e.width=Wf(e.wch),e.MDW=xn):typeof e.wch=="number"&&(e.width=Wf(e.wch),e.wpx=Rl(e.width),e.MDW=xn),e.customWidth&&delete e.customWidth}var g5=96,nx=g5;function Bl(e){return e*96/nx}function ax(e){return e*nx/96}function x5(e){var t=["<numFmts>"];return[[5,8],[23,26],[41,44],[50,392]].forEach(function(r){for(var n=r[0];n<=r[1];++n)e[n]!=null&&(t[t.length]=ae("numFmt",null,{numFmtId:n,formatCode:Pe(e[n])}))}),t.length===1?"":(t[t.length]="</numFmts>",t[0]=ae("numFmts",null,{count:t.length-2}).replace("/>",">"),t.join(""))}function m5(e){var t=[];return t[t.length]=ae("cellXfs",null),e.forEach(function(r){t[t.length]=ae("xf",null,r)}),t[t.length]="</cellXfs>",t.length===2?"":(t[0]=ae("cellXfs",null,{count:t.length-2}).replace("/>",">"),t.join(""))}function ix(e,t){var r=[ct,ae("styleSheet",null,{xmlns:yi[0],"xmlns:vt":yt.vt})],n;return e.SSF&&(n=x5(e.SSF))!=null&&(r[r.length]=n),r[r.length]='<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>',r[r.length]='<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>',r[r.length]='<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>',r[r.length]='<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>',(n=m5(t.cellXfs))&&(r[r.length]=n),r[r.length]='<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>',r[r.length]='<dxfs count="0"/>',r[r.length]='<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>',r.length>2&&(r[r.length]="</styleSheet>",r[1]=r[1].replace("/>",">")),r.join("")}function v5(e,t){var r=e.read_shift(2),n=Ut(e,t-2);return[r,n]}function w5(e,t,r){r||(r=G(6+4*t.length)),r.write_shift(2,e),_t(t,r);var n=r.length>r.l?r.slice(0,r.l):r;return r.l==null&&(r.l=r.length),n}function y5(e,t,r){var n={};n.sz=e.read_shift(2)/20;var a=sy(e,2,r);a.fItalic&&(n.italic=1),a.fCondense&&(n.condense=1),a.fExtend&&(n.extend=1),a.fShadow&&(n.shadow=1),a.fOutline&&(n.outline=1),a.fStrikeout&&(n.strike=1);var i=e.read_shift(2);switch(i===700&&(n.bold=1),e.read_shift(2)){case 1:n.vertAlign="superscript";break;case 2:n.vertAlign="subscript";break}var o=e.read_shift(1);o!=0&&(n.underline=o);var s=e.read_shift(1);s>0&&(n.family=s);var l=e.read_shift(1);switch(l>0&&(n.charset=l),e.l++,n.color=oy(e,8),e.read_shift(1)){case 1:n.scheme="major";break;case 2:n.scheme="minor";break}return n.name=Ut(e,t-21),n}function E5(e,t){t||(t=G(25+4*32)),t.write_shift(2,e.sz*20),ly(e,t),t.write_shift(2,e.bold?700:400);var r=0;e.vertAlign=="superscript"?r=1:e.vertAlign=="subscript"&&(r=2),t.write_shift(2,r),t.write_shift(1,e.underline||0),t.write_shift(1,e.family||0),t.write_shift(1,e.charset||0),t.write_shift(1,0),Dl(e.color,t);var n=0;return e.scheme=="major"&&(n=1),e.scheme=="minor"&&(n=2),t.write_shift(1,n),_t(e.name,t),t.length>t.l?t.slice(0,t.l):t}var _5=["none","solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"],Of,k5=Zr;function eg(e,t){t||(t=G(4*3+8*7+16*1)),Of||(Of=Xf(_5));var r=Of[e.patternType];r==null&&(r=40),t.write_shift(4,r);var n=0;if(r!=40)for(Dl({auto:1},t),Dl({auto:1},t);n<12;++n)t.write_shift(4,0);else{for(;n<4;++n)t.write_shift(4,0);for(;n<12;++n)t.write_shift(4,0)}return t.length>t.l?t.slice(0,t.l):t}function b5(e,t){var r=e.l+t,n=e.read_shift(2),a=e.read_shift(2);return e.l=r,{ixfe:n,numFmtId:a}}function ox(e,t,r){r||(r=G(16)),r.write_shift(2,t||0),r.write_shift(2,e.numFmtId||0),r.write_shift(2,0),r.write_shift(2,0),r.write_shift(2,0),r.write_shift(1,0),r.write_shift(1,0);var n=0;return r.write_shift(1,n),r.write_shift(1,0),r.write_shift(1,0),r.write_shift(1,0),r}function ko(e,t){return t||(t=G(10)),t.write_shift(1,0),t.write_shift(1,0),t.write_shift(4,0),t.write_shift(4,0),t}var T5=Zr;function S5(e,t){return t||(t=G(51)),t.write_shift(1,0),ko(null,t),ko(null,t),ko(null,t),ko(null,t),ko(null,t),t.length>t.l?t.slice(0,t.l):t}function C5(e,t){return t||(t=G(12+4*10)),t.write_shift(4,e.xfId),t.write_shift(2,1),t.write_shift(1,+e.builtinId),t.write_shift(1,0),Ll(e.name||"",t),t.length>t.l?t.slice(0,t.l):t}function A5(e,t,r){var n=G(2052);return n.write_shift(4,e),Ll(t,n),Ll(r,n),n.length>n.l?n.slice(0,n.l):n}function F5(e,t){if(t){var r=0;[[5,8],[23,26],[41,44],[50,392]].forEach(function(n){for(var a=n[0];a<=n[1];++a)t[a]!=null&&++r}),r!=0&&(Q(e,615,zr(r)),[[5,8],[23,26],[41,44],[50,392]].forEach(function(n){for(var a=n[0];a<=n[1];++a)t[a]!=null&&Q(e,44,w5(a,t[a]))}),Q(e,616))}}function P5(e){var t=1;t!=0&&(Q(e,611,zr(t)),Q(e,43,E5({sz:12,color:{theme:1},name:"Calibri",family:2,scheme:"minor"})),Q(e,612))}function I5(e){var t=2;t!=0&&(Q(e,603,zr(t)),Q(e,45,eg({patternType:"none"})),Q(e,45,eg({patternType:"gray125"})),Q(e,604))}function N5(e){var t=1;t!=0&&(Q(e,613,zr(t)),Q(e,46,S5({})),Q(e,614))}function L5(e){var t=1;Q(e,626,zr(t)),Q(e,47,ox({numFmtId:0,fontId:0,fillId:0,borderId:0},65535)),Q(e,627)}function D5(e,t){Q(e,617,zr(t.length)),t.forEach(function(r){Q(e,47,ox(r,0))}),Q(e,618)}function O5(e){var t=1;Q(e,619,zr(t)),Q(e,48,C5({xfId:0,builtinId:0,name:"Normal"})),Q(e,620)}function R5(e){var t=0;Q(e,505,zr(t)),Q(e,506)}function M5(e){var t=0;Q(e,508,A5(t,"TableStyleMedium9","PivotStyleMedium4")),Q(e,509)}function B5(e,t){var r=er();return Q(r,278),F5(r,e.SSF),P5(r,e),I5(r,e),N5(r,e),L5(r,e),D5(r,t.cellXfs),O5(r,e),R5(r,e),M5(r,e),Q(r,279),r.end()}function sx(e,t){if(t&&t.themeXLSX)return t.themeXLSX;if(e&&typeof e.raw=="string")return e.raw;var r=[ct];return r[r.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">',r[r.length]="<a:themeElements>",r[r.length]='<a:clrScheme name="Office">',r[r.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>',r[r.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>',r[r.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>',r[r.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>',r[r.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>',r[r.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>',r[r.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>',r[r.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>',r[r.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>',r[r.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>',r[r.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>',r[r.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>',r[r.length]="</a:clrScheme>",r[r.length]='<a:fontScheme name="Office">',r[r.length]="<a:majorFont>",r[r.length]='<a:latin typeface="Cambria"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>',r[r.length]='<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>',r[r.length]='<a:font script="Hans" typeface="\u5B8B\u4F53"/>',r[r.length]='<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>',r[r.length]='<a:font script="Arab" typeface="Times New Roman"/>',r[r.length]='<a:font script="Hebr" typeface="Times New Roman"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="MoolBoran"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Times New Roman"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:majorFont>",r[r.length]="<a:minorFont>",r[r.length]='<a:latin typeface="Calibri"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>',r[r.length]='<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>',r[r.length]='<a:font script="Hans" typeface="\u5B8B\u4F53"/>',r[r.length]='<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>',r[r.length]='<a:font script="Arab" typeface="Arial"/>',r[r.length]='<a:font script="Hebr" typeface="Arial"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="DaunPenh"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Arial"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:minorFont>",r[r.length]="</a:fontScheme>",r[r.length]='<a:fmtScheme name="Office">',r[r.length]="<a:fillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="1"/>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="0"/>',r[r.length]="</a:gradFill>",r[r.length]="</a:fillStyleLst>",r[r.length]="<a:lnStyleLst>",r[r.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]="</a:lnStyleLst>",r[r.length]="<a:effectStyleLst>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>',r[r.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>',r[r.length]="</a:effectStyle>",r[r.length]="</a:effectStyleLst>",r[r.length]="<a:bgFillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]="</a:bgFillStyleLst>",r[r.length]="</a:fmtScheme>",r[r.length]="</a:themeElements>",r[r.length]="<a:objectDefaults>",r[r.length]="<a:spDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>',r[r.length]="</a:spDef>",r[r.length]="<a:lnDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>',r[r.length]="</a:lnDef>",r[r.length]="</a:objectDefaults>",r[r.length]="<a:extraClrSchemeLst/>",r[r.length]="</a:theme>",r.join("")}function U5(e,t){return{flags:e.read_shift(4),version:e.read_shift(4),name:Ut(e,t-8)}}function z5(e){var t=G(12+2*e.name.length);return t.write_shift(4,e.flags),t.write_shift(4,e.version),_t(e.name,t),t.slice(0,t.l)}function H5(e){for(var t=[],r=e.read_shift(4);r-- >0;)t.push([e.read_shift(4),e.read_shift(4)]);return t}function W5(e){var t=G(4+8*e.length);t.write_shift(4,e.length);for(var r=0;r<e.length;++r)t.write_shift(4,e[r][0]),t.write_shift(4,e[r][1]);return t}function G5(e,t){var r=G(8+2*t.length);return r.write_shift(4,e),_t(t,r),r.slice(0,r.l)}function V5(e){return e.l+=4,e.read_shift(4)!=0}function X5(e,t){var r=G(8);return r.write_shift(4,e),r.write_shift(4,t?1:0),r}function j5(){var e=er();return Q(e,332),Q(e,334,zr(1)),Q(e,335,z5({name:"XLDAPR",version:12e4,flags:3496657072})),Q(e,336),Q(e,339,G5(1,"XLDAPR")),Q(e,52),Q(e,35,zr(514)),Q(e,4096,zr(0)),Q(e,4097,Sr(1)),Q(e,36),Q(e,53),Q(e,340),Q(e,337,X5(1,!0)),Q(e,51,W5([[1,0]])),Q(e,338),Q(e,333),e.end()}function lx(){var e=[ct];return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`),e.join("")}function $5(e){var t={};t.i=e.read_shift(4);var r={};r.r=e.read_shift(4),r.c=e.read_shift(4),t.r=Ie(r);var n=e.read_shift(1);return n&2&&(t.l="1"),n&8&&(t.a="1"),t}var di=1024;function cx(e,t){for(var r=[21600,21600],n=["m0,0l0",r[1],r[0],r[1],r[0],"0xe"].join(","),a=[ae("xml",null,{"xmlns:v":hr.v,"xmlns:o":hr.o,"xmlns:x":hr.x,"xmlns:mv":hr.mv}).replace(/\/>/,">"),ae("o:shapelayout",ae("o:idmap",null,{"v:ext":"edit",data:e}),{"v:ext":"edit"}),ae("v:shapetype",[ae("v:stroke",null,{joinstyle:"miter"}),ae("v:path",null,{gradientshapeok:"t","o:connecttype":"rect"})].join(""),{id:"_x0000_t202","o:spt":202,coordsize:r.join(","),path:n})];di<e*1e3;)di+=1e3;return t.forEach(function(i){var o=Et(i[0]),s={color2:"#BEFF82",type:"gradient"};s.type=="gradient"&&(s.angle="-180");var l=s.type=="gradient"?ae("o:fill",null,{type:"gradientUnscaled","v:ext":"view"}):null,f=ae("v:fill",l,s),u={on:"t",obscured:"t"};++di,a=a.concat(["<v:shape"+Do({id:"_x0000_s"+di,type:"#_x0000_t202",style:"position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10"+(i[1].hidden?";visibility:hidden":""),fillcolor:"#ECFAD4",strokecolor:"#edeaa1"})+">",f,ae("v:shadow",null,u),ae("v:path",null,{"o:connecttype":"none"}),'<v:textbox><div style="text-align:left"></div></v:textbox>','<x:ClientData ObjectType="Note">',"<x:MoveWithCells/>","<x:SizeWithCells/>",Pt("x:Anchor",[o.c+1,0,o.r+1,0,o.c+3,20,o.r+5,20].join(",")),Pt("x:AutoFill","False"),Pt("x:Row",String(o.r)),Pt("x:Column",String(o.c)),i[1].hidden?"":"<x:Visible/>","</x:ClientData>","</v:shape>"])}),a.push("</xml>"),a.join("")}function fx(e){var t=[ct,ae("comments",null,{xmlns:yi[0]})],r=[];return t.push("<authors>"),e.forEach(function(n){n[1].forEach(function(a){var i=Pe(a.a);r.indexOf(i)==-1&&(r.push(i),t.push("<author>"+i+"</author>")),a.T&&a.ID&&r.indexOf("tc="+a.ID)==-1&&(r.push("tc="+a.ID),t.push("<author>tc="+a.ID+"</author>"))})}),r.length==0&&(r.push("SheetJ5"),t.push("<author>SheetJ5</author>")),t.push("</authors>"),t.push("<commentList>"),e.forEach(function(n){var a=0,i=[];if(n[1][0]&&n[1][0].T&&n[1][0].ID?a=r.indexOf("tc="+n[1][0].ID):n[1].forEach(function(l){l.a&&(a=r.indexOf(Pe(l.a))),i.push(l.t||"")}),t.push('<comment ref="'+n[0]+'" authorId="'+a+'"><text>'),i.length<=1)t.push(Pt("t",Pe(i[0]||"")));else{for(var o=`Comment:
    `+i[0]+`
`,s=1;s<i.length;++s)o+=`Reply:
    `+i[s]+`
`;t.push(Pt("t",Pe(o)))}t.push("</text></comment>")}),t.push("</commentList>"),t.length>2&&(t[t.length]="</comments>",t[1]=t[1].replace("/>",">")),t.join("")}function Y5(e,t,r){var n=[ct,ae("ThreadedComments",null,{xmlns:yt.TCMNT}).replace(/[\/]>/,">")];return e.forEach(function(a){var i="";(a[1]||[]).forEach(function(o,s){if(!o.T){delete o.ID;return}o.a&&t.indexOf(o.a)==-1&&t.push(o.a);var l={ref:a[0],id:"{54EE7951-7262-4200-6969-"+("000000000000"+r.tcid++).slice(-12)+"}"};s==0?i=l.id:l.parentId=i,o.ID=l.id,o.a&&(l.personId="{54EE7950-7262-4200-6969-"+("000000000000"+t.indexOf(o.a)).slice(-12)+"}"),n.push(ae("threadedComment",Pt("text",o.t||""),l))})}),n.push("</ThreadedComments>"),n.join("")}function K5(e){var t=[ct,ae("personList",null,{xmlns:yt.TCMNT,"xmlns:x":yi[0]}).replace(/[\/]>/,">")];return e.forEach(function(r,n){t.push(ae("person",null,{displayName:r,id:"{54EE7950-7262-4200-6969-"+("000000000000"+n).slice(-12)+"}",userId:r,providerId:"None"}))}),t.push("</personList>"),t.join("")}function Q5(e){var t={};t.iauthor=e.read_shift(4);var r=Ca(e,16);return t.rfx=r.s,t.ref=Ie(r.s),e.l+=16,t}function J5(e,t){return t==null&&(t=G(36)),t.write_shift(4,e[1].iauthor),ki(e[0],t),t.write_shift(4,0),t.write_shift(4,0),t.write_shift(4,0),t.write_shift(4,0),t}var Z5=Ut;function q5(e){return _t(e.slice(0,54))}function eE(e){var t=er(),r=[];return Q(t,628),Q(t,630),e.forEach(function(n){n[1].forEach(function(a){r.indexOf(a.a)>-1||(r.push(a.a.slice(0,54)),Q(t,632,q5(a.a)))})}),Q(t,631),Q(t,633),e.forEach(function(n){n[1].forEach(function(a){a.iauthor=r.indexOf(a.a);var i={s:Et(n[0]),e:Et(n[0])};Q(t,635,J5([i,a])),a.t&&a.t.length>0&&Q(t,637,ry(a)),Q(t,636),delete a.iauthor})}),Q(t,634),Q(t,629),t.end()}function tE(e,t){t.FullPaths.forEach(function(r,n){if(n!=0){var a=r.replace(/[^\/]*[\/]/,"/_VBA_PROJECT_CUR/");a.slice(-1)!=="/"&&Le.utils.cfb_add(e,a,t.FileIndex[n].content)}})}var ux=["xlsb","xlsm","xlam","biff8","xla"];var rE=function(){var e=/(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,t={r:0,c:0};function r(n,a,i,o){var s=!1,l=!1;i.length==0?l=!0:i.charAt(0)=="["&&(l=!0,i=i.slice(1,-1)),o.length==0?s=!0:o.charAt(0)=="["&&(s=!0,o=o.slice(1,-1));var f=i.length>0?parseInt(i,10)|0:0,u=o.length>0?parseInt(o,10)|0:0;return s?u+=t.c:--u,l?f+=t.r:--f,a+(s?"":"$")+Bt(u)+(l?"":"$")+It(f)}return function(a,i){return t=i,a.replace(e,r)}}(),lu=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,cu=function(){return function(t,r){return t.replace(lu,function(n,a,i,o,s,l){var f=ru(o)-(i?0:r.c),u=tu(l)-(s?0:r.r),g=u==0?"":s?u+1:"["+u+"]",d=f==0?"":i?f+1:"["+f+"]";return a+"R"+g+"C"+d})}}();function nE(e,t){return e.replace(lu,function(r,n,a,i,o,s){return n+(a=="$"?a+i:Bt(ru(i)+t.c))+(o=="$"?o+s:It(tu(s)+t.r))})}function aE(e){return e.length!=1}function st(e){e.l+=1}function Yn(e,t){var r=e.read_shift(t==1?1:2);return[r&16383,r>>14&1,r>>15&1]}function dx(e,t,r){var n=2;if(r){if(r.biff>=2&&r.biff<=5)return hx(e,t,r);r.biff==12&&(n=4)}var a=e.read_shift(n),i=e.read_shift(n),o=Yn(e,2),s=Yn(e,2);return{s:{r:a,c:o[0],cRel:o[1],rRel:o[2]},e:{r:i,c:s[0],cRel:s[1],rRel:s[2]}}}function hx(e){var t=Yn(e,2),r=Yn(e,2),n=e.read_shift(1),a=e.read_shift(1);return{s:{r:t[0],c:n,cRel:t[1],rRel:t[2]},e:{r:r[0],c:a,cRel:r[1],rRel:r[2]}}}function iE(e,t,r){if(r.biff<8)return hx(e,t,r);var n=e.read_shift(r.biff==12?4:2),a=e.read_shift(r.biff==12?4:2),i=Yn(e,2),o=Yn(e,2);return{s:{r:n,c:i[0],cRel:i[1],rRel:i[2]},e:{r:a,c:o[0],cRel:o[1],rRel:o[2]}}}function px(e,t,r){if(r&&r.biff>=2&&r.biff<=5)return oE(e,t,r);var n=e.read_shift(r&&r.biff==12?4:2),a=Yn(e,2);return{r:n,c:a[0],cRel:a[1],rRel:a[2]}}function oE(e){var t=Yn(e,2),r=e.read_shift(1);return{r:t[0],c:r,cRel:t[1],rRel:t[2]}}function sE(e){var t=e.read_shift(2),r=e.read_shift(2);return{r:t,c:r&255,fQuoted:!!(r&16384),cRel:r>>15,rRel:r>>15}}function lE(e,t,r){var n=r&&r.biff?r.biff:8;if(n>=2&&n<=5)return cE(e,t,r);var a=e.read_shift(n>=12?4:2),i=e.read_shift(2),o=(i&16384)>>14,s=(i&32768)>>15;if(i&=16383,s==1)for(;a>524287;)a-=1048576;if(o==1)for(;i>8191;)i=i-16384;return{r:a,c:i,cRel:o,rRel:s}}function cE(e){var t=e.read_shift(2),r=e.read_shift(1),n=(t&32768)>>15,a=(t&16384)>>14;return t&=16383,n==1&&t>=8192&&(t=t-16384),a==1&&r>=128&&(r=r-256),{r:t,c:r,cRel:a,rRel:n}}function fE(e,t,r){var n=(e[e.l++]&96)>>5,a=dx(e,r.biff>=2&&r.biff<=5?6:8,r);return[n,a]}function uE(e,t,r){var n=(e[e.l++]&96)>>5,a=e.read_shift(2,"i"),i=8;if(r)switch(r.biff){case 5:e.l+=12,i=6;break;case 12:i=12;break}var o=dx(e,i,r);return[n,a,o]}function dE(e,t,r){var n=(e[e.l++]&96)>>5;return e.l+=r&&r.biff>8?12:r.biff<8?6:8,[n]}function hE(e,t,r){var n=(e[e.l++]&96)>>5,a=e.read_shift(2),i=8;if(r)switch(r.biff){case 5:e.l+=12,i=6;break;case 12:i=12;break}return e.l+=i,[n,a]}function pE(e,t,r){var n=(e[e.l++]&96)>>5,a=iE(e,t-1,r);return[n,a]}function gE(e,t,r){var n=(e[e.l++]&96)>>5;return e.l+=r.biff==2?6:r.biff==12?14:7,[n]}function tg(e){var t=e[e.l+1]&1,r=1;return e.l+=4,[t,r]}function xE(e,t,r){e.l+=2;for(var n=e.read_shift(r&&r.biff==2?1:2),a=[],i=0;i<=n;++i)a.push(e.read_shift(r&&r.biff==2?1:2));return a}function mE(e,t,r){var n=e[e.l+1]&255?1:0;return e.l+=2,[n,e.read_shift(r&&r.biff==2?1:2)]}function vE(e,t,r){var n=e[e.l+1]&255?1:0;return e.l+=2,[n,e.read_shift(r&&r.biff==2?1:2)]}function wE(e){var t=e[e.l+1]&255?1:0;return e.l+=2,[t,e.read_shift(2)]}function yE(e,t,r){var n=e[e.l+1]&255?1:0;return e.l+=r&&r.biff==2?3:4,[n]}function gx(e){var t=e.read_shift(1),r=e.read_shift(1);return[t,r]}function EE(e){return e.read_shift(2),gx(e,2)}function _E(e){return e.read_shift(2),gx(e,2)}function kE(e,t,r){var n=(e[e.l]&96)>>5;e.l+=1;var a=px(e,0,r);return[n,a]}function bE(e,t,r){var n=(e[e.l]&96)>>5;e.l+=1;var a=lE(e,0,r);return[n,a]}function TE(e,t,r){var n=(e[e.l]&96)>>5;e.l+=1;var a=e.read_shift(2);r&&r.biff==5&&(e.l+=12);var i=px(e,0,r);return[n,a,i]}function SE(e,t,r){var n=(e[e.l]&96)>>5;e.l+=1;var a=e.read_shift(r&&r.biff<=3?1:2);return[S_[a],vx[a],n]}function CE(e,t,r){var n=e[e.l++],a=e.read_shift(1),i=r&&r.biff<=3?[n==88?-1:0,e.read_shift(1)]:AE(e);return[a,(i[0]===0?vx:T_)[i[1]]]}function AE(e){return[e[e.l+1]>>7,e.read_shift(2)&32767]}function FE(e,t,r){e.l+=r&&r.biff==2?3:4}function PE(e,t,r){if(e.l++,r&&r.biff==12)return[e.read_shift(4,"i"),0];var n=e.read_shift(2),a=e.read_shift(r&&r.biff==2?1:2);return[n,a]}function IE(e){return e.l++,Uo[e.read_shift(1)]}function NE(e){return e.l++,e.read_shift(2)}function LE(e){return e.l++,e.read_shift(1)!==0}function DE(e){return e.l++,bi(e,8)}function OE(e,t,r){return e.l++,Jg(e,t-1,r)}function RE(e,t){var r=[e.read_shift(1)];if(t==12)switch(r[0]){case 2:r[0]=4;break;case 4:r[0]=16;break;case 0:r[0]=1;break;case 1:r[0]=2;break}switch(r[0]){case 4:r[1]=Ty(e,1)?"TRUE":"FALSE",t!=12&&(e.l+=7);break;case 37:case 16:r[1]=Uo[e[e.l]],e.l+=t==12?4:8;break;case 0:e.l+=8;break;case 1:r[1]=bi(e,8);break;case 2:r[1]=Fy(e,0,{biff:t>0&&t<8?2:t});break;default:throw new Error("Bad SerAr: "+r[0])}return r}function ME(e,t,r){for(var n=e.read_shift(r.biff==12?4:2),a=[],i=0;i!=n;++i)a.push((r.biff==12?Ca:Ny)(e,8));return a}function BE(e,t,r){var n=0,a=0;r.biff==12?(n=e.read_shift(4),a=e.read_shift(4)):(a=1+e.read_shift(1),n=1+e.read_shift(2)),r.biff>=2&&r.biff<8&&(--n,--a==0&&(a=256));for(var i=0,o=[];i!=n&&(o[i]=[]);++i)for(var s=0;s!=a;++s)o[i][s]=RE(e,r.biff);return o}function UE(e,t,r){var n=e.read_shift(1)>>>5&3,a=!r||r.biff>=8?4:2,i=e.read_shift(a);switch(r.biff){case 2:e.l+=5;break;case 3:case 4:e.l+=8;break;case 5:e.l+=12;break}return[n,0,i]}function zE(e,t,r){if(r.biff==5)return HE(e,t,r);var n=e.read_shift(1)>>>5&3,a=e.read_shift(2),i=e.read_shift(4);return[n,a,i]}function HE(e){var t=e.read_shift(1)>>>5&3,r=e.read_shift(2,"i");e.l+=8;var n=e.read_shift(2);return e.l+=12,[t,r,n]}function WE(e,t,r){var n=e.read_shift(1)>>>5&3;e.l+=r&&r.biff==2?3:4;var a=e.read_shift(r&&r.biff==2?1:2);return[n,a]}function GE(e,t,r){var n=e.read_shift(1)>>>5&3,a=e.read_shift(r&&r.biff==2?1:2);return[n,a]}function VE(e,t,r){var n=e.read_shift(1)>>>5&3;return e.l+=4,r.biff<8&&e.l--,r.biff==12&&(e.l+=2),[n]}function XE(e,t,r){var n=(e[e.l++]&96)>>5,a=e.read_shift(2),i=4;if(r)switch(r.biff){case 5:i=15;break;case 12:i=6;break}return e.l+=i,[n,a]}var jE=Zr,$E=Zr,YE=Zr;function zo(e,t,r){return e.l+=2,[sE(e,4,r)]}function fu(e){return e.l+=6,[]}var KE=zo,QE=fu,JE=fu,ZE=zo;function xx(e){return e.l+=2,[Kg(e),e.read_shift(2)&1]}var qE=zo,e_=xx,t_=fu,r_=zo,n_=zo,a_=["Data","All","Headers","??","?Data2","??","?DataHeaders","??","Totals","??","??","??","?DataTotals","??","??","??","?Current"];function i_(e){e.l+=2;var t=e.read_shift(2),r=e.read_shift(2),n=e.read_shift(4),a=e.read_shift(2),i=e.read_shift(2),o=a_[r>>2&31];return{ixti:t,coltype:r&3,rt:o,idx:n,c:a,C:i}}function o_(e){return e.l+=2,[e.read_shift(4)]}function s_(e,t,r){return e.l+=5,e.l+=2,e.l+=r.biff==2?1:4,["PTGSHEET"]}function l_(e,t,r){return e.l+=r.biff==2?4:5,["PTGENDSHEET"]}function c_(e){var t=e.read_shift(1)>>>5&3,r=e.read_shift(2);return[t,r]}function f_(e){var t=e.read_shift(1)>>>5&3,r=e.read_shift(2);return[t,r]}function u_(e){return e.l+=4,[0,0]}var rg={1:{n:"PtgExp",f:PE},2:{n:"PtgTbl",f:YE},3:{n:"PtgAdd",f:st},4:{n:"PtgSub",f:st},5:{n:"PtgMul",f:st},6:{n:"PtgDiv",f:st},7:{n:"PtgPower",f:st},8:{n:"PtgConcat",f:st},9:{n:"PtgLt",f:st},10:{n:"PtgLe",f:st},11:{n:"PtgEq",f:st},12:{n:"PtgGe",f:st},13:{n:"PtgGt",f:st},14:{n:"PtgNe",f:st},15:{n:"PtgIsect",f:st},16:{n:"PtgUnion",f:st},17:{n:"PtgRange",f:st},18:{n:"PtgUplus",f:st},19:{n:"PtgUminus",f:st},20:{n:"PtgPercent",f:st},21:{n:"PtgParen",f:st},22:{n:"PtgMissArg",f:st},23:{n:"PtgStr",f:OE},26:{n:"PtgSheet",f:s_},27:{n:"PtgEndSheet",f:l_},28:{n:"PtgErr",f:IE},29:{n:"PtgBool",f:LE},30:{n:"PtgInt",f:NE},31:{n:"PtgNum",f:DE},32:{n:"PtgArray",f:gE},33:{n:"PtgFunc",f:SE},34:{n:"PtgFuncVar",f:CE},35:{n:"PtgName",f:UE},36:{n:"PtgRef",f:kE},37:{n:"PtgArea",f:fE},38:{n:"PtgMemArea",f:WE},39:{n:"PtgMemErr",f:jE},40:{n:"PtgMemNoMem",f:$E},41:{n:"PtgMemFunc",f:GE},42:{n:"PtgRefErr",f:VE},43:{n:"PtgAreaErr",f:dE},44:{n:"PtgRefN",f:bE},45:{n:"PtgAreaN",f:pE},46:{n:"PtgMemAreaN",f:c_},47:{n:"PtgMemNoMemN",f:f_},57:{n:"PtgNameX",f:zE},58:{n:"PtgRef3d",f:TE},59:{n:"PtgArea3d",f:uE},60:{n:"PtgRefErr3d",f:XE},61:{n:"PtgAreaErr3d",f:hE},255:{}},d_={64:32,96:32,65:33,97:33,66:34,98:34,67:35,99:35,68:36,100:36,69:37,101:37,70:38,102:38,71:39,103:39,72:40,104:40,73:41,105:41,74:42,106:42,75:43,107:43,76:44,108:44,77:45,109:45,78:46,110:46,79:47,111:47,88:34,120:34,89:57,121:57,90:58,122:58,91:59,123:59,92:60,124:60,93:61,125:61},h_={1:{n:"PtgElfLel",f:xx},2:{n:"PtgElfRw",f:r_},3:{n:"PtgElfCol",f:KE},6:{n:"PtgElfRwV",f:n_},7:{n:"PtgElfColV",f:ZE},10:{n:"PtgElfRadical",f:qE},11:{n:"PtgElfRadicalS",f:t_},13:{n:"PtgElfColS",f:QE},15:{n:"PtgElfColSV",f:JE},16:{n:"PtgElfRadicalLel",f:e_},25:{n:"PtgList",f:i_},29:{n:"PtgSxName",f:o_},255:{}},p_={0:{n:"PtgAttrNoop",f:u_},1:{n:"PtgAttrSemi",f:yE},2:{n:"PtgAttrIf",f:vE},4:{n:"PtgAttrChoose",f:xE},8:{n:"PtgAttrGoto",f:mE},16:{n:"PtgAttrSum",f:FE},32:{n:"PtgAttrBaxcel",f:tg},33:{n:"PtgAttrBaxcel",f:tg},64:{n:"PtgAttrSpace",f:EE},65:{n:"PtgAttrSpaceSemi",f:_E},128:{n:"PtgAttrIfError",f:wE},255:{}};function g_(e,t,r,n){if(n.biff<8)return Zr(e,t);for(var a=e.l+t,i=[],o=0;o!==r.length;++o)switch(r[o][0]){case"PtgArray":r[o][1]=BE(e,0,n),i.push(r[o][1]);break;case"PtgMemArea":r[o][2]=ME(e,r[o][1],n),i.push(r[o][2]);break;case"PtgExp":n&&n.biff==12&&(r[o][1][1]=e.read_shift(4),i.push(r[o][1]));break;case"PtgList":case"PtgElfRadicalS":case"PtgElfColS":case"PtgElfColSV":throw"Unsupported "+r[o][0];default:break}return t=a-e.l,t!==0&&i.push(Zr(e,t)),i}function x_(e,t,r){for(var n=e.l+t,a,i,o=[];n!=e.l;)t=n-e.l,i=e[e.l],a=rg[i]||rg[d_[i]],(i===24||i===25)&&(a=(i===24?h_:p_)[e[e.l+1]]),!a||!a.f?Zr(e,t):o.push([a.n,a.f(e,t,r)]);return o}function m_(e){for(var t=[],r=0;r<e.length;++r){for(var n=e[r],a=[],i=0;i<n.length;++i){var o=n[i];if(o)switch(o[0]){case 2:a.push('"'+o[1].replace(/"/g,'""')+'"');break;default:a.push(o[1])}else a.push("")}t.push(a.join(","))}return t.join(";")}var v_={PtgAdd:"+",PtgConcat:"&",PtgDiv:"/",PtgEq:"=",PtgGe:">=",PtgGt:">",PtgLe:"<=",PtgLt:"<",PtgMul:"*",PtgNe:"<>",PtgPower:"^",PtgSub:"-"};function w_(e,t){if(!e&&!(t&&t.biff<=5&&t.biff>=2))throw new Error("empty sheet name");return/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e)?"'"+e+"'":e}function mx(e,t,r){if(!e)return"SH33TJSERR0";if(r.biff>8&&(!e.XTI||!e.XTI[t]))return e.SheetNames[t];if(!e.XTI)return"SH33TJSERR6";var n=e.XTI[t];if(r.biff<8)return t>1e4&&(t-=65536),t<0&&(t=-t),t==0?"":e.XTI[t-1];if(!n)return"SH33TJSERR1";var a="";if(r.biff>8)switch(e[n[0]][0]){case 357:return a=n[1]==-1?"#REF":e.SheetNames[n[1]],n[1]==n[2]?a:a+":"+e.SheetNames[n[2]];case 358:return r.SID!=null?e.SheetNames[r.SID]:"SH33TJSSAME"+e[n[0]][0];case 355:default:return"SH33TJSSRC"+e[n[0]][0]}switch(e[n[0]][0][0]){case 1025:return a=n[1]==-1?"#REF":e.SheetNames[n[1]]||"SH33TJSERR3",n[1]==n[2]?a:a+":"+e.SheetNames[n[2]];case 14849:return e[n[0]].slice(1).map(function(i){return i.Name}).join(";;");default:return e[n[0]][0][3]?(a=n[1]==-1?"#REF":e[n[0]][0][3][n[1]]||"SH33TJSERR4",n[1]==n[2]?a:a+":"+e[n[0]][0][3][n[2]]):"SH33TJSERR2"}}function ng(e,t,r){var n=mx(e,t,r);return n=="#REF"?n:w_(n,r)}function wi(e,t,r,n,a){var i=a&&a.biff||8,o={s:{c:0,r:0},e:{c:0,r:0}},s=[],l,f,u,g=0,d=0,p,x="";if(!e[0]||!e[0][0])return"";for(var h=-1,v="",w=0,m=e[0].length;w<m;++w){var E=e[0][w];switch(E[0]){case"PtgUminus":s.push("-"+s.pop());break;case"PtgUplus":s.push("+"+s.pop());break;case"PtgPercent":s.push(s.pop()+"%");break;case"PtgAdd":case"PtgConcat":case"PtgDiv":case"PtgEq":case"PtgGe":case"PtgGt":case"PtgLe":case"PtgLt":case"PtgMul":case"PtgNe":case"PtgPower":case"PtgSub":if(l=s.pop(),f=s.pop(),h>=0){switch(e[0][h][1][0]){case 0:v=Ze(" ",e[0][h][1][1]);break;case 1:v=Ze("\r",e[0][h][1][1]);break;default:if(v="",a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][h][1][0])}f=f+v,h=-1}s.push(f+v_[E[0]]+l);break;case"PtgIsect":l=s.pop(),f=s.pop(),s.push(f+" "+l);break;case"PtgUnion":l=s.pop(),f=s.pop(),s.push(f+","+l);break;case"PtgRange":l=s.pop(),f=s.pop(),s.push(f+":"+l);break;case"PtgAttrChoose":break;case"PtgAttrGoto":break;case"PtgAttrIf":break;case"PtgAttrIfError":break;case"PtgRef":u=Co(E[1][1],o,a),s.push(Ao(u,i));break;case"PtgRefN":u=r?Co(E[1][1],r,a):E[1][1],s.push(Ao(u,i));break;case"PtgRef3d":g=E[1][1],u=Co(E[1][2],o,a),x=ng(n,g,a);var F=x;s.push(x+"!"+Ao(u,i));break;case"PtgFunc":case"PtgFuncVar":var P=E[1][0],D=E[1][1];P||(P=0),P&=127;var k=P==0?[]:s.slice(-P);s.length-=P,D==="User"&&(D=k.shift()),s.push(D+"("+k.join(",")+")");break;case"PtgBool":s.push(E[1]?"TRUE":"FALSE");break;case"PtgInt":s.push(E[1]);break;case"PtgNum":s.push(String(E[1]));break;case"PtgStr":s.push('"'+E[1].replace(/"/g,'""')+'"');break;case"PtgErr":s.push(E[1]);break;case"PtgAreaN":p=H1(E[1][1],r?{s:r}:o,a),s.push(Lf(p,a));break;case"PtgArea":p=H1(E[1][1],o,a),s.push(Lf(p,a));break;case"PtgArea3d":g=E[1][1],p=E[1][2],x=ng(n,g,a),s.push(x+"!"+Lf(p,a));break;case"PtgAttrSum":s.push("SUM("+s.pop()+")");break;case"PtgAttrBaxcel":case"PtgAttrSemi":break;case"PtgName":d=E[1][2];var L=(n.names||[])[d-1]||(n[0]||[])[d],M=L?L.Name:"SH33TJSNAME"+String(d);M&&M.slice(0,6)=="_xlfn."&&!a.xlfn&&(M=M.slice(6)),s.push(M);break;case"PtgNameX":var R=E[1][1];d=E[1][2];var X;if(a.biff<=5)R<0&&(R=-R),n[R]&&(X=n[R][d]);else{var J="";if(((n[R]||[])[0]||[])[0]==14849||(((n[R]||[])[0]||[])[0]==1025?n[R][d]&&n[R][d].itab>0&&(J=n.SheetNames[n[R][d].itab-1]+"!"):J=n.SheetNames[d-1]+"!"),n[R]&&n[R][d])J+=n[R][d].Name;else if(n[0]&&n[0][d])J+=n[0][d].Name;else{var ce=(mx(n,R,a)||"").split(";;");ce[d-1]?J=ce[d-1]:J+="SH33TJSERRX"}s.push(J);break}X||(X={Name:"SH33TJSERRY"}),s.push(X.Name);break;case"PtgParen":var ye="(",he=")";if(h>=0){switch(v="",e[0][h][1][0]){case 2:ye=Ze(" ",e[0][h][1][1])+ye;break;case 3:ye=Ze("\r",e[0][h][1][1])+ye;break;case 4:he=Ze(" ",e[0][h][1][1])+he;break;case 5:he=Ze("\r",e[0][h][1][1])+he;break;default:if(a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][h][1][0])}h=-1}s.push(ye+s.pop()+he);break;case"PtgRefErr":s.push("#REF!");break;case"PtgRefErr3d":s.push("#REF!");break;case"PtgExp":u={c:E[1][1],r:E[1][0]};var Ue={c:r.c,r:r.r};if(n.sharedf[Ie(u)]){var Ve=n.sharedf[Ie(u)];s.push(wi(Ve,o,Ue,n,a))}else{var et=!1;for(l=0;l!=n.arrayf.length;++l)if(f=n.arrayf[l],!(u.c<f[0].s.c||u.c>f[0].e.c)&&!(u.r<f[0].s.r||u.r>f[0].e.r)){s.push(wi(f[1],o,Ue,n,a)),et=!0;break}et||s.push(E[1])}break;case"PtgArray":s.push("{"+m_(E[1])+"}");break;case"PtgMemArea":break;case"PtgAttrSpace":case"PtgAttrSpaceSemi":h=w;break;case"PtgTbl":break;case"PtgMemErr":break;case"PtgMissArg":s.push("");break;case"PtgAreaErr":s.push("#REF!");break;case"PtgAreaErr3d":s.push("#REF!");break;case"PtgList":s.push("Table"+E[1].idx+"[#"+E[1].rt+"]");break;case"PtgMemAreaN":case"PtgMemNoMemN":case"PtgAttrNoop":case"PtgSheet":case"PtgEndSheet":break;case"PtgMemFunc":break;case"PtgMemNoMem":break;case"PtgElfCol":case"PtgElfColS":case"PtgElfColSV":case"PtgElfColV":case"PtgElfLel":case"PtgElfRadical":case"PtgElfRadicalLel":case"PtgElfRadicalS":case"PtgElfRw":case"PtgElfRwV":throw new Error("Unsupported ELFs");case"PtgSxName":throw new Error("Unrecognized Formula Token: "+String(E));default:throw new Error("Unrecognized Formula Token: "+String(E))}var tt=["PtgAttrSpace","PtgAttrSpaceSemi","PtgAttrGoto"];if(a.biff!=3&&h>=0&&tt.indexOf(e[0][w][0])==-1){E=e[0][h];var rt=!0;switch(E[1][0]){case 4:rt=!1;case 0:v=Ze(" ",E[1][1]);break;case 5:rt=!1;case 1:v=Ze("\r",E[1][1]);break;default:if(v="",a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+E[1][0])}s.push((rt?v:"")+s.pop()+(rt?"":v)),h=-1}}if(s.length>1&&a.WTF)throw new Error("bad formula stack");return s[0]}function y_(e){if(e==null){var t=G(8);return t.write_shift(1,3),t.write_shift(1,0),t.write_shift(2,0),t.write_shift(2,0),t.write_shift(2,65535),t}else if(typeof e=="number")return Ea(e);return Ea(0)}function E_(e,t,r,n,a){var i=_a(t,r,a),o=y_(e.v),s=G(6),l=33;s.write_shift(2,l),s.write_shift(4,0);for(var f=G(e.bf.length),u=0;u<e.bf.length;++u)f[u]=e.bf[u];var g=Ft([i,o,s,f]);return g}function $l(e,t,r){var n=e.read_shift(4),a=x_(e,n,r),i=e.read_shift(4),o=i>0?g_(e,i,a,r):null;return[a,o]}var __=$l,Yl=$l,k_=$l,b_=$l,T_={0:"BEEP",1:"OPEN",2:"OPEN.LINKS",3:"CLOSE.ALL",4:"SAVE",5:"SAVE.AS",6:"FILE.DELETE",7:"PAGE.SETUP",8:"PRINT",9:"PRINTER.SETUP",10:"QUIT",11:"NEW.WINDOW",12:"ARRANGE.ALL",13:"WINDOW.SIZE",14:"WINDOW.MOVE",15:"FULL",16:"CLOSE",17:"RUN",22:"SET.PRINT.AREA",23:"SET.PRINT.TITLES",24:"SET.PAGE.BREAK",25:"REMOVE.PAGE.BREAK",26:"FONT",27:"DISPLAY",28:"PROTECT.DOCUMENT",29:"PRECISION",30:"A1.R1C1",31:"CALCULATE.NOW",32:"CALCULATION",34:"DATA.FIND",35:"EXTRACT",36:"DATA.DELETE",37:"SET.DATABASE",38:"SET.CRITERIA",39:"SORT",40:"DATA.SERIES",41:"TABLE",42:"FORMAT.NUMBER",43:"ALIGNMENT",44:"STYLE",45:"BORDER",46:"CELL.PROTECTION",47:"COLUMN.WIDTH",48:"UNDO",49:"CUT",50:"COPY",51:"PASTE",52:"CLEAR",53:"PASTE.SPECIAL",54:"EDIT.DELETE",55:"INSERT",56:"FILL.RIGHT",57:"FILL.DOWN",61:"DEFINE.NAME",62:"CREATE.NAMES",63:"FORMULA.GOTO",64:"FORMULA.FIND",65:"SELECT.LAST.CELL",66:"SHOW.ACTIVE.CELL",67:"GALLERY.AREA",68:"GALLERY.BAR",69:"GALLERY.COLUMN",70:"GALLERY.LINE",71:"GALLERY.PIE",72:"GALLERY.SCATTER",73:"COMBINATION",74:"PREFERRED",75:"ADD.OVERLAY",76:"GRIDLINES",77:"SET.PREFERRED",78:"AXES",79:"LEGEND",80:"ATTACH.TEXT",81:"ADD.ARROW",82:"SELECT.CHART",83:"SELECT.PLOT.AREA",84:"PATTERNS",85:"MAIN.CHART",86:"OVERLAY",87:"SCALE",88:"FORMAT.LEGEND",89:"FORMAT.TEXT",90:"EDIT.REPEAT",91:"PARSE",92:"JUSTIFY",93:"HIDE",94:"UNHIDE",95:"WORKSPACE",96:"FORMULA",97:"FORMULA.FILL",98:"FORMULA.ARRAY",99:"DATA.FIND.NEXT",100:"DATA.FIND.PREV",101:"FORMULA.FIND.NEXT",102:"FORMULA.FIND.PREV",103:"ACTIVATE",104:"ACTIVATE.NEXT",105:"ACTIVATE.PREV",106:"UNLOCKED.NEXT",107:"UNLOCKED.PREV",108:"COPY.PICTURE",109:"SELECT",110:"DELETE.NAME",111:"DELETE.FORMAT",112:"VLINE",113:"HLINE",114:"VPAGE",115:"HPAGE",116:"VSCROLL",117:"HSCROLL",118:"ALERT",119:"NEW",120:"CANCEL.COPY",121:"SHOW.CLIPBOARD",122:"MESSAGE",124:"PASTE.LINK",125:"APP.ACTIVATE",126:"DELETE.ARROW",127:"ROW.HEIGHT",128:"FORMAT.MOVE",129:"FORMAT.SIZE",130:"FORMULA.REPLACE",131:"SEND.KEYS",132:"SELECT.SPECIAL",133:"APPLY.NAMES",134:"REPLACE.FONT",135:"FREEZE.PANES",136:"SHOW.INFO",137:"SPLIT",138:"ON.WINDOW",139:"ON.DATA",140:"DISABLE.INPUT",142:"OUTLINE",143:"LIST.NAMES",144:"FILE.CLOSE",145:"SAVE.WORKBOOK",146:"DATA.FORM",147:"COPY.CHART",148:"ON.TIME",149:"WAIT",150:"FORMAT.FONT",151:"FILL.UP",152:"FILL.LEFT",153:"DELETE.OVERLAY",155:"SHORT.MENUS",159:"SET.UPDATE.STATUS",161:"COLOR.PALETTE",162:"DELETE.STYLE",163:"WINDOW.RESTORE",164:"WINDOW.MAXIMIZE",166:"CHANGE.LINK",167:"CALCULATE.DOCUMENT",168:"ON.KEY",169:"APP.RESTORE",170:"APP.MOVE",171:"APP.SIZE",172:"APP.MINIMIZE",173:"APP.MAXIMIZE",174:"BRING.TO.FRONT",175:"SEND.TO.BACK",185:"MAIN.CHART.TYPE",186:"OVERLAY.CHART.TYPE",187:"SELECT.END",188:"OPEN.MAIL",189:"SEND.MAIL",190:"STANDARD.FONT",191:"CONSOLIDATE",192:"SORT.SPECIAL",193:"GALLERY.3D.AREA",194:"GALLERY.3D.COLUMN",195:"GALLERY.3D.LINE",196:"GALLERY.3D.PIE",197:"VIEW.3D",198:"GOAL.SEEK",199:"WORKGROUP",200:"FILL.GROUP",201:"UPDATE.LINK",202:"PROMOTE",203:"DEMOTE",204:"SHOW.DETAIL",206:"UNGROUP",207:"OBJECT.PROPERTIES",208:"SAVE.NEW.OBJECT",209:"SHARE",210:"SHARE.NAME",211:"DUPLICATE",212:"APPLY.STYLE",213:"ASSIGN.TO.OBJECT",214:"OBJECT.PROTECTION",215:"HIDE.OBJECT",216:"SET.EXTRACT",217:"CREATE.PUBLISHER",218:"SUBSCRIBE.TO",219:"ATTRIBUTES",220:"SHOW.TOOLBAR",222:"PRINT.PREVIEW",223:"EDIT.COLOR",224:"SHOW.LEVELS",225:"FORMAT.MAIN",226:"FORMAT.OVERLAY",227:"ON.RECALC",228:"EDIT.SERIES",229:"DEFINE.STYLE",240:"LINE.PRINT",243:"ENTER.DATA",249:"GALLERY.RADAR",250:"MERGE.STYLES",251:"EDITION.OPTIONS",252:"PASTE.PICTURE",253:"PASTE.PICTURE.LINK",254:"SPELLING",256:"ZOOM",259:"INSERT.OBJECT",260:"WINDOW.MINIMIZE",265:"SOUND.NOTE",266:"SOUND.PLAY",267:"FORMAT.SHAPE",268:"EXTEND.POLYGON",269:"FORMAT.AUTO",272:"GALLERY.3D.BAR",273:"GALLERY.3D.SURFACE",274:"FILL.AUTO",276:"CUSTOMIZE.TOOLBAR",277:"ADD.TOOL",278:"EDIT.OBJECT",279:"ON.DOUBLECLICK",280:"ON.ENTRY",281:"WORKBOOK.ADD",282:"WORKBOOK.MOVE",283:"WORKBOOK.COPY",284:"WORKBOOK.OPTIONS",285:"SAVE.WORKSPACE",288:"CHART.WIZARD",289:"DELETE.TOOL",290:"MOVE.TOOL",291:"WORKBOOK.SELECT",292:"WORKBOOK.ACTIVATE",293:"ASSIGN.TO.TOOL",295:"COPY.TOOL",296:"RESET.TOOL",297:"CONSTRAIN.NUMERIC",298:"PASTE.TOOL",302:"WORKBOOK.NEW",305:"SCENARIO.CELLS",306:"SCENARIO.DELETE",307:"SCENARIO.ADD",308:"SCENARIO.EDIT",309:"SCENARIO.SHOW",310:"SCENARIO.SHOW.NEXT",311:"SCENARIO.SUMMARY",312:"PIVOT.TABLE.WIZARD",313:"PIVOT.FIELD.PROPERTIES",314:"PIVOT.FIELD",315:"PIVOT.ITEM",316:"PIVOT.ADD.FIELDS",318:"OPTIONS.CALCULATION",319:"OPTIONS.EDIT",320:"OPTIONS.VIEW",321:"ADDIN.MANAGER",322:"MENU.EDITOR",323:"ATTACH.TOOLBARS",324:"VBAActivate",325:"OPTIONS.CHART",328:"VBA.INSERT.FILE",330:"VBA.PROCEDURE.DEFINITION",336:"ROUTING.SLIP",338:"ROUTE.DOCUMENT",339:"MAIL.LOGON",342:"INSERT.PICTURE",343:"EDIT.TOOL",344:"GALLERY.DOUGHNUT",350:"CHART.TREND",352:"PIVOT.ITEM.PROPERTIES",354:"WORKBOOK.INSERT",355:"OPTIONS.TRANSITION",356:"OPTIONS.GENERAL",370:"FILTER.ADVANCED",373:"MAIL.ADD.MAILER",374:"MAIL.DELETE.MAILER",375:"MAIL.REPLY",376:"MAIL.REPLY.ALL",377:"MAIL.FORWARD",378:"MAIL.NEXT.LETTER",379:"DATA.LABEL",380:"INSERT.TITLE",381:"FONT.PROPERTIES",382:"MACRO.OPTIONS",383:"WORKBOOK.HIDE",384:"WORKBOOK.UNHIDE",385:"WORKBOOK.DELETE",386:"WORKBOOK.NAME",388:"GALLERY.CUSTOM",390:"ADD.CHART.AUTOFORMAT",391:"DELETE.CHART.AUTOFORMAT",392:"CHART.ADD.DATA",393:"AUTO.OUTLINE",394:"TAB.ORDER",395:"SHOW.DIALOG",396:"SELECT.ALL",397:"UNGROUP.SHEETS",398:"SUBTOTAL.CREATE",399:"SUBTOTAL.REMOVE",400:"RENAME.OBJECT",412:"WORKBOOK.SCROLL",413:"WORKBOOK.NEXT",414:"WORKBOOK.PREV",415:"WORKBOOK.TAB.SPLIT",416:"FULL.SCREEN",417:"WORKBOOK.PROTECT",420:"SCROLLBAR.PROPERTIES",421:"PIVOT.SHOW.PAGES",422:"TEXT.TO.COLUMNS",423:"FORMAT.CHARTTYPE",424:"LINK.FORMAT",425:"TRACER.DISPLAY",430:"TRACER.NAVIGATE",431:"TRACER.CLEAR",432:"TRACER.ERROR",433:"PIVOT.FIELD.GROUP",434:"PIVOT.FIELD.UNGROUP",435:"CHECKBOX.PROPERTIES",436:"LABEL.PROPERTIES",437:"LISTBOX.PROPERTIES",438:"EDITBOX.PROPERTIES",439:"PIVOT.REFRESH",440:"LINK.COMBO",441:"OPEN.TEXT",442:"HIDE.DIALOG",443:"SET.DIALOG.FOCUS",444:"ENABLE.OBJECT",445:"PUSHBUTTON.PROPERTIES",446:"SET.DIALOG.DEFAULT",447:"FILTER",448:"FILTER.SHOW.ALL",449:"CLEAR.OUTLINE",450:"FUNCTION.WIZARD",451:"ADD.LIST.ITEM",452:"SET.LIST.ITEM",453:"REMOVE.LIST.ITEM",454:"SELECT.LIST.ITEM",455:"SET.CONTROL.VALUE",456:"SAVE.COPY.AS",458:"OPTIONS.LISTS.ADD",459:"OPTIONS.LISTS.DELETE",460:"SERIES.AXES",461:"SERIES.X",462:"SERIES.Y",463:"ERRORBAR.X",464:"ERRORBAR.Y",465:"FORMAT.CHART",466:"SERIES.ORDER",467:"MAIL.LOGOFF",468:"CLEAR.ROUTING.SLIP",469:"APP.ACTIVATE.MICROSOFT",470:"MAIL.EDIT.MAILER",471:"ON.SHEET",472:"STANDARD.WIDTH",473:"SCENARIO.MERGE",474:"SUMMARY.INFO",475:"FIND.FILE",476:"ACTIVE.CELL.FONT",477:"ENABLE.TIPWIZARD",478:"VBA.MAKE.ADDIN",480:"INSERTDATATABLE",481:"WORKGROUP.OPTIONS",482:"MAIL.SEND.MAILER",485:"AUTOCORRECT",489:"POST.DOCUMENT",491:"PICKLIST",493:"VIEW.SHOW",494:"VIEW.DEFINE",495:"VIEW.DELETE",509:"SHEET.BACKGROUND",510:"INSERT.MAP.OBJECT",511:"OPTIONS.MENONO",517:"MSOCHECKS",518:"NORMAL",519:"LAYOUT",520:"RM.PRINT.AREA",521:"CLEAR.PRINT.AREA",522:"ADD.PRINT.AREA",523:"MOVE.BRK",545:"HIDECURR.NOTE",546:"HIDEALL.NOTES",547:"DELETE.NOTE",548:"TRAVERSE.NOTES",549:"ACTIVATE.NOTES",620:"PROTECT.REVISIONS",621:"UNPROTECT.REVISIONS",647:"OPTIONS.ME",653:"WEB.PUBLISH",667:"NEWWEBQUERY",673:"PIVOT.TABLE.CHART",753:"OPTIONS.SAVE",755:"OPTIONS.SPELL",808:"HIDEALL.INKANNOTS"},vx={0:"COUNT",1:"IF",2:"ISNA",3:"ISERROR",4:"SUM",5:"AVERAGE",6:"MIN",7:"MAX",8:"ROW",9:"COLUMN",10:"NA",11:"NPV",12:"STDEV",13:"DOLLAR",14:"FIXED",15:"SIN",16:"COS",17:"TAN",18:"ATAN",19:"PI",20:"SQRT",21:"EXP",22:"LN",23:"LOG10",24:"ABS",25:"INT",26:"SIGN",27:"ROUND",28:"LOOKUP",29:"INDEX",30:"REPT",31:"MID",32:"LEN",33:"VALUE",34:"TRUE",35:"FALSE",36:"AND",37:"OR",38:"NOT",39:"MOD",40:"DCOUNT",41:"DSUM",42:"DAVERAGE",43:"DMIN",44:"DMAX",45:"DSTDEV",46:"VAR",47:"DVAR",48:"TEXT",49:"LINEST",50:"TREND",51:"LOGEST",52:"GROWTH",53:"GOTO",54:"HALT",55:"RETURN",56:"PV",57:"FV",58:"NPER",59:"PMT",60:"RATE",61:"MIRR",62:"IRR",63:"RAND",64:"MATCH",65:"DATE",66:"TIME",67:"DAY",68:"MONTH",69:"YEAR",70:"WEEKDAY",71:"HOUR",72:"MINUTE",73:"SECOND",74:"NOW",75:"AREAS",76:"ROWS",77:"COLUMNS",78:"OFFSET",79:"ABSREF",80:"RELREF",81:"ARGUMENT",82:"SEARCH",83:"TRANSPOSE",84:"ERROR",85:"STEP",86:"TYPE",87:"ECHO",88:"SET.NAME",89:"CALLER",90:"DEREF",91:"WINDOWS",92:"SERIES",93:"DOCUMENTS",94:"ACTIVE.CELL",95:"SELECTION",96:"RESULT",97:"ATAN2",98:"ASIN",99:"ACOS",100:"CHOOSE",101:"HLOOKUP",102:"VLOOKUP",103:"LINKS",104:"INPUT",105:"ISREF",106:"GET.FORMULA",107:"GET.NAME",108:"SET.VALUE",109:"LOG",110:"EXEC",111:"CHAR",112:"LOWER",113:"UPPER",114:"PROPER",115:"LEFT",116:"RIGHT",117:"EXACT",118:"TRIM",119:"REPLACE",120:"SUBSTITUTE",121:"CODE",122:"NAMES",123:"DIRECTORY",124:"FIND",125:"CELL",126:"ISERR",127:"ISTEXT",128:"ISNUMBER",129:"ISBLANK",130:"T",131:"N",132:"FOPEN",133:"FCLOSE",134:"FSIZE",135:"FREADLN",136:"FREAD",137:"FWRITELN",138:"FWRITE",139:"FPOS",140:"DATEVALUE",141:"TIMEVALUE",142:"SLN",143:"SYD",144:"DDB",145:"GET.DEF",146:"REFTEXT",147:"TEXTREF",148:"INDIRECT",149:"REGISTER",150:"CALL",151:"ADD.BAR",152:"ADD.MENU",153:"ADD.COMMAND",154:"ENABLE.COMMAND",155:"CHECK.COMMAND",156:"RENAME.COMMAND",157:"SHOW.BAR",158:"DELETE.MENU",159:"DELETE.COMMAND",160:"GET.CHART.ITEM",161:"DIALOG.BOX",162:"CLEAN",163:"MDETERM",164:"MINVERSE",165:"MMULT",166:"FILES",167:"IPMT",168:"PPMT",169:"COUNTA",170:"CANCEL.KEY",171:"FOR",172:"WHILE",173:"BREAK",174:"NEXT",175:"INITIATE",176:"REQUEST",177:"POKE",178:"EXECUTE",179:"TERMINATE",180:"RESTART",181:"HELP",182:"GET.BAR",183:"PRODUCT",184:"FACT",185:"GET.CELL",186:"GET.WORKSPACE",187:"GET.WINDOW",188:"GET.DOCUMENT",189:"DPRODUCT",190:"ISNONTEXT",191:"GET.NOTE",192:"NOTE",193:"STDEVP",194:"VARP",195:"DSTDEVP",196:"DVARP",197:"TRUNC",198:"ISLOGICAL",199:"DCOUNTA",200:"DELETE.BAR",201:"UNREGISTER",204:"USDOLLAR",205:"FINDB",206:"SEARCHB",207:"REPLACEB",208:"LEFTB",209:"RIGHTB",210:"MIDB",211:"LENB",212:"ROUNDUP",213:"ROUNDDOWN",214:"ASC",215:"DBCS",216:"RANK",219:"ADDRESS",220:"DAYS360",221:"TODAY",222:"VDB",223:"ELSE",224:"ELSE.IF",225:"END.IF",226:"FOR.CELL",227:"MEDIAN",228:"SUMPRODUCT",229:"SINH",230:"COSH",231:"TANH",232:"ASINH",233:"ACOSH",234:"ATANH",235:"DGET",236:"CREATE.OBJECT",237:"VOLATILE",238:"LAST.ERROR",239:"CUSTOM.UNDO",240:"CUSTOM.REPEAT",241:"FORMULA.CONVERT",242:"GET.LINK.INFO",243:"TEXT.BOX",244:"INFO",245:"GROUP",246:"GET.OBJECT",247:"DB",248:"PAUSE",251:"RESUME",252:"FREQUENCY",253:"ADD.TOOLBAR",254:"DELETE.TOOLBAR",255:"User",256:"RESET.TOOLBAR",257:"EVALUATE",258:"GET.TOOLBAR",259:"GET.TOOL",260:"SPELLING.CHECK",261:"ERROR.TYPE",262:"APP.TITLE",263:"WINDOW.TITLE",264:"SAVE.TOOLBAR",265:"ENABLE.TOOL",266:"PRESS.TOOL",267:"REGISTER.ID",268:"GET.WORKBOOK",269:"AVEDEV",270:"BETADIST",271:"GAMMALN",272:"BETAINV",273:"BINOMDIST",274:"CHIDIST",275:"CHIINV",276:"COMBIN",277:"CONFIDENCE",278:"CRITBINOM",279:"EVEN",280:"EXPONDIST",281:"FDIST",282:"FINV",283:"FISHER",284:"FISHERINV",285:"FLOOR",286:"GAMMADIST",287:"GAMMAINV",288:"CEILING",289:"HYPGEOMDIST",290:"LOGNORMDIST",291:"LOGINV",292:"NEGBINOMDIST",293:"NORMDIST",294:"NORMSDIST",295:"NORMINV",296:"NORMSINV",297:"STANDARDIZE",298:"ODD",299:"PERMUT",300:"POISSON",301:"TDIST",302:"WEIBULL",303:"SUMXMY2",304:"SUMX2MY2",305:"SUMX2PY2",306:"CHITEST",307:"CORREL",308:"COVAR",309:"FORECAST",310:"FTEST",311:"INTERCEPT",312:"PEARSON",313:"RSQ",314:"STEYX",315:"SLOPE",316:"TTEST",317:"PROB",318:"DEVSQ",319:"GEOMEAN",320:"HARMEAN",321:"SUMSQ",322:"KURT",323:"SKEW",324:"ZTEST",325:"LARGE",326:"SMALL",327:"QUARTILE",328:"PERCENTILE",329:"PERCENTRANK",330:"MODE",331:"TRIMMEAN",332:"TINV",334:"MOVIE.COMMAND",335:"GET.MOVIE",336:"CONCATENATE",337:"POWER",338:"PIVOT.ADD.DATA",339:"GET.PIVOT.TABLE",340:"GET.PIVOT.FIELD",341:"GET.PIVOT.ITEM",342:"RADIANS",343:"DEGREES",344:"SUBTOTAL",345:"SUMIF",346:"COUNTIF",347:"COUNTBLANK",348:"SCENARIO.GET",349:"OPTIONS.LISTS.GET",350:"ISPMT",351:"DATEDIF",352:"DATESTRING",353:"NUMBERSTRING",354:"ROMAN",355:"OPEN.DIALOG",356:"SAVE.DIALOG",357:"VIEW.GET",358:"GETPIVOTDATA",359:"HYPERLINK",360:"PHONETIC",361:"AVERAGEA",362:"MAXA",363:"MINA",364:"STDEVPA",365:"VARPA",366:"STDEVA",367:"VARA",368:"BAHTTEXT",369:"THAIDAYOFWEEK",370:"THAIDIGIT",371:"THAIMONTHOFYEAR",372:"THAINUMSOUND",373:"THAINUMSTRING",374:"THAISTRINGLENGTH",375:"ISTHAIDIGIT",376:"ROUNDBAHTDOWN",377:"ROUNDBAHTUP",378:"THAIYEAR",379:"RTD",380:"CUBEVALUE",381:"CUBEMEMBER",382:"CUBEMEMBERPROPERTY",383:"CUBERANKEDMEMBER",384:"HEX2BIN",385:"HEX2DEC",386:"HEX2OCT",387:"DEC2BIN",388:"DEC2HEX",389:"DEC2OCT",390:"OCT2BIN",391:"OCT2HEX",392:"OCT2DEC",393:"BIN2DEC",394:"BIN2OCT",395:"BIN2HEX",396:"IMSUB",397:"IMDIV",398:"IMPOWER",399:"IMABS",400:"IMSQRT",401:"IMLN",402:"IMLOG2",403:"IMLOG10",404:"IMSIN",405:"IMCOS",406:"IMEXP",407:"IMARGUMENT",408:"IMCONJUGATE",409:"IMAGINARY",410:"IMREAL",411:"COMPLEX",412:"IMSUM",413:"IMPRODUCT",414:"SERIESSUM",415:"FACTDOUBLE",416:"SQRTPI",417:"QUOTIENT",418:"DELTA",419:"GESTEP",420:"ISEVEN",421:"ISODD",422:"MROUND",423:"ERF",424:"ERFC",425:"BESSELJ",426:"BESSELK",427:"BESSELY",428:"BESSELI",429:"XIRR",430:"XNPV",431:"PRICEMAT",432:"YIELDMAT",433:"INTRATE",434:"RECEIVED",435:"DISC",436:"PRICEDISC",437:"YIELDDISC",438:"TBILLEQ",439:"TBILLPRICE",440:"TBILLYIELD",441:"PRICE",442:"YIELD",443:"DOLLARDE",444:"DOLLARFR",445:"NOMINAL",446:"EFFECT",447:"CUMPRINC",448:"CUMIPMT",449:"EDATE",450:"EOMONTH",451:"YEARFRAC",452:"COUPDAYBS",453:"COUPDAYS",454:"COUPDAYSNC",455:"COUPNCD",456:"COUPNUM",457:"COUPPCD",458:"DURATION",459:"MDURATION",460:"ODDLPRICE",461:"ODDLYIELD",462:"ODDFPRICE",463:"ODDFYIELD",464:"RANDBETWEEN",465:"WEEKNUM",466:"AMORDEGRC",467:"AMORLINC",468:"CONVERT",724:"SHEETJS",469:"ACCRINT",470:"ACCRINTM",471:"WORKDAY",472:"NETWORKDAYS",473:"GCD",474:"MULTINOMIAL",475:"LCM",476:"FVSCHEDULE",477:"CUBEKPIMEMBER",478:"CUBESET",479:"CUBESETCOUNT",480:"IFERROR",481:"COUNTIFS",482:"SUMIFS",483:"AVERAGEIF",484:"AVERAGEIFS"},S_={2:1,3:1,10:0,15:1,16:1,17:1,18:1,19:0,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:2,30:2,31:3,32:1,33:1,34:0,35:0,38:1,39:2,40:3,41:3,42:3,43:3,44:3,45:3,47:3,48:2,53:1,61:3,63:0,65:3,66:3,67:1,68:1,69:1,70:1,71:1,72:1,73:1,74:0,75:1,76:1,77:1,79:2,80:2,83:1,85:0,86:1,89:0,90:1,94:0,95:0,97:2,98:1,99:1,101:3,102:3,105:1,106:1,108:2,111:1,112:1,113:1,114:1,117:2,118:1,119:4,121:1,126:1,127:1,128:1,129:1,130:1,131:1,133:1,134:1,135:1,136:2,137:2,138:2,140:1,141:1,142:3,143:4,144:4,161:1,162:1,163:1,164:1,165:2,172:1,175:2,176:2,177:3,178:2,179:1,184:1,186:1,189:3,190:1,195:3,196:3,197:1,198:1,199:3,201:1,207:4,210:3,211:1,212:2,213:2,214:1,215:1,225:0,229:1,230:1,231:1,232:1,233:1,234:1,235:3,244:1,247:4,252:2,257:1,261:1,271:1,273:4,274:2,275:2,276:2,277:3,278:3,279:1,280:3,281:3,282:3,283:1,284:1,285:2,286:4,287:3,288:2,289:4,290:3,291:3,292:3,293:4,294:1,295:3,296:1,297:3,298:1,299:2,300:3,301:3,302:4,303:2,304:2,305:2,306:2,307:2,308:2,309:3,310:2,311:2,312:2,313:2,314:2,315:2,316:4,325:2,326:2,327:2,328:2,331:2,332:2,337:2,342:1,343:1,346:2,347:1,350:4,351:3,352:1,353:2,360:1,368:1,369:1,370:1,371:1,372:1,373:1,374:1,375:1,376:1,377:1,378:1,382:3,385:1,392:1,393:1,396:2,397:2,398:2,399:1,400:1,401:1,402:1,403:1,404:1,405:1,406:1,407:1,408:1,409:1,410:1,414:4,415:1,416:1,417:2,420:1,421:1,422:2,424:1,425:2,426:2,427:2,428:2,430:3,438:3,439:3,440:3,443:2,444:2,445:2,446:2,447:6,448:6,449:2,450:2,464:2,468:3,476:2,479:1,480:2,65535:0};function C_(e){var t="of:="+e.replace(lu,"$1[.$2$3$4$5]").replace(/\]:\[/g,":");return t.replace(/;/g,"|").replace(/,/g,";")}function A_(e){return e.replace(/\./,"!")}var Fo=typeof Map<"u";function uu(e,t,r){var n=0,a=e.length;if(r){if(Fo?r.has(t):Object.prototype.hasOwnProperty.call(r,t)){for(var i=Fo?r.get(t):r[t];n<i.length;++n)if(e[i[n]].t===t)return e.Count++,i[n]}}else for(;n<a;++n)if(e[n].t===t)return e.Count++,n;return e[a]={t},e.Count++,e.Unique++,r&&(Fo?(r.has(t)||r.set(t,[]),r.get(t).push(a)):(Object.prototype.hasOwnProperty.call(r,t)||(r[t]=[]),r[t].push(a))),a}function Kl(e,t){var r={min:e+1,max:e+1},n=-1;return t.MDW&&(xn=t.MDW),t.width!=null?r.customWidth=1:t.wpx!=null?n=Ml(t.wpx):t.wch!=null&&(n=t.wch),n>-1?(r.width=Wf(n),r.customWidth=1):t.width!=null&&(r.width=t.width),t.hidden&&(r.hidden=!0),t.level!=null&&(r.outlineLevel=r.level=t.level),r}function wx(e,t){if(e){var r=[.7,.7,.75,.75,.3,.3];t=="xlml"&&(r=[1,1,1,1,.5,.5]),e.left==null&&(e.left=r[0]),e.right==null&&(e.right=r[1]),e.top==null&&(e.top=r[2]),e.bottom==null&&(e.bottom=r[3]),e.header==null&&(e.header=r[4]),e.footer==null&&(e.footer=r[5])}}function Qn(e,t,r){var n=r.revssf[t.z!=null?t.z:"General"],a=60,i=e.length;if(n==null&&r.ssf){for(;a<392;++a)if(r.ssf[a]==null){wg(t.z,a),r.ssf[a]=t.z,r.revssf[t.z]=n=a;break}}for(a=0;a!=i;++a)if(e[a].numFmtId===n)return a;return e[i]={numFmtId:n,fontId:0,fillId:0,borderId:0,xfId:0,applyNumberFormat:1},i}function F_(e,t,r){if(e&&e["!ref"]){var n=Ge(e["!ref"]);if(n.e.c<n.s.c||n.e.r<n.s.r)throw new Error("Bad range ("+r+"): "+e["!ref"])}}function P_(e){if(e.length===0)return"";for(var t='<mergeCells count="'+e.length+'">',r=0;r!=e.length;++r)t+='<mergeCell ref="'+lt(e[r])+'"/>';return t+"</mergeCells>"}function I_(e,t,r,n,a){var i=!1,o={},s=null;if(n.bookType!=="xlsx"&&t.vbaraw){var l=t.SheetNames[r];try{t.Workbook&&(l=t.Workbook.Sheets[r].CodeName||l)}catch{}i=!0,o.codeName=hn(Pe(l))}if(e&&e["!outline"]){var f={summaryBelow:1,summaryRight:1};e["!outline"].above&&(f.summaryBelow=0),e["!outline"].left&&(f.summaryRight=0),s=(s||"")+ae("outlinePr",null,f)}!i&&!s||(a[a.length]=ae("sheetPr",s,o))}var N_=["objects","scenarios","selectLockedCells","selectUnlockedCells"],L_=["formatColumns","formatRows","formatCells","insertColumns","insertRows","insertHyperlinks","deleteColumns","deleteRows","sort","autoFilter","pivotTables"];function D_(e){var t={sheet:1};return N_.forEach(function(r){e[r]!=null&&e[r]&&(t[r]="1")}),L_.forEach(function(r){e[r]!=null&&!e[r]&&(t[r]="0")}),e.password&&(t.password=rx(e.password).toString(16).toUpperCase()),ae("sheetProtection",null,t)}function O_(e){return wx(e),ae("pageMargins",null,e)}function R_(e,t){for(var r=["<cols>"],n,a=0;a!=t.length;++a)(n=t[a])&&(r[r.length]=ae("col",null,Kl(a,n)));return r[r.length]="</cols>",r.join("")}function M_(e,t,r,n){var a=typeof e.ref=="string"?e.ref:lt(e.ref);r.Workbook||(r.Workbook={Sheets:[]}),r.Workbook.Names||(r.Workbook.Names=[]);var i=r.Workbook.Names,o=pr(a);o.s.r==o.e.r&&(o.e.r=pr(t["!ref"]).e.r,a=lt(o));for(var s=0;s<i.length;++s){var l=i[s];if(l.Name=="_xlnm._FilterDatabase"&&l.Sheet==n){l.Ref="'"+r.SheetNames[n]+"'!"+a;break}}return s==i.length&&i.push({Name:"_xlnm._FilterDatabase",Sheet:n,Ref:"'"+r.SheetNames[n]+"'!"+a}),ae("autoFilter",null,{ref:a})}function B_(e,t,r,n){var a={workbookViewId:"0"};return(((n||{}).Workbook||{}).Views||[])[0]&&(a.rightToLeft=n.Workbook.Views[0].RTL?"1":"0"),ae("sheetViews",ae("sheetView",null,a),{})}function U_(e,t,r,n){if(e.c&&r["!comments"].push([t,e.c]),e.v===void 0&&typeof e.f!="string"||e.t==="z"&&!e.f)return"";var a="",i=e.t,o=e.v;if(e.t!=="z")switch(e.t){case"b":a=e.v?"1":"0";break;case"n":a=""+e.v;break;case"e":a=Uo[e.v];break;case"d":n&&n.cellDates?a=$t(e.v,-1).toISOString():(e=rr(e),e.t="n",a=""+(e.v=tr($t(e.v)))),typeof e.z>"u"&&(e.z=qe[14]);break;default:a=e.v;break}var s=Pt("v",Pe(a)),l={r:t},f=Qn(n.cellXfs,e,n);switch(f!==0&&(l.s=f),e.t){case"n":break;case"d":l.t="d";break;case"b":l.t="b";break;case"e":l.t="e";break;case"z":break;default:if(e.v==null){delete e.t;break}if(e.v.length>32767)throw new Error("Text length must not exceed 32767 characters");if(n&&n.bookSST){s=Pt("v",""+uu(n.Strings,e.v,n.revStrings)),l.t="s";break}l.t="str";break}if(e.t!=i&&(e.t=i,e.v=o),typeof e.f=="string"&&e.f){var u=e.F&&e.F.slice(0,t.length)==t?{t:"array",ref:e.F}:null;s=ae("f",Pe(e.f),u)+(e.v!=null?s:"")}return e.l&&r["!links"].push([t,e.l]),e.D&&(l.cm=1),ae("c",s,l)}function z_(e,t,r,n){var a=[],i=[],o=Ge(e["!ref"]),s="",l,f="",u=[],g=0,d=0,p=e["!rows"],x=Array.isArray(e),h={r:f},v,w=-1;for(d=o.s.c;d<=o.e.c;++d)u[d]=Bt(d);for(g=o.s.r;g<=o.e.r;++g){for(i=[],f=It(g),d=o.s.c;d<=o.e.c;++d){l=u[d]+f;var m=x?(e[g]||[])[d]:e[l];m!==void 0&&(s=U_(m,l,e,t,r,n))!=null&&i.push(s)}(i.length>0||p&&p[g])&&(h={r:f},p&&p[g]&&(v=p[g],v.hidden&&(h.hidden=1),w=-1,v.hpx?w=Bl(v.hpx):v.hpt&&(w=v.hpt),w>-1&&(h.ht=w,h.customHeight=1),v.level&&(h.outlineLevel=v.level)),a[a.length]=ae("row",i.join(""),h))}if(p)for(;g<p.length;++g)p&&p[g]&&(h={r:g+1},v=p[g],v.hidden&&(h.hidden=1),w=-1,v.hpx?w=Bl(v.hpx):v.hpt&&(w=v.hpt),w>-1&&(h.ht=w,h.customHeight=1),v.level&&(h.outlineLevel=v.level),a[a.length]=ae("row","",h));return a.join("")}function yx(e,t,r,n){var a=[ct,ae("worksheet",null,{xmlns:yi[0],"xmlns:r":yt.r})],i=r.SheetNames[e],o=0,s="",l=r.Sheets[i];l==null&&(l={});var f=l["!ref"]||"A1",u=Ge(f);if(u.e.c>16383||u.e.r>1048575){if(t.WTF)throw new Error("Range "+f+" exceeds format limit A1:XFD1048576");u.e.c=Math.min(u.e.c,16383),u.e.r=Math.min(u.e.c,1048575),f=lt(u)}n||(n={}),l["!comments"]=[];var g=[];I_(l,r,e,t,a),a[a.length]=ae("dimension",null,{ref:f}),a[a.length]=B_(l,t,e,r),t.sheetFormat&&(a[a.length]=ae("sheetFormatPr",null,{defaultRowHeight:t.sheetFormat.defaultRowHeight||"16",baseColWidth:t.sheetFormat.baseColWidth||"10",outlineLevelRow:t.sheetFormat.outlineLevelRow||"7"})),l["!cols"]!=null&&l["!cols"].length>0&&(a[a.length]=R_(l,l["!cols"])),a[o=a.length]="<sheetData/>",l["!links"]=[],l["!ref"]!=null&&(s=z_(l,t,e,r,n),s.length>0&&(a[a.length]=s)),a.length>o+1&&(a[a.length]="</sheetData>",a[o]=a[o].replace("/>",">")),l["!protect"]&&(a[a.length]=D_(l["!protect"])),l["!autofilter"]!=null&&(a[a.length]=M_(l["!autofilter"],l,r,e)),l["!merges"]!=null&&l["!merges"].length>0&&(a[a.length]=P_(l["!merges"]));var d=-1,p,x=-1;return l["!links"].length>0&&(a[a.length]="<hyperlinks>",l["!links"].forEach(function(h){h[1].Target&&(p={ref:h[0]},h[1].Target.charAt(0)!="#"&&(x=Fe(n,-1,Pe(h[1].Target).replace(/#.*$/,""),be.HLINK),p["r:id"]="rId"+x),(d=h[1].Target.indexOf("#"))>-1&&(p.location=Pe(h[1].Target.slice(d+1))),h[1].Tooltip&&(p.tooltip=Pe(h[1].Tooltip)),a[a.length]=ae("hyperlink",null,p))}),a[a.length]="</hyperlinks>"),delete l["!links"],l["!margins"]!=null&&(a[a.length]=O_(l["!margins"])),(!t||t.ignoreEC||t.ignoreEC==null)&&(a[a.length]=Pt("ignoredErrors",ae("ignoredError",null,{numberStoredAsText:1,sqref:f}))),g.length>0&&(x=Fe(n,-1,"../drawings/drawing"+(e+1)+".xml",be.DRAW),a[a.length]=ae("drawing",null,{"r:id":"rId"+x}),l["!drawing"]=g),l["!comments"].length>0&&(x=Fe(n,-1,"../drawings/vmlDrawing"+(e+1)+".vml",be.VML),a[a.length]=ae("legacyDrawing",null,{"r:id":"rId"+x}),l["!legacy"]=x),a.length>1&&(a[a.length]="</worksheet>",a[1]=a[1].replace("/>",">")),a.join("")}function H_(e,t){var r={},n=e.l+t;r.r=e.read_shift(4),e.l+=4;var a=e.read_shift(2);e.l+=1;var i=e.read_shift(1);return e.l=n,i&7&&(r.level=i&7),i&16&&(r.hidden=!0),i&32&&(r.hpt=a/20),r}function W_(e,t,r){var n=G(145),a=(r["!rows"]||[])[e]||{};n.write_shift(4,e),n.write_shift(4,0);var i=320;a.hpx?i=Bl(a.hpx)*20:a.hpt&&(i=a.hpt*20),n.write_shift(2,i),n.write_shift(1,0);var o=0;a.level&&(o|=a.level),a.hidden&&(o|=16),(a.hpx||a.hpt)&&(o|=32),n.write_shift(1,o),n.write_shift(1,0);var s=0,l=n.l;n.l+=4;for(var f={r:e,c:0},u=0;u<16;++u)if(!(t.s.c>u+1<<10||t.e.c<u<<10)){for(var g=-1,d=-1,p=u<<10;p<u+1<<10;++p){f.c=p;var x=Array.isArray(r)?(r[f.r]||[])[f.c]:r[Ie(f)];x&&(g<0&&(g=p),d=p)}g<0||(++s,n.write_shift(4,g),n.write_shift(4,d))}var h=n.l;return n.l=l,n.write_shift(4,s),n.l=h,n.length>n.l?n.slice(0,n.l):n}function G_(e,t,r,n){var a=W_(n,r,t);(a.length>17||(t["!rows"]||[])[n])&&Q(e,0,a)}var V_=Ca,X_=ki;function j_(){}function $_(e,t){var r={},n=e[e.l];return++e.l,r.above=!(n&64),r.left=!(n&128),e.l+=18,r.name=ny(e,t-19),r}function Y_(e,t,r){r==null&&(r=G(84+4*e.length));var n=192;t&&(t.above&&(n&=-65),t.left&&(n&=-129)),r.write_shift(1,n);for(var a=1;a<3;++a)r.write_shift(1,0);return Dl({auto:1},r),r.write_shift(-4,-1),r.write_shift(-4,-1),Og(e,r),r.slice(0,r.l)}function K_(e){var t=Cr(e);return[t]}function Q_(e,t,r){return r==null&&(r=G(8)),ba(t,r)}function J_(e){var t=Ta(e);return[t]}function Z_(e,t,r){return r==null&&(r=G(4)),Sa(t,r)}function q_(e){var t=Cr(e),r=e.read_shift(1);return[t,r,"b"]}function ek(e,t,r){return r==null&&(r=G(9)),ba(t,r),r.write_shift(1,e.v?1:0),r}function tk(e){var t=Ta(e),r=e.read_shift(1);return[t,r,"b"]}function rk(e,t,r){return r==null&&(r=G(5)),Sa(t,r),r.write_shift(1,e.v?1:0),r}function nk(e){var t=Cr(e),r=e.read_shift(1);return[t,r,"e"]}function ak(e,t,r){return r==null&&(r=G(9)),ba(t,r),r.write_shift(1,e.v),r}function ik(e){var t=Ta(e),r=e.read_shift(1);return[t,r,"e"]}function ok(e,t,r){return r==null&&(r=G(8)),Sa(t,r),r.write_shift(1,e.v),r.write_shift(2,0),r.write_shift(1,0),r}function sk(e){var t=Cr(e),r=e.read_shift(4);return[t,r,"s"]}function lk(e,t,r){return r==null&&(r=G(12)),ba(t,r),r.write_shift(4,t.v),r}function ck(e){var t=Ta(e),r=e.read_shift(4);return[t,r,"s"]}function fk(e,t,r){return r==null&&(r=G(8)),Sa(t,r),r.write_shift(4,t.v),r}function uk(e){var t=Cr(e),r=bi(e);return[t,r,"n"]}function dk(e,t,r){return r==null&&(r=G(16)),ba(t,r),Ea(e.v,r),r}function hk(e){var t=Ta(e),r=bi(e);return[t,r,"n"]}function pk(e,t,r){return r==null&&(r=G(12)),Sa(t,r),Ea(e.v,r),r}function gk(e){var t=Cr(e),r=Rg(e);return[t,r,"n"]}function xk(e,t,r){return r==null&&(r=G(12)),ba(t,r),Mg(e.v,r),r}function mk(e){var t=Ta(e),r=Rg(e);return[t,r,"n"]}function vk(e,t,r){return r==null&&(r=G(8)),Sa(t,r),Mg(e.v,r),r}function wk(e){var t=Cr(e),r=nu(e);return[t,r,"is"]}function yk(e){var t=Cr(e),r=Ut(e);return[t,r,"str"]}function Ek(e,t,r){return r==null&&(r=G(12+4*e.v.length)),ba(t,r),_t(e.v,r),r.length>r.l?r.slice(0,r.l):r}function _k(e){var t=Ta(e),r=Ut(e);return[t,r,"str"]}function kk(e,t,r){return r==null&&(r=G(8+4*e.v.length)),Sa(t,r),_t(e.v,r),r.length>r.l?r.slice(0,r.l):r}function bk(e,t,r){var n=e.l+t,a=Cr(e);a.r=r["!row"];var i=e.read_shift(1),o=[a,i,"b"];if(r.cellFormula){e.l+=2;var s=Yl(e,n-e.l,r);o[3]=wi(s,null,a,r.supbooks,r)}else e.l=n;return o}function Tk(e,t,r){var n=e.l+t,a=Cr(e);a.r=r["!row"];var i=e.read_shift(1),o=[a,i,"e"];if(r.cellFormula){e.l+=2;var s=Yl(e,n-e.l,r);o[3]=wi(s,null,a,r.supbooks,r)}else e.l=n;return o}function Sk(e,t,r){var n=e.l+t,a=Cr(e);a.r=r["!row"];var i=bi(e),o=[a,i,"n"];if(r.cellFormula){e.l+=2;var s=Yl(e,n-e.l,r);o[3]=wi(s,null,a,r.supbooks,r)}else e.l=n;return o}function Ck(e,t,r){var n=e.l+t,a=Cr(e);a.r=r["!row"];var i=Ut(e),o=[a,i,"str"];if(r.cellFormula){e.l+=2;var s=Yl(e,n-e.l,r);o[3]=wi(s,null,a,r.supbooks,r)}else e.l=n;return o}var Ak=Ca,Fk=ki;function Pk(e,t){return t==null&&(t=G(4)),t.write_shift(4,e),t}function Ik(e,t){var r=e.l+t,n=Ca(e,16),a=au(e),i=Ut(e),o=Ut(e),s=Ut(e);e.l=r;var l={rfx:n,relId:a,loc:i,display:s};return o&&(l.Tooltip=o),l}function Nk(e,t){var r=G(50+4*(e[1].Target.length+(e[1].Tooltip||"").length));ki({s:Et(e[0]),e:Et(e[0])},r),iu("rId"+t,r);var n=e[1].Target.indexOf("#"),a=n==-1?"":e[1].Target.slice(n+1);return _t(a||"",r),_t(e[1].Tooltip||"",r),_t("",r),r.slice(0,r.l)}function Lk(){}function Dk(e,t,r){var n=e.l+t,a=Bg(e,16),i=e.read_shift(1),o=[a];if(o[2]=i,r.cellFormula){var s=__(e,n-e.l,r);o[1]=s}else e.l=n;return o}function Ok(e,t,r){var n=e.l+t,a=Ca(e,16),i=[a];if(r.cellFormula){var o=b_(e,n-e.l,r);i[1]=o,e.l=n}else e.l=n;return i}function Rk(e,t,r){r==null&&(r=G(18));var n=Kl(e,t);r.write_shift(-4,e),r.write_shift(-4,e),r.write_shift(4,(n.width||10)*256),r.write_shift(4,0);var a=0;return t.hidden&&(a|=1),typeof n.width=="number"&&(a|=2),t.level&&(a|=t.level<<8),r.write_shift(2,a),r}var Ex=["left","right","top","bottom","header","footer"];function Mk(e){var t={};return Ex.forEach(function(r){t[r]=bi(e,8)}),t}function Bk(e,t){return t==null&&(t=G(6*8)),wx(e),Ex.forEach(function(r){Ea(e[r],t)}),t}function Uk(e){var t=e.read_shift(2);return e.l+=28,{RTL:t&32}}function zk(e,t,r){r==null&&(r=G(30));var n=924;return(((t||{}).Views||[])[0]||{}).RTL&&(n|=32),r.write_shift(2,n),r.write_shift(4,0),r.write_shift(4,0),r.write_shift(4,0),r.write_shift(1,0),r.write_shift(1,0),r.write_shift(2,0),r.write_shift(2,100),r.write_shift(2,0),r.write_shift(2,0),r.write_shift(2,0),r.write_shift(4,0),r}function Hk(e){var t=G(24);return t.write_shift(4,4),t.write_shift(4,1),ki(e,t),t}function Wk(e,t){return t==null&&(t=G(16*4+2)),t.write_shift(2,e.password?rx(e.password):0),t.write_shift(4,1),[["objects",!1],["scenarios",!1],["formatCells",!0],["formatColumns",!0],["formatRows",!0],["insertColumns",!0],["insertRows",!0],["insertHyperlinks",!0],["deleteColumns",!0],["deleteRows",!0],["selectLockedCells",!1],["sort",!0],["autoFilter",!0],["pivotTables",!0],["selectUnlockedCells",!1]].forEach(function(r){r[1]?t.write_shift(4,e[r[0]]!=null&&!e[r[0]]?1:0):t.write_shift(4,e[r[0]]!=null&&e[r[0]]?0:1)}),t}function Gk(){}function Vk(){}function Xk(e,t,r,n,a,i,o){if(t.v===void 0)return!1;var s="";switch(t.t){case"b":s=t.v?"1":"0";break;case"d":t=rr(t),t.z=t.z||qe[14],t.v=tr($t(t.v)),t.t="n";break;case"n":case"e":s=""+t.v;break;default:s=t.v;break}var l={r,c:n};switch(l.s=Qn(a.cellXfs,t,a),t.l&&i["!links"].push([Ie(l),t.l]),t.c&&i["!comments"].push([Ie(l),t.c]),t.t){case"s":case"str":return a.bookSST?(s=uu(a.Strings,t.v,a.revStrings),l.t="s",l.v=s,o?Q(e,18,fk(t,l)):Q(e,7,lk(t,l))):(l.t="str",o?Q(e,17,kk(t,l)):Q(e,6,Ek(t,l))),!0;case"n":return t.v==(t.v|0)&&t.v>-1e3&&t.v<1e3?o?Q(e,13,vk(t,l)):Q(e,2,xk(t,l)):o?Q(e,16,pk(t,l)):Q(e,5,dk(t,l)),!0;case"b":return l.t="b",o?Q(e,15,rk(t,l)):Q(e,4,ek(t,l)),!0;case"e":return l.t="e",o?Q(e,14,ok(t,l)):Q(e,3,ak(t,l)),!0}return o?Q(e,12,Z_(t,l)):Q(e,1,Q_(t,l)),!0}function jk(e,t,r,n){var a=Ge(t["!ref"]||"A1"),i,o="",s=[];Q(e,145);var l=Array.isArray(t),f=a.e.r;t["!rows"]&&(f=Math.max(a.e.r,t["!rows"].length-1));for(var u=a.s.r;u<=f;++u){o=It(u),G_(e,t,a,u);var g=!1;if(u<=a.e.r)for(var d=a.s.c;d<=a.e.c;++d){u===a.s.r&&(s[d]=Bt(d)),i=s[d]+o;var p=l?(t[u]||[])[d]:t[i];if(!p){g=!1;continue}g=Xk(e,p,u,d,n,t,g)}}Q(e,146)}function $k(e,t){!t||!t["!merges"]||(Q(e,177,Pk(t["!merges"].length)),t["!merges"].forEach(function(r){Q(e,176,Fk(r))}),Q(e,178))}function Yk(e,t){!t||!t["!cols"]||(Q(e,390),t["!cols"].forEach(function(r,n){r&&Q(e,60,Rk(n,r))}),Q(e,391))}function Kk(e,t){!t||!t["!ref"]||(Q(e,648),Q(e,649,Hk(Ge(t["!ref"]))),Q(e,650))}function Qk(e,t,r){t["!links"].forEach(function(n){if(n[1].Target){var a=Fe(r,-1,n[1].Target.replace(/#.*$/,""),be.HLINK);Q(e,494,Nk(n,a))}}),delete t["!links"]}function Jk(e,t,r,n){if(t["!comments"].length>0){var a=Fe(n,-1,"../drawings/vmlDrawing"+(r+1)+".vml",be.VML);Q(e,551,iu("rId"+a)),t["!legacy"]=a}}function Zk(e,t,r,n){if(t["!autofilter"]){var a=t["!autofilter"],i=typeof a.ref=="string"?a.ref:lt(a.ref);r.Workbook||(r.Workbook={Sheets:[]}),r.Workbook.Names||(r.Workbook.Names=[]);var o=r.Workbook.Names,s=pr(i);s.s.r==s.e.r&&(s.e.r=pr(t["!ref"]).e.r,i=lt(s));for(var l=0;l<o.length;++l){var f=o[l];if(f.Name=="_xlnm._FilterDatabase"&&f.Sheet==n){f.Ref="'"+r.SheetNames[n]+"'!"+i;break}}l==o.length&&o.push({Name:"_xlnm._FilterDatabase",Sheet:n,Ref:"'"+r.SheetNames[n]+"'!"+i}),Q(e,161,ki(Ge(i))),Q(e,162)}}function qk(e,t,r){Q(e,133),Q(e,137,zk(t,r)),Q(e,138),Q(e,134)}function eb(e,t){t["!protect"]&&Q(e,535,Wk(t["!protect"]))}function tb(e,t,r,n){var a=er(),i=r.SheetNames[e],o=r.Sheets[i]||{},s=i;try{r&&r.Workbook&&(s=r.Workbook.Sheets[e].CodeName||s)}catch{}var l=Ge(o["!ref"]||"A1");if(l.e.c>16383||l.e.r>1048575){if(t.WTF)throw new Error("Range "+(o["!ref"]||"A1")+" exceeds format limit A1:XFD1048576");l.e.c=Math.min(l.e.c,16383),l.e.r=Math.min(l.e.c,1048575)}return o["!links"]=[],o["!comments"]=[],Q(a,129),(r.vbaraw||o["!outline"])&&Q(a,147,Y_(s,o["!outline"])),Q(a,148,X_(l)),qk(a,o,r.Workbook),Yk(a,o,e,t,r),jk(a,o,e,t,r),eb(a,o),Zk(a,o,r,e),$k(a,o),Qk(a,o,n),o["!margins"]&&Q(a,476,Bk(o["!margins"])),(!t||t.ignoreEC||t.ignoreEC==null)&&Kk(a,o),Jk(a,o,e,n),Q(a,130),a.end()}function rb(e,t){e.l+=10;var r=Ut(e,t-10);return{name:r}}var nb=[["allowRefreshQuery",!1,"bool"],["autoCompressPictures",!0,"bool"],["backupFile",!1,"bool"],["checkCompatibility",!1,"bool"],["CodeName",""],["date1904",!1,"bool"],["defaultThemeVersion",0,"int"],["filterPrivacy",!1,"bool"],["hidePivotFieldList",!1,"bool"],["promptedSolutions",!1,"bool"],["publishItems",!1,"bool"],["refreshAllConnections",!1,"bool"],["saveExternalLinkValues",!0,"bool"],["showBorderUnselectedTables",!0,"bool"],["showInkAnnotation",!0,"bool"],["showObjects","all"],["showPivotChartFilter",!1,"bool"],["updateLinks","userSet"]];function ab(e){return!e.Workbook||!e.Workbook.WBProps?"false":Dw(e.Workbook.WBProps.date1904)?"true":"false"}var ib="][*?/\\".split("");function _x(e,t){if(e.length>31){if(t)return!1;throw new Error("Sheet names cannot exceed 31 chars")}var r=!0;return ib.forEach(function(n){if(e.indexOf(n)!=-1){if(!t)throw new Error("Sheet name cannot contain : \\ / ? * [ ]");r=!1}}),r}function ob(e,t,r){e.forEach(function(n,a){_x(n);for(var i=0;i<a;++i)if(n==e[i])throw new Error("Duplicate Sheet Name: "+n);if(r){var o=t&&t[a]&&t[a].CodeName||n;if(o.charCodeAt(0)==95&&o.length>22)throw new Error("Bad Code Name: Worksheet"+o)}})}function sb(e){if(!e||!e.SheetNames||!e.Sheets)throw new Error("Invalid Workbook");if(!e.SheetNames.length)throw new Error("Workbook is empty");var t=e.Workbook&&e.Workbook.Sheets||[];ob(e.SheetNames,t,!!e.vbaraw);for(var r=0;r<e.SheetNames.length;++r)F_(e.Sheets[e.SheetNames[r]],e.SheetNames[r],r)}function kx(e){var t=[ct];t[t.length]=ae("workbook",null,{xmlns:yi[0],"xmlns:r":yt.r});var r=e.Workbook&&(e.Workbook.Names||[]).length>0,n={codeName:"ThisWorkbook"};e.Workbook&&e.Workbook.WBProps&&(nb.forEach(function(s){e.Workbook.WBProps[s[0]]!=null&&e.Workbook.WBProps[s[0]]!=s[1]&&(n[s[0]]=e.Workbook.WBProps[s[0]])}),e.Workbook.WBProps.CodeName&&(n.codeName=e.Workbook.WBProps.CodeName,delete n.CodeName)),t[t.length]=ae("workbookPr",null,n);var a=e.Workbook&&e.Workbook.Sheets||[],i=0;if(a&&a[0]&&a[0].Hidden){for(t[t.length]="<bookViews>",i=0;i!=e.SheetNames.length&&!(!a[i]||!a[i].Hidden);++i);i==e.SheetNames.length&&(i=0),t[t.length]='<workbookView firstSheet="'+i+'" activeTab="'+i+'"/>',t[t.length]="</bookViews>"}for(t[t.length]="<sheets>",i=0;i!=e.SheetNames.length;++i){var o={name:Pe(e.SheetNames[i].slice(0,31))};if(o.sheetId=""+(i+1),o["r:id"]="rId"+(i+1),a[i])switch(a[i].Hidden){case 1:o.state="hidden";break;case 2:o.state="veryHidden";break}t[t.length]=ae("sheet",null,o)}return t[t.length]="</sheets>",r&&(t[t.length]="<definedNames>",e.Workbook&&e.Workbook.Names&&e.Workbook.Names.forEach(function(s){var l={name:s.Name};s.Comment&&(l.comment=s.Comment),s.Sheet!=null&&(l.localSheetId=""+s.Sheet),s.Hidden&&(l.hidden="1"),s.Ref&&(t[t.length]=ae("definedName",Pe(s.Ref),l))}),t[t.length]="</definedNames>"),t.length>2&&(t[t.length]="</workbook>",t[1]=t[1].replace("/>",">")),t.join("")}function lb(e,t){var r={};return r.Hidden=e.read_shift(4),r.iTabID=e.read_shift(4),r.strRelID=Hf(e,t-8),r.name=Ut(e),r}function cb(e,t){return t||(t=G(127)),t.write_shift(4,e.Hidden),t.write_shift(4,e.iTabID),iu(e.strRelID,t),_t(e.name.slice(0,31),t),t.length>t.l?t.slice(0,t.l):t}function fb(e,t){var r={},n=e.read_shift(4);r.defaultThemeVersion=e.read_shift(4);var a=t>8?Ut(e):"";return a.length>0&&(r.CodeName=a),r.autoCompressPictures=!!(n&65536),r.backupFile=!!(n&64),r.checkCompatibility=!!(n&4096),r.date1904=!!(n&1),r.filterPrivacy=!!(n&8),r.hidePivotFieldList=!!(n&1024),r.promptedSolutions=!!(n&16),r.publishItems=!!(n&2048),r.refreshAllConnections=!!(n&262144),r.saveExternalLinkValues=!!(n&128),r.showBorderUnselectedTables=!!(n&4),r.showInkAnnotation=!!(n&32),r.showObjects=["all","placeholders","none"][n>>13&3],r.showPivotChartFilter=!!(n&32768),r.updateLinks=["userSet","never","always"][n>>8&3],r}function ub(e,t){t||(t=G(72));var r=0;return e&&e.filterPrivacy&&(r|=8),t.write_shift(4,r),t.write_shift(4,0),Og(e&&e.CodeName||"ThisWorkbook",t),t.slice(0,t.l)}function db(e,t,r){var n=e.l+t;e.l+=4,e.l+=1;var a=e.read_shift(4),i=ay(e),o=k_(e,0,r),s=au(e);e.l=n;var l={Name:i,Ptg:o};return a<268435455&&(l.Sheet=a),s&&(l.Comment=s),l}function hb(e,t){Q(e,143);for(var r=0;r!=t.SheetNames.length;++r){var n=t.Workbook&&t.Workbook.Sheets&&t.Workbook.Sheets[r]&&t.Workbook.Sheets[r].Hidden||0,a={Hidden:n,iTabID:r+1,strRelID:"rId"+(r+1),name:t.SheetNames[r]};Q(e,156,cb(a))}Q(e,144)}function pb(e,t){t||(t=G(127));for(var r=0;r!=4;++r)t.write_shift(4,0);return _t("SheetJS",t),_t(Po.version,t),_t(Po.version,t),_t("7262",t),t.length>t.l?t.slice(0,t.l):t}function gb(e,t){t||(t=G(29)),t.write_shift(-4,0),t.write_shift(-4,460),t.write_shift(4,28800),t.write_shift(4,17600),t.write_shift(4,500),t.write_shift(4,e),t.write_shift(4,e);var r=120;return t.write_shift(1,r),t.length>t.l?t.slice(0,t.l):t}function xb(e,t){if(!(!t.Workbook||!t.Workbook.Sheets)){for(var r=t.Workbook.Sheets,n=0,a=-1,i=-1;n<r.length;++n)!r[n]||!r[n].Hidden&&a==-1?a=n:r[n].Hidden==1&&i==-1&&(i=n);i>a||(Q(e,135),Q(e,158,gb(a)),Q(e,136))}}function mb(e,t){var r=er();return Q(r,131),Q(r,128,pb()),Q(r,153,ub(e.Workbook&&e.Workbook.WBProps||null)),xb(r,e,t),hb(r,e,t),Q(r,132),r.end()}function vb(e,t,r){return(t.slice(-4)===".bin"?mb:kx)(e,r)}function wb(e,t,r,n,a){return(t.slice(-4)===".bin"?tb:yx)(e,r,n,a)}function yb(e,t,r){return(t.slice(-4)===".bin"?B5:ix)(e,r)}function Eb(e,t,r){return(t.slice(-4)===".bin"?u5:tx)(e,r)}function _b(e,t,r){return(t.slice(-4)===".bin"?eE:fx)(e,r)}function kb(e){return(e.slice(-4)===".bin"?j5:lx)()}function bb(e,t){var r=[];return e.Props&&r.push(yy(e.Props,t)),e.Custprops&&r.push(Ey(e.Props,e.Custprops,t)),r.join("")}function Tb(){return""}function Sb(e,t){var r=['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];return t.cellXfs.forEach(function(n,a){var i=[];i.push(ae("NumberFormat",null,{"ss:Format":Pe(qe[n.numFmtId])}));var o={"ss:ID":"s"+(21+a)};r.push(ae("Style",i.join(""),o))}),ae("Styles",r.join(""))}function bx(e){return ae("NamedRange",null,{"ss:Name":e.Name,"ss:RefersTo":"="+cu(e.Ref,{r:0,c:0})})}function Cb(e){if(!((e||{}).Workbook||{}).Names)return"";for(var t=e.Workbook.Names,r=[],n=0;n<t.length;++n){var a=t[n];a.Sheet==null&&(a.Name.match(/^_xlfn\./)||r.push(bx(a)))}return ae("Names",r.join(""))}function Ab(e,t,r,n){if(!e||!((n||{}).Workbook||{}).Names)return"";for(var a=n.Workbook.Names,i=[],o=0;o<a.length;++o){var s=a[o];s.Sheet==r&&(s.Name.match(/^_xlfn\./)||i.push(bx(s)))}return i.join("")}function Fb(e,t,r,n){if(!e)return"";var a=[];if(e["!margins"]&&(a.push("<PageSetup>"),e["!margins"].header&&a.push(ae("Header",null,{"x:Margin":e["!margins"].header})),e["!margins"].footer&&a.push(ae("Footer",null,{"x:Margin":e["!margins"].footer})),a.push(ae("PageMargins",null,{"x:Bottom":e["!margins"].bottom||"0.75","x:Left":e["!margins"].left||"0.7","x:Right":e["!margins"].right||"0.7","x:Top":e["!margins"].top||"0.75"})),a.push("</PageSetup>")),n&&n.Workbook&&n.Workbook.Sheets&&n.Workbook.Sheets[r])if(n.Workbook.Sheets[r].Hidden)a.push(ae("Visible",n.Workbook.Sheets[r].Hidden==1?"SheetHidden":"SheetVeryHidden",{}));else{for(var i=0;i<r&&!(n.Workbook.Sheets[i]&&!n.Workbook.Sheets[i].Hidden);++i);i==r&&a.push("<Selected/>")}return((((n||{}).Workbook||{}).Views||[])[0]||{}).RTL&&a.push("<DisplayRightToLeft/>"),e["!protect"]&&(a.push(Pt("ProtectContents","True")),e["!protect"].objects&&a.push(Pt("ProtectObjects","True")),e["!protect"].scenarios&&a.push(Pt("ProtectScenarios","True")),e["!protect"].selectLockedCells!=null&&!e["!protect"].selectLockedCells?a.push(Pt("EnableSelection","NoSelection")):e["!protect"].selectUnlockedCells!=null&&!e["!protect"].selectUnlockedCells&&a.push(Pt("EnableSelection","UnlockedCells")),[["formatCells","AllowFormatCells"],["formatColumns","AllowSizeCols"],["formatRows","AllowSizeRows"],["insertColumns","AllowInsertCols"],["insertRows","AllowInsertRows"],["insertHyperlinks","AllowInsertHyperlinks"],["deleteColumns","AllowDeleteCols"],["deleteRows","AllowDeleteRows"],["sort","AllowSort"],["autoFilter","AllowFilter"],["pivotTables","AllowUsePivotTables"]].forEach(function(o){e["!protect"][o[0]]&&a.push("<"+o[1]+"/>")})),a.length==0?"":ae("WorksheetOptions",a.join(""),{xmlns:hr.x})}function Pb(e){return e.map(function(t){var r=Lw(t.t||""),n=ae("ss:Data",r,{xmlns:"http://www.w3.org/TR/REC-html40"});return ae("Comment",n,{"ss:Author":t.a})}).join("")}function Ib(e,t,r,n,a,i,o){if(!e||e.v==null&&e.f==null)return"";var s={};if(e.f&&(s["ss:Formula"]="="+Pe(cu(e.f,o))),e.F&&e.F.slice(0,t.length)==t){var l=Et(e.F.slice(t.length+1));s["ss:ArrayRange"]="RC:R"+(l.r==o.r?"":"["+(l.r-o.r)+"]")+"C"+(l.c==o.c?"":"["+(l.c-o.c)+"]")}if(e.l&&e.l.Target&&(s["ss:HRef"]=Pe(e.l.Target),e.l.Tooltip&&(s["x:HRefScreenTip"]=Pe(e.l.Tooltip))),r["!merges"])for(var f=r["!merges"],u=0;u!=f.length;++u)f[u].s.c!=o.c||f[u].s.r!=o.r||(f[u].e.c>f[u].s.c&&(s["ss:MergeAcross"]=f[u].e.c-f[u].s.c),f[u].e.r>f[u].s.r&&(s["ss:MergeDown"]=f[u].e.r-f[u].s.r));var g="",d="";switch(e.t){case"z":if(!n.sheetStubs)return"";break;case"n":g="Number",d=String(e.v);break;case"b":g="Boolean",d=e.v?"1":"0";break;case"e":g="Error",d=Uo[e.v];break;case"d":g="DateTime",d=new Date(e.v).toISOString(),e.z==null&&(e.z=e.z||qe[14]);break;case"s":g="String",d=Nw(e.v||"");break}var p=Qn(n.cellXfs,e,n);s["ss:StyleID"]="s"+(21+p),s["ss:Index"]=o.c+1;var x=e.v!=null?d:"",h=e.t=="z"?"":'<Data ss:Type="'+g+'">'+x+"</Data>";return(e.c||[]).length>0&&(h+=Pb(e.c)),ae("Cell",h,s)}function Nb(e,t){var r='<Row ss:Index="'+(e+1)+'"';return t&&(t.hpt&&!t.hpx&&(t.hpx=ax(t.hpt)),t.hpx&&(r+=' ss:AutoFitHeight="0" ss:Height="'+t.hpx+'"'),t.hidden&&(r+=' ss:Hidden="1"')),r+">"}function Lb(e,t,r,n){if(!e["!ref"])return"";var a=Ge(e["!ref"]),i=e["!merges"]||[],o=0,s=[];e["!cols"]&&e["!cols"].forEach(function(v,w){su(v);var m=!!v.width,E=Kl(w,v),F={"ss:Index":w+1};m&&(F["ss:Width"]=Rl(E.width)),v.hidden&&(F["ss:Hidden"]="1"),s.push(ae("Column",null,F))});for(var l=Array.isArray(e),f=a.s.r;f<=a.e.r;++f){for(var u=[Nb(f,(e["!rows"]||[])[f])],g=a.s.c;g<=a.e.c;++g){var d=!1;for(o=0;o!=i.length;++o)if(!(i[o].s.c>g)&&!(i[o].s.r>f)&&!(i[o].e.c<g)&&!(i[o].e.r<f)){(i[o].s.c!=g||i[o].s.r!=f)&&(d=!0);break}if(!d){var p={r:f,c:g},x=Ie(p),h=l?(e[f]||[])[g]:e[x];u.push(Ib(h,x,e,t,r,n,p))}}u.push("</Row>"),u.length>2&&s.push(u.join(""))}return s.join("")}function Db(e,t,r){var n=[],a=r.SheetNames[e],i=r.Sheets[a],o=i?Ab(i,t,e,r):"";return o.length>0&&n.push("<Names>"+o+"</Names>"),o=i?Lb(i,t,e,r):"",o.length>0&&n.push("<Table>"+o+"</Table>"),n.push(Fb(i,t,e,r)),n.join("")}function Ob(e,t){t||(t={}),e.SSF||(e.SSF=rr(qe)),e.SSF&&(Gl(),Wl(e.SSF),t.revssf=Vl(e.SSF),t.revssf[e.SSF[65535]]=0,t.ssf=e.SSF,t.cellXfs=[],Qn(t.cellXfs,{},{revssf:{General:0}}));var r=[];r.push(bb(e,t)),r.push(Tb(e,t)),r.push(""),r.push("");for(var n=0;n<e.SheetNames.length;++n)r.push(ae("Worksheet",Db(n,t,e),{"ss:Name":Pe(e.SheetNames[n])}));return r[2]=Sb(e,t),r[3]=Cb(e,t),ct+ae("Workbook",r.join(""),{xmlns:hr.ss,"xmlns:o":hr.o,"xmlns:x":hr.x,"xmlns:ss":hr.ss,"xmlns:dt":hr.dt,"xmlns:html":hr.html})}var Rf={SI:"e0859ff2f94f6810ab9108002b27b3d9",DSI:"02d5cdd59c2e1b10939708002b2cf9ae",UDI:"05d5cdd59c2e1b10939708002b2cf9ae"};function Rb(e,t){var r=[],n=[],a=[],i=0,o,s=P1(G1,"n"),l=P1(V1,"n");if(e.Props)for(o=Nt(e.Props),i=0;i<o.length;++i)(Object.prototype.hasOwnProperty.call(s,o[i])?r:Object.prototype.hasOwnProperty.call(l,o[i])?n:a).push([o[i],e.Props[o[i]]]);if(e.Custprops)for(o=Nt(e.Custprops),i=0;i<o.length;++i)Object.prototype.hasOwnProperty.call(e.Props||{},o[i])||(Object.prototype.hasOwnProperty.call(s,o[i])?r:Object.prototype.hasOwnProperty.call(l,o[i])?n:a).push([o[i],e.Custprops[o[i]]]);var f=[];for(i=0;i<a.length;++i)Yg.indexOf(a[i][0])>-1||Xg.indexOf(a[i][0])>-1||a[i][1]!=null&&f.push(a[i]);n.length&&Le.utils.cfb_add(t,"/SummaryInformation",K1(n,Rf.SI,l,V1)),(r.length||f.length)&&Le.utils.cfb_add(t,"/DocumentSummaryInformation",K1(r,Rf.DSI,s,G1,f.length?f:null,Rf.UDI))}function Mb(e,t){var r=t||{},n=Le.utils.cfb_new({root:"R"}),a="/Workbook";switch(r.bookType||"xls"){case"xls":r.bookType="biff8";case"xla":r.bookType||(r.bookType="xla");case"biff8":a="/Workbook",r.biff=8;break;case"biff5":a="/Book",r.biff=5;break;default:throw new Error("invalid type "+r.bookType+" for XLS CFB")}return Le.utils.cfb_add(n,a,Tx(e,r)),r.biff==8&&(e.Props||e.Custprops)&&Rb(e,n),r.biff==8&&e.vbaraw&&tE(n,Le.read(e.vbaraw,{type:typeof e.vbaraw=="string"?"binary":"buffer"})),n}var Bb={0:{f:H_},1:{f:K_},2:{f:gk},3:{f:nk},4:{f:q_},5:{f:uk},6:{f:yk},7:{f:sk},8:{f:Ck},9:{f:Sk},10:{f:bk},11:{f:Tk},12:{f:J_},13:{f:mk},14:{f:ik},15:{f:tk},16:{f:hk},17:{f:_k},18:{f:ck},19:{f:nu},20:{},21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{},31:{},32:{},33:{},34:{},35:{T:1},36:{T:-1},37:{T:1},38:{T:-1},39:{f:db},40:{},42:{},43:{f:y5},44:{f:v5},45:{f:k5},46:{f:T5},47:{f:b5},48:{},49:{f:Jw},50:{},51:{f:H5},52:{T:1},53:{T:-1},54:{T:1},55:{T:-1},56:{T:1},57:{T:-1},58:{},59:{},60:{f:Zy},62:{f:wk},63:{f:$5},64:{f:Gk},65:{},66:{},67:{},68:{},69:{},70:{},128:{},129:{T:1},130:{T:-1},131:{T:1,f:Zr,p:0},132:{T:-1},133:{T:1},134:{T:-1},135:{T:1},136:{T:-1},137:{T:1,f:Uk},138:{T:-1},139:{T:1},140:{T:-1},141:{T:1},142:{T:-1},143:{T:1},144:{T:-1},145:{T:1},146:{T:-1},147:{f:$_},148:{f:V_,p:16},151:{f:Lk},152:{},153:{f:fb},154:{},155:{},156:{f:lb},157:{},158:{},159:{T:1,f:l5},160:{T:-1},161:{T:1,f:Ca},162:{T:-1},163:{T:1},164:{T:-1},165:{T:1},166:{T:-1},167:{},168:{},169:{},170:{},171:{},172:{T:1},173:{T:-1},174:{},175:{},176:{f:Ak},177:{T:1},178:{T:-1},179:{T:1},180:{T:-1},181:{T:1},182:{T:-1},183:{T:1},184:{T:-1},185:{T:1},186:{T:-1},187:{T:1},188:{T:-1},189:{T:1},190:{T:-1},191:{T:1},192:{T:-1},193:{T:1},194:{T:-1},195:{T:1},196:{T:-1},197:{T:1},198:{T:-1},199:{T:1},200:{T:-1},201:{T:1},202:{T:-1},203:{T:1},204:{T:-1},205:{T:1},206:{T:-1},207:{T:1},208:{T:-1},209:{T:1},210:{T:-1},211:{T:1},212:{T:-1},213:{T:1},214:{T:-1},215:{T:1},216:{T:-1},217:{T:1},218:{T:-1},219:{T:1},220:{T:-1},221:{T:1},222:{T:-1},223:{T:1},224:{T:-1},225:{T:1},226:{T:-1},227:{T:1},228:{T:-1},229:{T:1},230:{T:-1},231:{T:1},232:{T:-1},233:{T:1},234:{T:-1},235:{T:1},236:{T:-1},237:{T:1},238:{T:-1},239:{T:1},240:{T:-1},241:{T:1},242:{T:-1},243:{T:1},244:{T:-1},245:{T:1},246:{T:-1},247:{T:1},248:{T:-1},249:{T:1},250:{T:-1},251:{T:1},252:{T:-1},253:{T:1},254:{T:-1},255:{T:1},256:{T:-1},257:{T:1},258:{T:-1},259:{T:1},260:{T:-1},261:{T:1},262:{T:-1},263:{T:1},264:{T:-1},265:{T:1},266:{T:-1},267:{T:1},268:{T:-1},269:{T:1},270:{T:-1},271:{T:1},272:{T:-1},273:{T:1},274:{T:-1},275:{T:1},276:{T:-1},277:{},278:{T:1},279:{T:-1},280:{T:1},281:{T:-1},282:{T:1},283:{T:1},284:{T:-1},285:{T:1},286:{T:-1},287:{T:1},288:{T:-1},289:{T:1},290:{T:-1},291:{T:1},292:{T:-1},293:{T:1},294:{T:-1},295:{T:1},296:{T:-1},297:{T:1},298:{T:-1},299:{T:1},300:{T:-1},301:{T:1},302:{T:-1},303:{T:1},304:{T:-1},305:{T:1},306:{T:-1},307:{T:1},308:{T:-1},309:{T:1},310:{T:-1},311:{T:1},312:{T:-1},313:{T:-1},314:{T:1},315:{T:-1},316:{T:1},317:{T:-1},318:{T:1},319:{T:-1},320:{T:1},321:{T:-1},322:{T:1},323:{T:-1},324:{T:1},325:{T:-1},326:{T:1},327:{T:-1},328:{T:1},329:{T:-1},330:{T:1},331:{T:-1},332:{T:1},333:{T:-1},334:{T:1},335:{f:U5},336:{T:-1},337:{f:V5,T:1},338:{T:-1},339:{T:1},340:{T:-1},341:{T:1},342:{T:-1},343:{T:1},344:{T:-1},345:{T:1},346:{T:-1},347:{T:1},348:{T:-1},349:{T:1},350:{T:-1},351:{},352:{},353:{T:1},354:{T:-1},355:{f:Hf},357:{},358:{},359:{},360:{T:1},361:{},362:{f:jy},363:{},364:{},366:{},367:{},368:{},369:{},370:{},371:{},372:{T:1},373:{T:-1},374:{T:1},375:{T:-1},376:{T:1},377:{T:-1},378:{T:1},379:{T:-1},380:{T:1},381:{T:-1},382:{T:1},383:{T:-1},384:{T:1},385:{T:-1},386:{T:1},387:{T:-1},388:{T:1},389:{T:-1},390:{T:1},391:{T:-1},392:{T:1},393:{T:-1},394:{T:1},395:{T:-1},396:{},397:{},398:{},399:{},400:{},401:{T:1},403:{},404:{},405:{},406:{},407:{},408:{},409:{},410:{},411:{},412:{},413:{},414:{},415:{},416:{},417:{},418:{},419:{},420:{},421:{},422:{T:1},423:{T:1},424:{T:-1},425:{T:-1},426:{f:Dk},427:{f:Ok},428:{},429:{T:1},430:{T:-1},431:{T:1},432:{T:-1},433:{T:1},434:{T:-1},435:{T:1},436:{T:-1},437:{T:1},438:{T:-1},439:{T:1},440:{T:-1},441:{T:1},442:{T:-1},443:{T:1},444:{T:-1},445:{T:1},446:{T:-1},447:{T:1},448:{T:-1},449:{T:1},450:{T:-1},451:{T:1},452:{T:-1},453:{T:1},454:{T:-1},455:{T:1},456:{T:-1},457:{T:1},458:{T:-1},459:{T:1},460:{T:-1},461:{T:1},462:{T:-1},463:{T:1},464:{T:-1},465:{T:1},466:{T:-1},467:{T:1},468:{T:-1},469:{T:1},470:{T:-1},471:{},472:{},473:{T:1},474:{T:-1},475:{},476:{f:Mk},477:{},478:{},479:{T:1},480:{T:-1},481:{T:1},482:{T:-1},483:{T:1},484:{T:-1},485:{f:j_},486:{T:1},487:{T:-1},488:{T:1},489:{T:-1},490:{T:1},491:{T:-1},492:{T:1},493:{T:-1},494:{f:Ik},495:{T:1},496:{T:-1},497:{T:1},498:{T:-1},499:{},500:{T:1},501:{T:-1},502:{T:1},503:{T:-1},504:{},505:{T:1},506:{T:-1},507:{},508:{T:1},509:{T:-1},510:{T:1},511:{T:-1},512:{},513:{},514:{T:1},515:{T:-1},516:{T:1},517:{T:-1},518:{T:1},519:{T:-1},520:{T:1},521:{T:-1},522:{},523:{},524:{},525:{},526:{},527:{},528:{T:1},529:{T:-1},530:{T:1},531:{T:-1},532:{T:1},533:{T:-1},534:{},535:{},536:{},537:{},538:{T:1},539:{T:-1},540:{T:1},541:{T:-1},542:{T:1},548:{},549:{},550:{f:Hf},551:{},552:{},553:{},554:{T:1},555:{T:-1},556:{T:1},557:{T:-1},558:{T:1},559:{T:-1},560:{T:1},561:{T:-1},562:{},564:{},565:{T:1},566:{T:-1},569:{T:1},570:{T:-1},572:{},573:{T:1},574:{T:-1},577:{},578:{},579:{},580:{},581:{},582:{},583:{},584:{},585:{},586:{},587:{},588:{T:-1},589:{},590:{T:1},591:{T:-1},592:{T:1},593:{T:-1},594:{T:1},595:{T:-1},596:{},597:{T:1},598:{T:-1},599:{T:1},600:{T:-1},601:{T:1},602:{T:-1},603:{T:1},604:{T:-1},605:{T:1},606:{T:-1},607:{},608:{T:1},609:{T:-1},610:{},611:{T:1},612:{T:-1},613:{T:1},614:{T:-1},615:{T:1},616:{T:-1},617:{T:1},618:{T:-1},619:{T:1},620:{T:-1},625:{},626:{T:1},627:{T:-1},628:{T:1},629:{T:-1},630:{T:1},631:{T:-1},632:{f:Z5},633:{T:1},634:{T:-1},635:{T:1,f:Q5},636:{T:-1},637:{f:ty},638:{T:1},639:{},640:{T:-1},641:{T:1},642:{T:-1},643:{T:1},644:{},645:{T:-1},646:{T:1},648:{T:1},649:{},650:{T:-1},651:{f:rb},652:{},653:{T:1},654:{T:-1},655:{T:1},656:{T:-1},657:{T:1},658:{T:-1},659:{},660:{T:1},661:{},662:{T:-1},663:{},664:{T:1},665:{},666:{T:-1},667:{},668:{},669:{},671:{T:1},672:{T:-1},673:{T:1},674:{T:-1},675:{},676:{},677:{},678:{},679:{},680:{},681:{},1024:{},1025:{},1026:{T:1},1027:{T:-1},1028:{T:1},1029:{T:-1},1030:{},1031:{T:1},1032:{T:-1},1033:{T:1},1034:{T:-1},1035:{},1036:{},1037:{},1038:{T:1},1039:{T:-1},1040:{},1041:{T:1},1042:{T:-1},1043:{},1044:{},1045:{},1046:{T:1},1047:{T:-1},1048:{T:1},1049:{T:-1},1050:{},1051:{T:1},1052:{T:1},1053:{f:Vk},1054:{T:1},1055:{},1056:{T:1},1057:{T:-1},1058:{T:1},1059:{T:-1},1061:{},1062:{T:1},1063:{T:-1},1064:{T:1},1065:{T:-1},1066:{T:1},1067:{T:-1},1068:{T:1},1069:{T:-1},1070:{T:1},1071:{T:-1},1072:{T:1},1073:{T:-1},1075:{T:1},1076:{T:-1},1077:{T:1},1078:{T:-1},1079:{T:1},1080:{T:-1},1081:{T:1},1082:{T:-1},1083:{T:1},1084:{T:-1},1085:{},1086:{T:1},1087:{T:-1},1088:{T:1},1089:{T:-1},1090:{T:1},1091:{T:-1},1092:{T:1},1093:{T:-1},1094:{T:1},1095:{T:-1},1096:{},1097:{T:1},1098:{},1099:{T:-1},1100:{T:1},1101:{T:-1},1102:{},1103:{},1104:{},1105:{},1111:{},1112:{},1113:{T:1},1114:{T:-1},1115:{T:1},1116:{T:-1},1117:{},1118:{T:1},1119:{T:-1},1120:{T:1},1121:{T:-1},1122:{T:1},1123:{T:-1},1124:{T:1},1125:{T:-1},1126:{},1128:{T:1},1129:{T:-1},1130:{},1131:{T:1},1132:{T:-1},1133:{T:1},1134:{T:-1},1135:{T:1},1136:{T:-1},1137:{T:1},1138:{T:-1},1139:{T:1},1140:{T:-1},1141:{},1142:{T:1},1143:{T:-1},1144:{T:1},1145:{T:-1},1146:{},1147:{T:1},1148:{T:-1},1149:{T:1},1150:{T:-1},1152:{T:1},1153:{T:-1},1154:{T:-1},1155:{T:-1},1156:{T:-1},1157:{T:1},1158:{T:-1},1159:{T:1},1160:{T:-1},1161:{T:1},1162:{T:-1},1163:{T:1},1164:{T:-1},1165:{T:1},1166:{T:-1},1167:{T:1},1168:{T:-1},1169:{T:1},1170:{T:-1},1171:{},1172:{T:1},1173:{T:-1},1177:{},1178:{T:1},1180:{},1181:{},1182:{},2048:{T:1},2049:{T:-1},2050:{},2051:{T:1},2052:{T:-1},2053:{},2054:{},2055:{T:1},2056:{T:-1},2057:{T:1},2058:{T:-1},2060:{},2067:{},2068:{T:1},2069:{T:-1},2070:{},2071:{},2072:{T:1},2073:{T:-1},2075:{},2076:{},2077:{T:1},2078:{T:-1},2079:{},2080:{T:1},2081:{T:-1},2082:{},2083:{T:1},2084:{T:-1},2085:{T:1},2086:{T:-1},2087:{T:1},2088:{T:-1},2089:{T:1},2090:{T:-1},2091:{},2092:{},2093:{T:1},2094:{T:-1},2095:{},2096:{T:1},2097:{T:-1},2098:{T:1},2099:{T:-1},2100:{T:1},2101:{T:-1},2102:{},2103:{T:1},2104:{T:-1},2105:{},2106:{T:1},2107:{T:-1},2108:{},2109:{T:1},2110:{T:-1},2111:{T:1},2112:{T:-1},2113:{T:1},2114:{T:-1},2115:{},2116:{},2117:{},2118:{T:1},2119:{T:-1},2120:{},2121:{T:1},2122:{T:-1},2123:{T:1},2124:{T:-1},2125:{},2126:{T:1},2127:{T:-1},2128:{},2129:{T:1},2130:{T:-1},2131:{T:1},2132:{T:-1},2133:{T:1},2134:{},2135:{},2136:{},2137:{T:1},2138:{T:-1},2139:{T:1},2140:{T:-1},2141:{},3072:{},3073:{},4096:{T:1},4097:{T:-1},5002:{T:1},5003:{T:-1},5081:{T:1},5082:{T:-1},5083:{},5084:{T:1},5085:{T:-1},5086:{T:1},5087:{T:-1},5088:{},5089:{},5090:{},5092:{T:1},5093:{T:-1},5094:{},5095:{T:1},5096:{T:-1},5097:{},5099:{},65535:{n:""}};function ie(e,t,r,n){var a=t;if(!isNaN(a)){var i=n||(r||[]).length||0,o=e.next(4);o.write_shift(2,a),o.write_shift(2,i),i>0&&eu(r)&&e.push(r)}}function Ub(e,t,r,n){var a=n||(r||[]).length||0;if(a<=8224)return ie(e,t,r,a);var i=t;if(!isNaN(i)){for(var o=r.parts||[],s=0,l=0,f=0;f+(o[s]||8224)<=8224;)f+=o[s]||8224,s++;var u=e.next(4);for(u.write_shift(2,i),u.write_shift(2,f),e.push(r.slice(l,l+f)),l+=f;l<a;){for(u=e.next(4),u.write_shift(2,60),f=0;f+(o[s]||8224)<=8224;)f+=o[s]||8224,s++;u.write_shift(2,f),e.push(r.slice(l,l+f)),l+=f}}}function Ho(e,t,r){return e||(e=G(7)),e.write_shift(2,t),e.write_shift(2,r),e.write_shift(2,0),e.write_shift(1,0),e}function zb(e,t,r,n){var a=G(9);return Ho(a,e,t),Qg(r,n||"b",a),a}function Hb(e,t,r){var n=G(8+2*r.length);return Ho(n,e,t),n.write_shift(1,r.length),n.write_shift(r.length,r,"sbcs"),n.l<n.length?n.slice(0,n.l):n}function Wb(e,t,r,n){if(t.v!=null)switch(t.t){case"d":case"n":var a=t.t=="d"?tr($t(t.v)):t.v;a==(a|0)&&a>=0&&a<65536?ie(e,2,r5(r,n,a)):ie(e,3,t5(r,n,a));return;case"b":case"e":ie(e,5,zb(r,n,t.v,t.t));return;case"s":case"str":ie(e,4,Hb(r,n,(t.v||"").slice(0,255)));return}ie(e,1,Ho(null,r,n))}function Gb(e,t,r,n){var a=Array.isArray(t),i=Ge(t["!ref"]||"A1"),o,s="",l=[];if(i.e.c>255||i.e.r>16383){if(n.WTF)throw new Error("Range "+(t["!ref"]||"A1")+" exceeds format limit A1:IV16384");i.e.c=Math.min(i.e.c,255),i.e.r=Math.min(i.e.c,16383),o=lt(i)}for(var f=i.s.r;f<=i.e.r;++f){s=It(f);for(var u=i.s.c;u<=i.e.c;++u){f===i.s.r&&(l[u]=Bt(u)),o=l[u]+s;var g=a?(t[f]||[])[u]:t[o];g&&Wb(e,g,f,u,n)}}}function Vb(e,t){var r=t||{};Jr!=null&&r.dense==null&&(r.dense=Jr);for(var n=er(),a=0,i=0;i<e.SheetNames.length;++i)e.SheetNames[i]==r.sheet&&(a=i);if(a==0&&r.sheet&&e.SheetNames[0]!=r.sheet)throw new Error("Sheet not found: "+r.sheet);return ie(n,r.biff==4?1033:r.biff==3?521:9,ou(e,16,r)),Gb(n,e.Sheets[e.SheetNames[a]],a,r,e),ie(n,10),n.end()}function Xb(e,t,r){ie(e,49,By({sz:12,color:{theme:1},name:"Arial",family:2,scheme:"minor"},r))}function jb(e,t,r){t&&[[5,8],[23,26],[41,44],[50,392]].forEach(function(n){for(var a=n[0];a<=n[1];++a)t[a]!=null&&ie(e,1054,Hy(a,t[a],r))})}function $b(e,t){var r=G(19);r.write_shift(4,2151),r.write_shift(4,0),r.write_shift(4,0),r.write_shift(2,3),r.write_shift(1,1),r.write_shift(4,0),ie(e,2151,r),r=G(39),r.write_shift(4,2152),r.write_shift(4,0),r.write_shift(4,0),r.write_shift(2,3),r.write_shift(1,0),r.write_shift(4,0),r.write_shift(2,1),r.write_shift(4,4),r.write_shift(2,0),qg(Ge(t["!ref"]||"A1"),r),r.write_shift(4,4),ie(e,2152,r)}function Yb(e,t){for(var r=0;r<16;++r)ie(e,224,J1({numFmtId:0,style:!0},0,t));t.cellXfs.forEach(function(n){ie(e,224,J1(n,0,t))})}function Kb(e,t){for(var r=0;r<t["!links"].length;++r){var n=t["!links"][r];ie(e,440,Ky(n)),n[1].Tooltip&&ie(e,2048,Qy(n))}delete t["!links"]}function Qb(e,t){if(t){var r=0;t.forEach(function(n,a){++r<=256&&n&&ie(e,125,qy(Kl(a,n),a))})}}function Jb(e,t,r,n,a){var i=16+Qn(a.cellXfs,t,a);if(t.v==null&&!t.bf){ie(e,513,_a(r,n,i));return}if(t.bf)ie(e,6,E_(t,r,n,a,i));else switch(t.t){case"d":case"n":var o=t.t=="d"?tr($t(t.v)):t.v;ie(e,515,Xy(r,n,o,i,a));break;case"b":case"e":ie(e,517,Vy(r,n,t.v,i,a,t.t));break;case"s":case"str":if(a.bookSST){var s=uu(a.Strings,t.v,a.revStrings);ie(e,253,Uy(r,n,s,i,a))}else ie(e,516,zy(r,n,(t.v||"").slice(0,255),i,a));break;default:ie(e,513,_a(r,n,i))}}function Zb(e,t,r){var n=er(),a=r.SheetNames[e],i=r.Sheets[a]||{},o=(r||{}).Workbook||{},s=(o.Sheets||[])[e]||{},l=Array.isArray(i),f=t.biff==8,u,g="",d=[],p=Ge(i["!ref"]||"A1"),x=f?65536:16384;if(p.e.c>255||p.e.r>=x){if(t.WTF)throw new Error("Range "+(i["!ref"]||"A1")+" exceeds format limit A1:IV16384");p.e.c=Math.min(p.e.c,255),p.e.r=Math.min(p.e.c,x-1)}ie(n,2057,ou(r,16,t)),ie(n,13,Sr(1)),ie(n,12,Sr(100)),ie(n,15,jt(!0)),ie(n,17,jt(!1)),ie(n,16,Ea(.001)),ie(n,95,jt(!0)),ie(n,42,jt(!1)),ie(n,43,jt(!1)),ie(n,130,Sr(1)),ie(n,128,Gy([0,0])),ie(n,131,jt(!1)),ie(n,132,jt(!1)),f&&Qb(n,i["!cols"]),ie(n,512,Wy(p,t)),f&&(i["!links"]=[]);for(var h=p.s.r;h<=p.e.r;++h){g=It(h);for(var v=p.s.c;v<=p.e.c;++v){h===p.s.r&&(d[v]=Bt(v)),u=d[v]+g;var w=l?(i[h]||[])[v]:i[u];w&&(Jb(n,w,h,v,t),f&&w.l&&i["!links"].push([u,w.l]))}}var m=s.CodeName||s.name||a;return f&&ie(n,574,My((o.Views||[])[0])),f&&(i["!merges"]||[]).length&&ie(n,229,Yy(i["!merges"])),f&&Kb(n,i),ie(n,442,Zg(m,t)),f&&$b(n,i),ie(n,10),n.end()}function qb(e,t,r){var n=er(),a=(e||{}).Workbook||{},i=a.Sheets||[],o=a.WBProps||{},s=r.biff==8,l=r.biff==5;if(ie(n,2057,ou(e,5,r)),r.bookType=="xla"&&ie(n,135),ie(n,225,s?Sr(1200):null),ie(n,193,by(2)),l&&ie(n,191),l&&ie(n,192),ie(n,226),ie(n,92,Ly("SheetJS",r)),ie(n,66,Sr(s?1200:1252)),s&&ie(n,353,Sr(0)),s&&ie(n,448),ie(n,317,e5(e.SheetNames.length)),s&&e.vbaraw&&ie(n,211),s&&e.vbaraw){var f=o.CodeName||"ThisWorkbook";ie(n,442,Zg(f,r))}ie(n,156,Sr(17)),ie(n,25,jt(!1)),ie(n,18,jt(!1)),ie(n,19,Sr(0)),s&&ie(n,431,jt(!1)),s&&ie(n,444,Sr(0)),ie(n,61,Ry(r)),ie(n,64,jt(!1)),ie(n,141,Sr(0)),ie(n,34,jt(ab(e)=="true")),ie(n,14,jt(!0)),s&&ie(n,439,jt(!1)),ie(n,218,Sr(0)),Xb(n,e,r),jb(n,e.SSF,r),Yb(n,r),s&&ie(n,352,jt(!1));var u=n.end(),g=er();s&&ie(g,140,Jy()),s&&r.Strings&&Ub(g,252,Oy(r.Strings,r)),ie(g,10);var d=g.end(),p=er(),x=0,h=0;for(h=0;h<e.SheetNames.length;++h)x+=(s?12:11)+(s?2:1)*e.SheetNames[h].length;var v=u.length+x+d.length;for(h=0;h<e.SheetNames.length;++h){var w=i[h]||{};ie(p,133,Dy({pos:v,hs:w.Hidden||0,dt:0,name:e.SheetNames[h]},r)),v+=t[h].length}var m=p.end();if(x!=m.length)throw new Error("BS8 "+x+" != "+m.length);var E=[];return u.length&&E.push(u),m.length&&E.push(m),d.length&&E.push(d),Ft(E)}function eT(e,t){var r=t||{},n=[];e&&!e.SSF&&(e.SSF=rr(qe)),e&&e.SSF&&(Gl(),Wl(e.SSF),r.revssf=Vl(e.SSF),r.revssf[e.SSF[65535]]=0,r.ssf=e.SSF),r.Strings=[],r.Strings.Count=0,r.Strings.Unique=0,du(r),r.cellXfs=[],Qn(r.cellXfs,{},{revssf:{General:0}}),e.Props||(e.Props={});for(var a=0;a<e.SheetNames.length;++a)n[n.length]=Zb(a,r,e);return n.unshift(qb(e,n,r)),Ft(n)}function Tx(e,t){for(var r=0;r<=e.SheetNames.length;++r){var n=e.Sheets[e.SheetNames[r]];if(!(!n||!n["!ref"])){var a=pr(n["!ref"]);a.e.c>255&&typeof console<"u"&&console.error&&console.error("Worksheet '"+e.SheetNames[r]+"' extends beyond column IV (255).  Data may be lost.")}}var i=t||{};switch(i.biff||2){case 8:case 5:return eT(e,t);case 4:case 3:case 2:return Vb(e,t)}throw new Error("invalid type "+i.bookType+" for BIFF")}function tT(e,t,r,n){for(var a=e["!merges"]||[],i=[],o=t.s.c;o<=t.e.c;++o){for(var s=0,l=0,f=0;f<a.length;++f)if(!(a[f].s.r>r||a[f].s.c>o)&&!(a[f].e.r<r||a[f].e.c<o)){if(a[f].s.r<r||a[f].s.c<o){s=-1;break}s=a[f].e.r-a[f].s.r+1,l=a[f].e.c-a[f].s.c+1;break}if(!(s<0)){var u=Ie({r,c:o}),g=n.dense?(e[r]||[])[o]:e[u],d=g&&g.v!=null&&(g.h||Iw(g.w||(vn(g),g.w)||""))||"",p={};s>1&&(p.rowspan=s),l>1&&(p.colspan=l),n.editable?d='<span contenteditable="true">'+d+"</span>":g&&(p["data-t"]=g&&g.t||"z",g.v!=null&&(p["data-v"]=g.v),g.z!=null&&(p["data-z"]=g.z),g.l&&(g.l.Target||"#").charAt(0)!="#"&&(d='<a href="'+g.l.Target+'">'+d+"</a>")),p.id=(n.id||"sjs")+"-"+u,i.push(ae("td",d,p))}}var x="<tr>";return x+i.join("")+"</tr>"}var rT='<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',nT="</body></html>";function aT(e,t,r){var n=[];return n.join("")+"<table"+(r&&r.id?' id="'+r.id+'"':"")+">"}function Sx(e,t){var r=t||{},n=r.header!=null?r.header:rT,a=r.footer!=null?r.footer:nT,i=[n],o=pr(e["!ref"]);r.dense=Array.isArray(e),i.push(aT(e,o,r));for(var s=o.s.r;s<=o.e.r;++s)i.push(tT(e,o,s,r));return i.push("</table>"+a),i.join("")}function Cx(e,t,r){var n=r||{};Jr!=null&&(n.dense=Jr);var a=0,i=0;if(n.origin!=null)if(typeof n.origin=="number")a=n.origin;else{var o=typeof n.origin=="string"?Et(n.origin):n.origin;a=o.r,i=o.c}var s=t.getElementsByTagName("tr"),l=Math.min(n.sheetRows||1e7,s.length),f={s:{r:0,c:0},e:{r:a,c:i}};if(e["!ref"]){var u=pr(e["!ref"]);f.s.r=Math.min(f.s.r,u.s.r),f.s.c=Math.min(f.s.c,u.s.c),f.e.r=Math.max(f.e.r,u.e.r),f.e.c=Math.max(f.e.c,u.e.c),a==-1&&(f.e.r=a=u.e.r+1)}var g=[],d=0,p=e["!rows"]||(e["!rows"]=[]),x=0,h=0,v=0,w=0,m=0,E=0;for(e["!cols"]||(e["!cols"]=[]);x<s.length&&h<l;++x){var F=s[x];if(ag(F)){if(n.display)continue;p[h]={hidden:!0}}var P=F.children;for(v=w=0;v<P.length;++v){var D=P[v];if(!(n.display&&ag(D))){var k=D.hasAttribute("data-v")?D.getAttribute("data-v"):D.hasAttribute("v")?D.getAttribute("v"):Ow(D.innerHTML),L=D.getAttribute("data-z")||D.getAttribute("z");for(d=0;d<g.length;++d){var M=g[d];M.s.c==w+i&&M.s.r<h+a&&h+a<=M.e.r&&(w=M.e.c+1-i,d=-1)}E=+D.getAttribute("colspan")||1,((m=+D.getAttribute("rowspan")||1)>1||E>1)&&g.push({s:{r:h+a,c:w+i},e:{r:h+a+(m||1)-1,c:w+i+(E||1)-1}});var R={t:"s",v:k},X=D.getAttribute("data-t")||D.getAttribute("t")||"";k!=null&&(k.length==0?R.t=X||"z":n.raw||k.trim().length==0||X=="s"||(k==="TRUE"?R={t:"b",v:!0}:k==="FALSE"?R={t:"b",v:!1}:isNaN(gn(k))?isNaN(Lo(k).getDate())||(R={t:"d",v:$t(k)},n.cellDates||(R={t:"n",v:tr(R.v)}),R.z=n.dateNF||qe[14]):R={t:"n",v:gn(k)})),R.z===void 0&&L!=null&&(R.z=L);var J="",ce=D.getElementsByTagName("A");if(ce&&ce.length)for(var ye=0;ye<ce.length&&!(ce[ye].hasAttribute("href")&&(J=ce[ye].getAttribute("href"),J.charAt(0)!="#"));++ye);J&&J.charAt(0)!="#"&&(R.l={Target:J}),n.dense?(e[h+a]||(e[h+a]=[]),e[h+a][w+i]=R):e[Ie({c:w+i,r:h+a})]=R,f.e.c<w+i&&(f.e.c=w+i),w+=E}}++h}return g.length&&(e["!merges"]=(e["!merges"]||[]).concat(g)),f.e.r=Math.max(f.e.r,h-1+a),e["!ref"]=lt(f),h>=l&&(e["!fullref"]=lt((f.e.r=s.length-x+h-1+a,f))),e}function Ax(e,t){var r=t||{},n=r.dense?[]:{};return Cx(n,e,t)}function iT(e,t){return ka(Ax(e,t),t)}function ag(e){var t="",r=oT(e);return r&&(t=r(e).getPropertyValue("display")),t||(t=e.style&&e.style.display),t==="none"}function oT(e){return e.ownerDocument.defaultView&&typeof e.ownerDocument.defaultView.getComputedStyle=="function"?e.ownerDocument.defaultView.getComputedStyle:typeof getComputedStyle=="function"?getComputedStyle:null}var sT=function(){var e=["<office:master-styles>",'<style:master-page style:name="mp1" style:page-layout-name="mp1">',"<style:header/>",'<style:header-left style:display="false"/>',"<style:footer/>",'<style:footer-left style:display="false"/>',"</style:master-page>","</office:master-styles>"].join(""),t="<office:document-styles "+Do({"xmlns:office":"urn:oasis:names:tc:opendocument:xmlns:office:1.0","xmlns:table":"urn:oasis:names:tc:opendocument:xmlns:table:1.0","xmlns:style":"urn:oasis:names:tc:opendocument:xmlns:style:1.0","xmlns:text":"urn:oasis:names:tc:opendocument:xmlns:text:1.0","xmlns:draw":"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0","xmlns:fo":"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:number":"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0","xmlns:svg":"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0","xmlns:of":"urn:oasis:names:tc:opendocument:xmlns:of:1.2","office:version":"1.2"})+">"+e+"</office:document-styles>";return function(){return ct+t}}(),ig=function(){var e=function(i){return Pe(i).replace(/  +/g,function(o){return'<text:s text:c="'+o.length+'"/>'}).replace(/\t/g,"<text:tab/>").replace(/\n/g,"</text:p><text:p>").replace(/^ /,"<text:s/>").replace(/ $/,"<text:s/>")},t=`          <table:table-cell />
`,r=`          <table:covered-table-cell/>
`,n=function(i,o,s){var l=[];l.push('      <table:table table:name="'+Pe(o.SheetNames[s])+`" table:style-name="ta1">
`);var f=0,u=0,g=pr(i["!ref"]||"A1"),d=i["!merges"]||[],p=0,x=Array.isArray(i);if(i["!cols"])for(u=0;u<=g.e.c;++u)l.push("        <table:table-column"+(i["!cols"][u]?' table:style-name="co'+i["!cols"][u].ods+'"':"")+`></table:table-column>
`);var h="",v=i["!rows"]||[];for(f=0;f<g.s.r;++f)h=v[f]?' table:style-name="ro'+v[f].ods+'"':"",l.push("        <table:table-row"+h+`></table:table-row>
`);for(;f<=g.e.r;++f){for(h=v[f]?' table:style-name="ro'+v[f].ods+'"':"",l.push("        <table:table-row"+h+`>
`),u=0;u<g.s.c;++u)l.push(t);for(;u<=g.e.c;++u){var w=!1,m={},E="";for(p=0;p!=d.length;++p)if(!(d[p].s.c>u)&&!(d[p].s.r>f)&&!(d[p].e.c<u)&&!(d[p].e.r<f)){(d[p].s.c!=u||d[p].s.r!=f)&&(w=!0),m["table:number-columns-spanned"]=d[p].e.c-d[p].s.c+1,m["table:number-rows-spanned"]=d[p].e.r-d[p].s.r+1;break}if(w){l.push(r);continue}var F=Ie({r:f,c:u}),P=x?(i[f]||[])[u]:i[F];if(P&&P.f&&(m["table:formula"]=Pe(C_(P.f)),P.F&&P.F.slice(0,F.length)==F)){var D=pr(P.F);m["table:number-matrix-columns-spanned"]=D.e.c-D.s.c+1,m["table:number-matrix-rows-spanned"]=D.e.r-D.s.r+1}if(!P){l.push(t);continue}switch(P.t){case"b":E=P.v?"TRUE":"FALSE",m["office:value-type"]="boolean",m["office:boolean-value"]=P.v?"true":"false";break;case"n":E=P.w||String(P.v||0),m["office:value-type"]="float",m["office:value"]=P.v||0;break;case"s":case"str":E=P.v==null?"":P.v,m["office:value-type"]="string";break;case"d":E=P.w||$t(P.v).toISOString(),m["office:value-type"]="date",m["office:date-value"]=$t(P.v).toISOString(),m["table:style-name"]="ce1";break;default:l.push(t);continue}var k=e(E);if(P.l&&P.l.Target){var L=P.l.Target;L=L.charAt(0)=="#"?"#"+A_(L.slice(1)):L,L.charAt(0)!="#"&&!L.match(/^\w+:/)&&(L="../"+L),k=ae("text:a",k,{"xlink:href":L.replace(/&/g,"&amp;")})}l.push("          "+ae("table:table-cell",ae("text:p",k,{}),m)+`
`)}l.push(`        </table:table-row>
`)}return l.push(`      </table:table>
`),l.join("")},a=function(i,o){i.push(` <office:automatic-styles>
`),i.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`),i.push(`   <number:month number:style="long"/>
`),i.push(`   <number:text>/</number:text>
`),i.push(`   <number:day number:style="long"/>
`),i.push(`   <number:text>/</number:text>
`),i.push(`   <number:year/>
`),i.push(`  </number:date-style>
`);var s=0;o.SheetNames.map(function(f){return o.Sheets[f]}).forEach(function(f){if(f&&f["!cols"]){for(var u=0;u<f["!cols"].length;++u)if(f["!cols"][u]){var g=f["!cols"][u];if(g.width==null&&g.wpx==null&&g.wch==null)continue;su(g),g.ods=s;var d=f["!cols"][u].wpx+"px";i.push('  <style:style style:name="co'+s+`" style:family="table-column">
`),i.push('   <style:table-column-properties fo:break-before="auto" style:column-width="'+d+`"/>
`),i.push(`  </style:style>
`),++s}}});var l=0;o.SheetNames.map(function(f){return o.Sheets[f]}).forEach(function(f){if(f&&f["!rows"]){for(var u=0;u<f["!rows"].length;++u)if(f["!rows"][u]){f["!rows"][u].ods=l;var g=f["!rows"][u].hpx+"px";i.push('  <style:style style:name="ro'+l+`" style:family="table-row">
`),i.push('   <style:table-row-properties fo:break-before="auto" style:row-height="'+g+`"/>
`),i.push(`  </style:style>
`),++l}}}),i.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`),i.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`),i.push(`  </style:style>
`),i.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`),i.push(` </office:automatic-styles>
`)};return function(o,s){var l=[ct],f=Do({"xmlns:office":"urn:oasis:names:tc:opendocument:xmlns:office:1.0","xmlns:table":"urn:oasis:names:tc:opendocument:xmlns:table:1.0","xmlns:style":"urn:oasis:names:tc:opendocument:xmlns:style:1.0","xmlns:text":"urn:oasis:names:tc:opendocument:xmlns:text:1.0","xmlns:draw":"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0","xmlns:fo":"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:meta":"urn:oasis:names:tc:opendocument:xmlns:meta:1.0","xmlns:number":"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0","xmlns:presentation":"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0","xmlns:svg":"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0","xmlns:chart":"urn:oasis:names:tc:opendocument:xmlns:chart:1.0","xmlns:dr3d":"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0","xmlns:math":"http://www.w3.org/1998/Math/MathML","xmlns:form":"urn:oasis:names:tc:opendocument:xmlns:form:1.0","xmlns:script":"urn:oasis:names:tc:opendocument:xmlns:script:1.0","xmlns:ooo":"http://openoffice.org/2004/office","xmlns:ooow":"http://openoffice.org/2004/writer","xmlns:oooc":"http://openoffice.org/2004/calc","xmlns:dom":"http://www.w3.org/2001/xml-events","xmlns:xforms":"http://www.w3.org/2002/xforms","xmlns:xsd":"http://www.w3.org/2001/XMLSchema","xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","xmlns:sheet":"urn:oasis:names:tc:opendocument:sh33tjs:1.0","xmlns:rpt":"http://openoffice.org/2005/report","xmlns:of":"urn:oasis:names:tc:opendocument:xmlns:of:1.2","xmlns:xhtml":"http://www.w3.org/1999/xhtml","xmlns:grddl":"http://www.w3.org/2003/g/data-view#","xmlns:tableooo":"http://openoffice.org/2009/table","xmlns:drawooo":"http://openoffice.org/2010/draw","xmlns:calcext":"urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0","xmlns:loext":"urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0","xmlns:field":"urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0","xmlns:formx":"urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0","xmlns:css3t":"http://www.w3.org/TR/css3-text/","office:version":"1.2"}),u=Do({"xmlns:config":"urn:oasis:names:tc:opendocument:xmlns:config:1.0","office:mimetype":"application/vnd.oasis.opendocument.spreadsheet"});s.bookType=="fods"?(l.push("<office:document"+f+u+`>
`),l.push(Gg().replace(/office:document-meta/g,"office:meta"))):l.push("<office:document-content"+f+`>
`),a(l,o),l.push(`  <office:body>
`),l.push(`    <office:spreadsheet>
`);for(var g=0;g!=o.SheetNames.length;++g)l.push(n(o.Sheets[o.SheetNames[g]],o,g,s));return l.push(`    </office:spreadsheet>
`),l.push(`  </office:body>
`),s.bookType=="fods"?l.push("</office:document>"):l.push("</office:document-content>"),l.join("")}}();function Fx(e,t){if(t.bookType=="fods")return ig(e,t);var r=jf(),n="",a=[],i=[];return n="mimetype",Ee(r,n,"application/vnd.oasis.opendocument.spreadsheet"),n="content.xml",Ee(r,n,ig(e,t)),a.push([n,"text/xml"]),i.push([n,"ContentFile"]),n="styles.xml",Ee(r,n,sT(e,t)),a.push([n,"text/xml"]),i.push([n,"StylesFile"]),n="meta.xml",Ee(r,n,ct+Gg()),a.push([n,"text/xml"]),i.push([n,"MetadataFile"]),n="manifest.rdf",Ee(r,n,wy(i)),a.push([n,"application/rdf+xml"]),n="META-INF/manifest.xml",Ee(r,n,my(a)),r}function Ul(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function lT(e){return typeof TextEncoder<"u"?new TextEncoder().encode(e):Br(hn(e))}function cT(e,t){e:for(var r=0;r<=e.length-t.length;++r){for(var n=0;n<t.length;++n)if(e[r+n]!=t[n])continue e;return!0}return!1}function Kn(e){var t=e.reduce(function(a,i){return a+i.length},0),r=new Uint8Array(t),n=0;return e.forEach(function(a){r.set(a,n),n+=a.length}),r}function fT(e,t,r){var n=Math.floor(r==0?0:Math.LOG10E*Math.log(Math.abs(r)))+6176-20,a=r/Math.pow(10,n-6176);e[t+15]|=n>>7,e[t+14]|=(n&127)<<1;for(var i=0;a>=1;++i,a/=256)e[t+i]=a&255;e[t+15]|=r>=0?0:128}function Oo(e,t){var r=t?t[0]:0,n=e[r]&127;e:if(e[r++]>=128&&(n|=(e[r]&127)<<7,e[r++]<128||(n|=(e[r]&127)<<14,e[r++]<128)||(n|=(e[r]&127)<<21,e[r++]<128)||(n+=(e[r]&127)*Math.pow(2,28),++r,e[r++]<128)||(n+=(e[r]&127)*Math.pow(2,35),++r,e[r++]<128)||(n+=(e[r]&127)*Math.pow(2,42),++r,e[r++]<128)))break e;return t&&(t[0]=r),n}function Ae(e){var t=new Uint8Array(7);t[0]=e&127;var r=1;e:if(e>127){if(t[r-1]|=128,t[r]=e>>7&127,++r,e<=16383||(t[r-1]|=128,t[r]=e>>14&127,++r,e<=2097151)||(t[r-1]|=128,t[r]=e>>21&127,++r,e<=268435455)||(t[r-1]|=128,t[r]=e/256>>>21&127,++r,e<=34359738367)||(t[r-1]|=128,t[r]=e/65536>>>21&127,++r,e<=4398046511103))break e;t[r-1]|=128,t[r]=e/16777216>>>21&127,++r}return t.slice(0,r)}function mi(e){var t=0,r=e[t]&127;e:if(e[t++]>=128){if(r|=(e[t]&127)<<7,e[t++]<128||(r|=(e[t]&127)<<14,e[t++]<128)||(r|=(e[t]&127)<<21,e[t++]<128))break e;r|=(e[t]&127)<<28}return r}function ht(e){for(var t=[],r=[0];r[0]<e.length;){var n=r[0],a=Oo(e,r),i=a&7;a=Math.floor(a/8);var o=0,s;if(a==0)break;switch(i){case 0:{for(var l=r[0];e[r[0]++]>=128;);s=e.slice(l,r[0])}break;case 5:o=4,s=e.slice(r[0],r[0]+o),r[0]+=o;break;case 1:o=8,s=e.slice(r[0],r[0]+o),r[0]+=o;break;case 2:o=Oo(e,r),s=e.slice(r[0],r[0]+o),r[0]+=o;break;case 3:case 4:default:throw new Error("PB Type ".concat(i," for Field ").concat(a," at offset ").concat(n))}var f={data:s,type:i};t[a]==null?t[a]=[f]:t[a].push(f)}return t}function Ct(e){var t=[];return e.forEach(function(r,n){r.forEach(function(a){a.data&&(t.push(Ae(n*8+a.type)),a.type==2&&t.push(Ae(a.data.length)),t.push(a.data))})}),Kn(t)}function Rr(e){for(var t,r=[],n=[0];n[0]<e.length;){var a=Oo(e,n),i=ht(e.slice(n[0],n[0]+a));n[0]+=a;var o={id:mi(i[1][0].data),messages:[]};i[2].forEach(function(s){var l=ht(s.data),f=mi(l[3][0].data);o.messages.push({meta:l,data:e.slice(n[0],n[0]+f)}),n[0]+=f}),(t=i[3])!=null&&t[0]&&(o.merge=mi(i[3][0].data)>>>0>0),r.push(o)}return r}function ci(e){var t=[];return e.forEach(function(r){var n=[];n[1]=[{data:Ae(r.id),type:0}],n[2]=[],r.merge!=null&&(n[3]=[{data:Ae(+!!r.merge),type:0}]);var a=[];r.messages.forEach(function(o){a.push(o.data),o.meta[3]=[{type:0,data:Ae(o.data.length)}],n[2].push({data:Ct(o.meta),type:2})});var i=Ct(n);t.push(Ae(i.length)),t.push(i),a.forEach(function(o){return t.push(o)})}),Kn(t)}function uT(e,t){if(e!=0)throw new Error("Unexpected Snappy chunk type ".concat(e));for(var r=[0],n=Oo(t,r),a=[];r[0]<t.length;){var i=t[r[0]]&3;if(i==0){var o=t[r[0]++]>>2;if(o<60)++o;else{var s=o-59;o=t[r[0]],s>1&&(o|=t[r[0]+1]<<8),s>2&&(o|=t[r[0]+2]<<16),s>3&&(o|=t[r[0]+3]<<24),o>>>=0,o++,r[0]+=s}a.push(t.slice(r[0],r[0]+o)),r[0]+=o;continue}else{var l=0,f=0;if(i==1?(f=(t[r[0]]>>2&7)+4,l=(t[r[0]++]&224)<<3,l|=t[r[0]++]):(f=(t[r[0]++]>>2)+1,i==2?(l=t[r[0]]|t[r[0]+1]<<8,r[0]+=2):(l=(t[r[0]]|t[r[0]+1]<<8|t[r[0]+2]<<16|t[r[0]+3]<<24)>>>0,r[0]+=4)),a=[Kn(a)],l==0)throw new Error("Invalid offset 0");if(l>a[0].length)throw new Error("Invalid offset beyond length");if(f>=l)for(a.push(a[0].slice(-l)),f-=l;f>=a[a.length-1].length;)a.push(a[a.length-1]),f-=a[a.length-1].length;a.push(a[0].slice(-l,-l+f))}}var u=Kn(a);if(u.length!=n)throw new Error("Unexpected length: ".concat(u.length," != ").concat(n));return u}function Mr(e){for(var t=[],r=0;r<e.length;){var n=e[r++],a=e[r]|e[r+1]<<8|e[r+2]<<16;r+=3,t.push(uT(n,e.slice(r,r+a))),r+=a}if(r!==e.length)throw new Error("data is not a valid framed stream!");return Kn(t)}function fi(e){for(var t=[],r=0;r<e.length;){var n=Math.min(e.length-r,268435455),a=new Uint8Array(4);t.push(a);var i=Ae(n),o=i.length;t.push(i),n<=60?(o++,t.push(new Uint8Array([n-1<<2]))):n<=256?(o+=2,t.push(new Uint8Array([240,n-1&255]))):n<=65536?(o+=3,t.push(new Uint8Array([244,n-1&255,n-1>>8&255]))):n<=16777216?(o+=4,t.push(new Uint8Array([248,n-1&255,n-1>>8&255,n-1>>16&255]))):n<=4294967296&&(o+=5,t.push(new Uint8Array([252,n-1&255,n-1>>8&255,n-1>>16&255,n-1>>>24&255]))),t.push(e.slice(r,r+n)),o+=n,a[0]=0,a[1]=o&255,a[2]=o>>8&255,a[3]=o>>16&255,r+=n}return Kn(t)}function Mf(e,t){var r=new Uint8Array(32),n=Ul(r),a=12,i=0;switch(r[0]=5,e.t){case"n":r[1]=2,fT(r,a,e.v),i|=1,a+=16;break;case"b":r[1]=6,n.setFloat64(a,e.v?1:0,!0),i|=2,a+=8;break;case"s":if(t.indexOf(e.v)==-1)throw new Error("Value ".concat(e.v," missing from SST!"));r[1]=3,n.setUint32(a,t.indexOf(e.v),!0),i|=8,a+=4;break;default:throw"unsupported cell type "+e.t}return n.setUint32(8,i,!0),r.slice(0,a)}function Bf(e,t){var r=new Uint8Array(32),n=Ul(r),a=12,i=0;switch(r[0]=3,e.t){case"n":r[2]=2,n.setFloat64(a,e.v,!0),i|=32,a+=8;break;case"b":r[2]=6,n.setFloat64(a,e.v?1:0,!0),i|=32,a+=8;break;case"s":if(t.indexOf(e.v)==-1)throw new Error("Value ".concat(e.v," missing from SST!"));r[2]=3,n.setUint32(a,t.indexOf(e.v),!0),i|=16,a+=4;break;default:throw"unsupported cell type "+e.t}return n.setUint32(4,i,!0),r.slice(0,a)}function Vn(e){var t=ht(e);return Oo(t[1][0].data)}function dT(e,t,r){var n,a,i,o;if(!((n=e[6])!=null&&n[0])||!((a=e[7])!=null&&a[0]))throw"Mutation only works on post-BNC storages!";var s=((o=(i=e[8])==null?void 0:i[0])==null?void 0:o.data)&&mi(e[8][0].data)>0||!1;if(s)throw"Math only works with normal offsets";for(var l=0,f=Ul(e[7][0].data),u=0,g=[],d=Ul(e[4][0].data),p=0,x=[],h=0;h<t.length;++h){if(t[h]==null){f.setUint16(h*2,65535,!0),d.setUint16(h*2,65535);continue}f.setUint16(h*2,u,!0),d.setUint16(h*2,p,!0);var v,w;switch(typeof t[h]){case"string":v=Mf({t:"s",v:t[h]},r),w=Bf({t:"s",v:t[h]},r);break;case"number":v=Mf({t:"n",v:t[h]},r),w=Bf({t:"n",v:t[h]},r);break;case"boolean":v=Mf({t:"b",v:t[h]},r),w=Bf({t:"b",v:t[h]},r);break;default:throw new Error("Unsupported value "+t[h])}g.push(v),u+=v.length,x.push(w),p+=w.length,++l}for(e[2][0].data=Ae(l);h<e[7][0].data.length/2;++h)f.setUint16(h*2,65535,!0),d.setUint16(h*2,65535,!0);return e[6][0].data=Kn(g),e[3][0].data=Kn(x),l}function hT(e,t){if(!t||!t.numbers)throw new Error("Must pass a `numbers` option -- check the README");var r=e.Sheets[e.SheetNames[0]];e.SheetNames.length>1&&console.error("The Numbers writer currently writes only the first table");var n=pr(r["!ref"]);n.s.r=n.s.c=0;var a=!1;n.e.c>9&&(a=!0,n.e.c=9),n.e.r>49&&(a=!0,n.e.r=49),a&&console.error("The Numbers writer is currently limited to ".concat(lt(n)));var i=zl(r,{range:n,header:1}),o=["~Sh33tJ5~"];i.forEach(function(N){return N.forEach(function(I){typeof I=="string"&&o.push(I)})});var s={},l=[],f=Le.read(t.numbers,{type:"base64"});f.FileIndex.map(function(N,I){return[N,f.FullPaths[I]]}).forEach(function(N){var I=N[0],Y=N[1];if(I.type==2&&I.name.match(/\.iwa/)){var W=I.content,Z=Mr(W),ee=Rr(Z);ee.forEach(function(K){l.push(K.id),s[K.id]={deps:[],location:Y,type:mi(K.messages[0].meta[1][0].data)}})}}),l.sort(function(N,I){return N-I});var u=l.filter(function(N){return N>1}).map(function(N){return[N,Ae(N)]});f.FileIndex.map(function(N,I){return[N,f.FullPaths[I]]}).forEach(function(N){var I=N[0],Y=N[1];if(I.name.match(/\.iwa/)){var W=Rr(Mr(I.content));W.forEach(function(Z){Z.messages.forEach(function(ee){u.forEach(function(K){Z.messages.some(function(ve){return mi(ve.meta[1][0].data)!=11006&&cT(ve.data,K[1])})&&s[K[0]].deps.push(Z.id)})})})}});function g(){for(var N=927262;N<2e6;++N)if(!s[N])return N;throw new Error("Too many messages")}for(var d=Le.find(f,s[1].location),p=Rr(Mr(d.content)),x,h=0;h<p.length;++h){var v=p[h];v.id==1&&(x=v)}var w=Vn(ht(x.messages[0].data)[1][0].data);for(d=Le.find(f,s[w].location),p=Rr(Mr(d.content)),h=0;h<p.length;++h)v=p[h],v.id==w&&(x=v);for(w=Vn(ht(x.messages[0].data)[2][0].data),d=Le.find(f,s[w].location),p=Rr(Mr(d.content)),h=0;h<p.length;++h)v=p[h],v.id==w&&(x=v);for(w=Vn(ht(x.messages[0].data)[2][0].data),d=Le.find(f,s[w].location),p=Rr(Mr(d.content)),h=0;h<p.length;++h)v=p[h],v.id==w&&(x=v);var m=ht(x.messages[0].data);{m[6][0].data=Ae(n.e.r+1),m[7][0].data=Ae(n.e.c+1);var E=Vn(m[46][0].data),F=Le.find(f,s[E].location),P=Rr(Mr(F.content));{for(var D=0;D<P.length&&P[D].id!=E;++D);if(P[D].id!=E)throw"Bad ColumnRowUIDMapArchive";var k=ht(P[D].messages[0].data);k[1]=[],k[2]=[],k[3]=[];for(var L=0;L<=n.e.c;++L){var M=[];M[1]=M[2]=[{type:0,data:Ae(L+420690)}],k[1].push({type:2,data:Ct(M)}),k[2].push({type:0,data:Ae(L)}),k[3].push({type:0,data:Ae(L)})}k[4]=[],k[5]=[],k[6]=[];for(var R=0;R<=n.e.r;++R)M=[],M[1]=M[2]=[{type:0,data:Ae(R+726270)}],k[4].push({type:2,data:Ct(M)}),k[5].push({type:0,data:Ae(R)}),k[6].push({type:0,data:Ae(R)});P[D].messages[0].data=Ct(k)}F.content=fi(ci(P)),F.size=F.content.length,delete m[46];var X=ht(m[4][0].data);{X[7][0].data=Ae(n.e.r+1);var J=ht(X[1][0].data),ce=Vn(J[2][0].data);F=Le.find(f,s[ce].location),P=Rr(Mr(F.content));{if(P[0].id!=ce)throw"Bad HeaderStorageBucket";var ye=ht(P[0].messages[0].data);for(R=0;R<i.length;++R){var he=ht(ye[2][0].data);he[1][0].data=Ae(R),he[4][0].data=Ae(i[R].length),ye[2][R]={type:ye[2][0].type,data:Ct(he)}}P[0].messages[0].data=Ct(ye)}F.content=fi(ci(P)),F.size=F.content.length;var Ue=Vn(X[2][0].data);F=Le.find(f,s[Ue].location),P=Rr(Mr(F.content));{if(P[0].id!=Ue)throw"Bad HeaderStorageBucket";for(ye=ht(P[0].messages[0].data),L=0;L<=n.e.c;++L)he=ht(ye[2][0].data),he[1][0].data=Ae(L),he[4][0].data=Ae(n.e.r+1),ye[2][L]={type:ye[2][0].type,data:Ct(he)};P[0].messages[0].data=Ct(ye)}F.content=fi(ci(P)),F.size=F.content.length;var Ve=Vn(X[4][0].data);(function(){for(var N=Le.find(f,s[Ve].location),I=Rr(Mr(N.content)),Y,W=0;W<I.length;++W){var Z=I[W];Z.id==Ve&&(Y=Z)}var ee=ht(Y.messages[0].data);{ee[3]=[];var K=[];o.forEach(function(Ne,me){K[1]=[{type:0,data:Ae(me)}],K[2]=[{type:0,data:Ae(1)}],K[3]=[{type:2,data:lT(Ne)}],ee[3].push({type:2,data:Ct(K)})})}Y.messages[0].data=Ct(ee);var ve=ci(I),we=fi(ve);N.content=we,N.size=N.content.length})();var et=ht(X[3][0].data);{var tt=et[1][0];delete et[2];var rt=ht(tt.data);{var gt=Vn(rt[2][0].data);(function(){for(var N=Le.find(f,s[gt].location),I=Rr(Mr(N.content)),Y,W=0;W<I.length;++W){var Z=I[W];Z.id==gt&&(Y=Z)}var ee=ht(Y.messages[0].data);{delete ee[6],delete et[7];var K=new Uint8Array(ee[5][0].data);ee[5]=[];for(var ve=0,we=0;we<=n.e.r;++we){var Ne=ht(K);ve+=dT(Ne,i[we],o),Ne[1][0].data=Ae(we),ee[5].push({data:Ct(Ne),type:2})}ee[1]=[{type:0,data:Ae(n.e.c+1)}],ee[2]=[{type:0,data:Ae(n.e.r+1)}],ee[3]=[{type:0,data:Ae(ve)}],ee[4]=[{type:0,data:Ae(n.e.r+1)}]}Y.messages[0].data=Ct(ee);var me=ci(I),Xe=fi(me);N.content=Xe,N.size=N.content.length})()}tt.data=Ct(rt)}X[3][0].data=Ct(et)}m[4][0].data=Ct(X)}x.messages[0].data=Ct(m);var A=ci(p),O=fi(A);return d.content=O,d.size=d.content.length,f}function pT(e){return function(r){for(var n=0;n!=e.length;++n){var a=e[n];r[a[0]]===void 0&&(r[a[0]]=a[1]),a[2]==="n"&&(r[a[0]]=Number(r[a[0]]))}}}function du(e){pT([["cellDates",!1],["bookSST",!1],["bookType","xlsx"],["compression",!1],["WTF",!1]])(e)}function gT(e,t){return t.bookType=="ods"?Fx(e,t):t.bookType=="numbers"?hT(e,t):t.bookType=="xlsb"?xT(e,t):mT(e,t)}function xT(e,t){di=1024,e&&!e.SSF&&(e.SSF=rr(qe)),e&&e.SSF&&(Gl(),Wl(e.SSF),t.revssf=Vl(e.SSF),t.revssf[e.SSF[65535]]=0,t.ssf=e.SSF),t.rels={},t.wbrels={},t.Strings=[],t.Strings.Count=0,t.Strings.Unique=0,Fo?t.revStrings=new Map:(t.revStrings={},t.revStrings.foo=[],delete t.revStrings.foo);var r=t.bookType=="xlsb"?"bin":"xml",n=ux.indexOf(t.bookType)>-1,a=zg();du(t=t||{});var i=jf(),o="",s=0;if(t.cellXfs=[],Qn(t.cellXfs,{},{revssf:{General:0}}),e.Props||(e.Props={}),o="docProps/core.xml",Ee(i,o,Vg(e.Props,t)),a.coreprops.push(o),Fe(t.rels,2,o,be.CORE_PROPS),o="docProps/app.xml",!(e.Props&&e.Props.SheetNames))if(!e.Workbook||!e.Workbook.Sheets)e.Props.SheetNames=e.SheetNames;else{for(var l=[],f=0;f<e.SheetNames.length;++f)(e.Workbook.Sheets[f]||{}).Hidden!=2&&l.push(e.SheetNames[f]);e.Props.SheetNames=l}for(e.Props.Worksheets=e.Props.SheetNames.length,Ee(i,o,jg(e.Props,t)),a.extprops.push(o),Fe(t.rels,3,o,be.EXT_PROPS),e.Custprops!==e.Props&&Nt(e.Custprops||{}).length>0&&(o="docProps/custom.xml",Ee(i,o,$g(e.Custprops,t)),a.custprops.push(o),Fe(t.rels,4,o,be.CUST_PROPS)),s=1;s<=e.SheetNames.length;++s){var u={"!id":{}},g=e.Sheets[e.SheetNames[s-1]],d=(g||{})["!type"]||"sheet";switch(d){case"chart":default:o="xl/worksheets/sheet"+s+"."+r,Ee(i,o,wb(s-1,o,t,e,u)),a.sheets.push(o),Fe(t.wbrels,-1,"worksheets/sheet"+s+"."+r,be.WS[0])}if(g){var p=g["!comments"],x=!1,h="";p&&p.length>0&&(h="xl/comments"+s+"."+r,Ee(i,h,_b(p,h,t)),a.comments.push(h),Fe(u,-1,"../comments"+s+"."+r,be.CMNT),x=!0),g["!legacy"]&&x&&Ee(i,"xl/drawings/vmlDrawing"+s+".vml",cx(s,g["!comments"])),delete g["!comments"],delete g["!legacy"]}u["!id"].rId1&&Ee(i,Wg(o),gi(u))}return t.Strings!=null&&t.Strings.length>0&&(o="xl/sharedStrings."+r,Ee(i,o,Eb(t.Strings,o,t)),a.strs.push(o),Fe(t.wbrels,-1,"sharedStrings."+r,be.SST)),o="xl/workbook."+r,Ee(i,o,vb(e,o,t)),a.workbooks.push(o),Fe(t.rels,1,o,be.WB),o="xl/theme/theme1.xml",Ee(i,o,sx(e.Themes,t)),a.themes.push(o),Fe(t.wbrels,-1,"theme/theme1.xml",be.THEME),o="xl/styles."+r,Ee(i,o,yb(e,o,t)),a.styles.push(o),Fe(t.wbrels,-1,"styles."+r,be.STY),e.vbaraw&&n&&(o="xl/vbaProject.bin",Ee(i,o,e.vbaraw),a.vba.push(o),Fe(t.wbrels,-1,"vbaProject.bin",be.VBA)),o="xl/metadata."+r,Ee(i,o,kb(o)),a.metadata.push(o),Fe(t.wbrels,-1,"metadata."+r,be.XLMETA),Ee(i,"[Content_Types].xml",Hg(a,t)),Ee(i,"_rels/.rels",gi(t.rels)),Ee(i,"xl/_rels/workbook."+r+".rels",gi(t.wbrels)),delete t.revssf,delete t.ssf,i}function mT(e,t){di=1024,e&&!e.SSF&&(e.SSF=rr(qe)),e&&e.SSF&&(Gl(),Wl(e.SSF),t.revssf=Vl(e.SSF),t.revssf[e.SSF[65535]]=0,t.ssf=e.SSF),t.rels={},t.wbrels={},t.Strings=[],t.Strings.Count=0,t.Strings.Unique=0,Fo?t.revStrings=new Map:(t.revStrings={},t.revStrings.foo=[],delete t.revStrings.foo);var r="xml",n=ux.indexOf(t.bookType)>-1,a=zg();du(t=t||{});var i=jf(),o="",s=0;if(t.cellXfs=[],Qn(t.cellXfs,{},{revssf:{General:0}}),e.Props||(e.Props={}),o="docProps/core.xml",Ee(i,o,Vg(e.Props,t)),a.coreprops.push(o),Fe(t.rels,2,o,be.CORE_PROPS),o="docProps/app.xml",!(e.Props&&e.Props.SheetNames))if(!e.Workbook||!e.Workbook.Sheets)e.Props.SheetNames=e.SheetNames;else{for(var l=[],f=0;f<e.SheetNames.length;++f)(e.Workbook.Sheets[f]||{}).Hidden!=2&&l.push(e.SheetNames[f]);e.Props.SheetNames=l}e.Props.Worksheets=e.Props.SheetNames.length,Ee(i,o,jg(e.Props,t)),a.extprops.push(o),Fe(t.rels,3,o,be.EXT_PROPS),e.Custprops!==e.Props&&Nt(e.Custprops||{}).length>0&&(o="docProps/custom.xml",Ee(i,o,$g(e.Custprops,t)),a.custprops.push(o),Fe(t.rels,4,o,be.CUST_PROPS));var u=["SheetJ5"];for(t.tcid=0,s=1;s<=e.SheetNames.length;++s){var g={"!id":{}},d=e.Sheets[e.SheetNames[s-1]],p=(d||{})["!type"]||"sheet";switch(p){case"chart":default:o="xl/worksheets/sheet"+s+"."+r,Ee(i,o,yx(s-1,t,e,g)),a.sheets.push(o),Fe(t.wbrels,-1,"worksheets/sheet"+s+"."+r,be.WS[0])}if(d){var x=d["!comments"],h=!1,v="";if(x&&x.length>0){var w=!1;x.forEach(function(m){m[1].forEach(function(E){E.T==!0&&(w=!0)})}),w&&(v="xl/threadedComments/threadedComment"+s+"."+r,Ee(i,v,Y5(x,u,t)),a.threadedcomments.push(v),Fe(g,-1,"../threadedComments/threadedComment"+s+"."+r,be.TCMNT)),v="xl/comments"+s+"."+r,Ee(i,v,fx(x,t)),a.comments.push(v),Fe(g,-1,"../comments"+s+"."+r,be.CMNT),h=!0}d["!legacy"]&&h&&Ee(i,"xl/drawings/vmlDrawing"+s+".vml",cx(s,d["!comments"])),delete d["!comments"],delete d["!legacy"]}g["!id"].rId1&&Ee(i,Wg(o),gi(g))}return t.Strings!=null&&t.Strings.length>0&&(o="xl/sharedStrings."+r,Ee(i,o,tx(t.Strings,t)),a.strs.push(o),Fe(t.wbrels,-1,"sharedStrings."+r,be.SST)),o="xl/workbook."+r,Ee(i,o,kx(e,t)),a.workbooks.push(o),Fe(t.rels,1,o,be.WB),o="xl/theme/theme1.xml",Ee(i,o,sx(e.Themes,t)),a.themes.push(o),Fe(t.wbrels,-1,"theme/theme1.xml",be.THEME),o="xl/styles."+r,Ee(i,o,ix(e,t)),a.styles.push(o),Fe(t.wbrels,-1,"styles."+r,be.STY),e.vbaraw&&n&&(o="xl/vbaProject.bin",Ee(i,o,e.vbaraw),a.vba.push(o),Fe(t.wbrels,-1,"vbaProject.bin",be.VBA)),o="xl/metadata."+r,Ee(i,o,lx()),a.metadata.push(o),Fe(t.wbrels,-1,"metadata."+r,be.XLMETA),u.length>1&&(o="xl/persons/person.xml",Ee(i,o,K5(u,t)),a.people.push(o),Fe(t.wbrels,-1,"persons/person.xml",be.PEOPLE)),Ee(i,"[Content_Types].xml",Hg(a,t)),Ee(i,"_rels/.rels",gi(t.rels)),Ee(i,"xl/_rels/workbook."+r+".rels",gi(t.wbrels)),delete t.revssf,delete t.ssf,i}function vT(e,t){var r="";switch((t||{}).type||"base64"){case"buffer":return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];case"base64":r=mn(e.slice(0,12));break;case"binary":r=e;break;case"array":return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];default:throw new Error("Unrecognized type "+(t&&t.type||"undefined"))}return[r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2),r.charCodeAt(3),r.charCodeAt(4),r.charCodeAt(5),r.charCodeAt(6),r.charCodeAt(7)]}function Px(e,t){switch(t.type){case"base64":case"binary":break;case"buffer":case"array":t.type="";break;case"file":return Bo(t.file,Le.write(e,{type:Se?"buffer":""}));case"string":throw new Error("'string' output type invalid for '"+t.bookType+"' files");default:throw new Error("Unrecognized type "+t.type)}return Le.write(e,t)}function wT(e,t){var r=rr(t||{}),n=gT(e,r);return yT(n,r)}function yT(e,t){var r={},n=Se?"nodebuffer":typeof Uint8Array<"u"?"array":"string";if(t.compression&&(r.compression="DEFLATE"),t.password)r.type=n;else switch(t.type){case"base64":r.type="base64";break;case"binary":r.type="string";break;case"string":throw new Error("'string' output type invalid for '"+t.bookType+"' files");case"buffer":case"file":r.type=n;break;default:throw new Error("Unrecognized type "+t.type)}var a=e.FullPaths?Le.write(e,{fileType:"zip",type:{nodebuffer:"buffer",string:"binary"}[r.type]||r.type,compression:!!t.compression}):e.generate(r);if(typeof Deno<"u"&&typeof a=="string"){if(t.type=="binary"||t.type=="base64")return a;a=new Uint8Array(Hl(a))}return t.password&&typeof encrypt_agile<"u"?Px(encrypt_agile(a,t.password),t):t.type==="file"?Bo(t.file,a):t.type=="string"?To(a):a}function ET(e,t){var r=t||{},n=Mb(e,r);return Px(n,r)}function Qr(e,t,r){r||(r="");var n=r+e;switch(t.type){case"base64":return No(hn(n));case"binary":return hn(n);case"string":return e;case"file":return Bo(t.file,n,"utf8");case"buffer":return Se?wn(n,"utf8"):typeof TextEncoder<"u"?new TextEncoder().encode(n):Qr(n,{type:"binary"}).split("").map(function(a){return a.charCodeAt(0)})}throw new Error("Unrecognized type "+t.type)}function _T(e,t){switch(t.type){case"base64":return No(e);case"binary":return e;case"string":return e;case"file":return Bo(t.file,e,"binary");case"buffer":return Se?wn(e,"binary"):e.split("").map(function(r){return r.charCodeAt(0)})}throw new Error("Unrecognized type "+t.type)}function Cl(e,t){switch(t.type){case"string":case"base64":case"binary":for(var r="",n=0;n<e.length;++n)r+=String.fromCharCode(e[n]);return t.type=="base64"?No(r):t.type=="string"?To(r):r;case"file":return Bo(t.file,e);case"buffer":return e;default:throw new Error("Unrecognized type "+t.type)}}function hu(e,t){Y2(),sb(e);var r=rr(t||{});if(r.cellStyles&&(r.cellNF=!0,r.sheetStubs=!0),r.type=="array"){r.type="binary";var n=hu(e,r);return r.type="array",Hl(n)}var a=0;if(r.sheet&&(typeof r.sheet=="number"?a=r.sheet:a=e.SheetNames.indexOf(r.sheet),!e.SheetNames[a]))throw new Error("Sheet not found: "+r.sheet+" : "+typeof r.sheet);switch(r.bookType||"xlsb"){case"xml":case"xlml":return Qr(Ob(e,r),r);case"slk":case"sylk":return Qr(a5.from_sheet(e.Sheets[e.SheetNames[a]],r),r);case"htm":case"html":return Qr(Sx(e.Sheets[e.SheetNames[a]],r),r);case"txt":return _T(Ix(e.Sheets[e.SheetNames[a]],r),r);case"csv":return Qr(pu(e.Sheets[e.SheetNames[a]],r),r,"\uFEFF");case"dif":return Qr(i5.from_sheet(e.Sheets[e.SheetNames[a]],r),r);case"dbf":return Cl(n5.from_sheet(e.Sheets[e.SheetNames[a]],r),r);case"prn":return Qr(o5.from_sheet(e.Sheets[e.SheetNames[a]],r),r);case"rtf":return Qr(h5.from_sheet(e.Sheets[e.SheetNames[a]],r),r);case"eth":return Qr(ex.from_sheet(e.Sheets[e.SheetNames[a]],r),r);case"fods":return Qr(Fx(e,r),r);case"wk1":return Cl(Z1.sheet_to_wk1(e.Sheets[e.SheetNames[a]],r),r);case"wk3":return Cl(Z1.book_to_wk3(e,r),r);case"biff2":r.biff||(r.biff=2);case"biff3":r.biff||(r.biff=3);case"biff4":return r.biff||(r.biff=4),Cl(Tx(e,r),r);case"biff5":r.biff||(r.biff=5);case"biff8":case"xla":case"xls":return r.biff||(r.biff=8),ET(e,r);case"xlsx":case"xlsm":case"xlam":case"xlsb":case"numbers":case"ods":return wT(e,r);default:throw new Error("Unrecognized bookType |"+r.bookType+"|")}}function kT(e,t,r,n,a,i,o,s){var l=It(r),f=s.defval,u=s.raw||!Object.prototype.hasOwnProperty.call(s,"raw"),g=!0,d=a===1?[]:{};if(a!==1)if(Object.defineProperty)try{Object.defineProperty(d,"__rowNum__",{value:r,enumerable:!1})}catch{d.__rowNum__=r}else d.__rowNum__=r;if(!o||e[r])for(var p=t.s.c;p<=t.e.c;++p){var x=o?e[r][p]:e[n[p]+l];if(x===void 0||x.t===void 0){if(f===void 0)continue;i[p]!=null&&(d[i[p]]=f);continue}var h=x.v;switch(x.t){case"z":if(h==null)break;continue;case"e":h=h==0?null:void 0;break;case"s":case"d":case"b":case"n":break;default:throw new Error("unrecognized type "+x.t)}if(i[p]!=null){if(h==null)if(x.t=="e"&&h===null)d[i[p]]=null;else if(f!==void 0)d[i[p]]=f;else if(u&&h===null)d[i[p]]=null;else continue;else d[i[p]]=u&&(x.t!=="n"||x.t==="n"&&s.rawNumbers!==!1)?h:vn(x,h,s);h!=null&&(g=!1)}}return{row:d,isempty:g}}function zl(e,t){if(e==null||e["!ref"]==null)return[];var r={t:"n",v:0},n=0,a=1,i=[],o=0,s="",l={s:{r:0,c:0},e:{r:0,c:0}},f=t||{},u=f.range!=null?f.range:e["!ref"];switch(f.header===1?n=1:f.header==="A"?n=2:Array.isArray(f.header)?n=3:f.header==null&&(n=0),typeof u){case"string":l=Ge(u);break;case"number":l=Ge(e["!ref"]),l.s.r=u;break;default:l=u}n>0&&(a=0);var g=It(l.s.r),d=[],p=[],x=0,h=0,v=Array.isArray(e),w=l.s.r,m=0,E={};v&&!e[w]&&(e[w]=[]);var F=f.skipHidden&&e["!cols"]||[],P=f.skipHidden&&e["!rows"]||[];for(m=l.s.c;m<=l.e.c;++m)if(!(F[m]||{}).hidden)switch(d[m]=Bt(m),r=v?e[w][m]:e[d[m]+g],n){case 1:i[m]=m-l.s.c;break;case 2:i[m]=d[m];break;case 3:i[m]=f.header[m-l.s.c];break;default:if(r==null&&(r={w:"__EMPTY",t:"s"}),s=o=vn(r,null,f),h=E[o]||0,!h)E[o]=1;else{do s=o+"_"+h++;while(E[s]);E[o]=h,E[s]=1}i[m]=s}for(w=l.s.r+a;w<=l.e.r;++w)if(!(P[w]||{}).hidden){var D=kT(e,l,w,d,n,i,v,f);(D.isempty===!1||(n===1?f.blankrows!==!1:f.blankrows))&&(p[x++]=D.row)}return p.length=x,p}var og=/"/g;function bT(e,t,r,n,a,i,o,s){for(var l=!0,f=[],u="",g=It(r),d=t.s.c;d<=t.e.c;++d)if(n[d]){var p=s.dense?(e[r]||[])[d]:e[n[d]+g];if(p==null)u="";else if(p.v!=null){l=!1,u=""+(s.rawNumbers&&p.t=="n"?p.v:vn(p,null,s));for(var x=0,h=0;x!==u.length;++x)if((h=u.charCodeAt(x))===a||h===i||h===34||s.forceQuotes){u='"'+u.replace(og,'""')+'"';break}u=="ID"&&(u='"ID"')}else p.f!=null&&!p.F?(l=!1,u="="+p.f,u.indexOf(",")>=0&&(u='"'+u.replace(og,'""')+'"')):u="";f.push(u)}return s.blankrows===!1&&l?null:f.join(o)}function pu(e,t){var r=[],n=t??{};if(e==null||e["!ref"]==null)return"";var a=Ge(e["!ref"]),i=n.FS!==void 0?n.FS:",",o=i.charCodeAt(0),s=n.RS!==void 0?n.RS:`
`,l=s.charCodeAt(0),f=new RegExp((i=="|"?"\\|":i)+"+$"),u="",g=[];n.dense=Array.isArray(e);for(var d=n.skipHidden&&e["!cols"]||[],p=n.skipHidden&&e["!rows"]||[],x=a.s.c;x<=a.e.c;++x)(d[x]||{}).hidden||(g[x]=Bt(x));for(var h=0,v=a.s.r;v<=a.e.r;++v)(p[v]||{}).hidden||(u=bT(e,a,v,g,o,l,i,n),u!=null&&(n.strip&&(u=u.replace(f,"")),(u||n.blankrows!==!1)&&r.push((h++?s:"")+u)));return delete n.dense,r.join("")}function Ix(e,t){t||(t={}),t.FS="	",t.RS=`
`;var r=pu(e,t);if(typeof Oe>"u"||t.type=="string")return r;var n=Oe.utils.encode(1200,r,"str");return"\xFF\xFE"+n}function TT(e){var t="",r,n="";if(e==null||e["!ref"]==null)return[];var a=Ge(e["!ref"]),i="",o=[],s,l=[],f=Array.isArray(e);for(s=a.s.c;s<=a.e.c;++s)o[s]=Bt(s);for(var u=a.s.r;u<=a.e.r;++u)for(i=It(u),s=a.s.c;s<=a.e.c;++s)if(t=o[s]+i,r=f?(e[u]||[])[s]:e[t],n="",r!==void 0){if(r.F!=null){if(t=r.F,!r.f)continue;n=r.f,t.indexOf(":")==-1&&(t=t+":"+t)}if(r.f!=null)n=r.f;else{if(r.t=="z")continue;if(r.t=="n"&&r.v!=null)n=""+r.v;else if(r.t=="b")n=r.v?"TRUE":"FALSE";else if(r.w!==void 0)n="'"+r.w;else{if(r.v===void 0)continue;r.t=="s"?n="'"+r.v:n=""+r.v}}l[l.length]=t+"="+n}return l}function Nx(e,t,r){var n=r||{},a=+!n.skipHeader,i=e||{},o=0,s=0;if(i&&n.origin!=null)if(typeof n.origin=="number")o=n.origin;else{var l=typeof n.origin=="string"?Et(n.origin):n.origin;o=l.r,s=l.c}var f,u={s:{c:0,r:0},e:{c:s,r:o+t.length-1+a}};if(i["!ref"]){var g=Ge(i["!ref"]);u.e.c=Math.max(u.e.c,g.e.c),u.e.r=Math.max(u.e.r,g.e.r),o==-1&&(o=g.e.r+1,u.e.r=o+t.length-1+a)}else o==-1&&(o=0,u.e.r=t.length-1+a);var d=n.header||[],p=0;t.forEach(function(h,v){Nt(h).forEach(function(w){(p=d.indexOf(w))==-1&&(d[p=d.length]=w);var m=h[w],E="z",F="",P=Ie({c:s+p,r:o+v+a});f=Ro(i,P),m&&typeof m=="object"&&!(m instanceof Date)?i[P]=m:(typeof m=="number"?E="n":typeof m=="boolean"?E="b":typeof m=="string"?E="s":m instanceof Date?(E="d",n.cellDates||(E="n",m=tr(m)),F=n.dateNF||qe[14]):m===null&&n.nullError&&(E="e",m=0),f?(f.t=E,f.v=m,delete f.w,delete f.R,F&&(f.z=F)):i[P]=f={t:E,v:m},F&&(f.z=F))})}),u.e.c=Math.max(u.e.c,s+d.length-1);var x=It(o);if(a)for(p=0;p<d.length;++p)i[Bt(p+s)+x]={t:"s",v:d[p]};return i["!ref"]=lt(u),i}function ST(e,t){return Nx(null,e,t)}function Ro(e,t,r){if(typeof t=="string"){if(Array.isArray(e)){var n=Et(t);return e[n.r]||(e[n.r]=[]),e[n.r][n.c]||(e[n.r][n.c]={t:"z"})}return e[t]||(e[t]={t:"z"})}return typeof t!="number"?Ro(e,Ie(t)):Ro(e,Ie({r:t,c:r||0}))}function CT(e,t){if(typeof t=="number"){if(t>=0&&e.SheetNames.length>t)return t;throw new Error("Cannot find sheet # "+t)}else if(typeof t=="string"){var r=e.SheetNames.indexOf(t);if(r>-1)return r;throw new Error("Cannot find sheet name |"+t+"|")}else throw new Error("Cannot find sheet |"+t+"|")}function AT(){return{SheetNames:[],Sheets:{}}}function FT(e,t,r,n){var a=1;if(!r)for(;a<=65535&&e.SheetNames.indexOf(r="Sheet"+a)!=-1;++a,r=void 0);if(!r||e.SheetNames.length>=65535)throw new Error("Too many worksheets");if(n&&e.SheetNames.indexOf(r)>=0){var i=r.match(/(^.*?)(\d+)$/);a=i&&+i[2]||0;var o=i&&i[1]||r;for(++a;a<=65535&&e.SheetNames.indexOf(r=o+a)!=-1;++a);}if(_x(r),e.SheetNames.indexOf(r)>=0)throw new Error("Worksheet with name |"+r+"| already exists!");return e.SheetNames.push(r),e.Sheets[r]=t,r}function PT(e,t,r){e.Workbook||(e.Workbook={}),e.Workbook.Sheets||(e.Workbook.Sheets=[]);var n=CT(e,t);switch(e.Workbook.Sheets[n]||(e.Workbook.Sheets[n]={}),r){case 0:case 1:case 2:break;default:throw new Error("Bad sheet visibility setting "+r)}e.Workbook.Sheets[n].Hidden=r}function IT(e,t){return e.z=t,e}function Lx(e,t,r){return t?(e.l={Target:t},r&&(e.l.Tooltip=r)):delete e.l,e}function NT(e,t,r){return Lx(e,"#"+t,r)}function LT(e,t,r){e.c||(e.c=[]),e.c.push({t,a:r||"SheetJS"})}function DT(e,t,r,n){for(var a=typeof t!="string"?t:Ge(t),i=typeof t=="string"?t:lt(t),o=a.s.r;o<=a.e.r;++o)for(var s=a.s.c;s<=a.e.c;++s){var l=Ro(e,o,s);l.t="n",l.F=i,delete l.v,o==a.s.r&&s==a.s.c&&(l.f=r,n&&(l.D=!0))}return e}var Ql={encode_col:Bt,encode_row:It,encode_cell:Ie,encode_range:lt,decode_col:ru,decode_row:tu,split_cell:Qw,decode_cell:Et,decode_range:pr,format_cell:vn,sheet_add_aoa:Dg,sheet_add_json:Nx,sheet_add_dom:Cx,aoa_to_sheet:_i,json_to_sheet:ST,table_to_sheet:Ax,table_to_book:iT,sheet_to_csv:pu,sheet_to_txt:Ix,sheet_to_json:zl,sheet_to_html:Sx,sheet_to_formulae:TT,sheet_to_row_object_array:zl,sheet_get_cell:Ro,book_new:AT,book_append_sheet:FT,book_set_sheet_visibility:PT,cell_set_number_format:IT,cell_set_hyperlink:Lx,cell_set_internal_link:NT,cell_add_comment:LT,sheet_set_array_formula:DT,consts:{SHEET_VISIBLE:0,SHEET_HIDDEN:1,SHEET_VERY_HIDDEN:2}};var A4=Po.version;var Aa=class{static toCSV({headers:t,rows:r,filename:n="export.csv"}){try{let a=t.join(","),i=r.map(s=>t.map(l=>{let u=(s[l]||"").toString().replace(/"/g,'""');return u.includes(",")?`"${u}"`:u}).join(",")),o=[a,...i].join(`
`);return this.downloadFile(o,n,"text/csv;charset=utf-8;"),o}catch(a){throw console.error("Error exporting to CSV:",a),a}}static toExcel({headers:t,rows:r,filename:n="export.xlsx"}){try{console.log("[EXTRACTOR-GPT] Exporting to Excel with SheetJS");let a=[t];r.forEach(d=>{let p=t.map(x=>d[x]||"");a.push(p)});let i=Ql.aoa_to_sheet(a),o=t.map((d,p)=>{let x=d.length;return r.forEach(h=>{let v=String(h[d]||"");x=Math.max(x,v.length)}),{wch:Math.min(x+2,50)}});i["!cols"]=o;let s=Ql.book_new();Ql.book_append_sheet(s,i,"ExtractorGPT Data"),s.Props={Title:"ExtractorGPT Export",Author:"ExtractorGPT",CreatedDate:new Date};let l=hu(s,{bookType:"xlsx",type:"array"}),f=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),u=URL.createObjectURL(f),g=document.createElement("a");return g.href=u,g.download=n,document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(u),!0}catch(a){console.error("Error exporting to Excel:",a),console.warn("Falling back to CSV export");let i=n.replace(".xlsx",".csv");return this.toCSV({headers:t,rows:r,filename:i})}}static exportToJSON({headers:t,rows:r,filename:n="export.json"}){try{let a=r.map(o=>{let s={};return t.forEach(l=>{s[l]=o[l]||""}),s}),i=JSON.stringify(a,null,2);return this.downloadFile(i,n,"application/json"),i}catch(a){throw console.error("Error exporting to JSON:",a),a}}static exportToClipboard({headers:t,rows:r}){try{let n=this.toPlainText({headers:t,rows:r});navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(n).then(()=>console.log("Data copied to clipboard")).catch(a=>{console.warn("Clipboard API failed, using fallback:",a),this.copyToClipboardFallback(n)}):this.copyToClipboardFallback(n)}catch(n){throw console.error("Error exporting to clipboard:",n),n}}static exportToGoogleSheets({headers:t,rows:r}){try{console.log("Google Sheets export would require OAuth implementation"),this.exportToClipboard({headers:t,rows:r})}catch(n){throw console.error("Error exporting to Google Sheets:",n),n}}static toPlainText({headers:t,rows:r}){try{let n=t.join("	"),a=r.map(i=>t.map(o=>i[o]||"").join("	"));return[n,...a].join(`
`)}catch(n){throw console.error("Error converting to plain text:",n),n}}static copyToClipboardFallback(t){let r=document.createElement("textarea");r.value=t,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),console.log("Data copied to clipboard using fallback method")}static downloadFile(t,r,n){try{let a=new Blob([t],{type:n}),i=URL.createObjectURL(a),o=document.createElement("a");o.href=i,o.download=r,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(i)}catch(a){throw console.error("Error downloading file:",a),a}}static export({format:t,headers:r,rows:n,filename:a}){let i=a||`extractorgpt_export_${new Date().toISOString().slice(0,10)}`;switch(t){case si.CSV:return this.toCSV({headers:r,rows:n,filename:`${i}.csv`});case si.EXCEL:return this.toExcel({headers:r,rows:n,filename:`${i}.xlsx`});case si.JSON:return this.exportToJSON({headers:r,rows:n,filename:`${i}.json`});case si.CLIPBOARD:return this.exportToClipboard({headers:r,rows:n});case si.GOOGLE_SHEETS:return this.exportToGoogleSheets({headers:r,rows:n});default:throw new Error(`Unsupported export format: ${t}`)}}},Wo=Aa;var pt=ft(it());var BT=ft(it());var RT=ft(it());var MT=ft(it());var gu=class e{constructor(){this.rows=[],this.headers=[],this.thresholds={removeEmptyGroupsThreshold:.2,removeSimilarGroupsThreshold:.9}}generateFriendlyId(t,r){return`${{[Eo.TEXT]:"text",[Eo.IMAGE_URL]:"image",[Eo.LINK_URL]:"link",[Eo.EMAIL]:"email"}[t]||"data"}_${r}`}insertExtractablesFromList({parent:t,extractables:r,append:n=!1}){if(!r)return null;console.log("[ResultsTable] insertExtractablesFromList called with:",{extractablesLength:r.length,firstGroup:r[0]});let a=[];r.forEach((l,f)=>{let u={};u["#"]=f+1;let g=0,d=0,p=0,x=0;l.forEach(h=>{if(!h||!h.data)return;let v;switch(h.type){case"text":g++,v=g===1?"Text":`Text ${g}`;break;case"link-url":d++,v=d===1?"Link":`Link ${d}`;break;case"image-url":p++,v=p===1?"Image":`Image ${p}`,u["\u{1F5BC}\uFE0F Image Preview"]=h.data;break;case"email":x++,v=x===1?"Email":`Email ${x}`;break;default:v=h.type||"Data"}u[v]=h.data}),Object.keys(u).length>1&&a.push(u)}),console.log("[ResultsTable] Processed rows:",a);let i=new Set(["#"]),o=!1;a.forEach(l=>{Object.keys(l).forEach(f=>{f!=="#"&&f!=="\u{1F5BC}\uFE0F Image Preview"&&i.add(f),f==="\u{1F5BC}\uFE0F Image Preview"&&l[f]&&(o=!0)})}),o&&i.add("\u{1F5BC}\uFE0F Image Preview");let s=Array.from(i).sort((l,f)=>l==="#"?-1:f==="#"?1:l==="\u{1F5BC}\uFE0F Image Preview"?-1:f==="\u{1F5BC}\uFE0F Image Preview"?1:l.localeCompare(f));if(a.forEach(l=>{s.forEach(f=>{f in l||(l[f]="")})}),n){let l=this.rows.length+1;a.forEach((u,g)=>{u["#"]=l+g});let f=new Set(this.headers);s.forEach(u=>f.add(u)),this.headers=Array.from(f).sort((u,g)=>u==="#"?-1:g==="#"?1:u==="\u{1F5BC}\uFE0F Image Preview"?-1:g==="\u{1F5BC}\uFE0F Image Preview"?1:u.localeCompare(g)),this.rows.forEach(u=>{this.headers.forEach(g=>{g in u||(u[g]="")})}),this.rows=[...this.rows,...a]}else this.rows=a,this.headers=s;return this.filterAndClean(),this.removeDuplicateRows(),console.log("[ResultsTable] Final state:",{headers:this.headers,rowCount:this.rows.length,firstRow:this.rows[0]}),this}insertExtractabalesFromTask(t){if(!t)return null;let r={generateFriendlyId:s=>{let l=Date.now(),f=Math.random().toString(36).substr(2,5);return`${s}_${l}_${f}`}},n=t.filter(s=>s.data&&s.data.length>0).reduce((s,l)=>s.concat(l.data),[]),a={};n.forEach(s=>{let l=`${s.url}_${s.selector}_${s.type}`;a[l]||(a[l]={...s,groupId:r.generateFriendlyId(s.type),data:[]}),a[l].data.push(s.data)});let i=Object.values(a).map(s=>({...s,data:s.data.join(", ")}));this.rows=i,this.invalidateHeaders(),this.filterAndClean(),this.removeDuplicateRows();let o=t.map(s=>s.url).filter(Boolean);return o.length>0&&this.rows.forEach(s=>{s.url=o[0]}),this}insertFromPageDetailsStatus({status:t}){return!t||!Array.isArray(t)?this:(t.forEach(r=>{if(r.status==="complete"&&r.outcome){let n=r.outcome.map(a=>({url:r.url,groupId:this.generateFriendlyId(a.type,a.id),name:a.name,type:a.type,data:a.data,selectorType:a.selectorType,error:a.error}));this.rows.push(...n)}}),this.invalidateHeaders(),this.filterAndClean(),this.removeDuplicateRows(),this)}insertEmailsFromStatus({status:t}){return!t||!Array.isArray(t)?this:(t.forEach(r=>{if(r.status==="complete"&&r.outcome){let n=r.outcome.find(a=>a.type==="emails");n&&n.data&&n.data.forEach(a=>{this.rows.push({url:r.url,groupId:this.generateFriendlyId("email",a),type:"email",data:a})})}}),this.invalidateHeaders(),this.filterAndClean(),this.removeDuplicateRows(),this)}filterAndClean(){return this.rows=this.rows.filter(t=>Object.values(t).some(r=>r&&r.toString().trim()!=="")),this}removeDuplicateRows(){let t=new Set;return this.rows=this.rows.filter(r=>{let n=JSON.stringify(r);return t.has(n)?!1:(t.add(n),!0)}),this}invalidateHeaders(){let t=new Set;return this.rows.forEach(r=>{Object.keys(r).forEach(n=>{n!=="element"&&n!=="selector"&&t.add(n)})}),this.headers=Array.from(t),this}newInstance(){let t=new e;return t.rows=[...this.rows],t.headers=[...this.headers],t.thresholds={...this.thresholds},t}getSelectorNthChild({root:t,element:r,depth:n}){var s;let a=[],i=r,o=0;for(;i&&i!==t&&o<n;){if(i.nodeType===Node.ELEMENT_NODE){let l=i.tagName.toLowerCase(),f=Array.from(((s=i.parentNode)==null?void 0:s.children)||[]).filter(u=>u.tagName===i.tagName).indexOf(i)+1;a.unshift(`${l}:nth-of-type(${f})`),o++}i=i.parentNode}return a.join(" > ")}updateThresholds(t){return this.thresholds={...this.thresholds,...t},this}},Jn=gu;function UT({data:e,source:t}){let[r,n]=(0,pt.useState)(new Set),[a,i]=(0,pt.useState)(null),[o,s]=(0,pt.useState)("asc");if(!e||!e.rows||e.rows.length===0)return pt.default.createElement("div",{style:{padding:"40px",textAlign:"center",color:"#9ca3af"}},"No data extracted yet");let l=p=>{let x=new Set(r);x.has(p)?x.delete(p):x.add(p),n(x)},f=()=>{r.size===e.rows.length?n(new Set):n(new Set(e.rows.map((p,x)=>x)))},u=p=>{a===p?s(o==="asc"?"desc":"asc"):(i(p),s("asc"))},g=[...e.rows];a&&g.sort((p,x)=>{let h=p[a]||"",v=x[a]||"";return o==="asc"?h>v?1:-1:h<v?1:-1});let d=p=>{let x={headers:e.headers,rows:g.filter((h,v)=>r.has(v))};switch(p){case"csv":Wo.toCSV(x);break;case"json":Wo.exportToJSON(x);break;case"clipboard":Wo.exportToClipboard(x);break;default:break}};return pt.default.createElement("div",{style:{width:"100%",overflowX:"auto"}},pt.default.createElement("table",{className:"extract-small-table",style:{width:"100%",borderCollapse:"collapse",fontFamily:"Arial, sans-serif",fontSize:"12px",color:"#e5e7eb",backgroundColor:"transparent"}},pt.default.createElement("thead",null,pt.default.createElement("tr",{style:{backgroundColor:"rgba(0, 0, 0, 0.5)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"}},pt.default.createElement("th",{style:{padding:"8px 12px",textAlign:"left",fontWeight:"bold",color:"#d1d5db",whiteSpace:"nowrap",minWidth:"40px"}},"#"),e.headers.map((p,x)=>pt.default.createElement("th",{key:x,style:{padding:"8px 12px",textAlign:"left",fontWeight:"bold",color:"#d1d5db",whiteSpace:"nowrap",borderLeft:"1px solid rgba(255, 255, 255, 0.1)"}},p)))),pt.default.createElement("tbody",null,g.map((p,x)=>pt.default.createElement("tr",{key:x,style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)",transition:"background-color 0.2s"},onMouseEnter:h=>h.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.05)",onMouseLeave:h=>h.currentTarget.style.backgroundColor="transparent"},pt.default.createElement("td",{style:{padding:"8px 12px",textAlign:"right",fontWeight:"bold",color:"#9ca3af",minWidth:"40px"}},x+1),e.headers.map((h,v)=>pt.default.createElement("td",{key:v,style:{padding:"8px 12px",textAlign:"left",color:"#e5e7eb",maxWidth:"300px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",borderLeft:"1px solid rgba(255, 255, 255, 0.05)"},title:p[h]||""},p[h]||"")))))),pt.default.createElement("div",{style:{padding:"8px 12px",backgroundColor:"rgba(0, 0, 0, 0.3)",borderTop:"1px solid rgba(255, 255, 255, 0.1)",fontSize:"12px",color:"#9ca3af",display:"flex",justifyContent:"space-between",alignItems:"center"}},pt.default.createElement("span",null,"Showing ",e.rows.length," row",e.rows.length!==1?"s":""),t&&pt.default.createElement("span",{style:{fontSize:"11px"}},"Source: ",t)))}var Dx=UT;var Jl=class{static async generateHeaders({site:t,headers:r,rows:n}){try{console.log("[AI Service] Generating intelligent headers for:",t);let a={};return r.forEach((i,o)=>{if(i&&!i.match(/^(column|col|field|property)\s*\d*$/i)){a[i]=i;return}let s=n.slice(0,10).map(f=>f[i]).filter(Boolean),l=this.inferColumnType(s,o);a[i]=l}),a}catch(a){throw console.error("[AI Service] Error generating headers:",a),a}}static inferColumnType(t,r){if(!t||t.length===0)return`Field ${r+1}`;let n={email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,phone:/^[\d\s\-\(\)\+]+$/,url:/^https?:\/\//,price:/^\$?\d+\.?\d*$/,date:/^\d{1,4}[-\/]\d{1,2}[-\/]\d{1,4}$/,zipCode:/^\d{5}(-\d{4})?$/,percentage:/^\d+\.?\d*%$/};for(let[s,l]of Object.entries(n))if(t.every(f=>l.test(String(f).trim())))return this.formatHeaderName(s);let a=String(t[0]).toLowerCase();if(a.includes("name"))return"Name";if(a.includes("title"))return"Title";if(a.includes("description"))return"Description";if(a.includes("address"))return"Address";if(a.includes("city"))return"City";if(a.includes("state"))return"State";if(a.includes("country"))return"Country";if(a.includes("company"))return"Company";if(t.every(s=>!isNaN(s)))return`Number ${r+1}`;let o=t.reduce((s,l)=>s+String(l).length,0)/t.length;return o>50?"Description":o>20?"Text":`Field ${r+1}`}static formatHeaderName(t){return{email:"Email",phone:"Phone Number",url:"Website",price:"Price",date:"Date",zipCode:"Zip Code",percentage:"Percentage"}[t]||t.charAt(0).toUpperCase()+t.slice(1)}static async callAIAPI({site:t,headers:r,sampleData:n}){return console.warn("[AI Service] External AI API not configured, using heuristic approach"),this.generateHeaders({site:t,headers:r,rows:n})}static analyzeDataQuality(t){let r={totalRows:t.length,emptyValues:0,duplicates:0,suggestions:[]};t.forEach(a=>{Object.values(a).forEach(i=>{(!i||String(i).trim()==="")&&r.emptyValues++})});let n=new Set;return t.forEach(a=>{let i=JSON.stringify(a);n.has(i)&&r.duplicates++,n.add(i)}),r.emptyValues>t.length*.1&&r.suggestions.push("Consider filtering out rows with empty values"),r.duplicates>0&&r.suggestions.push(`Found ${r.duplicates} duplicate rows`),r}};function zT({isPro:e,showResults:t,extractedData:r,onPaginationChange:n,highlightEnabled:a}){console.log("[ExtractListTab] Component rendered with:",{isPro:e,showResults:t,extractedData:r,highlightEnabled:a,extractedDataLength:r?r.length:0});let[i,o]=(0,ne.useState)(null),[s,l]=(0,ne.useState)(!1),[f,u]=(0,ne.useState)(!1),[g,d]=(0,ne.useState)(!0),[p,x]=(0,ne.useState)(r||[]),[h,v]=(0,ne.useState)(!1);(0,ne.useEffect)(()=>{r&&r.length>0&&(x(r),d(!0))},[r]);let w=()=>{if(console.log("[ExtractListTab] Add Pagination clicked"),l(!0),window.__extractorGPT&&window.__extractorGPT.selectionEngine){window.__extractorGPT.selectionEngine.startPaginationSelectMode();let D=window.__extractorGPT.selectionEngine.onElementClick;window.__extractorGPT.selectionEngine.onElementClick=k=>{console.log("[ExtractListTab] Pagination element selected:",k);let L=k.data.element;o(L),l(!1),window.__extractorGPT.selectionEngine.stopPaginationSelectMode(),window.__extractorGPT.selectionEngine.onElementClick=D,window.__extractorGPT.automationHandler&&(window.__extractorGPT.automationHandler.paginationElement=L)}}},m=()=>{o(null),window.__extractorGPT.automationHandler&&(window.__extractorGPT.automationHandler.paginationElement=null)},E=async()=>{var D;if(console.log("[ExtractListTab] Run Automation clicked"),console.log("[ExtractListTab] window.__extractorGPT:",window.__extractorGPT),console.log("[ExtractListTab] automationHandler:",(D=window.__extractorGPT)==null?void 0:D.automationHandler),window.__extractorGPT&&window.__extractorGPT.automationHandler){u(!0);try{console.log("[ExtractListTab] Starting automation..."),await window.__extractorGPT.automationHandler.start({selectionEngine:window.__extractorGPT.selectionEngine,extractionEngine:window.__extractorGPT.extractionEngine,resultsTable:window.__extractorGPT.resultsTable,settings:{autoScroll:!0,dynamic:!0,pagination:i?"element":null,smartPaginationDetection:!i},callbacks:{onProgress:k=>{console.log("[ExtractListTab] Automation progress:",k)},onComplete:k=>{console.log("[ExtractListTab] Automation complete:",k),u(!1)},onError:k=>{console.error("[ExtractListTab] Automation error:",k),u(!1)}}})}catch(k){console.error("Automation error:",k),u(!1)}}else console.error("[ExtractListTab] Automation handler not available")},F=async()=>{var D;console.log("[ExtractListTab] Labeling data with AI"),v(!0);try{let k=(D=window.__extractorGPT)==null?void 0:D.resultsTable;if(!k||!k.headers||k.headers.length===0){console.warn("[ExtractListTab] No data to label");return}let L=k.headers,M=k.rows,R=window.location.href,X=await Jl.generateHeaders({site:R,headers:L,rows:M});console.log("[ExtractListTab] Generated headers:",X);let J=L.map(ye=>X[ye]||ye);k.headers=J;let ce=M.map(ye=>{let he={};return L.forEach((Ue,Ve)=>{let et=J[Ve];he[et]=ye[Ue]}),he});k.rows=ce,x([...ce]),window.dispatchEvent(new CustomEvent("extractorGPT:dataUpdated",{detail:{results:ce,headers:J}})),console.log("[ExtractListTab] Data labeling completed")}catch(k){console.error("[ExtractListTab] Error labeling data:",k)}finally{v(!1)}},P=D=>{if(!window.__extractorGPT||!window.__extractorGPT.resultsTable)return;let k=window.__extractorGPT.resultsTable,L={headers:k.headers,rows:k.rows};switch(D){case"csv":Aa.toCSV({...L,filename:"extracted_data.csv"});break;case"json":Aa.exportToJSON({...L,filename:"extracted_data.json"});break;case"clipboard":Aa.exportToClipboard(L);break}};if(t&&p.length>0){let D=window.__extractorGPT&&window.__extractorGPT.resultsTable?{headers:window.__extractorGPT.resultsTable.headers,rows:window.__extractorGPT.resultsTable.rows}:{headers:[],rows:D};return ne.default.createElement("div",{style:{fontSize:"11px"}},ne.default.createElement("div",{style:{marginBottom:"16px",borderRadius:"4px",border:"1px solid rgba(255, 255, 255, 0.08)",overflow:"hidden"}},ne.default.createElement("div",{style:{padding:"8px 10px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",alignItems:"center",justifyContent:"space-between"}},ne.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},ne.default.createElement("span",{style:{fontSize:"12px",fontWeight:"500",color:"rgba(255, 255, 255, 0.9)"}},"\u{1F4CA} Extracted Data"),ne.default.createElement("span",{style:{padding:"2px 6px",backgroundColor:"rgba(124, 58, 237, 0.1)",borderRadius:"3px",fontSize:"10px",color:"#a78bfa"}},D.rows.length," rows")),ne.default.createElement("div",{style:{display:"flex",gap:"4px"}},ne.default.createElement("button",{onClick:()=>P("csv"),style:{padding:"4px 8px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"3px",color:"rgba(255, 255, 255, 0.7)",fontSize:"10px",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:k=>{k.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.03)",k.currentTarget.style.borderColor="rgba(255, 255, 255, 0.15)"},onMouseLeave:k=>{k.currentTarget.style.backgroundColor="transparent",k.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)"}},"\u{1F4E5} CSV"),ne.default.createElement("button",{onClick:()=>P("json"),style:{padding:"4px 8px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"3px",color:"rgba(255, 255, 255, 0.7)",fontSize:"10px",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:k=>{k.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.03)",k.currentTarget.style.borderColor="rgba(255, 255, 255, 0.15)"},onMouseLeave:k=>{k.currentTarget.style.backgroundColor="transparent",k.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)"}}," JSON"),ne.default.createElement("button",{onClick:()=>P("clipboard"),style:{padding:"4px 8px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"3px",color:"rgba(255, 255, 255, 0.7)",fontSize:"10px",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:k=>{k.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.03)",k.currentTarget.style.borderColor="rgba(255, 255, 255, 0.15)"},onMouseLeave:k=>{k.currentTarget.style.backgroundColor="transparent",k.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)"}},"\u{1F4CB} Copy"),ne.default.createElement("button",{onClick:F,disabled:h,style:{padding:"4px 8px",backgroundColor:h?"rgba(124, 58, 237, 0.2)":"rgba(124, 58, 237, 0.08)",border:"1px solid rgba(124, 58, 237, 0.2)",borderRadius:"3px",color:"rgba(255, 255, 255, 0.8)",fontSize:"10px",cursor:h?"not-allowed":"pointer",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"3px"},onMouseEnter:k=>!h&&(k.currentTarget.style.backgroundColor="rgba(124, 58, 237, 0.15)"),onMouseLeave:k=>!h&&(k.currentTarget.style.backgroundColor="rgba(124, 58, 237, 0.08)"),title:"Automatically label data based on the content of the columns"},ne.default.createElement("span",{style:{fontSize:"11px"}},"\u2728"),h?"Labeling...":"Label Data"))),ne.default.createElement("div",{style:{maxHeight:"250px",overflowY:"auto",backgroundColor:"rgba(0, 0, 0, 0.02)"}},ne.default.createElement(Dx,{data:D,source:"List Extraction"}))),g&&ne.default.createElement("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"rgba(124, 58, 237, 0.03)",borderRadius:"4px",border:"1px solid rgba(124, 58, 237, 0.15)"}},ne.default.createElement("h3",{style:{margin:"0 0 8px 0",fontSize:"13px",fontWeight:"500",color:"rgba(255, 255, 255, 0.9)",display:"flex",alignItems:"center",gap:"6px"}},"\u{1F916} Run Automation?"),ne.default.createElement("p",{style:{margin:"0 0 12px 0",fontSize:"11px",color:"rgba(255, 255, 255, 0.6)",lineHeight:"1.4"}},"Continue extracting data by scrolling through the page or following pagination."),ne.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"}},ne.default.createElement("span",{style:{fontSize:"11px",fontWeight:"500",color:"rgba(255, 255, 255, 0.8)"}},"\u2705 READY"),ne.default.createElement("span",{style:{padding:"2px 6px",backgroundColor:"rgba(124, 58, 237, 0.1)",borderRadius:"3px",fontSize:"10px",color:"#a78bfa"}},"\u{1F522} ",D.rows.length," items")),ne.default.createElement("button",{onClick:E,disabled:f,style:{width:"100%",padding:"8px",backgroundColor:f?"rgba(124, 58, 237, 0.5)":"#7c3aed",border:"none",borderRadius:"4px",color:"white",fontSize:"12px",fontWeight:"500",cursor:f?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",transition:"all 0.2s",marginBottom:"12px"},onMouseEnter:k=>!f&&(k.currentTarget.style.backgroundColor="#6d28d9"),onMouseLeave:k=>!f&&(k.currentTarget.style.backgroundColor="#7c3aed")},f?ne.default.createElement(ne.default.Fragment,null,ne.default.createElement(br,{size:"small"}),ne.default.createElement("span",null,"Extracting...")):ne.default.createElement(ne.default.Fragment,null,ne.default.createElement("span",null,"\u25B6\uFE0F"),ne.default.createElement("span",null,"Run Automation"))),ne.default.createElement("div",{style:{marginBottom:"0"}},!i&&!s?ne.default.createElement("button",{onClick:w,style:{padding:"6px 12px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"3px",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",transition:"all 0.2s"},onMouseEnter:k=>{k.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.03)",k.currentTarget.style.borderColor="rgba(255, 255, 255, 0.15)"},onMouseLeave:k=>{k.currentTarget.style.backgroundColor="transparent",k.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)"}},"\u2795 Add Pagination"):s?ne.default.createElement("div",{style:{padding:"8px",backgroundColor:"rgba(124, 58, 237, 0.08)",borderRadius:"3px",border:"1px solid rgba(124, 58, 237, 0.2)",animation:"pulse 2s infinite"}},ne.default.createElement("div",{style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.9)",fontWeight:"500",marginBottom:"2px"}},"\u{1F3AF} Click on the pagination button"),ne.default.createElement("div",{style:{fontSize:"10px",color:"#a78bfa"}},'Select the "Next" button or page number to follow')):ne.default.createElement("div",{style:{padding:"8px",backgroundColor:"rgba(16, 185, 129, 0.05)",borderRadius:"3px",border:"1px solid rgba(16, 185, 129, 0.15)",display:"flex",alignItems:"center",justifyContent:"space-between"}},ne.default.createElement("div",null,ne.default.createElement("div",{style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.9)",fontWeight:"500",marginBottom:"2px"}},"\u2705 Pagination Selected"),ne.default.createElement("div",{style:{fontSize:"10px",color:"rgba(255, 255, 255, 0.6)"}},i.tagName.toLowerCase()," - ",i.textContent||"Button")),ne.default.createElement("button",{onClick:m,style:{padding:"3px 6px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",color:"rgba(255, 255, 255, 0.6)",fontSize:"10px",cursor:"pointer"}},"Remove"))),ne.default.createElement("button",{onClick:()=>d(!1),style:{padding:"4px",backgroundColor:"transparent",border:"none",color:"rgba(255, 255, 255, 0.4)",fontSize:"10px",cursor:"pointer",textAlign:"center",width:"100%",marginTop:"8px"}},"Cancel")))}return ne.default.createElement("div",{style:{fontSize:"11px"}},a?ne.default.createElement("div",{style:{padding:"16px",backgroundColor:"rgba(124, 58, 237, 0.03)",borderRadius:"8px",border:"1px solid rgba(124, 58, 237, 0.15)"}},ne.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"16px"}},ne.default.createElement("span",{style:{fontSize:"16px",padding:"6px",backgroundColor:"rgba(124, 58, 237, 0.1)",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center"}},"\u{1F5C2}\uFE0F"),ne.default.createElement("div",null,ne.default.createElement("h3",{style:{fontSize:"16px",fontWeight:"600",margin:0,color:"rgba(255, 255, 255, 0.95)"}},"Extract List"),ne.default.createElement("p",{style:{fontSize:"12px",color:"rgba(255, 255, 255, 0.6)",margin:"2px 0 0 0"}},"Extract any list or table with one click!"))),ne.default.createElement("div",{style:{marginBottom:"16px",display:"flex",gap:"12px",alignItems:"flex-start"}},ne.default.createElement("div",{style:{width:"32px",height:"32px",backgroundColor:"rgba(124, 58, 237, 0.15)",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",flexShrink:0}},"\u{1F446}"),ne.default.createElement("div",null,ne.default.createElement("h4",{style:{fontSize:"14px",fontWeight:"600",margin:"0 0 4px 0",color:"rgba(255, 255, 255, 0.9)"}},"Step 1: Hover"),ne.default.createElement("p",{style:{fontSize:"12px",color:"rgba(255, 255, 255, 0.6)",margin:0,lineHeight:"1.4"}},"Move your cursor over any list or table to highlight extractable elements"))),ne.default.createElement("div",{style:{marginBottom:"20px",display:"flex",gap:"12px",alignItems:"flex-start"}},ne.default.createElement("div",{style:{width:"32px",height:"32px",backgroundColor:"rgba(124, 58, 237, 0.15)",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",flexShrink:0}},"\u{1F3AF}"),ne.default.createElement("div",null,ne.default.createElement("h4",{style:{fontSize:"14px",fontWeight:"600",margin:"0 0 4px 0",color:"rgba(255, 255, 255, 0.9)"}},"Step 2: Click"),ne.default.createElement("p",{style:{fontSize:"12px",color:"rgba(255, 255, 255, 0.6)",margin:0,lineHeight:"1.4"}},"Click on the highlighted area to start extracting data"))),ne.default.createElement("div",{style:{marginBottom:"20px",padding:"12px",backgroundColor:"rgba(255, 255, 255, 0.05)",borderRadius:"6px",display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:D=>{D.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.08)"},onMouseLeave:D=>{D.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.05)"},onClick:()=>window.open("https://youtu.be/your-video-id","_blank")},ne.default.createElement("div",{style:{width:"40px",height:"28px",backgroundColor:"rgba(124, 58, 237, 0.2)",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"}},"\u{1F4F9}"),ne.default.createElement("div",null,ne.default.createElement("div",{style:{fontSize:"12px",fontWeight:"500",color:"rgba(255, 255, 255, 0.9)"}},"Watch: Extract Lists \u{1F517}"),ne.default.createElement("div",{style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.6)"}},"Learn how to extract lists using PandaExtract."))),ne.default.createElement("button",{onClick:()=>{window.__extractorGPT&&window.__extractorGPT.selectionEngine&&window.__extractorGPT.selectionEngine.confirmSelection()},style:{marginTop:"16px",width:"100%",padding:"12px 20px",background:"linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",border:"none",borderRadius:"8px",color:"white",fontSize:"14px",fontWeight:"600",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",boxShadow:"0 4px 16px rgba(124, 58, 237, 0.4)",transition:"all 0.2s",textTransform:"uppercase",letterSpacing:"0.5px"},onMouseEnter:D=>{D.currentTarget.style.transform="translateY(-2px)",D.currentTarget.style.boxShadow="0 6px 20px rgba(124, 58, 237, 0.5)"},onMouseLeave:D=>{D.currentTarget.style.transform="translateY(0)",D.currentTarget.style.boxShadow="0 4px 16px rgba(124, 58, 237, 0.4)"}},ne.default.createElement("span",{style:{fontSize:"16px"}},"\u{1F680}"),ne.default.createElement("span",null,"START LIST EXTRACTION"))):ne.default.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},ne.default.createElement("div",{style:{fontSize:"36px",marginBottom:"12px"}},"\u{1F446}"),ne.default.createElement("h3",{style:{fontSize:"14px",fontWeight:"500",marginBottom:"6px",color:"rgba(255, 255, 255, 0.9)"}},"Select Elements to Extract"),ne.default.createElement("p",{style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.6)",margin:0}},'Click on "Enable list selection" button above to start')),!e&&ne.default.createElement("div",{style:{marginTop:"16px",padding:"12px",backgroundColor:"rgba(251, 191, 36, 0.03)",borderRadius:"4px",border:"1px solid rgba(251, 191, 36, 0.15)"}},ne.default.createElement("h4",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"8px",color:"rgba(255, 255, 255, 0.9)",display:"flex",alignItems:"center",gap:"6px"}},"\u{1F680} Pro Features"),ne.default.createElement("ul",{style:{margin:0,paddingLeft:"20px",fontSize:"10px",color:"rgba(255, 255, 255, 0.6)",lineHeight:"1.5"}},ne.default.createElement("li",null,"Extract unlimited items"),ne.default.createElement("li",null,"Run automation with pagination"),ne.default.createElement("li",null,"Export to CSV, JSON, Excel"),ne.default.createElement("li",null,"Smart data labeling with AI"))),ne.default.createElement("div",{style:{marginTop:"16px",padding:"8px",borderTop:"1px solid rgba(255, 255, 255, 0.08)"}},ne.default.createElement("p",{style:{fontSize:"10px",color:"rgba(255, 255, 255, 0.4)",margin:0,textAlign:"center"}},"Need help? Press ",ne.default.createElement("kbd",{style:{padding:"1px 4px",backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",fontSize:"9px"}},"?")," for keyboard shortcuts")))}var Ox=zT;var j=ft(it());var Te=ft(it());function Rx({isOpen:e,onClose:t,urls:r,onGoToPage:n}){let[a,i]=(0,Te.useState)(""),[o,s]=(0,Te.useState)(!1),[l,f]=(0,Te.useState)("");if((0,Te.useEffect)(()=>{e&&r.length>0&&!a&&i(r[0]),e&&f("")},[e,r]),(0,Te.useEffect)(()=>{e||(s(!1),f(""))},[e]),!e)return null;let u=()=>{try{return chrome.runtime&&chrome.runtime.id}catch{return!1}},g=()=>{if(a){if(!u()){f("Extension was updated. Please refresh the page and try again."),setTimeout(()=>{t()},2e3);return}s(!0),f("");try{n(a)}catch(d){console.error("Error in onGoToPage:",d),f("Failed to open page. Please try again."),s(!1)}setTimeout(()=>{o&&(s(!1),f("Taking too long. Please try again."))},5e3)}};return Te.default.createElement("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999999,backdropFilter:"blur(4px)"}},Te.default.createElement("div",{style:{backgroundColor:"#1a1a1a",borderRadius:"12px",width:"420px",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.5)",overflow:"hidden",animation:"modalSlideIn 0.3s ease-out"}},Te.default.createElement("div",{style:{padding:"20px 24px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"}},Te.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"12px"}},Te.default.createElement("button",{onClick:t,disabled:o,style:{width:"32px",height:"32px",backgroundColor:"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"6px",color:"white",fontSize:"18px",cursor:o?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",opacity:o?.5:1,transition:"all 0.2s"},onMouseEnter:d=>{o||(d.target.style.backgroundColor="rgba(255, 255, 255, 0.15)")},onMouseLeave:d=>{d.target.style.backgroundColor="rgba(255, 255, 255, 0.1)"}},"\u2190"),Te.default.createElement("div",{style:{flex:1}},Te.default.createElement("h2",{style:{fontSize:"18px",fontWeight:"600",margin:0,color:"#fff"}},"Select Elements"),Te.default.createElement("p",{style:{margin:"4px 0 0 0",fontSize:"14px",color:"rgba(255, 255, 255, 0.6)"}},"Select elements to extract from each URL")))),Te.default.createElement("div",{style:{padding:"24px"}},Te.default.createElement("div",{style:{marginBottom:"20px"}},Te.default.createElement("label",{style:{display:"block",fontSize:"14px",fontWeight:"500",color:"rgba(255, 255, 255, 0.8)",marginBottom:"8px"}},"Select URL to extract from:"),Te.default.createElement("select",{value:a,onChange:d=>i(d.target.value),disabled:o,style:{width:"100%",padding:"10px 12px",backgroundColor:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",color:"white",fontSize:"14px",cursor:o?"not-allowed":"pointer",opacity:o?.5:1,outline:"none",transition:"all 0.2s"},onFocus:d=>{d.target.style.borderColor="rgba(99, 102, 241, 0.5)",d.target.style.backgroundColor="rgba(255, 255, 255, 0.08)"},onBlur:d=>{d.target.style.borderColor="rgba(255, 255, 255, 0.2)",d.target.style.backgroundColor="rgba(255, 255, 255, 0.05)"}},r.map((d,p)=>Te.default.createElement("option",{key:p,value:d,style:{backgroundColor:"#1a1a1a",color:"white"}},d)))),a&&Te.default.createElement("div",{style:{padding:"12px",backgroundColor:"rgba(99, 102, 241, 0.1)",borderRadius:"8px",border:"1px solid rgba(99, 102, 241, 0.2)",marginBottom:"20px",fontSize:"13px",color:"rgba(255, 255, 255, 0.8)",wordBreak:"break-all"}},Te.default.createElement("strong",null,"Selected:")," ",a),l&&Te.default.createElement("div",{style:{padding:"12px",backgroundColor:"rgba(239, 68, 68, 0.1)",borderRadius:"8px",border:"1px solid rgba(239, 68, 68, 0.3)",marginBottom:"20px",fontSize:"13px",color:"#f87171",display:"flex",alignItems:"center",gap:"8px"}},Te.default.createElement("span",{style:{fontSize:"16px"}},"\u26A0\uFE0F"),l),Te.default.createElement("button",{onClick:g,disabled:!a||o,style:{width:"100%",padding:"12px 24px",backgroundColor:"#6366f1",backgroundImage:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",borderRadius:"8px",color:"white",fontSize:"15px",fontWeight:"600",cursor:!a||o?"not-allowed":"pointer",opacity:!a||o?.6:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",transition:"all 0.2s",boxShadow:"0 4px 12px rgba(99, 102, 241, 0.3)"},onMouseEnter:d=>{a&&!o&&(d.target.style.transform="translateY(-1px)",d.target.style.boxShadow="0 6px 16px rgba(99, 102, 241, 0.4)")},onMouseLeave:d=>{d.target.style.transform="translateY(0)",d.target.style.boxShadow="0 4px 12px rgba(99, 102, 241, 0.3)"}},o?Te.default.createElement(Te.default.Fragment,null,Te.default.createElement("div",{style:{width:"16px",height:"16px",border:"2px solid rgba(255, 255, 255, 0.3)",borderTopColor:"white",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),"Opening page..."):Te.default.createElement(Te.default.Fragment,null,"Go to page to select elements")))),Te.default.createElement("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}}))}var gr=ft(it());function Mx({totalUrls:e,processedUrls:t,status:r,onStop:n}){let a=e>0?t/e*100:0,i=r==="running"||r==="processing";return gr.default.createElement("div",{style:{backgroundColor:"rgba(99, 102, 241, 0.1)",borderRadius:"12px",padding:"16px",border:"1px solid rgba(99, 102, 241, 0.2)",marginBottom:"16px"}},gr.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"}},gr.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},gr.default.createElement("div",{style:{width:"8px",height:"8px",backgroundColor:i?"#10b981":"#6b7280",borderRadius:"50%",animation:i?"pulse 2s infinite":"none"}}),gr.default.createElement("span",{style:{fontSize:"14px",fontWeight:"500",color:"#fff"}},i?"Extraction in Progress":r==="completed"?"Extraction Complete":"Extraction Stopped")),i&&gr.default.createElement("button",{onClick:n,style:{padding:"6px 12px",backgroundColor:"rgba(239, 68, 68, 0.2)",border:"1px solid rgba(239, 68, 68, 0.3)",borderRadius:"6px",color:"#ef4444",fontSize:"13px",fontWeight:"500",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",transition:"all 0.2s"},onMouseEnter:o=>{o.target.style.backgroundColor="rgba(239, 68, 68, 0.3)"},onMouseLeave:o=>{o.target.style.backgroundColor="rgba(239, 68, 68, 0.2)"}},gr.default.createElement("span",{style:{fontSize:"16px"}},"\u25A0"),"Stop")),gr.default.createElement("div",{style:{fontSize:"13px",color:"rgba(255, 255, 255, 0.7)",marginBottom:"8px"}},"Processed ",t," of ",e," URLs"),gr.default.createElement("div",{style:{width:"100%",height:"8px",backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:"4px",overflow:"hidden",position:"relative"}},gr.default.createElement("div",{style:{width:`${a}%`,height:"100%",backgroundColor:"#6366f1",backgroundImage:"linear-gradient(135deg, #6366f1 25%, #7c3aed 25%, #7c3aed 50%, #6366f1 50%, #6366f1 75%, #7c3aed 75%, #7c3aed)",backgroundSize:"20px 20px",transition:"width 0.3s ease",animation:i?"progress-stripes 1s linear infinite":"none"}})),i&&t>0&&gr.default.createElement("div",{style:{fontSize:"12px",color:"rgba(255, 255, 255, 0.5)",marginTop:"8px"}},(()=>{let l=(e-t)*3,f=Math.floor(l/60),u=l%60;return f>0?`Estimated time remaining: ${f}m ${u}s`:`Estimated time remaining: ${u}s`})()),gr.default.createElement("style",{jsx:!0},`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes progress-stripes {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 20px 20px;
          }
        }
      `))}function HT({isPro:e}){let[t,r]=(0,j.useState)([]),[n,a]=(0,j.useState)([]),[i,o]=(0,j.useState)(!1),[s,l]=(0,j.useState)([]),[f,u]=(0,j.useState)(""),[g,d]=(0,j.useState)(!1),[p,x]=(0,j.useState)(!1),[h,v]=(0,j.useState)(!1),[w,m]=(0,j.useState)(!1),[E,F]=(0,j.useState)("idle"),[P,D]=(0,j.useState)(0),[k,L]=(0,j.useState)(1),[M,R]=(0,j.useState)(30),[X,J]=(0,j.useState)(0),ce=(0,j.useRef)(null),ye=(0,j.useRef)(null);(0,j.useEffect)(()=>{let W=Z=>{if(Z.action==="page-details-selected-complete"&&Z.data)a(Z.data.selectors||[]),d(!1),u("");else if(Z.action==="status-update-extract"&&Z.data){let ee=Z.data,K=ee.filter(Ne=>Ne.status==="complete").length,ve=ee.filter(Ne=>Ne.status==="failed").length,we=ee.length;D(K+ve),K+ve===we?(F("completed"),o(!1)):F("running")}};return chrome.runtime.onMessage.addListener(W),()=>{chrome.runtime.onMessage.removeListener(W)}},[]);let he=W=>{let Z=W.target.files[0];if(!Z)return;let ee=new FileReader;ee.onload=K=>{let we=K.target.result.split(`
`),Ne=[];we.forEach(me=>{let Xe=me.trim();Xe&&(Xe.startsWith("http://")||Xe.startsWith("https://"))&&Ne.push(Xe)}),r(me=>[...me,...Ne])},ee.readAsText(Z),W.target.value=""},Ue=()=>{let W=ye.current;if(!W||!W.value.trim())return;let Z=W.value.trim();Z.startsWith("http://")||Z.startsWith("https://")?(r(ee=>[...ee,Z]),W.value=""):u("Please enter a valid URL starting with http:// or https://")},Ve=W=>{r(Z=>Z.filter((ee,K)=>K!==W))},et=()=>{try{return chrome.runtime&&chrome.runtime.id}catch{return!1}},tt=(W,Z)=>{var ee;if(!et()){console.error("Extension context invalidated"),u("Extension was updated. Please refresh the page and try again."),d(!1),o(!1),Z&&Z({success:!1,error:"Extension context invalidated"});return}try{chrome.runtime.sendMessage(W,K=>{var ve;chrome.runtime.lastError?(console.error("Chrome runtime error:",chrome.runtime.lastError),(ve=chrome.runtime.lastError.message)!=null&&ve.includes("Extension context invalidated")?u("Extension was updated. Please refresh the page and try again."):u("Failed to communicate with extension. Please try again."),d(!1),o(!1),Z&&Z({success:!1,error:chrome.runtime.lastError.message})):Z&&Z(K)})}catch(K){console.error("Error sending message:",K),(ee=K.message)!=null&&ee.includes("Extension context invalidated")?u("Extension was updated. Please refresh the page and try again."):u("Extension error. Please try again."),d(!1),o(!1),Z&&Z({success:!1,error:K.message})}},rt=async()=>{if(t.length===0){u("Please add at least one URL first");return}await chrome.storage.local.set({pageDetailsUrls:t}),v(!0),u("")},gt=W=>{v(!1),d(!0),u(""),tt({action:"page-details-highlight",data:{urls:[W]}},Z=>{Z!=null&&Z.success||(console.error("Failed to start page details flow:",Z==null?void 0:Z.error),u("Failed to start element selection. Please try again."),d(!1))})},A=async()=>{if(t.length===0){u("Please add URLs to extract from");return}if(n.length===0){u("Please select elements to extract");return}o(!0),F("running"),D(0),u(""),l([]);try{tt({action:"page-details-extract",urls:t,elements:n,config:{parallelTabs:k,maxWaitTime:M,delayBeforeExtract:X}},W=>{console.log("[ExtractDetailsTab] Extraction response:",W),W&&W.success?(console.log("[ExtractDetailsTab] Setting extraction results:",W.results),l(W.results||[]),F("idle"),o(!1)):W&&W.error&&(u(W.error),F("idle"),o(!1))})}catch(W){console.error("Extraction error:",W),u("Failed to extract page details"),o(!1),F("idle")}},O=()=>{tt({action:"stop-page-details-extraction"},()=>{o(!1),F("stopped")})},N=W=>{let Z=me=>{if(me==null)return"";let Xe=String(me);return Xe.includes(",")||Xe.includes('"')||Xe.includes(`
`)?`"${Xe.replace(/"/g,'""')}"`:Xe},ee=Object.keys(W[0]),K=[ee.map(Z).join(","),...W.map(me=>ee.map(Xe=>Z(me[Xe])).join(","))].join(`
`),ve=new Blob([K],{type:"text/csv;charset=utf-8;"}),we=URL.createObjectURL(ve),Ne=document.createElement("a");Ne.href=we,Ne.download=`extraction_results_${new Date().toISOString().slice(0,10)}.csv`,Ne.click(),URL.revokeObjectURL(we)},I=W=>{let Z=JSON.stringify(W,null,2),ee=new Blob([Z],{type:"application/json"}),K=URL.createObjectURL(ee),ve=document.createElement("a");ve.href=K,ve.download=`extraction_results_${new Date().toISOString().slice(0,10)}.json`,ve.click(),URL.revokeObjectURL(K)},Y=async W=>{try{let Z=JSON.stringify(W,null,2);await navigator.clipboard.writeText(Z);let ee=event.currentTarget,K=ee.innerHTML;ee.innerHTML="<span>\u2713</span> Copied!",ee.style.backgroundColor="rgba(16, 185, 129, 0.1)",ee.style.borderColor="rgba(16, 185, 129, 0.2)",setTimeout(()=>{ee.innerHTML=K,ee.style.backgroundColor="transparent",ee.style.borderColor="rgba(255, 255, 255, 0.1)"},2e3)}catch(Z){console.error("Failed to copy to clipboard:",Z)}};return console.log("[ExtractDetailsTab] Rendering results section. extractionResults:",s,"length:",s.length),j.default.createElement("div",{style:{fontSize:"11px"}},j.default.createElement("div",null,j.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"}},j.default.createElement("div",{style:{width:"32px",height:"32px",backgroundColor:"rgba(124, 58, 237, 0.1)",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"}},"\u{1F4C4}"),j.default.createElement("div",null,j.default.createElement("h2",{style:{fontSize:"13px",fontWeight:"500",margin:0,display:"flex",alignItems:"center",gap:"6px"}},"Extract Page Details"),j.default.createElement("p",{style:{margin:0,fontSize:"11px",color:"rgba(255, 255, 255, 0.5)"}},"Extract data from similar pages into a table"))),j.default.createElement("div",{style:{borderRadius:"4px",padding:"10px",marginBottom:"8px",cursor:"pointer",backgroundColor:p?"rgba(124, 58, 237, 0.05)":"transparent",border:"1px solid rgba(255, 255, 255, 0.08)",transition:"all 0.2s"},onClick:()=>x(!p)},j.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},j.default.createElement("div",null,j.default.createElement("h3",{style:{margin:0,fontSize:"12px",fontWeight:"500",color:"rgba(255, 255, 255, 0.9)"}},"Add URLs"),j.default.createElement("p",{style:{margin:0,fontSize:"10px",color:"rgba(255, 255, 255, 0.5)"}},"Select URLs to extract from")),j.default.createElement("span",{style:{fontSize:"14px",color:"rgba(255, 255, 255, 0.5)",transform:p?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.2s"}},"\u203A"))),p&&j.default.createElement("div",{style:{marginBottom:"12px"}},j.default.createElement("div",{style:{padding:"10px",backgroundColor:"rgba(0, 0, 0, 0.02)",borderRadius:"4px",border:"1px solid rgba(255, 255, 255, 0.08)"}},j.default.createElement("div",{style:{display:"flex",gap:"6px",marginBottom:"8px"}},j.default.createElement("input",{ref:ye,type:"text",placeholder:"Enter URL (e.g., https://example.com)",style:{flex:1,padding:"6px 8px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"3px",color:"white",fontSize:"11px",outline:"none"},onKeyPress:W=>W.key==="Enter"&&Ue()}),j.default.createElement("button",{onClick:Ue,style:{padding:"6px 12px",backgroundColor:"#7c3aed",border:"none",borderRadius:"3px",color:"white",fontSize:"11px",cursor:"pointer"}},"Add")),j.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"8px"}},j.default.createElement("span",{style:{fontSize:"10px",color:"rgba(255, 255, 255, 0.4)"}},"or"),j.default.createElement("input",{ref:ce,type:"file",accept:".csv",onChange:he,style:{display:"none"}}),j.default.createElement("button",{onClick:()=>{var W;return(W=ce.current)==null?void 0:W.click()},style:{padding:"4px 8px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"3px",color:"rgba(255, 255, 255, 0.7)",fontSize:"10px",cursor:"pointer"}},"\u{1F4C1} Upload CSV")),t.length>0&&j.default.createElement("div",{style:{maxHeight:"100px",overflowY:"auto",backgroundColor:"rgba(0, 0, 0, 0.03)",borderRadius:"3px",padding:"6px"}},t.map((W,Z)=>j.default.createElement("div",{key:Z,style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"3px 6px",fontSize:"10px",borderRadius:"2px",backgroundColor:"rgba(255, 255, 255, 0.03)",marginBottom:"2px"}},j.default.createElement("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:"rgba(255, 255, 255, 0.7)"}},W),j.default.createElement("button",{onClick:ee=>{ee.stopPropagation(),Ve(Z)},style:{padding:"0 4px",backgroundColor:"transparent",border:"none",color:"#ef4444",fontSize:"12px",cursor:"pointer"}},"\xD7")))))),j.default.createElement("div",{style:{borderRadius:"4px",padding:"10px",marginBottom:"8px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.08)"}},j.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},j.default.createElement("div",null,j.default.createElement("h3",{style:{margin:0,fontSize:"12px",fontWeight:"500",color:"rgba(255, 255, 255, 0.9)"}},"Add Elements"),j.default.createElement("p",{style:{margin:0,fontSize:"10px",color:"rgba(255, 255, 255, 0.5)"}},"Select elements to extract")),n.length>0&&j.default.createElement("span",{style:{padding:"2px 6px",backgroundColor:"rgba(16, 185, 129, 0.1)",borderRadius:"2px",fontSize:"10px",color:"#10b981"}},n.length," selected")),g?j.default.createElement("div",{style:{marginTop:"8px",padding:"8px",backgroundColor:"rgba(124, 58, 237, 0.05)",borderRadius:"3px",border:"1px solid rgba(124, 58, 237, 0.15)",textAlign:"center"}},j.default.createElement(br,{size:"small"}),j.default.createElement("p",{style:{margin:"4px 0 0 0",fontSize:"10px",color:"rgba(255, 255, 255, 0.7)"}},"Opening page for element selection...")):j.default.createElement("button",{onClick:rt,disabled:t.length===0,style:{marginTop:"8px",width:"100%",padding:"10px 16px",background:t.length>0?"linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)":"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"6px",color:t.length>0?"white":"rgba(255, 255, 255, 0.4)",fontSize:"12px",fontWeight:"600",cursor:t.length>0?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",boxShadow:t.length>0?"0 4px 12px rgba(124, 58, 237, 0.3)":"none",transition:"all 0.2s"},onMouseEnter:W=>{t.length>0&&(W.currentTarget.style.transform="translateY(-1px)",W.currentTarget.style.boxShadow="0 6px 16px rgba(124, 58, 237, 0.4)")},onMouseLeave:W=>{t.length>0&&(W.currentTarget.style.transform="translateY(0)",W.currentTarget.style.boxShadow="0 4px 12px rgba(124, 58, 237, 0.3)")}},j.default.createElement("span",null,"\u{1F3AF}"),j.default.createElement("span",null,"Select Elements to Extract")),n.length>0&&j.default.createElement("div",{style:{marginTop:"8px",padding:"8px",backgroundColor:"rgba(0, 0, 0, 0.03)",borderRadius:"3px",fontSize:"10px",color:"rgba(255, 255, 255, 0.6)"}},j.default.createElement("div",{style:{marginBottom:"4px",fontWeight:"500"}},"Selected elements:"),n.map((W,Z)=>j.default.createElement("div",{key:Z,style:{marginLeft:"8px"}},"\u2022 ",W.name||`Element ${Z+1}`)))),j.default.createElement("div",{style:{borderRadius:"4px",padding:"10px",marginBottom:"8px",cursor:"pointer",backgroundColor:w?"rgba(124, 58, 237, 0.05)":"transparent",border:"1px solid rgba(255, 255, 255, 0.08)",transition:"all 0.2s"},onClick:()=>m(!w)},j.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},j.default.createElement("div",null,j.default.createElement("h3",{style:{margin:0,fontSize:"12px",fontWeight:"500",color:"rgba(255, 255, 255, 0.9)"}},"Configuration"),j.default.createElement("p",{style:{margin:0,fontSize:"10px",color:"rgba(255, 255, 255, 0.5)"}},"Extraction settings")),j.default.createElement("span",{style:{fontSize:"14px",color:"rgba(255, 255, 255, 0.5)",transform:w?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.2s"}},"\u203A"))),w&&j.default.createElement("div",{style:{padding:"10px",backgroundColor:"rgba(0, 0, 0, 0.02)",borderRadius:"4px",border:"1px solid rgba(255, 255, 255, 0.08)",marginBottom:"8px"}},j.default.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},j.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},j.default.createElement("label",{style:{fontSize:"10px",color:"rgba(255, 255, 255, 0.6)"}},"Parallel Tabs"),j.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"4px"}},j.default.createElement("button",{onClick:()=>L(Math.max(1,k-1)),style:{width:"18px",height:"18px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",color:"rgba(255, 255, 255, 0.6)",cursor:"pointer",fontSize:"10px",lineHeight:"1"}},"-"),j.default.createElement("span",{style:{minWidth:"20px",textAlign:"center",fontSize:"10px",color:"rgba(255, 255, 255, 0.7)"}},k),j.default.createElement("button",{onClick:()=>L(Math.min(5,k+1)),style:{width:"18px",height:"18px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",color:"rgba(255, 255, 255, 0.6)",cursor:"pointer",fontSize:"10px",lineHeight:"1"}},"+"))),j.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},j.default.createElement("label",{style:{fontSize:"10px",color:"rgba(255, 255, 255, 0.6)"}},"Max Wait Time"),j.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"4px"}},j.default.createElement("input",{type:"number",value:M,onChange:W=>R(parseInt(W.target.value)||0),style:{width:"45px",padding:"2px 4px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",color:"rgba(255, 255, 255, 0.8)",fontSize:"10px",textAlign:"center",outline:"none"}}),j.default.createElement("span",{style:{fontSize:"9px",color:"rgba(255, 255, 255, 0.4)"}},"seconds"))),j.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},j.default.createElement("label",{style:{fontSize:"10px",color:"rgba(255, 255, 255, 0.6)"}},"Delay Before Extract"),j.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"4px"}},j.default.createElement("input",{type:"number",value:X,onChange:W=>J(parseInt(W.target.value)||0),style:{width:"45px",padding:"2px 4px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",color:"rgba(255, 255, 255, 0.8)",fontSize:"10px",textAlign:"center",outline:"none"}}),j.default.createElement("span",{style:{fontSize:"9px",color:"rgba(255, 255, 255, 0.4)"}},"seconds"))))),j.default.createElement("button",{onClick:A,disabled:i||t.length===0||n.length===0,style:{width:"100%",padding:"10px",backgroundColor:i?"rgba(124, 58, 237, 0.5)":t.length>0&&n.length>0?"#7c3aed":"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"4px",color:t.length>0&&n.length>0||i?"white":"rgba(255, 255, 255, 0.4)",fontSize:"12px",fontWeight:"500",cursor:t.length>0&&n.length>0&&!i?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",marginBottom:"12px"}},i?j.default.createElement(j.default.Fragment,null,j.default.createElement(br,{size:"small"}),j.default.createElement("span",null,"Extracting...")):j.default.createElement(j.default.Fragment,null,j.default.createElement("span",null,"\u{1F680}"),j.default.createElement("span",null,"Extract Page Details"),!e&&j.default.createElement("span",{style:{fontSize:"9px",padding:"0px 4px",backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",marginLeft:"2px"}},"PRO"))),f&&j.default.createElement("div",{style:{marginBottom:"12px",padding:"8px",backgroundColor:"rgba(239, 68, 68, 0.05)",borderRadius:"3px",border:"1px solid rgba(239, 68, 68, 0.15)",color:"#f87171",fontSize:"10px"}},f),i&&j.default.createElement(Mx,{currentUrl:P,totalUrls:t.length,status:E,onStop:O}),s.length>0&&j.default.createElement("div",{style:{marginTop:"16px",borderTop:"1px solid rgba(255, 255, 255, 0.08)",paddingTop:"12px"}},j.default.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"}},j.default.createElement("h3",{style:{fontSize:"12px",fontWeight:"500",margin:0,color:"rgba(255, 255, 255, 0.9)"}},"Extracted Results (",s.length,")"),j.default.createElement("div",{style:{display:"flex",gap:"4px"}},j.default.createElement("button",{onClick:()=>N(s),style:{padding:"4px 8px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",color:"rgba(255, 255, 255, 0.6)",fontSize:"10px",cursor:"pointer"}},"\u{1F4E5} CSV"),j.default.createElement("button",{onClick:()=>I(s),style:{padding:"4px 8px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",color:"rgba(255, 255, 255, 0.6)",fontSize:"10px",cursor:"pointer"}}," JSON"),j.default.createElement("button",{onClick:W=>{W.currentTarget=W.currentTarget,Y(s)},style:{padding:"4px 8px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",color:"rgba(255, 255, 255, 0.6)",fontSize:"10px",cursor:"pointer"}},"\u{1F4CB} Copy"))),j.default.createElement("div",{style:{maxHeight:"300px",overflowY:"auto",backgroundColor:"rgba(0, 0, 0, 0.03)",borderRadius:"3px",border:"1px solid rgba(255, 255, 255, 0.08)",fontSize:"10px"}},s.length>0&&j.default.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},j.default.createElement("thead",null,j.default.createElement("tr",{style:{backgroundColor:"rgba(0, 0, 0, 0.05)",borderBottom:"1px solid rgba(255, 255, 255, 0.08)"}},Object.keys(s[0]).map((W,Z)=>j.default.createElement("th",{key:Z,style:{padding:"6px",textAlign:"left",fontWeight:"500",color:"rgba(255, 255, 255, 0.8)",borderRight:Z<Object.keys(s[0]).length-1?"1px solid rgba(255, 255, 255, 0.05)":"none"}},W)))),j.default.createElement("tbody",null,s.map((W,Z)=>j.default.createElement("tr",{key:Z,style:{borderBottom:Z<s.length-1?"1px solid rgba(255, 255, 255, 0.05)":"none"}},Object.values(W).map((ee,K)=>j.default.createElement("td",{key:K,style:{padding:"6px",color:"rgba(255, 255, 255, 0.6)",borderRight:K<Object.values(W).length-1?"1px solid rgba(255, 255, 255, 0.03)":"none"}},ee||"-")))))))),h&&j.default.createElement(Rx,{isOpen:h,urls:t,onGoToPage:gt,onClose:()=>v(!1)})))}var Bx=HT;var q=ft(it());var yn=class e{static regexAcceptableNodes=w1;static findNearestLinkUrl(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5,n=t,a=0;for(;n&&a<r;n=n.parentElement,a++)if(n.tagName==="A"&&n.href)return n.href;return null}static findNearestImageUrl(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5,n=t,a=0;for(;n&&a<r;n=n.parentElement,a++)if(n.tagName==="IMG"&&n.src)return n.src;let i=t.querySelector("img");return i&&i.src?i.src:null}static findExtractableElements(t){let r=t.elements,n=t.depth,a=n===void 0?1:n,i=t.settings,o=i==null?void 0:i.extractImages,s=i==null?void 0:i.extractAriaLabel,l=[],f=r;return f.length===0?[]:(f.forEach(function(u){let g=[];if(u.nodeType===Node.ELEMENT_NODE){let d=new Set;if(u.querySelectorAll("*").forEach(function(p){let x;if(p.tagName!=="SCRIPT"&&p.tagName!=="STYLE"){let h=(x=p.parentElement)===null||x===void 0||(x=x.innerText)===null||x===void 0?void 0:x.trim();if(!h||!d.has(h)){let v="";if(a>=2)try{let w;if(v=p==null||(w=p.innerText)===null||w===void 0?void 0:w.trim(),d.has(v))return}catch{}else try{let w;if(v=p==null||(w=p.innerText)===null||w===void 0?void 0:w.trim(),d.has(v))return}catch{}v&&(d.add(v),g.push({type:vt.TEXT,data:v,element:p}))}}}),u.tagName==="A"){let p=u.href;if(p&&!p.toLowerCase().startsWith("javascript:")){g.push({type:vt.LINK_URL,data:p,element:u});let x=u.innerText.trim();x&&g.push({type:vt.TEXT,data:x,element:u})}}if(u.querySelectorAll("a").forEach(function(p){let x=p.href;if(x&&!x.toLowerCase().startsWith("javascript:")){g.push({type:vt.LINK_URL,data:x,element:p});let h=p.innerText.trim();h&&g.push({type:vt.TEXT,data:h,element:p})}}),o||o===void 0){if(u.tagName==="IMG"){let p=u.src;p&&g.push({type:vt.IMAGE_URL,data:p,element:u})}u.querySelectorAll("img").forEach(function(p){let x=p.src;x&&g.push({type:vt.IMAGE_URL,data:x,element:p})}),u.querySelectorAll("*").forEach(function(p){let x=window.getComputedStyle(p).backgroundImage;if(x&&x.startsWith("url(")){let h=x.slice(4,-1).replace(/["']/g,"");h&&g.push({type:vt.IMAGE_URL,data:h,element:p})}})}s&&u.querySelectorAll("*").forEach(function(p){let x=p.getAttribute("aria-label");x&&(Array.from(p.childNodes).some(function(h){return h.nodeType===Node.TEXT_NODE&&h.textContent.trim()!==""})||g.push({type:vt.TEXT,data:x,element:p}))})}l.push(g)}),l=e.cleanupExtractableElements(l),l.forEach(function(u){u.map(function(d){return d.element}).filter(function(d){return d}).forEach(function(d){d.style&&(d.style.outline="1px dotted blue",d.classList.add("panda-extractable-highlight"))})}),{children:f,extractableElements:l})}static findExtractableElementsAsync(t){let r=t.elements,n=t.depth,a=n===void 0?1:n,i=t.settings;return new Promise(function(o,s){try{o(e.findExtractableElements({elements:r,depth:a,settings:i}))}catch(l){s(l)}})}static clearExtractableHighlights(t){(t||document.body).querySelectorAll(".panda-extractable-highlight").forEach(function(r){r.style.outline="none",r.classList.remove("panda-extractable-highlight")})}static cleanupExtractableElements(t){let r=t.filter(function(n){return Object.keys(n).length>0});return r=r.map(function(n){let a=new Map,i=[function(o){return o==="javascript:void(0)"},function(o){return o.length==1&&!/^[a-zA-Z0-9]+$/.test(o)}];return n.forEach(function(o){let s;!a.has(o.data)&&(s=o.data,!i.some(function(l){return l(s)}))&&a.set(o.data,o)}),Array.from(a.values())})}static findSimpleExtractableElements(t){let r,n=t.element,a=[],i=(r=n.innerText)===null||r===void 0?void 0:r.trim();i&&a.push({type:vt.TEXT,data:i,element:n});let o=n.querySelectorAll("a");if(n.tagName==="A"&&n.href&&!n.href.startsWith("javascript:")){let s=n.href;s&&a.push({type:vt.LINK_URL,data:s,element:n})}else if(o.length===1&&!o[0].href.startsWith("javascript:")){let s=o[0].href;s&&a.push({type:vt.LINK_URL,data:s,element:o[0]})}if(n.tagName==="IMG"&&n.src){let s=n.src;s&&a.push({type:vt.IMAGE_URL,data:s,element:n})}return a}static findSimpleExtractableElementsAsync(t){let r=t.element;return new Promise(function(n,a){try{n(e.findSimpleExtractableElements({element:r}))}catch(i){a(i)}})}static extractText(t){let r;return((r=t.textContent)===null||r===void 0?void 0:r.trim())||null}static extractHtml(t){return t.innerHTML}static extractAttribute(t,r){return t.getAttribute(r)}static extractImageUrl(t){let r=t.src;if(!r){let n=window.getComputedStyle(t).backgroundImage;n.startsWith("url(")&&(r=n.slice(4,-1).replace(/["']/g,""))}return r||=e.findNearestImageUrl(t),r}static extractLinkUrl(t){let r=t.href;return r||=e.findNearestLinkUrl(t),r}static extractEmailsFromText(t){return(t==null?void 0:t.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g))||[]}static extractPhoneNumbersFromText(t){return(t==null?void 0:t.match(/(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?[\d\s-]{3,15}\d/g))||[]}static extractAllData(t){if(!t)return null;let r={},n=this.extractText(t);if(n){r.text=n;let l=this.extractEmailsFromText(n);l.length>0&&(r.emails=l);let f=this.extractPhoneNumbersFromText(n);f.length>0&&(r.phones=f)}r.html=this.extractHtml(t);let a=this.extractLinkUrl(t);a&&(r.linkUrl=a);let i=this.extractImageUrl(t);i&&(r.imageUrl=i);let o=t.id;o&&(r.id=o);let s=t.className;return s&&(r.className=s),r.tagName=t.tagName.toLowerCase(),r.emails&&r.emails.length>0?r.type=vt.EMAIL:r.imageUrl?r.type=vt.IMAGE_URL:r.linkUrl?r.type=vt.LINK_URL:r.text&&(r.type=vt.TEXT),r}};function WT({isPro:e}){let[t,r]=(0,q.useState)([]),[n,a]=(0,q.useState)(!1),[i,o]=(0,q.useState)([]),[s,l]=(0,q.useState)(0),[f,u]=(0,q.useState)(0),[g,d]=(0,q.useState)(""),[p,x]=(0,q.useState)(!1),[h,v]=(0,q.useState)([]),[w,m]=(0,q.useState)(0),[E,F]=(0,q.useState)(1),[P,D]=(0,q.useState)(35),[k,L]=(0,q.useState)(0),M=(0,q.useRef)(null),R=(0,q.useRef)(null);q.default.useEffect(()=>{let A=O=>{O.action==="email-extraction-progress"&&l(O.processedUrls)};return chrome.runtime.onMessage.addListener(A),()=>{chrome.runtime.onMessage.removeListener(A)}},[]),q.default.useEffect(()=>{ce()},[]);let X=()=>{try{return chrome.runtime&&chrome.runtime.id}catch{return!1}},J=(A,O)=>{if(!X()){console.error("Extension context invalidated"),d("Extension was updated. Please refresh the page and try again."),a(!1),O&&O({success:!1,error:"Extension context invalidated"});return}try{chrome.runtime.sendMessage(A,N=>{chrome.runtime.lastError?(console.error("Chrome runtime error:",chrome.runtime.lastError),d("Failed to communicate with extension. Please refresh the page."),a(!1),O&&O({success:!1,error:chrome.runtime.lastError.message})):O&&O(N)})}catch(N){console.error("Error sending message:",N),d("Extension error. Please refresh the page and try again."),a(!1),O&&O({success:!1,error:N.message})}},ce=()=>{let A=new Set,O=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:I=>{let Y=I.parentElement;return Y&&(Y.tagName==="SCRIPT"||Y.tagName==="STYLE")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),N;for(;N=O.nextNode();){let I=N.textContent;I&&yn.extractEmailsFromText(I).forEach(W=>A.add(W.toLowerCase()))}document.querySelectorAll('a[href^="mailto:"]').forEach(I=>{let Y=I.href.replace("mailto:","").split("?")[0];Y&&A.add(Y.toLowerCase())}),m(A.size),v(Array.from(A))},ye=A=>{let O=A.target.files[0];if(!O)return;let N=new FileReader;N.onload=I=>{let W=I.target.result.split(`
`),Z=[];W.forEach(ee=>{let K=ee.trim();K&&(K.startsWith("http://")||K.startsWith("https://"))&&Z.push(K)}),r(ee=>[...ee,...Z])},N.readAsText(O),A.target.value=""},he=()=>{let A=R.current;if(!A||!A.value.trim())return;let O=A.value.trim();O.startsWith("http://")||O.startsWith("https://")?(r(N=>[...N,O]),A.value=""):d("Please enter a valid URL starting with http:// or https://")},Ue=A=>{r(O=>O.filter((N,I)=>I!==A))},Ve=async()=>{a(!0),d("");try{ce(),o(h),h.length===0&&d("No emails found on this page")}catch(A){console.error("Email extraction error:",A),d("Failed to extract emails")}finally{a(!1)}},et=async()=>{if(t.length===0){d("Please add URLs to scan");return}a(!0),d(""),o([]),u(t.length),l(0),J({action:"extract-emails",urls:t,config:{parallelTabs:E,maxWaitTime:P,delayBeforeExtract:k}},A=>{A&&A.success&&A.emails?(o(A.emails),l(t.length),A.emails.length===0&&d("No emails found on the specified pages")):A&&A.error?d(A.error):d("Failed to extract emails"),a(!1)})},tt=()=>{o(h)},rt=()=>{if(i.length===0)return;let A=`Email
`+i.join(`
`),O=new Blob([A],{type:"text/csv"}),N=URL.createObjectURL(O),I=document.createElement("a");I.href=N,I.download="extracted-emails.csv",I.click(),URL.revokeObjectURL(N)},gt=A=>{if(i.length===0)return;let O=i.join(`
`);navigator.clipboard.writeText(O).then(()=>{let N=A.currentTarget,I=N.textContent;N.textContent="Copied!",setTimeout(()=>{N.textContent=I},2e3)})};return q.default.createElement("div",{style:{fontSize:"12px"}},q.default.createElement("div",{style:{marginBottom:"14px"}},q.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"5px",marginBottom:"4px"}},q.default.createElement("span",{style:{fontSize:"14px"}},"\u2709\uFE0F"),q.default.createElement("h2",{style:{fontSize:"13px",fontWeight:"600",margin:0,display:"flex",alignItems:"center",gap:"5px"}},"Extract Emails",!e&&q.default.createElement("span",{style:{fontSize:"9px",padding:"1px 4px",backgroundColor:"#fbbf24",color:"#000",borderRadius:"2px",fontWeight:"600"}},"PRO"))),q.default.createElement("p",{style:{margin:0,fontSize:"11px",color:"rgba(255, 255, 255, 0.5)"}},"Found ",w," email",w!==1?"s":""," on this page")),q.default.createElement("div",{style:{display:"flex",gap:"6px",marginBottom:"10px"}},q.default.createElement("button",{onClick:Ve,disabled:n,style:{flex:1,padding:"7px 12px",backgroundColor:"#7c3aed",border:"none",borderRadius:"4px",color:"white",fontSize:"12px",fontWeight:"500",cursor:n?"not-allowed":"pointer",opacity:n?.7:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"}},n?q.default.createElement(q.default.Fragment,null,q.default.createElement(br,{size:"small"}),"Scanning..."):q.default.createElement(q.default.Fragment,null,"\u{1F50D} Scan Page")),q.default.createElement("button",{onClick:et,disabled:n||t.length===0,style:{flex:1,padding:"7px 12px",backgroundColor:t.length>0?"#10b981":"#6b7280",border:"none",borderRadius:"4px",color:"white",fontSize:"12px",fontWeight:"500",cursor:!n&&t.length>0?"pointer":"not-allowed",opacity:n?.7:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"}},n?q.default.createElement(q.default.Fragment,null,q.default.createElement(br,{size:"small"}),"Scanning..."):q.default.createElement(q.default.Fragment,null,"\u{1F4C4} Scan Pages"))),w>0&&q.default.createElement("div",{style:{marginBottom:"14px"}},q.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"6px"}},q.default.createElement("div",{style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.7)",fontWeight:"400"}},"Found Emails ",q.default.createElement("span",{style:{color:"rgba(255, 255, 255, 0.4)"}},"(",w," total)")),q.default.createElement("button",{onClick:tt,style:{padding:"3px 8px",backgroundColor:"#10b981",border:"none",borderRadius:"3px",color:"white",fontSize:"10px",fontWeight:"500",cursor:"pointer",display:"flex",alignItems:"center",gap:"3px"}},"\u2192 Extract All")),h.length>0&&q.default.createElement("div",null,h.slice(0,3).map((A,O)=>q.default.createElement("div",{key:O,style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.6)",marginBottom:"2px"}},"\u2022 ",A)),h.length>3&&q.default.createElement("div",{style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.4)",marginTop:"2px"}},"... and ",h.length-3," more"))),q.default.createElement("div",null,q.default.createElement("h3",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"8px"}},"Extract from Multiple URLs"),q.default.createElement("div",{style:{marginBottom:"10px"}},q.default.createElement("div",{style:{display:"flex",gap:"5px",marginBottom:"6px"}},q.default.createElement("input",{ref:R,type:"text",placeholder:"Enter URL (e.g., https://example.com)",style:{flex:1,padding:"5px 8px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"3px",color:"white",fontSize:"11px",outline:"none"},onKeyPress:A=>A.key==="Enter"&&he()}),q.default.createElement("button",{onClick:he,style:{padding:"5px 10px",backgroundColor:"#7c3aed",border:"none",borderRadius:"3px",color:"white",fontSize:"11px",cursor:"pointer"}},"Add")),q.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"5px",marginBottom:"8px"}},q.default.createElement("span",{style:{fontSize:"10px",color:"rgba(255, 255, 255, 0.4)"}},"or"),q.default.createElement("input",{ref:M,type:"file",accept:".csv",onChange:ye,style:{display:"none"}}),q.default.createElement("button",{onClick:()=>{var A;return(A=M.current)==null?void 0:A.click()},style:{padding:"3px 8px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"3px",color:"rgba(255, 255, 255, 0.7)",fontSize:"10px",cursor:"pointer"}},"\u{1F4C1} Upload CSV")),t.length>0&&q.default.createElement("div",{style:{maxHeight:"100px",overflowY:"auto"}},t.map((A,O)=>q.default.createElement("div",{key:O,style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"2px 0",fontSize:"10px",color:"rgba(255, 255, 255, 0.6)"}},q.default.createElement("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},A),q.default.createElement("button",{onClick:()=>Ue(O),style:{padding:"0 4px",backgroundColor:"transparent",border:"none",color:"#ef4444",fontSize:"12px",cursor:"pointer",marginLeft:"6px"}},"\xD7"))))),q.default.createElement("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",paddingTop:"10px",marginBottom:"10px"}},q.default.createElement("h4",{style:{fontSize:"11px",fontWeight:"500",marginBottom:"8px",color:"rgba(255, 255, 255, 0.8)"}},"Configuration"),q.default.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},q.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},q.default.createElement("label",{style:{fontSize:"10px",color:"rgba(255, 255, 255, 0.6)"}},"Parallel Tabs"),q.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"4px"}},q.default.createElement("button",{onClick:()=>F(Math.max(1,E-1)),style:{width:"18px",height:"18px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",color:"rgba(255, 255, 255, 0.6)",cursor:"pointer",fontSize:"10px",lineHeight:"1"}},"-"),q.default.createElement("span",{style:{minWidth:"20px",textAlign:"center",fontSize:"10px",color:"rgba(255, 255, 255, 0.7)"}},E),q.default.createElement("button",{onClick:()=>F(Math.min(5,E+1)),style:{width:"18px",height:"18px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",color:"rgba(255, 255, 255, 0.6)",cursor:"pointer",fontSize:"10px",lineHeight:"1"}},"+"))),q.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},q.default.createElement("label",{style:{fontSize:"10px",color:"rgba(255, 255, 255, 0.6)"}},"Max Wait Time"),q.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"4px"}},q.default.createElement("input",{type:"number",value:P,onChange:A=>D(parseInt(A.target.value)||0),style:{width:"45px",padding:"2px 4px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",color:"rgba(255, 255, 255, 0.8)",fontSize:"10px",textAlign:"center",outline:"none"}}),q.default.createElement("span",{style:{fontSize:"9px",color:"rgba(255, 255, 255, 0.4)"}},"seconds"))),q.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},q.default.createElement("label",{style:{fontSize:"10px",color:"rgba(255, 255, 255, 0.6)"}},"Delay Before Extract"),q.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"4px"}},q.default.createElement("input",{type:"number",value:k,onChange:A=>L(parseInt(A.target.value)||0),style:{width:"45px",padding:"2px 4px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",color:"rgba(255, 255, 255, 0.8)",fontSize:"10px",textAlign:"center",outline:"none"}}),q.default.createElement("span",{style:{fontSize:"9px",color:"rgba(255, 255, 255, 0.4)"}},"seconds"))))),q.default.createElement("div",{style:{padding:"6px 8px",backgroundColor:"rgba(251, 191, 36, 0.03)",borderRadius:"3px",border:"1px solid rgba(251, 191, 36, 0.1)",marginBottom:"10px",fontSize:"10px",color:"rgba(251, 191, 36, 0.7)",display:"flex",alignItems:"center",gap:"5px"}},q.default.createElement("span",{style:{fontSize:"11px"}},"\u26A0\uFE0F"),"PandaExtract will ask for additional permissions to open new tabs for extraction"),q.default.createElement("button",{onClick:et,disabled:n||t.length===0,style:{width:"100%",padding:"8px",backgroundColor:t.length>0?"#7c3aed":"#4a4a4a",border:"none",borderRadius:"4px",color:"white",fontSize:"12px",fontWeight:"500",cursor:t.length>0&&!n?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"}},n?q.default.createElement(q.default.Fragment,null,q.default.createElement(br,{size:"small"}),"Extracting..."):q.default.createElement(q.default.Fragment,null,"\u2610 Extract Emails",!e&&q.default.createElement("span",{style:{fontSize:"9px",padding:"0px 4px",backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",marginLeft:"2px"}},"PRO")))),n&&f>0&&q.default.createElement("div",{style:{marginTop:"10px",padding:"8px",backgroundColor:"rgba(124, 58, 237, 0.03)",borderRadius:"3px",border:"1px solid rgba(124, 58, 237, 0.15)"}},q.default.createElement("div",{style:{fontSize:"11px",marginBottom:"5px",color:"rgba(255, 255, 255, 0.7)"}},"Processing: ",s," / ",f," URLs"),q.default.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:"rgba(255, 255, 255, 0.08)",borderRadius:"1px",overflow:"hidden"}},q.default.createElement("div",{style:{width:`${s/f*100}%`,height:"100%",backgroundColor:"#7c3aed",transition:"width 0.3s ease"}}))),g&&q.default.createElement("div",{style:{marginTop:"10px",padding:"8px",backgroundColor:"rgba(239, 68, 68, 0.03)",borderRadius:"3px",border:"1px solid rgba(239, 68, 68, 0.15)",color:"#f87171",fontSize:"11px"}},g),i.length>0&&q.default.createElement("div",{style:{marginTop:"16px",borderTop:"1px solid rgba(255, 255, 255, 0.08)",paddingTop:"12px"}},q.default.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"}},q.default.createElement("h3",{style:{fontSize:"12px",fontWeight:"500",color:"rgba(255, 255, 255, 0.8)"}},"Found ",i.length," Email",i.length!==1?"s":""),q.default.createElement("div",{style:{display:"flex",gap:"5px"}},q.default.createElement("button",{onClick:gt,style:{padding:"4px 8px",backgroundColor:"transparent",color:"rgba(255, 255, 255, 0.6)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",fontSize:"10px",cursor:"pointer"}},"\u{1F4CB} Copy All"),q.default.createElement("button",{onClick:rt,style:{padding:"4px 8px",backgroundColor:"transparent",color:"rgba(255, 255, 255, 0.6)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"2px",fontSize:"10px",cursor:"pointer"}},"\u{1F4BE} Export CSV"))),q.default.createElement("div",{style:{maxHeight:"200px",overflowY:"auto",backgroundColor:"rgba(0, 0, 0, 0.08)",borderRadius:"3px",border:"1px solid rgba(255, 255, 255, 0.05)"}},i.map((A,O)=>q.default.createElement("div",{key:O,style:{padding:"5px 8px",borderBottom:O<i.length-1?"1px solid rgba(255, 255, 255, 0.03)":"none",fontSize:"11px",fontFamily:"monospace",wordBreak:"break-all",color:"rgba(255, 255, 255, 0.7)"}},A)))))}var Ux=WT;var xe=ft(it());function GT({isPro:e}){let[t,r]=(0,xe.useState)([]),[n,a]=(0,xe.useState)(!1),[i,o]=(0,xe.useState)(new Set),[s,l]=(0,xe.useState)(!1),[f,u]=(0,xe.useState)(0),g=()=>{a(!0),r([]),o(new Set);let h=new Set,v=[];document.querySelectorAll("img").forEach(m=>{m.src&&!h.has(m.src)&&(h.add(m.src),v.push({src:m.src,width:m.naturalWidth||m.width||0,height:m.naturalHeight||m.height||0,alt:m.alt||"",title:m.title||"",id:m.src}))}),document.querySelectorAll("*").forEach(m=>{let E=window.getComputedStyle(m).backgroundImage;if(E&&E!=="none"&&E.startsWith("url(")){let F=E.slice(4,-1).replace(/["']/g,"");F&&!h.has(F)&&(h.add(F),v.push({src:F,width:m.offsetWidth||0,height:m.offsetHeight||0,alt:"",title:"",id:F}))}}),document.querySelectorAll("picture source").forEach(m=>{let E=m.srcset;E&&E.split(",").map(P=>P.trim().split(" ")[0]).forEach(P=>{P&&!h.has(P)&&(h.add(P),v.push({src:P,width:0,height:0,alt:"",title:"",id:P}))})});let w=v.filter(m=>!(m.src.startsWith("data:")||m.width>0&&m.height>0&&(m.width<50||m.height<50)));r(w),a(!1)},d=h=>{let v=new Set(i);v.has(h)?v.delete(h):v.add(h),o(v)},p=()=>{i.size===t.length?o(new Set):o(new Set(t.map(h=>h.id)))},x=async()=>{if(i.size===0)return;if(!e){alert("Downloading images is a PRO feature");return}l(!0),u(0);let h=Array.from(i).map(v=>{let w=t.find(m=>m.id===v);return w?w.src:null}).filter(Boolean);try{chrome.runtime.sendMessage({action:"download-images",images:h,folder:`extractor-gpt-images-${Date.now()}`},v=>{v&&v.success?console.log("Images download initiated"):v&&v.error&&(console.error("Download error:",v.error),alert("Failed to download images: "+v.error)),l(!1),u(0)})}catch(v){console.error("Download error:",v),alert("Failed to download images"),l(!1),u(0)}};return xe.default.createElement("div",{style:{fontSize:"11px"}},xe.default.createElement("div",{style:{marginBottom:"14px"}},xe.default.createElement("h2",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"4px",display:"flex",alignItems:"center",gap:"5px",color:"rgba(255, 255, 255, 0.9)"}},"Download Images",!e&&xe.default.createElement("span",{style:{fontSize:"9px",padding:"1px 4px",backgroundColor:"#fbbf24",color:"#000",borderRadius:"2px",fontWeight:"600"}},"PRO")),xe.default.createElement("p",{style:{color:"rgba(255, 255, 255, 0.5)",fontSize:"11px",margin:0}},e?"Find and download images from the current page":"Find images from the current page (PRO for download)")),xe.default.createElement("div",{style:{padding:"8px 10px",backgroundColor:"rgba(124, 58, 237, 0.05)",border:"1px solid rgba(124, 58, 237, 0.15)",borderRadius:"4px",marginBottom:"12px",display:"flex",alignItems:"center",justifyContent:"space-between"}},xe.default.createElement("span",{style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.8)"}},t.length>0?`Found ${t.length} images`:"No images found yet",i.size>0&&` (${i.size} selected)`),t.length>0&&xe.default.createElement("span",{style:{fontSize:"10px",color:"rgba(255, 255, 255, 0.5)"}},"Click images to select")),xe.default.createElement("button",{onClick:g,disabled:n,style:{width:"100%",padding:"8px",backgroundColor:"#7c3aed",color:"white",border:"none",borderRadius:"4px",fontSize:"12px",fontWeight:"500",cursor:n?"not-allowed":"pointer",marginBottom:"12px",opacity:n?.7:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"}},n?xe.default.createElement(xe.default.Fragment,null,xe.default.createElement(br,{size:"small"}),"Scanning..."):"\u{1F50D} Scan Page for Images"),t.length>0&&xe.default.createElement("div",{style:{display:"flex",gap:"6px",marginBottom:"12px"}},xe.default.createElement("button",{onClick:p,style:{flex:1,padding:"6px 8px",backgroundColor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"3px",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:h=>{h.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.03)",h.currentTarget.style.borderColor="rgba(255, 255, 255, 0.15)"},onMouseLeave:h=>{h.currentTarget.style.backgroundColor="transparent",h.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)"}},i.size===t.length?"\u2B1C Deselect All":"\u2611\uFE0F Select All"),i.size>0&&xe.default.createElement("button",{onClick:x,disabled:s||!e,style:{flex:1,padding:"6px 8px",backgroundColor:e?"#7c3aed":"rgba(255, 255, 255, 0.1)",color:e?"white":"rgba(255, 255, 255, 0.4)",border:"none",borderRadius:"3px",fontSize:"11px",fontWeight:"500",cursor:s||!e?"not-allowed":"pointer",opacity:s||!e?.7:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"4px"}},s?xe.default.createElement(xe.default.Fragment,null,xe.default.createElement(br,{size:"small"}),"Downloading..."):xe.default.createElement(xe.default.Fragment,null,"\u{1F4E5} Download ",i.size," Image",i.size!==1?"s":"",!e&&xe.default.createElement("span",{style:{fontSize:"9px",padding:"0px 3px",backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",marginLeft:"2px"}},"PRO")))),s&&xe.default.createElement("div",{style:{marginBottom:"12px",padding:"8px",backgroundColor:"rgba(124, 58, 237, 0.05)",borderRadius:"3px",border:"1px solid rgba(124, 58, 237, 0.15)"}},xe.default.createElement("div",{style:{fontSize:"11px",marginBottom:"6px",color:"rgba(255, 255, 255, 0.7)"}},"Downloading images..."),xe.default.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:"rgba(255, 255, 255, 0.08)",borderRadius:"2px",overflow:"hidden"}},xe.default.createElement("div",{style:{width:`${f}%`,height:"100%",backgroundColor:"#7c3aed",transition:"width 0.3s ease"}}))),t.length>0&&xe.default.createElement("div",null,xe.default.createElement("h3",{style:{margin:"0 0 8px 0",fontSize:"12px",fontWeight:"500",color:"rgba(255, 255, 255, 0.8)"}},"Image Gallery"),xe.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(100px, 1fr))",gap:"8px",maxHeight:"300px",overflowY:"auto",padding:"4px",backgroundColor:"rgba(0, 0, 0, 0.03)",borderRadius:"4px",border:"1px solid rgba(255, 255, 255, 0.08)"}},t.map((h,v)=>xe.default.createElement("div",{key:v,style:{backgroundColor:i.has(h.id)?"rgba(124, 58, 237, 0.1)":"rgba(255, 255, 255, 0.03)",border:i.has(h.id)?"2px solid rgba(124, 58, 237, 0.6)":"2px solid transparent",borderRadius:"4px",padding:"6px",cursor:"pointer",transition:"all 0.2s",position:"relative"},onClick:()=>d(h.id),onMouseEnter:w=>{i.has(h.id)||(w.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.05)")},onMouseLeave:w=>{i.has(h.id)||(w.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.03)")}},xe.default.createElement("div",{style:{position:"relative",paddingBottom:"75%",overflow:"hidden",borderRadius:"3px",backgroundColor:"rgba(0, 0, 0, 0.1)"}},xe.default.createElement("img",{src:h.src,alt:h.alt||`Image ${v+1}`,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"},onError:w=>{w.target.style.display="none",w.target.parentElement.innerHTML='<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: rgba(255, 255, 255, 0.4); font-size: 9px;">Failed to load</div>'}}),i.has(h.id)&&xe.default.createElement("div",{style:{position:"absolute",top:"3px",right:"3px",backgroundColor:"#7c3aed",color:"white",width:"18px",height:"18px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:"bold",boxShadow:"0 1px 3px rgba(0,0,0,0.3)"}},"\u2713")),h.width>0&&h.height>0&&xe.default.createElement("div",{style:{fontSize:"9px",color:"rgba(255, 255, 255, 0.5)",marginTop:"3px",textAlign:"center"}},h.width,"\xD7",h.height))))),t.length===0&&!n&&xe.default.createElement("div",{style:{textAlign:"center",padding:"40px 20px",color:"rgba(255, 255, 255, 0.4)"}},xe.default.createElement("div",{style:{fontSize:"36px",marginBottom:"12px",opacity:.3}},"\u{1F5BC}\uFE0F"),xe.default.createElement("p",{style:{fontSize:"12px",marginBottom:"6px",color:"rgba(255, 255, 255, 0.5)"}},"No images found yet"),xe.default.createElement("p",{style:{fontSize:"11px"}},'Click "Scan Page" to find all images on this page')))}var zx=GT;var De=ft(it());function VT({isPro:e,onProToggle:t}){return De.default.createElement("div",null,De.default.createElement("div",{style:{padding:"16px",backgroundColor:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",marginBottom:"24px",display:"flex",alignItems:"center",justifyContent:"space-between"}},De.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"12px"}},De.default.createElement("div",{style:{width:"40px",height:"40px",backgroundColor:"#7c3aed",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"}},"\u{1F43C}"),De.default.createElement("div",null,De.default.createElement("div",{style:{fontSize:"16px",fontWeight:"600"}},e?"PRO Account":"FREE Account"),De.default.createElement("div",{style:{fontSize:"12px",color:"#9ca3af"}},e?"All features unlocked":"Upgrade to PRO for premium features")))),De.default.createElement("div",{style:{marginBottom:"24px"}},De.default.createElement("h3",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:"600",color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.5px"}},"Settings"),!e&&De.default.createElement("button",{onClick:()=>t(!0),style:{width:"100%",padding:"12px",backgroundColor:"#7c3aed",color:"white",border:"none",borderRadius:"8px",fontSize:"14px",fontWeight:"500",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",transition:"background-color 0.2s"},onMouseEnter:i=>i.target.style.backgroundColor="#6d28d9",onMouseLeave:i=>i.target.style.backgroundColor="#7c3aed"},De.default.createElement("span",null,"\u2728")," Upgrade to PRO"),De.default.createElement("button",{style:{width:"100%",padding:"12px",backgroundColor:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",color:"white",fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",transition:"all 0.2s"},onMouseEnter:i=>{i.target.style.backgroundColor="rgba(255, 255, 255, 0.08)"},onMouseLeave:i=>{i.target.style.backgroundColor="rgba(255, 255, 255, 0.05)"}},De.default.createElement("span",null,"\u{1F511}")," Register License"),De.default.createElement("button",{style:{width:"100%",padding:"12px",backgroundColor:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",color:"white",fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.2s"},onMouseEnter:i=>{i.target.style.backgroundColor="rgba(255, 255, 255, 0.08)"},onMouseLeave:i=>{i.target.style.backgroundColor="rgba(255, 255, 255, 0.05)"}},De.default.createElement("span",null,"\u{1F381}")," Purchase License")),De.default.createElement("div",null,De.default.createElement("h3",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:"600",color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.5px"}},"Help"),De.default.createElement("button",{onClick:()=>{window.open("https://youtube.com/watch?v=demo","_blank")},style:{width:"100%",padding:"12px",backgroundColor:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",color:"white",fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",transition:"all 0.2s"},onMouseEnter:i=>{i.target.style.backgroundColor="rgba(255, 255, 255, 0.08)"},onMouseLeave:i=>{i.target.style.backgroundColor="rgba(255, 255, 255, 0.05)"}},De.default.createElement("span",null,"\u{1F4F9}")," Video Tutorials"),De.default.createElement("h3",{style:{margin:"16px 0 12px 0",fontSize:"14px",fontWeight:"600",color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.5px"}},"Support"),De.default.createElement("button",{onClick:()=>{window.open("https://github.com/extractor-gpt/issues","_blank")},style:{width:"100%",padding:"12px",backgroundColor:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",color:"white",fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",transition:"all 0.2s"},onMouseEnter:i=>{i.target.style.backgroundColor="rgba(255, 255, 255, 0.08)"},onMouseLeave:i=>{i.target.style.backgroundColor="rgba(255, 255, 255, 0.05)"}},De.default.createElement("span",null,"\u{1F4A1}")," Request Feature"),De.default.createElement("button",{onClick:()=>{window.open("https://discord.gg/extractor-gpt","_blank")},style:{width:"100%",padding:"12px",backgroundColor:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",color:"white",fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.2s"},onMouseEnter:i=>{i.target.style.backgroundColor="rgba(255, 255, 255, 0.08)"},onMouseLeave:i=>{i.target.style.backgroundColor="rgba(255, 255, 255, 0.05)"}},De.default.createElement("span",null,"\u{1F399}\uFE0F")," Join Community")),De.default.createElement("div",{style:{marginTop:"32px",padding:"12px",backgroundColor:"rgba(255, 255, 255, 0.05)",borderRadius:"8px",fontSize:"12px",color:"#6b7280",textAlign:"center"}},De.default.createElement("div",null,"ExtractorGPT v1.0.0"),De.default.createElement("div",{style:{marginTop:"4px"}},e?"\u2713 PRO License Active":"FREE Version")))}var Hx=VT;var Go=ft(it());function XT(){return Go.default.createElement("div",null,Go.default.createElement("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",fontWeight:"600",color:"white"}},"Settings"),Go.default.createElement("div",{style:{padding:"16px",backgroundColor:"rgba(255, 255, 255, 0.05)",borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.1)"}},Go.default.createElement("p",{style:{margin:0,fontSize:"14px",color:"#9ca3af"}},"Settings will be available in a future update.")))}var Wx=XT;var Gx=({className:e})=>pe.default.createElement("svg",{className:e,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},pe.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"})),jT=({className:e})=>pe.default.createElement("svg",{className:e,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},pe.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})),$T=({className:e})=>pe.default.createElement("svg",{className:e,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},pe.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})),YT=({className:e})=>pe.default.createElement("svg",{className:e,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},pe.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})),KT=({className:e})=>pe.default.createElement("svg",{className:e,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},pe.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),pe.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})),QT=({className:e})=>pe.default.createElement("svg",{className:e,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},pe.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})),JT=({isOpen:e,onClose:t})=>{let[r,n]=(0,pe.useState)(Vt.RUN),[a,i]=(0,pe.useState)(!1),[o,s]=(0,pe.useState)(!1),[l,f]=(0,pe.useState)(!0),[u,g]=(0,pe.useState)([]),[d,p]=(0,pe.useState)(!1),x=(0,pe.useRef)(!0);(0,pe.useEffect)(()=>{let P=k=>{console.log("[WebPeelerPanel] Data update event received:",k),console.log("[WebPeelerPanel] Event detail:",k.detail),k.detail&&k.detail.results?(console.log("[WebPeelerPanel] Setting extracted data:",k.detail.results),g(k.detail.results),p(!0),s(!1)):console.warn("[WebPeelerPanel] Data update event missing results:",k.detail)};window.addEventListener("extractorGPT:dataUpdated",P);let D=()=>{console.log("[WebPeelerPanel] Selection disabled event received"),i(!1)};return window.addEventListener("extractorGPT:selectionDisabled",D),()=>{window.removeEventListener("extractorGPT:dataUpdated",P),window.removeEventListener("extractorGPT:selectionDisabled",D)}},[]);let h=()=>{a?F():E()},v=[{id:Vt.RUN,icon:Gx,title:"Extract List"},{id:Vt.PAGE_DETAILS,icon:jT,title:"Extract Details"},{id:Vt.EXTRACT_EMAILS,icon:$T,title:"Extract Emails"},{id:Vt.DOWNLOAD_IMAGES,icon:YT,title:"Download Images"}],w=()=>{switch(r){case Vt.RUN:return pe.default.createElement(Ox,{extractedData:u,showResults:d,isPro:l,highlightEnabled:a});case Vt.PAGE_DETAILS:return pe.default.createElement(Bx,{isPro:l});case Vt.EXTRACT_EMAILS:return pe.default.createElement(Ux,{isPro:l});case Vt.DOWNLOAD_IMAGES:return pe.default.createElement(zx,{isPro:l});case Vt.SETTINGS:return pe.default.createElement(Wx,null);case Vt.HELP:return pe.default.createElement(Hx,{isPro:l,onProToggle:f});default:return null}};if(!e)return null;let m=!o||a||d,E=()=>{console.log("[WebPeelerPanel] Enabling selection mode");try{if(window.__extractorGPT&&window.__extractorGPT.selectionEngine){let P=window.__extractorGPT.selectionEngine;P.isActive||(P.attach(),P.isActive=!0),P.startSelectionListMode(),i(!0),console.log("[WebPeelerPanel] Selection mode enabled successfully"),console.log("[WebPeelerPanel] Current mode:",P.getMode())}else console.error("[WebPeelerPanel] Selection engine not available")}catch(P){console.error("[WebPeelerPanel] Error enabling selection mode:",P)}},F=()=>{console.log("[WebPeelerPanel] Disabling selection mode");try{if(window.__extractorGPT&&window.__extractorGPT.selectionEngine){let P=window.__extractorGPT.selectionEngine;P.stopSelectionListMode(),P.detach(),P.isActive=!1,i(!1),console.log("[WebPeelerPanel] Selection mode disabled successfully")}}catch(P){console.error("[WebPeelerPanel] Error disabling selection mode:",P)}};return pe.default.createElement(pe.default.Fragment,null,pe.default.createElement("div",{style:{position:"fixed",top:"16px",right:"16px",display:"flex",flexDirection:"column",alignItems:"flex-end",gap:m?"12px":"0",transition:"all 0.3s ease",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',zIndex:2147483640}},pe.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},pe.default.createElement("div",{style:{width:"min(25vw, 320px)",minWidth:"260px",padding:"8px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(31, 41, 55, 0.98) 0%, rgba(17, 24, 39, 0.95) 100%)",backdropFilter:"blur(16px)",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.4)",position:"relative"}},a&&pe.default.createElement("div",{style:{position:"absolute",top:"-14px",left:"50%",transform:"translateX(-50%)"}},pe.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"6px",padding:"3px 10px",backgroundColor:"rgba(17, 24, 39, 0.95)",borderRadius:"12px",border:"1px solid rgba(124, 58, 237, 0.3)",fontSize:"10px",color:"rgba(196, 181, 253, 0.9)",fontWeight:"500",backdropFilter:"blur(10px)"}},pe.default.createElement("div",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:"#8b5cf6",animation:"pulse 2s infinite"}}),"Selection Active")),pe.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"6px"}},pe.default.createElement("button",{onClick:h,style:{padding:"8px",borderRadius:"8px",border:"2px solid",borderColor:a?"rgba(251, 146, 60, 0.4)":"rgba(124, 58, 237, 0.4)",backgroundColor:a?"rgba(251, 146, 60, 0.15)":"rgba(124, 58, 237, 0.15)",color:a?"#fb923c":"#a78bfa",cursor:"pointer",transition:"all 0.2s",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:P=>{P.currentTarget.style.transform="scale(1.05)",P.currentTarget.style.backgroundColor=a?"rgba(251, 146, 60, 0.25)":"rgba(124, 58, 237, 0.25)"},onMouseLeave:P=>{P.currentTarget.style.transform="scale(1)",P.currentTarget.style.backgroundColor=a?"rgba(251, 146, 60, 0.15)":"rgba(124, 58, 237, 0.15)"},title:a?"Disable list selection":"Enable list selection"},pe.default.createElement(Gx,{className:"h-5 w-5"})),pe.default.createElement("div",{style:{display:"flex",gap:"4px",flex:1}},v.map(P=>pe.default.createElement("button",{key:P.id,onClick:()=>{s(!1),n(P.id)},style:{padding:"8px",borderRadius:"8px",backgroundColor:r===P.id?"rgba(124, 58, 237, 0.15)":"transparent",border:"none",color:r===P.id?"rgba(196, 181, 253, 0.9)":"rgba(156, 163, 175, 0.9)",cursor:"pointer",transition:"all 0.2s",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:D=>{r!==P.id&&(D.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.05)")},onMouseLeave:D=>{r!==P.id&&(D.currentTarget.style.backgroundColor="transparent")},title:P.title},pe.default.createElement(P.icon,{className:"h-4 w-4"})))),pe.default.createElement("div",{style:{width:"1px",height:"24px",backgroundColor:"rgba(255, 255, 255, 0.08)",margin:"0 4px"}}),pe.default.createElement("div",{style:{display:"flex",gap:"2px"}},pe.default.createElement("button",{title:"Settings",onClick:()=>n(Vt.SETTINGS),style:{padding:"8px",borderRadius:"8px",backgroundColor:"transparent",border:"none",color:"rgba(156, 163, 175, 0.9)",cursor:"pointer",transition:"all 0.2s",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:P=>{P.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.05)"},onMouseLeave:P=>{P.currentTarget.style.backgroundColor="transparent"}},pe.default.createElement(KT,{className:"h-4 w-4"})),pe.default.createElement("button",{title:"Close",onClick:t,style:{padding:"8px",borderRadius:"8px",backgroundColor:"transparent",border:"none",color:"rgba(156, 163, 175, 0.9)",cursor:"pointer",transition:"all 0.2s",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:P=>{P.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.05)"},onMouseLeave:P=>{P.currentTarget.style.backgroundColor="transparent"}},pe.default.createElement(QT,{className:"h-4 w-4"}))))),m&&pe.default.createElement("div",{style:{marginTop:"12px",width:"min(25vw, 320px)",minWidth:"260px",maxHeight:"70vh",overflowY:"auto",padding:"14px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(17, 24, 39, 0.98) 0%, rgba(31, 41, 55, 0.95) 100%)",backdropFilter:"blur(16px)",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.4)",color:"rgba(255, 255, 255, 0.9)"},className:"panda-scrollbar"},w()))))},Vx=JT;var Be=Object.freeze({SELECTION:"selection",SELECTION_LIST:"selection-list",SELECT_PAGINATION_BUTTON:"select-pagination-button",SELECT_PAGE_DEATILS:"select-page-details"}),Ti=Object.freeze({TYPE_1:"type-1",TYPE_2:"type-2"}),Xx=[{website:"apollo.io",type:Ti.TYPE_1},{website:"drinkersedition.com",type:Ti.TYPE_1},{website:"steampowered.com",type:Ti.TYPE_1}];var Zl=class{constructor(){this.clsHighlighterOverlay="panda-highlighter-overlay",this.clsHighlighterItem="panda-highlighter-item"}addOverlayClass(t){t.classList.add(this.clsHighlighterOverlay)}addItemClass(t){t.classList.add(this.clsHighlighterItem)}removeOverlayClass(t){t.classList.remove(this.clsHighlighterOverlay)}removeItemClass(t){t.classList.remove(this.clsHighlighterItem)}},ql=Zl;var Vo=class extends ql{constructor(t){super();let r=t?t.rootView:void 0,n=r===void 0?document.body:r;this.rootView=n,this.config={clsOverlay:"panda-extract-cursor-move-overlay",clsLayer:"panda-z-2"}}highlight(t){let r=t.element,n=this.getOrCreateOverlay(),a=r.getBoundingClientRect(),i=a.width,o=a.height;n.style.position="absolute",n.style.width=`${i}px`,n.style.height=`${o}px`,n.style.top=`${window.scrollY+a.top}px`,n.style.left=`${window.scrollX+a.left}px`}removeHighlight(){let t=document.body.querySelector(this.config.clsOverlay.dot());t&&t.remove()}getOrCreateOverlay(){let t=document.body.querySelector(this.config.clsOverlay.dot());if(!t){let r=document.createElement("div");return r.classList.add(this.config.clsOverlay,this.config.clsLayer),document.body.appendChild(r),r}return t}};var Xo=class extends ql{constructor(t){super();let r=t.overlayClassName,n=t.highlightedItemClassName,a=t.highlightedSubItemClassName,i=t.rootView,o=i===void 0?document.body:i;this.rootView=o,this.config={clsOverlay:r,clsLayer:"panda-z-2",clsItem:n,clsSubItem:a}}highlight(t){let r=this;t.elements.forEach(function(n){if(r.config.clsItem&&n.classList.add(r.config.clsItem),r.config.clsOverlay){let a=r.createOverlay();document.body.appendChild(a),setTimeout(function(){let i=n.getBoundingClientRect();a.style.position="absolute",a.style.width=`${i.width}px`,a.style.height=`${i.height}px`,a.style.top=`${window.scrollY+i.top}px`,a.style.left=`${window.scrollX+i.left}px`},305)}})}highlightDirectly(t){t.elements.forEach(function(r){r.classList.add("panda-highlight-child-element-active")})}highlightElementsOfChildren(t){let r=this;t.elements.forEach(function(n){n.classList.add(r.config.clsSubItem)})}isHighlighted(t){let r=t.closest(this.config.clsOverlay.dot())!=null,n=!!this.config.clsItem&&t.closest(this.config.clsItem.dot())!=null;return r||n}removeHighlightsInsideChildren(){let t=this;this.config.clsSubItem&&document.querySelectorAll(this.config.clsSubItem.dot()).forEach(function(r){return r.classList.remove(t.config.clsSubItem)})}removeHighlights(){let t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{removeOverlay:!0,removeItemHighlight:!0,removeDirectHighlight:!0},n=r.removeOverlay,a=r.removeItemHighlight,i=r.removeDirectHighlight;this.config.clsOverlay&&n&&document.body.querySelectorAll(this.config.clsOverlay.dot()).forEach(function(o){return o.remove()}),a&&this.removeHighlightsInsideChildren(),this.config.clsItem&&a&&document.querySelectorAll(this.config.clsItem.dot()).forEach(function(o){return o.classList.remove(t.config.clsItem)}),this.config.clsItem&&i&&document.querySelectorAll(this.config.clsItem.dot()).forEach(function(o){return o.classList.remove(t.config.clsItem)})}createOverlay(){let t=document.createElement("div");return t.classList.add(this.config.clsOverlay,this.config.clsLayer),t}};var ZT=new WeakMap,mu=function(e){let t=e.event,r=e.element;this.cursorHighlighter.highlight({element:r}),this.onElementHovered&&this.onElementHovered({event:t,element:r}),this.context.mode===Be.SELECTION&&this.highlightIfCollection({element:r})},jx=function(e,t){let r=t.target;e.isIgnoredElement(r)||(e.context.mode===Be.SELECTION_LIST?(e.cursorHighlighter.highlight({element:r}),e.onElementHovered&&e.onElementHovered({event:t,element:r}),e.highlightIfCollection({element:r})):e.context.mode===Be.SELECT_PAGINATION_BUTTON||e.context.mode===Be.SELECT_PAGE_DEATILS?(e.cursorHighlighter.highlight({element:r}),e.onElementHovered&&(e.onElementHovered({event:t,element:r}),Kx.call(e,e,r))):mu.call(e,{event:t,element:r}))},$x=function(e,t){let r=t.target;e.isIgnoredElement(r)||(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e.context.mode===Be.SELECTION_LIST?e.isHighlightedCollectionElement(r)&&e.onListSelected&&e.onListSelected({element:r,parent:e.highlights.selected}):e.context.mode===Be.SELECT_PAGE_DEATILS?e.onElementClick&&e.onElementClick({event:t,data:{viewType:"ELEMENT",element:r,hoveredSelection:e.getHoveredSelection()}}):e.onElementClick&&e.onElementClick({event:t,data:{element:r,viewType:"ELEMENT"}}))},Yx=function(e,t){t.key==="Escape"?e.context.mode===Be.SELECTION_LIST&&e.resetSelectionMode():t.key.toLowerCase()==="r"&&t.ctrlKey?e.resume():t.key.toLowerCase()==="p"&&t.ctrlKey?e.pause():e.highlights?t.key==="ArrowUp"?(t.preventDefault(),e.updateSelectedParent("UP")):t.key==="ArrowDown"&&(t.preventDefault(),e.updateSelectedParent("DOWN")):e.context.mode===Be.SELECT_PAGE_DEATILS&&e.selections&&(t.key==="ArrowUp"?(t.preventDefault(),xu.call(e,e,"UP")):t.key==="ArrowDown"&&(t.preventDefault(),xu.call(e,e,"DOWN")))},Kx=function(e,t){let r=[],n=t;for(;n&&n.tagName!=="BODY";)r.push(n),n=n.parentElement;n&&n.tagName==="BODY"&&r.push(n),e.selections={hierarchy:r,selectedIndex:0}},xu=function(e,t){if(e.selections){let r=e.selections,n=r.hierarchy,a=r.selectedIndex+(t==="UP"?1:-1);if(a>=0&&a<n.length){let i=n[a];e.selections.selectedIndex=a,mu.call(e,{event:null,element:i})}}},e0=class{constructor(){ZT.set(this,{ve:mu.bind(this),ue:jx.bind(this),de:$x.bind(this),fe:Yx.bind(this),pe:Kx.bind(this),ge:xu.bind(this)})}static ue(t,r){jx(t,r)}static de(t,r){$x(t,r)}static fe(t,r){Yx(t,r)}},t0=e0;var PS=Object.freeze({LIST:"LIST",TABLE:"TABLE",ELEMENT:"ELEMENT"}),IS=Object.freeze({EXTRACT:"EXTRACT",EXTRACT_TEXT:"EXTRACT_TEXT",EXTRACT_HTML:"EXTRACT_HTML",EXTRACT_ATTRIBUTE:"EXTRACT_ATTRIBUTE",EXTRACT_IMAGE_URL:"EXTRACT_IMAGE_URL",EXTRACT_LINK_URL:"EXTRACT_LINK_URL"}),NS=Object.freeze({PANDA_EXTRACT:"panda-extract",PANDA_EXTRACT_CURSOR_MOVE_OVERLAY:"panda-extract-cursor-move-overlay",PANDA_EXTRACT_ELEMENT_INFO_OVERLAY:"panda-extract-element-info-overlay",PANDA_EXTRACT_ELEMENT_INFO_OVERLAY_ITEM:"panda-extract-element-info-overlay-item",PANDA_EXTRACT_SIMILAR_ELEMENT_OVERLAY:"panda-extract-similar-element-overlay",PANDA_EXTRACT_POPUP_COLUMN:"panda-extract-popup-column",PANDA_EXTRACT_ITEM:"panda-extract-item",PANDA_EXTRACT_TYPE_MENU:"panda-extract-type-menu",PANDA_EXTRACT_CHOICE_BUTTON:"panda-extract-choice-button",PANDA_EXTRACTABLE_HIGHLIGHT:"panda-extractable-highlight",PANDA_EXTRACT_HIGHLIGHTED_ITEM:"panda-extract-highlighted-item"}),LS=Object.freeze({PANDA_HIGHLIGHT_COLLECTION_ELEMENT:"panda-highlight-collection-element",PANDA_HIGHLIGHT_ACTIVE_COLLECTION_ELEMENT:"panda-highlight-active-collection-element",PANDA_HIGHLIGHT_CHILD_ELEMENT_ACTIVE:"panda-highlight-child-element-active",PANDA_HIGHLIGHTER_OVERLAY:"panda-highlighter-overlay",PANDA_HIGHLIGHTER_ITEM:"panda-highlighter-item"}),DS=Object.freeze({PANDA_Z:"panda-z",PANDA_Z_1:"panda-z-1",PANDA_Z_2:"panda-z-2",PANDA_Z_3:"panda-z-3",PANDA_Z_4:"panda-z-4",PANDA_Z_5:"panda-z-5",PANDA_Z_6:"panda-z-6",PANDA_Z_7:"panda-z-7",PANDA_Z_8:"panda-z-8",PANDA_Z_9:"panda-z-9",PANDA_Z_10:"panda-z-10",PANDA_Z_11:"panda-z-11",PANDA_Z_12:"panda-z-12",LAYER_FLOATING_CONTENT:"layer-floating-content",LAYER_POPUP_BG:"layer-popup-bg",LAYER_POPUP:"layer-popup",LAYER_POPUP_MENU_BG:"layer-popup-menu-bg",LAYER_POPUP_MENU:"layer-popup-menu",PANDA_LAYER_CONTENT:"panda-layer-content",PANDA_LAYER_HIGHLIGHT:"panda-layer-highlight"}),OS=Object.freeze({EXTRACT_SMALL_TABLE:"extract-small-table"}),RS=Object.freeze({CONTAINER_ID:"shadow-container-panda-extract"}),MS=Object.freeze({ignoreViewsWithClass:["panda-extract"],extractImages:!0,extractAriaLabel:!1});String.prototype.dot||(String.prototype.dot=function(){return"."+this});var vu=class{constructor(t){this.options=t||{minRowsFilter:4},this.tableNode=null,this.rowNode=null}findGroupParent(t){let r=t,n=t,a=[],i=0;try{for(;r&&r!==document.body&&r!==document.documentElement;){let s,l=0,f=[],u=Array.from(r.children);try{for(let g of u)this.isValidGroupElement(g)&&g.offsetHeight>0&&(f.push(g),l++)}catch{}l>=this.options.minRowsFilter&&(a.push({tableNode:r,children:f,rowNode:n,childCount:l}),l>i&&(i=l)),n=r,r=r.parentNode}let o=null;for(let s=0;s<a.length;s++){let l=a[s];if(l.childCount===i){o=l;break}}return{bestCandidate:o,candidates:a}}catch{return null}}isValidGroupElement(t){return["TR","SUMMARY","LI","DIV","DETAILS","ASIDE","ARTICLE","A","FIGURE"].includes(t.tagName)||/-/g.test(t.tagName)}getSelector(t,r){let n=this.findGroupParent(t,r);if(!n)return"";this.tableNode=n.tableNode,this.rowNode=n.rowNode;let a=this.generateSelector(this.tableNode),i=this.generateSelector(this.rowNode);return`${a} > ${i}`}generateSelector(t){return t.id?`#${t.id}`:t.className?`.${t.className.split(" ").join(".")}`:t.tagName.toLowerCase()}selectGroup(t,r){return r.document.body.querySelectorAll(t)}},Qx=vu;var wu=class{static getGeneralizedCssSelector(t){let r=t.element,n=t.clsDepth,a=n===void 0?2:n,i=t.nodeDepth,o=i===void 0?5:i,s=t.root,l=s===void 0?null:s;if(r){let f=[],u=0;for(;r.nodeType===Node.ELEMENT_NODE&&r.nodeName.toLowerCase()!=="body"&&r!==l&&u<o;r=r.parentNode,u++){let g=r.nodeName.toLowerCase().replace(/:/g,"\\:"),d=Array.from(r.classList).filter(function(p){return/^[a-zA-Z_][a-zA-Z0-9-_]*$/.test(p)&&!p.includes("panda-")}).slice(0,a);d.length&&(g+="."+d.join(".")),f.unshift(g)}return f.join(" > ")}}static getSelectorNthType(t){let r=t.root,n=t.element,a=[];for(;n.nodeType===Node.ELEMENT_NODE&&n.nodeName.toLowerCase()!=="body"&&n!=r;n=n.parentNode){let i=n.nodeName.toLowerCase(),o=Array.from(n.parentNode.children).filter(function(s){return s.nodeName===n.nodeName}).indexOf(n)+1;i+=`:nth-of-type(${o})`,a.unshift(i)}return r&&(a[0]=a[0].replace(/:nth-type\(\d+\)/,"")),a.join(" > ")}static getSelectorNthChild(t){let r=t.root,n=t.element,a=t.depth,i=a===void 0?4:a,o=[];for(;n&&n.nodeType===Node.ELEMENT_NODE&&n.nodeName.toLowerCase()!=="body"&&n!==r;){let s=n.nodeName.toLowerCase(),l=n.parentNode;if(l&&l.children){let f=Array.from(l.children).indexOf(n)+1;s+=`:nth-child(${f})`}o.unshift(s),n=l}return r&&o.length>0&&(o[0]=o[0].replace(/:nth-child\(\d+\)/,"")),i>0?o.slice(-i).join(" > "):o.join(" > ")}static findSelectorResultIndex(t){let r=t.rootView,n=t.element,a=t.selector,i=r.querySelectorAll(a);return!i||!i.length?-1:Array.from(i).indexOf(n)}static isSelectorValid(t){let r;try{r=t,document.createDocumentFragment().querySelector(r)}catch{return!1}return!0}static verifySelector(t){let r=t.rootView,n=t.element,a=t.selector;try{let i=r.querySelectorAll(a);if(!i||!i.length)return null;let o=Array.from(i).indexOf(n);return o===-1?null:o}catch{return null}}},Jx=wu;String.prototype.dot||(String.prototype.dot=function(){return"."+this});var qT=oi,e4=Qx,t4=Jx,r4=Vo,n4=Xo,e3=Object.freeze({LIST:"LIST",TABLE:"TABLE",ELEMENT:"ELEMENT"}),yu=class{constructor(t){t||(console.error("[SelectionEngine] Constructor called without config object"),t={onElementClick:()=>{},config:{},onPause:()=>{},onResume:()=>{},onListSelected:()=>{},onModeChanged:()=>{},onElementHovered:()=>{}});let r=this,n=t.onElementClick,a=t.config,i=t.onPause,o=t.onResume,s=t.onListSelected,l=t.onModeChanged,f=t.onElementHovered;this.onElementClick=n,this.onPause=i,this.onResume=o,this.onListSelected=s,this.onModeChanged=l,this.onElementHovered=f,this.config={...a,ignoreViewsWithClass:["panda-extract"]},this.rootView=qT.getShadowRoot();let u=window.location.href,g=Xx.find(function(d){return u.includes(d.website)});this.groupFinderType=g?g.type:Ti.TYPE_2,this.cursorHighlighter=new r4({rootView:this.rootView}),this.collectionHighlighter=new n4({overlayClassName:"panda-highlight-collection-element",highlightedItemClassName:"panda-extract-highlighted-item",rootView:this.rootView}),this.context={mode:Be.SELECTION},this.mouseMoveListener=function(d){t0.ue(r,d)},this.mouseClickListener=function(d){t0.de(r,d)},this.keyPressListener=function(d){t0.fe(r,d)},this.pointerDownListener=function(d){d.stopImmediatePropagation(),d.stopPropagation(),d.preventDefault()}}getHoveredSelection(){try{if(!this.selections)return null;let t=this.selections;return t.hierarchy[t.selectedIndex]}catch{return null}}findGroupElement(t){var a;if(this.groupFinderType!==Ti.TYPE_1){let i,o=new e4().findGroupParent(t);return o?{bestCandidate:(a=o.bestCandidate)==null?void 0:a.tableNode,candidates:(i=o.candidates)===null||i===void 0?void 0:i.map(function(s){return s.tableNode})}:null}let r=t4.getGeneralizedCssSelector({element:t}),n=document.querySelectorAll(r);if(n.length>1){let i=function(o){let s=o.target,l=o.elements,f=[],u=s||l[0];if(!u)return null;for(;u.parentNode&&u.parentNode!==document.body;)u.parentNode.offsetWidth!==0&&u.parentNode.offsetHeight!==0&&f.push(u.parentNode),u=u.parentNode;let g,d=function(){let p=c[i];if(Array.from(l).every(function(x){for(let h=x;h.parentNode;){if(h.parentNode===p)return!0;h=h.parentNode}return!1}))return{v:{commonParent:p,allParents:f,elements:l}}};for(let p=0,x=f;p<x.length;p++)if(g=d())return g.v;return null}({target:t,elements:n});return{bestCandidate:i==null?void 0:i.commonParent,candidates:i==null?void 0:i.allParents}}}updateStateHighlights(t){let r=t.allParents,n=t.selected;r=r?r.filter(function(a){return a.children.length>1}):[],this.highlights={selected:n,all:r}}isIgnoredElement(t){return function(r){return r.id==="shadow-container-panda-extract"||r.closest("shadow-container-panda-extract")!==null}(t)||this.config.ignoreViewsWithClass.some(function(r){return t.closest(r.dot())})||t.tagName==="HTML"}isHighlightedCollectionElement(t){return this.collectionHighlighter.isHighlighted(t)}isHighlightedActiveElement(t){return!1}getMode(){return this.context.mode}startPaginationSelectMode(){this.context.mode=Be.SELECT_PAGINATION_BUTTON,this.collectionHighlighter.removeHighlights(),this.highlights=null,this.onModeChanged(Be.SELECT_PAGINATION_BUTTON)}stopPaginationSelectMode(){this.context.mode=Be.SELECTION,this.highlights=null,this.onModeChanged(Be.SELECTION)}startPageDetailsSelectMode(){this.context.mode=Be.SELECT_PAGE_DEATILS,this.collectionHighlighter.removeHighlights(),this.highlights=null,this.onModeChanged(Be.SELECT_PAGE_DEATILS)}stopPageDetailsSelectMode(){this.context.mode=Be.SELECTION,this.highlights=null,this.onModeChanged(Be.SELECTION)}startSelectionListMode(){this.context.mode=Be.SELECTION_LIST,this.collectionHighlighter.removeHighlights(),this.onModeChanged(Be.SELECTION_LIST)}stopSelectionListMode(){this.context.mode=Be.SELECTION,this.highlights=null,this.previousCollectionParent=null,this.onModeChanged(Be.SELECTION)}resetSelectionMode(){this.stopSelectionListMode(),this.collectionHighlighter.removeHighlights(),this.highlights=null,this.previousCollectionParent=null,this.onModeChanged(Be.SELECTION)}setSelectionMode(){this.context.mode=Be.SELECTION,this.onModeChanged(Be.SELECTION)}highlightIfCollection(t){var o;let r=t.element,n=this.findGroupElement(r),a=n==null?void 0:n.bestCandidate,i=n==null?void 0:n.candidates;if(a&&((o=a.children)==null?void 0:o.length)>1){let s=a,l=i;if(this.previousCollectionParent!==s){if(this.collectionHighlighter.removeHighlights(),s){let f=Array.from(s.children);f&&this.collectionHighlighter.highlight({elements:f})}this.updateStateHighlights({allParents:l,selected:s}),this.previousCollectionParent=s;return}}else this.previousCollectionParent=null,this.collectionHighlighter.removeHighlights()}removeAllHighlights(){this.highlights=null,this.previousCollectionParent=null,this.cursorHighlighter.removeHighlight(),this.collectionHighlighter.removeHighlights()}updateSelectedParent(t){if(this.highlights){let r=this.highlights,n=r.selected,a=r.all;if(n){let i=a.indexOf(n),o=a[t==="UP"?i-1:i+1];if(o){let s=Array.from(o.children);s&&(this.collectionHighlighter.removeHighlights(),this.collectionHighlighter.highlight({elements:s})),this.highlights.selected=o}}}}pause(){document.removeEventListener("mouseover",this.mouseMoveListener,!0),document.removeEventListener("click",this.mouseClickListener,!0),this.onPause()}resume(){document.addEventListener("mouseover",this.mouseMoveListener,!0),document.addEventListener("click",this.mouseClickListener,!0),this.onResume()}attach(){document.addEventListener("mouseover",this.mouseMoveListener,!0),document.addEventListener("click",this.mouseClickListener,!0),document.addEventListener("keydown",this.keyPressListener),document.addEventListener("pointerdown",this.pointerDownListener,!0)}detach(){document.removeEventListener("mouseover",this.mouseMoveListener,!0),document.removeEventListener("click",this.mouseClickListener,!0),document.removeEventListener("keydown",this.keyPressListener),document.removeEventListener("pointerdown",this.pointerDownListener,!0),this.removeAllHighlights()}},Eu=yu;var _u=class{constructor(){this.currentTask=null,this.isRunning=!1,this.callbacks={},this.extractSettings={},this.contentWindow=null}run(t,r={},n={},a={}){if(!t.contentWindow)throw new Error("contentWindow is required");if(!t.task)throw new Error("task is required");this.contentWindow=t.contentWindow,this.currentTask=t.task,this.extractSettings=n,this.callbacks=a;let i=r.shouldLoadUrl!==void 0?r.shouldLoadUrl:!0;this.isRunning=!0,this.callbacks.onTaskStarted&&this.callbacks.onTaskStarted(this.currentTask),this.executeTask(i)}async executeTask(t){try{t&&this.currentTask.url&&await this.waitForPageLoad();let r=this.currentTask.steps||[];for(let n=0;n<r.length;n++){let a=r[n];this.callbacks.onStepStarted&&this.callbacks.onStepStarted({stepId:a.id,stepIndex:n,totalSteps:r.length});let i=await this.executeStep(a);this.callbacks.onStepCompleted&&this.callbacks.onStepCompleted({stepId:a.id,stepIndex:n,totalSteps:r.length,result:i})}this.isRunning=!1,this.callbacks.onTaskCompleted&&this.callbacks.onTaskCompleted({task:this.currentTask,pagination:null})}catch(r){this.isRunning=!1,this.callbacks.onError?this.callbacks.onError(r):console.error("Task execution error:",r)}}async executeStep(t){let{action:r,selector:n,elements:a}=t;switch(r){case"extract":return this.performExtraction(n,a);case"click":return this.performClick(n);case"scroll":return this.performScroll();case"wait":return this.performWait(t.duration||1e3);default:throw new Error(`Unknown action type: ${r}`)}}performExtraction(t,r){try{let n=[];t?n=Array.from(this.contentWindow.document.querySelectorAll(t)):r&&r.length>0?n=r:n=[this.contentWindow.document.body];let a=yn.findExtractableElements({elements:n,settings:this.extractSettings});return{extractableElements:a.extractableElements,children:a.children}}catch(n){throw console.error("Extraction error:",n),n}}performClick(t){try{let r=this.contentWindow.document.querySelector(t);if(!r)throw new Error(`Element not found: ${t}`);let n=new this.contentWindow.MouseEvent("click",{bubbles:!0,cancelable:!0,view:this.contentWindow});return r.dispatchEvent(n),{clicked:!0,selector:t}}catch(r){throw console.error("Click error:",r),r}}performScroll(){try{return this.contentWindow.scrollTo({top:this.contentWindow.document.body.scrollHeight,behavior:"smooth"}),{scrolled:!0}}catch(t){throw console.error("Scroll error:",t),t}}performWait(t){return new Promise(r=>{setTimeout(()=>{r({waited:t})},t)})}waitForPageLoad(){return new Promise((t,r)=>{let n=setTimeout(()=>{r(new Error("Page load timeout"))},3e4);if(this.contentWindow.document.readyState==="complete"){clearTimeout(n),t();return}let a=()=>{clearTimeout(n),this.contentWindow.removeEventListener("load",a),t()};this.contentWindow.addEventListener("load",a)})}cancel(){this.isRunning=!1,this.currentTask=null,this.callbacks.onTaskCompleted&&this.callbacks.onTaskCompleted({task:this.currentTask,cancelled:!0})}getStatus(){return{isRunning:this.isRunning,currentTask:this.currentTask}}},a4=new _u;var Zx=a4;var ku=class{constructor(){this.paginationSelectors=['a[rel="next"]','a[aria-label*="next" i]','a[aria-label*="Next" i]','button[aria-label*="next" i]','button[aria-label*="Next" i]','a:contains("Next")','button:contains("Next")',"a.next","button.next",".pagination-next",".next-page",'a[class*="next" i]','button[class*="next" i]','a[aria-label*="\u2192"]','button[aria-label*="\u2192"]','a:contains("\u2192")','button:contains("\u2192")','a:contains(">")','button:contains(">")','a:contains("\xBB")','button:contains("\xBB")','button:contains("Load more")','button:contains("load more")','a:contains("Load more")','a:contains("load more")','button[class*="load-more" i]','a[class*="load-more" i]',".load-more","#load-more",'button:contains("Show more")','a:contains("Show more")','button[class*="show-more" i]',".pagination a:last-child",".pagination button:last-child",'nav[role="navigation"] a:contains("Next")','nav[role="navigation"] button:contains("Next")',".pagination li:last-child a",".pagination li:last-child button","ul.pagination li:last-child a",".nav-previous a",".nav-links .next",'.page-link:contains("Next")',".page-item:last-child .page-link",'[data-page="next"]','[data-action="next-page"]','[data-pagination="next"]'],this.infiniteScrollSelectors=["[data-infinite-scroll]","[data-infinite]",".infinite-scroll-container",".infinite-scroll",'[class*="infinite-scroll"]',".endless-scroll",".auto-load"]}async findPaginationWithSmartSearch({window:t,selector:r,expectedText:n,expectedByteSize:a,timeoutMs:i=5e3,shouldScrollToBottom:o=!0,requireTextMatch:s=!0,requireByteSizeMatch:l=!0}){let f=Date.now(),u=await this.findPaginationButton({rootView:t.document.body,selector:r,expectedText:n,expectedByteSize:a,timeoutMs:Math.min(i/2,2e3),requireTextMatch:s,requireByteSizeMatch:l});return u||(o&&(await this.scrollToBottom(t),u=await this.findPaginationButton({rootView:t.document.body,selector:r,expectedText:n,expectedByteSize:a,timeoutMs:i-(Date.now()-f),requireTextMatch:s,requireByteSizeMatch:l})),u)}async findPaginationButton({rootView:t,selector:r,expectedText:n,expectedByteSize:a,timeoutMs:i=5e3,requireTextMatch:o=!0,requireByteSizeMatch:s=!0}){let l=Date.now();return new Promise(f=>{let u=()=>{if(r)try{let g=t.querySelectorAll(r);for(let d of g)if(this.isValidPaginationButton(d,n,a,o,s)){f(d);return}}catch{}for(let g of this.paginationSelectors)try{if(g.includes(":contains(")){let[d,p]=g.split(":contains("),x=p.replace(")","").replace(/"/g,""),h=t.querySelectorAll(d||"*");for(let v of h)if(v.textContent&&v.textContent.includes(x)&&this.isValidPaginationButton(v,n,a,o,s)){f(v);return}}else{let d=t.querySelectorAll(g);for(let p of d)if(this.isValidPaginationButton(p,n,a,o,s)){f(p);return}}}catch{}if(Date.now()-l>=i){f(null);return}setTimeout(u,100)};u()})}isValidPaginationButton(t,r,n,a,i){var o;if(!this.isElementVisible(t)||t.disabled||t.getAttribute("disabled")!==null||t.classList.contains("disabled")||t.getAttribute("aria-disabled")==="true"||a&&r&&(((o=t.textContent)==null?void 0:o.trim())||"")!==r)return!1;if(i&&n){let s=new Blob([t.outerHTML]).size;if(Math.abs(s-n)>n*.1)return!1}return!0}isElementVisible(t){if(!t)return!1;let r=window.getComputedStyle(t);if(r.display==="none"||r.visibility==="hidden"||r.opacity==="0")return!1;let n=t.getBoundingClientRect();return!(n.width===0||n.height===0)}detectPaginationType(){for(let r of this.infiniteScrollSelectors)if(document.querySelector(r))return"PAGINATION_INFINITE_SCROLL";return this.findPaginationButtonSync()?"PAGINATION_BUTTON":"NONE"}findPaginationButtonSync(){for(let t of this.paginationSelectors)try{if(t.includes(":contains(")){let[r,n]=t.split(":contains("),a=n.replace(")","").replace(/"/g,""),i=document.querySelectorAll(r||"*");for(let o of i)if(o.textContent&&o.textContent.includes(a)&&this.isValidPaginationButton(o))return o}else{let r=document.querySelectorAll(t);for(let n of r)if(this.isValidPaginationButton(n))return n}}catch{}return null}async scrollToBottom(t){return new Promise(r=>{let n=t.document.documentElement.scrollHeight;t.scrollTo({top:n,behavior:"smooth"}),setTimeout(r,1e3)})}},r0=new ku;var bu=class{constructor(){this.isRunning=!1,this.settings={autoScroll:!0,dynamic:!0,pagination:null,scrollDelay:1e3,maxScrollAttempts:10,elementWaitTime:2e3,smartPaginationDetection:!0},this.callbacks={},this.extractedData=[],this.processedElements=new Set,this.paginationElement=null}async start({selectionEngine:t,extractionEngine:r,resultsTable:n,settings:a={},callbacks:i={}}){var o,s;if(this.isRunning){console.log("[AutomationHandler] Already running");return}this.isRunning=!0,this.settings={...this.settings,...a},this.callbacks=i,this.extractedData=[],this.processedElements.clear();try{this.callbacks.onStart&&this.callbacks.onStart();let l=(o=t.highlights)==null?void 0:o.selected;if(!l&&((s=window.__extractorGPT)!=null&&s.lastSelectedCollectionParent)&&(l=window.__extractorGPT.lastSelectedCollectionParent,console.log("[AutomationHandler] Using stored collection parent")),!l)throw new Error("No collection selected for extraction");console.log("[AutomationHandler] Starting automation on:",l),await this.extractFromCurrentView(l,r,n),this.settings.autoScroll&&await this.handleAutoScroll(l,r,n),this.settings.pagination&&await this.handlePagination(l,r,n),this.callbacks.onComplete&&this.callbacks.onComplete({totalExtracted:this.extractedData.length,data:this.extractedData}),t&&(console.log("[AutomationHandler] Disabling selection mode after automation"),t.stopSelectionListMode(),t.removeAllHighlights(),t.detach(),t.isActive=!1,window.dispatchEvent(new CustomEvent("extractorGPT:selectionDisabled")))}catch(l){console.error("[AutomationHandler] Error:",l),this.callbacks.onError&&this.callbacks.onError(l)}finally{this.isRunning=!1}}stop(){console.log("[AutomationHandler] Stopping automation"),this.isRunning=!1}async extractFromCurrentView(t,r,n){let a=this.findFreshCollectionParent(t),i=Array.from(a.children);console.log("[AutomationHandler] Extracting from",i.length,"elements");let o=[],s=0;for(let l of i){let f=this.getElementId(l);if(this.processedElements.has(f))continue;let u=r.findExtractableElements({elements:[l],depth:100,settings:{extractImages:!0,extractAriaLabel:!1}});if(u&&u.extractableElements&&u.extractableElements.length>0){let g=u.extractableElements[0];g&&g.length>0&&(o.push(g),this.processedElements.add(f),s++)}}return o.length>0&&(n.insertExtractablesFromList({parent:a,extractables:o,append:!0}),this.extractedData.push(...o),this.callbacks.onProgress&&this.callbacks.onProgress({extracted:o.length,total:this.extractedData.length,newElements:s})),o.length}async handleAutoScroll(t,r,n){console.log("[AutomationHandler] Starting auto-scroll");let a=0,i=this.extractedData.length,o=0,s=t.children.length,l=this.findScrollableContainer(t);console.log("[AutomationHandler] Using scroll container:",l);let f=this.detectInfiniteScroll();for(console.log("[AutomationHandler] Infinite scroll detected:",f);this.isRunning&&a<this.settings.maxScrollAttempts;){let u=l===window?document.documentElement.scrollHeight:l.scrollHeight,g=l===window?window.pageYOffset||document.documentElement.scrollTop:l.scrollTop;if(l===window?window.scrollTo({top:u,behavior:"smooth"}):l.scrollTo({top:l.scrollHeight,behavior:"smooth"}),await this.delay(this.settings.scrollDelay),f||this.settings.dynamic){let h=this.findFreshCollectionParent(t);await this.waitForNewElements(h,s)&&(s=h.children.length)}else await this.delay(this.settings.elementWaitTime);let d=await this.extractFromCurrentView(t,r,n);if(this.extractedData.length===i){if(o++,o>=3){console.log("[AutomationHandler] No new data after 3 attempts, stopping scroll");break}}else o=0,i=this.extractedData.length;a++;let p=l===window?document.documentElement.scrollHeight:l.scrollHeight,x=l===window?window.pageYOffset||document.documentElement.scrollTop:l.scrollTop;if(f){if(p===u&&Math.abs(x-g)<10&&(console.log("[AutomationHandler] Possible end of infinite scroll, waiting longer..."),await this.delay(this.settings.elementWaitTime*2),(l===window?document.documentElement.scrollHeight:l.scrollHeight)===p)){console.log("[AutomationHandler] Reached end of infinite scroll");break}}else if(p===u&&Math.abs(x-g)<10){console.log("[AutomationHandler] Reached bottom of page");break}}}async handlePagination(t,r,n){if(console.log("[AutomationHandler] Checking for pagination..."),!this.settings.pagination&&this.settings.smartPaginationDetection){console.log("[AutomationHandler] Using smart pagination detection...");let a=r0.detectPaginationType();if(console.log("[AutomationHandler] Detected pagination type:",a),a==="PAGINATION_BUTTON")this.paginationElement=await r0.findPaginationButton({rootView:document.body,timeoutMs:3e3}),this.paginationElement&&console.log("[AutomationHandler] Found pagination button:",this.paginationElement);else if(a==="PAGINATION_INFINITE_SCROLL"){console.log("[AutomationHandler] Infinite scroll detected, will be handled by auto-scroll");return}}else this.settings.pagination&&(console.log("[AutomationHandler] Looking for pagination element:",this.settings.pagination),this.paginationElement=document.querySelector(this.settings.pagination));if(!this.paginationElement){console.log("[AutomationHandler] No pagination element found");return}if(!r0.isValidPaginationButton(this.paginationElement)){console.log("[AutomationHandler] Pagination element is disabled or hidden");return}console.log("[AutomationHandler] Clicking pagination element"),this.paginationElement.click(),await this.delay(2e3),this.settings.dynamic&&await this.delay(this.settings.elementWaitTime),this.isRunning&&(this.processedElements.clear(),this.findSimilarElement(t)?await this.start({selectionEngine:window.__extractorGPT.selectionEngine,extractionEngine:r,resultsTable:n,settings:this.settings,callbacks:this.callbacks}):console.log("[AutomationHandler] Could not find collection parent on new page"))}findSimilarElement(t){if(t.className){let o=document.getElementsByClassName(t.className);if(o.length>0)return o[0]}let r=t.tagName,n=document.getElementsByTagName(r),a=null,i=0;for(let o of n){let s=0;Math.abs(o.children.length-t.children.length)<5&&(s+=1);let l=t.className.split(" "),f=o.className.split(" "),u=l.filter(g=>f.includes(g));s+=u.length,s>i&&(i=s,a=o)}return a}getElementId(t){var i;if(t.id)return t.id;let r=((i=t.textContent)==null?void 0:i.trim().substring(0,50))||"",n=t.className||"",a=Array.from(t.parentNode.children).indexOf(t);return`${r}_${n}_${a}`}delay(t){return new Promise(r=>setTimeout(r,t))}findScrollableContainer(t){let r=t;for(;r&&r!==document.body;){let i=window.getComputedStyle(r);if((i.overflowY==="auto"||i.overflowY==="scroll")&&r.scrollHeight>r.clientHeight)return console.log("[AutomationHandler] Found scrollable container:",r),r;r=r.parentElement}let n=['[role="feed"]','[role="list"]','[role="grid"]','[role="table"]',".scroll-container",".scrollable",".overflow-auto",".overflow-y-auto",".overflow-scroll",".overflow-y-scroll","#results","#content","#main-content",".infinite-scroll-component","[data-infinite-scroll]",".feed",".timeline",".stream",".product-list",".search-results",".items-grid"];for(let i of n){let o=document.querySelector(i);if(o&&o.scrollHeight>o.clientHeight){let s=window.getComputedStyle(o);if(s.overflowY==="auto"||s.overflowY==="scroll")return console.log("[AutomationHandler] Found scrollable container by selector:",i,o),o}}let a=window.getComputedStyle(document.body);return(a.overflowY==="auto"||a.overflowY==="scroll")&&document.body.scrollHeight>document.body.clientHeight?(console.log("[AutomationHandler] Using body as scroll container"),document.body):(console.log("[AutomationHandler] Using default window scrolling"),window)}findFreshCollectionParent(t){if(t&&document.body.contains(t))return t;let r=t.tagName,n=t.className,a=t.getAttribute("role");if(n){let i=document.getElementsByClassName(n);for(let o of i)if(o.tagName===r&&o.children.length>0)return console.log("[AutomationHandler] Found fresh parent by class"),o}if(a){let i=document.querySelector(`${r}[role="${a}"]`);if(i&&i.children.length>0)return console.log("[AutomationHandler] Found fresh parent by role"),i}return console.log("[AutomationHandler] Using original parent"),t}async waitForNewElements(t,r){let i=Date.now();for(;Date.now()-i<5e3;){let s=this.findFreshCollectionParent(t).children.length;if(s>r)return console.log(`[AutomationHandler] New elements loaded: ${s-r}`),!0;await this.delay(100)}return!1}detectInfiniteScroll(){return[document.querySelector("[data-infinite-scroll]"),document.querySelector(".infinite-scroll-component"),document.querySelector('[class*="infinite"]'),document.querySelector(".loading-spinner:last-child"),document.querySelector(".loader:last-child"),document.querySelector('[class*="loading"]:last-child'),document.querySelector('meta[name="infinite-scroll"]'),document.querySelector('[data-pagination-type="infinite"]')].some(r=>r!==null)}},i4=new bu,Tu=i4;var En=ft(it());var Su=class{static save(t,r){try{chrome&&chrome.storage&&chrome.storage.local&&chrome.storage.local.set({[t]:r},()=>{chrome.runtime.lastError&&console.error("Storage save error:",chrome.runtime.lastError)})}catch(n){console.error("Error saving to storage:",n)}}static async getAllKeys(){return new Promise(t=>{try{chrome&&chrome.storage&&chrome.storage.local?chrome.storage.local.get(null,r=>{let n=Object.keys(r);t(n)}):t([])}catch(r){console.error("Error getting all keys:",r),t([])}})}static async retrieve(t){return new Promise(r=>{try{chrome&&chrome.storage&&chrome.storage.local?chrome.storage.local.get([t],n=>{n[t]!==void 0?r(n[t]):r(null)}):r(null)}catch(n){console.error("Error retrieving from storage:",n),r(null)}})}static async remove(t){return new Promise(r=>{try{chrome&&chrome.storage&&chrome.storage.local?chrome.storage.local.remove(t,()=>{r()}):r()}catch(n){console.error("Error removing from storage:",n),r()}})}static async removeAny(t){return new Promise(async r=>{try{if(chrome&&chrome.storage&&chrome.storage.local){let a=(await this.getAllKeys()).filter(i=>i.includes(t));if(a.length===0){r();return}chrome.storage.local.remove(a,()=>{r()})}else r()}catch(n){console.error("Error removing keys by pattern:",n),r()}})}static clearAll(){try{chrome&&chrome.storage&&chrome.storage.local&&chrome.storage.local.clear(()=>{chrome.runtime.lastError&&console.error("Storage clear error:",chrome.runtime.lastError)})}catch(t){console.error("Error clearing storage:",t)}}static async getMultiple(t){return new Promise(r=>{try{chrome&&chrome.storage&&chrome.storage.local?chrome.storage.local.get(t,n=>{r(n)}):r({})}catch(n){console.error("Error getting multiple keys:",n),r({})}})}static saveMultiple(t){try{chrome&&chrome.storage&&chrome.storage.local&&chrome.storage.local.set(t,()=>{chrome.runtime.lastError&&console.error("Storage save multiple error:",chrome.runtime.lastError)})}catch(r){console.error("Error saving multiple items:",r)}}static addListener(t){chrome&&chrome.storage&&chrome.storage.onChanged&&chrome.storage.onChanged.addListener((r,n)=>{n==="local"&&t(r)})}static async getBytesInUse(t=null){return new Promise(r=>{try{chrome&&chrome.storage&&chrome.storage.local&&chrome.storage.local.getBytesInUse?chrome.storage.local.getBytesInUse(t,n=>{r(n)}):r(0)}catch(n){console.error("Error getting storage size:",n),r(0)}})}},nr=Su;var s4=(0,En.createContext)(),l4={resultsPanelExpanded:!1,actionPanelExpanded:!0,showUpsell:!1,showUpsellCredits:!1,showRegisterLicense:!1,showRateUs:!1,showExtractPageDetailsPrePopup:!1,showExtractEmailsPrePopup:!1,loadExtractPageDetailsPrePopupUrls:!1,isProcessingListResults:!1,isBlackFridayDeal:!1,showDeviceManager:!1,extractSettings:y1,resultsSelectedSource:"list",resultsList:new Jn,resultsDetails:new Jn,resultsEmails:new Jn,tab:Vt.RUN,isClipboardCountdownEnabled:!1,isStripeCheckout2Enabled:!1};function qx({children:e}){let[t,r]=(0,En.useState)(l4);(0,En.useEffect)(()=>{(async()=>{let d=await nr.retrieve(vl.EXTRACT_SETTINGS);d&&n(d)})()},[]);let n=g=>{r(d=>{let p={...d,extractSettings:{...d.extractSettings,...g}};return nr.save(vl.EXTRACT_SETTINGS,p.extractSettings),p})},u={globalState:t,setGlobalState:r,updateExtractSettings:n,setResultsPanelExpanded:g=>{r(d=>({...d,resultsPanelExpanded:g}))},setListResults:g=>{r(d=>{let p=g(d.resultsList);return{...d,resultsList:p}})},setDetailsResults:g=>{r(d=>{let p=g(d.resultsDetails);return{...d,resultsDetails:p}})},setEmailsResults:g=>{r(d=>{let p=g(d.resultsEmails);return{...d,resultsEmails:p}})},setTab:g=>{r(d=>({...d,tab:g}))},toggleModal:(g,d)=>{r(p=>({...p,[g]:d}))}};return En.default.createElement(s4.Provider,{value:u},e)}var qr=ft(it());var c4=(0,qr.createContext)(),em={status:St.IDLE,isProcessing:!1,progress:0,currentUrl:null,totalUrls:0,completedUrls:0,errors:[],results:[]},tm={status:St.IDLE,isProcessing:!1,progress:0,currentUrl:null,totalUrls:0,completedUrls:0,errors:[],results:[]};function rm({children:e}){let[t,r]=(0,qr.useState)(em),[n,a]=(0,qr.useState)(tm);(0,qr.useEffect)(()=>{let x=(h,v,w)=>{h.action===ml.STATUS_UPDATE_EXTRACT?i(h.data):h.action===ml.STATUS_UPDATE_EXTRACT_EMAILS&&o(h.data)};return chrome.runtime.onMessage.addListener(x),()=>{chrome.runtime.onMessage.removeListener(x)}},[]);let i=x=>{if(!x||!Array.isArray(x))return;let h=x.length,v=x.filter(L=>L.status==="complete"||L.status==="failed").length,w=x.filter(L=>L.status==="running"),m=x.filter(L=>L.status==="failed"),E=h>0?v/h*100:0,F=w.length>0?w[0].url:null,P=m.map(L=>({url:L.url,error:L.outcome})),D=x.filter(L=>L.status==="complete"&&L.outcome).map(L=>({url:L.url,data:L.outcome})),k=St.IDLE;w.length>0?k=St.RUNNING:v===h&&h>0&&(k=m.length>0?St.ERROR:St.COMPLETED),r({status:k,isProcessing:k===St.RUNNING,progress:E,currentUrl:F,totalUrls:h,completedUrls:v,errors:P,results:D})},o=x=>{if(!x||!Array.isArray(x))return;let h=x.length,v=x.filter(L=>L.status==="complete"||L.status==="failed").length,w=x.filter(L=>L.status==="running"),m=x.filter(L=>L.status==="failed"),E=h>0?v/h*100:0,F=w.length>0?w[0].url:null,P=m.map(L=>({url:L.url,error:L.outcome})),D=x.filter(L=>L.status==="complete"&&L.outcome).map(L=>({url:L.url,data:L.outcome})),k=St.IDLE;w.length>0?k=St.RUNNING:v===h&&h>0&&(k=m.length>0?St.ERROR:St.COMPLETED),a({status:k,isProcessing:k===St.RUNNING,progress:E,currentUrl:F,totalUrls:h,completedUrls:v,errors:P,results:D})},p={extractState:t,setExtractState:r,extractEmailState:n,setExtractEmailState:a,resetExtractState:()=>{r(em)},resetEmailExtractState:()=>{a(tm)},startExtraction:()=>{r(x=>({...x,status:St.RUNNING,isProcessing:!0,errors:[],results:[]}))},startEmailExtraction:()=>{a(x=>({...x,status:St.RUNNING,isProcessing:!0,errors:[],results:[]}))},stopExtraction:()=>{r(x=>({...x,status:St.STOPPING,isProcessing:!1}))},stopEmailExtraction:()=>{a(x=>({...x,status:St.STOPPING,isProcessing:!1}))}};return qr.default.createElement(c4.Provider,{value:p},e)}var _n=ft(it());var f4=(0,_n.createContext)(),nm={isAuthenticated:!1,user:null,license:null,tier:"FREE",credits:0,devices:[],maxDevices:1,features:{maxUrls:10,maxElements:5,parallelTabs:1,exportFormats:["CSV","CLIPBOARD"],aiFeatures:!1,prioritySupport:!1}};function am({children:e}){let[t,r]=(0,_n.useState)(nm);(0,_n.useEffect)(()=>{(async()=>{let x=await nr.retrieve("user"),h=await nr.retrieve("license");x&&r(v=>({...v,isAuthenticated:!0,user:x,license:h,tier:(h==null?void 0:h.tier)||"FREE",credits:(h==null?void 0:h.credits)||0,devices:(h==null?void 0:h.devices)||[],maxDevices:(h==null?void 0:h.maxDevices)||1,features:n((h==null?void 0:h.tier)||"FREE")}))})()},[]);let n=p=>p==="PRO"?{maxUrls:1e3,maxElements:100,parallelTabs:10,exportFormats:["CSV","EXCEL","JSON","CLIPBOARD","GOOGLE_SHEETS"],aiFeatures:!0,prioritySupport:!0}:{maxUrls:10,maxElements:5,parallelTabs:1,exportFormats:["CSV","CLIPBOARD"],aiFeatures:!1,prioritySupport:!1},a=async p=>{let{user:x,license:h}=p;await nr.save("user",x),await nr.save("license",h),r({isAuthenticated:!0,user:x,license:h,tier:(h==null?void 0:h.tier)||"FREE",credits:(h==null?void 0:h.credits)||0,devices:(h==null?void 0:h.devices)||[],maxDevices:(h==null?void 0:h.maxDevices)||1,features:n((h==null?void 0:h.tier)||"FREE")})},i=async()=>{await nr.remove("user"),await nr.remove("license"),r(nm)},o=async p=>{await nr.save("license",p),r(x=>({...x,license:p,tier:(p==null?void 0:p.tier)||"FREE",credits:(p==null?void 0:p.credits)||0,devices:(p==null?void 0:p.devices)||[],maxDevices:(p==null?void 0:p.maxDevices)||1,features:n((p==null?void 0:p.tier)||"FREE")}))},d={userState:t,setUserState:r,login:a,logout:i,updateLicense:o,addDevice:async p=>{let x=[...t.devices,p],h={...t.license,devices:x};await o(h)},removeDevice:async p=>{let x=t.devices.filter(v=>v.id!==p),h={...t.license,devices:x};await o(h)},hasFeature:p=>t.features[p]||!1,canPerformAction:(p,x=1)=>{switch(p){case"extract":return x<=t.features.maxUrls;case"addElement":return x<=t.features.maxElements;case"export":return!0;default:return!1}},useCredits:async p=>{if(t.credits<p)throw new Error("Insufficient credits");let x={...t.license,credits:t.credits-p};await o(x)},isAuthenticated:t.isAuthenticated,isPro:t.tier==="PRO",isFree:t.tier==="FREE"};return _n.default.createElement(f4.Provider,{value:d},e)}console.log("[EXTRACTOR-GPT] Content script starting to load...");console.log("[EXTRACTOR-GPT] Current URL:",window.location.href);console.log("[EXTRACTOR-GPT] Document ready state:",document.readyState);if(window.__extractorGPT&&window.__extractorGPT.scriptLoaded)console.log("[EXTRACTOR-GPT] Script already loaded, skipping..."),chrome.runtime.onMessage.addListener((e,t,r)=>(console.log("[CONTENT] Received message (from guard):",e),e.action==="ping"?(r({status:"pong"}),!1):e.action==="open"?(window.__extractorGPT&&window.__extractorGPT.isInitialized?(window.dispatchEvent(new CustomEvent("extractorGPT:show")),r({status:"shown"})):r({status:"not_initialized"}),!1):!0));else{let e=function(r){let[n,a]=Hr.default.useState(!1),[i,o]=Hr.default.useState([]),[s,l]=Hr.default.useState(!1);return Hr.default.useEffect(()=>{let u=()=>{console.log("[EXTRACTOR-GPT] Show event received"),a(!0)},g=()=>{console.log("[EXTRACTOR-GPT] Hide event received"),a(!1)},d=p=>{console.log("[EXTRACTOR-GPT] Data update received:",p.detail),p.detail&&p.detail.results&&(o(p.detail.results),l(!0))};return window.addEventListener("extractorGPT:show",u),window.addEventListener("extractorGPT:hide",g),window.addEventListener("extractorGPT:dataUpdated",d),()=>{window.removeEventListener("extractorGPT:show",u),window.removeEventListener("extractorGPT:hide",g),window.removeEventListener("extractorGPT:dataUpdated",d)}},[]),Hr.default.createElement(qx,null,Hr.default.createElement(rm,null,Hr.default.createElement(am,null,Hr.default.createElement(Vx,{isOpen:n,onClose:()=>{console.log("[EXTRACTOR-GPT] Close button clicked"),a(!1),r.selectionEngine&&r.selectionEngine.isActive&&(r.selectionEngine.detach(),r.selectionEngine.removeAllHighlights(),r.selectionEngine.isActive=!1,console.log("[EXTRACTOR-GPT] Selection engine deactivated")),window.dispatchEvent(new CustomEvent("extractorGPT:hide"))},extractedData:i,showResults:s}))))},t=function(r){window.extensionContext||(window.extensionContext={}),window.extensionContext.selectionEngine=r};window.__extractorGPT||(window.__extractorGPT={}),window.__extractorGPT.scriptLoaded=!0;try{let r=function(s){let{element:l,viewType:f}=s.data,u=window.__extractorGPT.extractionEngine.extractAllData(l),g=[[{element:l,type:u.text?"text":u.linkUrl?"link-url":u.imageUrl?"image-url":"text",data:u.text||u.linkUrl||u.imageUrl||""}]];window.__extractorGPT.resultsTable.insertExtractablesFromList({parent:l.parentElement,extractables:g}),window.dispatchEvent(new CustomEvent("extractorGPT:dataUpdated",{detail:{results:window.__extractorGPT.resultsTable.rows,headers:window.__extractorGPT.resultsTable.headers}}))},n=function(s){console.log("[EXTRACTOR-GPT] handleListSelection called with data:",s);let{element:l,parent:f}=s;window.__extractorGPT.lastSelectedCollectionParent=f,console.log("[EXTRACTOR-GPT] Stored collection parent for automation");let u=Array.from(f.children);console.log("[EXTRACTOR-GPT] Found",u.length,"children in parent");let g=window.__extractorGPT.extractionEngine.findExtractableElements({elements:u,depth:1,settings:{extractImages:!0,extractAriaLabel:!1}});console.log("[EXTRACTOR-GPT] findExtractableElements result:",g);let d=g.extractableElements||[];console.log("[EXTRACTOR-GPT] Extractables:",d),window.__extractorGPT.resultsTable.insertExtractablesFromList({parent:f,extractables:d}),console.log("[EXTRACTOR-GPT] Results table rows:",window.__extractorGPT.resultsTable.rows),console.log("[EXTRACTOR-GPT] Results table headers:",window.__extractorGPT.resultsTable.headers);let p=window.__extractorGPT.resultsTable.rows.map((x,h)=>{let v={index:h+1,...x};return x.type==="image-url"&&x.data&&(v.imageUrl=x.data),v});console.log("[EXTRACTOR-GPT] Formatted data for display:",p),window.dispatchEvent(new CustomEvent("extractorGPT:dataUpdated",{detail:{results:p,headers:window.__extractorGPT.resultsTable.headers}})),console.log("[EXTRACTOR-GPT] Data update event dispatched"),window.__extractorGPT.selectionEngine&&(console.log("[EXTRACTOR-GPT] Disabling selection mode after list extraction"),window.__extractorGPT.selectionEngine.stopSelectionListMode(),window.__extractorGPT.selectionEngine.removeAllHighlights(),window.__extractorGPT.selectionEngine.detach(),window.__extractorGPT.selectionEngine.isActive=!1),window.dispatchEvent(new CustomEvent("extractorGPT:selectionDisabled"))},a=function(){try{if(window.__extractorGPT.isInitialized){console.log("[EXTRACTOR-GPT] Already initialized");return}if(document.getElementById("shadow-container-panda-extract")){console.log("[EXTRACTOR-GPT] Shadow DOM already exists, skipping initialization");return}if(console.log("[EXTRACTOR-GPT] Step 0: Injecting extraction CSS into main page..."),!document.querySelector("style[data-extractor-gpt]")){let g=document.createElement("style");g.setAttribute("data-extractor-gpt","true"),g.textContent=`
            /* Highlighter overlays */
            .panda-extract-cursor-move-overlay {
              position: absolute;
              pointer-events: none;
              border: 2px solid #4CAF50;
              background: rgba(76, 175, 80, 0.1);
              z-index: 900000002;
              transition: all 0.2s ease;
            }
            
            .panda-highlight-collection-element {
              outline: 2px solid #2196F3 !important;
              background: rgba(33, 150, 243, 0.1) !important;
              cursor: pointer !important;
            }
            
            .panda-extract-highlighted-item {
              outline: 2px solid #FF9800 !important;
              background: rgba(255, 152, 0, 0.1) !important;
              cursor: pointer !important;
            }
            
            /* Z-index layers */
            .panda-z-2 { z-index: 900000002; }
          `,document.head.appendChild(g)}console.log("[EXTRACTOR-GPT] Step 1: Creating shadow DOM...");let f=Pf.build({id:"shadow-container-panda-extract",styles:Ff});console.log("[EXTRACTOR-GPT] Shadow DOM created:",f),console.log("[EXTRACTOR-GPT] Shadow root:",f.shadowRoot),window.__extractorGPT.shadowRoot=f.shadowRoot,document.body.appendChild(f),console.log("[EXTRACTOR-GPT] Shadow container attached to body"),console.log("[EXTRACTOR-GPT] Step 2: Creating React mount point...");let u=document.createElement("div");u.id="app-container",window.__extractorGPT.shadowRoot.appendChild(u),console.log("[EXTRACTOR-GPT] App container created and added to shadow root"),console.log("[EXTRACTOR-GPT] Step 3: Initializing React..."),window.__extractorGPT.reactRoot=Cu.default.createRoot(u),console.log("[EXTRACTOR-GPT] React root created:",window.__extractorGPT.reactRoot),window.__extractorGPT.reactRoot.render(Hr.default.createElement(e)),console.log("[EXTRACTOR-GPT] React app rendered"),console.log("[EXTRACTOR-GPT] Step 4: Setting up extraction engine..."),window.__extractorGPT.extractionEngine=yn,console.log("[EXTRACTOR-GPT] Step 5: Initializing selection engine..."),window.__extractorGPT.selectionEngine=new Eu({onElementClick:g=>{console.log("[EXTRACTOR-GPT] Element clicked:",g),r(g)},onListSelected:g=>{console.log("[EXTRACTOR-GPT] List selected:",g),n(g)},onPause:()=>{console.log("[EXTRACTOR-GPT] Selection paused")},onResume:()=>{console.log("[EXTRACTOR-GPT] Selection resumed")},onModeChanged:g=>{console.log("[EXTRACTOR-GPT] Selection mode changed:",g),window.dispatchEvent(new CustomEvent("extractorGPT:modeChanged",{detail:g}))},onElementHovered:g=>{},config:{ignoreViewsWithClass:["panda-extract"]}}),console.log("[EXTRACTOR-GPT] Step 6: Setting up data management..."),window.__extractorGPT.cursorHighlighter=window.__extractorGPT.selectionEngine.cursorHighlighter,window.__extractorGPT.collectionHighlighter=window.__extractorGPT.selectionEngine.collectionHighlighter,window.__extractorGPT.resultsTable=new Jn,window.__extractorGPT.taskRunner=Zx,window.__extractorGPT.automationHandler=Tu,window.__extractorGPT.isInitialized=!0,console.log("[EXTRACTOR-GPT] Initialization complete")}catch(s){throw console.error("[EXTRACTOR-GPT] Error in initialize():",s),console.error("[EXTRACTOR-GPT] Stack trace:",s.stack),s}},i=function(){if(console.log("\u{1F680} ExtractorGPT: Activating..."),window.__extractorGPT.isInitialized){console.log("\u26A0\uFE0F ExtractorGPT: Already activated, showing UI..."),window.dispatchEvent(new CustomEvent("extractorGPT:show"));return}try{if(!document.querySelector("style[data-extractor-gpt]")){let d=document.createElement("style");d.setAttribute("data-extractor-gpt","true"),d.textContent=`
            /* Highlighter overlays */
            .panda-extract-cursor-move-overlay {
              position: absolute;
              pointer-events: none;
              border: 2px solid #4CAF50;
              background: rgba(76, 175, 80, 0.1);
              z-index: 900000002;
              transition: all 0.2s ease;
            }
            
            .panda-highlight-collection-element {
              outline: 2px solid #2196F3 !important;
              background: rgba(33, 150, 243, 0.1) !important;
              cursor: pointer !important;
            }
            
            .panda-extract-highlighted-item {
              outline: 2px solid #FF9800 !important;
              background: rgba(255, 152, 0, 0.1) !important;
              cursor: pointer !important;
            }
            
            /* Z-index layers */
            .panda-z-2 { z-index: 900000002; }
          `,document.head.appendChild(d)}let l=Pf.build({id:"shadow-container-panda-extract",styles:Ff});if(!l){console.error("\u274C ExtractorGPT: Failed to create shadow container");return}document.body.appendChild(l);let f=l.shadowRoot,u=document.createElement("div");u.id="extractor-app-root",f.appendChild(u),window.__extractorGPT.extractionEngine=yn,window.__extractorGPT.resultsTable=new Jn,window.__extractorGPT.selectionEngine=new Eu({shadowRoot:f,onElementClick:r,onListSelected:n,onPause:()=>{console.log("[EXTRACTOR-GPT] Selection paused")},onResume:()=>{console.log("[EXTRACTOR-GPT] Selection resumed")},onModeChanged:d=>{console.log("[EXTRACTOR-GPT] Selection mode changed:",d),window.dispatchEvent(new CustomEvent("extractorGPT:modeChanged",{detail:d}))},onElementHovered:d=>{},config:{ignoreViewsWithClass:["panda-extract"]}}),window.__extractorGPT.automationHandler=Tu,t(window.__extractorGPT.selectionEngine),Cu.default.createRoot(u).render(Hr.default.createElement(e,{selectionEngine:window.__extractorGPT.selectionEngine})),window.__extractorGPT.isInitialized=!0,window.__extractorGPT.isActive=!0,console.log("\u2705 ExtractorGPT: Activation complete!"),window.dispatchEvent(new CustomEvent("extractorGPT:show"))}catch(s){console.error("\u274C ExtractorGPT: Activation failed:",s),console.error("Stack trace:",s.stack)}},o=function(){window.__extractorGPT.isActive=!1,window.__extractorGPT.selectionEngine.detach(),window.__extractorGPT.selectionEngine.removeAllHighlights(),window.dispatchEvent(new CustomEvent("extractorGPT:hide")),console.log("[EXTRACTOR-GPT] Deactivated")};console.log("[EXTRACTOR-GPT] Initializing with React UI..."),window.addEventListener("error",s=>{var l,f,u;(f=(l=s.error)==null?void 0:l.message)!=null&&f.includes("Extension context invalidated")?(console.warn("[EXTRACTOR-GPT] Extension context invalidated - this is expected during development"),s.preventDefault()):(console.error("[EXTRACTOR-GPT] Uncaught error:",s.error),console.error("[EXTRACTOR-GPT] Error stack:",(u=s.error)==null?void 0:u.stack))}),window.addEventListener("unhandledrejection",s=>{var l,f,u,g;(f=(l=s.reason)==null?void 0:l.message)!=null&&f.includes("Extension context invalidated")||(g=(u=s.reason)==null?void 0:u.toString())!=null&&g.includes("Extension context invalidated")?(console.warn("[EXTRACTOR-GPT] Unhandled promise rejection: Extension context invalidated"),s.preventDefault()):console.error("[EXTRACTOR-GPT] Unhandled promise rejection:",s.reason)}),window.__extractorGPT={...window.__extractorGPT,isInitialized:!1,isActive:!1,shadowRoot:null,reactRoot:null,selectionEngine:null,extractionEngine:null,cursorHighlighter:null,collectionHighlighter:null,resultsTable:null,taskRunner:null,automationHandler:null},console.log("[EXTRACTOR-GPT] Setting up message listener..."),chrome.runtime.onMessage.addListener((s,l,f)=>{if(console.log("[CONTENT] Received message:",s),s.action==="ping")return f({status:"pong"}),!1;if(s.action==="page-details-highlight")return console.log("[CONTENT] Starting page details selection mode"),window.__extractorGPT.isInitialized||a(),window.__extractorGPT.isActive||(window.__extractorGPT.isActive=!0,window.__extractorGPT.selectionEngine.attach()),window.__extractorGPT.selectionEngine.startPageDetailsSelectMode(),window.__extractorGPT.selectionEngine.onElementClick=u=>{var g;console.log("[CONTENT] Page details element selected:",u),chrome.runtime.sendMessage({action:"page-details-selected",element:{selector:u.selector,text:u.text,type:u.type,tagName:(g=u.element)==null?void 0:g.tagName,attributes:u.attributes}})},f({success:!0}),!1;if(s.action==="page-details-selected-complete")return console.log("[CONTENT] Page details selection completed"),window.__extractorGPT.selectionEngine&&window.__extractorGPT.selectionEngine.stopPageDetailsSelectMode(),f({success:!0}),!1;if(s.action==="open")i(),f({status:"activated"});else if(s.action==="close")o(),f({status:"deactivated"});else if(s.action==="extract-page"){let g=window.__extractorGPT.extractionEngine.findSimpleExtractableElements().map(d=>({element:d,data:window.__extractorGPT.extractionEngine.extractAllData(d)}));window.__extractorGPT.resultsTable.insertExtractablesFromList(g),window.dispatchEvent(new CustomEvent("extractorGPT:dataUpdated",{detail:{results:window.__extractorGPT.resultsTable.rows,headers:window.__extractorGPT.resultsTable.headers}})),f({status:"extracted",count:g.length})}return!0}),console.log("[EXTRACTOR-GPT] Content script loaded and message listener ready")}catch(r){console.error("[EXTRACTOR-GPT] Error initializing with React UI:",r),console.error("[EXTRACTOR-GPT] Error stack:",r.stack),console.log("[EXTRACTOR-GPT] Setting up fallback message listener...");try{chrome.runtime.onMessage.addListener((n,a,i)=>(console.log("[EXTRACTOR-GPT] Fallback listener received message:",n),n.action==="ping"?i({status:"pong"}):n.action==="open"&&i({status:"error",error:"Initialization failed"}),!0)),console.log("[EXTRACTOR-GPT] Fallback message listener set up")}catch(n){console.error("[EXTRACTOR-GPT] Even fallback listener failed:",n)}}}})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

xlsx/xlsx.mjs:
  (*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com *)

xlsx/xlsx.mjs:
  (*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com *)
*/
})();
