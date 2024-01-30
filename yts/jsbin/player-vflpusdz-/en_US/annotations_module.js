var _____WB$wombat$assign$function_____ = function(name) {
  return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};

if (!self.__WB_pmw) {
  self.__WB_pmw = function(obj) {
      this.__WB_source = obj;
      return this;
  }
}

{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  (function(ytPlayer) {
      var window = this;
      var ova = function(a, b) {
              var c = !1,
                  d = a.subscribe("ROOT_MENU_REMOVED", function(a) {
                          c || (c = !0, this.Ud(d), b.apply(void 0, arguments))
                      },
                      a)
          },
          pva = function(a, b, c, d) {
              c = (0, ytPlayer.z)(c, d || a.l);
              b = ytPlayer.AF(b, "change", c, "iv-card-poll-choice-input");
              a.g.push(b)
          },
          qva = function(a) {
              a.g || (a.g = new ytPlayer.XC, ytPlayer.N(a, a.g));
              return a.g
          },
          U1 = function(a) {
              a.R("cardstatechange", ytPlayer.cV(a) && ytPlayer.dV(a) ? 1 : 0)
          },
          rva = function(a) {
              for (var b = [], c = 0; c < arguments.length; c++) {
                  var d = arguments[c];
                  if (ytPlayer.Aa(d))
                      for (var e = 0; e < d.length; e += 8192) {
                          var f = ytPlayer.$a(d, e, e + 8192);
                          f = rva.apply(null, f);
                          for (var k = 0; k < f.length; k++) b.push(f[k])
                      } else b.push(d)
              }
              return b
          },
          sva = function(a, b, c, d) {
              if (null != a)
                  for (a = a.firstChild; a;) {
                      if (b(a) && (c.push(a), d) || sva(a, b, c, d)) return !0;
                      a = a.nextSibling
                  }
              return !1
          },
          V1 = function(a, b) {
              var c = [];
              return sva(a, b, c, !0) ? c[0] : void 0
          },
          vva = function(a, b, c) {
              if (!(a.nodeName in tva))
                  if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                  else if (a.nodeName in uva) b.push(uva[a.nodeName]);
              else
                  for (a = a.firstChild; a;) vva(a, b, c), a = a.nextSibling
          },
          W1 = function(a) {
              if (ytPlayer.Xta && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
              else {
                  var b = [];
                  vva(a, b, !0);
                  a = b.join("")
              }
              a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
              a = a.replace(/\u200B/g, "");
              ytPlayer.Xta || (a = a.replace(/ +/g, " "));
              " " != a && (a = a.replace(/^\s*/, ""));
              return a
          },
          wva = function(a) {
              return new ytPlayer.bh(a.left, a.top, a.right - a.left, a.bottom - a.top)
          },
          X1 = function(a) {
              return "rtl" == ytPlayer.uh(a, "direction")
          },
          Ava = function(a) {
              var b = ytPlayer.uh(a, "fontSize");
              var c = (c = b.match(xva)) && c[0] || null;
              if (b && "px" == c) return (0, window.parseInt)(b, 10);
              if (ytPlayer.yd) {
                  if (String(c) in yva) return ytPlayer.Oh(a, b, "left", "pixelLeft");
                  if (a.parentNode && 1 == a.parentNode.nodeType && String(c) in zva) return a = a.parentNode, c = ytPlayer.uh(a, "fontSize"), ytPlayer.Oh(a, b == c ? "1em" : b, "left", "pixelLeft")
              }
              c = ytPlayer.K("SPAN", {
                  style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
              });
              a.appendChild(c);
              b = c.offsetHeight;
              ytPlayer.Kd(c);
              return b
          },
          Y1 = function(a, b) {
              this.start = a < b ? a : b;
              this.end = a < b ? b : a
          },
          Z1 = function(a, b) {
              if (/-[a-z]/.test(b)) return null;
              if (ytPlayer.ek && a.dataset) {
                  if (ytPlayer.kc() && !(b in a.dataset)) return null;
                  var c = a.dataset[b];
                  return void 0 === c ? null : c
              }
              return a.getAttribute("data-" + ytPlayer.Hb(b))
          },
          $1 = function(a, b, c, d, e, f, k) {
              this.date = ytPlayer.ua(a) ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, k || 0) : new Date(a && a.getTime ? a.getTime() : (0, ytPlayer.F)())
          },
          c2 = function(a) {
              a = ytPlayer.Fa(a);
              delete a2[a];
              ytPlayer.Yb(a2) && b2 && b2.stop()
          },
          Cva = function() {
              b2 || (b2 = new ytPlayer.Yt(function() {
                      Bva()
                  },
                  20));
              var a = b2;
              a.isActive() || a.start()
          },
          Bva = function() {
              var a = (0, ytPlayer.F)();
              ytPlayer.Lb(a2, function(b) {
                  Dva(b, a)
              });
              ytPlayer.Yb(a2) || Cva()
          },
          Eva = function(a, b) {
              ytPlayer.bf.call(this, a);
              this.coords = b.coords;
              this.x = b.coords[0];
              this.y = b.coords[1];
              this.z = b.coords[2];
              this.duration = b.duration;
              this.progress = b.progress;
              this.fps = b.C;
              this.state = b.g
          },
          d2 = function(a, b, c, d) {
              ytPlayer.ut.call(this);
              if (!ytPlayer.Aa(a) || !ytPlayer.Aa(b)) throw Error("Start and end parameters must be arrays");
              if (a.length != b.length) throw Error("Start and end points must be the same length");
              this.l = a;
              this.D = b;
              this.duration = c;
              this.B = d;
              this.coords = [];
              this.progress = this.C = 0;
              this.A = null
          },
          Dva = function(a, b) {
              b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
              a.progress = (b - a.startTime) / (a.endTime - a.startTime);
              1 < a.progress && (a.progress = 1);
              a.C = 1E3 / (b - a.A);
              a.A = b;
              Fva(a, a.progress);
              1 == a.progress ? (a.g = 0, c2(a), a.wd(), a.xm()) : a.kb() && a.Iu()
          },
          Fva = function(a, b) {
              ytPlayer.Ca(a.B) && (b = a.B(b));
              a.coords = Array(a.l.length);
              for (var c = 0; c < a.l.length; c++) a.coords[c] = (a.D[c] - a.l[c]) * b + a.l[c]
          },
          e2 = function(a, b, c, d, e) {
              d2.call(this, b, c, d, e);
              this.element = a
          },
          f2 = function(a, b, c, d, e) {
              if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
              e2.apply(this, arguments)
          },
          Gva = function(a) {
              return Math.pow(a, 3)
          },
          Hva = function(a) {
              return 3 * a * a - 2 * a * a * a
          },
          Iva = function(a, b) {
              return (b & 8 && X1(a) ? b ^ 4 : b) & -9
          },
          Jva = function(a, b, c, d, e, f, k) {
              a = a.clone();
              var l = Iva(b, c);
              c = ytPlayer.Kh(b);
              k = k ? k.clone() : c.clone();
              a = ytPlayer.WC(a, k, l, d, e, f);
              if (a.status & 496) return a.status;
              ytPlayer.wh(b, ytPlayer.gh(a.rect));
              k = ytPlayer.fh(a.rect);
              ytPlayer.kd(c, k) || (d = k, e = ytPlayer.md(b), f = ytPlayer.vd(ytPlayer.od(e).g), !ytPlayer.yd || ytPlayer.rc("10") || f && ytPlayer.rc("8") ? (b = b.style, ytPlayer.rh ? b.MozBoxSizing = "border-box" : ytPlayer.Ad ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(d.width, 0) + "px", b.height = Math.max(d.height, 0) + "px") : (e = b.style, f ? (f = ytPlayer.Qh(b), b = ytPlayer.Th(b), e.pixelWidth = d.width - b.left - f.left - f.right - b.right, e.pixelHeight = d.height - b.top -
                  f.top - f.bottom - b.bottom) : (e.pixelWidth = d.width, e.pixelHeight = d.height)));
              return a.status
          },
          g2 = function(a, b, c, d, e, f, k) {
              var l;
              if (l = c.offsetParent) {
                  var m = "HTML" == l.tagName || "BODY" == l.tagName;
                  if (!m || "static" != ytPlayer.uh(l, "position")) {
                      var n = ytPlayer.Ch(l);
                      if (!m) {
                          m = X1(l);
                          var p;
                          if (p = m) {
                              p = ytPlayer.bM && ytPlayer.Mn(10);
                              var r = ytPlayer.Uta && 0 <= ytPlayer.Cb(ytPlayer.Fua, 10);
                              p = ytPlayer.rh || p || r
                          }
                          m = p ? -l.scrollLeft : !m || ytPlayer.oH && ytPlayer.rc("8") || "visible" == ytPlayer.uh(l, "overflowX") ? l.scrollLeft : l.scrollWidth - l.clientWidth - l.scrollLeft;
                          n = ytPlayer.jd(n, new ytPlayer.hd(m, l.scrollTop))
                      }
                  }
              }
              l = n || new ytPlayer.hd;
              n = ytPlayer.Lh(a);
              (m = ytPlayer.Dh(a)) && ytPlayer.eh(n, wva(m));
              m = ytPlayer.od(a);
              r = ytPlayer.od(c);
              m.g != r.g && (p = m.g.body, r = ytPlayer.Fh(p, ytPlayer.be(r)), r = ytPlayer.jd(r, ytPlayer.Ch(p)), !ytPlayer.yd ||
                  ytPlayer.sc(9) || ytPlayer.vd(m.g) || (r = ytPlayer.jd(r, ytPlayer.zd(m.g))), n.left += r.x, n.top += r.y);
              a = Iva(a, b);
              b = n.left;
              a & 4 ? b += n.width : a & 2 && (b += n.width / 2);
              b = new ytPlayer.hd(b, n.top + (a & 1 ? n.height : 0));
              b = ytPlayer.jd(b, l);
              e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
              var v;
              k && (v = ytPlayer.Dh(c)) && (v.top -= l.y, v.right -= l.x, v.bottom -= l.y, v.left -= l.x);
              return Jva(b, c, d, f, v, k, void 0)
          },
          h2 = function(a, b) {
              a && (a.dataset ? delete a.dataset[ytPlayer.$E(b)] : a.removeAttribute("data-" + b))
          },
          i2 = function(a) {
              var b = a.__yt_uid_key;
              b || (b = (0, ytPlayer.Pua)(), a.__yt_uid_key = b);
              return b
          },
          j2 = function(a, b) {
              a = ytPlayer.pd(a);
              b = ytPlayer.pd(b);
              return !!ytPlayer.Yd(a, function(a) {
                      return a === b
                  },
                  !0, void 0)
          },
          Kva = function(a, b) {
              var c = ytPlayer.qd(window.document, a, null, b);
              return c.length ? c[0] : null
          },
          Lva = function() {
              ytPlayer.U(window.document.body, "hide-players", !1);
              var a = ytPlayer.rd("preserve-players");
              (0, ytPlayer.B)(a, function(a) {
                  ytPlayer.mq(a, "preserve-players")
              })
          },
          Mva = function(a) {
              if (window.document.createEvent) {
                  var b = window.document.createEvent("HTMLEvents");
                  b.initEvent("click", !0, !0);
                  a.dispatchEvent(b)
              } else b = window.document.createEventObject(), a.fireEvent("onclick", b)
          },
          Nva = function(a) {
              this.g = a
          },
          k2 = function(a) {
              var b = {};
              void 0 !== a.g.trackingParams ? b.trackingParams = a.g.trackingParams : (b.veType = a.g.veType, null != a.g.veCounter && (b.veCounter = a.g.veCounter), null != a.g.elementIndex && (b.elementIndex = a.g.elementIndex));
              void 0 !== a.g.dataElement && (b.dataElement = k2(a.g.dataElement));
              void 0 !== a.g.youtubeData && (b.youtubeData = a.g.youtubeData);
              return b
          },
          l2 = function(a) {
              return new Nva({
                  trackingParams: a
              })
          },
          Ova = function() {
              var a = ytPlayer.LG(0),
                  b;
              a ? b = new Nva({
                  veType: a,
                  youtubeData: void 0
              }) : b = null;
              return b
          },
          Pva = function(a, b) {
              (a = ytPlayer.pd(a)) && a.style && (ytPlayer.O(a, b), ytPlayer.U(a, "hid", !b))
          },
          m2 = function(a) {
              return (a = ytPlayer.pd(a)) ? ytPlayer.Nh(a) && !ytPlayer.kq(a, "hid") : !1
          },
          n2 = function(a) {
              (0, ytPlayer.B)(arguments, function(a) {
                  !ytPlayer.Ba(a) || a instanceof window.Element ? Pva(a, !0) : (0, ytPlayer.B)(a, function(a) {
                      n2(a)
                  })
              })
          },
          o2 = function(a) {
              (0, ytPlayer.B)(arguments, function(a) {
                  !ytPlayer.Ba(a) || a instanceof window.Element ? Pva(a, !1) : (0, ytPlayer.B)(a, function(a) {
                      o2(a)
                  })
              })
          },
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
          },
          q2 = function(a, b) {
              ytPlayer.Df.call(this);
              this.El = a;
              this.rs = b;
              this[ytPlayer.gf] = !1
          },
          u2 = function(a, b, c, d) {
              q2.call(this, a, b);
              a = this.rs;
              b = this.la();
              c ? (b.setAttribute("stroke", c.g), b.setAttribute("stroke-opacity", 1), c = c.Cb(), ytPlayer.u(c) && -1 != c.indexOf("px") ? b.setAttribute("stroke-width", (0, window.parseFloat)(c) / Qva(a)) : b.setAttribute("stroke-width", c)) : b.setAttribute("stroke", "none");
              this.fill = d;
              c = this.rs;
              a = this.la();
              if (d instanceof r2) a.setAttribute("fill", d.H), a.setAttribute("fill-opacity", d.I);
              else if (d instanceof s2) {
                  b = "lg-" + d.B + "-" + d.D + "-" + d.C + "-" + d.F + "-" + d.g + "-" + d.l;
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
                      ytPlayer.ua(d.o) && (f += ";stop-opacity:" + d.o);
                      f = t2(c, "stop", {
                          offset: "0%",
                          style: f
                      });
                      e.appendChild(f);
                      f = "stop-color:" + d.l;
                      ytPlayer.ua(d.A) && (f += ";stop-opacity:" + d.A);
                      d = t2(c, "stop", {
                          offset: "100%",
                          style: f
                      });
                      e.appendChild(d);
                      e = Rva(c, b, e)
                  }
                  a.setAttribute("fill", "url(#" + e + ")")
              } else a.setAttribute("fill", "none")
          },
          Sva = function() {},
          Tva = function(a, b) {
              q2.call(this, a, b)
          },
          v2 = function() {
              this.rb = [];
              this.Ka = [];
              this.Ce = []
          },
          w2 = function(a, b, c, d) {
              var e = a.Zd[0] - b * Math.cos(ytPlayer.gd(d)) + b * Math.cos(ytPlayer.gd(d + 90)),
                  f = a.Zd[1] - c * Math.sin(ytPlayer.gd(d)) + c * Math.sin(ytPlayer.gd(d + 90));
              a.rb.push(3);
              a.Ka.push(1);
              a.Ce.push(b, c, d, 90, e, f);
              a.Jm = !1;
              a.Zd = [e, f]
          },
          Vva = function(a, b) {
              for (var c = a.Ce, d = 0, e = 0, f = a.rb.length; e < f; e++) {
                  var k = a.rb[e],
                      l = Uva[k] * a.Ka[e];
                  b(k, c.slice(d, d + l));
                  d += l
              }
          },
          Wva = function(a, b, c, d) {
              u2.call(this, a, b, c, d)
          },
          x2 = function(a, b) {
              this.l = a;
              this.g = b
          },
          y2 = function(a, b, c, d, e) {
              ytPlayer.Tu.call(this, e);
              this.width = a;
              this.height = b;
              this.o = c || null;
              this.K = d || null
          },
          Qva = function(a) {
              var b = a.Hj();
              return b ? b.width / (a.o ? new ytPlayer.I(a.o, a.K) : a.Hj()).width : 0
          },
          s2 = function(a, b, c, d, e, f, k, l) {
              this.B = a;
              this.D = b;
              this.C = c;
              this.F = d;
              this.g = e;
              this.l = f;
              this.o = ytPlayer.t(k) ? k : null;
              this.A = ytPlayer.t(l) ? l : null
          },
          r2 = function(a, b) {
              this.H = a;
              this.I = null == b ? 1 : b
          },
          z2 = function(a, b) {
              q2.call(this, a, b)
          },
          Xva = function(a, b, c, d) {
              u2.call(this, a, b, c, d)
          },
          A2 = function(a, b, c, d, e) {
              y2.call(this, a, b, c, d, e);
              this.l = {};
              this.M = ytPlayer.Ad && !ytPlayer.rc(526);
              this.I = new ytPlayer.Lm(this)
          },
          t2 = function(a, b, c) {
              a = a.H.g.createElementNS("http://www.w3.org/2000/svg", b);
              if (c)
                  for (var d in c) a.setAttribute(d, c[d]);
              return a
          },
          B2 = function(a, b, c, d) {
              b = t2(a, "path", {
                  d: Yva(b)
              });
              c = new Xva(b, a, c, d);
              a.B.la().appendChild(c.la())
          },
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
                          b.push("A", d[0], d[1], 0, 180 < Math.abs(c) ? 1 : 0, 0 < c ? 1 : 0, d[4], d[5]);
                          break;
                      case 4:
                          b.push("Z")
                  }
              });
              return b.join(" ")
          },
          Rva = function(a, b, c) {
              if (b in a.l) return a.l[b];
              var d = "_svgdef_" + Zva++;
              c.setAttribute("id", d);
              a.l[b] = d;
              a.F.appendChild(c);
              return d
          },
          $va = function() {
              C2 || (C2 = new ytPlayer.sg(400), C2.start());
              return C2
          },
          bwa = function(a, b, c) {
              var d = ytPlayer.vG;
              a = {
                  csn: a,
                  parentVisualElement: k2(b),
                  visualElements: (0, ytPlayer.G)(c, function(a) {
                      return k2(a)
                  })
              };
              awa(d, {
                  attachChild: a
              })
          },
          D2 = function(a, b) {
              ytPlayer.wG("visualElementShown", {
                  csn: a,
                  ve: k2(b),
                  eventType: 1
              })
          },
          E2 = function(a, b) {
              ytPlayer.wG("visualElementGestured", {
                  csn: a,
                  ve: k2(b),
                  gestureType: "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"
              })
          },
          awa = function(a, b) {
              b.eventTimeMs = Math.round(ytPlayer.hG());
              b.lactMs = ytPlayer.uG();
              ytPlayer.dG({
                      endpoint: "log_interaction",
                      payload: b
                  },
                  a)
          },
          F2 = function(a, b) {
              function c(a) {
                  return a.baseUrl
              }

              function d(a) {
                  if (a) {
                      var b = a.simpleText;
                      if (b) return b;
                      if (a.runs) return (0, ytPlayer.G)(a.runs, function(a) {
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
              f.impressionUrls = (0, ytPlayer.G)(a.impressionUrls || [], c);
              f.skip = a.skipEndscreen;
              f.visualElement = l2(a.trackingParams);
              var k = (0, ytPlayer.G)(a.elements || [], function(a, f) {
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
                  l.clickUrls = (0, ytPlayer.G)(v.loggingUrls || [], c);
                  l.qn = ytPlayer.Tb(k, "title", "accessibility", "accessibilityData", "label");
                  l.impressionUrls = (0, ytPlayer.G)(k.impressionUrls || [], c);
                  l.MK = (0, ytPlayer.G)(k.hovercardShowUrls || [], c);
                  l.Rd = {
                      itct: k.trackingParams
                  };
                  l.visualElement = l2(k.trackingParams);
                  if ("VIDEO" == m) l.targetUrl = v.urlEndpoint ? v.urlEndpoint.url : e(v.watchEndpoint), l.Oo = !1, l.mq = b, l.videoDuration =
                      d(k.videoDuration);
                  else if ("PLAYLIST" == m) l.targetUrl = v.urlEndpoint ? v.urlEndpoint.url : e(v.watchEndpoint), l.Oo = !1, l.mq = b, l.playlistLength = d(k.playlistLength);
                  else if ("CHANNEL" == m) {
                      if (m = ytPlayer.Tb(v, "browseEndpoint", "browseId")) l.channelId = m, l.targetUrl = "/channel/" + m;
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
                                          var H = d(m.subscriberCountWithUnsubscribeText);
                                          var L = d(m.subscriberCountText)
                                      } else H = d(m.subscriberCountText), L = d(m.subscriberCountWithSubscribeText);
                                      var T = null;
                                      if (k.signinEndpoint && (T = ytPlayer.Tb(k, "signinEndpoint", "webNavigationEndpointData", "url"), !T)) {
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
                                              classic: k.useClassicSubscribeButton
                                          };
                                          break a
                                      }
                                  } k = void 0
                          }
                          l.subscribeButton = k
                      }
                      else l.subscribersText = d(k.subscribersText)
                  } else "WEBSITE" == m && (l.targetUrl =
                      ytPlayer.Tb(v, "urlEndpoint", "url"), l.Oo = !0, l.mq = "new", l.iconUrl = k.icon.thumbnails[0].url);
                  return l
              });
              f.elements = (0, ytPlayer.Ld)(k, function(a) {
                  return !!a
              });
              return f
          },
          G2 = function(a) {
              ytPlayer.sV.call(this, a);
              this.o = null;
              this.J = !1;
              this.B = null;
              this.l = {};
              this.F = {};
              this.D = this.A = null;
              this.K = [];
              a = ytPlayer.Y(a);
              this.M = ytPlayer.HM(a) || ytPlayer.IM(a);
              this.LE = !0;
              this.H = 0;
              this.I = new ytPlayer.cp(null);
              this.C = new ytPlayer.FF(this);
              ytPlayer.N(this, this.C);
              this.C.O(this.g, "crn_creatorendscreen", this.EM);
              this.C.O(this.g, "crx_creatorendscreen", this.FM);
              this.C.O(this.g, "resize", this.XA);
              this.C.O(window, "focus", this.RU);
              this.load();
              var b = ytPlayer.Ed("STYLE");
              (window.document.getElementsByTagName("HEAD")[0] || window.document.body).appendChild(b);
              ytPlayer.Ze(this, function() {
                  ytPlayer.Kd(b)
              });
              b.sheet && (b.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0), b.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                  0))
          },
          H2 = function(a) {
              return "creator-endscreen-editor" === a
          },
          I2 = function(a, b) {
              ytPlayer.kV(a.g, "creatorendscreen");
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
                  var d = new ytPlayer.eQ(b.startMs, 0x7ffffffffffff, {
                      id: "ytp-ce-in-endscreen",
                      namespace: "creatorendscreen"
                  });
                  c.push(d);
                  ytPlayer.Y(a.g).l || (a.A = new ytPlayer.W({
                      G: "div",
                      L: "ytp-ce-shadow"
                  }), ytPlayer.mV(a.g, a.A.element, 4), a.D = new ytPlayer.MV(a.A, 200));
                  for (d = 0; d < b.elements.length;
                      ++d) {
                      var e = b.elements[d],
                          f = dwa(a, e);
                      a.l[e.id] = f;
                      a.F[e.id] = e;
                      ytPlayer.mV(a.g, f.element, 4);
                      var k = new ytPlayer.eQ(e.startMs, e.endMs, {
                          id: "ytp-ce-element-" + e.id,
                          namespace: "creatorendscreen"
                      });
                      c.push(k);
                      ewa(a, f, e)
                  }
                  ytPlayer.hV(a.g, c);
                  a.XA()
              }
          },
          cwa = function(a) {
              var b =
                  Ova(),
                  c = ytPlayer.MG();
              c && b && bwa(c, b, [a.o.visualElement])
          },
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
                                          da: ["ytp-ce-video-title", "yt-ui-ellipsis", "yt-ui-ellipsis-2"],
                                          P: {
                                              dir: ytPlayer.dp(a.I, b.title || "")
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
                      c = new ytPlayer.W(c);
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
                                          da: ["ytp-ce-playlist-title", "yt-ui-ellipsis", "yt-ui-ellipsis-2"],
                                          P: {
                                              dir: ytPlayer.dp(a.I, b.title || "")
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
                      c = new ytPlayer.W(c);
                      break;
                  case "CHANNEL":
                      c = {
                          G: "div",
                          da: ["ytp-ce-element", "ytp-ce-channel", b.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"],
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
                                                          da: ["ytp-ce-channel-title", "ytp-ce-link"],
                                                          P: {
                                                              href: b.targetUrl,
                                                              target: "_blank",
                                                              tabindex: "-1",
                                                              dir: ytPlayer.dp(a.I, b.title || "")
                                                          },
                                                          aa: b.title
                                                      },
                                                      b.subscribeButton ? {
                                                          G: "div",
                                                          L: "ytp-ce-subscribe-container",
                                                          N: [{
                                                              G: "div",
                                                              L: "ytp-ce-channel-subscribe"
                                                          }]
                                                      } : "", b.subscribersText ? {
                                                          G: "div",
                                                          L: "ytp-ce-channel-subscribers-text",
                                                          aa: b.subscribersText
                                                      } : "", b.metadata ? {
                                                          G: "div",
                                                          da: ["ytp-ce-channel-metadata", "yt-ui-ellipsis",
                                                              "yt-ui-ellipsis-3"
                                                          ],
                                                          aa: b.metadata
                                                      } : ""
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
                      c = new ytPlayer.W(c);
                      var d = ytPlayer.qd(window.document, "div", "ytp-ce-channel-subscribe", c.element)[0];
                      if (b.subscribeButton) {
                          ytPlayer.S(d, "ytp-ce-subscribe-button");
                          if (ytPlayer.Y(a.g).l) {
                              var e = null;
                              var f = b.Rd.itct
                          } else e = "endscreen", f = null;
                          e = new ytPlayer.y_(b.subscribeButton.subscribeText, b.subscribeButton.subscribeCount, b.subscribeButton.unsubscribeText, b.subscribeButton.unsubscribeCount, b.subscribeButton.enabled, b.subscribeButton.classic, b.channelId,
                              !!b.subscribeButton.subscribed, e, f, b.subscribeButton.signinUrl, a.g);
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
                                                                  dir: ytPlayer.dp(a.I, b.title || "")
                                                              },
                                                              aa: b.title
                                                          },
                                                          {
                                                              G: "div",
                                                              L: "ytp-ce-website-metadata",
                                                              aa: b.metadata
                                                          },
                                                          {
                                                              G: "a",
                                                              da: ["ytp-ce-website-goto", "ytp-ce-link"],
                                                              P: {
                                                                  href: b.targetUrl,
                                                                  target: "_blank",
                                                                  tabindex: "-1"
                                                              },
                                                              aa: b.callToAction
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
                          c = new ytPlayer.W(c)
              }
              b.g && ytPlayer.S(c.element, "ytp-ce-placeholder");
              return c
          },
          J2 = function(a) {
              if (a.By) var b =
                  a.By.thumbnails;
              return fwa(b ? b[b.length - 1].url : null)
          },
          fwa = function(a) {
              return a ? {
                  style: "background-image: url(" + a + ")"
              } : {}
          },
          ewa = function(a, b, c) {
              function d() {
                  k(1)
              }

              function e() {
                  k(-1)
              }
              b.U("mouseenter", (0, ytPlayer.z)(a.Ut, a, b, c));
              b.U("mouseleave", (0, ytPlayer.z)(a.Ru, a, b, c));
              ytPlayer.Y(a.g).l || b.U("click", (0, ytPlayer.z)(function(a) {
                      ytPlayer.S(a.element, "ytp-ce-element-hover")
                  },
                  a, b));
              b.U("click", (0, ytPlayer.z)(a.HC, a, c));
              b.U("keypress", (0, ytPlayer.z)(a.HC, a, c));
              b.U("focus", (0, ytPlayer.z)(function(a, b) {
                      this.Ut(a, b)
                  },
                  a, b, c));
              b.U("blur", (0, ytPlayer.z)(function(a, b) {
                      this.Ru(a, b)
                  },
                  a, b, c));
              b.U("touchstart", (0, ytPlayer.z)(a.Ut, a, b, c));
              var f = ytPlayer.J("ytp-ce-expanding-overlay-hider", b.element);
              f && b.O(f, "touchstart", function(a) {
                  a = a || window.event;
                  a.cancelBubble = !0;
                  a.stopPropagation && a.stopPropagation();
                  ytPlayer.mq(b.element, "ytp-ce-element-hover");
                  ytPlayer.mq(b.element, "ytp-ce-force-expand")
              });
              b.U("keydown", (0, ytPlayer.z)(function(a, b) {
                      this.LE = 9 == b.keyCode && !b.shiftKey
                  },
                  a, b));
              var k = (0, ytPlayer.z)(function(a, b, c) {
                      this.H += c;
                      0 < this.H ? (ytPlayer.S(a.element, "ytp-ce-force-expand"), K2(this, b.id, !0)) : (ytPlayer.mq(a.element, "ytp-ce-force-expand"), ytPlayer.mq(a.element, "ytp-ce-element-hover"), K2(this, b.id, !1))
                  },
                  a, b, c);
              a = (0, ytPlayer.z)(function(a, b) {
                      b && (a.U("blur", function() {
                          ytPlayer.Nh(b) && this.LE && b.focus()
                      }), a.O(b, "focus", d), a.O(b, "blur", e))
                  },
                  a, b);
              a(ytPlayer.J("ytp-sb-subscribe", b.element));
              a(ytPlayer.J("ytp-sb-unsubscribe", b.element));
              b.U("focus", d);
              b.U("blur", e)
          },
          K2 = function(a, b, c) {
              a.A && (c ? a.D.show() : a.D.hide());
              for (var d in a.l) d != b && ytPlayer.U(a.l[d].element, "ytp-ce-element-shadow-show", c)
          },
          L2 = function(a, b, c) {
              function d() {
                  f || (e++, e == b.length && (k.stop(), c && c()))
              }
              if (!b || H2(ytPlayer.Y(a.g).playerStyle)) c && c();
              else {
                  b = gwa(a, b);
                  var e = 0,
                      f = !1,
                      k = new ytPlayer.Yt(function() {
                              f = !0;
                              c && c()
                          },
                          1E3, a);
                  k.start();
                  for (a = 0; a < b.length; a++) ytPlayer.FE(b[a], d)
              }
          },
          M2 = function(a, b, c) {
              L2(a, b.clickUrls, c);
              (a = ytPlayer.MG()) && b.Oo && E2(a, b.visualElement)
          },
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
          },
          hwa = function(a, b) {
              return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function(a) {
                  var c = (0, window.unescape)(a);
                  c = c.substring(1, c.length - 1);
                  return b[c] ? (0, window.escape)(b[c]) : a
              })
          },
          N2 = function(a) {
              return ytPlayer.Aa(a) && a.length ? a[0] : a
          },
          O2 = function(a) {
              var b = /.+/;
              return ytPlayer.u(a) && null != b && null != a && a.match(b) ? a : ""
          },
          P2 = function(a, b) {
              if (null == a) return b;
              var c = (0, window.parseInt)(a, 0);
              if ((0, window.isNaN)(c)) return b;
              c = c.toString(16);
              return "#" + "000000".substring(0, 6 - c.length) + c
          },
          Q2 = function(a) {
              return ytPlayer.u(a) ? a : ""
          },
          R2 = function(a, b, c) {
              for (var d in b)
                  if (b[d] == a) return a;
              return c
          },
          S2 = function(a, b) {
              return "true" == a || "false" == a ? "true" == a : b
          },
          T2 = function(a, b) {
              return ytPlayer.u(a) ? (0, window.parseFloat)(a) : b
          },
          U2 = function(a, b, c, d, e) {
              a = (0, window.parseFloat)(a);
              if (null != a && !(0, window.isNaN)(a)) {
                  if (d) return ytPlayer.dd(a, b, c);
                  if (a >= b && a <= c) return a
              }
              return e
          },
          iwa = function(a) {
              if (null == a) return 0;
              if ("never" == a) return -1;
              a = a.split(":");
              if (3 < a.length) return 0;
              var b = 0,
                  c = 1;
              (0, ytPlayer.B)(a, function(a) {
                  a = (0, window.parseFloat)(a);
                  0 > a && (c = -c);
                  b = 60 * b + Math.abs(a)
              });
              return c * b
          },
          V2 = function(a, b) {
              if (null == a) return null;
              if (ytPlayer.Ba(a)) {
                  var c = [];
                  (0, ytPlayer.B)(a, function(a) {
                      (a = b(a)) && c.push(a)
                  });
                  return c
              }
              var d = b(a);
              return d ? [d] : []
          },
          jwa = function(a) {
              function b(a) {
                  return null != a && !(0, window.isNaN)(a)
              }
              return (a = a ? new ytPlayer.Zg((0, window.parseFloat)(a.top), (0, window.parseFloat)(a.right), (0, window.parseFloat)(a.bottom), (0, window.parseFloat)(a.left)) : null) && b(a.top) && b(a.right) && b(a.bottom) && b(a.left) ? a : null
          },
          kwa = function(a) {
              function b(a) {
                  return (0, ytPlayer.Ld)(a.split(/ +/), function(a) {
                      return "" != a
                  })
              }
              return null == a ? [] : b(a)
          },
          lwa = function(a, b, c, d) {
              this.value = a;
              this.target = b;
              this.showLinkIcon = c;
              this.g = d
          },
          W2 = function(a) {
              if (!a) return null;
              var b = ytPlayer.Mc(Q2(a.value));
              b = ytPlayer.Jc(b);
              if (!b) return null;
              var c = R2(a.target, mwa, "current");
              return null == c ? null : new lwa(b, c, S2(a.show_link_icon, !0), null != a.pause_on_navigation ? a.pause_on_navigation : !0)
          },
          X2 = function(a) {
              return a.value ? a.value : null
          },
          nwa = function(a, b, c) {
              this.type = a;
              this.trigger = b;
              this.url = c
          },
          qwa = function(a) {
              if (!a) return null;
              var b = R2(a.type, owa),
                  c = R2(a.trigger, pwa),
                  d = N2(a.url);
              d = W2(d ? d : null);
              N2(a.subscribeData);
              return b ? new nwa(b, c, d) : null
          },
          rwa = function(a, b, c) {
              var d = (c = "xx" == c || "xy" == c) ? 640 : 360;
              return (d + ((c ? a.width : a.height) - d) * b) / d
          },
          Y2 = function(a, b, c) {
              var d = (c = "xy" == c || "yy" == c) ? 360 : 640;
              return (d + ((c ? a.height : a.width) - d) * b) / d
          },
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
          },
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
          },
          $2 = function(a, b) {
              var c = uwa(b, vwa(a, new ytPlayer.bh(a.x, a.y, a.Qk, a.o), b.g)),
                  d = b.g,
                  e = c.clone();
              d && !d.contains(c) && (c.width < d.width ? e.left = ytPlayer.dd(c.left, d.left, d.left + d.width - c.width) : (e.left = d.left, e.width = d.width), c.height < d.height ? e.top = ytPlayer.dd(c.top, d.top, d.top + d.height - c.height) : (e.top = d.top, e.height = d.height));
              return e
          },
          vwa = function(a, b, c) {
              var d = a.C,
                  e = a.D,
                  f = a.g ? a.g : "xy",
                  k = rwa(c, a.A, f);
              a = Y2(c, a.l, f);
              f = 640 * b.width * k / 100;
              var l = 360 * b.height * a / 100;
              return new ytPlayer.bh(0 == d ? 640 * b.left * k / 100 : 0 < d ? d : c.width + d - f, 0 == e ? 360 * b.top * a / 100 : 0 < e ? e : c.height + e - l, f, l)
          },
          wwa = function(a) {
              return a ? twa(a, function(a, c, d, e, f, k, l, m, n, p, r) {
                  return new Z2(a, c, d, e, f, k, l, m, n, p, r)
              }) : null
          },
          xwa = function(a, b) {
              this.g = a;
              this.l = b || null
          },
          uwa = function(a, b) {
              var c = a.l ? $2(a.l, new xwa(a.g)) : a.g;
              var d = b.clone(),
                  e = c.left;
              c = c.top;
              e instanceof ytPlayer.hd ? (d.left += e.x, d.top += e.y) : (d.left += e, ytPlayer.ua(c) && (d.top += c));
              return d
          },
          ywa = function(a, b, c, d, e, f, k, l, m, n, p, r, v) {
              Z2.call(this, a, b, c, d, e, l, m, n, p, r, v);
              this.F = f;
              this.H = k
          },
          zwa = function(a) {
              if (!a) return null;
              var b = T2(a.sx, 0),
                  c = T2(a.sy, 0);
              return twa(a, function(a, e, f, k, l, m, n, p, r, v, D) {
                  return new ywa(a, e, f, k, l, b, c, m, n, p, r, v, D)
              })
          },
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
          },
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
                  a = new Bwa(H, L, T, ha, cb, tb, U2(a.opacity1, 0, 100, !0, 100), U2(a.opacity2, 0, 100, !0, 0))
              } else a = null;
              return new Awa(b, c, d, e, f, k, l, m, n, p, r, v, D, a)
          },
          Bwa = function(a, b, c, d, e, f, k, l) {
              this.o = a;
              this.B = b;
              this.A = c;
              this.C = d;
              this.g = e;
              this.l = f;
              this.D = k;
              this.F = l
          },
          Dwa = function(a, b, c, d) {
              this.type = a;
              this.l = b;
              this.g = c;
              this.o = d
          },
          Fwa = function(a) {
              if (!a) return null;
              var b = R2(a.type, Ewa, "rect"),
                  c = V2(a.rectRegion, wwa),
                  d = V2(a.anchoredRegion, zwa);
              a = V2(a.shapelessRegion, wwa);
              return new Dwa(b, c, d, a)
          },
          Gwa = function(a) {
              return a.l && a.l.length ? a.l[0] : a.g && a.g.length ? a.g[0] : a.o && a.o.length ? a.o[0] : null
          },
          Hwa = function(a, b) {
              this.l = a;
              this.g = b
          },
          Iwa = function(a, b) {
              this.state = a;
              this.ref = b
          },
          Kwa = function(a) {
              if (!a) return null;
              var b = R2(a.state, Jwa);
              a = O2(a.ref);
              return b ? new Iwa(b, a) : null
          },
          Lwa = function(a, b, c, d) {
              this.g = a || [];
              this.o = b || [];
              this.A = c;
              this.l = d;
              this.value = !1
          },
          Mwa = function(a) {
              if (!a) return null;
              var b = V2(a.condition, Kwa),
                  c = V2(a.notCondition, Kwa),
                  d = S2(a.show_delay, !1);
              a = S2(a.hide_delay, !1);
              return b || c ? new Lwa(b, c, d, a) : null
          },
          Nwa = function(a, b, c) {
              (0, ytPlayer.B)(a.g, ytPlayer.Ga(b, !1), c);
              (0, ytPlayer.B)(a.o, ytPlayer.Ga(b, !0), c)
          },
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
          },
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
              m ? (O2(m.timeRelative), l = O2(m.spaceRelative), l = (m = V2(m.movingRegion, Fwa)) ? new Hwa(l, m) : null) : l = null;
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
          },
          d3 = function(a) {
              return c3(a, function(a) {
                  return "click" == a.trigger
              })
          },
          c3 = function(a, b) {
              return (0, ytPlayer.Bj)(a.o, b, void 0)
          },
          Rwa = function(a, b, c) {
              (0, ytPlayer.B)(a.o, b, c)
          },
          Swa = function(a, b) {
              return ytPlayer.Ma(a.o, b, void 0)
          },
          Twa = function(a, b, c) {
              (0, ytPlayer.B)(a.D, b, c)
          },
          Uwa = function(a, b) {
              (0, ytPlayer.G)(a.D, b, void 0)
          },
          e3 = function(a) {
              return (a = Vwa(a)) ? Gwa(a) : null
          },
          Vwa = function(a) {
              a.segment ? (a = a.segment, a = a.g.length ? a.g[0] : null) : a = null;
              return a
          },
          Wwa = function(a, b) {
              var c = e3(a);
              return c && b ? Y2(b, c.l, c.g ? c.g : "xy") : 1
          },
          Ywa = function(a, b, c) {
              this.g = {};
              this.o = !1;
              this.B = "ivTrigger:" + a;
              this.l = c;
              Nwa(b, function(a, b) {
                      var c = Xwa(b.state, b.ref);
                      this.l.subscribe(c, (0, ytPlayer.z)(this.A, this, c, a));
                      this.g[c] = a
                  },
                  this)
          },
          Xwa = function(a, b) {
              var c = "ivTriggerCondition:" + a;
              return b ? c + ":" + b : c
          },
          f3 = function() {
              this.g = !1;
              this.B = this.l = null
          },
          g3 = function(a, b, c) {
              a.l ? (a.l.setSize(b, c), a.l.clear()) : (b = new A2(b, c, void 0, void 0, void 0), a.l = b, a.l.zo(), a.B = ytPlayer.K("DIV"), b = a.l.la(), a.B.appendChild(b));
              return a.l
          },
          h3 = function(a, b, c) {
              var d = window.document.createElementNS("http://www.w3.org/2000/svg", a);
              b && ytPlayer.Lb(b, function(a, b) {
                  d.setAttribute(b, a)
              });
              for (var e = 2; e < arguments.length; e++) d.appendChild(arguments[e]);
              return d
          },
          i3 = function(a, b) {
              var c = ":" + (ytPlayer.Su.getInstance().g++).toString(36);
              b.setAttribute("result", c);
              a.appendChild(b);
              return c
          },
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
          },
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
          },
          axa = function(a, b) {
              return b
          },
          bxa = function(a) {
              var b =
                  h3("filter", {
                      filterUnits: "userSpaceOnUse"
                  }),
                  c = "SourceGraphic";
              (0, ytPlayer.B)(a, function(a) {
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
          },
          cxa = function(a) {
              a = (0, ytPlayer.Ld)(a, function(a) {
                  return a in j3
              });
              ytPlayer.ib(a, function(a, c) {
                  return j3[a] - j3[c]
              });
              return a
          },
          dxa = function(a) {
              return ytPlayer.Ma(a, function(a) {
                  return "dropshadow" == a
              }) ? new ytPlayer.Zg(0, 7, 7, 0) : new ytPlayer.Zg(0, 0, 0, 0)
          },
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
          },
          fxa = function(a, b, c, d) {
              var e = a.B;
              e ? a = new s2(e.o * b / 100, e.B * c / 100, e.A * b / 100, e.C * c / 100, e.g, e.l, e.D, e.F) : (b = a.g, a = new r2(a.bgColor, d ? Math.max(b, .9) : b));
              return a
          },
          k3 = function(a, b) {
              var c = ytPlayer.ch(a);
              c.expand(dxa(b));
              return wva(c)
          },
          gxa = function(a, b, c) {
              if (c.length && (b = ytPlayer.qd(window.document, "g", void 0, b), b.length)) {
                  var d = cxa(c);
                  if (d) {
                      c = "effects:" + (d ? d.join("|") : "");
                      var e = c in a.l ? a.l[c] : null;
                      e ? a = e : (d = bxa(d), a = 0 < d.childNodes.length ? Rva(a, c, d) : null)
                  } else a = null;
                  a && b[0].setAttribute("filter", "url(#" + a + ")")
              }
          },
          l3 = function() {
              f3.call(this);
              this.A = 0
          },
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
          },
          m3 = function(a) {
              f3.apply(this, arguments)
          },
          n3 = function(a) {
              f3.apply(this, arguments)
          },
          o3 = function(a) {
              l3.apply(this, arguments)
          },
          p3 = function(a, b, c, d, e) {
              ytPlayer.M.call(this);
              this.g = a;
              this.X = b;
              this.C = c;
              this.ea = d;
              this.ca = e;
              this.H = !1;
              this.W = new ytPlayer.CF(this);
              ytPlayer.N(this, this.W);
              this.M = this.B = this.D = this.K = this.l = null;
              this.Z = !1;
              this.Y = this.I = this.J = null;
              this.wp = new ytPlayer.Uk(this.JO, 100, this);
              ytPlayer.N(this, this.wp);
              this.F = new ytPlayer.Yt(this.Kz, 500, this);
              ytPlayer.N(this, this.F);
              this.T = this.o = this.A = null
          },
          ixa = function(a, b) {
              var c = (0, ytPlayer.z)(function(a, c, f) {
                      c = f ? q3(this, c, (0, ytPlayer.z)(f, this)) : q3(this, c);
                      this.W.U(b, a, c)
                  },
                  a);
              c("mouseover", "E", a.AB);
              c("mouseout", "D", a.Ih);
              c("click", "B");
              c("touchend", "B")
          },
          jxa = function(a) {
              if (a.g.B) {
                  if (c3(a.g, function(a) {
                          return "close" == a.type
                      })) var b = a.l;
                  else a.A = ytPlayer.K("DIV", "annotation-close-button"), ytPlayer.O(a.A, !1), ytPlayer.aF(a.A, "annotation_id", a.g.id), a.l.appendChild(a.A), b = a.A;
                  var c = function(a) {
                      a.stopPropagation()
                  };
                  a.W.U(b, "click", q3(a, "C", c));
                  a.W.U(b, "touchend", q3(a, "C", c))
              }
          },
          q3 = function(a, b, c) {
              return (0, ytPlayer.z)(function(a) {
                      if (this.ca) c && c(a);
                      else if (a.event.target instanceof window.Element) {
                          var d = a.event.target;
                          ytPlayer.O(d, !1);
                          try {
                              var f = window.document.elementFromPoint(a.event.clientX, a.event.clientY);
                              if (ytPlayer.$d(f, "annotation")) {
                                  var k = window.document.createEvent("MouseEvent");
                                  k.initMouseEvent(a.event.type, a.event.bubbles, a.event.cancelable, a.event.view, a.event.detail, a.event.screenX, a.event.screenY, a.event.clientX, a.event.clientY, a.event.ctrlKey, a.event.altKey, a.event.shiftKey, a.event.metaKey, a.event.button, a.event.relatedTarget);
                                  f.dispatchEvent(k)
                              }
                          } finally {
                              ytPlayer.O(d,
                                  !0)
                          }
                      }
                      d = ytPlayer.Lh(a.target);
                      a = new ytPlayer.hd(a.clientX, a.clientY);
                      "D" == b && d.contains(a) || this.ea.R(b, this.g)
                  },
                  a)
          },
          s3 = function(a) {
              if (a.l || a.o) {
                  var b = e3(a.g);
                  if (b) {
                      var c = r3(a);
                      if (a.l) {
                          b = $2(b, c);
                          var d = ytPlayer.W_(ytPlayer.VU(a.C));
                          ytPlayer.Jh(a.l, b.width, b.height);
                          ytPlayer.wh(a.l, b.left, b.top);
                          a.K = new ytPlayer.bh(d.left + b.left, d.top + b.top, b.width, b.height);
                          var e = (e = e3(a.g)) && d ? rwa(d, e.A, e.g ? e.g : "xy") : 1;
                          var f = Wwa(a.g, d);
                          d = a.g.l;
                          d.padding ? d = d.padding : (d = "speech" == a.g.style ? 1.6 : .8, d = new ytPlayer.Zg(d, d, d, d));
                          d = new ytPlayer.Zg(360 * d.top * f / 100, 640 * d.right * e / 100, 360 * d.bottom * f / 100, 640 * d.left * e / 100);
                          a.B && (d.right += 1.5 * c.g.height / 100);
                          a.l.style.padding = d.top + "px " + d.right + "px " + d.bottom + "px " + d.left + "px";
                          "label" ==
                          a.g.style && a.D && (a.D.style.padding = a.l.style.padding);
                          d = c.g;
                          var k = !1,
                              l = 0,
                              m = 0;
                          var n = ytPlayer.W_(ytPlayer.VU(a.C));
                          var p = ytPlayer.eV(a.C);
                          ytPlayer.dh(n, p) ? n = null : (p.top += 20, p.height -= 40, "player_relative" != a.g.C && (p.left -= n.left, p.top -= n.top), n = p);
                          n && (l = n.top - (b.top + b.height), m = b.top - (n.top + n.height), k = 0 < l || 0 < m);
                          if (k && n) {
                              d = l;
                              e = m;
                              if (a.B) {
                                  f = kxa(a, 23, b, d, e);
                                  if (a.A) {
                                      var r = 43 - f.width;
                                      0 < r && (b.left + f.left - r > n.left && (f.left -= r), f.width += r)
                                  }
                                  r = f;
                                  ytPlayer.Jh(a.B, f.width, f.height);
                                  ytPlayer.wh(a.B, f.left, f.top)
                              }
                              a.A && (r ? b = new ytPlayer.hd(r.left + r.width - 23 - 18, a.Z ?
                                  r.top + 2 : r.top + r.height - 18 - 2) : (r = kxa(a, 18, b, d, e), b = new ytPlayer.hd(r.left, r.top), ytPlayer.Jh(a.A, r.width, r.height)), ytPlayer.wh(a.A, b));
                              a.M = new ytPlayer.bh(a.K.left + r.left, a.K.top + r.top, r.width, r.height);
                              a.J = a.W.U(ytPlayer.VU(a.C), "mousemove", a.KO, a)
                          } else a.B && (r = e / f * d.height * 4.2 / 100, r = new ytPlayer.I(r, r), "highlight" == a.g.type || "label" == a.g.style ? (e = 1.5 * d.height / 100, r = new ytPlayer.bh(b.width - r.width - e, b.height - r.height - e, r.width, r.height)) : r = new ytPlayer.bh(b.width - r.width - 3 * d.height / 100, (b.height - r.height) / 2, r.width, r.height), ytPlayer.Jh(a.B, r.width, r.height),
                              ytPlayer.wh(a.B, r.left, r.top)), a.A && (r = 9 <= d.left + d.width - (b.left + b.width), e = 9 <= b.top - d.top, ytPlayer.wh(a.A, r && e ? new ytPlayer.hd(b.width - 9, -9) : r ? new ytPlayer.hd(b.width - 9, 45 < b.height ? 9 : b.height - 9) : e ? new ytPlayer.hd(45 < b.width ? b.width - 9 - 18 : -9, -9) : b.width / d.width > b.height / d.height ? new ytPlayer.hd(45 < b.width ? b.width - 9 - 18 : -9, b.height - 9) : new ytPlayer.hd(-9, 45 < b.height ? 9 : b.height - 9)))
                      }
                      a.o && a.o.o(a.g, c);
                      if (a.l) {
                          c = a.l;
                          b = a.g.l;
                          c.style.color = "highlightText" == a.g.style ? b.C : b.l;
                          r = ytPlayer.W_(ytPlayer.VU(a.C));
                          c.style.fontSize = 360 * b.textSize * Wwa(a.g, r) / 100 + "px";
                          r = a.g.style;
                          c.style.textAlign = b.textAlign ? b.textAlign : "title" == r || "highlightText" == r ? "center" : "left";
                          b.A && (c.style.fontWeight = b.A);
                          a = a.l;
                          c = a.style.overflow;
                          r = (b = ytPlayer.J("annotation-link-icon", a)) ? ytPlayer.Nh(b) : !1;
                          e = (d = ytPlayer.J("annotation-close-button", a)) ? ytPlayer.Nh(d) : !1;
                          r && ytPlayer.O(b, !1);
                          e && ytPlayer.O(d, !1);
                          m = f = "";
                          if (n = ytPlayer.J("inner-text", a)) f = n.style.overflow, m = n.style.position, n.style.overflow = "visible", n.style.position = "static";
                          a.style.overflow = "scroll";
                          if (a.scrollHeight > a.offsetHeight || a.scrollWidth > a.offsetWidth) {
                              l = k = Ava(a);
                              p = 5;
                              for (var v =
                                      Math.floor(k / 2); v;) a.scrollHeight <= a.offsetHeight && a.scrollWidth <= a.offsetWidth ? (p = l, l = Math.min(l + v, k)) : l = Math.max(l - v, p), v = Math.floor(v / 2), a.style.fontSize = l + "px";
                              l != p && (a.scrollHeight > a.offsetHeight || a.scrollWidth > a.offsetWidth) && (a.style.fontSize = p + "px")
                          }
                          a.style.overflow = c;
                          n && (n.style.overflow = f, n.style.position = m);
                          e && ytPlayer.O(d, !0);
                          r && ytPlayer.O(b, !0)
                      }
                  }
              }
          },
          kxa = function(a, b, c, d, e) {
              var f = 0 < e;
              b = new ytPlayer.bh(0, c.height - b, Math.max(c.width, b), b);
              0 < d && (b.top = c.height, 20 < d && (b.height += d - 20), ytPlayer.S(a.l, "annotation-extend-down"));
              f && (b.top = -b.height, 20 < e && (c = e - 20, b.top -= c, b.height += c), ytPlayer.S(a.l, "annotation-extend-up"), a.Z = !0);
              return b
          },
          t3 = function(a) {
              return "label" != a.g.style || a.o.g
          },
          r3 = function(a) {
              var b = ytPlayer.W_(ytPlayer.VU(a.C));
              if ("player_relative" == a.g.C) {
                  var c = ytPlayer.VU(a.C).Oa();
                  b = new ytPlayer.bh(-b.left, -b.top, c.width, c.height)
              } else b = new ytPlayer.bh(0, 0, b.width, b.height);
              return new xwa(b, a.T ? e3(a.T) : null)
          },
          lxa = function(a, b) {
              return b ? new ytPlayer.bh(a.x + b.left, a.y + b.top, b.width, b.height) : null
          },
          u3 = function(a, b, c) {
              ytPlayer.M.call(this);
              this.l = a;
              this.annotation = b;
              this.view = c;
              this.g = null;
              this.o = this.isVisible = !1;
              mxa(b, a)
          },
          mxa = function(a, b) {
              Uwa(a, function(c) {
                  return new Ywa(a.id, c, b)
              })
          },
          nxa = function(a) {
              a.l.unsubscribe("resize", a.zB, a);
              a.l.unsubscribe("onVideoAreaChange", a.mD, a)
          },
          v3 = function(a) {
              a.g && (a.g.stop(), a.g = null)
          },
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
          },
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
          },
          pxa = function(a, b, c) {
              w3.call(this, a, b, c);
              this.H = b.ypc_flow_type;
              this.B = b.innertube_request_params
          },
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
          },
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
          },
          txa = function(a, b, c) {
              w3.call(this, a, b, c);
              this.offers = [];
              a = b.offers || [];
              for (b = 0; b < a.length; b++) this.offers.push(new sxa(a[b]))
          },
          sxa = function(a) {
              this.merchant = ytPlayer.E(a.merchant);
              this.price = ytPlayer.E(a.price)
          },
          uxa = function(a, b, c) {
              w3.call(this, a, b, c);
              this.K = b.ypc_item_type;
              this.H = b.ypc_item_id;
              this.B = b.ypc_flow_type
          },
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
          },
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
          },
          wxa = function(a) {
              this.g = a;
              this.l = {}
          },
          xxa = function(a) {
              var b = {};
              b = (b["iv-event"] = 1, b);
              ytPlayer.bV(a.g, "iv", b, void 0)
          },
          B3 = function(a, b, c, d) {
              if (b) {
                  var e = y3(a, b);
                  a.l[b] = e["p-time"];
                  e["iv-event"] = e.link || e["l-class"] || e["link-id"] ? 2 : 7;
                  b = z3(a, "cta_annotation_shown", e, c);
                  A3(a, e, yxa(b, d))
              }
          },
          C3 = function(a, b, c, d, e, f) {
              if (b) {
                  var k = y3(a, b);
                  k["iv-event"] = 3;
                  k["i-time"] = a.l[b] || "";
                  d && ytPlayer.fc(k, d);
                  b = z3(a, "cta_annotation_clicked", k, e);
                  A3(a, k, b, c, f)
              }
          },
          D3 = function(a, b) {
              if (b) {
                  var c = y3(a, b);
                  c["iv-event"] = 4;
                  c["i-time"] = a.l[b] || "";
                  var d = z3(a, "cta_annotation_closed", c);
                  A3(a, c, d)
              }
          },
          yxa = function(a, b) {
              return b ? (0, ytPlayer.G)(a, ytPlayer.Ga(function(a, b) {
                      return ytPlayer.Um(b, a)
                  },
                  b)) : a
          },
          z3 = function(a, b, c, d) {
              d = d ? ytPlayer.Ya(d) : [];
              if (30 == c["a-type"]) {
                  a: {
                      c = c["a-id"];
                      a = a.g.getVideoData();
                      if (a.Ax) {
                          if ((b = a.Ax[b]) && ytPlayer.hH(b)) {
                              a = ytPlayer.pb("[ANNOTATION_ID]");
                              0 <= b.indexOf("[ANNOTATION_ID]") ? b = b.replace("[ANNOTATION_ID]", c) : 0 <= b.indexOf(a) && (b = b.replace(a, c));
                              break a
                          }
                      } else if (a.Lp) {
                          b = ytPlayer.fE(a.Lp, {
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
          },
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
              }(0, ytPlayer.B)(c || [], function(a) {
                  f++;
                  ytPlayer.FE(a, m)
              });
              e && (f++, 0 != e && a.g.Ni(e, m));
              ytPlayer.bV(a.g, "iv", b, m)
          },
          y3 = function(a, b) {
              var c = {};
              if (b) {
                  var d = new ytPlayer.Cm(b);
                  (0, ytPlayer.B)(d.Bb(), function(a) {
                      c[a] = (0, window.escape)(d.get(a, ""))
                  })
              }
              c["p-time"] = a.g.getCurrentTime().toFixed(2);
              c.ps = ytPlayer.Y(a.g).playerStyle;
              return c
          },
          E3 = function(a, b, c, d, e) {
              e = y3(a, e);
              e["iv-event"] = c;
              b && (e.ei = b);
              e["a-id"] || (e["a-id"] = "card:drawer");
              e["a-type"] = 51;
              A3(a, e, d)
          },
          F3 = function(a, b, c, d) {
              c && (c = y3(a, c), c["iv-event"] = b, A3(a, c, d))
          },
          zxa = function(a, b, c, d, e, f, k) {
              this.g = a;
              this.A = b;
              this.B = c;
              this.videoData = d;
              this.logger = e;
              this.l = f;
              this.o = k
          },
          G3 = function(a, b, c) {
              this.g = a;
              this.A = b;
              this.B = c;
              this.l = new ytPlayer.cp(null)
          },
          Bxa = function(a, b) {
              var c = [];
              (0, ytPlayer.B)(b.choices, function(a) {
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
                                              name: b.B + a.index.toString(),
                                              value: a.index.toString(),
                                              "data-poll-choice-index": a.index.toString()
                                          }
                                      },
                                      {
                                          G: "span",
                                          L: "iv-card-poll-choice-text",
                                          N: [{
                                                  G: "span",
                                                  L: "iv-card-poll-choice-percent"
                                              },
                                              H3(this, "span", void 0, a.desc)
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
              b.A && (e["aria-label"] = ytPlayer.O0("$POLL_TITLE - Sign in to vote.", {
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
              f = new ytPlayer.W({
                  G: "div",
                  da: f,
                  N: d
              });
              d = f.element;
              Axa(b, d);
              pva(a.g.g, d, ytPlayer.Ga(a.D, b), a);
              (0, ytPlayer.B)(ytPlayer.rd("iv-card-poll-choice-input", d), function(a) {
                      this.g.g.U(a, "focus", ytPlayer.Ga(this.o, !0));
                      this.g.g.U(a, "blur", ytPlayer.Ga(this.o, !1))
                  },
                  a);
              b.A && (d = ytPlayer.J("iv-card-sign-in-button", d), a.A(d, b.A, b.id, b.Rd, b.o, b.l.click, 5));
              return f
          },
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
              k = new ytPlayer.W({
                  G: "div",
                  da: k,
                  N: e
              });
              K3(a, k, b, c, d);
              return k
          },
          Dxa = function(a,
              b, c) {
              var d = ["yt-badge",
                      "standalone-ypc-badge-renderer-icon", b.I ? "standalone-ypc-badge-renderer-icon-purchased" : "standalone-ypc-badge-renderer-icon-available"
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
              c = new ytPlayer.W(c);
              K3(a, c, b);
              return c
          },
          N3 = function(a, b) {
              return b.customMessage ? H3(a, "div",
                  "iv-card-message", b.customMessage) : ""
          },
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
          },
          M3 = function(a, b) {
              if (!b.metaInfo || 0 == b.metaInfo.length) return "";
              var c = [];
              (0, ytPlayer.B)(b.metaInfo, function(a) {
                      c.push(H3(this, "li", "", a))
                  },
                  a);
              return {
                  G: "ul",
                  L: "iv-card-meta-info",
                  N: c
              }
          },
          H3 = function(a, b, c, d) {
              c ? ytPlayer.u(c) ? c = {
                  "class": c
              } : ytPlayer.Aa(c) && (c = {
                  "class": c.join(" ")
              }) : c = {};
              c.dir = ytPlayer.dp(a.l, d);
              return {
                  G: b,
                  P: c,
                  aa: d
              }
          },
          Cxa = function(a, b) {
              if (!b.customMessage) return "";
              var c = ["iv-card-action", "iv-card-primary-link"],
                  d = {};
              b.A && (c.push("iv-card-action-icon"), d.style = "background-image: url(" + b.A + ");");
              d.dir = ytPlayer.dp(a.l, b.customMessage);
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
          },
          Axa = function(a, b) {
              var c = 0;
              (0, ytPlayer.B)(a.choices, function(a) {
                  c += a.count
              });
              c = c || 1;
              for (var d = 0; d < a.choices.length; d++) {
                  var e = a.choices[d],
                      f = ytPlayer.J(a.B + "-" + e.index.toString(), b);
                  e = e.count / c;
                  null == a.g && (e = 0);
                  ytPlayer.U(f.getElementsByTagName("label")[0], "iv-card-poll-choice-checked", a.g == d);
                  f.getElementsByTagName("input")[0].checked = a.g == d;
                  var k = Math.floor(100 * e).toFixed(0),
                      l = ytPlayer.J("iv-card-poll-choice-percent", f);
                  ytPlayer.Sd(l, ytPlayer.O0("$PERCENT%", {
                      PERCENT: k
                  }));
                  f = ytPlayer.J("iv-card-poll-result-bar", f);
                  ytPlayer.ph(f, "transform", "scaleX(" + e.toFixed(2) + ")")
              }
              ytPlayer.U(b, "iv-card-poll-voted", null != a.g);
              ytPlayer.U(b, "iv-card-poll-expanded",
                  null != a.g && 1 < a.choices.length)
          },
          Exa = function(a, b, c, d) {
              d ? (c && a.g.videoData.za || a.g.l.hd(), a.g.l.isFullscreen() && ytPlayer.YU(a.g.l), C3(a.g.logger, b.o, d, void 0, b.l.click, 5)) : b.url && a.B(b.url, b.id, b.Rd, b.o, b.l.click || [], 5)
          },
          K3 = function(a, b, c, d, e) {
              c.g && Fxa(a, ytPlayer.rd("iv-card-sign-in-button", b.element), c, c.g, e);
              c.url && Fxa(a, ytPlayer.rd("iv-click-target", b.element), c, c.url, d)
          },
          Fxa = function(a, b, c, d, e) {
              (0, ytPlayer.B)(b, function(a) {
                      if (e) {
                          var b = (0, ytPlayer.z)(function(a) {
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
          },
          Gxa = function(a) {
              var b = 0; -
              1 != a.indexOf("h") && (a = a.split("h"), b = 3600 * a[0], a = a[1]); -
              1 != a.indexOf("m") && (a = a.split("m"), b = 60 * a[0] + b, a = a[1]); -
              1 != a.indexOf("s") ? (a = a.split("s"), b = 1 * a[0] + b) : b = 1 * a + b;
              return b
          },
          O3 = function(a) {
              var b;
              (b = a) && !(b = 1 < a.length ? "/" == a.charAt(0) && "/" != a.charAt(1) : "/" == a) && (b = Hxa(a), b = "com" == b[0] && "youtube" == b[1] || "be" == b[0] && "youtu" == b[1]);
              return b ? -1 == a.indexOf("/redirect?") : !1
          },
          Hxa = function(a) {
              a = a.replace(/^(https?:)?\/\//, "");
              a = a.split("/", 1);
              return !a || 1 > a.length || !a[0] ? [] : a[0].toLowerCase().split(".").reverse()
          },
          Ixa = function(a) {
              a = X2(a);
              if (!a) return null;
              a = a.replace(/https?:\/\//g, "");
              var b;
              (b = !O3(a)) || (b = ytPlayer.Gg(ytPlayer.Fg(a)[5] || null) || "", b = b.split("/"), b = "/" + (1 < b.length ? b[1] : ""), b = "/watch" != b);
              if (b) return null;
              b = ytPlayer.dE(a);
              if (!b || !b.v) return null;
              if (b = b.t) return Gxa(b);
              a = a.split("#", 2);
              return !a || 2 > a.length ? null : (a = ytPlayer.bE(a[1])) && a.t ? Gxa(a.t) : -1
          },
          Jxa = function(a) {
              a = X2(a);
              a = a.replace(/https?:\/\//g, "");
              return O3(a) ? (a = ytPlayer.dE(a)) && a.v ? a.v : null : null
          },
          Kxa = function(a, b, c) {
              c = c.replace(/\/(u|b)\/[0-9]+/g, "");
              var d = /^[0-9]+$/;
              a && d.test(a) && (c = "/b/" + a + c);
              b && d.test(b) && (c = "/u/" + b + c);
              return c
          },
          P3 = function(a, b) {
              return b ? b : O3(a) ? "current" : "new"
          },
          Q3 = function(a, b) {
              ytPlayer.M.call(this);
              this.Ga = a;
              this.context = b;
              this.Yv = !1;
              this.Y = 0
          },
          R3 = function(a, b, c, d, e, f) {
              b = new ytPlayer.eQ(b, c, {
                  id: d
              });
              ytPlayer.N(a, b);
              b.namespace = "annotations_module";
              e && qva(b).subscribe("onEnter", e, a);
              f && qva(b).subscribe("onExit", f, a);
              ytPlayer.hV(a.context.l, [b])
          },
          Lxa = function(a) {
              return (0, ytPlayer.F)() - a.Y
          },
          Mxa = function(a, b, c, d, e, f) {
              var k = X2(b);
              if (k) {
                  var l = P3(k, b.target),
                      m = (0, ytPlayer.z)(function() {
                              b.g && this.context.l.hd();
                              ytPlayer.vV(k || "", "current" == l ? "_top" : void 0, c)
                          },
                          a);
                  "new" == l && (m(), m = null);
                  var n = {};
                  n.interval = Lxa(a);
                  C3(a.context.logger, d, m, n, e, f);
                  O3(k) || (a = ytPlayer.MG(), d = c.itct, a && d && E2(a, l2(d)))
              }
          },
          U3 = function(a, b, c) {
              Q3.call(this, b, c);
              var d = this;
              this.g = a;
              this.M = null;
              this.T = this.ya = this.B = this.sa = !1;
              this.X = null;
              this.J = new ytPlayer.Yt(ytPlayer.y, c.B.useTabletControls ? 4E3 : 3E3);
              ytPlayer.N(this, this.J);
              this.na = new ytPlayer.Yt(ytPlayer.y);
              ytPlayer.N(this, this.na);
              this.C = new G3(c, (0, ytPlayer.z)(this.Zi, this), (0, ytPlayer.z)(this.Uo, this));
              this.H = new ytPlayer.W({
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
                                  da: ["iv-drawer-close-button", "ytp-button"],
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
              ytPlayer.N(this, this.H);
              this.D = this.H.element;
              this.ca = new ytPlayer.MV(this.H, 330);
              ytPlayer.N(this, this.ca);
              this.Da = ytPlayer.J("iv-drawer-header-text", this.D);
              this.A = ytPlayer.J("iv-drawer-content", this.D);
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
          },
          Sxa = function(a, b) {
              var c = b && b.data && b.data.card_type;
              if (c && Nxa[c]) {
                  c = new Nxa[c](b.id, b.data, b.g);
                  if (!a.sa) {
                      ytPlayer.lq(a.la(), ["html5-stop-propagation", "iv-drawer-manager"]);
                      ytPlayer.mV(a.g, a.D, 5);
                      Oxa(a);
                      a.K = ytPlayer.J("ytp-cards-button", a.g.getRootNode());
                      var d = ytPlayer.J("iv-drawer-close-button", a.D);
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
                      ytPlayer.ab(a.o, f, 0, d);
                      e.ua(a.A, f);
                      a.Fn();
                      c.autoOpen ? R3(a, c.startMs, 0x8000000000000, c.id, ytPlayer.Ga(a.MV, d)) : (e = 1E3 * a.context.l.getCurrentTime(), 5E3 > e && e > c.startMs && a.kE(d), R3(a, c.startMs, c.startMs + 1,
                          c.id, ytPlayer.Ga(a.kE, d)), V3(a))
                  }
              }
          },
          Txa = function(a, b) {
              b.data.autoOpenMs && R3(a, b.data.autoOpenMs, 0x8000000000000, "", function() {
                  S3(a, "YOUTUBE_DRAWER_AUTO_OPEN")
              });
              b.data.autoCloseMs && R3(a, b.data.autoCloseMs, 0x8000000000000, "", function() {
                  T3(a)
              });
              var c = b.data.headerText;
              ytPlayer.Sd(a.Da, c);
              a.K && a.K.setAttribute("title", c);
              b.data.eventId && (a.M = b.data.eventId);
              a.ea = l2(b.data.trackingParams);
              a.I = l2(b.data.closeTrackingParams);
              a.ga = l2(b.data.iconTrackingParams)
          },
          Pxa = function(a, b) {
              var c = Uxa(a, b);
              c && (c == a.l && (a.l = null), a.g.kB(c.hc.id), ytPlayer.Kd(c.ur), ytPlayer.Va(a.o, c), a.Fn(), V3(a))
          },
          S3 = function(a, b, c, d) {
              if (!a.B) {
                  a.ca.show();
                  a.Z = new ytPlayer.Yt(function() {
                          ytPlayer.S(a.context.l.getRootNode(), "ytp-iv-drawer-open")
                      },
                      0);
                  a.Z.start();
                  a.X = ytPlayer.rF(a.A, "mousewheel", (0, ytPlayer.z)(a.ZM, a));
                  a.B = !0;
                  a.Y = (0, ytPlayer.F)();
                  E3(a.context.logger, a.M, 7, void 0, d && d.hc ? d.hc.o : void 0);
                  var e = ytPlayer.MG();
                  e && a.ea && a.I && (D2(e, a.ea), D2(e, a.I));
                  var f = {
                      TRIGGER_TYPE: b
                  };
                  (0, ytPlayer.B)(a.o, function(b) {
                      b.BA || (b.BA = !0, B3(a.context.logger, b.hc.o, b.hc.l.BL, f));
                      e && D2(e, b.hc.C)
                  });
                  U1(a.g);
                  c && (a.F = new ytPlayer.Yt(function() {
                          a.fa = a.K;
                          a.ra.focus()
                      },
                      330), a.F.start())
              }
          },
          T3 = function(a) {
              a.B && (a.ca.hide(), ytPlayer.sF(a.X), a.X = null, ytPlayer.mq(a.context.l.getRootNode(), "ytp-iv-drawer-open"), a.B = !1, U1(a.g), a.F && a.F.stop(), a.F = new ytPlayer.Yt(function() {
                      a.fa && (a.fa.focus(), a.fa = null)
                  },
                  330), a.F.start())
          },
          Oxa = function(a) {
              var b = ytPlayer.J("iv-drawer-close-button", a.D);
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
                  a.T = ytPlayer.kq(a.g.getRootNode(), "ytp-autohide")
              });
              a.ha.push(ytPlayer.UF("iv-teaser-shown", a.YL, a));
              a.ha.push(ytPlayer.UF("iv-teaser-clicked", a.XL, a))
          },
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
                      d = new ytPlayer.W(d);
                      K3(c, d, b);
                      return d;
                  case "donation":
                      return c = a.C, d = (0, ytPlayer.z)(c.C, c, b), L3(c, b, d, d);
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
                                          aa: b.playlistVideoCount.toString()
                                      }]
                                  }), {
                                      G: "div",
                                      L: "iv-card-content",
                                      N: [N3(c, b), H3(c, "h2", "iv-card-primary-link", b.title), M3(c, b)]
                                  }]
                              }]
                          },
                          d = new ytPlayer.W(d), K3(c, d, b), d;
                  case "poll":
                      return Bxa(a.C, b);
                  case "productListing":
                      c = a.C;
                      var e = !ytPlayer.Ra(b.offers);
                      d = ["iv-card"];
                      var f = "",
                          k = Cxa(c, b);
                      e && (d.push("iv-card-product-listing"), f = "iv-card-primary-link",
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
                                      style: "background-image: url(" + b.imageUrl + ");",
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
                      d = new ytPlayer.W(d);
                      f = ytPlayer.Ed("span");
                      ytPlayer.Sd(f, "You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.");
                      d.Mb(f, "adInfo");
                      K3(c, d, b);
                      return d;
                  case "tip":
                      return c = a.C, d = (0, ytPlayer.z)(c.F, c, b), L3(c, b, d, d);
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
                                      N: [N3(c, b), H3(c, "h2", "iv-card-primary-link", b.title), M3(c, b), d]
                                  }]
                              }]
                          },
                          d = new ytPlayer.W(d), K3(c, d, b), d
              }
              return null
          },
          Rxa = function(a, b) {
              if (0 == a.o.length) return 0;
              var c = ytPlayer.Na(a.o, function(a) {
                  return b.hc.startMs > a.hc.startMs || b.hc.startMs == a.hc.startMs && b.hc.timestamp >= a.hc.timestamp ? !0 : !1
              });
              return -1 == c ? 0 : c + 1
          },
          Vxa = function(a) {
              return a.l ? "productListing" == a.l.hc.type : (0, ytPlayer.dm)(a.o, function(a) {
                  return "productListing" == a.hc.type
              })
          },
          V3 = function(a) {
              ytPlayer.U(a.g.getRootNode(), "ytp-cards-shopping-active", Vxa(a))
          },
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
              } else ytPlayer.sH(a.H, !0), a.A.scrollTop = b.ur.offsetTop, ytPlayer.sH(a.H, !1)
          },
          W3 = function(a) {
              return a.l && a.l.hc ? a.l.hc : a.o[0] && a.o[0].hc ? a.o[0].hc : null
          },
          Uxa = function(a, b) {
              return ytPlayer.Ma(a.o, function(a) {
                  return a.hc.id == b
              })
          },
          X3 = function(a, b, c) {
              Q3.call(this, a, b);
              this.annotation = c;
              this.isActive = !1
          },
          Xxa = function(a) {
              var b = a.annotation.data;
              "start_ms" in b && "end_ms" in b && R3(a, a.annotation.data.start_ms, a.annotation.data.end_ms, a.annotation.id, function() {
                      a.show()
                  },
                  function() {
                      a.hide()
                  })
          },
          Y3 = function(a, b, c) {
              X3.call(this, a, b, c);
              this.H = b;
              this.l = null;
              this.D = !1;
              this.o = null;
              this.A = !1;
              this.F = 0;
              this.g = this.C = this.B = null
          },
          Z3 = function(a, b, c) {
              X3.call(this, a, b, c);
              this.H = this.B = this.I = !1;
              this.F = 5E3;
              this.A = null;
              this.D = ytPlayer.K("DIV", "iv-promo-contents");
              this.l = this.o = this.g = null;
              this.C = new ytPlayer.Yt(function() {
                      this.g.setAttribute("aria-hidden", !0);
                      ytPlayer.O(this.o, !1);
                      ytPlayer.O(this.l, !0)
                  },
                  700, this);
              ytPlayer.N(this, this.C)
          },
          Yxa = function(a) {
              var b = a.annotation.data;
              if ("cta" == a.annotation.style) var c = 6;
              else if ("video" == a.annotation.style || "playlist" == a.annotation.style) c = 7;
              a.F = b.collapse_delay_ms || a.F;
              var d = ["iv-promo", "iv-promo-inactive"];
              a.la().setAttribute("aria-hidden", !0);
              a.la().setAttribute("aria-label", "Promotion");
              a.la().tabIndex = 0;
              var e = a.annotation.Ta(),
                  f = b.image_url;
              if (f) {
                  var k = ytPlayer.K("DIV", ["iv-promo-img", "iv-click-target"]);
                  f = ytPlayer.K("IMG", {
                      src: f,
                      "aria-hidden": "true"
                  });
                  k.appendChild(f);
                  b.video_duration && !b.is_live ? (f = ytPlayer.K("SPAN", "iv-promo-video-duration",
                      b.video_duration), k.appendChild(f)) : b.playlist_length && (f = ytPlayer.K("SPAN", "iv-promo-playlist-length", b.playlist_length.toString()), k.appendChild(f));
                  e && a.Zi(k, e, a.annotation.id, b.session_data, a.annotation.g, void 0, c)
              }
              e ? (f = ytPlayer.K("A", "iv-promo-txt"), ytPlayer.ad(f, X2(e)), a.g = f) : a.g = ytPlayer.K("DIV", "iv-promo-txt");
              switch (a.annotation.style) {
                  case "cta":
                  case "website":
                      var l = ytPlayer.K("P", null, ytPlayer.K("STRONG", null, b.text_line_1));
                      var m = ytPlayer.K("P", null, ytPlayer.K("SPAN", "iv-promo-link", b.text_line_2));
                      if (f = b.text_line_3) {
                          d.push("iv-promo-website-card-cta-redesign");
                          var n = ytPlayer.K("BUTTON", ["iv-promo-round-expand-icon", "ytp-button"]);
                          f = ytPlayer.K("BUTTON", ["iv-button", "iv-promo-button"], ytPlayer.K("SPAN", "iv-button-content", f));
                          var p = ytPlayer.K("DIV", "iv-promo-button-container");
                          p.appendChild(f);
                          e && a.Zi(a.la(), e, a.annotation.id, b.session_data, a.annotation.g, void 0, c)
                      }
                      ytPlayer.S(a.g, "iv-click-target");
                      e && a.Zi(a.g, e, a.annotation.id, b.session_data, a.annotation.g, void 0, c);
                      break;
                  case "playlist":
                  case "video":
                      l = ytPlayer.K("P", null, ytPlayer.K("SPAN", null, b.text_line_1));
                      m = ytPlayer.K("P", null, ytPlayer.K("STRONG", null, b.text_line_2));
                      b.is_live && (l = m, m = ytPlayer.K("SPAN", ["yt-badge", "iv-promo-badge-live"], "LIVE NOW"));
                      ytPlayer.S(a.g, "iv-click-target");
                      e && a.Zi(a.g, e, a.annotation.id, b.session_data, a.annotation.g, void 0, c);
                      d.push("iv-promo-video");
                      break;
                  case "vote":
                      l = ytPlayer.K("P", null, ytPlayer.K("STRONG", null, b.text_line_1)), m = ytPlayer.K("P", null, ytPlayer.K("SPAN", null, b.text_line_2)), p = ytPlayer.K("DIV", "iv-promo-button-container"), c = ytPlayer.K("BUTTON", ["iv-button", "iv-promo-button"], ytPlayer.K("SPAN", "iv-button-content", b.button_text)), a.context.g.U(c, "click", function(a) {
                              a.stopPropagation();
                              C3(this.context.logger, this.annotation.g, null, {
                                      contest_vote: "1"
                                  },
                                  (b.tracking || {}).vote);
                              a = this.annotation.data;
                              this.g = ytPlayer.J("iv-promo-txt", this.D);
                              var c = ytPlayer.J("iv-promo-button-container", this.D),
                                  d = ytPlayer.K("DIV", ["iv-promo-txt", "iv-click-target"]),
                                  e = ytPlayer.K("P", null, ytPlayer.K("STRONG", null, a.text_line_3)),
                                  f = ytPlayer.K("P", null, a.text_line_4);
                              ytPlayer.Hd(d, e, f);
                              ytPlayer.Kd(c);
                              c = this.g;
                              (e = c.parentNode) && e.replaceChild(d, c);
                              ytPlayer.mq(this.la(), "iv-promo-with-button");
                              (c = this.annotation.Ta()) && this.Zi(d, c, this.annotation.id, a.session_data, this.annotation.g)
                          },
                          a), p.appendChild(c), d.push("iv-promo-with-button")
              }
              l && a.g.appendChild(l);
              m && a.g.appendChild(m);
              a.D.appendChild(a.g);
              p && a.D.appendChild(p);
              l = ytPlayer.K("DIV", "iv-promo-actions");
              a.l = ytPlayer.K("BUTTON", ["iv-promo-expand", "ytp-button"]);
              a.l.title = "Expand";
              a.context.g.U(a.l, "click", ytPlayer.Ga(a.ys, 5E3), a);
              l.appendChild(a.l);
              ytPlayer.O(a.l, !1);
              a.context.g.U(a.la(), "mouseover", a.fK, a);
              a.context.g.U(a.la(), "mouseout", a.eK, a);
              a.context.g.U(a.la(), "touchend", ytPlayer.Ga(a.ys, 5E3), a);
              a.o = ytPlayer.K("BUTTON", ["iv-promo-close", "ytp-button"]);
              a.o.title = I3.CLOSE;
              a.context.g.U(a.o, "click", "cta" == a.annotation.style && b.text_line_3 ?
                  a.UJ : a.LO, a);
              l.appendChild(a.o);
              ytPlayer.lq(a.la(), d);
              k && (ytPlayer.Gd(a.la(), k), n && k.appendChild(n));
              ytPlayer.Gd(a.la(), a.D);
              ytPlayer.Gd(a.la(), l)
          },
          Zxa = function(a) {
              a.B || a.H || a.A || (ytPlayer.S(a.la(), "iv-promo-collapsed"), a.B = !0, a.C.start())
          },
          $xa = function(a) {
              a.C.stop();
              a.B && (ytPlayer.nq(a.la(), ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]), a.B = !1, a.g && a.g.removeAttribute("aria-hidden"), ytPlayer.O(a.l, !1), ytPlayer.O(a.o, !0))
          },
          aya = function(a, b) {
              a.A || (a.A = ytPlayer.tg(function() {
                      $3(this);
                      Zxa(this)
                  },
                  b, a))
          },
          $3 = function(a) {
              a.A && (ytPlayer.ug(a.A), a.A = null)
          },
          a4 = function(a) {
              ytPlayer.sV.call(this, a);
              this.J = !1;
              this.I = 0;
              this.o = {};
              this.K = {};
              this.Ya = new wxa(a);
              this.F = new ytPlayer.FF(this);
              ytPlayer.N(this, this.F);
              this.D = this.B = null;
              this.F.O(this.g, "onVideoAreaChange", (0, ytPlayer.z)(this.R, this, "onVideoAreaChange"));
              this.F.O(this.g, "onHideControls", (0, ytPlayer.z)(this.R, this, "onHideControls"));
              this.F.O(this.g, "onShowControls", (0, ytPlayer.z)(this.R, this, "onShowControls"));
              this.F.O(this.g, "resize", (0, ytPlayer.z)(this.R, this, "resize"));
              this.F.O(this.g, "presentingplayerstatechange", (0, ytPlayer.z)(this.R, this, "presentingplayerstatechange"));
              this.subscribe("onHideControls",
                  this.SR, this);
              this.subscribe("onShowControls", this.bU, this);
              this.subscribe("presentingplayerstatechange", this.fT, this);
              this.subscribe("resize", this.Tu, this);
              this.subscribe("E", this.AM, this);
              this.subscribe("D", this.Ih, this);
              this.subscribe("B", this.vQ, this);
              this.subscribe("C", this.bR, this);
              ytPlayer.Y(this.g).C.subscribe("vast_info_card_add", this.lD, this);
              this.X = new ytPlayer.FF(this);
              ytPlayer.N(this, this.X);
              this.X.O(this.g, "crn_annotations_module", this.yM);
              this.X.O(this.g, "crx_annotations_module", this.zM);
              this.T = ytPlayer.K("DIV",
                  ["video-legacy-annotations", "html5-stop-propagation"]);
              this.Z = ytPlayer.K("DIV", "video-custom-annotations");
              this.A = new ytPlayer.W({
                  G: "div",
                  da: ["ytp-player-content", "ytp-iv-player-content"]
              });
              ytPlayer.N(this, this.A);
              ytPlayer.mV(this.g, this.A.element, 4);
              this.A.hide();
              this.C = new ytPlayer.W({
                  G: "div",
                  da: ["ytp-iv-video-content"]
              });
              ytPlayer.N(this, this.C);
              ytPlayer.Gd(this.C.element, ytPlayer.K("DIV", "video-annotations", this.T, this.Z));
              this.H = this.l = null;
              this.M = [];
              bya(this) && this.load();
              var b = ytPlayer.Ed("STYLE");
              (window.document.getElementsByTagName("HEAD")[0] || window.document.body).appendChild(b);
              ytPlayer.Ze(this, function() {
                  ytPlayer.Kd(b)
              });
              if (a = b.sheet) a.insertRule(".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}",
                  0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
                  0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", 0), a.insertRule(".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}",
                  0), a.insertRule(".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 0), a.insertRule(".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                  0), a.insertRule(".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", 0), a.insertRule(".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}",
                  0), a.insertRule(".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", 0), a.insertRule(".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}",
                  0)
          },
          cya = function(a) {
              switch (a) {
                  case "annotation-editor":
                  case "live-dashboard":
                      return !0
              }
              return !1
          },
          bya = function(a) {
              var b = ytPlayer.Y(a.g);
              a = a.g.getVideoData();
              return 1 == (b.Xg || a.Xg) && !a.Rk || null !== b.C.get(a.videoId)
          },
          dya = function(a, b, c) {
              a.J = !0;
              a.D = ytPlayer.nE(b, c)
          },
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
                          0 < e.childNodes.length && (f = e.childNodes[0].nodeValue, c[e.tagName] = "string" == typeof f ? f.trim() : f);
                          continue
                      } else f = [], c[e.tagName] = f;
                      e && "TEXT" == e.tagName ? 1 == e.childNodes.length && 3 == e.childNodes[0].nodeType ? f.push(e.childNodes[0].nodeValue) : f.push("") : e && f.push(eya(a, e))
                  } return c
          },
          fya = function(a, b, c) {
              return !(a.loaded && a.I == b && a.g.getVideoData().videoId ==
                  c)
          },
          hya = function(a, b) {
              var c = gya(a, b);
              if (!c && "marker" != b.type) return null;
              Twa(b, function(a) {
                      a = (0, ytPlayer.z)(this.wU, this, b.id, a);
                      this.subscribe("ivTrigger:" + b.id, a)
                  },
                  a);
              var d = new u3(a.ea, b, c);
              ytPlayer.N(d, c);
              return d
          },
          iya = function(a, b) {
              var c = ytPlayer.K("DIV", ["annotation",
                  "annotation-type-custom"
              ]);
              ytPlayer.O(c, !1);
              var d = null;
              switch (b.type) {
                  case "branding":
                      if (ytPlayer.Y(a.g).Bd) break;
                      a.A.element.appendChild(c);
                      d = new Y3(c, b4(a), b);
                      break;
                  case "promotion":
                      ytPlayer.mV(a.g, c, 4), d = new Z3(c, b4(a), b)
              }
              d && d.gq();
              return d
          },
          lya = function(a) {
              var b = a.g.getVideoData();
              if (b.Of) {
                  var c = ytPlayer.Y(a.g),
                      d = c.C.get(b.videoId);
                  if (d) {
                      var e = {
                          format: "XML",
                          ad: {},
                          method: "POST",
                          withCredentials: !0
                      };
                      "gaming" == c.playerStyle && (e.ad.gaming = "1");
                      e.wd = (0, ytPlayer.z)(function(a, b, c) {
                              fya(this, a, b) || (a = ytPlayer.WD(c) && c.responseXML ? c.responseXML : null) && c4(this, a)
                          },
                          a, a.I, b.videoId);
                      ytPlayer.nG() && (e.wd = jya(a, e.wd));
                      e.Ob = {
                          ic_only: "1"
                      };
                      kya(e, d);
                      a.J = !0;
                      ytPlayer.nE(b.Of, e)
                  }
              }
          },
          kya = function(a, b) {
              a.method = "POST";
              a.Ob = a.Ob || {};
              b.tr && (a.Ob.ic_coll = b.tr);
              b.Zh && (a.Ob.ic_xml = b.Zh);
              b.Lk && (a.Ob.ic_track = b.Lk)
          },
          mya = function(a) {
              var b = new ytPlayer.W({
                  G: "div"
              });
              ytPlayer.O(b.element, !1);
              var c = new U3(a.g, b.element, b4(a));
              ytPlayer.N(c, b);
              b.ua(a.A.element);
              c.gq();
              return c
          },
          b4 = function(a) {
              if (!a.H) {
                  var b = new ytPlayer.CF(a);
                  ytPlayer.N(a, b);
                  var c = new ytPlayer.Lm(a);
                  ytPlayer.N(a, c);
                  a.H = new zxa(b, c, ytPlayer.Y(a.g), a.g.getVideoData(), a.Ya, a.g, a.ea)
              }
              return a.H
          },
          c4 = function(a, b) {
              var c = !1;
              nya(b);
              for (var d = b.getElementsByTagName("annotation"), e = 0; e < d.length; e++) {
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
                          if (f = iya(a, k)) ytPlayer.N(a, f), a.K[k.id] = f
                      } else if ("card" == k.type || "drawer" == k.type) a.l || (a.l = mya(a), ytPlayer.N(a, a.l)),
                      "card" == k.type ? Sxa(a.l, k) : Txa(a.l, k),
                      c = !0;
                      else if (f = hya(a, k)) ytPlayer.N(a, f),
                      a.o[k.id] = f
                  }
              }
              c && (U1(a.g), a.Tu());
              ytPlayer.Lb(a.o, function(a) {
                      if (a.view) {
                          var b = a.annotation;
                          (a = a.view) && b.segment && b.segment.l && (b =
                              this.o[b.segment.l]) && (a.T = b.annotation)
                      }
                  },
                  a)
          },
          nya = function(a) {
              if ((a = a.getElementsByTagName("annotations")) && !(1 > a.length) && (a = a[0].getAttribute("itct"))) {
                  var b = ytPlayer.MG();
                  if (b) {
                      var c = Ova();
                      c && bwa(b, c, [l2(a)])
                  }
              }
          },
          pya = function(a, b, c, d) {
              d ? oya(a, b, c) : d4(a, b, c)
          },
          d4 = function(a, b, c) {
              if (b = a.o[b]) v3(b), c && c.l ? (a = (0, ytPlayer.z)(a.Iz, a, b), b.g = new ytPlayer.Yt(a, 2E3), b.g.start()) : a.Iz(b)
          },
          oya = function(a, b, c) {
              if (b = a.o[b]) v3(b), c && c.A ? (a = (0, ytPlayer.z)(a.CE, a, b), b.g = new ytPlayer.Yt(a, 2E3), b.g.start()) : a.CE(b)
          },
          qya = function(a, b) {
              if ("new" == b.target) return !1;
              var c = X2(b);
              if (!c) return !1;
              c = c.replace(/https?:\/\//g, "");
              if (!O3(c)) return !1;
              c = ytPlayer.dE(c);
              if (c.list || c.p) return !1;
              c = Jxa(b);
              if (!c) return !1;
              var d = a.g.getVideoData();
              return d.videoId == c ? !0 : ytPlayer.Y(a.g).g && d.yn ? !0 : !1
          },
          gya = function(a, b) {
              if (rya(b)) {
                  var c = b.B || c3(b, function(a) {
                      return "click" == a || "rollOut" == a || "rollOut" == a
                  });
                  return new p3(b, (0, ytPlayer.z)(a.T.appendChild, a.T), a.g, a.ea, c)
              }
              return null
          },
          rya = function(a) {
              if ("highlight" == a.type || "widget" == a.type) return !0;
              if ("text" == a.type)
                  for (var b in b3)
                      if (a.style == b3[b]) return !0;
              return !1
          },
          e4 = function(a, b, c, d) {
              a.R(Xwa(b, d), c, d)
          },
          jya = function(a, b) {
              return (0, ytPlayer.z)(function() {
                      if (!this.ka()) {
                          var a = Array.prototype.slice.call(arguments, 0);
                          a.unshift(b);
                          b = ytPlayer.Ga.apply(window, a);
                          this.M.push(ytPlayer.lG(b))
                      }
                  },
                  a)
          },
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
              return ytPlayer.Yd(c, function(a) {
                      return ytPlayer.kq(a, b)
                  },
                  !0, d)
          },
          h4 = function(a) {
              var b = "mouseover" == a.type && "mouseenter" in g4 || "mouseout" == a.type && "mouseleave" in g4,
                  c = a.type in g4 || b;
              if ("HTML" != a.target.tagName && c) {
                  if (b) {
                      b = "mouseover" == a.type ? "mouseenter" : "mouseleave";
                      c = g4[b];
                      for (var d in c.l) {
                          var e = f4(b, d, a.target);
                          e && !ytPlayer.Yd(a.relatedTarget, function(a) {
                                  return a == e
                              },
                              !0) && c.R(d, e, b, a)
                      }
                  }
                  if (b = g4[a.type])
                      for (d in b.l)(e = f4(a.type, d, a.target)) && b.R(d, e, a.type, a)
              }
          },
          i4 = function(a) {
              this.B = a;
              this.D = {};
              this.H = [];
              this.F = []
          },
          Z = function(a, b) {
              return "yt-uix" + (a.B ? "-" + a.B : "") + (b ? "-" + b : "")
          },
          j4 = function(a, b, c) {
              a.H.push(ytPlayer.UF(b, c, a))
          },
          k4 = function(a, b, c) {
              a.F.push(ytPlayer.FN(b, c, a))
          },
          l4 = function() {
              i4.call(this, "button");
              this.g = null;
              this.o = [];
              this.l = {}
          },
          sya = function(a, b, c, d, e) {
              var f = m2(c),
                  k = 9 == d.keyCode;
              k || 32 == d.keyCode || 13 == d.keyCode ? (d = m4(a, c)) ? (b = ytPlayer.Od(d), "a" == b.tagName.toLowerCase() ? ytPlayer.tV(b.href) : Mva(b)) : k && n4(a, b) : f ? 27 == d.keyCode ? (m4(a, c), n4(a, b)) : e(b, c, d) : (a = ytPlayer.kq(b, Z(a, "reverse")) ? 38 : 40, d.keyCode == a && (Mva(b), d.preventDefault()))
          },
          m4 = function(a, b) {
              var c = Z(a, "menu-item-highlight"),
                  d = ytPlayer.J(c, b);
              d && ytPlayer.mq(d, c);
              return d
          },
          tya = function(a, b, c) {
              ytPlayer.S(c, Z(a, "menu-item-highlight"));
              var d = c.getAttribute("id");
              d || (d = Z(a, "item-id-" + ytPlayer.Fa(c)), c.setAttribute("id", d));
              b.setAttribute("aria-activedescendant", d)
          },
          uya = function(a, b, c, d) {
              var e = b.length;
              a = (0, ytPlayer.Pa)(b, a);
              if (-1 == a)
                  if (38 == d.keyCode) a = e - c;
                  else {
                      if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode) a = 0
                  }
              else 39 == d.keyCode ? (a % c == c - 1 && (a -= c), a += 1) : 37 == d.keyCode ? (0 == a % c && (a += c), --a) : 38 == d.keyCode ? (a < c && (a += e), a -= c) : 40 == d.keyCode && (a >= e - c && (a -= e), a += c);
              return a
          },
          o4 = function(a, b) {
              var c = b.iframeMask;
              c || (c = ytPlayer.Ed("IFRAME"), c.src = 'javascript:""', c.className = Z(a, "menu-mask"), o2(c), b.iframeMask = c);
              return c
          },
          p4 = function(a, b, c, d) {
              var e = ytPlayer.$d(b, Z(a, "group")),
                  f = !!a.Ba(b, "button-menu-ignore-group");
              e = e && !f ? e : b;
              f = 9;
              var k = 8,
                  l = ytPlayer.Lh(b);
              if (ytPlayer.kq(b, Z(a, "reverse"))) {
                  f = 8;
                  k = 9;
                  l = l.top + "px";
                  try {
                      c.style.maxHeight = l
                  } catch (p) {}
              }
              ytPlayer.kq(b, "flip") && (ytPlayer.kq(b, Z(a, "reverse")) ? (f = 12, k = 13) : (f = 13, k = 12));
              var m;
              a.Ba(b, "button-has-sibling-menu") ? m = ytPlayer.Bh(e) : a.Ba(b, "button-menu-root-container") && (m = vya(a, b));
              ytPlayer.yd && !ytPlayer.rc("8") && (m = null);
              if (m) {
                  var n = ytPlayer.Lh(m);
                  n = new ytPlayer.Zg(-n.top, n.left, n.top, -n.left)
              }
              m = new ytPlayer.hd(0, 1);
              ytPlayer.kq(b, Z(a, "center-menu")) && (m.x -= Math.round((ytPlayer.Kh(c).width - ytPlayer.Kh(b).width) / 2));
              d && (m.y += ytPlayer.zd(window.document).y);
              if (a =
                  o4(a, b)) b = ytPlayer.Kh(c), a.style.width = b.width + "px", a.style.height = b.height + "px", g2(e, f, a, k, m, n, 197), d && ytPlayer.ph(a, "position", "fixed");
              g2(e, f, c, k, m, n, 197)
          },
          vya = function(a, b) {
              if (a.Ba(b, "button-menu-root-container")) {
                  var c = a.Ba(b, "button-menu-root-container");
                  return ytPlayer.$d(b, c)
              }
              return window.document.body
          },
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
                      ytPlayer.XD(function() {
                              d && d.parentNode && (o2(d), d.parentNode.removeChild(d));
                              c.originalParentNode && (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c), c.originalParentNode = null, c.activeButtonNode = null)
                          },
                          1)
                  }
                  e = ytPlayer.$d(b, Z(a, "group"));
                  var f = [Z(a, "active")];
                  e && f.push(Z(a, "group-active"));
                  ytPlayer.nq(b, f);
                  ytPlayer.XF("yt-uix-button-menu-hide", b);
                  ytPlayer.sF(a.o);
                  a.o.length = 0
              }
          },
          wya = function(a, b, c) {
              var d = Z(a, "menu-item-selected");
              a = ytPlayer.rd(d, b);
              (0, ytPlayer.B)(a, function(a) {
                  ytPlayer.mq(a, d)
              });
              ytPlayer.S(c.parentNode, d)
          },
          q4 = function(a, b) {
              if (!b.widgetMenu) {
                  var c = a.Ba(b, "button-menu-id");
                  c = c && ytPlayer.pd(c);
                  var d = Z(a, "menu");
                  c ? ytPlayer.lq(c, [d, Z(a, "menu-external")]) : c = ytPlayer.J(d, b);
                  b.widgetMenu = c
              }
              return b.widgetMenu
          },
          r4 = function(a) {
              a.g && n4(a, a.g)
          },
          s4 = function(a) {
              i4.call(this, a);
              this.o = null
          },
          xya = function(a, b, c) {
              var d = c || b,
                  e = Z(a, "card");
              c = a.Cc(d);
              var f = ytPlayer.pd(Z(a, "card") + i2(d));
              if (f) return a = ytPlayer.J(Z(a, "card-body"), f), ytPlayer.Qd(a, c) || (ytPlayer.Kd(c), a.appendChild(c)), f;
              f = window.document.createElement("div");
              f.id = Z(a, "card") + i2(d);
              f.className = e;
              (d = a.Ba(d, "card-class")) && ytPlayer.lq(f, d.split(/\s+/));
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
              ytPlayer.Kd(c);
              k.appendChild(c);
              d.appendChild(a);
              d.appendChild(k);
              f.appendChild(e);
              f.appendChild(d);
              window.document.body.appendChild(f);
              return f
          },
          yya = function(a, b, c) {
              var d = a.Ba(b, "orientation") || "horizontal";
              var e = ytPlayer.J(Z(a, "anchor"), b) || b;
              var f = a.Ba(b, "position"),
                  k = !!a.Ba(b, "force-position"),
                  l = a.Ba(b, "position-fixed");
              d = "horizontal" == d;
              var m = "bottomright" == f || "bottomleft" == f,
                  n = "topright" == f || "bottomright" == f;
              if (n && m) {
                  var p = 13;
                  var r = 8
              } else n && !m ? (p = 12, r = 9) : !n && m ? (p = 9, r = 12) : (p = 8, r = 13);
              var v = X1(window.document.body);
              f = X1(b);
              v != f && (p ^= 4);
              if (d) {
                  f = b.offsetHeight / 2 - 12;
                  var D = new ytPlayer.hd(-12, b.offsetHeight + 6)
              } else f = b.offsetWidth / 2 - 6, D = new ytPlayer.hd(b.offsetWidth + 6, -12);
              var H = ytPlayer.Kh(c);
              f = Math.min(f, (d ? H.height : H.width) -
                  24 - 6);
              6 > f && (f = 6, d ? D.y += 12 - b.offsetHeight / 2 : D.x += 12 - b.offsetWidth / 2);
              H = null;
              k || (H = 10);
              b = Z(a, "card-flip");
              a = Z(a, "card-reverse");
              ytPlayer.U(c, b, n);
              ytPlayer.U(c, a, m);
              H = g2(e, p, c, r, D, null, H);
              !k && H && (H & 48 && (n = !n, p ^= 4, r ^= 4), H & 192 && (m = !m, p ^= 1, r ^= 1), ytPlayer.U(c, b, n), ytPlayer.U(c, a, m), g2(e, p, c, r, D));
              l && (e = (0, window.parseInt)(c.style.top, 10), k = ytPlayer.zd(window.document).y, ytPlayer.ph(c, "position", "fixed"), ytPlayer.ph(c, "top", e - k + "px"));
              v && (c.style.right = "", e = ytPlayer.Lh(c), e.left = e.left || (0, window.parseInt)(c.style.left, 10), k = ytPlayer.wd(window), c.style.left = "", c.style.right =
                  k.width - e.left - e.width + "px");
              e = ytPlayer.J("yt-uix-card-body-arrow", c);
              k = ytPlayer.J("yt-uix-card-border-arrow", c);
              d = d ? m ? "top" : "bottom" : !v && n || v && !n ? "left" : "right";
              e.setAttribute("style", "");
              k.setAttribute("style", "");
              e.style[d] = f + "px";
              k.style[d] = f + "px";
              m = ytPlayer.J("yt-uix-card-arrow", c);
              n = ytPlayer.J("yt-uix-card-arrow-background", c);
              m && n && (c = "right" == d ? ytPlayer.Kh(c).width - f - 13 : f + 11, f = c / Math.sqrt(2), m.style.left = c + "px", m.style.marginLeft = "1px", n.style.marginLeft = -f + "px", n.style.marginTop = f + "px")
          },
          t4 = function(a) {
              a.o && a.hide(a.o)
          },
          zya =
          function(a) {
              var b = a.cardMask;
              b || (b = ytPlayer.Ed("IFRAME"), b.src = 'javascript:""', ytPlayer.lq(b, ["yt-uix-card-iframe-mask"]), a.cardMask = b);
              b.style.position = a.style.position;
              b.style.top = a.style.top;
              b.style.left = a.offsetLeft + "px";
              b.style.height = a.clientHeight + "px";
              b.style.width = a.clientWidth + "px";
              window.document.body.appendChild(b)
          },
          u4 = function() {
              i4.call(this, "kbd-nav")
          },
          Aya = function(a, b, c) {
              if (b && c)
                  if (ytPlayer.S(c, Z(a)), a = b.id, a || (a = "kbd-nav-" + Math.floor(1E6 * Math.random() + 1), b.id = a), b = a, ytPlayer.ek && c.dataset) c.dataset.kbdNavMoveOut = b;
                  else {
                      if (/-[a-z]/.test("kbdNavMoveOut")) throw Error("");
                      c.setAttribute("data-" + ytPlayer.Hb("kbdNavMoveOut"), b)
                  }
          },
          Bya = function(a, b) {
              if (b) {
                  var c = ytPlayer.Zd(b, "LI");
                  c && (ytPlayer.S(c, Z(a, "highlight")), v4 = ytPlayer.rF(b, "blur", (0, ytPlayer.z)(function(a) {
                          ytPlayer.mq(a, Z(this, "highlight"));
                          ytPlayer.sF(v4)
                      },
                      a, c)))
              }
          },
          Cya = function(a) {
              if ("UL" != a.tagName.toUpperCase()) return [];
              a = (0, ytPlayer.Ld)(ytPlayer.Md(a), function(a) {
                  return "LI" == a.tagName.toUpperCase()
              });
              return (0, ytPlayer.Ld)((0, ytPlayer.G)(a, function(a) {
                  return m2(a) ? V1(a, function(a) {
                      return ytPlayer.Da(a) && 1 == a.nodeType ? ytPlayer.Xd(a) : !1
                  }) : !1
              }), function(a) {
                  return !!a
              })
          },
          w4 = function() {
              i4.call(this, "menu");
              this.l = this.g = null;
              this.o = {};
              this.C = {};
              this.A = null
          },
          x4 = function(a) {
              var b = w4.getInstance();
              if (ytPlayer.kq(a, Z(b))) return a;
              var c = b.pe(a);
              return c ? c : ytPlayer.$d(a, Z(b, "content")) == b.g ? b.l : null
          },
          Dya = function(a, b, c) {
              var d = y4(a, b);
              d && ytPlayer.Jh(d, ytPlayer.Kh(c));
              if (c == a.g) {
                  var e = 9,
                      f = 8;
                  ytPlayer.kq(b, Z(a, "reversed")) && (e ^= 1, f ^= 1);
                  ytPlayer.kq(b, Z(a, "flipped")) && (e ^= 4, f ^= 4);
                  a = new ytPlayer.hd(0, 1);
                  d && g2(b, e, d, f, a, null, 197);
                  g2(b, e, c, f, a, null, 197)
              }
          },
          Fya = function(a, b, c) {
              z4(a, b) && !c ? A4(a, b) : (Eya(a, b), !a.g || j2(b, a.g) ? a.fG(b) : ova(a.A, (0, ytPlayer.z)(a.fG, a, b)))
          },
          Eya = function(a, b) {
              if (b) {
                  var c = ytPlayer.$d(b, Z(a, "content"));
                  c && (c = ytPlayer.rd(Z(a), c), (0, ytPlayer.B)(c, function(a) {
                          !j2(a, b) && z4(this, a) && B4(this, a)
                      },
                      a))
              }
          },
          A4 = function(a, b) {
              if (b) {
                  var c = [];
                  c.push(b);
                  var d = C4(a, b);
                  d && (d = ytPlayer.rd(Z(a), d), d = ytPlayer.Ya(d), c = c.concat(d), (0, ytPlayer.B)(c, function(a) {
                          z4(this, a) && B4(this, a)
                      },
                      a))
              }
          },
          B4 = function(a, b) {
              if (b) {
                  var c = C4(a, b);
                  ytPlayer.nq(D4(a, b), [Z(a, "trigger-selected"), "yt-uix-button-toggled"]);
                  ytPlayer.S(c, Z(a, "content-hidden"));
                  var d = C4(a, b);
                  d && ytPlayer.ud(d, {
                      "aria-expanded": "false"
                  });
                  (d = y4(a, b)) && d.parentNode && ytPlayer.Kd(d);
                  c && c == a.g && (a.l.appendChild(c), a.g = null, a.l = null, a.A && a.A.R("ROOT_MENU_REMOVED"));
                  ytPlayer.XF("yt-uix-menu-hide", b);
                  c = ytPlayer.Fa(b).toString();
                  ytPlayer.sF(a.o[c]);
                  delete a.o[c]
              }
          },
          Gya = function(a, b) {
              var c = C4(a, b);
              if (c) {
                  (0, ytPlayer.B)(c.children, function(a) {
                      "LI" == a.tagName && ytPlayer.ud(a, {
                          role: "menuitem"
                      })
                  });
                  ytPlayer.ud(c, {
                      "aria-expanded": "true"
                  });
                  var d = c.id;
                  d || (d = "aria-menu-id-" + ytPlayer.Fa(c), c.id = d);
                  (c = D4(a, b)) && ytPlayer.ud(c, {
                      "aria-controls": d
                  })
              }
          },
          Hya = function(a, b, c) {
              var d = C4(a, b);
              d && ytPlayer.kq(b, Z(a, "checked")) && (a = ytPlayer.Zd(c, "LI")) && (a = ytPlayer.J("yt-ui-menu-item-checked-hid", a)) && (d = ytPlayer.rd("yt-ui-menu-item-checked", d), (0, ytPlayer.B)(d, function(a) {
                  ytPlayer.oq(a, "yt-ui-menu-item-checked", "yt-ui-menu-item-checked-hid")
              }), ytPlayer.oq(a, "yt-ui-menu-item-checked-hid", "yt-ui-menu-item-checked"))
          },
          z4 = function(a, b) {
              var c = C4(a, b);
              return c ? !ytPlayer.kq(c, Z(a, "content-hidden")) : !1
          },
          Iya = function(a) {
              a = ytPlayer.qd(window.document, "UL", null, a);
              (0, ytPlayer.B)(a, function(a) {
                  a.tabIndex = 0;
                  var b = u4.getInstance();
                  ytPlayer.lq(a, [Z(b), Z(b, "list")])
              })
          },
          C4 = function(a, b) {
              var c = ytPlayer.bF(b, "menu-content-id");
              return c && (c = ytPlayer.pd(c)) ? (ytPlayer.lq(c, [Z(a, "content"), Z(a, "content-external")]), c) : b == a.l ? a.g : ytPlayer.J(Z(a, "content"), b)
          },
          y4 = function(a, b) {
              var c = ytPlayer.Fa(b).toString(),
                  d = a.C[c];
              if (!d) {
                  d = ytPlayer.Ed("IFRAME");
                  d.src = 'javascript:""';
                  var e = [Z(a, "mask")];
                  (0, ytPlayer.B)(ytPlayer.jq(b), function(a) {
                      e.push(a + "-mask")
                  });
                  ytPlayer.lq(d, e);
                  a.C[c] = d
              }
              return d || null
          },
          D4 = function(a, b) {
              return ytPlayer.J(Z(a, "trigger"), b)
          },
          Jya = function(a, b) {
              return j2(b, a.g) || j2(b, a.l)
          },
          E4 = function() {
              s4.call(this, "clickcard");
              this.g = {};
              this.l = {}
          },
          F4 = function() {
              s4.call(this, "hovercard")
          },
          G4 = function(a, b, c, d, e, f) {
              this.g = a;
              this.D = null;
              this.o = ytPlayer.J("yt-dialog-fg", this.g) || this.g;
              if (a = ytPlayer.J("yt-dialog-title", this.o)) {
                  var k = "yt-dialog-title-" + ytPlayer.Fa(this.o);
                  a.setAttribute("id", k);
                  this.o.setAttribute("aria-labelledby", k)
              }
              this.o.setAttribute("tabindex", "-1");
              this.I = ytPlayer.J("yt-dialog-focus-trap", this.g);
              this.J = !1;
              this.A = new ytPlayer.XC;
              this.F = [];
              this.F.push(ytPlayer.AF(this.g, "click", (0, ytPlayer.z)(this.YQ, this), "yt-dialog-dismiss"));
              this.F.push(ytPlayer.rF(this.I, "focus", (0, ytPlayer.z)(this.CJ, this), !0));
              Kya(this);
              this.K = b;
              this.T = c;
              this.M = d;
              this.H = e;
              this.X = f;
              this.C =
                  this.B = null
          },
          Lya = function(a, b) {
              a.ka() || a.A.subscribe("post-all", b)
          },
          Kya = function(a) {
              a = ytPlayer.J("yt-dialog-fg-content", a.g);
              var b = [];
              ytPlayer.Lb(Mya, function(a) {
                  b.push("yt-dialog-show-" + a)
              });
              ytPlayer.nq(a, b);
              ytPlayer.S(a, "yt-dialog-show-content")
          },
          Nya = function() {
              var a = ytPlayer.rd("yt-dialog");
              return (0, ytPlayer.Bj)(a, function(a) {
                  return m2(a)
              })
          },
          Oya = function(a) {
              var b = ytPlayer.qd(window.document, "iframe", null, a.g);
              (0, ytPlayer.B)(b, function(a) {
                      var b = ytPlayer.bF(a, "onload");
                      b && (b = ytPlayer.x(b)) && ytPlayer.rF(a, "load", b);
                      if (b = ytPlayer.bF(a, "src")) a.src = b
                  },
                  a);
              return ytPlayer.Ya(b)
          },
          Pya = function(a) {
              (0, ytPlayer.B)(window.document.getElementsByTagName("iframe"), function(b) {
                  -1 == (0, ytPlayer.Pa)(a, b) && ytPlayer.S(b, "iframe-hid")
              })
          },
          Qya = function() {
              var a = ytPlayer.rd("iframe-hid");
              (0, ytPlayer.B)(a, function(a) {
                  ytPlayer.mq(a, "iframe-hid")
              })
          },
          Rya = function(a) {
              ytPlayer.XD((0, ytPlayer.z)(function() {
                      this.o && this.o.focus()
                  },
                  a), 0)
          },
          H4 = function() {
              i4.call(this, "overlay");
              this.A = this.l = this.o = this.g = null
          },
          Tya = function(a) {
              a.A || (a.A = ytPlayer.UF("yt-uix-overlay-hide", Sya));
              a.g && Lya(a.g, function() {
                  var a = H4.getInstance();
                  a.o = null;
                  a.g.dispose();
                  a.g = null
              })
          },
          Uya = function(a) {
              if (a.g) {
                  var b = a.o;
                  a.g.dismiss("overlayhide");
                  b && a.qj(b, "overlay-hidden");
                  a.o = null;
                  a.l && (ytPlayer.sF(a.l), a.l = null);
                  a.g = null
              }
          },
          Vya = function(a, b) {
              var c;
              if (a)
                  if (c = ytPlayer.J("yt-dialog", a)) {
                      var d = ytPlayer.pd("body-container");
                      d && (d.appendChild(c), a.overlayContentNode = c, c.overlayParentNode = a)
                  } else c = a.overlayContentNode;
              else b && (c = ytPlayer.$d(b, "yt-dialog"));
              return c
          },
          Wya = function() {
              var a = H4.getInstance();
              if (a.o) a = ytPlayer.J("yt-dialog-fg-content", a.o.overlayContentNode);
              else a: {
                  if (a = ytPlayer.rd("yt-dialog-fg-content"))
                      for (var b = 0; b < a.length; b++) {
                          var c = ytPlayer.$d(a[b], "yt-dialog");
                          if (m2(c)) {
                              a = a[b];
                              break a
                          }
                      }
                  a = null
              }
              return a
          },
          Sya = function() {
              Uya(H4.getInstance())
          },
          I4 = function() {
              i4.call(this, "tooltip");
              this.g = 0;
              this.l = {}
          },
          Xya = function(a, b, c) {
              a.setData(b, "tooltip-text", c);
              a = a.Ba(b, "content-id");
              (a = ytPlayer.pd(a)) && ytPlayer.Sd(a, c)
          },
          Yya = function(a, b) {
              return a.Ba(b, "tooltip-text") || b.title
          },
          aza = function(a, b) {
              if (b) {
                  var c = Yya(a, b);
                  if (c) {
                      var d = ytPlayer.pd(J4(a, b));
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
                          ytPlayer.S(f, Z(a, "arialabel"));
                          f.id = m;
                          n = b.hasAttribute("aria-label") ? b.getAttribute("aria-label") : "rtl" == window.document.body.getAttribute("dir") ? c + " " + n : n + " " + c;
                          ytPlayer.Sd(f, n);
                          b.setAttribute("aria-labelledby", m);
                          m = ytPlayer.hF() || window.document.body;
                          m.appendChild(f);
                          m.appendChild(d);
                          Xya(a, b, c);
                          (c = (0, window.parseInt)(a.Ba(b, "tooltip-max-width"), 10)) && e.offsetWidth > c && (e.style.width = c + "px", ytPlayer.S(k, Z(a, "normal-wrap")));
                          k = ytPlayer.kq(b, Z(a, "reverse"));
                          $ya(a,
                              b, d, e, l, k) || $ya(a, b, d, e, l, !k);
                          var p = Z(a, "tip-visible");
                          ytPlayer.XD(function() {
                                  ytPlayer.S(d, p)
                              },
                              0)
                      }
                  }
              }
          },
          $ya = function(a, b, c, d, e, f) {
              ytPlayer.U(c, Z(a, "tip-reverse"), f);
              var k = 0;
              f && (k = 1);
              var l = ytPlayer.Kh(b);
              f = new ytPlayer.hd((l.width - 10) / 2, f ? l.height : 0);
              var m = ytPlayer.Ch(b);
              Jva(new ytPlayer.hd(m.x + f.x, m.y + f.y), c, k);
              m = ytPlayer.wd(window);
              var n = ytPlayer.Gh(c);
              c = ytPlayer.Kh(d);
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
              e && (e.style.left = a, e.style.height = c.height + "px", e.style.width = c.width + "px");
              return !(k ||
                  l)
          },
          J4 = function(a, b, c) {
              a = Z(a) + i2(b);
              c && (a += "-" + c);
              return a
          },
          Zya = function(a, b) {
              var c = null;
              ytPlayer.K0 && ytPlayer.kq(b, Z(a, "masked")) && ((c = ytPlayer.pd("yt-uix-tooltip-shared-mask")) ? (c.parentNode.removeChild(c), n2(c)) : (c = ytPlayer.Ed("IFRAME"), c.src = 'javascript:""', c.id = "yt-uix-tooltip-shared-mask", c.className = Z(a, "tip-mask")));
              return c
          },
          bza = function(a) {
              var b = ytPlayer.pd("yt-uix-tooltip-shared-mask"),
                  c = b && ytPlayer.Yd(b, function(b) {
                          return b == a
                      },
                      !1, 2);
              b && c && (b.parentNode.removeChild(b), o2(b), window.document.body.appendChild(b))
          },
          K4 = function(a) {
              ytPlayer.yN.call(this, 1, arguments);
              this.g = a
          },
          L4 = function(a, b, c, d, e) {
              ytPlayer.yN.call(this, 2, arguments);
              this.source = e || null
          },
          cza = function(a, b, c) {
              ytPlayer.yN.call(this, 1, arguments);
              this.g = a;
              this.l = b
          },
          M4 = function(a, b, c, d, e, f, k) {
              ytPlayer.yN.call(this, 1, arguments);
              this.g = d || null;
              this.source = k || null
          },
          dza = function(a) {
              a = ytPlayer.$d(a, "yt-uix-button-subscription-container");
              a = ytPlayer.J("unsubscribe-confirmation-overlay-container", a);
              return ytPlayer.J("yt-dialog", a)
          },
          eza = function(a, b) {
              ytPlayer.sF(N4);
              N4.length = 0;
              O4[b] || (O4[b] = dza(a));
              H4.getInstance().show(O4[b]);
              var c = Wya();
              return new ytPlayer.Yf(function(a) {
                  N4.push(ytPlayer.AF(c, "click", function() {
                          a()
                      },
                      "overlay-confirmation-unsubscribe-button"))
              })
          },
          P4 = function() {
              i4.call(this, "subscription-button")
          },
          fza = function(a, b) {
              if (!a.Ba(b, "ypc-enabled")) return null;
              var c = a.Ba(b, "ypc-item-type"),
                  d = a.Ba(b, "ypc-item-id");
              return {
                  itemType: c,
                  itemId: d,
                  subscriptionElement: b
              }
          },
          gza = function(a, b) {
              var c = a.Ba(b, Q4.jI),
                  d = !!a.Ba(b, "is-subscribed");
              c = "-" + c;
              var e = R4.wG + c;
              ytPlayer.U(b, R4.vG + c, !d);
              ytPlayer.U(b, e, d);
              a.Ba(b, Q4.IG) && !a.Ba(b, Q4.HG) && (c = Z(I4.getInstance()), ytPlayer.U(b, c, !d), b.title = d ? "" : a.Ba(b, Q4.JG));
              d ? ytPlayer.XD(function() {
                      ytPlayer.S(b, R4.pw)
                  },
                  1E3) : ytPlayer.mq(b, R4.pw)
          },
          hza = function(a, b) {
              var c = ytPlayer.rd(Z(a));
              return (0, ytPlayer.Ld)(c, function(a) {
                      return b == this.Ba(a, "channel-external-id")
                  },
                  a)
          },
          iza = function(a, b) {
              var c = (0, ytPlayer.z)(function(a) {
                      a.discoverable_subscriptions && ytPlayer.QD("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS", a.discoverable_subscriptions);
                      this.kw(b)
                  },
                  a);
              ytPlayer.Osa(c, "subscribe", "sub_button")
          },
          jza = function(a, b) {
              if (!a.Ba(b, "show-unsub-confirm-dialog")) return !1;
              var c = a.Ba(b, "show-unsub-confirm-time-frame");
              return "always" == c || "ten_minutes" == c && (c = (0, window.parseInt)(a.Ba(b, "subscribed-timestamp"), 10), (new $1).getTime() < 1E3 * (c + 600)) ? !0 : !1
          },
          tva = {
              SCRIPT: 1,
              STYLE: 1,
              HEAD: 1,
              IFRAME: 1,
              OBJECT: 1
          },
          uva = {
              IMG: " ",
              BR: "\n"
          },
          xva = /[^\d]+$/,
          yva = {
              cm: 1,
              "in": 1,
              mm: 1,
              pc: 1,
              pt: 1
          },
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
      ytPlayer.A($1, ytPlayer.ko);
      ytPlayer.h = $1.prototype;
      ytPlayer.h.getHours = function() {
          return this.date.getHours()
      };
      ytPlayer.h.getMinutes = function() {
          return this.date.getMinutes()
      };
      ytPlayer.h.getSeconds = function() {
          return this.date.getSeconds()
      };
      ytPlayer.h.getMilliseconds = function() {
          return this.date.getMilliseconds()
      };
      ytPlayer.h.getUTCHours = function() {
          return this.date.getUTCHours()
      };
      ytPlayer.h.getUTCMinutes = function() {
          return this.date.getUTCMinutes()
      };
      ytPlayer.h.add = function(a) {
          ytPlayer.ko.prototype.add.call(this, a);
          a.hours && this.date.setUTCHours(this.date.getUTCHours() + a.hours);
          a.minutes && this.date.setUTCMinutes(this.date.getUTCMinutes() + a.minutes);
          a.seconds && this.date.setUTCSeconds(this.date.getUTCSeconds() + a.seconds)
      };
      ytPlayer.h.xo = function(a) {
          var b = ytPlayer.ko.prototype.xo.call(this, a);
          return a ? b + " " + ytPlayer.yb(this.getHours(), 2) + ":" + ytPlayer.yb(this.getMinutes(), 2) + ":" + ytPlayer.yb(this.getSeconds(), 2) : b + "T" + ytPlayer.yb(this.getHours(), 2) + ytPlayer.yb(this.getMinutes(), 2) + ytPlayer.yb(this.getSeconds(), 2)
      };
      ytPlayer.h.toString = function() {
          return this.xo()
      };
      ytPlayer.h.clone = function() {
          var a = new $1(this.date);
          a.eo = this.eo;
          a.ho = this.ho;
          return a
      };
      var a2 = {},
          b2 = null;
      ytPlayer.A(Eva, ytPlayer.bf);
      ytPlayer.A(d2, ytPlayer.ut);
      ytPlayer.h = d2.prototype;
      ytPlayer.h.getDuration = function() {
          return this.duration
      };
      ytPlayer.h.play = function(a) {
          if (a || 0 == this.g) this.progress = 0, this.coords = this.l;
          else if (this.kb()) return !1;
          c2(this);
          this.startTime = a = (0, ytPlayer.F)(); -
          1 == this.g && (this.startTime -= this.duration * this.progress);
          this.endTime = this.startTime + this.duration;
          this.A = this.startTime;
          this.progress || this.Ap();
          this.Ge("play"); -
          1 == this.g && this.Ge("resume");
          this.g = 1;
          var b = ytPlayer.Fa(this);
          b in a2 || (a2[b] = this);
          Cva();
          Dva(this, a);
          return !0
      };
      ytPlayer.h.stop = function(a) {
          c2(this);
          this.g = 0;
          a && (this.progress = 1);
          Fva(this, this.progress);
          this.Ge("stop");
          this.xm()
      };
      ytPlayer.h.pause = function() {
          this.kb() && (c2(this), this.g = -1, this.Ge("pause"))
      };
      ytPlayer.h.V = function() {
          0 == this.g || this.stop(!1);
          this.Ge("destroy");
          d2.ba.V.call(this)
      };
      ytPlayer.h.destroy = function() {
          this.dispose()
      };
      ytPlayer.h.Iu = function() {
          this.Ge("animate")
      };
      ytPlayer.h.Ge = function(a) {
          this.dispatchEvent(new Eva(a, this))
      };
      ytPlayer.A(e2, d2);
      e2.prototype.o = ytPlayer.y;
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
      ytPlayer.A(f2, e2);
      f2.prototype.o = function() {
          this.element.style.left = Math.round(this.coords[0]) + "px";
          this.element.style.top = Math.round(this.coords[1]) + "px"
      };
      var I3 = {};
      ytPlayer.A(q2, ytPlayer.Df);
      ytPlayer.h = q2.prototype;
      ytPlayer.h.rs = null;
      ytPlayer.h.El = null;
      ytPlayer.h.la = function() {
          return this.El
      };
      ytPlayer.h.addEventListener = function(a, b, c, d) {
          ytPlayer.pf(this.El, a, b, c, d)
      };
      ytPlayer.h.removeEventListener = function(a, b, c, d) {
          ytPlayer.xf(this.El, a, b, c, d)
      };
      ytPlayer.h.V = function() {
          q2.ba.V.call(this);
          var a = this.El;
          if (a)
              if (ytPlayer.hf(a)) a.He && ytPlayer.mf(a.He);
              else if (a = ytPlayer.sf(a)) {
              var b = 0,
                  c;
              for (c in a.listeners)
                  for (var d = a.listeners[c].concat(), e = 0; e < d.length;
                      ++e) ytPlayer.yf(d[e]) && ++b
          }
      };
      ytPlayer.A(u2, q2);
      u2.prototype.fill = null;
      ytPlayer.A(Tva, q2);
      v2.prototype.Rf = null;
      v2.prototype.Zd = null;
      v2.prototype.Jm = !0;
      var Uva = [2, 2, 6, 6, 0];
      ytPlayer.h = v2.prototype;
      ytPlayer.h.clear = function() {
          this.rb.length = 0;
          this.Ka.length = 0;
          this.Ce.length = 0;
          delete this.Rf;
          delete this.Zd;
          delete this.Jm;
          return this
      };
      ytPlayer.h.moveTo = function(a, b) {
          0 == ytPlayer.Ka(this.rb) ? this.Ce.length -= 2 : (this.rb.push(0), this.Ka.push(1));
          this.Ce.push(a, b);
          this.Zd = this.Rf = [a, b];
          return this
      };
      ytPlayer.h.Ec = function(a) {
          var b = ytPlayer.Ka(this.rb);
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
      ytPlayer.h.close = function() {
          var a = ytPlayer.Ka(this.rb);
          if (null == a) throw Error("Path cannot start with close");
          4 != a && (this.rb.push(4), this.Ka.push(1), this.Zd = this.Rf);
          return this
      };
      ytPlayer.h.clone = function() {
          var a = new this.constructor;
          a.rb = this.rb.concat();
          a.Ka = this.Ka.concat();
          a.Ce = this.Ce.concat();
          a.Rf = this.Rf && this.Rf.concat();
          a.Zd = this.Zd && this.Zd.concat();
          a.Jm = this.Jm;
          return a
      };
      ytPlayer.h.transform = function(a) {
          if (!this.Jm) throw Error("Non-simple path");
          a.transform(this.Ce, 0, this.Ce, 0, this.Ce.length / 2);
          this.Rf && a.transform(this.Rf, 0, this.Rf, 0, 1);
          this.Zd && this.Rf != this.Zd && a.transform(this.Zd, 0, this.Zd, 0, 1);
          return this
      };
      ytPlayer.h.isEmpty = function() {
          return 0 == this.rb.length
      };
      ytPlayer.A(Wva, u2);
      x2.prototype.Cb = function() {
          return this.l
      };
      ytPlayer.A(y2, ytPlayer.Tu);
      y2.prototype.B = null;
      y2.prototype.Hj = function() {
          return this.Re ? ytPlayer.Kh(this.la()) : ytPlayer.ua(this.width) && ytPlayer.ua(this.height) ? new ytPlayer.I(this.width, this.height) : null
      };
      y2.prototype.resume = function() {};
      ytPlayer.A(s2, Sva);
      ytPlayer.A(r2, Sva);
      ytPlayer.A(z2, Tva);
      z2.prototype.clear = function() {
          ytPlayer.Id(this.la())
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
      ytPlayer.A(Xva, Wva);
      var C2;
      ytPlayer.A(A2, y2);
      var Zva = 0;
      ytPlayer.h = A2.prototype;
      ytPlayer.h.zo = function() {
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
          this.o && (this.la().setAttribute("preserveAspectRatio", "none"), this.M ? this.wq() : this.la().setAttribute("viewBox", "0 0 " + (this.o ? this.o + " " + this.K : "")))
      };
      ytPlayer.h.wq = function() {
          if (this.Re) {
              var a = this.Hj();
              if (0 == a.width) this.la().style.visibility = "hidden";
              else {
                  this.la().style.visibility = "";
                  var b = a.width / this.o;
                  a = a.height / this.K;
                  this.B.la().setAttribute("transform", "scale(" + b + " " + a + ") translate(0 0)")
              }
          }
      };
      ytPlayer.h.setSize = function(a, b) {
          ytPlayer.Jh(this.la(), a, b)
      };
      ytPlayer.h.Hj = function() {
          if (!ytPlayer.rh) return this.Re ? ytPlayer.Kh(this.la()) : A2.ba.Hj.call(this);
          var a = this.width,
              b = this.height,
              c = ytPlayer.u(a) && -1 != a.indexOf("%"),
              d = ytPlayer.u(b) && -1 != b.indexOf("%");
          if (!this.Re && (c || d)) return null;
          if (c) {
              var e = this.la().parentNode;
              var f = ytPlayer.Kh(e);
              a = (0, window.parseFloat)(a) * f.width / 100
          }
          d && (e = e || this.la().parentNode, f = f || ytPlayer.Kh(e), b = (0, window.parseFloat)(b) * f.height / 100);
          return new ytPlayer.I(a, b)
      };
      ytPlayer.h.clear = function() {
          this.B.clear();
          ytPlayer.Id(this.F);
          this.l = {}
      };
      ytPlayer.h.yj = function() {
          var a = this.Hj();
          A2.ba.yj.call(this);
          a || this.dispatchEvent("resize");
          if (this.M) {
              a = this.width;
              var b = this.height;
              "string" == typeof a && -1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%") && this.I.U($va(), "tick", this.wq);
              this.wq()
          }
      };
      ytPlayer.h.ql = function() {
          A2.ba.ql.call(this);
          this.M && this.I.Ea($va(), "tick", this.wq)
      };
      ytPlayer.h.V = function() {
          delete this.l;
          delete this.F;
          delete this.B;
          this.I.dispose();
          delete this.I;
          A2.ba.V.call(this)
      };
      ytPlayer.q(G2, ytPlayer.sV);
      ytPlayer.h = G2.prototype;
      ytPlayer.h.load = function() {
          ytPlayer.sV.prototype.load.call(this);
          if (!H2(ytPlayer.Y(this.g).playerStyle)) {
              var a = this.g.getVideoData();
              if (a = a.cj ? null : a.qb && a.qb.endscreen && a.qb.endscreen.endscreenRenderer || null) a = F2(a, this.M ? "new" : "current"), I2(this, a);
              else {
                  var b = this.g.getVideoData();
                  a = b.videoId;
                  this.B && this.B.abort();
                  a = {
                      method: "POST",
                      wd: (0, ytPlayer.z)(this.FR, this, a),
                      ad: {
                          v: a
                      },
                      withCredentials: !0
                  };
                  "gaming" == ytPlayer.Y(this.g).playerStyle && (a.ad.gaming = "1");
                  this.M && (a.ad.ptype = "embedded");
                  var c = this.g.getVideoData().Jy;
                  c && (a.Ob = {
                      ad_tracking: c
                  });
                  if (b = ytPlayer.LO(b))
                      if (b = ytPlayer.Mc(b), b = ytPlayer.Jc(b)) this.B = ytPlayer.nE(b, a)
              }
          }
      };
      ytPlayer.h.unload = function() {
          I2(this, null);
          this.B && (this.B.abort(), this.B = null);
          ytPlayer.sV.prototype.unload.call(this)
      };
      ytPlayer.h.CM = function(a, b) {
          if (!H2(ytPlayer.Y(this.g).playerStyle)) return null;
          if ("loadCustomEndscreenRenderer" == a) {
              var c = F2(b, "new");
              I2(this, c);
              return !0
          }
          return null
      };
      ytPlayer.h.DM = function() {
          return H2(ytPlayer.Y(this.g).playerStyle) ? ["loadCustomEndscreenRenderer"] : []
      };
      ytPlayer.h.FR = function(a, b) {
          var c = this.B = null;
          if (200 == b.status) {
              var d = b.responseText;
              ")]}" == d.substring(0, 3) && (d = d.substring(3), c = JSON.parse(d), c = F2(c, this.M ? "new" : "current"))
          }
          I2(this, c)
      };
      ytPlayer.h.XA = function() {
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
                      this.A && ytPlayer.ph(this.A.element, "outline-width", Math.max(b.width, b.height) + "px");
                      for (b = 0; b < this.o.elements.length;
                          ++b)
                          if (f = this.o.elements[b].id, e = this.l[f], k = this.F[f], e && k) {
                              var l = k.width * c / k.aspectRatio;
                              f = Math.round(l * a.height);
                              var m =
                                  a.left + Math.round(k.left * a.width),
                                  n = a.top + Math.round(k.top * a.height);
                              ytPlayer.Jh(e.element, Math.round(k.width * a.width), f);
                              ytPlayer.wh(e.element, m, n);
                              ytPlayer.nq(e.element, mza);
                              m = k.left + k.width / 2;
                              k = k.top + l / 2;
                              ytPlayer.S(e.element, .5 >= m && .5 >= k ? "ytp-ce-top-left-quad" : .5 < m && .5 >= k ? "ytp-ce-top-right-quad" : .5 >= m && .5 < k ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad");
                              ytPlayer.nq(e.element, lza);
                              ytPlayer.S(e.element, d);
                              (e = ytPlayer.qd(window.document, "div", "ytp-ce-expanding-overlay-body", e.element)[0]) && ytPlayer.ph(e, "height", f + "px")
                          }
                  }
              }
          }
      };
      ytPlayer.h.EM = function(a) {
          if (this.o)
              if ("ytp-ce-in-endscreen" == a.getId()) this.J = !1, this.o.skip && 1 == this.g.Bh() ? (ytPlayer.XU(this.g, !0), this.g.ac(window.Infinity), this.J = !0) : (L2(this, this.o.impressionUrls), (a = ytPlayer.MG()) && D2(a, this.o.visualElement));
              else if (!this.J) {
              a = a.getId().substring(15);
              var b = this.l[a],
                  c = this.F[a];
              ytPlayer.S(b.element, "ytp-ce-element-show");
              b.element.removeAttribute("aria-hidden");
              b = this.g.getRootNode();
              ytPlayer.S(b, "ytp-ce-shown");
              L2(this, c.impressionUrls);
              (b = ytPlayer.MG()) && D2(b, c.visualElement);
              ytPlayer.Y(this.g).zb && this.g.va("endscreenelementshown",
                  a)
          }
      };
      ytPlayer.h.FM = function(a) {
          if ("ytp-ce-in-endscreen" != a.getId() && !this.J) {
              a = a.getId().substring(15);
              var b = this.l[a];
              ytPlayer.mq(b.element, "ytp-ce-element-show");
              b.element.setAttribute("aria-hidden", !0);
              b = this.g.getRootNode();
              ytPlayer.mq(b, "ytp-ce-shown");
              ytPlayer.Y(this.g).zb && this.g.va("endscreenelementhidden", a)
          }
      };
      ytPlayer.h.RU = function(a) {
          var b = this;
          a.target === window && (new ytPlayer.Yt(function() {
                  for (var a in b.l) ytPlayer.nq(b.l[a].element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"])
              },
              0)).start()
      };
      ytPlayer.h.HC = function(a, b) {
          if (a.targetUrl && (!b || "keypress" != b.type || 13 == b.keyCode)) {
              for (var c = b.target; c && !ytPlayer.kq(c, "ytp-ce-element");) {
                  ytPlayer.kq(c, "subscribe-label") && M2(this, a);
                  if (ytPlayer.kq(c, "ytp-ce-channel-subscribe")) return;
                  c = ytPlayer.Pd(c)
              }
              if (!c || ytPlayer.kq(c, "ytp-ce-element-hover")) {
                  b.preventDefault();
                  b.stopPropagation();
                  if (c = this.l[a.id]) this.Ru(c, a), c.element.blur();
                  b.ctrlKey || b.metaKey || "new" == a.mq ? (M2(this, a), this.aE(), this.g.hd(), c = ytPlayer.Mc(a.targetUrl), c = ytPlayer.Jc(c), ytPlayer.vV(c, void 0, a.Rd)) : (c = (0, ytPlayer.z)(this.aE, this, ytPlayer.Ga(ytPlayer.uV, a.targetUrl,
                      a.Rd)), M2(this, a, c))
              }
          }
      };
      ytPlayer.h.Ut = function(a, b) {
          ytPlayer.kq(a.element, "ytp-ce-element-hover") || ("VIDEO" == b.type || "PLAYLIST" == b.type ? ytPlayer.S(a.element, "ytp-ce-element-hover") : ytPlayer.Y(this.g).l ? (new ytPlayer.Yt(function() {
                  ytPlayer.S(a.element, "ytp-ce-element-hover")
              },
              200)).start() : ytPlayer.S(a.element, "ytp-ce-element-hover"), L2(this, b.MK), K2(this, b.id, !0))
      };
      ytPlayer.h.Ru = function(a, b) {
          ytPlayer.mq(a.element, "ytp-ce-element-hover");
          ytPlayer.mq(a.element, "ytp-ce-force-expand");
          K2(this, b.id, !1)
      };
      ytPlayer.h.aE = function(a) {
          this.g.Ni(17, a)
      };
      var kza = [346, 426, 470, 506, 570, 640, 853, 1280, 1920],
          lza = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" "),
          mza = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"];
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
      ytPlayer.q(ywa, Z2);
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
          a = ytPlayer.Ob(this.g, function(a) {
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
      ytPlayer.q(l3, f3);
      l3.prototype.o = function(a, b) {
          var c = e3(a);
          if (c) {
              var d = $2(c, b);
              if (!(0 >= d.width || 0 >= d.height)) {
                  var e;
                  if (e = (c = (c = Vwa(a)) && c.g ? c.g : null) && c.length ? c[0] : null) {
                      var f = ytPlayer.gh(uwa(b, vwa(e, new ytPlayer.bh(e.F, e.H, e.Qk, e.o), b.g))),
                          k = d.clone();
                      c = new ytPlayer.bh(f.x, f.y, 1, 1);
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
                      d = new ytPlayer.bh(d.left - k.left, d.top - k.top, d.width, d.height);
                      var n = new ytPlayer.hd(f.x - k.left, f.y - k.top);
                      this.A = 17 * Y2(b.g, e.l, e.g ? e.g : "xy");
                      e = c.cornerRadius;
                      f = a.l;
                      var p = this.g && d3(a),
                          r = p ? f.borderWidth + 1 : f.borderWidth;
                      p = (f = r ? new x2(r, p ? f.l : f.borderColor) : null) ? f.Cb() / 2 : 0;
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
                      "t" == r && (ha.Ec(v.start, d + p), ha.Ec(D, n), ha.Ec(v.end, d + p));
                      ha.Ec(T + H - e - p, d + p);
                      w2(ha, e, e, -90);
                      "r" == r && (ha.Ec(T + H - p, v.start),
                          ha.Ec(D, n), ha.Ec(T + H - p, v.end));
                      ha.Ec(T + H - p, d + L - e - p);
                      w2(ha, e, e, 0);
                      "b" == r && (ha.Ec(v.end, d + L - p), ha.Ec(D, n), ha.Ec(v.start, d + L - p));
                      ha.Ec(T + e + p, d + L - p);
                      w2(ha, e, e, 90);
                      "l" == r && (ha.Ec(T + p, v.end), ha.Ec(D, n), ha.Ec(T + p, v.start));
                      ha.Ec(T + p, d + e + p);
                      w2(ha, e, e, 180);
                      ha.close();
                      B2(l, ha, f, m);
                      if (m = this.la()) ytPlayer.S(m, "annotation-shape"), ytPlayer.S(m, "annotation-speech-shape"), ytPlayer.wh(m, k.left, k.top), ytPlayer.Jh(m, k.width, k.height), gxa(l, m, c.effects)
                  }
              }
          }
      };
      l3.prototype.C = function(a, b, c, d) {
          function e(a, c, d, e) {
              a = Math.min(Math.max(e - 2 * b, 0), a);
              c = ytPlayer.dd(c - a / 2, d + b, d + e - a - b);
              return new Y1(c, c + a)
          }
          return "t" == d || "b" == d ? e(this.A, c.x, a.left, a.width) : "l" == d || "r" == d ? e(this.A, c.y, a.top, a.height) : new Y1(0, 0)
      };
      ytPlayer.q(m3, f3);
      m3.prototype.o = function(a, b) {
          var c = e3(a);
          if (c) {
              var d = $2(c, b);
              if (!(0 >= d.width || 0 >= d.height)) {
                  var e = a.l;
                  c = k3(d, e.effects);
                  var f = g3(this, c.width, c.height),
                      k = new ytPlayer.bh(0, 0, d.width, d.height),
                      l = e.cornerRadius;
                  d = new x2(!e.o && this.g ? 1 : e.o, e.bgColor);
                  var m = new r2("#000", 0),
                      n = d ? d.Cb() / 2 + 1 : 0;
                  k = exa(k, l, n);
                  B2(f, k, d, m);
                  f = this.la();
                  ytPlayer.S(f, "annotation-shape");
                  e = e.g;
                  ytPlayer.Mh(f, this.g ? Math.max(e, .9) : e);
                  ytPlayer.wh(f, c.left, c.top);
                  ytPlayer.Jh(f, c.width, c.height)
              }
          }
      };
      ytPlayer.q(n3, f3);
      n3.prototype.o = function(a, b) {
          var c = e3(a);
          if (c) {
              var d = $2(c, b);
              if (!(0 >= d.width || 0 >= d.height)) {
                  c = a.l;
                  var e = k3(d, c.effects),
                      f = g3(this, e.width, e.height),
                      k = new ytPlayer.bh(0, 0, d.width, d.height);
                  d = fxa(c, d.width, d.height, this.g);
                  var l = c.cornerRadius;
                  var m = a.l;
                  var n = this.g && d3(a),
                      p = n ? m.borderWidth + 1 : m.borderWidth;
                  n = (m = p ? new x2(p, n ? m.l : m.borderColor) : null) ? m.Cb() / 2 + 1 : 0;
                  k = exa(k, l, n);
                  B2(f, k, m, d);
                  if (k = this.la()) ytPlayer.S(k, "annotation-shape"), ytPlayer.S(k, "annotation-popup-shape"), ytPlayer.wh(k, e.left, e.top), ytPlayer.Jh(k, e.width, e.height), gxa(f,
                      k, c.effects)
              }
          }
      };
      ytPlayer.q(o3, l3);
      o3.prototype.C = function(a, b, c, d) {
          function e(a, c, d, e) {
              a = Math.min(Math.max(e - 2 * b, 0), a);
              c = c <= d + e / 2 ? Math.max(d + e / 4 - a / 2, d + b) : Math.min(d + 3 * e / 4 - a / 2, d + e - a - b);
              return new Y1(c, c + a)
          }
          return "t" == d || "b" == d ? e(this.A, c.x, a.left, a.width) : "l" == d || "r" == d ? e(this.A, c.y, a.top, a.height) : new Y1(0, 0)
      };
      ytPlayer.q(p3, ytPlayer.M);
      ytPlayer.h = p3.prototype;
      ytPlayer.h.AB = function() {
          this.H || (this.A && ytPlayer.O(this.A, !0), this.B && ytPlayer.O(this.B, !0), this.o && (this.o.g = !0, ytPlayer.Mh(this.l, t3(this) ? 1 : 0), this.o.o(this.g, r3(this))), this.F.isActive() && this.F.stop(), this.H = !0, this.I = this.W.xh(ytPlayer.VU(this.C), "mouseleave", function(a) {
              this.wp.stop();
              this.Ih(a)
          }))
      };
      ytPlayer.h.Ih = function() {
          this.H && (this.M ? this.F.start() : this.Kz(), this.o && (this.o.g = !1, ytPlayer.Mh(this.l, t3(this) ? 1 : 0), this.o.o(this.g, r3(this))), this.H = !1, this.I && (this.W.Ea(this.I), this.I = null))
      };
      ytPlayer.h.Kz = function() {
          this.A && ytPlayer.O(this.A, !1);
          this.B && ytPlayer.O(this.B, !1)
      };
      ytPlayer.h.KO = function(a) {
          this.Y = a;
          this.wp.Kj()
      };
      ytPlayer.h.JO = function() {
          var a = this.Y,
              b = new ytPlayer.hd(a.clientX, a.clientY),
              c = ytPlayer.Ch(this.C.getRootNode()),
              d = lxa(c, this.K);
          c = (this.B && ytPlayer.Nh(this.B) || this.A && ytPlayer.Nh(this.A)) && lxa(c, this.M);
          d && d.contains(b) || c && c.contains(b) ? this.AB(a) : this.Ih(a)
      };
      ytPlayer.h.show = function() {
          var a = this.g.l;
          a = (a && 0 == a.g || "title" == this.g.style || "highlightText" == this.g.style ? !1 : !0) && !this.o;
          var b = !this.l,
              c = "widget" == this.g.type;
          if (a) {
              var d = r3(this),
                  e = null;
              "highlight" == this.g.type || "label" == this.g.style ? e = new m3 : "popup" == this.g.style ? e = new n3 : "anchored" == this.g.style ? e = new l3 : "speech" == this.g.style && (e = new o3);
              e && (e.o(this.g, d), this.o = e, d = e.la()) && (ytPlayer.O(d, !1), ytPlayer.S(d, "annotation-type-" + this.g.type.toLowerCase()), this.X(d))
          }
          if (b) {
              d = ["annotation"];
              "highlightText" != this.g.style ||
                  d.push("annotation-no-mouse");
              d.push("annotation-type-" + this.g.type.toLowerCase());
              this.l = ytPlayer.K("DIV", d);
              ytPlayer.O(this.l, !1);
              this.g.A && (this.D = ytPlayer.K("DIV", "inner-text"), "label" == this.g.style && (ytPlayer.S(this.D, "label-text"), this.D.style.backgroundColor = this.g.l.bgColor), ytPlayer.Sd(this.D, this.g.A), this.l.appendChild(this.D));
              ytPlayer.aF(this.l, "annotation_id", this.g.id);
              this.X(this.l);
              ixa(this, this.l);
              if (d3(this.g) && this.g.showLinkIcon()) {
                  if (e = this.g.Ta()) d = this.l, e = new ytPlayer.vm(X2(e)), d.title = e.l + e.o;
                  this.B = ytPlayer.K("SPAN", "annotation-link-icon");
                  ytPlayer.O(this.B, !1);
                  this.l.appendChild(this.B)
              }
              jxa(this);
              d3(this.g) || (this.l.style.cursor = "default")
          }
          c && "subscribe" == this.g.style && ytPlayer.J("yt-uix-subscription-button", this.l);
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
          ytPlayer.O(this.l, !0);
          ytPlayer.Mh(this.l, t3(this) ? 1 : 0);
          s3(this);
          this.o && this.o.la() && ytPlayer.O(this.o.la(), !0)
      };
      ytPlayer.h.hide = function() {
          this.l && ytPlayer.O(this.l, !1);
          this.o && this.o.la() && ytPlayer.O(this.o.la(), !1);
          this.J && (this.W.Ea(this.J), this.J = null)
      };
      ytPlayer.q(u3, ytPlayer.M);
      ytPlayer.h = u3.prototype;
      ytPlayer.h.hide = function() {
          this.isVisible = !1;
          this.view && (nxa(this), this.view.hide())
      };
      ytPlayer.h.show = function() {
          this.isVisible = !0;
          this.view && (this.view.show(), this.l.subscribe("resize", this.zB, this), this.l.subscribe("onVideoAreaChange", this.mD, this))
      };
      ytPlayer.h.destroy = function() {
          if (this.view) {
              nxa(this);
              var a = this.view;
              ytPlayer.DF(a.W);
              a.wp.dispose();
              a.F.dispose();
              a.l && ytPlayer.Kd(a.l);
              a.o && a.o.la() && ytPlayer.Kd(a.o.la())
          }
          v3(this)
      };
      ytPlayer.h.mD = function() {
          s3(this.view)
      };
      ytPlayer.h.zB = function() {
          s3(this.view)
      };
      ytPlayer.q(oxa, p2);
      ytPlayer.q(w3, p2);
      ytPlayer.q(pxa, w3);
      ytPlayer.q(qxa, p2);
      ytPlayer.q(rxa, p2);
      ytPlayer.q(txa, w3);
      ytPlayer.q(uxa, w3);
      ytPlayer.q(vxa, p2);
      ytPlayer.q(x3, p2);
      G3.prototype.o = function(a, b) {
          var c = ytPlayer.Zd(b.target, "label");
          c && ytPlayer.U(c, "iv-card-poll-choice-focused", a)
      };
      G3.prototype.D = function(a, b) {
          var c = ytPlayer.$d(b.target, "iv-card-poll");
          if (c)
              if (a.A) ytPlayer.J("iv-card-sign-in-button", c).click();
              else {
                  var d = (0, window.parseInt)(Z1(b.target, "pollChoiceIndex"), 10);
                  if (null == a.g) a.choices[d].count++, a.g = d;
                  else if (a.g != d) {
                      var e = a.choices[a.g];
                      e.count = Math.max(e.count - 1, 0);
                      a.choices[d].count++;
                      a.g = d
                  } else e = a.choices[a.g], e.count = Math.max(e.count - 1, 0), a.g = null;
                  Axa(a, c);
                  ytPlayer.rE(this.g.videoData.Of, {
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
                  (c = ytPlayer.MG()) && E2(c, a.C)
              }
      };
      G3.prototype.C = function(a) {
          var b = ytPlayer.x("yt.www.ypc.bootstrap.api.loadOffersForInnertubeRequestParams"),
              c;
          b && (c = function() {
              b(a.H, a.B)
          });
          Exa(this, a, !0, c)
      };
      G3.prototype.F = function(a) {
          var b = ytPlayer.x("yt.www.ypc.bootstrap.api.loadOffers");
          b && (b = ytPlayer.Ga(b, a.K, a.H, a.B));
          Exa(this, a, !1, b)
      };
      ytPlayer.q(Q3, ytPlayer.M);
      ytPlayer.h = Q3.prototype;
      ytPlayer.h.gq = function() {
          this.context.o.subscribe("resize", this.Fn, this)
      };
      ytPlayer.h.la = function() {
          return this.Ga
      };
      ytPlayer.h.Zi = function(a, b, c, d, e, f, k) {
          this.context.g.U(a, "click", ytPlayer.Ga(this.Uo, b, c, d, e, f || [], k || 0), this);
          this.context.g.U(a, "touchstart", ytPlayer.Ga(function() {
              this.Yv = !1
          }), this);
          this.context.g.U(a, "touchmove", ytPlayer.Ga(function() {
              this.Yv = !0
          }), this)
      };
      ytPlayer.h.Uo = function(a, b, c, d, e, f, k) {
          if (this.Yv) return !1;
          k && (k.stopPropagation(), k.preventDefault());
          Mxa(this, a, c, d, e, f);
          return !1
      };
      ytPlayer.h.show = function() {
          this.Y = (0, ytPlayer.F)()
      };
      ytPlayer.h.hide = function() {};
      ytPlayer.h.destroy = function() {
          ytPlayer.Kd(this.la())
      };
      ytPlayer.h.Fn = function() {};
      ytPlayer.q(U3, Q3);
      ytPlayer.h = U3.prototype;
      ytPlayer.h.isAvailable = function() {
          var a;
          if (a = !!this.o.length)(a = this.g.getRootNode()) ? (a = ytPlayer.Kh(a), a = 173 < a.width && 173 < a.height) : a = !1;
          return a
      };
      ytPlayer.h.Fn = function() {
          var a = this.isAvailable();
          ytPlayer.O(this.la(), a);
          ytPlayer.U(this.context.l.getRootNode(), "ytp-iv-drawer-enabled", a);
          U1(this.g)
      };
      ytPlayer.h.destroy = function() {
          var a = ytPlayer.NU(this.g).B;
          a && a.St(!1, void 0);
          this.g.getRootNode().removeChild(this.D);
          ytPlayer.VF(this.ha);
          ytPlayer.sF(this.X);
          this.Z && this.Z.dispose();
          this.F && this.F.dispose();
          Q3.prototype.destroy.call(this)
      };
      ytPlayer.h.ZM = function(a) {
          this.J.start();
          a.preventDefault();
          a = a || window.event;
          var b = 0;
          "MozMousePixelScroll" == a.type ? b = 0 == (a.axis == a.HORIZONTAL_AXIS) ? a.detail : 0 : window.opera ? b = a.detail : b = 0 == a.wheelDelta % 120 ? "WebkitTransform" in window.document.documentElement.style ? window.chrome && 0 == window.navigator.platform.indexOf("Mac") ? a.wheelDeltaY / -30 : a.wheelDeltaY / -1.2 : a.wheelDelta / -1.6 : a.wheelDeltaY / -3;
          if (a = b) this.A.scrollTop += a
      };
      ytPlayer.h.kE = function(a) {
          if (!ytPlayer.kq(this.g.getRootNode(), "ytp-cards-teaser-shown")) {
              this.l != a && (this.l = a, V3(this));
              if (ytPlayer.Nh(this.la())) {
                  if (2 == this.context.l.Qa()) var b = 1 == ((0, window.isNaN)(void 0) ? this.context.l.gB() : void 0);
                  else b = (0, window.isNaN)(void 0) ? this.context.l.Bh() : void 0, b = 1 == b || 0 == b && 0 === this.context.l.getCurrentTime();
                  if (b && a.hc.teaserDurationMs) {
                      b = {
                          teaserText: a.hc.teaserText,
                          durationMs: a.hc.teaserDurationMs
                      };
                      var c = ytPlayer.NU(this.g).B;
                      c && c.St(!0, b)
                  }
              }
              this.na.isActive() || ((!this.B || !this.J.isActive() &&
                  this.T) && Wxa(this, a), this.na.start(910 + a.hc.teaserDurationMs))
          }
      };
      ytPlayer.h.MV = function(a) {
          this.B || (this.l = a, V3(this), Wxa(this, a), S3(this, "YOUTUBE_DRAWER_AUTO_OPEN", !1, a))
      };
      ytPlayer.h.fJ = function() {
          if (this.B) {
              E3(this.context.logger, this.M, 4, W3(this).l.close);
              var a = ytPlayer.MG();
              a && this.I && E2(a, this.I);
              T3(this)
          }
      };
      ytPlayer.h.qJ = function() {
          ytPlayer.U(this.D, "iv-drawer-scrolled", 0 < this.A.scrollTop)
      };
      ytPlayer.h.YL = function() {
          var a = W3(this);
          F3(this.context.logger, 8, a.o, a.l.dW);
          var b = ytPlayer.MG();
          b && a && (D2(b, a.F), D2(b, a.D))
      };
      ytPlayer.h.XL = function(a) {
          var b = W3(this),
              c = ytPlayer.MG();
          this.l ? a ? (a = this.context.logger, F3(a, 9, b.o, b.l.Dv), a.g.Ni(4, void 0), c && E2(c, b.F)) : (a = this.context.logger, F3(a, 12, b.o, b.l.Dv), a.g.Ni(4, void 0), c && E2(c, b.D)) : (a = this.context.logger, E3(a, this.M, 12, b.l.Dv), a.g.Ni(4, void 0), c && this.ga && E2(c, this.ga))
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
      ytPlayer.q(X3, Q3);
      X3.prototype.gq = function() {
          Q3.prototype.gq.call(this);
          Xxa(this)
      };
      ytPlayer.q(Y3, X3);
      ytPlayer.h = Y3.prototype;
      ytPlayer.h.UV = function(a, b, c, d) {
          this.o.stop();
          if (!this.A) {
              var e = ytPlayer.Kh(a);
              this.g || (ytPlayer.Ih(a, e.width), ytPlayer.Ih(b, e.width));
              ytPlayer.ph(c, "top", e.height - Math.max(Math.min(e.height, d) / 2 + 10, 20) + "px");
              ytPlayer.ph(c, "right", "1px");
              this.A = !0;
              ytPlayer.O(a, !0);
              this.B = new ytPlayer.Yt(function() {
                      ytPlayer.S(this.la(), "iv-branding-active")
                  },
                  0, this);
              this.B.start()
          }
      };
      ytPlayer.h.JK = function(a, b) {
          ytPlayer.mq(this.la(), "iv-branding-active");
          this.C = new ytPlayer.Yt((0, ytPlayer.z)(function() {
                  ytPlayer.O(a, !1);
                  this.g || ytPlayer.Ih(b, 0)
              },
              this), 250);
          this.C.start();
          this.A = !1
      };
      ytPlayer.h.show = function() {
          if (!this.isActive) {
              X3.prototype.show.call(this);
              if (!this.D) {
                  ytPlayer.S(this.la(), "iv-branding");
                  var a = this.annotation.data;
                  this.F = a.image_width;
                  this.l = ytPlayer.K("IMG", {
                      src: a.image_url,
                      "class": "branding-img iv-click-target",
                      width: a.image_width,
                      height: a.image_height
                  });
                  ytPlayer.O(this.l, !1);
                  var b = ytPlayer.K("DIV", "branding-img-container", this.l);
                  this.la().appendChild(b);
                  var c = ytPlayer.K("DIV", "iv-branding-context-name");
                  ytPlayer.Sd(c, a.channel_name);
                  var d = ytPlayer.K("DIV", "iv-branding-context-subscribe");
                  if (b = a.standalone_subscribe_button_data) this.g =
                      new ytPlayer.y_(b.subscribeText, b.subscribeCount, b.unsubscribeText, b.unsubscribeCount, !!b.enabled, !!b.classic, a.channel_id, !!b.subscribed, b.feature, a.session_data.itct, b.signinUrl, this.H.l), this.g.ua(d);
                  b = ytPlayer.K("DIV", "iv-branding-context-subscribe-caret");
                  c = ytPlayer.K("DIV", "branding-context-container-inner", b, c, d);
                  ytPlayer.O(c, !1);
                  d = ytPlayer.K("DIV", "branding-context-container-outer", c);
                  ytPlayer.ph(d, "right", this.F + "px");
                  this.la().appendChild(d);
                  var e = this.annotation.Ta();
                  e && this.Zi(this.l, e, this.annotation.id, a.session_data, this.annotation.g);
                  this.o = new ytPlayer.Yt(ytPlayer.Ga(this.JK, c, d), 500, this);
                  ytPlayer.N(this, this.o);
                  this.context.g.U(this.la(), "mouseover", (0, ytPlayer.z)(this.UV, this, c, d, b, a.image_height));
                  this.context.g.U(this.la(), "mouseout", (0, ytPlayer.z)(this.o.start, this.o, void 0));
                  this.D = !0
              }
              B3(this.context.logger, this.annotation.g);
              ytPlayer.O(this.la(), !0);
              this.isActive = !0;
              if (this.l) {
                  a = this.l;
                  var f = void 0 === f ? 0 : f;
                  b = ytPlayer.Lh(a).width;
                  c = ytPlayer.ua(void 0) ? void 0 : b;
                  ytPlayer.wh(a, c);
                  f = new f2(a, [c, a.offsetTop], [c - b - f, a.offsetTop], 200, Gva);
                  ytPlayer.N(this, f);
                  this.context.A.U(f, "begin", ytPlayer.Ga(ytPlayer.O,
                      a, !0));
                  f.play()
              }
          }
      };
      ytPlayer.h.hide = function() {
          this.isActive && (ytPlayer.O(this.la(), !1), this.isActive = !1)
      };
      ytPlayer.h.destroy = function() {
          this.g && (this.g.dispose(), this.g = null);
          X3.prototype.destroy.call(this)
      };
      ytPlayer.q(Z3, X3);
      ytPlayer.h = Z3.prototype;
      ytPlayer.h.show = function() {
          this.isActive || (X3.prototype.show.call(this), this.I || (Yxa(this), this.I = !0), ytPlayer.O(this.la(), !0), this.annotation && this.annotation.g && B3(this.context.logger, this.annotation.g), ytPlayer.tg(function() {
                  ytPlayer.mq(this.la(), "iv-promo-inactive")
              },
              100, this), this.la().removeAttribute("aria-hidden"), this.isActive = !0, $3(this), $xa(this), aya(this, this.F))
      };
      ytPlayer.h.hide = function() {
          this.isActive && (ytPlayer.S(this.la(), "iv-promo-inactive"), this.isActive = !1, this.la().setAttribute("aria-hidden", !0))
      };
      ytPlayer.h.Uo = function(a, b, c, d, e, f, k) {
          return this.B ? !1 : X3.prototype.Uo.call(this, a, b, c, d, e, f, k)
      };
      ytPlayer.h.ys = function(a, b) {
          b.stopPropagation();
          $xa(this);
          aya(this, a);
          this.g.focus()
      };
      ytPlayer.h.fK = function(a) {
          this.H = !0;
          this.ys(500, a)
      };
      ytPlayer.h.eK = function() {
          this.H = !1;
          Zxa(this)
      };
      ytPlayer.h.LO = function(a) {
          a.stopPropagation();
          this.hide();
          D3(this.context.logger, this.annotation.g)
      };
      ytPlayer.h.UJ = function(a) {
          a.stopPropagation();
          $3(this);
          this.B = !0;
          ytPlayer.S(this.la(), "iv-promo-collapsed-no-delay");
          this.C.start();
          D3(this.context.logger, this.annotation.g)
      };
      ytPlayer.h.destroy = function() {
          this.C.dispose();
          X3.prototype.destroy.call(this)
      };
      ytPlayer.q(a4, ytPlayer.sV);
      ytPlayer.h = a4.prototype;
      ytPlayer.h.wM = function(a, b) {
          if (!cya(ytPlayer.Y(this.g).playerStyle)) return null;
          switch (a) {
              case "loadCustomAnnotationsXml":
                  var c = ytPlayer.Vr(b);
                  c && c4(this, c);
                  return !0;
              case "removeCustomAnnotationById":
                  return b && this.l && (Pxa(this.l, b), U1(this.g)), !0
          }
          return null
      };
      ytPlayer.h.xM = function() {
          return cya(ytPlayer.Y(this.g).playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : []
      };
      ytPlayer.h.Tu = function() {
          if (this.C) {
              var a = ytPlayer.W_(ytPlayer.VU(this.g), !0);
              ytPlayer.Jh(this.C.element, a.width, a.height);
              ytPlayer.wh(this.C.element, a.left, a.top)
          }
          if (this.l) {
              var b = ytPlayer.eV(this.g);
              a = this.l;
              b = b.width;
              ytPlayer.U(a.D, "iv-drawer-small", 426 >= b);
              ytPlayer.U(a.D, "iv-drawer-big", 1280 <= b)
          }
      };
      ytPlayer.h.fT = function(a) {
          ytPlayer.Y(this.g).experiments.g("web_player_update_annotations_module_visibility_killswitch") || this.Pc(a.state);
          ytPlayer.X(a.state, 2) && (this.Vl() && this.WA() && 2 != this.g.Qa() && this.Tt(!1), this.St(!1))
      };
      ytPlayer.h.load = function() {
          ytPlayer.sV.prototype.load.call(this);
          ytPlayer.Y(this.g).experiments.g("web_player_update_annotations_module_visibility_killswitch") ? this.A.show() : this.Pc(ytPlayer.UU(this.g));
          this.I++;
          var a = this.g.getVideoData(),
              b = a.videoId,
              c = (0, ytPlayer.z)(this.JR, this, b, this.I),
              d = (0, ytPlayer.z)(function() {
                      this.D = null
                  },
                  this);
          ytPlayer.nG() && (c = jya(this, c));
          c = {
              format: "XML",
              wd: c,
              onError: d,
              ad: {}
          };
          a.isPharma && (c.ad.pharma = "1");
          c.method = "POST";
          c.withCredentials = !0;
          d = ytPlayer.Y(this.g);
          "gaming" == d.playerStyle && (c.ad.gaming = "1");
          (b = d.C.get(b)) && kya(c, b);
          b = b && (b.Zh || b.tr);
          if (!a.xn || b) a.Of ? dya(this, a.Of, c) : (this.B = (0, ytPlayer.z)(this.BM, this, c), this.g.addEventListener("videodatachange", this.B));
          ytPlayer.mV(this.g, this.C.element, 4);
          this.Tu()
      };
      ytPlayer.h.Pc = function(a) {
          a = !ytPlayer.xP(a) && !ytPlayer.X(a, 1024);
          ytPlayer.sH(this.A, a);
          ytPlayer.sH(this.C, a)
      };
      ytPlayer.h.BM = function(a) {
          var b = this.g.getVideoData();
          b.Of && (this.B && (this.g.removeEventListener("videodatachange", this.B), this.B = null), dya(this, b.Of, a))
      };
      ytPlayer.h.unload = function() {
          xxa(this.Ya);
          ytPlayer.kV(this.g, "annotations_module");
          ytPlayer.Lb(this.o, function(a) {
              a.destroy()
          });
          ytPlayer.Lb(this.K, function(a) {
              a.destroy()
          });
          this.H = null;
          this.l && (this.l.destroy(), this.l = null, U1(this.g));
          this.J = !1;
          this.D && (this.D.abort(), this.D = null);
          this.o = {};
          this.K = {};
          this.A.hide();
          ytPlayer.sV.prototype.unload.call(this);
          ytPlayer.rH(this.C);
          this.B && (this.g.removeEventListener("videodatachange", this.B), this.B = null)
      };
      ytPlayer.h.JR = function(a, b, c) {
          this.D = null;
          if (!fya(this, b, a) && (a = ytPlayer.WD(c) && c.responseXML ? c.responseXML : null)) {
              c4(this, a);
              ytPlayer.S(this.g.getRootNode(), "iv-module-loaded");
              a = [];
              for (var d in this.o) {
                  b = this.o[d].annotation;
                  if (b.segment)
                      if (c = b.segment, c.g.length)
                          if (c = c.g[0].l || c.g[0].g || c.g[0].o, !c || 2 > c.length) c = null;
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
                      if (c = 1E3 * e.start, e = 1E3 * e.end, 0 == c && (c++, e++), !(e < c)) {
                          var f = {
                              id: d,
                              namespace: "annotations_module"
                          };
                          "marker" == b.type && (f.style = "ytp-chapter-marker", f.tooltip = b.A, f.visible = !0);
                          b = new ytPlayer.eQ(c, e, f);
                          a.push(b)
                      }
              }
              ytPlayer.hV(this.g, a)
          }
      };
      ytPlayer.h.lD = function(a) {
          a == this.g.getVideoData().videoId && (this.loaded ? lya(this) : this.load())
      };
      ytPlayer.h.yM = function(a) {
          a = a.getId();
          var b = this.o[a];
          b && !b.o && (b = b.annotation, oya(this, a), B3(this.Ya, b.g))
      };
      ytPlayer.h.zM = function(a) {
          d4(this, a.getId())
      };
      ytPlayer.h.Iz = function(a) {
          a && (a.hide(), e4(this, "shown", !1, a.annotation.id), this.Xn(a.annotation, "hidden"))
      };
      ytPlayer.h.CE = function(a) {
          a && (a.show(), e4(this, "shown", !0, a.annotation.id), this.Xn(a.annotation, "shown"))
      };
      ytPlayer.h.wU = function(a, b, c) {
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
      ytPlayer.h.vQ = function(a) {
          if (a && a.id) {
              var b = a.Ta();
              if (b) {
                  var c = X2(b);
                  if (c) {
                      var d = (0, ytPlayer.z)(this.Xn, this, a, "click");
                      if ("new" == P3(c, b.target) || qya(this, b)) d(), d = null;
                      C3(this.Ya, a.g, d)
                  }
              }
          }
      };
      ytPlayer.h.Xn = function(a, b) {
          Rwa(a, function(c) {
                  if (c.trigger == b && "openUrl" == c.type && c.url) {
                      var d = this.g.getVideoData(),
                          e;
                      if (!(e = !qya(this, c.url))) {
                          e = Jxa(c.url);
                          var f = Ixa(c.url);
                          e ? (d.videoId == e ? this.g.ac(f || 0) : (d = b4(this).l, ytPlayer.H0(d.app, e, void 0, void 0, void 0, void 0, void 0), f && b4(this).l.gd() && b4(this).l.ac(f)), d = !0) : d = !1;
                          e = !d
                      }
                      e && (e = ytPlayer.Y(this.g), (d = X2(c.url)) ? (f = Hxa(d), e && "com" == f[0] && "google" == f[1] && "plus" == f[2] && (e = ytPlayer.Ga(Kxa, e.pageId, e.Sc), d = new ytPlayer.vm(d), ytPlayer.zm(d, e(d.o)), d = d.toString())) : d = null, d && (this.g.hd(),
                          c = P3(d, c.url.target), e = a.itct, "ei" in ytPlayer.dE(d) && (d = ytPlayer.Vg(d, "ei")), ytPlayer.vV(d, "current" == c ? "_top" : void 0, {
                              itct: e
                          })))
                  }
              },
              this)
      };
      ytPlayer.h.SR = function() {
          e4(this, "playerControlShow", !1)
      };
      ytPlayer.h.bU = function() {
          e4(this, "playerControlShow", !0)
      };
      ytPlayer.h.AM = function(a) {
          e4(this, "rollOver", !0, a.id)
      };
      ytPlayer.h.Ih = function(a) {
          e4(this, "rollOver", !1, a.id)
      };
      ytPlayer.h.bR = function(a) {
          a && a.id && (this.o[a.id].o = !0, d4(this, a.id), D3(this.Ya, a.g), this.Xn(a, "close"), e4(this, "closed", !0, a.id))
      };
      ytPlayer.h.Vl = function() {
          return !!this.l && this.l.isAvailable()
      };
      ytPlayer.h.WA = function() {
          this.Vl();
          return !!this.l && this.l.B
      };
      ytPlayer.h.Tt = function(a, b, c) {
          b = void 0 === b ? !1 : b;
          this.Vl();
          this.l && (a ? c ? S3(this.l, c, b) : S3(this.l, "YOUTUBE_DRAWER_AUTO_OPEN", b) : T3(this.l))
      };
      ytPlayer.h.St = function(a, b) {
          this.g.R(a ? "cardsteasershow" : "cardsteaserhide", b)
      };
      ytPlayer.h.V = function() {
          ytPlayer.Y(this.g).C.unsubscribe("vast_info_card_add", this.lD, this);
          ytPlayer.mq(this.g.getRootNode(), "ytp-iv-drawer-open");
          for (var a = this.M, b = 0, c = a.length; b < c; b++) ytPlayer.oG(a[b]);
          this.M.length = 0;
          ytPlayer.sV.prototype.V.call(this)
      };
      var g4 = {},
          nza = "ontouchstart" in window.document;
      ytPlayer.rF(window.document, "blur", h4, !0);
      ytPlayer.rF(window.document, "change", h4, !0);
      ytPlayer.rF(window.document, "click", h4);
      ytPlayer.rF(window.document, "focus", h4, !0);
      ytPlayer.rF(window.document, "mouseover", h4);
      ytPlayer.rF(window.document, "mouseout", h4);
      ytPlayer.rF(window.document, "mousedown", h4);
      ytPlayer.rF(window.document, "keydown", h4);
      ytPlayer.rF(window.document, "keyup", h4);
      ytPlayer.rF(window.document, "keypress", h4);
      ytPlayer.rF(window.document, "cut", h4);
      ytPlayer.rF(window.document, "paste", h4);
      nza && (ytPlayer.rF(window.document, "touchstart", h4), ytPlayer.rF(window.document, "touchend", h4), ytPlayer.rF(window.document, "touchcancel", h4));
      ytPlayer.h = i4.prototype;
      ytPlayer.h.pe = function(a) {
          return ytPlayer.$d(a, Z(this))
      };
      ytPlayer.h.unregister = function() {
          ytPlayer.VF(this.H);
          this.H.length = 0;
          ytPlayer.HN(this.F);
          this.F.length = 0
      };
      ytPlayer.h.init = ytPlayer.y;
      ytPlayer.h.dispose = ytPlayer.y;
      ytPlayer.h.addBehavior = function(a, b, c) {
          c = Z(this, c);
          var d = (0, ytPlayer.z)(b, this);
          a in g4 || (g4[a] = new ytPlayer.XC);
          g4[a].subscribe(c, d);
          this.D[b] = d
      };
      ytPlayer.h.removeBehavior = function(a, b, c) {
          if (a in g4) {
              var d = g4[a];
              d.unsubscribe(Z(this, c), this.D[b]);
              0 >= d.Dc() && (d.dispose(), delete g4[a])
          }
          delete this.D[b]
      };
      ytPlayer.h.qj = function(a, b, c) {
          var d = this.Ba(a, b);
          if (d && (d = ytPlayer.x(d))) {
              var e = ytPlayer.$a(arguments, 2);
              ytPlayer.ab(e, 0, 0, a);
              d.apply(null, e)
          }
      };
      ytPlayer.h.Ba = function(a, b) {
          return ytPlayer.bF(a, b)
      };
      ytPlayer.h.setData = function(a, b, c) {
          ytPlayer.aF(a, b, c)
      };
      ytPlayer.A(l4, i4);
      ytPlayer.ya(l4);
      ytPlayer.h = l4.prototype;
      ytPlayer.h.register = function() {
          this.addBehavior("click", this.bG);
          this.addBehavior("keydown", this.sA);
          this.addBehavior("keypress", this.tA);
          j4(this, "page-scroll", this.hK)
      };
      ytPlayer.h.unregister = function() {
          this.removeBehavior("click", this.bG);
          this.removeBehavior("keydown", this.sA);
          this.removeBehavior("keypress", this.tA);
          r4(this);
          this.l = {};
          l4.ba.unregister.call(this)
      };
      ytPlayer.h.bG = function(a) {
          a && !a.disabled && (this.toggle(a), this.click(a))
      };
      ytPlayer.h.sA = function(a, b, c) {
          if (!(c.altKey || c.ctrlKey || c.shiftKey || c.metaKey) && (b = q4(this, a))) {
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
                  f && sya(this, a, b, c, (0, ytPlayer.z)(f, this))
              }
          }
      };
      ytPlayer.h.hK = function() {
          var a = this.l;
          if (0 != ytPlayer.Pb(a))
              for (var b in a) {
                  var c = a[b],
                      d = ytPlayer.$d(c.activeButtonNode || c.parentNode, Z(this));
                  if (void 0 == d || void 0 == c) break;
                  p4(this, d, c, !0)
              }
      };
      ytPlayer.h.tA = function(a, b, c) {
          c.altKey || c.ctrlKey || c.shiftKey || c.metaKey || (a = q4(this, a), m2(a) && c.preventDefault())
      };
      ytPlayer.h.hM = function(a, b, c) {
          var d = m4(this, b);
          if (d) {
              b = Kva("table", b);
              var e = Kva("tr", b);
              e = ytPlayer.qd(window.document, "td", null, e).length;
              b = ytPlayer.qd(window.document, "td", null, b);
              d = uya(d, b, e, c); -
              1 != d && (tya(this, a, b[d]), c.preventDefault())
          }
      };
      ytPlayer.h.iM = function(a, b, c) {
          if (40 == c.keyCode || 38 == c.keyCode) {
              var d = m4(this, b);
              d && (b = (0, ytPlayer.Ld)(ytPlayer.qd(window.document, "li", null, b), m2), d = uya(d, b, 1, c), tya(this, a, b[d]), c.preventDefault())
          }
      };
      ytPlayer.h.dG = function(a) {
          if (a) {
              var b = q4(this, a);
              if (b) {
                  a.setAttribute("aria-pressed", "true");
                  a.setAttribute("aria-expanded", "true");
                  b.originalParentNode = b.parentNode;
                  b.activeButtonNode = a;
                  b.parentNode.removeChild(b);
                  var c;
                  this.Ba(a, "button-has-sibling-menu") ? c = a.parentNode : c = vya(this, a);
                  c.appendChild(b);
                  b.style.minWidth = a.offsetWidth - 2 + "px";
                  var d = o4(this, a);
                  d && c.appendChild(d);
                  (c = !!this.Ba(a, "button-menu-fixed")) && (this.l[i2(a).toString()] = b);
                  p4(this, a, b, c);
                  ytPlayer.YF("yt-uix-button-menu-before-show", a, b);
                  n2(b);
                  d && n2(d);
                  this.qj(a, "button-menu-action", !0);
                  ytPlayer.S(a, Z(this, "active"));
                  b = (0, ytPlayer.z)(this.cG, this, a, !1);
                  d = (0, ytPlayer.z)(this.cG, this, a, !0);
                  c = (0, ytPlayer.z)(this.wW, this, a, void 0);
                  this.g && q4(this, this.g) == q4(this, a) || r4(this);
                  ytPlayer.XF("yt-uix-button-menu-show", a);
                  ytPlayer.sF(this.o);
                  this.o = [ytPlayer.rF(window.document, "click", d), ytPlayer.rF(window.document, "contextmenu", b), ytPlayer.rF(window, "resize", c)];
                  this.g = a
              }
          }
      };
      ytPlayer.h.wW = function(a, b) {
          var c = q4(this, a);
          if (c) {
              b && (b instanceof ytPlayer.Uc ? c.innerHTML = ytPlayer.Vc(b) : ytPlayer.Sd(c, b));
              var d = !!this.Ba(a, "button-menu-fixed");
              p4(this, a, c, d)
          }
      };
      ytPlayer.h.cd = function() {
          return ytPlayer.J(Z(this, "content"), void 0)
      };
      ytPlayer.h.cG = function(a, b, c) {
          c = ytPlayer.tF(c);
          var d = ytPlayer.$d(c, Z(this));
          if (d) {
              d = q4(this, d);
              var e = q4(this, a);
              if (d == e) return
          }
          d = ytPlayer.$d(c, Z(this, "menu"));
          e = d == q4(this, a);
          var f = ytPlayer.kq(c, Z(this, "menu-item")),
              k = ytPlayer.kq(c, Z(this, "menu-close"));
          if (!d || e && (f || k)) n4(this, a), d && b && this.Ba(a, "button-menu-indicate-selected") && ((a = ytPlayer.J(Z(this, "content"), a)) && ytPlayer.Sd(a, W1(c)), wya(this, d, c))
      };
      ytPlayer.h.isToggled = function(a) {
          return ytPlayer.kq(a, Z(this, "toggled"))
      };
      ytPlayer.h.toggle = function(a) {
          if (this.Ba(a, "button-toggle")) {
              var b = ytPlayer.$d(a, Z(this, "group")),
                  c = Z(this, "toggled"),
                  d = ytPlayer.kq(a, c);
              if (b && this.Ba(b, "button-toggle-group")) {
                  var e = this.Ba(b, "button-toggle-group");
                  b = ytPlayer.rd(Z(this), b);
                  (0, ytPlayer.B)(b, function(b) {
                      b != a || "optional" == e && d ? (ytPlayer.mq(b, c), b.removeAttribute("aria-pressed")) : (ytPlayer.S(a, c), b.setAttribute("aria-pressed", "true"))
                  })
              } else d ? a.removeAttribute("aria-pressed") : a.setAttribute("aria-pressed", "true"), ytPlayer.pq(a, c)
          }
      };
      ytPlayer.h.click = function(a) {
          if (q4(this, a)) {
              var b = q4(this, a);
              if (b) {
                  var c = ytPlayer.$d(b.activeButtonNode || b.parentNode, Z(this));
                  c && c != a ? (n4(this, c), ytPlayer.XD((0, ytPlayer.z)(this.dG, this, a), 1)) : m2(b) ? n4(this, a) : this.dG(a)
              }
              a.focus()
          }
          this.qj(a, "button-action")
      };
      ytPlayer.A(s4, i4);
      ytPlayer.h = s4.prototype;
      ytPlayer.h.pe = function(a) {
          var b = i4.prototype.pe.call(this, a);
          return b ? b : a
      };
      ytPlayer.h.register = function() {
          j4(this, "yt-uix-kbd-nav-move-out-done", this.hide)
      };
      ytPlayer.h.dispose = function() {
          t4(this);
          s4.ba.dispose.call(this)
      };
      ytPlayer.h.Ba = function(a, b) {
          var c = s4.ba.Ba.call(this, a, b);
          return c ? c : (c = s4.ba.Ba.call(this, a, "card-config")) && (c = ytPlayer.x(c)) && c[b] ? c[b] : null
      };
      ytPlayer.h.show = function(a) {
          var b = this.pe(a);
          if (b) {
              ytPlayer.S(b, Z(this, "active"));
              var c = xya(this, a, b);
              if (c) {
                  c.cardTargetNode = a;
                  c.cardRootNode = b;
                  yya(this, a, c);
                  var d = Z(this, "card-visible"),
                      e = this.Ba(a, "card-delegate-show") && this.Ba(b, "card-action");
                  this.qj(b, "card-action", a);
                  this.o = a;
                  o2(c);
                  ytPlayer.XD((0, ytPlayer.z)(function() {
                          e || (n2(c), ytPlayer.XF("yt-uix-card-show", b, a, c));
                          zya(c);
                          ytPlayer.S(c, d);
                          ytPlayer.XF("yt-uix-kbd-nav-move-in-to", c)
                      },
                      this), 10)
              }
          }
      };
      ytPlayer.h.hide = function(a) {
          if (a = this.pe(a)) {
              var b = ytPlayer.pd(Z(this, "card") + i2(a));
              b && (ytPlayer.mq(a, Z(this, "active")), ytPlayer.mq(b, Z(this, "card-visible")), o2(b), this.o = null, b.cardTargetNode = null, b.cardRootNode = null, b.cardMask && (ytPlayer.Kd(b.cardMask), b.cardMask = null))
          }
      };
      ytPlayer.h.uW = function(a, b) {
          var c = this.pe(a);
          if (c) {
              if (b) {
                  var d = this.Cc(c);
                  if (!d) return;
                  b instanceof ytPlayer.Uc ? d.innerHTML = ytPlayer.Vc(b) : ytPlayer.Sd(d, b)
              }
              ytPlayer.kq(c, Z(this, "active")) && (c = xya(this, a, c), yya(this, a, c), n2(c), zya(c))
          }
      };
      ytPlayer.h.isActive = function(a) {
          return (a = this.pe(a)) ? ytPlayer.kq(a, Z(this, "active")) : !1
      };
      ytPlayer.h.Cc = function(a) {
          var b = a.cardContentNode;
          if (!b) {
              var c = Z(this, "content"),
                  d = Z(this, "card-content");
              (b = (b = this.Ba(a, "card-id")) ? ytPlayer.pd(b) : ytPlayer.J(c, a)) || (b = window.document.createElement("div"));
              var e = b;
              ytPlayer.mq(e, c);
              ytPlayer.S(e, d);
              a.cardContentNode = b
          }
          return b
      };
      var v4;
      ytPlayer.A(u4, i4);
      ytPlayer.ya(u4);
      ytPlayer.h = u4.prototype;
      ytPlayer.h.register = function() {
          this.addBehavior("keydown", this.Bz);
          j4(this, "yt-uix-kbd-nav-move-in", this.gC);
          j4(this, "yt-uix-kbd-nav-move-in-to", this.bQ);
          j4(this, "yt-uix-kbd-move-next", this.hC);
          j4(this, "yt-uix-kbd-nav-move-to", this.jo)
      };
      ytPlayer.h.unregister = function() {
          this.removeBehavior("keydown", this.Bz);
          ytPlayer.sF(v4)
      };
      ytPlayer.h.Bz = function(a, b, c) {
          var d = c.keyCode;
          if (a = ytPlayer.$d(a, Z(this))) switch (d) {
              case 13:
              case 32:
                  this.gC(a);
                  break;
              case 27:
                  c.preventDefault();
                  c.stopImmediatePropagation();
                  a: {
                      for (c = Z1(a, "kbdNavMoveOut"); !c;) {
                          c = ytPlayer.$d(a.parentElement, Z(this));
                          if (!c) break a;
                          c = Z1(c, "kbdNavMoveOut")
                      }
                      c = ytPlayer.pd(c);
                      this.jo(c);
                      ytPlayer.XF("yt-uix-kbd-nav-move-out-done", c)
                  }
                  break;
              case 40:
              case 38:
                  if ((b = c.target) && ytPlayer.kq(a, Z(this, "list"))) switch (d) {
                      case 40:
                          this.hC(b, a);
                          break;
                      case 38:
                          d = window.document.activeElement == a, a = Cya(a), b = a.indexOf(b), 0 > b && !d || (b =
                              d ? a.length - 1 : (a.length + b - 1) % a.length, a[b].focus(), Bya(this, a[b]))
                  }
                  c.preventDefault()
          }
      };
      ytPlayer.h.gC = function(a) {
          var b = Z1(a, "kbdNavMoveIn");
          b = ytPlayer.pd(b);
          Aya(this, a, b);
          this.jo(b)
      };
      ytPlayer.h.bQ = function(a) {
          Aya(this, ytPlayer.ae(), a);
          this.jo(a)
      };
      ytPlayer.h.jo = function(a) {
          if (a)
              if (ytPlayer.Xd(a)) a.focus();
              else {
                  var b = V1(a, function(a) {
                      return ytPlayer.Da(a) && 1 == a.nodeType ? ytPlayer.Xd(a) : !1
                  });
                  b ? b.focus() : (a.setAttribute("tabindex", "-1"), a.focus())
              }
      };
      ytPlayer.h.hC = function(a, b) {
          var c = window.document.activeElement == b,
              d = Cya(b),
              e = d.indexOf(a);
          0 > e && !c || (c = c ? 0 : (e + 1) % d.length, d[c].focus(), Bya(this, d[c]))
      };
      ytPlayer.A(w4, i4);
      ytPlayer.ya(w4);
      ytPlayer.h = w4.prototype;
      ytPlayer.h.register = function() {
          this.addBehavior("click", this.eG);
          this.addBehavior("mouseenter", this.cK);
          j4(this, "page-scroll", this.rK);
          j4(this, "yt-uix-kbd-nav-move-out-done", function(a) {
              a = this.pe(a);
              A4(this, a)
          });
          this.A = new ytPlayer.XC
      };
      ytPlayer.h.unregister = function() {
          this.removeBehavior("click", this.eG);
          this.l = this.g = null;
          ytPlayer.sF(rva(ytPlayer.Rb(this.o)));
          this.o = {};
          ytPlayer.Lb(this.C, function(a) {
                  ytPlayer.Kd(a)
              },
              this);
          this.C = {};
          ytPlayer.$e(this.A);
          this.A = null;
          w4.ba.unregister.call(this)
      };
      ytPlayer.h.eG = function(a, b, c) {
          a && (b = D4(this, a), !b.disabled && j2(c.target, b) && Fya(this, a))
      };
      ytPlayer.h.cK = function(a, b, c) {
          a && ytPlayer.kq(a, Z(this, "hover")) && (b = D4(this, a), j2(c.target, b) && Fya(this, a, !0))
      };
      ytPlayer.h.rK = function() {
          this.g && this.l && Dya(this, this.l, this.g)
      };
      ytPlayer.h.fG = function(a) {
          if (a) {
              var b = C4(this, a);
              if (b) {
                  ytPlayer.YF("yt-uix-menu-before-show", a, b);
                  if (this.g) j2(a, this.g) || A4(this, this.l);
                  else {
                      this.l = a;
                      this.g = b;
                      ytPlayer.kq(a, Z(this, "sibling-content")) || (ytPlayer.Kd(b), window.document.body.appendChild(b));
                      var c = D4(this, a).offsetWidth - 2;
                      b.style.minWidth = c + "px"
                  }(c = y4(this, a)) && b.parentNode && b.parentNode.insertBefore(c, b.nextSibling);
                  ytPlayer.mq(b, Z(this, "content-hidden"));
                  Dya(this, a, b);
                  ytPlayer.lq(D4(this, a), [Z(this, "trigger-selected"), "yt-uix-button-toggled"]);
                  ytPlayer.XF("yt-uix-menu-show", a);
                  Iya(b);
                  Gya(this, a);
                  ytPlayer.XF("yt-uix-kbd-nav-move-in-to", b);
                  var d = (0, ytPlayer.z)(this.vX, this, a),
                      e = (0, ytPlayer.z)(this.eM, this, a);
                  c = ytPlayer.Fa(a).toString();
                  this.o[c] = [ytPlayer.rF(b, "click", e), ytPlayer.rF(window.document, "click", d)];
                  ytPlayer.kq(a, Z(this, "indicate-selected")) && (d = (0, ytPlayer.z)(this.fM, this, a), this.o[c].push(ytPlayer.rF(b, "click", d)));
                  ytPlayer.kq(a, Z(this, "hover")) && (a = (0, ytPlayer.z)(this.uX, this, a), this.o[c].push(ytPlayer.rF(window.document, "mousemove", a)))
              }
          }
      };
      ytPlayer.h.uX = function(a, b) {
          var c = ytPlayer.tF(b);
          if (c) {
              var d = D4(this, a);
              j2(c, d) || Jya(this, c) || B4(this, a)
          }
      };
      ytPlayer.h.vX = function(a, b) {
          var c = ytPlayer.tF(b);
          if (c) {
              if (Jya(this, c)) {
                  var d = ytPlayer.$d(c, Z(this, "content")),
                      e = ytPlayer.Zd(c, "LI");
                  e && d && ytPlayer.Qd(d, e) && ytPlayer.YF("yt-uix-menu-item-clicked", c);
                  c = ytPlayer.$d(c, Z(this, "close-on-select"));
                  if (!c) return;
                  d = x4(c)
              }
              A4(this, d || a)
          }
      };
      ytPlayer.h.eM = function(a, b) {
          var c = ytPlayer.tF(b);
          c && Hya(this, a, c)
      };
      ytPlayer.h.fM = function(a, b) {
          var c = ytPlayer.tF(b);
          if (c) {
              var d = D4(this, a);
              if (d && (c = ytPlayer.Zd(c, "LI")))
                  if (c = W1(c).trim(), d.hasChildNodes()) {
                      var e = l4.getInstance();
                      (d = ytPlayer.J(Z(e, "content"), d)) && ytPlayer.Sd(d, c)
                  } else ytPlayer.Sd(d, c)
          }
      };
      ytPlayer.A(E4, s4);
      ytPlayer.ya(E4);
      ytPlayer.h = E4.prototype;
      ytPlayer.h.register = function() {
          E4.ba.register.call(this);
          this.addBehavior("click", this.Zx, "target");
          this.addBehavior("click", this.Yx, "close")
      };
      ytPlayer.h.unregister = function() {
          E4.ba.unregister.call(this);
          this.removeBehavior("click", this.Zx, "target");
          this.removeBehavior("click", this.Yx, "close");
          for (var a in this.g) ytPlayer.sF(this.g[a]);
          this.g = {};
          for (a in this.l) ytPlayer.sF(this.l[a]);
          this.l = {}
      };
      ytPlayer.h.Zx = function(a, b, c) {
          c.preventDefault();
          b = ytPlayer.Zd(c.target, "button");
          if (!b || !b.disabled) {
              b = this.Ba(a, "card-target");
              var d;
              b ? d = ytPlayer.u(b) ? window.document.getElementById(b) : b : d = a;
              a = d;
              d = this.pe(a);
              this.Ba(d, "disabled") || (ytPlayer.kq(d, Z(this, "active")) ? (this.hide(a), ytPlayer.mq(d, Z(this, "active"))) : (this.show(a), ytPlayer.S(d, Z(this, "active"))))
          }
      };
      ytPlayer.h.show = function(a) {
          E4.ba.show.call(this, a);
          var b = this.pe(a),
              c = ytPlayer.Fa(a).toString();
          if (!ytPlayer.bF(b, "click-outside-persists")) {
              if (this.g[c]) return;
              b = ytPlayer.rF(window.document, "click", (0, ytPlayer.z)(this.ay, this, a));
              var d = ytPlayer.rF(window, "blur", (0, ytPlayer.z)(this.ay, this, a));
              this.g[c] = [b, d]
          }
          a = ytPlayer.rF(window, "resize", (0, ytPlayer.z)(this.uW, this, a, void 0));
          this.l[c] = a
      };
      ytPlayer.h.hide = function(a) {
          E4.ba.hide.call(this, a);
          a = ytPlayer.Fa(a).toString();
          var b = this.g[a];
          b && (ytPlayer.sF(b), this.g[a] = null);
          if (b = this.l[a]) ytPlayer.sF(b), delete this.l[a]
      };
      ytPlayer.h.ay = function(a, b) {
          var c = "yt-uix" + (this.B ? "-" + this.B : "") + "-card",
              d = null;
          b.target && (d = ytPlayer.$d(b.target, c) || ytPlayer.$d(x4(b.target), c));
          (d = d || ytPlayer.$d(window.document.activeElement, c) || ytPlayer.$d(x4(window.document.activeElement), c)) || this.hide(a)
      };
      ytPlayer.h.Yx = function(a) {
          (a = ytPlayer.$d(a, Z(this, "card"))) && (a = a.cardTargetNode) && this.hide(a)
      };
      ytPlayer.A(F4, s4);
      ytPlayer.ya(F4);
      ytPlayer.h = F4.prototype;
      ytPlayer.h.register = function() {
          this.addBehavior("mouseenter", this.cC, "target");
          this.addBehavior("mouseleave", this.eC, "target");
          this.addBehavior("mouseenter", this.dC, "card");
          this.addBehavior("mouseleave", this.fC, "card")
      };
      ytPlayer.h.unregister = function() {
          this.removeBehavior("mouseenter", this.cC, "target");
          this.removeBehavior("mouseleave", this.eC, "target");
          this.removeBehavior("mouseenter", this.dC, "card");
          this.removeBehavior("mouseleave", this.fC, "card")
      };
      ytPlayer.h.cC = function(a) {
          if (S4 != a) {
              S4 && (this.hide(S4), S4 = null);
              var b = (0, ytPlayer.z)(this.show, this, a),
                  c = (0, window.parseInt)(this.Ba(a, "delay-show"), 10);
              b = ytPlayer.XD(b, -1 < c ? c : 200);
              this.setData(a, "card-timer", b.toString());
              S4 = a;
              a.alt && (this.setData(a, "card-alt", a.alt), a.alt = "");
              a.title && (this.setData(a, "card-title", a.title), a.title = "")
          }
      };
      ytPlayer.h.eC = function(a) {
          var b = (0, window.parseInt)(this.Ba(a, "card-timer"), 10);
          ytPlayer.ZD(b);
          this.pe(a).isCardHidable = !0;
          b = (0, window.parseInt)(this.Ba(a, "delay-hide"), 10);
          b = -1 < b ? b : 200;
          ytPlayer.XD((0, ytPlayer.z)(this.KK, this, a), b);
          if (b = this.Ba(a, "card-alt")) a.alt = b;
          if (b = this.Ba(a, "card-title")) a.title = b
      };
      ytPlayer.h.KK = function(a) {
          this.pe(a).isCardHidable && (this.hide(a), S4 = null)
      };
      ytPlayer.h.dC = function(a) {
          a && (a.cardRootNode.isCardHidable = !1)
      };
      ytPlayer.h.fC = function(a) {
          a && this.hide(a.cardTargetNode)
      };
      var S4 = null;
      var Mya = {
          LOADING: "loading",
          FG: "content",
          F4: "working"
      };
      ytPlayer.h = G4.prototype;
      ytPlayer.h.show = function() {
          if (!this.ka()) {
              this.D = window.document.activeElement;
              if (!this.M) {
                  this.l || (this.l = ytPlayer.pd("yt-dialog-bg"), this.l || (this.l = ytPlayer.Ed("div"), this.l.id = "yt-dialog-bg", this.l.className = "yt-dialog-bg", window.document.body.appendChild(this.l)));
                  var a = window,
                      b = a.document;
                  var c = 0;
                  if (b) {
                      c = b.body;
                      var d = b.documentElement;
                      if (d && c)
                          if (a = ytPlayer.wd(a).height, ytPlayer.vd(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
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
              this.B = ytPlayer.rF(window.document, "keydown", (0, ytPlayer.z)(this.OL, this));
              c = this.g;
              d = ytPlayer.UF("player-added", this.Jz, this);
              ytPlayer.aF(c, "player-ready-pubsub-key", d);
              this.T && (this.C = ytPlayer.rF(window.document, "click", (0, ytPlayer.z)(this.bV, this)));
              n2(this.g);
              this.o.setAttribute("tabindex", "0");
              Rya(this);
              this.H || ytPlayer.S(window.document.body, "yt-dialog-active");
              r4(l4.getInstance());
              t4(E4.getInstance());
              t4(F4.getInstance());
              ytPlayer.XF("yt-ui-dialog-show-complete",
                  this)
          }
      };
      ytPlayer.h.Jz = function() {
          if (!this.X) {
              var a = this.g;
              ytPlayer.U(window.document.body, "hide-players", !0);
              a && ytPlayer.U(a, "preserve-players", !0)
          }
      };
      ytPlayer.h.YQ = function(a) {
          a = a.currentTarget;
          a.disabled || (a = ytPlayer.bF(a, "action") || "", this.dismiss(a))
      };
      ytPlayer.h.dismiss = function(a) {
          if (!this.ka()) {
              this.A.R("pre-all");
              this.A.R("pre-" + a);
              o2(this.g);
              t4(E4.getInstance());
              t4(F4.getInstance());
              this.o.setAttribute("tabindex", "-1");
              Nya() || (o2(this.l), this.H || ytPlayer.mq(window.document.body, "yt-dialog-active"), Lva(), Qya());
              this.B && (ytPlayer.sF(this.B), this.B = null);
              this.C && (ytPlayer.sF(this.C), this.C = null);
              var b = this.g;
              if (b) {
                  var c = ytPlayer.bF(b, "player-ready-pubsub-key");
                  c && (ytPlayer.VF(c), h2(b, "player-ready-pubsub-key"))
              }
              this.A.R("post-all");
              ytPlayer.XF("yt-ui-dialog-hide-complete", this);
              "cancel" == a &&
                  ytPlayer.XF("yt-ui-dialog-cancelled", this);
              this.A && this.A.R("post-" + a);
              this.D && this.D.focus()
          }
      };
      ytPlayer.h.setTitle = function(a) {
          ytPlayer.Sd(ytPlayer.J("yt-dialog-title", this.g), a)
      };
      ytPlayer.h.OL = function(a) {
          ytPlayer.XD((0, ytPlayer.z)(function() {
                  this.K || 27 != a.keyCode || this.dismiss("cancel")
              },
              this), 0);
          9 == a.keyCode && a.shiftKey && ytPlayer.kq(window.document.activeElement, "yt-dialog-fg") && a.preventDefault()
      };
      ytPlayer.h.bV = function(a) {
          "yt-dialog-base" == a.target.className && this.dismiss("cancel")
      };
      ytPlayer.h.ka = function() {
          return this.J
      };
      ytPlayer.h.dispose = function() {
          m2(this.g) && this.dismiss("dispose");
          ytPlayer.sF(this.F);
          this.F.length = 0;
          ytPlayer.XD((0, ytPlayer.z)(function() {
                  this.D = null
              },
              this), 0);
          this.I = this.o = null;
          this.A.dispose();
          this.A = null;
          this.J = !0
      };
      ytPlayer.h.CJ = function(a) {
          a.stopPropagation();
          Rya(this)
      };
      ytPlayer.va("yt.ui.Dialog", G4, void 0);
      ytPlayer.A(H4, i4);
      ytPlayer.ya(H4);
      ytPlayer.h = H4.prototype;
      ytPlayer.h.register = function() {
          this.addBehavior("click", this.yv, "target");
          this.addBehavior("click", this.hide, "close");
          Tya(this)
      };
      ytPlayer.h.unregister = function() {
          H4.ba.unregister.call(this);
          this.removeBehavior("click", this.yv, "target");
          this.removeBehavior("click", this.hide, "close");
          this.A && (ytPlayer.VF(this.A), this.A = null);
          this.l && (ytPlayer.sF(this.l), this.l = null)
      };
      ytPlayer.h.yv = function(a) {
          if (!this.g || !m2(this.g.g)) {
              var b = this.pe(a);
              a = Vya(b, a);
              b || (b = a ? a.overlayParentNode : null);
              if (b && a) {
                  var c = !!this.Ba(b, "disable-shortcuts") || !1,
                      d = !!this.Ba(b, "disable-outside-click-dismiss") || !1;
                  this.g = new G4(a, c);
                  this.o = b;
                  var e = ytPlayer.J("yt-dialog-fg", a);
                  if (e) {
                      var f = this.Ba(b, "overlay-class") || "",
                          k = this.Ba(b, "overlay-style") || "default",
                          l = this.Ba(b, "overlay-shape") || "default";
                      f = f ? f.split(" ") : [];
                      f.push(Z(this, k));
                      f.push(Z(this, l));
                      ytPlayer.lq(e, f)
                  }
                  this.g.show();
                  ytPlayer.XF("yt-uix-kbd-nav-move-to", e ||
                      a);
                  Tya(this);
                  c || d || (c = (0, ytPlayer.z)(function(a) {
                          ytPlayer.kq(a.target, "yt-dialog-base") && Uya(this)
                      },
                      this), a = ytPlayer.J("yt-dialog-base", a), this.l = ytPlayer.rF(a, "click", c));
                  this.qj(b, "overlay-shown");
                  ytPlayer.XF("yt-uix-overlay-shown", b)
              }
          }
      };
      ytPlayer.h.Cc = function(a) {
          return ytPlayer.J("yt-dialog-content", a.overlayContentNode || a)
      };
      ytPlayer.h.hide = function(a) {
          a && a.disabled || ytPlayer.XF("yt-uix-overlay-hide")
      };
      ytPlayer.h.show = function(a) {
          this.yv(a)
      };
      ytPlayer.A(I4, i4);
      ytPlayer.ya(I4);
      ytPlayer.h = I4.prototype;
      ytPlayer.h.register = function() {
          this.addBehavior("mouseover", this.xp);
          this.addBehavior("mouseout", this.Oi);
          this.addBehavior("focus", this.Uy);
          this.addBehavior("blur", this.Ix);
          this.addBehavior("click", this.Oi);
          this.addBehavior("touchstart", this.TE);
          this.addBehavior("touchend", this.qq);
          this.addBehavior("touchcancel", this.qq)
      };
      ytPlayer.h.unregister = function() {
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
      ytPlayer.h.dispose = function() {
          for (var a in this.l) this.Oi(this.l[a]);
          this.l = {}
      };
      ytPlayer.h.xp = function(a) {
          if (!(this.g && 1E3 > (0, ytPlayer.F)() - this.g)) {
              var b = (0, window.parseInt)(this.Ba(a, "tooltip-hide-timer"), 10);
              b && (h2(a, "tooltip-hide-timer"), ytPlayer.ZD(b));
              b = (0, ytPlayer.z)(function() {
                      aza(this, a);
                      h2(a, "tooltip-show-timer")
                  },
                  this);
              var c = (0, window.parseInt)(this.Ba(a, "tooltip-show-delay"), 10) || 0;
              b = ytPlayer.XD(b, c);
              this.setData(a, "tooltip-show-timer", b.toString());
              a.title && (this.setData(a, "tooltip-text", Yya(this, a)), a.title = "");
              b = ytPlayer.Fa(a).toString();
              this.l[b] = a
          }
      };
      ytPlayer.h.Oi = function(a) {
          var b = (0, window.parseInt)(this.Ba(a, "tooltip-show-timer"), 10);
          b && (ytPlayer.ZD(b), h2(a, "tooltip-show-timer"));
          b = (0, ytPlayer.z)(function() {
                  if (a) {
                      var b = ytPlayer.pd(J4(this, a));
                      b && (bza(b), ytPlayer.Kd(b), h2(a, "content-id"));
                      b = ytPlayer.pd(J4(this, a, "arialabel"));
                      ytPlayer.Kd(b)
                  }
                  h2(a, "tooltip-hide-timer")
              },
              this);
          b = ytPlayer.XD(b, 50);
          this.setData(a, "tooltip-hide-timer", b.toString());
          if (b = this.Ba(a, "tooltip-text")) a.title = b;
          b = ytPlayer.Fa(a).toString();
          delete this.l[b]
      };
      ytPlayer.h.Uy = function(a, b) {
          this.g = 0;
          this.xp(a, b)
      };
      ytPlayer.h.Ix = function(a) {
          this.g = 0;
          this.Oi(a)
      };
      ytPlayer.h.TE = function(a, b, c) {
          c.changedTouches && (this.g = 0, (a = f4(b, Z(this), c.changedTouches[0].target)) && this.xp(a, b))
      };
      ytPlayer.h.qq = function(a, b, c) {
          c.changedTouches && (this.g = (0, ytPlayer.F)(), (a = f4(b, Z(this), c.changedTouches[0].target)) && this.Oi(a))
      };
      var T4 = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
      ytPlayer.va("yt.uix.widgets_", T4, void 0);
      ytPlayer.A(K4, ytPlayer.yN);
      ytPlayer.A(L4, ytPlayer.yN);
      ytPlayer.A(cza, ytPlayer.yN);
      ytPlayer.A(M4, ytPlayer.yN);
      var oza = new ytPlayer.zN("subscription-subscribe", L4),
          pza = new ytPlayer.zN("subscription-subscribe-loading", K4),
          qza = new ytPlayer.zN("subscription-subscribe-loaded", K4),
          rza = new ytPlayer.zN("subscription-subscribe-success", cza),
          sza = new ytPlayer.zN("subscription-unsubscribe", M4),
          tza = new ytPlayer.zN("subscription-unsubscirbe-loading", K4),
          uza = new ytPlayer.zN("subscription-unsubscribe-loaded", K4),
          vza = new ytPlayer.zN("subscription-unsubscribe-success", K4),
          wza = new ytPlayer.zN("subscription-enable-ypc", K4),
          xza = new ytPlayer.zN("subscription-disable-ypc", K4);
      var O4 = {},
          N4 = [];
      ytPlayer.A(P4, i4);
      ytPlayer.ya(P4);
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
      ytPlayer.h = P4.prototype;
      ytPlayer.h.kw = function(a) {
          var b = this.Ba(a, "href"),
              c = this.Ba(a, "insecure");
          if (b) a = this.Ba(a, "target") || "_self", window.open(b, a);
          else if (!c)
              if (ytPlayer.ZV()) {
                  b = this.Ba(a, "channel-external-id");
                  c = this.Ba(a, "clicktracking");
                  var d = fza(this, a),
                      e = this.Ba(a, "parent-url");
                  if (this.Ba(a, "is-subscribed")) {
                      var f = this.Ba(a, "subscription-id"),
                          k = new M4(b, f, d, a, c, e);
                      jza(this, a) ? eza(a, b).then(function() {
                          ytPlayer.BN(sza, k)
                      }) : ytPlayer.BN(sza, k)
                  } else ytPlayer.BN(oza, new L4(b, d, c, e))
              } else iza(this, a)
      };
      ytPlayer.h.NC = function(a) {
          this.nj(a.g, this.nE, !0)
      };
      ytPlayer.h.gG = function(a) {
          this.nj(a.g, this.nE, !1)
      };
      ytPlayer.h.kU = function(a) {
          this.nj(a.g, this.tE, !0, a.l)
      };
      ytPlayer.h.xU = function(a) {
          this.nj(a.g, this.tE, !1)
      };
      ytPlayer.h.AR = function(a) {
          this.nj(a.g, this.uJ)
      };
      ytPlayer.h.uR = function(a) {
          this.nj(a.g, this.nJ)
      };
      ytPlayer.h.tE = function(a, b, c) {
          b ? (this.setData(a, Q4.Ew, "true"), c && this.setData(a, Q4.gx, c), this.Ba(a, Q4.bI) && (b = new $1, this.setData(a, Q4.fx, (b.getTime() / 1E3).toString()))) : (h2(a, Q4.Ew), h2(a, Q4.fx), h2(a, Q4.gx));
          gza(this, a)
      };
      ytPlayer.h.nE = function(a, b) {
          var c = ytPlayer.$d(a, R4.DG);
          ytPlayer.U(c, R4.EG, b);
          a.setAttribute("aria-busy", b ? "true" : "false");
          a.disabled = b
      };
      ytPlayer.h.uJ = function(a) {
          var b = !!this.Ba(a, "ypc-item-type"),
              c = !!this.Ba(a, "ypc-item-id");
          !this.Ba(a, "ypc-enabled") && b && c && (ytPlayer.S(a, "ypc-enabled"), this.setData(a, Q4.DI, "true"))
      };
      ytPlayer.h.nJ = function(a) {
          this.Ba(a, "ypc-enabled") && (ytPlayer.mq(a, "ypc-enabled"), h2(a, "ypc-enabled"))
      };
      ytPlayer.h.QI = function(a, b, c) {
          var d = ytPlayer.$a(arguments, 2);
          (0, ytPlayer.B)(a, function(a) {
                  b.apply(this, ytPlayer.Xa(a, d))
              },
              this)
      };
      ytPlayer.h.nj = function(a, b, c) {
          var d = hza(this, a);
          d = ytPlayer.Xa([d], ytPlayer.$a(arguments, 1));
          this.QI.apply(this, d)
      };
      ytPlayer.iY.annotations_module = a4;
      ytPlayer.iY.creatorendscreen = G2;
      var U4 = P4.getInstance(),
          V4 = Z(U4);
      V4 in T4 || (U4.register(), j4(U4, "yt-uix-init-" + V4, U4.init), j4(U4, "yt-uix-dispose-" + V4, U4.dispose), T4[V4] = U4);
  })(_yt_player);


}
/*
   FILE ARCHIVED ON 02:28:38 Jun 25, 2018 AND RETRIEVED FROM THE
   INTERNET ARCHIVE ON 12:38:17 Jan 26, 2024.
   JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

   ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
   SECTION 108(a)(3)).
*/
/*
playback timings (ms):
exclusion.robots: 0.095
exclusion.robots.policy: 0.088
cdx.remote: 0.088
esindex: 0.009
LoadShardBlock: 172.311 (6)
PetaboxLoader3.datanode: 444.56 (8)
load_resource: 534.007 (2)
PetaboxLoader3.resolve: 176.912 (2)
*/