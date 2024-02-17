/** @type {global this} */
var window = this;
/**
 * @param {Object} minSlider
 * @param {Function} matcherFunction
 * @return {undefined}
 */
var ova = function(minSlider, matcherFunction) {
  /** @type {boolean} */
  var c = false;
  var r20 = minSlider.subscribe("ROOT_MENU_REMOVED", function(dataAndEvents) {
    if (!c) {
      /** @type {boolean} */
      c = true;
      this.Ud(r20);
      matcherFunction.apply(void 0, arguments);
    }
  }, minSlider);
};
/**
 * @param {Node} exports
 * @param {Text} callback
 * @param {Text} basis
 * @param {(number|string)} host
 * @return {undefined}
 */
var pva = function(exports, callback, basis, host) {
  basis = (0, _yt_player.z)(basis, host || exports.l);
  callback = _yt_player.AF(callback, "change", basis, "iv-card-poll-choice-input");
  exports.g.push(callback);
};
/**
 * @param {Function} ll
 * @return {?}
 */
var qva = function(ll) {
  if (!ll.g) {
    ll.g = new _yt_player.XC;
    _yt_player.N(ll, ll.g);
  }
  return ll.g;
};
/**
 * @param {?} next
 * @return {undefined}
 */
var U1 = function(next) {
  next.R("cardstatechange", _yt_player.cV(next) && _yt_player.dV(next) ? 1 : 0);
};
/**
 * @param {?} dataAndEvents
 * @return {?}
 */
var rva = function(dataAndEvents) {
  /** @type {Array} */
  var ret = [];
  /** @type {number} */
  var idx = 0;
  for (;idx < arguments.length;idx++) {
    var str = arguments[idx];
    if (_yt_player.Aa(str)) {
      /** @type {number} */
      var i = 0;
      for (;i < str.length;i += 8192) {
        var names = _yt_player.$a(str, i, i + 8192);
        names = rva.apply(null, names);
        /** @type {number} */
        var y = 0;
        for (;y < names.length;y++) {
          ret.push(names[y]);
        }
      }
    } else {
      ret.push(str);
    }
  }
  return ret;
};
/**
 * @param {Element} td
 * @param {Function} add
 * @param {Array} el
 * @param {boolean} deepDataAndEvents
 * @return {?}
 */
var sva = function(td, add, el, deepDataAndEvents) {
  if (null != td) {
    td = td.firstChild;
    for (;td;) {
      if (add(td) && (el.push(td), deepDataAndEvents) || sva(td, add, el, deepDataAndEvents)) {
        return true;
      }
      td = td.nextSibling;
    }
  }
  return false;
};
/**
 * @param {?} deepDataAndEvents
 * @param {Function} add
 * @return {?}
 */
var V1 = function(deepDataAndEvents, add) {
  /** @type {Array} */
  var failuresLink = [];
  return sva(deepDataAndEvents, add, failuresLink, true) ? failuresLink[0] : void 0;
};
/**
 * @param {Object} el
 * @param {Array} S
 * @param {boolean} deepDataAndEvents
 * @return {undefined}
 */
var vva = function(el, S, deepDataAndEvents) {
  if (!(el.nodeName in tva)) {
    if (3 == el.nodeType) {
      if (deepDataAndEvents) {
        S.push(String(el.nodeValue).replace(/(\r\n|\r|\n)/g, ""));
      } else {
        S.push(el.nodeValue);
      }
    } else {
      if (el.nodeName in uva) {
        S.push(uva[el.nodeName]);
      } else {
        el = el.firstChild;
        for (;el;) {
          vva(el, S, deepDataAndEvents);
          el = el.nextSibling;
        }
      }
    }
  }
};
/**
 * @param {string} el
 * @return {?}
 */
var W1 = function(el) {
  if (_yt_player.Xta && (null !== el && "innerText" in el)) {
    el = el.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  } else {
    /** @type {Array} */
    var UNICODE_SPACES = [];
    vva(el, UNICODE_SPACES, true);
    /** @type {string} */
    el = UNICODE_SPACES.join("");
  }
  el = el.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  el = el.replace(/\u200B/g, "");
  if (!_yt_player.Xta) {
    el = el.replace(/ +/g, " ");
  }
  if (" " != el) {
    el = el.replace(/^\s*/, "");
  }
  return el;
};
/**
 * @param {Object} data
 * @return {?}
 */
var wva = function(data) {
  return new _yt_player.bh(data.left, data.top, data.right - data.left, data.bottom - data.top);
};
/**
 * @param {Object} el
 * @return {?}
 */
var X1 = function(el) {
  return "rtl" == _yt_player.uh(el, "direction");
};
/**
 * @param {Object} form
 * @return {?}
 */
var Ava = function(form) {
  var value = _yt_player.uh(form, "fontSize");
  var target = (target = value.match(xva)) && target[0] || null;
  if (value && "px" == target) {
    return(0, window.parseInt)(value, 10);
  }
  if (_yt_player.yd) {
    if (String(target) in yva) {
      return _yt_player.Oh(form, value, "left", "pixelLeft");
    }
    if (form.parentNode && (1 == form.parentNode.nodeType && String(target) in zva)) {
      return form = form.parentNode, target = _yt_player.uh(form, "fontSize"), _yt_player.Oh(form, value == target ? "1em" : value, "left", "pixelLeft");
    }
  }
  target = _yt_player.K("SPAN", {
    style : "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
  });
  form.appendChild(target);
  value = target.offsetHeight;
  _yt_player.Kd(target);
  return value;
};
/**
 * @param {number} n1
 * @param {number} n2
 * @return {undefined}
 */
var Y1 = function(n1, n2) {
  this.start = n1 < n2 ? n1 : n2;
  this.end = n1 < n2 ? n2 : n1;
};
/**
 * @param {Node} element
 * @param {string} key
 * @return {?}
 */
