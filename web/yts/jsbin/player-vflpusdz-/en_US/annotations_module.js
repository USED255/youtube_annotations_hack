var window = this;


ova = function(a, b) {
    var c = !1,
        d = a.subscribe("ROOT_MENU_REMOVED", function(a) {
                c || (c = !0, this.Ud(d), b.apply(void 0, arguments))
            },
            a)
};


pva = function(a, b, c, d) {
    c = (0, _yt_player.z)(c, d || a.l);
    b = _yt_player.AF(b, "change", c, "iv-card-poll-choice-input");
    a.g.push(b)
};


qva = function(a) {
    a.g || (a.g = new _yt_player.XC, _yt_player.N(a, a.g));
    return a.g
};


U1 = function(a) {
    a.R("cardstatechange", _yt_player.cV(a) && _yt_player.dV(a) ? 1 : 0)
};


rva = function(a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        if (_yt_player.Aa(d))
            for (var e = 0; e < d.length; e += 8192) {
                var f = _yt_player.$a(d, e, e + 8192);
                f = rva.apply(null, f);
                for (var k = 0; k < f.length; k++) b.push(f[k])
            } else b.push(d)
    }
    return b
};


sva = function(a, b, c, d) {
    if (null != a)
        for (a = a.firstChild; a;) {
            if (b(a) && (c.push(a), d) || sva(a, b, c, d)) return !0;
            a = a.nextSibling
        }
    return !1
};


V1 = function(a, b) {
    var c = [];
    return sva(a, b, c, !0) ? c[0] : void 0
};


