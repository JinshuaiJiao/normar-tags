(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["normal-tags"] = factory(require("vue"));
	else
		root["normal-tags"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__9274__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5877:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 9274:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9274__;

/***/ }),

/***/ 8574:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(4241);
var tryToString = __webpack_require__(8171);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 9732:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var has = (__webpack_require__(8262).has);

// Perform ? RequireInternalSlot(M, [[SetData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ }),

/***/ 5131:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isPrototypeOf = __webpack_require__(6733);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 979:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(2054);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 8941:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIndexedObject = __webpack_require__(4377);
var toAbsoluteIndex = __webpack_require__(6718);
var lengthOfArrayLike = __webpack_require__(8930);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 4739:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3968);
var isArray = __webpack_require__(6636);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 4243:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var anObject = __webpack_require__(979);
var iteratorClose = __webpack_require__(2959);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ 1788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(7812);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 7591:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var TO_STRING_TAG_SUPPORT = __webpack_require__(5704);
var isCallable = __webpack_require__(4241);
var classofRaw = __webpack_require__(1788);
var wellKnownSymbol = __webpack_require__(303);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 696:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(4525);
var ownKeys = __webpack_require__(9275);
var getOwnPropertyDescriptorModule = __webpack_require__(5999);
var definePropertyModule = __webpack_require__(4869);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 8647:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(6915);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 1677:
/***/ (function(module) {


// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ 6975:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3968);
var definePropertyModule = __webpack_require__(4869);
var createPropertyDescriptor = __webpack_require__(9552);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9552:
/***/ (function(module) {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 4236:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3968);
var definePropertyModule = __webpack_require__(4869);
var createPropertyDescriptor = __webpack_require__(9552);

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ 8998:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var makeBuiltIn = __webpack_require__(9999);
var defineProperty = __webpack_require__(4869);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ 420:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(4241);
var definePropertyModule = __webpack_require__(4869);
var makeBuiltIn = __webpack_require__(9999);
var defineGlobalProperty = __webpack_require__(1573);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 9707:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var defineBuiltIn = __webpack_require__(420);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ 1573:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(452);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),

/***/ 3968:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(6915);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 6403:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(452);
var isObject = __webpack_require__(2054);

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 7257:
/***/ (function(module) {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 7651:
/***/ (function(module) {


// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 4843:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(452);

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ 6939:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(452);
var userAgent = __webpack_require__(4843);

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 6922:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(452);
var getOwnPropertyDescriptor = (__webpack_require__(5999).f);
var createNonEnumerableProperty = __webpack_require__(6975);
var defineBuiltIn = __webpack_require__(420);
var defineGlobalProperty = __webpack_require__(1573);
var copyConstructorProperties = __webpack_require__(696);
var isForced = __webpack_require__(6824);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 6915:
/***/ (function(module) {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(304);
var aCallable = __webpack_require__(8574);
var NATIVE_BIND = __webpack_require__(5412);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 5412:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(6915);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 2729:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(5412);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 3298:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3968);
var hasOwn = __webpack_require__(4525);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 278:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(7812);
var aCallable = __webpack_require__(8574);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 304:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classofRaw = __webpack_require__(1788);
var uncurryThis = __webpack_require__(7812);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ 7812:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(5412);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 2235:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(452);
var isCallable = __webpack_require__(4241);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ 1739:
/***/ (function(module) {


// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ 2615:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(7591);
var getMethod = __webpack_require__(2818);
var isNullOrUndefined = __webpack_require__(369);
var Iterators = __webpack_require__(6817);
var wellKnownSymbol = __webpack_require__(303);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 7917:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(2729);
var aCallable = __webpack_require__(8574);
var anObject = __webpack_require__(979);
var tryToString = __webpack_require__(8171);
var getIteratorMethod = __webpack_require__(2615);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 2818:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(8574);
var isNullOrUndefined = __webpack_require__(369);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 8073:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(8574);
var anObject = __webpack_require__(979);
var call = __webpack_require__(2729);
var toIntegerOrInfinity = __webpack_require__(7407);
var getIteratorDirect = __webpack_require__(1739);

var INVALID_SIZE = 'Invalid size';
var $RangeError = RangeError;
var $TypeError = TypeError;
var max = Math.max;

var SetRecord = function (set, intSize) {
  this.set = set;
  this.size = max(intSize, 0);
  this.has = aCallable(set.has);
  this.keys = aCallable(set.keys);
};

SetRecord.prototype = {
  getIterator: function () {
    return getIteratorDirect(anObject(call(this.keys, this.set)));
  },
  includes: function (it) {
    return call(this.has, this.set, it);
  }
};

// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
module.exports = function (obj) {
  anObject(obj);
  var numSize = +obj.size;
  // NOTE: If size is undefined, then numSize will be NaN
  // eslint-disable-next-line no-self-compare -- NaN check
  if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
  var intSize = toIntegerOrInfinity(numSize);
  if (intSize < 0) throw new $RangeError(INVALID_SIZE);
  return new SetRecord(obj, intSize);
};


/***/ }),

/***/ 452:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 4525:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(7812);
var toObject = __webpack_require__(9353);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 9913:
/***/ (function(module) {


module.exports = {};


/***/ }),

/***/ 4625:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(2235);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 1329:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3968);
var fails = __webpack_require__(6915);
var createElement = __webpack_require__(6403);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 7267:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(7812);
var fails = __webpack_require__(6915);
var classof = __webpack_require__(1788);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 9822:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(7812);
var isCallable = __webpack_require__(4241);
var store = __webpack_require__(2585);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 161:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_WEAK_MAP = __webpack_require__(3554);
var globalThis = __webpack_require__(452);
var isObject = __webpack_require__(2054);
var createNonEnumerableProperty = __webpack_require__(6975);
var hasOwn = __webpack_require__(4525);
var shared = __webpack_require__(2585);
var sharedKey = __webpack_require__(5395);
var hiddenKeys = __webpack_require__(9913);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 6013:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(303);
var Iterators = __webpack_require__(6817);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 6636:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(1788);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 4241:
/***/ (function(module) {


// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 6824:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(6915);
var isCallable = __webpack_require__(4241);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 369:
/***/ (function(module) {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 2054:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(4241);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 279:
/***/ (function(module) {


module.exports = false;


/***/ }),

/***/ 6809:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(2235);
var isCallable = __webpack_require__(4241);
var isPrototypeOf = __webpack_require__(6733);
var USE_SYMBOL_AS_UID = __webpack_require__(7252);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 9399:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(2729);

module.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};


/***/ }),

/***/ 1152:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var bind = __webpack_require__(908);
var call = __webpack_require__(2729);
var anObject = __webpack_require__(979);
var tryToString = __webpack_require__(8171);
var isArrayIteratorMethod = __webpack_require__(6013);
var lengthOfArrayLike = __webpack_require__(8930);
var isPrototypeOf = __webpack_require__(6733);
var getIterator = __webpack_require__(7917);
var getIteratorMethod = __webpack_require__(2615);
var iteratorClose = __webpack_require__(2959);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 2959:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(2729);
var anObject = __webpack_require__(979);
var getMethod = __webpack_require__(2818);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 4154:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(2729);
var create = __webpack_require__(5684);
var createNonEnumerableProperty = __webpack_require__(6975);
var defineBuiltIns = __webpack_require__(9707);
var wellKnownSymbol = __webpack_require__(303);
var InternalStateModule = __webpack_require__(161);
var getMethod = __webpack_require__(2818);
var IteratorPrototype = (__webpack_require__(8861).IteratorPrototype);
var createIterResultObject = __webpack_require__(1677);
var iteratorClose = __webpack_require__(2959);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var setInternalState = InternalStateModule.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns(create(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      try {
        var result = state.done ? undefined : state.nextHandler();
        return createIterResultObject(result, state.done);
      } catch (error) {
        state.done = true;
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod(iterator, 'return');
        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
      }
      if (state.inner) try {
        iteratorClose(state.inner.iterator, 'normal');
      } catch (error) {
        return iteratorClose(iterator, 'throw', error);
      }
      if (iterator) iteratorClose(iterator, 'normal');
      return createIterResultObject(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};


/***/ }),

/***/ 3173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(2729);
var aCallable = __webpack_require__(8574);
var anObject = __webpack_require__(979);
var getIteratorDirect = __webpack_require__(1739);
var createIteratorProxy = __webpack_require__(4154);
var callWithSafeIterationClosing = __webpack_require__(4243);

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var result = anObject(call(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
module.exports = function map(mapper) {
  anObject(this);
  aCallable(mapper);
  return new IteratorProxy(getIteratorDirect(this), {
    mapper: mapper
  });
};


/***/ }),

/***/ 8861:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(6915);
var isCallable = __webpack_require__(4241);
var isObject = __webpack_require__(2054);
var create = __webpack_require__(5684);
var getPrototypeOf = __webpack_require__(5591);
var defineBuiltIn = __webpack_require__(420);
var wellKnownSymbol = __webpack_require__(303);
var IS_PURE = __webpack_require__(279);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 6817:
/***/ (function(module) {


module.exports = {};


/***/ }),

/***/ 8930:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toLength = __webpack_require__(6450);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 9999:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(7812);
var fails = __webpack_require__(6915);
var isCallable = __webpack_require__(4241);
var hasOwn = __webpack_require__(4525);
var DESCRIPTORS = __webpack_require__(3968);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(3298).CONFIGURABLE);
var inspectSource = __webpack_require__(9822);
var InternalStateModule = __webpack_require__(161);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 7361:
/***/ (function(module) {


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 5684:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(979);
var definePropertiesModule = __webpack_require__(861);
var enumBugKeys = __webpack_require__(7651);
var hiddenKeys = __webpack_require__(9913);
var html = __webpack_require__(4625);
var documentCreateElement = __webpack_require__(6403);
var sharedKey = __webpack_require__(5395);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 861:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3968);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(9538);
var definePropertyModule = __webpack_require__(4869);
var anObject = __webpack_require__(979);
var toIndexedObject = __webpack_require__(4377);
var objectKeys = __webpack_require__(7580);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 4869:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3968);
var IE8_DOM_DEFINE = __webpack_require__(1329);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(9538);
var anObject = __webpack_require__(979);
var toPropertyKey = __webpack_require__(1037);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 5999:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3968);
var call = __webpack_require__(2729);
var propertyIsEnumerableModule = __webpack_require__(729);
var createPropertyDescriptor = __webpack_require__(9552);
var toIndexedObject = __webpack_require__(4377);
var toPropertyKey = __webpack_require__(1037);
var hasOwn = __webpack_require__(4525);
var IE8_DOM_DEFINE = __webpack_require__(1329);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 2828:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(5032);
var enumBugKeys = __webpack_require__(7651);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 9889:
/***/ (function(__unused_webpack_module, exports) {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 5591:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(4525);
var isCallable = __webpack_require__(4241);
var toObject = __webpack_require__(9353);
var sharedKey = __webpack_require__(5395);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(8647);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 6733:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(7812);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 5032:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(7812);
var hasOwn = __webpack_require__(4525);
var toIndexedObject = __webpack_require__(4377);
var indexOf = (__webpack_require__(8941).indexOf);
var hiddenKeys = __webpack_require__(9913);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 7580:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(5032);
var enumBugKeys = __webpack_require__(7651);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 729:
/***/ (function(__unused_webpack_module, exports) {


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 2650:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(2729);
var isCallable = __webpack_require__(4241);
var isObject = __webpack_require__(2054);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 9275:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(2235);
var uncurryThis = __webpack_require__(7812);
var getOwnPropertyNamesModule = __webpack_require__(2828);
var getOwnPropertySymbolsModule = __webpack_require__(9889);
var anObject = __webpack_require__(979);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 2066:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isNullOrUndefined = __webpack_require__(369);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 786:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var SetHelpers = __webpack_require__(8262);
var iterate = __webpack_require__(2449);

var Set = SetHelpers.Set;
var add = SetHelpers.add;

module.exports = function (set) {
  var result = new Set();
  iterate(set, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),

/***/ 1359:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(9732);
var SetHelpers = __webpack_require__(8262);
var clone = __webpack_require__(786);
var size = __webpack_require__(7758);
var getSetRecord = __webpack_require__(8073);
var iterateSet = __webpack_require__(2449);
var iterateSimple = __webpack_require__(9399);

var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function difference(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = clone(O);
  if (size(O) <= otherRec.size) iterateSet(O, function (e) {
    if (otherRec.includes(e)) remove(result, e);
  });
  else iterateSimple(otherRec.getIterator(), function (e) {
    if (has(O, e)) remove(result, e);
  });
  return result;
};


/***/ }),

/***/ 8262:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(7812);

// eslint-disable-next-line es/no-set -- safe
var SetPrototype = Set.prototype;

module.exports = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis(SetPrototype.add),
  has: uncurryThis(SetPrototype.has),
  remove: uncurryThis(SetPrototype['delete']),
  proto: SetPrototype
};


/***/ }),

/***/ 8666:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(9732);
var SetHelpers = __webpack_require__(8262);
var size = __webpack_require__(7758);
var getSetRecord = __webpack_require__(8073);
var iterateSet = __webpack_require__(2449);
var iterateSimple = __webpack_require__(9399);

var Set = SetHelpers.Set;
var add = SetHelpers.add;
var has = SetHelpers.has;

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
module.exports = function intersection(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = new Set();

  if (size(O) > otherRec.size) {
    iterateSimple(otherRec.getIterator(), function (e) {
      if (has(O, e)) add(result, e);
    });
  } else {
    iterateSet(O, function (e) {
      if (otherRec.includes(e)) add(result, e);
    });
  }

  return result;
};


/***/ }),

/***/ 5373:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(9732);
var has = (__webpack_require__(8262).has);
var size = __webpack_require__(7758);
var getSetRecord = __webpack_require__(8073);
var iterateSet = __webpack_require__(2449);
var iterateSimple = __webpack_require__(9399);
var iteratorClose = __webpack_require__(2959);

// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
module.exports = function isDisjointFrom(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) <= otherRec.size) return iterateSet(O, function (e) {
    if (otherRec.includes(e)) return false;
  }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),

/***/ 2394:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(9732);
var size = __webpack_require__(7758);
var iterate = __webpack_require__(2449);
var getSetRecord = __webpack_require__(8073);

// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
module.exports = function isSubsetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) > otherRec.size) return false;
  return iterate(O, function (e) {
    if (!otherRec.includes(e)) return false;
  }, true) !== false;
};


