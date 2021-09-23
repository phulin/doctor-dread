/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1662:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(6467);

__webpack_require__(4594);

__webpack_require__(1235);

__webpack_require__(893);

__webpack_require__(7926);

__webpack_require__(5188);

__webpack_require__(5594);

__webpack_require__(5198);

__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Clan = exports.ClanError = void 0;

__webpack_require__(778);

__webpack_require__(3239);

__webpack_require__(2238);

__webpack_require__(7924);

__webpack_require__(8151);

__webpack_require__(7434);

__webpack_require__(7807);

__webpack_require__(7504);

__webpack_require__(517);

__webpack_require__(5899);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _logger = _interopRequireDefault(__webpack_require__(8685));

var _utils = __webpack_require__(8588);

var _class;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

function _wrapRegExp() {
  _wrapRegExp = function _wrapRegExp(re, groups) {
    return new BabelRegExp(re, undefined, groups);
  };

  var _super = RegExp.prototype;

  var _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    _groups.set(_this, groups || _groups.get(re));

    return _setPrototypeOf(_this, BabelRegExp.prototype);
  }

  _inherits(BabelRegExp, RegExp);

  BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    if (result) result.groups = buildGroups(result, this);
    return result;
  };

  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if (typeof substitution === "string") {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    } else if (typeof substitution === "function") {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;

        if (typeof args[args.length - 1] !== "object") {
          args = [].slice.call(args);
          args.push(buildGroups(args, _this));
        }

        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      groups[name] = result[g[name]];
      return groups;
    }, Object.create(null));
  }

  return _wrapRegExp.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ClanError = /*#__PURE__*/function (_Error) {
  _inherits(ClanError, _Error);

  var _super = _createSuper(ClanError);

  function ClanError(message, reason) {
    var _this;

    _classCallCheck(this, ClanError);

    _this = _super.call(this, message);

    _defineProperty(_assertThisInitialized(_this), "reason", void 0);

    _this.reason = reason;
    Object.setPrototypeOf(_assertThisInitialized(_this), ClanError.prototype);
    return _this;
  }

  return ClanError;
}( /*#__PURE__*/_wrapNativeSuper(Error)); // It would be fantastic to have this function properly typed
// But until someone can work out how to do it, it gets the
// comment blocks of shame

/* eslint-disable */


exports.ClanError = ClanError;

function validate(target, propertyName, descriptor) {
  if (!(descriptor !== null && descriptor !== void 0 && descriptor.value)) return;
  var method = descriptor.value; // @ts-ignore

  descriptor.value = function () {
    // @ts-ignore
    if (this.id !== (0, _kolmafia.getClanId)()) {
      throw new Error("You are no longer a member of this clan");
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return method.apply(this, args);
  };
}
/* eslint-enable */


var clanIdCache = {};

var toPlayerId = player => typeof player === "string" ? (0, _kolmafia.getPlayerId)(player) : player;

var LOG_FAX_PATTERN = /*#__PURE__*/_wrapRegExp(/([0-9]{2}\/[0-9]{2}\/[0-9]{2}, [0-9]{2}:[0-9]{2}(?:AM|PM): )<a (?:(?!>)[\s\S])+>((?:(?!<)[\s\S])+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
});

var WHITELIST_DEGREE_PATTERN = /*#__PURE__*/_wrapRegExp(/(.*?) \(\xB0([0-9]+)\)/, {
  name: 1,
  degree: 2
});

var Clan = (_class = /*#__PURE__*/function () {
  function Clan(id, name) {
    _classCallCheck(this, Clan);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    this.id = id;
    this.name = name;
  }
  /**
   * Join clan
   */


  _createClass(Clan, [{
    key: "join",
    value: function join() {
      return Clan._join(this.id);
    }
  }, {
    key: "check",
    value: function check() {
      return (0, _kolmafia.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
    /**
     * Return the monster that is currently in the current clan's fax machine if any
     */

  }, {
    key: "getCurrentFax",
    value: function getCurrentFax() {
      var logs = (0, _kolmafia.visitUrl)("clan_log.php");
      var lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax) return null;

      var _lastFax = _slicedToArray(lastFax, 4),
          monsterName = _lastFax[3];

      if (!monsterName) return null;
      return Monster.get(monsterName);
    }
    /**
     * List available ranks (name, degree and id) from the current clan
     */

  }, {
    key: "getRanks",
    value: function getRanks() {
      var page = (0, _kolmafia.visitUrl)("clan_whitelist.php");
      return (0, _kolmafia.xpath)(page, '//select[@name="level"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var match = (0, _kolmafia.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN);
        var id = (0, _kolmafia.xpath)(validHtml, "//@value")[0];
        if (!match || !id) return null;

        var _match = _slicedToArray(match, 3),
            name = _match[1],
            degree = _match[2];

        return {
          name: name,
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(_utils.notNull);
    }
    /**
     * Add a player to the current clan's whitelist.
     * If the player is already in the whitelist this will change their rank or title.
     * @param player Player id or name
     * @param rankName Rank to give the player. If not provided they will be given the lowest rank
     * @param title Title to give the player. If not provided, will be blank
     */

  }, {
    key: "addPlayerToWhitelist",
    value: function addPlayerToWhitelist(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var playerId = toPlayerId(player);
      var ranks = this.getRanks();
      var rank = rankName ? ranks.find(r => r.name === rankName) : ranks.sort((a, b) => a.degree - b.degree)[0];
      if (!rank) return false;
      var result = (0, _kolmafia.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
    /**
     * Remove a player from the current clan's whitelist
     * @param player Player id or name
     */

  }, {
    key: "removePlayerFromWhitelist",
    value: function removePlayerFromWhitelist(player) {
      var playerId = toPlayerId(player);
      var result = (0, _kolmafia.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
    /**
     * Return the amount of meat in the current clan's coffer.
     */

  }, {
    key: "getMeatInCoffer",
    value: function getMeatInCoffer() {
      var page = (0, _kolmafia.visitUrl)("clan_stash.php");

      var _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"],
          _ref2 = _slicedToArray(_ref, 2),
          meat = _ref2[1];

      return (0, _utils.parseNumber)(meat);
    }
    /**
     * Add the given amount of meat to the current clan's coffer.
     * @param amount Amount of meat to put in coffer
     */

  }, {
    key: "putMeatInCoffer",
    value: function putMeatInCoffer(amount) {
      var result = (0, _kolmafia.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
    /**
     * Take items from the stash
     *
     * This function will also take equivalent foldables if the original item cannot be found
     *
     * @param items Items to take
     * @returns Items successfully taken
     */

  }, {
    key: "take",
    value: function take(items) {
      var map = (0, _utils.arrayToCountedMap)(items);
      map.forEach((quantity, item) => {
        var needed = Math.max(0, quantity - (0, _kolmafia.availableAmount)(item));

        if (needed === 0) {
          return map.set(item, 0);
        }

        var foldGroup = (0, _lib.getFoldGroup)(item);

        var _iterator = _createForOfIteratorHelper(foldGroup),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var foldable = _step.value;
            var quantityToFold = Math.min(needed, (0, _kolmafia.availableAmount)(foldable));

            for (var _i3 = 0; _i3 < quantityToFold; _i3++) {
              (0, _kolmafia.cliExecute)("fold ".concat(item.name));
              needed--;
            }

            return map.set(item, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        (0, _kolmafia.refreshStash)();

        for (var _i2 = 0, _arr2 = [item].concat(_toConsumableArray(foldGroup)); _i2 < _arr2.length; _i2++) {
          var matchingItem = _arr2[_i2];
          var quantityToTake = Math.min(needed, (0, _kolmafia.stashAmount)(matchingItem));
          if (quantityToTake === 0) continue; // If we can't take from the stash, there's no sense in iterating through the whole fold group

          if (!(0, _kolmafia.takeStash)(quantityToTake, matchingItem)) return;

          if (matchingItem === item) {
            needed -= quantityToTake;
          } else {
            for (var i = 0; i < quantityToTake; i++) {
              (0, _kolmafia.cliExecute)("fold ".concat(matchingItem.name));
              needed--;
            }
          }
        }
      });
      return Array.isArray(items) ? (0, _utils.countedMapToArray)(map) : map;
    }
    /**
     * Put items in the stash
     * @param items Items to put in the stash
     * @returns Items successfully put in the stash
     */

  }, {
    key: "put",
    value: function put(items) {
      var map = (0, _utils.arrayToCountedMap)(items);
      if (!this.check()) throw new Error("Wanted to return ".concat((0, _utils.countedMapToString)(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      map.forEach((quantity, item) => {
        (0, _kolmafia.retrieveItem)(quantity, item);
        var returned = Math.min(quantity, (0, _kolmafia.availableAmount)(item));
        (0, _kolmafia.putStash)(returned, item);
        map.set(item, quantity - returned);
      });
      return Array.isArray(items) ? (0, _utils.countedMapToArray)(map) : map;
    }
    /**
     * Return the monster that is currently in the current clan's fax machine if any
     */

  }, {
    key: "withStash",
    value: function withStash(items, callback) {
      var map = (0, _utils.arrayToCountedMap)(items);
      return Clan._withStash(() => this.take(map), borrowed => this.put(borrowed), callback);
    }
  }], [{
    key: "_join",
    value: function _join(id) {
      var result = (0, _kolmafia.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));

      if (!result.includes("clanhalltop.gif")) {
        throw new Error("Could not join clan");
      }

      return Clan.get();
    }
  }, {
    key: "_withStash",
    value: function _withStash(borrowFn, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    returnFn, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback) {
      var borrowed = borrowFn();
      var map = (0, _utils.arrayToCountedMap)(borrowed);

      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = (0, _utils.arrayToCountedMap)(returnFn(borrowed));
          map.forEach((quantity, item) => {
            var remaining = quantity - (returned.get(item) || 0);

            if (remaining > 0) {
              map.set(item, remaining);
            } else {
              map.delete(item);
            }
          });

          if (map.size > 0) {
            _logger.default.error("Failed to return <b>".concat((0, _utils.countedMapToString)(map), "</b> to <b>").concat(this.name, "</b> stash"));
          }
        }
      }
    }
    /**
     * Join a clan and return its instance
     * @param clanIdOrName Clan id or name
     */

  }, {
    key: "join",
    value: function join(clanIdOrName) {
      var clanId;

      if (typeof clanIdOrName === "string") {
        var _clanName = clanIdOrName.toLowerCase();

        if (_clanName === (0, _kolmafia.getClanName)().toLowerCase()) {
          return Clan.get();
        }

        if (!(_clanName in clanIdCache)) {
          var clan = Clan.getWhitelisted().find(c => c.name.toLowerCase() === _clanName);

          if (!clan) {
            throw new Error("Player is not whitelisted to clan");
          }

          clanIdCache[_clanName] = clan.id;
        }

        clanId = clanIdCache[_clanName];
      } else {
        clanId = clanIdOrName;

        if (clanId === (0, _kolmafia.getClanId)()) {
          return Clan.get();
        }
      }

      return Clan._join(clanId);
    }
    /**
     * Execute callback as a member of a clan
     * and then restore prior membership
     * @param clanIdOrName Clan id or name
     */

  }, {
    key: "with",
    value: function _with(clanIdOrName, callback) {
      var startingClan = Clan.get();
      var clan = Clan.join(clanIdOrName);

      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
    /**
     * Execute callback with items from a clan stash
     * and then restore those items to the stash
     *
     * During the execution of the callback, player will not be in the stash clan
     *
     * @param clanIdOrName Clan id or name
     */

  }, {
    key: "withStash",
    value: function withStash(clanIdOrName, items, // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    callback) {
      return Clan._withStash(() => Clan.with(clanIdOrName, clan => clan.take(items)), borrowed => Clan.with(clanIdOrName, clan => clan.put(borrowed)), callback);
    }
    /**
     * Return player's current Clan
     */

  }, {
    key: "get",
    value: function get() {
      return new Clan((0, _kolmafia.getClanId)(), (0, _kolmafia.getClanName)());
    }
    /**
     * Get list of clans to which the player is whitelisted
     */

  }, {
    key: "getWhitelisted",
    value: function getWhitelisted() {
      var page = (0, _kolmafia.visitUrl)("clan_signup.php");
      return (0, _kolmafia.xpath)(page, '//select[@name="whichclan"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var id = Number.parseInt((0, _kolmafia.xpath)(validHtml, "//@value")[0]);
        var name = (0, _kolmafia.xpath)(validHtml, "//text()")[0];
        return new Clan(id, name);
      });
    }
  }]);

  return Clan;
}(), (_applyDecoratedDescriptor(_class.prototype, "getCurrentFax", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "getCurrentFax"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getRanks", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "getRanks"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addPlayerToWhitelist", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "addPlayerToWhitelist"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removePlayerFromWhitelist", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "removePlayerFromWhitelist"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getMeatInCoffer", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "getMeatInCoffer"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "putMeatInCoffer", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "putMeatInCoffer"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "take", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "take"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "put", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "put"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "withStash", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "withStash"), _class.prototype)), _class);
exports.Clan = Clan;

/***/ }),

/***/ 2219:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Copier = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Copier = function Copier(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  _classCallCheck(this, Copier);

  _defineProperty(this, "couldCopy", void 0);

  _defineProperty(this, "prepare", void 0);

  _defineProperty(this, "canCopy", void 0);

  _defineProperty(this, "copiedMonster", void 0);

  _defineProperty(this, "fightCopy", null);

  this.couldCopy = couldCopy;
  this.prepare = prepare;
  this.canCopy = canCopy;
  this.copiedMonster = copiedMonster;
  if (fightCopy) this.fightCopy = fightCopy;
} // static PrintScreenButton = new Copier(
//   $item`print screen button`,
//   null,
//   $item`screencapped monster`,
//   () => property.getMonster(`screencappedMonster`),
//   () => 1,
//   () => use($item`screencapped monster`)
// );
// static PulledGreenTaffy = new Copier(
//   $item`pulled green taffy`,
//   null,
//   $item`envyfish egg`,
//   () => property.getMonster(`screencappedMonster`),
//   () => (property.getBoolean("_envyfishEggUsed") ? 0 : 1),
//   () => use($item`envyfish egg`)
// );
;

exports.Copier = Copier;

/***/ }),

/***/ 7912:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Dreadsylvania = exports.SlimeTube = exports.Hobopolis = exports.default = void 0;

__webpack_require__(7504);

__webpack_require__(778);

__webpack_require__(3239);

__webpack_require__(2238);

__webpack_require__(7924);

__webpack_require__(5899);

__webpack_require__(2352);

var _kolmafia = __webpack_require__(1664);

var _Clan = __webpack_require__(1662);

var _lib = __webpack_require__(3311);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Dungeon = /*#__PURE__*/function () {
  /**
   * Creates dungeon object for managing clan dungeons
   * @param name Name of the dungeon in question
   * @param loot Distributable loot dropped by bosses in dungeon
   * @param openAction String action used in form submission to open dungeon
   * @param closeAction String action used in form submission to close dungeon
   * @param openCost Meat cost of opening dungeon
   * @param openImage Image text to search clan_basement.php for to check if dungeon is open
   * @param closedImage Image text to search clan_basement.php for to check if dungeon is closed
   */
  function Dungeon(name, loot, openAction, closeAction, openCost, openImage, closedImage) {
    _classCallCheck(this, Dungeon);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "loot", void 0);

    _defineProperty(this, "openAction", void 0);

    _defineProperty(this, "closeAction", void 0);

    _defineProperty(this, "openCost", void 0);

    _defineProperty(this, "openImage", void 0);

    _defineProperty(this, "closedImage", void 0);

    this.name = name;
    this.loot = loot;
    this.openAction = openAction;
    this.closeAction = closeAction;
    this.openCost = openCost;
    this.openImage = openImage;
    this.closedImage = closedImage;
  }
  /**
   * Distributes loot from given dungeon
   * @param idOrName The player you're trying to distribute to, either as a username or a player ID. Defaults to self.
   * @param loot The loot you're looking to distribute, specific to this dungeon
   * @param distributeAllOfAGivenItem For items that you can get multiple of in a dungeon. When true, this will give everything of that ilk to your chosen player.
   */


  _createClass(Dungeon, [{
    key: "distribute",
    value: function distribute() {
      var idOrName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _kolmafia.myId)();
      var loot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.loot;
      var distributeAllOfAGivenItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var player = (0, _lib.getPlayerFromIdOrName)(idOrName);
      var lootList = Array.isArray(loot) ? loot : [loot];
      var badLoot = lootList.find(lootItem => !this.loot.includes(lootItem));

      if (badLoot) {
        throw new Error("".concat(badLoot, " is not a valid piece of dungeon loot"));
      }

      var pageText = (0, _kolmafia.visitUrl)("clan_basement.php");

      if (!pageText.match(player.name)) {
        throw new Error("".concat(player.name, " cannot be distributed loot from ").concat((0, _kolmafia.getClanName)()));
      }

      var itemNames = (0, _kolmafia.xpath)(pageText, "//tr/td[2]/b/text()");
      var whichLoots = (0, _kolmafia.xpath)(pageText, '//form[@action="clan_basement.php"]//input[@type="hidden"][@name="whichloot"]/@value');
      itemNames.forEach((itemName, index) => {
        if (lootList.includes((0, _kolmafia.toItem)(itemName))) {
          (0, _kolmafia.visitUrl)("clan_basement.php?whichloot=".concat(whichLoots[index], "&recipient=").concat(player.id));
          if (!distributeAllOfAGivenItem) lootList.slice(lootList.indexOf((0, _kolmafia.toItem)(itemName)));
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      (0, _kolmafia.visitUrl)("clan_basement.php?action=".concat(this.closeAction, "&confirm=true"), true);
      var pageText = (0, _kolmafia.visitUrl)("clan_basement.php");
      return pageText.includes(this.closedImage);
    }
    /**
     * Opens clan dungeon and, if relevant, pays meat to do so
     * @param paymentPolicy "None", "All", or "Difference". Difference pays into the stash the exact amount needed to open the dungeon.
     */

  }, {
    key: "open",
    value: function open() {
      var paymentPolicy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Difference";
      var pageText = (0, _kolmafia.visitUrl)("clan_basement.php");
      if (pageText.includes(this.openImage)) return true;

      var clan = _Clan.Clan.get();

      if (paymentPolicy === "All") {
        clan.putMeatInCoffer(this.openCost);
      } else {
        var stashMeat = clan.getMeatInCoffer();
        var payDifference = this.openCost - stashMeat;

        if (payDifference > 0) {
          if (paymentPolicy === "None") return false;
          clan.putMeatInCoffer(payDifference);
        }
      }

      (0, _kolmafia.visitUrl)("clan_basement.php?action=".concat(this.openAction), true);
      return (0, _kolmafia.visitUrl)("clan_basement.php").includes(this.openImage);
    }
  }], [{
    key: "all",
    value: function all() {
      return [Hobopolis, SlimeTube, Dreadsylvania];
    }
  }]);

  return Dungeon;
}();

exports.default = Dungeon;
var Hobopolis = new Dungeon("Hobopolis", (0, _templateString.$items)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Ol' Scratch's ash can, Ol' Scratch's ol' britches, Ol' Scratch's stovepipe hat, Ol' Scratch's infernal pitchfork, Ol' Scratch's manacles, Ol' Scratch's stove door, Frosty's carrot, Frosty's nailbat, Frosty's old silk hat, Frosty's arm, Frosty's iceball, Frosty's snowball sack, Oscus's dumpster waders, Oscus's pelt, Wand of Oscus, Oscus's flypaper pants, Oscus's garbage can lid, Oscus's neverending soda, Zombo's grievous greaves, Zombo's shield, Zombo's skullcap, Zombo's empty eye, Zombo's shoulder blade, Zombo's skull ring, Chester's bag of candy, Chester's cutoffs, Chester's moustache, Chester's Aquarius medallion, Chester's muscle shirt, Chester's sunglasses, Hodgman's bow tie, Hodgman's porkpie hat, Hodgman's lobsterskin pants, Hodgman's almanac, Hodgman's lucky sock, Hodgman's metal detector, Hodgman's varcolac paw, Hodgman's harmonica, Hodgman's garbage sticker, Hodgman's cane, Hodgman's whackin' stick, Hodgman's disgusting technicolor overcoat, Hodgman's imaginary hamster"]))), "cleansewer", "floodsewer", 1000000, "opengrate.gif", "sewergrate.gif");
exports.Hobopolis = Hobopolis;
var SlimeTube = new Dungeon("The Slime Tube", (0, _templateString.$items)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["slime-soaked brain, slime-soaked hypophysis, slime-soaked sweat gland, squirming Slime larva, caustic slime nodule, caustic slime nodule, hardened slime belt, hardened slime hat, hardened slime pants"]))), "cleanspot", "sealtube", 250000, "slimehole.gif", "greasespot.gif");
exports.SlimeTube = SlimeTube;
var Dreadsylvania = new Dungeon("Dreadsylvania", (0, _templateString.$items)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Great Wolf's headband, Great Wolf's right paw, Great Wolf's left paw, Great Wolf's lice, Great Wolf's rocket launcher, Great Wolf's beastly trousers, Drapes-You-Regally, Warms-Your-Tush, Covers-Your-Head, Protects-Your-Junk, Quiets-Your-Steps, Helps-You-Sleep, Mayor Ghost's khakis, Mayor Ghost's cloak, Mayor Ghost's toupee, Mayor Ghost's scissors, Mayor Ghost's sash, Mayor Ghost's gavel, zombie mariachi hat, zombie accordion, zombie mariachi pants, HOA regulation book, HOA zombie eyes, HOA citation pad, Unkillable Skeleton's skullcap, Unkillable Skeleton's shinguards, Unkillable Skeleton's breastplate, Unkillable Skeleton's shield, Unkillable Skeleton's sawsword, Unkillable Skeleton's restless leg, skull capacitor, Thunkula's drinking cap, Drunkula's silky pants, Drunkula's cape, Drunkula's ring of haze, Drunkula's wineglass, Drunkula's bell, bottle of Bloodweiser, bottle of Bloodweiser, bottle of Bloodweiser, bottle of Bloodweiser, electric Kool-Aid, electric Kool-Aid, electric Kool-Aid, electric Kool-Aid, ghost pepper, ghost pepper, ghost pepper, ghost pepper, Gets-You-Drunk, Gets-You-Drunk, Gets-You-Drunk, Gets-You-Drunk, wriggling severed nose, wriggling severed nose, wriggling severed nose, wriggling severed nose, Hunger\u2122 Sauce, Hunger\u2122 Sauce, Hunger\u2122 Sauce, Hunger\u2122 Sauce"]))), "translatemap", "foldmap", 1000000, "dvmap.gif", "foldmap.gif");
exports.Dreadsylvania = Dreadsylvania;

/***/ }),

/***/ 9477:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(5594);

__webpack_require__(5198);

__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

__webpack_require__(2238);

__webpack_require__(7924);

__webpack_require__(893);

__webpack_require__(6467);

__webpack_require__(7434);

__webpack_require__(4875);

__webpack_require__(8151);

__webpack_require__(5899);

__webpack_require__(778);

__webpack_require__(3239);

var _kolmafia = __webpack_require__(1664);

var _utils = __webpack_require__(8588);

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Kmail = /*#__PURE__*/function () {
  function Kmail(rawKmail) {
    _classCallCheck(this, Kmail);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "date", void 0);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "senderId", void 0);

    _defineProperty(this, "senderName", void 0);

    _defineProperty(this, "rawMessage", void 0);

    this.id = Number(rawKmail.id);
    this.date = new Date(rawKmail.localtime);
    this.type = rawKmail.type;
    this.senderId = Number(rawKmail.fromid);
    this.senderName = rawKmail.fromname;
    this.rawMessage = rawKmail.message;
  }
  /**
   * Delete the kmail
   *
   * @returns Whether the kmail was deleted
   */


  _createClass(Kmail, [{
    key: "delete",
    value: function _delete() {
      return Kmail.delete([this]) === 1;
    }
    /**
     * Message contents without any HTML from items or meat
     */

  }, {
    key: "message",
    get: function get() {
      var match = this.rawMessage.match(/^(.*?)</);
      return match ? match[1] : this.rawMessage;
    }
    /**
     * Get items attached to the kmail
     *
     * @returns Map of items attached to the kmail and their quantities
     */

  }, {
    key: "items",
    value: function items() {
      return new Map(Object.entries((0, _kolmafia.extractItems)(this.message)).map(_ref => {
        var _ref2 = _slicedToArray(_ref, 2),
            itemName = _ref2[0],
            quantity = _ref2[1];

        return [Item.get(itemName), quantity];
      }));
    }
    /**
     * Get meat attached to the kmail
     *
     * @returns Meat attached to the kmail
     */

  }, {
    key: "meat",
    value: function meat() {
      return (0, _kolmafia.extractMeat)(this.message);
    }
    /**
     * Reply to kmail
     *
     * @see Kmail.send
     *
     * @returns True if the kmail was successfully sent
     */

  }, {
    key: "reply",
    value: function reply() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var meat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return Kmail.send(this.senderId, message, items, meat);
    }
  }], [{
    key: "parse",
    value:
    /**
     * Parses a kmail from KoL's native format
     *
     * @param rawKmail Kmail in the format supplies by api.php
     * @returns Parsed kmail
     */
    function parse(rawKmail) {
      return new Kmail(rawKmail);
    }
    /**
     * Returns all of the player's kmails
     *
     * @returns Parsed kmails
     */

  }, {
    key: "inbox",
    value: function inbox() {
      return JSON.parse((0, _kolmafia.visitUrl)("api.php?what=kmail&for=libram")).map(Kmail.parse);
    }
    /**
     * Bulk delete kmails
     *
     * @param kmails Kmails to delete
     * @returns Number of kmails deleted
     */

  }, {
    key: "delete",
    value: function _delete(kmails) {
      var _results$match$, _results$match;

      var results = (0, _kolmafia.visitUrl)("messages.php?the_action=delete&box=Inbox&pwd&".concat(kmails.map(k => "sel".concat(k.id, "=on")).join("&")));
      return Number((_results$match$ = (_results$match = results.match(/<td>(\d) messages? deleted.<\/td>/)) === null || _results$match === void 0 ? void 0 : _results$match[1]) !== null && _results$match$ !== void 0 ? _results$match$ : 0);
    }
  }, {
    key: "_genericSend",
    value: function _genericSend(to, message, items, meat, chunkSize, constructUrl, successString) {
      var m = meat;

      var sendableItems = _toConsumableArray((0, _utils.arrayToCountedMap)(items).entries()).filter(_ref3 => {
        var _ref4 = _slicedToArray(_ref3, 1),
            item = _ref4[0];

        return (0, _kolmafia.isGiftable)(item);
      });

      var result = true;
      var chunks = (0, _utils.chunk)(sendableItems, chunkSize); // Split the items to be sent into chunks of max 11 item types

      var _iterator = _createForOfIteratorHelper(chunks.length > 0 ? chunks : [null]),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;

          var _itemsQuery = c === null ? [] : c.map((_ref5, index) => {
            var _ref6 = _slicedToArray(_ref5, 2),
                item = _ref6[0],
                quantity = _ref6[1];

            return "whichitem".concat(index + 1, "=").concat((0, _kolmafia.toInt)(item), "&howmany").concat(index + 1, "=").concat(quantity);
          });

          var r = (0, _kolmafia.visitUrl)(constructUrl(m, _itemsQuery.join("&"), _itemsQuery.length));

          if (r.includes("That player cannot receive Meat or items")) {
            return Kmail.gift(to, message, items, meat);
          } // Make sure we don't send the same batch of meat with every chunk


          m = 0;
          result && (result = r.includes(successString));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    }
    /**
     * Sends a kmail to a player
     *
     * Sends multiple kmails if more than 11 unique item types are attached.
     * Ignores any ungiftable items.
     * Sends a gift package to players in run
     *
     * @param to The player name or id to receive the kmail
     * @param message The text contents of the message
     * @param items The items to be attached
     * @param meat The quantity of meat to be attached
     * @returns True if the kmail was successfully sent
     */

  }, {
    key: "send",
    value: function send(to) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var meat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      return Kmail._genericSend(to, message, items, meat, 11, (meat, itemsQuery) => "sendmessage.php?action=send&pwd&towho=".concat(to, "&message=").concat(message).concat(itemsQuery ? "&".concat(itemsQuery) : "", "&sendmeat=").concat(meat), ">Message sent.</");
    }
    /**
     * Sends a gift to a player
     *
     * Sends multiple kmails if more than 3 unique item types are attached.
     * Ignores any ungiftable items.
     *
     * @param to The player name or id to receive the gift
     * @param note The note on the outside of the gift
     * @param items The items to be attached
     * @param meat The quantity of meat to be attached
     * @param insideNode The note on the inside of the gift
     * @returns True if the gift was successfully sent
     */

  }, {
    key: "gift",
    value: function gift(to) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var meat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var insideNote = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
      var baseUrl = "town_sendgift.php?action=Yep.&pwd&fromwhere=0&note=".concat(message, "&insidenote=").concat(insideNote, "&towho=").concat(to);
      return Kmail._genericSend(to, message, items, meat, 3, (m, itemsQuery, chunkSize) => "".concat(baseUrl, "&whichpackage=").concat(chunkSize).concat(itemsQuery ? "&".concat(itemsQuery) : "", "&sendmeat=").concat(m), ">Package sent.</");
    }
  }]);

  return Kmail;
}();

exports.default = Kmail;

/***/ }),

/***/ 6906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Paths = exports.Path = void 0;

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Path = //here, we define avatar-ness around being its own class
//Defined as the lowest inebriety that makes you unable to drink more, just to make it fifteens across the board

/**
 *
 * @param name Name of path
 * @param id Path ID
 * @param hasAllPerms Does the player have immediate access to all permed skills>
 * @param hasCampground Does the player have access to the campground?
 * @param hasTerrarium Does the player have access to terrarium.php
 * @param stomachSize Maximum fullness achievable at turn 0
 * @param liverSize The lowest inebriety that makes you unable to drink more
 * @param spleenSize Maximum spleen achievable at turn 0
 * @param classes Classes available in this path
 */
function Path(name, id) {
  var hasAllPerms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var hasCampground = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var hasTerrarium = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var stomachSize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 15;
  var liverSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 15;
  var spleenSize = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 15;
  var classes = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : (0, _templateString.$classes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Seal Clubber, Turtle Tamer, Sauceror, Pastamancer, Disco Bandit, Accordion Thief"])));

  _classCallCheck(this, Path);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "hasAllPerms", void 0);

  _defineProperty(this, "hasCampground", void 0);

  _defineProperty(this, "hasTerrarium", void 0);

  _defineProperty(this, "stomachSize", void 0);

  _defineProperty(this, "liverSize", void 0);

  _defineProperty(this, "spleenSize", void 0);

  _defineProperty(this, "classes", void 0);

  this.name = name;
  this.id = id;
  this.hasAllPerms = hasAllPerms;
  this.hasCampground = hasCampground;
  this.hasTerrarium = hasTerrarium;
  this.stomachSize = stomachSize;
  this.liverSize = liverSize;
  this.spleenSize = spleenSize;
  this.classes = classes;
};

exports.Path = Path;
var Paths = {
  Unrestricted: new Path("Unrestricted", 0),
  Boozetafarian: new Path("Boozetafarian", 1, false, true, true, 0),
  Teetotaler: new Path("Teetotaler", 2, false, true, true, 15, 0),
  Oxygenarian: new Path("Oxygenarian", 3, false, true, true, 0, 0),
  BeesHateYou: new Path("Bees Hate You", 4),
  WayOfTheSurprisingFist: new Path("Way of the Surprising Fist", 6),
  Trendy: new Path("Trendy", 6),
  AvatarOfBoris: new Path("Avatar of Boris", 8, false, true, false, 20, 5, 15, (0, _templateString.$classes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Avatar of Boris"])))),
  BugbearInvasion: new Path("Bugbear Invasion", 9),
  ZombieSlayer: new Path("Zombie Slayer", 10, false, true, true, 15, 5, 15, (0, _templateString.$classes)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Zombie Master"])))),
  ClassAct: new Path("Class Act", 11, false),
  AvatarofJarlsberg: new Path("Avatar of Jarlsberg", 12, false, true, false, 10, 10, 15, (0, _templateString.$classes)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Avatar of Jarlsberg"])))),
  Big: new Path("BIG!", 14),
  KolHs: new Path("KOLHS", 15),
  ClassAct2: new Path("Class Act II: A Class For Pigs", 16, false),
  AvatarofSneakyPete: new Path("Avatar of Sneaky Pete", 17, false, true, false, 5, 20, 15, (0, _templateString.$classes)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Avatar of Sneaky Pete"])))),
  SlowAndSteady: new Path("Slow and Steady", 18),
  HeavyRains: new Path("Heavy Rains", 19),
  Picky: new Path("Picky", 21, false),
  Standard: new Path("Standard", 22),
  ActuallyEdTheUndying: new Path("Actually Ed the Undying", 23, false, false, false, 0, 0, 5, (0, _templateString.$classes)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Ed"])))),
  OneCrazyRandomSummer: new Path("One Crazy Random Summer", 24),
  CommunityService: new Path("Community Service", 25),
  AvatarOfWestOfLoathing: new Path("Avatar of West of Loathing", 26, false, true, true, 10, 10, 10, (0, _templateString.$classes)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Cow Puncher, Snake Oiler, Beanslinger"])))),
  TheSource: new Path("The Source", 27),
  NuclearAutumn: new Path("Nuclear Autumn", 28, false, false, true, 3, 3, 3),
  GelatinousNoob: new Path("Gelatinous Noob", 29, false, true, true, 0, 0, 0, (0, _templateString.$classes)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Gelatinous Noob"])))),
  LicenseToAdventure: new Path("License to Adventure", 30, true, true, false, 0, 2, 15),
  //Unsure how to log liver size here
  LiveAscendRepeat: new Path("Live. Ascend. Repeat.", 31),
  PocketFamiliars: new Path("Pocket Familiars", 32, false, true, false),
  //This is my opinion on the matter
  GLover: new Path("G-Lover", 33),
  DisguisesDelimit: new Path("Disguises Delimit", 34),
  DarkGyffte: new Path("Dark Gyffte", 35, false, true, false, 5, 5, 15, (0, _templateString.$classes)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Vampyre"])))),
  TwoCrazyRandomSummer: new Path("Two Crazy Random Summer", 36),
  KingdomOfExploathing: new Path("Kingdom of Exploathing", 37),
  PathOfThePlumber: new Path("Path of the Plumber", 38, false, true, true, 20, 0, 5, (0, _templateString.$classes)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Plumber"])))),
  LowKeySummer: new Path("Low Key Summer", 40),
  GreyGoo: new Path("Grey Goo", 40),
  YouRobot: new Path("You, Robot", 41, false, false, true, 0, 0, 0),
  QuantumTerrarium: new Path("Quantum Terrarium", 42, true, true, false),
  Wildfire: new Path("Wildfire", 43)
};
exports.Paths = Paths;

/***/ }),

/***/ 1689:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ascend = ascend;
exports.prepareAscension = prepareAscension;
exports.Lifestyle = void 0;

__webpack_require__(778);

__webpack_require__(3239);

__webpack_require__(5899);

__webpack_require__(6467);

__webpack_require__(4594);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _property = __webpack_require__(1347);

var _resources = __webpack_require__(1895);

var _lib = __webpack_require__(3311);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var Lifestyle;
exports.Lifestyle = Lifestyle;

(function (Lifestyle) {
  Lifestyle[Lifestyle["casual"] = 1] = "casual";
  Lifestyle[Lifestyle["softcore"] = 2] = "softcore";
  Lifestyle[Lifestyle["normal"] = 2] = "normal";
  Lifestyle[Lifestyle["hardcore"] = 3] = "hardcore";
})(Lifestyle || (exports.Lifestyle = Lifestyle = {}));

function toMoonId(moon, playerClass) {
  if (typeof moon === "number") return moon;

  var offset = () => {
    switch (playerClass.primestat) {
      case (0, _templateString.$stat)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Muscle"]))):
        return 0;

      case (0, _templateString.$stat)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Mysticality"]))):
        return 1;

      case (0, _templateString.$stat)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Moxie"]))):
        return 2;

      default:
        throw "unknown prime stat for ".concat(playerClass);
    }
  };

  switch (moon.toLowerCase()) {
    case "mongoose":
      return 1;

    case "wallaby":
      return 2;

    case "vole":
      return 3;

    case "platypus":
      return 4;

    case "opossum":
      return 5;

    case "marmot":
      return 6;

    case "wombat":
      return 7;

    case "blender":
      return 8;

    case "packrat":
      return 9;

    case "degrassi":
    case "degrassi knoll":
    case "friendly degrassi knoll":
    case "knoll":
      return 1 + offset();

    case "canada":
    case "canadia":
    case "little canadia":
      return 4 + offset();

    case "gnomads":
    case "gnomish":
    case "gnomish gnomads camp":
      return 7 + offset();

    default:
      return -1;
  }
}
/**
 * Hops the gash, perming no skills
 * @param path path of choice, as a Path object--these exist as properties of Paths
 * @param playerClass Your class of choice for this ascension
 * @param lifestyle 1 for casual, 2 for softcore, 3 for hardcore. Alternately, use the Lifestyle enum
 * @param moon Your moon sign as a string, or the zone you're looking for as a string
 * @param consumable From the astral deli. Pick the container item, not the product.
 * @param pet From the astral pet store.
 */


function ascend(path, playerClass, lifestyle, moon) {
  var consumable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["astral six-pack"])));
  var pet = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

  if (!(0, _kolmafia.containsText)((0, _kolmafia.visitUrl)("charpane.php"), "Astral Spirit")) {
    (0, _kolmafia.visitUrl)("ascend.php?action=ascend&confirm=on&confirm2=on");
  }

  if (!(0, _kolmafia.containsText)((0, _kolmafia.visitUrl)("charpane.php"), "Astral Spirit")) throw "Failed to ascend.";
  if (!path.classes.includes(playerClass)) throw "Invalid class ".concat(playerClass, " for this path");
  if (path.id < 0) throw "Invalid path ID ".concat(path.id);
  var moonId = toMoonId(moon, playerClass);
  if (moonId < 1 || moonId > 9) throw "Invalid moon ".concat(moon);
  if (consumable && !(0, _templateString.$items)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["astral six-pack, astral hot dog dinner"]))).includes(consumable)) throw "Invalid consumable ".concat(consumable);
  if (pet && !(0, _templateString.$items)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["astral bludgeon, astral shield, astral chapeau, astral bracer, astral longbow, astral shorts, astral mace, astral ring, astral statuette, astral pistol, astral mask, astral pet sweater, astral shirt, astral belt"]))).includes(pet)) throw "Invalid astral item ".concat(pet);
  (0, _kolmafia.visitUrl)("afterlife.php?action=pearlygates");
  if (consumable) (0, _kolmafia.visitUrl)("afterlife.php?action=buydeli&whichitem=".concat((0, _kolmafia.toInt)(consumable)));
  if (pet) (0, _kolmafia.visitUrl)("afterlife.php?action=buyarmory&whichitem=".concat((0, _kolmafia.toInt)(pet)));
  (0, _kolmafia.visitUrl)("afterlife.php?action=ascend&confirmascend=1&whichsign=".concat(moonId, "&gender=2&whichclass=").concat((0, _kolmafia.toInt)(playerClass), "&whichpath=").concat(path.id, "&asctype=").concat(lifestyle, "&nopetok=1&noskillsok=1&lamepathok=1&pwd"), true);
}

var worksheds = (0, _templateString.$items)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["warbear LP-ROM burner, warbear jackhammer drill press, warbear induction oven, warbear high-efficiency still, warbear chemistry lab, warbear auto-anvil, spinning wheel, snow machine, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic, Asdon Martin keyfob, diabolic pizza cube"])));
var gardens = (0, _templateString.$items)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["packet of pumpkin seeds, Peppermint Pip Packet, packet of dragon's teeth, packet of beer seeds, packet of winter seeds, packet of thanksgarden seeds, packet of tall grass seeds, packet of mushroom spores"]))); // eslint-disable-next-line libram/verify-constants

var eudorae = (0, _templateString.$items)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["My Own Pen Pal kit, GameInformPowerDailyPro subscription card, Xi Receiver Unit, New-You Club Membership Form, Our Daily Candles\u2122 order form"])));
var desks = (0, _templateString.$items)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["fancy stationery set, Swiss piggy bank, continental juice bar"])));
var ceilings = (0, _templateString.$items)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["antler chandelier, ceiling fan, artificial skylight"])));
var nightstands = (0, _templateString.$items)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["foreign language tapes, bowl of potpourri, electric muscle stimulator"])));
/**
 * Sets up various iotms you may want to use in the coming ascension
 * @param ascensionItems An object potentially containing your workshed, garden, and eudora, all as items
 * @param chateauItems An object potentially containing your chateau desk, ceiling, and nightstand, all as items
 * @param throwOnFail If true, this will throw an error when it fails to switch something
 */

function prepareAscension(ascensionItems, chateauItems) {
  var throwOnFail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (ascensionItems) {
    if (ascensionItems.workshed && (0, _kolmafia.getWorkshed)() !== ascensionItems.workshed) {
      if (!worksheds.includes(ascensionItems.workshed) && throwOnFail) throw "Invalid workshed: ".concat(ascensionItems.workshed, "!");else if (!(0, _lib.have)(ascensionItems.workshed) && throwOnFail) throw "I'm sorry buddy, but you don't seem to own a ".concat(ascensionItems.workshed, ". Which makes it REALLY hard for us to plop one into your workshed.");else if ((0, _property.get)("_workshedItemUsed") && throwOnFail) throw "Seems like you've already swapped your workshed, buddy.";else (0, _kolmafia.use)(ascensionItems.workshed);
      if ((0, _kolmafia.getWorkshed)() !== ascensionItems.workshed && throwOnFail) throw "We really thought we changed your workshed to a ".concat(ascensionItems.workshed, ", but Mafia is saying otherwise.");
    }

    if (ascensionItems.garden && !Object.getOwnPropertyNames((0, _kolmafia.getCampground)()).includes(ascensionItems.garden.name)) {
      if (!gardens.includes(ascensionItems.garden) && throwOnFail) throw "Invalid garden: ".concat(ascensionItems.garden, "!");else if (!(0, _lib.have)(ascensionItems.garden) && throwOnFail) throw "I'm sorry buddy, but you don't seem to own a ".concat(ascensionItems.garden, ". Which makes it REALLY hard for us to plant one into your garden.");else (0, _kolmafia.use)(ascensionItems.garden);
      if (!Object.getOwnPropertyNames((0, _kolmafia.getCampground)()).includes(ascensionItems.garden.name) && throwOnFail) throw "We really thought we changed your garden to a ".concat(ascensionItems.garden, ", but Mafia is saying otherwise.");
    }

    if (ascensionItems.eudora && (0, _kolmafia.eudoraItem)() !== ascensionItems.eudora) {
      if (!eudorae.includes(ascensionItems.eudora) && throwOnFail) throw "Invalid eudora: ".concat(ascensionItems.eudora, "!");
      var eudoraNumber = 1 + eudorae.indexOf(ascensionItems.eudora);
      if (!(0, _kolmafia.xpath)((0, _kolmafia.visitUrl)("account.php?tab=correspondence"), "//select[@name=\"whichpenpal\"]/option/@value").includes(eudoraNumber.toString()) && throwOnFail) throw "I'm sorry buddy, but you don't seem to be subscribed to ".concat(ascensionItems.eudora, ". Which makes it REALLY hard to correspond with them.");else (0, _kolmafia.visitUrl)("account.php?actions[]=whichpenpal&whichpenpal=".concat(eudoraNumber, "&action=Update"), true);
      if ((0, _kolmafia.eudoraItem)() !== ascensionItems.eudora && throwOnFail) throw "We really thought we chaned your eudora to a ".concat(ascensionItems.eudora, ", but Mafia is saying otherwise.");
    }
  }

  if (chateauItems && _resources.ChateauMantegna.have()) {
    if (chateauItems.ceiling && _resources.ChateauMantegna.getCeiling() !== chateauItems.ceiling) {
      if (!ceilings.includes(chateauItems.ceiling) && throwOnFail) throw "Invalid chateau ceiling: ".concat(chateauItems.ceiling, "!");else if (!_resources.ChateauMantegna.changeCeiling(chateauItems.ceiling) && throwOnFail) throw "We tried, but were unable to change your chateau ceiling to ".concat(chateauItems.ceiling, ". Probably.");
    }

    if (chateauItems.desk && _resources.ChateauMantegna.getDesk() !== chateauItems.desk) {
      if (!desks.includes(chateauItems.desk) && throwOnFail) throw "Invalid chateau desk: ".concat(chateauItems.desk, "!");else if (!_resources.ChateauMantegna.changeDesk(chateauItems.desk) && throwOnFail) throw "We tried, but were unable to change your chateau desk to ".concat(chateauItems.desk, ". Probably.");
    }

    if (chateauItems.nightstand && _resources.ChateauMantegna.getNightstand() !== chateauItems.nightstand) {
      if (!nightstands.includes(chateauItems.nightstand) && throwOnFail) throw "Invalid chateau nightstand: ".concat(chateauItems.nightstand, "!");else if (!_resources.ChateauMantegna.changeNightstand(chateauItems.nightstand) && throwOnFail) throw "We tried, but were unable to change your chateau nightstand to ".concat(chateauItems.nightstand, ". Probably.");
    }
  }
}

/***/ }),

/***/ 1762:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

__webpack_require__(5594);

__webpack_require__(5198);

__webpack_require__(893);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMacroId = getMacroId;
exports.adventureMacro = adventureMacro;
exports.adventureMacroAuto = adventureMacroAuto;
exports.Macro = void 0;

__webpack_require__(7434);

__webpack_require__(778);

__webpack_require__(3239);

__webpack_require__(6467);

__webpack_require__(4594);

__webpack_require__(2238);

__webpack_require__(7924);

__webpack_require__(5899);

__webpack_require__(8151);

__webpack_require__(1714);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _property = __webpack_require__(1347);

var _templateObject, _templateObject2;

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name Script Autoattack Macro.
 *
 * @category Combat
 * @returns {number} The macro ID.
 */

function getMacroId() {
  var macroMatches = (0, _kolmafia.xpath)((0, _kolmafia.visitUrl)("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"".concat(MACRO_NAME, "\"]/@value"));

  if (macroMatches.length === 0) {
    (0, _kolmafia.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0, _kolmafia.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(MACRO_NAME, "&macrotext=abort&action=save"));
    return parseInt((0, _kolmafia.xpath)(newMacroText, "//input[@name=macroid]/@value")[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}

function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? Item.get(itemOrName) : itemOrName;
}

var substringCombatItems = (0, _templateString.$items)(_templateObject || (_templateObject = _taggedTemplateLiteral(["spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, adder, red button, pile of sand, mushroom, deluxe mushroom"])));
var substringCombatSkills = (0, _templateString.$skills)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Cleave, Boil, Slice, Rainbow"])));

function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !substringCombatItems.includes(item) ? item.name : (0, _kolmafia.toInt)(item).toString();
  }
}

function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItems);
  }
}

function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}

function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !substringCombatSkills.includes(skill) ? skill.name : (0, _kolmafia.toInt)(skill);
}
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */


var Macro = /*#__PURE__*/function () {
  function Macro() {
    _classCallCheck(this, Macro);

    _defineProperty(this, "components", []);
  }

  _createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     */
    function toString() {
      return this.components.join(";");
    }
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */

  }, {
    key: "save",
    value: function save() {
      (0, _property.set)(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }
    /**
     * Load a saved macro from the Mafia property.
     */

  }, {
    key: "step",
    value:
    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {
      var _ref;

      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
      }

      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));

      this.components = [].concat(_toConsumableArray(this.components), _toConsumableArray(nextStepsStrings.filter(s => s.length > 0)));
      return this;
    }
    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "submit",
    value:
    /**
     * Submit the built macro to KoL. Only works inside combat.
     */
    function submit() {
      var final = this.toString();
      return (0, _kolmafia.visitUrl)("fight.php?action=macro&macrotext=".concat((0, _kolmafia.urlEncode)(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */

  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      if (Macro.cachedMacroId === null) Macro.cachedMacroId = getMacroId();

      if ((0, _kolmafia.getAutoAttack)() === 99000000 + Macro.cachedMacroId && this.toString() === Macro.cachedAutoAttack) {
        // This macro is already set. Don"t make the server request.
        return;
      }

      (0, _kolmafia.visitUrl)("account_combatmacros.php?macroid=".concat(Macro.cachedMacroId, "&name=").concat((0, _kolmafia.urlEncode)(MACRO_NAME), "&macrotext=").concat((0, _kolmafia.urlEncode)(this.toString()), "&action=save"), true, true);
      (0, _kolmafia.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99000000 + Macro.cachedMacroId, "&ajax=1"));
      Macro.cachedAutoAttack = this.toString();
    }
    /**
     * Add an "abort" step to this macro.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "abort",
    value: function abort() {
      return this.step("abort");
    }
    /**
     * Create a new macro with an "abort" step.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue) {
      return this.step("if ".concat(condition)).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "while_",
    value:
    /**
     * Add a "while" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(condition)).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "externalIf",
    value:
    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue) {
      return condition ? this.step(ifTrue) : this;
    }
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "repeat",
    value:
    /**
     * Add a repeat step to the macro.
     * @returns {Macro} This object itself.
     */
    function repeat() {
      return this.step("repeat");
    }
    /**
     * Add one or more skill cast steps to the macro.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "skill",
    value: function skill() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        skills[_key2] = arguments[_key2];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return "skill ".concat(skillBallsMacroName(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill).repeat());
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        items[_key5] = arguments[_key5];
      }

      return this.step.apply(this, _toConsumableArray(items.map(itemOrItems => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
    /**
     * Create a new macro with one or more item steps.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }

      return this.step.apply(this, _toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), "use ".concat(itemOrItemsBallsMacroName(item)));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "attack",
    value:
    /**
     * Add an attack step to the macro.
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }
    /**
     * Create a new macro with an attack step.
     * @returns {Macro} This object itself.
     */

  }], [{
    key: "load",
    value: function load() {
      var _this;

      return (_this = new this()).step.apply(_this, _toConsumableArray((0, _property.get)(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */

  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0, _kolmafia.removeProperty)(Macro.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;

      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue) {
      return new this().externalIf(condition, ifTrue);
    }
  }, {
    key: "skill",
    value: function skill() {
      var _this3;

      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this4;

      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this5;

      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this6;

      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this7;

      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "attack",
    value: function attack() {
      return new this().attack();
    }
  }]);

  return Macro;
}();
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */


exports.Macro = Macro;

_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");

_defineProperty(Macro, "cachedMacroId", null);

_defineProperty(Macro, "cachedAutoAttack", null);

function adventureMacro(loc, macro) {
  macro.save();
  (0, _kolmafia.setAutoAttack)(0);

  try {
    (0, _kolmafia.adv1)(loc, 0, "");

    while ((0, _kolmafia.inMultiFight)()) {
      (0, _kolmafia.runCombat)();
    }

    if ((0, _kolmafia.choiceFollowsFight)()) (0, _kolmafia.visitUrl)("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
/**
 * Adventure in a location and handle all combats with a given autoattack and manual macro.
 * To use the nextMacro parameter you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param autoMacro Macro to execute via KoL autoattack.
 * @param nextMacro Macro to execute manually after autoattack completes.
 */


function adventureMacroAuto(loc, autoMacro) {
  var _nextMacro;

  var nextMacro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  nextMacro = (_nextMacro = nextMacro) !== null && _nextMacro !== void 0 ? _nextMacro : Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();

  try {
    (0, _kolmafia.adv1)(loc, 0, "");

    while ((0, _kolmafia.inMultiFight)()) {
      (0, _kolmafia.runCombat)();
    }

    if ((0, _kolmafia.choiceFollowsFight)()) (0, _kolmafia.visitUrl)("choice.php");
  } finally {
    Macro.clearSaved();
  }
}

/***/ }),

/***/ 6448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.error = exports.warn = exports.info = exports.log = void 0;

__webpack_require__(7434);

__webpack_require__(6467);

__webpack_require__(4594);

var _kolmafia = __webpack_require__(1664); // eslint-disable-next-line @typescript-eslint/no-explicit-any


var logColor = color => function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var output = args.map(x => x.toString()).join(" ");

  if (color) {
    (0, _kolmafia.print)(output, color);
  } else {
    (0, _kolmafia.print)(output);
  }
};

var log = logColor();
exports.log = log;
var info = logColor("blue");
exports.info = info;
var warn = logColor("red");
exports.warn = warn;
var error = logColor("red");
exports.error = error;

/***/ }),

/***/ 9970:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = findFreeRun;
exports.FreeRun = void 0;

__webpack_require__(517);

__webpack_require__(7504);

__webpack_require__(778);

var _kolmafia = __webpack_require__(1664);

var _combat = __webpack_require__(1762);

var _lib = __webpack_require__(3311);

var _maximize = __webpack_require__(9376);

var _property = __webpack_require__(1347);

var _resources = __webpack_require__(1895);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var FreeRun = function FreeRun(name, available, macro, requirement, prepare) {
  _classCallCheck(this, FreeRun);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "available", void 0);

  _defineProperty(this, "macro", void 0);

  _defineProperty(this, "requirement", void 0);

  _defineProperty(this, "prepare", void 0);

  this.name = name;
  this.available = available;
  this.macro = macro;
  this.requirement = requirement;
  this.prepare = prepare;
};

exports.FreeRun = FreeRun;
var freeRuns = [new FreeRun("Bander", () => (0, _lib.have)((0, _templateString.$familiar)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Frumious Bandersnatch"])))) && ((0, _lib.have)((0, _templateString.$effect)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Ode to Booze"])))) || (0, _lib.getSongCount)() < (0, _lib.getSongLimit)()) && _resources.Bandersnatch.getRemainingRunaways() > 0, _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).step("runaway"), new _maximize.Requirement(["Familiar Weight"], {}), () => {
  (0, _kolmafia.useFamiliar)((0, _templateString.$familiar)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Frumious Bandersnatch"]))));
  (0, _lib.ensureEffect)((0, _templateString.$effect)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Ode to Booze"]))));
}), new FreeRun("Boots", () => (0, _lib.have)((0, _templateString.$familiar)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Pair of Stomping Boots"])))) && _resources.Bandersnatch.getRemainingRunaways() > 0, _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).step("runaway"), new _maximize.Requirement(["Familiar Weight"], {}), () => (0, _kolmafia.useFamiliar)((0, _templateString.$familiar)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Pair of Stomping Boots"]))))), new FreeRun("Snokebomb", () => (0, _property.get)("_snokebombUsed") < 3 && (0, _lib.have)((0, _templateString.$skill)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Snokebomb"])))), _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).skill((0, _templateString.$skill)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Snokebomb"])))), undefined, () => (0, _kolmafia.restoreMp)(50)), new FreeRun("Hatred", () => (0, _property.get)("_feelHatredUsed") < 3 && (0, _lib.have)((0, _templateString.$skill)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Emotionally Chipped"])))), _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).skill((0, _templateString.$skill)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Feel Hatred"]))))), new FreeRun("KGB", () => (0, _lib.have)((0, _templateString.$item)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))) && (0, _property.get)("_kgbTranquilizerDartUses") < 3, _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).skill((0, _templateString.$skill)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["KGB tranquilizer dart"])))), new _maximize.Requirement([], {
  forceEquip: (0, _templateString.$items)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))
})), new FreeRun("Latte", () => (0, _lib.have)((0, _templateString.$item)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["latte lovers member's mug"])))) && !(0, _property.get)("_latteBanishUsed"), _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).skill("Throw Latte on Opponent"), new _maximize.Requirement([], {
  forceEquip: (0, _templateString.$items)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["latte lovers member's mug"])))
})), new FreeRun("Docbag", () => (0, _lib.have)((0, _templateString.$item)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))) && (0, _property.get)("_reflexHammerUsed") < 3, _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).skill((0, _templateString.$skill)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Reflex Hammer"])))), new _maximize.Requirement([], {
  forceEquip: (0, _templateString.$items)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))
})), new FreeRun("Middle Finger", () => (0, _lib.have)((0, _templateString.$item)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["mafia middle finger ring"])))) && !(0, _property.get)("_mafiaMiddleFingerRingUsed"), _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).skill((0, _templateString.$skill)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Show them your ring"])))), new _maximize.Requirement([], {
  forceEquip: (0, _templateString.$items)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["mafia middle finger ring"])))
})), new FreeRun("VMask", () => (0, _lib.have)((0, _templateString.$item)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["V for Vivala mask"])))) && !(0, _property.get)("_vmaskBanisherUsed"), _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).skill((0, _templateString.$skill)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Creepy Grin"])))), new _maximize.Requirement([], {
  forceEquip: (0, _templateString.$items)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["V for Vivala mask"])))
}), () => (0, _kolmafia.restoreMp)(30)), new FreeRun("Stinkeye", () => (0, _lib.getFoldGroup)((0, _templateString.$item)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["stinky cheese diaper"])))).some(item => (0, _lib.have)(item)) && !(0, _property.get)("_stinkyCheeseBanisherUsed"), _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).skill("Give Your Opponent the Stinkeye"), new _maximize.Requirement([], {
  forceEquip: (0, _templateString.$items)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["stinky cheese eye"])))
}), () => {
  if (!(0, _lib.have)((0, _templateString.$item)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["stinky cheese eye"]))))) (0, _kolmafia.cliExecute)("fold stinky cheese eye");
}), new FreeRun("Navel Ring", () => (0, _lib.have)((0, _templateString.$item)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["navel ring of navel gazing"])))) && (0, _property.get)("_navelRunaways") < 3, _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).step("runaway"), new _maximize.Requirement([], {
  forceEquip: (0, _templateString.$items)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["navel ring of navel gazing"])))
})), new FreeRun("GAP", () => (0, _lib.have)((0, _templateString.$item)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["Greatest American Pants"])))) && (0, _property.get)("_navelRunaways") < 3, _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).step("runaway"), new _maximize.Requirement([], {
  forceEquip: (0, _templateString.$items)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["Greatest American Pants"])))
})), new FreeRun("Scrapbook", () => {
  (0, _kolmafia.visitUrl)("desc_item.php?whichitem=463063785");
  return (0, _lib.have)((0, _templateString.$item)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["familiar scrapbook"])))) && (0, _property.get)("scrapbookCharges") >= 100;
}, _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).skill("Show Your Boring Familiar Pictures"), new _maximize.Requirement([], {
  forceEquip: (0, _templateString.$items)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["familiar scrapbook"])))
})), new FreeRun("Parasol", () => (0, _lib.have)((0, _templateString.$item)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["peppermint parasol"])))) && (0, _property.get)("parasolUsed") < 9 && (0, _property.get)("_navelRunaways") < 3, _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).item((0, _templateString.$item)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["peppermint parasol"])))))];

function cheapestRunSource() {
  return (0, _templateString.$items)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["Louder Than Bomb, divine champagne popper, tennis ball"]))).sort((a, b) => (0, _kolmafia.mallPrice)(a) - (0, _kolmafia.mallPrice)(b))[0];
}

function cheapestItemRun() {
  var cheapestRun = cheapestRunSource();
  return new FreeRun("Cheap Combat Item", () => (0, _kolmafia.retrieveItem)(cheapestRun), _combat.Macro.trySkill((0, _templateString.$skill)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).item(cheapestRunSource()), undefined, () => (0, _kolmafia.retrieveItem)(cheapestRun));
}

function findFreeRun() {
  var _freeRuns$find;

  var useFamiliar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var buyStuff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (_freeRuns$find = freeRuns.find(run => run.available() && (useFamiliar || !["Bander", "Boots"].includes(run.name)))) !== null && _freeRuns$find !== void 0 ? _freeRuns$find : buyStuff ? cheapestItemRun() : undefined;
}

/***/ }),

/***/ 9803:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(893);

__webpack_require__(6467);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Kmail: true,
  logger: true,
  LogLevel: true,
  console: true,
  get: true,
  PropertiesManager: true,
  set: true,
  setProperties: true,
  withProperties: true,
  withProperty: true,
  withChoices: true,
  withChoice: true,
  property: true,
  getModifier: true
};
Object.defineProperty(exports, "Kmail", ({
  enumerable: true,
  get: function get() {
    return _Kmail.default;
  }
}));
Object.defineProperty(exports, "logger", ({
  enumerable: true,
  get: function get() {
    return _logger.default;
  }
}));
Object.defineProperty(exports, "LogLevel", ({
  enumerable: true,
  get: function get() {
    return _logger.LogLevel;
  }
}));
Object.defineProperty(exports, "get", ({
  enumerable: true,
  get: function get() {
    return _property.get;
  }
}));
Object.defineProperty(exports, "PropertiesManager", ({
  enumerable: true,
  get: function get() {
    return _property.PropertiesManager;
  }
}));
Object.defineProperty(exports, "set", ({
  enumerable: true,
  get: function get() {
    return _property.set;
  }
}));
Object.defineProperty(exports, "setProperties", ({
  enumerable: true,
  get: function get() {
    return _property.setProperties;
  }
}));
Object.defineProperty(exports, "withProperties", ({
  enumerable: true,
  get: function get() {
    return _property.withProperties;
  }
}));
Object.defineProperty(exports, "withProperty", ({
  enumerable: true,
  get: function get() {
    return _property.withProperty;
  }
}));
Object.defineProperty(exports, "withChoices", ({
  enumerable: true,
  get: function get() {
    return _property.withChoices;
  }
}));
Object.defineProperty(exports, "withChoice", ({
  enumerable: true,
  get: function get() {
    return _property.withChoice;
  }
}));
Object.defineProperty(exports, "getModifier", ({
  enumerable: true,
  get: function get() {
    return _modifier.get;
  }
}));
exports.property = exports.console = void 0;

var _ascend = __webpack_require__(1689);

Object.keys(_ascend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ascend[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ascend[key];
    }
  });
});

var _Clan = __webpack_require__(1662);

Object.keys(_Clan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Clan[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Clan[key];
    }
  });
});

var _combat = __webpack_require__(1762);

Object.keys(_combat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _combat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _combat[key];
    }
  });
});

var _Dungeon = __webpack_require__(7912);

Object.keys(_Dungeon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Dungeon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Dungeon[key];
    }
  });
});

var _lib = __webpack_require__(3311);

Object.keys(_lib).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _lib[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lib[key];
    }
  });
});

var _maximize = __webpack_require__(9376);

Object.keys(_maximize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _maximize[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _maximize[key];
    }
  });
});

var _mood = __webpack_require__(6115);

Object.keys(_mood).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _mood[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mood[key];
    }
  });
});

var _resources = __webpack_require__(1895);

Object.keys(_resources).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _resources[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _resources[key];
    }
  });
});

var _since = __webpack_require__(1157);

Object.keys(_since).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _since[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _since[key];
    }
  });
});

var _templateString = __webpack_require__(678);

Object.keys(_templateString).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _templateString[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _templateString[key];
    }
  });
});

var _Kmail = _interopRequireDefault(__webpack_require__(9477));

var _Path = __webpack_require__(6906);

Object.keys(_Path).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Path[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Path[key];
    }
  });
});

var _logger = _interopRequireWildcard(__webpack_require__(8685));

var _console = _interopRequireWildcard(__webpack_require__(6448));

exports.console = _console;

var _property = _interopRequireWildcard(__webpack_require__(1347));

exports.property = _property;

var _utils = __webpack_require__(8588);

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _modifier = __webpack_require__(9409);

var _freerun = __webpack_require__(9970);

Object.keys(_freerun).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _freerun[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _freerun[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ 3311:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

__webpack_require__(5594);

__webpack_require__(5198);

__webpack_require__(1235);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSongLimit = getSongLimit;
exports.isSong = isSong;
exports.getActiveEffects = getActiveEffects;
exports.getActiveSongs = getActiveSongs;
exports.getSongCount = getSongCount;
exports.canRememberSong = canRememberSong;
exports.getMonsterLocations = getMonsterLocations;
exports.getRemainingLiver = getRemainingLiver;
exports.getRemainingStomach = getRemainingStomach;
exports.getRemainingSpleen = getRemainingSpleen;
exports.have = have;
exports.haveInCampground = haveInCampground;
exports.haveCounter = haveCounter;
exports.haveWandererCounter = haveWandererCounter;
exports.isVoteWandererNow = isVoteWandererNow;
exports.isWandererNow = isWandererNow;
exports.getKramcoWandererChance = getKramcoWandererChance;
exports.getFamiliarWandererChance = getFamiliarWandererChance;
exports.getWandererChance = getWandererChance;
exports.isCurrentFamiliar = isCurrentFamiliar;
exports.getFoldGroup = getFoldGroup;
exports.getZapGroup = getZapGroup;
exports.getBanishedMonsters = getBanishedMonsters;
exports.canUse = canUse;
exports.noneToNull = noneToNull;
exports.getAverage = getAverage;
exports.getAverageAdventures = getAverageAdventures;
exports.uneffect = uneffect;
exports.getPlayerFromIdOrName = getPlayerFromIdOrName;
exports.ensureEffect = ensureEffect;
exports.getSaleValue = getSaleValue;
exports.Environment = exports.EnsureError = exports.Wanderer = void 0;

__webpack_require__(7434);

__webpack_require__(8151);

__webpack_require__(778);

__webpack_require__(3239);

__webpack_require__(7926);

__webpack_require__(2238);

__webpack_require__(4594);

__webpack_require__(7924);

__webpack_require__(7807);

__webpack_require__(517);

__webpack_require__(4875);

__webpack_require__(1714);

__webpack_require__(893);

__webpack_require__(6467);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _property = __webpack_require__(1347);

var _utils = __webpack_require__(8588);

var _templateObject, _templateObject2;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
/**
 * Returns the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 */


function getSongLimit() {
  return 3 + ((0, _kolmafia.booleanModifier)("Four Songs") ? 1 : 0) + (0, _kolmafia.numericModifier)("Additional Song");
}
/**
 * Return whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 */


function isSong(skillOrEffect) {
  var skill = skillOrEffect instanceof Effect ? (0, _kolmafia.toSkill)(skillOrEffect) : skillOrEffect;
  return skill.class === (0, _templateString.$class)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
}
/**
 * List all active Effects
 *
 * @category General
 */


function getActiveEffects() {
  return Object.keys((0, _kolmafia.myEffects)()).map(e => Effect.get(e));
}
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 */


function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * List number of active Accordion Thief songs
 *
 * @category General
 */


function getSongCount() {
  return getActiveSongs().length;
}
/**
 * Returns true if the player can remember another Accordion Thief song
 *
 * @category General
 * @param quantity Number of songs to test the space for
 */


function canRememberSong() {
  var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return getSongLimit() - getSongCount() >= quantity;
}
/**
 * Return the locations in which the given monster can be encountered naturally
 *
 * @category General
 * @param monster Monster to find
 */


function getMonsterLocations(monster) {
  return Location.all().filter(location => monster.name in (0, _kolmafia.appearanceRates)(location));
}
/**
 * Return the player's remaining liver space
 *
 * @category General
 */


function getRemainingLiver() {
  return (0, _kolmafia.inebrietyLimit)() - (0, _kolmafia.myInebriety)();
}
/**
 * Return the player's remaining stomach space
 *
 * @category General
 */


function getRemainingStomach() {
  return (0, _kolmafia.fullnessLimit)() - (0, _kolmafia.myFullness)();
}
/**
 * Return the player's remaining spleen space
 *
 * @category General
 */


function getRemainingSpleen() {
  return (0, _kolmafia.spleenLimit)() - (0, _kolmafia.mySpleenUse)();
}
/**
 * Return whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Number to check that the player has
 */


function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (thing instanceof Effect) {
    return (0, _kolmafia.haveEffect)(thing) >= quantity;
  }

  if (thing instanceof Familiar) {
    return (0, _kolmafia.haveFamiliar)(thing);
  }

  if (thing instanceof Item) {
    return (0, _kolmafia.availableAmount)(thing) >= quantity;
  }

  if (thing instanceof Servant) {
    return (0, _kolmafia.haveServant)(thing);
  }

  if (thing instanceof Skill) {
    return (0, _kolmafia.haveSkill)(thing);
  }

  if (thing instanceof Thrall) {
    var thrall = (0, _kolmafia.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }

  return false;
}
/**
 * Return whether an item is in the player's campground
 *
 * @category General
 * @param item The item mafia uses to represent the campground item
 */


function haveInCampground(item) {
  return Object.keys((0, _kolmafia.getCampground)()).map(i => Item.get(i)).includes(item);
}

var Wanderer;
exports.Wanderer = Wanderer;

(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer || (exports.Wanderer = Wanderer = {}));

var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Return whether the player has the queried counter
 *
 * @category General
 */

function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxTurns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return (0, _kolmafia.getCounters)(counterName, minTurns, maxTurns) === counterName;
}
/**
 * Return whether the player has the queried wandering counter
 *
 * @category Wanderers
 */


function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer);
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}
/**
 * Returns whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 *
 * @category Wanderers
 */


function isVoteWandererNow() {
  return (0, _kolmafia.totalTurnsPlayed)() % 11 == 1;
}
/**
 * Tells us whether we can expect a given wanderer now. Behaves differently
 * for different types of wanderer.
 *
 * - For deterministic wanderers, return whether the player will encounter
 *   the queried wanderer on the next turn
 *
 * - For variable wanderers (window), return whether the player is within
 *   an encounter window for the queried wanderer
 *
 * - For variable wanderers (chance per turn), returns true unless the player
 *   has exhausted the number of wanderers possible
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 */


function isWandererNow(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0);
  }

  if (wanderer == Wanderer.Kramco) {
    return true;
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow();
  }

  if (wanderer === Wanderer.Familiar) {
    return (0, _property.get)("_hipsterAdv") < 7;
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return !haveCounter(begin, 1) && haveCounter(end);
}
/**
 * Returns the float chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
 */


function getKramcoWandererChance() {
  var fights = (0, _property.get)("_sausageFights");
  var lastFight = (0, _property.get)("_lastSausageMonsterTurn");
  var totalTurns = (0, _kolmafia.totalTurnsPlayed)();

  if (fights < 1) {
    return lastFight === totalTurns && (0, _kolmafia.myTurncount)() < 1 ? 0.5 : 1.0;
  }

  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.pow(Math.max(0, fights - 5), 3)));
}
/**
 * Returns the float chance the player will encounter an Artistic Goth Kid or
 * Mini-Hipster wanderer on the next turn, providing a familiar is equipped.
 *
 * NOTE: You must complete one combat with the Artistic Goth Kid before you
 * can encounter any wanderers. Consequently,ƒ the first combat with the
 * Artist Goth Kid is effectively 0% chance to encounter a wanderer.
 *
 * @category Wanderers
 */


function getFamiliarWandererChance() {
  var totalFights = (0, _property.get)("_hipsterAdv");
  var probability = [0.5, 0.4, 0.3, 0.2];

  if (totalFights < 4) {
    return probability[totalFights];
  }

  return totalFights > 7 ? 0.0 : 0.1;
}
/**
 * Returns the float chance the player will encounter the queried wanderer
 * on the next turn.
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 */


function getWandererChance(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0) ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Kramco) {
    getKramcoWandererChance();
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow() ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Familiar) {
    getFamiliarWandererChance();
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";

  if (haveCounter(begin, 1, 100)) {
    return 0.0;
  }

  var counters = (0, _property.get)("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);

  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - (0, _kolmafia.myTurncount)();
    return 1.0 / window;
  }

  return 0.0;
}
/**
 * Returns true if the player's current familiar is equal to the one supplied
 *
 * @category General
 * @param familiar Familiar to check
 */


function isCurrentFamiliar(familiar) {
  return (0, _kolmafia.myFamiliar)() === familiar;
}
/**
 * Returns the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 */


function getFoldGroup(item) {
  return Object.entries((0, _kolmafia.getRelated)(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = _slicedToArray(_ref, 2),
        a = _ref3[1];

    var _ref4 = _slicedToArray(_ref2, 2),
        b = _ref4[1];

    return a - b;
  }).map(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 1),
        i = _ref6[0];

    return Item.get(i);
  });
}
/**
 * Returns the zap group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required zap group
 */


function getZapGroup(item) {
  return Object.keys((0, _kolmafia.getRelated)(item, "zap")).map(i => Item.get(i));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 */


function getBanishedMonsters() {
  var banishes = (0, _utils.chunk)((0, _property.get)("banishedMonsters").split(":"), 3);
  var result = new Map();

  var _iterator = _createForOfIteratorHelper(banishes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          foe = _step$value[0],
          banisher = _step$value[1];

      if (foe === undefined || banisher === undefined) break; // toItem doesn"t error if the item doesn"t exist, so we have to use that.

      var banisherItem = (0, _kolmafia.toItem)(banisher);
      var banisherObject = [Item.get("none"), null].includes(banisherItem) ? Skill.get(banisher) : banisherItem;
      result.set(banisherObject, Monster.get(foe));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
/**
 * Returns true if the item is usable
 *
 * This function will be an ongoing work in progress
 *
 * @param item Item to check
 */


function canUse(item) {
  var path = (0, _kolmafia.myPath)();

  if (path !== "Nuclear Autumn") {
    if ((0, _templateString.$items)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
      return false;
    }
  }

  if (path === "G-Lover") {
    if (!item.name.toLowerCase().includes("g")) return false;
  }

  if (path === "Bees Hate You") {
    if (item.name.toLowerCase().includes("b")) return false;
  }

  return true;
}
/**
 * Turn KoLmafia `none`s to JavaScript `null`s
 *
 * @param thing Thing that can have a mafia "none" value
 */


function noneToNull(thing) {
  if (thing instanceof Effect) {
    return thing === Effect.get("none") ? null : thing;
  }

  if (thing instanceof Familiar) {
    return thing === Familiar.get("none") ? null : thing;
  }

  if (thing instanceof Item) {
    return thing === Item.get("none") ? null : thing;
  }

  return thing;
}
/**
 * Return the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 */


function getAverage(range) {
  var _range$match;

  if (range.indexOf("-") < 0) return Number(range);

  var _ref7 = (_range$match = range.match(/(-?[0-9]+)-(-?[0-9]+)/)) !== null && _range$match !== void 0 ? _range$match : ["0", "0", "0"],
      _ref8 = _slicedToArray(_ref7, 3),
      lower = _ref8[1],
      upper = _ref8[2];

  return (Number(lower) + Number(upper)) / 2;
}
/**
 * Return average adventures expected from consuming an item
 *
 * If item is not a consumable, will just return "0".
 *
 * @param item Consumable item
 */


function getAverageAdventures(item) {
  return getAverage(item.adventures);
}
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 */


function uneffect(effect) {
  return (0, _kolmafia.cliExecute)("uneffect ".concat(effect.name));
}
/**
 * Get both the name and id of a player from either their name or id
 *
 * @param idOrName Id or name of player
 * @returns Object containing id and name of player
 */


function getPlayerFromIdOrName(idOrName) {
  return typeof idOrName === "string" ? {
    name: idOrName,
    id: parseInt((0, _kolmafia.getPlayerId)(idOrName))
  } : {
    name: (0, _kolmafia.getPlayerName)(idOrName),
    id: idOrName
  };
}

var EnsureError = /*#__PURE__*/function (_Error) {
  _inherits(EnsureError, _Error);

  var _super = _createSuper(EnsureError);

  function EnsureError(cause) {
    var _this;

    _classCallCheck(this, EnsureError);

    _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!"));
    _this.name = "Ensure Error";
    return _this;
  }

  return EnsureError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Tries to get an effect using the default method
 * @param ef effect to try to get
 * @param turns turns to aim for; default of 1
 */


exports.EnsureError = EnsureError;

function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _kolmafia.haveEffect)(ef) < turns) {
    if (!(0, _kolmafia.cliExecute)(ef.default) || (0, _kolmafia.haveEffect)(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}

var valueMap = new Map();
var MALL_VALUE_MODIFIER = 0.9;
/**
 * Returns the average value--based on mallprice and autosell--of a collection of items
 * @param items items whose value you care about
 */

function getSaleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return items.map(item => {
    if (valueMap.has(item)) return valueMap.get(item) || 0;

    if (item.discardable) {
      valueMap.set(item, (0, _kolmafia.mallPrice)(item) > Math.max(2 * (0, _kolmafia.autosellPrice)(item), 100) ? MALL_VALUE_MODIFIER * (0, _kolmafia.mallPrice)(item) : (0, _kolmafia.autosellPrice)(item));
    } else {
      valueMap.set(item, (0, _kolmafia.mallPrice)(item) > 100 ? MALL_VALUE_MODIFIER * (0, _kolmafia.mallPrice)(item) : 0);
    }

    return valueMap.get(item) || 0;
  }).reduce((s, price) => s + price, 0) / items.length;
}

var Environment = {
  Outdoor: "outdoor",
  Indoor: "indoor",
  Underground: "underground",
  Underwater: "underwater"
};
exports.Environment = Environment;

/***/ }),

/***/ 8685:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

__webpack_require__(6467);

__webpack_require__(4594);

var _kolmafia = __webpack_require__(1664);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defaultHandlers = {
  info: message => (0, _kolmafia.printHtml)("<b>[Libram]</b> ".concat(message)),
  warning: message => (0, _kolmafia.printHtml)("<span style=\"background: orange; color: white;\"><b>[Libram]</b> ".concat(message, "</span>")),
  error: _error => (0, _kolmafia.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram]</b> ".concat(_error.toString(), "</span>"))
};

var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);

    _defineProperty(this, "handlers", defaultHandlers);
  }

  _createClass(Logger, [{
    key: "setHandler",
    value: // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function setHandler(level, callback) {
      this.handlers[level] = callback;
    }
  }, {
    key: "log",
    value: // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function log(level, message) {
      this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this.log("info", message);
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this.log("warning", message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.log("error", message);
    }
  }]);

  return Logger;
}();

var _default = new Logger();

exports.default = _default;

/***/ }),

/***/ 9376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

__webpack_require__(5594);

__webpack_require__(5198);

__webpack_require__(8797);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setDefaultMaximizeOptions = setDefaultMaximizeOptions;
exports.maximizeCached = maximizeCached;
exports.Requirement = void 0;

__webpack_require__(893);

__webpack_require__(6467);

__webpack_require__(9769);

__webpack_require__(517);

__webpack_require__(5899);

__webpack_require__(8151);

__webpack_require__(6302);

__webpack_require__(7434);

__webpack_require__(778);

__webpack_require__(3239);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _logger = _interopRequireDefault(__webpack_require__(8685));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");

  _classApplyDescriptorSet(receiver, descriptor, value);

  return value;
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnCanEquipChanged: true,
  useOutfitCaching: true,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map(),
  onlySlot: [],
  preventSlot: []
};
/**
 *
 * @param options Default options for each maximizer run.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */

function setDefaultMaximizeOptions(options) {
  Object.assign(defaultMaximizeOptions, options);
} // Subset of slots that are valid for caching.


var cachedSlots = (0, _templateString.$slots)(_templateObject || (_templateObject = _taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));

var CacheEntry = function CacheEntry(equipment, rider, familiar, canEquipItemCount) {
  _classCallCheck(this, CacheEntry);

  _defineProperty(this, "equipment", void 0);

  _defineProperty(this, "rider", void 0);

  _defineProperty(this, "familiar", void 0);

  _defineProperty(this, "canEquipItemCount", void 0);

  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount;
};

var _outfitSlots = /*#__PURE__*/new WeakMap();

var _useHistory = /*#__PURE__*/new WeakMap();

var _maxSize = /*#__PURE__*/new WeakMap();

var OutfitLRUCache = /*#__PURE__*/function () {
  // Current outfits allocated
  // Array of indices into #outfitSlots in order of use. Most recent at the front.
  function OutfitLRUCache(maxSize) {
    _classCallCheck(this, OutfitLRUCache);

    _outfitSlots.set(this, {
      writable: true,
      value: []
    });

    _useHistory.set(this, {
      writable: true,
      value: []
    });

    _maxSize.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _maxSize, maxSize);
  }

  _createClass(OutfitLRUCache, [{
    key: "checkConsistent",
    value: function checkConsistent() {
      if (_classPrivateFieldGet(this, _useHistory).length !== _classPrivateFieldGet(this, _outfitSlots).length || !_toConsumableArray(_classPrivateFieldGet(this, _useHistory)).sort().every((value, index) => value === index)) {
        throw new Error("Outfit cache consistency failed.");
      }
    }
  }, {
    key: "promote",
    value: function promote(index) {
      _classPrivateFieldSet(this, _useHistory, [index].concat(_toConsumableArray(_classPrivateFieldGet(this, _useHistory).filter(i => i !== index))));

      this.checkConsistent();
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = _classPrivateFieldGet(this, _outfitSlots).indexOf(key);

      if (index < 0) return undefined;
      this.promote(index);
      return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function insert(key) {
      var lastUseIndex = undefined;

      if (_classPrivateFieldGet(this, _outfitSlots).length >= _classPrivateFieldGet(this, _maxSize)) {
        lastUseIndex = _classPrivateFieldGet(this, _useHistory).pop();

        if (lastUseIndex === undefined) {
          throw new Error("Outfit cache consistency failed.");
        }

        _classPrivateFieldGet(this, _useHistory).splice(0, 0, lastUseIndex);

        _classPrivateFieldGet(this, _outfitSlots)[lastUseIndex] = key;
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(this, _outfitSlots).push(key) - 1;

        _classPrivateFieldGet(this, _useHistory).splice(0, 0, index);

        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }]);

  return OutfitLRUCache;
}();
/**
 * Save current equipment as KoL-native outfit.
 * @param name Name of new outfit.
 */


_defineProperty(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");

function saveOutfit(name) {
  (0, _kolmafia.cliExecute)("outfit save ".concat(name));
} // Objective cache entries.


var cachedObjectives = {}; // Outfit cache entries. Keep 6 by default to avoid cluttering list.

var outfitCache = new OutfitLRUCache(6); // Cache to prevent rescanning all items unnecessarily

var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
/**
 * Count the number of unique items that can be equipped.
 * @returns The count of unique items.
 */

function canEquipItemCount() {
  var stats = (0, _templateString.$stats)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min((0, _kolmafia.myBasestat)(stat), 300));

  if (stats.every((value, index) => value === cachedStats[index])) {
    return cachedCanEquipItemCount;
  }

  cachedStats = stats;
  cachedCanEquipItemCount = Item.all().filter(item => (0, _kolmafia.canEquip)(item)).length;
  return cachedCanEquipItemCount;
}
/**
 * Checks the objective cache for a valid entry.
 * @param cacheKey The cache key to check.
 * @param updateOnFamiliarChange Ignore cache if familiar has changed.
 * @param updateOnCanEquipChanged Ignore cache if stats have changed what can be equipped.
 * @returns A valid CacheEntry or null.
 */


function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];

  if (!entry) {
    return null;
  }

  if (options.updateOnFamiliarChange && (0, _kolmafia.myFamiliar)() !== entry.familiar) {
    _logger.default.warning("Equipment found in maximize cache but familiar is different.");

    return null;
  }

  if (options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    _logger.default.warning("Equipment found in maximize cache but equippable item list is out of date.");

    return null;
  }

  return entry;
}
/**
 * Applies equipment that was found in the cache.
 * @param entry The CacheEntry to apply
 */


function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : undefined;

  if (outfitName) {
    if (!(0, _kolmafia.isWearingOutfit)(outfitName)) {
      (0, _kolmafia.outfit)(outfitName);
    }

    var familiarEquip = entry.equipment.get((0, _templateString.$slot)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["familiar"]))));
    if (familiarEquip) (0, _kolmafia.equip)(familiarEquip);
    verifyCached(entry);
  } else {
    var _iterator = _createForOfIteratorHelper(entry.equipment),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            slot = _step$value[0],
            item = _step$value[1];

        if ((0, _kolmafia.equippedItem)(slot) !== item && (0, _kolmafia.availableAmount)(item) > 0) {
          (0, _kolmafia.equip)(slot, item);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);

      _logger.default.info("Saving equipment to outfit ".concat(_outfitName, "."));

      saveOutfit(_outfitName);
    }
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get((0, _templateString.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    (0, _kolmafia.enthroneFamiliar)(entry.rider.get((0, _templateString.$item)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Crown of Thrones"])))) || (0, _templateString.$familiar)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["none"]))));
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get((0, _templateString.$item)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    (0, _kolmafia.bjornifyFamiliar)(entry.rider.get((0, _templateString.$item)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Buddy Bjorn"])))) || (0, _templateString.$familiar)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["none"]))));
  }
}
/**
 * Verifies that a CacheEntry was applied successfully.
 * @param entry The CacheEntry to verify
 * @returns If all desired equipment was appliedn in the correct slots.
 */


function verifyCached(entry) {
  var success = true;

  var _iterator2 = _createForOfIteratorHelper(entry.equipment),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          slot = _step2$value[0],
          item = _step2$value[1];

      if ((0, _kolmafia.equippedItem)(slot) !== item) {
        _logger.default.warning("Failed to apply cached ".concat(item, " in ").concat(slot, "."));

        success = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get((0, _templateString.$item)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get((0, _templateString.$item)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Crown of Thrones"])))) !== (0, _kolmafia.myEnthronedFamiliar)()) {
      _logger.default.warning("Failed to apply ".concat(entry.rider.get((0, _templateString.$item)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat((0, _templateString.$item)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Crown of Thrones"]))), "."));

      success = false;
    }
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get((0, _templateString.$item)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get((0, _templateString.$item)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["Buddy Bjorn"])))) !== (0, _kolmafia.myBjornedFamiliar)()) {
      _logger.default.warning("Failed to apply".concat(entry.rider.get((0, _templateString.$item)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat((0, _templateString.$item)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Buddy Bjorn"]))), "."));

      success = false;
    }
  }

  return success;
}
/**
 * Save current equipment to the objective cache.
 * @param cacheKey The cache key to save.
 */


function saveCached(cacheKey, options) {
  var equipment = new Map();
  var rider = new Map();

  var _iterator3 = _createForOfIteratorHelper(cachedSlots),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _slot2 = _step3.value;
      equipment.set(_slot2, (0, _kolmafia.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set((0, _templateString.$slot)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["card-sleeve"]))), (0, _kolmafia.equippedItem)((0, _templateString.$slot)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["card-sleeve"])))));
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set((0, _templateString.$item)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["Crown of Thrones"]))), (0, _kolmafia.myEnthronedFamiliar)());
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set((0, _templateString.$item)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Buddy Bjorn"]))), (0, _kolmafia.myBjornedFamiliar)());
  }

  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator4 = _createForOfIteratorHelper(options.preventSlot),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var slot = _step4.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    if (options.preventSlot.includes((0, _templateString.$slot)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete((0, _templateString.$item)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (options.preventSlot.includes((0, _templateString.$slot)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete((0, _templateString.$item)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator5 = _createForOfIteratorHelper(Slot.all()),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _slot = _step5.value;

        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    if (!options.onlySlot.includes((0, _templateString.$slot)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete((0, _templateString.$item)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (!options.onlySlot.includes((0, _templateString.$slot)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete((0, _templateString.$item)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  var entry = new CacheEntry(equipment, rider, (0, _kolmafia.myFamiliar)(), canEquipItemCount());
  cachedObjectives[cacheKey] = entry;

  if (options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);

    _logger.default.info("Saving equipment to outfit ".concat(outfitName, "."));

    saveOutfit(outfitName);
  }
}
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */


function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var fullOptions = _objectSpread(_objectSpread({}, defaultMaximizeOptions), options);

  var forceEquip = fullOptions.forceEquip,
      preventEquip = fullOptions.preventEquip,
      bonusEquip = fullOptions.bonusEquip,
      onlySlot = fullOptions.onlySlot,
      preventSlot = fullOptions.preventSlot; // Sort each group in objective to ensure consistent ordering in string

  var objective = [].concat(_toConsumableArray(objectives.sort()), _toConsumableArray(forceEquip.map(item => "equip ".concat(item)).sort()), _toConsumableArray(preventEquip.map(item => "-equip ".concat(item)).sort()), _toConsumableArray(onlySlot.filter(slot => !(0, _templateString.$slots)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["buddy-bjorn, crown-of-thrones"]))).includes(slot)).map(slot => "".concat(slot)).sort()), _toConsumableArray(preventSlot.filter(slot => !(0, _templateString.$slots)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["buddy-bjorn, crown-of-thrones"]))).includes(slot)).map(slot => "-".concat(slot)).sort()), _toConsumableArray(Array.from(bonusEquip.entries()).filter(_ref => {
    var _ref2 = _slicedToArray(_ref, 2),
        bonus = _ref2[1];

    return bonus !== 0;
  }).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
        item = _ref4[0],
        bonus = _ref4[1];

    return "".concat(Math.round(bonus * 100) / 100, " bonus ").concat(item);
  }).sort())).join(", ");
  var cacheEntry = checkCache(objective, fullOptions);

  if (cacheEntry) {
    _logger.default.info("Equipment found in maximize cache, equipping...");

    applyCached(cacheEntry, fullOptions);

    if (verifyCached(cacheEntry)) {
      _logger.default.info("Equipped cached ".concat(objective));

      return;
    }

    _logger.default.warning("Maximize cache application failed, maximizing...");
  }

  (0, _kolmafia.maximize)(objective, false);
  saveCached(objective, fullOptions);
}

var _maximizeParameters = /*#__PURE__*/new WeakMap();

var _maximizeOptions = /*#__PURE__*/new WeakMap();

var Requirement = /*#__PURE__*/function () {
  /**
   * A convenient way of combining maximization parameters and options
   * @param maximizeParameters Parameters you're attempting to maximize
   * @param maximizeOptions Object potentially containing forceEquips, bonusEquips, preventEquips, and preventSlots
   */
  function Requirement(maximizeParameters, maximizeOptions) {
    _classCallCheck(this, Requirement);

    _maximizeParameters.set(this, {
      writable: true,
      value: void 0
    });

    _maximizeOptions.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters);

    _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }

  _createClass(Requirement, [{
    key: "maximizeParameters",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
    /**
     * Merges two requirements, concanating relevant arrays. Typically used in static form.
     * @param other Requirement to merge with.
     */

  }, {
    key: "merge",
    value: function merge(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption2, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot;

      var optionsA = this.maximizeOptions;
      var optionsB = other.maximizeOptions;
      return new Requirement([].concat(_toConsumableArray(this.maximizeParameters), _toConsumableArray(other.maximizeParameters)), {
        updateOnFamiliarChange: optionsA.updateOnFamiliarChange || other.maximizeOptions.updateOnFamiliarChange,
        updateOnCanEquipChanged: optionsA.updateOnCanEquipChanged || other.maximizeOptions.updateOnCanEquipChanged,
        forceEquip: [].concat(_toConsumableArray((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), _toConsumableArray((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])),
        preventEquip: [].concat(_toConsumableArray((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), _toConsumableArray((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 ? _other$maximizeOption2 : [])),
        bonusEquip: new Map([].concat(_toConsumableArray((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), _toConsumableArray((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(_toConsumableArray((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), _toConsumableArray((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(_toConsumableArray((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), _toConsumableArray((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : []))
      });
    }
    /**
     * Merges a set of requirements together, starting with an empty requirement.
     * @param allRequirements Requirements to merge
     */

  }, {
    key: "maximize",
    value:
    /**
     * Runs maximizeCached, using the maximizeParameters and maximizeOptions contained by this requirement.
     */
    function maximize() {
      maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
    /**
     * Merges requirements, and then runs maximizeCached on the combined requirement.
     * @param requirements Requirements to maximize on
     */

  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce((x, y) => x.merge(y), new Requirement([], {}));
    }
  }, {
    key: "maximize",
    value: function maximize() {
      for (var _len = arguments.length, requirements = new Array(_len), _key = 0; _key < _len; _key++) {
        requirements[_key] = arguments[_key];
      }

      Requirement.merge(requirements).maximize();
    }
  }]);

  return Requirement;
}();

exports.Requirement = Requirement;

/***/ }),

/***/ 9409:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.get = get;

var _kolmafia = __webpack_require__(1664);

var _utils = __webpack_require__(8588);

var _modifierTypes = __webpack_require__(2986);

function get(name, subject) {
  if ((0, _utils.arrayContains)(name, _modifierTypes.booleanModifiers)) {
    return subject === undefined ? (0, _kolmafia.booleanModifier)(name) : (0, _kolmafia.booleanModifier)(subject, name);
  }

  if ((0, _utils.arrayContains)(name, _modifierTypes.classModifiers)) {
    return (0, _kolmafia.classModifier)(subject, name);
  }

  if ((0, _utils.arrayContains)(name, _modifierTypes.effectModifiers)) {
    return (0, _kolmafia.effectModifier)(subject, name);
  }

  if ((0, _utils.arrayContains)(name, _modifierTypes.monsterModifiers)) {
    return (0, _kolmafia.monsterModifier)(subject, name);
  }

  if ((0, _utils.arrayContains)(name, _modifierTypes.numericModifiers)) {
    return subject === undefined ? (0, _kolmafia.numericModifier)(name) : (0, _kolmafia.numericModifier)(subject, name);
  }

  if ((0, _utils.arrayContains)(name, _modifierTypes.skillModifiers)) {
    return (0, _kolmafia.skillModifier)(subject, name);
  }

  if ((0, _utils.arrayContains)(name, _modifierTypes.stringModifiers)) {
    return subject === undefined ? (0, _kolmafia.stringModifier)(name) : (0, _kolmafia.stringModifier)(subject, name);
  }

  if ((0, _utils.arrayContains)(name, _modifierTypes.statModifiers)) {
    return (0, _kolmafia.statModifier)(subject, name);
  }
}

/***/ }),

/***/ 2986:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.stringModifiers = exports.statModifiers = exports.skillModifiers = exports.monsterModifiers = exports.effectModifiers = exports.numericModifiers = exports.classModifiers = exports.booleanModifiers = void 0; // THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseModifiers.ts for more information

var booleanModifiers = ["Softcore Only", "Single Equip", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Attacks Can't Miss", "Pirate", "Breakable", "Drops Items", "Drops Meat"];
exports.booleanModifiers = booleanModifiers;
var classModifiers = ["Class"];
exports.classModifiers = classModifiers;
var numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Surgeonosity", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Clowniness", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water"];
exports.numericModifiers = numericModifiers;
var effectModifiers = ["Effect", "Rollover Effect"];
exports.effectModifiers = effectModifiers;
var monsterModifiers = ["Avatar"];
exports.monsterModifiers = monsterModifiers;
var skillModifiers = ["Skill"];
exports.skillModifiers = skillModifiers;
var statModifiers = ["Plumber Stat"];
exports.statModifiers = statModifiers;
var stringModifiers = ["Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie"];
exports.stringModifiers = stringModifiers;

/***/ }),

/***/ 6115:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(1235);

__webpack_require__(2352);

__webpack_require__(6467);

__webpack_require__(5594);

__webpack_require__(5198);

__webpack_require__(893);

__webpack_require__(8151);

__webpack_require__(8797);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Mood = exports.MagicalSausages = exports.OscusSoda = exports.MpSource = void 0;

__webpack_require__(7504);

__webpack_require__(778);

__webpack_require__(3239);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _utils = __webpack_require__(8588);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var MpSource = /*#__PURE__*/function () {
  function MpSource() {
    _classCallCheck(this, MpSource);
  }

  _createClass(MpSource, [{
    key: "usesRemaining",
    value: function usesRemaining() {
      return null;
    }
  }, {
    key: "availableMpMax",
    value: function availableMpMax() {
      return this.availableMpMin();
    }
  }]);

  return MpSource;
}();

exports.MpSource = MpSource;

var OscusSoda = /*#__PURE__*/function (_MpSource) {
  _inherits(OscusSoda, _MpSource);

  var _super = _createSuper(OscusSoda);

  function OscusSoda() {
    _classCallCheck(this, OscusSoda);

    return _super.apply(this, arguments);
  }

  _createClass(OscusSoda, [{
    key: "available",
    value: function available() {
      return (0, _lib.have)((0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Oscus's neverending soda"]))));
    }
  }, {
    key: "usesRemaining",
    value: function usesRemaining() {
      return (0, _property.get)("oscusSodaUsed") ? 0 : 1;
    }
  }, {
    key: "availableMpMin",
    value: function availableMpMin() {
      return this.available() ? 200 : 0;
    }
  }, {
    key: "availableMpMax",
    value: function availableMpMax() {
      return this.available() ? 300 : 0;
    }
  }, {
    key: "execute",
    value: function execute() {
      (0, _kolmafia.use)((0, _templateString.$item)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Oscus's neverending soda"]))));
    }
  }]);

  return OscusSoda;
}(MpSource);

exports.OscusSoda = OscusSoda;

_defineProperty(OscusSoda, "instance", new OscusSoda());

var MagicalSausages = /*#__PURE__*/function (_MpSource2) {
  _inherits(MagicalSausages, _MpSource2);

  var _super2 = _createSuper(MagicalSausages);

  function MagicalSausages() {
    _classCallCheck(this, MagicalSausages);

    return _super2.apply(this, arguments);
  }

  _createClass(MagicalSausages, [{
    key: "usesRemaining",
    value: function usesRemaining() {
      return 23 - (0, _property.get)("_sausagesEaten");
    }
  }, {
    key: "availableMpMin",
    value: function availableMpMin() {
      var maxSausages = Math.min(23 - (0, _property.get)("_sausagesEaten"), (0, _kolmafia.itemAmount)((0, _templateString.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["magical sausage"])))) + (0, _kolmafia.itemAmount)((0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["magical sausage casing"])))));
      return Math.min((0, _kolmafia.myMaxmp)(), 999) * maxSausages;
    }
  }, {
    key: "execute",
    value: function execute() {
      var mpSpaceAvailable = (0, _kolmafia.myMaxmp)() - (0, _kolmafia.myMp)();
      if (mpSpaceAvailable < 700) return;
      var maxSausages = Math.min(23 - (0, _property.get)("_sausagesEaten"), (0, _kolmafia.itemAmount)((0, _templateString.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["magical sausage"])))) + (0, _kolmafia.itemAmount)((0, _templateString.$item)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["magical sausage casing"])))), Math.floor(((0, _kolmafia.myMaxmp)() - (0, _kolmafia.myMp)()) / Math.min((0, _kolmafia.myMaxmp)() - (0, _kolmafia.myMp)(), 999)));
      (0, _kolmafia.retrieveItem)(maxSausages, (0, _templateString.$item)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["magical sausage"]))));
      (0, _kolmafia.eat)(maxSausages, (0, _templateString.$item)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["magical sausage"]))));
    }
  }]);

  return MagicalSausages;
}(MpSource);

exports.MagicalSausages = MagicalSausages;

_defineProperty(MagicalSausages, "instance", new MagicalSausages());

var MoodElement = /*#__PURE__*/function () {
  function MoodElement() {
    _classCallCheck(this, MoodElement);
  }

  _createClass(MoodElement, [{
    key: "mpCostPerTurn",
    value: function mpCostPerTurn() {
      return 0;
    }
  }, {
    key: "turnIncrement",
    value: function turnIncrement() {
      return 1;
    }
  }]);

  return MoodElement;
}();

var SkillMoodElement = /*#__PURE__*/function (_MoodElement) {
  _inherits(SkillMoodElement, _MoodElement);

  var _super3 = _createSuper(SkillMoodElement);

  function SkillMoodElement(skill) {
    var _this;

    _classCallCheck(this, SkillMoodElement);

    _this = _super3.call(this);

    _defineProperty(_assertThisInitialized(_this), "skill", void 0);

    _this.skill = skill;
    return _this;
  }

  _createClass(SkillMoodElement, [{
    key: "mpCostPerTurn",
    value: function mpCostPerTurn() {
      var turns = (0, _kolmafia.turnsPerCast)(this.skill);
      return turns > 0 ? (0, _kolmafia.mpCost)(this.skill) / turns : 0;
    }
  }, {
    key: "turnIncrement",
    value: function turnIncrement() {
      return (0, _kolmafia.turnsPerCast)(this.skill);
    }
  }, {
    key: "execute",
    value: function execute(mood, ensureTurns) {
      var effect = (0, _kolmafia.toEffect)(this.skill);
      var initialTurns = (0, _kolmafia.haveEffect)(effect);
      if (!(0, _kolmafia.haveSkill)(this.skill)) return false;
      if (initialTurns >= ensureTurns) return true; // Deal with song slots.

      if (mood.options.songSlots.length > 0 && (0, _lib.isSong)(this.skill) && !(0, _lib.have)(effect)) {
        var activeSongs = (0, _lib.getActiveSongs)();

        var _iterator = _createForOfIteratorHelper(activeSongs),
            _step;

        try {
          var _loop = function _loop() {
            var song = _step.value;
            var slot = mood.options.songSlots.find(slot => slot.includes(song));
            if (!slot || slot.includes(effect)) (0, _kolmafia.cliExecute)("shrug ".concat(song));
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var oldRemainingCasts = -1;
      var remainingCasts = Math.ceil((ensureTurns - (0, _kolmafia.haveEffect)(effect)) / (0, _kolmafia.turnsPerCast)(this.skill));

      while (remainingCasts > 0 && oldRemainingCasts !== remainingCasts) {
        var maxCasts = void 0;

        if ((0, _kolmafia.hpCost)(this.skill) > 0) {
          // FIXME: restore HP
          maxCasts = Math.floor((0, _kolmafia.myHp)() / (0, _kolmafia.hpCost)(this.skill));
        } else {
          var cost = (0, _kolmafia.mpCost)(this.skill);
          maxCasts = Math.floor((0, _kolmafia.myMp)() / cost);

          if (maxCasts === 0) {
            mood.moreMp(cost);
            maxCasts = Math.floor((0, _kolmafia.myMp)() / cost);
          }
        }

        var casts = (0, _utils.clamp)(remainingCasts, 0, Math.min(100, maxCasts));
        (0, _kolmafia.useSkill)(casts, this.skill);
        oldRemainingCasts = remainingCasts;
        remainingCasts = Math.ceil((ensureTurns - (0, _kolmafia.haveEffect)(effect)) / (0, _kolmafia.turnsPerCast)(this.skill));
      }

      return (0, _kolmafia.haveEffect)(effect) > ensureTurns;
    }
  }]);

  return SkillMoodElement;
}(MoodElement);

var PotionMoodElement = /*#__PURE__*/function (_MoodElement2) {
  _inherits(PotionMoodElement, _MoodElement2);

  var _super4 = _createSuper(PotionMoodElement);

  function PotionMoodElement(potion, maxPricePerTurn) {
    var _this2;

    _classCallCheck(this, PotionMoodElement);

    _this2 = _super4.call(this);

    _defineProperty(_assertThisInitialized(_this2), "potion", void 0);

    _defineProperty(_assertThisInitialized(_this2), "maxPricePerTurn", void 0);

    _this2.potion = potion;
    _this2.maxPricePerTurn = maxPricePerTurn;
    return _this2;
  }

  _createClass(PotionMoodElement, [{
    key: "execute",
    value: function execute(mood, ensureTurns) {
      // FIXME: Smarter buying logic.
      // FIXME: Allow constructing stuff (e.g. snow cleats)
      var effect = (0, _kolmafia.effectModifier)(this.potion, "Effect");
      var effectTurns = (0, _kolmafia.haveEffect)(effect);
      var turnsPerUse = (0, _kolmafia.numericModifier)(this.potion, "Effect Duration");

      if ((0, _kolmafia.mallPrice)(this.potion) > this.maxPricePerTurn * turnsPerUse) {
        return false;
      }

      if (effectTurns < ensureTurns) {
        var uses = (ensureTurns - effectTurns) / turnsPerUse;
        var quantityToBuy = (0, _utils.clamp)(uses - (0, _kolmafia.availableAmount)(this.potion), 0, 100);
        (0, _kolmafia.buy)(quantityToBuy, this.potion, this.maxPricePerTurn * turnsPerUse);
        var quantityToUse = (0, _utils.clamp)(uses, 0, (0, _kolmafia.availableAmount)(this.potion));
        (0, _kolmafia.use)(quantityToUse, this.potion);
      }

      return (0, _kolmafia.haveEffect)(effect) >= ensureTurns;
    }
  }]);

  return PotionMoodElement;
}(MoodElement);

var GenieMoodElement = /*#__PURE__*/function (_MoodElement3) {
  _inherits(GenieMoodElement, _MoodElement3);

  var _super5 = _createSuper(GenieMoodElement);

  function GenieMoodElement(effect) {
    var _this3;

    _classCallCheck(this, GenieMoodElement);

    _this3 = _super5.call(this);

    _defineProperty(_assertThisInitialized(_this3), "effect", void 0);

    _this3.effect = effect;
    return _this3;
  }

  _createClass(GenieMoodElement, [{
    key: "execute",
    value: function execute(mood, ensureTurns) {
      if ((0, _kolmafia.haveEffect)(this.effect) >= ensureTurns) return true;
      var neededWishes = Math.ceil(((0, _kolmafia.haveEffect)(this.effect) - ensureTurns) / 20);
      var wishesToBuy = (0, _utils.clamp)(neededWishes - (0, _kolmafia.availableAmount)((0, _templateString.$item)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["pocket wish"])))), 0, 20);
      (0, _kolmafia.buy)(wishesToBuy, (0, _templateString.$item)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["pocket wish"]))), 50000);
      var wishesToUse = (0, _utils.clamp)(neededWishes, 0, (0, _kolmafia.availableAmount)((0, _templateString.$item)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["pocket wish"])))));

      for (; wishesToUse > 0; wishesToUse--) {
        (0, _kolmafia.cliExecute)("genie effect ".concat(this.effect.name));
      }

      return (0, _kolmafia.haveEffect)(this.effect) >= ensureTurns;
    }
  }]);

  return GenieMoodElement;
}(MoodElement);

var CustomMoodElement = /*#__PURE__*/function (_MoodElement4) {
  _inherits(CustomMoodElement, _MoodElement4);

  var _super6 = _createSuper(CustomMoodElement);

  function CustomMoodElement(effect, gainEffect) {
    var _this4;

    _classCallCheck(this, CustomMoodElement);

    _this4 = _super6.call(this);

    _defineProperty(_assertThisInitialized(_this4), "effect", void 0);

    _defineProperty(_assertThisInitialized(_this4), "gainEffect", void 0);

    _this4.effect = effect;
    _this4.gainEffect = gainEffect !== null && gainEffect !== void 0 ? gainEffect : () => (0, _kolmafia.cliExecute)(effect.default);
    return _this4;
  }

  _createClass(CustomMoodElement, [{
    key: "execute",
    value: function execute(mood, ensureTurns) {
      var currentTurns = (0, _kolmafia.haveEffect)(this.effect);
      var lastCurrentTurns = -1;

      while (currentTurns < ensureTurns && currentTurns !== lastCurrentTurns) {
        this.gainEffect();
        lastCurrentTurns = currentTurns;
        currentTurns = (0, _kolmafia.haveEffect)(this.effect);
      }

      return (0, _kolmafia.haveEffect)(this.effect) > ensureTurns;
    }
  }]);

  return CustomMoodElement;
}(MoodElement);
/**
 * Class representing a mood object. Add mood elements using the instance methods, which can be chained.
 */


var Mood = /*#__PURE__*/function () {
  /**
   * Construct a new Mood instance.
   * @param options Options for mood.
   */
  function Mood() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Mood);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "elements", []);

    this.options = _objectSpread(_objectSpread({}, Mood.defaultOptions), options);
  }
  /**
   * Get the MP available for casting skills.
   */


  _createClass(Mood, [{
    key: "availableMp",
    value: function availableMp() {
      return (0, _utils.sum)(this.options.mpSources, mpSource => mpSource.availableMpMin()) + Math.max((0, _kolmafia.myMp)() - this.options.reserveMp, 0);
    }
  }, {
    key: "moreMp",
    value: function moreMp(minimumTarget) {
      var _iterator2 = _createForOfIteratorHelper(this.options.mpSources),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var mpSource = _step2.value;
          var usesRemaining = mpSource.usesRemaining();

          if (usesRemaining !== null && usesRemaining > 0) {
            mpSource.execute();
            if ((0, _kolmafia.myMp)() >= minimumTarget) break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Add a skill to the mood.
     * @param skill Skill to add.
     */

  }, {
    key: "skill",
    value: function skill(_skill) {
      this.elements.push(new SkillMoodElement(_skill));
      return this;
    }
    /**
     * Add an effect to the mood, with casting based on {effect.default}.
     * @param effect Effect to add.
     * @param gainEffect How to gain the effect. Only runs if we don't have the effect.
     */

  }, {
    key: "effect",
    value: function effect(_effect, gainEffect) {
      var skill = (0, _kolmafia.toSkill)(_effect);

      if (!gainEffect && skill !== (0, _templateString.$skill)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["none"])))) {
        this.skill(skill);
      } else {
        this.elements.push(new CustomMoodElement(_effect, gainEffect));
      }

      return this;
    }
    /**
     * Add a potion to the mood.
     * @param potion Potion to add.
     * @param maxPricePerTurn Maximum price to pay per turn of the effect.
     */

  }, {
    key: "potion",
    value: function potion(_potion, maxPricePerTurn) {
      this.elements.push(new PotionMoodElement(_potion, maxPricePerTurn));
      return this;
    }
    /**
     * Add an effect to acquire via pocket wishes to the mood.
     * @param effect Effect to wish for in the mood.
     */

  }, {
    key: "genie",
    value: function genie(effect) {
      this.elements.push(new GenieMoodElement(effect));
      return this;
    }
    /**
     * Execute the mood, trying to ensure {ensureTurns} of each effect.
     * @param ensureTurns Turns of each effect to try and achieve.
     * @returns Whether or not we successfully got this many turns of every effect in the mood.
     */

  }, {
    key: "execute",
    value: function execute() {
      var ensureTurns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var availableMp = this.availableMp();
      var totalMpPerTurn = (0, _utils.sum)(this.elements, element => element.mpCostPerTurn());
      var potentialTurns = Math.floor(availableMp / totalMpPerTurn);
      var completeSuccess = true;

      var _iterator3 = _createForOfIteratorHelper(this.elements),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;
          var elementTurns = ensureTurns;

          if (element.mpCostPerTurn() > 0) {
            var elementPotentialTurns = Math.floor(potentialTurns / element.turnIncrement()) * element.turnIncrement();
            elementTurns = Math.min(ensureTurns, elementPotentialTurns);
          }

          completeSuccess = element.execute(this, elementTurns) && completeSuccess;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return completeSuccess;
    }
  }], [{
    key: "setDefaultOptions",
    value:
    /**
     * Set default options for new Mood instances.
     * @param options Default options for new Mood instances.
     */
    function setDefaultOptions(options) {
      Mood.defaultOptions = _objectSpread(_objectSpread({}, Mood.defaultOptions), options);
    }
  }]);

  return Mood;
}();

exports.Mood = Mood;

_defineProperty(Mood, "defaultOptions", {
  songSlots: [],
  mpSources: [MagicalSausages.instance, OscusSoda.instance],
  reserveMp: 0
});

/***/ }),

/***/ 1347:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(5594);

__webpack_require__(5198);

__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.get = get;
exports.set = _set;
exports.setProperties = setProperties;
exports.withProperties = withProperties;
exports.withProperty = withProperty;
exports.withChoices = withChoices;
exports.withChoice = withChoice;
exports.PropertiesManager = exports.getThrall = exports.getStat = exports.getSlot = exports.getSkill = exports.getServant = exports.getPhylum = exports.getMonster = exports.getLocation = exports.getItem = exports.getFamiliar = exports.getElement = exports.getEffect = exports.getCoinmaster = exports.getClass = exports.getBounty = exports.getNumber = exports.getBoolean = exports.getCommaSeparated = exports.getString = void 0;

__webpack_require__(2238);

__webpack_require__(1714);

__webpack_require__(6467);

__webpack_require__(4594);

__webpack_require__(4875);

__webpack_require__(893);

__webpack_require__(8819);

__webpack_require__(7434);

var _kolmafia = __webpack_require__(1664);

var _propertyTyping = __webpack_require__(9412);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var createPropertyGetter = transform => (property, default_) => {
  var value = (0, _kolmafia.getProperty)(property);

  if (default_ !== undefined && value === "") {
    return default_;
  }

  return transform(value, property);
};

var createMafiaClassPropertyGetter = Type => createPropertyGetter(value => {
  if (value === "") return null;
  var v = Type.get(value);
  return v === Type.get("none") ? null : v;
});

var getString = createPropertyGetter(value => value);
exports.getString = getString;
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
exports.getCommaSeparated = getCommaSeparated;
var getBoolean = createPropertyGetter(value => value === "true");
exports.getBoolean = getBoolean;
var getNumber = createPropertyGetter(value => Number(value));
exports.getNumber = getNumber;
var getBounty = createMafiaClassPropertyGetter(Bounty);
exports.getBounty = getBounty;
var getClass = createMafiaClassPropertyGetter(Class);
exports.getClass = getClass;
var getCoinmaster = createMafiaClassPropertyGetter(Coinmaster);
exports.getCoinmaster = getCoinmaster;
var getEffect = createMafiaClassPropertyGetter(Effect);
exports.getEffect = getEffect;
var getElement = createMafiaClassPropertyGetter(Element);
exports.getElement = getElement;
var getFamiliar = createMafiaClassPropertyGetter(Familiar);
exports.getFamiliar = getFamiliar;
var getItem = createMafiaClassPropertyGetter(Item);
exports.getItem = getItem;
var getLocation = createMafiaClassPropertyGetter(Location);
exports.getLocation = getLocation;
var getMonster = createMafiaClassPropertyGetter(Monster);
exports.getMonster = getMonster;
var getPhylum = createMafiaClassPropertyGetter(Phylum);
exports.getPhylum = getPhylum;
var getServant = createMafiaClassPropertyGetter(Servant);
exports.getServant = getServant;
var getSkill = createMafiaClassPropertyGetter(Skill);
exports.getSkill = getSkill;
var getSlot = createMafiaClassPropertyGetter(Slot);
exports.getSlot = getSlot;
var getStat = createMafiaClassPropertyGetter(Stat);
exports.getStat = getStat;
var getThrall = createMafiaClassPropertyGetter(Thrall);
/**
 * Returns the value of a mafia property, either built in or custom
 * @param property Name of the property
 * @param _default Default value for the property to take if not set
 */

exports.getThrall = getThrall;

function get(property, _default) {
  var value = getString(property);

  if ((0, _propertyTyping.isMonsterProperty)(property)) {
    return getMonster(property, _default);
  }

  if ((0, _propertyTyping.isLocationProperty)(property)) {
    return getLocation(property, _default);
  }

  if (value === "") {
    return _default === undefined ? "" : _default;
  }

  if ((0, _propertyTyping.isBooleanProperty)(property, value)) {
    return getBoolean(property, _default);
  }

  if ((0, _propertyTyping.isNumericProperty)(property, value)) {
    return getNumber(property, _default);
  }

  return value;
}
/**
 * Sets the value of a mafia property, either built in or custom
 * @param property Name of the property
 * @param value Value to give the property
 */


function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0, _kolmafia.setProperty)(property, stringValue);
}

function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        prop = _Object$entries$_i[0],
        _value = _Object$entries$_i[1];

    _set(prop, _value);
  }
}

function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
        prop = _ref2[0];

    return [prop, get(prop)];
  }));
  setProperties(properties);

  try {
    callback();
  } finally {
    setProperties(propertiesBackup);
  }
}

function withProperty(property, value, callback) {
  withProperties(_defineProperty({}, property, value), callback);
}

function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
        choice = _ref4[0],
        option = _ref4[1];

    return ["choiceAdventure".concat(choice), option];
  }));
  withProperties(properties, callback);
}

function withChoice(choice, value, callback) {
  withChoices(_defineProperty({}, choice, value), callback);
}

var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    _classCallCheck(this, PropertiesManager);

    _defineProperty(this, "properties", void 0);

    this.properties = {};
  }

  _createClass(PropertiesManager, [{
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            propertyName = _Object$entries2$_i[0],
            propertyValue = _Object$entries2$_i[1];

        if (this.properties[propertyName] === undefined) {
          this.properties[propertyName] = get(propertyName);
        }

        _set(propertyName, propertyValue);
      }
    }
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 2),
            choiceNumber = _ref6[0],
            choiceValue = _ref6[1];

        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
  }, {
    key: "resetAll",
    value: function resetAll() {
      Object.entries(this.properties).forEach(_ref7 => {
        var _ref8 = _slicedToArray(_ref7, 2),
            propertyName = _ref8[0],
            propertyValue = _ref8[1];

        return _set(propertyName, propertyValue);
      });
    }
  }]);

  return PropertiesManager;
}();

exports.PropertiesManager = PropertiesManager;

/***/ }),

/***/ 9412:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isNumericProperty = isNumericProperty;
exports.isNumericOrStringProperty = isNumericOrStringProperty;
exports.isBooleanProperty = isBooleanProperty;
exports.isLocationProperty = isLocationProperty;
exports.isMonsterProperty = isMonsterProperty;
exports.isFamiliarProperty = isFamiliarProperty;
exports.isStatProperty = isStatProperty;

__webpack_require__(778);

__webpack_require__(4874);

function isNumericProperty(property, value) {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}

var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing"];
var choiceAdventurePattern = /^choiceAdventure\d+$/;

function isNumericOrStringProperty(property) {
  if (numericOrStringProperties.includes(property)) return true;
  return choiceAdventurePattern.test(property);
}

var fakeBooleans = ["trackVoteMonster", "_jickJarAvailable"];

function isBooleanProperty(property, value) {
  if (fakeBooleans.includes(property)) return false;
  return ["true", "false"].includes(value);
}

var otherLocations = ["nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget"];

function isLocationProperty(property) {
  return otherLocations.includes(property) || property.endsWith("Location");
}

var otherMonsters = ["romanticTarget", "yearbookCameraTarget"];
var fakeMonsters = ["trackVoteMonster"];

function isMonsterProperty(property) {
  if (otherMonsters.includes(property)) return true;
  return property.endsWith("Monster") && !fakeMonsters.includes(property);
}

function isFamiliarProperty(property) {
  return property.endsWith("Familiar");
}

var statProps = ["nsChallenge1", "shrugTopper", "snojoSetting"];

function isStatProperty(property) {
  return statProps.includes(property);
}

/***/ }),

/***/ 5661:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

__webpack_require__(6467);

__webpack_require__(5594);

__webpack_require__(5198);

__webpack_require__(893);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.getRunaways = getRunaways;
exports.getMaxRunaways = getMaxRunaways;
exports.getRemainingRunaways = getRemainingRunaways;
exports.couldRunaway = couldRunaway;
exports.canRunaway = canRunaway;
exports.prepareRunaway = prepareRunaway;
exports.familiar = void 0;

__webpack_require__(778);

__webpack_require__(3239);

var _kolmafia = __webpack_require__(1664);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _lib = __webpack_require__(3311);

var _templateObject, _templateObject2, _templateObject3;

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var familiar = (0, _templateString.$familiar)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Frumious Bandersnatch"])));
/**
 * Returns true if the player has the Frumious Bandersnatch in their
 * terrariukm
 */

exports.familiar = familiar;

function have() {
  return (0, _lib.have)(familiar);
}
/**
 * Returns the number of free runaways that have already been used
 * @see StompingBoots with which the Bandersnatch shares a counter
 */


function getRunaways() {
  return (0, _property.get)("_banderRunaways");
}
/**
 * Returns the total number of free runaways that the player can
 * get from their Bandersnatch
 *
 * @param considerWeightAdjustment Include familiar weight modifiers
 */


function getMaxRunaways() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var weightBuffs = considerWeightAdjustment ? (0, _kolmafia.weightAdjustment)() : 0;
  return Math.floor(((0, _kolmafia.familiarWeight)(familiar) + weightBuffs) / 5);
}
/**
 * Returns the number of remaining free runaways the player can
 * get from their Bandersnatch
 *
 * @param considerWeightAdjustment
 */


function getRemainingRunaways() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return Math.max(0, getMaxRunaways(considerWeightAdjustment) - getRunaways());
}
/**
 * Returns true if the player could use their Bandersnatch to
 * get a free run in theory
 *
 * @param considerWeightAdjustment Include familiar weight modifiers
 */


function couldRunaway() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return have() && getRemainingRunaways(considerWeightAdjustment) > 0;
}

var odeSkill = (0, _templateString.$skill)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["The Ode to Booze"])));
var odeEffect = (0, _templateString.$effect)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Ode to Booze"])));
/**
 * Returns true if the player can use their Bandersnatch to get a
 * free run right now
 */

function canRunaway() {
  return (0, _lib.isCurrentFamiliar)(familiar) && couldRunaway() && (0, _lib.have)(odeEffect);
}
/**
 * Prepare a Bandersnatch runaway.
 *
 * This will cast Ode to Booze and equip take your Bandersnatch with you.
 * If any of those steps fail, it will return false.
 *
 * @param songsToRemove Ordered list of songs that could be shrugged to make room for Ode to Booze
 */


function prepareRunaway(songsToRemove) {
  if (!(0, _lib.have)(odeEffect)) {
    if (!(0, _lib.have)(odeSkill)) {
      return false;
    }

    if (!(0, _lib.canRememberSong)()) {
      var activeSongs = (0, _lib.getActiveSongs)();

      var _iterator = _createForOfIteratorHelper(songsToRemove),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var song = _step.value;

          if (activeSongs.includes(song) && (0, _lib.uneffect)(song)) {
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    if (!(0, _kolmafia.useSkill)(odeSkill)) {
      return false;
    }
  }

  return (0, _kolmafia.useFamiliar)(familiar);
}

/***/ }),

/***/ 7235:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.getSpookyPuttySheetCopiesMade = getSpookyPuttySheetCopiesMade;
exports.prepareSpookyPuttySheet = prepareSpookyPuttySheet;
exports.getSpookyPuttySheetMonster = getSpookyPuttySheetMonster;
exports.useSpookyPuttySheet = useSpookyPuttySheet;
exports.sheet = void 0;

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var sheet = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Spooky Putty sheet"])));
exports.sheet = sheet;

function have() {
  return (0, _lib.getFoldGroup)(sheet).some(item => (0, _lib.have)(item));
}

function getSpookyPuttySheetCopiesMade() {
  return Math.max(0, (0, _property.get)("spookyPuttyCopiesMade"));
}

function prepareSpookyPuttySheet() {
  if (!have()) return false;
  if ((0, _lib.have)(sheet)) return true;
  return (0, _kolmafia.cliExecute)("fold Spooky putty sheet");
}

function getSpookyPuttySheetMonster() {
  return (0, _property.get)("spookyPuttyMonster");
}

function useSpookyPuttySheet() {
  return (0, _kolmafia.use)(sheet);
}

/***/ }),

/***/ 3758:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.getBadlyRomanticArrowUses = getBadlyRomanticArrowUses;
exports.haveBadlyRomanticArrowUsesRemaining = haveBadlyRomanticArrowUsesRemaining;
exports.couldUseBadlyRomanticArrow = couldUseBadlyRomanticArrow;
exports.prepareBadlyRomanticArrow = prepareBadlyRomanticArrow;
exports.canUseBadlyRomanticArrow = canUseBadlyRomanticArrow;
exports.getBadlyRomanticArrowMonster = getBadlyRomanticArrowMonster;
exports.BadlyRomanticArrow = exports.familiar = void 0;

var _kolmafia = __webpack_require__(1664);

var _Copier = __webpack_require__(2219);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var familiar = (0, _templateString.$familiar)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Obtuse Angel"])));
/**
 * Returns true if the player has an Obtuse Angel
 */

exports.familiar = familiar;

function have() {
  return (0, _lib.have)(familiar);
}
/**
 * Returns number of badly romantic arrows used
 */


function getBadlyRomanticArrowUses() {
  return Math.max(0, (0, _property.get)("_badlyRomanticArrows"));
}
/**
 * Returns true if badly romantic arrow can still be used
 */


function haveBadlyRomanticArrowUsesRemaining() {
  return getBadlyRomanticArrowUses() === 0;
}
/**
 * Returns true if the player could use badly romantic arrow in theory
 */


function couldUseBadlyRomanticArrow() {
  return have() && haveBadlyRomanticArrowUsesRemaining();
}
/**
 * Prepares badly romantic arrow for use
 */


function prepareBadlyRomanticArrow() {
  return (0, _kolmafia.useFamiliar)(familiar);
}
/**
 * Returns true if the player can use badly romantic arrow right now
 */


function canUseBadlyRomanticArrow() {
  return (0, _lib.isCurrentFamiliar)(familiar) && haveBadlyRomanticArrowUsesRemaining();
}
/**
 * Returns the current badly romantic arrow monster target
 */


function getBadlyRomanticArrowMonster() {
  return (0, _property.get)("romanticTarget");
}

var BadlyRomanticArrow = new _Copier.Copier(() => couldUseBadlyRomanticArrow(), () => prepareBadlyRomanticArrow(), () => canUseBadlyRomanticArrow(), () => getBadlyRomanticArrowMonster());
exports.BadlyRomanticArrow = BadlyRomanticArrow;

/***/ }),

/***/ 4945:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.getRainDohBlackBoxCopiesMade = getRainDohBlackBoxCopiesMade;
exports.getRainDohBlackBoxMonster = getRainDohBlackBoxMonster;
exports.useRainDohBlackBox = useRainDohBlackBox;
exports.box = void 0;

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var box = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Rain-Doh black box"])));
exports.box = box;

function have() {
  return (0, _lib.getFoldGroup)(box).some(item => (0, _lib.have)(item));
}

function getRainDohBlackBoxCopiesMade() {
  return Math.max(0, (0, _property.get)("_raindohCopiesMade"));
}

function getRainDohBlackBoxMonster() {
  return (0, _property.get)("rainDohMonster");
}

function useRainDohBlackBox() {
  return (0, _kolmafia.use)(box);
}

/***/ }),

/***/ 1576:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.flowersAvailableFor = flowersAvailableFor;
exports.isFull = isFull;
exports.all = exports.UpSeaDaisy = exports.Snori = exports.SubSeaRose = exports.Sargassum = exports.OrcaOrchid = exports.Duckweed = exports.ElectricEelgrass = exports.Crookweed = exports.Kelptomaniac = exports.Spankton = exports.MaxHeadshroom = exports.Portlybella = exports.Chillterelle = exports.FoulToadstool = exports.LooseMorels = exports.DisLichen = exports.ShuffleTruffle = exports.WizardsWig = exports.HornOfPlenty = exports.BlusteryPuffball = exports.PitcherPlant = exports.AloeGuvnor = exports.ArcticMoss = exports.BamBoo = exports.RedFern = exports.SpiderPlant = exports.Impatiens = exports.CannedSpinach = exports.StealingMagnolia = exports.WarLily = exports.SeltzerWatercress = exports.LettuceSpray = exports.CeleryStalker = exports.DeadlyCinnamon = exports.SkunkCabbage = exports.SmokeRa = exports.Artichoker = exports.RadishRadish = exports.Rutabeggar = exports.RabidDogwood = void 0;

__webpack_require__(6467);

__webpack_require__(4594);

__webpack_require__(8151);

__webpack_require__(7434);

__webpack_require__(778);

__webpack_require__(3239);

__webpack_require__(7504);

var _kolmafia = __webpack_require__(1664);

var _property = __webpack_require__(1347);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Flower = /*#__PURE__*/function () {
  function Flower(name, id, environment, modifier) {
    var territorial = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    _classCallCheck(this, Flower);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "environment", void 0);

    _defineProperty(this, "modifier", void 0);

    _defineProperty(this, "territorial", void 0);

    this.name = name;
    this.id = id;
    this.environment = environment;
    this.modifier = modifier;
    this.territorial = territorial;
  }

  _createClass(Flower, [{
    key: "plantNamesInZone",
    value: function plantNamesInZone() {
      var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _kolmafia.myLocation)();
      return (0, _kolmafia.getFloristPlants)()[location.toString()];
    }
  }, {
    key: "plantsInZone",
    value: function plantsInZone() {
      var _this$plantNamesInZon;

      var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _kolmafia.myLocation)();
      return (_this$plantNamesInZon = this.plantNamesInZone(location)) === null || _this$plantNamesInZon === void 0 ? void 0 : _this$plantNamesInZon.map(flowerName => toFlower(flowerName)).filter(flower => flower !== undefined);
    }
  }, {
    key: "isPlantedHere",
    value: function isPlantedHere() {
      var _this$plantNamesInZon2;

      var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _kolmafia.myLocation)();
      var plantedHere = (_this$plantNamesInZon2 = this.plantNamesInZone(location)) === null || _this$plantNamesInZon2 === void 0 ? void 0 : _this$plantNamesInZon2.includes(this.name);
      return plantedHere !== undefined && plantedHere;
    }
  }, {
    key: "available",
    value: function available() {
      var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _kolmafia.myLocation)();
      return this.environment === location.environment && !(0, _property.get)("_floristPlantsUsed").includes(this.name) && !this.isPlantedHere(location);
    }
  }, {
    key: "dig",
    value: function dig() {
      if (!this.isPlantedHere()) return false;
      var flowers = this.plantNamesInZone();
      if (!flowers || !flowers[2]) return false;
      var plantNumber = (0, _kolmafia.getFloristPlants)()[(0, _kolmafia.myLocation)().toString()].indexOf(this.name);
      (0, _kolmafia.visitUrl)("choice.php?option=2&whichchoice=720&pwd&plnti=".concat(plantNumber));
      return !this.isPlantedHere();
    }
  }, {
    key: "plant",
    value: function plant() {
      if (this.isPlantedHere()) return true;
      if (isFull()) return false;
      (0, _kolmafia.visitUrl)("choice.php?whichchoice=720&whichoption=1&pwd&plant=".concat(this.id));
      return this.isPlantedHere();
    }
  }]);

  return Flower;
}();

function have() {
  return (0, _kolmafia.floristAvailable)();
}

function toFlower(name) {
  return all.find(flower => name === flower.name);
}

function flowersIn(location) {
  var returnValue = [];
  (0, _kolmafia.getFloristPlants)()[location.toString()].map(toFlower).forEach(flower => {
    if (flower) returnValue.push(flower);
  });
  return returnValue;
}

function flowersAvailableFor() {
  var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _kolmafia.myLocation)();
  return all.filter(flower => flower.available(location));
}

function isFull() {
  var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _kolmafia.myLocation)();
  return flowersIn(location).length === 3;
}

var RabidDogwood = new Flower("Rabid Dogwood", 1, "outdoor", "+30 Monster Level", true);
exports.RabidDogwood = RabidDogwood;
var Rutabeggar = new Flower("Rutabeggar", 2, "outdoor", "+25 Item Drop", true);
exports.Rutabeggar = Rutabeggar;
var RadishRadish = new Flower("Rad-ish Radish", 3, "outdoor", "+5 Moxie Experience", true);
exports.RadishRadish = RadishRadish;
var Artichoker = new Flower("Artichoker", 4, "outdoor", "Delevels enemies");
exports.Artichoker = Artichoker;
var SmokeRa = new Flower("Smoke-ra", 5, "outdoor", "Blocks attacks");
exports.SmokeRa = SmokeRa;
var SkunkCabbage = new Flower("Skunk Cabbage", 6, "outdoor", "Stench damage");
exports.SkunkCabbage = SkunkCabbage;
var DeadlyCinnamon = new Flower("Deadly Cinnamon", 7, "outdoor", "Hot damage");
exports.DeadlyCinnamon = DeadlyCinnamon;
var CeleryStalker = new Flower("Celery Stalker", 8, "outdoor", "Spooky damage");
exports.CeleryStalker = CeleryStalker;
var LettuceSpray = new Flower("Lettus Spray", 9, "outdoor", "Restores HP");
exports.LettuceSpray = LettuceSpray;
var SeltzerWatercress = new Flower("Seltzer Watercress", 10, "outdoor", "Restores MP");
exports.SeltzerWatercress = SeltzerWatercress;
var WarLily = new Flower("War Lily", 11, "indoor", "+30 Monster Level", true);
exports.WarLily = WarLily;
var StealingMagnolia = new Flower("Stealing Magnolia", 12, "indoor", "+25 Item Drop", true);
exports.StealingMagnolia = StealingMagnolia;
var CannedSpinach = new Flower("Canned Spinach", 13, "indoor", "+5 Muscle Experience", true);
exports.CannedSpinach = CannedSpinach;
var Impatiens = new Flower("Impatiens", 14, "indoor", "+25 Initiative");
exports.Impatiens = Impatiens;
var SpiderPlant = new Flower("Spider Plant", 15, "indoor", "Poison");
exports.SpiderPlant = SpiderPlant;
var RedFern = new Flower("Red Fern", 16, "indoor", "Delevels enemies");
exports.RedFern = RedFern;
var BamBoo = new Flower("Bam BOO!", 17, "indoor", "Spooky damage");
exports.BamBoo = BamBoo;
var ArcticMoss = new Flower("Arctic Moss", 18, "indoor", "Cold damage");
exports.ArcticMoss = ArcticMoss;
var AloeGuvnor = new Flower("Aloe Guv'nor", 19, "indoor", "Restores HP");
exports.AloeGuvnor = AloeGuvnor;
var PitcherPlant = new Flower("Pitcher Plant", 20, "indoor", "Restores MP");
exports.PitcherPlant = PitcherPlant;
var BlusteryPuffball = new Flower("Blustery Puffball", 21, "underground", "+30 Monster Level", true);
exports.BlusteryPuffball = BlusteryPuffball;
var HornOfPlenty = new Flower("Horn of Plenty", 22, "underground", "+25 Item Drop", true);
exports.HornOfPlenty = HornOfPlenty;
var WizardsWig = new Flower("Wizard's Wig", 23, "underground", "+5 Mysticality Experience", true);
exports.WizardsWig = WizardsWig;
var ShuffleTruffle = new Flower("Shuffle Truffle", 24, "underground", "+25 Initiative");
exports.ShuffleTruffle = ShuffleTruffle;
var DisLichen = new Flower("Dis Lichen", 25, "underground", "Delevels enemies");
exports.DisLichen = DisLichen;
var LooseMorels = new Flower("Loose Morels", 26, "underground", "Sleaze damage");
exports.LooseMorels = LooseMorels;
var FoulToadstool = new Flower("Foul Toadstool", 27, "underground", "Stench damage");
exports.FoulToadstool = FoulToadstool;
var Chillterelle = new Flower("Chillterelle", 28, "underground", "Cold damage");
exports.Chillterelle = Chillterelle;
var Portlybella = new Flower("Portlybella", 29, "underground", "Retores HP");
exports.Portlybella = Portlybella;
var MaxHeadshroom = new Flower("Max Headshroom", 30, "underground", "Restores MP");
exports.MaxHeadshroom = MaxHeadshroom;
var Spankton = new Flower("Spankton", 31, "underwater", "Delevels enemies", true);
exports.Spankton = Spankton;
var Kelptomaniac = new Flower("Kelptomaniac", 32, "underwater", "+40 Item Drop", true);
exports.Kelptomaniac = Kelptomaniac;
var Crookweed = new Flower("Crookweed", 33, "underwater", "+60 Meat Drop", true);
exports.Crookweed = Crookweed;
var ElectricEelgrass = new Flower("Electric Eelgrass", 34, "underwater", "Blocks attacks");
exports.ElectricEelgrass = ElectricEelgrass;
var Duckweed = new Flower("Duckweed", 35, "underwater", "Protects once");
exports.Duckweed = Duckweed;
var OrcaOrchid = new Flower("Orca Orchid", 36, "underwater", "Physical damage");
exports.OrcaOrchid = OrcaOrchid;
var Sargassum = new Flower("Sargassum", 37, "underwater", "Stench damage");
exports.Sargassum = Sargassum;
var SubSeaRose = new Flower("Sub-Sea Rose", 38, "underwater", "Cold damage");
exports.SubSeaRose = SubSeaRose;
var Snori = new Flower("Snori", 39, "underwater", "Restores HP, Restores MP");
exports.Snori = Snori;
var UpSeaDaisy = new Flower("Up Sea Daisy", 40, "underwater", "+30 Experience");
exports.UpSeaDaisy = UpSeaDaisy;
var all = Object.freeze([RabidDogwood, Rutabeggar, RadishRadish, Artichoker, SmokeRa, SkunkCabbage, DeadlyCinnamon, CeleryStalker, LettuceSpray, SeltzerWatercress, WarLily, StealingMagnolia, CannedSpinach, Impatiens, SpiderPlant, RedFern, BamBoo, ArcticMoss, AloeGuvnor, PitcherPlant, BlusteryPuffball, HornOfPlenty, WizardsWig, ShuffleTruffle, DisLichen, LooseMorels, FoulToadstool, Chillterelle, Portlybella, MaxHeadshroom, Spankton, Kelptomaniac, Crookweed, ElectricEelgrass, Duckweed, OrcaOrchid, Sargassum, SubSeaRose, Snori, UpSeaDaisy]);
exports.all = all;

/***/ }),

/***/ 5915:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.haveUnfinishedIceSculpture = haveUnfinishedIceSculpture;
exports.isUnfinishedIceSculptureUsed = isUnfinishedIceSculptureUsed;
exports.couldUseUnfinishedIceSculpture = couldUseUnfinishedIceSculpture;
exports.getUnfinishedIceSculptureMonster = getUnfinishedIceSculptureMonster;
exports.UnfinishedIceSculpture = void 0;

var _Copier = __webpack_require__(2219);

var _property = __webpack_require__(1347);

var _lib = __webpack_require__(3311);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function have() {
  return (0, _lib.haveInCampground)((0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["packet of winter seeds"]))));
}

function haveUnfinishedIceSculpture() {
  return (0, _lib.have)((0, _templateString.$item)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["unfinished ice sculpture"]))));
}

function isUnfinishedIceSculptureUsed() {
  return (0, _property.get)("_iceSculptureUsed");
}

function couldUseUnfinishedIceSculpture() {
  return (0, _lib.have)((0, _templateString.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["unfinished ice sculpture"])))) && !(0, _lib.have)((0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["ice sculpture"]))));
}

function getUnfinishedIceSculptureMonster() {
  return (0, _property.get)("iceSculptureMonster");
}

var UnfinishedIceSculpture = new _Copier.Copier(() => couldUseUnfinishedIceSculpture(), null, () => couldUseUnfinishedIceSculpture(), () => getUnfinishedIceSculptureMonster());
exports.UnfinishedIceSculpture = UnfinishedIceSculpture;

/***/ }),

/***/ 7975:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.paintingMonster = paintingMonster;
exports.paintingFought = paintingFought;
exports.fightPainting = fightPainting;
exports.getDesk = getDesk;
exports.getCeiling = getCeiling;
exports.getNightstand = getNightstand;
exports.changeDesk = changeDesk;
exports.changeCeiling = changeCeiling;
exports.changeNightstand = changeNightstand;

__webpack_require__(7504);

__webpack_require__(778);

__webpack_require__(3239);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _property = __webpack_require__(1347);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function have() {
  return (0, _property.get)("chateauAvailable");
}

function paintingMonster() {
  return (0, _property.get)("chateauMonster");
}

function paintingFought() {
  return (0, _property.get)("_chateauMonsterFought");
}

function fightPainting() {
  (0, _kolmafia.visitUrl)("place.php?whichplace=chateau&action=chateau_painting", false);
  return (0, _kolmafia.runCombat)();
}

var desks = (0, _templateString.$items)(_templateObject || (_templateObject = _taggedTemplateLiteral(["fancy stationery set, Swiss piggy bank, continental juice bar"])));
var ceilings = (0, _templateString.$items)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["antler chandelier, ceiling fan, artificial skylight"])));
var nightstands = (0, _templateString.$items)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["foreign language tapes, bowl of potpourri, electric muscle stimulator"])));

function getDesk() {
  return desks.find(desk => Object.keys((0, _kolmafia.getChateau)()).includes(desk.name)) || (0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["none"])));
}

function getCeiling() {
  return ceilings.find(ceiling => Object.keys((0, _kolmafia.getChateau)()).includes(ceiling.name)) || (0, _templateString.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["none"])));
}

function getNightstand() {
  return nightstands.find(nightstand => Object.keys((0, _kolmafia.getChateau)()).includes(nightstand.name)) || (0, _templateString.$item)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["none"])));
}

function changeDesk(desk) {
  if (getDesk() === desk) return true;
  if (!desks.includes(desk)) return false;
  (0, _kolmafia.buy)(desk);
  return getDesk() === desk;
}

function changeCeiling(ceiling) {
  if (getCeiling() === ceiling) return true;
  if (!ceilings.includes(ceiling)) return false;
  (0, _kolmafia.buy)(ceiling);
  return getCeiling() === ceiling;
}

function changeNightstand(nightstand) {
  if (getNightstand() === nightstand) return true;
  if (!nightstands.includes(nightstand)) return false;
  (0, _kolmafia.buy)(nightstand);
  return getNightstand() === nightstand;
}

/***/ }),

/***/ 9574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setMayoMinder = setMayoMinder;
exports.Mayo = void 0;

__webpack_require__(778);

__webpack_require__(3239);

__webpack_require__(2231);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _logger = _interopRequireDefault(__webpack_require__(8685));

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var Mayo = {
  nex: (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Mayonex"]))),
  diol: (0, _templateString.$item)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Mayodiol"]))),
  zapine: (0, _templateString.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Mayozapine"]))),
  flex: (0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Mayoflex"])))
};
/**
 * Sets mayo minder to a particular mayo, and ensures you have enough of it.
 * @param mayo Mayo to use
 * @param quantity Quantity to ensure
 */

exports.Mayo = Mayo;

function setMayoMinder(mayo) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if ((0, _kolmafia.getWorkshed)() !== (0, _templateString.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["portable Mayo Clinic"])))) return false;

  if (!Object.values(Mayo).includes(mayo)) {
    _logger.default.error("Invalid mayo selected");

    return false;
  }

  if ((0, _property.get)("mayoInMouth") && (0, _property.get)("mayoInMouth") !== mayo.name) {
    _logger.default.error("Currently have incorrect mayo in mouth");

    return false;
  }

  (0, _kolmafia.retrieveItem)(quantity, mayo);
  if (!(0, _lib.have)((0, _templateString.$item)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Mayo Minder\u2122"]))))) (0, _kolmafia.buy)((0, _templateString.$item)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Mayo Minder\u2122"]))));

  if ((0, _property.get)("mayoMinderSetting") !== mayo.name) {
    (0, _property.withChoice)(1076, (0, _kolmafia.toInt)(mayo) - 8260, () => (0, _kolmafia.use)((0, _templateString.$item)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Mayo Minder\u2122"])))));
  }

  return (0, _property.get)("mayoMinderSetting") === mayo.name;
}

/***/ }),

/***/ 1577:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(5594);

__webpack_require__(5198);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.enhance = enhance;
exports.enquiry = enquiry;
exports.educate = educate;
exports.getSkills = getSkills;
exports.isCurrentSkill = isCurrentSkill;
exports.extrude = extrude;
exports.getChips = getChips;
exports.getDigitizeUses = getDigitizeUses;
exports.getDigitizeMonster = getDigitizeMonster;
exports.getDigitizeMonsterCount = getDigitizeMonsterCount;
exports.getMaximumDigitizeUses = getMaximumDigitizeUses;
exports.getDigitizeUsesRemaining = getDigitizeUsesRemaining;
exports.couldDigitize = couldDigitize;
exports.prepareDigitize = prepareDigitize;
exports.canDigitize = canDigitize;
exports.getDuplicateUses = getDuplicateUses;
exports.getEnhanceUses = getEnhanceUses;
exports.getPortscanUses = getPortscanUses;
exports.Digitize = exports.Items = exports.Skills = exports.RolloverBuffs = exports.Buffs = exports.item = void 0;

__webpack_require__(778);

__webpack_require__(3239);

__webpack_require__(2231);

__webpack_require__(2352);

__webpack_require__(7434);

__webpack_require__(8151);

__webpack_require__(893);

__webpack_require__(6467);

__webpack_require__(2238);

__webpack_require__(1714);

var _kolmafia = __webpack_require__(1664);

var _isEqual = _interopRequireDefault(__webpack_require__(7120));

var _Copier = __webpack_require__(2219);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var item = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Source terminal"])));
exports.item = item;

function have() {
  return (0, _lib.haveInCampground)(item);
}
/**
 * Buffs that can be acquired from Enhance
 *
 * - Items: +30% Item Drop
 * - Meat: +60% Meat Drop
 * - Init: +50% Initiative
 * - Critical: +10% chance of Critical Hit, +10% chance of Spell Critical Hit
 * - Damage: +5 Prismatic Damage
 * - Substats: +3 Stats Per Fight
 */


var Buffs = {
  Items: (0, _templateString.$effect)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["items.enh"]))),
  Meat: (0, _templateString.$effect)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["meat.enh"]))),
  Init: (0, _templateString.$effect)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["init.enh"]))),
  Critical: (0, _templateString.$effect)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["critical.enh"]))),
  Damage: (0, _templateString.$effect)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["damage.enh"]))),
  Substats: (0, _templateString.$effect)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["substats.enh"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see Buffs
 */

exports.Buffs = Buffs;

function enhance(buff) {
  if (!Object.values(Buffs).includes(buff)) {
    return false;
  }

  return (0, _kolmafia.cliExecute)("terminal enhance ".concat(buff.name));
}
/**
 * Rollover buffs that can be acquired from Enquiry
 */


var RolloverBuffs = {
  /** +5 Familiar Weight */
  Familiar: (0, _templateString.$effect)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["familiar.enq"]))),

  /** +25 ML */
  Monsters: (0, _templateString.$effect)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["monsters.enq"]))),

  /** +5 Prismatic Resistance */
  Protect: (0, _templateString.$effect)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["protect.enq"]))),

  /** +100% Muscle, +100% Mysticality, +100% Moxie */
  Stats: (0, _templateString.$effect)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["stats.enq"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see RolloverBuffs
 */

exports.RolloverBuffs = RolloverBuffs;

function enquiry(rolloverBuff) {
  if (!Object.values(RolloverBuffs).includes(rolloverBuff)) {
    return false;
  }

  return (0, _kolmafia.cliExecute)("terminal enquiry ".concat(rolloverBuff.name));
}
/**
 * Skills that can be acquired from Enhance
 */


var Skills = {
  /** Collect Source essence from enemies once per combat */
  Extract: (0, _templateString.$skill)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Extract"]))),

  /** Stagger and create a wandering monster 1-3 times per day */
  Digitize: (0, _templateString.$skill)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Digitize"]))),

  /** Stagger and deal 25% of enemy HP in damage once per combat */
  Compress: (0, _templateString.$skill)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Compress"]))),

  /** Double monster's HP, attack, defence, attacks per round and item drops once per fight and once per day (five in The Source) */
  Duplicate: (0, _templateString.$skill)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Duplicate"]))),

  /** Causes government agent/Source Agent wanderer next turn once per combat and three times per day */
  Portscan: (0, _templateString.$skill)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Portscan"]))),

  /** Increase Max MP by 100% and recover 1000 MP once per combat with a 30 turn cooldown */
  Turbo: (0, _templateString.$skill)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Turbo"])))
};
/**
 * Make a skill available.
 * The Source Terminal can give the player access to two skills at any time
 * @param skill Skill to learn
 * @see Skills
 */

exports.Skills = Skills;

function educate(skills) {
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if ((0, _isEqual.default)(skillsArray, getSkills())) return true;

  var _iterator = _createForOfIteratorHelper(skillsArray),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var skill = _step.value;
      if (!Object.values(Skills).includes(skill)) return false;
      (0, _kolmafia.cliExecute)("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
}
/**
 * Return the Skills currently available from Source Terminal
 */


function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(p => (0, _property.get)(p)).filter(s => s !== "").map(s => Skill.get(s.slice(0, -4)));
}

function isCurrentSkill(skills) {
  var currentSkills = getSkills();
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(skill => currentSkills.includes(skill));
}
/**
 * Items that can be generated by the Source Terminal
 */


var Items = new Map([[(0, _templateString.$item)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["browser cookie"]))), "food.ext"], [(0, _templateString.$item)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["hacked gibson"]))), "booze.ext"], [(0, _templateString.$item)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Source shades"]))), "goggles.ext"], [(0, _templateString.$item)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Source terminal GRAM chip"]))), "gram.ext"], [(0, _templateString.$item)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["Source terminal PRAM chip"]))), "pram.ext"], [(0, _templateString.$item)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["Source terminal SPAM chip"]))), "spam.ext"], [(0, _templateString.$item)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Source terminal CRAM chip"]))), "cram.ext"], [(0, _templateString.$item)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Source terminal DRAM chip"]))), "dram.ext"], [(0, _templateString.$item)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["Source terminal TRAM chip"]))), "tram.ext"], [(0, _templateString.$item)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["software bug"]))), "familiar.ext"]]);
/**
 * Collect an item from the Source Terminal (up to three times a day)
 * @param item Item to collect
 * @see Items
 */

exports.Items = Items;

function extrude(item) {
  var fileName = Items.get(item);
  if (!fileName) return false;
  return (0, _kolmafia.cliExecute)("terminal extrude ".concat(fileName));
}
/**
 * Return chips currently installed to player's Source Terminal
 */


function getChips() {
  return (0, _property.get)("sourceTerminalChips").split(",");
}
/**
 * Return number of times digitize was cast today
 */


function getDigitizeUses() {
  return (0, _property.get)("_sourceTerminalDigitizeUses");
}
/**
 * Return Monster that is currently digitized, else null
 */


function getDigitizeMonster() {
  return (0, _property.get)("_sourceTerminalDigitizeMonster");
}
/**
 * Return number of digitized monsters encountered since it was last cast
 */


function getDigitizeMonsterCount() {
  return (0, _property.get)("_sourceTerminalDigitizeMonsterCount");
}
/**
 * Return maximum number of digitizes player can cast
 */


function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}
/**
 * Returns the current day's number of remaining digitize uses
 */


function getDigitizeUsesRemaining() {
  return getMaximumDigitizeUses() - getDigitizeUses();
}
/**
 * Returns whether the player could theoretically cast Digitize
 */


function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}

function prepareDigitize() {
  if (!isCurrentSkill(Skills.Digitize)) {
    return educate(Skills.Digitize);
  }

  return true;
}
/**
 * Returns whether the player can cast Digitize immediately
 * This only considers whether the player has learned the skill
 * and has sufficient daily casts remaining, not whether they have sufficient MP
 */


function canDigitize() {
  return couldDigitize() && getSkills().includes(Skills.Digitize);
}

var Digitize = new _Copier.Copier(() => couldDigitize(), () => prepareDigitize(), () => canDigitize(), () => getDigitizeMonster());
/**
 * Return number of times duplicate was cast today
 */

exports.Digitize = Digitize;

function getDuplicateUses() {
  return (0, _property.get)("_sourceTerminalDuplicateUses");
}
/**
 * Return number of times enhance was cast today
 */


function getEnhanceUses() {
  return (0, _property.get)("_sourceTerminalEnhanceUses");
}
/**
 * Return number of times portscan was cast today
 */


function getPortscanUses() {
  return (0, _property.get)("_sourceTerminalPortscanUses");
}

/***/ }),

/***/ 7271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.fightsDone = fightsDone;
exports.fightPiece = fightPiece;
exports.pieces = exports.item = void 0;

__webpack_require__(778);

__webpack_require__(3239);

__webpack_require__(5899);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var item = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Witchess Set"])));
exports.item = item;

function have() {
  return (0, _lib.haveInCampground)(item);
}

function fightsDone() {
  return (0, _property.get)("_witchessFights");
}

var pieces = Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
exports.pieces = pieces;

function fightPiece(piece) {
  if (!pieces.includes(piece)) throw new Error("That is not a valid piece.");

  if (!(0, _kolmafia.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }

  if (!(0, _kolmafia.runChoice)(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }

  if (!(0, _kolmafia.visitUrl)("choice.php?option=1&pwd=".concat((0, _kolmafia.myHash)(), "&whichchoice=1182&piece=").concat((0, _kolmafia.toInt)(piece)), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }

  return (0, _kolmafia.runCombat)();
}

/***/ }),

/***/ 6255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.isUsed = isUsed;
exports.haveLovEnamorang = haveLovEnamorang;
exports.getLovEnamorangUses = getLovEnamorangUses;
exports.couldUseLoveEnamorang = couldUseLoveEnamorang;
exports.getLovEnamorangMonster = getLovEnamorangMonster;
exports.fightAll = fightAll;
exports.LovEnamorang = void 0;

var _kolmafia = __webpack_require__(1664);

var _Copier = __webpack_require__(2219);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function have() {
  return (0, _property.get)("loveTunnelAvailable");
}

function isUsed() {
  return (0, _property.get)("_loveTunnelUsed");
}

function haveLovEnamorang() {
  return (0, _lib.have)((0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["LOV Enamorang"]))));
}

function getLovEnamorangUses() {
  return (0, _property.get)("_enamorangs");
}

function couldUseLoveEnamorang() {
  return !(0, _lib.haveWandererCounter)(_lib.Wanderer.Enamorang) && getLovEnamorangUses() < 3 && haveLovEnamorang();
}

function getLovEnamorangMonster() {
  return (0, _property.get)("enamorangMonster");
}

var LovEnamorang = new _Copier.Copier(() => couldUseLoveEnamorang(), null, () => couldUseLoveEnamorang(), () => getLovEnamorangMonster());
exports.LovEnamorang = LovEnamorang;

function equipmentChoice(equipment) {
  switch (equipment) {
    case "LOV Eardigan":
      return 1;

    case "LOV Epaulettes":
      return 2;

    case "LOV Earring":
      return 3;
  }
}

function effectChoice(effect) {
  switch (effect) {
    case "Lovebotamy":
      return 1;

    case "Open Heart Surgery":
      return 2;

    case "Wandering Eye Surgery":
      return 3;
  }
}

function extraChoice(extra) {
  switch (extra) {
    case "LOV Enamorang":
      return 1;

    case "LOV Emotionizer":
      return 2;

    case "LOV Extraterrestrial Chocolate":
      return 3;

    case "LOV Echinacea Bouquet":
      return 4;

    case "LOV Elephant":
      return 5;

    case "toast":
      return 6;

    case null:
      return 7;
  }
}
/**
 * Fight all LOV monsters and get buffs/equipment.
 * @param equipment Equipment to take from LOV.
 * @param effect Effect to take from LOV.
 * @param extra Extra item to take from LOV.
 */


function fightAll(equipment, effect, extra) {
  (0, _property.set)("choiceAdventure1222", 1); // Entrance

  (0, _property.set)("choiceAdventure1223", 1); // Fight LOV Enforcer

  (0, _property.set)("choiceAdventure1224", equipmentChoice(equipment));
  (0, _property.set)("choiceAdventure1225", 1); // Fight LOV Engineer

  (0, _property.set)("choiceAdventure1226", effectChoice(effect));
  (0, _property.set)("choiceAdventure1227", 1); // Fight LOV Equivocator

  (0, _property.set)("choiceAdventure1228", extraChoice(extra));
  (0, _kolmafia.adv1)((0, _templateString.$location)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["The Tunnel of L.O.V.E."]))), 0, "");
}

/***/ }),

/***/ 2211:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.song = song;
exports.songChangesLeft = songChangesLeft;
exports.setSong = setSong;
exports.dropProgress = dropProgress;
exports.songBoomSongs = exports.item = void 0;

__webpack_require__(893);

__webpack_require__(6467);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var item = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["SongBoom\u2122 BoomBox"])));
exports.item = item;

function have() {
  return (0, _lib.have)(item);
}

var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
};
var songBoomSongs = new Set(Object.keys(keywords));
/**
 * Current song.
 */

exports.songBoomSongs = songBoomSongs;

function song() {
  var stored = (0, _property.get)("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
/**
 * Song changes left today.
 */


function songChangesLeft() {
  return (0, _property.get)("_boomBoxSongsLeft");
}
/**
 * Change the song.
 * @param newSong Song to change to.
 */


function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0) throw new Error("Out of song changes!");
    (0, _kolmafia.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none"));
    return true;
  } else {
    return false;
  }
}
/**
 * Progress to next song drop (e.g. gathered meat-clip).
 */


function dropProgress() {
  return (0, _property.get)("_boomBoxFights");
}

/***/ }),

/***/ 1144:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tryHead = tryHead;
exports.headBuffs = void 0;

__webpack_require__(778);

__webpack_require__(3239);

__webpack_require__(2238);

__webpack_require__(1714);

__webpack_require__(6467);

__webpack_require__(4594);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var headBuffs = [(0, _templateString.$effect)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Hot-Headed"]))), (0, _templateString.$effect)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Cold as Nice"]))), (0, _templateString.$effect)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["A Brush with Grossness"]))), (0, _templateString.$effect)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Does It Have a Skull In There??"]))), (0, _templateString.$effect)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Oiled, Slick"]))), (0, _templateString.$effect)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Lack of Body-Building"]))), (0, _templateString.$effect)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["We're All Made of Starfish"]))), (0, _templateString.$effect)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Pomp & Circumsands"]))), (0, _templateString.$effect)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Resting Beach Face"]))), (0, _templateString.$effect)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Do I Know You From Somewhere?"]))), (0, _templateString.$effect)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["You Learned Something Maybe!"])))];
exports.headBuffs = headBuffs;

function tryHead(effect) {
  if (!headBuffs.includes(effect)) return false;
  var headNumber = 1 + headBuffs.indexOf(effect);
  if ((0, _property.getString)("_beachHeadsUsed").split(",").includes(headNumber.toString())) return false;
  (0, _kolmafia.cliExecute)(effect.default);
  return (0, _lib.have)(effect);
}

/***/ }),

/***/ 5352:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2352);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.isQuestActive = isQuestActive;
exports.getPlatinum = getPlatinum;
exports.getPlatinumToday = getPlatinumToday;
exports.canPlatinum = canPlatinum;
exports.haveFullPlatinumBonus = haveFullPlatinumBonus;
exports.acceptPlatinum = acceptPlatinum;
exports.getGold = getGold;
exports.getGoldToday = getGoldToday;
exports.canGold = canGold;
exports.haveFullGoldBonus = haveFullGoldBonus;
exports.acceptGold = acceptGold;
exports.getBronze = getBronze;
exports.acceptBronze = acceptBronze;
exports.haveFullBronzeBonus = haveFullBronzeBonus;
exports.canAbandon = canAbandon;
exports.abandon = abandon;
exports.getLocation = getLocation;
exports.getTier = getTier;
exports.getBooze = getBooze;
exports.havePlatinumBooze = havePlatinumBooze;
exports.haveBooze = haveBooze;
exports.Cocktails = exports.item = void 0;

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var item = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Guzzlr tablet"])));
exports.item = item;

function have() {
  return (0, _lib.have)(item);
}

function useTabletWithChoice(option) {
  (0, _property.withChoice)(1412, option, () => (0, _kolmafia.use)(1, item));
}

function isQuestActive() {
  return (0, _property.get)("questGuzzlr") !== "unstarted";
}
/**
 * Platinum deliveries completed overall
 */


function getPlatinum() {
  return (0, _property.get)("guzzlrPlatinumDeliveries");
}
/**
 * Platinum deliveries completed today
 */


function getPlatinumToday() {
  return (0, _property.get)("_guzzlrPlatinumDeliveries");
}
/**
 * Can do a platinum delivery (haven't done one today)
 */


function canPlatinum() {
  return !isQuestActive() && getGold() >= 5 && getPlatinumToday() < 1;
}
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */


function haveFullPlatinumBonus() {
  return getPlatinum() >= 30;
}
/**
 * Accept platinum delivery
 */


function acceptPlatinum() {
  if (!canPlatinum()) return false;
  useTabletWithChoice(4);
  return true;
}
/**
 * Gold deliveries completed overall
 */


function getGold() {
  return (0, _property.get)("guzzlrGoldDeliveries");
}
/**
 * Gold deliveries completed today
 */


function getGoldToday() {
  return (0, _property.get)("_guzzlrGoldDeliveries");
}
/**
 * Can do a gold delivery (have done fewer than 3 today)
 */


function canGold() {
  return !isQuestActive() && getBronze() >= 5 && getGoldToday() < 3;
}
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */


function haveFullGoldBonus() {
  return getGold() >= 150;
}
/**
 * Accept gold delivery
 */


function acceptGold() {
  if (!canGold()) return false;
  useTabletWithChoice(3);
  return true;
}
/**
 * Bronze deliveries completed overall
 */


function getBronze() {
  return (0, _property.get)("guzzlrBronzeDeliveries");
}
/**
 * Accept bronze delivery
 */


function acceptBronze() {
  if (isQuestActive()) return false;
  useTabletWithChoice(2);
  return true;
}
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */


function haveFullBronzeBonus() {
  return getBronze() >= 196;
}
/**
 * Can abandon the current Guzzlr quest
 */


function canAbandon() {
  return isQuestActive() && !(0, _property.get)("_guzzlrQuestAbandoned");
}
/**
 * Abandon Guzzlr quest
 */


function abandon() {
  if (!canAbandon()) return false;
  (0, _kolmafia.visitUrl)("inventory.php?tap=guzzlr", false);
  (0, _kolmafia.runChoice)(1);
  (0, _kolmafia.runChoice)(5);
  return true;
}
/**
 * Get current Guzzlr quest location
 */


function getLocation() {
  return (0, _property.get)("guzzlrQuestLocation");
}
/**
 * Get current Guzzlr quest tier
 */


function getTier() {
  var tier = (0, _property.get)("guzzlrQuestTier");
  return tier === "" ? null : tier;
}
/**
 * Get current Guzzlr quest booze
 */


function getBooze() {
  var booze = (0, _property.get)("guzzlrQuestBooze");
  if (booze === "") return null;
  return Item.get(booze);
}
/**
 * List of the platinum cocktails
 */


var Cocktails = (0, _templateString.$items)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Buttery Boy, Steamboat, Ghiaccio Colada, Nog-on-the-Cob, Sourfinger"])));
/**
 * Returns true if the user has a platinum cocktail in their inventory
 */

exports.Cocktails = Cocktails;

function havePlatinumBooze() {
  return Cocktails.some(cock => (0, _lib.have)(cock));
}
/**
 * Returns true if the user has the cocktail that they need for their current quest
 *
 * If they have no quest, returns false
 */


function haveBooze() {
  var booze = getBooze();

  switch (booze) {
    case null:
      return false;

    case (0, _templateString.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Guzzlr cocktail set"]))):
      return havePlatinumBooze();

    default:
      return (0, _lib.have)(booze);
  }
}

/***/ }),

/***/ 1895:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(893);

__webpack_require__(6467);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Bandersnatch: true,
  ChateauMantegna: true,
  ObtuseAngel: true,
  RainDoh: true,
  SongBoom: true,
  SourceTerminal: true,
  SpookyPutty: true,
  TunnelOfLove: true,
  WinterGarden: true,
  Witchess: true,
  Guzzlr: true,
  BeachComb: true,
  FloristFriar: true,
  MayoClinic: true
};
exports.MayoClinic = exports.FloristFriar = exports.BeachComb = exports.Guzzlr = exports.Witchess = exports.WinterGarden = exports.TunnelOfLove = exports.SpookyPutty = exports.SourceTerminal = exports.SongBoom = exports.RainDoh = exports.ObtuseAngel = exports.ChateauMantegna = exports.Bandersnatch = void 0;

var _Bandersnatch = _interopRequireWildcard(__webpack_require__(5661));

exports.Bandersnatch = _Bandersnatch;

var _ChateauMantegna = _interopRequireWildcard(__webpack_require__(7975));

exports.ChateauMantegna = _ChateauMantegna;

var _ObtuseAngel = _interopRequireWildcard(__webpack_require__(3758));

exports.ObtuseAngel = _ObtuseAngel;

var _RainDoh = _interopRequireWildcard(__webpack_require__(4945));

exports.RainDoh = _RainDoh;

var _SongBoom = _interopRequireWildcard(__webpack_require__(2211));

exports.SongBoom = _SongBoom;

var _SourceTerminal = _interopRequireWildcard(__webpack_require__(1577));

exports.SourceTerminal = _SourceTerminal;

var _SpookyPutty = _interopRequireWildcard(__webpack_require__(7235));

exports.SpookyPutty = _SpookyPutty;

var _TunnelOfLove = _interopRequireWildcard(__webpack_require__(6255));

exports.TunnelOfLove = _TunnelOfLove;

var _WinterGarden = _interopRequireWildcard(__webpack_require__(5915));

exports.WinterGarden = _WinterGarden;

var _Witchess = _interopRequireWildcard(__webpack_require__(7271));

exports.Witchess = _Witchess;

var _Guzzlr = _interopRequireWildcard(__webpack_require__(5352));

exports.Guzzlr = _Guzzlr;

var _BeachComb = _interopRequireWildcard(__webpack_require__(1144));

exports.BeachComb = _BeachComb;

var _FloristFriar = _interopRequireWildcard(__webpack_require__(1576));

exports.FloristFriar = _FloristFriar;

var _MayoClinic = _interopRequireWildcard(__webpack_require__(9574));

exports.MayoClinic = _MayoClinic;

var _puttyLikes = __webpack_require__(5231);

Object.keys(_puttyLikes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _puttyLikes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _puttyLikes[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

/***/ }),

/***/ 5231:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTotalPuttyLikeCopiesMade = getTotalPuttyLikeCopiesMade;
exports.couldUseRainDohBlackBox = couldUseRainDohBlackBox;
exports.couldUseSpookyPuttySheet = couldUseSpookyPuttySheet;
exports.SpookyPuttySheet = exports.RainDohBlackBox = void 0;

var _Copier = __webpack_require__(2219);

var _SpookyPutty = __webpack_require__(7235);

var _RainDoh = __webpack_require__(4945);

function getTotalPuttyLikeCopiesMade() {
  return (0, _SpookyPutty.getSpookyPuttySheetCopiesMade)() + (0, _RainDoh.getRainDohBlackBoxCopiesMade)();
}

function couldUseRainDohBlackBox() {
  return (0, _RainDoh.have)() && (0, _RainDoh.getRainDohBlackBoxCopiesMade)() < 5 && getTotalPuttyLikeCopiesMade() < 6;
}

var RainDohBlackBox = new _Copier.Copier(() => couldUseRainDohBlackBox(), null, () => couldUseRainDohBlackBox(), () => (0, _RainDoh.getRainDohBlackBoxMonster)(), () => (0, _RainDoh.useRainDohBlackBox)());
exports.RainDohBlackBox = RainDohBlackBox;

function couldUseSpookyPuttySheet() {
  return (0, _SpookyPutty.have)() && (0, _SpookyPutty.getSpookyPuttySheetCopiesMade)() < 5 && getTotalPuttyLikeCopiesMade() < 6;
}

var SpookyPuttySheet = new _Copier.Copier(() => couldUseSpookyPuttySheet(), () => (0, _SpookyPutty.prepareSpookyPuttySheet)(), () => couldUseSpookyPuttySheet(), () => (0, _SpookyPutty.getSpookyPuttySheetMonster)(), () => (0, _SpookyPutty.useSpookyPuttySheet)());
exports.SpookyPuttySheet = SpookyPuttySheet;

/***/ }),

/***/ 1157:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(6467);

__webpack_require__(4594);

__webpack_require__(1235);

__webpack_require__(893);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sinceKolmafiaRevision = sinceKolmafiaRevision;
exports.sinceKolmafiaVersion = sinceKolmafiaVersion;
exports.KolmafiaVersionError = void 0;

__webpack_require__(5899);

__webpack_require__(2238);

var _kolmafia = __webpack_require__(1664);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/**
 * Represents an exception thrown when the current KoLmafia version does not
 * match an expected condition.
 */


var KolmafiaVersionError = /*#__PURE__*/function (_Error) {
  _inherits(KolmafiaVersionError, _Error);

  var _super = _createSuper(KolmafiaVersionError);

  function KolmafiaVersionError(message) {
    var _this;

    _classCallCheck(this, KolmafiaVersionError);

    _this = _super.call(this, message); // Explicitly set the prototype, so that 'instanceof' still works in Node.js
    // even when the class is transpiled down to ES5
    // See: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    // Note that this code isn't needed for Rhino.

    Object.setPrototypeOf(_assertThisInitialized(_this), KolmafiaVersionError.prototype);
    return _this;
  }

  return KolmafiaVersionError;
}( /*#__PURE__*/_wrapNativeSuper(Error)); // Manually set class name, so that the stack trace shows proper name in Rhino


exports.KolmafiaVersionError = KolmafiaVersionError;
KolmafiaVersionError.prototype.name = "KolmafiaVersionError";
/**
 * Returns the currently executing script name, suitable for embedding in an
 * error message.
 * @returns Path of the main script wrapped in single-quotes, or `"This script"`
 *    if the path cannot be determined
 */

function getScriptName() {
  var _require$main; // In Rhino, the current script name is available in require.main.id


  var scriptName = (_require$main = __webpack_require__.c[__webpack_require__.s]) === null || _require$main === void 0 ? void 0 : _require$main.id;
  return scriptName ? "'".concat(scriptName, "'") : "This script";
}
/**
 * If KoLmafia's revision number is less than `revision`, throws an exception.
 * Otherwise, does nothing.
 *
 * This behaves like the `since rXXX;` statement in ASH.
 * @param revision Revision number
 * @throws {KolmafiaVersionError}
 *    If KoLmafia's revision number is less than `revision`.
 * @throws {TypeError} If `revision` is not an integer
 *
 * @example
 * ```ts
 * // Throws if KoLmafia revision is less than r20500
 * sinceKolmafiaRevision(20500);
 * ```
 */


function sinceKolmafiaRevision(revision) {
  if (!Number.isInteger(revision)) {
    throw new TypeError("Invalid revision number ".concat(revision, " (must be an integer)"));
  } // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()


  if ((0, _kolmafia.getRevision)() < revision) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires revision r").concat(revision, " of kolmafia or higher (current: ").concat((0, _kolmafia.getRevision)(), "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
  }
}
/**
 * If KoLmafia's version is less than `majorVersion.minorVersion`, throws an
 * exception.
 * Otherwise, does nothing.
 *
 * This behaves like the `since X.Y;` statement in ASH.
 * @param majorVersion Major version number
 * @param minorVersion Minor version number
 * @throws {KolmafiaVersionError}
 *    If KoLmafia's major version is less than `majorVersion`, or if the major
 *    versions are equal but the minor version is less than `minorVersion`
 * @throws {TypeError}
 *    If either `majorVersion` or `minorVersion` are not integers
 *
 * @example
 * ```ts
 * // Throws if KoLmafia version is less than 20.7
 * sinceKolmafiaVersion(20, 7);
 * ```
 */


function sinceKolmafiaVersion(majorVersion, minorVersion) {
  if (!Number.isInteger(majorVersion)) {
    throw new TypeError("Invalid major version number ".concat(majorVersion, " (must be an integer)"));
  }

  if (!Number.isInteger(minorVersion)) {
    throw new TypeError("Invalid minor version number ".concat(minorVersion, " (must be an integer)"));
  }

  var versionStr = (0, _kolmafia.getVersion)();
  var versionStrMatch = /v(\d+)\.(\d+)/.exec(versionStr);

  if (!versionStrMatch) {
    // This is not something the user should handle
    throw new Error("Unexpected KoLmafia version string: \"".concat(versionStr, "\". You may need to update the script."));
  }

  var currentMajorVersion = Number(versionStrMatch[1]);
  var currentMinorVersion = Number(versionStrMatch[2]); // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()

  if (currentMajorVersion < majorVersion || currentMajorVersion === majorVersion && currentMinorVersion < minorVersion) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires version ").concat(majorVersion, ".").concat(minorVersion, " of kolmafia or higher (current: ").concat(currentMajorVersion, ".").concat(currentMinorVersion, "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
  }
}

/***/ }),

/***/ 678:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.$thralls = exports.$thrall = exports.$stats = exports.$stat = exports.$slots = exports.$slot = exports.$skills = exports.$skill = exports.$servants = exports.$servant = exports.$phyla = exports.$phylum = exports.$monsters = exports.$monster = exports.$locations = exports.$location = exports.$items = exports.$item = exports.$familiars = exports.$familiar = exports.$elements = exports.$element = exports.$effects = exports.$effect = exports.$coinmasters = exports.$coinmaster = exports.$classes = exports.$class = exports.$bounties = exports.$bounty = void 0;

__webpack_require__(5899);

__webpack_require__(2238);

__webpack_require__(1714);

var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }

  return literals.reduce((acc, literal, i) => acc + literal + (placeholders[i] || ""), "");
};

var createSingleConstant = Type => function (literals) {
  for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    placeholders[_key2 - 1] = arguments[_key2];
  }

  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
  return Type.get(input);
};

var createPluralConstant = Type => function (literals) {
  for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    placeholders[_key3 - 1] = arguments[_key3];
  }

  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));

  if (input === "") {
    return Type.all();
  }

  return Type.get(input.split(/\s*,\s*/));
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */


var $bounty = createSingleConstant(Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$bounty = $bounty;
var $bounties = createPluralConstant(Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */

exports.$bounties = $bounties;
var $class = createSingleConstant(Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$class = $class;
var $classes = createPluralConstant(Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */

exports.$classes = $classes;
var $coinmaster = createSingleConstant(Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$coinmaster = $coinmaster;
var $coinmasters = createPluralConstant(Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */

exports.$coinmasters = $coinmasters;
var $effect = createSingleConstant(Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$effect = $effect;
var $effects = createPluralConstant(Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */

exports.$effects = $effects;
var $element = createSingleConstant(Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$element = $element;
var $elements = createPluralConstant(Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */

exports.$elements = $elements;
var $familiar = createSingleConstant(Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$familiar = $familiar;
var $familiars = createPluralConstant(Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */

exports.$familiars = $familiars;
var $item = createSingleConstant(Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$item = $item;
var $items = createPluralConstant(Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */

exports.$items = $items;
var $location = createSingleConstant(Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$location = $location;
var $locations = createPluralConstant(Location);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */

exports.$locations = $locations;
var $monster = createSingleConstant(Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$monster = $monster;
var $monsters = createPluralConstant(Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */

exports.$monsters = $monsters;
var $phylum = createSingleConstant(Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$phylum = $phylum;
var $phyla = createPluralConstant(Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */

exports.$phyla = $phyla;
var $servant = createSingleConstant(Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$servant = $servant;
var $servants = createPluralConstant(Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */

exports.$servants = $servants;
var $skill = createSingleConstant(Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$skill = $skill;
var $skills = createPluralConstant(Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */

exports.$skills = $skills;
var $slot = createSingleConstant(Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$slot = $slot;
var $slots = createPluralConstant(Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */

exports.$slots = $slots;
var $stat = createSingleConstant(Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$stat = $stat;
var $stats = createPluralConstant(Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */

exports.$stats = $stats;
var $thrall = createSingleConstant(Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$thrall = $thrall;
var $thralls = createPluralConstant(Thrall);
exports.$thralls = $thralls;

/***/ }),

/***/ 8588:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(5594);

__webpack_require__(5198);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.notNull = notNull;
exports.parseNumber = parseNumber;
exports.clamp = clamp;
exports.chunk = chunk;
exports.arrayToCountedMap = arrayToCountedMap;
exports.countedMapToArray = countedMapToArray;
exports.countedMapToString = countedMapToString;
exports.sum = sum;
exports.sumNumbers = sumNumbers;
exports.arrayContains = arrayContains;

__webpack_require__(7807);

__webpack_require__(2238);

__webpack_require__(5188);

__webpack_require__(2352);

__webpack_require__(893);

__webpack_require__(6467);

__webpack_require__(8009);

__webpack_require__(3236);

__webpack_require__(5938);

__webpack_require__(7434);

__webpack_require__(5899);

__webpack_require__(778);

__webpack_require__(3239);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function notNull(value) {
  return value !== null;
}

function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 */


function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Split an {@param array} into {@param chunkSize} sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 */


function chunk(array, chunkSize) {
  var result = [];

  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}

function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}

function countedMapToArray(map) {
  return _toConsumableArray(map).flatMap(_ref => {
    var _ref2 = _slicedToArray(_ref, 2),
        item = _ref2[0],
        quantity = _ref2[1];

    return Array(quantity).fill(item);
  });
}

function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
        item = _ref4[0],
        quantity = _ref4[1];

    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
/**
 * Sum an array of numbers.
 * @param addends Addends to sum.
 * @param mappingFunction function to turn elements into numbers
 */


function sum(addends, mappingFunction) {
  return addends.reduce((subtotal, element) => subtotal + mappingFunction(element), 0);
}

function sumNumbers(addends) {
  return sum(addends, x => x);
}
/**
 * Checks if a given item is in a readonly array, acting as a typeguard.
 * @param item Needle
 * @param array Readonly array haystack
 * @returns Whether the item is in the array, and narrows the type of the item.
 */


function arrayContains(item, array) {
  return array.includes(item);
}

/***/ }),

/***/ 1361:
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),

/***/ 2955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  }

  return it;
};

/***/ }),

/***/ 7331:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var create = __webpack_require__(5131);

var definePropertyModule = __webpack_require__(811);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
} // add a key to Array.prototype[@@unscopables]


module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ 7368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var charAt = __webpack_require__(5249).charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex


module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

/***/ }),

/***/ 3739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

/***/ }),

/***/ 2505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toObject = __webpack_require__(6068);

var toAbsoluteIndex = __webpack_require__(8786);

var toLength = __webpack_require__(588); // `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill


module.exports = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) {
    O[index++] = value;
  }

  return O;
};

/***/ }),

/***/ 477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(6211);

var toLength = __webpack_require__(588);

var toAbsoluteIndex = __webpack_require__(8786); // `Array.prototype.{ indexOf, includes }` methods implementation


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

/***/ 5969:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(1871);

var IndexedObject = __webpack_require__(8483);

var toObject = __webpack_require__(6068);

var toLength = __webpack_require__(588);

var arraySpeciesCreate = __webpack_require__(586);

var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation

var createMethod = function createMethod(TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);

        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return value;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              push.call(target, value);
            // filter
          } else switch (TYPE) {
            case 4:
              return false;
            // every

            case 7:
              push.call(target, value);
            // filterOut
          }
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};

/***/ }),

/***/ 1511:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

var wellKnownSymbol = __webpack_require__(7457);

var V8_VERSION = __webpack_require__(2912);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

/***/ }),

/***/ 4419:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(8901);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

/***/ }),

/***/ 7488:
/***/ ((module) => {

// TODO: use something more complex like timsort?
var floor = Math.floor;

var mergeSort = function mergeSort(array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(mergeSort(array.slice(0, middle), comparefn), mergeSort(array.slice(middle), comparefn), comparefn);
};

var insertionSort = function insertionSort(array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];

    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }

    if (j !== i++) array[j] = element;
  }

  return array;
};

var merge = function merge(left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;
  var result = [];

  while (lindex < llength || rindex < rlength) {
    if (lindex < llength && rindex < rlength) {
      result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
    } else {
      result.push(lindex < llength ? left[lindex++] : right[rindex++]);
    }
  }

  return result;
};

module.exports = mergeSort;

/***/ }),

/***/ 586:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949);

var isArray = __webpack_require__(1746);

var wellKnownSymbol = __webpack_require__(7457);

var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

module.exports = function (originalArray, length) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

/***/ }),

/***/ 6202:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ 5830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(4657);

var classofRaw = __webpack_require__(6202);

var wellKnownSymbol = __webpack_require__(7457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

/***/ }),

/***/ 3780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(2551);

var ownKeys = __webpack_require__(6813);

var getOwnPropertyDescriptorModule = __webpack_require__(9609);

var definePropertyModule = __webpack_require__(811);

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

/***/ 1925:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;

  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) {
      /* empty */
    }
  }

  return false;
};

/***/ }),

/***/ 3473:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

module.exports = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

  return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),

/***/ 5107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var IteratorPrototype = __webpack_require__(9297).IteratorPrototype;

var create = __webpack_require__(5131);

var createPropertyDescriptor = __webpack_require__(3300);

var setToStringTag = __webpack_require__(4653);

var Iterators = __webpack_require__(9759);

var returnThis = function returnThis() {
  return this;
};

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

/***/ }),

/***/ 4059:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var definePropertyModule = __webpack_require__(811);

var createPropertyDescriptor = __webpack_require__(3300);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ 3300:
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

/***/ 812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPrimitive = __webpack_require__(4375);

var definePropertyModule = __webpack_require__(811);

var createPropertyDescriptor = __webpack_require__(3300);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

/***/ }),

/***/ 5500:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var createIteratorConstructor = __webpack_require__(5107);

var getPrototypeOf = __webpack_require__(8450);

var setPrototypeOf = __webpack_require__(1686);

var setToStringTag = __webpack_require__(4653);

var createNonEnumerableProperty = __webpack_require__(4059);

var redefine = __webpack_require__(6486);

var wellKnownSymbol = __webpack_require__(7457);

var IS_PURE = __webpack_require__(6719);

var Iterators = __webpack_require__(9759);

var IteratorsCore = __webpack_require__(9297);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function getIterationMethod(KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      } // Set @@toStringTag to native iterators


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;

    defaultIterator = function values() {
      return nativeIterator.call(this);
    };
  } // define iterator


  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }

  Iterators[NAME] = defaultIterator; // export additional methods

  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  }

  return methods;
};

/***/ }),

/***/ 6277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(9039);

var has = __webpack_require__(2551);

var wrappedWellKnownSymbolModule = __webpack_require__(2355);

var defineProperty = __webpack_require__(811).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};

/***/ }),

/***/ 2171:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901); // Detect IE8's incomplete defineProperty implementation


module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] != 7;
});

/***/ }),

/***/ 4603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var isObject = __webpack_require__(2949);

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ 7123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(5096);

var firefox = userAgent.match(/firefox\/(\d+)/i);
module.exports = !!firefox && +firefox[1];

/***/ }),

/***/ 5073:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var UA = __webpack_require__(5096);

module.exports = /MSIE|Trident/.test(UA);

/***/ }),

/***/ 5096:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

module.exports = getBuiltIn('navigator', 'userAgent') || '';

/***/ }),

/***/ 2912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var userAgent = __webpack_require__(5096);

var process = global.process;
var versions = process && process.versions;
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

/***/ 2925:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(5096);

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
module.exports = !!webkit && +webkit[1];

/***/ }),

/***/ 393:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ 9004:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var getOwnPropertyDescriptor = __webpack_require__(9609).f;

var createNonEnumerableProperty = __webpack_require__(4059);

var redefine = __webpack_require__(6486);

var setGlobal = __webpack_require__(3351);

var copyConstructorProperties = __webpack_require__(3780);

var isForced = __webpack_require__(2612);
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

/***/ 8901:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ 9783:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
 // TODO: Remove from `core-js@4` since it's moved to entry points

__webpack_require__(2238);

var redefine = __webpack_require__(6486);

var regexpExec = __webpack_require__(1440);

var fails = __webpack_require__(8901);

var wellKnownSymbol = __webpack_require__(7457);

var createNonEnumerableProperty = __webpack_require__(4059);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;

      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

/***/ }),

/***/ 8529:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isArray = __webpack_require__(1746);

var toLength = __webpack_require__(588);

var bind = __webpack_require__(1871); // `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray


var flattenIntoArray = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }

    sourceIndex++;
  }

  return targetIndex;
};

module.exports = flattenIntoArray;

/***/ }),

/***/ 1871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(1361); // optional / simple context binding


module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 1651:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var aFunction = __webpack_require__(1361);

var isObject = __webpack_require__(2949);

var slice = [].slice;
var factories = {};

var construct = function construct(C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) {
      list[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only


    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  }

  return factories[argsLength](C, args);
}; // `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind


module.exports = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);

  var boundFunction = function bound() {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };

  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};

/***/ }),

/***/ 1575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(9039);

var global = __webpack_require__(2328);

var aFunction = function aFunction(variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),

/***/ 1072:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(5830);

var Iterators = __webpack_require__(9759);

var wellKnownSymbol = __webpack_require__(7457);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ 6894:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(6068);

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution

module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }

  return replace.call(replacement, symbols, function (match, ch) {
    var capture;

    switch (ch.charAt(0)) {
      case '$':
        return '$';

      case '&':
        return matched;

      case '`':
        return str.slice(0, position);

      case "'":
        return str.slice(tailPos);

      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;

      default:
        // \d\d?
        var n = +ch;
        if (n === 0) return match;

        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }

        capture = captures[n - 1];
    }

    return capture === undefined ? '' : capture;
  });
};

/***/ }),

/***/ 2328:
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

/***/ 2551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(6068);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};

/***/ }),

/***/ 1055:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 4861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

module.exports = getBuiltIn('document', 'documentElement');

/***/ }),

/***/ 2674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var fails = __webpack_require__(8901);

var createElement = __webpack_require__(4603); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ 8483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

var classof = __webpack_require__(6202);

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),

/***/ 6506:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949);

var setPrototypeOf = __webpack_require__(1686); // makes subclassing work correct for wrapped built-ins


module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if ( // it can work only with native `setPrototypeOf`
  setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

/***/ }),

/***/ 7599:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(5153);

var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

/***/ }),

/***/ 4081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(1770);

var global = __webpack_require__(2328);

var isObject = __webpack_require__(2949);

var createNonEnumerableProperty = __webpack_require__(4059);

var objectHas = __webpack_require__(2551);

var shared = __webpack_require__(5153);

var sharedKey = __webpack_require__(1449);

var hiddenKeys = __webpack_require__(1055);

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

/***/ 8110:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var Iterators = __webpack_require__(9759);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype; // check on default Array iterator

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ 1746:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(6202); // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe


module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

/***/ }),

/***/ 2612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

var replacement = /#|\.prototype\./;

var isForced = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),

/***/ 2949:
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ 6719:
/***/ ((module) => {

module.exports = false;

/***/ }),

/***/ 7033:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949);

var classof = __webpack_require__(6202);

var wellKnownSymbol = __webpack_require__(7457);

var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

/***/ }),

/***/ 6449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3739);

var isArrayIteratorMethod = __webpack_require__(8110);

var toLength = __webpack_require__(588);

var bind = __webpack_require__(1871);

var getIteratorMethod = __webpack_require__(1072);

var iteratorClose = __webpack_require__(6535);

var Result = function Result(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function stop(condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function callFn(value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }

    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      }

      return new Result(false);
    }

    iterator = iterFn.call(iterable);
  }

  next = iterator.next;

  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }

    if (typeof result == 'object' && result && result instanceof Result) return result;
  }

  return new Result(false);
};

/***/ }),

/***/ 6535:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3739);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];

  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

/***/ }),

/***/ 9297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(8901);

var getPrototypeOf = __webpack_require__(8450);

var createNonEnumerableProperty = __webpack_require__(4059);

var has = __webpack_require__(2551);

var wellKnownSymbol = __webpack_require__(7457);

var IS_PURE = __webpack_require__(6719);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function returnThis() {
  return this;
}; // `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object


var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {}; // FF44- legacy iterators case

  return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}; // `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

/***/ }),

/***/ 9759:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 4938:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(2912);

var fails = __webpack_require__(8901); // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),

/***/ 1770:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var inspectSource = __webpack_require__(7599);

var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

/***/ }),

/***/ 5418:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isRegExp = __webpack_require__(7033);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  }

  return it;
};

/***/ }),

/***/ 7536:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var trim = __webpack_require__(5518).trim;

var whitespaces = __webpack_require__(4926);

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22; // `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix

module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
} : $parseInt;

/***/ }),

/***/ 6475:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(2171);

var fails = __webpack_require__(8901);

var objectKeys = __webpack_require__(669);

var getOwnPropertySymbolsModule = __webpack_require__(5863);

var propertyIsEnumerableModule = __webpack_require__(7395);

var toObject = __webpack_require__(6068);

var IndexedObject = __webpack_require__(8483); // eslint-disable-next-line es/no-object-assign -- safe


var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

var defineProperty = Object.defineProperty; // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign

module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({
    b: 1
  }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function get() {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  var A = {};
  var B = {}; // eslint-disable-next-line es/no-symbol -- safe

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;

  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

/***/ }),

/***/ 5131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3739);

var defineProperties = __webpack_require__(422);

var enumBugKeys = __webpack_require__(393);

var hiddenKeys = __webpack_require__(1055);

var html = __webpack_require__(4861);

var documentCreateElement = __webpack_require__(4603);

var sharedKey = __webpack_require__(1449);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function EmptyConstructor() {
  /* empty */
};

var scriptTag = function scriptTag(content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var _NullProtoObject = function NullProtoObject() {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  _NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;

  while (length--) {
    delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  }

  return _NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

/***/ }),

/***/ 422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var definePropertyModule = __webpack_require__(811);

var anObject = __webpack_require__(3739);

var objectKeys = __webpack_require__(669); // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe


module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) {
    definePropertyModule.f(O, key = keys[index++], Properties[key]);
  }

  return O;
};

/***/ }),

/***/ 811:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var IE8_DOM_DEFINE = __webpack_require__(2674);

var anObject = __webpack_require__(3739);

var toPrimitive = __webpack_require__(4375); // eslint-disable-next-line es/no-object-defineproperty -- safe


var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
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

/***/ 9609:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var propertyIsEnumerableModule = __webpack_require__(7395);

var createPropertyDescriptor = __webpack_require__(3300);

var toIndexedObject = __webpack_require__(6211);

var toPrimitive = __webpack_require__(4375);

var has = __webpack_require__(2551);

var IE8_DOM_DEFINE = __webpack_require__(2674); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),

/***/ 4142:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __webpack_require__(6211);

var $getOwnPropertyNames = __webpack_require__(5166).f;

var toString = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
};

/***/ }),

/***/ 5166:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(4085);

var enumBugKeys = __webpack_require__(393);

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ 5863:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ 8450:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(2551);

var toObject = __webpack_require__(6068);

var sharedKey = __webpack_require__(1449);

var CORRECT_PROTOTYPE_GETTER = __webpack_require__(3473);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe

module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectPrototype : null;
};

/***/ }),

/***/ 4085:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(2551);

var toIndexedObject = __webpack_require__(6211);

var indexOf = __webpack_require__(477).indexOf;

var hiddenKeys = __webpack_require__(1055);

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

/***/ 669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(4085);

var enumBugKeys = __webpack_require__(393); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ 7395:
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

/***/ 1686:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(3739);

var aPossiblePrototype = __webpack_require__(2955); // `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe


module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

/***/ }),

/***/ 8256:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var objectKeys = __webpack_require__(669);

var toIndexedObject = __webpack_require__(6211);

var propertyIsEnumerable = __webpack_require__(7395).f; // `Object.{ entries, values }` methods implementation


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

/***/ 6946:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var TO_STRING_TAG_SUPPORT = __webpack_require__(4657);

var classof = __webpack_require__(5830); // `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring


module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

/***/ }),

/***/ 6813:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

var getOwnPropertyNamesModule = __webpack_require__(5166);

var getOwnPropertySymbolsModule = __webpack_require__(5863);

var anObject = __webpack_require__(3739); // all object keys, includes non-enumerable and symbols


module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ 9039:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

module.exports = global;

/***/ }),

/***/ 6486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var createNonEnumerableProperty = __webpack_require__(4059);

var has = __webpack_require__(2551);

var setGlobal = __webpack_require__(3351);

var inspectSource = __webpack_require__(7599);

var InternalStateModule = __webpack_require__(4081);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;

  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
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
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

/***/ }),

/***/ 2114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(6202);

var regexpExec = __webpack_require__(1440); // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec


module.exports = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

/***/ }),

/***/ 1440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */

var regexpFlags = __webpack_require__(9175);

var stickyHelpers = __webpack_require__(1283);

var shared = __webpack_require__(8849);

var create = __webpack_require__(5131);

var getInternalState = __webpack_require__(4081).get;

var UNSUPPORTED_DOT_ALL = __webpack_require__(6639);

var UNSUPPORTED_NCG = __webpack_require__(6927);

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(str) {
    var re = this;
    var state = getInternalState(re);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');

      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);

      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;

/***/ }),

/***/ 9175:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(3739); // `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),

/***/ 1283:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var fails = __webpack_require__(8901); // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,


var RE = function RE(s, f) {
  return RegExp(s, f);
};

exports.UNSUPPORTED_Y = fails(function () {
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});
exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

/***/ }),

/***/ 6639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var re = RegExp('.', (typeof '').charAt(0));
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

/***/ }),

/***/ 6927:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
  var re = RegExp('(?<a>b)', (typeof '').charAt(5));
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

/***/ }),

/***/ 4682:
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ 3351:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var createNonEnumerableProperty = __webpack_require__(4059);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ 4471:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getBuiltIn = __webpack_require__(1575);

var definePropertyModule = __webpack_require__(811);

var wellKnownSymbol = __webpack_require__(7457);

var DESCRIPTORS = __webpack_require__(2171);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function get() {
        return this;
      }
    });
  }
};

/***/ }),

/***/ 4653:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(811).f;

var has = __webpack_require__(2551);

var wellKnownSymbol = __webpack_require__(7457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, {
      configurable: true,
      value: TAG
    });
  }
};

/***/ }),

/***/ 1449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(8849);

var uid = __webpack_require__(858);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ 5153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var setGlobal = __webpack_require__(3351);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

/***/ }),

/***/ 8849:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(6719);

var store = __webpack_require__(5153);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ 9078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3739);

var aFunction = __webpack_require__(1361);

var wellKnownSymbol = __webpack_require__(7457);

var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

/***/ }),

/***/ 5249:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(4770);

var requireObjectCoercible = __webpack_require__(4682); // `String.prototype.{ codePointAt, at }` methods implementation


var createMethod = function createMethod(CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

/***/ }),

/***/ 5518:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(4682);

var whitespaces = __webpack_require__(4926);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

var createMethod = function createMethod(TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

/***/ }),

/***/ 8786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(4770);

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ 6211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8483);

var requireObjectCoercible = __webpack_require__(4682);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ 4770:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),

/***/ 588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(4770);

var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ 6068:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(4682); // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ 4375:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ 4657:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),

/***/ 858:
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),

/***/ 4719:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4938);

module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),

/***/ 2355:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

exports.f = wellKnownSymbol;

/***/ }),

/***/ 7457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var shared = __webpack_require__(8849);

var has = __webpack_require__(2551);

var uid = __webpack_require__(858);

var NATIVE_SYMBOL = __webpack_require__(4938);

var USE_SYMBOL_AS_UID = __webpack_require__(4719);

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

/***/ 4926:
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002" + "\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

/***/ }),

/***/ 5899:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var fails = __webpack_require__(8901);

var isArray = __webpack_require__(1746);

var isObject = __webpack_require__(2949);

var toObject = __webpack_require__(6068);

var toLength = __webpack_require__(588);

var createProperty = __webpack_require__(812);

var arraySpeciesCreate = __webpack_require__(586);

var arrayMethodHasSpeciesSupport = __webpack_require__(1511);

var wellKnownSymbol = __webpack_require__(7457);

var V8_VERSION = __webpack_require__(2912);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function isConcatSpreadable(O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) {
          if (k in E) createProperty(A, n, E[k]);
        }
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

/***/ }),

/***/ 5938:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var fill = __webpack_require__(2505);

var addToUnscopables = __webpack_require__(7331); // `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill


$({
  target: 'Array',
  proto: true
}, {
  fill: fill
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('fill');

/***/ }),

/***/ 8151:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var $filter = __webpack_require__(5969).filter;

var arrayMethodHasSpeciesSupport = __webpack_require__(1511);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ 7504:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var $find = __webpack_require__(5969).find;

var addToUnscopables = __webpack_require__(7331);

var FIND = 'find';
var SKIPS_HOLES = true; // Shouldn't skip holes

if (FIND in []) Array(1)[FIND](function () {
  SKIPS_HOLES = false;
}); // `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find

$({
  target: 'Array',
  proto: true,
  forced: SKIPS_HOLES
}, {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables(FIND);

/***/ }),

/***/ 8009:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var flattenIntoArray = __webpack_require__(8529);

var toObject = __webpack_require__(6068);

var toLength = __webpack_require__(588);

var aFunction = __webpack_require__(1361);

var arraySpeciesCreate = __webpack_require__(586); // `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap


$({
  target: 'Array',
  proto: true
}, {
  flatMap: function flatMap(callbackfn
  /* , thisArg */
  ) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});

/***/ }),

/***/ 778:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var $includes = __webpack_require__(477).includes;

var addToUnscopables = __webpack_require__(7331); // `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes


$({
  target: 'Array',
  proto: true
}, {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('includes');

/***/ }),

/***/ 893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toIndexedObject = __webpack_require__(6211);

var addToUnscopables = __webpack_require__(7331);

var Iterators = __webpack_require__(9759);

var InternalStateModule = __webpack_require__(4081);

var defineIterator = __webpack_require__(5500);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator

module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject

Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ 7434:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var $map = __webpack_require__(5969).map;

var arrayMethodHasSpeciesSupport = __webpack_require__(1511);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ 2352:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var isObject = __webpack_require__(2949);

var isArray = __webpack_require__(1746);

var toAbsoluteIndex = __webpack_require__(8786);

var toLength = __webpack_require__(588);

var toIndexedObject = __webpack_require__(6211);

var createProperty = __webpack_require__(812);

var wellKnownSymbol = __webpack_require__(7457);

var arrayMethodHasSpeciesSupport = __webpack_require__(1511);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max; // `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));

    for (n = 0; k < fin; k++, n++) {
      if (k in O) createProperty(result, n, O[k]);
    }

    result.length = n;
    return result;
  }
});

/***/ }),

/***/ 517:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var aFunction = __webpack_require__(1361);

var toObject = __webpack_require__(6068);

var toLength = __webpack_require__(588);

var fails = __webpack_require__(8901);

var internalSort = __webpack_require__(7488);

var arrayMethodIsStrict = __webpack_require__(4419);

var FF = __webpack_require__(7123);

var IE_OR_EDGE = __webpack_require__(5073);

var V8 = __webpack_require__(2912);

var WEBKIT = __webpack_require__(2925);

var test = [];
var nativeSort = test.sort; // IE8-

var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
}); // V8 bug

var FAILS_ON_NULL = fails(function () {
  test.sort(null);
}); // Old WebKit

var STRICT_METHOD = arrayMethodIsStrict('sort');
var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;
  var result = '';
  var code, chr, value, index; // generate an array with more 512 elements (Chakra and old V8 fails only in this case)

  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66:
      case 69:
      case 70:
      case 72:
        value = 3;
        break;

      case 68:
      case 71:
        value = 4;
        break;

      default:
        value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({
        k: chr + index,
        v: value
      });
    }
  }

  test.sort(function (a, b) {
    return b.v - a.v;
  });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});
var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function getSortCompare(comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return String(x) > String(y) ? 1 : -1;
  };
}; // `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort


$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aFunction(comparefn);
    var array = toObject(this);
    if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);
    var items = [];
    var arrayLength = toLength(array.length);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) items.push(array[index]);
    }

    items = internalSort(items, getSortCompare(comparefn));
    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) {
      array[index] = items[index++];
    }

    while (index < arrayLength) {
      delete array[index++];
    }

    return array;
  }
});

/***/ }),

/***/ 6302:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var toAbsoluteIndex = __webpack_require__(8786);

var toInteger = __webpack_require__(4770);

var toLength = __webpack_require__(588);

var toObject = __webpack_require__(6068);

var arraySpeciesCreate = __webpack_require__(586);

var createProperty = __webpack_require__(812);

var arrayMethodHasSpeciesSupport = __webpack_require__(1511);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  splice: function splice(start, deleteCount
  /* , ...items */
  ) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;

    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }

    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }

    A = arraySpeciesCreate(O, actualDeleteCount);

    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }

    A.length = actualDeleteCount;

    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];else delete O[to];
      }

      for (k = len; k > len - actualDeleteCount + insertCount; k--) {
        delete O[k - 1];
      }
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];else delete O[to];
      }
    }

    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }

    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});

/***/ }),

/***/ 3236:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(7331); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables


addToUnscopables('flatMap');

/***/ }),

/***/ 7807:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var parseInt = __webpack_require__(7536); // `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing


$({
  target: 'Number',
  stat: true,
  forced: Number.parseInt != parseInt
}, {
  parseInt: parseInt
});

/***/ }),

/***/ 9769:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var assign = __webpack_require__(6475); // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing


$({
  target: 'Object',
  stat: true,
  forced: Object.assign !== assign
}, {
  assign: assign
});

/***/ }),

/***/ 4875:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var $entries = __webpack_require__(8256).entries; // `Object.entries` method
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

/***/ 8819:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var iterate = __webpack_require__(6449);

var createProperty = __webpack_require__(812); // `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries


$({
  target: 'Object',
  stat: true
}, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, {
      AS_ENTRIES: true
    });
    return obj;
  }
});

/***/ }),

/***/ 8797:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var DESCRIPTORS = __webpack_require__(2171);

var ownKeys = __webpack_require__(6813);

var toIndexedObject = __webpack_require__(6211);

var getOwnPropertyDescriptorModule = __webpack_require__(9609);

var createProperty = __webpack_require__(812); // `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors


$({
  target: 'Object',
  stat: true,
  sham: !DESCRIPTORS
}, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;

    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }

    return result;
  }
});

/***/ }),

/***/ 6467:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(4657);

var redefine = __webpack_require__(6486);

var toString = __webpack_require__(6946); // `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring


if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, {
    unsafe: true
  });
}

/***/ }),

/***/ 2231:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var $values = __webpack_require__(8256).values; // `Object.values` method
// https://tc39.es/ecma262/#sec-object.values


$({
  target: 'Object',
  stat: true
}, {
  values: function values(O) {
    return $values(O);
  }
});

/***/ }),

/***/ 1235:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var getBuiltIn = __webpack_require__(1575);

var aFunction = __webpack_require__(1361);

var anObject = __webpack_require__(3739);

var isObject = __webpack_require__(2949);

var create = __webpack_require__(5131);

var bind = __webpack_require__(1651);

var fails = __webpack_require__(8901);

var nativeConstruct = getBuiltIn('Reflect', 'construct'); // `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it

var NEW_TARGET_BUG = fails(function () {
  function F() {
    /* empty */
  }

  return !(nativeConstruct(function () {
    /* empty */
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () {
    /* empty */
  });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;
$({
  target: 'Reflect',
  stat: true,
  forced: FORCED,
  sham: FORCED
}, {
  construct: function construct(Target, args
  /* , newTarget */
  ) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);

    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();

        case 1:
          return new Target(args[0]);

        case 2:
          return new Target(args[0], args[1]);

        case 3:
          return new Target(args[0], args[1], args[2]);

        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      } // w/o altered newTarget, lot of arguments case


      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    } // with altered newTarget, not support built-in constructors


    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),

/***/ 7926:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var global = __webpack_require__(2328);

var isForced = __webpack_require__(2612);

var inheritIfRequired = __webpack_require__(6506);

var createNonEnumerableProperty = __webpack_require__(4059);

var defineProperty = __webpack_require__(811).f;

var getOwnPropertyNames = __webpack_require__(5166).f;

var isRegExp = __webpack_require__(7033);

var getFlags = __webpack_require__(9175);

var stickyHelpers = __webpack_require__(1283);

var redefine = __webpack_require__(6486);

var fails = __webpack_require__(8901);

var has = __webpack_require__(2551);

var enforceInternalState = __webpack_require__(4081).enforce;

var setSpecies = __webpack_require__(4471);

var wellKnownSymbol = __webpack_require__(7457);

var UNSUPPORTED_DOT_ALL = __webpack_require__(6639);

var UNSUPPORTED_NCG = __webpack_require__(6927);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype; // TODO: Use only propper RegExpIdentifierName

var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g; // "new" should create a new object, old webkit bug

var CORRECT_NEW = new NativeRegExp(re1) !== re1;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var BASE_FORCED = DESCRIPTORS && (!CORRECT_NEW || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
  re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
}));

var handleDotAll = function handleDotAll(string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;

  for (; index <= length; index++) {
    chr = string.charAt(index);

    if (chr === '\\') {
      result += chr + string.charAt(++index);
      continue;
    }

    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      }

      result += chr;
    }
  }

  return result;
};

var handleNCG = function handleNCG(string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;

  for (; index <= length; index++) {
    chr = string.charAt(index);

    if (chr === '\\') {
      chr = chr + string.charAt(++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;

      case chr === '(':
        if (IS_NCG.test(string.slice(index + 1))) {
          index += 2;
          ncg = true;
        }

        result += chr;
        groupid++;
        continue;

      case chr === '>' && ncg:
        if (groupname === '' || has(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }

        names[groupname] = true;
        named.push([groupname, groupid]);
        ncg = false;
        groupname = '';
        continue;
    }

    if (ncg) groupname += chr;else result += chr;
  }

  return [result, named];
}; // `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor


if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || pattern instanceof RegExpWrapper) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags.call(rawPattern);
    }

    pattern = pattern === undefined ? '' : String(pattern);
    flags = flags === undefined ? '' : String(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && flags.indexOf('s') > -1;
      if (dotAll) flags = flags.replace(/s/g, '');
    }

    rawFlags = flags;

    if (UNSUPPORTED_Y && 'sticky' in re1) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);

      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }

      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) {
      /* empty */
    }
    return result;
  };

  var proxy = function proxy(key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function get() {
        return NativeRegExp[key];
      },
      set: function set(it) {
        NativeRegExp[key] = it;
      }
    });
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxy(keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
} // https://tc39.es/ecma262/#sec-get-regexp-@@species


setSpecies('RegExp');

/***/ }),

/***/ 2238:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var exec = __webpack_require__(1440); // `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec


$({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec
}, {
  exec: exec
});

/***/ }),

/***/ 4594:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var redefine = __webpack_require__(6486);

var anObject = __webpack_require__(3739);

var fails = __webpack_require__(8901);

var flags = __webpack_require__(9175);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails(function () {
  return nativeToString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
}); // FF44- RegExp#toString has a wrong name

var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring

if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, {
    unsafe: true
  });
}

/***/ }),

/***/ 4874:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var getOwnPropertyDescriptor = __webpack_require__(9609).f;

var toLength = __webpack_require__(588);

var notARegExp = __webpack_require__(5418);

var requireObjectCoercible = __webpack_require__(4682);

var correctIsRegExpLogic = __webpack_require__(1925);

var IS_PURE = __webpack_require__(6719); // eslint-disable-next-line es/no-string-prototype-endswith -- safe


var $endsWith = ''.endsWith;
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith'); // https://github.com/zloirock/core-js/pull/702

var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}(); // `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith

$({
  target: 'String',
  proto: true,
  forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
  endsWith: function endsWith(searchString
  /* , endPosition = @length */
  ) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

/***/ }),

/***/ 3239:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var notARegExp = __webpack_require__(5418);

var requireObjectCoercible = __webpack_require__(4682);

var correctIsRegExpLogic = __webpack_require__(1925); // `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes


$({
  target: 'String',
  proto: true,
  forced: !correctIsRegExpLogic('includes')
}, {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ 7924:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fixRegExpWellKnownSymbolLogic = __webpack_require__(9783);

var anObject = __webpack_require__(3739);

var toLength = __webpack_require__(588);

var requireObjectCoercible = __webpack_require__(4682);

var advanceStringIndex = __webpack_require__(7368);

var regExpExec = __webpack_require__(2114); // @@match logic


fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.es/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = requireObjectCoercible(this);
    var matcher = regexp == undefined ? undefined : regexp[MATCH];
    return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, // `RegExp.prototype[@@match]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
  function (string) {
    var res = maybeCallNative(nativeMatch, this, string);
    if (res.done) return res.value;
    var rx = anObject(this);
    var S = String(string);
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

/***/ }),

/***/ 5188:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fixRegExpWellKnownSymbolLogic = __webpack_require__(9783);

var fails = __webpack_require__(8901);

var anObject = __webpack_require__(3739);

var toLength = __webpack_require__(588);

var toInteger = __webpack_require__(4770);

var requireObjectCoercible = __webpack_require__(4682);

var advanceStringIndex = __webpack_require__(7368);

var getSubstitution = __webpack_require__(6894);

var regExpExec = __webpack_require__(2114);

var wellKnownSymbol = __webpack_require__(7457);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;

var maybeToString = function maybeToString(it) {
  return it === undefined ? it : String(it);
}; // IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0


var REPLACE_KEEPS_$0 = function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
}(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string


var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }

  return false;
}();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
}); // @@replace logic

fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
  return [// `String.prototype.replace` method
  // https://tc39.es/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
    return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
  function (string, replaceValue) {
    if (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 && replaceValue.indexOf('$<') === -1) {
      var res = maybeCallNative(nativeReplace, this, string, replaceValue);
      if (res.done) return res.value;
    }

    var rx = anObject(this);
    var S = String(string);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regExpExec(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max(min(toInteger(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) {
        captures.push(maybeToString(result[j]));
      }

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + S.slice(nextSourcePosition);
  }];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

/***/ }),

/***/ 1714:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fixRegExpWellKnownSymbolLogic = __webpack_require__(9783);

var isRegExp = __webpack_require__(7033);

var anObject = __webpack_require__(3739);

var requireObjectCoercible = __webpack_require__(4682);

var speciesConstructor = __webpack_require__(9078);

var advanceStringIndex = __webpack_require__(7368);

var toLength = __webpack_require__(588);

var callRegExpExec = __webpack_require__(2114);

var regexpExec = __webpack_require__(1440);

var stickyHelpers = __webpack_require__(1283);

var fails = __webpack_require__(8901);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF; // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
}); // @@split logic

fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function internalSplit(separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output.length > lim ? output.slice(0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (string, limit) {
    var res = maybeCallNative(internalSplit, this, string, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var rx = anObject(this);
    var S = String(string);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
      var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
      var e;

      if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    A.push(S.slice(p));
    return A;
  }];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

/***/ }),

/***/ 5198:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description


var $ = __webpack_require__(9004);

var DESCRIPTORS = __webpack_require__(2171);

var global = __webpack_require__(2328);

var has = __webpack_require__(2551);

var isObject = __webpack_require__(2949);

var defineProperty = __webpack_require__(811).f;

var copyConstructorProperties = __webpack_require__(3780);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
NativeSymbol().description !== undefined)) {
  var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
    : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;
  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });
  $({
    global: true,
    forced: true
  }, {
    Symbol: SymbolWrapper
  });
}

/***/ }),

/***/ 5594:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var global = __webpack_require__(2328);

var getBuiltIn = __webpack_require__(1575);

var IS_PURE = __webpack_require__(6719);

var DESCRIPTORS = __webpack_require__(2171);

var NATIVE_SYMBOL = __webpack_require__(4938);

var USE_SYMBOL_AS_UID = __webpack_require__(4719);

var fails = __webpack_require__(8901);

var has = __webpack_require__(2551);

var isArray = __webpack_require__(1746);

var isObject = __webpack_require__(2949);

var anObject = __webpack_require__(3739);

var toObject = __webpack_require__(6068);

var toIndexedObject = __webpack_require__(6211);

var toPrimitive = __webpack_require__(4375);

var createPropertyDescriptor = __webpack_require__(3300);

var nativeObjectCreate = __webpack_require__(5131);

var objectKeys = __webpack_require__(669);

var getOwnPropertyNamesModule = __webpack_require__(5166);

var getOwnPropertyNamesExternal = __webpack_require__(4142);

var getOwnPropertySymbolsModule = __webpack_require__(5863);

var getOwnPropertyDescriptorModule = __webpack_require__(9609);

var definePropertyModule = __webpack_require__(811);

var propertyIsEnumerableModule = __webpack_require__(7395);

var createNonEnumerableProperty = __webpack_require__(4059);

var redefine = __webpack_require__(6486);

var shared = __webpack_require__(8849);

var sharedKey = __webpack_require__(1449);

var hiddenKeys = __webpack_require__(1055);

var uid = __webpack_require__(858);

var wellKnownSymbol = __webpack_require__(7457);

var wrappedWellKnownSymbolModule = __webpack_require__(2355);

var defineWellKnownSymbol = __webpack_require__(6277);

var setToStringTag = __webpack_require__(4653);

var InternalStateModule = __webpack_require__(4081);

var $forEach = __webpack_require__(5969).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function get() {
      return nativeDefineProperty(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);

  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function wrap(tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);

  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, {
        enumerable: createPropertyDescriptor(0, false)
      });
    }

    return setSymbolDescriptor(O, key, Attributes);
  }

  return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);

  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }

  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
}; // `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor


if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);

    var setter = function setter(value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };

    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
      configurable: true,
      set: setter
    });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });
  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });
  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });

    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
        unsafe: true
      });
    }
  }
}

$({
  global: true,
  wrap: true,
  forced: !NATIVE_SYMBOL,
  sham: !NATIVE_SYMBOL
}, {
  Symbol: $Symbol
});
$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});
$({
  target: SYMBOL,
  stat: true,
  forced: !NATIVE_SYMBOL
}, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function _for(key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function useSetter() {
    USE_SETTER = true;
  },
  useSimple: function useSimple() {
    USE_SETTER = false;
  }
});
$({
  target: 'Object',
  stat: true,
  forced: !NATIVE_SYMBOL,
  sham: !DESCRIPTORS
}, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
$({
  target: 'Object',
  stat: true,
  forced: !NATIVE_SYMBOL
}, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

$({
  target: 'Object',
  stat: true,
  forced: fails(function () {
    getOwnPropertySymbolsModule.f(1);
  })
}, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
}); // `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify

if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

    return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
    || $stringify({
      a: symbol
    }) != '{}' // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
  });
  $({
    target: 'JSON',
    stat: true,
    forced: FORCED_JSON_STRINGIFY
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;

      while (arguments.length > index) {
        args.push(arguments[index++]);
      }

      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!isArray(replacer)) replacer = function replacer(key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
} // `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
} // `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


setToStringTag($Symbol, SYMBOL);
hiddenKeys[HIDDEN] = true;

/***/ }),

/***/ 9940:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var DataView = getNative(root, 'DataView');
module.exports = DataView;

/***/ }),

/***/ 1979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(9129),
    hashDelete = __webpack_require__(9047),
    hashGet = __webpack_require__(3486),
    hashHas = __webpack_require__(4786),
    hashSet = __webpack_require__(6444);
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ 2768:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(3708),
    listCacheDelete = __webpack_require__(6993),
    listCacheGet = __webpack_require__(286),
    listCacheHas = __webpack_require__(1678),
    listCacheSet = __webpack_require__(9743);
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ 4804:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ 8423:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(6977),
    mapCacheDelete = __webpack_require__(7474),
    mapCacheGet = __webpack_require__(727),
    mapCacheHas = __webpack_require__(3653),
    mapCacheSet = __webpack_require__(6140);
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ 7114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var Promise = getNative(root, 'Promise');
module.exports = Promise;

/***/ }),

/***/ 689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var Set = getNative(root, 'Set');
module.exports = Set;

/***/ }),

/***/ 9832:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(8423),
    setCacheAdd = __webpack_require__(9911),
    setCacheHas = __webpack_require__(7447);
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */


function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

/***/ }),

/***/ 959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(2768),
    stackClear = __webpack_require__(7553),
    stackDelete = __webpack_require__(6038),
    stackGet = __webpack_require__(2397),
    stackHas = __webpack_require__(2421),
    stackSet = __webpack_require__(2936);
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ 2773:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Built-in value references. */


var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),

/***/ 2496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ 5284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

/***/ }),

/***/ 6523:
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

module.exports = arrayFilter;

/***/ }),

/***/ 8083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(5094),
    isArguments = __webpack_require__(9246),
    isArray = __webpack_require__(3670),
    isBuffer = __webpack_require__(2343),
    isIndex = __webpack_require__(4782),
    isTypedArray = __webpack_require__(1589);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ 8421:
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

module.exports = arrayPush;

/***/ }),

/***/ 4481:
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}

module.exports = arraySome;

/***/ }),

/***/ 6213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(7950);
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ 891:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(8421),
    isArray = __webpack_require__(3670);
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),

/***/ 1185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2773),
    getRawTag = __webpack_require__(3888),
    objectToString = __webpack_require__(2299);
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ 1075:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    isObjectLike = __webpack_require__(4939);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ 9856:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(1829),
    isObjectLike = __webpack_require__(4939);
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */


function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

/***/ }),

/***/ 1829:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(959),
    equalArrays = __webpack_require__(3426),
    equalByTag = __webpack_require__(1402),
    equalObjects = __webpack_require__(4572),
    getTag = __webpack_require__(2417),
    isArray = __webpack_require__(3670),
    isBuffer = __webpack_require__(2343),
    isTypedArray = __webpack_require__(1589);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

/***/ }),

/***/ 4106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3626),
    isMasked = __webpack_require__(9249),
    isObject = __webpack_require__(71),
    toSource = __webpack_require__(1214);
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ 3638:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    isLength = __webpack_require__(7100),
    isObjectLike = __webpack_require__(4939);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ 7521:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(2803),
    nativeKeys = __webpack_require__(3865);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ 5094:
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ 9081:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ 3159:
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

/***/ }),

/***/ 1741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ 3426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(9832),
    arraySome = __webpack_require__(4481),
    cacheHas = __webpack_require__(3159);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Check that cyclic values are equal.


  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);

  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

/***/ }),

/***/ 1402:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2773),
    Uint8Array = __webpack_require__(2496),
    eq = __webpack_require__(7950),
    equalArrays = __webpack_require__(3426),
    mapToArray = __webpack_require__(8961),
    setToArray = __webpack_require__(6983);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */

var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}

module.exports = equalByTag;

/***/ }),

/***/ 4572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(5788);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Check that cyclic values are equal.


  var objStacked = stack.get(object);
  var othStacked = stack.get(other);

  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

/***/ }),

/***/ 8556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
module.exports = freeGlobal;

/***/ }),

/***/ 5788:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(891),
    getSymbols = __webpack_require__(7976),
    keys = __webpack_require__(3225);
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),

/***/ 404:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(4480);
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ 3203:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(4106),
    getValue = __webpack_require__(7338);
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ 3888:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2773);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ 7976:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(6523),
    stubArray = __webpack_require__(4043);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
module.exports = getSymbols;

/***/ }),

/***/ 2417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(9940),
    Map = __webpack_require__(4804),
    Promise = __webpack_require__(7114),
    Set = __webpack_require__(689),
    WeakMap = __webpack_require__(5284),
    baseGetTag = __webpack_require__(1185),
    toSource = __webpack_require__(1214);
/** `Object#toString` result references. */


var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}

module.exports = getTag;

/***/ }),

/***/ 7338:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ 9129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ 9047:
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ 3486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ 4786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ 6444:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ 4782:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ 4480:
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ 9249:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(1741);
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ 2803:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ 3708:
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ 6993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ 286:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ 1678:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ 9743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ 6977:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(1979),
    ListCache = __webpack_require__(2768),
    Map = __webpack_require__(4804);
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ 7474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ 727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ 3653:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ 6140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ 8961:
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ }),

/***/ 6326:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203);
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ 3865:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5290);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ 1985:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(8556);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;

/***/ }),

/***/ 2299:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ 5290:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ 4362:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(8556);
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ 9911:
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */

function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}

module.exports = setCacheAdd;

/***/ }),

/***/ 7447:
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

/***/ }),

/***/ 6983:
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ }),

/***/ 7553:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(2768);
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ 6038:
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ 2397:
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ 2421:
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ 2936:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(2768),
    Map = __webpack_require__(4804),
    MapCache = __webpack_require__(8423);
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ 1214:
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),

/***/ 7950:
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ 9246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(1075),
    isObjectLike = __webpack_require__(4939);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ 3670:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ 6175:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3626),
    isLength = __webpack_require__(7100);
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ 2343:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(4362),
    stubFalse = __webpack_require__(3444);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

/***/ }),

/***/ 7120:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(9856);
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */


function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;

/***/ }),

/***/ 3626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    isObject = __webpack_require__(71);
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ 7100:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ 71:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ 4939:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ 1589:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(3638),
    baseUnary = __webpack_require__(9081),
    nodeUtil = __webpack_require__(1985);
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ 3225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(8083),
    baseKeys = __webpack_require__(7521),
    isArrayLike = __webpack_require__(6175);
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */


function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ 4043:
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),

/***/ 3444:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ 4223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Macro": () => (/* binding */ Macro),
/* harmony export */   "withMacro": () => (/* binding */ withMacro),
/* harmony export */   "adventureMacro": () => (/* binding */ adventureMacro)
/* harmony export */ });
/* unused harmony exports mapMonster, adventureMacroAuto, main */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9803);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(libram__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6962);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

function shouldRedigitize() {
  var digitizesLeft = clamp(3 - libram__WEBPACK_IMPORTED_MODULE_2__.SourceTerminal.getDigitizeUses(), 0, 3);
  var monsterCount = libram__WEBPACK_IMPORTED_MODULE_2__.SourceTerminal.getDigitizeMonsterCount() + 1; // triangular number * 10 - 3

  var digitizeAdventuresUsed = monsterCount * (monsterCount + 1) * 5 - 3; // Redigitize if fewer adventures than this digitize usage.

  var thumbRingMultiplier = 1 / 0.96;
  var gnomeMultiplier = (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Reagnimated Gnome"])))) ? 1 / 0.8 : 1;
  var expectedAdventures = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myAdventures)() * thumbRingMultiplier * gnomeMultiplier;
  return libram__WEBPACK_IMPORTED_MODULE_2__.SourceTerminal.have() && expectedAdventures < digitizesLeft * digitizeAdventuresUsed;
}

var Macro = /*#__PURE__*/function (_LibramMacro) {
  _inherits(Macro, _LibramMacro);

  var _super = _createSuper(Macro);

  function Macro() {
    _classCallCheck(this, Macro);

    return _super.apply(this, arguments);
  }

  _createClass(Macro, [{
    key: "pickpocket",
    value: function pickpocket() {
      return this.step("pickpocket");
    }
  }, {
    key: "tryHaveSkill",
    value: function tryHaveSkill(skill) {
      if (!skill) return this;
      return this.externalIf((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)(skill), Macro.trySkill(skill));
    }
  }, {
    key: "tryHaveItem",
    value: function tryHaveItem(item) {
      if (!item) return this;
      return this.externalIf((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)(item), Macro.tryItem(item));
    }
  }, {
    key: "tryCopier",
    value: function tryCopier(itemOrSkill) {
      switch (itemOrSkill) {
        case (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Spooky Putty sheet"]))):
          return this.externalIf((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("spookyPuttyCopiesMade") + Math.max(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_raindohCopiesMade")) < 6, Macro.tryItem(itemOrSkill));

        case (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Rain-Doh black box"]))):
          return this.externalIf((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_raindohCopiesMade") + Math.max(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("spookyPuttyCopiesMade")) < 6, Macro.tryItem(itemOrSkill));

        case (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["4-d camera"]))):
          return this.externalIf(!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_cameraUsed") && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["shaking 4-d camera"])))), Macro.tryItem(itemOrSkill));

        case (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["crappy camera"]))):
          return this.externalIf(!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_crappyCameraUsed") && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["shaking crappy camera"])))), Macro.tryItem(itemOrSkill));

        case (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["unfinished ice sculpture"]))):
          return this.externalIf(!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_iceSculptureUsed") && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["ice sculpture"])))), Macro.tryItem(itemOrSkill));

        case (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["pulled green taffy"]))):
          return this.externalIf(!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_envyfishEggUsed") && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["envyfish egg"])))), Macro.tryItem(itemOrSkill));

        case (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["print screen button"]))):
          return this.tryItem(itemOrSkill);

        case (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["alpine watercolor set"]))):
          return this.tryItem(itemOrSkill);

        case (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["LOV Enamorang"]))):
          return this.externalIf((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_enamorangs") < 5 && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("enamorangMonster"), Macro.tryItem(itemOrSkill));

        case (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Digitize"]))):
          return this.externalIf((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_sourceTerminalDigitizeUses") < 1 + ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("sourceTerminalChips").includes("TRAM") ? 1 : 0) + ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("sourceTerminalChips").includes("TRIGRAM") ? 1 : 0), Macro.trySkill(itemOrSkill));
      } // Unsupported item or skill


      return this;
    }
  }, {
    key: "meatKill",
    value: function meatKill() {
      var sealClubberSetup = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["mafia pointer finger ring"])))) > 0 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$class)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Seal Clubber"]))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Furious Wallop"]))));
      var opsSetup = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["mafia pointer finger ring"])))) > 0 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Operation Patriot Shield"])))) > 0;
      var katanaSetup = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["mafia pointer finger ring"])))) > 0 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["haiku katana"])))) > 0;
      var capeSetup = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["mafia pointer finger ring"])))) > 0 && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("retroCapeSuperhero") === "robot" && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("retroCapeWashingInstructions") === "kill" && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemType)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["weapon"]))))) === "pistol";
      return this.externalIf(shouldRedigitize(), Macro.if_("monstername ".concat(libram__WEBPACK_IMPORTED_MODULE_2__.SourceTerminal.getDigitizeMonster()), Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Digitize"])))))).externalIf((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["latte lovers member's mug"])))) && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_latteDrinkUsed"), Macro.skill("Gulp Latte")).meatStasis(true).externalIf(sealClubberSetup, Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Furious Wallop"]))))).externalIf(opsSetup, Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Throw Shield"])))).attack()).externalIf(katanaSetup, Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Summer Siesta"]))))).externalIf(capeSetup, Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["Precision Shot"]))))).kill();
    }
  }, {
    key: "meatStasis",
    value: function meatStasis(checkPassive) {
      // If we don't care about killing the monster don't bother checking passave damage
      if (!checkPassive) {
        return this.externalIf((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Pantsgiving"])))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_pantsgivingCrumbs") < 9, Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Pocket Crumbs"]))))).externalIf((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["Buddy Bjorn"])))) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["Crown of Thrones"])))), Macro.while_("!pastround 3 && !hppercentbelow 25", Macro.item((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["seal tooth"])))))).externalIf([(0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["Cocoabo"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["Feather Boa Constrictor"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Ninja Pirate Zombie Robot"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["Stocking Mimic"])))].some(familiar => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() === familiar), Macro.while_("!pastround 10 && !hppercentbelow 25", Macro.item((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["seal tooth"])))))).externalIf((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["Hobo Monkey"]))), Macro.while_("!match \"shoulder, and hands you some Meat.\" && !pastround 20 && !hppercentbelow 25", Macro.item((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["seal tooth"])))))).tryItem((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["porquoise-handled sixgun"]))));
      } // Only stasis if the monster manuel is available and we have access to monsterhpabove


      if (!(0,_lib__WEBPACK_IMPORTED_MODULE_1__/* .monsterManuelAvailable */ .nf)()) {
        return this;
      }

      var passiveDamage = (0,_lib__WEBPACK_IMPORTED_MODULE_1__/* .maxPassiveDamage */ .Bx)() + 5; // Ignore unexpected monsters, holiday scaling monsters seem to abort with monsterhpabove

      return this.if_("monstername jock || monstername burnout || monstername party girl || monstername plain || monstername biker || monstername sausage goblin", Macro.externalIf(libram__WEBPACK_IMPORTED_MODULE_2__.SongBoom.song() === "Total Eclipse of Your Meat", Macro.if_("monsterhpabove ".concat(passiveDamage), Macro.trySkill("Sing Along"))).externalIf((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Buddy Bjorn"])))) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["Crown of Thrones"])))), Macro.while_("!pastround 3 && monsterhpabove ".concat(passiveDamage), Macro.item((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["seal tooth"])))))).externalIf([(0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["Cocoabo"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["Feather Boa Constrictor"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["Ninja Pirate Zombie Robot"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["Stocking Mimic"])))].some(familiar => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() === familiar), Macro.while_("!pastround 10 && monsterhpabove ".concat(passiveDamage), Macro.item((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["seal tooth"])))))).externalIf((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["Hobo Monkey"]))), Macro.while_("!match \"shoulder, and hands you some Meat.\" && !pastround 20 && monsterhpabove ".concat(passiveDamage), Macro.item((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["seal tooth"])))))).if_("monsterhpabove ".concat(passiveDamage + 40), Macro.tryHaveItem((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["porquoise-handled sixgun"]))))));
    }
  }, {
    key: "startCombat",
    value: function startCombat() {
      return this.externalIf((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["Pantsgiving"])))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_pantsgivingCrumbs") < 9, Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["Pocket Crumbs"]))))).externalIf(shouldRedigitize(), Macro.if_("monstername ".concat(libram__WEBPACK_IMPORTED_MODULE_2__.SourceTerminal.getDigitizeMonster()), Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["Digitize"])))))).externalIf((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["Buddy Bjorn"])))) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["Crown of Thrones"])))), Macro.while_("!pastround 3 && !hppercentbelow 25", Macro.item((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["seal tooth"])))))).externalIf([(0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["Cocoabo"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["Feather Boa Constrictor"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["Ninja Pirate Zombie Robot"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["Stocking Mimic"])))].some(familiar => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() === familiar), Macro.while_("!pastround 10 && !hppercentbelow 25", Macro.item((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["seal tooth"])))))).externalIf((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["Hobo Monkey"]))), Macro.while_("!match \"shoulder, and hands you some Meat.\" && !pastround 20 && !hppercentbelow 25", Macro.item((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["seal tooth"]))))));
    }
  }, {
    key: "tryFreeKill",
    value: function tryFreeKill() {
      return this.externalIf(!((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLocation)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["The Neverending Party"]))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_neverendingPartyFreeTurns") < 10) && !((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLocation)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["The Deep Machine Tunnels"]))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_machineTunnelsAdv") < 5), Macro.externalIf((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_chestXRayUsed") < 3, Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["Chest X-Ray"]))))).externalIf((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["The Jokester's gun"])))) && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_firedJokestersGun"), Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["Fire the Jokester's Gun"]))))).externalIf((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_shatteringPunchUsed") < 3, Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["Shattering Punch"]))))).externalIf(!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_gingerbreadMobHitUsed"), Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["Duplicate"])))).skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["Gingerbread Mob Hit"]))))).externalIf((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["replica bat-oomerang"])))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_usedReplicaBatoomerang") < 3, Macro.item((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["replica bat-oomerang"]))))));
    }
  }, {
    key: "kill",
    value: function kill() {
      return this.externalIf((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$class)(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["Sauceror"]))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["Curse of Weaksauce"])))), Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["Curse of Weaksauce"]))))) // Using while_ here in case you run out of mp
      .while_("hasskill Saucegeyser", Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["Saucegeyser"]))))).attack().repeat();
    }
  }, {
    key: "basicCombat",
    value: function basicCombat() {
      return this.startCombat().kill();
    }
  }, {
    key: "ghostBustin",
    value: function ghostBustin() {
      var _classStun;

      // Only bust ghosts if you have enough stunners to prevent getting hit
      var stunRounds = 0;
      var classStun = null;
      var extraStun = null;
      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["Rain-Doh blue balls"]))))) stunRounds++;
      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("lovebugsUnlocked")) stunRounds++;

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$class)(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["Seal Clubber"]))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["Club Foot"])))) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() >= (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mpCost)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["Club Foot"]))))) {
        var clubRounds = Math.min((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFury)(), 3) + ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemType)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["weapon"]))))) === "club" ? 1 : 0) - 1;

        if (stunRounds > 0) {
          classStun = (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["Club Foot"])));
          stunRounds += clubRounds;
        }
      } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$class)(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["Turtle Tamer"]))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["Shell Up"])))) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() >= (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mpCost)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["Shell Up"]))))) {
        var shellRounds = ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["Blessing of the Storm Tortoise"])))) ? 2 : 0) + ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["Grand Blessing of the Storm Tortoise"])))) ? 3 : 0) + ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["Glorious Blessing of the Storm Tortoise"])))) ? 4 : 0);

        if (shellRounds > 0) {
          classStun = (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["Shell Up"])));
          stunRounds += shellRounds;
        }
      } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$class)(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["Pastamancer"]))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["Entangling Noodles"])))) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() >= (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mpCost)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["Entangling Noodles"]))))) {
        classStun = (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["Entangling Noodles"])));
        stunRounds += 2;
      } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$class)(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["Sauceror"]))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["Soul Bubble"])))) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mySoulsauce)() >= 5) {
        classStun = (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["Soul Bubble"])));
        stunRounds += 2;
      } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$class)(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["Accordion Thief"]))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["Accordion Bash"])))) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemType)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["weapon"]))))) === "accordion" && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() >= (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mpCost)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral(["Accordion Bash"]))))) {
        classStun = (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral(["Accordion Bash"])));
        stunRounds += 2;
      } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$class)(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral(["Disco Bandit"])))) {// Rave Knockout seems like a pain
      } // Don't use shadow noodles unless we really need it.


      if (stunRounds < 3 && classStun !== (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["Entangling Noodles"]))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["Shadow Noodles"])))) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() >= (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mpCost)((_classStun = classStun) !== null && _classStun !== void 0 ? _classStun : (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["none"])))) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mpCost)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["Shadow Noodles"]))))) {
        extraStun = (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral(["Shadow Noodles"])));
        stunRounds += 2;
      } // Lacking multi-round stuns


      if (stunRounds < 3) {
        return this.basicCombat();
      }

      return this.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["Sing Along"])))).tryHaveItem((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["Rain-Doh blue balls"])))).externalIf((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("lovebugsUnlocked"), Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["Summon Love Gnats"]))))).tryHaveSkill(classStun).tryHaveSkill(extraStun).trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["Shoot Ghost"])))).trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["Shoot Ghost"])))).trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["Shoot Ghost"])))).trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["Trap Ghost"])))).kill();
    }
  }], [{
    key: "pickpocket",
    value: function pickpocket() {
      return new Macro().pickpocket();
    }
  }, {
    key: "tryHaveSkill",
    value: function tryHaveSkill(skill) {
      return new Macro().tryHaveSkill(skill);
    }
  }, {
    key: "tryHaveItem",
    value: function tryHaveItem(item) {
      return new Macro().tryHaveItem(item);
    }
  }, {
    key: "tryCopier",
    value: function tryCopier(itemOrSkill) {
      return new Macro().tryCopier(itemOrSkill);
    }
  }, {
    key: "meatKill",
    value: function meatKill() {
      return new Macro().meatKill();
    }
  }, {
    key: "meatStasis",
    value: function meatStasis(checkPassive) {
      return new Macro().meatStasis(checkPassive);
    }
  }, {
    key: "startCombat",
    value: function startCombat() {
      return new Macro().startCombat();
    }
  }, {
    key: "tryFreeKill",
    value: function tryFreeKill() {
      return new Macro().tryFreeKill();
    }
  }, {
    key: "kill",
    value: function kill() {
      return new Macro().kill();
    }
  }, {
    key: "basicCombat",
    value: function basicCombat() {
      return new Macro().basicCombat();
    }
  }, {
    key: "ghostBustin",
    value: function ghostBustin() {
      return new Macro().ghostBustin();
    }
  }]);

  return Macro;
}(libram__WEBPACK_IMPORTED_MODULE_2__.Macro);
function withMacro(macro, action) {
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getAutoAttack)() > 0) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setAutoAttack)(0);
  macro.save();

  try {
    return action();
  } finally {
    Macro.clearSaved();
  }
}
function mapMonster(location, monster, macro) {
  return withMacro(macro, () => {
    if (haveSkill($skill(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["Map the Monsters"])))) && !get("mappingMonsters") && get("_monstersMapped") < 3) {
      useSkill($skill(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["Map the Monsters"]))));
    }

    if (!get("mappingMonsters")) throw "Failed to setup Map the Monsters.";
    var mapPage = visitUrl(toUrl(location), false, true);
    if (!mapPage.includes("Leading Yourself Right to Them")) throw "Something went wrong mapping.";
    var fightPage = visitUrl("choice.php?pwd&whichchoice=1435&option=1&heyscriptswhatsupwinkwink=".concat(monster.id));
    if (!fightPage.includes(monster.name)) throw "Something went wrong starting the fight.";
    return runCombat();
  });
}
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */

function adventureMacro(loc, macro) {
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getAutoAttack)() !== 0) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setAutoAttack)(0);
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(macro.components.join("; "));
  macro.save();

  try {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)(loc, 0, "");

    while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMultiFight)()) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)();
    }

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.choiceFollowsFight)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("choice.php");
  } catch (e) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_dr_combatPage"));
    throw "Combat exception!";
  } finally {
    Macro.clearSaved();
  }
}
/**
 * Adventure in a location and handle all combats with a given autoattack and manual macro.
 * To use the nextMacro parameter you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param autoMacro Macro to execute via KoL autoattack.
 * @param nextMacro Macro to execute manually after autoattack completes.
 */

function adventureMacroAuto(loc, autoMacro) {
  var nextMacro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();

  try {
    set("_dr_combatPage", "");
    adv1(loc, 0, "");

    while (inMultiFight()) {
      runCombat();
    }

    if (choiceFollowsFight()) visitUrl("choice.php");
  } catch (e) {
    printHtml(get("_dr_combatPage"));
    set("_dr_combatPage", "");
    throw "Combat exception! Last macro error: ".concat(get("lastMacroError"));
  } finally {
    Macro.clearSaved();
  }
}
function main() {
  var macro = Macro.load();
  if (macro.components[0] === "abort") throw "About to abort combat!";
  var response = macro.submit();
  var firstFart = response.indexOf("<!--faaaaaaart-->");
  var lastFart = response.lastIndexOf("<!--faaaaaaart-->");
  var extracted = response.substring(firstFart >= 0 ? firstFart : 0, lastFart > 0 ? lastFart : undefined).replace("id='fightform'", "id='fightform' style='display: none'");
  set("_dr_combatPage", extracted);

  while (inMultiFight()) {
    runCombat();
  }

  if (choiceFollowsFight()) visitUrl("choice.php");
}

/***/ }),

/***/ 7945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ globalOptions),
/* harmony export */   "A": () => (/* binding */ estimatedTurns)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9803);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(libram__WEBPACK_IMPORTED_MODULE_1__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var globalOptions = {
  stopTurncount: null,
  ascending: false,
  nightcap: false
};
function estimatedTurns() {
  var thumbRingMultiplier = 1 / 0.96;
  var gnomeMultiplier = (0,libram__WEBPACK_IMPORTED_MODULE_1__.have)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Reagnimated Gnome"])))) ? 1 / 0.78 : 1;
  return globalOptions.stopTurncount ? globalOptions.stopTurncount - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() : ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myAdventures)() + (globalOptions.ascending && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myInebriety)() <= (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inebrietyLimit)() ? 60 : 0)) * thumbRingMultiplier * gnomeMultiplier;
}

/***/ }),

/***/ 6173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "main": () => (/* binding */ main)
});

// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/libram/dist/index.js
var dist = __webpack_require__(9803);
;// CONCATENATED MODULE: ./src/commands/command.ts
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
// EXTERNAL MODULE: ./src/combat.ts
var combat = __webpack_require__(4223);
;// CONCATENATED MODULE: ./src/clan.ts
var _templateObject, _templateObject2;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function clan_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function clan_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function withStash(itemsToTake, action) {
  var manager = new StashManager();

  try {
    manager.take.apply(manager, _toConsumableArray(itemsToTake));
    return action();
  } finally {
    manager.putBackAll();
  }
}
function clan_withVIPClan(action) {
  var clanIdOrName = (0,dist.get)("dr_vipClan", undefined);

  if (!clanIdOrName && (0,dist.have)((0,dist.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Clan VIP Lounge key"]))))) {
    if ((0,external_kolmafia_.userConfirm)("The preference 'dr_vipClan' is not set. Use the current clan as a VIP clan? (Defaults to yes in 15 seconds)", 15000, true)) {
      clanIdOrName = (0,external_kolmafia_.getClanId)();
      (0,dist.set)("dr_vipClan", clanIdOrName);
    }
  }

  return withClan(clanIdOrName || (0,external_kolmafia_.getClanId)(), action);
}

function withClan(clanIdOrName, action) {
  var startingClanId = (0,external_kolmafia_.getClanId)();
  dist.Clan.join(clanIdOrName);

  try {
    return action();
  } finally {
    dist.Clan.join(startingClanId);
  }
}

var StashManager = /*#__PURE__*/function () {
  function StashManager(clanIdOrName) {
    clan_classCallCheck(this, StashManager);

    clan_defineProperty(this, "clanIdOrName", void 0);

    clan_defineProperty(this, "taken", new Map());

    if (clanIdOrName === undefined) {
      clanIdOrName = (0,dist.get)("dr_stashClan", undefined);

      if (!clanIdOrName) {
        if ((0,external_kolmafia_.userConfirm)("The preference 'dr_stashClan' is not set. Use the current clan as a stash clan? (Defaults to yes in 15 seconds)", 15000, true)) {
          clanIdOrName = (0,external_kolmafia_.getClanId)();
          (0,dist.set)("dr_stashClan", clanIdOrName);
        } else {
          throw "No dr_stashClan set.";
        }
      }
    }

    this.clanIdOrName = clanIdOrName;
  }

  _createClass(StashManager, [{
    key: "take",
    value: function take() {
      for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      if (items.every(item => (0,dist.have)(item))) return;
      withClan(this.clanIdOrName, () => {
        var _iterator = _createForOfIteratorHelper(items),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            if ((0,dist.have)(item)) continue;

            if ((0,dist.getFoldGroup)(item).some(fold => (0,dist.have)(fold))) {
              (0,external_kolmafia_.cliExecute)("fold ".concat(item.name));
              continue;
            }

            var foldArray = [item].concat(_toConsumableArray((0,dist.getFoldGroup)(item)));
            (0,external_kolmafia_.refreshStash)();

            var _iterator2 = _createForOfIteratorHelper(foldArray),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var fold = _step2.value;

                try {
                  if ((0,external_kolmafia_.stashAmount)(fold) > 0) {
                    if ((0,external_kolmafia_.takeStash)(1, fold)) {
                      var _this$taken$get;

                      (0,external_kolmafia_.print)("Took ".concat(fold.name, " from stash in ").concat((0,external_kolmafia_.getClanName)(), "."), "blue");
                      if (fold !== item) (0,external_kolmafia_.cliExecute)("fold ".concat(item.name));
                      this.taken.set(item, ((_this$taken$get = this.taken.get(item)) !== null && _this$taken$get !== void 0 ? _this$taken$get : 0) + 1);
                      break;
                    } else {
                      (0,external_kolmafia_.print)("Failed to take ".concat(fold.name, " from the stash. Do you have stash access in ").concat((0,external_kolmafia_.getClanName)(), "?"), "red");
                    }
                  }
                } catch (_unused) {
                  (0,external_kolmafia_.print)("Failed to take ".concat(fold.name, " from stash in ").concat((0,external_kolmafia_.getClanName)(), "."), "red");
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if ((0,dist.have)(item)) continue;
            (0,external_kolmafia_.print)("Couldn't find ".concat(item.name, " in clan stash for ").concat((0,external_kolmafia_.getClanName)(), "."), "red");
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }
    /**
     * Ensure at least one of each of {items} in inventory.
     * @param items Items to take from the stash.
     */

  }, {
    key: "ensure",
    value: function ensure() {
      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }

      this.take.apply(this, _toConsumableArray(items.filter(item => (0,external_kolmafia_.availableAmount)(item) === 0)));
    }
  }, {
    key: "putBack",
    value: function putBack() {
      for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        items[_key3] = arguments[_key3];
      }

      if (items.length === 0) return;

      if ((0,external_kolmafia_.visitUrl)("fight.php").includes("You're fighting")) {
        (0,external_kolmafia_.print)("In fight, trying to get away to return items to stash...", "blue");
        combat.Macro.tryItem.apply(combat.Macro, _toConsumableArray((0,dist.$items)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Louder Than Bomb, divine champagne popper"]))))).step("runaway").submit();
      }

      withClan(this.clanIdOrName, () => {
        var _iterator3 = _createForOfIteratorHelper(items),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _this$taken$get2;

            var item = _step3.value;
            var count = (_this$taken$get2 = this.taken.get(item)) !== null && _this$taken$get2 !== void 0 ? _this$taken$get2 : 0;

            if (count > 0) {
              (0,external_kolmafia_.retrieveItem)(count, item);

              if ((0,external_kolmafia_.putStash)(count, item)) {
                (0,external_kolmafia_.print)("Returned ".concat(item.name, " to stash in ").concat((0,external_kolmafia_.getClanName)(), "."), "blue");
                this.taken.delete(item);
              } else {
                throw "Failed to return ".concat(item.name, " to stash.");
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      });
    }
    /**
     * Put all items back in the stash.
     */

  }, {
    key: "putBackAll",
    value: function putBackAll() {
      this.putBack.apply(this, _toConsumableArray(this.taken.keys()));
    }
  }]);

  return StashManager;
}();
// EXTERNAL MODULE: ./src/lib.ts + 1 modules
var lib = __webpack_require__(6962);
;// CONCATENATED MODULE: ./src/familiar.ts
var familiar_templateObject, familiar_templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41;

function familiar_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = familiar_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function familiar_toConsumableArray(arr) { return familiar_arrayWithoutHoles(arr) || familiar_iterableToArray(arr) || familiar_unsupportedIterableToArray(arr) || familiar_nonIterableSpread(); }

function familiar_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function familiar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return familiar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return familiar_arrayLikeToArray(o, minLen); }

function familiar_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function familiar_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return familiar_arrayLikeToArray(arr); }

function familiar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function familiar_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var MPA = (0,dist.get)("valueOfAdventure");
function fairyFamiliar() {
  var _find;

  if ((0,dist.have)((0,dist.$familiar)(familiar_templateObject || (familiar_templateObject = familiar_taggedTemplateLiteral(["Cat Burglar"])))) && (0,dist.get)("_catBurglarCharge") < 10) return (0,dist.$familiar)(familiar_templateObject2 || (familiar_templateObject2 = familiar_taggedTemplateLiteral(["Cat Burglar"])));
  return (_find = (0,dist.$familiars)(_templateObject3 || (_templateObject3 = familiar_taggedTemplateLiteral(["Reagnimated Gnome, Jumpsuited Hound Dog"]))).find(familiar => (0,dist.have)(familiar))) !== null && _find !== void 0 ? _find : (0,dist.$familiar)(_templateObject4 || (_templateObject4 = familiar_taggedTemplateLiteral(["Baby Gravy Fairy"])));
}

function myFamiliarWeight() {
  var familiar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  if (familiar === null) familiar = (0,external_kolmafia_.myFamiliar)();
  return (0,external_kolmafia_.familiarWeight)(familiar) + (0,external_kolmafia_.weightAdjustment)();
} // 5, 10, 15, 20, 25 +5/turn: 5.29, 4.52, 3.91, 3.42, 3.03


var rotatingFamiliars = {
  "Fist Turkey": {
    expected: [3.91, 4.52, 4.52, 5.29, 5.29],
    drop: (0,dist.$item)(_templateObject5 || (_templateObject5 = familiar_taggedTemplateLiteral(["Ambitious Turkey"]))),
    pref: "_turkeyBooze"
  },
  "Llama Lama": {
    expected: [3.42, 3.91, 4.52, 5.29, 5.29],
    drop: (0,dist.$item)(_templateObject6 || (_templateObject6 = familiar_taggedTemplateLiteral(["llama lama gong"]))),
    pref: "_gongDrops"
  },
  "Astral Badger": {
    expected: [3.03, 3.42, 3.91, 4.52, 5.29],
    drop: (0,dist.$item)(_templateObject7 || (_templateObject7 = familiar_taggedTemplateLiteral(["astral mushroom"]))),
    pref: "_astralDrops"
  },
  "Li'l Xenomorph": {
    expected: [3.03, 3.42, 3.91, 4.52, 5.29],
    drop: (0,dist.$item)(_templateObject8 || (_templateObject8 = familiar_taggedTemplateLiteral(["transporter transponder"]))),
    pref: "_transponderDrops"
  },
  "Rogue Program": {
    expected: [3.03, 3.42, 3.91, 4.52, 5.29],
    drop: (0,dist.$item)(_templateObject9 || (_templateObject9 = familiar_taggedTemplateLiteral(["Game Grid token"]))),
    pref: "_tokenDrops"
  },
  "Bloovian Groose": {
    expected: [3.03, 3.42, 3.91, 4.52, 5.29],
    drop: (0,dist.$item)(_templateObject10 || (_templateObject10 = familiar_taggedTemplateLiteral(["groose grease"]))),
    pref: "_grooseDrops"
  },
  "Baby Sandworm": {
    expected: [3.03, 3.42, 3.91, 4.52, 5.29],
    drop: (0,dist.$item)(_templateObject11 || (_templateObject11 = familiar_taggedTemplateLiteral(["agua de vida"]))),
    pref: "_aguaDrops"
  },
  "Green Pixie": {
    expected: [3.03, 3.42, 3.91, 4.52, 5.29],
    drop: (0,dist.$item)(_templateObject12 || (_templateObject12 = familiar_taggedTemplateLiteral(["tiny bottle of absinthe"]))),
    pref: "_absintheDrops"
  },
  "Blavious Kloop": {
    expected: [3.03, 3.42, 3.91, 4.52, 5.29],
    drop: (0,dist.$item)(_templateObject13 || (_templateObject13 = familiar_taggedTemplateLiteral(["devilish folio"]))),
    pref: "_kloopDrops"
  },
  "Galloping Grill": {
    expected: [3.03, 3.42, 3.91, 4.52, 5.29],
    drop: (0,dist.$item)(_templateObject14 || (_templateObject14 = familiar_taggedTemplateLiteral(["hot ashes"]))),
    pref: "_hotAshesDrops"
  },
  "Grim Brother": {
    expected: [3.03, 3.42, 3.91, 4.52, 5.29],
    drop: (0,dist.$item)(_templateObject15 || (_templateObject15 = familiar_taggedTemplateLiteral(["grim fairy tale"]))),
    pref: "_grimFairyTaleDrops"
  },
  "Golden Monkey": {
    expected: [3.03, 3.42, 3.91, 4.52, 5.29],
    drop: (0,dist.$item)(_templateObject16 || (_templateObject16 = familiar_taggedTemplateLiteral(["powdered gold"]))),
    pref: "_powderedGoldDrops"
  },
  "Unconscious Collective": {
    expected: [3.03, 3.42, 3.91, 4.52, 5.29],
    drop: (0,dist.$item)(_templateObject17 || (_templateObject17 = familiar_taggedTemplateLiteral(["Unconscious Collective Dream Jar"]))),
    pref: "_dreamJarDrops"
  },
  "Ms. Puck Man": {
    expected: Array((0,dist.$familiar)(_templateObject18 || (_templateObject18 = familiar_taggedTemplateLiteral(["Ms. Puck Man"]))).dropsLimit).fill(12.85),
    drop: (0,dist.$item)(_templateObject19 || (_templateObject19 = familiar_taggedTemplateLiteral(["power pill"]))),
    pref: "_powerPillDrops"
  },
  "Puck Man": {
    expected: Array((0,dist.$familiar)(_templateObject20 || (_templateObject20 = familiar_taggedTemplateLiteral(["Puck Man"]))).dropsLimit).fill(12.85),
    drop: (0,dist.$item)(_templateObject21 || (_templateObject21 = familiar_taggedTemplateLiteral(["power pill"]))),
    pref: "_powerPillDrops"
  },
  "Adventurous Spelunker": {
    expected: [7.0],
    drop: (0,dist.$item)(_templateObject22 || (_templateObject22 = familiar_taggedTemplateLiteral(["Tales of Spelunking"]))),
    pref: "_spelunkingTalesDrops"
  },
  "Angry Jung Man": {
    expected: [30.0],
    drop: (0,dist.$item)(_templateObject23 || (_templateObject23 = familiar_taggedTemplateLiteral(["psychoanalytic jar"]))),
    pref: "_jungDrops"
  },
  "Grimstone Golem": {
    expected: [45.0],
    drop: (0,dist.$item)(_templateObject24 || (_templateObject24 = familiar_taggedTemplateLiteral(["grimstone mask"]))),
    pref: "_grimstoneMaskDrops"
  }
};
var savedMimicDropValue = null;

function mimicDropValue() {
  var _savedMimicDropValue;

  return (_savedMimicDropValue = savedMimicDropValue) !== null && _savedMimicDropValue !== void 0 ? _savedMimicDropValue : savedMimicDropValue = lib/* saleValue.apply */.L0.apply(void 0, familiar_toConsumableArray((0,dist.$items)(_templateObject25 || (_templateObject25 = familiar_taggedTemplateLiteral(["Polka Pop, BitterSweetTarts, Piddles"]))))) / (6.29 * 0.95 + 1 * 0.05);
}

function freeFightFamiliar() {
  var familiarValue = [];

  if ((0,dist.have)((0,dist.$familiar)(_templateObject26 || (_templateObject26 = familiar_taggedTemplateLiteral(["Pocket Professor"])))) && (0,dist.$familiar)(_templateObject27 || (_templateObject27 = familiar_taggedTemplateLiteral(["Pocket Professor"]))).experience < 400 && !(0,dist.get)("_thesisDelivered")) {
    // Estimate based on value to charge thesis.
    familiarValue.push([(0,dist.$familiar)(_templateObject28 || (_templateObject28 = familiar_taggedTemplateLiteral(["Pocket Professor"]))), 3000]);
  }

  for (var _i = 0, _Object$keys = Object.keys(rotatingFamiliars); _i < _Object$keys.length; _i++) {
    var familiarName = _Object$keys[_i];
    var familiar = Familiar.get(familiarName);

    if ((0,dist.have)(familiar)) {
      var _rotatingFamiliars$fa = rotatingFamiliars[familiarName],
          expected = _rotatingFamiliars$fa.expected,
          drop = _rotatingFamiliars$fa.drop,
          pref = _rotatingFamiliars$fa.pref;
      var dropsAlready = (0,dist.get)(pref);
      if (dropsAlready >= expected.length) continue;
      var value = (0,lib/* saleValue */.L0)(drop) / expected[dropsAlready];
      familiarValue.push([familiar, value]);
    }
  }

  if ((0,dist.have)((0,dist.$familiar)(_templateObject29 || (_templateObject29 = familiar_taggedTemplateLiteral(["Stocking Mimic"]))))) {
    var mimicWeight = myFamiliarWeight((0,dist.$familiar)(_templateObject30 || (_templateObject30 = familiar_taggedTemplateLiteral(["Stocking Mimic"]))));
    var actionPercentage = 1 / 3 + ((0,external_kolmafia_.haveEffect)((0,dist.$effect)(_templateObject31 || (_templateObject31 = familiar_taggedTemplateLiteral(["Jingle Jangle Jingle"])))) ? 0.1 : 0);
    var mimicValue = mimicDropValue() + mimicWeight * actionPercentage * 1 / 4 * 10 * 4 * 1.2;
    familiarValue.push([(0,dist.$familiar)(_templateObject32 || (_templateObject32 = familiar_taggedTemplateLiteral(["Stocking Mimic"]))), mimicValue]);
  }

  if ((0,dist.have)((0,dist.$familiar)(_templateObject33 || (_templateObject33 = familiar_taggedTemplateLiteral(["Robortender"]))))) familiarValue.push([(0,dist.$familiar)(_templateObject34 || (_templateObject34 = familiar_taggedTemplateLiteral(["Robortender"]))), 200]);

  if ((0,dist.have)((0,dist.$familiar)(_templateObject35 || (_templateObject35 = familiar_taggedTemplateLiteral(["Cat Burglar"]))))) {
    var heistsCharged = Math.floor(Math.log2(1 + (0,dist.get)("_catBurglarCharge") / 10));
    var nextHeistTurns = 10 * Math.pow(2, heistsCharged);
    familiarValue.push([(0,dist.$familiar)(_templateObject36 || (_templateObject36 = familiar_taggedTemplateLiteral(["Cat Burglar"]))), MPA / nextHeistTurns]);
  }

  if ((0,dist.have)((0,dist.$familiar)(_templateObject37 || (_templateObject37 = familiar_taggedTemplateLiteral(["Reagnimated Gnome"]))))) {
    familiarValue.push([(0,dist.$familiar)(_templateObject38 || (_templateObject38 = familiar_taggedTemplateLiteral(["Reagnimated Gnome"]))), MPA * myFamiliarWeight((0,dist.$familiar)(_templateObject39 || (_templateObject39 = familiar_taggedTemplateLiteral(["Reagnimated Gnome"])))) * 0.001]);
  }

  var _iterator = familiar_createForOfIteratorHelper((0,dist.$familiars)(_templateObject41 || (_templateObject41 = familiar_taggedTemplateLiteral(["Hobo Monkey, Urchin Urchin, Leprechaun"])))),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _familiar = _step.value;
      if ((0,dist.have)(_familiar)) familiarValue.push([_familiar, 1]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  familiarValue.push([(0,dist.$familiar)(_templateObject40 || (_templateObject40 = familiar_taggedTemplateLiteral(["none"]))), 0]);
  return (0,lib/* argmax */.Eb)(familiarValue);
}
;// CONCATENATED MODULE: ./src/bjorn.ts
var bjorn_templateObject, bjorn_templateObject2, bjorn_templateObject3, bjorn_templateObject4, bjorn_templateObject5, bjorn_templateObject6, bjorn_templateObject7, bjorn_templateObject8, bjorn_templateObject9, bjorn_templateObject10, bjorn_templateObject11, bjorn_templateObject12, bjorn_templateObject13, bjorn_templateObject14, bjorn_templateObject15, bjorn_templateObject16, bjorn_templateObject17, bjorn_templateObject18, bjorn_templateObject19, bjorn_templateObject20, bjorn_templateObject21, bjorn_templateObject22, bjorn_templateObject23, bjorn_templateObject24, bjorn_templateObject25, bjorn_templateObject26, bjorn_templateObject27, bjorn_templateObject28, bjorn_templateObject29, bjorn_templateObject30, bjorn_templateObject31, bjorn_templateObject32, bjorn_templateObject33, bjorn_templateObject34, bjorn_templateObject35, bjorn_templateObject36, bjorn_templateObject37, bjorn_templateObject38, bjorn_templateObject39, bjorn_templateObject40, bjorn_templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102;

function bjorn_toConsumableArray(arr) { return bjorn_arrayWithoutHoles(arr) || bjorn_iterableToArray(arr) || bjorn_unsupportedIterableToArray(arr) || bjorn_nonIterableSpread(); }

function bjorn_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function bjorn_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return bjorn_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bjorn_arrayLikeToArray(o, minLen); }

function bjorn_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function bjorn_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return bjorn_arrayLikeToArray(arr); }

function bjorn_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function bjorn_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var BjornModifierType;

(function (BjornModifierType) {
  BjornModifierType[BjornModifierType["MEAT"] = 0] = "MEAT";
  BjornModifierType[BjornModifierType["ITEM"] = 1] = "ITEM";
  BjornModifierType[BjornModifierType["FMWT"] = 2] = "FMWT";
})(BjornModifierType || (BjornModifierType = {}));

var bjornFams = [{
  familiar: (0,dist.$familiar)(bjorn_templateObject || (bjorn_templateObject = bjorn_taggedTemplateLiteral(["Puck Man"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject2 || (bjorn_templateObject2 = bjorn_taggedTemplateLiteral(["yellow pixel"])))),
  probability: 0.25,
  dropPredicate: () => (0,dist.get)("_yellowPixelDropsCrown") < 25
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject3 || (bjorn_templateObject3 = bjorn_taggedTemplateLiteral(["Ms. Puck Man"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject4 || (bjorn_templateObject4 = bjorn_taggedTemplateLiteral(["yellow pixel"])))),
  probability: 0.25,
  dropPredicate: () => (0,dist.get)("_yellowPixelDropsCrown") < 25
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject5 || (bjorn_templateObject5 = bjorn_taggedTemplateLiteral(["Grimstone Golem"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject6 || (bjorn_templateObject6 = bjorn_taggedTemplateLiteral(["grimstone mask"])))),
  probability: 0.5,
  dropPredicate: () => (0,dist.get)("_grimstoneMaskDropsCrown") < 1
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject7 || (bjorn_templateObject7 = bjorn_taggedTemplateLiteral(["Knob Goblin Organ Grinder"]))),
  meatVal: () => 30,
  probability: 1,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 25
  }
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject8 || (bjorn_templateObject8 = bjorn_taggedTemplateLiteral(["Happy Medium"]))),
  meatVal: () => 30,
  probability: 1,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 25
  }
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject9 || (bjorn_templateObject9 = bjorn_taggedTemplateLiteral(["Garbage Fire"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject10 || (bjorn_templateObject10 = bjorn_taggedTemplateLiteral(["burning newspaper"])))),
  probability: 0.5,
  dropPredicate: () => (0,dist.get)("_garbageFireDropsCrown") < 3
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject11 || (bjorn_templateObject11 = bjorn_taggedTemplateLiteral(["Machine Elf"]))),
  meatVal: () => lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(bjorn_templateObject12 || (bjorn_templateObject12 = bjorn_taggedTemplateLiteral(["abstraction: sensation, abstraction: thought, abstraction: action, abstraction: category, abstraction: perception, abstraction: purpose"]))))),
  probability: 0.2,
  dropPredicate: () => (0,dist.get)("_abstractionDropsCrown") < 25
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject13 || (bjorn_templateObject13 = bjorn_taggedTemplateLiteral(["Trick-or-Treating Tot"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject14 || (bjorn_templateObject14 = bjorn_taggedTemplateLiteral(["hoarded candy wad"])))),
  probability: 0.5,
  dropPredicate: () => (0,dist.get)("_hoardedCandyDropsCrown") < 3
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject15 || (bjorn_templateObject15 = bjorn_taggedTemplateLiteral(["Warbear Drone"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject16 || (bjorn_templateObject16 = bjorn_taggedTemplateLiteral(["warbear whosit"])))),
  probability: 1 / 4.5
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject17 || (bjorn_templateObject17 = bjorn_taggedTemplateLiteral(["Li'l Xenomorph"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject18 || (bjorn_templateObject18 = bjorn_taggedTemplateLiteral(["lunar isotope"])))),
  probability: 0.05,
  modifier: {
    type: BjornModifierType.ITEM,
    modifier: 15
  }
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject19 || (bjorn_templateObject19 = bjorn_taggedTemplateLiteral(["Pottery Barn Owl"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject20 || (bjorn_templateObject20 = bjorn_taggedTemplateLiteral(["volcanic ash"])))),
  probability: 0.1
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject21 || (bjorn_templateObject21 = bjorn_taggedTemplateLiteral(["Grim Brother"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject22 || (bjorn_templateObject22 = bjorn_taggedTemplateLiteral(["grim fairy tale"])))),
  probability: 1,
  dropPredicate: () => (0,dist.get)("_grimFairyTaleDropsCrown") < 2
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject23 || (bjorn_templateObject23 = bjorn_taggedTemplateLiteral(["Optimistic Candle"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject24 || (bjorn_templateObject24 = bjorn_taggedTemplateLiteral(["glob of melted wax"])))),
  probability: 1,
  dropPredicate: () => (0,dist.get)("_optimisticCandleDropsCrown") < 3,
  modifier: {
    type: BjornModifierType.ITEM,
    modifier: 15
  }
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject25 || (bjorn_templateObject25 = bjorn_taggedTemplateLiteral(["Adventurous Spelunker"]))),
  meatVal: () => lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(bjorn_templateObject26 || (bjorn_templateObject26 = bjorn_taggedTemplateLiteral(["teflon ore, velcro ore, vinyl ore, cardboard ore, styrofoam ore, bubblewrap ore"]))))),
  probability: 1,
  dropPredicate: () => (0,dist.get)("_oreDropsCrown") < 6,
  modifier: {
    type: BjornModifierType.ITEM,
    modifier: 15
  }
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject27 || (bjorn_templateObject27 = bjorn_taggedTemplateLiteral(["Twitching Space Critter"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject28 || (bjorn_templateObject28 = bjorn_taggedTemplateLiteral(["space beast fur"])))),
  probability: 1,
  dropPredicate: () => (0,dist.get)("_spaceFurDropsCrown") < 1
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject29 || (bjorn_templateObject29 = bjorn_taggedTemplateLiteral(["Party Mouse"]))),
  meatVal: () => 50,

  /*
  The below code is more accurate. However, party mouse is virtually never going to be worthwhile and this causes so many useless mall hits it isn't funny.
     saleValue(
      ...Item.all().filter(
        (booze) =>
          ["decent", "good"].includes(booze.quality) &&
          booze.inebriety > 0 &&
          booze.tradeable &&
          booze.discardable &&
          !$items`glass of "milk", cup of "tea", thermos of "whiskey", Lucky Lindy, Bee's Knees, Sockdollager, Ish Kabibble, Hot Socks, Phonus Balonus, Flivver, Sloppy Jalopy`.includes(
            booze
          )
      )
    ),
    */
  probability: 0.05
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject30 || (bjorn_templateObject30 = bjorn_taggedTemplateLiteral(["Yule Hound"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject31 || (bjorn_templateObject31 = bjorn_taggedTemplateLiteral(["candy cane"])))),
  probability: 1
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject32 || (bjorn_templateObject32 = bjorn_taggedTemplateLiteral(["Gluttonous Green Ghost"]))),
  meatVal: () => lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(bjorn_templateObject33 || (bjorn_templateObject33 = bjorn_taggedTemplateLiteral(["bean burrito, enchanted bean burrito, jumping bean burrito"]))))),
  probability: 1
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject34 || (bjorn_templateObject34 = bjorn_taggedTemplateLiteral(["Reassembled Blackbird"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject35 || (bjorn_templateObject35 = bjorn_taggedTemplateLiteral(["blackberry"])))),
  probability: 1,
  modifier: {
    type: BjornModifierType.ITEM,
    modifier: 10
  }
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject36 || (bjorn_templateObject36 = bjorn_taggedTemplateLiteral(["Reconstituted Crow"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(bjorn_templateObject37 || (bjorn_templateObject37 = bjorn_taggedTemplateLiteral(["blackberry"])))),
  probability: 1,
  modifier: {
    type: BjornModifierType.ITEM,
    modifier: 10
  }
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject38 || (bjorn_templateObject38 = bjorn_taggedTemplateLiteral(["Hunchbacked Minion"]))),
  meatVal: () => lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(bjorn_templateObject39 || (bjorn_templateObject39 = bjorn_taggedTemplateLiteral(["disembodied brain, skeleton bone, skeleton bone, skeleton bone, skeleton bone"]))))),
  probability: 1
}, {
  familiar: (0,dist.$familiar)(bjorn_templateObject40 || (bjorn_templateObject40 = bjorn_taggedTemplateLiteral(["Reanimated Reanimator"]))),
  meatVal: () => lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(bjorn_templateObject41 || (bjorn_templateObject41 = bjorn_taggedTemplateLiteral(["hot wing, broken skull"]))))),
  probability: 1
}, {
  familiar: (0,dist.$familiar)(_templateObject42 || (_templateObject42 = bjorn_taggedTemplateLiteral(["Attention-Deficit Demon"]))),
  meatVal: () => lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(_templateObject43 || (_templateObject43 = bjorn_taggedTemplateLiteral(["chorizo brownies, white chocolate and tomato pizza, carob chunk noodles"]))))),
  probability: 1,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 20
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject44 || (_templateObject44 = bjorn_taggedTemplateLiteral(["Piano Cat"]))),
  meatVal: () => lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(_templateObject45 || (_templateObject45 = bjorn_taggedTemplateLiteral(["beertini, papaya slung, salty slug, tomato daiquiri"]))))),
  probability: 1,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 20
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject46 || (_templateObject46 = bjorn_taggedTemplateLiteral(["Golden Monkey"]))),
  meatVal: () => 100,
  probability: 0.5,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 25
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject47 || (_templateObject47 = bjorn_taggedTemplateLiteral(["Robot Reindeer"]))),
  meatVal: () => lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(_templateObject48 || (_templateObject48 = bjorn_taggedTemplateLiteral(["candy cane, eggnog, fruitcake, gingerbread bugbear"]))))),
  probability: 0.3
}, {
  familiar: (0,dist.$familiar)(_templateObject49 || (_templateObject49 = bjorn_taggedTemplateLiteral(["Stocking Mimic"]))),
  meatVal: () => lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(_templateObject50 || (_templateObject50 = bjorn_taggedTemplateLiteral(["Angry Farmer candy, Cold Hots candy, Rock Pops, Tasty Fun Good rice candy, Wint-O-Fresh mint"]))))),
  probability: 0.3
}, {
  familiar: (0,dist.$familiar)(_templateObject51 || (_templateObject51 = bjorn_taggedTemplateLiteral(["BRICKO chick"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject52 || (_templateObject52 = bjorn_taggedTemplateLiteral(["BRICKO brick"])))),
  probability: 1
}, {
  familiar: (0,dist.$familiar)(_templateObject53 || (_templateObject53 = bjorn_taggedTemplateLiteral(["Cotton Candy Carnie"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject54 || (_templateObject54 = bjorn_taggedTemplateLiteral(["cotton candy pinch"])))),
  probability: 1
}, {
  familiar: (0,dist.$familiar)(_templateObject55 || (_templateObject55 = bjorn_taggedTemplateLiteral(["Untamed Turtle"]))),
  meatVal: () => lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(_templateObject56 || (_templateObject56 = bjorn_taggedTemplateLiteral(["snailmail bits, turtlemail bits, turtle wax"]))))),
  probability: 0.35
}, {
  familiar: (0,dist.$familiar)(_templateObject57 || (_templateObject57 = bjorn_taggedTemplateLiteral(["Astral Badger"]))),
  meatVal: () => 2 * lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(_templateObject58 || (_templateObject58 = bjorn_taggedTemplateLiteral(["spooky mushroom, Knob mushroom, Knoll mushroom"]))))),
  probability: 1
}, {
  familiar: (0,dist.$familiar)(_templateObject59 || (_templateObject59 = bjorn_taggedTemplateLiteral(["Green Pixie"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject60 || (_templateObject60 = bjorn_taggedTemplateLiteral(["bottle of tequila"])))),
  probability: 0.2
}, {
  familiar: (0,dist.$familiar)(_templateObject61 || (_templateObject61 = bjorn_taggedTemplateLiteral(["Angry Goat"]))),
  meatVal: () => (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject62 || (_templateObject62 = bjorn_taggedTemplateLiteral(["goat cheese pizza"])))),
  probability: 1
}, {
  familiar: (0,dist.$familiar)(_templateObject63 || (_templateObject63 = bjorn_taggedTemplateLiteral(["Adorable Seal Larva"]))),
  meatVal: () => lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(_templateObject64 || (_templateObject64 = bjorn_taggedTemplateLiteral(["stench nuggets, spooky nuggets, hot nuggets, cold nuggets, sleaze nuggets"]))))),
  probability: 0.35
}, {
  familiar: (0,dist.$familiar)(_templateObject65 || (_templateObject65 = bjorn_taggedTemplateLiteral(["Ancient Yuletide Troll"]))),
  meatVal: () => lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(_templateObject66 || (_templateObject66 = bjorn_taggedTemplateLiteral(["candy cane, eggnog, fruitcake, gingerbread bugbear"]))))),
  probability: 0.3
}, {
  familiar: (0,dist.$familiar)(_templateObject67 || (_templateObject67 = bjorn_taggedTemplateLiteral(["Sweet Nutcracker"]))),
  meatVal: () => lib/* saleValue.apply */.L0.apply(void 0, bjorn_toConsumableArray((0,dist.$items)(_templateObject68 || (_templateObject68 = bjorn_taggedTemplateLiteral(["candy cane, eggnog, fruitcake, gingerbread bugbear"]))))),
  probability: 0.3
}, {
  familiar: (0,dist.$familiar)(_templateObject69 || (_templateObject69 = bjorn_taggedTemplateLiteral(["Casagnova Gnome"]))),
  meatVal: () => 0,
  probability: 0,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 20
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject70 || (_templateObject70 = bjorn_taggedTemplateLiteral(["Coffee Pixie"]))),
  meatVal: () => 0,
  probability: 0,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 20
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject71 || (_templateObject71 = bjorn_taggedTemplateLiteral(["Dancing Frog"]))),
  meatVal: () => 0,
  probability: 0,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 20
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject72 || (_templateObject72 = bjorn_taggedTemplateLiteral(["Grouper Groupie"]))),
  meatVal: () => 0,
  probability: 0,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 20
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject73 || (_templateObject73 = bjorn_taggedTemplateLiteral(["Hand Turkey"]))),
  meatVal: () => 30,
  probability: 1,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 20
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject74 || (_templateObject74 = bjorn_taggedTemplateLiteral(["Hippo Ballerina"]))),
  meatVal: () => 0,
  probability: 0,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 20
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject75 || (_templateObject75 = bjorn_taggedTemplateLiteral(["Jitterbug"]))),
  meatVal: () => 0,
  probability: 0,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 20
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject76 || (_templateObject76 = bjorn_taggedTemplateLiteral(["Leprechaun"]))),
  meatVal: () => 30,
  probability: 1,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 20
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject77 || (_templateObject77 = bjorn_taggedTemplateLiteral(["Obtuse Angel"]))),
  meatVal: () => 0,
  probability: 0,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 20
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject78 || (_templateObject78 = bjorn_taggedTemplateLiteral(["Psychedelic Bear"]))),
  meatVal: () => 0,
  probability: 0,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 20
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject79 || (_templateObject79 = bjorn_taggedTemplateLiteral(["Robortender"]))),
  meatVal: () => 0,
  probability: 0,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 20
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject80 || (_templateObject80 = bjorn_taggedTemplateLiteral(["Ghost of Crimbo Commerce"]))),
  meatVal: () => 30,
  probability: 1,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 25
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject81 || (_templateObject81 = bjorn_taggedTemplateLiteral(["Hobo Monkey"]))),
  meatVal: () => 0,
  probability: 0,
  modifier: {
    type: BjornModifierType.MEAT,
    modifier: 25
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject82 || (_templateObject82 = bjorn_taggedTemplateLiteral(["Rockin' Robin"]))),
  meatVal: () => 60,
  probability: 1,
  modifier: {
    type: BjornModifierType.ITEM,
    modifier: 15
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject83 || (_templateObject83 = bjorn_taggedTemplateLiteral(["Feral Kobold"]))),
  meatVal: () => 30,
  probability: 1,
  modifier: {
    type: BjornModifierType.ITEM,
    modifier: 15
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject84 || (_templateObject84 = bjorn_taggedTemplateLiteral(["Oily Woim"]))),
  meatVal: () => 30,
  probability: 1,
  modifier: {
    type: BjornModifierType.ITEM,
    modifier: 10
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject85 || (_templateObject85 = bjorn_taggedTemplateLiteral(["Cat Burglar"]))),
  meatVal: () => 0,
  probability: 0,
  modifier: {
    type: BjornModifierType.ITEM,
    modifier: 10
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject86 || (_templateObject86 = bjorn_taggedTemplateLiteral(["Misshapen Animal Skeleton"]))),
  meatVal: () => 30,
  probability: 1,
  modifier: {
    type: BjornModifierType.FMWT,
    modifier: 5
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject87 || (_templateObject87 = bjorn_taggedTemplateLiteral(["Gelatinous Cubeling"]))),
  meatVal: () => 0,
  probability: 0,
  modifier: {
    type: BjornModifierType.FMWT,
    modifier: 5
  }
}, {
  familiar: (0,dist.$familiar)(_templateObject88 || (_templateObject88 = bjorn_taggedTemplateLiteral(["Frozen Gravy Fairy"]))),
  // drops a cold nugget every combat, 5 of which can be used to make a cold wad
  meatVal: () => Math.max(0.2 * (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject89 || (_templateObject89 = bjorn_taggedTemplateLiteral(["cold wad"])))), (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject90 || (_templateObject90 = bjorn_taggedTemplateLiteral(["cold nuggets"]))))),
  probability: 1
}, {
  familiar: (0,dist.$familiar)(_templateObject91 || (_templateObject91 = bjorn_taggedTemplateLiteral(["Stinky Gravy Fairy"]))),
  // drops a stench nugget every combat, 5 of which can be used to make a stench wad
  meatVal: () => Math.max(0.2 * (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject92 || (_templateObject92 = bjorn_taggedTemplateLiteral(["stench wad"])))), (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject93 || (_templateObject93 = bjorn_taggedTemplateLiteral(["stench nuggets"]))))),
  probability: 1
}, {
  familiar: (0,dist.$familiar)(_templateObject94 || (_templateObject94 = bjorn_taggedTemplateLiteral(["Sleazy Gravy Fairy"]))),
  // drops a sleaze nugget every combat, 5 of which can be used to make a sleaze wad
  meatVal: () => Math.max(0.2 * (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject95 || (_templateObject95 = bjorn_taggedTemplateLiteral(["sleaze wad"])))), (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject96 || (_templateObject96 = bjorn_taggedTemplateLiteral(["sleaze nuggets"]))))),
  probability: 1
}, {
  familiar: (0,dist.$familiar)(_templateObject97 || (_templateObject97 = bjorn_taggedTemplateLiteral(["Spooky Gravy Fairy"]))),
  // drops a spooky nugget every combat, 5 of which can be used to make a spooky wad
  meatVal: () => Math.max(0.2 * (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject98 || (_templateObject98 = bjorn_taggedTemplateLiteral(["spooky wad"])))), (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject99 || (_templateObject99 = bjorn_taggedTemplateLiteral(["spooky nuggets"]))))),
  probability: 1
}, {
  familiar: (0,dist.$familiar)(_templateObject100 || (_templateObject100 = bjorn_taggedTemplateLiteral(["Flaming Gravy Fairy"]))),
  // drops a hot nugget every combat, 5 of which can be used to make a hot wad
  meatVal: () => Math.max(0.2 * (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject101 || (_templateObject101 = bjorn_taggedTemplateLiteral(["hot wad"])))), (0,lib/* saleValue */.L0)((0,dist.$item)(_templateObject102 || (_templateObject102 = bjorn_taggedTemplateLiteral(["hot nuggets"]))))),
  probability: 1
}].filter(bjornFam => (0,dist.have)(bjornFam.familiar));
var bjornLists = new Map();

function generateBjornList(mode) {
  var additionalValue = familiar => {
    if (!familiar.modifier) return 0;
    var meatVal = [lib/* BonusEquipMode.DMT */.Zj.DMT, lib/* BonusEquipMode.FREE */.Zj.FREE].includes(mode) ? 0 : lib/* baseMeat */.Vq + (mode === lib/* BonusEquipMode.EMBEZZLER */.Zj.EMBEZZLER ? 750 : 0);
    var itemVal = mode === lib/* BonusEquipMode.BARF */.Zj.BARF ? 72 : 0;
    if (familiar.modifier.type === BjornModifierType.MEAT) return familiar.modifier.modifier * meatVal / 100;
    if (familiar.modifier.type === BjornModifierType.ITEM) return familiar.modifier.modifier * itemVal / 100;

    if (familiar.modifier.type === BjornModifierType.FMWT) {
      return familiar.modifier.modifier * (0,lib/* gnomeWeightValue */.EO)();
    }

    return 0;
  };

  return bjorn_toConsumableArray(bjornFams).sort((a, b) => (!b.dropPredicate || b.dropPredicate() && ![lib/* BonusEquipMode.EMBEZZLER */.Zj.EMBEZZLER, lib/* BonusEquipMode.DMT */.Zj.DMT].includes(mode) ? b.meatVal() * b.probability : 0) + additionalValue(b) - ((!a.dropPredicate || a.dropPredicate() && ![lib/* BonusEquipMode.EMBEZZLER */.Zj.EMBEZZLER, lib/* BonusEquipMode.DMT */.Zj.DMT].includes(mode) ? a.meatVal() * a.probability : 0) + additionalValue(a)));
}

function bjorn_pickBjorn() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : lib/* BonusEquipMode.FREE */.Zj.FREE;

  if (!bjornLists.has(mode)) {
    bjornLists.set(mode, generateBjornList(mode));
  }

  var bjornList = bjornLists.get(mode);

  if (bjornList) {
    while (bjornList[0].dropPredicate && !bjornList[0].dropPredicate()) {
      bjornList.shift();
    }

    if ((0,external_kolmafia_.myFamiliar)() !== bjornList[0].familiar) return bjornList[0];

    while (bjornList[1].dropPredicate && !bjornList[1].dropPredicate()) {
      bjornList.splice(1, 1);
    }

    return bjornList[1];
  }

  throw new Error("Something went wrong while selecting a familiar to bjornify or crownulate");
}
// EXTERNAL MODULE: ./src/globalvars.ts
var globalvars = __webpack_require__(7945);
;// CONCATENATED MODULE: ./src/outfit.ts
var outfit_templateObject, outfit_templateObject2, outfit_templateObject3, outfit_templateObject4, outfit_templateObject5, outfit_templateObject6, outfit_templateObject7, outfit_templateObject8, outfit_templateObject9, outfit_templateObject10, outfit_templateObject11, outfit_templateObject12, outfit_templateObject13, outfit_templateObject14, outfit_templateObject15, outfit_templateObject16, outfit_templateObject17, outfit_templateObject18, outfit_templateObject19, outfit_templateObject20, outfit_templateObject21, outfit_templateObject22, outfit_templateObject23, outfit_templateObject24, outfit_templateObject25, outfit_templateObject26, outfit_templateObject27, outfit_templateObject28, outfit_templateObject29, outfit_templateObject30, outfit_templateObject31, outfit_templateObject32, outfit_templateObject33, outfit_templateObject34, outfit_templateObject35, outfit_templateObject36, outfit_templateObject37, outfit_templateObject38, outfit_templateObject39, outfit_templateObject40, outfit_templateObject41, outfit_templateObject42, outfit_templateObject43, outfit_templateObject44, outfit_templateObject45, outfit_templateObject46, outfit_templateObject47, outfit_templateObject48, outfit_templateObject49, outfit_templateObject50, outfit_templateObject51, outfit_templateObject52, outfit_templateObject53, outfit_templateObject54, outfit_templateObject55, outfit_templateObject56, outfit_templateObject57, outfit_templateObject58, outfit_templateObject59, outfit_templateObject60, outfit_templateObject61, outfit_templateObject62, outfit_templateObject63;

function outfit_toConsumableArray(arr) { return outfit_arrayWithoutHoles(arr) || outfit_iterableToArray(arr) || outfit_unsupportedIterableToArray(arr) || outfit_nonIterableSpread(); }

function outfit_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function outfit_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return outfit_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return outfit_arrayLikeToArray(o, minLen); }

function outfit_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function outfit_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return outfit_arrayLikeToArray(arr); }

function outfit_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function outfit_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var bestAdventuresFromPants = Item.all().filter(item => (0,external_kolmafia_.toSlot)(item) === (0,dist.$slot)(outfit_templateObject || (outfit_templateObject = outfit_taggedTemplateLiteral(["pants"]))) && (0,dist.have)(item) && (0,external_kolmafia_.numericModifier)(item, "Adventures") > 0).map(pants => (0,external_kolmafia_.numericModifier)(pants, "Adventures")).sort((a, b) => b - a)[0] || 0;
function freeFightOutfit() {
  var requirements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var equipMode = (0,external_kolmafia_.myFamiliar)() === (0,dist.$familiar)(outfit_templateObject2 || (outfit_templateObject2 = outfit_taggedTemplateLiteral(["Machine Elf"]))) ? lib/* BonusEquipMode.DMT */.Zj.DMT : lib/* BonusEquipMode.FREE */.Zj.FREE;
  var bjornChoice = bjorn_pickBjorn(equipMode);
  var forceEquip = [];

  if ((0,external_kolmafia_.myFamiliar)() === (0,dist.$familiar)(outfit_templateObject3 || (outfit_templateObject3 = outfit_taggedTemplateLiteral(["Reagnimated Gnome"])))) {
    // It is assumed you have the kgnee because I added gnome equips to dailies.
    forceEquip.push((0,dist.$item)(outfit_templateObject4 || (outfit_templateObject4 = outfit_taggedTemplateLiteral(["gnomish housemaid's kgnee"]))));
  }

  var compiledRequirements = lib/* Requirement.merge */.nb.merge([].concat(outfit_toConsumableArray(requirements), [new lib/* Requirement */.nb((0,external_kolmafia_.myFamiliar)() === (0,dist.$familiar)(outfit_templateObject5 || (outfit_templateObject5 = outfit_taggedTemplateLiteral(["Reagnimated Gnome"]))) ? ["".concat((0,lib/* gnomeWeightValue */.EO)().toFixed(1), " Familiar Weight")] : (0,external_kolmafia_.myFamiliar)() === (0,dist.$familiar)(outfit_templateObject6 || (outfit_templateObject6 = outfit_taggedTemplateLiteral(["Pocket Professor"]))) ? ["Familiar Experience"] : ["Familiar Weight"], {
    bonusEquip: new Map([].concat(outfit_toConsumableArray(dropsItems(equipMode)), outfit_toConsumableArray(pantsgiving()), outfit_toConsumableArray(cheeses())))
  })]));
  var bjornAlike = (0,dist.have)((0,dist.$item)(outfit_templateObject7 || (outfit_templateObject7 = outfit_taggedTemplateLiteral(["Buddy Bjorn"])))) && !(compiledRequirements.maximizeOptions_.forceEquip && compiledRequirements.maximizeOptions_.forceEquip.some(equipment => (0,external_kolmafia_.toSlot)(equipment) === (0,dist.$slot)(outfit_templateObject8 || (outfit_templateObject8 = outfit_taggedTemplateLiteral(["back"]))))) ? (0,dist.$item)(outfit_templateObject9 || (outfit_templateObject9 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))) : (0,dist.$item)(outfit_templateObject10 || (outfit_templateObject10 = outfit_taggedTemplateLiteral(["Crown of Thrones"])));
  var finalRequirements = compiledRequirements.merge(new lib/* Requirement */.nb([], {
    forceEquip: forceEquip,
    bonusEquip: new Map([[bjornAlike, !bjornChoice.dropPredicate || bjornChoice.dropPredicate() ? bjornChoice.meatVal() * bjornChoice.probability : 0]]),
    preventEquip: [].concat(outfit_toConsumableArray(bjornAlike === (0,dist.$item)(outfit_templateObject11 || (outfit_templateObject11 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))) ? (0,dist.$items)(outfit_templateObject12 || (outfit_templateObject12 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))) : (0,dist.$items)(outfit_templateObject13 || (outfit_templateObject13 = outfit_taggedTemplateLiteral(["Buddy Bjorn"])))), [(0,dist.$item)(outfit_templateObject14 || (outfit_templateObject14 = outfit_taggedTemplateLiteral(["Snow Suit"])))]),
    preventSlot: (0,dist.$slots)(outfit_templateObject15 || (outfit_templateObject15 = outfit_taggedTemplateLiteral(["crown-of-thrones, buddy-bjorn"])))
  }));
  (0,dist.maximizeCached)(finalRequirements.maximizeParameters(), finalRequirements.maximizeOptions());
  if ((0,external_kolmafia_.haveEquipped)((0,dist.$item)(outfit_templateObject16 || (outfit_templateObject16 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))))) (0,external_kolmafia_.bjornifyFamiliar)(bjornChoice.familiar);
  if ((0,external_kolmafia_.haveEquipped)((0,dist.$item)(outfit_templateObject17 || (outfit_templateObject17 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))))) (0,external_kolmafia_.enthroneFamiliar)(bjornChoice.familiar);
  if ((0,external_kolmafia_.haveEquipped)((0,dist.$item)(outfit_templateObject18 || (outfit_templateObject18 = outfit_taggedTemplateLiteral(["Snow Suit"])))) && (0,dist.get)("snowsuit") !== "nose") (0,external_kolmafia_.cliExecute)("snowsuit nose");
}
function refreshLatte() {
  // Refresh unlocked latte ingredients
  if ((0,dist.have)((0,dist.$item)(outfit_templateObject19 || (outfit_templateObject19 = outfit_taggedTemplateLiteral(["latte lovers member's mug"]))))) {
    (0,external_kolmafia_.visitUrl)("main.php?latte=1", false);
  }

  return (0,dist.have)((0,dist.$item)(outfit_templateObject20 || (outfit_templateObject20 = outfit_taggedTemplateLiteral(["latte lovers member's mug"]))));
}
var nepDefaultRequirement = new lib/* Requirement */.nb(["1 Item Drop"], {});
function nepOutfit() {
  var requirement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : nepDefaultRequirement;
  var extraObjectives = [];
  var forceEquip = [];
  var equipMode = getCounters("Digitize Monster", 0, 0) === "" ? BonusEquipMode.BARF : BonusEquipMode.FREE;
  var bjornChoice = pickBjorn(equipMode);

  if (myInebriety() > inebrietyLimit()) {
    forceEquip.push($item(outfit_templateObject21 || (outfit_templateObject21 = outfit_taggedTemplateLiteral(["Drunkula's wineglass"]))));
  } else {
    if (getKramcoWandererChance() > 0.99 && have($item(outfit_templateObject22 || (outfit_templateObject22 = outfit_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) {
      forceEquip.push($item(outfit_templateObject23 || (outfit_templateObject23 = outfit_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
    }

    if (have($item(outfit_templateObject24 || (outfit_templateObject24 = outfit_taggedTemplateLiteral(["protonic accelerator pack"])))) && get("questPAGhost") === "unstarted" && get("nextParanormalActivity") <= totalTurnsPlayed() && !forceEquip.includes($item(outfit_templateObject25 || (outfit_templateObject25 = outfit_taggedTemplateLiteral(["ice nine"]))))) {
      forceEquip.push($item(outfit_templateObject26 || (outfit_templateObject26 = outfit_taggedTemplateLiteral(["protonic accelerator pack"]))));
    }
  }

  if (myFamiliar() === $familiar(outfit_templateObject27 || (outfit_templateObject27 = outfit_taggedTemplateLiteral(["Obtuse Angel"])))) {
    forceEquip.push($item(outfit_templateObject28 || (outfit_templateObject28 = outfit_taggedTemplateLiteral(["quake of arrows"]))));
    if (!have($item(outfit_templateObject29 || (outfit_templateObject29 = outfit_taggedTemplateLiteral(["quake of arrows"]))))) retrieveItem($item(outfit_templateObject30 || (outfit_templateObject30 = outfit_taggedTemplateLiteral(["quake of arrows"]))));
  }

  if (myFamiliar() === $familiar(outfit_templateObject31 || (outfit_templateObject31 = outfit_taggedTemplateLiteral(["Reagnimated Gnome"])))) {
    // It is assumed you have the kgnee because I added gnome equips to dailies.
    forceEquip.push($item(outfit_templateObject32 || (outfit_templateObject32 = outfit_taggedTemplateLiteral(["gnomish housemaid's kgnee"]))));
    extraObjectives.push("".concat(gnomeWeightValue().toFixed(1), " Familiar Weight"));
  }

  var bjornAlike = have($item(outfit_templateObject33 || (outfit_templateObject33 = outfit_taggedTemplateLiteral(["Buddy Bjorn"])))) && !forceEquip.some(item => toSlot(item) === $slot(outfit_templateObject34 || (outfit_templateObject34 = outfit_taggedTemplateLiteral(["back"])))) ? $item(outfit_templateObject35 || (outfit_templateObject35 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))) : $item(outfit_templateObject36 || (outfit_templateObject36 = outfit_taggedTemplateLiteral(["Crown of Thrones"])));
  var compiledRequirements = requirement.merge(new Requirement(extraObjectives, {
    forceEquip: forceEquip,
    bonusEquip: new Map([].concat(outfit_toConsumableArray(dropsItems(equipMode)), outfit_toConsumableArray(pantsgiving()), outfit_toConsumableArray(cheeses()), [[bjornAlike, !bjornChoice.dropPredicate || bjornChoice.dropPredicate() ? bjornChoice.meatVal() * bjornChoice.probability : 0], [$item(outfit_templateObject37 || (outfit_templateObject37 = outfit_taggedTemplateLiteral(["Snow Suit"]))), -500] // This should ensure we only equip on last Bander stage.
    ])),
    preventEquip: [].concat(outfit_toConsumableArray($items(outfit_templateObject38 || (outfit_templateObject38 = outfit_taggedTemplateLiteral(["broken champagne bottle, unwrapped knock-off retro superhero cape"])))), [bjornAlike === $item(outfit_templateObject39 || (outfit_templateObject39 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))) ? $item(outfit_templateObject40 || (outfit_templateObject40 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))) : $item(outfit_templateObject41 || (outfit_templateObject41 = outfit_taggedTemplateLiteral(["Buddy Bjorn"])))]),
    preventSlot: $slots(outfit_templateObject42 || (outfit_templateObject42 = outfit_taggedTemplateLiteral(["crown-of-thrones, buddy-bjorn"])))
  }));
  maximizeCached(compiledRequirements.maximizeParameters(), compiledRequirements.maximizeOptions());

  if (equippedAmount($item(outfit_templateObject43 || (outfit_templateObject43 = outfit_taggedTemplateLiteral(["ice nine"])))) > 0) {
    equip($item(outfit_templateObject44 || (outfit_templateObject44 = outfit_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))));
  }

  if (haveEquipped($item(outfit_templateObject45 || (outfit_templateObject45 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))))) bjornifyFamiliar(bjornChoice.familiar);
  if (haveEquipped($item(outfit_templateObject46 || (outfit_templateObject46 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))))) enthroneFamiliar(bjornChoice.familiar);
  if (haveEquipped($item(outfit_templateObject47 || (outfit_templateObject47 = outfit_taggedTemplateLiteral(["Snow Suit"])))) && get("snowsuit") !== "nose") cliExecute("snowsuit nose");
}
var pantsgivingBonuses = new Map();

function pantsgiving() {
  if (!(0,dist.have)((0,dist.$item)(outfit_templateObject48 || (outfit_templateObject48 = outfit_taggedTemplateLiteral(["Pantsgiving"]))))) return new Map();
  var count = (0,dist.get)("_pantsgivingCount");
  var turnArray = [5, 50, 500, 5000];
  var index = (0,external_kolmafia_.myFullness)() === (0,external_kolmafia_.fullnessLimit)() ? (0,dist.get)("_pantsgivingFullness") : turnArray.findIndex(x => count < x);
  var turns = turnArray[index] || 50000;
  if (turns - count > (0,globalvars/* estimatedTurns */.A)()) return new Map();
  var cachedBonus = pantsgivingBonuses.get(turns);
  if (cachedBonus) return new Map([[(0,dist.$item)(outfit_templateObject49 || (outfit_templateObject49 = outfit_taggedTemplateLiteral(["Pantsgiving"]))), cachedBonus]]);
  var fullnessValue = (0,dist.get)("valueOfAdventure") * 10 - ((0,external_kolmafia_.mallPrice)((0,dist.$item)(outfit_templateObject50 || (outfit_templateObject50 = outfit_taggedTemplateLiteral(["devil hair pasta"])))) + (0,external_kolmafia_.mallPrice)((0,dist.$item)(outfit_templateObject51 || (outfit_templateObject51 = outfit_taggedTemplateLiteral(["Special Seasoning"])))));
  var pantsgivingBonus = fullnessValue / (turns * 0.9);
  pantsgivingBonuses.set(turns, pantsgivingBonus);
  return new Map([[(0,dist.$item)(outfit_templateObject52 || (outfit_templateObject52 = outfit_taggedTemplateLiteral(["Pantsgiving"]))), pantsgivingBonus]]);
}

var haveSomeCheese = (0,dist.getFoldGroup)((0,dist.$item)(outfit_templateObject53 || (outfit_templateObject53 = outfit_taggedTemplateLiteral(["stinky cheese diaper"])))).some(item => (0,dist.have)(item));

function cheeses() {
  return haveSomeCheese && !globalvars/* globalOptions.ascending */.X.ascending && (0,dist.get)("_stinkyCheeseCount") < 100 && (0,globalvars/* estimatedTurns */.A)() >= 100 - (0,dist.get)("_stinkyCheeseCount") ? new Map((0,dist.getFoldGroup)((0,dist.$item)(outfit_templateObject54 || (outfit_templateObject54 = outfit_taggedTemplateLiteral(["stinky cheese diaper"])))).map(item => [item, (0,dist.get)("valueOfAdventure") * (10 - bestAdventuresFromPants) * (1 / 100)])) : [];
}

function snowSuit(equipMode) {
  // Ignore for EMBEZZLER
  // Ignore for DMT, assuming mafia might get confused about the drop by the weird combats
  if (!(0,dist.have)((0,dist.$item)(outfit_templateObject55 || (outfit_templateObject55 = outfit_taggedTemplateLiteral(["Snow Suit"])))) || (0,dist.get)("_carrotNoseDrops") >= 3 || [lib/* BonusEquipMode.EMBEZZLER */.Zj.EMBEZZLER, lib/* BonusEquipMode.DMT */.Zj.DMT].some(mode => mode === equipMode)) return new Map();
  return new Map([[(0,dist.$item)(outfit_templateObject56 || (outfit_templateObject56 = outfit_taggedTemplateLiteral(["Snow Suit"]))), (0,lib/* saleValue */.L0)((0,dist.$item)(outfit_templateObject57 || (outfit_templateObject57 = outfit_taggedTemplateLiteral(["carrot nose"])))) / 10]]);
}

function dropsItems(equipMode) {
  var isFree = [lib/* BonusEquipMode.FREE */.Zj.FREE, lib/* BonusEquipMode.DMT */.Zj.DMT].includes(equipMode);
  return new Map([[(0,dist.$item)(outfit_templateObject58 || (outfit_templateObject58 = outfit_taggedTemplateLiteral(["familiar scrapbook"]))), 50], [(0,dist.$item)(outfit_templateObject59 || (outfit_templateObject59 = outfit_taggedTemplateLiteral(["mafia thumb ring"]))), !isFree ? 1000 : 0], [(0,dist.$item)(outfit_templateObject60 || (outfit_templateObject60 = outfit_taggedTemplateLiteral(["lucky gold ring"]))), 400], [(0,dist.$item)(outfit_templateObject61 || (outfit_templateObject61 = outfit_taggedTemplateLiteral(["Mr. Cheeng's spectacles"]))), 250], [(0,dist.$item)(outfit_templateObject62 || (outfit_templateObject62 = outfit_taggedTemplateLiteral(["pantogram pants"]))), (0,dist.get)("_pantogramModifier").includes("Drops Items") ? 100 : 0], [(0,dist.$item)(outfit_templateObject63 || (outfit_templateObject63 = outfit_taggedTemplateLiteral(["Mr. Screege's spectacles"]))), 180]].concat(outfit_toConsumableArray(snowSuit(equipMode))));
}
;// CONCATENATED MODULE: ./src/dailies.ts
var dailies_templateObject, dailies_templateObject2, dailies_templateObject3, dailies_templateObject4, dailies_templateObject5, dailies_templateObject6, dailies_templateObject7, dailies_templateObject8, dailies_templateObject9, dailies_templateObject10, dailies_templateObject11, dailies_templateObject12, dailies_templateObject13, dailies_templateObject14, dailies_templateObject15, dailies_templateObject16, dailies_templateObject17, dailies_templateObject18, dailies_templateObject19, dailies_templateObject20, dailies_templateObject21, dailies_templateObject22, dailies_templateObject23, dailies_templateObject24, dailies_templateObject25, dailies_templateObject26, dailies_templateObject27, dailies_templateObject28, dailies_templateObject29, dailies_templateObject30, dailies_templateObject31, dailies_templateObject32, dailies_templateObject33, dailies_templateObject34, dailies_templateObject35, dailies_templateObject36, dailies_templateObject37, dailies_templateObject38, dailies_templateObject39, dailies_templateObject40, dailies_templateObject41, dailies_templateObject42, dailies_templateObject43, dailies_templateObject44, dailies_templateObject45, dailies_templateObject46, dailies_templateObject47, dailies_templateObject48, dailies_templateObject49, dailies_templateObject50, dailies_templateObject51, dailies_templateObject52, dailies_templateObject53, dailies_templateObject54, dailies_templateObject55, dailies_templateObject56, dailies_templateObject57, dailies_templateObject58, dailies_templateObject59, dailies_templateObject60, dailies_templateObject61, dailies_templateObject62, dailies_templateObject63, dailies_templateObject64, dailies_templateObject65, dailies_templateObject66, dailies_templateObject67, dailies_templateObject68, dailies_templateObject69, dailies_templateObject70, dailies_templateObject71, dailies_templateObject72, dailies_templateObject73, dailies_templateObject74, dailies_templateObject75, dailies_templateObject76, dailies_templateObject77, dailies_templateObject78, dailies_templateObject79, dailies_templateObject80, dailies_templateObject81, dailies_templateObject82, dailies_templateObject83, dailies_templateObject84, dailies_templateObject85, dailies_templateObject86, dailies_templateObject87, dailies_templateObject88;

function dailies_toConsumableArray(arr) { return dailies_arrayWithoutHoles(arr) || dailies_iterableToArray(arr) || dailies_unsupportedIterableToArray(arr) || dailies_nonIterableSpread(); }

function dailies_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function dailies_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function dailies_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return dailies_arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || dailies_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function dailies_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = dailies_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function dailies_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dailies_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dailies_arrayLikeToArray(o, minLen); }

function dailies_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function dailies_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







function dailySetup() {
  getGnomeGear();
  voterSetup();
  martini();
  extrude();
  chateauDesk();
  gaze();
  configureGear();
  horse();
  prepFamiliars();
  configureMisc();
  volcanoDailies();
  cheat();
  tomeSummons();
  gin();
  internetMemeShop();
  pickTea();
  refreshLatte();
  if ((0,external_kolmafia_.myInebriety)() > (0,external_kolmafia_.inebrietyLimit)()) return;
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(dailies_templateObject || (dailies_templateObject = dailies_taggedTemplateLiteral(["seal tooth"]))));
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(dailies_templateObject2 || (dailies_templateObject2 = dailies_taggedTemplateLiteral(["The Jokester's gun"]))));
  (0,external_kolmafia_.putCloset)((0,external_kolmafia_.itemAmount)((0,dist.$item)(dailies_templateObject3 || (dailies_templateObject3 = dailies_taggedTemplateLiteral(["hobo nickel"])))), (0,dist.$item)(dailies_templateObject4 || (dailies_templateObject4 = dailies_taggedTemplateLiteral(["hobo nickel"]))));
  (0,external_kolmafia_.putCloset)((0,external_kolmafia_.itemAmount)((0,dist.$item)(dailies_templateObject5 || (dailies_templateObject5 = dailies_taggedTemplateLiteral(["sand dollar"])))), (0,dist.$item)(dailies_templateObject6 || (dailies_templateObject6 = dailies_taggedTemplateLiteral(["sand dollar"]))));
  (0,external_kolmafia_.putCloset)((0,external_kolmafia_.itemAmount)((0,dist.$item)(dailies_templateObject7 || (dailies_templateObject7 = dailies_taggedTemplateLiteral(["4-d camera"])))), (0,dist.$item)(dailies_templateObject8 || (dailies_templateObject8 = dailies_taggedTemplateLiteral(["4-d camera"]))));
  (0,external_kolmafia_.putCloset)((0,external_kolmafia_.itemAmount)((0,dist.$item)(dailies_templateObject9 || (dailies_templateObject9 = dailies_taggedTemplateLiteral(["unfinished ice sculpture"])))), (0,dist.$item)(dailies_templateObject10 || (dailies_templateObject10 = dailies_taggedTemplateLiteral(["unfinished ice sculpture"]))));
}

function getGnomeGear() {
  if (!(0,dist.have)((0,dist.$familiar)(dailies_templateObject11 || (dailies_templateObject11 = dailies_taggedTemplateLiteral(["Reagnimated Gnome"]))))) return;
  (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(dailies_templateObject12 || (dailies_templateObject12 = dailies_taggedTemplateLiteral(["Reagnimated Gnome"]))));
  var gnomeGear = (0,dist.$items)(dailies_templateObject13 || (dailies_templateObject13 = dailies_taggedTemplateLiteral(["gnomish housemaid's kgnee, gnomish coal miner's lung, gnomish athlete's foot, gnomish tennis elbow, gnomish swimmer's ears"])));
  gnomeGear.forEach(gearItem => {
    if ((0,dist.have)(gearItem)) return;
    var selection = (0,external_kolmafia_.toInt)(gearItem) - (0,external_kolmafia_.toInt)((0,dist.$item)(dailies_templateObject14 || (dailies_templateObject14 = dailies_taggedTemplateLiteral(["gnomish swimmer's ears"])))) + 1;
    (0,external_kolmafia_.visitUrl)("arena.php");
    (0,external_kolmafia_.runChoice)(selection);
  });
  return;
}

function voterSetup() {
  if ((0,dist.have)((0,dist.$item)(dailies_templateObject15 || (dailies_templateObject15 = dailies_taggedTemplateLiteral(["\"I Voted!\" sticker"])))) || !((0,dist.get)("voteAlways") || (0,dist.get)("_voteToday"))) return;
  (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
  var votingMonsterPriority = ["terrible mutant", "angry ghost", "government bureaucrat", "annoyed snake", "slime blob"];
  var initPriority = new Map([["Item Drop: +15", 10], ["Meat Drop: +30", 9], ["Familiar Experience: +2", 8], ["Adventures: +1", 7], ["Monster Level: +10", 5], ["".concat((0,external_kolmafia_.myPrimestat)(), " Percent: +25"), 3], ["Experience (".concat((0,external_kolmafia_.myPrimestat)(), "): +4"), 2], ["Meat Drop: -30", -2], ["Item Drop: -15", -2], ["Familiar Experience: -2", -2]]);
  var monsterVote = votingMonsterPriority.indexOf((0,dist.get)("_voteMonster1")) < votingMonsterPriority.indexOf((0,dist.get)("_voteMonster2")) ? 1 : 2;
  var voteLocalPriorityArr = [[0, initPriority.get((0,dist.get)("_voteLocal1")) || ((0,dist.get)("_voteLocal1").indexOf("-") === -1 ? 1 : -1)], [1, initPriority.get((0,dist.get)("_voteLocal2")) || ((0,dist.get)("_voteLocal2").indexOf("-") === -1 ? 1 : -1)], [2, initPriority.get((0,dist.get)("_voteLocal3")) || ((0,dist.get)("_voteLocal3").indexOf("-") === -1 ? 1 : -1)], [3, initPriority.get((0,dist.get)("_voteLocal4")) || ((0,dist.get)("_voteLocal4").indexOf("-") === -1 ? 1 : -1)]];
  var bestVotes = voteLocalPriorityArr.sort((a, b) => b[1] - a[1]);
  var firstInit = bestVotes[0][0];
  var secondInit = bestVotes[1][0];
  (0,external_kolmafia_.visitUrl)("choice.php?option=1&whichchoice=1331&g=".concat(monsterVote, "&local[]=").concat(firstInit, "&local[]=").concat(secondInit));
}

function configureGear() {
  if (!(0,dist.have)((0,dist.$item)(dailies_templateObject16 || (dailies_templateObject16 = dailies_taggedTemplateLiteral(["luck incense"])))) && (0,dist.have)((0,dist.$familiar)(dailies_templateObject17 || (dailies_templateObject17 = dailies_taggedTemplateLiteral(["Mu"]))))) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(dailies_templateObject18 || (dailies_templateObject18 = dailies_taggedTemplateLiteral(["Mu"]))));
    (0,external_kolmafia_.use)((0,dist.$item)(dailies_templateObject19 || (dailies_templateObject19 = dailies_taggedTemplateLiteral(["box of Familiar Jacks"]))));
  }

  if ((0,dist.have)((0,dist.$item)(dailies_templateObject20 || (dailies_templateObject20 = dailies_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))) && (0,dist.get)("_saberMod") === 0) {
    // Get familiar weight.
    (0,external_kolmafia_.visitUrl)("main.php?action=may4");
    (0,external_kolmafia_.runChoice)(4);
  }

  if ((0,dist.have)((0,dist.$item)(dailies_templateObject21 || (dailies_templateObject21 = dailies_taggedTemplateLiteral(["Bastille Battalion control rig"])))) && (0,dist.get)("_bastilleGames") === 0) {
    (0,external_kolmafia_.cliExecute)("bastille myst brutalist gesture");
  }
}

function prepFamiliars() {
  /* if (have($familiar`Robortender`)) {
    for (const drink of $items`Newark, drive-by shooting, Feliz Navidad, single entendre, Bloody Nora`) {
      if (get("_roboDrinks").includes(drink.name)) continue;
      useFamiliar($familiar`Robortender`);
      if (itemAmount(drink) === 0) retrieveItem(1, drink);
      print(`Feeding robortender ${drink}.`, "blue");
      visitUrl(`inventory.php?action=robooze&which=1&whichitem=${toInt(drink)}`);
    }
  } */
  if ((0,dist.have)((0,dist.$item)(dailies_templateObject22 || (dailies_templateObject22 = dailies_taggedTemplateLiteral(["mumming trunk"])))) && !(0,dist.get)("_mummeryMods").includes("Item Drop")) {
    (0,external_kolmafia_.useFamiliar)((0,dist.have)((0,dist.$familiar)(dailies_templateObject23 || (dailies_templateObject23 = dailies_taggedTemplateLiteral(["Reagnimated Gnome"])))) ? (0,dist.$familiar)(dailies_templateObject24 || (dailies_templateObject24 = dailies_taggedTemplateLiteral(["Reagnimated Gnome"]))) : fairyFamiliar());
    (0,external_kolmafia_.cliExecute)("mummery item");
  }

  if ((0,dist.get)("_feastUsed") === 0) {
    withStash((0,dist.$items)(dailies_templateObject25 || (dailies_templateObject25 = dailies_taggedTemplateLiteral(["moveable feast"]))), () => {
      if ((0,dist.have)((0,dist.$item)(dailies_templateObject26 || (dailies_templateObject26 = dailies_taggedTemplateLiteral(["moveable feast"]))))) (0,dist.$familiars)(dailies_templateObject27 || (dailies_templateObject27 = dailies_taggedTemplateLiteral(["Pocket Professor, Frumious Bandersnatch, Pair of Stomping Boots, Cat Burglar, Reagnimated Gnome"]))).forEach(lib/* tryFeast */.j0);
    });
  }
}

function horse() {
  (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_right");

  if ((0,dist.get)("horseryAvailable") && (0,dist.get)("_horsery") !== "dark horse") {
    (0,external_kolmafia_.cliExecute)("horsery dark");
  }
}

function configureMisc() {
  if (dist.SourceTerminal.have()) {
    if ((0,dist.get)("sourceTerminalEnquiry") !== "familiar.enq") {
      dist.SourceTerminal.enquiry((0,dist.$effect)(dailies_templateObject28 || (dailies_templateObject28 = dailies_taggedTemplateLiteral(["familiar.enq"]))));
    }
  }

  if ((0,dist.have)((0,dist.$item)(dailies_templateObject29 || (dailies_templateObject29 = dailies_taggedTemplateLiteral(["BittyCar MeatCar"])))) && (0,dist.get)("_bittycar") !== "meatcar") {
    (0,external_kolmafia_.use)(1, (0,dist.$item)(dailies_templateObject30 || (dailies_templateObject30 = dailies_taggedTemplateLiteral(["BittyCar MeatCar"]))));
  } // if (get("_VYKEACompanionLevel") === 0) {
  //   retrieveItem($item`VYKEA hex key`);
  //   cliExecute(`create level 3 lamp`);
  // }


  if ((0,external_kolmafia_.myClass)() === (0,dist.$class)(dailies_templateObject31 || (dailies_templateObject31 = dailies_taggedTemplateLiteral(["Pastamancer"]))) && (0,external_kolmafia_.myThrall)() !== (0,dist.$thrall)(dailies_templateObject32 || (dailies_templateObject32 = dailies_taggedTemplateLiteral(["Spice Ghost"]))) && (0,external_kolmafia_.haveSkill)((0,dist.$skill)(dailies_templateObject33 || (dailies_templateObject33 = dailies_taggedTemplateLiteral(["Bind Spice Ghost"]))))) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(dailies_templateObject34 || (dailies_templateObject34 = dailies_taggedTemplateLiteral(["Bind Spice Ghost"]))));
  }

  if ((0,external_kolmafia_.myClass)() === (0,dist.$class)(dailies_templateObject35 || (dailies_templateObject35 = dailies_taggedTemplateLiteral(["Pastamancer"]))) && (0,dist.have)((0,dist.$item)(dailies_templateObject36 || (dailies_templateObject36 = dailies_taggedTemplateLiteral(["experimental carbon fiber pasta additive"])))) && !(0,dist.get)("_pastaAdditive") && (0,external_kolmafia_.myThrall)().level < 10) {
    (0,external_kolmafia_.use)((0,dist.$item)(dailies_templateObject37 || (dailies_templateObject37 = dailies_taggedTemplateLiteral(["experimental carbon fiber pasta additive"]))));
  }

  if (!(0,dist.get)("_olympicSwimmingPoolItemFound") && (0,dist.have)((0,dist.$item)(dailies_templateObject38 || (dailies_templateObject38 = dailies_taggedTemplateLiteral(["Clan VIP Lounge key"]))))) {
    clan_withVIPClan(() => {
      if ((0,external_kolmafia_.getClanLounge)()["Olympic-sized Clan crate"] !== undefined) {
        (0,external_kolmafia_.cliExecute)("swim item");
      }
    });
  }

  if ((0,external_kolmafia_.currentMcd)() < 10) (0,external_kolmafia_.changeMcd)(10);
}

function volcanoDailies() {
  if (!((0,dist.get)("hotAirportAlways") || (0,dist.get)("_hotAirportToday"))) return;
  if (!(0,dist.get)("_volcanoItemRedeemed")) checkVolcanoQuest();
  (0,external_kolmafia_.print)("Getting my free volcoino!", "blue");

  if (!(0,dist.get)("_infernoDiscoVisited")) {
    (0,dist.$items)(dailies_templateObject39 || (dailies_templateObject39 = dailies_taggedTemplateLiteral(["smooth velvet pocket square, smooth velvet socks, smooth velvet hat, smooth velvet shirt, smooth velvet hanky, smooth velvet pants"]))).forEach(discoEquip => {
      (0,external_kolmafia_.retrieveItem)(discoEquip);
    });
    (0,external_kolmafia_.maximize)("disco style", false);
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=airport_hot&action=airport4_zone1");
    (0,external_kolmafia_.runChoice)(7);
  }

  if ((0,dist.have)((0,dist.$skill)(dailies_templateObject40 || (dailies_templateObject40 = dailies_taggedTemplateLiteral(["Unaccompanied Miner"])))) && (0,dist.get)("_unaccompaniedMinerUsed") < 5) {
    (0,external_kolmafia_.cliExecute)("minevolcano.ash ".concat(5 - (0,dist.get)("_unaccompaniedMinerUsed")));
  }
}

function checkVolcanoQuest() {
  (0,external_kolmafia_.print)("Checking volcano quest", "blue");
  (0,external_kolmafia_.visitUrl)("place.php?whichplace=airport_hot&action=airport4_questhub");
  var volcanoItems = [dist.property.getItem("_volcanoItem1") || (0,dist.$item)(dailies_templateObject41 || (dailies_templateObject41 = dailies_taggedTemplateLiteral(["none"]))), dist.property.getItem("_volcanoItem2") || (0,dist.$item)(dailies_templateObject42 || (dailies_templateObject42 = dailies_taggedTemplateLiteral(["none"]))), dist.property.getItem("_volcanoItem3") || (0,dist.$item)(dailies_templateObject43 || (dailies_templateObject43 = dailies_taggedTemplateLiteral(["none"])))];
  var volcanoWhatToDo = new Map([[(0,dist.$item)(dailies_templateObject44 || (dailies_templateObject44 = dailies_taggedTemplateLiteral(["New Age healing crystal"]))), () => {
    if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(dailies_templateObject45 || (dailies_templateObject45 = dailies_taggedTemplateLiteral(["New Age healing crystal"])))) >= 5) return true;else {
      return (0,external_kolmafia_.buy)(5 - (0,external_kolmafia_.availableAmount)((0,dist.$item)(dailies_templateObject46 || (dailies_templateObject46 = dailies_taggedTemplateLiteral(["New Age healing crystal"])))), (0,dist.$item)(dailies_templateObject47 || (dailies_templateObject47 = dailies_taggedTemplateLiteral(["New Age healing crystal"]))), 1000) === 5 - (0,external_kolmafia_.availableAmount)((0,dist.$item)(dailies_templateObject48 || (dailies_templateObject48 = dailies_taggedTemplateLiteral(["New Age healing crystal"]))));
    }
  }], [(0,dist.$item)(dailies_templateObject49 || (dailies_templateObject49 = dailies_taggedTemplateLiteral(["SMOOCH bottlecap"]))), () => {
    if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(dailies_templateObject50 || (dailies_templateObject50 = dailies_taggedTemplateLiteral(["SMOOCH bottlecap"])))) > 0) return true;else return (0,external_kolmafia_.buy)(1, (0,dist.$item)(dailies_templateObject51 || (dailies_templateObject51 = dailies_taggedTemplateLiteral(["SMOOCH bottlecap"]))), 5000) === 1;
  }], [(0,dist.$item)(dailies_templateObject52 || (dailies_templateObject52 = dailies_taggedTemplateLiteral(["gooey lava globs"]))), () => {
    if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(dailies_templateObject53 || (dailies_templateObject53 = dailies_taggedTemplateLiteral(["gooey lava globs"])))) >= 5) {
      return true;
    } else {
      var toBuy = 5 - (0,external_kolmafia_.availableAmount)((0,dist.$item)(dailies_templateObject54 || (dailies_templateObject54 = dailies_taggedTemplateLiteral(["gooey lava globs"]))));
      return (0,external_kolmafia_.buy)(toBuy, (0,dist.$item)(dailies_templateObject55 || (dailies_templateObject55 = dailies_taggedTemplateLiteral(["gooey lava globs"]))), 5000) === toBuy;
    }
  }], [(0,dist.$item)(dailies_templateObject56 || (dailies_templateObject56 = dailies_taggedTemplateLiteral(["fused fuse"]))), () => (0,dist.have)((0,dist.$item)(dailies_templateObject57 || (dailies_templateObject57 = dailies_taggedTemplateLiteral(["Clara's bell"])))) && !(0,dist.get)("_claraBellUsed")], [(0,dist.$item)(dailies_templateObject58 || (dailies_templateObject58 = dailies_taggedTemplateLiteral(["smooth velvet bra"]))), () => {
    if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(dailies_templateObject59 || (dailies_templateObject59 = dailies_taggedTemplateLiteral(["smooth velvet bra"])))) < 3) {
      (0,external_kolmafia_.cliExecute)("acquire ".concat((3 - (0,external_kolmafia_.availableAmount)((0,dist.$item)(dailies_templateObject60 || (dailies_templateObject60 = dailies_taggedTemplateLiteral(["smooth velvet bra"]))))).toString(), " smooth velvet bra"));
    }

    return (0,external_kolmafia_.availableAmount)((0,dist.$item)(dailies_templateObject61 || (dailies_templateObject61 = dailies_taggedTemplateLiteral(["smooth velvet bra"])))) >= 3;
  }], [(0,dist.$item)(dailies_templateObject62 || (dailies_templateObject62 = dailies_taggedTemplateLiteral(["SMOOCH bracers"]))), () => {
    if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(dailies_templateObject63 || (dailies_templateObject63 = dailies_taggedTemplateLiteral(["SMOOCH bracers"])))) < 3) {
      (0,external_kolmafia_.cliExecute)("acquire ".concat((3 - (0,external_kolmafia_.availableAmount)((0,dist.$item)(dailies_templateObject64 || (dailies_templateObject64 = dailies_taggedTemplateLiteral(["SMOOCH bracers"]))))).toString(), " smooch bracers"));
    }

    return (0,external_kolmafia_.availableAmount)((0,dist.$item)(dailies_templateObject65 || (dailies_templateObject65 = dailies_taggedTemplateLiteral(["SMOOCH bracers"])))) >= 3;
  }]]);

  var _iterator = dailies_createForOfIteratorHelper(volcanoWhatToDo.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          volcanoItem = _step$value[0],
          tryToGetIt = _step$value[1];

      if (volcanoItems.includes(volcanoItem)) {
        if (tryToGetIt()) {
          if (volcanoItem !== (0,dist.$item)(dailies_templateObject66 || (dailies_templateObject66 = dailies_taggedTemplateLiteral(["fused fuse"])))) {
            (0,external_kolmafia_.visitUrl)("place.php?whichplace=airport_hot&action=airport4_questhub");
            (0,external_kolmafia_.print)("Alright buddy, turning in ".concat(volcanoItem.plural, " for a volcoino!"), "red");
            var choice = volcanoItems.indexOf(volcanoItem) === -1 ? 4 : 1 + volcanoItems.indexOf(volcanoItem);
            (0,external_kolmafia_.runChoice)(choice);
          }
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function cheat() {
  if ((0,dist.have)((0,dist.$item)(dailies_templateObject67 || (dailies_templateObject67 = dailies_taggedTemplateLiteral(["Deck of Every Card"]))))) {
    ["Island", "Ancestral Recall", (0,lib/* saleValue */.L0)((0,dist.$item)(dailies_templateObject68 || (dailies_templateObject68 = dailies_taggedTemplateLiteral(["gift card"])))) >= (0,lib/* saleValue */.L0)((0,dist.$item)(dailies_templateObject69 || (dailies_templateObject69 = dailies_taggedTemplateLiteral(["1952 Mickey Mantle card"])))) ? "Gift Card" : "1952 Mickey Mantle"].forEach(card => {
      if ((0,dist.get)("_deckCardsDrawn") <= 10 && !(0,dist.get)("_deckCardsSeen").includes(card)) (0,external_kolmafia_.cliExecute)("cheat ".concat(card));
    });
  }
}

function tomeSummons() {
  var tomes = (0,dist.$skills)(dailies_templateObject70 || (dailies_templateObject70 = dailies_taggedTemplateLiteral(["Summon Snowcones, Summon Stickers, Summon Sugar Sheets, Summon Rad Libs, Summon Smithsness"])));
  tomes.forEach(skill => {
    if ((0,dist.have)(skill) && skill.dailylimit > 0) {
      (0,external_kolmafia_.useSkill)(skill, skill.dailylimit);
    }
  });

  if ((0,dist.have)((0,dist.$skill)(dailies_templateObject71 || (dailies_templateObject71 = dailies_taggedTemplateLiteral(["Summon Clip Art"])))) && (0,dist.$skill)(dailies_templateObject72 || (dailies_templateObject72 = dailies_taggedTemplateLiteral(["Summon Clip Art"]))).dailylimit > 0) {
    var best = (0,dist.$item)(dailies_templateObject73 || (dailies_templateObject73 = dailies_taggedTemplateLiteral(["none"])));

    for (var itemId = 5224; itemId <= 5283; itemId++) {
      var current = Item.get("[".concat(itemId, "]"));

      if ((0,lib/* saleValue */.L0)(current) > (0,lib/* saleValue */.L0)(best)) {
        best = current;
      }
    }

    if (best !== (0,dist.$item)(dailies_templateObject74 || (dailies_templateObject74 = dailies_taggedTemplateLiteral(["none"])))) {
      (0,external_kolmafia_.cliExecute)("try; create ".concat((0,dist.$skill)(dailies_templateObject75 || (dailies_templateObject75 = dailies_taggedTemplateLiteral(["Summon Clip Art"]))).dailylimit, " ").concat(best));
    }
  }
}

function gin() {
  if ((0,dist.have)((0,dist.$item)(dailies_templateObject76 || (dailies_templateObject76 = dailies_taggedTemplateLiteral(["Time-Spinner"]))))) {
    if (!(0,dist.get)("_timeSpinnerReplicatorUsed") && (0,dist.get)("timeSpinnerMedals") >= 5 && (0,dist.get)("_timeSpinnerMinutesUsed") <= 8) {
      (0,external_kolmafia_.cliExecute)("FarFuture mall");
    }
  }
}

function internetMemeShop() {
  var baconValue = (0,external_kolmafia_.mallPrice)((0,dist.$item)(dailies_templateObject77 || (dailies_templateObject77 = dailies_taggedTemplateLiteral(["BACON"]))));
  var internetMemeShopProperties = {
    _internetViralVideoBought: (0,dist.$item)(dailies_templateObject78 || (dailies_templateObject78 = dailies_taggedTemplateLiteral(["viral video"]))),
    _internetPlusOneBought: (0,dist.$item)(dailies_templateObject79 || (dailies_templateObject79 = dailies_taggedTemplateLiteral(["plus one"]))),
    _internetGallonOfMilkBought: (0,dist.$item)(dailies_templateObject80 || (dailies_templateObject80 = dailies_taggedTemplateLiteral(["gallon of milk"]))),
    _internetPrintScreenButtonBought: (0,dist.$item)(dailies_templateObject81 || (dailies_templateObject81 = dailies_taggedTemplateLiteral(["print screen button"]))),
    _internetDailyDungeonMalwareBought: (0,dist.$item)(dailies_templateObject82 || (dailies_templateObject82 = dailies_taggedTemplateLiteral(["daily dungeon malware"])))
  };

  for (var _i2 = 0, _Object$entries = Object.entries(internetMemeShopProperties); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        _property = _Object$entries$_i[0],
        item = _Object$entries$_i[1];

    if (!(0,dist.get)(_property) && baconValue * (0,lib/* coinmasterPrice */.Fx)(item) < (0,lib/* saleValue */.L0)(item)) {
      (0,external_kolmafia_.retrieveItem)((0,dist.$item)(dailies_templateObject83 || (dailies_templateObject83 = dailies_taggedTemplateLiteral(["BACON"]))), (0,lib/* coinmasterPrice */.Fx)(item));
      (0,external_kolmafia_.buy)((0,dist.$coinmaster)(dailies_templateObject84 || (dailies_templateObject84 = dailies_taggedTemplateLiteral(["Internet Meme Shop"]))), 1, item);
    }
  }
}

var teas = (0,dist.$items)(dailies_templateObject85 || (dailies_templateObject85 = dailies_taggedTemplateLiteral(["cuppa Activi tea, cuppa Alacri tea, cuppa Boo tea, cuppa Chari tea, cuppa Craft tea, cuppa Cruel tea, cuppa Dexteri tea, cuppa Feroci tea, cuppa Flamibili tea, cuppa Flexibili tea, cuppa Frost tea, cuppa Gill tea, cuppa Impregnabili tea, cuppa Improprie tea, cuppa Insani tea, cuppa Irritabili tea, cuppa Loyal tea, cuppa Mana tea, cuppa Mediocri tea, cuppa Monstrosi tea, cuppa Morbidi tea, cuppa Nas tea, cuppa Net tea, cuppa Neuroplastici tea, cuppa Obscuri tea, cuppa Physicali tea, cuppa Proprie tea, cuppa Royal tea, cuppa Serendipi tea, cuppa Sobrie tea, cuppa Toast tea, cuppa Twen tea, cuppa Uncertain tea, cuppa Vitali tea, cuppa Voraci tea, cuppa Wit tea, cuppa Yet tea"])));

function pickTea() {
  if (!(0,external_kolmafia_.getCampground)()["potted tea tree"] || (0,dist.get)("_pottedTeaTreeUsed")) return;
  var bestTea = teas.sort((a, b) => (0,lib/* saleValue */.L0)(b) - (0,lib/* saleValue */.L0)(a))[0];
  var shakeVal = 3 * lib/* saleValue.apply */.L0.apply(void 0, dailies_toConsumableArray(teas));
  var teaAction = shakeVal > (0,lib/* saleValue */.L0)(bestTea) ? "shake" : bestTea.name;
  (0,external_kolmafia_.cliExecute)("teatree ".concat(teaAction));
}

function gaze() {
  if (!(0,dist.get)("getawayCampsiteUnlocked")) return;
  if (!(0,dist.get)("_campAwayCloudBuffs")) (0,external_kolmafia_.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");

  while ((0,dist.get)("_campAwaySmileBuffs") < 3) {
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
  }
}

function martini() {
  if (!(0,dist.have)((0,dist.$item)(dailies_templateObject86 || (dailies_templateObject86 = dailies_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))) || (0,dist.get)("_kgbClicksUsed") > 17 || (0,dist.get)("_kgbDispenserUses") >= 3) {
    return;
  }

  (0,external_kolmafia_.cliExecute)("Briefcase collect");
}

function chateauDesk() {
  if (dist.ChateauMantegna.have() && !(0,dist.get)("_chateauDeskHarvested")) {
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=chateau&action=chateau_desk2", false);
  }
}

function extrude() {
  var bestExtrude = (0,lib/* argmax */.Eb)((0,dist.$items)(dailies_templateObject87 || (dailies_templateObject87 = dailies_taggedTemplateLiteral(["browser cookie, hacked gibson"]))).map(item => [item, (0,lib/* saleValue */.L0)(item)]));

  if (dist.SourceTerminal.have() && (0,external_kolmafia_.itemAmount)((0,dist.$item)(dailies_templateObject88 || (dailies_templateObject88 = dailies_taggedTemplateLiteral(["Source essence"])))) >= 30) {
    (0,external_kolmafia_.create)(3 - (0,dist.get)("_sourceTerminalExtrudes"), bestExtrude);
  }
}
;// CONCATENATED MODULE: ./src/acquire.ts

var priceCaps = {
  "jar of fermented pickle juice": 75000,
  "extra-greasy slider": 45000,
  "transdermal smoke patch": 8000,
  "voodoo snuff": 36000,
  "antimatter wad": 24000,
  "octolus oculus": 12000,
  "blood-drive sticker": 210000,
  "spice melange": 500000,
  "splendid martini": 20000,
  "Eye and a Twist": 20000,
  "jumping horseradish": 20000,
  "Ambitious Turkey": 20000,
  "Special Seasoning": 20000,
  "astral pilsner": 0,
  "bottle of vodka": 500,
  "bottle of Blank-Out": 25000,
  "peppermint parasol": 25000,
  "Oh, the Humanitini": 25000
};
function acquire_acquire(qty, item, maxPrice) {
  var throwOnFail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  if (maxPrice === undefined) maxPrice = priceCaps[item.name];
  if (maxPrice === undefined) throw "No price cap for ".concat(item.name, ".");
  if (qty * (0,external_kolmafia_.mallPrice)(item) > 1000000) throw "bad get!";
  var startAmount = (0,external_kolmafia_.itemAmount)(item);
  var remaining = qty - startAmount;
  if (remaining <= 0) return qty;
  (0,external_kolmafia_.print)("Trying to acquire ".concat(qty, " ").concat(item.plural, "; max price ").concat(maxPrice.toFixed(0), "."), "green");
  var getCloset = Math.min(remaining, (0,external_kolmafia_.closetAmount)(item));
  if (!(0,external_kolmafia_.takeCloset)(getCloset, item) && throwOnFail) throw "failed to remove from closet";
  remaining -= getCloset;
  if (remaining <= 0) return qty;
  var getStorage = Math.min(remaining, (0,external_kolmafia_.storageAmount)(item));
  if (!(0,external_kolmafia_.takeStorage)(getStorage, item) && throwOnFail) throw "failed to remove from storage";
  remaining -= getStorage;
  if (remaining <= 0) return qty;
  var getMall = Math.min(remaining, (0,external_kolmafia_.shopAmount)(item));

  if (!(0,external_kolmafia_.takeShop)(getMall, item)) {
    (0,external_kolmafia_.cliExecute)("refresh shop");
    (0,external_kolmafia_.cliExecute)("refresh inventory");
    remaining = qty - (0,external_kolmafia_.itemAmount)(item);
    getMall = Math.min(remaining, (0,external_kolmafia_.shopAmount)(item));
    if (!(0,external_kolmafia_.takeShop)(getMall, item) && throwOnFail) throw "failed to remove from shop";
  }

  remaining -= getMall;
  if (remaining <= 0) return qty;
  if (maxPrice <= 0) throw "buying disabled for ".concat(item.name, ".");
  (0,external_kolmafia_.buy)(remaining, item, maxPrice);
  if ((0,external_kolmafia_.itemAmount)(item) < qty && throwOnFail) throw "Mall price too high for ".concat(item.name, ".");
  return (0,external_kolmafia_.itemAmount)(item) - startAmount;
}
;// CONCATENATED MODULE: ./src/diet.ts
var diet_templateObject, diet_templateObject2, diet_templateObject3, diet_templateObject4, diet_templateObject5, diet_templateObject6, diet_templateObject7, diet_templateObject8, diet_templateObject9, diet_templateObject10, diet_templateObject11, diet_templateObject12, diet_templateObject13, diet_templateObject14, diet_templateObject15, diet_templateObject16, diet_templateObject17, diet_templateObject18, diet_templateObject19, diet_templateObject20, diet_templateObject21, diet_templateObject22, diet_templateObject23, diet_templateObject24, diet_templateObject25, diet_templateObject26, diet_templateObject27, diet_templateObject28, diet_templateObject29, diet_templateObject30, diet_templateObject31, diet_templateObject32, diet_templateObject33, diet_templateObject34, diet_templateObject35, diet_templateObject36, diet_templateObject37, diet_templateObject38, diet_templateObject39, diet_templateObject40, diet_templateObject41, diet_templateObject42, diet_templateObject43, diet_templateObject44, diet_templateObject45, diet_templateObject46, diet_templateObject47, diet_templateObject48, diet_templateObject49, diet_templateObject50, diet_templateObject51, diet_templateObject52, diet_templateObject53, diet_templateObject54, diet_templateObject55, diet_templateObject56, diet_templateObject57, diet_templateObject58, diet_templateObject59, diet_templateObject60, diet_templateObject61, diet_templateObject62, diet_templateObject63, diet_templateObject64, diet_templateObject65, diet_templateObject66, diet_templateObject67, diet_templateObject68, diet_templateObject69, diet_templateObject70, diet_templateObject71, diet_templateObject72, diet_templateObject73, diet_templateObject74, diet_templateObject75, diet_templateObject76, diet_templateObject77, diet_templateObject78, diet_templateObject79, diet_templateObject80, diet_templateObject81, diet_templateObject82, diet_templateObject83, diet_templateObject84, diet_templateObject85, diet_templateObject86, diet_templateObject87, diet_templateObject88, diet_templateObject89, diet_templateObject90, diet_templateObject91;

function diet_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var diet_MPA = (0,dist.get)("valueOfAdventure");

function drinkSafe(qty, item) {
  var prevDrunk = (0,external_kolmafia_.myInebriety)();
  (0,lib/* ensureEffect */.pq)((0,dist.$effect)(diet_templateObject || (diet_templateObject = diet_taggedTemplateLiteral(["Ode to Booze"]))));
  acquire_acquire(qty, item);
  if (!(0,external_kolmafia_.drink)(qty, item)) throw "Failed to drink safely";

  if (item.inebriety === 1 && prevDrunk === qty + (0,external_kolmafia_.myInebriety)() - 1) {
    // sometimes mafia does not track the mime army shot glass property
    (0,external_kolmafia_.setProperty)("_mimeArmyShotglassUsed", "true");
  }
}

function propTrue(prop) {
  if (typeof prop === "boolean") {
    return prop;
  } else {
    return (0,dist.get)(prop);
  }
}

function useIfUnused(item, prop, maxPrice) {
  if (!propTrue(prop)) {
    if ((0,external_kolmafia_.mallPrice)(item) <= maxPrice) {
      acquire_acquire(1, item, maxPrice);
      (0,external_kolmafia_.use)(1, item);
    } else {
      (0,external_kolmafia_.print)("Skipping ".concat(item.name, "; too expensive (").concat((0,external_kolmafia_.mallPrice)(item), " > ").concat(maxPrice, ")."));
    }
  }
}

function pasta() {
  var pasta = null;

  if ((0,external_kolmafia_.myClass)() === (0,dist.$class)(diet_templateObject2 || (diet_templateObject2 = diet_taggedTemplateLiteral(["Sauceror"]))) && (0,external_kolmafia_.mySign)() === "Wallaby") {
    pasta = (0,dist.$item)(diet_templateObject3 || (diet_templateObject3 = diet_taggedTemplateLiteral(["devil hair pasta"])));
  } else if ((0,external_kolmafia_.myClass)() === (0,dist.$class)(diet_templateObject4 || (diet_templateObject4 = diet_taggedTemplateLiteral(["Pastamancer"]))) && (0,external_kolmafia_.mySign)() === "Platypus") {
    pasta = (0,dist.$item)(diet_templateObject5 || (diet_templateObject5 = diet_taggedTemplateLiteral(["spooky hi mein"])));
  }

  if (pasta === null) throw "No pasta in this seed!";
  return pasta;
}

function nightcap() {
  var nightcap = null;

  if (myClass() === $class(diet_templateObject6 || (diet_templateObject6 = diet_taggedTemplateLiteral(["Sauceror"]))) && mySign() === "Wallaby") {
    nightcap = $item(diet_templateObject7 || (diet_templateObject7 = diet_taggedTemplateLiteral(["Suffering Sinner"])));
  } else if (myClass() === $class(diet_templateObject8 || (diet_templateObject8 = diet_taggedTemplateLiteral(["Pastamancer"]))) && mySign() === "Platypus") {
    nightcap = $item(diet_templateObject9 || (diet_templateObject9 = diet_taggedTemplateLiteral(["soyburger juice"])));
  }

  if (nightcap === null) throw "No pasta in this seed!";
  return nightcap;
}

function fillStomach() {
  if ((0,external_kolmafia_.myLevel)() >= 15 && !(0,dist.get)("_hungerSauceUsed") && (0,external_kolmafia_.mallPrice)((0,dist.$item)(diet_templateObject10 || (diet_templateObject10 = diet_taggedTemplateLiteral(["Hunger\u2122 Sauce"])))) < 3 * diet_MPA) {
    acquire_acquire(1, (0,dist.$item)(diet_templateObject11 || (diet_templateObject11 = diet_taggedTemplateLiteral(["Hunger\u2122 Sauce"]))), 3 * diet_MPA);
    (0,external_kolmafia_.use)(1, (0,dist.$item)(diet_templateObject12 || (diet_templateObject12 = diet_taggedTemplateLiteral(["Hunger\u2122 Sauce"]))));
  }

  useIfUnused((0,dist.$item)(diet_templateObject13 || (diet_templateObject13 = diet_taggedTemplateLiteral(["milk of magnesium"]))), "_milkOfMagnesiumUsed", 5 * diet_MPA);

  if (!(0,dist.get)("_carboLoaded") && (0,dist.have)((0,dist.$skill)(diet_templateObject14 || (diet_templateObject14 = diet_taggedTemplateLiteral(["Canticle of Carboloading"]))))) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(diet_templateObject15 || (diet_templateObject15 = diet_taggedTemplateLiteral(["Canticle of Carboloading"]))));
  }

  var count = (0,external_kolmafia_.fullnessLimit)() - (0,external_kolmafia_.myFullness)();

  if ((0,external_kolmafia_.getWorkshed)() === (0,dist.$item)(diet_templateObject16 || (diet_templateObject16 = diet_taggedTemplateLiteral(["portable Mayo Clinic"]))) && (0,external_kolmafia_.myFullness)() < (0,external_kolmafia_.fullnessLimit)()) {
    mindMayo(Mayo.flex, count);
  } // TODO: use munchies pills?


  acquire_acquire(count, (0,dist.$item)(diet_templateObject17 || (diet_templateObject17 = diet_taggedTemplateLiteral(["Special Seasoning"]))), diet_MPA, false);
  (0,external_kolmafia_.eat)(count, pasta());
}

function fillOneLiver() {
  if ((0,external_kolmafia_.myClass)() === (0,dist.$class)(diet_templateObject18 || (diet_templateObject18 = diet_taggedTemplateLiteral(["Sauceror"]))) && (0,external_kolmafia_.mySign)() === "Wallaby") {
    acquire_acquire(1, (0,dist.$item)(diet_templateObject19 || (diet_templateObject19 = diet_taggedTemplateLiteral(["black label"]))), 3 * diet_MPA);
    drinkSafe(1, (0,dist.$item)(diet_templateObject20 || (diet_templateObject20 = diet_taggedTemplateLiteral(["bottle of vodka"]))));
  } else if ((0,external_kolmafia_.myClass)() === (0,dist.$class)(diet_templateObject21 || (diet_templateObject21 = diet_taggedTemplateLiteral(["Pastamancer"]))) && (0,external_kolmafia_.mySign)() === "Platypus") {
    (0,external_kolmafia_.equip)((0,dist.$item)(diet_templateObject22 || (diet_templateObject22 = diet_taggedTemplateLiteral(["tuxedo shirt"]))));
    drinkSafe(1, (0,dist.$item)(diet_templateObject23 || (diet_templateObject23 = diet_taggedTemplateLiteral(["Oh, the Humanitini"]))));
  }
}

function fillLiver() {
  if ((0,dist.have)((0,dist.$item)(diet_templateObject24 || (diet_templateObject24 = diet_taggedTemplateLiteral(["portable Mayo Clinic"]))))) {
    if ((0,external_kolmafia_.getWorkshed)() === (0,dist.$item)(diet_templateObject25 || (diet_templateObject25 = diet_taggedTemplateLiteral(["Asdon Martin keyfob"])))) {
      while ((0,external_kolmafia_.haveEffect)((0,dist.$effect)(diet_templateObject26 || (diet_templateObject26 = diet_taggedTemplateLiteral(["Driving Observantly"])))) < 800) {
        if ((0,external_kolmafia_.getFuel)() < 37) (0,external_kolmafia_.cliExecute)("asdonmartin fuel 1 pie man was not meant to eat");
        (0,external_kolmafia_.cliExecute)("asdonmartin drive observantly");
      }
    }

    (0,external_kolmafia_.use)((0,dist.$item)(diet_templateObject27 || (diet_templateObject27 = diet_taggedTemplateLiteral(["portable Mayo Clinic"]))));
  }

  if ((0,external_kolmafia_.myFamiliar)() === (0,dist.$familiar)(diet_templateObject28 || (diet_templateObject28 = diet_taggedTemplateLiteral(["Stooper"])))) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(diet_templateObject29 || (diet_templateObject29 = diet_taggedTemplateLiteral(["none"]))));
  }

  if (!(0,dist.get)("_mimeArmyShotglassUsed") && (0,external_kolmafia_.itemAmount)((0,dist.$item)(diet_templateObject30 || (diet_templateObject30 = diet_taggedTemplateLiteral(["mime army shotglass"])))) > 0) {
    fillOneLiver();
  }

  var count = (0,external_kolmafia_.inebrietyLimit)() - (0,external_kolmafia_.myInebriety)();
  if (count === 0) return;

  if ((0,external_kolmafia_.getWorkshed)() === (0,dist.$item)(diet_templateObject31 || (diet_templateObject31 = diet_taggedTemplateLiteral(["portable Mayo Clinic"]))) && (0,external_kolmafia_.myFullness)() < (0,external_kolmafia_.fullnessLimit)()) {
    useIfUnused((0,dist.$item)(diet_templateObject32 || (diet_templateObject32 = diet_taggedTemplateLiteral(["milk of magnesium"]))), "_milkOfMagnesiumUsed", 5 * diet_MPA);
    mindMayo(Mayo.diol, count);
    acquire_acquire(count, (0,dist.$item)(diet_templateObject33 || (diet_templateObject33 = diet_taggedTemplateLiteral(["Special Seasoning"]))), diet_MPA, false);

    while ((0,external_kolmafia_.myInebriety)() < (0,external_kolmafia_.inebrietyLimit)()) {
      (0,external_kolmafia_.eat)(Math.min((0,external_kolmafia_.inebrietyLimit)() - (0,external_kolmafia_.myInebriety)(), (0,external_kolmafia_.fullnessLimit)() - (0,external_kolmafia_.myFullness)()), pasta());
    }
  } else {
    if ((0,external_kolmafia_.myClass)() === (0,dist.$class)(diet_templateObject34 || (diet_templateObject34 = diet_taggedTemplateLiteral(["Sauceror"]))) && (0,external_kolmafia_.mySign)() === "Wallaby") {
      acquire_acquire(count, (0,dist.$item)(diet_templateObject35 || (diet_templateObject35 = diet_taggedTemplateLiteral(["black label"]))), 3 * diet_MPA);
      drinkSafe(count, (0,dist.$item)(diet_templateObject36 || (diet_templateObject36 = diet_taggedTemplateLiteral(["bottle of vodka"]))));
    } else if ((0,external_kolmafia_.myClass)() === (0,dist.$class)(diet_templateObject37 || (diet_templateObject37 = diet_taggedTemplateLiteral(["Pastamancer"]))) && (0,external_kolmafia_.mySign)() === "Platypus") {
      acquire_acquire(Math.floor(count / 2), (0,dist.$item)(diet_templateObject38 || (diet_templateObject38 = diet_taggedTemplateLiteral(["black label"]))), 3 * diet_MPA);
      drinkSafe(Math.floor(count / 2), (0,dist.$item)(diet_templateObject39 || (diet_templateObject39 = diet_taggedTemplateLiteral(["bottle of gin"]))));

      if ((0,external_kolmafia_.myInebriety)() < (0,external_kolmafia_.inebrietyLimit)()) {
        (0,external_kolmafia_.equip)((0,dist.$item)(diet_templateObject40 || (diet_templateObject40 = diet_taggedTemplateLiteral(["tuxedo shirt"]))));
        drinkSafe(1, (0,dist.$item)(diet_templateObject41 || (diet_templateObject41 = diet_taggedTemplateLiteral(["Oh, the Humanitini"]))));
      }
    }
  }
}

function runDiet() {
  (0,external_kolmafia_.print)("Using adventure value ".concat(diet_MPA, "."), "blue");
  /* if ($item`bottle of vodka`.inebriety !== 1 || $item`devil hair pasta`.fullness !== 1) {
    throw "Something is wrong with our diet items. Wrong 2CRS seed?";
  } */

  if ((0,dist.get)("barrelShrineUnlocked") && !(0,dist.get)("_barrelPrayer") && (0,dist.$classes)(diet_templateObject42 || (diet_templateObject42 = diet_taggedTemplateLiteral(["Turtle Tamer, Accordion Thief"]))).includes((0,external_kolmafia_.myClass)())) {
    (0,external_kolmafia_.cliExecute)("barrelprayer buff");
  }

  useIfUnused((0,dist.$item)(diet_templateObject43 || (diet_templateObject43 = diet_taggedTemplateLiteral(["fancy chocolate car"]))), (0,dist.get)("_chocolatesUsed") !== 0, 2 * diet_MPA);
  var loveChocolateCount = Math.max(3 - Math.floor(20000 / diet_MPA) - (0,dist.get)("_loveChocolatesUsed"), 0);
  var loveChocolateEat = Math.min(loveChocolateCount, (0,external_kolmafia_.itemAmount)((0,dist.$item)(diet_templateObject44 || (diet_templateObject44 = diet_taggedTemplateLiteral(["LOV Extraterrestrial Chocolate"])))));
  (0,external_kolmafia_.use)(loveChocolateEat, (0,dist.$item)(diet_templateObject45 || (diet_templateObject45 = diet_taggedTemplateLiteral(["LOV Extraterrestrial Chocolate"]))));
  var chocos = new Map([[(0,dist.$class)(diet_templateObject46 || (diet_templateObject46 = diet_taggedTemplateLiteral(["Seal Clubber"]))), (0,dist.$item)(diet_templateObject47 || (diet_templateObject47 = diet_taggedTemplateLiteral(["chocolate seal-clubbing club"])))], [(0,dist.$class)(diet_templateObject48 || (diet_templateObject48 = diet_taggedTemplateLiteral(["Turtle Tamer"]))), (0,dist.$item)(diet_templateObject49 || (diet_templateObject49 = diet_taggedTemplateLiteral(["chocolate turtle totem"])))], [(0,dist.$class)(diet_templateObject50 || (diet_templateObject50 = diet_taggedTemplateLiteral(["Pastamancer"]))), (0,dist.$item)(diet_templateObject51 || (diet_templateObject51 = diet_taggedTemplateLiteral(["chocolate pasta spoon"])))], [(0,dist.$class)(diet_templateObject52 || (diet_templateObject52 = diet_taggedTemplateLiteral(["Sauceror"]))), (0,dist.$item)(diet_templateObject53 || (diet_templateObject53 = diet_taggedTemplateLiteral(["chocolate saucepan"])))], [(0,dist.$class)(diet_templateObject54 || (diet_templateObject54 = diet_taggedTemplateLiteral(["Accordion Thief"]))), (0,dist.$item)(diet_templateObject55 || (diet_templateObject55 = diet_taggedTemplateLiteral(["chocolate stolen accordion"])))], [(0,dist.$class)(diet_templateObject56 || (diet_templateObject56 = diet_taggedTemplateLiteral(["Disco Bandit"]))), (0,dist.$item)(diet_templateObject57 || (diet_templateObject57 = diet_taggedTemplateLiteral(["chocolate disco ball"])))]]);
  var classChoco = chocos.get((0,external_kolmafia_.myClass)());

  var chocExpVal = (remaining, item) => {
    var advs = [0, 0, 1, 2, 3][remaining + (item === classChoco ? 1 : 0)];
    return advs * diet_MPA - (0,external_kolmafia_.mallPrice)(item);
  };

  var chocosRemaining = (0,lib/* clamp */.uZ)(3 - (0,dist.get)("_chocolatesUsed"), 0, 3);

  var _loop = function _loop(i) {
    var chocoVals = Array.from(chocos.values()).map(choc => {
      return {
        choco: choc,
        value: chocExpVal(i, choc)
      };
    });
    var best = chocoVals.sort((a, b) => b.value - a.value)[0];
    if (best.value > 0) (0,external_kolmafia_.use)(1, best.choco);else return "break";
  };

  for (var i = chocosRemaining; i > 0; i--) {
    var _ret = _loop(i);

    if (_ret === "break") break;
  }

  useIfUnused((0,dist.$item)(diet_templateObject58 || (diet_templateObject58 = diet_taggedTemplateLiteral(["fancy chocolate sculpture"]))), (0,dist.get)("_chocolateSculpturesUsed") < 1, 5 * diet_MPA + 5000);
  useIfUnused((0,dist.$item)(diet_templateObject59 || (diet_templateObject59 = diet_taggedTemplateLiteral(["essential tofu"]))), "_essentialTofuUsed", 5 * diet_MPA);

  if (!(0,dist.get)("_etchedHourglassUsed") && (0,dist.have)((0,dist.$item)(diet_templateObject60 || (diet_templateObject60 = diet_taggedTemplateLiteral(["etched hourglass"]))))) {
    (0,external_kolmafia_.use)(1, (0,dist.$item)(diet_templateObject61 || (diet_templateObject61 = diet_taggedTemplateLiteral(["etched hourglass"]))));
  }

  if ((0,external_kolmafia_.getProperty)("_timesArrowUsed") !== "true" && (0,external_kolmafia_.mallPrice)((0,dist.$item)(diet_templateObject62 || (diet_templateObject62 = diet_taggedTemplateLiteral(["time's arrow"])))) < 5 * diet_MPA) {
    acquire_acquire(1, (0,dist.$item)(diet_templateObject63 || (diet_templateObject63 = diet_taggedTemplateLiteral(["time's arrow"]))), 5 * diet_MPA);
    (0,external_kolmafia_.cliExecute)("csend 1 time's arrow to botticelli");
    (0,external_kolmafia_.setProperty)("_timesArrowUsed", "true");
  }

  if ((0,dist.have)((0,dist.$skill)(diet_templateObject64 || (diet_templateObject64 = diet_taggedTemplateLiteral(["Ancestral Recall"])))) && (0,external_kolmafia_.mallPrice)((0,dist.$item)(diet_templateObject65 || (diet_templateObject65 = diet_taggedTemplateLiteral(["blue mana"])))) < 3 * diet_MPA) {
    var casts = Math.max(10 - (0,dist.get)("_ancestralRecallCasts"), 0);
    acquire_acquire(casts, (0,dist.$item)(diet_templateObject66 || (diet_templateObject66 = diet_taggedTemplateLiteral(["blue mana"]))), 3 * diet_MPA);
    (0,external_kolmafia_.useSkill)(casts, (0,dist.$skill)(diet_templateObject67 || (diet_templateObject67 = diet_taggedTemplateLiteral(["Ancestral Recall"]))));
  }

  useIfUnused((0,dist.$item)(diet_templateObject68 || (diet_templateObject68 = diet_taggedTemplateLiteral(["borrowed time"]))), "_borrowedTimeUsed", 20 * diet_MPA); // fill liver first, as we may use mayo!

  fillLiver();
  fillStomach();

  if (!(0,dist.get)("_distentionPillUsed")) {
    if (((0,dist.have)((0,dist.$item)(diet_templateObject69 || (diet_templateObject69 = diet_taggedTemplateLiteral(["distention pill"]))), 1) || !(0,dist.get)("dr_skipPillCheck", false)) && !(0,external_kolmafia_.use)((0,dist.$item)(diet_templateObject70 || (diet_templateObject70 = diet_taggedTemplateLiteral(["distention pill"]))))) {
      (0,external_kolmafia_.print)("WARNING: Out of distention pills.", "red");
    }
  }

  if (!(0,dist.get)("_syntheticDogHairPillUsed") && 1 <= (0,external_kolmafia_.myInebriety)()) {
    if (((0,dist.have)((0,dist.$item)(diet_templateObject71 || (diet_templateObject71 = diet_taggedTemplateLiteral(["synthetic dog hair pill"]))), 1) || !(0,dist.get)("dr_skipPillCheck", false)) && !(0,external_kolmafia_.use)((0,dist.$item)(diet_templateObject72 || (diet_templateObject72 = diet_taggedTemplateLiteral(["synthetic dog hair pill"]))))) {
      (0,external_kolmafia_.print)("WARNING: Out of synthetic dog hair pills.", "red");
    }
  }

  if (3 <= (0,external_kolmafia_.myInebriety)() && 3 <= (0,external_kolmafia_.myFullness)()) {
    useIfUnused((0,dist.$item)(diet_templateObject73 || (diet_templateObject73 = diet_taggedTemplateLiteral(["spice melange"]))), "spiceMelangeUsed", 400000);
  }

  useIfUnused((0,dist.$item)(diet_templateObject74 || (diet_templateObject74 = diet_taggedTemplateLiteral(["cuppa Voraci tea"]))), "_voraciTeaUsed", 10 * diet_MPA - (0,external_kolmafia_.mallPrice)(pasta()));

  if (1 <= (0,external_kolmafia_.myInebriety)()) {
    useIfUnused((0,dist.$item)(diet_templateObject75 || (diet_templateObject75 = diet_taggedTemplateLiteral(["cuppa Sobrie tea"]))), "_sobrieTeaUsed", 10 * diet_MPA - (0,external_kolmafia_.mallPrice)(pasta()));
  }

  fillLiver();
  fillStomach();
}
var Mayo = {
  nex: (0,dist.$item)(diet_templateObject76 || (diet_templateObject76 = diet_taggedTemplateLiteral(["Mayonex"]))),
  diol: (0,dist.$item)(diet_templateObject77 || (diet_templateObject77 = diet_taggedTemplateLiteral(["Mayodiol"]))),
  zapine: (0,dist.$item)(diet_templateObject78 || (diet_templateObject78 = diet_taggedTemplateLiteral(["Mayozapine"]))),
  flex: (0,dist.$item)(diet_templateObject79 || (diet_templateObject79 = diet_taggedTemplateLiteral(["Mayoflex"])))
};

function mindMayo(mayo, quantity) {
  if ((0,external_kolmafia_.getWorkshed)() !== (0,dist.$item)(diet_templateObject80 || (diet_templateObject80 = diet_taggedTemplateLiteral(["portable Mayo Clinic"])))) return;
  if ((0,dist.get)("mayoInMouth") && (0,dist.get)("mayoInMouth") !== mayo.name) throw "You used a bad mayo, my friend!"; //Is this what we want?

  (0,external_kolmafia_.retrieveItem)(quantity, mayo);
  if (!(0,dist.have)((0,dist.$item)(diet_templateObject81 || (diet_templateObject81 = diet_taggedTemplateLiteral(["Mayo Minder\u2122"]))))) (0,external_kolmafia_.buy)((0,dist.$item)(diet_templateObject82 || (diet_templateObject82 = diet_taggedTemplateLiteral(["Mayo Minder\u2122"]))));

  if ((0,dist.get)("mayoMinderSetting") !== mayo.name) {
    (0,lib/* setChoice */.Y7)(1076, (0,external_kolmafia_.toInt)(mayo) - 8260);
    (0,external_kolmafia_.use)((0,dist.$item)(diet_templateObject83 || (diet_templateObject83 = diet_taggedTemplateLiteral(["Mayo Minder\u2122"]))));
  }
}

function runNightcap() {
  if (myAdventures() > 0) throw "Trying to nightcap with adventures remaining!";
  useFamiliar($familiar(diet_templateObject84 || (diet_templateObject84 = diet_taggedTemplateLiteral(["Stooper"]))));

  if (myInebriety() + 1 === inebrietyLimit()) {
    fillOneLiver();
  }

  if (myInebriety() === inebrietyLimit()) {
    acquire(1, $item(diet_templateObject85 || (diet_templateObject85 = diet_taggedTemplateLiteral(["Frosty's frosty mug"]))), 15 * diet_MPA);
    drink($item(diet_templateObject86 || (diet_templateObject86 = diet_taggedTemplateLiteral(["Frosty's frosty mug"]))));
    acquire(1, nightcap(), 20000);
    if (haveEffect($effect(diet_templateObject87 || (diet_templateObject87 = diet_taggedTemplateLiteral(["Ode to Booze"])))) < 10) useSkill($skill(diet_templateObject88 || (diet_templateObject88 = diet_taggedTemplateLiteral(["The Ode to Booze"]))));
    drinksilent(nightcap());
  }

  if (!getChateau()["artificial skylight"]) {
    buy(1, $item(diet_templateObject89 || (diet_templateObject89 = diet_taggedTemplateLiteral(["artificial skylight"]))));
  }

  if (!getCampground()["clockwork maid"]) {
    use(1, $item(diet_templateObject90 || (diet_templateObject90 = diet_taggedTemplateLiteral(["clockwork maid"]))));
  }

  useFamiliar($familiar(diet_templateObject91 || (diet_templateObject91 = diet_taggedTemplateLiteral(["Left-Hand Man"]))));
  maximize("Adventures", false);
}
;// CONCATENATED MODULE: ./src/mood.ts
var mood_templateObject, mood_templateObject2, mood_templateObject3, mood_templateObject4, mood_templateObject5, mood_templateObject6, mood_templateObject7, mood_templateObject8, mood_templateObject9, mood_templateObject10, mood_templateObject11, mood_templateObject12, mood_templateObject13, mood_templateObject14, mood_templateObject15, mood_templateObject16, mood_templateObject17, mood_templateObject18, mood_templateObject19, mood_templateObject20, mood_templateObject21, mood_templateObject22, mood_templateObject23, mood_templateObject24, mood_templateObject25, mood_templateObject26, mood_templateObject27, mood_templateObject28, mood_templateObject29, mood_templateObject30, mood_templateObject31, mood_templateObject32, mood_templateObject33, mood_templateObject34, mood_templateObject35, mood_templateObject36, mood_templateObject37, mood_templateObject38, mood_templateObject39, mood_templateObject40, mood_templateObject41, mood_templateObject42, mood_templateObject43, mood_templateObject44, mood_templateObject45, mood_templateObject46, mood_templateObject47;

function mood_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






dist.Mood.setDefaultOptions({
  mpSources: [],
  reserveMp: 50
  /* songSlots: [
    $effects`Polka of Plenty, Ode to Booze`,
    $effects`Fat Leon's Phat Loot Lyric`,
    $effects`Chorale of Companionship`,
    $effects`The Ballad of Richie Thingfinder`,
  ], */

});
function itemMood() {
  var mood = new dist.Mood();
  mood.skill((0,dist.$skill)(mood_templateObject || (mood_templateObject = mood_taggedTemplateLiteral(["Blood Bond"]))));
  mood.skill((0,dist.$skill)(mood_templateObject2 || (mood_templateObject2 = mood_taggedTemplateLiteral(["Leash of Linguini"]))));
  mood.skill((0,dist.$skill)(mood_templateObject3 || (mood_templateObject3 = mood_taggedTemplateLiteral(["Empathy of the Newt"]))));
  mood.skill((0,dist.$skill)(mood_templateObject4 || (mood_templateObject4 = mood_taggedTemplateLiteral(["The Spirit of Taking"]))));
  mood.skill((0,dist.$skill)(mood_templateObject5 || (mood_templateObject5 = mood_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))));
  mood.skill((0,dist.$skill)(mood_templateObject6 || (mood_templateObject6 = mood_taggedTemplateLiteral(["Singer's Faithful Ocelot"]))));

  if (!(0,dist.get)("concertVisited") && (0,dist.get)("sidequestArenaCompleted") === "fratboy") {
    (0,external_kolmafia_.cliExecute)("concert winklered");
  } else if (!(0,dist.get)("concertVisited") && (0,dist.get)("sidequestArenaCompleted") === "hippy") {
    (0,external_kolmafia_.cliExecute)("concert optimist primal");
  }

  return mood;
}
function freeFightMood() {
  var mood = new dist.Mood();
  mood.skill((0,dist.$skill)(mood_templateObject7 || (mood_templateObject7 = mood_taggedTemplateLiteral(["Drescher's Annoying Noise"]))));
  mood.skill((0,dist.$skill)(mood_templateObject8 || (mood_templateObject8 = mood_taggedTemplateLiteral(["Pride of the Puffin"]))));

  if (!(0,dist.get)("_dr_defectiveTokenAttempted", false)) {
    (0,dist.set)("_dr_defectiveTokenAttempted", true);
    withStash((0,dist.$items)(mood_templateObject9 || (mood_templateObject9 = mood_taggedTemplateLiteral(["defective Game Grid token"]))), () => {
      if (!(0,dist.get)("_defectiveTokenUsed") && (0,dist.have)((0,dist.$item)(mood_templateObject10 || (mood_templateObject10 = mood_taggedTemplateLiteral(["defective Game Grid token"]))))) (0,external_kolmafia_.use)((0,dist.$item)(mood_templateObject11 || (mood_templateObject11 = mood_taggedTemplateLiteral(["defective Game Grid token"]))));
    });
  }

  var goodSongs = (0,dist.$skills)(mood_templateObject12 || (mood_templateObject12 = mood_taggedTemplateLiteral(["Chorale of Companionship, The Ballad of Richie Thingfinder, Fat Leon's Phat Loot Lyric"])));

  for (var _i = 0, _Object$keys = Object.keys((0,external_kolmafia_.myEffects)()); _i < _Object$keys.length; _i++) {
    var effectName = _Object$keys[_i];
    var effect = Effect.get(effectName);
    var skill = (0,external_kolmafia_.toSkill)(effect);

    if (skill.class === (0,dist.$class)(mood_templateObject13 || (mood_templateObject13 = mood_taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff && !goodSongs.includes(skill)) {
      (0,external_kolmafia_.cliExecute)("shrug ".concat(effectName));
    }
  }

  if (((0,dist.get)("daycareOpen") || (0,dist.get)("_daycareToday")) && !(0,dist.get)("_daycareSpa")) {
    (0,external_kolmafia_.cliExecute)("daycare mysticality");
  }

  if ((0,dist.have)((0,dist.$item)(mood_templateObject14 || (mood_templateObject14 = mood_taggedTemplateLiteral(["redwood rain stick"])))) && !(0,dist.get)("_redwoodRainStickUsed")) {
    (0,external_kolmafia_.use)((0,dist.$item)(mood_templateObject15 || (mood_templateObject15 = mood_taggedTemplateLiteral(["redwood rain stick"]))));
  }

  if ((0,lib/* questStep */.cL)("questL06Friar") === 999 && !(0,dist.get)("friarsBlessingReceived")) {
    (0,external_kolmafia_.cliExecute)("friars familiar");
  }

  return mood;
}

function fillSpleenSynthesis() {
  var needed = Math.floor((haveEffect($effect(mood_templateObject16 || (mood_templateObject16 = mood_taggedTemplateLiteral(["Riboflavin'"])))) - haveEffect($effect(mood_templateObject17 || (mood_templateObject17 = mood_taggedTemplateLiteral(["Synthesis: Collection"]))))) / 30);
  sweetSynthesis(Math.min(needed, spleenLimit() - mySpleenUse()), $effect(mood_templateObject18 || (mood_templateObject18 = mood_taggedTemplateLiteral(["Synthesis: Collection"]))));
}

function boostItemDrop() {
  if (have($familiar(mood_templateObject19 || (mood_templateObject19 = mood_taggedTemplateLiteral(["Reagnimated Gnome"])))) && myFamiliar() !== $familiar(mood_templateObject20 || (mood_templateObject20 = mood_taggedTemplateLiteral(["Reagnimated Gnome"])))) return;

  if (numericModifier("Item Drop") < 1850 && !get("_clanFortuneBuffUsed")) {
    withVIPClan(() => cliExecute("fortune buff item"));
  }

  if (numericModifier("Item Drop") < 1850 && !have($effect(mood_templateObject21 || (mood_templateObject21 = mood_taggedTemplateLiteral(["items.enh"])))) && SourceTerminal.have() && SourceTerminal.getEnhanceUses() < 3) {
    while (SourceTerminal.getEnhanceUses() < 3) {
      SourceTerminal.enhance($effect(mood_templateObject22 || (mood_templateObject22 = mood_taggedTemplateLiteral(["items.enh"]))));
    }
  }

  if (numericModifier("Item Drop") < 1850 && !have($effect(mood_templateObject23 || (mood_templateObject23 = mood_taggedTemplateLiteral(["Items Are Forever"])))) && have($item(mood_templateObject24 || (mood_templateObject24 = mood_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))) && get("_kgbClicksUsed") < 22) {
    var buffTries = Math.ceil((22 - get("_kgbClicksUsed")) / 3);
    cliExecute("Briefcase buff ".concat(new Array(buffTries).fill("item").join(" ")));
  }

  if (numericModifier("Item Drop") < 1850 && have($item(mood_templateObject25 || (mood_templateObject25 = mood_taggedTemplateLiteral(["Bird-a-Day calendar"]))))) {
    if (!have($skill(mood_templateObject26 || (mood_templateObject26 = mood_taggedTemplateLiteral(["Seek out a Bird"]))))) {
      use(1, $item(mood_templateObject27 || (mood_templateObject27 = mood_taggedTemplateLiteral(["Bird-a-Day calendar"]))));
    }

    if (have($skill(mood_templateObject28 || (mood_templateObject28 = mood_taggedTemplateLiteral(["Visit your Favorite Bird"])))) && !get("_favoriteBirdVisited") && (numericModifier($effect(mood_templateObject29 || (mood_templateObject29 = mood_taggedTemplateLiteral(["Blessing of your favorite Bird"]))), "Meat Drop") > 0 || numericModifier($effect(mood_templateObject30 || (mood_templateObject30 = mood_taggedTemplateLiteral(["Blessing of your favorite Bird"]))), "Item Drop") > 0)) {
      useSkill($skill(mood_templateObject31 || (mood_templateObject31 = mood_taggedTemplateLiteral(["Visit your Favorite Bird"]))));
    }

    if (have($skill(mood_templateObject32 || (mood_templateObject32 = mood_taggedTemplateLiteral(["Seek out a Bird"])))) && get("_birdsSoughtToday") < 6 && (numericModifier($effect(mood_templateObject33 || (mood_templateObject33 = mood_taggedTemplateLiteral(["Blessing of the Bird"]))), "Meat Drop") > 0 || numericModifier($effect(mood_templateObject34 || (mood_templateObject34 = mood_taggedTemplateLiteral(["Blessing of the Bird"]))), "Item Drop") > 0)) {
      // Ensure we don't get stuck in the choice if the count is wrong
      setChoice(1399, 2);
      useSkill($skill(mood_templateObject35 || (mood_templateObject35 = mood_taggedTemplateLiteral(["Seek out a Bird"]))), 6 - get("_birdsSoughtToday"));
    }
  }

  if (get("_poolGames") < 3 && !get("_dr_noPoolTable", false) && !have($effect(mood_templateObject36 || (mood_templateObject36 = mood_taggedTemplateLiteral(["Hustlin'"]))))) {
    withVIPClan(() => {
      if (getClanLounge()["Clan pool table"] !== undefined) {
        while (get("_poolGames") < 3) {
          cliExecute("pool stylish");
        }
      } else set("_dr_noPoolTable", true);
    });
  }

  if (numericModifier("Item Drop") < 1850 && mySpleenUse() < spleenLimit()) {
    fillSpleenSynthesis();
    var mojoFilterCount = 3 - get("currentMojoFilters");
    acquire(mojoFilterCount, $item(mood_templateObject37 || (mood_templateObject37 = mood_taggedTemplateLiteral(["mojo filter"]))), 15000, false);

    if (have($item(mood_templateObject38 || (mood_templateObject38 = mood_taggedTemplateLiteral(["mojo filter"]))))) {
      use(Math.min(mojoFilterCount, availableAmount($item(mood_templateObject39 || (mood_templateObject39 = mood_taggedTemplateLiteral(["mojo filter"]))))), $item(mood_templateObject40 || (mood_templateObject40 = mood_taggedTemplateLiteral(["mojo filter"]))));
      fillSpleenSynthesis();
    }
  } // TODO: More generic potion support


  if (myClass() === $class(mood_templateObject41 || (mood_templateObject41 = mood_taggedTemplateLiteral(["Sauceror"]))) && mySign() === "Wallaby" && numericModifier("Item Drop") < 1850 && !have($effect(mood_templateObject42 || (mood_templateObject42 = mood_taggedTemplateLiteral(["Always be Collecting"])))) && effectModifier($item(mood_templateObject43 || (mood_templateObject43 = mood_taggedTemplateLiteral(["rubber nubbin"]))), "Effect") === $effect(mood_templateObject44 || (mood_templateObject44 = mood_taggedTemplateLiteral(["Always be Collecting"]))) && mallPrice($item(mood_templateObject45 || (mood_templateObject45 = mood_taggedTemplateLiteral(["rubber nubbin"])))) < 5 * numericModifier($item(mood_templateObject46 || (mood_templateObject46 = mood_taggedTemplateLiteral(["rubber nubbin"]))), "Effect Duration") * 50) {
    use($item(mood_templateObject47 || (mood_templateObject47 = mood_taggedTemplateLiteral(["rubber nubbin"]))));
  }
}
;// CONCATENATED MODULE: ./src/fights.ts
var fights_templateObject, fights_templateObject2, fights_templateObject3, fights_templateObject4, fights_templateObject5, fights_templateObject6, fights_templateObject7, fights_templateObject8, fights_templateObject9, fights_templateObject10, fights_templateObject11, fights_templateObject12, fights_templateObject13, fights_templateObject14, fights_templateObject15, fights_templateObject16, fights_templateObject17, fights_templateObject18, fights_templateObject19, fights_templateObject20, fights_templateObject21, fights_templateObject22, fights_templateObject23, fights_templateObject24, fights_templateObject25, fights_templateObject26, fights_templateObject27, fights_templateObject28, fights_templateObject29, fights_templateObject30, fights_templateObject31, fights_templateObject32, fights_templateObject33, fights_templateObject34, fights_templateObject35, fights_templateObject36, fights_templateObject37, fights_templateObject38, fights_templateObject39, fights_templateObject40, fights_templateObject41, fights_templateObject42, fights_templateObject43, fights_templateObject44, fights_templateObject45, fights_templateObject46, fights_templateObject47, fights_templateObject48, fights_templateObject49, fights_templateObject50, fights_templateObject51, fights_templateObject52, fights_templateObject53, fights_templateObject54, fights_templateObject55, fights_templateObject56, fights_templateObject57, fights_templateObject58, fights_templateObject59, fights_templateObject60, fights_templateObject61, fights_templateObject62, fights_templateObject63, fights_templateObject64, fights_templateObject65, fights_templateObject66, fights_templateObject67, fights_templateObject68, fights_templateObject69, fights_templateObject70, fights_templateObject71, fights_templateObject72, fights_templateObject73, fights_templateObject74, fights_templateObject75, fights_templateObject76, fights_templateObject77, fights_templateObject78, fights_templateObject79, fights_templateObject80, fights_templateObject81, fights_templateObject82, fights_templateObject83, fights_templateObject84, fights_templateObject85, fights_templateObject86, fights_templateObject87, fights_templateObject88, fights_templateObject89, fights_templateObject90, fights_templateObject91, fights_templateObject92, fights_templateObject93, fights_templateObject94, fights_templateObject95, fights_templateObject96, fights_templateObject97, fights_templateObject98, fights_templateObject99, fights_templateObject100, fights_templateObject101, fights_templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199, _templateObject200, _templateObject201, _templateObject202, _templateObject203, _templateObject204;

function fights_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function fights_createClass(Constructor, protoProps, staticProps) { if (protoProps) fights_defineProperties(Constructor.prototype, protoProps); if (staticProps) fights_defineProperties(Constructor, staticProps); return Constructor; }

function fights_toConsumableArray(arr) { return fights_arrayWithoutHoles(arr) || fights_iterableToArray(arr) || fights_unsupportedIterableToArray(arr) || fights_nonIterableSpread(); }

function fights_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function fights_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function fights_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return fights_arrayLikeToArray(arr); }

function fights_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = fights_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function fights_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return fights_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fights_arrayLikeToArray(o, minLen); }

function fights_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function fights_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fights_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function fights_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var witchessPieces = [{
  piece: (0,dist.$monster)(fights_templateObject || (fights_templateObject = fights_taggedTemplateLiteral(["Witchess Bishop"]))),
  drop: (0,dist.$item)(fights_templateObject2 || (fights_templateObject2 = fights_taggedTemplateLiteral(["Sacramento wine"])))
}, {
  piece: (0,dist.$monster)(fights_templateObject3 || (fights_templateObject3 = fights_taggedTemplateLiteral(["Witchess Knight"]))),
  drop: (0,dist.$item)(fights_templateObject4 || (fights_templateObject4 = fights_taggedTemplateLiteral(["jumping horseradish"])))
}, {
  piece: (0,dist.$monster)(fights_templateObject5 || (fights_templateObject5 = fights_taggedTemplateLiteral(["Witchess Pawn"]))),
  drop: (0,dist.$item)(fights_templateObject6 || (fights_templateObject6 = fights_taggedTemplateLiteral(["armored prawn"])))
}, {
  piece: (0,dist.$monster)(fights_templateObject7 || (fights_templateObject7 = fights_taggedTemplateLiteral(["Witchess Rook"]))),
  drop: (0,dist.$item)(fights_templateObject8 || (fights_templateObject8 = fights_taggedTemplateLiteral(["Greek fire"])))
}];
var _bestWitchessPiece = null;
function bestWitchessPiece() {
  if (_bestWitchessPiece === null) {
    _bestWitchessPiece = witchessPieces.sort((a, b) => (0,lib/* saleValue */.L0)(b.drop) - (0,lib/* saleValue */.L0)(a.drop))[0].piece;
  }

  return _bestWitchessPiece;
}
var copiedMonster = bestWitchessPiece;

function checkFax() {
  if (!(0,dist.have)((0,dist.$item)(fights_templateObject9 || (fights_templateObject9 = fights_taggedTemplateLiteral(["photocopied monster"]))))) (0,external_kolmafia_.cliExecute)("fax receive");
  if (dist.property.getString("photocopyMonster") === copiedMonster().name) return true;
  (0,external_kolmafia_.cliExecute)("fax send");
  return false;
}

function faxWitchess() {
  if (!(0,dist.get)("_photocopyUsed")) {
    if (checkFax()) return;
    (0,external_kolmafia_.chatPrivate)("cheesefax", copiedMonster().name);

    for (var i = 0; i < 3; i++) {
      (0,external_kolmafia_.wait)(10);
      if (checkFax()) return;
    }

    throw "Failed to acquire photocopied ".concat(copiedMonster().name);
  }
}

var CopierFight = function CopierFight(name, available, potential, run) {
  var requirements = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var draggable = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  fights_classCallCheck(this, CopierFight);

  fights_defineProperty(this, "available", void 0);

  fights_defineProperty(this, "potential", void 0);

  fights_defineProperty(this, "run", void 0);

  fights_defineProperty(this, "requirements", void 0);

  fights_defineProperty(this, "draggable", void 0);

  fights_defineProperty(this, "name", void 0);

  this.name = name;
  this.available = available;
  this.potential = potential;
  this.run = run;
  this.requirements = requirements;
  this.draggable = draggable;
};

var firstChainMacro = () => combat.Macro.if_("monstername ".concat(copiedMonster()), combat.Macro.if_("!hasskill Lecture on Relativity", combat.Macro.externalIf((0,dist.get)("_sourceTerminalDigitizeMonster") !== copiedMonster(), combat.Macro.tryCopier((0,dist.$skill)(fights_templateObject10 || (fights_templateObject10 = fights_taggedTemplateLiteral(["Digitize"]))))).tryCopier((0,dist.$item)(fights_templateObject11 || (fights_templateObject11 = fights_taggedTemplateLiteral(["Spooky Putty sheet"])))).tryCopier((0,dist.$item)(fights_templateObject12 || (fights_templateObject12 = fights_taggedTemplateLiteral(["Rain-Doh black box"]))))).trySkill((0,dist.$skill)(fights_templateObject13 || (fights_templateObject13 = fights_taggedTemplateLiteral(["lecture on relativity"])))).meatKill()).abort();

var secondChainMacro = () => combat.Macro.if_("monstername ".concat(copiedMonster()), combat.Macro.externalIf((0,external_kolmafia_.myFamiliar)() === (0,dist.$familiar)(fights_templateObject14 || (fights_templateObject14 = fights_taggedTemplateLiteral(["Pocket Professor"]))), combat.Macro.if_("!hasskill Lecture on Relativity", combat.Macro.trySkill((0,dist.$skill)(fights_templateObject15 || (fights_templateObject15 = fights_taggedTemplateLiteral(["Meteor Shower"]))))).if_("!hasskill Lecture on Relativity", combat.Macro.externalIf((0,dist.get)("_sourceTerminalDigitizeMonster") !== copiedMonster(), combat.Macro.tryCopier((0,dist.$skill)(fights_templateObject16 || (fights_templateObject16 = fights_taggedTemplateLiteral(["Digitize"]))))).tryCopier((0,dist.$item)(fights_templateObject17 || (fights_templateObject17 = fights_taggedTemplateLiteral(["Spooky Putty sheet"])))).tryCopier((0,dist.$item)(fights_templateObject18 || (fights_templateObject18 = fights_taggedTemplateLiteral(["Rain-Doh black box"])))).tryCopier((0,dist.$item)(fights_templateObject19 || (fights_templateObject19 = fights_taggedTemplateLiteral(["4-d camera"])))).tryCopier((0,dist.$item)(fights_templateObject20 || (fights_templateObject20 = fights_taggedTemplateLiteral(["unfinished ice sculpture"]))))).trySkill((0,dist.$skill)(fights_templateObject21 || (fights_templateObject21 = fights_taggedTemplateLiteral(["lecture on relativity"]))))).meatKill()).abort();

var copierMacro = () => combat.Macro.if_("monstername ".concat(copiedMonster()), combat.Macro.if_("snarfblat 186", combat.Macro.tryCopier((0,dist.$item)(fights_templateObject22 || (fights_templateObject22 = fights_taggedTemplateLiteral(["pulled green taffy"]))))).trySkill((0,dist.$skill)(fights_templateObject23 || (fights_templateObject23 = fights_taggedTemplateLiteral(["Wink at"])))).trySkill((0,dist.$skill)(fights_templateObject24 || (fights_templateObject24 = fights_taggedTemplateLiteral(["Fire a badly romantic arrow"])))).externalIf((0,dist.get)("_sourceTerminalDigitizeMonster") !== copiedMonster(), combat.Macro.tryCopier((0,dist.$skill)(fights_templateObject25 || (fights_templateObject25 = fights_taggedTemplateLiteral(["Digitize"]))))).tryCopier((0,dist.$item)(fights_templateObject26 || (fights_templateObject26 = fights_taggedTemplateLiteral(["Spooky Putty sheet"])))).tryCopier((0,dist.$item)(fights_templateObject27 || (fights_templateObject27 = fights_taggedTemplateLiteral(["Rain-Doh black box"])))).tryCopier((0,dist.$item)(fights_templateObject28 || (fights_templateObject28 = fights_taggedTemplateLiteral(["4-d camera"])))).tryCopier((0,dist.$item)(fights_templateObject29 || (fights_templateObject29 = fights_taggedTemplateLiteral(["unfinished ice sculpture"])))).meatKill()).abort();

var copierSources = [new CopierFight("Digitize", () => (0,dist.get)("_sourceTerminalDigitizeMonster") === copiedMonster() && (0,external_kolmafia_.getCounters)("Digitize Monster", 0, 0).trim() !== "", () => dist.SourceTerminal.have() && (0,dist.get)("_sourceTerminalDigitizeUses") === 0 ? 1 : 0, options => {
  (0,external_kolmafia_.adv1)(options.location || (0,dist.$location)(fights_templateObject30 || (fights_templateObject30 = fights_taggedTemplateLiteral(["Noob Cave"]))));
}, [], true), new CopierFight("Fax", () => (0,dist.have)((0,dist.$item)(fights_templateObject31 || (fights_templateObject31 = fights_taggedTemplateLiteral(["Clan VIP Lounge key"])))) && !(0,dist.get)("_photocopyUsed"), () => (0,dist.have)((0,dist.$item)(fights_templateObject32 || (fights_templateObject32 = fights_taggedTemplateLiteral(["Clan VIP Lounge key"])))) && !(0,dist.get)("_photocopyUsed") ? 1 : 0, () => {
  clan_withVIPClan(() => faxWitchess());
  (0,external_kolmafia_.use)((0,dist.$item)(fights_templateObject33 || (fights_templateObject33 = fights_taggedTemplateLiteral(["photocopied monster"]))));
}), new CopierFight("Chateau Painting", () => {
  var _ChateauMantegna$pain;

  return dist.ChateauMantegna.have() && !dist.ChateauMantegna.paintingFought() && !!((_ChateauMantegna$pain = dist.ChateauMantegna.paintingMonster()) !== null && _ChateauMantegna$pain !== void 0 && _ChateauMantegna$pain.attributes.includes("FREE"));
}, () => {
  var _ChateauMantegna$pain2;

  return dist.ChateauMantegna.have() && !dist.ChateauMantegna.paintingFought() && !!((_ChateauMantegna$pain2 = dist.ChateauMantegna.paintingMonster()) !== null && _ChateauMantegna$pain2 !== void 0 && _ChateauMantegna$pain2.attributes.includes("FREE")) ? 1 : 0;
}, () => dist.ChateauMantegna.fightPainting()), new CopierFight("Spooky Putty & Rain-Doh", () => (0,dist.have)((0,dist.$item)(fights_templateObject34 || (fights_templateObject34 = fights_taggedTemplateLiteral(["Spooky Putty monster"])))) && (0,dist.get)("spookyPuttyMonster") === copiedMonster() || (0,dist.have)((0,dist.$item)(fights_templateObject35 || (fights_templateObject35 = fights_taggedTemplateLiteral(["Rain-Doh box full of monster"])))) && (0,dist.get)("rainDohMonster") === copiedMonster(), () => {
  if (((0,dist.have)((0,dist.$item)(fights_templateObject36 || (fights_templateObject36 = fights_taggedTemplateLiteral(["Spooky Putty sheet"])))) || (0,dist.have)((0,dist.$item)(fights_templateObject37 || (fights_templateObject37 = fights_taggedTemplateLiteral(["Spooky Putty monster"]))))) && ((0,dist.have)((0,dist.$item)(fights_templateObject38 || (fights_templateObject38 = fights_taggedTemplateLiteral(["Rain-Doh black box"])))) || (0,dist.have)((0,dist.$item)(fights_templateObject39 || (fights_templateObject39 = fights_taggedTemplateLiteral(["Rain-Doh box full of monster"])))))) {
    return 6 - (0,dist.get)("spookyPuttyCopiesMade") - (0,dist.get)("_raindohCopiesMade") + (0,external_kolmafia_.itemAmount)((0,dist.$item)(fights_templateObject40 || (fights_templateObject40 = fights_taggedTemplateLiteral(["Spooky Putty monster"])))) + (0,external_kolmafia_.itemAmount)((0,dist.$item)(fights_templateObject41 || (fights_templateObject41 = fights_taggedTemplateLiteral(["Rain-Doh box full of monster"]))));
  } else if ((0,dist.have)((0,dist.$item)(fights_templateObject42 || (fights_templateObject42 = fights_taggedTemplateLiteral(["Spooky Putty sheet"])))) || (0,dist.have)((0,dist.$item)(fights_templateObject43 || (fights_templateObject43 = fights_taggedTemplateLiteral(["Spooky Putty monster"]))))) {
    return 5 - (0,dist.get)("spookyPuttyCopiesMade") + (0,external_kolmafia_.itemAmount)((0,dist.$item)(fights_templateObject44 || (fights_templateObject44 = fights_taggedTemplateLiteral(["Spooky Putty monster"]))));
  } else if ((0,dist.have)((0,dist.$item)(fights_templateObject45 || (fights_templateObject45 = fights_taggedTemplateLiteral(["Rain-Doh black box"])))) || (0,dist.have)((0,dist.$item)(fights_templateObject46 || (fights_templateObject46 = fights_taggedTemplateLiteral(["Rain-Doh box full of monster"]))))) {
    return 5 - (0,dist.get)("_raindohCopiesMade") + (0,external_kolmafia_.itemAmount)((0,dist.$item)(fights_templateObject47 || (fights_templateObject47 = fights_taggedTemplateLiteral(["Rain-Doh box full of monster"]))));
  }

  return 0;
}, () => {
  if ((0,dist.have)((0,dist.$item)(fights_templateObject48 || (fights_templateObject48 = fights_taggedTemplateLiteral(["Spooky Putty monster"]))))) return (0,external_kolmafia_.use)((0,dist.$item)(fights_templateObject49 || (fights_templateObject49 = fights_taggedTemplateLiteral(["Spooky Putty monster"]))));
  return (0,external_kolmafia_.use)((0,dist.$item)(fights_templateObject50 || (fights_templateObject50 = fights_taggedTemplateLiteral(["Rain-Doh box full of monster"]))));
}), new CopierFight("4-d Camera", () => (0,dist.have)((0,dist.$item)(fights_templateObject51 || (fights_templateObject51 = fights_taggedTemplateLiteral(["shaking 4-d camera"])))) && (0,dist.get)("cameraMonster") === copiedMonster() && !(0,dist.get)("_cameraUsed"), () => (0,dist.have)((0,dist.$item)(fights_templateObject52 || (fights_templateObject52 = fights_taggedTemplateLiteral(["shaking 4-d camera"])))) && (0,dist.get)("cameraMonster") === copiedMonster() && !(0,dist.get)("_cameraUsed") ? 1 : 0, () => (0,external_kolmafia_.use)((0,dist.$item)(fights_templateObject53 || (fights_templateObject53 = fights_taggedTemplateLiteral(["shaking 4-d camera"]))))), new CopierFight("Ice Sculpture", () => (0,dist.have)((0,dist.$item)(fights_templateObject54 || (fights_templateObject54 = fights_taggedTemplateLiteral(["ice sculpture"])))) && (0,dist.get)("iceSculptureMonster") === copiedMonster() && !(0,dist.get)("_iceSculptureUsed"), () => (0,dist.have)((0,dist.$item)(fights_templateObject55 || (fights_templateObject55 = fights_taggedTemplateLiteral(["ice sculpture"])))) && (0,dist.get)("iceSculptureMonster") === copiedMonster() && !(0,dist.get)("_iceSculptureUsed") ? 1 : 0, () => (0,external_kolmafia_.use)((0,dist.$item)(fights_templateObject56 || (fights_templateObject56 = fights_taggedTemplateLiteral(["ice sculpture"]))))), new CopierFight("Green Taffy", () => (0,dist.have)((0,dist.$item)(fights_templateObject57 || (fights_templateObject57 = fights_taggedTemplateLiteral(["envyfish egg"])))) && (0,dist.get)("envyfishMonster") === copiedMonster() && !(0,dist.get)("_envyfishEggUsed"), () => (0,dist.have)((0,dist.$item)(fights_templateObject58 || (fights_templateObject58 = fights_taggedTemplateLiteral(["envyfish egg"])))) && (0,dist.get)("envyfishMonster") === copiedMonster() && !(0,dist.get)("_envyfishEggUsed") ? 1 : 0, () => (0,external_kolmafia_.use)((0,dist.$item)(fights_templateObject59 || (fights_templateObject59 = fights_taggedTemplateLiteral(["envyfish egg"]))))), new CopierFight("Professor MeatChain", () => false, () => (0,dist.have)((0,dist.$familiar)(fights_templateObject60 || (fights_templateObject60 = fights_taggedTemplateLiteral(["Pocket Professor"])))) && !(0,dist.get)("_dr_meatChain", false) ? 10 : 0, () => {
  return;
}), new CopierFight("Professor WeightChain", () => false, () => (0,dist.have)((0,dist.$familiar)(fights_templateObject61 || (fights_templateObject61 = fights_taggedTemplateLiteral(["Pocket Professor"])))) && !(0,dist.get)("_dr_weightChain", false) ? 5 : 0, () => {
  return;
})];
function copierCount() {
  return sum(copierSources.map(source => source.potential()));
}

function chainSetup() {
  itemMood().execute((0,globalvars/* estimatedTurns */.A)());
  safeRestore();
  freeFightMood().execute(50);

  if (!(0,dist.get)("_dr_pyecUsed", false)) {
    withStash((0,dist.$items)(fights_templateObject62 || (fights_templateObject62 = fights_taggedTemplateLiteral(["Platinum Yendorian Express Card, Bag o' Tricks"]))), () => {
      if ((0,dist.have)((0,dist.$item)(fights_templateObject63 || (fights_templateObject63 = fights_taggedTemplateLiteral(["Platinum Yendorian Express Card"])))) && !(0,dist.get)("expressCardUsed")) {
        (0,external_kolmafia_.use)((0,dist.$item)(fights_templateObject64 || (fights_templateObject64 = fights_taggedTemplateLiteral(["Platinum Yendorian Express Card"]))));
      }

      if ((0,dist.have)((0,dist.$item)(fights_templateObject65 || (fights_templateObject65 = fights_taggedTemplateLiteral(["Bag o' Tricks"])))) && !(0,dist.get)("_bagOTricksUsed")) {
        (0,external_kolmafia_.use)((0,dist.$item)(fights_templateObject66 || (fights_templateObject66 = fights_taggedTemplateLiteral(["Bag o' Tricks"]))));
      }

      (0,dist.set)("_dr_pyecUsed", true);
    });
  }

  if ((0,dist.have)((0,dist.$item)(fights_templateObject67 || (fights_templateObject67 = fights_taggedTemplateLiteral(["License to Chill"])))) && !(0,dist.get)("_licenseToChillUsed")) (0,external_kolmafia_.use)((0,dist.$item)(fights_templateObject68 || (fights_templateObject68 = fights_taggedTemplateLiteral(["License to Chill"]))));
  if (dist.SourceTerminal.have()) dist.SourceTerminal.educate([(0,dist.$skill)(fights_templateObject69 || (fights_templateObject69 = fights_taggedTemplateLiteral(["Extract"]))), (0,dist.$skill)(fights_templateObject70 || (fights_templateObject70 = fights_taggedTemplateLiteral(["Digitize"])))]); // Fix invalid copiers (caused by ascending or combat text-effects)

  if ((0,dist.have)((0,dist.$item)(fights_templateObject71 || (fights_templateObject71 = fights_taggedTemplateLiteral(["Spooky Putty monster"])))) && !(0,dist.get)("spookyPuttyMonster")) {
    // Visit the description to update the monster as it may be valid but not tracked correctly
    (0,external_kolmafia_.visitUrl)("desc_item.php?whichitem=".concat((0,dist.$item)(fights_templateObject72 || (fights_templateObject72 = fights_taggedTemplateLiteral(["Spooky Putty monster"]))).descid), false, false);

    if (!(0,dist.get)("spookyPuttyMonster")) {
      // Still invalid, use it to turn back into the spooky putty sheet
      (0,external_kolmafia_.use)((0,dist.$item)(fights_templateObject73 || (fights_templateObject73 = fights_taggedTemplateLiteral(["Spooky Putty monster"]))));
    }
  }

  if ((0,dist.have)((0,dist.$item)(fights_templateObject74 || (fights_templateObject74 = fights_taggedTemplateLiteral(["Rain-Doh box full of monster"])))) && !(0,dist.get)("rainDohMonster")) {
    (0,external_kolmafia_.visitUrl)("desc_item.php?whichitem=".concat((0,dist.$item)(fights_templateObject75 || (fights_templateObject75 = fights_taggedTemplateLiteral(["Rain-Doh box full of monster"]))).descid), false, false);
  }

  if ((0,dist.have)((0,dist.$item)(fights_templateObject76 || (fights_templateObject76 = fights_taggedTemplateLiteral(["shaking 4-d camera"])))) && !(0,dist.get)("cameraMonster")) {
    (0,external_kolmafia_.visitUrl)("desc_item.php?whichitem=".concat((0,dist.$item)(fights_templateObject77 || (fights_templateObject77 = fights_taggedTemplateLiteral(["shaking 4-d camera"]))).descid), false, false);
  }

  if ((0,dist.have)((0,dist.$item)(fights_templateObject78 || (fights_templateObject78 = fights_taggedTemplateLiteral(["envyfish egg"])))) && !(0,dist.get)("envyfishMonster")) {
    (0,external_kolmafia_.visitUrl)("desc_item.php?whichitem=".concat((0,dist.$item)(fights_templateObject79 || (fights_templateObject79 = fights_taggedTemplateLiteral(["envyfish egg"]))).descid), false, false);
  }
}

function getCopierFight() {
  var _iterator = fights_createForOfIteratorHelper(copierSources),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var fight = _step.value;
      if (fight.available()) return fight;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
}

function dailyFights() {
  if ((0,external_kolmafia_.myInebriety)() > (0,external_kolmafia_.inebrietyLimit)()) return;

  if (!(0,dist.get)("_photocopyUsed")) {
    withStash((0,dist.$items)(fights_templateObject80 || (fights_templateObject80 = fights_taggedTemplateLiteral(["Spooky Putty sheet"]))), () => {
      chainSetup(); // FIRST EMBEZZLER CHAIN

      if ((0,dist.have)((0,dist.$familiar)(fights_templateObject81 || (fights_templateObject81 = fights_taggedTemplateLiteral(["Pocket Professor"])))) && !(0,dist.get)("_dr_meatChain", false)) {
        var fightSource = getCopierFight();
        if (!fightSource) return;
        (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(fights_templateObject82 || (fights_templateObject82 = fights_taggedTemplateLiteral(["Pocket Professor"]))));
        freeFightOutfit([new lib/* Requirement */.nb([], {
          forceEquip: (0,dist.$items)(fights_templateObject83 || (fights_templateObject83 = fights_taggedTemplateLiteral(["Pocket Professor memory chip"])))
        })]);

        if ((0,dist.get)("_pocketProfessorLectures") < 2 + Math.ceil(Math.sqrt((0,external_kolmafia_.familiarWeight)((0,external_kolmafia_.myFamiliar)()) + (0,external_kolmafia_.weightAdjustment)()))) {
          (0,combat.withMacro)(firstChainMacro(), () => fightSource.run({
            location: (0,lib/* determineDraggableZoneAndEnsureAccess */.xd)(),
            macro: firstChainMacro()
          }));
        }

        (0,dist.set)("_dr_meatChain", true);
        (0,lib/* safeInterrupt */.pl)();
      } // SECOND EMBEZZLER CHAIN


      if ((0,dist.have)((0,dist.$familiar)(fights_templateObject84 || (fights_templateObject84 = fights_taggedTemplateLiteral(["Pocket Professor"])))) && !(0,dist.get)("_dr_weightChain", false)) {
        var _fightSource = getCopierFight();

        if (!_fightSource) return;
        (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(fights_templateObject85 || (fights_templateObject85 = fights_taggedTemplateLiteral(["Pocket Professor"]))));
        var requirements = lib/* Requirement.merge */.nb.merge([new lib/* Requirement */.nb(["Familiar Weight"], {
          forceEquip: (0,dist.$items)(fights_templateObject86 || (fights_templateObject86 = fights_taggedTemplateLiteral(["Pocket Professor memory chip"])))
        })].concat(fights_toConsumableArray(_fightSource.requirements)));
        (0,dist.maximizeCached)(requirements.maximizeParameters(), requirements.maximizeOptions());

        if ((0,dist.get)("_pocketProfessorLectures") < 2 + Math.ceil(Math.sqrt((0,external_kolmafia_.familiarWeight)((0,external_kolmafia_.myFamiliar)()) + (0,external_kolmafia_.weightAdjustment)()))) {
          (0,combat.withMacro)(secondChainMacro(), () => _fightSource.run({
            location: (0,lib/* determineDraggableZoneAndEnsureAccess */.xd)(),
            macro: secondChainMacro()
          }));
        }

        (0,dist.set)("_dr_weightChain", true);
        (0,lib/* safeInterrupt */.pl)();
      } // REMAINING EMBEZZLER FIGHTS


      var nextFight = getCopierFight();

      while (nextFight !== null) {
        if ((0,dist.have)((0,dist.$skill)(fights_templateObject87 || (fights_templateObject87 = fights_taggedTemplateLiteral(["Musk of the Moose"])))) && !(0,dist.have)((0,dist.$effect)(fights_templateObject88 || (fights_templateObject88 = fights_taggedTemplateLiteral(["Musk of the Moose"]))))) (0,external_kolmafia_.useSkill)((0,dist.$skill)(fights_templateObject89 || (fights_templateObject89 = fights_taggedTemplateLiteral(["Musk of the Moose"]))));
        (0,combat.withMacro)(copierMacro(), () => {
          if (nextFight) {
            (0,external_kolmafia_.useFamiliar)(fairyFamiliar());

            if (((0,dist.have)((0,dist.$familiar)(fights_templateObject90 || (fights_templateObject90 = fights_taggedTemplateLiteral(["Reanimated Reanimator"])))) || (0,dist.have)((0,dist.$familiar)(fights_templateObject91 || (fights_templateObject91 = fights_taggedTemplateLiteral(["Obtuse Angel"]))))) && (0,dist.get)("_badlyRomanticArrows") === 0 && !nextFight.draggable) {
              if ((0,dist.have)((0,dist.$familiar)(fights_templateObject92 || (fights_templateObject92 = fights_taggedTemplateLiteral(["Obtuse Angel"]))))) (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(fights_templateObject93 || (fights_templateObject93 = fights_taggedTemplateLiteral(["Obtuse Angel"]))));else (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(fights_templateObject94 || (fights_templateObject94 = fights_taggedTemplateLiteral(["Reanimated Reanimator"]))));
            }

            if (nextFight.draggable) {
              (0,external_kolmafia_.print)("RUNNING NEXT FIGHT: ".concat(nextFight.name, "."), "blue");
              var type = nextFight.name === "Backup" ? lib/* draggableFight.BACKUP */.Te.BACKUP : lib/* draggableFight.WANDERER */.Te.WANDERER;
              var location = (0,lib/* determineDraggableZoneAndEnsureAccess */.xd)(type);
              (0,external_kolmafia_.setLocation)(location);
              freeFightOutfit(nextFight.requirements);
              nextFight.run({
                location: location
              });
            } else {
              (0,external_kolmafia_.setLocation)((0,dist.$location)(fights_templateObject95 || (fights_templateObject95 = fights_taggedTemplateLiteral(["Noob Cave"]))));
              freeFightOutfit(nextFight.requirements);
              nextFight.run({
                location: (0,dist.$location)(fights_templateObject96 || (fights_templateObject96 = fights_taggedTemplateLiteral(["Noob Cave"])))
              });
            }
          }
        });
        nextFight = getCopierFight();

        if ((0,lib/* kramcoGuaranteed */.DR)() && (!nextFight || nextFight.name !== "Backup" && nextFight.name !== "Digitize")) {
          doSausage();
        }

        (0,lib/* safeInterrupt */.pl)();
      } // Check in case our prof gained enough exp during the profchains


      if (thesisReady()) deliverThesis();
    });
  }
}

var FreeFight = /*#__PURE__*/function () {
  function FreeFight(available, run) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    fights_classCallCheck(this, FreeFight);

    fights_defineProperty(this, "available", void 0);

    fights_defineProperty(this, "run", void 0);

    fights_defineProperty(this, "options", void 0);

    this.available = available;
    this.run = run;
    this.options = options;
  }

  fights_createClass(FreeFight, [{
    key: "runAll",
    value: function runAll() {
      if (!this.available()) return;
      if ((this.options.cost ? this.options.cost() : 0) > (0,dist.get)("dr_valueOfFreeFight", 4000)) return;

      while (this.available()) {
        var _this$options$familia;

        if (dist.SongBoom.songChangesLeft() > 0) dist.SongBoom.setSong("Total Eclipse of Your Meat");
        (0,external_kolmafia_.useFamiliar)(this.options.familiar ? (_this$options$familia = this.options.familiar()) !== null && _this$options$familia !== void 0 ? _this$options$familia : freeFightFamiliar() : freeFightFamiliar());
        freeFightMood().execute();
        freeFightOutfit(this.options.requirements ? this.options.requirements() : []);
        safeRestore();
        (0,combat.withMacro)(combat.Macro.basicCombat(), this.run); // Slot in our Professor Thesis if it's become available

        if (thesisReady()) deliverThesis();
        (0,lib/* safeInterrupt */.pl)();
      }
    }
  }]);

  return FreeFight;
}();

var pygmyMacro = combat.Macro.if_("monstername pygmy bowler", combat.Macro.trySkill((0,dist.$skill)(fights_templateObject97 || (fights_templateObject97 = fights_taggedTemplateLiteral(["Snokebomb"])))).item((0,dist.$item)(fights_templateObject98 || (fights_templateObject98 = fights_taggedTemplateLiteral(["Louder Than Bomb"]))))).if_("monstername pygmy orderlies", combat.Macro.trySkill((0,dist.$skill)(fights_templateObject99 || (fights_templateObject99 = fights_taggedTemplateLiteral(["Feel Hatred"])))).item((0,dist.$item)(fights_templateObject100 || (fights_templateObject100 = fights_taggedTemplateLiteral(["divine champagne popper"]))))).if_("monstername pygmy janitor", combat.Macro.item((0,dist.$item)(fights_templateObject101 || (fights_templateObject101 = fights_taggedTemplateLiteral(["tennis ball"]))))).if_("monstername time-spinner prank", combat.Macro.basicCombat()).abort();
var freeFightSources = [// Get a Fish Head from our robortender if available
new FreeFight(() => (0,dist.have)((0,dist.$item)(fights_templateObject102 || (fights_templateObject102 = fights_taggedTemplateLiteral(["Cargo Cultist Shorts"])))) && (0,dist.have)((0,dist.$familiar)(_templateObject103 || (_templateObject103 = fights_taggedTemplateLiteral(["Robortender"])))) && !(0,dist.get)("_cargoPocketEmptied") && String((0,dist.get)("cargoPocketsEmptied", "")).indexOf("428") === -1, () => (0,external_kolmafia_.cliExecute)("cargo monster Mob Penguin Thug"), {
  familiar: () => (0,dist.$familiar)(_templateObject104 || (_templateObject104 = fights_taggedTemplateLiteral(["Robortender"])))
}), new FreeFight(() => {
  var _ChateauMantegna$pain3, _ChateauMantegna$pain4, _ChateauMantegna$pain5;

  return dist.ChateauMantegna.have() && !dist.ChateauMantegna.paintingFought() && ((_ChateauMantegna$pain3 = (_ChateauMantegna$pain4 = dist.ChateauMantegna.paintingMonster()) === null || _ChateauMantegna$pain4 === void 0 ? void 0 : (_ChateauMantegna$pain5 = _ChateauMantegna$pain4.attributes) === null || _ChateauMantegna$pain5 === void 0 ? void 0 : _ChateauMantegna$pain5.includes("FREE")) !== null && _ChateauMantegna$pain3 !== void 0 ? _ChateauMantegna$pain3 : false);
}, () => dist.ChateauMantegna.fightPainting(), {
  familiar: () => (0,dist.have)((0,dist.$familiar)(_templateObject105 || (_templateObject105 = fights_taggedTemplateLiteral(["Robortender"])))) && (0,dist.$phyla)(_templateObject106 || (_templateObject106 = fights_taggedTemplateLiteral(["elf, fish, hobo, penguin, constellation"]))).some(phylum => {
    var _ChateauMantegna$pain6;

    return phylum === ((_ChateauMantegna$pain6 = dist.ChateauMantegna.paintingMonster()) === null || _ChateauMantegna$pain6 === void 0 ? void 0 : _ChateauMantegna$pain6.phylum);
  }) ? (0,dist.$familiar)(_templateObject107 || (_templateObject107 = fights_taggedTemplateLiteral(["Robortender"]))) : null
}), new FreeFight(() => (0,dist.get)("questL02Larva") !== "unstarted" && !(0,dist.get)("_eldritchTentacleFought"), () => {
  var haveEldritchEssence = (0,external_kolmafia_.itemAmount)((0,dist.$item)(_templateObject108 || (_templateObject108 = fights_taggedTemplateLiteral(["eldritch essence"])))) !== 0;
  (0,external_kolmafia_.visitUrl)("place.php?whichplace=forestvillage&action=fv_scientist", false);
  if (!(0,external_kolmafia_.handlingChoice)()) throw "No choice?";
  (0,external_kolmafia_.runChoice)(haveEldritchEssence ? 2 : 1);
}), new FreeFight(() => (0,dist.have)((0,dist.$skill)(_templateObject109 || (_templateObject109 = fights_taggedTemplateLiteral(["Evoke Eldritch Horror"])))) && !(0,dist.get)("_eldritchHorrorEvoked"), () => (0,external_kolmafia_.useSkill)((0,dist.$skill)(_templateObject110 || (_templateObject110 = fights_taggedTemplateLiteral(["Evoke Eldritch Horror"]))))), new FreeFight(() => (0,lib/* clamp */.uZ)(3 - (0,dist.get)("_lynyrdSnareUses"), 0, 3), () => (0,external_kolmafia_.use)((0,dist.$item)(_templateObject111 || (_templateObject111 = fights_taggedTemplateLiteral(["lynyrd snare"])))), {
  cost: () => (0,external_kolmafia_.mallPrice)((0,dist.$item)(_templateObject112 || (_templateObject112 = fights_taggedTemplateLiteral(["lynyrd snare"]))))
}), new FreeFight(() => (0,dist.have)((0,dist.$item)(_templateObject113 || (_templateObject113 = fights_taggedTemplateLiteral(["[glitch season reward name]"])))) && !(0,dist.get)("_glitchMonsterFights"), () => {
  (0,external_kolmafia_.restoreHp)((0,external_kolmafia_.myMaxhp)());
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject114 || (_templateObject114 = fights_taggedTemplateLiteral(["[glitch season reward name]"]))));
  (0,external_kolmafia_.visitUrl)("inv_eat.php?pwd&whichitem=10207");
  (0,external_kolmafia_.runCombat)();
}), // 6	10	0	0	Infernal Seals	variety of items; must be Seal Clubber for 5, must also have Claw of the Infernal Seal in inventory for 10.
new FreeFight(() => {
  var maxSeals = (0,external_kolmafia_.retrieveItem)(1, (0,dist.$item)(_templateObject115 || (_templateObject115 = fights_taggedTemplateLiteral(["Claw of the Infernal Seal"])))) ? 10 : 5;
  var maxSealsAvailable = (0,dist.get)("lastGuildStoreOpen") === (0,external_kolmafia_.myAscensions)() ? maxSeals : Math.min(maxSeals, Math.floor((0,external_kolmafia_.availableAmount)((0,dist.$item)(_templateObject116 || (_templateObject116 = fights_taggedTemplateLiteral(["seal-blubber candle"])))) / 3));
  return (0,external_kolmafia_.myClass)() === (0,dist.$class)(_templateObject117 || (_templateObject117 = fights_taggedTemplateLiteral(["Seal Clubber"]))) ? Math.max(maxSealsAvailable - (0,dist.get)("_sealsSummoned"), 0) : 0;
}, () => {
  var figurine = (0,dist.get)("lastGuildStoreOpen") === (0,external_kolmafia_.myAscensions)() ? (0,dist.$item)(_templateObject118 || (_templateObject118 = fights_taggedTemplateLiteral(["figurine of a wretched-looking seal"]))) : (0,dist.$item)(_templateObject119 || (_templateObject119 = fights_taggedTemplateLiteral(["figurine of an ancient seal"])));
  (0,external_kolmafia_.retrieveItem)(1, figurine);
  (0,external_kolmafia_.retrieveItem)((0,dist.get)("lastGuildStoreOpen") === (0,external_kolmafia_.myAscensions)() ? 1 : 3, (0,dist.$item)(_templateObject120 || (_templateObject120 = fights_taggedTemplateLiteral(["seal-blubber candle"]))));
  (0,combat.withMacro)(combat.Macro.startCombat().trySkill((0,dist.$skill)(_templateObject121 || (_templateObject121 = fights_taggedTemplateLiteral(["Furious Wallop"])))).while_("hasskill Lunging Thrust-Smack", combat.Macro.skill((0,dist.$skill)(_templateObject122 || (_templateObject122 = fights_taggedTemplateLiteral(["Lunging Thrust-Smack"]))))).while_("hasskill Thrust-Smack", combat.Macro.skill((0,dist.$skill)(_templateObject123 || (_templateObject123 = fights_taggedTemplateLiteral(["Thrust-Smack"]))))).while_("hasskill Lunge Smack", combat.Macro.skill((0,dist.$skill)(_templateObject124 || (_templateObject124 = fights_taggedTemplateLiteral(["Lunge Smack"]))))).attack().repeat(), () => (0,external_kolmafia_.use)(figurine));
}, {
  requirements: () => [new lib/* Requirement */.nb(["Club"], {})]
}), new FreeFight(() => (0,lib/* clamp */.uZ)(10 - (0,dist.get)("_brickoFights"), 0, 10), () => (0,external_kolmafia_.use)((0,dist.$item)(_templateObject125 || (_templateObject125 = fights_taggedTemplateLiteral(["BRICKO ooze"])))), {
  cost: () => (0,external_kolmafia_.mallPrice)((0,dist.$item)(_templateObject126 || (_templateObject126 = fights_taggedTemplateLiteral(["BRICKO eye brick"])))) + 2 * (0,external_kolmafia_.mallPrice)((0,dist.$item)(_templateObject127 || (_templateObject127 = fights_taggedTemplateLiteral(["BRICKO brick"]))))
}), //Initial 9 Pygmy fights
new FreeFight(() => (0,dist.get)("questL11Worship") !== "unstarted" ? (0,lib/* clamp */.uZ)(9 - (0,dist.get)("_drunkPygmyBanishes"), 0, 9) : 0, () => {
  (0,external_kolmafia_.putCloset)((0,external_kolmafia_.itemAmount)((0,dist.$item)(_templateObject128 || (_templateObject128 = fights_taggedTemplateLiteral(["bowling ball"])))), (0,dist.$item)(_templateObject129 || (_templateObject129 = fights_taggedTemplateLiteral(["bowling ball"]))));
  (0,external_kolmafia_.retrieveItem)((0,lib/* clamp */.uZ)(9 - (0,dist.get)("_drunkPygmyBanishes"), 0, 9), (0,dist.$item)(_templateObject130 || (_templateObject130 = fights_taggedTemplateLiteral(["Bowl of Scorpions"]))));
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject131 || (_templateObject131 = fights_taggedTemplateLiteral(["Louder Than Bomb"]))));
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject132 || (_templateObject132 = fights_taggedTemplateLiteral(["tennis ball"]))));
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject133 || (_templateObject133 = fights_taggedTemplateLiteral(["divine champagne popper"]))));
  (0,combat.adventureMacro)((0,dist.$location)(_templateObject134 || (_templateObject134 = fights_taggedTemplateLiteral(["The Hidden Bowling Alley"]))), pygmyMacro);
}), //10th Pygmy fight. If we have an orb, equip it for this fight, to save for later
new FreeFight(() => (0,dist.get)("questL11Worship") !== "unstarted" && (0,dist.get)("_drunkPygmyBanishes") === 9, () => {
  (0,external_kolmafia_.putCloset)((0,external_kolmafia_.itemAmount)((0,dist.$item)(_templateObject135 || (_templateObject135 = fights_taggedTemplateLiteral(["bowling ball"])))), (0,dist.$item)(_templateObject136 || (_templateObject136 = fights_taggedTemplateLiteral(["bowling ball"]))));
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject137 || (_templateObject137 = fights_taggedTemplateLiteral(["Bowl of Scorpions"]))));
  (0,combat.adventureMacro)((0,dist.$location)(_templateObject138 || (_templateObject138 = fights_taggedTemplateLiteral(["The Hidden Bowling Alley"]))), pygmyMacro);
}, {
  requirements: () => [new lib/* Requirement */.nb([], {
    forceEquip: (0,dist.$items)(_templateObject139 || (_templateObject139 = fights_taggedTemplateLiteral(["miniature crystal ball"]))).filter(item => (0,dist.have)(item))
  })]
}), //11th pygmy fight if we lack a saber
new FreeFight(() => (0,dist.get)("questL11Worship") !== "unstarted" && (0,dist.get)("_drunkPygmyBanishes") === 10, () => {
  (0,external_kolmafia_.putCloset)((0,external_kolmafia_.itemAmount)((0,dist.$item)(_templateObject140 || (_templateObject140 = fights_taggedTemplateLiteral(["bowling ball"])))), (0,dist.$item)(_templateObject141 || (_templateObject141 = fights_taggedTemplateLiteral(["bowling ball"]))));
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject142 || (_templateObject142 = fights_taggedTemplateLiteral(["Bowl of Scorpions"]))));
  (0,combat.adventureMacro)((0,dist.$location)(_templateObject143 || (_templateObject143 = fights_taggedTemplateLiteral(["The Hidden Bowling Alley"]))), pygmyMacro);
}), //Finally, saber or not, if we have a drunk pygmy in our crystal ball, let it out.
new FreeFight(() => (0,dist.get)("questL11Worship") !== "unstarted" && (0,dist.get)("crystalBallMonster") === (0,dist.$monster)(_templateObject144 || (_templateObject144 = fights_taggedTemplateLiteral(["drunk pygmy"]))) && (0,dist.get)("_drunkPygmyBanishes") >= 11, () => {
  (0,external_kolmafia_.putCloset)((0,external_kolmafia_.itemAmount)((0,dist.$item)(_templateObject145 || (_templateObject145 = fights_taggedTemplateLiteral(["bowling ball"])))), (0,dist.$item)(_templateObject146 || (_templateObject146 = fights_taggedTemplateLiteral(["bowling ball"]))));
  (0,external_kolmafia_.retrieveItem)(1, (0,dist.$item)(_templateObject147 || (_templateObject147 = fights_taggedTemplateLiteral(["Bowl of Scorpions"]))));
  (0,combat.adventureMacro)((0,dist.$location)(_templateObject148 || (_templateObject148 = fights_taggedTemplateLiteral(["The Hidden Bowling Alley"]))), combat.Macro.abort());
}, {
  requirements: () => [new lib/* Requirement */.nb([], {
    forceEquip: (0,dist.$items)(_templateObject149 || (_templateObject149 = fights_taggedTemplateLiteral(["miniature crystal ball"]))).filter(item => (0,dist.have)(item)),
    bonusEquip: new Map([[(0,dist.$item)(_templateObject150 || (_templateObject150 = fights_taggedTemplateLiteral(["garbage sticker"]))), 100]]),
    preventEquip: (0,dist.$items)(_templateObject151 || (_templateObject151 = fights_taggedTemplateLiteral(["Staff of Queso Escusado, stinky cheese sword"])))
  })]
}), new FreeFight(() => (0,dist.have)((0,dist.$item)(_templateObject152 || (_templateObject152 = fights_taggedTemplateLiteral(["Time-Spinner"])))) && (0,dist.$location)(_templateObject153 || (_templateObject153 = fights_taggedTemplateLiteral(["The Hidden Bowling Alley"]))).combatQueue.includes("drunk pygmy") && (0,dist.get)("_timeSpinnerMinutesUsed") < 8, () => {
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject154 || (_templateObject154 = fights_taggedTemplateLiteral(["Bowl of Scorpions"]))));
  combat.Macro.trySkill((0,dist.$skill)(_templateObject155 || (_templateObject155 = fights_taggedTemplateLiteral(["Extract"])))).trySkill((0,dist.$skill)(_templateObject156 || (_templateObject156 = fights_taggedTemplateLiteral(["Sing Along"])))).setAutoAttack();
  (0,external_kolmafia_.visitUrl)("inv_use.php?whichitem=".concat((0,external_kolmafia_.toInt)((0,dist.$item)(_templateObject157 || (_templateObject157 = fights_taggedTemplateLiteral(["Time-Spinner"]))))));
  (0,external_kolmafia_.runChoice)(1);
  (0,external_kolmafia_.visitUrl)("choice.php?whichchoice=1196&monid=".concat((0,dist.$monster)(_templateObject158 || (_templateObject158 = fights_taggedTemplateLiteral(["drunk pygmy"]))).id, "&option=1"));
}, {
  requirements: () => [new lib/* Requirement */.nb([], {
    bonusEquip: new Map([[(0,dist.$item)(_templateObject159 || (_templateObject159 = fights_taggedTemplateLiteral(["garbage sticker"]))), 100]]),
    preventEquip: (0,dist.$items)(_templateObject160 || (_templateObject160 = fights_taggedTemplateLiteral(["Staff of Queso Escusado, stinky cheese sword"])))
  })]
}), new FreeFight(() => (0,dist.get)("_sausageFights") === 0 && (0,dist.have)((0,dist.$item)(_templateObject161 || (_templateObject161 = fights_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))), () => (0,external_kolmafia_.adv1)((0,lib/* determineDraggableZoneAndEnsureAccess */.xd)(), -1, ""), {
  requirements: () => [new lib/* Requirement */.nb([], {
    forceEquip: (0,dist.$items)(_templateObject162 || (_templateObject162 = fights_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))
  })]
}), new FreeFight(() => (0,dist.get)("questL11Ron") === "finished" ? 5 - (0,dist.get)("_glarkCableUses") : 0, () => {
  (0,external_kolmafia_.retrieveItem)(5 - (0,dist.get)("_glarkCableUses"), (0,dist.$item)(_templateObject163 || (_templateObject163 = fights_taggedTemplateLiteral(["glark cable"]))));
  (0,combat.adventureMacro)((0,dist.$location)(_templateObject164 || (_templateObject164 = fights_taggedTemplateLiteral(["The Red Zeppelin"]))), combat.Macro.item((0,dist.$item)(_templateObject165 || (_templateObject165 = fights_taggedTemplateLiteral(["glark cable"])))));
}, {
  cost: () => (0,external_kolmafia_.mallPrice)((0,dist.$item)(_templateObject166 || (_templateObject166 = fights_taggedTemplateLiteral(["glark cable"]))))
}), // Mushroom garden
new FreeFight(() => ((0,dist.have)((0,dist.$item)(_templateObject167 || (_templateObject167 = fights_taggedTemplateLiteral(["packet of mushroom spores"])))) || (0,external_kolmafia_.getCampground)()["packet of mushroom spores"] !== undefined) && (0,dist.get)("_mushroomGardenFights") === 0, () => {
  if ((0,dist.have)((0,dist.$item)(_templateObject168 || (_templateObject168 = fights_taggedTemplateLiteral(["packet of mushroom spores"]))))) (0,external_kolmafia_.use)((0,dist.$item)(_templateObject169 || (_templateObject169 = fights_taggedTemplateLiteral(["packet of mushroom spores"]))));

  if (dist.SourceTerminal.have()) {
    dist.SourceTerminal.educate([(0,dist.$skill)(_templateObject170 || (_templateObject170 = fights_taggedTemplateLiteral(["Extract"]))), (0,dist.$skill)(_templateObject171 || (_templateObject171 = fights_taggedTemplateLiteral(["Portscan"])))]);
  }

  (0,combat.adventureMacro)((0,dist.$location)(_templateObject172 || (_templateObject172 = fights_taggedTemplateLiteral(["Your Mushroom Garden"]))), combat.Macro.if_("hasskill macrometeorite", combat.Macro.trySkill((0,dist.$skill)(_templateObject173 || (_templateObject173 = fights_taggedTemplateLiteral(["Portscan"]))))).basicCombat());
  if ((0,dist.have)((0,dist.$item)(_templateObject174 || (_templateObject174 = fights_taggedTemplateLiteral(["packet of tall grass seeds"]))))) (0,external_kolmafia_.use)((0,dist.$item)(_templateObject175 || (_templateObject175 = fights_taggedTemplateLiteral(["packet of tall grass seeds"]))));
}, {
  familiar: () => (0,dist.have)((0,dist.$familiar)(_templateObject176 || (_templateObject176 = fights_taggedTemplateLiteral(["Robortender"])))) ? (0,dist.$familiar)(_templateObject177 || (_templateObject177 = fights_taggedTemplateLiteral(["Robortender"]))) : null
}), // Portscan and mushroom garden
new FreeFight(() => ((0,dist.have)((0,dist.$item)(_templateObject178 || (_templateObject178 = fights_taggedTemplateLiteral(["packet of mushroom spores"])))) || (0,external_kolmafia_.getCampground)()["packet of mushroom spores"] !== undefined) && (0,external_kolmafia_.getCounters)("portscan.edu", 0, 0) === "portscan.edu" && (0,dist.have)((0,dist.$skill)(_templateObject179 || (_templateObject179 = fights_taggedTemplateLiteral(["Macrometeorite"])))) && (0,dist.get)("_macrometeoriteUses") < 10, () => {
  if ((0,dist.have)((0,dist.$item)(_templateObject180 || (_templateObject180 = fights_taggedTemplateLiteral(["packet of mushroom spores"]))))) (0,external_kolmafia_.use)((0,dist.$item)(_templateObject181 || (_templateObject181 = fights_taggedTemplateLiteral(["packet of mushroom spores"]))));

  if (dist.SourceTerminal.have()) {
    dist.SourceTerminal.educate([(0,dist.$skill)(_templateObject182 || (_templateObject182 = fights_taggedTemplateLiteral(["Extract"]))), (0,dist.$skill)(_templateObject183 || (_templateObject183 = fights_taggedTemplateLiteral(["Portscan"])))]);
  }

  (0,combat.adventureMacro)((0,dist.$location)(_templateObject184 || (_templateObject184 = fights_taggedTemplateLiteral(["Your Mushroom Garden"]))), combat.Macro.if_("monstername government agent", combat.Macro.skill((0,dist.$skill)(_templateObject185 || (_templateObject185 = fights_taggedTemplateLiteral(["Macrometeorite"]))))).if_("monstername piranha plant", combat.Macro.if_("hasskill macrometeorite", combat.Macro.trySkill((0,dist.$skill)(_templateObject186 || (_templateObject186 = fights_taggedTemplateLiteral(["Portscan"]))))).basicCombat()));
  if ((0,dist.have)((0,dist.$item)(_templateObject187 || (_templateObject187 = fights_taggedTemplateLiteral(["packet of tall grass seeds"]))))) (0,external_kolmafia_.use)((0,dist.$item)(_templateObject188 || (_templateObject188 = fights_taggedTemplateLiteral(["packet of tall grass seeds"]))));
}), new FreeFight(() => (0,dist.have)((0,dist.$familiar)(_templateObject189 || (_templateObject189 = fights_taggedTemplateLiteral(["God Lobster"])))) ? (0,lib/* clamp */.uZ)(3 - (0,dist.get)("_godLobsterFights"), 0, 3) : 0, () => {
  lib/* propertyManager.setChoices */.kr.setChoices({
    1310: 3 //god lob stats

  });
  (0,external_kolmafia_.visitUrl)("main.php?fightgodlobster=1");
  (0,external_kolmafia_.runCombat)();
  (0,external_kolmafia_.visitUrl)("choice.php");
  if ((0,external_kolmafia_.handlingChoice)()) (0,external_kolmafia_.runChoice)(3);
}, {
  familiar: () => (0,dist.$familiar)(_templateObject190 || (_templateObject190 = fights_taggedTemplateLiteral(["God Lobster"])))
}), // 28	5	0	0	Witchess pieces	must have a Witchess Set; can copy for more
// Save one for digitizing later?
new FreeFight(() => dist.Witchess.have() ? (0,lib/* clamp */.uZ)(5 - dist.Witchess.fightsDone(), 0, 5) : 0, () => dist.Witchess.fightPiece(copiedMonster())), new FreeFight(() => (0,dist.get)("snojoAvailable") && (0,lib/* clamp */.uZ)(10 - (0,dist.get)("_snojoFreeFights"), 0, 10), () => {
  if ((0,dist.get)("snojoSetting", "NONE") === "NONE") {
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
    (0,external_kolmafia_.runChoice)(3);
  }

  (0,external_kolmafia_.adv1)((0,dist.$location)(_templateObject191 || (_templateObject191 = fights_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))), -1, "");
})];
function freeFights() {
  if ((0,external_kolmafia_.myInebriety)() > (0,external_kolmafia_.inebrietyLimit)()) return;
  lib/* propertyManager.setChoices */.kr.setChoices({
    1387: 2,
    //"You will go find two friends and meet me here."
    1324: 5 //Fight a random partier

  });

  var _iterator2 = fights_createForOfIteratorHelper(freeFightSources),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var freeFightSource = _step2.value;
      freeFightSource.runAll();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
var tunnelOfLove = new FreeFight(() => dist.TunnelOfLove.have() && !dist.TunnelOfLove.isUsed(), () => {
  dist.TunnelOfLove.fightAll("LOV Epaulettes", "Open Heart Surgery", "LOV Extraterrestrial Chocolate");
  (0,external_kolmafia_.visitUrl)("choice.php");
  if ((0,external_kolmafia_.handlingChoice)()) throw "Did not get all the way through LOV.";
});
function setNepQuestChoicesAndPrepItems() {
  var quest = (0,dist.get)("_questPartyFairQuest");

  if ((0,dist.get)("_questPartyFair") === "unstarted") {
    (0,external_kolmafia_.visitUrl)((0,external_kolmafia_.toUrl)((0,dist.$location)(_templateObject192 || (_templateObject192 = fights_taggedTemplateLiteral(["The Neverending Party"])))));
    quest = (0,dist.get)("_questPartyFairQuest");

    if (["food", "booze"].includes(quest)) {
      (0,external_kolmafia_.print)("Gerald/ine quest!", "blue");
      (0,external_kolmafia_.runChoice)(1); // Accept quest
    } else {
      (0,external_kolmafia_.runChoice)(2); // Decline quest
    }
  }

  if ((0,dist.get)("lastEncounter") === "Gone Kitchin'" && (0,external_kolmafia_.lastDecision)() === 3) {
    (0,external_kolmafia_.print)("Found Geraldine!", "blue");
    var partyFairInfo = (0,dist.get)("_questPartyFairProgress").split(" ");
    (0,external_kolmafia_.print)("Geraldine wants ".concat(partyFairInfo[0], " ").concat((0,external_kolmafia_.toItem)(partyFairInfo[1]).plural, ", please!"), "blue");
  }

  if ((0,dist.get)("lastEncounter") === "Forward to the Back" && (0,external_kolmafia_.lastDecision)() === 3) {
    (0,external_kolmafia_.print)("Found Gerald!", "blue");

    var _partyFairInfo = (0,dist.get)("_questPartyFairProgress").split(" ");

    (0,external_kolmafia_.print)("Gerald wants ".concat(_partyFairInfo[0], " ").concat((0,external_kolmafia_.toItem)(_partyFairInfo[1]).plural, ", please!"), "blue");
  }

  if (quest === "food" && (0,dist.get)("_questPartyFairProgress") === "") {
    (0,lib/* setChoice */.Y7)(1324, 2); // Check out the kitchen

    (0,lib/* setChoice */.Y7)(1326, 3); // Talk to the woman
  } else if (quest === "booze" && (0,dist.get)("_questPartyFairProgress") === "") {
    (0,lib/* setChoice */.Y7)(1324, 3); // Go to the back yard

    (0,lib/* setChoice */.Y7)(1327, 3); // Find Gerald
  } else {
    (0,lib/* setChoice */.Y7)(1324, 5); // Pick a fight
  }
}

function thesisReady() {
  return !(0,dist.get)("_thesisDelivered") && (0,dist.have)((0,dist.$familiar)(_templateObject193 || (_templateObject193 = fights_taggedTemplateLiteral(["Pocket Professor"])))) && (0,dist.$familiar)(_templateObject194 || (_templateObject194 = fights_taggedTemplateLiteral(["Pocket Professor"]))).experience >= 400;
}

function deliverThesis() {
  //Set up NEP if we haven't yet
  setNepQuestChoicesAndPrepItems();
  (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(_templateObject195 || (_templateObject195 = fights_taggedTemplateLiteral(["Pocket Professor"]))));
  freeFightMood().execute();
  freeFightOutfit([new lib/* Requirement */.nb(["100 muscle"], {
    forceEquip: (0,dist.$items)(_templateObject196 || (_templateObject196 = fights_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))
  })]);
  safeRestore();

  if ((0,dist.have)((0,dist.$item)(_templateObject197 || (_templateObject197 = fights_taggedTemplateLiteral(["Powerful Glove"])))) && !(0,dist.have)((0,dist.$effect)(_templateObject198 || (_templateObject198 = fights_taggedTemplateLiteral(["Triple-Sized"])))) && (0,dist.get)("_powerfulGloveBatteryPowerUsed") <= 95) {
    (0,external_kolmafia_.cliExecute)("checkpoint");
    (0,external_kolmafia_.equip)((0,dist.$slot)(_templateObject199 || (_templateObject199 = fights_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject200 || (_templateObject200 = fights_taggedTemplateLiteral(["Powerful Glove"]))));
    (0,lib/* ensureEffect */.pq)((0,dist.$effect)(_templateObject201 || (_templateObject201 = fights_taggedTemplateLiteral(["Triple-Sized"]))));
    (0,external_kolmafia_.outfit)("checkpoint");
  }

  (0,external_kolmafia_.cliExecute)("gain 1800 muscle");

  do {
    (0,combat.adventureMacro)((0,dist.$location)(_templateObject202 || (_templateObject202 = fights_taggedTemplateLiteral(["The Neverending Party"]))), combat.Macro.if_("monstername time-spinner prank", combat.Macro.meatKill()).skill((0,dist.$skill)(_templateObject203 || (_templateObject203 = fights_taggedTemplateLiteral(["deliver your thesis!"])))));
  } while ((0,dist.get)("lastEncounter") === "time-spinner prank" && !(0,dist.get)("_thesisDelivered"));
}

function safeRestore() {
  if ((0,external_kolmafia_.myHp)() < (0,external_kolmafia_.myMaxhp)() * 0.5) {
    (0,external_kolmafia_.restoreHp)((0,external_kolmafia_.myMaxhp)() * 0.9);
  }

  if ((0,external_kolmafia_.myMp)() < 50 && (0,external_kolmafia_.myMaxmp)() > 50) {
    (0,external_kolmafia_.restoreMp)(50);
  }
}

function doSausage() {
  if (!(0,lib/* kramcoGuaranteed */.DR)()) return;
  (0,external_kolmafia_.useFamiliar)(freeFightFamiliar());
  freeFightOutfit([new lib/* Requirement */.nb([], {
    forceEquip: (0,dist.$items)(_templateObject204 || (_templateObject204 = fights_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))
  })]);
  if ((0,external_kolmafia_.getAutoAttack)() > 0) (0,external_kolmafia_.setAutoAttack)(0);
  (0,combat.adventureMacro)((0,lib/* determineDraggableZoneAndEnsureAccess */.xd)(), combat.Macro.basicCombat());
}
;// CONCATENATED MODULE: ./src/commands/farm.ts
var farm_templateObject, farm_templateObject2, farm_templateObject3, farm_templateObject4, farm_templateObject5, farm_templateObject6, farm_templateObject7, farm_templateObject8, farm_templateObject9, farm_templateObject10, farm_templateObject11, farm_templateObject12, farm_templateObject13, farm_templateObject14, farm_templateObject15, farm_templateObject16, farm_templateObject17, farm_templateObject18, farm_templateObject19, farm_templateObject20, farm_templateObject21, farm_templateObject22, farm_templateObject23;

function farm_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = farm_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function farm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return farm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return farm_arrayLikeToArray(o, minLen); }

function farm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function farm_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }















function canContinue() {
  return (0,external_kolmafia_.myAdventures)() > 0 && (globalvars/* globalOptions.stopTurncount */.X.stopTurncount === null || (0,external_kolmafia_.myTurncount)() < globalvars/* globalOptions.stopTurncount */.X.stopTurncount);
}

function dreadTurn() {
  if ((0,dist.have)((0,dist.$effect)(farm_templateObject || (farm_templateObject = farm_taggedTemplateLiteral(["Beaten Up"]))))) throw "Hey, you're beaten up, and that's a bad thing. Lick your wounds, handle your problems, and run me again when you feel ready.";

  if (dist.SourceTerminal.have()) {
    if (dist.SourceTerminal.getDuplicateUses() === 0) {
      dist.SourceTerminal.educate([(0,dist.$skill)(farm_templateObject2 || (farm_templateObject2 = farm_taggedTemplateLiteral(["Duplicate"]))), (0,dist.$skill)(farm_templateObject3 || (farm_templateObject3 = farm_taggedTemplateLiteral(["Digitize"])))]);
    } else {
      dist.SourceTerminal.educate([(0,dist.$skill)(farm_templateObject4 || (farm_templateObject4 = farm_taggedTemplateLiteral(["Extract"]))), (0,dist.$skill)(farm_templateObject5 || (farm_templateObject5 = farm_taggedTemplateLiteral(["Digitize"])))]);
    }
  }

  if (dist.SongBoom.songChangesLeft() > 0) dist.SongBoom.setSong("Food Vibrations");

  if ((0,dist.have)((0,dist.$item)(farm_templateObject6 || (farm_templateObject6 = farm_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))) && ((0,dist.get)("retroCapeSuperhero") !== "robot" || (0,dist.get)("retroCapeWashingInstructions") !== "kill")) {
    (0,external_kolmafia_.cliExecute)("retrocape robot kill");
  }

  var digitizeUp = (0,external_kolmafia_.getCounters)("Digitize Monster", 0, 0).trim() !== ""; // a. set up mood stuff

  itemMood().execute((0,globalvars/* estimatedTurns */.A)());
  safeRestore(); //get enough mp to use summer siesta and enough hp to not get our ass kicked

  var ghostLocation = (0,dist.get)("ghostLocation"); // b. check for wanderers, and do them

  if ((0,external_kolmafia_.myInebriety)() <= (0,external_kolmafia_.inebrietyLimit)() && (0,dist.have)((0,dist.$item)(farm_templateObject7 || (farm_templateObject7 = farm_taggedTemplateLiteral(["protonic accelerator pack"])))) && (0,dist.get)("questPAGhost") !== "unstarted" && ghostLocation) {
    // Bust ghost!
    (0,external_kolmafia_.useFamiliar)(freeFightFamiliar());
    freeFightOutfit([new lib/* Requirement */.nb([], {
      forceEquip: (0,dist.$items)(farm_templateObject8 || (farm_templateObject8 = farm_taggedTemplateLiteral(["protonic accelerator pack"])))
    })]);
    (0,dist.adventureMacro)(ghostLocation, combat.Macro.ghostBustin());
  } else if ((0,external_kolmafia_.myInebriety)() <= (0,external_kolmafia_.inebrietyLimit)() && (0,dist.have)((0,dist.$item)(farm_templateObject9 || (farm_templateObject9 = farm_taggedTemplateLiteral(["\"I Voted!\" sticker"])))) && (0,external_kolmafia_.totalTurnsPlayed)() % 11 === 1 && (0,dist.get)("lastVoteMonsterTurn") < (0,external_kolmafia_.totalTurnsPlayed)() && (0,dist.get)("_voteFreeFights") < 3) {
    // Fight vote monster.
    (0,external_kolmafia_.useFamiliar)(freeFightFamiliar());
    freeFightOutfit([new lib/* Requirement */.nb([], {
      forceEquip: (0,dist.$items)(farm_templateObject10 || (farm_templateObject10 = farm_taggedTemplateLiteral(["\"I Voted!\" sticker"])))
    })]);
    (0,dist.adventureMacroAuto)((0,lib/* determineDraggableZoneAndEnsureAccess */.xd)(), combat.Macro.basicCombat());
  } else if ((0,external_kolmafia_.myInebriety)() <= (0,external_kolmafia_.inebrietyLimit)() && !digitizeUp && (0,lib/* kramcoGuaranteed */.DR)()) {
    // Fight kramco.
    (0,external_kolmafia_.useFamiliar)(freeFightFamiliar());
    freeFightOutfit([new lib/* Requirement */.nb([], {
      forceEquip: (0,dist.$items)(farm_templateObject11 || (farm_templateObject11 = farm_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))
    })]);
    (0,dist.adventureMacroAuto)((0,lib/* determineDraggableZoneAndEnsureAccess */.xd)(), combat.Macro.basicCombat());
  } else if (digitizeUp) {
    // Digitize is up - fight it.
    (0,external_kolmafia_.useFamiliar)(freeFightFamiliar());
    freeFightOutfit([]);
    (0,dist.adventureMacroAuto)((0,lib/* determineDraggableZoneAndEnsureAccess */.xd)(), combat.Macro.basicCombat());
  } else {// Dread turn.
    // FIXME: Actually adventure.
  }

  if (Object.keys((0,external_kolmafia_.reverseNumberology)()).includes("69") && (0,dist.get)("_universeCalculated") < (0,dist.get)("skillLevel144")) {
    (0,external_kolmafia_.cliExecute)("numberology 69");
  }

  if ((0,external_kolmafia_.myFullness)() < (0,external_kolmafia_.fullnessLimit)()) {
    fillStomach();
  }
}

var farmCommand = new Command("farm", "dr farm [ascend] [turncount]: Burn turns dreadfarming, up to turncount turns.", args => {
  var _iterator = farm_createForOfIteratorHelper(args),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var arg = _step.value;

      if (arg.match(/\d+/)) {
        globalvars/* globalOptions.stopTurncount */.X.stopTurncount = (0,external_kolmafia_.myTurncount)() + parseInt(arg, 10);
      }

      if (arg === "ascend") globalvars/* globalOptions.ascending */.X.ascending = true;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if ((0,dist.get)("valueOfAdventure") <= 3500) {
    throw "Your valueOfAdventure is set to ".concat((0,dist.get)("valueOfAdventure"), ", which is too low for barf farming to be worthwhile. If you forgot to set it, use \"set valueOfAdventure = XXXX\" to set it to your marginal turn meat value.");
  }

  if ((0,dist.get)("valueOfAdventure") >= 25000) {
    throw "Your valueOfAdventure is set to ".concat((0,dist.get)("valueOfAdventure"), ", which is definitely incorrect. Please set it to your reliable marginal turn value.");
  }

  var aaBossFlag = (0,external_kolmafia_.xpath)((0,external_kolmafia_.visitUrl)("account.php?tab=combat"), "//*[@id=\"opt_flag_aabosses\"]/label/input[@type='checkbox']@checked")[0] === "checked" ? 1 : 0;
  var gardens = (0,dist.$items)(farm_templateObject12 || (farm_templateObject12 = farm_taggedTemplateLiteral(["packet of pumpkin seeds, Peppermint Pip Packet, packet of dragon's teeth, packet of beer seeds, packet of winter seeds, packet of thanksgarden seeds, packet of tall grass seeds, packet of mushroom spores"])));
  var startingGarden = gardens.find(garden => Object.getOwnPropertyNames((0,external_kolmafia_.getCampground)()).includes(garden.name));

  if (startingGarden && !(0,dist.$items)(farm_templateObject13 || (farm_templateObject13 = farm_taggedTemplateLiteral(["packet of tall grass seeds, packet of mushroom spores"]))).includes(startingGarden) && (0,external_kolmafia_.getCampground)()[startingGarden.name] && (0,dist.$items)(farm_templateObject14 || (farm_templateObject14 = farm_taggedTemplateLiteral(["packet of tall grass seeds, packet of mushroom spores"]))).some(gardenSeed => (0,dist.have)(gardenSeed))) {
    (0,external_kolmafia_.visitUrl)("campground.php?action=garden&pwd");
  }

  try {
    (0,external_kolmafia_.print)("Collecting duffels!", "blue");

    if (globalvars/* globalOptions.stopTurncount */.X.stopTurncount !== null) {
      (0,external_kolmafia_.print)("Stopping in ".concat(globalvars/* globalOptions.stopTurncount */.X.stopTurncount - (0,external_kolmafia_.myTurncount)()), "blue");
    }

    (0,external_kolmafia_.print)();

    if ((0,dist.have)((0,dist.$item)(farm_templateObject15 || (farm_templateObject15 = farm_taggedTemplateLiteral(["packet of tall grass seeds"])))) && (0,external_kolmafia_.myGardenType)() !== "grass" && (0,external_kolmafia_.myGardenType)() !== "mushroom") {
      (0,external_kolmafia_.use)((0,dist.$item)(farm_templateObject16 || (farm_templateObject16 = farm_taggedTemplateLiteral(["packet of tall grass seeds"]))));
    }

    (0,dist.set)("lastMacroError", "");
    (0,external_kolmafia_.setAutoAttack)(0);
    (0,external_kolmafia_.visitUrl)("account.php?actions[]=flag_aabosses&flag_aabosses=1&action=Update", true);
    lib/* propertyManager.set */.kr.set({
      battleAction: "custom combat script",
      autoSatisfyWithMall: true,
      autoSatisfyWithNPCs: true,
      autoSatisfyWithCoinmasters: true,
      dontStopForCounters: true,
      maximizerFoldables: true,
      hpAutoRecoveryTarget: 0.95
    });
    if ((0,dist.get)("hpAutoRecovery") < 0.35) lib/* propertyManager.set */.kr.set({
      hpAutoRecovery: 0.35
    });
    (0,external_kolmafia_.cliExecute)("mood apathetic");
    (0,external_kolmafia_.cliExecute)("ccs dr");
    safeRestore();

    if ((0,lib/* questStep */.cL)("questM23Meatsmith") === -1) {
      (0,external_kolmafia_.visitUrl)("shop.php?whichshop=meatsmith&action=talk");
      (0,external_kolmafia_.runChoice)(1);
    }

    if ((0,lib/* questStep */.cL)("questM24Doc") === -1) {
      (0,external_kolmafia_.visitUrl)("shop.php?whichshop=doc&action=talk");
      (0,external_kolmafia_.runChoice)(1);
    }

    if ((0,lib/* questStep */.cL)("questM25Armorer") === -1) {
      (0,external_kolmafia_.visitUrl)("shop.php?whichshop=armory&action=talk");
      (0,external_kolmafia_.runChoice)(1);
    }

    if ((0,external_kolmafia_.myClass)() === (0,dist.$class)(farm_templateObject17 || (farm_templateObject17 = farm_taggedTemplateLiteral(["Seal Clubber"]))) && !(0,dist.have)((0,dist.$skill)(farm_templateObject18 || (farm_templateObject18 = farm_taggedTemplateLiteral(["Furious Wallop"])))) && (0,external_kolmafia_.guildStoreAvailable)()) {
      (0,external_kolmafia_.visitUrl)("guild.php?action=buyskill&skillid=32", true);
    }

    var stashItems = []; // $items`Buddy Bjorn`;

    if ((0,external_kolmafia_.myInebriety)() <= (0,external_kolmafia_.inebrietyLimit)() && ((0,external_kolmafia_.myClass)() !== (0,dist.$class)(farm_templateObject19 || (farm_templateObject19 = farm_taggedTemplateLiteral(["Seal Clubber"]))) || !(0,dist.have)((0,dist.$skill)(farm_templateObject20 || (farm_templateObject20 = farm_taggedTemplateLiteral(["Furious Wallop"])))))) {
      stashItems.push((0,dist.$item)(farm_templateObject21 || (farm_templateObject21 = farm_taggedTemplateLiteral(["haiku katana"]))));
    }

    if ((0,dist.get)("_pantsgivingCount") < 500) {
      stashItems.push((0,dist.$item)(farm_templateObject22 || (farm_templateObject22 = farm_taggedTemplateLiteral(["Pantsgiving"]))));
    }

    withStash(stashItems, () => {
      // 0. diet stuff.
      runDiet(); // 2. make an outfit (amulet coin, pantogram, etc), misc other stuff (VYKEA, songboom, robortender drinks)

      dailySetup();
      (0,dist.setDefaultMaximizeOptions)({
        preventEquip: (0,dist.$items)(farm_templateObject23 || (farm_templateObject23 = farm_taggedTemplateLiteral(["broken champagne bottle, Spooky Putty snake, Spooky Putty mitre, Spooky Putty leotard, Spooky Putty ball, papier-mitre, smoke ball"])))
      }); // 4. do some embezzler stuff

      freeFights();
      dailyFights(); // 5. burn turns at barf

      try {
        while (canContinue()) {
          dreadTurn();
          (0,lib/* safeInterrupt */.pl)();
        }
      } finally {
        (0,external_kolmafia_.setAutoAttack)(0);
      }
    });
  } finally {
    (0,external_kolmafia_.visitUrl)("account.php?actions[]=flag_aabosses&flag_aabosses=".concat(aaBossFlag, "&action=Update"), true);
    if (startingGarden && (0,dist.have)(startingGarden)) (0,external_kolmafia_.use)(startingGarden);

    if (["food", "booze"].includes((0,dist.get)("_questPartyFairQuest"))) {
      var partyFairInfo = (0,dist.get)("_questPartyFairProgress").split(" ");
      (0,external_kolmafia_.print)("Gerald/ine wants ".concat(partyFairInfo[0], " ").concat((0,external_kolmafia_.toItem)(partyFairInfo[1]).plural, ", please!"), "blue");
    }
  }
});
;// CONCATENATED MODULE: ./src/commands/help.ts



var helpCommand = new Command("help", "dr help: Print help for each command.", () => {
  (0,external_kolmafia_.printHtml)("<b>Doctor Dread</b>");

  for (var _i = 0, _Object$keys = Object.keys(commands); _i < _Object$keys.length; _i++) {
    var commandName = _Object$keys[_i];
    (0,external_kolmafia_.print)(commands[commandName].help);
  }
});
;// CONCATENATED MODULE: ./src/dungeon/raidlog.ts
var raidlog_templateObject, raidlog_templateObject2, raidlog_templateObject3;

function raidlog_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = raidlog_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function raidlog_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return raidlog_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return raidlog_arrayLikeToArray(o, minLen); }

function raidlog_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function raidlog_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var dreadMonsters = ["bugbear", "werewolf", "ghost", "zombie", "vampire", "skeleton"];
function isDreadMonster(x) {
  return dreadMonsters.includes(x);
}
var dreadElements = ["hot", "cold", "sleazy", "stinky", "spooky"];
function isDreadElement(x) {
  return dreadElements.includes(x);
}
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
function monsterSingular(monster) {
  return monster === "werewolves" ? "werewolf" : monster.slice(0, -1);
}
function monsterPlural(monster) {
  if (monster === "werewolf") return "werewolves";else return "".concat(monster, "s");
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
function noncombatZone(noncombat) {
  switch (noncombat) {
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
// TODO: Note whether key is needed to get there.
var dreadZones = [{
  zone: "forest",
  fullName: "The Woods",
  noncombats: [{
    noncombat: "Cabin",
    messages: ["acquired some dread tarragon", "made some bone flour", "made the forest less stinky", "recycled some newspapers", "read an old diary", "got a Dreadsylvanian auditor's badge", "made an impression of a complicated lock", "made the forest less spooky", "drove some werewolves out of the forest", "drove some vampires out of the castle", "flipped through a photo album"],
    index: 1,
    banishes: [{
      effect: ["forest", "stinky"],
      choiceSequence: [[721, 1], [722, 3]]
    }, {
      effect: ["forest", "spooky"],
      choiceSequence: [[721, 3], [724, 1]],
      reasonCantPerform: () => (0,external_kolmafia_.myClass)() === (0,dist.$class)(raidlog_templateObject || (raidlog_templateObject = raidlog_taggedTemplateLiteral(["Accordion Thief"]))) ? null : "must be an Accordion Thief"
    }, {
      effect: ["forest", "werewolf"],
      choiceSequence: [[721, 3], [724, 2]]
    }, {
      effect: ["castle", "vampire"],
      choiceSequence: [[721, 3], [724, 3]]
    }]
  }, {
    noncombat: "Tallest Tree",
    messages: ["knocked some fruit loose", "wasted some fruit", "made the forest less sleazy", "acquired a chunk of moon-amber", "drove some ghosts out of the village", "rifled through a footlocker", "lifted some weights", "got a blood kiwi", "got a cool seed pod"],
    index: 2,
    banishes: [{
      effect: ["forest", "sleazy"],
      choiceSequence: [[725, 1], [726, 2]],
      reasonCantPerform: () => (0,external_kolmafia_.myPrimestat)() === (0,dist.$stat)(raidlog_templateObject2 || (raidlog_templateObject2 = raidlog_taggedTemplateLiteral(["Muscle"]))) ? null : "must be a muscle class"
    }, {
      effect: ["village", "ghost"],
      choiceSequence: [[725, 2], [727, 1]]
    }]
  }, {
    noncombat: "Burrows",
    messages: ["made the forest less hot", "got intimate with some hot coals", "made a cool iron ingot", "made the forest less cold", "listened to the forest's heart", "drank some nutritious forest goo", "drove some bugbears out of the forest", "found and sold a rare baseball card"],
    index: 3,
    banishes: [{
      effect: ["forest", "hot"],
      choiceSequence: [[729, 1], [730, 1]]
    }, {
      effect: ["forest", "cold"],
      choiceSequence: [[729, 2], [731, 1]]
    }, {
      effect: ["forest", "bugbear"],
      choiceSequence: [[729, 3], [732, 1]]
    }]
  }]
}, {
  zone: "village",
  fullName: "The Village",
  noncombats: [{
    noncombat: "Village Square",
    messages: ["drove some ghosts out of the village", "collected a ghost pencil", "read some naughty carvings", "made the village less cold", "looted the blacksmith's till", "made a cool iron breastplate", "made a cool iron helmet", "made some cool iron greaves", "made the village less spooky", "was hung by a clanmate", "hung a clanmate"],
    index: 4,
    banishes: [{
      effect: ["village", "ghost"],
      choiceSequence: [[733, 1], [734, 1]]
    }, {
      effect: ["village", "cold"],
      choiceSequence: [[733, 2], [735, 1]]
    }, {
      effect: ["village", "spooky"],
      choiceSequence: [[733, 3], [736, 1]]
    }]
  }, {
    noncombat: "Skid Row",
    messages: ["made the village less stinky", "swam in a sewer", "drove some skeletons out of the castle", "made the village less sleazy", "moved some bricks around", "looted the tinker's shack", "made a complicated key", "polished some moon-amber", "made a clockwork bird", "got some old fuse"],
    index: 5,
    banishes: [{
      effect: ["village", "stinky"],
      choiceSequence: [[737, 1], [738, 1]]
    }, {
      effect: ["castle", "skeleton"],
      choiceSequence: [[737, 2], [740, 1]]
    }, {
      effect: ["village", "sleazy"],
      choiceSequence: [[737, 2], [740, 2]]
    }]
  }, {
    noncombat: "Old Duke's Estate",
    messages: ["drove some zombies out of the village", "robbed some graves", "read some lurid epitaphs", "made the village less hot", "made a shepherd's pie", "raided some naughty cabinets", "drove some werewolves out of the forest", "got a bottle of eau de mort", "made a ghost shawl"],
    index: 6,
    banishes: [{
      effect: ["village", "zombie"],
      choiceSequence: [[741, 1], [742, 1]]
    }, {
      effect: ["village", "hot"],
      choiceSequence: [[741, 2], [743, 1]]
    }, {
      effect: ["forest", "werewolf"],
      choiceSequence: [[741, 3], [744, 1]]
    }]
  }]
}, {
  zone: "castle",
  fullName: "The Castle",
  noncombats: [{
    noncombat: "Tower",
    messages: ["drove some bugbears out of the forest", "drove some zombies out of the village", "made a blood kiwitini", "drove some skeletons out of the castle", "read some ancient secrets", "learned to make a moon-amber necklace", "made the castle less sleazy", "raided a dresser", "got magically fingered"],
    index: 8,
    banishes: [{
      effect: ["forest", "bugbear"],
      choiceSequence: [[749, 1], [750, 1]]
    }, {
      effect: ["village", "zombie"],
      choiceSequence: [[749, 1], [750, 2]]
    }, {
      effect: ["castle", "skeleton"],
      choiceSequence: [[749, 2], [751, 1]],
      reasonCantPerform: () => (0,external_kolmafia_.myPrimestat)() === (0,dist.$stat)(raidlog_templateObject3 || (raidlog_templateObject3 = raidlog_taggedTemplateLiteral(["Mysticality"]))) ? null : "must be a mysticality class"
    }, {
      effect: ["castle", "sleazy"],
      choiceSequence: [[749, 3], [752, 1]]
    }]
  }, {
    noncombat: "Great Hall",
    messages: ["drove some vampires out of the castle", "twirled on the dance floor", "twirled on the dance floor", "made the castle less cold", "frolicked in a freezer", "got some roast beast", "made the castle less stinky", "got a wax banana"],
    index: 7,
    banishes: [{
      effect: ["castle", "vampire"],
      choiceSequence: [[745, 1], [746, 1]]
    }, {
      effect: ["castle", "cold"],
      choiceSequence: [[745, 2], [747, 1]]
    }, {
      effect: ["castle", "stinky"],
      choiceSequence: [[745, 3], [748, 2]]
    }]
  }, {
    noncombat: "Dungeons",
    messages: ["made the castle less spooky", "did a whole bunch of pushups", "took a nap on a prison cot", "made the castle less hot", "sifted through some ashes", "relaxed in a furnace", "got some stinking agaric", "rolled around in some mushrooms"],
    index: 9,
    banishes: [{
      effect: ["castle", "spooky"],
      choiceSequence: [[753, 1], [754, 1]]
    }, {
      effect: ["castle", "hot"],
      choiceSequence: [[753, 2], [755, 1]]
    }]
  }]
}];
function noncombatInfo(noncombat) {
  var _iterator = raidlog_createForOfIteratorHelper(dreadZones),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var zone = _step.value;

      var _iterator2 = raidlog_createForOfIteratorHelper(zone.noncombats),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var testNoncombat = _step2.value;

          if (testNoncombat.noncombat === noncombat) {
            return testNoncombat;
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

  return null;
}
var lastRaidlogTurncount = -1;
var savedRaidlog = undefined;
function memoizedRaidlog() {
  if (lastRaidlogTurncount !== (0,external_kolmafia_.totalTurnsPlayed)() || savedRaidlog === undefined) {
    lastRaidlogTurncount = (0,external_kolmafia_.totalTurnsPlayed)();
    savedRaidlog = (0,external_kolmafia_.visitUrl)("clan_raidlogs.php");
  }

  return savedRaidlog;
}
function dreadBanished() {
  var raidlog = memoizedRaidlog();
  var result = [];

  var _iterator3 = raidlog_createForOfIteratorHelper(dreadZones),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _step3$value = _step3.value,
          zone = _step3$value.zone,
          fullName = _step3$value.fullName;
      var blockquoteRegex = new RegExp("<b>".concat(fullName, "</b>\\s*<blockquote>(.*?)</blockquote>"));
      var blockquoteMatch = raidlog.match(blockquoteRegex);
      var blockquote = blockquoteMatch ? blockquoteMatch[1] : "";
      var elementRegex = /made the (.*?) less (.*?) \(1 turn\)/g;
      var match = void 0;

      while ((match = elementRegex.exec(blockquote)) !== null) {
        result.push({
          targetZone: match[1],
          noncombatZone: zone,
          banished: match[2]
        });
      }

      var monsterRegex = /drove some (.*?) out of the (.*?) \(1 turn\)/g;

      while ((match = monsterRegex.exec(blockquote)) !== null) {
        result.push({
          targetZone: match[2],
          noncombatZone: zone,
          banished: monsterSingular(match[1])
        });
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return result;
}
function dreadNoncombatsUsed() {
  var raidlog = memoizedRaidlog();
  var result = [];

  var _iterator4 = raidlog_createForOfIteratorHelper(dreadZones),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var zone = _step4.value;

      var _iterator5 = raidlog_createForOfIteratorHelper(zone.noncombats),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var noncombat = _step5.value;
          var messageRes = noncombat.messages.map(s => new RegExp("".concat((0,external_kolmafia_.myName)(), " \\(#").concat((0,external_kolmafia_.myId)(), "\\) ").concat(s)));
          if (messageRes.some(re => raidlog.match(re))) result.push(noncombat.noncombat);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return result;
}
;// CONCATENATED MODULE: ./src/dungeon/plan.ts
function plan_slicedToArray(arr, i) { return plan_arrayWithHoles(arr) || plan_iterableToArrayLimit(arr, i) || plan_unsupportedIterableToArray(arr, i) || plan_nonIterableRest(); }

function plan_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function plan_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function plan_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function plan_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = plan_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function plan_toConsumableArray(arr) { return plan_arrayWithoutHoles(arr) || plan_iterableToArray(arr) || plan_unsupportedIterableToArray(arr) || plan_nonIterableSpread(); }

function plan_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function plan_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return plan_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return plan_arrayLikeToArray(o, minLen); }

function plan_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function plan_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return plan_arrayLikeToArray(arr); }

function plan_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function banishesToLimit(targetZone, monster, element) {
  var monstersNeededBanished = monster === "banish no monster" ? [] : [monsterPair(monster)];
  var elementsNeededBanished = element === "banish all elements" ? plan_toConsumableArray(dreadElements) : element === "banish no element" ? [] : dreadElements.filter(e => e !== element);
  var thingsNeededBanished = [].concat(monstersNeededBanished, plan_toConsumableArray(elementsNeededBanished));
  var result = [];

  var _iterator = plan_createForOfIteratorHelper(dreadZones),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _noncombatZone = _step.value;

      var _iterator2 = plan_createForOfIteratorHelper(_noncombatZone.noncombats),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var noncombat = _step2.value;

          var _iterator3 = plan_createForOfIteratorHelper(noncombat.banishes),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var banish = _step3.value;

              var _banish$effect = plan_slicedToArray(banish.effect, 2),
                  banishZone = _banish$effect[0],
                  impact = _banish$effect[1]; // print(`zone ${targetZone} === ${banishZone} && thingsToBanish includes ${impact}`);


              if (targetZone === banishZone && thingsNeededBanished.includes(impact)) {
                // print("yes");
                result.push([noncombat, banish]);
              } // else print("no");
              // print();

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
  var banished = dreadBanished();
  var banishedInZone = banished.filter(info => info.targetZone === targetZone); // print("banished: " + JSON.stringify(banishedInZone));

  var noncombatsUsed = new Set(dreadNoncombatsUsed());
  var desiredBanishes = banishesToLimit(targetZone, monster, element); // print("desired: " + JSON.stringify(desiredBanishes.map(([, banish]) => banish)));

  var completedBanishes = [];
  var usedBanishes = [];
  var cantBanishes = [];
  var goodBanishes = [];

  var _iterator4 = plan_createForOfIteratorHelper(desiredBanishes),
      _step4;

  try {
    var _loop = function _loop() {
      var _step4$value = plan_slicedToArray(_step4.value, 2),
          noncombat = _step4$value[0],
          banish = _step4$value[1];

      // Did we already use this noncombat, or has this banish already been done?
      if (banishedInZone.some(info => noncombatZone(noncombat.noncombat) === info.noncombatZone && banish.effect[1] === info.banished)) {
        completedBanishes.push([noncombat, banish]);
      } else if (noncombatsUsed.has(noncombat.noncombat)) {
        usedBanishes.push([noncombat, banish]);
      } else if (banish.reasonCantPerform && banish.reasonCantPerform()) {
        cantBanishes.push([noncombat, banish]);
      } else {
        goodBanishes.push([noncombat, banish]);
      }
    };

    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
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

  var _iterator5 = plan_createForOfIteratorHelper(cantBanishes),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _step5$value = plan_slicedToArray(_step5.value, 2),
          noncombat = _step5$value[0],
          banish = _step5$value[1];

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (0,external_kolmafia_.print)("Can't banish ".concat(banish.effect, " @ ").concat(noncombat, " because ").concat(banish.reasonCantPerform()));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  var banishLocations = new Map();

  var _iterator6 = plan_createForOfIteratorHelper(goodBanishes),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _step6$value = plan_slicedToArray(_step6.value, 2),
          _noncombat = _step6$value[0],
          _banish = _step6$value[1];

      var banishList = banishLocations.get(_noncombat);

      if (banishList === undefined) {
        banishList = [];
        banishLocations.set(_noncombat, banishList);
      }

      banishList.push(_banish);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  return plan_toConsumableArray(banishLocations).map(_ref => {
    var _ref2 = plan_slicedToArray(_ref, 2),
        noncombat = _ref2[0],
        _ref2$ = plan_slicedToArray(_ref2[1], 1),
        banish = _ref2$[0];

    return [noncombat, banish];
  });
}
function neededBanishes(targetZone, monster, element) {
  var _categorizeBanishes2 = categorizeBanishes(targetZone, monster, element),
      completedBanishes = _categorizeBanishes2.completedBanishes;

  var paired = monsterPair(monster);
  var monsterCount = completedBanishes.filter(_ref3 => {
    var _ref4 = plan_slicedToArray(_ref3, 2),
        banish = _ref4[1];

    return banish.effect[1] === paired;
  }).length;
  var banishedElements = completedBanishes.map(_ref5 => {
    var _ref6 = plan_slicedToArray(_ref5, 2),
        banish = _ref6[1];

    return banish.effect[1];
  }).filter(x => isDreadElement(x));
  return [].concat(plan_toConsumableArray(dreadElements.filter(e => element !== e && !banishedElements.includes(e))), plan_toConsumableArray(new Array(2 - monsterCount).fill(paired)));
}
;// CONCATENATED MODULE: ./src/commands/limit.ts
var limit_templateObject, limit_templateObject2, limit_templateObject3, limit_templateObject4, limit_templateObject5;

function limit_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = limit_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function limit_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function limit_slicedToArray(arr, i) { return limit_arrayWithHoles(arr) || limit_iterableToArrayLimit(arr, i) || limit_unsupportedIterableToArray(arr, i) || limit_nonIterableRest(); }

function limit_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function limit_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return limit_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return limit_arrayLikeToArray(o, minLen); }

function limit_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function limit_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function limit_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var usage = "dr limit [element] [monster]: Try to banish all monsters but [element] [monster]s.";
var limitCommand = new Command("limit", usage, _ref => {
  var _ref2 = limit_slicedToArray(_ref, 2),
      element = _ref2[0],
      monster = _ref2[1];

  (0,external_kolmafia_.printHtml)("<b>Dr. Dread Auto-Banisher</b>");

  if (!isDreadMonster(monster)) {
    (0,external_kolmafia_.print)("Unrecognized monster ".concat(monster, "."), "red");
    (0,external_kolmafia_.print)("Usage: ".concat(usage, "."));
    return;
  } else if (!isDreadElement(element)) {
    (0,external_kolmafia_.print)("Unrecognized element ".concat(element, "."), "red");
    (0,external_kolmafia_.print)("Usage: ".concat(usage, "."));
    return;
  }

  if (!(0,dist.have)((0,dist.$item)(limit_templateObject || (limit_templateObject = limit_taggedTemplateLiteral(["Dreadsylvanian skeleton key"])))) && (0,external_kolmafia_.itemAmount)((0,dist.$item)(limit_templateObject2 || (limit_templateObject2 = limit_taggedTemplateLiteral(["Freddy Kruegerand"])))) < 100) {
    throw "You don't have skeleton keys and you're almost out of Freddies. Fix that.";
  }

  var overdrunk = (0,external_kolmafia_.myInebriety)() > (0,external_kolmafia_.inebrietyLimit)();
  if (overdrunk) (0,external_kolmafia_.cliExecute)("checkpoint");

  try {
    if (overdrunk) {
      if (!(0,dist.have)((0,dist.$item)(limit_templateObject3 || (limit_templateObject3 = limit_taggedTemplateLiteral(["Drunkula's wineglass"]))))) {
        throw "Can't do banishes without wineglass while overdrunk!";
      }

      (0,external_kolmafia_.equip)((0,dist.$item)(limit_templateObject4 || (limit_templateObject4 = limit_taggedTemplateLiteral(["Drunkula's wineglass"]))));
    }

    var _iterator = limit_createForOfIteratorHelper(planLimitTo(monsterZone(monster), monster, element)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = limit_slicedToArray(_step.value, 2),
            noncombat = _step$value[0],
            banish = _step$value[1];

        (0,external_kolmafia_.print)("Banishing ".concat(banish.effect.join(", "), " @ ").concat(noncombat.noncombat, " using ").concat(banish.choiceSequence.map(x => x.join(", ")).join(" => ")));
        (0,external_kolmafia_.retrieveItem)((0,dist.$item)(limit_templateObject5 || (limit_templateObject5 = limit_taggedTemplateLiteral(["Dreadsylvanian skeleton key"]))));
        lib/* propertyManager.setChoices */.kr.setChoices((0,lib/* fromEntries */.sq)(banish.choiceSequence));
        (0,external_kolmafia_.visitUrl)("clan_dreadsylvania.php?action=forceloc&loc=".concat(noncombat.index));
        (0,external_kolmafia_.runChoice)(-1);
        (0,external_kolmafia_.print)();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } finally {
    if (overdrunk) (0,external_kolmafia_.cliExecute)("outfit checkpoint");
  }

  var remaining = neededBanishes(monsterZone(monster), monster, element);

  if (remaining.length === 0) {
    (0,external_kolmafia_.print)("All banishes complete!", "blue");
  } else {
    (0,external_kolmafia_.print)("Outstanding banishes: ".concat(remaining.join(", ")), "red");
  }
});
;// CONCATENATED MODULE: ./src/commands/plan.ts
function commands_plan_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = commands_plan_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function commands_plan_slicedToArray(arr, i) { return commands_plan_arrayWithHoles(arr) || commands_plan_iterableToArrayLimit(arr, i) || commands_plan_unsupportedIterableToArray(arr, i) || commands_plan_nonIterableRest(); }

function commands_plan_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function commands_plan_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return commands_plan_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return commands_plan_arrayLikeToArray(o, minLen); }

function commands_plan_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function commands_plan_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function commands_plan_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var plan_usage = "dr plan [element] [monster]: Print plan for banishing all [element] [monster]s.";
var planCommand = new Command("plan", plan_usage, _ref => {
  var _ref2 = commands_plan_slicedToArray(_ref, 2),
      element = _ref2[0],
      monster = _ref2[1];

  if (!isDreadMonster(monster)) {
    (0,external_kolmafia_.print)("Unrecognized monster ".concat(monster, "."), "red");
    (0,external_kolmafia_.print)("Usage: ".concat(plan_usage, "."));
    return;
  } else if (!isDreadElement(element)) {
    (0,external_kolmafia_.print)("Unrecognized element ".concat(element, "."), "red");
    (0,external_kolmafia_.print)("Usage: ".concat(plan_usage, "."));
    return;
  }

  (0,external_kolmafia_.printHtml)("<b>Dr. Dread Banish Planner</b>");
  (0,external_kolmafia_.print)("Noncombats used: ".concat(dreadNoncombatsUsed().join(", ")));
  (0,external_kolmafia_.print)("Trying to banish ".concat(element, " ").concat(monsterPlural(monster)));
  (0,external_kolmafia_.print)();
  var remaining = neededBanishes(monsterZone(monster), monster, element);

  if (remaining.length === 0) {
    (0,external_kolmafia_.print)("All banishes complete!", "blue");
  } else {
    (0,external_kolmafia_.print)("Outstanding banishes: ".concat(remaining.join(", ")), "red");
  }

  var plan = planLimitTo(monsterZone(monster), monster, element);

  if (plan.length === 0) {
    (0,external_kolmafia_.print)("No banishes available and needed.");
  }

  var _iterator = commands_plan_createForOfIteratorHelper(plan),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = commands_plan_slicedToArray(_step.value, 2),
          noncombat = _step$value[0],
          banish = _step$value[1];

      (0,external_kolmafia_.print)("Banish ".concat(banish.effect.join(", "), " @ ").concat(noncombat.noncombat, " using ").concat(banish.choiceSequence.map(x => x.join(", ")).join(" => ")));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
;// CONCATENATED MODULE: ./src/commands/status.ts
function status_slicedToArray(arr, i) { return status_arrayWithHoles(arr) || status_iterableToArrayLimit(arr, i) || status_unsupportedIterableToArray(arr, i) || status_nonIterableRest(); }

function status_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function status_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function status_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function status_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = status_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function status_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return status_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return status_arrayLikeToArray(o, minLen); }

function status_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var statusCommand = new Command("status", "dr status: Print current banishing status of dungeon.", () => {
  var banished = dreadBanished();
  var zoneMap = new Map();

  var _iterator = status_createForOfIteratorHelper(banished),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var banish = _step.value;
      var zoneInfo = zoneMap.get(banish.targetZone);

      if (zoneInfo === undefined) {
        zoneInfo = [[], []];
        zoneMap.set(banish.targetZone, zoneInfo);
      }

      var banishedThing = banish.banished;

      if (isDreadElement(banishedThing)) {
        zoneInfo[0].push(banishedThing);
      } else if (isDreadMonster(banishedThing)) {
        zoneInfo[1].push(banishedThing);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = status_createForOfIteratorHelper(zoneMap),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = status_slicedToArray(_step2.value, 2),
          zone = _step2$value[0],
          _step2$value$ = status_slicedToArray(_step2$value[1], 2),
          elementsBanished = _step2$value$[0],
          monstersBanished = _step2$value$[1];

      (0,external_kolmafia_.print)("".concat(zone.toUpperCase(), ":"));
      (0,external_kolmafia_.print)("Elements banished: ".concat(elementsBanished.join(", ")));
      (0,external_kolmafia_.print)("Monsters banished: ".concat(monstersBanished.join(", ")));
      (0,external_kolmafia_.print)();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});
;// CONCATENATED MODULE: ./src/commands/whitelist.ts
function whitelist_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = whitelist_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toArray(arr) { return whitelist_arrayWithHoles(arr) || whitelist_iterableToArray(arr) || whitelist_unsupportedIterableToArray(arr) || whitelist_nonIterableRest(); }

function whitelist_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function whitelist_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return whitelist_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return whitelist_arrayLikeToArray(o, minLen); }

function whitelist_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function whitelist_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function whitelist_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var whitelistCommand = new Command("whitelist", "dr whitelist [player] [rank]: Whitelist [player] with rank [rank] (default normal member) to all clans in dr_clans", _ref => {
  var _ref2 = _toArray(_ref),
      player = _ref2[0],
      rankComponents = _ref2.slice(1);

  var clanNamesJoined = (0,dist.get)("dr_clans", "");

  if (clanNamesJoined === "") {
    (0,external_kolmafia_.print)("You have not set any clans in the dr_clans property!", "red");
    return;
  }

  if (!player) {
    (0,external_kolmafia_.print)("Invalid player ".concat(player), "red");
    return;
  }

  var rank = rankComponents.join(" ");

  if (!rank) {
    (0,external_kolmafia_.print)("Invalid rank ".concat(rank), "red");
    return;
  }

  var current = (0,external_kolmafia_.getClanName)();

  try {
    var clanNames = clanNamesJoined.split("|");

    var _iterator = whitelist_createForOfIteratorHelper(clanNames),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var clanName = _step.value;
        var clan = dist.Clan.join(clanName);
        (0,external_kolmafia_.print)("Whitelisting ".concat(player, " to ").concat((0,external_kolmafia_.getClanName)(), " at rank ").concat(rank, "."));

        if (!clan.addPlayerToWhitelist(player, rank, "Added by ".concat((0,external_kolmafia_.myName)(), " on ").concat((0,external_kolmafia_.todayToString)(), " (Dr. Dread)"))) {
          (0,external_kolmafia_.print)("Whitelisting failed in ".concat((0,external_kolmafia_.getClanName)(), "!"), "red");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } finally {
    dist.Clan.join(current);
  }
});
;// CONCATENATED MODULE: ./src/commands/index.ts






/* harmony default export */ const commands = ({
  farm: farmCommand,
  help: helpCommand,
  limit: limitCommand,
  plan: planCommand,
  status: statusCommand,
  whitelist: whitelistCommand
});
;// CONCATENATED MODULE: ./src/index.ts




function main() {
  var argString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  (0,dist.sinceKolmafiaRevision)(20815);
  var args = argString.split(" ");
  var command = commands[args[0]];

  try {
    if (command !== undefined) {
      command.run(args.slice(1));
    } else {
      (0,external_kolmafia_.print)("Warning: Unknown command ".concat(args[0], "."), "red");
      commands.help.run(args.slice(1));
    }
  } finally {
    lib/* propertyManager.resetAll */.kr.resetAll();
  }
}

/***/ }),

/***/ 6962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Zj": () => (/* binding */ BonusEquipMode),
  "nb": () => (/* binding */ Requirement),
  "Eb": () => (/* binding */ argmax),
  "Vq": () => (/* binding */ baseMeat),
  "uZ": () => (/* binding */ clamp),
  "Fx": () => (/* binding */ coinmasterPrice),
  "xd": () => (/* binding */ determineDraggableZoneAndEnsureAccess),
  "Te": () => (/* binding */ draggableFight),
  "pq": () => (/* binding */ ensureEffect),
  "sq": () => (/* binding */ fromEntries),
  "EO": () => (/* binding */ gnomeWeightValue),
  "DR": () => (/* binding */ kramcoGuaranteed),
  "Bx": () => (/* binding */ maxPassiveDamage),
  "nf": () => (/* binding */ monsterManuelAvailable),
  "kr": () => (/* binding */ propertyManager),
  "cL": () => (/* binding */ questStep),
  "pl": () => (/* binding */ safeInterrupt),
  "L0": () => (/* binding */ saleValue),
  "Y7": () => (/* binding */ setChoice),
  "j0": () => (/* binding */ tryFeast)
});

// UNUSED EXPORTS: fairyMultiplier, leprechaunMultiplier, mapMonster, setDefaultChoiceHandling, sum

;// CONCATENATED MODULE: external "canadv.ash"
const external_canadv_ash_namespaceObject = require("canadv.ash");;
// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/libram/dist/index.js
var dist = __webpack_require__(9803);
// EXTERNAL MODULE: ./src/globalvars.ts
var globalvars = __webpack_require__(7945);
;// CONCATENATED MODULE: ./src/lib.ts
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var BonusEquipMode;

(function (BonusEquipMode) {
  BonusEquipMode[BonusEquipMode["FREE"] = 0] = "FREE";
  BonusEquipMode[BonusEquipMode["EMBEZZLER"] = 1] = "EMBEZZLER";
  BonusEquipMode[BonusEquipMode["BARF"] = 2] = "BARF";
  BonusEquipMode[BonusEquipMode["DMT"] = 3] = "DMT";
})(BonusEquipMode || (BonusEquipMode = {}));

var propertyManager = new dist.PropertiesManager();
var baseMeat = dist.SongBoom.have() && (dist.SongBoom.songChangesLeft() > 0 || dist.SongBoom.song() === "Total Eclipse of Your Meat") ? 275 : 250;
var MPA = (0,dist.get)("valueOfAdventure");
function safeInterrupt() {
  if ((0,dist.get)("dr_interrupt", false)) {
    (0,dist.set)("dr_interrupt", false);
    (0,external_kolmafia_.abort)("User interrupt requested. Stopping Garbage Collector.");
  }
}
function setChoice(adventure, value) {
  propertyManager.setChoices(_defineProperty({}, adventure, value));
}
function ensureEffect(effect) {
  if (!(0,dist.have)(effect)) (0,external_kolmafia_.cliExecute)(effect.default);
}
function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}
/**
 * Sum an array of numbers.
 * @param addends Addends to sum.
 */

function sum(addends) {
  return addends.reduce((s, n) => s + n, 0);
}
function mapMonster(location, monster) {
  if (haveSkill($skill(_templateObject || (_templateObject = _taggedTemplateLiteral(["Map the Monsters"])))) && !get("mappingMonsters") && get("_monstersMapped") < 3) {
    useSkill($skill(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Map the Monsters"]))));
  }

  if (!get("mappingMonsters")) throw "Failed to setup Map the Monsters.";
  var mapPage = visitUrl(toUrl(location), false, true);
  if (!mapPage.includes("Leading Yourself Right to Them")) throw "Something went wrong mapping.";
  var fightPage = visitUrl("choice.php?pwd&whichchoice=1435&option=1&heyscriptswhatsupwinkwink=".concat(monster.id));
  if (!fightPage.includes(monster.name)) throw "Something went wrong starting the fight.";
}
function argmax(values) {
  return values.reduce((_ref, _ref2) => {
    var _ref3 = _slicedToArray(_ref, 2),
        minValue = _ref3[0],
        minScore = _ref3[1];

    var _ref4 = _slicedToArray(_ref2, 2),
        value = _ref4[0],
        score = _ref4[1];

    return score > minScore ? [value, score] : [minValue, minScore];
  })[0];
}
function questStep(questName) {
  var stringStep = dist.property.getString(questName);
  if (stringStep === "unstarted" || stringStep === "") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw "Quest state parsing error.";
    }

    return parseInt(stringStep.substring(4), 10);
  }
}
var zonePotions = [{
  zone: "Spaaace",
  effect: (0,dist.$effect)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Transpondent"]))),
  potion: (0,dist.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["transporter transponder"])))
}, {
  zone: "Wormwood",
  effect: (0,dist.$effect)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Absinthe-Minded"]))),
  potion: (0,dist.$item)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["tiny bottle of absinthe"])))
}, {
  zone: "RabbitHole",
  effect: (0,dist.$effect)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Down the Rabbit Hole"]))),
  potion: (0,dist.$item)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\"DRINK ME\" potion"])))
}];

function acceptBestGuzzlrQuest() {
  if (!dist.Guzzlr.isQuestActive()) {
    if (!dist.Guzzlr.haveFullBronzeBonus()) {
      dist.Guzzlr.acceptBronze();
    } else if (dist.Guzzlr.canGold()) {
      dist.Guzzlr.acceptGold();
    } else {
      dist.Guzzlr.acceptBronze();
    }
  }
}

var draggableFight;

(function (draggableFight) {
  draggableFight[draggableFight["BACKUP"] = 0] = "BACKUP";
  draggableFight[draggableFight["WANDERER"] = 1] = "WANDERER";
})(draggableFight || (draggableFight = {}));

function untangleDigitizes(turnCount, chunks) {
  var turnsPerChunk = turnCount / chunks;
  var monstersPerChunk = Math.sqrt((turnsPerChunk + 3) / 5 + 1 / 4) - 1 / 2;
  return Math.floor(chunks * monstersPerChunk);
}

function digitizedMonstersRemaining() {
  if (!dist.SourceTerminal.have()) return 0;
  var digitizesLeft = clamp(3 - (0,dist.get)("_sourceTerminalDigitizeUses"), 0, 3);
  if (digitizesLeft === 3) return untangleDigitizes((0,globalvars/* estimatedTurns */.A)(), 3);
  var monsterCount = (0,dist.get)("_sourceTerminalDigitizeMonsterCount") + 1;
  var relayArray = (0,dist.get)("relayCounters").match(/(d+):Digitize Monster/);
  var nextDigitizeEncounter = relayArray ? parseInt(relayArray[1]) : (0,external_kolmafia_.myTurncount)();
  var turnsLeftAtNextMonster = (0,globalvars/* estimatedTurns */.A)() - (nextDigitizeEncounter - (0,external_kolmafia_.myTurncount)());
  var turnsAtLastDigitize = turnsLeftAtNextMonster + ((monsterCount + 1) * monsterCount * 5 - 3);
  return untangleDigitizes(turnsAtLastDigitize, digitizesLeft + 1);
}

function setDefaultChoiceHandling() {
  // Black forest noncombats; fight blackberry bush
  setChoice(923, 1);
  setChoice(924, 1);
  setChoice(1340, 3); // Doctor bag choice; want to ignore for the day.
}
function determineDraggableZoneAndEnsureAccess() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : draggableFight.WANDERER;
  // Set choice handling to ensure script doesn't throw up on an NC
  setDefaultChoiceHandling();
  var defaultLocation = (0,dist.get)("_spookyAirportToday") || (0,dist.get)("spookyAirportAlways") ? (0,dist.$location)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["The Deep Dark Jungle"]))) : (0,dist.$location)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Noob Cave"])));
  if (!dist.Guzzlr.have()) return defaultLocation;
  var predictedWanderers = digitizedMonstersRemaining() + ((0,dist.have)((0,dist.$item)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\"I Voted!\" sticker"])))) ? clamp(3 - (0,dist.get)("_voteFreeFights"), 0, 3) : 0);
  var predictedBackups = (0,dist.have)((0,dist.$item)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["backup camera"])))) ? clamp(11 - (0,dist.get)("_backUpUses"), 0, 11) : 0;
  var turnsLeftOnThisQuest = Math.ceil((100 - (0,dist.get)("guzzlrDeliveryProgress")) / (10 - (0,dist.get)("_guzzlrDeliveries")));
  acceptBestGuzzlrQuest();
  var currentGuzzlrZone = dist.Guzzlr.getLocation() || (0,dist.$location)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["none"])));

  if (!testZoneAndUsePotionToAccess() || !testZoneForWanderers(currentGuzzlrZone) && predictedWanderers > predictedBackups && predictedBackups < turnsLeftOnThisQuest || !testZoneForBackups(currentGuzzlrZone) && predictedBackups >= predictedWanderers) {
    dist.Guzzlr.abandon();
  }

  acceptBestGuzzlrQuest();
  var guzzlZone = dist.Guzzlr.getLocation();
  if (!testZoneAndUsePotionToAccess()) return defaultLocation;

  if (!guzzlZone || type === draggableFight.WANDERER && !testZoneForWanderers(guzzlZone) || type === draggableFight.BACKUP && !testZoneForBackups(guzzlZone)) {
    return defaultLocation;
  }

  if (dist.Guzzlr.getTier() === "platinum") {
    zonePotions.forEach(place => {
      if (guzzlZone.zone === place.zone && !(0,dist.have)(place.effect)) {
        if (!(0,dist.have)(place.potion)) {
          (0,external_kolmafia_.buy)(1, place.potion, 10000);
        }

        (0,external_kolmafia_.use)(1, place.potion);
      }
    });

    if (!dist.Guzzlr.havePlatinumBooze()) {
      (0,external_kolmafia_.print)("It's time to get buttery", "purple");
      (0,external_kolmafia_.cliExecute)("make buttery boy");
    }
  } else {
    var guzzlrBooze = dist.Guzzlr.getBooze();

    if (!guzzlrBooze) {
      return defaultLocation;
    } else if (!(0,dist.have)(guzzlrBooze)) {
      (0,external_kolmafia_.print)("just picking up some booze before we roll", "blue");
      (0,external_kolmafia_.retrieveItem)(guzzlrBooze);
    }
  }

  return guzzlZone;
}

function testZoneAndUsePotionToAccess() {
  var guzzlZone = dist.Guzzlr.getLocation();
  if (!guzzlZone) return false;
  var forbiddenZones = [""]; //can't stockpile these potions,

  if (!(0,dist.get)("_spookyAirportToday") && !(0,dist.get)("spookyAirportAlways")) {
    forbiddenZones.push("Conspiracy Island");
  }

  if (!(0,dist.get)("_stenchAirportToday") && !(0,dist.get)("stenchAirportAlways")) {
    forbiddenZones.push("Dinseylandfill");
  }

  if (!(0,dist.get)("_hotAirportToday") && !(0,dist.get)("hotAirportAlways")) {
    forbiddenZones.push("That 70s Volcano");
  }

  if (!(0,dist.get)("_coldAirportToday") && !(0,dist.get)("coldAirportAlways")) {
    forbiddenZones.push("The Glaciest");
  }

  if (!(0,dist.get)("_sleazeAirportToday") && !(0,dist.get)("sleazeAirportAlways")) {
    forbiddenZones.push("Spring Break Beach");
  }

  var blacklist = (0,dist.$locations)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["The Oasis, The Bubblin' Caldera, Barrrney's Barrr, The F'c'le, The Poop Deck, Belowdecks, 8-Bit Realm, Madness Bakery, The Secret Government Laboratory"])));

  if ((0,external_kolmafia_.myPath)() === "Two Crazy Random Summer") {
    // can't access these zones in 2CRS
    blacklist.concat((0,dist.$locations)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Domed City of Grimacia, Domed City of Ronaldus, Hamburglaris Shield Generator, The Red Queen's Garden, The Mouldering Mansion, The Rogue Windmill, The Stately Pleasure Dome"]))));
  }

  if (forbiddenZones.includes(guzzlZone.zone) || blacklist.includes(guzzlZone) || guzzlZone.environment === "underwater" || !(0,external_canadv_ash_namespaceObject.canAdv)(guzzlZone, false)) {
    return false;
  } else {
    return true;
  }
}

function testZoneForBackups(location) {
  var backupBlacklist = (0,dist.$locations)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["The Overgrown Lot, The Skeleton Store, The Mansion of Dr. Weirdeaux"])));
  return !backupBlacklist.includes(location) && location.combatPercent >= 100;
}

function testZoneForWanderers(location) {
  var wandererBlacklist = (0,dist.$locations)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["The Batrat and Ratbat Burrow, Guano Junction, The Beanbat Chamber"])));
  return !wandererBlacklist.includes(location) && location.wanderers;
}

var Requirement = /*#__PURE__*/function () {
  function Requirement(maximizeParameters_, maximizeOptions_) {
    _classCallCheck(this, Requirement);

    _defineProperty(this, "maximizeParameters_", void 0);

    _defineProperty(this, "maximizeOptions_", void 0);

    this.maximizeParameters_ = maximizeParameters_;
    this.maximizeOptions_ = maximizeOptions_;
  }

  _createClass(Requirement, [{
    key: "maximizeParameters",
    value: function maximizeParameters() {
      return this.maximizeParameters_;
    }
  }, {
    key: "maximizeOptions",
    value: function maximizeOptions() {
      return this.maximizeOptions_;
    }
  }, {
    key: "merge",
    value: function merge(other) {
      var _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$forceEquip, _optionsB$forceEquip, _optionsA$preventEqui, _optionsB$preventEqui, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot;

      var optionsA = this.maximizeOptions();
      var optionsB = other.maximizeOptions();
      return new Requirement([].concat(_toConsumableArray(this.maximizeParameters()), _toConsumableArray(other.maximizeParameters())), _objectSpread(_objectSpread(_objectSpread({}, optionsA), optionsB), {}, {
        bonusEquip: new Map([].concat(_toConsumableArray((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), _toConsumableArray((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        forceEquip: [].concat(_toConsumableArray((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), _toConsumableArray((_optionsB$forceEquip = optionsB.forceEquip) !== null && _optionsB$forceEquip !== void 0 ? _optionsB$forceEquip : [])),
        preventEquip: [].concat(_toConsumableArray((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), _toConsumableArray((_optionsB$preventEqui = optionsB.preventEquip) !== null && _optionsB$preventEqui !== void 0 ? _optionsB$preventEqui : [])),
        onlySlot: [].concat(_toConsumableArray((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), _toConsumableArray((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(_toConsumableArray((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), _toConsumableArray((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : []))
      }));
    }
  }, {
    key: "maximize",
    value: function maximize() {
      (0,dist.maximizeCached)(this.maximizeParameters_, this.maximizeOptions_);
    }
  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce((x, y) => x.merge(y));
    }
  }]);

  return Requirement;
}();

_defineProperty(Requirement, "empty", new Requirement([], {}));

function tryFeast(familiar) {
  if ((0,dist.have)(familiar)) {
    (0,external_kolmafia_.useFamiliar)(familiar);
    (0,external_kolmafia_.use)((0,dist.$item)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["moveable feast"]))));
  }
}
var valueMap = new Map();
var MALL_VALUE_MODIFIER = 0.9;
function saleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return items.map(item => {
    if (valueMap.has(item)) return valueMap.get(item) || 0;

    if (item.discardable) {
      valueMap.set(item, (0,external_kolmafia_.mallPrice)(item) > Math.max(2 * (0,external_kolmafia_.autosellPrice)(item), 100) ? MALL_VALUE_MODIFIER * (0,external_kolmafia_.mallPrice)(item) : (0,external_kolmafia_.autosellPrice)(item));
    } else {
      valueMap.set(item, (0,external_kolmafia_.mallPrice)(item) > 100 ? MALL_VALUE_MODIFIER * (0,external_kolmafia_.mallPrice)(item) : 0);
    }

    return valueMap.get(item) || 0;
  }).reduce((s, price) => s + price, 0) / items.length;
}
function coinmasterPrice(item) {
  // TODO: Get this from coinmasters.txt if more are needed
  switch (item) {
    case (0,dist.$item)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["viral video"]))):
      return 20;

    case (0,dist.$item)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["plus one"]))):
      return 74;

    case (0,dist.$item)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["gallon of milk"]))):
      return 100;

    case (0,dist.$item)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["print screen button"]))):
      return 111;

    case (0,dist.$item)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["daily dungeon malware"]))):
      return 150;
  }

  return 0;
}
function kramcoGuaranteed() {
  return (0,dist.have)((0,dist.$item)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))) && (0,dist.getKramcoWandererChance)() >= 1;
}
function leprechaunMultiplier(familiar) {
  if (familiar === $familiar(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Mutant Cactus Bud"])))) return numericModifier(familiar, "Leprechaun Effectiveness", 1, $item(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["none"]))));
  var meatBonus = numericModifier(familiar, "Meat Drop", 1, $item(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["none"]))));
  return Math.pow(Math.sqrt(meatBonus / 2 + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
function fairyMultiplier(familiar) {
  if (familiar === $familiar(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Mutant Fire Ant"])))) return numericModifier(familiar, "Fairy Effectiveness", 1, $item(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["none"]))));
  var itemBonus = numericModifier(familiar, "Item Drop", 1, $item(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["none"]))));
  return Math.pow(Math.sqrt(itemBonus + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
var monsterManuelCached = undefined;
function monsterManuelAvailable() {
  if (monsterManuelCached !== undefined) return Boolean(monsterManuelCached);
  monsterManuelCached = (0,external_kolmafia_.visitUrl)("questlog.php?which=3").includes("Monster Manuel");
  return Boolean(monsterManuelCached);
}

function maxCarriedFamiliarDamage(familiar) {
  // Only considering familiars we reasonably may carry
  switch (familiar) {
    // +5 to Familiar Weight
    case (0,dist.$familiar)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Animated Macaroni Duck"]))):
      return 50;

    case (0,dist.$familiar)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Barrrnacle"]))):
    case (0,dist.$familiar)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["Gelatinous Cubeling"]))):
    case (0,dist.$familiar)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["Penguin Goodfella"]))):
      return 30;

    case (0,dist.$familiar)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Misshapen Animal Skeleton"]))):
      return 40 + (0,external_kolmafia_.numericModifier)("Spooky Damage");
    // +25% Meat from Monsters

    case (0,dist.$familiar)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["Hobo Monkey"]))):
      return 25;
    // +20% Meat from Monsters

    case (0,dist.$familiar)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["Grouper Groupie"]))):
      // Double sleaze damage at Barf Mountain
      return 25 + (0,external_kolmafia_.numericModifier)("Sleaze Damage") * ((0,external_kolmafia_.myLocation)() === (0,dist.$location)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Barf Mountain"]))) ? 2 : 1);

    case (0,dist.$familiar)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["Jitterbug"]))):
      return 20;

    case (0,dist.$familiar)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["Mutant Cactus Bud"]))):
      // 25 poison damage (25+12+6+3+1)
      return 47;

    case (0,dist.$familiar)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["Robortender"]))):
      return 20;
  }

  return 0;
}

function maxFamiliarDamage(familiar) {
  switch (familiar) {
    case (0,dist.$familiar)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["Cocoabo"]))):
      return (0,external_kolmafia_.familiarWeight)(familiar) + 3;

    case (0,dist.$familiar)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["Feather Boa Constrictor"]))):
      // Double sleaze damage at Barf Mountain
      return (0,external_kolmafia_.familiarWeight)(familiar) + 3 + (0,external_kolmafia_.numericModifier)("Sleaze Damage") * ((0,external_kolmafia_.myLocation)() === (0,dist.$location)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Barf Mountain"]))) ? 2 : 1);

    case (0,dist.$familiar)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["Ninja Pirate Zombie Robot"]))):
      return Math.floor(((0,external_kolmafia_.familiarWeight)(familiar) + 3) * 1.5);
  }

  return 0;
}

function maxPassiveDamage() {
  // Only considering passive damage sources we reasonably may have
  var vykeaMaxDamage = (0,dist.get)("_VYKEACompanionLevel") > 0 ? 10 * (0,dist.get)("_VYKEACompanionLevel") + 10 : 0;
  var crownMaxDamage = (0,external_kolmafia_.haveEquipped)((0,dist.$item)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["Crown of Thrones"])))) ? maxCarriedFamiliarDamage((0,external_kolmafia_.myEnthronedFamiliar)()) : 0;
  var bjornMaxDamage = (0,external_kolmafia_.haveEquipped)((0,dist.$item)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["Buddy Bjorn"])))) ? maxCarriedFamiliarDamage((0,external_kolmafia_.myBjornedFamiliar)()) : 0;
  var familiarMaxDamage = maxFamiliarDamage((0,external_kolmafia_.myFamiliar)());
  return vykeaMaxDamage + crownMaxDamage + bjornMaxDamage + familiarMaxDamage;
}
function gnomeWeightValue() {
  // Assume rough weight of 190
  var gnomeWeight = 190;
  return MPA * (0.001 / Math.pow(1 - 0.001 * gnomeWeight, 2));
}
function fromEntries(iterable) {
  return _toConsumableArray(iterable).reduce((obj, _ref5) => {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        val = _ref6[1];

    obj[key] = val;
    return obj;
  }, {});
}

/***/ }),

/***/ 1664:
/***/ ((module) => {

"use strict";
module.exports = require("kolmafia");;

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = 6173);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;