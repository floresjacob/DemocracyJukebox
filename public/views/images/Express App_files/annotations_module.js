(function (g) {
  var window = this; var jva = function (a, b) { var c = !1, d = a.subscribe('ROOT_MENU_REMOVED', function (a) { c || (c = !0, this.Od(d), b.apply(void 0, arguments)) }, a) }, kva = function (a, b, c, d) {
      c = (0, g.z)(c, d || a.l)
      b = g.xF(b, 'change', c, 'iv-card-poll-choice-input'); a.g.push(b)
    }, lva = function (a) {
      a.g || (a.g = new g.VC(), g.N(a, a.g))
      return a.g
    }, Z1 = function (a) { a.R('cardstatechange', g.oV(a) && g.pV(a) ? 1 : 0) }, mva = function (a) {
      for (var b = [], c = 0; c < arguments.length; c++) {
        var d = arguments[c]
        if (g.za(d)) for (var e = 0; e < d.length; e += 8192) { var f = g.Za(d, e, e + 8192); f = mva.apply(null, f); for (var k = 0; k < f.length; k++)b.push(f[k]) } else b.push(d)
      } return b
    }, nva = function (a, b, c, d) {
      if (a != null) {
        for (a = a.firstChild; a;) {
          if (b(a) && (c.push(a), d) || nva(a, b, c, d)) return !0
          a = a.nextSibling
        }
      } return !1
    }, $1 = function (a, b) {
      var c = []
      return nva(a, b, c, !0) ? c[0] : void 0
    }, qva = function (a, b, c) {
      if (!(a.nodeName in ova)) {
        if (a.nodeType == 3)c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, '')) : b.push(a.nodeValue)
        else if (a.nodeName in pva)b.push(pva[a.nodeName]); else for (a = a.firstChild; a;)qva(a, b, c), a = a.nextSibling
      }
    }, a2 = function (a) {
      if (g.Sta && a !== null && 'innerText' in a)a = a.innerText.replace(/(\r\n|\r|\n)/g, '\n')
      else { var b = []; qva(a, b, !0); a = b.join('') }a = a.replace(/ \xAD /g, ' ').replace(/\xAD/g, ''); a = a.replace(/\u200B/g, ''); g.Sta || (a = a.replace(/ +/g, ' ')); a != ' ' && (a = a.replace(/^\s*/, '')); return a
    }, rva = function (a) { return new g.$g(a.left, a.top, a.right - a.left, a.bottom - a.top) }, b2 = function (a) { return g.sh(a, 'direction') == 'rtl' }, vva = function (a) {
      var b = g.sh(a, 'fontSize')
      var c = (c = b.match(sva)) && c[0] || null; if (b && c == 'px') return (0, window.parseInt)(b, 10); if (g.wd) { if (String(c) in tva) return g.Lh(a, b, 'left', 'pixelLeft'); if (a.parentNode && a.parentNode.nodeType == 1 && String(c) in uva) return a = a.parentNode, c = g.sh(a, 'fontSize'), g.Lh(a, b == c ? '1em' : b, 'left', 'pixelLeft') }c = g.K('SPAN', {style: 'visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;'}); a.appendChild(c); b = c.offsetHeight; g.Id(c); return b
    }, c2 = function (a, b) {
      this.start = a < b ? a : b
      this.end = a < b ? b : a
    }, d2 = function (a, b) {
      if (/-[a-z]/.test(b)) return null
      if (g.hk && a.dataset) { if (g.hc() && !(b in a.dataset)) return null; var c = a.dataset[b]; return void 0 === c ? null : c } return a.getAttribute('data-' + g.Fb(b))
    }, e2 = function (a, b, c, d, e, f, k) { this.date = g.va(a) ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, k || 0) : new Date(a && a.getTime ? a.getTime() : (0, g.F)()) }, h2 = function (a) {
      a = g.Ea(a)
      delete f2[a]; g.Wb(f2) && g2 && g2.stop()
    }, xva = function () {
      g2 || (g2 = new g.Wt(function () { wva() }, 20))
      var a = g2; a.isActive() || a.start()
    }, wva = function () {
      var a = (0, g.F)()
      g.Jb(f2, function (b) { yva(b, a) })
      g.Wb(f2) || xva()
    }, zva = function (a, b) {
      g.af.call(this, a)
      this.coords = b.coords; this.x = b.coords[0]; this.y = b.coords[1]; this.z = b.coords[2]; this.duration = b.duration; this.progress = b.progress; this.fps = b.C; this.state = b.g
    }, i2 = function (a, b, c, d) {
      g.rt.call(this)
      if (!g.za(a) || !g.za(b)) throw Error('Start and end parameters must be arrays'); if (a.length != b.length) throw Error('Start and end points must be the same length'); this.l = a; this.D = b; this.duration = c; this.B = d; this.coords = []; this.progress = this.C = 0; this.A = null
    }, yva = function (a, b) {
      b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b)
      a.progress = (b - a.startTime) / (a.endTime - a.startTime); a.progress > 1 && (a.progress = 1); a.C = 1E3 / (b - a.A); a.A = b; Ava(a, a.progress); a.progress == 1 ? (a.g = 0, h2(a), a.wd(), a.Sl()) : a.kb() && a.Vt()
    }, Ava = function (a, b) {
      g.Ba(a.B) && (b = a.B(b))
      a.coords = Array(a.l.length); for (var c = 0; c < a.l.length; c++)a.coords[c] = (a.D[c] - a.l[c]) * b + a.l[c]
    }, j2 = function (a, b, c, d, e) {
      i2.call(this, b, c, d, e)
      this.element = a
    }, k2 = function (a, b, c, d, e) {
      if (b.length != 2 || c.length != 2) throw Error('Start and end points must be 2D')
      j2.apply(this, arguments)
    }, Bva = function (a) { return Math.pow(a, 3) }, Cva = function (a) { return 3 * a * a - 2 * a * a * a }, Dva = function (a, b) { return (b & 8 && b2(a) ? b ^ 4 : b) & -9 }, Eva = function (a, b, c, d, e, f, k) {
      a = a.clone()
      var l = Dva(b, c); c = g.Hh(b); k = k ? k.clone() : c.clone(); a = g.UC(a, k, l, d, e, f); if (a.status & 496) return a.status; g.uh(b, g.eh(a.rect)); k = g.dh(a.rect); g.id(c, k) || (d = k, e = g.kd(b), f = g.td(g.md(e).g), !g.wd || g.pc('10') || f && g.pc('8') ? (b = b.style, g.ph ? b.MozBoxSizing = 'border-box' : g.yd ? b.WebkitBoxSizing = 'border-box' : b.boxSizing = 'border-box', b.width = Math.max(d.width, 0) + 'px', b.height = Math.max(d.height, 0) + 'px') : (e = b.style, f ? (f = g.Nh(b), b = g.Qh(b), e.pixelWidth = d.width - b.left - f.left - f.right - b.right, e.pixelHeight = d.height - b.top -
f.top - f.bottom - b.bottom) : (e.pixelWidth = d.width, e.pixelHeight = d.height))); return a.status
    }, l2 = function (a, b, c, d, e, f, k) {
      var l
      if (l = c.offsetParent) { var m = l.tagName == 'HTML' || l.tagName == 'BODY'; if (!m || g.sh(l, 'position') != 'static') { var n = g.zh(l); if (!m) { m = b2(l); var q; if (q = m) { q = g.$L && g.Ln(10); var r = g.Pta && g.Ab(g.Aua, 10) >= 0; q = g.ph || q || r }m = q ? -l.scrollLeft : !m || g.kH && g.pc('8') || g.sh(l, 'overflowX') == 'visible' ? l.scrollLeft : l.scrollWidth - l.clientWidth - l.scrollLeft; n = g.hd(n, new g.fd(m, l.scrollTop)) } } }l = n || new g.fd(); n = g.Ih(a); (m = g.Ah(a)) && g.ch(n, rva(m)); m = g.md(a); r = g.md(c); m.g != r.g && (q = m.g.body, r = g.Ch(q, g.$d(r)), r = g.hd(r, g.zh(q)), !g.wd ||
g.qc(9) || g.td(m.g) || (r = g.hd(r, g.xd(m.g))), n.left += r.x, n.top += r.y); a = Dva(a, b); b = n.left; a & 4 ? b += n.width : a & 2 && (b += n.width / 2); b = new g.fd(b, n.top + (a & 1 ? n.height : 0)); b = g.hd(b, l); e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y); var v; k && (v = g.Ah(c)) && (v.top -= l.y, v.right -= l.x, v.bottom -= l.y, v.left -= l.x); return Eva(b, c, d, f, v, k, void 0)
    }, m2 = function (a, b) { a && (a.dataset ? delete a.dataset[g.XE(b)] : a.removeAttribute('data-' + b)) }, n2 = function (a) {
      var b = a.__yt_uid_key
      b || (b = (0, g.Kua)(), a.__yt_uid_key = b); return b
    }, o2 = function (a, b) {
      a = g.nd(a)
      b = g.nd(b); return !!g.Wd(a, function (a) { return a === b }, !0, void 0)
    }, Fva = function (a, b) {
      var c = g.od(window.document, a, null, b)
      return c.length ? c[0] : null
    }, Gva = function () {
      g.T(window.document.body, 'hide-players', !1)
      var a = g.pd('preserve-players'); (0, g.B)(a, function (a) { g.lq(a, 'preserve-players') })
    }, Hva = function (a) {
      if (window.document.createEvent) {
        var b = window.document.createEvent('HTMLEvents')
        b.initEvent('click', !0, !0); a.dispatchEvent(b)
      } else b = window.document.createEventObject(), a.fireEvent('onclick', b)
    }, Iva = function (a) { this.g = a }, p2 = function (a) {
      var b = {}
      void 0 !== a.g.trackingParams ? b.trackingParams = a.g.trackingParams : (b.veType = a.g.veType, a.g.veCounter != null && (b.veCounter = a.g.veCounter), a.g.elementIndex != null && (b.elementIndex = a.g.elementIndex)); void 0 !== a.g.dataElement && (b.dataElement = p2(a.g.dataElement)); void 0 !== a.g.youtubeData && (b.youtubeData = a.g.youtubeData); return b
    }, q2 = function (a) { return new Iva({trackingParams: a}) }, Jva = function () {
      var a = 0
      a = g.PD(a == 0 ? 'ROOT_VE_TYPE' : 'ROOT_VE_TYPE.' + a, void 0); var b; a ? b = new Iva({veType: a, youtubeData: void 0}) : b = null; return b
    }, Kva = function (a, b) { (a = g.nd(a)) && a.style && (g.O(a, b), g.T(a, 'hid', !b)) }, r2 = function (a) { return (a = g.nd(a)) ? g.Kh(a) && !g.jq(a, 'hid') : !1 }, s2 = function (a) { (0, g.B)(arguments, function (a) { !g.Aa(a) || a instanceof window.Element ? Kva(a, !0) : (0, g.B)(a, function (a) { s2(a) }) }) }, t2 = function (a) { (0, g.B)(arguments, function (a) { !g.Aa(a) || a instanceof window.Element ? Kva(a, !1) : (0, g.B)(a, function (a) { t2(a) }) }) }, u2 =