/***/ }),

/***/ 3011:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(9732);
var has = (__webpack_require__(8262).has);
var size = __webpack_require__(7758);
var getSetRecord = __webpack_require__(8073);
var iterateSimple = __webpack_require__(9399);
var iteratorClose = __webpack_require__(2959);

// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
module.exports = function isSupersetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) < otherRec.size) return false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (!has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),

/***/ 2449:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(7812);
var iterateSimple = __webpack_require__(9399);
var SetHelpers = __webpack_require__(8262);

var Set = SetHelpers.Set;
var SetPrototype = SetHelpers.proto;
var forEach = uncurryThis(SetPrototype.forEach);
var keys = uncurryThis(SetPrototype.keys);
var next = keys(new Set()).next;

module.exports = function (set, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);
};


/***/ }),

/***/ 4504:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(2235);

var createSetLike = function (size) {
  return {
    size: size,
    has: function () {
      return false;
    },
    keys: function () {
      return {
        next: function () {
          return { done: true };
        }
      };
    }
  };
};

module.exports = function (name) {
  var Set = getBuiltIn('Set');
  try {
    new Set()[name](createSetLike(0));
    try {
      // late spec change, early WebKit ~ Safari 17.0 beta implementation does not pass it
      // https://github.com/tc39/proposal-set-methods/pull/88
      new Set()[name](createSetLike(-1));
      return false;
    } catch (error2) {
      return true;
    }
  } catch (error) {
    return false;
  }
};


/***/ }),

/***/ 7758:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThisAccessor = __webpack_require__(278);
var SetHelpers = __webpack_require__(8262);

module.exports = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {
  return set.size;
};


/***/ }),

/***/ 5302:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(9732);
var SetHelpers = __webpack_require__(8262);
var clone = __webpack_require__(786);
var getSetRecord = __webpack_require__(8073);
var iterateSimple = __webpack_require__(9399);

var add = SetHelpers.add;
var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function symmetricDifference(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (e) {
    if (has(O, e)) remove(result, e);
    else add(result, e);
  });
  return result;
};


/***/ }),

/***/ 4696:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(9732);
var add = (__webpack_require__(8262).add);
var clone = __webpack_require__(786);
var getSetRecord = __webpack_require__(8073);
var iterateSimple = __webpack_require__(9399);

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
module.exports = function union(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),

