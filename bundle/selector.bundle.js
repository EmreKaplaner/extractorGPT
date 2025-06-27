(function() {
(()=>{var nd=Object.create;var ua=Object.defineProperty;var od=Object.getOwnPropertyDescriptor;var id=Object.getOwnPropertyNames;var ld=Object.getPrototypeOf,ad=Object.prototype.hasOwnProperty;var bt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var sd=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of id(t))!ad.call(e,o)&&o!==r&&ua(e,o,{get:()=>t[o],enumerable:!(n=od(t,o))||n.enumerable});return e};var ca=(e,t,r)=>(r=e!=null?nd(ld(e)):{},sd(t||!e||!e.__esModule?ua(r,"default",{value:e,enumerable:!0}):r,e));var ka=bt(z=>{"use strict";var wr=Symbol.for("react.element"),ud=Symbol.for("react.portal"),cd=Symbol.for("react.fragment"),dd=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),fd=Symbol.for("react.provider"),gd=Symbol.for("react.context"),hd=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),md=Symbol.for("react.memo"),vd=Symbol.for("react.lazy"),da=Symbol.iterator;function yd(e){return e===null||typeof e!="object"?null:(e=da&&e[da]||e["@@iterator"],typeof e=="function"?e:null)}var ga={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ha=Object.assign,wa={};function Ut(e,t,r){this.props=e,this.context=t,this.refs=wa,this.updater=r||ga}Ut.prototype.isReactComponent={};Ut.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ut.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ma(){}ma.prototype=Ut.prototype;function Ho(e,t,r){this.props=e,this.context=t,this.refs=wa,this.updater=r||ga}var Fo=Ho.prototype=new ma;Fo.constructor=Ho;ha(Fo,Ut.prototype);Fo.isPureReactComponent=!0;var pa=Array.isArray,va=Object.prototype.hasOwnProperty,Vo={current:null},ya={key:!0,ref:!0,__self:!0,__source:!0};function xa(e,t,r){var n,o={},i=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)va.call(t,n)&&!ya.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(a===1)o.children=r;else if(1<a){for(var s=Array(a),d=0;d<a;d++)s[d]=arguments[d+2];o.children=s}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)o[n]===void 0&&(o[n]=a[n]);return{$$typeof:wr,type:e,key:i,ref:l,props:o,_owner:Vo.current}}function xd(e,t){return{$$typeof:wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bo(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function bd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var fa=/\/+/g;function jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bd(""+e.key):t.toString(36)}function pn(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case wr:case ud:l=!0}}if(l)return l=e,o=o(l),e=n===""?"."+jo(l,0):n,pa(o)?(r="",e!=null&&(r=e.replace(fa,"$&/")+"/"),pn(o,t,r,"",function(d){return d})):o!=null&&(Bo(o)&&(o=xd(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(fa,"$&/")+"/")+e)),t.push(o)),1;if(l=0,n=n===""?".":n+":",pa(e))for(var a=0;a<e.length;a++){i=e[a];var s=n+jo(i,a);l+=pn(i,t,r,s,o)}else if(s=yd(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=n+jo(i,a++),l+=pn(i,t,r,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function dn(e,t,r){if(e==null)return e;var n=[],o=0;return pn(e,n,"","",function(i){return t.call(r,i,o++)}),n}function kd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},fn={transition:null},Ed={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:fn,ReactCurrentOwner:Vo};function ba(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:dn,forEach:function(e,t,r){dn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return dn(e,function(){t++}),t},toArray:function(e){return dn(e,function(t){return t})||[]},only:function(e){if(!Bo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Ut;z.Fragment=cd;z.Profiler=pd;z.PureComponent=Ho;z.StrictMode=dd;z.Suspense=wd;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ed;z.act=ba;z.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ha({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Vo.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)va.call(t,s)&&!ya.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){a=Array(s);for(var d=0;d<s;d++)a[d]=arguments[d+2];n.children=a}return{$$typeof:wr,type:e.type,key:o,ref:i,props:n,_owner:l}};z.createContext=function(e){return e={$$typeof:gd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fd,_context:e},e.Consumer=e};z.createElement=xa;z.createFactory=function(e){var t=xa.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:hd,render:e}};z.isValidElement=Bo;z.lazy=function(e){return{$$typeof:vd,_payload:{_status:-1,_result:e},_init:kd}};z.memo=function(e,t){return{$$typeof:md,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=fn.transition;fn.transition={};try{e()}finally{fn.transition=t}};z.unstable_act=ba;z.useCallback=function(e,t){return ae.current.useCallback(e,t)};z.useContext=function(e){return ae.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};z.useEffect=function(e,t){return ae.current.useEffect(e,t)};z.useId=function(){return ae.current.useId()};z.useImperativeHandle=function(e,t,r){return ae.current.useImperativeHandle(e,t,r)};z.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return ae.current.useMemo(e,t)};z.useReducer=function(e,t,r){return ae.current.useReducer(e,t,r)};z.useRef=function(e){return ae.current.useRef(e)};z.useState=function(e){return ae.current.useState(e)};z.useSyncExternalStore=function(e,t,r){return ae.current.useSyncExternalStore(e,t,r)};z.useTransition=function(){return ae.current.useTransition()};z.version="18.3.1"});var Xo=bt((Ff,Ea)=>{"use strict";Ea.exports=ka()});var Aa=bt(A=>{"use strict";function Go(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,o=e[n];if(0<gn(o,t))e[n]=t,e[r]=o,r=n;else break e}}function ze(e){return e.length===0?null:e[0]}function wn(e){if(e.length===0)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length,i=o>>>1;n<i;){var l=2*(n+1)-1,a=e[l],s=l+1,d=e[s];if(0>gn(a,r))s<o&&0>gn(d,a)?(e[n]=d,e[s]=r,n=s):(e[n]=a,e[l]=r,n=l);else if(s<o&&0>gn(d,r))e[n]=d,e[s]=r,n=s;else break e}}return t}function gn(e,t){var r=e.sortIndex-t.sortIndex;return r!==0?r:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Sa=performance,A.unstable_now=function(){return Sa.now()}):($o=Date,Ca=$o.now(),A.unstable_now=function(){return $o.now()-Ca});var Sa,$o,Ca,Re=[],et=[],Sd=1,ke=null,te=3,mn=!1,kt=!1,vr=!1,Ta=typeof setTimeout=="function"?setTimeout:null,za=typeof clearTimeout=="function"?clearTimeout:null,Na=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Qo(e){for(var t=ze(et);t!==null;){if(t.callback===null)wn(et);else if(t.startTime<=e)wn(et),t.sortIndex=t.expirationTime,Go(Re,t);else break;t=ze(et)}}function Ko(e){if(vr=!1,Qo(e),!kt)if(ze(Re)!==null)kt=!0,qo(Zo);else{var t=ze(et);t!==null&&Jo(Ko,t.startTime-e)}}function Zo(e,t){kt=!1,vr&&(vr=!1,za(yr),yr=-1),mn=!0;var r=te;try{for(Qo(t),ke=ze(Re);ke!==null&&(!(ke.expirationTime>t)||e&&!Ia());){var n=ke.callback;if(typeof n=="function"){ke.callback=null,te=ke.priorityLevel;var o=n(ke.expirationTime<=t);t=A.unstable_now(),typeof o=="function"?ke.callback=o:ke===ze(Re)&&wn(Re),Qo(t)}else wn(Re);ke=ze(Re)}if(ke!==null)var i=!0;else{var l=ze(et);l!==null&&Jo(Ko,l.startTime-t),i=!1}return i}finally{ke=null,te=r,mn=!1}}var vn=!1,hn=null,yr=-1,La=5,Pa=-1;function Ia(){return!(A.unstable_now()-Pa<La)}function Wo(){if(hn!==null){var e=A.unstable_now();Pa=e;var t=!0;try{t=hn(!0,e)}finally{t?mr():(vn=!1,hn=null)}}else vn=!1}var mr;typeof Na=="function"?mr=function(){Na(Wo)}:typeof MessageChannel<"u"?(Yo=new MessageChannel,_a=Yo.port2,Yo.port1.onmessage=Wo,mr=function(){_a.postMessage(null)}):mr=function(){Ta(Wo,0)};var Yo,_a;function qo(e){hn=e,vn||(vn=!0,mr())}function Jo(e,t){yr=Ta(function(){e(A.unstable_now())},t)}A.unstable_IdlePriority=5;A.unstable_ImmediatePriority=1;A.unstable_LowPriority=4;A.unstable_NormalPriority=3;A.unstable_Profiling=null;A.unstable_UserBlockingPriority=2;A.unstable_cancelCallback=function(e){e.callback=null};A.unstable_continueExecution=function(){kt||mn||(kt=!0,qo(Zo))};A.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):La=0<e?Math.floor(1e3/e):5};A.unstable_getCurrentPriorityLevel=function(){return te};A.unstable_getFirstCallbackNode=function(){return ze(Re)};A.unstable_next=function(e){switch(te){case 1:case 2:case 3:var t=3;break;default:t=te}var r=te;te=t;try{return e()}finally{te=r}};A.unstable_pauseExecution=function(){};A.unstable_requestPaint=function(){};A.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=te;te=e;try{return t()}finally{te=r}};A.unstable_scheduleCallback=function(e,t,r){var n=A.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?n+r:n):r=n,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=r+o,e={id:Sd++,callback:t,priorityLevel:e,startTime:r,expirationTime:o,sortIndex:-1},r>n?(e.sortIndex=r,Go(et,e),ze(Re)===null&&e===ze(et)&&(vr?(za(yr),yr=-1):vr=!0,Jo(Ko,r-n))):(e.sortIndex=o,Go(Re,e),kt||mn||(kt=!0,qo(Zo))),e};A.unstable_shouldYield=Ia;A.unstable_wrapCallback=function(e){var t=te;return function(){var r=te;te=t;try{return e.apply(this,arguments)}finally{te=r}}}});var Ma=bt((Bf,Oa)=>{"use strict";Oa.exports=Aa()});var jc=bt(be=>{"use strict";var Cd=Xo(),ye=Ma();function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vs=new Set,Fr={};function Mt(e,t){ir(e,t),ir(e+"Capture",t)}function ir(e,t){for(Fr[e]=t,e=0;e<t.length;e++)Vs.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ki=Object.prototype.hasOwnProperty,Nd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Da={},Ra={};function _d(e){return ki.call(Ra,e)?!0:ki.call(Da,e)?!1:Nd.test(e)?Ra[e]=!0:(Da[e]=!0,!1)}function Td(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zd(e,t,r,n){if(t===null||typeof t>"u"||Td(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,r,n,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var gl=/[\-:]([a-z])/g;function hl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gl,hl);ee[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gl,hl);ee[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gl,hl);ee[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function wl(e,t,r,n){var o=ee.hasOwnProperty(t)?ee[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zd(t,r,o,n)&&(r=null),n||o===null?_d(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var qe=Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yn=Symbol.for("react.element"),Ft=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),ml=Symbol.for("react.strict_mode"),Ei=Symbol.for("react.profiler"),Bs=Symbol.for("react.provider"),Xs=Symbol.for("react.context"),vl=Symbol.for("react.forward_ref"),Si=Symbol.for("react.suspense"),Ci=Symbol.for("react.suspense_list"),yl=Symbol.for("react.memo"),rt=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var $s=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ua=Symbol.iterator;function xr(e){return e===null||typeof e!="object"?null:(e=Ua&&e[Ua]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,ei;function Tr(e){if(ei===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ei=t&&t[1]||""}return`
`+ei+e}var ti=!1;function ri(e,t){if(!e||ti)return"";ti=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=n.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ti=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Tr(e):""}function Ld(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=ri(e.type,!1),e;case 11:return e=ri(e.type.render,!1),e;case 1:return e=ri(e.type,!0),e;default:return""}}function Ni(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Ft:return"Portal";case Ei:return"Profiler";case ml:return"StrictMode";case Si:return"Suspense";case Ci:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xs:return(e.displayName||"Context")+".Consumer";case Bs:return(e._context.displayName||"Context")+".Provider";case vl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yl:return t=e.displayName||null,t!==null?t:Ni(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return Ni(e(t))}catch{}}return null}function Pd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ni(t);case 8:return t===ml?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Id(e){var t=Ws(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){n=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xn(e){e._valueTracker||(e._valueTracker=Id(e))}function Ys(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Ws(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _i(e,t){var r=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ja(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=wt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gs(e,t){t=t.checked,t!=null&&wl(e,"checked",t,!1)}function Ti(e,t){Gs(e,t);var r=wt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zi(e,t.type,r):t.hasOwnProperty("defaultValue")&&zi(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ha(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function zi(e,t,r){(t!=="number"||Gn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var zr=Array.isArray;function Jt(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+wt(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fa(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(x(92));if(zr(r)){if(1<r.length)throw Error(x(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:wt(r)}}function Qs(e,t){var r=wt(t.value),n=wt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Va(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ks(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ks(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bn,Zs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bn=bn||document.createElement("div"),bn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ad=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){Ad.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ir[t]=Ir[e]})});function qs(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+t).trim():t+"px"}function Js(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=qs(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var Od=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ii(e,t){if(t){if(Od[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function Ai(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mi=null,er=null,tr=null;function Ba(e){if(e=an(e)){if(typeof Mi!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Eo(t),Mi(e.stateNode,e.type,t))}}function eu(e){er?tr?tr.push(e):tr=[e]:er=e}function tu(){if(er){var e=er,t=tr;if(tr=er=null,Ba(e),t)for(e=0;e<t.length;e++)Ba(t[e])}}function ru(e,t){return e(t)}function nu(){}var ni=!1;function ou(e,t,r){if(ni)return e(t,r);ni=!0;try{return ru(e,t,r)}finally{ni=!1,(er!==null||tr!==null)&&(nu(),tu())}}function Br(e,t){var r=e.stateNode;if(r===null)return null;var n=Eo(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(x(231,t,typeof r));return r}var Di=!1;if(Ge)try{jt={},Object.defineProperty(jt,"passive",{get:function(){Di=!0}}),window.addEventListener("test",jt,jt),window.removeEventListener("test",jt,jt)}catch{Di=!1}var jt;function Md(e,t,r,n,o,i,l,a,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(h){this.onError(h)}}var Ar=!1,Qn=null,Kn=!1,Ri=null,Dd={onError:function(e){Ar=!0,Qn=e}};function Rd(e,t,r,n,o,i,l,a,s){Ar=!1,Qn=null,Md.apply(Dd,arguments)}function Ud(e,t,r,n,o,i,l,a,s){if(Rd.apply(this,arguments),Ar){if(Ar){var d=Qn;Ar=!1,Qn=null}else throw Error(x(198));Kn||(Kn=!0,Ri=d)}}function Dt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function iu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xa(e){if(Dt(e)!==e)throw Error(x(188))}function jd(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Xa(o),e;if(i===n)return Xa(o),t;i=i.sibling}throw Error(x(188))}if(r.return!==n.return)r=o,n=i;else{for(var l=!1,a=o.child;a;){if(a===r){l=!0,r=o,n=i;break}if(a===n){l=!0,n=o,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,n=o;break}if(a===n){l=!0,n=i,r=o;break}a=a.sibling}if(!l)throw Error(x(189))}}if(r.alternate!==n)throw Error(x(190))}if(r.tag!==3)throw Error(x(188));return r.stateNode.current===r?e:t}function lu(e){return e=jd(e),e!==null?au(e):null}function au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=au(e);if(t!==null)return t;e=e.sibling}return null}var su=ye.unstable_scheduleCallback,$a=ye.unstable_cancelCallback,Hd=ye.unstable_shouldYield,Fd=ye.unstable_requestPaint,$=ye.unstable_now,Vd=ye.unstable_getCurrentPriorityLevel,bl=ye.unstable_ImmediatePriority,uu=ye.unstable_UserBlockingPriority,Zn=ye.unstable_NormalPriority,Bd=ye.unstable_LowPriority,cu=ye.unstable_IdlePriority,yo=null,Fe=null;function Xd(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Yd,$d=Math.log,Wd=Math.LN2;function Yd(e){return e>>>=0,e===0?32:31-($d(e)/Wd|0)|0}var kn=64,En=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qn(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,l=r&268435455;if(l!==0){var a=l&~o;a!==0?n=Lr(a):(i&=l,i!==0&&(n=Lr(i)))}else l=r&~o,l!==0?n=Lr(l):i!==0&&(n=Lr(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Oe(t),o=1<<r,n|=e[r],t&=~o;return n}function Gd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Oe(i),a=1<<l,s=o[l];s===-1?(!(a&r)||a&n)&&(o[l]=Gd(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function du(){var e=kn;return kn<<=1,!(kn&4194240)&&(kn=64),e}function oi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function on(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=r}function Kd(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Oe(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function kl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Oe(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var I=0;function pu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fu,El,gu,hu,wu,ji=!1,Sn=[],st=null,ut=null,ct=null,Xr=new Map,$r=new Map,ot=[],Zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wa(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function br(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=an(t),t!==null&&El(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function qd(e,t,r,n,o){switch(t){case"focusin":return st=br(st,e,t,r,n,o),!0;case"dragenter":return ut=br(ut,e,t,r,n,o),!0;case"mouseover":return ct=br(ct,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return Xr.set(i,br(Xr.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,$r.set(i,br($r.get(i)||null,e,t,r,n,o)),!0}return!1}function mu(e){var t=Ct(e.target);if(t!==null){var r=Dt(t);if(r!==null){if(t=r.tag,t===13){if(t=iu(r),t!==null){e.blockedOn=t,wu(e.priority,function(){gu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Un(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Hi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Oi=n,r.target.dispatchEvent(n),Oi=null}else return t=an(r),t!==null&&El(t),e.blockedOn=r,!1;t.shift()}return!0}function Ya(e,t,r){Un(e)&&r.delete(t)}function Jd(){ji=!1,st!==null&&Un(st)&&(st=null),ut!==null&&Un(ut)&&(ut=null),ct!==null&&Un(ct)&&(ct=null),Xr.forEach(Ya),$r.forEach(Ya)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,ji||(ji=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Jd)))}function Wr(e){function t(o){return kr(o,e)}if(0<Sn.length){kr(Sn[0],e);for(var r=1;r<Sn.length;r++){var n=Sn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(st!==null&&kr(st,e),ut!==null&&kr(ut,e),ct!==null&&kr(ct,e),Xr.forEach(t),$r.forEach(t),r=0;r<ot.length;r++)n=ot[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<ot.length&&(r=ot[0],r.blockedOn===null);)mu(r),r.blockedOn===null&&ot.shift()}var rr=qe.ReactCurrentBatchConfig,Jn=!0;function ep(e,t,r,n){var o=I,i=rr.transition;rr.transition=null;try{I=1,Sl(e,t,r,n)}finally{I=o,rr.transition=i}}function tp(e,t,r,n){var o=I,i=rr.transition;rr.transition=null;try{I=4,Sl(e,t,r,n)}finally{I=o,rr.transition=i}}function Sl(e,t,r,n){if(Jn){var o=Hi(e,t,r,n);if(o===null)di(e,t,n,eo,r),Wa(e,n);else if(qd(o,e,t,r,n))n.stopPropagation();else if(Wa(e,n),t&4&&-1<Zd.indexOf(e)){for(;o!==null;){var i=an(o);if(i!==null&&fu(i),i=Hi(e,t,r,n),i===null&&di(e,t,n,eo,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else di(e,t,n,null,r)}}var eo=null;function Hi(e,t,r,n){if(eo=null,e=xl(n),e=Ct(e),e!==null)if(t=Dt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=iu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return eo=e,null}function vu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vd()){case bl:return 1;case uu:return 4;case Zn:case Bd:return 16;case cu:return 536870912;default:return 16}default:return 16}}var lt=null,Cl=null,jn=null;function yu(){if(jn)return jn;var e,t=Cl,r=t.length,n,o="value"in lt?lt.value:lt.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===o[i-n];n++);return jn=o.slice(e,1<n?1-n:void 0)}function Hn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function Ga(){return!1}function xe(e){function t(r,n,o,i,l){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Cn:Ga,this.isPropagationStopped=Ga,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=xe(pr),ln=V({},pr,{view:0,detail:0}),rp=xe(ln),ii,li,Er,xo=V({},ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(ii=e.screenX-Er.screenX,li=e.screenY-Er.screenY):li=ii=0,Er=e),ii)},movementY:function(e){return"movementY"in e?e.movementY:li}}),Qa=xe(xo),np=V({},xo,{dataTransfer:0}),op=xe(np),ip=V({},ln,{relatedTarget:0}),ai=xe(ip),lp=V({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),ap=xe(lp),sp=V({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),up=xe(sp),cp=V({},pr,{data:0}),Ka=xe(cp),dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fp[e])?!!t[e]:!1}function _l(){return gp}var hp=V({},ln,{key:function(e){if(e.key){var t=dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_l,charCode:function(e){return e.type==="keypress"?Hn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wp=xe(hp),mp=V({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Za=xe(mp),vp=V({},ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_l}),yp=xe(vp),xp=V({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bp=xe(xp),kp=V({},xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ep=xe(kp),Sp=[9,13,27,32],Tl=Ge&&"CompositionEvent"in window,Or=null;Ge&&"documentMode"in document&&(Or=document.documentMode);var Cp=Ge&&"TextEvent"in window&&!Or,xu=Ge&&(!Tl||Or&&8<Or&&11>=Or),qa=" ",Ja=!1;function bu(e,t){switch(e){case"keyup":return Sp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bt=!1;function Np(e,t){switch(e){case"compositionend":return ku(t);case"keypress":return t.which!==32?null:(Ja=!0,qa);case"textInput":return e=t.data,e===qa&&Ja?null:e;default:return null}}function _p(e,t){if(Bt)return e==="compositionend"||!Tl&&bu(e,t)?(e=yu(),jn=Cl=lt=null,Bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xu&&t.locale!=="ko"?null:t.data;default:return null}}var Tp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tp[e.type]:t==="textarea"}function Eu(e,t,r,n){eu(n),t=to(t,"onChange"),0<t.length&&(r=new Nl("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Mr=null,Yr=null;function zp(e){Ou(e,0)}function bo(e){var t=Wt(e);if(Ys(t))return e}function Lp(e,t){if(e==="change")return t}var Su=!1;Ge&&(Ge?(_n="oninput"in document,_n||(si=document.createElement("div"),si.setAttribute("oninput","return;"),_n=typeof si.oninput=="function"),Nn=_n):Nn=!1,Su=Nn&&(!document.documentMode||9<document.documentMode));var Nn,_n,si;function ts(){Mr&&(Mr.detachEvent("onpropertychange",Cu),Yr=Mr=null)}function Cu(e){if(e.propertyName==="value"&&bo(Yr)){var t=[];Eu(t,Yr,e,xl(e)),ou(zp,t)}}function Pp(e,t,r){e==="focusin"?(ts(),Mr=t,Yr=r,Mr.attachEvent("onpropertychange",Cu)):e==="focusout"&&ts()}function Ip(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bo(Yr)}function Ap(e,t){if(e==="click")return bo(t)}function Op(e,t){if(e==="input"||e==="change")return bo(t)}function Mp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Mp;function Gr(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!ki.call(t,o)||!De(e[o],t[o]))return!1}return!0}function rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ns(e,t){var r=rs(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=rs(r)}}function Nu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _u(){for(var e=window,t=Gn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Gn(e.document)}return t}function zl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dp(e){var t=_u(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Nu(r.ownerDocument.documentElement,r)){if(n!==null&&zl(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=ns(r,i);var l=ns(r,n);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rp=Ge&&"documentMode"in document&&11>=document.documentMode,Xt=null,Fi=null,Dr=null,Vi=!1;function os(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Vi||Xt==null||Xt!==Gn(n)||(n=Xt,"selectionStart"in n&&zl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Dr&&Gr(Dr,n)||(Dr=n,n=to(Fi,"onSelect"),0<n.length&&(t=new Nl("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Xt)))}function Tn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var $t={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},ui={},Tu={};Ge&&(Tu=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function ko(e){if(ui[e])return ui[e];if(!$t[e])return e;var t=$t[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Tu)return ui[e]=t[r];return e}var zu=ko("animationend"),Lu=ko("animationiteration"),Pu=ko("animationstart"),Iu=ko("transitionend"),Au=new Map,is="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){Au.set(e,t),Mt(t,[e])}for(zn=0;zn<is.length;zn++)Ln=is[zn],ls=Ln.toLowerCase(),as=Ln[0].toUpperCase()+Ln.slice(1),vt(ls,"on"+as);var Ln,ls,as,zn;vt(zu,"onAnimationEnd");vt(Lu,"onAnimationIteration");vt(Pu,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(Iu,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Up=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function ss(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Ud(n,t,void 0,e),e.currentTarget=null}function Ou(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var l=n.length-1;0<=l;l--){var a=n[l],s=a.instance,d=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;ss(o,a,d),i=s}else for(l=0;l<n.length;l++){if(a=n[l],s=a.instance,d=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;ss(o,a,d),i=s}}}if(Kn)throw e=Ri,Kn=!1,Ri=null,e}function R(e,t){var r=t[Yi];r===void 0&&(r=t[Yi]=new Set);var n=e+"__bubble";r.has(n)||(Mu(t,e,2,!1),r.add(n))}function ci(e,t,r){var n=0;t&&(n|=4),Mu(r,e,n,t)}var Pn="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[Pn]){e[Pn]=!0,Vs.forEach(function(r){r!=="selectionchange"&&(Up.has(r)||ci(r,!1,e),ci(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pn]||(t[Pn]=!0,ci("selectionchange",!1,t))}}function Mu(e,t,r,n){switch(vu(t)){case 1:var o=ep;break;case 4:o=tp;break;default:o=Sl}r=o.bind(null,t,r,e),o=void 0,!Di||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function di(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var a=n.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=n.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Ct(a),l===null)return;if(s=l.tag,s===5||s===6){n=i=l;continue e}a=a.parentNode}}n=n.return}ou(function(){var d=i,h=xl(r),w=[];e:{var g=Au.get(e);if(g!==void 0){var m=Nl,y=e;switch(e){case"keypress":if(Hn(r)===0)break e;case"keydown":case"keyup":m=wp;break;case"focusin":y="focus",m=ai;break;case"focusout":y="blur",m=ai;break;case"beforeblur":case"afterblur":m=ai;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=yp;break;case zu:case Lu:case Pu:m=ap;break;case Iu:m=bp;break;case"scroll":m=rp;break;case"wheel":m=Ep;break;case"copy":case"cut":case"paste":m=up;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Za}var b=(t&4)!==0,P=!b&&e==="scroll",p=b?g!==null?g+"Capture":null:g;b=[];for(var u=d,f;u!==null;){f=u;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=Br(u,p),v!=null&&b.push(Kr(u,v,f)))),P)break;u=u.return}0<b.length&&(g=new m(g,y,null,r,h),w.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&r!==Oi&&(y=r.relatedTarget||r.fromElement)&&(Ct(y)||y[Qe]))break e;if((m||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,m?(y=r.relatedTarget||r.toElement,m=d,y=y?Ct(y):null,y!==null&&(P=Dt(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=d),m!==y)){if(b=Qa,v="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(b=Za,v="onPointerLeave",p="onPointerEnter",u="pointer"),P=m==null?g:Wt(m),f=y==null?g:Wt(y),g=new b(v,u+"leave",m,r,h),g.target=P,g.relatedTarget=f,v=null,Ct(h)===d&&(b=new b(p,u+"enter",y,r,h),b.target=f,b.relatedTarget=P,v=b),P=v,m&&y)t:{for(b=m,p=y,u=0,f=b;f;f=Ht(f))u++;for(f=0,v=p;v;v=Ht(v))f++;for(;0<u-f;)b=Ht(b),u--;for(;0<f-u;)p=Ht(p),f--;for(;u--;){if(b===p||p!==null&&b===p.alternate)break t;b=Ht(b),p=Ht(p)}b=null}else b=null;m!==null&&us(w,g,m,b,!1),y!==null&&P!==null&&us(w,P,y,b,!0)}}e:{if(g=d?Wt(d):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var k=Lp;else if(es(g))if(Su)k=Op;else{k=Ip;var S=Pp}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Ap);if(k&&(k=k(e,d))){Eu(w,k,r,h);break e}S&&S(e,g,d),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&zi(g,"number",g.value)}switch(S=d?Wt(d):window,e){case"focusin":(es(S)||S.contentEditable==="true")&&(Xt=S,Fi=d,Dr=null);break;case"focusout":Dr=Fi=Xt=null;break;case"mousedown":Vi=!0;break;case"contextmenu":case"mouseup":case"dragend":Vi=!1,os(w,r,h);break;case"selectionchange":if(Rp)break;case"keydown":case"keyup":os(w,r,h)}var N;if(Tl)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Bt?bu(e,r)&&(_="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(_="onCompositionStart");_&&(xu&&r.locale!=="ko"&&(Bt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Bt&&(N=yu()):(lt=h,Cl="value"in lt?lt.value:lt.textContent,Bt=!0)),S=to(d,_),0<S.length&&(_=new Ka(_,e,null,r,h),w.push({event:_,listeners:S}),N?_.data=N:(N=ku(r),N!==null&&(_.data=N)))),(N=Cp?Np(e,r):_p(e,r))&&(d=to(d,"onBeforeInput"),0<d.length&&(h=new Ka("onBeforeInput","beforeinput",null,r,h),w.push({event:h,listeners:d}),h.data=N))}Ou(w,t)})}function Kr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function to(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Br(e,r),i!=null&&n.unshift(Kr(e,i,o)),i=Br(e,t),i!=null&&n.push(Kr(e,i,o))),e=e.return}return n}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function us(e,t,r,n,o){for(var i=t._reactName,l=[];r!==null&&r!==n;){var a=r,s=a.alternate,d=a.stateNode;if(s!==null&&s===n)break;a.tag===5&&d!==null&&(a=d,o?(s=Br(r,i),s!=null&&l.unshift(Kr(r,s,a))):o||(s=Br(r,i),s!=null&&l.push(Kr(r,s,a)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var jp=/\r\n?/g,Hp=/\u0000|\uFFFD/g;function cs(e){return(typeof e=="string"?e:""+e).replace(jp,`
`).replace(Hp,"")}function In(e,t,r){if(t=cs(t),cs(e)!==t&&r)throw Error(x(425))}function ro(){}var Bi=null,Xi=null;function $i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wi=typeof setTimeout=="function"?setTimeout:void 0,Fp=typeof clearTimeout=="function"?clearTimeout:void 0,ds=typeof Promise=="function"?Promise:void 0,Vp=typeof queueMicrotask=="function"?queueMicrotask:typeof ds<"u"?function(e){return ds.resolve(null).then(e).catch(Bp)}:Wi;function Bp(e){setTimeout(function(){throw e})}function pi(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Wr(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Wr(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ps(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),He="__reactFiber$"+fr,Zr="__reactProps$"+fr,Qe="__reactContainer$"+fr,Yi="__reactEvents$"+fr,Xp="__reactListeners$"+fr,$p="__reactHandles$"+fr;function Ct(e){var t=e[He];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Qe]||r[He]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ps(e);e!==null;){if(r=e[He])return r;e=ps(e)}return t}e=r,r=e.parentNode}return null}function an(e){return e=e[He]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Eo(e){return e[Zr]||null}var Gi=[],Yt=-1;function yt(e){return{current:e}}function U(e){0>Yt||(e.current=Gi[Yt],Gi[Yt]=null,Yt--)}function O(e,t){Yt++,Gi[Yt]=e.current,e.current=t}var mt={},ie=yt(mt),fe=yt(!1),Lt=mt;function lr(e,t){var r=e.type.contextTypes;if(!r)return mt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ge(e){return e=e.childContextTypes,e!=null}function no(){U(fe),U(ie)}function fs(e,t,r){if(ie.current!==mt)throw Error(x(168));O(ie,t),O(fe,r)}function Du(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(x(108,Pd(e)||"Unknown",o));return V({},r,n)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,Lt=ie.current,O(ie,e),O(fe,fe.current),!0}function gs(e,t,r){var n=e.stateNode;if(!n)throw Error(x(169));r?(e=Du(e,t,Lt),n.__reactInternalMemoizedMergedChildContext=e,U(fe),U(ie),O(ie,e)):U(fe),O(fe,r)}var Xe=null,So=!1,fi=!1;function Ru(e){Xe===null?Xe=[e]:Xe.push(e)}function Wp(e){So=!0,Ru(e)}function xt(){if(!fi&&Xe!==null){fi=!0;var e=0,t=I;try{var r=Xe;for(I=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Xe=null,So=!1}catch(o){throw Xe!==null&&(Xe=Xe.slice(e+1)),su(bl,xt),o}finally{I=t,fi=!1}}return null}var Gt=[],Qt=0,io=null,lo=0,Ee=[],Se=0,Pt=null,$e=1,We="";function Et(e,t){Gt[Qt++]=lo,Gt[Qt++]=io,io=e,lo=t}function Uu(e,t,r){Ee[Se++]=$e,Ee[Se++]=We,Ee[Se++]=Pt,Pt=e;var n=$e;e=We;var o=32-Oe(n)-1;n&=~(1<<o),r+=1;var i=32-Oe(t)+o;if(30<i){var l=o-o%5;i=(n&(1<<l)-1).toString(32),n>>=l,o-=l,$e=1<<32-Oe(t)+o|r<<o|n,We=i+e}else $e=1<<i|r<<o|n,We=e}function Ll(e){e.return!==null&&(Et(e,1),Uu(e,1,0))}function Pl(e){for(;e===io;)io=Gt[--Qt],Gt[Qt]=null,lo=Gt[--Qt],Gt[Qt]=null;for(;e===Pt;)Pt=Ee[--Se],Ee[Se]=null,We=Ee[--Se],Ee[Se]=null,$e=Ee[--Se],Ee[Se]=null}var ve=null,me=null,j=!1,Ae=null;function ju(e,t){var r=Ce(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function hs(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,me=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Pt!==null?{id:$e,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ce(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ve=e,me=null,!0):!1;default:return!1}}function Qi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ki(e){if(j){var t=me;if(t){var r=t;if(!hs(e,t)){if(Qi(e))throw Error(x(418));t=dt(r.nextSibling);var n=ve;t&&hs(e,t)?ju(n,r):(e.flags=e.flags&-4097|2,j=!1,ve=e)}}else{if(Qi(e))throw Error(x(418));e.flags=e.flags&-4097|2,j=!1,ve=e}}}function ws(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function An(e){if(e!==ve)return!1;if(!j)return ws(e),j=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$i(e.type,e.memoizedProps)),t&&(t=me)){if(Qi(e))throw Hu(),Error(x(418));for(;t;)ju(e,t),t=dt(t.nextSibling)}if(ws(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){me=dt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}me=null}}else me=ve?dt(e.stateNode.nextSibling):null;return!0}function Hu(){for(var e=me;e;)e=dt(e.nextSibling)}function ar(){me=ve=null,j=!1}function Il(e){Ae===null?Ae=[e]:Ae.push(e)}var Yp=qe.ReactCurrentBatchConfig;function Sr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(x(309));var n=r.stateNode}if(!n)throw Error(x(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!r._owner)throw Error(x(290,e))}return e}function On(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ms(e){var t=e._init;return t(e._payload)}function Fu(e){function t(p,u){if(e){var f=p.deletions;f===null?(p.deletions=[u],p.flags|=16):f.push(u)}}function r(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function n(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function o(p,u){return p=ht(p,u),p.index=0,p.sibling=null,p}function i(p,u,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<u?(p.flags|=2,u):f):(p.flags|=2,u)):(p.flags|=1048576,u)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,u,f,v){return u===null||u.tag!==6?(u=xi(f,p.mode,v),u.return=p,u):(u=o(u,f),u.return=p,u)}function s(p,u,f,v){var k=f.type;return k===Vt?h(p,u,f.props.children,v,f.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===rt&&ms(k)===u.type)?(v=o(u,f.props),v.ref=Sr(p,u,f),v.return=p,v):(v=Yn(f.type,f.key,f.props,null,p.mode,v),v.ref=Sr(p,u,f),v.return=p,v)}function d(p,u,f,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=bi(f,p.mode,v),u.return=p,u):(u=o(u,f.children||[]),u.return=p,u)}function h(p,u,f,v,k){return u===null||u.tag!==7?(u=zt(f,p.mode,v,k),u.return=p,u):(u=o(u,f),u.return=p,u)}function w(p,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=xi(""+u,p.mode,f),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case yn:return f=Yn(u.type,u.key,u.props,null,p.mode,f),f.ref=Sr(p,null,u),f.return=p,f;case Ft:return u=bi(u,p.mode,f),u.return=p,u;case rt:var v=u._init;return w(p,v(u._payload),f)}if(zr(u)||xr(u))return u=zt(u,p.mode,f,null),u.return=p,u;On(p,u)}return null}function g(p,u,f,v){var k=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:a(p,u,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case yn:return f.key===k?s(p,u,f,v):null;case Ft:return f.key===k?d(p,u,f,v):null;case rt:return k=f._init,g(p,u,k(f._payload),v)}if(zr(f)||xr(f))return k!==null?null:h(p,u,f,v,null);On(p,f)}return null}function m(p,u,f,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,a(u,p,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yn:return p=p.get(v.key===null?f:v.key)||null,s(u,p,v,k);case Ft:return p=p.get(v.key===null?f:v.key)||null,d(u,p,v,k);case rt:var S=v._init;return m(p,u,f,S(v._payload),k)}if(zr(v)||xr(v))return p=p.get(f)||null,h(u,p,v,k,null);On(u,v)}return null}function y(p,u,f,v){for(var k=null,S=null,N=u,_=u=0,X=null;N!==null&&_<f.length;_++){N.index>_?(X=N,N=null):X=N.sibling;var T=g(p,N,f[_],v);if(T===null){N===null&&(N=X);break}e&&N&&T.alternate===null&&t(p,N),u=i(T,u,_),S===null?k=T:S.sibling=T,S=T,N=X}if(_===f.length)return r(p,N),j&&Et(p,_),k;if(N===null){for(;_<f.length;_++)N=w(p,f[_],v),N!==null&&(u=i(N,u,_),S===null?k=N:S.sibling=N,S=N);return j&&Et(p,_),k}for(N=n(p,N);_<f.length;_++)X=m(N,p,_,f[_],v),X!==null&&(e&&X.alternate!==null&&N.delete(X.key===null?_:X.key),u=i(X,u,_),S===null?k=X:S.sibling=X,S=X);return e&&N.forEach(function(D){return t(p,D)}),j&&Et(p,_),k}function b(p,u,f,v){var k=xr(f);if(typeof k!="function")throw Error(x(150));if(f=k.call(f),f==null)throw Error(x(151));for(var S=k=null,N=u,_=u=0,X=null,T=f.next();N!==null&&!T.done;_++,T=f.next()){N.index>_?(X=N,N=null):X=N.sibling;var D=g(p,N,T.value,v);if(D===null){N===null&&(N=X);break}e&&N&&D.alternate===null&&t(p,N),u=i(D,u,_),S===null?k=D:S.sibling=D,S=D,N=X}if(T.done)return r(p,N),j&&Et(p,_),k;if(N===null){for(;!T.done;_++,T=f.next())T=w(p,T.value,v),T!==null&&(u=i(T,u,_),S===null?k=T:S.sibling=T,S=T);return j&&Et(p,_),k}for(N=n(p,N);!T.done;_++,T=f.next())T=m(N,p,_,T.value,v),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?_:T.key),u=i(T,u,_),S===null?k=T:S.sibling=T,S=T);return e&&N.forEach(function(le){return t(p,le)}),j&&Et(p,_),k}function P(p,u,f,v){if(typeof f=="object"&&f!==null&&f.type===Vt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case yn:e:{for(var k=f.key,S=u;S!==null;){if(S.key===k){if(k=f.type,k===Vt){if(S.tag===7){r(p,S.sibling),u=o(S,f.props.children),u.return=p,p=u;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===rt&&ms(k)===S.type){r(p,S.sibling),u=o(S,f.props),u.ref=Sr(p,S,f),u.return=p,p=u;break e}r(p,S);break}else t(p,S);S=S.sibling}f.type===Vt?(u=zt(f.props.children,p.mode,v,f.key),u.return=p,p=u):(v=Yn(f.type,f.key,f.props,null,p.mode,v),v.ref=Sr(p,u,f),v.return=p,p=v)}return l(p);case Ft:e:{for(S=f.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){r(p,u.sibling),u=o(u,f.children||[]),u.return=p,p=u;break e}else{r(p,u);break}else t(p,u);u=u.sibling}u=bi(f,p.mode,v),u.return=p,p=u}return l(p);case rt:return S=f._init,P(p,u,S(f._payload),v)}if(zr(f))return y(p,u,f,v);if(xr(f))return b(p,u,f,v);On(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(r(p,u.sibling),u=o(u,f),u.return=p,p=u):(r(p,u),u=xi(f,p.mode,v),u.return=p,p=u),l(p)):r(p,u)}return P}var sr=Fu(!0),Vu=Fu(!1),ao=yt(null),so=null,Kt=null,Al=null;function Ol(){Al=Kt=so=null}function Ml(e){var t=ao.current;U(ao),e._currentValue=t}function Zi(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function nr(e,t){so=e,Al=Kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Al!==e)if(e={context:e,memoizedValue:t,next:null},Kt===null){if(so===null)throw Error(x(308));Kt=e,so.dependencies={lanes:0,firstContext:e}}else Kt=Kt.next=e;return t}var Nt=null;function Dl(e){Nt===null?Nt=[e]:Nt.push(e)}function Bu(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Dl(t)):(r.next=o.next,o.next=r),t.interleaved=r,Ke(e,n)}function Ke(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var nt=!1;function Rl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,L&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Ke(e,r)}return o=n.interleaved,o===null?(t.next=t,Dl(n)):(t.next=o.next,o.next=t),n.interleaved=t,Ke(e,r)}function Fn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,kl(e,r)}}function vs(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function uo(e,t,r,n){var o=e.updateQueue;nt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,d=s.next;s.next=null,l===null?i=d:l.next=d,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=s))}if(i!==null){var w=o.baseState;l=0,h=d=s=null,a=i;do{var g=a.lane,m=a.eventTime;if((n&g)===g){h!==null&&(h=h.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,b=a;switch(g=t,m=r,b.tag){case 1:if(y=b.payload,typeof y=="function"){w=y.call(m,w,g);break e}w=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,g=typeof y=="function"?y.call(m,w,g):y,g==null)break e;w=V({},w,g);break e;case 2:nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else m={eventTime:m,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=m,s=w):h=h.next=m,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(h===null&&(s=w),o.baseState=s,o.firstBaseUpdate=d,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);At|=l,e.lanes=l,e.memoizedState=w}}function ys(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(x(191,o));o.call(n)}}}var sn={},Ve=yt(sn),qr=yt(sn),Jr=yt(sn);function _t(e){if(e===sn)throw Error(x(174));return e}function Ul(e,t){switch(O(Jr,t),O(qr,e),O(Ve,sn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pi(t,e)}U(Ve),O(Ve,t)}function ur(){U(Ve),U(qr),U(Jr)}function $u(e){_t(Jr.current);var t=_t(Ve.current),r=Pi(t,e.type);t!==r&&(O(qr,e),O(Ve,r))}function jl(e){qr.current===e&&(U(Ve),U(qr))}var H=yt(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gi=[];function Hl(){for(var e=0;e<gi.length;e++)gi[e]._workInProgressVersionPrimary=null;gi.length=0}var Vn=qe.ReactCurrentDispatcher,hi=qe.ReactCurrentBatchConfig,It=0,F=null,Y=null,Q=null,po=!1,Rr=!1,en=0,Gp=0;function re(){throw Error(x(321))}function Fl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!De(e[r],t[r]))return!1;return!0}function Vl(e,t,r,n,o,i){if(It=i,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vn.current=e===null||e.memoizedState===null?qp:Jp,e=r(n,o),Rr){i=0;do{if(Rr=!1,en=0,25<=i)throw Error(x(301));i+=1,Q=Y=null,t.updateQueue=null,Vn.current=ef,e=r(n,o)}while(Rr)}if(Vn.current=fo,t=Y!==null&&Y.next!==null,It=0,Q=Y=F=null,po=!1,t)throw Error(x(300));return e}function Bl(){var e=en!==0;return en=0,e}function je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Q===null?F.memoizedState=Q=e:Q=Q.next=e,Q}function Te(){if(Y===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Q===null?F.memoizedState:Q.next;if(t!==null)Q=t,Y=e;else{if(e===null)throw Error(x(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Q===null?F.memoizedState=Q=e:Q=Q.next=e}return Q}function tn(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=Te(),r=t.queue;if(r===null)throw Error(x(311));r.lastRenderedReducer=e;var n=Y,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var a=l=null,s=null,d=i;do{var h=d.lane;if((It&h)===h)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var w={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(a=s=w,l=n):s=s.next=w,F.lanes|=h,At|=h}d=d.next}while(d!==null&&d!==i);s===null?l=n:s.next=a,De(n,t.memoizedState)||(pe=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=s,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,F.lanes|=i,At|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function mi(e){var t=Te(),r=t.queue;if(r===null)throw Error(x(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);De(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function Wu(){}function Yu(e,t){var r=F,n=Te(),o=t(),i=!De(n.memoizedState,o);if(i&&(n.memoizedState=o,pe=!0),n=n.queue,Xl(Ku.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||Q!==null&&Q.memoizedState.tag&1){if(r.flags|=2048,rn(9,Qu.bind(null,r,n,o,t),void 0,null),K===null)throw Error(x(349));It&30||Gu(r,t,o)}return o}function Gu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Qu(e,t,r,n){t.value=r,t.getSnapshot=n,Zu(t)&&qu(e)}function Ku(e,t,r){return r(function(){Zu(t)&&qu(e)})}function Zu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!De(e,r)}catch{return!0}}function qu(e){var t=Ke(e,1);t!==null&&Me(t,e,1,-1)}function xs(e){var t=je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:e},t.queue=e,e=e.dispatch=Zp.bind(null,F,e),[t.memoizedState,e]}function rn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Ju(){return Te().memoizedState}function Bn(e,t,r,n){var o=je();F.flags|=e,o.memoizedState=rn(1|t,r,void 0,n===void 0?null:n)}function Co(e,t,r,n){var o=Te();n=n===void 0?null:n;var i=void 0;if(Y!==null){var l=Y.memoizedState;if(i=l.destroy,n!==null&&Fl(n,l.deps)){o.memoizedState=rn(t,r,i,n);return}}F.flags|=e,o.memoizedState=rn(1|t,r,i,n)}function bs(e,t){return Bn(8390656,8,e,t)}function Xl(e,t){return Co(2048,8,e,t)}function ec(e,t){return Co(4,2,e,t)}function tc(e,t){return Co(4,4,e,t)}function rc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nc(e,t,r){return r=r!=null?r.concat([e]):null,Co(4,4,rc.bind(null,t,e),r)}function $l(){}function oc(e,t){var r=Te();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Fl(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ic(e,t){var r=Te();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Fl(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function lc(e,t,r){return It&21?(De(r,t)||(r=du(),F.lanes|=r,At|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=r)}function Qp(e,t){var r=I;I=r!==0&&4>r?r:4,e(!0);var n=hi.transition;hi.transition={};try{e(!1),t()}finally{I=r,hi.transition=n}}function ac(){return Te().memoizedState}function Kp(e,t,r){var n=gt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},sc(e))uc(t,r);else if(r=Bu(e,t,r,n),r!==null){var o=ue();Me(r,e,n,o),cc(r,t,n)}}function Zp(e,t,r){var n=gt(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(sc(e))uc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,r);if(o.hasEagerState=!0,o.eagerState=a,De(a,l)){var s=t.interleaved;s===null?(o.next=o,Dl(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}r=Bu(e,t,o,n),r!==null&&(o=ue(),Me(r,e,n,o),cc(r,t,n))}}function sc(e){var t=e.alternate;return e===F||t!==null&&t===F}function uc(e,t){Rr=po=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function cc(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,kl(e,r)}}var fo={readContext:_e,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},qp={readContext:_e,useCallback:function(e,t){return je().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:bs,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Bn(4194308,4,rc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Bn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bn(4,2,e,t)},useMemo:function(e,t){var r=je();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=je();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Kp.bind(null,F,e),[n.memoizedState,e]},useRef:function(e){var t=je();return e={current:e},t.memoizedState=e},useState:xs,useDebugValue:$l,useDeferredValue:function(e){return je().memoizedState=e},useTransition:function(){var e=xs(!1),t=e[0];return e=Qp.bind(null,e[1]),je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=F,o=je();if(j){if(r===void 0)throw Error(x(407));r=r()}else{if(r=t(),K===null)throw Error(x(349));It&30||Gu(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,bs(Ku.bind(null,n,i,e),[e]),n.flags|=2048,rn(9,Qu.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=je(),t=K.identifierPrefix;if(j){var r=We,n=$e;r=(n&~(1<<32-Oe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=en++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Gp++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jp={readContext:_e,useCallback:oc,useContext:_e,useEffect:Xl,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:ic,useReducer:wi,useRef:Ju,useState:function(){return wi(tn)},useDebugValue:$l,useDeferredValue:function(e){var t=Te();return lc(t,Y.memoizedState,e)},useTransition:function(){var e=wi(tn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Yu,useId:ac,unstable_isNewReconciler:!1},ef={readContext:_e,useCallback:oc,useContext:_e,useEffect:Xl,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:ic,useReducer:mi,useRef:Ju,useState:function(){return mi(tn)},useDebugValue:$l,useDeferredValue:function(e){var t=Te();return Y===null?t.memoizedState=e:lc(t,Y.memoizedState,e)},useTransition:function(){var e=mi(tn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Yu,useId:ac,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function qi(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:V({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var No={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ue(),o=gt(e),i=Ye(n,o);i.payload=t,r!=null&&(i.callback=r),t=pt(e,i,o),t!==null&&(Me(t,e,o,n),Fn(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ue(),o=gt(e),i=Ye(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=pt(e,i,o),t!==null&&(Me(t,e,o,n),Fn(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ue(),n=gt(e),o=Ye(r,n);o.tag=2,t!=null&&(o.callback=t),t=pt(e,o,n),t!==null&&(Me(t,e,n,r),Fn(t,e,n))}};function ks(e,t,r,n,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,l):t.prototype&&t.prototype.isPureReactComponent?!Gr(r,n)||!Gr(o,i):!0}function dc(e,t,r){var n=!1,o=mt,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(o=ge(t)?Lt:ie.current,n=t.contextTypes,i=(n=n!=null)?lr(e,o):mt),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=No,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Es(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&No.enqueueReplaceState(t,t.state,null)}function Ji(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Rl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=_e(i):(i=ge(t)?Lt:ie.current,o.context=lr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(qi(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&No.enqueueReplaceState(o,o.state,null),uo(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t){try{var r="",n=t;do r+=Ld(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function vi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function el(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var tf=typeof WeakMap=="function"?WeakMap:Map;function pc(e,t,r){r=Ye(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ho||(ho=!0,cl=n),el(e,t)},r}function fc(e,t,r){r=Ye(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){el(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){el(e,t),typeof n!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function Ss(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new tf;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=wf.bind(null,e,t,r),t.then(e,e))}function Cs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ns(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ye(-1,1),t.tag=2,pt(r,t,1))),r.lanes|=1),e)}var rf=qe.ReactCurrentOwner,pe=!1;function se(e,t,r,n){t.child=e===null?Vu(t,null,r,n):sr(t,e.child,r,n)}function _s(e,t,r,n,o){r=r.render;var i=t.ref;return nr(t,o),n=Vl(e,t,r,n,i,o),r=Bl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ze(e,t,o)):(j&&r&&Ll(t),t.flags|=1,se(e,t,n,o),t.child)}function Ts(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!Jl(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,gc(e,t,i,n,o)):(e=Yn(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:Gr,r(l,n)&&e.ref===t.ref)return Ze(e,t,o)}return t.flags|=1,e=ht(i,n),e.ref=t.ref,e.return=t,t.child=e}function gc(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Gr(i,n)&&e.ref===t.ref)if(pe=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Ze(e,t,o)}return tl(e,t,r,n,o)}function hc(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(qt,we),we|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(qt,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,O(qt,we),we|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,O(qt,we),we|=n;return se(e,t,o,r),t.child}function wc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function tl(e,t,r,n,o){var i=ge(r)?Lt:ie.current;return i=lr(t,i),nr(t,o),r=Vl(e,t,r,n,i,o),n=Bl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ze(e,t,o)):(j&&n&&Ll(t),t.flags|=1,se(e,t,r,o),t.child)}function zs(e,t,r,n,o){if(ge(r)){var i=!0;oo(t)}else i=!1;if(nr(t,o),t.stateNode===null)Xn(e,t),dc(t,r,n),Ji(t,r,n,o),n=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,d=r.contextType;typeof d=="object"&&d!==null?d=_e(d):(d=ge(r)?Lt:ie.current,d=lr(t,d));var h=r.getDerivedStateFromProps,w=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";w||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==n||s!==d)&&Es(t,l,n,d),nt=!1;var g=t.memoizedState;l.state=g,uo(t,n,l,o),s=t.memoizedState,a!==n||g!==s||fe.current||nt?(typeof h=="function"&&(qi(t,r,h,n),s=t.memoizedState),(a=nt||ks(t,r,a,n,g,s,d))?(w||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),l.props=n,l.state=s,l.context=d,n=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,Xu(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Pe(t.type,a),l.props=d,w=t.pendingProps,g=l.context,s=r.contextType,typeof s=="object"&&s!==null?s=_e(s):(s=ge(r)?Lt:ie.current,s=lr(t,s));var m=r.getDerivedStateFromProps;(h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==w||g!==s)&&Es(t,l,n,s),nt=!1,g=t.memoizedState,l.state=g,uo(t,n,l,o);var y=t.memoizedState;a!==w||g!==y||fe.current||nt?(typeof m=="function"&&(qi(t,r,m,n),y=t.memoizedState),(d=nt||ks(t,r,d,n,g,y,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,y,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),l.props=n,l.state=y,l.context=s,n=d):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return rl(e,t,r,n,i,o)}function rl(e,t,r,n,o,i){wc(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return o&&gs(t,r,!1),Ze(e,t,i);n=t.stateNode,rf.current=t;var a=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=sr(t,e.child,null,i),t.child=sr(t,null,a,i)):se(e,t,a,i),t.memoizedState=n.state,o&&gs(t,r,!0),t.child}function mc(e){var t=e.stateNode;t.pendingContext?fs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fs(e,t.context,!1),Ul(e,t.containerInfo)}function Ls(e,t,r,n,o){return ar(),Il(o),t.flags|=256,se(e,t,r,n),t.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function vc(e,t,r){var n=t.pendingProps,o=H.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),O(H,o&1),e===null)return Ki(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,i?(n=t.mode,i=t.child,l={mode:"hidden",children:l},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=zo(l,n,0,null),e=zt(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ol(r),t.memoizedState=nl,e):Wl(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return nf(e,t,l,n,a,o,r);if(i){i=n.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:n.children};return!(l&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=s,t.deletions=null):(n=ht(o,s),n.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=ht(a,i):(i=zt(i,l,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,l=e.child.memoizedState,l=l===null?ol(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,t.memoizedState=nl,n}return i=e.child,e=i.sibling,n=ht(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Wl(e,t){return t=zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mn(e,t,r,n){return n!==null&&Il(n),sr(t,e.child,null,r),e=Wl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nf(e,t,r,n,o,i,l){if(r)return t.flags&256?(t.flags&=-257,n=vi(Error(x(422))),Mn(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=zo({mode:"visible",children:n.children},o,0,null),i=zt(i,o,l,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&sr(t,e.child,null,l),t.child.memoizedState=ol(l),t.memoizedState=nl,i);if(!(t.mode&1))return Mn(e,t,l,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var a=n.dgst;return n=a,i=Error(x(419)),n=vi(i,n,void 0),Mn(e,t,l,n)}if(a=(l&e.childLanes)!==0,pe||a){if(n=K,n!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ke(e,o),Me(n,e,o,-1))}return ql(),n=vi(Error(x(421))),Mn(e,t,l,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=mf.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,me=dt(o.nextSibling),ve=t,j=!0,Ae=null,e!==null&&(Ee[Se++]=$e,Ee[Se++]=We,Ee[Se++]=Pt,$e=e.id,We=e.overflow,Pt=t),t=Wl(t,n.children),t.flags|=4096,t)}function Ps(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Zi(e.return,t,r)}function yi(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function yc(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(se(e,t,n.children,r),n=H.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ps(e,r,t);else if(e.tag===19)Ps(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(O(H,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&co(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),yi(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&co(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}yi(t,!0,r,null,i);break;case"together":yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,r=ht(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ht(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function of(e,t,r){switch(t.tag){case 3:mc(t),ar();break;case 5:$u(t);break;case 1:ge(t.type)&&oo(t);break;case 4:Ul(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;O(ao,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(O(H,H.current&1),t.flags|=128,null):r&t.child.childLanes?vc(e,t,r):(O(H,H.current&1),e=Ze(e,t,r),e!==null?e.sibling:null);O(H,H.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return yc(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),O(H,H.current),n)break;return null;case 22:case 23:return t.lanes=0,hc(e,t,r)}return Ze(e,t,r)}var xc,il,bc,kc;xc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};il=function(){};bc=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,_t(Ve.current);var i=null;switch(r){case"input":o=_i(e,o),n=_i(e,n),i=[];break;case"select":o=V({},o,{value:void 0}),n=V({},n,{value:void 0}),i=[];break;case"textarea":o=Li(e,o),n=Li(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ro)}Ii(r,n);var l;r=null;for(d in o)if(!n.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var a=o[d];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Fr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var s=n[d];if(a=o!=null?o[d]:void 0,n.hasOwnProperty(d)&&s!==a&&(s!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(r||(r={}),r[l]=s[l])}else r||(i||(i=[]),i.push(d,r)),r=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&R("scroll",e),i||a===s||(i=[])):(i=i||[]).push(d,s))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};kc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Cr(e,t){if(!j)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function lf(e,t,r){var n=t.pendingProps;switch(Pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return ge(t.type)&&no(),ne(t),null;case 3:return n=t.stateNode,ur(),U(fe),U(ie),Hl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(An(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(fl(Ae),Ae=null))),il(e,t),ne(t),null;case 5:jl(t);var o=_t(Jr.current);if(r=t.type,e!==null&&t.stateNode!=null)bc(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(x(166));return ne(t),null}if(e=_t(Ve.current),An(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[He]=t,n[Zr]=i,e=(t.mode&1)!==0,r){case"dialog":R("cancel",n),R("close",n);break;case"iframe":case"object":case"embed":R("load",n);break;case"video":case"audio":for(o=0;o<Pr.length;o++)R(Pr[o],n);break;case"source":R("error",n);break;case"img":case"image":case"link":R("error",n),R("load",n);break;case"details":R("toggle",n);break;case"input":ja(n,i),R("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},R("invalid",n);break;case"textarea":Fa(n,i),R("invalid",n)}Ii(r,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?n.textContent!==a&&(i.suppressHydrationWarning!==!0&&In(n.textContent,a,e),o=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&In(n.textContent,a,e),o=["children",""+a]):Fr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&R("scroll",n)}switch(r){case"input":xn(n),Ha(n,i,!0);break;case"textarea":xn(n),Va(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=ro)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ks(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[He]=t,e[Zr]=n,xc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ai(r,n),r){case"dialog":R("cancel",e),R("close",e),o=n;break;case"iframe":case"object":case"embed":R("load",e),o=n;break;case"video":case"audio":for(o=0;o<Pr.length;o++)R(Pr[o],e);o=n;break;case"source":R("error",e),o=n;break;case"img":case"image":case"link":R("error",e),R("load",e),o=n;break;case"details":R("toggle",e),o=n;break;case"input":ja(e,n),o=_i(e,n),R("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=V({},n,{value:void 0}),R("invalid",e);break;case"textarea":Fa(e,n),o=Li(e,n),R("invalid",e);break;default:o=n}Ii(r,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Js(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Zs(e,s)):i==="children"?typeof s=="string"?(r!=="textarea"||s!=="")&&Vr(e,s):typeof s=="number"&&Vr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Fr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&R("scroll",e):s!=null&&wl(e,i,s,l))}switch(r){case"input":xn(e),Ha(e,n,!1);break;case"textarea":xn(e),Va(e);break;case"option":n.value!=null&&e.setAttribute("value",""+wt(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Jt(e,!!n.multiple,i,!1):n.defaultValue!=null&&Jt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ro)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)kc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(x(166));if(r=_t(Jr.current),_t(Ve.current),An(t)){if(n=t.stateNode,r=t.memoizedProps,n[He]=t,(i=n.nodeValue!==r)&&(e=ve,e!==null))switch(e.tag){case 3:In(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&In(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[He]=t,t.stateNode=n}return ne(t),null;case 13:if(U(H),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(j&&me!==null&&t.mode&1&&!(t.flags&128))Hu(),ar(),t.flags|=98560,i=!1;else if(i=An(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[He]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else Ae!==null&&(fl(Ae),Ae=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?G===0&&(G=3):ql())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return ur(),il(e,t),e===null&&Qr(t.stateNode.containerInfo),ne(t),null;case 10:return Ml(t.type._context),ne(t),null;case 17:return ge(t.type)&&no(),ne(t),null;case 19:if(U(H),i=t.memoizedState,i===null)return ne(t),null;if(n=(t.flags&128)!==0,l=i.rendering,l===null)if(n)Cr(i,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=co(e),l!==null){for(t.flags|=128,Cr(i,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return O(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&$()>dr&&(t.flags|=128,n=!0,Cr(i,!1),t.lanes=4194304)}else{if(!n)if(e=co(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!j)return ne(t),null}else 2*$()-i.renderingStartTime>dr&&r!==1073741824&&(t.flags|=128,n=!0,Cr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(r=i.last,r!==null?r.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=$(),t.sibling=null,r=H.current,O(H,n?r&1|2:r&1),t):(ne(t),null);case 22:case 23:return Zl(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?we&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function af(e,t){switch(Pl(t),t.tag){case 1:return ge(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),U(fe),U(ie),Hl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jl(t),null;case 13:if(U(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(H),null;case 4:return ur(),null;case 10:return Ml(t.type._context),null;case 22:case 23:return Zl(),null;case 24:return null;default:return null}}var Dn=!1,oe=!1,sf=typeof WeakSet=="function"?WeakSet:Set,C=null;function Zt(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){B(e,t,n)}else r.current=null}function ll(e,t,r){try{r()}catch(n){B(e,t,n)}}var Is=!1;function uf(e,t){if(Bi=Jn,e=_u(),zl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,a=-1,s=-1,d=0,h=0,w=e,g=null;t:for(;;){for(var m;w!==r||o!==0&&w.nodeType!==3||(a=l+o),w!==i||n!==0&&w.nodeType!==3||(s=l+n),w.nodeType===3&&(l+=w.nodeValue.length),(m=w.firstChild)!==null;)g=w,w=m;for(;;){if(w===e)break t;if(g===r&&++d===o&&(a=l),g===i&&++h===n&&(s=l),(m=w.nextSibling)!==null)break;w=g,g=w.parentNode}w=m}r=a===-1||s===-1?null:{start:a,end:s}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xi={focusedElem:e,selectionRange:r},Jn=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,P=y.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?b:Pe(t.type,b),P);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){B(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=Is,Is=!1,y}function Ur(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ll(t,r,i)}o=o.next}while(o!==n)}}function _o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function al(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ec(e){var t=e.alternate;t!==null&&(e.alternate=null,Ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[Zr],delete t[Yi],delete t[Xp],delete t[$p])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sc(e){return e.tag===5||e.tag===3||e.tag===4}function As(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ro));else if(n!==4&&(e=e.child,e!==null))for(sl(e,t,r),e=e.sibling;e!==null;)sl(e,t,r),e=e.sibling}function ul(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ul(e,t,r),e=e.sibling;e!==null;)ul(e,t,r),e=e.sibling}var q=null,Ie=!1;function tt(e,t,r){for(r=r.child;r!==null;)Cc(e,t,r),r=r.sibling}function Cc(e,t,r){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(yo,r)}catch{}switch(r.tag){case 5:oe||Zt(r,t);case 6:var n=q,o=Ie;q=null,tt(e,t,r),q=n,Ie=o,q!==null&&(Ie?(e=q,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):q.removeChild(r.stateNode));break;case 18:q!==null&&(Ie?(e=q,r=r.stateNode,e.nodeType===8?pi(e.parentNode,r):e.nodeType===1&&pi(e,r),Wr(e)):pi(q,r.stateNode));break;case 4:n=q,o=Ie,q=r.stateNode.containerInfo,Ie=!0,tt(e,t,r),q=n,Ie=o;break;case 0:case 11:case 14:case 15:if(!oe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ll(r,t,l),o=o.next}while(o!==n)}tt(e,t,r);break;case 1:if(!oe&&(Zt(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){B(r,t,a)}tt(e,t,r);break;case 21:tt(e,t,r);break;case 22:r.mode&1?(oe=(n=oe)||r.memoizedState!==null,tt(e,t,r),oe=n):tt(e,t,r);break;default:tt(e,t,r)}}function Os(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new sf),t.forEach(function(n){var o=vf.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function Le(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:q=a.stateNode,Ie=!1;break e;case 3:q=a.stateNode.containerInfo,Ie=!0;break e;case 4:q=a.stateNode.containerInfo,Ie=!0;break e}a=a.return}if(q===null)throw Error(x(160));Cc(i,l,o),q=null,Ie=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(d){B(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nc(t,e),t=t.sibling}function Nc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Ue(e),n&4){try{Ur(3,e,e.return),_o(3,e)}catch(b){B(e,e.return,b)}try{Ur(5,e,e.return)}catch(b){B(e,e.return,b)}}break;case 1:Le(t,e),Ue(e),n&512&&r!==null&&Zt(r,r.return);break;case 5:if(Le(t,e),Ue(e),n&512&&r!==null&&Zt(r,r.return),e.flags&32){var o=e.stateNode;try{Vr(o,"")}catch(b){B(e,e.return,b)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=r!==null?r.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Gs(o,i),Ai(a,l);var d=Ai(a,i);for(l=0;l<s.length;l+=2){var h=s[l],w=s[l+1];h==="style"?Js(o,w):h==="dangerouslySetInnerHTML"?Zs(o,w):h==="children"?Vr(o,w):wl(o,h,w,d)}switch(a){case"input":Ti(o,i);break;case"textarea":Qs(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Jt(o,!!i.multiple,m,!1):g!==!!i.multiple&&(i.defaultValue!=null?Jt(o,!!i.multiple,i.defaultValue,!0):Jt(o,!!i.multiple,i.multiple?[]:"",!1))}o[Zr]=i}catch(b){B(e,e.return,b)}}break;case 6:if(Le(t,e),Ue(e),n&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){B(e,e.return,b)}}break;case 3:if(Le(t,e),Ue(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Wr(t.containerInfo)}catch(b){B(e,e.return,b)}break;case 4:Le(t,e),Ue(e);break;case 13:Le(t,e),Ue(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ql=$())),n&4&&Os(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(oe=(d=oe)||h,Le(t,e),oe=d):Le(t,e),Ue(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(w=C=h;C!==null;){switch(g=C,m=g.child,g.tag){case 0:case 11:case 14:case 15:Ur(4,g,g.return);break;case 1:Zt(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){B(n,r,b)}}break;case 5:Zt(g,g.return);break;case 22:if(g.memoizedState!==null){Ds(w);continue}}m!==null?(m.return=g,C=m):Ds(w)}h=h.sibling}e:for(h=null,w=e;;){if(w.tag===5){if(h===null){h=w;try{o=w.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=w.stateNode,s=w.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=qs("display",l))}catch(b){B(e,e.return,b)}}}else if(w.tag===6){if(h===null)try{w.stateNode.nodeValue=d?"":w.memoizedProps}catch(b){B(e,e.return,b)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;h===w&&(h=null),w=w.return}h===w&&(h=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:Le(t,e),Ue(e),n&4&&Os(e);break;case 21:break;default:Le(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Sc(r)){var n=r;break e}r=r.return}throw Error(x(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Vr(o,""),n.flags&=-33);var i=As(e);ul(e,i,o);break;case 3:case 4:var l=n.stateNode.containerInfo,a=As(e);sl(e,a,l);break;default:throw Error(x(161))}}catch(s){B(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cf(e,t,r){C=e,_c(e,t,r)}function _c(e,t,r){for(var n=(e.mode&1)!==0;C!==null;){var o=C,i=o.child;if(o.tag===22&&n){var l=o.memoizedState!==null||Dn;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||oe;a=Dn;var d=oe;if(Dn=l,(oe=s)&&!d)for(C=o;C!==null;)l=C,s=l.child,l.tag===22&&l.memoizedState!==null?Rs(o):s!==null?(s.return=l,C=s):Rs(o);for(;i!==null;)C=i,_c(i,t,r),i=i.sibling;C=o,Dn=a,oe=d}Ms(e,t,r)}else o.subtreeFlags&8772&&i!==null?(i.return=o,C=i):Ms(e,t,r)}}function Ms(e){for(;C!==null;){var t=C;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||_o(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!oe)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Pe(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ys(t,i,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ys(t,l,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break;case"img":s.src&&(r.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var w=h.dehydrated;w!==null&&Wr(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}oe||t.flags&512&&al(t)}catch(g){B(t,t.return,g)}}if(t===e){C=null;break}if(r=t.sibling,r!==null){r.return=t.return,C=r;break}C=t.return}}function Ds(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var r=t.sibling;if(r!==null){r.return=t.return,C=r;break}C=t.return}}function Rs(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{_o(4,t)}catch(s){B(t,r,s)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(s){B(t,o,s)}}var i=t.return;try{al(t)}catch(s){B(t,i,s)}break;case 5:var l=t.return;try{al(t)}catch(s){B(t,l,s)}}}catch(s){B(t,t.return,s)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var df=Math.ceil,go=qe.ReactCurrentDispatcher,Yl=qe.ReactCurrentOwner,Ne=qe.ReactCurrentBatchConfig,L=0,K=null,W=null,J=0,we=0,qt=yt(0),G=0,nn=null,At=0,To=0,Gl=0,jr=null,de=null,Ql=0,dr=1/0,Be=null,ho=!1,cl=null,ft=null,Rn=!1,at=null,wo=0,Hr=0,dl=null,$n=-1,Wn=0;function ue(){return L&6?$():$n!==-1?$n:$n=$()}function gt(e){return e.mode&1?L&2&&J!==0?J&-J:Yp.transition!==null?(Wn===0&&(Wn=du()),Wn):(e=I,e!==0||(e=window.event,e=e===void 0?16:vu(e.type)),e):1}function Me(e,t,r,n){if(50<Hr)throw Hr=0,dl=null,Error(x(185));on(e,r,n),(!(L&2)||e!==K)&&(e===K&&(!(L&2)&&(To|=r),G===4&&it(e,J)),he(e,n),r===1&&L===0&&!(t.mode&1)&&(dr=$()+500,So&&xt()))}function he(e,t){var r=e.callbackNode;Qd(e,t);var n=qn(e,e===K?J:0);if(n===0)r!==null&&$a(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&$a(r),t===1)e.tag===0?Wp(Us.bind(null,e)):Ru(Us.bind(null,e)),Vp(function(){!(L&6)&&xt()}),r=null;else{switch(pu(n)){case 1:r=bl;break;case 4:r=uu;break;case 16:r=Zn;break;case 536870912:r=cu;break;default:r=Zn}r=Mc(r,Tc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Tc(e,t){if($n=-1,Wn=0,L&6)throw Error(x(327));var r=e.callbackNode;if(or()&&e.callbackNode!==r)return null;var n=qn(e,e===K?J:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=mo(e,n);else{t=n;var o=L;L|=2;var i=Lc();(K!==e||J!==t)&&(Be=null,dr=$()+500,Tt(e,t));do try{gf();break}catch(a){zc(e,a)}while(!0);Ol(),go.current=i,L=o,W!==null?t=0:(K=null,J=0,t=G)}if(t!==0){if(t===2&&(o=Ui(e),o!==0&&(n=o,t=pl(e,o))),t===1)throw r=nn,Tt(e,0),it(e,n),he(e,$()),r;if(t===6)it(e,n);else{if(o=e.current.alternate,!(n&30)&&!pf(o)&&(t=mo(e,n),t===2&&(i=Ui(e),i!==0&&(n=i,t=pl(e,i))),t===1))throw r=nn,Tt(e,0),it(e,n),he(e,$()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(x(345));case 2:St(e,de,Be);break;case 3:if(it(e,n),(n&130023424)===n&&(t=Ql+500-$(),10<t)){if(qn(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Wi(St.bind(null,e,de,Be),t);break}St(e,de,Be);break;case 4:if(it(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var l=31-Oe(n);i=1<<l,l=t[l],l>o&&(o=l),n&=~i}if(n=o,n=$()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*df(n/1960))-n,10<n){e.timeoutHandle=Wi(St.bind(null,e,de,Be),n);break}St(e,de,Be);break;case 5:St(e,de,Be);break;default:throw Error(x(329))}}}return he(e,$()),e.callbackNode===r?Tc.bind(null,e):null}function pl(e,t){var r=jr;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=mo(e,t),e!==2&&(t=de,de=r,t!==null&&fl(t)),e}function fl(e){de===null?de=e:de.push.apply(de,e)}function pf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!De(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Gl,t&=~To,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Oe(t),n=1<<r;e[r]=-1,t&=~n}}function Us(e){if(L&6)throw Error(x(327));or();var t=qn(e,0);if(!(t&1))return he(e,$()),null;var r=mo(e,t);if(e.tag!==0&&r===2){var n=Ui(e);n!==0&&(t=n,r=pl(e,n))}if(r===1)throw r=nn,Tt(e,0),it(e,t),he(e,$()),r;if(r===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,de,Be),he(e,$()),null}function Kl(e,t){var r=L;L|=1;try{return e(t)}finally{L=r,L===0&&(dr=$()+500,So&&xt())}}function Ot(e){at!==null&&at.tag===0&&!(L&6)&&or();var t=L;L|=1;var r=Ne.transition,n=I;try{if(Ne.transition=null,I=1,e)return e()}finally{I=n,Ne.transition=r,L=t,!(L&6)&&xt()}}function Zl(){we=qt.current,U(qt)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Fp(r)),W!==null)for(r=W.return;r!==null;){var n=r;switch(Pl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&no();break;case 3:ur(),U(fe),U(ie),Hl();break;case 5:jl(n);break;case 4:ur();break;case 13:U(H);break;case 19:U(H);break;case 10:Ml(n.type._context);break;case 22:case 23:Zl()}r=r.return}if(K=e,W=e=ht(e.current,null),J=we=t,G=0,nn=null,Gl=To=At=0,de=jr=null,Nt!==null){for(t=0;t<Nt.length;t++)if(r=Nt[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var l=i.next;i.next=o,n.next=l}r.pending=n}Nt=null}return e}function zc(e,t){do{var r=W;try{if(Ol(),Vn.current=fo,po){for(var n=F.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}po=!1}if(It=0,Q=Y=F=null,Rr=!1,en=0,Yl.current=null,r===null||r.return===null){G=1,nn=t,W=null;break}e:{var i=e,l=r.return,a=r,s=t;if(t=J,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,h=a,w=h.tag;if(!(h.mode&1)&&(w===0||w===11||w===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Cs(l);if(m!==null){m.flags&=-257,Ns(m,l,a,i,t),m.mode&1&&Ss(i,d,t),t=m,s=d;var y=t.updateQueue;if(y===null){var b=new Set;b.add(s),t.updateQueue=b}else y.add(s);break e}else{if(!(t&1)){Ss(i,d,t),ql();break e}s=Error(x(426))}}else if(j&&a.mode&1){var P=Cs(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Ns(P,l,a,i,t),Il(cr(s,a));break e}}i=s=cr(s,a),G!==4&&(G=2),jr===null?jr=[i]:jr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=pc(i,s,t);vs(i,p);break e;case 1:a=s;var u=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ft===null||!ft.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=fc(i,a,t);vs(i,v);break e}}i=i.return}while(i!==null)}Ic(r)}catch(k){t=k,W===r&&r!==null&&(W=r=r.return);continue}break}while(!0)}function Lc(){var e=go.current;return go.current=fo,e===null?fo:e}function ql(){(G===0||G===3||G===2)&&(G=4),K===null||!(At&268435455)&&!(To&268435455)||it(K,J)}function mo(e,t){var r=L;L|=2;var n=Lc();(K!==e||J!==t)&&(Be=null,Tt(e,t));do try{ff();break}catch(o){zc(e,o)}while(!0);if(Ol(),L=r,go.current=n,W!==null)throw Error(x(261));return K=null,J=0,G}function ff(){for(;W!==null;)Pc(W)}function gf(){for(;W!==null&&!Hd();)Pc(W)}function Pc(e){var t=Oc(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?Ic(e):W=t,Yl.current=null}function Ic(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=af(r,t),r!==null){r.flags&=32767,W=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,W=null;return}}else if(r=lf(r,t,we),r!==null){W=r;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);G===0&&(G=5)}function St(e,t,r){var n=I,o=Ne.transition;try{Ne.transition=null,I=1,hf(e,t,r,n)}finally{Ne.transition=o,I=n}return null}function hf(e,t,r,n){do or();while(at!==null);if(L&6)throw Error(x(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Kd(e,i),e===K&&(W=K=null,J=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Rn||(Rn=!0,Mc(Zn,function(){return or(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Ne.transition,Ne.transition=null;var l=I;I=1;var a=L;L|=4,Yl.current=null,uf(e,r),Nc(r,e),Dp(Xi),Jn=!!Bi,Xi=Bi=null,e.current=r,cf(r,e,o),Fd(),L=a,I=l,Ne.transition=i}else e.current=r;if(Rn&&(Rn=!1,at=e,wo=o),i=e.pendingLanes,i===0&&(ft=null),Xd(r.stateNode,n),he(e,$()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(ho)throw ho=!1,e=cl,cl=null,e;return wo&1&&e.tag!==0&&or(),i=e.pendingLanes,i&1?e===dl?Hr++:(Hr=0,dl=e):Hr=0,xt(),null}function or(){if(at!==null){var e=pu(wo),t=Ne.transition,r=I;try{if(Ne.transition=null,I=16>e?16:e,at===null)var n=!1;else{if(e=at,at=null,wo=0,L&6)throw Error(x(331));var o=L;for(L|=4,C=e.current;C!==null;){var i=C,l=i.child;if(C.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var d=a[s];for(C=d;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:Ur(8,h,i)}var w=h.child;if(w!==null)w.return=h,C=w;else for(;C!==null;){h=C;var g=h.sibling,m=h.return;if(Ec(h),h===d){C=null;break}if(g!==null){g.return=m,C=g;break}C=m}}}var y=i.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var P=b.sibling;b.sibling=null,b=P}while(b!==null)}}C=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,C=l;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ur(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,C=p;break e}C=i.return}}var u=e.current;for(C=u;C!==null;){l=C;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,C=f;else e:for(l=u;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_o(9,a)}}catch(k){B(a,a.return,k)}if(a===l){C=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,C=v;break e}C=a.return}}if(L=o,xt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(yo,e)}catch{}n=!0}return n}finally{I=r,Ne.transition=t}}return!1}function js(e,t,r){t=cr(r,t),t=pc(e,t,1),e=pt(e,t,1),t=ue(),e!==null&&(on(e,1,t),he(e,t))}function B(e,t,r){if(e.tag===3)js(e,e,r);else for(;t!==null;){if(t.tag===3){js(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ft===null||!ft.has(n))){e=cr(r,e),e=fc(t,e,1),t=pt(t,e,1),e=ue(),t!==null&&(on(t,1,e),he(t,e));break}}t=t.return}}function wf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&r,K===e&&(J&r)===r&&(G===4||G===3&&(J&130023424)===J&&500>$()-Ql?Tt(e,0):Gl|=r),he(e,t)}function Ac(e,t){t===0&&(e.mode&1?(t=En,En<<=1,!(En&130023424)&&(En=4194304)):t=1);var r=ue();e=Ke(e,t),e!==null&&(on(e,t,r),he(e,r))}function mf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ac(e,r)}function vf(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(x(314))}n!==null&&n.delete(t),Ac(e,r)}var Oc;Oc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)pe=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return pe=!1,of(e,t,r);pe=!!(e.flags&131072)}else pe=!1,j&&t.flags&1048576&&Uu(t,lo,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Xn(e,t),e=t.pendingProps;var o=lr(t,ie.current);nr(t,r),o=Vl(null,t,n,e,o,r);var i=Bl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(n)?(i=!0,oo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Rl(t),o.updater=No,t.stateNode=o,o._reactInternals=t,Ji(t,n,e,r),t=rl(null,t,n,!0,i,r)):(t.tag=0,j&&i&&Ll(t),se(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Xn(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=xf(n),e=Pe(n,e),o){case 0:t=tl(null,t,n,e,r);break e;case 1:t=zs(null,t,n,e,r);break e;case 11:t=_s(null,t,n,e,r);break e;case 14:t=Ts(null,t,n,Pe(n.type,e),r);break e}throw Error(x(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Pe(n,o),tl(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Pe(n,o),zs(e,t,n,o,r);case 3:e:{if(mc(t),e===null)throw Error(x(387));n=t.pendingProps,i=t.memoizedState,o=i.element,Xu(e,t),uo(t,n,null,r);var l=t.memoizedState;if(n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=cr(Error(x(423)),t),t=Ls(e,t,n,r,o);break e}else if(n!==o){o=cr(Error(x(424)),t),t=Ls(e,t,n,r,o);break e}else for(me=dt(t.stateNode.containerInfo.firstChild),ve=t,j=!0,Ae=null,r=Vu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ar(),n===o){t=Ze(e,t,r);break e}se(e,t,n,r)}t=t.child}return t;case 5:return $u(t),e===null&&Ki(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,$i(n,o)?l=null:i!==null&&$i(n,i)&&(t.flags|=32),wc(e,t),se(e,t,l,r),t.child;case 6:return e===null&&Ki(t),null;case 13:return vc(e,t,r);case 4:return Ul(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=sr(t,null,n,r):se(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Pe(n,o),_s(e,t,n,o,r);case 7:return se(e,t,t.pendingProps,r),t.child;case 8:return se(e,t,t.pendingProps.children,r),t.child;case 12:return se(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,O(ao,n._currentValue),n._currentValue=l,i!==null)if(De(i.value,l)){if(i.children===o.children&&!fe.current){t=Ze(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===n){if(i.tag===1){s=Ye(-1,r&-r),s.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s}}i.lanes|=r,s=i.alternate,s!==null&&(s.lanes|=r),Zi(i.return,r,t),a.lanes|=r;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(x(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),Zi(l,r,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}se(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,nr(t,r),o=_e(o),n=n(o),t.flags|=1,se(e,t,n,r),t.child;case 14:return n=t.type,o=Pe(n,t.pendingProps),o=Pe(n.type,o),Ts(e,t,n,o,r);case 15:return gc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Pe(n,o),Xn(e,t),t.tag=1,ge(n)?(e=!0,oo(t)):e=!1,nr(t,r),dc(t,n,o),Ji(t,n,o,r),rl(null,t,n,!0,e,r);case 19:return yc(e,t,r);case 22:return hc(e,t,r)}throw Error(x(156,t.tag))};function Mc(e,t){return su(e,t)}function yf(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,r,n){return new yf(e,t,r,n)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xf(e){if(typeof e=="function")return Jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vl)return 11;if(e===yl)return 14}return 2}function ht(e,t){var r=e.alternate;return r===null?(r=Ce(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Yn(e,t,r,n,o,i){var l=2;if(n=e,typeof e=="function")Jl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Vt:return zt(r.children,o,i,t);case ml:l=8,o|=8;break;case Ei:return e=Ce(12,r,t,o|2),e.elementType=Ei,e.lanes=i,e;case Si:return e=Ce(13,r,t,o),e.elementType=Si,e.lanes=i,e;case Ci:return e=Ce(19,r,t,o),e.elementType=Ci,e.lanes=i,e;case $s:return zo(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bs:l=10;break e;case Xs:l=9;break e;case vl:l=11;break e;case yl:l=14;break e;case rt:l=16,n=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ce(l,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function zt(e,t,r,n){return e=Ce(7,e,n,t),e.lanes=r,e}function zo(e,t,r,n){return e=Ce(22,e,n,t),e.elementType=$s,e.lanes=r,e.stateNode={isHidden:!1},e}function xi(e,t,r){return e=Ce(6,e,null,t),e.lanes=r,e}function bi(e,t,r){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bf(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ea(e,t,r,n,o,i,l,a,s){return e=new bf(e,t,r,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rl(i),e}function kf(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ft,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Dc(e){if(!e)return mt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var r=e.type;if(ge(r))return Du(e,r,t)}return t}function Rc(e,t,r,n,o,i,l,a,s){return e=ea(r,n,!0,e,o,i,l,a,s),e.context=Dc(null),r=e.current,n=ue(),o=gt(r),i=Ye(n,o),i.callback=t??null,pt(r,i,o),e.current.lanes=o,on(e,o,n),he(e,n),e}function Lo(e,t,r,n){var o=t.current,i=ue(),l=gt(o);return r=Dc(r),t.context===null?t.context=r:t.pendingContext=r,t=Ye(i,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=pt(o,t,l),e!==null&&(Me(e,o,l,i),Fn(e,o,l)),l}function vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ta(e,t){Hs(e,t),(e=e.alternate)&&Hs(e,t)}function Ef(){return null}var Uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ra(e){this._internalRoot=e}Po.prototype.render=ra.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Lo(e,t,null,null)};Po.prototype.unmount=ra.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ot(function(){Lo(null,e,null,null)}),t[Qe]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=hu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ot.length&&t!==0&&t<ot[r].priority;r++);ot.splice(r,0,e),r===0&&mu(e)}};function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fs(){}function Sf(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var d=vo(l);i.call(d)}}var l=Rc(t,n,e,0,null,!1,!1,"",Fs);return e._reactRootContainer=l,e[Qe]=l.current,Qr(e.nodeType===8?e.parentNode:e),Ot(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var a=n;n=function(){var d=vo(s);a.call(d)}}var s=ea(e,0,!1,null,null,!1,!1,"",Fs);return e._reactRootContainer=s,e[Qe]=s.current,Qr(e.nodeType===8?e.parentNode:e),Ot(function(){Lo(t,s,r,n)}),s}function Ao(e,t,r,n,o){var i=r._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=vo(l);a.call(s)}}Lo(t,l,e,o)}else l=Sf(r,t,e,o,n);return vo(l)}fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Lr(t.pendingLanes);r!==0&&(kl(t,r|1),he(t,$()),!(L&6)&&(dr=$()+500,xt()))}break;case 13:Ot(function(){var n=Ke(e,1);if(n!==null){var o=ue();Me(n,e,1,o)}}),ta(e,1)}};El=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var r=ue();Me(t,e,134217728,r)}ta(e,134217728)}};gu=function(e){if(e.tag===13){var t=gt(e),r=Ke(e,t);if(r!==null){var n=ue();Me(r,e,t,n)}ta(e,t)}};hu=function(){return I};wu=function(e,t){var r=I;try{return I=e,t()}finally{I=r}};Mi=function(e,t,r){switch(t){case"input":if(Ti(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Eo(n);if(!o)throw Error(x(90));Ys(n),Ti(n,o)}}}break;case"textarea":Qs(e,r);break;case"select":t=r.value,t!=null&&Jt(e,!!r.multiple,t,!1)}};ru=Kl;nu=Ot;var Cf={usingClientEntryPoint:!1,Events:[an,Wt,Eo,eu,tu,Kl]},Nr={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nf={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lu(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||Ef,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(_r=__REACT_DEVTOOLS_GLOBAL_HOOK__,!_r.isDisabled&&_r.supportsFiber))try{yo=_r.inject(Nf),Fe=_r}catch{}var _r;be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cf;be.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!na(t))throw Error(x(200));return kf(e,t,null,r)};be.createRoot=function(e,t){if(!na(e))throw Error(x(299));var r=!1,n="",o=Uc;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ea(e,1,!1,null,null,r,!1,n,o),e[Qe]=t.current,Qr(e.nodeType===8?e.parentNode:e),new ra(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=lu(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Ot(e)};be.hydrate=function(e,t,r){if(!Io(t))throw Error(x(200));return Ao(null,e,t,!0,r)};be.hydrateRoot=function(e,t,r){if(!na(e))throw Error(x(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",l=Uc;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=Rc(t,null,e,1,r??null,o,!1,i,l),e[Qe]=t.current,Qr(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Po(t)};be.render=function(e,t,r){if(!Io(t))throw Error(x(200));return Ao(null,e,t,!1,r)};be.unmountComponentAtNode=function(e){if(!Io(e))throw Error(x(40));return e._reactRootContainer?(Ot(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};be.unstable_batchedUpdates=Kl;be.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Io(r))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Ao(e,t,r,!1,n)};be.version="18.3.1-next-f1338f8080-20240426"});var Vc=bt(($f,Fc)=>{"use strict";function Hc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hc)}catch(e){console.error(e)}}Hc(),Fc.exports=jc()});var Xc=bt(oa=>{"use strict";var Bc=Vc();oa.createRoot=Bc.createRoot,oa.hydrateRoot=Bc.hydrateRoot;var Wf});var E=ca(Xo()),rd=ca(Xc());var M=Object.freeze({SELECTION:"selection",SELECTION_LIST:"selection-list",SELECT_PAGINATION_BUTTON:"select-pagination-button",SELECT_PAGE_DEATILS:"select-page-details"}),gr=Object.freeze({TYPE_1:"type-1",TYPE_2:"type-2"}),$c=[{website:"apollo.io",type:gr.TYPE_1},{website:"drinkersedition.com",type:gr.TYPE_1},{website:"steampowered.com",type:gr.TYPE_1}];var Oo=class{constructor(){this.clsHighlighterOverlay="panda-highlighter-overlay",this.clsHighlighterItem="panda-highlighter-item"}addOverlayClass(t){t.classList.add(this.clsHighlighterOverlay)}addItemClass(t){t.classList.add(this.clsHighlighterItem)}removeOverlayClass(t){t.classList.remove(this.clsHighlighterOverlay)}removeItemClass(t){t.classList.remove(this.clsHighlighterItem)}},Mo=Oo;var un=class extends Mo{constructor(t){super();let r=t?t.rootView:void 0,n=r===void 0?document.body:r;this.rootView=n,this.config={clsOverlay:"panda-extract-cursor-move-overlay",clsLayer:"panda-z-2"}}highlight(t){let r=t.element,n=this.getOrCreateOverlay(),o=r.getBoundingClientRect(),i=o.width,l=o.height;n.style.position="absolute",n.style.width=`${i}px`,n.style.height=`${l}px`,n.style.top=`${window.scrollY+o.top}px`,n.style.left=`${window.scrollX+o.left}px`}removeHighlight(){let t=document.body.querySelector(this.config.clsOverlay.dot());t&&t.remove()}getOrCreateOverlay(){let t=document.body.querySelector(this.config.clsOverlay.dot());if(!t){let r=document.createElement("div");return r.classList.add(this.config.clsOverlay,this.config.clsLayer),document.body.appendChild(r),r}return t}};var cn=class extends Mo{constructor(t){super();let r=t.overlayClassName,n=t.highlightedItemClassName,o=t.highlightedSubItemClassName,i=t.rootView,l=i===void 0?document.body:i;this.rootView=l,this.config={clsOverlay:r,clsLayer:"panda-z-2",clsItem:n,clsSubItem:o}}highlight(t){let r=this;t.elements.forEach(function(n){if(r.config.clsItem&&n.classList.add(r.config.clsItem),r.config.clsOverlay){let o=r.createOverlay();document.body.appendChild(o),setTimeout(function(){let i=n.getBoundingClientRect();o.style.position="absolute",o.style.width=`${i.width}px`,o.style.height=`${i.height}px`,o.style.top=`${window.scrollY+i.top}px`,o.style.left=`${window.scrollX+i.left}px`},305)}})}highlightDirectly(t){t.elements.forEach(function(r){r.classList.add("panda-highlight-child-element-active")})}highlightElementsOfChildren(t){let r=this;t.elements.forEach(function(n){n.classList.add(r.config.clsSubItem)})}isHighlighted(t){let r=t.closest(this.config.clsOverlay.dot())!=null,n=!!this.config.clsItem&&t.closest(this.config.clsItem.dot())!=null;return r||n}removeHighlightsInsideChildren(){let t=this;this.config.clsSubItem&&document.querySelectorAll(this.config.clsSubItem.dot()).forEach(function(r){return r.classList.remove(t.config.clsSubItem)})}removeHighlights(){let t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{removeOverlay:!0,removeItemHighlight:!0,removeDirectHighlight:!0},n=r.removeOverlay,o=r.removeItemHighlight,i=r.removeDirectHighlight;this.config.clsOverlay&&n&&document.body.querySelectorAll(this.config.clsOverlay.dot()).forEach(function(l){return l.remove()}),o&&this.removeHighlightsInsideChildren(),this.config.clsItem&&o&&document.querySelectorAll(this.config.clsItem.dot()).forEach(function(l){return l.classList.remove(t.config.clsItem)}),this.config.clsItem&&i&&document.querySelectorAll(this.config.clsItem.dot()).forEach(function(l){return l.classList.remove(t.config.clsItem)})}createOverlay(){let t=document.createElement("div");return t.classList.add(this.config.clsOverlay,this.config.clsLayer),t}};var Wc=`/*
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
`;function _f(){return`
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
  `}var Rt=class e{static ID_SHADOW="shadow-container-panda-extract";static build(){let t=document.createElement("div");t.id=e.ID_SHADOW;let r=t.attachShadow({mode:"open"}),n=document.createElement("style");return n.textContent=`
    :host {
      color: initial;
      font-family: sans-serif;
      font-size: initial;
      line-height: initial;
      letter-spacing: initial;
      text-align: left;
    }
    ${_f()}
    ${Wc}
  `,r.appendChild(n),t}static remove(){let t=document.getElementById(e.ID_SHADOW);t&&t.remove()}static getShadowRoot(){let t=document.getElementById(e.ID_SHADOW);return t||(t=e.build(),document.body.appendChild(t)),t.shadowRoot}static isContainerInBody(){return document.getElementById(e.ID_SHADOW)!=null}};var Tf=new WeakMap,la=function(e){let t=e.event,r=e.element;this.cursorHighlighter.highlight({element:r}),this.onElementHovered&&this.onElementHovered({event:t,element:r}),this.context.mode===M.SELECTION&&this.highlightIfCollection({element:r})},Yc=function(e,t){let r=t.target;e.isIgnoredElement(r)||(e.context.mode===M.SELECTION_LIST?(e.cursorHighlighter.highlight({element:r}),e.onElementHovered&&e.onElementHovered({event:t,element:r}),e.highlightIfCollection({element:r})):e.context.mode===M.SELECT_PAGINATION_BUTTON||e.context.mode===M.SELECT_PAGE_DEATILS?(e.cursorHighlighter.highlight({element:r}),e.onElementHovered&&(e.onElementHovered({event:t,element:r}),Kc.call(e,e,r))):la.call(e,{event:t,element:r}))},Gc=function(e,t){let r=t.target;e.isIgnoredElement(r)||(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e.context.mode===M.SELECTION_LIST?e.isHighlightedCollectionElement(r)&&e.onListSelected&&e.onListSelected({element:r,parent:e.highlights.selected}):e.context.mode===M.SELECT_PAGE_DEATILS?e.onElementClick&&e.onElementClick({event:t,data:{viewType:"ELEMENT",element:r,hoveredSelection:e.getHoveredSelection()}}):e.onElementClick&&e.onElementClick({event:t,data:{element:r,viewType:"ELEMENT"}}))},Qc=function(e,t){t.key==="Escape"?e.context.mode===M.SELECTION_LIST&&e.resetSelectionMode():t.key.toLowerCase()==="r"&&t.ctrlKey?e.resume():t.key.toLowerCase()==="p"&&t.ctrlKey?e.pause():e.highlights?t.key==="ArrowUp"?(t.preventDefault(),e.updateSelectedParent("UP")):t.key==="ArrowDown"&&(t.preventDefault(),e.updateSelectedParent("DOWN")):e.context.mode===M.SELECT_PAGE_DEATILS&&e.selections&&(t.key==="ArrowUp"?(t.preventDefault(),ia.call(e,e,"UP")):t.key==="ArrowDown"&&(t.preventDefault(),ia.call(e,e,"DOWN")))},Kc=function(e,t){let r=[],n=t;for(;n&&n.tagName!=="BODY";)r.push(n),n=n.parentElement;n&&n.tagName==="BODY"&&r.push(n),e.selections={hierarchy:r,selectedIndex:0}},ia=function(e,t){if(e.selections){let r=e.selections,n=r.hierarchy,o=r.selectedIndex+(t==="UP"?1:-1);if(o>=0&&o<n.length){let i=n[o];e.selections.selectedIndex=o,la.call(e,{event:null,element:i})}}},Do=class{constructor(){Tf.set(this,{ve:la.bind(this),ue:Yc.bind(this),de:Gc.bind(this),fe:Qc.bind(this),pe:Kc.bind(this),ge:ia.bind(this)})}static ue(t,r){Yc(t,r)}static de(t,r){Gc(t,r)}static fe(t,r){Qc(t,r)}},Ro=Do;var ig=Object.freeze({LIST:"LIST",TABLE:"TABLE",ELEMENT:"ELEMENT"}),lg=Object.freeze({EXTRACT:"EXTRACT",EXTRACT_TEXT:"EXTRACT_TEXT",EXTRACT_HTML:"EXTRACT_HTML",EXTRACT_ATTRIBUTE:"EXTRACT_ATTRIBUTE",EXTRACT_IMAGE_URL:"EXTRACT_IMAGE_URL",EXTRACT_LINK_URL:"EXTRACT_LINK_URL"}),ag=Object.freeze({PANDA_EXTRACT:"panda-extract",PANDA_EXTRACT_CURSOR_MOVE_OVERLAY:"panda-extract-cursor-move-overlay",PANDA_EXTRACT_ELEMENT_INFO_OVERLAY:"panda-extract-element-info-overlay",PANDA_EXTRACT_ELEMENT_INFO_OVERLAY_ITEM:"panda-extract-element-info-overlay-item",PANDA_EXTRACT_SIMILAR_ELEMENT_OVERLAY:"panda-extract-similar-element-overlay",PANDA_EXTRACT_POPUP_COLUMN:"panda-extract-popup-column",PANDA_EXTRACT_ITEM:"panda-extract-item",PANDA_EXTRACT_TYPE_MENU:"panda-extract-type-menu",PANDA_EXTRACT_CHOICE_BUTTON:"panda-extract-choice-button",PANDA_EXTRACTABLE_HIGHLIGHT:"panda-extractable-highlight",PANDA_EXTRACT_HIGHLIGHTED_ITEM:"panda-extract-highlighted-item"}),sg=Object.freeze({PANDA_HIGHLIGHT_COLLECTION_ELEMENT:"panda-highlight-collection-element",PANDA_HIGHLIGHT_ACTIVE_COLLECTION_ELEMENT:"panda-highlight-active-collection-element",PANDA_HIGHLIGHT_CHILD_ELEMENT_ACTIVE:"panda-highlight-child-element-active",PANDA_HIGHLIGHTER_OVERLAY:"panda-highlighter-overlay",PANDA_HIGHLIGHTER_ITEM:"panda-highlighter-item"}),ug=Object.freeze({PANDA_Z:"panda-z",PANDA_Z_1:"panda-z-1",PANDA_Z_2:"panda-z-2",PANDA_Z_3:"panda-z-3",PANDA_Z_4:"panda-z-4",PANDA_Z_5:"panda-z-5",PANDA_Z_6:"panda-z-6",PANDA_Z_7:"panda-z-7",PANDA_Z_8:"panda-z-8",PANDA_Z_9:"panda-z-9",PANDA_Z_10:"panda-z-10",PANDA_Z_11:"panda-z-11",PANDA_Z_12:"panda-z-12",LAYER_FLOATING_CONTENT:"layer-floating-content",LAYER_POPUP_BG:"layer-popup-bg",LAYER_POPUP:"layer-popup",LAYER_POPUP_MENU_BG:"layer-popup-menu-bg",LAYER_POPUP_MENU:"layer-popup-menu",PANDA_LAYER_CONTENT:"panda-layer-content",PANDA_LAYER_HIGHLIGHT:"panda-layer-highlight"}),cg=Object.freeze({EXTRACT_SMALL_TABLE:"extract-small-table"}),dg=Object.freeze({CONTAINER_ID:"shadow-container-panda-extract"}),pg=Object.freeze({ignoreViewsWithClass:["panda-extract"],extractImages:!0,extractAriaLabel:!1});String.prototype.dot||(String.prototype.dot=function(){return"."+this});var aa=class{constructor(t){this.options=t||{minRowsFilter:4},this.tableNode=null,this.rowNode=null}findGroupParent(t){let r=t,n=t,o=[],i=0;try{for(;r&&r!==document.body&&r!==document.documentElement;){let a,s=0,d=[],h=Array.from(r.children);try{for(let w of h)this.isValidGroupElement(w)&&w.offsetHeight>0&&(d.push(w),s++)}catch{}s>=this.options.minRowsFilter&&(o.push({tableNode:r,children:d,rowNode:n,childCount:s}),s>i&&(i=s)),n=r,r=r.parentNode}let l=null;for(let a=0;a<o.length;a++){let s=o[a];if(s.childCount===i){l=s;break}}return{bestCandidate:l,candidates:o}}catch{return null}}isValidGroupElement(t){return["TR","SUMMARY","LI","DIV","DETAILS","ASIDE","ARTICLE","A","FIGURE"].includes(t.tagName)||/-/g.test(t.tagName)}getSelector(t,r){let n=this.findGroupParent(t,r);if(!n)return"";this.tableNode=n.tableNode,this.rowNode=n.rowNode;let o=this.generateSelector(this.tableNode),i=this.generateSelector(this.rowNode);return`${o} > ${i}`}generateSelector(t){return t.id?`#${t.id}`:t.className?`.${t.className.split(" ").join(".")}`:t.tagName.toLowerCase()}selectGroup(t,r){return r.document.body.querySelectorAll(t)}},Zc=aa;var sa=class{static getGeneralizedCssSelector(t){let r=t.element,n=t.clsDepth,o=n===void 0?2:n,i=t.nodeDepth,l=i===void 0?5:i,a=t.root,s=a===void 0?null:a;if(r){let d=[],h=0;for(;r.nodeType===Node.ELEMENT_NODE&&r.nodeName.toLowerCase()!=="body"&&r!==s&&h<l;r=r.parentNode,h++){let w=r.nodeName.toLowerCase().replace(/:/g,"\\:"),g=Array.from(r.classList).filter(function(m){return/^[a-zA-Z_][a-zA-Z0-9-_]*$/.test(m)&&!m.includes("panda-")}).slice(0,o);g.length&&(w+="."+g.join(".")),d.unshift(w)}return d.join(" > ")}}static getSelectorNthType(t){let r=t.root,n=t.element,o=[];for(;n.nodeType===Node.ELEMENT_NODE&&n.nodeName.toLowerCase()!=="body"&&n!=r;n=n.parentNode){let i=n.nodeName.toLowerCase(),l=Array.from(n.parentNode.children).filter(function(a){return a.nodeName===n.nodeName}).indexOf(n)+1;i+=`:nth-of-type(${l})`,o.unshift(i)}return r&&(o[0]=o[0].replace(/:nth-type\(\d+\)/,"")),o.join(" > ")}static getSelectorNthChild(t){let r=t.root,n=t.element,o=t.depth,i=o===void 0?4:o,l=[];for(;n&&n.nodeType===Node.ELEMENT_NODE&&n.nodeName.toLowerCase()!=="body"&&n!==r;){let a=n.nodeName.toLowerCase(),s=n.parentNode;if(s&&s.children){let d=Array.from(s.children).indexOf(n)+1;a+=`:nth-child(${d})`}l.unshift(a),n=s}return r&&l.length>0&&(l[0]=l[0].replace(/:nth-child\(\d+\)/,"")),i>0?l.slice(-i).join(" > "):l.join(" > ")}static findSelectorResultIndex(t){let r=t.rootView,n=t.element,o=t.selector,i=r.querySelectorAll(o);return!i||!i.length?-1:Array.from(i).indexOf(n)}static isSelectorValid(t){let r;try{r=t,document.createDocumentFragment().querySelector(r)}catch{return!1}return!0}static verifySelector(t){let r=t.rootView,n=t.element,o=t.selector;try{let i=r.querySelectorAll(o);if(!i||!i.length)return null;let l=Array.from(i).indexOf(n);return l===-1?null:l}catch{return null}}},Je=sa;String.prototype.dot||(String.prototype.dot=function(){return"."+this});var zf=Rt,Lf=Zc,Pf=Je,If=un,Af=cn,zg=Object.freeze({LIST:"LIST",TABLE:"TABLE",ELEMENT:"ELEMENT"}),Uo=class{constructor(t){t||(console.error("[SelectionEngine] Constructor called without config object"),t={onElementClick:()=>{},config:{},onPause:()=>{},onResume:()=>{},onListSelected:()=>{},onModeChanged:()=>{},onElementHovered:()=>{}});let r=this,n=t.onElementClick,o=t.config,i=t.onPause,l=t.onResume,a=t.onListSelected,s=t.onModeChanged,d=t.onElementHovered;this.onElementClick=n,this.onPause=i,this.onResume=l,this.onListSelected=a,this.onModeChanged=s,this.onElementHovered=d,this.config={...o,ignoreViewsWithClass:["panda-extract"]},this.rootView=zf.getShadowRoot();let h=window.location.href,w=$c.find(function(g){return h.includes(g.website)});this.groupFinderType=w?w.type:gr.TYPE_2,this.cursorHighlighter=new If({rootView:this.rootView}),this.collectionHighlighter=new Af({overlayClassName:"panda-highlight-collection-element",highlightedItemClassName:"panda-extract-highlighted-item",rootView:this.rootView}),this.context={mode:M.SELECTION},this.mouseMoveListener=function(g){Ro.ue(r,g)},this.mouseClickListener=function(g){Ro.de(r,g)},this.keyPressListener=function(g){Ro.fe(r,g)},this.pointerDownListener=function(g){g.stopImmediatePropagation(),g.stopPropagation(),g.preventDefault()}}getHoveredSelection(){try{if(!this.selections)return null;let t=this.selections;return t.hierarchy[t.selectedIndex]}catch{return null}}findGroupElement(t){var o;if(this.groupFinderType!==gr.TYPE_1){let i,l=new Lf().findGroupParent(t);return l?{bestCandidate:(o=l.bestCandidate)==null?void 0:o.tableNode,candidates:(i=l.candidates)===null||i===void 0?void 0:i.map(function(a){return a.tableNode})}:null}let r=Pf.getGeneralizedCssSelector({element:t}),n=document.querySelectorAll(r);if(n.length>1){let i=function(l){let a=l.target,s=l.elements,d=[],h=a||s[0];if(!h)return null;for(;h.parentNode&&h.parentNode!==document.body;)h.parentNode.offsetWidth!==0&&h.parentNode.offsetHeight!==0&&d.push(h.parentNode),h=h.parentNode;let w,g=function(){let m=c[i];if(Array.from(s).every(function(y){for(let b=y;b.parentNode;){if(b.parentNode===m)return!0;b=b.parentNode}return!1}))return{v:{commonParent:m,allParents:d,elements:s}}};for(let m=0,y=d;m<y.length;m++)if(w=g())return w.v;return null}({target:t,elements:n});return{bestCandidate:i==null?void 0:i.commonParent,candidates:i==null?void 0:i.allParents}}}updateStateHighlights(t){let r=t.allParents,n=t.selected;r=r?r.filter(function(o){return o.children.length>1}):[],this.highlights={selected:n,all:r}}isIgnoredElement(t){return function(r){return r.id==="shadow-container-panda-extract"||r.closest("shadow-container-panda-extract")!==null}(t)||this.config.ignoreViewsWithClass.some(function(r){return t.closest(r.dot())})||t.tagName==="HTML"}isHighlightedCollectionElement(t){return this.collectionHighlighter.isHighlighted(t)}isHighlightedActiveElement(t){return!1}getMode(){return this.context.mode}startPaginationSelectMode(){this.context.mode=M.SELECT_PAGINATION_BUTTON,this.collectionHighlighter.removeHighlights(),this.highlights=null,this.onModeChanged(M.SELECT_PAGINATION_BUTTON)}stopPaginationSelectMode(){this.context.mode=M.SELECTION,this.highlights=null,this.onModeChanged(M.SELECTION)}startPageDetailsSelectMode(){this.context.mode=M.SELECT_PAGE_DEATILS,this.collectionHighlighter.removeHighlights(),this.highlights=null,this.onModeChanged(M.SELECT_PAGE_DEATILS)}stopPageDetailsSelectMode(){this.context.mode=M.SELECTION,this.highlights=null,this.onModeChanged(M.SELECTION)}startSelectionListMode(){this.context.mode=M.SELECTION_LIST,this.collectionHighlighter.removeHighlights(),this.onModeChanged(M.SELECTION_LIST)}stopSelectionListMode(){this.context.mode=M.SELECTION,this.highlights=null,this.previousCollectionParent=null,this.onModeChanged(M.SELECTION)}resetSelectionMode(){this.stopSelectionListMode(),this.collectionHighlighter.removeHighlights(),this.highlights=null,this.previousCollectionParent=null,this.onModeChanged(M.SELECTION)}setSelectionMode(){this.context.mode=M.SELECTION,this.onModeChanged(M.SELECTION)}highlightIfCollection(t){var l;let r=t.element,n=this.findGroupElement(r),o=n==null?void 0:n.bestCandidate,i=n==null?void 0:n.candidates;if(o&&((l=o.children)==null?void 0:l.length)>1){let a=o,s=i;if(this.previousCollectionParent!==a){if(this.collectionHighlighter.removeHighlights(),a){let d=Array.from(a.children);d&&this.collectionHighlighter.highlight({elements:d})}this.updateStateHighlights({allParents:s,selected:a}),this.previousCollectionParent=a;return}}else this.previousCollectionParent=null,this.collectionHighlighter.removeHighlights()}removeAllHighlights(){this.highlights=null,this.previousCollectionParent=null,this.cursorHighlighter.removeHighlight(),this.collectionHighlighter.removeHighlights()}updateSelectedParent(t){if(this.highlights){let r=this.highlights,n=r.selected,o=r.all;if(n){let i=o.indexOf(n),l=o[t==="UP"?i-1:i+1];if(l){let a=Array.from(l.children);a&&(this.collectionHighlighter.removeHighlights(),this.collectionHighlighter.highlight({elements:a})),this.highlights.selected=l}}}}pause(){document.removeEventListener("mouseover",this.mouseMoveListener,!0),document.removeEventListener("click",this.mouseClickListener,!0),this.onPause()}resume(){document.addEventListener("mouseover",this.mouseMoveListener,!0),document.addEventListener("click",this.mouseClickListener,!0),this.onResume()}attach(){document.addEventListener("mouseover",this.mouseMoveListener,!0),document.addEventListener("click",this.mouseClickListener,!0),document.addEventListener("keydown",this.keyPressListener),document.addEventListener("pointerdown",this.pointerDownListener,!0)}detach(){document.removeEventListener("mouseover",this.mouseMoveListener,!0),document.removeEventListener("click",this.mouseClickListener,!0),document.removeEventListener("keydown",this.keyPressListener),document.removeEventListener("pointerdown",this.pointerDownListener,!0),this.removeAllHighlights()}};var Z=Object.freeze({TEXT:"text",IMAGE_URL:"image-url",LINK_URL:"link-url",EMAIL:"email"}),Pg=Object.freeze({EXTRACT:"EXTRACT",EXTRACT_TEXT:"EXTRACT_TEXT",EXTRACT_HTML:"EXTRACT_HTML",EXTRACT_ATTRIBUTE:"EXTRACT_ATTRIBUTE",EXTRACT_IMAGE_URL:"EXTRACT_IMAGE_URL",EXTRACT_LINK_URL:"EXTRACT_LINK_URL"}),qc=/^(#text|BR|SPAN|EM|STRONG|I|B|U|MARK|SMALL|A)$/i;var hr=class e{static regexAcceptableNodes=qc;static findNearestLinkUrl(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5,n=t,o=0;for(;n&&o<r;n=n.parentElement,o++)if(n.tagName==="A"&&n.href)return n.href;return null}static findNearestImageUrl(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5,n=t,o=0;for(;n&&o<r;n=n.parentElement,o++)if(n.tagName==="IMG"&&n.src)return n.src;let i=t.querySelector("img");return i&&i.src?i.src:null}static findExtractableElements(t){let r=t.elements,n=t.depth,o=n===void 0?1:n,i=t.settings,l=i==null?void 0:i.extractImages,a=i==null?void 0:i.extractAriaLabel,s=[],d=r;return d.length===0?[]:(d.forEach(function(h){let w=[];if(h.nodeType===Node.ELEMENT_NODE){let g=new Set;if(h.querySelectorAll("*").forEach(function(m){let y;if(m.tagName!=="SCRIPT"&&m.tagName!=="STYLE"){let b=(y=m.parentElement)===null||y===void 0||(y=y.innerText)===null||y===void 0?void 0:y.trim();if(!b||!g.has(b)){let P="";if(o>=2)try{let p;if(P=m==null||(p=m.innerText)===null||p===void 0?void 0:p.trim(),g.has(P))return}catch{}else try{let p;if(P=m==null||(p=m.innerText)===null||p===void 0?void 0:p.trim(),g.has(P))return}catch{}P&&(g.add(P),w.push({type:Z.TEXT,data:P,element:m}))}}}),h.tagName==="A"){let m=h.href;if(m&&!m.toLowerCase().startsWith("javascript:")){w.push({type:Z.LINK_URL,data:m,element:h});let y=h.innerText.trim();y&&w.push({type:Z.TEXT,data:y,element:h})}}if(h.querySelectorAll("a").forEach(function(m){let y=m.href;if(y&&!y.toLowerCase().startsWith("javascript:")){w.push({type:Z.LINK_URL,data:y,element:m});let b=m.innerText.trim();b&&w.push({type:Z.TEXT,data:b,element:m})}}),l||l===void 0){if(h.tagName==="IMG"){let m=h.src;m&&w.push({type:Z.IMAGE_URL,data:m,element:h})}h.querySelectorAll("img").forEach(function(m){let y=m.src;y&&w.push({type:Z.IMAGE_URL,data:y,element:m})}),h.querySelectorAll("*").forEach(function(m){let y=window.getComputedStyle(m).backgroundImage;if(y&&y.startsWith("url(")){let b=y.slice(4,-1).replace(/["']/g,"");b&&w.push({type:Z.IMAGE_URL,data:b,element:m})}})}a&&h.querySelectorAll("*").forEach(function(m){let y=m.getAttribute("aria-label");y&&(Array.from(m.childNodes).some(function(b){return b.nodeType===Node.TEXT_NODE&&b.textContent.trim()!==""})||w.push({type:Z.TEXT,data:y,element:m}))})}s.push(w)}),s=e.cleanupExtractableElements(s),s.forEach(function(h){h.map(function(g){return g.element}).filter(function(g){return g}).forEach(function(g){g.style&&(g.style.outline="1px dotted blue",g.classList.add("panda-extractable-highlight"))})}),{children:d,extractableElements:s})}static findExtractableElementsAsync(t){let r=t.elements,n=t.depth,o=n===void 0?1:n,i=t.settings;return new Promise(function(l,a){try{l(e.findExtractableElements({elements:r,depth:o,settings:i}))}catch(s){a(s)}})}static clearExtractableHighlights(t){(t||document.body).querySelectorAll(".panda-extractable-highlight").forEach(function(r){r.style.outline="none",r.classList.remove("panda-extractable-highlight")})}static cleanupExtractableElements(t){let r=t.filter(function(n){return Object.keys(n).length>0});return r=r.map(function(n){let o=new Map,i=[function(l){return l==="javascript:void(0)"},function(l){return l.length==1&&!/^[a-zA-Z0-9]+$/.test(l)}];return n.forEach(function(l){let a;!o.has(l.data)&&(a=l.data,!i.some(function(s){return s(a)}))&&o.set(l.data,l)}),Array.from(o.values())})}static findSimpleExtractableElements(t){let r,n=t.element,o=[],i=(r=n.innerText)===null||r===void 0?void 0:r.trim();i&&o.push({type:Z.TEXT,data:i,element:n});let l=n.querySelectorAll("a");if(n.tagName==="A"&&n.href&&!n.href.startsWith("javascript:")){let a=n.href;a&&o.push({type:Z.LINK_URL,data:a,element:n})}else if(l.length===1&&!l[0].href.startsWith("javascript:")){let a=l[0].href;a&&o.push({type:Z.LINK_URL,data:a,element:l[0]})}if(n.tagName==="IMG"&&n.src){let a=n.src;a&&o.push({type:Z.IMAGE_URL,data:a,element:n})}return o}static findSimpleExtractableElementsAsync(t){let r=t.element;return new Promise(function(n,o){try{n(e.findSimpleExtractableElements({element:r}))}catch(i){o(i)}})}static extractText(t){let r;return((r=t.textContent)===null||r===void 0?void 0:r.trim())||null}static extractHtml(t){return t.innerHTML}static extractAttribute(t,r){return t.getAttribute(r)}static extractImageUrl(t){let r=t.src;if(!r){let n=window.getComputedStyle(t).backgroundImage;n.startsWith("url(")&&(r=n.slice(4,-1).replace(/["']/g,""))}return r||=e.findNearestImageUrl(t),r}static extractLinkUrl(t){let r=t.href;return r||=e.findNearestLinkUrl(t),r}static extractEmailsFromText(t){return(t==null?void 0:t.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g))||[]}static extractPhoneNumbersFromText(t){return(t==null?void 0:t.match(/(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?[\d\s-]{3,15}\d/g))||[]}static extractAllData(t){if(!t)return null;let r={},n=this.extractText(t);if(n){r.text=n;let s=this.extractEmailsFromText(n);s.length>0&&(r.emails=s);let d=this.extractPhoneNumbersFromText(n);d.length>0&&(r.phones=d)}r.html=this.extractHtml(t);let o=this.extractLinkUrl(t);o&&(r.linkUrl=o);let i=this.extractImageUrl(t);i&&(r.imageUrl=i);let l=t.id;l&&(r.id=l);let a=t.className;return a&&(r.className=a),r.tagName=t.tagName.toLowerCase(),r.emails&&r.emails.length>0?r.type=Z.EMAIL:r.imageUrl?r.type=Z.IMAGE_URL:r.linkUrl?r.type=Z.LINK_URL:r.text&&(r.type=Z.TEXT),r}};var Jc={sendMessageToBackground:async e=>new Promise((t,r)=>{chrome.runtime.sendMessage(e,n=>{chrome.runtime.lastError?r(chrome.runtime.lastError):t(n)})}),sendMessageToTab:async(e,t)=>new Promise((r,n)=>{chrome.tabs.sendMessage(e,t,o=>{chrome.runtime.lastError?n(chrome.runtime.lastError):r(o)})}),sendMessageToAllTabs:async e=>{let r=(await chrome.tabs.query({})).map(n=>Jc.sendMessageToTab(n.id,e).catch(()=>null));return Promise.all(r)}},ed=Jc;var td=({className:e})=>E.default.createElement("svg",{className:e,viewBox:"0 0 24 24",fill:"currentColor"},E.default.createElement("circle",{cx:"12",cy:"12",r:"10"})),Of=({className:e})=>E.default.createElement("svg",{className:e,viewBox:"0 0 24 24",fill:"currentColor"},E.default.createElement("rect",{x:"6",y:"4",width:"4",height:"16"}),E.default.createElement("rect",{x:"14",y:"4",width:"4",height:"16"})),Mf=({className:e})=>E.default.createElement("svg",{className:e,viewBox:"0 0 24 24",fill:"currentColor"},E.default.createElement("path",{d:"M8 5v14l11-7z"}));function Df(e){if(e.id)return`#${e.id}`;if(e.className&&typeof e.className=="string"){let t=e.className.split(" ").filter(r=>r&&!r.startsWith("panda-"));if(t.length>0)return`.${t[0]}`}return e.tagName.toLowerCase()}var Rf=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,Uf=()=>{let[e,t]=(0,E.useState)([]),[r,n]=(0,E.useState)([]),[o,i]=(0,E.useState)(null),[l,a]=(0,E.useState)({x:0,y:0}),[s,d]=(0,E.useState)(!1),[h,w]=(0,E.useState)([]),[g,m]=(0,E.useState)(!1),y=(0,E.useRef)(null),b=(0,E.useCallback)(v=>{var S;let k=((S=v.data)==null?void 0:S.hoveredSelection)||v.data.element;k&&t(N=>{let _=(T,D)=>{let le=D.parentElement;for(;le;){if(le===T)return!0;le=le.parentElement}return!1};return[...N.filter(T=>!_(T,k)).filter(T=>!_(k,T)),k]})},[]),P=(0,E.useCallback)(v=>{let{element:k,event:S}=v;k&&(i(k),S&&a({x:S.clientX+10,y:S.clientY+10}),hr.findSimpleExtractableElementsAsync({element:k}).then(N=>{n(N||[])}))},[]),p=async()=>{let v=e.filter(Boolean);return(await Promise.all(v.map(N=>hr.findSimpleExtractableElementsAsync({element:N})))).flat().filter(Boolean).map(N=>{let{element:_,type:X}=N;if(!_||!_.parentElement)return null;let T=[];try{let D=Je.getGeneralizedCssSelector({element:_});if(D){let le=Je.verifySelector({rootView:document,element:_,selector:D});le!==null&&T.push({type:"general",selector:D,index:le,order:3})}}catch{}try{let D=Je.getSelectorNthType({element:_});if(D){let le=Je.verifySelector({rootView:document,element:_,selector:D});le!==null&&T.push({type:"nthType",selector:D,index:le,order:2})}}catch{}try{let D=Je.getSelectorNthChild({element:_});if(D){let le=Je.verifySelector({rootView:document,element:_,selector:D});le!==null&&T.push({type:"nthChild",selector:D,index:le,order:1})}}catch{}return T.length>0?{elementId:Rf(),name:Df(_),type:X,selectors:T}:null}).filter(Boolean)},u=async()=>{let v=await Promise.all(e.map(async k=>{let S=await hr.findSimpleExtractableElementsAsync({element:k});return{element:k,extractables:S}}));w(v),d(!0)},f=async()=>{let v=await p();ed.sendMessageToBackground({action:"page-details-selected",data:{selectors:v}}).catch(k=>{console.error("Failed to send selectors:",k)})};return(0,E.useEffect)(()=>(y.current=new Uo({config:{},onElementClick:b,onListSelected:()=>{},onPause:()=>{},onResume:()=>{},onModeChanged:()=>{},onElementHovered:P}),y.current.attach(),y.current.startPageDetailsSelectMode(),()=>{y.current.detach()}),[b,P]),(0,E.useEffect)(()=>{document.querySelectorAll(".panda-highlight-child-element-active").forEach(v=>{v.classList.remove("panda-highlight-child-element-active")}),e.forEach(v=>{v&&v.classList.add("panda-highlight-child-element-active")})},[e]),E.default.createElement(E.default.Fragment,null,E.default.createElement("div",{className:"fixed top-4 right-4 z-[999999999]"},E.default.createElement("div",{className:"bg-zinc-900/95 backdrop-blur-lg shadow-2xl rounded-xl p-3 text-white w-[260px] border border-white/10 ring-1 ring-white/5 animate-fade-in"},E.default.createElement("div",{className:"flex items-center gap-2.5 mb-3"},E.default.createElement("div",{className:"relative flex items-center justify-center w-7 h-7 bg-orange-500/10 rounded-full"},E.default.createElement(td,{className:"text-orange-400 h-2 w-2 z-10"}),E.default.createElement("div",{className:"absolute inset-0 rounded-full animate-ping-slow"},E.default.createElement(td,{className:"text-orange-400/30 h-2 w-2"}))),E.default.createElement("div",{className:"flex flex-col gap-0.5"},E.default.createElement("span",{className:"text-sm font-medium text-white/90"},"Element Selector"),E.default.createElement("span",{className:"text-xs text-white/60"},e.length," ",e.length===1?"element":"elements"," selected"))),E.default.createElement("div",{className:"flex gap-2 mb-3"},E.default.createElement("button",{onClick:u,className:"flex-1 px-3 py-2 bg-gradient-to-b from-zinc-700/80 to-zinc-800/80 hover:from-zinc-600/80 hover:to-zinc-700/80 text-xs font-medium rounded-lg transition-all duration-200 border border-white/5"},"Preview"),E.default.createElement("button",{onClick:()=>{g?y.current.resume():y.current.pause(),m(!g)},className:`flex-1 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 border flex items-center justify-center gap-1.5 ${g?"bg-gradient-to-b from-emerald-500/90 to-emerald-600/90 hover:from-emerald-400/90 hover:to-emerald-500/90 border-emerald-400/30":"bg-gradient-to-b from-amber-500/90 to-amber-600/90 hover:from-amber-400/90 hover:to-amber-500/90 border-amber-400/30"}`},g?E.default.createElement(Mf,{className:"h-3 w-3"}):E.default.createElement(Of,{className:"h-3 w-3"}),g?"Resume":"Pause")),E.default.createElement("div",{className:"space-y-1.5 mb-3 bg-zinc-800/50 rounded-lg p-2 border border-white/5"},E.default.createElement("div",{className:"flex items-center justify-between text-xs p-1 rounded-md hover:bg-zinc-700/30"},E.default.createElement("div",{className:"flex gap-1"},E.default.createElement("kbd",{className:"px-2 py-0.5 bg-black/40 rounded text-sm font-medium border border-white/10"},"\u2191"),E.default.createElement("kbd",{className:"px-2 py-0.5 bg-black/40 rounded text-sm font-medium border border-white/10"},"\u2193")),E.default.createElement("span",{className:"text-sm text-white/70"},"Adjust selection")),E.default.createElement("div",{className:"flex items-center justify-between text-xs p-1 rounded-md hover:bg-zinc-700/30"},E.default.createElement("kbd",{className:"px-2 py-0.5 bg-black/40 rounded text-sm font-medium border border-white/10"},"Click"),E.default.createElement("span",{className:"text-sm text-white/70"},"Select element"))),E.default.createElement("button",{onClick:f,className:"w-full px-3 py-2.5 bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-xs font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20 border border-indigo-400/30"},"Complete Selection"))),o&&E.default.createElement("div",{className:"fixed bg-zinc-900/95 backdrop-blur-md text-white px-2 py-1.5 rounded-lg shadow-xl text-xs pointer-events-none panda-z-9 transition-all duration-200 ease-in-out border border-white/5",style:{top:`${l.y}px`,left:`${l.x}px`,opacity:o?1:0,transform:`scale(${o?1:.95})`}},r.map((v,k)=>{var S,N;return E.default.createElement("p",{key:k,className:"flex items-center gap-2 whitespace-nowrap"},E.default.createElement("span",{className:"px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded-md text-[10px] font-medium"},v.type),E.default.createElement("span",{className:"text-zinc-300"},(S=v.data)==null?void 0:S.slice(0,50),((N=v.data)==null?void 0:N.length)>50?"...":""))})),s&&E.default.createElement("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999999999] p-4"},E.default.createElement("div",{className:"bg-zinc-900/95 rounded-xl p-4 max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col shadow-2xl border border-white/5"},E.default.createElement("div",{className:"flex justify-between items-center pb-3 border-b border-zinc-800/50"},E.default.createElement("div",{className:"flex items-center gap-2"},E.default.createElement("h3",{className:"text-sm font-medium text-white"},"Preview Data"),E.default.createElement("span",{className:"px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-xs"},h.length)),E.default.createElement("button",{onClick:()=>d(!1),className:"h-6 w-6 flex items-center justify-center rounded-md hover:bg-zinc-800 text-zinc-400"},"\xD7")),E.default.createElement("div",{className:"overflow-y-auto flex-1 pr-2"},E.default.createElement("div",{className:"space-y-2 py-3"},h.map((v,k)=>E.default.createElement("div",{key:k,className:"bg-zinc-800/30 rounded-lg overflow-hidden"},E.default.createElement("div",{className:"p-2 space-y-1.5"},v.extractables.map((S,N)=>E.default.createElement("div",{key:N,className:"flex items-center gap-2 text-xs p-1.5 rounded-md hover:bg-zinc-800/50"},E.default.createElement("span",{className:"px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-medium"},S.type),E.default.createElement("span",{className:"text-zinc-300 break-all"},S.data)))))))),E.default.createElement("div",{className:"pt-3 border-t border-zinc-800/50"},E.default.createElement("button",{onClick:()=>d(!1),className:"w-full px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-md transition-colors text-xs font-medium"},"Close")))),E.default.createElement("style",{jsx:!0},`
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `))};(()=>{String.prototype.dot=function(){return`.${this}`},HTMLCollection.prototype.toArray=function(){return Array.from(this)},NodeList.prototype.toArray=function(){return Array.from(this)};let e=Rt.getShadowRoot(),t=document.createElement("div");t.id="app-container",e.appendChild(t),rd.default.createRoot(t).render(E.default.createElement(Uf,null))})();})();
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
*/
})();
