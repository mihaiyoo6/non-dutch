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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11).setImmediate, __webpack_require__(4)))

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

var nunjucks = __webpack_require__(0);
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], {"dev":false,"autoescape":true,"throwOnUndefined":false,"trimBlocks":false,"lstripBlocks":false});
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
output += "<li class=\"js-joke list-item\" data-id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"id"), env.opts.autoescape);
output += "\" data-text=\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"joke")), env.opts.autoescape);
output += "\">\n\t<div class=\"list-item__text\">\n\t\t";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"joke")), env.opts.autoescape);
output += "\n\t</div>\n\t\n\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"isFavortie")) {
output += "\n\t\t<i class=\"js-remove material-icons list-item__icon\">&#xE92B;</i>\n\t";
;
}
else {
output += "\n\t\t<i class=\"";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"isRandom")) {
output += " js-add-from-random ";
;
}
else {
output += "js-add-favorite ";
;
}
output += " material-icons list-item__icon\">&#xE87E;</i>\n\t";
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
output += "\" class=\"hint\">";
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.checkConsecutiveLetters = checkConsecutiveLetters;
exports.parseTemplateString = parseTemplateString;
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

function get(path, obj) {
	var fb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '${' + path + '}';

	return path.split('.').reduce(function (res, key) {
		return res[key] || fb;
	}, obj);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _Login = __webpack_require__(9);

var _Login2 = _interopRequireDefault(_Login);

var _List = __webpack_require__(14);

var _List2 = _interopRequireDefault(_List);

var _constants = __webpack_require__(17);

var _loadJokes = __webpack_require__(18);

var _loadJokes2 = _interopRequireDefault(_loadJokes);

var _error = __webpack_require__(19);

var _error2 = _interopRequireDefault(_error);

var _wellcomeBack = __webpack_require__(20);

var _wellcomeBack2 = _interopRequireDefault(_wellcomeBack);

var _joke = __webpack_require__(2);

var _joke2 = _interopRequireDefault(_joke);

var _Store = __webpack_require__(21);

var _Store2 = _interopRequireDefault(_Store);

var _futureTabs = __webpack_require__(22);

var _futureTabs2 = _interopRequireDefault(_futureTabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userNameStore = new _Store2.default('userName');
var isLoginStore = new _Store2.default('isLogin', false);
var favoritesStore = new _Store2.default('favorites');
var jokesStore = new _Store2.default('items', false);
var loginForm = new _Login2.default(showJokes, userNameStore, isLoginStore);

var appContainer = document.querySelector('#app');
var page1 = appContainer.querySelector('.page-1');
window.onload = function () {
	var container = appContainer.querySelector('.container');
	container.classList.remove('enter');

	if (loginForm.isLogin()) {
		page1.insertAdjacentHTML('beforeend', _wellcomeBack2.default.render({ userName: userNameStore.getAll() }));
		page1.addEventListener('click', showJokes);
	} else {
		var loginContainer = appContainer.querySelector('#login');
		loginForm.render(loginContainer);
	}
};

function showJokes() {
	var jokesContainer = appContainer.querySelector('.page-2');
	var jokesListContainer = jokesContainer.querySelector('#jokes-list');
	var favoritesListContainer = jokesContainer.querySelector('#favorites');
	var favorites = favoritesStore.getAll();
	var favoriteslist = new _List2.default('favorites', favorites, favoritesListContainer);
	var jokesList = new _List2.default('jokes', [], jokesListContainer);

	jokesList.render();
	favoriteslist.render();
	handleRandomJoke();
	handleLoadModeJokes(jokesList);
	(0, _futureTabs2.default)('.tabs');
	bindEvents(jokesContainer, favoriteslist, jokesList);

	jokesContainer.classList.remove('hidden');
	page1.classList.add('exit');

	(0, _loadJokes2.default)(_constants.jokeUrl, 10).then(function (jokesData) {
		if (jokesData.type !== 'success') {
			return jokesListContainer.innerHTML = _error2.default.render();
		}
		jokesStore.set(jokesData.value);
		jokesList.addItems(jokesData.value);
	}).catch(function () {
		jokesListContainer.innerHTML = _error2.default.render();
	});
}

function handleLoadModeJokes(jokesList) {
	var loadMoreBtn = document.querySelector('#loadMore');
	loadMoreBtn.addEventListener('click', function () {
		(0, _loadJokes2.default)(_constants.jokeUrl, 10).then(function (jokesData) {
			if (jokesData.type !== 'success') {
				return jokesContainer.innerHTML = _error2.default.render();
			}
			jokesStore.insert(jokesData.value);
			jokesList.addItems(jokesData.value);
		});
	});
}

function handleRandomJoke() {
	var getRandomJokes = document.querySelector('#randomBtn');
	var interval = null;
	getRandomJokes.addEventListener('change', function (e) {
		var fetchRandomJoke = e.target.checked;
		if (fetchRandomJoke) {
			loadRandomJoke();
			interval = setInterval(loadRandomJoke, 5000);
		} else {
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
		return _joke2.default.render({
			item: Object.assign(item, { isRandom: true })
		}, function (err, result) {
			randomContainer.insertAdjacentHTML('afterbegin', result);
		});
	});
}

function bindEvents(parent, favoriteslist, jokesList) {
	parent.addEventListener('click', function (e) {
		var target = e.target;
		var jokeEl = target.classList.contains('js-joke') ? e.target : target.closest('.js-joke');
		if (!jokeEl) {
			return;
		}
		var id = parseInt(jokeEl.getAttribute('data-id'));

		if (target.classList.contains('js-add-favorite')) {
			var item = jokesStore.remove(id);
			jokesList.removeItem(id);
			addFavorite(item, favoriteslist);
		}

		if (target.classList.contains('js-remove')) {
			favoriteslist.removeItem(id);
			favoritesStore.remove(id);
		}

		if (target.classList.contains('js-add-from-random')) {
			var _item = {
				id: id,
				joke: jokeEl.getAttribute('data-text')
			};
			jokeEl.parentNode.removeChild(jokeEl);
			addFavorite(_item, favoriteslist);
		}
	});
}

function addFavorite(item, favoriteslist) {
	if (favoritesStore.getAll().length >= 10) {
		var toRemoveItems = favoritesStore.setLength(10);
		favoriteslist.removeItems(toRemoveItems);
	}
	Object.assign(item, { isFavortie: true });
	favoritesStore.insert(item);
	favoriteslist.addItems([item]);
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

var _hints = __webpack_require__(5);

var _hints2 = _interopRequireDefault(_hints);

var _utils = __webpack_require__(6);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = function () {
	function Login(onSubmit, userStore, loginStore) {
		_classCallCheck(this, Login);

		this.loginStore = loginStore;
		this.userStore = userStore;
		this.password = '';
		this.htmlElemenets = [];
		this.userName = this.getUserName();
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
				letters: 'Should contain only lower letters',
				noSomeLetters: 'Should  not contain "i" "O" or "l"',
				double: 'Should contain two overlapping letters, like "aa", "bb" or "cc"',
				consecutive: 'Should contain 3 consecutive letters like "abc", "def" or "xyz"',
				length: 'Should contain more than 2 letters but not more than 32'
			};

			if (!/^[a-z]+$/.test(this.password)) {
				errors.push({
					id: 'letters',
					mesage: messages.letters
				});
			}

			if (!/([a-z])\1/i.test(this.password)) {
				errors.push({
					id: 'double',
					mesage: messages.double
				});
			}

			if (!/^[^iOl]+$/.test(this.password)) {
				errors.push({
					id: 'noSomeLetters',
					mesage: messages.noSomeLetters
				});
			}

			if (this.password.length >= 3) {
				if (!(0, _utils.checkConsecutiveLetters)(this.password)) {
					errors.push({
						id: 'consecutive',
						mesage: messages.consecutive
					});
				}
			} else {
				errors.push({
					id: 'length',
					mesage: messages.length
				});
			}

			this.htmlElemenets.hints.innerHTML = _hints2.default.render({ errors: errors });
			this.htmlElemenets.loginBtn.disabled = errors.length !== 0;
		}
	}, {
		key: 'setSession',
		value: function setSession() {
			this.loginStore.set(true);
		}
	}, {
		key: 'setUserName',
		value: function setUserName() {
			this.userStore.set(this.userName);
		}
	}, {
		key: 'getUserName',
		value: function getUserName() {
			return this.userStore.getAll();
		}
	}, {
		key: 'isLogin',
		value: function isLogin() {
			return this.loginStore.getAll().length !== 0;
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
	env = nunjucks.currentEnv = new nunjucks.Environment([], undefined);
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});
dependencies["./partials/hints.njk"] = __webpack_require__( 5 );




var shim = __webpack_require__(1);


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["public/components/Login/Login.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<form id=\"login\">\n    <div class=\"group\">\n        <label for=\"name\" class=\"label\">Name</label>\n        <input type=\"text\" name=\"name\" id=\"name\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userName"), env.opts.autoescape);
output += "\" class=\"input\">\n    </div>\n    <div class=\"group\">\n        <label for=\"password\" class=\"label\">Security code &#42</label>\n        <input name=\"password\" type=\"password\" id=\"password\" maxlength=\"32\"  class=\"input\">\n    </div>\n    <button type=\"submit\" id=\"loginBtn\" disabled=true class=\"see-jokes-btn\">See Jokes</button>\n    <div>&#42 Code that Chuck Norris has in mind</div>\n    <div id=\"hints\" class=\"hints\">\n        ";
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
output += "\n    </div>\n</form>";
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(4)))

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

__webpack_require__(15);

var _List = __webpack_require__(16);

var _List2 = _interopRequireDefault(_List);

var _joke = __webpack_require__(2);

var _joke2 = _interopRequireDefault(_joke);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function () {
	function List(name) {
		var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		var parent = arguments[2];

		_classCallCheck(this, List);

		this.name = name;
		this.items = items;
		this.parent = parent;
		this.noJokesContainer = null;
	}

	_createClass(List, [{
		key: 'render',
		value: function render() {
			var _this = this;

			return _List2.default.render({
				name: this.name,
				items: this.items
			}, function (err, result) {
				_this.parent.innerHTML = result;
				_this.noJokesContainer = _this.parent.querySelector('.js-no-jokes-container');
			});
		}
	}, {
		key: 'addItems',
		value: function addItems(newItems) {
			var html = '';
			newItems.forEach(function (item) {
				return html += _joke2.default.render({ item: item });
			});
			this.parent.insertAdjacentHTML('beforeend', html);
			if (this.noJokesContainer) {
				this.noJokesContainer.style.display = 'none';
			}
		}
	}, {
		key: 'removeItems',
		value: function removeItems(items) {
			var _this2 = this;

			items.forEach(function (item) {
				return _this2.removeItem(item.id);
			});
		}
	}, {
		key: 'removeItem',
		value: function removeItem(id) {
			var elToRemove = this.parent.querySelector('.js-joke[data-id="' + id + '"]');
			elToRemove.parentNode.removeChild(elToRemove);
			if (!this.parent.querySelector('.js-joke')) {
				this.noJokesContainer.style.display = 'block';
			}
		}
	}]);

	return List;
}();

exports.default = List;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__(0);
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], undefined);
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});
dependencies["./partials/joke.njk"] = __webpack_require__( 2 );




var shim = __webpack_require__(1);


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["public/components/List/List.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"lists-container\">\n\t<ul class=\"js-jokes-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "  list\" id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "\">\n\t\t\n\t\t<div class=\"js-no-jokes-container\" style=\"";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "items")),"length") == 0) {
output += "display:block";
;
}
else {
output += " display: none;";
;
}
output += "\">\n\t\t\t<div class=\"no-jokes\">\n\t\t\t\t<h2>No Jokes!<h2>\n\t\t\t\t<h3>Chuck Norris was here!<h3>\n\t\t\t</div>\n\t\t\t<div style=\"width:100%;height:0;padding-bottom:56%;position:relative;\"><iframe src=\"https://giphy.com/embed/3o6Mbm6G6X9Xl8Wp5m\" width=\"100%\" height=\"100%\" style=\"position:absolute\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe></div>\n\t\t</div>\n\t\n\t\t";
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
output += "\n\t\t\t";
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
output += "\n\t\t";
});
}
}
frame = frame.pop();
output += "\n\t</ul>\n</div>\n\n";
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var jokeUrl = exports.jokeUrl = 'https://api.icndb.com/jokes/random/${limit}';

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = loadJokes;

var _utils = __webpack_require__(6);

function loadJokes(url, limit) {
	return fetch((0, _utils.parseTemplateString)(url, { limit: limit })).then(function (r) {
		if (!r.ok) {
			throw Error('No more jokes about Chuck Norris!');
		}
		return r.json();
	});
}

/***/ }),
/* 19 */
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

/***/ }),
/* 20 */
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


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["public/templates/wellcome-back.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<h2>Wellcome back ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userName"), env.opts.autoescape);
output += "</h2>\n<h4 class=\"pulsate\">touch me to see jockes</h4>";
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



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["public/templates/wellcome-back.njk"] , dependencies)

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
	function Store(name) {
		var permanent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
		var callBack = arguments[2];

		_classCallCheck(this, Store);

		var storage = permanent ? localStorage : sessionStorage;

		this.getStorage = function () {
			return JSON.parse(storage.getItem(name) || '[]');
		};

		this.setStorage = function (data) {
			return storage.setItem(name, JSON.stringify(data));
		};

		if (callBack) {
			callBack();
		}
	}

	_createClass(Store, [{
		key: 'set',
		value: function set(value) {
			this.setStorage(value);
		}
	}, {
		key: 'insert',
		value: function insert(item, callBack) {
			var items = this.getStorage();
			if (Array.isArray(item)) {
				item.forEach(function (x) {
					return items.push(x);
				});
			} else {
				items.push(item);
			}
			this.setStorage(items);

			if (callBack) {
				callBack();
			}
		}
	}, {
		key: 'getAll',
		value: function getAll() {
			return this.getStorage();
		}
	}, {
		key: 'find',
		value: function find(id) {
			var items = this.getStorage();
			return items.find(function (item) {
				return item.id == id;
			});
		}
	}, {
		key: 'remove',
		value: function remove(id) {
			var items = this.getStorage();
			var removedItem = items.find(function (item) {
				return item.id === id;
			});
			this.setStorage(items.filter(function (item) {
				return item.id !== id;
			}));
			return removedItem;
		}
	}, {
		key: 'setLength',
		value: function setLength(maxLength) {
			var items = this.getStorage();
			var remainItems = items.splice(items.length - maxLength + 1);
			this.set(remainItems);
			return items;
		}
	}]);

	return Store;
}();

exports.default = Store;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = initTabs;
// Element.closest polyfill
((e) => {
    e.closest || assign();
    function assign() {
        e.closest = function closest(css) {
            return this.parentNode ? (this.matches(css) ? this : closest.call(this.parentNode, css)) : null;
        };
    }
})(Element.prototype);

class Tab {
    /**
     * @param  {Tabs}   tabs   Instance of Tabs which contains this tab
     * @param  {Dom}    toggle toggle button
     * @param  {Dom}    tab    block to hide or show
     */
    constructor (tabs, toggle, tab) {
        this.tabs = tabs;
        this.toggle = toggle;
        this.tab = tab;
        this.src = this.tab.getAttribute('data-src');
        if (this.src !== null) {
            this.hasToBeLoaded = true;
        }

        if (this.toggle.classList.contains(this.tabs.activeToggleClassName)) {
            this.open();
        } else {
            this.close();
        }
        this.init();
    }

    init () {
        this.open = this.open.bind(this); // needed for removeEventListener
        this.toggle.addEventListener('click', this.open);
    }

    load () {
        // @todo: use fetch() function
        let xhr = new XMLHttpRequest();
        this.hasToBeLoaded = false;
        xhr.open('GET', encodeURI(this.src));
        xhr.onload = () => {
            if (xhr.status === 200 || xhr.status === 304) {
                this.tab.innerHTML = xhr.responseText;
            } else {
                this.hasToBeLoaded = true;
            }
        };
        xhr.onerror = (error) => {
            console.error(error);
        };
        xhr.send();
    }

    open () {
        if (this.tabs.active === this) {
            // already open
            return;
        }
        if (this.hasToBeLoaded) {
            this.load();
        }
        if (this.tabs.active) {
            this.tabs.active.close();
        }
        this.tabs.active = this;
        this.tab.style.display = `block`;
        this.toggle.classList.add(this.tabs.activeToggleClassName);
    }

    close () {
        this.tab.style.display = `none`;
        this.toggle.classList.remove(this.tabs.activeToggleClassName);
    }

    destroy () {
        this.toggle.removeEventListener('click', this.open);
    }
}

class Tabs {
    constructor (container, blockClassName = `tabs`) {
        this.container = container;
        this.setClassNames(blockClassName);
        this.init();
    }

    init () {
        const filter = element => element.closest(`.${this.blockClassName}`) === this.container;
        this.toggles = Array.from(this.container.querySelectorAll(this.toggleSelector)).filter(filter);
        this.tabs = Array.from(this.container.querySelectorAll(this.tabSelector)).filter(filter);
        this.initedTabs = [];
        if (!this.isEverythingOk()) {
            return;
        }

        for (let index = 0; index < this.toggles.length; index++) {
            let tab = new Tab (this, this.toggles[index], this.tabs[index]);
            this.initedTabs.push(tab);
        }
    }

    /**
     * Initializes classes and selectors for blocks
     * @param {String} blockClassName 'tabs' by default
     */
    setClassNames (blockClassName) {
        this.blockClassName = blockClassName;
        this.toggleSelector = `.${blockClassName}__toggle`;
        this.tabSelector = `.${blockClassName}__tab`;
        this.activeToggleClassName = `${blockClassName}__toggle_active`;
    }

    isEverythingOk () {
        if (this.toggles.length !== this.tabs.length) {
            console.warn(`Tabs toggles and tabs amounts are not matching`);
            return false;
        } else if (this.toggles.length === 0) {
            console.warn(`There's no toggles for tabs`);
            return false;
        } else if (this.tabs.length === 0) {
            console.warn(`There's no content tabs`);
            return false;
        }
        return true;
    }