/***/ 5395:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var shared = __webpack_require__(1997);
var uid = __webpack_require__(3796);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 2585:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var IS_PURE = __webpack_require__(279);
var globalThis = __webpack_require__(452);
var defineGlobalProperty = __webpack_require__(1573);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.39.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 1997:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var store = __webpack_require__(2585);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ 8827:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(6939);
var fails = __webpack_require__(6915);
var globalThis = __webpack_require__(452);

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 6718:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(7407);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 4377:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(7267);
var requireObjectCoercible = __webpack_require__(2066);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 7407:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var trunc = __webpack_require__(7361);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 6450:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(7407);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 9353:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var requireObjectCoercible = __webpack_require__(2066);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 4877:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(2729);
var isObject = __webpack_require__(2054);
var isSymbol = __webpack_require__(6809);
var getMethod = __webpack_require__(2818);
var ordinaryToPrimitive = __webpack_require__(2650);
var wellKnownSymbol = __webpack_require__(303);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 1037:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(4877);
var isSymbol = __webpack_require__(6809);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 5704:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(303);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 4211:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(7591);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 8171:
/***/ (function(module) {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 3796:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(7812);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 7252:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(8827);

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 9538:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3968);
var fails = __webpack_require__(6915);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 2256:
/***/ (function(module) {


var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ 3554:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(452);
var isCallable = __webpack_require__(4241);

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 303:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(452);
var shared = __webpack_require__(1997);
var hasOwn = __webpack_require__(4525);
var uid = __webpack_require__(3796);
var NATIVE_SYMBOL = __webpack_require__(8827);
var USE_SYMBOL_AS_UID = __webpack_require__(7252);

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 6206:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6922);
var toObject = __webpack_require__(9353);
var lengthOfArrayLike = __webpack_require__(8930);
var setArrayLength = __webpack_require__(4739);
var doesNotExceedSafeInteger = __webpack_require__(7257);
var fails = __webpack_require__(6915);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ 1347:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6922);
var globalThis = __webpack_require__(452);
var anInstance = __webpack_require__(5131);
var anObject = __webpack_require__(979);
var isCallable = __webpack_require__(4241);
var getPrototypeOf = __webpack_require__(5591);
var defineBuiltInAccessor = __webpack_require__(8998);
var createProperty = __webpack_require__(4236);
var fails = __webpack_require__(6915);
var hasOwn = __webpack_require__(4525);
var wellKnownSymbol = __webpack_require__(303);
var IteratorPrototype = (__webpack_require__(8861).IteratorPrototype);
var DESCRIPTORS = __webpack_require__(3968);
var IS_PURE = __webpack_require__(279);

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});


/***/ }),

/***/ 4085:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6922);
var call = __webpack_require__(2729);
var aCallable = __webpack_require__(8574);
var anObject = __webpack_require__(979);
var getIteratorDirect = __webpack_require__(1739);
var createIteratorProxy = __webpack_require__(4154);
var callWithSafeIterationClosing = __webpack_require__(4243);
var IS_PURE = __webpack_require__(279);

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  filter: function filter(predicate) {
    anObject(this);
    aCallable(predicate);
    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});


/***/ }),

/***/ 4680:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6922);
var iterate = __webpack_require__(1152);
var aCallable = __webpack_require__(8574);
var anObject = __webpack_require__(979);
var getIteratorDirect = __webpack_require__(1739);

// `Iterator.prototype.find` method
// https://tc39.es/ecma262/#sec-iterator.prototype.find
$({ target: 'Iterator', proto: true, real: true }, {
  find: function find(predicate) {
    anObject(this);
    aCallable(predicate);
    var record = getIteratorDirect(this);
    var counter = 0;
    return iterate(record, function (value, stop) {
      if (predicate(value, counter++)) return stop(value);
    }, { IS_RECORD: true, INTERRUPTED: true }).result;
  }
});


/***/ }),

/***/ 7008:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6922);
var iterate = __webpack_require__(1152);
var aCallable = __webpack_require__(8574);
var anObject = __webpack_require__(979);
var getIteratorDirect = __webpack_require__(1739);

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$({ target: 'Iterator', proto: true, real: true }, {
  forEach: function forEach(fn) {
    anObject(this);
    aCallable(fn);
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});


/***/ }),

/***/ 3441:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6922);
var map = __webpack_require__(3173);
var IS_PURE = __webpack_require__(279);

// `Iterator.prototype.map` method
// https://tc39.es/ecma262/#sec-iterator.prototype.map
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  map: map
});


/***/ }),

/***/ 1454:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6922);
var difference = __webpack_require__(1359);
var setMethodAcceptSetLike = __webpack_require__(4504);

// `Set.prototype.difference` method
// https://tc39.es/ecma262/#sec-set.prototype.difference
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('difference') }, {
  difference: difference
});


/***/ }),

/***/ 5304:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6922);
var fails = __webpack_require__(6915);
var intersection = __webpack_require__(8666);
var setMethodAcceptSetLike = __webpack_require__(4504);

var INCORRECT = !setMethodAcceptSetLike('intersection') || fails(function () {
  // eslint-disable-next-line es/no-array-from, es/no-set -- testing
  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
});

// `Set.prototype.intersection` method
// https://tc39.es/ecma262/#sec-set.prototype.intersection
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  intersection: intersection
});


/***/ }),

/***/ 4273:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6922);
var isDisjointFrom = __webpack_require__(5373);
var setMethodAcceptSetLike = __webpack_require__(4504);

// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isDisjointFrom') }, {
  isDisjointFrom: isDisjointFrom
});


/***/ }),

/***/ 5784:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6922);
var isSubsetOf = __webpack_require__(2394);
var setMethodAcceptSetLike = __webpack_require__(4504);

// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSubsetOf') }, {
  isSubsetOf: isSubsetOf
});


/***/ }),

/***/ 1447:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6922);
var isSupersetOf = __webpack_require__(3011);
var setMethodAcceptSetLike = __webpack_require__(4504);

// `Set.prototype.isSupersetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSupersetOf') }, {
  isSupersetOf: isSupersetOf
});


/***/ }),

/***/ 8860:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6922);
var symmetricDifference = __webpack_require__(5302);
var setMethodAcceptSetLike = __webpack_require__(4504);

// `Set.prototype.symmetricDifference` method
// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('symmetricDifference') }, {
  symmetricDifference: symmetricDifference
});


/***/ }),

/***/ 4774:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6922);
var union = __webpack_require__(4696);
var setMethodAcceptSetLike = __webpack_require__(4504);

// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('union') }, {
  union: union
});


/***/ }),

/***/ 3740:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(1347);


/***/ }),

/***/ 1292:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(4085);


/***/ }),

/***/ 7869:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(4680);


/***/ }),

/***/ 2033:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(7008);


/***/ }),

/***/ 5026:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(3441);


/***/ }),

/***/ 6527:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var defineBuiltIn = __webpack_require__(420);
var uncurryThis = __webpack_require__(7812);
var toString = __webpack_require__(4211);
var validateArgumentsLength = __webpack_require__(2256);

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var append = uncurryThis(URLSearchParamsPrototype.append);
var $delete = uncurryThis(URLSearchParamsPrototype['delete']);
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
var push = uncurryThis([].push);
var params = new $URLSearchParams('a=1&a=2&b=3');

params['delete']('a', 1);
// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
params['delete']('b', undefined);

