/******/!function(t){/******/
/******/
// The require function
/******/
function e(n){/******/
/******/
// Check if module is in cache
/******/
if(i[n])/******/
return i[n].exports;/******/
/******/
// Create a new module (and put it into the cache)
/******/
var s=i[n]={/******/
i:n,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}// webpackBootstrap
/******/
// The module cache
/******/
var i={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
e.m=t,/******/
/******/
// expose the module cache
/******/
e.c=i,/******/
/******/
// identity function for calling harmony imports with the correct context
/******/
e.i=function(t){return t},/******/
/******/
// define getter function for harmony exports
/******/
e.d=function(t,i,n){/******/
e.o(t,i)||/******/
Object.defineProperty(t,i,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:n})},/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
e.n=function(t){/******/
var i=t&&t.__esModule?/******/
function(){return t.default}:/******/
function(){return t};/******/
/******/
return e.d(i,"a",i),i},/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},/******/
/******/
// __webpack_public_path__
/******/
e.p="",e(e.s=108)}([/* 0 */
/***/
function(t,e,i){var n,s;n=[i(14),i(1),i(105),i(32),i(60),i(62),i(29),i(26),i(106),i(28),i(61),i(104),i(8),i(37)],void 0!==(s=function(t,e,i,n,s,o,a,r,l,h,c,u,d,p){"use strict";function f(t){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var e=!!t&&"length"in t&&t.length,i=g.type(t);return"function"!==i&&!g.isWindow(t)&&("array"===i||0===e||"number"==typeof e&&e>0&&e-1 in t)}var
// Define a local copy of jQuery
g=function(t,e){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new g.fn.init(t,e)},
// Used by jQuery.camelCase as callback to replace()
m=function(t,e){return e.toUpperCase()};
// Populate the class2type map
return g.fn=g.prototype={
// The current version of jQuery being used
jquery:"3.2.1",constructor:g,
// The default length of a jQuery object is 0
length:0,toArray:function(){return n.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(t){
// Return all the elements in a clean array
// Return all the elements in a clean array
return null==t?n.call(this):t<0?this[t+this.length]:this[t]},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(t){
// Build a new jQuery matched element set
var e=g.merge(this.constructor(),t);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return e.prevObject=this,e},
// Execute a callback for every element in the matched set.
each:function(t){return g.each(this,t)},map:function(t){return this.pushStack(g.map(this,function(e,i){return t.call(e,i,e)}))},slice:function(){return this.pushStack(n.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,i=+t+(t<0?e:0);return this.pushStack(i>=0&&i<e?[this[i]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:o,sort:t.sort,splice:t.splice},g.extend=g.fn.extend=function(){var t,e,i,n,s,o,a=arguments[0]||{},r=1,l=arguments.length,h=!1;for(
// Handle a deep copy situation
"boolean"==typeof a&&(h=a,
// Skip the boolean and the target
a=arguments[r]||{},r++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof a||g.isFunction(a)||(a={}),
// Extend jQuery itself if only one argument is passed
r===l&&(a=this,r--);r<l;r++)
// Only deal with non-null/undefined values
if(null!=(t=arguments[r]))
// Extend the base object
for(e in t)i=a[e],n=t[e],
// Prevent never-ending loop
a!==n&&(
// Recurse if we're merging plain objects or arrays
h&&n&&(g.isPlainObject(n)||(s=Array.isArray(n)))?(s?(s=!1,o=i&&Array.isArray(i)?i:[]):o=i&&g.isPlainObject(i)?i:{},
// Never move original objects, clone them
a[e]=g.extend(h,o,n)):void 0!==n&&(a[e]=n));
// Return the modified object
return a},g.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+("3.2.1"+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===g.type(t)},isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var e=g.type(t);
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},isPlainObject:function(t){var e,n;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Objects with no prototype (e.g., `Object.create( null )`) are plain
// Objects with prototype are plain iff they were constructed by a global Object function
return!(!t||"[object Object]"!==l.call(t))&&(!(e=i(t))||"function"==typeof(n=h.call(e,"constructor")&&e.constructor)&&c.call(n)===u)},isEmptyObject:function(t){/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?r[l.call(t)]||"object":typeof t},
// Evaluates a script in a global context
globalEval:function(t){p(t)},
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 13
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(t){return t.replace(/^-ms-/,"ms-").replace(/-([a-z])/g,m)},each:function(t,e){var i,n=0;if(f(t))for(i=t.length;n<i&&!1!==e.call(t[n],n,t[n]);n++);else for(n in t)if(!1===e.call(t[n],n,t[n]))break;return t},
// Support: Android <=4.0 only
trim:function(t){return null==t?"":(t+"").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},
// results is for internal usage only
makeArray:function(t,e){var i=e||[];return null!=t&&(f(Object(t))?g.merge(i,"string"==typeof t?[t]:t):o.call(i,t)),i},inArray:function(t,e,i){return null==e?-1:a.call(e,t,i)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(t,e){for(var i=+e.length,n=0,s=t.length;n<i;n++)t[s++]=e[n];return t.length=s,t},grep:function(t,e,i){
// Go through the array, only saving the items
// that pass the validator function
for(var n=[],s=0,o=t.length,a=!i;s<o;s++)!e(t[s],s)!==a&&n.push(t[s]);return n},
// arg is for internal usage only
map:function(t,e,i){var n,o,a=0,r=[];
// Go through the array, translating each of the items to their new values
if(f(t))for(n=t.length;a<n;a++)null!=(o=e(t[a],a,i))&&r.push(o);else for(a in t)null!=(o=e(t[a],a,i))&&r.push(o);
// Flatten any nested arrays
return s.apply([],r)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(t,e){var i,s,o;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof e&&(i=t[e],e=t,t=i),g.isFunction(t))
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return s=n.call(arguments,2),o=function(){return t.apply(e||this,s.concat(n.call(arguments)))},o.guid=t.guid=t.guid||g.guid++,o},now:Date.now,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:d}),"function"==typeof Symbol&&(g.fn[Symbol.iterator]=t[Symbol.iterator]),g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){r["[object "+e+"]"]=e.toLowerCase()}),g}.apply(e,n))&&(t.exports=s)},/* 1 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";return window.document}.call(e,i,e,t))&&(t.exports=n)},/* 2 */
/***/
function(t,e,i){var n,s;n=[i(101)],void 0!==(s=function(){"use strict"}.apply(e,n))&&(t.exports=s)},/* 3 */
/***/
function(t,e,i){var n,s;n=[i(0),i(1),i(39),i(58)],void 0!==(s=function(t,e,i){"use strict";
// A central reference to the root jQuery(document)
var n,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
s=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,o=t.fn.init=function(o,a,r){var l,h;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!o)return this;
// Handle HTML strings
if(
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
r=r||n,"string"==typeof o){
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
l="<"===o[0]&&">"===o[o.length-1]&&o.length>=3?[null,o,null]:s.exec(o))||!l[1]&&a)return!a||a.jquery?(a||r).find(o):this.constructor(a).find(o);
// HANDLE: $(html) -> $(array)
if(l[1]){
// HANDLE: $(html, props)
if(a=a instanceof t?a[0]:a,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
t.merge(this,t.parseHTML(l[1],a&&a.nodeType?a.ownerDocument||a:e,!0)),i.test(l[1])&&t.isPlainObject(a))for(l in a)
// Properties of context are called as methods if possible
t.isFunction(this[l])?this[l](a[l]):this.attr(l,a[l]);return this}
// Inject the element directly into the jQuery object
return h=e.getElementById(l[2]),h&&(this[0]=h,this.length=1),this}
// Execute immediately if ready is not present
return o.nodeType?(this[0]=o,this.length=1,this):t.isFunction(o)?void 0!==r.ready?r.ready(o):o(t):t.makeArray(o,this)};
// Give the init function the jQuery prototype for later instantiation
// Initialize central reference
return o.prototype=t.fn,n=t(e),o}.apply(e,n))&&(t.exports=s)},/* 4 */
/***/
function(t,e,i){var n,s;n=[i(48)],void 0!==(s=function(t){"use strict";return new t}.apply(e,n))&&(t.exports=s)},/* 5 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";function t(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}return t}.call(e,i,e,t))&&(t.exports=n)},/* 6 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";
// Only count HTML whitespace
// Other whitespace should count in values
// https://html.spec.whatwg.org/multipage/infrastructure.html#space-character
return/[^\x20\t\r\n\f]+/g}.call(e,i,e,t))&&(t.exports=n)},/* 7 */
/***/
function(t,e,i){var n,s;n=[i(0)],void 0!==(s=function(t){"use strict";
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var e=function(i,n,s,o,a,r,l){var h=0,c=i.length,u=null==s;
// Sets many values
if("object"===t.type(s)){a=!0;for(h in s)e(i,n,h,s[h],!0,r,l)}else if(void 0!==o&&(a=!0,t.isFunction(o)||(l=!0),u&&(
// Bulk operations run against the entire set
l?(n.call(i,o),n=null):(u=n,n=function(e,i,n){return u.call(t(e),n)})),n))for(;h<c;h++)n(i[h],s,l?o:o.call(i[h],h,n(i[h],s)));
// Gets
return a?i:u?n.call(i):c?n(i[0],s):r};return e}.apply(e,n))&&(t.exports=s)},/* 8 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";
// All support tests are defined in their respective modules.
return{}}.call(e,i,e,t))&&(t.exports=n)},/* 9 */
/***/
function(t,e,i){var n,s;n=[i(0),i(1),i(6),i(74),i(34),i(35),i(3),i(72),i(24),i(10),i(57)],void 0!==(s=function(t,e,i,n,s,o){"use strict";
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function a(e){
// dataTypeExpression is optional and defaults to "*"
return function(n,s){"string"!=typeof n&&(s=n,n="*");var o,a=0,r=n.toLowerCase().match(i)||[];if(t.isFunction(s))
// For each dataType in the dataTypeExpression
for(;o=r[a++];)
// Prepend if requested
"+"===o[0]?(o=o.slice(1)||"*",(e[o]=e[o]||[]).unshift(s)):(e[o]=e[o]||[]).push(s)}}
// Base inspection function for prefilters and transports
function r(e,i,n,s){function o(l){var h;return a[l]=!0,t.each(e[l]||[],function(t,e){var l=e(i,n,s);return"string"!=typeof l||r||a[l]?r?!(h=l):void 0:(i.dataTypes.unshift(l),o(l),!1)}),h}var a={},r=e===g;return o(i.dataTypes[0])||!a["*"]&&o("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function l(e,i){var n,s,o=t.ajaxSettings.flatOptions||{};for(n in i)void 0!==i[n]&&((o[n]?e:s||(s={}))[n]=i[n]);return s&&t.extend(!0,e,s),e}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function h(t,e,i){
// Remove auto dataType and get content-type in the process
for(var n,s,o,a,r=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=t.mimeType||e.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(n)for(s in r)if(r[s]&&r[s].test(n)){l.unshift(s);break}
// Check to see if we have a response for the expected dataType
if(l[0]in i)o=l[0];else{
// Try convertible dataTypes
for(s in i){if(!l[0]||t.converters[s+" "+l[0]]){o=s;break}a||(a=s)}
// Or just use first one
o=o||a}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==l[0]&&l.unshift(o),i[o]}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function c(t,e,i,n){var s,o,a,r,l,h={},
// Work with a copy of dataTypes in case we need to modify it for conversion
c=t.dataTypes.slice();
// Create converters map with lowercased keys
if(c[1])for(a in t.converters)h[a.toLowerCase()]=t.converters[a];
// Convert to each sequential dataType
for(o=c.shift();o;)if(t.responseFields[o]&&(i[t.responseFields[o]]=e),
// Apply the dataFilter if provided
!l&&n&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=o,o=c.shift())
// There's only work to do if current dataType is non-auto
if("*"===o)o=l;else if("*"!==l&&l!==o){
// If none found, seek a pair
if(!(
// Seek a direct converter
a=h[l+" "+o]||h["* "+o]))for(s in h)if(
// If conv2 outputs current
r=s.split(" "),r[1]===o&&(
// If prev can be converted to accepted input
a=h[l+" "+r[0]]||h["* "+r[0]])){
// Condense equivalence converters
!0===a?a=h[s]:!0!==h[s]&&(o=r[0],c.unshift(r[1]));break}
// Apply converter (if not an equivalence)
if(!0!==a)
// Unless errors are allowed to bubble, catch and return them
if(a&&t.throws)e=a(e);else try{e=a(e)}catch(t){return{state:"parsererror",error:a?t:"No conversion from "+l+" to "+o}}}return{state:"success",data:e}}var u=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
d=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,p=/^(?:GET|HEAD)$/,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
f={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
g={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
m="*/".concat("*"),
// Anchor tag for parsing the document origin
v=e.createElement("a");return v.href=n.href,t.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:n.href,type:"GET",isLocal:d.test(n.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":m,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":t.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,i){
// Building a settings object
// Extending ajaxSettings
return i?l(l(e,t.ajaxSettings),i):l(t.ajaxSettings,e)},ajaxPrefilter:a(f),ajaxTransport:a(g),
// Main method
ajax:function(a,l){
// Callback for when everything is done
function d(e,i,n,s){var o,a,r,l,u,d=i;
// Ignore repeat invocations
D||(D=!0,
// Clear timeout if it exists
x&&window.clearTimeout(x),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
_=void 0,
// Cache response headers
y=s||"",
// Set readyState
z.readyState=e>0?4:0,
// Determine if successful
o=e>=200&&e<300||304===e,
// Get response data
n&&(l=h(S,z,n)),
// Convert no matter what (that way responseXXX fields are always set)
l=c(S,l,z,o),
// If successful, handle type chaining
o?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
S.ifModified&&(u=z.getResponseHeader("Last-Modified"),u&&(t.lastModified[b]=u),(u=z.getResponseHeader("etag"))&&(t.etag[b]=u)),
// if no content
204===e||"HEAD"===S.type?d="nocontent":304===e?d="notmodified":(d=l.state,a=l.data,r=l.error,o=!r)):(
// Extract error from statusText and normalize for non-aborts
r=d,!e&&d||(d="error",e<0&&(e=0))),
// Set data for the fake xhr object
z.status=e,z.statusText=(i||d)+"",
// Success/Error
o?A.resolveWith(M,[a,d,z]):A.rejectWith(M,[z,d,r]),
// Status-dependent callbacks
z.statusCode(E),E=void 0,C&&P.trigger(o?"ajaxSuccess":"ajaxError",[z,S,o?a:r]),
// Complete
N.fireWith(M,[z,d]),C&&(P.trigger("ajaxComplete",[z,S]),
// Handle the global AJAX counter
--t.active||t.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof a&&(l=a,a=void 0),
// Force options to be an object
l=l||{};var _,
// URL without anti-cache param
b,
// Response headers
y,w,
// timeout handle
x,
// Url cleanup var
k,
// Request state (becomes false upon send and true upon completion)
D,
// To know if global events are to be dispatched
C,
// Loop variable
T,
// uncached part of the url
I,
// Create the final options object
S=t.ajaxSetup({},l),
// Callbacks context
M=S.context||S,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
P=S.context&&(M.nodeType||M.jquery)?t(M):t.event,
// Deferreds
A=t.Deferred(),N=t.Callbacks("once memory"),
// Status-dependent callbacks
E=S.statusCode||{},
// Headers (they are sent all at once)
O={},H={},
// Default abort message
F="canceled",
// Fake xhr
z={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(t){var e;if(D){if(!w)for(w={};e=u.exec(y);)w[e[1].toLowerCase()]=e[2];e=w[t.toLowerCase()]}return null==e?null:e},
// Raw string
getAllResponseHeaders:function(){return D?y:null},
// Caches the header
setRequestHeader:function(t,e){return null==D&&(t=H[t.toLowerCase()]=H[t.toLowerCase()]||t,O[t]=e),this},
// Overrides response content-type header
overrideMimeType:function(t){return null==D&&(S.mimeType=t),this},
// Status-dependent callbacks
statusCode:function(t){var e;if(t)if(D)
// Execute the appropriate callbacks
z.always(t[z.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(e in t)E[e]=[E[e],t[e]];return this},
// Cancel the request
abort:function(t){var e=t||F;return _&&_.abort(e),d(0,e),this}};
// A cross-domain request is in order when the origin doesn't match the current origin.
if(
// Attach deferreds
A.promise(z),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
S.url=((a||S.url||n.href)+"").replace(/^\/\//,n.protocol+"//"),
// Alias method option to type as per ticket #12004
S.type=l.method||l.type||S.method||S.type,
// Extract dataTypes list
S.dataTypes=(S.dataType||"*").toLowerCase().match(i)||[""],null==S.crossDomain){k=e.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 13
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{k.href=S.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
k.href=k.href,S.crossDomain=v.protocol+"//"+v.host!=k.protocol+"//"+k.host}catch(t){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
S.crossDomain=!0}}
// If request was aborted inside a prefilter, stop there
if(
// Convert data if not already a string
S.data&&S.processData&&"string"!=typeof S.data&&(S.data=t.param(S.data,S.traditional)),
// Apply prefilters
r(f,S,l,z),D)return z;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
C=t.event&&S.global,
// Watch for a new set of requests
C&&0==t.active++&&t.event.trigger("ajaxStart"),
// Uppercase the type
S.type=S.type.toUpperCase(),
// Determine if request has content
S.hasContent=!p.test(S.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
b=S.url.replace(/#.*$/,""),
// More options handling for requests with no content
S.hasContent?S.data&&S.processData&&0===(S.contentType||"").indexOf("application/x-www-form-urlencoded")&&(S.data=S.data.replace(/%20/g,"+")):(
// Remember the hash so we can put it back
I=S.url.slice(b.length),
// If data is available, append data to url
S.data&&(b+=(o.test(b)?"&":"?")+S.data,
// #9682: remove data so that it's not used in an eventual retry
delete S.data),
// Add or update anti-cache param if needed
!1===S.cache&&(b=b.replace(/([?&])_=[^&]*/,"$1"),I=(o.test(b)?"&":"?")+"_="+s+++I),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
S.url=b+I),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
S.ifModified&&(t.lastModified[b]&&z.setRequestHeader("If-Modified-Since",t.lastModified[b]),t.etag[b]&&z.setRequestHeader("If-None-Match",t.etag[b])),
// Set the correct header, if data is being sent
(S.data&&S.hasContent&&!1!==S.contentType||l.contentType)&&z.setRequestHeader("Content-Type",S.contentType),
// Set the Accepts header for the server, depending on the dataType
z.setRequestHeader("Accept",S.dataTypes[0]&&S.accepts[S.dataTypes[0]]?S.accepts[S.dataTypes[0]]+("*"!==S.dataTypes[0]?", "+m+"; q=0.01":""):S.accepts["*"]);
// Check for headers option
for(T in S.headers)z.setRequestHeader(T,S.headers[T]);
// Allow custom headers/mimetypes and early abort
if(S.beforeSend&&(!1===S.beforeSend.call(M,z,S)||D))
// Abort if not done already and return
return z.abort();
// If no transport, we auto-abort
if(
// Aborting is no longer a cancellation
F="abort",
// Install callbacks on deferreds
N.add(S.complete),z.done(S.success),z.fail(S.error),
// Get transport
_=r(g,S,l,z)){
// If request was aborted inside ajaxSend, stop there
if(z.readyState=1,
// Send global event
C&&P.trigger("ajaxSend",[z,S]),D)return z;
// Timeout
S.async&&S.timeout>0&&(x=window.setTimeout(function(){z.abort("timeout")},S.timeout));try{D=!1,_.send(O,d)}catch(t){
// Rethrow post-completion exceptions
if(D)throw t;
// Propagate others as results
d(-1,t)}}else d(-1,"No Transport");return z},getJSON:function(e,i,n){return t.get(e,i,n,"json")},getScript:function(e,i){return t.get(e,void 0,i,"script")}}),t.each(["get","post"],function(e,i){t[i]=function(e,n,s,o){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return t.isFunction(n)&&(o=o||s,s=n,n=void 0),t.ajax(t.extend({url:e,type:i,dataType:o,data:n,success:s},t.isPlainObject(e)&&e))}}),t}.apply(e,n))&&(t.exports=s)},/* 10 */
/***/
function(t,e,i){var n,s;n=[i(0),i(32),i(18)],void 0!==(s=function(t,e){"use strict";function i(t){return t}function n(t){throw t}function s(e,i,n,s){var o;try{
// Check for promise aspect first to privilege synchronous behavior
e&&t.isFunction(o=e.promise)?o.call(e).done(i).fail(n):e&&t.isFunction(o=e.then)?o.call(e,i,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
i.apply(void 0,[e].slice(s))}catch(e){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}return t.extend({Deferred:function(e){var s=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",t.Callbacks("memory"),t.Callbacks("memory"),2],["resolve","done",t.Callbacks("once memory"),t.Callbacks("once memory"),0,"resolved"],["reject","fail",t.Callbacks("once memory"),t.Callbacks("once memory"),1,"rejected"]],o="pending",a={state:function(){return o},always:function(){return r.done(arguments).fail(arguments),this},catch:function(t){return a.then(null,t)},
// Keep pipe for back-compat
pipe:function(){var e=arguments;return t.Deferred(function(i){t.each(s,function(n,s){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var o=t.isFunction(e[s[4]])&&e[s[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
r[s[1]](function(){var e=o&&o.apply(this,arguments);e&&t.isFunction(e.promise)?e.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[s[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function(e,o,a){function r(e,s,o,a){return function(){var h=this,c=arguments,u=function(){var u,d;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(e<l)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((u=o.apply(h,c))===s.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
d=u&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof u||"function"==typeof u)&&u.then,
// Handle a returned thenable
t.isFunction(d)?
// Special processors (notify) just wait for resolution
a?d.call(u,r(l,s,i,a),r(l,s,n,a)):(
// ...and disregard older resolution values
l++,d.call(u,r(l,s,i,a),r(l,s,n,a),r(l,s,i,s.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
o!==i&&(h=void 0,c=[u]),
// Process the value(s)
// Default process is resolve
(a||s.resolveWith)(h,c))}},
// Only normal processors (resolve) catch and reject exceptions
d=a?u:function(){try{u()}catch(i){t.Deferred.exceptionHook&&t.Deferred.exceptionHook(i,d.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
e+1>=l&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
o!==n&&(h=void 0,c=[i]),s.rejectWith(h,c))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
e?d():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
t.Deferred.getStackHook&&(d.stackTrace=t.Deferred.getStackHook()),window.setTimeout(d))}}var l=0;return t.Deferred(function(l){
// progress_handlers.add( ... )
s[0][3].add(r(0,l,t.isFunction(a)?a:i,l.notifyWith)),
// fulfilled_handlers.add( ... )
s[1][3].add(r(0,l,t.isFunction(e)?e:i)),
// rejected_handlers.add( ... )
s[2][3].add(r(0,l,t.isFunction(o)?o:n))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?t.extend(e,a):a}},r={};
// All done!
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return t.each(s,function(t,e){var i=e[2],n=e[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
a[e[1]]=i.add,
// Handle state
n&&i.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
o=n},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
s[3-t][2].disable,
// progress_callbacks.lock
s[0][2].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
i.add(e[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
r[e[0]]=function(){return r[e[0]+"With"](this===r?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
r[e[0]+"With"]=i.fireWith}),a.promise(r),e&&e.call(r,r),r},
// Deferred helper
when:function(i){var
// count of uncompleted subordinates
n=arguments.length,
// count of unprocessed arguments
o=n,
// subordinate fulfillment data
a=Array(o),r=e.call(arguments),
// the master Deferred
l=t.Deferred(),
// subordinate callback factory
h=function(t){return function(i){a[t]=this,r[t]=arguments.length>1?e.call(arguments):i,--n||l.resolveWith(a,r)}};
// Single- and empty arguments are adopted like Promise.resolve
if(n<=1&&(s(i,l.done(h(o)).resolve,l.reject,!n),"pending"===l.state()||t.isFunction(r[o]&&r[o].then)))return l.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;o--;)s(r[o],h(o),l.reject);return l.promise()}}),t}.apply(e,n))&&(t.exports=s)},/* 11 */
/***/
function(t,e,i){var n,s;n=[i(0),i(1),i(27),i(6),i(32),i(4),i(5),i(3),i(2)],void 0!==(s=function(t,e,i,n,s,o,a){"use strict";function r(){return!0}function l(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function h(){try{return e.activeElement}catch(t){}}function c(e,i,n,s,o,a){var r,h;
// Types can be a map of types/handlers
if("object"==typeof i){
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
s=s||n,n=void 0);for(h in i)c(e,h,n,s,i[h],a);return e}if(null==s&&null==o?(
// ( types, fn )
o=n,s=n=void 0):null==o&&("string"==typeof n?(
// ( types, selector, fn )
o=s,s=void 0):(
// ( types, data, fn )
o=s,s=n,n=void 0)),!1===o)o=l;else if(!o)return e;
// Use same guid so caller can remove using origFn
return 1===a&&(r=o,o=function(e){
// Can use an empty set, since event contains the info
return t().off(e),r.apply(this,arguments)},o.guid=r.guid||(r.guid=t.guid++)),e.each(function(){t.event.add(this,i,o,s,n)})}var u=/^key/,d=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,p=/^([^.]*)(?:\.(.+)|)/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
// Includes all common event props including KeyEvent and MouseEvent specific props
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
return t.event={global:{},add:function(e,s,a,r,l){var h,c,u,d,f,g,m,v,_,b,y,w=o.get(e);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(w)for(
// Caller can pass in an object of custom data in lieu of the handler
a.handler&&(h=a,a=h.handler,l=h.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
l&&t.find.matchesSelector(i,l),
// Make sure that the handler has a unique ID, used to find/remove it later
a.guid||(a.guid=t.guid++),
// Init the element's event structure and main handler, if this is the first
(d=w.events)||(d=w.events={}),(c=w.handle)||(c=w.handle=function(i){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==t&&t.event.triggered!==i.type?t.event.dispatch.apply(e,arguments):void 0}),
// Handle multiple events separated by a space
s=(s||"").match(n)||[""],f=s.length;f--;)u=p.exec(s[f])||[],_=y=u[1],b=(u[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
_&&(
// If event changes its type, use the special event handlers for the changed type
m=t.event.special[_]||{},
// If selector defined, determine special event api type, otherwise given type
_=(l?m.delegateType:m.bindType)||_,
// Update special based on newly reset type
m=t.event.special[_]||{},
// handleObj is passed to all event handlers
g=t.extend({type:_,origType:y,data:r,handler:a,guid:a.guid,selector:l,needsContext:l&&t.expr.match.needsContext.test(l),namespace:b.join(".")},h),
// Init the event handler queue if we're the first
(v=d[_])||(v=d[_]=[],v.delegateCount=0,
// Only use addEventListener if the special events handler returns false
m.setup&&!1!==m.setup.call(e,r,b,c)||e.addEventListener&&e.addEventListener(_,c)),m.add&&(m.add.call(e,g),g.handler.guid||(g.handler.guid=a.guid)),
// Add to the element's handler list, delegates in front
l?v.splice(v.delegateCount++,0,g):v.push(g),
// Keep track of which events have ever been used, for event optimization
t.event.global[_]=!0)},
// Detach an event or set of events from an element
remove:function(e,i,s,a,r){var l,h,c,u,d,f,g,m,v,_,b,y=o.hasData(e)&&o.get(e);if(y&&(u=y.events)){for(
// Once for each type.namespace in types; type may be omitted
i=(i||"").match(n)||[""],d=i.length;d--;)
// Unbind all events (on this namespace, if provided) for the element
if(c=p.exec(i[d])||[],v=b=c[1],_=(c[2]||"").split(".").sort(),v){for(g=t.event.special[v]||{},v=(a?g.delegateType:g.bindType)||v,m=u[v]||[],c=c[2]&&new RegExp("(^|\\.)"+_.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
h=l=m.length;l--;)f=m[l],!r&&b!==f.origType||s&&s.guid!==f.guid||c&&!c.test(f.namespace)||a&&a!==f.selector&&("**"!==a||!f.selector)||(m.splice(l,1),f.selector&&m.delegateCount--,g.remove&&g.remove.call(e,f));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
h&&!m.length&&(g.teardown&&!1!==g.teardown.call(e,_,y.handle)||t.removeEvent(e,v,y.handle),delete u[v])}else for(v in u)t.event.remove(e,v+i[d],s,a,!0);
// Remove data and the expando if it's no longer used
t.isEmptyObject(u)&&o.remove(e,"handle events")}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
var i,n,s,a,r,l,h=t.event.fix(e),c=new Array(arguments.length),u=(o.get(this,"events")||{})[h.type]||[],d=t.event.special[h.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
c[0]=h,i=1;i<arguments.length;i++)c[i]=arguments[i];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(h.delegateTarget=this,!d.preDispatch||!1!==d.preDispatch.call(this,h)){for(
// Determine handlers
l=t.event.handlers.call(this,h,u),
// Run delegates first; they may want to stop propagation beneath us
i=0;(a=l[i++])&&!h.isPropagationStopped();)for(h.currentTarget=a.elem,n=0;(r=a.handlers[n++])&&!h.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
h.rnamespace&&!h.rnamespace.test(r.namespace)||(h.handleObj=r,h.data=r.data,void 0!==(s=((t.event.special[r.origType]||{}).handle||r.handler).apply(a.elem,c))&&!1===(h.result=s)&&(h.preventDefault(),h.stopPropagation()));
// Call the postDispatch hook for the mapped type
return d.postDispatch&&d.postDispatch.call(this,h),h.result}},handlers:function(e,i){var n,s,o,a,r,l=[],h=i.delegateCount,c=e.target;
// Find delegate handlers
if(h&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
c.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(a=[],r={},n=0;n<h;n++)s=i[n],
// Don't conflict with Object.prototype properties (#13203)
o=s.selector+" ",void 0===r[o]&&(r[o]=s.needsContext?t(o,this).index(c)>-1:t.find(o,this,null,[c]).length),r[o]&&a.push(s);a.length&&l.push({elem:c,handlers:a})}
// Add the remaining (directly-bound) handlers
return c=this,h<i.length&&l.push({elem:c,handlers:i.slice(h)}),l},addProp:function(e,i){Object.defineProperty(t.Event.prototype,e,{enumerable:!0,configurable:!0,get:t.isFunction(i)?function(){if(this.originalEvent)return i(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[t.expando]?e:new t.Event(e)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==h()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===h()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&a(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(t){return a(t.target,"a")}},beforeunload:{postDispatch:function(t){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},t.removeEvent=function(t,e,i){
// This "if" is needed for plain objects
t.removeEventListener&&t.removeEventListener(e,i)},t.Event=function(e,i){
// Allow instantiation without the 'new' keyword
if(!(this instanceof t.Event))return new t.Event(e,i);
// Event object
e&&e.type?(this.originalEvent=e,this.type=e.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&
// Support: Android <=2.3 only
!1===e.returnValue?r:l,
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,
// Put explicitly provided properties onto the event object
i&&t.extend(this,i),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||t.now(),
// Mark it as fixed
this[t.expando]=!0},t.Event.prototype={constructor:t.Event,isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=r,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=r,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=r,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},t.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;
// Add which for key events
// Add which for key events
// Add which for click: 1 === left; 2 === middle; 3 === right
return null==t.which&&u.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&d.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},t.event.addProp),t.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){t.event.special[e]={delegateType:i,bindType:i,handle:function(e){var n,s=this,o=e.relatedTarget,a=e.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return o&&(o===s||t.contains(s,o))||(e.type=a.origType,n=a.handler.apply(this,arguments),e.type=i),n}}}),t.fn.extend({on:function(t,e,i,n){return c(this,t,e,i,n)},one:function(t,e,i,n){return c(this,t,e,i,n,1)},off:function(e,i,n){var s,o;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return s=e.handleObj,t(e.delegateTarget).off(s.namespace?s.origType+"."+s.namespace:s.origType,s.selector,s.handler),this;if("object"==typeof e){
// ( types-object [, selector] )
for(o in e)this.off(o,i,e[o]);return this}
// ( types [, fn] )
return!1!==i&&"function"!=typeof i||(n=i,i=void 0),!1===n&&(n=l),this.each(function(){t.event.remove(this,e,n,i)})}}),t}.apply(e,n))&&(t.exports=s)},/* 12 */
/***/
function(t,e,i){var n,s;n=[i(0),i(29),i(102),i(103),i(59),i(5),i(3),i(58),i(2)],void 0!==(s=function(t,e,i,n,s,o){"use strict";function a(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}var r=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
l={children:!0,contents:!0,next:!0,prev:!0};return t.fn.extend({has:function(e){var i=t(e,this),n=i.length;return this.filter(function(){for(var e=0;e<n;e++)if(t.contains(this,i[e]))return!0})},closest:function(e,i){var n,o=0,a=this.length,r=[],l="string"!=typeof e&&t(e);
// Positional selectors never match, since there's no _selection_ context
if(!s.test(e))for(;o<a;o++)for(n=this[o];n&&n!==i;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(l?l.index(n)>-1:
// Don't pass non-elements to Sizzle
1===n.nodeType&&t.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(r.length>1?t.uniqueSort(r):r)},
// Determine the position of an element within the set
index:function(i){
// No argument, return index in parent
// No argument, return index in parent
// Index in selector
// If it receives a jQuery object, the first element is used
return i?"string"==typeof i?e.call(t(i),this[0]):e.call(this,i.jquery?i[0]:i):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,i){return this.pushStack(t.uniqueSort(t.merge(this.get(),t(e,i))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),t.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return i(t,"parentNode")},parentsUntil:function(t,e,n){return i(t,"parentNode",n)},next:function(t){return a(t,"nextSibling")},prev:function(t){return a(t,"previousSibling")},nextAll:function(t){return i(t,"nextSibling")},prevAll:function(t){return i(t,"previousSibling")},nextUntil:function(t,e,n){return i(t,"nextSibling",n)},prevUntil:function(t,e,n){return i(t,"previousSibling",n)},siblings:function(t){return n((t.parentNode||{}).firstChild,t)},children:function(t){return n(t.firstChild)},contents:function(e){
// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
return o(e,"iframe")?e.contentDocument:(o(e,"template")&&(e=e.content||e),t.merge([],e.childNodes))}},function(e,i){t.fn[e]=function(n,s){var o=t.map(this,i,n);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==e.slice(-5)&&(s=n),s&&"string"==typeof s&&(o=t.filter(s,o)),this.length>1&&(l[e]||t.uniqueSort(o),r.test(e)&&o.reverse()),this.pushStack(o)}}),t}.apply(e,n))&&(t.exports=s)},/* 13 */
/***/
function(t,e,i){var n,s;n=[i(0),i(30),i(7),i(46),i(1),i(31),i(21),i(43),i(44),i(47),i(42),i(41),i(40),i(20),i(3),i(38),i(2)],void 0!==(s=function(t,e,i,n,s,o,a,r,l,h,c,u,d,p){"use strict";
// Return a css property mapped to a potentially vendor prefixed property
function f(t){
// Shortcut for names that are not vendor prefixed
if(t in D)return t;for(
// Check for vendor prefixed names
var e=t[0].toUpperCase()+t.slice(1),i=k.length;i--;)if((t=k[i]+e)in D)return t}
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function g(e){var i=t.cssProps[e];return i||(i=t.cssProps[e]=f(e)||e),i}function m(t,e,i){
// Any relative (+/-) values have already been
// normalized at this point
var n=o.exec(e);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return n?Math.max(0,n[2]-(i||0))+(n[3]||"px"):e}function v(e,i,n,s,o){var a,l=0;for(
// If we already have the right measurement, avoid augmentation
a=n===(s?"border":"content")?4:"width"===i?1:0;a<4;a+=2)
// Both box models exclude margin, so add it if we want it
"margin"===n&&(l+=t.css(e,n+r[a],!0,o)),s?(
// border-box includes padding, so remove it if we want content
"content"===n&&(l-=t.css(e,"padding"+r[a],!0,o)),
// At this point, extra isn't border nor margin, so remove border
"margin"!==n&&(l-=t.css(e,"border"+r[a]+"Width",!0,o))):(
// At this point, extra isn't content, so add padding
l+=t.css(e,"padding"+r[a],!0,o),
// At this point, extra isn't content nor padding, so add border
"padding"!==n&&(l+=t.css(e,"border"+r[a]+"Width",!0,o)));return l}function _(e,i,n){
// Start with computed style
var s,o=l(e),r=c(e,i,o),h="border-box"===t.css(e,"boxSizing",!1,o);
// Computed unit is not pixels. Stop here and return.
// Computed unit is not pixels. Stop here and return.
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
// Fall back to offsetWidth/Height when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Normalize "", auto, and prepare for extra
return a.test(r)?r:(s=h&&(p.boxSizingReliable()||r===e.style[i]),"auto"===r&&(r=e["offset"+i[0].toUpperCase()+i.slice(1)]),(r=parseFloat(r)||0)+v(e,i,n||(h?"border":"content"),s,o)+"px")}var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
b=/^(none|table(?!-c[ea]).+)/,y=/^--/,w={position:"absolute",visibility:"hidden",display:"block"},x={letterSpacing:"0",fontWeight:"400"},k=["Webkit","Moz","ms"],D=s.createElement("div").style;
// These hooks are used by animate to expand properties
return t.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(t,e){if(e){
// We should always get a number back from opacity
var i=c(t,"opacity");return""===i?"1":i}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{float:"cssFloat"},
// Get and set the style property on a DOM Node
style:function(e,i,n,s){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
// Make sure that we're working with the right name
var a,r,l,h=t.camelCase(i),c=y.test(i),d=e.style;
// Check if we're setting a value
if(
// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
c||(i=g(h)),
// Gets hook for the prefixed version, then unprefixed version
l=t.cssHooks[i]||t.cssHooks[h],void 0===n)
// If a hook was provided get the non-computed value from there
// If a hook was provided get the non-computed value from there
return l&&"get"in l&&void 0!==(a=l.get(e,!1,s))?a:d[i];r=typeof n,
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===r&&(a=o.exec(n))&&a[1]&&(n=u(e,i,a),
// Fixes bug #9237
r="number"),
// Make sure that null and NaN values aren't set (#7116)
null!=n&&n===n&&(
// If a number was passed in, add the unit (except for certain CSS properties)
"number"===r&&(n+=a&&a[3]||(t.cssNumber[h]?"":"px")),
// background-* props affect original clone's values
p.clearCloneStyle||""!==n||0!==i.indexOf("background")||(d[i]="inherit"),
// If a hook was provided, use that value, otherwise just set the specified value
l&&"set"in l&&void 0===(n=l.set(e,n,s))||(c?d.setProperty(i,n):d[i]=n))}},css:function(e,i,n,s){var o,a,r,l=t.camelCase(i);
// Make numeric if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Try prefixed name followed by the unprefixed name
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
// Convert "normal" to computed value
// Make numeric if forced or a qualifier was provided and val looks numeric
return y.test(i)||(i=g(l)),r=t.cssHooks[i]||t.cssHooks[l],r&&"get"in r&&(o=r.get(e,!0,n)),void 0===o&&(o=c(e,i,s)),"normal"===o&&i in x&&(o=x[i]),""===n||n?(a=parseFloat(o),!0===n||isFinite(a)?a||0:o):o}}),t.each(["height","width"],function(e,i){t.cssHooks[i]={get:function(e,n,s){if(n)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
return!b.test(t.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?_(e,i,s):h(e,w,function(){return _(e,i,s)})},set:function(e,n,s){var a,r=s&&l(e),h=s&&v(e,i,s,"border-box"===t.css(e,"boxSizing",!1,r),r);
// Convert to pixels if value adjustment is needed
return h&&(a=o.exec(n))&&"px"!==(a[3]||"px")&&(e.style[i]=n,n=t.css(e,i)),m(e,n,h)}}}),t.cssHooks.marginLeft=d(p.reliableMarginLeft,function(t,e){if(e)return(parseFloat(c(t,"marginLeft"))||t.getBoundingClientRect().left-h(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),t.each({margin:"",padding:"",border:"Width"},function(e,i){t.cssHooks[e+i]={expand:function(t){for(var n=0,s={},
// Assumes a single number if not a string
o="string"==typeof t?t.split(" "):[t];n<4;n++)s[e+r[n]+i]=o[n]||o[n-2]||o[0];return s}},n.test(e)||(t.cssHooks[e+i].set=m)}),t.fn.extend({css:function(e,n){return i(this,function(e,i,n){var s,o,a={},r=0;if(Array.isArray(i)){for(s=l(e),o=i.length;r<o;r++)a[i[r]]=t.css(e,i[r],!1,s);return a}return void 0!==n?t.style(e,i,n):t.css(e,i)},e,n,arguments.length>1)}}),t}.apply(e,n))&&(t.exports=s)},/* 14 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";return[]}.call(e,i,e,t))&&(t.exports=n)},/* 15 */
/***/
function(t,e,i){var n,s;n=[i(0),i(2),i(12),i(18),i(10),i(86),i(38),i(85),i(25),i(100),i(76),i(11),i(92),i(93),i(16),i(97),i(107),i(13),i(83),i(57),i(9),i(75),i(73),i(70),i(71),i(91),i(23),i(90),i(99),i(88),i(87),i(95),i(96)],void 0!==(s=function(t){"use strict";return t}.apply(e,n))&&(t.exports=s)},/* 16 */
/***/
function(t,e,i){var n,s;n=[i(0),i(60),i(62),i(7),i(53),i(55),i(54),i(56),i(51),i(52),i(50),i(98),i(4),i(49),i(22),i(37),i(5),i(3),i(12),i(2),i(11)],void 0!==(s=function(t,e,i,n,s,o,a,r,l,h,c,u,d,p,f,g,m){"use strict";
// Prefer a tbody over its parent table for containing new rows
function v(e,i){return m(e,"table")&&m(11!==i.nodeType?i:i.firstChild,"tr")?t(">tbody",e)[0]||e:e}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function _(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function b(t){var e=T.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function y(e,i){var n,s,o,a,r,l,h,c;if(1===i.nodeType){
// 1. Copy private data: events, handlers, etc.
if(d.hasData(e)&&(a=d.access(e),r=d.set(i,a),c=a.events)){delete r.handle,r.events={};for(o in c)for(n=0,s=c[o].length;n<s;n++)t.event.add(i,o,c[o][n])}
// 2. Copy user data
p.hasData(e)&&(l=p.access(e),h=t.extend({},l),p.set(i,h))}}
// Fix IE bugs, see support tests
function w(t,e){var i=e.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===i&&s.test(t.type)?e.checked=t.checked:"input"!==i&&"textarea"!==i||(e.defaultValue=t.defaultValue)}function x(i,n,s,o){
// Flatten any nested arrays
n=e.apply([],n);var r,h,p,f,m,v,y=0,w=i.length,k=w-1,D=n[0],T=t.isFunction(D);
// We can't cloneNode fragments that contain checked, in WebKit
if(T||w>1&&"string"==typeof D&&!u.checkClone&&C.test(D))return i.each(function(t){var e=i.eq(t);T&&(n[0]=D.call(this,t,e.html())),x(e,n,s,o)});if(w&&(r=c(n,i[0].ownerDocument,!1,i,o),h=r.firstChild,1===r.childNodes.length&&(r=h),h||o)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(p=t.map(l(r,"script"),_),f=p.length;y<w;y++)m=r,y!==k&&(m=t.clone(m,!0,!0),
// Keep references to cloned scripts for later restoration
f&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
t.merge(p,l(m,"script"))),s.call(i[y],m,y);if(f)
// Evaluate executable scripts on first document insertion
for(v=p[p.length-1].ownerDocument,
// Reenable scripts
t.map(p,b),y=0;y<f;y++)m=p[y],a.test(m.type||"")&&!d.access(m,"globalEval")&&t.contains(v,m)&&(m.src?
// Optional AJAX dependency, but won't run scripts if not present
t._evalUrl&&t._evalUrl(m.src):g(m.textContent.replace(I,""),v))}return i}function k(e,i,n){for(var s,o=i?t.filter(i,e):e,a=0;null!=(s=o[a]);a++)n||1!==s.nodeType||t.cleanData(l(s)),s.parentNode&&(n&&t.contains(s.ownerDocument,s)&&h(l(s,"script")),s.parentNode.removeChild(s));return e}var/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
D=/<script|<style|<link/i,
// checked="checked" or checked
C=/checked\s*(?:[^=]|=\s*.checked.)/i,T=/^true\/(.*)/,I=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;return t.extend({htmlPrefilter:function(t){return t.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,"<$1></$2>")},clone:function(e,i,n){var s,o,a,r,c=e.cloneNode(!0),d=t.contains(e.ownerDocument,e);
// Fix IE cloning issues
if(!(u.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||t.isXMLDoc(e)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
r=l(c),a=l(e),s=0,o=a.length;s<o;s++)w(a[s],r[s]);
// Copy the events from the original to the clone
if(i)if(n)for(a=a||l(e),r=r||l(c),s=0,o=a.length;s<o;s++)y(a[s],r[s]);else y(e,c);
// Return the cloned set
// Preserve script evaluation history
return r=l(c,"script"),r.length>0&&h(r,!d&&l(e,"script")),c},cleanData:function(e){for(var i,n,s,o=t.event.special,a=0;void 0!==(n=e[a]);a++)if(f(n)){if(i=n[d.expando]){if(i.events)for(s in i.events)o[s]?t.event.remove(n,s):t.removeEvent(n,s,i.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[d.expando]=void 0}n[p.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[p.expando]=void 0)}}}),t.fn.extend({detach:function(t){return k(this,t,!0)},remove:function(t){return k(this,t)},text:function(e){return n(this,function(e){return void 0===e?t.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return x(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){v(this,t).appendChild(t)}})},prepend:function(){return x(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=v(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return x(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return x(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var e,i=0;null!=(e=this[i]);i++)1===e.nodeType&&(
// Prevent memory leaks
t.cleanData(l(e,!1)),
// Remove any remaining nodes
e.textContent="");return this},clone:function(e,i){return e=null!=e&&e,i=null==i?e:i,this.map(function(){return t.clone(this,e,i)})},html:function(e){return n(this,function(e){var i=this[0]||{},n=0,s=this.length;if(void 0===e&&1===i.nodeType)return i.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!D.test(e)&&!r[(o.exec(e)||["",""])[1].toLowerCase()]){e=t.htmlPrefilter(e);try{for(;n<s;n++)i=this[n]||{},
// Remove element nodes and prevent memory leaks
1===i.nodeType&&(t.cleanData(l(i,!1)),i.innerHTML=e);i=0}catch(t){}}i&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];
// Make the changes, replacing each non-ignored context element with the new content
return x(this,arguments,function(i){var n=this.parentNode;t.inArray(this,e)<0&&(t.cleanData(l(this)),n&&n.replaceChild(i,this))},e)}}),t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,n){t.fn[e]=function(e){for(var s,o=[],a=t(e),r=a.length-1,l=0;l<=r;l++)s=l===r?this:this.clone(!0),t(a[l])[n](s),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
i.apply(o,s.get());return this.pushStack(o)}}),t}.apply(e,n))&&(t.exports=s)},/* 17 */
/***/
function(t,e,i){var n,s;n=[i(1),i(8)],void 0!==(s=function(t,e){"use strict";return function(){var i=t.createElement("input"),n=t.createElement("select"),s=n.appendChild(t.createElement("option"));i.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
e.checkOn=""!==i.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
e.optSelected=s.selected,
// Support: IE <=11 only
// An input loses its value after becoming a radio
i=t.createElement("input"),i.value="t",i.type="radio",e.radioValue="t"===i.value}(),e}.apply(e,n))&&(t.exports=s)},/* 18 */
/***/
function(t,e,i){var n,s;n=[i(0),i(6)],void 0!==(s=function(t,e){"use strict";
// Convert String-formatted options into Object-formatted ones
function i(i){var n={};return t.each(i.match(e)||[],function(t,e){n[e]=!0}),n}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
return t.Callbacks=function(e){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?i(e):t.extend({},e);var// Flag to know if list is currently firing
n,
// Last fire value for non-forgettable lists
s,
// Flag to know if list was already fired
o,
// Flag to prevent firing
a,
// Actual callback list
r=[],
// Queue of execution data for repeatable lists
l=[],
// Index of currently firing callback (modified by add/remove as needed)
h=-1,
// Fire callbacks
c=function(){for(
// Enforce single-firing
a=a||e.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
o=n=!0;l.length;h=-1)for(s=l.shift();++h<r.length;)
// Run callback and check for early termination
!1===r[h].apply(s[0],s[1])&&e.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
h=r.length,s=!1);
// Forget the data if we're done with it
e.memory||(s=!1),n=!1,
// Clean up if we're done firing for good
a&&(
// Keep an empty list if we have data for future add calls
r=s?[]:"")},
// Actual Callbacks object
u={
// Add a callback or a collection of callbacks to the list
add:function(){
// If we have memory from a past run, we should fire after adding
return r&&(s&&!n&&(h=r.length-1,l.push(s)),function i(n){t.each(n,function(n,s){t.isFunction(s)?e.unique&&u.has(s)||r.push(s):s&&s.length&&"string"!==t.type(s)&&
// Inspect recursively
i(s)})}(arguments),s&&!n&&c()),this},
// Remove a callback from the list
remove:function(){return t.each(arguments,function(e,i){for(var n;(n=t.inArray(i,r,n))>-1;)r.splice(n,1),
// Handle firing indexes
n<=h&&h--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?t.inArray(e,r)>-1:r.length>0},
// Remove all callbacks from the list
empty:function(){return r&&(r=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return a=l=[],r=s="",this},disabled:function(){return!r},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return a=l=[],s||n||(r=s=""),this},locked:function(){return!!a},
// Call all callbacks with the given context and arguments
fireWith:function(t,e){return a||(e=e||[],e=[t,e.slice?e.slice():e],l.push(e),n||c()),this},
// Call all the callbacks with the given arguments
fire:function(){return u.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!o}};return u},t}.apply(e,n))&&(t.exports=s)},/* 19 */
/***/
function(t,e,i){var n,s;n=[i(6)],void 0!==(s=function(t){"use strict";
// Strip and collapse whitespace according to HTML spec
// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
function e(e){return(e.match(t)||[]).join(" ")}return e}.apply(e,n))&&(t.exports=s)},/* 20 */
/***/
function(t,e,i){var n,s;n=[i(0),i(1),i(27),i(8)],void 0!==(s=function(t,e,i,n){"use strict";return function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function s(){
// This is a singleton, we need to execute it only once
if(c){c.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",c.innerHTML="",i.appendChild(h);var t=window.getComputedStyle(c);o="1%"!==t.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
l="2px"===t.marginLeft,a="4px"===t.width,
// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
c.style.marginRight="50%",r="4px"===t.marginRight,i.removeChild(h),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
c=null}}var o,a,r,l,h=e.createElement("div"),c=e.createElement("div");
// Finish early in limited (non-browser) environments
c.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",n.clearCloneStyle="content-box"===c.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(c),t.extend(n,{pixelPosition:function(){return s(),o},boxSizingReliable:function(){return s(),a},pixelMarginRight:function(){return s(),r},reliableMarginLeft:function(){return s(),l}}))}(),n}.apply(e,n))&&(t.exports=s)},/* 21 */
/***/
function(t,e,i){var n,s;n=[i(30)],void 0!==(s=function(t){"use strict";return new RegExp("^("+t+")(?!px)[a-z%]+$","i")}.apply(e,n))&&(t.exports=s)},/* 22 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";/**
 * Determines whether an object can have data
 */
return function(t){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===t.nodeType||9===t.nodeType||!+t.nodeType}}.call(e,i,e,t))&&(t.exports=n)},/* 23 */
/***/
function(t,e,i){var n,s;n=[i(0),i(1),i(31),i(6),i(43),i(45),i(47),i(41),i(4),i(84),i(3),i(25),i(10),i(12),i(16),i(13),i(89)],void 0!==(s=function(t,e,i,n,s,o,a,r,l,h){"use strict";function c(){_&&(!1===e.hidden&&window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,t.fx.interval),t.fx.tick())}
// Animations created synchronously will run synchronously
function u(){return window.setTimeout(function(){v=void 0}),v=t.now()}
// Generate parameters to create a standard animation
function d(t,e){var i,n=0,o={height:t};for(
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
e=e?1:0;n<4;n+=2-e)i=s[n],o["margin"+i]=o["padding"+i]=t;return e&&(o.opacity=o.width=t),o}function p(t,e,i){for(var n,s=(m.tweeners[e]||[]).concat(m.tweeners["*"]),o=0,a=s.length;o<a;o++)if(n=s[o].call(i,e,t))
// We're done with this property
return n}function f(e,i,n){var s,a,r,c,u,d,f,g,m="width"in i||"height"in i,v=this,_={},y=e.style,w=e.nodeType&&o(e),x=l.get(e,"fxshow");
// Queue-skipping animations hijack the fx hooks
n.queue||(c=t._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,u=c.empty.fire,c.empty.fire=function(){c.unqueued||u()}),c.unqueued++,v.always(function(){
// Ensure the complete handler is called before this completes
v.always(function(){c.unqueued--,t.queue(e,"fx").length||c.empty.fire()})}));
// Detect show/hide animations
for(s in i)if(a=i[s],b.test(a)){if(delete i[s],r=r||"toggle"===a,a===(w?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==a||!x||void 0===x[s])continue;w=!0}_[s]=x&&x[s]||t.style(e,s)}if((
// Bail out if this is a no-op like .hide().hide()
d=!t.isEmptyObject(i))||!t.isEmptyObject(_)){
// Restrict "overflow" and "display" styles during box animations
m&&1===e.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 13
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY
n.overflow=[y.overflow,y.overflowX,y.overflowY],
// Identify a display type, preferring old show/hide data over the CSS cascade
f=x&&x.display,null==f&&(f=l.get(e,"display")),g=t.css(e,"display"),"none"===g&&(f?g=f:(
// Get nonempty value(s) by temporarily forcing visibility
h([e],!0),f=e.style.display||f,g=t.css(e,"display"),h([e]))),
// Animate inline elements as inline-block
("inline"===g||"inline-block"===g&&null!=f)&&"none"===t.css(e,"float")&&(
// Restore the original display value at the end of pure show/hide animations
d||(v.done(function(){y.display=f}),null==f&&(g=y.display,f="none"===g?"":g)),y.display="inline-block")),n.overflow&&(y.overflow="hidden",v.always(function(){y.overflow=n.overflow[0],y.overflowX=n.overflow[1],y.overflowY=n.overflow[2]})),
// Implement show/hide animations
d=!1;for(s in _)
// General show/hide setup for this element animation
d||(x?"hidden"in x&&(w=x.hidden):x=l.access(e,"fxshow",{display:f}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
r&&(x.hidden=!w),
// Show elements before animating them
w&&h([e],!0),/* eslint-disable no-loop-func */
v.done(function(){/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
w||h([e]),l.remove(e,"fxshow");for(s in _)t.style(e,s,_[s])})),
// Per-property setup
d=p(w?x[s]:0,s,v),s in x||(x[s]=d.start,w&&(d.end=d.start,d.start=0))}}function g(e,i){var n,s,o,a,r;
// camelCase, specialEasing and expand cssHook pass
for(n in e)if(s=t.camelCase(n),o=i[s],a=e[n],Array.isArray(a)&&(o=a[1],a=e[n]=a[0]),n!==s&&(e[s]=a,delete e[n]),(r=t.cssHooks[s])&&"expand"in r){a=r.expand(a),delete e[s];
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in a)n in e||(e[n]=a[n],i[n]=o)}else i[s]=o}function m(e,i,n){var s,o,a=0,r=m.prefilters.length,l=t.Deferred().always(function(){
// Don't match elem in the :animated selector
delete h.elem}),h=function(){if(o)return!1;for(var t=v||u(),i=Math.max(0,c.startTime+c.duration-t),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
n=i/c.duration||0,s=1-n,a=0,r=c.tweens.length;a<r;a++)c.tweens[a].run(s);
// If there's more to do, yield
// If there's more to do, yield
// If this was an empty animation, synthesize a final progress notification
// Resolve the animation and report its conclusion
return l.notifyWith(e,[c,s,i]),s<1&&r?i:(r||l.notifyWith(e,[c,1,0]),l.resolveWith(e,[c]),!1)},c=l.promise({elem:e,props:t.extend({},i),opts:t.extend(!0,{specialEasing:{},easing:t.easing._default},n),originalProperties:i,originalOptions:n,startTime:v||u(),duration:n.duration,tweens:[],createTween:function(i,n){var s=t.Tween(e,c.opts,i,n,c.opts.specialEasing[i]||c.opts.easing);return c.tweens.push(s),s},stop:function(t){var i=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
n=t?c.tweens.length:0;if(o)return this;for(o=!0;i<n;i++)c.tweens[i].run(1);
// Resolve when we played the last frame; otherwise, reject
return t?(l.notifyWith(e,[c,1,0]),l.resolveWith(e,[c,t])):l.rejectWith(e,[c,t]),this}}),d=c.props;for(g(d,c.opts.specialEasing);a<r;a++)if(s=m.prefilters[a].call(c,e,d,c.opts))return t.isFunction(s.stop)&&(t._queueHooks(c.elem,c.opts.queue).stop=t.proxy(s.stop,s)),s;
// Attach callbacks from options
return t.map(d,p,c),t.isFunction(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),t.fx.timer(t.extend(h,{elem:e,anim:c,queue:c.opts.queue})),c}var v,_,b=/^(?:toggle|show|hide)$/,y=/queueHooks$/;
// Generate shortcuts for custom animations
return t.Animation=t.extend(m,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return r(n.elem,t,i.exec(e),n),n}]},tweener:function(e,i){t.isFunction(e)?(i=e,e=["*"]):e=e.match(n);for(var s,o=0,a=e.length;o<a;o++)s=e[o],m.tweeners[s]=m.tweeners[s]||[],m.tweeners[s].unshift(i)},prefilters:[f],prefilter:function(t,e){e?m.prefilters.unshift(t):m.prefilters.push(t)}}),t.speed=function(e,i,n){var s=e&&"object"==typeof e?t.extend({},e):{complete:n||!n&&i||t.isFunction(e)&&e,duration:e,easing:n&&i||i&&!t.isFunction(i)&&i};
// Go to the end state if fx are off
// Normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return t.fx.off?s.duration=0:"number"!=typeof s.duration&&(s.duration in t.fx.speeds?s.duration=t.fx.speeds[s.duration]:s.duration=t.fx.speeds._default),null!=s.queue&&!0!==s.queue||(s.queue="fx"),s.old=s.complete,s.complete=function(){t.isFunction(s.old)&&s.old.call(this),s.queue&&t.dequeue(this,s.queue)},s},t.fn.extend({fadeTo:function(t,e,i,n){
// Show any hidden elements after setting opacity to 0
return this.filter(o).css("opacity",0).show().end().animate({opacity:e},t,i,n)},animate:function(e,i,n,s){var o=t.isEmptyObject(e),a=t.speed(i,n,s),r=function(){
// Operate on a copy of prop so per-property easing won't be lost
var i=m(this,t.extend({},e),a);
// Empty animations, or finishing resolves immediately
(o||l.get(this,"finish"))&&i.stop(!0)};return r.finish=r,o||!1===a.queue?this.each(r):this.queue(a.queue,r)},stop:function(e,i,n){var s=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof e&&(n=i,i=e,e=void 0),i&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var i=!0,o=null!=e&&e+"queueHooks",a=t.timers,r=l.get(this);if(o)r[o]&&r[o].stop&&s(r[o]);else for(o in r)r[o]&&r[o].stop&&y.test(o)&&s(r[o]);for(o=a.length;o--;)a[o].elem!==this||null!=e&&a[o].queue!==e||(a[o].anim.stop(n),i=!1,a.splice(o,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!i&&n||t.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var i,n=l.get(this),s=n[e+"queue"],o=n[e+"queueHooks"],a=t.timers,r=s?s.length:0;
// Look for any active animations, and finish them
for(
// Enable finishing flag on private data
n.finish=!0,
// Empty the queue first
t.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),i=a.length;i--;)a[i].elem===this&&a[i].queue===e&&(a[i].anim.stop(!0),a.splice(i,1));
// Look for any animations in the old queue and finish them
for(i=0;i<r;i++)s[i]&&s[i].finish&&s[i].finish.call(this);
// Turn off finishing flag
delete n.finish})}}),t.each(["toggle","show","hide"],function(e,i){var n=t.fn[i];t.fn[i]=function(t,e,s){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(d(i,!0),t,e,s)}}),t.each({slideDown:d("show"),slideUp:d("hide"),slideToggle:d("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,i){t.fn[e]=function(t,e,n){return this.animate(i,t,e,n)}}),t.timers=[],t.fx.tick=function(){var e,i=0,n=t.timers;for(v=t.now();i<n.length;i++)
// Run the timer and safely remove it when done (allowing for external removal)
(e=n[i])()||n[i]!==e||n.splice(i--,1);n.length||t.fx.stop(),v=void 0},t.fx.timer=function(e){t.timers.push(e),t.fx.start()},t.fx.interval=13,t.fx.start=function(){_||(_=!0,c())},t.fx.stop=function(){_=null},t.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},t}.apply(e,n))&&(t.exports=s)},/* 24 */
/***/
function(t,e,i){var n,s;n=[i(0),i(1),i(4),i(22),i(28),i(11)],void 0!==(s=function(t,e,i,n,s){"use strict";var o=/^(?:focusinfocus|focusoutblur)$/;return t.extend(t.event,{trigger:function(a,r,l,h){var c,u,d,p,f,g,m,v=[l||e],_=s.call(a,"type")?a.type:a,b=s.call(a,"namespace")?a.namespace.split("."):[];
// Don't do events on text and comment nodes
if(u=d=l=l||e,3!==l.nodeType&&8!==l.nodeType&&!o.test(_+t.event.triggered)&&(_.indexOf(".")>-1&&(
// Namespaced trigger; create a regexp to match event type in handle()
b=_.split("."),_=b.shift(),b.sort()),f=_.indexOf(":")<0&&"on"+_,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
a=a[t.expando]?a:new t.Event(_,"object"==typeof a&&a),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
a.isTrigger=h?2:3,a.namespace=b.join("."),a.rnamespace=a.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
a.result=void 0,a.target||(a.target=l),
// Clone any incoming data and prepend the event, creating the handler arg list
r=null==r?[a]:t.makeArray(r,[a]),
// Allow special events to draw outside the lines
m=t.event.special[_]||{},h||!m.trigger||!1!==m.trigger.apply(l,r))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!h&&!m.noBubble&&!t.isWindow(l)){for(p=m.delegateType||_,o.test(p+_)||(u=u.parentNode);u;u=u.parentNode)v.push(u),d=u;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
d===(l.ownerDocument||e)&&v.push(d.defaultView||d.parentWindow||window)}for(
// Fire handlers on the event path
c=0;(u=v[c++])&&!a.isPropagationStopped();)a.type=c>1?p:m.bindType||_,
// jQuery handler
g=(i.get(u,"events")||{})[a.type]&&i.get(u,"handle"),g&&g.apply(u,r),(
// Native handler
g=f&&u[f])&&g.apply&&n(u)&&(a.result=g.apply(u,r),!1===a.result&&a.preventDefault());
// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return a.type=_,h||a.isDefaultPrevented()||m._default&&!1!==m._default.apply(v.pop(),r)||!n(l)||f&&t.isFunction(l[_])&&!t.isWindow(l)&&(d=l[f],d&&(l[f]=null),t.event.triggered=_,l[_](),t.event.triggered=void 0,d&&(l[f]=d)),a.result}},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,i,n){var s=t.extend(new t.Event,n,{type:e,isSimulated:!0});t.event.trigger(s,null,i)}}),t.fn.extend({trigger:function(e,i){return this.each(function(){t.event.trigger(e,i,this)})},triggerHandler:function(e,i){var n=this[0];if(n)return t.event.trigger(e,i,n,!0)}}),t}.apply(e,n))&&(t.exports=s)},/* 25 */
/***/
function(t,e,i){var n,s;n=[i(0),i(4),i(10),i(18)],void 0!==(s=function(t,e){"use strict";return t.extend({queue:function(i,n,s){var o;if(i)
// Speed up dequeue by getting out quickly if this is just a lookup
return n=(n||"fx")+"queue",o=e.get(i,n),s&&(!o||Array.isArray(s)?o=e.access(i,n,t.makeArray(s)):o.push(s)),o||[]},dequeue:function(e,i){i=i||"fx";var n=t.queue(e,i),s=n.length,o=n.shift(),a=t._queueHooks(e,i),r=function(){t.dequeue(e,i)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===o&&(o=n.shift(),s--),o&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===i&&n.unshift("inprogress"),
// Clear up the last queue stop function
delete a.stop,o.call(e,r,a)),!s&&a&&a.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(i,n){var s=n+"queueHooks";return e.get(i,s)||e.access(i,s,{empty:t.Callbacks("once memory").add(function(){e.remove(i,[n+"queue",s])})})}}),t.fn.extend({queue:function(e,i){var n=2;return"string"!=typeof e&&(i=e,e="fx",n--),arguments.length<n?t.queue(this[0],e):void 0===i?this:this.each(function(){var n=t.queue(this,e,i);
// Ensure a hooks for this queue
t._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&t.dequeue(this,e)})},dequeue:function(e){return this.each(function(){t.dequeue(this,e)})},clearQueue:function(t){return this.queue(t||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(i,n){var s,o=1,a=t.Deferred(),r=this,l=this.length,h=function(){--o||a.resolveWith(r,[r])};for("string"!=typeof i&&(n=i,i=void 0),i=i||"fx";l--;)(s=e.get(r[l],i+"queueHooks"))&&s.empty&&(o++,s.empty.add(h));return h(),a.promise(n)}}),t}.apply(e,n))&&(t.exports=s)},/* 26 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";
// [[Class]] -> type pairs
return{}}.call(e,i,e,t))&&(t.exports=n)},/* 27 */
/***/
function(t,e,i){var n,s;n=[i(1)],void 0!==(s=function(t){"use strict";return t.documentElement}.apply(e,n))&&(t.exports=s)},/* 28 */
/***/
function(t,e,i){var n,s;n=[i(26)],void 0!==(s=function(t){"use strict";return t.hasOwnProperty}.apply(e,n))&&(t.exports=s)},/* 29 */
/***/
function(t,e,i){var n,s;n=[i(14)],void 0!==(s=function(t){"use strict";return t.indexOf}.apply(e,n))&&(t.exports=s)},/* 30 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";return/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source}.call(e,i,e,t))&&(t.exports=n)},/* 31 */
/***/
function(t,e,i){var n,s;n=[i(30)],void 0!==(s=function(t){"use strict";return new RegExp("^(?:([+-])=|)("+t+")([a-z%]*)$","i")}.apply(e,n))&&(t.exports=s)},/* 32 */
/***/
function(t,e,i){var n,s;n=[i(14)],void 0!==(s=function(t){"use strict";return t.slice}.apply(e,n))&&(t.exports=s)},/* 33 */
/***/
function(t,e,i){var n,s,o;!function(a){
// AMD. Register as an anonymous module.
s=[i(15)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(function(t){return t.ui=t.ui||{},t.ui.version="1.12.1"})},/* 34 */
/***/
function(t,e,i){var n,s;n=[i(0)],void 0!==(s=function(t){"use strict";return t.now()}.apply(e,n))&&(t.exports=s)},/* 35 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";return/\?/}.call(e,i,e,t))&&(t.exports=n)},/* 36 */
/***/
function(t,e,i){var n,s;n=[i(0),i(7),i(17),i(2)],void 0!==(s=function(t,e,i){"use strict";var n=/^(?:input|select|textarea|button)$/i,s=/^(?:a|area)$/i;t.fn.extend({prop:function(i,n){return e(this,t.prop,i,n,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[t.propFix[e]||e]})}}),t.extend({prop:function(e,i,n){var s,o,a=e.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==a&&8!==a&&2!==a)
// Fix name and attach hooks
return 1===a&&t.isXMLDoc(e)||(i=t.propFix[i]||i,o=t.propHooks[i]),void 0!==n?o&&"set"in o&&void 0!==(s=o.set(e,n,i))?s:e[i]=n:o&&"get"in o&&null!==(s=o.get(e,i))?s:e[i]},propHooks:{tabIndex:{get:function(e){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var i=t.find.attr(e,"tabindex");return i?parseInt(i,10):n.test(e.nodeName)||s.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
i.optSelected||(t.propHooks.selected={get:function(t){/* eslint no-unused-expressions: "off" */
var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){/* eslint no-unused-expressions: "off" */
var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),t.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){t.propFix[this.toLowerCase()]=this})}.apply(e,n))&&(t.exports=s)},/* 37 */
/***/
function(t,e,i){var n,s;n=[i(1)],void 0!==(s=function(t){"use strict";function e(e,i){i=i||t;var n=i.createElement("script");n.text=e,i.head.appendChild(n).parentNode.removeChild(n)}return e}.apply(e,n))&&(t.exports=s)},/* 38 */
/***/
function(t,e,i){var n,s;n=[i(0),i(1),i(81),i(10)],void 0!==(s=function(t,e){"use strict";
// The ready event handler and self cleanup method
function i(){e.removeEventListener("DOMContentLoaded",i),window.removeEventListener("load",i),t.ready()}
// The deferred used on DOM ready
var n=t.Deferred();t.fn.ready=function(e){return n.then(e).catch(function(e){t.readyException(e)}),this},t.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(i){
// Abort if there are pending holds or we're already ready
(!0===i?--t.readyWait:t.isReady)||(
// Remember that the DOM is ready
t.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
!0!==i&&--t.readyWait>0||
// If there are functions bound, to execute
n.resolveWith(e,[t]))}}),t.ready.then=n.then,
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
"complete"===e.readyState||"loading"!==e.readyState&&!e.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
window.setTimeout(t.ready):(
// Use the handy event callback
e.addEventListener("DOMContentLoaded",i),
// A fallback to window.onload, that will always work
window.addEventListener("load",i))}.apply(e,n))&&(t.exports=s)},/* 39 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";
// Match a standalone tag
return/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i}.call(e,i,e,t))&&(t.exports=n)},/* 40 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";function t(t,e){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}return t}.call(e,i,e,t))&&(t.exports=n)},/* 41 */
/***/
function(t,e,i){var n,s;n=[i(0),i(31)],void 0!==(s=function(t,e){"use strict";function i(i,n,s,o){var a,r=1,l=20,h=o?function(){return o.cur()}:function(){return t.css(i,n,"")},c=h(),u=s&&s[3]||(t.cssNumber[n]?"":"px"),
// Starting value computation is required for potential unit mismatches
d=(t.cssNumber[n]||"px"!==u&&+c)&&e.exec(t.css(i,n));if(d&&d[3]!==u){
// Trust units reported by jQuery.css
u=u||d[3],
// Make sure we update the tween properties later on
s=s||[],
// Iteratively approximate from a nonzero starting point
d=+c||1;do{
// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
r=r||".5",
// Adjust and apply
d/=r,t.style(i,n,d+u)}while(r!==(r=h()/c)&&1!==r&&--l)}
// Apply relative offset (+=/-=) if specified
return s&&(d=+d||+c||0,a=s[1]?d+(s[1]+1)*s[2]:+s[2],o&&(o.unit=u,o.start=d,o.end=a)),a}return i}.apply(e,n))&&(t.exports=s)},/* 42 */
/***/
function(t,e,i){var n,s;n=[i(0),i(21),i(46),i(44),i(20),i(2)],void 0!==(s=function(t,e,i,n,s){"use strict";function o(o,a,r){var l,h,c,u,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
d=o.style;
// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
return r=r||n(o),r&&(u=r.getPropertyValue(a)||r[a],""!==u||t.contains(o.ownerDocument,o)||(u=t.style(o,a)),!s.pixelMarginRight()&&e.test(u)&&i.test(a)&&(l=d.width,h=d.minWidth,c=d.maxWidth,d.minWidth=d.maxWidth=d.width=u,u=r.width,d.width=l,d.minWidth=h,d.maxWidth=c)),void 0!==u?u+"":u}return o}.apply(e,n))&&(t.exports=s)},/* 43 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";return["Top","Right","Bottom","Left"]}.call(e,i,e,t))&&(t.exports=n)},/* 44 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";return function(t){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var e=t.ownerDocument.defaultView;return e&&e.opener||(e=window),e.getComputedStyle(t)}}.call(e,i,e,t))&&(t.exports=n)},/* 45 */
/***/
function(t,e,i){var n,s;n=[i(0),i(2)],void 0!==(s=function(t){"use strict";
// isHiddenWithinTree reports if an element has a non-"none" display style (inline and/or
// through the CSS cascade), which is useful in deciding whether or not to make it visible.
// It differs from the :hidden selector (jQuery.expr.pseudos.hidden) in two important ways:
// * A hidden ancestor does not force an element to be classified as hidden.
// * Being disconnected from the document does not force an element to be classified as hidden.
// These differences improve the behavior of .toggle() et al. when applied to elements that are
// detached or contained within hidden ancestors (gh-2404, gh-2863).
return function(e,i){
// Inline style trumps all
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
return e=i||e,"none"===e.style.display||""===e.style.display&&t.contains(e.ownerDocument,e)&&"none"===t.css(e,"display")}}.apply(e,n))&&(t.exports=s)},/* 46 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";return/^margin/}.call(e,i,e,t))&&(t.exports=n)},/* 47 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";
// A method for quickly swapping in/out CSS properties to get correct calculations.
return function(t,e,i,n){var s,o,a={};
// Remember the old values, and insert the new ones
for(o in e)a[o]=t.style[o],t.style[o]=e[o];s=i.apply(t,n||[]);
// Revert the old values
for(o in e)t.style[o]=a[o];return s}}.call(e,i,e,t))&&(t.exports=n)},/* 48 */
/***/
function(t,e,i){var n,s;n=[i(0),i(6),i(22)],void 0!==(s=function(t,e,i){"use strict";function n(){this.expando=t.expando+n.uid++}return n.uid=1,n.prototype={cache:function(t){
// Check if the owner object already has a cache
var e=t[this.expando];
// If not, create one
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
return e||(e={},i(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(e,i,n){var s,o=this.cache(e);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof i)o[t.camelCase(i)]=n;else
// Copy the properties one-by-one to the cache object
for(s in i)o[t.camelCase(s)]=i[s];return o},get:function(e,i){
// Always use camelCase key (gh-2257)
return void 0===i?this.cache(e):e[this.expando]&&e[this.expando][t.camelCase(i)]},access:function(t,e,i){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
return void 0===e||e&&"string"==typeof e&&void 0===i?this.get(t,e):(this.set(t,e,i),void 0!==i?i:e)},remove:function(i,n){var s,o=i[this.expando];if(void 0!==o){if(void 0!==n){
// Support array or space separated string of keys
Array.isArray(n)?
// If key is an array of keys...
// We always set camelCase keys, so remove that.
n=n.map(t.camelCase):(n=t.camelCase(n),
// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
n=n in o?[n]:n.match(e)||[]),s=n.length;for(;s--;)delete o[n[s]]}
// Remove the expando if there's no more data
(void 0===n||t.isEmptyObject(o))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
i.nodeType?i[this.expando]=void 0:delete i[this.expando])}},hasData:function(e){var i=e[this.expando];return void 0!==i&&!t.isEmptyObject(i)}},n}.apply(e,n))&&(t.exports=s)},/* 49 */
/***/
function(t,e,i){var n,s;n=[i(48)],void 0!==(s=function(t){"use strict";return new t}.apply(e,n))&&(t.exports=s)},/* 50 */
/***/
function(t,e,i){var n,s;n=[i(0),i(55),i(54),i(56),i(51),i(52)],void 0!==(s=function(t,e,i,n,s,o){"use strict";function a(a,l,h,c,u){for(var d,p,f,g,m,v,_=l.createDocumentFragment(),b=[],y=0,w=a.length;y<w;y++)if((d=a[y])||0===d)
// Add nodes directly
if("object"===t.type(d))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
t.merge(b,d.nodeType?[d]:d);else if(r.test(d)){for(p=p||_.appendChild(l.createElement("div")),
// Deserialize a standard representation
f=(e.exec(d)||["",""])[1].toLowerCase(),g=n[f]||n._default,p.innerHTML=g[1]+t.htmlPrefilter(d)+g[2],
// Descend through wrappers to the right content
v=g[0];v--;)p=p.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
t.merge(b,p.childNodes),
// Remember the top-level container
p=_.firstChild,
// Ensure the created nodes are orphaned (#12392)
p.textContent=""}else b.push(l.createTextNode(d));for(
// Remove wrapper from fragment
_.textContent="",y=0;d=b[y++];)
// Skip elements already in the context collection (trac-4087)
if(c&&t.inArray(d,c)>-1)u&&u.push(d);else
// Capture executables
if(m=t.contains(d.ownerDocument,d),
// Append to fragment
p=s(_.appendChild(d),"script"),
// Preserve script evaluation history
m&&o(p),h)for(v=0;d=p[v++];)i.test(d.type||"")&&h.push(d);return _}var r=/<|&#?\w+;/;return a}.apply(e,n))&&(t.exports=s)},/* 51 */
/***/
function(t,e,i){var n,s;n=[i(0),i(5)],void 0!==(s=function(t,e){"use strict";function i(i,n){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var s;return s=void 0!==i.getElementsByTagName?i.getElementsByTagName(n||"*"):void 0!==i.querySelectorAll?i.querySelectorAll(n||"*"):[],void 0===n||n&&e(i,n)?t.merge([i],s):s}return i}.apply(e,n))&&(t.exports=s)},/* 52 */
/***/
function(t,e,i){var n,s;n=[i(4)],void 0!==(s=function(t){"use strict";
// Mark scripts as having already been evaluated
function e(e,i){for(var n=0,s=e.length;n<s;n++)t.set(e[n],"globalEval",!i||t.get(i[n],"globalEval"))}return e}.apply(e,n))&&(t.exports=s)},/* 53 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";return/^(?:checkbox|radio)$/i}.call(e,i,e,t))&&(t.exports=n)},/* 54 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";return/^$|\/(?:java|ecma)script/i}.call(e,i,e,t))&&(t.exports=n)},/* 55 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";return/<([a-z][^\/\0>\x20\t\r\n\f]+)/i}.call(e,i,e,t))&&(t.exports=n)},/* 56 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";
// We have to close these tags to support XHTML (#13200)
var t={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
return t.optgroup=t.option,t.tbody=t.tfoot=t.colgroup=t.caption=t.thead,t.th=t.td,t}.call(e,i,e,t))&&(t.exports=n)},/* 57 */
/***/
function(t,e,i){var n,s;n=[i(0),i(53),i(3),i(12),// filter
i(36)],void 0!==(s=function(t,e){"use strict";function i(e,s,o,a){var r;if(Array.isArray(s))
// Serialize array item.
t.each(s,function(t,s){o||n.test(e)?
// Treat each array item as a scalar.
a(e,s):
// Item is non-scalar (array or object), encode its numeric index.
i(e+"["+("object"==typeof s&&null!=s?t:"")+"]",s,o,a)});else if(o||"object"!==t.type(s))
// Serialize scalar item.
a(e,s);else
// Serialize object item.
for(r in s)i(e+"["+r+"]",s[r],o,a)}var n=/\[\]$/,s=/^(?:submit|button|image|reset|file)$/i,o=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
return t.param=function(e,n){var s,o=[],a=function(e,i){
// If value is a function, invoke it and use its return value
var n=t.isFunction(i)?i():i;o[o.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};
// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!t.isPlainObject(e))
// Serialize the form elements
t.each(e,function(){a(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(s in e)i(s,e[s],n,a);
// Return the resulting serialization
return o.join("&")},t.fn.extend({serialize:function(){return t.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=t.prop(this,"elements");return e?t.makeArray(e):this}).filter(function(){var i=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!t(this).is(":disabled")&&o.test(this.nodeName)&&!s.test(i)&&(this.checked||!e.test(i))}).map(function(e,i){var n=t(this).val();return null==n?null:Array.isArray(n)?t.map(n,function(t){return{name:i.name,value:t.replace(/\r?\n/g,"\r\n")}}):{name:i.name,value:n.replace(/\r?\n/g,"\r\n")}}).get()}}),t}.apply(e,n))&&(t.exports=s)},/* 58 */
/***/
function(t,e,i){var n,s;n=[i(0),i(29),i(59),i(2)],void 0!==(s=function(t,e,i){"use strict";
// Implement the identical functionality for filter and not
function n(i,n,o){
// Single element
// Arraylike of elements (jQuery, arguments, Array)
// Simple selector that can be filtered directly, removing non-Elements
// Complex selector, compare the two sets, removing non-Elements
return t.isFunction(n)?t.grep(i,function(t,e){return!!n.call(t,e,t)!==o}):n.nodeType?t.grep(i,function(t){return t===n!==o}):"string"!=typeof n?t.grep(i,function(t){return e.call(n,t)>-1!==o}):s.test(n)?t.filter(n,i,o):(n=t.filter(n,i),t.grep(i,function(t){return e.call(n,t)>-1!==o&&1===t.nodeType}))}var s=/^.[^:#\[\.,]*$/;t.filter=function(e,i,n){var s=i[0];return n&&(e=":not("+e+")"),1===i.length&&1===s.nodeType?t.find.matchesSelector(s,e)?[s]:[]:t.find.matches(e,t.grep(i,function(t){return 1===t.nodeType}))},t.fn.extend({find:function(e){var i,n,s=this.length,o=this;if("string"!=typeof e)return this.pushStack(t(e).filter(function(){for(i=0;i<s;i++)if(t.contains(o[i],this))return!0}));for(n=this.pushStack([]),i=0;i<s;i++)t.find(e,o[i],n);return s>1?t.uniqueSort(n):n},filter:function(t){return this.pushStack(n(this,t||[],!1))},not:function(t){return this.pushStack(n(this,t||[],!0))},is:function(e){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!n(this,"string"==typeof e&&i.test(e)?t(e):e||[],!1).length}})}.apply(e,n))&&(t.exports=s)},/* 59 */
/***/
function(t,e,i){var n,s;n=[i(0),i(2)],void 0!==(s=function(t){"use strict";return t.expr.match.needsContext}.apply(e,n))&&(t.exports=s)},/* 60 */
/***/
function(t,e,i){var n,s;n=[i(14)],void 0!==(s=function(t){"use strict";return t.concat}.apply(e,n))&&(t.exports=s)},/* 61 */
/***/
function(t,e,i){var n,s;n=[i(28)],void 0!==(s=function(t){"use strict";return t.toString}.apply(e,n))&&(t.exports=s)},/* 62 */
/***/
function(t,e,i){var n,s;n=[i(14)],void 0!==(s=function(t){"use strict";return t.push}.apply(e,n))&&(t.exports=s)},/* 63 */
/***/
function(t,e,i){"use strict";function n(t){t&&t.preventDefault(),$(".js-ticket-selection").parents("tr").removeClass("showSelected"),1==$(".js-ticket-selection:checked").length?($(".js-ticket-selection:checked").parents("tr").addClass("showSelected"),$(".js-checkout-btn").prop("disabled",!1)):$(".js-checkout-btn").prop("disabled",!0)}
//require('jquery');
i(66),i(68),i(65);var s=i(64);
//const common = require("imports?window=>{}!exports?window.common!./common.js");
$(function(){$("#accordion").accordion(),$("#datepicker").datepicker()}),$(function(){function t(t){var i;try{i=$.datepicker.parseDate(e,t.value)}catch(t){i=null}return i}var e="mm/dd/yy",i=$("#from").datepicker({defaultDate:"+1w",changeMonth:!0,numberOfMonths:3}).on("change",function(){n.datepicker("option","minDate",t(this))}),n=$("#to").datepicker({defaultDate:"+1w",changeMonth:!0,numberOfMonths:3}).on("change",function(){i.datepicker("option","maxDate",t(this))})}),$(document).ready(function(){$(".js-tickets-modal").modal(),n()}),$(document).ready(function(){console.log(s);var t=s.datepickerConfig();$(".js-search-start-date").datepicker(t),$(".js-search-end-date").datepicker(t)})},/* 64 */
/***/
function(t,e,i){"use strict";var n=function(){function t(t,e,i){t&&$(".js-confirm-modal-title").text(t),e&&$(".js-confirm-modal-body").html(e),$(".js-confirm-modal-yes").off("click"),i&&$(".js-confirm-modal-yes").on("click",i),$(".js-confirm-modal").modal()}function e(t,e,i,n){$(".js-delete-btn-"+t).text(n).attr("disabled",!0),$.ajax({url:e,type:"DELETE",dataType:"json",data:{_token:$("input[name=_token]").val()},success:function(e){$(".js-rowid-"+t).remove(),$(".js-confirm-modal").modal("hide")},error:function(e){$(".js-delete-btn-"+t).text(i).attr("disabled",!1),"status"in e&&401==e.status?$(".js-status-"+t).text(unauthorized).show():"responseJSON"in e&&"message"in e.responseJSON&&$(".js-status-"+t).text(e.responseJSON.message).show(),$(".js-confirm-modal").modal("hide")}})}return{taskWithConfirm:function(e,i,n){t(e,i,n)},handleDelete:function(t,i,n){e(t,i,n)},toggleInfo:function(t,e){t.preventDefault();var i=$(e).html();$(".js-info-display-response").html(i),$(".js-info-display-modal").modal()},showHide:function(t,e){t.preventDefault(),$(e).toggle()},datepickerConfig:function(){return{showButtonPanel:!0,changeYear:!0,changeMonth:!0,dateFormat:"yy-mm-dd",monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNamesMin:["S","M","Tu","W","Th","F","Sa"],beforeShow:function(t,e){e.dpDiv.css({marginTop:-t.offsetHeight+"px",marginLeft:t.offsetWidth+"px"}),$(".ui-datepicker").css("font-size",12)}}}}}();t.exports=n},/* 65 */
/***/
function(t,e){/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),function(t){"use strict";
// CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
// ============================================================
function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}
// http://blog.alexmaccaw.com/css-transitions
t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;t(this).one("bsTransitionEnd",function(){i=!0});var s=function(){i||t(n).trigger(t.support.transition.end)};return setTimeout(s,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(t){"use strict";
// ALERT PLUGIN DEFINITION
// =======================
function e(e){return this.each(function(){var i=t(this),s=i.data("bs.alert");s||i.data("bs.alert",s=new n(this)),"string"==typeof e&&s[e].call(i)})}
// ALERT CLASS DEFINITION
// ======================
var i='[data-dismiss="alert"]',n=function(e){t(e).on("click",i,this.close)};n.VERSION="3.3.7",n.TRANSITION_DURATION=150,n.prototype.close=function(e){function i(){
// detach from parent, fire event then clean up data
a.detach().trigger("closed.bs.alert").remove()}var s=t(this),o=s.attr("data-target");o||(o=s.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,""));var a=t("#"===o?[]:o);e&&e.preventDefault(),a.length||(a=s.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i())};var s=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=n,
// ALERT NO CONFLICT
// =================
t.fn.alert.noConflict=function(){return t.fn.alert=s,this},
// ALERT DATA-API
// ==============
t(document).on("click.bs.alert.data-api",i,n.prototype.close)}(jQuery),function(t){"use strict";
// BUTTON PLUGIN DEFINITION
// ========================
function e(e){return this.each(function(){var n=t(this),s=n.data("bs.button"),o="object"==typeof e&&e;s||n.data("bs.button",s=new i(this,o)),"toggle"==e?s.toggle():e&&s.setState(e)})}
// BUTTON PUBLIC CLASS DEFINITION
// ==============================
var i=function(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.isLoading=!1};i.VERSION="3.3.7",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",n=this.$element,s=n.is("input")?"val":"html",o=n.data();e+="Text",null==o.resetText&&n.data("resetText",n[s]()),
// push to event loop to allow forms to submit
setTimeout(t.proxy(function(){n[s](null==o[e]?this.options[e]:o[e]),"loadingText"==e?(this.isLoading=!0,n.addClass(i).attr(i,i).prop(i,!0)):this.isLoading&&(this.isLoading=!1,n.removeClass(i).removeAttr(i).prop(i,!1))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,
// BUTTON NO CONFLICT
// ==================
t.fn.button.noConflict=function(){return t.fn.button=n,this},
// BUTTON DATA-API
// ===============
t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var n=t(i.target).closest(".btn");e.call(n,"toggle"),t(i.target).is('input[type="radio"], input[type="checkbox"]')||(
// Prevent double click on radios, and the double selections (so cancellation) on checkboxes
i.preventDefault(),
// The target component still receive the focus
n.is("input,button")?n.trigger("focus"):n.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),function(t){"use strict";
// CAROUSEL PLUGIN DEFINITION
// ==========================
function e(e){return this.each(function(){var n=t(this),s=n.data("bs.carousel"),o=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e),a="string"==typeof e?e:o.slide;s||n.data("bs.carousel",s=new i(this,o)),"number"==typeof e?s.to(e):a?s[a]():o.interval&&s.pause().cycle()})}
// CAROUSEL CLASS DEFINITION
// =========================
var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.7",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var n="prev"==t?-1:1,s=(i+n)%this.$items.length;return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))// yes, "slid"
return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){if(!this.sliding)return this.slide("next")},i.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},i.prototype.slide=function(e,n){var s=this.$element.find(".item.active"),o=n||this.getItemForDirection(e,s),a=this.interval,r="next"==e?"left":"right",l=this;if(o.hasClass("active"))return this.sliding=!1;var h=o[0],c=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var u=t(this.$indicators.children()[this.getItemIndex(o)]);u&&u.addClass("active")}var d=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});// yes, "slid"
// force reflow
return t.support.transition&&this.$element.hasClass("slide")?(o.addClass(e),o[0].offsetWidth,s.addClass(r),o.addClass(r),s.one("bsTransitionEnd",function(){o.removeClass([e,r].join(" ")).addClass("active"),s.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(d)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(s.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),a&&this.cycle(),this}};var n=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,
// CAROUSEL NO CONFLICT
// ====================
t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this};
// CAROUSEL DATA-API
// =================
var s=function(i){var n,s=t(this),o=t(s.attr("data-target")||(n=s.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""));// strip for ie7
if(o.hasClass("carousel")){var a=t.extend({},o.data(),s.data()),r=s.attr("data-slide-to");r&&(a.interval=!1),e.call(o,a),r&&o.data("bs.carousel").to(r),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",s).on("click.bs.carousel.data-api","[data-slide-to]",s),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),function(t){"use strict";function e(e){var i,n=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");// strip for ie7
return t(n)}
// COLLAPSE PLUGIN DEFINITION
// ==========================
function i(e){return this.each(function(){var i=t(this),s=i.data("bs.collapse"),o=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);!s&&o.toggle&&/show|hide/.test(e)&&(o.toggle=!1),s||i.data("bs.collapse",s=new n(this,o)),"string"==typeof e&&s[e]()})}
// COLLAPSE PUBLIC CLASS DEFINITION
// ================================
var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};n.VERSION="3.3.7",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,s=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(s&&s.length&&(e=s.data("bs.collapse"))&&e.transitioning)){var o=t.Event("show.bs.collapse");if(this.$element.trigger(o),!o.isDefaultPrevented()){s&&s.length&&(i.call(s,"hide"),e||s.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[a](this.$element[0][l])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var s=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!t.support.transition)return s.call(this);this.$element[i](0).one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(n.TRANSITION_DURATION)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,n){var s=t(n);this.addAriaAndCollapsedClass(e(s),s)},this)).end()},n.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var s=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=n,
// COLLAPSE NO CONFLICT
// ====================
t.fn.collapse.noConflict=function(){return t.fn.collapse=s,this},
// COLLAPSE DATA-API
// =================
t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var s=t(this);s.attr("data-target")||n.preventDefault();var o=e(s),a=o.data("bs.collapse"),r=a?"toggle":s.data();i.call(o,r)})}(jQuery),function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}function i(i){i&&3===i.which||(t(s).remove(),t(o).each(function(){var n=t(this),s=e(n),o={relatedTarget:this};s.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(s[0],i.target)||(s.trigger(i=t.Event("hide.bs.dropdown",o)),i.isDefaultPrevented()||(n.attr("aria-expanded","false"),s.removeClass("open").trigger(t.Event("hidden.bs.dropdown",o)))))}))}
// DROPDOWN PLUGIN DEFINITION
// ==========================
function n(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new a(this)),"string"==typeof e&&n[e].call(i)})}
// DROPDOWN CLASS DEFINITION
// =========================
var s=".dropdown-backdrop",o='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.7",a.prototype.toggle=function(n){var s=t(this);if(!s.is(".disabled, :disabled")){var o=e(s),a=o.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&
// if mobile we use a backdrop because click events don't delegate
t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(o.trigger(n=t.Event("show.bs.dropdown",r)),n.isDefaultPrevented())return;s.trigger("focus").attr("aria-expanded","true"),o.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var n=t(this);if(i.preventDefault(),i.stopPropagation(),!n.is(".disabled, :disabled")){var s=e(n),a=s.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&s.find(o).trigger("focus"),n.trigger("click");var r=s.find(".dropdown-menu li:not(.disabled):visible a");if(r.length){var l=r.index(i.target);38==i.which&&l>0&&l--,// up
40==i.which&&l<r.length-1&&l++,// down
~l||(l=0),r.eq(l).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=n,t.fn.dropdown.Constructor=a,
// DROPDOWN NO CONFLICT
// ====================
t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},
// APPLY TO STANDARD DROPDOWN ELEMENTS
// ===================================
t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",o,a.prototype.toggle).on("keydown.bs.dropdown.data-api",o,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),function(t){"use strict";
// MODAL PLUGIN DEFINITION
// =======================
function e(e,n){return this.each(function(){var s=t(this),o=s.data("bs.modal"),a=t.extend({},i.DEFAULTS,s.data(),"object"==typeof e&&e);o||s.data("bs.modal",o=new i(this,a)),"string"==typeof e?o[e](n):a.show&&o.show(n)})}
// MODAL CLASS DEFINITION
// ======================
var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.7",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var n=this,s=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){n.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(n.$element)&&(n.ignoreBackdropClick=!0)})}),this.backdrop(function(){var s=t.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(n.$body),n.$element.show().scrollTop(0),n.adjustDialog(),s&&n.$element[0].offsetWidth,n.$element.addClass("in"),n.enforceFocus();var o=t.Event("shown.bs.modal",{relatedTarget:e});s?n.$dialog.one("bsTransitionEnd",function(){n.$element.trigger("focus").trigger(o)}).emulateTransitionEnd(i.TRANSITION_DURATION):n.$element.trigger("focus").trigger(o)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var n=this,s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=t.support.transition&&s;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+s).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){if(this.ignoreBackdropClick)return void(this.ignoreBackdropClick=!1);t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,// force reflow
this.$backdrop.addClass("in"),!e)return;o?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){n.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},
// these following methods are used to handle overflowing modals
i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){// workaround for missing window.innerWidth in IE8
var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){// thx walsh
var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var n=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,
// MODAL NO CONFLICT
// =================
t.fn.modal.noConflict=function(){return t.fn.modal=n,this},
// MODAL DATA-API
// ==============
t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var n=t(this),s=n.attr("href"),o=t(n.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),a=o.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},o.data(),n.data());n.is("a")&&i.preventDefault(),o.one("show.bs.modal",function(t){t.isDefaultPrevented()||// only register focus restorer if modal will actually get shown
o.one("hidden.bs.modal",function(){n.is(":visible")&&n.trigger("focus")})}),e.call(o,a,this)})}(jQuery),function(t){"use strict";
// TOOLTIP PLUGIN DEFINITION
// =========================
function e(e){return this.each(function(){var n=t(this),s=n.data("bs.tooltip"),o="object"==typeof e&&e;!s&&/destroy|hide/.test(e)||(s||n.data("bs.tooltip",s=new i(this,o)),"string"==typeof e&&s[e]())})}
// TOOLTIP PUBLIC CLASS DEFINITION
// ===============================
var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,n){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(n),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var s=this.options.trigger.split(" "),o=s.length;o--;){var a=s[o];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,n){i[t]!=n&&(e[t]=n)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),!i.isInStateTrue()){if(clearTimeout(i.timeout),i.hoverState="out",!i.options.delay||!i.options.delay.hide)return i.hide();i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)}},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var n=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!n)return;var s=this,o=this.tip(),a=this.getUID(this.type);this.setContent(),o.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&o.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(r);h&&(r=r.replace(l,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?o.appendTo(this.options.container):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var c=this.getPosition(),u=o[0].offsetWidth,d=o[0].offsetHeight;if(h){var p=r,f=this.getPosition(this.$viewport);r="bottom"==r&&c.bottom+d>f.bottom?"top":"top"==r&&c.top-d<f.top?"bottom":"right"==r&&c.right+u>f.width?"left":"left"==r&&c.left-u<f.left?"right":r,o.removeClass(p).addClass(r)}var g=this.getCalculatedOffset(r,c,u,d);this.applyPlacement(g,r);var m=function(){var t=s.hoverState;s.$element.trigger("shown.bs."+s.type),s.hoverState=null,"out"==t&&s.leave(s)};t.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m()}},i.prototype.applyPlacement=function(e,i){var n=this.tip(),s=n[0].offsetWidth,o=n[0].offsetHeight,a=parseInt(n.css("margin-top"),10),r=parseInt(n.css("margin-left"),10);
// we must check for NaN for ie 8/9
isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top+=a,e.left+=r,
// $.fn.offset doesn't round pixel values
// so we use setOffset directly with our own function B-0
t.offset.setOffset(n[0],t.extend({using:function(t){n.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),n.addClass("in");
// check to see if placing tip in new offset caused the tip to resize itself
var l=n[0].offsetWidth,h=n[0].offsetHeight;"top"==i&&h!=o&&(e.top=e.top+o-h);var c=this.getViewportAdjustedDelta(i,e,l,h);c.left?e.left+=c.left:e.top+=c.top;var u=/top|bottom/.test(i),d=u?2*c.left-s+l:2*c.top-o+h,p=u?"offsetWidth":"offsetHeight";n.offset(e),this.replaceArrow(d,n[0][p],u)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function n(){"in"!=s.hoverState&&o.detach(),s.$element&&// TODO: Check whether guarding this code with this `if` is really necessary.
s.$element.removeAttr("aria-describedby").trigger("hidden.bs."+s.type),e&&e()}var s=this,o=t(this.$tip),a=t.Event("hide.bs."+this.type);if(this.$element.trigger(a),!a.isDefaultPrevented())return o.removeClass("in"),t.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n(),this.hoverState=null,this},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],n="BODY"==i.tagName,s=i.getBoundingClientRect();null==s.width&&(
// width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
s=t.extend({},s,{width:s.right-s.left,height:s.bottom-s.top}));var o=window.SVGElement&&i instanceof window.SVGElement,a=n?{top:0,left:0}:o?null:e.offset(),r={scroll:n?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=n?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},s,r,l,a)},i.prototype.getCalculatedOffset=function(t,e,i,n){/* placement == 'right' */
return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-n,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-n/2,left:e.left-i}:{top:e.top+e.height/2-n/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,n){var s={top:0,left:0};if(!this.$viewport)return s;var o=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-o-a.scroll,l=e.top+o-a.scroll+n;r<a.top?// top overflow
s.top=a.top-r:l>a.top+a.height&&(// bottom overflow
s.top=a.top+a.height-l)}else{var h=e.left-o,c=e.left+o+i;h<a.left?// left overflow
s.left=a.left-h:c>a.right&&(// right overflow
s.left=a.left+a.width-c)}return s},i.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},i.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&((i=t(e.currentTarget).data("bs."+this.type))||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var n=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,
// TOOLTIP NO CONFLICT
// ===================
t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(jQuery),function(t){"use strict";
// POPOVER PLUGIN DEFINITION
// =========================
function e(e){return this.each(function(){var n=t(this),s=n.data("bs.popover"),o="object"==typeof e&&e;!s&&/destroy|hide/.test(e)||(s||n.data("bs.popover",s=new i(this,o)),"string"==typeof e&&s[e]())})}
// POPOVER PUBLIC CLASS DEFINITION
// ===============================
var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.7",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),
// NOTE: POPOVER EXTENDS tooltip.js
// ================================
i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[// we use append for html objects to maintain js events
this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),
// IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
// this manually by checking the contents.
t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var n=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,
// POPOVER NO CONFLICT
// ===================
t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(jQuery),function(t){"use strict";
// SCROLLSPY CLASS DEFINITION
// ==========================
function e(i,n){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}
// SCROLLSPY PLUGIN DEFINITION
// ===========================
function i(i){return this.each(function(){var n=t(this),s=n.data("bs.scrollspy"),o="object"==typeof i&&i;s||n.data("bs.scrollspy",s=new e(this,o)),"string"==typeof i&&s[i]()})}e.VERSION="3.3.7",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),s=e.data("target")||e.attr("href"),o=/^#./.test(s)&&t(s);return o&&o.length&&o.is(":visible")&&[[o[i]().top+n,s]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),n=this.options.offset+i-this.$scrollElement.height(),s=this.offsets,o=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=n)return a!=(t=o[o.length-1])&&this.activate(t);if(a&&e<s[0])return this.activeTarget=null,this.clear();for(t=s.length;t--;)a!=o[t]&&e>=s[t]&&(void 0===s[t+1]||e<s[t+1])&&this.activate(o[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parents("li").addClass("active");n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var n=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,
// SCROLLSPY NO CONFLICT
// =====================
t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},
// SCROLLSPY DATA-API
// ==================
t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),function(t){"use strict";
// TAB PLUGIN DEFINITION
// =====================
function e(e){return this.each(function(){var n=t(this),s=n.data("bs.tab");s||n.data("bs.tab",s=new i(this)),"string"==typeof e&&s[e]()})}
// TAB CLASS DEFINITION
// ====================
var i=function(e){
// jscs:disable requireDollarBeforejQueryAssignment
this.element=t(e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var s=i.find(".active:last a"),o=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:s[0]});if(s.trigger(o),e.trigger(a),!a.isDefaultPrevented()&&!o.isDefaultPrevented()){var r=t(n);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){s.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:s[0]})})}}},i.prototype.activate=function(e,n,s){function o(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,// reflow for transition
e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),s&&s()}var a=n.find("> .active"),r=s&&t.support.transition&&(a.length&&a.hasClass("fade")||!!n.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),a.removeClass("in")};var n=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,
// TAB NO CONFLICT
// ===============
t.fn.tab.noConflict=function(){return t.fn.tab=n,this};
// TAB DATA-API
// ============
var s=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',s).on("click.bs.tab.data-api",'[data-toggle="pill"]',s)}(jQuery),function(t){"use strict";
// AFFIX PLUGIN DEFINITION
// =======================
function e(e){return this.each(function(){var n=t(this),s=n.data("bs.affix"),o="object"==typeof e&&e;s||n.data("bs.affix",s=new i(this,o)),"string"==typeof e&&s[e]()})}
// AFFIX CLASS DEFINITION
// ======================
var i=function(e,n){this.options=t.extend({},i.DEFAULTS,n),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.7",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,n){var s=this.$target.scrollTop(),o=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return s<i&&"top";if("bottom"==this.affixed)return null!=i?!(s+this.unpin<=o.top)&&"bottom":!(s+a<=t-n)&&"bottom";var r=null==this.affixed,l=r?s:o.top,h=r?a:e;return null!=i&&s<=i?"top":null!=n&&l+h>=t-n&&"bottom"},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),n=this.options.offset,s=n.top,o=n.bottom,a=Math.max(t(document).height(),t(document.body).height());"object"!=typeof n&&(o=s=n),"function"==typeof s&&(s=n.top(this.$element)),"function"==typeof o&&(o=n.bottom(this.$element));var r=this.getState(a,e,s,o);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),h=t.Event(l+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-o})}};var n=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,
// AFFIX NO CONFLICT
// =================
t.fn.affix.noConflict=function(){return t.fn.affix=n,this},
// AFFIX DATA-API
// ==============
t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),n=i.data();n.offset=n.offset||{},null!=n.offsetBottom&&(n.offset.bottom=n.offsetBottom),null!=n.offsetTop&&(n.offset.top=n.offsetTop),e.call(i,n)})})}(jQuery)},/* 66 */
/***/
function(t,e,i){var n,s,o;/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(a){s=[i(15)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(("absolute"===(e=t.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,o)}function o(){t.datepicker._isDisabledDatepicker(f.inline?f.dpDiv.parent()[0]:f.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function a(e,i){t.extend(e,i);for(var n in i)null==i[n]&&(e[n]=i[n]);return e}function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.ui.version="1.12.1";var l=0,h=Array.prototype.slice;t.cleanData=function(e){return function(i){var n,s,o;for(o=0;null!=(s=i[o]);o++)try{(n=t._data(s,"events"))&&n.remove&&t(s).triggerHandler("remove")}catch(t){}e(i)}}(t.cleanData),t.widget=function(e,i,n){var s,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return n||(n=i,i=t.Widget),t.isArray(n)&&(n=t.extend.apply(null,[{}].concat(n))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},s=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new o(t,e)},t.extend(o,s,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(n,function(e,n){return t.isFunction(n)?void(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=s,e=n.apply(this,arguments),this._super=i,this._superApply=o,e}}()):void(r[e]=n)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:s?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),s?(t.each(s._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,o,i._proto)}),delete s._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,n,s=h.call(arguments,1),o=0,a=s.length;a>o;o++)for(i in s[o])n=s[o][i],s[o].hasOwnProperty(i)&&void 0!==n&&(e[i]=t.isPlainObject(n)?t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(s){var o="string"==typeof s,a=h.call(arguments,1),r=this;return o?this.length||"instance"!==s?this.each(function(){var i,o=t.data(this,n);return"instance"===s?(r=o,!1):o?t.isFunction(o[s])&&"_"!==s.charAt(0)?(i=o[s].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+s+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+s+"'")}):r=void 0:(a.length&&(s=t.widget.extend.apply(null,[s].concat(a))),this.each(function(){var e=t.data(this,n);e?(e.option(s||{}),e._init&&e._init()):t.data(this,n,new i(s,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,s,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},n=e.split("."),e=n.shift(),n.length){for(s=a[e]=t.widget.extend({},this.options[e]),o=0;n.length-1>o;o++)s[n[o]]=s[n[o]]||{},s=s[n[o]];if(e=n.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,n,s;for(i in e)s=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&s&&s.length&&(n=t(s.get()),this._removeClass(s,i),n.addClass(this._classes({element:n,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=s.classesElementLookup[i[r]]||t(),a=t(e.add?t.unique(a.get().concat(e.element.get())):a.not(e.element).get()),s.classesElementLookup[i[r]]=a,n.push(i[r]),o&&e.classes[i[r]]&&n.push(e.classes[i[r]])}var n=[],s=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),n.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(n,s){-1!==t.inArray(e.target,s)&&(i.classesElementLookup[n]=t(s.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){n="boolean"==typeof n?n:i;var s="string"==typeof t||null===t,o={extra:s?e:i,keys:s?t:e,element:s?this.element:t,add:n};return o.element.toggleClass(this._classes(o),n),this},_on:function(e,i,n){var s,o=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=s=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,s=this.widget()),t.each(n,function(n,a){function r(){return e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?s.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,n){var s,o,a=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(s in o)s in i||(i[s]=o[s]);return this.element.trigger(i,n),!(t.isFunction(a)&&!1===a.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,o){"string"==typeof s&&(s={effect:s});var a,r=s?!0===s||"number"==typeof s?i:s.effect||i:e;s=s||{},"number"==typeof s&&(s={duration:s}),a=!t.isEmptyObject(s),s.complete=o,s.delay&&n.delay(s.delay),a&&t.effects&&t.effects.effect[r]?n[e](s):r!==e&&n[r]?n[r](s.duration,s.easing,o):n.queue(function(i){t(this)[e](),o&&o.call(n[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var s,o=Math.max,a=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==s)return s;var e,i,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),e=o.offsetWidth,n.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=n[0].clientWidth),n.remove(),s=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),n=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),s="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth;return{width:"scroll"===n||"auto"===n&&e.height<e.element[0].scrollHeight?t.position.scrollbarWidth():0,height:s?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),n=t.isWindow(i[0]),s=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:n,isDocument:s,offset:n||s?{left:0,top:0}:t(e).offset(),scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(s){if(!s||!s.of)return d.apply(this,arguments);s=t.extend({},s);var u,p,f,g,m,v,_=t(s.of),b=t.position.getWithinInfo(s.within),y=t.position.getScrollInfo(b),w=(s.collision||"flip").split(" "),x={};return v=n(_),_[0].preventDefault&&(s.at="left top"),p=v.width,f=v.height,g=v.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(s[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),x[this]=[t?t[0]:0,e?e[0]:0],s[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===s.at[0]?m.left+=p:"center"===s.at[0]&&(m.left+=p/2),"bottom"===s.at[1]?m.top+=f:"center"===s.at[1]&&(m.top+=f/2),u=e(x.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var n,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),v=i(this,"marginTop"),k=h+d+i(this,"marginRight")+y.width,D=c+v+i(this,"marginBottom")+y.height,C=t.extend({},m),T=e(x.my,l.outerWidth(),l.outerHeight());"right"===s.my[0]?C.left-=h:"center"===s.my[0]&&(C.left-=h/2),"bottom"===s.my[1]?C.top-=c:"center"===s.my[1]&&(C.top-=c/2),C.left+=T[0],C.top+=T[1],n={marginLeft:d,marginTop:v},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](C,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:n,collisionWidth:k,collisionHeight:D,offset:[u[0]+T[0],u[1]+T[1]],my:s.my,at:s.at,within:b,elem:l})}),s.using&&(r=function(t){var e=g.left-C.left,i=e+p-h,n=g.top-C.top,r=n+f-c,u={target:{element:_,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:C.left,top:C.top,width:h,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":n>0?"bottom":"middle"};h>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(n+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(n),a(r))?"horizontal":"vertical",s.using.call(this,t,u)}),l.offset(t.extend(C,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollLeft:n.offset.left,a=n.width,r=t.left-e.collisionPosition.marginLeft,l=s-r,h=r+e.collisionWidth-a-s;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-s,t.left+=l-i):t.left=h>0&&0>=l?s:l>h?s+a-e.collisionWidth:s:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollTop:n.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=s-r,h=r+e.collisionHeight-a-s;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-s,t.top+=l-i):t.top=h>0&&0>=l?s:l>h?s+a-e.collisionHeight:s:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,n,s=e.within,o=s.offset.left+s.scrollLeft,r=s.width,l=s.isWindow?s.scrollLeft:s.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(0>(i=t.left+d+p+f+e.collisionWidth-r-o)||a(c)>i)&&(t.left+=d+p+f):u>0&&((n=t.left-e.collisionPosition.marginLeft+d+p+f-l)>0||u>a(n))&&(t.left+=d+p+f)},top:function(t,e){var i,n,s=e.within,o=s.offset.top+s.scrollTop,r=s.height,l=s.isWindow?s.scrollTop:s.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(0>(n=t.top+p+f+g+e.collisionHeight-r-o)||a(c)>n)&&(t.top+=p+f+g):u>0&&((i=t.top-e.collisionPosition.marginTop+p+f+g-l)>0||u>a(i))&&(t.top+=p+f+g)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,n){return!!t.data(e,n[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}});var c="ui-effects-",u="ui-effects-style",d="ui-effects-animated",p=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var n=c[e.type]||{};return null==t?i||!e.def?null:e.def:(t=n.floor?~~t:parseFloat(t),isNaN(t)?e.def:n.mod?(t+n.mod)%n.mod:0>t?0:t>n.max?n.max:t)}function n(i){var n=l(),s=n._rgba=[];return i=i.toLowerCase(),p(r,function(t,o){var a,r=o.re.exec(i),l=r&&o.parse(r),c=o.space||"rgba";return l?(a=n[c](l),n[h[c].cache]=a[h[c].cache],s=n._rgba=a._rgba,!1):e}),s.length?("0,0,0,0"===s.join()&&t.extend(s,o.transparent),n):o[i]}function s(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a=/^([\-+])=\s*(\d+\.?\d*)/,r=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,n,s){return new t.Color.fn.parse(e,i,n,s)},h={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},u=l.support={},d=t("<p>")[0],p=t.each;d.style.cssText="background-color:rgba(1,1,1,.5)",u.rgba=d.style.backgroundColor.indexOf("rgba")>-1,p(h,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(s,a,r,c){if(s===e)return this._rgba=[null,null,null,null],this;(s.jquery||s.nodeType)&&(s=t(s).css(a),a=e);var u=this,d=t.type(s),f=this._rgba=[];return a!==e&&(s=[s,a,r,c],d="array"),"string"===d?this.parse(n(s)||o._default):"array"===d?(p(h.rgba.props,function(t,e){f[e.idx]=i(s[e.idx],e)}),this):"object"===d?(s instanceof l?p(h,function(t,e){s[e.cache]&&(u[e.cache]=s[e.cache].slice())}):p(h,function(e,n){var o=n.cache;p(n.props,function(t,e){if(!u[o]&&n.to){if("alpha"===t||null==s[t])return;u[o]=n.to(u._rgba)}u[o][e.idx]=i(s[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,n.from&&(u._rgba=n.from(u[o])))}),this):e},is:function(t){var i=l(t),n=!0,s=this;return p(h,function(t,o){var a,r=i[o.cache];return r&&(a=s[o.cache]||o.to&&o.to(s._rgba)||[],p(o.props,function(t,i){return null!=r[i.idx]?n=r[i.idx]===a[i.idx]:e})),n}),n},_space:function(){var t=[],e=this;return p(h,function(i,n){e[n.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var n=l(t),s=n._space(),o=h[s],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),u=r.slice();return n=n[o.cache],p(o.props,function(t,s){var o=s.idx,a=r[o],l=n[o],h=c[s.type]||{};null!==l&&(null===a?u[o]=l:(h.mod&&(l-a>h.mod/2?a+=h.mod:a-l>h.mod/2&&(a-=h.mod)),u[o]=i((l-a)*e+a,s)))}),this[s](u)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),s=l(e)._rgba;return l(t.map(i,function(t,e){return(1-n)*s[e]+n*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),n=i.pop();return e&&i.push(~~(255*n)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,h.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,n=t[0]/255,s=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(n,s,o),l=Math.min(n,s,o),h=r-l,c=r+l,u=.5*c;return e=l===r?0:n===r?60*(s-o)/h+360:s===r?60*(o-n)/h+120:60*(n-s)/h+240,i=0===h?0:.5>=u?h/c:h/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},h.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],n=t[2],o=t[3],a=.5>=n?n*(1+i):n+i-n*i,r=2*n-a;return[Math.round(255*s(r,a,e+1/3)),Math.round(255*s(r,a,e)),Math.round(255*s(r,a,e-1/3)),o]},p(h,function(n,s){var o=s.props,r=s.cache,h=s.to,c=s.from;l.fn[n]=function(n){if(h&&!this[r]&&(this[r]=h(this._rgba)),n===e)return this[r].slice();var s,a=t.type(n),u="array"===a||"object"===a?n:arguments,d=this[r].slice();return p(o,function(t,e){var n=u["object"===a?t:e.idx];null==n&&(n=d[e.idx]),d[e.idx]=i(n,e)}),c?(s=l(c(d)),s[r]=d,s):l(d)},p(o,function(e,i){l.fn[e]||(l.fn[e]=function(s){var o,r=t.type(s),l="alpha"===e?this._hsla?"hsla":"rgba":n,h=this[l](),c=h[i.idx];return"undefined"===r?c:("function"===r&&(s=s.call(this,c),r=t.type(s)),null==s&&i.empty?this:("string"===r&&(o=a.exec(s))&&(s=c+parseFloat(o[2])*("+"===o[1]?1:-1)),h[i.idx]=s,this[l](h)))})})}),l.hook=function(e){var i=e.split(" ");p(i,function(e,i){t.cssHooks[i]={set:function(e,s){var o,a,r="";if("transparent"!==s&&("string"!==t.type(s)||(o=n(s)))){if(s=l(o||s),!u.rgba&&1!==s._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(t){}s=s.blend(r&&"transparent"!==r?r:"_default")}s=s.toRgbaString()}try{e.style[i]=s}catch(t){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),t.cssHooks.borderColor={expand:function(t){var e={};return p(["Top","Right","Bottom","Left"],function(i,n){e["border"+n+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(p),function(){function e(e){var i,n,s=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(s&&s.length&&s[0]&&s[s[0]])for(n=s.length;n--;)i=s[n],"string"==typeof s[i]&&(o[t.camelCase(i)]=s[i]);else for(i in s)"string"==typeof s[i]&&(o[i]=s[i]);return o}function i(e,i){var n,o,a={};for(n in i)o=i[n],e[n]!==o&&(s[n]||(t.fx.step[n]||!isNaN(parseFloat(o)))&&(a[n]=o));return a}var n=["add","remove","toggle"],s={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(p.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(s,o,a,r){var l=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",h=l.children?a.find("*").addBack():a;h=h.map(function(){return{el:t(this),start:e(this)}}),o=function(){t.each(n,function(t,e){s[e]&&a[e+"Class"](s[e])})},o(),h=h.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),a.attr("class",r),h=h.map(function(){var e=this,i=t.Deferred(),n=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,n),i.promise()}),t.when.apply(t,h.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,n,s,o){return n?t.effects.animateClass.call(this,{add:i},n,s,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,n,s,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},n,s,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,n,s,o,a){return"boolean"==typeof n||void 0===n?s?t.effects.animateClass.call(this,n?{add:i}:{remove:i},s,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},n,s,o)}}(t.fn.toggleClass),switchClass:function(e,i,n,s,o){return t.effects.animateClass.call(this,{add:i,remove:e},n,s,o)}})}(),function(){function e(e,i,n,s){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(s=i,n=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(s=n,n=i,i={}),t.isFunction(n)&&(s=n,n=null),i&&t.extend(e,i),n=n||i.duration,e.duration=t.fx.off?0:"number"==typeof n?n:n in t.fx.speeds?t.fx.speeds[n]:t.fx.speeds._default,e.complete=s||i.complete,e}function i(e){return!(e&&"number"!=typeof e&&!t.fx.speeds[e])||("string"==typeof e&&!t.effects.effect[e]||(!!t.isFunction(e)||"object"==typeof e&&!e.effect))}function n(t,e){var i=e.outerWidth(),n=e.outerHeight(),s=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=s.exec(t)||["",0,i,n,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?n:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(d)||e(i)}}(t.expr.filters.animated)),!1!==t.uiBackCompat&&t.extend(t.effects,{save:function(t,e){for(var i=0,n=e.length;n>i;i++)null!==e[i]&&t.data(c+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,n=0,s=e.length;s>n;n++)null!==e[n]&&(i=t.data(c+e[n]),t.css(e[n],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),float:e.css("float")},n=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(t){o=document.body}return e.wrap(n),(e[0]===o||t.contains(e[0],o))&&t(o).trigger("focus"),n=e.parent(),"static"===e.css("position")?(n.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,n){i[n]=e.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(s),n.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,n){return n||(n=i,i="effect"),t.effects.effect[e]=n,t.effects.effect[e].mode=i,n},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var n="horizontal"!==i?(e||100)/100:1,s="vertical"!==i?(e||100)/100:1;return{height:t.height()*s,width:t.width()*n,outerHeight:t.outerHeight()*s,outerWidth:t.outerWidth()*n}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var n=t.queue();e>1&&n.splice.apply(n,[1,0].concat(n.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(u,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(u)||"",t.removeData(u)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,n;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=t[1]/e.width}return{x:n,y:i}},createPlaceholder:function(e){var i,n=e.css("position"),s=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(n)&&(n="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),float:e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(c+"placeholder",i)),e.css({position:n,left:s.left,top:s.top}),i},removePlaceholder:function(t){var e=c+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,n,s){return s=s||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(s[i]=o[0]*n+o[1])}),s}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData(d),t.effects.cleanUp(r),"hide"===n.mode&&r.hide(),a()}function a(){t.isFunction(l)&&l.call(r[0]),t.isFunction(e)&&e()}var r=t(this);n.mode=c.shift(),!1===t.uiBackCompat||o?"none"===n.mode?(r[h](),a()):s.call(r[0],n,i):(r.is(":hidden")?"hide"===h:"show"===h)?(r[h](),a()):s.call(r[0],n,a)}var n=e.apply(this,arguments),s=t.effects.effect[n.effect],o=s.mode,a=n.queue,r=a||"fx",l=n.complete,h=n.mode,c=[],u=function(e){var i=t(this),n=t.effects.mode(i,h)||o;i.data(d,!0),c.push(n),o&&("show"===n||n===o&&"hide"===n)&&i.show(),o&&"none"===n||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!s?h?this[h](n.duration,l):this.each(function(){l&&l.call(this)}):!1===a?this.each(u).each(i):this.queue(r,u).queue(r,i)},show:function(t){return function(n){if(i(n))return t.apply(this,arguments);var s=e.apply(this,arguments);return s.mode="show",this.effect.call(this,s)}}(t.fn.show),hide:function(t){return function(n){if(i(n))return t.apply(this,arguments);var s=e.apply(this,arguments);return s.mode="hide",this.effect.call(this,s)}}(t.fn.hide),toggle:function(t){return function(n){if(i(n)||"boolean"==typeof n)return t.apply(this,arguments);var s=e.apply(this,arguments);return s.mode="toggle",this.effect.call(this,s)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),n=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(n=[parseFloat(i),e])}),n},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):n(this.css("clip"),this)},transfer:function(e,i){var n=t(this),s=t(e.to),o="fixed"===s.css("position"),a=t("body"),r=o?a.scrollTop():0,l=o?a.scrollLeft():0,h=s.offset(),c={top:h.top-r,left:h.left-l,height:s.innerHeight(),width:s.innerWidth()},u=n.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-l,height:n.innerHeight(),width:n.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=n(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}();t.effects;t.effects.define("blind","hide",function(e,i){var n={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},s=t(this),o=e.direction||"up",a=s.cssClip(),r={clip:t.extend({},a)},l=t.effects.createPlaceholder(s);r.clip[n[o][0]]=r.clip[n[o][1]],"show"===e.mode&&(s.cssClip(r.clip),l&&l.css(t.effects.clipToBox(r)),r.clip=a),l&&l.animate(t.effects.clipToBox(r),e.duration,e.easing),s.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var n,s,o,a=t(this),r=e.mode,l="hide"===r,h="show"===r,c=e.direction||"up",u=e.distance,d=e.times||5,p=2*d+(h||l?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",v="up"===c||"left"===c,_=0,b=a.queue().length;for(t.effects.createPlaceholder(a),o=a.css(m),u||(u=a["top"===m?"outerHeight":"outerWidth"]()/3),h&&(s={opacity:1},s[m]=o,a.css("opacity",0).css(m,v?2*-u:2*u).animate(s,f,g)),l&&(u/=Math.pow(2,d-1)),s={},s[m]=o;d>_;_++)n={},n[m]=(v?"-=":"+=")+u,a.animate(n,f,g).animate(s,f,g),u=l?2*u:u/2;l&&(n={opacity:0},n[m]=(v?"-=":"+=")+u,a.animate(n,f,g)),a.queue(i),t.effects.unshift(a,b,p+1)}),t.effects.define("clip","hide",function(e,i){var n,s={},o=t(this),a=e.direction||"vertical",r="both"===a,l=r||"horizontal"===a,h=r||"vertical"===a;n=o.cssClip(),s.clip={top:h?(n.bottom-n.top)/2:n.top,right:l?(n.right-n.left)/2:n.right,bottom:h?(n.bottom-n.top)/2:n.bottom,left:l?(n.right-n.left)/2:n.left},t.effects.createPlaceholder(o),"show"===e.mode&&(o.cssClip(s.clip),s.clip=n),o.animate(s,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var n,s=t(this),o=e.mode,a="show"===o,r=e.direction||"left",l="up"===r||"down"===r?"top":"left",h="up"===r||"left"===r?"-=":"+=",c="+="===h?"-=":"+=",u={opacity:0};t.effects.createPlaceholder(s),n=e.distance||s["top"===l?"outerHeight":"outerWidth"](!0)/2,u[l]=h+n,a&&(s.css(u),u[l]=c+n,u.opacity=1),s.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){function n(){b.push(this),b.length===u*d&&s()}function s(){p.css({visibility:"visible"}),t(b).remove(),i()}var o,a,r,l,h,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=e.mode,g="show"===f,m=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(l=m.top+o*_,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*v,h=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*v,top:-o*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(g?h*v:0),top:l+(g?c*_:0),opacity:g?0:1}).animate({left:r+(g?0:h*v),top:l+(g?0:c*_),opacity:g?1:0},e.duration||500,e.easing,n)}),t.effects.define("fade","toggle",function(e,i){var n="show"===e.mode;t(this).css("opacity",n?0:1).animate({opacity:n?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){var n=t(this),s=e.mode,o="show"===s,a="hide"===s,r=e.size||15,l=/([0-9]+)%/.exec(r),h=!!e.horizFirst,c=h?["right","bottom"]:["bottom","right"],u=e.duration/2,d=t.effects.createPlaceholder(n),p=n.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],v=n.queue().length;l&&(r=parseInt(l[1],10)/100*m[a?0:1]),f.clip[c[0]]=r,g.clip[c[0]]=r,g.clip[c[1]]=0,o&&(n.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),n.queue(function(i){d&&d.animate(t.effects.clipToBox(f),u,e.easing).animate(t.effects.clipToBox(g),u,e.easing),i()}).animate(f,u,e.easing).animate(g,u,e.easing).queue(i),t.effects.unshift(n,v,4)}),t.effects.define("highlight","show",function(e,i){var n=t(this),s={backgroundColor:n.css("backgroundColor")};"hide"===e.mode&&(s.opacity=0),t.effects.saveStyle(n),n.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(s,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){var n,s,o,a=t(this),r=["fontSize"],l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,u="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=a.css("position"),g=a.position(),m=t.effects.scaledDimensions(a),v=e.from||m,_=e.to||t.effects.scaledDimensions(a,0);t.effects.createPlaceholder(a),"show"===c&&(o=v,v=_,_=o),s={from:{y:v.height/m.height,x:v.width/m.width},to:{y:_.height/m.height,x:_.width/m.width}},("box"===d||"both"===d)&&(s.from.y!==s.to.y&&(v=t.effects.setTransition(a,l,s.from.y,v),_=t.effects.setTransition(a,l,s.to.y,_)),s.from.x!==s.to.x&&(v=t.effects.setTransition(a,h,s.from.x,v),_=t.effects.setTransition(a,h,s.to.x,_))),("content"===d||"both"===d)&&s.from.y!==s.to.y&&(v=t.effects.setTransition(a,r,s.from.y,v),_=t.effects.setTransition(a,r,s.to.y,_)),p&&(n=t.effects.getBaseline(p,m),v.top=(m.outerHeight-v.outerHeight)*n.y+g.top,v.left=(m.outerWidth-v.outerWidth)*n.x+g.left,_.top=(m.outerHeight-_.outerHeight)*n.y+g.top,_.left=(m.outerWidth-_.outerWidth)*n.x+g.left),a.css(v),("content"===d||"both"===d)&&(l=l.concat(["marginTop","marginBottom"]).concat(r),h=h.concat(["marginLeft","marginRight"]),a.find("*[width]").each(function(){var i=t(this),n=t.effects.scaledDimensions(i),o={height:n.height*s.from.y,width:n.width*s.from.x,outerHeight:n.outerHeight*s.from.y,outerWidth:n.outerWidth*s.from.x},a={height:n.height*s.to.y,width:n.width*s.to.x,outerHeight:n.height*s.to.y,outerWidth:n.width*s.to.x};s.from.y!==s.to.y&&(o=t.effects.setTransition(i,l,s.from.y,o),a=t.effects.setTransition(i,l,s.to.y,a)),s.from.x!==s.to.x&&(o=t.effects.setTransition(i,h,s.from.x,o),a=t.effects.setTransition(i,h,s.to.x,a)),u&&t.effects.saveStyle(i),i.css(o),i.animate(a,e.duration,e.easing,function(){u&&t.effects.restoreStyle(i)})})),a.animate(_,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===_.opacity&&a.css("opacity",v.opacity),u||(a.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(a)),i()}})}),t.effects.define("scale",function(e,i){var n=t(this),s=e.mode,o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==s?0:100),a=t.extend(!0,{from:t.effects.scaledDimensions(n),to:t.effects.scaledDimensions(n,o,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(a.from.opacity=1,a.to.opacity=0),t.effects.effect.size.call(this,a,i)}),t.effects.define("puff","hide",function(e,i){var n=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,n,i)}),t.effects.define("pulsate","show",function(e,i){var n=t(this),s=e.mode,o="show"===s,a="hide"===s,r=o||a,l=2*(e.times||5)+(r?1:0),h=e.duration/l,c=0,u=1,d=n.queue().length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),c=1);l>u;u++)n.animate({opacity:c},h,e.easing),c=1-c;n.animate({opacity:c},h,e.easing),n.queue(i),t.effects.unshift(n,d,l+1)}),t.effects.define("shake",function(e,i){var n=1,s=t(this),o=e.direction||"left",a=e.distance||20,r=e.times||3,l=2*r+1,h=Math.round(e.duration/l),c="up"===o||"down"===o?"top":"left",u="up"===o||"left"===o,d={},p={},f={},g=s.queue().length;for(t.effects.createPlaceholder(s),d[c]=(u?"-=":"+=")+a,p[c]=(u?"+=":"-=")+2*a,f[c]=(u?"-=":"+=")+2*a,s.animate(d,h,e.easing);r>n;n++)s.animate(p,h,e.easing).animate(f,h,e.easing);s.animate(p,h,e.easing).animate(d,h/2,e.easing).queue(i),t.effects.unshift(s,g,l+1)}),t.effects.define("slide","show",function(e,i){var n,s,o=t(this),a={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,l=e.direction||"left",h="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,u=e.distance||o["top"===h?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(o),n=o.cssClip(),s=o.position()[h],d[h]=(c?-1:1)*u+s,d.clip=o.cssClip(),d.clip[a[l][1]]=d.clip[a[l][0]],"show"===r&&(o.cssClip(d.clip),o.css(h,d[h]),d.clip=n,d[h]=s),o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});!1!==t.uiBackCompat&&t.effects.define("transfer",function(e,i){t(this).transfer(e,i)}),t.ui.focusable=function(i,n){var s,o,a,r,l,h=i.nodeName.toLowerCase();return"area"===h?(s=i.parentNode,o=s.name,!(!i.href||!o||"map"!==s.nodeName.toLowerCase())&&(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(h)?(r=!i.disabled)&&(l=t(i).closest("fieldset")[0])&&(r=!l.disabled):r="a"===h?i.href||n:n,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function n(e,i,n,o){return t.each(s,function(){i-=parseFloat(t.css(e,"padding"+this))||0,n&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var s="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,n(this,e)+"px")})},t.fn["outer"+i]=function(e,s){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,n(this,e,!0,s)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){return function(t){return t.replace(/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g,"\\$1")}}(),t.fn.labels=function(){var e,i,n,s,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(s=this.eq(0).parents("label"),n=this.attr("id"),n&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(n)+"']",s=s.add(o.find(i).addBack(i))),this.pushStack(s))},t.fn.scrollParent=function(e){var i=this.css("position"),n="absolute"===i,s=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return(!n||"static"!==e.css("position"))&&s.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),n=null!=i;return(!n||i>=0)&&t.ui.focusable(e,n)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||!1!==e.active&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,n=this.options.icons;n&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+n.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,n.header)._addClass(i,null,n.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?void this._activate(e):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||!1!==this.options.active||this._activate(0),void("icons"===t&&(this._destroyIcons(),e&&this._createIcons())))},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,n=this.headers.length,s=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(s+1)%n];break;case i.LEFT:case i.UP:o=this.headers[(s-1+n)%n];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[n-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),!1===e.active&&!0===e.collapsible||!this.headers.length?(e.active=!1,this.active=t()):!1===e.active?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,n=i.heightStyle,s=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),n=e.next(),s=n.uniqueId().attr("id");e.attr("aria-controls",s),n.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===n?(e=s.height(),this.element.siblings(":visible").each(function(){var i=t(this),n=i.css("position");"absolute"!==n&&"fixed"!==n&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,n,s=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],l=r&&s.collapsible,h=l?t():a.next(),c=o.next(),u={oldHeader:o,oldPanel:c,newHeader:l?t():a,newPanel:h};e.preventDefault(),r&&!s.collapsible||!1===this._trigger("beforeActivate",e,u)||(s.active=!l&&this.headers.index(a),this.active=r?t():a,this._toggle(u),this._removeClass(o,"ui-accordion-header-active","ui-state-active"),s.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,s.icons.activeHeader)._addClass(i,null,s.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),s.icons&&(n=a.children(".ui-accordion-header-icon"),this._removeClass(n,null,s.icons.header)._addClass(n,null,s.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,n=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=n,this.options.animate?this._animate(i,n,e):(n.hide(),i.show(),this._toggleComplete(e)),n.attr({"aria-hidden":"true"}),n.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&n.length?n.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var n,s,o,a=this,r=0,l=t.css("box-sizing"),h=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=h&&c.down||c,d=function(){a._toggleComplete(i)};return"number"==typeof u&&(o=u),"string"==typeof u&&(s=u),s=s||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(n=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:s,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:o,easing:s,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===l&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(n-e.outerHeight()-r),r=0)}})):e.animate(this.hideProps,o,s,d):t.animate(this.showProps,o,s,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),n=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&n.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),n=t(e.currentTarget);i[0]===n[0]&&(this._removeClass(n.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,n))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]))&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,n,s,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,n=this.previousFilter||"",o=!1,s=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),s===n?o=!0:s=n+s,i=this._filterMenuItems(s),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(s=String.fromCharCode(e.keyCode),i=this._filterMenuItems(s)),i.length?(this.focus(e,i),this.previousFilter=s,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,n,s,o,a=this,r=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),n=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),n=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(n,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(n,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),s=i.not(".ui-menu-item, .ui-menu-divider"),o=s.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(s,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,n,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),n=this.active.children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",n.attr("id")),s=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,n,s,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,n=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,s=e.offset().top-this.activeMenu.offset().top-i-n,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>s?this.activeMenu.scrollTop(o+s):s+r>a&&this.activeMenu.scrollTop(o+s-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var n=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));n.length||(n=this.element),this._close(n),this.blur(e),this._removeClass(n.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=n},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var n;this.active&&(n="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),n&&n.length&&this.active||(n=this.activeMenu.find(this.options.items)[e]()),this.focus(i,n)},nextPage:function(e){var i,n,s;return this.active?void(this.isLastItem()||(this._hasScroll()?(n=this.active.offset().top,s=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-n-s}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(e)},previousPage:function(e){var i,n,s;return this.active?void(this.isFirstItem()||(this._hasScroll()?(n=this.active.offset().top,s=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-n+s>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first()))):void this.next(e)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),n=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,n,s=this.element[0].nodeName.toLowerCase(),o="textarea"===s,a="input"===s;this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(s){if(this.element.prop("readOnly"))return e=!0,n=!0,void(i=!0);e=!1,n=!1,i=!1;var o=t.ui.keyCode;switch(s.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",s);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",s);break;case o.UP:e=!0,this._keyEvent("previous",s);break;case o.DOWN:e=!0,this._keyEvent("next",s);break;case o.ENTER:this.menu.active&&(e=!0,s.preventDefault(),this.menu.select(s));break;case o.TAB:this.menu.active&&this.menu.select(s);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(s),s.preventDefault());break;default:i=!0,this._searchTimeout(s)}},keypress:function(n){if(e)return e=!1,void((!this.isMultiLine||this.menu.element.is(":visible"))&&n.preventDefault());if(!i){var s=t.ui.keyCode;switch(n.keyCode){case s.PAGE_UP:this._move("previousPage",n);break;case s.PAGE_DOWN:this._move("nextPage",n);break;case s.UP:this._keyEvent("previous",n);break;case s.DOWN:this._keyEvent("next",n)}}},input:function(t){return n?(n=!1,void t.preventDefault()):void this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(t),void this._change(t))}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var n,s;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)})):(s=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:s})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value),void((n=i.item.attr("aria-label")||s.value)&&t.trim(n).length&&(this.liveRegion.children().hide(),t("<div>").text(n).appendTo(this.liveRegion))))},menuselect:function(e,i){var n=i.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,n=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,n){n(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,s){n.xhr&&n.xhr.abort(),n.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){s(t)},error:function(){s([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),n=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!n)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):!1!==this._trigger("search",e)?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),--this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var n=this;t.each(i,function(t,i){n._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[t](e):void this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var n=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return n.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(n,s){var o,a={};return s?"controlgroupLabel"===n?(o=e.element.find(s),o.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(o,null,"ui-widget ui-widget-content ui-state-default"),void(i=i.concat(o.get()))):void(t.fn[n]&&(a=e["_"+n+"Options"]?e["_"+n+"Options"]("middle"):{classes:{}},e.element.find(s).each(function(){var s=t(this),o=s[n]("instance"),r=t.widget.extend({},a);if("button"!==n||!s.parent(".ui-spinner").length){o||(o=s[n]()[n]("instance")),o&&(r.classes=e._resolveClassesValues(r.classes,o)),s[n](r);var l=s[n]("widget");t.data(l[0],"ui-controlgroup-data",o||s[n]("instance")),i.push(l[0])}}))):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),n=i.data("ui-controlgroup-data");n&&n[e]&&n[e]()})},_updateCornerClass:function(t,e){var i=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),this._addClass(t,null,i)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,n={classes:{}};return n.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],n},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:!!e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var n={};return t.each(e,function(s){var o=i.options.classes[s]||"";o=t.trim(o.replace(/ui-corner-([a-z]){2,6}/g,"")),n[s]=(o+" "+e[s]).replace(/\s+/g," ")}),n},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?void this._callChildMethod(e?"disable":"enable"):void this.refresh()},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,n){var s=e[n]().data("ui-controlgroup-data");if(s&&i["_"+s.widgetName+"Options"]){var o=i["_"+s.widgetName+"Options"](1===e.length?"only":n);o.classes=i._resolveClassesValues(o.classes,s),s.element[s.widgetName](o)}else i._updateCornerClass(e[n](),n)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,n=this,s=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){n.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(s.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(s.disabled=e),s},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,n="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(n):t(n).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),void(this.element[0].disabled=e)):void this.refresh()):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var n="iconPosition"!==e,s=n?this.options.iconPosition:i,o="top"===s||"bottom"===s;this.icon?n&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),n&&this._addClass(this.icon,null,i),this._attachIcon(s),o?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(s))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),!1!==t.uiBackCompat&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?void this._super("showLabel",e):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var f;t.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var n,s,o;n=e.nodeName.toLowerCase(),s="div"===n||"span"===n,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),s),o.settings=t.extend({},i||{}),"input"===n?this._connectDatepicker(e,o):s&&this._inlineDatepicker(e,o)},_newInst:function(e,i){return{id:e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var n=t(e);i.append=t([]),i.trigger=t([]),n.hasClass(this.markerClassName)||(this._attachments(n,i),n.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var n,s,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),n=this._get(i,"showOn"),("focus"===n||"both"===n)&&e.on("focus",this._showDatepicker),("button"===n||"both"===n)&&(s=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:s,title:s}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:s,title:s}):s)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,n,s,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,n=0,s=0;t.length>s;s++)t[s].length>i&&(i=t[s].length,n=s);return n},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var n=t(e);n.hasClass(this.markerClassName)||(n.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,n,s,o){var r,l,h,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,s||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,h=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+c,h/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=n,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,n=t(e),s=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(s.append.remove(),s.trigger.remove(),n.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&n.removeClass(this.markerClassName).empty(),f===s&&(f=null))},_enableDatepicker:function(e){var i,n,s=t(e),o=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(n=s.children("."+this._inlineClass),n.children().removeClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,n,s=t(e),o=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(n=s.children("."+this._inlineClass),n.children().addClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,n){var s,o,r,l,h=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):h?"all"===i?t.extend({},h.settings):this._get(h,i):null:(s=i||{},"string"==typeof i&&(s={},s[i]=n),void(h&&(this._curInst===h&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(h,"min"),l=this._getMinMaxDate(h,"max"),a(h.settings,s),null!==r&&void 0!==s.dateFormat&&void 0===s.minDate&&(h.settings.minDate=this._formatDate(h,r)),null!==l&&void 0!==s.dateFormat&&void 0===s.maxDate&&(h.settings.maxDate=this._formatDate(h,l)),"disabled"in s&&(s.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),h),this._autoSize(h),this._setDate(h,o),this._updateAlternate(h),this._updateDatepicker(h))))},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,n,s,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return s=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),s[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,s[0]),i=t.datepicker._get(o,"onSelect"),i?(n=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[n,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,n,s=t.datepicker._getInst(e.target);return t.datepicker._get(s,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(s,"dateFormat")),n=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">n||!i||i.indexOf(n)>-1):void 0},_doKeyUp:function(e){var i=t.datepicker._getInst(e.target);if(i.input.val()!==i.lastVal)try{t.datepicker.parseDate(t.datepicker._get(i,"dateFormat"),i.input?i.input.val():null,t.datepicker._getFormatConfig(i))&&(t.datepicker._setDateFromField(i),t.datepicker._updateAlternate(i),t.datepicker._updateDatepicker(i))}catch(t){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var n,s,o,r,l,h,c;n=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==n&&(t.datepicker._curInst.dpDiv.stop(!0,!0),n&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(n,"beforeShow"),!1!==(o=s?s.apply(e,[e,n]):{})&&(a(n.settings,o),n.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(n),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return!(r|="fixed"===t(this).css("position"))}),l={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,n.dpDiv.empty(),n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(n),l=t.datepicker._checkOffset(n,l,r),n.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:l.left+"px",top:l.top+"px"}),n.inline||(h=t.datepicker._get(n,"showAnim"),c=t.datepicker._get(n,"duration"),n.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?n.dpDiv.show(h,t.datepicker._get(n,"showOptions"),c):n.dpDiv[h||"show"](h?c:null),t.datepicker._shouldFocusInput(n)&&n.input.trigger("focus"),t.datepicker._curInst=n))}},_updateDatepicker:function(e){this.maxRows=4,f=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,n=this._getNumberOfMonths(e),s=n[1],a=e.dpDiv.find("."+this._dayOverClass+" a");a.length>0&&o.apply(a.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&e.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",17*s+"em"),e.dpDiv[(1!==n[0]||1!==n[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,n){var s=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(n?0:t(document).scrollLeft()),h=document.documentElement.clientHeight+(n?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?s-a:0,i.left-=n&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=n&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+s>l&&l>s?Math.abs(i.left+s-l):0),i.top-=Math.min(i.top,i.top+o>h&&h>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,n=this._getInst(e),s=this._get(n,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[s?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,n,s,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),n=this._get(a,"duration"),s=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),n,s):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?n:null,s),i||s(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),n=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==n)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,n){var s=t(e),o=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(o,i+("M"===n?this._get(o,"showCurrentAtPos"):0),n),this._updateDatepicker(o))},_gotoToday:function(e){var i,n=t(e),s=this._getInst(n[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(i=new Date,s.selectedDay=i.getDate(),s.drawMonth=s.selectedMonth=i.getMonth(),s.drawYear=s.selectedYear=i.getFullYear()),this._notifyChange(s),this._adjustDate(n)},_selectMonthYear:function(e,i,n){var s=t(e),o=this._getInst(s[0]);o["selected"+("M"===n?"Month":"Year")]=o["draw"+("M"===n?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(s)},_selectDay:function(e,i,n,s){var o,a=t(e);t(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",s).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=n,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var n,s=t(e),o=this._getInst(s[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),n=this._get(o,"onSelect"),n?n.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,n,s,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),n=this._getDate(e),s=this.formatDate(i,n,this._getFormatConfig(e)),t(o).val(s))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,n){if(null==e||null==i)throw"Invalid arguments";if(""===(i="object"==typeof i?""+i:i+""))return null;var s,o,a,r,l=0,h=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),u=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,d=(n?n.dayNames:null)||this._defaults.dayNames,p=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,f=(n?n.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,v=-1,_=-1,b=!1,y=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},w=function(t){var e=y(t),n="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,s="y"===t?n:1,o=RegExp("^\\d{"+s+","+n+"}"),a=i.substring(l).match(o);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},x=function(e,n,s){var o=-1,a=t.map(y(e)?s:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var n=e[1];return i.substr(l,n.length).toLowerCase()===n.toLowerCase()?(o=e[0],l+=n.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+l},k=function(){if(i.charAt(l)!==e.charAt(s))throw"Unexpected literal at position "+l;l++};for(s=0;e.length>s;s++)if(b)"'"!==e.charAt(s)||y("'")?k():b=!1;else switch(e.charAt(s)){case"d":v=w("d");break;case"D":x("D",u,d);break;case"o":_=w("o");break;case"m":m=w("m");break;case"M":m=x("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,v=r.getDate();break;case"'":y("'")?k():b=!0;break;default:k()}if(i.length>l&&(a=i.substr(l),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),_>-1)for(m=1,v=_;!((o=this._getDaysInMonth(g,m-1))>=v);)m++,v-=o;if(r=this._daylightSavingAdjust(new Date(g,m-1,v)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:864e9*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var n,s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,l=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},h=function(t,e,i){var n=""+e;if(l(t))for(;i>n.length;)n="0"+n;return n},c=function(t,e,i,n){return l(t)?n[e]:i[e]},u="",d=!1;if(e)for(n=0;t.length>n;n++)if(d)"'"!==t.charAt(n)||l("'")?u+=t.charAt(n):d=!1;else switch(t.charAt(n)){case"d":u+=h("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),s,o);break;case"o":u+=h("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=h("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=l("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?u+="'":d=!0;break;default:u+=t.charAt(n)}return u},_possibleChars:function(t){var e,i="",n=!1,s=function(i){var n=t.length>e+1&&t.charAt(e+1)===i;return n&&e++,n};for(e=0;t.length>e;e++)if(n)"'"!==t.charAt(e)||s("'")?i+=t.charAt(e):n=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":s("'")?i+="'":n=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),n=t.lastVal=t.input?t.input.val():null,s=this._getDefaultDate(t),o=s,a=this._getFormatConfig(t);try{o=this.parseDate(i,n,a)||s}catch(t){n=e?"":n}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=n?o.getDate():0,t.currentMonth=n?o.getMonth():0,t.currentYear=n?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,n){var s=null==i||""===i?n:"string"==typeof i?function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(t){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,s=n.getFullYear(),o=n.getMonth(),a=n.getDate(),r=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=r.exec(i);l;){switch(l[2]||"d"){case"d":case"D":a+=parseInt(l[1],10);break;case"w":case"W":a+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),a=Math.min(a,t.datepicker._getDaysInMonth(s,o));break;case"y":case"Y":s+=parseInt(l[1],10),a=Math.min(a,t.datepicker._getDaysInMonth(s,o))}l=r.exec(i)}return new Date(s,o,a)}(i):"number"==typeof i?isNaN(i)?n:function(t){var e=new Date;return e.setDate(e.getDate()+t),e}(i):new Date(i.getTime());return s=s&&"Invalid Date"==""+s?n:s,s&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var n=!e,s=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),s===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(n?"":this._formatDate(t))},_getDate:function(t){return!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),n="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(n,-i,"M")},next:function(){t.datepicker._adjustDate(n,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(n)},selectDay:function(){return t.datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(n,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(n,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,n,s,o,a,r,l,h,c,u,d,p,f,g,m,v,_,b,y,w,x,k,D,C,T,I,S,M,P,A,N,E,O,H,F,z,W,L,R=new Date,j=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),$=this._get(t,"isRTL"),Y=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),B=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),K=this._get(t,"showCurrentAtPos"),V=this._get(t,"stepMonths"),X=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-K,tt=t.drawYear;if(0>Z&&(Z+=12,tt--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&Q>e?Q:e;this._daylightSavingAdjust(new Date(tt,Z,1))>e;)0>--Z&&(Z=11,tt--);for(t.drawMonth=Z,t.drawYear=tt,i=this._get(t,"prevText"),i=B?this.formatDate(i,this._daylightSavingAdjust(new Date(tt,Z-V,1)),this._getFormatConfig(t)):i,n=this._canAdjustMonth(t,-1,tt,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+($?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+($?"e":"w")+"'>"+i+"</span></a>",s=this._get(t,"nextText"),s=B?this.formatDate(s,this._daylightSavingAdjust(new Date(tt,Z+V,1)),this._getFormatConfig(t)):s,o=this._canAdjustMonth(t,1,tt,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+($?"w":"e")+"'>"+s+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+($?"w":"e")+"'>"+s+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:j,a=B?this.formatDate(a,r,this._getFormatConfig(t)):a,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",h=Y?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+($?l:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+($?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",x=0;U[0]>x;x++){for(k="",this.maxRows=4,D=0;U[1]>D;D++){if(C=this._daylightSavingAdjust(new Date(tt,Z,t.selectedDay)),T=" ui-corner-all",I="",X){if(I+="<div class='ui-datepicker-group",U[1]>1)switch(D){case 0:I+=" ui-datepicker-group-first",T=" ui-corner-"+($?"right":"left");break;case U[1]-1:I+=" ui-datepicker-group-last",T=" ui-corner-"+($?"left":"right");break;default:I+=" ui-datepicker-group-middle",T=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&0===x?$?o:n:"")+(/all|right/.test(T)&&0===x?$?n:o:"")+this._generateMonthYearHeader(t,Z,tt,Q,J,x>0||D>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead><tr>",S=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+c)%7,S+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+d[M]+"'>"+p[M]+"</span></th>";for(I+=S+"</tr></thead><tbody>",P=this._getDaysInMonth(tt,Z),tt===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,P)),A=(this._getFirstDayOfMonth(tt,Z)-c+7)%7,N=Math.ceil((A+P)/7),E=X&&this.maxRows>N?this.maxRows:N,this.maxRows=E,O=this._daylightSavingAdjust(new Date(tt,Z,1-A)),H=0;E>H;H++){for(I+="<tr>",F=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(O)+"</td>":"",w=0;7>w;w++)z=m?m.apply(t.input?t.input[0]:null,[O]):[!0,""],W=O.getMonth()!==Z,L=W&&!_||!z[0]||Q&&Q>O||J&&O>J,F+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(W?" ui-datepicker-other-month":"")+(O.getTime()===C.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===O.getTime()&&b.getTime()===C.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(W&&!v?"":" "+z[1]+(O.getTime()===G.getTime()?" "+this._currentClass:"")+(O.getTime()===j.getTime()?" ui-datepicker-today":""))+"'"+(W&&!v||!z[2]?"":" title='"+z[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+O.getMonth()+"' data-year='"+O.getFullYear()+"'")+">"+(W&&!v?"&#xa0;":L?"<span class='ui-state-default'>"+O.getDate()+"</span>":"<a class='ui-state-default"+(O.getTime()===j.getTime()?" ui-state-highlight":"")+(O.getTime()===G.getTime()?" ui-state-active":"")+(W?" ui-priority-secondary":"")+"' href='#'>"+O.getDate()+"</a>")+"</td>",O.setDate(O.getDate()+1),O=this._daylightSavingAdjust(O);I+=F+"</tr>"}Z++,Z>11&&(Z=0,tt++),I+="</tbody></table>"+(X?"</div>"+(U[0]>0&&D===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=I}y+=k}return y+=h,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,n,s,o,a,r){var l,h,c,u,d,p,f,g,m=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(l=n&&n.getFullYear()===i,h=s&&s.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!l||c>=n.getMonth())&&(!h||s.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(_||(b+=y+(!o&&m&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=n?Math.max(f,n.getFullYear()):f,g=s?Math.min(g,s.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!o&&m&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var n=t.selectedYear+("Y"===i?e:0),s=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(n,s))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(n,s,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),n=this._getMinMaxDate(t,"max"),s=i&&i>e?i:e;return n&&s>n?n:s},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,n){var s=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,n+(0>e?e:s[0]*s[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,n,s=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),n=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=n),i[1].match(/[+\-].*/)&&(r+=n)),(!s||e.getTime()>=s.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,n){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var s=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(n,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),s,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new n,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var g=!1;t(document).on("mouseup",function(){g=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!g){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,n=1===e.which,s=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&t(e.target).closest(this.options.cancel).length;return!(n&&!s&&this._mouseCapture(e))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(e),!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),g=!0,!0))}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,g=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,n){var s,o=t.ui[e].prototype;for(s in n)o.plugins[s]=o.plugins[s]||[],o.plugins[s].push([i,n[s]])},call:function(t,e,i,n){var s,o=t.plugins[e];if(o&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(s=0;o.length>s;s++)t.options[o[s][0]]&&o[s][1].apply(t.element,i)}},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(e){var i=this.options;return!(this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(e),!!this.handle&&(this._blurActiveElement(e),this._blockFrames(!0===i.iframeFix?"iframe":i.iframeFix),!0))},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]);t(e.target).closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),!1===this._trigger("start",e)?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var n=this._uiHash();if(!1===this._trigger("drag",e,n))return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=n.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,n=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(n=t.ui.ddmanager.drop(this,e)),this.dropped&&(n=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!n||"valid"===this.options.revert&&n||!0===this.options.revert||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==i._trigger("stop",e)&&i._clear()}):!1!==this._trigger("stop",e)&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return!this.options.handle||!!t(e.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,n=t.isFunction(i.helper),s=n?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),n&&s[0]===this.element[0]&&this._setPositionRelative(),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,n,s=this.options,o=this.document[0];return this.relativeContainer=null,s.containment?"window"===s.containment?void(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===s.containment?void(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):s.containment.constructor===Array?void(this.containment=s.containment):("parent"===s.containment&&(s.containment=this.helper[0].parentNode),i=t(s.containment),void((n=i[0])&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i))):void(this.containment=null)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,n=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:n?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:n?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,n,s,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),l=t.pageX,h=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(n=this.relativeContainer.offset(),i=[this.containment[0]+n.left,this.containment[1]+n.top,this.containment[2]+n.left,this.containment[3]+n.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),a.grid&&(s=a.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,h=i?s-this.offset.click.top>=i[1]||s-this.offset.click.top>i[3]?s:s-this.offset.click.top>=i[1]?s-a.grid[1]:s+a.grid[1]:s,o=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,l=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(l=this.originalPageX),"x"===a.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,n){return n=n||this._uiHash(),t.ui.plugin.call(this,e,[i,n,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),n.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,n)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,n){var s=t.extend({},i,{item:n.element});n.sortables=[],t(n.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(n.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,s))})},stop:function(e,i,n){var s=t.extend({},i,{item:n.element});n.cancelHelperRemoval=!1,t.each(n.sortables,function(){var t=this;t.isOver?(t.isOver=0,n.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,s))})},drag:function(e,i,n){t.each(n.sortables,function(){var s=!1,o=this;o.positionAbs=n.positionAbs,o.helperProportions=n.helperProportions,o.offset.click=n.offset.click,o._intersectsWith(o.containerCache)&&(s=!0,t.each(n.sortables,function(){return this.positionAbs=n.positionAbs,this.helperProportions=n.helperProportions,this.offset.click=n.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(s=!1),s})),s?(o.isOver||(o.isOver=1,n._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=n.offset.click.top,o.offset.click.left=n.offset.click.left,o.offset.parent.left-=n.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=n.offset.parent.top-o.offset.parent.top,n._trigger("toSortable",e),n.dropped=o.element,t.each(n.sortables,function(){this.refreshPositions()}),n.currentItem=n.element,o.fromOutside=n),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(n._parent),n._refreshOffsets(e),i.position=n._generatePosition(e,!0),n._trigger("fromSortable",e),n.dropped=!1,t.each(n.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,n){var s=t("body"),o=n.options;s.css("cursor")&&(o._cursor=s.css("cursor")),s.css("cursor",o.cursor)},stop:function(e,i,n){var s=n.options;s._cursor&&t("body").css("cursor",s._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,n){var s=t(i.helper),o=n.options;s.css("opacity")&&(o._opacity=s.css("opacity")),s.css("opacity",o.opacity)},stop:function(e,i,n){var s=n.options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,n){var s=n.options,o=!1,a=n.scrollParentNotHidden[0],r=n.document[0];a!==r&&"HTML"!==a.tagName?(s.axis&&"x"===s.axis||(n.overflowOffset.top+a.offsetHeight-e.pageY<s.scrollSensitivity?a.scrollTop=o=a.scrollTop+s.scrollSpeed:e.pageY-n.overflowOffset.top<s.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(n.overflowOffset.left+a.offsetWidth-e.pageX<s.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+s.scrollSpeed:e.pageX-n.overflowOffset.left<s.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(r).scrollTop()<s.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<s.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(r).scrollLeft()<s.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<s.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+s.scrollSpeed)))),!1!==o&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(n,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,n){var s=n.options;n.snapElements=[],t(s.snap.constructor!==String?s.snap.items||":data(ui-draggable)":s.snap).each(function(){var e=t(this),i=e.offset();this!==n.element[0]&&n.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,n){var s,o,a,r,l,h,c,u,d,p,f=n.options,g=f.snapTolerance,m=i.offset.left,v=m+n.helperProportions.width,_=i.offset.top,b=_+n.helperProportions.height;for(d=n.snapElements.length-1;d>=0;d--)l=n.snapElements[d].left-n.margins.left,h=l+n.snapElements[d].width,c=n.snapElements[d].top-n.margins.top,u=c+n.snapElements[d].height,l-g>v||m>h+g||c-g>b||_>u+g||!t.contains(n.snapElements[d].item.ownerDocument,n.snapElements[d].item)?(n.snapElements[d].snapping&&n.options.snap.release&&n.options.snap.release.call(n.element,e,t.extend(n._uiHash(),{snapItem:n.snapElements[d].item})),n.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(s=g>=Math.abs(c-b),o=g>=Math.abs(u-_),a=g>=Math.abs(l-v),r=g>=Math.abs(h-m),s&&(i.position.top=n._convertPositionTo("relative",{top:c-n.helperProportions.height,left:0}).top),o&&(i.position.top=n._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l-n.helperProportions.width}).left),r&&(i.position.left=n._convertPositionTo("relative",{top:0,left:h}).left)),p=s||o||a||r,"outer"!==f.snapMode&&(s=g>=Math.abs(c-_),o=g>=Math.abs(u-b),a=g>=Math.abs(l-m),r=g>=Math.abs(h-v),s&&(i.position.top=n._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=n._convertPositionTo("relative",{top:u-n.helperProportions.height,left:0}).top),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l}).left),r&&(i.position.left=n._convertPositionTo("relative",{top:0,left:h-n.helperProportions.width}).left)),!n.snapElements[d].snapping&&(s||o||a||r||p)&&n.options.snap.snap&&n.options.snap.snap.call(n.element,e,t.extend(n._uiHash(),{snapItem:n.snapElements[d].item})),n.snapElements[d].snapping=s||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,n){var s,o=n.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(s=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",s+e)}),this.css("zIndex",s+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,n){var s=t(i.helper),o=n.options;s.css("zIndex")&&(o._zIndex=s.css("zIndex")),s.css("zIndex",o.zIndex)},stop:function(e,i,n){var s=n.options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}}),t.ui.draggable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return e[n]>0||(e[n]=1,s=e[n]>0,e[n]=0,s)},_create:function(){var e,i=this.options,n=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(n._removeClass("ui-resizable-autohide"),n._handles.show())}).on("mouseleave",function(){i.disabled||n.resizing||(n._addClass("ui-resizable-autohide"),n._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var e,i,n,s,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),n=this.handles.split(","),this.handles={},i=0;n.length>i;i++)e=t.trim(n[i]),s="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+s),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,n,s,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(n=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?n.outerHeight():n.outerWidth(),s=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(s,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,n,s=!1;for(i in this.handles)((n=t(this.handles[i])[0])===e.target||t.contains(n,e.target))&&(s=!0);return!this.options.disabled&&s},_mouseStart:function(e){var i,n,s,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),n=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,n+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:n},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===s?this.axis+"-resize":s),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,n,s=this.originalMousePosition,o=this.axis,a=e.pageX-s.left||0,r=e.pageY-s.top||0,l=this._change[o];return this._updatePrevProperties(),!!l&&(i=l.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),n=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1)},_mouseStop:function(e){this.resizing=!1;var i,n,s,o,a,r,l,h=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,n=i.length&&/textarea/i.test(i[0].nodeName),s=n&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=n?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-s},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,l=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,h.animate||this.element.css(t.extend(a,{top:l,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!h.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,n,s,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,s=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),n>o.minHeight&&(o.minHeight=n),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>s&&(o.maxHeight=s)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,n=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,n=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,s=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,h=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),s&&(t.height=e.maxHeight),o&&h&&(t.left=r-e.minWidth),n&&h&&(t.left=r-e.maxWidth),a&&c&&(t.top=l-e.minHeight),s&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],n=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],s=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(n[e])||0,i[e]+=parseFloat(s[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize;return{left:this.originalPosition.left+e,width:i.width-e}},n:function(t,e,i){var n=this.originalSize;return{top:this.originalPosition.top+i,height:n.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,n){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,n]))},sw:function(e,i,n){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,n]))},ne:function(e,i,n){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,n]))},nw:function(e,i,n){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,n]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),n=i.options,s=i._proportionallyResizeElements,o=s.length&&/textarea/i.test(s[0].nodeName),a=o&&i._hasScroll(s[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,l={width:i.size.width-r,height:i.size.height-a},h=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,c&&h?{top:c,left:h}:{}),{duration:n.animateDuration,easing:n.animateEasing,step:function(){var n={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};s&&s.length&&t(s[0]).css({width:n.width,height:n.height}),i._updateCache(n),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,n,s,o,a,r,l=t(this).resizable("instance"),h=l.options,c=l.element,u=h.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(l.containerElement=t(d),/document/.test(u)||u===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,n){i[t]=l._num(e.css("padding"+n))}),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},n=l.containerOffset,s=l.containerSize.height,o=l.containerSize.width,a=l._hasScroll(d,"left")?d.scrollWidth:o,r=l._hasScroll(d)?d.scrollHeight:s,l.parentData={element:d,left:n.left,top:n.top,width:a,height:r}))},resize:function(e){var i,n,s,o,a=t(this).resizable("instance"),r=a.options,l=a.containerOffset,h=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=l),h.left<(a._helper?l.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-l.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?l.left:0),h.top<(a._helper?l.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-l.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?l.top:0),s=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),s&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-l.left)),n=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-l.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),n+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-n,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,n=e.containerOffset,s=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),l=a.outerWidth()-e.sizeDiff.width,h=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-s.left-n.left,width:l,height:h}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-s.left-n.left,width:l,height:h})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var n=t(this).resizable("instance"),s=n.options,o=n.originalSize,a=n.originalPosition,r={height:n.size.height-o.height||0,width:n.size.width-o.width||0,top:n.position.top-a.top||0,left:n.position.left-a.left||0};t(s.alsoResize).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),s={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(n[e]||0)+(r[e]||0);i&&i>=0&&(s[e]=i||null)}),e.css(s)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),!1!==t.uiBackCompat&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),n=i.options,s=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,l="number"==typeof n.grid?[n.grid,n.grid]:n.grid,h=l[0]||1,c=l[1]||1,u=Math.round((s.width-o.width)/h)*h,d=Math.round((s.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=n.maxWidth&&p>n.maxWidth,m=n.maxHeight&&f>n.maxHeight,v=n.minWidth&&n.minWidth>p,_=n.minHeight&&n.minHeight>f;n.grid=l,v&&(p+=h),_&&(f+=c),g&&(p-=h),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-h)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-h>0?(i.size.width=p,i.position.left=a.left-u):(p=h-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&!1!==this._trigger("beforeClose",e)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var n=!1,s=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),o=Math.max.apply(null,s);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),n=!0),n&&!i&&this._trigger("focus",e),n},open:function(){var e=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]);this.uiDialog[0]===e||t.contains(this.uiDialog[0],e)||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),void this.close(e);if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),n=i.filter(":first"),s=i.filter(":last");e.target!==s[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==n[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){s.trigger("focus")}),e.preventDefault()):(this._delay(function(){n.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(t.each(i,function(i,n){var s,o;n=t.isFunction(n)?{click:n,text:i}:n,n=t.extend({type:"button"},n),s=n.click,o={icon:n.icon,iconPosition:n.iconPosition,showLabel:n.showLabel,icons:n.icons,text:n.text},delete n.click,delete n.icon,delete n.iconPosition,delete n.showLabel,delete n.icons,"boolean"==typeof n.text&&delete n.text,t("<button></button>",n).button(o).appendTo(e.uiButtonSet).on("click",function(){s.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,s){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",n,e(s))},drag:function(t,n){i._trigger("drag",t,e(n))},stop:function(s,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();n.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",s,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,n=this.options,s=n.resizable,o=this.uiDialog.css("position"),a="string"==typeof s?s:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:a,start:function(n,s){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",n,e(s))},resize:function(t,n){i._trigger("resize",t,e(n))},stop:function(s,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),l=a.top-i.document.scrollTop();n.height=i.uiDialog.height(),n.width=i.uiDialog.width(),n.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" top"+(l>=0?"+":"")+l,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",s,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,n=!1,s={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(n=!0),t in i.resizableRelatedOptions&&(s[t]=e)}),n&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(e,i){var n,s,o=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(n=o.is(":data(ui-draggable)"),n&&!i&&o.draggable("destroy"),!n&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(s=o.is(":data(ui-resizable)"),s&&!i&&o.resizable("destroy"),s&&"string"==typeof i&&o.resizable("option","handles",i),s||!1===i||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,n=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),n.minWidth>n.width&&(n.width=n.minWidth),t=this.uiDialog.css({height:"auto",width:n.width}).outerHeight(),e=Math.max(0,n.minHeight-t),i="number"==typeof n.maxHeight?Math.max(0,n.maxHeight-t):"none","auto"===n.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,n.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return!!t(e.target).closest(".ui-dialog").length||!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),!1!==t.uiBackCompat&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,n=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(n)?n:function(t){return t.is(n)},this.proportions=function(){return arguments.length?void(e=arguments[0]):e||(e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight})},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var n=t.ui.ddmanager.droppables[this.options.scope];this._splice(n),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var n=i||t.ui.ddmanager.current,s=!1;return!(!n||(n.currentItem||n.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===n.options.scope&&i.accept.call(i.element[0],n.currentItem||n.element)&&m(n,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(s=!0,!1):void 0}),!s&&(!!this.accept.call(this.element[0],n.currentItem||n.element)&&(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(n)),this.element)))},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var m=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,n,s){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,l=a+e.helperProportions.height,h=i.offset.left,c=i.offset.top,u=h+i.proportions().width,d=c+i.proportions().height;switch(n){case"fit":return o>=h&&u>=r&&a>=c&&d>=l;case"intersect":return o+e.helperProportions.width/2>h&&u>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>c&&d>l-e.helperProportions.height/2;case"pointer":return t(s.pageY,c,i.proportions().height)&&t(s.pageX,h,i.proportions().width);case"touch":return(a>=c&&d>=a||l>=c&&d>=l||c>a&&l>d)&&(o>=h&&u>=o||r>=h&&u>=r||h>o&&r>u);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(e,i){var n,s,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(n=0;o.length>n;n++)if(!(o[n].options.disabled||e&&!o[n].accept.call(o[n].element[0],e.currentItem||e.element))){for(s=0;r.length>s;s++)if(r[s]===o[n].element[0]){o[n].proportions().height=0;continue t}o[n].visible="none"!==o[n].element.css("display"),o[n].visible&&("mousedown"===a&&o[n]._activate.call(o[n],i),o[n].offset=o[n].element.offset(),o[n].proportions({width:o[n].element[0].offsetWidth,height:o[n].element[0].offsetHeight}))}},drop:function(e,i){var n=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&m(e,this,this.options.tolerance,i)&&(n=this._drop.call(this,i)||n),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),n},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var n,s,o,a=m(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(s=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===s}),o.length&&(n=t(o[0]).droppable("instance"),n.greedyChild="isover"===r)),n&&"isover"===r&&(n.isover=!1,n.isout=!0,n._out.call(n,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),n&&"isout"===r&&(n.isout=!1,n.isover=!0,n._over.call(n,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},!1!==t.uiBackCompat&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),void this._refreshValue())},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=!1===t,"number"!=typeof t&&(t=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),n=i.offset(),s={left:n.left-e.elementPos.left,top:n.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:s.left,top:s.top,right:s.left+i.outerWidth(),bottom:s.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,n=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(n.filter,this.element[0]),this._trigger("start",e),t(n.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),n.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var n=t.data(this,"selectable-item");n.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(n.$element,"ui-selected"),n.selected=!1,i._addClass(n.$element,"ui-unselecting"),n.unselecting=!0,i._trigger("unselecting",e,{unselecting:n.element}))}),t(e.target).parents().addBack().each(function(){var n,s=t.data(this,"selectable-item");return s?(n=!e.metaKey&&!e.ctrlKey||!s.$element.hasClass("ui-selected"),i._removeClass(s.$element,n?"ui-unselecting":"ui-selected")._addClass(s.$element,n?"ui-selecting":"ui-unselecting"),s.unselecting=!n,s.selecting=n,s.selected=n,n?i._trigger("selecting",e,{selecting:s.element}):i._trigger("unselecting",e,{unselecting:s.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,n=this,s=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,l=e.pageY;return o>r&&(i=r,r=o,o=i),a>l&&(i=l,l=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:l-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),h=!1,c={};i&&i.element!==n.element[0]&&(c.left=i.left+n.elementPos.left,c.right=i.right+n.elementPos.left,c.top=i.top+n.elementPos.top,c.bottom=i.bottom+n.elementPos.top,"touch"===s.tolerance?h=!(c.left>r||o>c.right||c.top>l||a>c.bottom):"fit"===s.tolerance&&(h=c.left>o&&r>c.right&&c.top>a&&l>c.bottom),h?(i.selected&&(n._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(n._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(n._addClass(i.$element,"ui-selecting"),i.selecting=!0,n._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(n._removeClass(i.$element,"ui-selecting"),i.selecting=!1,n._addClass(i.$element,"ui-selected"),i.selected=!0):(n._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(n._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),n._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(n._removeClass(i.$element,"ui-selected"),i.selected=!1,n._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,n._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var n=t.data(this,"selectable-item");i._removeClass(n.$element,"ui-unselecting"),n.unselecting=!1,n.startselected=!1,i._trigger("unselected",e,{unselected:n.element})}),t(".ui-selecting",this.element[0]).each(function(){var n=t.data(this,"selectable-item");i._removeClass(n.$element,"ui-selecting")._addClass(n.$element,"ui-selected"),n.selecting=!1,n.selected=!0,n.startselected=!0,i._trigger("selected",e,{selected:n.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,n=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(n).appendTo(this.button),!1!==this.options.width&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var n=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&n.index!==e.focusIndex&&(e._trigger("focus",t,{item:n}),e.isOpen||e._select(n,t)),e.focusIndex=n.index,e.button.attr("aria-activedescendant",e.menuItems.eq(n.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var n=this,s="";t.each(i,function(i,o){var a;o.optgroup!==s&&(a=t("<li>",{text:o.optgroup}),n._addClass(a,"ui-selectmenu-optgroup","ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),a.appendTo(e),s=o.optgroup),n._renderItemData(e,o)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var n=t("<li>"),s=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(n,null,"ui-state-disabled"),this._setText(s,i.label),n.append(s).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,n,s=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),s+=":not(.ui-state-disabled)"),n="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](s).eq(-1):i[t+"All"](s).eq(0),n.length&&this.menuInstance.focus(e,n)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return!1===t?void this.button.css("width",""):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),void this.button.outerWidth(t))},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,n=[];e.each(function(e,s){n.push(i._parseOption(t(s),e))}),this.items=n},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,n=this.options,s=this.element.find(".ui-slider-handle"),o=[];for(i=n.values&&n.values.length||1,s.length>i&&(s.slice(i).remove(),s=s.slice(0,i)),e=s.length;i>e;e++)o.push("<span tabindex='0'></span>");this.handles=s.add(t(o.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(!0===e.range&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,n,s,o,a,r,l,h=this,c=this.options;return!c.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(i),s=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(n-h.values(e));(s>i||s===i&&(e===h._lastChangedValue||h.values(e)===c.min))&&(s=i,o=t(this),a=e)}),!1!==this._start(e,a)&&(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),r=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-r.left-o.width()/2,top:e.pageY-r.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,n),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,n,s,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),n=i/e,n>1&&(n=1),0>n&&(n=0),"vertical"===this.orientation&&(n=1-n),s=this._valueMax()-this._valueMin(),o=this._valueMin()+n*s,this._trimAlignValue(o)},_uiHash:function(t,e,i){var n={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(n.value=void 0!==e?e:this.values(t),n.values=i||this.values()),n},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var n,s=this.value(),o=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),s=this.values(e),2===this.options.values.length&&!0===this.options.range&&(i=0===e?Math.min(n,i):Math.max(n,i)),o[e]=i),i!==s&&!1!==this._trigger("slide",t,this._uiHash(e,i,o))&&(this._hasMultipleValues()?this.values(e,i):this.value(i))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,i){var n,s,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),void this._change(null,e);if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(n=this.options.values,s=arguments[0],o=0;n.length>o;o+=1)n[o]=this._trimAlignValue(s[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var n,s=0;switch("range"===e&&!0===this.options.range&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(s=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),n=s-1;n>=0;n--)this._change(null,n);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,n;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),n=0;i.length>n;n+=1)i[n]=this._trimAlignValue(i[n]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,n=t-i;return 2*Math.abs(i)>=e&&(n+=i>0?e:-e),parseFloat(n.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step;t=Math.round((t-e)/i)*i+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,n,s,o,a=this.options.range,r=this.options,l=this,h=!this._animateOff&&r.animate,c={};this._hasMultipleValues()?this.handles.each(function(n){i=(l.values(n)-l._valueMin())/(l._valueMax()-l._valueMin())*100,c["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](c,r.animate),!0===l.options.range&&("horizontal"===l.orientation?(0===n&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===n&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===n&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===n&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(n=this.value(),s=this._valueMin(),o=this._valueMax(),i=o!==s?(n-s)/(o-s)*100:0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,n,s,o=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),!1===this._start(e,o)))return}switch(s=this.options.step,i=n=this._hasMultipleValues()?this.values(o):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(i===this._valueMax())return;n=this._trimAlignValue(i+s);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i===this._valueMin())return;n=this._trimAlignValue(i-s)}this._slide(e,o,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var n=null,s=!1,o=this;return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(n=t(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")===o&&(n=t(e.target)),!!n&&(!(this.options.handle&&!i&&(t(this.options.handle,n).find("*").addBack().each(function(){this===e.target&&(s=!0)}),!s))&&(this.currentItem=n,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(e,i,n){var s,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!n)for(s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,n,s,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),!1!==r&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(n=this.items[i],s=n.item[0],(o=this._intersectsWithPointer(n))&&n.instance===this.currentContainer&&s!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==s&&!t.contains(this.placeholder[0],s)&&("semi-dynamic"!==this.options.type||!t.contains(this.element[0],s))){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(n))break;this._rearrange(e,n),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var n=this,s=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=s.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=s.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){n._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),n=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&n.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!n.length&&e.key&&n.push(e.key+"="),n.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),n=[];return e=e||{},i.each(function(){n.push(t(e.item||this).attr(e.attribute||"id")||"")}),n},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,n=this.positionAbs.top,s=n+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,l=r+t.height,h=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||n+h>r&&l>n+h,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&n+this.helperProportions.height/2>r&&l>s-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,n="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width);return!(!n||!s)&&(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1))},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?"right"===s&&i||"left"===s&&!i:n&&("down"===n&&e||"up"===n&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var n,s,o,a,r=[],l=[],h=this._connectWith();if(h&&e)for(n=h.length-1;n>=0;n--)for(o=t(h[n],this.document[0]),s=o.length-1;s>=0;s--)(a=t.data(o[s],this.widgetFullName))&&a!==this&&!a.options.disabled&&l.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(l.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),n=l.length-1;n>=0;n--)l[n][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,n,s,o,a,r,l,h,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(s=t(d[i],this.document[0]),n=s.length-1;n>=0;n--)(o=t.data(s[n],this.widgetFullName))&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],n=0,h=r.length;h>n;n++)l=t(r[n]),l.data(this.widgetName+"-item",a),c.push({item:l,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=!!this.items.length&&("x"===this.options.axis||this._isFloating(this.items[0].item)),this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,n,s,o;for(i=this.items.length-1;i>=0;i--)n=this.items[i],n.instance!==this.currentContainer&&this.currentContainer&&n.item[0]!==this.currentItem[0]||(s=this.options.toleranceElement?t(this.options.toleranceElement,n.item):n.item,e||(n.width=s.outerWidth(),n.height=s.outerHeight()),o=s.offset(),n.left=o.left,n.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,n=e.options;n.placeholder&&n.placeholder.constructor!==String||(i=n.placeholder,n.placeholder={element:function(){var n=e.currentItem[0].nodeName.toLowerCase(),s=t("<"+n+">",e.document[0]);return e._addClass(s,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(s,"ui-sortable-helper"),"tbody"===n?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(s)):"tr"===n?e._createTrPlaceholder(e.currentItem,s):"img"===n&&s.attr("src",e.currentItem.attr("src")),i||s.css("visibility","hidden"),s},update:function(t,s){(!i||n.forcePlaceholderSize)&&(s.height()||s.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),s.width()||s.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(n.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),n.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var n=this;e.children().each(function(){t("<td>&#160;</td>",n.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,n,s,o,a,r,l,h,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(s=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",n=this.items.length-1;n>=0;n--)t.contains(this.containers[p].element[0],this.items[n].item[0])&&this.items[n].item[0]!==this.currentItem[0]&&(l=this.items[n].item.offset()[a],h=!1,e[u]-l>this.items[n][r]/2&&(h=!0),s>Math.abs(e[u]-l)&&(s=Math.abs(e[u]-l),o=this.items[n],this.direction=h?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return void(this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1));o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,n=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return n.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(n[0]),n[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!n[0].style.width||i.forceHelperSize)&&n.width(this.currentItem.width()),(!n[0].style.height||i.forceHelperSize)&&n.height(this.currentItem.height()),n},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,n,s=this.options;"parent"===s.containment&&(s.containment=this.helper[0].parentNode),("document"===s.containment||"window"===s.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===s.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===s.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(s.containment)||(e=t(s.containment)[0],i=t(s.containment).offset(),n="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(n?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(n?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var n="absolute"===e?1:-1,s="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:i.top+this.offset.relative.top*n+this.offset.parent.top*n-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:s.scrollTop())*n,left:i.left+this.offset.relative.left*n+this.offset.parent.left*n-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*n}},_generatePosition:function(e){var i,n,s=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),s.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/s.grid[1])*s.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-s.grid[1]:i+s.grid[1]:i,n=this.originalPageX+Math.round((o-this.originalPageX)/s.grid[0])*s.grid[0],o=this.containment?n-this.offset.click.left>=this.containment[0]&&n-this.offset.click.left<=this.containment[2]?n:n-this.offset.click.left>=this.containment[0]?n-s.grid[0]:n+s.grid[0]:n)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:r.scrollLeft())}},_rearrange:function(t,e,i,n){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var s=this.counter;this._delay(function(){s===this.counter&&this.refreshPositions(!n)})},_clear:function(t,e){function i(t,e,i){return function(n){i._trigger(t,n,e._uiHash(e))}}this.reverting=!1;var n,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(n in this._storedCSS)("auto"===this._storedCSS[n]||"static"===this._storedCSS[n])&&(this._storedCSS[n]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),n=this.containers.length-1;n>=0;n--)e||s.push(i("deactivate",this,this.containers[n])),this.containers[n].containerCache.over&&(s.push(i("out",this,this.containers[n])),this.containers[n].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(n=0;s.length>n;n++)s[n].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){!1===t.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,n){var s=i.attr(n);null!=s&&s.length&&(e[n]=s)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",t)))},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){this.element[0]===t.ui.safeActiveElement(this.document[0])||(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n}))}var n;n=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),!1!==this._start(e)&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?!1!==this._start(e)&&void this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,n=t.ui.keyCode;switch(e.keyCode){case n.UP:return this._repeat(null,1,e),!0;case n.DOWN:return this._repeat(null,-1,e),!0;case n.PAGE_UP:return this._repeat(null,i.page,e),!0;case n.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return!(!this.spinning&&!1===this._trigger("start",t))&&(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&!1===this._trigger("spin",e,{value:i})||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,n=this.options;return e=null!==n.min?n.min:0,i=t-e,i=Math.round(i/n.step)*n.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==n.max&&t>n.max?n.max:null!==n.min&&n.min>t?n.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,n,s;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,void this.element.val(this._format(i))):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(n=this.buttons.first().find(".ui-icon"),this._removeClass(n,null,this.options.icons.up),this._addClass(n,null,e.up),s=this.buttons.last().find(".ui-icon"),this._removeClass(s,null,this.options.icons.down),this._addClass(s,null,e.down)),void this._super(t,e))},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null!==t&&t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&null!==(i=this._parse(t))&&(e||(i=this._adjustValue(i)),t=this._format(i)),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:r(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:r(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:r(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:r(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?void r(this._value).call(this,t):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),!1!==t.uiBackCompat&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,n;i=e.href.replace(t,""),n=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(t){}try{n=decodeURIComponent(n)}catch(t){}return e.hash.length>1&&i===n}}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=!1!==this.options.active&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,n=location.hash.substring(1);return null===e&&(n&&this.tabs.each(function(i,s){return t(s).attr("aria-controls")===n?(e=i,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=!!this.tabs.length&&0)),!1!==e&&-1===(e=this.tabs.index(this.tabs.eq(e)))&&(e=!i&&0),!i&&!1===e&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),n=this.tabs.index(i),s=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:s=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),void this._activate(n);case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),void this._activate(n!==this.options.active&&n);default:return}e.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,s),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){for(var n=this.tabs.length-1;-1!==t.inArray(function(){return e>n&&(e=0),0>e&&(e=n),e}(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?void this._activate(e):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||!1!==this.options.active||this._activate(0)),"event"===t&&this._setupEvents(e),void("heightStyle"===t&&this._setupHeightStyle(e)))},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),!1!==e.active&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,n=this.anchors,s=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,n){var s,o,a,r=t(n).uniqueId().attr("id"),l=t(n).closest("li"),h=l.attr("aria-controls");e._isLocal(n)?(s=n.hash,a=s.substring(1),o=e.element.find(e._sanitizeSelector(s))):(a=l.attr("aria-controls")||t({}).uniqueId()[0].id,s="#"+a,o=e.element.find(s),o.length||(o=e._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),h&&l.data("ui-tabs-aria-controls",h),l.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(n.not(this.anchors)),this._off(s.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,n,s;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),s=0;n=this.tabs[s];s++)i=t(n),!0===e||-1!==t.inArray(s,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!0===e)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,n=this.element.parent();"fill"===e?(i=n.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),n=e.css("position");"absolute"!==n&&"fixed"!==n&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,n=this.active,s=t(e.currentTarget),o=s.closest("li"),a=o[0]===n[0],r=a&&i.collapsible,l=r?t():this._getPanelForTab(o),h=n.length?this._getPanelForTab(n):t(),c={oldTab:n,oldPanel:h,newTab:r?t():o,newPanel:l};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||!1===this._trigger("beforeActivate",e,c)||(i.active=!r&&this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),h.length||l.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),l.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function n(){o.running=!1,o._trigger("activate",e,i)}function s(){o._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,n):(a.show(),n())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){o._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),s()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),s()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,n=this._findActive(e);n[0]!==this.active[0]&&(n.length||(n=this.active),i=n.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return!1===e?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;!1!==i&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(!0!==i){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var n=this,s=this.tabs.eq(e),o=s.find(".ui-tabs-anchor"),a=this._getPanelForTab(s),r={tab:s,panel:a},l=function(t,e){"abort"===e&&n.panels.stop(!1,!0),n._removeClass(s,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(s,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,s){setTimeout(function(){a.html(t),n._trigger("load",i,r),l(s,e)},1)}).fail(function(t,e){setTimeout(function(){l(t,e)},1)})))},_ajaxSettings:function(e,i,n){var s=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,o){return s._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},n))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),!1!==t.uiBackCompat&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var n=(e.attr("aria-describedby")||"").split(/\s+/);n.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(n.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),n=(e.attr("aria-describedby")||"").split(/\s+/),s=t.inArray(i,n);-1!==s&&n.splice(s,1),e.removeData("ui-tooltip-id"),n=t.trim(n.join(" ")),n?e.attr("aria-describedby",n):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var n=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){n._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,n){var s=t.Event("blur");s.target=s.currentTarget=n.element[0],e.close(s,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);return e.is("[title]")?e.data("ui-tooltip-title",e.attr("title")).removeAttr("title"):void 0}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,n=t(e?e.target:this.element).closest(this.options.items);n.length&&!n.data("ui-tooltip-id")&&(n.attr("title")&&n.data("ui-tooltip-title",n.attr("title")),n.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&n.parents().each(function(){var e,n=t(this);n.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),n.attr("title")&&(n.uniqueId(),i.parents[this.id]={element:this,title:n.attr("title")},n.attr("title",""))}),this._registerCloseHandlers(e,n),this._updateContent(n,e))},_updateContent:function(t,e){var i,n=this.options.content,s=this,o=e?e.type:null;return"string"==typeof n||n.nodeType||n.jquery?this._open(e,t,n):void((i=n.call(t[0],function(i){s._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=o),this._open(e,t,i))})}))&&this._open(e,t,i))},_open:function(e,i,n){function s(t){h.of=t,a.is(":hidden")||a.position(h)}var o,a,r,l,h=t.extend({},this.options.position);if(n){if(o=this._find(i))return void o.tooltip.find(".ui-tooltip-content").html(n);i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(n),this.liveRegion.children().hide(),l=t("<div>").html(a.find(".ui-tooltip-content").html()),l.removeAttr("name").find("[name]").removeAttr("name"),l.removeAttr("id").find("[id]").removeAttr("id"),l.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:s}),s(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){a.is(":visible")&&(s(h.of),clearInterval(r))},t.fx.interval)),this._trigger("open",e,{tooltip:a})}},_registerCloseHandlers:function(e,i){var n={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var n=t.Event(e);n.currentTarget=i[0],this.close(n,!0)}}};i[0]!==this.element[0]&&(n.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(n.mouseleave="close"),e&&"focusin"!==e.type||(n.focusout="close"),this._on(!0,i,n)},close:function(e){var i,n=this,s=t(e?e.currentTarget:this.element),o=this._find(s);return o?(i=o.tooltip,void(o.closing||(clearInterval(this.delayedShow),s.data("ui-tooltip-title")&&!s.attr("title")&&s.attr("title",s.data("ui-tooltip-title")),this._removeDescribedBy(s),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){n._removeTooltip(t(this))}),s.removeData("ui-tooltip-open"),this._off(s,"mouseleave focusout keyup"),s[0]!==this.element[0]&&this._off(s,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete n.parents[e]}),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)))):void s.removeData("ui-tooltip-open")},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),n=t("<div>").appendTo(i),s=i.uniqueId().attr("id");return this._addClass(n,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[s]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,n){var s=t.Event("blur"),o=n.element;s.target=s.currentTarget=o[0],e.close(s,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),!1!==t.uiBackCompat&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip})},/* 67 */
/***/
function(t,e,i){var n,s,o;/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/
!function(a){
// AMD. Register as an anonymous module.
s=[i(15),i(33)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(function(t){return t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}})},/* 68 */
/***/
function(t,e,i){var n,s,o;// jscs:disable maximumLineLength
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Datepicker
//>>group: Widgets
//>>description: Displays a calendar from an input or inline for selecting dates.
//>>docs: http://api.jqueryui.com/datepicker/
//>>demos: http://jqueryui.com/datepicker/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/datepicker.css
//>>css.theme: ../../themes/base/theme.css
!function(a){
// AMD. Register as an anonymous module.
s=[i(15),i(33),i(67)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(function(t){function e(t){for(var e,i;t.length&&t[0]!==document;){if(("absolute"===(
// Ignore z-index if position is set to a value where z-index is ignored by the browser
// This makes behavior of this function consistent across browsers
// WebKit always returns auto if the element is positioned
e=t.css("position"))||"relative"===e||"fixed"===e)&&(
// IE returns 0 when zIndex is not specified
// other browsers return a string
// we ignore the case of nested elements with an explicit value of 0
// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */
function i(){this._curInst=null,// The current instance in use
this._keyEvent=!1,// If the last event was a key event
this._disabledInputs=[],// List of date picker inputs that have been disabled
this._datepickerShowing=!1,// True if the popup picker is showing , false if not
this._inDialog=!1,// True if showing within a "dialog", false if not
this._mainDivId="ui-datepicker-div",// The ID of the main datepicker division
this._inlineClass="ui-datepicker-inline",// The name of the inline marker class
this._appendClass="ui-datepicker-append",// The name of the append marker class
this._triggerClass="ui-datepicker-trigger",// The name of the trigger marker class
this._dialogClass="ui-datepicker-dialog",// The name of the dialog marker class
this._disableClass="ui-datepicker-disabled",// The name of the disabled covering marker class
this._unselectableClass="ui-datepicker-unselectable",// The name of the unselectable cell marker class
this._currentClass="ui-datepicker-current-day",// The name of the current day marker class
this._dayOverClass="ui-datepicker-days-cell-over",// The name of the day hover marker class
this.regional=[],// Available regional settings, indexed by language code
this.regional[""]={// Default regional settings
closeText:"Done",// Display text for close link
prevText:"Prev",// Display text for previous month link
nextText:"Next",// Display text for next month link
currentText:"Today",// Display text for current month link
monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],// Names of months for drop-down and formatting
monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],// For formatting
dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],// For formatting
dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],// For formatting
dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],// Column headings for days starting at Sunday
weekHeader:"Wk",// Column header for week of the year
dateFormat:"mm/dd/yy",// See format options on parseDate
firstDay:0,// The first day of the week, Sun = 0, Mon = 1, ...
isRTL:!1,// True if right-to-left language, false if left-to-right
showMonthAfterYear:!1,// True if the year select precedes month, false for month then year
yearSuffix:""},this._defaults={// Global defaults for all the date picker instances
showOn:"focus",// "focus" for popup on focus,
// "button" for trigger button, or "both" for either
showAnim:"fadeIn",// Name of jQuery animation for popup
showOptions:{},// Options for enhanced animations
defaultDate:null,// Used when field is blank: actual date,
// +/-number for offset from today, null for today
appendText:"",// Display text following the input box, e.g. showing the format
buttonText:"...",// Text for trigger button
buttonImage:"",// URL for trigger button image
buttonImageOnly:!1,// True if the image appears alone, false if it appears on a button
hideIfNoPrevNext:!1,// True to hide next/previous month links
// if not applicable, false to just disable them
navigationAsDateFormat:!1,// True if date formatting applied to prev/today/next links
gotoCurrent:!1,// True if today link goes back to current selection instead
changeMonth:!1,// True if month can be selected directly, false if only prev/next
changeYear:!1,// True if year can be selected directly, false if only prev/next
yearRange:"c-10:c+10",// Range of years to display in drop-down,
// either relative to today's year (-nn:+nn), relative to currently displayed year
// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
showOtherMonths:!1,// True to show dates in other months, false to leave blank
selectOtherMonths:!1,// True to allow selection of dates in other months, false for unselectable
showWeek:!1,// True to show week of the year, false to not show it
calculateWeek:this.iso8601Week,// How to calculate the week of the year,
// takes a Date and returns the number of the week for it
shortYearCutoff:"+10",// Short year values < this are in the current century,
// > this are in the previous century,
// string value starting with "+" for current year + value
minDate:null,// The earliest selectable date, or null for no limit
maxDate:null,// The latest selectable date, or null for no limit
duration:"fast",// Duration of display/closure
beforeShowDay:null,// Function that takes a date and returns an array with
// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
// [2] = cell title (optional), e.g. $.datepicker.noWeekends
beforeShow:null,// Function that takes an input field and
// returns a set of custom settings for the date picker
onSelect:null,// Define a callback function when a date is selected
onChangeMonthYear:null,// Define a callback function when the month or year is changed
onClose:null,// Define a callback function when the datepicker is closed
numberOfMonths:1,// Number of months to show at a time
showCurrentAtPos:0,// The position in multipe months at which to show the current month (starting at 0)
stepMonths:1,// Number of months to step back/forward
stepBigMonths:12,// Number of months to step back/forward for the big links
altField:"",// Selector for an alternate field to store selected dates into
altFormat:"",// The date format to use for the alternate field
constrainInput:!0,// The input is constrained by the current date format
showButtonPanel:!1,// True to show button panel, false to not show it
autoSize:!1,// True to size the input for the date format, false to leave as is
disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=n(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function n(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,s)}function s(){t.datepicker._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}/* jQuery extend now ignores nulls! */
function o(e,i){t.extend(e,i);for(var n in i)null==i[n]&&(e[n]=i[n]);return e}t.extend(t.ui,{datepicker:{version:"1.12.1"}});var a;/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
// singleton instance
return t.extend(i.prototype,{/* Class name added to elements to indicate already configured with a date picker. */
markerClassName:"hasDatepicker",
//Keep track of the maximum number of rows displayed (see #7043)
maxRows:4,
// TODO rename to "widget" when switching to widget factory
_widgetDatepicker:function(){return this.dpDiv},/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
setDefaults:function(t){return o(this._defaults,t||{}),this},/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
_attachDatepicker:function(e,i){var n,s,o;n=e.nodeName.toLowerCase(),s="div"===n||"span"===n,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),s),o.settings=t.extend({},i||{}),"input"===n?this._connectDatepicker(e,o):s&&this._inlineDatepicker(e,o)},/* Create a new instance object. */
_newInst:function(e,i){// escape jQuery meta chars
return{id:e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:e,// associated target
selectedDay:0,selectedMonth:0,selectedYear:0,// current selection
drawMonth:0,drawYear:0,// month being drawn
inline:i,// is datepicker inline or not
dpDiv:i?// presentation div
n(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},/* Attach the date picker to an input field. */
_connectDatepicker:function(e,i){var n=t(e);i.append=t([]),i.trigger=t([]),n.hasClass(this.markerClassName)||(this._attachments(n,i),n.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),
//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
i.settings.disabled&&this._disableDatepicker(e))},/* Make attachments based on settings. */
_attachments:function(e,i){var n,s,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),n=this._get(i,"showOn"),"focus"!==n&&"both"!==n||// pop-up date picker when in the marked field
e.on("focus",this._showDatepicker),"button"!==n&&"both"!==n||(// pop-up date picker when button clicked
s=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:s,title:s}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:s,title:s}):s)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},/* Apply the maximum length for the date format. */
_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,n,s,o=new Date(2009,11,20),// Ensure double digits
a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,n=0,s=0;s<t.length;s++)t[s].length>i&&(i=t[s].length,n=s);return n},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},/* Attach an inline date picker to a div. */
_inlineDatepicker:function(e,i){var n=t(e);n.hasClass(this.markerClassName)||(n.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),
//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
i.settings.disabled&&this._disableDatepicker(e),
// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
i.dpDiv.css("display","block"))},/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
_dialogDatepicker:function(e,i,n,s,a){var r,l,h,c,u,d=this._dialogInst;// internal instance
// should use actual width/height below
// Move input on screen for focus, but hidden behind dialog
return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),o(d.settings,s||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(l=document.documentElement.clientWidth,h=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+c,h/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=n,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
_destroyDatepicker:function(e){var i,n=t(e),s=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(s.append.remove(),s.trigger.remove(),n.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):"div"!==i&&"span"!==i||n.removeClass(this.markerClassName).empty(),a===s&&(a=null))},/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
_enableDatepicker:function(e){var i,n,s=t(e),o=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==i&&"span"!==i||(n=s.children("."+this._inlineClass),n.children().removeClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
_disableDatepicker:function(e){var i,n,s=t(e),o=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==i&&"span"!==i||(n=s.children("."+this._inlineClass),n.children().addClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),// delete entry
this._disabledInputs[this._disabledInputs.length]=e)},/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;e<this._disabledInputs.length;e++)if(this._disabledInputs[e]===t)return!0;return!1},/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
_getInst:function(e){try{return t.data(e,"datepicker")}catch(t){throw"Missing instance data for this datepicker"}},/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
_optionDatepicker:function(e,i,n){var s,a,r,l,h=this._getInst(e);if(2===arguments.length&&"string"==typeof i)return"defaults"===i?t.extend({},t.datepicker._defaults):h?"all"===i?t.extend({},h.settings):this._get(h,i):null;s=i||{},"string"==typeof i&&(s={},s[i]=n),h&&(this._curInst===h&&this._hideDatepicker(),a=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(h,"min"),l=this._getMinMaxDate(h,"max"),o(h.settings,s),
// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
null!==r&&void 0!==s.dateFormat&&void 0===s.minDate&&(h.settings.minDate=this._formatDate(h,r)),null!==l&&void 0!==s.dateFormat&&void 0===s.maxDate&&(h.settings.maxDate=this._formatDate(h,l)),"disabled"in s&&(s.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),h),this._autoSize(h),this._setDate(h,a),this._updateAlternate(h),this._updateDatepicker(h))},
// Change method deprecated
_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},/* Handle keystrokes. */
_doKeyDown:function(e){var i,n,s,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;// hide on tab out
case 13:
// Trigger custom callback
return s=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),s[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,s[0]),i=t.datepicker._get(o,"onSelect"),i?(n=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[n,o])):t.datepicker._hideDatepicker(),!1;// don't submit the form
case 27:t.datepicker._hideDatepicker();break;// hide on escape
case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;// previous month/year on page up/+ ctrl
case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;// next month/year on page down/+ ctrl
case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;// clear on ctrl or command +end
case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;// current on ctrl or command +home
case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,
// -1 day on ctrl or command +left
e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");
// next month/year on alt +left on Mac
break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;// -1 week on ctrl or command +up
case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,
// +1 day on ctrl or command +right
e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");
// next month/year on alt +right
break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;// +1 week on ctrl or command +down
default:a=!1}else 36===e.keyCode&&e.ctrlKey?// display the date picker on ctrl+home
t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},/* Filter entered characters - based on date format. */
_doKeyPress:function(e){var i,n,s=t.datepicker._getInst(e.target);if(t.datepicker._get(s,"constrainInput"))return i=t.datepicker._possibleChars(t.datepicker._get(s,"dateFormat")),n=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||n<" "||!i||i.indexOf(n)>-1},/* Synchronise manual entry and field/alternate field. */
_doKeyUp:function(e){var i,n=t.datepicker._getInst(e.target);if(n.input.val()!==n.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(n,"dateFormat"),n.input?n.input.val():null,t.datepicker._getFormatConfig(n)),i&&(// only if valid
t.datepicker._setDateFromField(n),t.datepicker._updateAlternate(n),t.datepicker._updateDatepicker(n))}catch(t){}return!0},/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
_showDatepicker:function(i){if(i=i.target||i,"input"!==i.nodeName.toLowerCase()&&(// find from button/image trigger
i=t("input",i.parentNode)[0]),!t.datepicker._isDisabledDatepicker(i)&&t.datepicker._lastInput!==i){var n,s,a,r,l,h,c;n=t.datepicker._getInst(i),t.datepicker._curInst&&t.datepicker._curInst!==n&&(t.datepicker._curInst.dpDiv.stop(!0,!0),n&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(n,"beforeShow"),a=s?s.apply(i,[i,n]):{},!1!==a&&(o(n.settings,a),n.lastVal=null,t.datepicker._lastInput=i,t.datepicker._setDateFromField(n),t.datepicker._inDialog&&(// hide cursor
i.value=""),t.datepicker._pos||(// position below input
t.datepicker._pos=t.datepicker._findPos(i),t.datepicker._pos[1]+=i.offsetHeight),r=!1,t(i).parents().each(function(){return!(r|="fixed"===t(this).css("position"))}),l={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,
//to avoid flashes on Firefox
n.dpDiv.empty(),
// determine sizing offscreen
n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(n),
// fix width for dynamic number of date pickers
// and adjust position before showing
l=t.datepicker._checkOffset(n,l,r),n.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:l.left+"px",top:l.top+"px"}),n.inline||(h=t.datepicker._get(n,"showAnim"),c=t.datepicker._get(n,"duration"),n.dpDiv.css("z-index",e(t(i))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?n.dpDiv.show(h,t.datepicker._get(n,"showOptions"),c):n.dpDiv[h||"show"](h?c:null),t.datepicker._shouldFocusInput(n)&&n.input.trigger("focus"),t.datepicker._curInst=n))}},/* Generate the date picker content. */
_updateDatepicker:function(e){this.maxRows=4,//Reset the max number of rows being displayed (see #7043)
a=e,// for delegate hover events
e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,n=this._getNumberOfMonths(e),o=n[1],r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&s.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),o>1&&e.dpDiv.addClass("ui-datepicker-multi-"+o).css("width",17*o+"em"),e.dpDiv[(1!==n[0]||1!==n[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),
// Deffered render of the years select (to avoid flashes on Firefox)
e.yearshtml&&(i=e.yearshtml,setTimeout(function(){
//assure that inst.yearshtml didn't change.
i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},
// #6694 - don't focus the input if it's already focused
// this breaks the change event in IE
// Support: IE and jQuery <1.9
_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},/* Check positioning to remain on screen. */
_checkOffset:function(e,i,n){var s=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(n?0:t(document).scrollLeft()),h=document.documentElement.clientHeight+(n?0:t(document).scrollTop());
// Now check if datepicker is showing outside window viewport - move to a better place if so.
return i.left-=this._get(e,"isRTL")?s-a:0,i.left-=n&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=n&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+s>l&&l>s?Math.abs(i.left+s-l):0),i.top-=Math.min(i.top,i.top+o>h&&h>o?Math.abs(o+r):0),i},/* Find an object's position on the screen. */
_findPos:function(e){for(var i,n=this._getInst(e),s=this._get(n,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[s?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
_hideDatepicker:function(e){var i,n,s,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),n=this._get(a,"duration"),s=function(){t.datepicker._tidyDialog(a)},
// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),n,s):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?n:null,s),i||s(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},/* Tidy up after a dialog display. */
_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},/* Close date picker if clicked elsewhere. */
_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),n=t.datepicker._getInst(i[0]);(i[0].id===t.datepicker._mainDivId||0!==i.parents("#"+t.datepicker._mainDivId).length||i.hasClass(t.datepicker.markerClassName)||i.closest("."+t.datepicker._triggerClass).length||!t.datepicker._datepickerShowing||t.datepicker._inDialog&&t.blockUI)&&(!i.hasClass(t.datepicker.markerClassName)||t.datepicker._curInst===n)||t.datepicker._hideDatepicker()}},/* Adjust one of the date sub-fields. */
_adjustDate:function(e,i,n){var s=t(e),o=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(o,i+("M"===n?this._get(o,"showCurrentAtPos"):0),// undo positioning
n),this._updateDatepicker(o))},/* Action for current link. */
_gotoToday:function(e){var i,n=t(e),s=this._getInst(n[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(i=new Date,s.selectedDay=i.getDate(),s.drawMonth=s.selectedMonth=i.getMonth(),s.drawYear=s.selectedYear=i.getFullYear()),this._notifyChange(s),this._adjustDate(n)},/* Action for selecting a new month/year. */
_selectMonthYear:function(e,i,n){var s=t(e),o=this._getInst(s[0]);o["selected"+("M"===n?"Month":"Year")]=o["draw"+("M"===n?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(s)},/* Action for selecting a day. */
_selectDay:function(e,i,n,s){var o,a=t(e);t(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",s).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=n,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},/* Erase the input field and hide the date picker. */
_clearDate:function(e){var i=t(e);this._selectDate(i,"")},/* Update the input field with the selected date. */
_selectDate:function(e,i){var n,s=t(e),o=this._getInst(s[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),n=this._get(o,"onSelect"),n?n.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},/* Update any alternate field to synchronise with the main field. */
_updateAlternate:function(e){var i,n,s,o=this._get(e,"altField");o&&(// update alternate field too
i=this._get(e,"altFormat")||this._get(e,"dateFormat"),n=this._getDate(e),s=this.formatDate(i,n,this._getFormatConfig(e)),t(o).val(s))},/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
noWeekends:function(t){var e=t.getDay();return[e>0&&e<6,""]},/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
iso8601Week:function(t){var e,i=new Date(t.getTime());
// Find Thursday of this week starting on Monday
// Compare with Jan 1
return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
parseDate:function(e,i,n){if(null==e||null==i)throw"Invalid arguments";if(""===(i="object"==typeof i?i.toString():i+""))return null;var s,o,a,r,l=0,h=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),u=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,d=(n?n.dayNames:null)||this._defaults.dayNames,p=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,f=(n?n.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,v=-1,_=-1,b=!1,
// Check whether a format character is doubled
y=function(t){var i=s+1<e.length&&e.charAt(s+1)===t;return i&&s++,i},
// Extract a number from the string value
w=function(t){var e=y(t),n="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,s="y"===t?n:1,o=new RegExp("^\\d{"+s+","+n+"}"),a=i.substring(l).match(o);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},
// Extract a name from the string value and convert to an index
x=function(e,n,s){var o=-1,a=t.map(y(e)?s:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var n=e[1];if(i.substr(l,n.length).toLowerCase()===n.toLowerCase())return o=e[0],l+=n.length,!1}),-1!==o)return o+1;throw"Unknown name at position "+l},
// Confirm that a literal character matches the string value
k=function(){if(i.charAt(l)!==e.charAt(s))throw"Unexpected literal at position "+l;l++};for(s=0;s<e.length;s++)if(b)"'"!==e.charAt(s)||y("'")?k():b=!1;else switch(e.charAt(s)){case"d":v=w("d");break;case"D":x("D",u,d);break;case"o":_=w("o");break;case"m":m=w("m");break;case"M":m=x("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,v=r.getDate();break;case"'":y("'")?k():b=!0;break;default:k()}if(l<i.length&&(a=i.substr(l),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():g<100&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(g<=c?0:-100)),_>-1)for(m=1,v=_;;){if(o=this._getDaysInMonth(g,m-1),v<=o)break;m++,v-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,v)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==v)throw"Invalid date";return r},/* Standard date formats. */
ATOM:"yy-mm-dd",// RFC 3339 (ISO 8601)
COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",// RFC 822
TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",// ISO 8601
_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
formatDate:function(t,e,i){if(!e)return"";var n,s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,
// Check whether a format character is doubled
l=function(e){var i=n+1<t.length&&t.charAt(n+1)===e;return i&&n++,i},
// Format a number, with leading zero if necessary
h=function(t,e,i){var n=""+e;if(l(t))for(;n.length<i;)n="0"+n;return n},
// Format a name, short or long as requested
c=function(t,e,i,n){return l(t)?n[e]:i[e]},u="",d=!1;if(e)for(n=0;n<t.length;n++)if(d)"'"!==t.charAt(n)||l("'")?u+=t.charAt(n):d=!1;else switch(t.charAt(n)){case"d":u+=h("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),s,o);break;case"o":u+=h("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=h("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=l("y")?e.getFullYear():(e.getFullYear()%100<10?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?u+="'":d=!0;break;default:u+=t.charAt(n)}return u},/* Extract all possible characters from the date format. */
_possibleChars:function(t){var e,i="",n=!1,
// Check whether a format character is doubled
s=function(i){var n=e+1<t.length&&t.charAt(e+1)===i;return n&&e++,n};for(e=0;e<t.length;e++)if(n)"'"!==t.charAt(e)||s("'")?i+=t.charAt(e):n=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;// Accept anything
case"'":s("'")?i+="'":n=!0;break;default:i+=t.charAt(e)}return i},/* Get a setting value, defaulting if necessary. */
_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},/* Parse existing date and initialise date picker. */
_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),n=t.lastVal=t.input?t.input.val():null,s=this._getDefaultDate(t),o=s,a=this._getFormatConfig(t);try{o=this.parseDate(i,n,a)||s}catch(t){n=e?"":n}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=n?o.getDate():0,t.currentMonth=n?o.getMonth():0,t.currentYear=n?o.getFullYear():0,this._adjustInstDate(t)}},/* Retrieve the default date shown on opening. */
_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},/* A date may be specified as an exact value or a relative one. */
_determineDate:function(e,i,n){var s=null==i||""===i?n:"string"==typeof i?function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(t){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,s=n.getFullYear(),o=n.getMonth(),a=n.getDate(),r=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=r.exec(i);l;){switch(l[2]||"d"){case"d":case"D":a+=parseInt(l[1],10);break;case"w":case"W":a+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),a=Math.min(a,t.datepicker._getDaysInMonth(s,o));break;case"y":case"Y":s+=parseInt(l[1],10),a=Math.min(a,t.datepicker._getDaysInMonth(s,o))}l=r.exec(i)}return new Date(s,o,a)}(i):"number"==typeof i?isNaN(i)?n:function(t){var e=new Date;return e.setDate(e.getDate()+t),e}(i):new Date(i.getTime());return s=s&&"Invalid Date"===s.toString()?n:s,s&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},/* Set the date(s) directly. */
_setDate:function(t,e,i){var n=!e,s=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),s===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(n?"":this._formatDate(t))},/* Retrieve the date(s) directly. */
_getDate:function(t){return!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))},/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
_attachHandlers:function(e){var i=this._get(e,"stepMonths"),n="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(n,-i,"M")},next:function(){t.datepicker._adjustDate(n,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(n)},selectDay:function(){return t.datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(n,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(n,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},/* Generate the HTML for the current state of the date picker. */
_generateHTML:function(t){var e,i,n,s,o,a,r,l,h,c,u,d,p,f,g,m,v,_,b,y,w,x,k,D,C,T,I,S,M,P,A,N,E,O,H,F,z,W,L,R=new Date,j=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),// clear time
$=this._get(t,"isRTL"),Y=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),B=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),K=this._get(t,"showCurrentAtPos"),V=this._get(t,"stepMonths"),X=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-K,tt=t.drawYear;if(Z<0&&(Z+=12,tt--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&e<Q?Q:e;this._daylightSavingAdjust(new Date(tt,Z,1))>e;)--Z<0&&(Z=11,tt--);for(t.drawMonth=Z,t.drawYear=tt,i=this._get(t,"prevText"),i=B?this.formatDate(i,this._daylightSavingAdjust(new Date(tt,Z-V,1)),this._getFormatConfig(t)):i,n=this._canAdjustMonth(t,-1,tt,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+($?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+($?"e":"w")+"'>"+i+"</span></a>",s=this._get(t,"nextText"),s=B?this.formatDate(s,this._daylightSavingAdjust(new Date(tt,Z+V,1)),this._getFormatConfig(t)):s,o=this._canAdjustMonth(t,1,tt,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+($?"w":"e")+"'>"+s+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+($?"w":"e")+"'>"+s+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:j,a=B?this.formatDate(a,r,this._getFormatConfig(t)):a,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",h=Y?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+($?l:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+($?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",x=0;x<U[0];x++){for(k="",this.maxRows=4,D=0;D<U[1];D++){if(C=this._daylightSavingAdjust(new Date(tt,Z,t.selectedDay)),T=" ui-corner-all",I="",X){if(I+="<div class='ui-datepicker-group",U[1]>1)switch(D){case 0:I+=" ui-datepicker-group-first",T=" ui-corner-"+($?"right":"left");break;case U[1]-1:I+=" ui-datepicker-group-last",T=" ui-corner-"+($?"left":"right");break;default:I+=" ui-datepicker-group-middle",T=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&0===x?$?o:n:"")+(/all|right/.test(T)&&0===x?$?n:o:"")+this._generateMonthYearHeader(t,Z,tt,Q,J,x>0||D>0,f,g)+// draw month headers
"</div><table class='ui-datepicker-calendar'><thead><tr>",S=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;w<7;w++)// days of the week
M=(w+c)%7,S+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+d[M]+"'>"+p[M]+"</span></th>";for(I+=S+"</tr></thead><tbody>",P=this._getDaysInMonth(tt,Z),tt===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,P)),A=(this._getFirstDayOfMonth(tt,Z)-c+7)%7,N=Math.ceil((A+P)/7),// calculate the number of rows to generate
E=X&&this.maxRows>N?this.maxRows:N,//If multiple months, use the higher number of rows (see #7043)
this.maxRows=E,O=this._daylightSavingAdjust(new Date(tt,Z,1-A)),H=0;H<E;H++){for(// create date picker rows
I+="<tr>",F=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(O)+"</td>":"",w=0;w<7;w++)// create date picker days
z=m?m.apply(t.input?t.input[0]:null,[O]):[!0,""],W=O.getMonth()!==Z,L=W&&!_||!z[0]||Q&&O<Q||J&&O>J,F+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(// highlight weekends
W?" ui-datepicker-other-month":"")+(// highlight days from other months
O.getTime()===C.getTime()&&Z===t.selectedMonth&&t._keyEvent||// user pressed key
b.getTime()===O.getTime()&&b.getTime()===C.getTime()?
// or defaultDate is current printedDate and defaultDate is selectedDate
" "+this._dayOverClass:"")+(// highlight selected day
L?" "+this._unselectableClass+" ui-state-disabled":"")+(// highlight unselectable days
W&&!v?"":" "+z[1]+(// highlight custom dates
O.getTime()===G.getTime()?" "+this._currentClass:"")+(// highlight selected day
O.getTime()===j.getTime()?" ui-datepicker-today":""))+"'"+(// highlight today (if different)
W&&!v||!z[2]?"":" title='"+z[2].replace(/'/g,"&#39;")+"'")+(// cell title
L?"":" data-handler='selectDay' data-event='click' data-month='"+O.getMonth()+"' data-year='"+O.getFullYear()+"'")+">"+(// actions
W&&!v?"&#xa0;":// display for other months
L?"<span class='ui-state-default'>"+O.getDate()+"</span>":"<a class='ui-state-default"+(O.getTime()===j.getTime()?" ui-state-highlight":"")+(O.getTime()===G.getTime()?" ui-state-active":"")+(// highlight selected day
W?" ui-priority-secondary":"")+// distinguish dates from other months
"' href='#'>"+O.getDate()+"</a>")+"</td>",// display selectable date
O.setDate(O.getDate()+1),O=this._daylightSavingAdjust(O);I+=F+"</tr>"}Z++,Z>11&&(Z=0,tt++),I+="</tbody></table>"+(X?"</div>"+(U[0]>0&&D===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=I}y+=k}return y+=h,t._keyEvent=!1,y},/* Generate the month and year header. */
_generateMonthYearHeader:function(t,e,i,n,s,o,a,r){var l,h,c,u,d,p,f,g,m=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";
// Month selection
if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(l=n&&n.getFullYear()===i,h=s&&s.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;c<12;c++)(!l||c>=n.getMonth())&&(!h||c<=s.getMonth())&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}
// Year selection
if(_||(b+=y+(!o&&m&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(
// determine range of years to display
u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=n?Math.max(f,n.getFullYear()):f,g=s?Math.min(g,s.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";f<=g;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}// Close datepicker_header
return b+=this._get(t,"yearSuffix"),_&&(b+=(!o&&m&&v?"":"&#xa0;")+y),b+="</div>"},/* Adjust one of the date sub-fields. */
_adjustInstDate:function(t,e,i){var n=t.selectedYear+("Y"===i?e:0),s=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(n,s))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(n,s,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),"M"!==i&&"Y"!==i||this._notifyChange(t)},/* Ensure a date is within any min/max bounds. */
_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),n=this._getMinMaxDate(t,"max"),s=i&&e<i?i:e;return n&&s>n?n:s},/* Notify change of month/year. */
_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},/* Determine the number of months to show. */
_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},/* Determine the current maximum date - ensure no time components are set. */
_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},/* Find the number of days in a given month. */
_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},/* Find the day of the week of the first of a month. */
_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},/* Determines if we should allow a "next/prev" month display change. */
_canAdjustMonth:function(t,e,i,n){var s=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,n+(e<0?e:s[0]*s[1]),1));return e<0&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},/* Is the given date in the accepted range? */
_isInRange:function(t,e){var i,n,s=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),n=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=n),i[1].match(/[+\-].*/)&&(r+=n)),(!s||e.getTime()>=s.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||e.getFullYear()<=r)},/* Provide the configuration settings for formatting/parsing. */
_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},/* Format the given date for display. */
_formatDate:function(t,e,i,n){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var s=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(n,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),s,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){/* Verify an empty collection wasn't passed - Fixes #6976 */
if(!this.length)return this;/* Initialise the date picker. */
t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),/* Append datepicker main container to body if not exist. */
0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker})},/* 69 */
/***/
function(t,e,i){var n;/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
!function(s){function o(t,e,i,n){var s,o,a,r,l,h,c,u=e&&e.ownerDocument,
// nodeType defaults to 9, since context defaults to document
d=e?e.nodeType:9;
// Return early from calls with invalid selector or context
if(i=i||[],"string"!=typeof t||!t||1!==d&&9!==d&&11!==d)return i;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!n&&((e?e.ownerDocument||e:Y)!==H&&O(e),e=e||H,z)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==d&&(l=bt.exec(t)))
// ID selector
if(s=l[1]){
// Document context
if(9===d){if(!(a=e.getElementById(s)))return i;
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(a.id===s)return i.push(a),i}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(u&&(a=u.getElementById(s))&&j(e,a)&&a.id===s)return i.push(a),i}else{if(l[2])return tt.apply(i,e.getElementsByTagName(t)),i;if((s=l[3])&&D.getElementsByClassName&&e.getElementsByClassName)return tt.apply(i,e.getElementsByClassName(s)),i}
// Take advantage of querySelectorAll
if(D.qsa&&!V[t+" "]&&(!W||!W.test(t))){if(1!==d)u=e,c=t;else if("object"!==e.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(r=e.getAttribute("id"))?r=r.replace(kt,Dt):e.setAttribute("id",r=$),
// Prefix every selector in the list
h=S(t),o=h.length;o--;)h[o]="#"+r+" "+g(h[o]);c=h.join(","),
// Expand context for sibling selectors
u=yt.test(t)&&p(e.parentNode)||e}if(c)try{return tt.apply(i,u.querySelectorAll(c)),i}catch(t){}finally{r===$&&e.removeAttribute("id")}}}
// All others
return P(t.replace(ht,"$1"),e,i,n)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function a(){function t(i,n){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return e.push(i+" ")>C.cacheLength&&delete t[e.shift()],t[i+" "]=n}var e=[];return t}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function r(t){return t[$]=!0,t}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function l(t){var e=H.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{
// Remove from its parent by default
e.parentNode&&e.parentNode.removeChild(e),
// release memory in IE
e=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function h(t,e){for(var i=t.split("|"),n=i.length;n--;)C.attrHandle[i[n]]=e}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function c(t,e){var i=e&&t,n=i&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(n)return n;
// Check if b follows a
if(i)for(;i=i.nextSibling;)if(i===e)return-1;return t?1:-1}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function u(t){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(e){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
// Option elements defer to a parent optgroup if present
// Where there is no isDisabled, check manually
/* jshint -W018 */
return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&Tt(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function d(t){return r(function(e){return e=+e,r(function(i,n){
// Match elements found at the specified indexes
for(var s,o=t([],i.length,e),a=o.length;a--;)i[s=o[a]]&&(i[s]=!(n[s]=i[s]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function p(t){return t&&void 0!==t.getElementsByTagName&&t}
// Easy API for creating new setFilters
function f(){}function g(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e].value;return n}function m(t,e,i){var n=e.dir,s=e.next,o=s||n,a=i&&"parentNode"===o,r=B++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return e.first?function(e,i,s){for(;e=e[n];)if(1===e.nodeType||a)return t(e,i,s);return!1}:function(e,i,l){var h,c,u,d=[q,r];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(l){for(;e=e[n];)if((1===e.nodeType||a)&&t(e,i,l))return!0}else for(;e=e[n];)if(1===e.nodeType||a)if(u=e[$]||(e[$]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=u[e.uniqueID]||(u[e.uniqueID]={}),s&&s===e.nodeName.toLowerCase())e=e[n]||e;else{if((h=c[o])&&h[0]===q&&h[1]===r)
// Assign to newCache so results back-propagate to previous elements
return d[2]=h[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
c[o]=d,d[2]=t(e,i,l))return!0}return!1}}function v(t){return t.length>1?function(e,i,n){for(var s=t.length;s--;)if(!t[s](e,i,n))return!1;return!0}:t[0]}function _(t,e,i){for(var n=0,s=e.length;n<s;n++)o(t,e[n],i);return i}function b(t,e,i,n,s){for(var o,a=[],r=0,l=t.length,h=null!=e;r<l;r++)(o=t[r])&&(i&&!i(o,n,s)||(a.push(o),h&&e.push(r)));return a}function y(t,e,i,n,s,o){return n&&!n[$]&&(n=y(n)),s&&!s[$]&&(s=y(s,o)),r(function(o,a,r,l){var h,c,u,d=[],p=[],f=a.length,
// Get initial elements from seed or context
g=o||_(e||"*",r.nodeType?[r]:r,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
m=!t||!o&&e?g:b(g,d,t,r,l),v=i?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
s||(o?t:f||n)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
a:m;
// Apply postFilter
if(
// Find primary matches
i&&i(m,v,r,l),n)for(h=b(v,p),n(h,[],r,l),
// Un-match failing elements by moving them back to matcherIn
c=h.length;c--;)(u=h[c])&&(v[p[c]]=!(m[p[c]]=u));if(o){if(s||t){if(s){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
h=[],c=v.length;c--;)(u=v[c])&&
// Restore matcherIn since elem is not yet a final match
h.push(m[c]=u);s(null,v=[],h,l)}for(
// Move matched elements from seed to results to keep them synchronized
c=v.length;c--;)(u=v[c])&&(h=s?it(o,u):d[c])>-1&&(o[h]=!(a[h]=u))}}else v=b(v===a?v.splice(f,v.length):v),s?s(null,a,v,l):tt.apply(a,v)})}function w(t){for(var e,i,n,s=t.length,o=C.relative[t[0].type],a=o||C.relative[" "],r=o?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
l=m(function(t){return t===e},a,!0),h=m(function(t){return it(e,t)>-1},a,!0),c=[function(t,i,n){var s=!o&&(n||i!==A)||((e=i).nodeType?l(t,i,n):h(t,i,n));
// Avoid hanging onto element (issue #299)
return e=null,s}];r<s;r++)if(i=C.relative[t[r].type])c=[m(v(c),i)];else{
// Return special upon seeing a positional matcher
if(i=C.filter[t[r].type].apply(null,t[r].matches),i[$]){for(
// Find the next relative operator (if any) for proper handling
n=++r;n<s&&!C.relative[t[n].type];n++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return y(r>1&&v(c),r>1&&g(t.slice(0,r-1).concat({value:" "===t[r-2].type?"*":""})).replace(ht,"$1"),i,r<n&&w(t.slice(r,n)),n<s&&w(t=t.slice(n)),n<s&&g(t))}c.push(i)}return v(c)}function x(t,e){var i=e.length>0,n=t.length>0,s=function(s,a,r,l,h){var c,u,d,p=0,f="0",g=s&&[],m=[],v=A,
// We must always have either seed elements or outermost context
_=s||n&&C.find.TAG("*",h),
// Use integer dirruns iff this is the outermost matcher
y=q+=null==v?1:Math.random()||.1,w=_.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(h&&(A=a===H||a||h);f!==w&&null!=(c=_[f]);f++){if(n&&c){for(u=0,a||c.ownerDocument===H||(O(c),r=!z);d=t[u++];)if(d(c,a||H,r)){l.push(c);break}h&&(q=y)}
// Track unmatched elements for set filters
i&&(
// They will have gone through all possible matchers
(c=!d&&c)&&p--,
// Lengthen the array for every element, matched or not
s&&g.push(c))}
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
p+=f,i&&f!==p){for(u=0;d=e[u++];)d(g,m,a,r);if(s){
// Reintegrate element matches to eliminate the need for sorting
if(p>0)for(;f--;)g[f]||m[f]||(m[f]=J.call(l));
// Discard index placeholder values to get only actual matches
m=b(m)}
// Add matches to results
tt.apply(l,m),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
h&&!s&&m.length>0&&p+e.length>1&&o.uniqueSort(l)}
// Override manipulation of globals by nested matchers
return h&&(q=y,A=v),g};return i?r(s):s}var k,D,C,T,I,S,M,P,A,N,E,
// Local document vars
O,H,F,z,W,L,R,j,
// Instance-specific data
$="sizzle"+1*new Date,Y=s.document,q=0,B=0,U=a(),K=a(),V=a(),X=function(t,e){return t===e&&(E=!0),0},
// Instance methods
G={}.hasOwnProperty,Q=[],J=Q.pop,Z=Q.push,tt=Q.push,et=Q.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
it=function(t,e){for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1},nt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
st="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
ot="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
at="\\["+st+"*("+ot+")(?:"+st+
// Operator (capture 2)
"*([*^$|!~]?=)"+st+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ot+"))|)"+st+"*\\]",rt=":("+ot+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+at+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
lt=new RegExp(st+"+","g"),ht=new RegExp("^"+st+"+|((?:^|[^\\\\])(?:\\\\.)*)"+st+"+$","g"),ct=new RegExp("^"+st+"*,"+st+"*"),ut=new RegExp("^"+st+"*([>+~]|"+st+")"+st+"*"),dt=new RegExp("="+st+"*([^\\]'\"]*?)"+st+"*\\]","g"),pt=new RegExp(rt),ft=new RegExp("^"+ot+"$"),gt={ID:new RegExp("^#("+ot+")"),CLASS:new RegExp("^\\.("+ot+")"),TAG:new RegExp("^("+ot+"|[*])"),ATTR:new RegExp("^"+at),PSEUDO:new RegExp("^"+rt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+st+"*(even|odd|(([+-]|)(\\d*)n|)"+st+"*(?:([+-]|)"+st+"*(\\d+)|))"+st+"*\\)|)","i"),bool:new RegExp("^(?:"+nt+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+st+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+st+"*((?:-\\d)?\\d*)"+st+"*\\)|)(?=[^-]|$)","i")},mt=/^(?:input|select|textarea|button)$/i,vt=/^h\d$/i,_t=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
bt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,yt=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
wt=new RegExp("\\\\([\\da-f]{1,6}"+st+"?|("+st+")|.)","ig"),xt=function(t,e,i){var n="0x"+e-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return n!==n||i?e:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
kt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Dt=function(t,e){
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
Ct=function(){O()},Tt=m(function(t){return!0===t.disabled&&("form"in t||"label"in t)},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{tt.apply(Q=et.call(Y.childNodes),Y.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
Q[Y.childNodes.length].nodeType}catch(t){tt={apply:Q.length?
// Leverage slice if possible
function(t,e){Z.apply(t,et.call(e))}:
// Support: IE<9
// Otherwise append directly
function(t,e){
// Can't trust NodeList.length
for(var i=t.length,n=0;t[i++]=e[n++];);t.length=i-1}}}
// Expose support vars for convenience
D=o.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
I=o.isXML=function(t){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
O=o.setDocument=function(t){var e,i,n=t?t.ownerDocument||t:Y;
// Return early if doc is invalid or already selected
// Return early if doc is invalid or already selected
// Update global variables
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
// Support: IE 11, Edge
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Support: IE<9
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
// ID filter and find
// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return n!==H&&9===n.nodeType&&n.documentElement?(H=n,F=H.documentElement,z=!I(H),Y!==H&&(i=H.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",Ct,!1):i.attachEvent&&i.attachEvent("onunload",Ct)),D.attributes=l(function(t){return t.className="i",!t.getAttribute("className")}),D.getElementsByTagName=l(function(t){return t.appendChild(H.createComment("")),!t.getElementsByTagName("*").length}),D.getElementsByClassName=_t.test(H.getElementsByClassName),D.getById=l(function(t){return F.appendChild(t).id=$,!H.getElementsByName||!H.getElementsByName($).length}),D.getById?(C.filter.ID=function(t){var e=t.replace(wt,xt);return function(t){return t.getAttribute("id")===e}},C.find.ID=function(t,e){if(void 0!==e.getElementById&&z){var i=e.getElementById(t);return i?[i]:[]}}):(C.filter.ID=function(t){var e=t.replace(wt,xt);return function(t){var i=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return i&&i.value===e}},C.find.ID=function(t,e){if(void 0!==e.getElementById&&z){var i,n,s,o=e.getElementById(t);if(o){if((
// Verify the id attribute
i=o.getAttributeNode("id"))&&i.value===t)return[o];for(
// Fall back on getElementsByName
s=e.getElementsByName(t),n=0;o=s[n++];)if((i=o.getAttributeNode("id"))&&i.value===t)return[o]}return[]}}),C.find.TAG=D.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):D.qsa?e.querySelectorAll(t):void 0}:function(t,e){var i,n=[],s=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
o=e.getElementsByTagName(t);
// Filter out possible comments
if("*"===t){for(;i=o[s++];)1===i.nodeType&&n.push(i);return n}return o},C.find.CLASS=D.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&z)return e.getElementsByClassName(t)},L=[],W=[],(D.qsa=_t.test(H.querySelectorAll))&&(l(function(t){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
F.appendChild(t).innerHTML="<a id='"+$+"'></a><select id='"+$+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
t.querySelectorAll("[msallowcapture^='']").length&&W.push("[*^$]="+st+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
t.querySelectorAll("[selected]").length||W.push("\\["+st+"*(?:value|"+nt+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
t.querySelectorAll("[id~="+$+"-]").length||W.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
t.querySelectorAll(":checked").length||W.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
t.querySelectorAll("a#"+$+"+*").length||W.push(".#.+[+~]")}),l(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var e=H.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
t.querySelectorAll("[name=d]").length&&W.push("name"+st+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==t.querySelectorAll(":enabled").length&&W.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
F.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&W.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
t.querySelectorAll("*,:x"),W.push(",.*:")})),(D.matchesSelector=_t.test(R=F.matches||F.webkitMatchesSelector||F.mozMatchesSelector||F.oMatchesSelector||F.msMatchesSelector))&&l(function(t){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
D.disconnectedMatch=R.call(t,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
R.call(t,"[s!='']:x"),L.push("!=",rt)}),W=W.length&&new RegExp(W.join("|")),L=L.length&&new RegExp(L.join("|")),e=_t.test(F.compareDocumentPosition),j=e||_t.test(F.contains)?function(t,e){var i=9===t.nodeType?t.documentElement:t,n=e&&e.parentNode;return t===n||!(!n||1!==n.nodeType||!(i.contains?i.contains(n):t.compareDocumentPosition&&16&t.compareDocumentPosition(n)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},X=e?function(t,e){
// Flag for duplicate removal
if(t===e)return E=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var i=!t.compareDocumentPosition-!e.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return i||(i=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&i||!D.sortDetached&&e.compareDocumentPosition(t)===i?t===H||t.ownerDocument===Y&&j(Y,t)?-1:e===H||e.ownerDocument===Y&&j(Y,e)?1:N?it(N,t)-it(N,e):0:4&i?-1:1)}:function(t,e){
// Exit early if the nodes are identical
if(t===e)return E=!0,0;var i,n=0,s=t.parentNode,o=e.parentNode,a=[t],r=[e];
// Parentless nodes are either documents or disconnected
if(!s||!o)return t===H?-1:e===H?1:s?-1:o?1:N?it(N,t)-it(N,e):0;if(s===o)return c(t,e);for(
// Otherwise we need full lists of their ancestors for comparison
i=t;i=i.parentNode;)a.unshift(i);for(i=e;i=i.parentNode;)r.unshift(i);
// Walk down the tree looking for a discrepancy
for(;a[n]===r[n];)n++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return n?c(a[n],r[n]):a[n]===Y?-1:r[n]===Y?1:0},H):H},o.matches=function(t,e){return o(t,null,null,e)},o.matchesSelector=function(t,e){if(
// Set document vars if needed
(t.ownerDocument||t)!==H&&O(t),
// Make sure that attribute selectors are quoted
e=e.replace(dt,"='$1']"),D.matchesSelector&&z&&!V[e+" "]&&(!L||!L.test(e))&&(!W||!W.test(e)))try{var i=R.call(t,e);
// IE 9's matchesSelector returns false on disconnected nodes
if(i||D.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
t.document&&11!==t.document.nodeType)return i}catch(t){}return o(e,H,null,[t]).length>0},o.contains=function(t,e){
// Set document vars if needed
return(t.ownerDocument||t)!==H&&O(t),j(t,e)},o.attr=function(t,e){
// Set document vars if needed
(t.ownerDocument||t)!==H&&O(t);var i=C.attrHandle[e.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
n=i&&G.call(C.attrHandle,e.toLowerCase())?i(t,e,!z):void 0;return void 0!==n?n:D.attributes||!z?t.getAttribute(e):(n=t.getAttributeNode(e))&&n.specified?n.value:null},o.escape=function(t){return(t+"").replace(kt,Dt)},o.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
o.uniqueSort=function(t){var e,i=[],n=0,s=0;if(
// Unless we *know* we can detect duplicates, assume their presence
E=!D.detectDuplicates,N=!D.sortStable&&t.slice(0),t.sort(X),E){for(;e=t[s++];)e===t[s]&&(n=i.push(s));for(;n--;)t.splice(i[n],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return N=null,t},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
T=o.getText=function(t){var e,i="",n=0,s=t.nodeType;if(s){if(1===s||9===s||11===s){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof t.textContent)return t.textContent;
// Traverse its children
for(t=t.firstChild;t;t=t.nextSibling)i+=T(t)}else if(3===s||4===s)return t.nodeValue}else
// If no nodeType, this is expected to be an array
for(;e=t[n++];)
// Do not traverse comment nodes
i+=T(e);
// Do not include comment or processing instruction nodes
return i},C=o.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:r,match:gt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){
// Move the given value to match[3] whether quoted or unquoted
return t[1]=t[1].replace(wt,xt),t[3]=(t[3]||t[4]||t[5]||"").replace(wt,xt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||o.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&o.error(t[0]),t},PSEUDO:function(t){var e,i=!t[6]&&t[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return gt.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":i&&pt.test(i)&&(e=S(i,!0))&&(e=i.indexOf(")",i.length-e)-i.length)&&(t[0]=t[0].slice(0,e),t[2]=i.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(wt,xt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=U[t+" "];return e||(e=new RegExp("(^|"+st+")"+t+"("+st+"|$)"))&&U(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,e,i){return function(n){var s=o.attr(n,t);return null==s?"!="===e:!e||(s+="","="===e?s===i:"!="===e?s!==i:"^="===e?i&&0===s.indexOf(i):"*="===e?i&&s.indexOf(i)>-1:"$="===e?i&&s.slice(-i.length)===i:"~="===e?(" "+s.replace(lt," ")+" ").indexOf(i)>-1:"|="===e&&(s===i||s.slice(0,i.length+1)===i+"-"))}},CHILD:function(t,e,i,n,s){var o="nth"!==t.slice(0,3),a="last"!==t.slice(-4),r="of-type"===e;
// Shortcut for :nth-*(n)
return 1===n&&0===s?function(t){return!!t.parentNode}:function(e,i,l){var h,c,u,d,p,f,g=o!==a?"nextSibling":"previousSibling",m=e.parentNode,v=r&&e.nodeName.toLowerCase(),_=!l&&!r,b=!1;if(m){
// :(first|last|only)-(child|of-type)
if(o){for(;g;){for(d=e;d=d[g];)if(r?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
f=g="only"===t&&!f&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(f=[a?m.firstChild:m.lastChild],a&&_){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
d=m,u=d[$]||(d[$]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=u[d.uniqueID]||(u[d.uniqueID]={}),h=c[t]||[],p=h[0]===q&&h[1],b=p&&h[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(
// Fallback to seeking `elem` from the start
b=p=0)||f.pop();)
// When found, cache indexes on `parent` and break
if(1===d.nodeType&&++b&&d===e){c[t]=[q,p,b];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
_&&(
// ...in a gzip-friendly way
d=e,u=d[$]||(d[$]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=u[d.uniqueID]||(u[d.uniqueID]={}),h=c[t]||[],p=h[0]===q&&h[1],b=p),!1===b)
// Use the same loop as above to seek `elem` from the start
for(;(d=++p&&d&&d[g]||(b=p=0)||f.pop())&&((r?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(
// Cache the index of each encountered element
_&&(u=d[$]||(d[$]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=u[d.uniqueID]||(u[d.uniqueID]={}),c[t]=[q,b]),d!==e)););
// Incorporate the offset, then check against cycle size
return(b-=s)===n||b%n==0&&b/n>=0}}},PSEUDO:function(t,e){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var i,n=C.pseudos[t]||C.setFilters[t.toLowerCase()]||o.error("unsupported pseudo: "+t);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return n[$]?n(e):n.length>1?(i=[t,t,"",e],C.setFilters.hasOwnProperty(t.toLowerCase())?r(function(t,i){for(var s,o=n(t,e),a=o.length;a--;)s=it(t,o[a]),t[s]=!(i[s]=o[a])}):function(t){return n(t,0,i)}):n}},pseudos:{
// Potentially complex pseudos
not:r(function(t){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var e=[],i=[],n=M(t.replace(ht,"$1"));return n[$]?r(function(t,e,i,s){
// Match elements unmatched by `matcher`
for(var o,a=n(t,null,s,[]),r=t.length;r--;)(o=a[r])&&(t[r]=!(e[r]=o))}):function(t,s,o){
// Don't keep the element (issue #299)
return e[0]=t,n(e,null,o,i),e[0]=null,!i.pop()}}),has:r(function(t){return function(e){return o(t,e).length>0}}),contains:r(function(t){return t=t.replace(wt,xt),function(e){return(e.textContent||e.innerText||T(e)).indexOf(t)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:r(function(t){
// lang value must be a valid identifier
return ft.test(t||"")||o.error("unsupported lang: "+t),t=t.replace(wt,xt).toLowerCase(),function(e){var i;do{if(i=z?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(i=i.toLowerCase())===t||0===i.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),
// Miscellaneous
target:function(t){var e=s.location&&s.location.hash;return e&&e.slice(1)===t.id},root:function(t){return t===F},focus:function(t){return t===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},
// Boolean properties
enabled:u(!1),disabled:u(!0),checked:function(t){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){
// Accessing this property makes selected-by-default
// options in Safari work properly
return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},
// Contents
empty:function(t){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!C.pseudos.empty(t)},
// Element/input types
header:function(t){return vt.test(t.nodeName)},input:function(t){return mt.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},
// Position-in-collection
first:d(function(){return[0]}),last:d(function(t,e){return[e-1]}),eq:d(function(t,e,i){return[i<0?i+e:i]}),even:d(function(t,e){for(var i=0;i<e;i+=2)t.push(i);return t}),odd:d(function(t,e){for(var i=1;i<e;i+=2)t.push(i);return t}),lt:d(function(t,e,i){for(var n=i<0?i+e:i;--n>=0;)t.push(n);return t}),gt:d(function(t,e,i){for(var n=i<0?i+e:i;++n<e;)t.push(n);return t})}},C.pseudos.nth=C.pseudos.eq;
// Add button/input type pseudos
for(k in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[k]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(k);for(k in{submit:!0,reset:!0})C.pseudos[k]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function(t){return function(e){var i=e.nodeName.toLowerCase();return("input"===i||"button"===i)&&e.type===t}}(k);f.prototype=C.filters=C.pseudos,C.setFilters=new f,S=o.tokenize=function(t,e){var i,n,s,a,r,l,h,c=K[t+" "];if(c)return e?0:c.slice(0);for(r=t,l=[],h=C.preFilter;r;){
// Comma and first run
i&&!(n=ct.exec(r))||(n&&(
// Don't consume trailing commas as valid
r=r.slice(n[0].length)||r),l.push(s=[])),i=!1,
// Combinators
(n=ut.exec(r))&&(i=n.shift(),s.push({value:i,
// Cast descendant combinators to space
type:n[0].replace(ht," ")}),r=r.slice(i.length));
// Filters
for(a in C.filter)!(n=gt[a].exec(r))||h[a]&&!(n=h[a](n))||(i=n.shift(),s.push({value:i,type:a,matches:n}),r=r.slice(i.length));if(!i)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return e?r.length:r?o.error(t):K(t,l).slice(0)},M=o.compile=function(t,e){var i,n=[],s=[],o=V[t+" "];if(!o){for(
// Generate a function of recursive functions that can be used to check each element
e||(e=S(t)),i=e.length;i--;)o=w(e[i]),o[$]?n.push(o):s.push(o);
// Cache the compiled function
o=V(t,x(s,n)),
// Save selector and tokenization
o.selector=t}return o},/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
P=o.select=function(t,e,i,n){var s,o,a,r,l,h="function"==typeof t&&t,c=!n&&S(t=h.selector||t);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(i=i||[],1===c.length){if(
// Reduce context if the leading compound selector is an ID
o=c[0]=c[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===e.nodeType&&z&&C.relative[o[1].type]){if(!(e=(C.find.ID(a.matches[0].replace(wt,xt),e)||[])[0]))return i;h&&(e=e.parentNode),t=t.slice(o.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
s=gt.needsContext.test(t)?0:o.length;s--&&(a=o[s],!C.relative[r=a.type]);)if((l=C.find[r])&&(n=l(a.matches[0].replace(wt,xt),yt.test(o[0].type)&&p(e.parentNode)||e))){if(
// If seed is empty or no tokens remain, we can return early
o.splice(s,1),!(t=n.length&&g(o)))return tt.apply(i,n),i;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(h||M(t,c))(n,e,!z,i,!e||yt.test(t)&&p(e.parentNode)||e),i},
// One-time assignments
// Sort stability
D.sortStable=$.split("").sort(X).join("")===$,
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
D.detectDuplicates=!!E,
// Initialize against the default document
O(),
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
D.sortDetached=l(function(t){
// Should return 1, but returns 4 (following)
return 1&t.compareDocumentPosition(H.createElement("fieldset"))}),
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
l(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||h("type|href|height|width",function(t,e,i){if(!i)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
D.attributes&&l(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||h("value",function(t,e,i){if(!i&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
l(function(t){return null==t.getAttribute("disabled")})||h(nt,function(t,e,i){var n;if(!i)return!0===t[e]?e.toLowerCase():(n=t.getAttributeNode(e))&&n.specified?n.value:null});
// EXPOSE
var It=s.Sizzle;o.noConflict=function(){return s.Sizzle===o&&(s.Sizzle=It),o},void 0!==(n=function(){return o}.call(e,i,e,t))&&(t.exports=n)}(window)},/* 70 */
/***/
function(t,e,i){var n,s;n=[i(0),i(34),i(35),i(9)],void 0!==(s=function(t,e,i){"use strict";var n=[],s=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
t.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var i=n.pop()||t.expando+"_"+e++;return this[i]=!0,i}}),
// Detect, normalize options and install callbacks for jsonp requests
t.ajaxPrefilter("json jsonp",function(e,o,a){var r,l,h,c=!1!==e.jsonp&&(s.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&s.test(e.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(c||"jsonp"===e.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// Force json dataType
// Install callback
// Clean-up function (fires after converters)
return r=e.jsonpCallback=t.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,c?e[c]=e[c].replace(s,"$1"+r):!1!==e.jsonp&&(e.url+=(i.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return h||t.error(r+" was not called"),h[0]},e.dataTypes[0]="json",l=window[r],window[r]=function(){h=arguments},a.always(function(){
// If previous value didn't exist - remove it
void 0===l?t(window).removeProp(r):window[r]=l,
// Save back as free
e[r]&&(
// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=o.jsonpCallback,
// Save the callback name for future use
n.push(r)),
// Call if it was a function and we have a response
h&&t.isFunction(l)&&l(h[0]),h=l=void 0}),"script"})}.apply(e,n))&&(t.exports=s)},/* 71 */
/***/
function(t,e,i){var n,s;n=[i(0),i(19),i(80),i(9),i(12),i(16),i(2)],void 0!==(s=function(t,e){"use strict";/**
 * Load a url into a page
 */
t.fn.load=function(i,n,s){var o,a,r,l=this,h=i.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return h>-1&&(o=e(i.slice(h)),i=i.slice(0,h)),t.isFunction(n)?(s=n,n=void 0):n&&"object"==typeof n&&(a="POST"),l.length>0&&t.ajax({url:i,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:a||"GET",dataType:"html",data:n}).done(function(e){
// Save response for use in complete callback
r=arguments,l.html(o?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
t("<div>").append(t.parseHTML(e)).find(o):
// Otherwise use the full result
e)}).always(s&&function(t,e){l.each(function(){s.apply(this,r||[t.responseText,e,t])})}),this}}.apply(e,n))&&(t.exports=s)},/* 72 */
/***/
function(t,e,i){var n,s;n=[i(0)],void 0!==(s=function(t){"use strict";
// Cross-browser xml parsing
return t.parseXML=function(e){var i;if(!e||"string"!=typeof e)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{i=(new window.DOMParser).parseFromString(e,"text/xml")}catch(t){i=void 0}return i&&!i.getElementsByTagName("parsererror").length||t.error("Invalid XML: "+e),i},t.parseXML}.apply(e,n))&&(t.exports=s)},/* 73 */
/***/
function(t,e,i){var n,s;n=[i(0),i(1),i(9)],void 0!==(s=function(t,e){"use strict";
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
t.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),
// Install script dataType
t.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return t.globalEval(e),e}}}),
// Handle cache's special case and crossDomain
t.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),
// Bind script tag hack transport
t.ajaxTransport("script",function(i){
// This transport only deals with cross domain requests
if(i.crossDomain){var n,s;return{send:function(o,a){n=t("<script>").prop({charset:i.scriptCharset,src:i.url}).on("load error",s=function(t){n.remove(),s=null,t&&a("error"===t.type?404:200,t.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
e.head.appendChild(n[0])},abort:function(){s&&s()}}}})}.apply(e,n))&&(t.exports=s)},/* 74 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";return window.location}.call(e,i,e,t))&&(t.exports=n)},/* 75 */
/***/
function(t,e,i){var n,s;n=[i(0),i(8),i(9)],void 0!==(s=function(t,e){"use strict";t.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(t){}};var i={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},n=t.ajaxSettings.xhr();e.cors=!!n&&"withCredentials"in n,e.ajax=n=!!n,t.ajaxTransport(function(t){var s,o;
// Cross domain only allowed if supported through XMLHttpRequest
if(e.cors||n&&!t.crossDomain)return{send:function(e,n){var a,r=t.xhr();
// Apply custom fields if provided
if(r.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)r[a]=t.xhrFields[a];
// Override mime type if needed
t.mimeType&&r.overrideMimeType&&r.overrideMimeType(t.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
t.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(a in e)r.setRequestHeader(a,e[a]);
// Callback
s=function(t){return function(){s&&(s=o=r.onload=r.onerror=r.onabort=r.onreadystatechange=null,"abort"===t?r.abort():"error"===t?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof r.status?n(0,"error"):n(
// File: protocol always yields status 0; see #8605, #14207
r.status,r.statusText):n(i[r.status]||r.status,r.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},
// Listen to events
r.onload=s(),o=r.onerror=s("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==r.onabort?r.onabort=o:r.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===r.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
window.setTimeout(function(){s&&o()})},
// Create the abort callback
s=s("abort");try{
// Do send the request (this may raise an exception)
r.send(t.hasContent&&t.data||null)}catch(t){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(s)throw t}},abort:function(){s&&s()}}})}.apply(e,n))&&(t.exports=s)},/* 76 */
/***/
function(t,e,i){var n,s;n=[i(0),i(77),i(36),i(78),i(79)],void 0!==(s=function(t){"use strict";
// Return jQuery for attributes-only inclusion
return t}.apply(e,n))&&(t.exports=s)},/* 77 */
/***/
function(t,e,i){var n,s;n=[i(0),i(7),i(5),i(17),i(6),i(2)],void 0!==(s=function(t,e,i,n,s){"use strict";var o,a=t.expr.attrHandle;t.fn.extend({attr:function(i,n){return e(this,t.attr,i,n,arguments.length>1)},removeAttr:function(e){return this.each(function(){t.removeAttr(this,e)})}}),t.extend({attr:function(e,i,n){var s,a,r=e.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==r&&8!==r&&2!==r)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
return void 0===e.getAttribute?t.prop(e,i,n):(1===r&&t.isXMLDoc(e)||(a=t.attrHooks[i.toLowerCase()]||(t.expr.match.bool.test(i)?o:void 0)),void 0!==n?null===n?void t.removeAttr(e,i):a&&"set"in a&&void 0!==(s=a.set(e,n,i))?s:(e.setAttribute(i,n+""),n):a&&"get"in a&&null!==(s=a.get(e,i))?s:(s=t.find.attr(e,i),null==s?void 0:s))},attrHooks:{type:{set:function(t,e){if(!n.radioValue&&"radio"===e&&i(t,"input")){var s=t.value;return t.setAttribute("type",e),s&&(t.value=s),e}}}},removeAttr:function(t,e){var i,n=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
o=e&&e.match(s);if(o&&1===t.nodeType)for(;i=o[n++];)t.removeAttribute(i)}}),
// Hooks for boolean attributes
o={set:function(e,i,n){
// Remove boolean attributes when set to false
return!1===i?t.removeAttr(e,n):e.setAttribute(n,n),n}},t.each(t.expr.match.bool.source.match(/\w+/g),function(e,i){var n=a[i]||t.find.attr;a[i]=function(t,e,i){var s,o,r=e.toLowerCase();
// Avoid an infinite loop by temporarily removing this function from the getter
return i||(o=a[r],a[r]=s,s=null!=n(t,e,i)?r:null,a[r]=o),s}})}.apply(e,n))&&(t.exports=s)},/* 78 */
/***/
function(t,e,i){var n,s;n=[i(0),i(19),i(6),i(4),i(3)],void 0!==(s=function(t,e,i,n){"use strict";function s(t){return t.getAttribute&&t.getAttribute("class")||""}t.fn.extend({addClass:function(n){var o,a,r,l,h,c,u,d=0;if(t.isFunction(n))return this.each(function(e){t(this).addClass(n.call(this,e,s(this)))});if("string"==typeof n&&n)for(o=n.match(i)||[];a=this[d++];)if(l=s(a),r=1===a.nodeType&&" "+e(l)+" "){for(c=0;h=o[c++];)r.indexOf(" "+h+" ")<0&&(r+=h+" ");
// Only assign if different to avoid unneeded rendering.
u=e(r),l!==u&&a.setAttribute("class",u)}return this},removeClass:function(n){var o,a,r,l,h,c,u,d=0;if(t.isFunction(n))return this.each(function(e){t(this).removeClass(n.call(this,e,s(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof n&&n)for(o=n.match(i)||[];a=this[d++];)if(l=s(a),
// This expression is here for better compressibility (see addClass)
r=1===a.nodeType&&" "+e(l)+" "){for(c=0;h=o[c++];)
// Remove *all* instances
for(;r.indexOf(" "+h+" ")>-1;)r=r.replace(" "+h+" "," ");
// Only assign if different to avoid unneeded rendering.
u=e(r),l!==u&&a.setAttribute("class",u)}return this},toggleClass:function(e,o){var a=typeof e;return"boolean"==typeof o&&"string"===a?o?this.addClass(e):this.removeClass(e):t.isFunction(e)?this.each(function(i){t(this).toggleClass(e.call(this,i,s(this),o),o)}):this.each(function(){var o,r,l,h;if("string"===a)for(
// Toggle individual class names
r=0,l=t(this),h=e.match(i)||[];o=h[r++];)
// Check each className given, space separated list
l.hasClass(o)?l.removeClass(o):l.addClass(o);else void 0!==e&&"boolean"!==a||(o=s(this),o&&
// Store className if set
n.set(this,"__className__",o),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",o||!1===e?"":n.get(this,"__className__")||""))})},hasClass:function(t){var i,n,o=0;for(i=" "+t+" ";n=this[o++];)if(1===n.nodeType&&(" "+e(s(n))+" ").indexOf(i)>-1)return!0;return!1}})}.apply(e,n))&&(t.exports=s)},/* 79 */
/***/
function(t,e,i){var n,s;n=[i(0),i(19),i(17),i(5),i(3)],void 0!==(s=function(t,e,i,n){"use strict";t.fn.extend({val:function(e){var i,n,s,o=this[0];{if(arguments.length)return s=t.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=s?e.call(this,n,t(this).val()):e,
// Treat null/undefined as ""; convert numbers to string
null==o?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=t.map(o,function(t){return null==t?"":t+""})),
// If set returns undefined, fall back to normal setting
(i=t.valHooks[this.type]||t.valHooks[this.nodeName.toLowerCase()])&&"set"in i&&void 0!==i.set(this,o,"value")||(this.value=o))});if(o)
// Handle most common string cases
return(i=t.valHooks[o.type]||t.valHooks[o.nodeName.toLowerCase()])&&"get"in i&&void 0!==(n=i.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(/\r/g,""):null==n?"":n)}}}),t.extend({valHooks:{option:{get:function(i){var n=t.find.attr(i,"value");
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
return null!=n?n:e(t.text(i))}},select:{get:function(e){var i,s,o,a=e.options,r=e.selectedIndex,l="select-one"===e.type,h=l?null:[],c=l?r+1:a.length;
// Loop through all the selected options
for(o=r<0?c:l?r:0;o<c;o++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(s=a[o],(s.selected||o===r)&&
// Don't return options that are disabled or in a disabled optgroup
!s.disabled&&(!s.parentNode.disabled||!n(s.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
i=t(s).val(),l)return i;
// Multi-Selects return an array
h.push(i)}return h},set:function(e,i){for(var n,s,o=e.options,a=t.makeArray(i),r=o.length;r--;)s=o[r],/* eslint-disable no-cond-assign */
(s.selected=t.inArray(t.valHooks.option.get(s),a)>-1)&&(n=!0);
// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),a}}}}),
// Radios and checkboxes getter/setter
t.each(["radio","checkbox"],function(){t.valHooks[this]={set:function(e,i){if(Array.isArray(i))return e.checked=t.inArray(t(e).val(),i)>-1}},i.checkOn||(t.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})})}.apply(e,n))&&(t.exports=s)},/* 80 */
/***/
function(t,e,i){var n,s;n=[i(0),i(1),i(39),i(50),
// This is the only module that needs core/support
i(82)],void 0!==(s=function(t,e,i,n,s){"use strict";
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
return t.parseHTML=function(o,a,r){if("string"!=typeof o)return[];"boolean"==typeof a&&(r=a,a=!1);var l,h,c;
// Single tag
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
// Single tag
return a||(s.createHTMLDocument?(a=e.implementation.createHTMLDocument(""),l=a.createElement("base"),l.href=e.location.href,a.head.appendChild(l)):a=e),h=i.exec(o),c=!r&&[],h?[a.createElement(h[1])]:(h=n([o],a,c),c&&c.length&&t(c).remove(),t.merge([],h.childNodes))},t.parseHTML}.apply(e,n))&&(t.exports=s)},/* 81 */
/***/
function(t,e,i){var n,s;n=[i(0)],void 0!==(s=function(t){"use strict";t.readyException=function(t){window.setTimeout(function(){throw t})}}.apply(e,n))&&(t.exports=s)},/* 82 */
/***/
function(t,e,i){var n,s;n=[i(1),i(8)],void 0!==(s=function(t,e){"use strict";
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
return e.createHTMLDocument=function(){var e=t.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),e}.apply(e,n))&&(t.exports=s)},/* 83 */
/***/
function(t,e,i){var n,s;n=[i(0),i(2)],void 0!==(s=function(t){"use strict";t.expr.pseudos.hidden=function(e){return!t.expr.pseudos.visible(e)},t.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}}.apply(e,n))&&(t.exports=s)},/* 84 */
/***/
function(t,e,i){var n,s;n=[i(0),i(4),i(45)],void 0!==(s=function(t,e,i){"use strict";function n(e){var i,n=e.ownerDocument,s=e.nodeName,a=o[s];return a||(i=n.body.appendChild(n.createElement(s)),a=t.css(i,"display"),i.parentNode.removeChild(i),"none"===a&&(a="block"),o[s]=a,a)}function s(t,s){
// Determine new display value for elements that need to change
for(var o,a,r=[],l=0,h=t.length;l<h;l++)a=t[l],a.style&&(o=a.style.display,s?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===o&&(r[l]=e.get(a,"display")||null,r[l]||(a.style.display="")),""===a.style.display&&i(a)&&(r[l]=n(a))):"none"!==o&&(r[l]="none",
// Remember what we're overwriting
e.set(a,"display",o)));
// Set the display of the elements in a second loop to avoid constant reflow
for(l=0;l<h;l++)null!=r[l]&&(t[l].style.display=r[l]);return t}var o={};return t.fn.extend({show:function(){return s(this,!0)},hide:function(){return s(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){i(this)?t(this).show():t(this).hide()})}}),s}.apply(e,n))&&(t.exports=s)},/* 85 */
/***/
function(t,e,i){var n,s;n=[i(0),i(7),i(4),i(49)],void 0!==(s=function(t,e,i,n){"use strict";function s(t){
// Only convert to a number if it doesn't change the string
return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:a.test(t)?JSON.parse(t):t)}function o(t,e,i){var o;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===i&&1===t.nodeType)if(o="data-"+e.replace(r,"-$&").toLowerCase(),"string"==typeof(i=t.getAttribute(o))){try{i=s(i)}catch(t){}
// Make sure we set the data so it isn't changed later
n.set(t,e,i)}else i=void 0;return i}
//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
var a=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,r=/[A-Z]/g;return t.extend({hasData:function(t){return n.hasData(t)||i.hasData(t)},data:function(t,e,i){return n.access(t,e,i)},removeData:function(t,e){n.remove(t,e)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(t,e,n){return i.access(t,e,n)},_removeData:function(t,e){i.remove(t,e)}}),t.fn.extend({data:function(s,a){var r,l,h,c=this[0],u=c&&c.attributes;
// Gets all values
if(void 0===s){if(this.length&&(h=n.get(c),1===c.nodeType&&!i.get(c,"hasDataAttrs"))){for(r=u.length;r--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
u[r]&&(l=u[r].name,0===l.indexOf("data-")&&(l=t.camelCase(l.slice(5)),o(c,l,h[l])));i.set(c,"hasDataAttrs",!0)}return h}
// Sets multiple values
// Sets multiple values
return"object"==typeof s?this.each(function(){n.set(this,s)}):e(this,function(t){var e;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(c&&void 0===t){if(void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
e=n.get(c,s)))return e;if(void 0!==(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
e=o(c,s)))return e}else
// Set the data...
this.each(function(){
// We always store the camelCased key
n.set(this,s,t)})},null,a,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){n.remove(this,t)})}}),t}.apply(e,n))&&(t.exports=s)},/* 86 */
/***/
function(t,e,i){var n,s;n=[i(0),i(10)],void 0!==(s=function(t){"use strict";
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var e=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;t.Deferred.exceptionHook=function(t,i){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
window.console&&window.console.warn&&t&&e.test(t.name)&&window.console.warn("jQuery.Deferred exception: "+t.message,t.stack,i)}}.apply(e,n))&&(t.exports=s)},/* 87 */
/***/
function(t,e,i){var n,s;n=[i(0),i(5)],void 0!==(s=function(t,e){"use strict";t.fn.extend({bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,n){return this.on(e,t,i,n)},undelegate:function(t,e,i){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",i)}}),t.holdReady=function(e){e?t.readyWait++:t.ready(!0)},t.isArray=Array.isArray,t.parseJSON=JSON.parse,t.nodeName=e}.apply(e,n))&&(t.exports=s)},/* 88 */
/***/
function(t,e,i){var n,s;n=[i(0),i(7),i(13)],void 0!==(s=function(t,e){"use strict";
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
return t.each({Height:"height",Width:"width"},function(i,n){t.each({padding:"inner"+i,content:n,"":"outer"+i},function(s,o){
// Margin is only for outerHeight, outerWidth
t.fn[o]=function(a,r){var l=arguments.length&&(s||"boolean"!=typeof a),h=s||(!0===a||!0===r?"margin":"border");return e(this,function(e,n,s){var a;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return t.isWindow(e)?0===o.indexOf("outer")?e["inner"+i]:e.document.documentElement["client"+i]:9===e.nodeType?(a=e.documentElement,Math.max(e.body["scroll"+i],a["scroll"+i],e.body["offset"+i],a["offset"+i],a["client"+i])):void 0===s?t.css(e,n,h):t.style(e,n,s,h)},n,l?a:void 0,l)}})}),t}.apply(e,n))&&(t.exports=s)},/* 89 */
/***/
function(t,e,i){var n,s;n=[i(0),i(13)],void 0!==(s=function(t){"use strict";function e(t,i,n,s,o){return new e.prototype.init(t,i,n,s,o)}t.Tween=e,e.prototype={constructor:e,init:function(e,i,n,s,o,a){this.elem=e,this.prop=n,this.easing=o||t.easing._default,this.options=i,this.start=this.now=this.cur(),this.end=s,this.unit=a||(t.cssNumber[n]?"":"px")},cur:function(){var t=e.propHooks[this.prop];return t&&t.get?t.get(this):e.propHooks._default.get(this)},run:function(i){var n,s=e.propHooks[this.prop];return this.options.duration?this.pos=n=t.easing[this.easing](i,this.options.duration*i,0,1,this.options.duration):this.pos=n=i,this.now=(this.end-this.start)*n+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),s&&s.set?s.set(this):e.propHooks._default.set(this),this}},e.prototype.init.prototype=e.prototype,e.propHooks={_default:{get:function(e){var i;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(i=t.css(e.elem,e.prop,""),i&&"auto"!==i?i:0)},set:function(e){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
t.fx.step[e.prop]?t.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[t.cssProps[e.prop]]&&!t.cssHooks[e.prop]?e.elem[e.prop]=e.now:t.style(e.elem,e.prop,e.now+e.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
e.propHooks.scrollTop=e.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},t.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},t.fx=e.prototype.init,
// Back compat <1.8 extension point
t.fx.step={}}.apply(e,n))&&(t.exports=s)},/* 90 */
/***/
function(t,e,i){var n,s;n=[i(0),i(2),i(23)],void 0!==(s=function(t){"use strict";t.expr.pseudos.animated=function(e){return t.grep(t.timers,function(t){return e===t.elem}).length}}.apply(e,n))&&(t.exports=s)},/* 91 */
/***/
function(t,e,i){var n,s;n=[i(0),i(11)],void 0!==(s=function(t){"use strict";
// Attach a bunch of functions for handling common AJAX events
t.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,i){t.fn[i]=function(t){return this.on(i,t)}})}.apply(e,n))&&(t.exports=s)},/* 92 */
/***/
function(t,e,i){var n,s;n=[i(0),i(11),i(24)],void 0!==(s=function(t){"use strict";t.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,i){
// Handle event binding
t.fn[i]=function(t,e){return arguments.length>0?this.on(i,null,t,e):this.trigger(i)}}),t.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}})}.apply(e,n))&&(t.exports=s)},/* 93 */
/***/
function(t,e,i){var n,s;n=[i(0),i(4),i(94),i(11),i(24)],void 0!==(s=function(t,e,i){"use strict";
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
return i.focusin||t.each({focus:"focusin",blur:"focusout"},function(i,n){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var s=function(e){t.event.simulate(n,e.target,t.event.fix(e))};t.event.special[n]={setup:function(){var t=this.ownerDocument||this,o=e.access(t,n);o||t.addEventListener(i,s,!0),e.access(t,n,(o||0)+1)},teardown:function(){var t=this.ownerDocument||this,o=e.access(t,n)-1;o?e.access(t,n,o):(t.removeEventListener(i,s,!0),e.remove(t,n))}}}),t}.apply(e,n))&&(t.exports=s)},/* 94 */
/***/
function(t,e,i){var n,s;n=[i(8)],void 0!==(s=function(t){"use strict";return t.focusin="onfocusin"in window,t}.apply(e,n))&&(t.exports=s)},/* 95 */
/***/
function(t,e,i){var n,s,n,s;n=[i(0)],void 0!==(s=function(i){"use strict";n=[],void 0!==(s=function(){return i}.apply(e,n))&&(t.exports=s)}.apply(e,n))&&(t.exports=s)},/* 96 */
/***/
function(t,e,i){var n,s;n=[i(0)],void 0!==(s=function(t,e){"use strict";var
// Map over jQuery in case of overwrite
i=window.jQuery,
// Map over the $ in case of overwrite
n=window.$;t.noConflict=function(e){return window.$===t&&(window.$=n),e&&window.jQuery===t&&(window.jQuery=i),t},
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
e||(window.jQuery=window.$=t)}.apply(e,n))&&(t.exports=s)},/* 97 */
/***/
function(t,e,i){var n,s;n=[i(9)],void 0!==(s=function(t){"use strict";return t._evalUrl=function(e){return t.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},t._evalUrl}.apply(e,n))&&(t.exports=s)},/* 98 */
/***/
function(t,e,i){var n,s;n=[i(1),i(8)],void 0!==(s=function(t,e){"use strict";return function(){var i=t.createDocumentFragment(),n=i.appendChild(t.createElement("div")),s=t.createElement("input");
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
s.setAttribute("type","radio"),s.setAttribute("checked","checked"),s.setAttribute("name","t"),n.appendChild(s),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
e.checkClone=n.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
n.innerHTML="<textarea>x</textarea>",e.noCloneChecked=!!n.cloneNode(!0).lastChild.defaultValue}(),e}.apply(e,n))&&(t.exports=s)},/* 99 */
/***/
function(t,e,i){var n,s;n=[i(0),i(7),i(1),i(27),i(21),i(42),i(40),i(20),i(5),i(3),i(13),i(2)],void 0!==(s=function(t,e,i,n,s,o,a,r,l){"use strict";
// Create scrollLeft and scrollTop methods
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
return t.offset={setOffset:function(e,i,n){var s,o,a,r,l,h,c,u=t.css(e,"position"),d=t(e),p={};
// Set position first, in-case top/left are set even on static elem
"static"===u&&(e.style.position="relative"),l=d.offset(),a=t.css(e,"top"),h=t.css(e,"left"),c=("absolute"===u||"fixed"===u)&&(a+h).indexOf("auto")>-1,
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
c?(s=d.position(),r=s.top,o=s.left):(r=parseFloat(a)||0,o=parseFloat(h)||0),t.isFunction(i)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
i=i.call(e,n,t.extend({},l))),null!=i.top&&(p.top=i.top-l.top+r),null!=i.left&&(p.left=i.left-l.left+o),"using"in i?i.using.call(e,p):d.css(p)}},t.fn.extend({offset:function(e){
// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(i){t.offset.setOffset(this,e,i)});var i,n,s,o,a=this[0];if(a)
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
return a.getClientRects().length?(s=a.getBoundingClientRect(),i=a.ownerDocument,n=i.documentElement,o=i.defaultView,{top:s.top+o.pageYOffset-n.clientTop,left:s.left+o.pageXOffset-n.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var e,i,n=this[0],s={top:0,left:0};
// Subtract parent offsets and element margins
// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
// Assume getBoundingClientRect is there when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===t.css(n,"position")?i=n.getBoundingClientRect():(e=this.offsetParent(),i=this.offset(),l(e[0],"html")||(s=e.offset()),s={top:s.top+t.css(e[0],"borderTopWidth",!0),left:s.left+t.css(e[0],"borderLeftWidth",!0)}),{top:i.top-s.top-t.css(n,"marginTop",!0),left:i.left-s.left-t.css(n,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===t.css(e,"position");)e=e.offsetParent;return e||n})}}),t.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(i,n){var s="pageYOffset"===n;t.fn[i]=function(o){return e(this,function(e,i,o){
// Coalesce documents and windows
var a;if(t.isWindow(e)?a=e:9===e.nodeType&&(a=e.defaultView),void 0===o)return a?a[n]:e[i];a?a.scrollTo(s?a.pageXOffset:o,s?o:a.pageYOffset):e[i]=o},i,o,arguments.length)}}),t.each(["top","left"],function(e,i){t.cssHooks[i]=a(r.pixelPosition,function(e,n){if(n)
// If curCSS returns percentage, fallback to offset
return n=o(e,i),s.test(n)?t(e).position()[i]+"px":n})}),t}.apply(e,n))&&(t.exports=s)},/* 100 */
/***/
function(t,e,i){var n,s;n=[i(0),i(25),i(23)],void 0!==(s=function(t){"use strict";
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
return t.fn.delay=function(e,i){return e=t.fx?t.fx.speeds[e]||e:e,i=i||"fx",this.queue(i,function(t,i){var n=window.setTimeout(t,e);i.stop=function(){window.clearTimeout(n)}})},t.fn.delay}.apply(e,n))&&(t.exports=s)},/* 101 */
/***/
function(t,e,i){var n,s;n=[i(0),i(69)],void 0!==(s=function(t,e){"use strict";t.find=e,t.expr=e.selectors,
// Deprecated
t.expr[":"]=t.expr.pseudos,t.uniqueSort=t.unique=e.uniqueSort,t.text=e.getText,t.isXMLDoc=e.isXML,t.contains=e.contains,t.escapeSelector=e.escape}.apply(e,n))&&(t.exports=s)},/* 102 */
/***/
function(t,e,i){var n,s;n=[i(0)],void 0!==(s=function(t){"use strict";return function(e,i,n){for(var s=[],o=void 0!==n;(e=e[i])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&t(e).is(n))break;s.push(e)}return s}}.apply(e,n))&&(t.exports=s)},/* 103 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";return function(t,e){for(var i=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t);return i}}.call(e,i,e,t))&&(t.exports=n)},/* 104 */
/***/
function(t,e,i){var n,s;n=[i(61)],void 0!==(s=function(t){"use strict";return t.call(Object)}.apply(e,n))&&(t.exports=s)},/* 105 */
/***/
function(t,e,i){var n;void 0!==(n=function(){"use strict";return Object.getPrototypeOf}.call(e,i,e,t))&&(t.exports=n)},/* 106 */
/***/
function(t,e,i){var n,s;n=[i(26)],void 0!==(s=function(t){"use strict";return t.toString}.apply(e,n))&&(t.exports=s)},/* 107 */
/***/
function(t,e,i){var n,s;n=[i(0),i(3),i(16),// clone
i(12)],void 0!==(s=function(t){"use strict";return t.fn.extend({wrapAll:function(e){var i;
// The elements to wrap the target around
return this[0]&&(t.isFunction(e)&&(e=e.call(this[0])),i=t(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&i.insertBefore(this[0]),i.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(e){return t.isFunction(e)?this.each(function(i){t(this).wrapInner(e.call(this,i))}):this.each(function(){var i=t(this),n=i.contents();n.length?n.wrapAll(e):i.append(e)})},wrap:function(e){var i=t.isFunction(e);return this.each(function(n){t(this).wrapAll(i?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){t(this).replaceWith(this.childNodes)}),this}}),t}.apply(e,n))&&(t.exports=s)},/* 108 */
/***/
function(t,e,i){t.exports=i(63)}]);