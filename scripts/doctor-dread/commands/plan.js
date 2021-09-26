/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8257:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(9212);

var tryToString = __webpack_require__(5637); // `Assert: IsCallable(argument) is true`


module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};

/***/ }),

/***/ 2569:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794); // `Assert: Type(argument) is Object`


module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};

/***/ }),

/***/ 5766:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(2977);

var toLength = __webpack_require__(97);

var toAbsoluteIndex = __webpack_require__(6782); // `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod = function createMethod(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
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

/***/ 9624:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ 3478:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(4402);

var ownKeys = __webpack_require__(929);

var getOwnPropertyDescriptorModule = __webpack_require__(6683);

var definePropertyModule = __webpack_require__(4615);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

/***/ }),

/***/ 57:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var definePropertyModule = __webpack_require__(4615);

var createPropertyDescriptor = __webpack_require__(4677);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ 4677:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ 8494:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544); // Detect IE8's incomplete defineProperty implementation


module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] != 7;
});

/***/ }),

/***/ 6668:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var isObject = __webpack_require__(794);

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ 6918:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(5897);

module.exports = getBuiltIn('navigator', 'userAgent') || '';

/***/ }),

/***/ 4061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var userAgent = __webpack_require__(6918);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;

/***/ }),

/***/ 5690:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ 7263:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var getOwnPropertyDescriptor = __webpack_require__(6683).f;

var createNonEnumerableProperty = __webpack_require__(57);

var redefine = __webpack_require__(1270);

var setGlobal = __webpack_require__(460);

var copyConstructorProperties = __webpack_require__(3478);

var isForced = __webpack_require__(4451);
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/


module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

/***/ }),

/***/ 6544:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ 4340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var has = __webpack_require__(4402);

var FunctionPrototype = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = has(FunctionPrototype, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

/***/ }),

/***/ 5897:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var isCallable = __webpack_require__(9212);

var aFunction = function aFunction(argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

/***/ }),

/***/ 911:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(8257); // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod


module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

/***/ }),

/***/ 7583:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function check(it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

/***/ }),

/***/ 4402:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(1324);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};

/***/ }),

/***/ 4639:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 275:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var fails = __webpack_require__(6544);

var createElement = __webpack_require__(6668); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ 5044:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

var classof = __webpack_require__(9624);

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),

/***/ 9734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(9212);

var store = __webpack_require__(1314);

var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

/***/ }),

/***/ 2743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(9491);

var global = __webpack_require__(7583);

var isObject = __webpack_require__(794);

var createNonEnumerableProperty = __webpack_require__(57);

var objectHas = __webpack_require__(4402);

var shared = __webpack_require__(1314);

var sharedKey = __webpack_require__(9137);

var hiddenKeys = __webpack_require__(4639);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function enforce(it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function getterFor(TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function set(it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function get(it) {
    return wmget.call(store, it) || {};
  };

  has = function has(it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function set(it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get = function get(it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };

  has = function has(it) {
    return objectHas(it, STATE);
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

/***/ 9212:
/***/ ((module) => {

// `isCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument === 'function';
};

/***/ }),

/***/ 4451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

var isCallable = __webpack_require__(9212);

var replacement = /#|\.prototype\./;

var isForced = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),

/***/ 794:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(9212);

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : isCallable(it);
};

/***/ }),

/***/ 6268:
/***/ ((module) => {

module.exports = false;

/***/ }),

/***/ 5871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(9212);

var getBuiltIn = __webpack_require__(5897);

var USE_SYMBOL_AS_UID = __webpack_require__(7786);

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && Object(it) instanceof $Symbol;
};

/***/ }),

/***/ 8640:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(4061);

var fails = __webpack_require__(6544); // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),

/***/ 9491:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var isCallable = __webpack_require__(9212);

var inspectSource = __webpack_require__(9734);

var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));

/***/ }),

/***/ 4615:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var IE8_DOM_DEFINE = __webpack_require__(275);

var anObject = __webpack_require__(2569);

var toPropertyKey = __webpack_require__(8734); // eslint-disable-next-line es/no-object-defineproperty -- safe


var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ 6683:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var propertyIsEnumerableModule = __webpack_require__(112);

var createPropertyDescriptor = __webpack_require__(4677);

var toIndexedObject = __webpack_require__(2977);

var toPropertyKey = __webpack_require__(8734);

var has = __webpack_require__(4402);

var IE8_DOM_DEFINE = __webpack_require__(275); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),

/***/ 9275:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(8356);

var enumBugKeys = __webpack_require__(5690);

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ 4012:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ 8356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(4402);

var toIndexedObject = __webpack_require__(2977);

var indexOf = __webpack_require__(5766).indexOf;