function (a, b, c) {
  this.id = a
  this.timestamp = b.timestamp || 0; this.type = b.card_type; this.teaserText = b.teaser_text; this.teaserDurationMs = b.teaser_duration_ms; this.startMs = b.start_ms; this.autoOpen = b.auto_open || !1; this.Md = b.session_data || {}; this.o = c; this.sponsored = b.sponsored || !1; a = b.tracking || {}; this.l = {zK: a.impression, click: a.click, close: a.close, YU: a.teaser_impression, Mu: a.teaser_click}; b = b.tracking_params || {}; this.C = q2(b.card); this.F = q2(b.teaser); this.D = q2(b.icon)
}, v2 = function (a, b) {
      g.Cf.call(this)
      this.jl = a; this.yr = b; this[g.ff] = !1
    }, z2 = function (a, b, c, d) {
      v2.call(this, a, b)
      a = this.yr; b = this.la(); c ? (b.setAttribute('stroke', c.g), b.setAttribute('stroke-opacity', 1), c = c.Db(), g.u(c) && c.indexOf('px') != -1 ? b.setAttribute('stroke-width', (0, window.parseFloat)(c) / Lva(a)) : b.setAttribute('stroke-width', c)) : b.setAttribute('stroke', 'none'); this.fill = d; c = this.yr; a = this.la(); if (d instanceof w2)a.setAttribute('fill', d.H), a.setAttribute('fill-opacity', d.I); else if (d instanceof x2) {
        b = 'lg-' + d.B + '-' + d.D + '-' + d.C + '-' + d.F + '-' + d.g + '-' + d.l; var e = b in c.l ? c.l[b] : null; if (!e) {
          e = y2(c, 'linearGradient',
            {x1: d.B, y1: d.D, x2: d.C, y2: d.F, gradientUnits: 'userSpaceOnUse'}); var f = 'stop-color:' + d.g; g.va(d.o) && (f += ';stop-opacity:' + d.o); f = y2(c, 'stop', {offset: '0%', style: f}); e.appendChild(f); f = 'stop-color:' + d.l; g.va(d.A) && (f += ';stop-opacity:' + d.A); d = y2(c, 'stop', {offset: '100%', style: f}); e.appendChild(d); e = Mva(c, b, e)
        }a.setAttribute('fill', 'url(#' + e + ')')
      } else a.setAttribute('fill', 'none')
    }, Nva = function () {}, Ova = function (a, b) { v2.call(this, a, b) }, A2 = function () {
      this.qb = []
      this.Ia = []; this.ye = []
    }, Pva = function (a, b, c) {
      g.Ja(a.qb) == 0 ? a.ye.length -= 2 : (a.qb.push(0), a.Ia.push(1))
      a.ye.push(b, c); a.Ud = a.Hf = [b, c]
    }, B2 = function (a, b, c, d) {
      var e = a.Ud[0] - b * Math.cos(g.ed(d)) + b * Math.cos(g.ed(d + 90)), f = a.Ud[1] - c * Math.sin(g.ed(d)) + c * Math.sin(g.ed(d + 90))
      a.qb.push(3); a.Ia.push(1); a.ye.push(b, c, d, 90, e, f); a.im = !1; a.Ud = [e, f]
    }, Rva = function (a, b) {
      for (var c = a.ye, d = 0, e = 0, f = a.qb.length; e < f; e++) {
        var k = a.qb[e], l = Qva[k] * a.Ia[e]
        b(k, c.slice(d, d + l)); d += l
      }
    }, Sva = function (a, b, c, d) { z2.call(this, a, b, c, d) }, C2 = function (a, b) {
      this.l = a
      this.g = b
    }, D2 = function (a, b, c, d, e) {
      g.Ru.call(this, e)
      this.width = a; this.height = b; this.o = c || null; this.L = d || null
    }, Lva = function (a) {
      var b = a.vj()
      return b ? b.width / (a.o ? new g.H(a.o, a.L) : a.vj()).width : 0
    }, x2 = function (a, b, c, d, e, f, k, l) {
      this.B = a
      this.D = b; this.C = c; this.F = d; this.g = e; this.l = f; this.o = g.t(k) ? k : null; this.A = g.t(l) ? l : null
    }, w2 = function (a, b) {
      this.H = a
      this.I = b == null ? 1 : b
    }, E2 = function (a, b) { v2.call(this, a, b) }, Tva = function (a, b, c, d) { z2.call(this, a, b, c, d) }, F2 = function (a, b, c, d, e) {
      D2.call(this, a, b, c, d, e)
      this.l = {}; this.N = g.yd && !g.pc(526); this.I = new g.Km(this)
    }, y2 = function (a, b, c) {
      a = a.H.g.createElementNS('http://www.w3.org/2000/svg', b)
      if (c) for (var d in c)a.setAttribute(d, c[d]); return a
    }, G2 = function (a, b, c, d) {
      b = y2(a, 'path', {d: Uva(b)})
      c = new Tva(b, a, c, d); a.B.la().appendChild(c.la())
    }, Uva = function (a) {
      var b = []
      Rva(a, function (a, d) { switch (a) { case 0:b.push('M'); Array.prototype.push.apply(b, d); break; case 1:b.push('L'); Array.prototype.push.apply(b, d); break; case 2:b.push('C'); Array.prototype.push.apply(b, d); break; case 3:var c = d[3]; b.push('A', d[0], d[1], 0, Math.abs(c) > 180 ? 1 : 0, c > 0 ? 1 : 0, d[4], d[5]); break; case 4:b.push('Z') } })
      return b.join(' ')
    }, Mva = function (a, b, c) {
      if (b in a.l) return a.l[b]
      var d = '_svgdef_' + Vva++; c.setAttribute('id', d); a.l[b] = d; a.F.appendChild(c); return d
    }, Wva = function () {
      H2 || (H2 = new g.qg(400), H2.start())
      return H2
    }, Yva = function (a, b, c) {
      var d = g.sG
      a = {csn: a, parentVisualElement: p2(b), visualElements: (0, g.G)(c, function (a) { return p2(a) })}
      Xva(d, {attachChild: a})
    }, I2 = function (a, b) {
      g.tG('visualElementShown', {csn: a,
        ve: p2(b),
        eventType: 1})
    }, J2 = function (a, b) {
      g.tG('visualElementGestured', {csn: a,
        ve: p2(b),
        gestureType: 'INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK'})
    }, Xva = function (a, b) {
      b.eventTimeMs = Math.round(g.eG())
      b.lactMs = g.rG(); g.aG({endpoint: 'log_interaction', payload: b}, a)
    }, K2 = function (a, b) {
      function c (a) { return a.baseUrl }
      function d (a) { if (a) { var b = a.simpleText; if (b) return b; if (a.runs) return (0, g.G)(a.runs, function (a) { return a.text }).join('') } }
      function e (a) { if (a) { var b = [], c = a.videoId; c && b.push('v=' + c); (c = a.playlistId) && b.push('list=' + c); (a = a.startTimeSeconds) && b.push('t=' + a); return '/watch?' + b.join('&') } }
      var f = {}; f.startMs = (0, window.parseInt)(a.startMs, 10); f.impressionUrls = (0, g.G)(a.impressionUrls || [], c); f.skip = a.skipEndscreen; f.visualElement = q2(a.trackingParams); var k = (0, g.G)(a.elements || [], function (a, f) {
        var k = a.endscreenElementRenderer; if (!k) return null; var l = {}, m = k.style, v = k.endpoint || {}; l.id = 'element-' + f; l.type = m; l.title = d(k.title); l.metadata = d(k.metadata); l.callToAction = d(k.callToAction); l.Hx = k.image; l.left = (0, window.parseFloat)(k.left); l.width = (0, window.parseFloat)(k.width); l.top = (0, window.parseFloat)(k.top)
        l.aspectRatio = (0, window.parseFloat)(k.aspectRatio); l.startMs = (0, window.parseInt)(k.startMs, 10); l.endMs = (0, window.parseInt)(k.endMs, 10); l.clickUrls = (0, g.G)(v.loggingUrls || [], c); l.Km = g.Rb(k, 'title', 'accessibility', 'accessibilityData', 'label'); l.impressionUrls = (0, g.G)(k.impressionUrls || [], c); l.KJ = (0, g.G)(k.hovercardShowUrls || [], c); l.Md = {itct: k.trackingParams}; l.visualElement = q2(k.trackingParams); if (m == 'VIDEO') {
          l.targetUrl = v.urlEndpoint ? v.urlEndpoint.url : e(v.watchEndpoint), l.mo = !1, l.Bp = b, l.videoDuration =
d(k.videoDuration)
        } else if (m == 'PLAYLIST')l.targetUrl = v.urlEndpoint ? v.urlEndpoint.url : e(v.watchEndpoint), l.mo = !1, l.Bp = b, l.playlistLength = d(k.playlistLength); else if (m == 'CHANNEL') {
          if (m = g.Rb(v, 'browseEndpoint', 'browseId'))l.channelId = m, l.targetUrl = '/channel/' + m; l.mo = !1; l.Bp = 'new'; l.isSubscribe = !!k.isSubscribe; if (l.isSubscribe) {
            a: {
              if (m = k.hovercardButton) {
                if (m = m.subscribeButtonRenderer) {
                  v = d(m.unsubscribedButtonText); var C = d(m.subscribedButtonText); if (m.subscribed) {
                    var I = d(m.subscriberCountWithUnsubscribeText)
                    var L = d(m.subscriberCountText)
                  } else I = d(m.subscriberCountText), L = d(m.subscriberCountWithSubscribeText); var Y = null; if (k.signinEndpoint && (Y = g.Rb(k, 'signinEndpoint', 'webNavigationEndpointData', 'url'), !Y)) { k = void 0; break a } if (v && (C || Y)) { k = {subscribed: m.subscribed, subscribeText: v, subscribeCount: I, unsubscribeText: C, unsubscribeCount: L, enabled: m.enabled, signinUrl: Y, classic: k.useClassicSubscribeButton}; break a }
                }
              }k = void 0
            }l.subscribeButton = k
          } else l.subscribersText = d(k.subscribersText)
        } else {
          m == 'WEBSITE' && (l.targetUrl =
g.Rb(v, 'urlEndpoint', 'url'), l.mo = !0, l.Bp = 'new', l.iconUrl = k.icon.thumbnails[0].url)
        } return l
      })
      f.elements = (0, g.Jd)(k, function (a) { return !!a })
      return f
    }, Zva = function () {
      g.QG({YTP_DRAWER_CLOSE_BUTTON_ARIA_LABEL: 'Hide cards',
        YTP_DRAWER_POLL_PERCENT: '$PERCENT%',
        YTP_DRAWER_POLL_SIGNIN_TITLE: 'Want to vote?',
        YTP_DRAWER_POLL_TITLE_ARIA_LABEL: '$POLL_TITLE - Sign in to vote.',
        YTP_EXPAND: 'Expand',
        YTP_INVIDEO_PROMOTION_ARIA_LABEL: 'Promotion'})
    }, L2 = function (a) {
      g.EV.call(this, a)
      Zva(); this.o = null; this.K = !1; this.B = null; this.l = {}; this.F = {}; this.D = this.A = null; this.L = []; a = g.X(a); this.N = g.FM(a) || g.GM(a); this.KD = !0; this.H = 0; this.I = new g.bp(null); this.C = new g.CF(this); g.N(this, this.C); this.C.O(this.g, 'crn_creatorendscreen', this.CL); this.C.O(this.g, 'crx_creatorendscreen', this.DL); this.C.O(this.g, 'resize', this.aA); this.C.O(window, 'focus', this.IT); this.load(); var b = g.Cd('STYLE'); (window.document.getElementsByTagName('HEAD')[0] || window.document.body).appendChild(b); g.Ye(this, function () { g.Id(b) })
      b.sheet && (b.sheet.insertRule('.ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}', 0), b.sheet.insertRule('.ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}',
        0))
    }, M2 = function (a) { return a === 'creator-endscreen-editor' }, N2 = function (a, b) {
      g.wV(a.g, 'creatorendscreen')
      a.A && (a.A.dispose(), a.A = null, a.D.dispose(), a.D = null); for (var c in a.l)a.l[c].dispose(); a.l = {}; a.F = {}; a.L.length > 0 && (a.L.forEach(function (a) { a.dispose() }), a.L.length = 0)
      a.H = 0; if ((a.o = b) && b.elements) { $va(a); c = []; var d = new g.nQ(b.startMs, 0x7ffffffffffff, {id: 'ytp-ce-in-endscreen', namespace: 'creatorendscreen'}); c.push(d); g.X(a.g).o || (a.A = new g.V({G: 'div', M: 'ytp-ce-shadow'}), g.yV(a.g, a.A.element, 4), a.D = new g.ZV(a.A, 200)); for (d = 0; d < b.elements.length; ++d) { var e = b.elements[d], f = awa(a, e); a.l[e.id] = f; a.F[e.id] = e; g.yV(a.g, f.element, 4); var k = new g.nQ(e.startMs, e.endMs, {id: 'ytp-ce-element-' + e.id, namespace: 'creatorendscreen'}); c.push(k); bwa(a, f, e) }g.tV(a.g, c); a.aA() }
    }, $va = function (a) {
      var b =
Jva(), c = g.IG()
      c && b && Yva(c, b, [a.o.visualElement])
    }, awa = function (a, b) {
      var c = null
      switch (b.type) {
        case 'VIDEO':c = {G: 'div', ca: ['ytp-ce-element', 'ytp-ce-video'], P: {tabindex: '0', 'aria-label': b.Km || '', 'aria-hidden': 'true'}, J: [{G: 'div', M: 'ytp-ce-element-shadow'}, {G: 'div', M: 'ytp-ce-covering-image', P: O2(b)}, {G: 'div', M: 'ytp-ce-covering-shadow-top'}, {G: 'a', M: 'ytp-ce-covering-overlay', P: {href: b.targetUrl, tabindex: '-1'}, J: [{G: 'div', ca: ['ytp-ce-video-title', 'yt-ui-ellipsis', 'yt-ui-ellipsis-2'], P: {dir: g.cp(a.I, b.title || '')}, J: [b.title]}, {G: 'div', M: 'ytp-ce-video-duration', J: [b.videoDuration]}]}]}
          c = new g.V(c); break; case 'PLAYLIST':c = {G: 'div',
          ca: ['ytp-ce-element', 'ytp-ce-playlist'],
          P: {tabindex: '0', 'aria-label': b.Km || '', 'aria-hidden': 'true'},
          J: [{G: 'div', M: 'ytp-ce-element-shadow'}, {G: 'div', M: 'ytp-ce-covering-image', P: O2(b)}, {G: 'div', M: 'ytp-ce-covering-shadow-top'}, {G: 'a',
            M: 'ytp-ce-covering-overlay',
            P: {href: b.targetUrl, tabindex: '-1'},
            J: [{G: 'div', ca: ['ytp-ce-playlist-title', 'yt-ui-ellipsis', 'yt-ui-ellipsis-2'], P: {dir: g.cp(a.I, b.title || '')}, J: [b.title]}, {G: 'div',
              M: 'ytp-ce-playlist-count',
              J: [{G: 'div',
                M: 'ytp-ce-playlist-icon'}, {G: 'div', M: 'ytp-ce-playlist-count-text', J: [b.playlistLength]}]}]}]}; c = new g.V(c); break; case 'CHANNEL':c = {G: 'div',
          ca: ['ytp-ce-element', 'ytp-ce-channel', b.isSubscribe ? 'ytp-ce-channel-this' : 'ytp-ce-channel-that'],
          P: {tabindex: '0', 'aria-label': b.Km || '', 'aria-hidden': 'true'},
          J: [{G: 'div', M: 'ytp-ce-element-shadow'}, {G: 'div',
            M: 'ytp-ce-expanding-overlay',
            J: [{G: 'div', M: 'ytp-ce-expanding-overlay-hider'}, {G: 'div', M: 'ytp-ce-expanding-overlay-background'}, {G: 'div',
              M: 'ytp-ce-expanding-overlay-content',
              J: [{G: 'div',
                M: 'ytp-ce-expanding-overlay-body',
                J: [{G: 'div',
                  M: 'ytp-ce-expanding-overlay-body-padding',
                  J: [{G: 'a', ca: ['ytp-ce-channel-title', 'ytp-ce-link'], P: {href: b.targetUrl, target: '_blank', tabindex: '-1', dir: g.cp(a.I, b.title || '')}, J: [b.title]}, b.subscribeButton ? {G: 'div', M: 'ytp-ce-subscribe-container', J: [{G: 'div', M: 'ytp-ce-channel-subscribe'}]} : '', b.subscribersText ? {G: 'div', M: 'ytp-ce-channel-subscribers-text', J: [b.subscribersText]} : '', b.metadata ? {G: 'div',
                    ca: ['ytp-ce-channel-metadata', 'yt-ui-ellipsis',
                      'yt-ui-ellipsis-3'],
                    J: [b.metadata]} : '']}]}]}]}, {G: 'div', M: 'ytp-ce-expanding-image', P: O2(b)}]}; c = new g.V(c); var d = g.od(window.document, 'div', 'ytp-ce-channel-subscribe', c.element)[0]; if (b.subscribeButton) {
            g.S(d, 'ytp-ce-subscribe-button'); if (g.X(a.g).o) { var e = null; var f = b.Md.itct } else e = 'endscreen', f = null; e = new g.J_(b.subscribeButton.subscribeText, b.subscribeButton.subscribeCount, b.subscribeButton.unsubscribeText, b.subscribeButton.unsubscribeCount, b.subscribeButton.enabled, b.subscribeButton.classic,
              b.channelId, !!b.subscribeButton.subscribed, e, f, b.subscribeButton.signinUrl, a.g); d.appendChild(e.element); a.L.push(e)
          } break; case 'WEBSITE':c = {G: 'div',
          ca: ['ytp-ce-element', 'ytp-ce-website'],
          P: {tabindex: '0', 'aria-label': b.Km || '', 'aria-hidden': 'true'},
          J: [{G: 'div', M: 'ytp-ce-element-shadow'}, {G: 'div',
            M: 'ytp-ce-expanding-overlay',
            J: [{G: 'div', M: 'ytp-ce-expanding-overlay-hider'}, {G: 'div', M: 'ytp-ce-expanding-overlay-background'}, {G: 'div',
              M: 'ytp-ce-expanding-overlay-content',
              J: [{G: 'div',
                M: 'ytp-ce-expanding-overlay-body',
                J: [{G: 'div', M: 'ytp-ce-expanding-overlay-body-padding', J: [{G: 'div', M: 'ytp-ce-website-title', P: {dir: g.cp(a.I, b.title || '')}, J: [b.title]}, {G: 'div', M: 'ytp-ce-website-metadata', J: [b.metadata]}, {G: 'a', ca: ['ytp-ce-website-goto', 'ytp-ce-link'], P: {href: b.targetUrl, target: '_blank', tabindex: '-1'}, J: [b.callToAction]}]}]}]}]}, {G: 'div', M: 'ytp-ce-expanding-image', P: O2(b)}, {G: 'div', M: 'ytp-ce-expanding-icon', P: cwa(b.iconUrl)}]}, c = new g.V(c)
      }b.g && g.S(c.element, 'ytp-ce-placeholder'); return c
    }, O2 = function (a) {
      if (a.Hx) {
        var b =
a.Hx.thumbnails
      }
      return cwa(b ? b[b.length - 1].url : null)
    }, cwa = function (a) { return a ? {style: 'background-image: url(' + a + ')'} : {} }, bwa = function (a, b, c) {
      function d () { k(1) }
      function e () { k(-1) }
      b.T('mouseenter', (0, g.z)(a.Xs, a, b, c)); b.T('mouseleave', (0, g.z)(a.eu, a, b, c)); g.X(a.g).o || b.T('click', (0, g.z)(function (a) { g.S(a.element, 'ytp-ce-element-hover') }, a, b))
      b.T('click', (0, g.z)(a.MB, a, c)); b.T('keypress', (0, g.z)(a.MB, a, c)); b.T('focus', (0, g.z)(function (a, b) { this.Xs(a, b) }, a, b, c))
      b.T('blur', (0, g.z)(function (a, b) { this.eu(a, b) }, a, b, c))
      b.T('touchstart', (0, g.z)(a.Xs, a, b, c)); var f = g.J('ytp-ce-expanding-overlay-hider', b.element); f && b.O(f, 'touchstart', function (a) { a = a || window.event; a.cancelBubble = !0; a.stopPropagation && a.stopPropagation(); g.lq(b.element, 'ytp-ce-element-hover'); g.lq(b.element, 'ytp-ce-force-expand') })
      b.T('keydown', (0, g.z)(function (a, b) { this.KD = b.keyCode == 9 && !b.shiftKey }, a, b))
      var k = (0, g.z)(function (a, b, c) { this.H += c; this.H > 0 ? (g.S(a.element, 'ytp-ce-force-expand'), P2(this, b.id, !0)) : (g.lq(a.element, 'ytp-ce-force-expand'), g.lq(a.element, 'ytp-ce-element-hover'), P2(this, b.id, !1)) }, a, b, c)
      a = (0, g.z)(function (a, b) { b && (a.T('blur', function () { g.Kh(b) && this.KD && b.focus() }), a.O(b, 'focus', d), a.O(b, 'blur', e)) }, a, b)
      a(g.J('ytp-sb-subscribe', b.element)); a(g.J('ytp-sb-unsubscribe', b.element)); b.T('focus', d); b.T('blur', e)
    }, P2 = function (a, b, c) {
      a.A && (c ? a.D.show() : a.D.hide())
      for (var d in a.l)d != b && g.T(a.l[d].element, 'ytp-ce-element-shadow-show', c)
    }, Q2 = function (a, b, c) {
      function d () { f || (e++, e == b.length && (k.stop(), c && c())) }
      if (!b || M2(g.X(a.g).playerStyle))c && c(); else {
        b = dwa(a, b); var e = 0, f = !1, k = new g.Wt(function () { f = !0; c && c() }, 1E3, a)
        k.start(); for (a = 0; a < b.length; a++)g.CE(b[a], d)
      }
    }, R2 = function (a, b, c) {
      Q2(a, b.clickUrls, c);
      (a = g.IG()) && b.mo && J2(a, b.visualElement)
    }, dwa = function (a, b) {
      var c = a.g.getVideoData().clientPlaybackNonce, d = a.g.getCurrentTime().toFixed(2)
      c = {CPN: c, AD_CPN: c, MT: d}; d = []; for (var e = 0; e < b.length; e++)d.push(ewa(b[e], c)); return d
    }, ewa = function (a, b) {
      return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function (a) {
        var c = (0, window.unescape)(a)
        c = c.substring(1, c.length - 1); return b[c] ? (0, window.escape)(b[c]) : a
      })
    }, S2 = function (a) { return g.za(a) && a.length ? a[0] : a }, T2 = function (a) {
      var b = /.+/
      return g.u(a) && b != null && a != null && a.match(b) ? a : ''
    }, U2 = function (a, b) {
      if (a == null) return b
      var c = (0, window.parseInt)(a, 0); if ((0, window.isNaN)(c)) return b; c = c.toString(16); return '#' + '000000'.substring(0, 6 - c.length) + c
    }, V2 = function (a) { return g.u(a) ? a : '' }, W2 = function (a, b, c) {
      for (var d in b) if (b[d] == a) return a
      return c
    }, X2 = function (a, b) { return a == 'true' || a == 'false' ? a == 'true' : b }, Y2 = function (a, b) { return g.u(a) ? (0, window.parseFloat)(a) : b }, Z2 = function (a, b, c, d, e) {
      a = (0, window.parseFloat)(a)
      if (a != null && !(0, window.isNaN)(a)) { if (d) return g.bd(a, b, c); if (a >= b && a <= c) return a } return e
    }, fwa = function (a) {
      if (a == null) return 0
      if (a == 'never') return -1; a = a.split(':'); if (a.length > 3) return 0; var b = 0, c = 1; (0, g.B)(a, function (a) { a = (0, window.parseFloat)(a); a < 0 && (c = -c); b = 60 * b + Math.abs(a) })
      return c * b
    }, $2 = function (a, b) {
      if (a == null) return null
      if (g.Aa(a)) {
        var c = []; (0, g.B)(a, function (a) { (a = b(a)) && c.push(a) })
        return c
      } var d = b(a); return d ? [d] : []
    }, gwa = function (a) {
      function b (a) { return a != null && !(0, window.isNaN)(a) }
      return (a = a ? new g.Xg((0, window.parseFloat)(a.top), (0, window.parseFloat)(a.right), (0, window.parseFloat)(a.bottom), (0, window.parseFloat)(a.left)) : null) && b(a.top) && b(a.right) && b(a.bottom) && b(a.left) ? a : null
    }, hwa = function (a) {
      function b (a) { return (0, g.Jd)(a.split(/ +/), function (a) { return a != '' }) }
      return a == null ? [] : b(a)
    }, iwa = function (a, b, c, d) {
      this.value = a
      this.target = b; this.showLinkIcon = c; this.g = d
    }, a3 = function (a) {
      if (!a) return null
      var b = g.Jc(V2(a.value)); b = g.Gc(b); if (!b) return null; var c = W2(a.target, jwa, 'current'); return c == null ? null : new iwa(b, c, X2(a.show_link_icon, !0), a.pause_on_navigation != null ? a.pause_on_navigation : !0)
    }, b3 = function (a) { return a.value ? a.value : null }, kwa = function (a, b, c) {
      this.type = a
      this.trigger = b; this.url = c
    }, nwa = function (a) {
      if (!a) return null
      var b = W2(a.type, lwa), c = W2(a.trigger, mwa), d = S2(a.url); d = a3(d || null); S2(a.subscribeData); return b ? new kwa(b, c, d) : null
    }, owa = function (a, b, c) {
      var d = (c = c == 'xx' || c == 'xy') ? 640 : 360
      return (d + ((c ? a.width : a.height) - d) * b) / d
    }, c3 = function (a, b, c) {
      var d = (c = c == 'xy' || c == 'yy') ? 360 : 640
      return (d + ((c ? a.height : a.width) - d) * b) / d
    }, d3 = function (a, b, c, d, e, f, k, l, m, n, q) {
      this.x = a
      this.y = b; this.Bk = c; this.o = d; this.t = e; this.B = f; this.C = k; this.D = l; this.A = m; this.l = n; this.g = q
    }, qwa = function (a, b) {
      if (!a) return null
      var c = Y2(a.x, 0), d = Y2(a.y, 0), e = Y2(a.w, 0), f = Y2(a.h, 0), k = fwa(a.t), l = Y2(a.d, 0), m = Y2(a.px, 0), n = Y2(a.py, 0), q = Y2(a.scaleSlope, 1), r = Y2(a.scaleSlopeX, q); q = Y2(a.scaleSlopeY, q); var v = W2(a.scaleDimension, pwa, 'xy'); return b(c, d, e, f, k, l, m, n, r, q, v)
    }, e3 = function (a, b) {
      var c = rwa(b, swa(a, new g.$g(a.x, a.y, a.Bk, a.o), b.g)), d = b.g, e = c.clone()
      d && !d.contains(c) && (c.width < d.width ? e.left = g.bd(c.left, d.left, d.left + d.width - c.width) : (e.left = d.left, e.width = d.width), c.height < d.height ? e.top = g.bd(c.top, d.top, d.top + d.height - c.height) : (e.top = d.top, e.height = d.height)); return e
    }, swa = function (a, b, c) {
      var d = a.C, e = a.D, f = a.g ? a.g : 'xy', k = owa(c, a.A, f)
      a = c3(c, a.l, f); f = 640 * b.width * k / 100; var l = 360 * b.height * a / 100; return new g.$g(d == 0 ? 640 * b.left * k / 100 : d > 0 ? d : c.width + d - f, e == 0 ? 360 * b.top * a / 100 : e > 0 ? e : c.height + e - l, f, l)
    }, twa = function (a) { return a ? qwa(a, function (a, c, d, e, f, k, l, m, n, q, r) { return new d3(a, c, d, e, f, k, l, m, n, q, r) }) : null }, uwa = function (a, b) {
      this.g = a
      this.l = b || null
    }, rwa = function (a, b) {
      var c = a.l ? e3(a.l, new uwa(a.g)) : a.g
      var d = b.clone(), e = c.left; c = c.top; e instanceof g.fd ? (d.left += e.x, d.top += e.y) : (d.left += e, g.va(c) && (d.top += c)); return d
    }, vwa = function (a, b, c, d, e, f, k, l, m, n, q, r, v) {
      d3.call(this, a, b, c, d, e, l, m, n, q, r, v)
      this.F = f; this.H = k
    }, wwa = function (a) {
      if (!a) return null
      var b = Y2(a.sx, 0), c = Y2(a.sy, 0); return qwa(a, function (a, e, f, k, l, m, n, q, r, v, C) { return new vwa(a, e, f, k, l, b, c, m, n, q, r, v, C) })
    }, xwa = function (a, b, c, d, e, f, k, l, m, n, q, r, v, C) {
      this.l = a
      this.bgColor = b; this.borderColor = c; this.borderWidth = d; this.g = e; this.C = f; this.o = k; this.textAlign = l; this.textSize = m; this.A = n; this.padding = q; this.effects = r; this.cornerRadius = v; this.B = C
    }, zwa = function (a) {
      if (!a) return null
      var b = U2(a.fgColor, '#1A1A1A'), c = U2(a.bgColor, '#FFF'), d = U2(a.borderColor, '#000'), e = Z2(a.borderWidth, 0, 5, !1, 0), f = Z2(a.bgAlpha, 0, 1, !1, 0.8), k = U2(a.highlightFontColor, '#F2F2F2'), l = Z2(a.highlightWidth, 0, 5, !1, 3), m = V2(a.textAlign), n = Z2(a.textSize, 3.3, 30.1, !0, 3.6107), q = V2(a.fontWeight), r = gwa(a.padding), v = hwa(a.effects), C = Z2(a.cornerRadius, 0, 10, !0, 0); a = S2(a.gradient); if (a = a || null) {
        var I = Z2(a.x1, 0, 100, !0, 0), L = Z2(a.y1, 0, 100, !0, 0), Y = Z2(a.x2, 0, 100, !0, 100), ha = Z2(a.y2, 0, 100, !0, 100), kb = U2(a.color1, '#FFF'), ua = U2(a.color2,
          '#000'); a = new ywa(I, L, Y, ha, kb, ua, Z2(a.opacity1, 0, 100, !0, 100), Z2(a.opacity2, 0, 100, !0, 0))
      } else a = null; return new xwa(b, c, d, e, f, k, l, m, n, q, r, v, C, a)
    }, ywa = function (a, b, c, d, e, f, k, l) {
      this.o = a
      this.B = b; this.A = c; this.C = d; this.g = e; this.l = f; this.D = k; this.F = l
    }, Awa = function (a, b, c, d) {
      this.type = a
      this.l = b; this.g = c; this.o = d
    }, Cwa = function (a) {
      if (!a) return null
      var b = W2(a.type, Bwa, 'rect'), c = $2(a.rectRegion, twa), d = $2(a.anchoredRegion, wwa); a = $2(a.shapelessRegion, twa); return new Awa(b, c, d, a)
    }, Dwa = function (a) { return a.l && a.l.length ? a.l[0] : a.g && a.g.length ? a.g[0] : a.o && a.o.length ? a.o[0] : null }, Ewa = function (a, b) {
      this.l = a
      this.g = b
    }, Fwa = function (a, b) {
      this.state = a
      this.ref = b
    }, Hwa = function (a) {
      if (!a) return null
      var b = W2(a.state, Gwa); a = T2(a.ref); return b ? new Fwa(b, a) : null
    }, Iwa = function (a, b, c, d) {
      this.g = a || []
      this.o = b || []; this.A = c; this.l = d; this.value = !1
    }, Jwa = function (a) {
      if (!a) return null
      var b = $2(a.condition, Hwa), c = $2(a.notCondition, Hwa), d = X2(a.show_delay, !1); a = X2(a.hide_delay, !1); return b || c ? new Iwa(b, c, d, a) : null
    }, Kwa = function (a, b, c) {
      (0, g.B)(a.g, g.Fa(b, !1), c);
      (0, g.B)(a.o, g.Fa(b, !0), c)
    }, f3 = function (a, b, c, d, e, f, k, l, m, n, q, r, v, C) {
      this.id = a
      this.author = b; this.type = c; this.style = d; this.A = e; this.segment = f; this.o = k || []; this.D = l || []; this.l = m; this.C = n; this.B = q; this.data = r; this.g = v; this.itct = C
    }, Nwa = function (a) {
      if (!a) return null
      var b = T2(a.id), c = T2(a.author), d = W2(a.type, Lwa), e = W2(a.style, g3), f = V2(S2(a.TEXT)), k = V2(a.data); k = k.length != 0 ? JSON.parse(k) : {}; var l = S2(a.segment); var m = l || null; m ? (T2(m.timeRelative), l = T2(m.spaceRelative), l = (m = $2(m.movingRegion, Cwa)) ? new Ewa(l, m) : null) : l = null; m = $2(a.action, nwa); var n = $2(a.trigger, Jwa), q = S2(a.appearance); (q = zwa(q || null)) || (q = zwa({})); var r = W2(a.coordinate_system, Mwa, 'video_relative'), v = X2(a.closeable, !0), C = V2(a.log_data); a = V2(a.itct); return b && d ? new f3(b, c, d, e, f, l, m, n, q, r, v, k, C, a)
        : null
    }, i3 = function (a) { return h3(a, function (a) { return a.trigger == 'click' }) }, h3 = function (a, b) { return (0, g.zj)(a.o, b, void 0) }, Owa = function (a, b, c) { (0, g.B)(a.o, b, c) }, Pwa = function (a, b) { return g.La(a.o, b, void 0) }, Qwa = function (a, b, c) { (0, g.B)(a.D, b, c) }, Rwa = function (a, b) { (0, g.G)(a.D, b, void 0) }, j3 = function (a) { return (a = Swa(a)) ? Dwa(a) : null }, Swa = function (a) {
      a.segment ? (a = a.segment, a = a.g.length ? a.g[0] : null) : a = null
      return a
    }, Twa = function (a, b) {
      var c = j3(a)
      return c && b ? c3(b, c.l, c.g ? c.g : 'xy') : 1
    }, Vwa = function (a, b, c) {
      this.g = {}
      this.o = !1; this.B = 'ivTrigger:' + a; this.l = c; Kwa(b, function (a, b) { var c = Uwa(b.state, b.ref); this.l.subscribe(c, (0, g.z)(this.A, this, c, a)); this.g[c] = a }, this)
    }, Uwa = function (a, b) {
      var c = 'ivTriggerCondition:' + a
      return b ? c + ':' + b : c
    }, k3 = function () {
      this.g = !1
      this.B = this.l = null
    }, l3 = function (a, b, c) {
      a.l ? (a.l.setSize(b, c), a.l.clear()) : (b = new F2(b, c, void 0, void 0, void 0), a.l = b, a.l.Tn(), a.B = g.K('DIV'), b = a.l.la(), a.B.appendChild(b))
      return a.l
    }, m3 = function (a, b, c) {
      var d = window.document.createElementNS('http://www.w3.org/2000/svg', a)
      b && g.Jb(b, function (a, b) { d.setAttribute(b, a) })
      for (var e = 2; e < arguments.length; e++)d.appendChild(arguments[e]); return d
    }, n3 = function (a, b) {
      var c = ':' + (g.Qu.getInstance().g++).toString(36)
      b.setAttribute('result', c); a.appendChild(b); return c
    }, Wwa = function (a, b) {
      var c = n3(a, m3('feGaussianBlur', {'in': b,
        stdDeviation: '1.8'})); c = n3(a, m3('feDiffuseLighting', {'in': c, surfaceScale: '4', diffuseConstant: '1'}, m3('feDistantLight', {azimuth: '270', elevation: '15', 'lighting-color': 'white'}))); c = n3(a, m3('feComposite', {'in': c, in2: b, operator: 'in'})); return n3(a, m3('feComposite', {in2: c, 'in': b, operator: 'arithmetic', k2: 1, k3: 0.5, k4: 0}))
    }, Xwa = function (a, b) {
      var c = n3(a, m3('feOffset', {'in': b,
        dx: '-7',
        dy: '-7'})); c = n3(a, m3('feGaussianBlur', {'in': c, stdDeviation: '3'})); c = n3(a, m3('feColorMatrix', {'in': c, type: 'matrix', values: '0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'})); var d = n3(a, m3('feColorMatrix', {'in': b, type: 'matrix', values: '0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0'})); d = n3(a, m3('feGaussianBlur', {'in': d, stdDeviation: '1'})); c = n3(a, m3('feComposite', {operator: 'out', 'in': c, in2: d})); return n3(a, m3('feComposite', {operator: 'over', 'in': b, in2: c}))
    }, Ywa = function (a, b) { return b }, Zwa = function (a) {
      var b =
m3('filter', {filterUnits: 'userSpaceOnUse'}), c = 'SourceGraphic';
      (0, g.B)(a, function (a) { a: { switch (a) { case 'bevel':a = Wwa; break a; case 'dropshadow':a = Xwa; break a }a = Ywa }c = a(b, c) })
      return b
    }, $wa = function (a) {
      a = (0, g.Jd)(a, function (a) { return a in o3 })
      g.fb(a, function (a, c) { return o3[a] - o3[c] })
      return a
    }, axa = function (a) { return g.La(a, function (a) { return a == 'dropshadow' }) ? new g.Xg(0, 7, 7, 0) : new g.Xg(0, 0, 0, 0) }, bxa = function (a, b, c) {
      var d = new A2()
      Pva(d, a.left + b + c, a.top + c); d.Ec(a.left + a.width - b - c, a.top + c); B2(d, b, b, -90); d.Ec(a.left + a.width - c, a.top + a.height - b - c); B2(d, b, b, 0); d.Ec(a.left + b + c, a.top + a.height - c); B2(d, b, b, 90); d.Ec(a.left + c, a.top + b + c); B2(d, b, b, 180); d.close(); return d
    }, cxa = function (a, b, c, d) {
      var e = a.B
      e ? a = new x2(e.o * b / 100, e.B * c / 100, e.A * b / 100, e.C * c / 100, e.g, e.l, e.D, e.F) : (b = a.g, a = new w2(a.bgColor, d ? Math.max(b, 0.9) : b)); return a
    }, p3 = function (a, b) {
      var c = g.ah(a)
      c.expand(axa(b)); return rva(c)
    }, dxa = function (a, b, c) {
      if (c.length && (b = g.od(window.document, 'g', void 0, b), b.length)) {
        var d = $wa(c)
        if (d) { c = 'effects:' + (d ? d.join('|') : ''); var e = c in a.l ? a.l[c] : null; e ? a = e : (d = Zwa(d), a = d.childNodes.length > 0 ? Mva(a, c, d) : null) } else a = null; a && b[0].setAttribute('filter', 'url(#' + a + ')')
      }
    }, q3 = function () {
      k3.call(this)
      this.A = 0
    }, exa = function (a, b) {
      var c = a.top - b.y, d = b.x - a.left - a.width, e = b.y - a.top - a.height, f = a.left - b.x, k = Math.max(c, d, e, f)
      if (k < 0) return 'i'; switch (k) { case c:return 't'; case d:return 'r'; case e:return 'b'; case f:return 'l' } return 'i'
    }, r3 = function (a) { k3.apply(this, arguments) }, s3 = function (a) { k3.apply(this, arguments) }, t3 = function (a) { q3.apply(this, arguments) }, u3 = function (a, b, c, d, e) {
      g.M.call(this)
      this.g = a; this.X = b; this.C = c; this.da = d; this.aa = e; this.H = !1; this.W = new g.zF(this); g.N(this, this.W); this.N = this.B = this.D = this.L = this.l = null; this.Z = !1; this.Y = this.I = this.K = null; this.Jo = new g.Sk(this.GN, 100, this); g.N(this, this.Jo); this.F = new g.Wt(this.Py, 500, this); g.N(this, this.F); this.U = this.o = this.A = null
    }, fxa = function (a, b) {
      var c = (0, g.z)(function (a, c, f) {
        c = f ? v3(this, c, (0, g.z)(f, this)) : v3(this, c)
        this.W.T(b, a, c)
      }, a)
      c('mouseover', 'D', a.DA); c('mouseout', 'C', a.zh); c('click', 'A'); c('touchend', 'A')
    }, gxa = function (a) {
      if (a.g.B) {
        if (h3(a.g, function (a) { return a.type == 'close' })) var b = a.l
        else a.A = g.K('DIV', 'annotation-close-button'), g.O(a.A, !1), g.YE(a.A, 'annotation_id', a.g.id), a.l.appendChild(a.A), b = a.A; var c = function (a) { a.stopPropagation() }
        a.W.T(b, 'click', v3(a, 'B', c)); a.W.T(b, 'touchend', v3(a, 'B', c))
      }
    }, v3 = function (a, b, c) {
      return (0, g.z)(function (a) {
        if (this.aa)c && c(a)
        else if (a.event.target instanceof window.Element) {
          var d = a.event.target; g.O(d, !1); try { var f = window.document.elementFromPoint(a.event.clientX, a.event.clientY); if (g.Yd(f, 'annotation')) { var k = window.document.createEvent('MouseEvent'); k.initMouseEvent(a.event.type, a.event.bubbles, a.event.cancelable, a.event.view, a.event.detail, a.event.screenX, a.event.screenY, a.event.clientX, a.event.clientY, a.event.ctrlKey, a.event.altKey, a.event.shiftKey, a.event.metaKey, a.event.button, a.event.relatedTarget); f.dispatchEvent(k) } } finally {
            g.O(d,
              !0)
          }
        }d = g.Ih(a.target); a = new g.fd(a.clientX, a.clientY); b == 'C' && d.contains(a) || this.da.R(b, this.g)
      }, a)
    }, x3 = function (a) {
      if (a.l || a.o) {
        var b = j3(a.g)
        if (b) {
          var c = w3(a); if (a.l) {
            b = e3(b, c); var d = g.e0(g.hV(a.C)); g.Gh(a.l, b.width, b.height); g.uh(a.l, b.left, b.top); a.L = new g.$g(d.left + b.left, d.top + b.top, b.width, b.height); var e = (e = j3(a.g)) && d ? owa(d, e.A, e.g ? e.g : 'xy') : 1; var f = Twa(a.g, d); d = a.g.l; d.padding ? d = d.padding : (d = a.g.style == 'speech' ? 1.6 : 0.8, d = new g.Xg(d, d, d, d)); d = new g.Xg(360 * d.top * f / 100, 640 * d.right * e / 100, 360 * d.bottom * f / 100, 640 * d.left * e / 100); a.B && (d.right += 1.5 * c.g.height / 100); a.l.style.padding = d.top + 'px ' + d.right + 'px ' + d.bottom + 'px ' + d.left + 'px'; a.g.style ==
'label' && a.D && (a.D.style.padding = a.l.style.padding); d = c.g; var k = !1, l = 0, m = 0; var n = g.e0(g.hV(a.C)); var q = g.qV(a.C); g.bh(n, q) ? n = null : (q.top += 20, q.height -= 40, a.g.C != 'player_relative' && (q.left -= n.left, q.top -= n.top), n = q); n && (l = n.top - (b.top + b.height), m = b.top - (n.top + n.height), k = l > 0 || m > 0); if (k && n) {
              d = l; e = m; if (a.B) { f = hxa(a, 23, b, d, e); if (a.A) { var r = 43 - f.width; r > 0 && (b.left + f.left - r > n.left && (f.left -= r), f.width += r) }r = f; g.Gh(a.B, f.width, f.height); g.uh(a.B, f.left, f.top) }a.A && (r ? b = new g.fd(r.left + r.width - 23 - 18, a.Z
                ? r.top + 2 : r.top + r.height - 18 - 2) : (r = hxa(a, 18, b, d, e), b = new g.fd(r.left, r.top), g.Gh(a.A, r.width, r.height)), g.uh(a.A, b)); a.N = new g.$g(a.L.left + r.left, a.L.top + r.top, r.width, r.height); a.K = a.W.T(g.hV(a.C), 'mousemove', a.HN, a)
            } else {
              a.B && (r = e / f * d.height * 4.2 / 100, r = new g.H(r, r), a.g.type == 'highlight' || a.g.style == 'label' ? (e = 1.5 * d.height / 100, r = new g.$g(b.width - r.width - e, b.height - r.height - e, r.width, r.height)) : r = new g.$g(b.width - r.width - 3 * d.height / 100, (b.height - r.height) / 2, r.width, r.height), g.Gh(a.B, r.width, r.height),
                g.uh(a.B, r.left, r.top)), a.A && (r = d.left + d.width - (b.left + b.width) >= 9, e = b.top - d.top >= 9, g.uh(a.A, r && e ? new g.fd(b.width - 9, -9) : r ? new g.fd(b.width - 9, b.height > 45 ? 9 : b.height - 9) : e ? new g.fd(b.width > 45 ? b.width - 9 - 18 : -9, -9) : b.width / d.width > b.height / d.height ? new g.fd(b.width > 45 ? b.width - 9 - 18 : -9, b.height - 9) : new g.fd(-9, b.height > 45 ? 9 : b.height - 9)))
            }
          }a.o && a.o.o(a.g, c); if (a.l) {
            c = a.l; b = a.g.l; c.style.color = a.g.style == 'highlightText' ? b.C : b.l; r = g.e0(g.hV(a.C)); c.style.fontSize = 360 * b.textSize * Twa(a.g, r) / 100 + 'px'; r = a.g.style
            c.style.textAlign = b.textAlign ? b.textAlign : r == 'title' || r == 'highlightText' ? 'center' : 'left'; b.A && (c.style.fontWeight = b.A); a = a.l; c = a.style.overflow; r = (b = g.J('annotation-link-icon', a)) ? g.Kh(b) : !1; e = (d = g.J('annotation-close-button', a)) ? g.Kh(d) : !1; r && g.O(b, !1); e && g.O(d, !1); m = f = ''; if (n = g.J('inner-text', a))f = n.style.overflow, m = n.style.position, n.style.overflow = 'visible', n.style.position = 'static'; a.style.overflow = 'scroll'; if (a.scrollHeight > a.offsetHeight || a.scrollWidth > a.offsetWidth) {
              l = k = vva(a); q = 5; for (var v =
Math.floor(k / 2); v;)a.scrollHeight <= a.offsetHeight && a.scrollWidth <= a.offsetWidth ? (q = l, l = Math.min(l + v, k)) : l = Math.max(l - v, q), v = Math.floor(v / 2), a.style.fontSize = l + 'px'; l != q && (a.scrollHeight > a.offsetHeight || a.scrollWidth > a.offsetWidth) && (a.style.fontSize = q + 'px')
            }a.style.overflow = c; n && (n.style.overflow = f, n.style.position = m); e && g.O(d, !0); r && g.O(b, !0)
          }
        }
      }
    }, hxa = function (a, b, c, d, e) {
      var f = e > 0
      b = new g.$g(0, c.height - b, Math.max(c.width, b), b); d > 0 && (b.top = c.height, d > 20 && (b.height += d - 20), g.S(a.l, 'annotation-extend-down')); f && (b.top = -b.height, e > 20 && (c = e - 20, b.top -= c, b.height += c), g.S(a.l, 'annotation-extend-up'), a.Z = !0); return b
    }, y3 = function (a) { return a.g.style != 'label' || a.o.g }, w3 = function (a) {
      var b = g.e0(g.hV(a.C))
      if (a.g.C == 'player_relative') { var c = g.hV(a.C).Ma(); b = new g.$g(-b.left, -b.top, c.width, c.height) } else b = new g.$g(0, 0, b.width, b.height); return new uwa(b, a.U ? j3(a.U) : null)
    }, ixa = function (a, b) { return b ? new g.$g(a.x + b.left, a.y + b.top, b.width, b.height) : null }, z3 = function (a, b, c) {
      g.M.call(this)
      this.l = a; this.annotation = b; this.view = c; this.g = null; this.o = this.isVisible = !1; jxa(b, a)
    }, jxa = function (a, b) { Rwa(a, function (c) { return new Vwa(a.id, c, b) }) }, kxa = function (a) {
      a.l.unsubscribe('resize', a.CA, a)
      a.l.unsubscribe('onVideoAreaChange', a.rC, a)
    }, A3 = function (a) { a.g && (a.g.stop(), a.g = null) }, lxa = function (a, b, c) {
      u2.call(this, a, b, c)
      this.channelId = b.channel_id; this.customMessage = b.custom_message; this.profileImageUrl = b.image_url; this.title = b.title; this.g = b.meta_info; this.url = a3({pause_on_navigation: b.pause_on_navigation, target: b.target || 'new', value: b.url})
    }, B3 = function (a, b, c) {
      u2.call(this, a, b, c)
      this.imageUrl = b.image_url; this.displayDomain = b.display_domain; this.showLinkIcon = b.show_link_icon; this.g = b.button_icon_url; this.title = b.title; this.customMessage = b.custom_message; this.url = a3({pause_on_navigation: b.pause_on_navigation, target: b.target || 'new', value: b.url}); this.A = null; if (a = b.signin_url) this.A = a3({target: 'current', value: a}); this.K = b.signin_title || null; this.I = b.signin_message || null
    }, mxa = function (a, b, c) {
      B3.call(this, a, b, c)
      this.H = b.ypc_flow_type; this.B = b.innertube_request_params
    }, nxa = function (a, b, c) {
      u2.call(this, a, b, c)
      this.B = b.image_url; this.playlistVideoCount = b.playlist_video_count; this.customMessage = b.custom_message; this.title = b.title; this.g = b.meta_info; this.url = a3({pause_on_navigation: b.pause_on_navigation, target: b.target || 'new', value: b.url})
    }, oxa = function (a, b, c) {
      u2.call(this, a, b, c)
      this.B = this.id.replace(/[^a-z0-9-]/gi, '-'); this.title = b.title; this.choices = b.choices; this.g = b.hasOwnProperty('old_vote') ? b.old_vote : null; this.A = null; if (a = b.signin_url) this.A = a3({target: 'current', value: a}); this.H = b.hasOwnProperty('xsrf_token') ? b.xsrf_token : null
    }, qxa = function (a, b, c) {
      B3.call(this, a, b, c)
      this.offers = []; a = b.offers || []; for (b = 0; b < a.length; b++) this.offers.push(new pxa(a[b]))
    }, pxa = function (a) {
      this.merchant = g.E(a.merchant)
      this.price = g.E(a.price)
    }, rxa = function (a, b, c) {
      B3.call(this, a, b, c)
      this.L = b.ypc_item_type; this.H = b.ypc_item_id; this.B = b.ypc_flow_type
    }, sxa = function (a, b, c) {
      u2.call(this, a, b, c)
      this.H = b.image_url; this.videoDuration = b.video_duration || null; this.customMessage = b.custom_message; this.title = b.title; this.g = b.meta_info; this.B = !!b.is_live_now; this.url = a3({pause_on_navigation: b.pause_on_navigation, target: b.target || 'new', value: b.url})
    }, C3 = function (a, b, c) {
      u2.call(this, a, b, c)
      this.I = b.image_url; this.B = b.badge_symbol || ''; this.priceText = b.price_text || ''; this.title = b.title; this.g = b.meta_info; this.H = !!b.is_paygated; this.K = !!b.user_has_entitlement; this.url = a3({target: b.target || 'new', value: b.url})
    }, txa = function (a) {
      this.g = a
      this.l = {}
    }, uxa = function (a) {
      var b = {}
      b = (b['iv-event'] = 1, b); g.nV(a.g, 'iv', b, void 0)
    }, G3 = function (a, b, c, d) {
      if (b) {
        var e = D3(a, b)
        a.l[b] = e['p-time']; e['iv-event'] = e.link || e['l-class'] || e['link-id'] ? 2 : 7; b = E3(a, 'cta_annotation_shown', e, c); F3(a, e, vxa(b, d))
      }
    }, H3 = function (a, b, c, d, e, f) {
      if (b) {
        var k = D3(a, b)
        k['iv-event'] = 3; k['i-time'] = a.l[b] || ''; d && g.dc(k, d); b = E3(a, 'cta_annotation_clicked', k, e); F3(a, k, b, c, f)
      }
    }, I3 = function (a, b) {
      if (b) {
        var c = D3(a, b)
        c['iv-event'] = 4; c['i-time'] = a.l[b] || ''; var d = E3(a, 'cta_annotation_closed', c); F3(a, c, d)
      }
    }, vxa = function (a, b) { return b ? (0, g.G)(a, g.Fa(function (a, b) { return g.Tm(b, a) }, b)) : a }, E3 = function (a, b, c, d) {
      d = d ? g.Xa(d) : []
      if (c['a-type'] == 30) { a: { c = c['a-id']; a = a.g.getVideoData(); if (a.Hw) { if ((b = a.Hw[b]) && g.dH(b)) { a = g.ob('[ANNOTATION_ID]'); b.indexOf('[ANNOTATION_ID]') >= 0 ? b = b.replace('[ANNOTATION_ID]', c) : b.indexOf(a) >= 0 && (b = b.replace(a, c)); break a } } else if (a.Yo) { b = g.dE(a.Yo, {label: b, value: 'a_id=' + c}); break a }b = '' }b && d.push(b) } return d
    }, F3 = function (a, b, c, d, e) {
      var f = 1, k = -1
      if (d) {
        var l = !1; var m = function () { f--; f || l || ((0, window.clearTimeout)(k), l = !0, d()) }
        k = (0, window.setTimeout)(function () { l = !0; d() }, 1E3)
      }(0, g.B)(c || [], function (a) {
        f++
        g.CE(a, m)
      })
      e && (f++, e != 0 && a.g.Ai(e, m)); g.nV(a.g, 'iv', b, m)
    }, D3 = function (a, b) {
      var c = {}
      if (b) { var d = new g.Bm(b); (0, g.B)(d.Cb(), function (a) { c[a] = (0, window.escape)(d.get(a, '')) }) }c['p-time'] = a.g.getCurrentTime().toFixed(2)
      c.ps = g.X(a.g).playerStyle; return c
    }, J3 = function (a, b, c, d, e) {
      e = D3(a, e)
      e['iv-event'] = c; b && (e.ei = b); e['a-id'] || (e['a-id'] = 'card:drawer'); e['a-type'] = 51; F3(a, e, d)
    }, K3 = function (a, b, c, d) { c && (c = D3(a, c), c['iv-event'] = b, F3(a, c, d)) }, wxa = function (a, b, c, d, e, f, k) {
      this.g = a
      this.A = b; this.B = c; this.videoData = d; this.logger = e; this.l = f; this.o = k
    }, L3 = function (a, b, c) {
      this.g = a
      this.A = b; this.B = c; this.l = new g.bp(null)
    }, xxa = function () {
      var a = {G: 'div',
        M: 'iv-drawer',
        P: {id: 'iv-drawer'},
        J: [{G: 'div', M: 'iv-drawer-header', P: {'aria-role': 'heading'}, J: [{G: 'span', M: 'iv-drawer-header-text'}, {G: 'button', ca: ['iv-drawer-close-button', 'ytp-button'], P: {'aria-label': g.U('YTP_DRAWER_CLOSE_BUTTON_ARIA_LABEL'), tabindex: '0'}}]}, {G: 'div', M: 'iv-drawer-content'}]}; return new g.V(a)
    }, zxa = function (a, b) {
      var c = [];
      (0, g.B)(b.choices, function (a) { c.push({G: 'li', M: b.B + '-' + a.index.toString(), J: [{G: 'label', J: [{G: 'input', M: 'iv-card-poll-choice-input', P: {type: 'checkbox', role: 'radio', name: b.B + a.index.toString(), value: a.index.toString(), 'data-poll-choice-index': a.index.toString()}}, {G: 'span', M: 'iv-card-poll-choice-text', J: [{G: 'span', M: 'iv-card-poll-choice-percent'}, M3(this, 'span', void 0, a.desc)]}]}, {G: 'div', M: 'iv-card-poll-result', J: [{G: 'div', M: 'iv-card-poll-result-bar'}]}]}) }, a)
      var d = {G: 'ul', P: {role: 'radiogroup'}, J: c}, e = {}; b.A && (e['aria-label'] = g.U('YTP_DRAWER_POLL_TITLE_ARIA_LABEL', {POLL_TITLE: b.title})); var f = ['iv-card', 'iv-card-poll']; d = [{G: 'div', M: 'iv-card-content', J: [M3(a, 'h2', e, b.title), {G: 'form', J: [{G: 'fieldset', J: [d]}]}]}]; b.A && (f.push('iv-card-unavailable'), d.push({G: 'div', ca: ['iv-card-sign-in'], J: [{G: 'h2', J: [g.U('YTP_DRAWER_POLL_SIGNIN_TITLE')]}, {G: 'a', ca: ['iv-card-sign-in-button', 'iv-button'], P: {href: b3(b.A)}, J: [{G: 'span', ca: ['iv-button-content'], J: [g.U('YTP_SIGN_IN')]}]}]}))
      f = new g.V({G: 'div', ca: f, J: d}); d = f.element; yxa(b, d); kva(a.g.g, d, g.Fa(a.D, b), a); (0, g.B)(g.pd('iv-card-poll-choice-input', d), function (a) { this.g.g.T(a, 'focus', g.Fa(this.o, !0)); this.g.g.T(a, 'blur', g.Fa(this.o, !1)) }, a)
      b.A && (d = g.J('iv-card-sign-in-button', d), a.A(d, b.A, b.id, b.Md, b.o, b.l.click, 5)); return f
    }, P3 = function (a, b, c, d) {
      var e = b.displayDomain ? {G: 'div',
          M: 'iv-card-image-text',
          J: [b.displayDomain]} : '', f = Axa(a, b), k = ['iv-card']; b.A && k.push('iv-card-unavailable'); e = [{G: 'a', M: 'iv-click-target', P: {href: b3(b.url)}, J: [N3(b.imageUrl, e), {G: 'div', M: 'iv-card-content', J: [M3(a, 'h2', void 0, b.title), f]}]}]; b.A && e.push({G: 'div', ca: ['iv-card-sign-in'], J: [M3(a, 'h2', void 0, b.K || ''), {G: 'p', J: [b.I]}, {G: 'a', ca: ['iv-card-sign-in-button', 'iv-button'], P: {href: b3(b.A)}, J: [M3(a, 'span', 'iv-button-content', g.U('YTP_SIGN_IN'))]}]}); k = new g.V({G: 'div', ca: k, J: e}); O3(a, k, b, c, d); return k
    },
    Bxa = function (a, b, c) {
      var d = ['yt-badge',
          'standalone-ypc-badge-renderer-icon', b.K ? 'standalone-ypc-badge-renderer-icon-purchased' : 'standalone-ypc-badge-renderer-icon-available'], e = {}; d = b.H && b.B ? {G: 'span', ca: d, P: e, J: [b.B]} : ''; c = {G: 'div', ca: ['iv-card', c], J: [{G: 'a', M: 'iv-click-target', P: {href: b3(b.url)}, J: [N3(b.I, d ? {G: 'div', M: 'iv-card-image-text', J: [d, b.priceText]} : ''), {G: 'div', M: 'iv-card-content', J: [{G: 'h2', M: 'iv-card-primary-link', J: [b.title]}, Q3(a, b)]}]}]}; c = new g.V(c); O3(a, c, b); return c
    }, R3 = function (a, b) {
      return b.customMessage ? M3(a, 'div',
        'iv-card-message', b.customMessage) : ''
    }, N3 = function (a, b) {
      var c = 'background-image: url(' + a + ');', d = []
      b && d.push(b); return {G: 'div', M: 'iv-card-image', P: {style: c}, J: d}
    }, Q3 = function (a, b) {
      if (!b.g || b.g.length == 0) return ''
      var c = []; (0, g.B)(b.g, function (a) { c.push(M3(this, 'li', '', a)) }, a)
      return {G: 'ul', M: 'iv-card-meta-info', J: c}
    }, M3 = function (a, b, c, d) {
      c ? g.u(c) ? c = {'class': c} : g.za(c) && (c = {'class': c.join(' ')}) : c = {}
      c.dir = g.cp(a.l, d); return {G: b, P: c, J: [d]}
    }, Axa = function (a, b) {
      if (!b.customMessage) return ''
      var c = ['iv-card-action', 'iv-card-primary-link'], d = {}; b.g && (c.push('iv-card-action-icon'), d.style = 'background-image: url(' + b.g + ');'); d.dir = g.cp(a.l, b.customMessage); var e = [{G: 'span', J: [b.customMessage]}]; b.showLinkIcon && (e.push('\u00a0'), e.push({G: 'span', M: 'iv-card-link-icon'})); return {G: 'div', ca: c, P: d, J: e}
    }, yxa = function (a, b) {
      var c = 0;
      (0, g.B)(a.choices, function (a) { c += a.count })
      c = c || 1; for (var d = 0; d < a.choices.length; d++) { var e = a.choices[d], f = g.J(a.B + '-' + e.index.toString(), b); e = e.count / c; a.g == null && (e = 0); g.T(f.getElementsByTagName('label')[0], 'iv-card-poll-choice-checked', a.g == d); f.getElementsByTagName('input')[0].checked = a.g == d; var k = Math.floor(100 * e).toFixed(0), l = g.J('iv-card-poll-choice-percent', f); g.Qd(l, g.U('YTP_DRAWER_POLL_PERCENT', {PERCENT: k})); f = g.J('iv-card-poll-result-bar', f); g.nh(f, 'transform', 'scaleX(' + e.toFixed(2) + ')') }g.T(b, 'iv-card-poll-voted', a.g != null); g.T(b,
        'iv-card-poll-expanded', a.g != null && a.choices.length > 1)
    }, Cxa = function (a, b, c, d) { d ? (c && a.g.videoData.xa || a.g.l.hd(), a.g.l.isFullscreen() && g.kV(a.g.l), H3(a.g.logger, b.o, d, void 0, b.l.click, 5)) : b.url && a.B(b.url, b.id, b.Md, b.o, b.l.click || [], 5) }, O3 = function (a, b, c, d, e) {
      c.A && Dxa(a, g.pd('iv-card-sign-in-button', b.element), c, c.A, e)
      c.url && Dxa(a, g.pd('iv-click-target', b.element), c, c.url, d)
    }, Dxa = function (a, b, c, d, e) {
      (0, g.B)(b, function (a) {
        if (e) {
          var b = (0, g.z)(function (a) {
            a.stopPropagation()
            a.preventDefault(); e(); return !1
          }, this)
          this.g.g.T(a, 'click', b)
        } else d && this.A(a, d, c.id, c.Md, c.o, c.l.click, 5)
      }, a)
    }, Exa = function (a) {
      var b = 0
      a.indexOf('h') != -1 && (a = a.split('h'), b = 3600 * a[0], a = a[1]); a.indexOf('m') != -1 && (a = a.split('m'), b = 60 * a[0] + b, a = a[1]); a.indexOf('s') != -1 ? (a = a.split('s'), b = 1 * a[0] + b) : b = 1 * a + b; return b
    }, S3 = function (a) {
      var b;
      (b = a) && !(b = a.length > 1 ? a.charAt(0) == '/' && a.charAt(1) != '/' : a == '/') && (b = Fxa(a), b = b[0] == 'com' && b[1] == 'youtube' || b[0] == 'be' && b[1] == 'youtu'); return b ? a.indexOf('/redirect?') == -1 : !1
    }, Fxa = function (a) {
      a = a.replace(/^(https?:)?\/\//, '')
      a = a.split('/', 1); return !a || a.length < 1 || !a[0] ? [] : a[0].toLowerCase().split('.').reverse()
    }, Gxa = function (a) {
      a = b3(a)
      if (!a) return null; a = a.replace(/https?:\/\//g, ''); var b; (b = !S3(a)) || (b = g.Eg(g.Dg(a)[5] || null) || '', b = b.split('/'), b = '/' + (b.length > 1 ? b[1] : ''), b = b != '/watch'); if (b) return null; b = g.bE(a); if (!b || !b.v) return null; if (b = b.t) return Exa(b); a = a.split('#', 2); return !a || a.length < 2 ? null : (a = g.$D(a[1])) && a.t ? Exa(a.t) : -1
    }, Hxa = function (a) {
      a = b3(a)
      a = a.replace(/https?:\/\//g, ''); return S3(a) ? (a = g.bE(a)) && a.v ? a.v : null : null
    }, Ixa = function (a, b, c) {
      c = c.replace(/\/(u|b)\/[0-9]+/g, '')
      var d = /^[0-9]+$/; a && d.test(a) && (c = '/b/' + a + c); b && d.test(b) && (c = '/u/' + b + c); return c
    }, T3 = function (a, b) { return b || (S3(a) ? 'current' : 'new') }, U3 = function (a, b) {
      g.M.call(this)
      this.Ga = a; this.context = b; this.gv = !1; this.Y = 0
    }, V3 = function (a, b, c, d, e, f) {
      b = new g.nQ(b, c, {id: d})
      g.N(a, b); b.namespace = 'annotations_module'; e && lva(b).subscribe('onEnter', e, a); f && lva(b).subscribe('onExit', f, a); g.tV(a.context.l, [b])
    }, Jxa = function (a) { return (0, g.F)() - a.Y }, Kxa = function (a, b, c, d, e, f) {
      var k = b3(b)
      if (k) {
        var l = T3(k, b.target), m = (0, g.z)(function () { b.g && this.context.l.hd(); g.HV(k || '', l == 'current' ? '_top' : void 0, c) }, a)
        l == 'new' && (m(), m = null); var n = {}; n.interval = Jxa(a); H3(a.context.logger, d, m, n, e, f); S3(k) || (a = g.IG(), d = c.itct, a && d && J2(a, q2(d)))
      }
    }, Y3 = function (a, b, c) {
      U3.call(this, b, c)
      var d = this; this.g = a; this.N = null; this.U = this.wa = this.B = this.ra = !1; this.X = null; this.K = new g.Wt(g.y, c.B.useTabletControls ? 4E3 : 3E3); g.N(this, this.K); this.ma = new g.Wt(g.y); g.N(this, this.ma); this.C = new L3(c, (0, g.z)(this.Li, this), (0, g.z)(this.so, this)); this.H = xxa(); g.N(this, this.H); this.D = this.H.element; this.aa = new g.ZV(this.H, 330); g.N(this, this.aa); this.Ba = g.J('iv-drawer-header-text', this.D); this.A = g.J('iv-drawer-content', this.D); this.o = []; this.pa = this.L = this.F = this.Z = this.l = null; this.ga = []; V3(this, 0, 1E3 *
c.videoData.lengthSeconds, '', function () { d.wa && W3(d, 'YOUTUBE_DRAWER_AUTO_OPEN') }, function () { (d.wa = d.B) && X3(d) })
      this.I = this.fa = this.da = null
    }, Qxa = function (a, b) {
      var c = b && b.data && b.data.card_type
      if (c && Lxa[c]) {
        c = new Lxa[c](b.id, b.data, b.g); if (!a.ra) { g.kq(a.la(), ['html5-stop-propagation', 'iv-drawer-manager']); g.yV(a.g, a.D, 5); Mxa(a); a.L = g.J('ytp-cards-button', a.g.getRootNode()); var d = g.J('iv-drawer-close-button', a.D); a.pa = d; a.ra = !0 }Nxa(a, c.id); var e = Oxa(a, c); if (e) {
          d = {hc: c, Iq: e.element, Ez: !1}; var f = Pxa(a, d); g.$a(a.o, f, 0, d); e.sa(a.A, f); a.Ym(); c.autoOpen ? V3(a, c.startMs, 0x8000000000000, c.id, g.Fa(a.HU, d)) : (e = 1E3 * a.context.l.getCurrentTime(), e < 5E3 && e > c.startMs && a.mD(d), V3(a, c.startMs, c.startMs + 1,
            c.id, g.Fa(a.mD, d)), Z3(a))
        }
      }
    }, Rxa = function (a, b) {
      b.data.autoOpenMs && V3(a, b.data.autoOpenMs, 0x8000000000000, '', function () { W3(a, 'YOUTUBE_DRAWER_AUTO_OPEN') })
      b.data.autoCloseMs && V3(a, b.data.autoCloseMs, 0x8000000000000, '', function () { X3(a) })
      var c = b.data.headerText; g.Qd(a.Ba, c); a.L && a.L.setAttribute('title', c); b.data.eventId && (a.N = b.data.eventId); a.da = q2(b.data.trackingParams); a.I = q2(b.data.closeTrackingParams); a.fa = q2(b.data.iconTrackingParams)
    }, Nxa = function (a, b) {
      var c = Sxa(a, b)
      c && (c == a.l && (a.l = null), a.g.nA(c.hc.id), g.Id(c.Iq), g.Ua(a.o, c), a.Ym(), Z3(a))
    }, W3 = function (a, b, c, d) {
      if (!a.B) {
        a.aa.show()
        a.Z = new g.Wt(function () { g.S(a.context.l.getRootNode(), 'ytp-iv-drawer-open') }, 0)
        a.Z.start(); a.X = g.oF(a.A, 'mousewheel', (0, g.z)(a.YL, a)); a.B = !0; a.Y = (0, g.F)(); J3(a.context.logger, a.N, 7, void 0, d && d.hc ? d.hc.o : void 0); var e = g.IG(); e && a.da && a.I && (I2(e, a.da), I2(e, a.I)); var f = {TRIGGER_TYPE: b}; (0, g.B)(a.o, function (b) { b.Ez || (b.Ez = !0, G3(a.context.logger, b.hc.o, b.hc.l.zK, f)); e && I2(e, b.hc.C) })
        Z1(a.g); c && (a.F = new g.Wt(function () { a.ea = a.L; a.pa.focus() }, 330), a.F.start())
      }
    }, X3 = function (a) { a.B && (a.aa.hide(), g.pF(a.X), a.X = null, g.lq(a.context.l.getRootNode(), 'ytp-iv-drawer-open'), a.B = !1, Z1(a.g), a.F && a.F.stop(), a.F = new g.Wt(function () { a.ea && (a.ea.focus(), a.ea = null) }, 330), a.F.start()) }, Mxa = function (a) {
      var b = g.J('iv-drawer-close-button', a.D)
      a.context.g.T(b, 'click', a.aI, a); a.context.g.T(a.A, 'touchend', function () { a.K.start() })
      a.context.g.T(a.A, 'scroll', a.lI, a); a.context.o.subscribe('onHideControls', function () { a.U = !0 })
      a.context.o.subscribe('onShowControls', function () { a.U = !1 })
      a.context.o.subscribe('onVideoAreaChange', function () { a.U = g.jq(a.g.getRootNode(), 'ytp-autohide') })
      a.ga.push(g.RF('iv-teaser-shown', a.VK, a)); a.ga.push(g.RF('iv-teaser-clicked', a.UK, a))
    }, Oxa = function (a, b) {
      switch (b.type) {
        case 'simple':return P3(a.C, b)
        case 'collaborator':var c = a.C, d = {G: 'div', ca: ['iv-card', 'iv-card-channel'], J: [{G: 'a', ca: ['iv-click-target'], P: {href: b3(b.url), 'data-ytid': b.channelId}, J: [N3(b.profileImageUrl), {G: 'div', M: 'iv-card-content', J: [R3(c, b), {G: 'h2', M: 'iv-card-primary-link', J: [b.title]}, Q3(c, b)]}]}]}; d = new g.V(d); O3(c, d, b); return d; case 'donation':return c = a.C, d = (0, g.z)(c.C, c, b), P3(c, b, d, d); case 'episode':return Bxa(a.C, b, 'iv-card-episode'); case 'movie':return Bxa(a.C, b, 'iv-card-movie'); case 'playlist':return c = a.C, d = {G: 'div',
          ca: ['iv-card', 'iv-card-playlist'],
          J: [{G: 'a', M: 'iv-click-target', P: {href: b3(b.url)}, J: [N3(b.B, {G: 'div', M: 'iv-card-image-overlay', J: [{G: 'span', M: 'iv-card-playlist-video-count', J: [b.playlistVideoCount.toString()]}]}), {G: 'div', M: 'iv-card-content', J: [R3(c, b), M3(c, 'h2', 'iv-card-primary-link', b.title), Q3(c, b)]}]}]}, d = new g.V(d), O3(c, d, b), d; case 'poll':return zxa(a.C, b); case 'productListing':c = a.C; var e = !g.Qa(b.offers); d = ['iv-card']; var f = '', k = Axa(c, b); e && (d.push('iv-card-product-listing'), f = 'iv-card-primary-link',
          k = b.offers[0], e = [], k.price && e.push({G: 'div', M: 'iv-card-offer-price', J: [k.price]}), k.merchant && e.push({G: 'div', M: 'iv-card-offer-merchant', J: [k.merchant]}), k = {G: 'div', J: e}); e = b.sponsored ? {G: 'div', M: 'iv-card-sponsored', J: [g.U('YTP_SPONSORED'), {G: 'div', M: 'iv-ad-info-container', J: [{G: 'div', M: 'iv-ad-info', J: ['{{adInfo}}']}, {G: 'div', M: 'iv-ad-info-icon-container', J: [{G: 'div', M: 'iv-ad-info-icon'}, {G: 'div', M: 'iv-ad-info-callout'}]}]}]} : ''; d = {G: 'div',
            ca: d,
            P: {tabindex: '0'},
            J: [{G: 'a',
              ca: ['iv-card-image', 'iv-click-target'],
              P: {style: 'background-image: url(' + b.imageUrl + ');', href: b3(b.url), 'aria-hidden': 'true', tabindex: '-1'}}, {G: 'div', M: 'iv-card-content', J: [e, {G: 'a', M: 'iv-click-target', P: {href: b3(b.url)}, J: [M3(c, 'h2', f, b.title), k]}]}]}; d = new g.V(d); f = g.Cd('span'); g.Qd(f, g.U('YTP_SPONSORED_PRODUCT_INFO')); d.Lb(f, 'adInfo'); O3(c, d, b); return d; case 'tip':return c = a.C, d = (0, g.z)(c.F, c, b), P3(c, b, d, d); case 'video':return c = a.C, d = b.videoDuration ? {G: 'span', M: 'iv-card-video-duration', J: [b.videoDuration]} : '', f = b.B ? {G: 'span',
          ca: ['yt-badge',
            'yt-badge-live'],
          J: [g.U('YTP_LIVE_NOW')]} : '', d = {G: 'div', ca: ['iv-card', 'iv-card-video'], J: [{G: 'a', M: 'iv-click-target', P: {href: b3(b.url)}, J: [N3(b.H, d), {G: 'div', M: 'iv-card-content', J: [R3(c, b), M3(c, 'h2', 'iv-card-primary-link', b.title), Q3(c, b), f]}]}]}, d = new g.V(d), O3(c, d, b), d
      } return null
    }, Pxa = function (a, b) {
      if (a.o.length == 0) return 0
      var c = g.Ma(a.o, function (a) { return b.hc.startMs > a.hc.startMs || b.hc.startMs == a.hc.startMs && b.hc.timestamp >= a.hc.timestamp ? !0 : !1 })
      return c == -1 ? 0 : c + 1
    }, Txa = function (a) { return a.l ? a.l.hc.type == 'productListing' : (0, g.cm)(a.o, function (a) { return a.hc.type == 'productListing' }) }, Z3 = function (a) { g.T(a.g.getRootNode(), 'ytp-cards-shopping-active', Txa(a)) }, Uxa = function (a, b) {
      if (a.H.l) {
        var c = new i2([0,
          a.A.scrollTop], [0, b.Iq.offsetTop], 600, Cva); a.context.A.T(c, 'animate', function (b) { a.A.scrollTop = b.y })
        a.context.A.T(c, 'finish', function (b) { a.A.scrollTop = b.y })
        c.play()
      } else g.oH(a.H, !0), a.A.scrollTop = b.Iq.offsetTop, g.oH(a.H, !1)
    }, $3 = function (a) { return a.l && a.l.hc ? a.l.hc : a.o[0] && a.o[0].hc ? a.o[0].hc : null }, Sxa = function (a, b) { return g.La(a.o, function (a) { return a.hc.id == b }) }, a4 = function (a, b, c) {
      U3.call(this, a, b)
      this.annotation = c; this.isActive = !1
    }, Vxa = function (a) {
      var b = a.annotation.data
      'start_ms' in b && 'end_ms' in b && V3(a, a.annotation.data.start_ms, a.annotation.data.end_ms, a.annotation.id, function () { a.show() }, function () { a.hide() })
    }, b4 = function (a, b, c) {
      a4.call(this, a, b, c)
      this.H = b; this.l = null; this.D = !1; this.o = null; this.A = !1; this.F = 0; this.g = this.C = this.B = null
    }, c4 = function (a, b, c) {
      a4.call(this, a, b, c)
      this.H = this.B = this.I = !1; this.F = 5E3; this.A = null; this.D = g.K('DIV', 'iv-promo-contents'); this.l = this.o = this.g = null; this.C = new g.Wt(function () { this.g.setAttribute('aria-hidden', !0); g.O(this.o, !1); g.O(this.l, !0) }, 700, this)
      g.N(this, this.C)
    }, Wxa = function (a) {
      var b = a.annotation.data
      if (a.annotation.style == 'cta') var c = 6; else if (a.annotation.style == 'video' || a.annotation.style == 'playlist')c = 7; a.F = b.collapse_delay_ms || a.F; var d = ['iv-promo', 'iv-promo-inactive']; a.la().setAttribute('aria-hidden', !0); a.la().setAttribute('aria-label', g.U('YTP_INVIDEO_PROMOTION_ARIA_LABEL')); a.la().tabIndex = 0; var e = a.annotation.Qa(), f = b.image_url; if (f) {
        var k = g.K('DIV', ['iv-promo-img', 'iv-click-target']); f = g.K('IMG', {src: f, 'aria-hidden': 'true'}); k.appendChild(f); b.video_duration && !b.is_live ? (f = g.K('SPAN',
          'iv-promo-video-duration', b.video_duration), k.appendChild(f)) : b.playlist_length && (f = g.K('SPAN', 'iv-promo-playlist-length', b.playlist_length.toString()), k.appendChild(f)); e && a.Li(k, e, a.annotation.id, b.session_data, a.annotation.g, void 0, c)
      }e ? (f = g.K('A', 'iv-promo-txt'), g.Yc(f, b3(e)), a.g = f) : a.g = g.K('DIV', 'iv-promo-txt'); switch (a.annotation.style) {
        case 'cta':case 'website':var l = g.K('P', null, g.K('STRONG', null, b.text_line_1)); var m = g.K('P', null, g.K('SPAN', 'iv-promo-link', b.text_line_2)); if (f = b.text_line_3) {
          d.push('iv-promo-website-card-cta-redesign')
          var n = g.K('BUTTON', ['iv-promo-round-expand-icon', 'ytp-button']); f = g.K('BUTTON', ['iv-button', 'iv-promo-button'], g.K('SPAN', 'iv-button-content', f)); var q = g.K('DIV', 'iv-promo-button-container'); q.appendChild(f); e && a.Li(a.la(), e, a.annotation.id, b.session_data, a.annotation.g, void 0, c)
        }g.S(a.g, 'iv-click-target'); e && a.Li(a.g, e, a.annotation.id, b.session_data, a.annotation.g, void 0, c); break; case 'playlist':case 'video':l = g.K('P', null, g.K('SPAN', null, b.text_line_1)); m = g.K('P', null, g.K('STRONG', null, b.text_line_2))
          b.is_live && (l = m, m = g.K('SPAN', ['yt-badge', 'iv-promo-badge-live'], g.U('YTP_LIVE_NOW'))); g.S(a.g, 'iv-click-target'); e && a.Li(a.g, e, a.annotation.id, b.session_data, a.annotation.g, void 0, c); d.push('iv-promo-video'); break; case 'vote':l = g.K('P', null, g.K('STRONG', null, b.text_line_1)), m = g.K('P', null, g.K('SPAN', null, b.text_line_2)), q = g.K('DIV', 'iv-promo-button-container'), c = g.K('BUTTON', ['iv-button', 'iv-promo-button'], g.K('SPAN', 'iv-button-content', b.button_text)), a.context.g.T(c, 'click', function (a) {
          a.stopPropagation()
          H3(this.context.logger, this.annotation.g, null, {contest_vote: '1'}, (b.tracking || {}).vote); a = this.annotation.data; this.g = g.J('iv-promo-txt', this.D); var c = g.J('iv-promo-button-container', this.D), d = g.K('DIV', ['iv-promo-txt', 'iv-click-target']), e = g.K('P', null, g.K('STRONG', null, a.text_line_3)), f = g.K('P', null, a.text_line_4); g.Fd(d, e, f); g.Id(c); c = this.g; (e = c.parentNode) && e.replaceChild(d, c); g.lq(this.la(), 'iv-promo-with-button'); (c = this.annotation.Qa()) && this.Li(d, c, this.annotation.id, a.session_data, this.annotation.g)
        },
        a), q.appendChild(c), d.push('iv-promo-with-button')
      }l && a.g.appendChild(l)
      m && a.g.appendChild(m); a.D.appendChild(a.g); q && a.D.appendChild(q); l = g.K('DIV', 'iv-promo-actions'); a.l = g.K('BUTTON', ['iv-promo-expand', 'ytp-button']); a.l.title = g.U('YTP_EXPAND'); a.context.g.T(a.l, 'click', g.Fa(a.Dr, 5E3), a); l.appendChild(a.l); g.O(a.l, !1); a.context.g.T(a.la(), 'mouseover', a.dJ, a); a.context.g.T(a.la(), 'mouseout', a.cJ, a); a.context.g.T(a.la(), 'touchend', g.Fa(a.Dr, 5E3), a); a.o = g.K('BUTTON', ['iv-promo-close', 'ytp-button']); a.o.title = g.U('YTP_CLOSE'); a.context.g.T(a.o, 'click', a.annotation.style == 'cta' &&
b.text_line_3 ? a.RI : a.IN, a); l.appendChild(a.o); g.kq(a.la(), d); k && (g.Ed(a.la(), k), n && k.appendChild(n)); g.Ed(a.la(), a.D); g.Ed(a.la(), l)
    }, Xxa = function (a) { a.B || a.H || a.A || (g.S(a.la(), 'iv-promo-collapsed'), a.B = !0, a.C.start()) }, Yxa = function (a) {
      a.C.stop()
      a.B && (g.mq(a.la(), ['iv-promo-collapsed', 'iv-promo-collapsed-no-delay']), a.B = !1, a.g && a.g.removeAttribute('aria-hidden'), g.O(a.l, !1), g.O(a.o, !0))
    }, Zxa = function (a, b) {
      a.A || (a.A = g.rg(function () {
        d4(this)
        Xxa(this)
      }, b, a))
    }, d4 = function (a) { a.A && (g.sg(a.A), a.A = null) }, e4 = function (a) {
      g.EV.call(this, a)
      Zva(); this.K = !1; this.I = 0; this.o = {}; this.L = {}; this.Xa = new txa(a); this.F = new g.CF(this); g.N(this, this.F); this.D = this.B = null; this.F.O(this.g, 'onVideoAreaChange', (0, g.z)(this.R, this, 'onVideoAreaChange')); this.F.O(this.g, 'onHideControls', (0, g.z)(this.R, this, 'onHideControls')); this.F.O(this.g, 'onShowControls', (0, g.z)(this.R, this, 'onShowControls')); this.F.O(this.g, 'resize', (0, g.z)(this.R, this, 'resize')); this.F.O(this.g, 'presentingplayerstatechange', (0, g.z)(this.R, this, 'presentingplayerstatechange')); this.subscribe('onHideControls',
        this.NQ, this); this.subscribe('onShowControls', this.RS, this); this.subscribe('presentingplayerstatechange', this.ZR, this); this.subscribe('resize', this.gu, this); this.subscribe('D', this.yL, this); this.subscribe('C', this.zh, this); this.subscribe('A', this.rP, this); this.subscribe('B', this.WP, this); g.X(this.g).B.subscribe('vast_info_card_add', this.qC, this); this.X = new g.CF(this); g.N(this, this.X); this.X.O(this.g, 'crn_annotations_module', this.wL); this.X.O(this.g, 'crx_annotations_module', this.xL); this.U = g.K('DIV',
        ['video-legacy-annotations', 'html5-stop-propagation']); this.Z = g.K('DIV', 'video-custom-annotations'); this.A = new g.V({G: 'div', ca: ['ytp-player-content', 'ytp-iv-player-content']}); g.N(this, this.A); g.yV(this.g, this.A.element, 4); this.A.hide(); this.C = new g.V({G: 'div', ca: ['ytp-iv-video-content']}); g.N(this, this.C); g.Ed(this.C.element, g.K('DIV', 'video-annotations', this.U, this.Z)); this.H = this.l = null; this.N = []; $xa(this) && this.load(); var b = g.Cd('STYLE'); (window.document.getElementsByTagName('HEAD')[0] || window.document.body).appendChild(b)
      g.Ye(this, function () { g.Id(b) })
      if (a = b.sheet) {
        a.insertRule('.iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}',
          0), a.insertRule('.iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}',
          0), a.insertRule('.iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}', 0), a.insertRule('.iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}',
          0), a.insertRule('.iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}', 0), a.insertRule('.iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}',
          0), a.insertRule('.iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}', 0), a.insertRule('.iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}',
          0), a.insertRule('.annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}', 0), a.insertRule('.annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}',
          0)
      }
    }, aya = function (a) { switch (a) { case 'annotation-editor':case 'live-dashboard':return !0 } return !1 }, $xa = function (a) {
      var b = g.X(a.g)
      a = a.g.getVideoData(); return (b.Rg || a.Rg) == 1 && !a.Ck || b.B.get(a.videoId) !== null
    }, bya = function (a, b, c) {
      a.K = !0
      a.D = g.kE(b, c)
    }, cya = function (a, b) {
      for (var c = {}, d = 0; d < b.attributes.length; d++) {
        var e = b.attributes[d]
        c[e.name] = e.nodeValue
      } for (d = 0; d < b.childNodes.length; d++) if (e = b.childNodes[d], e.tagName) { if (c[e.tagName]) var f = c[e.tagName]; else if (e.tagName == 'data') { e.childNodes.length > 0 && (f = e.childNodes[0].nodeValue, c[e.tagName] = typeof f === 'string' ? f.trim() : f); continue } else f = [], c[e.tagName] = f; e && e.tagName == 'TEXT' ? e.childNodes.length == 1 && e.childNodes[0].nodeType == 3 ? f.push(e.childNodes[0].nodeValue) : f.push('') : e && f.push(cya(a, e)) } return c
    }, dya = function (a, b, c) {
      return !(a.loaded && a.I == b && a.g.getVideoData().videoId ==
c)
    }, fya = function (a, b) {
      var c = eya(a, b)
      if (!c && b.type != 'marker') return null; Qwa(b, function (a) { a = (0, g.z)(this.nT, this, b.id, a); this.subscribe('ivTrigger:' + b.id, a) }, a)
      var d = new z3(a.da, b, c); g.N(d, c); return d
    }, gya = function (a, b) {
      var c = g.K('DIV', ['annotation',
        'annotation-type-custom']); g.O(c, !1); var d = null; switch (b.type) { case 'branding':if (g.X(a.g).kd) break; a.A.element.appendChild(c); d = new b4(c, f4(a), b); break; case 'promotion':g.yV(a.g, c, 4), d = new c4(c, f4(a), b) }d && d.vp(); return d
    }, jya = function (a) {
      var b = a.g.getVideoData()
      if (b.Gf) {
        var c = g.X(a.g), d = c.B.get(b.videoId); if (d) {
          var e = {format: 'XML', Yc: {}, method: 'POST', withCredentials: !0}; c.playerStyle == 'gaming' && (e.Yc.gaming = '1'); e.wd = (0, g.z)(function (a, b, c) { dya(this, a, b) || (a = g.UD(c) && c.responseXML ? c.responseXML : null) && g4(this, a) }, a, a.I, b.videoId)
          g.kG() && (e.wd = hya(a, e.wd)); e.Mb = {ic_only: '1'}; iya(e, d); a.K = !0; g.kE(b.Gf, e)
        }
      }
    }, iya = function (a, b) {
      a.method = 'POST'
      a.Mb = a.Mb || {}; b.Hq && (a.Mb.ic_coll = b.Hq); b.Rh && (a.Mb.ic_xml = b.Rh); b.vk && (a.Mb.ic_track = b.vk)
    }, kya = function (a) {
      var b = new g.V({G: 'div'})
      g.O(b.element, !1); var c = new Y3(a.g, b.element, f4(a)); g.N(c, b); b.sa(a.A.element); c.vp(); return c
    }, f4 = function (a) {
      if (!a.H) {
        var b = new g.zF(a)
        g.N(a, b); var c = new g.Km(a); g.N(a, c); a.H = new wxa(b, c, g.X(a.g), a.g.getVideoData(), a.Xa, a.g, a.da)
      } return a.H
    }, g4 = function (a, b) {
      var c = !1
      lya(b); for (var d = b.getElementsByTagName('annotation'), e = 0; e < d.length; e++) { var f = cya(a, d[e]), k = null; try { k = Nwa(f) } catch (l) {} if (k) { a: { switch (k.type) { case 'branding':case 'promotion':f = !0; break a }f = !1 } if (f) { if (f = gya(a, k))g.N(a, f), a.L[k.id] = f } else if (k.type == 'card' || k.type == 'drawer')a.l || (a.l = kya(a), g.N(a, a.l)), k.type == 'card' ? Qxa(a.l, k) : Rxa(a.l, k), c = !0; else if (f = fya(a, k))g.N(a, f), a.o[k.id] = f } }c && (Z1(a.g), a.gu()); g.Jb(a.o, function (a) {
        if (a.view) {
          var b = a.annotation; (a = a.view) && b.segment && b.segment.l && (b =
this.o[b.segment.l]) && (a.U = b.annotation)
        }
      }, a)
    }, lya = function (a) {
      if ((a = a.getElementsByTagName('annotations')) && !(a.length < 1) && (a = a[0].getAttribute('itct'))) {
        var b = g.IG()
        if (b) { var c = Jva(); c && Yva(b, c, [q2(a)]) }
      }
    }, nya = function (a, b, c, d) { d ? mya(a, b, c) : h4(a, b, c) }, h4 = function (a, b, c) { if (b = a.o[b])A3(b), c && c.l ? (a = (0, g.z)(a.Ny, a, b), b.g = new g.Wt(a, 2E3), b.g.start()) : a.Ny(b) }, mya = function (a, b, c) { if (b = a.o[b])A3(b), c && c.A ? (a = (0, g.z)(a.BD, a, b), b.g = new g.Wt(a, 2E3), b.g.start()) : a.BD(b) }, oya = function (a, b) {
      if (b.target == 'new') return !1
      var c = b3(b); if (!c) return !1; c = c.replace(/https?:\/\//g, ''); if (!S3(c)) return !1; c = g.bE(c); if (c.list || c.p) return !1; c = Hxa(b); if (!c) return !1; var d = a.g.getVideoData(); return d.videoId == c ? !0 : g.X(a.g).g && d.Rm ? !0 : !1
    }, eya = function (a, b) {
      if (pya(b)) {
        var c = b.B || h3(b, function (a) { return a == 'click' || a == 'rollOut' || a == 'rollOut' })
        return new u3(b, (0, g.z)(a.U.appendChild, a.U), a.g, a.da, c)
      } return null
    }, pya = function (a) {
      if (a.type == 'highlight' || a.type == 'widget') return !0
      if (a.type == 'text') for (var b in g3) if (a.style == g3[b]) return !0; return !1
    }, i4 = function (a, b, c, d) { a.R(Uwa(b, d), c, d) }, hya = function (a, b) {
      return (0, g.z)(function () {
        if (!this.ia()) {
          var a = Array.prototype.slice.call(arguments, 0)
          a.unshift(b); b = g.Fa.apply(window, a); this.N.push(g.iG(b))
        }
      }, a)
    }, j4 = function (a, b, c) {
      switch (a) {
        case 'mouseover':case 'mouseout':var d = 3
          break; case 'mouseenter':case 'mouseleave':d = 9
      } return g.Wd(c, function (a) { return g.jq(a, b) }, !0, d)
    }, l4 = function (a) {
      var b = a.type == 'mouseover' && 'mouseenter' in k4 || a.type == 'mouseout' && 'mouseleave' in k4, c = a.type in k4 || b
      if (a.target.tagName != 'HTML' && c) { if (b) { b = a.type == 'mouseover' ? 'mouseenter' : 'mouseleave'; c = k4[b]; for (var d in c.l) { var e = j4(b, d, a.target); e && !g.Wd(a.relatedTarget, function (a) { return a == e }, !0) && c.R(d, e, b, a) } } if (b = k4[a.type]) for (d in b.l)(e = j4(a.type, d, a.target)) && b.R(d, e, a.type, a) }
    }, m4 = function (a) {
      this.B = a
      this.D = {}; this.H = []; this.F = []
    }, Z = function (a, b) { return 'yt-uix' + (a.B ? '-' + a.B : '') + (b ? '-' + b : '') }, n4 = function (a, b, c) { a.H.push(g.RF(b, c, a)) }, o4 = function (a, b, c) { a.F.push(g.DN(b, c, a)) }, p4 = function () {
      m4.call(this, 'button')
      this.g = null; this.o = []; this.l = {}
    }, qya = function (a, b, c, d, e) {
      var f = r2(c), k = d.keyCode == 9
      k || d.keyCode == 32 || d.keyCode == 13 ? (d = q4(a, c)) ? (b = g.Md(d), b.tagName.toLowerCase() == 'a' ? g.FV(b.href) : Hva(b)) : k && r4(a, b) : f ? d.keyCode == 27 ? (q4(a, c), r4(a, b)) : e(b, c, d) : (a = g.jq(b, Z(a, 'reverse')) ? 38 : 40, d.keyCode == a && (Hva(b), d.preventDefault()))
    }, q4 = function (a, b) {
      var c = Z(a, 'menu-item-highlight'), d = g.J(c, b)
      d && g.lq(d, c); return d
    }, rya = function (a, b, c) {
      g.S(c, Z(a, 'menu-item-highlight'))
      var d = c.getAttribute('id'); d || (d = Z(a, 'item-id-' + g.Ea(c)), c.setAttribute('id', d)); b.setAttribute('aria-activedescendant', d)
    }, sya = function (a, b, c, d) {
      var e = b.length
      a = (0, g.Oa)(b, a); if (a == -1) if (d.keyCode == 38)a = e - c; else { if (d.keyCode == 37 || d.keyCode == 38 || d.keyCode == 40)a = 0 } else d.keyCode == 39 ? (a % c == c - 1 && (a -= c), a += 1) : d.keyCode == 37 ? (a % c == 0 && (a += c), --a) : d.keyCode == 38 ? (a < c && (a += e), a -= c) : d.keyCode == 40 && (a >= e - c && (a -= e), a += c); return a
    }, s4 = function (a, b) {
      var c = b.iframeMask
      c || (c = g.Cd('IFRAME'), c.src = 'javascript:""', c.className = Z(a, 'menu-mask'), t2(c), b.iframeMask = c); return c
    }, t4 = function (a, b, c, d) {
      var e = g.Yd(b, Z(a, 'group')), f = !!a.za(b, 'button-menu-ignore-group')
      e = e && !f ? e : b; f = 9; var k = 8, l = g.Ih(b); if (g.jq(b, Z(a, 'reverse'))) { f = 8; k = 9; l = l.top + 'px'; try { c.style.maxHeight = l } catch (q) {} }g.jq(b, 'flip') && (g.jq(b, Z(a, 'reverse')) ? (f = 12, k = 13) : (f = 13, k = 12)); var m; a.za(b, 'button-has-sibling-menu') ? m = g.xh(e) : a.za(b, 'button-menu-root-container') && (m = tya(a, b)); g.wd && !g.pc('8') && (m = null); if (m) { var n = g.Ih(m); n = new g.Xg(-n.top, n.left, n.top, -n.left) }m = new g.fd(0, 1); g.jq(b, Z(a, 'center-menu')) && (m.x -= Math.round((g.Hh(c).width - g.Hh(b).width) / 2)); d && (m.y += g.xd(window.document).y); if (a =
s4(a, b))b = g.Hh(c), a.style.width = b.width + 'px', a.style.height = b.height + 'px', l2(e, f, a, k, m, n, 197), d && g.nh(a, 'position', 'fixed'); l2(e, f, c, k, m, n, 197)
    }, tya = function (a, b) {
      if (a.za(b, 'button-menu-root-container')) {
        var c = a.za(b, 'button-menu-root-container')
        return g.Yd(b, c)
      } return window.document.body
    }, r4 = function (a, b) {
      if (b) {
        var c = u4(a, b)
        if (c) { a.g = null; b.setAttribute('aria-pressed', 'false'); b.setAttribute('aria-expanded', 'false'); b.removeAttribute('aria-activedescendant'); t2(c); a.bj(b, 'button-menu-action', !1); var d = s4(a, b), e = n2(c).toString(); delete a.l[e]; g.VD(function () { d && d.parentNode && (t2(d), d.parentNode.removeChild(d)); c.originalParentNode && (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c), c.originalParentNode = null, c.activeButtonNode = null) }, 1) }e = g.Yd(b, Z(a, 'group'))
        var f = [Z(a, 'active')]; e && f.push(Z(a, 'group-active')); g.mq(b, f); g.UF('yt-uix-button-menu-hide', b); g.pF(a.o); a.o.length = 0
      }
    }, uya = function (a, b, c) {
      var d = Z(a, 'menu-item-selected')
      a = g.pd(d, b); (0, g.B)(a, function (a) { g.lq(a, d) })
      g.S(c.parentNode, d)
    }, u4 = function (a, b) {
      if (!b.widgetMenu) {
        var c = a.za(b, 'button-menu-id')
        c = c && g.nd(c); var d = Z(a, 'menu'); c ? g.kq(c, [d, Z(a, 'menu-external')]) : c = g.J(d, b); b.widgetMenu = c
      } return b.widgetMenu
    }, v4 = function (a) { a.g && r4(a, a.g) }, w4 = function (a) {
      m4.call(this, a)
      this.o = null
    }, vya = function (a, b, c) {
      var d = c || b, e = Z(a, 'card')
      c = a.Cc(d); var f = g.nd(Z(a, 'card') + n2(d)); if (f) return a = g.J(Z(a, 'card-body'), f), g.Od(a, c) || (g.Id(c), a.appendChild(c)), f; f = window.document.createElement('div'); f.id = Z(a, 'card') + n2(d); f.className = e; (d = a.za(d, 'card-class')) && g.kq(f, d.split(/\s+/)); d = window.document.createElement('div'); d.className = Z(a, 'card-border'); b = a.za(b, 'orientation') || 'horizontal'; e = window.document.createElement('div'); e.className = 'yt-uix-card-border-arrow yt-uix-card-border-arrow-' + b; var k = window.document.createElement('div'); k.className =
Z(a, 'card-body'); a = window.document.createElement('div'); a.className = 'yt-uix-card-body-arrow yt-uix-card-body-arrow-' + b; g.Id(c); k.appendChild(c); d.appendChild(a); d.appendChild(k); f.appendChild(e); f.appendChild(d); window.document.body.appendChild(f); return f
    }, wya = function (a, b, c) {
      var d = a.za(b, 'orientation') || 'horizontal'
      var e = g.J(Z(a, 'anchor'), b) || b; var f = a.za(b, 'position'), k = !!a.za(b, 'force-position'), l = a.za(b, 'position-fixed'); d = d == 'horizontal'; var m = f == 'bottomright' || f == 'bottomleft', n = f == 'topright' || f == 'bottomright'; if (n && m) { var q = 13; var r = 8 } else n && !m ? (q = 12, r = 9) : !n && m ? (q = 9, r = 12) : (q = 8, r = 13); var v = b2(window.document.body); f = b2(b); v != f && (q ^= 4); if (d) { f = b.offsetHeight / 2 - 12; var C = new g.fd(-12, b.offsetHeight + 6) } else f = b.offsetWidth / 2 - 6, C = new g.fd(b.offsetWidth + 6, -12); var I = g.Hh(c); f = Math.min(f, (d ? I.height : I.width) -
24 - 6); f < 6 && (f = 6, d ? C.y += 12 - b.offsetHeight / 2 : C.x += 12 - b.offsetWidth / 2); I = null; k || (I = 10); b = Z(a, 'card-flip'); a = Z(a, 'card-reverse'); g.T(c, b, n); g.T(c, a, m); I = l2(e, q, c, r, C, null, I); !k && I && (I & 48 && (n = !n, q ^= 4, r ^= 4), I & 192 && (m = !m, q ^= 1, r ^= 1), g.T(c, b, n), g.T(c, a, m), l2(e, q, c, r, C)); l && (e = (0, window.parseInt)(c.style.top, 10), k = g.xd(window.document).y, g.nh(c, 'position', 'fixed'), g.nh(c, 'top', e - k + 'px')); v && (c.style.right = '', e = g.Ih(c), e.left = e.left || (0, window.parseInt)(c.style.left, 10), k = g.ud(window), c.style.left = '', c.style.right =
k.width - e.left - e.width + 'px'); e = g.J('yt-uix-card-body-arrow', c); k = g.J('yt-uix-card-border-arrow', c); d = d ? m ? 'top' : 'bottom' : !v && n || v && !n ? 'left' : 'right'; e.setAttribute('style', ''); k.setAttribute('style', ''); e.style[d] = f + 'px'; k.style[d] = f + 'px'; m = g.J('yt-uix-card-arrow', c); n = g.J('yt-uix-card-arrow-background', c); m && n && (c = d == 'right' ? g.Hh(c).width - f - 13 : f + 11, f = c / Math.sqrt(2), m.style.left = c + 'px', m.style.marginLeft = '1px', n.style.marginLeft = -f + 'px', n.style.marginTop = f + 'px')
    }, x4 = function (a) { a.o && a.hide(a.o) }, xya =
function (a) {
  var b = a.cardMask
  b || (b = g.Cd('IFRAME'), b.src = 'javascript:""', g.kq(b, ['yt-uix-card-iframe-mask']), a.cardMask = b); b.style.position = a.style.position; b.style.top = a.style.top; b.style.left = a.offsetLeft + 'px'; b.style.height = a.clientHeight + 'px'; b.style.width = a.clientWidth + 'px'; window.document.body.appendChild(b)
}, y4 = function () { m4.call(this, 'kbd-nav') }, yya = function (a, b, c) {
      if (b && c) {
        if (g.S(c, Z(a)), a = b.id, a || (a = 'kbd-nav-' + Math.floor(1E6 * Math.random() + 1), b.id = a), b = a, g.hk && c.dataset)c.dataset.kbdNavMoveOut = b
        else { if (/-[a-z]/.test('kbdNavMoveOut')) throw Error(''); c.setAttribute('data-' + g.Fb('kbdNavMoveOut'), b) }
      }
    }, zya = function (a, b) {
      if (b) {
        var c = g.Xd(b, 'LI')
        c && (g.S(c, Z(a, 'highlight')), z4 = g.oF(b, 'blur', (0, g.z)(function (a) { g.lq(a, Z(this, 'highlight')); g.pF(z4) }, a, c)))
      }
    }, Aya = function (a) {
      if (a.tagName.toUpperCase() != 'UL') return []
      a = (0, g.Jd)(g.Kd(a), function (a) { return a.tagName.toUpperCase() == 'LI' })
      return (0, g.Jd)((0, g.G)(a, function (a) { return r2(a) ? $1(a, function (a) { return g.Ca(a) && a.nodeType == 1 ? g.Vd(a) : !1 }) : !1 }), function (a) { return !!a })
    }, A4 = function () {
      m4.call(this, 'menu')
      this.l = this.g = null; this.o = {}; this.C = {}; this.A = null
    }, B4 = function (a) {
      var b = A4.getInstance()
      if (g.jq(a, Z(b))) return a; var c = b.ie(a); return c || (g.Yd(a, Z(b, 'content')) == b.g ? b.l : null)
    }, Bya = function (a, b, c) {
      var d = C4(a, b)
      d && g.Gh(d, g.Hh(c)); if (c == a.g) { var e = 9, f = 8; g.jq(b, Z(a, 'reversed')) && (e ^= 1, f ^= 1); g.jq(b, Z(a, 'flipped')) && (e ^= 4, f ^= 4); a = new g.fd(0, 1); d && l2(b, e, d, f, a, null, 197); l2(b, e, c, f, a, null, 197) }
    }, Dya = function (a, b, c) { D4(a, b) && !c ? E4(a, b) : (Cya(a, b), !a.g || o2(b, a.g) ? a.dF(b) : jva(a.A, (0, g.z)(a.dF, a, b))) }, Cya = function (a, b) {
      if (b) {
        var c = g.Yd(b, Z(a, 'content'))
        c && (c = g.pd(Z(a), c), (0, g.B)(c, function (a) { !o2(a, b) && D4(this, a) && F4(this, a) }, a))
      }
    }, E4 = function (a, b) {
      if (b) {
        var c = []
        c.push(b); var d = G4(a, b); d && (d = g.pd(Z(a), d), d = g.Xa(d), c = c.concat(d), (0, g.B)(c, function (a) { D4(this, a) && F4(this, a) }, a))
      }
    }, F4 = function (a, b) {
      if (b) {
        var c = G4(a, b)
        g.mq(H4(a, b), [Z(a, 'trigger-selected'), 'yt-uix-button-toggled']); g.S(c, Z(a, 'content-hidden')); var d = G4(a, b); d && g.sd(d, {'aria-expanded': 'false'}); (d = C4(a, b)) && d.parentNode && g.Id(d); c && c == a.g && (a.l.appendChild(c), a.g = null, a.l = null, a.A && a.A.R('ROOT_MENU_REMOVED')); g.UF('yt-uix-menu-hide', b); c = g.Ea(b).toString(); g.pF(a.o[c]); delete a.o[c]
      }
    }, Eya = function (a, b) {
      var c = G4(a, b)
      if (c) {
        (0, g.B)(c.children, function (a) { a.tagName == 'LI' && g.sd(a, {role: 'menuitem'}) })
        g.sd(c, {'aria-expanded': 'true'}); var d = c.id; d || (d = 'aria-menu-id-' + g.Ea(c), c.id = d); (c = H4(a, b)) && g.sd(c, {'aria-controls': d})
      }
    }, Fya = function (a, b, c) {
      var d = G4(a, b)
      d && g.jq(b, Z(a, 'checked')) && (a = g.Xd(c, 'LI')) && (a = g.J('yt-ui-menu-item-checked-hid', a)) && (d = g.pd('yt-ui-menu-item-checked', d), (0, g.B)(d, function (a) { g.nq(a, 'yt-ui-menu-item-checked', 'yt-ui-menu-item-checked-hid') }), g.nq(a, 'yt-ui-menu-item-checked-hid', 'yt-ui-menu-item-checked'))
    }, D4 = function (a, b) {
      var c = G4(a, b)
      return c ? !g.jq(c, Z(a, 'content-hidden')) : !1
    }, Gya = function (a) {
      a = g.od(window.document, 'UL', null, a);
      (0, g.B)(a, function (a) { a.tabIndex = 0; var b = y4.getInstance(); g.kq(a, [Z(b), Z(b, 'list')]) })
    }, G4 = function (a, b) {
      var c = g.ZE(b, 'menu-content-id')
      return c && (c = g.nd(c)) ? (g.kq(c, [Z(a, 'content'), Z(a, 'content-external')]), c) : b == a.l ? a.g : g.J(Z(a, 'content'), b)
    }, C4 = function (a, b) {
      var c = g.Ea(b).toString(), d = a.C[c]
      if (!d) {
        d = g.Cd('IFRAME'); d.src = 'javascript:""'; var e = [Z(a, 'mask')]; (0, g.B)(g.iq(b), function (a) { e.push(a + '-mask') })
        g.kq(d, e); a.C[c] = d
      } return d || null
    }, H4 = function (a, b) { return g.J(Z(a, 'trigger'), b) }, Hya = function (a, b) { return o2(b, a.g) || o2(b, a.l) }, I4 = function () {
      w4.call(this, 'clickcard')
      this.g = {}; this.l = {}
    }, J4 = function () { w4.call(this, 'hovercard') }, K4 = function (a, b, c, d, e, f) {
      this.g = a
      this.D = null; this.o = g.J('yt-dialog-fg', this.g) || this.g; if (a = g.J('yt-dialog-title', this.o)) { var k = 'yt-dialog-title-' + g.Ea(this.o); a.setAttribute('id', k); this.o.setAttribute('aria-labelledby', k) } this.o.setAttribute('tabindex', '-1'); this.I = g.J('yt-dialog-focus-trap', this.g); this.K = !1; this.A = new g.VC(); this.F = []; this.F.push(g.xF(this.g, 'click', (0, g.z)(this.TP, this), 'yt-dialog-dismiss')); this.F.push(g.oF(this.I, 'focus', (0, g.z)(this.yI, this), !0)); Iya(this); this.L = b; this.U = c; this.N = d; this.H = e; this.X = f; this.C =
this.B = null
    }, Jya = function (a, b) { a.ia() || a.A.subscribe('post-all', b) }, Iya = function (a) {
      a = g.J('yt-dialog-fg-content', a.g)
      var b = []; g.Jb(Kya, function (a) { b.push('yt-dialog-show-' + a) })
      g.mq(a, b); g.S(a, 'yt-dialog-show-content')
    }, Lya = function () {
      var a = g.pd('yt-dialog')
      return (0, g.zj)(a, function (a) { return r2(a) })
    }, Mya = function (a) {
      var b = g.od(window.document, 'iframe', null, a.g);
      (0, g.B)(b, function (a) { var b = g.ZE(a, 'onload'); b && (b = g.x(b)) && g.oF(a, 'load', b); if (b = g.ZE(a, 'src'))a.src = b }, a)
      return g.Xa(b)
    }, Nya = function (a) { (0, g.B)(window.document.getElementsByTagName('iframe'), function (b) { (0, g.Oa)(a, b) == -1 && g.S(b, 'iframe-hid') }) }, Oya = function () {
      var a = g.pd('iframe-hid');
      (0, g.B)(a, function (a) { g.lq(a, 'iframe-hid') })
    }, Pya = function (a) { g.VD((0, g.z)(function () { this.o && this.o.focus() }, a), 0) }, L4 = function () {
      m4.call(this, 'overlay')
      this.A = this.l = this.o = this.g = null
    }, Rya = function (a) {
      a.A || (a.A = g.RF('yt-uix-overlay-hide', Qya))
      a.g && Jya(a.g, function () { var a = L4.getInstance(); a.o = null; a.g.dispose(); a.g = null })
    }, Sya = function (a) {
      if (a.g) {
        var b = a.o
        a.g.dismiss('overlayhide'); b && a.bj(b, 'overlay-hidden'); a.o = null; a.l && (g.pF(a.l), a.l = null); a.g = null
      }
    }, Tya = function (a, b) {
      var c
      if (a) if (c = g.J('yt-dialog', a)) { var d = g.nd('body-container'); d && (d.appendChild(c), a.overlayContentNode = c, c.overlayParentNode = a) } else c = a.overlayContentNode; else b && (c = g.Yd(b, 'yt-dialog')); return c
    }, Uya = function () {
      var a = L4.getInstance()
      if (a.o)a = g.J('yt-dialog-fg-content', a.o.overlayContentNode); else a: { if (a = g.pd('yt-dialog-fg-content')) for (var b = 0; b < a.length; b++) { var c = g.Yd(a[b], 'yt-dialog'); if (r2(c)) { a = a[b]; break a } }a = null } return a
    }, Qya = function () { Sya(L4.getInstance()) }, M4 = function () {
      m4.call(this, 'tooltip')
      this.g = 0; this.l = {}
    }, Vya = function (a, b, c) {
      a.setData(b, 'tooltip-text', c)
      a = a.za(b, 'content-id'); (a = g.nd(a)) && g.Qd(a, c)
    }, Wya = function (a, b) { return a.za(b, 'tooltip-text') || b.title }, Zya = function (a, b) {
      if (b) {
        var c = Wya(a, b)
        if (c) {
          var d = g.nd(N4(a, b)); if (!d) {
            d = window.document.createElement('div'); d.id = N4(a, b); d.className = Z(a, 'tip'); var e = window.document.createElement('div'); e.className = Z(a, 'tip-body'); var f = window.document.createElement('div'); f.className = Z(a, 'tip-arrow'); var k = window.document.createElement('div'); k.setAttribute('aria-hidden', 'true'); k.className = Z(a, 'tip-content'); var l = Xya(a, b), m = N4(a, b, 'content'); k.id = m; a.setData(b, 'content-id', m); e.appendChild(k); l && d.appendChild(l); d.appendChild(e); d.appendChild(f)
            var n = a2(b); m = N4(a, b, 'arialabel'); f = window.document.createElement('div'); g.S(f, Z(a, 'arialabel')); f.id = m; n = b.hasAttribute('aria-label') ? b.getAttribute('aria-label') : window.document.body.getAttribute('dir') == 'rtl' ? c + ' ' + n : n + ' ' + c; g.Qd(f, n); b.setAttribute('aria-labelledby', m); m = g.eF() || window.document.body; m.appendChild(f); m.appendChild(d); Vya(a, b, c); (c = (0, window.parseInt)(a.za(b, 'tooltip-max-width'), 10)) && e.offsetWidth > c && (e.style.width = c + 'px', g.S(k, Z(a, 'normal-wrap'))); k = g.jq(b, Z(a, 'reverse')); Yya(a,
              b, d, e, l, k) || Yya(a, b, d, e, l, !k); var q = Z(a, 'tip-visible'); g.VD(function () { g.S(d, q) }, 0)
          }
        }
      }
    }, Yya = function (a, b, c, d, e, f) {
      g.T(c, Z(a, 'tip-reverse'), f)
      var k = 0; f && (k = 1); var l = g.Hh(b); f = new g.fd((l.width - 10) / 2, f ? l.height : 0); var m = g.zh(b); Eva(new g.fd(m.x + f.x, m.y + f.y), c, k); m = g.ud(window); var n = g.Dh(c); c = g.Hh(d); var q = Math.floor(c.width / 2); k = !!(m.height < n.y + l.height); l = !!(n.y < l.height); f = !!(n.x < q); m = !!(m.width < n.x + q); n = (c.width + 3) / -2 - -5; a = a.za(b, 'force-tooltip-direction'); if (a == 'left' || f)n = -5; else if (a == 'right' || m)n = 20 - c.width - 3; a = Math.floor(n) + 'px'; d.style.left = a; e && (e.style.left = a, e.style.height = c.height + 'px', e.style.width = c.width + 'px'); return !(k ||
l)
    }, N4 = function (a, b, c) {
      a = Z(a) + n2(b)
      c && (a += '-' + c); return a
    }, Xya = function (a, b) {
      var c = null
      g.R0 && g.jq(b, Z(a, 'masked')) && ((c = g.nd('yt-uix-tooltip-shared-mask')) ? (c.parentNode.removeChild(c), s2(c)) : (c = g.Cd('IFRAME'), c.src = 'javascript:""', c.id = 'yt-uix-tooltip-shared-mask', c.className = Z(a, 'tip-mask'))); return c
    }, $ya = function (a) {
      var b = g.nd('yt-uix-tooltip-shared-mask'), c = b && g.Wd(b, function (b) { return b == a }, !1, 2)
      b && c && (b.parentNode.removeChild(b), t2(b), window.document.body.appendChild(b))
    }, O4 = function (a) {
      g.wN.call(this, 1, arguments)
      this.g = a
    }, P4 = function (a, b, c, d, e) {
      g.wN.call(this, 2, arguments)
      this.source = e || null
    }, aza = function (a, b, c) {
      g.wN.call(this, 1, arguments)
      this.g = a; this.l = b
    }, Q4 = function (a, b, c, d, e, f, k) {
      g.wN.call(this, 1, arguments)
      this.g = d || null; this.source = k || null
    }, bza = function (a) {
      a = g.Yd(a, 'yt-uix-button-subscription-container')
      a = g.J('unsubscribe-confirmation-overlay-container', a); return g.J('yt-dialog', a)
    }, cza = function (a, b) {
      g.pF(R4)
      R4.length = 0; S4[b] || (S4[b] = bza(a)); L4.getInstance().show(S4[b]); var c = Uya(); return new g.Wf(function (a) { R4.push(g.xF(c, 'click', function () { a() }, 'overlay-confirmation-unsubscribe-button')) })
    }, T4 = function () { m4.call(this, 'subscription-button') }, dza = function (a, b) {
      if (!a.za(b, 'ypc-enabled')) return null
      var c = a.za(b, 'ypc-item-type'), d = a.za(b, 'ypc-item-id'); return {itemType: c, itemId: d, subscriptionElement: b}
    }, eza = function (a, b) {
      var c = a.za(b, U4.gH), d = !!a.za(b, 'is-subscribed')
      c = '-' + c; var e = V4.uF + c; g.T(b, V4.tF + c, !d); g.T(b, e, d); a.za(b, U4.GF) && !a.za(b, U4.FF) && (c = Z(M4.getInstance()), g.T(b, c, !d), b.title = d ? '' : a.za(b, U4.HF)); d ? g.VD(function () { g.S(b, V4.Bv) }, 1E3) : g.lq(b, V4.Bv)
    }, fza = function (a, b) {
      var c = g.pd(Z(a))
      return (0, g.Jd)(c, function (a) { return b == this.za(a, 'channel-external-id') }, a)
    }, gza = function (a, b) {
      var c = (0, g.z)(function (a) {
        a.discoverable_subscriptions && g.OD('SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS', a.discoverable_subscriptions)
        this.xv(b)
      }, a)
      g.Lsa(c, 'subscribe', 'sub_button')
    }, hza = function (a, b) {
      if (!a.za(b, 'show-unsub-confirm-dialog')) return !1
      var c = a.za(b, 'show-unsub-confirm-time-frame'); return c == 'always' || c == 'ten_minutes' && (c = (0, window.parseInt)(a.za(b, 'subscribed-timestamp'), 10), (new e2()).getTime() < 1E3 * (c + 600)) ? !0 : !1
    }, ova = {SCRIPT: 1,
      STYLE: 1,
      HEAD: 1,
      IFRAME: 1,
      OBJECT: 1}, pva = {IMG: ' ', BR: '\n'}, sva = /[^\d]+$/, tva = {cm: 1, 'in': 1, mm: 1, pc: 1, pt: 1}, uva = {em: 1, ex: 1}; c2.prototype.clone = function () { return new c2(this.start, this.end) }
  c2.prototype.getLength = function () { return this.end - this.start }
  g.A(e2, g.jo); g.h = e2.prototype; g.h.getHours = function () { return this.date.getHours() }
  g.h.getMinutes = function () { return this.date.getMinutes() }
  g.h.getSeconds = function () { return this.date.getSeconds() }
  g.h.getUTCHours = function () { return this.date.getUTCHours() }
  g.h.getUTCMinutes = function () { return this.date.getUTCMinutes() }
  g.h.add = function (a) { g.jo.prototype.add.call(this, a); a.hours && this.date.setUTCHours(this.date.getUTCHours() + a.hours); a.minutes && this.date.setUTCMinutes(this.date.getUTCMinutes() + a.minutes); a.seconds && this.date.setUTCSeconds(this.date.getUTCSeconds() + a.seconds) }
  g.h.Rn = function (a) { var b = g.jo.prototype.Rn.call(this, a); return a ? b + ' ' + g.wb(this.getHours(), 2) + ':' + g.wb(this.getMinutes(), 2) + ':' + g.wb(this.getSeconds(), 2) : b + 'T' + g.wb(this.getHours(), 2) + g.wb(this.getMinutes(), 2) + g.wb(this.getSeconds(), 2) }
  g.h.toString = function () { return this.Rn() }
  g.h.clone = function () { var a = new e2(this.date); a.Bn = this.Bn; a.Dn = this.Dn; return a }
  var f2 = {}, g2 = null; g.A(zva, g.af); g.A(i2, g.rt); g.h = i2.prototype; g.h.getDuration = function () { return this.duration }
  g.h.play = function (a) { if (a || this.g == 0) this.progress = 0, this.coords = this.l; else if (this.kb()) return !1; h2(this); this.startTime = a = (0, g.F)(); this.g == -1 && (this.startTime -= this.duration * this.progress); this.endTime = this.startTime + this.duration; this.A = this.startTime; this.progress || this.Mo(); this.Ce('play'); this.g == -1 && this.Ce('resume'); this.g = 1; var b = g.Ea(this); b in f2 || (f2[b] = this); xva(); yva(this, a); return !0 }
  g.h.stop = function (a) { h2(this); this.g = 0; a && (this.progress = 1); Ava(this, this.progress); this.Ce('stop'); this.Sl() }
  g.h.pause = function () { this.kb() && (h2(this), this.g = -1, this.Ce('pause')) }
  g.h.V = function () { this.g == 0 || this.stop(!1); this.Ce('destroy'); i2.ba.V.call(this) }
  g.h.destroy = function () { this.dispose() }
  g.h.Vt = function () { this.Ce('animate') }
  g.h.Ce = function (a) { this.dispatchEvent(new zva(a, this)) }
  g.A(j2, i2); j2.prototype.o = g.y; j2.prototype.Vt = function () { this.o(); j2.ba.Vt.call(this) }
  j2.prototype.Sl = function () { this.o(); j2.ba.Sl.call(this) }
  j2.prototype.Mo = function () { this.o(); j2.ba.Mo.call(this) }
  g.A(k2, j2); k2.prototype.o = function () { this.element.style.left = Math.round(this.coords[0]) + 'px'; this.element.style.top = Math.round(this.coords[1]) + 'px' }; g.A(v2, g.Cf); g.h = v2.prototype; g.h.yr = null; g.h.jl = null; g.h.la = function () { return this.jl }
  g.h.addEventListener = function (a, b, c, d) { g.of(this.jl, a, b, c, d) }
  g.h.removeEventListener = function (a, b, c, d) { g.wf(this.jl, a, b, c, d) }
  g.h.V = function () { v2.ba.V.call(this); var a = this.jl; if (a) if (g.gf(a))a.De && g.lf(a.De); else if (a = g.rf(a)) { var b = 0, c; for (c in a.listeners) for (var d = a.listeners[c].concat(), e = 0; e < d.length; ++e)g.xf(d[e]) && ++b } }; g.A(z2, v2); z2.prototype.fill = null; g.A(Ova, v2); A2.prototype.Hf = null; A2.prototype.Ud = null; A2.prototype.im = !0; var Qva = [2, 2, 6, 6, 0]; g.h = A2.prototype; g.h.clear = function () { this.qb.length = 0; this.Ia.length = 0; this.ye.length = 0; delete this.Hf; delete this.Ud; delete this.im; return this }
  g.h.Ec = function (a) { var b = g.Ja(this.qb); if (b == null) throw Error('Path cannot start with lineTo'); b != 1 && (this.qb.push(1), this.Ia.push(0)); for (b = 0; b < arguments.length; b += 2) { var c = arguments[b], d = arguments[b + 1]; this.ye.push(c, d) } this.Ia[this.Ia.length - 1] += b / 2; this.Ud = [c, d] }
  g.h.close = function () { var a = g.Ja(this.qb); if (a == null) throw Error('Path cannot start with close'); a != 4 && (this.qb.push(4), this.Ia.push(1), this.Ud = this.Hf); return this }
  g.h.clone = function () { var a = new this.constructor(); a.qb = this.qb.concat(); a.Ia = this.Ia.concat(); a.ye = this.ye.concat(); a.Hf = this.Hf && this.Hf.concat(); a.Ud = this.Ud && this.Ud.concat(); a.im = this.im; return a }
  g.h.transform = function (a) { if (!this.im) throw Error('Non-simple path'); a.transform(this.ye, 0, this.ye, 0, this.ye.length / 2); this.Hf && a.transform(this.Hf, 0, this.Hf, 0, 1); this.Ud && this.Hf != this.Ud && a.transform(this.Ud, 0, this.Ud, 0, 1); return this }
  g.h.isEmpty = function () { return this.qb.length == 0 }; g.A(Sva, z2); C2.prototype.Db = function () { return this.l }; g.A(D2, g.Ru); D2.prototype.B = null; D2.prototype.vj = function () { return this.Ne ? g.Hh(this.la()) : g.va(this.width) && g.va(this.height) ? new g.H(this.width, this.height) : null }
  D2.prototype.resume = function () {}; g.A(x2, Nva); g.A(w2, Nva); g.A(E2, Ova); E2.prototype.clear = function () { g.Gd(this.la()) }
  E2.prototype.setSize = function (a, b) { var c = this.la(), d = {width: a, height: b}, e; for (e in d)c.setAttribute(e, d[e]) }
  g.A(Tva, Sva); var H2; g.A(F2, D2); var Vva = 0; g.h = F2.prototype; g.h.Tn = function () { var a = y2(this, 'svg', {width: this.width, height: this.height, overflow: 'hidden'}), b = y2(this, 'g'); this.F = y2(this, 'defs'); this.B = new E2(b, this); a.appendChild(this.F); a.appendChild(b); this.g = a; this.o && (this.la().setAttribute('preserveAspectRatio', 'none'), this.N ? this.Ip() : this.la().setAttribute('viewBox', '0 0 ' + (this.o ? this.o + ' ' + this.L : ''))) }
  g.h.Ip = function () { if (this.Ne) { var a = this.vj(); if (a.width == 0) this.la().style.visibility = 'hidden'; else { this.la().style.visibility = ''; var b = a.width / this.o; a = a.height / this.L; this.B.la().setAttribute('transform', 'scale(' + b + ' ' + a + ') translate(0 0)') } } }
  g.h.setSize = function (a, b) { g.Gh(this.la(), a, b) }
  g.h.vj = function () { if (!g.ph) return this.Ne ? g.Hh(this.la()) : F2.ba.vj.call(this); var a = this.width, b = this.height, c = g.u(a) && a.indexOf('%') != -1, d = g.u(b) && b.indexOf('%') != -1; if (!this.Ne && (c || d)) return null; if (c) { var e = this.la().parentNode; var f = g.Hh(e); a = (0, window.parseFloat)(a) * f.width / 100 }d && (e = e || this.la().parentNode, f = f || g.Hh(e), b = (0, window.parseFloat)(b) * f.height / 100); return new g.H(a, b) }
  g.h.clear = function () { this.B.clear(); g.Gd(this.F); this.l = {} }
  g.h.jj = function () { var a = this.vj(); F2.ba.jj.call(this); a || this.dispatchEvent('resize'); if (this.N) { a = this.width; var b = this.height; typeof a === 'string' && a.indexOf('%') != -1 && typeof b === 'string' && b.indexOf('%') != -1 && this.I.T(Wva(), 'tick', this.Ip); this.Ip() } }
  g.h.Tk = function () { F2.ba.Tk.call(this); this.N && this.I.Ca(Wva(), 'tick', this.Ip) }
  g.h.V = function () { delete this.l; delete this.F; delete this.B; this.I.dispose(); delete this.I; F2.ba.V.call(this) }; g.p(L2, g.EV); g.h = L2.prototype
  g.h.load = function () {
    g.EV.prototype.load.call(this); if (!M2(g.X(this.g).playerStyle)) {
      var a = this.g.getVideoData(); if (a = a.Oi ? null : a.ob && a.ob.endscreen && a.ob.endscreen.endscreenRenderer || null)a = K2(a, this.N ? 'new' : 'current'), N2(this, a); else {
        var b = this.g.getVideoData(); a = b.videoId; this.B && this.B.abort(); a = {method: 'POST', wd: (0, g.z)(this.zQ, this, a), Yc: {v: a}, withCredentials: !0}; g.X(this.g).playerStyle == 'gaming' && (a.Yc.gaming = '1'); this.N && (a.Yc.ptype = 'embedded'); var c = this.g.getVideoData().Nx; c && (a.Mb = {ad_tracking: c})
        if (b = g.PO(b)) if (b = g.Jc(b), b = g.Gc(b)) this.B = g.kE(b, a)
      }
    }
  }
  g.h.unload = function () { N2(this, null); this.B && (this.B.abort(), this.B = null); g.EV.prototype.unload.call(this) }
  g.h.AL = function (a, b) { if (!M2(g.X(this.g).playerStyle)) return null; if (a == 'loadCustomEndscreenRenderer') { var c = K2(b, 'new'); N2(this, c); return !0 } return null }
  g.h.BL = function () { return M2(g.X(this.g).playerStyle) ? ['loadCustomEndscreenRenderer'] : [] }
  g.h.zQ = function (a, b) { var c = this.B = null; if (b.status == 200) { var d = b.responseText; d.substring(0, 3) == ')]}' && (d = d.substring(3), c = JSON.parse(d), c = K2(c, this.N ? 'new' : 'current')) }N2(this, c) }
  g.h.aA = function () {
    if (this.o && this.o.elements) {
      var a = this.g.qA(); if (a && a.width != 0 && a.height != 0) {
        var b = this.g.tt(); if (b && b.width != 0 && b.height != 0) {
          var c = a.width / a.height; var d = 0; for (var e = -1, f = 0; f < iza.length; f++) { var k = Math.abs(b.width - iza[f]); if (e == -1 || d >= k)e = f, d = k }d = jza[e]; this.A && g.nh(this.A.element, 'outline-width', Math.max(b.width, b.height) + 'px'); for (b = 0; b < this.o.elements.length; ++b) {
            if (f = this.o.elements[b].id, e = this.l[f], k = this.F[f], e && k) {
              var l = k.width * c / k.aspectRatio; f = Math.round(l * a.height); var m =
a.left + Math.round(k.left * a.width), n = a.top + Math.round(k.top * a.height); g.Gh(e.element, Math.round(k.width * a.width), f); g.uh(e.element, m, n); g.mq(e.element, kza); m = k.left + k.width / 2; k = k.top + l / 2; g.S(e.element, m <= 0.5 && k <= 0.5 ? 'ytp-ce-top-left-quad' : m > 0.5 && k <= 0.5 ? 'ytp-ce-top-right-quad' : m <= 0.5 && k > 0.5 ? 'ytp-ce-bottom-left-quad' : 'ytp-ce-bottom-right-quad'); g.mq(e.element, jza); g.S(e.element, d); (e = g.od(window.document, 'div', 'ytp-ce-expanding-overlay-body', e.element)[0]) && g.nh(e, 'height', f + 'px')
            }
          }
        }
      }
    }
  }
  g.h.CL = function (a) {
    if (this.o) {
      if (a.getId() == 'ytp-ce-in-endscreen') this.K = !1, this.o.skip && this.g.rh() == 1 ? (g.jV(this.g, !0), this.g.ac(window.Infinity), this.K = !0) : (Q2(this, this.o.impressionUrls), (a = g.IG()) && I2(a, this.o.visualElement)); else if (!this.K) {
        a = a.getId().substring(15); var b = this.l[a], c = this.F[a]; g.S(b.element, 'ytp-ce-element-show'); b.element.removeAttribute('aria-hidden'); b = this.g.getRootNode(); g.S(b, 'ytp-ce-shown'); Q2(this, c.impressionUrls); (b = g.IG()) && I2(b, c.visualElement); g.X(this.g).yb && this.g.ua('endscreenelementshown',
          a)
      }
    }
  }
  g.h.DL = function (a) { if (a.getId() != 'ytp-ce-in-endscreen' && !this.K) { a = a.getId().substring(15); var b = this.l[a]; g.lq(b.element, 'ytp-ce-element-show'); b.element.setAttribute('aria-hidden', !0); b = this.g.getRootNode(); g.lq(b, 'ytp-ce-shown'); g.X(this.g).yb && this.g.ua('endscreenelementhidden', a) } }
  g.h.IT = function (a) { var b = this; a.target === window && (new g.Wt(function () { for (var a in b.l)g.mq(b.l[a].element, ['ytp-ce-force-expand', 'ytp-ce-element-hover', 'ytp-ce-element-shadow-show']) }, 0)).start() }
  g.h.MB = function (a, b) {
    if (a.targetUrl && (!b || b.type != 'keypress' || b.keyCode == 13)) {
      for (var c = b.target; c && !g.jq(c, 'ytp-ce-element');) { g.jq(c, 'subscribe-label') && R2(this, a); if (g.jq(c, 'ytp-ce-channel-subscribe')) return; c = g.Nd(c) } if (!c || g.jq(c, 'ytp-ce-element-hover')) {
        b.preventDefault(); b.stopPropagation(); if (c = this.l[a.id]) this.eu(c, a), c.element.blur(); b.ctrlKey || b.metaKey || a.Bp == 'new' ? (R2(this, a), this.cD(), this.g.hd(), g.HV(a.targetUrl, void 0, a.Md)) : (c = (0, g.z)(this.cD, this, g.Fa(g.GV, a.targetUrl, a.Md)), R2(this,
          a, c))
      }
    }
  }
  g.h.Xs = function (a, b) { g.jq(a.element, 'ytp-ce-element-hover') || (b.type == 'VIDEO' || b.type == 'PLAYLIST' ? g.S(a.element, 'ytp-ce-element-hover') : g.X(this.g).o ? (new g.Wt(function () { g.S(a.element, 'ytp-ce-element-hover') }, 200)).start() : g.S(a.element, 'ytp-ce-element-hover'), Q2(this, b.KJ), P2(this, b.id, !0)) }
  g.h.eu = function (a, b) { g.lq(a.element, 'ytp-ce-element-hover'); g.lq(a.element, 'ytp-ce-force-expand'); P2(this, b.id, !1) }
  g.h.cD = function (a) { this.g.Ai(17, a) }
  var iza = [346, 426, 470, 506, 570, 640, 853, 1280, 1920], jza = 'ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920'.split(' '), kza = ['ytp-ce-top-left-quad', 'ytp-ce-top-right-quad', 'ytp-ce-bottom-left-quad', 'ytp-ce-bottom-right-quad']; var jwa = {cY: 'current', CG: 'new'}; var lwa = {CLOSE: 'close', j0: 'openUrl', hH: 'subscribe'}, mwa = {bq: 'click', CLOSE: 'close', qZ: 'hidden', b1: 'rollOut', UG: 'rollOver', YG: 'shown'}; var pwa = {x3: 'xx', y3: 'xy', E3: 'yx', F3: 'yy'}; g.p(vwa, d3); var Bwa = {pF: 'anchored', P0: 'rect', o1: 'shapeless'}; var Gwa = {CLOSED: 'closed', s0: 'playerControlShow', UG: 'rollOver', YG: 'shown'}; f3.prototype.Qa = function () {
    var a = Pwa(this, function (a) { return a.type == 'openUrl' && a.url != null })
    return a ? a.url : null
  }
  f3.prototype.showLinkIcon = function () { return h3(this, function (a) { return a.url != null && a.url.showLinkIcon }) }
  var g3 = {pF: 'anchored', sF: 'branding', CHANNEL: 'channel', bY: 'cta', tZ: 'highlightText', UZ: 'label', PLAYLIST: 'playlist', D0: 'popup', G1: 'speech', hH: 'subscribe', f2: 'title', VIDEO: 'video', n3: 'vote', q3: 'website'}, Lwa = {sF: 'branding', yX: 'card', DY: 'drawer', sZ: 'highlight', r_: 'marker', I0: 'promotion', TEXT: 'text', t3: 'widget'}, Mwa = {g3: 'video_relative', t0: 'player_relative'}; Vwa.prototype.A = function (a, b, c, d) {
    this.g[a] = b ? !c : c; a = g.Mb(this.g, function (a) { return a })
    this.o != a && (this.o = a, this.l.R(this.B, a, d))
  }; k3.prototype.la = function () { return this.B }
  k3.prototype.o = function () {}; var o3 = {bevel: 1, dropshadow: 2}; g.p(q3, k3)
  q3.prototype.o = function (a, b) {
    var c = j3(a); if (c) {
      var d = e3(c, b); if (!(d.width <= 0 || d.height <= 0)) {
        var e; if (e = (c = (c = Swa(a)) && c.g ? c.g : null) && c.length ? c[0] : null) {
          var f = g.eh(rwa(b, swa(e, new g.$g(e.F, e.H, e.Bk, e.o), b.g))), k = d.clone(); c = new g.$g(f.x, f.y, 1, 1); var l = Math.max(k.left + k.width, c.left + c.width), m = Math.max(k.top + k.height, c.top + c.height); k.left = Math.min(k.left, c.left); k.top = Math.min(k.top, c.top); k.width = l - k.left; k.height = m - k.top; c = a.l; k = p3(k, c.effects); l = l3(this, k.width, k.height); m = cxa(c, k.width, k.height,
            this.g); d = new g.$g(d.left - k.left, d.top - k.top, d.width, d.height); var n = new g.fd(f.x - k.left, f.y - k.top); this.A = 17 * c3(b.g, e.l, e.g ? e.g : 'xy'); e = c.cornerRadius; f = a.l; var q = this.g && i3(a), r = q ? f.borderWidth + 1 : f.borderWidth; q = (f = r ? new C2(r, q ? f.l : f.borderColor) : null) ? f.Db() / 2 : 0; r = exa(d, n); var v = this.C(d, e, n, r), C = n.x; n = n.y; var I = d.width, L = d.height, Y = d.left; d = d.top; var ha = new A2(); Pva(ha, Y + e + q, d + q); r == 't' && (ha.Ec(v.start, d + q), ha.Ec(C, n), ha.Ec(v.end, d + q)); ha.Ec(Y + I - e - q, d + q); B2(ha, e, e, -90); r == 'r' && (ha.Ec(Y + I - q, v.start),
            ha.Ec(C, n), ha.Ec(Y + I - q, v.end)); ha.Ec(Y + I - q, d + L - e - q); B2(ha, e, e, 0); r == 'b' && (ha.Ec(v.end, d + L - q), ha.Ec(C, n), ha.Ec(v.start, d + L - q)); ha.Ec(Y + e + q, d + L - q); B2(ha, e, e, 90); r == 'l' && (ha.Ec(Y + q, v.end), ha.Ec(C, n), ha.Ec(Y + q, v.start)); ha.Ec(Y + q, d + e + q); B2(ha, e, e, 180); ha.close(); G2(l, ha, f, m); if (m = this.la())g.S(m, 'annotation-shape'), g.S(m, 'annotation-speech-shape'), g.uh(m, k.left, k.top), g.Gh(m, k.width, k.height), dxa(l, m, c.effects)
        }
      }
    }
  }
  q3.prototype.C = function (a, b, c, d) {
    function e (a, c, d, e) { a = Math.min(Math.max(e - 2 * b, 0), a); c = g.bd(c - a / 2, d + b, d + e - a - b); return new c2(c, c + a) }
    return d == 't' || d == 'b' ? e(this.A, c.x, a.left, a.width) : d == 'l' || d == 'r' ? e(this.A, c.y, a.top, a.height) : new c2(0, 0)
  }; g.p(r3, k3); r3.prototype.o = function (a, b) { var c = j3(a); if (c) { var d = e3(c, b); if (!(d.width <= 0 || d.height <= 0)) { var e = a.l; c = p3(d, e.effects); var f = l3(this, c.width, c.height), k = new g.$g(0, 0, d.width, d.height), l = e.cornerRadius; d = new C2(!e.o && this.g ? 1 : e.o, e.bgColor); var m = new w2('#000', 0), n = d ? d.Db() / 2 + 1 : 0; k = bxa(k, l, n); G2(f, k, d, m); f = this.la(); g.S(f, 'annotation-shape'); e = e.g; g.Jh(f, this.g ? Math.max(e, 0.9) : e); g.uh(f, c.left, c.top); g.Gh(f, c.width, c.height) } } }; g.p(s3, k3)
  s3.prototype.o = function (a, b) {
    var c = j3(a); if (c) {
      var d = e3(c, b); if (!(d.width <= 0 || d.height <= 0)) {
        c = a.l; var e = p3(d, c.effects), f = l3(this, e.width, e.height), k = new g.$g(0, 0, d.width, d.height); d = cxa(c, d.width, d.height, this.g); var l = c.cornerRadius; var m = a.l; var n = this.g && i3(a), q = n ? m.borderWidth + 1 : m.borderWidth; n = (m = q ? new C2(q, n ? m.l : m.borderColor) : null) ? m.Db() / 2 + 1 : 0; k = bxa(k, l, n); G2(f, k, m, d); if (k = this.la()) {
          g.S(k, 'annotation-shape'), g.S(k, 'annotation-popup-shape'), g.uh(k, e.left, e.top), g.Gh(k, e.width, e.height), dxa(f,
            k, c.effects)
        }
      }
    }
  }; g.p(t3, q3); t3.prototype.C = function (a, b, c, d) {
    function e (a, c, d, e) { a = Math.min(Math.max(e - 2 * b, 0), a); c = c <= d + e / 2 ? Math.max(d + e / 4 - a / 2, d + b) : Math.min(d + 3 * e / 4 - a / 2, d + e - a - b); return new c2(c, c + a) }
    return d == 't' || d == 'b' ? e(this.A, c.x, a.left, a.width) : d == 'l' || d == 'r' ? e(this.A, c.y, a.top, a.height) : new c2(0, 0)
  }; g.p(u3, g.M); g.h = u3.prototype; g.h.DA = function () { this.H || (this.A && g.O(this.A, !0), this.B && g.O(this.B, !0), this.o && (this.o.g = !0, g.Jh(this.l, y3(this) ? 1 : 0), this.o.o(this.g, w3(this))), this.F.isActive() && this.F.stop(), this.H = !0, this.I = this.W.oh(g.hV(this.C), 'mouseleave', function (a) { this.Jo.stop(); this.zh(a) })) }
  g.h.zh = function () { this.H && (this.N ? this.F.start() : this.Py(), this.o && (this.o.g = !1, g.Jh(this.l, y3(this) ? 1 : 0), this.o.o(this.g, w3(this))), this.H = !1, this.I && (this.W.Ca(this.I), this.I = null)) }
  g.h.Py = function () { this.A && g.O(this.A, !1); this.B && g.O(this.B, !1) }
  g.h.HN = function (a) { this.Y = a; this.Jo.zj() }
  g.h.GN = function () { var a = this.Y, b = new g.fd(a.clientX, a.clientY), c = g.zh(this.C.getRootNode()), d = ixa(c, this.L); c = (this.B && g.Kh(this.B) || this.A && g.Kh(this.A)) && ixa(c, this.N); d && d.contains(b) || c && c.contains(b) ? this.DA(a) : this.zh(a) }
  g.h.show = function () {
    var a = this.g.l; a = (a && a.g == 0 || this.g.style == 'title' || this.g.style == 'highlightText' ? !1 : !0) && !this.o; var b = !this.l, c = this.g.type == 'widget'; if (a) { var d = w3(this), e = null; this.g.type == 'highlight' || this.g.style == 'label' ? e = new r3() : this.g.style == 'popup' ? e = new s3() : this.g.style == 'anchored' ? e = new q3() : this.g.style == 'speech' && (e = new t3()); e && (e.o(this.g, d), this.o = e, d = e.la()) && (g.O(d, !1), g.S(d, 'annotation-type-' + this.g.type.toLowerCase()), this.X(d)) } if (b) {
      d = ['annotation']; this.g.style != 'highlightText' ||
d.push('annotation-no-mouse'); d.push('annotation-type-' + this.g.type.toLowerCase()); this.l = g.K('DIV', d); g.O(this.l, !1); this.g.A && (this.D = g.K('DIV', 'inner-text'), this.g.style == 'label' && (g.S(this.D, 'label-text'), this.D.style.backgroundColor = this.g.l.bgColor), g.Qd(this.D, this.g.A), this.l.appendChild(this.D)); g.YE(this.l, 'annotation_id', this.g.id); this.X(this.l); fxa(this, this.l); if (i3(this.g) && this.g.showLinkIcon()) {
        if (e = this.g.Qa())d = this.l, e = new g.um(b3(e)), d.title = e.l + e.o; this.B = g.K('SPAN', 'annotation-link-icon')
        g.O(this.B, !1); this.l.appendChild(this.B)
      }gxa(this); i3(this.g) || (this.l.style.cursor = 'default')
    }c && this.g.style == 'subscribe' && g.J('yt-uix-subscription-button', this.l); if (a || b) { a: { a = this.g.segment.g; if (a.length && (a = Dwa(a[0]))) { a = a.B; break a }a = 0 } this.l && (this.l.style.zIndex = a); this.o && this.o.la() && (this.o.la().style.zIndex = a) }g.O(this.l, !0); g.Jh(this.l, y3(this) ? 1 : 0); x3(this); this.o && this.o.la() && g.O(this.o.la(), !0)
  }
  g.h.hide = function () { this.l && g.O(this.l, !1); this.o && this.o.la() && g.O(this.o.la(), !1); this.K && (this.W.Ca(this.K), this.K = null) }; g.p(z3, g.M); g.h = z3.prototype; g.h.hide = function () { this.isVisible = !1; this.view && (kxa(this), this.view.hide()) }
  g.h.show = function () { this.isVisible = !0; this.view && (this.view.show(), this.l.subscribe('resize', this.CA, this), this.l.subscribe('onVideoAreaChange', this.rC, this)) }
  g.h.destroy = function () { if (this.view) { kxa(this); var a = this.view; g.AF(a.W); a.Jo.dispose(); a.F.dispose(); a.l && g.Id(a.l); a.o && a.o.la() && g.Id(a.o.la()) }A3(this) }
  g.h.rC = function () { x3(this.view) }
  g.h.CA = function () { x3(this.view) }; g.p(lxa, u2); g.p(B3, u2); g.p(mxa, B3); g.p(nxa, u2); g.p(oxa, u2); g.p(qxa, B3); g.p(rxa, B3); g.p(sxa, u2); g.p(C3, u2); L3.prototype.o = function (a, b) { var c = g.Xd(b.target, 'label'); c && g.T(c, 'iv-card-poll-choice-focused', a) }
  L3.prototype.D = function (a, b) {
    var c = g.Yd(b.target, 'iv-card-poll'); if (c) {
      if (a.A)g.J('iv-card-sign-in-button', c).click(); else {
        var d = (0, window.parseInt)(d2(b.target, 'pollChoiceIndex'), 10); if (a.g == null)a.choices[d].count++, a.g = d; else if (a.g != d) { var e = a.choices[a.g]; e.count = Math.max(e.count - 1, 0); a.choices[d].count++; a.g = d } else e = a.choices[a.g], e.count = Math.max(e.count - 1, 0), a.g = null; yxa(a, c); g.oE(this.g.videoData.Gf, {Yc: {action_poll_vote: 1}, Mb: {poll_id: a.id, index: d, session_token: a.H}}); H3(this.g.logger, a.o,
          void 0, {'link-id': d}, a.l.click, 5); (c = g.IG()) && J2(c, a.C)
      }
    }
  }
  L3.prototype.C = function (a) {
    var b = g.x('yt.www.ypc.bootstrap.api.loadOffersForInnertubeRequestParams'), c; b && (c = function () { b(a.H, a.B) })
    Cxa(this, a, !0, c)
  }
  L3.prototype.F = function (a) { var b = g.x('yt.www.ypc.bootstrap.api.loadOffers'); b && (b = g.Fa(b, a.L, a.H, a.B)); Cxa(this, a, !1, b) }; g.p(U3, g.M); g.h = U3.prototype; g.h.vp = function () { this.context.o.subscribe('resize', this.Ym, this) }
  g.h.la = function () { return this.Ga }
  g.h.Li = function (a, b, c, d, e, f, k) {
    this.context.g.T(a, 'click', g.Fa(this.so, b, c, d, e, f || [], k || 0), this); this.context.g.T(a, 'touchstart', g.Fa(function () { this.gv = !1 }), this)
    this.context.g.T(a, 'touchmove', g.Fa(function () { this.gv = !0 }), this)
  }
  g.h.so = function (a, b, c, d, e, f, k) { if (this.gv) return !1; k && (k.stopPropagation(), k.preventDefault()); Kxa(this, a, c, d, e, f); return !1 }
  g.h.show = function () { this.Y = (0, g.F)() }
  g.h.hide = function () {}
  g.h.destroy = function () { g.Id(this.la()) }
  g.h.Ym = function () {}; g.p(Y3, U3); g.h = Y3.prototype; g.h.isAvailable = function () { var a; if (a = !!this.o.length)(a = this.g.getRootNode()) ? (a = g.Hh(a), a = a.width > 173 && a.height > 173) : a = !1; return a }
  g.h.Ym = function () { var a = this.isAvailable(); g.O(this.la(), a); g.T(this.context.l.getRootNode(), 'ytp-iv-drawer-enabled', a); Z1(this.g) }
  g.h.destroy = function () { var a = g.$U(this.g).A; a && a.Vs(!1, void 0); this.g.getRootNode().removeChild(this.D); g.SF(this.ga); g.pF(this.X); this.Z && this.Z.dispose(); this.F && this.F.dispose(); U3.prototype.destroy.call(this) }
  g.h.YL = function (a) { this.K.start(); a.preventDefault(); a = a || window.event; var b = 0; a.type == 'MozMousePixelScroll' ? b = (a.axis == a.HORIZONTAL_AXIS) == 0 ? a.detail : 0 : window.opera ? b = a.detail : b = a.wheelDelta % 120 == 0 ? 'WebkitTransform' in window.document.documentElement.style ? window.chrome && window.navigator.platform.indexOf('Mac') == 0 ? a.wheelDeltaY / -30 : a.wheelDeltaY / -1.2 : a.wheelDelta / -1.6 : a.wheelDeltaY / -3; if (a = b) this.A.scrollTop += a }
  g.h.mD = function (a) {
    if (!g.jq(this.g.getRootNode(), 'ytp-cards-teaser-shown')) {
      this.l != a && (this.l = a, Z3(this)); if (g.Kh(this.la())) { if (this.context.l.Sa() == 2) var b = ((0, window.isNaN)(void 0) ? this.context.l.jA() : void 0) == 1; else b = (0, window.isNaN)(void 0) ? this.context.l.rh() : void 0, b = b == 1 || b == 0 && this.context.l.getCurrentTime() === 0; if (b && a.hc.teaserDurationMs) { b = {teaserText: a.hc.teaserText, durationMs: a.hc.teaserDurationMs}; var c = g.$U(this.g).A; c && c.Vs(!0, b) } } this.ma.isActive() || ((!this.B || !this.K.isActive() &&
this.U) && Uxa(this, a), this.ma.start(910 + a.hc.teaserDurationMs))
    }
  }
  g.h.HU = function (a) { this.B || (this.l = a, Z3(this), Uxa(this, a), W3(this, 'YOUTUBE_DRAWER_AUTO_OPEN', !1, a)) }
  g.h.aI = function () { if (this.B) { J3(this.context.logger, this.N, 4, $3(this).l.close); var a = g.IG(); a && this.I && J2(a, this.I); X3(this) } }
  g.h.lI = function () { g.T(this.D, 'iv-drawer-scrolled', this.A.scrollTop > 0) }
  g.h.VK = function () { var a = $3(this); K3(this.context.logger, 8, a.o, a.l.YU); var b = g.IG(); b && a && (I2(b, a.F), I2(b, a.D)) }
  g.h.UK = function (a) { var b = $3(this), c = g.IG(); this.l ? a ? (a = this.context.logger, K3(a, 9, b.o, b.l.Mu), a.g.Ai(4, void 0), c && J2(c, b.F)) : (a = this.context.logger, K3(a, 12, b.o, b.l.Mu), a.g.Ai(4, void 0), c && J2(c, b.D)) : (a = this.context.logger, J3(a, this.N, 12, b.l.Mu), a.g.Ai(4, void 0), c && this.fa && J2(c, this.fa)) }
  var Lxa = {collaborator: lxa, donation: mxa, episode: C3, movie: C3, playlist: nxa, poll: oxa, productListing: qxa, simple: B3, tip: rxa, video: sxa}; g.p(a4, U3); a4.prototype.vp = function () { U3.prototype.vp.call(this); Vxa(this) }; g.p(b4, a4); g.h = b4.prototype; g.h.PU = function (a, b, c, d) {
    this.o.stop(); if (!this.A) {
      var e = g.Hh(a); this.g || (g.Fh(a, e.width), g.Fh(b, e.width)); g.nh(c, 'top', e.height - Math.max(Math.min(e.height, d) / 2 + 10, 20) + 'px'); g.nh(c, 'right', '1px'); this.A = !0; g.O(a, !0); this.B = new g.Wt(function () { g.S(this.la(), 'iv-branding-active') }, 0, this)
      this.B.start()
    }
  }
  g.h.HJ = function (a, b) {
    g.lq(this.la(), 'iv-branding-active'); this.C = new g.Wt((0, g.z)(function () { g.O(a, !1); this.g || g.Fh(b, 0) }, this), 250)
    this.C.start(); this.A = !1
  }
  g.h.show = function () {
    if (!this.isActive) {
      a4.prototype.show.call(this); if (!this.D) {
        g.S(this.la(), 'iv-branding'); var a = this.annotation.data; this.F = a.image_width; this.l = g.K('IMG', {src: a.image_url, 'class': 'branding-img iv-click-target', width: a.image_width, height: a.image_height}); g.O(this.l, !1); var b = g.K('DIV', 'branding-img-container', this.l); this.la().appendChild(b); var c = g.K('DIV', 'iv-branding-context-name'); g.Qd(c, a.channel_name); var d = g.K('DIV', 'iv-branding-context-subscribe'); if (b = a.standalone_subscribe_button_data) {
          this.g =
new g.J_(b.subscribeText, b.subscribeCount, b.unsubscribeText, b.unsubscribeCount, !!b.enabled, !!b.classic, a.channel_id, !!b.subscribed, b.feature, a.session_data.itct, b.signinUrl, this.H.l), this.g.sa(d)
        } b = g.K('DIV', 'iv-branding-context-subscribe-caret'); c = g.K('DIV', 'branding-context-container-inner', b, c, d); g.O(c, !1); d = g.K('DIV', 'branding-context-container-outer', c); g.nh(d, 'right', this.F + 'px'); this.la().appendChild(d); var e = this.annotation.Qa(); e && this.Li(this.l, e, this.annotation.id, a.session_data, this.annotation.g)
        this.o = new g.Wt(g.Fa(this.HJ, c, d), 500, this); g.N(this, this.o); this.context.g.T(this.la(), 'mouseover', (0, g.z)(this.PU, this, c, d, b, a.image_height)); this.context.g.T(this.la(), 'mouseout', (0, g.z)(this.o.start, this.o, void 0)); this.D = !0
      }G3(this.context.logger, this.annotation.g); g.O(this.la(), !0); this.isActive = !0; if (this.l) {
        a = this.l; var f = void 0 === f ? 0 : f; b = g.Ih(a).width; c = g.va(void 0) ? void 0 : b; g.uh(a, c); f = new k2(a, [c, a.offsetTop], [c - b - f, a.offsetTop], 200, Bva); g.N(this, f); this.context.A.T(f, 'begin', g.Fa(g.O,
          a, !0)); f.play()
      }
    }
  }
  g.h.hide = function () { this.isActive && (g.O(this.la(), !1), this.isActive = !1) }
  g.h.destroy = function () { this.g && (this.g.dispose(), this.g = null); a4.prototype.destroy.call(this) }; g.p(c4, a4); g.h = c4.prototype; g.h.show = function () { this.isActive || (a4.prototype.show.call(this), this.I || (Wxa(this), this.I = !0), g.O(this.la(), !0), this.annotation && this.annotation.g && G3(this.context.logger, this.annotation.g), g.rg(function () { g.lq(this.la(), 'iv-promo-inactive') }, 100, this), this.la().removeAttribute('aria-hidden'), this.isActive = !0, d4(this), Yxa(this), Zxa(this, this.F)) }
  g.h.hide = function () { this.isActive && (g.S(this.la(), 'iv-promo-inactive'), this.isActive = !1, this.la().setAttribute('aria-hidden', !0)) }
  g.h.so = function (a, b, c, d, e, f, k) { return this.B ? !1 : a4.prototype.so.call(this, a, b, c, d, e, f, k) }
  g.h.Dr = function (a, b) { b.stopPropagation(); Yxa(this); Zxa(this, a); this.g.focus() }
  g.h.dJ = function (a) { this.H = !0; this.Dr(500, a) }
  g.h.cJ = function () { this.H = !1; Xxa(this) }
  g.h.IN = function (a) { a.stopPropagation(); this.hide(); I3(this.context.logger, this.annotation.g) }
  g.h.RI = function (a) { a.stopPropagation(); d4(this); this.B = !0; g.S(this.la(), 'iv-promo-collapsed-no-delay'); this.C.start(); I3(this.context.logger, this.annotation.g) }
  g.h.destroy = function () { this.C.dispose(); a4.prototype.destroy.call(this) }; g.p(e4, g.EV); g.h = e4.prototype; g.h.uL = function (a, b) { if (!aya(g.X(this.g).playerStyle)) return null; switch (a) { case 'loadCustomAnnotationsXml':var c = g.Tr(b); c && g4(this, c); return !0; case 'removeCustomAnnotationById':return b && this.l && (Nxa(this.l, b), Z1(this.g)), !0 } return null }
  g.h.vL = function () { return aya(g.X(this.g).playerStyle) ? ['loadCustomAnnotationsXml', 'removeCustomAnnotationById'] : [] }
  g.h.gu = function () { if (this.C) { var a = g.e0(g.hV(this.g), !0); g.Gh(this.C.element, a.width, a.height); g.uh(this.C.element, a.left, a.top) } if (this.l) { var b = g.qV(this.g); a = this.l; b = b.width; g.T(a.D, 'iv-drawer-small', b <= 426); g.T(a.D, 'iv-drawer-big', b >= 1280) } }
  g.h.ZR = function (a) { g.X(this.g).experiments.g('web_player_update_annotations_module_visibility_killswitch') || this.Qc(a.state); g.W(a.state, 2) && (this.Bl() && this.Zz() && this.g.Sa() != 2 && this.Ws(!1), this.Vs(!1)) }
  g.h.load = function () {
    g.EV.prototype.load.call(this); g.X(this.g).experiments.g('web_player_update_annotations_module_visibility_killswitch') ? this.A.show() : this.Qc(g.gV(this.g)); this.I++; var a = this.g.getVideoData(), b = a.videoId, c = (0, g.z)(this.DQ, this, b, this.I), d = (0, g.z)(function () { this.D = null }, this)
    g.kG() && (c = hya(this, c)); c = {format: 'XML', wd: c, onError: d, Yc: {}}; a.isPharma && (c.Yc.pharma = '1'); c.method = 'POST'; c.withCredentials = !0; d = g.X(this.g); d.playerStyle == 'gaming' && (c.Yc.gaming = '1'); (b = d.B.get(b)) && iya(c, b); b = b && (b.Rh || b.Hq); if (!a.Qm || b)a.Gf ? bya(this, a.Gf, c) : (this.B = (0, g.z)(this.zL, this, c), this.g.addEventListener('videodatachange', this.B)); g.yV(this.g, this.C.element, 4); this.gu()
  }
  g.h.Qc = function (a) { a = !g.GP(a) && !g.W(a, 1024); g.oH(this.A, a); g.oH(this.C, a) }
  g.h.zL = function (a) { var b = this.g.getVideoData(); b.Gf && (this.B && (this.g.removeEventListener('videodatachange', this.B), this.B = null), bya(this, b.Gf, a)) }
  g.h.unload = function () {
    uxa(this.Xa); g.wV(this.g, 'annotations_module'); g.Jb(this.o, function (a) { a.destroy() })
    g.Jb(this.L, function (a) { a.destroy() })
    this.H = null; this.l && (this.l.destroy(), this.l = null, Z1(this.g)); this.K = !1; this.D && (this.D.abort(), this.D = null); this.o = {}; this.L = {}; this.A.hide(); g.EV.prototype.unload.call(this); g.nH(this.C); this.B && (this.g.removeEventListener('videodatachange', this.B), this.B = null)
  }
  g.h.DQ = function (a, b, c) {
    this.D = null; if (!dya(this, b, a) && (a = g.UD(c) && c.responseXML ? c.responseXML : null)) {
      g4(this, a); g.S(this.g.getRootNode(), 'iv-module-loaded'); a = []; for (var d in this.o) {
        b = this.o[d].annotation; if (b.segment) if (c = b.segment, c.g.length) if (c = c.g[0].l || c.g[0].g || c.g[0].o, !c || c.length < 2)c = null; else { var e = c.length - 1; c = c[0].t <= 0 && c[e].t <= 0 ? null : {start: c[0].t, end: c[e].t} } else c = null; else c = null; if (e = c) {
          if (c = 1E3 * e.start, e = 1E3 * e.end, c == 0 && (c++, e++), !(e < c)) {
            var f = {id: d, namespace: 'annotations_module'}
            b.type == 'marker' && (f.style = 'ytp-chapter-marker', f.tooltip = b.A, f.visible = !0); b = new g.nQ(c, e, f); a.push(b)
          }
        }
      }g.tV(this.g, a)
    }
  }
  g.h.qC = function (a) { a == this.g.getVideoData().videoId && (this.loaded ? jya(this) : this.load()) }
  g.h.wL = function (a) { a = a.getId(); var b = this.o[a]; b && !b.o && (b = b.annotation, mya(this, a), G3(this.Xa, b.g)) }
  g.h.xL = function (a) { h4(this, a.getId()) }
  g.h.Ny = function (a) { a && (a.hide(), i4(this, 'shown', !1, a.annotation.id), this.vn(a.annotation, 'hidden')) }
  g.h.BD = function (a) { a && (a.show(), i4(this, 'shown', !0, a.annotation.id), this.vn(a.annotation, 'shown')) }
  g.h.nT = function (a, b, c) {
    var d = this.o[a]; if (d && b.value != c) {
      b.value = c; var e = !1; Qwa(d.annotation, function (a) { e = e || a.value })
      nya(this, a, b, e)
    }
  }
  g.h.rP = function (a) { if (a && a.id) { var b = a.Qa(); if (b) { var c = b3(b); if (c) { var d = (0, g.z)(this.vn, this, a, 'click'); if (T3(c, b.target) == 'new' || oya(this, b))d(), d = null; H3(this.Xa, a.g, d) } } } }
  g.h.vn = function (a, b) {
    Owa(a, function (c) {
      if (c.trigger == b && c.type == 'openUrl' && c.url) {
        var d = this.g.getVideoData(), e; if (!(e = !oya(this, c.url))) { e = Hxa(c.url); var f = Gxa(c.url); e ? (d.videoId == e ? this.g.ac(f || 0) : (d = f4(this).l, g.O0(d.app, e, void 0, void 0, void 0, void 0, void 0), f && f4(this).l.gd() && f4(this).l.ac(f)), d = !0) : d = !1; e = !d }e && (e = g.X(this.g), (d = b3(c.url)) ? (f = Fxa(d), e && f[0] == 'com' && f[1] == 'google' && f[2] == 'plus' && (e = g.Fa(Ixa, e.pageId, e.ad), d = new g.um(d), g.ym(d, e(d.o)), d = d.toString())) : d = null, d && (this.g.hd(),
          c = T3(d, c.url.target), e = a.itct, 'ei' in g.bE(d) && (d = g.Tg(d, 'ei')), g.HV(d, c == 'current' ? '_top' : void 0, {itct: e})))
      }
    }, this)
  }
  g.h.NQ = function () { i4(this, 'playerControlShow', !1) }
  g.h.RS = function () { i4(this, 'playerControlShow', !0) }
  g.h.yL = function (a) { i4(this, 'rollOver', !0, a.id) }
  g.h.zh = function (a) { i4(this, 'rollOver', !1, a.id) }
  g.h.WP = function (a) { a && a.id && (this.o[a.id].o = !0, h4(this, a.id), I3(this.Xa, a.g), this.vn(a, 'close'), i4(this, 'closed', !0, a.id)) }
  g.h.Bl = function () { return !!this.l && this.l.isAvailable() }
  g.h.Zz = function () { this.Bl(); return !!this.l && this.l.B }
  g.h.Ws = function (a, b, c) { b = void 0 === b ? !1 : b; this.Bl(); this.l && (a ? c ? W3(this.l, c, b) : W3(this.l, 'YOUTUBE_DRAWER_AUTO_OPEN', b) : X3(this.l)) }
  g.h.Vs = function (a, b) { this.g.R(a ? 'cardsteasershow' : 'cardsteaserhide', b) }
  g.h.V = function () { g.X(this.g).B.unsubscribe('vast_info_card_add', this.qC, this); g.lq(this.g.getRootNode(), 'ytp-iv-drawer-open'); for (var a = this.N, b = 0, c = a.length; b < c; b++)g.lG(a[b]); this.N.length = 0; g.EV.prototype.V.call(this) }; var k4 = {}, lza = 'ontouchstart' in window.document; g.oF(window.document, 'blur', l4, !0); g.oF(window.document, 'change', l4, !0); g.oF(window.document, 'click', l4); g.oF(window.document, 'focus', l4, !0); g.oF(window.document, 'mouseover', l4); g.oF(window.document, 'mouseout', l4); g.oF(window.document, 'mousedown', l4); g.oF(window.document, 'keydown', l4); g.oF(window.document, 'keyup', l4); g.oF(window.document, 'keypress', l4); g.oF(window.document, 'cut', l4); g.oF(window.document, 'paste', l4)
  lza && (g.oF(window.document, 'touchstart', l4), g.oF(window.document, 'touchend', l4), g.oF(window.document, 'touchcancel', l4)); g.h = m4.prototype; g.h.ie = function (a) { return g.Yd(a, Z(this)) }
  g.h.unregister = function () { g.SF(this.H); this.H.length = 0; g.FN(this.F); this.F.length = 0 }
  g.h.init = g.y; g.h.dispose = g.y; g.h.addBehavior = function (a, b, c) { c = Z(this, c); var d = (0, g.z)(b, this); a in k4 || (k4[a] = new g.VC()); k4[a].subscribe(c, d); this.D[b] = d }
  g.h.removeBehavior = function (a, b, c) { if (a in k4) { var d = k4[a]; d.unsubscribe(Z(this, c), this.D[b]); d.Dc() <= 0 && (d.dispose(), delete k4[a]) } delete this.D[b] }
  g.h.bj = function (a, b, c) { var d = this.za(a, b); if (d && (d = g.x(d))) { var e = g.Za(arguments, 2); g.$a(e, 0, 0, a); d.apply(null, e) } }
  g.h.za = function (a, b) { return g.ZE(a, b) }
  g.h.setData = function (a, b, c) { g.YE(a, b, c) }; g.A(p4, m4); g.xa(p4); g.h = p4.prototype; g.h.register = function () { this.addBehavior('click', this.ZE); this.addBehavior('keydown', this.xz); this.addBehavior('keypress', this.yz); n4(this, 'page-scroll', this.fJ) }
  g.h.unregister = function () { this.removeBehavior('click', this.ZE); this.removeBehavior('keydown', this.xz); this.removeBehavior('keypress', this.yz); v4(this); this.l = {}; p4.ba.unregister.call(this) }
  g.h.ZE = function (a) { a && !a.disabled && (this.toggle(a), this.click(a)) }
  g.h.xz = function (a, b, c) {
    if (!(c.altKey || c.ctrlKey || c.shiftKey || c.metaKey) && (b = u4(this, a))) {
      var d = function (a) { var b = ''; a.tagName && (b = a.tagName.toLowerCase()); return b == 'ul' || b == 'table' }, e
      d(b) ? e = b : e = $1(b, d); if (e) { e = e.tagName.toLowerCase(); if (e == 'ul') var f = this.fL; else e == 'table' && (f = this.eL); f && qya(this, a, b, c, (0, g.z)(f, this)) }
    }
  }
  g.h.fJ = function () { var a = this.l; if (g.Nb(a) != 0) for (var b in a) { var c = a[b], d = g.Yd(c.activeButtonNode || c.parentNode, Z(this)); if (void 0 == d || void 0 == c) break; t4(this, d, c, !0) } }
  g.h.yz = function (a, b, c) { c.altKey || c.ctrlKey || c.shiftKey || c.metaKey || (a = u4(this, a), r2(a) && c.preventDefault()) }
  g.h.eL = function (a, b, c) { var d = q4(this, b); if (d) { b = Fva('table', b); var e = Fva('tr', b); e = g.od(window.document, 'td', null, e).length; b = g.od(window.document, 'td', null, b); d = sya(d, b, e, c); d != -1 && (rya(this, a, b[d]), c.preventDefault()) } }
  g.h.fL = function (a, b, c) { if (c.keyCode == 40 || c.keyCode == 38) { var d = q4(this, b); d && (b = (0, g.Jd)(g.od(window.document, 'li', null, b), r2), d = sya(d, b, 1, c), rya(this, a, b[d]), c.preventDefault()) } }
  g.h.bF = function (a) {
    if (a) {
      var b = u4(this, a); if (b) {
        a.setAttribute('aria-pressed', 'true'); a.setAttribute('aria-expanded', 'true'); b.originalParentNode = b.parentNode; b.activeButtonNode = a; b.parentNode.removeChild(b); var c; this.za(a, 'button-has-sibling-menu') ? c = a.parentNode : c = tya(this, a); c.appendChild(b); b.style.minWidth = a.offsetWidth - 2 + 'px'; var d = s4(this, a); d && c.appendChild(d); (c = !!this.za(a, 'button-menu-fixed')) && (this.l[n2(a).toString()] = b); t4(this, a, b, c); g.VF('yt-uix-button-menu-before-show', a, b); s2(b)
        d && s2(d); this.bj(a, 'button-menu-action', !0); g.S(a, Z(this, 'active')); b = (0, g.z)(this.aF, this, a, !1); d = (0, g.z)(this.aF, this, a, !0); c = (0, g.z)(this.pV, this, a, void 0); this.g && u4(this, this.g) == u4(this, a) || v4(this); g.UF('yt-uix-button-menu-show', a); g.pF(this.o); this.o = [g.oF(window.document, 'click', d), g.oF(window.document, 'contextmenu', b), g.oF(window, 'resize', c)]; this.g = a
      }
    }
  }
  g.h.pV = function (a, b) { var c = u4(this, a); if (c) { b && (b instanceof g.Rc ? c.innerHTML = g.Sc(b) : g.Qd(c, b)); var d = !!this.za(a, 'button-menu-fixed'); t4(this, a, c, d) } }
  g.h.bd = function () { return g.J(Z(this, 'content'), void 0) }
  g.h.aF = function (a, b, c) { c = g.qF(c); var d = g.Yd(c, Z(this)); if (d) { d = u4(this, d); var e = u4(this, a); if (d == e) return }d = g.Yd(c, Z(this, 'menu')); e = d == u4(this, a); var f = g.jq(c, Z(this, 'menu-item')), k = g.jq(c, Z(this, 'menu-close')); if (!d || e && (f || k))r4(this, a), d && b && this.za(a, 'button-menu-indicate-selected') && ((a = g.J(Z(this, 'content'), a)) && g.Qd(a, a2(c)), uya(this, d, c)) }
  g.h.isToggled = function (a) { return g.jq(a, Z(this, 'toggled')) }
  g.h.toggle = function (a) { if (this.za(a, 'button-toggle')) { var b = g.Yd(a, Z(this, 'group')), c = Z(this, 'toggled'), d = g.jq(a, c); if (b && this.za(b, 'button-toggle-group')) { var e = this.za(b, 'button-toggle-group'); b = g.pd(Z(this), b); (0, g.B)(b, function (b) { b != a || e == 'optional' && d ? (g.lq(b, c), b.removeAttribute('aria-pressed')) : (g.S(a, c), b.setAttribute('aria-pressed', 'true')) }) } else d ? a.removeAttribute('aria-pressed') : a.setAttribute('aria-pressed', 'true'), g.oq(a, c) } }
  g.h.click = function (a) { if (u4(this, a)) { var b = u4(this, a); if (b) { var c = g.Yd(b.activeButtonNode || b.parentNode, Z(this)); c && c != a ? (r4(this, c), g.VD((0, g.z)(this.bF, this, a), 1)) : r2(b) ? r4(this, a) : this.bF(a) }a.focus() } this.bj(a, 'button-action') }; g.A(w4, m4); g.h = w4.prototype; g.h.ie = function (a) { var b = m4.prototype.ie.call(this, a); return b || a }
  g.h.register = function () { n4(this, 'yt-uix-kbd-nav-move-out-done', this.hide) }
  g.h.dispose = function () { x4(this); w4.ba.dispose.call(this) }
  g.h.za = function (a, b) { var c = w4.ba.za.call(this, a, b); return c || ((c = w4.ba.za.call(this, a, 'card-config')) && (c = g.x(c)) && c[b] ? c[b] : null) }
  g.h.show = function (a) { var b = this.ie(a); if (b) { g.S(b, Z(this, 'active')); var c = vya(this, a, b); if (c) { c.cardTargetNode = a; c.cardRootNode = b; wya(this, a, c); var d = Z(this, 'card-visible'), e = this.za(a, 'card-delegate-show') && this.za(b, 'card-action'); this.bj(b, 'card-action', a); this.o = a; t2(c); g.VD((0, g.z)(function () { e || (s2(c), g.UF('yt-uix-card-show', b, a, c)); xya(c); g.S(c, d); g.UF('yt-uix-kbd-nav-move-in-to', c) }, this), 10) } } }
  g.h.hide = function (a) { if (a = this.ie(a)) { var b = g.nd(Z(this, 'card') + n2(a)); b && (g.lq(a, Z(this, 'active')), g.lq(b, Z(this, 'card-visible')), t2(b), this.o = null, b.cardTargetNode = null, b.cardRootNode = null, b.cardMask && (g.Id(b.cardMask), b.cardMask = null)) } }
  g.h.oV = function (a, b) { var c = this.ie(a); if (c) { if (b) { var d = this.Cc(c); if (!d) return; b instanceof g.Rc ? d.innerHTML = g.Sc(b) : g.Qd(d, b) }g.jq(c, Z(this, 'active')) && (c = vya(this, a, c), wya(this, a, c), s2(c), xya(c)) } }
  g.h.isActive = function (a) { return (a = this.ie(a)) ? g.jq(a, Z(this, 'active')) : !1 }
  g.h.Cc = function (a) { var b = a.cardContentNode; if (!b) { var c = Z(this, 'content'), d = Z(this, 'card-content'); (b = (b = this.za(a, 'card-id')) ? g.nd(b) : g.J(c, a)) || (b = window.document.createElement('div')); var e = b; g.lq(e, c); g.S(e, d); a.cardContentNode = b } return b }; var z4; g.A(y4, m4); g.xa(y4); g.h = y4.prototype; g.h.register = function () { this.addBehavior('keydown', this.Gy); n4(this, 'yt-uix-kbd-nav-move-in', this.iB); n4(this, 'yt-uix-kbd-nav-move-in-to', this.YO); n4(this, 'yt-uix-kbd-move-next', this.jB); n4(this, 'yt-uix-kbd-nav-move-to', this.En) }
  g.h.unregister = function () { this.removeBehavior('keydown', this.Gy); g.pF(z4) }
  g.h.Gy = function (a, b, c) {
    var d = c.keyCode; if (a = g.Yd(a, Z(this))) {
      switch (d) {
        case 13:case 32:this.iB(a); break; case 27:c.preventDefault(); c.stopImmediatePropagation(); a: { for (c = d2(a, 'kbdNavMoveOut'); !c;) { c = g.Yd(a.parentElement, Z(this)); if (!c) break a; c = d2(c, 'kbdNavMoveOut') }c = g.nd(c); this.En(c); g.UF('yt-uix-kbd-nav-move-out-done', c) } break; case 40:case 38:if ((b = c.target) && g.jq(a, Z(this, 'list'))) {
          switch (d) {
            case 40:this.jB(b, a); break; case 38:d = window.document.activeElement == a, a = Aya(a), b = a.indexOf(b), b < 0 && !d || (b =
d ? a.length - 1 : (a.length + b - 1) % a.length, a[b].focus(), zya(this, a[b]))
          }
        }c.preventDefault()
      }
    }
  }
  g.h.iB = function (a) { var b = d2(a, 'kbdNavMoveIn'); b = g.nd(b); yya(this, a, b); this.En(b) }
  g.h.YO = function (a) { yya(this, g.Zd(), a); this.En(a) }
  g.h.En = function (a) {
    if (a) {
      if (g.Vd(a))a.focus(); else {
        var b = $1(a, function (a) { return g.Ca(a) && a.nodeType == 1 ? g.Vd(a) : !1 })
        b ? b.focus() : (a.setAttribute('tabindex', '-1'), a.focus())
      }
    }
  }
  g.h.jB = function (a, b) { var c = window.document.activeElement == b, d = Aya(b), e = d.indexOf(a); e < 0 && !c || (c = c ? 0 : (e + 1) % d.length, d[c].focus(), zya(this, d[c])) }; g.A(A4, m4); g.xa(A4); g.h = A4.prototype; g.h.register = function () {
    this.addBehavior('click', this.cF); this.addBehavior('mouseenter', this.aJ); n4(this, 'page-scroll', this.pJ); n4(this, 'yt-uix-kbd-nav-move-out-done', function (a) { a = this.ie(a); E4(this, a) })
    this.A = new g.VC()
  }
  g.h.unregister = function () {
    this.removeBehavior('click', this.cF); this.l = this.g = null; g.pF(mva(g.Pb(this.o))); this.o = {}; g.Jb(this.C, function (a) { g.Id(a) }, this)
    this.C = {}; g.Ze(this.A); this.A = null; A4.ba.unregister.call(this)
  }
  g.h.cF = function (a, b, c) { a && (b = H4(this, a), !b.disabled && o2(c.target, b) && Dya(this, a)) }
  g.h.aJ = function (a, b, c) { a && g.jq(a, Z(this, 'hover')) && (b = H4(this, a), o2(c.target, b) && Dya(this, a, !0)) }
  g.h.pJ = function () { this.g && this.l && Bya(this, this.l, this.g) }
  g.h.dF = function (a) {
    if (a) {
      var b = G4(this, a); if (b) {
        g.VF('yt-uix-menu-before-show', a, b); if (this.g)o2(a, this.g) || E4(this, this.l); else { this.l = a; this.g = b; g.jq(a, Z(this, 'sibling-content')) || (g.Id(b), window.document.body.appendChild(b)); var c = H4(this, a).offsetWidth - 2; b.style.minWidth = c + 'px' }(c = C4(this, a)) && b.parentNode && b.parentNode.insertBefore(c, b.nextSibling); g.lq(b, Z(this, 'content-hidden')); Bya(this, a, b); g.kq(H4(this, a), [Z(this, 'trigger-selected'), 'yt-uix-button-toggled']); g.UF('yt-uix-menu-show', a); Gya(b)
        Eya(this, a); g.UF('yt-uix-kbd-nav-move-in-to', b); var d = (0, g.z)(this.nW, this, a), e = (0, g.z)(this.bL, this, a); c = g.Ea(a).toString(); this.o[c] = [g.oF(b, 'click', e), g.oF(window.document, 'click', d)]; g.jq(a, Z(this, 'indicate-selected')) && (d = (0, g.z)(this.cL, this, a), this.o[c].push(g.oF(b, 'click', d))); g.jq(a, Z(this, 'hover')) && (a = (0, g.z)(this.mW, this, a), this.o[c].push(g.oF(window.document, 'mousemove', a)))
      }
    }
  }
  g.h.mW = function (a, b) { var c = g.qF(b); if (c) { var d = H4(this, a); o2(c, d) || Hya(this, c) || F4(this, a) } }
  g.h.nW = function (a, b) { var c = g.qF(b); if (c) { if (Hya(this, c)) { var d = g.Yd(c, Z(this, 'content')), e = g.Xd(c, 'LI'); e && d && g.Od(d, e) && g.VF('yt-uix-menu-item-clicked', c); c = g.Yd(c, Z(this, 'close-on-select')); if (!c) return; d = B4(c) }E4(this, d || a) } }
  g.h.bL = function (a, b) { var c = g.qF(b); c && Fya(this, a, c) }
  g.h.cL = function (a, b) { var c = g.qF(b); if (c) { var d = H4(this, a); if (d && (c = g.Xd(c, 'LI'))) if (c = a2(c).trim(), d.hasChildNodes()) { var e = p4.getInstance(); (d = g.J(Z(e, 'content'), d)) && g.Qd(d, c) } else g.Qd(d, c) } }; g.A(I4, w4); g.xa(I4); g.h = I4.prototype; g.h.register = function () { I4.ba.register.call(this); this.addBehavior('click', this.hx, 'target'); this.addBehavior('click', this.gx, 'close') }
  g.h.unregister = function () { I4.ba.unregister.call(this); this.removeBehavior('click', this.hx, 'target'); this.removeBehavior('click', this.gx, 'close'); for (var a in this.g)g.pF(this.g[a]); this.g = {}; for (a in this.l)g.pF(this.l[a]); this.l = {} }
  g.h.hx = function (a, b, c) { c.preventDefault(); b = g.Xd(c.target, 'button'); if (!b || !b.disabled) { b = this.za(a, 'card-target'); var d; b ? d = g.u(b) ? window.document.getElementById(b) : b : d = a; a = d; d = this.ie(a); this.za(d, 'disabled') || (g.jq(d, Z(this, 'active')) ? (this.hide(a), g.lq(d, Z(this, 'active'))) : (this.show(a), g.S(d, Z(this, 'active')))) } }
  g.h.show = function (a) { I4.ba.show.call(this, a); var b = this.ie(a), c = g.Ea(a).toString(); if (!g.ZE(b, 'click-outside-persists')) { if (this.g[c]) return; b = g.oF(window.document, 'click', (0, g.z)(this.jx, this, a)); var d = g.oF(window, 'blur', (0, g.z)(this.jx, this, a)); this.g[c] = [b, d] }a = g.oF(window, 'resize', (0, g.z)(this.oV, this, a, void 0)); this.l[c] = a }
  g.h.hide = function (a) { I4.ba.hide.call(this, a); a = g.Ea(a).toString(); var b = this.g[a]; b && (g.pF(b), this.g[a] = null); if (b = this.l[a])g.pF(b), delete this.l[a] }
  g.h.jx = function (a, b) { var c = 'yt-uix' + (this.B ? '-' + this.B : '') + '-card', d = null; b.target && (d = g.Yd(b.target, c) || g.Yd(B4(b.target), c)); (d = d || g.Yd(window.document.activeElement, c) || g.Yd(B4(window.document.activeElement), c)) || this.hide(a) }
  g.h.gx = function (a) { (a = g.Yd(a, Z(this, 'card'))) && (a = a.cardTargetNode) && this.hide(a) }; g.A(J4, w4); g.xa(J4); g.h = J4.prototype; g.h.register = function () { this.addBehavior('mouseenter', this.eB, 'target'); this.addBehavior('mouseleave', this.gB, 'target'); this.addBehavior('mouseenter', this.fB, 'card'); this.addBehavior('mouseleave', this.hB, 'card') }
  g.h.unregister = function () { this.removeBehavior('mouseenter', this.eB, 'target'); this.removeBehavior('mouseleave', this.gB, 'target'); this.removeBehavior('mouseenter', this.fB, 'card'); this.removeBehavior('mouseleave', this.hB, 'card') }
  g.h.eB = function (a) { if (W4 != a) { W4 && (this.hide(W4), W4 = null); var b = (0, g.z)(this.show, this, a), c = (0, window.parseInt)(this.za(a, 'delay-show'), 10); b = g.VD(b, c > -1 ? c : 200); this.setData(a, 'card-timer', b.toString()); W4 = a; a.alt && (this.setData(a, 'card-alt', a.alt), a.alt = ''); a.title && (this.setData(a, 'card-title', a.title), a.title = '') } }
  g.h.gB = function (a) { var b = (0, window.parseInt)(this.za(a, 'card-timer'), 10); g.XD(b); this.ie(a).isCardHidable = !0; b = (0, window.parseInt)(this.za(a, 'delay-hide'), 10); b = b > -1 ? b : 200; g.VD((0, g.z)(this.IJ, this, a), b); if (b = this.za(a, 'card-alt'))a.alt = b; if (b = this.za(a, 'card-title'))a.title = b }
  g.h.IJ = function (a) { this.ie(a).isCardHidable && (this.hide(a), W4 = null) }
  g.h.fB = function (a) { a && (a.cardRootNode.isCardHidable = !1) }
  g.h.hB = function (a) { a && this.hide(a.cardTargetNode) }
  var W4 = null; var Kya = {LOADING: 'loading', DF: 'content', u3: 'working'}; g.h = K4.prototype
  g.h.show = function () {
    if (!this.ia()) {
      this.D = window.document.activeElement; if (!this.N) {
        this.l || (this.l = g.nd('yt-dialog-bg'), this.l || (this.l = g.Cd('div'), this.l.id = 'yt-dialog-bg', this.l.className = 'yt-dialog-bg', window.document.body.appendChild(this.l))); var a = window, b = a.document; var c = 0; if (b) {
          c = b.body; var d = b.documentElement; if (d && c) {
            if (a = g.ud(a).height, g.td(b) && d.scrollHeight)c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight; else {
              b = d.scrollHeight; var e = d.offsetHeight; d.clientHeight != e && (b = c.scrollHeight,
                e = c.offsetHeight); c = b > a ? b > e ? b : e : b < e ? b : e
            }
          } else c = 0
        } this.l.style.height = c + 'px'; s2(this.l)
      } this.Oy(); c = Mya(this); Nya(c); this.B = g.oF(window.document, 'keydown', (0, g.z)(this.LK, this)); c = this.g; d = g.RF('player-added', this.Oy, this); g.YE(c, 'player-ready-pubsub-key', d); this.U && (this.C = g.oF(window.document, 'click', (0, g.z)(this.TT, this))); s2(this.g); this.o.setAttribute('tabindex', '0'); Pya(this); this.H || g.S(window.document.body, 'yt-dialog-active'); v4(p4.getInstance()); x4(I4.getInstance()); x4(J4.getInstance()); g.UF('yt-ui-dialog-show-complete',
        this)
    }
  }
  g.h.Oy = function () { if (!this.X) { var a = this.g; g.T(window.document.body, 'hide-players', !0); a && g.T(a, 'preserve-players', !0) } }
  g.h.TP = function (a) { a = a.currentTarget; a.disabled || (a = g.ZE(a, 'action') || '', this.dismiss(a)) }
  g.h.dismiss = function (a) {
    if (!this.ia()) {
      this.A.R('pre-all'); this.A.R('pre-' + a); t2(this.g); x4(I4.getInstance()); x4(J4.getInstance()); this.o.setAttribute('tabindex', '-1'); Lya() || (t2(this.l), this.H || g.lq(window.document.body, 'yt-dialog-active'), Gva(), Oya()); this.B && (g.pF(this.B), this.B = null); this.C && (g.pF(this.C), this.C = null); var b = this.g; if (b) { var c = g.ZE(b, 'player-ready-pubsub-key'); c && (g.SF(c), m2(b, 'player-ready-pubsub-key')) } this.A.R('post-all'); g.UF('yt-ui-dialog-hide-complete', this); a == 'cancel' &&
g.UF('yt-ui-dialog-cancelled', this); this.A && this.A.R('post-' + a); this.D && this.D.focus()
    }
  }
  g.h.setTitle = function (a) { g.Qd(g.J('yt-dialog-title', this.g), a) }
  g.h.LK = function (a) {
    g.VD((0, g.z)(function () { this.L || a.keyCode != 27 || this.dismiss('cancel') }, this), 0)
    a.keyCode == 9 && a.shiftKey && g.jq(window.document.activeElement, 'yt-dialog-fg') && a.preventDefault()
  }
  g.h.TT = function (a) { a.target.className == 'yt-dialog-base' && this.dismiss('cancel') }
  g.h.ia = function () { return this.K }
  g.h.dispose = function () {
    r2(this.g) && this.dismiss('dispose'); g.pF(this.F); this.F.length = 0; g.VD((0, g.z)(function () { this.D = null }, this), 0)
    this.I = this.o = null; this.A.dispose(); this.A = null; this.K = !0
  }
  g.h.yI = function (a) { a.stopPropagation(); Pya(this) }
  g.wa('yt.ui.Dialog', K4, void 0); g.A(L4, m4); g.xa(L4); g.h = L4.prototype; g.h.register = function () { this.addBehavior('click', this.Hu, 'target'); this.addBehavior('click', this.hide, 'close'); Rya(this) }
  g.h.unregister = function () { L4.ba.unregister.call(this); this.removeBehavior('click', this.Hu, 'target'); this.removeBehavior('click', this.hide, 'close'); this.A && (g.SF(this.A), this.A = null); this.l && (g.pF(this.l), this.l = null) }
  g.h.Hu = function (a) {
    if (!this.g || !r2(this.g.g)) {
      var b = this.ie(a); a = Tya(b, a); b || (b = a ? a.overlayParentNode : null); if (b && a) {
        var c = !!this.za(b, 'disable-shortcuts') || !1, d = !!this.za(b, 'disable-outside-click-dismiss') || !1; this.g = new K4(a, c); this.o = b; var e = g.J('yt-dialog-fg', a); if (e) { var f = this.za(b, 'overlay-class') || '', k = this.za(b, 'overlay-style') || 'default', l = this.za(b, 'overlay-shape') || 'default'; f = f ? f.split(' ') : []; f.push(Z(this, k)); f.push(Z(this, l)); g.kq(e, f) } this.g.show(); g.UF('yt-uix-kbd-nav-move-to', e ||
a); Rya(this); c || d || (c = (0, g.z)(function (a) { g.jq(a.target, 'yt-dialog-base') && Sya(this) }, this), a = g.J('yt-dialog-base', a), this.l = g.oF(a, 'click', c))
        this.bj(b, 'overlay-shown'); g.UF('yt-uix-overlay-shown', b)
      }
    }
  }
  g.h.Cc = function (a) { return g.J('yt-dialog-content', a.overlayContentNode || a) }
  g.h.hide = function (a) { a && a.disabled || g.UF('yt-uix-overlay-hide') }
  g.h.show = function (a) { this.Hu(a) }; g.A(M4, m4); g.xa(M4); g.h = M4.prototype; g.h.register = function () { this.addBehavior('mouseover', this.Ko); this.addBehavior('mouseout', this.Bi); this.addBehavior('focus', this.Yx); this.addBehavior('blur', this.Ow); this.addBehavior('click', this.Bi); this.addBehavior('touchstart', this.SD); this.addBehavior('touchend', this.Fp); this.addBehavior('touchcancel', this.Fp) }
  g.h.unregister = function () { this.removeBehavior('mouseover', this.Ko); this.removeBehavior('mouseout', this.Bi); this.removeBehavior('focus', this.Yx); this.removeBehavior('blur', this.Ow); this.removeBehavior('click', this.Bi); this.removeBehavior('touchstart', this.SD); this.removeBehavior('touchend', this.Fp); this.removeBehavior('touchcancel', this.Fp); this.dispose(); M4.ba.unregister.call(this) }
  g.h.dispose = function () { for (var a in this.l) this.Bi(this.l[a]); this.l = {} }
  g.h.Ko = function (a) {
    if (!(this.g && (0, g.F)() - this.g < 1E3)) {
      var b = (0, window.parseInt)(this.za(a, 'tooltip-hide-timer'), 10); b && (m2(a, 'tooltip-hide-timer'), g.XD(b)); b = (0, g.z)(function () { Zya(this, a); m2(a, 'tooltip-show-timer') }, this)
      var c = (0, window.parseInt)(this.za(a, 'tooltip-show-delay'), 10) || 0; b = g.VD(b, c); this.setData(a, 'tooltip-show-timer', b.toString()); a.title && (this.setData(a, 'tooltip-text', Wya(this, a)), a.title = ''); b = g.Ea(a).toString(); this.l[b] = a
    }
  }
  g.h.Bi = function (a) {
    var b = (0, window.parseInt)(this.za(a, 'tooltip-show-timer'), 10); b && (g.XD(b), m2(a, 'tooltip-show-timer')); b = (0, g.z)(function () { if (a) { var b = g.nd(N4(this, a)); b && ($ya(b), g.Id(b), m2(a, 'content-id')); b = g.nd(N4(this, a, 'arialabel')); g.Id(b) }m2(a, 'tooltip-hide-timer') }, this)
    b = g.VD(b, 50); this.setData(a, 'tooltip-hide-timer', b.toString()); if (b = this.za(a, 'tooltip-text'))a.title = b; b = g.Ea(a).toString(); delete this.l[b]
  }
  g.h.Yx = function (a, b) { this.g = 0; this.Ko(a, b) }
  g.h.Ow = function (a) { this.g = 0; this.Bi(a) }
  g.h.SD = function (a, b, c) { c.changedTouches && (this.g = 0, (a = j4(b, Z(this), c.changedTouches[0].target)) && this.Ko(a, b)) }
  g.h.Fp = function (a, b, c) { c.changedTouches && (this.g = (0, g.F)(), (a = j4(b, Z(this), c.changedTouches[0].target)) && this.Bi(a)) }; var X4 = window.yt && window.yt.uix && window.yt.uix.widgets_ || {}; g.wa('yt.uix.widgets_', X4, void 0); g.A(O4, g.wN); g.A(P4, g.wN); g.A(aza, g.wN); g.A(Q4, g.wN)
  var mza = new g.xN('subscription-subscribe', P4), nza = new g.xN('subscription-subscribe-loading', O4), oza = new g.xN('subscription-subscribe-loaded', O4), pza = new g.xN('subscription-subscribe-success', aza), qza = new g.xN('subscription-unsubscribe', Q4), rza = new g.xN('subscription-unsubscirbe-loading', O4), sza = new g.xN('subscription-unsubscribe-loaded', O4), tza = new g.xN('subscription-unsubscribe-success', O4), uza = new g.xN('subscription-enable-ypc', O4), vza = new g.xN('subscription-disable-ypc', O4); var S4 = {}, R4 = []; g.A(T4, m4); g.xa(T4); T4.prototype.register = function () { this.addBehavior('click', this.xv); o4(this, nza, this.SB); o4(this, oza, this.eF); o4(this, pza, this.bT); o4(this, rza, this.SB); o4(this, sza, this.eF); o4(this, tza, this.oT); o4(this, uza, this.vQ); o4(this, vza, this.pQ) }
  T4.prototype.unregister = function () { this.removeBehavior('click', this.xv); T4.ba.unregister.call(this) }
  T4.prototype.isSubscribed = function (a) { return !!this.za(a, 'is-subscribed') }
  var V4 = {Bv: 'hover-enabled', tF: 'yt-uix-button-subscribe', uF: 'yt-uix-button-subscribed', sX: 'ypc-enabled', BF: 'yt-uix-button-subscription-container', CF: 'yt-subscription-button-disabled-mask-container'}, U4 = {JX: 'channel-external-id',
    FF: 'subscriber-count-show-when-subscribed',
    GF: 'subscriber-count-tooltip',
    HF: 'subscriber-count-title',
    vZ: 'href',
    EZ: 'insecure',
    Ov: 'is-subscribed',
    p0: 'parent-url',
    n1: 'clicktracking',
    ZG: 'show-unsub-confirm-dialog',
    q1: 'show-unsub-confirm-time-frame',
    gH: 'style-type',
    ow: 'subscribed-timestamp',
    pw: 'subscription-id',
    V1: 'target',
    AH: 'ypc-enabled'}; g.h = T4.prototype
  g.h.xv = function (a) { var b = this.za(a, 'href'), c = this.za(a, 'insecure'); if (b)a = this.za(a, 'target') || '_self', window.open(b, a); else if (!c) if (g.FW()) { b = this.za(a, 'channel-external-id'); c = this.za(a, 'clicktracking'); var d = dza(this, a), e = this.za(a, 'parent-url'); if (this.za(a, 'is-subscribed')) { var f = this.za(a, 'subscription-id'), k = new Q4(b, f, d, a, c, e); hza(this, a) ? cza(a, b).then(function () { g.zN(qza, k) }) : g.zN(qza, k) } else g.zN(mza, new P4(b, d, c, e)) } else gza(this, a) }
  g.h.SB = function (a) { this.Yi(a.g, this.oD, !0) }
  g.h.eF = function (a) { this.Yi(a.g, this.oD, !1) }
  g.h.bT = function (a) { this.Yi(a.g, this.tD, !0, a.l) }
  g.h.oT = function (a) { this.Yi(a.g, this.tD, !1) }
  g.h.vQ = function (a) { this.Yi(a.g, this.qI) }
  g.h.pQ = function (a) { this.Yi(a.g, this.iI) }
  g.h.tD = function (a, b, c) { b ? (this.setData(a, U4.Ov, 'true'), c && this.setData(a, U4.pw, c), this.za(a, U4.ZG) && (b = new e2(), this.setData(a, U4.ow, (b.getTime() / 1E3).toString()))) : (m2(a, U4.Ov), m2(a, U4.ow), m2(a, U4.pw)); eza(this, a) }
  g.h.oD = function (a, b) { var c = g.Yd(a, V4.BF); g.T(c, V4.CF, b); a.setAttribute('aria-busy', b ? 'true' : 'false'); a.disabled = b }
  g.h.qI = function (a) { var b = !!this.za(a, 'ypc-item-type'), c = !!this.za(a, 'ypc-item-id'); !this.za(a, 'ypc-enabled') && b && c && (g.S(a, 'ypc-enabled'), this.setData(a, U4.AH, 'true')) }
  g.h.iI = function (a) { this.za(a, 'ypc-enabled') && (g.lq(a, 'ypc-enabled'), m2(a, 'ypc-enabled')) }
  g.h.MH = function (a, b, c) { var d = g.Za(arguments, 2); (0, g.B)(a, function (a) { b.apply(this, g.Wa(a, d)) }, this) }
  g.h.Yi = function (a, b, c) { var d = fza(this, a); d = g.Wa([d], g.Za(arguments, 1)); this.MH.apply(this, d) }; g.xY.annotations_module = e4; g.xY.creatorendscreen = L2; var Y4 = T4.getInstance(), Z4 = Z(Y4); Z4 in X4 || (Y4.register(), n4(Y4, 'yt-uix-init-' + Z4, Y4.init), n4(Y4, 'yt-uix-dispose-' + Z4, Y4.dispose), X4[Z4] = Y4)
})(_yt_player)