    destroy () {
        var tab;
        while (tab = this.initedTabs.pop()) {
            tab.destroy();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["Tabs"] = Tabs;


/**
 * iterates through all matched blocks and initializes tabs classes
 * @param  {String} config selector for tabs
 * @param  {Object} config {
 *                             selector: selector for tabs
 *                             blockClassName: block className (read more about _bem)
 *                         }
 */
function initTabs(config) {
    var selector;
    if (typeof config === `string`) {
        selector = config;
    } else {
        var {selector, blockClassName} = config; // doesn't work without 'var'
    }
    for (let container of document.querySelectorAll(selector)) {
        let tabs = new Tabs(container, blockClassName);
    }
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDQzZWQxMWRjMmY0ZjFlZjg1YmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL251bmp1Y2tzL2Jyb3dzZXIvbnVuanVja3Mtc2xpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVuanVja3MtbG9hZGVyL3J1bnRpbWUtc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9MaXN0L3BhcnRpYWxzL2pva2UubmprIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9Mb2dpbi9wYXJ0aWFscy9oaW50cy5uamsiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvTG9naW4vTG9naW4ubmprIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvTGlzdC9MaXN0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL0xpc3QvTGlzdC5zY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL0xpc3QvTGlzdC5uamsiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbG9hZEpva2VzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvZXJyb3IubmprIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvd2VsbGNvbWUtYmFjay5uamsiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL1N0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mdXR1cmUtdGFicy9kaXN0L3RhYnMuanMiXSwibmFtZXMiOlsiY2hlY2tDb25zZWN1dGl2ZUxldHRlcnMiLCJwYXJzZVRlbXBsYXRlU3RyaW5nIiwidmFsdWUiLCJjb25zZWN1dGl2ZUluZGV4IiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInN1YnN0cmluZyIsInRlbXBsYXRlIiwibWFwIiwiZmFsbGJhY2siLCJyZXBsYWNlIiwicGF0aCIsIm1hdGNoIiwic3Vic3RyIiwidHJpbSIsImdldCIsIm9iaiIsImZiIiwic3BsaXQiLCJyZWR1Y2UiLCJyZXMiLCJrZXkiLCJ1c2VyTmFtZVN0b3JlIiwiaXNMb2dpblN0b3JlIiwiZmF2b3JpdGVzU3RvcmUiLCJqb2tlc1N0b3JlIiwibG9naW5Gb3JtIiwic2hvd0pva2VzIiwiYXBwQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFnZTEiLCJ3aW5kb3ciLCJvbmxvYWQiLCJjb250YWluZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpc0xvZ2luIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicmVuZGVyIiwidXNlck5hbWUiLCJnZXRBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwibG9naW5Db250YWluZXIiLCJqb2tlc0NvbnRhaW5lciIsImpva2VzTGlzdENvbnRhaW5lciIsImZhdm9yaXRlc0xpc3RDb250YWluZXIiLCJmYXZvcml0ZXMiLCJmYXZvcml0ZXNsaXN0Iiwiam9rZXNMaXN0IiwiaGFuZGxlUmFuZG9tSm9rZSIsImhhbmRsZUxvYWRNb2RlSm9rZXMiLCJiaW5kRXZlbnRzIiwiYWRkIiwidGhlbiIsImpva2VzRGF0YSIsInR5cGUiLCJpbm5lckhUTUwiLCJzZXQiLCJhZGRJdGVtcyIsImNhdGNoIiwibG9hZE1vcmVCdG4iLCJpbnNlcnQiLCJnZXRSYW5kb21Kb2tlcyIsImludGVydmFsIiwiZmV0Y2hSYW5kb21Kb2tlIiwiZSIsInRhcmdldCIsImNoZWNrZWQiLCJsb2FkUmFuZG9tSm9rZSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJhbmRvbUNvbnRhaW5lciIsImpva2VEYXRhIiwiaXRlbSIsIk9iamVjdCIsImFzc2lnbiIsImlzUmFuZG9tIiwiZXJyIiwicmVzdWx0IiwicGFyZW50Iiwiam9rZUVsIiwiY29udGFpbnMiLCJjbG9zZXN0IiwiaWQiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUl0ZW0iLCJhZGRGYXZvcml0ZSIsImpva2UiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ0b1JlbW92ZUl0ZW1zIiwic2V0TGVuZ3RoIiwicmVtb3ZlSXRlbXMiLCJpc0Zhdm9ydGllIiwiTG9naW4iLCJvblN1Ym1pdCIsInVzZXJTdG9yZSIsImxvZ2luU3RvcmUiLCJwYXNzd29yZCIsImh0bWxFbGVtZW5ldHMiLCJnZXRVc2VyTmFtZSIsInNjb3BlIiwibG9naW5CdG4iLCJoaW50cyIsInZhbGlkYXRlIiwiZGlzYWJsZWQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFNlc3Npb24iLCJzZXRVc2VyTmFtZSIsImVycm9ycyIsIm1lc3NhZ2VzIiwibGV0dGVycyIsIm5vU29tZUxldHRlcnMiLCJkb3VibGUiLCJjb25zZWN1dGl2ZSIsInRlc3QiLCJwdXNoIiwibWVzYWdlIiwiTGlzdCIsIm5hbWUiLCJpdGVtcyIsIm5vSm9rZXNDb250YWluZXIiLCJuZXdJdGVtcyIsImh0bWwiLCJmb3JFYWNoIiwic3R5bGUiLCJkaXNwbGF5IiwiZWxUb1JlbW92ZSIsImpva2VVcmwiLCJsb2FkSm9rZXMiLCJ1cmwiLCJsaW1pdCIsImZldGNoIiwiciIsIm9rIiwiRXJyb3IiLCJqc29uIiwiU3RvcmUiLCJwZXJtYW5lbnQiLCJjYWxsQmFjayIsInN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldFN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIiwic2V0U3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwieCIsImZpbmQiLCJyZW1vdmVkSXRlbSIsImZpbHRlciIsIm1heExlbmd0aCIsInJlbWFpbkl0ZW1zIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsY0FBYztBQUNkLGNBQWM7QUFDZCxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0EsMkdBQTJHO0FBQzNHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQSw0RUFBNEUsYUFBYTtBQUN6RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQSw0QkFBNEIscUJBQXFCO0FBQ2pELDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0RUFBNEUsZUFBZTtBQUMzRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCLGdCQUFnQjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxpQ0FBaUM7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QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHlDQUF5QztBQUN6Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQSw0RUFBNEU7QUFDNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3Qzs7QUFFeEMsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7O0FBR0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUIsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGtCQUFrQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFF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O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQSxZQUFZOztBQUVaO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFlBQVk7QUFDN0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0RBQWtEOztBQUVsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FB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OztBQUlELDZIOzs7Ozs7QUNsRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRCxvQkFBb0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZUFBZTtBQUNqRCwrQkFBK0IsZUFBZTtBQUM5Qyx3Q0FBd0MsZUFBZTtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSx5QkFBeUIsVUFBVTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA0M2VkMTFkYzJmNGYxZWY4NWJkIiwiLyohIEJyb3dzZXIgYnVuZGxlIG9mIG51bmp1Y2tzIDMuMS4wIChzbGltLCBvbmx5IHdvcmtzIHdpdGggcHJlY29tcGlsZWQgdGVtcGxhdGVzKSAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibnVuanVja3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibnVuanVja3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xudmFyIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBlc2NhcGVNYXAgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gICdcXCcnOiAnJiMzOTsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0Oydcbn07XG52YXIgZXNjYXBlUmVnZXggPSAvWyZcIic8Pl0vZztcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcChvYmosIGspIHtcbiAgcmV0dXJuIE9ialByb3RvLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKTtcbn1cblxuZXhwb3J0cy5oYXNPd25Qcm9wID0gaGFzT3duUHJvcDtcblxuZnVuY3Rpb24gbG9va3VwRXNjYXBlKGNoKSB7XG4gIHJldHVybiBlc2NhcGVNYXBbY2hdO1xufVxuXG5mdW5jdGlvbiBfcHJldHRpZnlFcnJvcihwYXRoLCB3aXRoSW50ZXJuYWxzLCBlcnIpIHtcbiAgaWYgKCFlcnIuVXBkYXRlKSB7XG4gICAgLy8gbm90IG9uZSBvZiBvdXJzLCBjYXN0IGl0XG4gICAgZXJyID0gbmV3IGV4cG9ydHMuVGVtcGxhdGVFcnJvcihlcnIpO1xuICB9XG5cbiAgZXJyLlVwZGF0ZShwYXRoKTsgLy8gVW5sZXNzIHRoZXkgbWFya2VkIHRoZSBkZXYgZmxhZywgc2hvdyB0aGVtIGEgdHJhY2UgZnJvbSBoZXJlXG5cbiAgaWYgKCF3aXRoSW50ZXJuYWxzKSB7XG4gICAgdmFyIG9sZCA9IGVycjtcbiAgICBlcnIgPSBuZXcgRXJyb3Iob2xkLm1lc3NhZ2UpO1xuICAgIGVyci5uYW1lID0gb2xkLm5hbWU7XG4gIH1cblxuICByZXR1cm4gZXJyO1xufVxuXG5leHBvcnRzLl9wcmV0dGlmeUVycm9yID0gX3ByZXR0aWZ5RXJyb3I7XG5cbmZ1bmN0aW9uIFRlbXBsYXRlRXJyb3IobWVzc2FnZSwgbGluZW5vLCBjb2xubykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBlcnI7XG4gIHZhciBjYXVzZTtcblxuICBpZiAobWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgY2F1c2UgPSBtZXNzYWdlO1xuICAgIG1lc3NhZ2UgPSBjYXVzZS5uYW1lICsgXCI6IFwiICsgY2F1c2UubWVzc2FnZTtcbiAgfVxuXG4gIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICBlcnIgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGVyciwgVGVtcGxhdGVFcnJvci5wcm90b3R5cGUpO1xuICB9IGVsc2Uge1xuICAgIGVyciA9IHRoaXM7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgJ21lc3NhZ2UnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IG1lc3NhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsICduYW1lJywge1xuICAgIHZhbHVlOiAnVGVtcGxhdGUgcmVuZGVyIGVycm9yJ1xuICB9KTtcblxuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9XG5cbiAgdmFyIGdldFN0YWNrO1xuXG4gIGlmIChjYXVzZSkge1xuICAgIHZhciBzdGFja0Rlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNhdXNlLCAnc3RhY2snKTtcblxuICAgIGdldFN0YWNrID0gc3RhY2tEZXNjcmlwdG9yICYmIChzdGFja0Rlc2NyaXB0b3IuZ2V0IHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzdGFja0Rlc2NyaXB0b3IudmFsdWU7XG4gICAgfSk7XG5cbiAgICBpZiAoIWdldFN0YWNrKSB7XG4gICAgICBnZXRTdGFjayA9IGZ1bmN0aW9uIGdldFN0YWNrKCkge1xuICAgICAgICByZXR1cm4gY2F1c2Uuc3RhY2s7XG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgc3RhY2sgPSBuZXcgRXJyb3IobWVzc2FnZSkuc3RhY2s7XG5cbiAgICBnZXRTdGFjayA9IGZ1bmN0aW9uIGdldFN0YWNrKCkge1xuICAgICAgcmV0dXJuIHN0YWNrO1xuICAgIH07XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCAnc3RhY2snLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZ2V0U3RhY2suY2FsbChfdGhpcyk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgJ2NhdXNlJywge1xuICAgIHZhbHVlOiBjYXVzZVxuICB9KTtcbiAgZXJyLmxpbmVubyA9IGxpbmVubztcbiAgZXJyLmNvbG5vID0gY29sbm87XG4gIGVyci5maXJzdFVwZGF0ZSA9IHRydWU7XG5cbiAgZXJyLlVwZGF0ZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgdmFyIG1zZyA9ICcoJyArIChwYXRoIHx8ICd1bmtub3duIHBhdGgnKSArICcpJzsgLy8gb25seSBzaG93IGxpbmVubyArIGNvbG5vIG5leHQgdG8gcGF0aCBvZiB0ZW1wbGF0ZVxuICAgIC8vIHdoZXJlIGVycm9yIG9jY3VycmVkXG5cbiAgICBpZiAoX3RoaXMuZmlyc3RVcGRhdGUpIHtcbiAgICAgIGlmIChfdGhpcy5saW5lbm8gJiYgX3RoaXMuY29sbm8pIHtcbiAgICAgICAgbXNnICs9IFwiIFtMaW5lIFwiICsgX3RoaXMubGluZW5vICsgXCIsIENvbHVtbiBcIiArIF90aGlzLmNvbG5vICsgXCJdXCI7XG4gICAgICB9IGVsc2UgaWYgKF90aGlzLmxpbmVubykge1xuICAgICAgICBtc2cgKz0gXCIgW0xpbmUgXCIgKyBfdGhpcy5saW5lbm8gKyBcIl1cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtc2cgKz0gJ1xcbiAnO1xuXG4gICAgaWYgKF90aGlzLmZpcnN0VXBkYXRlKSB7XG4gICAgICBtc2cgKz0gJyAnO1xuICAgIH1cblxuICAgIF90aGlzLm1lc3NhZ2UgPSBtc2cgKyAoX3RoaXMubWVzc2FnZSB8fCAnJyk7XG4gICAgX3RoaXMuZmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH07XG5cbiAgcmV0dXJuIGVycjtcbn1cblxuaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoVGVtcGxhdGVFcnJvci5wcm90b3R5cGUsIEVycm9yLnByb3RvdHlwZSk7XG59IGVsc2Uge1xuICBUZW1wbGF0ZUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBUZW1wbGF0ZUVycm9yXG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0cy5UZW1wbGF0ZUVycm9yID0gVGVtcGxhdGVFcnJvcjtcblxuZnVuY3Rpb24gZXNjYXBlKHZhbCkge1xuICByZXR1cm4gdmFsLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGxvb2t1cEVzY2FwZSk7XG59XG5cbmV4cG9ydHMuZXNjYXBlID0gZXNjYXBlO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gT2JqUHJvdG8udG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICByZXR1cm4gT2JqUHJvdG8udG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgcmV0dXJuIE9ialByb3RvLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG5cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBPYmpQcm90by50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGdyb3VwQnkob2JqLCB2YWwpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICB2YXIgaXRlcmF0b3IgPSBpc0Z1bmN0aW9uKHZhbCkgPyB2YWwgOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvW3ZhbF07XG4gIH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsdWUgPSBvYmpbaV07XG4gICAgdmFyIGtleSA9IGl0ZXJhdG9yKHZhbHVlLCBpKTtcbiAgICAocmVzdWx0W2tleV0gfHwgKHJlc3VsdFtrZXldID0gW10pKS5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydHMuZ3JvdXBCeSA9IGdyb3VwQnk7XG5cbmZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChvYmopO1xufVxuXG5leHBvcnRzLnRvQXJyYXkgPSB0b0FycmF5O1xuXG5mdW5jdGlvbiB3aXRob3V0KGFycmF5KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBpZiAoIWFycmF5KSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHZhciBjb250YWlucyA9IHRvQXJyYXkoYXJndW1lbnRzKS5zbGljZSgxKTtcbiAgdmFyIGluZGV4ID0gLTE7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaW5kZXhPZihjb250YWlucywgYXJyYXlbaW5kZXhdKSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFycmF5W2luZGV4XSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0cy53aXRob3V0ID0gd2l0aG91dDtcblxuZnVuY3Rpb24gcmVwZWF0KGNoYXJfLCBuKSB7XG4gIHZhciBzdHIgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIHN0ciArPSBjaGFyXztcbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydHMucmVwZWF0ID0gcmVwZWF0O1xuXG5mdW5jdGlvbiBlYWNoKG9iaiwgZnVuYywgY29udGV4dCkge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXlQcm90by5mb3JFYWNoICYmIG9iai5mb3JFYWNoID09PSBBcnJheVByb3RvLmZvckVhY2gpIHtcbiAgICBvYmouZm9yRWFjaChmdW5jLCBjb250ZXh0KTtcbiAgfSBlbHNlIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZnVuYy5jYWxsKGNvbnRleHQsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5lYWNoID0gZWFjaDtcblxuZnVuY3Rpb24gbWFwKG9iaiwgZnVuYykge1xuICB2YXIgcmVzdWx0cyA9IFtdO1xuXG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgaWYgKEFycmF5UHJvdG8ubWFwICYmIG9iai5tYXAgPT09IEFycmF5UHJvdG8ubWFwKSB7XG4gICAgcmV0dXJuIG9iai5tYXAoZnVuYyk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdHNbcmVzdWx0cy5sZW5ndGhdID0gZnVuYyhvYmpbaV0sIGkpO1xuICB9XG5cbiAgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSB7XG4gICAgcmVzdWx0cy5sZW5ndGggPSBvYmoubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmV4cG9ydHMubWFwID0gbWFwO1xuXG5mdW5jdGlvbiBhc3luY0l0ZXIoYXJyLCBpdGVyLCBjYikge1xuICB2YXIgaSA9IC0xO1xuXG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaSsrO1xuXG4gICAgaWYgKGkgPCBhcnIubGVuZ3RoKSB7XG4gICAgICBpdGVyKGFycltpXSwgaSwgbmV4dCwgY2IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTtcbn1cblxuZXhwb3J0cy5hc3luY0l0ZXIgPSBhc3luY0l0ZXI7XG5cbmZ1bmN0aW9uIGFzeW5jRm9yKG9iaiwgaXRlciwgY2IpIHtcbiAgdmFyIGtleXMgPSBrZXlzXyhvYmogfHwge30pO1xuICB2YXIgbGVuID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gLTE7XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpKys7XG4gICAgdmFyIGsgPSBrZXlzW2ldO1xuXG4gICAgaWYgKGkgPCBsZW4pIHtcbiAgICAgIGl0ZXIoaywgb2JqW2tdLCBpLCBsZW4sIG5leHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTtcbn1cblxuZXhwb3J0cy5hc3luY0ZvciA9IGFzeW5jRm9yO1xuXG5mdW5jdGlvbiBpbmRleE9mKGFyciwgc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGFyciB8fCBbXSwgc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KTtcbn1cblxuZXhwb3J0cy5pbmRleE9mID0gaW5kZXhPZjtcblxuZnVuY3Rpb24ga2V5c18ob2JqKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4gIHZhciBhcnIgPSBbXTtcblxuICBmb3IgKHZhciBrIGluIG9iaikge1xuICAgIGlmIChoYXNPd25Qcm9wKG9iaiwgaykpIHtcbiAgICAgIGFyci5wdXNoKGspO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydHMua2V5cyA9IGtleXNfO1xuXG5mdW5jdGlvbiBfZW50cmllcyhvYmopIHtcbiAgcmV0dXJuIGtleXNfKG9iaikubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIFtrLCBvYmpba11dO1xuICB9KTtcbn1cblxuZXhwb3J0cy5fZW50cmllcyA9IF9lbnRyaWVzO1xuXG5mdW5jdGlvbiBfdmFsdWVzKG9iaikge1xuICByZXR1cm4ga2V5c18ob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gb2JqW2tdO1xuICB9KTtcbn1cblxuZXhwb3J0cy5fdmFsdWVzID0gX3ZhbHVlcztcblxuZnVuY3Rpb24gZXh0ZW5kKG9iajEsIG9iajIpIHtcbiAgb2JqMSA9IG9iajEgfHwge307XG4gIGtleXNfKG9iajIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICBvYmoxW2tdID0gb2JqMltrXTtcbiAgfSk7XG4gIHJldHVybiBvYmoxO1xufVxuXG5leHBvcnRzLl9hc3NpZ24gPSBleHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcblxuZnVuY3Rpb24gaW5PcGVyYXRvcihrZXksIHZhbCkge1xuICBpZiAoaXNBcnJheSh2YWwpIHx8IGlzU3RyaW5nKHZhbCkpIHtcbiAgICByZXR1cm4gdmFsLmluZGV4T2Yoa2V5KSAhPT0gLTE7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIHJldHVybiBrZXkgaW4gdmFsO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgdXNlIFwiaW5cIiBvcGVyYXRvciB0byBzZWFyY2ggZm9yIFwiJyArIGtleSArICdcIiBpbiB1bmV4cGVjdGVkIHR5cGVzLicpO1xufVxuXG5leHBvcnRzLmluT3BlcmF0b3IgPSBpbk9wZXJhdG9yO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGxpYiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBhcnJheUZyb20gPSBBcnJheS5mcm9tO1xudmFyIHN1cHBvcnRzSXRlcmF0b3JzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3IgJiYgdHlwZW9mIGFycmF5RnJvbSA9PT0gJ2Z1bmN0aW9uJzsgLy8gRnJhbWVzIGtlZXAgdHJhY2sgb2Ygc2NvcGluZyBib3RoIGF0IGNvbXBpbGUtdGltZSBhbmQgcnVuLXRpbWUgc29cbi8vIHdlIGtub3cgaG93IHRvIGFjY2VzcyB2YXJpYWJsZXMuIEJsb2NrIHRhZ3MgY2FuIGludHJvZHVjZSBzcGVjaWFsXG4vLyB2YXJpYWJsZXMsIGZvciBleGFtcGxlLlxuXG52YXIgRnJhbWUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGcmFtZShwYXJlbnQsIGlzb2xhdGVXcml0ZXMpIHtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHt9O1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMudG9wTGV2ZWwgPSBmYWxzZTsgLy8gaWYgdGhpcyBpcyB0cnVlLCB3cml0ZXMgKHNldCkgc2hvdWxkIG5ldmVyIHByb3BhZ2F0ZSB1cHdhcmRzIHBhc3RcbiAgICAvLyB0aGlzIGZyYW1lIHRvIGl0cyBwYXJlbnQgKHRob3VnaCByZWFkcyBtYXkpLlxuXG4gICAgdGhpcy5pc29sYXRlV3JpdGVzID0gaXNvbGF0ZVdyaXRlcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBGcmFtZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNldCA9IGZ1bmN0aW9uIHNldChuYW1lLCB2YWwsIHJlc29sdmVVcCkge1xuICAgIC8vIEFsbG93IHZhcmlhYmxlcyB3aXRoIGRvdHMgYnkgYXV0b21hdGljYWxseSBjcmVhdGluZyB0aGVcbiAgICAvLyBuZXN0ZWQgc3RydWN0dXJlXG4gICAgdmFyIHBhcnRzID0gbmFtZS5zcGxpdCgnLicpO1xuICAgIHZhciBvYmogPSB0aGlzLnZhcmlhYmxlcztcbiAgICB2YXIgZnJhbWUgPSB0aGlzO1xuXG4gICAgaWYgKHJlc29sdmVVcCkge1xuICAgICAgaWYgKGZyYW1lID0gdGhpcy5yZXNvbHZlKHBhcnRzWzBdLCB0cnVlKSkge1xuICAgICAgICBmcmFtZS5zZXQobmFtZSwgdmFsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSBwYXJ0c1tpXTtcblxuICAgICAgaWYgKCFvYmpbaWRdKSB7XG4gICAgICAgIG9ialtpZF0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgb2JqID0gb2JqW2lkXTtcbiAgICB9XG5cbiAgICBvYmpbcGFydHNbcGFydHMubGVuZ3RoIC0gMV1dID0gdmFsO1xuICB9O1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQobmFtZSkge1xuICAgIHZhciB2YWwgPSB0aGlzLnZhcmlhYmxlc1tuYW1lXTtcblxuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBfcHJvdG8ubG9va3VwID0gZnVuY3Rpb24gbG9va3VwKG5hbWUpIHtcbiAgICB2YXIgcCA9IHRoaXMucGFyZW50O1xuICAgIHZhciB2YWwgPSB0aGlzLnZhcmlhYmxlc1tuYW1lXTtcblxuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcCAmJiBwLmxvb2t1cChuYW1lKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUobmFtZSwgZm9yV3JpdGUpIHtcbiAgICB2YXIgcCA9IGZvcldyaXRlICYmIHRoaXMuaXNvbGF0ZVdyaXRlcyA/IHVuZGVmaW5lZCA6IHRoaXMucGFyZW50O1xuICAgIHZhciB2YWwgPSB0aGlzLnZhcmlhYmxlc1tuYW1lXTtcblxuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHAgJiYgcC5yZXNvbHZlKG5hbWUpO1xuICB9O1xuXG4gIF9wcm90by5wdXNoID0gZnVuY3Rpb24gcHVzaChpc29sYXRlV3JpdGVzKSB7XG4gICAgcmV0dXJuIG5ldyBGcmFtZSh0aGlzLCBpc29sYXRlV3JpdGVzKTtcbiAgfTtcblxuICBfcHJvdG8ucG9wID0gZnVuY3Rpb24gcG9wKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfTtcblxuICByZXR1cm4gRnJhbWU7XG59KCk7XG5cbmZ1bmN0aW9uIG1ha2VNYWNybyhhcmdOYW1lcywga3dhcmdOYW1lcywgZnVuYykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1hY3JvQXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIG1hY3JvQXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnQ291bnQgPSBudW1BcmdzKG1hY3JvQXJncyk7XG4gICAgdmFyIGFyZ3M7XG4gICAgdmFyIGt3YXJncyA9IGdldEtleXdvcmRBcmdzKG1hY3JvQXJncyk7XG5cbiAgICBpZiAoYXJnQ291bnQgPiBhcmdOYW1lcy5sZW5ndGgpIHtcbiAgICAgIGFyZ3MgPSBtYWNyb0FyZ3Muc2xpY2UoMCwgYXJnTmFtZXMubGVuZ3RoKTsgLy8gUG9zaXRpb25hbCBhcmd1bWVudHMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIGluIGFzXG4gICAgICAvLyBrZXl3b3JkIGFyZ3VtZW50cyAoZXNzZW50aWFsbHkgZGVmYXVsdCB2YWx1ZXMpXG5cbiAgICAgIG1hY3JvQXJncy5zbGljZShhcmdzLmxlbmd0aCwgYXJnQ291bnQpLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaSkge1xuICAgICAgICBpZiAoaSA8IGt3YXJnTmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAga3dhcmdzW2t3YXJnTmFtZXNbaV1dID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGFyZ3MucHVzaChrd2FyZ3MpO1xuICAgIH0gZWxzZSBpZiAoYXJnQ291bnQgPCBhcmdOYW1lcy5sZW5ndGgpIHtcbiAgICAgIGFyZ3MgPSBtYWNyb0FyZ3Muc2xpY2UoMCwgYXJnQ291bnQpO1xuXG4gICAgICBmb3IgKHZhciBpID0gYXJnQ291bnQ7IGkgPCBhcmdOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYXJnID0gYXJnTmFtZXNbaV07IC8vIEtleXdvcmQgYXJndW1lbnRzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCBhc1xuICAgICAgICAvLyBwb3NpdGlvbmFsIGFyZ3VtZW50cywgaS5lLiB0aGUgY2FsbGVyIGV4cGxpY2l0bHlcbiAgICAgICAgLy8gdXNlZCB0aGUgbmFtZSBvZiBhIHBvc2l0aW9uYWwgYXJnXG5cbiAgICAgICAgYXJncy5wdXNoKGt3YXJnc1thcmddKTtcbiAgICAgICAgZGVsZXRlIGt3YXJnc1thcmddO1xuICAgICAgfVxuXG4gICAgICBhcmdzLnB1c2goa3dhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJncyA9IG1hY3JvQXJncztcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuYy5hcHBseShfdGhpcywgYXJncyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VLZXl3b3JkQXJncyhvYmopIHtcbiAgb2JqLl9fa2V5d29yZHMgPSB0cnVlO1xuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBpc0tleXdvcmRBcmdzKG9iaikge1xuICByZXR1cm4gb2JqICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosICdfX2tleXdvcmRzJyk7XG59XG5cbmZ1bmN0aW9uIGdldEtleXdvcmRBcmdzKGFyZ3MpIHtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuXG4gIGlmIChsZW4pIHtcbiAgICB2YXIgbGFzdEFyZyA9IGFyZ3NbbGVuIC0gMV07XG5cbiAgICBpZiAoaXNLZXl3b3JkQXJncyhsYXN0QXJnKSkge1xuICAgICAgcmV0dXJuIGxhc3RBcmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiBudW1BcmdzKGFyZ3MpIHtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuXG4gIGlmIChsZW4gPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHZhciBsYXN0QXJnID0gYXJnc1tsZW4gLSAxXTtcblxuICBpZiAoaXNLZXl3b3JkQXJncyhsYXN0QXJnKSkge1xuICAgIHJldHVybiBsZW4gLSAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsZW47XG4gIH1cbn0gLy8gQSBTYWZlU3RyaW5nIG9iamVjdCBpbmRpY2F0ZXMgdGhhdCB0aGUgc3RyaW5nIHNob3VsZCBub3QgYmVcbi8vIGF1dG9lc2NhcGVkLiBUaGlzIGhhcHBlbnMgbWFnaWNhbGx5IGJlY2F1c2UgYXV0b2VzY2FwaW5nIG9ubHlcbi8vIG9jY3VycyBvbiBwcmltaXRpdmUgc3RyaW5nIG9iamVjdHMuXG5cblxuZnVuY3Rpb24gU2FmZVN0cmluZyh2YWwpIHtcbiAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIHRoaXMudmFsID0gdmFsO1xuICB0aGlzLmxlbmd0aCA9IHZhbC5sZW5ndGg7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdHJpbmcucHJvdG90eXBlLCB7XG4gIGxlbmd0aDoge1xuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogMFxuICB9XG59KTtcblxuU2FmZVN0cmluZy5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gIHJldHVybiB0aGlzLnZhbDtcbn07XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0aGlzLnZhbDtcbn07XG5cbmZ1bmN0aW9uIGNvcHlTYWZlbmVzcyhkZXN0LCB0YXJnZXQpIHtcbiAgaWYgKGRlc3QgaW5zdGFuY2VvZiBTYWZlU3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBTYWZlU3RyaW5nKHRhcmdldCk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0LnRvU3RyaW5nKCk7XG59XG5cbmZ1bmN0aW9uIG1hcmtTYWZlKHZhbCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG5cbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBTYWZlU3RyaW5nKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBTYWZlKGFyZ3MpIHtcbiAgICAgIHZhciByZXQgPSB2YWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKHR5cGVvZiByZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2FmZVN0cmluZyhyZXQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc3VwcHJlc3NWYWx1ZSh2YWwsIGF1dG9lc2NhcGUpIHtcbiAgdmFsID0gdmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsID8gdmFsIDogJyc7XG5cbiAgaWYgKGF1dG9lc2NhcGUgJiYgISh2YWwgaW5zdGFuY2VvZiBTYWZlU3RyaW5nKSkge1xuICAgIHZhbCA9IGxpYi5lc2NhcGUodmFsLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gZW5zdXJlRGVmaW5lZCh2YWwsIGxpbmVubywgY29sbm8pIHtcbiAgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBsaWIuVGVtcGxhdGVFcnJvcignYXR0ZW1wdGVkIHRvIG91dHB1dCBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZScsIGxpbmVubyArIDEsIGNvbG5vICsgMSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBtZW1iZXJMb29rdXAob2JqLCB2YWwpIHtcbiAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9ialt2YWxdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmpbdmFsXS5hcHBseShvYmosIGFyZ3MpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gb2JqW3ZhbF07XG59XG5cbmZ1bmN0aW9uIGNhbGxXcmFwKG9iaiwgbmFtZSwgY29udGV4dCwgYXJncykge1xuICBpZiAoIW9iaikge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGNhbGwgYCcgKyBuYW1lICsgJ2AsIHdoaWNoIGlzIHVuZGVmaW5lZCBvciBmYWxzZXknKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gY2FsbCBgJyArIG5hbWUgKyAnYCwgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHJldHVybiBvYmouYXBwbHkoY29udGV4dCwgYXJncyk7XG59XG5cbmZ1bmN0aW9uIGNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBuYW1lKSB7XG4gIHZhciB2YWwgPSBmcmFtZS5sb29rdXAobmFtZSk7XG4gIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA6IGNvbnRleHQubG9va3VwKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvciwgbGluZW5vLCBjb2xubykge1xuICBpZiAoZXJyb3IubGluZW5vKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgbGliLlRlbXBsYXRlRXJyb3IoZXJyb3IsIGxpbmVubywgY29sbm8pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzeW5jRWFjaChhcnIsIGRpbWVuLCBpdGVyLCBjYikge1xuICBpZiAobGliLmlzQXJyYXkoYXJyKSkge1xuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIGxpYi5hc3luY0l0ZXIoYXJyLCBmdW5jdGlvbiBpdGVyQ2FsbGJhY2soaXRlbSwgaSwgbmV4dCkge1xuICAgICAgc3dpdGNoIChkaW1lbikge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaXRlcihpdGVtLCBpLCBsZW4sIG5leHQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpdGVyKGl0ZW1bMF0sIGl0ZW1bMV0sIGksIGxlbiwgbmV4dCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGl0ZXIoaXRlbVswXSwgaXRlbVsxXSwgaXRlbVsyXSwgaSwgbGVuLCBuZXh0KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGl0ZW0ucHVzaChpLCBsZW4sIG5leHQpO1xuICAgICAgICAgIGl0ZXIuYXBwbHkodGhpcywgaXRlbSk7XG4gICAgICB9XG4gICAgfSwgY2IpO1xuICB9IGVsc2Uge1xuICAgIGxpYi5hc3luY0ZvcihhcnIsIGZ1bmN0aW9uIGl0ZXJDYWxsYmFjayhrZXksIHZhbCwgaSwgbGVuLCBuZXh0KSB7XG4gICAgICBpdGVyKGtleSwgdmFsLCBpLCBsZW4sIG5leHQpO1xuICAgIH0sIGNiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3luY0FsbChhcnIsIGRpbWVuLCBmdW5jLCBjYikge1xuICB2YXIgZmluaXNoZWQgPSAwO1xuICB2YXIgbGVuO1xuICB2YXIgb3V0cHV0QXJyO1xuXG4gIGZ1bmN0aW9uIGRvbmUoaSwgb3V0cHV0KSB7XG4gICAgZmluaXNoZWQrKztcbiAgICBvdXRwdXRBcnJbaV0gPSBvdXRwdXQ7XG5cbiAgICBpZiAoZmluaXNoZWQgPT09IGxlbikge1xuICAgICAgY2IobnVsbCwgb3V0cHV0QXJyLmpvaW4oJycpKTtcbiAgICB9XG4gIH1cblxuICBpZiAobGliLmlzQXJyYXkoYXJyKSkge1xuICAgIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgb3V0cHV0QXJyID0gbmV3IEFycmF5KGxlbik7XG5cbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICBjYihudWxsLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gYXJyW2ldO1xuXG4gICAgICAgIHN3aXRjaCAoZGltZW4pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBmdW5jKGl0ZW0sIGksIGxlbiwgZG9uZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGZ1bmMoaXRlbVswXSwgaXRlbVsxXSwgaSwgbGVuLCBkb25lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgZnVuYyhpdGVtWzBdLCBpdGVtWzFdLCBpdGVtWzJdLCBpLCBsZW4sIGRvbmUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaXRlbS5wdXNoKGksIGxlbiwgZG9uZSk7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBrZXlzID0gbGliLmtleXMoYXJyIHx8IHt9KTtcbiAgICBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICBvdXRwdXRBcnIgPSBuZXcgQXJyYXkobGVuKTtcblxuICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgIGNiKG51bGwsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGtleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBrID0ga2V5c1tfaV07XG4gICAgICAgIGZ1bmMoaywgYXJyW2tdLCBfaSwgbGVuLCBkb25lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbUl0ZXJhdG9yKGFycikge1xuICBpZiAodHlwZW9mIGFyciAhPT0gJ29iamVjdCcgfHwgYXJyID09PSBudWxsIHx8IGxpYi5pc0FycmF5KGFycikpIHtcbiAgICByZXR1cm4gYXJyO1xuICB9IGVsc2UgaWYgKHN1cHBvcnRzSXRlcmF0b3JzICYmIFN5bWJvbC5pdGVyYXRvciBpbiBhcnIpIHtcbiAgICByZXR1cm4gYXJyYXlGcm9tKGFycik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRnJhbWU6IEZyYW1lLFxuICBtYWtlTWFjcm86IG1ha2VNYWNybyxcbiAgbWFrZUtleXdvcmRBcmdzOiBtYWtlS2V5d29yZEFyZ3MsXG4gIG51bUFyZ3M6IG51bUFyZ3MsXG4gIHN1cHByZXNzVmFsdWU6IHN1cHByZXNzVmFsdWUsXG4gIGVuc3VyZURlZmluZWQ6IGVuc3VyZURlZmluZWQsXG4gIG1lbWJlckxvb2t1cDogbWVtYmVyTG9va3VwLFxuICBjb250ZXh0T3JGcmFtZUxvb2t1cDogY29udGV4dE9yRnJhbWVMb29rdXAsXG4gIGNhbGxXcmFwOiBjYWxsV3JhcCxcbiAgaGFuZGxlRXJyb3I6IGhhbmRsZUVycm9yLFxuICBpc0FycmF5OiBsaWIuaXNBcnJheSxcbiAga2V5czogbGliLmtleXMsXG4gIFNhZmVTdHJpbmc6IFNhZmVTdHJpbmcsXG4gIGNvcHlTYWZlbmVzczogY29weVNhZmVuZXNzLFxuICBtYXJrU2FmZTogbWFya1NhZmUsXG4gIGFzeW5jRWFjaDogYXN5bmNFYWNoLFxuICBhc3luY0FsbDogYXN5bmNBbGwsXG4gIGluT3BlcmF0b3I6IGxpYi5pbk9wZXJhdG9yLFxuICBmcm9tSXRlcmF0b3I6IGZyb21JdGVyYXRvclxufTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTG9hZGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIFByZWNvbXBpbGVkTG9hZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTG9hZGVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKFByZWNvbXBpbGVkTG9hZGVyLCBfTG9hZGVyKTtcblxuICBmdW5jdGlvbiBQcmVjb21waWxlZExvYWRlcihjb21waWxlZFRlbXBsYXRlcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0xvYWRlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMucHJlY29tcGlsZWQgPSBjb21waWxlZFRlbXBsYXRlcyB8fCB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUHJlY29tcGlsZWRMb2FkZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRTb3VyY2UgPSBmdW5jdGlvbiBnZXRTb3VyY2UobmFtZSkge1xuICAgIGlmICh0aGlzLnByZWNvbXBpbGVkW25hbWVdKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcmM6IHtcbiAgICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgICAgb2JqOiB0aGlzLnByZWNvbXBpbGVkW25hbWVdXG4gICAgICAgIH0sXG4gICAgICAgIHBhdGg6IG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFByZWNvbXBpbGVkTG9hZGVyO1xufShMb2FkZXIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUHJlY29tcGlsZWRMb2FkZXI6IFByZWNvbXBpbGVkTG9hZGVyXG59O1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBwYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIE9iaiA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbm1vZHVsZS5leHBvcnRzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfT2JqKSB7XG4gIF9pbmhlcml0c0xvb3NlKExvYWRlciwgX09iaik7XG5cbiAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgIHJldHVybiBfT2JqLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMb2FkZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbiA9IGZ1bmN0aW9uIG9uKG5hbWUsIGZ1bmMpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzW25hbWVdID0gdGhpcy5saXN0ZW5lcnNbbmFtZV0gfHwgW107XG4gICAgdGhpcy5saXN0ZW5lcnNbbmFtZV0ucHVzaChmdW5jKTtcbiAgfTtcblxuICBfcHJvdG8uZW1pdCA9IGZ1bmN0aW9uIGVtaXQobmFtZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxpc3RlbmVycyAmJiB0aGlzLmxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbbmFtZV0uZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUoZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHBhdGguZGlybmFtZShmcm9tKSwgdG8pO1xuICB9O1xuXG4gIF9wcm90by5pc1JlbGF0aXZlID0gZnVuY3Rpb24gaXNSZWxhdGl2ZShmaWxlbmFtZSkge1xuICAgIHJldHVybiBmaWxlbmFtZS5pbmRleE9mKCcuLycpID09PSAwIHx8IGZpbGVuYW1lLmluZGV4T2YoJy4uLycpID09PSAwO1xuICB9O1xuXG4gIHJldHVybiBMb2FkZXI7XG59KE9iaik7XG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbiAvLyBBIHNpbXBsZSBjbGFzcyBzeXN0ZW0sIG1vcmUgZG9jdW1lbnRhdGlvbiB0byBjb21lXG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBsaWIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5mdW5jdGlvbiBwYXJlbnRXcmFwKHBhcmVudCwgcHJvcCkge1xuICBpZiAodHlwZW9mIHBhcmVudCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgcHJvcCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBwcm9wO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgLy8gU2F2ZSB0aGUgY3VycmVudCBwYXJlbnQgbWV0aG9kXG4gICAgdmFyIHRtcCA9IHRoaXMucGFyZW50OyAvLyBTZXQgcGFyZW50IHRvIHRoZSBwcmV2aW91cyBtZXRob2QsIGNhbGwsIGFuZCByZXN0b3JlXG5cbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB2YXIgcmVzID0gcHJvcC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMucGFyZW50ID0gdG1wO1xuICAgIHJldHVybiByZXM7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4dGVuZENsYXNzKGNscywgbmFtZSwgcHJvcHMpIHtcbiAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgbGliLmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICBwcm9wc1trXSA9IHBhcmVudFdyYXAoY2xzLnByb3RvdHlwZVtrXSwgcHJvcHNba10pO1xuICB9KTtcblxuICB2YXIgc3ViY2xhc3MgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfY2xzKSB7XG4gICAgX2luaGVyaXRzTG9vc2Uoc3ViY2xhc3MsIF9jbHMpO1xuXG4gICAgZnVuY3Rpb24gc3ViY2xhc3MoKSB7XG4gICAgICByZXR1cm4gX2Nscy5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKHN1YmNsYXNzLCBbe1xuICAgICAga2V5OiBcInR5cGVuYW1lXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIHN1YmNsYXNzO1xuICB9KGNscyk7XG5cbiAgbGliLl9hc3NpZ24oc3ViY2xhc3MucHJvdG90eXBlLCBwcm9wcyk7XG5cbiAgcmV0dXJuIHN1YmNsYXNzO1xufVxuXG52YXIgT2JqID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gT2JqKCkge1xuICAgIC8vIFVuZm9ydHVuYXRlbHkgbmVjZXNzYXJ5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgIHRoaXMuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE9iai5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge307XG5cbiAgT2JqLmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZChuYW1lLCBwcm9wcykge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHByb3BzID0gbmFtZTtcbiAgICAgIG5hbWUgPSAnYW5vbnltb3VzJztcbiAgICB9XG5cbiAgICByZXR1cm4gZXh0ZW5kQ2xhc3ModGhpcywgbmFtZSwgcHJvcHMpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhPYmosIFt7XG4gICAga2V5OiBcInR5cGVuYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPYmo7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqO1xuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGxpYiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oNyksXG4gICAgRW52aXJvbm1lbnQgPSBfcmVxdWlyZS5FbnZpcm9ubWVudCxcbiAgICBUZW1wbGF0ZSA9IF9yZXF1aXJlLlRlbXBsYXRlO1xuXG52YXIgTG9hZGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIGxvYWRlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgcHJlY29tcGlsZSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBjb21waWxlciA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBwYXJzZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgbGV4ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgcnVudGltZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBub2RlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBpbnN0YWxsSmluamFDb21wYXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTsgLy8gQSBzaW5nbGUgaW5zdGFuY2Ugb2YgYW4gZW52aXJvbm1lbnQsIHNpbmNlIHRoaXMgaXMgc28gY29tbW9ubHkgdXNlZFxuXG5cbnZhciBlO1xuXG5mdW5jdGlvbiBjb25maWd1cmUodGVtcGxhdGVzUGF0aCwgb3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICBpZiAobGliLmlzT2JqZWN0KHRlbXBsYXRlc1BhdGgpKSB7XG4gICAgb3B0cyA9IHRlbXBsYXRlc1BhdGg7XG4gICAgdGVtcGxhdGVzUGF0aCA9IG51bGw7XG4gIH1cblxuICB2YXIgVGVtcGxhdGVMb2FkZXI7XG5cbiAgaWYgKGxvYWRlcnMuRmlsZVN5c3RlbUxvYWRlcikge1xuICAgIFRlbXBsYXRlTG9hZGVyID0gbmV3IGxvYWRlcnMuRmlsZVN5c3RlbUxvYWRlcih0ZW1wbGF0ZXNQYXRoLCB7XG4gICAgICB3YXRjaDogb3B0cy53YXRjaCxcbiAgICAgIG5vQ2FjaGU6IG9wdHMubm9DYWNoZVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGxvYWRlcnMuV2ViTG9hZGVyKSB7XG4gICAgVGVtcGxhdGVMb2FkZXIgPSBuZXcgbG9hZGVycy5XZWJMb2FkZXIodGVtcGxhdGVzUGF0aCwge1xuICAgICAgdXNlQ2FjaGU6IG9wdHMud2ViICYmIG9wdHMud2ViLnVzZUNhY2hlLFxuICAgICAgYXN5bmM6IG9wdHMud2ViICYmIG9wdHMud2ViLmFzeW5jXG4gICAgfSk7XG4gIH1cblxuICBlID0gbmV3IEVudmlyb25tZW50KFRlbXBsYXRlTG9hZGVyLCBvcHRzKTtcblxuICBpZiAob3B0cyAmJiBvcHRzLmV4cHJlc3MpIHtcbiAgICBlLmV4cHJlc3Mob3B0cy5leHByZXNzKTtcbiAgfVxuXG4gIHJldHVybiBlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuICBUZW1wbGF0ZTogVGVtcGxhdGUsXG4gIExvYWRlcjogTG9hZGVyLFxuICBGaWxlU3lzdGVtTG9hZGVyOiBsb2FkZXJzLkZpbGVTeXN0ZW1Mb2FkZXIsXG4gIFByZWNvbXBpbGVkTG9hZGVyOiBsb2FkZXJzLlByZWNvbXBpbGVkTG9hZGVyLFxuICBXZWJMb2FkZXI6IGxvYWRlcnMuV2ViTG9hZGVyLFxuICBjb21waWxlcjogY29tcGlsZXIsXG4gIHBhcnNlcjogcGFyc2VyLFxuICBsZXhlcjogbGV4ZXIsXG4gIHJ1bnRpbWU6IHJ1bnRpbWUsXG4gIGxpYjogbGliLFxuICBub2Rlczogbm9kZXMsXG4gIGluc3RhbGxKaW5qYUNvbXBhdDogaW5zdGFsbEppbmphQ29tcGF0LFxuICBjb25maWd1cmU6IGNvbmZpZ3VyZSxcbiAgY29tcGlsZTogZnVuY3Rpb24gY29tcGlsZShzcmMsIGVudiwgcGF0aCwgZWFnZXJDb21waWxlKSB7XG4gICAgaWYgKCFlKSB7XG4gICAgICBjb25maWd1cmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFRlbXBsYXRlKHNyYywgZW52LCBwYXRoLCBlYWdlckNvbXBpbGUpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihuYW1lLCBjdHgsIGNiKSB7XG4gICAgaWYgKCFlKSB7XG4gICAgICBjb25maWd1cmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZS5yZW5kZXIobmFtZSwgY3R4LCBjYik7XG4gIH0sXG4gIHJlbmRlclN0cmluZzogZnVuY3Rpb24gcmVuZGVyU3RyaW5nKHNyYywgY3R4LCBjYikge1xuICAgIGlmICghZSkge1xuICAgICAgY29uZmlndXJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGUucmVuZGVyU3RyaW5nKHNyYywgY3R4LCBjYik7XG4gIH0sXG4gIHByZWNvbXBpbGU6IHByZWNvbXBpbGUgPyBwcmVjb21waWxlLnByZWNvbXBpbGUgOiB1bmRlZmluZWQsXG4gIHByZWNvbXBpbGVTdHJpbmc6IHByZWNvbXBpbGUgPyBwcmVjb21waWxlLnByZWNvbXBpbGVTdHJpbmcgOiB1bmRlZmluZWRcbn07XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGFzYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG52YXIgX3dhdGVyZmFsbCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG52YXIgbGliID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIGNvbXBpbGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIGZpbHRlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblxudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKSxcbiAgICBGaWxlU3lzdGVtTG9hZGVyID0gX3JlcXVpcmUuRmlsZVN5c3RlbUxvYWRlcixcbiAgICBXZWJMb2FkZXIgPSBfcmVxdWlyZS5XZWJMb2FkZXIsXG4gICAgUHJlY29tcGlsZWRMb2FkZXIgPSBfcmVxdWlyZS5QcmVjb21waWxlZExvYWRlcjtcblxudmFyIHRlc3RzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cbnZhciBnbG9iYWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cbnZhciBPYmogPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgZ2xvYmFsUnVudGltZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBoYW5kbGVFcnJvciA9IGdsb2JhbFJ1bnRpbWUuaGFuZGxlRXJyb3IsXG4gICAgRnJhbWUgPSBnbG9iYWxSdW50aW1lLkZyYW1lO1xuXG52YXIgZXhwcmVzc0FwcCA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpOyAvLyBJZiB0aGUgdXNlciBpcyB1c2luZyB0aGUgYXN5bmMgQVBJLCAqYWx3YXlzKiBjYWxsIGl0XG4vLyBhc3luY2hyb25vdXNseSBldmVuIGlmIHRoZSB0ZW1wbGF0ZSB3YXMgc3luY2hyb25vdXMuXG5cblxuZnVuY3Rpb24gY2FsbGJhY2tBc2FwKGNiLCBlcnIsIHJlcykge1xuICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICBjYihlcnIsIHJlcyk7XG4gIH0pO1xufVxuLyoqXG4gKiBBIG5vLW9wIHRlbXBsYXRlLCBmb3IgdXNlIHdpdGggeyUgaW5jbHVkZSBpZ25vcmUgbWlzc2luZyAlfVxuICovXG5cblxudmFyIG5vb3BUbXBsU3JjID0ge1xuICB0eXBlOiAnY29kZScsXG4gIG9iajoge1xuICAgIHJvb3Q6IGZ1bmN0aW9uIHJvb3QoZW52LCBjb250ZXh0LCBmcmFtZSwgcnVudGltZSwgY2IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiKG51bGwsICcnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2IoaGFuZGxlRXJyb3IoZSwgbnVsbCwgbnVsbCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIEVudmlyb25tZW50ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfT2JqKSB7XG4gIF9pbmhlcml0c0xvb3NlKEVudmlyb25tZW50LCBfT2JqKTtcblxuICBmdW5jdGlvbiBFbnZpcm9ubWVudCgpIHtcbiAgICByZXR1cm4gX09iai5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRW52aXJvbm1lbnQucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdChsb2FkZXJzLCBvcHRzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIFRoZSBkZXYgZmxhZyBkZXRlcm1pbmVzIHRoZSB0cmFjZSB0aGF0J2xsIGJlIHNob3duIG9uIGVycm9ycy5cbiAgICAvLyBJZiBzZXQgdG8gdHJ1ZSwgcmV0dXJucyB0aGUgZnVsbCB0cmFjZSBmcm9tIHRoZSBlcnJvciBwb2ludCxcbiAgICAvLyBvdGhlcndpc2Ugd2lsbCByZXR1cm4gdHJhY2Ugc3RhcnRpbmcgZnJvbSBUZW1wbGF0ZS5yZW5kZXJcbiAgICAvLyAodGhlIGZ1bGwgdHJhY2UgZnJvbSB3aXRoaW4gbnVuanVja3MgbWF5IGNvbmZ1c2UgZGV2ZWxvcGVycyB1c2luZ1xuICAgIC8vICB0aGUgbGlicmFyeSlcbiAgICAvLyBkZWZhdWx0cyB0byBmYWxzZVxuICAgIG9wdHMgPSB0aGlzLm9wdHMgPSBvcHRzIHx8IHt9O1xuICAgIHRoaXMub3B0cy5kZXYgPSAhIW9wdHMuZGV2OyAvLyBUaGUgYXV0b2VzY2FwZSBmbGFnIHNldHMgZ2xvYmFsIGF1dG9lc2NhcGluZy4gSWYgdHJ1ZSxcbiAgICAvLyBldmVyeSBzdHJpbmcgdmFyaWFibGUgd2lsbCBiZSBlc2NhcGVkIGJ5IGRlZmF1bHQuXG4gICAgLy8gSWYgZmFsc2UsIHN0cmluZ3MgY2FuIGJlIG1hbnVhbGx5IGVzY2FwZWQgdXNpbmcgdGhlIGBlc2NhcGVgIGZpbHRlci5cbiAgICAvLyBkZWZhdWx0cyB0byB0cnVlXG5cbiAgICB0aGlzLm9wdHMuYXV0b2VzY2FwZSA9IG9wdHMuYXV0b2VzY2FwZSAhPSBudWxsID8gb3B0cy5hdXRvZXNjYXBlIDogdHJ1ZTsgLy8gSWYgdHJ1ZSwgdGhpcyB3aWxsIG1ha2UgdGhlIHN5c3RlbSB0aHJvdyBlcnJvcnMgaWYgdHJ5aW5nXG4gICAgLy8gdG8gb3V0cHV0IGEgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVcblxuICAgIHRoaXMub3B0cy50aHJvd09uVW5kZWZpbmVkID0gISFvcHRzLnRocm93T25VbmRlZmluZWQ7XG4gICAgdGhpcy5vcHRzLnRyaW1CbG9ja3MgPSAhIW9wdHMudHJpbUJsb2NrcztcbiAgICB0aGlzLm9wdHMubHN0cmlwQmxvY2tzID0gISFvcHRzLmxzdHJpcEJsb2NrcztcbiAgICB0aGlzLmxvYWRlcnMgPSBbXTtcblxuICAgIGlmICghbG9hZGVycykge1xuICAgICAgLy8gVGhlIGZpbGVzeXN0ZW0gbG9hZGVyIGlzIG9ubHkgYXZhaWxhYmxlIHNlcnZlci1zaWRlXG4gICAgICBpZiAoRmlsZVN5c3RlbUxvYWRlcikge1xuICAgICAgICB0aGlzLmxvYWRlcnMgPSBbbmV3IEZpbGVTeXN0ZW1Mb2FkZXIoJ3ZpZXdzJyldO1xuICAgICAgfSBlbHNlIGlmIChXZWJMb2FkZXIpIHtcbiAgICAgICAgdGhpcy5sb2FkZXJzID0gW25ldyBXZWJMb2FkZXIoJy92aWV3cycpXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkZXJzID0gbGliLmlzQXJyYXkobG9hZGVycykgPyBsb2FkZXJzIDogW2xvYWRlcnNdO1xuICAgIH0gLy8gSXQncyBlYXN5IHRvIHVzZSBwcmVjb21waWxlZCB0ZW1wbGF0ZXM6IGp1c3QgaW5jbHVkZSB0aGVtXG4gICAgLy8gYmVmb3JlIHlvdSBjb25maWd1cmUgbnVuanVja3MgYW5kIHRoaXMgd2lsbCBhdXRvbWF0aWNhbGx5XG4gICAgLy8gcGljayBpdCB1cCBhbmQgdXNlIGl0XG5cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubnVuanVja3NQcmVjb21waWxlZCkge1xuICAgICAgdGhpcy5sb2FkZXJzLnVuc2hpZnQobmV3IFByZWNvbXBpbGVkTG9hZGVyKHdpbmRvdy5udW5qdWNrc1ByZWNvbXBpbGVkKSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0Q2FjaGUoKTtcbiAgICB0aGlzLmdsb2JhbHMgPSBnbG9iYWxzKCk7XG4gICAgdGhpcy5maWx0ZXJzID0ge307XG4gICAgdGhpcy50ZXN0cyA9IHt9O1xuICAgIHRoaXMuYXN5bmNGaWx0ZXJzID0gW107XG4gICAgdGhpcy5leHRlbnNpb25zID0ge307XG4gICAgdGhpcy5leHRlbnNpb25zTGlzdCA9IFtdO1xuXG4gICAgbGliLl9lbnRyaWVzKGZpbHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBuYW1lID0gX3JlZlswXSxcbiAgICAgICAgICBmaWx0ZXIgPSBfcmVmWzFdO1xuICAgICAgcmV0dXJuIF90aGlzLmFkZEZpbHRlcihuYW1lLCBmaWx0ZXIpO1xuICAgIH0pO1xuXG4gICAgbGliLl9lbnRyaWVzKHRlc3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIG5hbWUgPSBfcmVmMlswXSxcbiAgICAgICAgICB0ZXN0ID0gX3JlZjJbMV07XG4gICAgICByZXR1cm4gX3RoaXMuYWRkVGVzdChuYW1lLCB0ZXN0KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaW5pdENhY2hlID0gZnVuY3Rpb24gaW5pdENhY2hlKCkge1xuICAgIC8vIENhY2hpbmcgYW5kIGNhY2hlIGJ1c3RpbmdcbiAgICB0aGlzLmxvYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAobG9hZGVyKSB7XG4gICAgICBsb2FkZXIuY2FjaGUgPSB7fTtcblxuICAgICAgaWYgKHR5cGVvZiBsb2FkZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbG9hZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodGVtcGxhdGUpIHtcbiAgICAgICAgICBsb2FkZXIuY2FjaGVbdGVtcGxhdGVdID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZEV4dGVuc2lvbiA9IGZ1bmN0aW9uIGFkZEV4dGVuc2lvbihuYW1lLCBleHRlbnNpb24pIHtcbiAgICBleHRlbnNpb24uX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLmV4dGVuc2lvbnNbbmFtZV0gPSBleHRlbnNpb247XG4gICAgdGhpcy5leHRlbnNpb25zTGlzdC5wdXNoKGV4dGVuc2lvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHJlbW92ZUV4dGVuc2lvbihuYW1lKSB7XG4gICAgdmFyIGV4dGVuc2lvbiA9IHRoaXMuZ2V0RXh0ZW5zaW9uKG5hbWUpO1xuXG4gICAgaWYgKCFleHRlbnNpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmV4dGVuc2lvbnNMaXN0ID0gbGliLndpdGhvdXQodGhpcy5leHRlbnNpb25zTGlzdCwgZXh0ZW5zaW9uKTtcbiAgICBkZWxldGUgdGhpcy5leHRlbnNpb25zW25hbWVdO1xuICB9O1xuXG4gIF9wcm90by5nZXRFeHRlbnNpb24gPSBmdW5jdGlvbiBnZXRFeHRlbnNpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNbbmFtZV07XG4gIH07XG5cbiAgX3Byb3RvLmhhc0V4dGVuc2lvbiA9IGZ1bmN0aW9uIGhhc0V4dGVuc2lvbihuYW1lKSB7XG4gICAgcmV0dXJuICEhdGhpcy5leHRlbnNpb25zW25hbWVdO1xuICB9O1xuXG4gIF9wcm90by5hZGRHbG9iYWwgPSBmdW5jdGlvbiBhZGRHbG9iYWwobmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLmdsb2JhbHNbbmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uZ2V0R2xvYmFsID0gZnVuY3Rpb24gZ2V0R2xvYmFsKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2xvYmFsc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ2xvYmFsIG5vdCBmb3VuZDogJyArIG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdsb2JhbHNbbmFtZV07XG4gIH07XG5cbiAgX3Byb3RvLmFkZEZpbHRlciA9IGZ1bmN0aW9uIGFkZEZpbHRlcihuYW1lLCBmdW5jLCBhc3luYykge1xuICAgIHZhciB3cmFwcGVkID0gZnVuYztcblxuICAgIGlmIChhc3luYykge1xuICAgICAgdGhpcy5hc3luY0ZpbHRlcnMucHVzaChuYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlcnNbbmFtZV0gPSB3cmFwcGVkO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5nZXRGaWx0ZXIgPSBmdW5jdGlvbiBnZXRGaWx0ZXIobmFtZSkge1xuICAgIGlmICghdGhpcy5maWx0ZXJzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbHRlciBub3QgZm91bmQ6ICcgKyBuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5maWx0ZXJzW25hbWVdO1xuICB9O1xuXG4gIF9wcm90by5hZGRUZXN0ID0gZnVuY3Rpb24gYWRkVGVzdChuYW1lLCBmdW5jKSB7XG4gICAgdGhpcy50ZXN0c1tuYW1lXSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmdldFRlc3QgPSBmdW5jdGlvbiBnZXRUZXN0KG5hbWUpIHtcbiAgICBpZiAoIXRoaXMudGVzdHNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndGVzdCBub3QgZm91bmQ6ICcgKyBuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50ZXN0c1tuYW1lXTtcbiAgfTtcblxuICBfcHJvdG8ucmVzb2x2ZVRlbXBsYXRlID0gZnVuY3Rpb24gcmVzb2x2ZVRlbXBsYXRlKGxvYWRlciwgcGFyZW50TmFtZSwgZmlsZW5hbWUpIHtcbiAgICB2YXIgaXNSZWxhdGl2ZSA9IGxvYWRlci5pc1JlbGF0aXZlICYmIHBhcmVudE5hbWUgPyBsb2FkZXIuaXNSZWxhdGl2ZShmaWxlbmFtZSkgOiBmYWxzZTtcbiAgICByZXR1cm4gaXNSZWxhdGl2ZSAmJiBsb2FkZXIucmVzb2x2ZSA/IGxvYWRlci5yZXNvbHZlKHBhcmVudE5hbWUsIGZpbGVuYW1lKSA6IGZpbGVuYW1lO1xuICB9O1xuXG4gIF9wcm90by5nZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIGdldFRlbXBsYXRlKG5hbWUsIGVhZ2VyQ29tcGlsZSwgcGFyZW50TmFtZSwgaWdub3JlTWlzc2luZywgY2IpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgdG1wbCA9IG51bGw7XG5cbiAgICBpZiAobmFtZSAmJiBuYW1lLnJhdykge1xuICAgICAgLy8gdGhpcyBmaXhlcyBhdXRvZXNjYXBlIGZvciB0ZW1wbGF0ZXMgcmVmZXJlbmNlZCBpbiBzeW1ib2xzXG4gICAgICBuYW1lID0gbmFtZS5yYXc7XG4gICAgfVxuXG4gICAgaWYgKGxpYi5pc0Z1bmN0aW9uKHBhcmVudE5hbWUpKSB7XG4gICAgICBjYiA9IHBhcmVudE5hbWU7XG4gICAgICBwYXJlbnROYW1lID0gbnVsbDtcbiAgICAgIGVhZ2VyQ29tcGlsZSA9IGVhZ2VyQ29tcGlsZSB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobGliLmlzRnVuY3Rpb24oZWFnZXJDb21waWxlKSkge1xuICAgICAgY2IgPSBlYWdlckNvbXBpbGU7XG4gICAgICBlYWdlckNvbXBpbGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSBpbnN0YW5jZW9mIFRlbXBsYXRlKSB7XG4gICAgICB0bXBsID0gbmFtZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0ZW1wbGF0ZSBuYW1lcyBtdXN0IGJlIGEgc3RyaW5nOiAnICsgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sb2FkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBsb2FkZXIgPSB0aGlzLmxvYWRlcnNbaV07XG4gICAgICAgIHRtcGwgPSBsb2FkZXIuY2FjaGVbdGhpcy5yZXNvbHZlVGVtcGxhdGUobG9hZGVyLCBwYXJlbnROYW1lLCBuYW1lKV07XG5cbiAgICAgICAgaWYgKHRtcGwpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0bXBsKSB7XG4gICAgICBpZiAoZWFnZXJDb21waWxlKSB7XG4gICAgICAgIHRtcGwuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IobnVsbCwgdG1wbCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG1wbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc3luY1Jlc3VsdDtcblxuICAgIHZhciBjcmVhdGVUZW1wbGF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlKGVyciwgaW5mbykge1xuICAgICAgaWYgKCFpbmZvICYmICFlcnIgJiYgIWlnbm9yZU1pc3NpbmcpIHtcbiAgICAgICAgZXJyID0gbmV3IEVycm9yKCd0ZW1wbGF0ZSBub3QgZm91bmQ6ICcgKyBuYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVycikge1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICBjYihlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyA9IGluZm8gfHwge1xuICAgICAgICAgIHNyYzogbm9vcFRtcGxTcmMsXG4gICAgICAgICAgcGF0aDogJydcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG5ld1RtcGwgPSBuZXcgVGVtcGxhdGUoaW5mby5zcmMsIF90aGlzMiwgaW5mby5wYXRoLCBlYWdlckNvbXBpbGUpO1xuXG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIGNiKG51bGwsIG5ld1RtcGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN5bmNSZXN1bHQgPSBuZXdUbXBsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYi5hc3luY0l0ZXIodGhpcy5sb2FkZXJzLCBmdW5jdGlvbiAobG9hZGVyLCBpLCBuZXh0LCBkb25lKSB7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUoZXJyLCBzcmMpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGRvbmUoZXJyKTtcbiAgICAgICAgfSBlbHNlIGlmIChzcmMpIHtcbiAgICAgICAgICBzcmMubG9hZGVyID0gbG9hZGVyO1xuICAgICAgICAgIGRvbmUobnVsbCwgc3JjKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUmVzb2x2ZSBuYW1lIHJlbGF0aXZlIHRvIHBhcmVudE5hbWVcblxuXG4gICAgICBuYW1lID0gdGhhdC5yZXNvbHZlVGVtcGxhdGUobG9hZGVyLCBwYXJlbnROYW1lLCBuYW1lKTtcblxuICAgICAgaWYgKGxvYWRlci5hc3luYykge1xuICAgICAgICBsb2FkZXIuZ2V0U291cmNlKG5hbWUsIGhhbmRsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kbGUobnVsbCwgbG9hZGVyLmdldFNvdXJjZShuYW1lKSk7XG4gICAgICB9XG4gICAgfSwgY3JlYXRlVGVtcGxhdGUpO1xuICAgIHJldHVybiBzeW5jUmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5leHByZXNzID0gZnVuY3Rpb24gZXhwcmVzcyhhcHApIHtcbiAgICByZXR1cm4gZXhwcmVzc0FwcCh0aGlzLCBhcHApO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIobmFtZSwgY3R4LCBjYikge1xuICAgIGlmIChsaWIuaXNGdW5jdGlvbihjdHgpKSB7XG4gICAgICBjYiA9IGN0eDtcbiAgICAgIGN0eCA9IG51bGw7XG4gICAgfSAvLyBXZSBzdXBwb3J0IGEgc3luY2hyb25vdXMgQVBJIHRvIG1ha2UgaXQgZWFzaWVyIHRvIG1pZ3JhdGVcbiAgICAvLyBleGlzdGluZyBjb2RlIHRvIGFzeW5jLiBUaGlzIHdvcmtzIGJlY2F1c2UgaWYgeW91IGRvbid0IGRvXG4gICAgLy8gYW55dGhpbmcgYXN5bmMgd29yaywgdGhlIHdob2xlIHRoaW5nIGlzIGFjdHVhbGx5IHJ1blxuICAgIC8vIHN5bmNocm9ub3VzbHkuXG5cblxuICAgIHZhciBzeW5jUmVzdWx0ID0gbnVsbDtcbiAgICB0aGlzLmdldFRlbXBsYXRlKG5hbWUsIGZ1bmN0aW9uIChlcnIsIHRtcGwpIHtcbiAgICAgIGlmIChlcnIgJiYgY2IpIHtcbiAgICAgICAgY2FsbGJhY2tBc2FwKGNiLCBlcnIpO1xuICAgICAgfSBlbHNlIGlmIChlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3luY1Jlc3VsdCA9IHRtcGwucmVuZGVyKGN0eCwgY2IpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzeW5jUmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXJTdHJpbmcgPSBmdW5jdGlvbiByZW5kZXJTdHJpbmcoc3JjLCBjdHgsIG9wdHMsIGNiKSB7XG4gICAgaWYgKGxpYi5pc0Z1bmN0aW9uKG9wdHMpKSB7XG4gICAgICBjYiA9IG9wdHM7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgdmFyIHRtcGwgPSBuZXcgVGVtcGxhdGUoc3JjLCB0aGlzLCBvcHRzLnBhdGgpO1xuICAgIHJldHVybiB0bXBsLnJlbmRlcihjdHgsIGNiKTtcbiAgfTtcblxuICBfcHJvdG8ud2F0ZXJmYWxsID0gZnVuY3Rpb24gd2F0ZXJmYWxsKHRhc2tzLCBjYWxsYmFjaywgZm9yY2VBc3luYykge1xuICAgIHJldHVybiBfd2F0ZXJmYWxsKHRhc2tzLCBjYWxsYmFjaywgZm9yY2VBc3luYyk7XG4gIH07XG5cbiAgcmV0dXJuIEVudmlyb25tZW50O1xufShPYmopO1xuXG52YXIgQ29udGV4dCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX09iajIpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ29udGV4dCwgX09iajIpO1xuXG4gIGZ1bmN0aW9uIENvbnRleHQoKSB7XG4gICAgcmV0dXJuIF9PYmoyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gQ29udGV4dC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi5pbml0ID0gZnVuY3Rpb24gaW5pdChjdHgsIGJsb2NrcywgZW52KSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAvLyBIYXMgdG8gYmUgdGllZCB0byBhbiBlbnZpcm9ubWVudCBzbyB3ZSBjYW4gdGFwIGludG8gaXRzIGdsb2JhbHMuXG4gICAgdGhpcy5lbnYgPSBlbnYgfHwgbmV3IEVudmlyb25tZW50KCk7IC8vIE1ha2UgYSBkdXBsaWNhdGUgb2YgY3R4XG5cbiAgICB0aGlzLmN0eCA9IGxpYi5leHRlbmQoe30sIGN0eCk7XG4gICAgdGhpcy5ibG9ja3MgPSB7fTtcbiAgICB0aGlzLmV4cG9ydGVkID0gW107XG4gICAgbGliLmtleXMoYmxvY2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBfdGhpczMuYWRkQmxvY2sobmFtZSwgYmxvY2tzW25hbWVdKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8yLmxvb2t1cCA9IGZ1bmN0aW9uIGxvb2t1cChuYW1lKSB7XG4gICAgLy8gVGhpcyBpcyBvbmUgb2YgdGhlIG1vc3QgY2FsbGVkIGZ1bmN0aW9ucywgc28gb3B0aW1pemUgZm9yXG4gICAgLy8gdGhlIHR5cGljYWwgY2FzZSB3aGVyZSB0aGUgbmFtZSBpc24ndCBpbiB0aGUgZ2xvYmFsc1xuICAgIGlmIChuYW1lIGluIHRoaXMuZW52Lmdsb2JhbHMgJiYgIShuYW1lIGluIHRoaXMuY3R4KSkge1xuICAgICAgcmV0dXJuIHRoaXMuZW52Lmdsb2JhbHNbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmN0eFtuYW1lXTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMi5zZXRWYXJpYWJsZSA9IGZ1bmN0aW9uIHNldFZhcmlhYmxlKG5hbWUsIHZhbCkge1xuICAgIHRoaXMuY3R4W25hbWVdID0gdmFsO1xuICB9O1xuXG4gIF9wcm90bzIuZ2V0VmFyaWFibGVzID0gZnVuY3Rpb24gZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmN0eDtcbiAgfTtcblxuICBfcHJvdG8yLmFkZEJsb2NrID0gZnVuY3Rpb24gYWRkQmxvY2sobmFtZSwgYmxvY2spIHtcbiAgICB0aGlzLmJsb2Nrc1tuYW1lXSA9IHRoaXMuYmxvY2tzW25hbWVdIHx8IFtdO1xuICAgIHRoaXMuYmxvY2tzW25hbWVdLnB1c2goYmxvY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuZ2V0QmxvY2sgPSBmdW5jdGlvbiBnZXRCbG9jayhuYW1lKSB7XG4gICAgaWYgKCF0aGlzLmJsb2Nrc1tuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGJsb2NrIFwiJyArIG5hbWUgKyAnXCInKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5ibG9ja3NbbmFtZV1bMF07XG4gIH07XG5cbiAgX3Byb3RvMi5nZXRTdXBlciA9IGZ1bmN0aW9uIGdldFN1cGVyKGVudiwgbmFtZSwgYmxvY2ssIGZyYW1lLCBydW50aW1lLCBjYikge1xuICAgIHZhciBpZHggPSBsaWIuaW5kZXhPZih0aGlzLmJsb2Nrc1tuYW1lXSB8fCBbXSwgYmxvY2spO1xuICAgIHZhciBibGsgPSB0aGlzLmJsb2Nrc1tuYW1lXVtpZHggKyAxXTtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG5cbiAgICBpZiAoaWR4ID09PSAtMSB8fCAhYmxrKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIHN1cGVyIGJsb2NrIGF2YWlsYWJsZSBmb3IgXCInICsgbmFtZSArICdcIicpO1xuICAgIH1cblxuICAgIGJsayhlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYik7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGRFeHBvcnQgPSBmdW5jdGlvbiBhZGRFeHBvcnQobmFtZSkge1xuICAgIHRoaXMuZXhwb3J0ZWQucHVzaChuYW1lKTtcbiAgfTtcblxuICBfcHJvdG8yLmdldEV4cG9ydGVkID0gZnVuY3Rpb24gZ2V0RXhwb3J0ZWQoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgZXhwb3J0ZWQgPSB7fTtcbiAgICB0aGlzLmV4cG9ydGVkLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGV4cG9ydGVkW25hbWVdID0gX3RoaXM0LmN0eFtuYW1lXTtcbiAgICB9KTtcbiAgICByZXR1cm4gZXhwb3J0ZWQ7XG4gIH07XG5cbiAgcmV0dXJuIENvbnRleHQ7XG59KE9iaik7XG5cbnZhciBUZW1wbGF0ZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX09iajMpIHtcbiAgX2luaGVyaXRzTG9vc2UoVGVtcGxhdGUsIF9PYmozKTtcblxuICBmdW5jdGlvbiBUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gX09iajMuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90bzMgPSBUZW1wbGF0ZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMy5pbml0ID0gZnVuY3Rpb24gaW5pdChzcmMsIGVudiwgcGF0aCwgZWFnZXJDb21waWxlKSB7XG4gICAgdGhpcy5lbnYgPSBlbnYgfHwgbmV3IEVudmlyb25tZW50KCk7XG5cbiAgICBpZiAobGliLmlzT2JqZWN0KHNyYykpIHtcbiAgICAgIHN3aXRjaCAoc3JjLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY29kZSc6XG4gICAgICAgICAgdGhpcy50bXBsUHJvcHMgPSBzcmMub2JqO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgdGhpcy50bXBsU3RyID0gc3JjLm9iajtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgdGVtcGxhdGUgb2JqZWN0IHR5cGUgXCIgKyBzcmMudHlwZSArIFwiOyBleHBlY3RlZCAnY29kZScsIG9yICdzdHJpbmcnXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGliLmlzU3RyaW5nKHNyYykpIHtcbiAgICAgIHRoaXMudG1wbFN0ciA9IHNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzcmMgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBvYmplY3QgZGVzY3JpYmluZyB0aGUgc291cmNlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcblxuICAgIGlmIChlYWdlckNvbXBpbGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX2NvbXBpbGUoKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBsaWIuX3ByZXR0aWZ5RXJyb3IodGhpcy5wYXRoLCB0aGlzLmVudi5vcHRzLmRldiwgZXJyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21waWxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihjdHgsIHBhcmVudEZyYW1lLCBjYikge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiBjdHggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gY3R4O1xuICAgICAgY3R4ID0ge307XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyZW50RnJhbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gcGFyZW50RnJhbWU7XG4gICAgICBwYXJlbnRGcmFtZSA9IG51bGw7XG4gICAgfSAvLyBJZiB0aGVyZSBpcyBhIHBhcmVudCBmcmFtZSwgd2UgYXJlIGJlaW5nIGNhbGxlZCBmcm9tIGludGVybmFsXG4gICAgLy8gY29kZSBvZiBhbm90aGVyIHRlbXBsYXRlLCBhbmQgdGhlIGludGVybmFsIHN5c3RlbVxuICAgIC8vIGRlcGVuZHMgb24gdGhlIHN5bmMvYXN5bmMgbmF0dXJlIG9mIHRoZSBwYXJlbnQgdGVtcGxhdGVcbiAgICAvLyB0byBiZSBpbmhlcml0ZWQsIHNvIGZvcmNlIGFuIGFzeW5jIGNhbGxiYWNrXG5cblxuICAgIHZhciBmb3JjZUFzeW5jID0gIXBhcmVudEZyYW1lOyAvLyBDYXRjaCBjb21waWxlIGVycm9ycyBmb3IgYXN5bmMgcmVuZGVyaW5nXG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5jb21waWxlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdmFyIGVyciA9IGxpYi5fcHJldHRpZnlFcnJvcih0aGlzLnBhdGgsIHRoaXMuZW52Lm9wdHMuZGV2LCBlKTtcblxuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFja0FzYXAoY2IsIGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dChjdHggfHwge30sIHRoaXMuYmxvY2tzLCB0aGlzLmVudik7XG4gICAgdmFyIGZyYW1lID0gcGFyZW50RnJhbWUgPyBwYXJlbnRGcmFtZS5wdXNoKHRydWUpIDogbmV3IEZyYW1lKCk7XG4gICAgZnJhbWUudG9wTGV2ZWwgPSB0cnVlO1xuICAgIHZhciBzeW5jUmVzdWx0ID0gbnVsbDtcbiAgICB2YXIgZGlkRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLnJvb3RSZW5kZXJGdW5jKHRoaXMuZW52LCBjb250ZXh0LCBmcmFtZSwgZ2xvYmFsUnVudGltZSwgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgICAgLy8gcHJldmVudCBtdWx0aXBsZSBjYWxscyB0byBjYlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZXJyID0gbGliLl9wcmV0dGlmeUVycm9yKF90aGlzNS5wYXRoLCBfdGhpczUuZW52Lm9wdHMuZGV2LCBlcnIpO1xuICAgICAgICBkaWRFcnJvciA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYikge1xuICAgICAgICBpZiAoZm9yY2VBc3luYykge1xuICAgICAgICAgIGNhbGxiYWNrQXNhcChjYiwgZXJyLCByZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNiKGVyciwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN5bmNSZXN1bHQgPSByZXM7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN5bmNSZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvMy5nZXRFeHBvcnRlZCA9IGZ1bmN0aW9uIGdldEV4cG9ydGVkKGN0eCwgcGFyZW50RnJhbWUsIGNiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICAgIGlmICh0eXBlb2YgY3R4ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IGN0eDtcbiAgICAgIGN0eCA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyZW50RnJhbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gcGFyZW50RnJhbWU7XG4gICAgICBwYXJlbnRGcmFtZSA9IG51bGw7XG4gICAgfSAvLyBDYXRjaCBjb21waWxlIGVycm9ycyBmb3IgYXN5bmMgcmVuZGVyaW5nXG5cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbXBpbGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiKGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZnJhbWUgPSBwYXJlbnRGcmFtZSA/IHBhcmVudEZyYW1lLnB1c2goKSA6IG5ldyBGcmFtZSgpO1xuICAgIGZyYW1lLnRvcExldmVsID0gdHJ1ZTsgLy8gUnVuIHRoZSByb290UmVuZGVyRnVuYyB0byBwb3B1bGF0ZSB0aGUgY29udGV4dCB3aXRoIGV4cG9ydGVkIHZhcnNcblxuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQoY3R4IHx8IHt9LCB0aGlzLmJsb2NrcywgdGhpcy5lbnYpO1xuICAgIHRoaXMucm9vdFJlbmRlckZ1bmModGhpcy5lbnYsIGNvbnRleHQsIGZyYW1lLCBnbG9iYWxSdW50aW1lLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNiKGVyciwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYihudWxsLCBjb250ZXh0LmdldEV4cG9ydGVkKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90bzMuY29tcGlsZSA9IGZ1bmN0aW9uIGNvbXBpbGUoKSB7XG4gICAgaWYgKCF0aGlzLmNvbXBpbGVkKSB7XG4gICAgICB0aGlzLl9jb21waWxlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMuX2NvbXBpbGUgPSBmdW5jdGlvbiBfY29tcGlsZSgpIHtcbiAgICB2YXIgcHJvcHM7XG5cbiAgICBpZiAodGhpcy50bXBsUHJvcHMpIHtcbiAgICAgIHByb3BzID0gdGhpcy50bXBsUHJvcHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzb3VyY2UgPSBjb21waWxlci5jb21waWxlKHRoaXMudG1wbFN0ciwgdGhpcy5lbnYuYXN5bmNGaWx0ZXJzLCB0aGlzLmVudi5leHRlbnNpb25zTGlzdCwgdGhpcy5wYXRoLCB0aGlzLmVudi5vcHRzKTtcbiAgICAgIHZhciBmdW5jID0gbmV3IEZ1bmN0aW9uKHNvdXJjZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LWZ1bmNcblxuICAgICAgcHJvcHMgPSBmdW5jKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja3MgPSB0aGlzLl9nZXRCbG9ja3MocHJvcHMpO1xuICAgIHRoaXMucm9vdFJlbmRlckZ1bmMgPSBwcm9wcy5yb290O1xuICAgIHRoaXMuY29tcGlsZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90bzMuX2dldEJsb2NrcyA9IGZ1bmN0aW9uIF9nZXRCbG9ja3MocHJvcHMpIHtcbiAgICB2YXIgYmxvY2tzID0ge307XG4gICAgbGliLmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgIGlmIChrLnNsaWNlKDAsIDIpID09PSAnYl8nKSB7XG4gICAgICAgIGJsb2Nrc1trLnNsaWNlKDIpXSA9IHByb3BzW2tdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBibG9ja3M7XG4gIH07XG5cbiAgcmV0dXJuIFRlbXBsYXRlO1xufShPYmopO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuICBUZW1wbGF0ZTogVGVtcGxhdGVcbn07XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vLyByYXdBc2FwIHByb3ZpZGVzIGV2ZXJ5dGhpbmcgd2UgbmVlZCBleGNlcHQgZXhjZXB0aW9uIG1hbmFnZW1lbnQuXG52YXIgcmF3QXNhcCA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG4vLyBSYXdUYXNrcyBhcmUgcmVjeWNsZWQgdG8gcmVkdWNlIEdDIGNodXJuLlxudmFyIGZyZWVUYXNrcyA9IFtdO1xuLy8gV2UgcXVldWUgZXJyb3JzIHRvIGVuc3VyZSB0aGV5IGFyZSB0aHJvd24gaW4gcmlnaHQgb3JkZXIgKEZJRk8pLlxuLy8gQXJyYXktYXMtcXVldWUgaXMgZ29vZCBlbm91Z2ggaGVyZSwgc2luY2Ugd2UgYXJlIGp1c3QgZGVhbGluZyB3aXRoIGV4Y2VwdGlvbnMuXG52YXIgcGVuZGluZ0Vycm9ycyA9IFtdO1xudmFyIHJlcXVlc3RFcnJvclRocm93ID0gcmF3QXNhcC5tYWtlUmVxdWVzdENhbGxGcm9tVGltZXIodGhyb3dGaXJzdEVycm9yKTtcblxuZnVuY3Rpb24gdGhyb3dGaXJzdEVycm9yKCkge1xuICAgIGlmIChwZW5kaW5nRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBwZW5kaW5nRXJyb3JzLnNoaWZ0KCk7XG4gICAgfVxufVxuXG4vKipcbiAqIENhbGxzIGEgdGFzayBhcyBzb29uIGFzIHBvc3NpYmxlIGFmdGVyIHJldHVybmluZywgaW4gaXRzIG93biBldmVudCwgd2l0aCBwcmlvcml0eVxuICogb3ZlciBvdGhlciBldmVudHMgbGlrZSBhbmltYXRpb24sIHJlZmxvdywgYW5kIHJlcGFpbnQuIEFuIGVycm9yIHRocm93biBmcm9tIGFuXG4gKiBldmVudCB3aWxsIG5vdCBpbnRlcnJ1cHQsIG5vciBldmVuIHN1YnN0YW50aWFsbHkgc2xvdyBkb3duIHRoZSBwcm9jZXNzaW5nIG9mXG4gKiBvdGhlciBldmVudHMsIGJ1dCB3aWxsIGJlIHJhdGhlciBwb3N0cG9uZWQgdG8gYSBsb3dlciBwcmlvcml0eSBldmVudC5cbiAqIEBwYXJhbSB7e2NhbGx9fSB0YXNrIEEgY2FsbGFibGUgb2JqZWN0LCB0eXBpY2FsbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIG5vXG4gKiBhcmd1bWVudHMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYXNhcDtcbmZ1bmN0aW9uIGFzYXAodGFzaykge1xuICAgIHZhciByYXdUYXNrO1xuICAgIGlmIChmcmVlVGFza3MubGVuZ3RoKSB7XG4gICAgICAgIHJhd1Rhc2sgPSBmcmVlVGFza3MucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmF3VGFzayA9IG5ldyBSYXdUYXNrKCk7XG4gICAgfVxuICAgIHJhd1Rhc2sudGFzayA9IHRhc2s7XG4gICAgcmF3QXNhcChyYXdUYXNrKTtcbn1cblxuLy8gV2Ugd3JhcCB0YXNrcyB3aXRoIHJlY3ljbGFibGUgdGFzayBvYmplY3RzLiAgQSB0YXNrIG9iamVjdCBpbXBsZW1lbnRzXG4vLyBgY2FsbGAsIGp1c3QgbGlrZSBhIGZ1bmN0aW9uLlxuZnVuY3Rpb24gUmF3VGFzaygpIHtcbiAgICB0aGlzLnRhc2sgPSBudWxsO1xufVxuXG4vLyBUaGUgc29sZSBwdXJwb3NlIG9mIHdyYXBwaW5nIHRoZSB0YXNrIGlzIHRvIGNhdGNoIHRoZSBleGNlcHRpb24gYW5kIHJlY3ljbGVcbi8vIHRoZSB0YXNrIG9iamVjdCBhZnRlciBpdHMgc2luZ2xlIHVzZS5cblJhd1Rhc2sucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdGhpcy50YXNrLmNhbGwoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoYXNhcC5vbmVycm9yKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGhvb2sgZXhpc3RzIHB1cmVseSBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAgICAgICAgICAgIC8vIEl0cyBuYW1lIHdpbGwgYmUgcGVyaW9kaWNhbGx5IHJhbmRvbWl6ZWQgdG8gYnJlYWsgYW55IGNvZGUgdGhhdFxuICAgICAgICAgICAgLy8gZGVwZW5kcyBvbiBpdHMgZXhpc3RlbmNlLlxuICAgICAgICAgICAgYXNhcC5vbmVycm9yKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEluIGEgd2ViIGJyb3dzZXIsIGV4Y2VwdGlvbnMgYXJlIG5vdCBmYXRhbC4gSG93ZXZlciwgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIHNsb3dpbmcgZG93biB0aGUgcXVldWUgb2YgcGVuZGluZyB0YXNrcywgd2UgcmV0aHJvdyB0aGUgZXJyb3IgaW4gYVxuICAgICAgICAgICAgLy8gbG93ZXIgcHJpb3JpdHkgdHVybi5cbiAgICAgICAgICAgIHBlbmRpbmdFcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgICAgICByZXF1ZXN0RXJyb3JUaHJvdygpO1xuICAgICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy50YXNrID0gbnVsbDtcbiAgICAgICAgZnJlZVRhc2tzW2ZyZWVUYXNrcy5sZW5ndGhdID0gdGhpcztcbiAgICB9XG59O1xuXG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHtcblxuLy8gVXNlIHRoZSBmYXN0ZXN0IG1lYW5zIHBvc3NpYmxlIHRvIGV4ZWN1dGUgYSB0YXNrIGluIGl0cyBvd24gdHVybiwgd2l0aFxuLy8gcHJpb3JpdHkgb3ZlciBvdGhlciBldmVudHMgaW5jbHVkaW5nIElPLCBhbmltYXRpb24sIHJlZmxvdywgYW5kIHJlZHJhd1xuLy8gZXZlbnRzIGluIGJyb3dzZXJzLlxuLy9cbi8vIEFuIGV4Y2VwdGlvbiB0aHJvd24gYnkgYSB0YXNrIHdpbGwgcGVybWFuZW50bHkgaW50ZXJydXB0IHRoZSBwcm9jZXNzaW5nIG9mXG4vLyBzdWJzZXF1ZW50IHRhc2tzLiBUaGUgaGlnaGVyIGxldmVsIGBhc2FwYCBmdW5jdGlvbiBlbnN1cmVzIHRoYXQgaWYgYW5cbi8vIGV4Y2VwdGlvbiBpcyB0aHJvd24gYnkgYSB0YXNrLCB0aGF0IHRoZSB0YXNrIHF1ZXVlIHdpbGwgY29udGludWUgZmx1c2hpbmcgYXNcbi8vIHNvb24gYXMgcG9zc2libGUsIGJ1dCBpZiB5b3UgdXNlIGByYXdBc2FwYCBkaXJlY3RseSwgeW91IGFyZSByZXNwb25zaWJsZSB0b1xuLy8gZWl0aGVyIGVuc3VyZSB0aGF0IG5vIGV4Y2VwdGlvbnMgYXJlIHRocm93biBmcm9tIHlvdXIgdGFzaywgb3IgdG8gbWFudWFsbHlcbi8vIGNhbGwgYHJhd0FzYXAucmVxdWVzdEZsdXNoYCBpZiBhbiBleGNlcHRpb24gaXMgdGhyb3duLlxubW9kdWxlLmV4cG9ydHMgPSByYXdBc2FwO1xuZnVuY3Rpb24gcmF3QXNhcCh0YXNrKSB7XG4gICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcmVxdWVzdEZsdXNoKCk7XG4gICAgICAgIGZsdXNoaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gRXF1aXZhbGVudCB0byBwdXNoLCBidXQgYXZvaWRzIGEgZnVuY3Rpb24gY2FsbC5cbiAgICBxdWV1ZVtxdWV1ZS5sZW5ndGhdID0gdGFzaztcbn1cblxudmFyIHF1ZXVlID0gW107XG4vLyBPbmNlIGEgZmx1c2ggaGFzIGJlZW4gcmVxdWVzdGVkLCBubyBmdXJ0aGVyIGNhbGxzIHRvIGByZXF1ZXN0Rmx1c2hgIGFyZVxuLy8gbmVjZXNzYXJ5IHVudGlsIHRoZSBuZXh0IGBmbHVzaGAgY29tcGxldGVzLlxudmFyIGZsdXNoaW5nID0gZmFsc2U7XG4vLyBgcmVxdWVzdEZsdXNoYCBpcyBhbiBpbXBsZW1lbnRhdGlvbi1zcGVjaWZpYyBtZXRob2QgdGhhdCBhdHRlbXB0cyB0byBraWNrXG4vLyBvZmYgYSBgZmx1c2hgIGV2ZW50IGFzIHF1aWNrbHkgYXMgcG9zc2libGUuIGBmbHVzaGAgd2lsbCBhdHRlbXB0IHRvIGV4aGF1c3Rcbi8vIHRoZSBldmVudCBxdWV1ZSBiZWZvcmUgeWllbGRpbmcgdG8gdGhlIGJyb3dzZXIncyBvd24gZXZlbnQgbG9vcC5cbnZhciByZXF1ZXN0Rmx1c2g7XG4vLyBUaGUgcG9zaXRpb24gb2YgdGhlIG5leHQgdGFzayB0byBleGVjdXRlIGluIHRoZSB0YXNrIHF1ZXVlLiBUaGlzIGlzXG4vLyBwcmVzZXJ2ZWQgYmV0d2VlbiBjYWxscyB0byBgZmx1c2hgIHNvIHRoYXQgaXQgY2FuIGJlIHJlc3VtZWQgaWZcbi8vIGEgdGFzayB0aHJvd3MgYW4gZXhjZXB0aW9uLlxudmFyIGluZGV4ID0gMDtcbi8vIElmIGEgdGFzayBzY2hlZHVsZXMgYWRkaXRpb25hbCB0YXNrcyByZWN1cnNpdmVseSwgdGhlIHRhc2sgcXVldWUgY2FuIGdyb3dcbi8vIHVuYm91bmRlZC4gVG8gcHJldmVudCBtZW1vcnkgZXhoYXVzdGlvbiwgdGhlIHRhc2sgcXVldWUgd2lsbCBwZXJpb2RpY2FsbHlcbi8vIHRydW5jYXRlIGFscmVhZHktY29tcGxldGVkIHRhc2tzLlxudmFyIGNhcGFjaXR5ID0gMTAyNDtcblxuLy8gVGhlIGZsdXNoIGZ1bmN0aW9uIHByb2Nlc3NlcyBhbGwgdGFza3MgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHdpdGhcbi8vIGByYXdBc2FwYCB1bmxlc3MgYW5kIHVudGlsIG9uZSBvZiB0aG9zZSB0YXNrcyB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuLy8gSWYgYSB0YXNrIHRocm93cyBhbiBleGNlcHRpb24sIGBmbHVzaGAgZW5zdXJlcyB0aGF0IGl0cyBzdGF0ZSB3aWxsIHJlbWFpblxuLy8gY29uc2lzdGVudCBhbmQgd2lsbCByZXN1bWUgd2hlcmUgaXQgbGVmdCBvZmYgd2hlbiBjYWxsZWQgYWdhaW4uXG4vLyBIb3dldmVyLCBgZmx1c2hgIGRvZXMgbm90IG1ha2UgYW55IGFycmFuZ2VtZW50cyB0byBiZSBjYWxsZWQgYWdhaW4gaWYgYW5cbi8vIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB3aGlsZSAoaW5kZXggPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAvLyBBZHZhbmNlIHRoZSBpbmRleCBiZWZvcmUgY2FsbGluZyB0aGUgdGFzay4gVGhpcyBlbnN1cmVzIHRoYXQgd2Ugd2lsbFxuICAgICAgICAvLyBiZWdpbiBmbHVzaGluZyBvbiB0aGUgbmV4dCB0YXNrIHRoZSB0YXNrIHRocm93cyBhbiBlcnJvci5cbiAgICAgICAgaW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgIHF1ZXVlW2N1cnJlbnRJbmRleF0uY2FsbCgpO1xuICAgICAgICAvLyBQcmV2ZW50IGxlYWtpbmcgbWVtb3J5IGZvciBsb25nIGNoYWlucyBvZiByZWN1cnNpdmUgY2FsbHMgdG8gYGFzYXBgLlxuICAgICAgICAvLyBJZiB3ZSBjYWxsIGBhc2FwYCB3aXRoaW4gdGFza3Mgc2NoZWR1bGVkIGJ5IGBhc2FwYCwgdGhlIHF1ZXVlIHdpbGxcbiAgICAgICAgLy8gZ3JvdywgYnV0IHRvIGF2b2lkIGFuIE8obikgd2FsayBmb3IgZXZlcnkgdGFzayB3ZSBleGVjdXRlLCB3ZSBkb24ndFxuICAgICAgICAvLyBzaGlmdCB0YXNrcyBvZmYgdGhlIHF1ZXVlIGFmdGVyIHRoZXkgaGF2ZSBiZWVuIGV4ZWN1dGVkLlxuICAgICAgICAvLyBJbnN0ZWFkLCB3ZSBwZXJpb2RpY2FsbHkgc2hpZnQgMTAyNCB0YXNrcyBvZmYgdGhlIHF1ZXVlLlxuICAgICAgICBpZiAoaW5kZXggPiBjYXBhY2l0eSkge1xuICAgICAgICAgICAgLy8gTWFudWFsbHkgc2hpZnQgYWxsIHZhbHVlcyBzdGFydGluZyBhdCB0aGUgaW5kZXggYmFjayB0byB0aGVcbiAgICAgICAgICAgIC8vIGJlZ2lubmluZyBvZiB0aGUgcXVldWUuXG4gICAgICAgICAgICBmb3IgKHZhciBzY2FuID0gMCwgbmV3TGVuZ3RoID0gcXVldWUubGVuZ3RoIC0gaW5kZXg7IHNjYW4gPCBuZXdMZW5ndGg7IHNjYW4rKykge1xuICAgICAgICAgICAgICAgIHF1ZXVlW3NjYW5dID0gcXVldWVbc2NhbiArIGluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXVlLmxlbmd0aCAtPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgIGluZGV4ID0gMDtcbiAgICBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBgcmVxdWVzdEZsdXNoYCBpcyBpbXBsZW1lbnRlZCB1c2luZyBhIHN0cmF0ZWd5IGJhc2VkIG9uIGRhdGEgY29sbGVjdGVkIGZyb21cbi8vIGV2ZXJ5IGF2YWlsYWJsZSBTYXVjZUxhYnMgU2VsZW5pdW0gd2ViIGRyaXZlciB3b3JrZXIgYXQgdGltZSBvZiB3cml0aW5nLlxuLy8gaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMW1HLTVVWUd1cDVxeEdkRU1Xa2hQNkJXQ3owNTNOVWIyRTFRb1VUVTE2dUEvZWRpdCNnaWQ9NzgzNzI0NTkzXG5cbi8vIFNhZmFyaSA2IGFuZCA2LjEgZm9yIGRlc2t0b3AsIGlQYWQsIGFuZCBpUGhvbmUgYXJlIHRoZSBvbmx5IGJyb3dzZXJzIHRoYXRcbi8vIGhhdmUgV2ViS2l0TXV0YXRpb25PYnNlcnZlciBidXQgbm90IHVuLXByZWZpeGVkIE11dGF0aW9uT2JzZXJ2ZXIuXG4vLyBNdXN0IHVzZSBgZ2xvYmFsYCBvciBgc2VsZmAgaW5zdGVhZCBvZiBgd2luZG93YCB0byB3b3JrIGluIGJvdGggZnJhbWVzIGFuZCB3ZWJcbi8vIHdvcmtlcnMuIGBnbG9iYWxgIGlzIGEgcHJvdmlzaW9uIG9mIEJyb3dzZXJpZnksIE1yLCBNcnMsIG9yIE1vcC5cblxuLyogZ2xvYmFscyBzZWxmICovXG52YXIgc2NvcGUgPSB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogc2VsZjtcbnZhciBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IHNjb3BlLk11dGF0aW9uT2JzZXJ2ZXIgfHwgc2NvcGUuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxuLy8gTXV0YXRpb25PYnNlcnZlcnMgYXJlIGRlc2lyYWJsZSBiZWNhdXNlIHRoZXkgaGF2ZSBoaWdoIHByaW9yaXR5IGFuZCB3b3JrXG4vLyByZWxpYWJseSBldmVyeXdoZXJlIHRoZXkgYXJlIGltcGxlbWVudGVkLlxuLy8gVGhleSBhcmUgaW1wbGVtZW50ZWQgaW4gYWxsIG1vZGVybiBicm93c2Vycy5cbi8vXG4vLyAtIEFuZHJvaWQgNC00LjNcbi8vIC0gQ2hyb21lIDI2LTM0XG4vLyAtIEZpcmVmb3ggMTQtMjlcbi8vIC0gSW50ZXJuZXQgRXhwbG9yZXIgMTFcbi8vIC0gaVBhZCBTYWZhcmkgNi03LjFcbi8vIC0gaVBob25lIFNhZmFyaSA3LTcuMVxuLy8gLSBTYWZhcmkgNi03XG5pZiAodHlwZW9mIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXF1ZXN0Rmx1c2ggPSBtYWtlUmVxdWVzdENhbGxGcm9tTXV0YXRpb25PYnNlcnZlcihmbHVzaCk7XG5cbi8vIE1lc3NhZ2VDaGFubmVscyBhcmUgZGVzaXJhYmxlIGJlY2F1c2UgdGhleSBnaXZlIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIEhUTUxcbi8vIHRhc2sgcXVldWUsIGFyZSBpbXBsZW1lbnRlZCBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCwgU2FmYXJpIDUuMC0xLCBhbmQgT3BlcmFcbi8vIDExLTEyLCBhbmQgaW4gd2ViIHdvcmtlcnMgaW4gbWFueSBlbmdpbmVzLlxuLy8gQWx0aG91Z2ggbWVzc2FnZSBjaGFubmVscyB5aWVsZCB0byBhbnkgcXVldWVkIHJlbmRlcmluZyBhbmQgSU8gdGFza3MsIHRoZXlcbi8vIHdvdWxkIGJlIGJldHRlciB0aGFuIGltcG9zaW5nIHRoZSA0bXMgZGVsYXkgb2YgdGltZXJzLlxuLy8gSG93ZXZlciwgdGhleSBkbyBub3Qgd29yayByZWxpYWJseSBpbiBJbnRlcm5ldCBFeHBsb3JlciBvciBTYWZhcmkuXG5cbi8vIEludGVybmV0IEV4cGxvcmVyIDEwIGlzIHRoZSBvbmx5IGJyb3dzZXIgdGhhdCBoYXMgc2V0SW1tZWRpYXRlIGJ1dCBkb2VzXG4vLyBub3QgaGF2ZSBNdXRhdGlvbk9ic2VydmVycy5cbi8vIEFsdGhvdWdoIHNldEltbWVkaWF0ZSB5aWVsZHMgdG8gdGhlIGJyb3dzZXIncyByZW5kZXJlciwgaXQgd291bGQgYmVcbi8vIHByZWZlcnJhYmxlIHRvIGZhbGxpbmcgYmFjayB0byBzZXRUaW1lb3V0IHNpbmNlIGl0IGRvZXMgbm90IGhhdmVcbi8vIHRoZSBtaW5pbXVtIDRtcyBwZW5hbHR5LlxuLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBhcHBlYXJzIHRvIGJlIGEgYnVnIGluIEludGVybmV0IEV4cGxvcmVyIDEwIE1vYmlsZSAoYW5kXG4vLyBEZXNrdG9wIHRvIGEgbGVzc2VyIGV4dGVudCkgdGhhdCByZW5kZXJzIGJvdGggc2V0SW1tZWRpYXRlIGFuZFxuLy8gTWVzc2FnZUNoYW5uZWwgdXNlbGVzcyBmb3IgdGhlIHB1cnBvc2VzIG9mIEFTQVAuXG4vLyBodHRwczovL2dpdGh1Yi5jb20va3Jpc2tvd2FsL3EvaXNzdWVzLzM5NlxuXG4vLyBUaW1lcnMgYXJlIGltcGxlbWVudGVkIHVuaXZlcnNhbGx5LlxuLy8gV2UgZmFsbCBiYWNrIHRvIHRpbWVycyBpbiB3b3JrZXJzIGluIG1vc3QgZW5naW5lcywgYW5kIGluIGZvcmVncm91bmRcbi8vIGNvbnRleHRzIGluIHRoZSBmb2xsb3dpbmcgYnJvd3NlcnMuXG4vLyBIb3dldmVyLCBub3RlIHRoYXQgZXZlbiB0aGlzIHNpbXBsZSBjYXNlIHJlcXVpcmVzIG51YW5jZXMgdG8gb3BlcmF0ZSBpbiBhXG4vLyBicm9hZCBzcGVjdHJ1bSBvZiBicm93c2Vycy5cbi8vXG4vLyAtIEZpcmVmb3ggMy0xM1xuLy8gLSBJbnRlcm5ldCBFeHBsb3JlciA2LTlcbi8vIC0gaVBhZCBTYWZhcmkgNC4zXG4vLyAtIEx5bnggMi44Ljdcbn0gZWxzZSB7XG4gICAgcmVxdWVzdEZsdXNoID0gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKGZsdXNoKTtcbn1cblxuLy8gYHJlcXVlc3RGbHVzaGAgcmVxdWVzdHMgdGhhdCB0aGUgaGlnaCBwcmlvcml0eSBldmVudCBxdWV1ZSBiZSBmbHVzaGVkIGFzXG4vLyBzb29uIGFzIHBvc3NpYmxlLlxuLy8gVGhpcyBpcyB1c2VmdWwgdG8gcHJldmVudCBhbiBlcnJvciB0aHJvd24gaW4gYSB0YXNrIGZyb20gc3RhbGxpbmcgdGhlIGV2ZW50XG4vLyBxdWV1ZSBpZiB0aGUgZXhjZXB0aW9uIGhhbmRsZWQgYnkgTm9kZS5qc+KAmXNcbi8vIGBwcm9jZXNzLm9uKFwidW5jYXVnaHRFeGNlcHRpb25cIilgIG9yIGJ5IGEgZG9tYWluLlxucmF3QXNhcC5yZXF1ZXN0Rmx1c2ggPSByZXF1ZXN0Rmx1c2g7XG5cbi8vIFRvIHJlcXVlc3QgYSBoaWdoIHByaW9yaXR5IGV2ZW50LCB3ZSBpbmR1Y2UgYSBtdXRhdGlvbiBvYnNlcnZlciBieSB0b2dnbGluZ1xuLy8gdGhlIHRleHQgb2YgYSB0ZXh0IG5vZGUgYmV0d2VlbiBcIjFcIiBhbmQgXCItMVwiLlxuZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbU11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spIHtcbiAgICB2YXIgdG9nZ2xlID0gMTtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pO1xuICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbiAgICAgICAgdG9nZ2xlID0gLXRvZ2dsZTtcbiAgICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlO1xuICAgIH07XG59XG5cbi8vIFRoZSBtZXNzYWdlIGNoYW5uZWwgdGVjaG5pcXVlIHdhcyBkaXNjb3ZlcmVkIGJ5IE1hbHRlIFVibCBhbmQgd2FzIHRoZVxuLy8gb3JpZ2luYWwgZm91bmRhdGlvbiBmb3IgdGhpcyBsaWJyYXJ5LlxuLy8gaHR0cDovL3d3dy5ub25ibG9ja2luZy5pby8yMDExLzA2L3dpbmRvd25leHR0aWNrLmh0bWxcblxuLy8gU2FmYXJpIDYuMC41IChhdCBsZWFzdCkgaW50ZXJtaXR0ZW50bHkgZmFpbHMgdG8gY3JlYXRlIG1lc3NhZ2UgcG9ydHMgb24gYVxuLy8gcGFnZSdzIGZpcnN0IGxvYWQuIFRoYW5rZnVsbHksIHRoaXMgdmVyc2lvbiBvZiBTYWZhcmkgc3VwcG9ydHNcbi8vIE11dGF0aW9uT2JzZXJ2ZXJzLCBzbyB3ZSBkb24ndCBuZWVkIHRvIGZhbGwgYmFjayBpbiB0aGF0IGNhc2UuXG5cbi8vIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21NZXNzYWdlQ2hhbm5lbChjYWxsYmFjaykge1xuLy8gICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4vLyAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBjYWxsYmFjaztcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4vLyAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4vLyAgICAgfTtcbi8vIH1cblxuLy8gRm9yIHJlYXNvbnMgZXhwbGFpbmVkIGFib3ZlLCB3ZSBhcmUgYWxzbyB1bmFibGUgdG8gdXNlIGBzZXRJbW1lZGlhdGVgXG4vLyB1bmRlciBhbnkgY2lyY3Vtc3RhbmNlcy5cbi8vIEV2ZW4gaWYgd2Ugd2VyZSwgdGhlcmUgaXMgYW5vdGhlciBidWcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAuXG4vLyBJdCBpcyBub3Qgc3VmZmljaWVudCB0byBhc3NpZ24gYHNldEltbWVkaWF0ZWAgdG8gYHJlcXVlc3RGbHVzaGAgYmVjYXVzZVxuLy8gYHNldEltbWVkaWF0ZWAgbXVzdCBiZSBjYWxsZWQgKmJ5IG5hbWUqIGFuZCB0aGVyZWZvcmUgbXVzdCBiZSB3cmFwcGVkIGluIGFcbi8vIGNsb3N1cmUuXG4vLyBOZXZlciBmb3JnZXQuXG5cbi8vIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21TZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4vLyAgICAgICAgIHNldEltbWVkaWF0ZShjYWxsYmFjayk7XG4vLyAgICAgfTtcbi8vIH1cblxuLy8gU2FmYXJpIDYuMCBoYXMgYSBwcm9ibGVtIHdoZXJlIHRpbWVycyB3aWxsIGdldCBsb3N0IHdoaWxlIHRoZSB1c2VyIGlzXG4vLyBzY3JvbGxpbmcuIFRoaXMgcHJvYmxlbSBkb2VzIG5vdCBpbXBhY3QgQVNBUCBiZWNhdXNlIFNhZmFyaSA2LjAgc3VwcG9ydHNcbi8vIG11dGF0aW9uIG9ic2VydmVycywgc28gdGhhdCBpbXBsZW1lbnRhdGlvbiBpcyB1c2VkIGluc3RlYWQuXG4vLyBIb3dldmVyLCBpZiB3ZSBldmVyIGVsZWN0IHRvIHVzZSB0aW1lcnMgaW4gU2FmYXJpLCB0aGUgcHJldmFsZW50IHdvcmstYXJvdW5kXG4vLyBpcyB0byBhZGQgYSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgdGhhdCBjYWxscyBmb3IgYSBmbHVzaC5cblxuLy8gYHNldFRpbWVvdXRgIGRvZXMgbm90IGNhbGwgdGhlIHBhc3NlZCBjYWxsYmFjayBpZiB0aGUgZGVsYXkgaXMgbGVzcyB0aGFuXG4vLyBhcHByb3hpbWF0ZWx5IDcgaW4gd2ViIHdvcmtlcnMgaW4gRmlyZWZveCA4IHRocm91Z2ggMTgsIGFuZCBzb21ldGltZXMgbm90XG4vLyBldmVuIHRoZW4uXG5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcihjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbiAgICAgICAgLy8gV2UgZGlzcGF0Y2ggYSB0aW1lb3V0IHdpdGggYSBzcGVjaWZpZWQgZGVsYXkgb2YgMCBmb3IgZW5naW5lcyB0aGF0XG4gICAgICAgIC8vIGNhbiByZWxpYWJseSBhY2NvbW1vZGF0ZSB0aGF0IHJlcXVlc3QuIFRoaXMgd2lsbCB1c3VhbGx5IGJlIHNuYXBwZWRcbiAgICAgICAgLy8gdG8gYSA0IG1pbGlzZWNvbmQgZGVsYXksIGJ1dCBvbmNlIHdlJ3JlIGZsdXNoaW5nLCB0aGVyZSdzIG5vIGRlbGF5XG4gICAgICAgIC8vIGJldHdlZW4gZXZlbnRzLlxuICAgICAgICB2YXIgdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoaGFuZGxlVGltZXIsIDApO1xuICAgICAgICAvLyBIb3dldmVyLCBzaW5jZSB0aGlzIHRpbWVyIGdldHMgZnJlcXVlbnRseSBkcm9wcGVkIGluIEZpcmVmb3hcbiAgICAgICAgLy8gd29ya2Vycywgd2UgZW5saXN0IGFuIGludGVydmFsIGhhbmRsZSB0aGF0IHdpbGwgdHJ5IHRvIGZpcmVcbiAgICAgICAgLy8gYW4gZXZlbnQgMjAgdGltZXMgcGVyIHNlY29uZCB1bnRpbCBpdCBzdWNjZWVkcy5cbiAgICAgICAgdmFyIGludGVydmFsSGFuZGxlID0gc2V0SW50ZXJ2YWwoaGFuZGxlVGltZXIsIDUwKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVUaW1lcigpIHtcbiAgICAgICAgICAgIC8vIFdoaWNoZXZlciB0aW1lciBzdWNjZWVkcyB3aWxsIGNhbmNlbCBib3RoIHRpbWVycyBhbmRcbiAgICAgICAgICAgIC8vIGV4ZWN1dGUgdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbEhhbmRsZSk7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gVGhpcyBpcyBmb3IgYGFzYXAuanNgIG9ubHkuXG4vLyBJdHMgbmFtZSB3aWxsIGJlIHBlcmlvZGljYWxseSByYW5kb21pemVkIHRvIGJyZWFrIGFueSBjb2RlIHRoYXQgZGVwZW5kcyBvblxuLy8gaXRzIGV4aXN0ZW5jZS5cbnJhd0FzYXAubWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyID0gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyO1xuXG4vLyBBU0FQIHdhcyBvcmlnaW5hbGx5IGEgbmV4dFRpY2sgc2hpbSBpbmNsdWRlZCBpbiBRLiBUaGlzIHdhcyBmYWN0b3JlZCBvdXRcbi8vIGludG8gdGhpcyBBU0FQIHBhY2thZ2UuIEl0IHdhcyBsYXRlciBhZGFwdGVkIHRvIFJTVlAgd2hpY2ggbWFkZSBmdXJ0aGVyXG4vLyBhbWVuZG1lbnRzLiBUaGVzZSBkZWNpc2lvbnMsIHBhcnRpY3VsYXJseSB0byBtYXJnaW5hbGl6ZSBNZXNzYWdlQ2hhbm5lbCBhbmRcbi8vIHRvIGNhcHR1cmUgdGhlIE11dGF0aW9uT2JzZXJ2ZXIgaW1wbGVtZW50YXRpb24gaW4gYSBjbG9zdXJlLCB3ZXJlIGludGVncmF0ZWRcbi8vIGJhY2sgaW50byBBU0FQIHByb3Blci5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90aWxkZWlvL3JzdnAuanMvYmxvYi9jZGRmNzIzMjU0NmE5Y2Y4NTg1MjRiNzVjZGU2ZjllZGY3MjYyMGE3L2xpYi9yc3ZwL2FzYXAuanNcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oMTApKSlcblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187Ly8gTUlUIGxpY2Vuc2UgKGJ5IEVsYW4gU2hhbmtlcikuXG4oZnVuY3Rpb24oZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGV4ZWN1dGVTeW5jID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnZnVuY3Rpb24nKXtcbiAgICAgIGFyZ3NbMF0uYXBwbHkobnVsbCwgYXJncy5zcGxpY2UoMSkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZXhlY3V0ZUFzeW5jID0gZnVuY3Rpb24oZm4pe1xuICAgIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzZXRJbW1lZGlhdGUoZm4pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MubmV4dFRpY2spIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZm4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG1ha2VJdGVyYXRvciA9IGZ1bmN0aW9uICh0YXNrcykge1xuICAgIHZhciBtYWtlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHZhciBmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgIHRhc2tzW2luZGV4XS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmbi5uZXh0KCk7XG4gICAgICB9O1xuICAgICAgZm4ubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChpbmRleCA8IHRhc2tzLmxlbmd0aCAtIDEpID8gbWFrZUNhbGxiYWNrKGluZGV4ICsgMSk6IG51bGw7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGZuO1xuICAgIH07XG4gICAgcmV0dXJuIG1ha2VDYWxsYmFjaygwKTtcbiAgfTtcbiAgXG4gIHZhciBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24obWF5YmVBcnJheSl7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtYXliZUFycmF5KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICB2YXIgd2F0ZXJmYWxsID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaywgZm9yY2VBc3luYykge1xuICAgIHZhciBuZXh0VGljayA9IGZvcmNlQXN5bmMgPyBleGVjdXRlQXN5bmMgOiBleGVjdXRlU3luYztcbiAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgIGlmICghX2lzQXJyYXkodGFza3MpKSB7XG4gICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCB0byB3YXRlcmZhbGwgbXVzdCBiZSBhbiBhcnJheSBvZiBmdW5jdGlvbnMnKTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgIH1cbiAgICBpZiAoIXRhc2tzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHZhciB3cmFwSXRlcmF0b3IgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgIHZhciBuZXh0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICBhcmdzLnB1c2god3JhcEl0ZXJhdG9yKG5leHQpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJncy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaXRlcmF0b3IuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICB3cmFwSXRlcmF0b3IobWFrZUl0ZXJhdG9yKHRhc2tzKSkoKTtcbiAgfTtcblxuICBpZiAodHJ1ZSkge1xuICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2F0ZXJmYWxsO1xuICAgIH0pLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7IC8vIFJlcXVpcmVKU1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3YXRlcmZhbGw7IC8vIENvbW1vbkpTXG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFscy53YXRlcmZhbGwgPSB3YXRlcmZhbGw7IC8vIDxzY3JpcHQ+XG4gIH1cbn0pKHRoaXMpO1xuXG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGxpYiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciByID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5mdW5jdGlvbiBub3JtYWxpemUodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnRzLmFicyA9IE1hdGguYWJzO1xuXG5mdW5jdGlvbiBpc05hTihudW0pIHtcbiAgcmV0dXJuIG51bSAhPT0gbnVtOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuXG5mdW5jdGlvbiBiYXRjaChhcnIsIGxpbmVjb3VudCwgZmlsbFdpdGgpIHtcbiAgdmFyIGk7XG4gIHZhciByZXMgPSBbXTtcbiAgdmFyIHRtcCA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaSAlIGxpbmVjb3VudCA9PT0gMCAmJiB0bXAubGVuZ3RoKSB7XG4gICAgICByZXMucHVzaCh0bXApO1xuICAgICAgdG1wID0gW107XG4gICAgfVxuXG4gICAgdG1wLnB1c2goYXJyW2ldKTtcbiAgfVxuXG4gIGlmICh0bXAubGVuZ3RoKSB7XG4gICAgaWYgKGZpbGxXaXRoKSB7XG4gICAgICBmb3IgKGkgPSB0bXAubGVuZ3RoOyBpIDwgbGluZWNvdW50OyBpKyspIHtcbiAgICAgICAgdG1wLnB1c2goZmlsbFdpdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlcy5wdXNoKHRtcCk7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnRzLmJhdGNoID0gYmF0Y2g7XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gIHN0ciA9IG5vcm1hbGl6ZShzdHIsICcnKTtcbiAgdmFyIHJldCA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gci5jb3B5U2FmZW5lc3Moc3RyLCByZXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXQuc2xpY2UoMSkpO1xufVxuXG5leHBvcnRzLmNhcGl0YWxpemUgPSBjYXBpdGFsaXplO1xuXG5mdW5jdGlvbiBjZW50ZXIoc3RyLCB3aWR0aCkge1xuICBzdHIgPSBub3JtYWxpemUoc3RyLCAnJyk7XG4gIHdpZHRoID0gd2lkdGggfHwgODA7XG5cbiAgaWYgKHN0ci5sZW5ndGggPj0gd2lkdGgpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgdmFyIHNwYWNlcyA9IHdpZHRoIC0gc3RyLmxlbmd0aDtcbiAgdmFyIHByZSA9IGxpYi5yZXBlYXQoJyAnLCBzcGFjZXMgLyAyIC0gc3BhY2VzICUgMik7XG4gIHZhciBwb3N0ID0gbGliLnJlcGVhdCgnICcsIHNwYWNlcyAvIDIpO1xuICByZXR1cm4gci5jb3B5U2FmZW5lc3Moc3RyLCBwcmUgKyBzdHIgKyBwb3N0KTtcbn1cblxuZXhwb3J0cy5jZW50ZXIgPSBjZW50ZXI7XG5cbmZ1bmN0aW9uIGRlZmF1bHRfKHZhbCwgZGVmLCBib29sKSB7XG4gIGlmIChib29sKSB7XG4gICAgcmV0dXJuIHZhbCB8fCBkZWY7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDogZGVmO1xuICB9XG59IC8vIFRPRE86IGl0IGlzIGNvbmZ1c2luZyB0byBleHBvcnQgc29tZXRoaW5nIGNhbGxlZCAnZGVmYXVsdCdcblxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBkZWZhdWx0XzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cblxuZnVuY3Rpb24gZGljdHNvcnQodmFsLCBjYXNlU2Vuc2l0aXZlLCBieSkge1xuICBpZiAoIWxpYi5pc09iamVjdCh2YWwpKSB7XG4gICAgdGhyb3cgbmV3IGxpYi5UZW1wbGF0ZUVycm9yKCdkaWN0c29ydCBmaWx0ZXI6IHZhbCBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgdmFyIGFycmF5ID0gW107IC8vIGRlbGliZXJhdGVseSBpbmNsdWRlIHByb3BlcnRpZXMgZnJvbSB0aGUgb2JqZWN0J3MgcHJvdG90eXBlXG5cbiAgZm9yICh2YXIgayBpbiB2YWwpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGd1YXJkLWZvci1pbiwgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBhcnJheS5wdXNoKFtrLCB2YWxba11dKTtcbiAgfVxuXG4gIHZhciBzaTtcblxuICBpZiAoYnkgPT09IHVuZGVmaW5lZCB8fCBieSA9PT0gJ2tleScpIHtcbiAgICBzaSA9IDA7XG4gIH0gZWxzZSBpZiAoYnkgPT09ICd2YWx1ZScpIHtcbiAgICBzaSA9IDE7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IGxpYi5UZW1wbGF0ZUVycm9yKCdkaWN0c29ydCBmaWx0ZXI6IFlvdSBjYW4gb25seSBzb3J0IGJ5IGVpdGhlciBrZXkgb3IgdmFsdWUnKTtcbiAgfVxuXG4gIGFycmF5LnNvcnQoZnVuY3Rpb24gKHQxLCB0Mikge1xuICAgIHZhciBhID0gdDFbc2ldO1xuICAgIHZhciBiID0gdDJbc2ldO1xuXG4gICAgaWYgKCFjYXNlU2Vuc2l0aXZlKSB7XG4gICAgICBpZiAobGliLmlzU3RyaW5nKGEpKSB7XG4gICAgICAgIGEgPSBhLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaWIuaXNTdHJpbmcoYikpIHtcbiAgICAgICAgYiA9IGIudG9VcHBlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYSA+IGIgPyAxIDogYSA9PT0gYiA/IDAgOiAtMTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICB9KTtcbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnRzLmRpY3Rzb3J0ID0gZGljdHNvcnQ7XG5cbmZ1bmN0aW9uIGR1bXAob2JqLCBzcGFjZXMpIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgc3BhY2VzKTtcbn1cblxuZXhwb3J0cy5kdW1wID0gZHVtcDtcblxuZnVuY3Rpb24gZXNjYXBlKHN0cikge1xuICBpZiAoc3RyIGluc3RhbmNlb2Ygci5TYWZlU3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHN0ciA9IHN0ciA9PT0gbnVsbCB8fCBzdHIgPT09IHVuZGVmaW5lZCA/ICcnIDogc3RyO1xuICByZXR1cm4gci5tYXJrU2FmZShsaWIuZXNjYXBlKHN0ci50b1N0cmluZygpKSk7XG59XG5cbmV4cG9ydHMuZXNjYXBlID0gZXNjYXBlO1xuXG5mdW5jdGlvbiBzYWZlKHN0cikge1xuICBpZiAoc3RyIGluc3RhbmNlb2Ygci5TYWZlU3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHN0ciA9IHN0ciA9PT0gbnVsbCB8fCBzdHIgPT09IHVuZGVmaW5lZCA/ICcnIDogc3RyO1xuICByZXR1cm4gci5tYXJrU2FmZShzdHIudG9TdHJpbmcoKSk7XG59XG5cbmV4cG9ydHMuc2FmZSA9IHNhZmU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycikge1xuICByZXR1cm4gYXJyWzBdO1xufVxuXG5leHBvcnRzLmZpcnN0ID0gZmlyc3Q7XG5cbmZ1bmN0aW9uIGdyb3VwYnkoYXJyLCBhdHRyKSB7XG4gIHJldHVybiBsaWIuZ3JvdXBCeShhcnIsIGF0dHIpO1xufVxuXG5leHBvcnRzLmdyb3VwYnkgPSBncm91cGJ5O1xuXG5mdW5jdGlvbiBpbmRlbnQoc3RyLCB3aWR0aCwgaW5kZW50Zmlyc3QpIHtcbiAgc3RyID0gbm9ybWFsaXplKHN0ciwgJycpO1xuXG4gIGlmIChzdHIgPT09ICcnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgd2lkdGggPSB3aWR0aCB8fCA0OyAvLyBsZXQgcmVzID0gJyc7XG5cbiAgdmFyIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKTtcbiAgdmFyIHNwID0gbGliLnJlcGVhdCgnICcsIHdpZHRoKTtcbiAgdmFyIHJlcyA9IGxpbmVzLm1hcChmdW5jdGlvbiAobCwgaSkge1xuICAgIHJldHVybiBpID09PSAwICYmICFpbmRlbnRmaXJzdCA/IGwgKyBcIlxcblwiIDogXCJcIiArIHNwICsgbCArIFwiXFxuXCI7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gci5jb3B5U2FmZW5lc3Moc3RyLCByZXMpO1xufVxuXG5leHBvcnRzLmluZGVudCA9IGluZGVudDtcblxuZnVuY3Rpb24gam9pbihhcnIsIGRlbCwgYXR0cikge1xuICBkZWwgPSBkZWwgfHwgJyc7XG5cbiAgaWYgKGF0dHIpIHtcbiAgICBhcnIgPSBsaWIubWFwKGFyciwgZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiB2W2F0dHJdO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGFyci5qb2luKGRlbCk7XG59XG5cbmV4cG9ydHMuam9pbiA9IGpvaW47XG5cbmZ1bmN0aW9uIGxhc3QoYXJyKSB7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnRzLmxhc3QgPSBsYXN0O1xuXG5mdW5jdGlvbiBsZW5ndGhGaWx0ZXIodmFsKSB7XG4gIHZhciB2YWx1ZSA9IG5vcm1hbGl6ZSh2YWwsICcnKTtcblxuICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgTWFwID09PSAnZnVuY3Rpb24nICYmIHZhbHVlIGluc3RhbmNlb2YgTWFwIHx8IHR5cGVvZiBTZXQgPT09ICdmdW5jdGlvbicgJiYgdmFsdWUgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgIC8vIEVDTUFTY3JpcHQgMjAxNSBNYXBzIGFuZCBTZXRzXG4gICAgICByZXR1cm4gdmFsdWUuc2l6ZTtcbiAgICB9XG5cbiAgICBpZiAobGliLmlzT2JqZWN0KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2Ygci5TYWZlU3RyaW5nKSkge1xuICAgICAgLy8gT2JqZWN0cyAoYmVzaWRlcyBTYWZlU3RyaW5ncyksIG5vbi1wcmltYXRpdmUgQXJyYXlzXG4gICAgICByZXR1cm4gbGliLmtleXModmFsdWUpLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydHMubGVuZ3RoID0gbGVuZ3RoRmlsdGVyO1xuXG5mdW5jdGlvbiBsaXN0KHZhbCkge1xuICBpZiAobGliLmlzU3RyaW5nKHZhbCkpIHtcbiAgICByZXR1cm4gdmFsLnNwbGl0KCcnKTtcbiAgfSBlbHNlIGlmIChsaWIuaXNPYmplY3QodmFsKSkge1xuICAgIHJldHVybiBsaWIuX2VudHJpZXModmFsIHx8IHt9KS5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBrZXkgPSBfcmVmWzBdLFxuICAgICAgICAgIHZhbHVlID0gX3JlZlsxXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobGliLmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiB2YWw7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IGxpYi5UZW1wbGF0ZUVycm9yKCdsaXN0IGZpbHRlcjogdHlwZSBub3QgaXRlcmFibGUnKTtcbiAgfVxufVxuXG5leHBvcnRzLmxpc3QgPSBsaXN0O1xuXG5mdW5jdGlvbiBsb3dlcihzdHIpIHtcbiAgc3RyID0gbm9ybWFsaXplKHN0ciwgJycpO1xuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG59XG5cbmV4cG9ydHMubG93ZXIgPSBsb3dlcjtcblxuZnVuY3Rpb24gbmwyYnIoc3RyKSB7XG4gIGlmIChzdHIgPT09IG51bGwgfHwgc3RyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gci5jb3B5U2FmZW5lc3Moc3RyLCBzdHIucmVwbGFjZSgvXFxyXFxufFxcbi9nLCAnPGJyIC8+XFxuJykpO1xufVxuXG5leHBvcnRzLm5sMmJyID0gbmwyYnI7XG5cbmZ1bmN0aW9uIHJhbmRvbShhcnIpIHtcbiAgcmV0dXJuIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV07XG59XG5cbmV4cG9ydHMucmFuZG9tID0gcmFuZG9tO1xuXG5mdW5jdGlvbiByZWplY3RhdHRyKGFyciwgYXR0cikge1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiAhaXRlbVthdHRyXTtcbiAgfSk7XG59XG5cbmV4cG9ydHMucmVqZWN0YXR0ciA9IHJlamVjdGF0dHI7XG5cbmZ1bmN0aW9uIHNlbGVjdGF0dHIoYXJyLCBhdHRyKSB7XG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuICEhaXRlbVthdHRyXTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuc2VsZWN0YXR0ciA9IHNlbGVjdGF0dHI7XG5cbmZ1bmN0aW9uIHJlcGxhY2Uoc3RyLCBvbGQsIG5ld18sIG1heENvdW50KSB7XG4gIHZhciBvcmlnaW5hbFN0ciA9IHN0cjtcblxuICBpZiAob2xkIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG9sZCwgbmV3Xyk7XG4gIH1cblxuICBpZiAodHlwZW9mIG1heENvdW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIG1heENvdW50ID0gLTE7XG4gIH1cblxuICB2YXIgcmVzID0gJyc7IC8vIE91dHB1dFxuICAvLyBDYXN0IE51bWJlcnMgaW4gdGhlIHNlYXJjaCB0ZXJtIHRvIHN0cmluZ1xuXG4gIGlmICh0eXBlb2Ygb2xkID09PSAnbnVtYmVyJykge1xuICAgIG9sZCA9ICcnICsgb2xkO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvbGQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gSWYgaXQgaXMgc29tZXRoaW5nIG90aGVyIHRoYW4gbnVtYmVyIG9yIHN0cmluZyxcbiAgICAvLyByZXR1cm4gdGhlIG9yaWdpbmFsIHN0cmluZ1xuICAgIHJldHVybiBzdHI7XG4gIH0gLy8gQ2FzdCBudW1iZXJzIGluIHRoZSByZXBsYWNlbWVudCB0byBzdHJpbmdcblxuXG4gIGlmICh0eXBlb2Ygc3RyID09PSAnbnVtYmVyJykge1xuICAgIHN0ciA9ICcnICsgc3RyO1xuICB9IC8vIElmIGJ5IG5vdywgd2UgZG9uJ3QgaGF2ZSBhIHN0cmluZywgdGhyb3cgaXQgYmFja1xuXG5cbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnICYmICEoc3RyIGluc3RhbmNlb2Ygci5TYWZlU3RyaW5nKSkge1xuICAgIHJldHVybiBzdHI7XG4gIH0gLy8gU2hvcnRDaXJjdWl0c1xuXG5cbiAgaWYgKG9sZCA9PT0gJycpIHtcbiAgICAvLyBNaW1pYyB0aGUgcHl0aG9uIGJlaGF2aW91cjogZW1wdHkgc3RyaW5nIGlzIHJlcGxhY2VkXG4gICAgLy8gYnkgcmVwbGFjZW1lbnQgZS5nLiBcImFiY1wifHJlcGxhY2UoXCJcIiwgXCIuXCIpIC0+IC5hLmIuYy5cbiAgICByZXMgPSBuZXdfICsgc3RyLnNwbGl0KCcnKS5qb2luKG5ld18pICsgbmV3XztcbiAgICByZXR1cm4gci5jb3B5U2FmZW5lc3Moc3RyLCByZXMpO1xuICB9XG5cbiAgdmFyIG5leHRJbmRleCA9IHN0ci5pbmRleE9mKG9sZCk7IC8vIGlmICMgb2YgcmVwbGFjZW1lbnRzIHRvIHBlcmZvcm0gaXMgMCwgb3IgdGhlIHN0cmluZyB0byBkb2VzXG4gIC8vIG5vdCBjb250YWluIHRoZSBvbGQgdmFsdWUsIHJldHVybiB0aGUgc3RyaW5nXG5cbiAgaWYgKG1heENvdW50ID09PSAwIHx8IG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgdmFyIHBvcyA9IDA7XG4gIHZhciBjb3VudCA9IDA7IC8vICMgb2YgcmVwbGFjZW1lbnRzIG1hZGVcblxuICB3aGlsZSAobmV4dEluZGV4ID4gLTEgJiYgKG1heENvdW50ID09PSAtMSB8fCBjb3VudCA8IG1heENvdW50KSkge1xuICAgIC8vIEdyYWIgdGhlIG5leHQgY2h1bmsgb2Ygc3JjIHN0cmluZyBhbmQgYWRkIGl0IHdpdGggdGhlXG4gICAgLy8gcmVwbGFjZW1lbnQsIHRvIHRoZSByZXN1bHRcbiAgICByZXMgKz0gc3RyLnN1YnN0cmluZyhwb3MsIG5leHRJbmRleCkgKyBuZXdfOyAvLyBJbmNyZW1lbnQgb3VyIHBvaW50ZXIgaW4gdGhlIHNyYyBzdHJpbmdcblxuICAgIHBvcyA9IG5leHRJbmRleCArIG9sZC5sZW5ndGg7XG4gICAgY291bnQrKzsgLy8gU2VlIGlmIHRoZXJlIGFyZSBhbnkgbW9yZSByZXBsYWNlbWVudHMgdG8gYmUgbWFkZVxuXG4gICAgbmV4dEluZGV4ID0gc3RyLmluZGV4T2Yob2xkLCBwb3MpO1xuICB9IC8vIFdlJ3ZlIGVpdGhlciByZWFjaGVkIHRoZSBlbmQsIG9yIGRvbmUgdGhlIG1heCAjIG9mXG4gIC8vIHJlcGxhY2VtZW50cywgdGFjayBvbiBhbnkgcmVtYWluaW5nIHN0cmluZ1xuXG5cbiAgaWYgKHBvcyA8IHN0ci5sZW5ndGgpIHtcbiAgICByZXMgKz0gc3RyLnN1YnN0cmluZyhwb3MpO1xuICB9XG5cbiAgcmV0dXJuIHIuY29weVNhZmVuZXNzKG9yaWdpbmFsU3RyLCByZXMpO1xufVxuXG5leHBvcnRzLnJlcGxhY2UgPSByZXBsYWNlO1xuXG5mdW5jdGlvbiByZXZlcnNlKHZhbCkge1xuICB2YXIgYXJyO1xuXG4gIGlmIChsaWIuaXNTdHJpbmcodmFsKSkge1xuICAgIGFyciA9IGxpc3QodmFsKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBDb3B5IGl0XG4gICAgYXJyID0gbGliLm1hcCh2YWwsIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdjtcbiAgICB9KTtcbiAgfVxuXG4gIGFyci5yZXZlcnNlKCk7XG5cbiAgaWYgKGxpYi5pc1N0cmluZyh2YWwpKSB7XG4gICAgcmV0dXJuIHIuY29weVNhZmVuZXNzKHZhbCwgYXJyLmpvaW4oJycpKTtcbiAgfVxuXG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydHMucmV2ZXJzZSA9IHJldmVyc2U7XG5cbmZ1bmN0aW9uIHJvdW5kKHZhbCwgcHJlY2lzaW9uLCBtZXRob2QpIHtcbiAgcHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDA7XG4gIHZhciBmYWN0b3IgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgdmFyIHJvdW5kZXI7XG5cbiAgaWYgKG1ldGhvZCA9PT0gJ2NlaWwnKSB7XG4gICAgcm91bmRlciA9IE1hdGguY2VpbDtcbiAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdmbG9vcicpIHtcbiAgICByb3VuZGVyID0gTWF0aC5mbG9vcjtcbiAgfSBlbHNlIHtcbiAgICByb3VuZGVyID0gTWF0aC5yb3VuZDtcbiAgfVxuXG4gIHJldHVybiByb3VuZGVyKHZhbCAqIGZhY3RvcikgLyBmYWN0b3I7XG59XG5cbmV4cG9ydHMucm91bmQgPSByb3VuZDtcblxuZnVuY3Rpb24gc2xpY2UoYXJyLCBzbGljZXMsIGZpbGxXaXRoKSB7XG4gIHZhciBzbGljZUxlbmd0aCA9IE1hdGguZmxvb3IoYXJyLmxlbmd0aCAvIHNsaWNlcyk7XG4gIHZhciBleHRyYSA9IGFyci5sZW5ndGggJSBzbGljZXM7XG4gIHZhciByZXMgPSBbXTtcbiAgdmFyIG9mZnNldCA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZXM7IGkrKykge1xuICAgIHZhciBzdGFydCA9IG9mZnNldCArIGkgKiBzbGljZUxlbmd0aDtcblxuICAgIGlmIChpIDwgZXh0cmEpIHtcbiAgICAgIG9mZnNldCsrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBvZmZzZXQgKyAoaSArIDEpICogc2xpY2VMZW5ndGg7XG4gICAgdmFyIGN1cnJTbGljZSA9IGFyci5zbGljZShzdGFydCwgZW5kKTtcblxuICAgIGlmIChmaWxsV2l0aCAmJiBpID49IGV4dHJhKSB7XG4gICAgICBjdXJyU2xpY2UucHVzaChmaWxsV2l0aCk7XG4gICAgfVxuXG4gICAgcmVzLnB1c2goY3VyclNsaWNlKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydHMuc2xpY2UgPSBzbGljZTtcblxuZnVuY3Rpb24gc3VtKGFyciwgYXR0ciwgc3RhcnQpIHtcbiAgaWYgKHN0YXJ0ID09PSB2b2lkIDApIHtcbiAgICBzdGFydCA9IDA7XG4gIH1cblxuICBpZiAoYXR0cikge1xuICAgIGFyciA9IGxpYi5tYXAoYXJyLCBmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIHZbYXR0cl07XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RhcnQgKyBhcnIucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgKyBiO1xuICB9LCAwKTtcbn1cblxuZXhwb3J0cy5zdW0gPSBzdW07XG5leHBvcnRzLnNvcnQgPSByLm1ha2VNYWNybyhbJ3ZhbHVlJywgJ3JldmVyc2UnLCAnY2FzZV9zZW5zaXRpdmUnLCAnYXR0cmlidXRlJ10sIFtdLCBmdW5jdGlvbiAoYXJyLCByZXZlcnNlZCwgY2FzZVNlbnMsIGF0dHIpIHtcbiAgLy8gQ29weSBpdFxuICB2YXIgYXJyYXkgPSBsaWIubWFwKGFyciwgZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdjtcbiAgfSk7XG4gIGFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgeCA9IGF0dHIgPyBhW2F0dHJdIDogYTtcbiAgICB2YXIgeSA9IGF0dHIgPyBiW2F0dHJdIDogYjtcblxuICAgIGlmICghY2FzZVNlbnMgJiYgbGliLmlzU3RyaW5nKHgpICYmIGxpYi5pc1N0cmluZyh5KSkge1xuICAgICAgeCA9IHgudG9Mb3dlckNhc2UoKTtcbiAgICAgIHkgPSB5LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKHggPCB5KSB7XG4gICAgICByZXR1cm4gcmV2ZXJzZWQgPyAxIDogLTE7XG4gICAgfSBlbHNlIGlmICh4ID4geSkge1xuICAgICAgcmV0dXJuIHJldmVyc2VkID8gLTEgOiAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYXJyYXk7XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nKG9iaikge1xuICByZXR1cm4gci5jb3B5U2FmZW5lc3Mob2JqLCBvYmopO1xufVxuXG5leHBvcnRzLnN0cmluZyA9IHN0cmluZztcblxuZnVuY3Rpb24gc3RyaXB0YWdzKGlucHV0LCBwcmVzZXJ2ZUxpbmVicmVha3MpIHtcbiAgaW5wdXQgPSBub3JtYWxpemUoaW5wdXQsICcnKTtcbiAgdmFyIHRhZ3MgPSAvPFxcLz8oW2Etel1bYS16MC05XSopXFxiW14+XSo+fDwhLS1bXFxzXFxTXSo/LS0+L2dpO1xuICB2YXIgdHJpbW1lZElucHV0ID0gdHJpbShpbnB1dC5yZXBsYWNlKHRhZ3MsICcnKSk7XG4gIHZhciByZXMgPSAnJztcblxuICBpZiAocHJlc2VydmVMaW5lYnJlYWtzKSB7XG4gICAgcmVzID0gdHJpbW1lZElucHV0LnJlcGxhY2UoL14gK3wgKyQvZ20sICcnKSAvLyByZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgc3BhY2VzXG4gICAgLnJlcGxhY2UoLyArL2csICcgJykgLy8gc3F1YXNoIGFkamFjZW50IHNwYWNlc1xuICAgIC5yZXBsYWNlKC8oXFxyXFxuKS9nLCAnXFxuJykgLy8gbm9ybWFsaXplIGxpbmVicmVha3MgKENSTEYgLT4gTEYpXG4gICAgLnJlcGxhY2UoL1xcblxcblxcbisvZywgJ1xcblxcbicpOyAvLyBzcXVhc2ggYWJub3JtYWwgYWRqYWNlbnQgbGluZWJyZWFrc1xuICB9IGVsc2Uge1xuICAgIHJlcyA9IHRyaW1tZWRJbnB1dC5yZXBsYWNlKC9cXHMrL2dpLCAnICcpO1xuICB9XG5cbiAgcmV0dXJuIHIuY29weVNhZmVuZXNzKGlucHV0LCByZXMpO1xufVxuXG5leHBvcnRzLnN0cmlwdGFncyA9IHN0cmlwdGFncztcblxuZnVuY3Rpb24gdGl0bGUoc3RyKSB7XG4gIHN0ciA9IG5vcm1hbGl6ZShzdHIsICcnKTtcbiAgdmFyIHdvcmRzID0gc3RyLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgcmV0dXJuIGNhcGl0YWxpemUod29yZCk7XG4gIH0pO1xuICByZXR1cm4gci5jb3B5U2FmZW5lc3Moc3RyLCB3b3Jkcy5qb2luKCcgJykpO1xufVxuXG5leHBvcnRzLnRpdGxlID0gdGl0bGU7XG5cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiByLmNvcHlTYWZlbmVzcyhzdHIsIHN0ci5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJykpO1xufVxuXG5leHBvcnRzLnRyaW0gPSB0cmltO1xuXG5mdW5jdGlvbiB0cnVuY2F0ZShpbnB1dCwgbGVuZ3RoLCBraWxsd29yZHMsIGVuZCkge1xuICB2YXIgb3JpZyA9IGlucHV0O1xuICBpbnB1dCA9IG5vcm1hbGl6ZShpbnB1dCwgJycpO1xuICBsZW5ndGggPSBsZW5ndGggfHwgMjU1O1xuXG4gIGlmIChpbnB1dC5sZW5ndGggPD0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgaWYgKGtpbGx3b3Jkcykge1xuICAgIGlucHV0ID0gaW5wdXQuc3Vic3RyaW5nKDAsIGxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGlkeCA9IGlucHV0Lmxhc3RJbmRleE9mKCcgJywgbGVuZ3RoKTtcblxuICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICBpZHggPSBsZW5ndGg7XG4gICAgfVxuXG4gICAgaW5wdXQgPSBpbnB1dC5zdWJzdHJpbmcoMCwgaWR4KTtcbiAgfVxuXG4gIGlucHV0ICs9IGVuZCAhPT0gdW5kZWZpbmVkICYmIGVuZCAhPT0gbnVsbCA/IGVuZCA6ICcuLi4nO1xuICByZXR1cm4gci5jb3B5U2FmZW5lc3Mob3JpZywgaW5wdXQpO1xufVxuXG5leHBvcnRzLnRydW5jYXRlID0gdHJ1bmNhdGU7XG5cbmZ1bmN0aW9uIHVwcGVyKHN0cikge1xuICBzdHIgPSBub3JtYWxpemUoc3RyLCAnJyk7XG4gIHJldHVybiBzdHIudG9VcHBlckNhc2UoKTtcbn1cblxuZXhwb3J0cy51cHBlciA9IHVwcGVyO1xuXG5mdW5jdGlvbiB1cmxlbmNvZGUob2JqKSB7XG4gIHZhciBlbmMgPSBlbmNvZGVVUklDb21wb25lbnQ7XG5cbiAgaWYgKGxpYi5pc1N0cmluZyhvYmopKSB7XG4gICAgcmV0dXJuIGVuYyhvYmopO1xuICB9IGVsc2Uge1xuICAgIHZhciBrZXl2YWxzID0gbGliLmlzQXJyYXkob2JqKSA/IG9iaiA6IGxpYi5fZW50cmllcyhvYmopO1xuICAgIHJldHVybiBrZXl2YWxzLm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBrID0gX3JlZjJbMF0sXG4gICAgICAgICAgdiA9IF9yZWYyWzFdO1xuICAgICAgcmV0dXJuIGVuYyhrKSArIFwiPVwiICsgZW5jKHYpO1xuICAgIH0pLmpvaW4oJyYnKTtcbiAgfVxufVxuXG5leHBvcnRzLnVybGVuY29kZSA9IHVybGVuY29kZTsgLy8gRm9yIHRoZSBqaW5qYSByZWdleHAsIHNlZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21pdHN1aGlrby9qaW5qYTIvYmxvYi9mMTViODE0ZGNiYTZhYTEyYmM3NGQxZjdkMGM4ODFkNTVmNzEyNmJlL2ppbmphMi91dGlscy5weSNMMjAtTDIzXG5cbnZhciBwdW5jUmUgPSAvXig/OlxcKHw8fCZsdDspPyguKj8pKD86XFwufCx8XFwpfFxcbnwmZ3Q7KT8kLzsgLy8gZnJvbSBodHRwOi8vYmxvZy5nZXJ2Lm5ldC8yMDExLzA1L2h0bWw1X2VtYWlsX2FkZHJlc3NfcmVnZXhwL1xuXG52YXIgZW1haWxSZSA9IC9eW1xcdy4hIyQlJicqK1xcLVxcLz0/XFxeYHt8fX5dK0BbYS16XFxkXFwtXSsoXFwuW2EtelxcZFxcLV0rKSskL2k7XG52YXIgaHR0cEh0dHBzUmUgPSAvXmh0dHBzPzpcXC9cXC8uKiQvO1xudmFyIHd3d1JlID0gL153d3dcXC4vO1xudmFyIHRsZFJlID0gL1xcLig/Om9yZ3xuZXR8Y29tKSg/OlxcOnxcXC98JCkvO1xuXG5mdW5jdGlvbiB1cmxpemUoc3RyLCBsZW5ndGgsIG5vZm9sbG93KSB7XG4gIGlmIChpc05hTihsZW5ndGgpKSB7XG4gICAgbGVuZ3RoID0gSW5maW5pdHk7XG4gIH1cblxuICB2YXIgbm9Gb2xsb3dBdHRyID0gbm9mb2xsb3cgPT09IHRydWUgPyAnIHJlbD1cIm5vZm9sbG93XCInIDogJyc7XG4gIHZhciB3b3JkcyA9IHN0ci5zcGxpdCgvKFxccyspLykuZmlsdGVyKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgLy8gSWYgdGhlIHdvcmQgaGFzIG5vIGxlbmd0aCwgYmFpbC4gVGhpcyBjYW4gaGFwcGVuIGZvciBzdHIgd2l0aFxuICAgIC8vIHRyYWlsaW5nIHdoaXRlc3BhY2UuXG4gICAgcmV0dXJuIHdvcmQgJiYgd29yZC5sZW5ndGg7XG4gIH0pLm1hcChmdW5jdGlvbiAod29yZCkge1xuICAgIHZhciBtYXRjaGVzID0gd29yZC5tYXRjaChwdW5jUmUpO1xuICAgIHZhciBwb3NzaWJsZVVybCA9IG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogd29yZDtcbiAgICB2YXIgc2hvcnRVcmwgPSBwb3NzaWJsZVVybC5zdWJzdHIoMCwgbGVuZ3RoKTsgLy8gdXJsIHRoYXQgc3RhcnRzIHdpdGggaHR0cCBvciBodHRwc1xuXG4gICAgaWYgKGh0dHBIdHRwc1JlLnRlc3QocG9zc2libGVVcmwpKSB7XG4gICAgICByZXR1cm4gXCI8YSBocmVmPVxcXCJcIiArIHBvc3NpYmxlVXJsICsgXCJcXFwiXCIgKyBub0ZvbGxvd0F0dHIgKyBcIj5cIiArIHNob3J0VXJsICsgXCI8L2E+XCI7XG4gICAgfSAvLyB1cmwgdGhhdCBzdGFydHMgd2l0aCB3d3cuXG5cblxuICAgIGlmICh3d3dSZS50ZXN0KHBvc3NpYmxlVXJsKSkge1xuICAgICAgcmV0dXJuIFwiPGEgaHJlZj1cXFwiaHR0cDovL1wiICsgcG9zc2libGVVcmwgKyBcIlxcXCJcIiArIG5vRm9sbG93QXR0ciArIFwiPlwiICsgc2hvcnRVcmwgKyBcIjwvYT5cIjtcbiAgICB9IC8vIGFuIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIGZvcm0gdXNlcm5hbWVAZG9tYWluLnRsZFxuXG5cbiAgICBpZiAoZW1haWxSZS50ZXN0KHBvc3NpYmxlVXJsKSkge1xuICAgICAgcmV0dXJuIFwiPGEgaHJlZj1cXFwibWFpbHRvOlwiICsgcG9zc2libGVVcmwgKyBcIlxcXCI+XCIgKyBwb3NzaWJsZVVybCArIFwiPC9hPlwiO1xuICAgIH0gLy8gdXJsIHRoYXQgZW5kcyBpbiAuY29tLCAub3JnIG9yIC5uZXQgdGhhdCBpcyBub3QgYW4gZW1haWwgYWRkcmVzc1xuXG5cbiAgICBpZiAodGxkUmUudGVzdChwb3NzaWJsZVVybCkpIHtcbiAgICAgIHJldHVybiBcIjxhIGhyZWY9XFxcImh0dHA6Ly9cIiArIHBvc3NpYmxlVXJsICsgXCJcXFwiXCIgKyBub0ZvbGxvd0F0dHIgKyBcIj5cIiArIHNob3J0VXJsICsgXCI8L2E+XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmQ7XG4gIH0pO1xuICByZXR1cm4gd29yZHMuam9pbignJyk7XG59XG5cbmV4cG9ydHMudXJsaXplID0gdXJsaXplO1xuXG5mdW5jdGlvbiB3b3JkY291bnQoc3RyKSB7XG4gIHN0ciA9IG5vcm1hbGl6ZShzdHIsICcnKTtcbiAgdmFyIHdvcmRzID0gc3RyID8gc3RyLm1hdGNoKC9cXHcrL2cpIDogbnVsbDtcbiAgcmV0dXJuIHdvcmRzID8gd29yZHMubGVuZ3RoIDogbnVsbDtcbn1cblxuZXhwb3J0cy53b3JkY291bnQgPSB3b3JkY291bnQ7XG5cbmZ1bmN0aW9uIGZsb2F0KHZhbCwgZGVmKSB7XG4gIHZhciByZXMgPSBwYXJzZUZsb2F0KHZhbCk7XG4gIHJldHVybiBpc05hTihyZXMpID8gZGVmIDogcmVzO1xufVxuXG5leHBvcnRzLmZsb2F0ID0gZmxvYXQ7XG5cbmZ1bmN0aW9uIGludCh2YWwsIGRlZikge1xuICB2YXIgcmVzID0gcGFyc2VJbnQodmFsLCAxMCk7XG4gIHJldHVybiBpc05hTihyZXMpID8gZGVmIDogcmVzO1xufVxuXG5leHBvcnRzLmludCA9IGludDsgLy8gQWxpYXNlc1xuXG5leHBvcnRzLmQgPSBleHBvcnRzLmRlZmF1bHQ7XG5leHBvcnRzLmUgPSBleHBvcnRzLmVzY2FwZTtcblxuLyoqKi8gfSksXG4vKiAxMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgU2FmZVN0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oMikuU2FmZVN0cmluZztcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAqIEBwYXJhbSB7IGFueSB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5cblxuZnVuY3Rpb24gY2FsbGFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0cy5jYWxsYWJsZSA9IGNhbGxhYmxlO1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0IGlzIHN0cmljdGx5IG5vdCBgdW5kZWZpbmVkYC5cbiAqIEBwYXJhbSB7IGFueSB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5cbmZ1bmN0aW9uIGRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydHMuZGVmaW5lZCA9IGRlZmluZWQ7XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvcGVyYW5kIChvbmUpIGlzIGRpdmlzYmxlIGJ5IHRoZSB0ZXN0J3MgYXJndW1lbnRcbiAqICh0d28pLlxuICogQHBhcmFtIHsgbnVtYmVyIH0gb25lXG4gKiBAcGFyYW0geyBudW1iZXIgfSB0d29cbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gZGl2aXNpYmxlYnkob25lLCB0d28pIHtcbiAgcmV0dXJuIG9uZSAlIHR3byA9PT0gMDtcbn1cblxuZXhwb3J0cy5kaXZpc2libGVieSA9IGRpdmlzaWJsZWJ5O1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHN0cmluZyBoYXMgYmVlbiBlc2NhcGVkIChpLmUuLCBpcyBhIFNhZmVTdHJpbmcpLlxuICogQHBhcmFtIHsgYW55IH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBTYWZlU3RyaW5nO1xufVxuXG5leHBvcnRzLmVzY2FwZWQgPSBlc2NhcGVkO1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBzdHJpY3RseSBlcXVhbC5cbiAqIEBwYXJhbSB7IGFueSB9IG9uZVxuICogQHBhcmFtIHsgYW55IH0gdHdvXG4gKi9cblxuZnVuY3Rpb24gZXF1YWx0byhvbmUsIHR3bykge1xuICByZXR1cm4gb25lID09PSB0d287XG59XG5cbmV4cG9ydHMuZXF1YWx0byA9IGVxdWFsdG87IC8vIEFsaWFzZXNcblxuZXhwb3J0cy5lcSA9IGV4cG9ydHMuZXF1YWx0bztcbmV4cG9ydHMuc2FtZWFzID0gZXhwb3J0cy5lcXVhbHRvO1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgZXZlbmx5IGRpdmlzaWJsZSBieSAyLlxuICogQHBhcmFtIHsgbnVtYmVyIH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gZXZlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJSAyID09PSAwO1xufVxuXG5leHBvcnRzLmV2ZW4gPSBldmVuO1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgZmFsc3kgLSBpZiBJIHJlY2FsbCBjb3JyZWN0bHksICcnLCAwLCBmYWxzZSxcbiAqIHVuZGVmaW5lZCwgTmFOIG9yIG51bGwuIEkgZG9uJ3Qga25vdyBpZiB3ZSBzaG91bGQgc3RpY2sgdG8gdGhlIGRlZmF1bHQgSlNcbiAqIGJlaGF2aW9yIG9yIGF0dGVtcHQgdG8gcmVwbGljYXRlIHdoYXQgUHl0aG9uIGJlbGlldmVzIHNob3VsZCBiZSBmYWxzeSAoaS5lLixcbiAqIGVtcHR5IGFycmF5cywgZW1wdHkgZGljdHMsIG5vdCAwLi4uKS5cbiAqIEBwYXJhbSB7IGFueSB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5cbmZ1bmN0aW9uIGZhbHN5KHZhbHVlKSB7XG4gIHJldHVybiAhdmFsdWU7XG59XG5cbmV4cG9ydHMuZmFsc3kgPSBmYWxzeTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9wZXJhbmQgKG9uZSkgaXMgZ3JlYXRlciBvciBlcXVhbCB0byB0aGUgdGVzdCdzXG4gKiBhcmd1bWVudCAodHdvKS5cbiAqIEBwYXJhbSB7IG51bWJlciB9IG9uZVxuICogQHBhcmFtIHsgbnVtYmVyIH0gdHdvXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5cbmZ1bmN0aW9uIGdlKG9uZSwgdHdvKSB7XG4gIHJldHVybiBvbmUgPj0gdHdvO1xufVxuXG5leHBvcnRzLmdlID0gZ2U7XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvcGVyYW5kIChvbmUpIGlzIGdyZWF0ZXIgdGhhbiB0aGUgdGVzdCdzIGFyZ3VtZW50XG4gKiAodHdvKS5cbiAqIEBwYXJhbSB7IG51bWJlciB9IG9uZVxuICogQHBhcmFtIHsgbnVtYmVyIH0gdHdvXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5cbmZ1bmN0aW9uIGdyZWF0ZXJ0aGFuKG9uZSwgdHdvKSB7XG4gIHJldHVybiBvbmUgPiB0d287XG59XG5cbmV4cG9ydHMuZ3JlYXRlcnRoYW4gPSBncmVhdGVydGhhbjsgLy8gYWxpYXNcblxuZXhwb3J0cy5ndCA9IGV4cG9ydHMuZ3JlYXRlcnRoYW47XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvcGVyYW5kIChvbmUpIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgdGVzdCdzXG4gKiBhcmd1bWVudCAodHdvKS5cbiAqIEBwYXJhbSB7IG51bWJlciB9IG9uZVxuICogQHBhcmFtIHsgbnVtYmVyIH0gdHdvXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5cbmZ1bmN0aW9uIGxlKG9uZSwgdHdvKSB7XG4gIHJldHVybiBvbmUgPD0gdHdvO1xufVxuXG5leHBvcnRzLmxlID0gbGU7XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvcGVyYW5kIChvbmUpIGlzIGxlc3MgdGhhbiB0aGUgdGVzdCdzIHBhc3NlZCBhcmd1bWVudFxuICogKHR3bykuXG4gKiBAcGFyYW0geyBudW1iZXIgfSBvbmVcbiAqIEBwYXJhbSB7IG51bWJlciB9IHR3b1xuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuXG5mdW5jdGlvbiBsZXNzdGhhbihvbmUsIHR3bykge1xuICByZXR1cm4gb25lIDwgdHdvO1xufVxuXG5leHBvcnRzLmxlc3N0aGFuID0gbGVzc3RoYW47IC8vIGFsaWFzXG5cbmV4cG9ydHMubHQgPSBleHBvcnRzLmxlc3N0aGFuO1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3RyaW5nIGlzIGxvd2VyY2FzZWQuXG4gKiBAcGFyYW0geyBzdHJpbmcgfSB2YWx1ZVxuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuXG5mdW5jdGlvbiBsb3dlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gdmFsdWU7XG59XG5cbmV4cG9ydHMubG93ZXIgPSBsb3dlcjtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9wZXJhbmQgKG9uZSkgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSB0ZXN0J3NcbiAqIGFyZ3VtZW50ICh0d28pLlxuICogQHBhcmFtIHsgbnVtYmVyIH0gb25lXG4gKiBAcGFyYW0geyBudW1iZXIgfSB0d29cbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gbmUob25lLCB0d28pIHtcbiAgcmV0dXJuIG9uZSAhPT0gdHdvO1xufVxuXG5leHBvcnRzLm5lID0gbmU7XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgc3RyaWN0bHkgZXF1YWwgdG8gYG51bGxgLlxuICogQHBhcmFtIHsgYW55IH1cbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gbnVsbFRlc3QodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xufVxuXG5leHBvcnRzLm51bGwgPSBudWxsVGVzdDtcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQHBhcmFtIHsgYW55IH1cbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gbnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xufVxuXG5leHBvcnRzLm51bWJlciA9IG51bWJlcjtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzICpub3QqIGV2ZW5seSBkaXZpc2libGUgYnkgMi5cbiAqIEBwYXJhbSB7IG51bWJlciB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5cbmZ1bmN0aW9uIG9kZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJSAyID09PSAxO1xufVxuXG5leHBvcnRzLm9kZCA9IG9kZDtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nLCBgZmFsc2VgIGlmIG5vdC5cbiAqIEBwYXJhbSB7IGFueSB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5cbmZ1bmN0aW9uIHN0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuZXhwb3J0cy5zdHJpbmcgPSBzdHJpbmc7XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBub3QgaW4gdGhlIGxpc3Qgb2YgdGhpbmdzIGNvbnNpZGVyZWQgZmFsc3k6XG4gKiAnJywgbnVsbCwgdW5kZWZpbmVkLCAwLCBOYU4gYW5kIGZhbHNlLlxuICogQHBhcmFtIHsgYW55IH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gdHJ1dGh5KHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlO1xufVxuXG5leHBvcnRzLnRydXRoeSA9IHRydXRoeTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAqIEBwYXJhbSB7IGFueSB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5cbmZ1bmN0aW9uIHVuZGVmaW5lZFRlc3QodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydHMudW5kZWZpbmVkID0gdW5kZWZpbmVkVGVzdDtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHN0cmluZyBpcyB1cHBlcmNhc2VkLlxuICogQHBhcmFtIHsgc3RyaW5nIH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cblxuZnVuY3Rpb24gdXBwZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnRvVXBwZXJDYXNlKCkgPT09IHZhbHVlO1xufVxuXG5leHBvcnRzLnVwcGVyID0gdXBwZXI7XG4vKipcbiAqIElmIEVTNiBmZWF0dXJlcyBhcmUgYXZhaWxhYmxlLCByZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaW1wbGVtZW50cyB0aGVcbiAqIGBTeW1ib2wuaXRlcmF0b3JgIG1ldGhvZC4gSWYgbm90LCBpdCdzIGEgc3RyaW5nIG9yIEFycmF5LlxuICpcbiAqIENvdWxkIHBvdGVudGlhbGx5IGNhdXNlIGlzc3VlcyBpZiBhIGJyb3dzZXIgZXhpc3RzIHRoYXQgaGFzIFNldCBhbmQgTWFwIGJ1dFxuICogbm90IFN5bWJvbC5cbiAqXG4gKiBAcGFyYW0geyBhbnkgfSB2YWx1ZVxuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuXG5mdW5jdGlvbiBpdGVyYWJsZSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gISF2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICB9XG59XG5cbmV4cG9ydHMuaXRlcmFibGUgPSBpdGVyYWJsZTtcbi8qKlxuICogSWYgRVM2IGZlYXR1cmVzIGFyZSBhdmFpbGFibGUsIHJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QgaGFzaFxuICogb3IgYW4gRVM2IE1hcC4gT3RoZXJ3aXNlIGp1c3QgcmV0dXJuIGlmIGl0J3MgYW4gb2JqZWN0IGhhc2guXG4gKiBAcGFyYW0geyBhbnkgfSB2YWx1ZVxuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuXG5mdW5jdGlvbiBtYXBwaW5nKHZhbHVlKSB7XG4gIC8vIG9ubHkgbWFwcyBhbmQgb2JqZWN0IGhhc2hlc1xuICB2YXIgYm9vbCA9IHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG5cbiAgaWYgKFNldCkge1xuICAgIHJldHVybiBib29sICYmICEodmFsdWUgaW5zdGFuY2VvZiBTZXQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBib29sO1xuICB9XG59XG5cbmV4cG9ydHMubWFwcGluZyA9IG1hcHBpbmc7XG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gX2N5Y2xlcihpdGVtcykge1xuICB2YXIgaW5kZXggPSAtMTtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50OiBudWxsLFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIGluZGV4ID0gLTE7XG4gICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuICAgIH0sXG4gICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIGlmIChpbmRleCA+PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN1cnJlbnQgPSBpdGVtc1tpbmRleF07XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gX2pvaW5lcihzZXApIHtcbiAgc2VwID0gc2VwIHx8ICcsJztcbiAgdmFyIGZpcnN0ID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsID0gZmlyc3QgPyAnJyA6IHNlcDtcbiAgICBmaXJzdCA9IGZhbHNlO1xuICAgIHJldHVybiB2YWw7XG4gIH07XG59IC8vIE1ha2luZyB0aGlzIGEgZnVuY3Rpb24gaW5zdGVhZCBzbyBpdCByZXR1cm5zIGEgbmV3IG9iamVjdFxuLy8gZWFjaCB0aW1lIGl0J3MgY2FsbGVkLiBUaGF0IHdheSwgaWYgc29tZXRoaW5nIGxpa2UgYW4gZW52aXJvbm1lbnRcbi8vIHVzZXMgaXQsIHRoZXkgd2lsbCBlYWNoIGhhdmUgdGhlaXIgb3duIGNvcHkuXG5cblxuZnVuY3Rpb24gZ2xvYmFscygpIHtcbiAgcmV0dXJuIHtcbiAgICByYW5nZTogZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICAgIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc3RvcCA9IHN0YXJ0O1xuICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgIHN0ZXAgPSAxO1xuICAgICAgfSBlbHNlIGlmICghc3RlcCkge1xuICAgICAgICBzdGVwID0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFyciA9IFtdO1xuXG4gICAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgICAgICAgYXJyLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gc3RhcnQ7IF9pID4gc3RvcDsgX2kgKz0gc3RlcCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZm9yLWRpcmVjdGlvblxuICAgICAgICAgIGFyci5wdXNoKF9pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0sXG4gICAgY3ljbGVyOiBmdW5jdGlvbiBjeWNsZXIoKSB7XG4gICAgICByZXR1cm4gX2N5Y2xlcihBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9LFxuICAgIGpvaW5lcjogZnVuY3Rpb24gam9pbmVyKHNlcCkge1xuICAgICAgcmV0dXJuIF9qb2luZXIoc2VwKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFscztcblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgcGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXhwcmVzcyhlbnYsIGFwcCkge1xuICBmdW5jdGlvbiBOdW5qdWNrc1ZpZXcobmFtZSwgb3B0cykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYXRoID0gbmFtZTtcbiAgICB0aGlzLmRlZmF1bHRFbmdpbmUgPSBvcHRzLmRlZmF1bHRFbmdpbmU7XG4gICAgdGhpcy5leHQgPSBwYXRoLmV4dG5hbWUobmFtZSk7XG5cbiAgICBpZiAoIXRoaXMuZXh0ICYmICF0aGlzLmRlZmF1bHRFbmdpbmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZGVmYXVsdCBlbmdpbmUgd2FzIHNwZWNpZmllZCBhbmQgbm8gZXh0ZW5zaW9uIHdhcyBwcm92aWRlZC4nKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZXh0KSB7XG4gICAgICB0aGlzLm5hbWUgKz0gdGhpcy5leHQgPSAodGhpcy5kZWZhdWx0RW5naW5lWzBdICE9PSAnLicgPyAnLicgOiAnJykgKyB0aGlzLmRlZmF1bHRFbmdpbmU7XG4gICAgfVxuICB9XG5cbiAgTnVuanVja3NWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIob3B0cywgY2IpIHtcbiAgICBlbnYucmVuZGVyKHRoaXMubmFtZSwgb3B0cywgY2IpO1xuICB9O1xuXG4gIGFwcC5zZXQoJ3ZpZXcnLCBOdW5qdWNrc1ZpZXcpO1xuICBhcHAuc2V0KCdudW5qdWNrc0VudicsIGVudik7XG4gIHJldHVybiBlbnY7XG59O1xuXG4vKioqLyB9KSxcbi8qIDE2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmZ1bmN0aW9uIGluc3RhbGxDb21wYXQoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIC8vIFRoaXMgbXVzdCBiZSBjYWxsZWQgbGlrZSBgbnVuanVja3MuaW5zdGFsbENvbXBhdGAgc28gdGhhdCBgdGhpc2BcbiAgLy8gcmVmZXJlbmNlcyB0aGUgbnVuanVja3MgaW5zdGFuY2VcblxuICB2YXIgcnVudGltZSA9IHRoaXMucnVudGltZTtcbiAgdmFyIGxpYiA9IHRoaXMubGliOyAvLyBIYW5kbGUgc2xpbSBjYXNlIHdoZXJlIHRoZXNlICdtb2R1bGVzJyBhcmUgZXhjbHVkZWQgZnJvbSB0aGUgYnVpbHQgc291cmNlXG5cbiAgdmFyIENvbXBpbGVyID0gdGhpcy5jb21waWxlci5Db21waWxlcjtcbiAgdmFyIFBhcnNlciA9IHRoaXMucGFyc2VyLlBhcnNlcjtcbiAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgdmFyIGxleGVyID0gdGhpcy5sZXhlcjtcbiAgdmFyIG9yaWdfY29udGV4dE9yRnJhbWVMb29rdXAgPSBydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwO1xuICB2YXIgb3JpZ19tZW1iZXJMb29rdXAgPSBydW50aW1lLm1lbWJlckxvb2t1cDtcbiAgdmFyIG9yaWdfQ29tcGlsZXJfYXNzZXJ0VHlwZTtcbiAgdmFyIG9yaWdfUGFyc2VyX3BhcnNlQWdncmVnYXRlO1xuXG4gIGlmIChDb21waWxlcikge1xuICAgIG9yaWdfQ29tcGlsZXJfYXNzZXJ0VHlwZSA9IENvbXBpbGVyLnByb3RvdHlwZS5hc3NlcnRUeXBlO1xuICB9XG5cbiAgaWYgKFBhcnNlcikge1xuICAgIG9yaWdfUGFyc2VyX3BhcnNlQWdncmVnYXRlID0gUGFyc2VyLnByb3RvdHlwZS5wYXJzZUFnZ3JlZ2F0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuaW5zdGFsbCgpIHtcbiAgICBydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwID0gb3JpZ19jb250ZXh0T3JGcmFtZUxvb2t1cDtcbiAgICBydW50aW1lLm1lbWJlckxvb2t1cCA9IG9yaWdfbWVtYmVyTG9va3VwO1xuXG4gICAgaWYgKENvbXBpbGVyKSB7XG4gICAgICBDb21waWxlci5wcm90b3R5cGUuYXNzZXJ0VHlwZSA9IG9yaWdfQ29tcGlsZXJfYXNzZXJ0VHlwZTtcbiAgICB9XG5cbiAgICBpZiAoUGFyc2VyKSB7XG4gICAgICBQYXJzZXIucHJvdG90eXBlLnBhcnNlQWdncmVnYXRlID0gb3JpZ19QYXJzZXJfcGFyc2VBZ2dyZWdhdGU7XG4gICAgfVxuICB9XG5cbiAgcnVudGltZS5jb250ZXh0T3JGcmFtZUxvb2t1cCA9IGZ1bmN0aW9uIGNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBrZXkpIHtcbiAgICB2YXIgdmFsID0gb3JpZ19jb250ZXh0T3JGcmFtZUxvb2t1cC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdUcnVlJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgIGNhc2UgJ0ZhbHNlJzpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBjYXNlICdOb25lJzpcbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFRva2Vuc1N0YXRlKHRva2Vucykge1xuICAgIHJldHVybiB7XG4gICAgICBpbmRleDogdG9rZW5zLmluZGV4LFxuICAgICAgbGluZW5vOiB0b2tlbnMubGluZW5vLFxuICAgICAgY29sbm86IHRva2Vucy5jb2xub1xuICAgIH07XG4gIH1cblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLyBpLmUuLCBub3Qgc2xpbSBtb2RlXG4gICAgdmFyIFNsaWNlID0gbm9kZXMuTm9kZS5leHRlbmQoJ1NsaWNlJywge1xuICAgICAgZmllbGRzOiBbJ3N0YXJ0JywgJ3N0b3AnLCAnc3RlcCddLFxuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdChsaW5lbm8sIGNvbG5vLCBzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgICAgICBzdGFydCA9IHN0YXJ0IHx8IG5ldyBub2Rlcy5MaXRlcmFsKGxpbmVubywgY29sbm8sIG51bGwpO1xuICAgICAgICBzdG9wID0gc3RvcCB8fCBuZXcgbm9kZXMuTGl0ZXJhbChsaW5lbm8sIGNvbG5vLCBudWxsKTtcbiAgICAgICAgc3RlcCA9IHN0ZXAgfHwgbmV3IG5vZGVzLkxpdGVyYWwobGluZW5vLCBjb2xubywgMSk7XG4gICAgICAgIHRoaXMucGFyZW50KGxpbmVubywgY29sbm8sIHN0YXJ0LCBzdG9wLCBzdGVwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIENvbXBpbGVyLnByb3RvdHlwZS5hc3NlcnRUeXBlID0gZnVuY3Rpb24gYXNzZXJ0VHlwZShub2RlKSB7XG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFNsaWNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgb3JpZ19Db21waWxlcl9hc3NlcnRUeXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIENvbXBpbGVyLnByb3RvdHlwZS5jb21waWxlU2xpY2UgPSBmdW5jdGlvbiBjb21waWxlU2xpY2Uobm9kZSwgZnJhbWUpIHtcbiAgICAgIHRoaXMuX2VtaXQoJygnKTtcblxuICAgICAgdGhpcy5fY29tcGlsZUV4cHJlc3Npb24obm9kZS5zdGFydCwgZnJhbWUpO1xuXG4gICAgICB0aGlzLl9lbWl0KCcpLCgnKTtcblxuICAgICAgdGhpcy5fY29tcGlsZUV4cHJlc3Npb24obm9kZS5zdG9wLCBmcmFtZSk7XG5cbiAgICAgIHRoaXMuX2VtaXQoJyksKCcpO1xuXG4gICAgICB0aGlzLl9jb21waWxlRXhwcmVzc2lvbihub2RlLnN0ZXAsIGZyYW1lKTtcblxuICAgICAgdGhpcy5fZW1pdCgnKScpO1xuICAgIH07XG5cbiAgICBQYXJzZXIucHJvdG90eXBlLnBhcnNlQWdncmVnYXRlID0gZnVuY3Rpb24gcGFyc2VBZ2dyZWdhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb3JpZ1N0YXRlID0gZ2V0VG9rZW5zU3RhdGUodGhpcy50b2tlbnMpOyAvLyBTZXQgYmFjayBvbmUgYWNjb3VudGluZyBmb3Igb3BlbmluZyBicmFja2V0L3BhcmVuc1xuXG4gICAgICBvcmlnU3RhdGUuY29sbm8tLTtcbiAgICAgIG9yaWdTdGF0ZS5pbmRleC0tO1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gb3JpZ19QYXJzZXJfcGFyc2VBZ2dyZWdhdGUuYXBwbHkodGhpcyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHZhciBlcnJTdGF0ZSA9IGdldFRva2Vuc1N0YXRlKHRoaXMudG9rZW5zKTtcblxuICAgICAgICB2YXIgcmV0aHJvdyA9IGZ1bmN0aW9uIHJldGhyb3coKSB7XG4gICAgICAgICAgbGliLl9hc3NpZ24oX3RoaXMudG9rZW5zLCBlcnJTdGF0ZSk7XG5cbiAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfTsgLy8gUmVzZXQgdG8gc3RhdGUgYmVmb3JlIG9yaWdpbmFsIHBhcnNlQWdncmVnYXRlIGNhbGxlZFxuXG5cbiAgICAgICAgbGliLl9hc3NpZ24odGhpcy50b2tlbnMsIG9yaWdTdGF0ZSk7XG5cbiAgICAgICAgdGhpcy5wZWVrZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHRvayA9IHRoaXMucGVla1Rva2VuKCk7XG5cbiAgICAgICAgaWYgKHRvay50eXBlICE9PSBsZXhlci5UT0tFTl9MRUZUX0JSQUNLRVQpIHtcbiAgICAgICAgICB0aHJvdyByZXRocm93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5uZXh0VG9rZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBub2RlID0gbmV3IFNsaWNlKHRvay5saW5lbm8sIHRvay5jb2xubyk7IC8vIElmIHdlIGRvbid0IGVuY291bnRlciBhIGNvbG9uIHdoaWxlIHBhcnNpbmcsIHRoaXMgaXMgbm90IGEgc2xpY2UsXG4gICAgICAgIC8vIHNvIHJlLXJhaXNlIHRoZSBvcmlnaW5hbCBleGNlcHRpb24uXG5cbiAgICAgICAgdmFyIGlzU2xpY2UgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBub2RlLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLnNraXAobGV4ZXIuVE9LRU5fUklHSFRfQlJBQ0tFVCkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpID09PSBub2RlLmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChpc1NsaWNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmFpbCgncGFyc2VTbGljZTogdG9vIG1hbnkgc2xpY2UgY29tcG9uZW50cycsIHRvay5saW5lbm8sIHRvay5jb2xubyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5za2lwKGxleGVyLlRPS0VOX0NPTE9OKSkge1xuICAgICAgICAgICAgaXNTbGljZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IG5vZGUuZmllbGRzW2ldO1xuICAgICAgICAgICAgbm9kZVtmaWVsZF0gPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgaXNTbGljZSA9IHRoaXMuc2tpcChsZXhlci5UT0tFTl9DT0xPTikgfHwgaXNTbGljZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzU2xpY2UpIHtcbiAgICAgICAgICB0aHJvdyByZXRocm93KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IG5vZGVzLkFycmF5KHRvay5saW5lbm8sIHRvay5jb2xubywgW25vZGVdKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpY2VMb29rdXAob2JqLCBzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIG9iaiA9IG9iaiB8fCBbXTtcblxuICAgIGlmIChzdGFydCA9PT0gbnVsbCkge1xuICAgICAgc3RhcnQgPSBzdGVwIDwgMCA/IG9iai5sZW5ndGggLSAxIDogMDtcbiAgICB9XG5cbiAgICBpZiAoc3RvcCA9PT0gbnVsbCkge1xuICAgICAgc3RvcCA9IHN0ZXAgPCAwID8gLTEgOiBvYmoubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoc3RvcCA8IDApIHtcbiAgICAgIHN0b3AgKz0gb2JqLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICBzdGFydCArPSBvYmoubGVuZ3RoO1xuICAgIH1cblxuICAgIHZhciByZXN1bHRzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gc3RhcnQ7OyBpICs9IHN0ZXApIHtcbiAgICAgIGlmIChpIDwgMCB8fCBpID4gb2JqLmxlbmd0aCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHN0ZXAgPiAwICYmIGkgPj0gc3RvcCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHN0ZXAgPCAwICYmIGkgPD0gc3RvcCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmVzdWx0cy5wdXNoKHJ1bnRpbWUubWVtYmVyTG9va3VwKG9iaiwgaSkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzT3duUHJvcChvYmosIGtleSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuICB9XG5cbiAgdmFyIEFSUkFZX01FTUJFUlMgPSB7XG4gICAgcG9wOiBmdW5jdGlvbiBwb3AoaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGggfHwgaW5kZXggPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignS2V5RXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9LFxuICAgIGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1c2goZWxlbWVudCk7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXNbaV0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYWx1ZUVycm9yJyk7XG4gICAgfSxcbiAgICBjb3VudDogZnVuY3Rpb24gY291bnQoZWxlbWVudCkge1xuICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzW2ldID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfSxcbiAgICBpbmRleDogZnVuY3Rpb24gaW5kZXgoZWxlbWVudCkge1xuICAgICAgdmFyIGk7XG5cbiAgICAgIGlmICgoaSA9IHRoaXMuaW5kZXhPZihlbGVtZW50KSkgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWVFcnJvcicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaTtcbiAgICB9LFxuICAgIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihlbGVtZW50KTtcbiAgICB9LFxuICAgIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KGluZGV4LCBlbGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDAsIGVsZW0pO1xuICAgIH1cbiAgfTtcbiAgdmFyIE9CSkVDVF9NRU1CRVJTID0ge1xuICAgIGl0ZW1zOiBmdW5jdGlvbiBpdGVtcygpIHtcbiAgICAgIHJldHVybiBsaWIuX2VudHJpZXModGhpcyk7XG4gICAgfSxcbiAgICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgIHJldHVybiBsaWIuX3ZhbHVlcyh0aGlzKTtcbiAgICB9LFxuICAgIGtleXM6IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICByZXR1cm4gbGliLmtleXModGhpcyk7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXksIGRlZikge1xuICAgICAgdmFyIG91dHB1dCA9IHRoaXNba2V5XTtcblxuICAgICAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG91dHB1dCA9IGRlZjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LFxuICAgIGhhc19rZXk6IGZ1bmN0aW9uIGhhc19rZXkoa2V5KSB7XG4gICAgICByZXR1cm4gaGFzT3duUHJvcCh0aGlzLCBrZXkpO1xuICAgIH0sXG4gICAgcG9wOiBmdW5jdGlvbiBwb3Aoa2V5LCBkZWYpIHtcbiAgICAgIHZhciBvdXRwdXQgPSB0aGlzW2tleV07XG5cbiAgICAgIGlmIChvdXRwdXQgPT09IHVuZGVmaW5lZCAmJiBkZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvdXRwdXQgPSBkZWY7XG4gICAgICB9IGVsc2UgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignS2V5RXJyb3InKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSxcbiAgICBwb3BpdGVtOiBmdW5jdGlvbiBwb3BpdGVtKCkge1xuICAgICAgdmFyIGtleXMgPSBsaWIua2V5cyh0aGlzKTtcblxuICAgICAgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0tleUVycm9yJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBrID0ga2V5c1swXTtcbiAgICAgIHZhciB2YWwgPSB0aGlzW2tdO1xuICAgICAgZGVsZXRlIHRoaXNba107XG4gICAgICByZXR1cm4gW2ssIHZhbF07XG4gICAgfSxcbiAgICBzZXRkZWZhdWx0OiBmdW5jdGlvbiBzZXRkZWZhdWx0KGtleSwgZGVmKSB7XG4gICAgICBpZiAoZGVmID09PSB2b2lkIDApIHtcbiAgICAgICAgZGVmID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoa2V5IGluIHRoaXMpKSB7XG4gICAgICAgIHRoaXNba2V5XSA9IGRlZjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGt3YXJncykge1xuICAgICAgbGliLl9hc3NpZ24odGhpcywga3dhcmdzKTtcblxuICAgICAgcmV0dXJuIG51bGw7IC8vIEFsd2F5cyByZXR1cm5zIE5vbmVcbiAgICB9XG4gIH07XG4gIE9CSkVDVF9NRU1CRVJTLml0ZXJpdGVtcyA9IE9CSkVDVF9NRU1CRVJTLml0ZW1zO1xuICBPQkpFQ1RfTUVNQkVSUy5pdGVydmFsdWVzID0gT0JKRUNUX01FTUJFUlMudmFsdWVzO1xuICBPQkpFQ1RfTUVNQkVSUy5pdGVya2V5cyA9IE9CSkVDVF9NRU1CRVJTLmtleXM7XG5cbiAgcnVudGltZS5tZW1iZXJMb29rdXAgPSBmdW5jdGlvbiBtZW1iZXJMb29rdXAob2JqLCB2YWwsIGF1dG9lc2NhcGUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgcmV0dXJuIHNsaWNlTG9va3VwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgb2JqID0gb2JqIHx8IHt9OyAvLyBJZiB0aGUgb2JqZWN0IGlzIGFuIG9iamVjdCwgcmV0dXJuIGFueSBvZiB0aGUgbWV0aG9kcyB0aGF0IFB5dGhvbiB3b3VsZFxuICAgIC8vIG90aGVyd2lzZSBwcm92aWRlLlxuXG4gICAgaWYgKGxpYi5pc0FycmF5KG9iaikgJiYgaGFzT3duUHJvcChBUlJBWV9NRU1CRVJTLCB2YWwpKSB7XG4gICAgICByZXR1cm4gQVJSQVlfTUVNQkVSU1t2YWxdLmJpbmQob2JqKTtcbiAgICB9XG5cbiAgICBpZiAobGliLmlzT2JqZWN0KG9iaikgJiYgaGFzT3duUHJvcChPQkpFQ1RfTUVNQkVSUywgdmFsKSkge1xuICAgICAgcmV0dXJuIE9CSkVDVF9NRU1CRVJTW3ZhbF0uYmluZChvYmopO1xuICAgIH1cblxuICAgIHJldHVybiBvcmlnX21lbWJlckxvb2t1cC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHJldHVybiB1bmluc3RhbGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zdGFsbENvbXBhdDtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1udW5qdWNrcy1zbGltLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL251bmp1Y2tzL2Jyb3dzZXIvbnVuanVja3Mtc2xpbS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChudW5qdWNrcywgZW52LCBvYmosIGRlcGVuZGVuY2llcyl7XG5cbiAgICB2YXIgb2xkUm9vdCA9IG9iai5yb290O1xuXG4gICAgb2JqLnJvb3QgPSBmdW5jdGlvbiggZW52LCBjb250ZXh0LCBmcmFtZSwgcnVudGltZSwgaWdub3JlTWlzc2luZywgY2IgKSB7XG4gICAgICAgIHZhciBvbGRHZXRUZW1wbGF0ZSA9IGVudi5nZXRUZW1wbGF0ZTtcbiAgICAgICAgZW52LmdldFRlbXBsYXRlID0gZnVuY3Rpb24gKG5hbWUsIGVjLCBwYXJlbnROYW1lLCBpZ25vcmVNaXNzaW5nLCBjYikge1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBlYyA9PT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGNiID0gZWMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfcmVxdWlyZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGEgcmVmZXJlbmNlIHRvIHRoZSBhbHJlYWR5IHJlc29sdmVkIGRlcGVuZGVuY3kgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVwZW5kZW5jaWVzW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWUuZ2V0KFwiX3JlcXVpcmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmcmFtZS5nZXQoXCJfcmVxdWlyZVwiKShuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IGxvYWQgdGVtcGxhdGUgXCIlc1wiJywgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgdG1wbCA9IF9yZXF1aXJlKG5hbWUpO1xuICAgICAgICAgICAgZnJhbWUuc2V0KFwiX3JlcXVpcmVcIiwgX3JlcXVpcmUpO1xuXG4gICAgICAgICAgICBpZiggZWMgKSB0bXBsLmNvbXBpbGUoKTtcbiAgICAgICAgICAgIGNiKCBudWxsLCB0bXBsICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgb2xkUm9vdChlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBpZ25vcmVNaXNzaW5nLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgICAgIGVudi5nZXRUZW1wbGF0ZSA9IG9sZEdldFRlbXBsYXRlO1xuICAgICAgICAgICAgY2IoIGVyciwgcmVzICk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgc3JjID0ge1xuICAgICAgICBvYmo6IG9iaixcbiAgICAgICAgdHlwZTogJ2NvZGUnXG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgbnVuanVja3MuVGVtcGxhdGUoc3JjLCBlbnYpO1xuXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL251bmp1Y2tzLWxvYWRlci9ydW50aW1lLXNoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG51bmp1Y2tzID0gcmVxdWlyZShcIm51bmp1Y2tzL2Jyb3dzZXIvbnVuanVja3Mtc2xpbVwiKTtcbnZhciBlbnY7XG5pZiAoIW51bmp1Y2tzLmN1cnJlbnRFbnYpe1xuXHRlbnYgPSBudW5qdWNrcy5jdXJyZW50RW52ID0gbmV3IG51bmp1Y2tzLkVudmlyb25tZW50KFtdLCB7XCJkZXZcIjpmYWxzZSxcImF1dG9lc2NhcGVcIjp0cnVlLFwidGhyb3dPblVuZGVmaW5lZFwiOmZhbHNlLFwidHJpbUJsb2Nrc1wiOmZhbHNlLFwibHN0cmlwQmxvY2tzXCI6ZmFsc2V9KTtcbn0gZWxzZSB7XG5cdGVudiA9IG51bmp1Y2tzLmN1cnJlbnRFbnY7XG59XG52YXIgZGVwZW5kZW5jaWVzID0gbnVuanVja3Mud2VicGFja0RlcGVuZGVuY2llcyB8fCAobnVuanVja3Mud2VicGFja0RlcGVuZGVuY2llcyA9IHt9KTtcblxuXG5cblxudmFyIHNoaW0gPSByZXF1aXJlKFwiL1VzZXJzL21taWhhaS9Eb2N1bWVudHMvR2l0SHViL25vbi1kdXRjaC9ub2RlX21vZHVsZXMvbnVuanVja3MtbG9hZGVyL3J1bnRpbWUtc2hpbVwiKTtcblxuXG4oZnVuY3Rpb24oKSB7KG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWQgPSBudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkIHx8IHt9KVtcInB1YmxpYy9jb21wb25lbnRzL0xpc3QvcGFydGlhbHMvam9rZS5uamtcIl0gPSAoZnVuY3Rpb24oKSB7XG5mdW5jdGlvbiByb290KGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG52YXIgbGluZW5vID0gbnVsbDtcbnZhciBjb2xubyA9IG51bGw7XG52YXIgb3V0cHV0ID0gXCJcIjtcbnRyeSB7XG52YXIgcGFyZW50VGVtcGxhdGUgPSBudWxsO1xub3V0cHV0ICs9IFwiPGxpIGNsYXNzPVxcXCJqcy1qb2tlIGxpc3QtaXRlbVxcXCIgZGF0YS1pZD1cXFwiXCI7XG5vdXRwdXQgKz0gcnVudGltZS5zdXBwcmVzc1ZhbHVlKHJ1bnRpbWUubWVtYmVyTG9va3VwKChydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBcIml0ZW1cIikpLFwiaWRcIiksIGVudi5vcHRzLmF1dG9lc2NhcGUpO1xub3V0cHV0ICs9IFwiXFxcIiBkYXRhLXRleHQ9XFxcIlwiO1xub3V0cHV0ICs9IHJ1bnRpbWUuc3VwcHJlc3NWYWx1ZShlbnYuZ2V0RmlsdGVyKFwic2FmZVwiKS5jYWxsKGNvbnRleHQsIHJ1bnRpbWUubWVtYmVyTG9va3VwKChydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBcIml0ZW1cIikpLFwiam9rZVwiKSksIGVudi5vcHRzLmF1dG9lc2NhcGUpO1xub3V0cHV0ICs9IFwiXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJsaXN0LWl0ZW1fX3RleHRcXFwiPlxcblxcdFxcdFwiO1xub3V0cHV0ICs9IHJ1bnRpbWUuc3VwcHJlc3NWYWx1ZShlbnYuZ2V0RmlsdGVyKFwic2FmZVwiKS5jYWxsKGNvbnRleHQsIHJ1bnRpbWUubWVtYmVyTG9va3VwKChydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBcIml0ZW1cIikpLFwiam9rZVwiKSksIGVudi5vcHRzLmF1dG9lc2NhcGUpO1xub3V0cHV0ICs9IFwiXFxuXFx0PC9kaXY+XFxuXFx0XFxuXFx0XCI7XG5pZihydW50aW1lLm1lbWJlckxvb2t1cCgocnVudGltZS5jb250ZXh0T3JGcmFtZUxvb2t1cChjb250ZXh0LCBmcmFtZSwgXCJpdGVtXCIpKSxcImlzRmF2b3J0aWVcIikpIHtcbm91dHB1dCArPSBcIlxcblxcdFxcdDxpIGNsYXNzPVxcXCJqcy1yZW1vdmUgbWF0ZXJpYWwtaWNvbnMgbGlzdC1pdGVtX19pY29uXFxcIj4mI3hFOTJCOzwvaT5cXG5cXHRcIjtcbjtcbn1cbmVsc2Uge1xub3V0cHV0ICs9IFwiXFxuXFx0XFx0PGkgY2xhc3M9XFxcIlwiO1xuaWYocnVudGltZS5tZW1iZXJMb29rdXAoKHJ1bnRpbWUuY29udGV4dE9yRnJhbWVMb29rdXAoY29udGV4dCwgZnJhbWUsIFwiaXRlbVwiKSksXCJpc1JhbmRvbVwiKSkge1xub3V0cHV0ICs9IFwiIGpzLWFkZC1mcm9tLXJhbmRvbSBcIjtcbjtcbn1cbmVsc2Uge1xub3V0cHV0ICs9IFwianMtYWRkLWZhdm9yaXRlIFwiO1xuO1xufVxub3V0cHV0ICs9IFwiIG1hdGVyaWFsLWljb25zIGxpc3QtaXRlbV9faWNvblxcXCI+JiN4RTg3RTs8L2k+XFxuXFx0XCI7XG47XG59XG5vdXRwdXQgKz0gXCJcXG48L2xpPlwiO1xuaWYocGFyZW50VGVtcGxhdGUpIHtcbnBhcmVudFRlbXBsYXRlLnJvb3RSZW5kZXJGdW5jKGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKTtcbn0gZWxzZSB7XG5jYihudWxsLCBvdXRwdXQpO1xufVxuO1xufSBjYXRjaCAoZSkge1xuICBjYihydW50aW1lLmhhbmRsZUVycm9yKGUsIGxpbmVubywgY29sbm8pKTtcbn1cbn1cbnJldHVybiB7XG5yb290OiByb290XG59O1xuXG59KSgpO1xufSkoKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gc2hpbShudW5qdWNrcywgZW52LCBudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkW1wicHVibGljL2NvbXBvbmVudHMvTGlzdC9wYXJ0aWFscy9qb2tlLm5qa1wiXSAsIGRlcGVuZGVuY2llcylcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL0xpc3QvcGFydGlhbHMvam9rZS5uamtcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG51bmp1Y2tzID0gcmVxdWlyZShcIm51bmp1Y2tzL2Jyb3dzZXIvbnVuanVja3Mtc2xpbVwiKTtcbnZhciBlbnY7XG5pZiAoIW51bmp1Y2tzLmN1cnJlbnRFbnYpe1xuXHRlbnYgPSBudW5qdWNrcy5jdXJyZW50RW52ID0gbmV3IG51bmp1Y2tzLkVudmlyb25tZW50KFtdLCB1bmRlZmluZWQpO1xufSBlbHNlIHtcblx0ZW52ID0gbnVuanVja3MuY3VycmVudEVudjtcbn1cbnZhciBkZXBlbmRlbmNpZXMgPSBudW5qdWNrcy53ZWJwYWNrRGVwZW5kZW5jaWVzIHx8IChudW5qdWNrcy53ZWJwYWNrRGVwZW5kZW5jaWVzID0ge30pO1xuXG5cblxuXG52YXIgc2hpbSA9IHJlcXVpcmUoXCIvVXNlcnMvbW1paGFpL0RvY3VtZW50cy9HaXRIdWIvbm9uLWR1dGNoL25vZGVfbW9kdWxlcy9udW5qdWNrcy1sb2FkZXIvcnVudGltZS1zaGltXCIpO1xuXG5cbihmdW5jdGlvbigpIHsobnVuanVja3MubnVuanVja3NQcmVjb21waWxlZCA9IG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWQgfHwge30pW1wicHVibGljL2NvbXBvbmVudHMvTG9naW4vcGFydGlhbHMvaGludHMubmprXCJdID0gKGZ1bmN0aW9uKCkge1xuZnVuY3Rpb24gcm9vdChlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYikge1xudmFyIGxpbmVubyA9IG51bGw7XG52YXIgY29sbm8gPSBudWxsO1xudmFyIG91dHB1dCA9IFwiXCI7XG50cnkge1xudmFyIHBhcmVudFRlbXBsYXRlID0gbnVsbDtcbmZyYW1lID0gZnJhbWUucHVzaCgpO1xudmFyIHRfMyA9IHJ1bnRpbWUuY29udGV4dE9yRnJhbWVMb29rdXAoY29udGV4dCwgZnJhbWUsIFwiZXJyb3JzXCIpO1xuaWYodF8zKSB7dF8zID0gcnVudGltZS5mcm9tSXRlcmF0b3IodF8zKTtcbnZhciB0XzIgPSB0XzMubGVuZ3RoO1xuZm9yKHZhciB0XzE9MDsgdF8xIDwgdF8zLmxlbmd0aDsgdF8xKyspIHtcbnZhciB0XzQgPSB0XzNbdF8xXTtcbmZyYW1lLnNldChcImVycm9yXCIsIHRfNCk7XG5mcmFtZS5zZXQoXCJsb29wLmluZGV4XCIsIHRfMSArIDEpO1xuZnJhbWUuc2V0KFwibG9vcC5pbmRleDBcIiwgdF8xKTtcbmZyYW1lLnNldChcImxvb3AucmV2aW5kZXhcIiwgdF8yIC0gdF8xKTtcbmZyYW1lLnNldChcImxvb3AucmV2aW5kZXgwXCIsIHRfMiAtIHRfMSAtIDEpO1xuZnJhbWUuc2V0KFwibG9vcC5maXJzdFwiLCB0XzEgPT09IDApO1xuZnJhbWUuc2V0KFwibG9vcC5sYXN0XCIsIHRfMSA9PT0gdF8yIC0gMSk7XG5mcmFtZS5zZXQoXCJsb29wLmxlbmd0aFwiLCB0XzIpO1xub3V0cHV0ICs9IFwiXFxuXFx0PHAgaWQ9XFxcIlwiO1xub3V0cHV0ICs9IHJ1bnRpbWUuc3VwcHJlc3NWYWx1ZShydW50aW1lLm1lbWJlckxvb2t1cCgodF80KSxcImlkXCIpLCBlbnYub3B0cy5hdXRvZXNjYXBlKTtcbm91dHB1dCArPSBcIlxcXCIgY2xhc3M9XFxcImhpbnRcXFwiPlwiO1xub3V0cHV0ICs9IHJ1bnRpbWUuc3VwcHJlc3NWYWx1ZShydW50aW1lLm1lbWJlckxvb2t1cCgodF80KSxcIm1lc2FnZVwiKSwgZW52Lm9wdHMuYXV0b2VzY2FwZSk7XG5vdXRwdXQgKz0gXCI8L3A+XFxuXCI7XG47XG59XG59XG5mcmFtZSA9IGZyYW1lLnBvcCgpO1xuaWYocGFyZW50VGVtcGxhdGUpIHtcbnBhcmVudFRlbXBsYXRlLnJvb3RSZW5kZXJGdW5jKGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKTtcbn0gZWxzZSB7XG5jYihudWxsLCBvdXRwdXQpO1xufVxuO1xufSBjYXRjaCAoZSkge1xuICBjYihydW50aW1lLmhhbmRsZUVycm9yKGUsIGxpbmVubywgY29sbm8pKTtcbn1cbn1cbnJldHVybiB7XG5yb290OiByb290XG59O1xuXG59KSgpO1xufSkoKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gc2hpbShudW5qdWNrcywgZW52LCBudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkW1wicHVibGljL2NvbXBvbmVudHMvTG9naW4vcGFydGlhbHMvaGludHMubmprXCJdICwgZGVwZW5kZW5jaWVzKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2NvbXBvbmVudHMvTG9naW4vcGFydGlhbHMvaGludHMubmprXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbnNlY3V0aXZlTGV0dGVycyh2YWx1ZSwgY29uc2VjdXRpdmVJbmRleCA9IDApIHtcblx0aWYgKGNvbnNlY3V0aXZlSW5kZXggPj0gMikge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlmICh2YWx1ZS5sZW5ndGggPT09IDIpIHtcblx0XHRpZiAoKHZhbHVlLmNoYXJDb2RlQXQoMCkgKyAxKSA9PT0gdmFsdWUuY2hhckNvZGVBdCgxKSkge1xuXHRcdFx0Y29uc2VjdXRpdmVJbmRleCArPSAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zZWN1dGl2ZUluZGV4ID0gMDtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnNlY3V0aXZlSW5kZXggPj0gMjtcblx0fSBlbHNlIGlmICgodmFsdWUuY2hhckNvZGVBdCgwKSArIDEpID09PSB2YWx1ZS5jaGFyQ29kZUF0KDEpKSB7XG5cdFx0Y29uc2VjdXRpdmVJbmRleCArPSAxO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNlY3V0aXZlSW5kZXggPSAwO1xuXHR9XG5cdHJldHVybiBjaGVja0NvbnNlY3V0aXZlTGV0dGVycyh2YWx1ZS5zdWJzdHJpbmcoMSksIGNvbnNlY3V0aXZlSW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZVN0cmluZyh0ZW1wbGF0ZSwgbWFwLCBmYWxsYmFjaykge1xuXHRyZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgvXFwkXFx7Lis/fS9nLCBtYXRjaCA9PiB7XG5cdFx0Y29uc3QgcGF0aCA9IG1hdGNoLnN1YnN0cigyLCBtYXRjaC5sZW5ndGggLSAzKS50cmltKCk7XG5cdFx0cmV0dXJuIGdldChwYXRoLCBtYXAsIGZhbGxiYWNrKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldChwYXRoLCBvYmosIGZiID0gYCRcXHske3BhdGh9fWApIHtcblx0cmV0dXJuIHBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoKHJlcywga2V5KSA9PiByZXNba2V5XSB8fCBmYiwgb2JqKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy91dGlscy5qcyIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luJztcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdC9MaXN0JztcbmltcG9ydCB7IGpva2VVcmwgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgbG9hZEpva2VzIGZyb20gJy4vbG9hZEpva2VzJztcbmltcG9ydCBlcnJvclRlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlcy9lcnJvci5uamsnO1xuaW1wb3J0IHdlbGxjb21lVGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGVzL3dlbGxjb21lLWJhY2submprJztcbmltcG9ydCBqb2tlVGVtcGxhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0L3BhcnRpYWxzL2pva2UubmprJztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1N0b3JlJztcbmltcG9ydCBpbml0VGFicyBmcm9tICdmdXR1cmUtdGFicyc7XG5cbmNvbnN0IHVzZXJOYW1lU3RvcmUgPSBuZXcgU3RvcmUoJ3VzZXJOYW1lJyk7XG5jb25zdCBpc0xvZ2luU3RvcmUgPSBuZXcgU3RvcmUoJ2lzTG9naW4nLCBmYWxzZSk7XG5jb25zdCBmYXZvcml0ZXNTdG9yZSA9IG5ldyBTdG9yZSgnZmF2b3JpdGVzJyk7XG5jb25zdCBqb2tlc1N0b3JlID0gbmV3IFN0b3JlKCdpdGVtcycsIGZhbHNlKTtcbmNvbnN0IGxvZ2luRm9ybSA9IG5ldyBMb2dpbihzaG93Sm9rZXMsIHVzZXJOYW1lU3RvcmUsIGlzTG9naW5TdG9yZSk7XG5cbmNvbnN0IGFwcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKTtcbmNvbnN0IHBhZ2UxID0gYXBwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLTEnKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IGFwcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cdGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdlbnRlcicpO1xuXG5cdGlmIChsb2dpbkZvcm0uaXNMb2dpbigpKSB7XG5cdFx0cGFnZTEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB3ZWxsY29tZVRlbXBsYXRlLnJlbmRlcih7IHVzZXJOYW1lOiB1c2VyTmFtZVN0b3JlLmdldEFsbCgpIH0pKTtcblx0XHRwYWdlMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dKb2tlcyk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgbG9naW5Db250YWluZXIgPSBhcHBDb250YWluZXIucXVlcnlTZWxlY3RvcignI2xvZ2luJyk7XG5cdFx0bG9naW5Gb3JtLnJlbmRlcihsb2dpbkNvbnRhaW5lcik7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIHNob3dKb2tlcygpIHtcblx0Y29uc3Qgam9rZXNDb250YWluZXIgPSBhcHBDb250YWluZXIucXVlcnlTZWxlY3RvcignLnBhZ2UtMicpO1xuXHRjb25zdCBqb2tlc0xpc3RDb250YWluZXIgPSBqb2tlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjam9rZXMtbGlzdCcpO1xuXHRjb25zdCBmYXZvcml0ZXNMaXN0Q29udGFpbmVyID0gam9rZXNDb250YWluZXIucXVlcnlTZWxlY3RvcignI2Zhdm9yaXRlcycpO1xuXHRjb25zdCBmYXZvcml0ZXMgPSBmYXZvcml0ZXNTdG9yZS5nZXRBbGwoKTtcblx0Y29uc3QgZmF2b3JpdGVzbGlzdCA9IG5ldyBMaXN0KCdmYXZvcml0ZXMnLCBmYXZvcml0ZXMsIGZhdm9yaXRlc0xpc3RDb250YWluZXIpO1xuXHRjb25zdCBqb2tlc0xpc3QgPSBuZXcgTGlzdCgnam9rZXMnLCBbXSwgam9rZXNMaXN0Q29udGFpbmVyKTtcblxuXHRqb2tlc0xpc3QucmVuZGVyKCk7XG5cdGZhdm9yaXRlc2xpc3QucmVuZGVyKCk7XG5cdGhhbmRsZVJhbmRvbUpva2UoKTtcblx0aGFuZGxlTG9hZE1vZGVKb2tlcyhqb2tlc0xpc3QpO1xuXHRpbml0VGFicygnLnRhYnMnKTtcblx0YmluZEV2ZW50cyhqb2tlc0NvbnRhaW5lciwgZmF2b3JpdGVzbGlzdCwgam9rZXNMaXN0KTtcblxuXHRqb2tlc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0cGFnZTEuY2xhc3NMaXN0LmFkZCgnZXhpdCcpO1xuXG5cblx0bG9hZEpva2VzKGpva2VVcmwsIDEwKVxuXHRcdC50aGVuKGpva2VzRGF0YSA9PiB7XG5cdFx0XHRpZiAoam9rZXNEYXRhLnR5cGUgIT09ICdzdWNjZXNzJykge1xuXHRcdFx0XHRyZXR1cm4gam9rZXNMaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IGVycm9yVGVtcGxhdGUucmVuZGVyKCk7XG5cdFx0XHR9XG5cdFx0XHRqb2tlc1N0b3JlLnNldChqb2tlc0RhdGEudmFsdWUpO1xuXHRcdFx0am9rZXNMaXN0LmFkZEl0ZW1zKGpva2VzRGF0YS52YWx1ZSk7XG5cblx0XHR9KVxuXHRcdC5jYXRjaCgoKSA9PiB7XG5cdFx0XHRqb2tlc0xpc3RDb250YWluZXIuaW5uZXJIVE1MID0gZXJyb3JUZW1wbGF0ZS5yZW5kZXIoKTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTG9hZE1vZGVKb2tlcyhqb2tlc0xpc3QpIHtcblx0Y29uc3QgbG9hZE1vcmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZE1vcmUnKTtcblx0bG9hZE1vcmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0bG9hZEpva2VzKGpva2VVcmwsIDEwKS50aGVuKGpva2VzRGF0YSA9PiB7XG5cdFx0XHRpZiAoam9rZXNEYXRhLnR5cGUgIT09ICdzdWNjZXNzJykge1xuXHRcdFx0XHRyZXR1cm4gam9rZXNDb250YWluZXIuaW5uZXJIVE1MID0gZXJyb3JUZW1wbGF0ZS5yZW5kZXIoKTtcblx0XHRcdH1cblx0XHRcdGpva2VzU3RvcmUuaW5zZXJ0KGpva2VzRGF0YS52YWx1ZSk7XG5cdFx0XHRqb2tlc0xpc3QuYWRkSXRlbXMoam9rZXNEYXRhLnZhbHVlKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJhbmRvbUpva2UoKSB7XG5cdGNvbnN0IGdldFJhbmRvbUpva2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbUJ0bicpO1xuXHRsZXQgaW50ZXJ2YWwgPSBudWxsO1xuXHRnZXRSYW5kb21Kb2tlcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcblx0XHRjb25zdCBmZXRjaFJhbmRvbUpva2UgPSBlLnRhcmdldC5jaGVja2VkO1xuXHRcdGlmIChmZXRjaFJhbmRvbUpva2UpIHtcblx0XHRcdGxvYWRSYW5kb21Kb2tlKCk7XG5cdFx0XHRpbnRlcnZhbCA9IHNldEludGVydmFsKGxvYWRSYW5kb21Kb2tlLCA1MDAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gbG9hZFJhbmRvbUpva2UoKSB7XG5cdHJldHVybiBsb2FkSm9rZXMoam9rZVVybCwgMSkudGhlbihqb2tlRGF0YSA9PiB7XG5cdFx0Y29uc3QgcmFuZG9tQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbScpO1xuXHRcdGlmIChqb2tlRGF0YS50eXBlICE9PSAnc3VjY2VzcycpIHtcblx0XHRcdHJldHVybiByYW5kb21Db250YWluZXIuaW5uZXJIVE1MID0gZXJyb3JUZW1wbGF0ZS5yZW5kZXIoKTtcblx0XHR9XG5cdFx0Y29uc3QgaXRlbSA9IGpva2VEYXRhLnZhbHVlWzBdO1xuXHRcdHJldHVybiBqb2tlVGVtcGxhdGUucmVuZGVyKFxuXHRcdFx0e1xuXHRcdFx0XHRpdGVtOiBPYmplY3QuYXNzaWduKGl0ZW0sIHsgaXNSYW5kb206IHRydWUgfSlcblx0XHRcdH0sXG5cdFx0XHQoZXJyLCByZXN1bHQpID0+IHtcblx0XHRcdFx0cmFuZG9tQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHJlc3VsdCk7XG5cdFx0XHR9KTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gYmluZEV2ZW50cyhwYXJlbnQsIGZhdm9yaXRlc2xpc3QsIGpva2VzTGlzdCkge1xuXHRwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblx0XHRjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcblx0XHRjb25zdCBqb2tlRWwgPSB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1qb2tlJykgPyBlLnRhcmdldCA6IHRhcmdldC5jbG9zZXN0KCcuanMtam9rZScpO1xuXHRcdGlmICgham9rZUVsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGlkID0gcGFyc2VJbnQoam9rZUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblxuXHRcdGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1hZGQtZmF2b3JpdGUnKSkge1xuXHRcdFx0Y29uc3QgaXRlbSA9IGpva2VzU3RvcmUucmVtb3ZlKGlkKTtcblx0XHRcdGpva2VzTGlzdC5yZW1vdmVJdGVtKGlkKTtcblx0XHRcdGFkZEZhdm9yaXRlKGl0ZW0sIGZhdm9yaXRlc2xpc3QpO1xuXHRcdH1cblxuXHRcdGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1yZW1vdmUnKSkge1xuXHRcdFx0ZmF2b3JpdGVzbGlzdC5yZW1vdmVJdGVtKGlkKTtcblx0XHRcdGZhdm9yaXRlc1N0b3JlLnJlbW92ZShpZCk7XG5cdFx0fVxuXG5cblx0XHRpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnanMtYWRkLWZyb20tcmFuZG9tJykpIHtcblx0XHRcdGNvbnN0IGl0ZW0gPSB7XG5cdFx0XHRcdGlkLFxuXHRcdFx0XHRqb2tlOiBqb2tlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRleHQnKVxuXHRcdFx0fTtcblx0XHRcdGpva2VFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpva2VFbCk7XG5cdFx0XHRhZGRGYXZvcml0ZShpdGVtLCBmYXZvcml0ZXNsaXN0KTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRGYXZvcml0ZShpdGVtLCBmYXZvcml0ZXNsaXN0KSB7XG5cdGlmIChmYXZvcml0ZXNTdG9yZS5nZXRBbGwoKS5sZW5ndGggPj0gMTApIHtcblx0XHRjb25zdCB0b1JlbW92ZUl0ZW1zID0gZmF2b3JpdGVzU3RvcmUuc2V0TGVuZ3RoKDEwKTtcblx0XHRmYXZvcml0ZXNsaXN0LnJlbW92ZUl0ZW1zKHRvUmVtb3ZlSXRlbXMpO1xuXHR9XG5cdE9iamVjdC5hc3NpZ24oaXRlbSwgeyBpc0Zhdm9ydGllOiB0cnVlIH0pO1xuXHRmYXZvcml0ZXNTdG9yZS5pbnNlcnQoaXRlbSk7XG5cdGZhdm9yaXRlc2xpc3QuYWRkSXRlbXMoW2l0ZW1dKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvbWFpbi5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc2Nzcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL0xvZ2luLm5qayc7XG5pbXBvcnQgaGludHMgZnJvbSAnLi9wYXJ0aWFscy9oaW50cy5uamsnO1xuaW1wb3J0IHsgY2hlY2tDb25zZWN1dGl2ZUxldHRlcnMgfSBmcm9tICcuLi8uLi9qcy91dGlscyc7XG5pbXBvcnQgJy4vTG9naW4uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIHtcblx0Y29uc3RydWN0b3Iob25TdWJtaXQsIHVzZXJTdG9yZSwgbG9naW5TdG9yZSkge1xuXHRcdHRoaXMubG9naW5TdG9yZSA9IGxvZ2luU3RvcmU7XG5cdFx0dGhpcy51c2VyU3RvcmUgPSB1c2VyU3RvcmU7XG5cdFx0dGhpcy5wYXNzd29yZCA9ICcnO1xuXHRcdHRoaXMuaHRtbEVsZW1lbmV0cyA9IFtdO1xuXHRcdHRoaXMudXNlck5hbWUgPSB0aGlzLmdldFVzZXJOYW1lKCk7XG5cdFx0dGhpcy5vblN1Ym1pdCA9IG9uU3VibWl0O1xuXHR9XG5cblx0cmVuZGVyKHBhcmVudCkge1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5yZW5kZXIoeyB1c2VyTmFtZTogdGhpcy51c2VyTmFtZSB9LCAoZXJyLCByZXN1bHQpID0+IHtcblx0XHRcdHBhcmVudC5pbm5lckhUTUwgPSByZXN1bHQ7XG5cdFx0XHR0aGlzLmJpbmRFdmVudHMocGFyZW50KTtcblx0XHR9KTtcblx0fVxuXHRiaW5kRXZlbnRzKHNjb3BlKSB7XG5cdFx0dGhpcy5odG1sRWxlbWVuZXRzLnBhc3N3b3JkID0gc2NvcGUucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XG5cdFx0dGhpcy5odG1sRWxlbWVuZXRzLnVzZXJOYW1lID0gc2NvcGUucXVlcnlTZWxlY3RvcignI25hbWUnKTtcblx0XHR0aGlzLmh0bWxFbGVtZW5ldHMubG9naW5CdG4gPSBzY29wZS5xdWVyeVNlbGVjdG9yKCcjbG9naW5CdG4nKTtcblx0XHR0aGlzLmh0bWxFbGVtZW5ldHMuaGludHMgPSBzY29wZS5xdWVyeVNlbGVjdG9yKCcjaGludHMnKTtcblxuXHRcdHRoaXMuaHRtbEVsZW1lbmV0cy5wYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4ge1xuXHRcdFx0dGhpcy5wYXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0aWYgKHRoaXMucGFzc3dvcmQubGVuZ3RoICE9PSAwKSB7XG5cdFx0XHRcdHRoaXMudmFsaWRhdGUoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5odG1sRWxlbWVuZXRzLmhpbnRzLmlubmVySFRNTCA9IGhpbnRzLnJlbmRlcihbXSk7XG5cdFx0XHR0aGlzLmh0bWxFbGVtZW5ldHMubG9naW5CdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG5cdFx0fSk7XG5cblx0XHR0aGlzLmh0bWxFbGVtZW5ldHMudXNlck5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHtcblx0XHRcdHRoaXMudXNlck5hbWUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHR9KTtcblxuXHRcdHRoaXMuaHRtbEVsZW1lbmV0cy5sb2dpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5zZXRTZXNzaW9uKCk7XG5cdFx0XHR0aGlzLnNldFVzZXJOYW1lKCk7XG5cdFx0XHR0aGlzLm9uU3VibWl0KCk7XG5cdFx0fSk7XG5cdH1cblx0dmFsaWRhdGUoKSB7XG5cdFx0Y29uc3QgZXJyb3JzID0gW107XG5cdFx0Y29uc3QgbWVzc2FnZXMgPSB7XG5cdFx0XHRsZXR0ZXJzOiAnU2hvdWxkIGNvbnRhaW4gb25seSBsb3dlciBsZXR0ZXJzJyxcblx0XHRcdG5vU29tZUxldHRlcnM6ICdTaG91bGQgIG5vdCBjb250YWluIFwiaVwiIFwiT1wiIG9yIFwibFwiJyxcblx0XHRcdGRvdWJsZTogJ1Nob3VsZCBjb250YWluIHR3byBvdmVybGFwcGluZyBsZXR0ZXJzLCBsaWtlIFwiYWFcIiwgXCJiYlwiIG9yIFwiY2NcIicsXG5cdFx0XHRjb25zZWN1dGl2ZTogJ1Nob3VsZCBjb250YWluIDMgY29uc2VjdXRpdmUgbGV0dGVycyBsaWtlIFwiYWJjXCIsIFwiZGVmXCIgb3IgXCJ4eXpcIicsXG5cdFx0XHRsZW5ndGg6ICdTaG91bGQgY29udGFpbiBtb3JlIHRoYW4gMiBsZXR0ZXJzIGJ1dCBub3QgbW9yZSB0aGFuIDMyJ1xuXHRcdH07XG5cblx0XHRpZiAoISgvXlthLXpdKyQvKS50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XG5cdFx0XHRlcnJvcnMucHVzaCh7XG5cdFx0XHRcdGlkOiAnbGV0dGVycycsXG5cdFx0XHRcdG1lc2FnZTogbWVzc2FnZXMubGV0dGVyc1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKCEoLyhbYS16XSlcXDEvaSkudGVzdCh0aGlzLnBhc3N3b3JkKSkge1xuXHRcdFx0ZXJyb3JzLnB1c2goe1xuXHRcdFx0XHRpZDogJ2RvdWJsZScsXG5cdFx0XHRcdG1lc2FnZTogbWVzc2FnZXMuZG91YmxlXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoISgvXlteaU9sXSskLykudGVzdCh0aGlzLnBhc3N3b3JkKSkge1xuXHRcdFx0ZXJyb3JzLnB1c2goe1xuXHRcdFx0XHRpZDogJ25vU29tZUxldHRlcnMnLFxuXHRcdFx0XHRtZXNhZ2U6IG1lc3NhZ2VzLm5vU29tZUxldHRlcnNcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBhc3N3b3JkLmxlbmd0aCA+PSAzKSB7XG5cdFx0XHRpZiAoIWNoZWNrQ29uc2VjdXRpdmVMZXR0ZXJzKHRoaXMucGFzc3dvcmQpKSB7XG5cdFx0XHRcdGVycm9ycy5wdXNoKHtcblx0XHRcdFx0XHRpZDogJ2NvbnNlY3V0aXZlJyxcblx0XHRcdFx0XHRtZXNhZ2U6IG1lc3NhZ2VzLmNvbnNlY3V0aXZlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRlcnJvcnMucHVzaCh7XG5cdFx0XHRcdGlkOiAnbGVuZ3RoJyxcblx0XHRcdFx0bWVzYWdlOiBtZXNzYWdlcy5sZW5ndGhcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHRoaXMuaHRtbEVsZW1lbmV0cy5oaW50cy5pbm5lckhUTUwgPSBoaW50cy5yZW5kZXIoeyBlcnJvcnMgfSk7XG5cdFx0dGhpcy5odG1sRWxlbWVuZXRzLmxvZ2luQnRuLmRpc2FibGVkID0gZXJyb3JzLmxlbmd0aCAhPT0gMDtcblxuXHR9XG5cdHNldFNlc3Npb24oKSB7XG5cdFx0dGhpcy5sb2dpblN0b3JlLnNldCh0cnVlKTtcblx0fVxuXHRzZXRVc2VyTmFtZSgpIHtcblx0XHR0aGlzLnVzZXJTdG9yZS5zZXQodGhpcy51c2VyTmFtZSk7XG5cdH1cblx0Z2V0VXNlck5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMudXNlclN0b3JlLmdldEFsbCgpO1xuXHR9XG5cdGlzTG9naW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMubG9naW5TdG9yZS5nZXRBbGwoKS5sZW5ndGggIT09IDA7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qcyIsInZhciBudW5qdWNrcyA9IHJlcXVpcmUoXCJudW5qdWNrcy9icm93c2VyL251bmp1Y2tzLXNsaW1cIik7XG52YXIgZW52O1xuaWYgKCFudW5qdWNrcy5jdXJyZW50RW52KXtcblx0ZW52ID0gbnVuanVja3MuY3VycmVudEVudiA9IG5ldyBudW5qdWNrcy5FbnZpcm9ubWVudChbXSwgdW5kZWZpbmVkKTtcbn0gZWxzZSB7XG5cdGVudiA9IG51bmp1Y2tzLmN1cnJlbnRFbnY7XG59XG52YXIgZGVwZW5kZW5jaWVzID0gbnVuanVja3Mud2VicGFja0RlcGVuZGVuY2llcyB8fCAobnVuanVja3Mud2VicGFja0RlcGVuZGVuY2llcyA9IHt9KTtcbmRlcGVuZGVuY2llc1tcIi4vcGFydGlhbHMvaGludHMubmprXCJdID0gcmVxdWlyZSggXCIuL3BhcnRpYWxzL2hpbnRzLm5qa1wiICk7XG5cblxuXG5cbnZhciBzaGltID0gcmVxdWlyZShcIi9Vc2Vycy9tbWloYWkvRG9jdW1lbnRzL0dpdEh1Yi9ub24tZHV0Y2gvbm9kZV9tb2R1bGVzL251bmp1Y2tzLWxvYWRlci9ydW50aW1lLXNoaW1cIik7XG5cblxuKGZ1bmN0aW9uKCkgeyhudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkID0gbnVuanVja3MubnVuanVja3NQcmVjb21waWxlZCB8fCB7fSlbXCJwdWJsaWMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5uamtcIl0gPSAoZnVuY3Rpb24oKSB7XG5mdW5jdGlvbiByb290KGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG52YXIgbGluZW5vID0gbnVsbDtcbnZhciBjb2xubyA9IG51bGw7XG52YXIgb3V0cHV0ID0gXCJcIjtcbnRyeSB7XG52YXIgcGFyZW50VGVtcGxhdGUgPSBudWxsO1xub3V0cHV0ICs9IFwiPGZvcm0gaWQ9XFxcImxvZ2luXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3JvdXBcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIj5OYW1lPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBpZD1cXFwibmFtZVxcXCIgdmFsdWU9XFxcIlwiO1xub3V0cHV0ICs9IHJ1bnRpbWUuc3VwcHJlc3NWYWx1ZShydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBcInVzZXJOYW1lXCIpLCBlbnYub3B0cy5hdXRvZXNjYXBlKTtcbm91dHB1dCArPSBcIlxcXCIgY2xhc3M9XFxcImlucHV0XFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImdyb3VwXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiPlNlY3VyaXR5IGNvZGUgJiM0MjwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgbmFtZT1cXFwicGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIG1heGxlbmd0aD1cXFwiMzJcXFwiICBjbGFzcz1cXFwiaW5wdXRcXFwiPlxcbiAgICA8L2Rpdj5cXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGlkPVxcXCJsb2dpbkJ0blxcXCIgZGlzYWJsZWQ9dHJ1ZSBjbGFzcz1cXFwic2VlLWpva2VzLWJ0blxcXCI+U2VlIEpva2VzPC9idXR0b24+XFxuICAgIDxkaXY+JiM0MiBDb2RlIHRoYXQgQ2h1Y2sgTm9ycmlzIGhhcyBpbiBtaW5kPC9kaXY+XFxuICAgIDxkaXYgaWQ9XFxcImhpbnRzXFxcIiBjbGFzcz1cXFwiaGludHNcXFwiPlxcbiAgICAgICAgXCI7XG52YXIgdGFza3MgPSBbXTtcbnRhc2tzLnB1c2goXG5mdW5jdGlvbihjYWxsYmFjaykge1xuZW52LmdldFRlbXBsYXRlKFwiLi9wYXJ0aWFscy9oaW50cy5uamtcIiwgZmFsc2UsIFwicHVibGljL2NvbXBvbmVudHMvTG9naW4vTG9naW4ubmprXCIsIHRydWUsIGZ1bmN0aW9uKHRfMix0XzEpIHtcbmlmKHRfMikgeyBjYih0XzIpOyByZXR1cm47IH1cbmNhbGxiYWNrKG51bGwsdF8xKTt9KTtcbn0pO1xudGFza3MucHVzaChcbmZ1bmN0aW9uKHRlbXBsYXRlLCBjYWxsYmFjayl7XG50ZW1wbGF0ZS5yZW5kZXIoY29udGV4dC5nZXRWYXJpYWJsZXMoKSwgZnJhbWUsIGZ1bmN0aW9uKHRfNCx0XzMpIHtcbmlmKHRfNCkgeyBjYih0XzQpOyByZXR1cm47IH1cbmNhbGxiYWNrKG51bGwsdF8zKTt9KTtcbn0pO1xudGFza3MucHVzaChcbmZ1bmN0aW9uKHJlc3VsdCwgY2FsbGJhY2spe1xub3V0cHV0ICs9IHJlc3VsdDtcbmNhbGxiYWNrKG51bGwpO1xufSk7XG5lbnYud2F0ZXJmYWxsKHRhc2tzLCBmdW5jdGlvbigpe1xub3V0cHV0ICs9IFwiXFxuICAgIDwvZGl2PlxcbjwvZm9ybT5cIjtcbmlmKHBhcmVudFRlbXBsYXRlKSB7XG5wYXJlbnRUZW1wbGF0ZS5yb290UmVuZGVyRnVuYyhlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYik7XG59IGVsc2Uge1xuY2IobnVsbCwgb3V0cHV0KTtcbn1cbn0pO1xufSBjYXRjaCAoZSkge1xuICBjYihydW50aW1lLmhhbmRsZUVycm9yKGUsIGxpbmVubywgY29sbm8pKTtcbn1cbn1cbnJldHVybiB7XG5yb290OiByb290XG59O1xuXG59KSgpO1xufSkoKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gc2hpbShudW5qdWNrcywgZW52LCBudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkW1wicHVibGljL2NvbXBvbmVudHMvTG9naW4vTG9naW4ubmprXCJdICwgZGVwZW5kZW5jaWVzKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2NvbXBvbmVudHMvTG9naW4vTG9naW4ubmprXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdywgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWlkYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2NvbXBvbmVudHMvTG9naW4vTG9naW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vTGlzdC5zY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL0xpc3QubmprJztcbmltcG9ydCBqb2tlVGVtcGxhdGUgZnJvbSAnLi9wYXJ0aWFscy9qb2tlLm5qayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBpdGVtcyA9IFtdLCBwYXJlbnQpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaXRlbXMgPSBpdGVtcztcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLm5vSm9rZXNDb250YWluZXIgPSBudWxsO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5yZW5kZXIoXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IHRoaXMubmFtZSxcblx0XHRcdFx0aXRlbXM6IHRoaXMuaXRlbXMsXG5cdFx0XHR9LFxuXHRcdFx0KGVyciwgcmVzdWx0KSA9PiB7XG5cdFx0XHRcdHRoaXMucGFyZW50LmlubmVySFRNTCA9IHJlc3VsdDtcblx0XHRcdFx0dGhpcy5ub0pva2VzQ29udGFpbmVyID0gdGhpcy5wYXJlbnQucXVlcnlTZWxlY3RvcignLmpzLW5vLWpva2VzLWNvbnRhaW5lcicpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRhZGRJdGVtcyhuZXdJdGVtcykge1xuXHRcdGxldCBodG1sID0gJyc7XG5cdFx0bmV3SXRlbXMuZm9yRWFjaChpdGVtID0+IGh0bWwgKz0gam9rZVRlbXBsYXRlLnJlbmRlcih7IGl0ZW0gfSkpO1xuXHRcdHRoaXMucGFyZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG5cdFx0aWYgKHRoaXMubm9Kb2tlc0NvbnRhaW5lcikge1xuXHRcdFx0dGhpcy5ub0pva2VzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlSXRlbXMoaXRlbXMpIHtcblx0XHRpdGVtcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5yZW1vdmVJdGVtKGl0ZW0uaWQpKTtcblx0fVxuXG5cdHJlbW92ZUl0ZW0oaWQpIHtcblx0XHRjb25zdCBlbFRvUmVtb3ZlID0gdGhpcy5wYXJlbnQucXVlcnlTZWxlY3RvcihgLmpzLWpva2VbZGF0YS1pZD1cIiR7aWR9XCJdYCk7XG5cdFx0ZWxUb1JlbW92ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsVG9SZW1vdmUpO1xuXHRcdGlmICghdGhpcy5wYXJlbnQucXVlcnlTZWxlY3RvcignLmpzLWpva2UnKSkge1xuXHRcdFx0dGhpcy5ub0pva2VzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdH1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvTGlzdC9MaXN0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL0xpc3QvTGlzdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbnVuanVja3MgPSByZXF1aXJlKFwibnVuanVja3MvYnJvd3Nlci9udW5qdWNrcy1zbGltXCIpO1xudmFyIGVudjtcbmlmICghbnVuanVja3MuY3VycmVudEVudil7XG5cdGVudiA9IG51bmp1Y2tzLmN1cnJlbnRFbnYgPSBuZXcgbnVuanVja3MuRW52aXJvbm1lbnQoW10sIHVuZGVmaW5lZCk7XG59IGVsc2Uge1xuXHRlbnYgPSBudW5qdWNrcy5jdXJyZW50RW52O1xufVxudmFyIGRlcGVuZGVuY2llcyA9IG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgfHwgKG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgPSB7fSk7XG5kZXBlbmRlbmNpZXNbXCIuL3BhcnRpYWxzL2pva2UubmprXCJdID0gcmVxdWlyZSggXCIuL3BhcnRpYWxzL2pva2UubmprXCIgKTtcblxuXG5cblxudmFyIHNoaW0gPSByZXF1aXJlKFwiL1VzZXJzL21taWhhaS9Eb2N1bWVudHMvR2l0SHViL25vbi1kdXRjaC9ub2RlX21vZHVsZXMvbnVuanVja3MtbG9hZGVyL3J1bnRpbWUtc2hpbVwiKTtcblxuXG4oZnVuY3Rpb24oKSB7KG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWQgPSBudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkIHx8IHt9KVtcInB1YmxpYy9jb21wb25lbnRzL0xpc3QvTGlzdC5uamtcIl0gPSAoZnVuY3Rpb24oKSB7XG5mdW5jdGlvbiByb290KGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG52YXIgbGluZW5vID0gbnVsbDtcbnZhciBjb2xubyA9IG51bGw7XG52YXIgb3V0cHV0ID0gXCJcIjtcbnRyeSB7XG52YXIgcGFyZW50VGVtcGxhdGUgPSBudWxsO1xub3V0cHV0ICs9IFwiPGRpdiBjbGFzcz1cXFwibGlzdHMtY29udGFpbmVyXFxcIj5cXG5cXHQ8dWwgY2xhc3M9XFxcImpzLWpva2VzLVwiO1xub3V0cHV0ICs9IHJ1bnRpbWUuc3VwcHJlc3NWYWx1ZShydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBcIm5hbWVcIiksIGVudi5vcHRzLmF1dG9lc2NhcGUpO1xub3V0cHV0ICs9IFwiICBsaXN0XFxcIiBpZD1cXFwiXCI7XG5vdXRwdXQgKz0gcnVudGltZS5zdXBwcmVzc1ZhbHVlKHJ1bnRpbWUuY29udGV4dE9yRnJhbWVMb29rdXAoY29udGV4dCwgZnJhbWUsIFwibmFtZVwiKSwgZW52Lm9wdHMuYXV0b2VzY2FwZSk7XG5vdXRwdXQgKz0gXCJcXFwiPlxcblxcdFxcdFxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImpzLW5vLWpva2VzLWNvbnRhaW5lclxcXCIgc3R5bGU9XFxcIlwiO1xuaWYocnVudGltZS5tZW1iZXJMb29rdXAoKHJ1bnRpbWUuY29udGV4dE9yRnJhbWVMb29rdXAoY29udGV4dCwgZnJhbWUsIFwiaXRlbXNcIikpLFwibGVuZ3RoXCIpID09IDApIHtcbm91dHB1dCArPSBcImRpc3BsYXk6YmxvY2tcIjtcbjtcbn1cbmVsc2Uge1xub3V0cHV0ICs9IFwiIGRpc3BsYXk6IG5vbmU7XCI7XG47XG59XG5vdXRwdXQgKz0gXCJcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIm5vLWpva2VzXFxcIj5cXG5cXHRcXHRcXHRcXHQ8aDI+Tm8gSm9rZXMhPGgyPlxcblxcdFxcdFxcdFxcdDxoMz5DaHVjayBOb3JyaXMgd2FzIGhlcmUhPGgzPlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDxkaXYgc3R5bGU9XFxcIndpZHRoOjEwMCU7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206NTYlO3Bvc2l0aW9uOnJlbGF0aXZlO1xcXCI+PGlmcmFtZSBzcmM9XFxcImh0dHBzOi8vZ2lwaHkuY29tL2VtYmVkLzNvNk1ibTZHNlg5WGw4V3A1bVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgc3R5bGU9XFxcInBvc2l0aW9uOmFic29sdXRlXFxcIiBmcmFtZUJvcmRlcj1cXFwiMFxcXCIgY2xhc3M9XFxcImdpcGh5LWVtYmVkXFxcIiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFxuXFx0XFx0XCI7XG5mcmFtZSA9IGZyYW1lLnB1c2goKTtcbnZhciB0XzMgPSBydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBcIml0ZW1zXCIpO1xuaWYodF8zKSB7dF8zID0gcnVudGltZS5mcm9tSXRlcmF0b3IodF8zKTtcbnZhciB0XzIgPSB0XzMubGVuZ3RoO1xuZm9yKHZhciB0XzE9MDsgdF8xIDwgdF8zLmxlbmd0aDsgdF8xKyspIHtcbnZhciB0XzQgPSB0XzNbdF8xXTtcbmZyYW1lLnNldChcIml0ZW1cIiwgdF80KTtcbmZyYW1lLnNldChcImxvb3AuaW5kZXhcIiwgdF8xICsgMSk7XG5mcmFtZS5zZXQoXCJsb29wLmluZGV4MFwiLCB0XzEpO1xuZnJhbWUuc2V0KFwibG9vcC5yZXZpbmRleFwiLCB0XzIgLSB0XzEpO1xuZnJhbWUuc2V0KFwibG9vcC5yZXZpbmRleDBcIiwgdF8yIC0gdF8xIC0gMSk7XG5mcmFtZS5zZXQoXCJsb29wLmZpcnN0XCIsIHRfMSA9PT0gMCk7XG5mcmFtZS5zZXQoXCJsb29wLmxhc3RcIiwgdF8xID09PSB0XzIgLSAxKTtcbmZyYW1lLnNldChcImxvb3AubGVuZ3RoXCIsIHRfMik7XG5vdXRwdXQgKz0gXCJcXG5cXHRcXHRcXHRcIjtcbnZhciB0YXNrcyA9IFtdO1xudGFza3MucHVzaChcbmZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5lbnYuZ2V0VGVtcGxhdGUoXCIuL3BhcnRpYWxzL2pva2UubmprXCIsIGZhbHNlLCBcInB1YmxpYy9jb21wb25lbnRzL0xpc3QvTGlzdC5uamtcIiwgdHJ1ZSwgZnVuY3Rpb24odF82LHRfNSkge1xuaWYodF82KSB7IGNiKHRfNik7IHJldHVybjsgfVxuY2FsbGJhY2sobnVsbCx0XzUpO30pO1xufSk7XG50YXNrcy5wdXNoKFxuZnVuY3Rpb24odGVtcGxhdGUsIGNhbGxiYWNrKXtcbnRlbXBsYXRlLnJlbmRlcihjb250ZXh0LmdldFZhcmlhYmxlcygpLCBmcmFtZSwgZnVuY3Rpb24odF84LHRfNykge1xuaWYodF84KSB7IGNiKHRfOCk7IHJldHVybjsgfVxuY2FsbGJhY2sobnVsbCx0XzcpO30pO1xufSk7XG50YXNrcy5wdXNoKFxuZnVuY3Rpb24ocmVzdWx0LCBjYWxsYmFjayl7XG5vdXRwdXQgKz0gcmVzdWx0O1xuY2FsbGJhY2sobnVsbCk7XG59KTtcbmVudi53YXRlcmZhbGwodGFza3MsIGZ1bmN0aW9uKCl7XG5vdXRwdXQgKz0gXCJcXG5cXHRcXHRcIjtcbn0pO1xufVxufVxuZnJhbWUgPSBmcmFtZS5wb3AoKTtcbm91dHB1dCArPSBcIlxcblxcdDwvdWw+XFxuPC9kaXY+XFxuXFxuXCI7XG5pZihwYXJlbnRUZW1wbGF0ZSkge1xucGFyZW50VGVtcGxhdGUucm9vdFJlbmRlckZ1bmMoZW52LCBjb250ZXh0LCBmcmFtZSwgcnVudGltZSwgY2IpO1xufSBlbHNlIHtcbmNiKG51bGwsIG91dHB1dCk7XG59XG47XG59IGNhdGNoIChlKSB7XG4gIGNiKHJ1bnRpbWUuaGFuZGxlRXJyb3IoZSwgbGluZW5vLCBjb2xubykpO1xufVxufVxucmV0dXJuIHtcbnJvb3Q6IHJvb3Rcbn07XG5cbn0pKCk7XG59KSgpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBzaGltKG51bmp1Y2tzLCBlbnYsIG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWRbXCJwdWJsaWMvY29tcG9uZW50cy9MaXN0L0xpc3QubmprXCJdICwgZGVwZW5kZW5jaWVzKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2NvbXBvbmVudHMvTGlzdC9MaXN0Lm5qa1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGpva2VVcmwgPSAnaHR0cHM6Ly9hcGkuaWNuZGIuY29tL2pva2VzL3JhbmRvbS8ke2xpbWl0fSc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL2NvbnN0YW50cy5qcyIsImltcG9ydCB7IHBhcnNlVGVtcGxhdGVTdHJpbmcgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEpva2VzKHVybCwgbGltaXQpIHtcblx0cmV0dXJuIGZldGNoKHBhcnNlVGVtcGxhdGVTdHJpbmcodXJsLCB7IGxpbWl0IH0pKVxuXHRcdC50aGVuKHIgPT4ge1xuXHRcdFx0aWYgKCFyLm9rKSB7XG5cdFx0XHRcdHRocm93IEVycm9yKCdObyBtb3JlIGpva2VzIGFib3V0IENodWNrIE5vcnJpcyEnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByLmpzb24oKTtcblx0XHR9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9sb2FkSm9rZXMuanMiLCJ2YXIgbnVuanVja3MgPSByZXF1aXJlKFwibnVuanVja3MvYnJvd3Nlci9udW5qdWNrcy1zbGltXCIpO1xudmFyIGVudjtcbmlmICghbnVuanVja3MuY3VycmVudEVudil7XG5cdGVudiA9IG51bmp1Y2tzLmN1cnJlbnRFbnYgPSBuZXcgbnVuanVja3MuRW52aXJvbm1lbnQoW10sIHVuZGVmaW5lZCk7XG59IGVsc2Uge1xuXHRlbnYgPSBudW5qdWNrcy5jdXJyZW50RW52O1xufVxudmFyIGRlcGVuZGVuY2llcyA9IG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgfHwgKG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgPSB7fSk7XG5cblxuXG5cbnZhciBzaGltID0gcmVxdWlyZShcIi9Vc2Vycy9tbWloYWkvRG9jdW1lbnRzL0dpdEh1Yi9ub24tZHV0Y2gvbm9kZV9tb2R1bGVzL251bmp1Y2tzLWxvYWRlci9ydW50aW1lLXNoaW1cIik7XG5cblxuKGZ1bmN0aW9uKCkgeyhudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkID0gbnVuanVja3MubnVuanVja3NQcmVjb21waWxlZCB8fCB7fSlbXCJwdWJsaWMvdGVtcGxhdGVzL2Vycm9yLm5qa1wiXSA9IChmdW5jdGlvbigpIHtcbmZ1bmN0aW9uIHJvb3QoZW52LCBjb250ZXh0LCBmcmFtZSwgcnVudGltZSwgY2IpIHtcbnZhciBsaW5lbm8gPSBudWxsO1xudmFyIGNvbG5vID0gbnVsbDtcbnZhciBvdXRwdXQgPSBcIlwiO1xudHJ5IHtcbnZhciBwYXJlbnRUZW1wbGF0ZSA9IG51bGw7XG5vdXRwdXQgKz0gXCI8aDE+QmVzdCBqb2tlOiBUaGVyZSBhcmUgbm8gQ2h1Y2sgTm9ycmlzIGpva2VzPC9oMT5cIjtcbmlmKHBhcmVudFRlbXBsYXRlKSB7XG5wYXJlbnRUZW1wbGF0ZS5yb290UmVuZGVyRnVuYyhlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYik7XG59IGVsc2Uge1xuY2IobnVsbCwgb3V0cHV0KTtcbn1cbjtcbn0gY2F0Y2ggKGUpIHtcbiAgY2IocnVudGltZS5oYW5kbGVFcnJvcihlLCBsaW5lbm8sIGNvbG5vKSk7XG59XG59XG5yZXR1cm4ge1xucm9vdDogcm9vdFxufTtcblxufSkoKTtcbn0pKCk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaW0obnVuanVja3MsIGVudiwgbnVuanVja3MubnVuanVja3NQcmVjb21waWxlZFtcInB1YmxpYy90ZW1wbGF0ZXMvZXJyb3IubmprXCJdICwgZGVwZW5kZW5jaWVzKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL3RlbXBsYXRlcy9lcnJvci5uamtcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBudW5qdWNrcyA9IHJlcXVpcmUoXCJudW5qdWNrcy9icm93c2VyL251bmp1Y2tzLXNsaW1cIik7XG52YXIgZW52O1xuaWYgKCFudW5qdWNrcy5jdXJyZW50RW52KXtcblx0ZW52ID0gbnVuanVja3MuY3VycmVudEVudiA9IG5ldyBudW5qdWNrcy5FbnZpcm9ubWVudChbXSwgdW5kZWZpbmVkKTtcbn0gZWxzZSB7XG5cdGVudiA9IG51bmp1Y2tzLmN1cnJlbnRFbnY7XG59XG52YXIgZGVwZW5kZW5jaWVzID0gbnVuanVja3Mud2VicGFja0RlcGVuZGVuY2llcyB8fCAobnVuanVja3Mud2VicGFja0RlcGVuZGVuY2llcyA9IHt9KTtcblxuXG5cblxudmFyIHNoaW0gPSByZXF1aXJlKFwiL1VzZXJzL21taWhhaS9Eb2N1bWVudHMvR2l0SHViL25vbi1kdXRjaC9ub2RlX21vZHVsZXMvbnVuanVja3MtbG9hZGVyL3J1bnRpbWUtc2hpbVwiKTtcblxuXG4oZnVuY3Rpb24oKSB7KG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWQgPSBudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkIHx8IHt9KVtcInB1YmxpYy90ZW1wbGF0ZXMvd2VsbGNvbWUtYmFjay5uamtcIl0gPSAoZnVuY3Rpb24oKSB7XG5mdW5jdGlvbiByb290KGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG52YXIgbGluZW5vID0gbnVsbDtcbnZhciBjb2xubyA9IG51bGw7XG52YXIgb3V0cHV0ID0gXCJcIjtcbnRyeSB7XG52YXIgcGFyZW50VGVtcGxhdGUgPSBudWxsO1xub3V0cHV0ICs9IFwiPGgyPldlbGxjb21lIGJhY2sgXCI7XG5vdXRwdXQgKz0gcnVudGltZS5zdXBwcmVzc1ZhbHVlKHJ1bnRpbWUuY29udGV4dE9yRnJhbWVMb29rdXAoY29udGV4dCwgZnJhbWUsIFwidXNlck5hbWVcIiksIGVudi5vcHRzLmF1dG9lc2NhcGUpO1xub3V0cHV0ICs9IFwiPC9oMj5cXG48aDQgY2xhc3M9XFxcInB1bHNhdGVcXFwiPnRvdWNoIG1lIHRvIHNlZSBqb2NrZXM8L2g0PlwiO1xuaWYocGFyZW50VGVtcGxhdGUpIHtcbnBhcmVudFRlbXBsYXRlLnJvb3RSZW5kZXJGdW5jKGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKTtcbn0gZWxzZSB7XG5jYihudWxsLCBvdXRwdXQpO1xufVxuO1xufSBjYXRjaCAoZSkge1xuICBjYihydW50aW1lLmhhbmRsZUVycm9yKGUsIGxpbmVubywgY29sbm8pKTtcbn1cbn1cbnJldHVybiB7XG5yb290OiByb290XG59O1xuXG59KSgpO1xufSkoKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gc2hpbShudW5qdWNrcywgZW52LCBudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkW1wicHVibGljL3RlbXBsYXRlcy93ZWxsY29tZS1iYWNrLm5qa1wiXSAsIGRlcGVuZGVuY2llcylcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy90ZW1wbGF0ZXMvd2VsbGNvbWUtYmFjay5uamtcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIHtcblx0Y29uc3RydWN0b3IobmFtZSwgcGVybWFuZW50ID0gdHJ1ZSwgY2FsbEJhY2spIHtcblxuXHRcdGNvbnN0IHN0b3JhZ2UgPSBwZXJtYW5lbnQgPyBsb2NhbFN0b3JhZ2UgOiBzZXNzaW9uU3RvcmFnZTtcblxuXHRcdHRoaXMuZ2V0U3RvcmFnZSA9ICgpID0+IEpTT04ucGFyc2Uoc3RvcmFnZS5nZXRJdGVtKG5hbWUpIHx8ICdbXScpO1xuXG5cdFx0dGhpcy5zZXRTdG9yYWdlID0gZGF0YSA9PiBzdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG5cdFx0aWYgKGNhbGxCYWNrKSB7XG5cdFx0XHRjYWxsQmFjaygpO1xuXHRcdH1cblx0fVxuXHRzZXQodmFsdWUpIHtcblx0XHR0aGlzLnNldFN0b3JhZ2UodmFsdWUpO1xuXHR9XG5cblx0aW5zZXJ0KGl0ZW0sIGNhbGxCYWNrKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLmdldFN0b3JhZ2UoKTtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuXHRcdFx0aXRlbS5mb3JFYWNoKHggPT4gaXRlbXMucHVzaCh4KSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGl0ZW1zLnB1c2goaXRlbSk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RvcmFnZShpdGVtcyk7XG5cblx0XHRpZiAoY2FsbEJhY2spIHtcblx0XHRcdGNhbGxCYWNrKCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0QWxsKCkge1xuXHRcdHJldHVybiB0aGlzLmdldFN0b3JhZ2UoKTtcblx0fVxuXG5cdGZpbmQoaWQpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuZ2V0U3RvcmFnZSgpO1xuXHRcdHJldHVybiBpdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PSBpZCk7XG5cdH1cblxuXHRyZW1vdmUoaWQpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuZ2V0U3RvcmFnZSgpO1xuXHRcdGNvbnN0IHJlbW92ZWRJdGVtID0gaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcblx0XHR0aGlzLnNldFN0b3JhZ2UoaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWQpKTtcblx0XHRyZXR1cm4gcmVtb3ZlZEl0ZW07XG5cdH1cblxuXHRzZXRMZW5ndGgobWF4TGVuZ3RoKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLmdldFN0b3JhZ2UoKTtcblx0XHRjb25zdCByZW1haW5JdGVtcyA9IGl0ZW1zLnNwbGljZShpdGVtcy5sZW5ndGggLSBtYXhMZW5ndGggKyAxKTtcblx0XHR0aGlzLnNldChyZW1haW5JdGVtcyk7XG5cdFx0cmV0dXJuIGl0ZW1zO1xuXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvU3RvcmUuanMiLCIvLyBFbGVtZW50LmNsb3Nlc3QgcG9seWZpbGxcbigoZSkgPT4ge1xuICAgIGUuY2xvc2VzdCB8fCBhc3NpZ24oKTtcbiAgICBmdW5jdGlvbiBhc3NpZ24oKSB7XG4gICAgICAgIGUuY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3QoY3NzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlID8gKHRoaXMubWF0Y2hlcyhjc3MpID8gdGhpcyA6IGNsb3Nlc3QuY2FsbCh0aGlzLnBhcmVudE5vZGUsIGNzcykpIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICB9XG59KShFbGVtZW50LnByb3RvdHlwZSk7XG5cbmNsYXNzIFRhYiB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7VGFic30gICB0YWJzICAgSW5zdGFuY2Ugb2YgVGFicyB3aGljaCBjb250YWlucyB0aGlzIHRhYlxuICAgICAqIEBwYXJhbSAge0RvbX0gICAgdG9nZ2xlIHRvZ2dsZSBidXR0b25cbiAgICAgKiBAcGFyYW0gIHtEb219ICAgIHRhYiAgICBibG9jayB0byBoaWRlIG9yIHNob3dcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAodGFicywgdG9nZ2xlLCB0YWIpIHtcbiAgICAgICAgdGhpcy50YWJzID0gdGFicztcbiAgICAgICAgdGhpcy50b2dnbGUgPSB0b2dnbGU7XG4gICAgICAgIHRoaXMudGFiID0gdGFiO1xuICAgICAgICB0aGlzLnNyYyA9IHRoaXMudGFiLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICAgICAgaWYgKHRoaXMuc3JjICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1RvQmVMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRhYnMuYWN0aXZlVG9nZ2xlQ2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCAoKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpOyAvLyBuZWVkZWQgZm9yIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgdGhpcy50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4pO1xuICAgIH1cblxuICAgIGxvYWQgKCkge1xuICAgICAgICAvLyBAdG9kbzogdXNlIGZldGNoKCkgZnVuY3Rpb25cbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB0aGlzLmhhc1RvQmVMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGVuY29kZVVSSSh0aGlzLnNyYykpO1xuICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCB8fCB4aHIuc3RhdHVzID09PSAzMDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYi5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1RvQmVMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuXG4gICAgb3BlbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhYnMuYWN0aXZlID09PSB0aGlzKSB7XG4gICAgICAgICAgICAvLyBhbHJlYWR5IG9wZW5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNUb0JlTG9hZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50YWJzLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy50YWJzLmFjdGl2ZS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFicy5hY3RpdmUgPSB0aGlzO1xuICAgICAgICB0aGlzLnRhYi5zdHlsZS5kaXNwbGF5ID0gYGJsb2NrYDtcbiAgICAgICAgdGhpcy50b2dnbGUuY2xhc3NMaXN0LmFkZCh0aGlzLnRhYnMuYWN0aXZlVG9nZ2xlQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMudGFiLnN0eWxlLmRpc3BsYXkgPSBgbm9uZWA7XG4gICAgICAgIHRoaXMudG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy50YWJzLmFjdGl2ZVRvZ2dsZUNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSAoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJzIHtcbiAgICBjb25zdHJ1Y3RvciAoY29udGFpbmVyLCBibG9ja0NsYXNzTmFtZSA9IGB0YWJzYCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5zZXRDbGFzc05hbWVzKGJsb2NrQ2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCAoKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGVsZW1lbnQgPT4gZWxlbWVudC5jbG9zZXN0KGAuJHt0aGlzLmJsb2NrQ2xhc3NOYW1lfWApID09PSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy50b2dnbGVzID0gQXJyYXkuZnJvbSh0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMudG9nZ2xlU2VsZWN0b3IpKS5maWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgdGhpcy50YWJzID0gQXJyYXkuZnJvbSh0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMudGFiU2VsZWN0b3IpKS5maWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgdGhpcy5pbml0ZWRUYWJzID0gW107XG4gICAgICAgIGlmICghdGhpcy5pc0V2ZXJ5dGhpbmdPaygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy50b2dnbGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IHRhYiA9IG5ldyBUYWIgKHRoaXMsIHRoaXMudG9nZ2xlc1tpbmRleF0sIHRoaXMudGFic1tpbmRleF0pO1xuICAgICAgICAgICAgdGhpcy5pbml0ZWRUYWJzLnB1c2godGFiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGNsYXNzZXMgYW5kIHNlbGVjdG9ycyBmb3IgYmxvY2tzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGJsb2NrQ2xhc3NOYW1lICd0YWJzJyBieSBkZWZhdWx0XG4gICAgICovXG4gICAgc2V0Q2xhc3NOYW1lcyAoYmxvY2tDbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5ibG9ja0NsYXNzTmFtZSA9IGJsb2NrQ2xhc3NOYW1lO1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdG9yID0gYC4ke2Jsb2NrQ2xhc3NOYW1lfV9fdG9nZ2xlYDtcbiAgICAgICAgdGhpcy50YWJTZWxlY3RvciA9IGAuJHtibG9ja0NsYXNzTmFtZX1fX3RhYmA7XG4gICAgICAgIHRoaXMuYWN0aXZlVG9nZ2xlQ2xhc3NOYW1lID0gYCR7YmxvY2tDbGFzc05hbWV9X190b2dnbGVfYWN0aXZlYDtcbiAgICB9XG5cbiAgICBpc0V2ZXJ5dGhpbmdPayAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZXMubGVuZ3RoICE9PSB0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFRhYnMgdG9nZ2xlcyBhbmQgdGFicyBhbW91bnRzIGFyZSBub3QgbWF0Y2hpbmdgKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvZ2dsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZXJlJ3Mgbm8gdG9nZ2xlcyBmb3IgdGFic2ApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFicy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlcmUncyBubyBjb250ZW50IHRhYnNgKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBkZXN0cm95ICgpIHtcbiAgICAgICAgdmFyIHRhYjtcbiAgICAgICAgd2hpbGUgKHRhYiA9IHRoaXMuaW5pdGVkVGFicy5wb3AoKSkge1xuICAgICAgICAgICAgdGFiLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBpdGVyYXRlcyB0aHJvdWdoIGFsbCBtYXRjaGVkIGJsb2NrcyBhbmQgaW5pdGlhbGl6ZXMgdGFicyBjbGFzc2VzXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNvbmZpZyBzZWxlY3RvciBmb3IgdGFic1xuICogQHBhcmFtICB7T2JqZWN0fSBjb25maWcge1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvciBmb3IgdGFic1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrQ2xhc3NOYW1lOiBibG9jayBjbGFzc05hbWUgKHJlYWQgbW9yZSBhYm91dCBfYmVtKVxuICogICAgICAgICAgICAgICAgICAgICAgICAgfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0VGFicyhjb25maWcpIHtcbiAgICB2YXIgc2VsZWN0b3I7XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09IGBzdHJpbmdgKSB7XG4gICAgICAgIHNlbGVjdG9yID0gY29uZmlnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB7c2VsZWN0b3IsIGJsb2NrQ2xhc3NOYW1lfSA9IGNvbmZpZzsgLy8gZG9lc24ndCB3b3JrIHdpdGhvdXQgJ3ZhcidcbiAgICB9XG4gICAgZm9yIChsZXQgY29udGFpbmVyIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSB7XG4gICAgICAgIGxldCB0YWJzID0gbmV3IFRhYnMoY29udGFpbmVyLCBibG9ja0NsYXNzTmFtZSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZnV0dXJlLXRhYnMvZGlzdC90YWJzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9