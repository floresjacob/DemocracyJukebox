(function (g) {
  var window = this; var vAa = function (a, b, c, d) {
      var e = b.Zb(); g.T(a.element, 'ytp-suggestion-set', !!e.videoId); var f = b.getPlaylistId(); d = b.cd(c, d || 'mqdefault.jpg'); var k = b instanceof g.pO ? g.XV(b.lengthSeconds) : null, l = !!f; f = l && (new g.qQ(f.substr(0, 2), f.substr(2))).type == 'RD'; var m = b instanceof g.pO ? b.xa : null; c = {title: b.title,
        author: b.author,
        author_and_views: e.shortViewCount ? b.author + ' \u2022 ' + e.shortViewCount : b.author,
        aria_label: b.Gk || g.U('YTP_WATCH_VIDEO_OR_PLAYLIST', {TITLE: b.title}, b.title),
        duration: k,
        url: b.dl(c),
        is_live: m,
        is_list: l,
        is_mix: f,
        background: d ? 'background-image: url(' + d + ')' : ''}; b instanceof g.sQ && (c.playlist_length = b.getLength()); a.update(c)
    }, e6 = function (a, b) {
      g.pH.call(this, {G: 'div',
        ca: ['html5-endscreen', 'ytp-player-content', b || 'base-endscreen']}); this.o = a; this.created = !1
    }, f6 = function (a) {
      var b = {G: 'span',
          M: 'ytp-upnext-top',
          J: [{G: 'span', M: 'ytp-upnext-header', J: [g.U('YTP_PLAYLIST_UP_NEXT')]}, {G: 'span', M: 'ytp-upnext-title', J: ['{{title}}']}, {G: 'span', M: 'ytp-upnext-author', J: ['{{author}}']}]}, c = {role: 'button', href: '{{url}}', 'aria-label': g.U('YTP_AUTOPLAY_NEXT')}; b = {G: 'div',
        M: 'ytp-upnext',
        P: {'aria-label': '{{aria_label}}'},
        J: [{G: 'div', M: 'ytp-cued-thumbnail-overlay-image', P: {style: '{{background}}'}}, b, {G: 'a',
          M: 'ytp-upnext-autoplay-icon',
          P: c,
          J: [{G: 'svg',
            P: {height: '100%', version: '1.1', viewBox: '0 0 72 72', width: '100%'},
            J: [{G: 'circle', M: 'ytp-svg-autoplay-circle', P: {cx: '36', cy: '36', fill: '#fff', 'fill-opacity': '0.3', r: '31.5'}}, {G: 'circle', M: 'ytp-svg-autoplay-ring', P: {cx: '-36', cy: '36', 'fill-opacity': '0', r: '33.5', stroke: '#FFFFFF', 'stroke-dasharray': '211', 'stroke-dashoffset': '-211', 'stroke-width': '4', transform: 'rotate(-90)'}}, {G: 'path', M: 'ytp-svg-fill', P: {d: 'M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z'}}]}]}, {G: 'span',
          M: 'ytp-upnext-bottom',
          J: [{G: 'span', M: 'ytp-upnext-cancel'}, {G: 'span',
            M: 'ytp-upnext-paused',
            J: [g.U('YTP_AUTOPLAY_PAUSED_3')]}]}]}; g.V.call(this, b); this.B = null; b = this.g['ytp-upnext-cancel']; this.B = new g.V({G: 'button', ca: ['ytp-upnext-cancel-button', 'ytp-button'], P: {tabindex: '0', 'aria-label': g.U('YTP_AUTOPLAY_CANCEL')}, J: [g.U('YTP_CANCEL')]}); g.N(this, this.B); this.B.T('click', this.IP, this); this.B.sa(b); this.o = a; this.K = this.g['ytp-svg-autoplay-ring']; this.F = this.D = this.A = this.C = null; this.H = new g.Wt(this.jn, 5E3, this); g.N(this, this.H); this.I = 0; this.O(this.g['ytp-upnext-autoplay-icon'], 'click',
        this.SR); this.BB(); this.O(a, 'autonavvisibility', this.BB); this.O(a, 'mdxnowautoplaying', this.hR); this.O(a, 'mdxautoplaycanceled', this.iR); this.O(a, 'mdxautoplayupnext', this.fE); this.o.Sa() == 3 && (a = (a = g.eV(g.$U(this.o))) ? a.FI() : null) && this.fE(a)
    }, wAa = function (a, b) {
      a.C = b
      vAa(a, b, g.X(a.o), 'hqdefault.jpg')
    }, g6 = function (a, b) {
      if (!a.A) {
        g.UF('a11y-announce', g.U('YTP_PLAYLIST_UP_NEXT') + ' ' + a.C.title)
        a.I = g.eG(); a.A = new g.Wt((0, g.z)(a.tq, a, b), 25); a.tq(b); var c = b || g.X(a.o).experiments.l('autoplay_time') || 1E4; a.o.ua('onAutonavCoundownStarted', c)
      }g.lq(a.element, 'ytp-upnext-autoplay-paused')
    }, i6 = function (a) {
      h6(a)
      a.I = g.eG(); a.tq(); g.S(a.element, 'ytp-upnext-autoplay-paused')
    }, h6 = function (a) { a.A && (a.A.dispose(), a.A = null) }, j6 = function (a, b) {
      b = void 0 === b ? !1 : b
      var c = g.X(a.o); if (c.experiments.g('autonav_notifications') && b && window.Notification && window.document.hasFocus) { var d = window.Notification.permission; d == 'default' ? window.Notification.requestPermission() : d != 'granted' || window.document.hasFocus() || (d = a.C.Zb(), a.jn(), a.D = new window.Notification(g.U('YTP_PLAYLIST_UP_NEXT'), {body: d.title, icon: d.cd(c)}), a.F = a.O(a.D, 'click', a.IR), a.H.start()) }h6(a); a.o.Vj(!1, b)
    }, xAa = function (a) {
      e6.call(this, a, 'subscribecard-endscreen')
      var b = a.getVideoData(); this.A = new g.V({G: 'div', M: 'ytp-subscribe-card', J: [{G: 'img', M: 'ytp-author-image', P: {src: b.profilePicture}}, {G: 'div', M: 'ytp-subscribe-card-right', J: [{G: 'div', M: 'ytp-author-name', J: [b.author]}, {G: 'div', M: 'html5-subscribe-button-container'}]}]}); g.N(this, this.A); this.A.sa(this.element); this.B = new g.J_(g.U('YTP_SUBSCRIBE'), null, g.U('YTP_UNSUBSCRIBE'), null, !0, !1, b.yk, b.subscribed, 'trailer-endscreen', null, null, a); g.N(this, this.B); this.B.sa(this.A.g['html5-subscribe-button-container'])
      this.hide()
    }, k6 = function (a) {
      var b = g.X(a), c = g.uI || g.cf ? {style: 'will-change: opacity'} : void 0, d = b.g, e = ['ytp-videowall-still']
      b.o && e.push('ytp-videowall-show-text'); g.V.call(this, {G: 'a',
        ca: e,
        P: {href: '{{url}}', target: d ? '_blank' : '', 'aria-label': '{{aria_label}}', 'data-is-live': '{{is_live}}', 'data-is-list': '{{is_list}}', 'data-is-mix': '{{is_mix}}'},
        J: [{G: 'div', M: 'ytp-videowall-still-image', P: {style: '{{background}}'}}, {G: 'span',
          M: 'ytp-videowall-still-info',
          J: [{G: 'span',
            M: 'ytp-videowall-still-info-bg',
            J: [{G: 'span',
              M: 'ytp-videowall-still-info-content',
              P: c,
              J: [{G: 'span', M: 'ytp-videowall-still-info-title', J: ['{{title}}']}, {G: 'span',
                M: 'ytp-videowall-still-info-author',
                J: ['{{author_and_views}}']}, {G: 'span', M: 'ytp-videowall-still-info-live', J: [g.U('YTP_LIVE')]}, {G: 'span', M: 'ytp-videowall-still-info-duration', J: ['{{duration}}']}]}]}]}, {G: 'span', ca: ['ytp-videowall-still-listlabel-regular', 'ytp-videowall-still-listlabel'], J: [{G: 'span', M: 'ytp-videowall-still-listlabel-icon'}, g.U('YTP_PLAYLIST'), {G: 'span', M: 'ytp-videowall-still-listlabel-length', J: [' (', {G: 'span', J: ['{{playlist_length}}']}, ')']}]}, {G: 'span',
          ca: ['ytp-videowall-still-listlabel-mix',
            'ytp-videowall-still-listlabel'],
          J: [{G: 'span', M: 'ytp-videowall-still-listlabel-mix-icon'}, g.U('YTP_MIX'), {G: 'span', M: 'ytp-videowall-still-listlabel-length', J: [' (50+)']}]}]}); this.C = d; this.o = a; this.A = null; this.B = new g.CF(this); g.N(this, this.B); this.T('click', this.F); this.T('keypress', this.H); this.B.O(a, 'videodatachange', this.D); g.X(a).U && (a = a.app.ea, b = this.element, g.Pa(a.g, b), g.Sa(a.g, b), c = String(a.F++), b.setAttribute('data-visual-id', c), g.Ye(this, (0, g.z)(a.D, a, b))); this.D()
    }, l6 = function (a) {
      e6.call(this,
        a, 'videowall-endscreen')
      this.L = a; this.F = 0; this.B = []; this.H = this.D = this.C = null; this.I = this.U = !1; this.W = new g.CF(this); g.N(this, this.W); this.K = new g.Wt(g.Fa(g.S, this.element, 'ytp-show-tiles'), 0); g.N(this, this.K); var b = new g.V({G: 'button', ca: ['ytp-button', 'ytp-endscreen-previous'], P: {'aria-label': g.U('YTP_PREVIOUS')}, J: [g.RV()]}); g.N(this, b); b.sa(this.element); b.T('click', this.EN, this); this.N = new g.jH({G: 'div', M: 'ytp-endscreen-content'}); g.N(this, this.N); this.N.sa(this.element); b = new g.V({G: 'button',
        ca: ['ytp-button', 'ytp-endscreen-next'],
        P: {'aria-label': g.U('YTP_NEXT')},
        J: [g.SV()]}); g.N(this, b); b.sa(this.element); b.T('click', this.DN, this); this.A = new f6(a); g.N(this, this.A); g.yV(this.o, this.A.element, 4); this.hide()
    }, m6 = function (a) { return g.zV(a.o) && a.Mw() && !a.H }, yAa = function (a, b) {
      return (0, g.G)(b.suggestions, function (b) {
        b = g.IY(b)
        g.N(a, b); return b
      })
    }, n6 = function (a) {
      var b = a.Dt()
      b != a.U && (a.U = b, a.o.R('autonavvisibility'))
    }, o6 = function (a) {
      g.EV.call(this, a)
      g.QG({YTP_AUTOPLAY_CANCEL: 'Cancel autoplay', YTP_AUTOPLAY_NEXT: 'Play next video', YTP_AUTOPLAY_PAUSED_3: 'Autoplay is paused', YTP_CANCEL: 'Cancel', YTP_MIX: 'Mix', YTP_PLAYLIST_UP_NEXT: 'Up Next', YTP_UNSUBSCRIBE: 'Unsubscribe'}); this.l = null; this.o = new g.CF(this); g.N(this, this.o); this.A = g.X(a); zAa(a) ? this.l = new l6(this.g) : this.A.Ga ? this.l = new xAa(this.g) : this.l = new e6(this.g); g.N(this, this.l); g.yV(this.g, this.l.element, 4); this.SC(); this.o.O(a, 'videodatachange', this.SC, this); this.o.O(a, 'crn_endscreen', this.FL,
        this); this.o.O(a, 'crx_endscreen', this.GL, this)
    }, zAa = function (a) {
      a = g.X(a)
      return a.Pc && !a.Ga
    }
  g.p(e6, g.pH); e6.prototype.create = function () { this.created = !0 }
  e6.prototype.destroy = function () { this.created = !1 }
  e6.prototype.Mw = function () { return !1 }
  e6.prototype.Dt = function () { return !1 }; g.p(f6, g.V); g.h = f6.prototype; g.h.jn = function () { this.D && (this.H.stop(), this.Ca(this.F), this.F = null, this.D.close(), this.D = null) }
  g.h.BB = function () { g.oH(this, g.aV(this.o)) }
  g.h.IR = function () { window.focus(); this.jn() }
  g.h.hide = function () { g.V.prototype.hide.call(this) }
  g.h.tq = function (a) { a = a || g.X(this.o).experiments.l('autoplay_time') || 1E4; var b = Math.min(g.eG() - this.I, a); a = Math.min(b / a, 1); this.K.setAttribute('stroke-dashoffset', -211 * (a + 1)); a >= 1 && this.o.Sa() != 3 ? j6(this, !0) : this.A && this.A.start() }
  g.h.SR = function (a) { !g.Od(this.B.element, g.qF(a)) && g.DX(a, this.o) && j6(this) }
  g.h.IP = function () { g.cV(this.o, !0) }
  g.h.hR = function (a) { this.o.Sa(); this.show(); g6(this, a) }
  g.h.fE = function (a) { this.o.Sa(); this.C && this.C.Zb().videoId == a.Zb().videoId || wAa(this, a) }
  g.h.iR = function () { this.o.Sa(); h6(this); this.hide() }
  g.h.V = function () { h6(this); this.jn(); g.V.prototype.V.call(this) }; g.p(xAa, e6); g.p(k6, g.V); k6.prototype.lk = function () { g.CV(this.o, this.element); var a = this.A.Zb().videoId, b = this.A.getPlaylistId(); g.O0(this.o.app, a, this.A.Md, b, void 0, void 0, void 0) }
  k6.prototype.F = function (a) { g.DX(a, this.o, this.C, this.A.Md || void 0) && this.lk() }
  k6.prototype.H = function (a) { switch (a.keyCode) { case 13:case 32:g.vF(a) || (this.lk(), g.uF(a)) } }
  k6.prototype.D = function () { var a = this.o.getVideoData(), b = g.X(this.o); this.C = a.isDni ? !1 : b.g }; g.p(l6, e6); g.h = l6.prototype; g.h.create = function () { e6.prototype.create.call(this); var a = this.o.getVideoData(); a && (this.C = yAa(this, a), this.D = a); this.Dg(); this.W.O(this.o, 'appresize', this.Dg); this.W.O(this.o, 'onVideoAreaChange', this.Dg); this.W.O(this.o, 'videodatachange', this.FN); this.W.O(this.o, 'autonavchange', this.BA); this.W.O(this.o, 'autonavcancel', this.CN); this.W.O(this.element, 'transitionend', this.jT) }
  g.h.destroy = function () { g.EF(this.W); g.$e(this.B); this.B = []; this.C = null; e6.prototype.destroy.call(this); g.lq(this.element, 'ytp-show-tiles'); this.K.stop() }
  g.h.Mw = function () { return this.D.autonavState != 1 }
  g.h.show = function () { e6.prototype.show.call(this); g.lq(this.element, 'ytp-show-tiles'); g.X(this.o).o ? g.Yt(this.K) : this.K.start(); (this.I || this.H && this.H != this.D.clientPlaybackNonce) && g.cV(this.o, !1); m6(this) ? (n6(this), this.D.autonavState == 2 ? g.X(this.o).experiments.g('fast_autonav_in_background') && this.o.zi() == 3 ? j6(this.A, !0) : g6(this.A) : this.D.autonavState == 3 && i6(this.A)) : (g.cV(this.o, !0), n6(this)) }
  g.h.hide = function () { e6.prototype.hide.call(this); i6(this.A); n6(this) }
  g.h.jT = function (a) { g.qF(a) == this.element && this.Dg() }
  g.h.Dg = function () {
    if (this.C && this.C.length) {
      g.S(this.element, 'ytp-endscreen-paginate'); var a = g.qV(this.L, !0), b = g.CH(this.L); b && (b = b.sd() ? 48 : 32, a.width -= 2 * b); var c = a.width / a.height, d = 96 / 54, e = b = 2, f = Math.max(a.width / 96, 2), k = Math.max(a.height / 54, 2), l = this.C.length, m = Math.pow(2, 2); var n = l * m + (Math.pow(2, 2) - m); n += Math.pow(2, 2) - m; for (n -= m; n > 0 && (b < f || e < k);) { var q = b / 2, r = e / 2, v = b <= f - 2 && n >= r * m, C = e <= k - 2 && n >= q * m; if ((q + 1) / r * d / c > c / (q / (r + 1) * d) && C)n -= q * m, e += 2; else if (v)n -= r * m, b += 2; else if (C)n -= q * m, e += 2; else break }d =
!1; n >= 3 * m && l * m - n <= 6 && (e >= 4 || b >= 4) && (d = !0); m = 96 * b; n = 54 * e; c = m / n < c ? a.height / n : a.width / m; c = Math.min(c, 2); m *= c; n *= c; m *= g.bd(a.width / m || 1, 1, 1.21); n *= g.bd(a.height / n || 1, 1, 1.21); m = Math.floor(Math.min(a.width, m)); n = Math.floor(Math.min(a.height, n)); a = this.N.element; g.Gh(a, m, n); g.nh(a, {marginLeft: m / -2 + 'px', marginTop: n / -2 + 'px'}); wAa(this.A, this.C[0]); g.T(this.element, 'ytp-endscreen-takeover', m6(this)); n6(this); m += 4; n += 4; for (f = c = 0; f < b; f++) {
        for (k = 0; k < e; k++) {
          if (q = c, r = 0, d && f >= b - 2 && k >= e - 2 ? r = 1 : k % 2 == 0 && f % 2 == 0 && (k < 2 &&
f < 2 ? k == 0 && f == 0 && (r = 2) : r = 2), q = g.cd(q + this.F, l), r != 0) {
            v = this.B[c]; v || (v = new k6(this.o), this.B[c] = v, a.appendChild(v.element)); C = Math.floor(n * k / e); var I = Math.floor(m * f / b), L = Math.floor(n * (k + r) / e) - C - 4, Y = Math.floor(m * (f + r) / b) - I - 4; g.uh(v.element, I, C); g.Gh(v.element, Y, L); g.nh(v.element, 'transitionDelay', (k + f) / 20 + 's'); g.T(v.element, 'ytp-videowall-still-mini', r == 1); g.T(v.element, 'ytp-videowall-still-large', r > 2); r = v; q = this.C[q]; r.A != q && (r.A = q, vAa(r, q, g.X(r.o), g.jq(r.element, 'ytp-videowall-still-large') ? 'hqdefault.jpg'
              : 'mqdefault.jpg'), v = (q = q.Md) && q.itct) && (q = r.o, g.X(q).U && (q = q.app.ea, r = r.element, C = r.getAttribute('data-visual-id'), g.Pa(q.g, r), g.AV(q, 'onLogServerVeCreated', {id: C, tracking_params: v}))); c++
          }
        }
      }g.T(this.element, 'ytp-endscreen-paginate', c < l); for (b = this.B.length - 1; b >= c; b--)e = this.B[b], g.Id(e.element), g.Ze(e); this.B.length = c
    }
  }
  g.h.FN = function () { var a = this.o.getVideoData(); this.D != a && (this.F = 0, this.C = yAa(this, a), this.D = a, this.Dg()) }
  g.h.DN = function () { this.F += this.B.length; this.Dg() }
  g.h.EN = function () { this.F -= this.B.length; this.Dg() }
  g.h.JK = function () { return !!this.A.A }
  g.h.BA = function (a) { a == 1 ? (this.I = !1, this.H = this.D.clientPlaybackNonce, h6(this.A), this.l && this.Dg()) : (this.I = !0, this.l && m6(this) && (a == 2 ? g6(this.A) : a == 3 && i6(this.A))) }
  g.h.CN = function (a) { if (a) { for (a = 0; a < this.B.length; a++)g.DV(this.L, this.B[a].element, !0); this.BA(1) } else this.H = null, this.I = !1; this.Dg() }
  g.h.Dt = function () { return this.l && m6(this) }; g.p(o6, g.EV); g.h = o6.prototype; g.h.cA = function () { var a = this.g.getVideoData(), b = !!(a && a.suggestions && a.suggestions.length); b = !zAa(this.g) || b; a = g.LO(a, 'ypc_module'); var c = g.P0(this.g.app); return b && !a && !c }
  g.h.bA = function () { return this.l.Dt() }
  g.h.FK = function () { return this.bA() ? this.l.JK() : !1 }
  g.h.V = function () { g.wV(this.g, 'endscreen'); g.EV.prototype.V.call(this) }
  g.h.load = function () { g.EV.prototype.load.call(this); this.l.show() }
  g.h.unload = function () { g.EV.prototype.unload.call(this); this.l.hide(); this.l.destroy() }
  g.h.FL = function (a) { this.cA() && (this.l.created || this.l.create(), a.getId() == 'load' && this.load()) }
  g.h.GL = function (a) { a.getId() == 'load' && this.loaded && this.unload() }
  g.h.SC = function () { g.wV(this.g, 'endscreen'); var a = Math.max(1E3 * (this.g.getVideoData().lengthSeconds - 10), 0); a = new g.nQ(a, 0x8000000000000, {id: 'preload', namespace: 'endscreen'}); g.N(this, a); var b = new g.nQ(0x8000000000000, 0x8000000000000, {id: 'load', priority: 6, namespace: 'endscreen'}); g.N(this, b); g.tV(this.g, [a, b]) }; g.xY.endscreen = o6
})(_yt_player)
