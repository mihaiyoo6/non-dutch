/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, process) {/*! Browser bundle of nunjucks 3.1.0 (slim, only works with precompiled templates) */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nunjucks"] = factory();
	else
		root["nunjucks"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayProto = Array.prototype;
var ObjProto = Object.prototype;
var escapeMap = {
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&#39;',
  '<': '&lt;',
  '>': '&gt;'
};
var escapeRegex = /[&"'<>]/g;
var exports = module.exports = {};

function hasOwnProp(obj, k) {
  return ObjProto.hasOwnProperty.call(obj, k);
}

exports.hasOwnProp = hasOwnProp;

function lookupEscape(ch) {
  return escapeMap[ch];
}

function _prettifyError(path, withInternals, err) {
  if (!err.Update) {
    // not one of ours, cast it
    err = new exports.TemplateError(err);
  }

  err.Update(path); // Unless they marked the dev flag, show them a trace from here

  if (!withInternals) {
    var old = err;
    err = new Error(old.message);
    err.name = old.name;
  }

  return err;
}

exports._prettifyError = _prettifyError;

function TemplateError(message, lineno, colno) {
  var _this = this;

  var err;
  var cause;

  if (message instanceof Error) {
    cause = message;
    message = cause.name + ": " + cause.message;
  }

  if (Object.setPrototypeOf) {
    err = new Error(message);
    Object.setPrototypeOf(err, TemplateError.prototype);
  } else {
    err = this;
    Object.defineProperty(err, 'message', {
      enumerable: false,
      writable: true,
      value: message
    });
  }

  Object.defineProperty(err, 'name', {
    value: 'Template render error'
  });

  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, this.constructor);
  }

  var getStack;

  if (cause) {
    var stackDescriptor = Object.getOwnPropertyDescriptor(cause, 'stack');

    getStack = stackDescriptor && (stackDescriptor.get || function () {
      return stackDescriptor.value;
    });

    if (!getStack) {
      getStack = function getStack() {
        return cause.stack;
      };
    }
  } else {
    var stack = new Error(message).stack;

    getStack = function getStack() {
      return stack;
    };
  }

  Object.defineProperty(err, 'stack', {
    get: function get() {
      return getStack.call(_this);
    }
  });
  Object.defineProperty(err, 'cause', {
    value: cause
  });
  err.lineno = lineno;
  err.colno = colno;
  err.firstUpdate = true;

  err.Update = function (path) {
    var msg = '(' + (path || 'unknown path') + ')'; // only show lineno + colno next to path of template
    // where error occurred

    if (_this.firstUpdate) {
      if (_this.lineno && _this.colno) {
        msg += " [Line " + _this.lineno + ", Column " + _this.colno + "]";
      } else if (_this.lineno) {
        msg += " [Line " + _this.lineno + "]";
      }
    }

    msg += '\n ';

    if (_this.firstUpdate) {
      msg += ' ';
    }

    _this.message = msg + (_this.message || '');
    _this.firstUpdate = false;
    return _this;
  };

  return err;
}

if (Object.setPrototypeOf) {
  Object.setPrototypeOf(TemplateError.prototype, Error.prototype);
} else {
  TemplateError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: TemplateError
    }
  });
}

exports.TemplateError = TemplateError;

function escape(val) {
  return val.replace(escapeRegex, lookupEscape);
}

exports.escape = escape;

function isFunction(obj) {
  return ObjProto.toString.call(obj) === '[object Function]';
}

exports.isFunction = isFunction;

function isArray(obj) {
  return ObjProto.toString.call(obj) === '[object Array]';
}

exports.isArray = isArray;

function isString(obj) {
  return ObjProto.toString.call(obj) === '[object String]';
}

exports.isString = isString;

function isObject(obj) {
  return ObjProto.toString.call(obj) === '[object Object]';
}

exports.isObject = isObject;

function groupBy(obj, val) {
  var result = {};
  var iterator = isFunction(val) ? val : function (o) {
    return o[val];
  };

  for (var i = 0; i < obj.length; i++) {
    var value = obj[i];
    var key = iterator(value, i);
    (result[key] || (result[key] = [])).push(value);
  }

  return result;
}

exports.groupBy = groupBy;

function toArray(obj) {
  return Array.prototype.slice.call(obj);
}

exports.toArray = toArray;

function without(array) {
  var result = [];

  if (!array) {
    return result;
  }

  var length = array.length;
  var contains = toArray(arguments).slice(1);
  var index = -1;

  while (++index < length) {
    if (indexOf(contains, array[index]) === -1) {
      result.push(array[index]);
    }
  }

  return result;
}

exports.without = without;

function repeat(char_, n) {
  var str = '';

  for (var i = 0; i < n; i++) {
    str += char_;
  }

  return str;
}

exports.repeat = repeat;

function each(obj, func, context) {
  if (obj == null) {
    return;
  }

  if (ArrayProto.forEach && obj.forEach === ArrayProto.forEach) {
    obj.forEach(func, context);
  } else if (obj.length === +obj.length) {
    for (var i = 0, l = obj.length; i < l; i++) {
      func.call(context, obj[i], i, obj);
    }
  }
}

exports.each = each;

function map(obj, func) {
  var results = [];

  if (obj == null) {
    return results;
  }

  if (ArrayProto.map && obj.map === ArrayProto.map) {
    return obj.map(func);
  }

  for (var i = 0; i < obj.length; i++) {
    results[results.length] = func(obj[i], i);
  }

  if (obj.length === +obj.length) {
    results.length = obj.length;
  }

  return results;
}

exports.map = map;

function asyncIter(arr, iter, cb) {
  var i = -1;

  function next() {
    i++;

    if (i < arr.length) {
      iter(arr[i], i, next, cb);
    } else {
      cb();
    }
  }

  next();
}

exports.asyncIter = asyncIter;

function asyncFor(obj, iter, cb) {
  var keys = keys_(obj || {});
  var len = keys.length;
  var i = -1;

  function next() {
    i++;
    var k = keys[i];

    if (i < len) {
      iter(k, obj[k], i, len, next);
    } else {
      cb();
    }
  }

  next();
}

exports.asyncFor = asyncFor;

function indexOf(arr, searchElement, fromIndex) {
  return Array.prototype.indexOf.call(arr || [], searchElement, fromIndex);
}

exports.indexOf = indexOf;

function keys_(obj) {
  /* eslint-disable no-restricted-syntax */
  var arr = [];

  for (var k in obj) {
    if (hasOwnProp(obj, k)) {
      arr.push(k);
    }
  }

  return arr;
}

exports.keys = keys_;

function _entries(obj) {
  return keys_(obj).map(function (k) {
    return [k, obj[k]];
  });
}

exports._entries = _entries;

function _values(obj) {
  return keys_(obj).map(function (k) {
    return obj[k];
  });
}

exports._values = _values;

function extend(obj1, obj2) {
  obj1 = obj1 || {};
  keys_(obj2).forEach(function (k) {
    obj1[k] = obj2[k];
  });
  return obj1;
}

exports._assign = exports.extend = extend;

function inOperator(key, val) {
  if (isArray(val) || isString(val)) {
    return val.indexOf(key) !== -1;
  } else if (isObject(val)) {
    return key in val;
  }

  throw new Error('Cannot use "in" operator to search for "' + key + '" in unexpected types.');
}

exports.inOperator = inOperator;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var lib = __webpack_require__(1);

var arrayFrom = Array.from;
var supportsIterators = typeof Symbol === 'function' && Symbol.iterator && typeof arrayFrom === 'function'; // Frames keep track of scoping both at compile-time and run-time so
// we know how to access variables. Block tags can introduce special
// variables, for example.

var Frame =
/*#__PURE__*/
function () {
  function Frame(parent, isolateWrites) {
    this.variables = {};
    this.parent = parent;
    this.topLevel = false; // if this is true, writes (set) should never propagate upwards past
    // this frame to its parent (though reads may).

    this.isolateWrites = isolateWrites;
  }

  var _proto = Frame.prototype;

  _proto.set = function set(name, val, resolveUp) {
    // Allow variables with dots by automatically creating the
    // nested structure
    var parts = name.split('.');
    var obj = this.variables;
    var frame = this;

    if (resolveUp) {
      if (frame = this.resolve(parts[0], true)) {
        frame.set(name, val);
        return;
      }
    }

    for (var i = 0; i < parts.length - 1; i++) {
      var id = parts[i];

      if (!obj[id]) {
        obj[id] = {};
      }

      obj = obj[id];
    }

    obj[parts[parts.length - 1]] = val;
  };

  _proto.get = function get(name) {
    var val = this.variables[name];

    if (val !== undefined) {
      return val;
    }

    return null;
  };

  _proto.lookup = function lookup(name) {
    var p = this.parent;
    var val = this.variables[name];

    if (val !== undefined) {
      return val;
    }

    return p && p.lookup(name);
  };

  _proto.resolve = function resolve(name, forWrite) {
    var p = forWrite && this.isolateWrites ? undefined : this.parent;
    var val = this.variables[name];

    if (val !== undefined) {
      return this;
    }

    return p && p.resolve(name);
  };

  _proto.push = function push(isolateWrites) {
    return new Frame(this, isolateWrites);
  };

  _proto.pop = function pop() {
    return this.parent;
  };

  return Frame;
}();

function makeMacro(argNames, kwargNames, func) {
  var _this = this;

  return function () {
    for (var _len = arguments.length, macroArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      macroArgs[_key] = arguments[_key];
    }

    var argCount = numArgs(macroArgs);
    var args;
    var kwargs = getKeywordArgs(macroArgs);

    if (argCount > argNames.length) {
      args = macroArgs.slice(0, argNames.length); // Positional arguments that should be passed in as
      // keyword arguments (essentially default values)

      macroArgs.slice(args.length, argCount).forEach(function (val, i) {
        if (i < kwargNames.length) {
          kwargs[kwargNames[i]] = val;
        }
      });
      args.push(kwargs);
    } else if (argCount < argNames.length) {
      args = macroArgs.slice(0, argCount);

      for (var i = argCount; i < argNames.length; i++) {
        var arg = argNames[i]; // Keyword arguments that should be passed as
        // positional arguments, i.e. the caller explicitly
        // used the name of a positional arg

        args.push(kwargs[arg]);
        delete kwargs[arg];
      }

      args.push(kwargs);
    } else {
      args = macroArgs;
    }

    return func.apply(_this, args);
  };
}

function makeKeywordArgs(obj) {
  obj.__keywords = true;
  return obj;
}

function isKeywordArgs(obj) {
  return obj && Object.prototype.hasOwnProperty.call(obj, '__keywords');
}

function getKeywordArgs(args) {
  var len = args.length;

  if (len) {
    var lastArg = args[len - 1];

    if (isKeywordArgs(lastArg)) {
      return lastArg;
    }
  }

  return {};
}

function numArgs(args) {
  var len = args.length;

  if (len === 0) {
    return 0;
  }

  var lastArg = args[len - 1];

  if (isKeywordArgs(lastArg)) {
    return len - 1;
  } else {
    return len;
  }
} // A SafeString object indicates that the string should not be
// autoescaped. This happens magically because autoescaping only
// occurs on primitive string objects.


function SafeString(val) {
  if (typeof val !== 'string') {
    return val;
  }

  this.val = val;
  this.length = val.length;
}

SafeString.prototype = Object.create(String.prototype, {
  length: {
    writable: true,
    configurable: true,
    value: 0
  }
});

SafeString.prototype.valueOf = function valueOf() {
  return this.val;
};

SafeString.prototype.toString = function toString() {
  return this.val;
};

function copySafeness(dest, target) {
  if (dest instanceof SafeString) {
    return new SafeString(target);
  }

  return target.toString();
}

function markSafe(val) {
  var type = typeof val;

  if (type === 'string') {
    return new SafeString(val);
  } else if (type !== 'function') {
    return val;
  } else {
    return function wrapSafe(args) {
      var ret = val.apply(this, arguments);

      if (typeof ret === 'string') {
        return new SafeString(ret);
      }

      return ret;
    };
  }
}

function suppressValue(val, autoescape) {
  val = val !== undefined && val !== null ? val : '';

  if (autoescape && !(val instanceof SafeString)) {
    val = lib.escape(val.toString());
  }

  return val;
}

function ensureDefined(val, lineno, colno) {
  if (val === null || val === undefined) {
    throw new lib.TemplateError('attempted to output null or undefined value', lineno + 1, colno + 1);
  }

  return val;
}

function memberLookup(obj, val) {
  if (obj === undefined || obj === null) {
    return undefined;
  }

  if (typeof obj[val] === 'function') {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return obj[val].apply(obj, args);
    };
  }

  return obj[val];
}

function callWrap(obj, name, context, args) {
  if (!obj) {
    throw new Error('Unable to call `' + name + '`, which is undefined or falsey');
  } else if (typeof obj !== 'function') {
    throw new Error('Unable to call `' + name + '`, which is not a function');
  }

  return obj.apply(context, args);
}

function contextOrFrameLookup(context, frame, name) {
  var val = frame.lookup(name);
  return val !== undefined ? val : context.lookup(name);
}

function handleError(error, lineno, colno) {
  if (error.lineno) {
    return error;
  } else {
    return new lib.TemplateError(error, lineno, colno);
  }
}

function asyncEach(arr, dimen, iter, cb) {
  if (lib.isArray(arr)) {
    var len = arr.length;
    lib.asyncIter(arr, function iterCallback(item, i, next) {
      switch (dimen) {
        case 1:
          iter(item, i, len, next);
          break;

        case 2:
          iter(item[0], item[1], i, len, next);
          break;

        case 3:
          iter(item[0], item[1], item[2], i, len, next);
          break;

        default:
          item.push(i, len, next);
          iter.apply(this, item);
      }
    }, cb);
  } else {
    lib.asyncFor(arr, function iterCallback(key, val, i, len, next) {
      iter(key, val, i, len, next);
    }, cb);
  }
}

function asyncAll(arr, dimen, func, cb) {
  var finished = 0;
  var len;
  var outputArr;

  function done(i, output) {
    finished++;
    outputArr[i] = output;

    if (finished === len) {
      cb(null, outputArr.join(''));
    }
  }

  if (lib.isArray(arr)) {
    len = arr.length;
    outputArr = new Array(len);

    if (len === 0) {
      cb(null, '');
    } else {
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];

        switch (dimen) {
          case 1:
            func(item, i, len, done);
            break;

          case 2:
            func(item[0], item[1], i, len, done);
            break;

          case 3:
            func(item[0], item[1], item[2], i, len, done);
            break;

          default:
            item.push(i, len, done);
            func.apply(this, item);
        }
      }
    }
  } else {
    var keys = lib.keys(arr || {});
    len = keys.length;
    outputArr = new Array(len);

    if (len === 0) {
      cb(null, '');
    } else {
      for (var _i = 0; _i < keys.length; _i++) {
        var k = keys[_i];
        func(k, arr[k], _i, len, done);
      }
    }
  }
}

function fromIterator(arr) {
  if (typeof arr !== 'object' || arr === null || lib.isArray(arr)) {
    return arr;
  } else if (supportsIterators && Symbol.iterator in arr) {
    return arrayFrom(arr);
  } else {
    return arr;
  }
}

module.exports = {
  Frame: Frame,
  makeMacro: makeMacro,
  makeKeywordArgs: makeKeywordArgs,
  numArgs: numArgs,
  suppressValue: suppressValue,
  ensureDefined: ensureDefined,
  memberLookup: memberLookup,
  contextOrFrameLookup: contextOrFrameLookup,
  callWrap: callWrap,
  handleError: handleError,
  isArray: lib.isArray,
  keys: lib.keys,
  SafeString: SafeString,
  copySafeness: copySafeness,
  markSafe: markSafe,
  asyncEach: asyncEach,
  asyncAll: asyncAll,
  inOperator: lib.inOperator,
  fromIterator: fromIterator
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Loader = __webpack_require__(4);

var PrecompiledLoader =
/*#__PURE__*/
function (_Loader) {
  _inheritsLoose(PrecompiledLoader, _Loader);

  function PrecompiledLoader(compiledTemplates) {
    var _this;

    _this = _Loader.call(this) || this;
    _this.precompiled = compiledTemplates || {};
    return _this;
  }

  var _proto = PrecompiledLoader.prototype;

  _proto.getSource = function getSource(name) {
    if (this.precompiled[name]) {
      return {
        src: {
          type: 'code',
          obj: this.precompiled[name]
        },
        path: name
      };
    }

    return null;
  };

  return PrecompiledLoader;
}(Loader);

module.exports = {
  PrecompiledLoader: PrecompiledLoader
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var path = __webpack_require__(0);

var Obj = __webpack_require__(5);

module.exports =
/*#__PURE__*/
function (_Obj) {
  _inheritsLoose(Loader, _Obj);

  function Loader() {
    return _Obj.apply(this, arguments) || this;
  }

  var _proto = Loader.prototype;

  _proto.on = function on(name, func) {
    this.listeners = this.listeners || {};
    this.listeners[name] = this.listeners[name] || [];
    this.listeners[name].push(func);
  };

  _proto.emit = function emit(name) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (this.listeners && this.listeners[name]) {
      this.listeners[name].forEach(function (listener) {
        listener.apply(void 0, args);
      });
    }
  };

  _proto.resolve = function resolve(from, to) {
    return path.resolve(path.dirname(from), to);
  };

  _proto.isRelative = function isRelative(filename) {
    return filename.indexOf('./') === 0 || filename.indexOf('../') === 0;
  };

  return Loader;
}(Obj);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // A simple class system, more documentation to come

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var lib = __webpack_require__(1);

function parentWrap(parent, prop) {
  if (typeof parent !== 'function' || typeof prop !== 'function') {
    return prop;
  }

  return function wrap() {
    // Save the current parent method
    var tmp = this.parent; // Set parent to the previous method, call, and restore

    this.parent = parent;
    var res = prop.apply(this, arguments);
    this.parent = tmp;
    return res;
  };
}

function extendClass(cls, name, props) {
  props = props || {};
  lib.keys(props).forEach(function (k) {
    props[k] = parentWrap(cls.prototype[k], props[k]);
  });

  var subclass =
  /*#__PURE__*/
  function (_cls) {
    _inheritsLoose(subclass, _cls);

    function subclass() {
      return _cls.apply(this, arguments) || this;
    }

    _createClass(subclass, [{
      key: "typename",
      get: function get() {
        return name;
      }
    }]);

    return subclass;
  }(cls);

  lib._assign(subclass.prototype, props);

  return subclass;
}

var Obj =
/*#__PURE__*/
function () {
  function Obj() {
    // Unfortunately necessary for backwards compatibility
    this.init.apply(this, arguments);
  }

  var _proto = Obj.prototype;

  _proto.init = function init() {};

  Obj.extend = function extend(name, props) {
    if (typeof name === 'object') {
      props = name;
      name = 'anonymous';
    }

    return extendClass(this, name, props);
  };

  _createClass(Obj, [{
    key: "typename",
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return Obj;
}();

module.exports = Obj;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var lib = __webpack_require__(1);

var _require = __webpack_require__(7),
    Environment = _require.Environment,
    Template = _require.Template;

var Loader = __webpack_require__(4);

var loaders = __webpack_require__(3);

var precompile = __webpack_require__(0);

var compiler = __webpack_require__(0);

var parser = __webpack_require__(0);

var lexer = __webpack_require__(0);

var runtime = __webpack_require__(2);

var nodes = __webpack_require__(0);

var installJinjaCompat = __webpack_require__(16); // A single instance of an environment, since this is so commonly used


var e;

function configure(templatesPath, opts) {
  opts = opts || {};

  if (lib.isObject(templatesPath)) {
    opts = templatesPath;
    templatesPath = null;
  }

  var TemplateLoader;

  if (loaders.FileSystemLoader) {
    TemplateLoader = new loaders.FileSystemLoader(templatesPath, {
      watch: opts.watch,
      noCache: opts.noCache
    });
  } else if (loaders.WebLoader) {
    TemplateLoader = new loaders.WebLoader(templatesPath, {
      useCache: opts.web && opts.web.useCache,
      async: opts.web && opts.web.async
    });
  }

  e = new Environment(TemplateLoader, opts);

  if (opts && opts.express) {
    e.express(opts.express);
  }

  return e;
}

module.exports = {
  Environment: Environment,
  Template: Template,
  Loader: Loader,
  FileSystemLoader: loaders.FileSystemLoader,
  PrecompiledLoader: loaders.PrecompiledLoader,
  WebLoader: loaders.WebLoader,
  compiler: compiler,
  parser: parser,
  lexer: lexer,
  runtime: runtime,
  lib: lib,
  nodes: nodes,
  installJinjaCompat: installJinjaCompat,
  configure: configure,
  compile: function compile(src, env, path, eagerCompile) {
    if (!e) {
      configure();
    }

    return new Template(src, env, path, eagerCompile);
  },
  render: function render(name, ctx, cb) {
    if (!e) {
      configure();
    }

    return e.render(name, ctx, cb);
  },
  renderString: function renderString(src, ctx, cb) {
    if (!e) {
      configure();
    }

    return e.renderString(src, ctx, cb);
  },
  precompile: precompile ? precompile.precompile : undefined,
  precompileString: precompile ? precompile.precompileString : undefined
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var asap = __webpack_require__(8);

var _waterfall = __webpack_require__(11);

var lib = __webpack_require__(1);

var compiler = __webpack_require__(0);

var filters = __webpack_require__(12);

var _require = __webpack_require__(3),
    FileSystemLoader = _require.FileSystemLoader,
    WebLoader = _require.WebLoader,
    PrecompiledLoader = _require.PrecompiledLoader;

var tests = __webpack_require__(13);

var globals = __webpack_require__(14);

var Obj = __webpack_require__(5);

var globalRuntime = __webpack_require__(2);

var handleError = globalRuntime.handleError,
    Frame = globalRuntime.Frame;

var expressApp = __webpack_require__(15); // If the user is using the async API, *always* call it
// asynchronously even if the template was synchronous.


function callbackAsap(cb, err, res) {
  asap(function () {
    cb(err, res);
  });
}
/**
 * A no-op template, for use with {% include ignore missing %}
 */


var noopTmplSrc = {
  type: 'code',
  obj: {
    root: function root(env, context, frame, runtime, cb) {
      try {
        cb(null, '');
      } catch (e) {
        cb(handleError(e, null, null));
      }
    }
  }
};

var Environment =
/*#__PURE__*/
function (_Obj) {
  _inheritsLoose(Environment, _Obj);

  function Environment() {
    return _Obj.apply(this, arguments) || this;
  }

  var _proto = Environment.prototype;

  _proto.init = function init(loaders, opts) {
    var _this = this;

    // The dev flag determines the trace that'll be shown on errors.
    // If set to true, returns the full trace from the error point,
    // otherwise will return trace starting from Template.render
    // (the full trace from within nunjucks may confuse developers using
    //  the library)
    // defaults to false
    opts = this.opts = opts || {};
    this.opts.dev = !!opts.dev; // The autoescape flag sets global autoescaping. If true,
    // every string variable will be escaped by default.
    // If false, strings can be manually escaped using the `escape` filter.
    // defaults to true

    this.opts.autoescape = opts.autoescape != null ? opts.autoescape : true; // If true, this will make the system throw errors if trying
    // to output a null or undefined value

    this.opts.throwOnUndefined = !!opts.throwOnUndefined;
    this.opts.trimBlocks = !!opts.trimBlocks;
    this.opts.lstripBlocks = !!opts.lstripBlocks;
    this.loaders = [];

    if (!loaders) {
      // The filesystem loader is only available server-side
      if (FileSystemLoader) {
        this.loaders = [new FileSystemLoader('views')];
      } else if (WebLoader) {
        this.loaders = [new WebLoader('/views')];
      }
    } else {
      this.loaders = lib.isArray(loaders) ? loaders : [loaders];
    } // It's easy to use precompiled templates: just include them
    // before you configure nunjucks and this will automatically
    // pick it up and use it


    if (typeof window !== 'undefined' && window.nunjucksPrecompiled) {
      this.loaders.unshift(new PrecompiledLoader(window.nunjucksPrecompiled));
    }

    this.initCache();
    this.globals = globals();
    this.filters = {};
    this.tests = {};
    this.asyncFilters = [];
    this.extensions = {};
    this.extensionsList = [];

    lib._entries(filters).forEach(function (_ref) {
      var name = _ref[0],
          filter = _ref[1];
      return _this.addFilter(name, filter);
    });

    lib._entries(tests).forEach(function (_ref2) {
      var name = _ref2[0],
          test = _ref2[1];
      return _this.addTest(name, test);
    });
  };

  _proto.initCache = function initCache() {
    // Caching and cache busting
    this.loaders.forEach(function (loader) {
      loader.cache = {};

      if (typeof loader.on === 'function') {
        loader.on('update', function (template) {
          loader.cache[template] = null;
        });
      }
    });
  };

  _proto.addExtension = function addExtension(name, extension) {
    extension.__name = name;
    this.extensions[name] = extension;
    this.extensionsList.push(extension);
    return this;
  };

  _proto.removeExtension = function removeExtension(name) {
    var extension = this.getExtension(name);

    if (!extension) {
      return;
    }

    this.extensionsList = lib.without(this.extensionsList, extension);
    delete this.extensions[name];
  };

  _proto.getExtension = function getExtension(name) {
    return this.extensions[name];
  };

  _proto.hasExtension = function hasExtension(name) {
    return !!this.extensions[name];
  };

  _proto.addGlobal = function addGlobal(name, value) {
    this.globals[name] = value;
    return this;
  };

  _proto.getGlobal = function getGlobal(name) {
    if (typeof this.globals[name] === 'undefined') {
      throw new Error('global not found: ' + name);
    }

    return this.globals[name];
  };

  _proto.addFilter = function addFilter(name, func, async) {
    var wrapped = func;

    if (async) {
      this.asyncFilters.push(name);
    }

    this.filters[name] = wrapped;
    return this;
  };

  _proto.getFilter = function getFilter(name) {
    if (!this.filters[name]) {
      throw new Error('filter not found: ' + name);
    }

    return this.filters[name];
  };

  _proto.addTest = function addTest(name, func) {
    this.tests[name] = func;
    return this;
  };

  _proto.getTest = function getTest(name) {
    if (!this.tests[name]) {
      throw new Error('test not found: ' + name);
    }

    return this.tests[name];
  };

  _proto.resolveTemplate = function resolveTemplate(loader, parentName, filename) {
    var isRelative = loader.isRelative && parentName ? loader.isRelative(filename) : false;
    return isRelative && loader.resolve ? loader.resolve(parentName, filename) : filename;
  };

  _proto.getTemplate = function getTemplate(name, eagerCompile, parentName, ignoreMissing, cb) {
    var _this2 = this;

    var that = this;
    var tmpl = null;

    if (name && name.raw) {
      // this fixes autoescape for templates referenced in symbols
      name = name.raw;
    }

    if (lib.isFunction(parentName)) {
      cb = parentName;
      parentName = null;
      eagerCompile = eagerCompile || false;
    }

    if (lib.isFunction(eagerCompile)) {
      cb = eagerCompile;
      eagerCompile = false;
    }

    if (name instanceof Template) {
      tmpl = name;
    } else if (typeof name !== 'string') {
      throw new Error('template names must be a string: ' + name);
    } else {
      for (var i = 0; i < this.loaders.length; i++) {
        var loader = this.loaders[i];
        tmpl = loader.cache[this.resolveTemplate(loader, parentName, name)];

        if (tmpl) {
          break;
        }
      }
    }

    if (tmpl) {
      if (eagerCompile) {
        tmpl.compile();
      }

      if (cb) {
        cb(null, tmpl);
        return undefined;
      } else {
        return tmpl;
      }
    }

    var syncResult;

    var createTemplate = function createTemplate(err, info) {
      if (!info && !err && !ignoreMissing) {
        err = new Error('template not found: ' + name);
      }

      if (err) {
        if (cb) {
          cb(err);
        } else {
          throw err;
        }
      } else {
        info = info || {
          src: noopTmplSrc,
          path: ''
        };
        var newTmpl = new Template(info.src, _this2, info.path, eagerCompile);

        if (cb) {
          cb(null, newTmpl);
        } else {
          syncResult = newTmpl;
        }
      }
    };

    lib.asyncIter(this.loaders, function (loader, i, next, done) {
      function handle(err, src) {
        if (err) {
          done(err);
        } else if (src) {
          src.loader = loader;
          done(null, src);
        } else {
          next();
        }
      } // Resolve name relative to parentName


      name = that.resolveTemplate(loader, parentName, name);

      if (loader.async) {
        loader.getSource(name, handle);
      } else {
        handle(null, loader.getSource(name));
      }
    }, createTemplate);
    return syncResult;
  };

  _proto.express = function express(app) {
    return expressApp(this, app);
  };

  _proto.render = function render(name, ctx, cb) {
    if (lib.isFunction(ctx)) {
      cb = ctx;
      ctx = null;
    } // We support a synchronous API to make it easier to migrate
    // existing code to async. This works because if you don't do
    // anything async work, the whole thing is actually run
    // synchronously.


    var syncResult = null;
    this.getTemplate(name, function (err, tmpl) {
      if (err && cb) {
        callbackAsap(cb, err);
      } else if (err) {
        throw err;
      } else {
        syncResult = tmpl.render(ctx, cb);
      }
    });
    return syncResult;
  };

  _proto.renderString = function renderString(src, ctx, opts, cb) {
    if (lib.isFunction(opts)) {
      cb = opts;
      opts = {};
    }

    opts = opts || {};
    var tmpl = new Template(src, this, opts.path);
    return tmpl.render(ctx, cb);
  };

  _proto.waterfall = function waterfall(tasks, callback, forceAsync) {
    return _waterfall(tasks, callback, forceAsync);
  };

  return Environment;
}(Obj);

var Context =
/*#__PURE__*/
function (_Obj2) {
  _inheritsLoose(Context, _Obj2);

  function Context() {
    return _Obj2.apply(this, arguments) || this;
  }

  var _proto2 = Context.prototype;

  _proto2.init = function init(ctx, blocks, env) {
    var _this3 = this;

    // Has to be tied to an environment so we can tap into its globals.
    this.env = env || new Environment(); // Make a duplicate of ctx

    this.ctx = lib.extend({}, ctx);
    this.blocks = {};
    this.exported = [];
    lib.keys(blocks).forEach(function (name) {
      _this3.addBlock(name, blocks[name]);
    });
  };

  _proto2.lookup = function lookup(name) {
    // This is one of the most called functions, so optimize for
    // the typical case where the name isn't in the globals
    if (name in this.env.globals && !(name in this.ctx)) {
      return this.env.globals[name];
    } else {
      return this.ctx[name];
    }
  };

  _proto2.setVariable = function setVariable(name, val) {
    this.ctx[name] = val;
  };

  _proto2.getVariables = function getVariables() {
    return this.ctx;
  };

  _proto2.addBlock = function addBlock(name, block) {
    this.blocks[name] = this.blocks[name] || [];
    this.blocks[name].push(block);
    return this;
  };

  _proto2.getBlock = function getBlock(name) {
    if (!this.blocks[name]) {
      throw new Error('unknown block "' + name + '"');
    }

    return this.blocks[name][0];
  };

  _proto2.getSuper = function getSuper(env, name, block, frame, runtime, cb) {
    var idx = lib.indexOf(this.blocks[name] || [], block);
    var blk = this.blocks[name][idx + 1];
    var context = this;

    if (idx === -1 || !blk) {
      throw new Error('no super block available for "' + name + '"');
    }

    blk(env, context, frame, runtime, cb);
  };

  _proto2.addExport = function addExport(name) {
    this.exported.push(name);
  };

  _proto2.getExported = function getExported() {
    var _this4 = this;

    var exported = {};
    this.exported.forEach(function (name) {
      exported[name] = _this4.ctx[name];
    });
    return exported;
  };

  return Context;
}(Obj);

var Template =
/*#__PURE__*/
function (_Obj3) {
  _inheritsLoose(Template, _Obj3);

  function Template() {
    return _Obj3.apply(this, arguments) || this;
  }

  var _proto3 = Template.prototype;

  _proto3.init = function init(src, env, path, eagerCompile) {
    this.env = env || new Environment();

    if (lib.isObject(src)) {
      switch (src.type) {
        case 'code':
          this.tmplProps = src.obj;
          break;

        case 'string':
          this.tmplStr = src.obj;
          break;

        default:
          throw new Error("Unexpected template object type " + src.type + "; expected 'code', or 'string'");
      }
    } else if (lib.isString(src)) {
      this.tmplStr = src;
    } else {
      throw new Error('src must be a string or an object describing the source');
    }

    this.path = path;

    if (eagerCompile) {
      try {
        this._compile();
      } catch (err) {
        throw lib._prettifyError(this.path, this.env.opts.dev, err);
      }
    } else {
      this.compiled = false;
    }
  };

  _proto3.render = function render(ctx, parentFrame, cb) {
    var _this5 = this;

    if (typeof ctx === 'function') {
      cb = ctx;
      ctx = {};
    } else if (typeof parentFrame === 'function') {
      cb = parentFrame;
      parentFrame = null;
    } // If there is a parent frame, we are being called from internal
    // code of another template, and the internal system
    // depends on the sync/async nature of the parent template
    // to be inherited, so force an async callback


    var forceAsync = !parentFrame; // Catch compile errors for async rendering

    try {
      this.compile();
    } catch (e) {
      var err = lib._prettifyError(this.path, this.env.opts.dev, e);

      if (cb) {
        return callbackAsap(cb, err);
      } else {
        throw err;
      }
    }

    var context = new Context(ctx || {}, this.blocks, this.env);
    var frame = parentFrame ? parentFrame.push(true) : new Frame();
    frame.topLevel = true;
    var syncResult = null;
    var didError = false;
    this.rootRenderFunc(this.env, context, frame, globalRuntime, function (err, res) {
      if (didError) {
        // prevent multiple calls to cb
        return;
      }

      if (err) {
        err = lib._prettifyError(_this5.path, _this5.env.opts.dev, err);
        didError = true;
      }

      if (cb) {
        if (forceAsync) {
          callbackAsap(cb, err, res);
        } else {
          cb(err, res);
        }
      } else {
        if (err) {
          throw err;
        }

        syncResult = res;
      }
    });
    return syncResult;
  };

  _proto3.getExported = function getExported(ctx, parentFrame, cb) {
    // eslint-disable-line consistent-return
    if (typeof ctx === 'function') {
      cb = ctx;
      ctx = {};
    }

    if (typeof parentFrame === 'function') {
      cb = parentFrame;
      parentFrame = null;
    } // Catch compile errors for async rendering


    try {
      this.compile();
    } catch (e) {
      if (cb) {
        return cb(e);
      } else {
        throw e;
      }
    }

    var frame = parentFrame ? parentFrame.push() : new Frame();
    frame.topLevel = true; // Run the rootRenderFunc to populate the context with exported vars

    var context = new Context(ctx || {}, this.blocks, this.env);
    this.rootRenderFunc(this.env, context, frame, globalRuntime, function (err) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, context.getExported());
      }
    });
  };

  _proto3.compile = function compile() {
    if (!this.compiled) {
      this._compile();
    }
  };

  _proto3._compile = function _compile() {
    var props;

    if (this.tmplProps) {
      props = this.tmplProps;
    } else {
      var source = compiler.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts);
      var func = new Function(source); // eslint-disable-line no-new-func

      props = func();
    }

    this.blocks = this._getBlocks(props);
    this.rootRenderFunc = props.root;
    this.compiled = true;
  };

  _proto3._getBlocks = function _getBlocks(props) {
    var blocks = {};
    lib.keys(props).forEach(function (k) {
      if (k.slice(0, 2) === 'b_') {
        blocks[k.slice(2)] = props[k];
      }
    });
    return blocks;
  };

  return Template;
}(Obj);

module.exports = {
  Environment: Environment,
  Template: Template
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(9);
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// MIT license (by Elan Shanker).
(function(globals) {
  'use strict';

  var executeSync = function(){
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'function'){
      args[0].apply(null, args.splice(1));
    }
  };

  var executeAsync = function(fn){
    if (typeof setImmediate === 'function') {
      setImmediate(fn);
    } else if (typeof process !== 'undefined' && process.nextTick) {
      process.nextTick(fn);
    } else {
      setTimeout(fn, 0);
    }
  };

  var makeIterator = function (tasks) {
    var makeCallback = function (index) {
      var fn = function () {
        if (tasks.length) {
          tasks[index].apply(null, arguments);
        }
        return fn.next();
      };
      fn.next = function () {
        return (index < tasks.length - 1) ? makeCallback(index + 1): null;
      };
      return fn;
    };
    return makeCallback(0);
  };
  
  var _isArray = Array.isArray || function(maybeArray){
    return Object.prototype.toString.call(maybeArray) === '[object Array]';
  };

  var waterfall = function (tasks, callback, forceAsync) {
    var nextTick = forceAsync ? executeAsync : executeSync;
    callback = callback || function () {};
    if (!_isArray(tasks)) {
      var err = new Error('First argument to waterfall must be an array of functions');
      return callback(err);
    }
    if (!tasks.length) {
      return callback();
    }
    var wrapIterator = function (iterator) {
      return function (err) {
        if (err) {
          callback.apply(null, arguments);
          callback = function () {};
        } else {
          var args = Array.prototype.slice.call(arguments, 1);
          var next = iterator.next();
          if (next) {
            args.push(wrapIterator(next));
          } else {
            args.push(callback);
          }
          nextTick(function () {
            iterator.apply(null, args);
          });
        }
      };
    };
    wrapIterator(makeIterator(tasks))();
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return waterfall;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // RequireJS
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = waterfall; // CommonJS
  } else {
    globals.waterfall = waterfall; // <script>
  }
})(this);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var lib = __webpack_require__(1);

var r = __webpack_require__(2);

var exports = module.exports = {};

function normalize(value, defaultValue) {
  if (value === null || value === undefined || value === false) {
    return defaultValue;
  }

  return value;
}

exports.abs = Math.abs;

function isNaN(num) {
  return num !== num; // eslint-disable-line no-self-compare
}

function batch(arr, linecount, fillWith) {
  var i;
  var res = [];
  var tmp = [];

  for (i = 0; i < arr.length; i++) {
    if (i % linecount === 0 && tmp.length) {
      res.push(tmp);
      tmp = [];
    }

    tmp.push(arr[i]);
  }

  if (tmp.length) {
    if (fillWith) {
      for (i = tmp.length; i < linecount; i++) {
        tmp.push(fillWith);
      }
    }

    res.push(tmp);
  }

  return res;
}

exports.batch = batch;

function capitalize(str) {
  str = normalize(str, '');
  var ret = str.toLowerCase();
  return r.copySafeness(str, ret.charAt(0).toUpperCase() + ret.slice(1));
}

exports.capitalize = capitalize;

function center(str, width) {
  str = normalize(str, '');
  width = width || 80;

  if (str.length >= width) {
    return str;
  }

  var spaces = width - str.length;
  var pre = lib.repeat(' ', spaces / 2 - spaces % 2);
  var post = lib.repeat(' ', spaces / 2);
  return r.copySafeness(str, pre + str + post);
}

exports.center = center;

function default_(val, def, bool) {
  if (bool) {
    return val || def;
  } else {
    return val !== undefined ? val : def;
  }
} // TODO: it is confusing to export something called 'default'


exports['default'] = default_; // eslint-disable-line dot-notation

function dictsort(val, caseSensitive, by) {
  if (!lib.isObject(val)) {
    throw new lib.TemplateError('dictsort filter: val must be an object');
  }

  var array = []; // deliberately include properties from the object's prototype

  for (var k in val) {
    // eslint-disable-line guard-for-in, no-restricted-syntax
    array.push([k, val[k]]);
  }

  var si;

  if (by === undefined || by === 'key') {
    si = 0;
  } else if (by === 'value') {
    si = 1;
  } else {
    throw new lib.TemplateError('dictsort filter: You can only sort by either key or value');
  }

  array.sort(function (t1, t2) {
    var a = t1[si];
    var b = t2[si];

    if (!caseSensitive) {
      if (lib.isString(a)) {
        a = a.toUpperCase();
      }

      if (lib.isString(b)) {
        b = b.toUpperCase();
      }
    }

    return a > b ? 1 : a === b ? 0 : -1; // eslint-disable-line no-nested-ternary
  });
  return array;
}

exports.dictsort = dictsort;

function dump(obj, spaces) {
  return JSON.stringify(obj, null, spaces);
}

exports.dump = dump;

function escape(str) {
  if (str instanceof r.SafeString) {
    return str;
  }

  str = str === null || str === undefined ? '' : str;
  return r.markSafe(lib.escape(str.toString()));
}

exports.escape = escape;

function safe(str) {
  if (str instanceof r.SafeString) {
    return str;
  }

  str = str === null || str === undefined ? '' : str;
  return r.markSafe(str.toString());
}

exports.safe = safe;

function first(arr) {
  return arr[0];
}

exports.first = first;

function groupby(arr, attr) {
  return lib.groupBy(arr, attr);
}

exports.groupby = groupby;

function indent(str, width, indentfirst) {
  str = normalize(str, '');

  if (str === '') {
    return '';
  }

  width = width || 4; // let res = '';

  var lines = str.split('\n');
  var sp = lib.repeat(' ', width);
  var res = lines.map(function (l, i) {
    return i === 0 && !indentfirst ? l + "\n" : "" + sp + l + "\n";
  }).join('');
  return r.copySafeness(str, res);
}

exports.indent = indent;

function join(arr, del, attr) {
  del = del || '';

  if (attr) {
    arr = lib.map(arr, function (v) {
      return v[attr];
    });
  }

  return arr.join(del);
}

exports.join = join;

function last(arr) {
  return arr[arr.length - 1];
}

exports.last = last;

function lengthFilter(val) {
  var value = normalize(val, '');

  if (value !== undefined) {
    if (typeof Map === 'function' && value instanceof Map || typeof Set === 'function' && value instanceof Set) {
      // ECMAScript 2015 Maps and Sets
      return value.size;
    }

    if (lib.isObject(value) && !(value instanceof r.SafeString)) {
      // Objects (besides SafeStrings), non-primative Arrays
      return lib.keys(value).length;
    }

    return value.length;
  }

  return 0;
}

exports.length = lengthFilter;

function list(val) {
  if (lib.isString(val)) {
    return val.split('');
  } else if (lib.isObject(val)) {
    return lib._entries(val || {}).map(function (_ref) {
      var key = _ref[0],
          value = _ref[1];
      return {
        key: key,
        value: value
      };
    });
  } else if (lib.isArray(val)) {
    return val;
  } else {
    throw new lib.TemplateError('list filter: type not iterable');
  }
}

exports.list = list;

function lower(str) {
  str = normalize(str, '');
  return str.toLowerCase();
}

exports.lower = lower;

function nl2br(str) {
  if (str === null || str === undefined) {
    return '';
  }

  return r.copySafeness(str, str.replace(/\r\n|\n/g, '<br />\n'));
}

exports.nl2br = nl2br;

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

exports.random = random;

function rejectattr(arr, attr) {
  return arr.filter(function (item) {
    return !item[attr];
  });
}

exports.rejectattr = rejectattr;

function selectattr(arr, attr) {
  return arr.filter(function (item) {
    return !!item[attr];
  });
}

exports.selectattr = selectattr;

function replace(str, old, new_, maxCount) {
  var originalStr = str;

  if (old instanceof RegExp) {
    return str.replace(old, new_);
  }

  if (typeof maxCount === 'undefined') {
    maxCount = -1;
  }

  var res = ''; // Output
  // Cast Numbers in the search term to string

  if (typeof old === 'number') {
    old = '' + old;
  } else if (typeof old !== 'string') {
    // If it is something other than number or string,
    // return the original string
    return str;
  } // Cast numbers in the replacement to string


  if (typeof str === 'number') {
    str = '' + str;
  } // If by now, we don't have a string, throw it back


  if (typeof str !== 'string' && !(str instanceof r.SafeString)) {
    return str;
  } // ShortCircuits


  if (old === '') {
    // Mimic the python behaviour: empty string is replaced
    // by replacement e.g. "abc"|replace("", ".") -> .a.b.c.
    res = new_ + str.split('').join(new_) + new_;
    return r.copySafeness(str, res);
  }

  var nextIndex = str.indexOf(old); // if # of replacements to perform is 0, or the string to does
  // not contain the old value, return the string

  if (maxCount === 0 || nextIndex === -1) {
    return str;
  }

  var pos = 0;
  var count = 0; // # of replacements made

  while (nextIndex > -1 && (maxCount === -1 || count < maxCount)) {
    // Grab the next chunk of src string and add it with the
    // replacement, to the result
    res += str.substring(pos, nextIndex) + new_; // Increment our pointer in the src string

    pos = nextIndex + old.length;
    count++; // See if there are any more replacements to be made

    nextIndex = str.indexOf(old, pos);
  } // We've either reached the end, or done the max # of
  // replacements, tack on any remaining string


  if (pos < str.length) {
    res += str.substring(pos);
  }

  return r.copySafeness(originalStr, res);
}

exports.replace = replace;

function reverse(val) {
  var arr;

  if (lib.isString(val)) {
    arr = list(val);
  } else {
    // Copy it
    arr = lib.map(val, function (v) {
      return v;
    });
  }

  arr.reverse();

  if (lib.isString(val)) {
    return r.copySafeness(val, arr.join(''));
  }

  return arr;
}

exports.reverse = reverse;

function round(val, precision, method) {
  precision = precision || 0;
  var factor = Math.pow(10, precision);
  var rounder;

  if (method === 'ceil') {
    rounder = Math.ceil;
  } else if (method === 'floor') {
    rounder = Math.floor;
  } else {
    rounder = Math.round;
  }

  return rounder(val * factor) / factor;
}

exports.round = round;

function slice(arr, slices, fillWith) {
  var sliceLength = Math.floor(arr.length / slices);
  var extra = arr.length % slices;
  var res = [];
  var offset = 0;

  for (var i = 0; i < slices; i++) {
    var start = offset + i * sliceLength;

    if (i < extra) {
      offset++;
    }

    var end = offset + (i + 1) * sliceLength;
    var currSlice = arr.slice(start, end);

    if (fillWith && i >= extra) {
      currSlice.push(fillWith);
    }

    res.push(currSlice);
  }

  return res;
}

exports.slice = slice;

function sum(arr, attr, start) {
  if (start === void 0) {
    start = 0;
  }

  if (attr) {
    arr = lib.map(arr, function (v) {
      return v[attr];
    });
  }

  return start + arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

exports.sum = sum;
exports.sort = r.makeMacro(['value', 'reverse', 'case_sensitive', 'attribute'], [], function (arr, reversed, caseSens, attr) {
  // Copy it
  var array = lib.map(arr, function (v) {
    return v;
  });
  array.sort(function (a, b) {
    var x = attr ? a[attr] : a;
    var y = attr ? b[attr] : b;

    if (!caseSens && lib.isString(x) && lib.isString(y)) {
      x = x.toLowerCase();
      y = y.toLowerCase();
    }

    if (x < y) {
      return reversed ? 1 : -1;
    } else if (x > y) {
      return reversed ? -1 : 1;
    } else {
      return 0;
    }
  });
  return array;
});

function string(obj) {
  return r.copySafeness(obj, obj);
}

exports.string = string;

function striptags(input, preserveLinebreaks) {
  input = normalize(input, '');
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi;
  var trimmedInput = trim(input.replace(tags, ''));
  var res = '';

  if (preserveLinebreaks) {
    res = trimmedInput.replace(/^ +| +$/gm, '') // remove leading and trailing spaces
    .replace(/ +/g, ' ') // squash adjacent spaces
    .replace(/(\r\n)/g, '\n') // normalize linebreaks (CRLF -> LF)
    .replace(/\n\n\n+/g, '\n\n'); // squash abnormal adjacent linebreaks
  } else {
    res = trimmedInput.replace(/\s+/gi, ' ');
  }

  return r.copySafeness(input, res);
}

exports.striptags = striptags;

function title(str) {
  str = normalize(str, '');
  var words = str.split(' ').map(function (word) {
    return capitalize(word);
  });
  return r.copySafeness(str, words.join(' '));
}

exports.title = title;

function trim(str) {
  return r.copySafeness(str, str.replace(/^\s*|\s*$/g, ''));
}

exports.trim = trim;

function truncate(input, length, killwords, end) {
  var orig = input;
  input = normalize(input, '');
  length = length || 255;

  if (input.length <= length) {
    return input;
  }

  if (killwords) {
    input = input.substring(0, length);
  } else {
    var idx = input.lastIndexOf(' ', length);

    if (idx === -1) {
      idx = length;
    }

    input = input.substring(0, idx);
  }

  input += end !== undefined && end !== null ? end : '...';
  return r.copySafeness(orig, input);
}

exports.truncate = truncate;

function upper(str) {
  str = normalize(str, '');
  return str.toUpperCase();
}

exports.upper = upper;

function urlencode(obj) {
  var enc = encodeURIComponent;

  if (lib.isString(obj)) {
    return enc(obj);
  } else {
    var keyvals = lib.isArray(obj) ? obj : lib._entries(obj);
    return keyvals.map(function (_ref2) {
      var k = _ref2[0],
          v = _ref2[1];
      return enc(k) + "=" + enc(v);
    }).join('&');
  }
}

exports.urlencode = urlencode; // For the jinja regexp, see
// https://github.com/mitsuhiko/jinja2/blob/f15b814dcba6aa12bc74d1f7d0c881d55f7126be/jinja2/utils.py#L20-L23

var puncRe = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/; // from http://blog.gerv.net/2011/05/html5_email_address_regexp/

var emailRe = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i;
var httpHttpsRe = /^https?:\/\/.*$/;
var wwwRe = /^www\./;
var tldRe = /\.(?:org|net|com)(?:\:|\/|$)/;

function urlize(str, length, nofollow) {
  if (isNaN(length)) {
    length = Infinity;
  }

  var noFollowAttr = nofollow === true ? ' rel="nofollow"' : '';
  var words = str.split(/(\s+)/).filter(function (word) {
    // If the word has no length, bail. This can happen for str with
    // trailing whitespace.
    return word && word.length;
  }).map(function (word) {
    var matches = word.match(puncRe);
    var possibleUrl = matches ? matches[1] : word;
    var shortUrl = possibleUrl.substr(0, length); // url that starts with http or https

    if (httpHttpsRe.test(possibleUrl)) {
      return "<a href=\"" + possibleUrl + "\"" + noFollowAttr + ">" + shortUrl + "</a>";
    } // url that starts with www.


    if (wwwRe.test(possibleUrl)) {
      return "<a href=\"http://" + possibleUrl + "\"" + noFollowAttr + ">" + shortUrl + "</a>";
    } // an email address of the form username@domain.tld


    if (emailRe.test(possibleUrl)) {
      return "<a href=\"mailto:" + possibleUrl + "\">" + possibleUrl + "</a>";
    } // url that ends in .com, .org or .net that is not an email address


    if (tldRe.test(possibleUrl)) {
      return "<a href=\"http://" + possibleUrl + "\"" + noFollowAttr + ">" + shortUrl + "</a>";
    }

    return word;
  });
  return words.join('');
}

exports.urlize = urlize;

function wordcount(str) {
  str = normalize(str, '');
  var words = str ? str.match(/\w+/g) : null;
  return words ? words.length : null;
}

exports.wordcount = wordcount;

function float(val, def) {
  var res = parseFloat(val);
  return isNaN(res) ? def : res;
}

exports.float = float;

function int(val, def) {
  var res = parseInt(val, 10);
  return isNaN(res) ? def : res;
}

exports.int = int; // Aliases

exports.d = exports.default;
exports.e = exports.escape;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SafeString = __webpack_require__(2).SafeString;
/**
 * Returns `true` if the object is a function, otherwise `false`.
 * @param { any } value
 * @returns { boolean }
 */


function callable(value) {
  return typeof value === 'function';
}

exports.callable = callable;
/**
 * Returns `true` if the object is strictly not `undefined`.
 * @param { any } value
 * @returns { boolean }
 */

function defined(value) {
  return value !== undefined;
}

exports.defined = defined;
/**
 * Returns `true` if the operand (one) is divisble by the test's argument
 * (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */

function divisibleby(one, two) {
  return one % two === 0;
}

exports.divisibleby = divisibleby;
/**
 * Returns true if the string has been escaped (i.e., is a SafeString).
 * @param { any } value
 * @returns { boolean }
 */

function escaped(value) {
  return value instanceof SafeString;
}

exports.escaped = escaped;
/**
 * Returns `true` if the arguments are strictly equal.
 * @param { any } one
 * @param { any } two
 */

function equalto(one, two) {
  return one === two;
}

exports.equalto = equalto; // Aliases

exports.eq = exports.equalto;
exports.sameas = exports.equalto;
/**
 * Returns `true` if the value is evenly divisible by 2.
 * @param { number } value
 * @returns { boolean }
 */

function even(value) {
  return value % 2 === 0;
}

exports.even = even;
/**
 * Returns `true` if the value is falsy - if I recall correctly, '', 0, false,
 * undefined, NaN or null. I don't know if we should stick to the default JS
 * behavior or attempt to replicate what Python believes should be falsy (i.e.,
 * empty arrays, empty dicts, not 0...).
 * @param { any } value
 * @returns { boolean }
 */

function falsy(value) {
  return !value;
}

exports.falsy = falsy;
/**
 * Returns `true` if the operand (one) is greater or equal to the test's
 * argument (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */

function ge(one, two) {
  return one >= two;
}

exports.ge = ge;
/**
 * Returns `true` if the operand (one) is greater than the test's argument
 * (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */

function greaterthan(one, two) {
  return one > two;
}

exports.greaterthan = greaterthan; // alias

exports.gt = exports.greaterthan;
/**
 * Returns `true` if the operand (one) is less than or equal to the test's
 * argument (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */

function le(one, two) {
  return one <= two;
}

exports.le = le;
/**
 * Returns `true` if the operand (one) is less than the test's passed argument
 * (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */

function lessthan(one, two) {
  return one < two;
}

exports.lessthan = lessthan; // alias

exports.lt = exports.lessthan;
/**
 * Returns `true` if the string is lowercased.
 * @param { string } value
 * @returns { boolean }
 */

function lower(value) {
  return value.toLowerCase() === value;
}

exports.lower = lower;
/**
 * Returns `true` if the operand (one) is less than or equal to the test's
 * argument (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */

function ne(one, two) {
  return one !== two;
}

exports.ne = ne;
/**
 * Returns true if the value is strictly equal to `null`.
 * @param { any }
 * @returns { boolean }
 */

function nullTest(value) {
  return value === null;
}

exports.null = nullTest;
/**
 * Returns true if value is a number.
 * @param { any }
 * @returns { boolean }
 */

function number(value) {
  return typeof value === 'number';
}

exports.number = number;
/**
 * Returns `true` if the value is *not* evenly divisible by 2.
 * @param { number } value
 * @returns { boolean }
 */

function odd(value) {
  return value % 2 === 1;
}

exports.odd = odd;
/**
 * Returns `true` if the value is a string, `false` if not.
 * @param { any } value
 * @returns { boolean }
 */

function string(value) {
  return typeof value === 'string';
}

exports.string = string;
/**
 * Returns `true` if the value is not in the list of things considered falsy:
 * '', null, undefined, 0, NaN and false.
 * @param { any } value
 * @returns { boolean }
 */

function truthy(value) {
  return !!value;
}

exports.truthy = truthy;
/**
 * Returns `true` if the value is undefined.
 * @param { any } value
 * @returns { boolean }
 */

function undefinedTest(value) {
  return value === undefined;
}

exports.undefined = undefinedTest;
/**
 * Returns `true` if the string is uppercased.
 * @param { string } value
 * @returns { boolean }
 */

function upper(value) {
  return value.toUpperCase() === value;
}

exports.upper = upper;
/**
 * If ES6 features are available, returns `true` if the value implements the
 * `Symbol.iterator` method. If not, it's a string or Array.
 *
 * Could potentially cause issues if a browser exists that has Set and Map but
 * not Symbol.
 *
 * @param { any } value
 * @returns { boolean }
 */

function iterable(value) {
  if (typeof Symbol !== 'undefined') {
    return !!value[Symbol.iterator];
  } else {
    return Array.isArray(value) || typeof value === 'string';
  }
}

exports.iterable = iterable;
/**
 * If ES6 features are available, returns `true` if the value is an object hash
 * or an ES6 Map. Otherwise just return if it's an object hash.
 * @param { any } value
 * @returns { boolean }
 */

function mapping(value) {
  // only maps and object hashes
  var bool = value !== null && value !== undefined && typeof value === 'object' && !Array.isArray(value);

  if (Set) {
    return bool && !(value instanceof Set);
  } else {
    return bool;
  }
}

exports.mapping = mapping;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _cycler(items) {
  var index = -1;
  return {
    current: null,
    reset: function reset() {
      index = -1;
      this.current = null;
    },
    next: function next() {
      index++;

      if (index >= items.length) {
        index = 0;
      }

      this.current = items[index];
      return this.current;
    }
  };
}

function _joiner(sep) {
  sep = sep || ',';
  var first = true;
  return function () {
    var val = first ? '' : sep;
    first = false;
    return val;
  };
} // Making this a function instead so it returns a new object
// each time it's called. That way, if something like an environment
// uses it, they will each have their own copy.


function globals() {
  return {
    range: function range(start, stop, step) {
      if (typeof stop === 'undefined') {
        stop = start;
        start = 0;
        step = 1;
      } else if (!step) {
        step = 1;
      }

      var arr = [];

      if (step > 0) {
        for (var i = start; i < stop; i += step) {
          arr.push(i);
        }
      } else {
        for (var _i = start; _i > stop; _i += step) {
          // eslint-disable-line for-direction
          arr.push(_i);
        }
      }

      return arr;
    },
    cycler: function cycler() {
      return _cycler(Array.prototype.slice.call(arguments));
    },
    joiner: function joiner(sep) {
      return _joiner(sep);
    }
  };
}

module.exports = globals;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(0);

module.exports = function express(env, app) {
  function NunjucksView(name, opts) {
    this.name = name;
    this.path = name;
    this.defaultEngine = opts.defaultEngine;
    this.ext = path.extname(name);

    if (!this.ext && !this.defaultEngine) {
      throw new Error('No default engine was specified and no extension was provided.');
    }

    if (!this.ext) {
      this.name += this.ext = (this.defaultEngine[0] !== '.' ? '.' : '') + this.defaultEngine;
    }
  }

  NunjucksView.prototype.render = function render(opts, cb) {
    env.render(this.name, opts, cb);
  };

  app.set('view', NunjucksView);
  app.set('nunjucksEnv', env);
  return env;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

function installCompat() {
  'use strict';
  /* eslint-disable camelcase */
  // This must be called like `nunjucks.installCompat` so that `this`
  // references the nunjucks instance

  var runtime = this.runtime;
  var lib = this.lib; // Handle slim case where these 'modules' are excluded from the built source

  var Compiler = this.compiler.Compiler;
  var Parser = this.parser.Parser;
  var nodes = this.nodes;
  var lexer = this.lexer;
  var orig_contextOrFrameLookup = runtime.contextOrFrameLookup;
  var orig_memberLookup = runtime.memberLookup;
  var orig_Compiler_assertType;
  var orig_Parser_parseAggregate;

  if (Compiler) {
    orig_Compiler_assertType = Compiler.prototype.assertType;
  }

  if (Parser) {
    orig_Parser_parseAggregate = Parser.prototype.parseAggregate;
  }

  function uninstall() {
    runtime.contextOrFrameLookup = orig_contextOrFrameLookup;
    runtime.memberLookup = orig_memberLookup;

    if (Compiler) {
      Compiler.prototype.assertType = orig_Compiler_assertType;
    }

    if (Parser) {
      Parser.prototype.parseAggregate = orig_Parser_parseAggregate;
    }
  }

  runtime.contextOrFrameLookup = function contextOrFrameLookup(context, frame, key) {
    var val = orig_contextOrFrameLookup.apply(this, arguments);

    if (val !== undefined) {
      return val;
    }

    switch (key) {
      case 'True':
        return true;

      case 'False':
        return false;

      case 'None':
        return null;

      default:
        return undefined;
    }
  };

  function getTokensState(tokens) {
    return {
      index: tokens.index,
      lineno: tokens.lineno,
      colno: tokens.colno
    };
  }

  if (false) {
    // i.e., not slim mode
    var Slice = nodes.Node.extend('Slice', {
      fields: ['start', 'stop', 'step'],
      init: function init(lineno, colno, start, stop, step) {
        start = start || new nodes.Literal(lineno, colno, null);
        stop = stop || new nodes.Literal(lineno, colno, null);
        step = step || new nodes.Literal(lineno, colno, 1);
        this.parent(lineno, colno, start, stop, step);
      }
    });

    Compiler.prototype.assertType = function assertType(node) {
      if (node instanceof Slice) {
        return;
      }

      orig_Compiler_assertType.apply(this, arguments);
    };

    Compiler.prototype.compileSlice = function compileSlice(node, frame) {
      this._emit('(');

      this._compileExpression(node.start, frame);

      this._emit('),(');

      this._compileExpression(node.stop, frame);

      this._emit('),(');

      this._compileExpression(node.step, frame);

      this._emit(')');
    };

    Parser.prototype.parseAggregate = function parseAggregate() {
      var _this = this;

      var origState = getTokensState(this.tokens); // Set back one accounting for opening bracket/parens

      origState.colno--;
      origState.index--;

      try {
        return orig_Parser_parseAggregate.apply(this);
      } catch (e) {
        var errState = getTokensState(this.tokens);

        var rethrow = function rethrow() {
          lib._assign(_this.tokens, errState);

          return e;
        }; // Reset to state before original parseAggregate called


        lib._assign(this.tokens, origState);

        this.peeked = false;
        var tok = this.peekToken();

        if (tok.type !== lexer.TOKEN_LEFT_BRACKET) {
          throw rethrow();
        } else {
          this.nextToken();
        }

        var node = new Slice(tok.lineno, tok.colno); // If we don't encounter a colon while parsing, this is not a slice,
        // so re-raise the original exception.

        var isSlice = false;

        for (var i = 0; i <= node.fields.length; i++) {
          if (this.skip(lexer.TOKEN_RIGHT_BRACKET)) {
            break;
          }

          if (i === node.fields.length) {
            if (isSlice) {
              this.fail('parseSlice: too many slice components', tok.lineno, tok.colno);
            } else {
              break;
            }
          }

          if (this.skip(lexer.TOKEN_COLON)) {
            isSlice = true;
          } else {
            var field = node.fields[i];
            node[field] = this.parseExpression();
            isSlice = this.skip(lexer.TOKEN_COLON) || isSlice;
          }
        }

        if (!isSlice) {
          throw rethrow();
        }

        return new nodes.Array(tok.lineno, tok.colno, [node]);
      }
    };
  }

  function sliceLookup(obj, start, stop, step) {
    obj = obj || [];

    if (start === null) {
      start = step < 0 ? obj.length - 1 : 0;
    }

    if (stop === null) {
      stop = step < 0 ? -1 : obj.length;
    } else if (stop < 0) {
      stop += obj.length;
    }

    if (start < 0) {
      start += obj.length;
    }

    var results = [];

    for (var i = start;; i += step) {
      if (i < 0 || i > obj.length) {
        break;
      }

      if (step > 0 && i >= stop) {
        break;
      }

      if (step < 0 && i <= stop) {
        break;
      }

      results.push(runtime.memberLookup(obj, i));
    }

    return results;
  }

  function hasOwnProp(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  var ARRAY_MEMBERS = {
    pop: function pop(index) {
      if (index === undefined) {
        return this.pop();
      }

      if (index >= this.length || index < 0) {
        throw new Error('KeyError');
      }

      return this.splice(index, 1);
    },
    append: function append(element) {
      return this.push(element);
    },
    remove: function remove(element) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] === element) {
          return this.splice(i, 1);
        }
      }

      throw new Error('ValueError');
    },
    count: function count(element) {
      var count = 0;

      for (var i = 0; i < this.length; i++) {
        if (this[i] === element) {
          count++;
        }
      }

      return count;
    },
    index: function index(element) {
      var i;

      if ((i = this.indexOf(element)) === -1) {
        throw new Error('ValueError');
      }

      return i;
    },
    find: function find(element) {
      return this.indexOf(element);
    },
    insert: function insert(index, elem) {
      return this.splice(index, 0, elem);
    }
  };
  var OBJECT_MEMBERS = {
    items: function items() {
      return lib._entries(this);
    },
    values: function values() {
      return lib._values(this);
    },
    keys: function keys() {
      return lib.keys(this);
    },
    get: function get(key, def) {
      var output = this[key];

      if (output === undefined) {
        output = def;
      }

      return output;
    },
    has_key: function has_key(key) {
      return hasOwnProp(this, key);
    },
    pop: function pop(key, def) {
      var output = this[key];

      if (output === undefined && def !== undefined) {
        output = def;
      } else if (output === undefined) {
        throw new Error('KeyError');
      } else {
        delete this[key];
      }

      return output;
    },
    popitem: function popitem() {
      var keys = lib.keys(this);

      if (!keys.length) {
        throw new Error('KeyError');
      }

      var k = keys[0];
      var val = this[k];
      delete this[k];
      return [k, val];
    },
    setdefault: function setdefault(key, def) {
      if (def === void 0) {
        def = null;
      }

      if (!(key in this)) {
        this[key] = def;
      }

      return this[key];
    },
    update: function update(kwargs) {
      lib._assign(this, kwargs);

      return null; // Always returns None
    }
  };
  OBJECT_MEMBERS.iteritems = OBJECT_MEMBERS.items;
  OBJECT_MEMBERS.itervalues = OBJECT_MEMBERS.values;
  OBJECT_MEMBERS.iterkeys = OBJECT_MEMBERS.keys;

  runtime.memberLookup = function memberLookup(obj, val, autoescape) {
    if (arguments.length === 4) {
      return sliceLookup.apply(this, arguments);
    }

    obj = obj || {}; // If the object is an object, return any of the methods that Python would
    // otherwise provide.

    if (lib.isArray(obj) && hasOwnProp(ARRAY_MEMBERS, val)) {
      return ARRAY_MEMBERS[val].bind(obj);
    }

    if (lib.isObject(obj) && hasOwnProp(OBJECT_MEMBERS, val)) {
      return OBJECT_MEMBERS[val].bind(obj);
    }

    return orig_memberLookup.apply(this, arguments);
  };

  return uninstall;
}

module.exports = installCompat;

/***/ })
/******/ ]);
});
//# sourceMappingURL=nunjucks-slim.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11).setImmediate, __webpack_require__(5)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (nunjucks, env, obj, dependencies){

    var oldRoot = obj.root;

    obj.root = function( env, context, frame, runtime, ignoreMissing, cb ) {
        var oldGetTemplate = env.getTemplate;
        env.getTemplate = function (name, ec, parentName, ignoreMissing, cb) {
            if( typeof ec === "function" ) {
                cb = ec = false;
            }
            var _require = function (name) {
                try {
                    // add a reference to the already resolved dependency here
                    return dependencies[name];
                }
                catch (e) {
                    if (frame.get("_require")) {
                        return frame.get("_require")(name);
                    }
                    else {
                        console.warn('Could not load template "%s"', name);
                    }
                }
            };

            var tmpl = _require(name);
            frame.set("_require", _require);

            if( ec ) tmpl.compile();
            cb( null, tmpl );
        };

        oldRoot(env, context, frame, runtime, ignoreMissing, function (err, res) {
            env.getTemplate = oldGetTemplate;
            cb( err, res );
        });
    };

    var src = {
        obj: obj,
        type: 'code'
    };

    return new nunjucks.Template(src, env);

};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.checkConsecutiveLetters = checkConsecutiveLetters;
exports.parseTemplateString = parseTemplateString;
exports.handleArrayMaxLenght = handleArrayMaxLenght;
function checkConsecutiveLetters(value) {
	var consecutiveIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	if (consecutiveIndex >= 2) {
		return true;
	}
	if (value.length === 2) {
		if (value.charCodeAt(0) + 1 === value.charCodeAt(1)) {
			consecutiveIndex += 1;
		} else {
			consecutiveIndex = 0;
		}
		return consecutiveIndex >= 2;
	} else if (value.charCodeAt(0) + 1 === value.charCodeAt(1)) {
		consecutiveIndex += 1;
	} else {
		consecutiveIndex = 0;
	}
	return checkConsecutiveLetters(value.substring(1), consecutiveIndex);
}

function parseTemplateString(template, map, fallback) {
	return template.replace(/\$\{.+?}/g, function (match) {
		var path = match.substr(2, match.length - 3).trim();
		return get(path, map, fallback);
	});
}

function handleArrayMaxLenght(arr, maxLength) {
	var arrLength = arr.length;
	if (arrLength > maxLength) {
		return arr.splice(arrLength - maxLength);
	}
	return arr;
}

function get(path, obj) {
	var fb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '${' + path + '}';

	return path.split('.').reduce(function (res, key) {
		return res[key] || fb;
	}, obj);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__(0);
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], undefined);
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});




var shim = __webpack_require__(1);


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["public/components/List/partials/joke.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"js-joke\" data-id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"id"), env.opts.autoescape);
output += "\" data-text=\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"joke")), env.opts.autoescape);
output += "\">\n\t";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"joke")), env.opts.autoescape);
output += "\n\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"isFavortie")) {
output += "\n\t\t<span class=\"js-remove\"> X </span>\n\t";
;
}
else {
output += "\n\t\t<span class=\"js-add-favorite\"> + </span>\t\t\t\t\n\t";
;
}
output += "\n</li>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["public/components/List/partials/joke.njk"] , dependencies)

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__(0);
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], undefined);
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});




var shim = __webpack_require__(1);


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["public/components/Login/partials/hints.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "errors");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("error", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t<p id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"mesage"), env.opts.autoescape);
output += "</p>\n";
;
}
}
frame = frame.pop();
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["public/components/Login/partials/hints.njk"] , dependencies)

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _Login = __webpack_require__(9);

var _Login2 = _interopRequireDefault(_Login);

var _List = __webpack_require__(14);

var _List2 = _interopRequireDefault(_List);

var _constants = __webpack_require__(16);

var _loadJokes = __webpack_require__(17);

var _loadJokes2 = _interopRequireDefault(_loadJokes);

var _error = __webpack_require__(18);

var _error2 = _interopRequireDefault(_error);

var _joke = __webpack_require__(3);

var _joke2 = _interopRequireDefault(_joke);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginForm = new _Login2.default(showJokes);
var appContainer = document.querySelector('#app');

if (loginForm.isLogin()) {
	showJokes();
} else {
	var loginContainer = appContainer.querySelector('#login');
	loginForm.render(loginContainer);
}

function showJokes() {
	var jokesContainer = appContainer.querySelector('#jokes');
	var jokesListContainer = jokesContainer.querySelector('#list');

	(0, _loadJokes2.default)(_constants.jokeUrl, 10).then(function (jokesData) {
		if (jokesData.type !== 'success') {
			return jokesContainer.innerHTML = _error2.default.render();
		}
		var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
		var jokesList = new _List2.default(jokesData.value, favorites, jokesListContainer);
		jokesList.render();
		handleLoadModeJokes(jokesList);
		handleRandomJoke(jokesList);
	}).catch(function () {
		jokesContainer.innerHTML = _error2.default.render();
	});
}

function handleLoadModeJokes(jokesList) {
	var loadMoreBtn = document.querySelector('#loadMore');
	loadMoreBtn.addEventListener('click', function () {
		(0, _loadJokes2.default)(_constants.jokeUrl, 10).then(function (jokesData) {
			if (jokesData.type !== 'success') {
				return jokesContainer.innerHTML = _error2.default.render();
			}
			jokesList.addItems(jokesData.value);
		});
	});
}

function handleRandomJoke(jokesList) {
	var getRandomJokes = document.querySelector('#randomBtn');
	var interval = null;
	var randomContainer = document.querySelector('#random');
	randomContainer.addEventListener('click', function (e) {
		var target = e.target;
		var jokeEl = target.classList.contains('js-joke') ? e.target : target.closest('.js-joke');
		if (target.classList.contains('js-add-favorite')) {
			var item = {
				id: parseInt(jokeEl.getAttribute('data-id')),
				joke: jokeEl.getAttribute('data-text')
			};
			console.log('item', item);
			jokesList.addFavorite(item);
		}
	});
	getRandomJokes.addEventListener('change', function (e) {
		var fetchRandomJoke = e.target.checked;
		if (fetchRandomJoke) {
			loadRandomJoke();
			interval = setInterval(loadRandomJoke, 5000);
		} else {
			document.querySelector('#random').innerHTML = '';
			clearInterval(interval);
		}
	});
}

function loadRandomJoke() {
	return (0, _loadJokes2.default)(_constants.jokeUrl, 1).then(function (jokeData) {
		var randomContainer = document.querySelector('#random');
		if (jokeData.type !== 'success') {
			return randomContainer.innerHTML = _error2.default.render();
		}
		var item = jokeData.value[0];
		return _joke2.default.render({ item: item }, function (err, result) {
			console.log('addTOFavorites');
			randomContainer.innerHTML = result;
		});
	});
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Login = __webpack_require__(10);

var _Login2 = _interopRequireDefault(_Login);

var _hints = __webpack_require__(6);

var _hints2 = _interopRequireDefault(_hints);

var _utils = __webpack_require__(2);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = function () {
	function Login(onSubmit) {
		_classCallCheck(this, Login);

		this.userName = this.getUserName();
		this.password = '';
		this.htmlElemenets = [];
		this.onSubmit = onSubmit;
	}

	_createClass(Login, [{
		key: 'render',
		value: function render(parent) {
			var _this = this;

			return _Login2.default.render({ userName: this.userName }, function (err, result) {
				parent.innerHTML = result;
				_this.bindEvents(parent);
			});
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents(scope) {
			var _this2 = this;

			this.htmlElemenets.password = scope.querySelector('#password');
			this.htmlElemenets.userName = scope.querySelector('#name');
			this.htmlElemenets.loginBtn = scope.querySelector('#loginBtn');
			this.htmlElemenets.hints = scope.querySelector('#hints');

			this.htmlElemenets.password.addEventListener('input', function (e) {
				_this2.password = e.target.value;
				if (_this2.password.length !== 0) {
					_this2.validate();
					return;
				}
				_this2.htmlElemenets.hints.innerHTML = _hints2.default.render([]);
				_this2.htmlElemenets.loginBtn.disabled = true;
			});

			this.htmlElemenets.userName.addEventListener('input', function (e) {
				_this2.userName = e.target.value;
			});

			this.htmlElemenets.loginBtn.addEventListener('click', function (e) {
				e.preventDefault();
				_this2.setSession();
				_this2.setUserName();
				_this2.onSubmit();
			});
		}
	}, {
		key: 'validate',
		value: function validate() {
			var errors = [];
			var messages = {
				letters: 'only lower letters',
				noSomeLetters: 'should not contain "i" "O" or "l"',
				double: 'should contain two overlapping letters, like "aa", "bb" or "cc"',
				consecutive: 'should contain 3 consecutive letters like "abc", "def" or "xyz"'
			};

			if (!/^[a-z]+$/.test(this.password)) {
				console.log('only lower letters');
				errors.push({
					id: 'letters',
					mesage: messages.letters
				});
			}

			if (!/([a-z])\1/i.test(this.password)) {
				console.log('should contain two overlapping letters, like "aa", "bb" or "cc"');
				errors.push({
					id: 'double',
					mesage: messages.double
				});
			}

			if (!/^[^iOl]+$/.test(this.password)) {
				console.log('should not contain "i" "O" or "l"');
				errors.push({
					id: 'noSomeLetters',
					mesage: messages.noSomeLetters
				});
			}

			if (this.password.length >= 3) {
				if (!(0, _utils.checkConsecutiveLetters)(this.password)) {
					console.log('should contain 3 consecutive letters like "abc", "def" or "xyz"');
					errors.push({
						id: 'consecutive',
						mesage: messages.consecutive
					});
				}
			}

			this.htmlElemenets.hints.innerHTML = _hints2.default.render({ errors: errors });
			this.htmlElemenets.loginBtn.disabled = errors.length !== 0;
		}
	}, {
		key: 'setSession',
		value: function setSession() {
			sessionStorage.setItem('isLogin', true);
		}
	}, {
		key: 'setUserName',
		value: function setUserName() {
			localStorage.setItem('userName', this.userName);
		}
	}, {
		key: 'getUserName',
		value: function getUserName() {
			return localStorage.getItem('userName');
		}
	}, {
		key: 'isLogin',
		value: function isLogin() {
			return sessionStorage.getItem('isLogin');
		}
	}]);

	return Login;
}();

exports.default = Login;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__(0);
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], {"dev":false,"autoescape":true,"throwOnUndefined":false,"trimBlocks":false,"lstripBlocks":false});
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});
dependencies["./partials/hints.njk"] = __webpack_require__( 6 );




var shim = __webpack_require__(1);


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["public/components/Login/Login.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<form id=\"login\">\n    <input type=\"text\" name=\"name\" id=\"name\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userName"), env.opts.autoescape);
output += "\">\n    <input name=\"password\" id=\"password\" maxlength=\"32\">\n    <div id=\"hints\">\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("./partials/hints.njk", false, "public/components/Login/Login.njk", true, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </div>\n    <button type=\"submit\" id=\"loginBtn\" disabled=true>Login</button>\n</form>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["public/components/Login/Login.njk"] , dependencies)

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(12);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(5)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _List = __webpack_require__(15);

var _List2 = _interopRequireDefault(_List);

var _joke = __webpack_require__(3);

var _joke2 = _interopRequireDefault(_joke);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function () {
	function List() {
		var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var favorites = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		var parent = arguments[2];
		var maxLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

		_classCallCheck(this, List);

		var favoritesIds = favorites.map(function (fav) {
			return fav.id;
		});
		this.items = items.filter(function (item) {
			return favoritesIds.indexOf(item.id) === -1;
		});
		this.favorites = (0, _utils.handleArrayMaxLenght)(favorites, maxLength);
		this.maxLength = maxLength;
		this.parent = parent;
		this.bindEvents(parent);
	}

	_createClass(List, [{
		key: 'render',
		value: function render() {
			var _this = this;

			return _List2.default.render({
				items: this.items,
				favorites: this.favorites,
				maxLength: this.maxLength
			}, function (err, result) {
				_this.parent.innerHTML = result;
			});
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents(parent) {
			var _this2 = this;

			parent.addEventListener('click', function (e) {
				var target = e.target;
				var jokeEl = target.classList.contains('js-joke') ? e.target : target.closest('.js-joke');
				if (!jokeEl) {
					return;
				}
				var id = parseInt(jokeEl.getAttribute('data-id'));

				if (target.classList.contains('js-add-favorite')) {
					var favortieJoke = _this2.items.find(function (x) {
						return x.id == id;
					});
					_this2.items = _this2.items.filter(function (x) {
						return x.id !== id;
					});
					jokeEl.parentElement.removeChild(jokeEl);
					_this2.addFavorite(favortieJoke);
				}
				if (target.classList.contains('js-remove')) {
					_this2.favorites = _this2.favorites.filter(function (x) {
						return x.id !== id;
					});
					jokeEl.parentElement.removeChild(jokeEl);
					localStorage.setItem('favorites', JSON.stringify(_this2.favorites));
					_this2.updateCount();
				}
			});
		}
	}, {
		key: 'addItems',
		value: function addItems(newItems) {
			var favoritesIds = this.favorites.map(function (fav) {
				return fav.id;
			});
			var itemsIds = this.items.map(function (item) {
				return item.id;
			});
			this.items = this.items.concat(newItems.filter(function (newItem) {
				return favoritesIds.indexOf(newItem.id) === -1;
			}).filter(function (newItem) {
				return itemsIds.indexOf(newItem.id) === -1;
			}));
			this.render(document.querySelector('#list'));
		}
	}, {
		key: 'addFavorite',
		value: function addFavorite(favortieJoke) {
			var favoritesContainer = document.querySelector('.js-jokes-favorites');
			favortieJoke.isFavortie = true;
			this.favorites.push(favortieJoke);
			if (this.favorites.length > this.maxLength) {
				var toRemoveJoke = this.favorites.shift();
				var toRemoveJokeEl = favoritesContainer.querySelector('.js-joke[data-id="' + toRemoveJoke.id + '"]');
				favoritesContainer.removeChild(toRemoveJokeEl);
			}
			favoritesContainer.innerHTML += _joke2.default.render({ item: favortieJoke });
			localStorage.setItem('favorites', JSON.stringify(this.favorites));
			this.updateCount();
		}
	}, {
		key: 'updateCount',
		value: function updateCount() {
			var count = document.querySelector('#count');
			count.innerHTML = this.favorites.length + ' / ' + this.maxLength;
		}
	}]);

	return List;
}();

exports.default = List;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__(0);
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], undefined);
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});
dependencies["./partials/joke.njk"] = __webpack_require__( 3 );




var shim = __webpack_require__(1);


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["public/components/List/List.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<ul class=\"js-jokes-list\">\n\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "items");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("./partials/joke.njk", false, "public/components/List/List.njk", true, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\t";
});
}
}
frame = frame.pop();
output += "\n\t<div>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "items")),"length"), env.opts.autoescape);
output += "</div>\n</ul>\n<ul class=\"js-jokes-favorites\">\n\t";
frame = frame.push();
var t_11 = runtime.contextOrFrameLookup(context, frame, "favorites");
if(t_11) {t_11 = runtime.fromIterator(t_11);
var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("item", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "\n\t\t";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("./partials/joke.njk", false, "public/components/List/List.njk", true, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\t";
});
}
}
frame = frame.pop();
output += "\n</ul>\n<div id=\"count\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "favorites")),"length"), env.opts.autoescape);
output += " / ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "maxLength"), env.opts.autoescape);
output += "</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["public/components/List/List.njk"] , dependencies)

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var jokeUrl = exports.jokeUrl = 'https://api.icndb.com/jokes/random/${limit}';

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = loadJokes;

var _utils = __webpack_require__(2);

function loadJokes(url, limit) {
	return fetch((0, _utils.parseTemplateString)(url, { limit: limit })).then(function (r) {
		if (!r.ok) {
			throw Error('No more jokes about Chuck Norris!');
		}
		return r.json();
	});
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__(0);
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], undefined);
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});




var shim = __webpack_require__(1);


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["public/templates/error.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<h1>Best joke: There are no Chuck Norris jokes</h1>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["public/templates/error.njk"] , dependencies)

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjBkNThkY2M2MzYxNDYwMWEyM2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL251bmp1Y2tzL2Jyb3dzZXIvbnVuanVja3Mtc2xpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVuanVja3MtbG9hZGVyL3J1bnRpbWUtc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvTGlzdC9wYXJ0aWFscy9qb2tlLm5qayIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvTG9naW4vcGFydGlhbHMvaGludHMubmprIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvTG9naW4vTG9naW4ubmprIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvTGlzdC9MaXN0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL0xpc3QvTGlzdC5uamsiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbG9hZEpva2VzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvZXJyb3IubmprIl0sIm5hbWVzIjpbImNoZWNrQ29uc2VjdXRpdmVMZXR0ZXJzIiwicGFyc2VUZW1wbGF0ZVN0cmluZyIsImhhbmRsZUFycmF5TWF4TGVuZ2h0IiwidmFsdWUiLCJjb25zZWN1dGl2ZUluZGV4IiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInN1YnN0cmluZyIsInRlbXBsYXRlIiwibWFwIiwiZmFsbGJhY2siLCJyZXBsYWNlIiwicGF0aCIsIm1hdGNoIiwic3Vic3RyIiwidHJpbSIsImdldCIsImFyciIsIm1heExlbmd0aCIsImFyckxlbmd0aCIsInNwbGljZSIsIm9iaiIsImZiIiwic3BsaXQiLCJyZWR1Y2UiLCJyZXMiLCJrZXkiLCJsb2dpbkZvcm0iLCJzaG93Sm9rZXMiLCJhcHBDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpc0xvZ2luIiwibG9naW5Db250YWluZXIiLCJyZW5kZXIiLCJqb2tlc0NvbnRhaW5lciIsImpva2VzTGlzdENvbnRhaW5lciIsInRoZW4iLCJqb2tlc0RhdGEiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiZmF2b3JpdGVzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImpva2VzTGlzdCIsImhhbmRsZUxvYWRNb2RlSm9rZXMiLCJoYW5kbGVSYW5kb21Kb2tlIiwiY2F0Y2giLCJsb2FkTW9yZUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRJdGVtcyIsImdldFJhbmRvbUpva2VzIiwiaW50ZXJ2YWwiLCJyYW5kb21Db250YWluZXIiLCJ0YXJnZXQiLCJlIiwiam9rZUVsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjbG9zZXN0IiwiaXRlbSIsImlkIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJqb2tlIiwiY29uc29sZSIsImxvZyIsImFkZEZhdm9yaXRlIiwiZmV0Y2hSYW5kb21Kb2tlIiwiY2hlY2tlZCIsImxvYWRSYW5kb21Kb2tlIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiam9rZURhdGEiLCJlcnIiLCJyZXN1bHQiLCJMb2dpbiIsIm9uU3VibWl0IiwidXNlck5hbWUiLCJnZXRVc2VyTmFtZSIsInBhc3N3b3JkIiwiaHRtbEVsZW1lbmV0cyIsInBhcmVudCIsImJpbmRFdmVudHMiLCJzY29wZSIsImxvZ2luQnRuIiwiaGludHMiLCJ2YWxpZGF0ZSIsImRpc2FibGVkIiwicHJldmVudERlZmF1bHQiLCJzZXRTZXNzaW9uIiwic2V0VXNlck5hbWUiLCJlcnJvcnMiLCJtZXNzYWdlcyIsImxldHRlcnMiLCJub1NvbWVMZXR0ZXJzIiwiZG91YmxlIiwiY29uc2VjdXRpdmUiLCJ0ZXN0IiwicHVzaCIsIm1lc2FnZSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkxpc3QiLCJpdGVtcyIsImZhdm9yaXRlc0lkcyIsImZhdiIsImZpbHRlciIsImluZGV4T2YiLCJmYXZvcnRpZUpva2UiLCJmaW5kIiwieCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInN0cmluZ2lmeSIsInVwZGF0ZUNvdW50IiwibmV3SXRlbXMiLCJpdGVtc0lkcyIsImNvbmNhdCIsIm5ld0l0ZW0iLCJmYXZvcml0ZXNDb250YWluZXIiLCJpc0Zhdm9ydGllIiwidG9SZW1vdmVKb2tlIiwic2hpZnQiLCJ0b1JlbW92ZUpva2VFbCIsImNvdW50Iiwiam9rZVVybCIsImxvYWRKb2tlcyIsInVybCIsImxpbWl0IiwiZmV0Y2giLCJyIiwib2siLCJFcnJvciIsImpzb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBLDRFQUE0RSxhQUFhO0FBQ3pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMOztBQUVBLDRCQUE0QixxQkFBcUI7QUFDakQsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRFQUE0RSxlQUFlO0FBQzNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDOztBQUV4Qyw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCOztBQUUxQix1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsWUFBWTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FB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TyxJQUFNdUIsNEJBQVUsNkNBQWhCLEM7Ozs7Ozs7Ozs7OztrQkNFaUJDLFM7O0FBRnhCOztBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCQyxLQUF4QixFQUErQjtBQUM3QyxRQUFPQyxNQUFNLGdDQUFvQkYsR0FBcEIsRUFBeUIsRUFBRUMsWUFBRixFQUF6QixDQUFOLEVBQ0w5RixJQURLLENBQ0EsYUFBSztBQUNWLE1BQUksQ0FBQ2dHLEVBQUVDLEVBQVAsRUFBVztBQUNWLFNBQU1DLE1BQU0sbUNBQU4sQ0FBTjtBQUNBO0FBQ0QsU0FBT0YsRUFBRUcsSUFBRixFQUFQO0FBQ0EsRUFOSyxDQUFQO0FBT0EsQzs7Ozs7O0FDVkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHFGQUFxRjs7Ozs7QUFLckY7OztBQUdBLGFBQWEsa0VBQWtFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxDQUFDOzs7O0FBSUQsK0ciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjBkNThkY2M2MzYxNDYwMWEyM2EiLCIvKiEgQnJvd3NlciBidW5kbGUgb2YgbnVuanVja3MgMy4xLjAgKHNsaW0sIG9ubHkgd29ya3Mgd2l0aCBwcmVjb21waWxlZCB0ZW1wbGF0ZXMpICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJudW5qdWNrc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJudW5qdWNrc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIGVzY2FwZU1hcCA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgJ1xcJyc6ICcmIzM5OycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7J1xufTtcbnZhciBlc2NhcGVSZWdleCA9IC9bJlwiJzw+XS9nO1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wKG9iaiwgaykge1xuICByZXR1cm4gT2JqUHJvdG8uaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspO1xufVxuXG5leHBvcnRzLmhhc093blByb3AgPSBoYXNPd25Qcm9wO1xuXG5mdW5jdGlvbiBsb29rdXBFc2NhcGUoY2gpIHtcbiAgcmV0dXJuIGVzY2FwZU1hcFtjaF07XG59XG5cbmZ1bmN0aW9uIF9wcmV0dGlmeUVycm9yKHBhdGgsIHdpdGhJbnRlcm5hbHMsIGVycikge1xuICBpZiAoIWVyci5VcGRhdGUpIHtcbiAgICAvLyBub3Qgb25lIG9mIG91cnMsIGNhc3QgaXRcbiAgICBlcnIgPSBuZXcgZXhwb3J0cy5UZW1wbGF0ZUVycm9yKGVycik7XG4gIH1cblxuICBlcnIuVXBkYXRlKHBhdGgpOyAvLyBVbmxlc3MgdGhleSBtYXJrZWQgdGhlIGRldiBmbGFnLCBzaG93IHRoZW0gYSB0cmFjZSBmcm9tIGhlcmVcblxuICBpZiAoIXdpdGhJbnRlcm5hbHMpIHtcbiAgICB2YXIgb2xkID0gZXJyO1xuICAgIGVyciA9IG5ldyBFcnJvcihvbGQubWVzc2FnZSk7XG4gICAgZXJyLm5hbWUgPSBvbGQubmFtZTtcbiAgfVxuXG4gIHJldHVybiBlcnI7XG59XG5cbmV4cG9ydHMuX3ByZXR0aWZ5RXJyb3IgPSBfcHJldHRpZnlFcnJvcjtcblxuZnVuY3Rpb24gVGVtcGxhdGVFcnJvcihtZXNzYWdlLCBsaW5lbm8sIGNvbG5vKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIGVycjtcbiAgdmFyIGNhdXNlO1xuXG4gIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBjYXVzZSA9IG1lc3NhZ2U7XG4gICAgbWVzc2FnZSA9IGNhdXNlLm5hbWUgKyBcIjogXCIgKyBjYXVzZS5tZXNzYWdlO1xuICB9XG5cbiAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgIGVyciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZXJyLCBUZW1wbGF0ZUVycm9yLnByb3RvdHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgZXJyID0gdGhpcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCAnbWVzc2FnZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogbWVzc2FnZVxuICAgIH0pO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgJ25hbWUnLCB7XG4gICAgdmFsdWU6ICdUZW1wbGF0ZSByZW5kZXIgZXJyb3InXG4gIH0pO1xuXG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGVyciwgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gIH1cblxuICB2YXIgZ2V0U3RhY2s7XG5cbiAgaWYgKGNhdXNlKSB7XG4gICAgdmFyIHN0YWNrRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY2F1c2UsICdzdGFjaycpO1xuXG4gICAgZ2V0U3RhY2sgPSBzdGFja0Rlc2NyaXB0b3IgJiYgKHN0YWNrRGVzY3JpcHRvci5nZXQgfHwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHN0YWNrRGVzY3JpcHRvci52YWx1ZTtcbiAgICB9KTtcblxuICAgIGlmICghZ2V0U3RhY2spIHtcbiAgICAgIGdldFN0YWNrID0gZnVuY3Rpb24gZ2V0U3RhY2soKSB7XG4gICAgICAgIHJldHVybiBjYXVzZS5zdGFjaztcbiAgICAgIH07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBzdGFjayA9IG5ldyBFcnJvcihtZXNzYWdlKS5zdGFjaztcblxuICAgIGdldFN0YWNrID0gZnVuY3Rpb24gZ2V0U3RhY2soKSB7XG4gICAgICByZXR1cm4gc3RhY2s7XG4gICAgfTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsICdzdGFjaycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBnZXRTdGFjay5jYWxsKF90aGlzKTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCAnY2F1c2UnLCB7XG4gICAgdmFsdWU6IGNhdXNlXG4gIH0pO1xuICBlcnIubGluZW5vID0gbGluZW5vO1xuICBlcnIuY29sbm8gPSBjb2xubztcbiAgZXJyLmZpcnN0VXBkYXRlID0gdHJ1ZTtcblxuICBlcnIuVXBkYXRlID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICB2YXIgbXNnID0gJygnICsgKHBhdGggfHwgJ3Vua25vd24gcGF0aCcpICsgJyknOyAvLyBvbmx5IHNob3cgbGluZW5vICsgY29sbm8gbmV4dCB0byBwYXRoIG9mIHRlbXBsYXRlXG4gICAgLy8gd2hlcmUgZXJyb3Igb2NjdXJyZWRcblxuICAgIGlmIChfdGhpcy5maXJzdFVwZGF0ZSkge1xuICAgICAgaWYgKF90aGlzLmxpbmVubyAmJiBfdGhpcy5jb2xubykge1xuICAgICAgICBtc2cgKz0gXCIgW0xpbmUgXCIgKyBfdGhpcy5saW5lbm8gKyBcIiwgQ29sdW1uIFwiICsgX3RoaXMuY29sbm8gKyBcIl1cIjtcbiAgICAgIH0gZWxzZSBpZiAoX3RoaXMubGluZW5vKSB7XG4gICAgICAgIG1zZyArPSBcIiBbTGluZSBcIiArIF90aGlzLmxpbmVubyArIFwiXVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1zZyArPSAnXFxuICc7XG5cbiAgICBpZiAoX3RoaXMuZmlyc3RVcGRhdGUpIHtcbiAgICAgIG1zZyArPSAnICc7XG4gICAgfVxuXG4gICAgX3RoaXMubWVzc2FnZSA9IG1zZyArIChfdGhpcy5tZXNzYWdlIHx8ICcnKTtcbiAgICBfdGhpcy5maXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfTtcblxuICByZXR1cm4gZXJyO1xufVxuXG5pZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihUZW1wbGF0ZUVycm9yLnByb3RvdHlwZSwgRXJyb3IucHJvdG90eXBlKTtcbn0gZWxzZSB7XG4gIFRlbXBsYXRlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IFRlbXBsYXRlRXJyb3JcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnRzLlRlbXBsYXRlRXJyb3IgPSBUZW1wbGF0ZUVycm9yO1xuXG5mdW5jdGlvbiBlc2NhcGUodmFsKSB7XG4gIHJldHVybiB2YWwucmVwbGFjZShlc2NhcGVSZWdleCwgbG9va3VwRXNjYXBlKTtcbn1cblxuZXhwb3J0cy5lc2NhcGUgPSBlc2NhcGU7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiBPYmpQcm90by50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gIHJldHVybiBPYmpQcm90by50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICByZXR1cm4gT2JqUHJvdG8udG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbn1cblxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIE9ialByb3RvLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gZ3JvdXBCeShvYmosIHZhbCkge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBpdGVyYXRvciA9IGlzRnVuY3Rpb24odmFsKSA/IHZhbCA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG9bdmFsXTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWx1ZSA9IG9ialtpXTtcbiAgICB2YXIga2V5ID0gaXRlcmF0b3IodmFsdWUsIGkpO1xuICAgIChyZXN1bHRba2V5XSB8fCAocmVzdWx0W2tleV0gPSBbXSkpLnB1c2godmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0cy5ncm91cEJ5ID0gZ3JvdXBCeTtcblxuZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG9iaik7XG59XG5cbmV4cG9ydHMudG9BcnJheSA9IHRvQXJyYXk7XG5cbmZ1bmN0aW9uIHdpdGhvdXQoYXJyYXkpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGlmICghYXJyYXkpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgdmFyIGNvbnRhaW5zID0gdG9BcnJheShhcmd1bWVudHMpLnNsaWNlKDEpO1xuICB2YXIgaW5kZXggPSAtMTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpbmRleE9mKGNvbnRhaW5zLCBhcnJheVtpbmRleF0pID09PSAtMSkge1xuICAgICAgcmVzdWx0LnB1c2goYXJyYXlbaW5kZXhdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnRzLndpdGhvdXQgPSB3aXRob3V0O1xuXG5mdW5jdGlvbiByZXBlYXQoY2hhcl8sIG4pIHtcbiAgdmFyIHN0ciA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgc3RyICs9IGNoYXJfO1xuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0cy5yZXBlYXQgPSByZXBlYXQ7XG5cbmZ1bmN0aW9uIGVhY2gob2JqLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheVByb3RvLmZvckVhY2ggJiYgb2JqLmZvckVhY2ggPT09IEFycmF5UHJvdG8uZm9yRWFjaCkge1xuICAgIG9iai5mb3JFYWNoKGZ1bmMsIGNvbnRleHQpO1xuICB9IGVsc2UgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmdW5jLmNhbGwoY29udGV4dCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLmVhY2ggPSBlYWNoO1xuXG5mdW5jdGlvbiBtYXAob2JqLCBmdW5jKSB7XG4gIHZhciByZXN1bHRzID0gW107XG5cbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBpZiAoQXJyYXlQcm90by5tYXAgJiYgb2JqLm1hcCA9PT0gQXJyYXlQcm90by5tYXApIHtcbiAgICByZXR1cm4gb2JqLm1hcChmdW5jKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0c1tyZXN1bHRzLmxlbmd0aF0gPSBmdW5jKG9ialtpXSwgaSk7XG4gIH1cblxuICBpZiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpIHtcbiAgICByZXN1bHRzLmxlbmd0aCA9IG9iai5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuZXhwb3J0cy5tYXAgPSBtYXA7XG5cbmZ1bmN0aW9uIGFzeW5jSXRlcihhcnIsIGl0ZXIsIGNiKSB7XG4gIHZhciBpID0gLTE7XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpKys7XG5cbiAgICBpZiAoaSA8IGFyci5sZW5ndGgpIHtcbiAgICAgIGl0ZXIoYXJyW2ldLCBpLCBuZXh0LCBjYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpO1xufVxuXG5leHBvcnRzLmFzeW5jSXRlciA9IGFzeW5jSXRlcjtcblxuZnVuY3Rpb24gYXN5bmNGb3Iob2JqLCBpdGVyLCBjYikge1xuICB2YXIga2V5cyA9IGtleXNfKG9iaiB8fCB7fSk7XG4gIHZhciBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAtMTtcblxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGkrKztcbiAgICB2YXIgayA9IGtleXNbaV07XG5cbiAgICBpZiAoaSA8IGxlbikge1xuICAgICAgaXRlcihrLCBvYmpba10sIGksIGxlbiwgbmV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpO1xufVxuXG5leHBvcnRzLmFzeW5jRm9yID0gYXN5bmNGb3I7XG5cbmZ1bmN0aW9uIGluZGV4T2YoYXJyLCBzZWFyY2hFbGVtZW50LCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYXJyIHx8IFtdLCBzZWFyY2hFbGVtZW50LCBmcm9tSW5kZXgpO1xufVxuXG5leHBvcnRzLmluZGV4T2YgPSBpbmRleE9mO1xuXG5mdW5jdGlvbiBrZXlzXyhvYmopIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbiAgdmFyIGFyciA9IFtdO1xuXG4gIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093blByb3Aob2JqLCBrKSkge1xuICAgICAgYXJyLnB1c2goayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0cy5rZXlzID0ga2V5c187XG5cbmZ1bmN0aW9uIF9lbnRyaWVzKG9iaikge1xuICByZXR1cm4ga2V5c18ob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gW2ssIG9ialtrXV07XG4gIH0pO1xufVxuXG5leHBvcnRzLl9lbnRyaWVzID0gX2VudHJpZXM7XG5cbmZ1bmN0aW9uIF92YWx1ZXMob2JqKSB7XG4gIHJldHVybiBrZXlzXyhvYmopLm1hcChmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiBvYmpba107XG4gIH0pO1xufVxuXG5leHBvcnRzLl92YWx1ZXMgPSBfdmFsdWVzO1xuXG5mdW5jdGlvbiBleHRlbmQob2JqMSwgb2JqMikge1xuICBvYmoxID0gb2JqMSB8fCB7fTtcbiAga2V5c18ob2JqMikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIG9iajFba10gPSBvYmoyW2tdO1xuICB9KTtcbiAgcmV0dXJuIG9iajE7XG59XG5cbmV4cG9ydHMuX2Fzc2lnbiA9IGV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xuXG5mdW5jdGlvbiBpbk9wZXJhdG9yKGtleSwgdmFsKSB7XG4gIGlmIChpc0FycmF5KHZhbCkgfHwgaXNTdHJpbmcodmFsKSkge1xuICAgIHJldHVybiB2YWwuaW5kZXhPZihrZXkpICE9PSAtMTtcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgcmV0dXJuIGtleSBpbiB2YWw7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgXCJpblwiIG9wZXJhdG9yIHRvIHNlYXJjaCBmb3IgXCInICsga2V5ICsgJ1wiIGluIHVuZXhwZWN0ZWQgdHlwZXMuJyk7XG59XG5cbmV4cG9ydHMuaW5PcGVyYXRvciA9IGluT3BlcmF0b3I7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgbGliID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIGFycmF5RnJvbSA9IEFycmF5LmZyb207XG52YXIgc3VwcG9ydHNJdGVyYXRvcnMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvciAmJiB0eXBlb2YgYXJyYXlGcm9tID09PSAnZnVuY3Rpb24nOyAvLyBGcmFtZXMga2VlcCB0cmFjayBvZiBzY29waW5nIGJvdGggYXQgY29tcGlsZS10aW1lIGFuZCBydW4tdGltZSBzb1xuLy8gd2Uga25vdyBob3cgdG8gYWNjZXNzIHZhcmlhYmxlcy4gQmxvY2sgdGFncyBjYW4gaW50cm9kdWNlIHNwZWNpYWxcbi8vIHZhcmlhYmxlcywgZm9yIGV4YW1wbGUuXG5cbnZhciBGcmFtZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEZyYW1lKHBhcmVudCwgaXNvbGF0ZVdyaXRlcykge1xuICAgIHRoaXMudmFyaWFibGVzID0ge307XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy50b3BMZXZlbCA9IGZhbHNlOyAvLyBpZiB0aGlzIGlzIHRydWUsIHdyaXRlcyAoc2V0KSBzaG91bGQgbmV2ZXIgcHJvcGFnYXRlIHVwd2FyZHMgcGFzdFxuICAgIC8vIHRoaXMgZnJhbWUgdG8gaXRzIHBhcmVudCAodGhvdWdoIHJlYWRzIG1heSkuXG5cbiAgICB0aGlzLmlzb2xhdGVXcml0ZXMgPSBpc29sYXRlV3JpdGVzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEZyYW1lLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KG5hbWUsIHZhbCwgcmVzb2x2ZVVwKSB7XG4gICAgLy8gQWxsb3cgdmFyaWFibGVzIHdpdGggZG90cyBieSBhdXRvbWF0aWNhbGx5IGNyZWF0aW5nIHRoZVxuICAgIC8vIG5lc3RlZCBzdHJ1Y3R1cmVcbiAgICB2YXIgcGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgdmFyIG9iaiA9IHRoaXMudmFyaWFibGVzO1xuICAgIHZhciBmcmFtZSA9IHRoaXM7XG5cbiAgICBpZiAocmVzb2x2ZVVwKSB7XG4gICAgICBpZiAoZnJhbWUgPSB0aGlzLnJlc29sdmUocGFydHNbMF0sIHRydWUpKSB7XG4gICAgICAgIGZyYW1lLnNldChuYW1lLCB2YWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHBhcnRzW2ldO1xuXG4gICAgICBpZiAoIW9ialtpZF0pIHtcbiAgICAgICAgb2JqW2lkXSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBvYmogPSBvYmpbaWRdO1xuICAgIH1cblxuICAgIG9ialtwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXV0gPSB2YWw7XG4gIH07XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldChuYW1lKSB7XG4gICAgdmFyIHZhbCA9IHRoaXMudmFyaWFibGVzW25hbWVdO1xuXG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIF9wcm90by5sb29rdXAgPSBmdW5jdGlvbiBsb29rdXAobmFtZSkge1xuICAgIHZhciBwID0gdGhpcy5wYXJlbnQ7XG4gICAgdmFyIHZhbCA9IHRoaXMudmFyaWFibGVzW25hbWVdO1xuXG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBwICYmIHAubG9va3VwKG5hbWUpO1xuICB9O1xuXG4gIF9wcm90by5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZShuYW1lLCBmb3JXcml0ZSkge1xuICAgIHZhciBwID0gZm9yV3JpdGUgJiYgdGhpcy5pc29sYXRlV3JpdGVzID8gdW5kZWZpbmVkIDogdGhpcy5wYXJlbnQ7XG4gICAgdmFyIHZhbCA9IHRoaXMudmFyaWFibGVzW25hbWVdO1xuXG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gcCAmJiBwLnJlc29sdmUobmFtZSk7XG4gIH07XG5cbiAgX3Byb3RvLnB1c2ggPSBmdW5jdGlvbiBwdXNoKGlzb2xhdGVXcml0ZXMpIHtcbiAgICByZXR1cm4gbmV3IEZyYW1lKHRoaXMsIGlzb2xhdGVXcml0ZXMpO1xuICB9O1xuXG4gIF9wcm90by5wb3AgPSBmdW5jdGlvbiBwb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9O1xuXG4gIHJldHVybiBGcmFtZTtcbn0oKTtcblxuZnVuY3Rpb24gbWFrZU1hY3JvKGFyZ05hbWVzLCBrd2FyZ05hbWVzLCBmdW5jKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWFjcm9BcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgbWFjcm9BcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdDb3VudCA9IG51bUFyZ3MobWFjcm9BcmdzKTtcbiAgICB2YXIgYXJncztcbiAgICB2YXIga3dhcmdzID0gZ2V0S2V5d29yZEFyZ3MobWFjcm9BcmdzKTtcblxuICAgIGlmIChhcmdDb3VudCA+IGFyZ05hbWVzLmxlbmd0aCkge1xuICAgICAgYXJncyA9IG1hY3JvQXJncy5zbGljZSgwLCBhcmdOYW1lcy5sZW5ndGgpOyAvLyBQb3NpdGlvbmFsIGFyZ3VtZW50cyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgaW4gYXNcbiAgICAgIC8vIGtleXdvcmQgYXJndW1lbnRzIChlc3NlbnRpYWxseSBkZWZhdWx0IHZhbHVlcylcblxuICAgICAgbWFjcm9BcmdzLnNsaWNlKGFyZ3MubGVuZ3RoLCBhcmdDb3VudCkuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpKSB7XG4gICAgICAgIGlmIChpIDwga3dhcmdOYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICBrd2FyZ3Nba3dhcmdOYW1lc1tpXV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYXJncy5wdXNoKGt3YXJncyk7XG4gICAgfSBlbHNlIGlmIChhcmdDb3VudCA8IGFyZ05hbWVzLmxlbmd0aCkge1xuICAgICAgYXJncyA9IG1hY3JvQXJncy5zbGljZSgwLCBhcmdDb3VudCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSBhcmdDb3VudDsgaSA8IGFyZ05hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBhcmcgPSBhcmdOYW1lc1tpXTsgLy8gS2V5d29yZCBhcmd1bWVudHMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIGFzXG4gICAgICAgIC8vIHBvc2l0aW9uYWwgYXJndW1lbnRzLCBpLmUuIHRoZSBjYWxsZXIgZXhwbGljaXRseVxuICAgICAgICAvLyB1c2VkIHRoZSBuYW1lIG9mIGEgcG9zaXRpb25hbCBhcmdcblxuICAgICAgICBhcmdzLnB1c2goa3dhcmdzW2FyZ10pO1xuICAgICAgICBkZWxldGUga3dhcmdzW2FyZ107XG4gICAgICB9XG5cbiAgICAgIGFyZ3MucHVzaChrd2FyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzID0gbWFjcm9BcmdzO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZUtleXdvcmRBcmdzKG9iaikge1xuICBvYmouX19rZXl3b3JkcyA9IHRydWU7XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzS2V5d29yZEFyZ3Mob2JqKSB7XG4gIHJldHVybiBvYmogJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgJ19fa2V5d29yZHMnKTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5d29yZEFyZ3MoYXJncykge1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG5cbiAgaWYgKGxlbikge1xuICAgIHZhciBsYXN0QXJnID0gYXJnc1tsZW4gLSAxXTtcblxuICAgIGlmIChpc0tleXdvcmRBcmdzKGxhc3RBcmcpKSB7XG4gICAgICByZXR1cm4gbGFzdEFyZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIG51bUFyZ3MoYXJncykge1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG5cbiAgaWYgKGxlbiA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIGxhc3RBcmcgPSBhcmdzW2xlbiAtIDFdO1xuXG4gIGlmIChpc0tleXdvcmRBcmdzKGxhc3RBcmcpKSB7XG4gICAgcmV0dXJuIGxlbiAtIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxufSAvLyBBIFNhZmVTdHJpbmcgb2JqZWN0IGluZGljYXRlcyB0aGF0IHRoZSBzdHJpbmcgc2hvdWxkIG5vdCBiZVxuLy8gYXV0b2VzY2FwZWQuIFRoaXMgaGFwcGVucyBtYWdpY2FsbHkgYmVjYXVzZSBhdXRvZXNjYXBpbmcgb25seVxuLy8gb2NjdXJzIG9uIHByaW1pdGl2ZSBzdHJpbmcgb2JqZWN0cy5cblxuXG5mdW5jdGlvbiBTYWZlU3RyaW5nKHZhbCkge1xuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgdGhpcy52YWwgPSB2YWw7XG4gIHRoaXMubGVuZ3RoID0gdmFsLmxlbmd0aDtcbn1cblxuU2FmZVN0cmluZy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN0cmluZy5wcm90b3R5cGUsIHtcbiAgbGVuZ3RoOiB7XG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAwXG4gIH1cbn0pO1xuXG5TYWZlU3RyaW5nLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZigpIHtcbiAgcmV0dXJuIHRoaXMudmFsO1xufTtcblxuU2FmZVN0cmluZy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHRoaXMudmFsO1xufTtcblxuZnVuY3Rpb24gY29weVNhZmVuZXNzKGRlc3QsIHRhcmdldCkge1xuICBpZiAoZGVzdCBpbnN0YW5jZW9mIFNhZmVTdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFNhZmVTdHJpbmcodGFyZ2V0KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQudG9TdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gbWFya1NhZmUodmFsKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcblxuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbmV3IFNhZmVTdHJpbmcodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gd3JhcFNhZmUoYXJncykge1xuICAgICAgdmFyIHJldCA9IHZhbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAodHlwZW9mIHJldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTYWZlU3RyaW5nKHJldCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdXBwcmVzc1ZhbHVlKHZhbCwgYXV0b2VzY2FwZSkge1xuICB2YWwgPSB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgPyB2YWwgOiAnJztcblxuICBpZiAoYXV0b2VzY2FwZSAmJiAhKHZhbCBpbnN0YW5jZW9mIFNhZmVTdHJpbmcpKSB7XG4gICAgdmFsID0gbGliLmVzY2FwZSh2YWwudG9TdHJpbmcoKSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBlbnN1cmVEZWZpbmVkKHZhbCwgbGluZW5vLCBjb2xubykge1xuICBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IGxpYi5UZW1wbGF0ZUVycm9yKCdhdHRlbXB0ZWQgdG8gb3V0cHV0IG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlJywgbGluZW5vICsgMSwgY29sbm8gKyAxKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIG1lbWJlckxvb2t1cChvYmosIHZhbCkge1xuICBpZiAob2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqW3ZhbF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9ialt2YWxdLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBvYmpbdmFsXTtcbn1cblxuZnVuY3Rpb24gY2FsbFdyYXAob2JqLCBuYW1lLCBjb250ZXh0LCBhcmdzKSB7XG4gIGlmICghb2JqKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gY2FsbCBgJyArIG5hbWUgKyAnYCwgd2hpY2ggaXMgdW5kZWZpbmVkIG9yIGZhbHNleScpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBjYWxsIGAnICsgbmFtZSArICdgLCB3aGljaCBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgcmV0dXJuIG9iai5hcHBseShjb250ZXh0LCBhcmdzKTtcbn1cblxuZnVuY3Rpb24gY29udGV4dE9yRnJhbWVMb29rdXAoY29udGV4dCwgZnJhbWUsIG5hbWUpIHtcbiAgdmFyIHZhbCA9IGZyYW1lLmxvb2t1cChuYW1lKTtcbiAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDogY29udGV4dC5sb29rdXAobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yLCBsaW5lbm8sIGNvbG5vKSB7XG4gIGlmIChlcnJvci5saW5lbm8pIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBsaWIuVGVtcGxhdGVFcnJvcihlcnJvciwgbGluZW5vLCBjb2xubyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXN5bmNFYWNoKGFyciwgZGltZW4sIGl0ZXIsIGNiKSB7XG4gIGlmIChsaWIuaXNBcnJheShhcnIpKSB7XG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgbGliLmFzeW5jSXRlcihhcnIsIGZ1bmN0aW9uIGl0ZXJDYWxsYmFjayhpdGVtLCBpLCBuZXh0KSB7XG4gICAgICBzd2l0Y2ggKGRpbWVuKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpdGVyKGl0ZW0sIGksIGxlbiwgbmV4dCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGl0ZXIoaXRlbVswXSwgaXRlbVsxXSwgaSwgbGVuLCBuZXh0KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaXRlcihpdGVtWzBdLCBpdGVtWzFdLCBpdGVtWzJdLCBpLCBsZW4sIG5leHQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaXRlbS5wdXNoKGksIGxlbiwgbmV4dCk7XG4gICAgICAgICAgaXRlci5hcHBseSh0aGlzLCBpdGVtKTtcbiAgICAgIH1cbiAgICB9LCBjYik7XG4gIH0gZWxzZSB7XG4gICAgbGliLmFzeW5jRm9yKGFyciwgZnVuY3Rpb24gaXRlckNhbGxiYWNrKGtleSwgdmFsLCBpLCBsZW4sIG5leHQpIHtcbiAgICAgIGl0ZXIoa2V5LCB2YWwsIGksIGxlbiwgbmV4dCk7XG4gICAgfSwgY2IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzeW5jQWxsKGFyciwgZGltZW4sIGZ1bmMsIGNiKSB7XG4gIHZhciBmaW5pc2hlZCA9IDA7XG4gIHZhciBsZW47XG4gIHZhciBvdXRwdXRBcnI7XG5cbiAgZnVuY3Rpb24gZG9uZShpLCBvdXRwdXQpIHtcbiAgICBmaW5pc2hlZCsrO1xuICAgIG91dHB1dEFycltpXSA9IG91dHB1dDtcblxuICAgIGlmIChmaW5pc2hlZCA9PT0gbGVuKSB7XG4gICAgICBjYihudWxsLCBvdXRwdXRBcnIuam9pbignJykpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsaWIuaXNBcnJheShhcnIpKSB7XG4gICAgbGVuID0gYXJyLmxlbmd0aDtcbiAgICBvdXRwdXRBcnIgPSBuZXcgQXJyYXkobGVuKTtcblxuICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgIGNiKG51bGwsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBhcnJbaV07XG5cbiAgICAgICAgc3dpdGNoIChkaW1lbikge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGZ1bmMoaXRlbSwgaSwgbGVuLCBkb25lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgZnVuYyhpdGVtWzBdLCBpdGVtWzFdLCBpLCBsZW4sIGRvbmUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBmdW5jKGl0ZW1bMF0sIGl0ZW1bMV0sIGl0ZW1bMl0sIGksIGxlbiwgZG9uZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpdGVtLnB1c2goaSwgbGVuLCBkb25lKTtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkodGhpcywgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGtleXMgPSBsaWIua2V5cyhhcnIgfHwge30pO1xuICAgIGxlbiA9IGtleXMubGVuZ3RoO1xuICAgIG91dHB1dEFyciA9IG5ldyBBcnJheShsZW4pO1xuXG4gICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgY2IobnVsbCwgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwga2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGsgPSBrZXlzW19pXTtcbiAgICAgICAgZnVuYyhrLCBhcnJba10sIF9pLCBsZW4sIGRvbmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tSXRlcmF0b3IoYXJyKSB7XG4gIGlmICh0eXBlb2YgYXJyICE9PSAnb2JqZWN0JyB8fCBhcnIgPT09IG51bGwgfHwgbGliLmlzQXJyYXkoYXJyKSkge1xuICAgIHJldHVybiBhcnI7XG4gIH0gZWxzZSBpZiAoc3VwcG9ydHNJdGVyYXRvcnMgJiYgU3ltYm9sLml0ZXJhdG9yIGluIGFycikge1xuICAgIHJldHVybiBhcnJheUZyb20oYXJyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXJyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBGcmFtZTogRnJhbWUsXG4gIG1ha2VNYWNybzogbWFrZU1hY3JvLFxuICBtYWtlS2V5d29yZEFyZ3M6IG1ha2VLZXl3b3JkQXJncyxcbiAgbnVtQXJnczogbnVtQXJncyxcbiAgc3VwcHJlc3NWYWx1ZTogc3VwcHJlc3NWYWx1ZSxcbiAgZW5zdXJlRGVmaW5lZDogZW5zdXJlRGVmaW5lZCxcbiAgbWVtYmVyTG9va3VwOiBtZW1iZXJMb29rdXAsXG4gIGNvbnRleHRPckZyYW1lTG9va3VwOiBjb250ZXh0T3JGcmFtZUxvb2t1cCxcbiAgY2FsbFdyYXA6IGNhbGxXcmFwLFxuICBoYW5kbGVFcnJvcjogaGFuZGxlRXJyb3IsXG4gIGlzQXJyYXk6IGxpYi5pc0FycmF5LFxuICBrZXlzOiBsaWIua2V5cyxcbiAgU2FmZVN0cmluZzogU2FmZVN0cmluZyxcbiAgY29weVNhZmVuZXNzOiBjb3B5U2FmZW5lc3MsXG4gIG1hcmtTYWZlOiBtYXJrU2FmZSxcbiAgYXN5bmNFYWNoOiBhc3luY0VhY2gsXG4gIGFzeW5jQWxsOiBhc3luY0FsbCxcbiAgaW5PcGVyYXRvcjogbGliLmluT3BlcmF0b3IsXG4gIGZyb21JdGVyYXRvcjogZnJvbUl0ZXJhdG9yXG59O1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBMb2FkZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgUHJlY29tcGlsZWRMb2FkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Mb2FkZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoUHJlY29tcGlsZWRMb2FkZXIsIF9Mb2FkZXIpO1xuXG4gIGZ1bmN0aW9uIFByZWNvbXBpbGVkTG9hZGVyKGNvbXBpbGVkVGVtcGxhdGVzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfTG9hZGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5wcmVjb21waWxlZCA9IGNvbXBpbGVkVGVtcGxhdGVzIHx8IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBQcmVjb21waWxlZExvYWRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFNvdXJjZSA9IGZ1bmN0aW9uIGdldFNvdXJjZShuYW1lKSB7XG4gICAgaWYgKHRoaXMucHJlY29tcGlsZWRbbmFtZV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNyYzoge1xuICAgICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgICBvYmo6IHRoaXMucHJlY29tcGlsZWRbbmFtZV1cbiAgICAgICAgfSxcbiAgICAgICAgcGF0aDogbmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gUHJlY29tcGlsZWRMb2FkZXI7XG59KExvYWRlcik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBQcmVjb21waWxlZExvYWRlcjogUHJlY29tcGlsZWRMb2FkZXJcbn07XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgT2JqID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxubW9kdWxlLmV4cG9ydHMgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9PYmopIHtcbiAgX2luaGVyaXRzTG9vc2UoTG9hZGVyLCBfT2JqKTtcblxuICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgcmV0dXJuIF9PYmouYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExvYWRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uID0gZnVuY3Rpb24gb24obmFtZSwgZnVuYykge1xuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMgfHwge307XG4gICAgdGhpcy5saXN0ZW5lcnNbbmFtZV0gPSB0aGlzLmxpc3RlbmVyc1tuYW1lXSB8fCBbXTtcbiAgICB0aGlzLmxpc3RlbmVyc1tuYW1lXS5wdXNoKGZ1bmMpO1xuICB9O1xuXG4gIF9wcm90by5lbWl0ID0gZnVuY3Rpb24gZW1pdChuYW1lKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGlzdGVuZXJzICYmIHRoaXMubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lci5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZShmcm9tLCB0bykge1xuICAgIHJldHVybiBwYXRoLnJlc29sdmUocGF0aC5kaXJuYW1lKGZyb20pLCB0byk7XG4gIH07XG5cbiAgX3Byb3RvLmlzUmVsYXRpdmUgPSBmdW5jdGlvbiBpc1JlbGF0aXZlKGZpbGVuYW1lKSB7XG4gICAgcmV0dXJuIGZpbGVuYW1lLmluZGV4T2YoJy4vJykgPT09IDAgfHwgZmlsZW5hbWUuaW5kZXhPZignLi4vJykgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIExvYWRlcjtcbn0oT2JqKTtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuIC8vIEEgc2ltcGxlIGNsYXNzIHN5c3RlbSwgbW9yZSBkb2N1bWVudGF0aW9uIHRvIGNvbWVcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGxpYiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbmZ1bmN0aW9uIHBhcmVudFdyYXAocGFyZW50LCBwcm9wKSB7XG4gIGlmICh0eXBlb2YgcGFyZW50ICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBwcm9wICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHByb3A7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICAvLyBTYXZlIHRoZSBjdXJyZW50IHBhcmVudCBtZXRob2RcbiAgICB2YXIgdG1wID0gdGhpcy5wYXJlbnQ7IC8vIFNldCBwYXJlbnQgdG8gdGhlIHByZXZpb3VzIG1ldGhvZCwgY2FsbCwgYW5kIHJlc3RvcmVcblxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHZhciByZXMgPSBwcm9wLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5wYXJlbnQgPSB0bXA7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kQ2xhc3MoY2xzLCBuYW1lLCBwcm9wcykge1xuICBwcm9wcyA9IHByb3BzIHx8IHt9O1xuICBsaWIua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIHByb3BzW2tdID0gcGFyZW50V3JhcChjbHMucHJvdG90eXBlW2tdLCBwcm9wc1trXSk7XG4gIH0pO1xuXG4gIHZhciBzdWJjbGFzcyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9jbHMpIHtcbiAgICBfaW5oZXJpdHNMb29zZShzdWJjbGFzcywgX2Nscyk7XG5cbiAgICBmdW5jdGlvbiBzdWJjbGFzcygpIHtcbiAgICAgIHJldHVybiBfY2xzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3Moc3ViY2xhc3MsIFt7XG4gICAgICBrZXk6IFwidHlwZW5hbWVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gc3ViY2xhc3M7XG4gIH0oY2xzKTtcblxuICBsaWIuX2Fzc2lnbihzdWJjbGFzcy5wcm90b3R5cGUsIHByb3BzKTtcblxuICByZXR1cm4gc3ViY2xhc3M7XG59XG5cbnZhciBPYmogPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBPYmooKSB7XG4gICAgLy8gVW5mb3J0dW5hdGVseSBuZWNlc3NhcnkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgdGhpcy5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gT2JqLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7fTtcblxuICBPYmouZXh0ZW5kID0gZnVuY3Rpb24gZXh0ZW5kKG5hbWUsIHByb3BzKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJvcHMgPSBuYW1lO1xuICAgICAgbmFtZSA9ICdhbm9ueW1vdXMnO1xuICAgIH1cblxuICAgIHJldHVybiBleHRlbmRDbGFzcyh0aGlzLCBuYW1lLCBwcm9wcyk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKE9iaiwgW3tcbiAgICBrZXk6IFwidHlwZW5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9iajtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmo7XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgbGliID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KSxcbiAgICBFbnZpcm9ubWVudCA9IF9yZXF1aXJlLkVudmlyb25tZW50LFxuICAgIFRlbXBsYXRlID0gX3JlcXVpcmUuVGVtcGxhdGU7XG5cbnZhciBMb2FkZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgbG9hZGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBwcmVjb21waWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIGNvbXBpbGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIHBhcnNlciA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBsZXhlciA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBydW50aW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIG5vZGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIGluc3RhbGxKaW5qYUNvbXBhdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpOyAvLyBBIHNpbmdsZSBpbnN0YW5jZSBvZiBhbiBlbnZpcm9ubWVudCwgc2luY2UgdGhpcyBpcyBzbyBjb21tb25seSB1c2VkXG5cblxudmFyIGU7XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZSh0ZW1wbGF0ZXNQYXRoLCBvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIGlmIChsaWIuaXNPYmplY3QodGVtcGxhdGVzUGF0aCkpIHtcbiAgICBvcHRzID0gdGVtcGxhdGVzUGF0aDtcbiAgICB0ZW1wbGF0ZXNQYXRoID0gbnVsbDtcbiAgfVxuXG4gIHZhciBUZW1wbGF0ZUxvYWRlcjtcblxuICBpZiAobG9hZGVycy5GaWxlU3lzdGVtTG9hZGVyKSB7XG4gICAgVGVtcGxhdGVMb2FkZXIgPSBuZXcgbG9hZGVycy5GaWxlU3lzdGVtTG9hZGVyKHRlbXBsYXRlc1BhdGgsIHtcbiAgICAgIHdhdGNoOiBvcHRzLndhdGNoLFxuICAgICAgbm9DYWNoZTogb3B0cy5ub0NhY2hlXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobG9hZGVycy5XZWJMb2FkZXIpIHtcbiAgICBUZW1wbGF0ZUxvYWRlciA9IG5ldyBsb2FkZXJzLldlYkxvYWRlcih0ZW1wbGF0ZXNQYXRoLCB7XG4gICAgICB1c2VDYWNoZTogb3B0cy53ZWIgJiYgb3B0cy53ZWIudXNlQ2FjaGUsXG4gICAgICBhc3luYzogb3B0cy53ZWIgJiYgb3B0cy53ZWIuYXN5bmNcbiAgICB9KTtcbiAgfVxuXG4gIGUgPSBuZXcgRW52aXJvbm1lbnQoVGVtcGxhdGVMb2FkZXIsIG9wdHMpO1xuXG4gIGlmIChvcHRzICYmIG9wdHMuZXhwcmVzcykge1xuICAgIGUuZXhwcmVzcyhvcHRzLmV4cHJlc3MpO1xuICB9XG5cbiAgcmV0dXJuIGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFbnZpcm9ubWVudDogRW52aXJvbm1lbnQsXG4gIFRlbXBsYXRlOiBUZW1wbGF0ZSxcbiAgTG9hZGVyOiBMb2FkZXIsXG4gIEZpbGVTeXN0ZW1Mb2FkZXI6IGxvYWRlcnMuRmlsZVN5c3RlbUxvYWRlcixcbiAgUHJlY29tcGlsZWRMb2FkZXI6IGxvYWRlcnMuUHJlY29tcGlsZWRMb2FkZXIsXG4gIFdlYkxvYWRlcjogbG9hZGVycy5XZWJMb2FkZXIsXG4gIGNvbXBpbGVyOiBjb21waWxlcixcbiAgcGFyc2VyOiBwYXJzZXIsXG4gIGxleGVyOiBsZXhlcixcbiAgcnVudGltZTogcnVudGltZSxcbiAgbGliOiBsaWIsXG4gIG5vZGVzOiBub2RlcyxcbiAgaW5zdGFsbEppbmphQ29tcGF0OiBpbnN0YWxsSmluamFDb21wYXQsXG4gIGNvbmZpZ3VyZTogY29uZmlndXJlLFxuICBjb21waWxlOiBmdW5jdGlvbiBjb21waWxlKHNyYywgZW52LCBwYXRoLCBlYWdlckNvbXBpbGUpIHtcbiAgICBpZiAoIWUpIHtcbiAgICAgIGNvbmZpZ3VyZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgVGVtcGxhdGUoc3JjLCBlbnYsIHBhdGgsIGVhZ2VyQ29tcGlsZSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKG5hbWUsIGN0eCwgY2IpIHtcbiAgICBpZiAoIWUpIHtcbiAgICAgIGNvbmZpZ3VyZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBlLnJlbmRlcihuYW1lLCBjdHgsIGNiKTtcbiAgfSxcbiAgcmVuZGVyU3RyaW5nOiBmdW5jdGlvbiByZW5kZXJTdHJpbmcoc3JjLCBjdHgsIGNiKSB7XG4gICAgaWYgKCFlKSB7XG4gICAgICBjb25maWd1cmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZS5yZW5kZXJTdHJpbmcoc3JjLCBjdHgsIGNiKTtcbiAgfSxcbiAgcHJlY29tcGlsZTogcHJlY29tcGlsZSA/IHByZWNvbXBpbGUucHJlY29tcGlsZSA6IHVuZGVmaW5lZCxcbiAgcHJlY29tcGlsZVN0cmluZzogcHJlY29tcGlsZSA/IHByZWNvbXBpbGUucHJlY29tcGlsZVN0cmluZyA6IHVuZGVmaW5lZFxufTtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgYXNhcCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbnZhciBfd2F0ZXJmYWxsID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cbnZhciBsaWIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgY29tcGlsZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgZmlsdGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXG52YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpLFxuICAgIEZpbGVTeXN0ZW1Mb2FkZXIgPSBfcmVxdWlyZS5GaWxlU3lzdGVtTG9hZGVyLFxuICAgIFdlYkxvYWRlciA9IF9yZXF1aXJlLldlYkxvYWRlcixcbiAgICBQcmVjb21waWxlZExvYWRlciA9IF9yZXF1aXJlLlByZWNvbXBpbGVkTG9hZGVyO1xuXG52YXIgdGVzdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxudmFyIGdsb2JhbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblxudmFyIE9iaiA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBnbG9iYWxSdW50aW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIGhhbmRsZUVycm9yID0gZ2xvYmFsUnVudGltZS5oYW5kbGVFcnJvcixcbiAgICBGcmFtZSA9IGdsb2JhbFJ1bnRpbWUuRnJhbWU7XG5cbnZhciBleHByZXNzQXBwID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7IC8vIElmIHRoZSB1c2VyIGlzIHVzaW5nIHRoZSBhc3luYyBBUEksICphbHdheXMqIGNhbGwgaXRcbi8vIGFzeW5jaHJvbm91c2x5IGV2ZW4gaWYgdGhlIHRlbXBsYXRlIHdhcyBzeW5jaHJvbm91cy5cblxuXG5mdW5jdGlvbiBjYWxsYmFja0FzYXAoY2IsIGVyciwgcmVzKSB7XG4gIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgIGNiKGVyciwgcmVzKTtcbiAgfSk7XG59XG4vKipcbiAqIEEgbm8tb3AgdGVtcGxhdGUsIGZvciB1c2Ugd2l0aCB7JSBpbmNsdWRlIGlnbm9yZSBtaXNzaW5nICV9XG4gKi9cblxuXG52YXIgbm9vcFRtcGxTcmMgPSB7XG4gIHR5cGU6ICdjb2RlJyxcbiAgb2JqOiB7XG4gICAgcm9vdDogZnVuY3Rpb24gcm9vdChlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IobnVsbCwgJycpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYihoYW5kbGVFcnJvcihlLCBudWxsLCBudWxsKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgRW52aXJvbm1lbnQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9PYmopIHtcbiAgX2luaGVyaXRzTG9vc2UoRW52aXJvbm1lbnQsIF9PYmopO1xuXG4gIGZ1bmN0aW9uIEVudmlyb25tZW50KCkge1xuICAgIHJldHVybiBfT2JqLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBFbnZpcm9ubWVudC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KGxvYWRlcnMsIG9wdHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gVGhlIGRldiBmbGFnIGRldGVybWluZXMgdGhlIHRyYWNlIHRoYXQnbGwgYmUgc2hvd24gb24gZXJyb3JzLlxuICAgIC8vIElmIHNldCB0byB0cnVlLCByZXR1cm5zIHRoZSBmdWxsIHRyYWNlIGZyb20gdGhlIGVycm9yIHBvaW50LFxuICAgIC8vIG90aGVyd2lzZSB3aWxsIHJldHVybiB0cmFjZSBzdGFydGluZyBmcm9tIFRlbXBsYXRlLnJlbmRlclxuICAgIC8vICh0aGUgZnVsbCB0cmFjZSBmcm9tIHdpdGhpbiBudW5qdWNrcyBtYXkgY29uZnVzZSBkZXZlbG9wZXJzIHVzaW5nXG4gICAgLy8gIHRoZSBsaWJyYXJ5KVxuICAgIC8vIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAgb3B0cyA9IHRoaXMub3B0cyA9IG9wdHMgfHwge307XG4gICAgdGhpcy5vcHRzLmRldiA9ICEhb3B0cy5kZXY7IC8vIFRoZSBhdXRvZXNjYXBlIGZsYWcgc2V0cyBnbG9iYWwgYXV0b2VzY2FwaW5nLiBJZiB0cnVlLFxuICAgIC8vIGV2ZXJ5IHN0cmluZyB2YXJpYWJsZSB3aWxsIGJlIGVzY2FwZWQgYnkgZGVmYXVsdC5cbiAgICAvLyBJZiBmYWxzZSwgc3RyaW5ncyBjYW4gYmUgbWFudWFsbHkgZXNjYXBlZCB1c2luZyB0aGUgYGVzY2FwZWAgZmlsdGVyLlxuICAgIC8vIGRlZmF1bHRzIHRvIHRydWVcblxuICAgIHRoaXMub3B0cy5hdXRvZXNjYXBlID0gb3B0cy5hdXRvZXNjYXBlICE9IG51bGwgPyBvcHRzLmF1dG9lc2NhcGUgOiB0cnVlOyAvLyBJZiB0cnVlLCB0aGlzIHdpbGwgbWFrZSB0aGUgc3lzdGVtIHRocm93IGVycm9ycyBpZiB0cnlpbmdcbiAgICAvLyB0byBvdXRwdXQgYSBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZVxuXG4gICAgdGhpcy5vcHRzLnRocm93T25VbmRlZmluZWQgPSAhIW9wdHMudGhyb3dPblVuZGVmaW5lZDtcbiAgICB0aGlzLm9wdHMudHJpbUJsb2NrcyA9ICEhb3B0cy50cmltQmxvY2tzO1xuICAgIHRoaXMub3B0cy5sc3RyaXBCbG9ja3MgPSAhIW9wdHMubHN0cmlwQmxvY2tzO1xuICAgIHRoaXMubG9hZGVycyA9IFtdO1xuXG4gICAgaWYgKCFsb2FkZXJzKSB7XG4gICAgICAvLyBUaGUgZmlsZXN5c3RlbSBsb2FkZXIgaXMgb25seSBhdmFpbGFibGUgc2VydmVyLXNpZGVcbiAgICAgIGlmIChGaWxlU3lzdGVtTG9hZGVyKSB7XG4gICAgICAgIHRoaXMubG9hZGVycyA9IFtuZXcgRmlsZVN5c3RlbUxvYWRlcigndmlld3MnKV07XG4gICAgICB9IGVsc2UgaWYgKFdlYkxvYWRlcikge1xuICAgICAgICB0aGlzLmxvYWRlcnMgPSBbbmV3IFdlYkxvYWRlcignL3ZpZXdzJyldO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRlcnMgPSBsaWIuaXNBcnJheShsb2FkZXJzKSA/IGxvYWRlcnMgOiBbbG9hZGVyc107XG4gICAgfSAvLyBJdCdzIGVhc3kgdG8gdXNlIHByZWNvbXBpbGVkIHRlbXBsYXRlczoganVzdCBpbmNsdWRlIHRoZW1cbiAgICAvLyBiZWZvcmUgeW91IGNvbmZpZ3VyZSBudW5qdWNrcyBhbmQgdGhpcyB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgICAvLyBwaWNrIGl0IHVwIGFuZCB1c2UgaXRcblxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5udW5qdWNrc1ByZWNvbXBpbGVkKSB7XG4gICAgICB0aGlzLmxvYWRlcnMudW5zaGlmdChuZXcgUHJlY29tcGlsZWRMb2FkZXIod2luZG93Lm51bmp1Y2tzUHJlY29tcGlsZWQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRDYWNoZSgpO1xuICAgIHRoaXMuZ2xvYmFscyA9IGdsb2JhbHMoKTtcbiAgICB0aGlzLmZpbHRlcnMgPSB7fTtcbiAgICB0aGlzLnRlc3RzID0ge307XG4gICAgdGhpcy5hc3luY0ZpbHRlcnMgPSBbXTtcbiAgICB0aGlzLmV4dGVuc2lvbnMgPSB7fTtcbiAgICB0aGlzLmV4dGVuc2lvbnNMaXN0ID0gW107XG5cbiAgICBsaWIuX2VudHJpZXMoZmlsdGVycykuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIG5hbWUgPSBfcmVmWzBdLFxuICAgICAgICAgIGZpbHRlciA9IF9yZWZbMV07XG4gICAgICByZXR1cm4gX3RoaXMuYWRkRmlsdGVyKG5hbWUsIGZpbHRlcik7XG4gICAgfSk7XG5cbiAgICBsaWIuX2VudHJpZXModGVzdHMpLmZvckVhY2goZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgbmFtZSA9IF9yZWYyWzBdLFxuICAgICAgICAgIHRlc3QgPSBfcmVmMlsxXTtcbiAgICAgIHJldHVybiBfdGhpcy5hZGRUZXN0KG5hbWUsIHRlc3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5pbml0Q2FjaGUgPSBmdW5jdGlvbiBpbml0Q2FjaGUoKSB7XG4gICAgLy8gQ2FjaGluZyBhbmQgY2FjaGUgYnVzdGluZ1xuICAgIHRoaXMubG9hZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChsb2FkZXIpIHtcbiAgICAgIGxvYWRlci5jYWNoZSA9IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIGxvYWRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2FkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICh0ZW1wbGF0ZSkge1xuICAgICAgICAgIGxvYWRlci5jYWNoZVt0ZW1wbGF0ZV0gPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uYWRkRXh0ZW5zaW9uID0gZnVuY3Rpb24gYWRkRXh0ZW5zaW9uKG5hbWUsIGV4dGVuc2lvbikge1xuICAgIGV4dGVuc2lvbi5fX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuZXh0ZW5zaW9uc1tuYW1lXSA9IGV4dGVuc2lvbjtcbiAgICB0aGlzLmV4dGVuc2lvbnNMaXN0LnB1c2goZXh0ZW5zaW9uKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcmVtb3ZlRXh0ZW5zaW9uKG5hbWUpIHtcbiAgICB2YXIgZXh0ZW5zaW9uID0gdGhpcy5nZXRFeHRlbnNpb24obmFtZSk7XG5cbiAgICBpZiAoIWV4dGVuc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXh0ZW5zaW9uc0xpc3QgPSBsaWIud2l0aG91dCh0aGlzLmV4dGVuc2lvbnNMaXN0LCBleHRlbnNpb24pO1xuICAgIGRlbGV0ZSB0aGlzLmV4dGVuc2lvbnNbbmFtZV07XG4gIH07XG5cbiAgX3Byb3RvLmdldEV4dGVuc2lvbiA9IGZ1bmN0aW9uIGdldEV4dGVuc2lvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc1tuYW1lXTtcbiAgfTtcblxuICBfcHJvdG8uaGFzRXh0ZW5zaW9uID0gZnVuY3Rpb24gaGFzRXh0ZW5zaW9uKG5hbWUpIHtcbiAgICByZXR1cm4gISF0aGlzLmV4dGVuc2lvbnNbbmFtZV07XG4gIH07XG5cbiAgX3Byb3RvLmFkZEdsb2JhbCA9IGZ1bmN0aW9uIGFkZEdsb2JhbChuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuZ2xvYmFsc1tuYW1lXSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5nZXRHbG9iYWwgPSBmdW5jdGlvbiBnZXRHbG9iYWwobmFtZSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5nbG9iYWxzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbG9iYWwgbm90IGZvdW5kOiAnICsgbmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsc1tuYW1lXTtcbiAgfTtcblxuICBfcHJvdG8uYWRkRmlsdGVyID0gZnVuY3Rpb24gYWRkRmlsdGVyKG5hbWUsIGZ1bmMsIGFzeW5jKSB7XG4gICAgdmFyIHdyYXBwZWQgPSBmdW5jO1xuXG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICB0aGlzLmFzeW5jRmlsdGVycy5wdXNoKG5hbWUpO1xuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyc1tuYW1lXSA9IHdyYXBwZWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmdldEZpbHRlciA9IGZ1bmN0aW9uIGdldEZpbHRlcihuYW1lKSB7XG4gICAgaWYgKCF0aGlzLmZpbHRlcnNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZmlsdGVyIG5vdCBmb3VuZDogJyArIG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZpbHRlcnNbbmFtZV07XG4gIH07XG5cbiAgX3Byb3RvLmFkZFRlc3QgPSBmdW5jdGlvbiBhZGRUZXN0KG5hbWUsIGZ1bmMpIHtcbiAgICB0aGlzLnRlc3RzW25hbWVdID0gZnVuYztcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uZ2V0VGVzdCA9IGZ1bmN0aW9uIGdldFRlc3QobmFtZSkge1xuICAgIGlmICghdGhpcy50ZXN0c1tuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0ZXN0IG5vdCBmb3VuZDogJyArIG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRlc3RzW25hbWVdO1xuICB9O1xuXG4gIF9wcm90by5yZXNvbHZlVGVtcGxhdGUgPSBmdW5jdGlvbiByZXNvbHZlVGVtcGxhdGUobG9hZGVyLCBwYXJlbnROYW1lLCBmaWxlbmFtZSkge1xuICAgIHZhciBpc1JlbGF0aXZlID0gbG9hZGVyLmlzUmVsYXRpdmUgJiYgcGFyZW50TmFtZSA/IGxvYWRlci5pc1JlbGF0aXZlKGZpbGVuYW1lKSA6IGZhbHNlO1xuICAgIHJldHVybiBpc1JlbGF0aXZlICYmIGxvYWRlci5yZXNvbHZlID8gbG9hZGVyLnJlc29sdmUocGFyZW50TmFtZSwgZmlsZW5hbWUpIDogZmlsZW5hbWU7XG4gIH07XG5cbiAgX3Byb3RvLmdldFRlbXBsYXRlID0gZnVuY3Rpb24gZ2V0VGVtcGxhdGUobmFtZSwgZWFnZXJDb21waWxlLCBwYXJlbnROYW1lLCBpZ25vcmVNaXNzaW5nLCBjYikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciB0bXBsID0gbnVsbDtcblxuICAgIGlmIChuYW1lICYmIG5hbWUucmF3KSB7XG4gICAgICAvLyB0aGlzIGZpeGVzIGF1dG9lc2NhcGUgZm9yIHRlbXBsYXRlcyByZWZlcmVuY2VkIGluIHN5bWJvbHNcbiAgICAgIG5hbWUgPSBuYW1lLnJhdztcbiAgICB9XG5cbiAgICBpZiAobGliLmlzRnVuY3Rpb24ocGFyZW50TmFtZSkpIHtcbiAgICAgIGNiID0gcGFyZW50TmFtZTtcbiAgICAgIHBhcmVudE5hbWUgPSBudWxsO1xuICAgICAgZWFnZXJDb21waWxlID0gZWFnZXJDb21waWxlIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChsaWIuaXNGdW5jdGlvbihlYWdlckNvbXBpbGUpKSB7XG4gICAgICBjYiA9IGVhZ2VyQ29tcGlsZTtcbiAgICAgIGVhZ2VyQ29tcGlsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChuYW1lIGluc3RhbmNlb2YgVGVtcGxhdGUpIHtcbiAgICAgIHRtcGwgPSBuYW1lO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RlbXBsYXRlIG5hbWVzIG11c3QgYmUgYSBzdHJpbmc6ICcgKyBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxvYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGxvYWRlciA9IHRoaXMubG9hZGVyc1tpXTtcbiAgICAgICAgdG1wbCA9IGxvYWRlci5jYWNoZVt0aGlzLnJlc29sdmVUZW1wbGF0ZShsb2FkZXIsIHBhcmVudE5hbWUsIG5hbWUpXTtcblxuICAgICAgICBpZiAodG1wbCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRtcGwpIHtcbiAgICAgIGlmIChlYWdlckNvbXBpbGUpIHtcbiAgICAgICAgdG1wbC5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYihudWxsLCB0bXBsKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0bXBsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzeW5jUmVzdWx0O1xuXG4gICAgdmFyIGNyZWF0ZVRlbXBsYXRlID0gZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUoZXJyLCBpbmZvKSB7XG4gICAgICBpZiAoIWluZm8gJiYgIWVyciAmJiAhaWdub3JlTWlzc2luZykge1xuICAgICAgICBlcnIgPSBuZXcgRXJyb3IoJ3RlbXBsYXRlIG5vdCBmb3VuZDogJyArIG5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIGNiKGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvID0gaW5mbyB8fCB7XG4gICAgICAgICAgc3JjOiBub29wVG1wbFNyYyxcbiAgICAgICAgICBwYXRoOiAnJ1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbmV3VG1wbCA9IG5ldyBUZW1wbGF0ZShpbmZvLnNyYywgX3RoaXMyLCBpbmZvLnBhdGgsIGVhZ2VyQ29tcGlsZSk7XG5cbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgY2IobnVsbCwgbmV3VG1wbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3luY1Jlc3VsdCA9IG5ld1RtcGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliLmFzeW5jSXRlcih0aGlzLmxvYWRlcnMsIGZ1bmN0aW9uIChsb2FkZXIsIGksIG5leHQsIGRvbmUpIHtcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShlcnIsIHNyYykge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZG9uZShlcnIpO1xuICAgICAgICB9IGVsc2UgaWYgKHNyYykge1xuICAgICAgICAgIHNyYy5sb2FkZXIgPSBsb2FkZXI7XG4gICAgICAgICAgZG9uZShudWxsLCBzcmMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBSZXNvbHZlIG5hbWUgcmVsYXRpdmUgdG8gcGFyZW50TmFtZVxuXG5cbiAgICAgIG5hbWUgPSB0aGF0LnJlc29sdmVUZW1wbGF0ZShsb2FkZXIsIHBhcmVudE5hbWUsIG5hbWUpO1xuXG4gICAgICBpZiAobG9hZGVyLmFzeW5jKSB7XG4gICAgICAgIGxvYWRlci5nZXRTb3VyY2UobmFtZSwgaGFuZGxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZShudWxsLCBsb2FkZXIuZ2V0U291cmNlKG5hbWUpKTtcbiAgICAgIH1cbiAgICB9LCBjcmVhdGVUZW1wbGF0ZSk7XG4gICAgcmV0dXJuIHN5bmNSZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLmV4cHJlc3MgPSBmdW5jdGlvbiBleHByZXNzKGFwcCkge1xuICAgIHJldHVybiBleHByZXNzQXBwKHRoaXMsIGFwcCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihuYW1lLCBjdHgsIGNiKSB7XG4gICAgaWYgKGxpYi5pc0Z1bmN0aW9uKGN0eCkpIHtcbiAgICAgIGNiID0gY3R4O1xuICAgICAgY3R4ID0gbnVsbDtcbiAgICB9IC8vIFdlIHN1cHBvcnQgYSBzeW5jaHJvbm91cyBBUEkgdG8gbWFrZSBpdCBlYXNpZXIgdG8gbWlncmF0ZVxuICAgIC8vIGV4aXN0aW5nIGNvZGUgdG8gYXN5bmMuIFRoaXMgd29ya3MgYmVjYXVzZSBpZiB5b3UgZG9uJ3QgZG9cbiAgICAvLyBhbnl0aGluZyBhc3luYyB3b3JrLCB0aGUgd2hvbGUgdGhpbmcgaXMgYWN0dWFsbHkgcnVuXG4gICAgLy8gc3luY2hyb25vdXNseS5cblxuXG4gICAgdmFyIHN5bmNSZXN1bHQgPSBudWxsO1xuICAgIHRoaXMuZ2V0VGVtcGxhdGUobmFtZSwgZnVuY3Rpb24gKGVyciwgdG1wbCkge1xuICAgICAgaWYgKGVyciAmJiBjYikge1xuICAgICAgICBjYWxsYmFja0FzYXAoY2IsIGVycik7XG4gICAgICB9IGVsc2UgaWYgKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzeW5jUmVzdWx0ID0gdG1wbC5yZW5kZXIoY3R4LCBjYik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN5bmNSZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlclN0cmluZyA9IGZ1bmN0aW9uIHJlbmRlclN0cmluZyhzcmMsIGN0eCwgb3B0cywgY2IpIHtcbiAgICBpZiAobGliLmlzRnVuY3Rpb24ob3B0cykpIHtcbiAgICAgIGNiID0gb3B0cztcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICB2YXIgdG1wbCA9IG5ldyBUZW1wbGF0ZShzcmMsIHRoaXMsIG9wdHMucGF0aCk7XG4gICAgcmV0dXJuIHRtcGwucmVuZGVyKGN0eCwgY2IpO1xuICB9O1xuXG4gIF9wcm90by53YXRlcmZhbGwgPSBmdW5jdGlvbiB3YXRlcmZhbGwodGFza3MsIGNhbGxiYWNrLCBmb3JjZUFzeW5jKSB7XG4gICAgcmV0dXJuIF93YXRlcmZhbGwodGFza3MsIGNhbGxiYWNrLCBmb3JjZUFzeW5jKTtcbiAgfTtcblxuICByZXR1cm4gRW52aXJvbm1lbnQ7XG59KE9iaik7XG5cbnZhciBDb250ZXh0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfT2JqMikge1xuICBfaW5oZXJpdHNMb29zZShDb250ZXh0LCBfT2JqMik7XG5cbiAgZnVuY3Rpb24gQ29udGV4dCgpIHtcbiAgICByZXR1cm4gX09iajIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBDb250ZXh0LnByb3RvdHlwZTtcblxuICBfcHJvdG8yLmluaXQgPSBmdW5jdGlvbiBpbml0KGN0eCwgYmxvY2tzLCBlbnYpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIC8vIEhhcyB0byBiZSB0aWVkIHRvIGFuIGVudmlyb25tZW50IHNvIHdlIGNhbiB0YXAgaW50byBpdHMgZ2xvYmFscy5cbiAgICB0aGlzLmVudiA9IGVudiB8fCBuZXcgRW52aXJvbm1lbnQoKTsgLy8gTWFrZSBhIGR1cGxpY2F0ZSBvZiBjdHhcblxuICAgIHRoaXMuY3R4ID0gbGliLmV4dGVuZCh7fSwgY3R4KTtcbiAgICB0aGlzLmJsb2NrcyA9IHt9O1xuICAgIHRoaXMuZXhwb3J0ZWQgPSBbXTtcbiAgICBsaWIua2V5cyhibG9ja3MpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF90aGlzMy5hZGRCbG9jayhuYW1lLCBibG9ja3NbbmFtZV0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90bzIubG9va3VwID0gZnVuY3Rpb24gbG9va3VwKG5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIG9uZSBvZiB0aGUgbW9zdCBjYWxsZWQgZnVuY3Rpb25zLCBzbyBvcHRpbWl6ZSBmb3JcbiAgICAvLyB0aGUgdHlwaWNhbCBjYXNlIHdoZXJlIHRoZSBuYW1lIGlzbid0IGluIHRoZSBnbG9iYWxzXG4gICAgaWYgKG5hbWUgaW4gdGhpcy5lbnYuZ2xvYmFscyAmJiAhKG5hbWUgaW4gdGhpcy5jdHgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbnYuZ2xvYmFsc1tuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY3R4W25hbWVdO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8yLnNldFZhcmlhYmxlID0gZnVuY3Rpb24gc2V0VmFyaWFibGUobmFtZSwgdmFsKSB7XG4gICAgdGhpcy5jdHhbbmFtZV0gPSB2YWw7XG4gIH07XG5cbiAgX3Byb3RvMi5nZXRWYXJpYWJsZXMgPSBmdW5jdGlvbiBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3R4O1xuICB9O1xuXG4gIF9wcm90bzIuYWRkQmxvY2sgPSBmdW5jdGlvbiBhZGRCbG9jayhuYW1lLCBibG9jaykge1xuICAgIHRoaXMuYmxvY2tzW25hbWVdID0gdGhpcy5ibG9ja3NbbmFtZV0gfHwgW107XG4gICAgdGhpcy5ibG9ja3NbbmFtZV0ucHVzaChibG9jayk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5nZXRCbG9jayA9IGZ1bmN0aW9uIGdldEJsb2NrKG5hbWUpIHtcbiAgICBpZiAoIXRoaXMuYmxvY2tzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gYmxvY2sgXCInICsgbmFtZSArICdcIicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmJsb2Nrc1tuYW1lXVswXTtcbiAgfTtcblxuICBfcHJvdG8yLmdldFN1cGVyID0gZnVuY3Rpb24gZ2V0U3VwZXIoZW52LCBuYW1lLCBibG9jaywgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG4gICAgdmFyIGlkeCA9IGxpYi5pbmRleE9mKHRoaXMuYmxvY2tzW25hbWVdIHx8IFtdLCBibG9jayk7XG4gICAgdmFyIGJsayA9IHRoaXMuYmxvY2tzW25hbWVdW2lkeCArIDFdO1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcblxuICAgIGlmIChpZHggPT09IC0xIHx8ICFibGspIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gc3VwZXIgYmxvY2sgYXZhaWxhYmxlIGZvciBcIicgKyBuYW1lICsgJ1wiJyk7XG4gICAgfVxuXG4gICAgYmxrKGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKTtcbiAgfTtcblxuICBfcHJvdG8yLmFkZEV4cG9ydCA9IGZ1bmN0aW9uIGFkZEV4cG9ydChuYW1lKSB7XG4gICAgdGhpcy5leHBvcnRlZC5wdXNoKG5hbWUpO1xuICB9O1xuXG4gIF9wcm90bzIuZ2V0RXhwb3J0ZWQgPSBmdW5jdGlvbiBnZXRFeHBvcnRlZCgpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBleHBvcnRlZCA9IHt9O1xuICAgIHRoaXMuZXhwb3J0ZWQuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgZXhwb3J0ZWRbbmFtZV0gPSBfdGhpczQuY3R4W25hbWVdO1xuICAgIH0pO1xuICAgIHJldHVybiBleHBvcnRlZDtcbiAgfTtcblxuICByZXR1cm4gQ29udGV4dDtcbn0oT2JqKTtcblxudmFyIFRlbXBsYXRlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfT2JqMykge1xuICBfaW5oZXJpdHNMb29zZShUZW1wbGF0ZSwgX09iajMpO1xuXG4gIGZ1bmN0aW9uIFRlbXBsYXRlKCkge1xuICAgIHJldHVybiBfT2JqMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvMyA9IFRlbXBsYXRlLnByb3RvdHlwZTtcblxuICBfcHJvdG8zLmluaXQgPSBmdW5jdGlvbiBpbml0KHNyYywgZW52LCBwYXRoLCBlYWdlckNvbXBpbGUpIHtcbiAgICB0aGlzLmVudiA9IGVudiB8fCBuZXcgRW52aXJvbm1lbnQoKTtcblxuICAgIGlmIChsaWIuaXNPYmplY3Qoc3JjKSkge1xuICAgICAgc3dpdGNoIChzcmMudHlwZSkge1xuICAgICAgICBjYXNlICdjb2RlJzpcbiAgICAgICAgICB0aGlzLnRtcGxQcm9wcyA9IHNyYy5vYmo7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICB0aGlzLnRtcGxTdHIgPSBzcmMub2JqO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCB0ZW1wbGF0ZSBvYmplY3QgdHlwZSBcIiArIHNyYy50eXBlICsgXCI7IGV4cGVjdGVkICdjb2RlJywgb3IgJ3N0cmluZydcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsaWIuaXNTdHJpbmcoc3JjKSkge1xuICAgICAgdGhpcy50bXBsU3RyID0gc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NyYyBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIG9iamVjdCBkZXNjcmliaW5nIHRoZSBzb3VyY2UnKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuXG4gICAgaWYgKGVhZ2VyQ29tcGlsZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fY29tcGlsZSgpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IGxpYi5fcHJldHRpZnlFcnJvcih0aGlzLnBhdGgsIHRoaXMuZW52Lm9wdHMuZGV2LCBlcnIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBpbGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKGN0eCwgcGFyZW50RnJhbWUsIGNiKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICBpZiAodHlwZW9mIGN0eCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBjdHg7XG4gICAgICBjdHggPSB7fTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJlbnRGcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBwYXJlbnRGcmFtZTtcbiAgICAgIHBhcmVudEZyYW1lID0gbnVsbDtcbiAgICB9IC8vIElmIHRoZXJlIGlzIGEgcGFyZW50IGZyYW1lLCB3ZSBhcmUgYmVpbmcgY2FsbGVkIGZyb20gaW50ZXJuYWxcbiAgICAvLyBjb2RlIG9mIGFub3RoZXIgdGVtcGxhdGUsIGFuZCB0aGUgaW50ZXJuYWwgc3lzdGVtXG4gICAgLy8gZGVwZW5kcyBvbiB0aGUgc3luYy9hc3luYyBuYXR1cmUgb2YgdGhlIHBhcmVudCB0ZW1wbGF0ZVxuICAgIC8vIHRvIGJlIGluaGVyaXRlZCwgc28gZm9yY2UgYW4gYXN5bmMgY2FsbGJhY2tcblxuXG4gICAgdmFyIGZvcmNlQXN5bmMgPSAhcGFyZW50RnJhbWU7IC8vIENhdGNoIGNvbXBpbGUgZXJyb3JzIGZvciBhc3luYyByZW5kZXJpbmdcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbXBpbGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2YXIgZXJyID0gbGliLl9wcmV0dGlmeUVycm9yKHRoaXMucGF0aCwgdGhpcy5lbnYub3B0cy5kZXYsIGUpO1xuXG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrQXNhcChjYiwgZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KGN0eCB8fCB7fSwgdGhpcy5ibG9ja3MsIHRoaXMuZW52KTtcbiAgICB2YXIgZnJhbWUgPSBwYXJlbnRGcmFtZSA/IHBhcmVudEZyYW1lLnB1c2godHJ1ZSkgOiBuZXcgRnJhbWUoKTtcbiAgICBmcmFtZS50b3BMZXZlbCA9IHRydWU7XG4gICAgdmFyIHN5bmNSZXN1bHQgPSBudWxsO1xuICAgIHZhciBkaWRFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMucm9vdFJlbmRlckZ1bmModGhpcy5lbnYsIGNvbnRleHQsIGZyYW1lLCBnbG9iYWxSdW50aW1lLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgIGlmIChkaWRFcnJvcikge1xuICAgICAgICAvLyBwcmV2ZW50IG11bHRpcGxlIGNhbGxzIHRvIGNiXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGVycikge1xuICAgICAgICBlcnIgPSBsaWIuX3ByZXR0aWZ5RXJyb3IoX3RoaXM1LnBhdGgsIF90aGlzNS5lbnYub3B0cy5kZXYsIGVycik7XG4gICAgICAgIGRpZEVycm9yID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGlmIChmb3JjZUFzeW5jKSB7XG4gICAgICAgICAgY2FsbGJhY2tBc2FwKGNiLCBlcnIsIHJlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IoZXJyLCByZXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG5cbiAgICAgICAgc3luY1Jlc3VsdCA9IHJlcztcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3luY1Jlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8zLmdldEV4cG9ydGVkID0gZnVuY3Rpb24gZ2V0RXhwb3J0ZWQoY3R4LCBwYXJlbnRGcmFtZSwgY2IpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gICAgaWYgKHR5cGVvZiBjdHggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gY3R4O1xuICAgICAgY3R4ID0ge307XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJlbnRGcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBwYXJlbnRGcmFtZTtcbiAgICAgIHBhcmVudEZyYW1lID0gbnVsbDtcbiAgICB9IC8vIENhdGNoIGNvbXBpbGUgZXJyb3JzIGZvciBhc3luYyByZW5kZXJpbmdcblxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29tcGlsZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICByZXR1cm4gY2IoZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBmcmFtZSA9IHBhcmVudEZyYW1lID8gcGFyZW50RnJhbWUucHVzaCgpIDogbmV3IEZyYW1lKCk7XG4gICAgZnJhbWUudG9wTGV2ZWwgPSB0cnVlOyAvLyBSdW4gdGhlIHJvb3RSZW5kZXJGdW5jIHRvIHBvcHVsYXRlIHRoZSBjb250ZXh0IHdpdGggZXhwb3J0ZWQgdmFyc1xuXG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dChjdHggfHwge30sIHRoaXMuYmxvY2tzLCB0aGlzLmVudik7XG4gICAgdGhpcy5yb290UmVuZGVyRnVuYyh0aGlzLmVudiwgY29udGV4dCwgZnJhbWUsIGdsb2JhbFJ1bnRpbWUsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY2IoZXJyLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNiKG51bGwsIGNvbnRleHQuZ2V0RXhwb3J0ZWQoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvMy5jb21waWxlID0gZnVuY3Rpb24gY29tcGlsZSgpIHtcbiAgICBpZiAoIXRoaXMuY29tcGlsZWQpIHtcbiAgICAgIHRoaXMuX2NvbXBpbGUoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMy5fY29tcGlsZSA9IGZ1bmN0aW9uIF9jb21waWxlKCkge1xuICAgIHZhciBwcm9wcztcblxuICAgIGlmICh0aGlzLnRtcGxQcm9wcykge1xuICAgICAgcHJvcHMgPSB0aGlzLnRtcGxQcm9wcztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNvdXJjZSA9IGNvbXBpbGVyLmNvbXBpbGUodGhpcy50bXBsU3RyLCB0aGlzLmVudi5hc3luY0ZpbHRlcnMsIHRoaXMuZW52LmV4dGVuc2lvbnNMaXN0LCB0aGlzLnBhdGgsIHRoaXMuZW52Lm9wdHMpO1xuICAgICAgdmFyIGZ1bmMgPSBuZXcgRnVuY3Rpb24oc291cmNlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctZnVuY1xuXG4gICAgICBwcm9wcyA9IGZ1bmMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrcyA9IHRoaXMuX2dldEJsb2Nrcyhwcm9wcyk7XG4gICAgdGhpcy5yb290UmVuZGVyRnVuYyA9IHByb3BzLnJvb3Q7XG4gICAgdGhpcy5jb21waWxlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvMy5fZ2V0QmxvY2tzID0gZnVuY3Rpb24gX2dldEJsb2Nrcyhwcm9wcykge1xuICAgIHZhciBibG9ja3MgPSB7fTtcbiAgICBsaWIua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgaWYgKGsuc2xpY2UoMCwgMikgPT09ICdiXycpIHtcbiAgICAgICAgYmxvY2tzW2suc2xpY2UoMildID0gcHJvcHNba107XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGJsb2NrcztcbiAgfTtcblxuICByZXR1cm4gVGVtcGxhdGU7XG59KE9iaik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFbnZpcm9ubWVudDogRW52aXJvbm1lbnQsXG4gIFRlbXBsYXRlOiBUZW1wbGF0ZVxufTtcblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8vIHJhd0FzYXAgcHJvdmlkZXMgZXZlcnl0aGluZyB3ZSBuZWVkIGV4Y2VwdCBleGNlcHRpb24gbWFuYWdlbWVudC5cbnZhciByYXdBc2FwID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbi8vIFJhd1Rhc2tzIGFyZSByZWN5Y2xlZCB0byByZWR1Y2UgR0MgY2h1cm4uXG52YXIgZnJlZVRhc2tzID0gW107XG4vLyBXZSBxdWV1ZSBlcnJvcnMgdG8gZW5zdXJlIHRoZXkgYXJlIHRocm93biBpbiByaWdodCBvcmRlciAoRklGTykuXG4vLyBBcnJheS1hcy1xdWV1ZSBpcyBnb29kIGVub3VnaCBoZXJlLCBzaW5jZSB3ZSBhcmUganVzdCBkZWFsaW5nIHdpdGggZXhjZXB0aW9ucy5cbnZhciBwZW5kaW5nRXJyb3JzID0gW107XG52YXIgcmVxdWVzdEVycm9yVGhyb3cgPSByYXdBc2FwLm1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcih0aHJvd0ZpcnN0RXJyb3IpO1xuXG5mdW5jdGlvbiB0aHJvd0ZpcnN0RXJyb3IoKSB7XG4gICAgaWYgKHBlbmRpbmdFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IHBlbmRpbmdFcnJvcnMuc2hpZnQoKTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2FsbHMgYSB0YXNrIGFzIHNvb24gYXMgcG9zc2libGUgYWZ0ZXIgcmV0dXJuaW5nLCBpbiBpdHMgb3duIGV2ZW50LCB3aXRoIHByaW9yaXR5XG4gKiBvdmVyIG90aGVyIGV2ZW50cyBsaWtlIGFuaW1hdGlvbiwgcmVmbG93LCBhbmQgcmVwYWludC4gQW4gZXJyb3IgdGhyb3duIGZyb20gYW5cbiAqIGV2ZW50IHdpbGwgbm90IGludGVycnVwdCwgbm9yIGV2ZW4gc3Vic3RhbnRpYWxseSBzbG93IGRvd24gdGhlIHByb2Nlc3Npbmcgb2ZcbiAqIG90aGVyIGV2ZW50cywgYnV0IHdpbGwgYmUgcmF0aGVyIHBvc3Rwb25lZCB0byBhIGxvd2VyIHByaW9yaXR5IGV2ZW50LlxuICogQHBhcmFtIHt7Y2FsbH19IHRhc2sgQSBjYWxsYWJsZSBvYmplY3QsIHR5cGljYWxseSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm9cbiAqIGFyZ3VtZW50cy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhc2FwO1xuZnVuY3Rpb24gYXNhcCh0YXNrKSB7XG4gICAgdmFyIHJhd1Rhc2s7XG4gICAgaWYgKGZyZWVUYXNrcy5sZW5ndGgpIHtcbiAgICAgICAgcmF3VGFzayA9IGZyZWVUYXNrcy5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByYXdUYXNrID0gbmV3IFJhd1Rhc2soKTtcbiAgICB9XG4gICAgcmF3VGFzay50YXNrID0gdGFzaztcbiAgICByYXdBc2FwKHJhd1Rhc2spO1xufVxuXG4vLyBXZSB3cmFwIHRhc2tzIHdpdGggcmVjeWNsYWJsZSB0YXNrIG9iamVjdHMuICBBIHRhc2sgb2JqZWN0IGltcGxlbWVudHNcbi8vIGBjYWxsYCwganVzdCBsaWtlIGEgZnVuY3Rpb24uXG5mdW5jdGlvbiBSYXdUYXNrKCkge1xuICAgIHRoaXMudGFzayA9IG51bGw7XG59XG5cbi8vIFRoZSBzb2xlIHB1cnBvc2Ugb2Ygd3JhcHBpbmcgdGhlIHRhc2sgaXMgdG8gY2F0Y2ggdGhlIGV4Y2VwdGlvbiBhbmQgcmVjeWNsZVxuLy8gdGhlIHRhc2sgb2JqZWN0IGFmdGVyIGl0cyBzaW5nbGUgdXNlLlxuUmF3VGFzay5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICB0aGlzLnRhc2suY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChhc2FwLm9uZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaG9vayBleGlzdHMgcHVyZWx5IGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICAgICAgICAgICAgLy8gSXRzIG5hbWUgd2lsbCBiZSBwZXJpb2RpY2FsbHkgcmFuZG9taXplZCB0byBicmVhayBhbnkgY29kZSB0aGF0XG4gICAgICAgICAgICAvLyBkZXBlbmRzIG9uIGl0cyBleGlzdGVuY2UuXG4gICAgICAgICAgICBhc2FwLm9uZXJyb3IoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSW4gYSB3ZWIgYnJvd3NlciwgZXhjZXB0aW9ucyBhcmUgbm90IGZhdGFsLiBIb3dldmVyLCB0byBhdm9pZFxuICAgICAgICAgICAgLy8gc2xvd2luZyBkb3duIHRoZSBxdWV1ZSBvZiBwZW5kaW5nIHRhc2tzLCB3ZSByZXRocm93IHRoZSBlcnJvciBpbiBhXG4gICAgICAgICAgICAvLyBsb3dlciBwcmlvcml0eSB0dXJuLlxuICAgICAgICAgICAgcGVuZGluZ0Vycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICAgIHJlcXVlc3RFcnJvclRocm93KCk7XG4gICAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzLnRhc2sgPSBudWxsO1xuICAgICAgICBmcmVlVGFza3NbZnJlZVRhc2tzLmxlbmd0aF0gPSB0aGlzO1xuICAgIH1cbn07XG5cblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkge1xuXG4vLyBVc2UgdGhlIGZhc3Rlc3QgbWVhbnMgcG9zc2libGUgdG8gZXhlY3V0ZSBhIHRhc2sgaW4gaXRzIG93biB0dXJuLCB3aXRoXG4vLyBwcmlvcml0eSBvdmVyIG90aGVyIGV2ZW50cyBpbmNsdWRpbmcgSU8sIGFuaW1hdGlvbiwgcmVmbG93LCBhbmQgcmVkcmF3XG4vLyBldmVudHMgaW4gYnJvd3NlcnMuXG4vL1xuLy8gQW4gZXhjZXB0aW9uIHRocm93biBieSBhIHRhc2sgd2lsbCBwZXJtYW5lbnRseSBpbnRlcnJ1cHQgdGhlIHByb2Nlc3Npbmcgb2Zcbi8vIHN1YnNlcXVlbnQgdGFza3MuIFRoZSBoaWdoZXIgbGV2ZWwgYGFzYXBgIGZ1bmN0aW9uIGVuc3VyZXMgdGhhdCBpZiBhblxuLy8gZXhjZXB0aW9uIGlzIHRocm93biBieSBhIHRhc2ssIHRoYXQgdGhlIHRhc2sgcXVldWUgd2lsbCBjb250aW51ZSBmbHVzaGluZyBhc1xuLy8gc29vbiBhcyBwb3NzaWJsZSwgYnV0IGlmIHlvdSB1c2UgYHJhd0FzYXBgIGRpcmVjdGx5LCB5b3UgYXJlIHJlc3BvbnNpYmxlIHRvXG4vLyBlaXRoZXIgZW5zdXJlIHRoYXQgbm8gZXhjZXB0aW9ucyBhcmUgdGhyb3duIGZyb20geW91ciB0YXNrLCBvciB0byBtYW51YWxseVxuLy8gY2FsbCBgcmF3QXNhcC5yZXF1ZXN0Rmx1c2hgIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG5tb2R1bGUuZXhwb3J0cyA9IHJhd0FzYXA7XG5mdW5jdGlvbiByYXdBc2FwKHRhc2spIHtcbiAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgICByZXF1ZXN0Rmx1c2goKTtcbiAgICAgICAgZmx1c2hpbmcgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBFcXVpdmFsZW50IHRvIHB1c2gsIGJ1dCBhdm9pZHMgYSBmdW5jdGlvbiBjYWxsLlxuICAgIHF1ZXVlW3F1ZXVlLmxlbmd0aF0gPSB0YXNrO1xufVxuXG52YXIgcXVldWUgPSBbXTtcbi8vIE9uY2UgYSBmbHVzaCBoYXMgYmVlbiByZXF1ZXN0ZWQsIG5vIGZ1cnRoZXIgY2FsbHMgdG8gYHJlcXVlc3RGbHVzaGAgYXJlXG4vLyBuZWNlc3NhcnkgdW50aWwgdGhlIG5leHQgYGZsdXNoYCBjb21wbGV0ZXMuXG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbi8vIGByZXF1ZXN0Rmx1c2hgIGlzIGFuIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG1ldGhvZCB0aGF0IGF0dGVtcHRzIHRvIGtpY2tcbi8vIG9mZiBhIGBmbHVzaGAgZXZlbnQgYXMgcXVpY2tseSBhcyBwb3NzaWJsZS4gYGZsdXNoYCB3aWxsIGF0dGVtcHQgdG8gZXhoYXVzdFxuLy8gdGhlIGV2ZW50IHF1ZXVlIGJlZm9yZSB5aWVsZGluZyB0byB0aGUgYnJvd3NlcidzIG93biBldmVudCBsb29wLlxudmFyIHJlcXVlc3RGbHVzaDtcbi8vIFRoZSBwb3NpdGlvbiBvZiB0aGUgbmV4dCB0YXNrIHRvIGV4ZWN1dGUgaW4gdGhlIHRhc2sgcXVldWUuIFRoaXMgaXNcbi8vIHByZXNlcnZlZCBiZXR3ZWVuIGNhbGxzIHRvIGBmbHVzaGAgc28gdGhhdCBpdCBjYW4gYmUgcmVzdW1lZCBpZlxuLy8gYSB0YXNrIHRocm93cyBhbiBleGNlcHRpb24uXG52YXIgaW5kZXggPSAwO1xuLy8gSWYgYSB0YXNrIHNjaGVkdWxlcyBhZGRpdGlvbmFsIHRhc2tzIHJlY3Vyc2l2ZWx5LCB0aGUgdGFzayBxdWV1ZSBjYW4gZ3Jvd1xuLy8gdW5ib3VuZGVkLiBUbyBwcmV2ZW50IG1lbW9yeSBleGhhdXN0aW9uLCB0aGUgdGFzayBxdWV1ZSB3aWxsIHBlcmlvZGljYWxseVxuLy8gdHJ1bmNhdGUgYWxyZWFkeS1jb21wbGV0ZWQgdGFza3MuXG52YXIgY2FwYWNpdHkgPSAxMDI0O1xuXG4vLyBUaGUgZmx1c2ggZnVuY3Rpb24gcHJvY2Vzc2VzIGFsbCB0YXNrcyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgd2l0aFxuLy8gYHJhd0FzYXBgIHVubGVzcyBhbmQgdW50aWwgb25lIG9mIHRob3NlIHRhc2tzIHRocm93cyBhbiBleGNlcHRpb24uXG4vLyBJZiBhIHRhc2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgYGZsdXNoYCBlbnN1cmVzIHRoYXQgaXRzIHN0YXRlIHdpbGwgcmVtYWluXG4vLyBjb25zaXN0ZW50IGFuZCB3aWxsIHJlc3VtZSB3aGVyZSBpdCBsZWZ0IG9mZiB3aGVuIGNhbGxlZCBhZ2Fpbi5cbi8vIEhvd2V2ZXIsIGBmbHVzaGAgZG9lcyBub3QgbWFrZSBhbnkgYXJyYW5nZW1lbnRzIHRvIGJlIGNhbGxlZCBhZ2FpbiBpZiBhblxuLy8gZXhjZXB0aW9uIGlzIHRocm93bi5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHdoaWxlIChpbmRleCA8IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgIC8vIEFkdmFuY2UgdGhlIGluZGV4IGJlZm9yZSBjYWxsaW5nIHRoZSB0YXNrLiBUaGlzIGVuc3VyZXMgdGhhdCB3ZSB3aWxsXG4gICAgICAgIC8vIGJlZ2luIGZsdXNoaW5nIG9uIHRoZSBuZXh0IHRhc2sgdGhlIHRhc2sgdGhyb3dzIGFuIGVycm9yLlxuICAgICAgICBpbmRleCA9IGluZGV4ICsgMTtcbiAgICAgICAgcXVldWVbY3VycmVudEluZGV4XS5jYWxsKCk7XG4gICAgICAgIC8vIFByZXZlbnQgbGVha2luZyBtZW1vcnkgZm9yIGxvbmcgY2hhaW5zIG9mIHJlY3Vyc2l2ZSBjYWxscyB0byBgYXNhcGAuXG4gICAgICAgIC8vIElmIHdlIGNhbGwgYGFzYXBgIHdpdGhpbiB0YXNrcyBzY2hlZHVsZWQgYnkgYGFzYXBgLCB0aGUgcXVldWUgd2lsbFxuICAgICAgICAvLyBncm93LCBidXQgdG8gYXZvaWQgYW4gTyhuKSB3YWxrIGZvciBldmVyeSB0YXNrIHdlIGV4ZWN1dGUsIHdlIGRvbid0XG4gICAgICAgIC8vIHNoaWZ0IHRhc2tzIG9mZiB0aGUgcXVldWUgYWZ0ZXIgdGhleSBoYXZlIGJlZW4gZXhlY3V0ZWQuXG4gICAgICAgIC8vIEluc3RlYWQsIHdlIHBlcmlvZGljYWxseSBzaGlmdCAxMDI0IHRhc2tzIG9mZiB0aGUgcXVldWUuXG4gICAgICAgIGlmIChpbmRleCA+IGNhcGFjaXR5KSB7XG4gICAgICAgICAgICAvLyBNYW51YWxseSBzaGlmdCBhbGwgdmFsdWVzIHN0YXJ0aW5nIGF0IHRoZSBpbmRleCBiYWNrIHRvIHRoZVxuICAgICAgICAgICAgLy8gYmVnaW5uaW5nIG9mIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgIGZvciAodmFyIHNjYW4gPSAwLCBuZXdMZW5ndGggPSBxdWV1ZS5sZW5ndGggLSBpbmRleDsgc2NhbiA8IG5ld0xlbmd0aDsgc2NhbisrKSB7XG4gICAgICAgICAgICAgICAgcXVldWVbc2Nhbl0gPSBxdWV1ZVtzY2FuICsgaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVldWUubGVuZ3RoIC09IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgaW5kZXggPSAwO1xuICAgIGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIGByZXF1ZXN0Rmx1c2hgIGlzIGltcGxlbWVudGVkIHVzaW5nIGEgc3RyYXRlZ3kgYmFzZWQgb24gZGF0YSBjb2xsZWN0ZWQgZnJvbVxuLy8gZXZlcnkgYXZhaWxhYmxlIFNhdWNlTGFicyBTZWxlbml1bSB3ZWIgZHJpdmVyIHdvcmtlciBhdCB0aW1lIG9mIHdyaXRpbmcuXG4vLyBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xbUctNVVZR3VwNXF4R2RFTVdraFA2QldDejA1M05VYjJFMVFvVVRVMTZ1QS9lZGl0I2dpZD03ODM3MjQ1OTNcblxuLy8gU2FmYXJpIDYgYW5kIDYuMSBmb3IgZGVza3RvcCwgaVBhZCwgYW5kIGlQaG9uZSBhcmUgdGhlIG9ubHkgYnJvd3NlcnMgdGhhdFxuLy8gaGF2ZSBXZWJLaXRNdXRhdGlvbk9ic2VydmVyIGJ1dCBub3QgdW4tcHJlZml4ZWQgTXV0YXRpb25PYnNlcnZlci5cbi8vIE11c3QgdXNlIGBnbG9iYWxgIG9yIGBzZWxmYCBpbnN0ZWFkIG9mIGB3aW5kb3dgIHRvIHdvcmsgaW4gYm90aCBmcmFtZXMgYW5kIHdlYlxuLy8gd29ya2Vycy4gYGdsb2JhbGAgaXMgYSBwcm92aXNpb24gb2YgQnJvd3NlcmlmeSwgTXIsIE1ycywgb3IgTW9wLlxuXG4vKiBnbG9iYWxzIHNlbGYgKi9cbnZhciBzY29wZSA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiBzZWxmO1xudmFyIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gc2NvcGUuTXV0YXRpb25PYnNlcnZlciB8fCBzY29wZS5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuXG4vLyBNdXRhdGlvbk9ic2VydmVycyBhcmUgZGVzaXJhYmxlIGJlY2F1c2UgdGhleSBoYXZlIGhpZ2ggcHJpb3JpdHkgYW5kIHdvcmtcbi8vIHJlbGlhYmx5IGV2ZXJ5d2hlcmUgdGhleSBhcmUgaW1wbGVtZW50ZWQuXG4vLyBUaGV5IGFyZSBpbXBsZW1lbnRlZCBpbiBhbGwgbW9kZXJuIGJyb3dzZXJzLlxuLy9cbi8vIC0gQW5kcm9pZCA0LTQuM1xuLy8gLSBDaHJvbWUgMjYtMzRcbi8vIC0gRmlyZWZveCAxNC0yOVxuLy8gLSBJbnRlcm5ldCBFeHBsb3JlciAxMVxuLy8gLSBpUGFkIFNhZmFyaSA2LTcuMVxuLy8gLSBpUGhvbmUgU2FmYXJpIDctNy4xXG4vLyAtIFNhZmFyaSA2LTdcbmlmICh0eXBlb2YgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJlcXVlc3RGbHVzaCA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21NdXRhdGlvbk9ic2VydmVyKGZsdXNoKTtcblxuLy8gTWVzc2FnZUNoYW5uZWxzIGFyZSBkZXNpcmFibGUgYmVjYXVzZSB0aGV5IGdpdmUgZGlyZWN0IGFjY2VzcyB0byB0aGUgSFRNTFxuLy8gdGFzayBxdWV1ZSwgYXJlIGltcGxlbWVudGVkIGluIEludGVybmV0IEV4cGxvcmVyIDEwLCBTYWZhcmkgNS4wLTEsIGFuZCBPcGVyYVxuLy8gMTEtMTIsIGFuZCBpbiB3ZWIgd29ya2VycyBpbiBtYW55IGVuZ2luZXMuXG4vLyBBbHRob3VnaCBtZXNzYWdlIGNoYW5uZWxzIHlpZWxkIHRvIGFueSBxdWV1ZWQgcmVuZGVyaW5nIGFuZCBJTyB0YXNrcywgdGhleVxuLy8gd291bGQgYmUgYmV0dGVyIHRoYW4gaW1wb3NpbmcgdGhlIDRtcyBkZWxheSBvZiB0aW1lcnMuXG4vLyBIb3dldmVyLCB0aGV5IGRvIG5vdCB3b3JrIHJlbGlhYmx5IGluIEludGVybmV0IEV4cGxvcmVyIG9yIFNhZmFyaS5cblxuLy8gSW50ZXJuZXQgRXhwbG9yZXIgMTAgaXMgdGhlIG9ubHkgYnJvd3NlciB0aGF0IGhhcyBzZXRJbW1lZGlhdGUgYnV0IGRvZXNcbi8vIG5vdCBoYXZlIE11dGF0aW9uT2JzZXJ2ZXJzLlxuLy8gQWx0aG91Z2ggc2V0SW1tZWRpYXRlIHlpZWxkcyB0byB0aGUgYnJvd3NlcidzIHJlbmRlcmVyLCBpdCB3b3VsZCBiZVxuLy8gcHJlZmVycmFibGUgdG8gZmFsbGluZyBiYWNrIHRvIHNldFRpbWVvdXQgc2luY2UgaXQgZG9lcyBub3QgaGF2ZVxuLy8gdGhlIG1pbmltdW0gNG1zIHBlbmFsdHkuXG4vLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGFwcGVhcnMgdG8gYmUgYSBidWcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAgTW9iaWxlIChhbmRcbi8vIERlc2t0b3AgdG8gYSBsZXNzZXIgZXh0ZW50KSB0aGF0IHJlbmRlcnMgYm90aCBzZXRJbW1lZGlhdGUgYW5kXG4vLyBNZXNzYWdlQ2hhbm5lbCB1c2VsZXNzIGZvciB0aGUgcHVycG9zZXMgb2YgQVNBUC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlza293YWwvcS9pc3N1ZXMvMzk2XG5cbi8vIFRpbWVycyBhcmUgaW1wbGVtZW50ZWQgdW5pdmVyc2FsbHkuXG4vLyBXZSBmYWxsIGJhY2sgdG8gdGltZXJzIGluIHdvcmtlcnMgaW4gbW9zdCBlbmdpbmVzLCBhbmQgaW4gZm9yZWdyb3VuZFxuLy8gY29udGV4dHMgaW4gdGhlIGZvbGxvd2luZyBicm93c2Vycy5cbi8vIEhvd2V2ZXIsIG5vdGUgdGhhdCBldmVuIHRoaXMgc2ltcGxlIGNhc2UgcmVxdWlyZXMgbnVhbmNlcyB0byBvcGVyYXRlIGluIGFcbi8vIGJyb2FkIHNwZWN0cnVtIG9mIGJyb3dzZXJzLlxuLy9cbi8vIC0gRmlyZWZveCAzLTEzXG4vLyAtIEludGVybmV0IEV4cGxvcmVyIDYtOVxuLy8gLSBpUGFkIFNhZmFyaSA0LjNcbi8vIC0gTHlueCAyLjguN1xufSBlbHNlIHtcbiAgICByZXF1ZXN0Rmx1c2ggPSBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXIoZmx1c2gpO1xufVxuXG4vLyBgcmVxdWVzdEZsdXNoYCByZXF1ZXN0cyB0aGF0IHRoZSBoaWdoIHByaW9yaXR5IGV2ZW50IHF1ZXVlIGJlIGZsdXNoZWQgYXNcbi8vIHNvb24gYXMgcG9zc2libGUuXG4vLyBUaGlzIGlzIHVzZWZ1bCB0byBwcmV2ZW50IGFuIGVycm9yIHRocm93biBpbiBhIHRhc2sgZnJvbSBzdGFsbGluZyB0aGUgZXZlbnRcbi8vIHF1ZXVlIGlmIHRoZSBleGNlcHRpb24gaGFuZGxlZCBieSBOb2RlLmpz4oCZc1xuLy8gYHByb2Nlc3Mub24oXCJ1bmNhdWdodEV4Y2VwdGlvblwiKWAgb3IgYnkgYSBkb21haW4uXG5yYXdBc2FwLnJlcXVlc3RGbHVzaCA9IHJlcXVlc3RGbHVzaDtcblxuLy8gVG8gcmVxdWVzdCBhIGhpZ2ggcHJpb3JpdHkgZXZlbnQsIHdlIGluZHVjZSBhIG11dGF0aW9uIG9ic2VydmVyIGJ5IHRvZ2dsaW5nXG4vLyB0aGUgdGV4dCBvZiBhIHRleHQgbm9kZSBiZXR3ZWVuIFwiMVwiIGFuZCBcIi0xXCIuXG5mdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaykge1xuICAgIHZhciB0b2dnbGUgPSAxO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBCcm93c2VyTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuICAgICAgICB0b2dnbGUgPSAtdG9nZ2xlO1xuICAgICAgICBub2RlLmRhdGEgPSB0b2dnbGU7XG4gICAgfTtcbn1cblxuLy8gVGhlIG1lc3NhZ2UgY2hhbm5lbCB0ZWNobmlxdWUgd2FzIGRpc2NvdmVyZWQgYnkgTWFsdGUgVWJsIGFuZCB3YXMgdGhlXG4vLyBvcmlnaW5hbCBmb3VuZGF0aW9uIGZvciB0aGlzIGxpYnJhcnkuXG4vLyBodHRwOi8vd3d3Lm5vbmJsb2NraW5nLmlvLzIwMTEvMDYvd2luZG93bmV4dHRpY2suaHRtbFxuXG4vLyBTYWZhcmkgNi4wLjUgKGF0IGxlYXN0KSBpbnRlcm1pdHRlbnRseSBmYWlscyB0byBjcmVhdGUgbWVzc2FnZSBwb3J0cyBvbiBhXG4vLyBwYWdlJ3MgZmlyc3QgbG9hZC4gVGhhbmtmdWxseSwgdGhpcyB2ZXJzaW9uIG9mIFNhZmFyaSBzdXBwb3J0c1xuLy8gTXV0YXRpb25PYnNlcnZlcnMsIHNvIHdlIGRvbid0IG5lZWQgdG8gZmFsbCBiYWNrIGluIHRoYXQgY2FzZS5cblxuLy8gZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbU1lc3NhZ2VDaGFubmVsKGNhbGxiYWNrKSB7XG4vLyAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbi8vICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbi8vICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbi8vICAgICB9O1xuLy8gfVxuXG4vLyBGb3IgcmVhc29ucyBleHBsYWluZWQgYWJvdmUsIHdlIGFyZSBhbHNvIHVuYWJsZSB0byB1c2UgYHNldEltbWVkaWF0ZWBcbi8vIHVuZGVyIGFueSBjaXJjdW1zdGFuY2VzLlxuLy8gRXZlbiBpZiB3ZSB3ZXJlLCB0aGVyZSBpcyBhbm90aGVyIGJ1ZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMC5cbi8vIEl0IGlzIG5vdCBzdWZmaWNpZW50IHRvIGFzc2lnbiBgc2V0SW1tZWRpYXRlYCB0byBgcmVxdWVzdEZsdXNoYCBiZWNhdXNlXG4vLyBgc2V0SW1tZWRpYXRlYCBtdXN0IGJlIGNhbGxlZCAqYnkgbmFtZSogYW5kIHRoZXJlZm9yZSBtdXN0IGJlIHdyYXBwZWQgaW4gYVxuLy8gY2xvc3VyZS5cbi8vIE5ldmVyIGZvcmdldC5cblxuLy8gZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbVNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbi8vICAgICAgICAgc2V0SW1tZWRpYXRlKGNhbGxiYWNrKTtcbi8vICAgICB9O1xuLy8gfVxuXG4vLyBTYWZhcmkgNi4wIGhhcyBhIHByb2JsZW0gd2hlcmUgdGltZXJzIHdpbGwgZ2V0IGxvc3Qgd2hpbGUgdGhlIHVzZXIgaXNcbi8vIHNjcm9sbGluZy4gVGhpcyBwcm9ibGVtIGRvZXMgbm90IGltcGFjdCBBU0FQIGJlY2F1c2UgU2FmYXJpIDYuMCBzdXBwb3J0c1xuLy8gbXV0YXRpb24gb2JzZXJ2ZXJzLCBzbyB0aGF0IGltcGxlbWVudGF0aW9uIGlzIHVzZWQgaW5zdGVhZC5cbi8vIEhvd2V2ZXIsIGlmIHdlIGV2ZXIgZWxlY3QgdG8gdXNlIHRpbWVycyBpbiBTYWZhcmksIHRoZSBwcmV2YWxlbnQgd29yay1hcm91bmRcbi8vIGlzIHRvIGFkZCBhIHNjcm9sbCBldmVudCBsaXN0ZW5lciB0aGF0IGNhbGxzIGZvciBhIGZsdXNoLlxuXG4vLyBgc2V0VGltZW91dGAgZG9lcyBub3QgY2FsbCB0aGUgcGFzc2VkIGNhbGxiYWNrIGlmIHRoZSBkZWxheSBpcyBsZXNzIHRoYW5cbi8vIGFwcHJveGltYXRlbHkgNyBpbiB3ZWIgd29ya2VycyBpbiBGaXJlZm94IDggdGhyb3VnaCAxOCwgYW5kIHNvbWV0aW1lcyBub3Rcbi8vIGV2ZW4gdGhlbi5cblxuZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuICAgICAgICAvLyBXZSBkaXNwYXRjaCBhIHRpbWVvdXQgd2l0aCBhIHNwZWNpZmllZCBkZWxheSBvZiAwIGZvciBlbmdpbmVzIHRoYXRcbiAgICAgICAgLy8gY2FuIHJlbGlhYmx5IGFjY29tbW9kYXRlIHRoYXQgcmVxdWVzdC4gVGhpcyB3aWxsIHVzdWFsbHkgYmUgc25hcHBlZFxuICAgICAgICAvLyB0byBhIDQgbWlsaXNlY29uZCBkZWxheSwgYnV0IG9uY2Ugd2UncmUgZmx1c2hpbmcsIHRoZXJlJ3Mgbm8gZGVsYXlcbiAgICAgICAgLy8gYmV0d2VlbiBldmVudHMuXG4gICAgICAgIHZhciB0aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChoYW5kbGVUaW1lciwgMCk7XG4gICAgICAgIC8vIEhvd2V2ZXIsIHNpbmNlIHRoaXMgdGltZXIgZ2V0cyBmcmVxdWVudGx5IGRyb3BwZWQgaW4gRmlyZWZveFxuICAgICAgICAvLyB3b3JrZXJzLCB3ZSBlbmxpc3QgYW4gaW50ZXJ2YWwgaGFuZGxlIHRoYXQgd2lsbCB0cnkgdG8gZmlyZVxuICAgICAgICAvLyBhbiBldmVudCAyMCB0aW1lcyBwZXIgc2Vjb25kIHVudGlsIGl0IHN1Y2NlZWRzLlxuICAgICAgICB2YXIgaW50ZXJ2YWxIYW5kbGUgPSBzZXRJbnRlcnZhbChoYW5kbGVUaW1lciwgNTApO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVRpbWVyKCkge1xuICAgICAgICAgICAgLy8gV2hpY2hldmVyIHRpbWVyIHN1Y2NlZWRzIHdpbGwgY2FuY2VsIGJvdGggdGltZXJzIGFuZFxuICAgICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSGFuZGxlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyBUaGlzIGlzIGZvciBgYXNhcC5qc2Agb25seS5cbi8vIEl0cyBuYW1lIHdpbGwgYmUgcGVyaW9kaWNhbGx5IHJhbmRvbWl6ZWQgdG8gYnJlYWsgYW55IGNvZGUgdGhhdCBkZXBlbmRzIG9uXG4vLyBpdHMgZXhpc3RlbmNlLlxucmF3QXNhcC5tYWtlUmVxdWVzdENhbGxGcm9tVGltZXIgPSBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXI7XG5cbi8vIEFTQVAgd2FzIG9yaWdpbmFsbHkgYSBuZXh0VGljayBzaGltIGluY2x1ZGVkIGluIFEuIFRoaXMgd2FzIGZhY3RvcmVkIG91dFxuLy8gaW50byB0aGlzIEFTQVAgcGFja2FnZS4gSXQgd2FzIGxhdGVyIGFkYXB0ZWQgdG8gUlNWUCB3aGljaCBtYWRlIGZ1cnRoZXJcbi8vIGFtZW5kbWVudHMuIFRoZXNlIGRlY2lzaW9ucywgcGFydGljdWxhcmx5IHRvIG1hcmdpbmFsaXplIE1lc3NhZ2VDaGFubmVsIGFuZFxuLy8gdG8gY2FwdHVyZSB0aGUgTXV0YXRpb25PYnNlcnZlciBpbXBsZW1lbnRhdGlvbiBpbiBhIGNsb3N1cmUsIHdlcmUgaW50ZWdyYXRlZFxuLy8gYmFjayBpbnRvIEFTQVAgcHJvcGVyLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RpbGRlaW8vcnN2cC5qcy9ibG9iL2NkZGY3MjMyNTQ2YTljZjg1ODUyNGI3NWNkZTZmOWVkZjcyNjIwYTcvbGliL3JzdnAvYXNhcC5qc1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygxMCkpKVxuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG4vKioqLyB9KSxcbi8qIDExICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsvLyBNSVQgbGljZW5zZSAoYnkgRWxhbiBTaGFua2VyKS5cbihmdW5jdGlvbihnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZXhlY3V0ZVN5bmMgPSBmdW5jdGlvbigpe1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdmdW5jdGlvbicpe1xuICAgICAgYXJnc1swXS5hcHBseShudWxsLCBhcmdzLnNwbGljZSgxKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBleGVjdXRlQXN5bmMgPSBmdW5jdGlvbihmbil7XG4gICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNldEltbWVkaWF0ZShmbik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5uZXh0VGljaykge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH1cbiAgfTtcblxuICB2YXIgbWFrZUl0ZXJhdG9yID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gICAgdmFyIG1ha2VDYWxsYmFjayA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgdmFyIGZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgdGFza3NbaW5kZXhdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuLm5leHQoKTtcbiAgICAgIH07XG4gICAgICBmbi5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGluZGV4IDwgdGFza3MubGVuZ3RoIC0gMSkgPyBtYWtlQ2FsbGJhY2soaW5kZXggKyAxKTogbnVsbDtcbiAgICAgIH07XG4gICAgICByZXR1cm4gZm47XG4gICAgfTtcbiAgICByZXR1cm4gbWFrZUNhbGxiYWNrKDApO1xuICB9O1xuICBcbiAgdmFyIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbihtYXliZUFycmF5KXtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1heWJlQXJyYXkpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG4gIHZhciB3YXRlcmZhbGwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrLCBmb3JjZUFzeW5jKSB7XG4gICAgdmFyIG5leHRUaWNrID0gZm9yY2VBc3luYyA/IGV4ZWN1dGVBc3luYyA6IGV4ZWN1dGVTeW5jO1xuICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgaWYgKCFfaXNBcnJheSh0YXNrcykpIHtcbiAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IHRvIHdhdGVyZmFsbCBtdXN0IGJlIGFuIGFycmF5IG9mIGZ1bmN0aW9ucycpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgfVxuICAgIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG4gICAgdmFyIHdyYXBJdGVyYXRvciA9IGZ1bmN0aW9uIChpdGVyYXRvcikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgdmFyIG5leHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh3cmFwSXRlcmF0b3IobmV4dCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIHdyYXBJdGVyYXRvcihtYWtlSXRlcmF0b3IodGFza3MpKSgpO1xuICB9O1xuXG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW10sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3YXRlcmZhbGw7XG4gICAgfSkuYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTsgLy8gUmVxdWlyZUpTXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdhdGVyZmFsbDsgLy8gQ29tbW9uSlNcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWxzLndhdGVyZmFsbCA9IHdhdGVyZmFsbDsgLy8gPHNjcmlwdD5cbiAgfVxufSkodGhpcyk7XG5cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgbGliID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIHIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBmYWxzZSkge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydHMuYWJzID0gTWF0aC5hYnM7XG5cbmZ1bmN0aW9uIGlzTmFOKG51bSkge1xuICByZXR1cm4gbnVtICE9PSBudW07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5cbmZ1bmN0aW9uIGJhdGNoKGFyciwgbGluZWNvdW50LCBmaWxsV2l0aCkge1xuICB2YXIgaTtcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgdG1wID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpICUgbGluZWNvdW50ID09PSAwICYmIHRtcC5sZW5ndGgpIHtcbiAgICAgIHJlcy5wdXNoKHRtcCk7XG4gICAgICB0bXAgPSBbXTtcbiAgICB9XG5cbiAgICB0bXAucHVzaChhcnJbaV0pO1xuICB9XG5cbiAgaWYgKHRtcC5sZW5ndGgpIHtcbiAgICBpZiAoZmlsbFdpdGgpIHtcbiAgICAgIGZvciAoaSA9IHRtcC5sZW5ndGg7IGkgPCBsaW5lY291bnQ7IGkrKykge1xuICAgICAgICB0bXAucHVzaChmaWxsV2l0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzLnB1c2godG1wKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydHMuYmF0Y2ggPSBiYXRjaDtcblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgc3RyID0gbm9ybWFsaXplKHN0ciwgJycpO1xuICB2YXIgcmV0ID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiByLmNvcHlTYWZlbmVzcyhzdHIsIHJldC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJldC5zbGljZSgxKSk7XG59XG5cbmV4cG9ydHMuY2FwaXRhbGl6ZSA9IGNhcGl0YWxpemU7XG5cbmZ1bmN0aW9uIGNlbnRlcihzdHIsIHdpZHRoKSB7XG4gIHN0ciA9IG5vcm1hbGl6ZShzdHIsICcnKTtcbiAgd2lkdGggPSB3aWR0aCB8fCA4MDtcblxuICBpZiAoc3RyLmxlbmd0aCA+PSB3aWR0aCkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICB2YXIgc3BhY2VzID0gd2lkdGggLSBzdHIubGVuZ3RoO1xuICB2YXIgcHJlID0gbGliLnJlcGVhdCgnICcsIHNwYWNlcyAvIDIgLSBzcGFjZXMgJSAyKTtcbiAgdmFyIHBvc3QgPSBsaWIucmVwZWF0KCcgJywgc3BhY2VzIC8gMik7XG4gIHJldHVybiByLmNvcHlTYWZlbmVzcyhzdHIsIHByZSArIHN0ciArIHBvc3QpO1xufVxuXG5leHBvcnRzLmNlbnRlciA9IGNlbnRlcjtcblxuZnVuY3Rpb24gZGVmYXVsdF8odmFsLCBkZWYsIGJvb2wpIHtcbiAgaWYgKGJvb2wpIHtcbiAgICByZXR1cm4gdmFsIHx8IGRlZjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgOiBkZWY7XG4gIH1cbn0gLy8gVE9ETzogaXQgaXMgY29uZnVzaW5nIHRvIGV4cG9ydCBzb21ldGhpbmcgY2FsbGVkICdkZWZhdWx0J1xuXG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlZmF1bHRfOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuXG5mdW5jdGlvbiBkaWN0c29ydCh2YWwsIGNhc2VTZW5zaXRpdmUsIGJ5KSB7XG4gIGlmICghbGliLmlzT2JqZWN0KHZhbCkpIHtcbiAgICB0aHJvdyBuZXcgbGliLlRlbXBsYXRlRXJyb3IoJ2RpY3Rzb3J0IGZpbHRlcjogdmFsIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICB2YXIgYXJyYXkgPSBbXTsgLy8gZGVsaWJlcmF0ZWx5IGluY2x1ZGUgcHJvcGVydGllcyBmcm9tIHRoZSBvYmplY3QncyBwcm90b3R5cGVcblxuICBmb3IgKHZhciBrIGluIHZhbCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ3VhcmQtZm9yLWluLCBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIGFycmF5LnB1c2goW2ssIHZhbFtrXV0pO1xuICB9XG5cbiAgdmFyIHNpO1xuXG4gIGlmIChieSA9PT0gdW5kZWZpbmVkIHx8IGJ5ID09PSAna2V5Jykge1xuICAgIHNpID0gMDtcbiAgfSBlbHNlIGlmIChieSA9PT0gJ3ZhbHVlJykge1xuICAgIHNpID0gMTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgbGliLlRlbXBsYXRlRXJyb3IoJ2RpY3Rzb3J0IGZpbHRlcjogWW91IGNhbiBvbmx5IHNvcnQgYnkgZWl0aGVyIGtleSBvciB2YWx1ZScpO1xuICB9XG5cbiAgYXJyYXkuc29ydChmdW5jdGlvbiAodDEsIHQyKSB7XG4gICAgdmFyIGEgPSB0MVtzaV07XG4gICAgdmFyIGIgPSB0MltzaV07XG5cbiAgICBpZiAoIWNhc2VTZW5zaXRpdmUpIHtcbiAgICAgIGlmIChsaWIuaXNTdHJpbmcoYSkpIHtcbiAgICAgICAgYSA9IGEudG9VcHBlckNhc2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpYi5pc1N0cmluZyhiKSkge1xuICAgICAgICBiID0gYi50b1VwcGVyQ2FzZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhID4gYiA/IDEgOiBhID09PSBiID8gMCA6IC0xOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gIH0pO1xuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydHMuZGljdHNvcnQgPSBkaWN0c29ydDtcblxuZnVuY3Rpb24gZHVtcChvYmosIHNwYWNlcykge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCBzcGFjZXMpO1xufVxuXG5leHBvcnRzLmR1bXAgPSBkdW1wO1xuXG5mdW5jdGlvbiBlc2NhcGUoc3RyKSB7XG4gIGlmIChzdHIgaW5zdGFuY2VvZiByLlNhZmVTdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgc3RyID0gc3RyID09PSBudWxsIHx8IHN0ciA9PT0gdW5kZWZpbmVkID8gJycgOiBzdHI7XG4gIHJldHVybiByLm1hcmtTYWZlKGxpYi5lc2NhcGUoc3RyLnRvU3RyaW5nKCkpKTtcbn1cblxuZXhwb3J0cy5lc2NhcGUgPSBlc2NhcGU7XG5cbmZ1bmN0aW9uIHNhZmUoc3RyKSB7XG4gIGlmIChzdHIgaW5zdGFuY2VvZiByLlNhZmVTdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgc3RyID0gc3RyID09PSBudWxsIHx8IHN0ciA9PT0gdW5kZWZpbmVkID8gJycgOiBzdHI7XG4gIHJldHVybiByLm1hcmtTYWZlKHN0ci50b1N0cmluZygpKTtcbn1cblxuZXhwb3J0cy5zYWZlID0gc2FmZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyKSB7XG4gIHJldHVybiBhcnJbMF07XG59XG5cbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcblxuZnVuY3Rpb24gZ3JvdXBieShhcnIsIGF0dHIpIHtcbiAgcmV0dXJuIGxpYi5ncm91cEJ5KGFyciwgYXR0cik7XG59XG5cbmV4cG9ydHMuZ3JvdXBieSA9IGdyb3VwYnk7XG5cbmZ1bmN0aW9uIGluZGVudChzdHIsIHdpZHRoLCBpbmRlbnRmaXJzdCkge1xuICBzdHIgPSBub3JtYWxpemUoc3RyLCAnJyk7XG5cbiAgaWYgKHN0ciA9PT0gJycpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB3aWR0aCA9IHdpZHRoIHx8IDQ7IC8vIGxldCByZXMgPSAnJztcblxuICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpO1xuICB2YXIgc3AgPSBsaWIucmVwZWF0KCcgJywgd2lkdGgpO1xuICB2YXIgcmVzID0gbGluZXMubWFwKGZ1bmN0aW9uIChsLCBpKSB7XG4gICAgcmV0dXJuIGkgPT09IDAgJiYgIWluZGVudGZpcnN0ID8gbCArIFwiXFxuXCIgOiBcIlwiICsgc3AgKyBsICsgXCJcXG5cIjtcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByLmNvcHlTYWZlbmVzcyhzdHIsIHJlcyk7XG59XG5cbmV4cG9ydHMuaW5kZW50ID0gaW5kZW50O1xuXG5mdW5jdGlvbiBqb2luKGFyciwgZGVsLCBhdHRyKSB7XG4gIGRlbCA9IGRlbCB8fCAnJztcblxuICBpZiAoYXR0cikge1xuICAgIGFyciA9IGxpYi5tYXAoYXJyLCBmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIHZbYXR0cl07XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYXJyLmpvaW4oZGVsKTtcbn1cblxuZXhwb3J0cy5qb2luID0gam9pbjtcblxuZnVuY3Rpb24gbGFzdChhcnIpIHtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59XG5cbmV4cG9ydHMubGFzdCA9IGxhc3Q7XG5cbmZ1bmN0aW9uIGxlbmd0aEZpbHRlcih2YWwpIHtcbiAgdmFyIHZhbHVlID0gbm9ybWFsaXplKHZhbCwgJycpO1xuXG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBNYXAgPT09ICdmdW5jdGlvbicgJiYgdmFsdWUgaW5zdGFuY2VvZiBNYXAgfHwgdHlwZW9mIFNldCA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgLy8gRUNNQVNjcmlwdCAyMDE1IE1hcHMgYW5kIFNldHNcbiAgICAgIHJldHVybiB2YWx1ZS5zaXplO1xuICAgIH1cblxuICAgIGlmIChsaWIuaXNPYmplY3QodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiByLlNhZmVTdHJpbmcpKSB7XG4gICAgICAvLyBPYmplY3RzIChiZXNpZGVzIFNhZmVTdHJpbmdzKSwgbm9uLXByaW1hdGl2ZSBBcnJheXNcbiAgICAgIHJldHVybiBsaWIua2V5cyh2YWx1ZSkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0cy5sZW5ndGggPSBsZW5ndGhGaWx0ZXI7XG5cbmZ1bmN0aW9uIGxpc3QodmFsKSB7XG4gIGlmIChsaWIuaXNTdHJpbmcodmFsKSkge1xuICAgIHJldHVybiB2YWwuc3BsaXQoJycpO1xuICB9IGVsc2UgaWYgKGxpYi5pc09iamVjdCh2YWwpKSB7XG4gICAgcmV0dXJuIGxpYi5fZW50cmllcyh2YWwgfHwge30pLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGtleSA9IF9yZWZbMF0sXG4gICAgICAgICAgdmFsdWUgPSBfcmVmWzFdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChsaWIuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgbGliLlRlbXBsYXRlRXJyb3IoJ2xpc3QgZmlsdGVyOiB0eXBlIG5vdCBpdGVyYWJsZScpO1xuICB9XG59XG5cbmV4cG9ydHMubGlzdCA9IGxpc3Q7XG5cbmZ1bmN0aW9uIGxvd2VyKHN0cikge1xuICBzdHIgPSBub3JtYWxpemUoc3RyLCAnJyk7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0cy5sb3dlciA9IGxvd2VyO1xuXG5mdW5jdGlvbiBubDJicihzdHIpIHtcbiAgaWYgKHN0ciA9PT0gbnVsbCB8fCBzdHIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiByLmNvcHlTYWZlbmVzcyhzdHIsIHN0ci5yZXBsYWNlKC9cXHJcXG58XFxuL2csICc8YnIgLz5cXG4nKSk7XG59XG5cbmV4cG9ydHMubmwyYnIgPSBubDJicjtcblxuZnVuY3Rpb24gcmFuZG9tKGFycikge1xuICByZXR1cm4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcbn1cblxuZXhwb3J0cy5yYW5kb20gPSByYW5kb207XG5cbmZ1bmN0aW9uIHJlamVjdGF0dHIoYXJyLCBhdHRyKSB7XG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuICFpdGVtW2F0dHJdO1xuICB9KTtcbn1cblxuZXhwb3J0cy5yZWplY3RhdHRyID0gcmVqZWN0YXR0cjtcblxuZnVuY3Rpb24gc2VsZWN0YXR0cihhcnIsIGF0dHIpIHtcbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gISFpdGVtW2F0dHJdO1xuICB9KTtcbn1cblxuZXhwb3J0cy5zZWxlY3RhdHRyID0gc2VsZWN0YXR0cjtcblxuZnVuY3Rpb24gcmVwbGFjZShzdHIsIG9sZCwgbmV3XywgbWF4Q291bnQpIHtcbiAgdmFyIG9yaWdpbmFsU3RyID0gc3RyO1xuXG4gIGlmIChvbGQgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2Uob2xkLCBuZXdfKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbWF4Q291bnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbWF4Q291bnQgPSAtMTtcbiAgfVxuXG4gIHZhciByZXMgPSAnJzsgLy8gT3V0cHV0XG4gIC8vIENhc3QgTnVtYmVycyBpbiB0aGUgc2VhcmNoIHRlcm0gdG8gc3RyaW5nXG5cbiAgaWYgKHR5cGVvZiBvbGQgPT09ICdudW1iZXInKSB7XG4gICAgb2xkID0gJycgKyBvbGQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9sZCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBJZiBpdCBpcyBzb21ldGhpbmcgb3RoZXIgdGhhbiBudW1iZXIgb3Igc3RyaW5nLFxuICAgIC8vIHJldHVybiB0aGUgb3JpZ2luYWwgc3RyaW5nXG4gICAgcmV0dXJuIHN0cjtcbiAgfSAvLyBDYXN0IG51bWJlcnMgaW4gdGhlIHJlcGxhY2VtZW50IHRvIHN0cmluZ1xuXG5cbiAgaWYgKHR5cGVvZiBzdHIgPT09ICdudW1iZXInKSB7XG4gICAgc3RyID0gJycgKyBzdHI7XG4gIH0gLy8gSWYgYnkgbm93LCB3ZSBkb24ndCBoYXZlIGEgc3RyaW5nLCB0aHJvdyBpdCBiYWNrXG5cblxuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgJiYgIShzdHIgaW5zdGFuY2VvZiByLlNhZmVTdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfSAvLyBTaG9ydENpcmN1aXRzXG5cblxuICBpZiAob2xkID09PSAnJykge1xuICAgIC8vIE1pbWljIHRoZSBweXRob24gYmVoYXZpb3VyOiBlbXB0eSBzdHJpbmcgaXMgcmVwbGFjZWRcbiAgICAvLyBieSByZXBsYWNlbWVudCBlLmcuIFwiYWJjXCJ8cmVwbGFjZShcIlwiLCBcIi5cIikgLT4gLmEuYi5jLlxuICAgIHJlcyA9IG5ld18gKyBzdHIuc3BsaXQoJycpLmpvaW4obmV3XykgKyBuZXdfO1xuICAgIHJldHVybiByLmNvcHlTYWZlbmVzcyhzdHIsIHJlcyk7XG4gIH1cblxuICB2YXIgbmV4dEluZGV4ID0gc3RyLmluZGV4T2Yob2xkKTsgLy8gaWYgIyBvZiByZXBsYWNlbWVudHMgdG8gcGVyZm9ybSBpcyAwLCBvciB0aGUgc3RyaW5nIHRvIGRvZXNcbiAgLy8gbm90IGNvbnRhaW4gdGhlIG9sZCB2YWx1ZSwgcmV0dXJuIHRoZSBzdHJpbmdcblxuICBpZiAobWF4Q291bnQgPT09IDAgfHwgbmV4dEluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICB2YXIgcG9zID0gMDtcbiAgdmFyIGNvdW50ID0gMDsgLy8gIyBvZiByZXBsYWNlbWVudHMgbWFkZVxuXG4gIHdoaWxlIChuZXh0SW5kZXggPiAtMSAmJiAobWF4Q291bnQgPT09IC0xIHx8IGNvdW50IDwgbWF4Q291bnQpKSB7XG4gICAgLy8gR3JhYiB0aGUgbmV4dCBjaHVuayBvZiBzcmMgc3RyaW5nIGFuZCBhZGQgaXQgd2l0aCB0aGVcbiAgICAvLyByZXBsYWNlbWVudCwgdG8gdGhlIHJlc3VsdFxuICAgIHJlcyArPSBzdHIuc3Vic3RyaW5nKHBvcywgbmV4dEluZGV4KSArIG5ld187IC8vIEluY3JlbWVudCBvdXIgcG9pbnRlciBpbiB0aGUgc3JjIHN0cmluZ1xuXG4gICAgcG9zID0gbmV4dEluZGV4ICsgb2xkLmxlbmd0aDtcbiAgICBjb3VudCsrOyAvLyBTZWUgaWYgdGhlcmUgYXJlIGFueSBtb3JlIHJlcGxhY2VtZW50cyB0byBiZSBtYWRlXG5cbiAgICBuZXh0SW5kZXggPSBzdHIuaW5kZXhPZihvbGQsIHBvcyk7XG4gIH0gLy8gV2UndmUgZWl0aGVyIHJlYWNoZWQgdGhlIGVuZCwgb3IgZG9uZSB0aGUgbWF4ICMgb2ZcbiAgLy8gcmVwbGFjZW1lbnRzLCB0YWNrIG9uIGFueSByZW1haW5pbmcgc3RyaW5nXG5cblxuICBpZiAocG9zIDwgc3RyLmxlbmd0aCkge1xuICAgIHJlcyArPSBzdHIuc3Vic3RyaW5nKHBvcyk7XG4gIH1cblxuICByZXR1cm4gci5jb3B5U2FmZW5lc3Mob3JpZ2luYWxTdHIsIHJlcyk7XG59XG5cbmV4cG9ydHMucmVwbGFjZSA9IHJlcGxhY2U7XG5cbmZ1bmN0aW9uIHJldmVyc2UodmFsKSB7XG4gIHZhciBhcnI7XG5cbiAgaWYgKGxpYi5pc1N0cmluZyh2YWwpKSB7XG4gICAgYXJyID0gbGlzdCh2YWwpO1xuICB9IGVsc2Uge1xuICAgIC8vIENvcHkgaXRcbiAgICBhcnIgPSBsaWIubWFwKHZhbCwgZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiB2O1xuICAgIH0pO1xuICB9XG5cbiAgYXJyLnJldmVyc2UoKTtcblxuICBpZiAobGliLmlzU3RyaW5nKHZhbCkpIHtcbiAgICByZXR1cm4gci5jb3B5U2FmZW5lc3ModmFsLCBhcnIuam9pbignJykpO1xuICB9XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0cy5yZXZlcnNlID0gcmV2ZXJzZTtcblxuZnVuY3Rpb24gcm91bmQodmFsLCBwcmVjaXNpb24sIG1ldGhvZCkge1xuICBwcmVjaXNpb24gPSBwcmVjaXNpb24gfHwgMDtcbiAgdmFyIGZhY3RvciA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICB2YXIgcm91bmRlcjtcblxuICBpZiAobWV0aG9kID09PSAnY2VpbCcpIHtcbiAgICByb3VuZGVyID0gTWF0aC5jZWlsO1xuICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2Zsb29yJykge1xuICAgIHJvdW5kZXIgPSBNYXRoLmZsb29yO1xuICB9IGVsc2Uge1xuICAgIHJvdW5kZXIgPSBNYXRoLnJvdW5kO1xuICB9XG5cbiAgcmV0dXJuIHJvdW5kZXIodmFsICogZmFjdG9yKSAvIGZhY3Rvcjtcbn1cblxuZXhwb3J0cy5yb3VuZCA9IHJvdW5kO1xuXG5mdW5jdGlvbiBzbGljZShhcnIsIHNsaWNlcywgZmlsbFdpdGgpIHtcbiAgdmFyIHNsaWNlTGVuZ3RoID0gTWF0aC5mbG9vcihhcnIubGVuZ3RoIC8gc2xpY2VzKTtcbiAgdmFyIGV4dHJhID0gYXJyLmxlbmd0aCAlIHNsaWNlcztcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgb2Zmc2V0ID0gMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlczsgaSsrKSB7XG4gICAgdmFyIHN0YXJ0ID0gb2Zmc2V0ICsgaSAqIHNsaWNlTGVuZ3RoO1xuXG4gICAgaWYgKGkgPCBleHRyYSkge1xuICAgICAgb2Zmc2V0Kys7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IG9mZnNldCArIChpICsgMSkgKiBzbGljZUxlbmd0aDtcbiAgICB2YXIgY3VyclNsaWNlID0gYXJyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXG4gICAgaWYgKGZpbGxXaXRoICYmIGkgPj0gZXh0cmEpIHtcbiAgICAgIGN1cnJTbGljZS5wdXNoKGZpbGxXaXRoKTtcbiAgICB9XG5cbiAgICByZXMucHVzaChjdXJyU2xpY2UpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0cy5zbGljZSA9IHNsaWNlO1xuXG5mdW5jdGlvbiBzdW0oYXJyLCBhdHRyLCBzdGFydCkge1xuICBpZiAoc3RhcnQgPT09IHZvaWQgMCkge1xuICAgIHN0YXJ0ID0gMDtcbiAgfVxuXG4gIGlmIChhdHRyKSB7XG4gICAgYXJyID0gbGliLm1hcChhcnIsIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdlthdHRyXTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdGFydCArIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYSArIGI7XG4gIH0sIDApO1xufVxuXG5leHBvcnRzLnN1bSA9IHN1bTtcbmV4cG9ydHMuc29ydCA9IHIubWFrZU1hY3JvKFsndmFsdWUnLCAncmV2ZXJzZScsICdjYXNlX3NlbnNpdGl2ZScsICdhdHRyaWJ1dGUnXSwgW10sIGZ1bmN0aW9uIChhcnIsIHJldmVyc2VkLCBjYXNlU2VucywgYXR0cikge1xuICAvLyBDb3B5IGl0XG4gIHZhciBhcnJheSA9IGxpYi5tYXAoYXJyLCBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2O1xuICB9KTtcbiAgYXJyYXkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciB4ID0gYXR0ciA/IGFbYXR0cl0gOiBhO1xuICAgIHZhciB5ID0gYXR0ciA/IGJbYXR0cl0gOiBiO1xuXG4gICAgaWYgKCFjYXNlU2VucyAmJiBsaWIuaXNTdHJpbmcoeCkgJiYgbGliLmlzU3RyaW5nKHkpKSB7XG4gICAgICB4ID0geC50b0xvd2VyQ2FzZSgpO1xuICAgICAgeSA9IHkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoeCA8IHkpIHtcbiAgICAgIHJldHVybiByZXZlcnNlZCA/IDEgOiAtMTtcbiAgICB9IGVsc2UgaWYgKHggPiB5KSB7XG4gICAgICByZXR1cm4gcmV2ZXJzZWQgPyAtMSA6IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhcnJheTtcbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmcob2JqKSB7XG4gIHJldHVybiByLmNvcHlTYWZlbmVzcyhvYmosIG9iaik7XG59XG5cbmV4cG9ydHMuc3RyaW5nID0gc3RyaW5nO1xuXG5mdW5jdGlvbiBzdHJpcHRhZ3MoaW5wdXQsIHByZXNlcnZlTGluZWJyZWFrcykge1xuICBpbnB1dCA9IG5vcm1hbGl6ZShpbnB1dCwgJycpO1xuICB2YXIgdGFncyA9IC88XFwvPyhbYS16XVthLXowLTldKilcXGJbXj5dKj58PCEtLVtcXHNcXFNdKj8tLT4vZ2k7XG4gIHZhciB0cmltbWVkSW5wdXQgPSB0cmltKGlucHV0LnJlcGxhY2UodGFncywgJycpKTtcbiAgdmFyIHJlcyA9ICcnO1xuXG4gIGlmIChwcmVzZXJ2ZUxpbmVicmVha3MpIHtcbiAgICByZXMgPSB0cmltbWVkSW5wdXQucmVwbGFjZSgvXiArfCArJC9nbSwgJycpIC8vIHJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyBzcGFjZXNcbiAgICAucmVwbGFjZSgvICsvZywgJyAnKSAvLyBzcXVhc2ggYWRqYWNlbnQgc3BhY2VzXG4gICAgLnJlcGxhY2UoLyhcXHJcXG4pL2csICdcXG4nKSAvLyBub3JtYWxpemUgbGluZWJyZWFrcyAoQ1JMRiAtPiBMRilcbiAgICAucmVwbGFjZSgvXFxuXFxuXFxuKy9nLCAnXFxuXFxuJyk7IC8vIHNxdWFzaCBhYm5vcm1hbCBhZGphY2VudCBsaW5lYnJlYWtzXG4gIH0gZWxzZSB7XG4gICAgcmVzID0gdHJpbW1lZElucHV0LnJlcGxhY2UoL1xccysvZ2ksICcgJyk7XG4gIH1cblxuICByZXR1cm4gci5jb3B5U2FmZW5lc3MoaW5wdXQsIHJlcyk7XG59XG5cbmV4cG9ydHMuc3RyaXB0YWdzID0gc3RyaXB0YWdzO1xuXG5mdW5jdGlvbiB0aXRsZShzdHIpIHtcbiAgc3RyID0gbm9ybWFsaXplKHN0ciwgJycpO1xuICB2YXIgd29yZHMgPSBzdHIuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZSh3b3JkKTtcbiAgfSk7XG4gIHJldHVybiByLmNvcHlTYWZlbmVzcyhzdHIsIHdvcmRzLmpvaW4oJyAnKSk7XG59XG5cbmV4cG9ydHMudGl0bGUgPSB0aXRsZTtcblxuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHIuY29weVNhZmVuZXNzKHN0ciwgc3RyLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKSk7XG59XG5cbmV4cG9ydHMudHJpbSA9IHRyaW07XG5cbmZ1bmN0aW9uIHRydW5jYXRlKGlucHV0LCBsZW5ndGgsIGtpbGx3b3JkcywgZW5kKSB7XG4gIHZhciBvcmlnID0gaW5wdXQ7XG4gIGlucHV0ID0gbm9ybWFsaXplKGlucHV0LCAnJyk7XG4gIGxlbmd0aCA9IGxlbmd0aCB8fCAyNTU7XG5cbiAgaWYgKGlucHV0Lmxlbmd0aCA8PSBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBpZiAoa2lsbHdvcmRzKSB7XG4gICAgaW5wdXQgPSBpbnB1dC5zdWJzdHJpbmcoMCwgbGVuZ3RoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaWR4ID0gaW5wdXQubGFzdEluZGV4T2YoJyAnLCBsZW5ndGgpO1xuXG4gICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgIGlkeCA9IGxlbmd0aDtcbiAgICB9XG5cbiAgICBpbnB1dCA9IGlucHV0LnN1YnN0cmluZygwLCBpZHgpO1xuICB9XG5cbiAgaW5wdXQgKz0gZW5kICE9PSB1bmRlZmluZWQgJiYgZW5kICE9PSBudWxsID8gZW5kIDogJy4uLic7XG4gIHJldHVybiByLmNvcHlTYWZlbmVzcyhvcmlnLCBpbnB1dCk7XG59XG5cbmV4cG9ydHMudHJ1bmNhdGUgPSB0cnVuY2F0ZTtcblxuZnVuY3Rpb24gdXBwZXIoc3RyKSB7XG4gIHN0ciA9IG5vcm1hbGl6ZShzdHIsICcnKTtcbiAgcmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpO1xufVxuXG5leHBvcnRzLnVwcGVyID0gdXBwZXI7XG5cbmZ1bmN0aW9uIHVybGVuY29kZShvYmopIHtcbiAgdmFyIGVuYyA9IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICBpZiAobGliLmlzU3RyaW5nKG9iaikpIHtcbiAgICByZXR1cm4gZW5jKG9iaik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGtleXZhbHMgPSBsaWIuaXNBcnJheShvYmopID8gb2JqIDogbGliLl9lbnRyaWVzKG9iaik7XG4gICAgcmV0dXJuIGtleXZhbHMubWFwKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIGsgPSBfcmVmMlswXSxcbiAgICAgICAgICB2ID0gX3JlZjJbMV07XG4gICAgICByZXR1cm4gZW5jKGspICsgXCI9XCIgKyBlbmModik7XG4gICAgfSkuam9pbignJicpO1xuICB9XG59XG5cbmV4cG9ydHMudXJsZW5jb2RlID0gdXJsZW5jb2RlOyAvLyBGb3IgdGhlIGppbmphIHJlZ2V4cCwgc2VlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWl0c3VoaWtvL2ppbmphMi9ibG9iL2YxNWI4MTRkY2JhNmFhMTJiYzc0ZDFmN2QwYzg4MWQ1NWY3MTI2YmUvamluamEyL3V0aWxzLnB5I0wyMC1MMjNcblxudmFyIHB1bmNSZSA9IC9eKD86XFwofDx8Jmx0Oyk/KC4qPykoPzpcXC58LHxcXCl8XFxufCZndDspPyQvOyAvLyBmcm9tIGh0dHA6Ly9ibG9nLmdlcnYubmV0LzIwMTEvMDUvaHRtbDVfZW1haWxfYWRkcmVzc19yZWdleHAvXG5cbnZhciBlbWFpbFJlID0gL15bXFx3LiEjJCUmJyorXFwtXFwvPT9cXF5ge3x9fl0rQFthLXpcXGRcXC1dKyhcXC5bYS16XFxkXFwtXSspKyQvaTtcbnZhciBodHRwSHR0cHNSZSA9IC9eaHR0cHM/OlxcL1xcLy4qJC87XG52YXIgd3d3UmUgPSAvXnd3d1xcLi87XG52YXIgdGxkUmUgPSAvXFwuKD86b3JnfG5ldHxjb20pKD86XFw6fFxcL3wkKS87XG5cbmZ1bmN0aW9uIHVybGl6ZShzdHIsIGxlbmd0aCwgbm9mb2xsb3cpIHtcbiAgaWYgKGlzTmFOKGxlbmd0aCkpIHtcbiAgICBsZW5ndGggPSBJbmZpbml0eTtcbiAgfVxuXG4gIHZhciBub0ZvbGxvd0F0dHIgPSBub2ZvbGxvdyA9PT0gdHJ1ZSA/ICcgcmVsPVwibm9mb2xsb3dcIicgOiAnJztcbiAgdmFyIHdvcmRzID0gc3RyLnNwbGl0KC8oXFxzKykvKS5maWx0ZXIoZnVuY3Rpb24gKHdvcmQpIHtcbiAgICAvLyBJZiB0aGUgd29yZCBoYXMgbm8gbGVuZ3RoLCBiYWlsLiBUaGlzIGNhbiBoYXBwZW4gZm9yIHN0ciB3aXRoXG4gICAgLy8gdHJhaWxpbmcgd2hpdGVzcGFjZS5cbiAgICByZXR1cm4gd29yZCAmJiB3b3JkLmxlbmd0aDtcbiAgfSkubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgdmFyIG1hdGNoZXMgPSB3b3JkLm1hdGNoKHB1bmNSZSk7XG4gICAgdmFyIHBvc3NpYmxlVXJsID0gbWF0Y2hlcyA/IG1hdGNoZXNbMV0gOiB3b3JkO1xuICAgIHZhciBzaG9ydFVybCA9IHBvc3NpYmxlVXJsLnN1YnN0cigwLCBsZW5ndGgpOyAvLyB1cmwgdGhhdCBzdGFydHMgd2l0aCBodHRwIG9yIGh0dHBzXG5cbiAgICBpZiAoaHR0cEh0dHBzUmUudGVzdChwb3NzaWJsZVVybCkpIHtcbiAgICAgIHJldHVybiBcIjxhIGhyZWY9XFxcIlwiICsgcG9zc2libGVVcmwgKyBcIlxcXCJcIiArIG5vRm9sbG93QXR0ciArIFwiPlwiICsgc2hvcnRVcmwgKyBcIjwvYT5cIjtcbiAgICB9IC8vIHVybCB0aGF0IHN0YXJ0cyB3aXRoIHd3dy5cblxuXG4gICAgaWYgKHd3d1JlLnRlc3QocG9zc2libGVVcmwpKSB7XG4gICAgICByZXR1cm4gXCI8YSBocmVmPVxcXCJodHRwOi8vXCIgKyBwb3NzaWJsZVVybCArIFwiXFxcIlwiICsgbm9Gb2xsb3dBdHRyICsgXCI+XCIgKyBzaG9ydFVybCArIFwiPC9hPlwiO1xuICAgIH0gLy8gYW4gZW1haWwgYWRkcmVzcyBvZiB0aGUgZm9ybSB1c2VybmFtZUBkb21haW4udGxkXG5cblxuICAgIGlmIChlbWFpbFJlLnRlc3QocG9zc2libGVVcmwpKSB7XG4gICAgICByZXR1cm4gXCI8YSBocmVmPVxcXCJtYWlsdG86XCIgKyBwb3NzaWJsZVVybCArIFwiXFxcIj5cIiArIHBvc3NpYmxlVXJsICsgXCI8L2E+XCI7XG4gICAgfSAvLyB1cmwgdGhhdCBlbmRzIGluIC5jb20sIC5vcmcgb3IgLm5ldCB0aGF0IGlzIG5vdCBhbiBlbWFpbCBhZGRyZXNzXG5cblxuICAgIGlmICh0bGRSZS50ZXN0KHBvc3NpYmxlVXJsKSkge1xuICAgICAgcmV0dXJuIFwiPGEgaHJlZj1cXFwiaHR0cDovL1wiICsgcG9zc2libGVVcmwgKyBcIlxcXCJcIiArIG5vRm9sbG93QXR0ciArIFwiPlwiICsgc2hvcnRVcmwgKyBcIjwvYT5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gd29yZDtcbiAgfSk7XG4gIHJldHVybiB3b3Jkcy5qb2luKCcnKTtcbn1cblxuZXhwb3J0cy51cmxpemUgPSB1cmxpemU7XG5cbmZ1bmN0aW9uIHdvcmRjb3VudChzdHIpIHtcbiAgc3RyID0gbm9ybWFsaXplKHN0ciwgJycpO1xuICB2YXIgd29yZHMgPSBzdHIgPyBzdHIubWF0Y2goL1xcdysvZykgOiBudWxsO1xuICByZXR1cm4gd29yZHMgPyB3b3Jkcy5sZW5ndGggOiBudWxsO1xufVxuXG5leHBvcnRzLndvcmRjb3VudCA9IHdvcmRjb3VudDtcblxuZnVuY3Rpb24gZmxvYXQodmFsLCBkZWYpIHtcbiAgdmFyIHJlcyA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKHJlcykgPyBkZWYgOiByZXM7XG59XG5cbmV4cG9ydHMuZmxvYXQgPSBmbG9hdDtcblxuZnVuY3Rpb24gaW50KHZhbCwgZGVmKSB7XG4gIHZhciByZXMgPSBwYXJzZUludCh2YWwsIDEwKTtcbiAgcmV0dXJuIGlzTmFOKHJlcykgPyBkZWYgOiByZXM7XG59XG5cbmV4cG9ydHMuaW50ID0gaW50OyAvLyBBbGlhc2VzXG5cbmV4cG9ydHMuZCA9IGV4cG9ydHMuZGVmYXVsdDtcbmV4cG9ydHMuZSA9IGV4cG9ydHMuZXNjYXBlO1xuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBTYWZlU3RyaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKS5TYWZlU3RyaW5nO1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0IGlzIGEgZnVuY3Rpb24sIG90aGVyd2lzZSBgZmFsc2VgLlxuICogQHBhcmFtIHsgYW55IH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuXG5mdW5jdGlvbiBjYWxsYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnRzLmNhbGxhYmxlID0gY2FsbGFibGU7XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3QgaXMgc3RyaWN0bHkgbm90IGB1bmRlZmluZWRgLlxuICogQHBhcmFtIHsgYW55IH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gZGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0cy5kZWZpbmVkID0gZGVmaW5lZDtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9wZXJhbmQgKG9uZSkgaXMgZGl2aXNibGUgYnkgdGhlIHRlc3QncyBhcmd1bWVudFxuICogKHR3bykuXG4gKiBAcGFyYW0geyBudW1iZXIgfSBvbmVcbiAqIEBwYXJhbSB7IG51bWJlciB9IHR3b1xuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuXG5mdW5jdGlvbiBkaXZpc2libGVieShvbmUsIHR3bykge1xuICByZXR1cm4gb25lICUgdHdvID09PSAwO1xufVxuXG5leHBvcnRzLmRpdmlzaWJsZWJ5ID0gZGl2aXNpYmxlYnk7XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIGhhcyBiZWVuIGVzY2FwZWQgKGkuZS4sIGlzIGEgU2FmZVN0cmluZykuXG4gKiBAcGFyYW0geyBhbnkgfSB2YWx1ZVxuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFNhZmVTdHJpbmc7XG59XG5cbmV4cG9ydHMuZXNjYXBlZCA9IGVzY2FwZWQ7XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBhcmd1bWVudHMgYXJlIHN0cmljdGx5IGVxdWFsLlxuICogQHBhcmFtIHsgYW55IH0gb25lXG4gKiBAcGFyYW0geyBhbnkgfSB0d29cbiAqL1xuXG5mdW5jdGlvbiBlcXVhbHRvKG9uZSwgdHdvKSB7XG4gIHJldHVybiBvbmUgPT09IHR3bztcbn1cblxuZXhwb3J0cy5lcXVhbHRvID0gZXF1YWx0bzsgLy8gQWxpYXNlc1xuXG5leHBvcnRzLmVxID0gZXhwb3J0cy5lcXVhbHRvO1xuZXhwb3J0cy5zYW1lYXMgPSBleHBvcnRzLmVxdWFsdG87XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBldmVubHkgZGl2aXNpYmxlIGJ5IDIuXG4gKiBAcGFyYW0geyBudW1iZXIgfSB2YWx1ZVxuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuXG5mdW5jdGlvbiBldmVuKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAlIDIgPT09IDA7XG59XG5cbmV4cG9ydHMuZXZlbiA9IGV2ZW47XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBmYWxzeSAtIGlmIEkgcmVjYWxsIGNvcnJlY3RseSwgJycsIDAsIGZhbHNlLFxuICogdW5kZWZpbmVkLCBOYU4gb3IgbnVsbC4gSSBkb24ndCBrbm93IGlmIHdlIHNob3VsZCBzdGljayB0byB0aGUgZGVmYXVsdCBKU1xuICogYmVoYXZpb3Igb3IgYXR0ZW1wdCB0byByZXBsaWNhdGUgd2hhdCBQeXRob24gYmVsaWV2ZXMgc2hvdWxkIGJlIGZhbHN5IChpLmUuLFxuICogZW1wdHkgYXJyYXlzLCBlbXB0eSBkaWN0cywgbm90IDAuLi4pLlxuICogQHBhcmFtIHsgYW55IH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gZmFsc3kodmFsdWUpIHtcbiAgcmV0dXJuICF2YWx1ZTtcbn1cblxuZXhwb3J0cy5mYWxzeSA9IGZhbHN5O1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb3BlcmFuZCAob25lKSBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIHRoZSB0ZXN0J3NcbiAqIGFyZ3VtZW50ICh0d28pLlxuICogQHBhcmFtIHsgbnVtYmVyIH0gb25lXG4gKiBAcGFyYW0geyBudW1iZXIgfSB0d29cbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gZ2Uob25lLCB0d28pIHtcbiAgcmV0dXJuIG9uZSA+PSB0d287XG59XG5cbmV4cG9ydHMuZ2UgPSBnZTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9wZXJhbmQgKG9uZSkgaXMgZ3JlYXRlciB0aGFuIHRoZSB0ZXN0J3MgYXJndW1lbnRcbiAqICh0d28pLlxuICogQHBhcmFtIHsgbnVtYmVyIH0gb25lXG4gKiBAcGFyYW0geyBudW1iZXIgfSB0d29cbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gZ3JlYXRlcnRoYW4ob25lLCB0d28pIHtcbiAgcmV0dXJuIG9uZSA+IHR3bztcbn1cblxuZXhwb3J0cy5ncmVhdGVydGhhbiA9IGdyZWF0ZXJ0aGFuOyAvLyBhbGlhc1xuXG5leHBvcnRzLmd0ID0gZXhwb3J0cy5ncmVhdGVydGhhbjtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9wZXJhbmQgKG9uZSkgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSB0ZXN0J3NcbiAqIGFyZ3VtZW50ICh0d28pLlxuICogQHBhcmFtIHsgbnVtYmVyIH0gb25lXG4gKiBAcGFyYW0geyBudW1iZXIgfSB0d29cbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gbGUob25lLCB0d28pIHtcbiAgcmV0dXJuIG9uZSA8PSB0d287XG59XG5cbmV4cG9ydHMubGUgPSBsZTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9wZXJhbmQgKG9uZSkgaXMgbGVzcyB0aGFuIHRoZSB0ZXN0J3MgcGFzc2VkIGFyZ3VtZW50XG4gKiAodHdvKS5cbiAqIEBwYXJhbSB7IG51bWJlciB9IG9uZVxuICogQHBhcmFtIHsgbnVtYmVyIH0gdHdvXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5cbmZ1bmN0aW9uIGxlc3N0aGFuKG9uZSwgdHdvKSB7XG4gIHJldHVybiBvbmUgPCB0d287XG59XG5cbmV4cG9ydHMubGVzc3RoYW4gPSBsZXNzdGhhbjsgLy8gYWxpYXNcblxuZXhwb3J0cy5sdCA9IGV4cG9ydHMubGVzc3RoYW47XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBzdHJpbmcgaXMgbG93ZXJjYXNlZC5cbiAqIEBwYXJhbSB7IHN0cmluZyB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5cbmZ1bmN0aW9uIGxvd2VyKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZTtcbn1cblxuZXhwb3J0cy5sb3dlciA9IGxvd2VyO1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb3BlcmFuZCAob25lKSBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHRlc3Qnc1xuICogYXJndW1lbnQgKHR3bykuXG4gKiBAcGFyYW0geyBudW1iZXIgfSBvbmVcbiAqIEBwYXJhbSB7IG51bWJlciB9IHR3b1xuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuXG5mdW5jdGlvbiBuZShvbmUsIHR3bykge1xuICByZXR1cm4gb25lICE9PSB0d287XG59XG5cbmV4cG9ydHMubmUgPSBuZTtcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBzdHJpY3RseSBlcXVhbCB0byBgbnVsbGAuXG4gKiBAcGFyYW0geyBhbnkgfVxuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuXG5mdW5jdGlvbiBudWxsVGVzdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG59XG5cbmV4cG9ydHMubnVsbCA9IG51bGxUZXN0O1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBAcGFyYW0geyBhbnkgfVxuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuXG5mdW5jdGlvbiBudW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbmV4cG9ydHMubnVtYmVyID0gbnVtYmVyO1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgKm5vdCogZXZlbmx5IGRpdmlzaWJsZSBieSAyLlxuICogQHBhcmFtIHsgbnVtYmVyIH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gb2RkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAlIDIgPT09IDE7XG59XG5cbmV4cG9ydHMub2RkID0gb2RkO1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBzdHJpbmcsIGBmYWxzZWAgaWYgbm90LlxuICogQHBhcmFtIHsgYW55IH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gc3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG5leHBvcnRzLnN0cmluZyA9IHN0cmluZztcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIG5vdCBpbiB0aGUgbGlzdCBvZiB0aGluZ3MgY29uc2lkZXJlZCBmYWxzeTpcbiAqICcnLCBudWxsLCB1bmRlZmluZWQsIDAsIE5hTiBhbmQgZmFsc2UuXG4gKiBAcGFyYW0geyBhbnkgfSB2YWx1ZVxuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuXG5mdW5jdGlvbiB0cnV0aHkodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU7XG59XG5cbmV4cG9ydHMudHJ1dGh5ID0gdHJ1dGh5O1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLlxuICogQHBhcmFtIHsgYW55IH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gdW5kZWZpbmVkVGVzdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0cy51bmRlZmluZWQgPSB1bmRlZmluZWRUZXN0O1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3RyaW5nIGlzIHVwcGVyY2FzZWQuXG4gKiBAcGFyYW0geyBzdHJpbmcgfSB2YWx1ZVxuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuXG5mdW5jdGlvbiB1cHBlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUudG9VcHBlckNhc2UoKSA9PT0gdmFsdWU7XG59XG5cbmV4cG9ydHMudXBwZXIgPSB1cHBlcjtcbi8qKlxuICogSWYgRVM2IGZlYXR1cmVzIGFyZSBhdmFpbGFibGUsIHJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpbXBsZW1lbnRzIHRoZVxuICogYFN5bWJvbC5pdGVyYXRvcmAgbWV0aG9kLiBJZiBub3QsIGl0J3MgYSBzdHJpbmcgb3IgQXJyYXkuXG4gKlxuICogQ291bGQgcG90ZW50aWFsbHkgY2F1c2UgaXNzdWVzIGlmIGEgYnJvd3NlciBleGlzdHMgdGhhdCBoYXMgU2V0IGFuZCBNYXAgYnV0XG4gKiBub3QgU3ltYm9sLlxuICpcbiAqIEBwYXJhbSB7IGFueSB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5cbmZ1bmN0aW9uIGl0ZXJhYmxlKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAhIXZhbHVlW1N5bWJvbC5pdGVyYXRvcl07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIH1cbn1cblxuZXhwb3J0cy5pdGVyYWJsZSA9IGl0ZXJhYmxlO1xuLyoqXG4gKiBJZiBFUzYgZmVhdHVyZXMgYXJlIGF2YWlsYWJsZSwgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCBoYXNoXG4gKiBvciBhbiBFUzYgTWFwLiBPdGhlcndpc2UganVzdCByZXR1cm4gaWYgaXQncyBhbiBvYmplY3QgaGFzaC5cbiAqIEBwYXJhbSB7IGFueSB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5cbmZ1bmN0aW9uIG1hcHBpbmcodmFsdWUpIHtcbiAgLy8gb25seSBtYXBzIGFuZCBvYmplY3QgaGFzaGVzXG4gIHZhciBib29sID0gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcblxuICBpZiAoU2V0KSB7XG4gICAgcmV0dXJuIGJvb2wgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNldCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJvb2w7XG4gIH1cbn1cblxuZXhwb3J0cy5tYXBwaW5nID0gbWFwcGluZztcblxuLyoqKi8gfSksXG4vKiAxNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfY3ljbGVyKGl0ZW1zKSB7XG4gIHZhciBpbmRleCA9IC0xO1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnQ6IG51bGwsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgaW5kZXggPSAtMTtcbiAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgaW5kZXgrKztcblxuICAgICAgaWYgKGluZGV4ID49IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VycmVudCA9IGl0ZW1zW2luZGV4XTtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBfam9pbmVyKHNlcCkge1xuICBzZXAgPSBzZXAgfHwgJywnO1xuICB2YXIgZmlyc3QgPSB0cnVlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWwgPSBmaXJzdCA/ICcnIDogc2VwO1xuICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcbn0gLy8gTWFraW5nIHRoaXMgYSBmdW5jdGlvbiBpbnN0ZWFkIHNvIGl0IHJldHVybnMgYSBuZXcgb2JqZWN0XG4vLyBlYWNoIHRpbWUgaXQncyBjYWxsZWQuIFRoYXQgd2F5LCBpZiBzb21ldGhpbmcgbGlrZSBhbiBlbnZpcm9ubWVudFxuLy8gdXNlcyBpdCwgdGhleSB3aWxsIGVhY2ggaGF2ZSB0aGVpciBvd24gY29weS5cblxuXG5mdW5jdGlvbiBnbG9iYWxzKCkge1xuICByZXR1cm4ge1xuICAgIHJhbmdlOiBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgICAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzdG9wID0gc3RhcnQ7XG4gICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgc3RlcCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKCFzdGVwKSB7XG4gICAgICAgIHN0ZXAgPSAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJyID0gW107XG5cbiAgICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICAgICAgICBhcnIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSBzdGFydDsgX2kgPiBzdG9wOyBfaSArPSBzdGVwKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmb3ItZGlyZWN0aW9uXG4gICAgICAgICAgYXJyLnB1c2goX2kpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSxcbiAgICBjeWNsZXI6IGZ1bmN0aW9uIGN5Y2xlcigpIHtcbiAgICAgIHJldHVybiBfY3ljbGVyKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH0sXG4gICAgam9pbmVyOiBmdW5jdGlvbiBqb2luZXIoc2VwKSB7XG4gICAgICByZXR1cm4gX2pvaW5lcihzZXApO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxzO1xuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBwYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHByZXNzKGVudiwgYXBwKSB7XG4gIGZ1bmN0aW9uIE51bmp1Y2tzVmlldyhuYW1lLCBvcHRzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhdGggPSBuYW1lO1xuICAgIHRoaXMuZGVmYXVsdEVuZ2luZSA9IG9wdHMuZGVmYXVsdEVuZ2luZTtcbiAgICB0aGlzLmV4dCA9IHBhdGguZXh0bmFtZShuYW1lKTtcblxuICAgIGlmICghdGhpcy5leHQgJiYgIXRoaXMuZGVmYXVsdEVuZ2luZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBkZWZhdWx0IGVuZ2luZSB3YXMgc3BlY2lmaWVkIGFuZCBubyBleHRlbnNpb24gd2FzIHByb3ZpZGVkLicpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5leHQpIHtcbiAgICAgIHRoaXMubmFtZSArPSB0aGlzLmV4dCA9ICh0aGlzLmRlZmF1bHRFbmdpbmVbMF0gIT09ICcuJyA/ICcuJyA6ICcnKSArIHRoaXMuZGVmYXVsdEVuZ2luZTtcbiAgICB9XG4gIH1cblxuICBOdW5qdWNrc1ZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihvcHRzLCBjYikge1xuICAgIGVudi5yZW5kZXIodGhpcy5uYW1lLCBvcHRzLCBjYik7XG4gIH07XG5cbiAgYXBwLnNldCgndmlldycsIE51bmp1Y2tzVmlldyk7XG4gIGFwcC5zZXQoJ251bmp1Y2tzRW52JywgZW52KTtcbiAgcmV0dXJuIGVudjtcbn07XG5cbi8qKiovIH0pLFxuLyogMTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZnVuY3Rpb24gaW5zdGFsbENvbXBhdCgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgLy8gVGhpcyBtdXN0IGJlIGNhbGxlZCBsaWtlIGBudW5qdWNrcy5pbnN0YWxsQ29tcGF0YCBzbyB0aGF0IGB0aGlzYFxuICAvLyByZWZlcmVuY2VzIHRoZSBudW5qdWNrcyBpbnN0YW5jZVxuXG4gIHZhciBydW50aW1lID0gdGhpcy5ydW50aW1lO1xuICB2YXIgbGliID0gdGhpcy5saWI7IC8vIEhhbmRsZSBzbGltIGNhc2Ugd2hlcmUgdGhlc2UgJ21vZHVsZXMnIGFyZSBleGNsdWRlZCBmcm9tIHRoZSBidWlsdCBzb3VyY2VcblxuICB2YXIgQ29tcGlsZXIgPSB0aGlzLmNvbXBpbGVyLkNvbXBpbGVyO1xuICB2YXIgUGFyc2VyID0gdGhpcy5wYXJzZXIuUGFyc2VyO1xuICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICB2YXIgbGV4ZXIgPSB0aGlzLmxleGVyO1xuICB2YXIgb3JpZ19jb250ZXh0T3JGcmFtZUxvb2t1cCA9IHJ1bnRpbWUuY29udGV4dE9yRnJhbWVMb29rdXA7XG4gIHZhciBvcmlnX21lbWJlckxvb2t1cCA9IHJ1bnRpbWUubWVtYmVyTG9va3VwO1xuICB2YXIgb3JpZ19Db21waWxlcl9hc3NlcnRUeXBlO1xuICB2YXIgb3JpZ19QYXJzZXJfcGFyc2VBZ2dyZWdhdGU7XG5cbiAgaWYgKENvbXBpbGVyKSB7XG4gICAgb3JpZ19Db21waWxlcl9hc3NlcnRUeXBlID0gQ29tcGlsZXIucHJvdG90eXBlLmFzc2VydFR5cGU7XG4gIH1cblxuICBpZiAoUGFyc2VyKSB7XG4gICAgb3JpZ19QYXJzZXJfcGFyc2VBZ2dyZWdhdGUgPSBQYXJzZXIucHJvdG90eXBlLnBhcnNlQWdncmVnYXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5pbnN0YWxsKCkge1xuICAgIHJ1bnRpbWUuY29udGV4dE9yRnJhbWVMb29rdXAgPSBvcmlnX2NvbnRleHRPckZyYW1lTG9va3VwO1xuICAgIHJ1bnRpbWUubWVtYmVyTG9va3VwID0gb3JpZ19tZW1iZXJMb29rdXA7XG5cbiAgICBpZiAoQ29tcGlsZXIpIHtcbiAgICAgIENvbXBpbGVyLnByb3RvdHlwZS5hc3NlcnRUeXBlID0gb3JpZ19Db21waWxlcl9hc3NlcnRUeXBlO1xuICAgIH1cblxuICAgIGlmIChQYXJzZXIpIHtcbiAgICAgIFBhcnNlci5wcm90b3R5cGUucGFyc2VBZ2dyZWdhdGUgPSBvcmlnX1BhcnNlcl9wYXJzZUFnZ3JlZ2F0ZTtcbiAgICB9XG4gIH1cblxuICBydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwID0gZnVuY3Rpb24gY29udGV4dE9yRnJhbWVMb29rdXAoY29udGV4dCwgZnJhbWUsIGtleSkge1xuICAgIHZhciB2YWwgPSBvcmlnX2NvbnRleHRPckZyYW1lTG9va3VwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ1RydWUnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgY2FzZSAnRmFsc2UnOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGNhc2UgJ05vbmUnOlxuICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0VG9rZW5zU3RhdGUodG9rZW5zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZGV4OiB0b2tlbnMuaW5kZXgsXG4gICAgICBsaW5lbm86IHRva2Vucy5saW5lbm8sXG4gICAgICBjb2xubzogdG9rZW5zLmNvbG5vXG4gICAgfTtcbiAgfVxuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vIGkuZS4sIG5vdCBzbGltIG1vZGVcbiAgICB2YXIgU2xpY2UgPSBub2Rlcy5Ob2RlLmV4dGVuZCgnU2xpY2UnLCB7XG4gICAgICBmaWVsZHM6IFsnc3RhcnQnLCAnc3RvcCcsICdzdGVwJ10sXG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KGxpbmVubywgY29sbm8sIHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgICAgIHN0YXJ0ID0gc3RhcnQgfHwgbmV3IG5vZGVzLkxpdGVyYWwobGluZW5vLCBjb2xubywgbnVsbCk7XG4gICAgICAgIHN0b3AgPSBzdG9wIHx8IG5ldyBub2Rlcy5MaXRlcmFsKGxpbmVubywgY29sbm8sIG51bGwpO1xuICAgICAgICBzdGVwID0gc3RlcCB8fCBuZXcgbm9kZXMuTGl0ZXJhbChsaW5lbm8sIGNvbG5vLCAxKTtcbiAgICAgICAgdGhpcy5wYXJlbnQobGluZW5vLCBjb2xubywgc3RhcnQsIHN0b3AsIHN0ZXApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgQ29tcGlsZXIucHJvdG90eXBlLmFzc2VydFR5cGUgPSBmdW5jdGlvbiBhc3NlcnRUeXBlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgU2xpY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBvcmlnX0NvbXBpbGVyX2Fzc2VydFR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgQ29tcGlsZXIucHJvdG90eXBlLmNvbXBpbGVTbGljZSA9IGZ1bmN0aW9uIGNvbXBpbGVTbGljZShub2RlLCBmcmFtZSkge1xuICAgICAgdGhpcy5fZW1pdCgnKCcpO1xuXG4gICAgICB0aGlzLl9jb21waWxlRXhwcmVzc2lvbihub2RlLnN0YXJ0LCBmcmFtZSk7XG5cbiAgICAgIHRoaXMuX2VtaXQoJyksKCcpO1xuXG4gICAgICB0aGlzLl9jb21waWxlRXhwcmVzc2lvbihub2RlLnN0b3AsIGZyYW1lKTtcblxuICAgICAgdGhpcy5fZW1pdCgnKSwoJyk7XG5cbiAgICAgIHRoaXMuX2NvbXBpbGVFeHByZXNzaW9uKG5vZGUuc3RlcCwgZnJhbWUpO1xuXG4gICAgICB0aGlzLl9lbWl0KCcpJyk7XG4gICAgfTtcblxuICAgIFBhcnNlci5wcm90b3R5cGUucGFyc2VBZ2dyZWdhdGUgPSBmdW5jdGlvbiBwYXJzZUFnZ3JlZ2F0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBvcmlnU3RhdGUgPSBnZXRUb2tlbnNTdGF0ZSh0aGlzLnRva2Vucyk7IC8vIFNldCBiYWNrIG9uZSBhY2NvdW50aW5nIGZvciBvcGVuaW5nIGJyYWNrZXQvcGFyZW5zXG5cbiAgICAgIG9yaWdTdGF0ZS5jb2xuby0tO1xuICAgICAgb3JpZ1N0YXRlLmluZGV4LS07XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBvcmlnX1BhcnNlcl9wYXJzZUFnZ3JlZ2F0ZS5hcHBseSh0aGlzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdmFyIGVyclN0YXRlID0gZ2V0VG9rZW5zU3RhdGUodGhpcy50b2tlbnMpO1xuXG4gICAgICAgIHZhciByZXRocm93ID0gZnVuY3Rpb24gcmV0aHJvdygpIHtcbiAgICAgICAgICBsaWIuX2Fzc2lnbihfdGhpcy50b2tlbnMsIGVyclN0YXRlKTtcblxuICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9OyAvLyBSZXNldCB0byBzdGF0ZSBiZWZvcmUgb3JpZ2luYWwgcGFyc2VBZ2dyZWdhdGUgY2FsbGVkXG5cblxuICAgICAgICBsaWIuX2Fzc2lnbih0aGlzLnRva2Vucywgb3JpZ1N0YXRlKTtcblxuICAgICAgICB0aGlzLnBlZWtlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgdG9rID0gdGhpcy5wZWVrVG9rZW4oKTtcblxuICAgICAgICBpZiAodG9rLnR5cGUgIT09IGxleGVyLlRPS0VOX0xFRlRfQlJBQ0tFVCkge1xuICAgICAgICAgIHRocm93IHJldGhyb3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm5leHRUb2tlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgU2xpY2UodG9rLmxpbmVubywgdG9rLmNvbG5vKTsgLy8gSWYgd2UgZG9uJ3QgZW5jb3VudGVyIGEgY29sb24gd2hpbGUgcGFyc2luZywgdGhpcyBpcyBub3QgYSBzbGljZSxcbiAgICAgICAgLy8gc28gcmUtcmFpc2UgdGhlIG9yaWdpbmFsIGV4Y2VwdGlvbi5cblxuICAgICAgICB2YXIgaXNTbGljZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IG5vZGUuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2tpcChsZXhlci5UT0tFTl9SSUdIVF9CUkFDS0VUKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGkgPT09IG5vZGUuZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGlzU2xpY2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5mYWlsKCdwYXJzZVNsaWNlOiB0b28gbWFueSBzbGljZSBjb21wb25lbnRzJywgdG9rLmxpbmVubywgdG9rLmNvbG5vKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLnNraXAobGV4ZXIuVE9LRU5fQ09MT04pKSB7XG4gICAgICAgICAgICBpc1NsaWNlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZpZWxkID0gbm9kZS5maWVsZHNbaV07XG4gICAgICAgICAgICBub2RlW2ZpZWxkXSA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XG4gICAgICAgICAgICBpc1NsaWNlID0gdGhpcy5za2lwKGxleGVyLlRPS0VOX0NPTE9OKSB8fCBpc1NsaWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNTbGljZSkge1xuICAgICAgICAgIHRocm93IHJldGhyb3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgbm9kZXMuQXJyYXkodG9rLmxpbmVubywgdG9rLmNvbG5vLCBbbm9kZV0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBzbGljZUxvb2t1cChvYmosIHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgb2JqID0gb2JqIHx8IFtdO1xuXG4gICAgaWYgKHN0YXJ0ID09PSBudWxsKSB7XG4gICAgICBzdGFydCA9IHN0ZXAgPCAwID8gb2JqLmxlbmd0aCAtIDEgOiAwO1xuICAgIH1cblxuICAgIGlmIChzdG9wID09PSBudWxsKSB7XG4gICAgICBzdG9wID0gc3RlcCA8IDAgPyAtMSA6IG9iai5sZW5ndGg7XG4gICAgfSBlbHNlIGlmIChzdG9wIDwgMCkge1xuICAgICAgc3RvcCArPSBvYmoubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgIHN0YXJ0ICs9IG9iai5sZW5ndGg7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSBzdGFydDs7IGkgKz0gc3RlcCkge1xuICAgICAgaWYgKGkgPCAwIHx8IGkgPiBvYmoubGVuZ3RoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RlcCA+IDAgJiYgaSA+PSBzdG9wKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RlcCA8IDAgJiYgaSA8PSBzdG9wKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXN1bHRzLnB1c2gocnVudGltZS5tZW1iZXJMb29rdXAob2JqLCBpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNPd25Qcm9wKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG4gIH1cblxuICB2YXIgQVJSQVlfTUVNQkVSUyA9IHtcbiAgICBwb3A6IGZ1bmN0aW9uIHBvcChpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA+PSB0aGlzLmxlbmd0aCB8fCBpbmRleCA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdLZXlFcnJvcicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0sXG4gICAgYXBwZW5kOiBmdW5jdGlvbiBhcHBlbmQoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRoaXMucHVzaChlbGVtZW50KTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpc1tpXSA9PT0gZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlRXJyb3InKTtcbiAgICB9LFxuICAgIGNvdW50OiBmdW5jdGlvbiBjb3VudChlbGVtZW50KSB7XG4gICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXNbaV0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb3VudDtcbiAgICB9LFxuICAgIGluZGV4OiBmdW5jdGlvbiBpbmRleChlbGVtZW50KSB7XG4gICAgICB2YXIgaTtcblxuICAgICAgaWYgKChpID0gdGhpcy5pbmRleE9mKGVsZW1lbnQpKSA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYWx1ZUVycm9yJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpO1xuICAgIH0sXG4gICAgZmluZDogZnVuY3Rpb24gZmluZChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleE9mKGVsZW1lbnQpO1xuICAgIH0sXG4gICAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQoaW5kZXgsIGVsZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMCwgZWxlbSk7XG4gICAgfVxuICB9O1xuICB2YXIgT0JKRUNUX01FTUJFUlMgPSB7XG4gICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIGxpYi5fZW50cmllcyh0aGlzKTtcbiAgICB9LFxuICAgIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgICAgcmV0dXJuIGxpYi5fdmFsdWVzKHRoaXMpO1xuICAgIH0sXG4gICAga2V5czogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgIHJldHVybiBsaWIua2V5cyh0aGlzKTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSwgZGVmKSB7XG4gICAgICB2YXIgb3V0cHV0ID0gdGhpc1trZXldO1xuXG4gICAgICBpZiAob3V0cHV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3V0cHV0ID0gZGVmO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sXG4gICAgaGFzX2tleTogZnVuY3Rpb24gaGFzX2tleShrZXkpIHtcbiAgICAgIHJldHVybiBoYXNPd25Qcm9wKHRoaXMsIGtleSk7XG4gICAgfSxcbiAgICBwb3A6IGZ1bmN0aW9uIHBvcChrZXksIGRlZikge1xuICAgICAgdmFyIG91dHB1dCA9IHRoaXNba2V5XTtcblxuICAgICAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkICYmIGRlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG91dHB1dCA9IGRlZjtcbiAgICAgIH0gZWxzZSBpZiAob3V0cHV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdLZXlFcnJvcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LFxuICAgIHBvcGl0ZW06IGZ1bmN0aW9uIHBvcGl0ZW0oKSB7XG4gICAgICB2YXIga2V5cyA9IGxpYi5rZXlzKHRoaXMpO1xuXG4gICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignS2V5RXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGsgPSBrZXlzWzBdO1xuICAgICAgdmFyIHZhbCA9IHRoaXNba107XG4gICAgICBkZWxldGUgdGhpc1trXTtcbiAgICAgIHJldHVybiBbaywgdmFsXTtcbiAgICB9LFxuICAgIHNldGRlZmF1bHQ6IGZ1bmN0aW9uIHNldGRlZmF1bHQoa2V5LCBkZWYpIHtcbiAgICAgIGlmIChkZWYgPT09IHZvaWQgMCkge1xuICAgICAgICBkZWYgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShrZXkgaW4gdGhpcykpIHtcbiAgICAgICAgdGhpc1trZXldID0gZGVmO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoa3dhcmdzKSB7XG4gICAgICBsaWIuX2Fzc2lnbih0aGlzLCBrd2FyZ3MpO1xuXG4gICAgICByZXR1cm4gbnVsbDsgLy8gQWx3YXlzIHJldHVybnMgTm9uZVxuICAgIH1cbiAgfTtcbiAgT0JKRUNUX01FTUJFUlMuaXRlcml0ZW1zID0gT0JKRUNUX01FTUJFUlMuaXRlbXM7XG4gIE9CSkVDVF9NRU1CRVJTLml0ZXJ2YWx1ZXMgPSBPQkpFQ1RfTUVNQkVSUy52YWx1ZXM7XG4gIE9CSkVDVF9NRU1CRVJTLml0ZXJrZXlzID0gT0JKRUNUX01FTUJFUlMua2V5cztcblxuICBydW50aW1lLm1lbWJlckxvb2t1cCA9IGZ1bmN0aW9uIG1lbWJlckxvb2t1cChvYmosIHZhbCwgYXV0b2VzY2FwZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA0KSB7XG4gICAgICByZXR1cm4gc2xpY2VMb29rdXAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBvYmogPSBvYmogfHwge307IC8vIElmIHRoZSBvYmplY3QgaXMgYW4gb2JqZWN0LCByZXR1cm4gYW55IG9mIHRoZSBtZXRob2RzIHRoYXQgUHl0aG9uIHdvdWxkXG4gICAgLy8gb3RoZXJ3aXNlIHByb3ZpZGUuXG5cbiAgICBpZiAobGliLmlzQXJyYXkob2JqKSAmJiBoYXNPd25Qcm9wKEFSUkFZX01FTUJFUlMsIHZhbCkpIHtcbiAgICAgIHJldHVybiBBUlJBWV9NRU1CRVJTW3ZhbF0uYmluZChvYmopO1xuICAgIH1cblxuICAgIGlmIChsaWIuaXNPYmplY3Qob2JqKSAmJiBoYXNPd25Qcm9wKE9CSkVDVF9NRU1CRVJTLCB2YWwpKSB7XG4gICAgICByZXR1cm4gT0JKRUNUX01FTUJFUlNbdmFsXS5iaW5kKG9iaik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yaWdfbWVtYmVyTG9va3VwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgcmV0dXJuIHVuaW5zdGFsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnN0YWxsQ29tcGF0O1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW51bmp1Y2tzLXNsaW0uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbnVuanVja3MvYnJvd3Nlci9udW5qdWNrcy1zbGltLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG51bmp1Y2tzLCBlbnYsIG9iaiwgZGVwZW5kZW5jaWVzKXtcblxuICAgIHZhciBvbGRSb290ID0gb2JqLnJvb3Q7XG5cbiAgICBvYmoucm9vdCA9IGZ1bmN0aW9uKCBlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBpZ25vcmVNaXNzaW5nLCBjYiApIHtcbiAgICAgICAgdmFyIG9sZEdldFRlbXBsYXRlID0gZW52LmdldFRlbXBsYXRlO1xuICAgICAgICBlbnYuZ2V0VGVtcGxhdGUgPSBmdW5jdGlvbiAobmFtZSwgZWMsIHBhcmVudE5hbWUsIGlnbm9yZU1pc3NpbmcsIGNiKSB7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGVjID09PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgY2IgPSBlYyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9yZXF1aXJlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgYSByZWZlcmVuY2UgdG8gdGhlIGFscmVhZHkgcmVzb2x2ZWQgZGVwZW5kZW5jeSBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXBlbmRlbmNpZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcmFtZS5nZXQoXCJfcmVxdWlyZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1lLmdldChcIl9yZXF1aXJlXCIpKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgbG9hZCB0ZW1wbGF0ZSBcIiVzXCInLCBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciB0bXBsID0gX3JlcXVpcmUobmFtZSk7XG4gICAgICAgICAgICBmcmFtZS5zZXQoXCJfcmVxdWlyZVwiLCBfcmVxdWlyZSk7XG5cbiAgICAgICAgICAgIGlmKCBlYyApIHRtcGwuY29tcGlsZSgpO1xuICAgICAgICAgICAgY2IoIG51bGwsIHRtcGwgKTtcbiAgICAgICAgfTtcblxuICAgICAgICBvbGRSb290KGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGlnbm9yZU1pc3NpbmcsIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgICAgICAgZW52LmdldFRlbXBsYXRlID0gb2xkR2V0VGVtcGxhdGU7XG4gICAgICAgICAgICBjYiggZXJyLCByZXMgKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBzcmMgPSB7XG4gICAgICAgIG9iajogb2JqLFxuICAgICAgICB0eXBlOiAnY29kZSdcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBudW5qdWNrcy5UZW1wbGF0ZShzcmMsIGVudik7XG5cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbnVuanVja3MtbG9hZGVyL3J1bnRpbWUtc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gY2hlY2tDb25zZWN1dGl2ZUxldHRlcnModmFsdWUsIGNvbnNlY3V0aXZlSW5kZXggPSAwKSB7XG5cdGlmIChjb25zZWN1dGl2ZUluZGV4ID49IDIpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAodmFsdWUubGVuZ3RoID09PSAyKSB7XG5cdFx0aWYgKCh2YWx1ZS5jaGFyQ29kZUF0KDApICsgMSkgPT09IHZhbHVlLmNoYXJDb2RlQXQoMSkpIHtcblx0XHRcdGNvbnNlY3V0aXZlSW5kZXggKz0gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc2VjdXRpdmVJbmRleCA9IDA7XG5cdFx0fVxuXHRcdHJldHVybiBjb25zZWN1dGl2ZUluZGV4ID49IDI7XG5cdH0gZWxzZSBpZiAoKHZhbHVlLmNoYXJDb2RlQXQoMCkgKyAxKSA9PT0gdmFsdWUuY2hhckNvZGVBdCgxKSkge1xuXHRcdGNvbnNlY3V0aXZlSW5kZXggKz0gMTtcblx0fSBlbHNlIHtcblx0XHRjb25zZWN1dGl2ZUluZGV4ID0gMDtcblx0fVxuXHRyZXR1cm4gY2hlY2tDb25zZWN1dGl2ZUxldHRlcnModmFsdWUuc3Vic3RyaW5nKDEpLCBjb25zZWN1dGl2ZUluZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGVtcGxhdGVTdHJpbmcodGVtcGxhdGUsIG1hcCwgZmFsbGJhY2spIHtcblx0cmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL1xcJFxcey4rP30vZywgbWF0Y2ggPT4ge1xuXHRcdGNvbnN0IHBhdGggPSBtYXRjaC5zdWJzdHIoMiwgbWF0Y2gubGVuZ3RoIC0gMykudHJpbSgpO1xuXHRcdHJldHVybiBnZXQocGF0aCwgbWFwLCBmYWxsYmFjayk7XG5cdH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBcnJheU1heExlbmdodChhcnIsIG1heExlbmd0aCkge1xuXHRjb25zdCBhcnJMZW5ndGggPSBhcnIubGVuZ3RoO1xuXHRpZiAoYXJyTGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG5cdFx0cmV0dXJuIGFyci5zcGxpY2UoYXJyTGVuZ3RoIC0gbWF4TGVuZ3RoKTtcblx0fVxuXHRyZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBnZXQocGF0aCwgb2JqLCBmYiA9IGAkXFx7JHtwYXRofX1gKSB7XG5cdHJldHVybiBwYXRoLnNwbGl0KCcuJykucmVkdWNlKChyZXMsIGtleSkgPT4gcmVzW2tleV0gfHwgZmIsIG9iaik7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvdXRpbHMuanMiLCJ2YXIgbnVuanVja3MgPSByZXF1aXJlKFwibnVuanVja3MvYnJvd3Nlci9udW5qdWNrcy1zbGltXCIpO1xudmFyIGVudjtcbmlmICghbnVuanVja3MuY3VycmVudEVudil7XG5cdGVudiA9IG51bmp1Y2tzLmN1cnJlbnRFbnYgPSBuZXcgbnVuanVja3MuRW52aXJvbm1lbnQoW10sIHVuZGVmaW5lZCk7XG59IGVsc2Uge1xuXHRlbnYgPSBudW5qdWNrcy5jdXJyZW50RW52O1xufVxudmFyIGRlcGVuZGVuY2llcyA9IG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgfHwgKG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgPSB7fSk7XG5cblxuXG5cbnZhciBzaGltID0gcmVxdWlyZShcIi9Vc2Vycy9tbWloYWkvRG9jdW1lbnRzL0dpdEh1Yi9ub24tZHV0Y2gvbm9kZV9tb2R1bGVzL251bmp1Y2tzLWxvYWRlci9ydW50aW1lLXNoaW1cIik7XG5cblxuKGZ1bmN0aW9uKCkgeyhudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkID0gbnVuanVja3MubnVuanVja3NQcmVjb21waWxlZCB8fCB7fSlbXCJwdWJsaWMvY29tcG9uZW50cy9MaXN0L3BhcnRpYWxzL2pva2UubmprXCJdID0gKGZ1bmN0aW9uKCkge1xuZnVuY3Rpb24gcm9vdChlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYikge1xudmFyIGxpbmVubyA9IG51bGw7XG52YXIgY29sbm8gPSBudWxsO1xudmFyIG91dHB1dCA9IFwiXCI7XG50cnkge1xudmFyIHBhcmVudFRlbXBsYXRlID0gbnVsbDtcbm91dHB1dCArPSBcIjxsaSBjbGFzcz1cXFwianMtam9rZVxcXCIgZGF0YS1pZD1cXFwiXCI7XG5vdXRwdXQgKz0gcnVudGltZS5zdXBwcmVzc1ZhbHVlKHJ1bnRpbWUubWVtYmVyTG9va3VwKChydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBcIml0ZW1cIikpLFwiaWRcIiksIGVudi5vcHRzLmF1dG9lc2NhcGUpO1xub3V0cHV0ICs9IFwiXFxcIiBkYXRhLXRleHQ9XFxcIlwiO1xub3V0cHV0ICs9IHJ1bnRpbWUuc3VwcHJlc3NWYWx1ZShlbnYuZ2V0RmlsdGVyKFwic2FmZVwiKS5jYWxsKGNvbnRleHQsIHJ1bnRpbWUubWVtYmVyTG9va3VwKChydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBcIml0ZW1cIikpLFwiam9rZVwiKSksIGVudi5vcHRzLmF1dG9lc2NhcGUpO1xub3V0cHV0ICs9IFwiXFxcIj5cXG5cXHRcIjtcbm91dHB1dCArPSBydW50aW1lLnN1cHByZXNzVmFsdWUoZW52LmdldEZpbHRlcihcInNhZmVcIikuY2FsbChjb250ZXh0LCBydW50aW1lLm1lbWJlckxvb2t1cCgocnVudGltZS5jb250ZXh0T3JGcmFtZUxvb2t1cChjb250ZXh0LCBmcmFtZSwgXCJpdGVtXCIpKSxcImpva2VcIikpLCBlbnYub3B0cy5hdXRvZXNjYXBlKTtcbm91dHB1dCArPSBcIlxcblxcdFwiO1xuaWYocnVudGltZS5tZW1iZXJMb29rdXAoKHJ1bnRpbWUuY29udGV4dE9yRnJhbWVMb29rdXAoY29udGV4dCwgZnJhbWUsIFwiaXRlbVwiKSksXCJpc0Zhdm9ydGllXCIpKSB7XG5vdXRwdXQgKz0gXCJcXG5cXHRcXHQ8c3BhbiBjbGFzcz1cXFwianMtcmVtb3ZlXFxcIj4gWCA8L3NwYW4+XFxuXFx0XCI7XG47XG59XG5lbHNlIHtcbm91dHB1dCArPSBcIlxcblxcdFxcdDxzcGFuIGNsYXNzPVxcXCJqcy1hZGQtZmF2b3JpdGVcXFwiPiArIDwvc3Bhbj5cXHRcXHRcXHRcXHRcXG5cXHRcIjtcbjtcbn1cbm91dHB1dCArPSBcIlxcbjwvbGk+XCI7XG5pZihwYXJlbnRUZW1wbGF0ZSkge1xucGFyZW50VGVtcGxhdGUucm9vdFJlbmRlckZ1bmMoZW52LCBjb250ZXh0LCBmcmFtZSwgcnVudGltZSwgY2IpO1xufSBlbHNlIHtcbmNiKG51bGwsIG91dHB1dCk7XG59XG47XG59IGNhdGNoIChlKSB7XG4gIGNiKHJ1bnRpbWUuaGFuZGxlRXJyb3IoZSwgbGluZW5vLCBjb2xubykpO1xufVxufVxucmV0dXJuIHtcbnJvb3Q6IHJvb3Rcbn07XG5cbn0pKCk7XG59KSgpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBzaGltKG51bmp1Y2tzLCBlbnYsIG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWRbXCJwdWJsaWMvY29tcG9uZW50cy9MaXN0L3BhcnRpYWxzL2pva2UubmprXCJdICwgZGVwZW5kZW5jaWVzKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2NvbXBvbmVudHMvTGlzdC9wYXJ0aWFscy9qb2tlLm5qa1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbnVuanVja3MgPSByZXF1aXJlKFwibnVuanVja3MvYnJvd3Nlci9udW5qdWNrcy1zbGltXCIpO1xudmFyIGVudjtcbmlmICghbnVuanVja3MuY3VycmVudEVudil7XG5cdGVudiA9IG51bmp1Y2tzLmN1cnJlbnRFbnYgPSBuZXcgbnVuanVja3MuRW52aXJvbm1lbnQoW10sIHVuZGVmaW5lZCk7XG59IGVsc2Uge1xuXHRlbnYgPSBudW5qdWNrcy5jdXJyZW50RW52O1xufVxudmFyIGRlcGVuZGVuY2llcyA9IG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgfHwgKG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgPSB7fSk7XG5cblxuXG5cbnZhciBzaGltID0gcmVxdWlyZShcIi9Vc2Vycy9tbWloYWkvRG9jdW1lbnRzL0dpdEh1Yi9ub24tZHV0Y2gvbm9kZV9tb2R1bGVzL251bmp1Y2tzLWxvYWRlci9ydW50aW1lLXNoaW1cIik7XG5cblxuKGZ1bmN0aW9uKCkgeyhudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkID0gbnVuanVja3MubnVuanVja3NQcmVjb21waWxlZCB8fCB7fSlbXCJwdWJsaWMvY29tcG9uZW50cy9Mb2dpbi9wYXJ0aWFscy9oaW50cy5uamtcIl0gPSAoZnVuY3Rpb24oKSB7XG5mdW5jdGlvbiByb290KGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG52YXIgbGluZW5vID0gbnVsbDtcbnZhciBjb2xubyA9IG51bGw7XG52YXIgb3V0cHV0ID0gXCJcIjtcbnRyeSB7XG52YXIgcGFyZW50VGVtcGxhdGUgPSBudWxsO1xuZnJhbWUgPSBmcmFtZS5wdXNoKCk7XG52YXIgdF8zID0gcnVudGltZS5jb250ZXh0T3JGcmFtZUxvb2t1cChjb250ZXh0LCBmcmFtZSwgXCJlcnJvcnNcIik7XG5pZih0XzMpIHt0XzMgPSBydW50aW1lLmZyb21JdGVyYXRvcih0XzMpO1xudmFyIHRfMiA9IHRfMy5sZW5ndGg7XG5mb3IodmFyIHRfMT0wOyB0XzEgPCB0XzMubGVuZ3RoOyB0XzErKykge1xudmFyIHRfNCA9IHRfM1t0XzFdO1xuZnJhbWUuc2V0KFwiZXJyb3JcIiwgdF80KTtcbmZyYW1lLnNldChcImxvb3AuaW5kZXhcIiwgdF8xICsgMSk7XG5mcmFtZS5zZXQoXCJsb29wLmluZGV4MFwiLCB0XzEpO1xuZnJhbWUuc2V0KFwibG9vcC5yZXZpbmRleFwiLCB0XzIgLSB0XzEpO1xuZnJhbWUuc2V0KFwibG9vcC5yZXZpbmRleDBcIiwgdF8yIC0gdF8xIC0gMSk7XG5mcmFtZS5zZXQoXCJsb29wLmZpcnN0XCIsIHRfMSA9PT0gMCk7XG5mcmFtZS5zZXQoXCJsb29wLmxhc3RcIiwgdF8xID09PSB0XzIgLSAxKTtcbmZyYW1lLnNldChcImxvb3AubGVuZ3RoXCIsIHRfMik7XG5vdXRwdXQgKz0gXCJcXG5cXHQ8cCBpZD1cXFwiXCI7XG5vdXRwdXQgKz0gcnVudGltZS5zdXBwcmVzc1ZhbHVlKHJ1bnRpbWUubWVtYmVyTG9va3VwKCh0XzQpLFwiaWRcIiksIGVudi5vcHRzLmF1dG9lc2NhcGUpO1xub3V0cHV0ICs9IFwiXFxcIj5cIjtcbm91dHB1dCArPSBydW50aW1lLnN1cHByZXNzVmFsdWUocnVudGltZS5tZW1iZXJMb29rdXAoKHRfNCksXCJtZXNhZ2VcIiksIGVudi5vcHRzLmF1dG9lc2NhcGUpO1xub3V0cHV0ICs9IFwiPC9wPlxcblwiO1xuO1xufVxufVxuZnJhbWUgPSBmcmFtZS5wb3AoKTtcbmlmKHBhcmVudFRlbXBsYXRlKSB7XG5wYXJlbnRUZW1wbGF0ZS5yb290UmVuZGVyRnVuYyhlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYik7XG59IGVsc2Uge1xuY2IobnVsbCwgb3V0cHV0KTtcbn1cbjtcbn0gY2F0Y2ggKGUpIHtcbiAgY2IocnVudGltZS5oYW5kbGVFcnJvcihlLCBsaW5lbm8sIGNvbG5vKSk7XG59XG59XG5yZXR1cm4ge1xucm9vdDogcm9vdFxufTtcblxufSkoKTtcbn0pKCk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaW0obnVuanVja3MsIGVudiwgbnVuanVja3MubnVuanVja3NQcmVjb21waWxlZFtcInB1YmxpYy9jb21wb25lbnRzL0xvZ2luL3BhcnRpYWxzL2hpbnRzLm5qa1wiXSAsIGRlcGVuZGVuY2llcylcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL0xvZ2luL3BhcnRpYWxzL2hpbnRzLm5qa1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbic7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QvTGlzdCc7XG5pbXBvcnQgeyBqb2tlVXJsIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IGxvYWRKb2tlcyBmcm9tICcuL2xvYWRKb2tlcyc7XG5pbXBvcnQgZXJyb3JUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZXMvZXJyb3IubmprJztcbmltcG9ydCBqb2tlVGVtcGxhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0L3BhcnRpYWxzL2pva2UubmprJztcblxuY29uc3QgbG9naW5Gb3JtID0gbmV3IExvZ2luKHNob3dKb2tlcyk7XG5jb25zdCBhcHBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJyk7XG5cbmlmIChsb2dpbkZvcm0uaXNMb2dpbigpKSB7XG5cdHNob3dKb2tlcygpO1xufSBlbHNlIHtcblx0Y29uc3QgbG9naW5Db250YWluZXIgPSBhcHBDb250YWluZXIucXVlcnlTZWxlY3RvcignI2xvZ2luJyk7XG5cdGxvZ2luRm9ybS5yZW5kZXIobG9naW5Db250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBzaG93Sm9rZXMoKSB7XG5cdGNvbnN0IGpva2VzQ29udGFpbmVyID0gYXBwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNqb2tlcycpO1xuXHRjb25zdCBqb2tlc0xpc3RDb250YWluZXIgPSBqb2tlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjbGlzdCcpO1xuXG5cdGxvYWRKb2tlcyhqb2tlVXJsLCAxMClcblx0XHQudGhlbihqb2tlc0RhdGEgPT4ge1xuXHRcdFx0aWYgKGpva2VzRGF0YS50eXBlICE9PSAnc3VjY2VzcycpIHtcblx0XHRcdFx0cmV0dXJuIGpva2VzQ29udGFpbmVyLmlubmVySFRNTCA9IGVycm9yVGVtcGxhdGUucmVuZGVyKCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBmYXZvcml0ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSkgfHwgW107XG5cdFx0XHRjb25zdCBqb2tlc0xpc3QgPSBuZXcgTGlzdChqb2tlc0RhdGEudmFsdWUsIGZhdm9yaXRlcywgam9rZXNMaXN0Q29udGFpbmVyKTtcblx0XHRcdGpva2VzTGlzdC5yZW5kZXIoKTtcblx0XHRcdGhhbmRsZUxvYWRNb2RlSm9rZXMoam9rZXNMaXN0KTtcblx0XHRcdGhhbmRsZVJhbmRvbUpva2Uoam9rZXNMaXN0KTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoKSA9PiB7XG5cdFx0XHRqb2tlc0NvbnRhaW5lci5pbm5lckhUTUwgPSBlcnJvclRlbXBsYXRlLnJlbmRlcigpO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVMb2FkTW9kZUpva2VzKGpva2VzTGlzdCkge1xuXHRjb25zdCBsb2FkTW9yZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkTW9yZScpO1xuXHRsb2FkTW9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRsb2FkSm9rZXMoam9rZVVybCwgMTApLnRoZW4oam9rZXNEYXRhID0+IHtcblx0XHRcdGlmIChqb2tlc0RhdGEudHlwZSAhPT0gJ3N1Y2Nlc3MnKSB7XG5cdFx0XHRcdHJldHVybiBqb2tlc0NvbnRhaW5lci5pbm5lckhUTUwgPSBlcnJvclRlbXBsYXRlLnJlbmRlcigpO1xuXHRcdFx0fVxuXHRcdFx0am9rZXNMaXN0LmFkZEl0ZW1zKGpva2VzRGF0YS52YWx1ZSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVSYW5kb21Kb2tlKGpva2VzTGlzdCkge1xuXHRjb25zdCBnZXRSYW5kb21Kb2tlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5kb21CdG4nKTtcblx0bGV0IGludGVydmFsID0gbnVsbDtcblx0Y29uc3QgcmFuZG9tQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbScpO1xuXHRyYW5kb21Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblx0XHRjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcblx0XHRjb25zdCBqb2tlRWwgPSB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1qb2tlJykgPyBlLnRhcmdldCA6IHRhcmdldC5jbG9zZXN0KCcuanMtam9rZScpO1xuXHRcdGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1hZGQtZmF2b3JpdGUnKSkge1xuXHRcdFx0Y29uc3QgaXRlbSA9IHtcblx0XHRcdFx0aWQ6IHBhcnNlSW50KGpva2VFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSksXG5cdFx0XHRcdGpva2U6IGpva2VFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dCcpXG5cdFx0XHR9O1xuXHRcdFx0Y29uc29sZS5sb2coJ2l0ZW0nLCBpdGVtKTtcblx0XHRcdGpva2VzTGlzdC5hZGRGYXZvcml0ZShpdGVtKTtcblx0XHR9XG5cdH0pO1xuXHRnZXRSYW5kb21Kb2tlcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcblx0XHRjb25zdCBmZXRjaFJhbmRvbUpva2UgPSBlLnRhcmdldC5jaGVja2VkO1xuXHRcdGlmIChmZXRjaFJhbmRvbUpva2UpIHtcblx0XHRcdGxvYWRSYW5kb21Kb2tlKCk7XG5cdFx0XHRpbnRlcnZhbCA9IHNldEludGVydmFsKGxvYWRSYW5kb21Kb2tlLCA1MDAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbScpLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gbG9hZFJhbmRvbUpva2UoKSB7XG5cdHJldHVybiBsb2FkSm9rZXMoam9rZVVybCwgMSkudGhlbihqb2tlRGF0YSA9PiB7XG5cdFx0Y29uc3QgcmFuZG9tQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbScpO1xuXHRcdGlmIChqb2tlRGF0YS50eXBlICE9PSAnc3VjY2VzcycpIHtcblx0XHRcdHJldHVybiByYW5kb21Db250YWluZXIuaW5uZXJIVE1MID0gZXJyb3JUZW1wbGF0ZS5yZW5kZXIoKTtcblx0XHR9XG5cdFx0Y29uc3QgaXRlbSA9IGpva2VEYXRhLnZhbHVlWzBdO1xuXHRcdHJldHVybiBqb2tlVGVtcGxhdGUucmVuZGVyKHsgaXRlbSB9LCAoZXJyLCByZXN1bHQpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdhZGRUT0Zhdm9yaXRlcycpO1xuXHRcdFx0cmFuZG9tQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3VsdDtcblx0XHR9KTtcblx0fSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL21haW4uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL3Njc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9Mb2dpbi5uamsnO1xuaW1wb3J0IGhpbnRzIGZyb20gJy4vcGFydGlhbHMvaGludHMubmprJztcbmltcG9ydCB7IGNoZWNrQ29uc2VjdXRpdmVMZXR0ZXJzIH0gZnJvbSAnLi4vLi4vanMvdXRpbHMnO1xuaW1wb3J0ICcuL0xvZ2luLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiB7XG5cdGNvbnN0cnVjdG9yKG9uU3VibWl0KSB7XG5cdFx0dGhpcy51c2VyTmFtZSA9IHRoaXMuZ2V0VXNlck5hbWUoKTtcblx0XHR0aGlzLnBhc3N3b3JkID0gJyc7XG5cdFx0dGhpcy5odG1sRWxlbWVuZXRzID0gW107XG5cdFx0dGhpcy5vblN1Ym1pdCA9IG9uU3VibWl0O1xuXHR9XG5cblx0cmVuZGVyKHBhcmVudCkge1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5yZW5kZXIoeyB1c2VyTmFtZTogdGhpcy51c2VyTmFtZSB9LCAoZXJyLCByZXN1bHQpID0+IHtcblx0XHRcdHBhcmVudC5pbm5lckhUTUwgPSByZXN1bHQ7XG5cdFx0XHR0aGlzLmJpbmRFdmVudHMocGFyZW50KTtcblx0XHR9KTtcblx0fVxuXHRiaW5kRXZlbnRzKHNjb3BlKSB7XG5cdFx0dGhpcy5odG1sRWxlbWVuZXRzLnBhc3N3b3JkID0gc2NvcGUucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XG5cdFx0dGhpcy5odG1sRWxlbWVuZXRzLnVzZXJOYW1lID0gc2NvcGUucXVlcnlTZWxlY3RvcignI25hbWUnKTtcblx0XHR0aGlzLmh0bWxFbGVtZW5ldHMubG9naW5CdG4gPSBzY29wZS5xdWVyeVNlbGVjdG9yKCcjbG9naW5CdG4nKTtcblx0XHR0aGlzLmh0bWxFbGVtZW5ldHMuaGludHMgPSBzY29wZS5xdWVyeVNlbGVjdG9yKCcjaGludHMnKTtcblxuXHRcdHRoaXMuaHRtbEVsZW1lbmV0cy5wYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4ge1xuXHRcdFx0dGhpcy5wYXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0aWYgKHRoaXMucGFzc3dvcmQubGVuZ3RoICE9PSAwKSB7XG5cdFx0XHRcdHRoaXMudmFsaWRhdGUoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5odG1sRWxlbWVuZXRzLmhpbnRzLmlubmVySFRNTCA9IGhpbnRzLnJlbmRlcihbXSk7XG5cdFx0XHR0aGlzLmh0bWxFbGVtZW5ldHMubG9naW5CdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG5cdFx0fSk7XG5cblx0XHR0aGlzLmh0bWxFbGVtZW5ldHMudXNlck5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHtcblx0XHRcdHRoaXMudXNlck5hbWUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHR9KTtcblxuXHRcdHRoaXMuaHRtbEVsZW1lbmV0cy5sb2dpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5zZXRTZXNzaW9uKCk7XG5cdFx0XHR0aGlzLnNldFVzZXJOYW1lKCk7XG5cdFx0XHR0aGlzLm9uU3VibWl0KCk7XG5cdFx0fSk7XG5cdH1cblx0dmFsaWRhdGUoKSB7XG5cdFx0Y29uc3QgZXJyb3JzID0gW107XG5cdFx0Y29uc3QgbWVzc2FnZXMgPSB7XG5cdFx0XHRsZXR0ZXJzOiAnb25seSBsb3dlciBsZXR0ZXJzJyxcblx0XHRcdG5vU29tZUxldHRlcnM6ICdzaG91bGQgbm90IGNvbnRhaW4gXCJpXCIgXCJPXCIgb3IgXCJsXCInLFxuXHRcdFx0ZG91YmxlOiAnc2hvdWxkIGNvbnRhaW4gdHdvIG92ZXJsYXBwaW5nIGxldHRlcnMsIGxpa2UgXCJhYVwiLCBcImJiXCIgb3IgXCJjY1wiJyxcblx0XHRcdGNvbnNlY3V0aXZlOiAnc2hvdWxkIGNvbnRhaW4gMyBjb25zZWN1dGl2ZSBsZXR0ZXJzIGxpa2UgXCJhYmNcIiwgXCJkZWZcIiBvciBcInh5elwiJ1xuXHRcdH07XG5cblx0XHRpZiAoISgvXlthLXpdKyQvKS50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnb25seSBsb3dlciBsZXR0ZXJzJyk7XG5cdFx0XHRlcnJvcnMucHVzaCh7XG5cdFx0XHRcdGlkOiAnbGV0dGVycycsXG5cdFx0XHRcdG1lc2FnZTogbWVzc2FnZXMubGV0dGVyc1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKCEoLyhbYS16XSlcXDEvaSkudGVzdCh0aGlzLnBhc3N3b3JkKSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3Nob3VsZCBjb250YWluIHR3byBvdmVybGFwcGluZyBsZXR0ZXJzLCBsaWtlIFwiYWFcIiwgXCJiYlwiIG9yIFwiY2NcIicpO1xuXHRcdFx0ZXJyb3JzLnB1c2goe1xuXHRcdFx0XHRpZDogJ2RvdWJsZScsXG5cdFx0XHRcdG1lc2FnZTogbWVzc2FnZXMuZG91YmxlXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoISgvXlteaU9sXSskLykudGVzdCh0aGlzLnBhc3N3b3JkKSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3Nob3VsZCBub3QgY29udGFpbiBcImlcIiBcIk9cIiBvciBcImxcIicpO1xuXHRcdFx0ZXJyb3JzLnB1c2goe1xuXHRcdFx0XHRpZDogJ25vU29tZUxldHRlcnMnLFxuXHRcdFx0XHRtZXNhZ2U6IG1lc3NhZ2VzLm5vU29tZUxldHRlcnNcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBhc3N3b3JkLmxlbmd0aCA+PSAzKSB7XG5cdFx0XHRpZiAoIWNoZWNrQ29uc2VjdXRpdmVMZXR0ZXJzKHRoaXMucGFzc3dvcmQpKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdzaG91bGQgY29udGFpbiAzIGNvbnNlY3V0aXZlIGxldHRlcnMgbGlrZSBcImFiY1wiLCBcImRlZlwiIG9yIFwieHl6XCInKTtcblx0XHRcdFx0ZXJyb3JzLnB1c2goe1xuXHRcdFx0XHRcdGlkOiAnY29uc2VjdXRpdmUnLFxuXHRcdFx0XHRcdG1lc2FnZTogbWVzc2FnZXMuY29uc2VjdXRpdmVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5odG1sRWxlbWVuZXRzLmhpbnRzLmlubmVySFRNTCA9IGhpbnRzLnJlbmRlcih7IGVycm9ycyB9KTtcblx0XHR0aGlzLmh0bWxFbGVtZW5ldHMubG9naW5CdG4uZGlzYWJsZWQgPSBlcnJvcnMubGVuZ3RoICE9PSAwO1xuXG5cdH1cblx0c2V0U2Vzc2lvbigpIHtcblx0XHRzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpc0xvZ2luJywgdHJ1ZSk7XG5cdH1cblx0c2V0VXNlck5hbWUoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJOYW1lJywgdGhpcy51c2VyTmFtZSk7XG5cdH1cblx0Z2V0VXNlck5hbWUoKSB7XG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyTmFtZScpO1xuXHR9XG5cdGlzTG9naW4oKSB7XG5cdFx0cmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2lzTG9naW4nKTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzIiwidmFyIG51bmp1Y2tzID0gcmVxdWlyZShcIm51bmp1Y2tzL2Jyb3dzZXIvbnVuanVja3Mtc2xpbVwiKTtcbnZhciBlbnY7XG5pZiAoIW51bmp1Y2tzLmN1cnJlbnRFbnYpe1xuXHRlbnYgPSBudW5qdWNrcy5jdXJyZW50RW52ID0gbmV3IG51bmp1Y2tzLkVudmlyb25tZW50KFtdLCB7XCJkZXZcIjpmYWxzZSxcImF1dG9lc2NhcGVcIjp0cnVlLFwidGhyb3dPblVuZGVmaW5lZFwiOmZhbHNlLFwidHJpbUJsb2Nrc1wiOmZhbHNlLFwibHN0cmlwQmxvY2tzXCI6ZmFsc2V9KTtcbn0gZWxzZSB7XG5cdGVudiA9IG51bmp1Y2tzLmN1cnJlbnRFbnY7XG59XG52YXIgZGVwZW5kZW5jaWVzID0gbnVuanVja3Mud2VicGFja0RlcGVuZGVuY2llcyB8fCAobnVuanVja3Mud2VicGFja0RlcGVuZGVuY2llcyA9IHt9KTtcbmRlcGVuZGVuY2llc1tcIi4vcGFydGlhbHMvaGludHMubmprXCJdID0gcmVxdWlyZSggXCIuL3BhcnRpYWxzL2hpbnRzLm5qa1wiICk7XG5cblxuXG5cbnZhciBzaGltID0gcmVxdWlyZShcIi9Vc2Vycy9tbWloYWkvRG9jdW1lbnRzL0dpdEh1Yi9ub24tZHV0Y2gvbm9kZV9tb2R1bGVzL251bmp1Y2tzLWxvYWRlci9ydW50aW1lLXNoaW1cIik7XG5cblxuKGZ1bmN0aW9uKCkgeyhudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkID0gbnVuanVja3MubnVuanVja3NQcmVjb21waWxlZCB8fCB7fSlbXCJwdWJsaWMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5uamtcIl0gPSAoZnVuY3Rpb24oKSB7XG5mdW5jdGlvbiByb290KGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG52YXIgbGluZW5vID0gbnVsbDtcbnZhciBjb2xubyA9IG51bGw7XG52YXIgb3V0cHV0ID0gXCJcIjtcbnRyeSB7XG52YXIgcGFyZW50VGVtcGxhdGUgPSBudWxsO1xub3V0cHV0ICs9IFwiPGZvcm0gaWQ9XFxcImxvZ2luXFxcIj5cXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIGlkPVxcXCJuYW1lXFxcIiB2YWx1ZT1cXFwiXCI7XG5vdXRwdXQgKz0gcnVudGltZS5zdXBwcmVzc1ZhbHVlKHJ1bnRpbWUuY29udGV4dE9yRnJhbWVMb29rdXAoY29udGV4dCwgZnJhbWUsIFwidXNlck5hbWVcIiksIGVudi5vcHRzLmF1dG9lc2NhcGUpO1xub3V0cHV0ICs9IFwiXFxcIj5cXG4gICAgPGlucHV0IG5hbWU9XFxcInBhc3N3b3JkXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIG1heGxlbmd0aD1cXFwiMzJcXFwiPlxcbiAgICA8ZGl2IGlkPVxcXCJoaW50c1xcXCI+XFxuICAgICAgICBcIjtcbnZhciB0YXNrcyA9IFtdO1xudGFza3MucHVzaChcbmZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5lbnYuZ2V0VGVtcGxhdGUoXCIuL3BhcnRpYWxzL2hpbnRzLm5qa1wiLCBmYWxzZSwgXCJwdWJsaWMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5uamtcIiwgdHJ1ZSwgZnVuY3Rpb24odF8yLHRfMSkge1xuaWYodF8yKSB7IGNiKHRfMik7IHJldHVybjsgfVxuY2FsbGJhY2sobnVsbCx0XzEpO30pO1xufSk7XG50YXNrcy5wdXNoKFxuZnVuY3Rpb24odGVtcGxhdGUsIGNhbGxiYWNrKXtcbnRlbXBsYXRlLnJlbmRlcihjb250ZXh0LmdldFZhcmlhYmxlcygpLCBmcmFtZSwgZnVuY3Rpb24odF80LHRfMykge1xuaWYodF80KSB7IGNiKHRfNCk7IHJldHVybjsgfVxuY2FsbGJhY2sobnVsbCx0XzMpO30pO1xufSk7XG50YXNrcy5wdXNoKFxuZnVuY3Rpb24ocmVzdWx0LCBjYWxsYmFjayl7XG5vdXRwdXQgKz0gcmVzdWx0O1xuY2FsbGJhY2sobnVsbCk7XG59KTtcbmVudi53YXRlcmZhbGwodGFza3MsIGZ1bmN0aW9uKCl7XG5vdXRwdXQgKz0gXCJcXG4gICAgPC9kaXY+XFxuICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBpZD1cXFwibG9naW5CdG5cXFwiIGRpc2FibGVkPXRydWU+TG9naW48L2J1dHRvbj5cXG48L2Zvcm0+XCI7XG5pZihwYXJlbnRUZW1wbGF0ZSkge1xucGFyZW50VGVtcGxhdGUucm9vdFJlbmRlckZ1bmMoZW52LCBjb250ZXh0LCBmcmFtZSwgcnVudGltZSwgY2IpO1xufSBlbHNlIHtcbmNiKG51bGwsIG91dHB1dCk7XG59XG59KTtcbn0gY2F0Y2ggKGUpIHtcbiAgY2IocnVudGltZS5oYW5kbGVFcnJvcihlLCBsaW5lbm8sIGNvbG5vKSk7XG59XG59XG5yZXR1cm4ge1xucm9vdDogcm9vdFxufTtcblxufSkoKTtcbn0pKCk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaW0obnVuanVja3MsIGVudiwgbnVuanVja3MubnVuanVja3NQcmVjb21waWxlZFtcInB1YmxpYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLm5qa1wiXSAsIGRlcGVuZGVuY2llcylcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLm5qa1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVpZGF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vTGlzdC5uamsnO1xuaW1wb3J0IGpva2VUZW1wbGF0ZSBmcm9tICcuL3BhcnRpYWxzL2pva2UubmprJztcbmltcG9ydCB7IGhhbmRsZUFycmF5TWF4TGVuZ2h0IH0gZnJvbSAnLi4vLi4vanMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IHtcblx0Y29uc3RydWN0b3IoaXRlbXMgPSBbXSwgZmF2b3JpdGVzID0gW10sIHBhcmVudCwgbWF4TGVuZ3RoID0gMTApIHtcblx0XHRjb25zdCBmYXZvcml0ZXNJZHMgPSBmYXZvcml0ZXMubWFwKGZhdiA9PiBmYXYuaWQpO1xuXHRcdHRoaXMuaXRlbXMgPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiBmYXZvcml0ZXNJZHMuaW5kZXhPZihpdGVtLmlkKSA9PT0gLTEpO1xuXHRcdHRoaXMuZmF2b3JpdGVzID0gaGFuZGxlQXJyYXlNYXhMZW5naHQoZmF2b3JpdGVzLCBtYXhMZW5ndGgpO1xuXHRcdHRoaXMubWF4TGVuZ3RoID0gbWF4TGVuZ3RoO1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuYmluZEV2ZW50cyhwYXJlbnQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5yZW5kZXIoXG5cdFx0XHR7XG5cdFx0XHRcdGl0ZW1zOiB0aGlzLml0ZW1zLFxuXHRcdFx0XHRmYXZvcml0ZXM6IHRoaXMuZmF2b3JpdGVzLFxuXHRcdFx0XHRtYXhMZW5ndGg6IHRoaXMubWF4TGVuZ3RoXG5cdFx0XHR9LFxuXHRcdFx0KGVyciwgcmVzdWx0KSA9PiB7XG5cdFx0XHRcdHRoaXMucGFyZW50LmlubmVySFRNTCA9IHJlc3VsdDtcblx0XHRcdH0pO1xuXHR9XG5cblx0YmluZEV2ZW50cyhwYXJlbnQpIHtcblx0XHRwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuXHRcdFx0Y29uc3Qgam9rZUVsID0gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnanMtam9rZScpID8gZS50YXJnZXQgOiB0YXJnZXQuY2xvc2VzdCgnLmpzLWpva2UnKTtcblx0XHRcdGlmICgham9rZUVsKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGlkID0gcGFyc2VJbnQoam9rZUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblxuXHRcdFx0aWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWFkZC1mYXZvcml0ZScpKSB7XG5cdFx0XHRcdGNvbnN0IGZhdm9ydGllSm9rZSA9IHRoaXMuaXRlbXMuZmluZCh4ID0+IHguaWQgPT0gaWQpO1xuXHRcdFx0XHR0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoeCA9PiB4LmlkICE9PSBpZCk7XG5cdFx0XHRcdGpva2VFbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpva2VFbCk7XG5cdFx0XHRcdHRoaXMuYWRkRmF2b3JpdGUoZmF2b3J0aWVKb2tlKTtcblx0XHRcdH1cblx0XHRcdGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1yZW1vdmUnKSkge1xuXHRcdFx0XHR0aGlzLmZhdm9yaXRlcyA9IHRoaXMuZmF2b3JpdGVzLmZpbHRlcih4ID0+IHguaWQgIT09IGlkKTtcblx0XHRcdFx0am9rZUVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoam9rZUVsKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuZmF2b3JpdGVzKSk7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnQoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGFkZEl0ZW1zKG5ld0l0ZW1zKSB7XG5cdFx0Y29uc3QgZmF2b3JpdGVzSWRzID0gdGhpcy5mYXZvcml0ZXMubWFwKGZhdiA9PiBmYXYuaWQpO1xuXHRcdGNvbnN0IGl0ZW1zSWRzID0gdGhpcy5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmlkKTtcblx0XHR0aGlzLml0ZW1zID0gdGhpcy5pdGVtc1xuXHRcdFx0LmNvbmNhdChuZXdJdGVtcy5maWx0ZXIobmV3SXRlbSA9PiBmYXZvcml0ZXNJZHMuaW5kZXhPZihuZXdJdGVtLmlkKSA9PT0gLTEpXG5cdFx0XHRcdC5maWx0ZXIobmV3SXRlbSA9PiBpdGVtc0lkcy5pbmRleE9mKG5ld0l0ZW0uaWQpID09PSAtMSlcblx0XHRcdCk7XG5cdFx0dGhpcy5yZW5kZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QnKSk7XG5cdH1cblxuXHRhZGRGYXZvcml0ZShmYXZvcnRpZUpva2UpIHtcblx0XHRjb25zdCBmYXZvcml0ZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtam9rZXMtZmF2b3JpdGVzJyk7XG5cdFx0ZmF2b3J0aWVKb2tlLmlzRmF2b3J0aWUgPSB0cnVlO1xuXHRcdHRoaXMuZmF2b3JpdGVzLnB1c2goZmF2b3J0aWVKb2tlKTtcblx0XHRpZiAodGhpcy5mYXZvcml0ZXMubGVuZ3RoID4gdGhpcy5tYXhMZW5ndGgpIHtcblx0XHRcdGNvbnN0IHRvUmVtb3ZlSm9rZSA9IHRoaXMuZmF2b3JpdGVzLnNoaWZ0KCk7XG5cdFx0XHRjb25zdCB0b1JlbW92ZUpva2VFbCA9IGZhdm9yaXRlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAuanMtam9rZVtkYXRhLWlkPVwiJHt0b1JlbW92ZUpva2UuaWR9XCJdYCk7XG5cdFx0XHRmYXZvcml0ZXNDb250YWluZXIucmVtb3ZlQ2hpbGQodG9SZW1vdmVKb2tlRWwpO1xuXHRcdH1cblx0XHRmYXZvcml0ZXNDb250YWluZXIuaW5uZXJIVE1MICs9IGpva2VUZW1wbGF0ZS5yZW5kZXIoeyBpdGVtOiBmYXZvcnRpZUpva2UgfSk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuZmF2b3JpdGVzKSk7XG5cdFx0dGhpcy51cGRhdGVDb3VudCgpO1xuXHR9XG5cdHVwZGF0ZUNvdW50KCkge1xuXHRcdGNvbnN0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvdW50Jyk7XG5cdFx0Y291bnQuaW5uZXJIVE1MID0gYCR7dGhpcy5mYXZvcml0ZXMubGVuZ3RofSAvICR7dGhpcy5tYXhMZW5ndGh9YDtcblx0fVxuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9MaXN0L0xpc3QuanMiLCJ2YXIgbnVuanVja3MgPSByZXF1aXJlKFwibnVuanVja3MvYnJvd3Nlci9udW5qdWNrcy1zbGltXCIpO1xudmFyIGVudjtcbmlmICghbnVuanVja3MuY3VycmVudEVudil7XG5cdGVudiA9IG51bmp1Y2tzLmN1cnJlbnRFbnYgPSBuZXcgbnVuanVja3MuRW52aXJvbm1lbnQoW10sIHVuZGVmaW5lZCk7XG59IGVsc2Uge1xuXHRlbnYgPSBudW5qdWNrcy5jdXJyZW50RW52O1xufVxudmFyIGRlcGVuZGVuY2llcyA9IG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgfHwgKG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgPSB7fSk7XG5kZXBlbmRlbmNpZXNbXCIuL3BhcnRpYWxzL2pva2UubmprXCJdID0gcmVxdWlyZSggXCIuL3BhcnRpYWxzL2pva2UubmprXCIgKTtcblxuXG5cblxudmFyIHNoaW0gPSByZXF1aXJlKFwiL1VzZXJzL21taWhhaS9Eb2N1bWVudHMvR2l0SHViL25vbi1kdXRjaC9ub2RlX21vZHVsZXMvbnVuanVja3MtbG9hZGVyL3J1bnRpbWUtc2hpbVwiKTtcblxuXG4oZnVuY3Rpb24oKSB7KG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWQgPSBudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkIHx8IHt9KVtcInB1YmxpYy9jb21wb25lbnRzL0xpc3QvTGlzdC5uamtcIl0gPSAoZnVuY3Rpb24oKSB7XG5mdW5jdGlvbiByb290KGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG52YXIgbGluZW5vID0gbnVsbDtcbnZhciBjb2xubyA9IG51bGw7XG52YXIgb3V0cHV0ID0gXCJcIjtcbnRyeSB7XG52YXIgcGFyZW50VGVtcGxhdGUgPSBudWxsO1xub3V0cHV0ICs9IFwiPHVsIGNsYXNzPVxcXCJqcy1qb2tlcy1saXN0XFxcIj5cXG5cXHRcIjtcbmZyYW1lID0gZnJhbWUucHVzaCgpO1xudmFyIHRfMyA9IHJ1bnRpbWUuY29udGV4dE9yRnJhbWVMb29rdXAoY29udGV4dCwgZnJhbWUsIFwiaXRlbXNcIik7XG5pZih0XzMpIHt0XzMgPSBydW50aW1lLmZyb21JdGVyYXRvcih0XzMpO1xudmFyIHRfMiA9IHRfMy5sZW5ndGg7XG5mb3IodmFyIHRfMT0wOyB0XzEgPCB0XzMubGVuZ3RoOyB0XzErKykge1xudmFyIHRfNCA9IHRfM1t0XzFdO1xuZnJhbWUuc2V0KFwiaXRlbVwiLCB0XzQpO1xuZnJhbWUuc2V0KFwibG9vcC5pbmRleFwiLCB0XzEgKyAxKTtcbmZyYW1lLnNldChcImxvb3AuaW5kZXgwXCIsIHRfMSk7XG5mcmFtZS5zZXQoXCJsb29wLnJldmluZGV4XCIsIHRfMiAtIHRfMSk7XG5mcmFtZS5zZXQoXCJsb29wLnJldmluZGV4MFwiLCB0XzIgLSB0XzEgLSAxKTtcbmZyYW1lLnNldChcImxvb3AuZmlyc3RcIiwgdF8xID09PSAwKTtcbmZyYW1lLnNldChcImxvb3AubGFzdFwiLCB0XzEgPT09IHRfMiAtIDEpO1xuZnJhbWUuc2V0KFwibG9vcC5sZW5ndGhcIiwgdF8yKTtcbm91dHB1dCArPSBcIlxcblxcdFxcdFwiO1xudmFyIHRhc2tzID0gW107XG50YXNrcy5wdXNoKFxuZnVuY3Rpb24oY2FsbGJhY2spIHtcbmVudi5nZXRUZW1wbGF0ZShcIi4vcGFydGlhbHMvam9rZS5uamtcIiwgZmFsc2UsIFwicHVibGljL2NvbXBvbmVudHMvTGlzdC9MaXN0Lm5qa1wiLCB0cnVlLCBmdW5jdGlvbih0XzYsdF81KSB7XG5pZih0XzYpIHsgY2IodF82KTsgcmV0dXJuOyB9XG5jYWxsYmFjayhudWxsLHRfNSk7fSk7XG59KTtcbnRhc2tzLnB1c2goXG5mdW5jdGlvbih0ZW1wbGF0ZSwgY2FsbGJhY2spe1xudGVtcGxhdGUucmVuZGVyKGNvbnRleHQuZ2V0VmFyaWFibGVzKCksIGZyYW1lLCBmdW5jdGlvbih0XzgsdF83KSB7XG5pZih0XzgpIHsgY2IodF84KTsgcmV0dXJuOyB9XG5jYWxsYmFjayhudWxsLHRfNyk7fSk7XG59KTtcbnRhc2tzLnB1c2goXG5mdW5jdGlvbihyZXN1bHQsIGNhbGxiYWNrKXtcbm91dHB1dCArPSByZXN1bHQ7XG5jYWxsYmFjayhudWxsKTtcbn0pO1xuZW52LndhdGVyZmFsbCh0YXNrcywgZnVuY3Rpb24oKXtcbm91dHB1dCArPSBcIlxcblxcdFwiO1xufSk7XG59XG59XG5mcmFtZSA9IGZyYW1lLnBvcCgpO1xub3V0cHV0ICs9IFwiXFxuXFx0PGRpdj5cIjtcbm91dHB1dCArPSBydW50aW1lLnN1cHByZXNzVmFsdWUocnVudGltZS5tZW1iZXJMb29rdXAoKHJ1bnRpbWUuY29udGV4dE9yRnJhbWVMb29rdXAoY29udGV4dCwgZnJhbWUsIFwiaXRlbXNcIikpLFwibGVuZ3RoXCIpLCBlbnYub3B0cy5hdXRvZXNjYXBlKTtcbm91dHB1dCArPSBcIjwvZGl2PlxcbjwvdWw+XFxuPHVsIGNsYXNzPVxcXCJqcy1qb2tlcy1mYXZvcml0ZXNcXFwiPlxcblxcdFwiO1xuZnJhbWUgPSBmcmFtZS5wdXNoKCk7XG52YXIgdF8xMSA9IHJ1bnRpbWUuY29udGV4dE9yRnJhbWVMb29rdXAoY29udGV4dCwgZnJhbWUsIFwiZmF2b3JpdGVzXCIpO1xuaWYodF8xMSkge3RfMTEgPSBydW50aW1lLmZyb21JdGVyYXRvcih0XzExKTtcbnZhciB0XzEwID0gdF8xMS5sZW5ndGg7XG5mb3IodmFyIHRfOT0wOyB0XzkgPCB0XzExLmxlbmd0aDsgdF85KyspIHtcbnZhciB0XzEyID0gdF8xMVt0XzldO1xuZnJhbWUuc2V0KFwiaXRlbVwiLCB0XzEyKTtcbmZyYW1lLnNldChcImxvb3AuaW5kZXhcIiwgdF85ICsgMSk7XG5mcmFtZS5zZXQoXCJsb29wLmluZGV4MFwiLCB0XzkpO1xuZnJhbWUuc2V0KFwibG9vcC5yZXZpbmRleFwiLCB0XzEwIC0gdF85KTtcbmZyYW1lLnNldChcImxvb3AucmV2aW5kZXgwXCIsIHRfMTAgLSB0XzkgLSAxKTtcbmZyYW1lLnNldChcImxvb3AuZmlyc3RcIiwgdF85ID09PSAwKTtcbmZyYW1lLnNldChcImxvb3AubGFzdFwiLCB0XzkgPT09IHRfMTAgLSAxKTtcbmZyYW1lLnNldChcImxvb3AubGVuZ3RoXCIsIHRfMTApO1xub3V0cHV0ICs9IFwiXFxuXFx0XFx0XCI7XG52YXIgdGFza3MgPSBbXTtcbnRhc2tzLnB1c2goXG5mdW5jdGlvbihjYWxsYmFjaykge1xuZW52LmdldFRlbXBsYXRlKFwiLi9wYXJ0aWFscy9qb2tlLm5qa1wiLCBmYWxzZSwgXCJwdWJsaWMvY29tcG9uZW50cy9MaXN0L0xpc3QubmprXCIsIHRydWUsIGZ1bmN0aW9uKHRfMTQsdF8xMykge1xuaWYodF8xNCkgeyBjYih0XzE0KTsgcmV0dXJuOyB9XG5jYWxsYmFjayhudWxsLHRfMTMpO30pO1xufSk7XG50YXNrcy5wdXNoKFxuZnVuY3Rpb24odGVtcGxhdGUsIGNhbGxiYWNrKXtcbnRlbXBsYXRlLnJlbmRlcihjb250ZXh0LmdldFZhcmlhYmxlcygpLCBmcmFtZSwgZnVuY3Rpb24odF8xNix0XzE1KSB7XG5pZih0XzE2KSB7IGNiKHRfMTYpOyByZXR1cm47IH1cbmNhbGxiYWNrKG51bGwsdF8xNSk7fSk7XG59KTtcbnRhc2tzLnB1c2goXG5mdW5jdGlvbihyZXN1bHQsIGNhbGxiYWNrKXtcbm91dHB1dCArPSByZXN1bHQ7XG5jYWxsYmFjayhudWxsKTtcbn0pO1xuZW52LndhdGVyZmFsbCh0YXNrcywgZnVuY3Rpb24oKXtcbm91dHB1dCArPSBcIlxcblxcdFwiO1xufSk7XG59XG59XG5mcmFtZSA9IGZyYW1lLnBvcCgpO1xub3V0cHV0ICs9IFwiXFxuPC91bD5cXG48ZGl2IGlkPVxcXCJjb3VudFxcXCI+XCI7XG5vdXRwdXQgKz0gcnVudGltZS5zdXBwcmVzc1ZhbHVlKHJ1bnRpbWUubWVtYmVyTG9va3VwKChydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBcImZhdm9yaXRlc1wiKSksXCJsZW5ndGhcIiksIGVudi5vcHRzLmF1dG9lc2NhcGUpO1xub3V0cHV0ICs9IFwiIC8gXCI7XG5vdXRwdXQgKz0gcnVudGltZS5zdXBwcmVzc1ZhbHVlKHJ1bnRpbWUuY29udGV4dE9yRnJhbWVMb29rdXAoY29udGV4dCwgZnJhbWUsIFwibWF4TGVuZ3RoXCIpLCBlbnYub3B0cy5hdXRvZXNjYXBlKTtcbm91dHB1dCArPSBcIjwvZGl2PlwiO1xuaWYocGFyZW50VGVtcGxhdGUpIHtcbnBhcmVudFRlbXBsYXRlLnJvb3RSZW5kZXJGdW5jKGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKTtcbn0gZWxzZSB7XG5jYihudWxsLCBvdXRwdXQpO1xufVxuO1xufSBjYXRjaCAoZSkge1xuICBjYihydW50aW1lLmhhbmRsZUVycm9yKGUsIGxpbmVubywgY29sbm8pKTtcbn1cbn1cbnJldHVybiB7XG5yb290OiByb290XG59O1xuXG59KSgpO1xufSkoKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gc2hpbShudW5qdWNrcywgZW52LCBudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkW1wicHVibGljL2NvbXBvbmVudHMvTGlzdC9MaXN0Lm5qa1wiXSAsIGRlcGVuZGVuY2llcylcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL0xpc3QvTGlzdC5uamtcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBqb2tlVXJsID0gJ2h0dHBzOi8vYXBpLmljbmRiLmNvbS9qb2tlcy9yYW5kb20vJHtsaW1pdH0nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9jb25zdGFudHMuanMiLCJpbXBvcnQgeyBwYXJzZVRlbXBsYXRlU3RyaW5nIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRKb2tlcyh1cmwsIGxpbWl0KSB7XG5cdHJldHVybiBmZXRjaChwYXJzZVRlbXBsYXRlU3RyaW5nKHVybCwgeyBsaW1pdCB9KSlcblx0XHQudGhlbihyID0+IHtcblx0XHRcdGlmICghci5vaykge1xuXHRcdFx0XHR0aHJvdyBFcnJvcignTm8gbW9yZSBqb2tlcyBhYm91dCBDaHVjayBOb3JyaXMhJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gci5qc29uKCk7XG5cdFx0fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvbG9hZEpva2VzLmpzIiwidmFyIG51bmp1Y2tzID0gcmVxdWlyZShcIm51bmp1Y2tzL2Jyb3dzZXIvbnVuanVja3Mtc2xpbVwiKTtcbnZhciBlbnY7XG5pZiAoIW51bmp1Y2tzLmN1cnJlbnRFbnYpe1xuXHRlbnYgPSBudW5qdWNrcy5jdXJyZW50RW52ID0gbmV3IG51bmp1Y2tzLkVudmlyb25tZW50KFtdLCB1bmRlZmluZWQpO1xufSBlbHNlIHtcblx0ZW52ID0gbnVuanVja3MuY3VycmVudEVudjtcbn1cbnZhciBkZXBlbmRlbmNpZXMgPSBudW5qdWNrcy53ZWJwYWNrRGVwZW5kZW5jaWVzIHx8IChudW5qdWNrcy53ZWJwYWNrRGVwZW5kZW5jaWVzID0ge30pO1xuXG5cblxuXG52YXIgc2hpbSA9IHJlcXVpcmUoXCIvVXNlcnMvbW1paGFpL0RvY3VtZW50cy9HaXRIdWIvbm9uLWR1dGNoL25vZGVfbW9kdWxlcy9udW5qdWNrcy1sb2FkZXIvcnVudGltZS1zaGltXCIpO1xuXG5cbihmdW5jdGlvbigpIHsobnVuanVja3MubnVuanVja3NQcmVjb21waWxlZCA9IG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWQgfHwge30pW1wicHVibGljL3RlbXBsYXRlcy9lcnJvci5uamtcIl0gPSAoZnVuY3Rpb24oKSB7XG5mdW5jdGlvbiByb290KGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG52YXIgbGluZW5vID0gbnVsbDtcbnZhciBjb2xubyA9IG51bGw7XG52YXIgb3V0cHV0ID0gXCJcIjtcbnRyeSB7XG52YXIgcGFyZW50VGVtcGxhdGUgPSBudWxsO1xub3V0cHV0ICs9IFwiPGgxPkJlc3Qgam9rZTogVGhlcmUgYXJlIG5vIENodWNrIE5vcnJpcyBqb2tlczwvaDE+XCI7XG5pZihwYXJlbnRUZW1wbGF0ZSkge1xucGFyZW50VGVtcGxhdGUucm9vdFJlbmRlckZ1bmMoZW52LCBjb250ZXh0LCBmcmFtZSwgcnVudGltZSwgY2IpO1xufSBlbHNlIHtcbmNiKG51bGwsIG91dHB1dCk7XG59XG47XG59IGNhdGNoIChlKSB7XG4gIGNiKHJ1bnRpbWUuaGFuZGxlRXJyb3IoZSwgbGluZW5vLCBjb2xubykpO1xufVxufVxucmV0dXJuIHtcbnJvb3Q6IHJvb3Rcbn07XG5cbn0pKCk7XG59KSgpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBzaGltKG51bmp1Y2tzLCBlbnYsIG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWRbXCJwdWJsaWMvdGVtcGxhdGVzL2Vycm9yLm5qa1wiXSAsIGRlcGVuZGVuY2llcylcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy90ZW1wbGF0ZXMvZXJyb3IubmprXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9