if (params + '' !== 'a=2') {
  defineBuiltIn(URLSearchParamsPrototype, 'delete', function (name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $delete(this, name);
    var entries = [];
    forEach(this, function (v, k) { // also validates `this`
      push(entries, { key: k, value: v });
    });
    validateArgumentsLength(length, 1);
    var key = toString(name);
    var value = toString($value);
    var index = 0;
    var dindex = 0;
    var found = false;
    var entriesLength = entries.length;
    var entry;
    while (index < entriesLength) {
      entry = entries[index++];
      if (found || entry.key === key) {
        found = true;
        $delete(this, entry.key);
      } else dindex++;
    }
    while (dindex < entriesLength) {
      entry = entries[dindex++];
      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
    }
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ 9306:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var defineBuiltIn = __webpack_require__(420);
var uncurryThis = __webpack_require__(7812);
var toString = __webpack_require__(4211);
var validateArgumentsLength = __webpack_require__(2256);

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
var $has = uncurryThis(URLSearchParamsPrototype.has);
var params = new $URLSearchParams('a=1');

// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
if (params.has('a', 2) || !params.has('a', undefined)) {
  defineBuiltIn(URLSearchParamsPrototype, 'has', function has(name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $has(this, name);
    var values = getAll(this, name); // also validates `this`
    validateArgumentsLength(length, 1);
    var value = toString($value);
    var index = 0;
    while (index < values.length) {
      if (values[index++] === value) return true;
    } return false;
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ 8589:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3968);
var uncurryThis = __webpack_require__(7812);
var defineBuiltInAccessor = __webpack_require__(8998);

var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
  defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
    get: function size() {
      var count = 0;
      forEach(this, function () { count++; });
      return count;
    },
    configurable: true,
    enumerable: true
  });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// ./node_modules/.pnpm/@vue+cli-service@5.0.8_@vue+compiler-sfc@3.5.12_lodash@4.17.21_vue@3.5.12_webpack-sources@3.2.3/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__(3740);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/esnext.iterator.for-each.js
var esnext_iterator_for_each = __webpack_require__(2033);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(9274);
;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.96.1/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.0_webpack@5.96.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.12_vue@3.5.12_webpack@5.96.1/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.12_vue@3.5.12_webpack@5.96.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/normal-tags/index.vue?vue&type=template&id=50ef5d6c&scoped=true

const _hoisted_1 = {
  class: "custom-tag"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("svg-icon");
  const _component_el_tooltip = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-tooltip");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(['label', $props.type]),
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      minWidth: $props.minWidth + 'px'
    })
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.label) + " ", 1), $props.content ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_el_tooltip, {
    key: 0,
    content: $props.content,
    effect: $props.effect,
    placement: $props.placement
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_svg_icon, {
      class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)($props.type),
      icon: "material-symbols:error-outline-rounded"
    }, null, 8, ["class"])]),
    _: 1
  }, 8, ["content", "effect", "placement"])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 6)]);
}
;// ./src/package/normal-tags/index.vue?vue&type=template&id=50ef5d6c&scoped=true

;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.96.1/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.0_webpack@5.96.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.12_vue@3.5.12_webpack@5.96.1/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.12_vue@3.5.12_webpack@5.96.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/normal-tags/icon.vue?vue&type=template&id=0fb8fb28&scoped=true

const iconvue_type_template_id_0fb8fb28_scoped_true_hoisted_1 = {
  class: "svg-icon"
};
function iconvue_type_template_id_0fb8fb28_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconifyIcon = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("IconifyIcon");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", iconvue_type_template_id_0fb8fb28_scoped_true_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_IconifyIcon, {
    icon: $props.icon
  }, null, 8, ["icon"])]);
}
;// ./src/package/normal-tags/icon.vue?vue&type=template&id=0fb8fb28&scoped=true

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(6206);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.set.difference.v2.js
var es_set_difference_v2 = __webpack_require__(1454);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.set.intersection.v2.js
var es_set_intersection_v2 = __webpack_require__(5304);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
var es_set_is_disjoint_from_v2 = __webpack_require__(4273);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.set.is-subset-of.v2.js
var es_set_is_subset_of_v2 = __webpack_require__(5784);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.set.is-superset-of.v2.js
var es_set_is_superset_of_v2 = __webpack_require__(1447);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.set.symmetric-difference.v2.js
var es_set_symmetric_difference_v2 = __webpack_require__(8860);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.set.union.v2.js
var es_set_union_v2 = __webpack_require__(4774);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/esnext.iterator.filter.js
var esnext_iterator_filter = __webpack_require__(1292);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/esnext.iterator.find.js
var esnext_iterator_find = __webpack_require__(7869);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/esnext.iterator.map.js
var esnext_iterator_map = __webpack_require__(5026);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/web.url-search-params.delete.js
var web_url_search_params_delete = __webpack_require__(6527);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/web.url-search-params.has.js
var web_url_search_params_has = __webpack_require__(9306);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/web.url-search-params.size.js
var web_url_search_params_size = __webpack_require__(8589);
;// ./node_modules/.pnpm/@iconify+vue@4.2.0_vue@3.5.12/node_modules/@iconify/vue/dist/iconify.mjs

