var Z1 = function(element, key) {
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
 * @param {(Object|number)} val
 * @param {number} opt_month
 * @param {number} opt_date
 * @param {number} d
 * @param {number} opt_minutes
 * @param {number} opt_seconds
 * @param {number} dataAndEvents
 * @return {undefined}
 */
var $1 = function(val, opt_month, opt_date, d, opt_minutes, opt_seconds, dataAndEvents) {
  /** @type {Date} */
  this.date = _yt_player.ua(val) ? new Date(val, opt_month || 0, opt_date || 1, d || 0, opt_minutes || 0, opt_seconds || 0, dataAndEvents || 0) : new Date(val && val.getTime ? val.getTime() : (0, _yt_player.F)());
};
/**
 * @param {(Array|string)} methodName
 * @return {undefined}
 */
var c2 = function(methodName) {
  methodName = _yt_player.Fa(methodName);
  delete a2[methodName];
  if (_yt_player.Yb(a2)) {
    if (b2) {
      b2.stop();
    }
  }
};
/**
 * @return {undefined}
 */
var Cva = function() {
  if (!b2) {
    b2 = new _yt_player.Yt(function() {
      Bva();
    }, 20);
  }
  var timer = b2;
  if (!timer.isActive()) {
    timer.start();
  }
};
/**
 * @return {undefined}
 */
var Bva = function() {
  var ru = (0, _yt_player.F)();
  _yt_player.Lb(a2, function(relativeToItem) {
    Dva(relativeToItem, ru);
  });
  if (!_yt_player.Yb(a2)) {
    Cva();
  }
};
/**
 * @param {?} mapper
 * @param {Object} anim
 * @return {undefined}
 */
var Eva = function(mapper, anim) {
  _yt_player.bf.call(this, mapper);
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
 * @param {?} duration
 * @param {?} b
 * @return {undefined}
 */
var d2 = function(x, y, duration, b) {
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
  this.duration = duration;
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
var Dva = function(item, now) {
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
  Fva(item, item.progress);
  if (1 == item.progress) {
    /** @type {number} */
    item.g = 0;
    c2(item);
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
 * @param {Function} ll
 * @return {undefined}
 */
var Fva = function(obj, ll) {
  if (_yt_player.Ca(obj.B)) {
    ll = obj.B(ll);
  }
  /** @type {Array} */
  obj.coords = Array(obj.l.length);
  /** @type {number} */
  var i = 0;
  for (;i < obj.l.length;i++) {
    obj.coords[i] = (obj.D[i] - obj.l[i]) * ll + obj.l[i];
  }
};
/**
 * @param {?} element
 * @param {?} mapper
 * @param {?} graphics
 * @param {?} capture
 * @param {?} opt_coordHeight
 * @return {undefined}
 */
var e2 = function(element, mapper, graphics, capture, opt_coordHeight) {
  d2.call(this, mapper, graphics, capture, opt_coordHeight);
  this.element = element;
};
/**
 * @param {?} b
 * @param {Array} event
 * @param {Array} arg
 * @param {?} a
 * @param {?} x
 * @return {undefined}
 */
var f2 = function(b, event, arg, a, x) {
  if (2 != event.length || 2 != arg.length) {
    throw Error("Start and end points must be 2D");
  }
  e2.apply(this, arguments);
};
/**
 * @param {?} pos
 * @return {?}
 */
var Gva = function(pos) {
  return Math.pow(pos, 3);
};
/**
 * @param {number} t
 * @return {?}
 */
var Hva = function(t) {
  return 3 * t * t - 2 * t * t * t;
};
/**
 * @param {Object} child
 * @param {number} obj
 * @return {?}
 */
var Iva = function(child, obj) {
  return(obj & 8 && X1(child) ? obj ^ 4 : obj) & -9;
};
/**
 * @param {Object} r
 * @param {Object} s
 * @param {number} obj
 * @param {?} size
 * @param {Object} style
 * @param {Object} f
 * @param {?} n
 * @return {?}
 */
var Jva = function(r, s, obj, size, style, f, n) {
  r = r.clone();
  var i = Iva(s, obj);
  obj = _yt_player.Kh(s);
  n = n ? n.clone() : obj.clone();
  r = _yt_player.WC(r, n, i, size, style, f);
  if (r.status & 496) {
    return r.status;
  }
  _yt_player.wh(s, _yt_player.gh(r.rect));
  n = _yt_player.fh(r.rect);
  if (!_yt_player.kd(obj, n)) {
    size = n;
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
  return r.status;
};
/**
 * @param {number} text
 * @param {number} result
 * @param {Object} object
 * @param {number} contexts
 * @param {Object} a
 * @param {?} recurring
 * @param {number} opt_attributes
 * @return {?}
 */
var g2 = function(text, result, object, contexts, a, recurring, opt_attributes) {
  var element;
  if (element = object.offsetParent) {
    /** @type {boolean} */
    var data = "HTML" == element.tagName || "BODY" == element.tagName;
    if (!data || "static" != _yt_player.uh(element, "position")) {
      var bounds = _yt_player.Ch(element);
      if (!data) {
        data = X1(element);
        var parent;
        if (parent = data) {
          parent = _yt_player.bM && _yt_player.Mn(10);
          var obj = _yt_player.Uta && 0 <= _yt_player.Cb(_yt_player.Fua, 10);
          parent = _yt_player.rh || (parent || obj);
        }
        data = parent ? -element.scrollLeft : !data || (_yt_player.oH && _yt_player.rc("8") || "visible" == _yt_player.uh(element, "overflowX")) ? element.scrollLeft : element.scrollWidth - element.clientWidth - element.scrollLeft;
        bounds = _yt_player.jd(bounds, new _yt_player.hd(data, element.scrollTop));
      }
    }
  }
  element = bounds || new _yt_player.hd;
  bounds = _yt_player.Lh(text);
  if (data = _yt_player.Dh(text)) {
    _yt_player.eh(bounds, wva(data));
  }
  data = _yt_player.od(text);
  obj = _yt_player.od(object);
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
    bounds.left += obj.x;
    bounds.top += obj.y;
  }
  text = Iva(text, result);
  result = bounds.left;
  if (text & 4) {
    result += bounds.width;
  } else {
    if (text & 2) {
      result += bounds.width / 2;
    }
  }
  result = new _yt_player.hd(result, bounds.top + (text & 1 ? bounds.height : 0));
  result = _yt_player.jd(result, element);
  if (a) {
    result.x += (text & 4 ? -1 : 1) * a.x;
    result.y += (text & 1 ? -1 : 1) * a.y;
  }
  var o;
  if (opt_attributes) {
    if (o = _yt_player.Dh(object)) {
      o.top -= element.y;
      o.right -= element.x;
      o.bottom -= element.y;
      o.left -= element.x;
    }
  }
  return Jva(result, object, contexts, recurring, o, opt_attributes, void 0);
};
/**
 * @param {Element} element
 * @param {string} name
 * @return {undefined}
 */
var h2 = function(element, name) {
  if (element) {
    if (element.dataset) {
      delete element.dataset[_yt_player.$E(name)];
    } else {
      element.removeAttribute("data-" + name);
    }
  }
};
/**
 * @param {?} o
 * @return {?}
 */
var i2 = function(o) {
  var className = o.__yt_uid_key;
  if (!className) {
    className = (0, _yt_player.Pua)();
    o.__yt_uid_key = className;
  }
  return className;
};
/**
 * @param {(Object|number)} a
 * @param {?} deepDataAndEvents
 * @return {?}
 */
var j2 = function(a, deepDataAndEvents) {
  a = _yt_player.pd(a);
  deepDataAndEvents = _yt_player.pd(deepDataAndEvents);
  return!!_yt_player.Yd(a, function(dataAndEvents) {
    return dataAndEvents === deepDataAndEvents;
  }, true, void 0);
};
/**
 * @param {string} name
 * @param {string} url_params
 * @return {?}
 */
var Kva = function(name, url_params) {
  var names = _yt_player.qd(window.document, name, null, url_params);
  return names.length ? names[0] : null;
};
/**
 * @return {undefined}
 */
var Lva = function() {
  _yt_player.U(window.document.body, "hide-players", false);
  var r20 = _yt_player.rd("preserve-players");
  (0, _yt_player.B)(r20, function(deepDataAndEvents) {
    _yt_player.mq(deepDataAndEvents, "preserve-players");
  });
};
/**
 * @param {Element} element
 * @return {undefined}
 */
var Mva = function(element) {
  if (window.document.createEvent) {
    /** @type {(Event|null)} */
    var evt = window.document.createEvent("HTMLEvents");
    evt.initEvent("click", true, true);
    element.dispatchEvent(evt);
  } else {
    evt = window.document.createEventObject();
    element.fireEvent("onclick", evt);
  }
};
/**
 * @param {?} g
 * @return {undefined}
 */
var Nva = function(g) {
  this.g = g;
};
/**
 * @param {?} deepDataAndEvents
 * @return {?}
 */
var k2 = function(deepDataAndEvents) {
  var result = {};
  if (void 0 !== deepDataAndEvents.g.trackingParams) {
    result.trackingParams = deepDataAndEvents.g.trackingParams;
  } else {
    result.veType = deepDataAndEvents.g.veType;
    if (null != deepDataAndEvents.g.veCounter) {
      result.veCounter = deepDataAndEvents.g.veCounter;
    }
    if (null != deepDataAndEvents.g.elementIndex) {
      result.elementIndex = deepDataAndEvents.g.elementIndex;
    }
  }
  if (void 0 !== deepDataAndEvents.g.dataElement) {
    result.dataElement = k2(deepDataAndEvents.g.dataElement);
  }
  if (void 0 !== deepDataAndEvents.g.youtubeData) {
    result.youtubeData = deepDataAndEvents.g.youtubeData;
  }
  return result;
};
/**
 * @param {?} dataAndEvents
 * @return {?}
 */
var l2 = function(dataAndEvents) {
  return new Nva({
    trackingParams : dataAndEvents
  });
};
/**
 * @return {?}
 */
var Ova = function() {
  var veType = _yt_player.LG(0);
  var Ova;
  if (veType) {
    Ova = new Nva({
      veType : veType,
      youtubeData : void 0
    });
  } else {
    /** @type {null} */
    Ova = null;
  }
  return Ova;
};
/**
 * @param {Element} second
 * @param {boolean} recurring
 * @return {undefined}
 */
var Pva = function(second, recurring) {
  if (second = _yt_player.pd(second)) {
    if (second.style) {
      _yt_player.O(second, recurring);
      _yt_player.U(second, "hid", !recurring);
    }
  }
};
/**
 * @param {?} deepDataAndEvents
 * @return {?}
 */
var m2 = function(deepDataAndEvents) {
  return(deepDataAndEvents = _yt_player.pd(deepDataAndEvents)) ? _yt_player.Nh(deepDataAndEvents) && !_yt_player.kq(deepDataAndEvents, "hid") : false;
};
/**
 * @param {?} elem
 * @return {undefined}
 */
var n2 = function(elem) {
  (0, _yt_player.B)(arguments, function(o) {
    if (!_yt_player.Ba(o) || o instanceof window.Element) {
      Pva(o, true);
    } else {
      (0, _yt_player.B)(o, function(classNames) {
        n2(classNames);
      });
    }
  });
};
/**
 * @param {?} key
 * @return {undefined}
 */
var o2 = function(key) {
  (0, _yt_player.B)(arguments, function(o) {
    if (!_yt_player.Ba(o) || o instanceof window.Element) {
      Pva(o, false);
    } else {
      (0, _yt_player.B)(o, function(subKey) {
        o2(subKey);
      });
    }
  });
};
/**
 * @param {Object} settings
 * @param {Object} options
 * @param {?} o
 * @return {undefined}
 */
var p2 = function(settings, options, o) {
  /** @type {Object} */
  this.id = settings;
  this.timestamp = options.timestamp || 0;
  this.type = options.card_type;
  this.teaserText = options.teaser_text;
  this.teaserDurationMs = options.teaser_duration_ms;
  this.startMs = options.start_ms;
  this.autoOpen = options.auto_open || false;
  this.Rd = options.session_data || {};
  this.o = o;
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
  this.C = l2(options.card);
  this.F = l2(options.teaser);
  this.D = l2(options.icon);
};
/**
 * @param {Function} dataAndEvents
 * @param {string} rs
 * @return {undefined}
 */
var q2 = function(dataAndEvents, rs) {
  _yt_player.Df.call(this);
  /** @type {Function} */
  this.El = dataAndEvents;
  /** @type {string} */
  this.rs = rs;
  /** @type {boolean} */
  this[_yt_player.gf] = false;
};
/**
 * @param {string} elem
 * @param {number} r
 * @param {Object} s
 * @param {Object} options
 * @return {undefined}
 */
var u2 = function(elem, r, s, options) {
  q2.call(this, elem, r);
  elem = this.rs;
  r = this.la();
  if (s) {
    r.setAttribute("stroke", s.g);
    r.setAttribute("stroke-opacity", 1);
    s = s.Cb();
    if (_yt_player.u(s) && -1 != s.indexOf("px")) {
      r.setAttribute("stroke-width", (0, window.parseFloat)(s) / Qva(elem));
    } else {
      r.setAttribute("stroke-width", s);
    }
  } else {
    r.setAttribute("stroke", "none");
  }
  /** @type {Object} */
  this.fill = options;
  s = this.rs;
  elem = this.la();
  if (options instanceof r2) {
    elem.setAttribute("fill", options.H);
    elem.setAttribute("fill-opacity", options.I);
  } else {
    if (options instanceof s2) {
      /** @type {string} */
      r = "lg-" + options.B + "-" + options.D + "-" + options.C + "-" + options.F + "-" + options.g + "-" + options.l;
      var elements = r in s.l ? s.l[r] : null;
      if (!elements) {
        elements = t2(s, "linearGradient", {
          x1 : options.B,
          y1 : options.D,
          x2 : options.C,
          y2 : options.F,
          gradientUnits : "userSpaceOnUse"
        });
        /** @type {string} */
        var e = "stop-color:" + options.g;
        if (_yt_player.ua(options.o)) {
          e += ";stop-opacity:" + options.o;
        }
        e = t2(s, "stop", {
          offset : "0%",
          style : e
        });
        elements.appendChild(e);
        /** @type {string} */
        e = "stop-color:" + options.l;
        if (_yt_player.ua(options.A)) {
          e += ";stop-opacity:" + options.A;
        }
        options = t2(s, "stop", {
          offset : "100%",
          style : e
        });
        elements.appendChild(options);
        elements = Rva(s, r, elements);
      }
      elem.setAttribute("fill", "url(#" + elements + ")");
    } else {
      elem.setAttribute("fill", "none");
    }
  }
};
/**
 * @return {undefined}
 */
var Sva = function() {
};
/**
 * @param {?} mapper
 * @param {?} graphics
 * @return {undefined}
 */
var Tva = function(mapper, graphics) {
  q2.call(this, mapper, graphics);
};
/**
 * @return {undefined}
 */
var v2 = function() {
  /** @type {Array} */
  this.rb = [];
  /** @type {Array} */
  this.Ka = [];
  /** @type {Array} */
  this.Ce = [];
};
/**
 * @param {?} elem
 * @param {number} val
 * @param {number} a
 * @param {number} expectedHashCode
 * @return {undefined}
 */
var w2 = function(elem, val, a, expectedHashCode) {
  /** @type {number} */
  var newOptions = elem.Zd[0] - val * Math.cos(_yt_player.gd(expectedHashCode)) + val * Math.cos(_yt_player.gd(expectedHashCode + 90));
  /** @type {number} */
  var fromAngle = elem.Zd[1] - a * Math.sin(_yt_player.gd(expectedHashCode)) + a * Math.sin(_yt_player.gd(expectedHashCode + 90));
  elem.rb.push(3);
  elem.Ka.push(1);
  elem.Ce.push(val, a, expectedHashCode, 90, newOptions, fromAngle);
  /** @type {boolean} */
  elem.Jm = false;
  /** @type {Array} */
  elem.Zd = [newOptions, fromAngle];
};
/**
 * @param {?} node
 * @param {Function} format
 * @return {undefined}
 */
var Vva = function(node, format) {
  var template = node.Ce;
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var j = 0;
  var jl = node.rb.length;
  for (;j < jl;j++) {
    var sel = node.rb[j];
    /** @type {number} */
    var segmentLength = Uva[sel] * node.Ka[j];
    format(sel, template.slice(i, i + segmentLength));
    i += segmentLength;
  }
};
/**
 * @param {?} mapper
 * @param {?} graphics
 * @param {?} capture
 * @param {?} opt_coordHeight
 * @return {undefined}
 */
var Wva = function(mapper, graphics, capture, opt_coordHeight) {
  u2.call(this, mapper, graphics, capture, opt_coordHeight);
};
/**
 * @param {?} l
 * @param {?} g
 * @return {undefined}
 */
var x2 = function(l, g) {
  this.l = l;
  this.g = g;
};
/**
 * @param {?} pixelWidth
 * @param {?} pixelHeight
 * @param {(number|string)} y2
 * @param {string} d
 * @param {?} mapper
 * @return {undefined}
 */
var y2 = function(pixelWidth, pixelHeight, y2, d, mapper) {
  _yt_player.Tu.call(this, mapper);
  this.width = pixelWidth;
  this.height = pixelHeight;
  this.o = y2 || null;
  this.K = d || null;
};
/**
 * @param {Object} c
 * @return {?}
 */
var Qva = function(c) {
  var viewSize = c.Hj();
  return viewSize ? viewSize.width / (c.o ? new _yt_player.I(c.o, c.K) : c.Hj()).width : 0;
};
/**
 * @param {?} b
 * @param {?} d
 * @param {number} arg
 * @param {?} dataAndEvents
 * @param {?} g
 * @param {?} l
 * @param {Function} ll
 * @param {Function} subscription
 * @return {undefined}
 */
var s2 = function(b, d, arg, dataAndEvents, g, l, ll, subscription) {
  this.B = b;
  this.D = d;
  /** @type {number} */
  this.C = arg;
  this.F = dataAndEvents;
  this.g = g;
  this.l = l;
  this.o = _yt_player.t(ll) ? ll : null;
  this.A = _yt_player.t(subscription) ? subscription : null;
};
/**
 * @param {?} dataAndEvents
 * @param {number} value
 * @return {undefined}
 */
var r2 = function(dataAndEvents, value) {
  this.H = dataAndEvents;
  this.I = null == value ? 1 : value;
};
/**
 * @param {?} mapper
 * @param {?} graphics
 * @return {undefined}
 */
var z2 = function(mapper, graphics) {
  q2.call(this, mapper, graphics);
};
/**
 * @param {?} mapper
 * @param {?} graphics
 * @param {?} capture
 * @param {?} opt_coordHeight
 * @return {undefined}
 */
var Xva = function(mapper, graphics, capture, opt_coordHeight) {
  u2.call(this, mapper, graphics, capture, opt_coordHeight);
};
/**
 * @param {?} mapper
 * @param {?} graphics
 * @param {?} capture
 * @param {?} opt_coordHeight
 * @param {?} opt_acc
 * @return {undefined}
 */
var A2 = function(mapper, graphics, capture, opt_coordHeight, opt_acc) {
  y2.call(this, mapper, graphics, capture, opt_coordHeight, opt_acc);
  this.l = {};
  this.M = _yt_player.Ad && !_yt_player.rc(526);
  this.I = new _yt_player.Lm(this);
};
/**
 * @param {Object} node
 * @param {string} tagName
 * @param {?} attrs
 * @return {?}
 */
var t2 = function(node, tagName, attrs) {
  node = node.H.g.createElementNS("http://www.w3.org/2000/svg", tagName);
  if (attrs) {
    var attr;
    for (attr in attrs) {
      node.setAttribute(attr, attrs[attr]);
    }
  }
  return node;
};
/**
 * @param {Object} name
 * @param {string} value
 * @param {string} node
 * @param {Object} v11
 * @return {undefined}
 */
var B2 = function(name, value, node, v11) {
  value = t2(name, "path", {
    d : Yva(value)
  });
  node = new Xva(value, name, node, v11);
  name.B.la().appendChild(node.la());
};
/**
 * @param {?} propName
 * @return {?}
 */
var Yva = function(propName) {
  /** @type {Array} */
  var list = [];
  Vva(propName, function(dataAndEvents, args) {
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
 * @param {Element} a
 * @return {?}
 */
var Rva = function(node, i, a) {
  if (i in node.l) {
    return node.l[i];
  }
  /** @type {string} */
  var o = "_svgdef_" + Zva++;
  a.setAttribute("id", o);
  /** @type {string} */
  node.l[i] = o;
  node.F.appendChild(a);
  return o;
};
/**
 * @return {?}
 */
var $va = function() {
  if (!C2) {
    C2 = new _yt_player.sg(400);
    C2.start();
  }
  return C2;
};
/**
 * @param {Object} dataAndEvents
 * @param {?} deepDataAndEvents
 * @param {Array} opt_obj2
 * @return {undefined}
 */
var bwa = function(dataAndEvents, deepDataAndEvents, opt_obj2) {
  var newMillis = _yt_player.vG;
  dataAndEvents = {
    csn : dataAndEvents,
    parentVisualElement : k2(deepDataAndEvents),
    visualElements : (0, _yt_player.G)(opt_obj2, function(deepDataAndEvents) {
      return k2(deepDataAndEvents);
    })
  };
  awa(newMillis, {
    attachChild : dataAndEvents
  });
};
/**
 * @param {Function} message
 * @param {?} deepDataAndEvents
 * @return {undefined}
 */
var D2 = function(message, deepDataAndEvents) {
  _yt_player.wG("visualElementShown", {
    /** @type {Function} */
    csn : message,
    ve : k2(deepDataAndEvents),
    eventType : 1
  });
};
/**
 * @param {Function} node
 * @param {?} deepDataAndEvents
 * @return {undefined}
 */
var E2 = function(node, deepDataAndEvents) {
  _yt_player.wG("visualElementGestured", {
    /** @type {Function} */
    csn : node,
    ve : k2(deepDataAndEvents),
    gestureType : "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"
  });
};
/**
 * @param {?} nowMillis
 * @param {(Object|string)} opt_attributes
 * @return {undefined}
 */
var awa = function(nowMillis, opt_attributes) {
  /** @type {number} */
  opt_attributes.eventTimeMs = Math.round(_yt_player.hG());
  opt_attributes.lactMs = _yt_player.uG();
  _yt_player.dG({
    endpoint : "log_interaction",
    payload : opt_attributes
  }, nowMillis);
};
/**
 * @param {?} options
 * @param {string} value
 * @return {?}
 */
var F2 = function(options, value) {
  /**
   * @param {Object} params
   * @return {?}
   */
  function url(params) {
    return params.baseUrl;
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
  function callback(msg) {
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
  var params = {};
  params.startMs = (0, window.parseInt)(options.startMs, 10);
  params.impressionUrls = (0, _yt_player.G)(options.impressionUrls || [], url);
  params.skip = options.skipEndscreen;
  params.visualElement = l2(options.trackingParams);
  var _bracketR = (0, _yt_player.G)(options.elements || [], function(handle, i) {
    var self = handle.endscreenElementRenderer;
    if (!self) {
      return null;
    }
    var options = {};
    var settings = self.style;
    var results = self.endpoint || {};
    /** @type {string} */
    options.id = "element-" + i;
    options.type = settings;
    options.title = $(self.title);
    options.metadata = $(self.metadata);
    options.callToAction = $(self.callToAction);
    options.By = self.image;
    options.left = (0, window.parseFloat)(self.left);
    options.width = (0, window.parseFloat)(self.width);
    options.top = (0, window.parseFloat)(self.top);
    options.aspectRatio = (0, window.parseFloat)(self.aspectRatio);
    options.startMs = (0, window.parseInt)(self.startMs, 10);
    options.endMs = (0, window.parseInt)(self.endMs, 10);
    options.clickUrls = (0, _yt_player.G)(results.loggingUrls || [], url);
    options.qn = _yt_player.Tb(self, "title", "accessibility", "accessibilityData", "label");
    options.impressionUrls = (0, _yt_player.G)(self.impressionUrls || [], url);
    options.MK = (0, _yt_player.G)(self.hovercardShowUrls || [], url);
    options.Rd = {
      itct : self.trackingParams
    };
    options.visualElement = l2(self.trackingParams);
    if ("VIDEO" == settings) {
      options.targetUrl = results.urlEndpoint ? results.urlEndpoint.url : callback(results.watchEndpoint);
      /** @type {boolean} */
      options.Oo = false;
      /** @type {string} */
      options.mq = value;
      options.videoDuration = $(self.videoDuration);
    } else {
      if ("PLAYLIST" == settings) {
        options.targetUrl = results.urlEndpoint ? results.urlEndpoint.url : callback(results.watchEndpoint);
        /** @type {boolean} */
        options.Oo = false;
        /** @type {string} */
        options.mq = value;
        options.playlistLength = $(self.playlistLength);
      } else {
        if ("CHANNEL" == settings) {
          if (settings = _yt_player.Tb(results, "browseEndpoint", "browseId")) {
            options.channelId = settings;
            /** @type {string} */
            options.targetUrl = "/channel/" + settings;
          }
          /** @type {boolean} */
          options.Oo = false;
          /** @type {string} */
          options.mq = "new";
          /** @type {boolean} */
          options.isSubscribe = !!self.isSubscribe;
          if (options.isSubscribe) {
            a: {
              if (settings = self.hovercardButton) {
                if (settings = settings.subscribeButtonRenderer) {
                  results = $(settings.unsubscribedButtonText);
                  var a = $(settings.subscribedButtonText);
                  if (settings.subscribed) {
                    var $col = $(settings.subscriberCountWithUnsubscribeText);
                    var $window = $(settings.subscriberCountText);
                  } else {
                    $col = $(settings.subscriberCountText);
                    $window = $(settings.subscriberCountWithSubscribeText);
                  }
                  /** @type {null} */
                  var b = null;
                  if (self.signinEndpoint && (b = _yt_player.Tb(self, "signinEndpoint", "webNavigationEndpointData", "url"), !b)) {
                    self = void 0;
                    break a;
                  }
                  if (results && (a || b)) {
                    self = {
                      subscribed : settings.subscribed,
                      subscribeText : results,
                      subscribeCount : $col,
                      unsubscribeText : a,
                      unsubscribeCount : $window,
                      enabled : settings.enabled,
                      signinUrl : b,
                      classic : self.useClassicSubscribeButton
                    };
                    break a;
                  }
                }
              }
              self = void 0;
            }
            /** @type {(undefined|{classic: ??, enabled: ??, signinUrl: ?, subscribeCount: ?, subscribeText: ??, subscribed: ??, unsubscribeCount: ?, unsubscribeText: ?})} */
            options.subscribeButton = self;
          } else {
            options.subscribersText = $(self.subscribersText);
          }
        } else {
          if ("WEBSITE" == settings) {
            options.targetUrl = _yt_player.Tb(results, "urlEndpoint", "url");
            /** @type {boolean} */
            options.Oo = true;
            /** @type {string} */
            options.mq = "new";
            options.iconUrl = self.icon.thumbnails[0].url;
          }
        }
      }
    }
    return options;
  });
  params.elements = (0, _yt_player.Ld)(_bracketR, function(dataAndEvents) {
    return!!dataAndEvents;
  });
  return params;
};
/**
 * @param {Text} x
 * @return {undefined}
 */
var G2 = function(x) {
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
  var styleNode = _yt_player.Ed("STYLE");
  (window.document.getElementsByTagName("HEAD")[0] || window.document.body).appendChild(styleNode);
  _yt_player.Ze(this, function() {
    _yt_player.Kd(styleNode);
  });
  if (styleNode.sheet) {
    styleNode.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0);
    styleNode.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}", 
    0);
  }
};
/**
 * @param {?} el
 * @return {?}
 */
var H2 = function(el) {
  return "creator-endscreen-editor" === el;
};
/**
 * @param {Object} item
 * @param {?} b
 * @return {undefined}
 */
var I2 = function(item, b) {
  _yt_player.kV(item.g, "creatorendscreen");
  if (item.A) {
    item.A.dispose();
    /** @type {null} */
    item.A = null;
    item.D.dispose();
    /** @type {null} */
    item.D = null;
  }
  var i;
  for (i in item.l) {
    item.l[i].dispose();
  }
  item.l = {};
  item.F = {};
  if (0 < item.K.length) {
    item.K.forEach(function(child) {
      child.dispose();
    });
    /** @type {number} */
    item.K.length = 0;
  }
  /** @type {number} */
  item.H = 0;
  if ((item.o = b) && b.elements) {
    cwa(item);
    /** @type {Array} */
    i = [];
    var id = new _yt_player.eQ(b.startMs, 0x7ffffffffffff, {
      id : "ytp-ce-in-endscreen",
      namespace : "creatorendscreen"
    });
    i.push(id);
    if (!_yt_player.Y(item.g).l) {
      item.A = new _yt_player.W({
        G : "div",
        L : "ytp-ce-shadow"
      });
      _yt_player.mV(item.g, item.A.element, 4);
      item.D = new _yt_player.MV(item.A, 200);
    }
    /** @type {number} */
    id = 0;
    for (;id < b.elements.length;++id) {
      var node = b.elements[id];
      var n = dwa(item, node);
      item.l[node.id] = n;
      item.F[node.id] = node;
      _yt_player.mV(item.g, n.element, 4);
      var copies = new _yt_player.eQ(node.startMs, node.endMs, {
        id : "ytp-ce-element-" + node.id,
        namespace : "creatorendscreen"
      });
      i.push(copies);
      ewa(item, n, node);
    }
    _yt_player.hV(item.g, i);
    item.XA();
  }
};
/**
 * @param {Object} stop
 * @return {undefined}
 */
var cwa = function(stop) {
  var deepDataAndEvents = Ova();
  var dataAndEvents = _yt_player.MG();
  if (dataAndEvents) {
    if (deepDataAndEvents) {
      bwa(dataAndEvents, deepDataAndEvents, [stop.o.visualElement]);
    }
  }
};
/**
 * @param {Object} data
 * @param {Object} options
 * @return {?}
 */
var dwa = function(data, options) {
  /** @type {null} */
  var ev = null;
  switch(options.type) {
    case "VIDEO":
      ev = {
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
          P : J2(options)
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
      ev = new _yt_player.W(ev);
      break;
    case "PLAYLIST":
      ev = {
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
          P : J2(options)
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
      ev = new _yt_player.W(ev);
      break;
    case "CHANNEL":
      ev = {
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
          P : J2(options)
        }]
      };
      ev = new _yt_player.W(ev);
      var parent = _yt_player.qd(window.document, "div", "ytp-ce-channel-subscribe", ev.element)[0];
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
      ev = {
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
          P : J2(options)
        }, {
          G : "div",
          L : "ytp-ce-expanding-icon",
          P : fwa(options.iconUrl)
        }]
      };
      ev = new _yt_player.W(ev);
  }
  if (options.g) {
    _yt_player.S(ev.element, "ytp-ce-placeholder");
  }
  return ev;
};
/**
 * @param {Object} optionsString
 * @return {?}
 */
var J2 = function(optionsString) {
  if (optionsString.By) {
    var url = optionsString.By.thumbnails
  }
  return fwa(url ? url[url.length - 1].url : null);
};
/**
 * @param {Object} dataAndEvents
 * @return {?}
 */
var fwa = function(dataAndEvents) {
  return dataAndEvents ? {
    style : "background-image: url(" + dataAndEvents + ")"
  } : {};
};
/**
 * @param {Object} y
 * @param {Object} node
 * @param {?} dataAndEvents
 * @return {undefined}
 */
var ewa = function(y, node, dataAndEvents) {
  /**
   * @return {undefined}
   */
  function eventListener() {
    cell(1);
  }
  /**
   * @return {undefined}
   */
  function loaded() {
    cell(-1);
  }
  node.U("mouseenter", (0, _yt_player.z)(y.Ut, y, node, dataAndEvents));
  node.U("mouseleave", (0, _yt_player.z)(y.Ru, y, node, dataAndEvents));
  if (!_yt_player.Y(y.g).l) {
    node.U("click", (0, _yt_player.z)(function(waypoint) {
      _yt_player.S(waypoint.element, "ytp-ce-element-hover");
    }, y, node));
  }
  node.U("click", (0, _yt_player.z)(y.HC, y, dataAndEvents));
  node.U("keypress", (0, _yt_player.z)(y.HC, y, dataAndEvents));
  node.U("focus", (0, _yt_player.z)(function(deepDataAndEvents, walkers) {
    this.Ut(deepDataAndEvents, walkers);
  }, y, node, dataAndEvents));
  node.U("blur", (0, _yt_player.z)(function(walkers, dataAndEvents) {
    this.Ru(walkers, dataAndEvents);
  }, y, node, dataAndEvents));
  node.U("touchstart", (0, _yt_player.z)(y.Ut, y, node, dataAndEvents));
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
  }, y, node));
  var cell = (0, _yt_player.z)(function(waypoint, ignores, dataAndEvents) {
    this.H += dataAndEvents;
    if (0 < this.H) {
      _yt_player.S(waypoint.element, "ytp-ce-force-expand");
      K2(this, ignores.id, true);
    } else {
      _yt_player.mq(waypoint.element, "ytp-ce-force-expand");
      _yt_player.mq(waypoint.element, "ytp-ce-element-hover");
      K2(this, ignores.id, false);
    }
  }, y, node, dataAndEvents);
  y = (0, _yt_player.z)(function(editable, win) {
    if (win) {
      editable.U("blur", function() {
        if (_yt_player.Nh(win)) {
          if (this.LE) {
            win.focus();
          }
        }
      });
      editable.O(win, "focus", eventListener);
      editable.O(win, "blur", loaded);
    }
  }, y, node);
  y(_yt_player.J("ytp-sb-subscribe", node.element));
  y(_yt_player.J("ytp-sb-unsubscribe", node.element));
  node.U("focus", eventListener);
  node.U("blur", loaded);
};
/**
 * @param {Date} item
 * @param {?} e
 * @param {boolean} recurring
 * @return {undefined}
 */
var K2 = function(item, e, recurring) {
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
 * @param {number} c
 * @param {(Array|string)} g
 * @param {?} done
 * @return {undefined}
 */
var L2 = function(c, g, done) {
  /**
   * @return {undefined}
   */
  function onStop() {
    if (!f) {
      pos++;
      if (pos == g.length) {
        b.stop();
        if (done) {
          done();
        }
      }
    }
  }
  if (!g || H2(_yt_player.Y(c.g).playerStyle)) {
    if (done) {
      done();
    }
  } else {
    g = gwa(c, g);
    /** @type {number} */
    var pos = 0;
    /** @type {boolean} */
    var f = false;
    var b = new _yt_player.Yt(function() {
      /** @type {boolean} */
      f = true;
      if (done) {
        done();
      }
    }, 1E3, c);
    b.start();
    /** @type {number} */
    c = 0;
    for (;c < g.length;c++) {
      _yt_player.FE(g[c], onStop);
    }
  }
};
/**
 * @param {?} draggable
 * @param {Element} dataAndEvents
 * @param {?} parent
 * @return {undefined}
 */
var M2 = function(draggable, dataAndEvents, parent) {
  L2(draggable, dataAndEvents.clickUrls, parent);
  if (draggable = _yt_player.MG()) {
    if (dataAndEvents.Oo) {
      E2(draggable, dataAndEvents.visualElement);
    }
  }
};
/**
 * @param {Object} data
 * @param {Array} codeSegments
 * @return {?}
 */
var gwa = function(data, codeSegments) {
  var listener = data.g.getVideoData().clientPlaybackNonce;
  var _results1 = data.g.getCurrentTime().toFixed(2);
  listener = {
    CPN : listener,
    AD_CPN : listener,
    MT : _results1
  };
  /** @type {Array} */
  _results1 = [];
  /** @type {number} */
  var i = 0;
  for (;i < codeSegments.length;i++) {
    _results1.push(hwa(codeSegments[i], listener));
  }
  return _results1;
};
/**
 * @param {string} messageFormat
 * @param {Object} key
 * @return {?}
 */
var hwa = function(messageFormat, key) {
  return messageFormat.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function(prop) {
    /** @type {string} */
    var p = (0, window.unescape)(prop);
    /** @type {string} */
    p = p.substring(1, p.length - 1);
    return key[p] ? (0, window.escape)(key[p]) : prop;
  });
};
/**
 * @param {(Array|number)} patterns
 * @return {?}
 */
var N2 = function(patterns) {
  return _yt_player.Aa(patterns) && patterns.length ? patterns[0] : patterns;
};
/**
 * @param {string} d
 * @return {?}
 */
var O2 = function(d) {
  /** @type {RegExp} */
  var typePattern = /.+/;
  return _yt_player.u(d) && (null != typePattern && (null != d && d.match(typePattern))) ? d : "";
};
/**
 * @param {?} options
 * @param {string} color
 * @return {?}
 */
var P2 = function(options, color) {
  if (null == options) {
    return color;
  }
  var result = (0, window.parseInt)(options, 0);
  if ((0, window.isNaN)(result)) {
    return color;
  }
  result = result.toString(16);
  return "#" + "000000".substring(0, 6 - result.length) + result;
};
/**
 * @param {number} attribute
 * @return {?}
 */
var Q2 = function(attribute) {
  return _yt_player.u(attribute) ? attribute : "";
};
/**
 * @param {?} dataAndEvents
 * @param {?} map
 * @param {string} type
 * @return {?}
 */
var R2 = function(dataAndEvents, map, type) {
  var letter;
  for (letter in map) {
    if (map[letter] == dataAndEvents) {
      return dataAndEvents;
    }
  }
  return type;
};
/**
 * @param {string} str
 * @param {boolean} recurring
 * @return {?}
 */
var S2 = function(str, recurring) {
  return "true" == str || "false" == str ? "true" == str : recurring;
};
/**
 * @param {?} data
 * @param {number} recurring
 * @return {?}
 */
var T2 = function(data, recurring) {
  return _yt_player.u(data) ? (0, window.parseFloat)(data) : recurring;
};
/**
 * @param {number} basis
 * @param {number} recurring
 * @param {number} expectedNumberOfNonCommentArgs
 * @param {boolean} v33
 * @param {number} outstandingDataSize
 * @return {?}
 */
var U2 = function(basis, recurring, expectedNumberOfNonCommentArgs, v33, outstandingDataSize) {
  basis = (0, window.parseFloat)(basis);
  if (null != basis && !(0, window.isNaN)(basis)) {
    if (v33) {
      return _yt_player.dd(basis, recurring, expectedNumberOfNonCommentArgs);
    }
    if (basis >= recurring && basis <= expectedNumberOfNonCommentArgs) {
      return basis;
    }
  }
  return outstandingDataSize;
};
/**
 * @param {string} dataName
 * @return {?}
 */
var iwa = function(dataName) {
  if (null == dataName) {
    return 0;
  }
  if ("never" == dataName) {
    return-1;
  }
  dataName = dataName.split(":");
  if (3 < dataName.length) {
    return 0;
  }
  /** @type {number} */
  var base = 0;
  /** @type {number} */
  var d = 1;
  (0, _yt_player.B)(dataName, function(code) {
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
 * @param {?} defs
 * @param {Function} makeIterator
 * @return {?}
 */
var V2 = function(defs, makeIterator) {
  if (null == defs) {
    return null;
  }
  if (_yt_player.Ba(defs)) {
    /** @type {Array} */
    var domWaiters = [];
    (0, _yt_player.B)(defs, function(callback) {
      if (callback = makeIterator(callback)) {
        domWaiters.push(callback);
      }
    });
    return domWaiters;
  }
  var code = makeIterator(defs);
  return code ? [code] : [];
};
/**
 * @param {?} options
 * @return {?}
 */
var jwa = function(options) {
  /**
   * @param {?} pixelWidth
   * @return {?}
   */
  function setSize(pixelWidth) {
    return null != pixelWidth && !(0, window.isNaN)(pixelWidth);
  }
  return(options = options ? new _yt_player.Zg((0, window.parseFloat)(options.top), (0, window.parseFloat)(options.right), (0, window.parseFloat)(options.bottom), (0, window.parseFloat)(options.left)) : null) && (setSize(options.top) && (setSize(options.right) && (setSize(options.bottom) && setSize(options.left)))) ? options : null;
};
/**
 * @param {string} val
 * @return {?}
 */
var kwa = function(val) {
  /**
   * @param {string} string
   * @return {?}
   */
  function interpolate(string) {
    return(0, _yt_player.Ld)(string.split(/ +/), function(val) {
      return "" != val;
    });
  }
  return null == val ? [] : interpolate(val);
};
/**
 * @param {string} val
 * @param {string} opt_target
 * @param {(Element|Function|string)} dataAndEvents
 * @param {?} g
 * @return {undefined}
 */
var lwa = function(val, opt_target, dataAndEvents, g) {
  /** @type {string} */
  this.value = val;
  /** @type {string} */
  this.target = opt_target;
  /** @type {(Element|Function|string)} */
  this.showLinkIcon = dataAndEvents;
  this.g = g;
};
/**
 * @param {?} opt_attributes
 * @return {?}
 */
var W2 = function(opt_attributes) {
  if (!opt_attributes) {
    return null;
  }
  var arry = _yt_player.Mc(Q2(opt_attributes.value));
  arry = _yt_player.Jc(arry);
  if (!arry) {
    return null;
  }
  var Float32Array = R2(opt_attributes.target, mwa, "current");
  return null == Float32Array ? null : new lwa(arry, Float32Array, S2(opt_attributes.show_link_icon, true), null != opt_attributes.pause_on_navigation ? opt_attributes.pause_on_navigation : true);
};
/**
 * @param {Object} property
 * @return {?}
 */
var X2 = function(property) {
  return property.value ? property.value : null;
};
/**
 * @param {?} eventType
 * @param {string} trigger
 * @param {string} url
 * @return {undefined}
 */
var nwa = function(eventType, trigger, url) {
  this.type = eventType;
  /** @type {string} */
  this.trigger = trigger;
  /** @type {string} */
  this.url = url;
};
/**
 * @param {Object} e
 * @return {?}
 */
var qwa = function(e) {
  if (!e) {
    return null;
  }
  var cTable = R2(e.type, owa);
  var column = R2(e.trigger, pwa);
  var firstByIndex = N2(e.url);
  firstByIndex = W2(firstByIndex ? firstByIndex : null);
  N2(e.subscribeData);
  return cTable ? new nwa(cTable, column, firstByIndex) : null;
};
/**
 * @param {Object} s
 * @param {number} pos
 * @param {boolean} x
 * @return {?}
 */
var rwa = function(s, pos, x) {
  /** @type {number} */
  var source = (x = "xx" == x || "xy" == x) ? 640 : 360;
  return(source + ((x ? s.width : s.height) - source) * pos) / source;
};
/**
 * @param {Object} c
 * @param {number} pos
 * @param {boolean} x
 * @return {?}
 */
var Y2 = function(c, pos, x) {
  /** @type {number} */
  var source = (x = "xy" == x || "yy" == x) ? 360 : 640;
  return(source + ((x ? c.height : c.width) - source) * pos) / source;
};
/**
 * @param {number} xp
 * @param {?} yp
 * @param {?} dataAndEvents
 * @param {?} o
 * @param {?} t
 * @param {?} b
 * @param {?} deepDataAndEvents
 * @param {?} d
 * @param {?} ignoreMethodDoesntExist
 * @param {?} l
 * @param {?} g
 * @return {undefined}
 */
var Z2 = function(xp, yp, dataAndEvents, o, t, b, deepDataAndEvents, d, ignoreMethodDoesntExist, l, g) {
  /** @type {number} */
  this.x = xp;
  this.y = yp;
  this.Qk = dataAndEvents;
  this.o = o;
  this.t = t;
  this.B = b;
  this.C = deepDataAndEvents;
  this.D = d;
  this.A = ignoreMethodDoesntExist;
  this.l = l;
  this.g = g;
};
/**
 * @param {Object} data
 * @param {Function} on
 * @return {?}
 */
var twa = function(data, on) {
  if (!data) {
    return null;
  }
  var failuresLink = T2(data.x, 0);
  var handleConnection = T2(data.y, 0);
  var errback = T2(data.w, 0);
  var capture = T2(data.h, 0);
  var rreturn = iwa(data.t);
  var udataCur = T2(data.d, 0);
  var pdataOld = T2(data.px, 0);
  var suiteView = T2(data.py, 0);
  var recurring = T2(data.scaleSlope, 1);
  var restoreScript = T2(data.scaleSlopeX, recurring);
  recurring = T2(data.scaleSlopeY, recurring);
  var r20 = R2(data.scaleDimension, swa, "xy");
  return on(failuresLink, handleConnection, errback, capture, rreturn, udataCur, pdataOld, suiteView, restoreScript, recurring, r20);
};
/**
 * @param {number} node
 * @param {Node} obj
 * @return {?}
 */
var $2 = function(node, obj) {
  var child = uwa(obj, vwa(node, new _yt_player.bh(node.x, node.y, node.Qk, node.o), obj.g));
  var layout = obj.g;
  var style = child.clone();
  if (layout) {
    if (!layout.contains(child)) {
      if (child.width < layout.width) {
        style.left = _yt_player.dd(child.left, layout.left, layout.left + layout.width - child.width);
      } else {
        style.left = layout.left;
        style.width = layout.width;
      }
      if (child.height < layout.height) {
        style.top = _yt_player.dd(child.top, layout.top, layout.top + layout.height - child.height);
      } else {
        style.top = layout.top;
        style.height = layout.height;
      }
    }
  }
  return style;
};
/**
 * @param {number} item
 * @param {?} before
 * @param {Object} c
 * @return {?}
 */
var vwa = function(item, before, c) {
  var x = item.C;
  var value = item.D;
  var ll = item.g ? item.g : "xy";
  var pos = rwa(c, item.A, ll);
  item = Y2(c, item.l, ll);
  /** @type {number} */
  ll = 640 * before.width * pos / 100;
  /** @type {number} */
  var length = 360 * before.height * item / 100;
  return new _yt_player.bh(0 == x ? 640 * before.left * pos / 100 : 0 < x ? x : c.width + x - ll, 0 == value ? 360 * before.top * item / 100 : 0 < value ? value : c.height + value - length, ll, length);
};
/**
 * @param {string} param
 * @return {?}
 */
var wwa = function(param) {
  return param ? twa(param, function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, matcherFunction, execResult, opt_keys, positionError, oFunctionBody) {
    return new Z2(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, matcherFunction, execResult, opt_keys, positionError, oFunctionBody);
  }) : null;
};
/**
 * @param {?} g
 * @param {(number|string)} dataAndEvents
 * @return {undefined}
 */
var xwa = function(g, dataAndEvents) {
  this.g = g;
  this.l = dataAndEvents || null;
};
/**
 * @param {Node} o
 * @param {?} vector1
 * @return {?}
 */
var uwa = function(o, vector1) {
  var t = o.l ? $2(o.l, new xwa(o.g)) : o.g;
  var rect = vector1.clone();
  var l = t.left;
  t = t.top;
  if (l instanceof _yt_player.hd) {
    rect.left += l.x;
    rect.top += l.y;
  } else {
    rect.left += l;
    if (_yt_player.ua(t)) {
      rect.top += t;
    }
  }
  return rect;
};
/**
 * @param {?} mapper
 * @param {?} graphics
 * @param {?} capture
 * @param {?} opt_coordHeight
 * @param {?} opt_acc
 * @param {?} dataAndEvents
 * @param {?} h
 * @param {?} opt_domHelper
 * @param {?} borderColor
 * @param {?} opt_backgroundColor
 * @param {?} address
 * @param {?} child
 * @param {?} deepDataAndEvents
 * @return {undefined}
 */
var ywa = function(mapper, graphics, capture, opt_coordHeight, opt_acc, dataAndEvents, h, opt_domHelper, borderColor, opt_backgroundColor, address, child, deepDataAndEvents) {
  Z2.call(this, mapper, graphics, capture, opt_coordHeight, opt_acc, opt_domHelper, borderColor, opt_backgroundColor, address, child, deepDataAndEvents);
  this.F = dataAndEvents;
  this.H = h;
};
/**
 * @param {Object} frame
 * @return {?}
 */
var zwa = function(frame) {
  if (!frame) {
    return null;
  }
  var b = T2(frame.sx, 0);
  var c = T2(frame.sy, 0);
  return twa(frame, function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, matcherFunction, execResult, opt_keys, positionError, oFunctionBody) {
    return new ywa(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, b, c, opt_attributes, matcherFunction, execResult, opt_keys, positionError, oFunctionBody);
  });
};
/**
 * @param {?} l
 * @param {number} backgroundColor
 * @param {?} inColor
 * @param {(number|string)} dataAndEvents
 * @param {?} g
 * @param {?} deepDataAndEvents
 * @param {?} o
 * @param {string} textAlign
 * @param {number} textSize
 * @param {?} ignoreMethodDoesntExist
 * @param {?} padding
 * @param {?} textAlt
 * @param {Object} keepData
 * @param {number} b
 * @return {undefined}
 */
var Awa = function(l, backgroundColor, inColor, dataAndEvents, g, deepDataAndEvents, o, textAlign, textSize, ignoreMethodDoesntExist, padding, textAlt, keepData, b) {
  this.l = l;
  /** @type {number} */
  this.bgColor = backgroundColor;
  this.borderColor = inColor;
  /** @type {(number|string)} */
  this.borderWidth = dataAndEvents;
  this.g = g;
  this.C = deepDataAndEvents;
  this.o = o;
  /** @type {string} */
  this.textAlign = textAlign;
  /** @type {number} */
  this.textSize = textSize;
  this.A = ignoreMethodDoesntExist;
  this.padding = padding;
  this.effects = textAlt;
  /** @type {Object} */
  this.cornerRadius = keepData;
  /** @type {number} */
  this.B = b;
};
/**
 * @param {Object} options
 * @return {?}
 */
var Cwa = function(options) {
  if (!options) {
    return null;
  }
  var b = P2(options.fgColor, "#1A1A1A");
  var light = P2(options.bgColor, "#FFF");
  var d = P2(options.borderColor, "#000");
  var e = U2(options.borderWidth, 0, 5, false, 0);
  var f = U2(options.bgAlpha, 0, 1, false, 0.8);
  var F2F2F2 = P2(options.highlightFontColor, "#F2F2F2");
  var l = U2(options.highlightWidth, 0, 5, false, 3);
  var m = Q2(options.textAlign);
  var n = U2(options.textSize, 3.3, 30.1, true, 3.6107);
  var p = Q2(options.fontWeight);
  var r = jwa(options.padding);
  var v = kwa(options.effects);
  var D = U2(options.cornerRadius, 0, 10, true, 0);
  options = N2(options.gradient);
  if (options = options ? options : null) {
    var H = U2(options.x1, 0, 100, true, 0);
    var L = U2(options.y1, 0, 100, true, 0);
    var T = U2(options.x2, 0, 100, true, 100);
    var ha = U2(options.y2, 0, 100, true, 100);
    var rect = P2(options.color1, "#FFF");
    var textRender = P2(options.color2, "#000");
    options = new Bwa(H, L, T, ha, rect, textRender, U2(options.opacity1, 0, 100, true, 100), U2(options.opacity2, 0, 100, true, 0));
  } else {
    /** @type {null} */
    options = null;
  }
  return new Awa(b, light, d, e, f, F2F2F2, l, m, n, p, r, v, D, options);
};
/**
 * @param {?} o
 * @param {?} b
 * @param {?} dataAndEvents
 * @param {?} deepDataAndEvents
 * @param {?} g
 * @param {?} l
 * @param {?} d
 * @param {?} ignoreMethodDoesntExist
 * @return {undefined}
 */
var Bwa = function(o, b, dataAndEvents, deepDataAndEvents, g, l, d, ignoreMethodDoesntExist) {
  this.o = o;
  this.B = b;
  this.A = dataAndEvents;
  this.C = deepDataAndEvents;
  this.g = g;
  this.l = l;
  this.D = d;
  this.F = ignoreMethodDoesntExist;
};
/**
 * @param {?} eventType
 * @param {?} l
 * @param {?} g
 * @param {?} o
 * @return {undefined}
 */
var Dwa = function(eventType, l, g, o) {
  this.type = eventType;
  this.l = l;
  this.g = g;
  this.o = o;
};
/**
 * @param {Object} statement
 * @return {?}
 */
var Fwa = function(statement) {
  if (!statement) {
    return null;
  }
  var rect = R2(statement.type, Ewa, "rect");
  var c = V2(statement.rectRegion, wwa);
  var d = V2(statement.anchoredRegion, zwa);
  statement = V2(statement.shapelessRegion, wwa);
  return new Dwa(rect, c, d, statement);
};
/**
 * @param {Object} node
 * @return {?}
 */
var Gwa = function(node) {
  return node.l && node.l.length ? node.l[0] : node.g && node.g.length ? node.g[0] : node.o && node.o.length ? node.o[0] : null;
};
/**
 * @param {number} l
 * @param {?} g
 * @return {undefined}
 */
var Hwa = function(l, g) {
  /** @type {number} */
  this.l = l;
  this.g = g;
};
/**
 * @param {?} oldState
 * @param {(Object|string)} ref
 * @return {undefined}
 */
var Iwa = function(oldState, ref) {
  this.state = oldState;
  /** @type {(Object|string)} */
  this.ref = ref;
};
/**
 * @param {Object} options
 * @return {?}
 */
var Kwa = function(options) {
  if (!options) {
    return null;
  }
  var $ios = R2(options.state, Jwa);
  options = O2(options.ref);
  return $ios ? new Iwa($ios, options) : null;
};
/**
 * @param {(number|string)} g
 * @param {(number|string)} dataAndEvents
 * @param {?} deepDataAndEvents
 * @param {?} l
 * @return {undefined}
 */
var Lwa = function(g, dataAndEvents, deepDataAndEvents, l) {
  this.g = g || [];
  this.o = dataAndEvents || [];
  this.A = deepDataAndEvents;
  this.l = l;
  /** @type {boolean} */
  this.value = false;
};
/**
 * @param {Object} o
 * @return {?}
 */
var Mwa = function(o) {
  if (!o) {
    return null;
  }
  var program = V2(o.condition, Kwa);
  var inverse = V2(o.notCondition, Kwa);
  var d = S2(o.show_delay, false);
  o = S2(o.hide_delay, false);
  return program || inverse ? new Lwa(program, inverse, d, o) : null;
};
/**
 * @param {Object} obj
 * @param {Function} deepDataAndEvents
 * @param {?} dataAndEvents
 * @return {undefined}
 */
var Nwa = function(obj, deepDataAndEvents, dataAndEvents) {
  (0, _yt_player.B)(obj.g, _yt_player.Ga(deepDataAndEvents, false), dataAndEvents);
  (0, _yt_player.B)(obj.o, _yt_player.Ga(deepDataAndEvents, true), dataAndEvents);
};
/**
 * @param {?} id
 * @param {?} author
 * @param {?} eventType
 * @param {?} style
 * @param {?} dataAndEvents
 * @param {?} segment
 * @param {(number|string)} deepDataAndEvents
 * @param {(number|string)} ignoreMethodDoesntExist
 * @param {?} l
 * @param {?} textAlt
 * @param {?} b
 * @param {?} data
 * @param {?} g
 * @param {?} keepData
 * @return {undefined}
 */
var a3 = function(id, author, eventType, style, dataAndEvents, segment, deepDataAndEvents, ignoreMethodDoesntExist, l, textAlt, b, data, g, keepData) {
  this.id = id;
  this.author = author;
  this.type = eventType;
  this.style = style;
  this.A = dataAndEvents;
  this.segment = segment;
  this.o = deepDataAndEvents || [];
  this.D = ignoreMethodDoesntExist || [];
  this.l = l;
  this.C = textAlt;
  this.B = b;
  this.data = data;
  this.g = g;
  this.itct = keepData;
};
/**
 * @param {Object} options
 * @return {?}
 */
var Qwa = function(options) {
  if (!options) {
    return null;
  }
  var k = O2(options.id);
  var c = O2(options.author);
  var d = R2(options.type, Owa);
  var e = R2(options.style, b3);
  var f = Q2(N2(options.TEXT));
  var cellData = Q2(options.data);
  /** @type {*} */
  cellData = 0 != cellData.length ? JSON.parse(cellData) : {};
  var encoding = N2(options.segment);
  var enc = encoding ? encoding : null;
  if (enc) {
    O2(enc.timeRelative);
    encoding = O2(enc.spaceRelative);
    encoding = (enc = V2(enc.movingRegion, Fwa)) ? new Hwa(encoding, enc) : null;
  } else {
    /** @type {null} */
    encoding = null;
  }
  enc = V2(options.action, qwa);
  var n = V2(options.trigger, Mwa);
  var firstByIndex = N2(options.appearance);
  if (!(firstByIndex = Cwa(firstByIndex ? firstByIndex : null))) {
    firstByIndex = Cwa({});
  }
  var video_relative = R2(options.coordinate_system, Pwa, "video_relative");
  var v = S2(options.closeable, true);
  var D = Q2(options.log_data);
  options = Q2(options.itct);
  return k && d ? new a3(k, c, d, e, f, encoding, enc, n, firstByIndex, video_relative, v, cellData, D, options) : null;
};
/**
 * @param {Function} a
 * @return {?}
 */
var d3 = function(a) {
  return c3(a, function(e) {
    return "click" == e.trigger;
  });
};
/**
 * @param {Object} label
 * @param {Function} deepDataAndEvents
 * @return {?}
 */
var c3 = function(label, deepDataAndEvents) {
  return(0, _yt_player.Bj)(label.o, deepDataAndEvents, void 0);
};
/**
 * @param {Object} keepData
 * @param {Function} deepDataAndEvents
 * @param {?} dataAndEvents
 * @return {undefined}
 */
var Rwa = function(keepData, deepDataAndEvents, dataAndEvents) {
  (0, _yt_player.B)(keepData.o, deepDataAndEvents, dataAndEvents);
};
/**
 * @param {Object} dataAndEvents
 * @param {Function} deepDataAndEvents
 * @return {?}
 */
var Swa = function(dataAndEvents, deepDataAndEvents) {
  return _yt_player.Ma(dataAndEvents.o, deepDataAndEvents, void 0);
};
/**
 * @param {Object} dataAndEvents
 * @param {Function} deepDataAndEvents
 * @param {(Node|string)} v00
 * @return {undefined}
 */
var Twa = function(dataAndEvents, deepDataAndEvents, v00) {
  (0, _yt_player.B)(dataAndEvents.D, deepDataAndEvents, v00);
};
/**
 * @param {Element} $match
 * @param {Function} deepDataAndEvents
 * @return {undefined}
 */
var Uwa = function($match, deepDataAndEvents) {
  (0, _yt_player.G)($match.D, deepDataAndEvents, void 0);
};
/**
 * @param {Function} v00
 * @return {?}
 */
var e3 = function(v00) {
  return(v00 = Vwa(v00)) ? Gwa(v00) : null;
};
/**
 * @param {Object} r
 * @return {?}
 */
var Vwa = function(r) {
  if (r.segment) {
    r = r.segment;
    r = r.g.length ? r.g[0] : null;
  } else {
    /** @type {null} */
    r = null;
  }
  return r;
};
/**
 * @param {Function} x
 * @param {Object} b
 * @return {?}
 */
var Wwa = function(x, b) {
  var a = e3(x);
  return a && b ? Y2(b, a.l, a.g ? a.g : "xy") : 1;
};
/**
 * @param {string} dataAndEvents
 * @param {Object} walkers
 * @param {?} l
 * @return {undefined}
 */
var Ywa = function(dataAndEvents, walkers, l) {
  this.g = {};
  /** @type {boolean} */
  this.o = false;
  /** @type {string} */
  this.B = "ivTrigger:" + dataAndEvents;
  this.l = l;
  Nwa(walkers, function(o, item) {
    var i = Xwa(item.state, item.ref);
    this.l.subscribe(i, (0, _yt_player.z)(this.A, this, i, o));
    this.g[i] = o;
  }, this);
};
/**
 * @param {string} deepDataAndEvents
 * @param {?} name
 * @return {?}
 */
var Xwa = function(deepDataAndEvents, name) {
  /** @type {string} */
  var id = "ivTriggerCondition:" + deepDataAndEvents;
  return name ? id + ":" + name : id;
};
/**
 * @return {undefined}
 */
var f3 = function() {
  /** @type {boolean} */
  this.g = false;
  /** @type {null} */
  this.B = this.l = null;
};
/**
 * @param {Object} self
 * @param {Object} canvas
 * @param {number} pixelWidth
 * @return {?}
 */
var g3 = function(self, canvas, pixelWidth) {
  if (self.l) {
    self.l.setSize(canvas, pixelWidth);
    self.l.clear();
  } else {
    canvas = new A2(canvas, pixelWidth, void 0, void 0, void 0);
    /** @type {Object} */
    self.l = canvas;
    self.l.zo();
    self.B = _yt_player.K("DIV");
    canvas = self.l.la();
    self.B.appendChild(canvas);
  }
  return self.l;
};
/**
 * @param {string} name
 * @param {?} opt_attributes
 * @param {?} att_name
 * @return {?}
 */
var h3 = function(name, opt_attributes, att_name) {
  /** @type {Element} */
  var source = window.document.createElementNS("http://www.w3.org/2000/svg", name);
  if (opt_attributes) {
    _yt_player.Lb(opt_attributes, function(n, attrName) {
      source.setAttribute(attrName, n);
    });
  }
  /** @type {number} */
  var i = 2;
  for (;i < arguments.length;i++) {
    source.appendChild(arguments[i]);
  }
  return source;
};
/**
 * @param {Element} li
 * @param {?} b
 * @return {?}
 */
var i3 = function(li, b) {
  /** @type {string} */
  var end = ":" + (_yt_player.Su.getInstance().g++).toString(36);
  b.setAttribute("result", end);
  li.appendChild(b);
  return end;
};
/**
 * @param {Element} value
 * @param {?} view
 * @return {?}
 */
var Zwa = function(value, view) {
  var isFunction = i3(value, h3("feGaussianBlur", {
    "in" : view,
    stdDeviation : "1.8"
  }));
  isFunction = i3(value, h3("feDiffuseLighting", {
    "in" : isFunction,
    surfaceScale : "4",
    diffuseConstant : "1"
  }, h3("feDistantLight", {
    azimuth : "270",
    elevation : "15",
    "lighting-color" : "white"
  })));
  isFunction = i3(value, h3("feComposite", {
    "in" : isFunction,
    in2 : view,
    operator : "in"
  }));
  return i3(value, h3("feComposite", {
    in2 : isFunction,
    "in" : view,
    operator : "arithmetic",
    k2 : 1,
    k3 : 0.5,
    k4 : 0
  }));
};
/**
 * @param {Element} value
 * @param {?} view
 * @return {?}
 */
var $wa = function(value, view) {
  var isFunction = i3(value, h3("feOffset", {
    "in" : view,
    dx : "-7",
    dy : "-7"
  }));
  isFunction = i3(value, h3("feGaussianBlur", {
    "in" : isFunction,
    stdDeviation : "3"
  }));
  isFunction = i3(value, h3("feColorMatrix", {
    "in" : isFunction,
    type : "matrix",
    values : "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
  }));
  var strValue = i3(value, h3("feColorMatrix", {
    "in" : view,
    type : "matrix",
    values : "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"
  }));
  strValue = i3(value, h3("feGaussianBlur", {
    "in" : strValue,
    stdDeviation : "1"
  }));
  isFunction = i3(value, h3("feComposite", {
    operator : "out",
    "in" : isFunction,
    in2 : strValue
  }));
  return i3(value, h3("feComposite", {
    operator : "over",
    "in" : view,
    in2 : isFunction
  }));
};
/**
 * @param {?} value
 * @param {string} startArray
 * @return {?}
 */
var axa = function(value, startArray) {
  return startArray;
};
/**
 * @param {?} selFrom
 * @return {?}
 */
var bxa = function(selFrom) {
  var pdataOld = h3("filter", {
    filterUnits : "userSpaceOnUse"
  });
  /** @type {string} */
  var params = "SourceGraphic";
  (0, _yt_player.B)(selFrom, function(extend) {
    a: {
      switch(extend) {
        case "bevel":
          /** @type {function (Element, ?): ?} */
          extend = Zwa;
          break a;
        case "dropshadow":
          /** @type {function (Element, ?): ?} */
          extend = $wa;
          break a;
      }
      /** @type {function (?, string): ?} */
      extend = axa;
    }
    params = extend(pdataOld, params);
  });
  return pdataOld;
};
/**
 * @param {number} ar
 * @return {?}
 */
var cxa = function(ar) {
  ar = (0, _yt_player.Ld)(ar, function(dataAndEvents) {
    return dataAndEvents in j3;
  });
  _yt_player.ib(ar, function(timeoutKey, $conditional) {
    return j3[timeoutKey] - j3[$conditional];
  });
  return ar;
};
/**
 * @param {?} deepDataAndEvents
 * @return {?}
 */
var dxa = function(deepDataAndEvents) {
  return _yt_player.Ma(deepDataAndEvents, function(dataAndEvents) {
    return "dropshadow" == dataAndEvents;
  }) ? new _yt_player.Zg(0, 7, 7, 0) : new _yt_player.Zg(0, 0, 0, 0);
};
/**
 * @param {?} obj
 * @param {?} x
 * @param {number} i
 * @return {?}
 */
var exa = function(obj, x, i) {
  var self = new v2;
  self.moveTo(obj.left + x + i, obj.top + i);
  self.Ec(obj.left + obj.width - x - i, obj.top + i);
  w2(self, x, x, -90);
  self.Ec(obj.left + obj.width - i, obj.top + obj.height - x - i);
  w2(self, x, x, 0);
  self.Ec(obj.left + x + i, obj.top + obj.height - i);
  w2(self, x, x, 90);
  self.Ec(obj.left + i, obj.top + x + i);
  w2(self, x, x, 180);
  self.close();
  return self;
};
/**
 * @param {Object} data
 * @param {Object} value
 * @param {?} dataAndEvents
 * @param {boolean} asNumber
 * @return {?}
 */
var fxa = function(data, value, dataAndEvents, asNumber) {
  var item = data.B;
  if (item) {
    data = new s2(item.o * value / 100, item.B * dataAndEvents / 100, item.A * value / 100, item.C * dataAndEvents / 100, item.g, item.l, item.D, item.F);
  } else {
    value = data.g;
    data = new r2(data.bgColor, asNumber ? Math.max(value, 0.9) : value);
  }
  return data;
};
/**
 * @param {?} key
 * @param {?} deepDataAndEvents
 * @return {?}
 */
var k3 = function(key, deepDataAndEvents) {
  var camelKey = _yt_player.ch(key);
  camelKey.expand(dxa(deepDataAndEvents));
  return wva(camelKey);
};
/**
 * @param {Node} node
 * @param {(Array|number)} array
 * @param {number} c
 * @return {undefined}
 */
var gxa = function(node, array, c) {
  if (c.length && (array = _yt_player.qd(window.document, "g", void 0, array), array.length)) {
    var pos = cxa(c);
    if (pos) {
      /** @type {string} */
      c = "effects:" + (pos ? pos.join("|") : "");
      var fragment = c in node.l ? node.l[c] : null;
      if (fragment) {
        node = fragment;
      } else {
        pos = bxa(pos);
        node = 0 < pos.childNodes.length ? Rva(node, c, pos) : null;
      }
    } else {
      /** @type {null} */
      node = null;
    }
    if (node) {
      array[0].setAttribute("filter", "url(#" + node + ")");
    }
  }
};
/**
 * @return {undefined}
 */
var l3 = function() {
  f3.call(this);
  /** @type {number} */
  this.A = 0;
};
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
var hxa = function(a, b) {
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
 * @param {?} dataAndEvents
 * @return {undefined}
 */
var m3 = function(dataAndEvents) {
  f3.apply(this, arguments);
};
/**
 * @param {?} dataAndEvents
 * @return {undefined}
 */
var n3 = function(dataAndEvents) {
  f3.apply(this, arguments);
};
/**
 * @param {?} dataAndEvents
 * @return {undefined}
 */
var o3 = function(dataAndEvents) {
  l3.apply(this, arguments);
};
/**
 * @param {?} g
 * @param {string} X
 * @param {?} value
 * @param {number} dataAndEvents
 * @param {?} deepDataAndEvents
 * @return {undefined}
 */
var p3 = function(g, X, value, dataAndEvents, deepDataAndEvents) {
  _yt_player.M.call(this);
  this.g = g;
  /** @type {string} */
  this.X = X;
  this.C = value;
  /** @type {number} */
  this.ea = dataAndEvents;
  this.ca = deepDataAndEvents;
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
 * @param {?} dataAndEvents
 * @param {?} deepDataAndEvents
 * @return {undefined}
 */
var ixa = function(dataAndEvents, deepDataAndEvents) {
  var emitEvent = (0, _yt_player.z)(function(opt_obj2, iterator, initial) {
    iterator = initial ? q3(this, iterator, (0, _yt_player.z)(initial, this)) : q3(this, iterator);
    this.W.U(deepDataAndEvents, opt_obj2, iterator);
  }, dataAndEvents);
  emitEvent("mouseover", "E", dataAndEvents.AB);
  emitEvent("mouseout", "D", dataAndEvents.Ih);
  emitEvent("click", "B");
  emitEvent("touchend", "B");
};
/**
 * @param {Node} node
 * @return {undefined}
 */
var jxa = function(node) {
  if (node.g.B) {
    if (c3(node.g, function(packet) {
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
     * @param {?} event
     * @return {undefined}
     */
    var cancel = function(event) {
      event.stopPropagation();
    };
    node.W.U(l, "click", q3(node, "C", cancel));
    node.W.U(l, "touchend", q3(node, "C", cancel));
  }
};
/**
 * @param {(Node|string)} dataAndEvents
 * @param {string} obj
 * @param {Function} fn
 * @return {?}
 */
var q3 = function(dataAndEvents, obj, fn) {
  return(0, _yt_player.z)(function(e) {
    if (this.ca) {
      if (fn) {
        fn(e);
      }
    } else {
      if (e.event.target instanceof window.Element) {
        var current = e.event.target;
        _yt_player.O(current, false);
        try {
          /** @type {(Element|null)} */
          var hyperlink = window.document.elementFromPoint(e.event.clientX, e.event.clientY);
          if (_yt_player.$d(hyperlink, "annotation")) {
            /** @type {(Event|null)} */
            var mouseEvent = window.document.createEvent("MouseEvent");
            mouseEvent.initMouseEvent(e.event.type, e.event.bubbles, e.event.cancelable, e.event.view, e.event.detail, e.event.screenX, e.event.screenY, e.event.clientX, e.event.clientY, e.event.ctrlKey, e.event.altKey, e.event.shiftKey, e.event.metaKey, e.event.button, e.event.relatedTarget);
            hyperlink.dispatchEvent(mouseEvent);
          }
        } finally {
          _yt_player.O(current, true);
        }
      }
    }
    current = _yt_player.Lh(e.target);
    e = new _yt_player.hd(e.clientX, e.clientY);
    if (!("D" == obj && current.contains(e))) {
      this.ea.R(obj, this.g);
    }
  }, dataAndEvents);
};
/**
 * @param {Object} node
 * @return {undefined}
 */
var s3 = function(node) {
  if (node.l || node.o) {
    var s = e3(node.g);
    if (s) {
      var c = r3(node);
      if (node.l) {
        s = $2(s, c);
        var options = _yt_player.W_(_yt_player.VU(node.C));
        _yt_player.Jh(node.l, s.width, s.height);
        _yt_player.wh(node.l, s.left, s.top);
        node.K = new _yt_player.bh(options.left + s.left, options.top + s.top, s.width, s.height);
        var val = (val = e3(node.g)) && options ? rwa(options, val.A, val.g ? val.g : "xy") : 1;
        var o = Wwa(node.g, options);
        options = node.g.l;
        if (options.padding) {
          options = options.padding;
        } else {
          /** @type {number} */
          options = "speech" == node.g.style ? 1.6 : 0.8;
          options = new _yt_player.Zg(options, options, options, options);
        }
        options = new _yt_player.Zg(360 * options.top * o / 100, 640 * options.right * val / 100, 360 * options.bottom * o / 100, 640 * options.left * val / 100);
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
        var pos = false;
        /** @type {number} */
        var max = 0;
        /** @type {number} */
        var n = 0;
        var offset = _yt_player.W_(_yt_player.VU(node.C));
        var position = _yt_player.eV(node.C);
        if (_yt_player.dh(offset, position)) {
          /** @type {null} */
          offset = null;
        } else {
          position.top += 20;
          position.height -= 40;
          if ("player_relative" != node.g.C) {
            position.left -= offset.left;
            position.top -= offset.top;
          }
          offset = position;
        }
        if (offset) {
          /** @type {number} */
          max = offset.top - (s.top + s.height);
          /** @type {number} */
          n = s.top - (offset.top + offset.height);
          /** @type {boolean} */
          pos = 0 < max || 0 < n;
        }
        if (pos && offset) {
          /** @type {number} */
          options = max;
          /** @type {number} */
          val = n;
          if (node.B) {
            o = kxa(node, 23, s, options, val);
            if (node.A) {
              /** @type {number} */
              var p = 43 - o.width;
              if (0 < p) {
                if (s.left + o.left - p > offset.left) {
                  o.left -= p;
                }
                o.width += p;
              }
            }
            p = o;
            _yt_player.Jh(node.B, o.width, o.height);
            _yt_player.wh(node.B, o.left, o.top);
          }
          if (node.A) {
            if (p) {
              s = new _yt_player.hd(p.left + p.width - 23 - 18, node.Z ? p.top + 2 : p.top + p.height - 18 - 2);
            } else {
              p = kxa(node, 18, s, options, val);
              s = new _yt_player.hd(p.left, p.top);
              _yt_player.Jh(node.A, p.width, p.height);
            }
            _yt_player.wh(node.A, s);
          }
          node.M = new _yt_player.bh(node.K.left + p.left, node.K.top + p.top, p.width, p.height);
          node.J = node.W.U(_yt_player.VU(node.C), "mousemove", node.KO, node);
        } else {
          if (node.B) {
            /** @type {number} */
            p = val / o * options.height * 4.2 / 100;
            p = new _yt_player.I(p, p);
            if ("highlight" == node.g.type || "label" == node.g.style) {
              /** @type {number} */
              val = 1.5 * options.height / 100;
              p = new _yt_player.bh(s.width - p.width - val, s.height - p.height - val, p.width, p.height);
            } else {
              p = new _yt_player.bh(s.width - p.width - 3 * options.height / 100, (s.height - p.height) / 2, p.width, p.height);
            }
            _yt_player.Jh(node.B, p.width, p.height);
            _yt_player.wh(node.B, p.left, p.top);
          }
          if (node.A) {
            /** @type {boolean} */
            p = 9 <= options.left + options.width - (s.left + s.width);
            /** @type {boolean} */
            val = 9 <= s.top - options.top;
            _yt_player.wh(node.A, p && val ? new _yt_player.hd(s.width - 9, -9) : p ? new _yt_player.hd(s.width - 9, 45 < s.height ? 9 : s.height - 9) : val ? new _yt_player.hd(45 < s.width ? s.width - 9 - 18 : -9, -9) : s.width / options.width > s.height / options.height ? new _yt_player.hd(45 < s.width ? s.width - 9 - 18 : -9, s.height - 9) : new _yt_player.hd(-9, 45 < s.height ? 9 : s.height - 9));
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
        p = _yt_player.W_(_yt_player.VU(node.C));
        /** @type {string} */
        c.style.fontSize = 360 * s.textSize * Wwa(node.g, p) / 100 + "px";
        p = node.g.style;
        c.style.textAlign = s.textAlign ? s.textAlign : "title" == p || "highlightText" == p ? "center" : "left";
        if (s.A) {
          c.style.fontWeight = s.A;
        }
        node = node.l;
        c = node.style.overflow;
        p = (s = _yt_player.J("annotation-link-icon", node)) ? _yt_player.Nh(s) : false;
        val = (options = _yt_player.J("annotation-close-button", node)) ? _yt_player.Nh(options) : false;
        if (p) {
          _yt_player.O(s, false);
        }
        if (val) {
          _yt_player.O(options, false);
        }
        /** @type {string} */
        n = o = "";
        if (offset = _yt_player.J("inner-text", node)) {
          o = offset.style.overflow;
          n = offset.style.position;
          /** @type {string} */
          offset.style.overflow = "visible";
          /** @type {string} */
          offset.style.position = "static";
        }
        /** @type {string} */
        node.style.overflow = "scroll";
        if (node.scrollHeight > node.offsetHeight || node.scrollWidth > node.offsetWidth) {
          max = pos = Ava(node);
          /** @type {number} */
          position = 5;
          /** @type {number} */
          var min = Math.floor(pos / 2);
          for (;min;) {
            if (node.scrollHeight <= node.offsetHeight && node.scrollWidth <= node.offsetWidth) {
              position = max;
              /** @type {number} */
              max = Math.min(max + min, pos);
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
        if (offset) {
          offset.style.overflow = o;
          offset.style.position = n;
        }
        if (val) {
          _yt_player.O(options, true);
        }
        if (p) {
          _yt_player.O(s, true);
        }
      }
    }
  }
};
/**
 * @param {Object} pos
 * @param {number} bb
 * @param {number} offset
 * @param {number} optionsString
 * @param {number} r
 * @return {?}
 */
var kxa = function(pos, bb, offset, optionsString, r) {
  /** @type {boolean} */
  var has = 0 < r;
  bb = new _yt_player.bh(0, offset.height - bb, Math.max(offset.width, bb), bb);
  if (0 < optionsString) {
    bb.top = offset.height;
    if (20 < optionsString) {
      bb.height += optionsString - 20;
    }
    _yt_player.S(pos.l, "annotation-extend-down");
  }
  if (has) {
    /** @type {number} */
    bb.top = -bb.height;
    if (20 < r) {
      /** @type {number} */
      offset = r - 20;
      bb.top -= offset;
      bb.height += offset;
    }
    _yt_player.S(pos.l, "annotation-extend-up");
    /** @type {boolean} */
    pos.Z = true;
  }
  return bb;
};
/**
 * @param {Object} d
 * @return {?}
 */
var t3 = function(d) {
  return "label" != d.g.style || d.o.g;
};
/**
 * @param {Object} item
 * @return {?}
 */
var r3 = function(item) {
  var alignToBox = _yt_player.W_(_yt_player.VU(item.C));
  if ("player_relative" == item.g.C) {
    var $cont = _yt_player.VU(item.C).Oa();
    alignToBox = new _yt_player.bh(-alignToBox.left, -alignToBox.top, $cont.width, $cont.height);
  } else {
    alignToBox = new _yt_player.bh(0, 0, alignToBox.width, alignToBox.height);
  }
  return new xwa(alignToBox, item.T ? e3(item.T) : null);
};
/**
 * @param {?} offset
 * @param {Object} size
 * @return {?}
 */
var lxa = function(offset, size) {
  return size ? new _yt_player.bh(offset.x + size.left, offset.y + size.top, size.width, size.height) : null;
};
/**
 * @param {?} deepDataAndEvents
 * @param {string} $match
 * @param {Object} TodoView
 * @return {undefined}
 */
var u3 = function(deepDataAndEvents, $match, TodoView) {
  _yt_player.M.call(this);
  this.l = deepDataAndEvents;
  /** @type {string} */
  this.annotation = $match;
  /** @type {Object} */
  this.view = TodoView;
  /** @type {null} */
  this.g = null;
  /** @type {boolean} */
  this.o = this.isVisible = false;
  mxa($match, deepDataAndEvents);
};
/**
 * @param {Element} $match
 * @param {boolean} deepDataAndEvents
 * @return {undefined}
 */
var mxa = function($match, deepDataAndEvents) {
  Uwa($match, function(dataAndEvents) {
    return new Ywa($match.id, dataAndEvents, deepDataAndEvents);
  });
};
/**
 * @param {Node} context
 * @return {undefined}
 */
var nxa = function(context) {
  context.l.unsubscribe("resize", context.zB, context);
  context.l.unsubscribe("onVideoAreaChange", context.mD, context);
};
/**
 * @param {Node} t
 * @return {undefined}
 */
var v3 = function(t) {
  if (t.g) {
    t.g.stop();
    /** @type {null} */
    t.g = null;
  }
};
/**
 * @param {?} mapper
 * @param {Object} options
 * @param {?} capture
 * @return {undefined}
 */
var oxa = function(mapper, options, capture) {
  p2.call(this, mapper, options, capture);
  this.channelId = options.channel_id;
  this.customMessage = options.custom_message;
  this.profileImageUrl = options.image_url;
  this.title = options.title;
  this.metaInfo = options.meta_info;
  this.url = W2({
    pause_on_navigation : options.pause_on_navigation,
    target : options.target || "new",
    value : options.url
  });
};
/**
 * @param {string} data
 * @param {Object} options
 * @param {?} capture
 * @return {undefined}
 */
var w3 = function(data, options, capture) {
  p2.call(this, data, options, capture);
  this.imageUrl = options.image_url;
  this.displayDomain = options.display_domain;
  this.showLinkIcon = options.show_link_icon;
  this.A = options.button_icon_url;
  this.title = options.title;
  this.customMessage = options.custom_message;
  this.url = W2({
    pause_on_navigation : options.pause_on_navigation,
    target : options.target || "new",
    value : options.url
  });
  /** @type {null} */
  this.g = null;
  if (data = options.signin_url) {
    this.g = W2({
      target : "current",
      value : data
    });
  }
  this.J = options.signin_title || null;
  this.I = options.signin_message || null;
};
/**
 * @param {?} mapper
 * @param {?} graphics
 * @param {?} capture
 * @return {undefined}
 */
var pxa = function(mapper, graphics, capture) {
  w3.call(this, mapper, graphics, capture);
  this.H = graphics.ypc_flow_type;
  this.B = graphics.innertube_request_params;
};
/**
 * @param {?} mapper
 * @param {Object} options
 * @param {?} capture
 * @return {undefined}
 */
var qxa = function(mapper, options, capture) {
  p2.call(this, mapper, options, capture);
  this.A = options.image_url;
  this.playlistVideoCount = options.playlist_video_count;
  this.customMessage = options.custom_message;
  this.title = options.title;
  this.metaInfo = options.meta_info;
  this.url = W2({
    pause_on_navigation : options.pause_on_navigation,
    target : options.target || "new",
    value : options.url
  });
};
/**
 * @param {string} req
 * @param {Object} details
 * @param {?} capture
 * @return {undefined}
 */
var rxa = function(req, details, capture) {
  p2.call(this, req, details, capture);
  this.B = this.id.replace(/[^a-z0-9-]/gi, "-");
  this.title = details.title;
  this.choices = details.choices;
  this.g = details.hasOwnProperty("old_vote") ? details.old_vote : null;
  /** @type {null} */
  this.A = null;
  if (req = details.signin_url) {
    this.A = W2({
      target : "current",
      value : req
    });
  }
  this.H = details.hasOwnProperty("xsrf_token") ? details.xsrf_token : null;
};
/**
 * @param {Object} codeSegments
 * @param {?} i
 * @param {?} capture
 * @return {undefined}
 */
var txa = function(codeSegments, i, capture) {
  w3.call(this, codeSegments, i, capture);
  /** @type {Array} */
  this.offers = [];
  codeSegments = i.offers || [];
  /** @type {number} */
  i = 0;
  for (;i < codeSegments.length;i++) {
    this.offers.push(new sxa(codeSegments[i]));
  }
};
/**
 * @param {?} result
 * @return {undefined}
 */
var sxa = function(result) {
  this.merchant = _yt_player.E(result.merchant);
  this.price = _yt_player.E(result.price);
};
/**
 * @param {?} mapper
 * @param {?} graphics
 * @param {?} capture
 * @return {undefined}
 */
var uxa = function(mapper, graphics, capture) {
  w3.call(this, mapper, graphics, capture);
  this.K = graphics.ypc_item_type;
  this.H = graphics.ypc_item_id;
  this.B = graphics.ypc_flow_type;
};
/**
 * @param {?} mapper
 * @param {Object} options
 * @param {?} capture
 * @return {undefined}
 */
var vxa = function(mapper, options, capture) {
  p2.call(this, mapper, options, capture);
  this.A = options.image_url;
  this.videoDuration = options.video_duration || null;
  this.customMessage = options.custom_message;
  this.title = options.title;
  this.metaInfo = options.meta_info;
  /** @type {boolean} */
  this.isLiveNow = !!options.is_live_now;
  this.url = W2({
    pause_on_navigation : options.pause_on_navigation,
    target : options.target || "new",
    value : options.url
  });
};
/**
 * @param {?} mapper
 * @param {Object} data
 * @param {?} capture
 * @return {undefined}
 */
var x3 = function(mapper, data, capture) {
  p2.call(this, mapper, data, capture);
  this.H = data.image_url;
  this.A = data.badge_symbol || "";
  this.priceText = data.price_text || "";
  this.title = data.title;
  this.metaInfo = data.meta_info;
  /** @type {boolean} */
  this.B = !!data.is_paygated;
  /** @type {boolean} */
  this.I = !!data.user_has_entitlement;
  this.url = W2({
    target : data.target || "new",
    value : data.url
  });
};
/**
 * @param {?} g
 * @return {undefined}
 */
var wxa = function(g) {
  this.g = g;
  this.l = {};
};
/**
 * @param {Node} rgba
 * @return {undefined}
 */
var xxa = function(rgba) {
  var r20 = {};
  r20 = (r20["iv-event"] = 1, r20);
  _yt_player.bV(rgba.g, "iv", r20, void 0);
};
/**
 * @param {?} t
 * @param {?} index
 * @param {Object} deepDataAndEvents
 * @param {boolean} key
 * @return {undefined}
 */
var B3 = function(t, index, deepDataAndEvents, key) {
  if (index) {
    var value = y3(t, index);
    t.l[index] = value["p-time"];
    /** @type {number} */
    value["iv-event"] = value.link || (value["l-class"] || value["link-id"]) ? 2 : 7;
    index = z3(t, "cta_annotation_shown", value, deepDataAndEvents);
    A3(t, value, yxa(index, key));
  }
};
/**
 * @param {?} p
 * @param {Object} i
 * @param {?} handler
 * @param {?} opt_attributes
 * @param {?} deepDataAndEvents
 * @param {number} replacementHash
 * @return {undefined}
 */
var C3 = function(p, i, handler, opt_attributes, deepDataAndEvents, replacementHash) {
  if (i) {
    var r = y3(p, i);
    /** @type {number} */
    r["iv-event"] = 3;
    r["i-time"] = p.l[i] || "";
    if (opt_attributes) {
      _yt_player.fc(r, opt_attributes);
    }
    i = z3(p, "cta_annotation_clicked", r, deepDataAndEvents);
    A3(p, r, i, handler, replacementHash);
  }
};
/**
 * @param {?} p
 * @param {?} i
 * @return {undefined}
 */
var D3 = function(p, i) {
  if (i) {
    var r = y3(p, i);
    /** @type {number} */
    r["iv-event"] = 4;
    r["i-time"] = p.l[i] || "";
    var hex = z3(p, "cta_annotation_closed", r);
    A3(p, r, hex);
  }
};
/**
 * @param {?} array
 * @param {boolean} iterator
 * @return {?}
 */
var yxa = function(array, iterator) {
  return iterator ? (0, _yt_player.G)(array, _yt_player.Ga(function(deepDataAndEvents, opt_obj2) {
    return _yt_player.Um(opt_obj2, deepDataAndEvents);
  }, iterator)) : array;
};
/**
 * @param {Object} p
 * @param {string} label
 * @param {Object} x
 * @param {Array} deepDataAndEvents
 * @return {?}
 */
var z3 = function(p, label, x, deepDataAndEvents) {
  deepDataAndEvents = deepDataAndEvents ? _yt_player.Ya(deepDataAndEvents) : [];
  if (30 == x["a-type"]) {
    a: {
      x = x["a-id"];
      p = p.g.getVideoData();
      if (p.Ax) {
        if ((label = p.Ax[label]) && _yt_player.hH(label)) {
          p = _yt_player.pb("[ANNOTATION_ID]");
          if (0 <= label.indexOf("[ANNOTATION_ID]")) {
            label = label.replace("[ANNOTATION_ID]", x);
          } else {
            if (0 <= label.indexOf(p)) {
              label = label.replace(p, x);
            }
          }
          break a;
        }
      } else {
        if (p.Lp) {
          label = _yt_player.fE(p.Lp, {
            label : label,
            value : "a_id=" + x
          });
          break a;
        }
      }
      /** @type {string} */
      label = "";
    }
    if (label) {
      deepDataAndEvents.push(label);
    }
  }
  return deepDataAndEvents;
};
/**
 * @param {?} s
 * @param {?} v
 * @param {Array} num
 * @param {?} callback
 * @param {number} object
 * @return {undefined}
 */
var A3 = function(s, v, num, callback, object) {
  /** @type {number} */
  var f = 1;
  /** @type {number} */
  var tref = -1;
  if (callback) {
    /** @type {boolean} */
    var l = false;
    /**
     * @return {undefined}
     */
    var install = function() {
      f--;
      if (!f) {
        if (!l) {
          (0, window.clearTimeout)(tref);
          /** @type {boolean} */
          l = true;
          callback();
        }
      }
    };
    /** @type {number} */
    tref = (0, window.setTimeout)(function() {
      /** @type {boolean} */
      l = true;
      callback();
    }, 1E3);
  }
  (0, _yt_player.B)(num || [], function(deepDataAndEvents) {
    f++;
    _yt_player.FE(deepDataAndEvents, install);
  });
  if (object) {
    f++;
    if (0 != object) {
      s.g.Ni(object, install);
    }
  }
  _yt_player.bV(s.g, "iv", v, install);
};
/**
 * @param {?} s
 * @param {?} key
 * @return {?}
 */
var y3 = function(s, key) {
  var regex = {};
  if (key) {
    var node = new _yt_player.Cm(key);
    (0, _yt_player.B)(node.Bb(), function(p) {
      /** @type {string} */
      regex[p] = (0, window.escape)(node.get(p, ""));
    });
  }
  regex["p-time"] = s.g.getCurrentTime().toFixed(2);
  regex.ps = _yt_player.Y(s.g).playerStyle;
  return regex;
};
/**
 * @param {?} jsonString
 * @param {?} i
 * @param {number} opt_attributes
 * @param {?} m1
 * @param {(Error|string)} first
 * @return {undefined}
 */
var E3 = function(jsonString, i, opt_attributes, m1, first) {
  first = y3(jsonString, first);
  /** @type {number} */
  first["iv-event"] = opt_attributes;
  if (i) {
    first.ei = i;
  }
  if (!first["a-id"]) {
    /** @type {string} */
    first["a-id"] = "card:drawer";
  }
  /** @type {number} */
  first["a-type"] = 51;
  A3(jsonString, first, m1);
};
/**
 * @param {?} jsonString
 * @param {number} opt_attributes
 * @param {(Error|string)} n
 * @param {?} m1
 * @return {undefined}
 */
var F3 = function(jsonString, opt_attributes, n, m1) {
  if (n) {
    n = y3(jsonString, n);
    /** @type {number} */
    n["iv-event"] = opt_attributes;
    A3(jsonString, n, m1);
  }
};
/**
 * @param {?} g
 * @param {?} dataAndEvents
 * @param {?} b
 * @param {?} deepDataAndEvents
 * @param {?} logger
 * @param {?} l
 * @param {?} o
 * @return {undefined}
 */
var zxa = function(g, dataAndEvents, b, deepDataAndEvents, logger, l, o) {
  this.g = g;
  this.A = dataAndEvents;
  this.B = b;
  this.videoData = deepDataAndEvents;
  this.logger = logger;
  this.l = l;
  this.o = o;
};
/**
 * @param {?} g
 * @param {?} dataAndEvents
 * @param {?} b
 * @return {undefined}
 */
var G3 = function(g, dataAndEvents, b) {
  this.g = g;
  this.A = dataAndEvents;
  this.B = b;
  this.l = new _yt_player.cp(null);
};
/**
 * @param {string} t
 * @param {Object} obj
 * @return {?}
 */
var Bxa = function(t, obj) {
  /** @type {Array} */
  var N = [];
  (0, _yt_player.B)(obj.choices, function(test) {
    N.push({
      G : "li",
      L : obj.B + "-" + test.index.toString(),
      N : [{
        G : "label",
        N : [{
          G : "input",
          L : "iv-card-poll-choice-input",
          P : {
            type : "checkbox",
            role : "radio",
            name : obj.B + test.index.toString(),
            value : test.index.toString(),
            "data-poll-choice-index" : test.index.toString()
          }
        }, {
          G : "span",
          L : "iv-card-poll-choice-text",
          N : [{
            G : "span",
            L : "iv-card-poll-choice-percent"
          }, H3(this, "span", void 0, test.desc)]
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
  }, t);
  var c = {
    G : "ul",
    P : {
      role : "radiogroup"
    },
    N : N
  };
  var attributes = {};
  if (obj.A) {
    attributes["aria-label"] = _yt_player.O0("$POLL_TITLE - Sign in to vote.", {
      POLL_TITLE : obj.title
    });
  }
  /** @type {Array} */
  var def = ["iv-card", "iv-card-poll"];
  /** @type {Array} */
  c = [{
    G : "div",
    L : "iv-card-content",
    N : [H3(t, "h2", attributes, obj.title), {
      G : "form",
      N : [{
        G : "fieldset",
        N : [c]
      }]
    }]
  }];
  if (obj.A) {
    def.push("iv-card-unavailable");
    c.push({
      G : "div",
      da : ["iv-card-sign-in"],
      N : [{
        G : "h2",
        aa : "Want to vote?"
      }, {
        G : "a",
        da : ["iv-card-sign-in-button", "iv-button"],
        P : {
          href : X2(obj.A)
        },
        N : [{
          G : "span",
          da : ["iv-button-content"],
          aa : I3.cI
        }]
      }]
    });
  }
  def = new _yt_player.W({
    G : "div",
    da : def,
    N : c
  });
  c = def.element;
  Axa(obj, c);
  pva(t.g.g, c, _yt_player.Ga(t.D, obj), t);
  (0, _yt_player.B)(_yt_player.rd("iv-card-poll-choice-input", c), function(deepDataAndEvents) {
    this.g.g.U(deepDataAndEvents, "focus", _yt_player.Ga(this.o, true));
    this.g.g.U(deepDataAndEvents, "blur", _yt_player.Ga(this.o, false));
  }, t);
  if (obj.A) {
    c = _yt_player.J("iv-card-sign-in-button", c);
    t.A(c, obj.A, obj.id, obj.Rd, obj.o, obj.l.click, 5);
  }
  return def;
};
/**
 * @param {Node} _super
 * @param {Object} data
 * @param {?} description
 * @param {?} desc
 * @return {?}
 */
var L3 = function(_super, data, description, desc) {
  /** @type {(string|{G: string, L: string, aa: ??})} */
  var unique = data.displayDomain ? {
    G : "div",
    L : "iv-card-image-text",
    aa : data.displayDomain
  } : "";
  var buf = Cxa(_super, data);
  /** @type {Array} */
  var progressValues = ["iv-card"];
  if (data.g) {
    progressValues.push("iv-card-unavailable");
  }
  /** @type {Array} */
  unique = [{
    G : "a",
    L : "iv-click-target",
    P : {
      href : X2(data.url)
    },
    N : [J3(data.imageUrl, unique), {
      G : "div",
      L : "iv-card-content",
      N : [H3(_super, "h2", void 0, data.title), buf]
    }]
  }];
  if (data.g) {
    unique.push({
      G : "div",
      da : ["iv-card-sign-in"],
      N : [H3(_super, "h2", void 0, data.J || ""), {
        G : "p",
        aa : data.I
      }, {
        G : "a",
        da : ["iv-card-sign-in-button", "iv-button"],
        P : {
          href : X2(data.g)
        },
        N : [H3(_super, "span", "iv-button-content", I3.cI)]
      }]
    });
  }
  progressValues = new _yt_player.W({
    G : "div",
    da : progressValues,
    N : unique
  });
  K3(_super, progressValues, data, description, desc);
  return progressValues;
};
/**
 * @param {Node} _super
 * @param {Object} obj
 * @param {Object} deepDataAndEvents
 * @return {?}
 */
var Dxa = function(_super, obj, deepDataAndEvents) {
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
  deepDataAndEvents = {
    G : "div",
    da : ["iv-card", deepDataAndEvents],
    N : [{
      G : "a",
      L : "iv-click-target",
      P : {
        href : X2(obj.url)
      },
      N : [J3(obj.H, delimiters ? {
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
        }, M3(_super, obj)]
      }]
    }]
  };
  deepDataAndEvents = new _yt_player.W(deepDataAndEvents);
  K3(_super, deepDataAndEvents, obj);
  return deepDataAndEvents;
};
/**
 * @param {Node} b
 * @param {Object} a
 * @return {?}
 */
var N3 = function(b, a) {
  return a.customMessage ? H3(b, "div", "iv-card-message", a.customMessage) : "";
};
/**
 * @param {?} dataAndEvents
 * @param {?} item
 * @return {?}
 */
var J3 = function(dataAndEvents, item) {
  /** @type {string} */
  var gstyle = "background-image: url(" + dataAndEvents + ");";
  /** @type {Array} */
  var caseSensitive = [];
  if (item) {
    caseSensitive.push(item);
  }
  return{
    G : "div",
    L : "iv-card-image",
    P : {
      style : gstyle
    },
    N : caseSensitive
  };
};
/**
 * @param {(Node|string)} b
 * @param {Object} expr
 * @return {?}
 */
var M3 = function(b, expr) {
  if (!expr.metaInfo || 0 == expr.metaInfo.length) {
    return "";
  }
  /** @type {Array} */
  var _indexHtml = [];
  (0, _yt_player.B)(expr.metaInfo, function(deepDataAndEvents) {
    _indexHtml.push(H3(this, "li", "", deepDataAndEvents));
  }, b);
  return{
    G : "ul",
    L : "iv-card-meta-info",
    N : _indexHtml
  };
};
/**
 * @param {Node} b
 * @param {string} el
 * @param {Object} attributes
 * @param {?} deepDataAndEvents
 * @return {?}
 */
var H3 = function(b, el, attributes, deepDataAndEvents) {
  if (attributes) {
    if (_yt_player.u(attributes)) {
      attributes = {
        "class" : attributes
      };
    } else {
      if (_yt_player.Aa(attributes)) {
        attributes = {
          "class" : attributes.join(" ")
        };
      }
    }
  } else {
    attributes = {};
  }
  attributes.dir = _yt_player.dp(b.l, deepDataAndEvents);
  return{
    G : el,
    P : attributes,
    aa : deepDataAndEvents
  };
};
/**
 * @param {Node} b
 * @param {Object} _xhr
 * @return {?}
 */
var Cxa = function(b, _xhr) {
  if (!_xhr.customMessage) {
    return "";
  }
  /** @type {Array} */
  var eventPath = ["iv-card-action", "iv-card-primary-link"];
  var html = {};
  if (_xhr.A) {
    eventPath.push("iv-card-action-icon");
    /** @type {string} */
    html.style = "background-image: url(" + _xhr.A + ");";
  }
  html.dir = _yt_player.dp(b.l, _xhr.customMessage);
  /** @type {Array} */
  var oSpace = [{
    G : "span",
    aa : _xhr.customMessage
  }];
  if (_xhr.showLinkIcon) {
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
 * @param {?} needle
 * @return {undefined}
 */
var Axa = function(data, needle) {
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
    var oldconfig = _yt_player.J(data.B + "-" + a.index.toString(), needle);
    /** @type {number} */
    a = a.count / count;
    if (null == data.g) {
      /** @type {number} */
      a = 0;
    }
    _yt_player.U(oldconfig.getElementsByTagName("label")[0], "iv-card-poll-choice-checked", data.g == i);
    /** @type {boolean} */
    oldconfig.getElementsByTagName("input")[0].checked = data.g == i;
    /** @type {string} */
    var PERCENT = Math.floor(100 * a).toFixed(0);
    var r20 = _yt_player.J("iv-card-poll-choice-percent", oldconfig);
    _yt_player.Sd(r20, _yt_player.O0("$PERCENT%", {
      PERCENT : PERCENT
    }));
    oldconfig = _yt_player.J("iv-card-poll-result-bar", oldconfig);
    _yt_player.ph(oldconfig, "transform", "scaleX(" + a.toFixed(2) + ")");
  }
  _yt_player.U(needle, "iv-card-poll-voted", null != data.g);
  _yt_player.U(needle, "iv-card-poll-expanded", null != data.g && 1 < data.choices.length);
};
/**
 * @param {Object} self
 * @param {Object} item
 * @param {boolean} recurring
 * @param {(Error|string)} regex
 * @return {undefined}
 */
var Exa = function(self, item, recurring, regex) {
  if (regex) {
    if (!(recurring && self.g.videoData.za)) {
      self.g.l.hd();
    }
    if (self.g.l.isFullscreen()) {
      _yt_player.YU(self.g.l);
    }
    C3(self.g.logger, item.o, regex, void 0, item.l.click, 5);
  } else {
    if (item.url) {
      self.B(item.url, item.id, item.Rd, item.o, item.l.click || [], 5);
    }
  }
};
/**
 * @param {(Node|string)} b
 * @param {Object} deepDataAndEvents
 * @param {Object} data
 * @param {?} description
 * @param {?} desc
 * @return {undefined}
 */
var K3 = function(b, deepDataAndEvents, data, description, desc) {
  if (data.g) {
    Fxa(b, _yt_player.rd("iv-card-sign-in-button", deepDataAndEvents.element), data, data.g, desc);
  }
  if (data.url) {
    Fxa(b, _yt_player.rd("iv-click-target", deepDataAndEvents.element), data, data.url, description);
  }
};
/**
 * @param {(RegExp|string)} v12
 * @param {?} deepDataAndEvents
 * @param {Object} unit
 * @param {?} QUnit
 * @param {?} description
 * @return {undefined}
 */
var Fxa = function(v12, deepDataAndEvents, unit, QUnit, description) {
  (0, _yt_player.B)(deepDataAndEvents, function(ll) {
    if (description) {
      var r20 = (0, _yt_player.z)(function(event) {
        event.stopPropagation();
        event.preventDefault();
        description();
        return false;
      }, this);
      this.g.g.U(ll, "click", r20);
    } else {
      if (QUnit) {
        this.A(ll, QUnit, unit.id, unit.Rd, unit.o, unit.l.click, 5);
      }
    }
  }, v12);
};
/**
 * @param {number} g
 * @return {?}
 */
var Gxa = function(g) {
  /** @type {number} */
  var regexString = 0;
  if (-1 != g.indexOf("h")) {
    g = g.split("h");
    /** @type {number} */
    regexString = 3600 * g[0];
    g = g[1];
  }
  if (-1 != g.indexOf("m")) {
    g = g.split("m");
    /** @type {number} */
    regexString = 60 * g[0] + regexString;
    g = g[1];
  }
  if (-1 != g.indexOf("s")) {
    g = g.split("s");
    /** @type {number} */
    regexString = 1 * g[0] + regexString;
  } else {
    /** @type {number} */
    regexString = 1 * g + regexString;
  }
  return regexString;
};
/**
 * @param {string} str
 * @return {?}
 */
var O3 = function(str) {
  var json;
  if (json = str) {
    if (!(json = 1 < str.length ? "/" == str.charAt(0) && "/" != str.charAt(1) : "/" == str)) {
      json = Hxa(str);
      /** @type {boolean} */
      json = "com" == json[0] && "youtube" == json[1] || "be" == json[0] && "youtu" == json[1];
    }
  }
  return json ? -1 == str.indexOf("/redirect?") : false;
};
/**
 * @param {string} input
 * @return {?}
 */
var Hxa = function(input) {
  input = input.replace(/^(https?:)?\/\//, "");
  input = input.split("/", 1);
  return!input || (1 > input.length || !input[0]) ? [] : input[0].toLowerCase().split(".").reverse();
};
/**
 * @param {string} body
 * @return {?}
 */
var Ixa = function(body) {
  body = X2(body);
  if (!body) {
    return null;
  }
  body = body.replace(/https?:\/\//g, "");
  var t;
  if (!(t = !O3(body))) {
    t = _yt_player.Gg(_yt_player.Fg(body)[5] || null) || "";
    t = t.split("/");
    t = "/" + (1 < t.length ? t[1] : "");
    /** @type {boolean} */
    t = "/watch" != t;
  }
  if (t) {
    return null;
  }
  t = _yt_player.dE(body);
  if (!t || !t.v) {
    return null;
  }
  if (t = t.t) {
    return Gxa(t);
  }
  body = body.split("#", 2);
  return!body || 2 > body.length ? null : (body = _yt_player.bE(body[1])) && body.t ? Gxa(body.t) : -1;
};
/**
 * @param {string} val
 * @return {?}
 */
var Jxa = function(val) {
  val = X2(val);
  val = val.replace(/https?:\/\//g, "");
  return O3(val) ? (val = _yt_player.dE(val)) && val.v ? val.v : null : null;
};
/**
 * @param {string} v
 * @param {string} qualifier
 * @param {string} n
 * @return {?}
 */
var Kxa = function(v, qualifier, n) {
  n = n.replace(/\/(u|b)\/[0-9]+/g, "");
  /** @type {RegExp} */
  var isSimple = /^[0-9]+$/;
  if (v) {
    if (isSimple.test(v)) {
      /** @type {string} */
      n = "/b/" + v + n;
    }
  }
  if (qualifier) {
    if (isSimple.test(qualifier)) {
      /** @type {string} */
      n = "/u/" + qualifier + n;
    }
  }
  return n;
};
/**
 * @param {?} key
 * @param {Object} opt_locale
 * @return {?}
 */
var P3 = function(key, opt_locale) {
  return opt_locale ? opt_locale : O3(key) ? "current" : "new";
};
/**
 * @param {?} dataAndEvents
 * @param {Object} context
 * @return {undefined}
 */
var Q3 = function(dataAndEvents, context) {
  _yt_player.M.call(this);
  this.Ga = dataAndEvents;
  /** @type {Object} */
  this.context = context;
  /** @type {boolean} */
  this.Yv = false;
  /** @type {number} */
  this.Y = 0;
};
/**
 * @param {Function} array
 * @param {?} QUnit
 * @param {number} opt_attributes
 * @param {string} left
 * @param {Function} container
 * @param {Function} fieldName
 * @return {undefined}
 */
var R3 = function(array, QUnit, opt_attributes, left, container, fieldName) {
  QUnit = new _yt_player.eQ(QUnit, opt_attributes, {
    id : left
  });
  _yt_player.N(array, QUnit);
  /** @type {string} */
  QUnit.namespace = "annotations_module";
  if (container) {
    qva(QUnit).subscribe("onEnter", container, array);
  }
  if (fieldName) {
    qva(QUnit).subscribe("onExit", fieldName, array);
  }
  _yt_player.hV(array.context.l, [QUnit]);
};
/**
 * @param {Object} p
 * @return {?}
 */
var Lxa = function(p) {
  return(0, _yt_player.F)() - p.Y;
};
/**
 * @param {Object} parser
 * @param {Object} obj
 * @param {?} deepDataAndEvents
 * @param {boolean} dataAndEvents
 * @param {?} f
 * @param {number} options
 * @return {undefined}
 */
var Mxa = function(parser, obj, deepDataAndEvents, dataAndEvents, f, options) {
  var type = X2(obj);
  if (type) {
    var size = P3(type, obj.target);
    var resolve = (0, _yt_player.z)(function() {
      if (obj.g) {
        this.context.l.hd();
      }
      _yt_player.vV(type || "", "current" == size ? "_top" : void 0, deepDataAndEvents);
    }, parser);
    if ("new" == size) {
      resolve();
      /** @type {null} */
      resolve = null;
    }
    var attributes = {};
    attributes.interval = Lxa(parser);
    C3(parser.context.logger, dataAndEvents, resolve, attributes, f, options);
    if (!O3(type)) {
      parser = _yt_player.MG();
      dataAndEvents = deepDataAndEvents.itct;
      if (parser) {
        if (dataAndEvents) {
          E2(parser, l2(dataAndEvents));
        }
      }
    }
  }
};
/**
 * @param {?} g
 * @param {?} mapper
 * @param {Object} data
 * @return {undefined}
 */
var U3 = function(g, mapper, data) {
  Q3.call(this, mapper, data);
  var self = this;
  this.g = g;
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
  this.C = new G3(data, (0, _yt_player.z)(this.Zi, this), (0, _yt_player.z)(this.Uo, this));
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
  R3(this, 0, 1E3 * data.videoData.lengthSeconds, "", function() {
    if (self.ya) {
      S3(self, "YOUTUBE_DRAWER_AUTO_OPEN");
    }
  }, function() {
    if (self.ya = self.B) {
      T3(self);
    }
  });
  /** @type {null} */
  this.I = this.ga = this.ea = null;
};
/**
 * @param {Object} item
 * @param {Object} dom
 * @return {undefined}
 */
var Sxa = function(item, dom) {
  var config = dom && (dom.data && dom.data.card_type);
  if (config && Nxa[config]) {
    config = new Nxa[config](dom.id, dom.data, dom.g);
    if (!item.sa) {
      _yt_player.lq(item.la(), ["html5-stop-propagation", "iv-drawer-manager"]);
      _yt_player.mV(item.g, item.D, 5);
      Oxa(item);
      item.K = _yt_player.J("ytp-cards-button", item.g.getRootNode());
      var p = _yt_player.J("iv-drawer-close-button", item.D);
      item.ra = p;
      /** @type {boolean} */
      item.sa = true;
    }
    Pxa(item, config.id);
    var result = Qxa(item, config);
    if (result) {
      p = {
        hc : config,
        ur : result.element,
        BA : false
      };
      var index = Rxa(item, p);
      _yt_player.ab(item.o, index, 0, p);
      result.ua(item.A, index);
      item.Fn();
      if (config.autoOpen) {
        R3(item, config.startMs, 0x8000000000000, config.id, _yt_player.Ga(item.MV, p));
      } else {
        /** @type {number} */
        result = 1E3 * item.context.l.getCurrentTime();
        if (5E3 > result) {
          if (result > config.startMs) {
            item.kE(p);
          }
        }
        R3(item, config.startMs, config.startMs + 1, config.id, _yt_player.Ga(item.kE, p));
        V3(item);
      }
    }
  }
};
/**
 * @param {Object} obj
 * @param {Object} item
 * @return {undefined}
 */
var Txa = function(obj, item) {
  if (item.data.autoOpenMs) {
    R3(obj, item.data.autoOpenMs, 0x8000000000000, "", function() {
      S3(obj, "YOUTUBE_DRAWER_AUTO_OPEN");
    });
  }
  if (item.data.autoCloseMs) {
    R3(obj, item.data.autoCloseMs, 0x8000000000000, "", function() {
      T3(obj);
    });
  }
  var t = item.data.headerText;
  _yt_player.Sd(obj.Da, t);
  if (obj.K) {
    obj.K.setAttribute("title", t);
  }
  if (item.data.eventId) {
    obj.M = item.data.eventId;
  }
  obj.ea = l2(item.data.trackingParams);
  obj.I = l2(item.data.closeTrackingParams);
  obj.ga = l2(item.data.iconTrackingParams);
};
/**
 * @param {Object} o
 * @param {Object} selector
 * @return {undefined}
 */
var Pxa = function(o, selector) {
  var val = Uxa(o, selector);
  if (val) {
    if (val == o.l) {
      /** @type {null} */
      o.l = null;
    }
    o.g.kB(val.hc.id);
    _yt_player.Kd(val.ur);
    _yt_player.Va(o.o, val);
    o.Fn();
    V3(o);
  }
};
/**
 * @param {Object} item
 * @param {?} triggerRoute
 * @param {boolean} deepDataAndEvents
 * @param {Object} self
 * @return {undefined}
 */
var S3 = function(item, triggerRoute, deepDataAndEvents, self) {
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
    E3(item.context.logger, item.M, 7, void 0, self && self.hc ? self.hc.o : void 0);
    var mySecret = _yt_player.MG();
    if (mySecret) {
      if (item.ea) {
        if (item.I) {
          D2(mySecret, item.ea);
          D2(mySecret, item.I);
        }
      }
    }
    var camelKey = {
      TRIGGER_TYPE : triggerRoute
    };
    (0, _yt_player.B)(item.o, function(url_parts) {
      if (!url_parts.BA) {
        /** @type {boolean} */
        url_parts.BA = true;
        B3(item.context.logger, url_parts.hc.o, url_parts.hc.l.BL, camelKey);
      }
      if (mySecret) {
        D2(mySecret, url_parts.hc.C);
      }
    });
    U1(item.g);
    if (deepDataAndEvents) {
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
var T3 = function(c) {
  if (c.B) {
    c.ca.hide();
    _yt_player.sF(c.X);
    /** @type {null} */
    c.X = null;
    _yt_player.mq(c.context.l.getRootNode(), "ytp-iv-drawer-open");
    /** @type {boolean} */
    c.B = false;
    U1(c.g);
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
var Oxa = function(item) {
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
 * @param {Object} item
 * @param {Object} data
 * @return {?}
 */
var Qxa = function(item, data) {
  switch(data.type) {
    case "simple":
      return L3(item.C, data);
    case "collaborator":
      var oldconfig = item.C;
      var desc = {
        G : "div",
        da : ["iv-card", "iv-card-channel"],
        N : [{
          G : "a",
          da : ["iv-click-target"],
          P : {
            href : X2(data.url),
            "data-ytid" : data.channelId
          },
          N : [J3(data.profileImageUrl), {
            G : "div",
            L : "iv-card-content",
            N : [N3(oldconfig, data), {
              G : "h2",
              L : "iv-card-primary-link",
              aa : data.title
            }, M3(oldconfig, data)]
          }]
        }]
      };
      desc = new _yt_player.W(desc);
      K3(oldconfig, desc, data);
      return desc;
    case "donation":
      return oldconfig = item.C, desc = (0, _yt_player.z)(oldconfig.C, oldconfig, data), L3(oldconfig, data, desc, desc);
    case "episode":
      return Dxa(item.C, data, "iv-card-episode");
    case "movie":
      return Dxa(item.C, data, "iv-card-movie");
    case "playlist":
      return oldconfig = item.C, desc = {
        G : "div",
        da : ["iv-card", "iv-card-playlist"],
        N : [{
          G : "a",
          L : "iv-click-target",
          P : {
            href : X2(data.url)
          },
          N : [J3(data.A, {
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
            N : [N3(oldconfig, data), H3(oldconfig, "h2", "iv-card-primary-link", data.title), M3(oldconfig, data)]
          }]
        }]
      }, desc = new _yt_player.W(desc), K3(oldconfig, desc, data), desc;
    case "poll":
      return Bxa(item.C, data);
    case "productListing":
      oldconfig = item.C;
      /** @type {boolean} */
      var result = !_yt_player.Ra(data.offers);
      /** @type {Array} */
      desc = ["iv-card"];
      /** @type {string} */
      var y = "";
      var buf = Cxa(oldconfig, data);
      if (result) {
        desc.push("iv-card-product-listing");
        /** @type {string} */
        y = "iv-card-primary-link";
        result = data.offers[0];
        /** @type {Array} */
        buf = [];
        if (result.price) {
          buf.push({
            G : "div",
            L : "iv-card-offer-price",
            aa : result.price
          });
        }
        if (result.merchant) {
          buf.push({
            G : "div",
            L : "iv-card-offer-merchant",
            aa : result.merchant
          });
        }
        buf = {
          G : "div",
          N : buf
        };
      }
      desc = {
        G : "div",
        da : desc,
        P : {
          tabindex : "0"
        },
        N : [{
          G : "a",
          da : ["iv-card-image", "iv-click-target"],
          P : {
            style : "background-image: url(" + data.imageUrl + ");",
            href : X2(data.url),
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
              href : X2(data.url)
            },
            N : [H3(oldconfig, "h2", y, data.title), buf]
          }]
        }]
      };
      desc = new _yt_player.W(desc);
      y = _yt_player.Ed("span");
      _yt_player.Sd(y, "You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.");
      desc.Mb(y, "adInfo");
      K3(oldconfig, desc, data);
      return desc;
    case "tip":
      return oldconfig = item.C, desc = (0, _yt_player.z)(oldconfig.F, oldconfig, data), L3(oldconfig, data, desc, desc);
    case "video":
      return oldconfig = item.C, desc = data.isLiveNow ? {
        G : "span",
        da : ["yt-badge", "yt-badge-live"],
        aa : "LIVE NOW"
      } : "", desc = {
        G : "div",
        da : ["iv-card", "iv-card-video"],
        N : [{
          G : "a",
          L : "iv-click-target",
          P : {
            href : X2(data.url)
          },
          N : [J3(data.A, data.videoDuration ? {
            G : "span",
            L : "iv-card-video-duration",
            aa : data.videoDuration
          } : ""), {
            G : "div",
            L : "iv-card-content",
            N : [N3(oldconfig, data), H3(oldconfig, "h2", "iv-card-primary-link", data.title), M3(oldconfig, data), desc]
          }]
        }]
      }, desc = new _yt_player.W(desc), K3(oldconfig, desc, data), desc;
  }
  return null;
};
/**
 * @param {Object} item
 * @param {?} e
 * @return {?}
 */
var Rxa = function(item, e) {
  if (0 == item.o.length) {
    return 0;
  }
  var b = _yt_player.Na(item.o, function(a) {
    return e.hc.startMs > a.hc.startMs || e.hc.startMs == a.hc.startMs && e.hc.timestamp >= a.hc.timestamp ? true : false;
  });
  return-1 == b ? 0 : b + 1;
};
/**
 * @param {Object} p
 * @return {?}
 */
var Vxa = function(p) {
  return p.l ? "productListing" == p.l.hc.type : (0, _yt_player.dm)(p.o, function(e) {
    return "productListing" == e.hc.type;
  });
};
/**
 * @param {Object} spec
 * @return {undefined}
 */
var V3 = function(spec) {
  _yt_player.U(spec.g.getRootNode(), "ytp-cards-shopping-active", Vxa(spec));
};
/**
 * @param {Object} self
 * @param {Object} c
 * @return {undefined}
 */
var Wxa = function(self, c) {
  if (self.H.o) {
    var anim2 = new d2([0, self.A.scrollTop], [0, c.ur.offsetTop], 600, Hva);
    self.context.A.U(anim2, "animate", function(d) {
      self.A.scrollTop = d.y;
    });
    self.context.A.U(anim2, "finish", function(d) {
      self.A.scrollTop = d.y;
    });
    anim2.play();
  } else {
    _yt_player.sH(self.H, true);
    self.A.scrollTop = c.ur.offsetTop;
    _yt_player.sH(self.H, false);
  }
};
/**
 * @param {Object} t
 * @return {?}
 */
var W3 = function(t) {
  return t.l && t.l.hc ? t.l.hc : t.o[0] && t.o[0].hc ? t.o[0].hc : null;
};
/**
 * @param {Object} label
 * @param {Object} value
 * @return {?}
 */
var Uxa = function(label, value) {
  return _yt_player.Ma(label.o, function(e) {
    return e.hc.id == value;
  });
};
/**
 * @param {?} mapper
 * @param {?} graphics
 * @param {string} annotation
 * @return {undefined}
 */
var X3 = function(mapper, graphics, annotation) {
  Q3.call(this, mapper, graphics);
  /** @type {string} */
  this.annotation = annotation;
  /** @type {boolean} */
  this.isActive = false;
};
/**
 * @param {Object} other
 * @return {undefined}
 */
var Xxa = function(other) {
  var dataAttr = other.annotation.data;
  if ("start_ms" in dataAttr) {
    if ("end_ms" in dataAttr) {
      R3(other, other.annotation.data.start_ms, other.annotation.data.end_ms, other.annotation.id, function() {
        other.show();
      }, function() {
        other.hide();
      });
    }
  }
};
/**
 * @param {?} mapper
 * @param {?} h
 * @param {?} capture
 * @return {undefined}
 */
var Y3 = function(mapper, h, capture) {
  X3.call(this, mapper, h, capture);
  this.H = h;
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
 * @param {?} mapper
 * @param {?} graphics
 * @param {?} capture
 * @return {undefined}
 */
var Z3 = function(mapper, graphics, capture) {
  X3.call(this, mapper, graphics, capture);
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
var Yxa = function(node) {
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
  var progressValues = ["iv-promo", "iv-promo-inactive"];
  node.la().setAttribute("aria-hidden", true);
  node.la().setAttribute("aria-label", "Promotion");
  /** @type {number} */
  node.la().tabIndex = 0;
  var length = node.annotation.Ta();
  var s = opts.image_url;
  if (s) {
    var head = _yt_player.K("DIV", ["iv-promo-img", "iv-click-target"]);
    s = _yt_player.K("IMG", {
      src : s,
      "aria-hidden" : "true"
    });
    head.appendChild(s);
    if (opts.video_duration && !opts.is_live) {
      s = _yt_player.K("SPAN", "iv-promo-video-duration", opts.video_duration);
      head.appendChild(s);
    } else {
      if (opts.playlist_length) {
        s = _yt_player.K("SPAN", "iv-promo-playlist-length", opts.playlist_length.toString());
        head.appendChild(s);
      }
    }
    if (length) {
      node.Zi(head, length, node.annotation.id, opts.session_data, node.annotation.g, void 0, key);
    }
  }
  if (length) {
    s = _yt_player.K("A", "iv-promo-txt");
    _yt_player.ad(s, X2(length));
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
        progressValues.push("iv-promo-website-card-cta-redesign");
        var parent = _yt_player.K("BUTTON", ["iv-promo-round-expand-icon", "ytp-button"]);
        s = _yt_player.K("BUTTON", ["iv-button", "iv-promo-button"], _yt_player.K("SPAN", "iv-button-content", s));
        var div = _yt_player.K("DIV", "iv-promo-button-container");
        div.appendChild(s);
        if (length) {
          node.Zi(node.la(), length, node.annotation.id, opts.session_data, node.annotation.g, void 0, key);
        }
      }
      _yt_player.S(node.g, "iv-click-target");
      if (length) {
        node.Zi(node.g, length, node.annotation.id, opts.session_data, node.annotation.g, void 0, key);
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
      if (length) {
        node.Zi(node.g, length, node.annotation.id, opts.session_data, node.annotation.g, void 0, key);
      }
      progressValues.push("iv-promo-video");
      break;
    case "vote":
      p = _yt_player.K("P", null, _yt_player.K("STRONG", null, opts.text_line_1));
      cell = _yt_player.K("P", null, _yt_player.K("SPAN", null, opts.text_line_2));
      div = _yt_player.K("DIV", "iv-promo-button-container");
      key = _yt_player.K("BUTTON", ["iv-button", "iv-promo-button"], _yt_player.K("SPAN", "iv-button-content", opts.button_text));
      node.context.g.U(key, "click", function(event) {
        event.stopPropagation();
        C3(this.context.logger, this.annotation.g, null, {
          contest_vote : "1"
        }, (opts.tracking || {}).vote);
        event = this.annotation.data;
        this.g = _yt_player.J("iv-promo-txt", this.D);
        var parent = _yt_player.J("iv-promo-button-container", this.D);
        var node = _yt_player.K("DIV", ["iv-promo-txt", "iv-click-target"]);
        var grandparent = _yt_player.K("P", null, _yt_player.K("STRONG", null, event.text_line_3));
        var helloWorld = _yt_player.K("P", null, event.text_line_4);
        _yt_player.Hd(node, grandparent, helloWorld);
        _yt_player.Kd(parent);
        parent = this.g;
        if (grandparent = parent.parentNode) {
          grandparent.replaceChild(node, parent);
        }
        _yt_player.mq(this.la(), "iv-promo-with-button");
        if (parent = this.annotation.Ta()) {
          this.Zi(node, parent, this.annotation.id, event.session_data, this.annotation.g);
        }
      }, node);
      div.appendChild(key);
      progressValues.push("iv-promo-with-button");
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
  node.o.title = I3.CLOSE;
  node.context.g.U(node.o, "click", "cta" == node.annotation.style && opts.text_line_3 ? node.UJ : node.LO, node);
  p.appendChild(node.o);
  _yt_player.lq(node.la(), progressValues);
  if (head) {
    _yt_player.Gd(node.la(), head);
    if (parent) {
      head.appendChild(parent);
    }
  }
  _yt_player.Gd(node.la(), node.D);
  _yt_player.Gd(node.la(), p);
};
/**
 * @param {Object} self
 * @return {undefined}
 */
var Zxa = function(self) {
  if (!self.B) {
    if (!self.H) {
      if (!self.A) {
        _yt_player.S(self.la(), "iv-promo-collapsed");
        /** @type {boolean} */
        self.B = true;
        self.C.start();
      }
    }
  }
};
/**
 * @param {Object} o
 * @return {undefined}
 */
var $xa = function(o) {
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
 * @param {Date} self
 * @param {number} opt_attributes
 * @return {undefined}
 */
var aya = function(self, opt_attributes) {
  if (!self.A) {
    self.A = _yt_player.tg(function() {
      $3(this);
      Zxa(this);
    }, opt_attributes, self);
  }
};
/**
 * @param {Date} dataAndEvents
 * @return {undefined}
 */
var $3 = function(dataAndEvents) {
  if (dataAndEvents.A) {
    _yt_player.ug(dataAndEvents.A);
    /** @type {null} */
    dataAndEvents.A = null;
  }
};
/**
 * @param {string} sheet
 * @return {undefined}
 */
var a4 = function(sheet) {
  _yt_player.sV.call(this, sheet);
  /** @type {boolean} */
  this.J = false;
  /** @type {number} */
  this.I = 0;
  this.o = {};
  this.K = {};
  this.Ya = new wxa(sheet);
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
  if (bya(this)) {
    this.load();
  }
  var _style = _yt_player.Ed("STYLE");
  (window.document.getElementsByTagName("HEAD")[0] || window.document.body).appendChild(_style);
  _yt_player.Ze(this, function() {
    _yt_player.Kd(_style);
  });
  if (sheet = _style.sheet) {
    sheet.insertRule(".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}", 
    0);
    sheet.insertRule(".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 
    0);
    sheet.insertRule(".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", 0);
    sheet.insertRule(".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}", 0);
    sheet.insertRule(".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 0);
    sheet.insertRule(".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}", 0);
    sheet.insertRule(".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", 0);
    sheet.insertRule(".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}", 
    0);
    sheet.insertRule(".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", 
    0);
    sheet.insertRule(".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}", 
    0);
  }
};
/**
 * @param {?} dataAndEvents
 * @return {?}
 */
var cya = function(dataAndEvents) {
  switch(dataAndEvents) {
    case "annotation-editor":
    ;
    case "live-dashboard":
      return true;
  }
  return false;
};
/**
 * @param {Object} self
 * @return {?}
 */
var bya = function(self) {
  var args = _yt_player.Y(self.g);
  self = self.g.getVideoData();
  return 1 == (args.Xg || self.Xg) && !self.Rk || null !== args.C.get(self.videoId);
};
/**
 * @param {Date} dataAndEvents
 * @param {Element} d
 * @param {boolean} obj
 * @return {undefined}
 */
var dya = function(dataAndEvents, d, obj) {
  /** @type {boolean} */
  dataAndEvents.J = true;
  dataAndEvents.D = _yt_player.nE(d, obj);
};
/**
 * @param {boolean} v12
 * @param {Element} element
 * @return {?}
 */
var eya = function(v12, element) {
  var obj = {};
  /** @type {number} */
  var i = 0;
  for (;i < element.attributes.length;i++) {
    var node = element.attributes[i];
    obj[node.name] = node.nodeValue;
  }
  /** @type {number} */
  i = 0;
  for (;i < element.childNodes.length;i++) {
    if (node = element.childNodes[i], node.tagName) {
      if (obj[node.tagName]) {
        var val = obj[node.tagName]
      } else {
        if ("data" == node.tagName) {
          if (0 < node.childNodes.length) {
            val = node.childNodes[0].nodeValue;
            obj[node.tagName] = "string" == typeof val ? val.trim() : val;
          }
          continue;
        } else {
          /** @type {Array} */
          val = [];
          /** @type {Array} */
          obj[node.tagName] = val;
        }
      }
      if (node && "TEXT" == node.tagName) {
        if (1 == node.childNodes.length && 3 == node.childNodes[0].nodeType) {
          val.push(node.childNodes[0].nodeValue);
        } else {
          val.push("");
        }
      } else {
        if (node) {
          val.push(eya(v12, node));
        }
      }
    }
  }
  return obj;
};
/**
 * @param {Object} obj
 * @param {(Node|string)} object
 * @param {?} deepDataAndEvents
 * @return {?}
 */
var fya = function(obj, object, deepDataAndEvents) {
  return!(obj.loaded && (obj.I == object && obj.g.getVideoData().videoId == deepDataAndEvents));
};
/**
 * @param {Node} x
 * @param {Object} node
 * @return {?}
 */
var hya = function(x, node) {
  var oldconfig = gya(x, node);
  if (!oldconfig && "marker" != node.type) {
    return null;
  }
  Twa(node, function(f) {
    f = (0, _yt_player.z)(this.wU, this, node.id, f);
    this.subscribe("ivTrigger:" + node.id, f);
  }, x);
  var ll = new u3(x.ea, node, oldconfig);
  _yt_player.N(ll, oldconfig);
  return ll;
};
/**
 * @param {Object} o
 * @param {Object} date
 * @return {?}
 */
var iya = function(o, date) {
  var div = _yt_player.K("DIV", ["annotation", "annotation-type-custom"]);
  _yt_player.O(div, false);
  /** @type {null} */
  var DatePicker = null;
  switch(date.type) {
    case "branding":
      if (_yt_player.Y(o.g).Bd) {
        break;
      }
      o.A.element.appendChild(div);
      DatePicker = new Y3(div, b4(o), date);
      break;
    case "promotion":
      _yt_player.mV(o.g, div, 4);
      DatePicker = new Z3(div, b4(o), date);
  }
  if (DatePicker) {
    DatePicker.gq();
  }
  return DatePicker;
};
/**
 * @param {Object} obj
 * @return {undefined}
 */
var lya = function(obj) {
  var self = obj.g.getVideoData();
  if (self.Of) {
    var item = _yt_player.Y(obj.g);
    var oldconfig = item.C.get(self.videoId);
    if (oldconfig) {
      var json = {
        format : "XML",
        ad : {},
        method : "POST",
        withCredentials : true
      };
      if ("gaming" == item.playerStyle) {
        /** @type {string} */
        json.ad.gaming = "1";
      }
      json.wd = (0, _yt_player.z)(function(variables, deepDataAndEvents, x) {
        if (!fya(this, variables, deepDataAndEvents)) {
          if (variables = _yt_player.WD(x) && x.responseXML ? x.responseXML : null) {
            c4(this, variables);
          }
        }
      }, obj, obj.I, self.videoId);
      if (_yt_player.nG()) {
        json.wd = jya(obj, json.wd);
      }
      json.Ob = {
        ic_only : "1"
      };
      kya(json, oldconfig);
      /** @type {boolean} */
      obj.J = true;
      _yt_player.nE(self.Of, json);
    }
  }
};
/**
 * @param {Object} options
 * @param {?} b
 * @return {undefined}
 */
var kya = function(options, b) {
  /** @type {string} */
  options.method = "POST";
  options.Ob = options.Ob || {};
  if (b.tr) {
    options.Ob.ic_coll = b.tr;
  }
  if (b.Zh) {
    options.Ob.ic_xml = b.Zh;
  }
  if (b.Lk) {
    options.Ob.ic_track = b.Lk;
  }
};
/**
 * @param {Object} o
 * @return {?}
 */
var mya = function(o) {
  var oldconfig = new _yt_player.W({
    G : "div"
  });
  _yt_player.O(oldconfig.element, false);
  var ll = new U3(o.g, oldconfig.element, b4(o));
  _yt_player.N(ll, oldconfig);
  oldconfig.ua(o.A.element);
  ll.gq();
  return ll;
};
/**
 * @param {Object} c
 * @return {?}
 */
var b4 = function(c) {
  if (!c.H) {
    var oldconfig = new _yt_player.CF(c);
    _yt_player.N(c, oldconfig);
    var QUnit = new _yt_player.Lm(c);
    _yt_player.N(c, QUnit);
    c.H = new zxa(oldconfig, QUnit, _yt_player.Y(c.g), c.g.getVideoData(), c.Ya, c.g, c.ea);
  }
  return c.H;
};
/**
 * @param {Object} b
 * @param {Object} object
 * @return {undefined}
 */
var c4 = function(b, object) {
  /** @type {boolean} */
  var c = false;
  nya(object);
  var codeSegments = object.getElementsByTagName("annotation");
  /** @type {number} */
  var i = 0;
  for (;i < codeSegments.length;i++) {
    var oldconfig = eya(b, codeSegments[i]);
    /** @type {null} */
    var that = null;
    try {
      that = Qwa(oldconfig);
    } catch (l) {
    }
    if (that) {
      a: {
        switch(that.type) {
          case "branding":
          ;
          case "promotion":
            /** @type {boolean} */
            oldconfig = true;
            break a;
        }
        /** @type {boolean} */
        oldconfig = false;
      }
      if (oldconfig) {
        if (oldconfig = iya(b, that)) {
          _yt_player.N(b, oldconfig);
          b.K[that.id] = oldconfig;
        }
      } else {
        if ("card" == that.type || "drawer" == that.type) {
          if (!b.l) {
            b.l = mya(b);
            _yt_player.N(b, b.l);
          }
          if ("card" == that.type) {
            Sxa(b.l, that);
          } else {
            Txa(b.l, that);
          }
          /** @type {boolean} */
          c = true;
        } else {
          if (oldconfig = hya(b, that)) {
            _yt_player.N(b, oldconfig);
            b.o[that.id] = oldconfig;
          }
        }
      }
    }
  }
  if (c) {
    U1(b.g);
    b.Tu();
  }
  _yt_player.Lb(b.o, function(c) {
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
  }, b);
};
/**
 * @param {string} node
 * @return {undefined}
 */
var nya = function(node) {
  if ((node = node.getElementsByTagName("annotations")) && (!(1 > node.length) && (node = node[0].getAttribute("itct")))) {
    var dataAndEvents = _yt_player.MG();
    if (dataAndEvents) {
      var deepDataAndEvents = Ova();
      if (deepDataAndEvents) {
        bwa(dataAndEvents, deepDataAndEvents, [l2(node)]);
      }
    }
  }
};
/**
 * @param {string} obj
 * @param {Node} dataName
 * @param {Object} deepDataAndEvents
 * @param {boolean} putativeSpy
 * @return {undefined}
 */
var pya = function(obj, dataName, deepDataAndEvents, putativeSpy) {
  if (putativeSpy) {
    oya(obj, dataName, deepDataAndEvents);
  } else {
    d4(obj, dataName, deepDataAndEvents);
  }
};
/**
 * @param {string} t
 * @param {Node} s
 * @param {Object} deepDataAndEvents
 * @return {undefined}
 */
var d4 = function(t, s, deepDataAndEvents) {
  if (s = t.o[s]) {
    v3(s);
    if (deepDataAndEvents && deepDataAndEvents.l) {
      t = (0, _yt_player.z)(t.Iz, t, s);
      s.g = new _yt_player.Yt(t, 2E3);
      s.g.start();
    } else {
      t.Iz(s);
    }
  }
};
/**
 * @param {string} label
 * @param {Node} i
 * @param {Object} deepDataAndEvents
 * @return {undefined}
 */
var oya = function(label, i, deepDataAndEvents) {
  if (i = label.o[i]) {
    v3(i);
    if (deepDataAndEvents && deepDataAndEvents.A) {
      label = (0, _yt_player.z)(label.CE, label, i);
      i.g = new _yt_player.Yt(label, 2E3);
      i.g.start();
    } else {
      label.CE(i);
    }
  }
};
/**
 * @param {Node} dataAndEvents
 * @param {Object} p
 * @return {?}
 */
var qya = function(dataAndEvents, p) {
  if ("new" == p.target) {
    return false;
  }
  var options = X2(p);
  if (!options) {
    return false;
  }
  options = options.replace(/https?:\/\//g, "");
  if (!O3(options)) {
    return false;
  }
  options = _yt_player.dE(options);
  if (options.list || options.p) {
    return false;
  }
  options = Jxa(p);
  if (!options) {
    return false;
  }
  var g = dataAndEvents.g.getVideoData();
  return g.videoId == options ? true : _yt_player.Y(dataAndEvents.g).g && g.yn ? true : false;
};
/**
 * @param {Node} a
 * @param {number} obj
 * @return {?}
 */
var gya = function(a, obj) {
  if (rya(obj)) {
    var c = obj.B || c3(obj, function(sType) {
      return "click" == sType || ("rollOut" == sType || "rollOut" == sType);
    });
    return new p3(obj, (0, _yt_player.z)(a.T.appendChild, a.T), a.g, a.ea, c);
  }
  return null;
};
/**
 * @param {Element} a
 * @return {?}
 */
var rya = function(a) {
  if ("highlight" == a.type || "widget" == a.type) {
    return true;
  }
  if ("text" == a.type) {
    var unlock;
    for (unlock in b3) {
      if (a.style == b3[unlock]) {
        return true;
      }
    }
  }
  return false;
};
/**
 * @param {?} model
 * @param {string} deepDataAndEvents
 * @param {boolean} recurring
 * @param {?} xhr
 * @return {undefined}
 */
var e4 = function(model, deepDataAndEvents, recurring, xhr) {
  model.R(Xwa(deepDataAndEvents, xhr), recurring, xhr);
};
/**
 * @param {Object} co
 * @param {?} value
 * @return {?}
 */
var jya = function(co, value) {
  return(0, _yt_player.z)(function() {
    if (!this.ka()) {
      /** @type {Array.<?>} */
      var args = Array.prototype.slice.call(arguments, 0);
      args.unshift(value);
      value = _yt_player.Ga.apply(window, args);
      this.M.push(_yt_player.lG(value));
    }
  }, co);
};
/**
 * @param {boolean} type
 * @param {string} v02
 * @param {?} d
 * @return {?}
 */
var f4 = function(type, v02, d) {
  switch(type) {
    case "mouseover":
    ;
    case "mouseout":
      /** @type {number} */
      var r20 = 3;
      break;
    case "mouseenter":
    ;
    case "mouseleave":
      /** @type {number} */
      r20 = 9;
  }
  return _yt_player.Yd(d, function(deepDataAndEvents) {
    return _yt_player.kq(deepDataAndEvents, v02);
  }, true, r20);
};
/**
 * @param {Object} e
 * @return {undefined}
 */
var h4 = function(e) {
  /** @type {boolean} */
  var d = "mouseover" == e.type && "mouseenter" in g4 || "mouseout" == e.type && "mouseleave" in g4;
  /** @type {boolean} */
  var jQuery = e.type in g4 || d;
  if ("HTML" != e.target.tagName && jQuery) {
    if (d) {
      /** @type {string} */
      d = "mouseover" == e.type ? "mouseenter" : "mouseleave";
      jQuery = g4[d];
      var a;
      for (a in jQuery.l) {
        var b = f4(d, a, e.target);
        if (b) {
          if (!_yt_player.Yd(e.relatedTarget, function(a) {
            return a == b;
          }, true)) {
            jQuery.R(a, b, d, e);
          }
        }
      }
    }
    if (d = g4[e.type]) {
      for (a in d.l) {
        if (b = f4(e.type, a, e.target)) {
          d.R(a, b, e.type, e);
        }
      }
    }
  }
};
/**
 * @param {?} b
 * @return {undefined}
 */
var i4 = function(b) {
  this.B = b;
  this.D = {};
  /** @type {Array} */
  this.H = [];
  /** @type {Array} */
  this.F = [];
};
/**
 * @param {Object} node
 * @param {string} name
 * @return {?}
 */
var Z = function(node, name) {
  return "yt-uix" + (node.B ? "-" + node.B : "") + (name ? "-" + name : "");
};
/**
 * @param {?} obj
 * @param {string} paths
 * @param {?} isXML
 * @return {undefined}
 */
var j4 = function(obj, paths, isXML) {
  obj.H.push(_yt_player.UF(paths, isXML, obj));
};
/**
 * @param {?} item
 * @param {?} paths
 * @param {?} isXML
 * @return {undefined}
 */
var k4 = function(item, paths, isXML) {
  item.F.push(_yt_player.FN(paths, isXML, item));
};
/**
 * @return {undefined}
 */
var l4 = function() {
  i4.call(this, "button");
  /** @type {null} */
  this.g = null;
  /** @type {Array} */
  this.o = [];
  this.l = {};
};
/**
 * @param {number} key
 * @param {Element} elem
 * @param {string} deepDataAndEvents
 * @param {KeyboardEvent} e
 * @param {?} fn
 * @return {undefined}
 */
var sya = function(key, elem, deepDataAndEvents, e, fn) {
  var f = m2(deepDataAndEvents);
  /** @type {boolean} */
  var k = 9 == e.keyCode;
  if (k || (32 == e.keyCode || 13 == e.keyCode)) {
    if (e = m4(key, deepDataAndEvents)) {
      elem = _yt_player.Od(e);
      if ("a" == elem.tagName.toLowerCase()) {
        _yt_player.tV(elem.href);
      } else {
        Mva(elem);
      }
    } else {
      if (k) {
        n4(key, elem);
      }
    }
  } else {
    if (f) {
      if (27 == e.keyCode) {
        m4(key, deepDataAndEvents);
        n4(key, elem);
      } else {
        fn(elem, deepDataAndEvents, e);
      }
    } else {
      /** @type {number} */
      key = _yt_player.kq(elem, Z(key, "reverse")) ? 38 : 40;
      if (e.keyCode == key) {
        Mva(elem);
        e.preventDefault();
      }
    }
  }
};
/**
 * @param {number} condition
 * @param {string} elem
 * @return {?}
 */
var m4 = function(condition, elem) {
  var ll = Z(condition, "menu-item-highlight");
  var target = _yt_player.J(ll, elem);
  if (target) {
    _yt_player.mq(target, ll);
  }
  return target;
};
/**
 * @param {Object} func
 * @param {Element} el
 * @param {Element} elem
 * @return {undefined}
 */
var tya = function(func, el, elem) {
  _yt_player.S(elem, Z(func, "menu-item-highlight"));
  var name = elem.getAttribute("id");
  if (!name) {
    name = Z(func, "item-id-" + _yt_player.Fa(elem));
    elem.setAttribute("id", name);
  }
  el.setAttribute("aria-activedescendant", name);
};
/**
 * @param {number} a
 * @param {string} item
 * @param {number} b
 * @param {Object} e
 * @return {?}
 */
var uya = function(a, item, b, e) {
  var t = item.length;
  a = (0, _yt_player.Pa)(item, a);
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
 * @param {Object} target
 * @param {?} first
 * @return {?}
 */
var o4 = function(target, first) {
  var i = first.iframeMask;
  if (!i) {
    i = _yt_player.Ed("IFRAME");
    /** @type {string} */
    i.src = 'javascript:""';
    i.className = Z(target, "menu-mask");
    o2(i);
    first.iframeMask = i;
  }
  return i;
};
/**
 * @param {Object} me
 * @param {?} a
 * @param {HTMLElement} item
 * @param {boolean} b
 * @return {undefined}
 */
var p4 = function(me, a, item, b) {
  var hash = _yt_player.$d(a, Z(me, "group"));
  /** @type {boolean} */
  var expectationResult = !!me.Ba(a, "button-menu-ignore-group");
  hash = hash && !expectationResult ? hash : a;
  /** @type {number} */
  expectationResult = 9;
  /** @type {number} */
  var progressContexts = 8;
  var d = _yt_player.Lh(a);
  if (_yt_player.kq(a, Z(me, "reverse"))) {
    /** @type {number} */
    expectationResult = 8;
    /** @type {number} */
    progressContexts = 9;
    /** @type {string} */
    d = d.top + "px";
    try {
      /** @type {string} */
      item.style.maxHeight = d;
    } catch (p) {
    }
  }
  if (_yt_player.kq(a, "flip")) {
    if (_yt_player.kq(a, Z(me, "reverse"))) {
      /** @type {number} */
      expectationResult = 12;
      /** @type {number} */
      progressContexts = 13;
    } else {
      /** @type {number} */
      expectationResult = 13;
      /** @type {number} */
      progressContexts = 12;
    }
  }
  var ret;
  if (me.Ba(a, "button-has-sibling-menu")) {
    ret = _yt_player.Bh(hash);
  } else {
    if (me.Ba(a, "button-menu-root-container")) {
      ret = vya(me, a);
    }
  }
  if (_yt_player.yd) {
    if (!_yt_player.rc("8")) {
      /** @type {null} */
      ret = null;
    }
  }
  if (ret) {
    var otherElementRect = _yt_player.Lh(ret);
    otherElementRect = new _yt_player.Zg(-otherElementRect.top, otherElementRect.left, otherElementRect.top, -otherElementRect.left);
  }
  ret = new _yt_player.hd(0, 1);
  if (_yt_player.kq(a, Z(me, "center-menu"))) {
    ret.x -= Math.round((_yt_player.Kh(item).width - _yt_player.Kh(a).width) / 2);
  }
  if (b) {
    ret.y += _yt_player.zd(window.document).y;
  }
  if (me = o4(me, a)) {
    a = _yt_player.Kh(item);
    /** @type {string} */
    me.style.width = a.width + "px";
    /** @type {string} */
    me.style.height = a.height + "px";
    g2(hash, expectationResult, me, progressContexts, ret, otherElementRect, 197);
    if (b) {
      _yt_player.ph(me, "position", "fixed");
    }
  }
  g2(hash, expectationResult, item, progressContexts, ret, otherElementRect, 197);
};
/**
 * @param {Object} object
 * @param {?} target
 * @return {?}
 */
var vya = function(object, target) {
  if (object.Ba(target, "button-menu-root-container")) {
    var targets = object.Ba(target, "button-menu-root-container");
    return _yt_player.$d(target, targets);
  }
  return window.document.body;
};
/**
 * @param {Object} t
 * @param {?} element
 * @return {undefined}
 */
var n4 = function(t, element) {
  if (element) {
    var node = q4(t, element);
    if (node) {
      /** @type {null} */
      t.g = null;
      element.setAttribute("aria-pressed", "false");
      element.setAttribute("aria-expanded", "false");
      element.removeAttribute("aria-activedescendant");
      o2(node);
      t.qj(element, "button-menu-action", false);
      var g = o4(t, element);
      var plugin = i2(node).toString();
      delete t.l[plugin];
      _yt_player.XD(function() {
        if (g) {
          if (g.parentNode) {
            o2(g);
            g.parentNode.removeChild(g);
          }
        }
        if (node.originalParentNode) {
          node.parentNode.removeChild(node);
          node.originalParentNode.appendChild(node);
          /** @type {null} */
          node.originalParentNode = null;
          /** @type {null} */
          node.activeButtonNode = null;
        }
      }, 1);
    }
    plugin = _yt_player.$d(element, Z(t, "group"));
    /** @type {Array} */
    var progressValues = [Z(t, "active")];
    if (plugin) {
      progressValues.push(Z(t, "group-active"));
    }
    _yt_player.nq(element, progressValues);
    _yt_player.XF("yt-uix-button-menu-hide", element);
    _yt_player.sF(t.o);
    /** @type {number} */
    t.o.length = 0;
  }
};
/**
 * @param {Error} obj
 * @param {?} key
 * @param {Node} elem
 * @return {undefined}
 */
var wya = function(obj, key, elem) {
  var str = Z(obj, "menu-item-selected");
  obj = _yt_player.rd(str, key);
  (0, _yt_player.B)(obj, function(deepDataAndEvents) {
    _yt_player.mq(deepDataAndEvents, str);
  });
  _yt_player.S(elem.parentNode, str);
};
/**
 * @param {Object} selector
 * @param {?} elem
 * @return {?}
 */
var q4 = function(selector, elem) {
  if (!elem.widgetMenu) {
    var data = selector.Ba(elem, "button-menu-id");
    data = data && _yt_player.pd(data);
    var ll = Z(selector, "menu");
    if (data) {
      _yt_player.lq(data, [ll, Z(selector, "menu-external")]);
    } else {
      data = _yt_player.J(ll, elem);
    }
    elem.widgetMenu = data;
  }
  return elem.widgetMenu;
};
/**
 * @param {Object} tween
 * @return {undefined}
 */
var r4 = function(tween) {
  if (tween.g) {
    n4(tween, tween.g);
  }
};
/**
 * @param {?} mapper
 * @return {undefined}
 */
var s4 = function(mapper) {
  i4.call(this, mapper);
  /** @type {null} */
  this.o = null;
};
/**
 * @param {Element} label
 * @param {string} value
 * @param {string} key
 * @return {?}
 */
var xya = function(label, value, key) {
  var d = key || value;
  var text = Z(label, "card");
  key = label.Cc(d);
  var elem = _yt_player.pd(Z(label, "card") + i2(d));
  if (elem) {
    return label = _yt_player.J(Z(label, "card-body"), elem), _yt_player.Qd(label, key) || (_yt_player.Kd(key), label.appendChild(key)), elem;
  }
  /** @type {Element} */
  elem = window.document.createElement("div");
  elem.id = Z(label, "card") + i2(d);
  elem.className = text;
  if (d = label.Ba(d, "card-class")) {
    _yt_player.lq(elem, d.split(/\s+/));
  }
  /** @type {Element} */
  d = window.document.createElement("div");
  d.className = Z(label, "card-border");
  value = label.Ba(value, "orientation") || "horizontal";
  /** @type {Element} */
  text = window.document.createElement("div");
  /** @type {string} */
  text.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + value;
  /** @type {Element} */
  var div = window.document.createElement("div");
  div.className = Z(label, "card-body");
  /** @type {Element} */
  label = window.document.createElement("div");
  /** @type {string} */
  label.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + value;
  _yt_player.Kd(key);
  div.appendChild(key);
  d.appendChild(label);
  d.appendChild(div);
  elem.appendChild(text);
  elem.appendChild(d);
  window.document.body.appendChild(elem);
  return elem;
};
/**
 * @param {Error} to
 * @param {Object} target
 * @param {number} elem
 * @return {undefined}
 */
var yya = function(to, target, elem) {
  var i = to.Ba(target, "orientation") || "horizontal";
  var a = _yt_player.J(Z(to, "anchor"), target) || target;
  var offset = to.Ba(target, "position");
  /** @type {boolean} */
  var b = !!to.Ba(target, "force-position");
  var targets = to.Ba(target, "position-fixed");
  /** @type {boolean} */
  i = "horizontal" == i;
  /** @type {boolean} */
  var h = "bottomright" == offset || "bottomleft" == offset;
  /** @type {boolean} */
  var pass = "topright" == offset || "bottomright" == offset;
  if (pass && h) {
    /** @type {number} */
    var expectationResult = 13;
    /** @type {number} */
    var progressContexts = 8;
  } else {
    if (pass && !h) {
      /** @type {number} */
      expectationResult = 12;
      /** @type {number} */
      progressContexts = 9;
    } else {
      if (!pass && h) {
        /** @type {number} */
        expectationResult = 9;
        /** @type {number} */
        progressContexts = 12;
      } else {
        /** @type {number} */
        expectationResult = 8;
        /** @type {number} */
        progressContexts = 13;
      }
    }
  }
  var not = X1(window.document.body);
  offset = X1(target);
  if (not != offset) {
    expectationResult ^= 4;
  }
  if (i) {
    /** @type {number} */
    offset = target.offsetHeight / 2 - 12;
    var d = new _yt_player.hd(-12, target.offsetHeight + 6);
  } else {
    /** @type {number} */
    offset = target.offsetWidth / 2 - 6;
    d = new _yt_player.hd(target.offsetWidth + 6, -12);
  }
  var ret = _yt_player.Kh(elem);
  /** @type {number} */
  offset = Math.min(offset, (i ? ret.height : ret.width) - 24 - 6);
  if (6 > offset) {
    /** @type {number} */
    offset = 6;
    if (i) {
      d.y += 12 - target.offsetHeight / 2;
    } else {
      d.x += 12 - target.offsetWidth / 2;
    }
  }
  /** @type {null} */
  ret = null;
  if (!b) {
    /** @type {number} */
    ret = 10;
  }
  target = Z(to, "card-flip");
  to = Z(to, "card-reverse");
  _yt_player.U(elem, target, pass);
  _yt_player.U(elem, to, h);
  ret = g2(a, expectationResult, elem, progressContexts, d, null, ret);
  if (!b) {
    if (ret) {
      if (ret & 48) {
        /** @type {boolean} */
        pass = !pass;
        expectationResult ^= 4;
        progressContexts ^= 4;
      }
      if (ret & 192) {
        /** @type {boolean} */
        h = !h;
        expectationResult ^= 1;
        progressContexts ^= 1;
      }
      _yt_player.U(elem, target, pass);
      _yt_player.U(elem, to, h);
      g2(a, expectationResult, elem, progressContexts, d);
    }
  }
  if (targets) {
    a = (0, window.parseInt)(elem.style.top, 10);
    b = _yt_player.zd(window.document).y;
    _yt_player.ph(elem, "position", "fixed");
    _yt_player.ph(elem, "top", a - b + "px");
  }
  if (not) {
    /** @type {string} */
    elem.style.right = "";
    a = _yt_player.Lh(elem);
    a.left = a.left || (0, window.parseInt)(elem.style.left, 10);
    b = _yt_player.wd(window);
    /** @type {string} */
    elem.style.left = "";
    /** @type {string} */
    elem.style.right = b.width - a.left - a.width + "px";
  }
  a = _yt_player.J("yt-uix-card-body-arrow", elem);
  b = _yt_player.J("yt-uix-card-border-arrow", elem);
  /** @type {string} */
  i = i ? h ? "top" : "bottom" : !not && pass || not && !pass ? "left" : "right";
  a.setAttribute("style", "");
  b.setAttribute("style", "");
  /** @type {string} */
  a.style[i] = offset + "px";
  /** @type {string} */
  b.style[i] = offset + "px";
  h = _yt_player.J("yt-uix-card-arrow", elem);
  pass = _yt_player.J("yt-uix-card-arrow-background", elem);
  if (h) {
    if (pass) {
      /** @type {number} */
      elem = "right" == i ? _yt_player.Kh(elem).width - offset - 13 : offset + 11;
      /** @type {number} */
      offset = elem / Math.sqrt(2);
      /** @type {string} */
      h.style.left = elem + "px";
      /** @type {string} */
      h.style.marginLeft = "1px";
      /** @type {string} */
      pass.style.marginLeft = -offset + "px";
      /** @type {string} */
      pass.style.marginTop = offset + "px";
    }
  }
};
/**
 * @param {Object} self
 * @return {undefined}
 */
var t4 = function(self) {
  if (self.o) {
    self.hide(self.o);
  }
};
/**
 * @param {Element} elem
 * @return {undefined}
 */
var zya = function(elem) {
  var s = elem.cardMask;
  if (!s) {
    s = _yt_player.Ed("IFRAME");
    /** @type {string} */
    s.src = 'javascript:""';
    _yt_player.lq(s, ["yt-uix-card-iframe-mask"]);
    elem.cardMask = s;
  }
  s.style.position = elem.style.position;
  s.style.top = elem.style.top;
  /** @type {string} */
  s.style.left = elem.offsetLeft + "px";
  /** @type {string} */
  s.style.height = elem.clientHeight + "px";
  /** @type {string} */
  s.style.width = elem.clientWidth + "px";
  window.document.body.appendChild(s);
};
/**
 * @return {undefined}
 */
var u4 = function() {
  i4.call(this, "kbd-nav");
};
/**
 * @param {string} key
 * @param {Object} value
 * @param {Element} element
 * @return {undefined}
 */
var Aya = function(key, value, element) {
  if (value && element) {
    if (_yt_player.S(element, Z(key)), key = value.id, key || (key = "kbd-nav-" + Math.floor(1E6 * Math.random() + 1), value.id = key), value = key, _yt_player.ek && element.dataset) {
      /** @type {Object} */
      element.dataset.kbdNavMoveOut = value;
    } else {
      if (/-[a-z]/.test("kbdNavMoveOut")) {
        throw Error("");
      }
      element.setAttribute("data-" + _yt_player.Hb("kbdNavMoveOut"), value);
    }
  }
};
/**
 * @param {Object} lvalue
 * @param {?} key
 * @return {undefined}
 */
var Bya = function(lvalue, key) {
  if (key) {
    var camelKey = _yt_player.Zd(key, "LI");
    if (camelKey) {
      _yt_player.S(camelKey, Z(lvalue, "highlight"));
      v4 = _yt_player.rF(key, "blur", (0, _yt_player.z)(function(deepDataAndEvents) {
        _yt_player.mq(deepDataAndEvents, Z(this, "highlight"));
        _yt_player.sF(v4);
      }, lvalue, camelKey));
    }
  }
};
/**
 * @param {Node} elem
 * @return {?}
 */
var Cya = function(elem) {
  if ("UL" != elem.tagName.toUpperCase()) {
    return[];
  }
  elem = (0, _yt_player.Ld)(_yt_player.Md(elem), function(elem) {
    return "LI" == elem.tagName.toUpperCase();
  });
  return(0, _yt_player.Ld)((0, _yt_player.G)(elem, function(deepDataAndEvents) {
    return m2(deepDataAndEvents) ? V1(deepDataAndEvents, function(dest) {
      return _yt_player.Da(dest) && 1 == dest.nodeType ? _yt_player.Xd(dest) : false;
    }) : false;
  }), function(dataAndEvents) {
    return!!dataAndEvents;
  });
};
/**
 * @return {undefined}
 */
var w4 = function() {
  i4.call(this, "menu");
  /** @type {null} */
  this.l = this.g = null;
  this.o = {};
  this.C = {};
  /** @type {null} */
  this.A = null;
};
/**
 * @param {Object} angle
 * @return {?}
 */
var x4 = function(angle) {
  var me = w4.getInstance();
  if (_yt_player.kq(angle, Z(me))) {
    return angle;
  }
  var c = me.pe(angle);
  return c ? c : _yt_player.$d(angle, Z(me, "content")) == me.g ? me.l : null;
};
/**
 * @param {Object} dom
 * @param {(Object|number)} result
 * @param {null} elems
 * @return {undefined}
 */
var Dya = function(dom, result, elems) {
  var id = y4(dom, result);
  if (id) {
    _yt_player.Jh(id, _yt_player.Kh(elems));
  }
  if (elems == dom.g) {
    /** @type {number} */
    var expectationResult = 9;
    /** @type {number} */
    var progressContexts = 8;
    if (_yt_player.kq(result, Z(dom, "reversed"))) {
      expectationResult ^= 1;
      progressContexts ^= 1;
    }
    if (_yt_player.kq(result, Z(dom, "flipped"))) {
      expectationResult ^= 4;
      progressContexts ^= 4;
    }
    dom = new _yt_player.hd(0, 1);
    if (id) {
      g2(result, expectationResult, id, progressContexts, dom, null, 197);
    }
    g2(result, expectationResult, elems, progressContexts, dom, null, 197);
  }
};
/**
 * @param {Object} exports
 * @param {(Object|number)} config
 * @param {boolean} dataAndEvents
 * @return {undefined}
 */
var Fya = function(exports, config, dataAndEvents) {
  if (z4(exports, config) && !dataAndEvents) {
    A4(exports, config);
  } else {
    Eya(exports, config);
    if (!exports.g || j2(config, exports.g)) {
      exports.fG(config);
    } else {
      ova(exports.A, (0, _yt_player.z)(exports.fG, exports, config));
    }
  }
};
/**
 * @param {Object} exp
 * @param {(Object|number)} deepDataAndEvents
 * @return {undefined}
 */
var Eya = function(exp, deepDataAndEvents) {
  if (deepDataAndEvents) {
    var serverAttrs = _yt_player.$d(deepDataAndEvents, Z(exp, "content"));
    if (serverAttrs) {
      serverAttrs = _yt_player.rd(Z(exp), serverAttrs);
      (0, _yt_player.B)(serverAttrs, function(tail) {
        if (!j2(tail, deepDataAndEvents)) {
          if (z4(this, tail)) {
            B4(this, tail);
          }
        }
      }, exp);
    }
  }
};
/**
 * @param {Object} exp
 * @param {(Object|number)} val
 * @return {undefined}
 */
var A4 = function(exp, val) {
  if (val) {
    /** @type {Array} */
    var ret = [];
    ret.push(val);
    var elems = C4(exp, val);
    if (elems) {
      elems = _yt_player.rd(Z(exp), elems);
      elems = _yt_player.Ya(elems);
      /** @type {Array} */
      ret = ret.concat(elems);
      (0, _yt_player.B)(ret, function(tail) {
        if (z4(this, tail)) {
          B4(this, tail);
        }
      }, exp);
    }
  }
};
/**
 * @param {Object} item
 * @param {(Object|number)} id
 * @return {undefined}
 */
var B4 = function(item, id) {
  if (id) {
    var i = C4(item, id);
    _yt_player.nq(D4(item, id), [Z(item, "trigger-selected"), "yt-uix-button-toggled"]);
    _yt_player.S(i, Z(item, "content-hidden"));
    var found = C4(item, id);
    if (found) {
      _yt_player.ud(found, {
        "aria-expanded" : "false"
      });
    }
    if (found = y4(item, id)) {
      if (found.parentNode) {
        _yt_player.Kd(found);
      }
    }
    if (i) {
      if (i == item.g) {
        item.l.appendChild(i);
        /** @type {null} */
        item.g = null;
        /** @type {null} */
        item.l = null;
        if (item.A) {
          item.A.R("ROOT_MENU_REMOVED");
        }
      }
    }
    _yt_player.XF("yt-uix-menu-hide", id);
    i = _yt_player.Fa(id).toString();
    _yt_player.sF(item.o[i]);
    delete item.o[i];
  }
};
/**
 * @param {Object} elems
 * @param {(Object|number)} param
 * @return {undefined}
 */
var Gya = function(elems, param) {
  var ret = C4(elems, param);
  if (ret) {
    (0, _yt_player.B)(ret.children, function(startNode) {
      if ("LI" == startNode.tagName) {
        _yt_player.ud(startNode, {
          role : "menuitem"
        });
      }
    });
    _yt_player.ud(ret, {
      "aria-expanded" : "true"
    });
    var id = ret.id;
    if (!id) {
      id = "aria-menu-id-" + _yt_player.Fa(ret);
      ret.id = id;
    }
    if (ret = D4(elems, param)) {
      _yt_player.ud(ret, {
        "aria-controls" : id
      });
    }
  }
};
/**
 * @param {?} properties
 * @param {?} name
 * @param {?} nowMillis
 * @return {undefined}
 */
var Hya = function(properties, name, nowMillis) {
  var values = C4(properties, name);
  if (values) {
    if (_yt_player.kq(name, Z(properties, "checked"))) {
      if (properties = _yt_player.Zd(nowMillis, "LI")) {
        if (properties = _yt_player.J("yt-ui-menu-item-checked-hid", properties)) {
          values = _yt_player.rd("yt-ui-menu-item-checked", values);
          (0, _yt_player.B)(values, function(deepDataAndEvents) {
            _yt_player.oq(deepDataAndEvents, "yt-ui-menu-item-checked", "yt-ui-menu-item-checked-hid");
          });
          _yt_player.oq(properties, "yt-ui-menu-item-checked-hid", "yt-ui-menu-item-checked");
        }
      }
    }
  }
};
/**
 * @param {Object} exp
 * @param {(Object|number)} a
 * @return {?}
 */
var z4 = function(exp, a) {
  var out = C4(exp, a);
  return out ? !_yt_player.kq(out, Z(exp, "content-hidden")) : false;
};
/**
 * @param {Text} p
 * @return {undefined}
 */
var Iya = function(p) {
  p = _yt_player.qd(window.document, "UL", null, p);
  (0, _yt_player.B)(p, function(el) {
    /** @type {number} */
    el.tabIndex = 0;
    var followingChild = u4.getInstance();
    _yt_player.lq(el, [Z(followingChild), Z(followingChild, "list")]);
  });
};
/**
 * @param {Object} node
 * @param {number} needle
 * @return {?}
 */
var C4 = function(node, needle) {
  var value = _yt_player.bF(needle, "menu-content-id");
  return value && (value = _yt_player.pd(value)) ? (_yt_player.lq(value, [Z(node, "content"), Z(node, "content-external")]), value) : needle == node.l ? node.g : _yt_player.J(Z(node, "content"), needle);
};
/**
 * @param {Object} parent
 * @param {(Object|number)} result
 * @return {?}
 */
var y4 = function(parent, result) {
  var index = _yt_player.Fa(result).toString();
  var frame = parent.C[index];
  if (!frame) {
    frame = _yt_player.Ed("IFRAME");
    /** @type {string} */
    frame.src = 'javascript:""';
    /** @type {Array} */
    var progressValues = [Z(parent, "mask")];
    (0, _yt_player.B)(_yt_player.jq(result), function(a) {
      progressValues.push(a + "-mask");
    });
    _yt_player.lq(frame, progressValues);
    parent.C[index] = frame;
  }
  return frame || null;
};
/**
 * @param {Object} dom
 * @param {(Object|number)} needle
 * @return {?}
 */
var D4 = function(dom, needle) {
  return _yt_player.J(Z(dom, "trigger"), needle);
};
/**
 * @param {Node} exports
 * @param {(Object|number)} a
 * @return {?}
 */
var Jya = function(exports, a) {
  return j2(a, exports.g) || j2(a, exports.l);
};
/**
 * @return {undefined}
 */
var E4 = function() {
  s4.call(this, "clickcard");
  this.g = {};
  this.l = {};
};
/**
 * @return {undefined}
 */
var F4 = function() {
  s4.call(this, "hovercard");
};
/**
 * @param {Object} g
 * @param {string} dataAndEvents
 * @param {string} T
 * @param {string} deepDataAndEvents
 * @param {?} h
 * @param {string} X
 * @return {undefined}
 */
var G4 = function(g, dataAndEvents, T, deepDataAndEvents, h, X) {
  /** @type {Object} */
  this.g = g;
  /** @type {null} */
  this.D = null;
  this.o = _yt_player.J("yt-dialog-fg", this.g) || this.g;
  if (g = _yt_player.J("yt-dialog-title", this.o)) {
    var guid = "yt-dialog-title-" + _yt_player.Fa(this.o);
    g.setAttribute("id", guid);
    this.o.setAttribute("aria-labelledby", guid);
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
  Kya(this);
  /** @type {string} */
  this.K = dataAndEvents;
  /** @type {string} */
  this.T = T;
  /** @type {string} */
  this.M = deepDataAndEvents;
  this.H = h;
  /** @type {string} */
  this.X = X;
  /** @type {null} */
  this.C = this.B = null;
};
/**
 * @param {Date} _this
 * @param {Function} container
 * @return {undefined}
 */
var Lya = function(_this, container) {
  if (!_this.ka()) {
    _this.A.subscribe("post-all", container);
  }
};
/**
 * @param {Object} ca
 * @return {undefined}
 */
var Kya = function(ca) {
  ca = _yt_player.J("yt-dialog-fg-content", ca.g);
  /** @type {Array} */
  var assigns = [];
  _yt_player.Lb(Mya, function(vvar) {
    assigns.push("yt-dialog-show-" + vvar);
  });
  _yt_player.nq(ca, assigns);
  _yt_player.S(ca, "yt-dialog-show-content");
};
/**
 * @return {?}
 */
var Nya = function() {
  var r20 = _yt_player.rd("yt-dialog");
  return(0, _yt_player.Bj)(r20, function(deepDataAndEvents) {
    return m2(deepDataAndEvents);
  });
};
/**
 * @param {Node} ca
 * @return {?}
 */
var Oya = function(ca) {
  var r20 = _yt_player.qd(window.document, "iframe", null, ca.g);
  (0, _yt_player.B)(r20, function(field) {
    var value = _yt_player.bF(field, "onload");
    if (value) {
      if (value = _yt_player.x(value)) {
        _yt_player.rF(field, "load", value);
      }
    }
    if (value = _yt_player.bF(field, "src")) {
      field.src = value;
    }
  }, ca);
  return _yt_player.Ya(r20);
};
/**
 * @param {number} statements
 * @return {undefined}
 */
var Pya = function(statements) {
  (0, _yt_player.B)(window.document.getElementsByTagName("iframe"), function(sx) {
    if (-1 == (0, _yt_player.Pa)(statements, sx)) {
      _yt_player.S(sx, "iframe-hid");
    }
  });
};
/**
 * @return {undefined}
 */
var Qya = function() {
  var r20 = _yt_player.rd("iframe-hid");
  (0, _yt_player.B)(r20, function(deepDataAndEvents) {
    _yt_player.mq(deepDataAndEvents, "iframe-hid");
  });
};
/**
 * @param {?} dataAndEvents
 * @return {undefined}
 */
var Rya = function(dataAndEvents) {
  _yt_player.XD((0, _yt_player.z)(function() {
    if (this.o) {
      this.o.focus();
    }
  }, dataAndEvents), 0);
};
/**
 * @return {undefined}
 */
var H4 = function() {
  i4.call(this, "overlay");
  /** @type {null} */
  this.A = this.l = this.o = this.g = null;
};
/**
 * @param {Node} exports
 * @return {undefined}
 */
var Tya = function(exports) {
  if (!exports.A) {
    exports.A = _yt_player.UF("yt-uix-overlay-hide", Sya);
  }
  if (exports.g) {
    Lya(exports.g, function() {
      var child = H4.getInstance();
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
var Uya = function(t) {
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
 * @param {?} needle
 * @param {Object} a
 * @return {?}
 */
var Vya = function(needle, a) {
  var el;
  if (needle) {
    if (el = _yt_player.J("yt-dialog", needle)) {
      var id = _yt_player.pd("body-container");
      if (id) {
        id.appendChild(el);
        needle.overlayContentNode = el;
        el.overlayParentNode = needle;
      }
    } else {
      el = needle.overlayContentNode;
    }
  } else {
    if (a) {
      el = _yt_player.$d(a, "yt-dialog");
    }
  }
  return el;
};
/**
 * @return {?}
 */
var Wya = function() {
  var codeSegments = H4.getInstance();
  if (codeSegments.o) {
    codeSegments = _yt_player.J("yt-dialog-fg-content", codeSegments.o.overlayContentNode);
  } else {
    a: {
      if (codeSegments = _yt_player.rd("yt-dialog-fg-content")) {
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          var deepDataAndEvents = _yt_player.$d(codeSegments[i], "yt-dialog");
          if (m2(deepDataAndEvents)) {
            codeSegments = codeSegments[i];
            break a;
          }
        }
      }
      /** @type {null} */
      codeSegments = null;
    }
  }
  return codeSegments;
};
/**
 * @return {undefined}
 */
var Sya = function() {
  Uya(H4.getInstance());
};
/**
 * @return {undefined}
 */
var I4 = function() {
  i4.call(this, "tooltip");
  /** @type {number} */
  this.g = 0;
  this.l = {};
};
/**
 * @param {Object} path
 * @param {?} d
 * @param {string} n
 * @return {undefined}
 */
var Xya = function(path, d, n) {
  path.setData(d, "tooltip-text", n);
  path = path.Ba(d, "content-id");
  if (path = _yt_player.pd(path)) {
    _yt_player.Sd(path, n);
  }
};
/**
 * @param {Object} dataAndEvents
 * @param {?} a
 * @return {?}
 */
var Yya = function(dataAndEvents, a) {
  return dataAndEvents.Ba(a, "tooltip-text") || a.title;
};
/**
 * @param {Object} node
 * @param {Object} elem
 * @return {undefined}
 */
var aza = function(node, elem) {
  if (elem) {
    var c = Yya(node, elem);
    if (c) {
      var b = _yt_player.pd(J4(node, elem));
      if (!b) {
        /** @type {Element} */
        b = window.document.createElement("div");
        b.id = J4(node, elem);
        b.className = Z(node, "tip");
        /** @type {Element} */
        var t = window.document.createElement("div");
        t.className = Z(node, "tip-body");
        /** @type {Element} */
        var el = window.document.createElement("div");
        el.className = Z(node, "tip-arrow");
        /** @type {Element} */
        var obj = window.document.createElement("div");
        obj.setAttribute("aria-hidden", "true");
        obj.className = Z(node, "tip-content");
        var nav = Zya(node, elem);
        var id = J4(node, elem, "content");
        obj.id = id;
        node.setData(elem, "content-id", id);
        t.appendChild(obj);
        if (nav) {
          b.appendChild(nav);
        }
        b.appendChild(t);
        b.appendChild(el);
        var r = W1(elem);
        id = J4(node, elem, "arialabel");
        /** @type {Element} */
        el = window.document.createElement("div");
        _yt_player.S(el, Z(node, "arialabel"));
        el.id = id;
        r = elem.hasAttribute("aria-label") ? elem.getAttribute("aria-label") : "rtl" == window.document.body.getAttribute("dir") ? c + " " + r : r + " " + c;
        _yt_player.Sd(el, r);
        elem.setAttribute("aria-labelledby", id);
        id = _yt_player.hF() || window.document.body;
        id.appendChild(el);
        id.appendChild(b);
        Xya(node, elem, c);
        if (c = (0, window.parseInt)(node.Ba(elem, "tooltip-max-width"), 10)) {
          if (t.offsetWidth > c) {
            /** @type {string} */
            t.style.width = c + "px";
            _yt_player.S(obj, Z(node, "normal-wrap"));
          }
        }
        obj = _yt_player.kq(elem, Z(node, "reverse"));
        if (!$ya(node, elem, b, t, nav, obj)) {
          $ya(node, elem, b, t, nav, !obj);
        }
        var val = Z(node, "tip-visible");
        _yt_player.XD(function() {
          _yt_player.S(b, val);
        }, 0);
      }
    }
  }
};
/**
 * @param {string} s
 * @param {?} x
 * @param {Object} c
 * @param {Element} n
 * @param {Element} el
 * @param {boolean} f
 * @return {?}
 */
var $ya = function(s, x, c, n, el, f) {
  _yt_player.U(c, Z(s, "tip-reverse"), f);
  /** @type {number} */
  var suiteView = 0;
  if (f) {
    /** @type {number} */
    suiteView = 1;
  }
  var rect = _yt_player.Kh(x);
  f = new _yt_player.hd((rect.width - 10) / 2, f ? rect.height : 0);
  var bbox = _yt_player.Ch(x);
  Jva(new _yt_player.hd(bbox.x + f.x, bbox.y + f.y), c, suiteView);
  bbox = _yt_player.wd(window);
  var pos = _yt_player.Gh(c);
  c = _yt_player.Kh(n);
  /** @type {number} */
  var width = Math.floor(c.width / 2);
  /** @type {boolean} */
  suiteView = !!(bbox.height < pos.y + rect.height);
  /** @type {boolean} */
  rect = !!(pos.y < rect.height);
  /** @type {boolean} */
  f = !!(pos.x < width);
  /** @type {boolean} */
  bbox = !!(bbox.width < pos.x + width);
  /** @type {number} */
  pos = (c.width + 3) / -2 - -5;
  s = s.Ba(x, "force-tooltip-direction");
  if ("left" == s || f) {
    /** @type {number} */
    pos = -5;
  } else {
    if ("right" == s || bbox) {
      /** @type {number} */
      pos = 20 - c.width - 3;
    }
  }
  /** @type {string} */
  s = Math.floor(pos) + "px";
  /** @type {string} */
  n.style.left = s;
  if (el) {
    /** @type {string} */
    el.style.left = s;
    /** @type {string} */
    el.style.height = c.height + "px";
    /** @type {string} */
    el.style.width = c.width + "px";
  }
  return!(suiteView || rect);
};
/**
 * @param {string} s
 * @param {?} b
 * @param {string} val
 * @return {?}
 */
var J4 = function(s, b, val) {
  s = Z(s) + i2(b);
  if (val) {
    s += "-" + val;
  }
  return s;
};
/**
 * @param {Object} value
 * @param {Object} elems
 * @return {?}
 */
var Zya = function(value, elems) {
  /** @type {null} */
  var t = null;
  if (_yt_player.K0) {
    if (_yt_player.kq(elems, Z(value, "masked"))) {
      if (t = _yt_player.pd("yt-uix-tooltip-shared-mask")) {
        t.parentNode.removeChild(t);
        n2(t);
      } else {
        t = _yt_player.Ed("IFRAME");
        /** @type {string} */
        t.src = 'javascript:""';
        /** @type {string} */
        t.id = "yt-uix-tooltip-shared-mask";
        t.className = Z(value, "tip-mask");
      }
    }
  }
  return t;
};
/**
 * @param {?} value
 * @return {undefined}
 */
var bza = function(value) {
  var node = _yt_player.pd("yt-uix-tooltip-shared-mask");
  var p = node && _yt_player.Yd(node, function(el) {
    return el == value;
  }, false, 2);
  if (node) {
    if (p) {
      node.parentNode.removeChild(node);
      o2(node);
      window.document.body.appendChild(node);
    }
  }
};
/**
 * @param {?} g
 * @return {undefined}
 */
var K4 = function(g) {
  _yt_player.yN.call(this, 1, arguments);
  this.g = g;
};
/**
 * @param {?} dataAndEvents
 * @param {?} deepDataAndEvents
 * @param {?} ignoreMethodDoesntExist
 * @param {?} textAlt
 * @param {string} source
 * @return {undefined}
 */
var L4 = function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, source) {
  _yt_player.yN.call(this, 2, arguments);
  this.source = source || null;
};
/**
 * @param {?} g
 * @param {?} l
 * @param {?} dataAndEvents
 * @return {undefined}
 */
var cza = function(g, l, dataAndEvents) {
  _yt_player.yN.call(this, 1, arguments);
  this.g = g;
  this.l = l;
};
/**
 * @param {?} dataAndEvents
 * @param {?} deepDataAndEvents
 * @param {?} ignoreMethodDoesntExist
 * @param {(number|string)} g
 * @param {?} textAlt
 * @param {?} keepData
 * @param {string} source
 * @return {undefined}
 */
var M4 = function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, g, textAlt, keepData, source) {
  _yt_player.yN.call(this, 1, arguments);
  this.g = g || null;
  this.source = source || null;
};
/**
 * @param {?} needle
 * @return {?}
 */
var dza = function(needle) {
  needle = _yt_player.$d(needle, "yt-uix-button-subscription-container");
  needle = _yt_player.J("unsubscribe-confirmation-overlay-container", needle);
  return _yt_player.J("yt-dialog", needle);
};
/**
 * @param {string} val
 * @param {?} key
 * @return {?}
 */
var eza = function(val, key) {
  _yt_player.sF(N4);
  /** @type {number} */
  N4.length = 0;
  if (!O4[key]) {
    O4[key] = dza(val);
  }
  H4.getInstance().show(O4[key]);
  var paths = Wya();
  return new _yt_player.Yf(function($sanitize) {
    N4.push(_yt_player.AF(paths, "click", function() {
      $sanitize();
    }, "overlay-confirmation-unsubscribe-button"));
  });
};
/**
 * @return {undefined}
 */
var P4 = function() {
  i4.call(this, "subscription-button");
};
/**
 * @param {?} opt_eventHandler
 * @param {?} target
 * @return {?}
 */
var fza = function(opt_eventHandler, target) {
  if (!opt_eventHandler.Ba(target, "ypc-enabled")) {
    return null;
  }
  var targets = opt_eventHandler.Ba(target, "ypc-item-type");
  var item = opt_eventHandler.Ba(target, "ypc-item-id");
  return{
    itemType : targets,
    itemId : item,
    subscriptionElement : target
  };
};
/**
 * @param {?} dataAndEvents
 * @param {Element} config
 * @return {undefined}
 */
var gza = function(dataAndEvents, config) {
  var value = dataAndEvents.Ba(config, Q4.jI);
  /** @type {boolean} */
  var forward = !!dataAndEvents.Ba(config, "is-subscribed");
  /** @type {string} */
  value = "-" + value;
  /** @type {string} */
  var tval = R4.wG + value;
  _yt_player.U(config, R4.vG + value, !forward);
  _yt_player.U(config, tval, forward);
  if (dataAndEvents.Ba(config, Q4.IG)) {
    if (!dataAndEvents.Ba(config, Q4.HG)) {
      value = Z(I4.getInstance());
      _yt_player.U(config, value, !forward);
      config.title = forward ? "" : dataAndEvents.Ba(config, Q4.JG);
    }
  }
  if (forward) {
    _yt_player.XD(function() {
      _yt_player.S(config, R4.pw);
    }, 1E3);
  } else {
    _yt_player.mq(config, R4.pw);
  }
};
/**
 * @param {Object} lvalue
 * @param {?} deepDataAndEvents
 * @return {?}
 */
var hza = function(lvalue, deepDataAndEvents) {
  var r20 = _yt_player.rd(Z(lvalue));
  return(0, _yt_player.Ld)(r20, function(defs) {
    return deepDataAndEvents == this.Ba(defs, "channel-external-id");
  }, lvalue);
};
/**
 * @param {?} protoProps
 * @param {string} selector
 * @return {undefined}
 */
var iza = function(protoProps, selector) {
  var child = (0, _yt_player.z)(function(dataAndEvents) {
    if (dataAndEvents.discoverable_subscriptions) {
      _yt_player.QD("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS", dataAndEvents.discoverable_subscriptions);
    }
    this.kw(selector);
  }, protoProps);
  _yt_player.Osa(child, "subscribe", "sub_button");
};
/**
 * @param {?} opt_eventHandler
 * @param {?} target
 * @return {?}
 */
var jza = function(opt_eventHandler, target) {
  if (!opt_eventHandler.Ba(target, "show-unsub-confirm-dialog")) {
    return false;
  }
  var targets = opt_eventHandler.Ba(target, "show-unsub-confirm-time-frame");
  return "always" == targets || "ten_minutes" == targets && (targets = (0, window.parseInt)(opt_eventHandler.Ba(target, "subscribed-timestamp"), 10), (new $1).getTime() < 1E3 * (targets + 600)) ? true : false;
};
var tva = {
  SCRIPT : 1,
  STYLE : 1,
  HEAD : 1,
  IFRAME : 1,
  OBJECT : 1
};
var uva = {
  IMG : " ",
  BR : "\n"
};
/** @type {RegExp} */
var xva = /[^\d]+$/;
var yva = {
  cm : 1,
  "in" : 1,
  mm : 1,
  pc : 1,
  pt : 1
};
var zva = {
  em : 1,
  ex : 1
};
/**
 * @return {?}
 */
Y1.prototype.clone = function() {
  return new Y1(this.start, this.end);
};
/**
 * @return {?}
 */
Y1.prototype.getLength = function() {
  return this.end - this.start;
};
_yt_player.A($1, _yt_player.ko);
_yt_player.h = $1.prototype;
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
  var date = new $1(this.date);
  date.eo = this.eo;
  date.ho = this.ho;
  return date;
};
var a2 = {};
/** @type {null} */
var b2 = null;
_yt_player.A(Eva, _yt_player.bf);
_yt_player.A(d2, _yt_player.ut);
_yt_player.h = d2.prototype;
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
  c2(this);
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
  if (!(i in a2)) {
    a2[i] = this;
  }
  Cva();
  Dva(this, options);
  return true;
};
/**
 * @param {boolean} gotoEnd
 * @return {undefined}
 */
_yt_player.h.stop = function(gotoEnd) {
  c2(this);
  /** @type {number} */
  this.g = 0;
  if (gotoEnd) {
    /** @type {number} */
    this.progress = 1;
  }
  Fva(this, this.progress);
  this.Ge("stop");
  this.xm();
};
/**
 * @return {undefined}
 */
_yt_player.h.pause = function() {
  if (this.kb()) {
    c2(this);
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
  d2.ba.V.call(this);
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
  this.dispatchEvent(new Eva(type, this));
};
_yt_player.A(e2, d2);
e2.prototype.o = _yt_player.y;
/**
 * @return {undefined}
 */
e2.prototype.Iu = function() {
  this.o();
  e2.ba.Iu.call(this);
};
/**
 * @return {undefined}
 */
e2.prototype.xm = function() {
  this.o();
  e2.ba.xm.call(this);
};
/**
 * @return {undefined}
 */
e2.prototype.Ap = function() {
  this.o();
  e2.ba.Ap.call(this);
};
_yt_player.A(f2, e2);
/**
 * @return {undefined}
 */
f2.prototype.o = function() {
  /** @type {string} */
  this.element.style.left = Math.round(this.coords[0]) + "px";
  /** @type {string} */
  this.element.style.top = Math.round(this.coords[1]) + "px";
};
var I3 = {};
_yt_player.A(q2, _yt_player.Df);
_yt_player.h = q2.prototype;
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
 * @param {string} opt_capture
 * @param {?} eventCallback
 * @param {?} eventDataOrCallback
 * @param {?} capture
 * @return {undefined}
 */
_yt_player.h.addEventListener = function(opt_capture, eventCallback, eventDataOrCallback, capture) {
  _yt_player.pf(this.El, opt_capture, eventCallback, eventDataOrCallback, capture);
};
/**
 * @param {string} opt_capture
 * @param {?} capture
 * @param {?} useCapture
 * @param {?} callback
 * @return {undefined}
 */
_yt_player.h.removeEventListener = function(opt_capture, capture, useCapture, callback) {
  _yt_player.xf(this.El, opt_capture, capture, useCapture, callback);
};
/**
 * @return {undefined}
 */
_yt_player.h.V = function() {
  q2.ba.V.call(this);
  var self = this.El;
  if (self) {
    if (_yt_player.hf(self)) {
      if (self.He) {
        _yt_player.mf(self.He);
      }
    } else {
      if (self = _yt_player.sf(self)) {
        /** @type {number} */
        var b = 0;
        var type;
        for (type in self.listeners) {
          var codeSegments = self.listeners[type].concat();
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;++i) {
            if (_yt_player.yf(codeSegments[i])) {
              ++b;
            }
          }
        }
      }
    }
  }
};
_yt_player.A(u2, q2);
/** @type {null} */
u2.prototype.fill = null;
_yt_player.A(Tva, q2);
/** @type {null} */
v2.prototype.Rf = null;
/** @type {null} */
v2.prototype.Zd = null;
/** @type {boolean} */
v2.prototype.Jm = true;
/** @type {Array} */
var Uva = [2, 2, 6, 6, 0];
_yt_player.h = v2.prototype;
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
 * @param {number} num
 * @return {undefined}
 */
_yt_player.h.Ec = function(num) {
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
_yt_player.A(Wva, u2);
/**
 * @return {?}
 */
x2.prototype.Cb = function() {
  return this.l;
};
_yt_player.A(y2, _yt_player.Tu);
/** @type {null} */
y2.prototype.B = null;
/**
 * @return {?}
 */
y2.prototype.Hj = function() {
  return this.Re ? _yt_player.Kh(this.la()) : _yt_player.ua(this.width) && _yt_player.ua(this.height) ? new _yt_player.I(this.width, this.height) : null;
};
/**
 * @return {undefined}
 */
y2.prototype.resume = function() {
};
_yt_player.A(s2, Sva);
_yt_player.A(r2, Sva);
_yt_player.A(z2, Tva);
/**
 * @return {undefined}
 */
z2.prototype.clear = function() {
  _yt_player.Id(this.la());
};
/**
 * @param {Object} width
 * @param {number} size
 * @return {undefined}
 */
z2.prototype.setSize = function(width, size) {
  var element = this.la();
  var attributes = {
    width : width,
    height : size
  };
  var key;
  for (key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};
_yt_player.A(Xva, Wva);
var C2;
_yt_player.A(A2, y2);
/** @type {number} */
var Zva = 0;
_yt_player.h = A2.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.zo = function() {
  var g = t2(this, "svg", {
    width : this.width,
    height : this.height,
    overflow : "hidden"
  });
  var u = t2(this, "g");
  this.F = t2(this, "defs");
  this.B = new z2(u, this);
  g.appendChild(this.F);
  g.appendChild(u);
  this.g = g;
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
 * @param {number} pixelHeight
 * @return {undefined}
 */
_yt_player.h.setSize = function(width, pixelHeight) {
  _yt_player.Jh(this.la(), width, pixelHeight);
};
/**
 * @return {?}
 */
_yt_player.h.Hj = function() {
  if (!_yt_player.rh) {
    return this.Re ? _yt_player.Kh(this.la()) : A2.ba.Hj.call(this);
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
  A2.ba.yj.call(this);
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
            this.I.U($va(), "tick", this.wq);
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
  A2.ba.ql.call(this);
  if (this.M) {
    this.I.Ea($va(), "tick", this.wq);
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
  A2.ba.V.call(this);
};
_yt_player.q(G2, _yt_player.sV);
_yt_player.h = G2.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.load = function() {
  _yt_player.sV.prototype.load.call(this);
  if (!H2(_yt_player.Y(this.g).playerStyle)) {
    var t = this.g.getVideoData();
    if (t = t.cj ? null : t.qb && (t.qb.endscreen && t.qb.endscreen.endscreenRenderer) || null) {
      t = F2(t, this.M ? "new" : "current");
      I2(this, t);
    } else {
      var node = this.g.getVideoData();
      t = node.videoId;
      if (this.B) {
        this.B.abort();
      }
      t = {
        method : "POST",
        wd : (0, _yt_player.z)(this.FR, this, t),
        ad : {
          v : t
        },
        withCredentials : true
      };
      if ("gaming" == _yt_player.Y(this.g).playerStyle) {
        /** @type {string} */
        t.ad.gaming = "1";
      }
      if (this.M) {
        /** @type {string} */
        t.ad.ptype = "embedded";
      }
      var Jy = this.g.getVideoData().Jy;
      if (Jy) {
        t.Ob = {
          ad_tracking : Jy
        };
      }
      if (node = _yt_player.LO(node)) {
        if (node = _yt_player.Mc(node), node = _yt_player.Jc(node)) {
          this.B = _yt_player.nE(node, t);
        }
      }
    }
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.unload = function() {
  I2(this, null);
  if (this.B) {
    this.B.abort();
    /** @type {null} */
    this.B = null;
  }
  _yt_player.sV.prototype.unload.call(this);
};
/**
 * @param {string} dataAndEvents
 * @param {?} pending
 * @return {?}
 */
_yt_player.h.CM = function(dataAndEvents, pending) {
  if (!H2(_yt_player.Y(this.g).playerStyle)) {
    return null;
  }
  if ("loadCustomEndscreenRenderer" == dataAndEvents) {
    var oldconfig = F2(pending, "new");
    I2(this, oldconfig);
    return true;
  }
  return null;
};
/**
 * @return {?}
 */
_yt_player.h.DM = function() {
  return H2(_yt_player.Y(this.g).playerStyle) ? ["loadCustomEndscreenRenderer"] : [];
};
/**
 * @param {?} dataAndEvents
 * @param {Object} xhr
 * @return {undefined}
 */
_yt_player.h.FR = function(dataAndEvents, xhr) {
  /** @type {null} */
  var tag = this.B = null;
  if (200 == xhr.status) {
    var content = xhr.responseText;
    if (")]}" == content.substring(0, 3)) {
      content = content.substring(3);
      /** @type {*} */
      tag = JSON.parse(content);
      tag = F2(tag, this.M ? "new" : "current");
    }
  }
  I2(this, tag);
};
/**
 * @return {undefined}
 */
_yt_player.h.XA = function() {
  if (this.o && this.o.elements) {
    var image = this.g.nB();
    if (image && (0 != image.width && 0 != image.height)) {
      var cell = this.g.ju();
      if (cell && (0 != cell.width && 0 != cell.height)) {
        /** @type {number} */
        var percentage = image.width / image.height;
        /** @type {number} */
        var deep = 0;
        /** @type {number} */
        var label = -1;
        /** @type {number} */
        var i = 0;
        for (;i < kza.length;i++) {
          /** @type {number} */
          var target = Math.abs(cell.width - kza[i]);
          if (-1 == label || deep >= target) {
            /** @type {number} */
            label = i;
            /** @type {number} */
            deep = target;
          }
        }
        deep = lza[label];
        if (this.A) {
          _yt_player.ph(this.A.element, "outline-width", Math.max(cell.width, cell.height) + "px");
        }
        /** @type {number} */
        cell = 0;
        for (;cell < this.o.elements.length;++cell) {
          if (i = this.o.elements[cell].id, label = this.l[i], target = this.F[i], label && target) {
            /** @type {number} */
            var scale = target.width * percentage / target.aspectRatio;
            /** @type {number} */
            i = Math.round(scale * image.height);
            var r20 = image.left + Math.round(target.left * image.width);
            var restoreScript = image.top + Math.round(target.top * image.height);
            _yt_player.Jh(label.element, Math.round(target.width * image.width), i);
            _yt_player.wh(label.element, r20, restoreScript);
            _yt_player.nq(label.element, mza);
            r20 = target.left + target.width / 2;
            target = target.top + scale / 2;
            _yt_player.S(label.element, 0.5 >= r20 && 0.5 >= target ? "ytp-ce-top-left-quad" : 0.5 < r20 && 0.5 >= target ? "ytp-ce-top-right-quad" : 0.5 >= r20 && 0.5 < target ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad");
            _yt_player.nq(label.element, lza);
            _yt_player.S(label.element, deep);
            if (label = _yt_player.qd(window.document, "div", "ytp-ce-expanding-overlay-body", label.element)[0]) {
              _yt_player.ph(label, "height", i + "px");
            }
          }
        }
      }
    }
  }
};
/**
 * @param {Object} component
 * @return {undefined}
 */
_yt_player.h.EM = function(component) {
  if (this.o) {
    if ("ytp-ce-in-endscreen" == component.getId()) {
      /** @type {boolean} */
      this.J = false;
      if (this.o.skip && 1 == this.g.Bh()) {
        _yt_player.XU(this.g, true);
        this.g.ac(window.Infinity);
        /** @type {boolean} */
        this.J = true;
      } else {
        L2(this, this.o.impressionUrls);
        if (component = _yt_player.MG()) {
          D2(component, this.o.visualElement);
        }
      }
    } else {
      if (!this.J) {
        component = component.getId().substring(15);
        var ev = this.l[component];
        var itemList = this.F[component];
        _yt_player.S(ev.element, "ytp-ce-element-show");
        ev.element.removeAttribute("aria-hidden");
        ev = this.g.getRootNode();
        _yt_player.S(ev, "ytp-ce-shown");
        L2(this, itemList.impressionUrls);
        if (ev = _yt_player.MG()) {
          D2(ev, itemList.visualElement);
        }
        if (_yt_player.Y(this.g).zb) {
          this.g.va("endscreenelementshown", component);
        }
      }
    }
  }
};
/**
 * @param {Object} component
 * @return {undefined}
 */
_yt_player.h.FM = function(component) {
  if ("ytp-ce-in-endscreen" != component.getId() && !this.J) {
    component = component.getId().substring(15);
    var self = this.l[component];
    _yt_player.mq(self.element, "ytp-ce-element-show");
    self.element.setAttribute("aria-hidden", true);
    self = this.g.getRootNode();
    _yt_player.mq(self, "ytp-ce-shown");
    if (_yt_player.Y(this.g).zb) {
      this.g.va("endscreenelementhidden", component);
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
 * @param {Element} dataAndEvents
 * @param {Object} event
 * @return {undefined}
 */
_yt_player.h.HC = function(dataAndEvents, event) {
  if (dataAndEvents.targetUrl && (!event || ("keypress" != event.type || 13 == event.keyCode))) {
    var current = event.target;
    for (;current && !_yt_player.kq(current, "ytp-ce-element");) {
      if (_yt_player.kq(current, "subscribe-label")) {
        M2(this, dataAndEvents);
      }
      if (_yt_player.kq(current, "ytp-ce-channel-subscribe")) {
        return;
      }
      current = _yt_player.Pd(current);
    }
    if (!current || _yt_player.kq(current, "ytp-ce-element-hover")) {
      event.preventDefault();
      event.stopPropagation();
      if (current = this.l[dataAndEvents.id]) {
        this.Ru(current, dataAndEvents);
        current.element.blur();
      }
      if (event.ctrlKey || (event.metaKey || "new" == dataAndEvents.mq)) {
        M2(this, dataAndEvents);
        this.aE();
        this.g.hd();
        current = _yt_player.Mc(dataAndEvents.targetUrl);
        current = _yt_player.Jc(current);
        _yt_player.vV(current, void 0, dataAndEvents.Rd);
      } else {
        current = (0, _yt_player.z)(this.aE, this, _yt_player.Ga(_yt_player.uV, dataAndEvents.targetUrl, dataAndEvents.Rd));
        M2(this, dataAndEvents, current);
      }
    }
  }
};
/**
 * @param {Object} deepDataAndEvents
 * @param {Object} obj
 * @return {undefined}
 */
_yt_player.h.Ut = function(deepDataAndEvents, obj) {
  if (!_yt_player.kq(deepDataAndEvents.element, "ytp-ce-element-hover")) {
    if ("VIDEO" == obj.type || "PLAYLIST" == obj.type) {
      _yt_player.S(deepDataAndEvents.element, "ytp-ce-element-hover");
    } else {
      if (_yt_player.Y(this.g).l) {
        (new _yt_player.Yt(function() {
          _yt_player.S(deepDataAndEvents.element, "ytp-ce-element-hover");
        }, 200)).start();
      } else {
        _yt_player.S(deepDataAndEvents.element, "ytp-ce-element-hover");
      }
    }
    L2(this, obj.MK);
    K2(this, obj.id, true);
  }
};
/**
 * @param {Object} obj
 * @param {Element} dataAndEvents
 * @return {undefined}
 */
_yt_player.h.Ru = function(obj, dataAndEvents) {
  _yt_player.mq(obj.element, "ytp-ce-element-hover");
  _yt_player.mq(obj.element, "ytp-ce-force-expand");
  K2(this, dataAndEvents.id, false);
};
/**
 * @param {?} code
 * @return {undefined}
 */
_yt_player.h.aE = function(code) {
  this.g.Ni(17, code);
};
/** @type {Array} */
var kza = [346, 426, 470, 506, 570, 640, 853, 1280, 1920];
/** @type {Array.<string>} */
var lza = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" ");
/** @type {Array} */
var mza = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"];
var mwa = {
  jZ : "current",
  FH : "new"
};
var owa = {
  CLOSE : "close",
  u1 : "openUrl",
  kI : "subscribe"
};
var pwa = {
  Pq : "click",
  CLOSE : "close",
  y_ : "hidden",
  q2 : "rollOut",
  WH : "rollOver",
  aI : "shown"
};
var swa = {
  I4 : "xx",
  J4 : "xy",
  P4 : "yx",
  Q4 : "yy"
};
_yt_player.q(ywa, Z2);
var Ewa = {
  rG : "anchored",
  c2 : "rect",
  E2 : "shapeless"
};
var Jwa = {
  CLOSED : "closed",
  F1 : "playerControlShow",
  WH : "rollOver",
  aI : "shown"
};
/**
 * @return {?}
 */
a3.prototype.Ta = function() {
  var url = Swa(this, function(requestObj) {
    return "openUrl" == requestObj.type && null != requestObj.url;
  });
  return url ? url.url : null;
};
/**
 * @return {?}
 */
a3.prototype.showLinkIcon = function() {
  return c3(this, function($location) {
    return null != $location.url && $location.url.showLinkIcon;
  });
};
var b3 = {
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
var Owa = {
  uG : "branding",
  FY : "card",
  LZ : "drawer",
  A_ : "highlight",
  B0 : "marker",
  V1 : "promotion",
  TEXT : "text",
  E4 : "widget"
};
var Pwa = {
  t4 : "video_relative",
  G1 : "player_relative"
};
/**
 * @param {Function} x
 * @param {?} b
 * @param {?} d
 * @param {?} mod
 * @return {undefined}
 */
Ywa.prototype.A = function(x, b, d, mod) {
  this.g[x] = b ? !d : d;
  x = _yt_player.Ob(this.g, function(dataAndEvents) {
    return dataAndEvents;
  });
  if (this.o != x) {
    /** @type {Function} */
    this.o = x;
    this.l.R(this.B, x, mod);
  }
};
/**
 * @return {?}
 */
f3.prototype.la = function() {
  return this.B;
};
/**
 * @return {undefined}
 */
f3.prototype.o = function() {
};
var j3 = {
  bevel : 1,
  dropshadow : 2
};
_yt_player.q(l3, f3);
/**
 * @param {Function} x
 * @param {?} b
 * @return {undefined}
 */
l3.prototype.o = function(x, b) {
  var node = e3(x);
  if (node) {
    var p = $2(node, b);
    if (!(0 >= p.width || 0 >= p.height)) {
      var t;
      if (t = (node = (node = Vwa(x)) && node.g ? node.g : null) && node.length ? node[0] : null) {
        var s = _yt_player.gh(uwa(b, vwa(t, new _yt_player.bh(t.F, t.H, t.Qk, t.o), b.g)));
        var self = p.clone();
        node = new _yt_player.bh(s.x, s.y, 1, 1);
        /** @type {number} */
        var size = Math.max(self.left + self.width, node.left + node.width);
        /** @type {number} */
        var y = Math.max(self.top + self.height, node.top + node.height);
        /** @type {number} */
        self.left = Math.min(self.left, node.left);
        /** @type {number} */
        self.top = Math.min(self.top, node.top);
        /** @type {number} */
        self.width = size - self.left;
        /** @type {number} */
        self.height = y - self.top;
        node = x.l;
        self = k3(self, node.effects);
        size = g3(this, self.width, self.height);
        y = fxa(node, self.width, self.height, this.g);
        p = new _yt_player.bh(p.left - self.left, p.top - self.top, p.width, p.height);
        var a = new _yt_player.hd(s.x - self.left, s.y - self.top);
        /** @type {number} */
        this.A = 17 * Y2(b.g, t.l, t.g ? t.g : "xy");
        t = node.cornerRadius;
        s = x.l;
        var i = this.g && d3(x);
        var r = i ? s.borderWidth + 1 : s.borderWidth;
        /** @type {number} */
        i = (s = r ? new x2(r, i ? s.l : s.borderColor) : null) ? s.Cb() / 2 : 0;
        r = hxa(p, a);
        var m = this.C(p, t, a, r);
        var cur = a.x;
        a = a.y;
        var len = p.width;
        var j = p.height;
        var offset = p.left;
        p = p.top;
        var text = new v2;
        text.moveTo(offset + t + i, p + i);
        if ("t" == r) {
          text.Ec(m.start, p + i);
          text.Ec(cur, a);
          text.Ec(m.end, p + i);
        }
        text.Ec(offset + len - t - i, p + i);
        w2(text, t, t, -90);
        if ("r" == r) {
          text.Ec(offset + len - i, m.start);
          text.Ec(cur, a);
          text.Ec(offset + len - i, m.end);
        }
        text.Ec(offset + len - i, p + j - t - i);
        w2(text, t, t, 0);
        if ("b" == r) {
          text.Ec(m.end, p + j - i);
          text.Ec(cur, a);
          text.Ec(m.start, p + j - i);
        }
        text.Ec(offset + t + i, p + j - i);
        w2(text, t, t, 90);
        if ("l" == r) {
          text.Ec(offset + i, m.end);
          text.Ec(cur, a);
          text.Ec(offset + i, m.start);
        }
        text.Ec(offset + i, p + t + i);
        w2(text, t, t, 180);
        text.close();
        B2(size, text, s, y);
        if (y = this.la()) {
          _yt_player.S(y, "annotation-shape");
          _yt_player.S(y, "annotation-speech-shape");
          _yt_player.wh(y, self.left, self.top);
          _yt_player.Jh(y, self.width, self.height);
          gxa(size, y, node.effects);
        }
      }
    }
  }
};
/**
 * @param {Function} x
 * @param {?} b
 * @param {?} o
 * @param {string} r
 * @return {?}
 */
l3.prototype.C = function(x, b, o, r) {
  /**
   * @param {number} c
   * @param {number} value
   * @param {?} a
   * @param {?} p
   * @return {?}
   */
  function within(c, value, a, p) {
    /** @type {number} */
    c = Math.min(Math.max(p - 2 * b, 0), c);
    value = _yt_player.dd(value - c / 2, a + b, a + p - c - b);
    return new Y1(value, value + c);
  }
  return "t" == r || "b" == r ? within(this.A, o.x, x.left, x.width) : "l" == r || "r" == r ? within(this.A, o.y, x.top, x.height) : new Y1(0, 0);
};
_yt_player.q(m3, f3);
/**
 * @param {Function} x
 * @param {?} b
 * @return {undefined}
 */
m3.prototype.o = function(x, b) {
  var item = e3(x);
  if (item) {
    var file = $2(item, b);
    if (!(0 >= file.width || 0 >= file.height)) {
      var g = x.l;
      item = k3(file, g.effects);
      var rvar = g3(this, item.width, item.height);
      var initial = new _yt_player.bh(0, 0, file.width, file.height);
      var ll = g.cornerRadius;
      file = new x2(!g.o && this.g ? 1 : g.o, g.bgColor);
      var y = new r2("#000", 0);
      /** @type {number} */
      var classNames = file ? file.Cb() / 2 + 1 : 0;
      initial = exa(initial, ll, classNames);
      B2(rvar, initial, file, y);
      rvar = this.la();
      _yt_player.S(rvar, "annotation-shape");
      g = g.g;
      _yt_player.Mh(rvar, this.g ? Math.max(g, 0.9) : g);
      _yt_player.wh(rvar, item.left, item.top);
      _yt_player.Jh(rvar, item.width, item.height);
    }
  }
};
_yt_player.q(n3, f3);
/**
 * @param {Function} x
 * @param {?} b
 * @return {undefined}
 */
n3.prototype.o = function(x, b) {
  var node = e3(x);
  if (node) {
    var c = $2(node, b);
    if (!(0 >= c.width || 0 >= c.height)) {
      node = x.l;
      var pos = k3(c, node.effects);
      var vvar = g3(this, pos.width, pos.height);
      var iterator = new _yt_player.bh(0, 0, c.width, c.height);
      c = fxa(node, c.width, c.height, this.g);
      var context = node.cornerRadius;
      var s = x.l;
      var classNames = this.g && d3(x);
      var rawNode = classNames ? s.borderWidth + 1 : s.borderWidth;
      /** @type {number} */
      classNames = (s = rawNode ? new x2(rawNode, classNames ? s.l : s.borderColor) : null) ? s.Cb() / 2 + 1 : 0;
      iterator = exa(iterator, context, classNames);
      B2(vvar, iterator, s, c);
      if (iterator = this.la()) {
        _yt_player.S(iterator, "annotation-shape");
        _yt_player.S(iterator, "annotation-popup-shape");
        _yt_player.wh(iterator, pos.left, pos.top);
        _yt_player.Jh(iterator, pos.width, pos.height);
        gxa(vvar, iterator, node.effects);
      }
    }
  }
};
_yt_player.q(o3, l3);
/**
 * @param {Function} x
 * @param {?} b
 * @param {?} o
 * @param {string} r
 * @return {?}
 */
o3.prototype.C = function(x, b, o, r) {
  /**
   * @param {number} height
   * @param {number} minY
   * @param {number} y
   * @param {number} h
   * @return {?}
   */
  function within(height, minY, y, h) {
    /** @type {number} */
    height = Math.min(Math.max(h - 2 * b, 0), height);
    /** @type {number} */
    minY = minY <= y + h / 2 ? Math.max(y + h / 4 - height / 2, y + b) : Math.min(y + 3 * h / 4 - height / 2, y + h - height - b);
    return new Y1(minY, minY + height);
  }
  return "t" == r || "b" == r ? within(this.A, o.x, x.left, x.width) : "l" == r || "r" == r ? within(this.A, o.y, x.top, x.height) : new Y1(0, 0);
};
_yt_player.q(p3, _yt_player.M);
_yt_player.h = p3.prototype;
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
      _yt_player.Mh(this.l, t3(this) ? 1 : 0);
      this.o.o(this.g, r3(this));
    }
    if (this.F.isActive()) {
      this.F.stop();
    }
    /** @type {boolean} */
    this.H = true;
    this.I = this.W.xh(_yt_player.VU(this.C), "mouseleave", function(deepDataAndEvents) {
      this.wp.stop();
      this.Ih(deepDataAndEvents);
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
      _yt_player.Mh(this.l, t3(this) ? 1 : 0);
      this.o.o(this.g, r3(this));
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
  var x = new _yt_player.hd(original.clientX, original.clientY);
  var p = _yt_player.Ch(this.C.getRootNode());
  var a = lxa(p, this.K);
  p = (this.B && _yt_player.Nh(this.B) || this.A && _yt_player.Nh(this.A)) && lxa(p, this.M);
  if (a && a.contains(x) || p && p.contains(x)) {
    this.AB(original);
  } else {
    this.Ih(original);
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.show = function() {
  var start = this.g.l;
  /** @type {boolean} */
  start = (start && 0 == start.g || ("title" == this.g.style || "highlightText" == this.g.style) ? false : true) && !this.o;
  /** @type {boolean} */
  var walk = !this.l;
  /** @type {boolean} */
  var widget = "widget" == this.g.type;
  if (start) {
    var oldconfig = r3(this);
    /** @type {null} */
    var o = null;
    if ("highlight" == this.g.type || "label" == this.g.style) {
      o = new m3;
    } else {
      if ("popup" == this.g.style) {
        o = new n3;
      } else {
        if ("anchored" == this.g.style) {
          o = new l3;
        } else {
          if ("speech" == this.g.style) {
            o = new o3;
          }
        }
      }
    }
    if (o) {
      if (o.o(this.g, oldconfig), this.o = o, oldconfig = o.la()) {
        _yt_player.O(oldconfig, false);
        _yt_player.S(oldconfig, "annotation-type-" + this.g.type.toLowerCase());
        this.X(oldconfig);
      }
    }
  }
  if (walk) {
    /** @type {Array} */
    oldconfig = ["annotation"];
    if (!("highlightText" != this.g.style)) {
      oldconfig.push("annotation-no-mouse");
    }
    oldconfig.push("annotation-type-" + this.g.type.toLowerCase());
    this.l = _yt_player.K("DIV", oldconfig);
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
    ixa(this, this.l);
    if (d3(this.g) && this.g.showLinkIcon()) {
      if (o = this.g.Ta()) {
        oldconfig = this.l;
        o = new _yt_player.vm(X2(o));
        oldconfig.title = o.l + o.o;
      }
      this.B = _yt_player.K("SPAN", "annotation-link-icon");
      _yt_player.O(this.B, false);
      this.l.appendChild(this.B);
    }
    jxa(this);
    if (!d3(this.g)) {
      /** @type {string} */
      this.l.style.cursor = "default";
    }
  }
  if (widget) {
    if ("subscribe" == this.g.style) {
      _yt_player.J("yt-uix-subscription-button", this.l);
    }
  }
  if (start || walk) {
    a: {
      start = this.g.segment.g;
      if (start.length && (start = Gwa(start[0]))) {
        start = start.B;
        break a;
      }
      /** @type {number} */
      start = 0;
    }
    if (this.l) {
      this.l.style.zIndex = start;
    }
    if (this.o) {
      if (this.o.la()) {
        this.o.la().style.zIndex = start;
      }
    }
  }
  _yt_player.O(this.l, true);
  _yt_player.Mh(this.l, t3(this) ? 1 : 0);
  s3(this);
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
_yt_player.q(u3, _yt_player.M);
_yt_player.h = u3.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.hide = function() {
  /** @type {boolean} */
  this.isVisible = false;
  if (this.view) {
    nxa(this);
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
    nxa(this);
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
  v3(this);
};
/**
 * @return {undefined}
 */
_yt_player.h.mD = function() {
  s3(this.view);
};
/**
 * @return {undefined}
 */
_yt_player.h.zB = function() {
  s3(this.view);
};
_yt_player.q(oxa, p2);
_yt_player.q(w3, p2);
_yt_player.q(pxa, w3);
_yt_player.q(qxa, p2);
_yt_player.q(rxa, p2);
_yt_player.q(txa, w3);
_yt_player.q(uxa, w3);
_yt_player.q(vxa, p2);
_yt_player.q(x3, p2);
/**
 * @param {Function} x
 * @param {?} b
 * @return {undefined}
 */
G3.prototype.o = function(x, b) {
  var labels = _yt_player.Zd(b.target, "label");
  if (labels) {
    _yt_player.U(labels, "iv-card-poll-choice-focused", x);
  }
};
/**
 * @param {Function} x
 * @param {?} b
 * @return {undefined}
 */
G3.prototype.D = function(x, b) {
  var oldconfig = _yt_player.$d(b.target, "iv-card-poll");
  if (oldconfig) {
    if (x.A) {
      _yt_player.J("iv-card-sign-in-button", oldconfig).click();
    } else {
      var i = (0, window.parseInt)(Z1(b.target, "pollChoiceIndex"), 10);
      if (null == x.g) {
        x.choices[i].count++;
        x.g = i;
      } else {
        if (x.g != i) {
          var collection = x.choices[x.g];
          /** @type {number} */
          collection.count = Math.max(collection.count - 1, 0);
          x.choices[i].count++;
          x.g = i;
        } else {
          collection = x.choices[x.g];
          /** @type {number} */
          collection.count = Math.max(collection.count - 1, 0);
          /** @type {null} */
          x.g = null;
        }
      }
      Axa(x, oldconfig);
      _yt_player.rE(this.g.videoData.Of, {
        ad : {
          action_poll_vote : 1
        },
        Ob : {
          poll_id : x.id,
          index : i,
          session_token : x.H
        }
      });
      C3(this.g.logger, x.o, void 0, {
        "link-id" : i
      }, x.l.click, 5);
      if (oldconfig = _yt_player.MG()) {
        E2(oldconfig, x.C);
      }
    }
  }
};
/**
 * @param {Function} x
 * @return {undefined}
 */
G3.prototype.C = function(x) {
  var addAttrib = _yt_player.x("yt.www.ypc.bootstrap.api.loadOffersForInnertubeRequestParams");
  var r20;
  if (addAttrib) {
    /**
     * @return {undefined}
     */
    r20 = function() {
      addAttrib(x.H, x.B);
    };
  }
  Exa(this, x, true, r20);
};
/**
 * @param {Function} x
 * @return {undefined}
 */
G3.prototype.F = function(x) {
  var r20 = _yt_player.x("yt.www.ypc.bootstrap.api.loadOffers");
  if (r20) {
    r20 = _yt_player.Ga(r20, x.K, x.H, x.B);
  }
  Exa(this, x, false, r20);
};
_yt_player.q(Q3, _yt_player.M);
_yt_player.h = Q3.prototype;
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
 * @param {?} pos
 * @param {?} key
 * @param {?} deepDataAndEvents
 * @param {?} opt_obj2
 * @param {?} walkers
 * @param {Array} opt_attributes
 * @param {number} keepData
 * @return {undefined}
 */
_yt_player.h.Zi = function(pos, key, deepDataAndEvents, opt_obj2, walkers, opt_attributes, keepData) {
  this.context.g.U(pos, "click", _yt_player.Ga(this.Uo, key, deepDataAndEvents, opt_obj2, walkers, opt_attributes || [], keepData || 0), this);
  this.context.g.U(pos, "touchstart", _yt_player.Ga(function() {
    /** @type {boolean} */
    this.Yv = false;
  }), this);
  this.context.g.U(pos, "touchmove", _yt_player.Ga(function() {
    /** @type {boolean} */
    this.Yv = true;
  }), this);
};
/**
 * @param {Object} walkers
 * @param {?} ignoreMethodDoesntExist
 * @param {?} deepDataAndEvents
 * @param {boolean} dataAndEvents
 * @param {?} opt_obj2
 * @param {number} pending
 * @param {?} event
 * @return {?}
 */
_yt_player.h.Uo = function(walkers, ignoreMethodDoesntExist, deepDataAndEvents, dataAndEvents, opt_obj2, pending, event) {
  if (this.Yv) {
    return false;
  }
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  Mxa(this, walkers, deepDataAndEvents, dataAndEvents, opt_obj2, pending);
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
_yt_player.q(U3, Q3);
_yt_player.h = U3.prototype;
/**
 * @return {?}
 */
_yt_player.h.isAvailable = function() {
  var newSize;
  if (newSize = !!this.o.length) {
    if (newSize = this.g.getRootNode()) {
      newSize = _yt_player.Kh(newSize);
      /** @type {boolean} */
      newSize = 173 < newSize.width && 173 < newSize.height;
    } else {
      /** @type {boolean} */
      newSize = false;
    }
  }
  return newSize;
};
/**
 * @return {undefined}
 */
_yt_player.h.Fn = function() {
  var r20 = this.isAvailable();
  _yt_player.O(this.la(), r20);
  _yt_player.U(this.context.l.getRootNode(), "ytp-iv-drawer-enabled", r20);
  U1(this.g);
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
  Q3.prototype.destroy.call(this);
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
 * @param {?} l
 * @return {undefined}
 */
_yt_player.h.kE = function(l) {
  if (!_yt_player.kq(this.g.getRootNode(), "ytp-cards-teaser-shown")) {
    if (this.l != l) {
      this.l = l;
      V3(this);
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
      if (r20 && l.hc.teaserDurationMs) {
        r20 = {
          teaserText : l.hc.teaserText,
          durationMs : l.hc.teaserDurationMs
        };
        var tag1 = _yt_player.NU(this.g).B;
        if (tag1) {
          tag1.St(true, r20);
        }
      }
    }
    if (!this.na.isActive()) {
      if (!this.B || !this.J.isActive() && this.T) {
        Wxa(this, l);
      }
      this.na.start(910 + l.hc.teaserDurationMs);
    }
  }
};
/**
 * @param {number} l
 * @return {undefined}
 */
_yt_player.h.MV = function(l) {
  if (!this.B) {
    /** @type {number} */
    this.l = l;
    V3(this);
    Wxa(this, l);
    S3(this, "YOUTUBE_DRAWER_AUTO_OPEN", false, l);
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.fJ = function() {
  if (this.B) {
    E3(this.context.logger, this.M, 4, W3(this).l.close);
    var followingChild = _yt_player.MG();
    if (followingChild) {
      if (this.I) {
        E2(followingChild, this.I);
      }
    }
    T3(this);
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
  var item = W3(this);
  F3(this.context.logger, 8, item.o, item.l.dW);
  var mySecret = _yt_player.MG();
  if (mySecret) {
    if (item) {
      D2(mySecret, item.F);
      D2(mySecret, item.D);
    }
  }
};
/**
 * @param {?} obj
 * @return {undefined}
 */
_yt_player.h.XL = function(obj) {
  var item = W3(this);
  var followingChild = _yt_player.MG();
  if (this.l) {
    if (obj) {
      obj = this.context.logger;
      F3(obj, 9, item.o, item.l.Dv);
      obj.g.Ni(4, void 0);
      if (followingChild) {
        E2(followingChild, item.F);
      }
    } else {
      obj = this.context.logger;
      F3(obj, 12, item.o, item.l.Dv);
      obj.g.Ni(4, void 0);
      if (followingChild) {
        E2(followingChild, item.D);
      }
    }
  } else {
    obj = this.context.logger;
    E3(obj, this.M, 12, item.l.Dv);
    obj.g.Ni(4, void 0);
    if (followingChild) {
      if (this.ga) {
        E2(followingChild, this.ga);
      }
    }
  }
};
var Nxa = {
  /** @type {function (?, Object, ?): undefined} */
  collaborator : oxa,
  /** @type {function (?, ?, ?): undefined} */
  donation : pxa,
  /** @type {function (?, Object, ?): undefined} */
  episode : x3,
  /** @type {function (?, Object, ?): undefined} */
  movie : x3,
  /** @type {function (?, Object, ?): undefined} */
  playlist : qxa,
  /** @type {function (string, Object, ?): undefined} */
  poll : rxa,
  /** @type {function (Object, ?, ?): undefined} */
  productListing : txa,
  /** @type {function (string, Object, ?): undefined} */
  simple : w3,
  /** @type {function (?, ?, ?): undefined} */
  tip : uxa,
  /** @type {function (?, Object, ?): undefined} */
  video : vxa
};
_yt_player.q(X3, Q3);
/**
 * @return {undefined}
 */
X3.prototype.gq = function() {
  Q3.prototype.gq.call(this);
  Xxa(this);
};
_yt_player.q(Y3, X3);
_yt_player.h = Y3.prototype;
/**
 * @param {Element} deepDataAndEvents
 * @param {Element} dataAndEvents
 * @param {?} opt_obj2
 * @param {?} l2
 * @return {undefined}
 */
_yt_player.h.UV = function(deepDataAndEvents, dataAndEvents, opt_obj2, l2) {
  this.o.stop();
  if (!this.A) {
    var viewSize = _yt_player.Kh(deepDataAndEvents);
    if (!this.g) {
      _yt_player.Ih(deepDataAndEvents, viewSize.width);
      _yt_player.Ih(dataAndEvents, viewSize.width);
    }
    _yt_player.ph(opt_obj2, "top", viewSize.height - Math.max(Math.min(viewSize.height, l2) / 2 + 10, 20) + "px");
    _yt_player.ph(opt_obj2, "right", "1px");
    /** @type {boolean} */
    this.A = true;
    _yt_player.O(deepDataAndEvents, true);
    this.B = new _yt_player.Yt(function() {
      _yt_player.S(this.la(), "iv-branding-active");
    }, 0, this);
    this.B.start();
  }
};
/**
 * @param {?} opt_obj2
 * @param {Element} deepDataAndEvents
 * @return {undefined}
 */
_yt_player.h.JK = function(opt_obj2, deepDataAndEvents) {
  _yt_player.mq(this.la(), "iv-branding-active");
  this.C = new _yt_player.Yt((0, _yt_player.z)(function() {
    _yt_player.O(opt_obj2, false);
    if (!this.g) {
      _yt_player.Ih(deepDataAndEvents, 0);
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
    X3.prototype.show.call(this);
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
      var camelKey = this.annotation.Ta();
      if (camelKey) {
        this.Zi(this.l, camelKey, this.annotation.id, options.session_data, this.annotation.g);
      }
      this.o = new _yt_player.Yt(_yt_player.Ga(this.JK, index, node), 500, this);
      _yt_player.N(this, this.o);
      this.context.g.U(this.la(), "mouseover", (0, _yt_player.z)(this.UV, this, index, node, elem, options.image_height));
      this.context.g.U(this.la(), "mouseout", (0, _yt_player.z)(this.o.start, this.o, void 0));
      /** @type {boolean} */
      this.D = true;
    }
    B3(this.context.logger, this.annotation.g);
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
      oldconfig = new f2(options, [index, options.offsetTop], [index - elem - oldconfig, options.offsetTop], 200, Gva);
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
  X3.prototype.destroy.call(this);
};
_yt_player.q(Z3, X3);
_yt_player.h = Z3.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.show = function() {
  if (!this.isActive) {
    X3.prototype.show.call(this);
    if (!this.I) {
      Yxa(this);
      /** @type {boolean} */
      this.I = true;
    }
    _yt_player.O(this.la(), true);
    if (this.annotation) {
      if (this.annotation.g) {
        B3(this.context.logger, this.annotation.g);
      }
    }
    _yt_player.tg(function() {
      _yt_player.mq(this.la(), "iv-promo-inactive");
    }, 100, this);
    this.la().removeAttribute("aria-hidden");
    /** @type {boolean} */
    this.isActive = true;
    $3(this);
    $xa(this);
    aya(this, this.F);
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
  return this.B ? false : X3.prototype.Uo.call(this, mapper, graphics, capture, opt_coordHeight, opt_acc, opt_domHelper, borderColor);
};
/**
 * @param {number} opt_attributes
 * @param {Event} deepDataAndEvents
 * @return {undefined}
 */
_yt_player.h.ys = function(opt_attributes, deepDataAndEvents) {
  deepDataAndEvents.stopPropagation();
  $xa(this);
  aya(this, opt_attributes);
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
  Zxa(this);
};
/**
 * @param {?} dataAndEvents
 * @return {undefined}
 */
_yt_player.h.LO = function(dataAndEvents) {
  dataAndEvents.stopPropagation();
  this.hide();
  D3(this.context.logger, this.annotation.g);
};
/**
 * @param {?} dataAndEvents
 * @return {undefined}
 */
_yt_player.h.UJ = function(dataAndEvents) {
  dataAndEvents.stopPropagation();
  $3(this);
  /** @type {boolean} */
  this.B = true;
  _yt_player.S(this.la(), "iv-promo-collapsed-no-delay");
  this.C.start();
  D3(this.context.logger, this.annotation.g);
};
/**
 * @return {undefined}
 */
_yt_player.h.destroy = function() {
  this.C.dispose();
  X3.prototype.destroy.call(this);
};
_yt_player.q(a4, _yt_player.sV);
_yt_player.h = a4.prototype;
/**
 * @param {?} dataAndEvents
 * @param {Object} until
 * @return {?}
 */
_yt_player.h.wM = function(dataAndEvents, until) {
  if (!cya(_yt_player.Y(this.g).playerStyle)) {
    return null;
  }
  switch(dataAndEvents) {
    case "loadCustomAnnotationsXml":
      var which = _yt_player.Vr(until);
      if (which) {
        c4(this, which);
      }
      return true;
    case "removeCustomAnnotationById":
      return until && (this.l && (Pxa(this.l, until), U1(this.g))), true;
  }
  return null;
};
/**
 * @return {?}
 */
_yt_player.h.xM = function() {
  return cya(_yt_player.Y(this.g).playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : [];
};
/**
 * @return {undefined}
 */
_yt_player.h.Tu = function() {
  if (this.C) {
    var box = _yt_player.W_(_yt_player.VU(this.g), true);
    _yt_player.Jh(this.C.element, box.width, box.height);
    _yt_player.wh(this.C.element, box.left, box.top);
  }
  if (this.l) {
    var column = _yt_player.eV(this.g);
    box = this.l;
    column = column.width;
    _yt_player.U(box.D, "iv-drawer-small", 426 >= column);
    _yt_player.U(box.D, "iv-drawer-big", 1280 <= column);
  }
};
/**
 * @param {Object} _xhr
 * @return {undefined}
 */
_yt_player.h.fT = function(_xhr) {
  if (!_yt_player.Y(this.g).experiments.g("web_player_update_annotations_module_visibility_killswitch")) {
    this.Pc(_xhr.state);
  }
  if (_yt_player.X(_xhr.state, 2)) {
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
  var msg = this.g.getVideoData();
  var params = msg.videoId;
  var options = (0, _yt_player.z)(this.JR, this, params, this.I);
  var item = (0, _yt_player.z)(function() {
    /** @type {null} */
    this.D = null;
  }, this);
  if (_yt_player.nG()) {
    options = jya(this, options);
  }
  options = {
    format : "XML",
    wd : options,
    onError : item,
    ad : {}
  };
  if (msg.isPharma) {
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
  if (params = item.C.get(params)) {
    kya(options, params);
  }
  params = params && (params.Zh || params.tr);
  if (!msg.xn || params) {
    if (msg.Of) {
      dya(this, msg.Of, options);
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
 * @param {boolean} walkers
 * @return {undefined}
 */
_yt_player.h.BM = function(walkers) {
  var Of = this.g.getVideoData();
  if (Of.Of) {
    if (this.B) {
      this.g.removeEventListener("videodatachange", this.B);
      /** @type {null} */
      this.B = null;
    }
    dya(this, Of.Of, walkers);
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.unload = function() {
  xxa(this.Ya);
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
    U1(this.g);
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
 * @param {?} seen
 * @param {Node} obj
 * @param {Object} data
 * @return {undefined}
 */
_yt_player.h.JR = function(seen, obj, data) {
  /** @type {null} */
  this.D = null;
  if (!fya(this, obj, seen) && (seen = _yt_player.WD(data) && data.responseXML ? data.responseXML : null)) {
    c4(this, seen);
    _yt_player.S(this.g.getRootNode(), "iv-module-loaded");
    /** @type {Array} */
    seen = [];
    var i;
    for (i in this.o) {
      obj = this.o[i].annotation;
      if (obj.segment) {
        if (data = obj.segment, data.g.length) {
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
          var self = {
            id : i,
            namespace : "annotations_module"
          };
          if ("marker" == obj.type) {
            /** @type {string} */
            self.style = "ytp-chapter-marker";
            self.tooltip = obj.A;
            /** @type {boolean} */
            self.visible = true;
          }
          obj = new _yt_player.eQ(data, m, self);
          seen.push(obj);
        }
      }
    }
    _yt_player.hV(this.g, seen);
  }
};
/**
 * @param {?} dataAndEvents
 * @return {undefined}
 */
_yt_player.h.lD = function(dataAndEvents) {
  if (dataAndEvents == this.g.getVideoData().videoId) {
    if (this.loaded) {
      lya(this);
    } else {
      this.load();
    }
  }
};
/**
 * @param {Object} col
 * @return {undefined}
 */
_yt_player.h.yM = function(col) {
  col = col.getId();
  var s = this.o[col];
  if (s) {
    if (!s.o) {
      s = s.annotation;
      oya(this, col);
      B3(this.Ya, s.g);
    }
  }
};
/**
 * @param {Object} record
 * @return {undefined}
 */
_yt_player.h.zM = function(record) {
  d4(this, record.getId());
};
/**
 * @param {Node} node
 * @return {undefined}
 */
_yt_player.h.Iz = function(node) {
  if (node) {
    node.hide();
    e4(this, "shown", false, node.annotation.id);
    this.Xn(node.annotation, "hidden");
  }
};
/**
 * @param {(Node|string)} t
 * @return {undefined}
 */
_yt_player.h.CE = function(t) {
  if (t) {
    t.show();
    e4(this, "shown", true, t.annotation.id);
    this.Xn(t.annotation, "shown");
  }
};
/**
 * @param {Node} name
 * @param {Object} deepDataAndEvents
 * @param {?} html
 * @return {undefined}
 */
_yt_player.h.wU = function(name, deepDataAndEvents, html) {
  var e = this.o[name];
  if (e && deepDataAndEvents.value != html) {
    deepDataAndEvents.value = html;
    /** @type {boolean} */
    var value = false;
    Twa(e.annotation, function(rel) {
      value = value || rel.value;
    });
    pya(this, name, deepDataAndEvents, value);
  }
};
/**
 * @param {Object} data
 * @return {undefined}
 */
_yt_player.h.vQ = function(data) {
  if (data && data.id) {
    var key = data.Ta();
    if (key) {
      var camelKey = X2(key);
      if (camelKey) {
        var result = (0, _yt_player.z)(this.Xn, this, data, "click");
        if ("new" == P3(camelKey, key.target) || qya(this, key)) {
          result();
          /** @type {null} */
          result = null;
        }
        C3(this.Ya, data.g, result);
      }
    }
  }
};
/**
 * @param {Object} key
 * @param {string} name
 * @return {undefined}
 */
_yt_player.h.Xn = function(key, name) {
  Rwa(key, function(e) {
    if (e.trigger == name && ("openUrl" == e.type && e.url)) {
      var self = this.g.getVideoData();
      var init;
      if (!(init = !qya(this, e.url))) {
        init = Jxa(e.url);
        var passes = Ixa(e.url);
        if (init) {
          if (self.videoId == init) {
            this.g.ac(passes || 0);
          } else {
            self = b4(this).l;
            _yt_player.H0(self.app, init, void 0, void 0, void 0, void 0, void 0);
            if (passes) {
              if (b4(this).l.gd()) {
                b4(this).l.ac(passes);
              }
            }
          }
          /** @type {boolean} */
          self = true;
        } else {
          /** @type {boolean} */
          self = false;
        }
        /** @type {boolean} */
        init = !self;
      }
      if (init) {
        init = _yt_player.Y(this.g);
        if (self = X2(e.url)) {
          passes = Hxa(self);
          if (init) {
            if ("com" == passes[0]) {
              if ("google" == passes[1]) {
                if ("plus" == passes[2]) {
                  init = _yt_player.Ga(Kxa, init.pageId, init.Sc);
                  self = new _yt_player.vm(self);
                  _yt_player.zm(self, init(self.o));
                  self = self.toString();
                }
              }
            }
          }
        } else {
          /** @type {null} */
          self = null;
        }
        if (self) {
          this.g.hd();
          e = P3(self, e.url.target);
          init = key.itct;
          if ("ei" in _yt_player.dE(self)) {
            self = _yt_player.Vg(self, "ei");
          }
          _yt_player.vV(self, "current" == e ? "_top" : void 0, {
            itct : init
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
  e4(this, "playerControlShow", false);
};
/**
 * @return {undefined}
 */
_yt_player.h.bU = function() {
  e4(this, "playerControlShow", true);
};
/**
 * @param {Element} ignores
 * @return {undefined}
 */
_yt_player.h.AM = function(ignores) {
  e4(this, "rollOver", true, ignores.id);
};
/**
 * @param {Element} deepDataAndEvents
 * @return {undefined}
 */
_yt_player.h.Ih = function(deepDataAndEvents) {
  e4(this, "rollOver", false, deepDataAndEvents.id);
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
      d4(this, o.id);
      D3(this.Ya, o.g);
      this.Xn(o, "close");
      e4(this, "closed", true, o.id);
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
 * @param {boolean} deepDataAndEvents
 * @param {?} triggerRoute
 * @return {undefined}
 */
_yt_player.h.Tt = function(recurring, deepDataAndEvents, triggerRoute) {
  deepDataAndEvents = void 0 === deepDataAndEvents ? false : deepDataAndEvents;
  this.Vl();
  if (this.l) {
    if (recurring) {
      if (triggerRoute) {
        S3(this.l, triggerRoute, deepDataAndEvents);
      } else {
        S3(this.l, "YOUTUBE_DRAWER_AUTO_OPEN", deepDataAndEvents);
      }
    } else {
      T3(this.l);
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
  var codeSegments = this.M;
  /** @type {number} */
  var i = 0;
  var valuesLen = codeSegments.length;
  for (;i < valuesLen;i++) {
    _yt_player.oG(codeSegments[i]);
  }
  /** @type {number} */
  this.M.length = 0;
  _yt_player.sV.prototype.V.call(this);
};
var g4 = {};
/** @type {boolean} */
var nza = "ontouchstart" in window.document;
_yt_player.rF(window.document, "blur", h4, true);
_yt_player.rF(window.document, "change", h4, true);
_yt_player.rF(window.document, "click", h4);
_yt_player.rF(window.document, "focus", h4, true);
_yt_player.rF(window.document, "mouseover", h4);
_yt_player.rF(window.document, "mouseout", h4);
_yt_player.rF(window.document, "mousedown", h4);
_yt_player.rF(window.document, "keydown", h4);
_yt_player.rF(window.document, "keyup", h4);
_yt_player.rF(window.document, "keypress", h4);
_yt_player.rF(window.document, "cut", h4);
_yt_player.rF(window.document, "paste", h4);
if (nza) {
  _yt_player.rF(window.document, "touchstart", h4);
  _yt_player.rF(window.document, "touchend", h4);
  _yt_player.rF(window.document, "touchcancel", h4);
}
_yt_player.h = i4.prototype;
/**
 * @param {Object} a
 * @return {?}
 */
_yt_player.h.pe = function(a) {
  return _yt_player.$d(a, Z(this));
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
 * @param {string} name
 * @param {?} property
 * @param {string} string
 * @return {undefined}
 */
_yt_player.h.addBehavior = function(name, property, string) {
  string = Z(this, string);
  var prefixed = (0, _yt_player.z)(property, this);
  if (!(name in g4)) {
    g4[name] = new _yt_player.XC;
  }
  g4[name].subscribe(string, prefixed);
  this.D[property] = prefixed;
};
/**
 * @param {string} type
 * @param {?} id
 * @param {string} name
 * @return {undefined}
 */
_yt_player.h.removeBehavior = function(type, id, name) {
  if (type in g4) {
    var self = g4[type];
    self.unsubscribe(Z(this, name), this.D[id]);
    if (0 >= self.Dc()) {
      self.dispose();
      delete g4[type];
    }
  }
  delete this.D[id];
};
/**
 * @param {?} d
 * @param {string} storageKey
 * @param {boolean} recurring
 * @return {undefined}
 */
_yt_player.h.qj = function(d, storageKey, recurring) {
  var block = this.Ba(d, storageKey);
  if (block && (block = _yt_player.x(block))) {
    var args = _yt_player.$a(arguments, 2);
    _yt_player.ab(args, 0, 0, d);
    block.apply(null, args);
  }
};
/**
 * @param {?} a
 * @param {string} key
 * @return {?}
 */
_yt_player.h.Ba = function(a, key) {
  return _yt_player.bF(a, key);
};
/**
 * @param {?} d
 * @param {string} redraw
 * @param {string} value
 * @return {undefined}
 */
_yt_player.h.setData = function(d, redraw, value) {
  _yt_player.aF(d, redraw, value);
};
_yt_player.A(l4, i4);
_yt_player.ya(l4);
_yt_player.h = l4.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  this.addBehavior("click", this.bG);
  this.addBehavior("keydown", this.sA);
  this.addBehavior("keypress", this.tA);
  j4(this, "page-scroll", this.hK);
};
/**
 * @return {undefined}
 */
_yt_player.h.unregister = function() {
  this.removeBehavior("click", this.bG);
  this.removeBehavior("keydown", this.sA);
  this.removeBehavior("keypress", this.tA);
  r4(this);
  this.l = {};
  l4.ba.unregister.call(this);
};
/**
 * @param {Element} event
 * @return {undefined}
 */
_yt_player.h.bG = function(event) {
  if (event) {
    if (!event.disabled) {
      this.toggle(event);
      this.click(event);
    }
  }
};
/**
 * @param {Element} classNames
 * @param {string} deepDataAndEvents
 * @param {KeyboardEvent} e
 * @return {undefined}
 */
_yt_player.h.sA = function(classNames, deepDataAndEvents, e) {
  if (!(e.altKey || (e.ctrlKey || (e.shiftKey || e.metaKey))) && (deepDataAndEvents = q4(this, classNames))) {
    /**
     * @param {Node} deepDataAndEvents
     * @return {?}
     */
    var convertNode = function(deepDataAndEvents) {
      /** @type {string} */
      var optsData = "";
      if (deepDataAndEvents.tagName) {
        optsData = deepDataAndEvents.tagName.toLowerCase();
      }
      return "ul" == optsData || "table" == optsData;
    };
    var elem;
    if (convertNode(deepDataAndEvents)) {
      /** @type {string} */
      elem = deepDataAndEvents;
    } else {
      elem = V1(deepDataAndEvents, convertNode);
    }
    if (elem) {
      elem = elem.tagName.toLowerCase();
      if ("ul" == elem) {
        var r20 = this.iM
      } else {
        if ("table" == elem) {
          r20 = this.hM;
        }
      }
      if (r20) {
        sya(this, classNames, deepDataAndEvents, e, (0, _yt_player.z)(r20, this));
      }
    }
  }
};
/**
 * @return {undefined}
 */
_yt_player.h.hK = function() {
  var testSource = this.l;
  if (0 != _yt_player.Pb(testSource)) {
    var name;
    for (name in testSource) {
      var ref = testSource[name];
      var QUnit = _yt_player.$d(ref.activeButtonNode || ref.parentNode, Z(this));
      if (void 0 == QUnit || void 0 == ref) {
        break;
      }
      p4(this, QUnit, ref, true);
    }
  }
};
/**
 * @param {?} deepDataAndEvents
 * @param {?} dataAndEvents
 * @param {MouseEvent} jqEvent
 * @return {undefined}
 */
_yt_player.h.tA = function(deepDataAndEvents, dataAndEvents, jqEvent) {
  if (!jqEvent.altKey) {
    if (!jqEvent.ctrlKey) {
      if (!jqEvent.shiftKey) {
        if (!jqEvent.metaKey) {
          deepDataAndEvents = q4(this, deepDataAndEvents);
          if (m2(deepDataAndEvents)) {
            jqEvent.preventDefault();
          }
        }
      }
    }
  }
};
/**
 * @param {Element} failures
 * @param {Text} data
 * @param {Object} types
 * @return {undefined}
 */
_yt_player.h.hM = function(failures, data, types) {
  var ok = m4(this, data);
  if (ok) {
    data = Kva("table", data);
    var ret = Kva("tr", data);
    ret = _yt_player.qd(window.document, "td", null, ret).length;
    data = _yt_player.qd(window.document, "td", null, data);
    ok = uya(ok, data, ret, types);
    if (-1 != ok) {
      tya(this, failures, data[ok]);
      types.preventDefault();
    }
  }
};
/**
 * @param {Element} failures
 * @param {Text} text
 * @param {Object} e
 * @return {undefined}
 */
_yt_player.h.iM = function(failures, text, e) {
  if (40 == e.keyCode || 38 == e.keyCode) {
    var t = m4(this, text);
    if (t) {
      text = (0, _yt_player.Ld)(_yt_player.qd(window.document, "li", null, text), m2);
      t = uya(t, text, 1, e);
      tya(this, failures, text[t]);
      e.preventDefault();
    }
  }
};
/**
 * @param {Element} a
 * @return {undefined}
 */
_yt_player.h.dG = function(a) {
  if (a) {
    var node = q4(this, a);
    if (node) {
      a.setAttribute("aria-pressed", "true");
      a.setAttribute("aria-expanded", "true");
      node.originalParentNode = node.parentNode;
      /** @type {Element} */
      node.activeButtonNode = a;
      node.parentNode.removeChild(node);
      var f;
      if (this.Ba(a, "button-has-sibling-menu")) {
        f = a.parentNode;
      } else {
        f = vya(this, a);
      }
      f.appendChild(node);
      /** @type {string} */
      node.style.minWidth = a.offsetWidth - 2 + "px";
      var c = o4(this, a);
      if (c) {
        f.appendChild(c);
      }
      if (f = !!this.Ba(a, "button-menu-fixed")) {
        this.l[i2(a).toString()] = node;
      }
      p4(this, a, node, f);
      _yt_player.YF("yt-uix-button-menu-before-show", a, node);
      n2(node);
      if (c) {
        n2(c);
      }
      this.qj(a, "button-menu-action", true);
      _yt_player.S(a, Z(this, "active"));
      node = (0, _yt_player.z)(this.cG, this, a, false);
      c = (0, _yt_player.z)(this.cG, this, a, true);
      f = (0, _yt_player.z)(this.wW, this, a, void 0);
      if (!(this.g && q4(this, this.g) == q4(this, a))) {
        r4(this);
      }
      _yt_player.XF("yt-uix-button-menu-show", a);
      _yt_player.sF(this.o);
      /** @type {Array} */
      this.o = [_yt_player.rF(window.document, "click", c), _yt_player.rF(window.document, "contextmenu", node), _yt_player.rF(window, "resize", f)];
      /** @type {Element} */
      this.g = a;
    }
  }
};
/**
 * @param {?} elem
 * @param {?} data
 * @return {undefined}
 */
_yt_player.h.wW = function(elem, data) {
  var target = q4(this, elem);
  if (target) {
    if (data) {
      if (data instanceof _yt_player.Uc) {
        target.innerHTML = _yt_player.Vc(data);
      } else {
        _yt_player.Sd(target, data);
      }
    }
    /** @type {boolean} */
    var oldconfig = !!this.Ba(elem, "button-menu-fixed");
    p4(this, elem, target, oldconfig);
  }
};
/**
 * @return {?}
 */
_yt_player.h.cd = function() {
  return _yt_player.J(Z(this, "content"), void 0);
};
/**
 * @param {?} QUnit
 * @param {?} dataAndEvents
 * @param {Text} body
 * @return {undefined}
 */
_yt_player.h.cG = function(QUnit, dataAndEvents, body) {
  body = _yt_player.tF(body);
  var i = _yt_player.$d(body, Z(this));
  if (i) {
    i = q4(this, i);
    var last = q4(this, QUnit);
    if (i == last) {
      return;
    }
  }
  i = _yt_player.$d(body, Z(this, "menu"));
  /** @type {boolean} */
  last = i == q4(this, QUnit);
  var a = _yt_player.kq(body, Z(this, "menu-item"));
  var b = _yt_player.kq(body, Z(this, "menu-close"));
  if (!i || last && (a || b)) {
    n4(this, QUnit);
    if (i) {
      if (dataAndEvents) {
        if (this.Ba(QUnit, "button-menu-indicate-selected")) {
          if (QUnit = _yt_player.J(Z(this, "content"), QUnit)) {
            _yt_player.Sd(QUnit, W1(body));
          }
          wya(this, i, body);
        }
      }
    }
  }
};
/**
 * @param {?} deepDataAndEvents
 * @return {?}
 */
_yt_player.h.isToggled = function(deepDataAndEvents) {
  return _yt_player.kq(deepDataAndEvents, Z(this, "toggled"));
};
/**
 * @param {Element} elem
 * @return {undefined}
 */
_yt_player.h.toggle = function(elem) {
  if (this.Ba(elem, "button-toggle")) {
    var style = _yt_player.$d(elem, Z(this, "group"));
    var camelKey = Z(this, "toggled");
    var data = _yt_player.kq(elem, camelKey);
    if (style && this.Ba(style, "button-toggle-group")) {
      var target = this.Ba(style, "button-toggle-group");
      style = _yt_player.rd(Z(this), style);
      (0, _yt_player.B)(style, function(e) {
        if (e != elem || "optional" == target && data) {
          _yt_player.mq(e, camelKey);
          e.removeAttribute("aria-pressed");
        } else {
          _yt_player.S(elem, camelKey);
          e.setAttribute("aria-pressed", "true");
        }
      });
    } else {
      if (data) {
        elem.removeAttribute("aria-pressed");
      } else {
        elem.setAttribute("aria-pressed", "true");
      }
      _yt_player.pq(elem, camelKey);
    }
  }
};
/**
 * @param {Element} elem
 * @return {undefined}
 */
_yt_player.h.click = function(elem) {
  if (q4(this, elem)) {
    var target = q4(this, elem);
    if (target) {
      var parent = _yt_player.$d(target.activeButtonNode || target.parentNode, Z(this));
      if (parent && parent != elem) {
        n4(this, parent);
        _yt_player.XD((0, _yt_player.z)(this.dG, this, elem), 1);
      } else {
        if (m2(target)) {
          n4(this, elem);
        } else {
          this.dG(elem);
        }
      }
    }
    elem.focus();
  }
  this.qj(elem, "button-action");
};
_yt_player.A(s4, i4);
_yt_player.h = s4.prototype;
/**
 * @param {Object} a
 * @return {?}
 */
_yt_player.h.pe = function(a) {
  var b = i4.prototype.pe.call(this, a);
  return b ? b : a;
};
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  j4(this, "yt-uix-kbd-nav-move-out-done", this.hide);
};
/**
 * @return {undefined}
 */
_yt_player.h.dispose = function() {
  t4(this);
  s4.ba.dispose.call(this);
};
/**
 * @param {?} a
 * @param {string} key
 * @return {?}
 */
_yt_player.h.Ba = function(a, key) {
  var result = s4.ba.Ba.call(this, a, key);
  return result ? result : (result = s4.ba.Ba.call(this, a, "card-config")) && ((result = _yt_player.x(result)) && result[key]) ? result[key] : null;
};
/**
 * @param {Object} o
 * @return {undefined}
 */
_yt_player.h.show = function(o) {
  var key = this.pe(o);
  if (key) {
    _yt_player.S(key, Z(this, "active"));
    var later = xya(this, o, key);
    if (later) {
      /** @type {Object} */
      later.cardTargetNode = o;
      later.cardRootNode = key;
      yya(this, o, later);
      var indicator = Z(this, "card-visible");
      var e = this.Ba(o, "card-delegate-show") && this.Ba(key, "card-action");
      this.qj(key, "card-action", o);
      /** @type {Object} */
      this.o = o;
      o2(later);
      _yt_player.XD((0, _yt_player.z)(function() {
        if (!e) {
          n2(later);
          _yt_player.XF("yt-uix-card-show", key, o, later);
        }
        zya(later);
        _yt_player.S(later, indicator);
        _yt_player.XF("yt-uix-kbd-nav-move-in-to", later);
      }, this), 10);
    }
  }
};
/**
 * @param {Object} name
 * @return {undefined}
 */
_yt_player.h.hide = function(name) {
  if (name = this.pe(name)) {
    var camelKey = _yt_player.pd(Z(this, "card") + i2(name));
    if (camelKey) {
      _yt_player.mq(name, Z(this, "active"));
      _yt_player.mq(camelKey, Z(this, "card-visible"));
      o2(camelKey);
      /** @type {null} */
      this.o = null;
      /** @type {null} */
      camelKey.cardTargetNode = null;
      /** @type {null} */
      camelKey.cardRootNode = null;
      if (camelKey.cardMask) {
        _yt_player.Kd(camelKey.cardMask);
        /** @type {null} */
        camelKey.cardMask = null;
      }
    }
  }
};
/**
 * @param {Object} value
 * @param {?} ch
 * @return {undefined}
 */
_yt_player.h.uW = function(value, ch) {
  var text = this.pe(value);
  if (text) {
    if (ch) {
      var state = this.Cc(text);
      if (!state) {
        return;
      }
      if (ch instanceof _yt_player.Uc) {
        state.innerHTML = _yt_player.Vc(ch);
      } else {
        _yt_player.Sd(state, ch);
      }
    }
    if (_yt_player.kq(text, Z(this, "active"))) {
      text = xya(this, value, text);
      yya(this, value, text);
      n2(text);
      zya(text);
    }
  }
};
/**
 * @param {Object} defs
 * @return {?}
 */
_yt_player.h.isActive = function(defs) {
  return(defs = this.pe(defs)) ? _yt_player.kq(defs, Z(this, "active")) : false;
};
/**
 * @param {?} elem
 * @return {?}
 */
_yt_player.h.Cc = function(elem) {
  var val = elem.cardContentNode;
  if (!val) {
    var ll = Z(this, "content");
    var indicator = Z(this, "card-content");
    if (!(val = (val = this.Ba(elem, "card-id")) ? _yt_player.pd(val) : _yt_player.J(ll, elem))) {
      /** @type {Element} */
      val = window.document.createElement("div");
    }
    var rval = val;
    _yt_player.mq(rval, ll);
    _yt_player.S(rval, indicator);
    elem.cardContentNode = val;
  }
  return val;
};
var v4;
_yt_player.A(u4, i4);
_yt_player.ya(u4);
_yt_player.h = u4.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  this.addBehavior("keydown", this.Bz);
  j4(this, "yt-uix-kbd-nav-move-in", this.gC);
  j4(this, "yt-uix-kbd-nav-move-in-to", this.bQ);
  j4(this, "yt-uix-kbd-move-next", this.hC);
  j4(this, "yt-uix-kbd-nav-move-to", this.jo);
};
/**
 * @return {undefined}
 */
_yt_player.h.unregister = function() {
  this.removeBehavior("keydown", this.Bz);
  _yt_player.sF(v4);
};
/**
 * @param {Object} self
 * @param {string} i
 * @param {Object} e
 * @return {undefined}
 */
_yt_player.h.Bz = function(self, i, e) {
  var code = e.keyCode;
  if (self = _yt_player.$d(self, Z(this))) {
    switch(code) {
      case 13:
      ;
      case 32:
        this.gC(self);
        break;
      case 27:
        e.preventDefault();
        e.stopImmediatePropagation();
        a: {
          e = Z1(self, "kbdNavMoveOut");
          for (;!e;) {
            e = _yt_player.$d(self.parentElement, Z(this));
            if (!e) {
              break a;
            }
            e = Z1(e, "kbdNavMoveOut");
          }
          e = _yt_player.pd(e);
          this.jo(e);
          _yt_player.XF("yt-uix-kbd-nav-move-out-done", e);
        }
        break;
      case 40:
      ;
      case 38:
        if ((i = e.target) && _yt_player.kq(self, Z(this, "list"))) {
          switch(code) {
            case 40:
              this.hC(i, self);
              break;
            case 38:
              /** @type {boolean} */
              code = window.document.activeElement == self;
              self = Cya(self);
              i = self.indexOf(i);
              if (!(0 > i && !code)) {
                /** @type {number} */
                i = code ? self.length - 1 : (self.length + i - 1) % self.length;
                self[i].focus();
                Bya(this, self[i]);
              }
            ;
          }
        }
        e.preventDefault();
    }
  }
};
/**
 * @param {Object} element
 * @return {undefined}
 */
_yt_player.h.gC = function(element) {
  var classNames = Z1(element, "kbdNavMoveIn");
  classNames = _yt_player.pd(classNames);
  Aya(this, element, classNames);
  this.jo(classNames);
};
/**
 * @param {Element} pattern
 * @return {undefined}
 */
_yt_player.h.bQ = function(pattern) {
  Aya(this, _yt_player.ae(), pattern);
  this.jo(pattern);
};
/**
 * @param {Element} elem
 * @return {undefined}
 */
_yt_player.h.jo = function(elem) {
  if (elem) {
    if (_yt_player.Xd(elem)) {
      elem.focus();
    } else {
      var $elem = V1(elem, function(dest) {
        return _yt_player.Da(dest) && 1 == dest.nodeType ? _yt_player.Xd(dest) : false;
      });
      if ($elem) {
        $elem.focus();
      } else {
        elem.setAttribute("tabindex", "-1");
        elem.focus();
      }
    }
  }
};
/**
 * @param {string} item
 * @param {Node} input
 * @return {undefined}
 */
_yt_player.h.hC = function(item, input) {
  /** @type {boolean} */
  var i = window.document.activeElement == input;
  var items = Cya(input);
  var index = items.indexOf(item);
  if (!(0 > index && !i)) {
    /** @type {number} */
    i = i ? 0 : (index + 1) % items.length;
    items[i].focus();
    Bya(this, items[i]);
  }
};
_yt_player.A(w4, i4);
_yt_player.ya(w4);
_yt_player.h = w4.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  this.addBehavior("click", this.eG);
  this.addBehavior("mouseenter", this.cK);
  j4(this, "page-scroll", this.rK);
  j4(this, "yt-uix-kbd-nav-move-out-done", function(ar) {
    ar = this.pe(ar);
    A4(this, ar);
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
  _yt_player.sF(rva(_yt_player.Rb(this.o)));
  this.o = {};
  _yt_player.Lb(this.C, function(deepDataAndEvents) {
    _yt_player.Kd(deepDataAndEvents);
  }, this);
  this.C = {};
  _yt_player.$e(this.A);
  /** @type {null} */
  this.A = null;
  w4.ba.unregister.call(this);
};
/**
 * @param {(Object|number)} prop
 * @param {Element} deepDataAndEvents
 * @param {Event} opt_e
 * @return {undefined}
 */
_yt_player.h.eG = function(prop, deepDataAndEvents, opt_e) {
  if (prop) {
    deepDataAndEvents = D4(this, prop);
    if (!deepDataAndEvents.disabled) {
      if (j2(opt_e.target, deepDataAndEvents)) {
        Fya(this, prop);
      }
    }
  }
};
/**
 * @param {(Object|number)} prop
 * @param {?} deepDataAndEvents
 * @param {Event} opt_e
 * @return {undefined}
 */
_yt_player.h.cK = function(prop, deepDataAndEvents, opt_e) {
  if (prop) {
    if (_yt_player.kq(prop, Z(this, "hover"))) {
      deepDataAndEvents = D4(this, prop);
      if (j2(opt_e.target, deepDataAndEvents)) {
        Fya(this, prop, true);
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
      Dya(this, this.l, this.g);
    }
  }
};
/**
 * @param {(Object|number)} a
 * @return {undefined}
 */
_yt_player.h.fG = function(a) {
  if (a) {
    var node = C4(this, a);
    if (node) {
      _yt_player.YF("yt-uix-menu-before-show", a, node);
      if (this.g) {
        if (!j2(a, this.g)) {
          A4(this, this.l);
        }
      } else {
        /** @type {(Object|number)} */
        this.l = a;
        this.g = node;
        if (!_yt_player.kq(a, Z(this, "sibling-content"))) {
          _yt_player.Kd(node);
          window.document.body.appendChild(node);
        }
        /** @type {number} */
        var f = D4(this, a).offsetWidth - 2;
        /** @type {string} */
        node.style.minWidth = f + "px";
      }
      if (f = y4(this, a)) {
        if (node.parentNode) {
          node.parentNode.insertBefore(f, node.nextSibling);
        }
      }
      _yt_player.mq(node, Z(this, "content-hidden"));
      Dya(this, a, node);
      _yt_player.lq(D4(this, a), [Z(this, "trigger-selected"), "yt-uix-button-toggled"]);
      _yt_player.XF("yt-uix-menu-show", a);
      Iya(node);
      Gya(this, a);
      _yt_player.XF("yt-uix-kbd-nav-move-in-to", node);
      var c = (0, _yt_player.z)(this.vX, this, a);
      var credentials = (0, _yt_player.z)(this.eM, this, a);
      f = _yt_player.Fa(a).toString();
      /** @type {Array} */
      this.o[f] = [_yt_player.rF(node, "click", credentials), _yt_player.rF(window.document, "click", c)];
      if (_yt_player.kq(a, Z(this, "indicate-selected"))) {
        c = (0, _yt_player.z)(this.fM, this, a);
        this.o[f].push(_yt_player.rF(node, "click", c));
      }
      if (_yt_player.kq(a, Z(this, "hover"))) {
        a = (0, _yt_player.z)(this.uX, this, a);
        this.o[f].push(_yt_player.rF(window.document, "mousemove", a));
      }
    }
  }
};
/**
 * @param {(Object|number)} id
 * @param {?} deepDataAndEvents
 * @return {undefined}
 */
_yt_player.h.uX = function(id, deepDataAndEvents) {
  var QUnit = _yt_player.tF(deepDataAndEvents);
  if (QUnit) {
    var pathConfig = D4(this, id);
    if (!j2(QUnit, pathConfig)) {
      if (!Jya(this, QUnit)) {
        B4(this, id);
      }
    }
  }
};
/**
 * @param {?} ns
 * @param {?} origin
 * @return {undefined}
 */
_yt_player.h.vX = function(ns, origin) {
  var angle = _yt_player.tF(origin);
  if (angle) {
    if (Jya(this, angle)) {
      var s = _yt_player.$d(angle, Z(this, "content"));
      var cosAngle = _yt_player.Zd(angle, "LI");
      if (cosAngle) {
        if (s) {
          if (_yt_player.Qd(s, cosAngle)) {
            _yt_player.YF("yt-uix-menu-item-clicked", angle);
          }
        }
      }
      angle = _yt_player.$d(angle, Z(this, "close-on-select"));
      if (!angle) {
        return;
      }
      s = x4(angle);
    }
    A4(this, s || ns);
  }
};
/**
 * @param {?} optgroup
 * @param {?} deepDataAndEvents
 * @return {undefined}
 */
_yt_player.h.eM = function(optgroup, deepDataAndEvents) {
  var newMillis = _yt_player.tF(deepDataAndEvents);
  if (newMillis) {
    Hya(this, optgroup, newMillis);
  }
};
/**
 * @param {(Object|number)} haystack
 * @param {?} style
 * @return {undefined}
 */
_yt_player.h.fM = function(haystack, style) {
  var target = _yt_player.tF(style);
  if (target) {
    var oldconfig = D4(this, haystack);
    if (oldconfig && (target = _yt_player.Zd(target, "LI"))) {
      if (target = W1(target).trim(), oldconfig.hasChildNodes()) {
        var followingChild = l4.getInstance();
        if (oldconfig = _yt_player.J(Z(followingChild, "content"), oldconfig)) {
          _yt_player.Sd(oldconfig, target);
        }
      } else {
        _yt_player.Sd(oldconfig, target);
      }
    }
  }
};
_yt_player.A(E4, s4);
_yt_player.ya(E4);
_yt_player.h = E4.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  E4.ba.register.call(this);
  this.addBehavior("click", this.Zx, "target");
  this.addBehavior("click", this.Yx, "close");
};
/**
 * @return {undefined}
 */
_yt_player.h.unregister = function() {
  E4.ba.unregister.call(this);
  this.removeBehavior("click", this.Zx, "target");
  this.removeBehavior("click", this.Yx, "close");
  var unlock;
  for (unlock in this.g) {
    _yt_player.sF(this.g[unlock]);
  }
  this.g = {};
  for (unlock in this.l) {
    _yt_player.sF(this.l[unlock]);
  }
  this.l = {};
};
/**
 * @param {Object} elem
 * @param {(Object|string)} data
 * @param {Event} evt
 * @return {undefined}
 */
_yt_player.h.Zx = function(elem, data, evt) {
  evt.preventDefault();
  data = _yt_player.Zd(evt.target, "button");
  if (!data || !data.disabled) {
    data = this.Ba(elem, "card-target");
    var old;
    if (data) {
      old = _yt_player.u(data) ? window.document.getElementById(data) : data;
    } else {
      /** @type {Object} */
      old = elem;
    }
    elem = old;
    old = this.pe(elem);
    if (!this.Ba(old, "disabled")) {
      if (_yt_player.kq(old, Z(this, "active"))) {
        this.hide(elem);
        _yt_player.mq(old, Z(this, "active"));
      } else {
        this.show(elem);
        _yt_player.S(old, Z(this, "active"));
      }
    }
  }
};
/**
 * @param {Object} value
 * @return {undefined}
 */
_yt_player.h.show = function(value) {
  E4.ba.show.call(this, value);
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
  E4.ba.hide.call(this, name);
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
 * @param {Object} optgroup
 * @param {Event} opt_e
 * @return {undefined}
 */
_yt_player.h.ay = function(optgroup, opt_e) {
  /** @type {string} */
  var r20 = "yt-uix" + (this.B ? "-" + this.B : "") + "-card";
  /** @type {null} */
  var thisp = null;
  if (opt_e.target) {
    thisp = _yt_player.$d(opt_e.target, r20) || _yt_player.$d(x4(opt_e.target), r20);
  }
  if (!(thisp = thisp || (_yt_player.$d(window.document.activeElement, r20) || _yt_player.$d(x4(window.document.activeElement), r20)))) {
    this.hide(optgroup);
  }
};
/**
 * @param {Object} klass
 * @return {undefined}
 */
_yt_player.h.Yx = function(klass) {
  if (klass = _yt_player.$d(klass, Z(this, "card"))) {
    if (klass = klass.cardTargetNode) {
      this.hide(klass);
    }
  }
};
_yt_player.A(F4, s4);
_yt_player.ya(F4);
_yt_player.h = F4.prototype;
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
 * @param {Object} obj
 * @return {undefined}
 */
_yt_player.h.cC = function(obj) {
  if (S4 != obj) {
    if (S4) {
      this.hide(S4);
      /** @type {null} */
      S4 = null;
    }
    var functionStub = (0, _yt_player.z)(this.show, this, obj);
    var XD = (0, window.parseInt)(this.Ba(obj, "delay-show"), 10);
    functionStub = _yt_player.XD(functionStub, -1 < XD ? XD : 200);
    this.setData(obj, "card-timer", functionStub.toString());
    /** @type {Object} */
    S4 = obj;
    if (obj.alt) {
      this.setData(obj, "card-alt", obj.alt);
      /** @type {string} */
      obj.alt = "";
    }
    if (obj.title) {
      this.setData(obj, "card-title", obj.title);
      /** @type {string} */
      obj.title = "";
    }
  }
};
/**
 * @param {Object} elem
 * @return {undefined}
 */
_yt_player.h.eC = function(elem) {
  var val = (0, window.parseInt)(this.Ba(elem, "card-timer"), 10);
  _yt_player.ZD(val);
  /** @type {boolean} */
  this.pe(elem).isCardHidable = true;
  val = (0, window.parseInt)(this.Ba(elem, "delay-hide"), 10);
  val = -1 < val ? val : 200;
  _yt_player.XD((0, _yt_player.z)(this.KK, this, elem), val);
  if (val = this.Ba(elem, "card-alt")) {
    elem.alt = val;
  }
  if (val = this.Ba(elem, "card-title")) {
    elem.title = val;
  }
};
/**
 * @param {Object} ok
 * @return {undefined}
 */
_yt_player.h.KK = function(ok) {
  if (this.pe(ok).isCardHidable) {
    this.hide(ok);
    /** @type {null} */
    S4 = null;
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
var S4 = null;
var Mya = {
  LOADING : "loading",
  FG : "content",
  F4 : "working"
};
_yt_player.h = G4.prototype;
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
      /** @type {Window} */
      var vh = window;
      /** @type {Document} */
      var sh = vh.document;
      /** @type {number} */
      var body = 0;
      if (sh) {
        /** @type {(HTMLBodyElement|null)} */
        body = sh.body;
        /** @type {Element} */
        var docEl = sh.documentElement;
        if (docEl && body) {
          if (vh = _yt_player.wd(vh).height, _yt_player.vd(sh) && docEl.scrollHeight) {
            body = docEl.scrollHeight != vh ? docEl.scrollHeight : docEl.offsetHeight;
          } else {
            /** @type {number} */
            sh = docEl.scrollHeight;
            var oh = docEl.offsetHeight;
            if (docEl.clientHeight != oh) {
              /** @type {number} */
              sh = body.scrollHeight;
              /** @type {number} */
              oh = body.offsetHeight;
            }
            body = sh > vh ? sh > oh ? sh : oh : sh < oh ? sh : oh;
          }
        } else {
          /** @type {number} */
          body = 0;
        }
      }
      /** @type {string} */
      this.l.style.height = body + "px";
      n2(this.l);
    }
    this.Jz();
    body = Oya(this);
    Pya(body);
    this.B = _yt_player.rF(window.document, "keydown", (0, _yt_player.z)(this.OL, this));
    body = this.g;
    docEl = _yt_player.UF("player-added", this.Jz, this);
    _yt_player.aF(body, "player-ready-pubsub-key", docEl);
    if (this.T) {
      this.C = _yt_player.rF(window.document, "click", (0, _yt_player.z)(this.bV, this));
    }
    n2(this.g);
    this.o.setAttribute("tabindex", "0");
    Rya(this);
    if (!this.H) {
      _yt_player.S(window.document.body, "yt-dialog-active");
    }
    r4(l4.getInstance());
    t4(E4.getInstance());
    t4(F4.getInstance());
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
    o2(this.g);
    t4(E4.getInstance());
    t4(F4.getInstance());
    this.o.setAttribute("tabindex", "-1");
    if (!Nya()) {
      o2(this.l);
      if (!this.H) {
        _yt_player.mq(window.document.body, "yt-dialog-active");
      }
      Lva();
      Qya();
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
    var activeClassName = this.g;
    if (activeClassName) {
      var r20 = _yt_player.bF(activeClassName, "player-ready-pubsub-key");
      if (r20) {
        _yt_player.VF(r20);
        h2(activeClassName, "player-ready-pubsub-key");
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
 * @param {?} title
 * @return {undefined}
 */
_yt_player.h.setTitle = function(title) {
  _yt_player.Sd(_yt_player.J("yt-dialog-title", this.g), title);
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
  if (m2(this.g)) {
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
  Rya(this);
};
_yt_player.va("yt.ui.Dialog", G4, void 0);
_yt_player.A(H4, i4);
_yt_player.ya(H4);
_yt_player.h = H4.prototype;
/**
 * @return {undefined}
 */
_yt_player.h.register = function() {
  this.addBehavior("click", this.yv, "target");
  this.addBehavior("click", this.hide, "close");
  Tya(this);
};
/**
 * @return {undefined}
 */
_yt_player.h.unregister = function() {
  H4.ba.unregister.call(this);
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
 * @param {Object} config
 * @return {undefined}
 */
_yt_player.h.yv = function(config) {
  if (!this.g || !m2(this.g.g)) {
    var a = this.pe(config);
    config = Vya(a, config);
    if (!a) {
      a = config ? config.overlayParentNode : null;
    }
    if (a && config) {
      /** @type {boolean} */
      var r20 = !!this.Ba(a, "disable-shortcuts") || false;
      /** @type {boolean} */
      var d = !!this.Ba(a, "disable-outside-click-dismiss") || false;
      this.g = new G4(config, r20);
      this.o = a;
      var oldconfig = _yt_player.J("yt-dialog-fg", config);
      if (oldconfig) {
        var classes = this.Ba(a, "overlay-class") || "";
        var source = this.Ba(a, "overlay-style") || "default";
        var name = this.Ba(a, "overlay-shape") || "default";
        classes = classes ? classes.split(" ") : [];
        classes.push(Z(this, source));
        classes.push(Z(this, name));
        _yt_player.lq(oldconfig, classes);
      }
      this.g.show();
      _yt_player.XF("yt-uix-kbd-nav-move-to", oldconfig || config);
      Tya(this);
      if (!r20) {
        if (!d) {
          r20 = (0, _yt_player.z)(function(opt_e) {
            if (_yt_player.kq(opt_e.target, "yt-dialog-base")) {
              Uya(this);
            }
          }, this);
          config = _yt_player.J("yt-dialog-base", config);
          this.l = _yt_player.rF(config, "click", r20);
        }
      }
      this.qj(a, "overlay-shown");
      _yt_player.XF("yt-uix-overlay-shown", a);
    }
  }
};
/**
 * @param {?} arg
 * @return {?}
 */
_yt_player.h.Cc = function(arg) {
  return _yt_player.J("yt-dialog-content", arg.overlayContentNode || arg);
};
/**
 * @param {string} name
 * @return {undefined}
 */
_yt_player.h.hide = function(name) {
  if (!(name && name.disabled)) {
    _yt_player.XF("yt-uix-overlay-hide");
  }
};
/**
 * @param {Object} content
 * @return {undefined}
 */
_yt_player.h.show = function(content) {
  this.yv(content);
};
_yt_player.A(I4, i4);
_yt_player.ya(I4);
_yt_player.h = I4.prototype;
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
  I4.ba.unregister.call(this);
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
      h2(obj, "tooltip-hide-timer");
      _yt_player.ZD(prefix);
    }
    prefix = (0, _yt_player.z)(function() {
      aza(this, obj);
      h2(obj, "tooltip-show-timer");
    }, this);
    var parentName = (0, window.parseInt)(this.Ba(obj, "tooltip-show-delay"), 10) || 0;
    prefix = _yt_player.XD(prefix, parentName);
    this.setData(obj, "tooltip-show-timer", prefix.toString());
    if (obj.title) {
      this.setData(obj, "tooltip-text", Yya(this, obj));
      /** @type {string} */
      obj.title = "";
    }
    prefix = _yt_player.Fa(obj).toString();
    /** @type {Element} */
    this.l[prefix] = obj;
  }
};
/**
 * @param {Element} d
 * @return {undefined}
 */
_yt_player.h.Oi = function(d) {
  var label = (0, window.parseInt)(this.Ba(d, "tooltip-show-timer"), 10);
  if (label) {
    _yt_player.ZD(label);
    h2(d, "tooltip-show-timer");
  }
  label = (0, _yt_player.z)(function() {
    if (d) {
      var udataCur = _yt_player.pd(J4(this, d));
      if (udataCur) {
        bza(udataCur);
        _yt_player.Kd(udataCur);
        h2(d, "content-id");
      }
      udataCur = _yt_player.pd(J4(this, d, "arialabel"));
      _yt_player.Kd(udataCur);
    }
    h2(d, "tooltip-hide-timer");
  }, this);
  label = _yt_player.XD(label, 50);
  this.setData(d, "tooltip-hide-timer", label.toString());
  if (label = this.Ba(d, "tooltip-text")) {
    d.title = label;
  }
  label = _yt_player.Fa(d).toString();
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
 * @param {Element} dateTime
 * @return {undefined}
 */
_yt_player.h.Ix = function(dateTime) {
  /** @type {number} */
  this.g = 0;
  this.Oi(dateTime);
};
/**
 * @param {Element} walkers
 * @param {boolean} a
 * @param {Event} orig
 * @return {undefined}
 */
_yt_player.h.TE = function(walkers, a, orig) {
  if (orig.changedTouches) {
    /** @type {number} */
    this.g = 0;
    if (walkers = f4(a, Z(this), orig.changedTouches[0].target)) {
      this.xp(walkers, a);
    }
  }
};
/**
 * @param {Element} str
 * @param {boolean} topic
 * @param {Event} orig
 * @return {undefined}
 */
_yt_player.h.qq = function(str, topic, orig) {
  if (orig.changedTouches) {
    this.g = (0, _yt_player.F)();
    if (str = f4(topic, Z(this), orig.changedTouches[0].target)) {
      this.Oi(str);
    }
  }
};
var T4 = window.yt && (window.yt.uix && window.yt.uix.widgets_) || {};
_yt_player.va("yt.uix.widgets_", T4, void 0);
_yt_player.A(K4, _yt_player.yN);
_yt_player.A(L4, _yt_player.yN);
_yt_player.A(cza, _yt_player.yN);
_yt_player.A(M4, _yt_player.yN);
var oza = new _yt_player.zN("subscription-subscribe", L4);
var pza = new _yt_player.zN("subscription-subscribe-loading", K4);
var qza = new _yt_player.zN("subscription-subscribe-loaded", K4);
var rza = new _yt_player.zN("subscription-subscribe-success", cza);
var sza = new _yt_player.zN("subscription-unsubscribe", M4);
var tza = new _yt_player.zN("subscription-unsubscirbe-loading", K4);
var uza = new _yt_player.zN("subscription-unsubscribe-loaded", K4);
var vza = new _yt_player.zN("subscription-unsubscribe-success", K4);
var wza = new _yt_player.zN("subscription-enable-ypc", K4);
var xza = new _yt_player.zN("subscription-disable-ypc", K4);
var O4 = {};
/** @type {Array} */
var N4 = [];
_yt_player.A(P4, i4);
_yt_player.ya(P4);
/**
 * @return {undefined}
 */
P4.prototype.register = function() {
  this.addBehavior("click", this.kw);
  k4(this, pza, this.NC);
  k4(this, qza, this.gG);
  k4(this, rza, this.kU);
  k4(this, tza, this.NC);
  k4(this, uza, this.gG);
  k4(this, vza, this.xU);
  k4(this, wza, this.AR);
  k4(this, xza, this.uR);
};
/**
 * @return {undefined}
 */
P4.prototype.unregister = function() {
  this.removeBehavior("click", this.kw);
  P4.ba.unregister.call(this);
};
/**
 * @param {?} defs
 * @return {?}
 */
P4.prototype.isSubscribed = function(defs) {
  return!!this.Ba(defs, "is-subscribed");
};
var R4 = {
  pw : "hover-enabled",
  vG : "yt-uix-button-subscribe",
  wG : "yt-uix-button-subscribed",
  zY : "ypc-enabled",
  DG : "yt-uix-button-subscription-container",
  EG : "yt-subscription-button-disabled-mask-container"
};
var Q4 = {
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
_yt_player.h = P4.prototype;
/**
 * @param {string} target
 * @return {undefined}
 */
_yt_player.h.kw = function(target) {
  var path = this.Ba(target, "href");
  var targets = this.Ba(target, "insecure");
  if (path) {
    target = this.Ba(target, "target") || "_self";
    window.open(path, target);
  } else {
    if (!targets) {
      if (_yt_player.ZV()) {
        path = this.Ba(target, "channel-external-id");
        targets = this.Ba(target, "clicktracking");
        var options = fza(this, target);
        var $target = this.Ba(target, "parent-url");
        if (this.Ba(target, "is-subscribed")) {
          var value = this.Ba(target, "subscription-id");
          var node = new M4(path, value, options, target, targets, $target);
          if (jza(this, target)) {
            eza(target, path).then(function() {
              _yt_player.BN(sza, node);
            });
          } else {
            _yt_player.BN(sza, node);
          }
        } else {
          _yt_player.BN(oza, new L4(path, options, targets, $target));
        }
      } else {
        iza(this, target);
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
    this.setData(value, Q4.Ew, "true");
    if (isXML) {
      this.setData(value, Q4.gx, isXML);
    }
    if (this.Ba(value, Q4.bI)) {
      date1 = new $1;
      this.setData(value, Q4.fx, (date1.getTime() / 1E3).toString());
    }
  } else {
    h2(value, Q4.Ew);
    h2(value, Q4.fx);
    h2(value, Q4.gx);
  }
  gza(this, value);
};
/**
 * @param {Element} node
 * @param {boolean} val
 * @return {undefined}
 */
_yt_player.h.nE = function(node, val) {
  var nodeValue = _yt_player.$d(node, R4.DG);
  _yt_player.U(nodeValue, R4.EG, val);
  node.setAttribute("aria-busy", val ? "true" : "false");
  /** @type {boolean} */
  node.disabled = val;
};
/**
 * @param {?} d
 * @return {undefined}
 */
_yt_player.h.uJ = function(d) {
  /** @type {boolean} */
  var b = !!this.Ba(d, "ypc-item-type");
  /** @type {boolean} */
  var c = !!this.Ba(d, "ypc-item-id");
  if (!this.Ba(d, "ypc-enabled")) {
    if (b) {
      if (c) {
        _yt_player.S(d, "ypc-enabled");
        this.setData(d, Q4.DI, "true");
      }
    }
  }
};
/**
 * @param {Element} old
 * @return {undefined}
 */
_yt_player.h.nJ = function(old) {
  if (this.Ba(old, "ypc-enabled")) {
    _yt_player.mq(old, "ypc-enabled");
    h2(old, "ypc-enabled");
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
 * @param {?} deepDataAndEvents
 * @param {?} dataAndEvents
 * @param {boolean} recurring
 * @return {undefined}
 */
_yt_player.h.nj = function(deepDataAndEvents, dataAndEvents, recurring) {
  var applyArgs = hza(this, deepDataAndEvents);
  applyArgs = _yt_player.Xa([applyArgs], _yt_player.$a(arguments, 1));
  this.QI.apply(this, applyArgs);
};
/** @type {function (string): undefined} */
_yt_player.iY.annotations_module = a4;
/** @type {function (Text): undefined} */
_yt_player.iY.creatorendscreen = G2;
var U4 = P4.getInstance();
var V4 = Z(U4);
if (!(V4 in T4)) {
  U4.register();
  j4(U4, "yt-uix-init-" + V4, U4.init);
  j4(U4, "yt-uix-dispose-" + V4, U4.dispose);
  T4[V4] = U4;
}
;