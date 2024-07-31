var window = this;

function subscribeToRootMenuRemoval(element, callback) {
    var c = !1,
        d = element.subscribe('ROOT_MENU_REMOVED', function(element) {
            c || (c = !0, this.Ud(d), callback.apply(void 0, arguments));
        }, element);
}

function addPollChoiceInputListener(cardObject, inputElement, callback, inputId) {
    callback = (0, _yt_player.z)(callback, inputId || cardObject.l);
    inputElement = _yt_player.AF(inputElement, 'change', callback, 'iv-card-poll-choice-input');
    cardObject.g.push(inputElement);
}

function getCardEventTarget(cardObject) {
    cardObject.g || (cardObject.g = new _yt_player.XC(), _yt_player.N(cardObject, cardObject.g));
    return cardObject.g;
}

function updateCardState(cardObject) {
    cardObject.R('cardstatechange', _yt_player.cV(cardObject) && _yt_player.dV(cardObject) ? 1 : 0);
}

function flattenArguments(args) {
    for (var b = [], c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        if (_yt_player.Aa(d))
            for (var e = 0; e < d.length; e += 8192) {
                var f = _yt_player.$a(d, e, e + 8192);
                f = flattenArguments.apply(null, f);
                for (var k = 0; k < f.length; k++)
                    b.push(f[k]);
            }
        else
            b.push(d);
    }
    return b;
}

function findChildElements(element, predicate, resultArray, recursive) {
    if (null != element)
        for (element = element.firstChild; element;) {
            if (predicate(element) && (resultArray.push(element), recursive) || findChildElements(element, predicate, resultArray, recursive))
                return !0;
            element = element.nextSibling;
        }
    return !1;
}

function findFirstChildElement(element, predicate) {
    var c = [];
    return findChildElements(element, predicate, c, !0) ? c[0] : void 0;
}

function extractElementText(element, textArray, removeLineBreaks) {
    if (!(element.nodeName in tva))
        if (3 == element.nodeType)
            removeLineBreaks ? textArray.push(String(element.nodeValue).replace(/(\r\n|\r|\n)/g, '')) : textArray
            .push(element.nodeValue);
        else if (element.nodeName in uva)
        textArray.push(uva[element.nodeName]);
    else
        for (element = element.firstChild; element;)
            extractElementText(element, textArray, removeLineBreaks), element = element.nextSibling;
}

function getNormalizedElementText(element) {
    if (_yt_player.Xta && null !== element && 'innerText' in element)
        element = element.innerText.replace(/(\r\n|\r|\n)/g, '\n');
    else {
        var b = [];
        extractElementText(element, b, !0);
        element = b.join('');
    }
    element = element.replace(/ \xAD /g, ' ').replace(/\xAD/g, '');
    element = element.replace(/\u200B/g, '');
    _yt_player.Xta || (element = element.replace(/ +/g, ' '));
    ' ' != element && (element = element.replace(/^\s*/, ''));
    return element;
}

function createBoundingBoxFromRect(rectObject) {
    return new _yt_player.bh(rectObject.left, rectObject.top, rectObject.right - rectObject.left, rectObject.bottom - rectObject.top);
}

function isElementRtl(element) {
    return 'rtl' == _yt_player.uh(element, 'direction');
}

function getFontSizeInPixels(element) {
    var b = _yt_player.uh(element, 'fontSize');
    var c = (c = b.match(xva)) && c[0] || null;
    if (b && 'px' == c)
        return (0, window.parseInt)(b, 10);
    if (_yt_player.yd) {
        if (String(c) in yva)
            return _yt_player.Oh(element, b, 'left', 'pixelLeft');
        if (element.parentNode && 1 == element.parentNode.nodeType && String(c) in zva)
            return element = element.parentNode, c = _yt_player.uh(element, 'fontSize'),
                _yt_player.Oh(element, b == c ? '1em' : b, 'left', 'pixelLeft');
    }
    c = _yt_player.K('SPAN', {
        style: 'visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;'
    });
    element.appendChild(c);
    b = c.offsetHeight;
    _yt_player.Kd(c);
    return b;
}

function Y1(a, b) {
    this.start = a < b ? a : b;
    this.end = a < b ? b : a;
}

function Z1(a, b) {
    if (/-[a-z]/.test(b))
        return null;
    if (_yt_player.ek && a.dataset) {
        if (_yt_player.kc() && !(b in a.dataset))
            return null;
        var c = a.dataset[b];
        return void 0 === c ? null : c;
    }
    return a.getAttribute('data-' + _yt_player.Hb(b));
}

function $1(a, b, c, d, e, f, k) {
    this.date = _yt_player.ua(a) ? new Date(a, b || 0, c || 1, d || 0, e || 0,
        f || 0, k || 0) : new Date(a && a.getTime ? a.getTime() : (0,
        _yt_player.F)());
}

function c2(a) {
    a = _yt_player.Fa(a);
    delete a2[a];
    _yt_player.Yb(a2) && b2 && b2.stop();
}

function Cva() {
    b2 || (b2 = new _yt_player.Yt(function() {
        Bva();
    }, 20));
    var a = b2;
    a.isActive() || a.start();
}

function Bva() {
    var a = (0, _yt_player.F)();
    _yt_player.Lb(a2, function(b) {
        Dva(b, a);
    });
    _yt_player.Yb(a2) || Cva();
}

function Eva(a, b) {
    _yt_player.bf.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.z = b.coords[2];
    this.duration = b.duration;
    this.progress = b.progress;
    this.fps = b.C;
    this.state = b.g;
}

function d2(a, b, c, d) {
    _yt_player.ut.call(this);
    if (!_yt_player.Aa(a) || !_yt_player.Aa(b))
        throw Error('Start and end parameters must be arrays');
    if (a.length != b.length)
        throw Error('Start and end points must be the same length');
    this.l = a;
    this.D = b;
    this.duration = c;
    this.B = d;
    this.coords = [];
    this.progress = this.C = 0;
    this.A = null;
}

function Dva(a, b) {
    b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime =
        b);
    a.progress = (b - a.startTime) / (a.endTime - a.startTime);
    1 < a.progress && (a.progress = 1);
    a.C = 1000 / (b - a.A);
    a.A = b;
    Fva(a, a.progress);
    1 == a.progress ? (a.g = 0, c2(a), a.wd(), a.xm()) : a.kb() && a.Iu();
}

function Fva(a, b) {
    _yt_player.Ca(a.B) && (b = a.B(b));
    a.coords = Array(a.l.length);
    for (var c = 0; c < a.l.length; c++)
        a.coords[c] = (a.D[c] - a.l[c]) * b + a.l[c];
}

function e2(a, b, c, d, e) {
    d2.call(this, b, c, d, e);
    this.element = a;
}

function f2(a, b, c, d, e) {
    if (2 != b.length || 2 != c.length)
        throw Error('Start and end points must be 2D');
    e2.apply(this, arguments);
}

function Gva(a) {
    return Math.pow(a, 3);
}

function Hva(a) {
    return 3 * a * a - 2 * a * a * a;
}

function Iva(a, b) {
    return (b & 8 && isElementRtl(a) ? b ^ 4 : b) & -9;
}

function positionElementWithConstraints(position, element, alignment, margin, constraintRect, allowClipping, referencePosition) {
    position = position.clone();
    var l = Iva(element, alignment);
    alignment = _yt_player.Kh(element);
    referencePosition = referencePosition ? referencePosition.clone() : alignment.clone();
    position = _yt_player.WC(position, referencePosition, l, margin, constraintRect, allowClipping);
    if (position.status & 496)
        return position.status;
    _yt_player.wh(element, _yt_player.gh(position.rect));
    referencePosition = _yt_player.fh(position.rect);
    _yt_player.kd(alignment, referencePosition) || (margin = referencePosition, constraintRect = _yt_player.md(element), allowClipping = _yt_player.vd(
            _yt_player.od(constraintRect).g), !_yt_player.yd || _yt_player.rc('10') ||
        allowClipping && _yt_player.rc('8') ? (element = element.style, _yt_player.rh ? element
            .MozBoxSizing = 'border-box' : _yt_player.Ad ? element
            .WebkitBoxSizing = 'border-box' : element.boxSizing = 'border-box', element
            .width = Math.max(margin.width, 0) + 'px', element.height = Math.max(margin
                .height, 0) + 'px') : (constraintRect = element.style, allowClipping ? (allowClipping = _yt_player.Qh(
                element), element = _yt_player.Th(element), constraintRect.pixelWidth = margin.width - element
            .left - allowClipping.left - allowClipping.right - element.right, constraintRect.pixelHeight = margin
            .height - element.top - allowClipping.top - allowClipping.bottom - element.bottom) : (constraintRect
            .pixelWidth = margin.width, constraintRect.pixelHeight = margin.height)));
    return position.status;
}

function calculateElementPosition(
    element,
    alignment,
    referenceElement,
    referenceAlignment,
    offset,
    constraintRect,
    allowClipping,
    referencePosition
) {
    var l;
    if (l = referenceElement.offsetParent) {
        var m = 'HTML' == l.tagName || 'BODY' == l.tagName;
        if (!m || 'static' != _yt_player.uh(l, 'position')) {
            var n = _yt_player.Ch(l);
            if (!m) {
                m = isElementRtl(l);
                var p;
                if (p = m) {
                    p = _yt_player.bM && _yt_player.Mn(10);
                    var r = _yt_player.Uta && 0 <= _yt_player.Cb(_yt_player.Fua,
                        10);
                    p = _yt_player.rh || p || r;
                }
                m = p ? -l.scrollLeft : !m || _yt_player.oH && _yt_player.rc(
                        '8') || 'visible' == _yt_player.uh(l, 'overflowX') ? l
                    .scrollLeft : l.scrollWidth - l.clientWidth - l.scrollLeft;
                n = _yt_player.jd(n, new _yt_player.hd(m, l.scrollTop));
            }
        }
    }
    l = n || new _yt_player.hd();
    n = _yt_player.Lh(element);
    (m = _yt_player.Dh(element)) && _yt_player.eh(n, createBoundingBoxFromRect(m));
    m = _yt_player.od(element);
    r = _yt_player.od(referenceElement);
    m.g != r.g && (p = m.g.body, r = _yt_player.Fh(p, _yt_player.be(r)), r =
        _yt_player.jd(r, _yt_player.Ch(p)), !_yt_player.yd || _yt_player.sc(
            9) || _yt_player.vd(m.g) || (r = _yt_player.jd(r, _yt_player.zd(
            m.g))), n.left += r.x, n.top += r.y);
    element = Iva(element, alignment);
    alignment = n.left;
    element & 4 ? alignment += n.width : element & 2 && (alignment += n.width / 2);
    alignment = new _yt_player.hd(alignment, n.top + (element & 1 ? n.height : 0));
    alignment = _yt_player.jd(alignment, l);
    offset && (alignment.x += (element & 4 ? -1 : 1) * offset.x, alignment.y += (element & 1 ? -1 : 1) * offset.y);
    var v;
    allowClipping && (v = _yt_player.Dh(referenceElement)) && (v.top -= l.y, v.right -= l.x, v.bottom -= l
        .y, v.left -= l.x);
    return positionElementWithConstraints(alignment, referenceElement, referenceAlignment, constraintRect, v, allowClipping, void 0);
}

function removeDataAttribute(element, attributeName) {
    element && (element.dataset ? delete element.dataset[_yt_player.$E(attributeName)] : element.removeAttribute(
        'data-' + attributeName));
}

function generateUniqueId(element) {
    var b = element.__yt_uid_key;
    b || (b = (0, _yt_player.Pua)(), element.__yt_uid_key = b);
    return b;
}

function isElementDescendant(element, potentialAncestor) {
    element = _yt_player.pd(element);
    potentialAncestor = _yt_player.pd(potentialAncestor);
    return !!_yt_player.Yd(element, function(element) {
        return element === potentialAncestor;
    }, !0, void 0);
}

function findElementByTag(tagName, contextElement) {
    var c = _yt_player.qd(window.document, tagName, null, contextElement);
    return c.length ? c[0] : null;
}

function showHiddenPlayers() {
    _yt_player.U(window.document.body, 'hide-players', !1);
    var a = _yt_player.rd('preserve-players');
    (0, _yt_player.B)(a, function(a) {
        _yt_player.mq(a, 'preserve-players');
    });
}

function simulateClickEvent(element) {
    if (window.document.createEvent) {
        var b = window.document.createEvent('HTMLEvents');
        b.initEvent('click', !0, !0);
        element.dispatchEvent(b);
    } else
        b = window.document.createEventObject(), element.fireEvent('onclick', b);
}

function Nva(a) {
    this.g = a;
}

function convertDataToVisualElementObject(data) {
    var b = {};
    void 0 !== data.g.trackingParams ? b.trackingParams = data.g.trackingParams : (b
        .veType = data.g.veType, null != data.g.veCounter && (b.veCounter = data.g
            .veCounter), null != data.g.elementIndex && (b.elementIndex = data.g
            .elementIndex));
    void 0 !== data.g.dataElement && (b.dataElement = convertDataToVisualElementObject(data.g.dataElement));
    void 0 !== data.g.youtubeData && (b.youtubeData = data.g.youtubeData);
    return b;
}

function createVisualElementObject(trackingParams) {
    return new Nva({
        trackingParams: trackingParams
    });
}

function getCurrentVisualElementObject() {
    var a = _yt_player.LG(0),
        b;
    a ? b = new Nva({
        veType: a,
        youtubeData: void 0
    }) : b = null;
    return b;
}

function setElementVisibility(element, isVisible) {
    (element = _yt_player.pd(element)) && element.style && (_yt_player.O(element, isVisible), _yt_player.U(element,
        'hid', !isVisible));
}

function isElementVisible(element) {
    return (element = _yt_player.pd(element)) ? _yt_player.Nh(element) && !_yt_player.kq(element,
        'hid') : !1;
}

function showElements(elements) {
    (0, _yt_player.B)(arguments, function(elements) {
        !_yt_player.Ba(elements) || elements instanceof window.Element ? setElementVisibility(elements, !0) : (0,
            _yt_player.B)(elements, function(elements) {
            showElements(elements);
        });
    });
}

function hideElements(elements) {
    (0, _yt_player.B)(arguments, function(elements) {
        !_yt_player.Ba(elements) || elements instanceof window.Element ? setElementVisibility(elements, !1) : (0,
            _yt_player.B)(elements, function(elements) {
            hideElements(elements);
        });
    });
}

function p2(a, b, c) {
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
    this.C = createVisualElementObject(b.card);
    this.F = createVisualElementObject(b.teaser);
    this.D = createVisualElementObject(b.icon);
}

function createSvgElement(svgElement, context) {
    _yt_player.Df.call(this);
    this.El = svgElement;
    this.rs = context;
    this[_yt_player.gf] = !1;
}

function createSvgPathElement(pathElement, context, stroke, fill) {
    createSvgElement.call(this, pathElement, context);
    pathElement = this.rs;
    context = this.la();
    stroke ? (context.setAttribute('stroke', stroke.g), context.setAttribute('stroke-opacity', 1), stroke =
        stroke.Cb(), _yt_player.u(stroke) && -1 != stroke.indexOf('px') ? context.setAttribute(
            'stroke-width', (0, window.parseFloat)(stroke) / getSvgScaleFactor(pathElement)) : context
        .setAttribute('stroke-width', stroke)) : context.setAttribute('stroke', 'none');
    this.fill = fill;
    stroke = this.rs;
    pathElement = this.la();
    if (fill instanceof r2)
        pathElement.setAttribute('fill', fill.H), pathElement.setAttribute('fill-opacity', fill.I);
    else if (fill instanceof s2) {
        context = 'lg-' + fill.B + '-' + fill.D + '-' + fill.C + '-' + fill.F + '-' + fill.g + '-' +
            fill.l;
        var e = context in stroke.l ? stroke.l[context] : null;
        if (!e) {
            e = createSvgElementWithAttributes(stroke, 'linearGradient', {
                x1: fill.B,
                y1: fill.D,
                x2: fill.C,
                createSvgElementBase: fill.F,
                gradientUnits: 'userSpaceOnUse'
            });
            var f = 'stop-color:' + fill.g;
            _yt_player.ua(fill.o) && (f += ';stop-opacity:' + fill.o);
            f = createSvgElementWithAttributes(stroke, 'stop', {
                offset: '0%',
                style: f
            });
            e.appendChild(f);
            f = 'stop-color:' + fill.l;
            _yt_player.ua(fill.A) && (f += ';stop-opacity:' + fill.A);
            fill = createSvgElementWithAttributes(stroke, 'stop', {
                offset: '100%',
                style: f
            });
            e.appendChild(fill);
            e = addSvgDefinition(stroke, context, e);
        }
        pathElement.setAttribute('fill', 'url(#' + e + ')');
    } else
        pathElement.setAttribute('fill', 'none');
}
Sva = function() {}, createSvgGroupElement = function(a, b) {
    createSvgElement.call(this, a, b);
};

function v2() {
    this.rb = [];
    this.Ka = [];
    this.Ce = [];
}

function w2(a, b, c, d) {
    var e = a.Zd[0] - b * Math.cos(_yt_player.gd(d)) + b * Math.cos(_yt_player
            .gd(d + 90)),
        f = a.Zd[1] - c * Math.sin(_yt_player.gd(d)) + c * Math.sin(_yt_player
            .gd(d + 90));
    a.rb.push(3);
    a.Ka.push(1);
    a.Ce.push(b, c, d, 90, e, f);
    a.Jm = !1;
    a.Zd = [
        e,
        f
    ];
}

function iterateOverPathCommands(pathObject, callback) {
    for (var c = pathObject.Ce, d = 0, e = 0, f = pathObject.rb.length; e < f; e++) {
        var k = pathObject.rb[e],
            l = Uva[k] * pathObject.Ka[e];
        callback(k, c.slice(d, d + l));
        d += l;
    }
}

function createSvgRectElement(rectElement, context, stroke, fill) {
    createSvgPathElement.call(this, rectElement, context, stroke, fill);
}

function x2(a, b) {
    this.l = a;
    this.g = b;
}

function createSvgElementBase(width, height, viewBoxWidth, viewBoxHeight, renderer) {
    _yt_player.Tu.call(this, renderer);
    this.width = width;
    this.height = height;
    this.o = viewBoxWidth || null;
    this.K = viewBoxHeight || null;
}

function getSvgScaleFactor(svgObject) {
    var b = svgObject.Hj();
    return b ? b.width / (svgObject.o ? new _yt_player.I(svgObject.o, svgObject.K) : svgObject.Hj()).width : 0;
}

function s2(a, b, c, d, e, f, k, l) {
    this.B = a;
    this.D = b;
    this.C = c;
    this.F = d;
    this.g = e;
    this.l = f;
    this.o = _yt_player.t(k) ? k : null;
    this.A = _yt_player.t(l) ? l : null;
}

function r2(a, b) {
    this.H = a;
    this.I = null == b ? 1 : b;
}

function z2(a, b) {
    createSvgElement.call(this, a, b);
}

function Xva(a, b, c, d) {
    createSvgPathElement.call(this, a, b, c, d);
}

function A2(a, b, c, d, e) {
    createSvgElementBase.call(this, a, b, c, d, e);
    this.l = {};
    this.M = _yt_player.Ad && !_yt_player.rc(526);
    this.I = new _yt_player.Lm(this);
}

function createSvgElementWithAttributes(svgObject, elementName, attributes) {
    svgObject = svgObject.H.g.createElementNS('http://www.w3.org/2000/svg', elementName);
    if (attributes)
        for (var d in attributes)
            svgObject.setAttribute(d, attributes[d]);
    return svgObject;
}

function addPathToSvg(a, b, c, d) {
    b = createSvgElementWithAttributes(a, 'path', {
        d: convertPathToSvgString(b)
    });
    c = new Xva(b, a, c, d);
    a.B.la().appendChild(c.la());
}

function convertPathToSvgString(pathObject) {
    var b = [];
    iterateOverPathCommands(pathObject, function(pathObject, d) {
        switch (pathObject) {
            case 0:
                b.push('M');
                Array.prototype.push.apply(b, d);
                break;
            case 1:
                b.push('L');
                Array.prototype.push.apply(b, d);
                break;
            case 2:
                b.push('C');
                Array.prototype.push.apply(b, d);
                break;
            case 3:
                var c = d[3];
                b.push('A', d[0], d[1], 0, 180 < Math.abs(c) ? 1 : 0,
                    0 < c ? 1 : 0, d[4], d[5]);
                break;
            case 4:
                b.push('Z');
        }
    });
    return b.join(' ');
}

function addSvgDefinition(svgObject, definitionId, definitionElement) {
    if (definitionId in svgObject.l)
        return svgObject.l[definitionId];
    var d = '_svgdef_' + Zva++;
    definitionElement.setAttribute('id', d);
    svgObject.l[definitionId] = d;
    svgObject.F.appendChild(definitionElement);
    return d;
}

function $va() {
    C2 || (C2 = new _yt_player.sg(400), C2.start());
    return C2;
}

function logChildVisualElementAttachment(csn, parentElement, childElements) {
    var d = _yt_player.vG;
    csn = {
        csn: csn,
        parentVisualElement: convertDataToVisualElementObject(parentElement),
        visualElements: (0, _yt_player.G)(childElements, function(csn) {
            return convertDataToVisualElementObject(csn);
        })
    };
    logInteractionEvent(d, {
        attachChild: csn
    });
}

function logVisualElementShown(csn, element) {
    _yt_player.wG('visualElementShown', {
        csn: csn,
        ve: convertDataToVisualElementObject(element),
        eventType: 1
    });
}

function logVisualElementClick(csn, element) {
    _yt_player.wG('visualElementGestured', {
        csn: csn,
        ve: convertDataToVisualElementObject(element),
        gestureType: 'INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK'
    });
}

function logInteractionEvent(loggerInstance, eventData) {
    eventData.eventTimeMs = Math.round(_yt_player.hG());
    eventData.lactMs = _yt_player.uG();
    _yt_player.dG({
        endpoint: 'log_interaction',
        payload: eventData
    }, loggerInstance);
}

function convertEndscreenData(data, target) {
    function c(data) {
        return data.baseUrl;
    }

    function d(data) {
        if (data) {
            var target = data.simpleText;
            if (target)
                return target;
            if (data.runs)
                return (0, _yt_player.G)(data.runs, function(data) {
                    return data.text;
                }).join('');
        }
    }

    function e(data) {
        if (data) {
            var target = [],
                c = data.videoId;
            c && target.push('v=' + c);
            (c = data.playlistId) && target.push('list=' + c);
            (data = data.startTimeSeconds) && target.push('t=' + data);
            return '/watch?' + target.join('&');
        }
    }
    var f = {};
    f.startMs = (0, window.parseInt)(data.startMs, 10);
    f.impressionUrls = (0, _yt_player.G)(data.impressionUrls || [], c);
    f.skip = data.skipEndscreen;
    f.visualElement = createVisualElementObject(data.trackingParams);
    var k = (0, _yt_player.G)(data.elements || [], function(data, f) {
        var k = data.endscreenElementRenderer;
        if (!k)
            return null;
        var l = {},
            m = k.style,
            v = k.endpoint || {};
        l.id = 'element-' + f;
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
        l.qn = _yt_player.Tb(k, 'title', 'accessibility',
            'accessibilityData', 'label');
        l.impressionUrls = (0, _yt_player.G)(k.impressionUrls || [], c);
        l.MK = (0, _yt_player.G)(k.hovercardShowUrls || [], c);
        l.Rd = {
            itct: k.trackingParams
        };
        l.visualElement = createVisualElementObject(k.trackingParams);
        if ('VIDEO' == m)
            l.targetUrl = v.urlEndpoint ? v.urlEndpoint.url : e(v
                .watchEndpoint), l.Oo = !1, l.mq = target, l.videoDuration =
            d(k.videoDuration);
        else if ('PLAYLIST' == m)
            l.targetUrl = v.urlEndpoint ? v.urlEndpoint.url : e(v
                .watchEndpoint), l.Oo = !1, l.mq = target, l.playlistLength =
            d(k.playlistLength);
        else if ('CHANNEL' == m) {
            if (m = _yt_player.Tb(v, 'browseEndpoint', 'browseId'))
                l.channelId = m, l.targetUrl = '/channel/' + m;
            l.Oo = !1;
            l.mq = 'new';
            l.isSubscribe = !!k.isSubscribe;
            if (l.isSubscribe) {
                data: {
                    if (m = k.hovercardButton)
                        if (m = m.subscribeButtonRenderer) {
                            v = d(m.unsubscribedButtonText);
                            var D = d(m.subscribedButtonText);
                            if (m.subscribed) {
                                var H = d(m
                                    .subscriberCountWithUnsubscribeText
                                    );
                                var L = d(m.subscriberCountText);
                            } else
                                H = d(m.subscriberCountText), L = d(m
                                    .subscriberCountWithSubscribeText);
                            var T = null;
                            if (k.signinEndpoint && (T = _yt_player.Tb(
                                    k, 'signinEndpoint',
                                    'webNavigationEndpointData',
                                    'url'), !T)) {
                                k = void 0;
                                break data;
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
                                break data;
                            }
                        }
                    k = void 0;
                }
                l.subscribeButton = k;
            }
            else
                l.subscribersText = d(k.subscribersText);
        } else
            'WEBSITE' == m && (l.targetUrl = _yt_player.Tb(v,
                    'urlEndpoint', 'url'), l.Oo = !0, l.mq = 'new', l
                .iconUrl = k.icon.thumbnails[0].url);
        return l;
    });
    f.elements = (0, _yt_player.Ld)(k, function(data) {
        return !!data;
    });
    return f;
}

function isCreatorEndscreen(playerStyle) {
    _yt_player.sV.call(this, playerStyle);
    this.o = null;
    this.J = !1;
    this.B = null;
    this.l = {};
    this.F = {};
    this.D = this.A = null;
    this.K = [];
    playerStyle = _yt_player.Y(playerStyle);
    this.M = _yt_player.HM(playerStyle) || _yt_player.IM(playerStyle);
    this.LE = !0;
    this.H = 0;
    this.I = new _yt_player.cp(null);
    this.C = new _yt_player.FF(this);
    _yt_player.N(this, this.C);
    this.C.O(this.g, 'crn_creatorendscreen', this.EM);
    this.C.O(this.g, 'crx_creatorendscreen', this.FM);
    this.C.O(this.g, 'resize', this.XA);
    this.C.O(window, 'focus', this.RU);
    this.load();
    var b = _yt_player.Ed('STYLE');
    (window.document.getElementsByTagName('HEAD')[0] || window.document.body)
    .appendChild(b);
    _yt_player.Ze(this, function() {
        _yt_player.Kd(b);
    });
    b.sheet && (b.sheet.insertRule(
        '.ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}',
        0), b.sheet.insertRule(
        '.ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}',
        0));
}

function H2(a) {
    return 'creator-endscreen-editor' === a;
}

function updateCreatorEndscreen(endscreenObject, data) {
    _yt_player.kV(endscreenObject.g, 'creatorendscreen');
    endscreenObject.A && (endscreenObject.A.dispose(), endscreenObject.A = null, endscreenObject.D.dispose(), endscreenObject.D = null);
    for (var c in endscreenObject.l)
        endscreenObject.l[c].dispose();
    endscreenObject.l = {};
    endscreenObject.F = {};
    0 < endscreenObject.K.length && (endscreenObject.K.forEach(function(endscreenObject) {
        endscreenObject.dispose();
    }), endscreenObject.K.length = 0);
    endscreenObject.H = 0;
    if ((endscreenObject.o = data) && data.elements) {
        logEndscreenImpression(endscreenObject);
        c = [];
        var d = new _yt_player.eQ(data.startMs, 2251799813685247, {
            id: 'ytp-ce-in-endscreen',
            namespace: 'creatorendscreen'
        });
        c.push(d);
        _yt_player.Y(endscreenObject.g).l || (endscreenObject.A = new _yt_player.W({
            G: 'div',
            L: 'ytp-ce-shadow'
        }), _yt_player.mV(endscreenObject.g, endscreenObject.A.element, 4), endscreenObject.D = new _yt_player.MV(
            endscreenObject.A, 200));
        for (d = 0; d < data.elements.length; ++d) {
            var e = data.elements[d],
                f = createEndscreenElement(endscreenObject, e);
            endscreenObject.l[e.id] = f;
            endscreenObject.F[e.id] = e;
            _yt_player.mV(endscreenObject.g, f.element, 4);
            var k = new _yt_player.eQ(e.startMs, e.endMs, {
                id: 'ytp-ce-element-' + e.id,
                namespace: 'creatorendscreen'
            });
            c.push(k);
            addEndscreenElementEventListeners(endscreenObject, f, e);
        }
        _yt_player.hV(endscreenObject.g, c);
        endscreenObject.XA();
    }
}

function logEndscreenImpression(endscreenObject) {
    var b = getCurrentVisualElementObject(),
        c = _yt_player.MG();
    c && b && logChildVisualElementAttachment(c, b, [endscreenObject.o.visualElement]);
}