var hiddenKeys = __webpack_require__(4639);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    !has(hiddenKeys, key) && has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ 5432:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(8356);

var enumBugKeys = __webpack_require__(5690); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ 112:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

/***/ }),

/***/ 9953:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var objectKeys = __webpack_require__(5432);

var toIndexedObject = __webpack_require__(2977);

var propertyIsEnumerable = __webpack_require__(112).f; // `Object.{ entries, values }` methods implementation


var createMethod = function createMethod(TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};

/***/ }),

/***/ 6252:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(9212);

var isObject = __webpack_require__(794); // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive


module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ 929:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(5897);

var getOwnPropertyNamesModule = __webpack_require__(9275);

var getOwnPropertySymbolsModule = __webpack_require__(4012);

var anObject = __webpack_require__(2569); // all object keys, includes non-enumerable and symbols


module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ 1270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var isCallable = __webpack_require__(9212);

var has = __webpack_require__(4402);

var createNonEnumerableProperty = __webpack_require__(57);

var setGlobal = __webpack_require__(460);

var inspectSource = __webpack_require__(9734);

var InternalStateModule = __webpack_require__(2743);

var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(4340).CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!has(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global) {
    if (simple) O[key] = value;else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});

/***/ }),

/***/ 3955:
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ 460:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ 9137:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(7836);

var uid = __webpack_require__(8284);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ 1314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var setGlobal = __webpack_require__(460);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

/***/ }),

/***/ 7836:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(6268);

var store = __webpack_require__(1314);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.18.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ 6782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(5089);

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ 2977:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(5044);

var requireObjectCoercible = __webpack_require__(3955);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ 5089:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),

/***/ 97:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(5089);

var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ 1324:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(3955); // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ 2670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794);

var isSymbol = __webpack_require__(5871);

var getMethod = __webpack_require__(911);

var ordinaryToPrimitive = __webpack_require__(6252);

var wellKnownSymbol = __webpack_require__(3649);

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

/***/ }),

/***/ 8734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPrimitive = __webpack_require__(2670);

var isSymbol = __webpack_require__(5871); // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey


module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};

/***/ }),

/***/ 5637:
/***/ ((module) => {

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};

/***/ }),

/***/ 8284:
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),

/***/ 7786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(8640);

module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),

/***/ 3649:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var shared = __webpack_require__(7836);

var has = __webpack_require__(4402);

var uid = __webpack_require__(8284);

var NATIVE_SYMBOL = __webpack_require__(8640);

var USE_SYMBOL_AS_UID = __webpack_require__(7786);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  }

  return WellKnownSymbolsStore[name];
};

/***/ }),

/***/ 6737:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var $entries = __webpack_require__(9953).entries; // `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries


$({
  target: 'Object',
  stat: true
}, {
  entries: function entries(O) {
    return $entries(O);
  }
});

/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ Command)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Command = function Command(name, help, run) {
  _classCallCheck(this, Command);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "help", void 0);

  _defineProperty(this, "run", void 0);

  this.name = name;
  this.help = help;
  this.run = run;
};

/***/ }),

