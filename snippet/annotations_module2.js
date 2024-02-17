var window = this;
/**
 * @param {Object} options
 * @param {Function} matcherFunction
 * @return {undefined}
 */
var then = function(options, matcherFunction) {
  /** @type {boolean} */
  var c = false;
  var cookie = options.subscribe("ROOT_MENU_REMOVED", function(dataAndEvents) {
    if (!c) {
      /** @type {boolean} */
      c = true;
      this.Ud(cookie);
      matcherFunction.apply(void 0, arguments);
    }
  }, options);
};
/**
 * @param {Node} col
 * @param {Text} a
 * @param {Text} b
 * @param {(number|string)} var_args
 * @return {undefined}
 */
var join = function(col, a, b, var_args) {
  b = (0, _yt_player.z)(b, var_args || col.l);
  a = _yt_player.AF(a, "change", b, "iv-card-poll-choice-input");
  col.g.push(a);
};
/**
 * @param {Function} exports
 * @return {?}
 */
var inject = function(exports) {
  if (!exports.g) {
    exports.g = new _yt_player.XC;
    _yt_player.N(exports, exports.g);
  }
  return exports.g;
};
/**
 * @param {?} arg
 * @return {undefined}
 */
var isFunction = function(arg) {
  arg.R("cardstatechange", _yt_player.cV(arg) && _yt_player.dV(arg) ? 1 : 0);
};
/**
 * @param {?} args
 * @return {?}
 */
var each = function(args) {
  /** @type {Array} */
  var res = [];
  /** @type {number} */
  var i = 0;
  for (;i < arguments.length;i++) {
    var def = arguments[i];
    if (_yt_player.Aa(def)) {
      /** @type {number} */
      var depth = 0;
      for (;depth < def.length;depth += 8192) {
        var styles = _yt_player.$a(def, depth, depth + 8192);
        styles = each.apply(null, styles);
        /** @type {number} */
        var s = 0;
        for (;s < styles.length;s++) {
          res.push(styles[s]);
        }
      }
    } else {
      res.push(def);
    }
  }
  return res;
};
/**
 * @param {Element} elm
 * @param {Function} item
 * @param {Array} elems
 * @param {boolean} deepDataAndEvents
 * @return {?}
 */
var text = function(elm, item, elems, deepDataAndEvents) {
  if (null != elm) {
    elm = elm.firstChild;
    for (;elm;) {
      if (item(elm) && (elems.push(elm), deepDataAndEvents) || text(elm, item, elems, deepDataAndEvents)) {
        return true;
      }
      elm = elm.nextSibling;
    }
  }
  return false;
};
/**
 * @param {?} node
 * @param {Function} str
 * @return {?}
 */
var isEmpty = function(node, str) {
  /** @type {Array} */
  var originalEvent = [];
  return text(node, str, originalEvent, true) ? originalEvent[0] : void 0;
};
/**
 * @param {Object} node
 * @param {Array} nodes
 * @param {boolean} deepDataAndEvents
 * @return {undefined}
 */
var walk = function(node, nodes, deepDataAndEvents) {
  if (!(node.nodeName in blockLikeTags)) {
    if (3 == node.nodeType) {
      if (deepDataAndEvents) {
        nodes.push(String(node.nodeValue).replace(/(\r\n|\r|\n)/g, ""));
      } else {
        nodes.push(node.nodeValue);
      }
    } else {
      if (node.nodeName in tmp) {
        nodes.push(tmp[node.nodeName]);
      } else {
        node = node.firstChild;
        for (;node;) {
          walk(node, nodes, deepDataAndEvents);
          node = node.nextSibling;
        }
      }
    }
  }
};
/**
 * @param {string} node
 * @return {?}
 */
var highlight = function(node) {
  if (_yt_player.Xta && (null !== node && "innerText" in node)) {
    node = node.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  } else {
    /** @type {Array} */
    var parent = [];
    walk(node, parent, true);
    /** @type {string} */
    node = parent.join("");
  }
  node = node.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  node = node.replace(/\u200B/g, "");
  if (!_yt_player.Xta) {
    node = node.replace(/ +/g, " ");
  }
  if (" " != node) {
    node = node.replace(/^\s*/, "");
  }
  return node;
};
/**
 * @param {Object} data
 * @return {?}
 */
var inverse = function(data) {
  return new _yt_player.bh(data.left, data.top, data.right - data.left, data.bottom - data.top);
};
/**
 * @param {Object} el
 * @return {?}
 */
var wrap = function(el) {
  return "rtl" == _yt_player.uh(el, "direction");
};
/**
 * @param {Object} n
 * @return {?}
 */
var load = function(n) {
  var result = _yt_player.uh(n, "fontSize");
  var t = (t = result.match(typePattern)) && t[0] || null;
  if (result && "px" == t) {
    return(0, window.parseInt)(result, 10);
  }
  if (_yt_player.yd) {
    if (String(t) in data) {
      return _yt_player.Oh(n, result, "left", "pixelLeft");
    }
    if (n.parentNode && (1 == n.parentNode.nodeType && String(t) in COMMANDS)) {
      return n = n.parentNode, t = _yt_player.uh(n, "fontSize"), _yt_player.Oh(n, result == t ? "1em" : result, "left", "pixelLeft");
    }
  }
  t = _yt_player.K("SPAN", {
    style : "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
  });
  n.appendChild(t);
  result = t.offsetHeight;
  _yt_player.Kd(t);
  return result;
};
/**
 * @param {number} n1
 * @param {number} n2
 * @return {undefined}
 */
var Range = function(n1, n2) {
  this.start = n1 < n2 ? n1 : n2;
  this.end = n1 < n2 ? n2 : n1;
};
/**
 * @param {Node} element
 * @param {string} key
 * @return {?}
 */
var getData = function(element, key) {
  if (/-[a-z]/.test(key)) {
    return null;
  }
  if (_yt_player.ek && element.dataset) {
    if (_yt_player.kc() && !(key in element.dataset)) {
      return null;
    }
    var value = element.dataset[key];
    return void 0 === value ? null : value;
  }
  return element.getAttribute("data-" + _yt_player.Hb(key));
};
/**
 * @param {(Object|number)} value
 * @param {number} msg
 * @param {number} inEvent
 * @param {number} a
 * @param {number} inSender
 * @param {number} keepCallback
 * @param {number} message
 * @return {undefined}
 */
var ok = function(value, msg, inEvent, a, inSender, keepCallback, message) {
  /** @type {Date} */
  this.date = _yt_player.ua(value) ? new Date(value, msg || 0, inEvent || 1, a || 0, inSender || 0, keepCallback || 0, message || 0) : new Date(value && value.getTime ? value.getTime() : (0, _yt_player.F)());
};
/**
 * @param {(Array|string)} name
 * @return {undefined}
 */
var pause = function(name) {
  name = _yt_player.Fa(name);
  delete empty[name];
  if (_yt_player.Yb(empty)) {
    if (root) {
      root.stop();
    }
  }
};
/**
 * @return {undefined}
 */
var restart = function() {
  if (!root) {
    root = new _yt_player.Yt(function() {
      exit();
    }, 20);
  }
  var current = root;
  if (!current.isActive()) {
    current.start();
  }
};
/**
 * @return {undefined}
 */
var exit = function() {
  var dt = (0, _yt_player.F)();
  _yt_player.Lb(empty, function(relativeToItem) {
    tick(relativeToItem, dt);
  });
  if (!_yt_player.Yb(empty)) {
    restart();
  }
};
/**
 * @param {?} index
 * @param {Object} anim
 * @return {undefined}
 */
var tail = function(index, anim) {
  _yt_player.bf.call(this, index);
  this.coords = anim.coords;
  this.x = anim.coords[0];
  this.y = anim.coords[1];
  this.z = anim.coords[2];
  this.duration = anim.duration;
  this.progress = anim.progress;
  this.fps = anim.C;
  this.state = anim.g;
};
/**
 * @param {Array} x
 * @param {Array} y
 * @param {?} value
 * @param {?} b
 * @return {undefined}
 */
var p = function(x, y, value, b) {
  _yt_player.ut.call(this);
  if (!_yt_player.Aa(x) || !_yt_player.Aa(y)) {
    throw Error("Start and end parameters must be arrays");
  }
  if (x.length != y.length) {
    throw Error("Start and end points must be the same length");
  }
  /** @type {Array} */
  this.l = x;
  /** @type {Array} */
  this.D = y;
  this.duration = value;
  this.B = b;
  /** @type {Array} */
  this.coords = [];
  /** @type {number} */
  this.progress = this.C = 0;
  /** @type {null} */
  this.A = null;
};
/**
 * @param {Object} item
 * @param {number} now
 * @return {undefined}
 */
var tick = function(item, now) {
  if (now < item.startTime) {
    /** @type {number} */
    item.endTime = now + item.endTime - item.startTime;
    /** @type {number} */
    item.startTime = now;
  }
  /** @type {number} */
  item.progress = (now - item.startTime) / (item.endTime - item.startTime);
  if (1 < item.progress) {
    /** @type {number} */
    item.progress = 1;
  }
  /** @type {number} */
  item.C = 1E3 / (now - item.A);
  /** @type {number} */
  item.A = now;
  progress(item, item.progress);
  if (1 == item.progress) {
    /** @type {number} */
    item.g = 0;
    pause(item);
    item.wd();
    item.xm();
  } else {
    if (item.kb()) {
      item.Iu();
    }
  }
};
/**
 * @param {Object} obj
 * @param {Function} ok
 * @return {undefined}
 */
var progress = function(obj, ok) {
  if (_yt_player.Ca(obj.B)) {
    ok = obj.B(ok);
  }
  /** @type {Array} */
  obj.coords = Array(obj.l.length);
  /** @type {number} */
  var i = 0;
  for (;i < obj.l.length;i++) {
    obj.coords[i] = (obj.D[i] - obj.l[i]) * ok + obj.l[i];
  }
};
/**
 * @param {?} element
 * @param {?} data
 * @param {?} start
 * @param {?} capture
 * @param {?} h
 * @return {undefined}
 */
var results = function(element, data, start, capture, h) {
  p.call(this, data, start, capture, h);
  this.element = element;
};
/**
 * @param {?} var_args
 * @param {Array} next
 * @param {Array} postData
 * @param {?} error_code
 * @param {?} pluginName
 * @return {undefined}
 */
var base = function(var_args, next, postData, error_code, pluginName) {
  if (2 != next.length || 2 != postData.length) {
    throw Error("Start and end points must be 2D");
  }
  results.apply(this, arguments);
};
/**
 * @param {?} pos
 * @return {?}
 */
var easeIn = function(pos) {
  return Math.pow(pos, 3);
};
/**
 * @param {number} dataAndEvents
 * @return {?}
 */
var clone = function(dataAndEvents) {
  return 3 * dataAndEvents * dataAndEvents - 2 * dataAndEvents * dataAndEvents * dataAndEvents;
};
/**
 * @param {Object} v
 * @param {number} object
 * @return {?}
 */
var mod = function(v, object) {
  return(object & 8 && wrap(v) ? object ^ 4 : object) & -9;
};
/**
 * @param {Object} e
 * @param {Object} s
 * @param {number} m
 * @param {?} size
 * @param {Object} style
 * @param {Object} f
 * @param {?} w
 * @return {?}
 */
var resize = function(e, s, m, size, style, f, w) {
  e = e.clone();
  var value = mod(s, m);
  m = _yt_player.Kh(s);
  w = w ? w.clone() : m.clone();
  e = _yt_player.WC(e, w, value, size, style, f);
  if (e.status & 496) {
    return e.status;
  }
  _yt_player.wh(s, _yt_player.gh(e.rect));
  w = _yt_player.fh(e.rect);
  if (!_yt_player.kd(m, w)) {
    size = w;
    style = _yt_player.md(s);
    f = _yt_player.vd(_yt_player.od(style).g);
    if (!_yt_player.yd || (_yt_player.rc("10") || f && _yt_player.rc("8"))) {
      s = s.style;
      if (_yt_player.rh) {
        /** @type {string} */
        s.MozBoxSizing = "border-box";
      } else {
        if (_yt_player.Ad) {
          /** @type {string} */
          s.WebkitBoxSizing = "border-box";
        } else {
          /** @type {string} */
          s.boxSizing = "border-box";
        }
      }
      /** @type {string} */
      s.width = Math.max(size.width, 0) + "px";
      /** @type {string} */
      s.height = Math.max(size.height, 0) + "px";
    } else {
      style = s.style;
      if (f) {
        f = _yt_player.Qh(s);
        s = _yt_player.Th(s);
        /** @type {number} */
        style.pixelWidth = size.width - s.left - f.left - f.right - s.right;
        /** @type {number} */
        style.pixelHeight = size.height - s.top - f.top - f.bottom - s.bottom;
      } else {
        style.pixelWidth = size.width;
        style.pixelHeight = size.height;
      }
    }
  }
  return e.status;
};
/**
 * @param {number} value
 * @param {number} pos
 * @param {Object} item
 * @param {number} mom
 * @param {Object} v
 * @param {?} recurring
 * @param {number} opt_attributes
 * @return {?}
 */
var absBox = function(value, pos, item, mom, v, recurring, opt_attributes) {
  var element;
  if (element = item.offsetParent) {
    /** @type {boolean} */
    var data = "HTML" == element.tagName || "BODY" == element.tagName;
    if (!data || "static" != _yt_player.uh(element, "position")) {
      var position = _yt_player.Ch(element);
      if (!data) {
        data = wrap(element);
        var parent;
        if (parent = data) {
          parent = _yt_player.bM && _yt_player.Mn(10);
          var obj = _yt_player.Uta && 0 <= _yt_player.Cb(_yt_player.Fua, 10);
          parent = _yt_player.rh || (parent || obj);
        }
        data = parent ? -element.scrollLeft : !data || (_yt_player.oH && _yt_player.rc("8") || "visible" == _yt_player.uh(element, "overflowX")) ? element.scrollLeft : element.scrollWidth - element.clientWidth - element.scrollLeft;
        position = _yt_player.jd(position, new _yt_player.hd(data, element.scrollTop));
      }
    }
  }
  element = position || new _yt_player.hd;
  position = _yt_player.Lh(value);
  if (data = _yt_player.Dh(value)) {
    _yt_player.eh(position, inverse(data));
  }
  data = _yt_player.od(value);
  obj = _yt_player.od(item);
  if (data.g != obj.g) {
    parent = data.g.body;
    obj = _yt_player.Fh(parent, _yt_player.be(obj));
    obj = _yt_player.jd(obj, _yt_player.Ch(parent));
    if (!!_yt_player.yd) {
      if (!_yt_player.sc(9)) {
        if (!_yt_player.vd(data.g)) {
          obj = _yt_player.jd(obj, _yt_player.zd(data.g));
        }
      }
    }
    position.left += obj.x;
    position.top += obj.y;
  }
  value = mod(value, pos);
  pos = position.left;
  if (value & 4) {
    pos += position.width;
  } else {
    if (value & 2) {
      pos += position.width / 2;
    }
  }
  pos = new _yt_player.hd(pos, position.top + (value & 1 ? position.height : 0));
  pos = _yt_player.jd(pos, element);
  if (v) {
    pos.x += (value & 4 ? -1 : 1) * v.x;
    pos.y += (value & 1 ? -1 : 1) * v.y;
  }
  var ret;
  if (opt_attributes) {
    if (ret = _yt_player.Dh(item)) {
      ret.top -= element.y;
      ret.right -= element.x;
      ret.bottom -= element.y;
      ret.left -= element.x;
    }
  }
  return resize(pos, item, mom, recurring, ret, opt_attributes, void 0);
};
/**
 * @param {Element} element
 * @param {string} name
 * @return {undefined}
 */
var onLoad = function(element, name) {
  if (element) {
    if (element.dataset) {
      delete element.dataset[_yt_player.$E(name)];
    } else {
      element.removeAttribute("data-" + name);
    }
  }
};
/**
 * @param {?} obj
 * @return {?}
 */
var write = function(obj) {
  var id = obj.__yt_uid_key;
  if (!id) {
    id = (0, _yt_player.Pua)();
    obj.__yt_uid_key = id;
  }
  return id;
};
/**
 * @param {(Object|number)} value
 * @param {?} arg
 * @return {?}
 */
var hasKey = function(value, arg) {
  value = _yt_player.pd(value);
  arg = _yt_player.pd(arg);
  return!!_yt_player.Yd(value, function(val) {
    return val === arg;
  }, true, void 0);
};
/**
 * @param {string} name
 * @param {string} y
 * @return {?}
 */
var makeElement = function(name, y) {
  var names = _yt_player.qd(window.document, name, null, y);
  return names.length ? names[0] : null;
};
/**
 * @return {undefined}
 */
var flush = function() {
  _yt_player.U(window.document.body, "hide-players", false);
  var r20 = _yt_player.rd("preserve-players");
  (0, _yt_player.B)(r20, function(onComplete) {
    _yt_player.mq(onComplete, "preserve-players");
  });
};
/**
 * @param {Element} node
 * @return {undefined}
 */
var fireOnClick = function(node) {
  if (window.document.createEvent) {
    var event = window.document.createEvent("HTMLEvents");
    event.initEvent("click", true, true);
    node.dispatchEvent(event);
  } else {
    event = window.document.createEventObject();
    node.fireEvent("onclick", event);
  }
};
/**
 * @param {?} g
 * @return {undefined}
 */
var setColor = function(g) {
  this.g = g;
};
/**
 * @param {?} state
 * @return {?}
 */
var w = function(state) {
  var result = {};
  if (void 0 !== state.g.trackingParams) {
    result.trackingParams = state.g.trackingParams;
  } else {
    result.veType = state.g.veType;
    if (null != state.g.veCounter) {
      result.veCounter = state.g.veCounter;
    }
    if (null != state.g.elementIndex) {
      result.elementIndex = state.g.elementIndex;
    }
  }
  if (void 0 !== state.g.dataElement) {
    result.dataElement = w(state.g.dataElement);
  }
  if (void 0 !== state.g.youtubeData) {
    result.youtubeData = state.g.youtubeData;
  }
  return result;
};
/**
 * @param {?} v02
 * @return {?}
 */
var parseInt = function(v02) {
  return new setColor({
    trackingParams : v02
  });
};
/**
 * @return {?}
 */
var getAttribute = function() {
  var veType = _yt_player.LG(0);
  var ret;
  if (veType) {
    ret = new setColor({
      veType : veType,
      youtubeData : void 0
    });
  } else {
    /** @type {null} */
    ret = null;
  }
  return ret;
};
/**
 * @param {Element} second
 * @param {boolean} deep
 * @return {undefined}
 */
var unfoldSoak = function(second, deep) {
  if (second = _yt_player.pd(second)) {
    if (second.style) {
      _yt_player.O(second, deep);
      _yt_player.U(second, "hid", !deep);
    }
  }
};
/**
 * @param {?} callback
 * @return {?}
 */
var unbind = function(callback) {
  return(callback = _yt_player.pd(callback)) ? _yt_player.Nh(callback) && !_yt_player.kq(callback, "hid") : false;
};
/**
 * @param {?} value
 * @return {undefined}
 */
var removeClass = function(value) {
  (0, _yt_player.B)(arguments, function(o) {
    if (!_yt_player.Ba(o) || o instanceof window.Element) {
      unfoldSoak(o, true);
    } else {
      (0, _yt_player.B)(o, function(isXML) {
        removeClass(isXML);
      });
    }
  });
};
/**
 * @param {?} s
 * @return {undefined}
 */
var addClass = function(s) {
  (0, _yt_player.B)(arguments, function(o) {
    if (!_yt_player.Ba(o) || o instanceof window.Element) {
      unfoldSoak(o, false);
    } else {
      (0, _yt_player.B)(o, function(node) {
        addClass(node);
      });
    }
  });
};
/**
 * @param {Object} settings
 * @param {Object} options
 * @param {?} noEvents
 * @return {undefined}
 */
var Entity = function(settings, options, noEvents) {
  /** @type {Object} */
  this.id = settings;
  this.timestamp = options.timestamp || 0;
  this.type = options.card_type;
  this.teaserText = options.teaser_text;
  this.teaserDurationMs = options.teaser_duration_ms;
  this.startMs = options.start_ms;
  this.autoOpen = options.auto_open || false;
  this.Rd = options.session_data || {};
  this.o = noEvents;
  this.sponsored = options.sponsored || false;
  settings = options.tracking || {};
  this.l = {
    BL : settings.impression,
    click : settings.click,
    close : settings.close,
    dW : settings.teaser_impression,
    Dv : settings.teaser_click
  };
  options = options.tracking_params || {};
  this.C = parseInt(options.card);
  this.F = parseInt(options.teaser);
  this.D = parseInt(options.icon);
};
/**
 * @param {Function} options
 * @param {string} date
 * @return {undefined}
 */
var o = function(options, date) {
  _yt_player.Df.call(this);
  /** @type {Function} */
  this.El = options;
  /** @type {string} */
  this.rs = date;
  /** @type {boolean} */
  this[_yt_player.gf] = false;
};
/**
 * @param {string} r
 * @param {number} item
 * @param {Object} value
 * @param {Object} options
 * @return {undefined}
 */
var f = function(r, item, value, options) {
  o.call(this, r, item);
  r = this.rs;
  item = this.la();
  if (value) {
    item.setAttribute("stroke", value.g);
    item.setAttribute("stroke-opacity", 1);
    value = value.Cb();
    if (_yt_player.u(value) && -1 != value.indexOf("px")) {
      item.setAttribute("stroke-width", (0, window.parseFloat)(value) / min(r));
    } else {
      item.setAttribute("stroke-width", value);
    }
  } else {
    item.setAttribute("stroke", "none");
  }
  /** @type {Object} */
  this.fill = options;
  value = this.rs;
  r = this.la();
  if (options instanceof failureMessage) {
    r.setAttribute("fill", options.H);
    r.setAttribute("fill-opacity", options.I);
  } else {
    if (options instanceof t) {
      /** @type {string} */
      item = "lg-" + options.B + "-" + options.D + "-" + options.C + "-" + options.F + "-" + options.g + "-" + options.l;
      var node = item in value.l ? value.l[item] : null;
      if (!node) {
        node = h(value, "linearGradient", {
          x1 : options.B,
          y1 : options.D,
          x2 : options.C,
          y2 : options.F,
          gradientUnits : "userSpaceOnUse"
        });
        /** @type {string} */
        var border = "stop-color:" + options.g;
        if (_yt_player.ua(options.o)) {
          border += ";stop-opacity:" + options.o;
        }
        border = h(value, "stop", {
          offset : "0%",
          style : border
        });
        node.appendChild(border);
        /** @type {string} */
        border = "stop-color:" + options.l;
        if (_yt_player.ua(options.A)) {
          border += ";stop-opacity:" + options.A;
        }
        options = h(value, "stop", {
          offset : "100%",
          style : border
        });
        node.appendChild(options);
        node = select(value, item, node);
      }
      r.setAttribute("fill", "url(#" + node + ")");
    } else {
      r.setAttribute("fill", "none");
    }
  }
};
/**
 * @return {undefined}
 */
var oldconfig = function() {
};
/**
 * @param {?} attributes
 * @param {?} c
 * @return {undefined}
 */
var elem = function(attributes, c) {
  o.call(this, attributes, c);
};
/**
 * @return {undefined}
 */
var options = function() {
  /** @type {Array} */
  this.rb = [];
  /** @type {Array} */
  this.Ka = [];
  /** @type {Array} */
  this.Ce = [];
};
/**
 * @param {?} obj
 * @param {number} v
 * @param {number} path
 * @param {number} value
 * @return {undefined}
 */
var insert = function(obj, v, path, value) {
  /** @type {number} */
  var newOptions = obj.Zd[0] - v * Math.cos(_yt_player.gd(value)) + v * Math.cos(_yt_player.gd(value + 90));
  /** @type {number} */
  var y = obj.Zd[1] - path * Math.sin(_yt_player.gd(value)) + path * Math.sin(_yt_player.gd(value + 90));
  obj.rb.push(3);
  obj.Ka.push(1);
  obj.Ce.push(v, path, value, 90, newOptions, y);
  /** @type {boolean} */
  obj.Jm = false;
  /** @type {Array} */
  obj.Zd = [newOptions, y];
};
/**
 * @param {?} node
 * @param {Function} fun
 * @return {undefined}
 */
var traverseNode = function(node, fun) {
  var template = node.Ce;
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var j = 0;
  var jl = node.rb.length;
  for (;j < jl;j++) {
    var k = node.rb[j];
    /** @type {number} */
    var segmentLength = table[k] * node.Ka[j];
    fun(k, template.slice(i, i + segmentLength));
    i += segmentLength;
  }
};
/**
 * @param {?} a
 * @param {?} key
 * @param {?} next
 * @param {?} arr
 * @return {undefined}
 */
var c = function(a, key, next, arr) {
  f.call(this, a, key, next, arr);
};
/**
 * @param {?} l
 * @param {?} g
 * @return {undefined}
 */
var RegExp = function(l, g) {
  this.l = l;
  this.g = g;
};
/**
 * @param {?} width
 * @param {?} height
 * @param {(number|string)} thisValue
 * @param {string} newValue
 * @param {?} newVal
 * @return {undefined}
 */
var value = function(width, height, thisValue, newValue, newVal) {
  _yt_player.Tu.call(this, newVal);
  this.width = width;
  this.height = height;
  this.o = thisValue || null;
  this.K = newValue || null;
};
/**
 * @param {Object} data
 * @return {?}
 */
var min = function(data) {
  var viewSize = data.Hj();
  return viewSize ? viewSize.width / (data.o ? new _yt_player.I(data.o, data.K) : data.Hj()).width : 0;
};
/**
 * @param {?} b
 * @param {?} d
 * @param {?} a
 * @param {?} off
 * @param {?} args
 * @param {?} lang
 * @param {Function} ok
 * @param {Function} exports
 * @return {undefined}
 */
var t = function(b, d, a, off, args, lang, ok, exports) {
  this.B = b;
  this.D = d;
  this.C = a;
  this.F = off;
  this.g = args;
  this.l = lang;
  this.o = _yt_player.t(ok) ? ok : null;
  this.A = _yt_player.t(exports) ? exports : null;
};
/**
 * @param {?} not
 * @param {number} value
 * @return {undefined}
 */
var failureMessage = function(not, value) {
  this.H = not;
  this.I = null == value ? 1 : value;
};
/**
 * @param {?} evtHandler
 * @param {?} dp_inst
 * @return {undefined}
 */
var defs = function(evtHandler, dp_inst) {
  o.call(this, evtHandler, dp_inst);
};
/**
 * @param {?} what
 * @param {?} index
 * @param {?} obj
 * @param {?} arr
 * @return {undefined}
 */
var out = function(what, index, obj, arr) {
  f.call(this, what, index, obj, arr);
};
/**
 * @param {?} j
 * @param {?} request
 * @param {?} stateVal
 * @param {?} opt_coordHeight
 * @param {?} opt_acc
 * @return {undefined}
 */
var QUnit = function(j, request, stateVal, opt_coordHeight, opt_acc) {
  value.call(this, j, request, stateVal, opt_coordHeight, opt_acc);
  this.l = {};
  this.M = _yt_player.Ad && !_yt_player.rc(526);
  this.I = new _yt_player.Lm(this);
};
/**
 * @param {Object} e
 * @param {string} tagName
 * @param {?} moreattrs
 * @return {?}
 */
var h = function(e, tagName, moreattrs) {
  e = e.H.g.createElementNS("http://www.w3.org/2000/svg", tagName);
  if (moreattrs) {
    var k;
    for (k in moreattrs) {
      e.setAttribute(k, moreattrs[k]);
    }
  }
  return e;
};
/**
 * @param {Object} data
 * @param {string} value
 * @param {string} node
 * @param {Object} callback
 * @return {undefined}
 */
var test = function(data, value, node, callback) {
  value = h(data, "path", {
    d : flatten(value)
  });
  node = new out(value, data, node, callback);
  data.B.la().appendChild(node.la());
};
/**
 * @param {?} target
 * @return {?}
 */
var flatten = function(target) {
  /** @type {Array} */
  var list = [];
  traverseNode(target, function(dataAndEvents, args) {
    switch(dataAndEvents) {
      case 0:
        list.push("M");
        Array.prototype.push.apply(list, args);
        break;
      case 1:
        list.push("L");
        Array.prototype.push.apply(list, args);
        break;
      case 2:
        list.push("C");
        Array.prototype.push.apply(list, args);
        break;
      case 3:
        var pageX = args[3];
        list.push("A", args[0], args[1], 0, 180 < Math.abs(pageX) ? 1 : 0, 0 < pageX ? 1 : 0, args[4], args[5]);
        break;
      case 4:
        list.push("Z");
    }
  });
  return list.join(" ");
};
/**
 * @param {Node} node
 * @param {number} i
 * @param {Element} context
 * @return {?}
 */
var select = function(node, i, context) {
  if (i in node.l) {
    return node.l[i];
  }
  /** @type {string} */
  var val = "_svgdef_" + _svgdef_++;
  context.setAttribute("id", val);
  /** @type {string} */
  node.l[i] = val;
  node.F.appendChild(context);
  return val;
};
/**
 * @return {?}
 */
var plus = function() {
  if (!result) {
    result = new _yt_player.sg(400);
    result.start();
  }
  return result;
};
/**
 * @param {Object} dataAndEvents
 * @param {?} line
 * @param {Array} baseValue
 * @return {undefined}
 */
var validator = function(dataAndEvents, line, baseValue) {
  var firstLength = _yt_player.vG;
  dataAndEvents = {
    csn : dataAndEvents,
    parentVisualElement : w(line),
    visualElements : (0, _yt_player.G)(baseValue, function(line) {
      return w(line);
    })
  };
  expectData(firstLength, {
    attachChild : dataAndEvents
  });
};
/**
 * @param {Function} data
 * @param {?} line
 * @return {undefined}
 */
var send = function(data, line) {
  _yt_player.wG("visualElementShown", {
    /** @type {Function} */
    csn : data,
    ve : w(line),
    eventType : 1
  });
};
/**
 * @param {Function} b
 * @param {?} line
 * @return {undefined}
 */
var equals = function(b, line) {
  _yt_player.wG("visualElementGestured", {
    /** @type {Function} */
    csn : b,
    ve : w(line),
    gestureType : "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"
  });
};
/**
 * @param {?} length
 * @param {(Object|string)} opt_attributes
 * @return {undefined}
 */
var expectData = function(length, opt_attributes) {
  /** @type {number} */
  opt_attributes.eventTimeMs = Math.round(_yt_player.hG());
  opt_attributes.lactMs = _yt_player.uG();
  _yt_player.dG({
    endpoint : "log_interaction",
    payload : opt_attributes
  }, length);
};
/**
 * @param {?} options
 * @param {string} id
 * @return {?}
 */
var init = function(options, id) {
  /**
   * @param {Object} opts
   * @return {?}
   */
  function drag(opts) {
    return opts.baseUrl;
  }
  /**
   * @param {?} item
   * @return {?}
   */
  function $(item) {
    if (item) {
      var element = item.simpleText;
      if (element) {
        return element;
      }
      if (item.runs) {
        return(0, _yt_player.G)(item.runs, function(script) {
          return script.text;
        }).join("");
      }
    }
  }
  /**
   * @param {(number|string)} msg
   * @return {?}
   */
  function filter(msg) {
    if (msg) {
      /** @type {Array} */
      var messages = [];
      var message = msg.videoId;
      if (message) {
        messages.push("v=" + message);
      }
      if (message = msg.playlistId) {
        messages.push("list=" + message);
      }
      if (msg = msg.startTimeSeconds) {
        messages.push("t=" + msg);
      }
      return "/watch?" + messages.join("&");
    }
  }
  var instance = {};
  instance.startMs = (0, window.parseInt)(options.startMs, 10);
  instance.impressionUrls = (0, _yt_player.G)(options.impressionUrls || [], drag);
  instance.skip = options.skipEndscreen;
  instance.visualElement = parseInt(options.trackingParams);
  var _bracketR = (0, _yt_player.G)(options.elements || [], function(elem, i) {
    var options = elem.endscreenElementRenderer;
    if (!options) {
      return null;
    }
    var element = {};
    var content = options.style;
    var data = options.endpoint || {};
    /** @type {string} */
    element.id = "element-" + i;
    element.type = content;
    element.title = $(options.title);
    element.metadata = $(options.metadata);
    element.callToAction = $(options.callToAction);
    element.By = options.image;
    element.left = (0, window.parseFloat)(options.left);
    element.width = (0, window.parseFloat)(options.width);
    element.top = (0, window.parseFloat)(options.top);
    element.aspectRatio = (0, window.parseFloat)(options.aspectRatio);
    element.startMs = (0, window.parseInt)(options.startMs, 10);
    element.endMs = (0, window.parseInt)(options.endMs, 10);
    element.clickUrls = (0, _yt_player.G)(data.loggingUrls || [], drag);
    element.qn = _yt_player.Tb(options, "title", "accessibility", "accessibilityData", "label");
    element.impressionUrls = (0, _yt_player.G)(options.impressionUrls || [], drag);
    element.MK = (0, _yt_player.G)(options.hovercardShowUrls || [], drag);
    element.Rd = {
      itct : options.trackingParams
    };
    element.visualElement = parseInt(options.trackingParams);
    if ("VIDEO" == content) {
      element.targetUrl = data.urlEndpoint ? data.urlEndpoint.url : filter(data.watchEndpoint);
      /** @type {boolean} */
      element.Oo = false;
      /** @type {string} */
      element.mq = id;
      element.videoDuration = $(options.videoDuration);
    } else {
      if ("PLAYLIST" == content) {
        element.targetUrl = data.urlEndpoint ? data.urlEndpoint.url : filter(data.watchEndpoint);
        /** @type {boolean} */
        element.Oo = false;
        /** @type {string} */
        element.mq = id;
        element.playlistLength = $(options.playlistLength);
      } else {
        if ("CHANNEL" == content) {
          if (content = _yt_player.Tb(data, "browseEndpoint", "browseId")) {
            element.channelId = content;
            /** @type {string} */
            element.targetUrl = "/channel/" + content;
          }
          /** @type {boolean} */
          element.Oo = false;
          /** @type {string} */
          element.mq = "new";
          /** @type {boolean} */
          element.isSubscribe = !!options.isSubscribe;
          if (element.isSubscribe) {
            a: {
              if (content = options.hovercardButton) {
                if (content = content.subscribeButtonRenderer) {
                  data = $(content.unsubscribedButtonText);
                  var css = $(content.subscribedButtonText);
                  if (content.subscribed) {
                    var $col = $(content.subscriberCountWithUnsubscribeText);
                    var $window = $(content.subscriberCountText);
                  } else {
                    $col = $(content.subscriberCountText);
                    $window = $(content.subscriberCountWithSubscribeText);
                  }
                  /** @type {null} */
                  var js = null;
                  if (options.signinEndpoint && (js = _yt_player.Tb(options, "signinEndpoint", "webNavigationEndpointData", "url"), !js)) {
                    options = void 0;
                    break a;
                  }
                  if (data && (css || js)) {
                    options = {
                      subscribed : content.subscribed,
                      subscribeText : data,
                      subscribeCount : $col,
                      unsubscribeText : css,
                      unsubscribeCount : $window,
                      enabled : content.enabled,
                      signinUrl : js,
                      classic : options.useClassicSubscribeButton
                    };
                    break a;
                  }
                }
              }
              options = void 0;
            }
            /** @type {(undefined|{classic: ??, enabled: ??, signinUrl: ?, subscribeCount: ?, subscribeText: ??, subscribed: ??, unsubscribeCount: ?, unsubscribeText: ?})} */
            element.subscribeButton = options;
          } else {
            element.subscribersText = $(options.subscribersText);
          }
        } else {
          if ("WEBSITE" == content) {
            element.targetUrl = _yt_player.Tb(data, "urlEndpoint", "url");
            /** @type {boolean} */
            element.Oo = true;
            /** @type {string} */
            element.mq = "new";
            element.iconUrl = options.icon.thumbnails[0].url;
          }
        }
      }
    }
    return element;
  });
  instance.elements = (0, _yt_player.Ld)(_bracketR, function(dataAndEvents) {
    return!!dataAndEvents;
  });
  return instance;
};
/**
 * @param {Text} x
 * @return {undefined}
 */
var Class = function(x) {
  _yt_player.sV.call(this, x);
  /** @type {null} */
  this.o = null;
  /** @type {boolean} */
  this.J = false;
  /** @type {null} */
  this.B = null;
  this.l = {};
  this.F = {};
  /** @type {null} */
  this.D = this.A = null;
  /** @type {Array} */
  this.K = [];
  x = _yt_player.Y(x);
  this.M = _yt_player.HM(x) || _yt_player.IM(x);
  /** @type {boolean} */
  this.LE = true;
  /** @type {number} */
  this.H = 0;
  this.I = new _yt_player.cp(null);
  this.C = new _yt_player.FF(this);
  _yt_player.N(this, this.C);
  this.C.O(this.g, "crn_creatorendscreen", this.EM);
  this.C.O(this.g, "crx_creatorendscreen", this.FM);
  this.C.O(this.g, "resize", this.XA);
  this.C.O(window, "focus", this.RU);
  this.load();
  var s = _yt_player.Ed("STYLE");
  (window.document.getElementsByTagName("HEAD")[0] || window.document.body).appendChild(s);
  _yt_player.Ze(this, function() {
    _yt_player.Kd(s);
  });
  if (s.sheet) {
    s.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0);
    s.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}", 
    0);
  }
};
/**
 * @param {?} args
 * @return {?}
 */
var runLoggingCallbacks = function(args) {
  return "creator-endscreen-editor" === args;
};
/**
 * @param {Object} data
 * @param {?} b
 * @return {undefined}
 */
var reset = function(data, b) {
  _yt_player.kV(data.g, "creatorendscreen");
  if (data.A) {
    data.A.dispose();
    /** @type {null} */
    data.A = null;
    data.D.dispose();
    /** @type {null} */
    data.D = null;
  }
  var i;
  for (i in data.l) {
    data.l[i].dispose();
  }
  data.l = {};
  data.F = {};
  if (0 < data.K.length) {
    data.K.forEach(function(child) {
      child.dispose();
    });
    /** @type {number} */
    data.K.length = 0;
  }
  /** @type {number} */
  data.H = 0;
  if ((data.o = b) && b.elements) {
    _each(data);
    /** @type {Array} */
    i = [];
    var j = new _yt_player.eQ(b.startMs, 0x7ffffffffffff, {
      id : "ytp-ce-in-endscreen",
      namespace : "creatorendscreen"
    });
    i.push(j);
    if (!_yt_player.Y(data.g).l) {
      data.A = new _yt_player.W({
        G : "div",
        L : "ytp-ce-shadow"
      });
      _yt_player.mV(data.g, data.A.element, 4);
      data.D = new _yt_player.MV(data.A, 200);
    }
    /** @type {number} */
    j = 0;
    for (;j < b.elements.length;++j) {
      var object = b.elements[j];
      var obj = put(data, object);
      data.l[object.id] = obj;
      data.F[object.id] = object;
      _yt_player.mV(data.g, obj.element, 4);
      var copies = new _yt_player.eQ(object.startMs, object.endMs, {
        id : "ytp-ce-element-" + object.id,
        namespace : "creatorendscreen"
      });
      i.push(copies);
      bind(data, obj, object);
    }
    _yt_player.hV(data.g, i);
    data.XA();
  }
};
/**
 * @param {Object} data
 * @return {undefined}
 */
var _each = function(data) {
  var record = getAttribute();
  var dataAndEvents = _yt_player.MG();
  if (dataAndEvents) {
    if (record) {
      validator(dataAndEvents, record, [data.o.visualElement]);
    }
  }
};
/**
 * @param {Object} data
 * @param {Object} options
 * @return {?}
 */
var put = function(data, options) {
  /** @type {null} */
  var item = null;
  switch(options.type) {
    case "VIDEO":
      item = {
        G : "div",
        da : ["ytp-ce-element", "ytp-ce-video"],
        P : {
          tabindex : "0",
          "aria-label" : options.qn || "",
          "aria-hidden" : "true"
        },
        N : [{
          G : "div",
          L : "ytp-ce-element-shadow"
        }, {
          G : "div",
          L : "ytp-ce-covering-image",
          P : indexOf(options)
        }, {
          G : "div",
          L : "ytp-ce-covering-shadow-top"
        }, {
          G : "a",
          L : "ytp-ce-covering-overlay",
          P : {
            href : options.targetUrl,
            tabindex : "-1"
          },
          N : [{
            G : "div",
            da : ["ytp-ce-video-title", "yt-ui-ellipsis", "yt-ui-ellipsis-2"],
            P : {
              dir : _yt_player.dp(data.I, options.title || "")
            },
            aa : options.title
          }, {
            G : "div",
            L : "ytp-ce-video-duration",
            aa : options.videoDuration
          }]
        }]
      };
      item = new _yt_player.W(item);
      break;
    case "PLAYLIST":
      item = {
        G : "div",
        da : ["ytp-ce-element", "ytp-ce-playlist"],
        P : {
          tabindex : "0",
          "aria-label" : options.qn || "",
          "aria-hidden" : "true"
        },
        N : [{
          G : "div",
          L : "ytp-ce-element-shadow"
        }, {
          G : "div",
          L : "ytp-ce-covering-image",
          P : indexOf(options)
        }, {
          G : "div",
          L : "ytp-ce-covering-shadow-top"
        }, {
          G : "a",
          L : "ytp-ce-covering-overlay",
          P : {
            href : options.targetUrl,
            tabindex : "-1"
          },
          N : [{
            G : "div",
            da : ["ytp-ce-playlist-title", "yt-ui-ellipsis", "yt-ui-ellipsis-2"],
            P : {
              dir : _yt_player.dp(data.I, options.title || "")
            },
            aa : options.title
          }, {
            G : "div",
            L : "ytp-ce-playlist-count",
            N : [{
              G : "div",
              L : "ytp-ce-playlist-icon"
            }, {
              G : "div",
              L : "ytp-ce-playlist-count-text",
              aa : options.playlistLength
            }]
          }]
        }]
      };
      item = new _yt_player.W(item);
      break;
    case "CHANNEL":
      item = {
        G : "div",
        da : ["ytp-ce-element", "ytp-ce-channel", options.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"],
        P : {
          tabindex : "0",
          "aria-label" : options.qn || "",
          "aria-hidden" : "true"
        },
        N : [{
          G : "div",
          L : "ytp-ce-element-shadow"
        }, {
          G : "div",
          L : "ytp-ce-expanding-overlay",
          N : [{
            G : "div",
            L : "ytp-ce-expanding-overlay-hider"
          }, {
            G : "div",
            L : "ytp-ce-expanding-overlay-background"
          }, {
            G : "div",
            L : "ytp-ce-expanding-overlay-content",
            N : [{
              G : "div",
              L : "ytp-ce-expanding-overlay-body",
              N : [{
                G : "div",
                L : "ytp-ce-expanding-overlay-body-padding",
                N : [{
                  G : "a",
                  da : ["ytp-ce-channel-title", "ytp-ce-link"],
                  P : {
                    href : options.targetUrl,
                    target : "_blank",
                    tabindex : "-1",
                    dir : _yt_player.dp(data.I, options.title || "")
                  },
                  aa : options.title
                }, options.subscribeButton ? {
                  G : "div",
                  L : "ytp-ce-subscribe-container",
                  N : [{
                    G : "div",
                    L : "ytp-ce-channel-subscribe"
                  }]
                } : "", options.subscribersText ? {
                  G : "div",
                  L : "ytp-ce-channel-subscribers-text",
                  aa : options.subscribersText
                } : "", options.metadata ? {
                  G : "div",
                  da : ["ytp-ce-channel-metadata", "yt-ui-ellipsis", "yt-ui-ellipsis-3"],
                  aa : options.metadata
                } : ""]
              }]
            }]
          }]
        }, {
          G : "div",
          L : "ytp-ce-expanding-image",
          P : indexOf(options)
        }]
      };
      item = new _yt_player.W(item);
      var parent = _yt_player.qd(window.document, "div", "ytp-ce-channel-subscribe", item.element)[0];
      if (options.subscribeButton) {
        _yt_player.S(parent, "ytp-ce-subscribe-button");
        if (_yt_player.Y(data.g).l) {
          /** @type {null} */
          var p = null;
          var itct = options.Rd.itct;
        } else {
          /** @type {string} */
          p = "endscreen";
          /** @type {null} */
          itct = null;
        }
        p = new _yt_player.y_(options.subscribeButton.subscribeText, options.subscribeButton.subscribeCount, options.subscribeButton.unsubscribeText, options.subscribeButton.unsubscribeCount, options.subscribeButton.enabled, options.subscribeButton.classic, options.channelId, !!options.subscribeButton.subscribed, p, itct, options.subscribeButton.signinUrl, data.g);
        parent.appendChild(p.element);
        data.K.push(p);
      }
      break;
    case "WEBSITE":
      item = {
        G : "div",
        da : ["ytp-ce-element", "ytp-ce-website"],
        P : {
          tabindex : "0",
          "aria-label" : options.qn || "",
          "aria-hidden" : "true"
        },
        N : [{
          G : "div",
          L : "ytp-ce-element-shadow"
        }, {
          G : "div",
          L : "ytp-ce-expanding-overlay",
          N : [{
            G : "div",
            L : "ytp-ce-expanding-overlay-hider"
          }, {
            G : "div",
            L : "ytp-ce-expanding-overlay-background"
          }, {
            G : "div",
            L : "ytp-ce-expanding-overlay-content",
            N : [{
              G : "div",
              L : "ytp-ce-expanding-overlay-body",
              N : [{
                G : "div",
                L : "ytp-ce-expanding-overlay-body-padding",
                N : [{
                  G : "div",
                  L : "ytp-ce-website-title",
                  P : {
                    dir : _yt_player.dp(data.I, options.title || "")
                  },
                  aa : options.title
                }, {
                  G : "div",
                  L : "ytp-ce-website-metadata",
                  aa : options.metadata
                }, {
                  G : "a",
                  da : ["ytp-ce-website-goto", "ytp-ce-link"],
                  P : {
                    href : options.targetUrl,
                    target : "_blank",
                    tabindex : "-1"
                  },
                  aa : options.callToAction
                }]
              }]
            }]
          }]
        }, {
          G : "div",
          L : "ytp-ce-expanding-image",
          P : indexOf(options)
        }, {
          G : "div",
          L : "ytp-ce-expanding-icon",
          P : _verifyIntegrity(options.iconUrl)
        }]
      };
      item = new _yt_player.W(item);
  }
  if (options.g) {
    _yt_player.S(item.element, "ytp-ce-placeholder");
  }
  return item;
};
/**
 * @param {Object} collection
 * @return {?}
 */
var indexOf = function(collection) {
  if (collection.By) {
    var url = collection.By.thumbnails
  }
  return _verifyIntegrity(url ? url[url.length - 1].url : null);
};
/**
 * @param {Object} verifyIntegrity
 * @return {?}
 */
var _verifyIntegrity = function(verifyIntegrity) {
  return verifyIntegrity ? {
    style : "background-image: url(" + verifyIntegrity + ")"
  } : {};
};
/**
 * @param {Object} data
 * @param {Object} node
 * @param {?} callback
 * @return {undefined}
 */
var bind = function(data, node, callback) {
  /**
   * @return {undefined}
   */
  function mouseDown() {
    css(1);
  }
  /**
   * @return {undefined}
   */
  function onResize() {
    css(-1);
  }
  node.U("mouseenter", (0, _yt_player.z)(data.Ut, data, node, callback));
  node.U("mouseleave", (0, _yt_player.z)(data.Ru, data, node, callback));
  if (!_yt_player.Y(data.g).l) {
    node.U("click", (0, _yt_player.z)(function(ev) {
      _yt_player.S(ev.element, "ytp-ce-element-hover");
    }, data, node));
  }
  node.U("click", (0, _yt_player.z)(data.HC, data, callback));
  node.U("keypress", (0, _yt_player.z)(data.HC, data, callback));
  node.U("focus", (0, _yt_player.z)(function(until, walkers) {
    this.Ut(until, walkers);
  }, data, node, callback));
  node.U("blur", (0, _yt_player.z)(function(relativeToItem, walkers) {
    this.Ru(relativeToItem, walkers);
  }, data, node, callback));
  node.U("touchstart", (0, _yt_player.z)(data.Ut, data, node, callback));
  var isDefault = _yt_player.J("ytp-ce-expanding-overlay-hider", node.element);
  if (isDefault) {
    node.O(isDefault, "touchstart", function(e) {
      e = e || window.event;
      /** @type {boolean} */
      e.cancelBubble = true;
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      _yt_player.mq(node.element, "ytp-ce-element-hover");
      _yt_player.mq(node.element, "ytp-ce-force-expand");
    });
  }
  node.U("keydown", (0, _yt_player.z)(function(dataAndEvents, e) {
    /** @type {boolean} */
    this.LE = 9 == e.keyCode && !e.shiftKey;
  }, data, node));
  var css = (0, _yt_player.z)(function(ev, obj, dataAndEvents) {
    this.H += dataAndEvents;
    if (0 < this.H) {
      _yt_player.S(ev.element, "ytp-ce-force-expand");
      sendMessage(this, obj.id, true);
    } else {
      _yt_player.mq(ev.element, "ytp-ce-force-expand");
      _yt_player.mq(ev.element, "ytp-ce-element-hover");
      sendMessage(this, obj.id, false);
    }
  }, data, node, callback);
  data = (0, _yt_player.z)(function(editable, win) {
    if (win) {
      editable.U("blur", function() {
        if (_yt_player.Nh(win)) {
          if (this.LE) {
            win.focus();
          }
        }
      });
      editable.O(win, "focus", mouseDown);
      editable.O(win, "blur", onResize);
    }
  }, data, node);
  data(_yt_player.J("ytp-sb-subscribe", node.element));
  data(_yt_player.J("ytp-sb-unsubscribe", node.element));
  node.U("focus", mouseDown);
  node.U("blur", onResize);
};
/**
 * @param {Date} item
 * @param {?} e
 * @param {boolean} recurring
 * @return {undefined}
 */
var sendMessage = function(item, e, recurring) {
  if (item.A) {
    if (recurring) {
      item.D.show();
    } else {
      item.D.hide();
    }
  }
  var i;
  for (i in item.l) {
    if (i != e) {
      _yt_player.U(item.l[i].element, "ytp-ce-element-shadow-show", recurring);
    }
  }
};
/**
 * @param {number} a
 * @param {(Array|string)} obj
 * @param {?} fn
 * @return {undefined}
 */
var set = function(a, obj, fn) {
  /**
   * @return {undefined}
   */
  function set() {
    if (!f) {
      x++;
      if (x == obj.length) {
        fake_onhashchange.stop();
        if (fn) {
          fn();
        }
      }
    }
  }
  if (!obj || runLoggingCallbacks(_yt_player.Y(a.g).playerStyle)) {
    if (fn) {
      fn();
    }
  } else {
    obj = normalize(a, obj);
    /** @type {number} */
    var x = 0;
    /** @type {boolean} */
    var f = false;
    var fake_onhashchange = new _yt_player.Yt(function() {
      /** @type {boolean} */
      f = true;
      if (fn) {
        fn();
      }
    }, 1E3, a);
    fake_onhashchange.start();
    /** @type {number} */
    a = 0;
    for (;a < obj.length;a++) {
      _yt_player.FE(obj[a], set);
    }
  }
};
/**
 * @param {?} elem
 * @param {Element} first
 * @param {?} a
 * @return {undefined}
 */
var swap = function(elem, first, a) {
  set(elem, first.clickUrls, a);
  if (elem = _yt_player.MG()) {
    if (first.Oo) {
      equals(elem, first.visualElement);
    }
  }
};
/**
 * @param {Object} data
 * @param {Array} a
 * @return {?}
 */
var normalize = function(data, a) {
  var value = data.g.getVideoData().clientPlaybackNonce;
  var output = data.g.getCurrentTime().toFixed(2);
  value = {
    CPN : value,
    AD_CPN : value,
    MT : output
  };
  /** @type {Array} */
  output = [];
  /** @type {number} */
  var i = 0;
  for (;i < a.length;i++) {
    output.push(sprintf(a[i], value));
  }
  return output;
};
/**
 * @param {string} fmt
 * @param {?} template
 * @return {?}
 */
var sprintf = function(fmt, template) {
  return fmt.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function(prop) {
    var p = (0, window.unescape)(prop);
    p = p.substring(1, p.length - 1);
    return template[p] ? (0, window.escape)(template[p]) : prop;
  });
};
/**
 * @param {(Array|number)} values
 * @return {?}
 */
var format = function(values) {
  return _yt_player.Aa(values) && values.length ? values[0] : values;
};
/**
 * @param {string} str
 * @return {?}
 */
var URI = function(str) {
  /** @type {RegExp} */
  var typePattern = /.+/;
  return _yt_player.u(str) && (null != typePattern && (null != str && str.match(typePattern))) ? str : "";
};
/**
 * @param {?} url
 * @param {string} error
 * @return {?}
 */
var onError = function(url, error) {
  if (null == url) {
    return error;
  }
  var result = (0, window.parseInt)(url, 0);
  if ((0, window.isNaN)(result)) {
    return error;
  }
  result = result.toString(16);
  return "#" + "000000".substring(0, 6 - result.length) + result;
};
/**
 * @param {number} s
 * @return {?}
 */
var success = function(s) {
  return _yt_player.u(s) ? s : "";
};
/**
 * @param {?} str
 * @param {?} x
 * @param {string} name
 * @return {?}
 */
var type = function(str, x, name) {
  var i;
  for (i in x) {
    if (x[i] == str) {
      return str;
    }
  }
  return name;
};
/**
 * @param {string} str
 * @param {boolean} recurring
 * @return {?}
 */
var exec = function(str, recurring) {
  return "true" == str || "false" == str ? "true" == str : recurring;
};
/**
 * @param {?} x
 * @param {number} recurring
 * @return {?}
 */
var abs = function(x, recurring) {
  return _yt_player.u(x) ? (0, window.parseFloat)(x) : recurring;
};
/**
 * @param {number} v
 * @param {number} recurring
 * @param {number} expectedNumberOfNonCommentArgs
 * @param {boolean} v33
 * @param {number} outstandingDataSize
 * @return {?}
 */
var pn = function(v, recurring, expectedNumberOfNonCommentArgs, v33, outstandingDataSize) {
  v = (0, window.parseFloat)(v);
  if (null != v && !(0, window.isNaN)(v)) {
    if (v33) {
      return _yt_player.dd(v, recurring, expectedNumberOfNonCommentArgs);
    }
    if (v >= recurring && v <= expectedNumberOfNonCommentArgs) {
      return v;
    }
  }
  return outstandingDataSize;
};
/**
 * @param {string} gesture
 * @return {?}
 */
var trigger = function(gesture) {
  if (null == gesture) {
    return 0;
  }
  if ("never" == gesture) {
    return-1;
  }
  gesture = gesture.split(":");
  if (3 < gesture.length) {
    return 0;
  }
  /** @type {number} */
  var base = 0;
  /** @type {number} */
  var d = 1;
  (0, _yt_player.B)(gesture, function(code) {
    code = (0, window.parseFloat)(code);
    if (0 > code) {
      /** @type {number} */
      d = -d;
    }
    /** @type {number} */
    base = 60 * base + Math.abs(code);
  });
  return d * base;
};
/**
 * @param {?} arg
 * @param {Function} callback
 * @return {?}
 */
var quote = function(arg, callback) {
  if (null == arg) {
    return null;
  }
  if (_yt_player.Ba(arg)) {
    /** @type {Array} */
    var quoted = [];
    (0, _yt_player.B)(arg, function(basis) {
      if (basis = callback(basis)) {
        quoted.push(basis);
      }
    });
    return quoted;
  }
  var type = callback(arg);
  return type ? [type] : [];
};
/**
 * @param {?} obj
 * @return {?}
 */
var getValue = function(obj) {
  /**
   * @param {?} value
   * @return {?}
   */
  function val(value) {
    return null != value && !(0, window.isNaN)(value);
  }
  return(obj = obj ? new _yt_player.Zg((0, window.parseFloat)(obj.top), (0, window.parseFloat)(obj.right), (0, window.parseFloat)(obj.bottom), (0, window.parseFloat)(obj.left)) : null) && (val(obj.top) && (val(obj.right) && (val(obj.bottom) && val(obj.left)))) ? obj : null;
};
/**
 * @param {string} val
 * @return {?}
 */
var use = function(val) {
  /**
   * @param {string} arg
   * @return {?}
   */
  function fn(arg) {
    return(0, _yt_player.Ld)(arg.split(/ +/), function(val) {
      return "" != val;
    });
  }
  return null == val ? [] : fn(val);
};
/**
 * @param {string} newValue
 * @param {string} el
 * @param {(Element|Function|string)} data
 * @param {?} event_data
 * @return {undefined}
 */
var listener = function(newValue, el, data, event_data) {
  /** @type {string} */
  this.value = newValue;
  /** @type {string} */
  this.target = el;
  /** @type {(Element|Function|string)} */
  this.showLinkIcon = data;
  this.g = event_data;
};
/**
 * @param {?} opt_attributes
 * @return {?}
 */
var call = function(opt_attributes) {
  if (!opt_attributes) {
    return null;
  }
  var onComplete = _yt_player.Mc(success(opt_attributes.value));
  onComplete = _yt_player.Jc(onComplete);
  if (!onComplete) {
    return null;
  }
  var t = type(opt_attributes.target, timeout, "current");
  return null == t ? null : new listener(onComplete, t, exec(opt_attributes.show_link_icon, true), null != opt_attributes.pause_on_navigation ? opt_attributes.pause_on_navigation : true);
};
/**
 * @param {Object} value
 * @return {?}
 */
var parseFloat = function(value) {
  return value.value ? value.value : null;
};
/**
 * @param {?} src
 * @param {string} callback
 * @param {string} url
 * @return {undefined}
 */
var getScript = function(src, callback, url) {
  this.type = src;
  /** @type {string} */
  this.trigger = callback;
  /** @type {string} */
  this.url = url;
};
/**
 * @param {Object} elem
 * @return {?}
 */
var inArray = function(elem) {
  if (!elem) {
    return null;
  }
  var filter = type(elem.type, u2);
  var i = type(elem.trigger, array);
  var f = format(elem.url);
  f = call(f ? f : null);
  format(elem.subscribeData);
  return filter ? new getScript(filter, i, f) : null;
};
/**
 * @param {Object} target
 * @param {number} pos
 * @param {boolean} x
 * @return {?}
 */
var build = function(target, pos, x) {
  /** @type {number} */
  var source = (x = "xx" == x || "xy" == x) ? 640 : 360;
  return(source + ((x ? target.width : target.height) - source) * pos) / source;
};
/**
 * @param {Object} right
 * @param {number} pos
 * @param {boolean} y
 * @return {?}
 */
var merge = function(right, pos, y) {
  /** @type {number} */
  var source = (y = "xy" == y || "yy" == y) ? 360 : 640;
  return(source + ((y ? right.height : right.width) - source) * pos) / source;
};
/**
 * @param {number} x
 * @param {?} y
 * @param {?} vec
 * @param {?} o
 * @param {?} t
 * @param {?} b
 * @param {?} obj
 * @param {?} n
 * @param {?} quat
 * @param {?} key
 * @param {?} vector1
 * @return {undefined}
 */
var length = function(x, y, vec, o, t, b, obj, n, quat, key, vector1) {
  /** @type {number} */
  this.x = x;
  this.y = y;
  this.Qk = vec;
  this.o = o;
  this.t = t;
  this.B = b;
  this.C = obj;
  this.D = n;
  this.A = quat;
  this.l = key;
  this.g = vector1;
};
/**
 * @param {Object} data
 * @param {Function} eventType
 * @return {?}
 */
var fire = function(data, eventType) {
  if (!data) {
    return null;
  }
  var d3 = abs(data.x, 0);
  var dataLength = abs(data.y, 0);
  var xoffset = abs(data.w, 0);
  var yoffset = abs(data.h, 0);
  var r20 = trigger(data.t);
  var velocityY = abs(data.d, 0);
  var velocityX = abs(data.px, 0);
  var restoreScript = abs(data.py, 0);
  var dy = abs(data.scaleSlope, 1);
  var pos1 = abs(data.scaleSlopeX, dy);
  dy = abs(data.scaleSlopeY, dy);
  var expectedType = type(data.scaleDimension, ll, "xy");
  return eventType(d3, dataLength, xoffset, yoffset, r20, velocityY, velocityX, restoreScript, pos1, dy, expectedType);
};
/**
 * @param {number} node
 * @param {Node} obj
 * @return {?}
 */
var clear = function(node, obj) {
  var child = map(obj, action(node, new _yt_player.bh(node.x, node.y, node.Qk, node.o), obj.g));
  var options = obj.g;
  var result = child.clone();
  if (options) {
    if (!options.contains(child)) {
      if (child.width < options.width) {
        result.left = _yt_player.dd(child.left, options.left, options.left + options.width - child.width);
      } else {
        result.left = options.left;
        result.width = options.width;
      }
      if (child.height < options.height) {
        result.top = _yt_player.dd(child.top, options.top, options.top + options.height - child.height);
      } else {
        result.top = options.top;
        result.height = options.height;
      }
    }
  }
  return result;
};
/**
 * @param {number} o
 * @param {?} i
 * @param {Object} value
 * @return {?}
 */
var action = function(o, i, value) {
  var start = o.C;
  var height = o.D;
  var opts = o.g ? o.g : "xy";
  var result = build(value, o.A, opts);
  o = merge(value, o.l, opts);
  /** @type {number} */
  opts = 640 * i.width * result / 100;
  /** @type {number} */
  var baseline = 360 * i.height * o / 100;
  return new _yt_player.bh(0 == start ? 640 * i.left * result / 100 : 0 < start ? start : value.width + start - opts, 0 == height ? 360 * i.top * o / 100 : 0 < height ? height : value.height + height - baseline, opts, baseline);
};
/**
 * @param {string} args
 * @return {?}
 */
var args = function(args) {
  return args ? fire(args, function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, matcherFunction, execResult, opt_keys, positionError, oFunctionBody) {
    return new length(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, matcherFunction, execResult, opt_keys, positionError, oFunctionBody);
  }) : null;
};
/**
 * @param {?} g
 * @param {(number|string)} b
 * @return {undefined}
 */
var getColorIndex = function(g, b) {
  this.g = g;
  this.l = b || null;
};
/**
 * @param {Node} item
 * @param {?} prop
 * @return {?}
 */
var map = function(item, prop) {
  var offset = item.l ? clear(item.l, new getColorIndex(item.g)) : item.g;
  var m = prop.clone();
  var left = offset.left;
  offset = offset.top;
  if (left instanceof _yt_player.hd) {
    m.left += left.x;
    m.top += left.y;
  } else {
    m.left += left;
    if (_yt_player.ua(offset)) {
      m.top += offset;
    }
  }
  return m;
};
/**
 * @param {?} err
 * @param {?} ref
 * @param {?} capture
 * @param {?} error
 * @param {?} e
 * @param {?} obj
 * @param {?} dataAndEvents
 * @param {?} stderr
 * @param {?} value
 * @param {?} done
 * @param {?} opt_domHelper
 * @param {?} res
 * @param {?} code
 * @return {undefined}
 */
var isError = function(err, ref, capture, error, e, obj, dataAndEvents, stderr, value, done, opt_domHelper, res, code) {
  length.call(this, err, ref, capture, error, e, stderr, value, done, opt_domHelper, res, code);
  this.F = obj;
  this.H = dataAndEvents;
};
/**
 * @param {Object} memory
 * @return {?}
 */
var onTouchMove = function(memory) {
  if (!memory) {
    return null;
  }
  var dy = abs(memory.sx, 0);
  var diffj = abs(memory.sy, 0);
  return fire(memory, function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, matcherFunction, execResult, opt_keys, positionError, oFunctionBody) {
    return new isError(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, dy, diffj, opt_attributes, matcherFunction, execResult, opt_keys, positionError, oFunctionBody);
  });
};
/**
 * @param {?} l
 * @param {number} modifiedEventId
 * @param {?} inColor
 * @param {(number|string)} dataAndEvents
 * @param {?} g
 * @param {?} segs
 * @param {?} o
 * @param {string} textAlign
 * @param {number} textSize
 * @param {?} deepDataAndEvents
 * @param {?} padding
 * @param {?} ignoreMethodDoesntExist
 * @param {Object} textAlt
 * @param {?} b
 * @return {undefined}
 */
var renderDaySegs = function(l, modifiedEventId, inColor, dataAndEvents, g, segs, o, textAlign, textSize, deepDataAndEvents, padding, ignoreMethodDoesntExist, textAlt, b) {
  this.l = l;
  /** @type {number} */
  this.bgColor = modifiedEventId;
  this.borderColor = inColor;
  /** @type {(number|string)} */
  this.borderWidth = dataAndEvents;
  this.g = g;
  this.C = segs;
  this.o = o;
  /** @type {string} */
  this.textAlign = textAlign;
  /** @type {number} */
  this.textSize = textSize;
  this.A = deepDataAndEvents;
  this.padding = padding;
  this.effects = ignoreMethodDoesntExist;
  /** @type {Object} */
  this.cornerRadius = textAlt;
  this.B = b;
};
/**
 * @param {Object} options
 * @return {?}
 */
var compile = function(options) {
  if (!options) {
    return null;
  }
  var b = onError(options.fgColor, "#1A1A1A");
  var light = onError(options.bgColor, "#FFF");
  var d = onError(options.borderColor, "#000");
  var e = pn(options.borderWidth, 0, 5, false, 0);
  var f = pn(options.bgAlpha, 0, 1, false, 0.8);
  var F2F2F2 = onError(options.highlightFontColor, "#F2F2F2");
  var l = pn(options.highlightWidth, 0, 5, false, 3);
  var success1 = success(options.textAlign);
  var n = pn(options.textSize, 3.3, 30.1, true, 3.6107);
  var p = success(options.fontWeight);
  var quality = getValue(options.padding);
  var addColumns = use(options.effects);
  var D = pn(options.cornerRadius, 0, 10, true, 0);
  options = format(options.gradient);
  if (options = options ? options : null) {
    var base = pn(options.x1, 0, 100, true, 0);
    var L = pn(options.y1, 0, 100, true, 0);
    var T = pn(options.x2, 0, 100, true, 100);
    var ha = pn(options.y2, 0, 100, true, 100);
    var rect = onError(options.color1, "#FFF");
    var textRender = onError(options.color2, "#000");
    options = new exports(base, L, T, ha, rect, textRender, pn(options.opacity1, 0, 100, true, 100), pn(options.opacity2, 0, 100, true, 0));
  } else {
    /** @type {null} */
    options = null;
  }
  return new renderDaySegs(b, light, d, e, f, F2F2F2, l, success1, n, p, quality, addColumns, D, options);
};
/**
 * @param {number} chai
 * @param {?} includeAll
 * @param {?} forceAsync
 * @param {?} ctx
 * @param {?} util
 * @param {?} lang
 * @param {?} d
 * @param {?} execAsap
 * @return {undefined}
 */
var exports = function(chai, includeAll, forceAsync, ctx, util, lang, d, execAsap) {
  /** @type {number} */
  this.o = chai;
  this.B = includeAll;
  this.A = forceAsync;
  this.C = ctx;
  this.g = util;
  this.l = lang;
  this.D = d;
  this.F = execAsap;
};
/**
 * @param {?} eventType
 * @param {?} l
 * @param {?} resolveLinks
 * @param {?} o
 * @return {undefined}
 */
var generate = function(eventType, l, resolveLinks, o) {
  this.type = eventType;
  this.l = l;
  this.g = resolveLinks;
  this.o = o;
};
/**
 * @param {Object} value
 * @return {?}
 */
var val = function(value) {
  if (!value) {
    return null;
  }
  var actualType = type(value.type, MSG_CLOSURE_CUSTOM_COLOR_INVALID_INPUT, "rect");
  var params = quote(value.rectRegion, args);
  var keyEscaped = quote(value.anchoredRegion, onTouchMove);
  value = quote(value.shapelessRegion, args);
  return new generate(actualType, params, keyEscaped, value);
};
/**
 * @param {Object} d
 * @return {?}
 */
var l = function(d) {
  return d.l && d.l.length ? d.l[0] : d.g && d.g.length ? d.g[0] : d.o && d.o.length ? d.o[0] : null;
};
/**
 * @param {?} l
 * @param {?} g
 * @return {undefined}
 */
var m = function(l, g) {
  this.l = l;
  this.g = g;
};
/**
 * @param {?} config
 * @param {(Object|string)} chart
 * @return {undefined}
 */
var constructor = function(config, chart) {
  this.state = config;
  /** @type {(Object|string)} */
  this.ref = chart;
};
/**
 * @param {Object} options
 * @return {?}
 */
var index = function(options) {
  if (!options) {
    return null;
  }
  var data = type(options.state, camelKey);
  options = URI(options.ref);
  return data ? new constructor(data, options) : null;
};
/**
 * @param {(number|string)} line
 * @param {(number|string)} o
 * @param {?} _arg
 * @param {?} parentEl
 * @return {undefined}
 */
var Text = function(line, o, _arg, parentEl) {
  this.g = line || [];
  this.o = o || [];
  this.A = _arg;
  this.l = parentEl;
  /** @type {boolean} */
  this.value = false;
};
/**
 * @param {Object} options
 * @return {?}
 */
var restoreScript = function(options) {
  if (!options) {
    return null;
  }
  var a = quote(options.condition, index);
  var b = quote(options.notCondition, index);
  var _y = exec(options.show_delay, false);
  options = exec(options.hide_delay, false);
  return a || b ? new Text(a, b, _y, options) : null;
};
/**
 * @param {Object} args
 * @param {Function} onComplete
 * @param {?} sender
 * @return {undefined}
 */
var execute = function(args, onComplete, sender) {
  (0, _yt_player.B)(args.g, _yt_player.Ga(onComplete, false), sender);
  (0, _yt_player.B)(args.o, _yt_player.Ga(onComplete, true), sender);
};
/**
 * @param {?} msg
 * @param {?} textStatus
 * @param {?} type
 * @param {?} result
 * @param {?} jqXHR
 * @param {?} origError
 * @param {(number|string)} status
 * @param {(number|string)} collection
 * @param {?} throwable
 * @param {?} m
 * @param {?} b
 * @param {?} data
 * @param {?} _xhr
 * @param {?} request
 * @return {undefined}
 */
var error = function(msg, textStatus, type, result, jqXHR, origError, status, collection, throwable, m, b, data, _xhr, request) {
  this.id = msg;
  this.author = textStatus;
  this.type = type;
  this.style = result;
  this.A = jqXHR;
  this.segment = origError;
  this.o = status || [];
  this.D = collection || [];
  this.l = throwable;
  this.C = m;
  this.B = b;
  this.data = data;
  this.g = _xhr;
  this.itct = request;
};
/**
 * @param {Object} options
 * @return {?}
 */
var match = function(options) {
  if (!options) {
    return null;
  }
  var urlParts = URI(options.id);
  var res = URI(options.author);
  var actualType = type(options.type, MSG_UNSAFE_LINK);
  var desc = type(options.style, prop);
  var success1 = success(format(options.TEXT));
  var cellData = success(options.data);
  /** @type {*} */
  cellData = 0 != cellData.length ? JSON.parse(cellData) : {};
  var paramValue = format(options.segment);
  var value = paramValue ? paramValue : null;
  if (value) {
    URI(value.timeRelative);
    paramValue = URI(value.spaceRelative);
    paramValue = (value = quote(value.movingRegion, val)) ? new m(paramValue, value) : null;
  } else {
    /** @type {null} */
    paramValue = null;
  }
  value = quote(options.action, inArray);
  var keyEscaped = quote(options.trigger, restoreScript);
  var fmt = format(options.appearance);
  if (!(fmt = compile(fmt ? fmt : null))) {
    fmt = compile({});
  }
  var suite = type(options.coordinate_system, title, "video_relative");
  var child = exec(options.closeable, true);
  var D = success(options.log_data);
  options = success(options.itct);
  return urlParts && actualType ? new error(urlParts, res, actualType, desc, success1, paramValue, value, keyEscaped, fmt, suite, child, cellData, D, options) : null;
};
/**
 * @param {Function} actual
 * @return {?}
 */
var eq = function(actual) {
  return isNaN(actual, function(e) {
    return "click" == e.trigger;
  });
};
/**
 * @param {Object} obj
 * @param {Function} msg
 * @return {?}
 */
var isNaN = function(obj, msg) {
  return(0, _yt_player.Bj)(obj.o, msg, void 0);
};
/**
 * @param {Object} property
 * @param {Function} requestObj
 * @param {?} dataAndEvents
 * @return {undefined}
 */
var createTest = function(property, requestObj, dataAndEvents) {
  (0, _yt_player.B)(property.o, requestObj, dataAndEvents);
};
/**
 * @param {Object} a
 * @param {Function} funcToCall
 * @return {?}
 */
var array_to_hash = function(a, funcToCall) {
  return _yt_player.Ma(a.o, funcToCall, void 0);
};
/**
 * @param {Object} key
 * @param {Function} $p1
 * @param {(Node|string)} v
 * @return {undefined}
 */
var pred = function(key, $p1, v) {
  (0, _yt_player.B)(key.D, $p1, v);
};
/**
 * @param {Element} obj
 * @param {Function} opt_obj2
 * @return {undefined}
 */
var insertBefore = function(obj, opt_obj2) {
  (0, _yt_player.G)(obj.D, opt_obj2, void 0);
};
/**
 * @param {Function} c
 * @return {?}
 */
var Number = function(c) {
  return(c = color(c)) ? l(c) : null;
};
/**
 * @param {Object} color
 * @return {?}
 */
var color = function(color) {
  if (color.segment) {
    color = color.segment;
    color = color.g.length ? color.g[0] : null;
  } else {
    /** @type {null} */
    color = null;
  }
  return color;
};
/**
 * @param {Function} position
 * @param {Object} args
 * @return {?}
 */
var read = function(position, args) {
  var g = Number(position);
  return g && args ? merge(args, g.l, g.g ? g.g : "xy") : 1;
};
/**
 * @param {string} opt_parent
 * @param {Object} b
 * @param {?} $0
 * @return {undefined}
 */
var Node = function(opt_parent, b, $0) {
  this.g = {};
  /** @type {boolean} */
  this.o = false;
  /** @type {string} */
  this.B = "ivTrigger:" + opt_parent;
  this.l = $0;
  execute(b, function(o, doc) {
    var i = valueOf(doc.state, doc.ref);
    this.l.subscribe(i, (0, _yt_player.z)(this.A, this, i, o));
    this.g[i] = o;
  }, this);
};
/**
 * @param {string} type
 * @param {?} value
 * @return {?}
 */
var valueOf = function(type, value) {
  /** @type {string} */
  var name = "ivTriggerCondition:" + type;
  return value ? name + ":" + value : name;
};
/**
 * @return {undefined}
 */
var block = function() {
  /** @type {boolean} */
  this.g = false;
  /** @type {null} */
  this.B = this.l = null;
};
/**
 * @param {Object} s
 * @param {Object} size
 * @param {number} height
 * @return {?}
 */
var createBox = function(s, size, height) {
  if (s.l) {
    s.l.setSize(size, height);
    s.l.clear();
  } else {
    size = new QUnit(size, height, void 0, void 0, void 0);
    /** @type {Object} */
    s.l = size;
    s.l.zo();
    s.B = _yt_player.K("DIV");
    size = s.l.la();
    s.B.appendChild(size);
  }
  return s.l;
};
/**
 * @param {string} name
 * @param {?} opt_attributes
 * @param {?} attr
 * @return {?}
 */
var SVG = function(name, opt_attributes, attr) {
  var el = window.document.createElementNS("http://www.w3.org/2000/svg", name);
  if (opt_attributes) {
    _yt_player.Lb(opt_attributes, function(idx, attribute) {
      el.setAttribute(attribute, idx);
    });
  }
  /** @type {number} */
  var i = 2;
  for (;i < arguments.length;i++) {
    el.appendChild(arguments[i]);
  }
  return el;
};
/**
 * @param {Element} obj
 * @param {?} p
 * @return {?}
 */
var renderer = function(obj, p) {
  /** @type {string} */
  var pValue = ":" + (_yt_player.Su.getInstance().g++).toString(36);
  p.setAttribute("result", pValue);
  obj.appendChild(p);
  return pValue;
};
/**
 * @param {Element} value
 * @param {?} keepData
 * @return {?}
 */
var scale = function(value, keepData) {
  var isFunction = renderer(value, SVG("feGaussianBlur", {
    "in" : keepData,
    stdDeviation : "1.8"
  }));
  isFunction = renderer(value, SVG("feDiffuseLighting", {
    "in" : isFunction,
    surfaceScale : "4",
    diffuseConstant : "1"
  }, SVG("feDistantLight", {
    azimuth : "270",
    elevation : "15",
    "lighting-color" : "white"
  })));
  isFunction = renderer(value, SVG("feComposite", {
    "in" : isFunction,
    in2 : keepData,
    operator : "in"
  }));
  return renderer(value, SVG("feComposite", {
    in2 : isFunction,
    "in" : keepData,
    operator : "arithmetic",
    k2 : 1,
    k3 : 0.5,
    k4 : 0
  }));
};
/**
 * @param {Element} value
 * @param {?} ast
 * @return {?}
 */
var print = function(value, ast) {
  var val = renderer(value, SVG("feOffset", {
    "in" : ast,
    dx : "-7",
    dy : "-7"
  }));
  val = renderer(value, SVG("feGaussianBlur", {
    "in" : val,
    stdDeviation : "3"
  }));
  val = renderer(value, SVG("feColorMatrix", {
    "in" : val,
    type : "matrix",
    values : "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
  }));
  var isFunction = renderer(value, SVG("feColorMatrix", {
    "in" : ast,
    type : "matrix",
    values : "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"
  }));
  isFunction = renderer(value, SVG("feGaussianBlur", {
    "in" : isFunction,
    stdDeviation : "1"
  }));
  val = renderer(value, SVG("feComposite", {
    operator : "out",
    "in" : val,
    in2 : isFunction
  }));
  return renderer(value, SVG("feComposite", {
    operator : "over",
    "in" : ast,
    in2 : val
  }));
};
/**
 * @param {?} value
 * @param {string} event
 * @return {?}
 */
var filter = function(value, event) {
  return event;
};
/**
 * @param {?} title
 * @return {?}
 */
var open = function(title) {
  var pdataOld = SVG("filter", {
    filterUnits : "userSpaceOnUse"
  });
  /** @type {string} */
  var key = "SourceGraphic";
  (0, _yt_player.B)(title, function(callback) {
    a: {
      switch(callback) {
        case "bevel":
          /** @type {function (Element, ?): ?} */
          callback = scale;
          break a;
        case "dropshadow":
          /** @type {function (Element, ?): ?} */
          callback = print;
          break a;
      }
      /** @type {function (?, string): ?} */
      callback = filter;
    }
    key = callback(pdataOld, key);
  });
  return pdataOld;
};
/**
 * @param {number} array
 * @return {?}
 */
var makeArray = function(array) {
  array = (0, _yt_player.Ld)(array, function(code) {
    return code in frequency;
  });
  _yt_player.ib(array, function(b, a) {
    return frequency[b] - frequency[a];
  });
  return array;
};
/**
 * @param {?} path
 * @return {?}
 */
var getter = function(path) {
  return _yt_player.Ma(path, function(dataAndEvents) {
    return "dropshadow" == dataAndEvents;
  }) ? new _yt_player.Zg(0, 7, 7, 0) : new _yt_player.Zg(0, 0, 0, 0);
};
/**
 * @param {?} obj
 * @param {?} e
 * @param {number} i
 * @return {?}
 */
var move = function(obj, e, i) {
  var self = new options;
  self.moveTo(obj.left + e + i, obj.top + i);
  self.Ec(obj.left + obj.width - e - i, obj.top + i);
  insert(self, e, e, -90);
  self.Ec(obj.left + obj.width - i, obj.top + obj.height - e - i);
  insert(self, e, e, 0);
  self.Ec(obj.left + e + i, obj.top + obj.height - i);
  insert(self, e, e, 90);
  self.Ec(obj.left + i, obj.top + e + i);
  insert(self, e, e, 180);
  self.close();
  return self;
};
/**
 * @param {Object} data
 * @param {Object} value
 * @param {?} json
 * @param {boolean} parser
 * @return {?}
 */
var getItem = function(data, value, json, parser) {
  var item = data.B;
  if (item) {
    data = new t(item.o * value / 100, item.B * json / 100, item.A * value / 100, item.C * json / 100, item.g, item.l, item.D, item.F);
  } else {
    value = data.g;
    data = new failureMessage(data.bgColor, parser ? Math.max(value, 0.9) : value);
  }
  return data;
};
/**
 * @param {?} obj
 * @param {?} node
 * @return {?}
 */
var selector = function(obj, node) {
  var values = _yt_player.ch(obj);
  values.expand(getter(node));
  return inverse(values);
};
/**
 * @param {Node} s
 * @param {(Array|number)} data
 * @param {number} index
 * @return {undefined}
 */
var setup = function(s, data, index) {
  if (index.length && (data = _yt_player.qd(window.document, "g", void 0, data), data.length)) {
    var right = makeArray(index);
    if (right) {
      /** @type {string} */
      index = "effects:" + (right ? right.join("|") : "");
      var sql = index in s.l ? s.l[index] : null;
      if (sql) {
        s = sql;
      } else {
        right = open(right);
        s = 0 < right.childNodes.length ? select(s, index, right) : null;
      }
    } else {
      /** @type {null} */
      s = null;
    }
    if (s) {
      data[0].setAttribute("filter", "url(#" + s + ")");
    }
  }
};
/**
 * @return {undefined}
 */
var wrapper = function() {
  block.call(this);
  /** @type {number} */
  this.A = 0;
};
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
var getPosition = function(a, b) {
  /** @type {number} */
  var r = a.top - b.y;
  /** @type {number} */
  var g = b.x - a.left - a.width;
  /** @type {number} */
  var blue = b.y - a.top - a.height;
  /** @type {number} */
  var abs = a.left - b.x;
  /** @type {number} */
  var max = Math.max(r, g, blue, abs);
  if (0 > max) {
    return "i";
  }
  switch(max) {
    case r:
      return "t";
    case g:
      return "r";
    case blue:
      return "b";
    case abs:
      return "l";
  }
  return "i";
};
/**
 * @param {?} deps
 * @return {undefined}
 */
var def = function(deps) {
  block.apply(this, arguments);
};
/**
 * @param {?} from_instance
 * @return {undefined}
 */
var copy = function(from_instance) {
  block.apply(this, arguments);
};
/**
 * @param {?} failing_message
 * @return {undefined}
 */
var report = function(failing_message) {
  wrapper.apply(this, arguments);
};
/**
 * @param {?} initialState
 * @param {string} debugMode
 * @param {?} round
 * @param {number} sock
 * @param {?} rootModel
 * @return {undefined}
 */
var Game = function(initialState, debugMode, round, sock, rootModel) {
  _yt_player.M.call(this);
  this.g = initialState;
  /** @type {string} */
  this.X = debugMode;
  this.C = round;
  /** @type {number} */
  this.ea = sock;
  this.ca = rootModel;
  /** @type {boolean} */
  this.H = false;
  this.W = new _yt_player.CF(this);
  _yt_player.N(this, this.W);
  /** @type {null} */
  this.M = this.B = this.D = this.K = this.l = null;
  /** @type {boolean} */
  this.Z = false;
  /** @type {null} */
  this.Y = this.I = this.J = null;
  this.wp = new _yt_player.Uk(this.JO, 100, this);
  _yt_player.N(this, this.wp);
  this.F = new _yt_player.Yt(this.Kz, 500, this);
  _yt_player.N(this, this.F);
  /** @type {null} */
  this.T = this.o = this.A = null;
};
/**
 * @param {?} type
 * @param {?} eventMap
 * @return {undefined}
 */
var bindEvents = function(type, eventMap) {
  var bind = (0, _yt_player.z)(function(deepDataAndEvents, iterator, initial) {
    iterator = initial ? addEventListener(this, iterator, (0, _yt_player.z)(initial, this)) : addEventListener(this, iterator);
    this.W.U(eventMap, deepDataAndEvents, iterator);
  }, type);
  bind("mouseover", "E", type.AB);
  bind("mouseout", "D", type.Ih);
  bind("click", "B");
  bind("touchend", "B");
};
/**
 * @param {Node} node
 * @return {undefined}
 */
var listen = function(node) {
  if (node.g.B) {
    if (isNaN(node.g, function(packet) {
      return "close" == packet.type;
    })) {
      var l = node.l
    } else {
      node.A = _yt_player.K("DIV", "annotation-close-button");
      _yt_player.O(node.A, false);
      _yt_player.aF(node.A, "annotation_id", node.g.id);
      node.l.appendChild(node.A);
      l = node.A;
    }
    /**
     * @param {?} ev
     * @return {undefined}
     */
    var listener = function(ev) {
      ev.stopPropagation();
    };
    node.W.U(l, "click", addEventListener(node, "C", listener));
    node.W.U(l, "touchend", addEventListener(node, "C", listener));
  }
};
/**
 * @param {(Node|string)} dataAndEvents
 * @param {string} callback
 * @param {Function} listener
 * @return {?}
 */
var addEventListener = function(dataAndEvents, callback, listener) {
  return(0, _yt_player.z)(function(e) {
    if (this.ca) {
      if (listener) {
        listener(e);
      }
    } else {
      if (e.event.target instanceof window.Element) {
        var current = e.event.target;
        _yt_player.O(current, false);
        try {
          var part = window.document.elementFromPoint(e.event.clientX, e.event.clientY);
          if (_yt_player.$d(part, "annotation")) {
            var mouseEvent = window.document.createEvent("MouseEvent");
            mouseEvent.initMouseEvent(e.event.type, e.event.bubbles, e.event.cancelable, e.event.view, e.event.detail, e.event.screenX, e.event.screenY, e.event.clientX, e.event.clientY, e.event.ctrlKey, e.event.altKey, e.event.shiftKey, e.event.metaKey, e.event.button, e.event.relatedTarget);
            part.dispatchEvent(mouseEvent);
          }
        } finally {
          _yt_player.O(current, true);
        }
      }
    }
    current = _yt_player.Lh(e.target);
    e = new _yt_player.hd(e.clientX, e.clientY);
    if (!("D" == callback && current.contains(e))) {
      this.ea.R(callback, this.g);
    }
  }, dataAndEvents);
};
/**
 * @param {Object} node
 * @return {undefined}
 */
var show = function(node) {
  if (node.l || node.o) {
    var s = Number(node.g);
    if (s) {
      var c = reposition(node);
      if (node.l) {
        s = clear(s, c);
        var options = _yt_player.W_(_yt_player.VU(node.C));
        _yt_player.Jh(node.l, s.width, s.height);
        _yt_player.wh(node.l, s.left, s.top);
        node.K = new _yt_player.bh(options.left + s.left, options.top + s.top, s.width, s.height);
        var g = (g = Number(node.g)) && options ? build(options, g.A, g.g ? g.g : "xy") : 1;
        var o = read(node.g, options);
        options = node.g.l;
        if (options.padding) {
          options = options.padding;
        } else {
          /** @type {number} */
          options = "speech" == node.g.style ? 1.6 : 0.8;
          options = new _yt_player.Zg(options, options, options, options);
        }
        options = new _yt_player.Zg(360 * options.top * o / 100, 640 * options.right * g / 100, 360 * options.bottom * o / 100, 640 * options.left * g / 100);
        if (node.B) {
          options.right += 1.5 * c.g.height / 100;
        }
        /** @type {string} */
        node.l.style.padding = options.top + "px " + options.right + "px " + options.bottom + "px " + options.left + "px";
        if ("label" == node.g.style) {
          if (node.D) {
            /** @type {string} */
            node.D.style.padding = node.l.style.padding;
          }
        }
        options = c.g;
        /** @type {boolean} */
        var value = false;
        /** @type {number} */
        var max = 0;
        /** @type {number} */
        var p = 0;
        var pos = _yt_player.W_(_yt_player.VU(node.C));
        var position = _yt_player.eV(node.C);
        if (_yt_player.dh(pos, position)) {
          /** @type {null} */
          pos = null;
        } else {
          position.top += 20;
          position.height -= 40;
          if ("player_relative" != node.g.C) {
            position.left -= pos.left;
            position.top -= pos.top;
          }
          pos = position;
        }
        if (pos) {
          /** @type {number} */
          max = pos.top - (s.top + s.height);
          /** @type {number} */
          p = s.top - (pos.top + pos.height);
          /** @type {boolean} */
          value = 0 < max || 0 < p;
        }
        if (value && pos) {
          /** @type {number} */
          options = max;
          /** @type {number} */
          g = p;
          if (node.B) {
            o = layout(node, 23, s, options, g);
            if (node.A) {
              /** @type {number} */
              var data = 43 - o.width;
              if (0 < data) {
                if (s.left + o.left - data > pos.left) {
                  o.left -= data;
                }
                o.width += data;
              }
            }
            data = o;
            _yt_player.Jh(node.B, o.width, o.height);
            _yt_player.wh(node.B, o.left, o.top);
          }
          if (node.A) {
            if (data) {
              s = new _yt_player.hd(data.left + data.width - 23 - 18, node.Z ? data.top + 2 : data.top + data.height - 18 - 2);
            } else {
              data = layout(node, 18, s, options, g);
              s = new _yt_player.hd(data.left, data.top);
              _yt_player.Jh(node.A, data.width, data.height);
            }
            _yt_player.wh(node.A, s);
          }
          node.M = new _yt_player.bh(node.K.left + data.left, node.K.top + data.top, data.width, data.height);
          node.J = node.W.U(_yt_player.VU(node.C), "mousemove", node.KO, node);
        } else {
          if (node.B) {
            /** @type {number} */
            data = g / o * options.height * 4.2 / 100;
            data = new _yt_player.I(data, data);
            if ("highlight" == node.g.type || "label" == node.g.style) {
              /** @type {number} */
              g = 1.5 * options.height / 100;
              data = new _yt_player.bh(s.width - data.width - g, s.height - data.height - g, data.width, data.height);
            } else {
              data = new _yt_player.bh(s.width - data.width - 3 * options.height / 100, (s.height - data.height) / 2, data.width, data.height);
            }
            _yt_player.Jh(node.B, data.width, data.height);
            _yt_player.wh(node.B, data.left, data.top);
          }
          if (node.A) {
            /** @type {boolean} */
            data = 9 <= options.left + options.width - (s.left + s.width);
            /** @type {boolean} */
            g = 9 <= s.top - options.top;
            _yt_player.wh(node.A, data && g ? new _yt_player.hd(s.width - 9, -9) : data ? new _yt_player.hd(s.width - 9, 45 < s.height ? 9 : s.height - 9) : g ? new _yt_player.hd(45 < s.width ? s.width - 9 - 18 : -9, -9) : s.width / options.width > s.height / options.height ? new _yt_player.hd(45 < s.width ? s.width - 9 - 18 : -9, s.height - 9) : new _yt_player.hd(-9, 45 < s.height ? 9 : s.height - 9));
          }
        }
      }
      if (node.o) {
        node.o.o(node.g, c);
      }
      if (node.l) {
        c = node.l;
        s = node.g.l;
        c.style.color = "highlightText" == node.g.style ? s.C : s.l;
        data = _yt_player.W_(_yt_player.VU(node.C));
        /** @type {string} */
        c.style.fontSize = 360 * s.textSize * read(node.g, data) / 100 + "px";
        data = node.g.style;
        c.style.textAlign = s.textAlign ? s.textAlign : "title" == data || "highlightText" == data ? "center" : "left";
        if (s.A) {
          c.style.fontWeight = s.A;
        }
        node = node.l;
        c = node.style.overflow;
        data = (s = _yt_player.J("annotation-link-icon", node)) ? _yt_player.Nh(s) : false;
        g = (options = _yt_player.J("annotation-close-button", node)) ? _yt_player.Nh(options) : false;
        if (data) {
          _yt_player.O(s, false);
        }
        if (g) {
          _yt_player.O(options, false);
        }
        /** @type {string} */
        p = o = "";
        if (pos = _yt_player.J("inner-text", node)) {
          o = pos.style.overflow;
          p = pos.style.position;
          /** @type {string} */
          pos.style.overflow = "visible";
          /** @type {string} */
          pos.style.position = "static";
        }
        /** @type {string} */
        node.style.overflow = "scroll";
        if (node.scrollHeight > node.offsetHeight || node.scrollWidth > node.offsetWidth) {
          max = value = load(node);
          /** @type {number} */
          position = 5;
          /** @type {number} */
          var min = Math.floor(value / 2);
          for (;min;) {
            if (node.scrollHeight <= node.offsetHeight && node.scrollWidth <= node.offsetWidth) {
              position = max;
              /** @type {number} */
              max = Math.min(max + min, value);
            } else {
              /** @type {number} */
              max = Math.max(max - min, position);
            }
            /** @type {number} */
            min = Math.floor(min / 2);
            /** @type {string} */
            node.style.fontSize = max + "px";
          }
          if (max != position) {
            if (node.scrollHeight > node.offsetHeight || node.scrollWidth > node.offsetWidth) {
              /** @type {string} */
              node.style.fontSize = position + "px";
            }
          }
        }
        node.style.overflow = c;
        if (pos) {
          pos.style.overflow = o;
          pos.style.position = p;
        }
        if (g) {
          _yt_player.O(options, true);
        }
        if (data) {
          _yt_player.O(s, true);
        }
      }
    }
  }
};
/**
 * @param {Object} pos
 * @param {number} size
 * @param {number} el
 * @param {number} options
 * @param {number} type
 * @return {?}
 */
var layout = function(pos, size, el, options, type) {
  /** @type {boolean} */
  var f = 0 < type;
  size = new _yt_player.bh(0, el.height - size, Math.max(el.width, size), size);
  if (0 < options) {
    size.top = el.height;
    if (20 < options) {
      size.height += options - 20;
    }
    _yt_player.S(pos.l, "annotation-extend-down");
  }
  if (f) {
    /** @type {number} */
    size.top = -size.height;
    if (20 < type) {
      /** @type {number} */
      el = type - 20;
      size.top -= el;
      size.height += el;
    }
    _yt_player.S(pos.l, "annotation-extend-up");
    /** @type {boolean} */
    pos.Z = true;
  }
  return size;
};
/**
 * @param {Object} data
 * @return {?}
 */
var updateGraph = function(data) {
  return "label" != data.g.style || data.o.g;
};
/**
 * @param {Object} o
 * @return {?}
 */
var reposition = function(o) {
  var item = _yt_player.W_(_yt_player.VU(o.C));
  if ("player_relative" == o.g.C) {
    var $cont = _yt_player.VU(o.C).Oa();
    item = new _yt_player.bh(-item.left, -item.top, $cont.width, $cont.height);
  } else {
    item = new _yt_player.bh(0, 0, item.width, item.height);
  }
  return new getColorIndex(item, o.T ? Number(o.T) : null);
};
/**
 * @param {?} b
 * @param {Object} item
 * @return {?}
 */
var scroll = function(b, item) {
  return item ? new _yt_player.bh(b.x + item.left, b.y + item.top, item.width, item.height) : null;
};
/**
 * @param {?} node
 * @param {string} query
 * @param {Object} options
 * @return {undefined}
 */
var Cursor = function(node, query, options) {
  _yt_player.M.call(this);
  this.l = node;
  /** @type {string} */
  this.annotation = query;
  /** @type {Object} */
  this.view = options;
  /** @type {null} */
  this.g = null;
  /** @type {boolean} */
  this.o = this.isVisible = false;
  removeNode(query, node);
};
/**
 * @param {Element} el
 * @param {boolean} name
 * @return {undefined}
 */
var removeNode = function(el, name) {
  insertBefore(el, function(elementName) {
    return new Node(el.id, elementName, name);
  });
};
/**
 * @param {Node} context
 * @return {undefined}
 */
var close = function(context) {
  context.l.unsubscribe("resize", context.zB, context);
  context.l.unsubscribe("onVideoAreaChange", context.mD, context);
};
/**
 * @param {Node} obj
 * @return {undefined}
 */
var max = function(obj) {
  if (obj.g) {
    obj.g.stop();
    /** @type {null} */
    obj.g = null;
  }
};
/**
 * @param {?} tx
 * @param {Object} data
 * @param {?} callback
 * @return {undefined}
 */
var initialize = function(tx, data, callback) {
  Entity.call(this, tx, data, callback);
  this.channelId = data.channel_id;
  this.customMessage = data.custom_message;
  this.profileImageUrl = data.image_url;
  this.title = data.title;
  this.metaInfo = data.meta_info;
  this.url = call({
    pause_on_navigation : data.pause_on_navigation,
    target : data.target || "new",
    value : data.url
  });
};
/**
 * @param {string} id
 * @param {Object} data
 * @param {?} callback
 * @return {undefined}
 */
var process = function(id, data, callback) {
  Entity.call(this, id, data, callback);
  this.imageUrl = data.image_url;
  this.displayDomain = data.display_domain;
  this.showLinkIcon = data.show_link_icon;
  this.A = data.button_icon_url;
  this.title = data.title;
  this.customMessage = data.custom_message;
  this.url = call({
    pause_on_navigation : data.pause_on_navigation,
    target : data.target || "new",
    value : data.url
  });
  /** @type {null} */
  this.g = null;
  if (id = data.signin_url) {
    this.g = call({
      target : "current",
      value : id
    });
  }
  this.J = data.signin_title || null;
  this.I = data.signin_message || null;
};
/**
 * @param {?} item
 * @param {?} data
 * @param {?} capture
 * @return {undefined}
 */
var publish = function(item, data, capture) {
  process.call(this, item, data, capture);
  this.H = data.ypc_flow_type;
  this.B = data.innertube_request_params;
};
/**
 * @param {?} parameters
 * @param {Object} data
 * @param {?} y
 * @return {undefined}
 */
var play = function(parameters, data, y) {
  Entity.call(this, parameters, data, y);
  this.A = data.image_url;
  this.playlistVideoCount = data.playlist_video_count;
  this.customMessage = data.custom_message;
  this.title = data.title;
  this.metaInfo = data.meta_info;
  this.url = call({
    pause_on_navigation : data.pause_on_navigation,
    target : data.target || "new",
    value : data.url
  });
};
/**
 * @param {(Function|string)} req
 * @param {Object} details
 * @param {?} params
 * @return {undefined}
 */
var done = function(req, details, params) {
  Entity.call(this, req, details, params);
  this.B = this.id.replace(/[^a-z0-9-]/gi, "-");
  this.title = details.title;
  this.choices = details.choices;
  this.g = details.hasOwnProperty("old_vote") ? details.old_vote : null;
  /** @type {null} */
  this.A = null;
  if (req = details.signin_url) {
    this.A = call({
      target : "current",
      value : req
    });
  }
  this.H = details.hasOwnProperty("xsrf_token") ? details.xsrf_token : null;
};
/**
 * @param {Object} a
 * @param {?} i
 * @param {?} obj
 * @return {undefined}
 */
var last = function(a, i, obj) {
  process.call(this, a, i, obj);
  /** @type {Array} */
  this.offers = [];
  a = i.offers || [];
  /** @type {number} */
  i = 0;
  for (;i < a.length;i++) {
    this.offers.push(new Property(a[i]));
  }
};
/**
 * @param {?} params
 * @return {undefined}
 */
var Property = function(params) {
  this.merchant = _yt_player.E(params.merchant);
  this.price = _yt_player.E(params.price);
};
/**
 * @param {?} error
 * @param {?} data
 * @param {?} spec
 * @return {undefined}
 */
var all = function(error, data, spec) {
  process.call(this, error, data, spec);
  this.K = data.ypc_item_type;
  this.H = data.ypc_item_id;
  this.B = data.ypc_flow_type;
};
/**
 * @param {?} tx
 * @param {Object} data
 * @param {?} callback
 * @return {undefined}
 */
var onSuccess = function(tx, data, callback) {
  Entity.call(this, tx, data, callback);
  this.A = data.image_url;
  this.videoDuration = data.video_duration || null;
  this.customMessage = data.custom_message;
  this.title = data.title;
  this.metaInfo = data.meta_info;
  /** @type {boolean} */
  this.isLiveNow = !!data.is_live_now;
  this.url = call({
    pause_on_navigation : data.pause_on_navigation,
    target : data.target || "new",
    value : data.url
  });
};
/**
 * @param {?} id
 * @param {Object} data
 * @param {?} params
 * @return {undefined}
 */
var handle = function(id, data, params) {
  Entity.call(this, id, data, params);
  this.H = data.image_url;
  this.A = data.badge_symbol || "";
  this.priceText = data.price_text || "";
  this.title = data.title;
  this.metaInfo = data.meta_info;
  /** @type {boolean} */
  this.B = !!data.is_paygated;
  /** @type {boolean} */
  this.I = !!data.user_has_entitlement;
  this.url = call({
    target : data.target || "new",
    value : data.url
  });
};
/**
 * @param {?} g
 * @return {undefined}
 */
var rgb2hsv = function(g) {
  this.g = g;
  this.l = {};
};
/**
 * @param {Node} value
 * @return {undefined}
 */
var isUndefinedOrNull = function(value) {
  var millis = {};
  millis = (millis["iv-event"] = 1, millis);
  _yt_player.bV(value.g, "iv", millis, void 0);
};
/**
 * @param {?} data
 * @param {?} index
 * @param {Object} selector
 * @param {boolean} element
 * @return {undefined}
 */
var transition = function(data, index, selector, element) {
  if (index) {
    var value = iterate(data, index);
    data.l[index] = value["p-time"];
    /** @type {number} */
    value["iv-event"] = value.link || (value["l-class"] || value["link-id"]) ? 2 : 7;
    index = remove(data, "cta_annotation_shown", value, selector);
    keys(data, value, sortedIndex(index, element));
  }
};
/**
 * @param {?} key
 * @param {Object} i
 * @param {?} result
 * @param {?} opt_attributes
 * @param {?} deepDataAndEvents
 * @param {number} replacementHash
 * @return {undefined}
 */
var cb = function(key, i, result, opt_attributes, deepDataAndEvents, replacementHash) {
  if (i) {
    var value = iterate(key, i);
    /** @type {number} */
    value["iv-event"] = 3;
    value["i-time"] = key.l[i] || "";
    if (opt_attributes) {
      _yt_player.fc(value, opt_attributes);
    }
    i = remove(key, "cta_annotation_clicked", value, deepDataAndEvents);
    keys(key, value, i, result, replacementHash);
  }
};
/**
 * @param {?} key
 * @param {?} i
 * @return {undefined}
 */
var e = function(key, i) {
  if (i) {
    var value = iterate(key, i);
    /** @type {number} */
    value["iv-event"] = 4;
    value["i-time"] = key.l[i] || "";
    var camelKey = remove(key, "cta_annotation_closed", value);
    keys(key, value, camelKey);
  }
};
/**
 * @param {?} array
 * @param {boolean} iterator
 * @return {?}
 */
var sortedIndex = function(array, iterator) {
  return iterator ? (0, _yt_player.G)(array, _yt_player.Ga(function(funcToCall, onComplete) {
    return _yt_player.Um(onComplete, funcToCall);
  }, iterator)) : array;
};
/**
 * @param {Object} o
 * @param {string} s
 * @param {Object} value
 * @param {Array} sel
 * @return {?}
 */
var remove = function(o, s, value, sel) {
  sel = sel ? _yt_player.Ya(sel) : [];
  if (30 == value["a-type"]) {
    a: {
      value = value["a-id"];
      o = o.g.getVideoData();
      if (o.Ax) {
        if ((s = o.Ax[s]) && _yt_player.hH(s)) {
          o = _yt_player.pb("[ANNOTATION_ID]");
          if (0 <= s.indexOf("[ANNOTATION_ID]")) {
            s = s.replace("[ANNOTATION_ID]", value);
          } else {
            if (0 <= s.indexOf(o)) {
              s = s.replace(o, value);
            }
          }
          break a;
        }
      } else {
        if (o.Lp) {
          s = _yt_player.fE(o.Lp, {
            label : s,
            value : "a_id=" + value
          });
          break a;
        }
      }
      /** @type {string} */
      s = "";
    }
    if (s) {
      sel.push(s);
    }
  }
  return sel;
};
/**
 * @param {?} obj
 * @param {?} object
 * @param {Array} key
 * @param {?} success
 * @param {number} $keys
 * @return {undefined}
 */
var keys = function(obj, object, key, success, $keys) {
  /** @type {number} */
  var f = 1;
  /** @type {number} */
  var r20 = -1;
  if (success) {
    /** @type {boolean} */
    var l = false;
    /**
     * @return {undefined}
     */
    var done = function() {
      f--;
      if (!f) {
        if (!l) {
          (0, window.clearTimeout)(r20);
          /** @type {boolean} */
          l = true;
          success();
        }
      }
    };
    r20 = (0, window.setTimeout)(function() {
      /** @type {boolean} */
      l = true;
      success();
    }, 1E3);
  }
  (0, _yt_player.B)(key || [], function(onComplete) {
    f++;
    _yt_player.FE(onComplete, done);
  });
  if ($keys) {
    f++;
    if (0 != $keys) {
      obj.g.Ni($keys, done);
    }
  }
  _yt_player.bV(obj.g, "iv", object, done);
};
/**
 * @param {?} obj
 * @param {?} key
 * @return {?}
 */
var iterate = function(obj, key) {
  var value = {};
  if (key) {
    var node = new _yt_player.Cm(key);
    (0, _yt_player.B)(node.Bb(), function(property) {
      value[property] = (0, window.escape)(node.get(property, ""));
    });
  }
  value["p-time"] = obj.g.getCurrentTime().toFixed(2);
  value.ps = _yt_player.Y(obj.g).playerStyle;
  return value;
};
/**
 * @param {?} obj
 * @param {?} e
 * @param {number} opt_attributes
 * @param {?} fn
 * @param {(Error|string)} a
 * @return {undefined}
 */
var before = function(obj, e, opt_attributes, fn, a) {
  a = iterate(obj, a);
  /** @type {number} */
  a["iv-event"] = opt_attributes;
  if (e) {
    a.ei = e;
  }
  if (!a["a-id"]) {
    /** @type {string} */
    a["a-id"] = "card:drawer";
  }
  /** @type {number} */
  a["a-type"] = 51;
  keys(obj, a, fn);
};
/**
 * @param {?} obj
 * @param {number} opt_attributes
 * @param {(Error|string)} n
 * @param {?} scope
 * @return {undefined}
 */
var forEach = function(obj, opt_attributes, n, scope) {
  if (n) {
    n = iterate(obj, n);
    /** @type {number} */
    n["iv-event"] = opt_attributes;
    keys(obj, n, scope);
  }
};
/**
 * @param {?} g
 * @param {?} a
 * @param {?} b
 * @param {?} blue
 * @param {?} logger
 * @param {?} l
 * @param {?} o
 * @return {undefined}
 */
var Color = function(g, a, b, blue, logger, l, o) {
  this.g = g;
  this.A = a;
  this.B = b;
  this.videoData = blue;
  this.logger = logger;
  this.l = l;
  this.o = o;
};
/**
 * @param {?} g
 * @param {?} m44
 * @param {?} b
 * @return {undefined}
 */
var Matrix = function(g, m44, b) {
  this.g = g;
  this.A = m44;
  this.B = b;
  this.l = new _yt_player.cp(null);
};
/**
 * @param {string} event
 * @param {Object} o
 * @return {?}
 */
var fn = function(event, o) {
  /** @type {Array} */
  var N = [];
  (0, _yt_player.B)(o.choices, function(e) {
    N.push({
      G : "li",
      L : o.B + "-" + e.index.toString(),
      N : [{
        G : "label",
        N : [{
          G : "input",
          L : "iv-card-poll-choice-input",
          P : {
            type : "checkbox",
            role : "radio",
            name : o.B + e.index.toString(),
            value : e.index.toString(),
            "data-poll-choice-index" : e.index.toString()
          }
        }, {
          G : "span",
          L : "iv-card-poll-choice-text",
          N : [{
            G : "span",
            L : "iv-card-poll-choice-percent"
          }, log(this, "span", void 0, e.desc)]
        }]
      }, {
        G : "div",
        L : "iv-card-poll-result",
        N : [{
          G : "div",
          L : "iv-card-poll-result-bar"
        }]
      }]
    });
  }, event);
  var QUnit = {
    G : "ul",
    P : {
      role : "radiogroup"
    },
    N : N
  };
  var expectationResult = {};
  if (o.A) {
    expectationResult["aria-label"] = _yt_player.O0("$POLL_TITLE - Sign in to vote.", {
      POLL_TITLE : o.title
    });
  }
  /** @type {Array} */
  var out = ["iv-card", "iv-card-poll"];
  /** @type {Array} */
  QUnit = [{
    G : "div",
    L : "iv-card-content",
    N : [log(event, "h2", expectationResult, o.title), {
      G : "form",
      N : [{
        G : "fieldset",
        N : [QUnit]
      }]
    }]
  }];
  if (o.A) {
    out.push("iv-card-unavailable");
    QUnit.push({
      G : "div",
      da : ["iv-card-sign-in"],
      N : [{
        G : "h2",
        aa : "Want to vote?"
      }, {
        G : "a",
        da : ["iv-card-sign-in-button", "iv-button"],
        P : {
          href : parseFloat(o.A)
        },
        N : [{
          G : "span",
          da : ["iv-button-content"],
          aa : current.cI
        }]
      }]
    });
  }
  out = new _yt_player.W({
    G : "div",
    da : out,
    N : QUnit
  });
  QUnit = out.element;
  onComplete(o, QUnit);
  join(event.g.g, QUnit, _yt_player.Ga(event.D, o), event);
  (0, _yt_player.B)(_yt_player.rd("iv-card-poll-choice-input", QUnit), function(deepDataAndEvents) {
    this.g.g.U(deepDataAndEvents, "focus", _yt_player.Ga(this.o, true));
    this.g.g.U(deepDataAndEvents, "blur", _yt_player.Ga(this.o, false));
  }, event);
  if (o.A) {
    QUnit = _yt_player.J("iv-card-sign-in-button", QUnit);
    event.A(QUnit, o.A, o.id, o.Rd, o.o, o.l.click, 5);
  }
  return out;
};
/**
 * @param {Node} settings
 * @param {Object} options
 * @param {?} parts
 * @param {?} aValue
 * @return {?}
 */
var parse = function(settings, options, parts, aValue) {
  /** @type {(string|{G: string, L: string, aa: ??})} */
  var desc = options.displayDomain ? {
    G : "div",
    L : "iv-card-image-text",
    aa : options.displayDomain
  } : "";
  var o = createNode(settings, options);
  /** @type {Array} */
  var oldconfig = ["iv-card"];
  if (options.g) {
    oldconfig.push("iv-card-unavailable");
  }
  /** @type {Array} */
  desc = [{
    G : "a",
    L : "iv-click-target",
    P : {
      href : parseFloat(options.url)
    },
    N : [debug(options.imageUrl, desc), {
      G : "div",
      L : "iv-card-content",
      N : [log(settings, "h2", void 0, options.title), o]
    }]
  }];
  if (options.g) {
    desc.push({
      G : "div",
      da : ["iv-card-sign-in"],
      N : [log(settings, "h2", void 0, options.J || ""), {
        G : "p",
        aa : options.I
      }, {
        G : "a",
        da : ["iv-card-sign-in-button", "iv-button"],
        P : {
          href : parseFloat(options.g)
        },
        N : [log(settings, "span", "iv-button-content", current.cI)]
      }]
    });
  }
  oldconfig = new _yt_player.W({
    G : "div",
    da : oldconfig,
    N : desc
  });
  extend(settings, oldconfig, options, parts, aValue);
  return oldconfig;
};
/**
 * @param {Node} tag
 * @param {Object} obj
 * @param {Object} item
 * @return {?}
 */
var clean = function(tag, obj, item) {
  /** @type {Array} */
  var delimiters = ["yt-badge", "standalone-ypc-badge-renderer-icon", obj.I ? "standalone-ypc-badge-renderer-icon-purchased" : "standalone-ypc-badge-renderer-icon-available"];
  var P = {};
  /** @type {(string|{G: string, P: {}, aa: ??, da: Array})} */
  delimiters = obj.B && obj.A ? {
    G : "span",
    da : delimiters,
    P : P,
    aa : obj.A
  } : "";
  item = {
    G : "div",
    da : ["iv-card", item],
    N : [{
      G : "a",
      L : "iv-click-target",
      P : {
        href : parseFloat(obj.url)
      },
      N : [debug(obj.H, delimiters ? {
        G : "div",
        L : "iv-card-image-text",
        N : [delimiters, obj.priceText]
      } : ""), {
        G : "div",
        L : "iv-card-content",
        N : [{
          G : "h2",
          L : "iv-card-primary-link",
          aa : obj.title
        }, get(tag, obj)]
      }]
    }]
  };
  item = new _yt_player.W(item);
  extend(tag, item, obj);
  return item;
};
/**
 * @param {Node} settings
 * @param {Object} e
 * @return {?}
 */
var populate = function(settings, e) {
  return e.customMessage ? log(settings, "div", "iv-card-message", e.customMessage) : "";
};
/**
 * @param {?} object
 * @param {?} text
 * @return {?}
 */
var debug = function(object, text) {
  /** @type {string} */
  var gstyle = "background-image: url(" + object + ");";
  /** @type {Array} */
  var block = [];
  if (text) {
    block.push(text);
  }
  return{
    G : "div",
    L : "iv-card-image",
    P : {
      style : gstyle
    },
    N : block
  };
};
/**
 * @param {(Node|string)} options
 * @param {Object} obj
 * @return {?}
 */
var get = function(options, obj) {
  if (!obj.metaInfo || 0 == obj.metaInfo.length) {
    return "";
  }
  /** @type {Array} */
  var deltaPath = [];
  (0, _yt_player.B)(obj.metaInfo, function(initial) {
    deltaPath.push(log(this, "li", "", initial));
  }, options);
  return{
    G : "ul",
    L : "iv-card-meta-info",
    N : deltaPath
  };
};
/**
 * @param {Node} b
 * @param {string} el
 * @param {Object} result
 * @param {?} obj
 * @return {?}
 */
var log = function(b, el, result, obj) {
  if (result) {
    if (_yt_player.u(result)) {
      result = {
        "class" : result
      };
    } else {
      if (_yt_player.Aa(result)) {
        result = {
          "class" : result.join(" ")
        };
      }
    }
  } else {
    result = {};
  }
  result.dir = _yt_player.dp(b.l, obj);
  return{
    G : el,
    P : result,
    aa : obj
  };
};
/**
 * @param {Node} settings
 * @param {Object} obj
 * @return {?}
 */
var createNode = function(settings, obj) {
  if (!obj.customMessage) {
    return "";
  }
  /** @type {Array} */
  var eventPath = ["iv-card-action", "iv-card-primary-link"];
  var html = {};
  if (obj.A) {
    eventPath.push("iv-card-action-icon");
    /** @type {string} */
    html.style = "background-image: url(" + obj.A + ");";
  }
  html.dir = _yt_player.dp(settings.l, obj.customMessage);
  /** @type {Array} */
  var oSpace = [{
    G : "span",
    aa : obj.customMessage
  }];
  if (obj.showLinkIcon) {
    oSpace.push("\u00a0");
    oSpace.push({
      G : "span",
      L : "iv-card-link-icon"
    });
  }
  return{
    G : "div",
    da : eventPath,
    P : html,
    N : oSpace
  };
};
/**
 * @param {Object} data
 * @param {?} b
 * @return {undefined}
 */
var onComplete = function(data, b) {
  /** @type {number} */
  var count = 0;
  (0, _yt_player.B)(data.choices, function(d) {
    count += d.count;
  });
  count = count || 1;
  /** @type {number} */
  var i = 0;
  for (;i < data.choices.length;i++) {
    var a = data.choices[i];
    var d = _yt_player.J(data.B + "-" + a.index.toString(), b);
    /** @type {number} */
    a = a.count / count;
    if (null == data.g) {
      /** @type {number} */
      a = 0;
    }
    _yt_player.U(d.getElementsByTagName("label")[0], "iv-card-poll-choice-checked", data.g == i);
    /** @type {boolean} */
    d.getElementsByTagName("input")[0].checked = data.g == i;
    /** @type {string} */
    var PERCENT = Math.floor(100 * a).toFixed(0);
    var m = _yt_player.J("iv-card-poll-choice-percent", d);
    _yt_player.Sd(m, _yt_player.O0("$PERCENT%", {
      PERCENT : PERCENT
    }));
    d = _yt_player.J("iv-card-poll-result-bar", d);
    _yt_player.ph(d, "transform", "scaleX(" + a.toFixed(2) + ")");
  }
  _yt_player.U(b, "iv-card-poll-voted", null != data.g);
  _yt_player.U(b, "iv-card-poll-expanded", null != data.g && 1 < data.choices.length);
};
/**
 * @param {Object} model
 * @param {Object} result
 * @param {boolean} recurring
 * @param {(Error|string)} a
 * @return {undefined}
 */
var comparator = function(model, result, recurring, a) {
  if (a) {
    if (!(recurring && model.g.videoData.za)) {
      model.g.l.hd();
    }
    if (model.g.l.isFullscreen()) {
      _yt_player.YU(model.g.l);
    }
    cb(model.g.logger, result.o, a, void 0, result.l.click, 5);
  } else {
    if (result.url) {
      model.B(result.url, result.id, result.Rd, result.o, result.l.click || [], 5);
    }
  }
};
/**
 * @param {(Node|string)} props
 * @param {Object} b
 * @param {Object} d
 * @param {?} xs
 * @param {?} a
 * @return {undefined}
 */
var extend = function(props, b, d, xs, a) {
  if (d.g) {
    setProperties(props, _yt_player.rd("iv-card-sign-in-button", b.element), d, d.g, a);
  }
  if (d.url) {
    setProperties(props, _yt_player.rd("iv-click-target", b.element), d, d.url, xs);
  }
};
/**
 * @param {(RegExp|string)} props
 * @param {?} into
 * @param {Object} c
 * @param {?} properties
 * @param {?} hash
 * @return {undefined}
 */
var setProperties = function(props, into, c, properties, hash) {
  (0, _yt_player.B)(into, function(exports) {
    if (hash) {
      var r20 = (0, _yt_player.z)(function(event) {
        event.stopPropagation();
        event.preventDefault();
        hash();
        return false;
      }, this);
      this.g.g.U(exports, "click", r20);
    } else {
      if (properties) {
        this.A(exports, properties, c.id, c.Rd, c.o, c.l.click, 5);
      }
    }
  }, props);
};
/**
 * @param {number} g
 * @return {?}
 */
var toString = function(g) {
  /** @type {number} */
  var ret = 0;
  if (-1 != g.indexOf("h")) {
    g = g.split("h");
    /** @type {number} */
    ret = 3600 * g[0];
    g = g[1];
  }
  if (-1 != g.indexOf("m")) {
    g = g.split("m");
    /** @type {number} */
    ret = 60 * g[0] + ret;
    g = g[1];
  }
  if (-1 != g.indexOf("s")) {
    g = g.split("s");
    /** @type {number} */
    ret = 1 * g[0] + ret;
  } else {
    /** @type {number} */
    ret = 1 * g + ret;
  }
  return ret;
};
/**
 * @param {string} str
 * @return {?}
 */
var push = function(str) {
  var result;
  if (result = str) {
    if (!(result = 1 < str.length ? "/" == str.charAt(0) && "/" != str.charAt(1) : "/" == str)) {
      result = lookup(str);
      /** @type {boolean} */
      result = "com" == result[0] && "youtube" == result[1] || "be" == result[0] && "youtu" == result[1];
    }
  }
  return result ? -1 == str.indexOf("/redirect?") : false;
};
/**
 * @param {string} name
 * @return {?}
 */
var lookup = function(name) {
  name = name.replace(/^(https?:)?\/\//, "");
  name = name.split("/", 1);
  return!name || (1 > name.length || !name[0]) ? [] : name[0].toLowerCase().split(".").reverse();
};
/**
 * @param {string} a
 * @return {?}
 */
var stringify = function(a) {
  a = parseFloat(a);
  if (!a) {
    return null;
  }
  a = a.replace(/https?:\/\//g, "");
  var t;
  if (!(t = !push(a))) {
    t = _yt_player.Gg(_yt_player.Fg(a)[5] || null) || "";
    t = t.split("/");
    t = "/" + (1 < t.length ? t[1] : "");
    /** @type {boolean} */
    t = "/watch" != t;
  }
  if (t) {
    return null;
  }
  t = _yt_player.dE(a);
  if (!t || !t.v) {
    return null;
  }
  if (t = t.t) {
    return toString(t);
  }
  a = a.split("#", 2);
  return!a || 2 > a.length ? null : (a = _yt_player.bE(a[1])) && a.t ? toString(a.t) : -1;
};
/**
 * @param {string} val
 * @return {?}
 */
var change = function(val) {
  val = parseFloat(val);
  val = val.replace(/https?:\/\//g, "");
  return push(val) ? (val = _yt_player.dE(val)) && val.v ? val.v : null : null;
};
/**
 * @param {string} v
 * @param {string} qualifier
 * @param {string} p
 * @return {?}
 */
var query = function(v, qualifier, p) {
  p = p.replace(/\/(u|b)\/[0-9]+/g, "");
  /** @type {RegExp} */
  var isSimple = /^[0-9]+$/;
  if (v) {
    if (isSimple.test(v)) {
      /** @type {string} */
      p = "/b/" + v + p;
    }
  }
  if (qualifier) {
    if (isSimple.test(qualifier)) {
      /** @type {string} */
      p = "/u/" + qualifier + p;
    }
  }
  return p;
};
/**
 * @param {?} key
 * @param {Object} json
 * @return {?}
 */
var dispatch = function(key, json) {
  return json ? json : push(key) ? "current" : "new";
};
/**
 * @param {?} a
 * @param {Object} c
 * @return {undefined}
 */
var g = function(a, c) {
  _yt_player.M.call(this);
  this.Ga = a;
  /** @type {Object} */
  this.context = c;
  /** @type {boolean} */
  this.Yv = false;
  /** @type {number} */
  this.Y = 0;
};
/**
 * @param {Function} config
 * @param {?} assert
 * @param {number} opt_attributes
 * @param {string} left
 * @param {Function} scope
 * @param {Function} container
 * @return {undefined}
 */
var create = function(config, assert, opt_attributes, left, scope, container) {
  assert = new _yt_player.eQ(assert, opt_attributes, {
    id : left
  });
  _yt_player.N(config, assert);
  /** @type {string} */
  assert.namespace = "annotations_module";
  if (scope) {
    inject(assert).subscribe("onEnter", scope, config);
  }
  if (container) {
    inject(assert).subscribe("onExit", container, config);
  }
  _yt_player.hV(config.context.l, [assert]);
};
/**
 * @param {Object} b
 * @return {?}
 */
var equal = function(b) {
  return(0, _yt_player.F)() - b.Y;
};
/**
 * @param {Object} options
 * @param {Object} data
 * @param {?} b
 * @param {boolean} a
 * @param {?} deepDataAndEvents
 * @param {number} value
 * @return {undefined}
 */
var sort = function(options, data, b, a, deepDataAndEvents, value) {
  var message = parseFloat(data);
  if (message) {
    var node = dispatch(message, data.target);
    var response = (0, _yt_player.z)(function() {
      if (data.g) {
        this.context.l.hd();
      }
      _yt_player.vV(message || "", "current" == node ? "_top" : void 0, b);
    }, options);
    if ("new" == node) {
      response();
      /** @type {null} */
      response = null;
    }
    var body = {};
    body.interval = equal(options);
    cb(options.context.logger, a, response, body, deepDataAndEvents, value);
    if (!push(message)) {
      options = _yt_player.MG();
      a = b.itct;
      if (options) {
        if (a) {
          equals(options, parseInt(a));
        }
      }
    }
  }
};
/**
 * @param {?} domEl
 * @param {?} val
 * @param {Object} data
 * @return {undefined}
 */
var loop = function(domEl, val, data) {
  g.call(this, val, data);
  var err = this;
  this.g = domEl;
  /** @type {null} */
  this.M = null;
  /** @type {boolean} */
  this.T = this.ya = this.B = this.sa = false;
  /** @type {null} */
  this.X = null;
  this.J = new _yt_player.Yt(_yt_player.y, data.B.useTabletControls ? 4E3 : 3E3);
  _yt_player.N(this, this.J);
  this.na = new _yt_player.Yt(_yt_player.y);
  _yt_player.N(this, this.na);
  this.C = new Matrix(data, (0, _yt_player.z)(this.Zi, this), (0, _yt_player.z)(this.Uo, this));
  this.H = new _yt_player.W({
    G : "div",
    L : "iv-drawer",
    P : {
      id : "iv-drawer"
    },
    N : [{
      G : "div",
      L : "iv-drawer-header",
      P : {
        "aria-role" : "heading"
      },
      N : [{
        G : "span",
        L : "iv-drawer-header-text"
      }, {
        G : "button",
        da : ["iv-drawer-close-button", "ytp-button"],
        P : {
          "aria-label" : "Hide cards",
          tabindex : "0"
        }
      }]
    }, {
      G : "div",
      L : "iv-drawer-content"
    }]
  });
  _yt_player.N(this, this.H);
  this.D = this.H.element;
  this.ca = new _yt_player.MV(this.H, 330);
  _yt_player.N(this, this.ca);
  this.Da = _yt_player.J("iv-drawer-header-text", this.D);
  this.A = _yt_player.J("iv-drawer-content", this.D);
  /** @type {Array} */
  this.o = [];
  /** @type {null} */
  this.ra = this.K = this.F = this.Z = this.l = null;
  /** @type {Array} */
  this.ha = [];
  create(this, 0, 1E3 * data.videoData.lengthSeconds, "", function() {
    if (err.ya) {
      handler(err, "YOUTUBE_DRAWER_AUTO_OPEN");
    }
  }, function() {
    if (err.ya = err.B) {
      complete(err);
    }
  });
  /** @type {null} */
  this.I = this.ga = this.ea = null;
};
/**
 * @param {Object} item
 * @param {number} options
 * @return {undefined}
 */
var animate = function(item, options) {
  var data = options && (options.data && options.data.card_type);
  if (data && cache[data]) {
    data = new cache[data](options.id, options.data, options.g);
    if (!item.sa) {
      _yt_player.lq(item.la(), ["html5-stop-propagation", "iv-drawer-manager"]);
      _yt_player.mV(item.g, item.D, 5);
      stop(item);
      item.K = _yt_player.J("ytp-cards-button", item.g.getRootNode());
      var index = _yt_player.J("iv-drawer-close-button", item.D);
      item.ra = index;
      /** @type {boolean} */
      item.sa = true;
    }
    extractValue(item, data.id);
    var result = render(item, data);
    if (result) {
      index = {
        hc : data,
        ur : result.element,
        BA : false
      };
      var length = _init(item, index);
      _yt_player.ab(item.o, length, 0, index);
      result.ua(item.A, length);
      item.Fn();
      if (data.autoOpen) {
        create(item, data.startMs, 0x8000000000000, data.id, _yt_player.Ga(item.MV, index));
      } else {
        /** @type {number} */
        result = 1E3 * item.context.l.getCurrentTime();
        if (5E3 > result) {
          if (result > data.startMs) {
            item.kE(index);
          }
        }
        create(item, data.startMs, data.startMs + 1, data.id, _yt_player.Ga(item.kE, index));
        trim(item);
      }
    }
  }
};
/**
 * @param {Object} data
 * @param {Object} e
 * @return {undefined}
 */
var next = function(data, e) {
  if (e.data.autoOpenMs) {
    create(data, e.data.autoOpenMs, 0x8000000000000, "", function() {
      handler(data, "YOUTUBE_DRAWER_AUTO_OPEN");
    });
  }
  if (e.data.autoCloseMs) {
    create(data, e.data.autoCloseMs, 0x8000000000000, "", function() {
      complete(data);
    });
  }
  var t = e.data.headerText;
  _yt_player.Sd(data.Da, t);
  if (data.K) {
    data.K.setAttribute("title", t);
  }
  if (e.data.eventId) {
    data.M = e.data.eventId;
  }
  data.ea = parseInt(e.data.trackingParams);
  data.I = parseInt(e.data.closeTrackingParams);
  data.ga = parseInt(e.data.iconTrackingParams);
};
/**
 * @param {Object} node
 * @param {Object} childName
 * @return {undefined}
 */
var extractValue = function(node, childName) {
  var e = id(node, childName);
  if (e) {
    if (e == node.l) {
      /** @type {null} */
      node.l = null;
    }
    node.g.kB(e.hc.id);
    _yt_player.Kd(e.ur);
    _yt_player.Va(node.o, e);
    node.Fn();
    trim(node);
  }
};
/**
 * @param {Object} item
 * @param {?} deepDataAndEvents
 * @param {boolean} type
 * @param {Object} e
 * @return {undefined}
 */
var handler = function(item, deepDataAndEvents, type, e) {
  if (!item.B) {
    item.ca.show();
    item.Z = new _yt_player.Yt(function() {
      _yt_player.S(item.context.l.getRootNode(), "ytp-iv-drawer-open");
    }, 0);
    item.Z.start();
    item.X = _yt_player.rF(item.A, "mousewheel", (0, _yt_player.z)(item.ZM, item));
    /** @type {boolean} */
    item.B = true;
    item.Y = (0, _yt_player.F)();
    before(item.context.logger, item.M, 7, void 0, e && e.hc ? e.hc.o : void 0);
    var pdataCur = _yt_player.MG();
    if (pdataCur) {
      if (item.ea) {
        if (item.I) {
          send(pdataCur, item.ea);
          send(pdataCur, item.I);
        }
      }
    }
    var activeClassName = {
      TRIGGER_TYPE : deepDataAndEvents
    };
    (0, _yt_player.B)(item.o, function(url_parts) {
      if (!url_parts.BA) {
        /** @type {boolean} */
        url_parts.BA = true;
        transition(item.context.logger, url_parts.hc.o, url_parts.hc.l.BL, activeClassName);
      }
      if (pdataCur) {
        send(pdataCur, url_parts.hc.C);
      }
    });
    isFunction(item.g);
    if (type) {
      item.F = new _yt_player.Yt(function() {
        item.fa = item.K;
        item.ra.focus();
      }, 330);
      item.F.start();
    }
  }
};
/**
 * @param {Object} c
 * @return {undefined}
 */
var complete = function(c) {
  if (c.B) {
    c.ca.hide();
    _yt_player.sF(c.X);
    /** @type {null} */
    c.X = null;
    _yt_player.mq(c.context.l.getRootNode(), "ytp-iv-drawer-open");
    /** @type {boolean} */
    c.B = false;
    isFunction(c.g);
    if (c.F) {
      c.F.stop();
    }
    c.F = new _yt_player.Yt(function() {
      if (c.fa) {
        c.fa.focus();
        /** @type {null} */
        c.fa = null;
      }
    }, 330);
    c.F.start();
  }
};
/**
 * @param {Object} item
 * @return {undefined}
 */
var stop = function(item) {
  var r20 = _yt_player.J("iv-drawer-close-button", item.D);
  item.context.g.U(r20, "click", item.fJ, item);
  item.context.g.U(item.A, "touchend", function() {
    item.J.start();
  });
  item.context.g.U(item.A, "scroll", item.qJ, item);
  item.context.o.subscribe("onHideControls", function() {
    /** @type {boolean} */
    item.T = true;
  });
  item.context.o.subscribe("onShowControls", function() {
    /** @type {boolean} */
    item.T = false;
  });
  item.context.o.subscribe("onVideoAreaChange", function() {
    item.T = _yt_player.kq(item.g.getRootNode(), "ytp-autohide");
  });
  item.ha.push(_yt_player.UF("iv-teaser-shown", item.YL, item));
  item.ha.push(_yt_player.UF("iv-teaser-clicked", item.XL, item));
};
/**
 * @param {Object} options
 * @param {Object} data
 * @return {?}
 */
var render = function(options, data) {
  switch(data.type) {
    case "simple":
      return parse(options.C, data);
    case "collaborator":
      var settings = options.C;
      var value = {
        G : "div",
        da : ["iv-card", "iv-card-channel"],
        N : [{
          G : "a",
          da : ["iv-click-target"],
          P : {
            href : parseFloat(data.url),
            "data-ytid" : data.channelId
          },
          N : [debug(data.profileImageUrl), {
            G : "div",
            L : "iv-card-content",
            N : [populate(settings, data), {
              G : "h2",
              L : "iv-card-primary-link",
              aa : data.title
            }, get(settings, data)]
          }]
        }]
      };
      value = new _yt_player.W(value);
      extend(settings, value, data);
      return value;
    case "donation":
      return settings = options.C, value = (0, _yt_player.z)(settings.C, settings, data), parse(settings, data, value, value);
    case "episode":
      return clean(options.C, data, "iv-card-episode");
    case "movie":
      return clean(options.C, data, "iv-card-movie");
    case "playlist":
      return settings = options.C, value = {
        G : "div",
        da : ["iv-card", "iv-card-playlist"],
        N : [{
          G : "a",
          L : "iv-click-target",
          P : {
            href : parseFloat(data.url)
          },
          N : [debug(data.A, {
            G : "div",
            L : "iv-card-image-overlay",
            N : [{
              G : "span",
              L : "iv-card-playlist-video-count",
              aa : data.playlistVideoCount.toString()
            }]
          }), {
            G : "div",
            L : "iv-card-content",
            N : [populate(settings, data), log(settings, "h2", "iv-card-primary-link", data.title), get(settings, data)]
          }]
        }]
      }, value = new _yt_player.W(value), extend(settings, value, data), value;
    case "poll":
      return fn(options.C, data);
    case "productListing":
      settings = options.C;
      /** @type {boolean} */
      var result = !_yt_player.Ra(data.offers);
      /** @type {Array} */
      value = ["iv-card"];
      /** @type {string} */
      var info = "";
      var evt = createNode(settings, data);
      if (result) {
        value.push("iv-card-product-listing");
        /** @type {string} */
        info = "iv-card-primary-link";
        result = data.offers[0];
        /** @type {Array} */
        evt = [];
        if (result.price) {
          evt.push({
            G : "div",
            L : "iv-card-offer-price",
            aa : result.price
          });
        }
        if (result.merchant) {
          evt.push({
            G : "div",
            L : "iv-card-offer-merchant",
            aa : result.merchant
          });
        }
        evt = {
          G : "div",
          N : evt
        };
      }
      value = {
        G : "div",
        da : value,
        P : {
          tabindex : "0"
        },
        N : [{
          G : "a",
          da : ["iv-card-image", "iv-click-target"],
          P : {
            style : "background-image: url(" + data.imageUrl + ");",
            href : parseFloat(data.url),
            "aria-hidden" : "true",
            tabindex : "-1"
          }
        }, {
          G : "div",
          L : "iv-card-content",
          N : [data.sponsored ? {
            G : "div",
            L : "iv-card-sponsored",
            N : ["Sponsored", {
              G : "div",
              L : "iv-ad-info-container",
              N : [{
                G : "div",
                L : "iv-ad-info",
                aa : "{{adInfo}}"
              }, {
                G : "div",
                L : "iv-ad-info-icon-container",
                N : [{
                  G : "div",
                  L : "iv-ad-info-icon"
                }, {
                  G : "div",
                  L : "iv-ad-info-callout"
                }]
              }]
            }]
          } : "", {
            G : "a",
            L : "iv-click-target",
            P : {
              href : parseFloat(data.url)
            },
            N : [log(settings, "h2", info, data.title), evt]
          }]
        }]
      };
      value = new _yt_player.W(value);
      info = _yt_player.Ed("span");
      _yt_player.Sd(info, "You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.");
      value.Mb(info, "adInfo");
      extend(settings, value, data);
      return value;
    case "tip":
      return settings = options.C, value = (0, _yt_player.z)(settings.F, settings, data), parse(settings, data, value, value);
    case "video":
      return settings = options.C, value = data.isLiveNow ? {
        G : "span",
        da : ["yt-badge", "yt-badge-live"],
        aa : "LIVE NOW"
      } : "", value = {
        G : "div",
        da : ["iv-card", "iv-card-video"],
        N : [{
          G : "a",
          L : "iv-click-target",
          P : {
            href : parseFloat(data.url)
          },
          N : [debug(data.A, data.videoDuration ? {
            G : "span",
            L : "iv-card-video-duration",
            aa : data.videoDuration
          } : ""), {
            G : "div",
            L : "iv-card-content",
            N : [populate(settings, data), log(settings, "h2", "iv-card-primary-link", data.title), get(settings, data), value]
          }]
        }]
      }, value = new _yt_player.W(value), extend(settings, value, data), value;
  }
  return null;
};
/**
 * @param {Object} data
 * @param {?} o
 * @return {?}
 */
var _init = function(data, o) {
  if (0 == data.o.length) {
    return 0;
  }
  var b = _yt_player.Na(data.o, function(e) {
    return o.hc.startMs > e.hc.startMs || o.hc.startMs == e.hc.startMs && o.hc.timestamp >= e.hc.timestamp ? true : false;
  });
  return-1 == b ? 0 : b + 1;
};
/**
 * @param {Object} a
 * @return {?}
 */
var register = function(a) {
  return a.l ? "productListing" == a.l.hc.type : (0, _yt_player.dm)(a.o, function(e) {
    return "productListing" == e.hc.type;
  });
};
/**
 * @param {Object} value
 * @return {undefined}
 */
var trim = function(value) {
  _yt_player.U(value.g.getRootNode(), "ytp-cards-shopping-active", register(value));
};
/**
 * @param {Object} dom
 * @param {Object} e
 * @return {undefined}
 */
var finish = function(dom, e) {
  if (dom.H.o) {
    var newNode = new p([0, dom.A.scrollTop], [0, e.ur.offsetTop], 600, clone);
    dom.context.A.U(newNode, "animate", function(d) {
      dom.A.scrollTop = d.y;
    });
    dom.context.A.U(newNode, "finish", function(d) {
      dom.A.scrollTop = d.y;
    });
    newNode.play();
  } else {
    _yt_player.sH(dom.H, true);
    dom.A.scrollTop = e.ur.offsetTop;
    _yt_player.sH(dom.H, false);
  }
};
/**
 * @param {Object} item
 * @return {?}
 */
var _createItem = function(item) {
  return item.l && item.l.hc ? item.l.hc : item.o[0] && item.o[0].hc ? item.o[0].hc : null;
};
/**
 * @param {Object} rec
 * @param {Object} name
 * @return {?}
 */
var id = function(rec, name) {
  return _yt_player.Ma(rec.o, function(e) {
    return e.hc.id == name;
  });
};
/**
 * @param {?} s
 * @param {?} flags
 * @param {string} annotation
 * @return {undefined}
 */
var state = function(s, flags, annotation) {
  g.call(this, s, flags);
  /** @type {string} */
  this.annotation = annotation;
  /** @type {boolean} */
  this.isActive = false;
};
/**
 * @param {Object} obj
 * @return {undefined}
 */
var hide = function(obj) {
  var dataAttr = obj.annotation.data;
  if ("start_ms" in dataAttr) {
    if ("end_ms" in dataAttr) {
      create(obj, obj.annotation.data.start_ms, obj.annotation.data.end_ms, obj.annotation.id, function() {
        obj.show();
      }, function() {
        obj.hide();
      });
    }
  }
};
/**
 * @param {?} value
 * @param {?} arg2
 * @param {?} capture
 * @return {undefined}
 */
var src = function(value, arg2, capture) {
  state.call(this, value, arg2, capture);
  this.H = arg2;
  /** @type {null} */
  this.l = null;
  /** @type {boolean} */
  this.D = false;
  /** @type {null} */
  this.o = null;
  /** @type {boolean} */
  this.A = false;
  /** @type {number} */
  this.F = 0;
  /** @type {null} */
  this.g = this.C = this.B = null;
};
/**
 * @param {?} attr
 * @param {?} args
 * @param {?} u
 * @return {undefined}
 */
var s = function(attr, args, u) {
  state.call(this, attr, args, u);
  /** @type {boolean} */
  this.H = this.B = this.I = false;
  /** @type {number} */
  this.F = 5E3;
  /** @type {null} */
  this.A = null;
  this.D = _yt_player.K("DIV", "iv-promo-contents");
  /** @type {null} */
  this.l = this.o = this.g = null;
  this.C = new _yt_player.Yt(function() {
    this.g.setAttribute("aria-hidden", true);
    _yt_player.O(this.o, false);
    _yt_player.O(this.l, true);
  }, 700, this);
  _yt_player.N(this, this.C);
};
/**
 * @param {Object} node
 * @return {undefined}
 */
var update = function(node) {
  var opts = node.annotation.data;
  if ("cta" == node.annotation.style) {
    /** @type {number} */
    var key = 6
  } else {
    if ("video" == node.annotation.style || "playlist" == node.annotation.style) {
      /** @type {number} */
      key = 7;
    }
  }
  node.F = opts.collapse_delay_ms || node.F;
  /** @type {Array} */
  var authHeader = ["iv-promo", "iv-promo-inactive"];
  node.la().setAttribute("aria-hidden", true);
  node.la().setAttribute("aria-label", "Promotion");
  /** @type {number} */
  node.la().tabIndex = 0;
  var value = node.annotation.Ta();
  var s = opts.image_url;
  if (s) {
    var body = _yt_player.K("DIV", ["iv-promo-img", "iv-click-target"]);
    s = _yt_player.K("IMG", {
      src : s,
      "aria-hidden" : "true"
    });
    body.appendChild(s);
    if (opts.video_duration && !opts.is_live) {
      s = _yt_player.K("SPAN", "iv-promo-video-duration", opts.video_duration);
      body.appendChild(s);
    } else {
      if (opts.playlist_length) {
        s = _yt_player.K("SPAN", "iv-promo-playlist-length", opts.playlist_length.toString());
        body.appendChild(s);
      }
    }
    if (value) {
      node.Zi(body, value, node.annotation.id, opts.session_data, node.annotation.g, void 0, key);
    }
  }
  if (value) {
    s = _yt_player.K("A", "iv-promo-txt");
    _yt_player.ad(s, parseFloat(value));
    node.g = s;
  } else {
    node.g = _yt_player.K("DIV", "iv-promo-txt");
  }
  switch(node.annotation.style) {
    case "cta":
    ;
    case "website":
      var p = _yt_player.K("P", null, _yt_player.K("STRONG", null, opts.text_line_1));
      var cell = _yt_player.K("P", null, _yt_player.K("SPAN", "iv-promo-link", opts.text_line_2));
      if (s = opts.text_line_3) {
        authHeader.push("iv-promo-website-card-cta-redesign");
        var rvar = _yt_player.K("BUTTON", ["iv-promo-round-expand-icon", "ytp-button"]);
        s = _yt_player.K("BUTTON", ["iv-button", "iv-promo-button"], _yt_player.K("SPAN", "iv-button-content", s));
        var div = _yt_player.K("DIV", "iv-promo-button-container");
        div.appendChild(s);
        if (value) {
          node.Zi(node.la(), value, node.annotation.id, opts.session_data, node.annotation.g, void 0, key);
        }
      }
      _yt_player.S(node.g, "iv-click-target");
      if (value) {
        node.Zi(node.g, value, node.annotation.id, opts.session_data, node.annotation.g, void 0, key);
      }
      break;
    case "playlist":
    ;
    case "video":
      p = _yt_player.K("P", null, _yt_player.K("SPAN", null, opts.text_line_1));
      cell = _yt_player.K("P", null, _yt_player.K("STRONG", null, opts.text_line_2));
      if (opts.is_live) {
        p = cell;
        cell = _yt_player.K("SPAN", ["yt-badge", "iv-promo-badge-live"], "LIVE NOW");
      }
      _yt_player.S(node.g, "iv-click-target");
      if (value) {
        node.Zi(node.g, value, node.annotation.id, opts.session_data, node.annotation.g, void 0, key);
      }
      authHeader.push("iv-promo-video");
      break;
    case "vote":
      p = _yt_player.K("P", null, _yt_player.K("STRONG", null, opts.text_line_1));
      cell = _yt_player.K("P", null, _yt_player.K("SPAN", null, opts.text_line_2));
      div = _yt_player.K("DIV", "iv-promo-button-container");
      key = _yt_player.K("BUTTON", ["iv-button", "iv-promo-button"], _yt_player.K("SPAN", "iv-button-content", opts.button_text));
      node.context.g.U(key, "click", function(event) {
        event.stopPropagation();
        cb(this.context.logger, this.annotation.g, null, {
          contest_vote : "1"
        }, (opts.tracking || {}).vote);
        event = this.annotation.data;
        this.g = _yt_player.J("iv-promo-txt", this.D);
        var curr = _yt_player.J("iv-promo-button-container", this.D);
        var body = _yt_player.K("DIV", ["iv-promo-txt", "iv-click-target"]);
        var node = _yt_player.K("P", null, _yt_player.K("STRONG", null, event.text_line_3));
        var expected = _yt_player.K("P", null, event.text_line_4);
        _yt_player.Hd(body, node, expected);
        _yt_player.Kd(curr);
        curr = this.g;
        if (node = curr.parentNode) {
          node.replaceChild(body, curr);
        }
        _yt_player.mq(this.la(), "iv-promo-with-button");
        if (curr = this.annotation.Ta()) {
          this.Zi(body, curr, this.annotation.id, event.session_data, this.annotation.g);
        }
      }, node);
      div.appendChild(key);
      authHeader.push("iv-promo-with-button");
  }
  if (p) {
    node.g.appendChild(p);
  }
  if (cell) {
    node.g.appendChild(cell);
  }
  node.D.appendChild(node.g);
  if (div) {
    node.D.appendChild(div);
  }
  p = _yt_player.K("DIV", "iv-promo-actions");
  node.l = _yt_player.K("BUTTON", ["iv-promo-expand", "ytp-button"]);
  /** @type {string} */
  node.l.title = "Expand";
  node.context.g.U(node.l, "click", _yt_player.Ga(node.ys, 5E3), node);
  p.appendChild(node.l);
  _yt_player.O(node.l, false);
  node.context.g.U(node.la(), "mouseover", node.fK, node);
  node.context.g.U(node.la(), "mouseout", node.eK, node);
  node.context.g.U(node.la(), "touchend", _yt_player.Ga(node.ys, 5E3), node);
  node.o = _yt_player.K("BUTTON", ["iv-promo-close", "ytp-button"]);
  node.o.title = current.CLOSE;
  node.context.g.U(node.o, "click", "cta" == node.annotation.style && opts.text_line_3 ? node.UJ : node.LO, node);
  p.appendChild(node.o);
  _yt_player.lq(node.la(), authHeader);
  if (body) {
    _yt_player.Gd(node.la(), body);
    if (rvar) {
      body.appendChild(rvar);
    }
  }
  _yt_player.Gd(node.la(), node.D);
  _yt_player.Gd(node.la(), p);
};
/**
 * @param {Object} obj
 * @return {undefined}
 */
var makeGrammar = function(obj) {
  if (!obj.B) {
    if (!obj.H) {
      if (!obj.A) {
        _yt_player.S(obj.la(), "iv-promo-collapsed");
        /** @type {boolean} */
        obj.B = true;
        obj.C.start();
      }
    }
  }
};
/**
 * @param {Object} o
 * @return {undefined}
 */
var toggle = function(o) {
  o.C.stop();
  if (o.B) {
    _yt_player.nq(o.la(), ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]);
    /** @type {boolean} */
    o.B = false;
    if (o.g) {
      o.g.removeAttribute("aria-hidden");
    }
    _yt_player.O(o.l, false);
    _yt_player.O(o.o, true);
  }
};
/**
 * @param {Date} item
 * @param {number} key
 * @return {undefined}
 */
var has = function(item, key) {
  if (!item.A) {
    item.A = _yt_player.tg(function() {
      isWindow(this);
      makeGrammar(this);
    }, key, item);
  }
};
/**
 * @param {Date} obj
 * @return {undefined}
 */
var isWindow = function(obj) {
  if (obj.A) {
    _yt_player.ug(obj.A);
    /** @type {null} */
    obj.A = null;
  }
};
/**
 * @param {string} i
 * @return {undefined}
 */
var run = function(i) {
  _yt_player.sV.call(this, i);
  /** @type {boolean} */
  this.J = false;
  /** @type {number} */
  this.I = 0;
  this.o = {};
  this.K = {};
  this.Ya = new rgb2hsv(i);
  this.F = new _yt_player.FF(this);
  _yt_player.N(this, this.F);
  /** @type {null} */
  this.D = this.B = null;
  this.F.O(this.g, "onVideoAreaChange", (0, _yt_player.z)(this.R, this, "onVideoAreaChange"));
  this.F.O(this.g, "onHideControls", (0, _yt_player.z)(this.R, this, "onHideControls"));
  this.F.O(this.g, "onShowControls", (0, _yt_player.z)(this.R, this, "onShowControls"));
  this.F.O(this.g, "resize", (0, _yt_player.z)(this.R, this, "resize"));
  this.F.O(this.g, "presentingplayerstatechange", (0, _yt_player.z)(this.R, this, "presentingplayerstatechange"));
  this.subscribe("onHideControls", this.SR, this);
  this.subscribe("onShowControls", this.bU, this);
  this.subscribe("presentingplayerstatechange", this.fT, this);
  this.subscribe("resize", this.Tu, this);
  this.subscribe("E", this.AM, this);
  this.subscribe("D", this.Ih, this);
  this.subscribe("B", this.vQ, this);
  this.subscribe("C", this.bR, this);
  _yt_player.Y(this.g).C.subscribe("vast_info_card_add", this.lD, this);
  this.X = new _yt_player.FF(this);
  _yt_player.N(this, this.X);
  this.X.O(this.g, "crn_annotations_module", this.yM);
  this.X.O(this.g, "crx_annotations_module", this.zM);
  this.T = _yt_player.K("DIV", ["video-legacy-annotations", "html5-stop-propagation"]);
  this.Z = _yt_player.K("DIV", "video-custom-annotations");
  this.A = new _yt_player.W({
    G : "div",
    da : ["ytp-player-content", "ytp-iv-player-content"]
  });
  _yt_player.N(this, this.A);
  _yt_player.mV(this.g, this.A.element, 4);
  this.A.hide();
  this.C = new _yt_player.W({
    G : "div",
    da : ["ytp-iv-video-content"]
  });
  _yt_player.N(this, this.C);
  _yt_player.Gd(this.C.element, _yt_player.K("DIV", "video-annotations", this.T, this.Z));
  /** @type {null} */
  this.H = this.l = null;
  /** @type {Array} */
  this.M = [];
  if (animation(this)) {
    this.load();
  }
  var s = _yt_player.Ed("STYLE");
  (window.document.getElementsByTagName("HEAD")[0] || window.document.body).appendChild(s);
  _yt_player.Ze(this, function() {
    _yt_player.Kd(s);
  });
  if (i = s.sheet) {
    i.insertRule(".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}", 
    0);
    i.insertRule(".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 
    0);
    i.insertRule(".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", 0);
    i.insertRule(".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}", 0);
    i.insertRule(".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 0);
    i.insertRule(".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}", 0);
    i.insertRule(".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", 0);
    i.insertRule(".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}", 
    0);
    i.insertRule(".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", 
    0);
    i.insertRule(".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}", 
    0);
  }
};
/**
 * @param {?} a
 * @return {?}
 */
var objEquiv = function(a) {
  switch(a) {
    case "annotation-editor":
    ;
    case "live-dashboard":
      return true;
  }
  return false;
};
/**
 * @param {Object} settings
 * @return {?}
 */
var animation = function(settings) {
  var args = _yt_player.Y(settings.g);
  settings = settings.g.getVideoData();
  return 1 == (args.Xg || settings.Xg) && !settings.Rk || null !== args.C.get(settings.videoId);
};
/**
 * @param {Date} obj
 * @param {Element} params
 * @param {boolean} options
 * @return {undefined}
 */
var ajax = function(obj, params, options) {
  /** @type {boolean} */
  obj.J = true;
  obj.D = _yt_player.nE(params, options);
};
/**
 * @param {boolean} v
 * @param {Element} el
 * @return {?}
 */
var serialize = function(v, el) {
  var attributes = {};
  /** @type {number} */
  var i = 0;
  for (;i < el.attributes.length;i++) {
    var attr = el.attributes[i];
    attributes[attr.name] = attr.nodeValue;
  }
  /** @type {number} */
  i = 0;
  for (;i < el.childNodes.length;i++) {
    if (attr = el.childNodes[i], attr.tagName) {
      if (attributes[attr.tagName]) {
        var value = attributes[attr.tagName]
      } else {
        if ("data" == attr.tagName) {
          if (0 < attr.childNodes.length) {
            value = attr.childNodes[0].nodeValue;
            attributes[attr.tagName] = "string" == typeof value ? value.trim() : value;
          }
          continue;
        } else {
          /** @type {Array} */
          value = [];
          /** @type {Array} */
          attributes[attr.tagName] = value;
        }
      }
      if (attr && "TEXT" == attr.tagName) {
        if (1 == attr.childNodes.length && 3 == attr.childNodes[0].nodeType) {
          value.push(attr.childNodes[0].nodeValue);
        } else {
          value.push("");
        }
      } else {
        if (attr) {
          value.push(serialize(v, attr));
        }
      }
    }
  }
  return attributes;
};
/**
 * @param {Object} options
 * @param {(Node|string)} node
 * @param {?} deepDataAndEvents
 * @return {?}
 */
var node = function(options, node, deepDataAndEvents) {
  return!(options.loaded && (options.I == node && options.g.getVideoData().videoId == deepDataAndEvents));
};
/**
 * @param {Node} obj
 * @param {Object} node
 * @return {?}
 */
var find = function(obj, node) {
  var oldconfig = compare(obj, node);
  if (!oldconfig && "marker" != node.type) {
    return null;
  }
  pred(node, function(f) {
    f = (0, _yt_player.z)(this.wU, this, node.id, f);
    this.subscribe("ivTrigger:" + node.id, f);
  }, obj);
  var exports = new Cursor(obj.ea, node, oldconfig);
  _yt_player.N(exports, oldconfig);
  return exports;
};
/**
 * @param {Object} value
 * @param {Object} v
 * @return {?}
 */
var append = function(value, v) {
  var div = _yt_player.K("DIV", ["annotation", "annotation-type-custom"]);
  _yt_player.O(div, false);
  /** @type {null} */
  var ret = null;
  switch(v.type) {
    case "branding":
      if (_yt_player.Y(value.g).Bd) {
        break;
      }
      value.A.element.appendChild(div);
      ret = new src(div, hasOwnProperty(value), v);
      break;
    case "promotion":
      _yt_player.mV(value.g, div, 4);
      ret = new s(div, hasOwnProperty(value), v);
  }
  if (ret) {
    ret.gq();
  }
  return ret;
};
/**
 * @param {Object} data
 * @return {undefined}
 */
var post = function(data) {
  var msg = data.g.getVideoData();
  if (msg.Of) {
    var item = _yt_player.Y(data.g);
    var applyArgs = item.C.get(msg.videoId);
    if (applyArgs) {
      var params = {
        format : "XML",
        ad : {},
        method : "POST",
        withCredentials : true
      };
      if ("gaming" == item.playerStyle) {
        /** @type {string} */
        params.ad.gaming = "1";
      }
      params.wd = (0, _yt_player.z)(function(res, deepDataAndEvents, x) {
        if (!node(this, res, deepDataAndEvents)) {
          if (res = _yt_player.WD(x) && x.responseXML ? x.responseXML : null) {
            go(this, res);
          }
        }
      }, data, data.I, msg.videoId);
      if (_yt_player.nG()) {
        params.wd = fetch(data, params.wd);
      }
      params.Ob = {
        ic_only : "1"
      };
      request(params, applyArgs);
      /** @type {boolean} */
      data.J = true;
      _yt_player.nE(msg.Of, params);
    }
  }
};
/**
 * @param {Object} opts
 * @param {?} c
 * @return {undefined}
 */
var request = function(opts, c) {
  /** @type {string} */
  opts.method = "POST";
  opts.Ob = opts.Ob || {};
  if (c.tr) {
    opts.Ob.ic_coll = c.tr;
  }
  if (c.Zh) {
    opts.Ob.ic_xml = c.Zh;
  }
  if (c.Lk) {
    opts.Ob.ic_track = c.Lk;
  }
};
/**
 * @param {Object} value
 * @return {?}
 */
var iterator = function(value) {
  var oldconfig = new _yt_player.W({
    G : "div"
  });
  _yt_player.O(oldconfig.element, false);
  var exports = new loop(value.g, oldconfig.element, hasOwnProperty(value));
  _yt_player.N(exports, oldconfig);
  oldconfig.ua(value.A.element);
  exports.gq();
  return exports;
};
/**
 * @param {Object} exports
 * @return {?}
 */
var hasOwnProperty = function(exports) {
  if (!exports.H) {
    var oldconfig = new _yt_player.CF(exports);
    _yt_player.N(exports, oldconfig);
    var QUnit = new _yt_player.Lm(exports);
    _yt_player.N(exports, QUnit);
    exports.H = new Color(oldconfig, QUnit, _yt_player.Y(exports.g), exports.g.getVideoData(), exports.Ya, exports.g, exports.ea);
  }
  return exports.H;
};
/**
 * @param {Object} value
 * @param {Object} target
 * @return {undefined}
 */
var go = function(value, target) {
  /** @type {boolean} */
  var c = false;
  include(target);
  var codeSegments = target.getElementsByTagName("annotation");
  /** @type {number} */
  var i = 0;
  for (;i < codeSegments.length;i++) {
    var o = serialize(value, codeSegments[i]);
    /** @type {null} */
    var result = null;
    try {
      result = match(o);
    } catch (l) {
    }
    if (result) {
      a: {
        switch(result.type) {
          case "branding":
          ;
          case "promotion":
            /** @type {boolean} */
            o = true;
            break a;
        }
        /** @type {boolean} */
        o = false;
      }
      if (o) {
        if (o = append(value, result)) {
          _yt_player.N(value, o);
          value.K[result.id] = o;
        }
      } else {
        if ("card" == result.type || "drawer" == result.type) {
          if (!value.l) {
            value.l = iterator(value);
            _yt_player.N(value, value.l);
          }
          if ("card" == result.type) {
            animate(value.l, result);
          } else {
            next(value.l, result);
          }
          /** @type {boolean} */
          c = true;
        } else {
          if (o = find(value, result)) {
            _yt_player.N(value, o);
            value.o[result.id] = o;
          }
        }
      }
    }
  }
  if (c) {
    isFunction(value.g);
    value.Tu();
  }
  _yt_player.Lb(value.o, function(c) {
    if (c.view) {
      var p = c.annotation;
      if (c = c.view) {
        if (p.segment) {
          if (p.segment.l) {
            if (p = this.o[p.segment.l]) {
              c.T = p.annotation;
            }
          }
        }
      }
    }
  }, value);
};
/**
 * @param {string} s
 * @return {undefined}
 */
var include = function(s) {
  if ((s = s.getElementsByTagName("annotations")) && (!(1 > s.length) && (s = s[0].getAttribute("itct")))) {
    var dataAndEvents = _yt_player.MG();
    if (dataAndEvents) {
      var record = getAttribute();
      if (record) {
        validator(dataAndEvents, record, [parseInt(s)]);
      }
    }
  }
};
/**
 * @param {string} ele
 * @param {Node} r
 * @param {Object} str
 * @param {boolean} b
 * @return {undefined}
 */
var rgb = function(ele, r, str, b) {
  if (b) {
    slice(ele, r, str);
  } else {
    convert(ele, r, str);
  }
};
/**
 * @param {string} e
 * @param {Node} r
 * @param {Object} context
 * @return {undefined}
 */
var convert = function(e, r, context) {
  if (r = e.o[r]) {
    max(r);
    if (context && context.l) {
      e = (0, _yt_player.z)(e.Iz, e, r);
      r.g = new _yt_player.Yt(e, 2E3);
      r.g.start();
    } else {
      e.Iz(r);
    }
  }
};
/**
 * @param {string} e
 * @param {Node} a
 * @param {Object} val
 * @return {undefined}
 */
var slice = function(e, a, val) {
  if (a = e.o[a]) {
    max(a);
    if (val && val.A) {
      e = (0, _yt_player.z)(e.CE, e, a);
      a.g = new _yt_player.Yt(e, 2E3);
      a.g.start();
    } else {
      e.CE(a);
    }
  }
};
/**
 * @param {Node} b
 * @param {Object} i
 * @return {?}
 */
var fail = function(b, i) {
  if ("new" == i.target) {
    return false;
  }
  var item = parseFloat(i);
  if (!item) {
    return false;
  }
  item = item.replace(/https?:\/\//g, "");
  if (!push(item)) {
    return false;
  }
  item = _yt_player.dE(item);
  if (item.list || item.p) {
    return false;
  }
  item = change(i);
  if (!item) {
    return false;
  }
  var g = b.g.getVideoData();
  return g.videoId == item ? true : _yt_player.Y(b.g).g && g.yn ? true : false;
};
/**
 * @param {Node} a
 * @param {number} obj
 * @return {?}
 */
var compare = function(a, obj) {
  if (size(obj)) {
    var c = obj.B || isNaN(obj, function(sType) {
      return "click" == sType || ("rollOut" == sType || "rollOut" == sType);
    });
    return new Game(obj, (0, _yt_player.z)(a.T.appendChild, a.T), a.g, a.ea, c);
  }
  return null;
};
/**
 * @param {Element} a
 * @return {?}
 */
var size = function(a) {
  if ("highlight" == a.type || "widget" == a.type) {
    return true;
  }
  if ("text" == a.type) {
    var p;
    for (p in prop) {
      if (a.style == prop[p]) {
        return true;
      }
    }
  }
  return false;
};
/**
 * @param {?} model
 * @param {string} e
 * @param {boolean} recurring
 * @param {?} xhr
 * @return {undefined}
 */
var errorHandler = function(model, e, recurring, xhr) {
  model.R(valueOf(e, xhr), recurring, xhr);
};
/**
 * @param {Object} where
 * @param {?} value
 * @return {?}
 */
var fetch = function(where, value) {
  return(0, _yt_player.z)(function() {
    if (!this.ka()) {
      /** @type {Array.<?>} */
      var args = Array.prototype.slice.call(arguments, 0);
      args.unshift(value);
      value = _yt_player.Ga.apply(window, args);
      this.M.push(_yt_player.lG(value));
    }
  }, where);
};
/**
 * @param {boolean} type
 * @param {string} body
 * @param {?} html
 * @return {?}
 */
var commit = function(type, body, html) {
  switch(type) {
    case "mouseover":
    ;
    case "mouseout":
      /** @type {number} */
      var parameter = 3;
      break;
    case "mouseenter":
    ;
    case "mouseleave":
      /** @type {number} */
      parameter = 9;
  }
  return _yt_player.Yd(html, function(onComplete) {
    return _yt_player.kq(onComplete, body);
  }, true, parameter);
};
/**
 * @param {Object} event
 * @return {undefined}
 */
var bindings = function(event) {
  /** @type {boolean} */
  var type = "mouseover" == event.type && "mouseenter" in types || "mouseout" == event.type && "mouseleave" in types;
  /** @type {boolean} */
  var p = event.type in types || type;
  if ("HTML" != event.target.tagName && p) {
    if (type) {
      /** @type {string} */
      type = "mouseover" == event.type ? "mouseenter" : "mouseleave";
      p = types[type];
      var i;
      for (i in p.l) {
        var value = commit(type, i, event.target);
        if (value) {
          if (!_yt_player.Yd(event.relatedTarget, function(el) {
            return el == value;
          }, true)) {
            p.R(i, value, type, event);
          }
        }
      }
    }
    if (type = types[event.type]) {
      for (i in type.l) {
        if (value = commit(event.type, i, event.target)) {
          type.R(i, value, event.type, event);
        }
      }
    }
  }
};
/**
 * @param {?} guard
 * @return {undefined}
 */
var assert = function(guard) {
  this.B = guard;
  this.D = {};
  /** @type {Array} */
  this.H = [];
  /** @type {Array} */
  this.F = [];
};
/**
 * @param {Object} obj
 * @param {string} name
 * @return {?}
 */
var $ = function(obj, name) {
  return "yt-uix" + (obj.B ? "-" + obj.B : "") + (name ? "-" + name : "");
};
/**
 * @param {?} obj
 * @param {string} topic
 * @param {?} listener
 * @return {undefined}
 */
var subscribe = function(obj, topic, listener) {
  obj.H.push(_yt_player.UF(topic, listener, obj));
};
/**
 * @param {?} target
 * @param {?} event
 * @param {?} listener
 * @return {undefined}
 */
var addListener = function(target, event, listener) {
  target.F.push(_yt_player.FN(event, listener, target));
};
/**
 * @return {undefined}
 */
var resp = function() {
  assert.call(this, "button");
  /** @type {null} */
  this.g = null;
  /** @type {Array} */
  this.o = [];
  this.l = {};
};
/**
 * @param {number} target
 * @param {Element} object
 * @param {?} data
 * @param {KeyboardEvent} event
 * @param {?} callback
 * @return {undefined}
 */
var save = function(target, object, data, event, callback) {
  var newState = unbind(data);
  /** @type {boolean} */
  var k = 9 == event.keyCode;
  if (k || (32 == event.keyCode || 13 == event.keyCode)) {
    if (event = _insert(target, data)) {
      object = _yt_player.Od(event);
      if ("a" == object.tagName.toLowerCase()) {
        _yt_player.tV(object.href);
      } else {
        fireOnClick(object);
      }
    } else {
      if (k) {
        draw(target, object);
      }
    }
  } else {
    if (newState) {
      if (27 == event.keyCode) {
        _insert(target, data);
        draw(target, object);
      } else {
        callback(object, data, event);
      }
    } else {
      /** @type {number} */
      target = _yt_player.kq(object, $(target, "reverse")) ? 38 : 40;
      if (event.keyCode == target) {
        fireOnClick(object);
        event.preventDefault();
      }
    }
  }
};
/**
 * @param {number} source
 * @param {?} config
 * @return {?}
 */
var _insert = function(source, config) {
  var ok = $(source, "menu-item-highlight");
  var conf = _yt_player.J(ok, config);
  if (conf) {
    _yt_player.mq(conf, ok);
  }
  return conf;
};
/**
 * @param {Object} param
 * @param {Element} elem
 * @param {Element} style
 * @return {undefined}
 */
var cont = function(param, elem, style) {
  _yt_player.S(style, $(param, "menu-item-highlight"));
  var name = style.getAttribute("id");
  if (!name) {
    name = $(param, "item-id-" + _yt_player.Fa(style));
    style.setAttribute("id", name);
  }
  elem.setAttribute("aria-activedescendant", name);
};
/**
 * @param {number} a
 * @param {string} data
 * @param {number} b
 * @param {Object} e
 * @return {?}
 */
var createEvent = function(a, data, b, e) {
  var t = data.length;
  a = (0, _yt_player.Pa)(data, a);
  if (-1 == a) {
    if (38 == e.keyCode) {
      /** @type {number} */
      a = t - b;
    } else {
      if (37 == e.keyCode || (38 == e.keyCode || 40 == e.keyCode)) {
        /** @type {number} */
        a = 0;
      }
    }
  } else {
    if (39 == e.keyCode) {
      if (a % b == b - 1) {
        a -= b;
      }
      a += 1;
    } else {
      if (37 == e.keyCode) {
        if (0 == a % b) {
          a += b;
        }
        --a;
      } else {
        if (38 == e.keyCode) {
          if (a < b) {
            a += t;
          }
          a -= b;
        } else {
          if (40 == e.keyCode) {
            if (a >= t - b) {
              a -= t;
            }
            a += b;
          }
        }
      }
    }
  }
  return a;
};
/**
 * @param {Object} name
 * @param {?} el
 * @return {?}
 */
var func = function(name, el) {
  var node = el.iframeMask;
  if (!node) {
    node = _yt_player.Ed("IFRAME");
    /** @type {string} */
    node.src = 'javascript:""';
    node.className = $(name, "menu-mask");
    addClass(node);
    el.iframeMask = node;
  }
  return node;
};
/**
 * @param {Object} node
 * @param {?} context
 * @param {HTMLElement} n
 * @param {boolean} value
 * @return {undefined}
 */
var position = function(node, context, n, value) {
  var key = _yt_player.$d(context, $(node, "group"));
  /** @type {boolean} */
  var slideIndex = !!node.Ba(context, "button-menu-ignore-group");
  key = key && !slideIndex ? key : context;
  /** @type {number} */
  slideIndex = 9;
  /** @type {number} */
  var mom = 8;
  var res = _yt_player.Lh(context);
  if (_yt_player.kq(context, $(node, "reverse"))) {
    /** @type {number} */
    slideIndex = 8;
    /** @type {number} */
    mom = 9;
    /** @type {string} */
    res = res.top + "px";
    try {
      /** @type {string} */
      n.style.maxHeight = res;
    } catch (p) {
    }
  }
  if (_yt_player.kq(context, "flip")) {
    if (_yt_player.kq(context, $(node, "reverse"))) {
      /** @type {number} */
      slideIndex = 12;
      /** @type {number} */
      mom = 13;
    } else {
      /** @type {number} */
      slideIndex = 13;
      /** @type {number} */
      mom = 12;
    }
  }
  var r;
  if (node.Ba(context, "button-has-sibling-menu")) {
    r = _yt_player.Bh(key);
  } else {
    if (node.Ba(context, "button-menu-root-container")) {
      r = body(node, context);
    }
  }
  if (_yt_player.yd) {
    if (!_yt_player.rc("8")) {
      /** @type {null} */
      r = null;
    }
  }
  if (r) {
    var m = _yt_player.Lh(r);
    m = new _yt_player.Zg(-m.top, m.left, m.top, -m.left);
  }
  r = new _yt_player.hd(0, 1);
  if (_yt_player.kq(context, $(node, "center-menu"))) {
    r.x -= Math.round((_yt_player.Kh(n).width - _yt_player.Kh(context).width) / 2);
  }
  if (value) {
    r.y += _yt_player.zd(window.document).y;
  }
  if (node = func(node, context)) {
    context = _yt_player.Kh(n);
    /** @type {string} */
    node.style.width = context.width + "px";
    /** @type {string} */
    node.style.height = context.height + "px";
    absBox(key, slideIndex, node, mom, r, m, 197);
    if (value) {
      _yt_player.ph(node, "position", "fixed");
    }
  }
  absBox(key, slideIndex, n, mom, r, m, 197);
};
/**
 * @param {Object} dataAndEvents
 * @param {?} value
 * @return {?}
 */
var body = function(dataAndEvents, value) {
  if (dataAndEvents.Ba(value, "button-menu-root-container")) {
    var values = dataAndEvents.Ba(value, "button-menu-root-container");
    return _yt_player.$d(value, values);
  }
  return window.document.body;
};
/**
 * @param {Object} node
 * @param {?} element
 * @return {undefined}
 */
var draw = function(node, element) {
  if (element) {
    var c = spawn(node, element);
    if (c) {
      /** @type {null} */
      node.g = null;
      element.setAttribute("aria-pressed", "false");
      element.setAttribute("aria-expanded", "false");
      element.removeAttribute("aria-activedescendant");
      addClass(c);
      node.qj(element, "button-menu-action", false);
      var el = func(node, element);
      var i = write(c).toString();
      delete node.l[i];
      _yt_player.XD(function() {
        if (el) {
          if (el.parentNode) {
            addClass(el);
            el.parentNode.removeChild(el);
          }
        }
        if (c.originalParentNode) {
          c.parentNode.removeChild(c);
          c.originalParentNode.appendChild(c);
          /** @type {null} */
          c.originalParentNode = null;
          /** @type {null} */
          c.activeButtonNode = null;
        }
      }, 1);
    }
    i = _yt_player.$d(element, $(node, "group"));
    /** @type {Array} */
    var items = [$(node, "active")];
    if (i) {
      items.push($(node, "group-active"));
    }
    _yt_player.nq(element, items);
    _yt_player.XF("yt-uix-button-menu-hide", element);
    _yt_player.sF(node.o);
    /** @type {number} */
    node.o.length = 0;
  }
};
/**
 * @param {Error} node
 * @param {?} value
 * @param {Node} el
 * @return {undefined}
 */
var setAttribute = function(node, value, el) {
  var x = $(node, "menu-item-selected");
  node = _yt_player.rd(x, value);
  (0, _yt_player.B)(node, function(onComplete) {
    _yt_player.mq(onComplete, x);
  });
  _yt_player.S(el.parentNode, x);
};
/**
 * @param {Object} source
 * @param {?} key
 * @return {?}
 */
var spawn = function(source, key) {
  if (!key.widgetMenu) {
    var data = source.Ba(key, "button-menu-id");
    data = data && _yt_player.pd(data);
    var ok = $(source, "menu");
    if (data) {
      _yt_player.lq(data, [ok, $(source, "menu-external")]);
    } else {
      data = _yt_player.J(ok, key);
    }
    key.widgetMenu = data;
  }
  return key.widgetMenu;
};
/**
 * @param {Object} e
 * @return {undefined}
 */
var refresh = function(e) {
  if (e.g) {
    draw(e, e.g);
  }
};
/**
 * @param {?} d
 * @return {undefined}
 */
var b = function(d) {
  assert.call(this, d);
  /** @type {null} */
  this.o = null;
};
/**
 * @param {Element} html
 * @param {string} name
 * @param {string} value
 * @return {?}
 */
var callback = function(html, name, value) {
  var body = value || name;
  var test = $(html, "card");
  value = html.Cc(body);
  var node = _yt_player.pd($(html, "card") + write(body));
  if (node) {
    return html = _yt_player.J($(html, "card-body"), node), _yt_player.Qd(html, value) || (_yt_player.Kd(value), html.appendChild(value)), node;
  }
  node = window.document.createElement("div");
  node.id = $(html, "card") + write(body);
  node.className = test;
  if (body = html.Ba(body, "card-class")) {
    _yt_player.lq(node, body.split(/\s+/));
  }
  body = window.document.createElement("div");
  body.className = $(html, "card-border");
  name = html.Ba(name, "orientation") || "horizontal";
  test = window.document.createElement("div");
  /** @type {string} */
  test.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + name;
  var element = window.document.createElement("div");
  element.className = $(html, "card-body");
  html = window.document.createElement("div");
  /** @type {string} */
  html.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + name;
  _yt_player.Kd(value);
  element.appendChild(value);
  body.appendChild(html);
  body.appendChild(element);
  node.appendChild(test);
  node.appendChild(body);
  window.document.body.appendChild(node);
  return node;
};
/**
 * @param {Error} element
 * @param {Object} node
 * @param {number} t
 * @return {undefined}
 */
var start = function(element, node, t) {
  var i = element.Ba(node, "orientation") || "horizontal";
  var a = _yt_player.J($(element, "anchor"), node) || node;
  var x = element.Ba(node, "position");
  /** @type {boolean} */
  var b = !!element.Ba(node, "force-position");
  var normalizedRange = element.Ba(node, "position-fixed");
  /** @type {boolean} */
  i = "horizontal" == i;
  /** @type {boolean} */
  var h = "bottomright" == x || "bottomleft" == x;
  /** @type {boolean} */
  var pass = "topright" == x || "bottomright" == x;
  if (pass && h) {
    /** @type {number} */
    var to = 13;
    /** @type {number} */
    var mom = 8;
  } else {
    if (pass && !h) {
      /** @type {number} */
      to = 12;
      /** @type {number} */
      mom = 9;
    } else {
      if (!pass && h) {
        /** @type {number} */
        to = 9;
        /** @type {number} */
        mom = 12;
      } else {
        /** @type {number} */
        to = 8;
        /** @type {number} */
        mom = 13;
      }
    }
  }
  var not = wrap(window.document.body);
  x = wrap(node);
  if (not != x) {
    to ^= 4;
  }
  if (i) {
    /** @type {number} */
    x = node.offsetHeight / 2 - 12;
    var corner = new _yt_player.hd(-12, node.offsetHeight + 6);
  } else {
    /** @type {number} */
    x = node.offsetWidth / 2 - 6;
    corner = new _yt_player.hd(node.offsetWidth + 6, -12);
  }
  var result = _yt_player.Kh(t);
  /** @type {number} */
  x = Math.min(x, (i ? result.height : result.width) - 24 - 6);
  if (6 > x) {
    /** @type {number} */
    x = 6;
    if (i) {
      corner.y += 12 - node.offsetHeight / 2;
    } else {
      corner.x += 12 - node.offsetWidth / 2;
    }
  }
  /** @type {null} */
  result = null;
  if (!b) {
    /** @type {number} */
    result = 10;
  }
  node = $(element, "card-flip");
  element = $(element, "card-reverse");
  _yt_player.U(t, node, pass);
  _yt_player.U(t, element, h);
  result = absBox(a, to, t, mom, corner, null, result);
  if (!b) {
    if (result) {
      if (result & 48) {
        /** @type {boolean} */
        pass = !pass;
        to ^= 4;
        mom ^= 4;
      }
      if (result & 192) {
        /** @type {boolean} */
        h = !h;
        to ^= 1;
        mom ^= 1;
      }
      _yt_player.U(t, node, pass);
      _yt_player.U(t, element, h);
      absBox(a, to, t, mom, corner);
    }
  }
  if (normalizedRange) {
    a = (0, window.parseInt)(t.style.top, 10);
    b = _yt_player.zd(window.document).y;
    _yt_player.ph(t, "position", "fixed");
    _yt_player.ph(t, "top", a - b + "px");
  }
  if (not) {
    /** @type {string} */
    t.style.right = "";
    a = _yt_player.Lh(t);
    a.left = a.left || (0, window.parseInt)(t.style.left, 10);
    b = _yt_player.wd(window);
    /** @type {string} */
    t.style.left = "";
    /** @type {string} */
    t.style.right = b.width - a.left - a.width + "px";
  }
  a = _yt_player.J("yt-uix-card-body-arrow", t);
  b = _yt_player.J("yt-uix-card-border-arrow", t);
  /** @type {string} */
  i = i ? h ? "top" : "bottom" : !not && pass || not && !pass ? "left" : "right";
  a.setAttribute("style", "");
  b.setAttribute("style", "");
  /** @type {string} */
  a.style[i] = x + "px";
  /** @type {string} */
  b.style[i] = x + "px";
  h = _yt_player.J("yt-uix-card-arrow", t);
  pass = _yt_player.J("yt-uix-card-arrow-background", t);
  if (h) {
    if (pass) {
      /** @type {number} */
      t = "right" == i ? _yt_player.Kh(t).width - x - 13 : x + 11;
      /** @type {number} */
      x = t / Math.sqrt(2);
      /** @type {string} */
      h.style.left = t + "px";
      /** @type {string} */
      h.style.marginLeft = "1px";
      /** @type {string} */
      pass.style.marginLeft = -x + "px";
      /** @type {string} */
      pass.style.marginTop = x + "px";
    }
  }
};
/**
 * @param {Object} self
 * @return {undefined}
 */
var apply = function(self) {
  if (self.o) {
    self.hide(self.o);
  }
};
/**
 * @param {Element} t
 * @return {undefined}
 */
var add = function(t) {
  var opt = t.cardMask;
  if (!opt) {
    opt = _yt_player.Ed("IFRAME");
    /** @type {string} */
    opt.src = 'javascript:""';
    _yt_player.lq(opt, ["yt-uix-card-iframe-mask"]);
    t.cardMask = opt;
  }
  opt.style.position = t.style.position;
  opt.style.top = t.style.top;
  /** @type {string} */
  opt.style.left = t.offsetLeft + "px";
  /** @type {string} */
  opt.style.height = t.clientHeight + "px";
  /** @type {string} */
  opt.style.width = t.clientWidth + "px";
  window.document.body.appendChild(opt);
};
/**
 * @return {undefined}
 */
var classNameToAdd = function() {
  assert.call(this, "kbd-nav");
};
/**
 * @param {string} key
 * @param {Object} data
 * @param {Element} element
 * @return {undefined}
 */
var emit = function(key, data, element) {
  if (data && element) {
    if (_yt_player.S(element, $(key)), key = data.id, key || (key = "kbd-nav-" + Math.floor(1E6 * Math.random() + 1), data.id = key), data = key, _yt_player.ek && element.dataset) {
      /** @type {Object} */
      element.dataset.kbdNavMoveOut = data;
    } else {
      if (/-[a-z]/.test("kbdNavMoveOut")) {
        throw Error("");
      }
      element.setAttribute("data-" + _yt_player.Hb("kbdNavMoveOut"), data);
    }
  }
};
/**
 * @param {Object} target
 * @param {?} container
 * @return {undefined}
 */
var activate = function(target, container) {
  if (container) {
    var li = _yt_player.Zd(container, "LI");
    if (li) {
      _yt_player.S(li, $(target, "highlight"));
      bounds = _yt_player.rF(container, "blur", (0, _yt_player.z)(function(onComplete) {
        _yt_player.mq(onComplete, $(this, "highlight"));
        _yt_player.sF(bounds);
      }, target, li));
    }
  }
};
/**
 * @param {Node} x
 * @return {?}
 */
var recurse = function(x) {
  if ("UL" != x.tagName.toUpperCase()) {
    return[];
  }
  x = (0, _yt_player.Ld)(_yt_player.Md(x), function(elem) {
    return "LI" == elem.tagName.toUpperCase();
  });
  return(0, _yt_player.Ld)((0, _yt_player.G)(x, function(element) {
    return unbind(element) ? isEmpty(element, function(dest) {
      return _yt_player.Da(dest) && 1 == dest.nodeType ? _yt_player.Xd(dest) : false;
    }) : false;
  }), function(dataAndEvents) {
    return!!dataAndEvents;
  });
};
/**
 * @return {undefined}
 */
var d = function() {
  assert.call(this, "menu");
  /** @type {null} */
  this.l = this.g = null;
  this.o = {};
  this.C = {};
  /** @type {null} */
  this.A = null;
};
/**
 * @param {Object} s
 * @return {?}
 */
var decode = function(s) {
  var out = d.getInstance();
  if (_yt_player.kq(s, $(out))) {
    return s;
  }
  var index = out.pe(s);
  return index ? index : _yt_player.$d(s, $(out, "content")) == out.g ? out.l : null;
};
/**
 * @param {Object} obj
 * @param {(Object|number)} value
 * @param {null} id
 * @return {undefined}
 */
var group = function(obj, value, id) {
  var m = check(obj, value);
  if (m) {
    _yt_player.Jh(m, _yt_player.Kh(id));
  }
  if (id == obj.g) {
    /** @type {number} */
    var slideIndex = 9;
    /** @type {number} */
    var mom = 8;
    if (_yt_player.kq(value, $(obj, "reversed"))) {
      slideIndex ^= 1;
      mom ^= 1;
    }
    if (_yt_player.kq(value, $(obj, "flipped"))) {
      slideIndex ^= 4;
      mom ^= 4;
    }
    obj = new _yt_player.hd(0, 1);
    if (m) {
      absBox(value, slideIndex, m, mom, obj, null, 197);
    }
    absBox(value, slideIndex, id, mom, obj, null, 197);
  }
};
/**
 * @param {Object} item
 * @param {(Object|number)} value
 * @param {boolean} dataAndEvents
 * @return {undefined}
 */
var resolve = function(item, value, dataAndEvents) {
  if (reject(item, value) && !dataAndEvents) {
    enqueue(item, value);
  } else {
    rename(item, value);
    if (!item.g || hasKey(value, item.g)) {
      item.fG(value);
    } else {
      then(item.A, (0, _yt_player.z)(item.fG, item, value));
    }
  }
};
/**
 * @param {Object} obj
 * @param {(Object|number)} callback
 * @return {undefined}
 */
var rename = function(obj, callback) {
  if (callback) {
    var cb = _yt_player.$d(callback, $(obj, "content"));
    if (cb) {
      cb = _yt_player.rd($(obj), cb);
      (0, _yt_player.B)(cb, function(isXML) {
        if (!hasKey(isXML, callback)) {
          if (reject(this, isXML)) {
            isNode(this, isXML);
          }
        }
      }, obj);
    }
  }
};
/**
 * @param {Object} obj
 * @param {(Object|number)} value
 * @return {undefined}
 */
var enqueue = function(obj, value) {
  if (value) {
    /** @type {Array} */
    var values = [];
    values.push(value);
    var keys = mixin(obj, value);
    if (keys) {
      keys = _yt_player.rd($(obj), keys);
      keys = _yt_player.Ya(keys);
      /** @type {Array} */
      values = values.concat(keys);
      (0, _yt_player.B)(values, function(isXML) {
        if (reject(this, isXML)) {
          isNode(this, isXML);
        }
      }, obj);
    }
  }
};
/**
 * @param {Object} obj
 * @param {(Object|number)} value
 * @return {undefined}
 */
var isNode = function(obj, value) {
  if (value) {
    var n = mixin(obj, value);
    _yt_player.nq(resultSelector(obj, value), [$(obj, "trigger-selected"), "yt-uix-button-toggled"]);
    _yt_player.S(n, $(obj, "content-hidden"));
    var val = mixin(obj, value);
    if (val) {
      _yt_player.ud(val, {
        "aria-expanded" : "false"
      });
    }
    if (val = check(obj, value)) {
      if (val.parentNode) {
        _yt_player.Kd(val);
      }
    }
    if (n) {
      if (n == obj.g) {
        obj.l.appendChild(n);
        /** @type {null} */
        obj.g = null;
        /** @type {null} */
        obj.l = null;
        if (obj.A) {
          obj.A.R("ROOT_MENU_REMOVED");
        }
      }
    }
    _yt_player.XF("yt-uix-menu-hide", value);
    n = _yt_player.Fa(value).toString();
    _yt_player.sF(obj.o[n]);
    delete obj.o[n];
  }
};
/**
 * @param {Object} obj
 * @param {(Object|number)} value
 * @return {undefined}
 */
var store = function(obj, value) {
  var result = mixin(obj, value);
  if (result) {
    (0, _yt_player.B)(result.children, function(arg) {
      if ("LI" == arg.tagName) {
        _yt_player.ud(arg, {
          role : "menuitem"
        });
      }
    });
    _yt_player.ud(result, {
      "aria-expanded" : "true"
    });
    var id = result.id;
    if (!id) {
      id = "aria-menu-id-" + _yt_player.Fa(result);
      result.id = id;
    }
    if (result = resultSelector(obj, value)) {
      _yt_player.ud(result, {
        "aria-controls" : id
      });
    }
  }
};
/**
 * @param {?} node
 * @param {?} value
 * @param {?} id
 * @return {undefined}
 */
var onClick = function(node, value, id) {
  var n = mixin(node, value);
  if (n) {
    if (_yt_player.kq(value, $(node, "checked"))) {
      if (node = _yt_player.Zd(id, "LI")) {
        if (node = _yt_player.J("yt-ui-menu-item-checked-hid", node)) {
          n = _yt_player.rd("yt-ui-menu-item-checked", n);
          (0, _yt_player.B)(n, function(onComplete) {
            _yt_player.oq(onComplete, "yt-ui-menu-item-checked", "yt-ui-menu-item-checked-hid");
          });
          _yt_player.oq(node, "yt-ui-menu-item-checked-hid", "yt-ui-menu-item-checked");
        }
      }
    }
  }
};
/**
 * @param {Object} obj
 * @param {(Object|number)} value
 * @return {?}
 */
var reject = function(obj, value) {
  var json = mixin(obj, value);
  return json ? !_yt_player.kq(json, $(obj, "content-hidden")) : false;
};
/**
 * @param {Text} index
 * @return {undefined}
 */
var list = function(index) {
  index = _yt_player.qd(window.document, "UL", null, index);
  (0, _yt_player.B)(index, function(el) {
    /** @type {number} */
    el.tabIndex = 0;
    var suiteView = classNameToAdd.getInstance();
    _yt_player.lq(el, [$(suiteView), $(suiteView, "list")]);
  });
};
/**
 * @param {Object} obj
 * @param {number} properties
 * @return {?}
 */
var mixin = function(obj, properties) {
  var value = _yt_player.bF(properties, "menu-content-id");
  return value && (value = _yt_player.pd(value)) ? (_yt_player.lq(value, [$(obj, "content"), $(obj, "content-external")]), value) : properties == obj.l ? obj.g : _yt_player.J($(obj, "content"), properties);
};
/**
 * @param {Object} parent
 * @param {(Object|number)} arg
 * @return {?}
 */
var check = function(parent, arg) {
  var index = _yt_player.Fa(arg).toString();
  var frame = parent.C[index];
  if (!frame) {
    frame = _yt_player.Ed("IFRAME");
    /** @type {string} */
    frame.src = 'javascript:""';
    /** @type {Array} */
    var meta = [$(parent, "mask")];
    (0, _yt_player.B)(_yt_player.jq(arg), function(a) {
      meta.push(a + "-mask");
    });
    _yt_player.lq(frame, meta);
    parent.C[index] = frame;
  }
  return frame || null;
};
/**
 * @param {Object} a
 * @param {(Object|number)} value
 * @return {?}
 */
var resultSelector = function(a, value) {
  return _yt_player.J($(a, "trigger"), value);
};
/**
 * @param {Node} a
 * @param {(Object|number)} value
 * @return {?}
 */
var isPlainObject = function(a, value) {
  return hasKey(value, a.g) || hasKey(value, a.l);
};
/**
 * @return {undefined}
 */
var config = function() {
  b.call(this, "clickcard");
  this.g = {};
  this.l = {};
};
/**
 * @return {undefined}
 */
var ret = function() {
  b.call(this, "hovercard");
};
/**
 * @param {Object} m
 * @param {string} Var
 * @param {string} T
 * @param {string} compute
 * @param {?} t
 * @param {string} x
 * @return {undefined}
 */
var X = function(m, Var, T, compute, t, x) {
  /** @type {Object} */
  this.g = m;
  /** @type {null} */
  this.D = null;
  this.o = _yt_player.J("yt-dialog-fg", this.g) || this.g;
  if (m = _yt_player.J("yt-dialog-title", this.o)) {
    var idx = "yt-dialog-title-" + _yt_player.Fa(this.o);
    m.setAttribute("id", idx);
    this.o.setAttribute("aria-labelledby", idx);
  }
  this.o.setAttribute("tabindex", "-1");
  this.I = _yt_player.J("yt-dialog-focus-trap", this.g);
  /** @type {boolean} */
  this.J = false;
  this.A = new _yt_player.XC;
  /** @type {Array} */
  this.F = [];
  this.F.push(_yt_player.AF(this.g, "click", (0, _yt_player.z)(this.YQ, this), "yt-dialog-dismiss"));
  this.F.push(_yt_player.rF(this.I, "focus", (0, _yt_player.z)(this.CJ, this), true));
  step(this);
  /** @type {string} */
  this.K = Var;
  /** @type {string} */
  this.T = T;
  /** @type {string} */
  this.M = compute;
  this.H = t;
  /** @type {string} */
  this.X = x;
  /** @type {null} */
  this.C = this.B = null;
};
/**
 * @param {Date} _this
 * @param {Function} container
 * @return {undefined}
 */
var _clip = function(_this, container) {
  if (!_this.ka()) {
    _this.A.subscribe("post-all", container);
  }
};
/**
 * @param {Object} b
 * @return {undefined}
 */
var step = function(b) {
  b = _yt_player.J("yt-dialog-fg-content", b.g);
  /** @type {Array} */
  var headers = [];
  _yt_player.Lb(which, function(value) {
    headers.push("yt-dialog-show-" + value);
  });
  _yt_player.nq(b, headers);
  _yt_player.S(b, "yt-dialog-show-content");
};
/**
 * @return {?}
 */
var fadeOut = function() {
  var r20 = _yt_player.rd("yt-dialog");
  return(0, _yt_player.Bj)(r20, function(next_callback) {
    return unbind(next_callback);
  });
};
/**
 * @param {Node} e
 * @return {?}
 */
var preload = function(e) {
  var iframe = _yt_player.qd(window.document, "iframe", null, e.g);
  (0, _yt_player.B)(iframe, function(img) {
    var image = _yt_player.bF(img, "onload");
    if (image) {
      if (image = _yt_player.x(image)) {
        _yt_player.rF(img, "load", image);
      }
    }
    if (image = _yt_player.bF(img, "src")) {
      img.src = image;
    }
  }, e);
  return _yt_player.Ya(iframe);
};
/**
 * @param {number} context
 * @return {undefined}
 */
var attach = function(context) {
  (0, _yt_player.B)(window.document.getElementsByTagName("iframe"), function(j) {
    if (-1 == (0, _yt_player.Pa)(context, j)) {
      _yt_player.S(j, "iframe-hid");
    }
  });
};
/**
 * @return {undefined}
 */
var dismiss = function() {
  var r20 = _yt_player.rd("iframe-hid");
  (0, _yt_player.B)(r20, function(onComplete) {
    _yt_player.mq(onComplete, "iframe-hid");
  });
};
/**
 * @param {?} value
 * @return {undefined}
 */
var focus = function(value) {
  _yt_player.XD((0, _yt_player.z)(function() {
    if (this.o) {
      this.o.focus();
    }
  }, value), 0);
};
/**
 * @return {undefined}
 */
var r = function() {
  assert.call(this, "overlay");
  /** @type {null} */
  this.A = this.l = this.o = this.g = null;
};
/**
 * @param {Node} exports
 * @return {undefined}
 */
var updateTemp = function(exports) {
  if (!exports.A) {
    exports.A = _yt_player.UF("yt-uix-overlay-hide", funcToCall);
  }
  if (exports.g) {
    _clip(exports.g, function() {
      var child = r.getInstance();
      /** @type {null} */
      child.o = null;
      child.g.dispose();
      /** @type {null} */
      child.g = null;
    });
  }
};
/**
 * @param {Object} t
 * @return {undefined}
 */
var make_title = function(t) {
  if (t.g) {
    var o = t.o;
    t.g.dismiss("overlayhide");
    if (o) {
      t.qj(o, "overlay-hidden");
    }
    /** @type {null} */
    t.o = null;
    if (t.l) {
      _yt_player.sF(t.l);
      /** @type {null} */
      t.l = null;
    }
    /** @type {null} */
    t.g = null;
  }
};
/**
 * @param {?} properties
 * @param {Object} str
 * @return {?}
 */
var transform = function(properties, str) {
  var result;
  if (properties) {
    if (result = _yt_player.J("yt-dialog", properties)) {
      var results = _yt_player.pd("body-container");
      if (results) {
        results.appendChild(result);
        properties.overlayContentNode = result;
        result.overlayParentNode = properties;
      }
    } else {
      result = properties.overlayContentNode;
    }
  } else {
    if (str) {
      result = _yt_player.$d(str, "yt-dialog");
    }
  }
  return result;
};
/**
 * @return {?}
 */
var promote = function() {
  var t = r.getInstance();
  if (t.o) {
    t = _yt_player.J("yt-dialog-fg-content", t.o.overlayContentNode);
  } else {
    a: {
      if (t = _yt_player.rd("yt-dialog-fg-content")) {
        /** @type {number} */
        var i = 0;
        for (;i < t.length;i++) {
          var restoreScript = _yt_player.$d(t[i], "yt-dialog");
          if (unbind(restoreScript)) {
            t = t[i];
            break a;
          }
        }
      }
      /** @type {null} */
      t = null;
    }
  }
  return t;
};
/**
 * @return {undefined}
 */
var funcToCall = function() {
  make_title(r.getInstance());
};
/**
 * @return {undefined}
 */
var old = function() {
  assert.call(this, "tooltip");
  /** @type {number} */
  this.g = 0;
  this.l = {};
};
/**
 * @param {Object} parent
 * @param {?} name
 * @param {string} child
 * @return {undefined}
 */
var contains = function(parent, name, child) {
  parent.setData(name, "tooltip-text", child);
  parent = parent.Ba(name, "content-id");
  if (parent = _yt_player.pd(parent)) {
    _yt_player.Sd(parent, child);
  }
};
/**
 * @param {Object} selector
 * @param {Element} a
 * @return {?}
 */
var jQuery = function(selector, a) {
  return selector.Ba(a, "tooltip-text") || a.title;
};
/**
 * @param {Object} target
 * @param {Element} elem
 * @return {undefined}
 */
var createElement = function(target, elem) {
  if (elem) {
    var c = jQuery(target, elem);
    if (c) {
      var node = _yt_player.pd(require(target, elem));
      if (!node) {
        node = window.document.createElement("div");
        node.id = require(target, elem);
        node.className = $(target, "tip");
        var t = window.document.createElement("div");
        t.className = $(target, "tip-body");
        var d = window.document.createElement("div");
        d.className = $(target, "tip-arrow");
        var el = window.document.createElement("div");
        el.setAttribute("aria-hidden", "true");
        el.className = $(target, "tip-content");
        var input = createFrame(target, elem);
        var path = require(target, elem, "content");
        el.id = path;
        target.setData(elem, "content-id", path);
        t.appendChild(el);
        if (input) {
          node.appendChild(input);
        }
        node.appendChild(t);
        node.appendChild(d);
        var r = highlight(elem);
        path = require(target, elem, "arialabel");
        d = window.document.createElement("div");
        _yt_player.S(d, $(target, "arialabel"));
        d.id = path;
        r = elem.hasAttribute("aria-label") ? elem.getAttribute("aria-label") : "rtl" == window.document.body.getAttribute("dir") ? c + " " + r : r + " " + c;
        _yt_player.Sd(d, r);
        elem.setAttribute("aria-labelledby", path);
        path = _yt_player.hF() || window.document.body;
        path.appendChild(d);
        path.appendChild(node);
        contains(target, elem, c);
        if (c = (0, window.parseInt)(target.Ba(elem, "tooltip-max-width"), 10)) {
          if (t.offsetWidth > c) {
            /** @type {string} */
            t.style.width = c + "px";
            _yt_player.S(el, $(target, "normal-wrap"));
          }
        }
        el = _yt_player.kq(elem, $(target, "reverse"));
        if (!drag(target, elem, node, t, input, el)) {
          drag(target, elem, node, t, input, !el);
        }
        var targets = $(target, "tip-visible");
        _yt_player.XD(function() {
          _yt_player.S(node, targets);
        }, 0);
      }
    }
  }
};
/**
 * @param {string} e
 * @param {?} id
 * @param {Object} data
 * @param {Element} event
 * @param {Element} el
 * @param {boolean} ev
 * @return {?}
 */
var drag = function(e, id, data, event, el, ev) {
  _yt_player.U(data, $(e, "tip-reverse"), ev);
  /** @type {number} */
  var h = 0;
  if (ev) {
    /** @type {number} */
    h = 1;
  }
  var b = _yt_player.Kh(id);
  ev = new _yt_player.hd((b.width - 10) / 2, ev ? b.height : 0);
  var monitor = _yt_player.Ch(id);
  resize(new _yt_player.hd(monitor.x + ev.x, monitor.y + ev.y), data, h);
  monitor = _yt_player.wd(window);
  var a = _yt_player.Gh(data);
  data = _yt_player.Kh(event);
  /** @type {number} */
  var width = Math.floor(data.width / 2);
  /** @type {boolean} */
  h = !!(monitor.height < a.y + b.height);
  /** @type {boolean} */
  b = !!(a.y < b.height);
  /** @type {boolean} */
  ev = !!(a.x < width);
  /** @type {boolean} */
  monitor = !!(monitor.width < a.x + width);
  /** @type {number} */
  a = (data.width + 3) / -2 - -5;
  e = e.Ba(id, "force-tooltip-direction");
  if ("left" == e || ev) {
    /** @type {number} */
    a = -5;
  } else {
    if ("right" == e || monitor) {
      /** @type {number} */
      a = 20 - data.width - 3;
    }
  }
  /** @type {string} */
  e = Math.floor(a) + "px";
  /** @type {string} */
  event.style.left = e;
  if (el) {
    /** @type {string} */
    el.style.left = e;
    /** @type {string} */
    el.style.height = data.height + "px";
    /** @type {string} */
    el.style.width = data.width + "px";
  }
  return!(h || b);
};
/**
 * @param {string} parent
 * @param {Element} src
 * @param {string} callback
 * @return {?}
 */
var require = function(parent, src, callback) {
  parent = $(parent) + write(src);
  if (callback) {
    parent += "-" + callback;
  }
  return parent;
};
/**
 * @param {Object} object
 * @param {Element} name
 * @return {?}
 */
var createFrame = function(object, name) {
  /** @type {null} */
  var node = null;
  if (_yt_player.K0) {
    if (_yt_player.kq(name, $(object, "masked"))) {
      if (node = _yt_player.pd("yt-uix-tooltip-shared-mask")) {
        node.parentNode.removeChild(node);
        removeClass(node);
      } else {
        node = _yt_player.Ed("IFRAME");
        /** @type {string} */
        node.src = 'javascript:""';
        /** @type {string} */
        node.id = "yt-uix-tooltip-shared-mask";
        node.className = $(object, "tip-mask");
      }
    }
  }
  return node;
};
/**
 * @param {?} wait
 * @return {undefined}
 */
var ready = function(wait) {
  var node = _yt_player.pd("yt-uix-tooltip-shared-mask");
  var p = node && _yt_player.Yd(node, function(dataAndEvents) {
    return dataAndEvents == wait;
  }, false, 2);
  if (node) {
    if (p) {
      node.parentNode.removeChild(node);
      addClass(node);
      window.document.body.appendChild(node);
    }
  }
};
/**
 * @param {?} el
 * @return {undefined}
 */
var target = function(el) {
  _yt_player.yN.call(this, 1, arguments);
  this.g = el;
};
/**
 * @param {?} a
 * @param {?} $p1
 * @param {?} m
 * @param {?} mod
 * @param {string} query
 * @return {undefined}
 */
var q = function(a, $p1, m, mod, query) {
  _yt_player.yN.call(this, 2, arguments);
  this.source = query || null;
};
/**
 * @param {?} elem
 * @param {?} x
 * @param {?} opt_expr
 * @return {undefined}
 */
var parent = function(elem, x, opt_expr) {
  _yt_player.yN.call(this, 1, arguments);
  this.g = elem;
  this.l = x;
};
/**
 * @param {?} dataAndEvents
 * @param {?} cb
 * @param {?} id
 * @param {(number|string)} g
 * @param {?} newObj
 * @param {?} deepDataAndEvents
 * @param {string} source
 * @return {undefined}
 */
var obj = function(dataAndEvents, cb, id, g, newObj, deepDataAndEvents, source) {
  _yt_player.yN.call(this, 1, arguments);
  this.g = g || null;
  this.source = source || null;
};
/**
 * @param {?} properties
 * @return {?}
 */
var css = function(properties) {
  properties = _yt_player.$d(properties, "yt-uix-button-subscription-container");
  properties = _yt_player.J("unsubscribe-confirmation-overlay-container", properties);
  return _yt_player.J("yt-dialog", properties);
};
/**
 * @param {string} el
 * @param {?} title
 * @return {?}
 */
var display = function(el, title) {
  _yt_player.sF(matched);
  /** @type {number} */
  matched.length = 0;
  if (!input[title]) {
    input[title] = css(el);
  }
  r.getInstance().show(input[title]);
  var arg = promote();
  return new _yt_player.Yf(function($sanitize) {
    matched.push(_yt_player.AF(arg, "click", function() {
      $sanitize();
    }, "overlay-confirmation-unsubscribe-button"));
  });
};
/**
 * @return {undefined}
 */
var props = function() {
  assert.call(this, "subscription-button");
};
/**
 * @param {?} obj
 * @param {?} key
 * @return {?}
 */
var toType = function(obj, key) {
  if (!obj.Ba(key, "ypc-enabled")) {
    return null;
  }
  var camelKey = obj.Ba(key, "ypc-item-type");
  var i = obj.Ba(key, "ypc-item-id");
  return{
    itemType : camelKey,
    itemId : i,
    subscriptionElement : key
  };
};
/**
 * @param {?} list
 * @param {Element} arg
 * @return {undefined}
 */
var setter = function(list, arg) {
  var name = list.Ba(arg, settings.jI);
  /** @type {boolean} */
  var forward = !!list.Ba(arg, "is-subscribed");
  /** @type {string} */
  name = "-" + name;
  /** @type {string} */
  var fullname = elm.wG + name;
  _yt_player.U(arg, elm.vG + name, !forward);
  _yt_player.U(arg, fullname, forward);
  if (list.Ba(arg, settings.IG)) {
    if (!list.Ba(arg, settings.HG)) {
      name = $(old.getInstance());
      _yt_player.U(arg, name, !forward);
      arg.title = forward ? "" : list.Ba(arg, settings.JG);
    }
  }
  if (forward) {
    _yt_player.XD(function() {
      _yt_player.S(arg, elm.pw);
    }, 1E3);
  } else {
    _yt_player.mq(arg, elm.pw);
  }
};
/**
 * @param {Object} a
 * @param {?} value
 * @return {?}
 */
var increment = function(a, value) {
  var r20 = _yt_player.rd($(a));
  return(0, _yt_player.Ld)(r20, function(isXML) {
    return value == this.Ba(isXML, "channel-external-id");
  }, a);
};
/**
 * @param {?} fn
 * @param {string} type
 * @return {undefined}
 */
var on = function(fn, type) {
  var matched = (0, _yt_player.z)(function(store) {
    if (store.discoverable_subscriptions) {
      _yt_player.QD("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS", store.discoverable_subscriptions);
    }
    this.kw(type);
  }, fn);
  _yt_player.Osa(matched, "subscribe", "sub_button");
};
/**
 * @param {?} elm
 * @param {?} eventName
 * @return {?}
 */
var addEvent = function(elm, eventName) {
  if (!elm.Ba(eventName, "show-unsub-confirm-dialog")) {
    return false;
  }
  var subscribers = elm.Ba(eventName, "show-unsub-confirm-time-frame");
  return "always" == subscribers || "ten_minutes" == subscribers && (subscribers = (0, window.parseInt)(elm.Ba(eventName, "subscribed-timestamp"), 10), (new ok).getTime() < 1E3 * (subscribers + 600)) ? true : false;
};
var blockLikeTags = {
  SCRIPT : 1,
  STYLE : 1,
  HEAD : 1,
  IFRAME : 1,
  OBJECT : 1
};
var tmp = {
  IMG : " ",
  BR : "\n"
};
/** @type {RegExp} */
var typePattern = /[^\d]+$/;
var data = {
  cm : 1,
  "in" : 1,
  mm : 1,
  pc : 1,
  pt : 1
};
var COMMANDS = {
  em : 1,
  ex : 1
};
/**
 * @return {?}
 */
Range.prototype.clone = function() {
  return new Range(this.start, this.end);
};
/**
 * @return {?}
 */
Range.prototype.getLength = function() {
  return this.end - this.start;
};
_yt_player.A(ok, _yt_player.ko);
_yt_player.h = ok.prototype;
/**
 * @return {?}
 */
_yt_player.h.getHours = function() {
  return this.date.getHours();
};
/**
 * @return {?}
 */
_yt_player.h.getMinutes = function() {
  return this.date.getMinutes();
};
/**
 * @return {?}
 */
_yt_player.h.getSeconds = function() {
  return this.date.getSeconds();
};
/**
 * @return {?}
 */
_yt_player.h.getMilliseconds = function() {
  return this.date.getMilliseconds();
};
/**
 * @return {?}
 */
_yt_player.h.getUTCHours = function() {
  return this.date.getUTCHours();
};
/**
 * @return {?}
 */
_yt_player.h.getUTCMinutes = function() {
  return this.date.getUTCMinutes();
};
/**
 * @param {string} interval
 * @return {undefined}
 */
_yt_player.h.add = function(interval) {
  _yt_player.ko.prototype.add.call(this, interval);
  if (interval.hours) {
    this.date.setUTCHours(this.date.getUTCHours() + interval.hours);
  }
  if (interval.minutes) {
    this.date.setUTCMinutes(this.date.getUTCMinutes() + interval.minutes);
  }
  if (interval.seconds) {
    this.date.setUTCSeconds(this.date.getUTCSeconds() + interval.seconds);
  }
};
/**
 * @param {?} protoProps
 * @return {?}
 */
_yt_player.h.xo = function(protoProps) {
  var child = _yt_player.ko.prototype.xo.call(this, protoProps);
  return protoProps ? child + " " + _yt_player.yb(this.getHours(), 2) + ":" + _yt_player.yb(this.getMinutes(), 2) + ":" + _yt_player.yb(this.getSeconds(), 2) : child + "T" + _yt_player.yb(this.getHours(), 2) + _yt_player.yb(this.getMinutes(), 2) + _yt_player.yb(this.getSeconds(), 2);
};
/**
 * @return {?}
 */
_yt_player.h.toString = function() {
  return this.xo();
};
/**
 * @return {?}
 */
_yt_player.h.clone = function() {
  var date = new ok(this.date);
  date.eo = this.eo;
  date.ho = this.ho;
  return date;
};
var empty = {};
/** @type {null} */
var root = null;
_yt_player.A(tail, _yt_player.bf);
_yt_player.A(p, _yt_player.ut);
_yt_player.h = p.prototype;
/**
 * @return {?}
 */
_yt_player.h.getDuration = function() {
  return this.duration;
};
/**
 * @param {boolean} options
 * @return {?}
 */
_yt_player.h.play = function(options) {
  if (options || 0 == this.g) {
    /** @type {number} */
    this.progress = 0;
    this.coords = this.l;
  } else {
    if (this.kb()) {
      return false;
    }
  }
  pause(this);
  this.startTime = options = (0, _yt_player.F)();
  if (-1 == this.g) {
    this.startTime -= this.duration * this.progress;
  }
  this.endTime = this.startTime + this.duration;
  this.A = this.startTime;
  if (!this.progress) {
    this.Ap();
  }
  this.Ge("play");
  if (-1 == this.g) {
    this.Ge("resume");
  }
  /** @type {number} */
  this.g = 1;
  var i = _yt_player.Fa(this);
  if (!(i in empty)) {
    empty[i] = this;
  }
  restart();
  tick(this, options);
  return true;
};
/**
 * @param {boolean} gotoEnd
 * @return {undefined}
 */
_yt_player.h.stop = function(gotoEnd) {
  pause(this);
  /** @type {number} */
  this.g = 0;
  if (gotoEnd) {
    /** @type {number} */
    this.progress = 1;
  }
  progress(this, this.progress);
  this.Ge("stop");
  this.xm();
};
/**
 * @return {undefined}
 */
_yt_player.h.pause = function() {
  if (this.kb()) {
    pause(this);
    /** @type {number} */
    this.g = -1;
    this.Ge("pause");
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.V = function() {
  if (!(0 == this.g)) {
    this.stop(false);
  }
  this.Ge("destroy");
  p.ba.V.call(this);
};
/**
 * @return {undefined}
 */
_yt_player.h.destroy = function() {
  this.dispose();
};
/**
 * @return {undefined}
 */
_yt_player.h.Iu = function() {
  this.Ge("animate");
};
/**
 * @param {string} type
 * @return {undefined}
 */
_yt_player.h.Ge = function(type) {
  this.dispatchEvent(new tail(type, this));
};
_yt_player.A(results, p);
results.prototype.o = _yt_player.y;
/**
 * @return {undefined}
 */
results.prototype.Iu = function() {
  this.o();
  results.ba.Iu.call(this);
};
/**
 * @return {undefined}
 */
results.prototype.xm = function() {
  this.o();
  results.ba.xm.call(this);
};
/**
 * @return {undefined}
 */
results.prototype.Ap = function() {
  this.o();
  results.ba.Ap.call(this);
};
_yt_player.A(base, results);
/**
 * @return {undefined}
 */
base.prototype.o = function() {
  /** @type {string} */
  this.element.style.left = Math.round(this.coords[0]) + "px";
  /** @type {string} */
  this.element.style.top = Math.round(this.coords[1]) + "px";
};
var current = {};
_yt_player.A(o, _yt_player.Df);
_yt_player.h = o.prototype;
/** @type {null} */
_yt_player.h.rs = null;
/** @type {null} */
_yt_player.h.El = null;
/**
 * @return {?}
 */
_yt_player.h.la = function() {
  return this.El;
};
/**
 * @param {string} funcToCall
 * @param {?} millis
 * @param {?} type
 * @param {?} ev
 * @return {undefined}
 */
_yt_player.h.addEventListener = function(funcToCall, millis, type, ev) {
  _yt_player.pf(this.El, funcToCall, millis, type, ev);
};
/**
 * @param {string} listener
 * @param {?} millis
 * @param {?} callback
 * @param {?} cb
 * @return {undefined}
 */
_yt_player.h.removeEventListener = function(listener, millis, callback, cb) {
  _yt_player.xf(this.El, listener, millis, callback, cb);
};
/**
 * @return {undefined}
 */
_yt_player.h.V = function() {
  o.ba.V.call(this);
  var cache = this.El;
  if (cache) {
    if (_yt_player.hf(cache)) {
      if (cache.He) {
        _yt_player.mf(cache.He);
      }
    } else {
      if (cache = _yt_player.sf(cache)) {
        /** @type {number} */
        var b = 0;
        var i;
        for (i in cache.listeners) {
          var r = cache.listeners[i].concat();
          /** @type {number} */
          var j = 0;
          for (;j < r.length;++j) {
            if (_yt_player.yf(r[j])) {
              ++b;
            }
          }
        }
      }
    }
  }
};
_yt_player.A(f, o);
/** @type {null} */
f.prototype.fill = null;
_yt_player.A(elem, o);
/** @type {null} */
options.prototype.Rf = null;
/** @type {null} */
options.prototype.Zd = null;
/** @type {boolean} */
options.prototype.Jm = true;
/** @type {Array} */
var table = [2, 2, 6, 6, 0];
_yt_player.h = options.prototype;
/**
 * @return {?}
 */
_yt_player.h.clear = function() {
  /** @type {number} */
  this.rb.length = 0;
  /** @type {number} */
  this.Ka.length = 0;
  /** @type {number} */
  this.Ce.length = 0;
  delete this.Rf;
  delete this.Zd;
  delete this.Jm;
  return this;
};
/**
 * @param {?} errorCallback
 * @param {?} y
 * @return {?}
 */
_yt_player.h.moveTo = function(errorCallback, y) {
  if (0 == _yt_player.Ka(this.rb)) {
    this.Ce.length -= 2;
  } else {
    this.rb.push(0);
    this.Ka.push(1);
  }
  this.Ce.push(errorCallback, y);
  /** @type {Array} */
  this.Zd = this.Rf = [errorCallback, y];
  return this;
};
/**
 * @param {number} pos
 * @return {undefined}
 */
_yt_player.h.Ec = function(pos) {
  var i = _yt_player.Ka(this.rb);
  if (null == i) {
    throw Error("Path cannot start with lineTo");
  }
  if (1 != i) {
    this.rb.push(1);
    this.Ka.push(0);
  }
  /** @type {number} */
  i = 0;
  for (;i < arguments.length;i += 2) {
    var expectation = arguments[i];
    var thisp = arguments[i + 1];
    this.Ce.push(expectation, thisp);
  }
  this.Ka[this.Ka.length - 1] += i / 2;
  /** @type {Array} */
  this.Zd = [expectation, thisp];
};
/**
 * @return {?}
 */
_yt_player.h.close = function() {
  var rb = _yt_player.Ka(this.rb);
  if (null == rb) {
    throw Error("Path cannot start with close");
  }
  if (4 != rb) {
    this.rb.push(4);
    this.Ka.push(1);
    this.Zd = this.Rf;
  }
  return this;
};
/**
 * @return {?}
 */
_yt_player.h.clone = function() {
  var clone = new this.constructor;
  clone.rb = this.rb.concat();
  clone.Ka = this.Ka.concat();
  clone.Ce = this.Ce.concat();
  clone.Rf = this.Rf && this.Rf.concat();
  clone.Zd = this.Zd && this.Zd.concat();
  clone.Jm = this.Jm;
  return clone;
};
/**
 * @param {?} tx
 * @return {?}
 */
_yt_player.h.transform = function(tx) {
  if (!this.Jm) {
    throw Error("Non-simple path");
  }
  tx.transform(this.Ce, 0, this.Ce, 0, this.Ce.length / 2);
  if (this.Rf) {
    tx.transform(this.Rf, 0, this.Rf, 0, 1);
  }
  if (this.Zd) {
    if (this.Rf != this.Zd) {
      tx.transform(this.Zd, 0, this.Zd, 0, 1);
    }
  }
  return this;
};
/**
 * @return {?}
 */
_yt_player.h.isEmpty = function() {
  return 0 == this.rb.length;
};
_yt_player.A(c, f);
/**
 * @return {?}
 */
RegExp.prototype.Cb = function() {
  return this.l;
};
_yt_player.A(value, _yt_player.Tu);
/** @type {null} */
value.prototype.B = null;
/**
 * @return {?}
 */
value.prototype.Hj = function() {
  return this.Re ? _yt_player.Kh(this.la()) : _yt_player.ua(this.width) && _yt_player.ua(this.height) ? new _yt_player.I(this.width, this.height) : null;
};
/**
 * @return {undefined}
 */
value.prototype.resume = function() {
};
_yt_player.A(t, oldconfig);
_yt_player.A(failureMessage, oldconfig);
_yt_player.A(defs, elem);
/**
 * @return {undefined}
 */
defs.prototype.clear = function() {
  _yt_player.Id(this.la());
};
/**
 * @param {Object} width
 * @param {number} height
 * @return {undefined}
 */
defs.prototype.setSize = function(width, height) {
  var element = this.la();
  var attributes = {
    width : width,
    height : height
  };
  var key;
  for (key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};
_yt_player.A(out, c);
var result;
_yt_player.A(QUnit, value);
/** @type {number} */
var _svgdef_ = 0;
_yt_player.h = QUnit.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.zo = function() {
  var node2 = h(this, "svg", {
    width : this.width,
    height : this.height,
    overflow : "hidden"
  });
  var node3 = h(this, "g");
  this.F = h(this, "defs");
  this.B = new defs(node3, this);
  node2.appendChild(this.F);
  node2.appendChild(node3);
  this.g = node2;
  if (this.o) {
    this.la().setAttribute("preserveAspectRatio", "none");
    if (this.M) {
      this.wq();
    } else {
      this.la().setAttribute("viewBox", "0 0 " + (this.o ? this.o + " " + this.K : ""));
    }
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.wq = function() {
  if (this.Re) {
    var $cont = this.Hj();
    if (0 == $cont.width) {
      /** @type {string} */
      this.la().style.visibility = "hidden";
    } else {
      /** @type {string} */
      this.la().style.visibility = "";
      /** @type {number} */
      var o = $cont.width / this.o;
      /** @type {number} */
      $cont = $cont.height / this.K;
      this.B.la().setAttribute("transform", "scale(" + o + " " + $cont + ") translate(0 0)");
    }
  }
};
/**
 * @param {Object} width
 * @param {number} size
 * @return {undefined}
 */
_yt_player.h.setSize = function(width, size) {
  _yt_player.Jh(this.la(), width, size);
};
/**
 * @return {?}
 */
_yt_player.h.Hj = function() {
  if (!_yt_player.rh) {
    return this.Re ? _yt_player.Kh(this.la()) : QUnit.ba.Hj.call(this);
  }
  var width = this.width;
  var height = this.height;
  var program = _yt_player.u(width) && -1 != width.indexOf("%");
  var inverse = _yt_player.u(height) && -1 != height.indexOf("%");
  if (!this.Re && (program || inverse)) {
    return null;
  }
  if (program) {
    var parent = this.la().parentNode;
    var parentSize = _yt_player.Kh(parent);
    /** @type {number} */
    width = (0, window.parseFloat)(width) * parentSize.width / 100;
  }
  if (inverse) {
    parent = parent || this.la().parentNode;
    parentSize = parentSize || _yt_player.Kh(parent);
    /** @type {number} */
    height = (0, window.parseFloat)(height) * parentSize.height / 100;
  }
  return new _yt_player.I(width, height);
};
/**
 * @return {undefined}
 */
_yt_player.h.clear = function() {
  this.B.clear();
  _yt_player.Id(this.F);
  this.l = {};
};
/**
 * @return {undefined}
 */
_yt_player.h.yj = function() {
  var err = this.Hj();
  QUnit.ba.yj.call(this);
  if (!err) {
    this.dispatchEvent("resize");
  }
  if (this.M) {
    err = this.width;
    var line = this.height;
    if ("string" == typeof err) {
      if (-1 != err.indexOf("%")) {
        if ("string" == typeof line) {
          if (-1 != line.indexOf("%")) {
            this.I.U(plus(), "tick", this.wq);
          }
        }
      }
    }
    this.wq();
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.ql = function() {
  QUnit.ba.ql.call(this);
  if (this.M) {
    this.I.Ea(plus(), "tick", this.wq);
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.V = function() {
  delete this.l;
  delete this.F;
  delete this.B;
  this.I.dispose();
  delete this.I;
  QUnit.ba.V.call(this);
};
_yt_player.q(Class, _yt_player.sV);
_yt_player.h = Class.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.load = function() {
  _yt_player.sV.prototype.load.call(this);
  if (!runLoggingCallbacks(_yt_player.Y(this.g).playerStyle)) {
    var opts = this.g.getVideoData();
    if (opts = opts.cj ? null : opts.qb && (opts.qb.endscreen && opts.qb.endscreen.endscreenRenderer) || null) {
      opts = init(opts, this.M ? "new" : "current");
      reset(this, opts);
    } else {
      var node = this.g.getVideoData();
      opts = node.videoId;
      if (this.B) {
        this.B.abort();
      }
      opts = {
        method : "POST",
        wd : (0, _yt_player.z)(this.FR, this, opts),
        ad : {
          v : opts
        },
        withCredentials : true
      };
      if ("gaming" == _yt_player.Y(this.g).playerStyle) {
        /** @type {string} */
        opts.ad.gaming = "1";
      }
      if (this.M) {
        /** @type {string} */
        opts.ad.ptype = "embedded";
      }
      var Jy = this.g.getVideoData().Jy;
      if (Jy) {
        opts.Ob = {
          ad_tracking : Jy
        };
      }
      if (node = _yt_player.LO(node)) {
        if (node = _yt_player.Mc(node), node = _yt_player.Jc(node)) {
          this.B = _yt_player.nE(node, opts);
        }
      }
    }
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.unload = function() {
  reset(this, null);
  if (this.B) {
    this.B.abort();
    /** @type {null} */
    this.B = null;
  }
  _yt_player.sV.prototype.unload.call(this);
};
/**
 * @param {string} dataAndEvents
 * @param {?} cb
 * @return {?}
 */
_yt_player.h.CM = function(dataAndEvents, cb) {
  if (!runLoggingCallbacks(_yt_player.Y(this.g).playerStyle)) {
    return null;
  }
  if ("loadCustomEndscreenRenderer" == dataAndEvents) {
    var oldconfig = init(cb, "new");
    reset(this, oldconfig);
    return true;
  }
  return null;
};
/**
 * @return {?}
 */
_yt_player.h.DM = function() {
  return runLoggingCallbacks(_yt_player.Y(this.g).playerStyle) ? ["loadCustomEndscreenRenderer"] : [];
};
/**
 * @param {?} dataAndEvents
 * @param {Object} xhr
 * @return {undefined}
 */
_yt_player.h.FR = function(dataAndEvents, xhr) {
  /** @type {null} */
  var data = this.B = null;
  if (200 == xhr.status) {
    var responseText = xhr.responseText;
    if (")]}" == responseText.substring(0, 3)) {
      responseText = responseText.substring(3);
      /** @type {*} */
      data = JSON.parse(responseText);
      data = init(data, this.M ? "new" : "current");
    }
  }
  reset(this, data);
};
/**
 * @return {undefined}
 */
_yt_player.h.XA = function() {
  if (this.o && this.o.elements) {
    var rect = this.g.nB();
    if (rect && (0 != rect.width && 0 != rect.height)) {
      var cell = this.g.ju();
      if (cell && (0 != cell.width && 0 != cell.height)) {
        /** @type {number} */
        var delta = rect.width / rect.height;
        /** @type {number} */
        var val = 0;
        /** @type {number} */
        var p = -1;
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          /** @type {number} */
          var o = Math.abs(cell.width - codeSegments[i]);
          if (-1 == p || val >= o) {
            /** @type {number} */
            p = i;
            /** @type {number} */
            val = o;
          }
        }
        /** @type {string} */
        val = properties[p];
        if (this.A) {
          _yt_player.ph(this.A.element, "outline-width", Math.max(cell.width, cell.height) + "px");
        }
        /** @type {number} */
        cell = 0;
        for (;cell < this.o.elements.length;++cell) {
          if (i = this.o.elements[cell].id, p = this.l[i], o = this.F[i], p && o) {
            /** @type {number} */
            var h = o.width * delta / o.aspectRatio;
            /** @type {number} */
            i = Math.round(h * rect.height);
            var funcToCall = rect.left + Math.round(o.left * rect.width);
            var millis = rect.top + Math.round(o.top * rect.height);
            _yt_player.Jh(p.element, Math.round(o.width * rect.width), i);
            _yt_player.wh(p.element, funcToCall, millis);
            _yt_player.nq(p.element, testError);
            funcToCall = o.left + o.width / 2;
            o = o.top + h / 2;
            _yt_player.S(p.element, 0.5 >= funcToCall && 0.5 >= o ? "ytp-ce-top-left-quad" : 0.5 < funcToCall && 0.5 >= o ? "ytp-ce-top-right-quad" : 0.5 >= funcToCall && 0.5 < o ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad");
            _yt_player.nq(p.element, properties);
            _yt_player.S(p.element, val);
            if (p = _yt_player.qd(window.document, "div", "ytp-ce-expanding-overlay-body", p.element)[0]) {
              _yt_player.ph(p, "height", i + "px");
            }
          }
        }
      }
    }
  }
};
/**
 * @param {Object} path
 * @return {undefined}
 */
_yt_player.h.EM = function(path) {
  if (this.o) {
    if ("ytp-ce-in-endscreen" == path.getId()) {
      /** @type {boolean} */
      this.J = false;
      if (this.o.skip && 1 == this.g.Bh()) {
        _yt_player.XU(this.g, true);
        this.g.ac(window.Infinity);
        /** @type {boolean} */
        this.J = true;
      } else {
        set(this, this.o.impressionUrls);
        if (path = _yt_player.MG()) {
          send(path, this.o.visualElement);
        }
      }
    } else {
      if (!this.J) {
        path = path.getId().substring(15);
        var info = this.l[path];
        var q = this.F[path];
        _yt_player.S(info.element, "ytp-ce-element-show");
        info.element.removeAttribute("aria-hidden");
        info = this.g.getRootNode();
        _yt_player.S(info, "ytp-ce-shown");
        set(this, q.impressionUrls);
        if (info = _yt_player.MG()) {
          send(info, q.visualElement);
        }
        if (_yt_player.Y(this.g).zb) {
          this.g.va("endscreenelementshown", path);
        }
      }
    }
  }
};
/**
 * @param {Object} cell
 * @return {undefined}
 */
_yt_player.h.FM = function(cell) {
  if ("ytp-ce-in-endscreen" != cell.getId() && !this.J) {
    cell = cell.getId().substring(15);
    var m = this.l[cell];
    _yt_player.mq(m.element, "ytp-ce-element-show");
    m.element.setAttribute("aria-hidden", true);
    m = this.g.getRootNode();
    _yt_player.mq(m, "ytp-ce-shown");
    if (_yt_player.Y(this.g).zb) {
      this.g.va("endscreenelementhidden", cell);
    }
  }
};
/**
 * @param {Event} ev
 * @return {undefined}
 */
_yt_player.h.RU = function(ev) {
  var src = this;
  if (ev.target === window) {
    (new _yt_player.Yt(function() {
      var i;
      for (i in src.l) {
        _yt_player.nq(src.l[i].element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"]);
      }
    }, 0)).start();
  }
};
/**
 * @param {Element} r
 * @param {Object} event
 * @return {undefined}
 */
_yt_player.h.HC = function(r, event) {
  if (r.targetUrl && (!event || ("keypress" != event.type || 13 == event.keyCode))) {
    var t = event.target;
    for (;t && !_yt_player.kq(t, "ytp-ce-element");) {
      if (_yt_player.kq(t, "subscribe-label")) {
        swap(this, r);
      }
      if (_yt_player.kq(t, "ytp-ce-channel-subscribe")) {
        return;
      }
      t = _yt_player.Pd(t);
    }
    if (!t || _yt_player.kq(t, "ytp-ce-element-hover")) {
      event.preventDefault();
      event.stopPropagation();
      if (t = this.l[r.id]) {
        this.Ru(t, r);
        t.element.blur();
      }
      if (event.ctrlKey || (event.metaKey || "new" == r.mq)) {
        swap(this, r);
        this.aE();
        this.g.hd();
        t = _yt_player.Mc(r.targetUrl);
        t = _yt_player.Jc(t);
        _yt_player.vV(t, void 0, r.Rd);
      } else {
        t = (0, _yt_player.z)(this.aE, this, _yt_player.Ga(_yt_player.uV, r.targetUrl, r.Rd));
        swap(this, r, t);
      }
    }
  }
};
/**
 * @param {Object} arg
 * @param {Object} obj
 * @return {undefined}
 */
_yt_player.h.Ut = function(arg, obj) {
  if (!_yt_player.kq(arg.element, "ytp-ce-element-hover")) {
    if ("VIDEO" == obj.type || "PLAYLIST" == obj.type) {
      _yt_player.S(arg.element, "ytp-ce-element-hover");
    } else {
      if (_yt_player.Y(this.g).l) {
        (new _yt_player.Yt(function() {
          _yt_player.S(arg.element, "ytp-ce-element-hover");
        }, 200)).start();
      } else {
        _yt_player.S(arg.element, "ytp-ce-element-hover");
      }
    }
    set(this, obj.MK);
    sendMessage(this, obj.id, true);
  }
};
/**
 * @param {Object} item
 * @param {Element} obj
 * @return {undefined}
 */
_yt_player.h.Ru = function(item, obj) {
  _yt_player.mq(item.element, "ytp-ce-element-hover");
  _yt_player.mq(item.element, "ytp-ce-force-expand");
  sendMessage(this, obj.id, false);
};
/**
 * @param {?} code
 * @return {undefined}
 */
_yt_player.h.aE = function(code) {
  this.g.Ni(17, code);
};
/** @type {Array} */
var codeSegments = [346, 426, 470, 506, 570, 640, 853, 1280, 1920];
/** @type {Array.<string>} */
var properties = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" ");
/** @type {Array} */
var testError = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"];
var timeout = {
  jZ : "current",
  FH : "new"
};
var u2 = {
  CLOSE : "close",
  u1 : "openUrl",
  kI : "subscribe"
};
var array = {
  Pq : "click",
  CLOSE : "close",
  y_ : "hidden",
  q2 : "rollOut",
  WH : "rollOver",
  aI : "shown"
};
var ll = {
  I4 : "xx",
  J4 : "xy",
  P4 : "yx",
  Q4 : "yy"
};
_yt_player.q(isError, length);
var MSG_CLOSURE_CUSTOM_COLOR_INVALID_INPUT = {
  rG : "anchored",
  c2 : "rect",
  E2 : "shapeless"
};
var camelKey = {
  CLOSED : "closed",
  F1 : "playerControlShow",
  WH : "rollOver",
  aI : "shown"
};
/**
 * @return {?}
 */
error.prototype.Ta = function() {
  var url = array_to_hash(this, function(requestObj) {
    return "openUrl" == requestObj.type && null != requestObj.url;
  });
  return url ? url.url : null;
};
/**
 * @return {?}
 */
error.prototype.showLinkIcon = function() {
  return isNaN(this, function($location) {
    return null != $location.url && $location.url.showLinkIcon;
  });
};
var prop = {
  rG : "anchored",
  uG : "branding",
  CHANNEL : "channel",
  iZ : "cta",
  B_ : "highlightText",
  d0 : "label",
  PLAYLIST : "playlist",
  Q1 : "popup",
  T2 : "speech",
  kI : "subscribe",
  u3 : "title",
  VIDEO : "video",
  y4 : "vote",
  B4 : "website"
};
var MSG_UNSAFE_LINK = {
  uG : "branding",
  FY : "card",
  LZ : "drawer",
  A_ : "highlight",
  B0 : "marker",
  V1 : "promotion",
  TEXT : "text",
  E4 : "widget"
};
var title = {
  t4 : "video_relative",
  G1 : "player_relative"
};
/**
 * @param {Function} a
 * @param {?} b
 * @param {?} d
 * @param {?} mod
 * @return {undefined}
 */
Node.prototype.A = function(a, b, d, mod) {
  this.g[a] = b ? !d : d;
  a = _yt_player.Ob(this.g, function(dataAndEvents) {
    return dataAndEvents;
  });
  if (this.o != a) {
    /** @type {Function} */
    this.o = a;
    this.l.R(this.B, a, mod);
  }
};
/**
 * @return {?}
 */
block.prototype.la = function() {
  return this.B;
};
/**
 * @return {undefined}
 */
block.prototype.o = function() {
};
var frequency = {
  bevel : 1,
  dropshadow : 2
};
_yt_player.q(wrapper, block);
/**
 * @param {Function} a
 * @param {?} obj
 * @return {undefined}
 */
wrapper.prototype.o = function(a, obj) {
  var c = Number(a);
  if (c) {
    var d = clear(c, obj);
    if (!(0 >= d.width || 0 >= d.height)) {
      var node;
      if (node = (c = (c = color(a)) && c.g ? c.g : null) && c.length ? c[0] : null) {
        var data = _yt_player.gh(map(obj, action(node, new _yt_player.bh(node.F, node.H, node.Qk, node.o), obj.g)));
        var b = d.clone();
        c = new _yt_player.bh(data.x, data.y, 1, 1);
        /** @type {number} */
        var next = Math.max(b.left + b.width, c.left + c.width);
        /** @type {number} */
        var m = Math.max(b.top + b.height, c.top + c.height);
        /** @type {number} */
        b.left = Math.min(b.left, c.left);
        /** @type {number} */
        b.top = Math.min(b.top, c.top);
        /** @type {number} */
        b.width = next - b.left;
        /** @type {number} */
        b.height = m - b.top;
        c = a.l;
        b = selector(b, c.effects);
        next = createBox(this, b.width, b.height);
        m = getItem(c, b.width, b.height, this.g);
        d = new _yt_player.bh(d.left - b.left, d.top - b.top, d.width, d.height);
        var e = new _yt_player.hd(data.x - b.left, data.y - b.top);
        /** @type {number} */
        this.A = 17 * merge(obj.g, node.l, node.g ? node.g : "xy");
        node = c.cornerRadius;
        data = a.l;
        var i = this.g && eq(a);
        var r = i ? data.borderWidth + 1 : data.borderWidth;
        /** @type {number} */
        i = (data = r ? new RegExp(r, i ? data.l : data.borderColor) : null) ? data.Cb() / 2 : 0;
        r = getPosition(d, e);
        var result = this.C(d, node, e, r);
        var pos = e.x;
        e = e.y;
        var len = d.width;
        var h = d.height;
        var base = d.left;
        d = d.top;
        var me = new options;
        me.moveTo(base + node + i, d + i);
        if ("t" == r) {
          me.Ec(result.start, d + i);
          me.Ec(pos, e);
          me.Ec(result.end, d + i);
        }
        me.Ec(base + len - node - i, d + i);
        insert(me, node, node, -90);
        if ("r" == r) {
          me.Ec(base + len - i, result.start);
          me.Ec(pos, e);
          me.Ec(base + len - i, result.end);
        }
        me.Ec(base + len - i, d + h - node - i);
        insert(me, node, node, 0);
        if ("b" == r) {
          me.Ec(result.end, d + h - i);
          me.Ec(pos, e);
          me.Ec(result.start, d + h - i);
        }
        me.Ec(base + node + i, d + h - i);
        insert(me, node, node, 90);
        if ("l" == r) {
          me.Ec(base + i, result.end);
          me.Ec(pos, e);
          me.Ec(base + i, result.start);
        }
        me.Ec(base + i, d + node + i);
        insert(me, node, node, 180);
        me.close();
        test(next, me, data, m);
        if (m = this.la()) {
          _yt_player.S(m, "annotation-shape");
          _yt_player.S(m, "annotation-speech-shape");
          _yt_player.wh(m, b.left, b.top);
          _yt_player.Jh(m, b.width, b.height);
          setup(next, m, c.effects);
        }
      }
    }
  }
};
/**
 * @param {Function} a
 * @param {?} b
 * @param {?} o
 * @param {string} r
 * @return {?}
 */
wrapper.prototype.C = function(a, b, o, r) {
  /**
   * @param {number} c
   * @param {number} start
   * @param {?} a
   * @param {?} p
   * @return {?}
   */
  function within(c, start, a, p) {
    /** @type {number} */
    c = Math.min(Math.max(p - 2 * b, 0), c);
    start = _yt_player.dd(start - c / 2, a + b, a + p - c - b);
    return new Range(start, start + c);
  }
  return "t" == r || "b" == r ? within(this.A, o.x, a.left, a.width) : "l" == r || "r" == r ? within(this.A, o.y, a.top, a.height) : new Range(0, 0);
};
_yt_player.q(def, block);
/**
 * @param {Function} a
 * @param {?} b
 * @return {undefined}
 */
def.prototype.o = function(a, b) {
  var result = Number(a);
  if (result) {
    var item = clear(result, b);
    if (!(0 >= item.width || 0 >= item.height)) {
      var g = a.l;
      result = selector(item, g.effects);
      var bind = createBox(this, result.width, result.height);
      var source = new _yt_player.bh(0, 0, item.width, item.height);
      var n = g.cornerRadius;
      item = new RegExp(!g.o && this.g ? 1 : g.o, g.bgColor);
      var restoreScript = new failureMessage("#000", 0);
      /** @type {number} */
      var classNames = item ? item.Cb() / 2 + 1 : 0;
      source = move(source, n, classNames);
      test(bind, source, item, restoreScript);
      bind = this.la();
      _yt_player.S(bind, "annotation-shape");
      g = g.g;
      _yt_player.Mh(bind, this.g ? Math.max(g, 0.9) : g);
      _yt_player.wh(bind, result.left, result.top);
      _yt_player.Jh(bind, result.width, result.height);
    }
  }
};
_yt_player.q(copy, block);
/**
 * @param {Function} a
 * @param {?} b
 * @return {undefined}
 */
copy.prototype.o = function(a, b) {
  var c = Number(a);
  if (c) {
    var item = clear(c, b);
    if (!(0 >= item.width || 0 >= item.height)) {
      c = a.l;
      var node = selector(item, c.effects);
      var obj = createBox(this, node.width, node.height);
      var result = new _yt_player.bh(0, 0, item.width, item.height);
      item = getItem(c, item.width, item.height, this.g);
      var data = c.cornerRadius;
      var s = a.l;
      var i = this.g && eq(a);
      var regex = i ? s.borderWidth + 1 : s.borderWidth;
      /** @type {number} */
      i = (s = regex ? new RegExp(regex, i ? s.l : s.borderColor) : null) ? s.Cb() / 2 + 1 : 0;
      result = move(result, data, i);
      test(obj, result, s, item);
      if (result = this.la()) {
        _yt_player.S(result, "annotation-shape");
        _yt_player.S(result, "annotation-popup-shape");
        _yt_player.wh(result, node.left, node.top);
        _yt_player.Jh(result, node.width, node.height);
        setup(obj, result, c.effects);
      }
    }
  }
};
_yt_player.q(report, wrapper);
/**
 * @param {Function} a
 * @param {?} b
 * @param {?} o
 * @param {string} r
 * @return {?}
 */
report.prototype.C = function(a, b, o, r) {
  /**
   * @param {number} c
   * @param {number} start
   * @param {number} x
   * @param {number} w
   * @return {?}
   */
  function within(c, start, x, w) {
    /** @type {number} */
    c = Math.min(Math.max(w - 2 * b, 0), c);
    /** @type {number} */
    start = start <= x + w / 2 ? Math.max(x + w / 4 - c / 2, x + b) : Math.min(x + 3 * w / 4 - c / 2, x + w - c - b);
    return new Range(start, start + c);
  }
  return "t" == r || "b" == r ? within(this.A, o.x, a.left, a.width) : "l" == r || "r" == r ? within(this.A, o.y, a.top, a.height) : new Range(0, 0);
};
_yt_player.q(Game, _yt_player.M);
_yt_player.h = Game.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.AB = function() {
  if (!this.H) {
    if (this.A) {
      _yt_player.O(this.A, true);
    }
    if (this.B) {
      _yt_player.O(this.B, true);
    }
    if (this.o) {
      /** @type {boolean} */
      this.o.g = true;
      _yt_player.Mh(this.l, updateGraph(this) ? 1 : 0);
      this.o.o(this.g, reposition(this));
    }
    if (this.F.isActive()) {
      this.F.stop();
    }
    /** @type {boolean} */
    this.H = true;
    this.I = this.W.xh(_yt_player.VU(this.C), "mouseleave", function(variables) {
      this.wp.stop();
      this.Ih(variables);
    });
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.Ih = function() {
  if (this.H) {
    if (this.M) {
      this.F.start();
    } else {
      this.Kz();
    }
    if (this.o) {
      /** @type {boolean} */
      this.o.g = false;
      _yt_player.Mh(this.l, updateGraph(this) ? 1 : 0);
      this.o.o(this.g, reposition(this));
    }
    /** @type {boolean} */
    this.H = false;
    if (this.I) {
      this.W.Ea(this.I);
      /** @type {null} */
      this.I = null;
    }
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.Kz = function() {
  if (this.A) {
    _yt_player.O(this.A, false);
  }
  if (this.B) {
    _yt_player.O(this.B, false);
  }
};
/**
 * @param {boolean} Y
 * @return {undefined}
 */
_yt_player.h.KO = function(Y) {
  /** @type {boolean} */
  this.Y = Y;
  this.wp.Kj();
};
/**
 * @return {undefined}
 */
_yt_player.h.JO = function() {
  var original = this.Y;
  var core_rnotwhite = new _yt_player.hd(original.clientX, original.clientY);
  var options = _yt_player.Ch(this.C.getRootNode());
  var value = scroll(options, this.K);
  options = (this.B && _yt_player.Nh(this.B) || this.A && _yt_player.Nh(this.A)) && scroll(options, this.M);
  if (value && value.contains(core_rnotwhite) || options && options.contains(core_rnotwhite)) {
    this.AB(original);
  } else {
    this.Ih(original);
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.show = function() {
  var obj = this.g.l;
  /** @type {boolean} */
  obj = (obj && 0 == obj.g || ("title" == this.g.style || "highlightText" == this.g.style) ? false : true) && !this.o;
  /** @type {boolean} */
  var array = !this.l;
  /** @type {boolean} */
  var widget = "widget" == this.g.type;
  if (obj) {
    var properties = reposition(this);
    /** @type {null} */
    var o = null;
    if ("highlight" == this.g.type || "label" == this.g.style) {
      o = new def;
    } else {
      if ("popup" == this.g.style) {
        o = new copy;
      } else {
        if ("anchored" == this.g.style) {
          o = new wrapper;
        } else {
          if ("speech" == this.g.style) {
            o = new report;
          }
        }
      }
    }
    if (o) {
      if (o.o(this.g, properties), this.o = o, properties = o.la()) {
        _yt_player.O(properties, false);
        _yt_player.S(properties, "annotation-type-" + this.g.type.toLowerCase());
        this.X(properties);
      }
    }
  }
  if (array) {
    /** @type {Array} */
    properties = ["annotation"];
    if (!("highlightText" != this.g.style)) {
      properties.push("annotation-no-mouse");
    }
    properties.push("annotation-type-" + this.g.type.toLowerCase());
    this.l = _yt_player.K("DIV", properties);
    _yt_player.O(this.l, false);
    if (this.g.A) {
      this.D = _yt_player.K("DIV", "inner-text");
      if ("label" == this.g.style) {
        _yt_player.S(this.D, "label-text");
        this.D.style.backgroundColor = this.g.l.bgColor;
      }
      _yt_player.Sd(this.D, this.g.A);
      this.l.appendChild(this.D);
    }
    _yt_player.aF(this.l, "annotation_id", this.g.id);
    this.X(this.l);
    bindEvents(this, this.l);
    if (eq(this.g) && this.g.showLinkIcon()) {
      if (o = this.g.Ta()) {
        properties = this.l;
        o = new _yt_player.vm(parseFloat(o));
        properties.title = o.l + o.o;
      }
      this.B = _yt_player.K("SPAN", "annotation-link-icon");
      _yt_player.O(this.B, false);
      this.l.appendChild(this.B);
    }
    listen(this);
    if (!eq(this.g)) {
      /** @type {string} */
      this.l.style.cursor = "default";
    }
  }
  if (widget) {
    if ("subscribe" == this.g.style) {
      _yt_player.J("yt-uix-subscription-button", this.l);
    }
  }
  if (obj || array) {
    a: {
      obj = this.g.segment.g;
      if (obj.length && (obj = l(obj[0]))) {
        obj = obj.B;
        break a;
      }
      /** @type {number} */
      obj = 0;
    }
    if (this.l) {
      this.l.style.zIndex = obj;
    }
    if (this.o) {
      if (this.o.la()) {
        this.o.la().style.zIndex = obj;
      }
    }
  }
  _yt_player.O(this.l, true);
  _yt_player.Mh(this.l, updateGraph(this) ? 1 : 0);
  show(this);
  if (this.o) {
    if (this.o.la()) {
      _yt_player.O(this.o.la(), true);
    }
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.hide = function() {
  if (this.l) {
    _yt_player.O(this.l, false);
  }
  if (this.o) {
    if (this.o.la()) {
      _yt_player.O(this.o.la(), false);
    }
  }
  if (this.J) {
    this.W.Ea(this.J);
    /** @type {null} */
    this.J = null;
  }
};
_yt_player.q(Cursor, _yt_player.M);
_yt_player.h = Cursor.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.hide = function() {
  /** @type {boolean} */
  this.isVisible = false;
  if (this.view) {
    close(this);
    this.view.hide();
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.show = function() {
  /** @type {boolean} */
  this.isVisible = true;
  if (this.view) {
    this.view.show();
    this.l.subscribe("resize", this.zB, this);
    this.l.subscribe("onVideoAreaChange", this.mD, this);
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.destroy = function() {
  if (this.view) {
    close(this);
    var item = this.view;
    _yt_player.DF(item.W);
    item.wp.dispose();
    item.F.dispose();
    if (item.l) {
      _yt_player.Kd(item.l);
    }
    if (item.o) {
      if (item.o.la()) {
        _yt_player.Kd(item.o.la());
      }
    }
  }
  max(this);
};
/**
 * @return {undefined}
 */
_yt_player.h.mD = function() {
  show(this.view);
};
/**
 * @return {undefined}
 */
_yt_player.h.zB = function() {
  show(this.view);
};
_yt_player.q(initialize, Entity);
_yt_player.q(process, Entity);
_yt_player.q(publish, process);
_yt_player.q(play, Entity);
_yt_player.q(done, Entity);
_yt_player.q(last, process);
_yt_player.q(all, process);
_yt_player.q(onSuccess, Entity);
_yt_player.q(handle, Entity);
/**
 * @param {Function} a
 * @param {?} b
 * @return {undefined}
 */
Matrix.prototype.o = function(a, b) {
  var m = _yt_player.Zd(b.target, "label");
  if (m) {
    _yt_player.U(m, "iv-card-poll-choice-focused", a);
  }
};
/**
 * @param {Function} a
 * @param {?} b
 * @return {undefined}
 */
Matrix.prototype.D = function(a, b) {
  var oldconfig = _yt_player.$d(b.target, "iv-card-poll");
  if (oldconfig) {
    if (a.A) {
      _yt_player.J("iv-card-sign-in-button", oldconfig).click();
    } else {
      var i = (0, window.parseInt)(getData(b.target, "pollChoiceIndex"), 10);
      if (null == a.g) {
        a.choices[i].count++;
        a.g = i;
      } else {
        if (a.g != i) {
          var collection = a.choices[a.g];
          /** @type {number} */
          collection.count = Math.max(collection.count - 1, 0);
          a.choices[i].count++;
          a.g = i;
        } else {
          collection = a.choices[a.g];
          /** @type {number} */
          collection.count = Math.max(collection.count - 1, 0);
          /** @type {null} */
          a.g = null;
        }
      }
      onComplete(a, oldconfig);
      _yt_player.rE(this.g.videoData.Of, {
        ad : {
          action_poll_vote : 1
        },
        Ob : {
          poll_id : a.id,
          index : i,
          session_token : a.H
        }
      });
      cb(this.g.logger, a.o, void 0, {
        "link-id" : i
      }, a.l.click, 5);
      if (oldconfig = _yt_player.MG()) {
        equals(oldconfig, a.C);
      }
    }
  }
};
/**
 * @param {Function} a
 * @return {undefined}
 */
Matrix.prototype.C = function(a) {
  var updateGGA = _yt_player.x("yt.www.ypc.bootstrap.api.loadOffersForInnertubeRequestParams");
  var QUnit;
  if (updateGGA) {
    /**
     * @return {undefined}
     */
    QUnit = function() {
      updateGGA(a.H, a.B);
    };
  }
  comparator(this, a, true, QUnit);
};
/**
 * @param {Function} a
 * @return {undefined}
 */
Matrix.prototype.F = function(a) {
  var ok = _yt_player.x("yt.www.ypc.bootstrap.api.loadOffers");
  if (ok) {
    ok = _yt_player.Ga(ok, a.K, a.H, a.B);
  }
  comparator(this, a, false, ok);
};
_yt_player.q(g, _yt_player.M);
_yt_player.h = g.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.gq = function() {
  this.context.o.subscribe("resize", this.Fn, this);
};
/**
 * @return {?}
 */
_yt_player.h.la = function() {
  return this.Ga;
};
/**
 * @param {?} statements
 * @param {?} value
 * @param {?} millis
 * @param {?} a3
 * @param {?} error
 * @param {Array} opt_attributes
 * @param {number} keepData
 * @return {undefined}
 */
_yt_player.h.Zi = function(statements, value, millis, a3, error, opt_attributes, keepData) {
  this.context.g.U(statements, "click", _yt_player.Ga(this.Uo, value, millis, a3, error, opt_attributes || [], keepData || 0), this);
  this.context.g.U(statements, "touchstart", _yt_player.Ga(function() {
    /** @type {boolean} */
    this.Yv = false;
  }), this);
  this.context.g.U(statements, "touchmove", _yt_player.Ga(function() {
    /** @type {boolean} */
    this.Yv = true;
  }), this);
};
/**
 * @param {Object} data
 * @param {?} dataAndEvents
 * @param {?} _super
 * @param {boolean} config
 * @param {?} deepDataAndEvents
 * @param {number} isXML
 * @param {?} event
 * @return {?}
 */
_yt_player.h.Uo = function(data, dataAndEvents, _super, config, deepDataAndEvents, isXML, event) {
  if (this.Yv) {
    return false;
  }
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  sort(this, data, _super, config, deepDataAndEvents, isXML);
  return false;
};
/**
 * @return {undefined}
 */
_yt_player.h.show = function() {
  this.Y = (0, _yt_player.F)();
};
/**
 * @return {undefined}
 */
_yt_player.h.hide = function() {
};
/**
 * @return {undefined}
 */
_yt_player.h.destroy = function() {
  _yt_player.Kd(this.la());
};
/**
 * @return {undefined}
 */
_yt_player.h.Fn = function() {
};
_yt_player.q(loop, g);
_yt_player.h = loop.prototype;
/**
 * @return {?}
 */
_yt_player.h.isAvailable = function() {
  var conf;
  if (conf = !!this.o.length) {
    if (conf = this.g.getRootNode()) {
      conf = _yt_player.Kh(conf);
      /** @type {boolean} */
      conf = 173 < conf.width && 173 < conf.height;
    } else {
      /** @type {boolean} */
      conf = false;
    }
  }
  return conf;
};
/**
 * @return {undefined}
 */
_yt_player.h.Fn = function() {
  var errorCallback = this.isAvailable();
  _yt_player.O(this.la(), errorCallback);
  _yt_player.U(this.context.l.getRootNode(), "ytp-iv-drawer-enabled", errorCallback);
  isFunction(this.g);
};
/**
 * @return {undefined}
 */
_yt_player.h.destroy = function() {
  var tag1 = _yt_player.NU(this.g).B;
  if (tag1) {
    tag1.St(false, void 0);
  }
  this.g.getRootNode().removeChild(this.D);
  _yt_player.VF(this.ha);
  _yt_player.sF(this.X);
  if (this.Z) {
    this.Z.dispose();
  }
  if (this.F) {
    this.F.dispose();
  }
  g.prototype.destroy.call(this);
};
/**
 * @param {Object} e
 * @return {undefined}
 */
_yt_player.h.ZM = function(e) {
  this.J.start();
  e.preventDefault();
  e = e || window.event;
  /** @type {number} */
  var d = 0;
  if ("MozMousePixelScroll" == e.type) {
    d = 0 == (e.axis == e.HORIZONTAL_AXIS) ? e.detail : 0;
  } else {
    if (window.opera) {
      d = e.detail;
    } else {
      /** @type {number} */
      d = 0 == e.wheelDelta % 120 ? "WebkitTransform" in window.document.documentElement.style ? window.chrome && 0 == window.navigator.platform.indexOf("Mac") ? e.wheelDeltaY / -30 : e.wheelDeltaY / -1.2 : e.wheelDelta / -1.6 : e.wheelDeltaY / -3;
    }
  }
  if (e = d) {
    this.A.scrollTop += e;
  }
};
/**
 * @param {?} e
 * @return {undefined}
 */
_yt_player.h.kE = function(e) {
  if (!_yt_player.kq(this.g.getRootNode(), "ytp-cards-teaser-shown")) {
    if (this.l != e) {
      this.l = e;
      trim(this);
    }
    if (_yt_player.Nh(this.la())) {
      if (2 == this.context.l.Qa()) {
        /** @type {boolean} */
        var r20 = 1 == ((0, window.isNaN)(void 0) ? this.context.l.gB() : void 0)
      } else {
        r20 = (0, window.isNaN)(void 0) ? this.context.l.Bh() : void 0;
        /** @type {boolean} */
        r20 = 1 == r20 || 0 == r20 && 0 === this.context.l.getCurrentTime();
      }
      if (r20 && e.hc.teaserDurationMs) {
        r20 = {
          teaserText : e.hc.teaserText,
          durationMs : e.hc.teaserDurationMs
        };
        var tag1 = _yt_player.NU(this.g).B;
        if (tag1) {
          tag1.St(true, r20);
        }
      }
    }
    if (!this.na.isActive()) {
      if (!this.B || !this.J.isActive() && this.T) {
        finish(this, e);
      }
      this.na.start(910 + e.hc.teaserDurationMs);
    }
  }
};
/**
 * @param {Object} datum
 * @return {undefined}
 */
_yt_player.h.MV = function(datum) {
  if (!this.B) {
    /** @type {Object} */
    this.l = datum;
    trim(this);
    finish(this, datum);
    handler(this, "YOUTUBE_DRAWER_AUTO_OPEN", false, datum);
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.fJ = function() {
  if (this.B) {
    before(this.context.logger, this.M, 4, _createItem(this).l.close);
    var oldconfig = _yt_player.MG();
    if (oldconfig) {
      if (this.I) {
        equals(oldconfig, this.I);
      }
    }
    complete(this);
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.qJ = function() {
  _yt_player.U(this.D, "iv-drawer-scrolled", 0 < this.A.scrollTop);
};
/**
 * @return {undefined}
 */
_yt_player.h.YL = function() {
  var item = _createItem(this);
  forEach(this.context.logger, 8, item.o, item.l.dW);
  var pdataCur = _yt_player.MG();
  if (pdataCur) {
    if (item) {
      send(pdataCur, item.F);
      send(pdataCur, item.D);
    }
  }
};
/**
 * @param {?} obj
 * @return {undefined}
 */
_yt_player.h.XL = function(obj) {
  var item = _createItem(this);
  var oldconfig = _yt_player.MG();
  if (this.l) {
    if (obj) {
      obj = this.context.logger;
      forEach(obj, 9, item.o, item.l.Dv);
      obj.g.Ni(4, void 0);
      if (oldconfig) {
        equals(oldconfig, item.F);
      }
    } else {
      obj = this.context.logger;
      forEach(obj, 12, item.o, item.l.Dv);
      obj.g.Ni(4, void 0);
      if (oldconfig) {
        equals(oldconfig, item.D);
      }
    }
  } else {
    obj = this.context.logger;
    before(obj, this.M, 12, item.l.Dv);
    obj.g.Ni(4, void 0);
    if (oldconfig) {
      if (this.ga) {
        equals(oldconfig, this.ga);
      }
    }
  }
};
var cache = {
  /** @type {function (?, Object, ?): undefined} */
  collaborator : initialize,
  /** @type {function (?, ?, ?): undefined} */
  donation : publish,
  /** @type {function (?, Object, ?): undefined} */
  episode : handle,
  /** @type {function (?, Object, ?): undefined} */
  movie : handle,
  /** @type {function (?, Object, ?): undefined} */
  playlist : play,
  /** @type {function ((Function|string), Object, ?): undefined} */
  poll : done,
  /** @type {function (Object, ?, ?): undefined} */
  productListing : last,
  /** @type {function (string, Object, ?): undefined} */
  simple : process,
  /** @type {function (?, ?, ?): undefined} */
  tip : all,
  /** @type {function (?, Object, ?): undefined} */
  video : onSuccess
};
_yt_player.q(state, g);
/**
 * @return {undefined}
 */
state.prototype.gq = function() {
  g.prototype.gq.call(this);
  hide(this);
};
_yt_player.q(src, state);
_yt_player.h = src.prototype;
/**
 * @param {Element} now
 * @param {Element} which
 * @param {?} onComplete
 * @param {?} l2
 * @return {undefined}
 */
_yt_player.h.UV = function(now, which, onComplete, l2) {
  this.o.stop();
  if (!this.A) {
    var s = _yt_player.Kh(now);
    if (!this.g) {
      _yt_player.Ih(now, s.width);
      _yt_player.Ih(which, s.width);
    }
    _yt_player.ph(onComplete, "top", s.height - Math.max(Math.min(s.height, l2) / 2 + 10, 20) + "px");
    _yt_player.ph(onComplete, "right", "1px");
    /** @type {boolean} */
    this.A = true;
    _yt_player.O(now, true);
    this.B = new _yt_player.Yt(function() {
      _yt_player.S(this.la(), "iv-branding-active");
    }, 0, this);
    this.B.start();
  }
};
/**
 * @param {?} onComplete
 * @param {Element} which
 * @return {undefined}
 */
_yt_player.h.JK = function(onComplete, which) {
  _yt_player.mq(this.la(), "iv-branding-active");
  this.C = new _yt_player.Yt((0, _yt_player.z)(function() {
    _yt_player.O(onComplete, false);
    if (!this.g) {
      _yt_player.Ih(which, 0);
    }
  }, this), 250);
  this.C.start();
  /** @type {boolean} */
  this.A = false;
};
/**
 * @return {undefined}
 */
_yt_player.h.show = function() {
  if (!this.isActive) {
    state.prototype.show.call(this);
    if (!this.D) {
      _yt_player.S(this.la(), "iv-branding");
      var options = this.annotation.data;
      this.F = options.image_width;
      this.l = _yt_player.K("IMG", {
        src : options.image_url,
        "class" : "branding-img iv-click-target",
        width : options.image_width,
        height : options.image_height
      });
      _yt_player.O(this.l, false);
      var elem = _yt_player.K("DIV", "branding-img-container", this.l);
      this.la().appendChild(elem);
      var index = _yt_player.K("DIV", "iv-branding-context-name");
      _yt_player.Sd(index, options.channel_name);
      var node = _yt_player.K("DIV", "iv-branding-context-subscribe");
      if (elem = options.standalone_subscribe_button_data) {
        this.g = new _yt_player.y_(elem.subscribeText, elem.subscribeCount, elem.unsubscribeText, elem.unsubscribeCount, !!elem.enabled, !!elem.classic, options.channel_id, !!elem.subscribed, elem.feature, options.session_data.itct, elem.signinUrl, this.H.l);
        this.g.ua(node);
      }
      elem = _yt_player.K("DIV", "iv-branding-context-subscribe-caret");
      index = _yt_player.K("DIV", "branding-context-container-inner", elem, index, node);
      _yt_player.O(index, false);
      node = _yt_player.K("DIV", "branding-context-container-outer", index);
      _yt_player.ph(node, "right", this.F + "px");
      this.la().appendChild(node);
      var udataCur = this.annotation.Ta();
      if (udataCur) {
        this.Zi(this.l, udataCur, this.annotation.id, options.session_data, this.annotation.g);
      }
      this.o = new _yt_player.Yt(_yt_player.Ga(this.JK, index, node), 500, this);
      _yt_player.N(this, this.o);
      this.context.g.U(this.la(), "mouseover", (0, _yt_player.z)(this.UV, this, index, node, elem, options.image_height));
      this.context.g.U(this.la(), "mouseout", (0, _yt_player.z)(this.o.start, this.o, void 0));
      /** @type {boolean} */
      this.D = true;
    }
    transition(this.context.logger, this.annotation.g);
    _yt_player.O(this.la(), true);
    /** @type {boolean} */
    this.isActive = true;
    if (this.l) {
      options = this.l;
      /** @type {(number|undefined)} */
      var oldconfig = void 0 === oldconfig ? 0 : oldconfig;
      elem = _yt_player.Lh(options).width;
      index = _yt_player.ua(void 0) ? void 0 : elem;
      _yt_player.wh(options, index);
      oldconfig = new base(options, [index, options.offsetTop], [index - elem - oldconfig, options.offsetTop], 200, easeIn);
      _yt_player.N(this, oldconfig);
      this.context.A.U(oldconfig, "begin", _yt_player.Ga(_yt_player.O, options, true));
      oldconfig.play();
    }
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.hide = function() {
  if (this.isActive) {
    _yt_player.O(this.la(), false);
    /** @type {boolean} */
    this.isActive = false;
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.destroy = function() {
  if (this.g) {
    this.g.dispose();
    /** @type {null} */
    this.g = null;
  }
  state.prototype.destroy.call(this);
};
_yt_player.q(s, state);
_yt_player.h = s.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.show = function() {
  if (!this.isActive) {
    state.prototype.show.call(this);
    if (!this.I) {
      update(this);
      /** @type {boolean} */
      this.I = true;
    }
    _yt_player.O(this.la(), true);
    if (this.annotation) {
      if (this.annotation.g) {
        transition(this.context.logger, this.annotation.g);
      }
    }
    _yt_player.tg(function() {
      _yt_player.mq(this.la(), "iv-promo-inactive");
    }, 100, this);
    this.la().removeAttribute("aria-hidden");
    /** @type {boolean} */
    this.isActive = true;
    isWindow(this);
    toggle(this);
    has(this, this.F);
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.hide = function() {
  if (this.isActive) {
    _yt_player.S(this.la(), "iv-promo-inactive");
    /** @type {boolean} */
    this.isActive = false;
    this.la().setAttribute("aria-hidden", true);
  }
};
/**
 * @param {?} mapper
 * @param {?} graphics
 * @param {?} capture
 * @param {?} opt_coordHeight
 * @param {?} opt_acc
 * @param {?} opt_domHelper
 * @param {?} borderColor
 * @return {?}
 */
_yt_player.h.Uo = function(mapper, graphics, capture, opt_coordHeight, opt_acc, opt_domHelper, borderColor) {
  return this.B ? false : state.prototype.Uo.call(this, mapper, graphics, capture, opt_coordHeight, opt_acc, opt_domHelper, borderColor);
};
/**
 * @param {number} prop
 * @param {Event} deepDataAndEvents
 * @return {undefined}
 */
_yt_player.h.ys = function(prop, deepDataAndEvents) {
  deepDataAndEvents.stopPropagation();
  toggle(this);
  has(this, prop);
  this.g.focus();
};
/**
 * @param {Event} deepDataAndEvents
 * @return {undefined}
 */
_yt_player.h.fK = function(deepDataAndEvents) {
  /** @type {boolean} */
  this.H = true;
  this.ys(500, deepDataAndEvents);
};
/**
 * @return {undefined}
 */
_yt_player.h.eK = function() {
  /** @type {boolean} */
  this.H = false;
  makeGrammar(this);
};
/**
 * @param {?} dataAndEvents
 * @return {undefined}
 */
_yt_player.h.LO = function(dataAndEvents) {
  dataAndEvents.stopPropagation();
  this.hide();
  e(this.context.logger, this.annotation.g);
};
/**
 * @param {?} dataAndEvents
 * @return {undefined}
 */
_yt_player.h.UJ = function(dataAndEvents) {
  dataAndEvents.stopPropagation();
  isWindow(this);
  /** @type {boolean} */
  this.B = true;
  _yt_player.S(this.la(), "iv-promo-collapsed-no-delay");
  this.C.start();
  e(this.context.logger, this.annotation.g);
};
/**
 * @return {undefined}
 */
_yt_player.h.destroy = function() {
  this.C.dispose();
  state.prototype.destroy.call(this);
};
_yt_player.q(run, _yt_player.sV);
_yt_player.h = run.prototype;
/**
 * @param {?} dataAndEvents
 * @param {Object} lng
 * @return {?}
 */
_yt_player.h.wM = function(dataAndEvents, lng) {
  if (!objEquiv(_yt_player.Y(this.g).playerStyle)) {
    return null;
  }
  switch(dataAndEvents) {
    case "loadCustomAnnotationsXml":
      var basePrototype = _yt_player.Vr(lng);
      if (basePrototype) {
        go(this, basePrototype);
      }
      return true;
    case "removeCustomAnnotationById":
      return lng && (this.l && (extractValue(this.l, lng), isFunction(this.g))), true;
  }
  return null;
};
/**
 * @return {?}
 */
_yt_player.h.xM = function() {
  return objEquiv(_yt_player.Y(this.g).playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : [];
};
/**
 * @return {undefined}
 */
_yt_player.h.Tu = function() {
  if (this.C) {
    var s = _yt_player.W_(_yt_player.VU(this.g), true);
    _yt_player.Jh(this.C.element, s.width, s.height);
    _yt_player.wh(this.C.element, s.left, s.top);
  }
  if (this.l) {
    var column = _yt_player.eV(this.g);
    s = this.l;
    column = column.width;
    _yt_player.U(s.D, "iv-drawer-small", 426 >= column);
    _yt_player.U(s.D, "iv-drawer-big", 1280 <= column);
  }
};
/**
 * @param {Object} defer
 * @return {undefined}
 */
_yt_player.h.fT = function(defer) {
  if (!_yt_player.Y(this.g).experiments.g("web_player_update_annotations_module_visibility_killswitch")) {
    this.Pc(defer.state);
  }
  if (_yt_player.X(defer.state, 2)) {
    if (this.Vl()) {
      if (this.WA()) {
        if (2 != this.g.Qa()) {
          this.Tt(false);
        }
      }
    }
    this.St(false);
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.load = function() {
  _yt_player.sV.prototype.load.call(this);
  if (_yt_player.Y(this.g).experiments.g("web_player_update_annotations_module_visibility_killswitch")) {
    this.A.show();
  } else {
    this.Pc(_yt_player.UU(this.g));
  }
  this.I++;
  var event = this.g.getVideoData();
  var cur = event.videoId;
  var options = (0, _yt_player.z)(this.JR, this, cur, this.I);
  var item = (0, _yt_player.z)(function() {
    /** @type {null} */
    this.D = null;
  }, this);
  if (_yt_player.nG()) {
    options = fetch(this, options);
  }
  options = {
    format : "XML",
    wd : options,
    onError : item,
    ad : {}
  };
  if (event.isPharma) {
    /** @type {string} */
    options.ad.pharma = "1";
  }
  /** @type {string} */
  options.method = "POST";
  /** @type {boolean} */
  options.withCredentials = true;
  item = _yt_player.Y(this.g);
  if ("gaming" == item.playerStyle) {
    /** @type {string} */
    options.ad.gaming = "1";
  }
  if (cur = item.C.get(cur)) {
    request(options, cur);
  }
  cur = cur && (cur.Zh || cur.tr);
  if (!event.xn || cur) {
    if (event.Of) {
      ajax(this, event.Of, options);
    } else {
      this.B = (0, _yt_player.z)(this.BM, this, options);
      this.g.addEventListener("videodatachange", this.B);
    }
  }
  _yt_player.mV(this.g, this.C.element, 4);
  this.Tu();
};
/**
 * @param {boolean} left
 * @return {undefined}
 */
_yt_player.h.Pc = function(left) {
  /** @type {boolean} */
  left = !_yt_player.xP(left) && !_yt_player.X(left, 1024);
  _yt_player.sH(this.A, left);
  _yt_player.sH(this.C, left);
};
/**
 * @param {boolean} options
 * @return {undefined}
 */
_yt_player.h.BM = function(options) {
  var RestClass = this.g.getVideoData();
  if (RestClass.Of) {
    if (this.B) {
      this.g.removeEventListener("videodatachange", this.B);
      /** @type {null} */
      this.B = null;
    }
    ajax(this, RestClass.Of, options);
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.unload = function() {
  isUndefinedOrNull(this.Ya);
  _yt_player.kV(this.g, "annotations_module");
  _yt_player.Lb(this.o, function(todo) {
    todo.destroy();
  });
  _yt_player.Lb(this.K, function(todo) {
    todo.destroy();
  });
  /** @type {null} */
  this.H = null;
  if (this.l) {
    this.l.destroy();
    /** @type {null} */
    this.l = null;
    isFunction(this.g);
  }
  /** @type {boolean} */
  this.J = false;
  if (this.D) {
    this.D.abort();
    /** @type {null} */
    this.D = null;
  }
  this.o = {};
  this.K = {};
  this.A.hide();
  _yt_player.sV.prototype.unload.call(this);
  _yt_player.rH(this.C);
  if (this.B) {
    this.g.removeEventListener("videodatachange", this.B);
    /** @type {null} */
    this.B = null;
  }
};
/**
 * @param {?} res
 * @param {Node} parser
 * @param {number} data
 * @return {undefined}
 */
_yt_player.h.JR = function(res, parser, data) {
  /** @type {null} */
  this.D = null;
  if (!node(this, parser, res) && (res = _yt_player.WD(data) && data.responseXML ? data.responseXML : null)) {
    go(this, res);
    _yt_player.S(this.g.getRootNode(), "iv-module-loaded");
    /** @type {Array} */
    res = [];
    var i;
    for (i in this.o) {
      parser = this.o[i].annotation;
      if (parser.segment) {
        if (data = parser.segment, data.g.length) {
          if (data = data.g[0].l || (data.g[0].g || data.g[0].o), !data || 2 > data.length) {
            /** @type {null} */
            data = null;
          } else {
            /** @type {number} */
            var m = data.length - 1;
            /** @type {(null|{end: ?, start: ?})} */
            data = 0 >= data[0].t && 0 >= data[m].t ? null : {
              start : data[0].t,
              end : data[m].t
            };
          }
        } else {
          /** @type {null} */
          data = null;
        }
      } else {
        /** @type {null} */
        data = null;
      }
      if (m = data) {
        if (data = 1E3 * m.start, m = 1E3 * m.end, 0 == data && (data++, m++), !(m < data)) {
          var opts = {
            id : i,
            namespace : "annotations_module"
          };
          if ("marker" == parser.type) {
            /** @type {string} */
            opts.style = "ytp-chapter-marker";
            opts.tooltip = parser.A;
            /** @type {boolean} */
            opts.visible = true;
          }
          parser = new _yt_player.eQ(data, m, opts);
          res.push(parser);
        }
      }
    }
    _yt_player.hV(this.g, res);
  }
};
/**
 * @param {?} dataAndEvents
 * @return {undefined}
 */
_yt_player.h.lD = function(dataAndEvents) {
  if (dataAndEvents == this.g.getVideoData().videoId) {
    if (this.loaded) {
      post(this);
    } else {
      this.load();
    }
  }
};
/**
 * @param {Object} child
 * @return {undefined}
 */
_yt_player.h.yM = function(child) {
  child = child.getId();
  var node = this.o[child];
  if (node) {
    if (!node.o) {
      node = node.annotation;
      slice(this, child);
      transition(this.Ya, node.g);
    }
  }
};
/**
 * @param {Object} record
 * @return {undefined}
 */
_yt_player.h.zM = function(record) {
  convert(this, record.getId());
};
/**
 * @param {Node} d
 * @return {undefined}
 */
_yt_player.h.Iz = function(d) {
  if (d) {
    d.hide();
    errorHandler(this, "shown", false, d.annotation.id);
    this.Xn(d.annotation, "hidden");
  }
};
/**
 * @param {(Node|string)} d
 * @return {undefined}
 */
_yt_player.h.CE = function(d) {
  if (d) {
    d.show();
    errorHandler(this, "shown", true, d.annotation.id);
    this.Xn(d.annotation, "shown");
  }
};
/**
 * @param {Node} key
 * @param {Object} data
 * @param {string} v
 * @return {undefined}
 */
_yt_player.h.wU = function(key, data, v) {
  var t = this.o[key];
  if (t && data.value != v) {
    /** @type {string} */
    data.value = v;
    /** @type {boolean} */
    var value = false;
    pred(t.annotation, function(rel) {
      value = value || rel.value;
    });
    rgb(this, key, data, value);
  }
};
/**
 * @param {Object} data
 * @return {undefined}
 */
_yt_player.h.vQ = function(data) {
  if (data && data.id) {
    var e = data.Ta();
    if (e) {
      var value = parseFloat(e);
      if (value) {
        var response = (0, _yt_player.z)(this.Xn, this, data, "click");
        if ("new" == dispatch(value, e.target) || fail(this, e)) {
          response();
          /** @type {null} */
          response = null;
        }
        cb(this.Ya, data.g, response);
      }
    }
  }
};
/**
 * @param {Object} property
 * @param {string} name
 * @return {undefined}
 */
_yt_player.h.Xn = function(property, name) {
  createTest(property, function(node) {
    if (node.trigger == name && ("openUrl" == node.type && node.url)) {
      var record = this.g.getVideoData();
      var data;
      if (!(data = !fail(this, node.url))) {
        data = change(node.url);
        var value = stringify(node.url);
        if (data) {
          if (record.videoId == data) {
            this.g.ac(value || 0);
          } else {
            record = hasOwnProperty(this).l;
            _yt_player.H0(record.app, data, void 0, void 0, void 0, void 0, void 0);
            if (value) {
              if (hasOwnProperty(this).l.gd()) {
                hasOwnProperty(this).l.ac(value);
              }
            }
          }
          /** @type {boolean} */
          record = true;
        } else {
          /** @type {boolean} */
          record = false;
        }
        /** @type {boolean} */
        data = !record;
      }
      if (data) {
        data = _yt_player.Y(this.g);
        if (record = parseFloat(node.url)) {
          value = lookup(record);
          if (data) {
            if ("com" == value[0]) {
              if ("google" == value[1]) {
                if ("plus" == value[2]) {
                  data = _yt_player.Ga(query, data.pageId, data.Sc);
                  record = new _yt_player.vm(record);
                  _yt_player.zm(record, data(record.o));
                  record = record.toString();
                }
              }
            }
          }
        } else {
          /** @type {null} */
          record = null;
        }
        if (record) {
          this.g.hd();
          node = dispatch(record, node.url.target);
          data = property.itct;
          if ("ei" in _yt_player.dE(record)) {
            record = _yt_player.Vg(record, "ei");
          }
          _yt_player.vV(record, "current" == node ? "_top" : void 0, {
            itct : data
          });
        }
      }
    }
  }, this);
};
/**
 * @return {undefined}
 */
_yt_player.h.SR = function() {
  errorHandler(this, "playerControlShow", false);
};
/**
 * @return {undefined}
 */
_yt_player.h.bU = function() {
  errorHandler(this, "playerControlShow", true);
};
/**
 * @param {Element} ignores
 * @return {undefined}
 */
_yt_player.h.AM = function(ignores) {
  errorHandler(this, "rollOver", true, ignores.id);
};
/**
 * @param {Element} object
 * @return {undefined}
 */
_yt_player.h.Ih = function(object) {
  errorHandler(this, "rollOver", false, object.id);
};
/**
 * @param {Object} o
 * @return {undefined}
 */
_yt_player.h.bR = function(o) {
  if (o) {
    if (o.id) {
      /** @type {boolean} */
      this.o[o.id].o = true;
      convert(this, o.id);
      e(this.Ya, o.g);
      this.Xn(o, "close");
      errorHandler(this, "closed", true, o.id);
    }
  }
};
/**
 * @return {?}
 */
_yt_player.h.Vl = function() {
  return!!this.l && this.l.isAvailable();
};
/**
 * @return {?}
 */
_yt_player.h.WA = function() {
  this.Vl();
  return!!this.l && this.l.B;
};
/**
 * @param {boolean} recurring
 * @param {boolean} type
 * @param {?} deepDataAndEvents
 * @return {undefined}
 */
_yt_player.h.Tt = function(recurring, type, deepDataAndEvents) {
  type = void 0 === type ? false : type;
  this.Vl();
  if (this.l) {
    if (recurring) {
      if (deepDataAndEvents) {
        handler(this.l, deepDataAndEvents, type);
      } else {
        handler(this.l, "YOUTUBE_DRAWER_AUTO_OPEN", type);
      }
    } else {
      complete(this.l);
    }
  }
};
/**
 * @param {boolean} recurring
 * @param {boolean} regex
 * @return {undefined}
 */
_yt_player.h.St = function(recurring, regex) {
  this.g.R(recurring ? "cardsteasershow" : "cardsteaserhide", regex);
};
/**
 * @return {undefined}
 */
_yt_player.h.V = function() {
  _yt_player.Y(this.g).C.unsubscribe("vast_info_card_add", this.lD, this);
  _yt_player.mq(this.g.getRootNode(), "ytp-iv-drawer-open");
  var values = this.M;
  /** @type {number} */
  var i = 0;
  var valuesLen = values.length;
  for (;i < valuesLen;i++) {
    _yt_player.oG(values[i]);
  }
  /** @type {number} */
  this.M.length = 0;
  _yt_player.sV.prototype.V.call(this);
};
var types = {};
/** @type {boolean} */
var isTouchDevice = "ontouchstart" in window.document;
_yt_player.rF(window.document, "blur", bindings, true);
_yt_player.rF(window.document, "change", bindings, true);
_yt_player.rF(window.document, "click", bindings);
_yt_player.rF(window.document, "focus", bindings, true);
_yt_player.rF(window.document, "mouseover", bindings);
_yt_player.rF(window.document, "mouseout", bindings);
_yt_player.rF(window.document, "mousedown", bindings);
_yt_player.rF(window.document, "keydown", bindings);
_yt_player.rF(window.document, "keyup", bindings);
_yt_player.rF(window.document, "keypress", bindings);
_yt_player.rF(window.document, "cut", bindings);
_yt_player.rF(window.document, "paste", bindings);
if (isTouchDevice) {
  _yt_player.rF(window.document, "touchstart", bindings);
  _yt_player.rF(window.document, "touchend", bindings);
  _yt_player.rF(window.document, "touchcancel", bindings);
}
_yt_player.h = assert.prototype;
/**
 * @param {Object} str
 * @return {?}
 */
_yt_player.h.pe = function(str) {
  return _yt_player.$d(str, $(this));
};
/**
 * @return {undefined}
 */
_yt_player.h.unregister = function() {
  _yt_player.VF(this.H);
  /** @type {number} */
  this.H.length = 0;
  _yt_player.HN(this.F);
  /** @type {number} */
  this.F.length = 0;
};
_yt_player.h.init = _yt_player.y;
_yt_player.h.dispose = _yt_player.y;
/**
 * @param {string} type
 * @param {?} property
 * @param {string} name
 * @return {undefined}
 */
_yt_player.h.addBehavior = function(type, property, name) {
  name = $(this, name);
  var prefixed = (0, _yt_player.z)(property, this);
  if (!(type in types)) {
    types[type] = new _yt_player.XC;
  }
  types[type].subscribe(name, prefixed);
  this.D[property] = prefixed;
};
/**
 * @param {string} type
 * @param {?} id
 * @param {string} name
 * @return {undefined}
 */
_yt_player.h.removeBehavior = function(type, id, name) {
  if (type in types) {
    var self = types[type];
    self.unsubscribe($(this, name), this.D[id]);
    if (0 >= self.Dc()) {
      self.dispose();
      delete types[type];
    }
  }
  delete this.D[id];
};
/**
 * @param {?} value
 * @param {string} storageKey
 * @param {boolean} keepData
 * @return {undefined}
 */
_yt_player.h.qj = function(value, storageKey, keepData) {
  var block = this.Ba(value, storageKey);
  if (block && (block = _yt_player.x(block))) {
    var args = _yt_player.$a(arguments, 2);
    _yt_player.ab(args, 0, 0, value);
    block.apply(null, args);
  }
};
/**
 * @param {?} value
 * @param {string} key
 * @return {?}
 */
_yt_player.h.Ba = function(value, key) {
  return _yt_player.bF(value, key);
};
/**
 * @param {?} name
 * @param {string} funcToCall
 * @param {string} value
 * @return {undefined}
 */
_yt_player.h.setData = function(name, funcToCall, value) {
  _yt_player.aF(name, funcToCall, value);
};
_yt_player.A(resp, assert);
_yt_player.ya(resp);
_yt_player.h = resp.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  this.addBehavior("click", this.bG);
  this.addBehavior("keydown", this.sA);
  this.addBehavior("keypress", this.tA);
  subscribe(this, "page-scroll", this.hK);
};
/**
 * @return {undefined}
 */
_yt_player.h.unregister = function() {
  this.removeBehavior("click", this.bG);
  this.removeBehavior("keydown", this.sA);
  this.removeBehavior("keypress", this.tA);
  refresh(this);
  this.l = {};
  resp.ba.unregister.call(this);
};
/**
 * @param {Element} e
 * @return {undefined}
 */
_yt_player.h.bG = function(e) {
  if (e) {
    if (!e.disabled) {
      this.toggle(e);
      this.click(e);
    }
  }
};
/**
 * @param {Element} data
 * @param {string} node
 * @param {KeyboardEvent} e
 * @return {undefined}
 */
_yt_player.h.sA = function(data, node, e) {
  if (!(e.altKey || (e.ctrlKey || (e.shiftKey || e.metaKey))) && (node = spawn(this, data))) {
    /**
     * @param {Node} node
     * @return {?}
     */
    var convertNode = function(node) {
      /** @type {string} */
      var optsData = "";
      if (node.tagName) {
        optsData = node.tagName.toLowerCase();
      }
      return "ul" == optsData || "table" == optsData;
    };
    var child;
    if (convertNode(node)) {
      /** @type {string} */
      child = node;
    } else {
      child = isEmpty(node, convertNode);
    }
    if (child) {
      child = child.tagName.toLowerCase();
      if ("ul" == child) {
        var r20 = this.iM
      } else {
        if ("table" == child) {
          r20 = this.hM;
        }
      }
      if (r20) {
        save(this, data, node, e, (0, _yt_player.z)(r20, this));
      }
    }
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.hK = function() {
  var map = this.l;
  if (0 != _yt_player.Pb(map)) {
    var letter;
    for (letter in map) {
      var node = map[letter];
      var origContext = _yt_player.$d(node.activeButtonNode || node.parentNode, $(this));
      if (void 0 == origContext || void 0 == node) {
        break;
      }
      position(this, origContext, node, true);
    }
  }
};
/**
 * @param {?} args
 * @param {?} dataAndEvents
 * @param {MouseEvent} jqEvent
 * @return {undefined}
 */
_yt_player.h.tA = function(args, dataAndEvents, jqEvent) {
  if (!jqEvent.altKey) {
    if (!jqEvent.ctrlKey) {
      if (!jqEvent.shiftKey) {
        if (!jqEvent.metaKey) {
          args = spawn(this, args);
          if (unbind(args)) {
            jqEvent.preventDefault();
          }
        }
      }
    }
  }
};
/**
 * @param {Element} pattern
 * @param {Text} data
 * @param {Object} types
 * @return {undefined}
 */
_yt_player.h.hM = function(pattern, data, types) {
  var event = _insert(this, data);
  if (event) {
    data = makeElement("table", data);
    var node = makeElement("tr", data);
    node = _yt_player.qd(window.document, "td", null, node).length;
    data = _yt_player.qd(window.document, "td", null, data);
    event = createEvent(event, data, node, types);
    if (-1 != event) {
      cont(this, pattern, data[event]);
      types.preventDefault();
    }
  }
};
/**
 * @param {Element} pattern
 * @param {Text} data
 * @param {Object} e
 * @return {undefined}
 */
_yt_player.h.iM = function(pattern, data, e) {
  if (40 == e.keyCode || 38 == e.keyCode) {
    var event = _insert(this, data);
    if (event) {
      data = (0, _yt_player.Ld)(_yt_player.qd(window.document, "li", null, data), unbind);
      event = createEvent(event, data, 1, e);
      cont(this, pattern, data[event]);
      e.preventDefault();
    }
  }
};
/**
 * @param {Element} context
 * @return {undefined}
 */
_yt_player.h.dG = function(context) {
  if (context) {
    var node = spawn(this, context);
    if (node) {
      context.setAttribute("aria-pressed", "true");
      context.setAttribute("aria-expanded", "true");
      node.originalParentNode = node.parentNode;
      /** @type {Element} */
      node.activeButtonNode = context;
      node.parentNode.removeChild(node);
      var ret;
      if (this.Ba(context, "button-has-sibling-menu")) {
        ret = context.parentNode;
      } else {
        ret = body(this, context);
      }
      ret.appendChild(node);
      /** @type {string} */
      node.style.minWidth = context.offsetWidth - 2 + "px";
      var item = func(this, context);
      if (item) {
        ret.appendChild(item);
      }
      if (ret = !!this.Ba(context, "button-menu-fixed")) {
        this.l[write(context).toString()] = node;
      }
      position(this, context, node, ret);
      _yt_player.YF("yt-uix-button-menu-before-show", context, node);
      removeClass(node);
      if (item) {
        removeClass(item);
      }
      this.qj(context, "button-menu-action", true);
      _yt_player.S(context, $(this, "active"));
      node = (0, _yt_player.z)(this.cG, this, context, false);
      item = (0, _yt_player.z)(this.cG, this, context, true);
      ret = (0, _yt_player.z)(this.wW, this, context, void 0);
      if (!(this.g && spawn(this, this.g) == spawn(this, context))) {
        refresh(this);
      }
      _yt_player.XF("yt-uix-button-menu-show", context);
      _yt_player.sF(this.o);
      /** @type {Array} */
      this.o = [_yt_player.rF(window.document, "click", item), _yt_player.rF(window.document, "contextmenu", node), _yt_player.rF(window, "resize", ret)];
      /** @type {Element} */
      this.g = context;
    }
  }
};
/**
 * @param {?} x
 * @param {?} data
 * @return {undefined}
 */
_yt_player.h.wW = function(x, data) {
  var c = spawn(this, x);
  if (c) {
    if (data) {
      if (data instanceof _yt_player.Uc) {
        c.innerHTML = _yt_player.Vc(data);
      } else {
        _yt_player.Sd(c, data);
      }
    }
    /** @type {boolean} */
    var udataCur = !!this.Ba(x, "button-menu-fixed");
    position(this, x, c, udataCur);
  }
};
/**
 * @return {?}
 */
_yt_player.h.cd = function() {
  return _yt_player.J($(this, "content"), void 0);
};
/**
 * @param {?} properties
 * @param {?} dataAndEvents
 * @param {Text} v
 * @return {undefined}
 */
_yt_player.h.cG = function(properties, dataAndEvents, v) {
  v = _yt_player.tF(v);
  var i = _yt_player.$d(v, $(this));
  if (i) {
    i = spawn(this, i);
    var last = spawn(this, properties);
    if (i == last) {
      return;
    }
  }
  i = _yt_player.$d(v, $(this, "menu"));
  /** @type {boolean} */
  last = i == spawn(this, properties);
  var a = _yt_player.kq(v, $(this, "menu-item"));
  var b = _yt_player.kq(v, $(this, "menu-close"));
  if (!i || last && (a || b)) {
    draw(this, properties);
    if (i) {
      if (dataAndEvents) {
        if (this.Ba(properties, "button-menu-indicate-selected")) {
          if (properties = _yt_player.J($(this, "content"), properties)) {
            _yt_player.Sd(properties, highlight(v));
          }
          setAttribute(this, i, v);
        }
      }
    }
  }
};
/**
 * @param {?} onComplete
 * @return {?}
 */
_yt_player.h.isToggled = function(onComplete) {
  return _yt_player.kq(onComplete, $(this, "toggled"));
};
/**
 * @param {Element} element
 * @return {undefined}
 */
_yt_player.h.toggle = function(element) {
  if (this.Ba(element, "button-toggle")) {
    var context = _yt_player.$d(element, $(this, "group"));
    var indicator = $(this, "toggled");
    var elementRect = _yt_player.kq(element, indicator);
    if (context && this.Ba(context, "button-toggle-group")) {
      var key = this.Ba(context, "button-toggle-group");
      context = _yt_player.rd($(this), context);
      (0, _yt_player.B)(context, function(context) {
        if (context != element || "optional" == key && elementRect) {
          _yt_player.mq(context, indicator);
          context.removeAttribute("aria-pressed");
        } else {
          _yt_player.S(element, indicator);
          context.setAttribute("aria-pressed", "true");
        }
      });
    } else {
      if (elementRect) {
        element.removeAttribute("aria-pressed");
      } else {
        element.setAttribute("aria-pressed", "true");
      }
      _yt_player.pq(element, indicator);
    }
  }
};
/**
 * @param {Element} options
 * @return {undefined}
 */
_yt_player.h.click = function(options) {
  if (spawn(this, options)) {
    var node = spawn(this, options);
    if (node) {
      var container = _yt_player.$d(node.activeButtonNode || node.parentNode, $(this));
      if (container && container != options) {
        draw(this, container);
        _yt_player.XD((0, _yt_player.z)(this.dG, this, options), 1);
      } else {
        if (unbind(node)) {
          draw(this, options);
        } else {
          this.dG(options);
        }
      }
    }
    options.focus();
  }
  this.qj(options, "button-action");
};
_yt_player.A(b, assert);
_yt_player.h = b.prototype;
/**
 * @param {Object} object
 * @return {?}
 */
_yt_player.h.pe = function(object) {
  var obj = assert.prototype.pe.call(this, object);
  return obj ? obj : object;
};
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  subscribe(this, "yt-uix-kbd-nav-move-out-done", this.hide);
};
/**
 * @return {undefined}
 */
_yt_player.h.dispose = function() {
  apply(this);
  b.ba.dispose.call(this);
};
/**
 * @param {?} value
 * @param {string} key
 * @return {?}
 */
_yt_player.h.Ba = function(value, key) {
  var result = b.ba.Ba.call(this, value, key);
  return result ? result : (result = b.ba.Ba.call(this, value, "card-config")) && ((result = _yt_player.x(result)) && result[key]) ? result[key] : null;
};
/**
 * @param {Object} name
 * @return {undefined}
 */
_yt_player.h.show = function(name) {
  var collection = this.pe(name);
  if (collection) {
    _yt_player.S(collection, $(this, "active"));
    var current = callback(this, name, collection);
    if (current) {
      /** @type {Object} */
      current.cardTargetNode = name;
      current.cardRootNode = collection;
      start(this, name, current);
      var indicator = $(this, "card-visible");
      var e = this.Ba(name, "card-delegate-show") && this.Ba(collection, "card-action");
      this.qj(collection, "card-action", name);
      /** @type {Object} */
      this.o = name;
      addClass(current);
      _yt_player.XD((0, _yt_player.z)(function() {
        if (!e) {
          removeClass(current);
          _yt_player.XF("yt-uix-card-show", collection, name, current);
        }
        add(current);
        _yt_player.S(current, indicator);
        _yt_player.XF("yt-uix-kbd-nav-move-in-to", current);
      }, this), 10);
    }
  }
};
/**
 * @param {Object} value
 * @return {undefined}
 */
_yt_player.h.hide = function(value) {
  if (value = this.pe(value)) {
    var cell = _yt_player.pd($(this, "card") + write(value));
    if (cell) {
      _yt_player.mq(value, $(this, "active"));
      _yt_player.mq(cell, $(this, "card-visible"));
      addClass(cell);
      /** @type {null} */
      this.o = null;
      /** @type {null} */
      cell.cardTargetNode = null;
      /** @type {null} */
      cell.cardRootNode = null;
      if (cell.cardMask) {
        _yt_player.Kd(cell.cardMask);
        /** @type {null} */
        cell.cardMask = null;
      }
    }
  }
};
/**
 * @param {Object} name
 * @param {?} r
 * @return {undefined}
 */
_yt_player.h.uW = function(name, r) {
  var arg = this.pe(name);
  if (arg) {
    if (r) {
      var me = this.Cc(arg);
      if (!me) {
        return;
      }
      if (r instanceof _yt_player.Uc) {
        me.innerHTML = _yt_player.Vc(r);
      } else {
        _yt_player.Sd(me, r);
      }
    }
    if (_yt_player.kq(arg, $(this, "active"))) {
      arg = callback(this, name, arg);
      start(this, name, arg);
      removeClass(arg);
      add(arg);
    }
  }
};
/**
 * @param {Object} m
 * @return {?}
 */
_yt_player.h.isActive = function(m) {
  return(m = this.pe(m)) ? _yt_player.kq(m, $(this, "active")) : false;
};
/**
 * @param {?} elem
 * @return {?}
 */
_yt_player.h.Cc = function(elem) {
  var s = elem.cardContentNode;
  if (!s) {
    var ok = $(this, "content");
    var indicator = $(this, "card-content");
    if (!(s = (s = this.Ba(elem, "card-id")) ? _yt_player.pd(s) : _yt_player.J(ok, elem))) {
      s = window.document.createElement("div");
    }
    var j = s;
    _yt_player.mq(j, ok);
    _yt_player.S(j, indicator);
    elem.cardContentNode = s;
  }
  return s;
};
var bounds;
_yt_player.A(classNameToAdd, assert);
_yt_player.ya(classNameToAdd);
_yt_player.h = classNameToAdd.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  this.addBehavior("keydown", this.Bz);
  subscribe(this, "yt-uix-kbd-nav-move-in", this.gC);
  subscribe(this, "yt-uix-kbd-nav-move-in-to", this.bQ);
  subscribe(this, "yt-uix-kbd-move-next", this.hC);
  subscribe(this, "yt-uix-kbd-nav-move-to", this.jo);
};
/**
 * @return {undefined}
 */
_yt_player.h.unregister = function() {
  this.removeBehavior("keydown", this.Bz);
  _yt_player.sF(bounds);
};
/**
 * @param {Object} input
 * @param {string} d
 * @param {Object} e
 * @return {undefined}
 */
_yt_player.h.Bz = function(input, d, e) {
  var code = e.keyCode;
  if (input = _yt_player.$d(input, $(this))) {
    switch(code) {
      case 13:
      ;
      case 32:
        this.gC(input);
        break;
      case 27:
        e.preventDefault();
        e.stopImmediatePropagation();
        a: {
          e = getData(input, "kbdNavMoveOut");
          for (;!e;) {
            e = _yt_player.$d(input.parentElement, $(this));
            if (!e) {
              break a;
            }
            e = getData(e, "kbdNavMoveOut");
          }
          e = _yt_player.pd(e);
          this.jo(e);
          _yt_player.XF("yt-uix-kbd-nav-move-out-done", e);
        }
        break;
      case 40:
      ;
      case 38:
        if ((d = e.target) && _yt_player.kq(input, $(this, "list"))) {
          switch(code) {
            case 40:
              this.hC(d, input);
              break;
            case 38:
              /** @type {boolean} */
              code = window.document.activeElement == input;
              input = recurse(input);
              d = input.indexOf(d);
              if (!(0 > d && !code)) {
                /** @type {number} */
                d = code ? input.length - 1 : (input.length + d - 1) % input.length;
                input[d].focus();
                activate(this, input[d]);
              }
            ;
          }
        }
        e.preventDefault();
    }
  }
};
/**
 * @param {Object} type
 * @return {undefined}
 */
_yt_player.h.gC = function(type) {
  var data = getData(type, "kbdNavMoveIn");
  data = _yt_player.pd(data);
  emit(this, type, data);
  this.jo(data);
};
/**
 * @param {Element} ctxt
 * @return {undefined}
 */
_yt_player.h.bQ = function(ctxt) {
  emit(this, _yt_player.ae(), ctxt);
  this.jo(ctxt);
};
/**
 * @param {Element} element
 * @return {undefined}
 */
_yt_player.h.jo = function(element) {
  if (element) {
    if (_yt_player.Xd(element)) {
      element.focus();
    } else {
      var $element = isEmpty(element, function(dest) {
        return _yt_player.Da(dest) && 1 == dest.nodeType ? _yt_player.Xd(dest) : false;
      });
      if ($element) {
        $element.focus();
      } else {
        element.setAttribute("tabindex", "-1");
        element.focus();
      }
    }
  }
};
/**
 * @param {string} arg
 * @param {Node} array
 * @return {undefined}
 */
_yt_player.h.hC = function(arg, array) {
  /** @type {boolean} */
  var num = window.document.activeElement == array;
  var path = recurse(array);
  var keyName = path.indexOf(arg);
  if (!(0 > keyName && !num)) {
    /** @type {number} */
    num = num ? 0 : (keyName + 1) % path.length;
    path[num].focus();
    activate(this, path[num]);
  }
};
_yt_player.A(d, assert);
_yt_player.ya(d);
_yt_player.h = d.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  this.addBehavior("click", this.eG);
  this.addBehavior("mouseenter", this.cK);
  subscribe(this, "page-scroll", this.rK);
  subscribe(this, "yt-uix-kbd-nav-move-out-done", function(requestUrl) {
    requestUrl = this.pe(requestUrl);
    enqueue(this, requestUrl);
  });
  this.A = new _yt_player.XC;
};
/**
 * @return {undefined}
 */
_yt_player.h.unregister = function() {
  this.removeBehavior("click", this.eG);
  /** @type {null} */
  this.l = this.g = null;
  _yt_player.sF(each(_yt_player.Rb(this.o)));
  this.o = {};
  _yt_player.Lb(this.C, function(onComplete) {
    _yt_player.Kd(onComplete);
  }, this);
  this.C = {};
  _yt_player.$e(this.A);
  /** @type {null} */
  this.A = null;
  d.ba.unregister.call(this);
};
/**
 * @param {(Object|number)} value
 * @param {Element} result
 * @param {Event} opt_e
 * @return {undefined}
 */
_yt_player.h.eG = function(value, result, opt_e) {
  if (value) {
    result = resultSelector(this, value);
    if (!result.disabled) {
      if (hasKey(opt_e.target, result)) {
        resolve(this, value);
      }
    }
  }
};
/**
 * @param {(Object|number)} value
 * @param {?} result
 * @param {Event} opt_e
 * @return {undefined}
 */
_yt_player.h.cK = function(value, result, opt_e) {
  if (value) {
    if (_yt_player.kq(value, $(this, "hover"))) {
      result = resultSelector(this, value);
      if (hasKey(opt_e.target, result)) {
        resolve(this, value, true);
      }
    }
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.rK = function() {
  if (this.g) {
    if (this.l) {
      group(this, this.l, this.g);
    }
  }
};
/**
 * @param {(Object|number)} value
 * @return {undefined}
 */
_yt_player.h.fG = function(value) {
  if (value) {
    var node = mixin(this, value);
    if (node) {
      _yt_player.YF("yt-uix-menu-before-show", value, node);
      if (this.g) {
        if (!hasKey(value, this.g)) {
          enqueue(this, this.l);
        }
      } else {
        /** @type {(Object|number)} */
        this.l = value;
        this.g = node;
        if (!_yt_player.kq(value, $(this, "sibling-content"))) {
          _yt_player.Kd(node);
          window.document.body.appendChild(node);
        }
        /** @type {number} */
        var i = resultSelector(this, value).offsetWidth - 2;
        /** @type {string} */
        node.style.minWidth = i + "px";
      }
      if (i = check(this, value)) {
        if (node.parentNode) {
          node.parentNode.insertBefore(i, node.nextSibling);
        }
      }
      _yt_player.mq(node, $(this, "content-hidden"));
      group(this, value, node);
      _yt_player.lq(resultSelector(this, value), [$(this, "trigger-selected"), "yt-uix-button-toggled"]);
      _yt_player.XF("yt-uix-menu-show", value);
      list(node);
      store(this, value);
      _yt_player.XF("yt-uix-kbd-nav-move-in-to", node);
      var a = (0, _yt_player.z)(this.vX, this, value);
      var idx = (0, _yt_player.z)(this.eM, this, value);
      i = _yt_player.Fa(value).toString();
      /** @type {Array} */
      this.o[i] = [_yt_player.rF(node, "click", idx), _yt_player.rF(window.document, "click", a)];
      if (_yt_player.kq(value, $(this, "indicate-selected"))) {
        a = (0, _yt_player.z)(this.fM, this, value);
        this.o[i].push(_yt_player.rF(node, "click", a));
      }
      if (_yt_player.kq(value, $(this, "hover"))) {
        value = (0, _yt_player.z)(this.uX, this, value);
        this.o[i].push(_yt_player.rF(window.document, "mousemove", value));
      }
    }
  }
};
/**
 * @param {(Object|number)} value
 * @param {?} key
 * @return {undefined}
 */
_yt_player.h.uX = function(value, key) {
  var camelKey = _yt_player.tF(key);
  if (camelKey) {
    var result = resultSelector(this, value);
    if (!hasKey(camelKey, result)) {
      if (!isPlainObject(this, camelKey)) {
        isNode(this, value);
      }
    }
  }
};
/**
 * @param {?} b
 * @param {?} parentNode
 * @return {undefined}
 */
_yt_player.h.vX = function(b, parentNode) {
  var id = _yt_player.tF(parentNode);
  if (id) {
    if (isPlainObject(this, id)) {
      var a = _yt_player.$d(id, $(this, "content"));
      var element = _yt_player.Zd(id, "LI");
      if (element) {
        if (a) {
          if (_yt_player.Qd(a, element)) {
            _yt_player.YF("yt-uix-menu-item-clicked", id);
          }
        }
      }
      id = _yt_player.$d(id, $(this, "close-on-select"));
      if (!id) {
        return;
      }
      a = decode(id);
    }
    enqueue(this, a || b);
  }
};
/**
 * @param {?} isXML
 * @param {?} style
 * @return {undefined}
 */
_yt_player.h.eM = function(isXML, style) {
  var target = _yt_player.tF(style);
  if (target) {
    onClick(this, isXML, target);
  }
};
/**
 * @param {(Object|number)} isXML
 * @param {?} style
 * @return {undefined}
 */
_yt_player.h.fM = function(isXML, style) {
  var target = _yt_player.tF(style);
  if (target) {
    var properties = resultSelector(this, isXML);
    if (properties && (target = _yt_player.Zd(target, "LI"))) {
      if (target = highlight(target).trim(), properties.hasChildNodes()) {
        var html = resp.getInstance();
        if (properties = _yt_player.J($(html, "content"), properties)) {
          _yt_player.Sd(properties, target);
        }
      } else {
        _yt_player.Sd(properties, target);
      }
    }
  }
};
_yt_player.A(config, b);
_yt_player.ya(config);
_yt_player.h = config.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  config.ba.register.call(this);
  this.addBehavior("click", this.Zx, "target");
  this.addBehavior("click", this.Yx, "close");
};
/**
 * @return {undefined}
 */
_yt_player.h.unregister = function() {
  config.ba.unregister.call(this);
  this.removeBehavior("click", this.Zx, "target");
  this.removeBehavior("click", this.Yx, "close");
  var property;
  for (property in this.g) {
    _yt_player.sF(this.g[property]);
  }
  this.g = {};
  for (property in this.l) {
    _yt_player.sF(this.l[property]);
  }
  this.l = {};
};
/**
 * @param {Object} options
 * @param {(Function|string)} data
 * @param {Event} ev
 * @return {undefined}
 */
_yt_player.h.Zx = function(options, data, ev) {
  ev.preventDefault();
  data = _yt_player.Zd(ev.target, "button");
  if (!data || !data.disabled) {
    data = this.Ba(options, "card-target");
    var url;
    if (data) {
      url = _yt_player.u(data) ? window.document.getElementById(data) : data;
    } else {
      /** @type {Object} */
      url = options;
    }
    options = url;
    url = this.pe(options);
    if (!this.Ba(url, "disabled")) {
      if (_yt_player.kq(url, $(this, "active"))) {
        this.hide(options);
        _yt_player.mq(url, $(this, "active"));
      } else {
        this.show(options);
        _yt_player.S(url, $(this, "active"));
      }
    }
  }
};
/**
 * @param {Object} value
 * @return {undefined}
 */
_yt_player.h.show = function(value) {
  config.ba.show.call(this, value);
  var v = this.pe(value);
  var key = _yt_player.Fa(value).toString();
  if (!_yt_player.bF(v, "click-outside-persists")) {
    if (this.g[key]) {
      return;
    }
    v = _yt_player.rF(window.document, "click", (0, _yt_player.z)(this.ay, this, value));
    var spy = _yt_player.rF(window, "blur", (0, _yt_player.z)(this.ay, this, value));
    /** @type {Array} */
    this.g[key] = [v, spy];
  }
  value = _yt_player.rF(window, "resize", (0, _yt_player.z)(this.uW, this, value, void 0));
  /** @type {Object} */
  this.l[key] = value;
};
/**
 * @param {Object} name
 * @return {undefined}
 */
_yt_player.h.hide = function(name) {
  config.ba.hide.call(this, name);
  name = _yt_player.Fa(name).toString();
  var copy = this.g[name];
  if (copy) {
    _yt_player.sF(copy);
    /** @type {null} */
    this.g[name] = null;
  }
  if (copy = this.l[name]) {
    _yt_player.sF(copy);
    delete this.l[name];
  }
};
/**
 * @param {Object} options
 * @param {Event} ev
 * @return {undefined}
 */
_yt_player.h.ay = function(options, ev) {
  /** @type {string} */
  var funcToCall = "yt-uix" + (this.B ? "-" + this.B : "") + "-card";
  /** @type {null} */
  var thisp = null;
  if (ev.target) {
    thisp = _yt_player.$d(ev.target, funcToCall) || _yt_player.$d(decode(ev.target), funcToCall);
  }
  if (!(thisp = thisp || (_yt_player.$d(window.document.activeElement, funcToCall) || _yt_player.$d(decode(window.document.activeElement), funcToCall)))) {
    this.hide(options);
  }
};
/**
 * @param {Object} elm
 * @return {undefined}
 */
_yt_player.h.Yx = function(elm) {
  if (elm = _yt_player.$d(elm, $(this, "card"))) {
    if (elm = elm.cardTargetNode) {
      this.hide(elm);
    }
  }
};
_yt_player.A(ret, b);
_yt_player.ya(ret);
_yt_player.h = ret.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  this.addBehavior("mouseenter", this.cC, "target");
  this.addBehavior("mouseleave", this.eC, "target");
  this.addBehavior("mouseenter", this.dC, "card");
  this.addBehavior("mouseleave", this.fC, "card");
};
/**
 * @return {undefined}
 */
_yt_player.h.unregister = function() {
  this.removeBehavior("mouseenter", this.cC, "target");
  this.removeBehavior("mouseleave", this.eC, "target");
  this.removeBehavior("mouseenter", this.dC, "card");
  this.removeBehavior("mouseleave", this.fC, "card");
};
/**
 * @param {Object} data
 * @return {undefined}
 */
_yt_player.h.cC = function(data) {
  if (model != data) {
    if (model) {
      this.hide(model);
      /** @type {null} */
      model = null;
    }
    var state = (0, _yt_player.z)(this.show, this, data);
    var value = (0, window.parseInt)(this.Ba(data, "delay-show"), 10);
    state = _yt_player.XD(state, -1 < value ? value : 200);
    this.setData(data, "card-timer", state.toString());
    /** @type {Object} */
    model = data;
    if (data.alt) {
      this.setData(data, "card-alt", data.alt);
      /** @type {string} */
      data.alt = "";
    }
    if (data.title) {
      this.setData(data, "card-title", data.title);
      /** @type {string} */
      data.title = "";
    }
  }
};
/**
 * @param {Object} options
 * @return {undefined}
 */
_yt_player.h.eC = function(options) {
  var title = (0, window.parseInt)(this.Ba(options, "card-timer"), 10);
  _yt_player.ZD(title);
  /** @type {boolean} */
  this.pe(options).isCardHidable = true;
  title = (0, window.parseInt)(this.Ba(options, "delay-hide"), 10);
  title = -1 < title ? title : 200;
  _yt_player.XD((0, _yt_player.z)(this.KK, this, options), title);
  if (title = this.Ba(options, "card-alt")) {
    options.alt = title;
  }
  if (title = this.Ba(options, "card-title")) {
    options.title = title;
  }
};
/**
 * @param {Object} options
 * @return {undefined}
 */
_yt_player.h.KK = function(options) {
  if (this.pe(options).isCardHidable) {
    this.hide(options);
    /** @type {null} */
    model = null;
  }
};
/**
 * @param {?} dataAndEvents
 * @return {undefined}
 */
_yt_player.h.dC = function(dataAndEvents) {
  if (dataAndEvents) {
    /** @type {boolean} */
    dataAndEvents.cardRootNode.isCardHidable = false;
  }
};
/**
 * @param {?} dataAndEvents
 * @return {undefined}
 */
_yt_player.h.fC = function(dataAndEvents) {
  if (dataAndEvents) {
    this.hide(dataAndEvents.cardTargetNode);
  }
};
/** @type {null} */
var model = null;
var which = {
  LOADING : "loading",
  FG : "content",
  F4 : "working"
};
_yt_player.h = X.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.show = function() {
  if (!this.ka()) {
    this.D = window.document.activeElement;
    if (!this.M) {
      if (!this.l) {
        this.l = _yt_player.pd("yt-dialog-bg");
        if (!this.l) {
          this.l = _yt_player.Ed("div");
          /** @type {string} */
          this.l.id = "yt-dialog-bg";
          /** @type {string} */
          this.l.className = "yt-dialog-bg";
          window.document.body.appendChild(this.l);
        }
      }
      var vh = window;
      var sh = vh.document;
      /** @type {number} */
      var t = 0;
      if (sh) {
        t = sh.body;
        var docEl = sh.documentElement;
        if (docEl && t) {
          if (vh = _yt_player.wd(vh).height, _yt_player.vd(sh) && docEl.scrollHeight) {
            t = docEl.scrollHeight != vh ? docEl.scrollHeight : docEl.offsetHeight;
          } else {
            sh = docEl.scrollHeight;
            var oh = docEl.offsetHeight;
            if (docEl.clientHeight != oh) {
              sh = t.scrollHeight;
              oh = t.offsetHeight;
            }
            t = sh > vh ? sh > oh ? sh : oh : sh < oh ? sh : oh;
          }
        } else {
          /** @type {number} */
          t = 0;
        }
      }
      /** @type {string} */
      this.l.style.height = t + "px";
      removeClass(this.l);
    }
    this.Jz();
    t = preload(this);
    attach(t);
    this.B = _yt_player.rF(window.document, "keydown", (0, _yt_player.z)(this.OL, this));
    t = this.g;
    docEl = _yt_player.UF("player-added", this.Jz, this);
    _yt_player.aF(t, "player-ready-pubsub-key", docEl);
    if (this.T) {
      this.C = _yt_player.rF(window.document, "click", (0, _yt_player.z)(this.bV, this));
    }
    removeClass(this.g);
    this.o.setAttribute("tabindex", "0");
    focus(this);
    if (!this.H) {
      _yt_player.S(window.document.body, "yt-dialog-active");
    }
    refresh(resp.getInstance());
    apply(config.getInstance());
    apply(ret.getInstance());
    _yt_player.XF("yt-ui-dialog-show-complete", this);
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.Jz = function() {
  if (!this.X) {
    var g = this.g;
    _yt_player.U(window.document.body, "hide-players", true);
    if (g) {
      _yt_player.U(g, "preserve-players", true);
    }
  }
};
/**
 * @param {Object} target
 * @return {undefined}
 */
_yt_player.h.YQ = function(target) {
  target = target.currentTarget;
  if (!target.disabled) {
    target = _yt_player.bF(target, "action") || "";
    this.dismiss(target);
  }
};
/**
 * @param {string} event
 * @return {undefined}
 */
_yt_player.h.dismiss = function(event) {
  if (!this.ka()) {
    this.A.R("pre-all");
    this.A.R("pre-" + event);
    addClass(this.g);
    apply(config.getInstance());
    apply(ret.getInstance());
    this.o.setAttribute("tabindex", "-1");
    if (!fadeOut()) {
      addClass(this.l);
      if (!this.H) {
        _yt_player.mq(window.document.body, "yt-dialog-active");
      }
      flush();
      dismiss();
    }
    if (this.B) {
      _yt_player.sF(this.B);
      /** @type {null} */
      this.B = null;
    }
    if (this.C) {
      _yt_player.sF(this.C);
      /** @type {null} */
      this.C = null;
    }
    var data = this.g;
    if (data) {
      var conf = _yt_player.bF(data, "player-ready-pubsub-key");
      if (conf) {
        _yt_player.VF(conf);
        onLoad(data, "player-ready-pubsub-key");
      }
    }
    this.A.R("post-all");
    _yt_player.XF("yt-ui-dialog-hide-complete", this);
    if ("cancel" == event) {
      _yt_player.XF("yt-ui-dialog-cancelled", this);
    }
    if (this.A) {
      this.A.R("post-" + event);
    }
    if (this.D) {
      this.D.focus();
    }
  }
};
/**
 * @param {?} funcToCall
 * @return {undefined}
 */
_yt_player.h.setTitle = function(funcToCall) {
  _yt_player.Sd(_yt_player.J("yt-dialog-title", this.g), funcToCall);
};
/**
 * @param {Event} event
 * @return {undefined}
 */
_yt_player.h.OL = function(event) {
  _yt_player.XD((0, _yt_player.z)(function() {
    if (!this.K) {
      if (!(27 != event.keyCode)) {
        this.dismiss("cancel");
      }
    }
  }, this), 0);
  if (9 == event.keyCode) {
    if (event.shiftKey) {
      if (_yt_player.kq(window.document.activeElement, "yt-dialog-fg")) {
        event.preventDefault();
      }
    }
  }
};
/**
 * @param {Event} e
 * @return {undefined}
 */
_yt_player.h.bV = function(e) {
  if ("yt-dialog-base" == e.target.className) {
    this.dismiss("cancel");
  }
};
/**
 * @return {?}
 */
_yt_player.h.ka = function() {
  return this.J;
};
/**
 * @return {undefined}
 */
_yt_player.h.dispose = function() {
  if (unbind(this.g)) {
    this.dismiss("dispose");
  }
  _yt_player.sF(this.F);
  /** @type {number} */
  this.F.length = 0;
  _yt_player.XD((0, _yt_player.z)(function() {
    /** @type {null} */
    this.D = null;
  }, this), 0);
  /** @type {null} */
  this.I = this.o = null;
  this.A.dispose();
  /** @type {null} */
  this.A = null;
  /** @type {boolean} */
  this.J = true;
};
/**
 * @param {?} event
 * @return {undefined}
 */
_yt_player.h.CJ = function(event) {
  event.stopPropagation();
  focus(this);
};
_yt_player.va("yt.ui.Dialog", X, void 0);
_yt_player.A(r, assert);
_yt_player.ya(r);
_yt_player.h = r.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  this.addBehavior("click", this.yv, "target");
  this.addBehavior("click", this.hide, "close");
  updateTemp(this);
};
/**
 * @return {undefined}
 */
_yt_player.h.unregister = function() {
  r.ba.unregister.call(this);
  this.removeBehavior("click", this.yv, "target");
  this.removeBehavior("click", this.hide, "close");
  if (this.A) {
    _yt_player.VF(this.A);
    /** @type {null} */
    this.A = null;
  }
  if (this.l) {
    _yt_player.sF(this.l);
    /** @type {null} */
    this.l = null;
  }
};
/**
 * @param {Object} key
 * @return {undefined}
 */
_yt_player.h.yv = function(key) {
  if (!this.g || !unbind(this.g.g)) {
    var value = this.pe(key);
    key = transform(value, key);
    if (!value) {
      value = key ? key.overlayParentNode : null;
    }
    if (value && key) {
      /** @type {boolean} */
      var millis = !!this.Ba(value, "disable-shortcuts") || false;
      /** @type {boolean} */
      var d = !!this.Ba(value, "disable-outside-click-dismiss") || false;
      this.g = new X(key, millis);
      this.o = value;
      var err = _yt_player.J("yt-dialog-fg", key);
      if (err) {
        var body = this.Ba(value, "overlay-class") || "";
        var source = this.Ba(value, "overlay-style") || "default";
        var v = this.Ba(value, "overlay-shape") || "default";
        body = body ? body.split(" ") : [];
        body.push($(this, source));
        body.push($(this, v));
        _yt_player.lq(err, body);
      }
      this.g.show();
      _yt_player.XF("yt-uix-kbd-nav-move-to", err || key);
      updateTemp(this);
      if (!millis) {
        if (!d) {
          millis = (0, _yt_player.z)(function(ev) {
            if (_yt_player.kq(ev.target, "yt-dialog-base")) {
              make_title(this);
            }
          }, this);
          key = _yt_player.J("yt-dialog-base", key);
          this.l = _yt_player.rF(key, "click", millis);
        }
      }
      this.qj(value, "overlay-shown");
      _yt_player.XF("yt-uix-overlay-shown", value);
    }
  }
};
/**
 * @param {?} elem
 * @return {?}
 */
_yt_player.h.Cc = function(elem) {
  return _yt_player.J("yt-dialog-content", elem.overlayContentNode || elem);
};
/**
 * @param {string} options
 * @return {undefined}
 */
_yt_player.h.hide = function(options) {
  if (!(options && options.disabled)) {
    _yt_player.XF("yt-uix-overlay-hide");
  }
};
/**
 * @param {Object} input
 * @return {undefined}
 */
_yt_player.h.show = function(input) {
  this.yv(input);
};
_yt_player.A(old, assert);
_yt_player.ya(old);
_yt_player.h = old.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  this.addBehavior("mouseover", this.xp);
  this.addBehavior("mouseout", this.Oi);
  this.addBehavior("focus", this.Uy);
  this.addBehavior("blur", this.Ix);
  this.addBehavior("click", this.Oi);
  this.addBehavior("touchstart", this.TE);
  this.addBehavior("touchend", this.qq);
  this.addBehavior("touchcancel", this.qq);
};
/**
 * @return {undefined}
 */
_yt_player.h.unregister = function() {
  this.removeBehavior("mouseover", this.xp);
  this.removeBehavior("mouseout", this.Oi);
  this.removeBehavior("focus", this.Uy);
  this.removeBehavior("blur", this.Ix);
  this.removeBehavior("click", this.Oi);
  this.removeBehavior("touchstart", this.TE);
  this.removeBehavior("touchend", this.qq);
  this.removeBehavior("touchcancel", this.qq);
  this.dispose();
  old.ba.unregister.call(this);
};
/**
 * @return {undefined}
 */
_yt_player.h.dispose = function() {
  var unlock;
  for (unlock in this.l) {
    this.Oi(this.l[unlock]);
  }
  this.l = {};
};
/**
 * @param {Element} obj
 * @return {undefined}
 */
_yt_player.h.xp = function(obj) {
  if (!(this.g && 1E3 > (0, _yt_player.F)() - this.g)) {
    var prefix = (0, window.parseInt)(this.Ba(obj, "tooltip-hide-timer"), 10);
    if (prefix) {
      onLoad(obj, "tooltip-hide-timer");
      _yt_player.ZD(prefix);
    }
    prefix = (0, _yt_player.z)(function() {
      createElement(this, obj);
      onLoad(obj, "tooltip-show-timer");
    }, this);
    var index = (0, window.parseInt)(this.Ba(obj, "tooltip-show-delay"), 10) || 0;
    prefix = _yt_player.XD(prefix, index);
    this.setData(obj, "tooltip-show-timer", prefix.toString());
    if (obj.title) {
      this.setData(obj, "tooltip-text", jQuery(this, obj));
      /** @type {string} */
      obj.title = "";
    }
    prefix = _yt_player.Fa(obj).toString();
    /** @type {Element} */
    this.l[prefix] = obj;
  }
};
/**
 * @param {Element} value
 * @return {undefined}
 */
_yt_player.h.Oi = function(value) {
  var label = (0, window.parseInt)(this.Ba(value, "tooltip-show-timer"), 10);
  if (label) {
    _yt_player.ZD(label);
    onLoad(value, "tooltip-show-timer");
  }
  label = (0, _yt_player.z)(function() {
    if (value) {
      var wait = _yt_player.pd(require(this, value));
      if (wait) {
        ready(wait);
        _yt_player.Kd(wait);
        onLoad(value, "content-id");
      }
      wait = _yt_player.pd(require(this, value, "arialabel"));
      _yt_player.Kd(wait);
    }
    onLoad(value, "tooltip-hide-timer");
  }, this);
  label = _yt_player.XD(label, 50);
  this.setData(value, "tooltip-hide-timer", label.toString());
  if (label = this.Ba(value, "tooltip-text")) {
    value.title = label;
  }
  label = _yt_player.Fa(value).toString();
  delete this.l[label];
};
/**
 * @param {Element} walkers
 * @param {?} deepDataAndEvents
 * @return {undefined}
 */
_yt_player.h.Uy = function(walkers, deepDataAndEvents) {
  /** @type {number} */
  this.g = 0;
  this.xp(walkers, deepDataAndEvents);
};
/**
 * @param {Element} isXML
 * @return {undefined}
 */
_yt_player.h.Ix = function(isXML) {
  /** @type {number} */
  this.g = 0;
  this.Oi(isXML);
};
/**
 * @param {Element} walkers
 * @param {boolean} fix
 * @param {Event} orig
 * @return {undefined}
 */
_yt_player.h.TE = function(walkers, fix, orig) {
  if (orig.changedTouches) {
    /** @type {number} */
    this.g = 0;
    if (walkers = commit(fix, $(this), orig.changedTouches[0].target)) {
      this.xp(walkers, fix);
    }
  }
};
/**
 * @param {Element} isXML
 * @param {boolean} fix
 * @param {Event} orig
 * @return {undefined}
 */
_yt_player.h.qq = function(isXML, fix, orig) {
  if (orig.changedTouches) {
    this.g = (0, _yt_player.F)();
    if (isXML = commit(fix, $(this), orig.changedTouches[0].target)) {
      this.Oi(isXML);
    }
  }
};
var arr2 = window.yt && (window.yt.uix && window.yt.uix.widgets_) || {};
_yt_player.va("yt.uix.widgets_", arr2, void 0);
_yt_player.A(target, _yt_player.yN);
_yt_player.A(q, _yt_player.yN);
_yt_player.A(parent, _yt_player.yN);
_yt_player.A(obj, _yt_player.yN);
var conf = new _yt_player.zN("subscription-subscribe", q);
var touchstart = new _yt_player.zN("subscription-subscribe-loading", target);
var touchmove = new _yt_player.zN("subscription-subscribe-loaded", target);
var keypress = new _yt_player.zN("subscription-subscribe-success", parent);
var curr = new _yt_player.zN("subscription-unsubscribe", obj);
var touchend = new _yt_player.zN("subscription-unsubscirbe-loading", target);
var keyup = new _yt_player.zN("subscription-unsubscribe-loaded", target);
var mousemove = new _yt_player.zN("subscription-unsubscribe-success", target);
var keydown = new _yt_player.zN("subscription-enable-ypc", target);
var contextmenu = new _yt_player.zN("subscription-disable-ypc", target);
var input = {};
/** @type {Array} */
var matched = [];
_yt_player.A(props, assert);
_yt_player.ya(props);
/**
 * @return {undefined}
 */
props.prototype.register = function() {
  this.addBehavior("click", this.kw);
  addListener(this, touchstart, this.NC);
  addListener(this, touchmove, this.gG);
  addListener(this, keypress, this.kU);
  addListener(this, touchend, this.NC);
  addListener(this, keyup, this.gG);
  addListener(this, mousemove, this.xU);
  addListener(this, keydown, this.AR);
  addListener(this, contextmenu, this.uR);
};
/**
 * @return {undefined}
 */
props.prototype.unregister = function() {
  this.removeBehavior("click", this.kw);
  props.ba.unregister.call(this);
};
/**
 * @param {?} isXML
 * @return {?}
 */
props.prototype.isSubscribed = function(isXML) {
  return!!this.Ba(isXML, "is-subscribed");
};
var elm = {
  pw : "hover-enabled",
  vG : "yt-uix-button-subscribe",
  wG : "yt-uix-button-subscribed",
  zY : "ypc-enabled",
  DG : "yt-uix-button-subscription-container",
  EG : "yt-subscription-button-disabled-mask-container"
};
var settings = {
  QY : "channel-external-id",
  HG : "subscriber-count-show-when-subscribed",
  IG : "subscriber-count-tooltip",
  JG : "subscriber-count-title",
  D_ : "href",
  M_ : "insecure",
  Ew : "is-subscribed",
  C1 : "parent-url",
  D2 : "clicktracking",
  bI : "show-unsub-confirm-dialog",
  G2 : "show-unsub-confirm-time-frame",
  jI : "style-type",
  fx : "subscribed-timestamp",
  gx : "subscription-id",
  j3 : "target",
  DI : "ypc-enabled"
};
_yt_player.h = props.prototype;
/**
 * @param {string} type
 * @return {undefined}
 */
_yt_player.h.kw = function(type) {
  var url = this.Ba(type, "href");
  var listeners = this.Ba(type, "insecure");
  if (url) {
    type = this.Ba(type, "target") || "_self";
    window.open(url, type);
  } else {
    if (!listeners) {
      if (_yt_player.ZV()) {
        url = this.Ba(type, "channel-external-id");
        listeners = this.Ba(type, "clicktracking");
        var player = toType(this, type);
        var charset = this.Ba(type, "parent-url");
        if (this.Ba(type, "is-subscribed")) {
          var path = this.Ba(type, "subscription-id");
          var route = new obj(url, path, player, type, listeners, charset);
          if (addEvent(this, type)) {
            display(type, url).then(function() {
              _yt_player.BN(curr, route);
            });
          } else {
            _yt_player.BN(curr, route);
          }
        } else {
          _yt_player.BN(conf, new q(url, player, listeners, charset));
        }
      } else {
        on(this, type);
      }
    }
  }
};
/**
 * @param {Node} rgba
 * @return {undefined}
 */
_yt_player.h.NC = function(rgba) {
  this.nj(rgba.g, this.nE, true);
};
/**
 * @param {Node} rgba
 * @return {undefined}
 */
_yt_player.h.gG = function(rgba) {
  this.nj(rgba.g, this.nE, false);
};
/**
 * @param {Node} color
 * @return {undefined}
 */
_yt_player.h.kU = function(color) {
  this.nj(color.g, this.tE, true, color.l);
};
/**
 * @param {Node} rgba
 * @return {undefined}
 */
_yt_player.h.xU = function(rgba) {
  this.nj(rgba.g, this.tE, false);
};
/**
 * @param {Node} rgba
 * @return {undefined}
 */
_yt_player.h.AR = function(rgba) {
  this.nj(rgba.g, this.uJ);
};
/**
 * @param {Node} rgba
 * @return {undefined}
 */
_yt_player.h.uR = function(rgba) {
  this.nj(rgba.g, this.nJ);
};
/**
 * @param {Element} value
 * @param {Object} date1
 * @param {string} isXML
 * @return {undefined}
 */
_yt_player.h.tE = function(value, date1, isXML) {
  if (date1) {
    this.setData(value, settings.Ew, "true");
    if (isXML) {
      this.setData(value, settings.gx, isXML);
    }
    if (this.Ba(value, settings.bI)) {
      date1 = new ok;
      this.setData(value, settings.fx, (date1.getTime() / 1E3).toString());
    }
  } else {
    onLoad(value, settings.Ew);
    onLoad(value, settings.fx);
    onLoad(value, settings.gx);
  }
  setter(this, value);
};
/**
 * @param {Element} node
 * @param {boolean} value
 * @return {undefined}
 */
_yt_player.h.nE = function(node, value) {
  var tmpl = _yt_player.$d(node, elm.DG);
  _yt_player.U(tmpl, elm.EG, value);
  node.setAttribute("aria-busy", value ? "true" : "false");
  /** @type {boolean} */
  node.disabled = value;
};
/**
 * @param {?} name
 * @return {undefined}
 */
_yt_player.h.uJ = function(name) {
  /** @type {boolean} */
  var b = !!this.Ba(name, "ypc-item-type");
  /** @type {boolean} */
  var c = !!this.Ba(name, "ypc-item-id");
  if (!this.Ba(name, "ypc-enabled")) {
    if (b) {
      if (c) {
        _yt_player.S(name, "ypc-enabled");
        this.setData(name, settings.DI, "true");
      }
    }
  }
};
/**
 * @param {Element} value
 * @return {undefined}
 */
_yt_player.h.nJ = function(value) {
  if (this.Ba(value, "ypc-enabled")) {
    _yt_player.mq(value, "ypc-enabled");
    onLoad(value, "ypc-enabled");
  }
};
/**
 * @param {?} iface
 * @param {Function} callback
 * @param {?} dataAndEvents
 * @return {undefined}
 */
_yt_player.h.QI = function(iface, callback, dataAndEvents) {
  var args = _yt_player.$a(arguments, 2);
  (0, _yt_player.B)(iface, function(results) {
    callback.apply(this, _yt_player.Xa(results, args));
  }, this);
};
/**
 * @param {?} isXML
 * @param {?} dataAndEvents
 * @param {boolean} recurring
 * @return {undefined}
 */
_yt_player.h.nj = function(isXML, dataAndEvents, recurring) {
  var applyArgs = increment(this, isXML);
  applyArgs = _yt_player.Xa([applyArgs], _yt_player.$a(arguments, 1));
  this.QI.apply(this, applyArgs);
};
/** @type {function (string): undefined} */
_yt_player.iY.annotations_module = run;
/** @type {function (Text): undefined} */
_yt_player.iY.creatorendscreen = Class;
var player = props.getInstance();
var i = $(player);
if (!(i in arr2)) {
  player.register();
  subscribe(player, "yt-uix-init-" + i, player.init);
  subscribe(player, "yt-uix-dispose-" + i, player.dispose);
  arr2[i] = player;
}
;