const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      // Allow provider without '@': "provider:prefix:name"
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
const validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!(
  // Check prefix: cannot be empty, unless allowSimpleName is enabled
  // Check name: cannot be empty
  (allowSimpleName && icon.prefix === "" || !!icon.prefix) && !!icon.name);
};
const defaultIconDimensions = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
});
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */Object.create(null);
  const resolved = /* @__PURE__ */Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  Object.keys(icons).concat(Object.keys(aliases)).forEach(resolve);
  return resolved;
}
function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(icons[name2] || aliases[name2], currentProps);
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach(name => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}
const optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (
    // Name cannot be empty
    !name ||
    // Must have body
    typeof icon.body !== "string" ||
    // Check other props
    !checkOptionalProps(icon, defaultExtendedIconProps)) {
      return null;
    }
  }
  const aliases = data.aliases || /* @__PURE__ */Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (
    // Name cannot be empty
    !name ||
    // Parent must be set and point to existing icon
    typeof parent !== "string" || !icons[parent] && !aliases[parent] ||
    // Check other props
    !checkOptionalProps(icon, defaultExtendedIconProps)) {
      return null;
    }
  }
  return data;
}
const dataStorage = /* @__PURE__ */Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */Object.create(null),
    missing: /* @__PURE__ */new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage.icons[name] = icon;
    } else {
      storage.missing.add(name);
    }
  });
}
function addIconToStorage(storage, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage.icons[name] = {
        ...icon
      };
      return true;
    }
  } catch (err) {}
  return false;
}
function listIcons(provider, prefix) {
  let allIcons = [];
  const providers = typeof provider === "string" ? [provider] : Object.keys(dataStorage);
  providers.forEach(provider2 => {
    const prefixes = typeof provider2 === "string" && typeof prefix === "string" ? [prefix] : Object.keys(dataStorage[provider2] || {});
    prefixes.forEach(prefix2 => {
      const storage = getStorage(provider2, prefix2);
      allIcons = allIcons.concat(Object.keys(storage.icons).map(name => (provider2 !== "" ? "@" + provider2 + ":" : "") + prefix2 + ":" + name));
    });
  });
  return allIcons;
}
let simpleNames = false;
function allowSimpleNames(allow) {
  if (typeof allow === "boolean") {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  if (icon) {
    const storage = getStorage(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage.icons[iconName] || (storage.missing.has(iconName) ? null : void 0);
  }
}
function addIcon(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage = getStorage(icon.provider, icon.prefix);
  if (data) {
    return addIconToStorage(storage, icon.name, data);
  } else {
    storage.missing.add(icon.name);
    return true;
  }
}
function addCollection(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data.provider || "";
  }
  if (simpleNames && !provider && !data.prefix) {
    let added = false;
    if (quicklyValidateIconSet(data)) {
      data.prefix = "";
      parseIconSet(data, (name, icon) => {
        if (addIcon(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data.prefix;
  if (!validateIconName({
    provider,
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage = getStorage(provider, prefix);
  return !!addIconSet(storage, data);
}
function iconLoaded(name) {
  return !!getIconData(name);
}
function getIcon(name) {
  const result = getIconData(name);
  return result ? {
    ...defaultIconProps,
    ...result
  } : result;
}
const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});
const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}
const isUnsetKeyword = value => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach(props => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push("translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")");
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push("translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")");
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift("rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")");
        break;
      case 2:
        transformations.unshift("rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")");
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift("rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")");
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(body, '<g transform="' + transformations.join(" ") + '">', "</g>");
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}
const regex = /\sid="(\S+)"/g;
const randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  ids.forEach(id => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(
    // Allowed characters before id: [#;"]
    // Allowed characters after id: [)"], .[a-z]
    new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"), "$1" + newID + suffix + "$3");
  });
  body = body.replace(new RegExp(suffix, "g"), "");
  return body;
}
const storage = /* @__PURE__ */Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function getAPIModule(provider) {
  return storage[provider] || storage[""];
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    // API hosts
    resources,
    // Root path
    path: source.path || "/",
    // URL length limit
    maxURL: source.maxURL || 500,
    // Timeout before next host is used.
    rotate: source.rotate || 750,
    // Timeout before failing query.
    timeout: source.timeout || 5e3,
    // Randomise default API end point.
    random: source.random === true,
    // Start index
    index: source.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
const configStorage = /* @__PURE__ */Object.create(null);
const fallBackAPISources = ["https://api.simplesvg.com", "https://api.unisvg.com"];
const fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config = createAPIConfig(customConfig);
  if (config === null) {
    return false;
  }
  configStorage[provider] = config;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
function listAPIProviders() {
  return Object.keys(configStorage);
}
const detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {}
};
let fetchModule = detectFetch();
function setFetch(fetch2) {
  fetchModule = fetch2;
}
function getFetch() {
  return fetchModule;
}
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach(item => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
const prepare = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
const send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons":
      {
        const prefix = params.prefix;
        const icons = params.icons;
        const iconsList = icons.join(",");
        const urlParams = new URLSearchParams({
          icons: iconsList
        });
        path += prefix + ".json?" + urlParams.toString();
        break;
      }
    case "custom":
      {
        const uri = params.uri;
        path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
        break;
      }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then(response => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then(data => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        if (data === 404) {
          callback("abort", data);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
const fetchAPIModule = {
  prepare,
  send
};
function sortIcons(icons) {
  const result = {
    loaded: [],
    missing: [],
    pending: []
  };
  const storage = /* @__PURE__ */Object.create(null);
  icons.sort((a, b) => {
    if (a.provider !== b.provider) {
      return a.provider.localeCompare(b.provider);
    }
    if (a.prefix !== b.prefix) {
      return a.prefix.localeCompare(b.prefix);
    }
    return a.name.localeCompare(b.name);
  });
  let lastIcon = {
    provider: "",
    prefix: "",
    name: ""
  };
  icons.forEach(icon => {
    if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
      return;
    }
    lastIcon = icon;
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    const providerStorage = storage[provider] || (storage[provider] = /* @__PURE__ */Object.create(null));
    const localStorage = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
    let list;
    if (name in localStorage.icons) {
      list = result.loaded;
    } else if (prefix === "" || localStorage.missing.has(name)) {
      list = result.missing;
    } else {
      list = result.pending;
    }
    const item = {
      provider,
      prefix,
      name
    };
    list.push(item);
  });
  return result;
}
function removeCallback(storages, id) {
  storages.forEach(storage => {
    const items = storage.loaderCallbacks;
    if (items) {
      storage.loaderCallbacks = items.filter(row => row.id !== id);
    }
  });
}
function updateCallbacks(storage) {
  if (!storage.pendingCallbacksFlag) {
    storage.pendingCallbacksFlag = true;
    setTimeout(() => {
      storage.pendingCallbacksFlag = false;
      const items = storage.loaderCallbacks ? storage.loaderCallbacks.slice(0) : [];
      if (!items.length) {
        return;
      }
      let hasPending = false;
      const provider = storage.provider;
      const prefix = storage.prefix;
      items.forEach(item => {
        const icons = item.icons;
        const oldLength = icons.pending.length;
        icons.pending = icons.pending.filter(icon => {
          if (icon.prefix !== prefix) {
            return true;
          }
          const name = icon.name;
          if (storage.icons[name]) {
            icons.loaded.push({
              provider,
              prefix,
              name
            });
          } else if (storage.missing.has(name)) {
            icons.missing.push({
              provider,
              prefix,
              name
            });
          } else {
            hasPending = true;
            return true;
          }
          return false;
        });
        if (icons.pending.length !== oldLength) {
          if (!hasPending) {
            removeCallback([storage], item.id);
          }
          item.callback(icons.loaded.slice(0), icons.missing.slice(0), icons.pending.slice(0), item.abort);
        }
      });
    });
  }
}
let idCounter = 0;
function storeCallback(callback, icons, pendingSources) {
  const id = idCounter++;
  const abort = removeCallback.bind(null, pendingSources, id);
  if (!icons.pending.length) {
    return abort;
  }
  const item = {
    id,
    icons,
    callback,
    abort
  };
  pendingSources.forEach(storage => {
    (storage.loaderCallbacks || (storage.loaderCallbacks = [])).push(item);
  });
  return abort;
}
function listToIcons(list, validate = true, simpleNames = false) {
  const result = [];
  list.forEach(item => {
    const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames) : item;
    if (icon) {
      result.push(icon);
    }
  });
  return result;
}

// src/config.ts
var defaultConfig = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};

// src/query.ts
function sendQuery(config, payload, query, done) {
  const resourcesCount = config.resources.length;
  const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
  let resources;
  if (config.random) {
    let list = config.resources.slice(0);
    resources = [];
    while (list.length > 1) {
      const nextIndex = Math.floor(Math.random() * list.length);
      resources.push(list[nextIndex]);
      list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
    }
    resources = resources.concat(list);
  } else {
    resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
  }
  const startTime = Date.now();
  let status = "pending";
  let queriesSent = 0;
  let lastError;
  let timer = null;
  let queue = [];
  let doneCallbacks = [];
  if (typeof done === "function") {
    doneCallbacks.push(done);
  }
  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function abort() {
    if (status === "pending") {
      status = "aborted";
    }
    resetTimer();
    queue.forEach(item => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function subscribe(callback, overwrite) {
    if (overwrite) {
      doneCallbacks = [];
    }
    if (typeof callback === "function") {
      doneCallbacks.push(callback);
    }
  }
  function getQueryStatus() {
    return {
      startTime,
      payload,
      status,
      queriesSent,
      queriesPending: queue.length,
      subscribe,
      abort
    };
  }
  function failQuery() {
    status = "failed";
    doneCallbacks.forEach(callback => {
      callback(void 0, lastError);
    });
  }
  function clearQueue() {
    queue.forEach(item => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function moduleResponse(item, response, data) {
    const isError = response !== "success";
    queue = queue.filter(queued => queued !== item);
    switch (status) {
      case "pending":
        break;
      case "failed":
        if (isError || !config.dataAfterTimeout) {
          return;
        }
        break;
      default:
        return;
    }
    if (response === "abort") {
      lastError = data;
      failQuery();
      return;
    }
    if (isError) {
      lastError = data;
      if (!queue.length) {
        if (!resources.length) {
          failQuery();
        } else {
          execNext();
        }
      }
      return;
    }
    resetTimer();
    clearQueue();
    if (!config.random) {
      const index = config.resources.indexOf(item.resource);
      if (index !== -1 && index !== config.index) {
        config.index = index;
      }
    }
    status = "completed";
    doneCallbacks.forEach(callback => {
      callback(data);
    });
  }
  function execNext() {
    if (status !== "pending") {
      return;
    }
    resetTimer();
    const resource = resources.shift();
    if (resource === void 0) {
      if (queue.length) {
        timer = setTimeout(() => {
          resetTimer();
          if (status === "pending") {
            clearQueue();
            failQuery();
          }
        }, config.timeout);
        return;
      }
      failQuery();
      return;
    }
    const item = {
      status: "pending",
      resource,
      callback: (status2, data) => {
        moduleResponse(item, status2, data);
      }
    };
    queue.push(item);
    queriesSent++;
    timer = setTimeout(execNext, config.rotate);
    query(resource, payload, item.callback);
  }
  setTimeout(execNext);
  return getQueryStatus;
}

// src/index.ts
function initRedundancy(cfg) {
  const config = {
    ...defaultConfig,
    ...cfg
  };
  let queries = [];
  function cleanup() {
    queries = queries.filter(item => item().status === "pending");
  }
  function query(payload, queryCallback, doneCallback) {
    const query2 = sendQuery(config, payload, queryCallback, (data, error) => {
      cleanup();
      if (doneCallback) {
        doneCallback(data, error);
      }
    });
    queries.push(query2);
    return query2;
  }
  function find(callback) {
    return queries.find(value => {
      return callback(value);
    }) || null;
  }
  const instance = {
    query,
    find,
    setIndex: index => {
      config.index = index;
    },
    getIndex: () => config.index,
    cleanup
  };
  return instance;
}
function emptyCallback$1() {}
const redundancyCache = /* @__PURE__ */Object.create(null);
function getRedundancyCache(provider) {
  if (!redundancyCache[provider]) {
    const config = getAPIConfig(provider);
    if (!config) {
      return;
    }
    const redundancy = initRedundancy(config);
    const cachedReundancy = {
      config,
      redundancy
    };
    redundancyCache[provider] = cachedReundancy;
  }
  return redundancyCache[provider];
}
function sendAPIQuery(target, query, callback) {
  let redundancy;
  let send;
  if (typeof target === "string") {
    const api = getAPIModule(target);
    if (!api) {
      callback(void 0, 424);
      return emptyCallback$1;
    }
    send = api.send;
    const cached = getRedundancyCache(target);
    if (cached) {
      redundancy = cached.redundancy;
    }
  } else {
    const config = createAPIConfig(target);
    if (config) {
      redundancy = initRedundancy(config);
      const moduleKey = target.resources ? target.resources[0] : "";
      const api = getAPIModule(moduleKey);
      if (api) {
        send = api.send;
      }
    }
  }
  if (!redundancy || !send) {
    callback(void 0, 424);
    return emptyCallback$1;
  }
  return redundancy.query(query, send, callback)().abort;
}
const browserCacheVersion = "iconify2";
const browserCachePrefix = "iconify";
const browserCacheCountKey = browserCachePrefix + "-count";
const browserCacheVersionKey = browserCachePrefix + "-version";
const browserStorageHour = 36e5;
const browserStorageCacheExpiration = 168;
const browserStorageLimit = 50;
function getStoredItem(func, key) {
  try {
    return func.getItem(key);
  } catch (err) {}
}
function setStoredItem(func, key, value) {
  try {
    func.setItem(key, value);
    return true;
  } catch (err) {}
}
function removeStoredItem(func, key) {
  try {
    func.removeItem(key);
  } catch (err) {}
}
function setBrowserStorageItemsCount(storage, value) {
  return setStoredItem(storage, browserCacheCountKey, value.toString());
}
function getBrowserStorageItemsCount(storage) {
  return parseInt(getStoredItem(storage, browserCacheCountKey)) || 0;
}
const browserStorageConfig = {
  local: true,
  session: true
};
const browserStorageEmptyItems = {
  local: /* @__PURE__ */new Set(),
  session: /* @__PURE__ */new Set()
};
let browserStorageStatus = false;
function setBrowserStorageStatus(status) {
  browserStorageStatus = status;
}
let _window = typeof window === "undefined" ? {} : window;
function getBrowserStorage(key) {
  const attr = key + "Storage";
  try {
    if (_window && _window[attr] && typeof _window[attr].length === "number") {
      return _window[attr];
    }
  } catch (err) {}
  browserStorageConfig[key] = false;
}
function iterateBrowserStorage(key, callback) {
  const func = getBrowserStorage(key);
  if (!func) {
    return;
  }
  const version = getStoredItem(func, browserCacheVersionKey);
  if (version !== browserCacheVersion) {
    if (version) {
      const total2 = getBrowserStorageItemsCount(func);
      for (let i = 0; i < total2; i++) {
        removeStoredItem(func, browserCachePrefix + i.toString());
      }
    }
    setStoredItem(func, browserCacheVersionKey, browserCacheVersion);
    setBrowserStorageItemsCount(func, 0);
    return;
  }
  const minTime = Math.floor(Date.now() / browserStorageHour) - browserStorageCacheExpiration;
  const parseItem = index => {
    const name = browserCachePrefix + index.toString();
    const item = getStoredItem(func, name);
    if (typeof item !== "string") {
      return;
    }
    try {
      const data = JSON.parse(item);
      if (typeof data === "object" && typeof data.cached === "number" && data.cached > minTime && typeof data.provider === "string" && typeof data.data === "object" && typeof data.data.prefix === "string" &&
      // Valid item: run callback
      callback(data, index)) {
        return true;
      }
    } catch (err) {}
    removeStoredItem(func, name);
  };
  let total = getBrowserStorageItemsCount(func);
  for (let i = total - 1; i >= 0; i--) {
    if (!parseItem(i)) {
      if (i === total - 1) {
        total--;
        setBrowserStorageItemsCount(func, total);
      } else {
        browserStorageEmptyItems[key].add(i);
      }
    }
  }
}
function initBrowserStorage() {
  if (browserStorageStatus) {
    return;
  }
  setBrowserStorageStatus(true);
  for (const key in browserStorageConfig) {
    iterateBrowserStorage(key, item => {
      const iconSet = item.data;
      const provider = item.provider;
      const prefix = iconSet.prefix;
      const storage = getStorage(provider, prefix);
      if (!addIconSet(storage, iconSet).length) {
        return false;
      }
      const lastModified = iconSet.lastModified || -1;
      storage.lastModifiedCached = storage.lastModifiedCached ? Math.min(storage.lastModifiedCached, lastModified) : lastModified;
      return true;
    });
  }
}
function updateLastModified(storage, lastModified) {
  const lastValue = storage.lastModifiedCached;
  if (
  // Matches or newer
  lastValue && lastValue >= lastModified) {
    return lastValue === lastModified;
  }
  storage.lastModifiedCached = lastModified;
  if (lastValue) {
    for (const key in browserStorageConfig) {
      iterateBrowserStorage(key, item => {
        const iconSet = item.data;
        return item.provider !== storage.provider || iconSet.prefix !== storage.prefix || iconSet.lastModified === lastModified;
      });
    }
  }
  return true;
}
function storeInBrowserStorage(storage, data) {
  if (!browserStorageStatus) {
    initBrowserStorage();
  }
  function store(key) {
    let func;
    if (!browserStorageConfig[key] || !(func = getBrowserStorage(key))) {
      return;
    }
    const set = browserStorageEmptyItems[key];
    let index;
    if (set.size) {
      set.delete(index = Array.from(set).shift());
    } else {
      index = getBrowserStorageItemsCount(func);
      if (index >= browserStorageLimit || !setBrowserStorageItemsCount(func, index + 1)) {
        return;
      }
    }
    const item = {
      cached: Math.floor(Date.now() / browserStorageHour),
      provider: storage.provider,
      data
    };
    return setStoredItem(func, browserCachePrefix + index.toString(), JSON.stringify(item));
  }
  if (data.lastModified && !updateLastModified(storage, data.lastModified)) {
    return;
  }
  if (!Object.keys(data.icons).length) {
    return;
  }
  if (data.not_found) {
    data = Object.assign({}, data);
    delete data.not_found;
  }
  if (!store("local")) {
    store("session");
  }
}
function emptyCallback() {}
function loadedNewIcons(storage) {
  if (!storage.iconsLoaderFlag) {
    storage.iconsLoaderFlag = true;
    setTimeout(() => {
      storage.iconsLoaderFlag = false;
      updateCallbacks(storage);
    });
  }
}
function checkIconNamesForAPI(icons) {
  const valid = [];
  const invalid = [];
  icons.forEach(name => {
    (name.match(matchIconName) ? valid : invalid).push(name);
  });
  return {
    valid,
    invalid
  };
}
function parseLoaderResponse(storage, icons, data, isAPIResponse) {
  function checkMissing() {
    const pending = storage.pendingIcons;
    icons.forEach(name => {
      if (pending) {
        pending.delete(name);
      }
      if (!storage.icons[name]) {
        storage.missing.add(name);
      }
    });
  }
  if (data && typeof data === "object") {
    try {
      const parsed = addIconSet(storage, data);
      if (!parsed.length) {
        checkMissing();
        return;
      }
      if (isAPIResponse) {
        storeInBrowserStorage(storage, data);
      }
    } catch (err) {
      console.error(err);
    }
  }
  checkMissing();
  loadedNewIcons(storage);
}
function parsePossiblyAsyncResponse(response, callback) {
  if (response instanceof Promise) {
    response.then(data => {
      callback(data);
    }).catch(() => {
      callback(null);
    });
  } else {
    callback(response);
  }
}
function loadNewIcons(storage, icons) {
  if (!storage.iconsToLoad) {
    storage.iconsToLoad = icons;
  } else {
    storage.iconsToLoad = storage.iconsToLoad.concat(icons).sort();
  }
  if (!storage.iconsQueueFlag) {
    storage.iconsQueueFlag = true;
    setTimeout(() => {
      storage.iconsQueueFlag = false;
      const {
        provider,
        prefix
      } = storage;
      const icons2 = storage.iconsToLoad;
      delete storage.iconsToLoad;
      if (!icons2 || !icons2.length) {
        return;
      }
      const customIconLoader = storage.loadIcon;
      if (storage.loadIcons && (icons2.length > 1 || !customIconLoader)) {
        parsePossiblyAsyncResponse(storage.loadIcons(icons2, prefix, provider), data => {
          parseLoaderResponse(storage, icons2, data, false);
        });
        return;
      }
      if (customIconLoader) {
        icons2.forEach(name => {
          const response = customIconLoader(name, prefix, provider);
          parsePossiblyAsyncResponse(response, data => {
            const iconSet = data ? {
              prefix,
              icons: {
                [name]: data
              }
            } : null;
            parseLoaderResponse(storage, [name], iconSet, false);
          });
        });
        return;
      }
      const {
        valid,
        invalid
      } = checkIconNamesForAPI(icons2);
      if (invalid.length) {
        parseLoaderResponse(storage, invalid, null, false);
      }
      if (!valid.length) {
        return;
      }
      const api = prefix.match(matchIconName) ? getAPIModule(provider) : null;
      if (!api) {
        parseLoaderResponse(storage, valid, null, false);
        return;
      }
      const params = api.prepare(provider, prefix, valid);
      params.forEach(item => {
        sendAPIQuery(provider, item, data => {
          parseLoaderResponse(storage, item.icons, data, true);
        });
      });
    });
  }
}
const loadIcons = (icons, callback) => {
  const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
  const sortedIcons = sortIcons(cleanedIcons);
  if (!sortedIcons.pending.length) {
    let callCallback = true;
    if (callback) {
      setTimeout(() => {
        if (callCallback) {
          callback(sortedIcons.loaded, sortedIcons.missing, sortedIcons.pending, emptyCallback);
        }
      });
    }
    return () => {
      callCallback = false;
    };
  }
  const newIcons = /* @__PURE__ */Object.create(null);
  const sources = [];
  let lastProvider, lastPrefix;
  sortedIcons.pending.forEach(icon => {
    const {
      provider,
      prefix
    } = icon;
    if (prefix === lastPrefix && provider === lastProvider) {
      return;
    }
    lastProvider = provider;
    lastPrefix = prefix;
    sources.push(getStorage(provider, prefix));
    const providerNewIcons = newIcons[provider] || (newIcons[provider] = /* @__PURE__ */Object.create(null));
    if (!providerNewIcons[prefix]) {
      providerNewIcons[prefix] = [];
    }
  });
  sortedIcons.pending.forEach(icon => {
    const {
      provider,
      prefix,
      name
    } = icon;
    const storage = getStorage(provider, prefix);
    const pendingQueue = storage.pendingIcons || (storage.pendingIcons = /* @__PURE__ */new Set());
    if (!pendingQueue.has(name)) {
      pendingQueue.add(name);
      newIcons[provider][prefix].push(name);
    }
  });
  sources.forEach(storage => {
    const list = newIcons[storage.provider][storage.prefix];
    if (list.length) {
      loadNewIcons(storage, list);
    }
  });
  return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};
const loadIcon = icon => {
  return new Promise((fulfill, reject) => {
    const iconObj = typeof icon === "string" ? stringToIcon(icon, true) : icon;
    if (!iconObj) {
      reject(icon);
      return;
    }
    loadIcons([iconObj || icon], loaded => {
      if (loaded.length && iconObj) {
        const data = getIconData(iconObj);
        if (data) {
          fulfill({
            ...defaultIconProps,
            ...data
          });
          return;
        }
      }
      reject(icon);
    });
  });
};
function setCustomIconsLoader(loader, prefix, provider) {
  getStorage(provider || "", prefix).loadIcons = loader;
}
function setCustomIconLoader(loader, prefix, provider) {
  getStorage(provider || "", prefix).loadIcon = loader;
}
function toggleBrowserCache(storage, value) {
  switch (storage) {
    case "local":
    case "session":
      browserStorageConfig[storage] = value;
      break;
    case "all":
      for (const key in browserStorageConfig) {
        browserStorageConfig[key] = value;
      }
      break;
  }
}
function mergeCustomisations(defaults, item) {
  const result = {
    ...defaults
  };
  for (const key in item) {
    const value = item[key];
    const valueType = typeof value;
    if (key in defaultIconSizeCustomisations) {
      if (value === null || value && (valueType === "string" || valueType === "number")) {
        result[key] = value;
      }
    } else if (valueType === typeof result[key]) {
      result[key] = key === "rotate" ? value % 4 : value;
    }
  }
  return result;
}
const separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach(str => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL(svg) {
  return 'url("' + svgToData(svg) + '")';
}
const defaultExtendedIconCustomisations = {
  ...defaultIconCustomisations,
  inline: false
};

/**
 * Default SVG attributes
 */
const svgDefaults = {
  'xmlns': 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  'aria-hidden': true,
  'role': 'img'
};
/**
 * Style modes
 */
const commonProps = {
  display: 'inline-block'
};
const monotoneProps = {
  backgroundColor: 'currentColor'
};
const coloredProps = {
  backgroundColor: 'transparent'
};
// Dynamically add common props to variables above
const propsToAdd = {
  Image: 'var(--svg)',
  Repeat: 'no-repeat',
  Size: '100% 100%'
};
const propsToAddTo = {
  webkitMask: monotoneProps,
  mask: monotoneProps,
  background: coloredProps
};
for (const prefix in propsToAddTo) {
  const list = propsToAddTo[prefix];
  for (const prop in propsToAdd) {
    list[prefix + prop] = propsToAdd[prop];
  }
}
/**
 * Aliases for customisations.
 * In Vue 'v-' properties are reserved, so v-flip must be renamed
 */
const customisationAliases = {};
['horizontal', 'vertical'].forEach(prefix => {
  const attr = prefix.slice(0, 1) + 'Flip';
  // vertical-flip
  customisationAliases[prefix + '-flip'] = attr;
  // v-flip
  customisationAliases[prefix.slice(0, 1) + '-flip'] = attr;
  // verticalFlip
  customisationAliases[prefix + 'Flip'] = attr;
});
/**
 * Fix size: add 'px' to numbers
 */
function fixSize(value) {
  return value + (value.match(/^[-0-9.]+$/) ? 'px' : '');
}
/**
 * Render icon
 */
const iconify_render = (
// Icon must be validated before calling this function
icon,
// Partial properties
props) => {
  // Split properties
  const customisations = mergeCustomisations(defaultExtendedIconCustomisations, props);
  const componentProps = {
    ...svgDefaults
  };
  // Check mode
  const mode = props.mode || 'svg';
  // Copy style
  const style = {};
  const propsStyle = props.style;
  const customStyle = typeof propsStyle === 'object' && !(propsStyle instanceof Array) ? propsStyle : {};
  // Get element properties
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      // Properties to ignore
      case 'icon':
      case 'style':
      case 'onLoad':
      case 'mode':
      case 'ssr':
        break;
      // Boolean attributes
      case 'inline':
      case 'hFlip':
      case 'vFlip':
        customisations[key] = value === true || value === 'true' || value === 1;
        break;
      // Flip as string: 'horizontal,vertical'
      case 'flip':
        if (typeof value === 'string') {
          flipFromString(customisations, value);
        }
        break;
      // Color: override style
      case 'color':
        style.color = value;
        break;
      // Rotation as string
      case 'rotate':
        if (typeof value === 'string') {
          customisations[key] = rotateFromString(value);
        } else if (typeof value === 'number') {
          customisations[key] = value;
        }
        break;
      // Remove aria-hidden
      case 'ariaHidden':
      case 'aria-hidden':
        // Vue transforms 'aria-hidden' property to 'ariaHidden'
        if (value !== true && value !== 'true') {
          delete componentProps['aria-hidden'];
        }
        break;
      default:
        {
          const alias = customisationAliases[key];
          if (alias) {
            // Aliases for boolean customisations
            if (value === true || value === 'true' || value === 1) {
              customisations[alias] = true;
            }
          } else if (defaultExtendedIconCustomisations[key] === void 0) {
            // Copy missing property if it does not exist in customisations
            componentProps[key] = value;
          }
        }
    }
  }
  // Generate icon
  const item = iconToSVG(icon, customisations);
  const renderAttribs = item.attributes;
  // Inline display
  if (customisations.inline) {
    style.verticalAlign = '-0.125em';
  }
  if (mode === 'svg') {
    // Add style
    componentProps.style = {
      ...style,
      ...customStyle
    };
    // Add icon stuff
    Object.assign(componentProps, renderAttribs);
    // Counter for ids based on "id" property to render icons consistently on server and client
    let localCounter = 0;
    let id = props.id;
    if (typeof id === 'string') {
      // Convert '-' to '_' to avoid errors in animations
      id = id.replace(/-/g, '_');
    }
    // Add innerHTML and style to props
    componentProps['innerHTML'] = replaceIDs(item.body, id ? () => id + 'ID' + localCounter++ : 'iconifyVue');
    // Render icon
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)('svg', componentProps);
  }
  // Render <span> with style
  const {
    body,
    width,
    height
  } = icon;
  const useMask = mode === 'mask' || (mode === 'bg' ? false : body.indexOf('currentColor') !== -1);
  // Generate SVG
  const html = iconToHTML(body, {
    ...renderAttribs,
    width: width + '',
    height: height + ''
  });
  // Generate style
  componentProps.style = {
    ...style,
    '--svg': svgToURL(html),
    'width': fixSize(renderAttribs.width),
    'height': fixSize(renderAttribs.height),
    ...commonProps,
    ...(useMask ? monotoneProps : coloredProps),
    ...customStyle
  };
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)('span', componentProps);
};

/**
 * Enable cache
 */
function enableCache(storage) {
  toggleBrowserCache(storage, true);
}
/**
 * Disable cache
 */
function disableCache(storage) {
  toggleBrowserCache(storage, false);
}
/**
 * Initialise stuff
 */
// Enable short names
allowSimpleNames(true);
// Set API module
setAPIModule('', fetchAPIModule);
/**
 * Browser stuff
 */
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  // Set cache and load existing cache
  initBrowserStorage();
  const _window = window;
  // Load icons from global "IconifyPreload"
  if (_window.IconifyPreload !== void 0) {
    const preload = _window.IconifyPreload;
    const err = 'Invalid IconifyPreload syntax.';
    if (typeof preload === 'object' && preload !== null) {
      (preload instanceof Array ? preload : [preload]).forEach(item => {
        try {
          if (
          // Check if item is an object and not null/array
          typeof item !== 'object' || item === null || item instanceof Array ||
          // Check for 'icons' and 'prefix'
          typeof item.icons !== 'object' || typeof item.prefix !== 'string' ||
          // Add icon set
          !addCollection(item)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      });
    }
  }
  // Set API from global "IconifyProviders"
  if (_window.IconifyProviders !== void 0) {
    const providers = _window.IconifyProviders;
    if (typeof providers === 'object' && providers !== null) {
      for (let key in providers) {
        const err = 'IconifyProviders[' + key + '] is invalid.';
        try {
          const value = providers[key];
          if (typeof value !== 'object' || !value || value.resources === void 0) {
            continue;
          }
          if (!addAPIProvider(key, value)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      }
    }
  }
}
/**
 * Empty icon data, rendered when icon is not available
 */
const emptyIcon = {
  ...defaultIconProps,
  body: ''
};
const Icon = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  // Do not inherit other attributes: it is handled by render()
  inheritAttrs: false,
  // Set initial data
  data() {
    return {
      // Current icon name
      _name: '',
      // Loading
      _loadingIcon: null,
      // Mounted status
      iconMounted: false,
      // Callback counter to trigger re-render
      counter: 0
    };
  },
  mounted() {
    // Mark as mounted
    this.iconMounted = true;
  },
  unmounted() {
    this.abortLoading();
  },
  methods: {
    abortLoading() {
      if (this._loadingIcon) {
        this._loadingIcon.abort();
        this._loadingIcon = null;
      }
    },
    // Get data for icon to render or null
    getIcon(icon, onload, customise) {
      // Icon is an object
      if (typeof icon === 'object' && icon !== null && typeof icon.body === 'string') {
        // Stop loading
        this._name = '';
        this.abortLoading();
        return {
          data: icon
        };
      }
      // Invalid icon?
      let iconName;
      if (typeof icon !== 'string' || (iconName = stringToIcon(icon, false, true)) === null) {
        this.abortLoading();
        return null;
      }
      // Load icon
      let data = getIconData(iconName);
      if (!data) {
        // Icon data is not available
        if (!this._loadingIcon || this._loadingIcon.name !== icon) {
          // New icon to load
          this.abortLoading();
          this._name = '';
          if (data !== null) {
            // Icon was not loaded
            this._loadingIcon = {
              name: icon,
              abort: loadIcons([iconName], () => {
                this.counter++;
              })
            };
          }
        }
        return null;
      }
      // Icon data is available
      this.abortLoading();
      if (this._name !== icon) {
        this._name = icon;
        if (onload) {
          onload(icon);
        }
      }
      // Customise icon
      if (customise) {
        // Clone data and customise it
        data = Object.assign({}, data);
        const customised = customise(data.body, iconName.name, iconName.prefix, iconName.provider);
        if (typeof customised === 'string') {
          data.body = customised;
        }
      }
      // Add classes
      const classes = ['iconify'];
      if (iconName.prefix !== '') {
        classes.push('iconify--' + iconName.prefix);
      }
      if (iconName.provider !== '') {
        classes.push('iconify--' + iconName.provider);
      }
      return {
        data,
        classes
      };
    }
  },
  // Render icon
  render() {
    // Re-render when counter changes
    this.counter;
    const props = this.$attrs;
    // Get icon data
    const icon = this.iconMounted || props.ssr ? this.getIcon(props.icon, props.onLoad, props.customise) : null;
    // Validate icon object
    if (!icon) {
      return iconify_render(emptyIcon, props);
    }
    // Add classes
    let newProps = props;
    if (icon.classes) {
      newProps = {
        ...props,
        class: (typeof props['class'] === 'string' ? props['class'] + ' ' : '') + icon.classes.join(' ')
      };
    }
    // Render icon
    return iconify_render({
      ...defaultIconProps,
      ...icon.data
    }, newProps);
  }
});
/**
 * Internal API
 */
const _api = {
  getAPIConfig,
  setAPIModule,
  sendAPIQuery,
  setFetch,
  getFetch,
  listAPIProviders
};

;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.96.1/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.0_webpack@5.96.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.12_vue@3.5.12_webpack@5.96.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/normal-tags/icon.vue?vue&type=script&lang=js

/* harmony default export */ var iconvue_type_script_lang_js = ({
  components: {
    IconifyIcon: Icon
  },
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
});
;// ./src/package/normal-tags/icon.vue?vue&type=script&lang=js
 
;// ./node_modules/.pnpm/mini-css-extract-plugin@2.9.2_webpack@5.96.1/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.12_vue@3.5.12_webpack@5.96.1/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.49_webpack@5.96.1/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.12_vue@3.5.12_webpack@5.96.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/normal-tags/icon.vue?vue&type=style&index=0&id=0fb8fb28&lang=css&scoped=true
// extracted by mini-css-extract-plugin

;// ./src/package/normal-tags/icon.vue?vue&type=style&index=0&id=0fb8fb28&lang=css&scoped=true

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.12_vue@3.5.12_webpack@5.96.1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(5877);
;// ./src/package/normal-tags/icon.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(iconvue_type_script_lang_js, [['render',iconvue_type_template_id_0fb8fb28_scoped_true_render],['__scopeId',"data-v-0fb8fb28"]])

/* harmony default export */ var icon = (__exports__);
;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.96.1/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.0_webpack@5.96.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.12_vue@3.5.12_webpack@5.96.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/normal-tags/index.vue?vue&type=script&lang=js

/* harmony default export */ var normal_tagsvue_type_script_lang_js = ({
  components: {
    SvgIcon: icon
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    content: {
      type: String,
      default: ''
    },
    minWidth: {
      type: Number,
      default: 56
    },
    placement: {
      type: String,
      default: 'top'
    },
    effect: {
      type: String,
      default: 'light'
    }
  }
});
;// ./src/package/normal-tags/index.vue?vue&type=script&lang=js
 
;// ./node_modules/.pnpm/mini-css-extract-plugin@2.9.2_webpack@5.96.1/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.12_vue@3.5.12_webpack@5.96.1/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.49_webpack@5.96.1/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.12_vue@3.5.12_webpack@5.96.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/normal-tags/index.vue?vue&type=style&index=0&id=50ef5d6c&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/package/normal-tags/index.vue?vue&type=style&index=0&id=50ef5d6c&scoped=true&lang=css

;// ./src/package/normal-tags/index.vue




;


const normal_tags_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(normal_tagsvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-50ef5d6c"]])

/* harmony default export */ var normal_tags = (normal_tags_exports_);
;// ./src/package/index.js


//package/index.js
 // 引入封装好的组件
const coms = [normal_tags]; // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
/* harmony default export */ function src_package(Vue) {
  coms.forEach(com => {
    Vue.component('normal-tags', com);
  });
}
;// ./node_modules/.pnpm/@vue+cli-service@5.0.8_@vue+compiler-sfc@3.5.12_lodash@4.17.21_vue@3.5.12_webpack-sources@3.2.3/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=normal-tags.umd.js.map