/***/ 1302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NK": () => (/* binding */ planLimitTo),
/* harmony export */   "M7": () => (/* binding */ neededBanishes)
/* harmony export */ });
/* unused harmony exports banishesToLimit, categorizeBanishes */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _raidlog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4151);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function banishesToLimit(targetZone, monster, element) {
  var monstersNeededBanished = monster === "banish no monster" ? [] : [(0,_raidlog__WEBPACK_IMPORTED_MODULE_1__/* .monsterPair */ .RN)(monster)];
  var elementsNeededBanished = element === "banish all elements" ? _toConsumableArray(_raidlog__WEBPACK_IMPORTED_MODULE_1__/* .dreadElements */ .rh) : element === "banish no element" ? [] : _raidlog__WEBPACK_IMPORTED_MODULE_1__/* .dreadElements.filter */ .rh.filter(e => e !== element);
  var thingsNeededBanished = [].concat(monstersNeededBanished, _toConsumableArray(elementsNeededBanished));
  var result = [];

  var _iterator = _createForOfIteratorHelper(_raidlog__WEBPACK_IMPORTED_MODULE_1__/* .dreadZones */ .e5),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var noncombatZone = _step.value;

      var _iterator2 = _createForOfIteratorHelper(noncombatZone.noncombats),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var noncombat = _step2.value;

          var _iterator3 = _createForOfIteratorHelper(noncombat.choices),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _step3$value = _slicedToArray(_step3.value, 2),
                  subIndex = _step3$value[0],
                  subnoncombat = _step3$value[1];

              var _iterator4 = _createForOfIteratorHelper(subnoncombat.choices),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _step4$value = _slicedToArray(_step4.value, 2),
                      choiceIndex = _step4$value[0],
                      choice = _step4$value[1];

                  if (!choice.banish) continue;

                  var _choice$banish = _slicedToArray(choice.banish, 2),
                      banishZone = _choice$banish[0],
                      impact = _choice$banish[1]; // print(`zone ${targetZone} === ${banishZone} && thingsToBanish includes ${impact}`);


                  if (targetZone === banishZone && thingsNeededBanished.includes(impact)) {
                    // print("yes");
                    result.push([noncombat, subIndex, choiceIndex].concat(_toConsumableArray(choice.banish)));
                  } // else print("no");
                  // print();

                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
function categorizeBanishes(targetZone, monster, element) {
  var banished = (0,_raidlog__WEBPACK_IMPORTED_MODULE_1__/* .dreadBanished */ .tB)();
  var banishedInZone = banished.filter(info => info.targetZone === targetZone);
  var noncombatsUsed = new Set((0,_raidlog__WEBPACK_IMPORTED_MODULE_1__/* .dreadNoncombatsUsed */ .Sq)());
  var desiredBanishes = banishesToLimit(targetZone, monster, element);
  var completedBanishes = [];
  var usedBanishes = [];
  var cantBanishes = [];
  var goodBanishes = [];

  var _iterator5 = _createForOfIteratorHelper(desiredBanishes),
      _step5;

  try {
    var _loop = function _loop() {
      var banish = _step5.value;

      var _banish = _slicedToArray(banish, 5),
          noncombat = _banish[0],
          subIndex = _banish[1],
          choiceIndex = _banish[2],
          banishZone = _banish[3],
          banishThing = _banish[4];

      var subnoncombat = noncombat.choices.get(subIndex);
      var choice = subnoncombat.choices.get(choiceIndex);

      if (banishedInZone.some(info => (0,_raidlog__WEBPACK_IMPORTED_MODULE_1__/* .dreadZone */ .XC)(info.noncombatZone).noncombats.some(nc => nc.id === noncombat.id) && info.targetZone === banishZone && info.banished === banishThing)) {
        completedBanishes.push(banish);
      } else if (noncombatsUsed.has(noncombat.name)) {
        usedBanishes.push(banish);
      } else if (subnoncombat.classes && !subnoncombat.classes.includes((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)())) {
        cantBanishes.push([subnoncombat.classes, banish]);
      } else if (choice.classes && !choice.classes.includes((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)())) {
        cantBanishes.push([choice.classes, banish]);
      } else {
        goodBanishes.push(banish);
      }
    };

    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      _loop();
    } // print(`completed: ${JSON.stringify(completedBanishes.map(([, banish]) => banish))}`);
    // print(`used: ${JSON.stringify(usedBanishes.map(([, banish]) => banish))}`);

  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  return {
    completedBanishes: completedBanishes,
    usedBanishes: usedBanishes,
    cantBanishes: cantBanishes,
    goodBanishes: goodBanishes
  };
}
function planLimitTo(targetZone, monster, element) {
  var _categorizeBanishes = categorizeBanishes(targetZone, monster, element),
      cantBanishes = _categorizeBanishes.cantBanishes,
      goodBanishes = _categorizeBanishes.goodBanishes;

  var _iterator6 = _createForOfIteratorHelper(cantBanishes),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _step6$value = _slicedToArray(_step6.value, 2),
          classes = _step6$value[0],
          _step6$value$ = _slicedToArray(_step6$value[1], 4),
          noncombat = _step6$value$[0],
          banish = _step6$value$[3];

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Can't banish ".concat(banish, " @ ").concat(noncombat, " because we aren't ").concat(classes.join(", "), "."));
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  var banishLocations = new Map();

  var _iterator7 = _createForOfIteratorHelper(goodBanishes),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _banish2 = _step7.value;

      var _banish3 = _slicedToArray(_banish2, 1),
          _noncombat = _banish3[0];

      var banishList = banishLocations.get(_noncombat);

      if (banishList === undefined) {
        banishList = [];
        banishLocations.set(_noncombat, banishList);
      }

      banishList.push(_banish2);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  return _toConsumableArray(banishLocations).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 2),
        _ref2$ = _slicedToArray(_ref2[1], 1),
        banish = _ref2$[0];

    return banish;
  });
} // For informational purposes only - not enough info to plan out banishes.