function createEndscreenElement(endscreenObject, elementData) {
    var c = null;
    switch (elementData.type) {
        case 'VIDEO':
            c = {
                G: 'div',
                da: [
                    'ytp-ce-element',
                    'ytp-ce-video'
                ],
                P: {
                    tabindex: '0',
                    'aria-label': elementData.qn || '',
                    'aria-hidden': 'true'
                },
                N: [{
                        G: 'div',
                        L: 'ytp-ce-element-shadow'
                    },
                    {
                        G: 'div',
                        L: 'ytp-ce-covering-image',
                        P: createEndscreenElementBackgroundStyle(elementData)
                    },
                    {
                        G: 'div',
                        L: 'ytp-ce-covering-shadow-top'
                    },
                    {
                        G: 'a',
                        L: 'ytp-ce-covering-overlay',
                        P: {
                            href: elementData.targetUrl,
                            tabindex: '-1'
                        },
                        N: [{
                                G: 'div',
                                da: [
                                    'ytp-ce-video-title',
                                    'yt-ui-ellipsis',
                                    'yt-ui-ellipsis-2'
                                ],
                                P: {
                                    dir: _yt_player.dp(endscreenObject.I, elementData
                                        .title || '')
                                },
                                aa: elementData.title
                            },
                            {
                                G: 'div',
                                L: 'ytp-ce-video-duration',
                                aa: elementData.videoDuration
                            }
                        ]
                    }
                ]
            };
            c = new _yt_player.W(c);
            break;
        case 'PLAYLIST':
            c = {
                G: 'div',
                da: [
                    'ytp-ce-element',
                    'ytp-ce-playlist'
                ],
                P: {
                    tabindex: '0',
                    'aria-label': elementData.qn || '',
                    'aria-hidden': 'true'
                },
                N: [{
                        G: 'div',
                        L: 'ytp-ce-element-shadow'
                    },
                    {
                        G: 'div',
                        L: 'ytp-ce-covering-image',
                        P: createEndscreenElementBackgroundStyle(elementData)
                    },
                    {
                        G: 'div',
                        L: 'ytp-ce-covering-shadow-top'
                    },
                    {
                        G: 'a',
                        L: 'ytp-ce-covering-overlay',
                        P: {
                            href: elementData.targetUrl,
                            tabindex: '-1'
                        },
                        N: [{
                                G: 'div',
                                da: [
                                    'ytp-ce-playlist-title',
                                    'yt-ui-ellipsis',
                                    'yt-ui-ellipsis-2'
                                ],
                                P: {
                                    dir: _yt_player.dp(endscreenObject.I, elementData
                                        .title || '')
                                },
                                aa: elementData.title
                            },
                            {
                                G: 'div',
                                L: 'ytp-ce-playlist-count',
                                N: [{
                                        G: 'div',
                                        L: 'ytp-ce-playlist-icon'
                                    },
                                    {
                                        G: 'div',
                                        L: 'ytp-ce-playlist-count-text',
                                        aa: elementData.playlistLength
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
            c = new _yt_player.W(c);
            break;
        case 'CHANNEL':
            c = {
                G: 'div',
                da: [
                    'ytp-ce-element',
                    'ytp-ce-channel',
                    elementData.isSubscribe ? 'ytp-ce-channel-this' :
                    'ytp-ce-channel-that'
                ],
                P: {
                    tabindex: '0',
                    'aria-label': elementData.qn || '',
                    'aria-hidden': 'true'
                },
                N: [{
                        G: 'div',
                        L: 'ytp-ce-element-shadow'
                    },
                    {
                        G: 'div',
                        L: 'ytp-ce-expanding-overlay',
                        N: [{
                                G: 'div',
                                L: 'ytp-ce-expanding-overlay-hider'
                            },
                            {
                                G: 'div',
                                L: 'ytp-ce-expanding-overlay-background'
                            },
                            {
                                G: 'div',
                                L: 'ytp-ce-expanding-overlay-content',
                                N: [{
                                    G: 'div',
                                    L: 'ytp-ce-expanding-overlay-body',
                                    N: [{
                                        G: 'div',
                                        L: 'ytp-ce-expanding-overlay-body-padding',
                                        N: [{
                                                G: 'a',
                                                da: [
                                                    'ytp-ce-channel-title',
                                                    'ytp-ce-link'
                                                ],
                                                P: {
                                                    href: elementData
                                                        .targetUrl,
                                                    target: '_blank',
                                                    tabindex: '-1',
                                                    dir: _yt_player
                                                        .dp(endscreenObject
                                                            .I,
                                                            elementData
                                                            .title ||
                                                            ''
                                                            )
                                                },
                                                aa: elementData
                                                    .title
                                            },
                                            elementData
                                            .subscribeButton ?
                                            {
                                                G: 'div',
                                                L: 'ytp-ce-subscribe-container',
                                                N: [{
                                                    G: 'div',
                                                    L: 'ytp-ce-channel-subscribe'
                                                }]
                                            } :
                                            '',
                                            elementData
                                            .subscribersText ?
                                            {
                                                G: 'div',
                                                L: 'ytp-ce-channel-subscribers-text',
                                                aa: elementData
                                                    .subscribersText
                                            } :
                                            '',
                                            elementData
                                            .metadata ?
                                            {
                                                G: 'div',
                                                da: [
                                                    'ytp-ce-channel-metadata',
                                                    'yt-ui-ellipsis',
                                                    'yt-ui-ellipsis-3'
                                                ],
                                                aa: elementData
                                                    .metadata
                                            } :
                                            ''
                                        ]
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        G: 'div',
                        L: 'ytp-ce-expanding-image',
                        P: createEndscreenElementBackgroundStyle(elementData)
                    }
                ]
            };
            c = new _yt_player.W(c);
            var d = _yt_player.qd(window.document, 'div',
                'ytp-ce-channel-subscribe', c.element)[0];
            if (elementData.subscribeButton) {
                _yt_player.S(d, 'ytp-ce-subscribe-button');
                if (_yt_player.Y(endscreenObject.g).l) {
                    var e = null;
                    var f = elementData.Rd.itct;
                } else
                    e = 'endscreen', f = null;
                e = new _yt_player.y_(elementData.subscribeButton.subscribeText, elementData
                    .subscribeButton.subscribeCount, elementData.subscribeButton
                    .unsubscribeText, elementData.subscribeButton.unsubscribeCount, elementData
                    .subscribeButton.enabled, elementData.subscribeButton.classic, elementData
                    .channelId, !!elementData.subscribeButton.subscribed, e, f, elementData
                    .subscribeButton.signinUrl, endscreenObject.g);
                d.appendChild(e.element);
                endscreenObject.K.push(e);
            }
            break;
        case 'WEBSITE':
            c = {
                G: 'div',
                da: [
                    'ytp-ce-element',
                    'ytp-ce-website'
                ],
                P: {
                    tabindex: '0',
                    'aria-label': elementData.qn || '',
                    'aria-hidden': 'true'
                },
                N: [{
                        G: 'div',
                        L: 'ytp-ce-element-shadow'
                    },
                    {
                        G: 'div',
                        L: 'ytp-ce-expanding-overlay',
                        N: [{
                                G: 'div',
                                L: 'ytp-ce-expanding-overlay-hider'
                            },
                            {
                                G: 'div',
                                L: 'ytp-ce-expanding-overlay-background'
                            },
                            {
                                G: 'div',
                                L: 'ytp-ce-expanding-overlay-content',
                                N: [{
                                    G: 'div',
                                    L: 'ytp-ce-expanding-overlay-body',
                                    N: [{
                                        G: 'div',
                                        L: 'ytp-ce-expanding-overlay-body-padding',
                                        N: [{
                                                G: 'div',
                                                L: 'ytp-ce-website-title',
                                                P: {
                                                    dir: _yt_player
                                                        .dp(endscreenObject
                                                            .I,
                                                            elementData
                                                            .title ||
                                                            ''
                                                            )
                                                },
                                                aa: elementData
                                                    .title
                                            },
                                            {
                                                G: 'div',
                                                L: 'ytp-ce-website-metadata',
                                                aa: elementData
                                                    .metadata
                                            },
                                            {
                                                G: 'a',
                                                da: [
                                                    'ytp-ce-website-goto',
                                                    'ytp-ce-link'
                                                ],
                                                P: {
                                                    href: elementData
                                                        .targetUrl,
                                                    target: '_blank',
                                                    tabindex: '-1'
                                                },
                                                aa: elementData
                                                    .callToAction
                                            }
                                        ]
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        G: 'div',
                        L: 'ytp-ce-expanding-image',
                        P: createEndscreenElementBackgroundStyle(elementData)
                    },
                    {
                        G: 'div',
                        L: 'ytp-ce-expanding-icon',
                        P: createBackgroundImageStyle(elementData.iconUrl)
                    }
                ]
            }, c = new _yt_player.W(c);
    }
    elementData.g && _yt_player.S(c.element, 'ytp-ce-placeholder');
    return c;
}

function createEndscreenElementBackgroundStyle(image) {
    if (image.By)
        var b = image.By.thumbnails;
    return createBackgroundImageStyle(b ? b[b.length - 1].url : null);
}

function createBackgroundImageStyle(imageUrl) {
    return imageUrl ? {
        style: 'background-image: url(' + imageUrl + ')'
    } : {};
}

function addEndscreenElementEventListeners(endscreenObject, element, elementData) {
    function d() {
        k(1);
    }

    function e() {
        k(-1);
    }
    element.U('mouseenter', (0, _yt_player.z)(endscreenObject.Ut, endscreenObject, element, elementData));
    element.U('mouseleave', (0, _yt_player.z)(endscreenObject.Ru, endscreenObject, element, elementData));
    _yt_player.Y(endscreenObject.g).l || element.U('click', (0, _yt_player.z)(function(endscreenObject) {
        _yt_player.S(endscreenObject.element, 'ytp-ce-element-hover');
    }, endscreenObject, element));
    element.U('click', (0, _yt_player.z)(endscreenObject.HC, endscreenObject, elementData));
    element.U('keypress', (0, _yt_player.z)(endscreenObject.HC, endscreenObject, elementData));
    element.U('focus', (0, _yt_player.z)(function(endscreenObject, element) {
        this.Ut(endscreenObject, element);
    }, endscreenObject, element, elementData));
    element.U('blur', (0, _yt_player.z)(function(endscreenObject, element) {
        this.Ru(endscreenObject, element);
    }, endscreenObject, element, elementData));
    element.U('touchstart', (0, _yt_player.z)(endscreenObject.Ut, endscreenObject, element, elementData));
    var f = _yt_player.J('ytp-ce-expanding-overlay-hider', element.element);
    f && element.O(f, 'touchstart', function(endscreenObject) {
        endscreenObject = endscreenObject || window.event;
        endscreenObject.cancelBubble = !0;
        endscreenObject.stopPropagation && endscreenObject.stopPropagation();
        _yt_player.mq(element.element, 'ytp-ce-element-hover');
        _yt_player.mq(element.element, 'ytp-ce-force-expand');
    });
    element.U('keydown', (0, _yt_player.z)(function(endscreenObject, element) {
        this.LE = 9 == element.keyCode && !element.shiftKey;
    }, endscreenObject, element));
    var k = (0, _yt_player.z)(function(endscreenObject, element, elementData) {
        this.H += elementData;
        0 < this.H ? (_yt_player.S(endscreenObject.element, 'ytp-ce-force-expand'),
            updateEndscreenElementVisibility(this, element.id, !0)) : (_yt_player.mq(endscreenObject.element,
            'ytp-ce-force-expand'), _yt_player.mq(endscreenObject.element,
            'ytp-ce-element-hover'), updateEndscreenElementVisibility(this, element.id, !1));
    }, endscreenObject, element, elementData);
    endscreenObject = (0, _yt_player.z)(function(endscreenObject, element) {
        element && (endscreenObject.U('blur', function() {
            _yt_player.Nh(element) && this.LE && element.focus();
        }), endscreenObject.O(element, 'focus', d), endscreenObject.O(element, 'blur', e));
    }, endscreenObject, element);
    endscreenObject(_yt_player.J('ytp-sb-subscribe', element.element));
    endscreenObject(_yt_player.J('ytp-sb-unsubscribe', element.element));
    element.U('focus', d);
    element.U('blur', e);
}

function updateEndscreenElementVisibility(endscreenObject, elementId, isVisible) {
    endscreenObject.A && (isVisible ? endscreenObject.D.show() : endscreenObject.D.hide());
    for (var d in endscreenObject.l)
        d != elementId && _yt_player.U(endscreenObject.l[d].element, 'ytp-ce-element-shadow-show', isVisible);
}

function sendImpressionPing(endscreenObject, urls, callback) {
    function d() {
        f || (e++, e == urls.length && (k.stop(), callback && callback()));
    }
    if (!urls || H2(_yt_player.Y(endscreenObject.g).playerStyle))
        callback && callback();
    else {
        urls = generatePingUrls(endscreenObject, urls);
        var e = 0,
            f = !1,
            k = new _yt_player.Yt(function() {
                f = !0;
                callback && callback();
            }, 1000, endscreenObject);
        k.start();
        for (endscreenObject = 0; endscreenObject < urls.length; endscreenObject++)
            _yt_player.FE(urls[endscreenObject], d);
    }
}

function handleEndscreenElementClick(endscreenObject, elementData, callback) {
    sendImpressionPing(endscreenObject, elementData.clickUrls, callback);
    (endscreenObject = _yt_player.MG()) && elementData.Oo && logVisualElementClick(endscreenObject, elementData.visualElement);
}

function generatePingUrls(endscreenObject, urls) {
    var c = endscreenObject.g.getVideoData().clientPlaybackNonce,
        d = endscreenObject.g.getCurrentTime().toFixed(2);
    c = {
        CPN: c,
        AD_CPN: c,
        MT: d
    };
    d = [];
    for (var e = 0; e < urls.length; e++)
        d.push(replacePingUrlPlaceholders(urls[e], c));
    return d;
}

function replacePingUrlPlaceholders(url, replacements) {
    return url.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function(url) {
        var c = (0, window.unescape)(url);
        c = c.substring(1, c.length - 1);
        return replacements[c] ? (0, window.escape)(replacements[c]) : url;
    });
}

function getFirstArrayElement(array) {
    return _yt_player.Aa(array) && array.length ? array[0] : array;
}

function ensureString(value) {
    var b = /.+/;
    return _yt_player.u(value) && null != b && null != value && value.match(b) ? value : '';
}

function parseColorString(colorString, defaultColor) {
    if (null == colorString)
        return defaultColor;
    var c = (0, window.parseInt)(colorString, 0);
    if ((0, window.isNaN)(c))
        return defaultColor;
    c = c.toString(16);
    return '#' + '000000'.substring(0, 6 - c.length) + c;
}

function convertToString(value) {
    return _yt_player.u(value) ? value : '';
}

function getEnumValue(value, enumObject, defaultValue) {
    for (var d in enumObject)
        if (enumObject[d] == value)
            return value;
    return defaultValue;
}

function parseBoolean(value, defaultValue) {
    return 'true' == value || 'false' == value ? 'true' == value : defaultValue;
}

function parseFloatValue(value, defaultValue) {
    return _yt_player.u(value) ? (0, window.parseFloat)(value) : defaultValue;
}

function U2(a, b, c, d, e) {
    a = (0, window.parseFloat)(a);
    if (null != a && !(0, window.isNaN)(a)) {
        if (d)
            return _yt_player.dd(a, b, c);
        if (a >= b && a <= c)
            return a;
    }
    return e;
}

function parseTimeString(timeString) {
    if (null == timeString)
        return 0;
    if ('never' == timeString)
        return -1;
    timeString = timeString.split(':');
    if (3 < timeString.length)
        return 0;
    var b = 0,
        c = 1;
    (0, _yt_player.B)(timeString, function(timeString) {
        timeString = (0, window.parseFloat)(timeString);
        0 > timeString && (c = -c);
        b = 60 * b + Math.abs(timeString);
    });
    return c * b;
}

function mapArray(array, mappingFunction) {
    if (null == array)
        return null;
    if (_yt_player.Ba(array)) {
        var c = [];
        (0, _yt_player.B)(array, function(array) {
            (array = mappingFunction(array)) && c.push(array);
        });
        return c;
    }
    var d = mappingFunction(array);
    return d ? [d] : [];
}

function parsePaddingObject(paddingObject) {
    function b(paddingObject) {
        return null != paddingObject && !(0, window.isNaN)(paddingObject);
    }
    return (paddingObject = paddingObject ? new _yt_player.Zg((0, window.parseFloat)(paddingObject.top), (0, window
        .parseFloat)(paddingObject.right), (0, window.parseFloat)(paddingObject.bottom), (0,
        window.parseFloat)(paddingObject.left)) : null) && b(paddingObject.top) && b(paddingObject.right) && b(paddingObject
        .bottom) && b(paddingObject.left) ? paddingObject : null;
}

function parseEffectsString(effectsString) {
    function b(effectsString) {
        return (0, _yt_player.Ld)(effectsString.split(/ +/), function(effectsString) {
            return '' != effectsString;
        });
    }
    return null == effectsString ? [] : b(effectsString);
}

function lwa(a, b, c, d) {
    this.value = a;
    this.target = b;
    this.showLinkIcon = c;
    this.g = d;
}

function createLinkObject(linkData) {
    if (!linkData)
        return null;
    var b = _yt_player.Mc(convertToString(linkData.value));
    b = _yt_player.Jc(b);
    if (!b)
        return null;
    var c = getEnumValue(linkData.target, mwa, 'current');
    return null == c ? null : new lwa(b, c, parseBoolean(linkData.show_link_icon, !0), null != linkData
        .pause_on_navigation ? linkData.pause_on_navigation : !0);
}

function getLinkValue(linkObject) {
    return linkObject.value ? linkObject.value : null;
}

function createActionObject(type, trigger, url) {
    this.type = type;
    this.trigger = trigger;
    this.url = url;
}

function createActionFromData(data) {
    if (!data)
        return null;
    var b = getEnumValue(data.type, owa),
        c = getEnumValue(data.trigger, pwa),
        d = getFirstArrayElement(data.url);
    d = createLinkObject(d ? d : null);
    getFirstArrayElement(data.subscribeData);
    return b ? new createActionObject(b, c, d) : null;
}

function calculateScaledWidth(containerSize, elementWidth, scaleDimension) {
    // 1. 确定基准尺寸
    // 根据缩放模式，确定计算缩放宽度时使用的基准尺寸
    let baseDimension;
    if ('xx' === scaleDimension || 'xy' === scaleDimension) {
      // 如果缩放模式为 "xx" 或 "xy"，则基准尺寸为 640
      baseDimension = 640; 
    } else {
      // 否则，基准尺寸为 360
      baseDimension = 360; 
    }
  
    // 2. 计算容器尺寸与基准尺寸的差值
    // 根据缩放模式，计算容器尺寸与基准尺寸之间的差值
    let sizeDifference;
    if (scaleDimension) {
      // 如果 scaleDimension 为真，则差值为容器宽度减去基准尺寸
      sizeDifference = containerSize.width - baseDimension;
    } else {
      // 否则，差值为容器高度减去基准尺寸
      sizeDifference = containerSize.height - baseDimension;
    }
  
    // 3. 计算差值缩放后的元素宽度
    // 将容器尺寸与基准尺寸的差值按比例缩放，缩放比例为元素宽度
    let scaledDifference = sizeDifference * elementWidth;
  
    // 4. 将缩放后的差值加到基准尺寸上
    // 将缩放后的差值加到基准尺寸上，得到初步的缩放宽度
    let scaledWidth = baseDimension + scaledDifference;
  
    // 5. 将最终结果除以基准尺寸，得到最终的缩放宽度
    // 将初步的缩放宽度除以基准尺寸，得到最终的缩放宽度，使其相对于基准尺寸进行缩放
    return scaledWidth / baseDimension;
  }

function calculateScaledHeight(containerSize, elementHeight, scaleDimension) {
    var d = (scaleDimension = 'xy' == scaleDimension || 'yy' == scaleDimension) ? 360 : 640;
    return (d + ((scaleDimension ? containerSize.height : containerSize.width) - d) * elementHeight) / d;
}

function createAnnotationPositionObject(a, b, c, d, e, f, k, l, m, n, p) {
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
    this.g = p;
}

function createAnnotationPositionFromData1(data, constructor) {
    if (!data)
        return null;
    var c = parseFloatValue(data.x, 0),
        d = parseFloatValue(data.y, 0),
        e = parseFloatValue(data.w, 0),
        f = parseFloatValue(data.h, 0),
        k = parseTimeString(data.t),
        l = parseFloatValue(data.d, 0),
        m = parseFloatValue(data.px, 0),
        n = parseFloatValue(data.py, 0),
        p = parseFloatValue(data.scaleSlope, 1),
        r = parseFloatValue(data.scaleSlopeX, p);
    p = parseFloatValue(data.scaleSlopeY, p);
    var v = getEnumValue(data.scaleDimension, swa, 'xy');
    return constructor(c, d, e, f, k, l, m, n, r, p, v);
}

function calculateFinalAnnotationPosition(positionObject, context) {
    // 根据 positionObject 和 容器大小 计算缩放后的矩形。
    // positionObject：包含注释位置和尺寸信息的注释位置对象。
    // context：包含容器边界和锚点位置信息的上下文对象。
    let scaledRect = calculateScaledAnnotationRect(
      positionObject,
      // 创建一个新的 _yt_player.bh 对象，表示注释的初始矩形。
      new _yt_player.bh(positionObject.x, positionObject.y, positionObject.Qk, positionObject.o),
      // 从 context 对象中获取容器大小信息。
      context.g
    );
  
    // 根据缩放后的矩形和上下文计算注释的绝对位置。
    // scaledRect：缩放后的注释矩形。
    let absolutePosition = calculateAbsolutePosition(context, scaledRect);
  
    // 创建 absolutePosition 的副本，以便进行调整。
    let finalPosition = absolutePosition.clone();
  
    // 如果注释在容器之外，调整其位置以使其适合容器。
    // context.g：容器的边界信息。
    if (context.g && !context.g.contains(absolutePosition)) {
      // 如果注释的宽度小于容器的宽度，调整其左侧位置。
      if (absolutePosition.width < context.g.width) {
        finalPosition.left = _yt_player.dd(
          // 调整注释的左侧位置，使其在容器的左侧边界和右侧边界之间。
          absolutePosition.left,
          context.g.left,
          context.g.left + context.g.width - absolutePosition.width
        );
      } else {
        // 否则，将其左侧位置设置为容器的左侧边缘，并将其宽度设置为容器的宽度。
        finalPosition.left = context.g.left;
        finalPosition.width = context.g.width;
      }
  
      // 如果注释的高度小于容器的高度，调整其顶部位置。
      if (absolutePosition.height < context.g.height) {
        finalPosition.top = _yt_player.dd(
          // 调整注释的顶部位置，使其在容器的顶部边界和底部边界之间。
          absolutePosition.top,
          context.g.top,
          context.g.top + context.g.height - absolutePosition.height
        );
      } else {
        // 否则，将其顶部位置设置为容器的顶部边缘，并将其高度设置为容器的高度。
        finalPosition.top = context.g.top;
        finalPosition.height = context.g.height;
      }
    }
  
    // 返回注释的最终位置。
    return finalPosition;
  }

function calculateScaledAnnotationRect(positionObject, rect, containerSize) {
  // 获取 x 和 y 维度的缩放斜率。
  var scaleSlopeX = positionObject.A; // X 轴缩放斜率
  var scaleSlopeY = positionObject.l; // Y 轴缩放斜率

  // 确定缩放维度。
  var scaleDimension = positionObject.g || 'xy'; // 缩放维度，默认为 'xy'，表示同时缩放 X 和 Y 轴

  // 根据容器大小、缩放斜率和缩放维度计算注释的缩放宽度和高度。
  var scaledWidth = calculateScaledWidth(containerSize, scaleSlopeX, scaleDimension); // 缩放后的宽度
  var scaledHeight = calculateScaledHeight(containerSize, scaleSlopeY, scaleDimension); // 缩放后的高度

  // 计算注释的最终宽度和高度。
  var finalWidth = 640 * rect.width * scaledWidth / 100; // 最终宽度
  var finalHeight = 360 * rect.height * scaledHeight / 100; // 最终高度

  // 获取注释的左上角位置坐标。
  var left = positionObject.C; // 注释左上角的 X 坐标
  var top = positionObject.D; // 注释左上角的 Y 坐标

  // 根据缩放维度调整左上角位置坐标。
  if (left === 0) {
    // 如果 left 为 0，则注释的左侧与容器的左侧对齐，并根据缩放后的宽度计算 left 值。
    left = 640 * rect.left * scaledWidth / 100;
  } else if (left > 0) {
    // 如果 left 大于 0，则注释的左侧距离容器左侧 left 个单位，无需调整。
  } else {
    // 如果 left 小于 0，则注释的右侧距离容器右侧 -left 个单位，根据缩放后的宽度计算 left 值。
    left = containerSize.width + left - finalWidth;
  }

  if (top === 0) {
    // 如果 top 为 0，则注释的顶部与容器的顶部对齐，并根据缩放后的高度计算 top 值。
    top = 360 * rect.top * scaledHeight / 100;
  } else if (top > 0) {
    // 如果 top 大于 0，则注释的顶部距离容器顶部 top 个单位，无需调整。
  } else {
    // 如果 top 小于 0，则注释的底部距离容器底部 -top 个单位，根据缩放后的高度计算 top 值。
    top = containerSize.height + top - finalHeight;
  }

  // 返回一个新的边界矩形，其中包含缩放后的尺寸和调整后的位置。
  return new _yt_player.bh(left, top, finalWidth, finalHeight); // 返回一个新的边界矩形对象
}

function createAnnotationPositionFromData2(data) {
    return data ? createAnnotationPositionFromData1(data, function(data, c, d, e, f, k, l, m, n, p, r) {
        return new createAnnotationPositionObject(data, c, d, e, f, k, l, m, n, p, r);
    }) : null;
}

function createAnnotationContext(containerRect, anchorPosition) {
    this.g = containerRect;
    this.l = anchorPosition || null;
}

function calculateAbsolutePosition(context, rect) {
    // 如果上下文对象包含锚点位置，则根据锚点计算注释的最终位置。
    // 锚点位置 (context.l) 用于将注释固定到特定元素。
    var containerRect = context.l
      ? calculateFinalAnnotationPosition(context.l, new createAnnotationContext(context.g))
      : context.g; // 否则，使用上下文对象中的容器矩形 (context.g) 作为容器矩形。
  
    // 克隆输入矩形，避免修改原始矩形。
    var absoluteRect = rect.clone();
  
    // 获取容器矩形的左上角坐标。
    var containerLeft = containerRect.left;
    var containerTop = containerRect.top;
  
    // 将容器的左上角坐标添加到矩形的坐标中。
    // 这考虑了容器相对于文档的位置。
    // 如果容器的左侧坐标是 _yt_player.hd 对象（表示偏移量），
    // 则将其 x 和 y 值分别添加到矩形的 left 和 top 属性中。
    if (containerLeft instanceof _yt_player.hd) {
      absoluteRect.left += containerLeft.x;
      absoluteRect.top += containerLeft.y;
    } else {
      // 否则，直接添加容器的 left 和 top 值。
      absoluteRect.left += containerLeft;
      // 如果 containerTop 是数字，则将其添加到 absoluteRect.top。
      _yt_player.ua(containerTop) && (absoluteRect.top += containerTop);
    }
  
    // 返回计算出的矩形的绝对位置。
    return absoluteRect;
  }

function createAnchoredAnnotationPositionObject(x, y, width, height, time, startX, startY, depth, offsetX, offsetY, scaleX, scaleY, scaleDimension) {
    createAnnotationPositionObject.call(this, x, y, width, height, time, depth, offsetX, offsetY, scaleX, scaleY, scaleDimension);
    this.F = startX;
    this.H = startY;
}

function createAnchoredAnnotationPositionFromData(data) {
    if (!data)
        return null;
    var b = parseFloatValue(data.sx, 0),
        c = parseFloatValue(data.sy, 0);
    return createAnnotationPositionFromData1(data, function(data, e, f, k, l, m, n, p, r, v, D) {
        return new createAnchoredAnnotationPositionObject(data, e, f, k, l, b, c, m, n, p, r, v, D);
    });
}

function createAnnotationStyleObject(a, b, c, d, e, f, k, l, m, n, p, r, v, D) {
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
    this.B = D;
}

function createAnnotationStyleFromData(data) {
    if (!data)
        return null;
    var b = parseColorString(data.fgColor, '#1A1A1A'),
        c = parseColorString(data.bgColor, '#FFF'),
        d = parseColorString(data.borderColor, '#000'),
        e = U2(data.borderWidth, 0, 5, !1, 0),
        f = U2(data.bgAlpha, 0, 1, !1, 0.8),
        k = parseColorString(data.highlightFontColor, '#F2F2F2'),
        l = U2(data.highlightWidth, 0, 5, !1, 3),
        m = convertToString(data.textAlign),
        n = U2(data.textSize, 3.3, 30.1, !0, 3.6107),
        p = convertToString(data.fontWeight),
        r = parsePaddingObject(data.padding),
        v = parseEffectsString(data.effects),
        D = U2(data.cornerRadius, 0, 10, !0, 0);
    data = getFirstArrayElement(data.gradient);
    if (data = data ? data : null) {
        var H = U2(data.x1, 0, 100, !0, 0),
            L = U2(data.y1, 0, 100, !0, 0),
            T = U2(data.x2, 0, 100, !0, 100),
            ha = U2(data.createSvgElementBase, 0, 100, !0, 100),
            cb = parseColorString(data.color1, '#FFF'),
            tb = parseColorString(data.color2, '#000');
        data = new createGradientObject(H, L, T, ha, cb, tb, U2(data.opacity1, 0, 100, !0, 100), U2(data
            .opacity2, 0, 100, !0, 0));
    } else
        data = null;
    return new createAnnotationStyleObject(b, c, d, e, f, k, l, m, n, p, r, v, D, data);
}

function createGradientObject(x1, y1, x2, createSvgElementBase, color1, color2, opacity1, opacity2) {
    this.o = x1;
    this.B = y1;
    this.A = x2;
    this.C = createSvgElementBase;
    this.g = color1;
    this.opacity2 = color2;
    this.D = opacity1;
    this.F = opacity2;
}

function createAnnotationSegmentObject(type, rectRegions, anchoredRegions, shapelessRegions) {
    this.type = type;
    this.l = rectRegions;
    this.g = anchoredRegions;
    this.o = shapelessRegions;
}

function createAnnotationSegmentFromData(data) {
    if (!data)
        return null;
    var b = getEnumValue(data.type, Ewa, 'rect'),
        c = mapArray(data.rectRegion, createAnnotationPositionFromData2),
        d = mapArray(data.anchoredRegion, createAnchoredAnnotationPositionFromData);
    data = mapArray(data.shapelessRegion, createAnnotationPositionFromData2);
    return new createAnnotationSegmentObject(b, c, d, data);
}

function getFirstSegmentRegion(segmentObject) {
    return segmentObject.l && segmentObject.l.length ? segmentObject.l[0] : segmentObject.g && segmentObject.g.length ? segmentObject.g[0] : segmentObject.o && segmentObject.o
        .length ? segmentObject.o[0] : null;
}

function createAnnotationSegment(space, regions) {
    this.l = space;
    this.g = regions;
}

function createConditionObject(state, referenceId) {
    this.state = state;
    this.ref = referenceId;
}

function createConditionFromData(data) {
    if (!data)
        return null;
    var b = getEnumValue(data.state, Jwa);
    data = ensureString(data.ref);
    return b ? new createConditionObject(b, data) : null;
}

function createTriggerObject(conditions, notConditions, showDelay, hideDelay) {
    this.g = conditions || [];
    this.o = notConditions || [];
    this.A = showDelay;
    this.l = hideDelay;
    this.value = !1;
}

function createTriggerFromData(data) {
    if (!data)
        return null;
    var b = mapArray(data.condition, createConditionFromData),
        c = mapArray(data.notCondition, createConditionFromData),
        d = parseBoolean(data.show_delay, !1);
    data = parseBoolean(data.hide_delay, !1);
    return b || c ? new createTriggerObject(b, c, d, data) : null;
}

function evaluateTriggerConditions(triggerObject, evaluateFunction, context) {
    (0, _yt_player.B)(triggerObject.g, _yt_player.Ga(evaluateFunction, !1), context);
    (0, _yt_player.B)(triggerObject.o, _yt_player.Ga(evaluateFunction, !0), context);
}

function createAnnotationObject(a, b, c, d, e, f, k, l, m, n, p, r, v, D) {
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
    this.itct = D;
}

function createAnnotationFromData(data) {
    if (!data)
        return null;
    var b = ensureString(data.id),
        c = ensureString(data.author),
        d = getEnumValue(data.type, Owa),
        e = getEnumValue(data.style, b3),
        f = convertToString(getFirstArrayElement(data.TEXT)),
        k = convertToString(data.data);
    k = 0 != k.length ? JSON.parse(k) : {};
    var l = getFirstArrayElement(data.segment);
    var m = l ? l : null;
    m ? (ensureString(m.timeRelative), l = ensureString(m.spaceRelative), l = (m = mapArray(m
        .movingRegion, createAnnotationSegmentFromData)) ? new createAnnotationSegment(l, m) : null) : l = null;
    m = mapArray(data.action, createActionFromData);
    var n = mapArray(data.trigger, createTriggerFromData),
        p = getFirstArrayElement(data.appearance);
    (p = createAnnotationStyleFromData(p ? p : null)) || (p = createAnnotationStyleFromData({}));
    var r = getEnumValue(data.coordinate_system, Pwa, 'video_relative'),
        v = parseBoolean(data.closeable, !0),
        D = convertToString(data.log_data);
    data = convertToString(data.itct);
    return b && d ? new createAnnotationObject(b, c, d, e, f, l, m, n, p, r, v, k, D, data) : null;
}

function getClickActions(annotationObject) {
    return findAction(annotationObject, function(annotationObject) {
        return 'click' == annotationObject.trigger;
    });
}

function findAction(annotationObject, predicate) {
    return (0, _yt_player.Bj)(annotationObject.o, predicate, void 0);
}

function executeActions(annotationObject, executeFunction, context) {
    (0, _yt_player.B)(annotationObject.o, executeFunction, context);
}

function findFirstAction(annotationObject, predicate) {
    return _yt_player.Ma(annotationObject.o, predicate, void 0);
}

function addTriggerListener(annotationObject, listener, context) {
    (0, _yt_player.B)(annotationObject.D, listener, context);
}

function mapTriggers(annotationObject, mappingFunction) {
    (0, _yt_player.G)(annotationObject.D, mappingFunction, void 0);
}

function getFirstAnnotationRegion(annotationObject) {
    return (annotationObject = getAnnotationSegment(annotationObject)) ? getFirstSegmentRegion(annotationObject) : null;
}

function getAnnotationSegment(annotationObject) {
    annotationObject.segment ? (annotationObject = annotationObject.segment, annotationObject = annotationObject.g.length ? annotationObject.g[0] : null) : annotationObject = null;
    return annotationObject;
}

function calculateAnnotationScaleX(annotationObject, containerSize) {
    var c = getFirstAnnotationRegion(annotationObject);
    return c && containerSize ? calculateScaledHeight(containerSize, c.l, c.g ? c.g : 'xy') : 1;
}

function createTriggerConditionListener(annotationId, triggerObject, eventTarget) {
    this.g = {};
    this.o = !1;
    this.B = 'ivTrigger:' + annotationId;
    this.l = eventTarget;
    evaluateTriggerConditions(triggerObject, function(annotationId, triggerObject) {
        var eventTarget = generateTriggerConditionEventId(triggerObject.state, triggerObject.ref);
        this.l.subscribe(eventTarget, (0, _yt_player.z)(this.A, this, eventTarget, annotationId));
        this.g[eventTarget] = annotationId;
    }, this);
}

function generateTriggerConditionEventId(state, referenceId) {
    var c = 'ivTriggerCondition:' + state;
    return referenceId ? c + ':' + referenceId : c;
}

function createAnnotationRendererBase() {
    this.g = !1;
    this.B = this.l = null;
}

function createSvgRenderer(rendererObject, width, height) {
    rendererObject.l ? (rendererObject.l.setSize(width, height), rendererObject.l.clear()) : (width = new A2(width, height, void 0, void 0,
            void 0), rendererObject.l = width, rendererObject.l.zo(), rendererObject.B = _yt_player.K('DIV'), width = rendererObject.l
        .la(), rendererObject.B.appendChild(width));
    return rendererObject.l;
}

function createSvgElementWithChildren(elementName, attributes, children) {
    var d = window.document.createElementNS('http://www.w3.org/2000/svg', elementName);
    attributes && _yt_player.Lb(attributes, function(elementName, attributes) {
        d.setAttribute(attributes, elementName);
    });
    for (var e = 2; e < arguments.length; e++)
        d.appendChild(arguments[e]);
    return d;
}

function appendSvgElementWithResult(svgObject, element) {
    var c = ':' + (_yt_player.Su.getInstance().g++).toString(36);
    element.setAttribute('result', c);
    svgObject.appendChild(element);
    return c;
}

function addBevelEffect(filterElement, inputId) {
    var c = appendSvgElementWithResult(filterElement, createSvgElementWithChildren('feGaussianBlur', {
        'in': inputId,
        stdDeviation: '1.8'
    }));
    c = appendSvgElementWithResult(filterElement, createSvgElementWithChildren('feDiffuseLighting', {
        'in': c,
        surfaceScale: '4',
        diffuseConstant: '1'
    }, createSvgElementWithChildren('feDistantLight', {
        azimuth: '270',
        elevation: '15',
        'lighting-color': 'white'
    })));
    c = appendSvgElementWithResult(filterElement, createSvgElementWithChildren('feComposite', {
        'in': c,
        in2: inputId,
        operator: 'in'
    }));
    return appendSvgElementWithResult(filterElement, createSvgElementWithChildren('feComposite', {
        in2: c,
        'in': inputId,
        operator: 'arithmetic',
        convertDataToVisualElementObject: 1,
        calculateAnnotationBoundingRect: 0.5,
        subscribeToEvent: 0
    }));
}

function $wa(a, b) {
    var c = appendSvgElementWithResult(a, createSvgElementWithChildren('feOffset', {
        'in': b,
        dx: '-7',
        dy: '-7'
    }));
    c = appendSvgElementWithResult(a, createSvgElementWithChildren('feGaussianBlur', {
        'in': c,
        stdDeviation: '3'
    }));
    c = appendSvgElementWithResult(a, createSvgElementWithChildren('feColorMatrix', {
        'in': c,
        type: 'matrix',
        values: '0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'
    }));
    var d = appendSvgElementWithResult(a, createSvgElementWithChildren('feColorMatrix', {
        'in': b,
        type: 'matrix',
        values: '0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0'
    }));
    d = appendSvgElementWithResult(a, createSvgElementWithChildren('feGaussianBlur', {
        'in': d,
        stdDeviation: '1'
    }));
    c = appendSvgElementWithResult(a, createSvgElementWithChildren('feComposite', {
        operator: 'out',
        'in': c,
        in2: d
    }));
    return appendSvgElementWithResult(a, createSvgElementWithChildren('feComposite', {
        operator: 'over',
        'in': b,
        in2: c
    }));
}

function defaultEffect(filterElement, inputId) {
    return inputId;
}

function createFilterElementWithEffects(effects) {
    var b = createSvgElementWithChildren('filter', {
            filterUnits: 'userSpaceOnUse'
        }),
        c = 'SourceGraphic';
    (0, _yt_player.B)(effects, function(effects) {
        effects: {
            switch (effects) {
                case 'bevel':
                    effects = addBevelEffect;
                    break effects;
                case 'dropshadow':
                    effects = $wa;
                    break effects;
            }
            effects = defaultEffect;
        }
        c = effects(b, c);
    });
    return b;
}

function sortEffectsByPriority(effects) {
    effects = (0, _yt_player.Ld)(effects, function(effects) {
        return effects in j3;
    });
    _yt_player.ib(effects, function(effects, c) {
        return j3[effects] - j3[c];
    });
    return effects;
}

function getDropShadowOffset(effects) {
    return _yt_player.Ma(effects, function(effects) {
        return 'dropshadow' == effects;
    }) ? new _yt_player.Zg(0, 7, 7, 0) : new _yt_player.Zg(0, 0, 0, 0);
}

function createRoundedRectPath(rect, cornerRadius, offset) {
    var d = new v2();
    d.moveTo(rect.left + cornerRadius + offset, rect.top + offset);
    d.Ec(rect.left + rect.width - cornerRadius - offset, rect.top + offset);
    w2(d, cornerRadius, cornerRadius, -90);
    d.Ec(rect.left + rect.width - offset, rect.top + rect.height - cornerRadius - offset);
    w2(d, cornerRadius, cornerRadius, 0);
    d.Ec(rect.left + cornerRadius + offset, rect.top + rect.height - offset);
    w2(d, cornerRadius, cornerRadius, 90);
    d.Ec(rect.left + offset, rect.top + cornerRadius + offset);
    w2(d, cornerRadius, cornerRadius, 180);
    d.close();
    return d;
}

function fxa(a, b, c, d) {
    var e = a.B;
    e ? a = new s2(e.o * b / 100, e.B * c / 100, e.A * b / 100, e.C * c / 100, e
        .g, e.l, e.D, e.F) : (b = a.g, a = new r2(a.bgColor, d ? Math.max(b,
        0.9) : b));
    return a;
}

function calculateAnnotationBoundingRect(rect, effects) {
    var c = _yt_player.ch(rect);
    c.expand(getDropShadowOffset(effects));
    return createBoundingBoxFromRect(c);
}

function addSvgFilters(svgObject, element, effects) {
    if (effects.length && (element = _yt_player.qd(window.document, 'g', void 0, element), element
            .length)) {
        var d = sortEffectsByPriority(effects);
        if (d) {
            effects = 'effects:' + (d ? d.join('|') : '');
            var e = effects in svgObject.l ? svgObject.l[effects] : null;
            e ? svgObject = e : (d = createFilterElementWithEffects(d), svgObject = 0 < d.childNodes.length ? addSvgDefinition(svgObject, effects,
                d) : null);
        } else
            svgObject = null;
        svgObject && element[0].setAttribute('filter', 'url(#' + svgObject + ')');
    }
}

function createSpeechBubbleRenderer() {
    createAnnotationRendererBase.call(this);
    this.A = 0;
}

function determineBubblePointerPosition(rect, pointerPosition) {
    var c = rect.top - pointerPosition.y,
        d = pointerPosition.x - rect.left - rect.width,
        e = pointerPosition.y - rect.top - rect.height,
        f = rect.left - pointerPosition.x,
        k = Math.max(c, d, e, f);
    if (0 > k)
        return 'i';
    switch (k) {
        case c:
            return 't';
        case d:
            return 'r';
        case e:
            return 'b';
        case f:
            return 'l';
    }
    return 'i';
}

function m3(a) {
    createAnnotationRendererBase.apply(this, arguments);
}

function n3(a) {
    createAnnotationRendererBase.apply(this, arguments);
}

function o3(a) {
    createSpeechBubbleRenderer.apply(this, arguments);
}

function createAnnotationView1(annotation, appendFunction, context, eventTarget, hasClickHandler) {
    _yt_player.M.call(this);
    this.g = annotation;
    this.X = appendFunction;
    this.C = context;
    this.ea = eventTarget;
    this.ca = hasClickHandler;
    this.H = !1;
    this.W = new _yt_player.CF(this);
    _yt_player.N(this, this.W);
    this.M = this.B = this.D = this.K = this.l = null;
    this.getUiClassName = !1;
    this.Y = this.I = this.J = null;
    this.wp = new _yt_player.Uk(this.JO, 100, this);
    _yt_player.N(this, this.wp);
    this.F = new _yt_player.Yt(this.Kz, 500, this);
    _yt_player.N(this, this.F);
    this.T = this.o = this.A = null;
}

function addAnnotationViewMouseListeners(view, element) {
    var c = (0, _yt_player.z)(function(view, c, f) {
        c = f ? createAnnotationViewEventHandler(this, c, (0, _yt_player.z)(f, this)) : createAnnotationViewEventHandler(this, c);
        this.W.U(element, view, c);
    }, view);
    c('mouseover', 'E', view.AB);
    c('mouseout', 'D', view.Ih);
    c('click', 'B');
    c('touchend', 'B');
}

function addAnnotationViewCloseButton(view) {
    if (view.g.B) {
        if (findAction(view.g, function(view) {
                return 'close' == view.type;
            }))
            var b = view.l;
        else
            view.A = _yt_player.K('DIV', 'annotation-close-button'), _yt_player.O(view
                .A, !1), _yt_player.aF(view.A, 'annotation_id', view.g.id), view.l
            .appendChild(view.A), b = view.A;
        var c = function(view) {
            view.stopPropagation();
        };
        view.W.U(b, 'click', createAnnotationViewEventHandler(view, 'C', c));
        view.W.U(b, 'touchend', createAnnotationViewEventHandler(view, 'C', c));
    }
}

function createAnnotationViewEventHandler(view, eventName, callback) {
    return (0, _yt_player.z)(function(view) {
        if (this.ca)
            callback && callback(view);
        else if (view.event.target instanceof window.Element) {
            var d = view.event.target;
            _yt_player.O(d, !1);
            try {
                var f = window.document.elementFromPoint(view.event
                    .clientX, view.event.clientY);
                if (_yt_player.$d(f, 'annotation')) {
                    var k = window.document.createEvent('MouseEvent');
                    k.initMouseEvent(view.event.type, view.event.bubbles, view
                        .event.cancelable, view.event.view, view.event
                        .detail, view.event.screenX, view.event.screenY, view
                        .event.clientX, view.event.clientY, view.event
                        .ctrlKey, view.event.altKey, view.event.shiftKey,
                        view.event.metaKey, view.event.button, view.event
                        .relatedTarget);
                    f.dispatchEvent(k);
                }
            } finally {
                _yt_player.O(d, !0);
            }
        }
        d = _yt_player.Lh(view.target);
        view = new _yt_player.hd(view.clientX, view.clientY);
        'D' == eventName && d.contains(view) || this.ea.R(eventName, this.g);
    }, view);
}

// 该函数用于更新注释视图的位置，例如弹出式注解、标签等。
function updateAnnotationViewPosition(view) {
    // 检查视图是否包含可见元素 (view.l 主元素，view.o 形状渲染器)
    if (view.l || view.o) { 
      // 获取注释的第一个区域，区域定义了注释在视频中的位置和时间。
      var region = getFirstAnnotationRegion(view.g);
      if (region) {
        // 获取注释上下文，包含视频区域大小和锚点位置等信息。
        var context = getAnnotationContext(view); 
        
        // 如果视图包含主元素，则进行位置计算和样式设置。
        if (view.l) { 
  
          // 计算注释区域的缩放和定位后的矩形。
          region = calculateFinalAnnotationPosition(region, context); 
          
          // 获取视频播放器的尺寸。
          var playerRect = _yt_player.W_(_yt_player.VU(view.C)); 
  
          // 设置主元素的尺寸和位置。
          _yt_player.Jh(view.l, region.width, region.height);
          _yt_player.wh(view.l, region.left, region.top);
  
          // 存储主元素的绝对边界框。
          view.K = new _yt_player.bh(
            playerRect.left + region.left, 
            playerRect.top + region.top, 
            region.width, 
            region.height
          );
  
          // 计算宽度和高度的缩放因子。
          var scaleX = region && playerRect 
            ? calculateScaledWidth(playerRect, region.A, region.g || 'xy') 
            : 1;
          var scaleY = calculateAnnotationScaleX(view.g, playerRect);
  
          // 获取注释样式中的 padding，如果没有则根据样式设置默认值。
          var padding = view.g.l.padding;
          if (!padding) {
            padding = 'speech' === view.g.style ? 1.6 : 0.8;
            padding = new _yt_player.Zg(padding, padding, padding, padding);
          }
  
          // 计算缩放后的 padding。
          padding = new _yt_player.Zg(
            360 * padding.top * scaleY / 100, 
            640 * padding.right * scaleX / 100, 
            360 * padding.bottom * scaleY / 100, 
            640 * padding.left * scaleX / 100
          );
  
          // 如果有关闭按钮，调整 padding。
          view.B && (padding.right += 1.5 * context.g.height / 100);
  
          // 将计算后的 padding 应用于主元素。
          view.l.style.padding = padding.top + 'px ' + 
                                padding.right + 'px ' + 
                                padding.bottom + 'px ' + 
                                padding.left + 'px';
  
          // 如果存在标签文本元素，则应用 padding。
          if ('label' === view.g.style && view.D) {
            view.D.style.padding = view.l.style.padding;
          }
  
          // 检查与播放器控件是否发生碰撞。
          var playerControlsRect = _yt_player.eV(view.C);
          var videoRect = _yt_player.W_(_yt_player.VU(view.C));
          
          // 针对非播放器相对注释调整控件矩形。
          if (!_yt_player.dh(videoRect, playerControlsRect)) {
            playerControlsRect.top += 20;
            playerControlsRect.height -= 40;
            if ('player_relative' !== view.g.C) {
              playerControlsRect.left -= videoRect.left;
              playerControlsRect.top -= videoRect.top;
            }
          }
  
          var collision = false; // 是否发生碰撞
          var offsetBottom = 0; // 底部偏移
          var offsetTop = 0; // 顶部偏移
  
          // 计算偏移量并判断是否发生碰撞
          if (playerControlsRect) {
            offsetBottom = playerControlsRect.top - 
                          (region.top + region.height);
            offsetTop = region.top - 
                       (playerControlsRect.top + playerControlsRect.height);
            collision = 0 < offsetBottom || 0 < offsetTop;
          }
  
          // 如果发生碰撞，则调整气泡位置和关闭按钮位置。
          if (collision && playerControlsRect) {
            if (view.B) { // 如果有气泡元素
              // 计算气泡的矩形
              var bubbleRect = calculateAnnotationBubbleRect(
                view, 23, region, offsetBottom, offsetTop
              );
              
              // 如果有关闭按钮，调整关闭按钮位置
              if (view.A) {
                var closeButtonOffset = 43 - bubbleRect.width;
                if (0 < closeButtonOffset && 
                    region.left + bubbleRect.left - closeButtonOffset > 
                    playerControlsRect.left) {
                  bubbleRect.left -= closeButtonOffset;
                  bubbleRect.width += closeButtonOffset;
                }
              }
  
              // 设置气泡元素的尺寸和位置
              _yt_player.Jh(view.B, bubbleRect.width, bubbleRect.height);
              _yt_player.wh(view.B, bubbleRect.left, bubbleRect.top);
            }
  
            // 定位关闭按钮
            if (view.A) { // 如果有关闭按钮
              if (bubbleRect) { 
                // 如果气泡已经计算，则根据气泡位置设置关闭按钮位置
                region = new _yt_player.hd(
                  bubbleRect.left + bubbleRect.width - 23 - 18, 
                  view.getUiClassName 
                    ? bubbleRect.top + 2 
                    : bubbleRect.top + bubbleRect.height - 18 - 2
                );
              } else {
                // 否则，计算关闭按钮的矩形并设置位置
                bubbleRect = calculateAnnotationBubbleRect(
                  view, 18, region, offsetBottom, offsetTop
                );
                region = new _yt_player.hd(bubbleRect.left, bubbleRect.top);
                _yt_player.Jh(view.A, bubbleRect.width, bubbleRect.height);
              }
              _yt_player.wh(view.A, region);
            }
  
            // 更新 view.M，存储气泡的绝对边界框
            view.M = new _yt_player.bh(
              view.K.left + bubbleRect.left, 
              view.K.top + bubbleRect.top, 
              bubbleRect.width, 
              bubbleRect.height
            );
  
            // 添加 mousemove 监听器以跟踪鼠标位置
            view.J = view.W.U(
              _yt_player.VU(view.C), 
              'mousemove', 
              view.KO, 
              view
            );
  
          } else {
            // 未发生碰撞，则正常定位气泡和关闭按钮
            if (view.B) { // 如果有气泡元素
              // 计算气泡的矩形
              bubbleRect = offsetTop / scaleY * videoRect.height * 4.2 / 100;
              bubbleRect = new _yt_player.I(bubbleRect, bubbleRect); 
              if ('highlight' === view.g.type || 'label' === view.g.style) {
                // 对于高亮或标签类型，根据视频区域高度计算气泡位置
                offsetTop = 1.5 * videoRect.height / 100;
                bubbleRect = new _yt_player.bh(
                  region.width - bubbleRect.width - offsetTop, 
                  region.height - bubbleRect.height - offsetTop, 
                  bubbleRect.width, 
                  bubbleRect.height
                );
              } else {
                // 对于其他类型，根据区域尺寸计算气泡位置
                bubbleRect = new _yt_player.bh(
                  region.width - bubbleRect.width - 3 * videoRect.height / 100, 
                  (region.height - bubbleRect.height) / 2, 
                  bubbleRect.width, 
                  bubbleRect.height
                );
              }
              // 设置气泡的尺寸和位置
              _yt_player.Jh(view.B, bubbleRect.width, bubbleRect.height);
              _yt_player.wh(view.B, bubbleRect.left, bubbleRect.top);
            }
  
            // 正常定位关闭按钮
            if (view.A) { // 如果有关闭按钮
              // 计算关闭按钮的位置，根据 padding 和区域尺寸
              bubbleRect = 9 <= padding.left + padding.width - 
                            (region.left + region.width);
              offsetTop = 9 <= region.top - padding.top;
              _yt_player.wh(
                view.A, 
                // 根据不同的情况，设置关闭按钮的位置
                bubbleRect && offsetTop 
                  ? new _yt_player.hd(region.width - 9, -9) 
                  : bubbleRect 
                    ? new _yt_player.hd(
                        region.width - 9, 
                        45 < region.height ? 9 : region.height - 9
                      ) 
                    : offsetTop 
                      ? new _yt_player.hd(
                          45 < region.width ? region.width - 9 - 18 : -9, 
                          -9
                        ) 
                      : region.width / videoRect.width > region.height / videoRect.height 
                        ? new _yt_player.hd(
                            45 < region.width ? region.width - 9 - 18 : -9, 
                            region.height - 9
                          ) 
                        : new _yt_player.hd(-9, 45 < region.height ? 9 : region.height - 9)
              );
            }
          }
        }
  
        // 如果有形状渲染器，则渲染注释形状。
        view.o && view.o.o(view.g, context);
  
        // 将文本样式应用于主元素。
        if (view.l) {
          var mainElement = view.l;
          var annotationStyle = view.g.l;
          
          // 根据注释样式设置文本颜色。
          mainElement.style.color = 'highlightText' === view.g.style 
                                   ? annotationStyle.C 
                                   : annotationStyle.l;
          
          // 计算并应用字体大小。
          var playerRect = _yt_player.W_(_yt_player.VU(view.C));
          mainElement.style.fontSize = 360 * annotationStyle.textSize * 
                                       calculateAnnotationScaleX(view.g, playerRect) / 
                                       100 + 'px';
  
          // 根据注释样式设置文本对齐方式。
          var annotationType = view.g.style;
          mainElement.style.textAlign = annotationStyle.textAlign 
                                        ? annotationStyle.textAlign 
                                        : 'title' === annotationType || 
                                          'highlightText' === annotationType 
                                          ? 'center' 
                                          : 'left';
  
          // 如果定义了字体粗细，则应用字体粗细。
          annotationStyle.A && (mainElement.style.fontWeight = annotationStyle.A);
  
          // 如果发生溢出，则调整字体大小以适合元素。
          var originalOverflow = mainElement.style.overflow;
          var linkIcon = _yt_player.J('annotation-link-icon', mainElement);
          var linkIconVisible = linkIcon ? _yt_player.Nh(linkIcon) : false;
          var closeButton = _yt_player.J('annotation-close-button', mainElement);
          var closeButtonVisible = closeButton ? _yt_player.Nh(closeButton) : false;
  
          // 隐藏链接图标和关闭按钮以进行字体大小调整
          linkIconVisible && _yt_player.O(linkIcon, false);
          closeButtonVisible && _yt_player.O(closeButton, false);
          
          // 获取内部文本元素，并保存其原始样式
          var innerText = _yt_player.J('inner-text', mainElement);
          var originalInnerTextOverflow = '';
          var originalInnerTextPosition = '';
          if (innerText) {
            originalInnerTextOverflow = innerText.style.overflow;
            originalInnerTextPosition = innerText.style.position;
            innerText.style.overflow = 'visible';
            innerText.style.position = 'static';
          }
          
          // 设置主元素溢出为滚动
          mainElement.style.overflow = 'scroll';
  
          // 如果内容溢出，则调整字体大小
          if (mainElement.scrollHeight > mainElement.offsetHeight || 
              mainElement.scrollWidth > mainElement.offsetWidth) {
            var fontSize = getFontSizeInPixels(mainElement);
            var minFontSize = 5;
            var maxFontSize = fontSize;
  
            // 使用二分查找法调整字体大小，直到内容适合元素或达到最小字体大小
            for (var step = Math.floor(fontSize / 2); step;) {
              if (mainElement.scrollHeight <= mainElement.offsetHeight && 
                  mainElement.scrollWidth <= mainElement.offsetWidth) {
                minFontSize = fontSize;
                fontSize = Math.min(fontSize + step, maxFontSize);
              } else {
                fontSize = Math.max(fontSize - step, minFontSize);
              }
              step = Math.floor(step / 2);
              mainElement.style.fontSize = fontSize + 'px';
            }
  
            // 如果调整后的字体大小仍然溢出，则恢复到之前的字体大小
            if (fontSize !== minFontSize && 
                (mainElement.scrollHeight > mainElement.offsetHeight || 
                mainElement.scrollWidth > mainElement.offsetWidth)) {
              mainElement.style.fontSize = minFontSize + 'px';
            }
          }
  
          // 恢复原始溢出样式
          mainElement.style.overflow = originalOverflow;
          if (innerText) {
            innerText.style.overflow = originalInnerTextOverflow;
            innerText.style.position = originalInnerTextPosition;
          }
  
          // 恢复链接图标和关闭按钮的可见性
          closeButtonVisible && _yt_player.O(closeButton, true);
          linkIconVisible && _yt_player.O(linkIcon, true);
        }
      }
    }
  }

function calculateAnnotationBubbleRect(view, bubbleHeight, rect, offsetBottom, offsetTop) {
    var f = 0 < offsetTop;
    bubbleHeight = new _yt_player.bh(0, rect.height - bubbleHeight, Math.max(rect.width, bubbleHeight), bubbleHeight);
    0 < offsetBottom && (bubbleHeight.top = rect.height, 20 < offsetBottom && (bubbleHeight.height += offsetBottom - 20), _yt_player.S(view
        .l, 'annotation-extend-down'));
    f && (bubbleHeight.top = -bubbleHeight.height, 20 < offsetTop && (rect = offsetTop - 20, bubbleHeight.top -= rect, bubbleHeight.height += rect),
        _yt_player.S(view.l, 'annotation-extend-up'), view.getUiClassName = !0);
    return bubbleHeight;
}

function isAnnotationTextOpaque(view) {
    return 'label' != view.g.style || view.o.g;
}

function getAnnotationContext(view) {
    var b = _yt_player.W_(_yt_player.VU(view.C));
    if ('player_relative' == view.g.C) {
        var c = _yt_player.VU(view.C).Oa();
        b = new _yt_player.bh(-b.left, -b.top, c.width, c.height);
    } else
        b = new _yt_player.bh(0, 0, b.width, b.height);
    return new createAnnotationContext(b, view.T ? getFirstAnnotationRegion(view.T) : null);
}

function offsetPosition(position, offset) {
    return offset ? new _yt_player.bh(position.x + offset.left, position.y + offset.top, offset.width, offset.height) :
        null;
}

function u3(a, b, c) {
    _yt_player.M.call(this);
    this.l = a;
    this.annotation = b;
    this.view = c;
    this.g = null;
    this.o = this.isVisible = !1;
    addAnnotationTriggerListeners(b, a);
}

function addAnnotationTriggerListeners(annotation, eventTarget) {
    mapTriggers(annotation, function(c) {
        return new createTriggerConditionListener(annotation.id, c, eventTarget);
    });
}

function removeAnnotationViewResizeListeners(view) {
    view.l.unsubscribe('resize', view.zB, view);
    view.l.unsubscribe('onVideoAreaChange', view.mD, view);
}

function clearAnnotationHideTimer(view) {
    view.g && (view.g.stop(), view.g = null);
}

function createCollaboratorCard(id, data, context) {
    p2.call(this, id, data, context);
    this.channelId = data.channel_id;
    this.customMessage = data.custom_message;
    this.profileImageUrl = data.image_url;
    this.title = data.title;
    this.metaInfo = data.meta_info;
    this.url = createLinkObject({
        pause_on_navigation: data.pause_on_navigation,
        target: data.target || 'new',
        value: data.url
    });
}

function createSimpleCard(id, data, context) {
    p2.call(this, id, data, context);
    this.imageUrl = data.image_url;
    this.displayDomain = data.display_domain;
    this.showLinkIcon = data.show_link_icon;
    this.A = data.button_icon_url;
    this.title = data.title;
    this.customMessage = data.custom_message;
    this.url = createLinkObject({
        pause_on_navigation: data.pause_on_navigation,
        target: data.target || 'new',
        value: data.url
    });
    this.g = null;
    if (id = data.signin_url)
        this.g = createLinkObject({
            target: 'current',
            value: id
        });
    this.J = data.signin_title || null;
    this.I = data.signin_message || null;
}

function createDonationCard(id, data, context) {
    createSimpleCard.call(this, id, data, context);
    this.H = data.ypc_flow_type;
    this.B = data.innertube_request_params;
}

function createPlaylistCard(id, data, context) {
    p2.call(this, id, data, context);
    this.A = data.image_url;
    this.playlistVideoCount = data.playlist_video_count;
    this.customMessage = data.custom_message;
    this.title = data.title;
    this.metaInfo = data.meta_info;
    this.url = createLinkObject({
        pause_on_navigation: data.pause_on_navigation,
        target: data.target || 'new',
        value: data.url
    });
}

function createPollCard(id, data, context) {
    p2.call(this, id, data, context);
    this.B = this.id.replace(/[^a-z0-9-]/gi, '-');
    this.title = data.title;
    this.choices = data.choices;
    this.g = data.hasOwnProperty('old_vote') ? data.old_vote : null;
    this.A = null;
    if (id = data.signin_url)
        this.A = createLinkObject({
            target: 'current',
            value: id
        });
    this.H = data.hasOwnProperty('xsrf_token') ? data.xsrf_token : null;
}

function createProductListingCard(id, data, context) {
    createSimpleCard.call(this, id, data, context);
    this.offers = [];
    id = data.offers || [];
    for (data = 0; data < id.length; data++)
        this.offers.push(new createOfferObject(id[data]));
}

function createOfferObject(data) {
    this.merchant = _yt_player.E(data.merchant);
    this.price = _yt_player.E(data.price);
}

function createTipCard(id, data, context) {
    createSimpleCard.call(this, id, data, context);
    this.K = data.ypc_item_type;
    this.H = data.ypc_item_id;
    this.B = data.ypc_flow_type;
}

function createVideoCard(id, data, context) {
    p2.call(this, id, data, context);
    this.A = data.image_url;
    this.videoDuration = data.video_duration || null;
    this.customMessage = data.custom_message;
    this.title = data.title;
    this.metaInfo = data.meta_info;
    this.isLiveNow = !!data.is_live_now;
    this.url = createLinkObject({
        pause_on_navigation: data.pause_on_navigation,
        target: data.target || 'new',
        value: data.url
    });
}

function createEpisodeCard(id, data, context) {
    p2.call(this, id, data, context);
    this.H = data.image_url;
    this.A = data.badge_symbol || '';
    this.priceText = data.price_text || '';
    this.title = data.title;
    this.metaInfo = data.meta_info;
    this.B = !!data.is_paygated;
    this.I = !!data.user_has_entitlement;
    this.url = createLinkObject({
        target: data.target || 'new',
        value: data.url
    });
}

function createCardLogger(context) {
    this.g = context;
    this.l = {};
}

function logCardDismissed(logger) {
    var b = {};
    b = (b['iv-event'] = 1, b);
    _yt_player.bV(logger.g, 'iv', b, void 0);
}

function logCardShown(logger, cardId, impressionUrls, extraData) {
    if (cardId) {
        var e = createCardPingData(logger, cardId);
        logger.l[cardId] = e['p-time'];
        e['iv-event'] = e.link || e['l-class'] || e['link-id'] ? 2 : 7;
        cardId = getCardPingUrls(logger, 'cta_annotation_shown', e, impressionUrls);
        sendCardPing(logger, e, filterPingUrls(cardId, extraData));
    }
}

function logCardClick(logger, cardId, clickCallback, extraData, clickUrls, menuIndex) {
    if (cardId) {
        var k = createCardPingData(logger, cardId);
        k['iv-event'] = 3;
        k['i-time'] = logger.l[cardId] || '';
        extraData && _yt_player.fc(k, extraData);
        cardId = getCardPingUrls(logger, 'cta_annotation_clicked', k, clickUrls);
        sendCardPing(logger, k, cardId, clickCallback, menuIndex);
    }
}

function logCardClose(logger, cardId) {
    if (cardId) {
        var c = createCardPingData(logger, cardId);
        c['iv-event'] = 4;
        c['i-time'] = logger.l[cardId] || '';
        var d = getCardPingUrls(logger, 'cta_annotation_closed', c);
        sendCardPing(logger, c, d);
    }
}

function filterPingUrls(urls, filterPredicate) {
    return filterPredicate ? (0, _yt_player.G)(urls, _yt_player.Ga(function(urls, filterPredicate) {
        return _yt_player.Um(filterPredicate, urls);
    }, filterPredicate)) : urls;
}

function getCardPingUrls(logger, eventName, data, extraUrls) {
    extraUrls = extraUrls ? _yt_player.Ya(extraUrls) : [];
    if (30 == data['a-type']) {
        logger: {
            data = data['a-id'];
            logger = logger.g.getVideoData();
            if (logger.Ax) {
                if ((eventName = logger.Ax[eventName]) && _yt_player.hH(eventName)) {
                    logger = _yt_player.pb('[ANNOTATION_ID]');
                    0 <= eventName.indexOf('[ANNOTATION_ID]') ? eventName = eventName.replace(
                        '[ANNOTATION_ID]', data) : 0 <= eventName.indexOf(logger) && (eventName = eventName
                        .replace(logger, data));
                    break logger;
                }
            } else if (logger.Lp) {
                eventName = _yt_player.fE(logger.Lp, {
                    label: eventName,
                    value: 'a_id=' + data
                });
                break logger;
            }
            eventName = '';
        }
        eventName && extraUrls.push(eventName);
    }
    return extraUrls;
}

function sendCardPing(logger, data, urls, callback, timeoutMs) {
    var f = 1,
        k = -1;
    if (callback) {
        var l = !1;
        var m = function() {
            f--;
            f || l || ((0, window.clearTimeout)(k), l = !0, callback());
        };
        k = (0, window.setTimeout)(function() {
            l = !0;
            callback();
        }, 1000);
    }
    (0, _yt_player.B)(urls || [], function(logger) {
        f++;
        _yt_player.FE(logger, m);
    });
    timeoutMs && (f++, 0 != timeoutMs && logger.g.Ni(timeoutMs, m));
    _yt_player.bV(logger.g, 'iv', data, m);
}

function createCardPingData(logger, cardId) {
    var c = {};
    if (cardId) {
        var d = new _yt_player.Cm(cardId);
        (0, _yt_player.B)(d.Bb(), function(logger) {
            c[logger] = (0, window.escape)(d.get(logger, ''));
        });
    }
    c['p-time'] = logger.g.getCurrentTime().toFixed(2);
    c.ps = _yt_player.Y(logger.g).playerStyle;
    return c;
}

function logDrawerEvent(logger, eventId, eventType, pingUrls, cardId) {
    cardId = createCardPingData(logger, cardId);
    cardId['iv-event'] = eventType;
    eventId && (cardId.ei = eventId);
    cardId['a-id'] || (cardId['a-id'] = 'card:drawer');
    cardId['a-type'] = 51;
    sendCardPing(logger, cardId, pingUrls);
}

function logTeaserEvent(logger, eventType, cardId, pingUrls) {
    cardId && (cardId = createCardPingData(logger, cardId), cardId['iv-event'] = eventType, sendCardPing(logger, cardId, pingUrls));
}

function createCardContext(eventTarget, elementIdGenerator, languageCodeProvider, videoData, logger, player, webPlayerContext) {
    this.g = eventTarget;
    this.A = elementIdGenerator;
    this.B = languageCodeProvider;
    this.videoData = videoData;
    this.logger = logger;
    this.l = player;
    this.o = webPlayerContext;
}

function createCardHandler(context, clickHandler, ypcHandler) {
    this.g = context;
    this.A = clickHandler;
    this.B = ypcHandler;
    this.l = new _yt_player.cp(null);
}

function createPollCardElement(handler, card) {
    var c = [];
    (0, _yt_player.B)(card.choices, function(handler) {
        c.push({
            G: 'li',
            L: card.B + '-' + handler.index.toString(),
            N: [{
                    G: 'label',
                    N: [{
                            G: 'input',
                            L: 'iv-card-poll-choice-input',
                            P: {
                                type: 'checkbox',
                                role: 'radio',
                                name: card.B + handler.index
                                    .toString(),
                                value: handler.index.toString(),
                                'data-poll-choice-index': handler
                                    .index.toString()
                            }
                        },
                        {
                            G: 'span',
                            L: 'iv-card-poll-choice-text',
                            N: [{
                                    G: 'span',
                                    L: 'iv-card-poll-choice-percent'
                                },
                                createCardTextElement(this, 'span', void 0,
                                    handler.desc)
                            ]
                        }
                    ]
                },
                {
                    G: 'div',
                    L: 'iv-card-poll-result',
                    N: [{
                        G: 'div',
                        L: 'iv-card-poll-result-bar'
                    }]
                }
            ]
        });
    }, handler);
    var d = {
            G: 'ul',
            P: {
                role: 'radiogroup'
            },
            N: c
        },
        e = {};
    card.A && (e['aria-label'] = _yt_player.O0('$POLL_TITLE - Sign in to vote.', {
        POLL_TITLE: card.title
    }));
    var f = [
        'iv-card',
        'iv-card-poll'
    ];
    d = [{
        G: 'div',
        L: 'iv-card-content',
        N: [
            createCardTextElement(handler, 'h2', e, card.title),
            {
                G: 'form',
                N: [{
                    G: 'fieldset',
                    N: [d]
                }]
            }
        ]
    }];
    card.A && (f.push('iv-card-unavailable'), d.push({
        G: 'div',
        da: ['iv-card-sign-in'],
        N: [{
                G: 'h2',
                aa: 'Want to vote?'
            },
            {
                G: 'a',
                da: [
                    'iv-card-sign-in-button',
                    'iv-button'
                ],
                P: {
                    href: getLinkValue(card.A)
                },
                N: [{
                    G: 'span',
                    da: ['iv-button-content'],
                    aa: I3.cI
                }]
            }
        ]
    }));
    f = new _yt_player.W({
        G: 'div',
        da: f,
        N: d
    });
    d = f.element;
    updatePollCardElement(card, d);
    addPollChoiceInputListener(handler.g.g, d, _yt_player.Ga(handler.D, card), handler);
    (0, _yt_player.B)(_yt_player.rd('iv-card-poll-choice-input', d), function(
    handler) {
        this.g.g.U(handler, 'focus', _yt_player.Ga(this.o, !0));
        this.g.g.U(handler, 'blur', _yt_player.Ga(this.o, !1));
    }, handler);
    card.A && (d = _yt_player.J('iv-card-sign-in-button', d), handler.A(d, card.A, card.id, card
        .Rd, card.o, card.l.click, 5));
    return f;
}

function createSimpleCardElement(handler, card, clickCallback, signInCallback) {
    var e = card.displayDomain ? {
            G: 'div',
            L: 'iv-card-image-text',
            aa: card.displayDomain
        } : '',
        f = createCardActionElement(handler, card),
        k = ['iv-card'];
    card.g && k.push('iv-card-unavailable');
    e = [{
        G: 'a',
        L: 'iv-click-target',
        P: {
            href: getLinkValue(card.url)
        },
        N: [
            createCardImageElement(card.imageUrl, e),
            {
                G: 'div',
                L: 'iv-card-content',
                N: [
                    createCardTextElement(handler, 'h2', void 0, card.title),
                    f
                ]
            }
        ]
    }];
    card.g && e.push({
        G: 'div',
        da: ['iv-card-sign-in'],
        N: [
            createCardTextElement(handler, 'h2', void 0, card.J || ''),
            {
                G: 'p',
                aa: card.I
            },
            {
                G: 'a',
                da: [
                    'iv-card-sign-in-button',
                    'iv-button'
                ],
                P: {
                    href: getLinkValue(card.g)
                },
                N: [createCardTextElement(handler, 'span', 'iv-button-content', I3.cI)]
            }
        ]
    });
    k = new _yt_player.W({
        G: 'div',
        da: k,
        N: e
    });
    addCardClickListeners(handler, k, card, clickCallback, signInCallback);
    return k;
}

function createYpcBadgeCardElement(handler, card, cardClass) {
    var d = [
            'yt-badge',
            'standalone-ypc-badge-renderer-icon',
            card.I ? 'standalone-ypc-badge-renderer-icon-purchased' :
            'standalone-ypc-badge-renderer-icon-available'
        ],
        e = {};
    d = card.B && card.A ? {
        G: 'span',
        da: d,
        P: e,
        aa: card.A
    } : '';
    cardClass = {
        G: 'div',
        da: [
            'iv-card',
            cardClass
        ],
        N: [{
            G: 'a',
            L: 'iv-click-target',
            P: {
                href: getLinkValue(card.url)
            },
            N: [
                createCardImageElement(card.H, d ? {
                    G: 'div',
                    L: 'iv-card-image-text',
                    N: [
                        d,
                        card.priceText
                    ]
                } : ''),
                {
                    G: 'div',
                    L: 'iv-card-content',
                    N: [{
                            G: 'h2',
                            L: 'iv-card-primary-link',
                            aa: card.title
                        },
                        createCardMetaInfoElement(handler, card)
                    ]
                }
            ]
        }]
    };
    cardClass = new _yt_player.W(cardClass);
    addCardClickListeners(handler, cardClass, card);
    return cardClass;
}

function createCardMessageElement(handler, card) {
    return card.customMessage ? createCardTextElement(handler, 'div', 'iv-card-message', card.customMessage) :
        '';
}

function createCardImageElement(imageUrl, overlayElement) {
    var c = 'background-image: url(' + imageUrl + ');',
        d = [];
    overlayElement && d.push(overlayElement);
    return {
        G: 'div',
        L: 'iv-card-image',
        P: {
            style: c
        },
        N: d
    };
}

function createCardMetaInfoElement(handler, card) {
    if (!card.metaInfo || 0 == card.metaInfo.length)
        return '';
    var c = [];
    (0, _yt_player.B)(card.metaInfo, function(handler) {
        c.push(createCardTextElement(this, 'li', '', handler));
    }, handler);
    return {
        G: 'ul',
        L: 'iv-card-meta-info',
        N: c
    };
}

function createCardTextElement(handler, tagName, className, text) {
    className ? _yt_player.u(className) ? className = {
        'class': className
    } : _yt_player.Aa(className) && (className = {
        'class': className.join(' ')
    }) : className = {};
    className.dir = _yt_player.dp(handler.l, text);
    return {
        G: tagName,
        P: className,
        aa: text
    };
}

function createCardActionElement(handler, card) {
    if (!card.customMessage)
        return '';
    var c = [
            'iv-card-action',
            'iv-card-primary-link'
        ],
        d = {};
    card.A && (c.push('iv-card-action-icon'), d.style = 'background-image: url(' +
        card.A + ');');
    d.dir = _yt_player.dp(handler.l, card.customMessage);
    var e = [{
        G: 'span',
        aa: card.customMessage
    }];
    card.showLinkIcon && (e.push('聽'), e.push({
        G: 'span',
        L: 'iv-card-link-icon'
    }));
    return {
        G: 'div',
        da: c,
        P: d,
        N: e
    };
}

function updatePollCardElement(card, element) {
    var c = 0;
    (0, _yt_player.B)(card.choices, function(card) {
        c += card.count;
    });
    c = c || 1;
    for (var d = 0; d < card.choices.length; d++) {
        var e = card.choices[d],
            f = _yt_player.J(card.B + '-' + e.index.toString(), element);
        e = e.count / c;
        null == card.g && (e = 0);
        _yt_player.U(f.getElementsByTagName('label')[0],
            'iv-card-poll-choice-checked', card.g == d);
        f.getElementsByTagName('input')[0].checked = card.g == d;
        var k = Math.floor(100 * e).toFixed(0),
            l = _yt_player.J('iv-card-poll-choice-percent', f);
        _yt_player.Sd(l, _yt_player.O0('$PERCENT%', {
            PERCENT: k
        }));
        f = _yt_player.J('iv-card-poll-result-bar', f);
        _yt_player.ph(f, 'transform', 'scaleX(' + e.toFixed(2) + ')');
    }
    _yt_player.U(element, 'iv-card-poll-voted', null != card.g);
    _yt_player.U(element, 'iv-card-poll-expanded', null != card.g && 1 < card.choices
        .length);
}

function handleCardClick(handler, card, openInNewWindow, callback) {
    callback ? (openInNewWindow && handler.g.videoData.za || handler.g.l.hd(), handler.g.l.isFullscreen() && _yt_player
            .YU(handler.g.l), logCardClick(handler.g.logger, card.o, callback, void 0, card.l.click, 5)) : card.url &&
        handler.B(card.url, card.id, card.Rd, card.o, card.l.click || [], 5);
}

function addCardClickListeners(handler, element, card, clickCallback, signInCallback) {
    card.g && addCardClickHandler(handler, _yt_player.rd('iv-card-sign-in-button', element.element), card, card.g,
    signInCallback);
    card.url && addCardClickHandler(handler, _yt_player.rd('iv-click-target', element.element), card, card.url, clickCallback);
}

function addCardClickHandler(handler, elements, card, linkObject, callback) {
    (0, _yt_player.B)(elements, function(handler) {
        if (callback) {
            var elements = (0, _yt_player.z)(function(handler) {
                handler.stopPropagation();
                handler.preventDefault();
                callback();
                return !1;
            }, this);
            this.g.g.U(handler, 'click', elements);
        } else
            linkObject && this.A(handler, linkObject, card.id, card.Rd, card.o, card.l.click, 5);
    }, handler);
}

function parseVideoDuration(durationString) {
    var b = 0; -
    1 != durationString.indexOf('h') && (durationString = durationString.split('h'), b = 3600 * durationString[0], durationString = durationString[1]); -
    1 != durationString.indexOf('m') && (durationString = durationString.split('m'), b = 60 * durationString[0] + b, durationString = durationString[1]); -
    1 != durationString.indexOf('s') ? (durationString = durationString.split('s'), b = 1 * durationString[0] + b) : b = 1 * durationString + b;
    return b;
}

function isInternalUrl(url) {
    var b;
    (b = url) && !(b = 1 < url.length ? '/' == url.charAt(0) && '/' != url.charAt(1) :
        '/' == url) && (b = extractDomainParts(url), b = 'com' == b[0] && 'youtube' == b[1] ||
        'be' == b[0] && 'youtu' == b[1]);
    return b ? -1 == url.indexOf('/redirect?') : !1;
}

function extractDomainParts(url) {
    url = url.replace(/^(https?:)?\/\//, '');
    url = url.split('/', 1);
    return !url || 1 > url.length || !url[0] ? [] : url[0].toLowerCase().split('.')
        .reverse();
}

function getVideoStartTimeFromUrl(url) {
    url = getLinkValue(url);
    if (!url)
        return null;
    url = url.replace(/https?:\/\//g, '');
    var b;
    (b = !isInternalUrl(url)) || (b = _yt_player.Gg(_yt_player.Fg(url)[5] || null) || '', b = b
        .split('/'), b = '/' + (1 < b.length ? b[1] : ''), b = '/watch' != b);
    if (b)
        return null;
    b = _yt_player.dE(url);
    if (!b || !b.v)
        return null;
    if (b = b.t)
        return parseVideoDuration(b);
    url = url.split('#', 2);
    return !url || 2 > url.length ? null : (url = _yt_player.bE(url[1])) && url.t ? parseVideoDuration(url
        .t) : -1;
}

function getVideoIdFromUrl(url) {
    url = getLinkValue(url);
    url = url.replace(/https?:\/\//g, '');
    return isInternalUrl(url) ? (url = _yt_player.dE(url)) && url.v ? url.v : null : null;
}

function addChannelIdToUrl(channelId, loggedInUserId, url) {
    url = url.replace(/\/(u|b)\/[0-9]+/g, '');
    var d = /^[0-9]+$/;
    channelId && d.test(channelId) && (url = '/b/' + channelId + url);
    loggedInUserId && d.test(loggedInUserId) && (url = '/u/' + loggedInUserId + url);
    return url;
}

function determineTargetWindow(url, target) {
    return target ? target : isInternalUrl(url) ? 'current' : 'new';
}

function createCardBase(element, context) {
    _yt_player.M.call(this);
    this.Ga = element;
    this.context = context;
    this.Yv = !1;
    this.Y = 0;
}

function addTimeRangeListener(cardBase, startTime, endTime, id, enterCallback, exitCallback) {
    startTime = new _yt_player.eQ(startTime, endTime, {
        id: id
    });
    _yt_player.N(cardBase, startTime);
    startTime.namespace = 'annotations_module';
    enterCallback && getCardEventTarget(startTime).subscribe('onEnter', enterCallback, cardBase);
    exitCallback && getCardEventTarget(startTime).subscribe('onExit', exitCallback, cardBase);
    _yt_player.hV(cardBase.context.l, [startTime]);
}

function getTimeSinceLastShown(cardBase) {
    return (0, _yt_player.F)() - cardBase.Y;
}

function handleCardLinkClick(cardBase, linkObject, annotation, logData, clickUrls, menuIndex) {
    var k = getLinkValue(linkObject);
    if (k) {
        var l = determineTargetWindow(k, linkObject.target),
            m = (0, _yt_player.z)(function() {
                linkObject.g && this.context.l.hd();
                _yt_player.vV(k || '', 'current' == l ? '_top' : void 0, annotation);
            }, cardBase);
        'new' == l && (m(), m = null);
        var n = {};
        n.interval = getTimeSinceLastShown(cardBase);
        logCardClick(cardBase.context.logger, logData, m, n, clickUrls, menuIndex);
        isInternalUrl(k) || (cardBase = _yt_player.MG(), logData = annotation.itct, cardBase && logData && logVisualElementClick(cardBase, createVisualElementObject(logData)));
    }
}

function createCardDrawer1(player, element, context) {
    createCardBase.call(this, element, context);
    var d = this;
    this.g = player;
    this.M = null;
    this.T = this.ya = this.B = this.sa = !1;
    this.X = null;
    this.J = new _yt_player.Yt(_yt_player.y, context.B.useTabletControls ? 4000 :
        3000);
    _yt_player.N(this, this.J);
    this.na = new _yt_player.Yt(_yt_player.y);
    _yt_player.N(this, this.na);
    this.C = new createCardHandler(context, (0, _yt_player.z)(this.Zi, this), (0, _yt_player.z)(this
        .Uo, this));
    this.H = new _yt_player.W({
        G: 'div',
        L: 'iv-drawer',
        P: {
            id: 'iv-drawer'
        },
        N: [{
                G: 'div',
                L: 'iv-drawer-header',
                P: {
                    'aria-role': 'heading'
                },
                N: [{
                        G: 'span',
                        L: 'iv-drawer-header-text'
                    },
                    {
                        G: 'button',
                        da: [
                            'iv-drawer-close-button',
                            'ytp-button'
                        ],
                        P: {
                            'aria-label': 'Hide cards',
                            tabindex: '0'
                        }
                    }
                ]
            },
            {
                G: 'div',
                L: 'iv-drawer-content'
            }
        ]
    });
    _yt_player.N(this, this.H);
    this.D = this.H.element;
    this.ca = new _yt_player.MV(this.H, 330);
    _yt_player.N(this, this.ca);
    this.Da = _yt_player.J('iv-drawer-header-text', this.D);
    this.A = _yt_player.J('iv-drawer-content', this.D);
    this.o = [];
    this.ra = this.K = this.F = this.getUiClassName = this.l = null;
    this.ha = [];
    addTimeRangeListener(this, 0, 1000 * context.videoData.lengthSeconds, '', function() {
        d.ya && showCardDrawer(d, 'YOUTUBE_DRAWER_AUTO_OPEN');
    }, function() {
        (d.ya = d.B) && hideCardDrawer(d);
    });
    this.I = this.ga = this.ea = null;
}

function addCardToDrawer(drawer, card) {
    var c = card && card.data && card.data.card_type;
    if (c && Nxa[c]) {
        c = new Nxa[c](card.id, card.data, card.g);
        if (!drawer.sa) {
            _yt_player.lq(drawer.la(), [
                'html5-stop-propagation',
                'iv-drawer-manager'
            ]);
            _yt_player.mV(drawer.g, drawer.D, 5);
            addCardDrawerEventListeners(drawer);
            drawer.K = _yt_player.J('ytp-cards-button', drawer.g.getRootNode());
            var d = _yt_player.J('iv-drawer-close-button', drawer.D);
            drawer.ra = d;
            drawer.sa = !0;
        }
        removeCardFromDrawer(drawer, c.id);
        var e = createCardElement2(drawer, c);
        if (e) {
            d = {
                hc: c,
                ur: e.element,
                BA: !1
            };
            var f = getCardIndex(drawer, d);
            _yt_player.ab(drawer.o, f, 0, d);
            e.ua(drawer.A, f);
            drawer.Fn();
            c.autoOpen ? addTimeRangeListener(drawer, c.startMs, 2251799813685248, c.id, _yt_player.Ga(
                drawer.MV, d)) : (e = 1000 * drawer.context.l.getCurrentTime(), 5000 >
                e && e > c.startMs && drawer.kE(d), addTimeRangeListener(drawer, c.startMs, c.startMs +
                    1, c.id, _yt_player.Ga(drawer.kE, d)), updateShoppingCardState(drawer));
        }
    }
}

function updateCardDrawer(drawer, drawerData) {
    drawerData.data.autoOpenMs && addTimeRangeListener(drawer, drawerData.data.autoOpenMs, 2251799813685248, '',
        function() {
            showCardDrawer(drawer, 'YOUTUBE_DRAWER_AUTO_OPEN');
        });
    drawerData.data.autoCloseMs && addTimeRangeListener(drawer, drawerData.data.autoCloseMs, 2251799813685248, '',
        function() {
            hideCardDrawer(drawer);
        });
    var c = drawerData.data.headerText;
    _yt_player.Sd(drawer.Da, c);
    drawer.K && drawer.K.setAttribute('title', c);
    drawerData.data.eventId && (drawer.M = drawerData.data.eventId);
    drawer.ea = createVisualElementObject(drawerData.data.trackingParams);
    drawer.I = createVisualElementObject(drawerData.data.closeTrackingParams);
    drawer.ga = createVisualElementObject(drawerData.data.iconTrackingParams);
}

function removeCardFromDrawer(drawer, cardId) {
    var c = findCardDataById(drawer, cardId);
    c && (c == drawer.l && (drawer.l = null), drawer.g.kB(c.hc.id), _yt_player.Kd(c.ur),
        _yt_player.Va(drawer.o, c), drawer.Fn(), updateShoppingCardState(drawer));
}

function showCardDrawer(drawer, triggerType, forceFocus, cardData) {
    if (!drawer.B) {
        drawer.ca.show();
        drawer.getUiClassName = new _yt_player.Yt(function() {
            _yt_player.S(drawer.context.l.getRootNode(),
                'ytp-iv-drawer-open');
        }, 0);
        drawer.getUiClassName.start();
        drawer.X = _yt_player.rF(drawer.A, 'mousewheel', (0, _yt_player.z)(drawer.ZM, drawer));
        drawer.B = !0;
        drawer.Y = (0, _yt_player.F)();
        logDrawerEvent(drawer.context.logger, drawer.M, 7, void 0, cardData && cardData.hc ? cardData.hc.o : void 0);
        var e = _yt_player.MG();
        e && drawer.ea && drawer.I && (logVisualElementShown(e, drawer.ea), logVisualElementShown(e, drawer.I));
        var f = {
            TRIGGER_TYPE: triggerType
        };
        (0, _yt_player.B)(drawer.o, function(triggerType) {
            triggerType.BA || (triggerType.BA = !0, logCardShown(drawer.context.logger, triggerType.hc.o, triggerType.hc.l.BL, f));
            e && logVisualElementShown(e, triggerType.hc.C);
        });
        updateCardState(drawer.g);
        forceFocus && (drawer.F = new _yt_player.Yt(function() {
            drawer.fa = drawer.K;
            drawer.ra.focus();
        }, 330), drawer.F.start());
    }
}

function hideCardDrawer(drawer) {
    drawer.B && (drawer.ca.hide(), _yt_player.sF(drawer.X), drawer.X = null, _yt_player.mq(drawer.context
            .l.getRootNode(), 'ytp-iv-drawer-open'), drawer.B = !1, updateCardState(drawer.g), drawer
        .F && drawer.F.stop(), drawer.F = new _yt_player.Yt(function() {
            drawer.fa && (drawer.fa.focus(), drawer.fa = null);
        }, 330), drawer.F.start());
}

function addCardDrawerEventListeners(drawer) {
    var b = _yt_player.J('iv-drawer-close-button', drawer.D);
    drawer.context.g.U(b, 'click', drawer.fJ, drawer);
    drawer.context.g.U(drawer.A, 'touchend', function() {
        drawer.J.start();
    });
    drawer.context.g.U(drawer.A, 'scroll', drawer.qJ, drawer);
    drawer.context.o.subscribe('onHideControls', function() {
        drawer.T = !0;
    });
    drawer.context.o.subscribe('onShowControls', function() {
        drawer.T = !1;
    });
    drawer.context.o.subscribe('onVideoAreaChange', function() {
        drawer.T = _yt_player.kq(drawer.g.getRootNode(), 'ytp-autohide');
    });
    drawer.ha.push(_yt_player.UF('iv-teaser-shown', drawer.YL, drawer));
    drawer.ha.push(_yt_player.UF('iv-teaser-clicked', drawer.XL, drawer));
}

function createCardElement2(drawer, card) {
    switch (card.type) {
        case 'simple':
            return createSimpleCardElement(drawer.C, card);
        case 'collaborator':
            var c = drawer.C,
                d = {
                    G: 'div',
                    da: [
                        'iv-card',
                        'iv-card-channel'
                    ],
                    N: [{
                        G: 'a',
                        da: ['iv-click-target'],
                        P: {
                            href: getLinkValue(card.url),
                            'data-ytid': card.channelId
                        },
                        N: [
                            createCardImageElement(card.profileImageUrl),
                            {
                                G: 'div',
                                L: 'iv-card-content',
                                N: [
                                    createCardMessageElement(c, card),
                                    {
                                        G: 'h2',
                                        L: 'iv-card-primary-link',
                                        aa: card.title
                                    },
                                    createCardMetaInfoElement(c, card)
                                ]
                            }
                        ]
                    }]
                };
            d = new _yt_player.W(d);
            addCardClickListeners(c, d, card);
            return d;
        case 'donation':
            return c = drawer.C, d = (0, _yt_player.z)(c.C, c, card), createSimpleCardElement(c, card, d, d);
        case 'episode':
            return createYpcBadgeCardElement(drawer.C, card, 'iv-card-episode');
        case 'movie':
            return createYpcBadgeCardElement(drawer.C, card, 'iv-card-movie');
        case 'playlist':
            return c = drawer.C, d = {
                G: 'div',
                da: [
                    'iv-card',
                    'iv-card-playlist'
                ],
                N: [{
                    G: 'a',
                    L: 'iv-click-target',
                    P: {
                        href: getLinkValue(card.url)
                    },
                    N: [
                        createCardImageElement(card.A, {
                            G: 'div',
                            L: 'iv-card-image-overlay',
                            N: [{
                                G: 'span',
                                L: 'iv-card-playlist-video-count',
                                aa: card
                                    .playlistVideoCount
                                    .toString()
                            }]
                        }),
                        {
                            G: 'div',
                            L: 'iv-card-content',
                            N: [
                                createCardMessageElement(c, card),
                                createCardTextElement(c, 'h2',
                                    'iv-card-primary-link',
                                    card.title),
                                createCardMetaInfoElement(c, card)
                            ]
                        }
                    ]
                }]
            }, d = new _yt_player.W(d), addCardClickListeners(c, d, card), d;
        case 'poll':
            return createPollCardElement(drawer.C, card);
        case 'productListing':
            c = drawer.C;
            var e = !_yt_player.Ra(card.offers);
            d = ['iv-card'];
            var f = '',
                k = createCardActionElement(c, card);
            e && (d.push('iv-card-product-listing'), f = 'iv-card-primary-link',
                e = card.offers[0], k = [], e.price && k.push({
                    G: 'div',
                    L: 'iv-card-offer-price',
                    aa: e.price
                }), e.merchant && k.push({
                    G: 'div',
                    L: 'iv-card-offer-merchant',
                    aa: e.merchant
                }), k = {
                    G: 'div',
                    N: k
                });
            d = {
                G: 'div',
                da: d,
                P: {
                    tabindex: '0'
                },
                N: [{
                        G: 'a',
                        da: [
                            'iv-card-image',
                            'iv-click-target'
                        ],
                        P: {
                            style: 'background-image: url(' + card
                                .imageUrl + ');',
                            href: getLinkValue(card.url),
                            'aria-hidden': 'true',
                            tabindex: '-1'
                        }
                    },
                    {
                        G: 'div',
                        L: 'iv-card-content',
                        N: [
                            card.sponsored ? {
                                G: 'div',
                                L: 'iv-card-sponsored',
                                N: [
                                    'Sponsored',
                                    {
                                        G: 'div',
                                        L: 'iv-ad-info-container',
                                        N: [{
                                                G: 'div',
                                                L: 'iv-ad-info',
                                                aa: '{{adInfo}}'
                                            },
                                            {
                                                G: 'div',
                                                L: 'iv-ad-info-icon-container',
                                                N: [{
                                                        G: 'div',
                                                        L: 'iv-ad-info-icon'
                                                    },
                                                    {
                                                        G: 'div',
                                                        L: 'iv-ad-info-callout'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            } : '',
                            {
                                G: 'a',
                                L: 'iv-click-target',
                                P: {
                                    href: getLinkValue(card.url)
                                },
                                N: [
                                    createCardTextElement(c, 'h2', f, card.title),
                                    k
                                ]
                            }
                        ]
                    }
                ]
            };
            d = new _yt_player.W(d);
            f = _yt_player.Ed('span');
            _yt_player.Sd(f,
                'You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.'
                );
            d.Mb(f, 'adInfo');
            addCardClickListeners(c, d, card);
            return d;
        case 'tip':
            return c = drawer.C, d = (0, _yt_player.z)(c.F, c, card), createSimpleCardElement(c, card, d, d);
        case 'video':
            return c = drawer.C, d = card.isLiveNow ? {
                G: 'span',
                da: [
                    'yt-badge',
                    'yt-badge-live'
                ],
                aa: 'LIVE NOW'
            } : '', d = {
                G: 'div',
                da: [
                    'iv-card',
                    'iv-card-video'
                ],
                N: [{
                    G: 'a',
                    L: 'iv-click-target',
                    P: {
                        href: getLinkValue(card.url)
                    },
                    N: [
                        createCardImageElement(card.A, card.videoDuration ? {
                            G: 'span',
                            L: 'iv-card-video-duration',
                            aa: card.videoDuration
                        } : ''),
                        {
                            G: 'div',
                            L: 'iv-card-content',
                            N: [
                                createCardMessageElement(c, card),
                                createCardTextElement(c, 'h2',
                                    'iv-card-primary-link',
                                    card.title),
                                createCardMetaInfoElement(c, card),
                                d
                            ]
                        }
                    ]
                }]
            }, d = new _yt_player.W(d), addCardClickListeners(c, d, card), d;
    }
    return null;
}

function getCardIndex(drawer, cardData) {
    if (0 == drawer.o.length)
        return 0;
    var c = _yt_player.Na(drawer.o, function(drawer) {
        return cardData.hc.startMs > drawer.hc.startMs || cardData.hc.startMs == drawer.hc
            .startMs && cardData.hc.timestamp >= drawer.hc.timestamp ? !0 : !1;
    });
    return -1 == c ? 0 : c + 1;
}

function isShoppingCardActive(drawer) {
    return drawer.l ? 'productListing' == drawer.l.hc.type : (0, _yt_player.dm)(drawer.o,
        function(drawer) {
            return 'productListing' == drawer.hc.type;
        });
}

function updateShoppingCardState(drawer) {
    _yt_player.U(drawer.g.getRootNode(), 'ytp-cards-shopping-active', isShoppingCardActive(drawer));
}

function scrollToCard(drawer, cardData) {
    if (drawer.H.o) {
        var c = new d2([
            0,
            drawer.A.scrollTop
        ], [
            0,
            cardData.ur.offsetTop
        ], 600, Hva);
        drawer.context.A.U(c, 'animate', function(cardData) {
            drawer.A.scrollTop = cardData.y;
        });
        drawer.context.A.U(c, 'finish', function(cardData) {
            drawer.A.scrollTop = cardData.y;
        });
        c.play();
    } else
        _yt_player.sH(drawer.H, !0), drawer.A.scrollTop = cardData.ur.offsetTop, _yt_player.sH(drawer
            .H, !1);
}

function getCurrentCard(drawer) {
    return drawer.l && drawer.l.hc ? drawer.l.hc : drawer.o[0] && drawer.o[0].hc ? drawer.o[0].hc : null;
}

function findCardDataById(drawer, cardId) {
    return _yt_player.Ma(drawer.o, function(drawer) {
        return drawer.hc.id == cardId;
    });
}

function createAnnotationBase(element, context, annotation) {
    createCardBase.call(this, element, context);
    this.annotation = annotation;
    this.isActive = !1;
}

function addAnnotationTimeRangeListeners(annotationBase) {
    var b = annotationBase.annotation.data;
    'start_ms' in b && 'end_ms' in b && addTimeRangeListener(annotationBase, annotationBase.annotation.data.start_ms, annotationBase
        .annotation.data.end_ms, annotationBase.annotation.id,
        function() {
            annotationBase.show();
        },
        function() {
            annotationBase.hide();
        });
}

function createBrandingAnnotation(element, context, annotation) {
    createAnnotationBase.call(this, element, context, annotation);
    this.H = context;
    this.l = null;
    this.D = !1;
    this.o = null;
    this.A = !1;
    this.F = 0;
    this.g = this.C = this.B = null;
}

function createPromoAnnotation(element, context, annotation) {
    createAnnotationBase.call(this, element, context, annotation);
    this.H = this.B = this.I = !1;
    this.F = 5000;
    this.A = null;
    this.D = _yt_player.K('DIV', 'iv-promo-contents');
    this.l = this.o = this.g = null;
    this.C = new _yt_player.Yt(function() {
        this.g.setAttribute('aria-hidden', !0);
        _yt_player.O(this.o, !1);
        _yt_player.O(this.l, !0);
    }, 700, this);
    _yt_player.N(this, this.C);
}

function createPromoAnnotationElement(annotation) {
    var b = annotation.annotation.data;
    if ('cta' == annotation.annotation.style)
        var c = 6;
    else if ('video' == annotation.annotation.style || 'playlist' == annotation.annotation.style)
        c = 7;
    annotation.F = b.collapse_delay_ms || annotation.F;
    var d = [
        'iv-promo',
        'iv-promo-inactive'
    ];
    annotation.la().setAttribute('aria-hidden', !0);
    annotation.la().setAttribute('aria-label', 'Promotion');
    annotation.la().tabIndex = 0;
    var e = annotation.annotation.Ta(),
        f = b.image_url;
    if (f) {
        var k = _yt_player.K('DIV', [
            'iv-promo-img',
            'iv-click-target'
        ]);
        f = _yt_player.K('IMG', {
            src: f,
            'aria-hidden': 'true'
        });
        k.appendChild(f);
        b.video_duration && !b.is_live ? (f = _yt_player.K('SPAN',
            'iv-promo-video-duration', b.video_duration), k.appendChild(
            f)) : b.playlist_length && (f = _yt_player.K('SPAN',
                'iv-promo-playlist-length', b.playlist_length.toString()), k
            .appendChild(f));
        e && annotation.Zi(k, e, annotation.annotation.id, b.session_data, annotation.annotation.g, void 0,
            c);
    }
    e ? (f = _yt_player.K('A', 'iv-promo-txt'), _yt_player.ad(f, getLinkValue(e)), annotation.g =
        f) : annotation.g = _yt_player.K('DIV', 'iv-promo-txt');
    switch (annotation.annotation.style) {
        case 'cta':
        case 'website':
            var l = _yt_player.K('P', null, _yt_player.K('STRONG', null, b
                .text_line_1));
            var m = _yt_player.K('P', null, _yt_player.K('SPAN',
                'iv-promo-link', b.text_line_2));
            if (f = b.text_line_3) {
                d.push('iv-promo-website-card-cta-redesign');
                var n = _yt_player.K('BUTTON', [
                    'iv-promo-round-expand-icon',
                    'ytp-button'
                ]);
                f = _yt_player.K('BUTTON', [
                    'iv-button',
                    'iv-promo-button'
                ], _yt_player.K('SPAN', 'iv-button-content', f));
                var p = _yt_player.K('DIV', 'iv-promo-button-container');
                p.appendChild(f);
                e && annotation.Zi(annotation.la(), e, annotation.annotation.id, b.session_data, annotation
                    .annotation.g, void 0, c);
            }
            _yt_player.S(annotation.g, 'iv-click-target');
            e && annotation.Zi(annotation.g, e, annotation.annotation.id, b.session_data, annotation.annotation.g,
                void 0, c);
            break;
        case 'playlist':
        case 'video':
            l = _yt_player.K('P', null, _yt_player.K('SPAN', null, b
                .text_line_1));
            m = _yt_player.K('P', null, _yt_player.K('STRONG', null, b
                .text_line_2));
            b.is_live && (l = m, m = _yt_player.K('SPAN', [
                'yt-badge',
                'iv-promo-badge-live'
            ], 'LIVE NOW'));
            _yt_player.S(annotation.g, 'iv-click-target');
            e && annotation.Zi(annotation.g, e, annotation.annotation.id, b.session_data, annotation.annotation.g,
                void 0, c);
            d.push('iv-promo-video');
            break;
        case 'vote':
            l = _yt_player.K('P', null, _yt_player.K('STRONG', null, b
                    .text_line_1)), m = _yt_player.K('P', null, _yt_player.K(
                    'SPAN', null, b.text_line_2)), p = _yt_player.K('DIV',
                    'iv-promo-button-container'), c = _yt_player.K('BUTTON', [
                    'iv-button',
                    'iv-promo-button'
                ], _yt_player.K('SPAN', 'iv-button-content', b.button_text)), annotation
                .context.g.U(c, 'click', function(annotation) {
                    annotation.stopPropagation();
                    logCardClick(this.context.logger, this.annotation.g, null, {
                        contest_vote: '1'
                    }, (b.tracking || {}).vote);
                    annotation = this.annotation.data;
                    this.g = _yt_player.J('iv-promo-txt', this.D);
                    var c = _yt_player.J('iv-promo-button-container', this
                            .D),
                        d = _yt_player.K('DIV', [
                            'iv-promo-txt',
                            'iv-click-target'
                        ]),
                        e = _yt_player.K('P', null, _yt_player.K('STRONG',
                            null, annotation.text_line_3)),
                        f = _yt_player.K('P', null, annotation.text_line_4);
                    _yt_player.Hd(d, e, f);
                    _yt_player.Kd(c);
                    c = this.g;
                    (e = c.parentNode) && e.replaceChild(d, c);
                    _yt_player.mq(this.la(), 'iv-promo-with-button');
                    (c = this.annotation.Ta()) && this.Zi(d, c, this
                        .annotation.id, annotation.session_data, this.annotation
                        .g);
                }, annotation), p.appendChild(c), d.push('iv-promo-with-button');
    }
    l && annotation.g.appendChild(l);
    m && annotation.g.appendChild(m);
    annotation.D.appendChild(annotation.g);
    p && annotation.D.appendChild(p);
    l = _yt_player.K('DIV', 'iv-promo-actions');
    annotation.l = _yt_player.K('BUTTON', [
        'iv-promo-expand',
        'ytp-button'
    ]);
    annotation.l.title = 'Expand';
    annotation.context.g.U(annotation.l, 'click', _yt_player.Ga(annotation.ys, 5000), annotation);
    l.appendChild(annotation.l);
    _yt_player.O(annotation.l, !1);
    annotation.context.g.U(annotation.la(), 'mouseover', annotation.fK, annotation);
    annotation.context.g.U(annotation.la(), 'mouseout', annotation.eK, annotation);
    annotation.context.g.U(annotation.la(), 'touchend', _yt_player.Ga(annotation.ys, 5000), annotation);
    annotation.o = _yt_player.K('BUTTON', [
        'iv-promo-close',
        'ytp-button'
    ]);
    annotation.o.title = I3.CLOSE;
    annotation.context.g.U(annotation.o, 'click', 'cta' == annotation.annotation.style && b.text_line_3 ? annotation
        .UJ : annotation.LO, annotation);
    l.appendChild(annotation.o);
    _yt_player.lq(annotation.la(), d);
    k && (_yt_player.Gd(annotation.la(), k), n && k.appendChild(n));
    _yt_player.Gd(annotation.la(), annotation.D);
    _yt_player.Gd(annotation.la(), l);
}

function collapsePromoAnnotation(annotation) {
    annotation.B || annotation.H || annotation.A || (_yt_player.S(annotation.la(), 'iv-promo-collapsed'), annotation.B = !0,
        annotation.C.start());
}

function $xa(a) {
    a.C.stop();
    a.B && (_yt_player.nq(a.la(), [
            'iv-promo-collapsed',
            'iv-promo-collapsed-no-delay'
        ]), a.B = !1, a.g && a.g.removeAttribute('aria-hidden'), _yt_player
        .O(a.l, !1), _yt_player.O(a.o, !0));
}

function setPromoCollapseTimer(annotation, delayMs) {
    annotation.A || (annotation.A = _yt_player.tg(function() {
        $3(this);
        collapsePromoAnnotation(this);
    }, delayMs, annotation));
}

function $3(a) {
    a.A && (_yt_player.ug(a.A), a.A = null);
}

function createAnnotationsModule(player) {
    _yt_player.sV.call(this, player);
    this.J = !1;
    this.I = 0;
    this.o = {};
    this.K = {};
    this.Ya = new createCardLogger(player);
    this.F = new _yt_player.FF(this);
    _yt_player.N(this, this.F);
    this.D = this.B = null;
    this.F.O(this.g, 'onVideoAreaChange', (0, _yt_player.z)(this.R, this,
        'onVideoAreaChange'));
    this.F.O(this.g, 'onHideControls', (0, _yt_player.z)(this.R, this,
        'onHideControls'));
    this.F.O(this.g, 'onShowControls', (0, _yt_player.z)(this.R, this,
        'onShowControls'));
    this.F.O(this.g, 'resize', (0, _yt_player.z)(this.R, this, 'resize'));
    this.F.O(this.g, 'presentingplayerstatechange', (0, _yt_player.z)(this.R,
        this, 'presentingplayerstatechange'));
    this.subscribe('onHideControls', this.SR, this);
    this.subscribe('onShowControls', this.bU, this);
    this.subscribe('presentingplayerstatechange', this.fT, this);
    this.subscribe('resize', this.Tu, this);
    this.subscribe('E', this.AM, this);
    this.subscribe('D', this.Ih, this);
    this.subscribe('B', this.vQ, this);
    this.subscribe('C', this.bR, this);
    _yt_player.Y(this.g).C.subscribe('vast_info_card_add', this.lD, this);
    this.X = new _yt_player.FF(this);
    _yt_player.N(this, this.X);
    this.X.O(this.g, 'crn_annotations_module', this.yM);
    this.X.O(this.g, 'crx_annotations_module', this.zM);
    this.T = _yt_player.K('DIV', [
        'video-legacy-annotations',
        'html5-stop-propagation'
    ]);
    this.getUiClassName = _yt_player.K('DIV', 'video-custom-annotations');
    this.A = new _yt_player.W({
        G: 'div',
        da: [
            'ytp-player-content',
            'ytp-iv-player-content'
        ]
    });
    _yt_player.N(this, this.A);
    _yt_player.mV(this.g, this.A.element, 4);
    this.A.hide();
    this.C = new _yt_player.W({
        G: 'div',
        da: ['ytp-iv-video-content']
    });
    _yt_player.N(this, this.C);
    _yt_player.Gd(this.C.element, _yt_player.K('DIV', 'video-annotations', this
        .T, this.getUiClassName));
    this.H = this.l = null;
    this.M = [];
    shouldLoadAnnotations(this) && this.load();
    var b = _yt_player.Ed('STYLE');
    (window.document.getElementsByTagName('HEAD')[0] || window.document.body)
    .appendChild(b);
    _yt_player.Ze(this, function() {
        _yt_player.Kd(b);
    });
    if (player = b.sheet)
        player.insertRule(
            '.iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}',
            0), player.insertRule(
            '.iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}',
            0), player.insertRule(
            '.iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}',
            0), player.insertRule(
            '.iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}',
            0), player.insertRule(
            '.iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}',
            0), player.insertRule(
            '.iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}',
            0), player.insertRule(
            '.iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}',
            0), player.insertRule(
            '.iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}',
            0), player.insertRule(
            '.annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}',
            0), player.insertRule(
            '.annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}',
            0);
}

function isAnnotationEditor(playerStyle) {
    switch (playerStyle) {
        case 'annotation-editor':
        case 'live-dashboard':
            return !0;
    }
    return !1;
}

function shouldLoadAnnotations(module) {
    var b = _yt_player.Y(module.g);
    module = module.g.getVideoData();
    return 1 == (b.Xg || module.Xg) && !module.Rk || null !== b.C.get(module.videoId);
}

function sendAnnotationDataRequest(module, url, options) {
    module.J = !0;
    module.D = _yt_player.nE(url, options);
}

function parseAnnotationXml(module, xmlElement) {
    for (var c = {}, d = 0; d < xmlElement.attributes.length; d++) {
        var e = xmlElement.attributes[d];
        c[e.name] = e.nodeValue;
    }
    for (d = 0; d < xmlElement.childNodes.length; d++)
        if (e = xmlElement.childNodes[d], e.tagName) {
            if (c[e.tagName])
                var f = c[e.tagName];
            else if ('data' == e.tagName) {
                0 < e.childNodes.length && (f = e.childNodes[0].nodeValue, c[e
                    .tagName] = 'string' == typeof f ? f.trim() : f);
                continue;
            } else
                f = [], c[e.tagName] = f;
            e && 'TEXT' == e.tagName ? 1 == e.childNodes.length && 3 == e
                .childNodes[0].nodeType ? f.push(e.childNodes[0].nodeValue) : f
                .push('') : e && f.push(parseAnnotationXml(module, e));
        }
    return c;
}

function hasAnnotationDataChanged(module, dataVersion, videoId) {
    return !(module.loaded && module.I == dataVersion && module.g.getVideoData().videoId == videoId);
}

function createAnnotationView2(module, annotation) {
    var c = createAnnotationView3(module, annotation);
    if (!c && 'marker' != annotation.type)
        return null;
    addTriggerListener(annotation, function(module) {
        module = (0, _yt_player.z)(this.wU, this, annotation.id, module);
        this.subscribe('ivTrigger:' + annotation.id, module);
    }, module);
    var d = new u3(module.ea, annotation, c);
    _yt_player.N(d, c);
    return d;
}

function createCustomAnnotation(module, annotation) {
    var c = _yt_player.K('DIV', [
        'annotation',
        'annotation-type-custom'
    ]);
    _yt_player.O(c, !1);
    var d = null;
    switch (annotation.type) {
        case 'branding':
            if (_yt_player.Y(module.g).Bd)
                break;
            module.A.element.appendChild(c);
            d = new createBrandingAnnotation(c, getModuleContext(module), annotation);
            break;
        case 'promotion':
            _yt_player.mV(module.g, c, 4), d = new createPromoAnnotation(c, getModuleContext(module), annotation);
    }
    d && d.gq();
    return d;
}

function loadLegacyAnnotations(module) {
    var b = module.g.getVideoData();
    if (b.Of) {
        var c = _yt_player.Y(module.g),
            d = c.C.get(b.videoId);
        if (d) {
            var e = {
                format: 'XML',
                ad: {},
                method: 'POST',
                withCredentials: !0
            };
            'gaming' == c.playerStyle && (e.ad.gaming = '1');
            e.wd = (0, _yt_player.z)(function(module, b, c) {
                hasAnnotationDataChanged(this, module, b) || (module = _yt_player.WD(c) && c
                    .responseXML ? c.responseXML : null) && parseAnnotationXmlAndCreateViews(this,
                    module);
            }, module, module.I, b.videoId);
            _yt_player.nG() && (e.wd = createWrappedCallback(module, e.wd));
            e.Ob = {
                ic_only: '1'
            };
            addLegacyAnnotationParams(e, d);
            module.J = !0;
            _yt_player.nE(b.Of, e);
        }
    }
}

function addLegacyAnnotationParams(options, data) {
    options.method = 'POST';
    options.Ob = options.Ob || {};
    data.tr && (options.Ob.ic_coll = data.tr);
    data.Zh && (options.Ob.ic_xml = data.Zh);
    data.Lk && (options.Ob.ic_track = data.Lk);
}

function createCardDrawer2(module) {
    var b = new _yt_player.W({
        G: 'div'
    });
    _yt_player.O(b.element, !1);
    var c = new createCardDrawer1(module.g, b.element, getModuleContext(module));
    _yt_player.N(c, b);
    b.ua(module.A.element);
    c.gq();
    return c;
}

function getModuleContext(module) {
    if (!module.H) {
        var b = new _yt_player.CF(module);
        _yt_player.N(module, b);
        var c = new _yt_player.Lm(module);
        _yt_player.N(module, c);
        module.H = new createCardContext(b, c, _yt_player.Y(module.g), module.g.getVideoData(), module.Ya, module.g, module
            .ea);
    }
    return module.H;
}

function parseAnnotationXmlAndCreateViews(module, xmlData) {
    var c = !1;
    logAnnotationImpression(xmlData);
    for (var d = xmlData.getElementsByTagName('annotation'), e = 0; e < d
        .length; e++) {
        var f = parseAnnotationXml(module, d[e]),
            k = null;
        try {
            k = createAnnotationFromData(f);
        } catch (l) {}
        if (k) {
            module: {
                switch (k.type) {
                    case 'branding':
                    case 'promotion':
                        f = !0;
                        break module;
                }
                f = !1;
            }
            if (f) {
                if (f = createCustomAnnotation(module, k))
                    _yt_player.N(module, f), module.K[k.id] = f;
            } else if ('card' == k.type || 'drawer' == k.type)
                module.l || (module.l = createCardDrawer2(module), _yt_player.N(module, module.l)),
            'card' == k.type ? addCardToDrawer(module.l, k) : updateCardDrawer(module.l, k),
            c = !0;
            else if (f = createAnnotationView2(module, k))
                _yt_player.N(module, f),
            module.o[k.id] = f;
        }
    }
    c && (updateCardState(module.g), module.Tu());
    _yt_player.Lb(module.o, function(module) {
        if (module.view) {
            var xmlData = module.annotation;
            (module = module.view) && xmlData.segment && xmlData.segment.l && (xmlData = this.o[xmlData
                .segment.l]) && (module.T = xmlData.annotation);
        }
    }, module);
}

function logAnnotationImpression(xmlData) {
    if ((xmlData = xmlData.getElementsByTagName('annotations')) && !(1 > xmlData.length) && (xmlData =
            xmlData[0].getAttribute('itct'))) {
        var b = _yt_player.MG();
        if (b) {
            var c = getCurrentVisualElementObject();
            c && logChildVisualElementAttachment(b, c, [createVisualElementObject(xmlData)]);
        }
    }
}

function updateAnnotationVisibility(module, annotationId, trigger, isVisible) {
    isVisible ? showAnnotation(module, annotationId, trigger) : hideAnnotation(module, annotationId, trigger);
}

function hideAnnotation(module, annotationId, trigger) {
    if (annotationId = module.o[annotationId])
        clearAnnotationHideTimer(annotationId), trigger && trigger.l ? (module = (0, _yt_player.z)(module.Iz, module, annotationId), annotationId.g =
            new _yt_player.Yt(module, 2000), annotationId.g.start()) : module.Iz(annotationId);
}

function showAnnotation(module, annotationId, trigger) {
    if (annotationId = module.o[annotationId])
        clearAnnotationHideTimer(annotationId), trigger && trigger.A ? (module = (0, _yt_player.z)(module.CE, module, annotationId), annotationId.g =
            new _yt_player.Yt(module, 2000), annotationId.g.start()) : module.CE(annotationId);
}

function shouldOpenUrlInCurrentPage(module, linkObject) {
    if ('new' == linkObject.target)
        return !1;
    var c = getLinkValue(linkObject);
    if (!c)
        return !1;
    c = c.replace(/https?:\/\//g, '');
    if (!isInternalUrl(c))
        return !1;
    c = _yt_player.dE(c);
    if (c.list || c.p)
        return !1;
    c = getVideoIdFromUrl(linkObject);
    if (!c)
        return !1;
    var d = module.g.getVideoData();
    return d.videoId == c ? !0 : _yt_player.Y(module.g).g && d.yn ? !0 : !1;
}

function createAnnotationView3(module, annotation) {
    if (isSupportedAnnotationType(annotation)) {
        var c = annotation.B || findAction(annotation, function(module) {
            return 'click' == module || 'rollOut' == module || 'rollOut' == module;
        });
        return new createAnnotationView1(annotation, (0, _yt_player.z)(module.T.appendChild, module.T), module.g, module.ea, c);
    }
    return null;
}

function isSupportedAnnotationType(annotation) {
    if ('highlight' == annotation.type || 'widget' == annotation.type)
        return !0;
    if ('text' == annotation.type)
        for (var b in b3)
            if (annotation.style == b3[b])
                return !0;
    return !1;
}

function triggerAnnotationEvent(module, eventName, value, id) {
    module.R(generateTriggerConditionEventId(eventName, id), value, id);
}

function createWrappedCallback(module, callback) {
    return (0, _yt_player.z)(function() {
        if (!this.ka()) {
            var module = Array.prototype.slice.call(arguments, 0);
            module.unshift(callback);
            callback = _yt_player.Ga.apply(window, module);
            this.M.push(_yt_player.lG(callback));
        }
    }, module);
}

function findTargetElementForEvent(eventName, className, targetElement) {
    switch (eventName) {
        case 'mouseover':
        case 'mouseout':
            var d = 3;
            break;
        case 'mouseenter':
        case 'mouseleave':
            d = 9;
    }
    return _yt_player.Yd(targetElement, function(eventName) {
        return _yt_player.kq(eventName, className);
    }, !0, d);
}

function handleEventBehavior(event) {
    var b = 'mouseover' == event.type && 'mouseenter' in g4 || 'mouseout' == event
        .type && 'mouseleave' in g4,
        c = event.type in g4 || b;
    if ('HTML' != event.target.tagName && c) {
        if (b) {
            b = 'mouseover' == event.type ? 'mouseenter' : 'mouseleave';
            c = g4[b];
            for (var d in c.l) {
                var e = findTargetElementForEvent(b, d, event.target);
                e && !_yt_player.Yd(event.relatedTarget, function(event) {
                    return event == e;
                }, !0) && c.R(d, e, b, event);
            }
        }
        if (b = g4[event.type])
            for (d in b.l)
                (e = findTargetElementForEvent(event.type, d, event.target)) && b.R(d, e, event.type, event);
    }
}

function createUiBase(componentName) {
    this.B = componentName;
    this.D = {};
    this.H = [];
    this.F = [];
}

function getUiClassName(uiBase, suffix) {
    return 'yt-uix' + (uiBase.B ? '-' + uiBase.B : '') + (suffix ? '-' + suffix : '');
}

function addEventListener(uiBase, eventName, listener) {
    uiBase.H.push(_yt_player.UF(eventName, listener, uiBase));
}

function subscribeToEvent(uiBase, eventName, listener) {
    uiBase.F.push(_yt_player.FN(eventName, listener, uiBase));
}

function createButtonUi() {
    createUiBase.call(this, 'button');
    this.g = null;
    this.o = [];
    this.l = {};
}

function handleButtonMenuKeyEvents(buttonUi, buttonElement, menuElement, event, customHandler) {
    var f = isElementVisible(menuElement),
        k = 9 == event.keyCode;
    k || 32 == event.keyCode || 13 == event.keyCode ? (event = findHighlightedMenuItem(buttonUi, menuElement)) ? (buttonElement = _yt_player
            .Od(event), 'a' == buttonElement.tagName.toLowerCase() ? _yt_player.tV(buttonElement.href) :
            simulateClickEvent(buttonElement)) : k && closeButtonMenu(buttonUi, buttonElement) : f ? 27 == event.keyCode ? (findHighlightedMenuItem(buttonUi, menuElement), closeButtonMenu(buttonUi,
        buttonElement)) : customHandler(buttonElement, menuElement, event) : (buttonUi = _yt_player.kq(buttonElement, getUiClassName(buttonUi, 'reverse')) ? 38 : 40, event
            .keyCode == buttonUi && (simulateClickEvent(buttonElement), event.preventDefault()));
}

function findHighlightedMenuItem(buttonUi, menuElement) {
    var c = getUiClassName(buttonUi, 'menu-item-highlight'),
        d = _yt_player.J(c, menuElement);
    d && _yt_player.mq(d, c);
    return d;
}

function highlightMenuItem(buttonUi, buttonElement, menuItem) {
    _yt_player.S(menuItem, getUiClassName(buttonUi, 'menu-item-highlight'));
    var d = menuItem.getAttribute('id');
    d || (d = getUiClassName(buttonUi, 'item-id-' + _yt_player.Fa(menuItem)), menuItem.setAttribute('id', d));
    buttonElement.setAttribute('aria-activedescendant', d);
}

function calculateNextMenuItemIndex(currentMenuItem, menuItems, itemsPerRow, event) {
    var e = menuItems.length;
    currentMenuItem = (0, _yt_player.Pa)(menuItems, currentMenuItem);
    if (-1 == currentMenuItem)
        if (38 == event.keyCode)
            currentMenuItem = e - itemsPerRow;
        else {
            if (37 == event.keyCode || 38 == event.keyCode || 40 == event.keyCode)
                currentMenuItem = 0;
        }
    else
        39 == event.keyCode ? (currentMenuItem % itemsPerRow == itemsPerRow - 1 && (currentMenuItem -= itemsPerRow), currentMenuItem += 1) : 37 == event
        .keyCode ? (0 == currentMenuItem % itemsPerRow && (currentMenuItem += itemsPerRow), --currentMenuItem) : 38 == event.keyCode ? (currentMenuItem < itemsPerRow && (
            currentMenuItem += e), currentMenuItem -= itemsPerRow) : 40 == event.keyCode && (currentMenuItem >= e - itemsPerRow && (currentMenuItem -= e), currentMenuItem +=
            itemsPerRow);
    return currentMenuItem;
}

function createButtonMenuMask(buttonUi, buttonElement) {
    var c = buttonElement.iframeMask;
    c || (c = _yt_player.Ed('IFRAME'), c.src = 'javascript:""', c.className = getUiClassName(
        buttonUi, 'menu-mask'), hideElements(c), buttonElement.iframeMask = c);
    return c;
}

function positionButtonMenu(buttonUi, buttonElement, menuElement, isFixed) {
    var e = _yt_player.$d(buttonElement, getUiClassName(buttonUi, 'group')),
        f = !!buttonUi.Ba(buttonElement, 'button-menu-ignore-group');
    e = e && !f ? e : buttonElement;
    f = 9;
    var k = 8,
        l = _yt_player.Lh(buttonElement);
    if (_yt_player.kq(buttonElement, getUiClassName(buttonUi, 'reverse'))) {
        f = 8;
        k = 9;
        l = l.top + 'px';
        try {
            menuElement.style.maxHeight = l;
        } catch (p) {}
    }
    _yt_player.kq(buttonElement, 'flip') && (_yt_player.kq(buttonElement, getUiClassName(buttonUi, 'reverse')) ? (f = 12,
        k = 13) : (f = 13, k = 12));
    var m;
    buttonUi.Ba(buttonElement, 'button-has-sibling-menu') ? m = _yt_player.Bh(e) : buttonUi.Ba(buttonElement,
        'button-menu-root-container') && (m = getButtonMenuRootContainer(buttonUi, buttonElement));
    _yt_player.yd && !_yt_player.rc('8') && (m = null);
    if (m) {
        var n = _yt_player.Lh(m);
        n = new _yt_player.Zg(-n.top, n.left, n.top, -n.left);
    }
    m = new _yt_player.hd(0, 1);
    _yt_player.kq(buttonElement, getUiClassName(buttonUi, 'center-menu')) && (m.x -= Math.round((_yt_player.Kh(
        menuElement).width - _yt_player.Kh(buttonElement).width) / 2));
    isFixed && (m.y += _yt_player.zd(window.document).y);
    if (buttonUi = createButtonMenuMask(buttonUi, buttonElement))
        buttonElement = _yt_player.Kh(menuElement), buttonUi.style.width = buttonElement.width + 'px', buttonUi.style.height = buttonElement
        .height + 'px', calculateElementPosition(e, f, buttonUi, k, m, n, 197), isFixed && _yt_player.ph(buttonUi,
            'position', 'fixed');
    calculateElementPosition(e, f, menuElement, k, m, n, 197);
}

function getButtonMenuRootContainer(buttonUi, buttonElement) {
    if (buttonUi.Ba(buttonElement, 'button-menu-root-container')) {
        var c = buttonUi.Ba(buttonElement, 'button-menu-root-container');
        return _yt_player.$d(buttonElement, c);
    }
    return window.document.body;
}

function closeButtonMenu(buttonUi, buttonElement) {
    if (buttonElement) {
        var c = getButtonMenu(buttonUi, buttonElement);
        if (c) {
            buttonUi.g = null;
            buttonElement.setAttribute('aria-pressed', 'false');
            buttonElement.setAttribute('aria-expanded', 'false');
            buttonElement.removeAttribute('aria-activedescendant');
            hideElements(c);
            buttonUi.qj(buttonElement, 'button-menu-action', !1);
            var d = createButtonMenuMask(buttonUi, buttonElement),
                e = generateUniqueId(c).toString();
            delete buttonUi.l[e];
            _yt_player.XD(function() {
                d && d.parentNode && (hideElements(d), d.parentNode.removeChild(
                    d));
                c.originalParentNode && (c.parentNode.removeChild(c), c
                    .originalParentNode.appendChild(c), c
                    .originalParentNode = null, c.activeButtonNode =
                    null);
            }, 1);
        }
        e = _yt_player.$d(buttonElement, getUiClassName(buttonUi, 'group'));
        var f = [getUiClassName(buttonUi, 'active')];
        e && f.push(getUiClassName(buttonUi, 'group-active'));
        _yt_player.nq(buttonElement, f);
        _yt_player.XF('yt-uix-button-menu-hide', buttonElement);
        _yt_player.sF(buttonUi.o);
        buttonUi.o.length = 0;
    }
}

function markMenuItemSelected(buttonUi, menuElement, selectedItem) {
    var d = getUiClassName(buttonUi, 'menu-item-selected');
    buttonUi = _yt_player.rd(d, menuElement);
    (0, _yt_player.B)(buttonUi, function(buttonUi) {
        _yt_player.mq(buttonUi, d);
    });
    _yt_player.S(selectedItem.parentNode, d);
}

function getButtonMenu(buttonUi, buttonElement) {
    if (!buttonElement.widgetMenu) {
        var c = buttonUi.Ba(buttonElement, 'button-menu-id');
        c = c && _yt_player.pd(c);
        var d = getUiClassName(buttonUi, 'menu');
        c ? _yt_player.lq(c, [
            d,
            getUiClassName(buttonUi, 'menu-external')
        ]) : c = _yt_player.J(d, buttonElement);
        buttonElement.widgetMenu = c;
    }
    return buttonElement.widgetMenu;
}

function closeActiveButtonMenu(buttonUi) {
    buttonUi.g && closeButtonMenu(buttonUi, buttonUi.g);
}

function createCardUi(type) {
    createUiBase.call(this, type);
    this.o = null;
}

function createCardElement1(cardUi, targetElement, contentElement) {
    var d = contentElement || targetElement,
        e = getUiClassName(cardUi, 'card');
    contentElement = cardUi.Cc(d);
    var f = _yt_player.pd(getUiClassName(cardUi, 'card') + generateUniqueId(d));
    if (f)
        return cardUi = _yt_player.J(getUiClassName(cardUi, 'card-body'), f), _yt_player.Qd(cardUi, contentElement) || (
            _yt_player.Kd(contentElement), cardUi.appendChild(contentElement)), f;
    f = window.document.createElement('div');
    f.id = getUiClassName(cardUi, 'card') + generateUniqueId(d);
    f.className = e;
    (d = cardUi.Ba(d, 'card-class')) && _yt_player.lq(f, d.split(/\s+/));
    d = window.document.createElement('div');
    d.className = getUiClassName(cardUi, 'card-border');
    targetElement = cardUi.Ba(targetElement, 'orientation') || 'horizontal';
    e = window.document.createElement('div');
    e.className = 'yt-uix-card-border-arrow yt-uix-card-border-arrow-' + targetElement;
    var k = window.document.createElement('div');
    k.className = getUiClassName(cardUi, 'card-body');
    cardUi = window.document.createElement('div');
    cardUi.className = 'yt-uix-card-body-arrow yt-uix-card-body-arrow-' + targetElement;
    _yt_player.Kd(contentElement);
    k.appendChild(contentElement);
    d.appendChild(cardUi);
    d.appendChild(k);
    f.appendChild(e);
    f.appendChild(d);
    window.document.body.appendChild(f);
    return f;
}

function positionCard(cardUi, targetElement, cardElement) {
    var d = cardUi.Ba(targetElement, 'orientation') || 'horizontal';
    var e = _yt_player.J(getUiClassName(cardUi, 'anchor'), targetElement) || targetElement;
    var f = cardUi.Ba(targetElement, 'position'),
        k = !!cardUi.Ba(targetElement, 'force-position'),
        l = cardUi.Ba(targetElement, 'position-fixed');
    d = 'horizontal' == d;
    var m = 'bottomright' == f || 'bottomleft' == f,
        n = 'topright' == f || 'bottomright' == f;
    if (n && m) {
        var p = 13;
        var r = 8;
    } else
        n && !m ? (p = 12, r = 9) : !n && m ? (p = 9, r = 12) : (p = 8, r = 13);
    var v = isElementRtl(window.document.body);
    f = isElementRtl(targetElement);
    v != f && (p ^= 4);
    if (d) {
        f = targetElement.offsetHeight / 2 - 12;
        var D = new _yt_player.hd(-12, targetElement.offsetHeight + 6);
    } else
        f = targetElement.offsetWidth / 2 - 6, D = new _yt_player.hd(targetElement.offsetWidth + 6, -
        12);
    var H = _yt_player.Kh(cardElement);
    f = Math.min(f, (d ? H.height : H.width) - 24 - 6);
    6 > f && (f = 6, d ? D.y += 12 - targetElement.offsetHeight / 2 : D.x += 12 - targetElement
        .offsetWidth / 2);
    H = null;
    k || (H = 10);
    targetElement = getUiClassName(cardUi, 'card-flip');
    cardUi = getUiClassName(cardUi, 'card-reverse');
    _yt_player.U(cardElement, targetElement, n);
    _yt_player.U(cardElement, cardUi, m);
    H = calculateElementPosition(e, p, cardElement, r, D, null, H);
    !k && H && (H & 48 && (n = !n, p ^= 4, r ^= 4), H & 192 && (m = !m, p ^= 1,
        r ^= 1), _yt_player.U(cardElement, targetElement, n), _yt_player.U(cardElement, cardUi, m), calculateElementPosition(e, p,
        cardElement, r, D));
    l && (e = (0, window.parseInt)(cardElement.style.top, 10), k = _yt_player.zd(window
            .document).y, _yt_player.ph(cardElement, 'position', 'fixed'), _yt_player
        .ph(cardElement, 'top', e - k + 'px'));
    v && (cardElement.style.right = '', e = _yt_player.Lh(cardElement), e.left = e.left || (0,
            window.parseInt)(cardElement.style.left, 10), k = _yt_player.wd(window), cardElement
        .style.left = '', cardElement.style.right = k.width - e.left - e.width + 'px');
    e = _yt_player.J('yt-uix-card-body-arrow', cardElement);
    k = _yt_player.J('yt-uix-card-border-arrow', cardElement);
    d = d ? m ? 'top' : 'bottom' : !v && n || v && !n ? 'left' : 'right';
    e.setAttribute('style', '');
    k.setAttribute('style', '');
    e.style[d] = f + 'px';
    k.style[d] = f + 'px';
    m = _yt_player.J('yt-uix-card-arrow', cardElement);
    n = _yt_player.J('yt-uix-card-arrow-background', cardElement);
    m && n && (cardElement = 'right' == d ? _yt_player.Kh(cardElement).width - f - 13 : f + 11, f =
        cardElement / Math.sqrt(2), m.style.left = cardElement + 'px', m.style.marginLeft =
        '1px', n.style.marginLeft = -f + 'px', n.style.marginTop = f + 'px');
}

function hideActiveCard(cardUi) {
    cardUi.o && cardUi.hide(cardUi.o);
}

function createCardMask(cardElement) {
    var b = cardElement.cardMask;
    b || (b = _yt_player.Ed('IFRAME'), b.src = 'javascript:""', _yt_player.lq(b,
        ['yt-uix-card-iframe-mask']), cardElement.cardMask = b);
    b.style.position = cardElement.style.position;
    b.style.top = cardElement.style.top;
    b.style.left = cardElement.offsetLeft + 'px';
    b.style.height = cardElement.clientHeight + 'px';
    b.style.width = cardElement.clientWidth + 'px';
    window.document.body.appendChild(b);
}

function createKeyboardNavigationUi() {
    createUiBase.call(this, 'kbd-nav');
}

function setMoveOutTarget(keyboardNavigationUi, sourceElement, targetElement) {
    if (sourceElement && targetElement)
        if (_yt_player.S(targetElement, getUiClassName(keyboardNavigationUi)), keyboardNavigationUi = sourceElement.id, keyboardNavigationUi || (keyboardNavigationUi = 'kbd-nav-' + Math.floor(
                1000000 * Math.random() + 1), sourceElement.id = keyboardNavigationUi), sourceElement = keyboardNavigationUi, _yt_player.ek &&
            targetElement.dataset)
            targetElement.dataset.kbdNavMoveOut = sourceElement;
        else {
            if (/-[a-z]/.test('kbdNavMoveOut'))
                throw Error('');
            targetElement.setAttribute('data-' + _yt_player.Hb('kbdNavMoveOut'), sourceElement);
        }
}

function highlightListItem(keyboardNavigationUi, listElement) {
    if (listElement) {
        var c = _yt_player.Zd(listElement, 'LI');
        c && (_yt_player.S(c, getUiClassName(keyboardNavigationUi, 'highlight')), v4 = _yt_player.rF(listElement, 'blur',
            (0, _yt_player.z)(function(keyboardNavigationUi) {
                _yt_player.mq(keyboardNavigationUi, getUiClassName(this, 'highlight'));
                _yt_player.sF(v4);
            }, keyboardNavigationUi, c)));
    }
}

function getFocusableListItems(listElement) {
    if ('UL' != listElement.tagName.toUpperCase())
        return [];
    listElement = (0, _yt_player.Ld)(_yt_player.Md(listElement), function(listElement) {
        return 'LI' == listElement.tagName.toUpperCase();
    });
    return (0, _yt_player.Ld)((0, _yt_player.G)(listElement, function(listElement) {
        return isElementVisible(listElement) ? findFirstChildElement(listElement, function(listElement) {
            return _yt_player.Da(listElement) && 1 == listElement.nodeType ?
                _yt_player.Xd(listElement) : !1;
        }) : !1;
    }), function(listElement) {
        return !!listElement;
    });
}

function createMenuUi() {
    createUiBase.call(this, 'menu');
    this.l = this.g = null;
    this.o = {};
    this.C = {};
    this.A = null;
}

function getMenuForElement(element) {
    var b = createMenuUi.getInstance();
    if (_yt_player.kq(element, getUiClassName(b)))
        return element;
    var c = b.pe(element);
    return c ? c : _yt_player.$d(element, getUiClassName(b, 'content')) == b.g ? b.l : null;
}

function positionMenu(menuUi, triggerElement, menuElement) {
    var d = getMenuMask(menuUi, triggerElement);
    d && _yt_player.Jh(d, _yt_player.Kh(menuElement));
    if (menuElement == menuUi.g) {
        var e = 9,
            f = 8;
        _yt_player.kq(triggerElement, getUiClassName(menuUi, 'reversed')) && (e ^= 1, f ^= 1);
        _yt_player.kq(triggerElement, getUiClassName(menuUi, 'flipped')) && (e ^= 4, f ^= 4);
        menuUi = new _yt_player.hd(0, 1);
        d && calculateElementPosition(triggerElement, e, d, f, menuUi, null, 197);
        calculateElementPosition(triggerElement, e, menuElement, f, menuUi, null, 197);
    }
}

function toggleMenu(menuUi, triggerElement, hover) {
    isMenuOpen(menuUi, triggerElement) && !hover ? closeMenusInGroup(menuUi, triggerElement) : (closeOtherMenus(menuUi, triggerElement), !menuUi.g || isElementDescendant(triggerElement, menuUi.g) ? menuUi.fG(triggerElement) : subscribeToRootMenuRemoval(menuUi
        .A, (0, _yt_player.z)(menuUi.fG, menuUi, triggerElement)));
}

function closeOtherMenus(menuUi, triggerElement) {
    if (triggerElement) {
        var c = _yt_player.$d(triggerElement, getUiClassName(menuUi, 'content'));
        c && (c = _yt_player.rd(getUiClassName(menuUi), c), (0, _yt_player.B)(c, function(menuUi) {
            !isElementDescendant(menuUi, triggerElement) && isMenuOpen(this, menuUi) && closeMenu(this, menuUi);
        }, menuUi));
    }
}

function closeMenusInGroup(menuUi, triggerElement) {
    if (triggerElement) {
        var c = [];
        c.push(triggerElement);
        var d = getMenuContent(menuUi, triggerElement);
        d && (d = _yt_player.rd(getUiClassName(menuUi), d), d = _yt_player.Ya(d), c = c.concat(d),
            (0, _yt_player.B)(c, function(menuUi) {
                isMenuOpen(this, menuUi) && closeMenu(this, menuUi);
            }, menuUi));
    }
}

function closeMenu(menuUi, triggerElement) {
    if (triggerElement) {
        var c = getMenuContent(menuUi, triggerElement);
        _yt_player.nq(getMenuTrigger(menuUi, triggerElement), [
            getUiClassName(menuUi, 'trigger-selected'),
            'yt-uix-button-toggled'
        ]);
        _yt_player.S(c, getUiClassName(menuUi, 'content-hidden'));
        var d = getMenuContent(menuUi, triggerElement);
        d && _yt_player.ud(d, {
            'aria-expanded': 'false'
        });
        (d = getMenuMask(menuUi, triggerElement)) && d.parentNode && _yt_player.Kd(d);
        c && c == menuUi.g && (menuUi.l.appendChild(c), menuUi.g = null, menuUi.l = null, menuUi.A && menuUi.A
            .R('ROOT_MENU_REMOVED'));
        _yt_player.XF('yt-uix-menu-hide', triggerElement);
        c = _yt_player.Fa(triggerElement).toString();
        _yt_player.sF(menuUi.o[c]);
        delete menuUi.o[c];
    }
}

function setMenuAccessibilityAttributes(menuUi, triggerElement) {
    var c = getMenuContent(menuUi, triggerElement);
    if (c) {
        (0, _yt_player.B)(c.children, function(menuUi) {
            'LI' == menuUi.tagName && _yt_player.ud(menuUi, {
                role: 'menuitem'
            });
        });
        _yt_player.ud(c, {
            'aria-expanded': 'true'
        });
        var d = c.id;
        d || (d = 'aria-menu-id-' + _yt_player.Fa(c), c.id = d);
        (c = getMenuTrigger(menuUi, triggerElement)) && _yt_player.ud(c, {
            'aria-controls': d
        });
    }
}

function updateCheckedMenuItem(menuUi, triggerElement, menuElement) {
    var d = getMenuContent(menuUi, triggerElement);
    d && _yt_player.kq(triggerElement, getUiClassName(menuUi, 'checked')) && (menuUi = _yt_player.Zd(menuElement, 'LI')) && (
        menuUi = _yt_player.J('yt-ui-menu-item-checked-hid', menuUi)) && (d =
        _yt_player.rd('yt-ui-menu-item-checked', d), (0, _yt_player.B)(d,
            function(menuUi) {
                _yt_player.oq(menuUi, 'yt-ui-menu-item-checked',
                    'yt-ui-menu-item-checked-hid');
            }), _yt_player.oq(menuUi, 'yt-ui-menu-item-checked-hid',
            'yt-ui-menu-item-checked'));
}

function isMenuOpen(menuUi, triggerElement) {
    var c = getMenuContent(menuUi, triggerElement);
    return c ? !_yt_player.kq(c, getUiClassName(menuUi, 'content-hidden')) : !1;
}

function initializeMenus(contextElement) {
    contextElement = _yt_player.qd(window.document, 'UL', null, contextElement);
    (0, _yt_player.B)(contextElement, function(contextElement) {
        contextElement.tabIndex = 0;
        var b = createKeyboardNavigationUi.getInstance();
        _yt_player.lq(contextElement, [
            getUiClassName(b),
            getUiClassName(b, 'list')
        ]);
    });
}

function getMenuContent(menuUi, triggerElement) {
    var c = _yt_player.bF(triggerElement, 'menu-content-id');
    return c && (c = _yt_player.pd(c)) ? (_yt_player.lq(c, [
        getUiClassName(menuUi, 'content'),
        getUiClassName(menuUi, 'content-external')
    ]), c) : triggerElement == menuUi.l ? menuUi.g : _yt_player.J(getUiClassName(menuUi, 'content'), triggerElement);
}

function getMenuMask(menuUi, triggerElement) {
    var c = _yt_player.Fa(triggerElement).toString(),
        d = menuUi.C[c];
    if (!d) {
        d = _yt_player.Ed('IFRAME');
        d.src = 'javascript:""';
        var e = [getUiClassName(menuUi, 'mask')];
        (0, _yt_player.B)(_yt_player.jq(triggerElement), function(menuUi) {
            e.push(menuUi + '-mask');
        });
        _yt_player.lq(d, e);
        menuUi.C[c] = d;
    }
    return d || null;
}

function getMenuTrigger(menuUi, triggerElement) {
    return _yt_player.J(getUiClassName(menuUi, 'trigger'), triggerElement);
}

function isElementInActiveMenu(menuUi, element) {
    return isElementDescendant(element, menuUi.g) || isElementDescendant(element, menuUi.l);
}

function createClickCardUi() {
    createCardUi.call(this, 'clickcard');
    this.g = {};
    this.l = {};
}

function createHoverCardUi() {
    createCardUi.call(this, 'hovercard');
}

function createDialog(element, allowShortcuts, dismissOnOutsideClick, showDismissButton, isLightDismiss, isModal) {
    this.g = element;
    this.D = null;
    this.o = _yt_player.J('yt-dialog-fg', this.g) || this.g;
    if (element = _yt_player.J('yt-dialog-title', this.o)) {
        var k = 'yt-dialog-title-' + _yt_player.Fa(this.o);
        element.setAttribute('id', k);
        this.o.setAttribute('aria-labelledby', k);
    }
    this.o.setAttribute('tabindex', '-1');
    this.I = _yt_player.J('yt-dialog-focus-trap', this.g);
    this.J = !1;
    this.A = new _yt_player.XC();
    this.F = [];
    this.F.push(_yt_player.AF(this.g, 'click', (0, _yt_player.z)(this.YQ, this),
        'yt-dialog-dismiss'));
    this.F.push(_yt_player.rF(this.I, 'focus', (0, _yt_player.z)(this.CJ, this),
        !0));
    showDialogContent(this);
    this.K = allowShortcuts;
    this.T = dismissOnOutsideClick;
    this.M = showDismissButton;
    this.H = isLightDismiss;
    this.X = isModal;
    this.C = this.B = null;
}

function subscribeToDialogEvent(dialog, callback) {
    dialog.ka() || dialog.A.subscribe('post-all', callback);
}

function showDialogContent(dialog) {
    dialog = _yt_player.J('yt-dialog-fg-content', dialog.g);
    var b = [];
    _yt_player.Lb(Mya, function(dialog) {
        b.push('yt-dialog-show-' + dialog);
    });
    _yt_player.nq(dialog, b);
    _yt_player.S(dialog, 'yt-dialog-show-content');
}

function getVisibleDialogs() {
    var a = _yt_player.rd('yt-dialog');
    return (0, _yt_player.Bj)(a, function(a) {
        return isElementVisible(a);
    });
}

function initializeIframes(dialog) {
    var b = _yt_player.qd(window.document, 'iframe', null, dialog.g);
    (0, _yt_player.B)(b, function(dialog) {
        var b = _yt_player.bF(dialog, 'onload');
        b && (b = _yt_player.x(b)) && _yt_player.rF(dialog, 'load', b);
        if (b = _yt_player.bF(dialog, 'src'))
            dialog.src = b;
    }, dialog);
    return _yt_player.Ya(b);
}

function hideOtherIframes(iframes) {
    (0, _yt_player.B)(window.document.getElementsByTagName('iframe'), function(
        b) {
        -1 == (0, _yt_player.Pa)(iframes, b) && _yt_player.S(b, 'iframe-hid');
    });
}

function showHiddenIframes() {
    var a = _yt_player.rd('iframe-hid');
    (0, _yt_player.B)(a, function(a) {
        _yt_player.mq(a, 'iframe-hid');
    });
}

function focusDialog(dialog) {
    _yt_player.XD((0, _yt_player.z)(function() {
        this.o && this.o.focus();
    }, dialog), 0);
}

function createOverlayUi() {
    createUiBase.call(this, 'overlay');
    this.A = this.l = this.o = this.g = null;
}

function initializeOverlay(overlayUi) {
    overlayUi.A || (overlayUi.A = _yt_player.UF('yt-uix-overlay-hide', handleOverlayHide));
    overlayUi.g && subscribeToDialogEvent(overlayUi.g, function() {
        var overlayUi = createOverlayUi.getInstance();
        overlayUi.o = null;
        overlayUi.g.dispose();
        overlayUi.g = null;
    });
}

function closeOverlay(overlayUi) {
    if (overlayUi.g) {
        var b = overlayUi.o;
        overlayUi.g.dismiss('overlayhide');
        b && overlayUi.qj(b, 'overlay-hidden');
        overlayUi.o = null;
        overlayUi.l && (_yt_player.sF(overlayUi.l), overlayUi.l = null);
        overlayUi.g = null;
    }
}

function getDialogElement(parent, target) {
    var c;
    if (parent)
        if (c = _yt_player.J('yt-dialog', parent)) {
            var d = _yt_player.pd('body-container');
            d && (d.appendChild(c), parent.overlayContentNode = c, c
                .overlayParentNode = parent);
        } else
            c = parent.overlayContentNode;
    else
        target && (c = _yt_player.$d(target, 'yt-dialog'));
    return c;
}

function getActiveDialogElement() {
    var a = createOverlayUi.getInstance();
    if (a.o)
        a = _yt_player.J('yt-dialog-fg-content', a.o.overlayContentNode);
    else
        a: {
            if (a = _yt_player.rd('yt-dialog-fg-content'))
                for (var b = 0; b < a.length; b++) {
                    var c = _yt_player.$d(a[b], 'yt-dialog');
                    if (isElementVisible(c)) {
                        a = a[b];
                        break a;
                    }
                }
            a = null;
        }
    return a;
}

function handleOverlayHide() {
    closeOverlay(createOverlayUi.getInstance());
}

function createTooltipUi() {
    createUiBase.call(this, 'tooltip');
    this.g = 0;
    this.l = {};
}

function setTooltipText(tooltipUi, element, text) {
    tooltipUi.setData(element, 'tooltip-text', text);
    tooltipUi = tooltipUi.Ba(element, 'content-id');
    (tooltipUi = _yt_player.pd(tooltipUi)) && _yt_player.Sd(tooltipUi, text);
}

function getTooltipText(tooltipUi, element) {
    return tooltipUi.Ba(element, 'tooltip-text') || element.title;
}

function showTooltip(tooltipUi, element) {
    if (element) {
        var c = getTooltipText(tooltipUi, element);
        if (c) {
            var d = _yt_player.pd(generateTooltipId(tooltipUi, element));
            if (!d) {
                d = window.document.createElement('div');
                d.id = generateTooltipId(tooltipUi, element);
                d.className = getUiClassName(tooltipUi, 'tip');
                var e = window.document.createElement('div');
                e.className = getUiClassName(tooltipUi, 'tip-body');
                var f = window.document.createElement('div');
                f.className = getUiClassName(tooltipUi, 'tip-arrow');
                var k = window.document.createElement('div');
                k.setAttribute('aria-hidden', 'true');
                k.className = getUiClassName(tooltipUi, 'tip-content');
                var l = getTooltipMask(tooltipUi, element),
                    m = generateTooltipId(tooltipUi, element, 'content');
                k.id = m;
                tooltipUi.setData(element, 'content-id', m);
                e.appendChild(k);
                l && d.appendChild(l);
                d.appendChild(e);
                d.appendChild(f);
                var n = getNormalizedElementText(element);
                m = generateTooltipId(tooltipUi, element, 'arialabel');
                f = window.document.createElement('div');
                _yt_player.S(f, getUiClassName(tooltipUi, 'arialabel'));
                f.id = m;
                n = element.hasAttribute('aria-label') ? element.getAttribute(
                    'aria-label') : 'rtl' == window.document.body.getAttribute(
                        'dir') ? c + ' ' + n : n + ' ' + c;
                _yt_player.Sd(f, n);
                element.setAttribute('aria-labelledby', m);
                m = _yt_player.hF() || window.document.body;
                m.appendChild(f);
                m.appendChild(d);
                setTooltipText(tooltipUi, element, c);
                (c = (0, window.parseInt)(tooltipUi.Ba(element, 'tooltip-max-width'), 10)) &&
                e.offsetWidth > c && (e.style.width = c + 'px', _yt_player.S(k,
                    getUiClassName(tooltipUi, 'normal-wrap')));
                k = _yt_player.kq(element, getUiClassName(tooltipUi, 'reverse'));
                $ya(tooltipUi, element, d, e, l, k) || $ya(tooltipUi, element, d, e, l, !k);
                var p = getUiClassName(tooltipUi, 'tip-visible');
                _yt_player.XD(function() {
                    _yt_player.S(d, p);
                }, 0);
            }
        }
    }
}

function $ya(a, b, c, d, e, f) {
    _yt_player.U(c, getUiClassName(a, 'tip-reverse'), f);
    var k = 0;
    f && (k = 1);
    var l = _yt_player.Kh(b);
    f = new _yt_player.hd((l.width - 10) / 2, f ? l.height : 0);
    var m = _yt_player.Ch(b);
    positionElementWithConstraints(new _yt_player.hd(m.x + f.x, m.y + f.y), c, k);
    m = _yt_player.wd(window);
    var n = _yt_player.Gh(c);
    c = _yt_player.Kh(d);
    var p = Math.floor(c.width / 2);
    k = !!(m.height < n.y + l.height);
    l = !!(n.y < l.height);
    f = !!(n.x < p);
    m = !!(m.width < n.x + p);
    n = (c.width + 3) / -2 - -5;
    a = a.Ba(b, 'force-tooltip-direction');
    if ('left' == a || f)
        n = -5;
    else if ('right' == a || m)
        n = 20 - c.width - 3;
    a = Math.floor(n) + 'px';
    d.style.left = a;
    e && (e.style.left = a, e.style.height = c.height + 'px', e.style.width = c
        .width + 'px');
    return !(k || l);
}

function generateTooltipId(tooltipUi, element, suffix) {
    tooltipUi = getUiClassName(tooltipUi) + generateUniqueId(element);
    suffix && (tooltipUi += '-' + suffix);
    return tooltipUi;
}

function getTooltipMask(tooltipUi, element) {
    var c = null;
    _yt_player.K0 && _yt_player.kq(element, getUiClassName(tooltipUi, 'masked')) && ((c = _yt_player.pd(
        'yt-uix-tooltip-shared-mask')) ? (c.parentNode.removeChild(c),
        showElements(c)) : (c = _yt_player.Ed('IFRAME'), c.src = 'javascript:""',
        c.id = 'yt-uix-tooltip-shared-mask', c.className = getUiClassName(tooltipUi,
            'tip-mask')));
    return c;
}

function manageSharedTooltipMask(element) {
    var b = _yt_player.pd('yt-uix-tooltip-shared-mask'),
        c = b && _yt_player.Yd(b, function(b) {
            return b == element;
        }, !1, 2);
    b && c && (b.parentNode.removeChild(b), hideElements(b), window.document.body
        .appendChild(b));
}

function K4(a) {
    _yt_player.yN.call(this, 1, arguments);
    this.g = a;
}

function L4(a, b, c, d, e) {
    _yt_player.yN.call(this, 2, arguments);
    this.source = e || null;
}

function cza(a, b, c) {
    _yt_player.yN.call(this, 1, arguments);
    this.g = a;
    this.l = b;
}

function M4(a, b, c, d, e, f, k) {
    _yt_player.yN.call(this, 1, arguments);
    this.g = d || null;
    this.source = k || null;
}

function dza(a) {
    a = _yt_player.$d(a, 'yt-uix-button-subscription-container');
    a = _yt_player.J('unsubscribe-confirmation-overlay-container', a);
    return _yt_player.J('yt-dialog', a);
}

function eza(a, b) {
    _yt_player.sF(N4);
    N4.length = 0;
    O4[b] || (O4[b] = dza(a));
    createOverlayUi.getInstance().show(O4[b]);
    var c = getActiveDialogElement();
    return new _yt_player.Yf(function(a) {
        N4.push(_yt_player.AF(c, 'click', function() {
            a();
        }, 'overlay-confirmation-unsubscribe-button'));
    });
}

function createSubscriptionButtonUi() {
    createUiBase.call(this, 'subscription-button');
}

function getYpcData(subscriptionButtonUi, element) {
    if (!subscriptionButtonUi.Ba(element, 'ypc-enabled'))
        return null;
    var c = subscriptionButtonUi.Ba(element, 'ypc-item-type'),
        d = subscriptionButtonUi.Ba(element, 'ypc-item-id');
    return {
        itemType: c,
        itemId: d,
        subscriptionElement: element
    };
}

function updateSubscriptionButtonState(subscriptionButtonUi, element) {
    var c = subscriptionButtonUi.Ba(element, Q4.jI),
        d = !!subscriptionButtonUi.Ba(element, 'is-subscribed');
    c = '-' + c;
    var e = R4.wG + c;
    _yt_player.U(element, R4.vG + c, !d);
    _yt_player.U(element, e, d);
    subscriptionButtonUi.Ba(element, Q4.IG) && !subscriptionButtonUi.Ba(element, Q4.HG) && (c = getUiClassName(createTooltipUi.getInstance()), _yt_player.U(
        element, c, !d), element.title = d ? '' : subscriptionButtonUi.Ba(element, Q4.JG));
    d ? _yt_player.XD(function() {
        _yt_player.S(element, R4.pw);
    }, 1000) : _yt_player.mq(element, R4.pw);
}

function getSubscriptionButtonsForChannel(subscriptionButtonUi, channelId) {
    var c = _yt_player.rd(getUiClassName(subscriptionButtonUi));
    return (0, _yt_player.Ld)(c, function(subscriptionButtonUi) {
        return channelId == this.Ba(subscriptionButtonUi, 'channel-external-id');
    }, subscriptionButtonUi);
}

function handleSubscriptionClick(subscriptionButtonUi, element) {
    var c = (0, _yt_player.z)(function(subscriptionButtonUi) {
        subscriptionButtonUi.discoverable_subscriptions && _yt_player.QD(
            'SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS', subscriptionButtonUi
            .discoverable_subscriptions);
        this.kw(element);
    }, subscriptionButtonUi);
    _yt_player.Osa(c, 'subscribe', 'sub_button');
}

function shouldShowUnsubscribeConfirmation(subscriptionButtonUi, element) {
    if (!subscriptionButtonUi.Ba(element, 'show-unsub-confirm-dialog'))
        return !1;
    var c = subscriptionButtonUi.Ba(element, 'show-unsub-confirm-time-frame');
    return 'always' == c || 'ten_minutes' == c && (c = (0, window.parseInt)(subscriptionButtonUi
            .Ba(element, 'subscribed-timestamp'), 10), new $1().getTime() < 1000 *
        (c + 600)) ? !0 : !1;
}
tva = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
};
uva = {
    IMG: ' ',
    BR: '\n'
};
xva = /[^\d]+$/, yva = {
    cm: 1,
    'in': 1,
    mm: 1,
    pc: 1,
    pt: 1
};
zva = {
    em: 1,
    ex: 1
};
Y1.prototype.clone = function() {
    return new Y1(this.start, this.end);
};
Y1.prototype.getLength = function() {
    return this.end - this.start;
};
_yt_player.A($1, _yt_player.ko);
_yt_player.h = $1.prototype;
_yt_player.h.getHours = function() {
    return this.date.getHours();
};
_yt_player.h.getMinutes = function() {
    return this.date.getMinutes();
};
_yt_player.h.getSeconds = function() {
    return this.date.getSeconds();
};
_yt_player.h.getMilliseconds = function() {
    return this.date.getMilliseconds();
};
_yt_player.h.getUTCHours = function() {
    return this.date.getUTCHours();
};
_yt_player.h.getUTCMinutes = function() {
    return this.date.getUTCMinutes();
};
_yt_player.h.add = function(a) {
    _yt_player.ko.prototype.add.call(this, a);
    a.hours && this.date.setUTCHours(this.date.getUTCHours() + a.hours);
    a.minutes && this.date.setUTCMinutes(this.date.getUTCMinutes() + a
        .minutes);
    a.seconds && this.date.setUTCSeconds(this.date.getUTCSeconds() + a
        .seconds);
};
_yt_player.h.xo = function(a) {
    var b = _yt_player.ko.prototype.xo.call(this, a);
    return a ? b + ' ' + _yt_player.yb(this.getHours(), 2) + ':' +
        _yt_player.yb(this.getMinutes(), 2) + ':' + _yt_player.yb(this
            .getSeconds(), 2) : b + 'T' + _yt_player.yb(this.getHours(),
        2) + _yt_player.yb(this.getMinutes(), 2) + _yt_player.yb(this
            .getSeconds(), 2);
};
_yt_player.h.toString = function() {
    return this.xo();
};
_yt_player.h.clone = function() {
    var a = new $1(this.date);
    a.eo = this.eo;
    a.ho = this.ho;
    return a;
};
var a2 = {},
    b2 = null;
_yt_player.A(Eva, _yt_player.bf);
_yt_player.A(d2, _yt_player.ut);
_yt_player.h = d2.prototype;
_yt_player.h.getDuration = function() {
    return this.duration;
};
_yt_player.h.play = function(a) {
    if (a || 0 == this.g)
        this.progress = 0, this.coords = this.l;
    else if (this.kb())
        return !1;
    c2(this);
    this.startTime = a = (0, _yt_player.F)(); -
    1 == this.g && (this.startTime -= this.duration * this.progress);
    this.endTime = this.startTime + this.duration;
    this.A = this.startTime;
    this.progress || this.Ap();
    this.Ge('play'); -
    1 == this.g && this.Ge('resume');
    this.g = 1;
    var b = _yt_player.Fa(this);
    b in a2 || (a2[b] = this);
    Cva();
    Dva(this, a);
    return !0;
};
_yt_player.h.stop = function(a) {
    c2(this);
    this.g = 0;
    a && (this.progress = 1);
    Fva(this, this.progress);
    this.Ge('stop');
    this.xm();
};
_yt_player.h.pause = function() {
    this.kb() && (c2(this), this.g = -1, this.Ge('pause'));
};
_yt_player.h.V = function() {
    0 == this.g || this.stop(!1);
    this.Ge('destroy');
    d2.ba.V.call(this);
};
_yt_player.h.destroy = function() {
    this.dispose();
};
_yt_player.h.Iu = function() {
    this.Ge('animate');
};
_yt_player.h.Ge = function(a) {
    this.dispatchEvent(new Eva(a, this));
};
_yt_player.A(e2, d2);
e2.prototype.o = _yt_player.y;
e2.prototype.Iu = function() {
    this.o();
    e2.ba.Iu.call(this);
};
e2.prototype.xm = function() {
    this.o();
    e2.ba.xm.call(this);
};
e2.prototype.Ap = function() {
    this.o();
    e2.ba.Ap.call(this);
};
_yt_player.A(f2, e2);
f2.prototype.o = function() {
    this.element.style.left = Math.round(this.coords[0]) + 'px';
    this.element.style.top = Math.round(this.coords[1]) + 'px';
};
var I3 = {};
_yt_player.A(createSvgElement, _yt_player.Df);
_yt_player.h = createSvgElement.prototype;
_yt_player.h.rs = null;
_yt_player.h.El = null;
_yt_player.h.la = function() {
    return this.El;
};
_yt_player.h.addEventListener = function(a, b, c, d) {
    _yt_player.pf(this.El, a, b, c, d);
};
_yt_player.h.removeEventListener = function(a, b, c, d) {
    _yt_player.xf(this.El, a, b, c, d);
};
_yt_player.h.V = function() {
    createSvgElement.ba.V.call(this);
    var a = this.El;
    if (a)
        if (_yt_player.hf(a))
            a.He && _yt_player.mf(a.He);
        else if (a = _yt_player.sf(a)) {
        var b = 0,
            c;
        for (c in a.listeners)
            for (var d = a.listeners[c].concat(), e = 0; e < d.length; ++e)
                _yt_player.yf(d[e]) && ++b;
    }
};
_yt_player.A(createSvgPathElement, createSvgElement);
createSvgPathElement.prototype.fill = null;
_yt_player.A(createSvgGroupElement, createSvgElement);
v2.prototype.Rf = null;
v2.prototype.Zd = null;
v2.prototype.Jm = !0;
var Uva = [
    2,
    2,
    6,
    6,
    0
];
_yt_player.h = v2.prototype;
_yt_player.h.clear = function() {
    this.rb.length = 0;
    this.Ka.length = 0;
    this.Ce.length = 0;
    delete this.Rf;
    delete this.Zd;
    delete this.Jm;
    return this;
};
_yt_player.h.moveTo = function(a, b) {
    0 == _yt_player.Ka(this.rb) ? this.Ce.length -= 2 : (this.rb.push(0),
        this.Ka.push(1));
    this.Ce.push(a, b);
    this.Zd = this.Rf = [
        a,
        b
    ];
    return this;
};
_yt_player.h.Ec = function(a) {
    var b = _yt_player.Ka(this.rb);
    if (null == b)
        throw Error('Path cannot start with lineTo');
    1 != b && (this.rb.push(1), this.Ka.push(0));
    for (b = 0; b < arguments.length; b += 2) {
        var c = arguments[b],
            d = arguments[b + 1];
        this.Ce.push(c, d);
    }
    this.Ka[this.Ka.length - 1] += b / 2;
    this.Zd = [
        c,
        d
    ];
};
_yt_player.h.close = function() {
    var a = _yt_player.Ka(this.rb);
    if (null == a)
        throw Error('Path cannot start with close');
    4 != a && (this.rb.push(4), this.Ka.push(1), this.Zd = this.Rf);
    return this;
};
_yt_player.h.clone = function() {
    var a = new this.constructor();
    a.rb = this.rb.concat();
    a.Ka = this.Ka.concat();
    a.Ce = this.Ce.concat();
    a.Rf = this.Rf && this.Rf.concat();
    a.Zd = this.Zd && this.Zd.concat();
    a.Jm = this.Jm;
    return a;
};
_yt_player.h.transform = function(a) {
    if (!this.Jm)
        throw Error('Non-simple path');
    a.transform(this.Ce, 0, this.Ce, 0, this.Ce.length / 2);
    this.Rf && a.transform(this.Rf, 0, this.Rf, 0, 1);
    this.Zd && this.Rf != this.Zd && a.transform(this.Zd, 0, this.Zd, 0, 1);
    return this;
};
_yt_player.h.isEmpty = function() {
    return 0 == this.rb.length;
};
_yt_player.A(createSvgRectElement, createSvgPathElement);
x2.prototype.Cb = function() {
    return this.l;
};
_yt_player.A(createSvgElementBase, _yt_player.Tu);
createSvgElementBase.prototype.B = null;
createSvgElementBase.prototype.Hj = function() {
    return this.Re ? _yt_player.Kh(this.la()) : _yt_player.ua(this.width) &&
        _yt_player.ua(this.height) ? new _yt_player.I(this.width, this
            .height) : null;
};
createSvgElementBase.prototype.resume = function() {};
_yt_player.A(s2, Sva);
_yt_player.A(r2, Sva);
_yt_player.A(z2, createSvgGroupElement);
z2.prototype.clear = function() {
    _yt_player.Id(this.la());
};
z2.prototype.setSize = function(a, b) {
    var c = this.la(),
        d = {
            width: a,
            height: b
        },
        e;
    for (e in d)
        c.setAttribute(e, d[e]);
};
_yt_player.A(Xva, createSvgRectElement);
var C2;
_yt_player.A(A2, createSvgElementBase);
var Zva = 0;
_yt_player.h = A2.prototype;
_yt_player.h.zo = function() {
    var a = createSvgElementWithAttributes(this, 'svg', {
            width: this.width,
            height: this.height,
            overflow: 'hidden'
        }),
        b = createSvgElementWithAttributes(this, 'g');
    this.F = createSvgElementWithAttributes(this, 'defs');
    this.B = new z2(b, this);
    a.appendChild(this.F);
    a.appendChild(b);
    this.g = a;
    this.o && (this.la().setAttribute('preserveAspectRatio', 'none'), this
        .M ? this.wq() : this.la().setAttribute('viewBox', '0 0 ' + (
            this.o ? this.o + ' ' + this.K : '')));
};
_yt_player.h.wq = function() {
    if (this.Re) {
        var a = this.Hj();
        if (0 == a.width)
            this.la().style.visibility = 'hidden';
        else {
            this.la().style.visibility = '';
            var b = a.width / this.o;
            a = a.height / this.K;
            this.B.la().setAttribute('transform', 'scale(' + b + ' ' + a +
                ') translate(0 0)');
        }
    }
};
_yt_player.h.setSize = function(a, b) {
    _yt_player.Jh(this.la(), a, b);
};
_yt_player.h.Hj = function() {
    if (!_yt_player.rh)
        return this.Re ? _yt_player.Kh(this.la()) : A2.ba.Hj.call(this);
    var a = this.width,
        b = this.height,
        c = _yt_player.u(a) && -1 != a.indexOf('%'),
        d = _yt_player.u(b) && -1 != b.indexOf('%');
    if (!this.Re && (c || d))
        return null;
    if (c) {
        var e = this.la().parentNode;
        var f = _yt_player.Kh(e);
        a = (0, window.parseFloat)(a) * f.width / 100;
    }
    d && (e = e || this.la().parentNode, f = f || _yt_player.Kh(e), b = (0,
        window.parseFloat)(b) * f.height / 100);
    return new _yt_player.I(a, b);
};
_yt_player.h.clear = function() {
    this.B.clear();
    _yt_player.Id(this.F);
    this.l = {};
};
_yt_player.h.yj = function() {
    var a = this.Hj();
    A2.ba.yj.call(this);
    a || this.dispatchEvent('resize');
    if (this.M) {
        a = this.width;
        var b = this.height;
        'string' == typeof a && -1 != a.indexOf('%') && 'string' ==
            typeof b && -1 != b.indexOf('%') && this.I.U($va(), 'tick', this
                .wq);
        this.wq();
    }
};
_yt_player.h.ql = function() {
    A2.ba.ql.call(this);
    this.M && this.I.Ea($va(), 'tick', this.wq);
};
_yt_player.h.V = function() {
    delete this.l;
    delete this.F;
    delete this.B;
    this.I.dispose();
    delete this.I;
    A2.ba.V.call(this);
};
_yt_player.q(isCreatorEndscreen, _yt_player.sV);
_yt_player.h = isCreatorEndscreen.prototype;
_yt_player.h.load = function() {
    _yt_player.sV.prototype.load.call(this);
    if (!H2(_yt_player.Y(this.g).playerStyle)) {
        var a = this.g.getVideoData();
        if (a = a.cj ? null : a.qb && a.qb.endscreen && a.qb.endscreen
            .endscreenRenderer || null)
            a = convertEndscreenData(a, this.M ? 'new' : 'current'), updateCreatorEndscreen(this, a);
        else {
            var b = this.g.getVideoData();
            a = b.videoId;
            this.B && this.B.abort();
            a = {
                method: 'POST',
                wd: (0, _yt_player.z)(this.FR, this, a),
                ad: {
                    v: a
                },
                withCredentials: !0
            };
            'gaming' == _yt_player.Y(this.g).playerStyle && (a.ad.gaming =
                '1');
            this.M && (a.ad.ptype = 'embedded');
            var c = this.g.getVideoData().Jy;
            c && (a.Ob = {
                ad_tracking: c
            });
            if (b = _yt_player.LO(b))
                if (b = _yt_player.Mc(b), b = _yt_player.Jc(b))
                    this.B = _yt_player.nE(b, a);
        }
    }
};
_yt_player.h.unload = function() {
    updateCreatorEndscreen(this, null);
    this.B && (this.B.abort(), this.B = null);
    _yt_player.sV.prototype.unload.call(this);
};
_yt_player.h.CM = function(a, b) {
    if (!H2(_yt_player.Y(this.g).playerStyle))
        return null;
    if ('loadCustomEndscreenRenderer' == a) {
        var c = convertEndscreenData(b, 'new');
        updateCreatorEndscreen(this, c);
        return !0;
    }
    return null;
};
_yt_player.h.DM = function() {
    return H2(_yt_player.Y(this.g).playerStyle) ? [
        'loadCustomEndscreenRenderer'
    ] : [];
};
_yt_player.h.FR = function(a, b) {
    var c = this.B = null;
    if (200 == b.status) {
        var d = b.responseText;
        ')]}' == d.substring(0, 3) && (d = d.substring(3), c = JSON.parse(
            d), c = convertEndscreenData(c, this.M ? 'new' : 'current'));
    }
    updateCreatorEndscreen(this, c);
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
                    if (-1 == e || d >= k)
                        e = f, d = k;
                }
                d = lza[e];
                this.A && _yt_player.ph(this.A.element, 'outline-width',
                    Math.max(b.width, b.height) + 'px');
                for (b = 0; b < this.o.elements.length; ++b)
                    if (f = this.o.elements[b].id, e = this.l[f], k = this
                        .F[f], e && k) {
                        var l = k.width * c / k.aspectRatio;
                        f = Math.round(l * a.height);
                        var m = a.left + Math.round(k.left * a.width),
                            n = a.top + Math.round(k.top * a.height);
                        _yt_player.Jh(e.element, Math.round(k.width * a
                            .width), f);
                        _yt_player.wh(e.element, m, n);
                        _yt_player.nq(e.element, mza);
                        m = k.left + k.width / 2;
                        k = k.top + l / 2;
                        _yt_player.S(e.element, 0.5 >= m && 0.5 >= k ?
                            'ytp-ce-top-left-quad' : 0.5 < m && 0.5 >=
                            k ? 'ytp-ce-top-right-quad' : 0.5 >= m &&
                            0.5 < k ? 'ytp-ce-bottom-left-quad' :
                            'ytp-ce-bottom-right-quad');
                        _yt_player.nq(e.element, lza);
                        _yt_player.S(e.element, d);
                        (e = _yt_player.qd(window.document, 'div',
                            'ytp-ce-expanding-overlay-body', e.element)[
                            0]) && _yt_player.ph(e, 'height', f + 'px');
                    }
            }
        }
    }
};
_yt_player.h.EM = function(a) {
    if (this.o)
        if ('ytp-ce-in-endscreen' == a.getId())
            this.J = !1, this.o.skip && 1 == this.g.Bh() ? (_yt_player.XU(
                this.g, !0), this.g.ac(window.Infinity), this.J = !0) : (sendImpressionPing(
                    this, this.o.impressionUrls), (a = _yt_player.MG()) &&
                logVisualElementShown(a, this.o.visualElement));
        else if (!this.J) {
        a = a.getId().substring(15);
        var b = this.l[a],
            c = this.F[a];
        _yt_player.S(b.element, 'ytp-ce-element-show');
        b.element.removeAttribute('aria-hidden');
        b = this.g.getRootNode();
        _yt_player.S(b, 'ytp-ce-shown');
        sendImpressionPing(this, c.impressionUrls);
        (b = _yt_player.MG()) && logVisualElementShown(b, c.visualElement);
        _yt_player.Y(this.g).zb && this.g.va('endscreenelementshown', a);
    }
};
_yt_player.h.FM = function(a) {
    if ('ytp-ce-in-endscreen' != a.getId() && !this.J) {
        a = a.getId().substring(15);
        var b = this.l[a];
        _yt_player.mq(b.element, 'ytp-ce-element-show');
        b.element.setAttribute('aria-hidden', !0);
        b = this.g.getRootNode();
        _yt_player.mq(b, 'ytp-ce-shown');
        _yt_player.Y(this.g).zb && this.g.va('endscreenelementhidden', a);
    }
};
_yt_player.h.RU = function(a) {
    var b = this;
    a.target === window && new _yt_player.Yt(function() {
        for (var a in b.l)
            _yt_player.nq(b.l[a].element, [
                'ytp-ce-force-expand',
                'ytp-ce-element-hover',
                'ytp-ce-element-shadow-show'
            ]);
    }, 0).start();
};
_yt_player.h.HC = function(a, b) {
    if (a.targetUrl && (!b || 'keypress' != b.type || 13 == b.keyCode)) {
        for (var c = b.target; c && !_yt_player.kq(c, 'ytp-ce-element');) {
            _yt_player.kq(c, 'subscribe-label') && handleEndscreenElementClick(this, a);
            if (_yt_player.kq(c, 'ytp-ce-channel-subscribe'))
                return;
            c = _yt_player.Pd(c);
        }
        if (!c || _yt_player.kq(c, 'ytp-ce-element-hover')) {
            b.preventDefault();
            b.stopPropagation();
            if (c = this.l[a.id])
                this.Ru(c, a), c.element.blur();
            b.ctrlKey || b.metaKey || 'new' == a.mq ? (handleEndscreenElementClick(this, a), this
                .aE(), this.g.hd(), c = _yt_player.Mc(a.targetUrl), c =
                _yt_player.Jc(c), _yt_player.vV(c, void 0, a.Rd)) : (c =
                (0, _yt_player.z)(this.aE, this, _yt_player.Ga(
                    _yt_player.uV, a.targetUrl, a.Rd)), handleEndscreenElementClick(this, a, c));
        }
    }
};
_yt_player.h.Ut = function(a, b) {
    _yt_player.kq(a.element, 'ytp-ce-element-hover') || ('VIDEO' == b
        .type || 'PLAYLIST' == b.type ? _yt_player.S(a.element,
            'ytp-ce-element-hover') : _yt_player.Y(this.g).l ?
        new _yt_player.Yt(function() {
            _yt_player.S(a.element, 'ytp-ce-element-hover');
        }, 200).start() : _yt_player.S(a.element,
            'ytp-ce-element-hover'), sendImpressionPing(this, b.MK), updateEndscreenElementVisibility(this, b.id, !0));
};
_yt_player.h.Ru = function(a, b) {
    _yt_player.mq(a.element, 'ytp-ce-element-hover');
    _yt_player.mq(a.element, 'ytp-ce-force-expand');
    updateEndscreenElementVisibility(this, b.id, !1);
};
_yt_player.h.aE = function(a) {
    this.g.Ni(17, a);
};
var kza = [
        346,
        426,
        470,
        506,
        570,
        640,
        853,
        1280,
        1920
    ],
    lza =
    'ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920'
    .split(' '),
    mza = [
        'ytp-ce-top-left-quad',
        'ytp-ce-top-right-quad',
        'ytp-ce-bottom-left-quad',
        'ytp-ce-bottom-right-quad'
    ];
var mwa = {
    jZ: 'current',
    FH: 'new'
};
var owa = {
        CLOSE: 'close',
        u1: 'openUrl',
        kI: 'subscribe'
    },
    pwa = {
        Pq: 'click',
        CLOSE: 'close',
        y_: 'hidden',
        createSvgElement: 'rollOut',
        WH: 'rollOver',
        aI: 'shown'
    };
var swa = {
    createTooltipUi: 'xx',
    generateTooltipId: 'xy',
    createSubscriptionButtonUi: 'yx',
    Q4: 'yy'
};
_yt_player.q(createAnchoredAnnotationPositionObject, createAnnotationPositionObject);
var Ewa = {
    rG: 'anchored',
    c2: 'rect',
    logVisualElementClick: 'shapeless'
};
var Jwa = {
    CLOSED: 'closed',
    F1: 'playerControlShow',
    WH: 'rollOver',
    aI: 'shown'
};
createAnnotationObject.prototype.Ta = function() {
    var a = findFirstAction(this, function(a) {
        return 'openUrl' == a.type && null != a.url;
    });
    return a ? a.url : null;
};
createAnnotationObject.prototype.showLinkIcon = function() {
    return findAction(this, function(a) {
        return null != a.url && a.url.showLinkIcon;
    });
};
var b3 = {
        rG: 'anchored',
        uG: 'branding',
        CHANNEL: 'channel',
        iZ: 'cta',
        B_: 'highlightText',
        d0: 'label',
        PLAYLIST: 'playlist',
        Q1: 'popup',
        parseFloatValue: 'speech',
        kI: 'subscribe',
        u3: 'title',
        VIDEO: 'video',
        getMenuMask: 'vote',
        closeMenu: 'website'
    },
    Owa = {
        uG: 'branding',
        FY: 'card',
        LZ: 'drawer',
        A_: 'highlight',
        B0: 'marker',
        findFirstChildElement: 'promotion',
        TEXT: 'text',
        createClickCardUi: 'widget'
    },
    Pwa = {
        hideActiveCard: 'video_relative',
        G1: 'player_relative'
    };
createTriggerConditionListener.prototype.A = function(a, b, c, d) {
    this.g[a] = b ? !c : c;
    a = _yt_player.Ob(this.g, function(a) {
        return a;
    });
    this.o != a && (this.o = a, this.l.R(this.B, a, d));
};
createAnnotationRendererBase.prototype.la = function() {
    return this.B;
};
createAnnotationRendererBase.prototype.o = function() {};
var j3 = {
    bevel: 1,
    dropshadow: 2
};
_yt_player.q(createSpeechBubbleRenderer, createAnnotationRendererBase);
createSpeechBubbleRenderer.prototype.o = function(a, b) {
    var c = getFirstAnnotationRegion(a);
    if (c) {
        var d = calculateFinalAnnotationPosition(c, b);
        if (!(0 >= d.width || 0 >= d.height)) {
            var e;
            if (e = (c = (c = getAnnotationSegment(a)) && c.g ? c.g : null) && c.length ? c[
                    0] : null) {
                var f = _yt_player.gh(calculateAbsolutePosition(b, calculateScaledAnnotationRect(e, new _yt_player.bh(e.F, e
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
                k = calculateAnnotationBoundingRect(k, c.effects);
                l = createSvgRenderer(this, k.width, k.height);
                m = fxa(c, k.width, k.height, this.g);
                d = new _yt_player.bh(d.left - k.left, d.top - k.top, d
                    .width, d.height);
                var n = new _yt_player.hd(f.x - k.left, f.y - k.top);
                this.A = 17 * calculateScaledHeight(b.g, e.l, e.g ? e.g : 'xy');
                e = c.cornerRadius;
                f = a.l;
                var p = this.g && getClickActions(a),
                    r = p ? f.borderWidth + 1 : f.borderWidth;
                p = (f = r ? new x2(r, p ? f.l : f.borderColor) : null) ? f
                    .Cb() / 2 : 0;
                r = determineBubblePointerPosition(d, n);
                var v = this.C(d, e, n, r),
                    D = n.x;
                n = n.y;
                var H = d.width,
                    L = d.height,
                    T = d.left;
                d = d.top;
                var ha = new v2();
                ha.moveTo(T + e + p, d + p);
                't' == r && (ha.Ec(v.start, d + p), ha.Ec(D, n), ha.Ec(v
                    .end, d + p));
                ha.Ec(T + H - e - p, d + p);
                w2(ha, e, e, -90);
                'r' == r && (ha.Ec(T + H - p, v.start), ha.Ec(D, n), ha.Ec(
                    T + H - p, v.end));
                ha.Ec(T + H - p, d + L - e - p);
                w2(ha, e, e, 0);
                'b' == r && (ha.Ec(v.end, d + L - p), ha.Ec(D, n), ha.Ec(v
                    .start, d + L - p));
                ha.Ec(T + e + p, d + L - p);
                w2(ha, e, e, 90);
                'l' == r && (ha.Ec(T + p, v.end), ha.Ec(D, n), ha.Ec(T + p,
                    v.start));
                ha.Ec(T + p, d + e + p);
                w2(ha, e, e, 180);
                ha.close();
                addPathToSvg(l, ha, f, m);
                if (m = this.la())
                    _yt_player.S(m, 'annotation-shape'), _yt_player.S(m,
                        'annotation-speech-shape'), _yt_player.wh(m, k.left,
                        k.top), _yt_player.Jh(m, k.width, k.height), addSvgFilters(l,
                        m, c.effects);
            }
        }
    }
};
createSpeechBubbleRenderer.prototype.C = function(a, b, c, d) {
    function e(a, c, d, e) {
        a = Math.min(Math.max(e - 2 * b, 0), a);
        c = _yt_player.dd(c - a / 2, d + b, d + e - a - b);
        return new Y1(c, c + a);
    }
    return 't' == d || 'b' == d ? e(this.A, c.x, a.left, a.width) : 'l' ==
        d || 'r' == d ? e(this.A, c.y, a.top, a.height) : new Y1(0, 0);
};
_yt_player.q(m3, createAnnotationRendererBase);
m3.prototype.o = function(a, b) {
    var c = getFirstAnnotationRegion(a);
    if (c) {
        var d = calculateFinalAnnotationPosition(c, b);
        if (!(0 >= d.width || 0 >= d.height)) {
            var e = a.l;
            c = calculateAnnotationBoundingRect(d, e.effects);
            var f = createSvgRenderer(this, c.width, c.height),
                k = new _yt_player.bh(0, 0, d.width, d.height),
                l = e.cornerRadius;
            d = new x2(!e.o && this.g ? 1 : e.o, e.bgColor);
            var m = new r2('#000', 0),
                n = d ? d.Cb() / 2 + 1 : 0;
            k = createRoundedRectPath(k, l, n);
            addPathToSvg(f, k, d, m);
            f = this.la();
            _yt_player.S(f, 'annotation-shape');
            e = e.g;
            _yt_player.Mh(f, this.g ? Math.max(e, 0.9) : e);
            _yt_player.wh(f, c.left, c.top);
            _yt_player.Jh(f, c.width, c.height);
        }
    }
};
_yt_player.q(n3, createAnnotationRendererBase);
n3.prototype.o = function(a, b) {
    var c = getFirstAnnotationRegion(a);
    if (c) {
        var d = calculateFinalAnnotationPosition(c, b);
        if (!(0 >= d.width || 0 >= d.height)) {
            c = a.l;
            var e = calculateAnnotationBoundingRect(d, c.effects),
                f = createSvgRenderer(this, e.width, e.height),
                k = new _yt_player.bh(0, 0, d.width, d.height);
            d = fxa(c, d.width, d.height, this.g);
            var l = c.cornerRadius;
            var m = a.l;
            var n = this.g && getClickActions(a),
                p = n ? m.borderWidth + 1 : m.borderWidth;
            n = (m = p ? new x2(p, n ? m.l : m.borderColor) : null) ? m
            .Cb() / 2 + 1 : 0;
            k = createRoundedRectPath(k, l, n);
            addPathToSvg(f, k, m, d);
            if (k = this.la())
                _yt_player.S(k, 'annotation-shape'), _yt_player.S(k,
                    'annotation-popup-shape'), _yt_player.wh(k, e.left, e
                    .top), _yt_player.Jh(k, e.width, e.height), addSvgFilters(f, k, c
                    .effects);
        }
    }
};
_yt_player.q(o3, createSpeechBubbleRenderer);
o3.prototype.C = function(a, b, c, d) {
    function e(a, c, d, e) {
        a = Math.min(Math.max(e - 2 * b, 0), a);
        c = c <= d + e / 2 ? Math.max(d + e / 4 - a / 2, d + b) : Math.min(
            d + 3 * e / 4 - a / 2, d + e - a - b);
        return new Y1(c, c + a);
    }
    return 't' == d || 'b' == d ? e(this.A, c.x, a.left, a.width) : 'l' ==
        d || 'r' == d ? e(this.A, c.y, a.top, a.height) : new Y1(0, 0);
};
_yt_player.q(createAnnotationView1, _yt_player.M);
_yt_player.h = createAnnotationView1.prototype;
_yt_player.h.AB = function() {
    this.H || (this.A && _yt_player.O(this.A, !0), this.B && _yt_player.O(
            this.B, !0), this.o && (this.o.g = !0, _yt_player.Mh(this.l,
            isAnnotationTextOpaque(this) ? 1 : 0), this.o.o(this.g, getAnnotationContext(this))), this.F
        .isActive() && this.F.stop(), this.H = !0, this.I = this.W.xh(
            _yt_player.VU(this.C), 'mouseleave',
            function(a) {
                this.wp.stop();
                this.Ih(a);
            }));
};
_yt_player.h.Ih = function() {
    this.H && (this.M ? this.F.start() : this.Kz(), this.o && (this.o.g = !
        1, _yt_player.Mh(this.l, isAnnotationTextOpaque(this) ? 1 : 0), this.o.o(this.g,
            getAnnotationContext(this))), this.H = !1, this.I && (this.W.Ea(this.I),
        this.I = null));
};
_yt_player.h.Kz = function() {
    this.A && _yt_player.O(this.A, !1);
    this.B && _yt_player.O(this.B, !1);
};
_yt_player.h.KO = function(a) {
    this.Y = a;
    this.wp.Kj();
};
_yt_player.h.JO = function() {
    var a = this.Y,
        b = new _yt_player.hd(a.clientX, a.clientY),
        c = _yt_player.Ch(this.C.getRootNode()),
        d = offsetPosition(c, this.K);
    c = (this.B && _yt_player.Nh(this.B) || this.A && _yt_player.Nh(this
        .A)) && offsetPosition(c, this.M);
    d && d.contains(b) || c && c.contains(b) ? this.AB(a) : this.Ih(a);
};
_yt_player.h.show = function() {
    var a = this.g.l;
    a = (a && 0 == a.g || 'title' == this.g.style || 'highlightText' == this
        .g.style ? !1 : !0) && !this.o;
    var b = !this.l,
        c = 'widget' == this.g.type;
    if (a) {
        var d = getAnnotationContext(this),
            e = null;
        'highlight' == this.g.type || 'label' == this.g.style ?
            e = new m3() : 'popup' == this.g.style ?
                e = new n3() : 'anchored' == this.g.style ?
                    e = new createSpeechBubbleRenderer() : 'speech' == this.g.style && (e = new o3());

        e && (e.o(this.g, d), this.o = e, d = e.la()) && (_yt_player.O(d, !
            1), _yt_player.S(d, 'annotation-type-' + this.g.type
            .toLowerCase()), this.X(d));
    }
    if (b) {
        d = ['annotation'];
        'highlightText' != this.g.style || d.push('annotation-no-mouse');
        d.push('annotation-type-' + this.g.type.toLowerCase());
        this.l = _yt_player.K('DIV', d);
        _yt_player.O(this.l, !1);
        this.g.A && (this.D = _yt_player.K('DIV', 'inner-text'), 'label' ==
            this.g.style && (_yt_player.S(this.D, 'label-text'), this.D
                .style.backgroundColor = this.g.l.bgColor), _yt_player
            .Sd(this.D, this.g.A), this.l.appendChild(this.D));
        _yt_player.aF(this.l, 'annotation_id', this.g.id);
        this.X(this.l);
        addAnnotationViewMouseListeners(this, this.l);
        if (getClickActions(this.g) && this.g.showLinkIcon()) {
            if (e = this.g.Ta())
                d = this.l, e = new _yt_player.vm(getLinkValue(e)), d.title = e.l + e
                .o;
            this.B = _yt_player.K('SPAN', 'annotation-link-icon');
            _yt_player.O(this.B, !1);
            this.l.appendChild(this.B);
        }
        addAnnotationViewCloseButton(this);
        getClickActions(this.g) || (this.l.style.cursor = 'default');
    }
    c && 'subscribe' == this.g.style && _yt_player.J(
        'yt-uix-subscription-button', this.l);
    if (a || b) {
        a: {
            a = this.g.segment.g;
            if (a.length && (a = getFirstSegmentRegion(a[0]))) {
                a = a.B;
                break a;
            }
            a = 0;
        }
        this.l && (this.l.style.zIndex = a);
        this.o && this.o.la() && (this.o.la().style.zIndex = a);
    }
    _yt_player.O(this.l, !0);
    _yt_player.Mh(this.l, isAnnotationTextOpaque(this) ? 1 : 0);
    updateAnnotationViewPosition(this);
    this.o && this.o.la() && _yt_player.O(this.o.la(), !0);
};
_yt_player.h.hide = function() {
    this.l && _yt_player.O(this.l, !1);
    this.o && this.o.la() && _yt_player.O(this.o.la(), !1);
    this.J && (this.W.Ea(this.J), this.J = null);
};
_yt_player.q(u3, _yt_player.M);
_yt_player.h = u3.prototype;
_yt_player.h.hide = function() {
    this.isVisible = !1;
    this.view && (removeAnnotationViewResizeListeners(this), this.view.hide());
};
_yt_player.h.show = function() {
    this.isVisible = !0;
    this.view && (this.view.show(), this.l.subscribe('resize', this.zB,
        this), this.l.subscribe('onVideoAreaChange', this.mD, this));
};
_yt_player.h.destroy = function() {
    if (this.view) {
        removeAnnotationViewResizeListeners(this);
        var a = this.view;
        _yt_player.DF(a.W);
        a.wp.dispose();
        a.F.dispose();
        a.l && _yt_player.Kd(a.l);
        a.o && a.o.la() && _yt_player.Kd(a.o.la());
    }
    clearAnnotationHideTimer(this);
};
_yt_player.h.mD = function() {
    updateAnnotationViewPosition(this.view);
};
_yt_player.h.zB = function() {
    updateAnnotationViewPosition(this.view);
};
_yt_player.q(createCollaboratorCard, p2);
_yt_player.q(createSimpleCard, p2);
_yt_player.q(createDonationCard, createSimpleCard);
_yt_player.q(createPlaylistCard, p2);
_yt_player.q(createPollCard, p2);
_yt_player.q(createProductListingCard, createSimpleCard);
_yt_player.q(createTipCard, createSimpleCard);
_yt_player.q(createVideoCard, p2);
_yt_player.q(createEpisodeCard, p2);
createCardHandler.prototype.o = function(a, b) {
    var c = _yt_player.Zd(b.target, 'label');
    c && _yt_player.U(c, 'iv-card-poll-choice-focused', a);
};
createCardHandler.prototype.D = function(a, b) {
    var c = _yt_player.$d(b.target, 'iv-card-poll');
    if (c)
        if (a.A)
            _yt_player.J('iv-card-sign-in-button', c).click();
        else {
            var d = (0, window.parseInt)(Z1(b.target, 'pollChoiceIndex'),
                10);
            if (null == a.g)
                a.choices[d].count++, a.g = d;
            else if (a.g != d) {
                var e = a.choices[a.g];
                e.count = Math.max(e.count - 1, 0);
                a.choices[d].count++;
                a.g = d;
            } else
                e = a.choices[a.g], e.count = Math.max(e.count - 1, 0), a
                .g = null;
            updatePollCardElement(a, c);
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
            logCardClick(this.g.logger, a.o, void 0, {
                'link-id': d
            }, a.l.click, 5);
            (c = _yt_player.MG()) && logVisualElementClick(c, a.C);
        }
};
createCardHandler.prototype.C = function(a) {
    var b = _yt_player.x(
            'yt.www.ypc.bootstrap.api.loadOffersForInnertubeRequestParams'),
        c;
    b && (c = function() {
        b(a.H, a.B);
    });
    handleCardClick(this, a, !0, c);
};
createCardHandler.prototype.F = function(a) {
    var b = _yt_player.x('yt.www.ypc.bootstrap.api.loadOffers');
    b && (b = _yt_player.Ga(b, a.K, a.H, a.B));
    handleCardClick(this, a, !1, b);
};
_yt_player.q(createCardBase, _yt_player.M);
_yt_player.h = createCardBase.prototype;
_yt_player.h.gq = function() {
    this.context.o.subscribe('resize', this.Fn, this);
};
_yt_player.h.la = function() {
    return this.Ga;
};
_yt_player.h.Zi = function(a, b, c, d, e, f, k) {
    this.context.g.U(a, 'click', _yt_player.Ga(this.Uo, b, c, d, e, f || [],
        k || 0), this);
    this.context.g.U(a, 'touchstart', _yt_player.Ga(function() {
        this.Yv = !1;
    }), this);
    this.context.g.U(a, 'touchmove', _yt_player.Ga(function() {
        this.Yv = !0;
    }), this);
};
_yt_player.h.Uo = function(a, b, c, d, e, f, k) {
    if (this.Yv)
        return !1;
    k && (k.stopPropagation(), k.preventDefault());
    handleCardLinkClick(this, a, c, d, e, f);
    return !1;
};
_yt_player.h.show = function() {
    this.Y = (0, _yt_player.F)();
};
_yt_player.h.hide = function() {};
_yt_player.h.destroy = function() {
    _yt_player.Kd(this.la());
};
_yt_player.h.Fn = function() {};
_yt_player.q(createCardDrawer1, createCardBase);
_yt_player.h = createCardDrawer1.prototype;
_yt_player.h.isAvailable = function() {
    var a;
    if (a = !!this.o.length)
        (a = this.g.getRootNode()) ? (a = _yt_player.Kh(a), a = 173 < a
            .width && 173 < a.height) : a = !1;
    return a;
};
_yt_player.h.Fn = function() {
    var a = this.isAvailable();
    _yt_player.O(this.la(), a);
    _yt_player.U(this.context.l.getRootNode(), 'ytp-iv-drawer-enabled', a);
    updateCardState(this.g);
};
_yt_player.h.destroy = function() {
    var a = _yt_player.NU(this.g).B;
    a && a.St(!1, void 0);
    this.g.getRootNode().removeChild(this.D);
    _yt_player.VF(this.ha);
    _yt_player.sF(this.X);
    this.getUiClassName && this.getUiClassName.dispose();
    this.F && this.F.dispose();
    createCardBase.prototype.destroy.call(this);
};
_yt_player.h.ZM = function(a) {
    this.J.start();
    a.preventDefault();
    a = a || window.event;
    var b = 0;
    'MozMousePixelScroll' == a.type ? b = 0 == (a.axis == a
        .HORIZONTAL_AXIS) ? a.detail : 0 : window.opera ? b = a.detail : b =
        0 == a.wheelDelta % 120 ? 'WebkitTransform' in window.document
        .documentElement.style ? window.chrome && 0 == window.navigator
        .platform.indexOf('Mac') ? a.wheelDeltaY / -30 : a.wheelDeltaY / -
        1.2 : a.wheelDelta / -1.6 : a.wheelDeltaY / -3;
    if (a = b)
        this.A.scrollTop += a;
};
_yt_player.h.kE = function(a) {
    if (!_yt_player.kq(this.g.getRootNode(), 'ytp-cards-teaser-shown')) {
        this.l != a && (this.l = a, updateShoppingCardState(this));
        if (_yt_player.Nh(this.la())) {
            if (2 == this.context.l.Qa())
                var b = 1 == ((0, window.isNaN)(void 0) ? this.context.l
                .gB() : void 0);
            else
                b = (0, window.isNaN)(void 0) ? this.context.l.Bh() :
                void 0, b = 1 == b || 0 == b && 0 === this.context.l
                .getCurrentTime();
            if (b && a.hc.teaserDurationMs) {
                b = {
                    teaserText: a.hc.teaserText,
                    durationMs: a.hc.teaserDurationMs
                };
                var c = _yt_player.NU(this.g).B;
                c && c.St(!0, b);
            }
        }
        this.na.isActive() || ((!this.B || !this.J.isActive() && this.T) &&
            scrollToCard(this, a), this.na.start(910 + a.hc.teaserDurationMs));
    }
};
_yt_player.h.MV = function(a) {
    this.B || (this.l = a, updateShoppingCardState(this), scrollToCard(this, a), showCardDrawer(this,
        'YOUTUBE_DRAWER_AUTO_OPEN', !1, a));
};
_yt_player.h.fJ = function() {
    if (this.B) {
        logDrawerEvent(this.context.logger, this.M, 4, getCurrentCard(this).l.close);
        var a = _yt_player.MG();
        a && this.I && logVisualElementClick(a, this.I);
        hideCardDrawer(this);
    }
};
_yt_player.h.qJ = function() {
    _yt_player.U(this.D, 'iv-drawer-scrolled', 0 < this.A.scrollTop);
};
_yt_player.h.YL = function() {
    var a = getCurrentCard(this);
    logTeaserEvent(this.context.logger, 8, a.o, a.l.dW);
    var b = _yt_player.MG();
    b && a && (logVisualElementShown(b, a.F), logVisualElementShown(b, a.D));
};
_yt_player.h.XL = function(a) {
    var b = getCurrentCard(this),
        c = _yt_player.MG();
    this.l ? a ? (a = this.context.logger, logTeaserEvent(a, 9, b.o, b.l.Dv), a.g.Ni(4,
        void 0), c && logVisualElementClick(c, b.F)) : (a = this.context.logger, logTeaserEvent(a, 12,
        b.o, b.l.Dv), a.g.Ni(4, void 0), c && logVisualElementClick(c, b.D)) : (a = this
        .context.logger, logDrawerEvent(a, this.M, 12, b.l.Dv), a.g.Ni(4, void 0),
        c && this.ga && logVisualElementClick(c, this.ga));
};
var Nxa = {
    collaborator: createCollaboratorCard,
    donation: createDonationCard,
    episode: createEpisodeCard,
    movie: createEpisodeCard,
    playlist: createPlaylistCard,
    poll: createPollCard,
    productListing: createProductListingCard,
    simple: createSimpleCard,
    tip: createTipCard,
    video: createVideoCard
};
_yt_player.q(createAnnotationBase, createCardBase);
createAnnotationBase.prototype.gq = function() {
    createCardBase.prototype.gq.call(this);
    addAnnotationTimeRangeListeners(this);
};
_yt_player.q(createBrandingAnnotation, createAnnotationBase);
_yt_player.h = createBrandingAnnotation.prototype;
_yt_player.h.UV = function(a, b, c, d) {
    this.o.stop();
    if (!this.A) {
        var e = _yt_player.Kh(a);
        this.g || (_yt_player.Ih(a, e.width), _yt_player.Ih(b, e.width));
        _yt_player.ph(c, 'top', e.height - Math.max(Math.min(e.height, d) /
            2 + 10, 20) + 'px');
        _yt_player.ph(c, 'right', '1px');
        this.A = !0;
        _yt_player.O(a, !0);
        this.B = new _yt_player.Yt(function() {
            _yt_player.S(this.la(), 'iv-branding-active');
        }, 0, this);
        this.B.start();
    }
};
_yt_player.h.JK = function(a, b) {
    _yt_player.mq(this.la(), 'iv-branding-active');
    this.C = new _yt_player.Yt((0, _yt_player.z)(function() {
        _yt_player.O(a, !1);
        this.g || _yt_player.Ih(b, 0);
    }, this), 250);
    this.C.start();
    this.A = !1;
};
_yt_player.h.show = function() {
    if (!this.isActive) {
        createAnnotationBase.prototype.show.call(this);
        if (!this.D) {
            _yt_player.S(this.la(), 'iv-branding');
            var a = this.annotation.data;
            this.F = a.image_width;
            this.l = _yt_player.K('IMG', {
                src: a.image_url,
                'class': 'branding-img iv-click-target',
                width: a.image_width,
                height: a.image_height
            });
            _yt_player.O(this.l, !1);
            var b = _yt_player.K('DIV', 'branding-img-container', this.l);
            this.la().appendChild(b);
            var c = _yt_player.K('DIV', 'iv-branding-context-name');
            _yt_player.Sd(c, a.channel_name);
            var d = _yt_player.K('DIV', 'iv-branding-context-subscribe');
            if (b = a.standalone_subscribe_button_data)
                this.g = new _yt_player.y_(b.subscribeText, b
                    .subscribeCount, b.unsubscribeText, b.unsubscribeCount,
                    !!b.enabled, !!b.classic, a.channel_id, !!b.subscribed,
                    b.feature, a.session_data.itct, b.signinUrl, this.H.l),
                this.g.ua(d);
            b = _yt_player.K('DIV', 'iv-branding-context-subscribe-caret');
            c = _yt_player.K('DIV', 'branding-context-container-inner', b,
                c, d);
            _yt_player.O(c, !1);
            d = _yt_player.K('DIV', 'branding-context-container-outer', c);
            _yt_player.ph(d, 'right', this.F + 'px');
            this.la().appendChild(d);
            var e = this.annotation.Ta();
            e && this.Zi(this.l, e, this.annotation.id, a.session_data, this
                .annotation.g);
            this.o = new _yt_player.Yt(_yt_player.Ga(this.JK, c, d), 500,
                this);
            _yt_player.N(this, this.o);
            this.context.g.U(this.la(), 'mouseover', (0, _yt_player.z)(this
                .UV, this, c, d, b, a.image_height));
            this.context.g.U(this.la(), 'mouseout', (0, _yt_player.z)(this.o
                .start, this.o, void 0));
            this.D = !0;
        }
        logCardShown(this.context.logger, this.annotation.g);
        _yt_player.O(this.la(), !0);
        this.isActive = !0;
        if (this.l) {
            a = this.l;
            var f = void 0 === f ? 0 : f;
            b = _yt_player.Lh(a).width;
            c = _yt_player.ua(void 0) ? void 0 : b;
            _yt_player.wh(a, c);
            f = new f2(a, [
                c,
                a.offsetTop
            ], [
                c - b - f,
                a.offsetTop
            ], 200, Gva);
            _yt_player.N(this, f);
            this.context.A.U(f, 'begin', _yt_player.Ga(_yt_player.O, a, !
            0));
            f.play();
        }
    }
};
_yt_player.h.hide = function() {
    this.isActive && (_yt_player.O(this.la(), !1), this.isActive = !1);
};
_yt_player.h.destroy = function() {
    this.g && (this.g.dispose(), this.g = null);
    createAnnotationBase.prototype.destroy.call(this);
};
_yt_player.q(createPromoAnnotation, createAnnotationBase);
_yt_player.h = createPromoAnnotation.prototype;
_yt_player.h.show = function() {
    this.isActive || (createAnnotationBase.prototype.show.call(this), this.I || (createPromoAnnotationElement(this),
            this.I = !0), _yt_player.O(this.la(), !0), this
        .annotation && this.annotation.g && logCardShown(this.context.logger, this
            .annotation.g), _yt_player.tg(function() {
            _yt_player.mq(this.la(), 'iv-promo-inactive');
        }, 100, this), this.la().removeAttribute('aria-hidden'), this
        .isActive = !0, $3(this), $xa(this), setPromoCollapseTimer(this, this.F));
};
_yt_player.h.hide = function() {
    this.isActive && (_yt_player.S(this.la(), 'iv-promo-inactive'), this
        .isActive = !1, this.la().setAttribute('aria-hidden', !0));
};
_yt_player.h.Uo = function(a, b, c, d, e, f, k) {
    return this.B ? !1 : createAnnotationBase.prototype.Uo.call(this, a, b, c, d, e, f, k);
};
_yt_player.h.ys = function(a, b) {
    b.stopPropagation();
    $xa(this);
    setPromoCollapseTimer(this, a);
    this.g.focus();
};
_yt_player.h.fK = function(a) {
    this.H = !0;
    this.ys(500, a);
};
_yt_player.h.eK = function() {
    this.H = !1;
    collapsePromoAnnotation(this);
};
_yt_player.h.LO = function(a) {
    a.stopPropagation();
    this.hide();
    logCardClose(this.context.logger, this.annotation.g);
};
_yt_player.h.UJ = function(a) {
    a.stopPropagation();
    $3(this);
    this.B = !0;
    _yt_player.S(this.la(), 'iv-promo-collapsed-no-delay');
    this.C.start();
    logCardClose(this.context.logger, this.annotation.g);
};
_yt_player.h.destroy = function() {
    this.C.dispose();
    createAnnotationBase.prototype.destroy.call(this);
};
_yt_player.q(createAnnotationsModule, _yt_player.sV);
_yt_player.h = createAnnotationsModule.prototype;
_yt_player.h.wM = function(a, b) {
    if (!isAnnotationEditor(_yt_player.Y(this.g).playerStyle))
        return null;
    switch (a) {
        case 'loadCustomAnnotationsXml':
            var c = _yt_player.Vr(b);
            c && parseAnnotationXmlAndCreateViews(this, c);
            return !0;
        case 'removeCustomAnnotationById':
            return b && this.l && (removeCardFromDrawer(this.l, b), updateCardState(this.g)), !0;
    }
    return null;
};
_yt_player.h.xM = function() {
    return isAnnotationEditor(_yt_player.Y(this.g).playerStyle) ? [
        'loadCustomAnnotationsXml',
        'removeCustomAnnotationById'
    ] : [];
};
_yt_player.h.Tu = function() {
    if (this.C) {
        var a = _yt_player.W_(_yt_player.VU(this.g), !0);
        _yt_player.Jh(this.C.element, a.width, a.height);
        _yt_player.wh(this.C.element, a.left, a.top);
    }
    if (this.l) {
        var b = _yt_player.eV(this.g);
        a = this.l;
        b = b.width;
        _yt_player.U(a.D, 'iv-drawer-small', 426 >= b);
        _yt_player.U(a.D, 'iv-drawer-big', 1280 <= b);
    }
};
_yt_player.h.fT = function(a) {
    _yt_player.Y(this.g).experiments.g(
            'web_player_update_annotations_module_visibility_killswitch') ||
        this.Pc(a.state);
    _yt_player.X(a.state, 2) && (this.Vl() && this.WA() && 2 != this.g
    .Qa() && this.Tt(!1), this.St(!1));
};
_yt_player.h.load = function() {
    _yt_player.sV.prototype.load.call(this);
    _yt_player.Y(this.g).experiments.g(
            'web_player_update_annotations_module_visibility_killswitch') ?
        this.A.show() : this.Pc(_yt_player.UU(this.g));
    this.I++;
    var a = this.g.getVideoData(),
        b = a.videoId,
        c = (0, _yt_player.z)(this.JR, this, b, this.I),
        d = (0, _yt_player.z)(function() {
            this.D = null;
        }, this);
    _yt_player.nG() && (c = createWrappedCallback(this, c));
    c = {
        format: 'XML',
        wd: c,
        onError: d,
        ad: {}
    };
    a.isPharma && (c.ad.pharma = '1');
    c.method = 'POST';
    c.withCredentials = !0;
    d = _yt_player.Y(this.g);
    'gaming' == d.playerStyle && (c.ad.gaming = '1');
    (b = d.C.get(b)) && addLegacyAnnotationParams(c, b);
    b = b && (b.Zh || b.tr);
    if (!a.xn || b)
        a.Of ? sendAnnotationDataRequest(this, a.Of, c) : (this.B = (0, _yt_player.z)(this.BM,
                this, c), this.g.addEventListener('videodatachange', this
            .B));
    _yt_player.mV(this.g, this.C.element, 4);
    this.Tu();
};
_yt_player.h.Pc = function(a) {
    a = !_yt_player.xP(a) && !_yt_player.X(a, 1024);
    _yt_player.sH(this.A, a);
    _yt_player.sH(this.C, a);
};
_yt_player.h.BM = function(a) {
    var b = this.g.getVideoData();
    b.Of && (this.B && (this.g.removeEventListener('videodatachange', this
        .B), this.B = null), sendAnnotationDataRequest(this, b.Of, a));
};
_yt_player.h.unload = function() {
    logCardDismissed(this.Ya);
    _yt_player.kV(this.g, 'annotations_module');
    _yt_player.Lb(this.o, function(a) {
        a.destroy();
    });
    _yt_player.Lb(this.K, function(a) {
        a.destroy();
    });
    this.H = null;
    this.l && (this.l.destroy(), this.l = null, updateCardState(this.g));
    this.J = !1;
    this.D && (this.D.abort(), this.D = null);
    this.o = {};
    this.K = {};
    this.A.hide();
    _yt_player.sV.prototype.unload.call(this);
    _yt_player.rH(this.C);
    this.B && (this.g.removeEventListener('videodatachange', this.B), this
        .B = null);
};
_yt_player.h.JR = function(a, b, c) {
    this.D = null;
    if (!hasAnnotationDataChanged(this, b, a) && (a = _yt_player.WD(c) && c.responseXML ? c
            .responseXML : null)) {
        parseAnnotationXmlAndCreateViews(this, a);
        _yt_player.S(this.g.getRootNode(), 'iv-module-loaded');
        a = [];
        for (var d in this.o) {
            b = this.o[d].annotation;
            if (b.segment)
                if (c = b.segment, c.g.length)
                    if (c = c.g[0].l || c.g[0].g || c.g[0].o, !c || 2 > c
                        .length)
                        c = null;
                    else {
                        var e = c.length - 1;
                        c = 0 >= c[0].t && 0 >= c[e].t ? null : {
                            start: c[0].t,
                            end: c[e].t
                        };
                    }
            else
                c = null;
            else
                c = null;
            if (e = c)
                if (c = 1000 * e.start, e = 1000 * e.end, 0 == c && (c++,
                        e++), !(e < c)) {
                    var f = {
                        id: d,
                        namespace: 'annotations_module'
                    };
                    'marker' == b.type && (f.style = 'ytp-chapter-marker', f
                        .tooltip = b.A, f.visible = !0);
                    b = new _yt_player.eQ(c, e, f);
                    a.push(b);
                }
        }
        _yt_player.hV(this.g, a);
    }
};
_yt_player.h.lD = function(a) {
    a == this.g.getVideoData().videoId && (this.loaded ? loadLegacyAnnotations(this) : this
        .load());
};
_yt_player.h.yM = function(a) {
    a = a.getId();
    var b = this.o[a];
    b && !b.o && (b = b.annotation, showAnnotation(this, a), logCardShown(this.Ya, b.g));
};
_yt_player.h.zM = function(a) {
    hideAnnotation(this, a.getId());
};
_yt_player.h.Iz = function(a) {
    a && (a.hide(), triggerAnnotationEvent(this, 'shown', !1, a.annotation.id), this.Xn(a
        .annotation, 'hidden'));
};
_yt_player.h.CE = function(a) {
    a && (a.show(), triggerAnnotationEvent(this, 'shown', !0, a.annotation.id), this.Xn(a
        .annotation, 'shown'));
};
_yt_player.h.wU = function(a, b, c) {
    var d = this.o[a];
    if (d && b.value != c) {
        b.value = c;
        var e = !1;
        addTriggerListener(d.annotation, function(a) {
            e = e || a.value;
        });
        updateAnnotationVisibility(this, a, b, e);
    }
};
_yt_player.h.vQ = function(a) {
    if (a && a.id) {
        var b = a.Ta();
        if (b) {
            var c = getLinkValue(b);
            if (c) {
                var d = (0, _yt_player.z)(this.Xn, this, a, 'click');
                if ('new' == determineTargetWindow(c, b.target) || shouldOpenUrlInCurrentPage(this, b))
                    d(), d = null;
                logCardClick(this.Ya, a.g, d);
            }
        }
    }
};
_yt_player.h.Xn = function(a, b) {
    executeActions(a, function(c) {
        if (c.trigger == b && 'openUrl' == c.type && c.url) {
            var d = this.g.getVideoData(),
                e;
            if (!(e = !shouldOpenUrlInCurrentPage(this, c.url))) {
                e = getVideoIdFromUrl(c.url);
                var f = getVideoStartTimeFromUrl(c.url);
                e ? (d.videoId == e ? this.g.ac(f || 0) : (d = getModuleContext(
                    this).l, _yt_player.H0(d.app, e,
                    void 0, void 0, void 0, void 0,
                    void 0), f && getModuleContext(this).l.gd() && getModuleContext(
                    this).l.ac(f)), d = !0) : d = !1;
                e = !d;
            }
            e && (e = _yt_player.Y(this.g), (d = getLinkValue(c.url)) ? (f =
                    extractDomainParts(d), e && 'com' == f[0] && 'google' == f[
                        1] && 'plus' == f[2] && (e = _yt_player
                        .Ga(addChannelIdToUrl, e.pageId, e.Sc), d =
                        new _yt_player.vm(d), _yt_player.zm(d,
                            e(d.o)), d = d.toString())) : d =
                null, d && (this.g.hd(), c = determineTargetWindow(d, c.url
                    .target), e = a.itct, 'ei' in _yt_player.dE(
                        d) && (d = _yt_player.Vg(d, 'ei')),
                    _yt_player.vV(d, 'current' == c ? '_top' :
                        void 0, {
                            itct: e
                        })));
        }
    }, this);
};
_yt_player.h.SR = function() {
    triggerAnnotationEvent(this, 'playerControlShow', !1);
};
_yt_player.h.bU = function() {
    triggerAnnotationEvent(this, 'playerControlShow', !0);
};
_yt_player.h.AM = function(a) {
    triggerAnnotationEvent(this, 'rollOver', !0, a.id);
};
_yt_player.h.Ih = function(a) {
    triggerAnnotationEvent(this, 'rollOver', !1, a.id);
};
_yt_player.h.bR = function(a) {
    a && a.id && (this.o[a.id].o = !0, hideAnnotation(this, a.id), logCardClose(this.Ya, a.g),
        this.Xn(a, 'close'), triggerAnnotationEvent(this, 'closed', !0, a.id));
};
_yt_player.h.Vl = function() {
    return !!this.l && this.l.isAvailable();
};
_yt_player.h.WA = function() {
    this.Vl();
    return !!this.l && this.l.B;
};
_yt_player.h.Tt = function(a, b, c) {
    b = void 0 === b ? !1 : b;
    this.Vl();
    this.l && (a ? c ? showCardDrawer(this.l, c, b) : showCardDrawer(this.l,
        'YOUTUBE_DRAWER_AUTO_OPEN', b) : hideCardDrawer(this.l));
};
_yt_player.h.St = function(a, b) {
    this.g.R(a ? 'cardsteasershow' : 'cardsteaserhide', b);
};
_yt_player.h.V = function() {
    _yt_player.Y(this.g).C.unsubscribe('vast_info_card_add', this.lD, this);
    _yt_player.mq(this.g.getRootNode(), 'ytp-iv-drawer-open');
    for (var a = this.M, b = 0, c = a.length; b < c; b++)
        _yt_player.oG(a[b]);
    this.M.length = 0;
    _yt_player.sV.prototype.V.call(this);
};
var g4 = {},
    nza = 'ontouchstart' in window.document;
_yt_player.rF(window.document, 'blur', handleEventBehavior, !0);
_yt_player.rF(window.document, 'change', handleEventBehavior, !0);
_yt_player.rF(window.document, 'click', handleEventBehavior);
_yt_player.rF(window.document, 'focus', handleEventBehavior, !0);
_yt_player.rF(window.document, 'mouseover', handleEventBehavior);
_yt_player.rF(window.document, 'mouseout', handleEventBehavior);
_yt_player.rF(window.document, 'mousedown', handleEventBehavior);
_yt_player.rF(window.document, 'keydown', handleEventBehavior);
_yt_player.rF(window.document, 'keyup', handleEventBehavior);
_yt_player.rF(window.document, 'keypress', handleEventBehavior);
_yt_player.rF(window.document, 'cut', handleEventBehavior);
_yt_player.rF(window.document, 'paste', handleEventBehavior);
nza && (_yt_player.rF(window.document, 'touchstart', handleEventBehavior), _yt_player.rF(window
    .document, 'touchend', handleEventBehavior), _yt_player.rF(window.document,
    'touchcancel', handleEventBehavior));
_yt_player.h = createUiBase.prototype;
_yt_player.h.pe = function(a) {
    return _yt_player.$d(a, getUiClassName(this));
};
_yt_player.h.unregister = function() {
    _yt_player.VF(this.H);
    this.H.length = 0;
    _yt_player.HN(this.F);
    this.F.length = 0;
};
_yt_player.h.init = _yt_player.y;
_yt_player.h.dispose = _yt_player.y;
_yt_player.h.addBehavior = function(a, b, c) {
    c = getUiClassName(this, c);
    var d = (0, _yt_player.z)(b, this);
    a in g4 || (g4[a] = new _yt_player.XC());
    g4[a].subscribe(c, d);
    this.D[b] = d;
};
_yt_player.h.removeBehavior = function(a, b, c) {
    if (a in g4) {
        var d = g4[a];
        d.unsubscribe(getUiClassName(this, c), this.D[b]);
        0 >= d.Dc() && (d.dispose(), delete g4[a]);
    }
    delete this.D[b];
};
_yt_player.h.qj = function(a, b, c) {
    var d = this.Ba(a, b);
    if (d && (d = _yt_player.x(d))) {
        var e = _yt_player.$a(arguments, 2);
        _yt_player.ab(e, 0, 0, a);
        d.apply(null, e);
    }
};
_yt_player.h.Ba = function(a, b) {
    return _yt_player.bF(a, b);
};
_yt_player.h.setData = function(a, b, c) {
    _yt_player.aF(a, b, c);
};
_yt_player.A(createButtonUi, createUiBase);
_yt_player.ya(createButtonUi);
_yt_player.h = createButtonUi.prototype;
_yt_player.h.register = function() {
    this.addBehavior('click', this.bG);
    this.addBehavior('keydown', this.sA);
    this.addBehavior('keypress', this.tA);
    addEventListener(this, 'page-scroll', this.hK);
};
_yt_player.h.unregister = function() {
    this.removeBehavior('click', this.bG);
    this.removeBehavior('keydown', this.sA);
    this.removeBehavior('keypress', this.tA);
    closeActiveButtonMenu(this);
    this.l = {};
    createButtonUi.ba.unregister.call(this);
};
_yt_player.h.bG = function(a) {
    a && !a.disabled && (this.toggle(a), this.click(a));
};
_yt_player.h.sA = function(a, b, c) {
    if (!(c.altKey || c.ctrlKey || c.shiftKey || c.metaKey) && (b = getButtonMenu(this,
            a))) {
        var d = function(a) {
                var b = '';
                a.tagName && (b = a.tagName.toLowerCase());
                return 'ul' == b || 'table' == b;
            },
            e;
        d(b) ? e = b : e = findFirstChildElement(b, d);
        if (e) {
            e = e.tagName.toLowerCase();
            if ('ul' == e)
                var f = this.iM;
            else
                'table' == e && (f = this.hM);
            f && handleButtonMenuKeyEvents(this, a, b, c, (0, _yt_player.z)(f, this));
        }
    }
};
_yt_player.h.hK = function() {
    var a = this.l;
    if (0 != _yt_player.Pb(a))
        for (var b in a) {
            var c = a[b],
                d = _yt_player.$d(c.activeButtonNode || c.parentNode, getUiClassName(
                    this));
            if (void 0 == d || void 0 == c)
                break;
            positionButtonMenu(this, d, c, !0);
        }
};
_yt_player.h.tA = function(a, b, c) {
    c.altKey || c.ctrlKey || c.shiftKey || c.metaKey || (a = getButtonMenu(this, a),
        isElementVisible(a) && c.preventDefault());
};
_yt_player.h.hM = function(a, b, c) {
    var d = findHighlightedMenuItem(this, b);
    if (d) {
        b = findElementByTag('table', b);
        var e = findElementByTag('tr', b);
        e = _yt_player.qd(window.document, 'td', null, e).length;
        b = _yt_player.qd(window.document, 'td', null, b);
        d = calculateNextMenuItemIndex(d, b, e, c); -
        1 != d && (highlightMenuItem(this, a, b[d]), c.preventDefault());
    }
};
_yt_player.h.iM = function(a, b, c) {
    if (40 == c.keyCode || 38 == c.keyCode) {
        var d = findHighlightedMenuItem(this, b);
        d && (b = (0, _yt_player.Ld)(_yt_player.qd(window.document, 'li',
                null, b), isElementVisible), d = calculateNextMenuItemIndex(d, b, 1, c), highlightMenuItem(this, a, b[d]),
            c.preventDefault());
    }
};
_yt_player.h.dG = function(a) {
    if (a) {
        var b = getButtonMenu(this, a);
        if (b) {
            a.setAttribute('aria-pressed', 'true');
            a.setAttribute('aria-expanded', 'true');
            b.originalParentNode = b.parentNode;
            b.activeButtonNode = a;
            b.parentNode.removeChild(b);
            var c;
            this.Ba(a, 'button-has-sibling-menu') ? c = a.parentNode : c =
                getButtonMenuRootContainer(this, a);
            c.appendChild(b);
            b.style.minWidth = a.offsetWidth - 2 + 'px';
            var d = createButtonMenuMask(this, a);
            d && c.appendChild(d);
            (c = !!this.Ba(a, 'button-menu-fixed')) && (this.l[generateUniqueId(a)
                .toString()] = b);
            positionButtonMenu(this, a, b, c);
            _yt_player.YF('yt-uix-button-menu-before-show', a, b);
            showElements(b);
            d && showElements(d);
            this.qj(a, 'button-menu-action', !0);
            _yt_player.S(a, getUiClassName(this, 'active'));
            b = (0, _yt_player.z)(this.cG, this, a, !1);
            d = (0, _yt_player.z)(this.cG, this, a, !0);
            c = (0, _yt_player.z)(this.wW, this, a, void 0);
            this.g && getButtonMenu(this, this.g) == getButtonMenu(this, a) || closeActiveButtonMenu(this);
            _yt_player.XF('yt-uix-button-menu-show', a);
            _yt_player.sF(this.o);
            this.o = [
                _yt_player.rF(window.document, 'click', d),
                _yt_player.rF(window.document, 'contextmenu', b),
                _yt_player.rF(window, 'resize', c)
            ];
            this.g = a;
        }
    }
};
_yt_player.h.wW = function(a, b) {
    var c = getButtonMenu(this, a);
    if (c) {
        b && (b instanceof _yt_player.Uc ? c.innerHTML = _yt_player.Vc(b) :
            _yt_player.Sd(c, b));
        var d = !!this.Ba(a, 'button-menu-fixed');
        positionButtonMenu(this, a, c, d);
    }
};
_yt_player.h.cd = function() {
    return _yt_player.J(getUiClassName(this, 'content'), void 0);
};
_yt_player.h.cG = function(a, b, c) {
    c = _yt_player.tF(c);
    var d = _yt_player.$d(c, getUiClassName(this));
    if (d) {
        d = getButtonMenu(this, d);
        var e = getButtonMenu(this, a);
        if (d == e)
            return;
    }
    d = _yt_player.$d(c, getUiClassName(this, 'menu'));
    e = d == getButtonMenu(this, a);
    var f = _yt_player.kq(c, getUiClassName(this, 'menu-item')),
        k = _yt_player.kq(c, getUiClassName(this, 'menu-close'));
    if (!d || e && (f || k))
        closeButtonMenu(this, a), d && b && this.Ba(a,
        'button-menu-indicate-selected') && ((a = _yt_player.J(getUiClassName(this,
            'content'), a)) && _yt_player.Sd(a, getNormalizedElementText(c)), markMenuItemSelected(this, d, c));
};
_yt_player.h.isToggled = function(a) {
    return _yt_player.kq(a, getUiClassName(this, 'toggled'));
};
_yt_player.h.toggle = function(a) {
    if (this.Ba(a, 'button-toggle')) {
        var b = _yt_player.$d(a, getUiClassName(this, 'group')),
            c = getUiClassName(this, 'toggled'),
            d = _yt_player.kq(a, c);
        if (b && this.Ba(b, 'button-toggle-group')) {
            var e = this.Ba(b, 'button-toggle-group');
            b = _yt_player.rd(getUiClassName(this), b);
            (0, _yt_player.B)(b, function(b) {
                b != a || 'optional' == e && d ? (_yt_player.mq(b, c), b
                    .removeAttribute('aria-pressed')) : (_yt_player
                    .S(a, c), b.setAttribute('aria-pressed', 'true')
                    );
            });
        } else
            d ? a.removeAttribute('aria-pressed') : a.setAttribute(
                'aria-pressed', 'true'), _yt_player.pq(a, c);
    }
};
_yt_player.h.click = function(a) {
    if (getButtonMenu(this, a)) {
        var b = getButtonMenu(this, a);
        if (b) {
            var c = _yt_player.$d(b.activeButtonNode || b.parentNode, getUiClassName(
                this));
            c && c != a ? (closeButtonMenu(this, c), _yt_player.XD((0, _yt_player.z)(this
                .dG, this, a), 1)) : isElementVisible(b) ? closeButtonMenu(this, a) : this.dG(a);
        }
        a.focus();
    }
    this.qj(a, 'button-action');
};
_yt_player.A(createCardUi, createUiBase);
_yt_player.h = createCardUi.prototype;
_yt_player.h.pe = function(a) {
    var b = createUiBase.prototype.pe.call(this, a);
    return b ? b : a;
};
_yt_player.h.register = function() {
    addEventListener(this, 'yt-uix-kbd-nav-move-out-done', this.hide);
};
_yt_player.h.dispose = function() {
    hideActiveCard(this);
    createCardUi.ba.dispose.call(this);
};
_yt_player.h.Ba = function(a, b) {
    var c = createCardUi.ba.Ba.call(this, a, b);
    return c ? c : (c = createCardUi.ba.Ba.call(this, a, 'card-config')) && (c =
        _yt_player.x(c)) && c[b] ? c[b] : null;
};
_yt_player.h.show = function(a) {
    var b = this.pe(a);
    if (b) {
        _yt_player.S(b, getUiClassName(this, 'active'));
        var c = createCardElement1(this, a, b);
        if (c) {
            c.cardTargetNode = a;
            c.cardRootNode = b;
            positionCard(this, a, c);
            var d = getUiClassName(this, 'card-visible'),
                e = this.Ba(a, 'card-delegate-show') && this.Ba(b,
                    'card-action');
            this.qj(b, 'card-action', a);
            this.o = a;
            hideElements(c);
            _yt_player.XD((0, _yt_player.z)(function() {
                e || (showElements(c), _yt_player.XF('yt-uix-card-show',
                    b, a, c));
                createCardMask(c);
                _yt_player.S(c, d);
                _yt_player.XF('yt-uix-kbd-nav-move-in-to', c);
            }, this), 10);
        }
    }
};
_yt_player.h.hide = function(a) {
    if (a = this.pe(a)) {
        var b = _yt_player.pd(getUiClassName(this, 'card') + generateUniqueId(a));
        b && (_yt_player.mq(a, getUiClassName(this, 'active')), _yt_player.mq(b, getUiClassName(this,
                'card-visible')), hideElements(b), this.o = null, b
            .cardTargetNode = null, b.cardRootNode = null, b.cardMask &&
            (_yt_player.Kd(b.cardMask), b.cardMask = null));
    }
};
_yt_player.h.uW = function(a, b) {
    var c = this.pe(a);
    if (c) {
        if (b) {
            var d = this.Cc(c);
            if (!d)
                return;
            b instanceof _yt_player.Uc ? d.innerHTML = _yt_player.Vc(b) :
                _yt_player.Sd(d, b);
        }
        _yt_player.kq(c, getUiClassName(this, 'active')) && (c = createCardElement1(this, a, c), positionCard(
            this, a, c), showElements(c), createCardMask(c));
    }
};
_yt_player.h.isActive = function(a) {
    return (a = this.pe(a)) ? _yt_player.kq(a, getUiClassName(this, 'active')) : !1;
};
_yt_player.h.Cc = function(a) {
    var b = a.cardContentNode;
    if (!b) {
        var c = getUiClassName(this, 'content'),
            d = getUiClassName(this, 'card-content');
        (b = (b = this.Ba(a, 'card-id')) ? _yt_player.pd(b) : _yt_player.J(
            c, a)) || (b = window.document.createElement('div'));
        var e = b;
        _yt_player.mq(e, c);
        _yt_player.S(e, d);
        a.cardContentNode = b;
    }
    return b;
};
var v4;
_yt_player.A(createKeyboardNavigationUi, createUiBase);
_yt_player.ya(createKeyboardNavigationUi);
_yt_player.h = createKeyboardNavigationUi.prototype;
_yt_player.h.register = function() {
    this.addBehavior('keydown', this.Bz);
    addEventListener(this, 'yt-uix-kbd-nav-move-in', this.gC);
    addEventListener(this, 'yt-uix-kbd-nav-move-in-to', this.bQ);
    addEventListener(this, 'yt-uix-kbd-move-next', this.hC);
    addEventListener(this, 'yt-uix-kbd-nav-move-to', this.jo);
};
_yt_player.h.unregister = function() {
    this.removeBehavior('keydown', this.Bz);
    _yt_player.sF(v4);
};
_yt_player.h.Bz = function(a, b, c) {
    var d = c.keyCode;
    if (a = _yt_player.$d(a, getUiClassName(this)))
        switch (d) {
            case 13:
            case 32:
                this.gC(a);
                break;
            case 27:
                c.preventDefault();
                c.stopImmediatePropagation();
                a: {
                    for (c = Z1(a, 'kbdNavMoveOut'); !c;) {
                        c = _yt_player.$d(a.parentElement, getUiClassName(this));
                        if (!c)
                            break a;
                        c = Z1(c, 'kbdNavMoveOut');
                    }
                    c = _yt_player.pd(c);
                    this.jo(c);
                    _yt_player.XF('yt-uix-kbd-nav-move-out-done', c);
                }
                break;
            case 40:
            case 38:
                if ((b = c.target) && _yt_player.kq(a, getUiClassName(this, 'list')))
                    switch (d) {
                        case 40:
                            this.hC(b, a);
                            break;
                        case 38:
                            d = window.document.activeElement == a, a = getFocusableListItems(
                                a), b = a.indexOf(b), 0 > b && !d || (
                                b = d ? a.length - 1 : (a.length + b -
                                    1) % a.length, a[b].focus(), highlightListItem(
                                    this, a[b]));
                    }
                c.preventDefault();
        }
};
_yt_player.h.gC = function(a) {
    var b = Z1(a, 'kbdNavMoveIn');
    b = _yt_player.pd(b);
    setMoveOutTarget(this, a, b);
    this.jo(b);
};
_yt_player.h.bQ = function(a) {
    setMoveOutTarget(this, _yt_player.ae(), a);
    this.jo(a);
};
_yt_player.h.jo = function(a) {
    if (a)
        if (_yt_player.Xd(a))
            a.focus();
        else {
            var b = findFirstChildElement(a, function(a) {
                return _yt_player.Da(a) && 1 == a.nodeType ?
                    _yt_player.Xd(a) : !1;
            });
            b ? b.focus() : (a.setAttribute('tabindex', '-1'), a.focus());
        }
};
_yt_player.h.hC = function(a, b) {
    var c = window.document.activeElement == b,
        d = getFocusableListItems(b),
        e = d.indexOf(a);
    0 > e && !c || (c = c ? 0 : (e + 1) % d.length, d[c].focus(), highlightListItem(this,
        d[c]));
};
_yt_player.A(createMenuUi, createUiBase);
_yt_player.ya(createMenuUi);
_yt_player.h = createMenuUi.prototype;
_yt_player.h.register = function() {
    this.addBehavior('click', this.eG);
    this.addBehavior('mouseenter', this.cK);
    addEventListener(this, 'page-scroll', this.rK);
    addEventListener(this, 'yt-uix-kbd-nav-move-out-done', function(a) {
        a = this.pe(a);
        closeMenusInGroup(this, a);
    });
    this.A = new _yt_player.XC();
};
_yt_player.h.unregister = function() {
    this.removeBehavior('click', this.eG);
    this.l = this.g = null;
    _yt_player.sF(flattenArguments(_yt_player.Rb(this.o)));
    this.o = {};
    _yt_player.Lb(this.C, function(a) {
        _yt_player.Kd(a);
    }, this);
    this.C = {};
    _yt_player.$e(this.A);
    this.A = null;
    createMenuUi.ba.unregister.call(this);
};
_yt_player.h.eG = function(a, b, c) {
    a && (b = getMenuTrigger(this, a), !b.disabled && isElementDescendant(c.target, b) && toggleMenu(this, a));
};
_yt_player.h.cK = function(a, b, c) {
    a && _yt_player.kq(a, getUiClassName(this, 'hover')) && (b = getMenuTrigger(this, a), isElementDescendant(c
        .target, b) && toggleMenu(this, a, !0));
};
_yt_player.h.rK = function() {
    this.g && this.l && positionMenu(this, this.l, this.g);
};
_yt_player.h.fG = function(a) {
    if (a) {
        var b = getMenuContent(this, a);
        if (b) {
            _yt_player.YF('yt-uix-menu-before-show', a, b);
            if (this.g)
                isElementDescendant(a, this.g) || closeMenusInGroup(this, this.l);
            else {
                this.l = a;
                this.g = b;
                _yt_player.kq(a, getUiClassName(this, 'sibling-content')) || (_yt_player
                    .Kd(b), window.document.body.appendChild(b));
                var c = getMenuTrigger(this, a).offsetWidth - 2;
                b.style.minWidth = c + 'px';
            }
            (c = getMenuMask(this, a)) && b.parentNode && b.parentNode.insertBefore(
                c, b.nextSibling);
            _yt_player.mq(b, getUiClassName(this, 'content-hidden'));
            positionMenu(this, a, b);
            _yt_player.lq(getMenuTrigger(this, a), [
                getUiClassName(this, 'trigger-selected'),
                'yt-uix-button-toggled'
            ]);
            _yt_player.XF('yt-uix-menu-show', a);
            initializeMenus(b);
            setMenuAccessibilityAttributes(this, a);
            _yt_player.XF('yt-uix-kbd-nav-move-in-to', b);
            var d = (0, _yt_player.z)(this.vX, this, a),
                e = (0, _yt_player.z)(this.eM, this, a);
            c = _yt_player.Fa(a).toString();
            this.o[c] = [
                _yt_player.rF(b, 'click', e),
                _yt_player.rF(window.document, 'click', d)
            ];
            _yt_player.kq(a, getUiClassName(this, 'indicate-selected')) && (d = (0,
                _yt_player.z)(this.fM, this, a), this.o[c].push(
                _yt_player.rF(b, 'click', d)));
            _yt_player.kq(a, getUiClassName(this, 'hover')) && (a = (0, _yt_player.z)(
                this.uX, this, a), this.o[c].push(_yt_player.rF(
                window.document, 'mousemove', a)));
        }
    }
};
_yt_player.h.uX = function(a, b) {
    var c = _yt_player.tF(b);
    if (c) {
        var d = getMenuTrigger(this, a);
        isElementDescendant(c, d) || isElementInActiveMenu(this, c) || closeMenu(this, a);
    }
};
_yt_player.h.vX = function(a, b) {
    var c = _yt_player.tF(b);
    if (c) {
        if (isElementInActiveMenu(this, c)) {
            var d = _yt_player.$d(c, getUiClassName(this, 'content')),
                e = _yt_player.Zd(c, 'LI');
            e && d && _yt_player.Qd(d, e) && _yt_player.YF(
                'yt-uix-menu-item-clicked', c);
            c = _yt_player.$d(c, getUiClassName(this, 'close-on-select'));
            if (!c)
                return;
            d = getMenuForElement(c);
        }
        closeMenusInGroup(this, d || a);
    }
};
_yt_player.h.eM = function(a, b) {
    var c = _yt_player.tF(b);
    c && updateCheckedMenuItem(this, a, c);
};
_yt_player.h.fM = function(a, b) {
    var c = _yt_player.tF(b);
    if (c) {
        var d = getMenuTrigger(this, a);
        if (d && (c = _yt_player.Zd(c, 'LI')))
            if (c = getNormalizedElementText(c).trim(), d.hasChildNodes()) {
                var e = createButtonUi.getInstance();
                (d = _yt_player.J(getUiClassName(e, 'content'), d)) && _yt_player.Sd(d,
                    c);
            } else
                _yt_player.Sd(d, c);
    }
};
_yt_player.A(createClickCardUi, createCardUi);
_yt_player.ya(createClickCardUi);
_yt_player.h = createClickCardUi.prototype;
_yt_player.h.register = function() {
    createClickCardUi.ba.register.call(this);
    this.addBehavior('click', this.Zx, 'target');
    this.addBehavior('click', this.Yx, 'close');
};
_yt_player.h.unregister = function() {
    createClickCardUi.ba.unregister.call(this);
    this.removeBehavior('click', this.Zx, 'target');
    this.removeBehavior('click', this.Yx, 'close');
    for (var a in this.g)
        _yt_player.sF(this.g[a]);
    this.g = {};
    for (a in this.l)
        _yt_player.sF(this.l[a]);
    this.l = {};
};
_yt_player.h.Zx = function(a, b, c) {
    c.preventDefault();
    b = _yt_player.Zd(c.target, 'button');
    if (!b || !b.disabled) {
        b = this.Ba(a, 'card-target');
        var d;
        b ? d = _yt_player.u(b) ? window.document.getElementById(b) : b :
            d = a;
        a = d;
        d = this.pe(a);
        this.Ba(d, 'disabled') || (_yt_player.kq(d, getUiClassName(this, 'active')) ? (
            this.hide(a), _yt_player.mq(d, getUiClassName(this, 'active'))) : (
            this.show(a), _yt_player.S(d, getUiClassName(this, 'active'))));
    }
};
_yt_player.h.show = function(a) {
    createClickCardUi.ba.show.call(this, a);
    var b = this.pe(a),
        c = _yt_player.Fa(a).toString();
    if (!_yt_player.bF(b, 'click-outside-persists')) {
        if (this.g[c])
            return;
        b = _yt_player.rF(window.document, 'click', (0, _yt_player.z)(this
            .ay, this, a));
        var d = _yt_player.rF(window, 'blur', (0, _yt_player.z)(this.ay,
            this, a));
        this.g[c] = [
            b,
            d
        ];
    }
    a = _yt_player.rF(window, 'resize', (0, _yt_player.z)(this.uW, this, a,
        void 0));
    this.l[c] = a;
};
_yt_player.h.hide = function(a) {
    createClickCardUi.ba.hide.call(this, a);
    a = _yt_player.Fa(a).toString();
    var b = this.g[a];
    b && (_yt_player.sF(b), this.g[a] = null);
    if (b = this.l[a])
        _yt_player.sF(b), delete this.l[a];
};
_yt_player.h.ay = function(a, b) {
    var c = 'yt-uix' + (this.B ? '-' + this.B : '') + '-card',
        d = null;
    b.target && (d = _yt_player.$d(b.target, c) || _yt_player.$d(getMenuForElement(b
        .target), c));
    (d = d || _yt_player.$d(window.document.activeElement, c) || _yt_player
        .$d(getMenuForElement(window.document.activeElement), c)) || this.hide(a);
};
_yt_player.h.Yx = function(a) {
    (a = _yt_player.$d(a, getUiClassName(this, 'card'))) && (a = a.cardTargetNode) &&
    this.hide(a);
};
_yt_player.A(createHoverCardUi, createCardUi);
_yt_player.ya(createHoverCardUi);
_yt_player.h = createHoverCardUi.prototype;
_yt_player.h.register = function() {
    this.addBehavior('mouseenter', this.cC, 'target');
    this.addBehavior('mouseleave', this.eC, 'target');
    this.addBehavior('mouseenter', this.dC, 'card');
    this.addBehavior('mouseleave', this.fC, 'card');
};
_yt_player.h.unregister = function() {
    this.removeBehavior('mouseenter', this.cC, 'target');
    this.removeBehavior('mouseleave', this.eC, 'target');
    this.removeBehavior('mouseenter', this.dC, 'card');
    this.removeBehavior('mouseleave', this.fC, 'card');
};
_yt_player.h.cC = function(a) {
    if (S4 != a) {
        S4 && (this.hide(S4), S4 = null);
        var b = (0, _yt_player.z)(this.show, this, a),
            c = (0, window.parseInt)(this.Ba(a, 'delay-show'), 10);
        b = _yt_player.XD(b, -1 < c ? c : 200);
        this.setData(a, 'card-timer', b.toString());
        S4 = a;
        a.alt && (this.setData(a, 'card-alt', a.alt), a.alt = '');
        a.title && (this.setData(a, 'card-title', a.title), a.title = '');
    }
};
_yt_player.h.eC = function(a) {
    var b = (0, window.parseInt)(this.Ba(a, 'card-timer'), 10);
    _yt_player.ZD(b);
    this.pe(a).isCardHidable = !0;
    b = (0, window.parseInt)(this.Ba(a, 'delay-hide'), 10);
    b = -1 < b ? b : 200;
    _yt_player.XD((0, _yt_player.z)(this.KK, this, a), b);
    if (b = this.Ba(a, 'card-alt'))
        a.alt = b;
    if (b = this.Ba(a, 'card-title'))
        a.title = b;
};
_yt_player.h.KK = function(a) {
    this.pe(a).isCardHidable && (this.hide(a), S4 = null);
};
_yt_player.h.dC = function(a) {
    a && (a.cardRootNode.isCardHidable = !1);
};
_yt_player.h.fC = function(a) {
    a && this.hide(a.cardTargetNode);
};
var S4 = null;
var Mya = {
    LOADING: 'loading',
    FG: 'content',
    createHoverCardUi: 'working'
};
_yt_player.h = createDialog.prototype;
_yt_player.h.show = function() {
    if (!this.ka()) {
        this.D = window.document.activeElement;
        if (!this.M) {
            this.l || (this.l = _yt_player.pd('yt-dialog-bg'), this.l || (
                this.l = _yt_player.Ed('div'), this.l.id =
                'yt-dialog-bg', this.l.className = 'yt-dialog-bg',
                window.document.body.appendChild(this.l)));
            var a = window,
                b = a.document;
            var c = 0;
            if (b) {
                c = b.body;
                var d = b.documentElement;
                if (d && c)
                    if (a = _yt_player.wd(a).height, _yt_player.vd(b) && d
                        .scrollHeight)
                        c = d.scrollHeight != a ? d.scrollHeight : d
                        .offsetHeight;
                    else {
                        b = d.scrollHeight;
                        var e = d.offsetHeight;
                        d.clientHeight != e && (b = c.scrollHeight, e = c
                            .offsetHeight);
                        c = b > a ? b > e ? b : e : b < e ? b : e;
                    }
                else
                    c = 0;
            }
            this.l.style.height = c + 'px';
            showElements(this.l);
        }
        this.Jz();
        c = initializeIframes(this);
        hideOtherIframes(c);
        this.B = _yt_player.rF(window.document, 'keydown', (0, _yt_player.z)
            (this.OL, this));
        c = this.g;
        d = _yt_player.UF('player-added', this.Jz, this);
        _yt_player.aF(c, 'player-ready-pubsub-key', d);
        this.T && (this.C = _yt_player.rF(window.document, 'click', (0,
            _yt_player.z)(this.bV, this)));
        showElements(this.g);
        this.o.setAttribute('tabindex', '0');
        focusDialog(this);
        this.H || _yt_player.S(window.document.body, 'yt-dialog-active');
        closeActiveButtonMenu(createButtonUi.getInstance());
        hideActiveCard(createClickCardUi.getInstance());
        hideActiveCard(createHoverCardUi.getInstance());
        _yt_player.XF('yt-ui-dialog-show-complete', this);
    }
};
_yt_player.h.Jz = function() {
    if (!this.X) {
        var a = this.g;
        _yt_player.U(window.document.body, 'hide-players', !0);
        a && _yt_player.U(a, 'preserve-players', !0);
    }
};
_yt_player.h.YQ = function(a) {
    a = a.currentTarget;
    a.disabled || (a = _yt_player.bF(a, 'action') || '', this.dismiss(a));
};
_yt_player.h.dismiss = function(a) {
    if (!this.ka()) {
        this.A.R('pre-all');
        this.A.R('pre-' + a);
        hideElements(this.g);
        hideActiveCard(createClickCardUi.getInstance());
        hideActiveCard(createHoverCardUi.getInstance());
        this.o.setAttribute('tabindex', '-1');
        getVisibleDialogs() || (hideElements(this.l), this.H || _yt_player.mq(window.document.body,
            'yt-dialog-active'), showHiddenPlayers(), showHiddenIframes());
        this.B && (_yt_player.sF(this.B), this.B = null);
        this.C && (_yt_player.sF(this.C), this.C = null);
        var b = this.g;
        if (b) {
            var c = _yt_player.bF(b, 'player-ready-pubsub-key');
            c && (_yt_player.VF(c), removeDataAttribute(b, 'player-ready-pubsub-key'));
        }
        this.A.R('post-all');
        _yt_player.XF('yt-ui-dialog-hide-complete', this);
        'cancel' == a && _yt_player.XF('yt-ui-dialog-cancelled', this);
        this.A && this.A.R('post-' + a);
        this.D && this.D.focus();
    }
};
_yt_player.h.setTitle = function(a) {
    _yt_player.Sd(_yt_player.J('yt-dialog-title', this.g), a);
};
_yt_player.h.OL = function(a) {
    _yt_player.XD((0, _yt_player.z)(function() {
        this.K || 27 != a.keyCode || this.dismiss('cancel');
    }, this), 0);
    9 == a.keyCode && a.shiftKey && _yt_player.kq(window.document
        .activeElement, 'yt-dialog-fg') && a.preventDefault();
};
_yt_player.h.bV = function(a) {
    'yt-dialog-base' == a.target.className && this.dismiss('cancel');
};
_yt_player.h.ka = function() {
    return this.J;
};
_yt_player.h.dispose = function() {
    isElementVisible(this.g) && this.dismiss('dispose');
    _yt_player.sF(this.F);
    this.F.length = 0;
    _yt_player.XD((0, _yt_player.z)(function() {
        this.D = null;
    }, this), 0);
    this.I = this.o = null;
    this.A.dispose();
    this.A = null;
    this.J = !0;
};
_yt_player.h.CJ = function(a) {
    a.stopPropagation();
    focusDialog(this);
};
_yt_player.va('yt.ui.Dialog', createDialog, void 0);
_yt_player.A(createOverlayUi, createUiBase);
_yt_player.ya(createOverlayUi);
_yt_player.h = createOverlayUi.prototype;
_yt_player.h.register = function() {
    this.addBehavior('click', this.yv, 'target');
    this.addBehavior('click', this.hide, 'close');
    initializeOverlay(this);
};
_yt_player.h.unregister = function() {
    createOverlayUi.ba.unregister.call(this);
    this.removeBehavior('click', this.yv, 'target');
    this.removeBehavior('click', this.hide, 'close');
    this.A && (_yt_player.VF(this.A), this.A = null);
    this.l && (_yt_player.sF(this.l), this.l = null);
};
_yt_player.h.yv = function(a) {
    if (!this.g || !isElementVisible(this.g.g)) {
        var b = this.pe(a);
        a = getDialogElement(b, a);
        b || (b = a ? a.overlayParentNode : null);
        if (b && a) {
            var c = !!this.Ba(b, 'disable-shortcuts') || !1,
                d = !!this.Ba(b, 'disable-outside-click-dismiss') || !1;
            this.g = new createDialog(a, c);
            this.o = b;
            var e = _yt_player.J('yt-dialog-fg', a);
            if (e) {
                var f = this.Ba(b, 'overlay-class') || '',
                    k = this.Ba(b, 'overlay-style') || 'default',
                    l = this.Ba(b, 'overlay-shape') || 'default';
                f = f ? f.split(' ') : [];
                f.push(getUiClassName(this, k));
                f.push(getUiClassName(this, l));
                _yt_player.lq(e, f);
            }
            this.g.show();
            _yt_player.XF('yt-uix-kbd-nav-move-to', e || a);
            initializeOverlay(this);
            c || d || (c = (0, _yt_player.z)(function(a) {
                    _yt_player.kq(a.target, 'yt-dialog-base') &&
                        closeOverlay(this);
                }, this), a = _yt_player.J('yt-dialog-base', a), this
                .l = _yt_player.rF(a, 'click', c));
            this.qj(b, 'overlay-shown');
            _yt_player.XF('yt-uix-overlay-shown', b);
        }
    }
};
_yt_player.h.Cc = function(a) {
    return _yt_player.J('yt-dialog-content', a.overlayContentNode || a);
};
_yt_player.h.hide = function(a) {
    a && a.disabled || _yt_player.XF('yt-uix-overlay-hide');
};
_yt_player.h.show = function(a) {
    this.yv(a);
};
_yt_player.A(createTooltipUi, createUiBase);
_yt_player.ya(createTooltipUi);
_yt_player.h = createTooltipUi.prototype;
_yt_player.h.register = function() {
    this.addBehavior('mouseover', this.xp);
    this.addBehavior('mouseout', this.Oi);
    this.addBehavior('focus', this.Uy);
    this.addBehavior('blur', this.Ix);
    this.addBehavior('click', this.Oi);
    this.addBehavior('touchstart', this.TE);
    this.addBehavior('touchend', this.qq);
    this.addBehavior('touchcancel', this.qq);
};
_yt_player.h.unregister = function() {
    this.removeBehavior('mouseover', this.xp);
    this.removeBehavior('mouseout', this.Oi);
    this.removeBehavior('focus', this.Uy);
    this.removeBehavior('blur', this.Ix);
    this.removeBehavior('click', this.Oi);
    this.removeBehavior('touchstart', this.TE);
    this.removeBehavior('touchend', this.qq);
    this.removeBehavior('touchcancel', this.qq);
    this.dispose();
    createTooltipUi.ba.unregister.call(this);
};
_yt_player.h.dispose = function() {
    for (var a in this.l)
        this.Oi(this.l[a]);
    this.l = {};
};
_yt_player.h.xp = function(a) {
    if (!(this.g && 1000 > (0, _yt_player.F)() - this.g)) {
        var b = (0, window.parseInt)(this.Ba(a, 'tooltip-hide-timer'), 10);
        b && (removeDataAttribute(a, 'tooltip-hide-timer'), _yt_player.ZD(b));
        b = (0, _yt_player.z)(function() {
            showTooltip(this, a);
            removeDataAttribute(a, 'tooltip-show-timer');
        }, this);
        var c = (0, window.parseInt)(this.Ba(a, 'tooltip-show-delay'),
            10) || 0;
        b = _yt_player.XD(b, c);
        this.setData(a, 'tooltip-show-timer', b.toString());
        a.title && (this.setData(a, 'tooltip-text', getTooltipText(this, a)), a.title =
            '');
        b = _yt_player.Fa(a).toString();
        this.l[b] = a;
    }
};
_yt_player.h.Oi = function(a) {
    var b = (0, window.parseInt)(this.Ba(a, 'tooltip-show-timer'), 10);
    b && (_yt_player.ZD(b), removeDataAttribute(a, 'tooltip-show-timer'));
    b = (0, _yt_player.z)(function() {
        if (a) {
            var b = _yt_player.pd(generateTooltipId(this, a));
            b && (manageSharedTooltipMask(b), _yt_player.Kd(b), removeDataAttribute(a, 'content-id'));
            b = _yt_player.pd(generateTooltipId(this, a, 'arialabel'));
            _yt_player.Kd(b);
        }
        removeDataAttribute(a, 'tooltip-hide-timer');
    }, this);
    b = _yt_player.XD(b, 50);
    this.setData(a, 'tooltip-hide-timer', b.toString());
    if (b = this.Ba(a, 'tooltip-text'))
        a.title = b;
    b = _yt_player.Fa(a).toString();
    delete this.l[b];
};
_yt_player.h.Uy = function(a, b) {
    this.g = 0;
    this.xp(a, b);
};
_yt_player.h.Ix = function(a) {
    this.g = 0;
    this.Oi(a);
};
_yt_player.h.TE = function(a, b, c) {
    c.changedTouches && (this.g = 0, (a = findTargetElementForEvent(b, getUiClassName(this), c.changedTouches[0]
        .target)) && this.xp(a, b));
};
_yt_player.h.qq = function(a, b, c) {
    c.changedTouches && (this.g = (0, _yt_player.F)(), (a = findTargetElementForEvent(b, getUiClassName(this), c
        .changedTouches[0].target)) && this.Oi(a));
};
var T4 = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
_yt_player.va('yt.uix.widgets_', T4, void 0);
_yt_player.A(K4, _yt_player.yN);
_yt_player.A(L4, _yt_player.yN);
_yt_player.A(cza, _yt_player.yN);
_yt_player.A(M4, _yt_player.yN);
var oza = new _yt_player.zN('subscription-subscribe', L4),
    pza = new _yt_player.zN('subscription-subscribe-loading', K4),
    qza = new _yt_player.zN('subscription-subscribe-loaded', K4),
    rza = new _yt_player.zN('subscription-subscribe-success', cza),
    sza = new _yt_player.zN('subscription-unsubscribe', M4),
    tza = new _yt_player.zN('subscription-unsubscirbe-loading', K4),
    uza = new _yt_player.zN('subscription-unsubscribe-loaded', K4),
    vza = new _yt_player.zN('subscription-unsubscribe-success', K4),
    wza = new _yt_player.zN('subscription-enable-ypc', K4),
    xza = new _yt_player.zN('subscription-disable-ypc', K4);
var O4 = {},
    N4 = [];
_yt_player.A(createSubscriptionButtonUi, createUiBase);
_yt_player.ya(createSubscriptionButtonUi);
createSubscriptionButtonUi.prototype.register = function() {
    this.addBehavior('click', this.kw);
    subscribeToEvent(this, pza, this.NC);
    subscribeToEvent(this, qza, this.gG);
    subscribeToEvent(this, rza, this.kU);
    subscribeToEvent(this, tza, this.NC);
    subscribeToEvent(this, uza, this.gG);
    subscribeToEvent(this, vza, this.xU);
    subscribeToEvent(this, wza, this.AR);
    subscribeToEvent(this, xza, this.uR);
};
createSubscriptionButtonUi.prototype.unregister = function() {
    this.removeBehavior('click', this.kw);
    createSubscriptionButtonUi.ba.unregister.call(this);
};
createSubscriptionButtonUi.prototype.isSubscribed = function(a) {
    return !!this.Ba(a, 'is-subscribed');
};
var R4 = {
        pw: 'hover-enabled',
        vG: 'yt-uix-button-subscribe',
        wG: 'yt-uix-button-subscribed',
        zY: 'ypc-enabled',
        DG: 'yt-uix-button-subscription-container',
        EG: 'yt-subscription-button-disabled-mask-container'
    },
    Q4 = {
        QY: 'channel-external-id',
        HG: 'subscriber-count-show-when-subscribed',
        IG: 'subscriber-count-tooltip',
        JG: 'subscriber-count-title',
        D_: 'href',
        M_: 'insecure',
        Ew: 'is-subscribed',
        C1: 'parent-url',
        logVisualElementShown: 'clicktracking',
        bI: 'show-unsub-confirm-dialog',
        isCreatorEndscreen: 'show-unsub-confirm-time-frame',
        jI: 'style-type',
        fx: 'subscribed-timestamp',
        gx: 'subscription-id',
        j3: 'target',
        DI: 'ypc-enabled'
    };
_yt_player.h = createSubscriptionButtonUi.prototype;
_yt_player.h.kw = function(a) {
    var b = this.Ba(a, 'href'),
        c = this.Ba(a, 'insecure');
    if (b)
        a = this.Ba(a, 'target') || '_self', window.open(b, a);
    else if (!c)
        if (_yt_player.ZV()) {
            b = this.Ba(a, 'channel-external-id');
            c = this.Ba(a, 'clicktracking');
            var d = getYpcData(this, a),
                e = this.Ba(a, 'parent-url');
            if (this.Ba(a, 'is-subscribed')) {
                var f = this.Ba(a, 'subscription-id'),
                    k = new M4(b, f, d, a, c, e);
                shouldShowUnsubscribeConfirmation(this, a) ? eza(a, b).then(function() {
                    _yt_player.BN(sza, k);
                }) : _yt_player.BN(sza, k);
            } else
                _yt_player.BN(oza, new L4(b, d, c, e));
        } else
            handleSubscriptionClick(this, a);
};
_yt_player.h.NC = function(a) {
    this.nj(a.g, this.nE, !0);
};
_yt_player.h.gG = function(a) {
    this.nj(a.g, this.nE, !1);
};
_yt_player.h.kU = function(a) {
    this.nj(a.g, this.tE, !0, a.l);
};
_yt_player.h.xU = function(a) {
    this.nj(a.g, this.tE, !1);
};
_yt_player.h.AR = function(a) {
    this.nj(a.g, this.uJ);
};
_yt_player.h.uR = function(a) {
    this.nj(a.g, this.nJ);
};
_yt_player.h.tE = function(a, b, c) {
    b ? (this.setData(a, Q4.Ew, 'true'), c && this.setData(a, Q4.gx, c),
        this.Ba(a, Q4.bI) && (b = new $1(), this.setData(a, Q4.fx, (b
            .getTime() / 1000).toString()))) : (removeDataAttribute(a, Q4.Ew), removeDataAttribute(a, Q4
        .fx), removeDataAttribute(a, Q4.gx));
    updateSubscriptionButtonState(this, a);
};
_yt_player.h.nE = function(a, b) {
    var c = _yt_player.$d(a, R4.DG);
    _yt_player.U(c, R4.EG, b);
    a.setAttribute('aria-busy', b ? 'true' : 'false');
    a.disabled = b;
};
_yt_player.h.uJ = function(a) {
    var b = !!this.Ba(a, 'ypc-item-type'),
        c = !!this.Ba(a, 'ypc-item-id');
    !this.Ba(a, 'ypc-enabled') && b && c && (_yt_player.S(a, 'ypc-enabled'),
        this.setData(a, Q4.DI, 'true'));
};
_yt_player.h.nJ = function(a) {
    this.Ba(a, 'ypc-enabled') && (_yt_player.mq(a, 'ypc-enabled'), removeDataAttribute(a,
        'ypc-enabled'));
};
_yt_player.h.QI = function(a, b, c) {
    var d = _yt_player.$a(arguments, 2);
    (0, _yt_player.B)(a, function(a) {
        b.apply(this, _yt_player.Xa(a, d));
    }, this);
};
_yt_player.h.nj = function(a, b, c) {
    var d = getSubscriptionButtonsForChannel(this, a);
    d = _yt_player.Xa([d], _yt_player.$a(arguments, 1));
    this.QI.apply(this, d);
};
_yt_player.iY.annotations_module = createAnnotationsModule;
_yt_player.iY.creatorendscreen = isCreatorEndscreen;
var U4 = createSubscriptionButtonUi.getInstance(),
    V4 = getUiClassName(U4);
V4 in T4 || (U4.register(), addEventListener(U4, 'yt-uix-init-' + V4, U4.init), addEventListener(U4,
    'yt-uix-dispose-' + V4, U4.dispose), T4[V4] = U4);