vva = function(a, b, c) {
    if (!(a.nodeName in tva))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(
            /(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in uva) b.push(uva[a.nodeName]);
    else
        for (a = a.firstChild; a;) vva(a, b, c), a = a.nextSibling
};


W1 = function(a) {
    if (_yt_player.Xta && null !== a && "innerText" in a) a = a.innerText
        .replace(/(\r\n|\r|\n)/g, "\n");
    else {
        var b = [];
        vva(a, b, !0);
        a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    _yt_player.Xta || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
};


wva = function(a) {
    return new _yt_player.bh(a.left, a.top, a.right - a.left, a.bottom - a
        .top)
};


X1 = function(a) {
    return "rtl" == _yt_player.uh(a, "direction")
};


Ava = function(a) {
    var b = _yt_player.uh(a, "fontSize");
    var c = (c = b.match(xva)) && c[0] || null;
    if (b && "px" == c) return (0, window.parseInt)(b, 10);
    if (_yt_player.yd) {
        if (String(c) in yva) return _yt_player.Oh(a, b, "left",
            "pixelLeft");
        if (a.parentNode && 1 == a.parentNode.nodeType && String(c) in zva)
            return a = a.parentNode, c = _yt_player
                .uh(a, "fontSize"), _yt_player.Oh(a, b == c ? "1em" : b,
                    "left", "pixelLeft")
    }
    c = _yt_player.K("SPAN", {
        style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
    });
    a.appendChild(c);
    b = c.offsetHeight;
    _yt_player.Kd(c);
    return b
};


Y1 = function(a, b) {
    this.start = a < b ? a : b;
    this.end = a < b ? b : a
};


Z1 = function(a, b) {
    if (/-[a-z]/.test(b)) return null;
    if (_yt_player.ek && a.dataset) {
        if (_yt_player.kc() && !(b in a.dataset)) return null;
        var c = a.dataset[b];
        return void 0 === c ? null : c
    }
    return a.getAttribute("data-" + _yt_player.Hb(b))
};


$1 = function(a, b, c, d, e, f, k) {
    this.date = _yt_player.ua(a) ? new Date(a, b || 0, c || 1, d || 0, e ||
        0, f || 0, k || 0) : new Date(a && a
        .getTime ? a.getTime() : (0, _yt_player.F)())
};


c2 = function(a) {
    a = _yt_player.Fa(a);
    delete a2[a];
    _yt_player.Yb(a2) && b2 && b2.stop()
};


Cva = function() {
    b2 || (b2 = new _yt_player.Yt(function() {
            Bva()
        },
        20));
    var a = b2;
    a.isActive() || a.start()
};


Bva = function() {
    var a = (0, _yt_player.F)();
    _yt_player.Lb(a2, function(b) {
        Dva(b, a)
    });
    _yt_player.Yb(a2) || Cva()
};


Eva = function(a, b) {
    _yt_player.bf.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.z = b.coords[2];
    this.duration = b.duration;
    this.progress = b.progress;
    this.fps = b.C;
    this.state = b.g
};


d2 = function(a, b, c, d) {
    _yt_player.ut.call(this);
    if (!_yt_player.Aa(a) || !_yt_player.Aa(b)) throw Error(
        "Start and end parameters must be arrays");
    if (a.length != b.length) throw Error(
        "Start and end points must be the same length");
    this.l = a;
    this.D = b;
    this.duration = c;
    this.B = d;
    this.coords = [];
    this.progress = this.C = 0;
    this.A = null
};


Dva = function(a, b) {
    b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a
        .startTime = b);
    a.progress = (b - a.startTime) / (a.endTime - a.startTime);
    1 < a.progress && (a.progress = 1);
    a.C = 1E3 / (b - a.A);
    a.A = b;
    Fva(a, a.progress);
    1 == a.progress ? (a.g = 0, c2(a), a.wd(), a.xm()) : a.kb() && a.Iu()
};


Fva = function(a, b) {
    _yt_player.Ca(a.B) && (b = a.B(b));
    a.coords = Array(a.l.length);
    for (var c = 0; c < a.l.length; c++) a.coords[c] = (a.D[c] - a.l[c]) *
        b + a.l[c]
};


e2 = function(a, b, c, d, e) {
    d2.call(this, b, c, d, e);
    this.element = a
};


f2 = function(a, b, c, d, e) {
    if (2 != b.length || 2 != c.length) throw Error(
        "Start and end points must be 2D");
    e2.apply(this, arguments)
};


Gva = function(a) {
    return Math.pow(a, 3)
};


Hva = function(a) {
    return 3 * a * a - 2 * a * a * a
};


Iva = function(a, b) {
    return (b & 8 && X1(a) ? b ^ 4 : b) & -9
};


Jva = function(a, b, c, d, e, f, k) {
    a = a.clone();
    var l = Iva(b, c);
    c = _yt_player.Kh(b);
    k = k ? k.clone() : c.clone();
    a = _yt_player.WC(a, k, l, d, e, f);
    if (a.status & 496) return a.status;
    _yt_player.wh(b, _yt_player.gh(a.rect));
    k = _yt_player.fh(a.rect);
    _yt_player.kd(c, k) || (d = k, e = _yt_player.md(b), f = _yt_player.vd(
            _yt_player.od(e).g), !_yt_player.yd ||
        _yt_player.rc("10") || f && _yt_player.rc("8") ? (b = b.style,
            _yt_player.rh ? b.MozBoxSizing =
            "border-box" : _yt_player.Ad ? b.WebkitBoxSizing =
            "border-box" : b.boxSizing = "border-box", b
            .width = Math.max(d.width, 0) + "px", b.height = Math.max(d
                .height, 0) + "px") : (e = b.style, f ? (
            f = _yt_player.Qh(b), b = _yt_player.Th(b), e
            .pixelWidth = d.width - b.left - f.left - f.right -
            b.right, e.pixelHeight = d.height - b.top -
            f.top - f.bottom - b.bottom) : (e.pixelWidth = d.width,
            e.pixelHeight = d.height)));
    return a.status
};


g2 = function(a, b, c, d, e, f, k) {
    var l;
    if (l = c.offsetParent) {
        var m = "HTML" == l.tagName || "BODY" == l.tagName;
        if (!m || "static" != _yt_player.uh(l, "position")) {
            var n = _yt_player.Ch(l);
            if (!m) {
                m = X1(l);
                var p;
                if (p = m) {
                    p = _yt_player.bM && _yt_player.Mn(10);
                    var r = _yt_player.Uta && 0 <= _yt_player.Cb(_yt_player
                        .Fua, 10);
                    p = _yt_player.rh || p || r
                }
                m = p ? -l.scrollLeft : !m || _yt_player.oH && _yt_player
                    .rc("8") || "visible" == _yt_player.uh(l,
                        "overflowX") ? l.scrollLeft : l.scrollWidth - l
                    .clientWidth - l.scrollLeft;
                n = _yt_player.jd(n, new _yt_player.hd(m, l.scrollTop))
            }
        }
    }
    l = n || new _yt_player.hd;
    n = _yt_player.Lh(a);
    (m = _yt_player.Dh(a)) && _yt_player.eh(n, wva(m));
    m = _yt_player.od(a);
    r = _yt_player.od(c);
    m.g != r.g && (p = m.g.body, r = _yt_player.Fh(p, _yt_player.be(r)), r =
        _yt_player.jd(r, _yt_player.Ch(p)), !
        _yt_player.yd ||
        _yt_player.sc(9) || _yt_player.vd(m.g) || (r = _yt_player.jd(r,
            _yt_player.zd(m.g))), n.left += r.x, n
        .top += r.y);
    a = Iva(a, b);
    b = n.left;
    a & 4 ? b += n.width : a & 2 && (b += n.width / 2);
    b = new _yt_player.hd(b, n.top + (a & 1 ? n.height : 0));
    b = _yt_player.jd(b, l);
    e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
    var v;
    k && (v = _yt_player.Dh(c)) && (v.top -= l.y, v.right -= l.x, v
        .bottom -= l.y, v.left -= l.x);
    return Jva(b, c, d, f, v, k, void 0)
};


h2 = function(a, b) {
    a && (a.dataset ? delete a.dataset[_yt_player.$E(b)] : a
        .removeAttribute("data-" + b))
};


i2 = function(a) {
    var b = a.__yt_uid_key;
    b || (b = (0, _yt_player.Pua)(), a.__yt_uid_key = b);
    return b
};


j2 = function(a, b) {
    a = _yt_player.pd(a);
    b = _yt_player.pd(b);
    return !!_yt_player.Yd(a, function(a) {
            return a === b
        },
        !0, void 0)
};


Kva = function(a, b) {
    var c = _yt_player.qd(window.document, a, null, b);
    return c.length ? c[0] : null
};


Lva = function() {
    _yt_player.U(window.document.body, "hide-players", !1);
    var a = _yt_player.rd("preserve-players");
    (0, _yt_player.B)(a, function(a) {
        _yt_player.mq(a, "preserve-players")
    })
};


Mva = function(a) {
    if (window.document.createEvent) {
        var b = window.document.createEvent("HTMLEvents");
        b.initEvent("click", !0, !0);
        a.dispatchEvent(b)
    } else b = window.document.createEventObject(), a.fireEvent("onclick",
        b)
};


Nva = function(a) {
    this.g = a
};


k2 = function(a) {
    var b = {};
    void 0 !== a.g.trackingParams ? b.trackingParams = a.g.trackingParams :
        (b.veType = a.g.veType, null != a.g
            .veCounter && (b.veCounter = a.g.veCounter), null != a.g
            .elementIndex && (b.elementIndex = a.g
                .elementIndex));
    void 0 !== a.g.dataElement && (b.dataElement = k2(a.g.dataElement));
    void 0 !== a.g.youtubeData && (b.youtubeData = a.g.youtubeData);
    return b
};


l2 = function(a) {
    return new Nva({
        trackingParams: a
    })
};


Ova = function() {
    var a = _yt_player.LG(0),
        b;
    a ? b = new Nva({
        veType: a,
        youtubeData: void 0
    }) : b = null;
    return b
};


Pva = function(a, b) {
    (a = _yt_player.pd(a)) && a.style && (_yt_player.O(a, b), _yt_player.U(
        a, "hid", !b))
};


m2 = function(a) {
    return (a = _yt_player.pd(a)) ? _yt_player.Nh(a) && !_yt_player.kq(a,
        "hid") : !1
};


n2 = function(a) {
    (0, _yt_player.B)(arguments, function(a) {
        !_yt_player.Ba(a) || a instanceof window.Element ? Pva(a, !0) :
            (0, _yt_player.B)(a, function(a) {
                n2(a)
            })
    })
};


o2 = function(a) {
    (0, _yt_player.B)(arguments, function(a) {
        !_yt_player.Ba(a) || a instanceof window.Element ? Pva(a, !1) :
            (0, _yt_player.B)(a, function(a) {
                o2(a)
            })
    })
};


p2 = function(a, b, c) {
    this.id = a;
    this.timestamp = b.timestamp || 0;
    this.type = b.card_type;
    this.teaserText = b.teaser_text;
    this.teaserDurationMs = b.teaser_duration_ms;
    this.startMs = b.start_ms;
    this.autoOpen = b.auto_open || !1;
    this.Rd = b.session_data || {};
    this.o = c;
    this.sponsored = b.sponsored || !1;
    a = b.tracking || {};
    this.l = {
        BL: a.impression,
        click: a.click,
        close: a.close,
        dW: a.teaser_impression,
        Dv: a.teaser_click
    };
    b = b.tracking_params || {};
    this.C = l2(b.card);
    this.F = l2(b.teaser);
    this.D = l2(b.icon)
};


q2 = function(a, b) {
    _yt_player.Df.call(this);
    this.El = a;
    this.rs = b;
    this[_yt_player.gf] = !1
};


u2 = function(a, b, c, d) {
    q2.call(this, a, b);
    a = this.rs;
    b = this.la();
    c ? (b.setAttribute("stroke", c.g), b.setAttribute("stroke-opacity", 1),
        c = c.Cb(), _yt_player.u(c) && -1 != c
        .indexOf("px") ? b.setAttribute("stroke-width", (0, window
            .parseFloat)(c) / Qva(a)) : b.setAttribute(
            "stroke-width", c)) : b.setAttribute("stroke", "none");
    this.fill = d;
    c = this.rs;
    a = this.la();
    if (d instanceof r2) a.setAttribute("fill", d.H), a.setAttribute(
        "fill-opacity", d.I);
    else if (d instanceof s2) {
        b = "lg-" + d.B + "-" + d.D + "-" + d.C + "-" + d.F + "-" + d.g +
            "-" + d.l;
        var e = b in c.l ? c.l[b] : null;
        if (!e) {
            e = t2(c, "linearGradient", {
                x1: d.B,
                y1: d.D,
                x2: d.C,
                y2: d.F,
                gradientUnits: "userSpaceOnUse"
            });
            var f = "stop-color:" + d.g;
            _yt_player.ua(d.o) && (f += ";stop-opacity:" + d.o);
            f = t2(c, "stop", {
                offset: "0%",
                style: f
            });
            e.appendChild(f);
            f = "stop-color:" + d.l;
            _yt_player.ua(d.A) && (f += ";stop-opacity:" + d.A);
            d = t2(c, "stop", {
                offset: "100%",
                style: f
            });
            e.appendChild(d);
            e = Rva(c, b, e)
        }
        a.setAttribute("fill", "url(#" + e + ")")
    } else a.setAttribute("fill", "none")
};


Sva = function() {},
    Tva = function(a, b) {
        q2.call(this, a, b)
    };
v2 = function() {
    this.rb = [];
    this.Ka = [];
    this.Ce = []
};


w2 = function(a, b, c, d) {
    var e = a.Zd[0] - b * Math.cos(_yt_player.gd(d)) + b * Math.cos(
            _yt_player.gd(d + 90)),
        f = a.Zd[1] - c * Math.sin(_yt_player.gd(d)) + c * Math.sin(
            _yt_player.gd(d + 90));
    a.rb.push(3);
    a.Ka.push(1);
    a.Ce.push(b, c, d, 90, e, f);
    a.Jm = !1;
    a.Zd = [e, f]
};


Vva = function(a, b) {
    for (var c = a.Ce, d = 0, e = 0, f = a.rb.length; e < f; e++) {
        var k = a.rb[e],
            l = Uva[k] * a.Ka[e];
        b(k, c.slice(d, d + l));
        d += l
    }
};


Wva = function(a, b, c, d) {
    u2.call(this, a, b, c, d)
};


x2 = function(a, b) {
    this.l = a;
    this.g = b
};


y2 = function(a, b, c, d, e) {
    _yt_player.Tu.call(this, e);
    this.width = a;
    this.height = b;
    this.o = c || null;
    this.K = d || null
};


Qva = function(a) {
    var b = a.Hj();
    return b ? b.width / (a.o ? new _yt_player.I(a.o, a.K) : a.Hj()).width :
        0
};


s2 = function(a, b, c, d, e, f, k, l) {
    this.B = a;
    this.D = b;
    this.C = c;
    this.F = d;
    this.g = e;
    this.l = f;
    this.o = _yt_player.t(k) ? k : null;
    this.A = _yt_player.t(l) ? l : null
};


r2 = function(a, b) {
    this.H = a;
    this.I = null == b ? 1 : b
};


z2 = function(a, b) {
    q2.call(this, a, b)
};


Xva = function(a, b, c, d) {
    u2.call(this, a, b, c, d)
};


A2 = function(a, b, c, d, e) {
    y2.call(this, a, b, c, d, e);
    this.l = {};
    this.M = _yt_player.Ad && !_yt_player.rc(526);
    this.I = new _yt_player.Lm(this)
};


t2 = function(a, b, c) {
    a = a.H.g.createElementNS("http://www.w3.org/2000/svg", b);
    if (c)
        for (var d in c) a.setAttribute(d, c[d]);
    return a
};


B2 = function(a, b, c, d) {
    b = t2(a, "path", {
        d: Yva(b)
    });
    c = new Xva(b, a, c, d);
    a.B.la().appendChild(c.la())
};


Yva = function(a) {
    var b = [];
    Vva(a, function(a, d) {
        switch (a) {
            case 0:
                b.push("M");
                Array.prototype.push.apply(b, d);
                break;
            case 1:
                b.push("L");
                Array.prototype.push.apply(b, d);
                break;
            case 2:
                b.push("C");
                Array.prototype.push.apply(b, d);
                break;
            case 3:
                var c = d[3];
                b.push("A", d[0], d[1], 0, 180 < Math.abs(c) ? 1 :
                    0, 0 < c ? 1 : 0, d[4], d[5]);
                break;
            case 4:
                b.push("Z")
        }
    });
    return b.join(" ")
};


Rva = function(a, b, c) {
    if (b in a.l) return a.l[b];
    var d = "_svgdef_" + Zva++;
    c.setAttribute("id", d);
    a.l[b] = d;
    a.F.appendChild(c);
    return d
};


$va = function() {
    C2 || (C2 = new _yt_player.sg(400), C2.start());
    return C2
};


bwa = function(a, b, c) {
    var d = _yt_player.vG;
    a = {
        csn: a,
        parentVisualElement: k2(b),
        visualElements: (0, _yt_player.G)(c, function(a) {
            return k2(a)
        })
    };
    awa(d, {
        attachChild: a
    })
};


D2 = function(a, b) {
    _yt_player.wG("visualElementShown", {
        csn: a,
        ve: k2(b),
        eventType: 1
    })
};


E2 = function(a, b) {
    _yt_player.wG("visualElementGestured", {
        csn: a,
        ve: k2(b),
        gestureType: "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"
    })
};


awa = function(a, b) {
    b.eventTimeMs = Math.round(_yt_player.hG());
    b.lactMs = _yt_player.uG();
    _yt_player.dG({
            endpoint: "log_interaction",
            payload: b
        },
        a)
};


F2 = function(a, b) {
    function c(a) {
        return a.baseUrl
    }

    function d(a) {
        if (a) {
            var b = a.simpleText;
            if (b) return b;
            if (a.runs) return (0, _yt_player.G)(a.runs, function(a) {
                return a.text
            }).join("")
        }
    }

    function e(a) {
        if (a) {
            var b = [],
                c = a.videoId;
            c && b.push("v=" + c);
            (c = a.playlistId) && b.push("list=" + c);
            (a = a.startTimeSeconds) && b.push("t=" + a);
            return "/watch?" + b.join("&")
        }
    }
    var f = {};
    f.startMs = (0, window.parseInt)(a.startMs, 10);
    f.impressionUrls = (0, _yt_player.G)(a.impressionUrls || [], c);
    f.skip = a.skipEndscreen;
    f.visualElement = l2(a.trackingParams);
    var k = (0, _yt_player.G)(a.elements || [], function(a, f) {
        var k = a.endscreenElementRenderer;
        if (!k) return null;
        var l = {},
            m = k.style,
            v = k.endpoint || {};
        l.id = "element-" + f;
        l.type = m;
        l.title = d(k.title);
        l.metadata = d(k.metadata);
        l.callToAction = d(k.callToAction);
        l.By = k.image;
        l.left = (0, window.parseFloat)(k.left);
        l.width = (0, window.parseFloat)(k.width);
        l.top = (0, window.parseFloat)(k.top);
        l.aspectRatio = (0, window.parseFloat)(k.aspectRatio);
        l.startMs = (0, window.parseInt)(k.startMs, 10);
        l.endMs = (0, window.parseInt)(k.endMs, 10);
        l.clickUrls = (0, _yt_player.G)(v.loggingUrls || [], c);
        l.qn = _yt_player.Tb(k, "title", "accessibility",
            "accessibilityData", "label");
        l.impressionUrls = (0, _yt_player.G)(k.impressionUrls || [],
            c);
        l.MK = (0, _yt_player.G)(k.hovercardShowUrls || [], c);
        l.Rd = {
            itct: k.trackingParams
        };
        l.visualElement = l2(k.trackingParams);
        if ("VIDEO" == m) l.targetUrl = v.urlEndpoint ? v
            .urlEndpoint.url : e(v.watchEndpoint), l.Oo = !1, l
            .mq = b, l.videoDuration =
            d(k.videoDuration);
        else if ("PLAYLIST" == m) l.targetUrl = v.urlEndpoint ? v
            .urlEndpoint.url : e(v.watchEndpoint), l
            .Oo = !1, l.mq = b, l.playlistLength = d(k
                .playlistLength);
        else if ("CHANNEL" == m) {
            if (m = _yt_player.Tb(v, "browseEndpoint", "browseId"))
                l.channelId = m, l.targetUrl =
                "/channel/" + m;
            l.Oo = !1;
            l.mq = "new";
            l.isSubscribe = !!k.isSubscribe;
            if (l.isSubscribe) {
                a: {
                    if (m = k.hovercardButton)
                        if (m = m.subscribeButtonRenderer) {
                            v = d(m.unsubscribedButtonText);
                            var D = d(m.subscribedButtonText);
                            if (m.subscribed) {
                                var H = d(m
                                    .subscriberCountWithUnsubscribeText
                                    );
                                var L = d(m.subscriberCountText)
                            } else H = d(m.subscriberCountText), L =
                                d(m
                                    .subscriberCountWithSubscribeText);
                            var T = null;
                            if (k.signinEndpoint && (T = _yt_player
                                    .Tb(k, "signinEndpoint",
                                        "webNavigationEndpointData",
                                        "url"), !T)) {
                                k = void 0;
                                break a
                            }
                            if (v && (D || T)) {
                                k = {
                                    subscribed: m.subscribed,
                                    subscribeText: v,
                                    subscribeCount: H,
                                    unsubscribeText: D,
                                    unsubscribeCount: L,
                                    enabled: m.enabled,
                                    signinUrl: T,
                                    classic: k
                                        .useClassicSubscribeButton
                                };
                                break a
                            }
                        } k = void 0
                }
                l.subscribeButton = k
            }
            else l.subscribersText = d(k.subscribersText)
        } else "WEBSITE" == m && (l.targetUrl =
            _yt_player.Tb(v, "urlEndpoint", "url"), l.Oo = !0, l
            .mq = "new", l.iconUrl = k.icon
            .thumbnails[0].url);
        return l
    });
    f.elements = (0, _yt_player.Ld)(k, function(a) {
        return !!a
    });
    return f
};


G2 = function(a) {
    _yt_player.sV.call(this, a);
    this.o = null;
    this.J = !1;
    this.B = null;
    this.l = {};
    this.F = {};
    this.D = this.A = null;
    this.K = [];
    a = _yt_player.Y(a);
    this.M = _yt_player.HM(a) || _yt_player.IM(a);
    this.LE = !0;
    this.H = 0;
    this.I = new _yt_player.cp(null);
    this.C = new _yt_player.FF(this);
    _yt_player.N(this, this.C);
    this.C.O(this.g, "crn_creatorendscreen", this.EM);
    this.C.O(this.g, "crx_creatorendscreen", this.FM);
    this.C.O(this.g, "resize", this.XA);
    this.C.O(window, "focus", this.RU);
    this.load();
    var b = _yt_player.Ed("STYLE");
    (window.document.getElementsByTagName("HEAD")[0] || window.document
        .body).appendChild(b);
    _yt_player.Ze(this, function() {
        _yt_player.Kd(b)
    });
    b.sheet && (b.sheet.insertRule(
        ".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}",
        0), b.sheet.insertRule(
        ".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
        0))
};


H2 = function(a) {
    return "creator-endscreen-editor" === a
};


I2 = function(a, b) {
    _yt_player.kV(a.g, "creatorendscreen");
    a.A && (a.A.dispose(), a.A = null, a.D.dispose(), a.D = null);
    for (var c in a.l) a.l[c].dispose();
    a.l = {};
    a.F = {};
    0 < a.K.length && (a.K.forEach(function(a) {
        a.dispose()
    }), a.K.length = 0);
    a.H = 0;
    if ((a.o = b) && b.elements) {
        cwa(a);
        c = [];
        var d = new _yt_player.eQ(b.startMs, 0x7ffffffffffff, {
            id: "ytp-ce-in-endscreen",
            namespace: "creatorendscreen"
        });
        c.push(d);
        _yt_player.Y(a.g).l || (a.A = new _yt_player.W({
                G: "div",
                L: "ytp-ce-shadow"
            }), _yt_player.mV(a.g, a.A.element, 4), a.D = new _yt_player
            .MV(a.A, 200));
        for (d = 0; d < b.elements.length;
            ++d) {
            var e = b.elements[d],
                f = dwa(a, e);
            a.l[e.id] = f;
            a.F[e.id] = e;
            _yt_player.mV(a.g, f.element, 4);
            var k = new _yt_player.eQ(e.startMs, e.endMs, {
                id: "ytp-ce-element-" + e.id,
                namespace: "creatorendscreen"
            });
            c.push(k);
            ewa(a, f, e)
        }
        _yt_player.hV(a.g, c);
        a.XA()
    }
};


cwa = function(a) {
    var b =
        Ova(),
        c = _yt_player.MG();
    c && b && bwa(c, b, [a.o.visualElement])
};


dwa = function(a, b) {
    var c = null;
    switch (b.type) {
        case "VIDEO":
            c = {
                G: "div",
                da: ["ytp-ce-element", "ytp-ce-video"],
                P: {
                    tabindex: "0",
                    "aria-label": b.qn || "",
                    "aria-hidden": "true"
                },
                N: [{
                        G: "div",
                        L: "ytp-ce-element-shadow"
                    },
                    {
                        G: "div",
                        L: "ytp-ce-covering-image",
                        P: J2(b)
                    },
                    {
                        G: "div",
                        L: "ytp-ce-covering-shadow-top"
                    },
                    {
                        G: "a",
                        L: "ytp-ce-covering-overlay",
                        P: {
                            href: b.targetUrl,
                            tabindex: "-1"
                        },
                        N: [{
                                G: "div",
                                da: ["ytp-ce-video-title",
                                    "yt-ui-ellipsis",
                                    "yt-ui-ellipsis-2"
                                ],
                                P: {
                                    dir: _yt_player.dp(a.I, b
                                        .title || "")
                                },
                                aa: b.title
                            },
                            {
                                G: "div",
                                L: "ytp-ce-video-duration",
                                aa: b.videoDuration
                            }
                        ]
                    }
                ]
            };
            c = new _yt_player.W(c);
            break;
        case "PLAYLIST":
            c = {
                G: "div",
                da: ["ytp-ce-element", "ytp-ce-playlist"],
                P: {
                    tabindex: "0",
                    "aria-label": b.qn || "",
                    "aria-hidden": "true"
                },
                N: [{
                        G: "div",
                        L: "ytp-ce-element-shadow"
                    },
                    {
                        G: "div",
                        L: "ytp-ce-covering-image",
                        P: J2(b)
                    },
                    {
                        G: "div",
                        L: "ytp-ce-covering-shadow-top"
                    },
                    {
                        G: "a",
                        L: "ytp-ce-covering-overlay",
                        P: {
                            href: b.targetUrl,
                            tabindex: "-1"
                        },
                        N: [{
                                G: "div",
                                da: ["ytp-ce-playlist-title",
                                    "yt-ui-ellipsis",
                                    "yt-ui-ellipsis-2"
                                ],
                                P: {
                                    dir: _yt_player.dp(a.I, b
                                        .title || "")
                                },
                                aa: b.title
                            },
                            {
                                G: "div",
                                L: "ytp-ce-playlist-count",
                                N: [{
                                        G: "div",
                                        L: "ytp-ce-playlist-icon"
                                    },
                                    {
                                        G: "div",
                                        L: "ytp-ce-playlist-count-text",
                                        aa: b.playlistLength
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
            c = new _yt_player.W(c);
            break;
        case "CHANNEL":
            c = {
                G: "div",
                da: ["ytp-ce-element", "ytp-ce-channel", b.isSubscribe ?
                    "ytp-ce-channel-this" :
                    "ytp-ce-channel-that"
                ],
                P: {
                    tabindex: "0",
                    "aria-label": b.qn || "",
                    "aria-hidden": "true"
                },
                N: [{
                        G: "div",
                        L: "ytp-ce-element-shadow"
                    },
                    {
                        G: "div",
                        L: "ytp-ce-expanding-overlay",
                        N: [{
                                G: "div",
                                L: "ytp-ce-expanding-overlay-hider"
                            },
                            {
                                G: "div",
                                L: "ytp-ce-expanding-overlay-background"
                            },
                            {
                                G: "div",
                                L: "ytp-ce-expanding-overlay-content",
                                N: [{
                                    G: "div",
                                    L: "ytp-ce-expanding-overlay-body",
                                    N: [{
                                        G: "div",
                                        L: "ytp-ce-expanding-overlay-body-padding",
                                        N: [{
                                                G: "a",
                                                da: ["ytp-ce-channel-title",
                                                    "ytp-ce-link"
                                                ],
                                                P: {
                                                    href: b
                                                        .targetUrl,
                                                    target: "_blank",
                                                    tabindex: "-1",
                                                    dir: _yt_player
                                                        .dp(a
                                                            .I,
                                                            b
                                                            .title ||
                                                            ""
                                                            )
                                                },
                                                aa: b
                                                    .title
                                            },
                                            b
                                            .subscribeButton ?
                                            {
                                                G: "div",
                                                L: "ytp-ce-subscribe-container",
                                                N: [{
                                                    G: "div",
                                                    L: "ytp-ce-channel-subscribe"
                                                }]
                                            } :
                                            "",
                                            b
                                            .subscribersText ?
                                            {
                                                G: "div",
                                                L: "ytp-ce-channel-subscribers-text",
                                                aa: b
                                                    .subscribersText
                                            } :
                                            "",
                                            b
                                            .metadata ?
                                            {
                                                G: "div",
                                                da: ["ytp-ce-channel-metadata",
                                                    "yt-ui-ellipsis",
                                                    "yt-ui-ellipsis-3"
                                                ],
                                                aa: b
                                                    .metadata
                                            } :
                                            ""
                                        ]
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        G: "div",
                        L: "ytp-ce-expanding-image",
                        P: J2(b)
                    }
                ]
            };
            c = new _yt_player.W(c);
            var d = _yt_player.qd(window.document, "div",
                "ytp-ce-channel-subscribe", c.element)[0];
            if (b.subscribeButton) {
                _yt_player.S(d, "ytp-ce-subscribe-button");
                if (_yt_player.Y(a.g).l) {
                    var e = null;
                    var f = b.Rd.itct
                } else e = "endscreen", f = null;
                e = new _yt_player.y_(b.subscribeButton.subscribeText, b
                    .subscribeButton.subscribeCount, b
                    .subscribeButton.unsubscribeText, b.subscribeButton
                    .unsubscribeCount, b.subscribeButton
                    .enabled, b.subscribeButton.classic, b.channelId,
                    !!b.subscribeButton.subscribed, e, f, b
                    .subscribeButton.signinUrl, a.g);
                d.appendChild(e.element);
                a.K.push(e)
            }
            break;
        case "WEBSITE":
            c = {
                    G: "div",
                    da: ["ytp-ce-element", "ytp-ce-website"],
                    P: {
                        tabindex: "0",
                        "aria-label": b.qn || "",
                        "aria-hidden": "true"
                    },
                    N: [{
                            G: "div",
                            L: "ytp-ce-element-shadow"
                        },
                        {
                            G: "div",
                            L: "ytp-ce-expanding-overlay",
                            N: [{
                                    G: "div",
                                    L: "ytp-ce-expanding-overlay-hider"
                                },
                                {
                                    G: "div",
                                    L: "ytp-ce-expanding-overlay-background"
                                },
                                {
                                    G: "div",
                                    L: "ytp-ce-expanding-overlay-content",
                                    N: [{
                                        G: "div",
                                        L: "ytp-ce-expanding-overlay-body",
                                        N: [{
                                            G: "div",
                                            L: "ytp-ce-expanding-overlay-body-padding",
                                            N: [{
                                                    G: "div",
                                                    L: "ytp-ce-website-title",
                                                    P: {
                                                        dir: _yt_player
                                                            .dp(a
                                                                .I,
                                                                b
                                                                .title ||
                                                                ""
                                                                )
                                                    },
                                                    aa: b
                                                        .title
                                                },
                                                {
                                                    G: "div",
                                                    L: "ytp-ce-website-metadata",
                                                    aa: b
                                                        .metadata
                                                },
                                                {
                                                    G: "a",
                                                    da: ["ytp-ce-website-goto",
                                                        "ytp-ce-link"
                                                    ],
                                                    P: {
                                                        href: b
                                                            .targetUrl,
                                                        target: "_blank",
                                                        tabindex: "-1"
                                                    },
                                                    aa: b
                                                        .callToAction
                                                }
                                            ]
                                        }]
                                    }]
                                }
                            ]
                        },
                        {
                            G: "div",
                            L: "ytp-ce-expanding-image",
                            P: J2(b)
                        },
                        {
                            G: "div",
                            L: "ytp-ce-expanding-icon",
                            P: fwa(b.iconUrl)
                        }
                    ]
                },
                c = new _yt_player.W(c)
    }
    b.g && _yt_player.S(c.element, "ytp-ce-placeholder");
    return c
};


J2 = function(a) {
    if (a.By) var b =
        a.By.thumbnails;
    return fwa(b ? b[b.length - 1].url : null)
};


fwa = function(a) {
    return a ? {
        style: "background-image: url(" + a + ")"
    } : {}
};


ewa = function(a, b, c) {
    function d() {
        k(1)
    }

    function e() {
        k(-1)
    }
    b.U("mouseenter", (0, _yt_player.z)(a.Ut, a, b, c));
    b.U("mouseleave", (0, _yt_player.z)(a.Ru, a, b, c));
    _yt_player.Y(a.g).l || b.U("click", (0, _yt_player.z)(function(a) {
            _yt_player.S(a.element, "ytp-ce-element-hover")
        },
        a, b));
    b.U("click", (0, _yt_player.z)(a.HC, a, c));
    b.U("keypress", (0, _yt_player.z)(a.HC, a, c));
    b.U("focus", (0, _yt_player.z)(function(a, b) {
            this.Ut(a, b)
        },
        a, b, c));
    b.U("blur", (0, _yt_player.z)(function(a, b) {
            this.Ru(a, b)
        },
        a, b, c));
    b.U("touchstart", (0, _yt_player.z)(a.Ut, a, b, c));
    var f = _yt_player.J("ytp-ce-expanding-overlay-hider", b.element);
    f && b.O(f, "touchstart", function(a) {
        a = a || window.event;
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation();
        _yt_player.mq(b.element, "ytp-ce-element-hover");
        _yt_player.mq(b.element, "ytp-ce-force-expand")
    });
    b.U("keydown", (0, _yt_player.z)(function(a, b) {
            this.LE = 9 == b.keyCode && !b.shiftKey
        },
        a, b));
    var k = (0, _yt_player.z)(function(a, b, c) {
            this.H += c;
            0 < this.H ? (_yt_player.S(a.element,
                "ytp-ce-force-expand"), K2(this, b.id, !0)) : (
                _yt_player.mq(a
                    .element, "ytp-ce-force-expand"), _yt_player.mq(
                    a.element, "ytp-ce-element-hover"), K2(
                    this, b.id, !1))
        },
        a, b, c);
    a = (0, _yt_player.z)(function(a, b) {
            b && (a.U("blur", function() {
                _yt_player.Nh(b) && this.LE && b.focus()
            }), a.O(b, "focus", d), a.O(b, "blur", e))
        },
        a, b);
    a(_yt_player.J("ytp-sb-subscribe", b.element));
    a(_yt_player.J("ytp-sb-unsubscribe", b.element));
    b.U("focus", d);
    b.U("blur", e)
};


K2 = function(a, b, c) {
    a.A && (c ? a.D.show() : a.D.hide());
    for (var d in a.l) d != b && _yt_player.U(a.l[d].element,
        "ytp-ce-element-shadow-show", c)
};


L2 = function(a, b, c) {
    function d() {
        f || (e++, e == b.length && (k.stop(), c && c()))
    }
    if (!b || H2(_yt_player.Y(a.g).playerStyle)) c && c();
    else {
        b = gwa(a, b);
        var e = 0,
            f = !1,
            k = new _yt_player.Yt(function() {
                    f = !0;
                    c && c()
                },
                1E3, a);
        k.start();
        for (a = 0; a < b.length; a++) _yt_player.FE(b[a], d)
    }
};


M2 = function(a, b, c) {
    L2(a, b.clickUrls, c);
    (a = _yt_player.MG()) && b.Oo && E2(a, b.visualElement)
};


gwa = function(a, b) {
    var c = a.g.getVideoData().clientPlaybackNonce,
        d = a.g.getCurrentTime().toFixed(2);
    c = {
        CPN: c,
        AD_CPN: c,
        MT: d
    };
    d = [];
    for (var e = 0; e < b.length; e++) d.push(hwa(b[e], c));
    return d
};


hwa = function(a, b) {
    return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function(a) {
        var c = (0, window.unescape)(a);
        c = c.substring(1, c.length - 1);
        return b[c] ? (0, window.escape)(b[c]) : a
    })
};


N2 = function(a) {
    return _yt_player.Aa(a) && a.length ? a[0] : a
};


O2 = function(a) {
    var b = /.+/;
    return _yt_player.u(a) && null != b && null != a && a.match(b) ? a : ""
};


P2 = function(a, b) {
    if (null == a) return b;
    var c = (0, window.parseInt)(a, 0);
    if ((0, window.isNaN)(c)) return b;
    c = c.toString(16);
    return "#" + "000000".substring(0, 6 - c.length) + c
};


Q2 = function(a) {
    return _yt_player.u(a) ? a : ""
};


R2 = function(a, b, c) {
    for (var d in b)
        if (b[d] == a) return a;
    return c
};


S2 = function(a, b) {
    return "true" == a || "false" == a ? "true" == a : b
};


T2 = function(a, b) {
    return _yt_player.u(a) ? (0, window.parseFloat)(a) : b
};


U2 = function(a, b, c, d, e) {
    a = (0, window.parseFloat)(a);
    if (null != a && !(0, window.isNaN)(a)) {
        if (d) return _yt_player.dd(a, b, c);
        if (a >= b && a <= c) return a
    }
    return e
};


iwa = function(a) {
    if (null == a) return 0;
    if ("never" == a) return -1;
    a = a.split(":");
    if (3 < a.length) return 0;
    var b = 0,
        c = 1;
    (0, _yt_player.B)(a, function(a) {
        a = (0, window.parseFloat)(a);
        0 > a && (c = -c);
        b = 60 * b + Math.abs(a)
    });
    return c * b
};


V2 = function(a, b) {
    if (null == a) return null;
    if (_yt_player.Ba(a)) {
        var c = [];
        (0, _yt_player.B)(a, function(a) {
            (a = b(a)) && c.push(a)
        });
        return c
    }
    var d = b(a);
    return d ? [d] : []
};


jwa = function(a) {
    function b(a) {
        return null != a && !(0, window.isNaN)(a)
    }
    return (a = a ? new _yt_player.Zg((0, window.parseFloat)(a.top), (0,
            window.parseFloat)(a.right), (0, window
            .parseFloat)(a.bottom), (0, window.parseFloat)(a.left)) :
        null) && b(a.top) && b(a.right) && b(a
        .bottom) && b(a.left) ? a : null
};


kwa = function(a) {
    function b(a) {
        return (0, _yt_player.Ld)(a.split(/ +/), function(a) {
            return "" != a
        })
    }
    return null == a ? [] : b(a)
};


lwa = function(a, b, c, d) {
    this.value = a;
    this.target = b;
    this.showLinkIcon = c;
    this.g = d
};


W2 = function(a) {
    if (!a) return null;
    var b = _yt_player.Mc(Q2(a.value));
    b = _yt_player.Jc(b);
    if (!b) return null;
    var c = R2(a.target, mwa, "current");
    return null == c ? null : new lwa(b, c, S2(a.show_link_icon, !0),
        null != a.pause_on_navigation ? a
        .pause_on_navigation : !0)
};


X2 = function(a) {
    return a.value ? a.value : null
};


nwa = function(a, b, c) {
    this.type = a;
    this.trigger = b;
    this.url = c
};


qwa = function(a) {
    if (!a) return null;
    var b = R2(a.type, owa),
        c = R2(a.trigger, pwa),
        d = N2(a.url);
    d = W2(d ? d : null);
    N2(a.subscribeData);
    return b ? new nwa(b, c, d) : null
};


rwa = function(a, b, c) {
    var d = (c = "xx" == c || "xy" == c) ? 640 : 360;
    return (d + ((c ? a.width : a.height) - d) * b) / d
};


Y2 = function(a, b, c) {
    var d = (c = "xy" == c || "yy" == c) ? 360 : 640;
    return (d + ((c ? a.height : a.width) - d) * b) / d
};


Z2 = function(a, b, c, d, e, f, k, l, m, n, p) {
    this.x = a;
    this.y = b;
    this.Qk = c;
    this.o = d;
    this.t = e;
    this.B = f;
    this.C = k;
    this.D = l;
    this.A = m;
    this.l = n;
    this.g = p
};


twa = function(a, b) {
    if (!a) return null;
    var c = T2(a.x, 0),
        d = T2(a.y, 0),
        e = T2(a.w, 0),
        f = T2(a.h, 0),
        k = iwa(a.t),
        l = T2(a.d, 0),
        m = T2(a.px, 0),
        n = T2(a.py, 0),
        p = T2(a.scaleSlope, 1),
        r = T2(a.scaleSlopeX, p);
    p = T2(a.scaleSlopeY, p);
    var v = R2(a.scaleDimension, swa, "xy");
    return b(c, d, e, f, k, l, m, n, r, p, v)
};


$2 = function(a, b) {
    var c = uwa(b, vwa(a, new _yt_player.bh(a.x, a.y, a.Qk, a.o), b.g)),
        d = b.g,
        e = c.clone();
    d && !d.contains(c) && (c.width < d.width ? e.left = _yt_player.dd(c
            .left, d.left, d.left + d.width - c.width) :
        (e.left = d.left, e.width = d.width), c.height < d.height ? e
        .top = _yt_player.dd(c.top, d.top, d.top +
            d.height - c.height) : (e.top = d.top, e.height = d.height));
    return e
};


vwa = function(a, b, c) {
    var d = a.C,
        e = a.D,
        f = a.g ? a.g : "xy",
        k = rwa(c, a.A, f);
    a = Y2(c, a.l, f);
    f = 640 * b.width * k / 100;
    var l = 360 * b.height * a / 100;
    return new _yt_player.bh(0 == d ? 640 * b.left * k / 100 : 0 < d ? d : c
        .width + d - f, 0 == e ? 360 * b.top *
        a / 100 : 0 < e ? e : c.height + e - l, f, l)
};


wwa = function(a) {
    return a ? twa(a, function(a, c, d, e, f, k, l, m, n, p, r) {
        return new Z2(a, c, d, e, f, k, l, m, n, p, r)
    }) : null
};


xwa = function(a, b) {
    this.g = a;
    this.l = b || null
};


uwa = function(a, b) {
    var c = a.l ? $2(a.l, new xwa(a.g)) : a.g;
    var d = b.clone(),
        e = c.left;
    c = c.top;
    e instanceof _yt_player.hd ? (d.left += e.x, d.top += e.y) : (d.left +=
        e, _yt_player.ua(c) && (d.top += c));
    return d
};


ywa = function(a, b, c, d, e, f, k, l, m, n, p, r, v) {
    Z2.call(this, a, b, c, d, e, l, m, n, p, r, v);
    this.F = f;
    this.H = k
};


zwa = function(a) {
    if (!a) return null;
    var b = T2(a.sx, 0),
        c = T2(a.sy, 0);
    return twa(a, function(a, e, f, k, l, m, n, p, r, v, D) {
        return new ywa(a, e, f, k, l, b, c, m, n, p, r, v, D)
    })
};


Awa = function(a, b, c, d, e, f, k, l, m, n, p, r, v, D) {
    this.l = a;
    this.bgColor = b;
    this.borderColor = c;
    this.borderWidth = d;
    this.g = e;
    this.C = f;
    this.o = k;
    this.textAlign = l;
    this.textSize = m;
    this.A = n;
    this.padding = p;
    this.effects = r;
    this.cornerRadius = v;
    this.B = D
};


Cwa = function(a) {
    if (!a) return null;
    var b = P2(a.fgColor, "#1A1A1A"),
        c = P2(a.bgColor, "#FFF"),
        d = P2(a.borderColor, "#000"),
        e = U2(a.borderWidth, 0, 5, !1, 0),
        f = U2(a.bgAlpha, 0, 1, !1, .8),
        k = P2(a.highlightFontColor, "#F2F2F2"),
        l = U2(a.highlightWidth, 0, 5, !1, 3),
        m = Q2(a.textAlign),
        n = U2(a.textSize, 3.3, 30.1, !0, 3.6107),
        p = Q2(a.fontWeight),
        r = jwa(a.padding),
        v = kwa(a.effects),
        D = U2(a.cornerRadius, 0, 10, !0, 0);
    a = N2(a.gradient);
    if (a = a ? a : null) {
        var H = U2(a.x1, 0, 100, !0, 0),
            L = U2(a.y1, 0, 100, !0, 0),
            T = U2(a.x2, 0, 100, !0, 100),
            ha = U2(a.y2, 0, 100, !0, 100),
            cb = P2(a.color1, "#FFF"),
            tb = P2(a.color2,
                "#000");
        a = new Bwa(H, L, T, ha, cb, tb, U2(a.opacity1, 0, 100, !0, 100),
            U2(a.opacity2, 0, 100, !0, 0))
    } else a = null;
    return new Awa(b, c, d, e, f, k, l, m, n, p, r, v, D, a)
};


Bwa = function(a, b, c, d, e, f, k, l) {
    this.o = a;
    this.B = b;
    this.A = c;
    this.C = d;
    this.g = e;
    this.l = f;
    this.D = k;
    this.F = l
};


Dwa = function(a, b, c, d) {
    this.type = a;
    this.l = b;
    this.g = c;
    this.o = d
};


Fwa = function(a) {
    if (!a) return null;
    var b = R2(a.type, Ewa, "rect"),
        c = V2(a.rectRegion, wwa),
        d = V2(a.anchoredRegion, zwa);
    a = V2(a.shapelessRegion, wwa);
    return new Dwa(b, c, d, a)
};


Gwa = function(a) {
    return a.l && a.l.length ? a.l[0] : a.g && a.g.length ? a.g[0] : a.o &&
        a.o.length ? a.o[0] : null
};


Hwa = function(a, b) {
    this.l = a;
    this.g = b
};


Iwa = function(a, b) {
    this.state = a;
    this.ref = b
};


Kwa = function(a) {
    if (!a) return null;
    var b = R2(a.state, Jwa);
    a = O2(a.ref);
    return b ? new Iwa(b, a) : null
};


Lwa = function(a, b, c, d) {
    this.g = a || [];
    this.o = b || [];
    this.A = c;
    this.l = d;
    this.value = !1
};


Mwa = function(a) {
    if (!a) return null;
    var b = V2(a.condition, Kwa),
        c = V2(a.notCondition, Kwa),
        d = S2(a.show_delay, !1);
    a = S2(a.hide_delay, !1);
    return b || c ? new Lwa(b, c, d, a) : null
};


Nwa = function(a, b, c) {
    (0, _yt_player.B)(a.g, _yt_player.Ga(b, !1), c);
    (0, _yt_player.B)(a.o, _yt_player.Ga(b, !0), c)
};


a3 = function(a, b, c, d, e, f, k, l, m, n, p, r, v, D) {
    this.id = a;
    this.author = b;
    this.type = c;
    this.style = d;
    this.A = e;
    this.segment = f;
    this.o = k || [];
    this.D = l || [];
    this.l = m;
    this.C = n;
    this.B = p;
    this.data = r;
    this.g = v;
    this.itct = D
};


Qwa = function(a) {
    if (!a) return null;
    var b = O2(a.id),
        c = O2(a.author),
        d = R2(a.type, Owa),
        e = R2(a.style, b3),
        f = Q2(N2(a.TEXT)),
        k = Q2(a.data);
    k = 0 != k.length ? JSON.parse(k) : {};
    var l = N2(a.segment);
    var m = l ? l : null;
    m ? (O2(m.timeRelative), l = O2(m.spaceRelative), l = (m = V2(m
            .movingRegion, Fwa)) ? new Hwa(l, m) : null) :
        l = null;
    m = V2(a.action, qwa);
    var n = V2(a.trigger, Mwa),
        p = N2(a.appearance);
    (p = Cwa(p ? p : null)) || (p = Cwa({}));
    var r = R2(a.coordinate_system, Pwa, "video_relative"),
        v = S2(a.closeable, !0),
        D = Q2(a.log_data);
    a = Q2(a.itct);
    return b && d ? new a3(b, c, d, e, f, l, m, n, p, r, v, k, D, a) :
        null
};


d3 = function(a) {
    return c3(a, function(a) {
        return "click" == a.trigger
    })
};


c3 = function(a, b) {
    return (0, _yt_player.Bj)(a.o, b, void 0)
};


Rwa = function(a, b, c) {
    (0, _yt_player.B)(a.o, b, c)
};


Swa = function(a, b) {
    return _yt_player.Ma(a.o, b, void 0)
};


Twa = function(a, b, c) {
    (0, _yt_player.B)(a.D, b, c)
};


Uwa = function(a, b) {
    (0, _yt_player.G)(a.D, b, void 0)
};


e3 = function(a) {
    return (a = Vwa(a)) ? Gwa(a) : null
};


Vwa = function(a) {
    a.segment ? (a = a.segment, a = a.g.length ? a.g[0] : null) : a = null;
    return a
};


Wwa = function(a, b) {
    var c = e3(a);
    return c && b ? Y2(b, c.l, c.g ? c.g : "xy") : 1
};


Ywa = function(a, b, c) {
    this.g = {};
    this.o = !1;
    this.B = "ivTrigger:" + a;
    this.l = c;
    Nwa(b, function(a, b) {
            var c = Xwa(b.state, b.ref);
            this.l.subscribe(c, (0, _yt_player.z)(this.A, this, c, a));
            this.g[c] = a
        },
        this)
};


Xwa = function(a, b) {
    var c = "ivTriggerCondition:" + a;
    return b ? c + ":" + b : c
};


f3 = function() {
    this.g = !1;
    this.B = this.l = null
};


g3 = function(a, b, c) {
    a.l ? (a.l.setSize(b, c), a.l.clear()) : (b = new A2(b, c, void 0,
            void 0, void 0), a.l = b, a.l.zo(), a.B =
        _yt_player.K("DIV"), b = a.l.la(), a.B.appendChild(b));
    return a.l
};


h3 = function(a, b, c) {
    var d = window.document.createElementNS("http://www.w3.org/2000/svg",
    a);
    b && _yt_player.Lb(b, function(a, b) {
        d.setAttribute(b, a)
    });
    for (var e = 2; e < arguments.length; e++) d.appendChild(arguments[e]);
    return d
};


i3 = function(a, b) {
    var c = ":" + (_yt_player.Su.getInstance().g++).toString(36);
    b.setAttribute("result", c);
    a.appendChild(b);
    return c
};


Zwa = function(a, b) {
    var c = i3(a, h3("feGaussianBlur", {
        "in": b,
        stdDeviation: "1.8"
    }));
    c = i3(a, h3("feDiffuseLighting", {
            "in": c,
            surfaceScale: "4",
            diffuseConstant: "1"
        },
        h3("feDistantLight", {
            azimuth: "270",
            elevation: "15",
            "lighting-color": "white"
        })));
    c = i3(a, h3("feComposite", {
        "in": c,
        in2: b,
        operator: "in"
    }));
    return i3(a, h3("feComposite", {
        in2: c,
        "in": b,
        operator: "arithmetic",
        k2: 1,
        k3: .5,
        k4: 0
    }))
};


$wa = function(a, b) {
    var c = i3(a, h3("feOffset", {
        "in": b,
        dx: "-7",
        dy: "-7"
    }));
    c = i3(a, h3("feGaussianBlur", {
        "in": c,
        stdDeviation: "3"
    }));
    c = i3(a, h3("feColorMatrix", {
        "in": c,
        type: "matrix",
        values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
    }));
    var d = i3(a, h3("feColorMatrix", {
        "in": b,
        type: "matrix",
        values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"
    }));
    d = i3(a, h3("feGaussianBlur", {
        "in": d,
        stdDeviation: "1"
    }));
    c = i3(a, h3("feComposite", {
        operator: "out",
        "in": c,
        in2: d
    }));
    return i3(a, h3("feComposite", {
        operator: "over",
        "in": b,
        in2: c
    }))
};


axa = function(a, b) {
    return b
};


bxa = function(a) {
    var b =
        h3("filter", {
            filterUnits: "userSpaceOnUse"
        }),
        c = "SourceGraphic";
    (0, _yt_player.B)(a, function(a) {
        a: {
            switch (a) {
                case "bevel":
                    a = Zwa;
                    break a;
                case "dropshadow":
                    a = $wa;
                    break a
            }
            a = axa
        }
        c = a(b, c)
    });
    return b
};


cxa = function(a) {
    a = (0, _yt_player.Ld)(a, function(a) {
        return a in j3
    });
    _yt_player.ib(a, function(a, c) {
        return j3[a] - j3[c]
    });
    return a
};


dxa = function(a) {
    return _yt_player.Ma(a, function(a) {
        return "dropshadow" == a
    }) ? new _yt_player.Zg(0, 7, 7, 0) : new _yt_player.Zg(0, 0, 0, 0)
};


exa = function(a, b, c) {
    var d = new v2;
    d.moveTo(a.left + b + c, a.top + c);
    d.Ec(a.left + a.width - b - c, a.top + c);
    w2(d, b, b, -90);
    d.Ec(a.left + a.width - c, a.top + a.height - b - c);
    w2(d, b, b, 0);
    d.Ec(a.left + b + c, a.top + a.height - c);
    w2(d, b, b, 90);
    d.Ec(a.left + c, a.top + b + c);
    w2(d, b, b, 180);
    d.close();
    return d
};


fxa = function(a, b, c, d) {
    var e = a.B;
    e ? a = new s2(e.o * b / 100, e.B * c / 100, e.A * b / 100, e.C * c /
        100, e.g, e.l, e.D, e.F) : (b = a.g, a =
        new r2(a.bgColor, d ? Math.max(b, .9) : b));
    return a
};


k3 = function(a, b) {
    var c = _yt_player.ch(a);
    c.expand(dxa(b));
    return wva(c)
};


gxa = function(a, b, c) {
    if (c.length && (b = _yt_player.qd(window.document, "g", void 0, b), b
            .length)) {
        var d = cxa(c);
        if (d) {
            c = "effects:" + (d ? d.join("|") : "");
            var e = c in a.l ? a.l[c] : null;
            e ? a = e : (d = bxa(d), a = 0 < d.childNodes.length ? Rva(a, c,
                d) : null)
        } else a = null;
        a && b[0].setAttribute("filter", "url(#" + a + ")")
    }
};


l3 = function() {
    f3.call(this);
    this.A = 0
};


hxa = function(a, b) {
    var c = a.top - b.y,
        d = b.x - a.left - a.width,
        e = b.y - a.top - a.height,
        f = a.left - b.x,
        k = Math.max(c, d, e, f);
    if (0 > k) return "i";
    switch (k) {
        case c:
            return "t";
        case d:
            return "r";
        case e:
            return "b";
        case f:
            return "l"
    }
    return "i"
};


m3 = function(a) {
    f3.apply(this, arguments)
};


n3 = function(a) {
    f3.apply(this, arguments)
};


o3 = function(a) {
    l3.apply(this, arguments)
};


p3 = function(a, b, c, d, e) {
    _yt_player.M.call(this);
    this.g = a;
    this.X = b;
    this.C = c;
    this.ea = d;
    this.ca = e;
    this.H = !1;
    this.W = new _yt_player.CF(this);
    _yt_player.N(this, this.W);
    this.M = this.B = this.D = this.K = this.l = null;
    this.Z = !1;
    this.Y = this.I = this.J = null;
    this.wp = new _yt_player.Uk(this.JO, 100, this);
    _yt_player.N(this, this.wp);
    this.F = new _yt_player.Yt(this.Kz, 500, this);
    _yt_player.N(this, this.F);
    this.T = this.o = this.A = null
};


ixa = function(a, b) {
    var c = (0, _yt_player.z)(function(a, c, f) {
            c = f ? q3(this, c, (0, _yt_player.z)(f, this)) : q3(this,
                c);
            this.W.U(b, a, c)
        },
        a);
    c("mouseover", "E", a.AB);
    c("mouseout", "D", a.Ih);
    c("click", "B");
    c("touchend", "B")
};


jxa = function(a) {
    if (a.g.B) {
        if (c3(a.g, function(a) {
                return "close" == a.type
            })) var b = a.l;
        else a.A = _yt_player.K("DIV", "annotation-close-button"),
            _yt_player.O(a.A, !1), _yt_player.aF(a.A,
                "annotation_id", a.g.id), a.l.appendChild(a.A), b = a.A;
        var c = function(a) {
            a.stopPropagation()
        };
        a.W.U(b, "click", q3(a, "C", c));
        a.W.U(b, "touchend", q3(a, "C", c))
    }
};


q3 = function(a, b, c) {
    return (0, _yt_player.z)(function(a) {
            if (this.ca) c && c(a);
            else if (a.event.target instanceof window.Element) {
                var d = a.event.target;
                _yt_player.O(d, !1);
                try {
                    var f = window.document.elementFromPoint(a.event
                        .clientX, a.event.clientY);
                    if (_yt_player.$d(f, "annotation")) {
                        var k = window.document.createEvent(
                            "MouseEvent");
                        k.initMouseEvent(a.event.type, a.event.bubbles,
                            a.event.cancelable, a.event.view, a
                            .event.detail, a.event.screenX, a.event
                            .screenY, a.event.clientX, a.event
                            .clientY, a.event.ctrlKey, a.event
                            .altKey, a.event.shiftKey, a.event
                            .metaKey, a
                            .event.button, a.event.relatedTarget);
                        f.dispatchEvent(k)
                    }
                } finally {
                    _yt_player.O(d,
                        !0)
                }
            }
            d = _yt_player.Lh(a.target);
            a = new _yt_player.hd(a.clientX, a.clientY);
            "D" == b && d.contains(a) || this.ea.R(b, this.g)
        },
        a)
};


s3 = function(a) {
    if (a.l || a.o) {
        var b = e3(a.g);
        if (b) {
            var c = r3(a);
            if (a.l) {
                b = $2(b, c);
                var d = _yt_player.W_(_yt_player.VU(a.C));
                _yt_player.Jh(a.l, b.width, b.height);
                _yt_player.wh(a.l, b.left, b.top);
                a.K = new _yt_player.bh(d.left + b.left, d.top + b.top, b
                    .width, b.height);
                var e = (e = e3(a.g)) && d ? rwa(d, e.A, e.g ? e.g : "xy") :
                    1;
                var f = Wwa(a.g, d);
                d = a.g.l;
                d.padding ? d = d.padding : (d = "speech" == a.g.style ?
                    1.6 : .8, d = new _yt_player.Zg(d, d, d,
                        d));
                d = new _yt_player.Zg(360 * d.top * f / 100, 640 * d.right *
                    e / 100, 360 * d.bottom * f / 100,
                    640 * d.left * e / 100);
                a.B && (d.right += 1.5 * c.g.height / 100);
                a.l.style.padding = d.top + "px " + d.right + "px " + d
                    .bottom + "px " + d.left + "px";
                "label" ==
                a.g.style && a.D && (a.D.style.padding = a.l.style.padding);
                d = c.g;
                var k = !1,
                    l = 0,
                    m = 0;
                var n = _yt_player.W_(_yt_player.VU(a.C));
                var p = _yt_player.eV(a.C);
                _yt_player.dh(n, p) ? n = null : (p.top += 20, p.height -=
                    40, "player_relative" != a.g.C && (p
                        .left -= n.left, p.top -= n.top), n = p);
                n && (l = n.top - (b.top + b.height), m = b.top - (n.top + n
                    .height), k = 0 < l || 0 < m);
                if (k && n) {
                    d = l;
                    e = m;
                    if (a.B) {
                        f = kxa(a, 23, b, d, e);
                        if (a.A) {
                            var r = 43 - f.width;
                            0 < r && (b.left + f.left - r > n.left && (f
                                .left -= r), f.width += r)
                        }
                        r = f;
                        _yt_player.Jh(a.B, f.width, f.height);
                        _yt_player.wh(a.B, f.left, f.top)
                    }
                    a.A && (r ? b = new _yt_player.hd(r.left + r.width -
                            23 - 18, a.Z ?
                            r.top + 2 : r.top + r.height - 18 - 2) : (
                            r = kxa(a, 18, b, d, e), b =
                            new _yt_player.hd(r.left, r.top), _yt_player
                            .Jh(a.A, r.width, r.height)), _yt_player
                        .wh(a.A, b));
                    a.M = new _yt_player.bh(a.K.left + r.left, a.K.top + r
                        .top, r.width, r.height);
                    a.J = a.W.U(_yt_player.VU(a.C), "mousemove", a.KO, a)
                } else a.B && (r = e / f * d.height * 4.2 / 100, r =
                    new _yt_player.I(r, r), "highlight" == a.g
                    .type || "label" == a.g.style ? (e = 1.5 * d
                        .height / 100, r = new _yt_player.bh(b.width - r
                            .width - e, b.height - r.height - e, r
                            .width, r.height)) : r = new _yt_player.bh(b
                        .width - r.width - 3 * d.height / 100, (b
                            .height - r.height) / 2, r.width, r.height),
                    _yt_player.Jh(a.B, r.width, r.height),
                    _yt_player.wh(a.B, r.left, r.top)), a.A && (r = 9 <=
                    d.left + d.width - (b.left + b.width),
                    e = 9 <= b.top - d.top, _yt_player.wh(a.A, r && e ?
                        new _yt_player.hd(b.width - 9, -9) : r ?
                        new _yt_player.hd(b.width - 9, 45 < b.height ?
                            9 : b.height - 9) : e ? new _yt_player
                        .hd(45 < b.width ? b.width - 9 - 18 : -9, -9) :
                        b.width / d.width > b.height / d
                        .height ? new _yt_player.hd(45 < b.width ? b
                            .width - 9 - 18 : -9, b.height - 9) :
                        new _yt_player.hd(-9, 45 < b.height ? 9 : b
                            .height - 9)))
            }
            a.o && a.o.o(a.g, c);
            if (a.l) {
                c = a.l;
                b = a.g.l;
                c.style.color = "highlightText" == a.g.style ? b.C : b.l;
                r = _yt_player.W_(_yt_player.VU(a.C));
                c.style.fontSize = 360 * b.textSize * Wwa(a.g, r) / 100 +
                    "px";
                r = a.g.style;
                c.style.textAlign = b.textAlign ? b.textAlign : "title" ==
                    r || "highlightText" == r ? "center" :
                    "left";
                b.A && (c.style.fontWeight = b.A);
                a = a.l;
                c = a.style.overflow;
                r = (b = _yt_player.J("annotation-link-icon", a)) ?
                    _yt_player.Nh(b) : !1;
                e = (d = _yt_player.J("annotation-close-button", a)) ?
                    _yt_player.Nh(d) : !1;
                r && _yt_player.O(b, !1);
                e && _yt_player.O(d, !1);
                m = f = "";
                if (n = _yt_player.J("inner-text", a)) f = n.style.overflow,
                    m = n.style.position, n.style
                    .overflow = "visible", n.style.position = "static";
                a.style.overflow = "scroll";
                if (a.scrollHeight > a.offsetHeight || a.scrollWidth > a
                    .offsetWidth) {
                    l = k = Ava(a);
                    p = 5;
                    for (var v =
                            Math.floor(k / 2); v;) a.scrollHeight <= a
                        .offsetHeight && a.scrollWidth <= a
                        .offsetWidth ? (p = l, l = Math.min(l + v, k)) : l =
                        Math.max(l - v, p), v = Math.floor(v /
                            2), a.style.fontSize = l + "px";
                    l != p && (a.scrollHeight > a.offsetHeight || a
                        .scrollWidth > a.offsetWidth) && (a.style
                        .fontSize = p + "px")
                }
                a.style.overflow = c;
                n && (n.style.overflow = f, n.style.position = m);
                e && _yt_player.O(d, !0);
                r && _yt_player.O(b, !0)
            }
        }
    }
};


kxa = function(a, b, c, d, e) {
    var f = 0 < e;
    b = new _yt_player.bh(0, c.height - b, Math.max(c.width, b), b);
    0 < d && (b.top = c.height, 20 < d && (b.height += d - 20), _yt_player
        .S(a.l, "annotation-extend-down"));
    f && (b.top = -b.height, 20 < e && (c = e - 20, b.top -= c, b.height +=
        c), _yt_player.S(a.l,
        "annotation-extend-up"), a.Z = !0);
    return b
};


t3 = function(a) {
    return "label" != a.g.style || a.o.g
};


r3 = function(a) {
    var b = _yt_player.W_(_yt_player.VU(a.C));
    if ("player_relative" == a.g.C) {
        var c = _yt_player.VU(a.C).Oa();
        b = new _yt_player.bh(-b.left, -b.top, c.width, c.height)
    } else b = new _yt_player.bh(0, 0, b.width, b.height);
    return new xwa(b, a.T ? e3(a.T) : null)
};


lxa = function(a, b) {
    return b ? new _yt_player.bh(a.x + b.left, a.y + b.top, b.width, b
        .height) : null
};


u3 = function(a, b, c) {
    _yt_player.M.call(this);
    this.l = a;
    this.annotation = b;
    this.view = c;
    this.g = null;
    this.o = this.isVisible = !1;
    mxa(b, a)
};


mxa = function(a, b) {
    Uwa(a, function(c) {
        return new Ywa(a.id, c, b)
    })
};


nxa = function(a) {
    a.l.unsubscribe("resize", a.zB, a);
    a.l.unsubscribe("onVideoAreaChange", a.mD, a)
};


v3 = function(a) {
    a.g && (a.g.stop(), a.g = null)
};


oxa = function(a, b, c) {
    p2.call(this, a, b, c);
    this.channelId = b.channel_id;
    this.customMessage = b.custom_message;
    this.profileImageUrl = b.image_url;
    this.title = b.title;
    this.metaInfo = b.meta_info;
    this.url = W2({
        pause_on_navigation: b.pause_on_navigation,
        target: b.target || "new",
        value: b.url
    })
};


w3 = function(a, b, c) {
    p2.call(this, a, b, c);
    this.imageUrl = b.image_url;
    this.displayDomain = b.display_domain;
    this.showLinkIcon = b.show_link_icon;
    this.A = b.button_icon_url;
    this.title = b.title;
    this.customMessage = b.custom_message;
    this.url = W2({
        pause_on_navigation: b.pause_on_navigation,
        target: b.target || "new",
        value: b.url
    });
    this.g = null;
    if (a = b.signin_url) this.g = W2({
        target: "current",
        value: a
    });
    this.J = b.signin_title || null;
    this.I = b.signin_message || null
};


pxa = function(a, b, c) {
    w3.call(this, a, b, c);
    this.H = b.ypc_flow_type;
    this.B = b.innertube_request_params
};


qxa = function(a, b, c) {
    p2.call(this, a, b, c);
    this.A = b.image_url;
    this.playlistVideoCount = b.playlist_video_count;
    this.customMessage = b.custom_message;
    this.title = b.title;
    this.metaInfo = b.meta_info;
    this.url = W2({
        pause_on_navigation: b.pause_on_navigation,
        target: b.target || "new",
        value: b.url
    })
};


rxa = function(a, b, c) {
    p2.call(this, a, b, c);
    this.B = this.id.replace(/[^a-z0-9-]/gi, "-");
    this.title = b.title;
    this.choices = b.choices;
    this.g = b.hasOwnProperty("old_vote") ? b.old_vote : null;
    this.A = null;
    if (a = b.signin_url) this.A = W2({
        target: "current",
        value: a
    });
    this.H = b.hasOwnProperty("xsrf_token") ? b.xsrf_token : null
};


txa = function(a, b, c) {
    w3.call(this, a, b, c);
    this.offers = [];
    a = b.offers || [];
    for (b = 0; b < a.length; b++) this.offers.push(new sxa(a[b]))
};


sxa = function(a) {
    this.merchant = _yt_player.E(a.merchant);
    this.price = _yt_player.E(a.price)
};


uxa = function(a, b, c) {
    w3.call(this, a, b, c);
    this.K = b.ypc_item_type;
    this.H = b.ypc_item_id;
    this.B = b.ypc_flow_type
};


vxa = function(a, b, c) {
    p2.call(this, a, b, c);
    this.A = b.image_url;
    this.videoDuration = b.video_duration || null;
    this.customMessage = b.custom_message;
    this.title = b.title;
    this.metaInfo = b.meta_info;
    this.isLiveNow = !!b.is_live_now;
    this.url = W2({
        pause_on_navigation: b.pause_on_navigation,
        target: b.target || "new",
        value: b.url
    })
};


x3 = function(a, b, c) {
    p2.call(this, a, b, c);
    this.H = b.image_url;
    this.A = b.badge_symbol || "";
    this.priceText = b.price_text || "";
    this.title = b.title;
    this.metaInfo = b.meta_info;
    this.B = !!b.is_paygated;
    this.I = !!b.user_has_entitlement;
    this.url = W2({
        target: b.target || "new",
        value: b.url
    })
};


wxa = function(a) {
    this.g = a;
    this.l = {}
};


xxa = function(a) {
    var b = {};
    b = (b["iv-event"] = 1, b);
    _yt_player.bV(a.g, "iv", b, void 0)
};


B3 = function(a, b, c, d) {
    if (b) {
        var e = y3(a, b);
        a.l[b] = e["p-time"];
        e["iv-event"] = e.link || e["l-class"] || e["link-id"] ? 2 : 7;
        b = z3(a, "cta_annotation_shown", e, c);
        A3(a, e, yxa(b, d))
    }
};


C3 = function(a, b, c, d, e, f) {
    if (b) {
        var k = y3(a, b);
        k["iv-event"] = 3;
        k["i-time"] = a.l[b] || "";
        d && _yt_player.fc(k, d);
        b = z3(a, "cta_annotation_clicked", k, e);
        A3(a, k, b, c, f)
    }
};


D3 = function(a, b) {
    if (b) {
        var c = y3(a, b);
        c["iv-event"] = 4;
        c["i-time"] = a.l[b] || "";
        var d = z3(a, "cta_annotation_closed", c);
        A3(a, c, d)
    }
};


yxa = function(a, b) {
    return b ? (0, _yt_player.G)(a, _yt_player.Ga(function(a, b) {
            return _yt_player.Um(b, a)
        },
        b)) : a
};


z3 = function(a, b, c, d) {
    d = d ? _yt_player.Ya(d) : [];
    if (30 == c["a-type"]) {
        a: {
            c = c["a-id"];
            a = a.g.getVideoData();
            if (a.Ax) {
                if ((b = a.Ax[b]) && _yt_player.hH(b)) {
                    a = _yt_player.pb("[ANNOTATION_ID]");
                    0 <= b.indexOf("[ANNOTATION_ID]") ? b = b.replace(
                        "[ANNOTATION_ID]", c) : 0 <= b.indexOf(a) && (
                        b = b.replace(a, c));
                    break a
                }
            } else if (a.Lp) {
                b = _yt_player.fE(a.Lp, {
                    label: b,
                    value: "a_id=" + c
                });
                break a
            }
            b = ""
        }
        b && d.push(b)
    }
    return d
};


A3 = function(a, b, c, d, e) {
    var f = 1,
        k = -1;
    if (d) {
        var l = !1;
        var m = function() {
            f--;
            f || l || ((0, window.clearTimeout)(k), l = !0, d())
        };
        k = (0, window.setTimeout)(function() {
                l = !0;
                d()
            },
            1E3)
    }(0, _yt_player.B)(c || [], function(a) {
        f++;
        _yt_player.FE(a, m)
    });
    e && (f++, 0 != e && a.g.Ni(e, m));
    _yt_player.bV(a.g, "iv", b, m)
};


y3 = function(a, b) {
    var c = {};
    if (b) {
        var d = new _yt_player.Cm(b);
        (0, _yt_player.B)(d.Bb(), function(a) {
            c[a] = (0, window.escape)(d.get(a, ""))
        })
    }
    c["p-time"] = a.g.getCurrentTime().toFixed(2);
    c.ps = _yt_player.Y(a.g).playerStyle;
    return c
};


E3 = function(a, b, c, d, e) {
    e = y3(a, e);
    e["iv-event"] = c;
    b && (e.ei = b);
    e["a-id"] || (e["a-id"] = "card:drawer");
    e["a-type"] = 51;
    A3(a, e, d)
};


F3 = function(a, b, c, d) {
    c && (c = y3(a, c), c["iv-event"] = b, A3(a, c, d))
};


zxa = function(a, b, c, d, e, f, k) {
    this.g = a;
    this.A = b;
    this.B = c;
    this.videoData = d;
    this.logger = e;
    this.l = f;
    this.o = k
};


G3 = function(a, b, c) {
    this.g = a;
    this.A = b;
    this.B = c;
    this.l = new _yt_player.cp(null)
};


Bxa = function(a, b) {
    var c = [];
    (0, _yt_player.B)(b.choices, function(a) {
            c.push({
                G: "li",
                L: b.B + "-" + a.index.toString(),
                N: [{
                        G: "label",
                        N: [{
                                G: "input",
                                L: "iv-card-poll-choice-input",
                                P: {
                                    type: "checkbox",
                                    role: "radio",
                                    name: b.B + a.index
                                        .toString(),
                                    value: a.index
                                    .toString(),
                                    "data-poll-choice-index": a
                                        .index.toString()
                                }
                            },
                            {
                                G: "span",
                                L: "iv-card-poll-choice-text",
                                N: [{
                                        G: "span",
                                        L: "iv-card-poll-choice-percent"
                                    },
                                    H3(this, "span",
                                        void 0, a.desc)
                                ]
                            }
                        ]
                    },
                    {
                        G: "div",
                        L: "iv-card-poll-result",
                        N: [{
                            G: "div",
                            L: "iv-card-poll-result-bar"
                        }]
                    }
                ]
            })
        },
        a);
    var d = {
            G: "ul",
            P: {
                role: "radiogroup"
            },
            N: c
        },
        e = {};
    b.A && (e["aria-label"] = _yt_player.O0(
        "$POLL_TITLE - Sign in to vote.", {
            POLL_TITLE: b.title
        }));
    var f = ["iv-card", "iv-card-poll"];
    d = [{
        G: "div",
        L: "iv-card-content",
        N: [H3(a, "h2", e, b.title), {
            G: "form",
            N: [{
                G: "fieldset",
                N: [d]
            }]
        }]
    }];
    b.A && (f.push("iv-card-unavailable"), d.push({
        G: "div",
        da: ["iv-card-sign-in"],
        N: [{
                G: "h2",
                aa: "Want to vote?"
            },
            {
                G: "a",
                da: ["iv-card-sign-in-button", "iv-button"],
                P: {
                    href: X2(b.A)
                },
                N: [{
                    G: "span",
                    da: ["iv-button-content"],
                    aa: I3.cI
                }]
            }
        ]
    }));
    f = new _yt_player.W({
        G: "div",
        da: f,
        N: d
    });
    d = f.element;
    Axa(b, d);
    pva(a.g.g, d, _yt_player.Ga(a.D, b), a);
    (0, _yt_player.B)(_yt_player.rd("iv-card-poll-choice-input", d),
        function(a) {
            this.g.g.U(a, "focus", _yt_player.Ga(this.o, !0));
            this.g.g.U(a, "blur", _yt_player.Ga(this.o, !1))
        },
        a);
    b.A && (d = _yt_player.J("iv-card-sign-in-button", d), a.A(d, b.A, b.id,
        b.Rd, b.o, b.l.click, 5));
    return f
};


L3 = function(a, b, c, d) {
    var e = b.displayDomain ? {
            G: "div",
            L: "iv-card-image-text",
            aa: b.displayDomain
        } : "",
        f = Cxa(a, b),
        k = ["iv-card"];
    b.g && k.push("iv-card-unavailable");
    e = [{
        G: "a",
        L: "iv-click-target",
        P: {
            href: X2(b.url)
        },
        N: [J3(b.imageUrl, e), {
            G: "div",
            L: "iv-card-content",
            N: [H3(a, "h2", void 0, b.title), f]
        }]
    }];
    b.g && e.push({
        G: "div",
        da: ["iv-card-sign-in"],
        N: [H3(a, "h2", void 0, b.J || ""), {
                G: "p",
                aa: b.I
            },
            {
                G: "a",
                da: ["iv-card-sign-in-button", "iv-button"],
                P: {
                    href: X2(b.g)
                },
                N: [H3(a, "span", "iv-button-content", I3.cI)]
            }
        ]
    });
    k = new _yt_player.W({
        G: "div",
        da: k,
        N: e
    });
    K3(a, k, b, c, d);
    return k
};


Dxa = function(a,
    b, c) {
    var d = ["yt-badge",
            "standalone-ypc-badge-renderer-icon", b.I ?
            "standalone-ypc-badge-renderer-icon-purchased" :
            "standalone-ypc-badge-renderer-icon-available"
        ],
        e = {};
    d = b.B && b.A ? {
        G: "span",
        da: d,
        P: e,
        aa: b.A
    } : "";
    c = {
        G: "div",
        da: ["iv-card", c],
        N: [{
            G: "a",
            L: "iv-click-target",
            P: {
                href: X2(b.url)
            },
            N: [J3(b.H, d ? {
                G: "div",
                L: "iv-card-image-text",
                N: [d, b.priceText]
            } : ""), {
                G: "div",
                L: "iv-card-content",
                N: [{
                        G: "h2",
                        L: "iv-card-primary-link",
                        aa: b.title
                    },
                    M3(a, b)
                ]
            }]
        }]
    };
    c = new _yt_player.W(c);
    K3(a, c, b);
    return c
};


N3 = function(a, b) {
    return b.customMessage ? H3(a, "div",
        "iv-card-message", b.customMessage) : ""
};


J3 = function(a, b) {
    var c = "background-image: url(" + a + ");",
        d = [];
    b && d.push(b);
    return {
        G: "div",
        L: "iv-card-image",
        P: {
            style: c
        },
        N: d
    }
};


M3 = function(a, b) {
    if (!b.metaInfo || 0 == b.metaInfo.length) return "";
    var c = [];
    (0, _yt_player.B)(b.metaInfo, function(a) {
            c.push(H3(this, "li", "", a))
        },
        a);
    return {
        G: "ul",
        L: "iv-card-meta-info",
        N: c
    }
};


H3 = function(a, b, c, d) {
    c ? _yt_player.u(c) ? c = {
        "class": c
    } : _yt_player.Aa(c) && (c = {
        "class": c.join(" ")
    }) : c = {};
    c.dir = _yt_player.dp(a.l, d);
    return {
        G: b,
        P: c,
        aa: d
    }
};


Cxa = function(a, b) {
    if (!b.customMessage) return "";
    var c = ["iv-card-action", "iv-card-primary-link"],
        d = {};
    b.A && (c.push("iv-card-action-icon"), d.style =
        "background-image: url(" + b.A + ");");
    d.dir = _yt_player.dp(a.l, b.customMessage);
    var e = [{
        G: "span",
        aa: b.customMessage
    }];
    b.showLinkIcon && (e.push("\u00a0"), e.push({
        G: "span",
        L: "iv-card-link-icon"
    }));
    return {
        G: "div",
        da: c,
        P: d,
        N: e
    }
};


Axa = function(a, b) {
    var c = 0;
    (0, _yt_player.B)(a.choices, function(a) {
        c += a.count
    });
    c = c || 1;
    for (var d = 0; d < a.choices.length; d++) {
        var e = a.choices[d],
            f = _yt_player.J(a.B + "-" + e.index.toString(), b);
        e = e.count / c;
        null == a.g && (e = 0);
        _yt_player.U(f.getElementsByTagName("label")[0],
            "iv-card-poll-choice-checked", a.g == d);
        f.getElementsByTagName("input")[0].checked = a.g == d;
        var k = Math.floor(100 * e).toFixed(0),
            l = _yt_player.J("iv-card-poll-choice-percent", f);
        _yt_player.Sd(l, _yt_player.O0("$PERCENT%", {
            PERCENT: k
        }));
        f = _yt_player.J("iv-card-poll-result-bar", f);
        _yt_player.ph(f, "transform", "scaleX(" + e.toFixed(2) + ")")
    }
    _yt_player.U(b, "iv-card-poll-voted", null != a.g);
    _yt_player.U(b, "iv-card-poll-expanded",
        null != a.g && 1 < a.choices.length)
};


Exa = function(a, b, c, d) {
    d ? (c && a.g.videoData.za || a.g.l.hd(), a.g.l.isFullscreen() &&
        _yt_player.YU(a.g.l), C3(a.g.logger, b.o, d,
            void 0, b.l.click, 5)) : b.url && a.B(b.url, b.id, b.Rd, b
        .o, b.l.click || [], 5)
};


K3 = function(a, b, c, d, e) {
    c.g && Fxa(a, _yt_player.rd("iv-card-sign-in-button", b.element), c, c
        .g, e);
    c.url && Fxa(a, _yt_player.rd("iv-click-target", b.element), c, c.url,
        d)
};


Fxa = function(a, b, c, d, e) {
    (0, _yt_player.B)(b, function(a) {
            if (e) {
                var b = (0, _yt_player.z)(function(a) {
                        a.stopPropagation();
                        a.preventDefault();
                        e();
                        return !1
                    },
                    this);
                this.g.g.U(a, "click", b)
            } else d && this.A(a, d, c.id, c.Rd, c.o, c.l.click, 5)
        },
        a)
};


Gxa = function(a) {
    var b = 0; -
    1 != a.indexOf("h") && (a = a.split("h"), b = 3600 * a[0], a = a[1]); -
    1 != a.indexOf("m") && (a = a.split("m"), b = 60 * a[0] + b, a = a[
    1]); -
    1 != a.indexOf("s") ? (a = a.split("s"), b = 1 * a[0] + b) : b = 1 * a +
        b;
    return b
};


O3 = function(a) {
    var b;
    (b = a) && !(b = 1 < a.length ? "/" == a.charAt(0) && "/" != a.charAt(
        1) : "/" == a) && (b = Hxa(a), b =
        "com" == b[0] && "youtube" == b[1] || "be" == b[0] && "youtu" == b[
            1]);
    return b ? -1 == a.indexOf("/redirect?") : !1
};


Hxa = function(a) {
    a = a.replace(/^(https?:)?\/\//, "");
    a = a.split("/", 1);
    return !a || 1 > a.length || !a[0] ? [] : a[0].toLowerCase().split(".")
        .reverse()
};


Ixa = function(a) {
    a = X2(a);
    if (!a) return null;
    a = a.replace(/https?:\/\//g, "");
    var b;
    (b = !O3(a)) || (b = _yt_player.Gg(_yt_player.Fg(a)[5] || null) || "",
        b = b.split("/"), b = "/" + (1 < b
            .length ? b[1] : ""), b = "/watch" != b);
    if (b) return null;
    b = _yt_player.dE(a);
    if (!b || !b.v) return null;
    if (b = b.t) return Gxa(b);
    a = a.split("#", 2);
    return !a || 2 > a.length ? null : (a = _yt_player.bE(a[1])) && a.t ?
        Gxa(a.t) : -1
};


Jxa = function(a) {
    a = X2(a);
    a = a.replace(/https?:\/\//g, "");
    return O3(a) ? (a = _yt_player.dE(a)) && a.v ? a.v : null : null
};


Kxa = function(a, b, c) {
    c = c.replace(/\/(u|b)\/[0-9]+/g, "");
    var d = /^[0-9]+$/;
    a && d.test(a) && (c = "/b/" + a + c);
    b && d.test(b) && (c = "/u/" + b + c);
    return c
};


P3 = function(a, b) {
    return b ? b : O3(a) ? "current" : "new"
};


Q3 = function(a, b) {
    _yt_player.M.call(this);
    this.Ga = a;
    this.context = b;
    this.Yv = !1;
    this.Y = 0
};


R3 = function(a, b, c, d, e, f) {
    b = new _yt_player.eQ(b, c, {
        id: d
    });
    _yt_player.N(a, b);
    b.namespace = "annotations_module";
    e && qva(b).subscribe("onEnter", e, a);
    f && qva(b).subscribe("onExit", f, a);
    _yt_player.hV(a.context.l, [b])
};


Lxa = function(a) {
    return (0, _yt_player.F)() - a.Y
};


Mxa = function(a, b, c, d, e, f) {
    var k = X2(b);
    if (k) {
        var l = P3(k, b.target),
            m = (0, _yt_player.z)(function() {
                    b.g && this.context.l.hd();
                    _yt_player.vV(k || "", "current" == l ? "_top" : void 0,
                        c)
                },
                a);
        "new" == l && (m(), m = null);
        var n = {};
        n.interval = Lxa(a);
        C3(a.context.logger, d, m, n, e, f);
        O3(k) || (a = _yt_player.MG(), d = c.itct, a && d && E2(a, l2(d)))
    }
};


U3 = function(a, b, c) {
    Q3.call(this, b, c);
    var d = this;
    this.g = a;
    this.M = null;
    this.T = this.ya = this.B = this.sa = !1;
    this.X = null;
    this.J = new _yt_player.Yt(_yt_player.y, c.B.useTabletControls ? 4E3 :
        3E3);
    _yt_player.N(this, this.J);
    this.na = new _yt_player.Yt(_yt_player.y);
    _yt_player.N(this, this.na);
    this.C = new G3(c, (0, _yt_player.z)(this.Zi, this), (0, _yt_player.z)(
        this.Uo, this));
    this.H = new _yt_player.W({
        G: "div",
        L: "iv-drawer",
        P: {
            id: "iv-drawer"
        },
        N: [{
                G: "div",
                L: "iv-drawer-header",
                P: {
                    "aria-role": "heading"
                },
                N: [{
                        G: "span",
                        L: "iv-drawer-header-text"
                    },
                    {
                        G: "button",
                        da: ["iv-drawer-close-button",
                            "ytp-button"
                        ],
                        P: {
                            "aria-label": "Hide cards",
                            tabindex: "0"
                        }
                    }
                ]
            },
            {
                G: "div",
                L: "iv-drawer-content"
            }
        ]
    });
    _yt_player.N(this, this.H);
    this.D = this.H.element;
    this.ca = new _yt_player.MV(this.H, 330);
    _yt_player.N(this, this.ca);
    this.Da = _yt_player.J("iv-drawer-header-text", this.D);
    this.A = _yt_player.J("iv-drawer-content", this.D);
    this.o = [];
    this.ra = this.K = this.F = this.Z = this.l = null;
    this.ha = [];
    R3(this, 0, 1E3 * c.videoData.lengthSeconds, "", function() {
            d.ya && S3(d, "YOUTUBE_DRAWER_AUTO_OPEN")
        },
        function() {
            (d.ya = d.B) && T3(d)
        });
    this.I = this.ga = this.ea = null
};


Sxa = function(a, b) {
    var c = b && b.data && b.data.card_type;
    if (c && Nxa[c]) {
        c = new Nxa[c](b.id, b.data, b.g);
        if (!a.sa) {
            _yt_player.lq(a.la(), ["html5-stop-propagation",
                "iv-drawer-manager"
            ]);
            _yt_player.mV(a.g, a.D, 5);
            Oxa(a);
            a.K = _yt_player.J("ytp-cards-button", a.g.getRootNode());
            var d = _yt_player.J("iv-drawer-close-button", a.D);
            a.ra = d;
            a.sa = !0
        }
        Pxa(a, c.id);
        var e = Qxa(a, c);
        if (e) {
            d = {
                hc: c,
                ur: e.element,
                BA: !1
            };
            var f = Rxa(a, d);
            _yt_player.ab(a.o, f, 0, d);
            e.ua(a.A, f);
            a.Fn();
            c.autoOpen ? R3(a, c.startMs, 0x8000000000000, c.id, _yt_player
                .Ga(a.MV, d)) : (e = 1E3 * a.context.l
                .getCurrentTime(), 5E3 > e && e > c.startMs && a.kE(d),
                R3(a, c.startMs, c.startMs + 1,
                    c.id, _yt_player.Ga(a.kE, d)), V3(a))
        }
    }
};


Txa = function(a, b) {
    b.data.autoOpenMs && R3(a, b.data.autoOpenMs, 0x8000000000000, "",
        function() {
            S3(a, "YOUTUBE_DRAWER_AUTO_OPEN")
        });
    b.data.autoCloseMs && R3(a, b.data.autoCloseMs, 0x8000000000000, "",
        function() {
            T3(a)
        });
    var c = b.data.headerText;
    _yt_player.Sd(a.Da, c);
    a.K && a.K.setAttribute("title", c);
    b.data.eventId && (a.M = b.data.eventId);
    a.ea = l2(b.data.trackingParams);
    a.I = l2(b.data.closeTrackingParams);
    a.ga = l2(b.data.iconTrackingParams)
};


Pxa = function(a, b) {
    var c = Uxa(a, b);
    c && (c == a.l && (a.l = null), a.g.kB(c.hc.id), _yt_player.Kd(c.ur),
        _yt_player.Va(a.o, c), a.Fn(), V3(a))
};


S3 = function(a, b, c, d) {
    if (!a.B) {
        a.ca.show();
        a.Z = new _yt_player.Yt(function() {
                _yt_player.S(a.context.l.getRootNode(),
                    "ytp-iv-drawer-open")
            },
            0);
        a.Z.start();
        a.X = _yt_player.rF(a.A, "mousewheel", (0, _yt_player.z)(a.ZM, a));
        a.B = !0;
        a.Y = (0, _yt_player.F)();
        E3(a.context.logger, a.M, 7, void 0, d && d.hc ? d.hc.o : void 0);
        var e = _yt_player.MG();
        e && a.ea && a.I && (D2(e, a.ea), D2(e, a.I));
        var f = {
            TRIGGER_TYPE: b
        };
        (0, _yt_player.B)(a.o, function(b) {
            b.BA || (b.BA = !0, B3(a.context.logger, b.hc.o, b.hc.l.BL,
                f));
            e && D2(e, b.hc.C)
        });
        U1(a.g);
        c && (a.F = new _yt_player.Yt(function() {
                a.fa = a.K;
                a.ra.focus()
            },
            330), a.F.start())
    }
};


T3 = function(a) {
    a.B && (a.ca.hide(), _yt_player.sF(a.X), a.X = null, _yt_player.mq(a
            .context.l.getRootNode(),
            "ytp-iv-drawer-open"), a.B = !1, U1(a.g), a.F && a.F.stop(),
        a.F = new _yt_player.Yt(function() {
                a.fa && (a.fa.focus(), a.fa = null)
            },
            330), a.F.start())
};


Oxa = function(a) {
    var b = _yt_player.J("iv-drawer-close-button", a.D);
    a.context.g.U(b, "click", a.fJ, a);
    a.context.g.U(a.A, "touchend", function() {
        a.J.start()
    });
    a.context.g.U(a.A, "scroll", a.qJ, a);
    a.context.o.subscribe("onHideControls", function() {
        a.T = !0
    });
    a.context.o.subscribe("onShowControls", function() {
        a.T = !1
    });
    a.context.o.subscribe("onVideoAreaChange", function() {
        a.T = _yt_player.kq(a.g.getRootNode(), "ytp-autohide")
    });
    a.ha.push(_yt_player.UF("iv-teaser-shown", a.YL, a));
    a.ha.push(_yt_player.UF("iv-teaser-clicked", a.XL, a))
};


Qxa = function(a, b) {
    switch (b.type) {
        case "simple":
            return L3(a.C, b);
        case "collaborator":
            var c = a.C,
                d = {
                    G: "div",
                    da: ["iv-card", "iv-card-channel"],
                    N: [{
                        G: "a",
                        da: ["iv-click-target"],
                        P: {
                            href: X2(b.url),
                            "data-ytid": b.channelId
                        },
                        N: [J3(b.profileImageUrl), {
                            G: "div",
                            L: "iv-card-content",
                            N: [N3(c, b), {
                                    G: "h2",
                                    L: "iv-card-primary-link",
                                    aa: b.title
                                },
                                M3(c, b)
                            ]
                        }]
                    }]
                };
            d = new _yt_player.W(d);
            K3(c, d, b);
            return d;
        case "donation":
            return c = a.C, d = (0, _yt_player.z)(c.C, c, b), L3(c, b, d,
            d);
        case "episode":
            return Dxa(a.C, b, "iv-card-episode");
        case "movie":
            return Dxa(a.C, b, "iv-card-movie");
        case "playlist":
            return c = a.C, d = {
                    G: "div",
                    da: ["iv-card", "iv-card-playlist"],
                    N: [{
                        G: "a",
                        L: "iv-click-target",
                        P: {
                            href: X2(b.url)
                        },
                        N: [J3(b.A, {
                            G: "div",
                            L: "iv-card-image-overlay",
                            N: [{
                                G: "span",
                                L: "iv-card-playlist-video-count",
                                aa: b
                                    .playlistVideoCount
                                    .toString()
                            }]
                        }), {
                            G: "div",
                            L: "iv-card-content",
                            N: [N3(c, b), H3(c, "h2",
                                "iv-card-primary-link",
                                b.title), M3(c, b)]
                        }]
                    }]
                },
                d = new _yt_player.W(d), K3(c, d, b), d;
        case "poll":
            return Bxa(a.C, b);
        case "productListing":
            c = a.C;
            var e = !_yt_player.Ra(b.offers);
            d = ["iv-card"];
            var f = "",
                k = Cxa(c, b);
            e && (d.push("iv-card-product-listing"), f =
                "iv-card-primary-link",
                e = b.offers[0], k = [], e.price && k.push({
                    G: "div",
                    L: "iv-card-offer-price",
                    aa: e.price
                }), e.merchant && k.push({
                    G: "div",
                    L: "iv-card-offer-merchant",
                    aa: e.merchant
                }), k = {
                    G: "div",
                    N: k
                });
            d = {
                G: "div",
                da: d,
                P: {
                    tabindex: "0"
                },
                N: [{
                        G: "a",
                        da: ["iv-card-image", "iv-click-target"],
                        P: {
                            style: "background-image: url(" + b
                                .imageUrl + ");",
                            href: X2(b.url),
                            "aria-hidden": "true",
                            tabindex: "-1"
                        }
                    },
                    {
                        G: "div",
                        L: "iv-card-content",
                        N: [b.sponsored ? {
                            G: "div",
                            L: "iv-card-sponsored",
                            N: ["Sponsored", {
                                G: "div",
                                L: "iv-ad-info-container",
                                N: [{
                                        G: "div",
                                        L: "iv-ad-info",
                                        aa: "{{adInfo}}"
                                    },
                                    {
                                        G: "div",
                                        L: "iv-ad-info-icon-container",
                                        N: [{
                                                G: "div",
                                                L: "iv-ad-info-icon"
                                            },
                                            {
                                                G: "div",
                                                L: "iv-ad-info-callout"
                                            }
                                        ]
                                    }
                                ]
                            }]
                        } : "", {
                            G: "a",
                            L: "iv-click-target",
                            P: {
                                href: X2(b.url)
                            },
                            N: [H3(c, "h2", f, b.title), k]
                        }]
                    }
                ]
            };
            d = new _yt_player.W(d);
            f = _yt_player.Ed("span");
            _yt_player.Sd(f,
                "You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant."
            );
            d.Mb(f, "adInfo");
            K3(c, d, b);
            return d;
        case "tip":
            return c = a.C, d = (0, _yt_player.z)(c.F, c, b), L3(c, b, d,
            d);
        case "video":
            return c = a.C, d = b.isLiveNow ? {
                    G: "span",
                    da: ["yt-badge", "yt-badge-live"],
                    aa: "LIVE NOW"
                } : "", d = {
                    G: "div",
                    da: ["iv-card", "iv-card-video"],
                    N: [{
                        G: "a",
                        L: "iv-click-target",
                        P: {
                            href: X2(b.url)
                        },
                        N: [J3(b.A, b.videoDuration ? {
                            G: "span",
                            L: "iv-card-video-duration",
                            aa: b.videoDuration
                        } : ""), {
                            G: "div",
                            L: "iv-card-content",
                            N: [N3(c, b), H3(c, "h2",
                                    "iv-card-primary-link",
                                    b.title), M3(c, b),
                                d
                            ]
                        }]
                    }]
                },
                d = new _yt_player.W(d), K3(c, d, b), d
    }
    return null
};


Rxa = function(a, b) {
    if (0 == a.o.length) return 0;
    var c = _yt_player.Na(a.o, function(a) {
        return b.hc.startMs > a.hc.startMs || b.hc.startMs == a.hc
            .startMs && b.hc.timestamp >= a.hc
            .timestamp ? !0 : !1
    });
    return -1 == c ? 0 : c + 1
};


Vxa = function(a) {
    return a.l ? "productListing" == a.l.hc.type : (0, _yt_player.dm)(a.o,
        function(a) {
            return "productListing" == a.hc.type
        })
};


V3 = function(a) {
    _yt_player.U(a.g.getRootNode(), "ytp-cards-shopping-active", Vxa(a))
};


Wxa = function(a, b) {
    if (a.H.o) {
        var c = new d2([0,
            a.A.scrollTop
        ], [0, b.ur.offsetTop], 600, Hva);
        a.context.A.U(c, "animate", function(b) {
            a.A.scrollTop = b.y
        });
        a.context.A.U(c, "finish", function(b) {
            a.A.scrollTop = b.y
        });
        c.play()
    } else _yt_player.sH(a.H, !0), a.A.scrollTop = b.ur.offsetTop,
        _yt_player.sH(a.H, !1)
};


W3 = function(a) {
    return a.l && a.l.hc ? a.l.hc : a.o[0] && a.o[0].hc ? a.o[0].hc : null
};


Uxa = function(a, b) {
    return _yt_player.Ma(a.o, function(a) {
        return a.hc.id == b
    })
};


X3 = function(a, b, c) {
    Q3.call(this, a, b);
    this.annotation = c;
    this.isActive = !1
};


Xxa = function(a) {
    var b = a.annotation.data;
    "start_ms" in b && "end_ms" in b && R3(a, a.annotation.data.start_ms, a
        .annotation.data.end_ms, a.annotation.id,
        function() {
            a.show()
        },
        function() {
            a.hide()
        })
};


Y3 = function(a, b, c) {
    X3.call(this, a, b, c);
    this.H = b;
    this.l = null;
    this.D = !1;
    this.o = null;
    this.A = !1;
    this.F = 0;
    this.g = this.C = this.B = null
};


Z3 = function(a, b, c) {
    X3.call(this, a, b, c);
    this.H = this.B = this.I = !1;
    this.F = 5E3;
    this.A = null;
    this.D = _yt_player.K("DIV", "iv-promo-contents");
    this.l = this.o = this.g = null;
    this.C = new _yt_player.Yt(function() {
            this.g.setAttribute("aria-hidden", !0);
            _yt_player.O(this.o, !1);
            _yt_player.O(this.l, !0)
        },
        700, this);
    _yt_player.N(this, this.C)
};


Yxa = function(a) {
    var b = a.annotation.data;
    if ("cta" == a.annotation.style) var c = 6;
    else if ("video" == a.annotation.style || "playlist" == a.annotation
        .style) c = 7;
    a.F = b.collapse_delay_ms || a.F;
    var d = ["iv-promo", "iv-promo-inactive"];
    a.la().setAttribute("aria-hidden", !0);
    a.la().setAttribute("aria-label", "Promotion");
    a.la().tabIndex = 0;
    var e = a.annotation.Ta(),
        f = b.image_url;
    if (f) {
        var k = _yt_player.K("DIV", ["iv-promo-img", "iv-click-target"]);
        f = _yt_player.K("IMG", {
            src: f,
            "aria-hidden": "true"
        });
        k.appendChild(f);
        b.video_duration && !b.is_live ? (f = _yt_player.K("SPAN",
                "iv-promo-video-duration",
                b.video_duration), k.appendChild(f)) : b.playlist_length &&
            (f = _yt_player.K("SPAN",
                "iv-promo-playlist-length", b.playlist_length.toString()
                ), k.appendChild(f));
        e && a.Zi(k, e, a.annotation.id, b.session_data, a.annotation.g,
            void 0, c)
    }
    e ? (f = _yt_player.K("A", "iv-promo-txt"), _yt_player.ad(f, X2(e)), a
        .g = f) : a.g = _yt_player.K("DIV",
        "iv-promo-txt");
    switch (a.annotation.style) {
        case "cta":
        case "website":
            var l = _yt_player.K("P", null, _yt_player.K("STRONG", null, b
                .text_line_1));
            var m = _yt_player.K("P", null, _yt_player.K("SPAN",
                "iv-promo-link", b.text_line_2));
            if (f = b.text_line_3) {
                d.push("iv-promo-website-card-cta-redesign");
                var n = _yt_player.K("BUTTON", [
                    "iv-promo-round-expand-icon", "ytp-button"
                ]);
                f = _yt_player.K("BUTTON", ["iv-button", "iv-promo-button"],
                    _yt_player.K("SPAN",
                        "iv-button-content", f));
                var p = _yt_player.K("DIV", "iv-promo-button-container");
                p.appendChild(f);
                e && a.Zi(a.la(), e, a.annotation.id, b.session_data, a
                    .annotation.g, void 0, c)
            }
            _yt_player.S(a.g, "iv-click-target");
            e && a.Zi(a.g, e, a.annotation.id, b.session_data, a.annotation
                .g, void 0, c);
            break;
        case "playlist":
        case "video":
            l = _yt_player.K("P", null, _yt_player.K("SPAN", null, b
                .text_line_1));
            m = _yt_player.K("P", null, _yt_player.K("STRONG", null, b
                .text_line_2));
            b.is_live && (l = m, m = _yt_player.K("SPAN", ["yt-badge",
                "iv-promo-badge-live"
            ], "LIVE NOW"));
            _yt_player.S(a.g, "iv-click-target");
            e && a.Zi(a.g, e, a.annotation.id, b.session_data, a.annotation
                .g, void 0, c);
            d.push("iv-promo-video");
            break;
        case "vote":
            l = _yt_player.K("P", null, _yt_player.K("STRONG", null, b
                    .text_line_1)), m = _yt_player.K("P", null,
                    _yt_player.K("SPAN", null, b.text_line_2)), p =
                _yt_player.K("DIV",
                    "iv-promo-button-container"), c = _yt_player.K("BUTTON",
                    ["iv-button", "iv-promo-button"],
                    _yt_player.K("SPAN", "iv-button-content", b.button_text)
                    ), a.context.g.U(c, "click", function(
                        a) {
                        a.stopPropagation();
                        C3(this.context.logger, this.annotation.g, null, {
                                contest_vote: "1"
                            },
                            (b.tracking || {}).vote);
                        a = this.annotation.data;
                        this.g = _yt_player.J("iv-promo-txt", this.D);
                        var c = _yt_player.J("iv-promo-button-container",
                                this.D),
                            d = _yt_player.K("DIV", ["iv-promo-txt",
                                "iv-click-target"
                            ]),
                            e = _yt_player.K("P", null, _yt_player.K(
                                "STRONG", null, a.text_line_3)),
                            f = _yt_player.K("P", null, a.text_line_4);
                        _yt_player.Hd(d, e, f);
                        _yt_player.Kd(c);
                        c = this.g;
                        (e = c.parentNode) && e.replaceChild(d, c);
                        _yt_player.mq(this.la(), "iv-promo-with-button");
                        (c = this.annotation.Ta()) && this.Zi(d, c, this
                            .annotation.id, a.session_data, this
                            .annotation.g)
                    },
                    a), p.appendChild(c), d.push("iv-promo-with-button")
    }
    l && a.g.appendChild(l);
    m && a.g.appendChild(m);
    a.D.appendChild(a.g);
    p && a.D.appendChild(p);
    l = _yt_player.K("DIV", "iv-promo-actions");
    a.l = _yt_player.K("BUTTON", ["iv-promo-expand", "ytp-button"]);
    a.l.title = "Expand";
    a.context.g.U(a.l, "click", _yt_player.Ga(a.ys, 5E3), a);
    l.appendChild(a.l);
    _yt_player.O(a.l, !1);
    a.context.g.U(a.la(), "mouseover", a.fK, a);
    a.context.g.U(a.la(), "mouseout", a.eK, a);
    a.context.g.U(a.la(), "touchend", _yt_player.Ga(a.ys, 5E3), a);
    a.o = _yt_player.K("BUTTON", ["iv-promo-close", "ytp-button"]);
    a.o.title = I3.CLOSE;
    a.context.g.U(a.o, "click", "cta" == a.annotation.style && b
        .text_line_3 ?
        a.UJ : a.LO, a);
    l.appendChild(a.o);
    _yt_player.lq(a.la(), d);
    k && (_yt_player.Gd(a.la(), k), n && k.appendChild(n));
    _yt_player.Gd(a.la(), a.D);
    _yt_player.Gd(a.la(), l)
};


Zxa = function(a) {
    a.B || a.H || a.A || (_yt_player.S(a.la(), "iv-promo-collapsed"), a
        .B = !0, a.C.start())
};


$xa = function(a) {
    a.C.stop();
    a.B && (_yt_player.nq(a.la(), ["iv-promo-collapsed",
            "iv-promo-collapsed-no-delay"
        ]), a.B = !1, a.g && a.g
        .removeAttribute("aria-hidden"), _yt_player.O(a.l, !1),
        _yt_player.O(a.o, !0))
};


aya = function(a, b) {
    a.A || (a.A = _yt_player.tg(function() {
            $3(this);
            Zxa(this)
        },
        b, a))
};


$3 = function(a) {
    a.A && (_yt_player.ug(a.A), a.A = null)
};


a4 = function(a) {
    _yt_player.sV.call(this, a);
    this.J = !1;
    this.I = 0;
    this.o = {};
    this.K = {};
    this.Ya = new wxa(a);
    this.F = new _yt_player.FF(this);
    _yt_player.N(this, this.F);
    this.D = this.B = null;
    this.F.O(this.g, "onVideoAreaChange", (0, _yt_player.z)(this.R, this,
        "onVideoAreaChange"));
    this.F.O(this.g, "onHideControls", (0, _yt_player.z)(this.R, this,
        "onHideControls"));
    this.F.O(this.g, "onShowControls", (0, _yt_player.z)(this.R, this,
        "onShowControls"));
    this.F.O(this.g, "resize", (0, _yt_player.z)(this.R, this, "resize"));
    this.F.O(this.g, "presentingplayerstatechange", (0, _yt_player.z)(this
        .R, this, "presentingplayerstatechange"));
    this.subscribe("onHideControls",
        this.SR, this);
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
    this.T = _yt_player.K("DIV",
        ["video-legacy-annotations", "html5-stop-propagation"]);
    this.Z = _yt_player.K("DIV", "video-custom-annotations");
    this.A = new _yt_player.W({
        G: "div",
        da: ["ytp-player-content", "ytp-iv-player-content"]
    });
    _yt_player.N(this, this.A);
    _yt_player.mV(this.g, this.A.element, 4);
    this.A.hide();
    this.C = new _yt_player.W({
        G: "div",
        da: ["ytp-iv-video-content"]
    });
    _yt_player.N(this, this.C);
    _yt_player.Gd(this.C.element, _yt_player.K("DIV", "video-annotations",
        this.T, this.Z));
    this.H = this.l = null;
    this.M = [];
    bya(this) && this.load();
    var b = _yt_player.Ed("STYLE");
    (window.document.getElementsByTagName("HEAD")[0] || window.document
        .body).appendChild(b);
    _yt_player.Ze(this, function() {
        _yt_player.Kd(b)
    });
    if (a = b.sheet) a.insertRule(
        ".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}",
        0), a.insertRule(
        ".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
        0), a.insertRule(
        ".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}",
        0), a.insertRule(
        ".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}",
        0), a.insertRule(
        ".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
        0), a.insertRule(
        ".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
        0), a.insertRule(
        ".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}",
        0), a.insertRule(
        ".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}",
        0), a.insertRule(
        ".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}",
        0), a.insertRule(
        ".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}",
        0)
};


cya = function(a) {
    switch (a) {
        case "annotation-editor":
        case "live-dashboard":
            return !0
    }
    return !1
};


bya = function(a) {
    var b = _yt_player.Y(a.g);
    a = a.g.getVideoData();
    return 1 == (b.Xg || a.Xg) && !a.Rk || null !== b.C.get(a.videoId)
};


dya = function(a, b, c) {
    a.J = !0;
    a.D = _yt_player.nE(b, c)
};


eya = function(a, b) {
    for (var c = {},
            d = 0; d < b.attributes.length; d++) {
        var e = b.attributes[d];
        c[e.name] = e.nodeValue
    }
    for (d = 0; d < b.childNodes.length; d++)
        if (e = b.childNodes[d], e.tagName) {
            if (c[e.tagName]) var f = c[e.tagName];
            else if ("data" == e.tagName) {
                0 < e.childNodes.length && (f = e.childNodes[0].nodeValue,
                    c[e.tagName] = "string" == typeof f ? f
                    .trim() : f);
                continue
            } else f = [], c[e.tagName] = f;
            e && "TEXT" == e.tagName ? 1 == e.childNodes.length && 3 == e
                .childNodes[0].nodeType ? f.push(e
                    .childNodes[0].nodeValue) : f.push("") : e && f.push(
                    eya(a, e))
        } return c
};


fya = function(a, b, c) {
    return !(a.loaded && a.I == b && a.g.getVideoData().videoId ==
        c)
};


hya = function(a, b) {
    var c = gya(a, b);
    if (!c && "marker" != b.type) return null;
    Twa(b, function(a) {
            a = (0, _yt_player.z)(this.wU, this, b.id, a);
            this.subscribe("ivTrigger:" + b.id, a)
        },
        a);
    var d = new u3(a.ea, b, c);
    _yt_player.N(d, c);
    return d
};


iya = function(a, b) {
    var c = _yt_player.K("DIV", ["annotation",
        "annotation-type-custom"
    ]);
    _yt_player.O(c, !1);
    var d = null;
    switch (b.type) {
        case "branding":
            if (_yt_player.Y(a.g).Bd) break;
            a.A.element.appendChild(c);
            d = new Y3(c, b4(a), b);
            break;
        case "promotion":
            _yt_player.mV(a.g, c, 4), d = new Z3(c, b4(a), b)
    }
    d && d.gq();
    return d
};


lya = function(a) {
    var b = a.g.getVideoData();
    if (b.Of) {
        var c = _yt_player.Y(a.g),
            d = c.C.get(b.videoId);
        if (d) {
            var e = {
                format: "XML",
                ad: {},
                method: "POST",
                withCredentials: !0
            };
            "gaming" == c.playerStyle && (e.ad.gaming = "1");
            e.wd = (0, _yt_player.z)(function(a, b, c) {
                    fya(this, a, b) || (a = _yt_player.WD(c) && c
                        .responseXML ? c.responseXML : null) && c4(
                        this, a)
                },
                a, a.I, b.videoId);
            _yt_player.nG() && (e.wd = jya(a, e.wd));
            e.Ob = {
                ic_only: "1"
            };
            kya(e, d);
            a.J = !0;
            _yt_player.nE(b.Of, e)
        }
    }
};


kya = function(a, b) {
    a.method = "POST";
    a.Ob = a.Ob || {};
    b.tr && (a.Ob.ic_coll = b.tr);
    b.Zh && (a.Ob.ic_xml = b.Zh);
    b.Lk && (a.Ob.ic_track = b.Lk)
};


mya = function(a) {
    var b = new _yt_player.W({
        G: "div"
    });
    _yt_player.O(b.element, !1);
    var c = new U3(a.g, b.element, b4(a));
    _yt_player.N(c, b);
    b.ua(a.A.element);
    c.gq();
    return c
};


b4 = function(a) {
    if (!a.H) {
        var b = new _yt_player.CF(a);
        _yt_player.N(a, b);
        var c = new _yt_player.Lm(a);
        _yt_player.N(a, c);
        a.H = new zxa(b, c, _yt_player.Y(a.g), a.g.getVideoData(), a.Ya, a
            .g, a.ea)
    }
    return a.H
};


c4 = function(a, b) {
    var c = !1;
    nya(b);
    for (var d = b.getElementsByTagName("annotation"), e = 0; e < d
        .length; e++) {
        var f = eya(a, d[e]),
            k = null;
        try {
            k = Qwa(f)
        } catch (l) {}
        if (k) {
            a: {
                switch (k.type) {
                    case "branding":
                    case "promotion":
                        f = !0;
                        break a
                }
                f = !1
            }
            if (f) {
                if (f = iya(a, k)) _yt_player.N(a, f), a.K[k.id] = f
            } else if ("card" == k.type || "drawer" == k.type) a.l || (a.l =
                mya(a), _yt_player.N(a, a.l)),
            "card" == k.type ? Sxa(a.l, k) : Txa(a.l, k),
            c = !0;
            else if (f = hya(a, k)) _yt_player.N(a, f),
            a.o[k.id] = f
        }
    }
    c && (U1(a.g), a.Tu());
    _yt_player.Lb(a.o, function(a) {
            if (a.view) {
                var b = a.annotation;
                (a = a.view) && b.segment && b.segment.l && (b =
                    this.o[b.segment.l]) && (a.T = b.annotation)
            }
        },
        a)
};


nya = function(a) {
    if ((a = a.getElementsByTagName("annotations")) && !(1 > a.length) && (
            a = a[0].getAttribute("itct"))) {
        var b = _yt_player.MG();
        if (b) {
            var c = Ova();
            c && bwa(b, c, [l2(a)])
        }
    }
};


pya = function(a, b, c, d) {
    d ? oya(a, b, c) : d4(a, b, c)
};


d4 = function(a, b, c) {
    if (b = a.o[b]) v3(b), c && c.l ? (a = (0, _yt_player.z)(a.Iz, a, b), b
        .g = new _yt_player.Yt(a, 2E3), b.g
        .start()) : a.Iz(b)
};


oya = function(a, b, c) {
    if (b = a.o[b]) v3(b), c && c.A ? (a = (0, _yt_player.z)(a.CE, a, b), b
        .g = new _yt_player.Yt(a, 2E3), b.g
        .start()) : a.CE(b)
};


qya = function(a, b) {
    if ("new" == b.target) return !1;
    var c = X2(b);
    if (!c) return !1;
    c = c.replace(/https?:\/\//g, "");
    if (!O3(c)) return !1;
    c = _yt_player.dE(c);
    if (c.list || c.p) return !1;
    c = Jxa(b);
    if (!c) return !1;
    var d = a.g.getVideoData();
    return d.videoId == c ? !0 : _yt_player.Y(a.g).g && d.yn ? !0 : !1
};


gya = function(a, b) {
    if (rya(b)) {
        var c = b.B || c3(b, function(a) {
            return "click" == a || "rollOut" == a || "rollOut" == a
        });
        return new p3(b, (0, _yt_player.z)(a.T.appendChild, a.T), a.g, a.ea,
            c)
    }
    return null
};


rya = function(a) {
    if ("highlight" == a.type || "widget" == a.type) return !0;
    if ("text" == a.type)
        for (var b in b3)
            if (a.style == b3[b]) return !0;
    return !1
};


e4 = function(a, b, c, d) {
    a.R(Xwa(b, d), c, d)
};


jya = function(a, b) {
    return (0, _yt_player.z)(function() {
            if (!this.ka()) {
                var a = Array.prototype.slice.call(arguments, 0);
                a.unshift(b);
                b = _yt_player.Ga.apply(window, a);
                this.M.push(_yt_player.lG(b))
            }
        },
        a)
};


f4 = function(a, b, c) {
    switch (a) {
        case "mouseover":
        case "mouseout":
            var d = 3;
            break;
        case "mouseenter":
        case "mouseleave":
            d = 9
    }
    return _yt_player.Yd(c, function(a) {
            return _yt_player.kq(a, b)
        },
        !0, d)
};


h4 = function(a) {
    var b = "mouseover" == a.type && "mouseenter" in g4 || "mouseout" == a
        .type && "mouseleave" in g4,
        c = a.type in g4 || b;
    if ("HTML" != a.target.tagName && c) {
        if (b) {
            b = "mouseover" == a.type ? "mouseenter" : "mouseleave";
            c = g4[b];
            for (var d in c.l) {
                var e = f4(b, d, a.target);
                e && !_yt_player.Yd(a.relatedTarget, function(a) {
                        return a == e
                    },
                    !0) && c.R(d, e, b, a)
            }
        }
        if (b = g4[a.type])
            for (d in b.l)(e = f4(a.type, d, a.target)) && b.R(d, e, a.type,
                a)
    }
};


i4 = function(a) {
    this.B = a;
    this.D = {};
    this.H = [];
    this.F = []
};


Z = function(a, b) {
    return "yt-uix" + (a.B ? "-" + a.B : "") + (b ? "-" + b : "")
};


j4 = function(a, b, c) {
    a.H.push(_yt_player.UF(b, c, a))
};


k4 = function(a, b, c) {
    a.F.push(_yt_player.FN(b, c, a))
};


l4 = function() {
    i4.call(this, "button");
    this.g = null;
    this.o = [];
    this.l = {}
};


sya = function(a, b, c, d, e) {
    var f = m2(c),
        k = 9 == d.keyCode;
    k || 32 == d.keyCode || 13 == d.keyCode ? (d = m4(a, c)) ? (b =
            _yt_player.Od(d), "a" == b.tagName
            .toLowerCase() ? _yt_player.tV(b.href) : Mva(b)) : k && n4(a,
        b) : f ? 27 == d.keyCode ? (m4(a, c), n4(
            a,
            b)) : e(b, c, d) : (a = _yt_player.kq(b, Z(a, "reverse")) ? 38 :
            40, d.keyCode == a && (Mva(b), d
                .preventDefault()))
};


m4 = function(a, b) {
    var c = Z(a, "menu-item-highlight"),
        d = _yt_player.J(c, b);
    d && _yt_player.mq(d, c);
    return d
};


tya = function(a, b, c) {
    _yt_player.S(c, Z(a, "menu-item-highlight"));
    var d = c.getAttribute("id");
    d || (d = Z(a, "item-id-" + _yt_player.Fa(c)), c.setAttribute("id", d));
    b.setAttribute("aria-activedescendant", d)
};


uya = function(a, b, c, d) {
    var e = b.length;
    a = (0, _yt_player.Pa)(b, a);
    if (-1 == a)
        if (38 == d.keyCode) a = e - c;
        else {
            if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode) a = 0
        }
    else 39 == d.keyCode ? (a % c == c - 1 && (a -= c), a += 1) : 37 == d
        .keyCode ? (0 == a % c && (a += c), --a) :
        38 == d.keyCode ? (a < c && (a += e), a -= c) : 40 == d.keyCode && (
            a >= e - c && (a -= e), a += c);
    return a
};


o4 = function(a, b) {
    var c = b.iframeMask;
    c || (c = _yt_player.Ed("IFRAME"), c.src = 'javascript:""', c
        .className = Z(a, "menu-mask"), o2(c), b
        .iframeMask = c);
    return c
};


p4 = function(a, b, c, d) {
    var e = _yt_player.$d(b, Z(a, "group")),
        f = !!a.Ba(b, "button-menu-ignore-group");
    e = e && !f ? e : b;
    f = 9;
    var k = 8,
        l = _yt_player.Lh(b);
    if (_yt_player.kq(b, Z(a, "reverse"))) {
        f = 8;
        k = 9;
        l = l.top + "px";
        try {
            c.style.maxHeight = l
        } catch (p) {}
    }
    _yt_player.kq(b, "flip") && (_yt_player.kq(b, Z(a, "reverse")) ? (f =
        12, k = 13) : (f = 13, k = 12));
    var m;
    a.Ba(b, "button-has-sibling-menu") ? m = _yt_player.Bh(e) : a.Ba(b,
        "button-menu-root-container") && (m = vya(a,
        b));
    _yt_player.yd && !_yt_player.rc("8") && (m = null);
    if (m) {
        var n = _yt_player.Lh(m);
        n = new _yt_player.Zg(-n.top, n.left, n.top, -n.left)
    }
    m = new _yt_player.hd(0, 1);
    _yt_player.kq(b, Z(a, "center-menu")) && (m.x -= Math.round((_yt_player
            .Kh(c).width - _yt_player.Kh(b).width) /
        2));
    d && (m.y += _yt_player.zd(window.document).y);
    if (a =
        o4(a, b)) b = _yt_player.Kh(c), a.style.width = b.width + "px", a
        .style.height = b.height + "px", g2(e, f,
            a, k, m, n, 197), d && _yt_player.ph(a, "position", "fixed");
    g2(e, f, c, k, m, n, 197)
};


vya = function(a, b) {
    if (a.Ba(b, "button-menu-root-container")) {
        var c = a.Ba(b, "button-menu-root-container");
        return _yt_player.$d(b, c)
    }
    return window.document.body
};


n4 = function(a, b) {
    if (b) {
        var c = q4(a, b);
        if (c) {
            a.g = null;
            b.setAttribute("aria-pressed", "false");
            b.setAttribute("aria-expanded", "false");
            b.removeAttribute("aria-activedescendant");
            o2(c);
            a.qj(b, "button-menu-action", !1);
            var d = o4(a, b),
                e = i2(c).toString();
            delete a.l[e];
            _yt_player.XD(function() {
                    d && d.parentNode && (o2(d), d.parentNode
                        .removeChild(d));
                    c.originalParentNode && (c.parentNode.removeChild(
                        c), c.originalParentNode.appendChild(c), c
                        .originalParentNode = null, c
                        .activeButtonNode = null)
                },
                1)
        }
        e = _yt_player.$d(b, Z(a, "group"));
        var f = [Z(a, "active")];
        e && f.push(Z(a, "group-active"));
        _yt_player.nq(b, f);
        _yt_player.XF("yt-uix-button-menu-hide", b);
        _yt_player.sF(a.o);
        a.o.length = 0
    }
};


wya = function(a, b, c) {
    var d = Z(a, "menu-item-selected");
    a = _yt_player.rd(d, b);
    (0, _yt_player.B)(a, function(a) {
        _yt_player.mq(a, d)
    });
    _yt_player.S(c.parentNode, d)
};


q4 = function(a, b) {
    if (!b.widgetMenu) {
        var c = a.Ba(b, "button-menu-id");
        c = c && _yt_player.pd(c);
        var d = Z(a, "menu");
        c ? _yt_player.lq(c, [d, Z(a, "menu-external")]) : c = _yt_player.J(
            d, b);
        b.widgetMenu = c
    }
    return b.widgetMenu
};


r4 = function(a) {
    a.g && n4(a, a.g)
};


s4 = function(a) {
    i4.call(this, a);
    this.o = null
};


xya = function(a, b, c) {
    var d = c || b,
        e = Z(a, "card");
    c = a.Cc(d);
    var f = _yt_player.pd(Z(a, "card") + i2(d));
    if (f) return a = _yt_player.J(Z(a, "card-body"), f), _yt_player.Qd(a,
        c) || (_yt_player.Kd(c), a.appendChild(
        c)), f;
    f = window.document.createElement("div");
    f.id = Z(a, "card") + i2(d);
    f.className = e;
    (d = a.Ba(d, "card-class")) && _yt_player.lq(f, d.split(/\s+/));
    d = window.document.createElement("div");
    d.className = Z(a, "card-border");
    b = a.Ba(b, "orientation") || "horizontal";
    e = window.document.createElement("div");
    e.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + b;
    var k = window.document.createElement("div");
    k.className =
        Z(a, "card-body");
    a = window.document.createElement("div");
    a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + b;
    _yt_player.Kd(c);
    k.appendChild(c);
    d.appendChild(a);
    d.appendChild(k);
    f.appendChild(e);
    f.appendChild(d);
    window.document.body.appendChild(f);
    return f
};


yya = function(a, b, c) {
    var d = a.Ba(b, "orientation") || "horizontal";
    var e = _yt_player.J(Z(a, "anchor"), b) || b;
    var f = a.Ba(b, "position"),
        k = !!a.Ba(b, "force-position"),
        l = a.Ba(b, "position-fixed");
    d = "horizontal" == d;
    var m = "bottomright" == f || "bottomleft" == f,
        n = "topright" == f || "bottomright" == f;
    if (n && m) {
        var p = 13;
        var r = 8
    } else n && !m ? (p = 12, r = 9) : !n && m ? (p = 9, r = 12) : (p = 8,
        r = 13);
    var v = X1(window.document.body);
    f = X1(b);
    v != f && (p ^= 4);
    if (d) {
        f = b.offsetHeight / 2 - 12;
        var D = new _yt_player.hd(-12, b.offsetHeight + 6)
    } else f = b.offsetWidth / 2 - 6, D = new _yt_player.hd(b.offsetWidth +
        6, -12);
    var H = _yt_player.Kh(c);
    f = Math.min(f, (d ? H.height : H.width) -
        24 - 6);
    6 > f && (f = 6, d ? D.y += 12 - b.offsetHeight / 2 : D.x += 12 - b
        .offsetWidth / 2);
    H = null;
    k || (H = 10);
    b = Z(a, "card-flip");
    a = Z(a, "card-reverse");
    _yt_player.U(c, b, n);
    _yt_player.U(c, a, m);
    H = g2(e, p, c, r, D, null, H);
    !k && H && (H & 48 && (n = !n, p ^= 4, r ^= 4), H & 192 && (m = !m, p ^=
            1, r ^= 1), _yt_player.U(c, b, n),
        _yt_player.U(c, a, m), g2(e, p, c, r, D));
    l && (e = (0, window.parseInt)(c.style.top, 10), k = _yt_player.zd(
        window.document).y, _yt_player.ph(c,
        "position", "fixed"), _yt_player.ph(c, "top", e - k + "px"));
    v && (c.style.right = "", e = _yt_player.Lh(c), e.left = e.left || (0,
            window.parseInt)(c.style.left, 10), k =
        _yt_player.wd(window), c.style.left = "", c.style.right =
        k.width - e.left - e.width + "px");
    e = _yt_player.J("yt-uix-card-body-arrow", c);
    k = _yt_player.J("yt-uix-card-border-arrow", c);
    d = d ? m ? "top" : "bottom" : !v && n || v && !n ? "left" : "right";
    e.setAttribute("style", "");
    k.setAttribute("style", "");
    e.style[d] = f + "px";
    k.style[d] = f + "px";
    m = _yt_player.J("yt-uix-card-arrow", c);
    n = _yt_player.J("yt-uix-card-arrow-background", c);
    m && n && (c = "right" == d ? _yt_player.Kh(c).width - f - 13 : f + 11,
        f = c / Math.sqrt(2), m.style.left = c +
        "px", m.style.marginLeft = "1px", n.style.marginLeft = -f +
        "px", n.style.marginTop = f + "px")
};


t4 = function(a) {
    a.o && a.hide(a.o)
};


zya =
    function(a) {
        var b = a.cardMask;
        b || (b = _yt_player.Ed("IFRAME"), b.src = 'javascript:""', _yt_player
            .lq(b, ["yt-uix-card-iframe-mask"]), a
            .cardMask = b);
        b.style.position = a.style.position;
        b.style.top = a.style.top;
        b.style.left = a.offsetLeft + "px";
        b.style.height = a.clientHeight + "px";
        b.style.width = a.clientWidth + "px";
        window.document.body.appendChild(b)
    };
u4 = function() {
    i4.call(this, "kbd-nav")
};


Aya = function(a, b, c) {
    if (b && c)
        if (_yt_player.S(c, Z(a)), a = b.id, a || (a = "kbd-nav-" + Math
                .floor(1E6 * Math.random() + 1), b.id = a),
            b = a, _yt_player.ek && c.dataset) c.dataset.kbdNavMoveOut = b;
        else {
            if (/-[a-z]/.test("kbdNavMoveOut")) throw Error("");
            c.setAttribute("data-" + _yt_player.Hb("kbdNavMoveOut"), b)
        }
};


Bya = function(a, b) {
    if (b) {
        var c = _yt_player.Zd(b, "LI");
        c && (_yt_player.S(c, Z(a, "highlight")), v4 = _yt_player.rF(b,
            "blur", (0, _yt_player.z)(function(a) {
                    _yt_player.mq(a, Z(this, "highlight"));
                    _yt_player.sF(v4)
                },
                a, c)))
    }
};


Cya = function(a) {
    if ("UL" != a.tagName.toUpperCase()) return [];
    a = (0, _yt_player.Ld)(_yt_player.Md(a), function(a) {
        return "LI" == a.tagName.toUpperCase()
    });
    return (0, _yt_player.Ld)((0, _yt_player.G)(a, function(a) {
        return m2(a) ? V1(a, function(a) {
            return _yt_player.Da(a) && 1 == a.nodeType ?
                _yt_player.Xd(a) : !1
        }) : !1
    }), function(a) {
        return !!a
    })
};


w4 = function() {
    i4.call(this, "menu");
    this.l = this.g = null;
    this.o = {};
    this.C = {};
    this.A = null
};


x4 = function(a) {
    var b = w4.getInstance();
    if (_yt_player.kq(a, Z(b))) return a;
    var c = b.pe(a);
    return c ? c : _yt_player.$d(a, Z(b, "content")) == b.g ? b.l : null
};


Dya = function(a, b, c) {
    var d = y4(a, b);
    d && _yt_player.Jh(d, _yt_player.Kh(c));
    if (c == a.g) {
        var e = 9,
            f = 8;
        _yt_player.kq(b, Z(a, "reversed")) && (e ^= 1, f ^= 1);
        _yt_player.kq(b, Z(a, "flipped")) && (e ^= 4, f ^= 4);
        a = new _yt_player.hd(0, 1);
        d && g2(b, e, d, f, a, null, 197);
        g2(b, e, c, f, a, null, 197)
    }
};


Fya = function(a, b, c) {
    z4(a, b) && !c ? A4(a, b) : (Eya(a, b), !a.g || j2(b, a.g) ? a.fG(b) :
        ova(a.A, (0, _yt_player.z)(a.fG, a, b)))
};


Eya = function(a, b) {
    if (b) {
        var c = _yt_player.$d(b, Z(a, "content"));
        c && (c = _yt_player.rd(Z(a), c), (0, _yt_player.B)(c, function(a) {
                !j2(a, b) && z4(this, a) && B4(this, a)
            },
            a))
    }
};


A4 = function(a, b) {
    if (b) {
        var c = [];
        c.push(b);
        var d = C4(a, b);
        d && (d = _yt_player.rd(Z(a), d), d = _yt_player.Ya(d), c = c
            .concat(d), (0, _yt_player.B)(c, function(a) {
                    z4(this, a) && B4(this, a)
                },
                a))
    }
};


B4 = function(a, b) {
    if (b) {
        var c = C4(a, b);
        _yt_player.nq(D4(a, b), [Z(a, "trigger-selected"),
            "yt-uix-button-toggled"
        ]);
        _yt_player.S(c, Z(a, "content-hidden"));
        var d = C4(a, b);
        d && _yt_player.ud(d, {
            "aria-expanded": "false"
        });
        (d = y4(a, b)) && d.parentNode && _yt_player.Kd(d);
        c && c == a.g && (a.l.appendChild(c), a.g = null, a.l = null, a.A &&
            a.A.R("ROOT_MENU_REMOVED"));
        _yt_player.XF("yt-uix-menu-hide", b);
        c = _yt_player.Fa(b).toString();
        _yt_player.sF(a.o[c]);
        delete a.o[c]
    }
};


Gya = function(a, b) {
    var c = C4(a, b);
    if (c) {
        (0, _yt_player.B)(c.children, function(a) {
            "LI" == a.tagName && _yt_player.ud(a, {
                role: "menuitem"
            })
        });
        _yt_player.ud(c, {
            "aria-expanded": "true"
        });
        var d = c.id;
        d || (d = "aria-menu-id-" + _yt_player.Fa(c), c.id = d);
        (c = D4(a, b)) && _yt_player.ud(c, {
            "aria-controls": d
        })
    }
};


Hya = function(a, b, c) {
    var d = C4(a, b);
    d && _yt_player.kq(b, Z(a, "checked")) && (a = _yt_player.Zd(c,
        "LI")) && (a = _yt_player.J(
            "yt-ui-menu-item-checked-hid", a)) && (d = _yt_player.rd(
            "yt-ui-menu-item-checked", d), (0, _yt_player
            .B)(d, function(a) {
            _yt_player.oq(a, "yt-ui-menu-item-checked",
                "yt-ui-menu-item-checked-hid")
        }), _yt_player.oq(a, "yt-ui-menu-item-checked-hid",
            "yt-ui-menu-item-checked"))
};


z4 = function(a, b) {
    var c = C4(a, b);
    return c ? !_yt_player.kq(c, Z(a, "content-hidden")) : !1
};


Iya = function(a) {
    a = _yt_player.qd(window.document, "UL", null, a);
    (0, _yt_player.B)(a, function(a) {
        a.tabIndex = 0;
        var b = u4.getInstance();
        _yt_player.lq(a, [Z(b), Z(b, "list")])
    })
};


C4 = function(a, b) {
    var c = _yt_player.bF(b, "menu-content-id");
    return c && (c = _yt_player.pd(c)) ? (_yt_player.lq(c, [Z(a, "content"),
            Z(a, "content-external")
        ]), c) : b == a
        .l ? a.g : _yt_player.J(Z(a, "content"), b)
};


y4 = function(a, b) {
    var c = _yt_player.Fa(b).toString(),
        d = a.C[c];
    if (!d) {
        d = _yt_player.Ed("IFRAME");
        d.src = 'javascript:""';
        var e = [Z(a, "mask")];
        (0, _yt_player.B)(_yt_player.jq(b), function(a) {
            e.push(a + "-mask")
        });
        _yt_player.lq(d, e);
        a.C[c] = d
    }
    return d || null
};


D4 = function(a, b) {
    return _yt_player.J(Z(a, "trigger"), b)
};


Jya = function(a, b) {
    return j2(b, a.g) || j2(b, a.l)
};


E4 = function() {
    s4.call(this, "clickcard");
    this.g = {};
    this.l = {}
};


F4 = function() {
    s4.call(this, "hovercard")
};


G4 = function(a, b, c, d, e, f) {
    this.g = a;
    this.D = null;
    this.o = _yt_player.J("yt-dialog-fg", this.g) || this.g;
    if (a = _yt_player.J("yt-dialog-title", this.o)) {
        var k = "yt-dialog-title-" + _yt_player.Fa(this.o);
        a.setAttribute("id", k);
        this.o.setAttribute("aria-labelledby", k)
    }
    this.o.setAttribute("tabindex", "-1");
    this.I = _yt_player.J("yt-dialog-focus-trap", this.g);
    this.J = !1;
    this.A = new _yt_player.XC;
    this.F = [];
    this.F.push(_yt_player.AF(this.g, "click", (0, _yt_player.z)(this.YQ,
        this), "yt-dialog-dismiss"));
    this.F.push(_yt_player.rF(this.I, "focus", (0, _yt_player.z)(this.CJ,
        this), !0));
    Kya(this);
    this.K = b;
    this.T = c;
    this.M = d;
    this.H = e;
    this.X = f;
    this.C =
        this.B = null
};


Lya = function(a, b) {
    a.ka() || a.A.subscribe("post-all", b)
};


Kya = function(a) {
    a = _yt_player.J("yt-dialog-fg-content", a.g);
    var b = [];
    _yt_player.Lb(Mya, function(a) {
        b.push("yt-dialog-show-" + a)
    });
    _yt_player.nq(a, b);
    _yt_player.S(a, "yt-dialog-show-content")
};


Nya = function() {
    var a = _yt_player.rd("yt-dialog");
    return (0, _yt_player.Bj)(a, function(a) {
        return m2(a)
    })
};


Oya = function(a) {
    var b = _yt_player.qd(window.document, "iframe", null, a.g);
    (0, _yt_player.B)(b, function(a) {
            var b = _yt_player.bF(a, "onload");
            b && (b = _yt_player.x(b)) && _yt_player.rF(a, "load", b);
            if (b = _yt_player.bF(a, "src")) a.src = b
        },
        a);
    return _yt_player.Ya(b)
};


Pya = function(a) {
    (0, _yt_player.B)(window.document.getElementsByTagName("iframe"),
        function(b) {
            -1 == (0, _yt_player.Pa)(a, b) && _yt_player.S(b, "iframe-hid")
        })
};


Qya = function() {
    var a = _yt_player.rd("iframe-hid");
    (0, _yt_player.B)(a, function(a) {
        _yt_player.mq(a, "iframe-hid")
    })
};


Rya = function(a) {
    _yt_player.XD((0, _yt_player.z)(function() {
            this.o && this.o.focus()
        },
        a), 0)
};


H4 = function() {
    i4.call(this, "overlay");
    this.A = this.l = this.o = this.g = null
};


Tya = function(a) {
    a.A || (a.A = _yt_player.UF("yt-uix-overlay-hide", Sya));
    a.g && Lya(a.g, function() {
        var a = H4.getInstance();
        a.o = null;
        a.g.dispose();
        a.g = null
    })
};


Uya = function(a) {
    if (a.g) {
        var b = a.o;
        a.g.dismiss("overlayhide");
        b && a.qj(b, "overlay-hidden");
        a.o = null;
        a.l && (_yt_player.sF(a.l), a.l = null);
        a.g = null
    }
};


Vya = function(a, b) {
    var c;
    if (a)
        if (c = _yt_player.J("yt-dialog", a)) {
            var d = _yt_player.pd("body-container");
            d && (d.appendChild(c), a.overlayContentNode = c, c
                .overlayParentNode = a)
        } else c = a.overlayContentNode;
    else b && (c = _yt_player.$d(b, "yt-dialog"));
    return c
};


Wya = function() {
    var a = H4.getInstance();
    if (a.o) a = _yt_player.J("yt-dialog-fg-content", a.o
        .overlayContentNode);
    else a: {
        if (a = _yt_player.rd("yt-dialog-fg-content"))
            for (var b = 0; b < a.length; b++) {
                var c = _yt_player.$d(a[b], "yt-dialog");
                if (m2(c)) {
                    a = a[b];
                    break a
                }
            }
        a = null
    }
    return a
};


Sya = function() {
    Uya(H4.getInstance())
};


I4 = function() {
    i4.call(this, "tooltip");
    this.g = 0;
    this.l = {}
};


Xya = function(a, b, c) {
    a.setData(b, "tooltip-text", c);
    a = a.Ba(b, "content-id");
    (a = _yt_player.pd(a)) && _yt_player.Sd(a, c)
};


Yya = function(a, b) {
    return a.Ba(b, "tooltip-text") || b.title
};


aza = function(a, b) {
    if (b) {
        var c = Yya(a, b);
        if (c) {
            var d = _yt_player.pd(J4(a, b));
            if (!d) {
                d = window.document.createElement("div");
                d.id = J4(a, b);
                d.className = Z(a, "tip");
                var e = window.document.createElement("div");
                e.className = Z(a, "tip-body");
                var f = window.document.createElement("div");
                f.className = Z(a, "tip-arrow");
                var k = window.document.createElement("div");
                k.setAttribute("aria-hidden", "true");
                k.className = Z(a, "tip-content");
                var l = Zya(a, b),
                    m = J4(a, b, "content");
                k.id = m;
                a.setData(b, "content-id", m);
                e.appendChild(k);
                l && d.appendChild(l);
                d.appendChild(e);
                d.appendChild(f);
                var n = W1(b);
                m = J4(a, b, "arialabel");
                f = window.document.createElement("div");
                _yt_player.S(f, Z(a, "arialabel"));
                f.id = m;
                n = b.hasAttribute("aria-label") ? b.getAttribute(
                        "aria-label") : "rtl" == window.document.body
                    .getAttribute("dir") ? c + " " + n : n + " " + c;
                _yt_player.Sd(f, n);
                b.setAttribute("aria-labelledby", m);
                m = _yt_player.hF() || window.document.body;
                m.appendChild(f);
                m.appendChild(d);
                Xya(a, b, c);
                (c = (0, window.parseInt)(a.Ba(b, "tooltip-max-width"),
                10)) && e.offsetWidth > c && (e.style
                    .width = c + "px", _yt_player.S(k, Z(a,
                        "normal-wrap")));
                k = _yt_player.kq(b, Z(a, "reverse"));
                $ya(a,
                    b, d, e, l, k) || $ya(a, b, d, e, l, !k);
                var p = Z(a, "tip-visible");
                _yt_player.XD(function() {
                        _yt_player.S(d, p)
                    },
                    0)
            }
        }
    }
};


$ya = function(a, b, c, d, e, f) {
    _yt_player.U(c, Z(a, "tip-reverse"), f);
    var k = 0;
    f && (k = 1);
    var l = _yt_player.Kh(b);
    f = new _yt_player.hd((l.width - 10) / 2, f ? l.height : 0);
    var m = _yt_player.Ch(b);
    Jva(new _yt_player.hd(m.x + f.x, m.y + f.y), c, k);
    m = _yt_player.wd(window);
    var n = _yt_player.Gh(c);
    c = _yt_player.Kh(d);
    var p = Math.floor(c.width / 2);
    k = !!(m.height < n.y + l.height);
    l = !!(n.y < l.height);
    f = !!(n.x < p);
    m = !!(m.width < n.x + p);
    n = (c.width + 3) / -2 - -5;
    a = a.Ba(b, "force-tooltip-direction");
    if ("left" == a || f) n = -5;
    else if ("right" == a || m) n = 20 - c.width - 3;
    a = Math.floor(n) + "px";
    d.style.left = a;
    e && (e.style.left = a, e.style.height = c.height + "px", e.style
        .width = c.width + "px");
    return !(k ||
        l)
};


J4 = function(a, b, c) {
    a = Z(a) + i2(b);
    c && (a += "-" + c);
    return a
};


Zya = function(a, b) {
    var c = null;
    _yt_player.K0 && _yt_player.kq(b, Z(a, "masked")) && ((c = _yt_player
        .pd("yt-uix-tooltip-shared-mask")) ? (c
        .parentNode.removeChild(c), n2(c)) : (c = _yt_player.Ed(
            "IFRAME"), c.src = 'javascript:""', c.id =
        "yt-uix-tooltip-shared-mask", c.className = Z(a, "tip-mask")
        ));
    return c
};


bza = function(a) {
    var b = _yt_player.pd("yt-uix-tooltip-shared-mask"),
        c = b && _yt_player.Yd(b, function(b) {
                return b == a
            },
            !1, 2);
    b && c && (b.parentNode.removeChild(b), o2(b), window.document.body
        .appendChild(b))
};


K4 = function(a) {
    _yt_player.yN.call(this, 1, arguments);
    this.g = a
};


L4 = function(a, b, c, d, e) {
    _yt_player.yN.call(this, 2, arguments);
    this.source = e || null
};


cza = function(a, b, c) {
    _yt_player.yN.call(this, 1, arguments);
    this.g = a;
    this.l = b
};


M4 = function(a, b, c, d, e, f, k) {
    _yt_player.yN.call(this, 1, arguments);
    this.g = d || null;
    this.source = k || null
};


dza = function(a) {
    a = _yt_player.$d(a, "yt-uix-button-subscription-container");
    a = _yt_player.J("unsubscribe-confirmation-overlay-container", a);
    return _yt_player.J("yt-dialog", a)
};


eza = function(a, b) {
    _yt_player.sF(N4);
    N4.length = 0;
    O4[b] || (O4[b] = dza(a));
    H4.getInstance().show(O4[b]);
    var c = Wya();
    return new _yt_player.Yf(function(a) {
        N4.push(_yt_player.AF(c, "click", function() {
                a()
            },
            "overlay-confirmation-unsubscribe-button"))
    })
};


P4 = function() {
    i4.call(this, "subscription-button")
};


fza = function(a, b) {
    if (!a.Ba(b, "ypc-enabled")) return null;
    var c = a.Ba(b, "ypc-item-type"),
        d = a.Ba(b, "ypc-item-id");
    return {
        itemType: c,
        itemId: d,
        subscriptionElement: b
    }
};


gza = function(a, b) {
    var c = a.Ba(b, Q4.jI),
        d = !!a.Ba(b, "is-subscribed");
    c = "-" + c;
    var e = R4.wG + c;
    _yt_player.U(b, R4.vG + c, !d);
    _yt_player.U(b, e, d);
    a.Ba(b, Q4.IG) && !a.Ba(b, Q4.HG) && (c = Z(I4.getInstance()),
        _yt_player.U(b, c, !d), b.title = d ? "" : a.Ba(
            b, Q4.JG));
    d ? _yt_player.XD(function() {
            _yt_player.S(b, R4.pw)
        },
        1E3) : _yt_player.mq(b, R4.pw)
};


hza = function(a, b) {
    var c = _yt_player.rd(Z(a));
    return (0, _yt_player.Ld)(c, function(a) {
            return b == this.Ba(a, "channel-external-id")
        },
        a)
};


iza = function(a, b) {
    var c = (0, _yt_player.z)(function(a) {
            a.discoverable_subscriptions && _yt_player.QD(
                "SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS", a
                .discoverable_subscriptions);
            this.kw(b)
        },
        a);
    _yt_player.Osa(c, "subscribe", "sub_button")
};


jza = function(a, b) {
    if (!a.Ba(b, "show-unsub-confirm-dialog")) return !1;
    var c = a.Ba(b, "show-unsub-confirm-time-frame");
    return "always" == c || "ten_minutes" == c && (c = (0, window.parseInt)(
        a.Ba(b, "subscribed-timestamp"), 10), (
        new $1).getTime() < 1E3 * (c + 600)) ? !0 : !1
};


tva = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
};


uva = {
    IMG: " ",
    BR: "\n"
};


xva = /[^\d]+$/,
    yva = {
        cm: 1,
        "in": 1,
        mm: 1,
        pc: 1,
        pt: 1
    };
zva = {
    em: 1,
    ex: 1
};


Y1.prototype.clone = function() {
    return new Y1(this.start, this.end)
};


Y1.prototype.getLength = function() {
    return this.end - this.start
};


_yt_player.A($1, _yt_player.ko);
_yt_player.h = $1.prototype;
_yt_player.h.getHours = function() {
    return this.date.getHours()
};


_yt_player.h.getMinutes = function() {
    return this.date.getMinutes()
};


_yt_player.h.getSeconds = function() {
    return this.date.getSeconds()
};


_yt_player.h.getMilliseconds = function() {
    return this.date.getMilliseconds()
};


_yt_player.h.getUTCHours = function() {
    return this.date.getUTCHours()
};


_yt_player.h.getUTCMinutes = function() {
    return this.date.getUTCMinutes()
};


_yt_player.h.add = function(a) {
    _yt_player.ko.prototype.add.call(this, a);
    a.hours && this.date.setUTCHours(this.date.getUTCHours() + a.hours);
    a.minutes && this.date.setUTCMinutes(this.date.getUTCMinutes() + a
        .minutes);
    a.seconds && this.date.setUTCSeconds(this.date.getUTCSeconds() + a
        .seconds)
};


_yt_player.h.xo = function(a) {
    var b = _yt_player.ko.prototype.xo.call(this, a);
    return a ? b + " " + _yt_player.yb(this.getHours(), 2) + ":" +
        _yt_player.yb(this.getMinutes(), 2) + ":" +
        _yt_player.yb(this.getSeconds(), 2) : b + "T" + _yt_player.yb(this
            .getHours(), 2) + _yt_player.yb(this
            .getMinutes(), 2) + _yt_player.yb(this.getSeconds(), 2)
};


_yt_player.h.toString = function() {
    return this.xo()
};


_yt_player.h.clone = function() {
    var a = new $1(this.date);
    a.eo = this.eo;
    a.ho = this.ho;
    return a
};


var a2 = {},
    b2 = null;
_yt_player.A(Eva, _yt_player.bf);
_yt_player.A(d2, _yt_player.ut);
_yt_player.h = d2.prototype;
_yt_player.h.getDuration = function() {
    return this.duration
};


_yt_player.h.play = function(a) {
    if (a || 0 == this.g) this.progress = 0, this.coords = this.l;
    else if (this.kb()) return !1;
    c2(this);
    this.startTime = a = (0, _yt_player.F)(); -
    1 == this.g && (this.startTime -= this.duration * this.progress);
    this.endTime = this.startTime + this.duration;
    this.A = this.startTime;
    this.progress || this.Ap();
    this.Ge("play"); -
    1 == this.g && this.Ge("resume");
    this.g = 1;
    var b = _yt_player.Fa(this);
    b in a2 || (a2[b] = this);
    Cva();
    Dva(this, a);
    return !0
};


_yt_player.h.stop = function(a) {
    c2(this);
    this.g = 0;
    a && (this.progress = 1);
    Fva(this, this.progress);
    this.Ge("stop");
    this.xm()
};


_yt_player.h.pause = function() {
    this.kb() && (c2(this), this.g = -1, this.Ge("pause"))
};


_yt_player.h.V = function() {
    0 == this.g || this.stop(!1);
    this.Ge("destroy");
    d2.ba.V.call(this)
};


_yt_player.h.destroy = function() {
    this.dispose()
};


_yt_player.h.Iu = function() {
    this.Ge("animate")
};


_yt_player.h.Ge = function(a) {
    this.dispatchEvent(new Eva(a, this))
};


_yt_player.A(e2, d2);
e2.prototype.o = _yt_player.y;
e2.prototype.Iu = function() {
    this.o();
    e2.ba.Iu.call(this)
};


e2.prototype.xm = function() {
    this.o();
    e2.ba.xm.call(this)
};


e2.prototype.Ap = function() {
    this.o();
    e2.ba.Ap.call(this)
};


_yt_player.A(f2, e2);
f2.prototype.o = function() {
    this.element.style.left = Math.round(this.coords[0]) + "px";
    this.element.style.top = Math.round(this.coords[1]) + "px"
};


var I3 = {};
_yt_player.A(q2, _yt_player.Df);
_yt_player.h = q2.prototype;
_yt_player.h.rs = null;
_yt_player.h.El = null;
_yt_player.h.la = function() {
    return this.El
};


_yt_player.h.addEventListener = function(a, b, c, d) {
    _yt_player.pf(this.El, a, b, c, d)
};


_yt_player.h.removeEventListener = function(a, b, c, d) {
    _yt_player.xf(this.El, a, b, c, d)
};


_yt_player.h.V = function() {
    q2.ba.V.call(this);
    var a = this.El;
    if (a)
        if (_yt_player.hf(a)) a.He && _yt_player.mf(a.He);
        else if (a = _yt_player.sf(a)) {
        var b = 0,
            c;
        for (c in a.listeners)
            for (var d = a.listeners[c].concat(), e = 0; e < d.length;
                ++e) _yt_player.yf(d[e]) && ++b
    }
};


_yt_player.A(u2, q2);
u2.prototype.fill = null;
_yt_player.A(Tva, q2);
v2.prototype.Rf = null;
v2.prototype.Zd = null;
v2.prototype.Jm = !0;
var Uva = [2, 2, 6, 6, 0];
_yt_player.h = v2.prototype;
_yt_player.h.clear = function() {
    this.rb.length = 0;
    this.Ka.length = 0;
    this.Ce.length = 0;
    delete this.Rf;
    delete this.Zd;
    delete this.Jm;
    return this
};


_yt_player.h.moveTo = function(a, b) {
    0 == _yt_player.Ka(this.rb) ? this.Ce.length -= 2 : (this.rb.push(0),
        this.Ka.push(1));
    this.Ce.push(a, b);
    this.Zd = this.Rf = [a, b];
    return this
};


_yt_player.h.Ec = function(a) {
    var b = _yt_player.Ka(this.rb);
    if (null == b) throw Error("Path cannot start with lineTo");
    1 != b && (this.rb.push(1), this.Ka.push(0));
    for (b = 0; b < arguments.length; b += 2) {
        var c = arguments[b],
            d = arguments[b + 1];
        this.Ce.push(c, d)
    }
    this.Ka[this.Ka.length - 1] += b / 2;
    this.Zd = [c, d]
};


_yt_player.h.close = function() {
    var a = _yt_player.Ka(this.rb);
    if (null == a) throw Error("Path cannot start with close");
    4 != a && (this.rb.push(4), this.Ka.push(1), this.Zd = this.Rf);
    return this
};


_yt_player.h.clone = function() {
    var a = new this.constructor;
    a.rb = this.rb.concat();
    a.Ka = this.Ka.concat();
    a.Ce = this.Ce.concat();
    a.Rf = this.Rf && this.Rf.concat();
    a.Zd = this.Zd && this.Zd.concat();
    a.Jm = this.Jm;
    return a
};


_yt_player.h.transform = function(a) {
    if (!this.Jm) throw Error("Non-simple path");
    a.transform(this.Ce, 0, this.Ce, 0, this.Ce.length / 2);
    this.Rf && a.transform(this.Rf, 0, this.Rf, 0, 1);
    this.Zd && this.Rf != this.Zd && a.transform(this.Zd, 0, this.Zd, 0, 1);
    return this
};


_yt_player.h.isEmpty = function() {
    return 0 == this.rb.length
};


_yt_player.A(Wva, u2);
x2.prototype.Cb = function() {
    return this.l
};


_yt_player.A(y2, _yt_player.Tu);
y2.prototype.B = null;
y2.prototype.Hj = function() {
    return this.Re ? _yt_player.Kh(this.la()) : _yt_player.ua(this.width) &&
        _yt_player.ua(this.height) ?
        new _yt_player.I(this.width, this.height) : null
};


y2.prototype.resume = function() {};
_yt_player.A(s2, Sva);
_yt_player.A(r2, Sva);
_yt_player.A(z2, Tva);
z2.prototype.clear = function() {
    _yt_player.Id(this.la())
};


z2.prototype.setSize = function(a, b) {
    var c = this.la(),
        d = {
            width: a,
            height: b
        },
        e;
    for (e in d) c.setAttribute(e, d[e])
};


_yt_player.A(Xva, Wva);
var C2;
_yt_player.A(A2, y2);
var Zva = 0;
_yt_player.h = A2.prototype;
_yt_player.h.zo = function() {
    var a = t2(this, "svg", {
            width: this.width,
            height: this.height,
            overflow: "hidden"
        }),
        b = t2(this, "g");
    this.F = t2(this, "defs");
    this.B = new z2(b, this);
    a.appendChild(this.F);
    a.appendChild(b);
    this.g = a;
    this.o && (this.la().setAttribute("preserveAspectRatio", "none"), this
        .M ? this.wq() : this.la().setAttribute(
            "viewBox", "0 0 " + (this.o ? this.o + " " + this.K : "")))
};


_yt_player.h.wq = function() {
    if (this.Re) {
        var a = this.Hj();
        if (0 == a.width) this.la().style.visibility = "hidden";
        else {
            this.la().style.visibility = "";
            var b = a.width / this.o;
            a = a.height / this.K;
            this.B.la().setAttribute("transform", "scale(" + b + " " + a +
                ") translate(0 0)")
        }
    }
};


_yt_player.h.setSize = function(a, b) {
    _yt_player.Jh(this.la(), a, b)
};


_yt_player.h.Hj = function() {
    if (!_yt_player.rh) return this.Re ? _yt_player.Kh(this.la()) : A2.ba.Hj
        .call(this);
    var a = this.width,
        b = this.height,
        c = _yt_player.u(a) && -1 != a.indexOf("%"),
        d = _yt_player.u(b) && -1 != b.indexOf("%");
    if (!this.Re && (c || d)) return null;
    if (c) {
        var e = this.la().parentNode;
        var f = _yt_player.Kh(e);
        a = (0, window.parseFloat)(a) * f.width / 100
    }
    d && (e = e || this.la().parentNode, f = f || _yt_player.Kh(e), b = (0,
        window.parseFloat)(b) * f.height / 100);
    return new _yt_player.I(a, b)
};


_yt_player.h.clear = function() {
    this.B.clear();
    _yt_player.Id(this.F);
    this.l = {}
};


_yt_player.h.yj = function() {
    var a = this.Hj();
    A2.ba.yj.call(this);
    a || this.dispatchEvent("resize");
    if (this.M) {
        a = this.width;
        var b = this.height;
        "string" == typeof a && -1 != a.indexOf("%") && "string" ==
            typeof b && -1 != b.indexOf("%") && this.I.U(
                $va(), "tick", this.wq);
        this.wq()
    }
};


_yt_player.h.ql = function() {
    A2.ba.ql.call(this);
    this.M && this.I.Ea($va(), "tick", this.wq)
};


_yt_player.h.V = function() {
    delete this.l;
    delete this.F;
    delete this.B;
    this.I.dispose();
    delete this.I;
    A2.ba.V.call(this)
};


_yt_player.q(G2, _yt_player.sV);
_yt_player.h = G2.prototype;
_yt_player.h.load = function() {
    _yt_player.sV.prototype.load.call(this);
    if (!H2(_yt_player.Y(this.g).playerStyle)) {
        var a = this.g.getVideoData();
        if (a = a.cj ? null : a.qb && a.qb.endscreen && a.qb.endscreen
            .endscreenRenderer || null) a = F2(a, this.M ?
            "new" : "current"), I2(this, a);
        else {
            var b = this.g.getVideoData();
            a = b.videoId;
            this.B && this.B.abort();
            a = {
                method: "POST",
                wd: (0, _yt_player.z)(this.FR, this, a),
                ad: {
                    v: a
                },
                withCredentials: !0
            };
            "gaming" == _yt_player.Y(this.g).playerStyle && (a.ad.gaming =
                "1");
            this.M && (a.ad.ptype = "embedded");
            var c = this.g.getVideoData().Jy;
            c && (a.Ob = {
                ad_tracking: c
            });
            if (b = _yt_player.LO(b))
                if (b = _yt_player.Mc(b), b = _yt_player.Jc(b)) this.B =
                    _yt_player.nE(b, a)
        }
    }
};


_yt_player.h.unload = function() {
    I2(this, null);
    this.B && (this.B.abort(), this.B = null);
    _yt_player.sV.prototype.unload.call(this)
};


_yt_player.h.CM = function(a, b) {
    if (!H2(_yt_player.Y(this.g).playerStyle)) return null;
    if ("loadCustomEndscreenRenderer" == a) {
        var c = F2(b, "new");
        I2(this, c);
        return !0
    }
    return null
};


_yt_player.h.DM = function() {
    return H2(_yt_player.Y(this.g).playerStyle) ? [
        "loadCustomEndscreenRenderer"
    ] : []
};


_yt_player.h.FR = function(a, b) {
    var c = this.B = null;
    if (200 == b.status) {
        var d = b.responseText;
        ")]}" == d.substring(0, 3) && (d = d.substring(3), c = JSON.parse(
            d), c = F2(c, this.M ? "new" : "current"))
    }
    I2(this, c)
};


_yt_player.h.XA = function() {
    if (this.o && this.o.elements) {
        var a = this.g.nB();
        if (a && 0 != a.width && 0 != a.height) {
            var b = this.g.ju();
            if (b && 0 != b.width && 0 != b.height) {
                var c = a.width / a.height;
                var d = 0;
                for (var e = -1, f = 0; f < kza.length; f++) {
                    var k = Math.abs(b.width - kza[f]);
                    if (-1 == e || d >= k) e = f, d = k
                }
                d = lza[e];
                this.A && _yt_player.ph(this.A.element, "outline-width",
                    Math.max(b.width, b.height) + "px");
                for (b = 0; b < this.o.elements.length;
                    ++b)
                    if (f = this.o.elements[b].id, e = this.l[f], k = this
                        .F[f], e && k) {
                        var l = k.width * c / k.aspectRatio;
                        f = Math.round(l * a.height);
                        var m =
                            a.left + Math.round(k.left * a.width),
                            n = a.top + Math.round(k.top * a.height);
                        _yt_player.Jh(e.element, Math.round(k.width * a
                            .width), f);
                        _yt_player.wh(e.element, m, n);
                        _yt_player.nq(e.element, mza);
                        m = k.left + k.width / 2;
                        k = k.top + l / 2;
                        _yt_player.S(e.element, .5 >= m && .5 >= k ?
                            "ytp-ce-top-left-quad" : .5 < m && .5 >= k ?
                            "ytp-ce-top-right-quad" : .5 >= m && .5 <
                            k ? "ytp-ce-bottom-left-quad" :
                            "ytp-ce-bottom-right-quad");
                        _yt_player.nq(e.element, lza);
                        _yt_player.S(e.element, d);
                        (e = _yt_player.qd(window.document, "div",
                            "ytp-ce-expanding-overlay-body", e.element)[
                            0]) && _yt_player.ph(e, "height", f + "px")
                    }
            }
        }
    }
};


_yt_player.h.EM = function(a) {
    if (this.o)
        if ("ytp-ce-in-endscreen" == a.getId()) this.J = !1, this.o.skip &&
            1 == this.g.Bh() ? (_yt_player.XU(this
                .g, !0), this.g.ac(window.Infinity), this.J = !0) : (L2(
                this, this.o.impressionUrls), (a =
                _yt_player.MG()) && D2(a, this.o.visualElement));
        else if (!this.J) {
        a = a.getId().substring(15);
        var b = this.l[a],
            c = this.F[a];
        _yt_player.S(b.element, "ytp-ce-element-show");
        b.element.removeAttribute("aria-hidden");
        b = this.g.getRootNode();
        _yt_player.S(b, "ytp-ce-shown");
        L2(this, c.impressionUrls);
        (b = _yt_player.MG()) && D2(b, c.visualElement);
        _yt_player.Y(this.g).zb && this.g.va("endscreenelementshown",
            a)
    }
};


_yt_player.h.FM = function(a) {
    if ("ytp-ce-in-endscreen" != a.getId() && !this.J) {
        a = a.getId().substring(15);
        var b = this.l[a];
        _yt_player.mq(b.element, "ytp-ce-element-show");
        b.element.setAttribute("aria-hidden", !0);
        b = this.g.getRootNode();
        _yt_player.mq(b, "ytp-ce-shown");
        _yt_player.Y(this.g).zb && this.g.va("endscreenelementhidden", a)
    }
};


_yt_player.h.RU = function(a) {
    var b = this;
    a.target === window && (new _yt_player.Yt(function() {
            for (var a in b.l) _yt_player.nq(b.l[a].element, [
                "ytp-ce-force-expand",
                "ytp-ce-element-hover",
                "ytp-ce-element-shadow-show"
            ])
        },
        0)).start()
};


_yt_player.h.HC = function(a, b) {
    if (a.targetUrl && (!b || "keypress" != b.type || 13 == b.keyCode)) {
        for (var c = b.target; c && !_yt_player.kq(c, "ytp-ce-element");) {
            _yt_player.kq(c, "subscribe-label") && M2(this, a);
            if (_yt_player.kq(c, "ytp-ce-channel-subscribe")) return;
            c = _yt_player.Pd(c)
        }
        if (!c || _yt_player.kq(c, "ytp-ce-element-hover")) {
            b.preventDefault();
            b.stopPropagation();
            if (c = this.l[a.id]) this.Ru(c, a), c.element.blur();
            b.ctrlKey || b.metaKey || "new" == a.mq ? (M2(this, a), this
            .aE(), this.g.hd(), c = _yt_player.Mc(a
                .targetUrl), c = _yt_player.Jc(c), _yt_player.vV(c,
                void 0, a.Rd)) : (c = (0, _yt_player.z)(this
                .aE, this, _yt_player.Ga(_yt_player.uV, a.targetUrl,
                    a.Rd)), M2(this, a, c))
        }
    }
};


_yt_player.h.Ut = function(a, b) {
    _yt_player.kq(a.element, "ytp-ce-element-hover") || ("VIDEO" == b
        .type || "PLAYLIST" == b.type ? _yt_player.S(a
            .element, "ytp-ce-element-hover") : _yt_player.Y(this.g).l ?
        (new _yt_player.Yt(function() {
                _yt_player.S(a.element, "ytp-ce-element-hover")
            },
            200)).start() : _yt_player.S(a.element,
            "ytp-ce-element-hover"), L2(this, b.MK), K2(this, b.id, !0))
};


_yt_player.h.Ru = function(a, b) {
    _yt_player.mq(a.element, "ytp-ce-element-hover");
    _yt_player.mq(a.element, "ytp-ce-force-expand");
    K2(this, b.id, !1)
};


_yt_player.h.aE = function(a) {
    this.g.Ni(17, a)
};


var kza = [346, 426, 470, 506, 570, 640, 853, 1280, 1920],
    lza =
    "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920"
    .split(" "),
    mza = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad",
        "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"
    ];
var mwa = {
    jZ: "current",
    FH: "new"
};


var owa = {
        CLOSE: "close",
        u1: "openUrl",
        kI: "subscribe"
    },
    pwa = {
        Pq: "click",
        CLOSE: "close",
        y_: "hidden",
        q2: "rollOut",
        WH: "rollOver",
        aI: "shown"
    };
var swa = {
    I4: "xx",
    J4: "xy",
    P4: "yx",
    Q4: "yy"
};


_yt_player.q(ywa, Z2);
var Ewa = {
    rG: "anchored",
    c2: "rect",
    E2: "shapeless"
};


var Jwa = {
    CLOSED: "closed",
    F1: "playerControlShow",
    WH: "rollOver",
    aI: "shown"
};


a3.prototype.Ta = function() {
    var a = Swa(this, function(a) {
        return "openUrl" == a.type && null != a.url
    });
    return a ? a.url : null
};


a3.prototype.showLinkIcon = function() {
    return c3(this, function(a) {
        return null != a.url && a.url.showLinkIcon
    })
};


var b3 = {
        rG: "anchored",
        uG: "branding",
        CHANNEL: "channel",
        iZ: "cta",
        B_: "highlightText",
        d0: "label",
        PLAYLIST: "playlist",
        Q1: "popup",
        T2: "speech",
        kI: "subscribe",
        u3: "title",
        VIDEO: "video",
        y4: "vote",
        B4: "website"
    },
    Owa = {
        uG: "branding",
        FY: "card",
        LZ: "drawer",
        A_: "highlight",
        B0: "marker",
        V1: "promotion",
        TEXT: "text",
        E4: "widget"
    },
    Pwa = {
        t4: "video_relative",
        G1: "player_relative"
    };
Ywa.prototype.A = function(a, b, c, d) {
    this.g[a] = b ? !c : c;
    a = _yt_player.Ob(this.g, function(a) {
        return a
    });
    this.o != a && (this.o = a, this.l.R(this.B, a, d))
};


f3.prototype.la = function() {
    return this.B
};


f3.prototype.o = function() {};
var j3 = {
    bevel: 1,
    dropshadow: 2
};


_yt_player.q(l3, f3);
l3.prototype.o = function(a, b) {
    var c = e3(a);
    if (c) {
        var d = $2(c, b);
        if (!(0 >= d.width || 0 >= d.height)) {
            var e;
            if (e = (c = (c = Vwa(a)) && c.g ? c.g : null) && c.length ? c[
                    0] : null) {
                var f = _yt_player.gh(uwa(b, vwa(e, new _yt_player.bh(e.F, e
                        .H, e.Qk, e.o), b.g))),
                    k = d.clone();
                c = new _yt_player.bh(f.x, f.y, 1, 1);
                var l = Math.max(k.left + k.width, c.left + c.width),
                    m = Math.max(k.top + k.height, c.top + c.height);
                k.left = Math.min(k.left, c.left);
                k.top = Math.min(k.top, c.top);
                k.width = l - k.left;
                k.height = m - k.top;
                c = a.l;
                k = k3(k, c.effects);
                l = g3(this, k.width, k.height);
                m = fxa(c, k.width, k.height,
                    this.g);
                d = new _yt_player.bh(d.left - k.left, d.top - k.top, d
                    .width, d.height);
                var n = new _yt_player.hd(f.x - k.left, f.y - k.top);
                this.A = 17 * Y2(b.g, e.l, e.g ? e.g : "xy");
                e = c.cornerRadius;
                f = a.l;
                var p = this.g && d3(a),
                    r = p ? f.borderWidth + 1 : f.borderWidth;
                p = (f = r ? new x2(r, p ? f.l : f.borderColor) : null) ? f
                    .Cb() / 2 : 0;
                r = hxa(d, n);
                var v = this.C(d, e, n, r),
                    D = n.x;
                n = n.y;
                var H = d.width,
                    L = d.height,
                    T = d.left;
                d = d.top;
                var ha = new v2;
                ha.moveTo(T + e + p, d + p);
                "t" == r && (ha.Ec(v.start, d + p), ha.Ec(D, n), ha.Ec(v
                    .end, d + p));
                ha.Ec(T + H - e - p, d + p);
                w2(ha, e, e, -90);
                "r" == r && (ha.Ec(T + H - p, v.start),
                    ha.Ec(D, n), ha.Ec(T + H - p, v.end));
                ha.Ec(T + H - p, d + L - e - p);
                w2(ha, e, e, 0);
                "b" == r && (ha.Ec(v.end, d + L - p), ha.Ec(D, n), ha.Ec(v
                    .start, d + L - p));
                ha.Ec(T + e + p, d + L - p);
                w2(ha, e, e, 90);
                "l" == r && (ha.Ec(T + p, v.end), ha.Ec(D, n), ha.Ec(T + p,
                    v.start));
                ha.Ec(T + p, d + e + p);
                w2(ha, e, e, 180);
                ha.close();
                B2(l, ha, f, m);
                if (m = this.la()) _yt_player.S(m, "annotation-shape"),
                    _yt_player.S(m, "annotation-speech-shape"),
                    _yt_player.wh(m, k.left, k.top), _yt_player.Jh(m, k
                        .width, k.height), gxa(l, m, c.effects)
            }
        }
    }
};


l3.prototype.C = function(a, b, c, d) {
    function e(a, c, d, e) {
        a = Math.min(Math.max(e - 2 * b, 0), a);
        c = _yt_player.dd(c - a / 2, d + b, d + e - a - b);
        return new Y1(c, c + a)
    }
    return "t" == d || "b" == d ? e(this.A, c.x, a.left, a.width) : "l" ==
        d || "r" == d ? e(this.A, c.y, a.top, a
            .height) : new Y1(0, 0)
};


_yt_player.q(m3, f3);
m3.prototype.o = function(a, b) {
    var c = e3(a);
    if (c) {
        var d = $2(c, b);
        if (!(0 >= d.width || 0 >= d.height)) {
            var e = a.l;
            c = k3(d, e.effects);
            var f = g3(this, c.width, c.height),
                k = new _yt_player.bh(0, 0, d.width, d.height),
                l = e.cornerRadius;
            d = new x2(!e.o && this.g ? 1 : e.o, e.bgColor);
            var m = new r2("#000", 0),
                n = d ? d.Cb() / 2 + 1 : 0;
            k = exa(k, l, n);
            B2(f, k, d, m);
            f = this.la();
            _yt_player.S(f, "annotation-shape");
            e = e.g;
            _yt_player.Mh(f, this.g ? Math.max(e, .9) : e);
            _yt_player.wh(f, c.left, c.top);
            _yt_player.Jh(f, c.width, c.height)
        }
    }
};


_yt_player.q(n3, f3);
n3.prototype.o = function(a, b) {
    var c = e3(a);
    if (c) {
        var d = $2(c, b);
        if (!(0 >= d.width || 0 >= d.height)) {
            c = a.l;
            var e = k3(d, c.effects),
                f = g3(this, e.width, e.height),
                k = new _yt_player.bh(0, 0, d.width, d.height);
            d = fxa(c, d.width, d.height, this.g);
            var l = c.cornerRadius;
            var m = a.l;
            var n = this.g && d3(a),
                p = n ? m.borderWidth + 1 : m.borderWidth;
            n = (m = p ? new x2(p, n ? m.l : m.borderColor) : null) ? m
            .Cb() / 2 + 1 : 0;
            k = exa(k, l, n);
            B2(f, k, m, d);
            if (k = this.la()) _yt_player.S(k, "annotation-shape"),
                _yt_player.S(k, "annotation-popup-shape"),
                _yt_player.wh(k, e.left, e.top), _yt_player.Jh(k, e.width, e
                    .height), gxa(f,
                    k, c.effects)
        }
    }
};


_yt_player.q(o3, l3);
o3.prototype.C = function(a, b, c, d) {
    function e(a, c, d, e) {
        a = Math.min(Math.max(e - 2 * b, 0), a);
        c = c <= d + e / 2 ? Math.max(d + e / 4 - a / 2, d + b) : Math.min(
            d + 3 * e / 4 - a / 2, d + e - a - b);
        return new Y1(c, c + a)
    }
    return "t" == d || "b" == d ? e(this.A, c.x, a.left, a.width) : "l" ==
        d || "r" == d ? e(this.A, c.y, a.top, a
            .height) : new Y1(0, 0)
};


_yt_player.q(p3, _yt_player.M);
_yt_player.h = p3.prototype;
_yt_player.h.AB = function() {
    this.H || (this.A && _yt_player.O(this.A, !0), this.B && _yt_player.O(
            this.B, !0), this.o && (this.o.g = !0,
            _yt_player.Mh(this.l, t3(this) ? 1 : 0), this.o.o(this.g,
                r3(this))), this.F.isActive() && this.F
        .stop(), this.H = !0, this.I = this.W.xh(_yt_player.VU(this.C),
            "mouseleave",
            function(a) {
                this.wp.stop();
                this.Ih(a)
            }))
};


_yt_player.h.Ih = function() {
    this.H && (this.M ? this.F.start() : this.Kz(), this.o && (this.o.g = !
            1, _yt_player.Mh(this.l, t3(this) ? 1 :
                0), this.o.o(this.g, r3(this))), this.H = !1, this.I &&
        (this.W.Ea(this.I), this.I = null))
};


_yt_player.h.Kz = function() {
    this.A && _yt_player.O(this.A, !1);
    this.B && _yt_player.O(this.B, !1)
};


_yt_player.h.KO = function(a) {
    this.Y = a;
    this.wp.Kj()
};


_yt_player.h.JO = function() {
    var a = this.Y,
        b = new _yt_player.hd(a.clientX, a.clientY),
        c = _yt_player.Ch(this.C.getRootNode()),
        d = lxa(c, this.K);
    c = (this.B && _yt_player.Nh(this.B) || this.A && _yt_player.Nh(this
        .A)) && lxa(c, this.M);
    d && d.contains(b) || c && c.contains(b) ? this.AB(a) : this.Ih(a)
};


_yt_player.h.show = function() {
    var a = this.g.l;
    a = (a && 0 == a.g || "title" == this.g.style || "highlightText" == this
        .g.style ? !1 : !0) && !this.o;
    var b = !this.l,
        c = "widget" == this.g.type;
    if (a) {
        var d = r3(this),
            e = null;
        "highlight" == this.g.type || "label" == this.g.style ? e = new m3 :
            "popup" == this.g.style ? e = new n3 :
            "anchored" == this.g.style ? e = new l3 : "speech" == this.g
            .style && (e = new o3);
        e && (e.o(this.g, d), this.o = e, d = e.la()) && (_yt_player.O(d, !
            1), _yt_player.S(d, "annotation-type-" +
            this.g.type.toLowerCase()), this.X(d))
    }
    if (b) {
        d = ["annotation"];
        "highlightText" != this.g.style ||
            d.push("annotation-no-mouse");
        d.push("annotation-type-" + this.g.type.toLowerCase());
        this.l = _yt_player.K("DIV", d);
        _yt_player.O(this.l, !1);
        this.g.A && (this.D = _yt_player.K("DIV", "inner-text"), "label" ==
            this.g.style && (_yt_player.S(this.D,
                    "label-text"), this.D.style.backgroundColor = this.g
                .l.bgColor), _yt_player.Sd(this.D, this.g
                .A), this.l.appendChild(this.D));
        _yt_player.aF(this.l, "annotation_id", this.g.id);
        this.X(this.l);
        ixa(this, this.l);
        if (d3(this.g) && this.g.showLinkIcon()) {
            if (e = this.g.Ta()) d = this.l, e = new _yt_player.vm(X2(e)), d
                .title = e.l + e.o;
            this.B = _yt_player.K("SPAN", "annotation-link-icon");
            _yt_player.O(this.B, !1);
            this.l.appendChild(this.B)
        }
        jxa(this);
        d3(this.g) || (this.l.style.cursor = "default")
    }
    c && "subscribe" == this.g.style && _yt_player.J(
        "yt-uix-subscription-button", this.l);
    if (a || b) {
        a: {
            a = this.g.segment.g;
            if (a.length && (a = Gwa(a[0]))) {
                a = a.B;
                break a
            }
            a = 0
        }
        this.l && (this.l.style.zIndex = a);
        this.o && this.o.la() && (this.o.la().style.zIndex = a)
    }
    _yt_player.O(this.l, !0);
    _yt_player.Mh(this.l, t3(this) ? 1 : 0);
    s3(this);
    this.o && this.o.la() && _yt_player.O(this.o.la(), !0)
};


_yt_player.h.hide = function() {
    this.l && _yt_player.O(this.l, !1);
    this.o && this.o.la() && _yt_player.O(this.o.la(), !1);
    this.J && (this.W.Ea(this.J), this.J = null)
};


_yt_player.q(u3, _yt_player.M);
_yt_player.h = u3.prototype;
_yt_player.h.hide = function() {
    this.isVisible = !1;
    this.view && (nxa(this), this.view.hide())
};


_yt_player.h.show = function() {
    this.isVisible = !0;
    this.view && (this.view.show(), this.l.subscribe("resize", this.zB,
        this), this.l.subscribe("onVideoAreaChange",
        this.mD, this))
};


_yt_player.h.destroy = function() {
    if (this.view) {
        nxa(this);
        var a = this.view;
        _yt_player.DF(a.W);
        a.wp.dispose();
        a.F.dispose();
        a.l && _yt_player.Kd(a.l);
        a.o && a.o.la() && _yt_player.Kd(a.o.la())
    }
    v3(this)
};


_yt_player.h.mD = function() {
    s3(this.view)
};


_yt_player.h.zB = function() {
    s3(this.view)
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
G3.prototype.o = function(a, b) {
    var c = _yt_player.Zd(b.target, "label");
    c && _yt_player.U(c, "iv-card-poll-choice-focused", a)
};


G3.prototype.D = function(a, b) {
    var c = _yt_player.$d(b.target, "iv-card-poll");
    if (c)
        if (a.A) _yt_player.J("iv-card-sign-in-button", c).click();
        else {
            var d = (0, window.parseInt)(Z1(b.target, "pollChoiceIndex"),
                10);
            if (null == a.g) a.choices[d].count++, a.g = d;
            else if (a.g != d) {
                var e = a.choices[a.g];
                e.count = Math.max(e.count - 1, 0);
                a.choices[d].count++;
                a.g = d
            } else e = a.choices[a.g], e.count = Math.max(e.count - 1, 0), a
                .g = null;
            Axa(a, c);
            _yt_player.rE(this.g.videoData.Of, {
                ad: {
                    action_poll_vote: 1
                },
                Ob: {
                    poll_id: a.id,
                    index: d,
                    session_token: a.H
                }
            });
            C3(this.g.logger, a.o,
                void 0, {
                    "link-id": d
                },
                a.l.click, 5);
            (c = _yt_player.MG()) && E2(c, a.C)
        }
};


G3.prototype.C = function(a) {
    var b = _yt_player.x(
            "yt.www.ypc.bootstrap.api.loadOffersForInnertubeRequestParams"),
        c;
    b && (c = function() {
        b(a.H, a.B)
    });
    Exa(this, a, !0, c)
};


G3.prototype.F = function(a) {
    var b = _yt_player.x("yt.www.ypc.bootstrap.api.loadOffers");
    b && (b = _yt_player.Ga(b, a.K, a.H, a.B));
    Exa(this, a, !1, b)
};


_yt_player.q(Q3, _yt_player.M);
_yt_player.h = Q3.prototype;
_yt_player.h.gq = function() {
    this.context.o.subscribe("resize", this.Fn, this)
};


_yt_player.h.la = function() {
    return this.Ga
};


_yt_player.h.Zi = function(a, b, c, d, e, f, k) {
    this.context.g.U(a, "click", _yt_player.Ga(this.Uo, b, c, d, e, f || [],
        k || 0), this);
    this.context.g.U(a, "touchstart", _yt_player.Ga(function() {
        this.Yv = !1
    }), this);
    this.context.g.U(a, "touchmove", _yt_player.Ga(function() {
        this.Yv = !0
    }), this)
};


_yt_player.h.Uo = function(a, b, c, d, e, f, k) {
    if (this.Yv) return !1;
    k && (k.stopPropagation(), k.preventDefault());
    Mxa(this, a, c, d, e, f);
    return !1
};


_yt_player.h.show = function() {
    this.Y = (0, _yt_player.F)()
};


_yt_player.h.hide = function() {};
_yt_player.h.destroy = function() {
    _yt_player.Kd(this.la())
};


_yt_player.h.Fn = function() {};
_yt_player.q(U3, Q3);
_yt_player.h = U3.prototype;
_yt_player.h.isAvailable = function() {
    var a;
    if (a = !!this.o.length)(a = this.g.getRootNode()) ? (a = _yt_player.Kh(
            a), a = 173 < a.width && 173 < a
        .height) : a = !1;
    return a
};


_yt_player.h.Fn = function() {
    var a = this.isAvailable();
    _yt_player.O(this.la(), a);
    _yt_player.U(this.context.l.getRootNode(), "ytp-iv-drawer-enabled", a);
    U1(this.g)
};


_yt_player.h.destroy = function() {
    var a = _yt_player.NU(this.g).B;
    a && a.St(!1, void 0);
    this.g.getRootNode().removeChild(this.D);
    _yt_player.VF(this.ha);
    _yt_player.sF(this.X);
    this.Z && this.Z.dispose();
    this.F && this.F.dispose();
    Q3.prototype.destroy.call(this)
};


_yt_player.h.ZM = function(a) {
    this.J.start();
    a.preventDefault();
    a = a || window.event;
    var b = 0;
    "MozMousePixelScroll" == a.type ? b = 0 == (a.axis == a
        .HORIZONTAL_AXIS) ? a.detail : 0 : window.opera ? b = a
        .detail : b = 0 == a.wheelDelta % 120 ? "WebkitTransform" in window
        .document.documentElement.style ? window
        .chrome && 0 == window.navigator.platform.indexOf("Mac") ? a
        .wheelDeltaY / -30 : a.wheelDeltaY / -1.2 : a
        .wheelDelta / -1.6 : a.wheelDeltaY / -3;
    if (a = b) this.A.scrollTop += a
};


_yt_player.h.kE = function(a) {
    if (!_yt_player.kq(this.g.getRootNode(), "ytp-cards-teaser-shown")) {
        this.l != a && (this.l = a, V3(this));
        if (_yt_player.Nh(this.la())) {
            if (2 == this.context.l.Qa()) var b = 1 == ((0, window.isNaN)(
                void 0) ? this.context.l.gB() : void 0);
            else b = (0, window.isNaN)(void 0) ? this.context.l.Bh() :
                void 0, b = 1 == b || 0 == b && 0 === this
                .context.l.getCurrentTime();
            if (b && a.hc.teaserDurationMs) {
                b = {
                    teaserText: a.hc.teaserText,
                    durationMs: a.hc.teaserDurationMs
                };
                var c = _yt_player.NU(this.g).B;
                c && c.St(!0, b)
            }
        }
        this.na.isActive() || ((!this.B || !this.J.isActive() &&
            this.T) && Wxa(this, a), this.na.start(910 + a.hc
            .teaserDurationMs))
    }
};


_yt_player.h.MV = function(a) {
    this.B || (this.l = a, V3(this), Wxa(this, a), S3(this,
        "YOUTUBE_DRAWER_AUTO_OPEN", !1, a))
};


_yt_player.h.fJ = function() {
    if (this.B) {
        E3(this.context.logger, this.M, 4, W3(this).l.close);
        var a = _yt_player.MG();
        a && this.I && E2(a, this.I);
        T3(this)
    }
};


_yt_player.h.qJ = function() {
    _yt_player.U(this.D, "iv-drawer-scrolled", 0 < this.A.scrollTop)
};


_yt_player.h.YL = function() {
    var a = W3(this);
    F3(this.context.logger, 8, a.o, a.l.dW);
    var b = _yt_player.MG();
    b && a && (D2(b, a.F), D2(b, a.D))
};


_yt_player.h.XL = function(a) {
    var b = W3(this),
        c = _yt_player.MG();
    this.l ? a ? (a = this.context.logger, F3(a, 9, b.o, b.l.Dv), a.g.Ni(4,
        void 0), c && E2(c, b.F)) : (a = this
        .context.logger, F3(a, 12, b.o, b.l.Dv), a.g.Ni(4, void 0), c &&
        E2(c, b.D)) : (a = this.context.logger,
        E3(a, this.M, 12, b.l.Dv), a.g.Ni(4, void 0), c && this.ga &&
        E2(c, this.ga))
};


var Nxa = {
    collaborator: oxa,
    donation: pxa,
    episode: x3,
    movie: x3,
    playlist: qxa,
    poll: rxa,
    productListing: txa,
    simple: w3,
    tip: uxa,
    video: vxa
};


_yt_player.q(X3, Q3);
X3.prototype.gq = function() {
    Q3.prototype.gq.call(this);
    Xxa(this)
};


_yt_player.q(Y3, X3);
_yt_player.h = Y3.prototype;
_yt_player.h.UV = function(a, b, c, d) {
    this.o.stop();
    if (!this.A) {
        var e = _yt_player.Kh(a);
        this.g || (_yt_player.Ih(a, e.width), _yt_player.Ih(b, e.width));
        _yt_player.ph(c, "top", e.height - Math.max(Math.min(e.height, d) /
            2 + 10, 20) + "px");
        _yt_player.ph(c, "right", "1px");
        this.A = !0;
        _yt_player.O(a, !0);
        this.B = new _yt_player.Yt(function() {
                _yt_player.S(this.la(), "iv-branding-active")
            },
            0, this);
        this.B.start()
    }
};


_yt_player.h.JK = function(a, b) {
    _yt_player.mq(this.la(), "iv-branding-active");
    this.C = new _yt_player.Yt((0, _yt_player.z)(function() {
            _yt_player.O(a, !1);
            this.g || _yt_player.Ih(b, 0)
        },
        this), 250);
    this.C.start();
    this.A = !1
};


_yt_player.h.show = function() {
    if (!this.isActive) {
        X3.prototype.show.call(this);
        if (!this.D) {
            _yt_player.S(this.la(), "iv-branding");
            var a = this.annotation.data;
            this.F = a.image_width;
            this.l = _yt_player.K("IMG", {
                src: a.image_url,
                "class": "branding-img iv-click-target",
                width: a.image_width,
                height: a.image_height
            });
            _yt_player.O(this.l, !1);
            var b = _yt_player.K("DIV", "branding-img-container", this.l);
            this.la().appendChild(b);
            var c = _yt_player.K("DIV", "iv-branding-context-name");
            _yt_player.Sd(c, a.channel_name);
            var d = _yt_player.K("DIV", "iv-branding-context-subscribe");
            if (b = a.standalone_subscribe_button_data) this.g =
                new _yt_player.y_(b.subscribeText, b.subscribeCount, b
                    .unsubscribeText, b.unsubscribeCount, !!b
                    .enabled, !!b.classic, a.channel_id, !!b.subscribed, b
                    .feature, a.session_data.itct, b
                    .signinUrl, this.H.l), this.g.ua(d);
            b = _yt_player.K("DIV", "iv-branding-context-subscribe-caret");
            c = _yt_player.K("DIV", "branding-context-container-inner", b,
                c, d);
            _yt_player.O(c, !1);
            d = _yt_player.K("DIV", "branding-context-container-outer", c);
            _yt_player.ph(d, "right", this.F + "px");
            this.la().appendChild(d);
            var e = this.annotation.Ta();
            e && this.Zi(this.l, e, this.annotation.id, a.session_data, this
                .annotation.g);
            this.o = new _yt_player.Yt(_yt_player.Ga(this.JK, c, d), 500,
                this);
            _yt_player.N(this, this.o);
            this.context.g.U(this.la(), "mouseover", (0, _yt_player.z)(this
                .UV, this, c, d, b, a.image_height));
            this.context.g.U(this.la(), "mouseout", (0, _yt_player.z)(this.o
                .start, this.o, void 0));
            this.D = !0
        }
        B3(this.context.logger, this.annotation.g);
        _yt_player.O(this.la(), !0);
        this.isActive = !0;
        if (this.l) {
            a = this.l;
            var f = void 0 === f ? 0 : f;
            b = _yt_player.Lh(a).width;
            c = _yt_player.ua(void 0) ? void 0 : b;
            _yt_player.wh(a, c);
            f = new f2(a, [c, a.offsetTop], [c - b - f, a.offsetTop], 200,
                Gva);
            _yt_player.N(this, f);
            this.context.A.U(f, "begin", _yt_player.Ga(_yt_player.O,
                a, !0));
            f.play()
        }
    }
};


_yt_player.h.hide = function() {
    this.isActive && (_yt_player.O(this.la(), !1), this.isActive = !1)
};


_yt_player.h.destroy = function() {
    this.g && (this.g.dispose(), this.g = null);
    X3.prototype.destroy.call(this)
};


_yt_player.q(Z3, X3);
_yt_player.h = Z3.prototype;
_yt_player.h.show = function() {
    this.isActive || (X3.prototype.show.call(this), this.I || (Yxa(this),
            this.I = !0), _yt_player.O(this.la(), !0),
        this.annotation && this.annotation.g && B3(this.context.logger,
            this.annotation.g), _yt_player.tg(
            function() {
                _yt_player.mq(this.la(), "iv-promo-inactive")
            },
            100, this), this.la().removeAttribute("aria-hidden"), this
        .isActive = !0, $3(this), $xa(this), aya(
            this, this.F))
};


_yt_player.h.hide = function() {
    this.isActive && (_yt_player.S(this.la(), "iv-promo-inactive"), this
        .isActive = !1, this.la().setAttribute(
            "aria-hidden", !0))
};


_yt_player.h.Uo = function(a, b, c, d, e, f, k) {
    return this.B ? !1 : X3.prototype.Uo.call(this, a, b, c, d, e, f, k)
};


_yt_player.h.ys = function(a, b) {
    b.stopPropagation();
    $xa(this);
    aya(this, a);
    this.g.focus()
};


_yt_player.h.fK = function(a) {
    this.H = !0;
    this.ys(500, a)
};


_yt_player.h.eK = function() {
    this.H = !1;
    Zxa(this)
};


_yt_player.h.LO = function(a) {
    a.stopPropagation();
    this.hide();
    D3(this.context.logger, this.annotation.g)
};


_yt_player.h.UJ = function(a) {
    a.stopPropagation();
    $3(this);
    this.B = !0;
    _yt_player.S(this.la(), "iv-promo-collapsed-no-delay");
    this.C.start();
    D3(this.context.logger, this.annotation.g)
};


_yt_player.h.destroy = function() {
    this.C.dispose();
    X3.prototype.destroy.call(this)
};


_yt_player.q(a4, _yt_player.sV);
_yt_player.h = a4.prototype;
_yt_player.h.wM = function(a, b) {
    if (!cya(_yt_player.Y(this.g).playerStyle)) return null;
    switch (a) {
        case "loadCustomAnnotationsXml":
            var c = _yt_player.Vr(b);
            c && c4(this, c);
            return !0;
        case "removeCustomAnnotationById":
            return b && this.l && (Pxa(this.l, b), U1(this.g)), !0
    }
    return null
};


_yt_player.h.xM = function() {
    return cya(_yt_player.Y(this.g).playerStyle) ? [
        "loadCustomAnnotationsXml", "removeCustomAnnotationById"
    ] : []
};


_yt_player.h.Tu = function() {
    if (this.C) {
        var a = _yt_player.W_(_yt_player.VU(this.g), !0);
        _yt_player.Jh(this.C.element, a.width, a.height);
        _yt_player.wh(this.C.element, a.left, a.top)
    }
    if (this.l) {
        var b = _yt_player.eV(this.g);
        a = this.l;
        b = b.width;
        _yt_player.U(a.D, "iv-drawer-small", 426 >= b);
        _yt_player.U(a.D, "iv-drawer-big", 1280 <= b)
    }
};


_yt_player.h.fT = function(a) {
    _yt_player.Y(this.g).experiments.g(
            "web_player_update_annotations_module_visibility_killswitch") ||
        this.Pc(a
            .state);
    _yt_player.X(a.state, 2) && (this.Vl() && this.WA() && 2 != this.g
    .Qa() && this.Tt(!1), this.St(!1))
};


_yt_player.h.load = function() {
    _yt_player.sV.prototype.load.call(this);
    _yt_player.Y(this.g).experiments.g(
            "web_player_update_annotations_module_visibility_killswitch") ?
        this.A
        .show() : this.Pc(_yt_player.UU(this.g));
    this.I++;
    var a = this.g.getVideoData(),
        b = a.videoId,
        c = (0, _yt_player.z)(this.JR, this, b, this.I),
        d = (0, _yt_player.z)(function() {
                this.D = null
            },
            this);
    _yt_player.nG() && (c = jya(this, c));
    c = {
        format: "XML",
        wd: c,
        onError: d,
        ad: {}
    };
    a.isPharma && (c.ad.pharma = "1");
    c.method = "POST";
    c.withCredentials = !0;
    d = _yt_player.Y(this.g);
    "gaming" == d.playerStyle && (c.ad.gaming = "1");
    (b = d.C.get(b)) && kya(c, b);
    b = b && (b.Zh || b.tr);
    if (!a.xn || b) a.Of ? dya(this, a.Of, c) : (this.B = (0, _yt_player.z)(
            this.BM, this, c), this.g
        .addEventListener("videodatachange", this.B));
    _yt_player.mV(this.g, this.C.element, 4);
    this.Tu()
};


_yt_player.h.Pc = function(a) {
    a = !_yt_player.xP(a) && !_yt_player.X(a, 1024);
    _yt_player.sH(this.A, a);
    _yt_player.sH(this.C, a)
};


_yt_player.h.BM = function(a) {
    var b = this.g.getVideoData();
    b.Of && (this.B && (this.g.removeEventListener("videodatachange", this
        .B), this.B = null), dya(this, b.Of, a))
};


_yt_player.h.unload = function() {
    xxa(this.Ya);
    _yt_player.kV(this.g, "annotations_module");
    _yt_player.Lb(this.o, function(a) {
        a.destroy()
    });
    _yt_player.Lb(this.K, function(a) {
        a.destroy()
    });
    this.H = null;
    this.l && (this.l.destroy(), this.l = null, U1(this.g));
    this.J = !1;
    this.D && (this.D.abort(), this.D = null);
    this.o = {};
    this.K = {};
    this.A.hide();
    _yt_player.sV.prototype.unload.call(this);
    _yt_player.rH(this.C);
    this.B && (this.g.removeEventListener("videodatachange", this.B), this
        .B = null)
};


_yt_player.h.JR = function(a, b, c) {
    this.D = null;
    if (!fya(this, b, a) && (a = _yt_player.WD(c) && c.responseXML ? c
            .responseXML : null)) {
        c4(this, a);
        _yt_player.S(this.g.getRootNode(), "iv-module-loaded");
        a = [];
        for (var d in this.o) {
            b = this.o[d].annotation;
            if (b.segment)
                if (c = b.segment, c.g.length)
                    if (c = c.g[0].l || c.g[0].g || c.g[0].o, !c || 2 > c
                        .length) c = null;
                    else {
                        var e = c.length - 1;
                        c = 0 >= c[0].t && 0 >= c[e].t ? null : {
                            start: c[0].t,
                            end: c[e].t
                        }
                    }
            else c = null;
            else c = null;
            if (e = c)
                if (c = 1E3 * e.start, e = 1E3 * e.end, 0 == c && (c++,
                    e++), !(e < c)) {
                    var f = {
                        id: d,
                        namespace: "annotations_module"
                    };
                    "marker" == b.type && (f.style = "ytp-chapter-marker", f
                        .tooltip = b.A, f.visible = !0);
                    b = new _yt_player.eQ(c, e, f);
                    a.push(b)
                }
        }
        _yt_player.hV(this.g, a)
    }
};


_yt_player.h.lD = function(a) {
    a == this.g.getVideoData().videoId && (this.loaded ? lya(this) : this
        .load())
};


_yt_player.h.yM = function(a) {
    a = a.getId();
    var b = this.o[a];
    b && !b.o && (b = b.annotation, oya(this, a), B3(this.Ya, b.g))
};


_yt_player.h.zM = function(a) {
    d4(this, a.getId())
};


_yt_player.h.Iz = function(a) {
    a && (a.hide(), e4(this, "shown", !1, a.annotation.id), this.Xn(a
        .annotation, "hidden"))
};


_yt_player.h.CE = function(a) {
    a && (a.show(), e4(this, "shown", !0, a.annotation.id), this.Xn(a
        .annotation, "shown"))
};


_yt_player.h.wU = function(a, b, c) {
    var d = this.o[a];
    if (d && b.value != c) {
        b.value = c;
        var e = !1;
        Twa(d.annotation, function(a) {
            e = e || a.value
        });
        pya(this, a, b, e)
    }
};


_yt_player.h.vQ = function(a) {
    if (a && a.id) {
        var b = a.Ta();
        if (b) {
            var c = X2(b);
            if (c) {
                var d = (0, _yt_player.z)(this.Xn, this, a, "click");
                if ("new" == P3(c, b.target) || qya(this, b)) d(), d = null;
                C3(this.Ya, a.g, d)
            }
        }
    }
};


_yt_player.h.Xn = function(a, b) {
    Rwa(a, function(c) {
            if (c.trigger == b && "openUrl" == c.type && c.url) {
                var d = this.g.getVideoData(),
                    e;
                if (!(e = !qya(this, c.url))) {
                    e = Jxa(c.url);
                    var f = Ixa(c.url);
                    e ? (d.videoId == e ? this.g.ac(f || 0) : (d = b4(
                                this).l, _yt_player.H0(d.app, e,
                                void 0,
                                void 0, void 0, void 0, void 0),
                            f && b4(this).l.gd() && b4(this).l.ac(f)
                            ),
                        d = !0) : d = !1;
                    e = !d
                }
                e && (e = _yt_player.Y(this.g), (d = X2(c.url)) ? (f =
                        Hxa(d), e && "com" == f[0] && "google" ==
                        f[1] && "plus" == f[2] && (e = _yt_player
                            .Ga(Kxa, e.pageId, e.Sc), d =
                            new _yt_player.vm(d), _yt_player.zm(d,
                                e(d.o)), d = d.toString())) : d =
                    null,
                    d && (this.g.hd(),
                        c = P3(d, c.url.target), e = a.itct, "ei" in
                        _yt_player.dE(d) && (d = _yt_player.Vg(
                            d, "ei")), _yt_player.vV(d, "current" ==
                            c ? "_top" : void 0, {
                                itct: e
                            })))
            }
        },
        this)
};


_yt_player.h.SR = function() {
    e4(this, "playerControlShow", !1)
};


_yt_player.h.bU = function() {
    e4(this, "playerControlShow", !0)
};


_yt_player.h.AM = function(a) {
    e4(this, "rollOver", !0, a.id)
};


_yt_player.h.Ih = function(a) {
    e4(this, "rollOver", !1, a.id)
};


_yt_player.h.bR = function(a) {
    a && a.id && (this.o[a.id].o = !0, d4(this, a.id), D3(this.Ya, a.g),
        this.Xn(a, "close"), e4(this, "closed", !0,
            a.id))
};


_yt_player.h.Vl = function() {
    return !!this.l && this.l.isAvailable()
};


_yt_player.h.WA = function() {
    this.Vl();
    return !!this.l && this.l.B
};


_yt_player.h.Tt = function(a, b, c) {
    b = void 0 === b ? !1 : b;
    this.Vl();
    this.l && (a ? c ? S3(this.l, c, b) : S3(this.l,
        "YOUTUBE_DRAWER_AUTO_OPEN", b) : T3(this.l))
};


_yt_player.h.St = function(a, b) {
    this.g.R(a ? "cardsteasershow" : "cardsteaserhide", b)
};


_yt_player.h.V = function() {
    _yt_player.Y(this.g).C.unsubscribe("vast_info_card_add", this.lD, this);
    _yt_player.mq(this.g.getRootNode(), "ytp-iv-drawer-open");
    for (var a = this.M, b = 0, c = a.length; b < c; b++) _yt_player.oG(a[
        b]);
    this.M.length = 0;
    _yt_player.sV.prototype.V.call(this)
};


var g4 = {},
    nza = "ontouchstart" in window.document;
_yt_player.rF(window.document, "blur", h4, !0);
_yt_player.rF(window.document, "change", h4, !0);
_yt_player.rF(window.document, "click", h4);
_yt_player.rF(window.document, "focus", h4, !0);
_yt_player.rF(window.document, "mouseover", h4);
_yt_player.rF(window.document, "mouseout", h4);
_yt_player.rF(window.document, "mousedown", h4);
_yt_player.rF(window.document, "keydown", h4);
_yt_player.rF(window.document, "keyup", h4);
_yt_player.rF(window.document, "keypress", h4);
_yt_player.rF(window.document, "cut", h4);
_yt_player.rF(window.document, "paste", h4);
nza && (_yt_player.rF(window.document, "touchstart", h4), _yt_player.rF(window
    .document, "touchend", h4), _yt_player.rF(
    window.document, "touchcancel", h4));
_yt_player.h = i4.prototype;
_yt_player.h.pe = function(a) {
    return _yt_player.$d(a, Z(this))
};


_yt_player.h.unregister = function() {
    _yt_player.VF(this.H);
    this.H.length = 0;
    _yt_player.HN(this.F);
    this.F.length = 0
};


_yt_player.h.init = _yt_player.y;
_yt_player.h.dispose = _yt_player.y;
_yt_player.h.addBehavior = function(a, b, c) {
    c = Z(this, c);
    var d = (0, _yt_player.z)(b, this);
    a in g4 || (g4[a] = new _yt_player.XC);
    g4[a].subscribe(c, d);
    this.D[b] = d
};


_yt_player.h.removeBehavior = function(a, b, c) {
    if (a in g4) {
        var d = g4[a];
        d.unsubscribe(Z(this, c), this.D[b]);
        0 >= d.Dc() && (d.dispose(), delete g4[a])
    }
    delete this.D[b]
};


_yt_player.h.qj = function(a, b, c) {
    var d = this.Ba(a, b);
    if (d && (d = _yt_player.x(d))) {
        var e = _yt_player.$a(arguments, 2);
        _yt_player.ab(e, 0, 0, a);
        d.apply(null, e)
    }
};


_yt_player.h.Ba = function(a, b) {
    return _yt_player.bF(a, b)
};


_yt_player.h.setData = function(a, b, c) {
    _yt_player.aF(a, b, c)
};


_yt_player.A(l4, i4);
_yt_player.ya(l4);
_yt_player.h = l4.prototype;
_yt_player.h.register = function() {
    this.addBehavior("click", this.bG);
    this.addBehavior("keydown", this.sA);
    this.addBehavior("keypress", this.tA);
    j4(this, "page-scroll", this.hK)
};


_yt_player.h.unregister = function() {
    this.removeBehavior("click", this.bG);
    this.removeBehavior("keydown", this.sA);
    this.removeBehavior("keypress", this.tA);
    r4(this);
    this.l = {};
    l4.ba.unregister.call(this)
};


_yt_player.h.bG = function(a) {
    a && !a.disabled && (this.toggle(a), this.click(a))
};


_yt_player.h.sA = function(a, b, c) {
    if (!(c.altKey || c.ctrlKey || c.shiftKey || c.metaKey) && (b = q4(this,
            a))) {
        var d = function(a) {
                var b = "";
                a.tagName && (b = a.tagName.toLowerCase());
                return "ul" == b || "table" == b
            },
            e;
        d(b) ? e = b : e = V1(b, d);
        if (e) {
            e = e.tagName.toLowerCase();
            if ("ul" == e) var f = this.iM;
            else "table" == e && (f = this.hM);
            f && sya(this, a, b, c, (0, _yt_player.z)(f, this))
        }
    }
};


_yt_player.h.hK = function() {
    var a = this.l;
    if (0 != _yt_player.Pb(a))
        for (var b in a) {
            var c = a[b],
                d = _yt_player.$d(c.activeButtonNode || c.parentNode, Z(
                    this));
            if (void 0 == d || void 0 == c) break;
            p4(this, d, c, !0)
        }
};


_yt_player.h.tA = function(a, b, c) {
    c.altKey || c.ctrlKey || c.shiftKey || c.metaKey || (a = q4(this, a),
        m2(a) && c.preventDefault())
};


_yt_player.h.hM = function(a, b, c) {
    var d = m4(this, b);
    if (d) {
        b = Kva("table", b);
        var e = Kva("tr", b);
        e = _yt_player.qd(window.document, "td", null, e).length;
        b = _yt_player.qd(window.document, "td", null, b);
        d = uya(d, b, e, c); -
        1 != d && (tya(this, a, b[d]), c.preventDefault())
    }
};


_yt_player.h.iM = function(a, b, c) {
    if (40 == c.keyCode || 38 == c.keyCode) {
        var d = m4(this, b);
        d && (b = (0, _yt_player.Ld)(_yt_player.qd(window.document, "li",
            null, b), m2), d = uya(d, b, 1, c), tya(
            this, a, b[d]), c.preventDefault())
    }
};


_yt_player.h.dG = function(a) {
    if (a) {
        var b = q4(this, a);
        if (b) {
            a.setAttribute("aria-pressed", "true");
            a.setAttribute("aria-expanded", "true");
            b.originalParentNode = b.parentNode;
            b.activeButtonNode = a;
            b.parentNode.removeChild(b);
            var c;
            this.Ba(a, "button-has-sibling-menu") ? c = a.parentNode : c =
                vya(this, a);
            c.appendChild(b);
            b.style.minWidth = a.offsetWidth - 2 + "px";
            var d = o4(this, a);
            d && c.appendChild(d);
            (c = !!this.Ba(a, "button-menu-fixed")) && (this.l[i2(a)
                .toString()] = b);
            p4(this, a, b, c);
            _yt_player.YF("yt-uix-button-menu-before-show", a, b);
            n2(b);
            d && n2(d);
            this.qj(a, "button-menu-action", !0);
            _yt_player.S(a, Z(this, "active"));
            b = (0, _yt_player.z)(this.cG, this, a, !1);
            d = (0, _yt_player.z)(this.cG, this, a, !0);
            c = (0, _yt_player.z)(this.wW, this, a, void 0);
            this.g && q4(this, this.g) == q4(this, a) || r4(this);
            _yt_player.XF("yt-uix-button-menu-show", a);
            _yt_player.sF(this.o);
            this.o = [_yt_player.rF(window.document, "click", d), _yt_player
                .rF(window.document, "contextmenu", b),
                _yt_player.rF(window, "resize", c)
            ];
            this.g = a
        }
    }
};


_yt_player.h.wW = function(a, b) {
    var c = q4(this, a);
    if (c) {
        b && (b instanceof _yt_player.Uc ? c.innerHTML = _yt_player.Vc(b) :
            _yt_player.Sd(c, b));
        var d = !!this.Ba(a, "button-menu-fixed");
        p4(this, a, c, d)
    }
};


_yt_player.h.cd = function() {
    return _yt_player.J(Z(this, "content"), void 0)
};


_yt_player.h.cG = function(a, b, c) {
    c = _yt_player.tF(c);
    var d = _yt_player.$d(c, Z(this));
    if (d) {
        d = q4(this, d);
        var e = q4(this, a);
        if (d == e) return
    }
    d = _yt_player.$d(c, Z(this, "menu"));
    e = d == q4(this, a);
    var f = _yt_player.kq(c, Z(this, "menu-item")),
        k = _yt_player.kq(c, Z(this, "menu-close"));
    if (!d || e && (f || k)) n4(this, a), d && b && this.Ba(a,
        "button-menu-indicate-selected") && ((a = _yt_player
        .J(Z(this, "content"), a)) && _yt_player.Sd(a, W1(c)), wya(
        this, d, c))
};


_yt_player.h.isToggled = function(a) {
    return _yt_player.kq(a, Z(this, "toggled"))
};


_yt_player.h.toggle = function(a) {
    if (this.Ba(a, "button-toggle")) {
        var b = _yt_player.$d(a, Z(this, "group")),
            c = Z(this, "toggled"),
            d = _yt_player.kq(a, c);
        if (b && this.Ba(b, "button-toggle-group")) {
            var e = this.Ba(b, "button-toggle-group");
            b = _yt_player.rd(Z(this), b);
            (0, _yt_player.B)(b, function(b) {
                b != a || "optional" == e && d ? (_yt_player.mq(b, c), b
                    .removeAttribute("aria-pressed")) : (
                    _yt_player.S(a, c), b.setAttribute(
                        "aria-pressed", "true"))
            })
        } else d ? a.removeAttribute("aria-pressed") : a.setAttribute(
            "aria-pressed", "true"), _yt_player.pq(a, c)
    }
};


_yt_player.h.click = function(a) {
    if (q4(this, a)) {
        var b = q4(this, a);
        if (b) {
            var c = _yt_player.$d(b.activeButtonNode || b.parentNode, Z(
                this));
            c && c != a ? (n4(this, c), _yt_player.XD((0, _yt_player.z)(this
                .dG, this, a), 1)) : m2(b) ? n4(this,
                a) : this.dG(a)
        }
        a.focus()
    }
    this.qj(a, "button-action")
};


_yt_player.A(s4, i4);
_yt_player.h = s4.prototype;
_yt_player.h.pe = function(a) {
    var b = i4.prototype.pe.call(this, a);
    return b ? b : a
};


_yt_player.h.register = function() {
    j4(this, "yt-uix-kbd-nav-move-out-done", this.hide)
};


_yt_player.h.dispose = function() {
    t4(this);
    s4.ba.dispose.call(this)
};


_yt_player.h.Ba = function(a, b) {
    var c = s4.ba.Ba.call(this, a, b);
    return c ? c : (c = s4.ba.Ba.call(this, a, "card-config")) && (c =
        _yt_player.x(c)) && c[b] ? c[b] : null
};


_yt_player.h.show = function(a) {
    var b = this.pe(a);
    if (b) {
        _yt_player.S(b, Z(this, "active"));
        var c = xya(this, a, b);
        if (c) {
            c.cardTargetNode = a;
            c.cardRootNode = b;
            yya(this, a, c);
            var d = Z(this, "card-visible"),
                e = this.Ba(a, "card-delegate-show") && this.Ba(b,
                    "card-action");
            this.qj(b, "card-action", a);
            this.o = a;
            o2(c);
            _yt_player.XD((0, _yt_player.z)(function() {
                    e || (n2(c), _yt_player.XF("yt-uix-card-show",
                        b, a, c));
                    zya(c);
                    _yt_player.S(c, d);
                    _yt_player.XF("yt-uix-kbd-nav-move-in-to", c)
                },
                this), 10)
        }
    }
};


_yt_player.h.hide = function(a) {
    if (a = this.pe(a)) {
        var b = _yt_player.pd(Z(this, "card") + i2(a));
        b && (_yt_player.mq(a, Z(this, "active")), _yt_player.mq(b, Z(this,
                "card-visible")), o2(b), this.o = null,
            b.cardTargetNode = null, b.cardRootNode = null, b
            .cardMask && (_yt_player.Kd(b.cardMask), b
                .cardMask = null))
    }
};


_yt_player.h.uW = function(a, b) {
    var c = this.pe(a);
    if (c) {
        if (b) {
            var d = this.Cc(c);
            if (!d) return;
            b instanceof _yt_player.Uc ? d.innerHTML = _yt_player.Vc(b) :
                _yt_player.Sd(d, b)
        }
        _yt_player.kq(c, Z(this, "active")) && (c = xya(this, a, c), yya(
            this, a, c), n2(c), zya(c))
    }
};


_yt_player.h.isActive = function(a) {
    return (a = this.pe(a)) ? _yt_player.kq(a, Z(this, "active")) : !1
};


_yt_player.h.Cc = function(a) {
    var b = a.cardContentNode;
    if (!b) {
        var c = Z(this, "content"),
            d = Z(this, "card-content");
        (b = (b = this.Ba(a, "card-id")) ? _yt_player.pd(b) : _yt_player.J(
            c, a)) || (b = window.document
            .createElement("div"));
        var e = b;
        _yt_player.mq(e, c);
        _yt_player.S(e, d);
        a.cardContentNode = b
    }
    return b
};


var v4;
_yt_player.A(u4, i4);
_yt_player.ya(u4);
_yt_player.h = u4.prototype;
_yt_player.h.register = function() {
    this.addBehavior("keydown", this.Bz);
    j4(this, "yt-uix-kbd-nav-move-in", this.gC);
    j4(this, "yt-uix-kbd-nav-move-in-to", this.bQ);
    j4(this, "yt-uix-kbd-move-next", this.hC);
    j4(this, "yt-uix-kbd-nav-move-to", this.jo)
};


_yt_player.h.unregister = function() {
    this.removeBehavior("keydown", this.Bz);
    _yt_player.sF(v4)
};


_yt_player.h.Bz = function(a, b, c) {
    var d = c.keyCode;
    if (a = _yt_player.$d(a, Z(this))) switch (d) {
        case 13:
        case 32:
            this.gC(a);
            break;
        case 27:
            c.preventDefault();
            c.stopImmediatePropagation();
            a: {
                for (c = Z1(a, "kbdNavMoveOut"); !c;) {
                    c = _yt_player.$d(a.parentElement, Z(this));
                    if (!c) break a;
                    c = Z1(c, "kbdNavMoveOut")
                }
                c = _yt_player.pd(c);
                this.jo(c);
                _yt_player.XF("yt-uix-kbd-nav-move-out-done", c)
            }
            break;
        case 40:
        case 38:
            if ((b = c.target) && _yt_player.kq(a, Z(this, "list")))
                switch (d) {
                    case 40:
                        this.hC(b, a);
                        break;
                    case 38:
                        d = window.document.activeElement == a, a = Cya(
                            a), b = a.indexOf(b), 0 > b && !d || (
                            b =
                            d ? a.length - 1 : (a.length + b - 1) %
                            a.length, a[b].focus(), Bya(this, a[b]))
                }
            c.preventDefault()
    }
};


_yt_player.h.gC = function(a) {
    var b = Z1(a, "kbdNavMoveIn");
    b = _yt_player.pd(b);
    Aya(this, a, b);
    this.jo(b)
};


_yt_player.h.bQ = function(a) {
    Aya(this, _yt_player.ae(), a);
    this.jo(a)
};


_yt_player.h.jo = function(a) {
    if (a)
        if (_yt_player.Xd(a)) a.focus();
        else {
            var b = V1(a, function(a) {
                return _yt_player.Da(a) && 1 == a.nodeType ?
                    _yt_player.Xd(a) : !1
            });
            b ? b.focus() : (a.setAttribute("tabindex", "-1"), a.focus())
        }
};


_yt_player.h.hC = function(a, b) {
    var c = window.document.activeElement == b,
        d = Cya(b),
        e = d.indexOf(a);
    0 > e && !c || (c = c ? 0 : (e + 1) % d.length, d[c].focus(), Bya(this,
        d[c]))
};


_yt_player.A(w4, i4);
_yt_player.ya(w4);
_yt_player.h = w4.prototype;
_yt_player.h.register = function() {
    this.addBehavior("click", this.eG);
    this.addBehavior("mouseenter", this.cK);
    j4(this, "page-scroll", this.rK);
    j4(this, "yt-uix-kbd-nav-move-out-done", function(a) {
        a = this.pe(a);
        A4(this, a)
    });
    this.A = new _yt_player.XC
};


_yt_player.h.unregister = function() {
    this.removeBehavior("click", this.eG);
    this.l = this.g = null;
    _yt_player.sF(rva(_yt_player.Rb(this.o)));
    this.o = {};
    _yt_player.Lb(this.C, function(a) {
            _yt_player.Kd(a)
        },
        this);
    this.C = {};
    _yt_player.$e(this.A);
    this.A = null;
    w4.ba.unregister.call(this)
};


_yt_player.h.eG = function(a, b, c) {
    a && (b = D4(this, a), !b.disabled && j2(c.target, b) && Fya(this, a))
};


_yt_player.h.cK = function(a, b, c) {
    a && _yt_player.kq(a, Z(this, "hover")) && (b = D4(this, a), j2(c
        .target, b) && Fya(this, a, !0))
};


_yt_player.h.rK = function() {
    this.g && this.l && Dya(this, this.l, this.g)
};


_yt_player.h.fG = function(a) {
    if (a) {
        var b = C4(this, a);
        if (b) {
            _yt_player.YF("yt-uix-menu-before-show", a, b);
            if (this.g) j2(a, this.g) || A4(this, this.l);
            else {
                this.l = a;
                this.g = b;
                _yt_player.kq(a, Z(this, "sibling-content")) || (_yt_player
                    .Kd(b), window.document.body.appendChild(
                        b));
                var c = D4(this, a).offsetWidth - 2;
                b.style.minWidth = c + "px"
            }(c = y4(this, a)) && b.parentNode && b.parentNode.insertBefore(
                c, b.nextSibling);
            _yt_player.mq(b, Z(this, "content-hidden"));
            Dya(this, a, b);
            _yt_player.lq(D4(this, a), [Z(this, "trigger-selected"),
                "yt-uix-button-toggled"
            ]);
            _yt_player.XF("yt-uix-menu-show", a);
            Iya(b);
            Gya(this, a);
            _yt_player.XF("yt-uix-kbd-nav-move-in-to", b);
            var d = (0, _yt_player.z)(this.vX, this, a),
                e = (0, _yt_player.z)(this.eM, this, a);
            c = _yt_player.Fa(a).toString();
            this.o[c] = [_yt_player.rF(b, "click", e), _yt_player.rF(window
                .document, "click", d)];
            _yt_player.kq(a, Z(this, "indicate-selected")) && (d = (0,
                    _yt_player.z)(this.fM, this, a), this.o[c]
                .push(_yt_player.rF(b, "click", d)));
            _yt_player.kq(a, Z(this, "hover")) && (a = (0, _yt_player.z)(
                this.uX, this, a), this.o[c].push(
                _yt_player.rF(window.document, "mousemove", a)))
        }
    }
};


_yt_player.h.uX = function(a, b) {
    var c = _yt_player.tF(b);
    if (c) {
        var d = D4(this, a);
        j2(c, d) || Jya(this, c) || B4(this, a)
    }
};


_yt_player.h.vX = function(a, b) {
    var c = _yt_player.tF(b);
    if (c) {
        if (Jya(this, c)) {
            var d = _yt_player.$d(c, Z(this, "content")),
                e = _yt_player.Zd(c, "LI");
            e && d && _yt_player.Qd(d, e) && _yt_player.YF(
                "yt-uix-menu-item-clicked", c);
            c = _yt_player.$d(c, Z(this, "close-on-select"));
            if (!c) return;
            d = x4(c)
        }
        A4(this, d || a)
    }
};


_yt_player.h.eM = function(a, b) {
    var c = _yt_player.tF(b);
    c && Hya(this, a, c)
};


_yt_player.h.fM = function(a, b) {
    var c = _yt_player.tF(b);
    if (c) {
        var d = D4(this, a);
        if (d && (c = _yt_player.Zd(c, "LI")))
            if (c = W1(c).trim(), d.hasChildNodes()) {
                var e = l4.getInstance();
                (d = _yt_player.J(Z(e, "content"), d)) && _yt_player.Sd(d,
                    c)
            } else _yt_player.Sd(d, c)
    }
};


_yt_player.A(E4, s4);
_yt_player.ya(E4);
_yt_player.h = E4.prototype;
_yt_player.h.register = function() {
    E4.ba.register.call(this);
    this.addBehavior("click", this.Zx, "target");
    this.addBehavior("click", this.Yx, "close")
};


_yt_player.h.unregister = function() {
    E4.ba.unregister.call(this);
    this.removeBehavior("click", this.Zx, "target");
    this.removeBehavior("click", this.Yx, "close");
    for (var a in this.g) _yt_player.sF(this.g[a]);
    this.g = {};
    for (a in this.l) _yt_player.sF(this.l[a]);
    this.l = {}
};


_yt_player.h.Zx = function(a, b, c) {
    c.preventDefault();
    b = _yt_player.Zd(c.target, "button");
    if (!b || !b.disabled) {
        b = this.Ba(a, "card-target");
        var d;
        b ? d = _yt_player.u(b) ? window.document.getElementById(b) : b :
            d = a;
        a = d;
        d = this.pe(a);
        this.Ba(d, "disabled") || (_yt_player.kq(d, Z(this, "active")) ? (
            this.hide(a), _yt_player.mq(d, Z(this,
                "active"))) : (this.show(a), _yt_player.S(d, Z(this,
            "active"))))
    }
};


_yt_player.h.show = function(a) {
    E4.ba.show.call(this, a);
    var b = this.pe(a),
        c = _yt_player.Fa(a).toString();
    if (!_yt_player.bF(b, "click-outside-persists")) {
        if (this.g[c]) return;
        b = _yt_player.rF(window.document, "click", (0, _yt_player.z)(this
            .ay, this, a));
        var d = _yt_player.rF(window, "blur", (0, _yt_player.z)(this.ay,
            this, a));
        this.g[c] = [b, d]
    }
    a = _yt_player.rF(window, "resize", (0, _yt_player.z)(this.uW, this, a,
        void 0));
    this.l[c] = a
};


_yt_player.h.hide = function(a) {
    E4.ba.hide.call(this, a);
    a = _yt_player.Fa(a).toString();
    var b = this.g[a];
    b && (_yt_player.sF(b), this.g[a] = null);
    if (b = this.l[a]) _yt_player.sF(b), delete this.l[a]
};


_yt_player.h.ay = function(a, b) {
    var c = "yt-uix" + (this.B ? "-" + this.B : "") + "-card",
        d = null;
    b.target && (d = _yt_player.$d(b.target, c) || _yt_player.$d(x4(b
        .target), c));
    (d = d || _yt_player.$d(window.document.activeElement, c) || _yt_player
        .$d(x4(window.document.activeElement),
            c)) || this.hide(a)
};


_yt_player.h.Yx = function(a) {
    (a = _yt_player.$d(a, Z(this, "card"))) && (a = a.cardTargetNode) &&
    this.hide(a)
};


_yt_player.A(F4, s4);
_yt_player.ya(F4);
_yt_player.h = F4.prototype;
_yt_player.h.register = function() {
    this.addBehavior("mouseenter", this.cC, "target");
    this.addBehavior("mouseleave", this.eC, "target");
    this.addBehavior("mouseenter", this.dC, "card");
    this.addBehavior("mouseleave", this.fC, "card")
};


_yt_player.h.unregister = function() {
    this.removeBehavior("mouseenter", this.cC, "target");
    this.removeBehavior("mouseleave", this.eC, "target");
    this.removeBehavior("mouseenter", this.dC, "card");
    this.removeBehavior("mouseleave", this.fC, "card")
};


_yt_player.h.cC = function(a) {
    if (S4 != a) {
        S4 && (this.hide(S4), S4 = null);
        var b = (0, _yt_player.z)(this.show, this, a),
            c = (0, window.parseInt)(this.Ba(a, "delay-show"), 10);
        b = _yt_player.XD(b, -1 < c ? c : 200);
        this.setData(a, "card-timer", b.toString());
        S4 = a;
        a.alt && (this.setData(a, "card-alt", a.alt), a.alt = "");
        a.title && (this.setData(a, "card-title", a.title), a.title = "")
    }
};


_yt_player.h.eC = function(a) {
    var b = (0, window.parseInt)(this.Ba(a, "card-timer"), 10);
    _yt_player.ZD(b);
    this.pe(a).isCardHidable = !0;
    b = (0, window.parseInt)(this.Ba(a, "delay-hide"), 10);
    b = -1 < b ? b : 200;
    _yt_player.XD((0, _yt_player.z)(this.KK, this, a), b);
    if (b = this.Ba(a, "card-alt")) a.alt = b;
    if (b = this.Ba(a, "card-title")) a.title = b
};


_yt_player.h.KK = function(a) {
    this.pe(a).isCardHidable && (this.hide(a), S4 = null)
};


_yt_player.h.dC = function(a) {
    a && (a.cardRootNode.isCardHidable = !1)
};


_yt_player.h.fC = function(a) {
    a && this.hide(a.cardTargetNode)
};


var S4 = null;
var Mya = {
    LOADING: "loading",
    FG: "content",
    F4: "working"
};


_yt_player.h = G4.prototype;
_yt_player.h.show = function() {
    if (!this.ka()) {
        this.D = window.document.activeElement;
        if (!this.M) {
            this.l || (this.l = _yt_player.pd("yt-dialog-bg"), this.l || (
                this.l = _yt_player.Ed("div"), this.l.id =
                "yt-dialog-bg", this.l.className = "yt-dialog-bg",
                window.document.body.appendChild(this.l)
            ));
            var a = window,
                b = a.document;
            var c = 0;
            if (b) {
                c = b.body;
                var d = b.documentElement;
                if (d && c)
                    if (a = _yt_player.wd(a).height, _yt_player.vd(b) && d
                        .scrollHeight) c = d.scrollHeight != a ? d
                        .scrollHeight : d.offsetHeight;
                    else {
                        b = d.scrollHeight;
                        var e = d.offsetHeight;
                        d.clientHeight != e && (b = c.scrollHeight,
                            e = c.offsetHeight);
                        c = b > a ? b > e ? b : e : b < e ? b : e
                    }
                else c = 0
            }
            this.l.style.height = c + "px";
            n2(this.l)
        }
        this.Jz();
        c = Oya(this);
        Pya(c);
        this.B = _yt_player.rF(window.document, "keydown", (0, _yt_player.z)
            (this.OL, this));
        c = this.g;
        d = _yt_player.UF("player-added", this.Jz, this);
        _yt_player.aF(c, "player-ready-pubsub-key", d);
        this.T && (this.C = _yt_player.rF(window.document, "click", (0,
            _yt_player.z)(this.bV, this)));
        n2(this.g);
        this.o.setAttribute("tabindex", "0");
        Rya(this);
        this.H || _yt_player.S(window.document.body, "yt-dialog-active");
        r4(l4.getInstance());
        t4(E4.getInstance());
        t4(F4.getInstance());
        _yt_player.XF("yt-ui-dialog-show-complete",
            this)
    }
};


_yt_player.h.Jz = function() {
    if (!this.X) {
        var a = this.g;
        _yt_player.U(window.document.body, "hide-players", !0);
        a && _yt_player.U(a, "preserve-players", !0)
    }
};


_yt_player.h.YQ = function(a) {
    a = a.currentTarget;
    a.disabled || (a = _yt_player.bF(a, "action") || "", this.dismiss(a))
};


_yt_player.h.dismiss = function(a) {
    if (!this.ka()) {
        this.A.R("pre-all");
        this.A.R("pre-" + a);
        o2(this.g);
        t4(E4.getInstance());
        t4(F4.getInstance());
        this.o.setAttribute("tabindex", "-1");
        Nya() || (o2(this.l), this.H || _yt_player.mq(window.document.body,
            "yt-dialog-active"), Lva(), Qya());
        this.B && (_yt_player.sF(this.B), this.B = null);
        this.C && (_yt_player.sF(this.C), this.C = null);
        var b = this.g;
        if (b) {
            var c = _yt_player.bF(b, "player-ready-pubsub-key");
            c && (_yt_player.VF(c), h2(b, "player-ready-pubsub-key"))
        }
        this.A.R("post-all");
        _yt_player.XF("yt-ui-dialog-hide-complete", this);
        "cancel" == a &&
            _yt_player.XF("yt-ui-dialog-cancelled", this);
        this.A && this.A.R("post-" + a);
        this.D && this.D.focus()
    }
};


_yt_player.h.setTitle = function(a) {
    _yt_player.Sd(_yt_player.J("yt-dialog-title", this.g), a)
};


_yt_player.h.OL = function(a) {
    _yt_player.XD((0, _yt_player.z)(function() {
            this.K || 27 != a.keyCode || this.dismiss("cancel")
        },
        this), 0);
    9 == a.keyCode && a.shiftKey && _yt_player.kq(window.document
            .activeElement, "yt-dialog-fg") && a
        .preventDefault()
};


_yt_player.h.bV = function(a) {
    "yt-dialog-base" == a.target.className && this.dismiss("cancel")
};


_yt_player.h.ka = function() {
    return this.J
};


_yt_player.h.dispose = function() {
    m2(this.g) && this.dismiss("dispose");
    _yt_player.sF(this.F);
    this.F.length = 0;
    _yt_player.XD((0, _yt_player.z)(function() {
            this.D = null
        },
        this), 0);
    this.I = this.o = null;
    this.A.dispose();
    this.A = null;
    this.J = !0
};


_yt_player.h.CJ = function(a) {
    a.stopPropagation();
    Rya(this)
};


_yt_player.va("yt.ui.Dialog", G4, void 0);
_yt_player.A(H4, i4);
_yt_player.ya(H4);
_yt_player.h = H4.prototype;
_yt_player.h.register = function() {
    this.addBehavior("click", this.yv, "target");
    this.addBehavior("click", this.hide, "close");
    Tya(this)
};


_yt_player.h.unregister = function() {
    H4.ba.unregister.call(this);
    this.removeBehavior("click", this.yv, "target");
    this.removeBehavior("click", this.hide, "close");
    this.A && (_yt_player.VF(this.A), this.A = null);
    this.l && (_yt_player.sF(this.l), this.l = null)
};


_yt_player.h.yv = function(a) {
    if (!this.g || !m2(this.g.g)) {
        var b = this.pe(a);
        a = Vya(b, a);
        b || (b = a ? a.overlayParentNode : null);
        if (b && a) {
            var c = !!this.Ba(b, "disable-shortcuts") || !1,
                d = !!this.Ba(b, "disable-outside-click-dismiss") || !1;
            this.g = new G4(a, c);
            this.o = b;
            var e = _yt_player.J("yt-dialog-fg", a);
            if (e) {
                var f = this.Ba(b, "overlay-class") || "",
                    k = this.Ba(b, "overlay-style") || "default",
                    l = this.Ba(b, "overlay-shape") || "default";
                f = f ? f.split(" ") : [];
                f.push(Z(this, k));
                f.push(Z(this, l));
                _yt_player.lq(e, f)
            }
            this.g.show();
            _yt_player.XF("yt-uix-kbd-nav-move-to", e ||
                a);
            Tya(this);
            c || d || (c = (0, _yt_player.z)(function(a) {
                        _yt_player.kq(a.target, "yt-dialog-base") &&
                            Uya(this)
                    },
                    this), a = _yt_player.J("yt-dialog-base", a), this
                .l = _yt_player.rF(a, "click", c));
            this.qj(b, "overlay-shown");
            _yt_player.XF("yt-uix-overlay-shown", b)
        }
    }
};


_yt_player.h.Cc = function(a) {
    return _yt_player.J("yt-dialog-content", a.overlayContentNode || a)
};


_yt_player.h.hide = function(a) {
    a && a.disabled || _yt_player.XF("yt-uix-overlay-hide")
};


_yt_player.h.show = function(a) {
    this.yv(a)
};


_yt_player.A(I4, i4);
_yt_player.ya(I4);
_yt_player.h = I4.prototype;
_yt_player.h.register = function() {
    this.addBehavior("mouseover", this.xp);
    this.addBehavior("mouseout", this.Oi);
    this.addBehavior("focus", this.Uy);
    this.addBehavior("blur", this.Ix);
    this.addBehavior("click", this.Oi);
    this.addBehavior("touchstart", this.TE);
    this.addBehavior("touchend", this.qq);
    this.addBehavior("touchcancel", this.qq)
};


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
    I4.ba.unregister.call(this)
};


_yt_player.h.dispose = function() {
    for (var a in this.l) this.Oi(this.l[a]);
    this.l = {}
};


_yt_player.h.xp = function(a) {
    if (!(this.g && 1E3 > (0, _yt_player.F)() - this.g)) {
        var b = (0, window.parseInt)(this.Ba(a, "tooltip-hide-timer"), 10);
        b && (h2(a, "tooltip-hide-timer"), _yt_player.ZD(b));
        b = (0, _yt_player.z)(function() {
                aza(this, a);
                h2(a, "tooltip-show-timer")
            },
            this);
        var c = (0, window.parseInt)(this.Ba(a, "tooltip-show-delay"),
            10) || 0;
        b = _yt_player.XD(b, c);
        this.setData(a, "tooltip-show-timer", b.toString());
        a.title && (this.setData(a, "tooltip-text", Yya(this, a)), a.title =
            "");
        b = _yt_player.Fa(a).toString();
        this.l[b] = a
    }
};


_yt_player.h.Oi = function(a) {
    var b = (0, window.parseInt)(this.Ba(a, "tooltip-show-timer"), 10);
    b && (_yt_player.ZD(b), h2(a, "tooltip-show-timer"));
    b = (0, _yt_player.z)(function() {
            if (a) {
                var b = _yt_player.pd(J4(this, a));
                b && (bza(b), _yt_player.Kd(b), h2(a, "content-id"));
                b = _yt_player.pd(J4(this, a, "arialabel"));
                _yt_player.Kd(b)
            }
            h2(a, "tooltip-hide-timer")
        },
        this);
    b = _yt_player.XD(b, 50);
    this.setData(a, "tooltip-hide-timer", b.toString());
    if (b = this.Ba(a, "tooltip-text")) a.title = b;
    b = _yt_player.Fa(a).toString();
    delete this.l[b]
};


_yt_player.h.Uy = function(a, b) {
    this.g = 0;
    this.xp(a, b)
};


_yt_player.h.Ix = function(a) {
    this.g = 0;
    this.Oi(a)
};


_yt_player.h.TE = function(a, b, c) {
    c.changedTouches && (this.g = 0, (a = f4(b, Z(this), c.changedTouches[0]
        .target)) && this.xp(a, b))
};


_yt_player.h.qq = function(a, b, c) {
    c.changedTouches && (this.g = (0, _yt_player.F)(), (a = f4(b, Z(this), c
        .changedTouches[0].target)) && this.Oi(
        a))
};


var T4 = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
_yt_player.va("yt.uix.widgets_", T4, void 0);
_yt_player.A(K4, _yt_player.yN);
_yt_player.A(L4, _yt_player.yN);
_yt_player.A(cza, _yt_player.yN);
_yt_player.A(M4, _yt_player.yN);
var oza = new _yt_player.zN("subscription-subscribe", L4),
    pza = new _yt_player.zN("subscription-subscribe-loading", K4),
    qza = new _yt_player.zN("subscription-subscribe-loaded", K4),
    rza = new _yt_player.zN("subscription-subscribe-success", cza),
    sza = new _yt_player.zN("subscription-unsubscribe", M4),
    tza = new _yt_player.zN("subscription-unsubscirbe-loading", K4),
    uza = new _yt_player.zN("subscription-unsubscribe-loaded", K4),
    vza = new _yt_player.zN("subscription-unsubscribe-success", K4),
    wza = new _yt_player.zN("subscription-enable-ypc", K4),
    xza = new _yt_player.zN("subscription-disable-ypc", K4);
var O4 = {},
    N4 = [];
_yt_player.A(P4, i4);
_yt_player.ya(P4);
P4.prototype.register = function() {
    this.addBehavior("click", this.kw);
    k4(this, pza, this.NC);
    k4(this, qza, this.gG);
    k4(this, rza, this.kU);
    k4(this, tza, this.NC);
    k4(this, uza, this.gG);
    k4(this, vza, this.xU);
    k4(this, wza, this.AR);
    k4(this, xza, this.uR)
};


P4.prototype.unregister = function() {
    this.removeBehavior("click", this.kw);
    P4.ba.unregister.call(this)
};


P4.prototype.isSubscribed = function(a) {
    return !!this.Ba(a, "is-subscribed")
};


var R4 = {
        pw: "hover-enabled",
        vG: "yt-uix-button-subscribe",
        wG: "yt-uix-button-subscribed",
        zY: "ypc-enabled",
        DG: "yt-uix-button-subscription-container",
        EG: "yt-subscription-button-disabled-mask-container"
    },
    Q4 = {
        QY: "channel-external-id",
        HG: "subscriber-count-show-when-subscribed",
        IG: "subscriber-count-tooltip",
        JG: "subscriber-count-title",
        D_: "href",
        M_: "insecure",
        Ew: "is-subscribed",
        C1: "parent-url",
        D2: "clicktracking",
        bI: "show-unsub-confirm-dialog",
        G2: "show-unsub-confirm-time-frame",
        jI: "style-type",
        fx: "subscribed-timestamp",
        gx: "subscription-id",
        j3: "target",
        DI: "ypc-enabled"
    };
_yt_player.h = P4.prototype;
_yt_player.h.kw = function(a) {
    var b = this.Ba(a, "href"),
        c = this.Ba(a, "insecure");
    if (b) a = this.Ba(a, "target") || "_self", window.open(b, a);
    else if (!c)
        if (_yt_player.ZV()) {
            b = this.Ba(a, "channel-external-id");
            c = this.Ba(a, "clicktracking");
            var d = fza(this, a),
                e = this.Ba(a, "parent-url");
            if (this.Ba(a, "is-subscribed")) {
                var f = this.Ba(a, "subscription-id"),
                    k = new M4(b, f, d, a, c, e);
                jza(this, a) ? eza(a, b).then(function() {
                    _yt_player.BN(sza, k)
                }) : _yt_player.BN(sza, k)
            } else _yt_player.BN(oza, new L4(b, d, c, e))
        } else iza(this, a)
};


_yt_player.h.NC = function(a) {
    this.nj(a.g, this.nE, !0)
};


_yt_player.h.gG = function(a) {
    this.nj(a.g, this.nE, !1)
};


_yt_player.h.kU = function(a) {
    this.nj(a.g, this.tE, !0, a.l)
};


_yt_player.h.xU = function(a) {
    this.nj(a.g, this.tE, !1)
};


_yt_player.h.AR = function(a) {
    this.nj(a.g, this.uJ)
};


_yt_player.h.uR = function(a) {
    this.nj(a.g, this.nJ)
};


_yt_player.h.tE = function(a, b, c) {
    b ? (this.setData(a, Q4.Ew, "true"), c && this.setData(a, Q4.gx, c),
        this.Ba(a, Q4.bI) && (b = new $1, this
            .setData(a, Q4.fx, (b.getTime() / 1E3).toString()))) : (h2(
        a, Q4.Ew), h2(a, Q4.fx), h2(a, Q4.gx));
    gza(this, a)
};


_yt_player.h.nE = function(a, b) {
    var c = _yt_player.$d(a, R4.DG);
    _yt_player.U(c, R4.EG, b);
    a.setAttribute("aria-busy", b ? "true" : "false");
    a.disabled = b
};


_yt_player.h.uJ = function(a) {
    var b = !!this.Ba(a, "ypc-item-type"),
        c = !!this.Ba(a, "ypc-item-id");
    !this.Ba(a, "ypc-enabled") && b && c && (_yt_player.S(a, "ypc-enabled"),
        this.setData(a, Q4.DI, "true"))
};


_yt_player.h.nJ = function(a) {
    this.Ba(a, "ypc-enabled") && (_yt_player.mq(a, "ypc-enabled"), h2(a,
        "ypc-enabled"))
};


_yt_player.h.QI = function(a, b, c) {
    var d = _yt_player.$a(arguments, 2);
    (0, _yt_player.B)(a, function(a) {
            b.apply(this, _yt_player.Xa(a, d))
        },
        this)
};


_yt_player.h.nj = function(a, b, c) {
    var d = hza(this, a);
    d = _yt_player.Xa([d], _yt_player.$a(arguments, 1));
    this.QI.apply(this, d)
};


_yt_player.iY.annotations_module = a4;
_yt_player.iY.creatorendscreen = G2;
var U4 = P4.getInstance(),
    V4 = Z(U4);
V4 in T4 || (U4.register(), j4(U4, "yt-uix-init-" + V4, U4.init), j4(U4,
        "yt-uix-dispose-" + V4, U4.dispose), T4[V4] =
    U4);