function neededBanishes(targetZone, monster, element) {
  var _categorizeBanishes2 = categorizeBanishes(targetZone, monster, element),
      completedBanishes = _categorizeBanishes2.completedBanishes;

  var paired = (0,_raidlog__WEBPACK_IMPORTED_MODULE_1__/* .monsterPair */ .RN)(monster);
  var monsterCount = completedBanishes.filter(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 5),
        thing = _ref4[4];

    return thing === paired;
  }).length;
  var banishedElements = completedBanishes.map(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 5),
        thing = _ref6[4];

    return thing;
  }).filter(x => (0,_raidlog__WEBPACK_IMPORTED_MODULE_1__/* .isDreadElementId */ .pd)(x));
  return [].concat(_toConsumableArray(_raidlog__WEBPACK_IMPORTED_MODULE_1__/* .dreadElements.filter */ .rh.filter(e => element !== e && !banishedElements.includes(e))), _toConsumableArray(new Array(2 - monsterCount).fill(paired)));
}

/***/ }),

/***/ 4151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "tB": () => (/* binding */ dreadBanished),
  "rh": () => (/* binding */ dreadElements),
  "Sq": () => (/* binding */ dreadNoncombatsUsed),
  "XC": () => (/* binding */ dreadZone),
  "e5": () => (/* binding */ dreadZones),
  "pd": () => (/* binding */ isDreadElementId),
  "ww": () => (/* binding */ isDreadMonsterId),
  "RN": () => (/* binding */ monsterPair),
  "ON": () => (/* binding */ monsterZone)
});

// UNUSED EXPORTS: DreadNoncombat, DreadSubnoncombat, DreadZone, dreadKilled, dreadMonsters, dreadZoneTypes, memoizedRaidlog, monsterSingular, raidlogBlocks, toDreadElementId, toElement

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(6737);
// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(7530);
;// CONCATENATED MODULE: ./src/dungeon/layout.yml
const layout_namespaceObject = JSON.parse('[{"name":"forest","fullName":"The Woods","monsters":["bugbear","werewolf"],"noncombats":[{"name":"Cabin","id":721,"index":1,"choices":{"1":{"name":"Kitchen","id":722,"choices":{"1":{"message":"acquired some dread tarragon","item":"dread tarragon"},"2":{"message":"made some bone flour","item":"bone flour"},"3":{"message":"made the forest less stinky","banish":["forest","stinky"]}}},"2":{"name":"Basement","id":723,"choices":{"1":{"message":"recycled some newspapers","item":"Freddy Kruegerand"},"2":{"message":"read an old diary","effect":"Bored Stiff"},"3":{"message":"got a Dreadsylvania auditor\'s badge","requirement":"replica key","item":"Dreadsylvania auditor\'s badge"},"4":{"message":"made an impression of a complicated lock","requirement":"wax banana","item":"complicated lock impression"}}},"3":{"name":"Attic","id":724,"locked":true,"choices":{"1":{"message":"made the forest less spooky","classes":["Accordion Thief"],"item":"intricate music box parts"},"2":{"message":"drove some werewolves out of the forest","banish":["forest","werewolf"]},"3":{"message":"drove some vampires out of the castle","banish":["castle","vampire"]},"4":{"message":"flipped through a photo album","stat":"Moxie"}}}}},{"name":"Tallest Tree","id":725,"index":2,"choices":{"1":{"name":"Climb to the top","id":726,"classes":["Seal Clubber","Turtle Tamer"],"choices":{"1":{"messages":["knocked some fruit loose","wasted some fruit"]},"2":{"message":"made the forest less sleazy","banish":["forest","sleazy"]},"3":{"message":"acquired a chunk of moon-amber","item":"moon-amber"}}},"2":{"name":"Fire tower","id":727,"locked":true,"choices":{"1":{"message":"drove some ghosts out of the village","banish":["village","ghost"]},"2":{"message":"rifled through a footlocker","item":"Freddy Kruegerand"},"3":{"message":"lifted some weights","stat":"Muscle"}}},"3":{"name":"Root around","id":728,"choices":{"1":{"message":"got a blood kiwi","item":"blood kiwi"},"2":{"message":"got a cool seed pod","item":"Dreadsylvanian seed pod"}}}}},{"name":"Burrows","id":729,"index":3,"choices":{"1":{"name":"Towards heat","id":730,"choices":{"1":{"message":"made the forest less hot","banish":["forest","hot"]},"2":{"message":"got intimate with some hot coals","effect":"Dragged Through the Coals"},"3":{"message":"made a cool iron ingot","requirement":"old ball and chain","item":"cool iron ingot"}}},"2":{"name":"Towards cold","id":731,"choices":{"1":{"message":"made the forest less cold","banish":["forest","hot"]},"2":{"message":"listened to the forest\'s heart","stat":"Mysticality"},"3":{"message":"drank some nutritious forest goo","effect":"Nature\'s Bounty"}}},"3":{"name":"Towards smelly","id":732,"choices":{"1":{"message":"drove some bugbears out of the forest","banish":["forest","hot"]},"2":{"message":"found and sold a rare baseball card","item":"Freddy Kruegerand"}}}}}]},{"name":"village","fullName":"The Village","monsters":["ghost","zombie"],"noncombats":[{"name":"Village Square","id":733,"index":4,"choices":{"1":{"name":"Schoolhouse","id":734,"locked":true,"choices":{"1":{"message":"drove some ghosts out of the village","banish":["village","ghost"]},"2":{"message":"collected a ghost pencil","item":"ghost pencil"},"3":{"message":"read some naughty carvings","stat":"Mysticality"}}},"2":{"name":"Blacksmith","id":735,"choices":{"1":{"message":"made the village less cold","banish":["village","cold"]},"2":{"message":"looted the blacksmith\'s till","item":"Freddy Kruegerand"},"3":{"messages":["made a cool iron breastplate","made a cool iron helmet","made some cool iron greaves"]}}},"3":{"name":"Gallows","id":736,"choices":{"1":{"message":"made the village less spooky","banish":["village","spooky"]},"2":{"message":"was hung by a clanmate"},"4":{"message":"hung a clanmate"}}}}},{"name":"Skid Row","id":737,"index":5,"choices":{"1":{"name":"Sewers","id":738,"choices":{"1":{"message":"made the village less stinky","banish":["village","stinky"]},"2":{"message":"swam in a sewer","effect":"Sewer-Drenched"}}},"2":{"name":"Tenements","id":740,"choices":{"1":{"message":"drove some skeletons out of the castle","banish":["castle","skeleton"]},"2":{"message":"made the village less sleazy","banish":["village","sleazy"]},"3":{"message":"moved some bricks around","stat":"Muscle"}}},"3":{"name":"Ticking shack","id":739,"classes":["Disco Bandit","Accordion Thief"],"choices":{"1":{"message":"looted the tinker\'s shack","item":"Freddy Kruegerand"},"2":{"message":"made a complicated key","item":"replica key"},"3":{"message":"polished some moon-amber","requirement":"moon-amber","item":"polished moon-amber"},"4":{"message":"made a clockwork bird","item":"unwound mechanical songbird"},"5":{"message":"got some old fuse","quantity":3,"item":"old fuse"}}}}},{"name":"Old Duke\'s Estate","id":741,"index":6,"choices":{"1":{"name":"Family plot","id":742,"choices":{"1":{"message":"drove some zombies out of the village","banish":["village","zombie"]},"2":{"message":"robbed some graves","item":"Freddy Kruegerand"},"3":{"message":"read some lurid epitaphs","effect":"Fifty Ways to Bereave Your Lover"}}},"2":{"name":"Servant\'s quarters","id":743,"choices":{"1":{"message":"made the village less hot","banish":["village","hot"]},"2":{"message":"made a shepherd\'s pie","item":"Dreadsylvanian shepherd\'s pie"},"3":{"message":"raided some naughty cabinets","stat":"Moxie"}}},"3":{"name":"Master suite","id":744,"locked":true,"choices":{"1":{"message":"drove some werewolves out of the forest","banish":["forest","werewolf"]},"2":{"message":"got a bottle of eau de mort","item":"eau de mort"},"3":{"message":"made a ghost shawl","item":"ghost shawl"}}}}}]},{"name":"castle","fullName":"The Castle","monsters":["vampire","skeleton"],"noncombats":[{"name":"Tower","id":749,"index":8,"choices":{"1":{"name":"Laboratory","id":750,"locked":true,"choices":{"1":{"message":"drove some bugbears out of the forest","banish":["forest","bugbear"]},"2":{"message":"drove some zombies out of the village","banish":["village","zombie"]},"5":{"message":"made a blood kiwitini","classes":["Disco Bandit","Accordion Thief"],"item":"bloody kiwitini"}}},"2":{"name":"Books","id":751,"classes":["Pastamancer","Sauceror"],"choices":{"1":{"message":"drove some skeletons out of the castle","banish":["castle","skeleton"]},"2":{"message":"read some ancient secrets","stat":"Mysticality"},"3":{"message":"learned to make a moon-amber necklace"}}},"3":{"name":"Bedroom","id":752,"choices":{"1":{"message":"made the castle less sleazy","banish":["castle","sleazy"]},"2":{"message":"raided a dresser","item":"Freddy Kruegerand"},"3":{"message":"got magically fingered","effect":"Magically Fingered"}}}}},{"name":"Great Hall","id":745,"index":7,"choices":{"1":{"name":"Ballroom","id":746,"locked":true,"choices":{"1":{"message":"drove some vampires out of the castle","banish":["castle","vampire"]},"2":{"message":"twirled on the dance floor","requirement":"muddy skirt","stat":"Moxie","item":"weedy skirt"}}},"2":{"name":"Kitchen","id":747,"choices":{"1":{"message":"made the castle less cold","banish":["castle","cold"]},"2":{"message":"frolicked in a freezer","effect":"Staying Frosty"}}},"3":{"name":"Dining room","id":748,"choices":{"1":{"message":"got some roast beast","item":"dreadful roast"},"2":{"message":"made the castle less stinky","banish":["castle","stinky"]},"3":{"message":"got a wax banana","classes":["Pastamancer","Sauceror"],"item":"wax banana"}}}}},{"name":"Dungeons","id":753,"index":9,"choices":{"1":{"name":"Cell block","id":754,"choices":{"1":{"message":"made the castle less spooky","banish":["castle","spooky"]},"2":{"message":"did a whole bunch of pushups","stat":"Muscle"},"3":{"message":"took a nap on a prison cot"}}},"2":{"name":"Boiler room","id":755,"choices":{"1":{"message":"made the castle less hot","banish":["castle","hot"]},"2":{"message":"sifted through some ashes","item":"Freddy Kruegerand"},"3":{"message":"relaxed in a furnace"}}},"3":{"name":"Guardroom","id":756,"choices":{"1":{"message":"got some stinking agaric","item":"stinking agaricus"},"2":{"message":"rolled around in some mushrooms","effect":"Spore-Wreathed"}}}}}]}]');
;// CONCATENATED MODULE: ./src/dungeon/raidlog.ts
var _templateObject, _templateObject2;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var dreadMonsters = ["bugbear", "werewolf", "ghost", "zombie", "vampire", "skeleton"];
function isDreadMonsterId(x) {
  return dreadMonsters.includes(x);
}
var dreadElements = ["hot", "cold", "sleazy", "stinky", "spooky"];
function isDreadElementId(x) {
  return dreadElements.includes(x);
}
function toDreadElementId(x) {
  if (isDreadElementId(x)) return x;else if (x === "sleaze") return "sleazy";else if (x === "stench") return "stinky";else return undefined;
}
function toElement(dreadElement) {
  switch (dreadElement) {
    case "hot":
    case "cold":
    case "spooky":
      return Element.get(dreadElement);

    case "sleazy":
      return $element(_templateObject || (_templateObject = _taggedTemplateLiteral(["sleaze"])));

    case "stinky":
      return $element(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["stench"])));
  }
}
var DreadSubnoncombat = /*#__PURE__*/function () {
  function DreadSubnoncombat(_ref) {
    var name = _ref.name,
        id = _ref.id,
        locked = _ref.locked,
        classes = _ref.classes,
        choices = _ref.choices;

    _classCallCheck(this, DreadSubnoncombat);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "needsUnlocked", void 0);

    _defineProperty(this, "classes", void 0);

    _defineProperty(this, "choices", void 0);

    this.name = name;
    this.id = id;
    this.needsUnlocked = !!locked;
    if (classes) this.classes = classes.map(c => Class.get(c));
    this.choices = new Map(Object.entries(choices).map(_ref2 => {
      var _choice$messages;

      var _ref3 = _slicedToArray(_ref2, 2),
          index = _ref3[0],
          choice = _ref3[1];

      return [parseInt(index), _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
        messages: (_choice$messages = choice.messages) !== null && _choice$messages !== void 0 ? _choice$messages : [choice.message]
      }, choice.classes ? {
        classes: choice.classes.map(c => Class.get(c))
      } : {}), choice.requirement ? {
        requirement: Item.get(choice.requirement)
      } : {}), choice.item ? {
        item: Item.get(choice.item)
      } : {}), choice.banish ? {
        banish: choice.banish
      } : {}), choice.effect ? {
        effect: Effect.get(choice.effect)
      } : {}), choice.stat ? {
        stat: Stat.get(choice.stat)
      } : {})];
    }));
  }

  _createClass(DreadSubnoncombat, [{
    key: "messages",
    value: function messages() {
      var _ref4;

      return (_ref4 = []).concat.apply(_ref4, _toConsumableArray(_toConsumableArray(this.choices.values()).map(choice => choice.messages)));
    }
  }, {
    key: "isLocked",
    value: function isLocked() {
      return this.needsUnlocked && !memoizedRaidlog().includes("unlocked the ".concat(this.name.toLowerCase()));
    }
  }]);

  return DreadSubnoncombat;
}();
var DreadNoncombat = /*#__PURE__*/function () {
  function DreadNoncombat(_ref5) {
    var name = _ref5.name,
        id = _ref5.id,
        index = _ref5.index,
        choices = _ref5.choices;

    _classCallCheck(this, DreadNoncombat);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "index", void 0);

    _defineProperty(this, "choices", void 0);

    this.name = name;
    this.id = id;
    this.index = index;
    this.choices = new Map(Object.entries(choices).map(_ref6 => {
      var _ref7 = _slicedToArray(_ref6, 2),
          index = _ref7[0],
          choice = _ref7[1];

      return [parseInt(index), new DreadSubnoncombat(choice)];
    }));
  }

  _createClass(DreadNoncombat, [{
    key: "zone",
    value: function zone() {
      switch (this.name) {
        case "Cabin":
        case "Tallest Tree":
        case "Burrows":
          return "forest";

        case "Village Square":
        case "Skid Row":
        case "Old Duke's Estate":
          return "village";

        case "Tower":
        case "Great Hall":
        case "Dungeons":
          return "castle";
      }
    }
  }, {
    key: "messages",
    value: function messages() {
      var _ref8;

      return (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_toConsumableArray(this.choices.values()).map(choice => choice.messages())));
    }
  }]);

  return DreadNoncombat;
}();
var dreadZoneTypes = (/* unused pure expression or super */ null && (["forest", "village", "castle"]));
var DreadZone = function DreadZone(_ref9) {
  var name = _ref9.name,
      fullName = _ref9.fullName,
      monsters = _ref9.monsters,
      noncombats = _ref9.noncombats;

  _classCallCheck(this, DreadZone);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "fullName", void 0);

  _defineProperty(this, "monsters", void 0);

  _defineProperty(this, "noncombats", void 0);

  this.name = name;
  this.fullName = fullName;
  this.monsters = monsters;
  this.noncombats = noncombats.map(noncombat => new DreadNoncombat(noncombat));
};
function monsterPair(monster) {
  switch (monster) {
    case "bugbear":
      return "werewolf";

    case "werewolf":
      return "bugbear";

    case "ghost":
      return "zombie";

    case "zombie":
      return "ghost";

    case "vampire":
      return "skeleton";

    case "skeleton":
      return "vampire";
  }
}
function monsterZone(monster) {
  switch (monster) {
    case "bugbear":
    case "werewolf":
      return "forest";

    case "ghost":
    case "zombie":
      return "village";

    case "vampire":
    case "skeleton":
      return "castle";
  }
}
function monsterSingular(monster) {
  return monster === "werewolves" ? "werewolf" : monster.slice(0, -1);
}
var dreadZones = layout_namespaceObject.map(zone => new DreadZone(zone));
function dreadZone(name) {
  return dreadZones.find(zone => zone.name === name);
}
var lastRaidlogTurncount = -1;
var lastRaidlogClan = -1;
var savedRaidlog = undefined;
function memoizedRaidlog() {
  if (lastRaidlogTurncount !== (0,external_kolmafia_.totalTurnsPlayed)() || lastRaidlogClan !== (0,external_kolmafia_.getClanId)() || savedRaidlog === undefined) {
    lastRaidlogTurncount = (0,external_kolmafia_.totalTurnsPlayed)();
    lastRaidlogClan = (0,external_kolmafia_.getClanId)();
    savedRaidlog = (0,external_kolmafia_.visitUrl)("clan_raidlogs.php");
  }

  return savedRaidlog;
}
function raidlogBlocks() {
  return dreadZones.map(zone => {
    var raidlog = memoizedRaidlog();
    var blockquoteRegex = new RegExp("<b>".concat(zone.fullName, "</b>\\s*<blockquote>(.*?)</blockquote>"));
    var blockquoteMatch = raidlog.match(blockquoteRegex);
    var blockquote = blockquoteMatch ? blockquoteMatch[1] : "";
    return [zone, blockquote];
  });
}
function dreadBanished() {
  var result = [];

  var _iterator = _createForOfIteratorHelper(raidlogBlocks()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          name = _step$value[0].name,
          block = _step$value[1];

      var elementRegex = /made the (.*?) less (.*?) \(1 turn\)/gi;
      var match = void 0;

      while ((match = elementRegex.exec(block)) !== null) {
        result.push({
          targetZone: match[1],
          noncombatZone: name,
          banished: match[2]
        });
      }

      var monsterRegex = /drove some (.*?) out of the (.*?) \(1 turn\)/gi;

      while ((match = monsterRegex.exec(block)) !== null) {
        result.push({
          targetZone: match[2],
          noncombatZone: name,
          banished: monsterSingular(match[1])
        });
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
function dreadKilled() {
  return raidlogBlocks().map(_ref10 => {
    var _ref11 = _slicedToArray(_ref10, 2),
        zone = _ref11[0],
        block = _ref11[1];

    var zoneTotal = 0;

    var _iterator2 = _createForOfIteratorHelper(zone.monsters),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var monster = _step2.value;
        var monsterRe = new RegExp("defeated (.*?) ".concat(monster, " x ([0-9]+)"), "gi");
        var match = void 0;

        while ((match = monsterRe.exec(block)) !== null) {
          zoneTotal += parseInt(match[2]);
        }

        var singleMonsterRe = new RegExp("defeated (.*?) ".concat(monster, " \\("), "gi");

        while ((match = singleMonsterRe.exec(block)) !== null) {
          zoneTotal += 1;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return [zone, zoneTotal];
  });
}
function dreadNoncombatsUsed() {
  var result = [];

  var _iterator3 = _createForOfIteratorHelper(raidlogBlocks()),
      _step3;

  try {
    var _loop = function _loop() {
      var _step3$value = _slicedToArray(_step3.value, 2),
          zone = _step3$value[0],
          block = _step3$value[1];

      var _iterator4 = _createForOfIteratorHelper(zone.noncombats),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var noncombat = _step4.value;
          var messageRes = noncombat.messages().map(s => new RegExp("".concat((0,external_kolmafia_.myName)(), " \\(#").concat((0,external_kolmafia_.myId)(), "\\) ").concat(s), "i"));
          if (messageRes.some(re => block.match(re))) result.push(noncombat.name);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    };

    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return result;
}

/***/ }),

/***/ 7530:
/***/ ((module) => {

"use strict";
module.exports = require("kolmafia");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(463);
/* harmony import */ var _dungeon_plan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1302);
/* harmony import */ var _dungeon_raidlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4151);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var usage = "dr plan [element] [monster]: Print plan for banishing all [element] [monster]s.";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _command__WEBPACK_IMPORTED_MODULE_1__/* .Command */ .m("plan", usage, _ref => {
  var _ref2 = _slicedToArray(_ref, 2),
      element = _ref2[0],
      monster = _ref2[1];

  if (!(0,_dungeon_raidlog__WEBPACK_IMPORTED_MODULE_2__/* .isDreadMonsterId */ .ww)(monster)) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Unrecognized monster ".concat(monster, "."), "red");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Usage: ".concat(usage, "."));
    return;
  } else if (!(0,_dungeon_raidlog__WEBPACK_IMPORTED_MODULE_2__/* .isDreadElementId */ .pd)(element)) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Unrecognized element ".concat(element, "."), "red");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Usage: ".concat(usage, "."));
    return;
  }

  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("<b>Dr. Dread Banish Planner</b>");
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Noncombats used: ".concat((0,_dungeon_raidlog__WEBPACK_IMPORTED_MODULE_2__/* .dreadNoncombatsUsed */ .Sq)().join(", ")));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Trying to banish ".concat(element, " ").concat(monster));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)();
  var remaining = (0,_dungeon_plan__WEBPACK_IMPORTED_MODULE_3__/* .neededBanishes */ .M7)((0,_dungeon_raidlog__WEBPACK_IMPORTED_MODULE_2__/* .monsterZone */ .ON)(monster), monster, element);

  if (remaining.length === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("All banishes complete!", "blue");
  } else {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Outstanding banishes: ".concat(remaining.join(", ")));
  }

  var plan = (0,_dungeon_plan__WEBPACK_IMPORTED_MODULE_3__/* .planLimitTo */ .NK)((0,_dungeon_raidlog__WEBPACK_IMPORTED_MODULE_2__/* .monsterZone */ .ON)(monster), monster, element);

  if (plan.length === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("No banishes available and needed.");
  }

  var _iterator = _createForOfIteratorHelper((0,_dungeon_plan__WEBPACK_IMPORTED_MODULE_3__/* .planLimitTo */ .NK)((0,_dungeon_raidlog__WEBPACK_IMPORTED_MODULE_2__/* .monsterZone */ .ON)(monster), monster, element)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var banish = _step.value;

      var _banish = _slicedToArray(banish, 5),
          noncombat = _banish[0],
          subIndex = _banish[1],
          choiceIndex = _banish[2],
          targetZone = _banish[3],
          thing = _banish[4];

      var subnoncombat = noncombat.choices.get(subIndex);
      var choiceSequence = [[noncombat.id, subIndex], [subnoncombat.id, choiceIndex]];
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Banish ".concat(thing, " in ").concat(targetZone, " @ ").concat(noncombat.name, " using ").concat(choiceSequence.map(x => x.join(", ")).join(" => ")));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}));
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;