!(function(t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = {i: r, l: !1, exports: {}});
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function(t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: r});
    }),
    (e.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(t, '__esModule', {value: !0});
    }),
    (e.t = function(t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, 'default', {enumerable: !0, value: t}),
        2 & n && 'string' != typeof t)
      )
        for (var o in t)
          e.d(
            r,
            o,
            function(n) {
              return t[n];
            }.bind(null, o)
          );
      return r;
    }),
    (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(n, 'a', n), n;
    }),
    (e.o = function(t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = '/'),
    e((e.s = 16));
})([
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = 'http://www.w3.org/1999/xhtml',
      o = {
        svg: 'http://www.w3.org/2000/svg',
        xhtml: r,
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/',
      },
      i = function(t) {
        var n = (t += ''),
          e = n.indexOf(':');
        return (
          e >= 0 && 'xmlns' !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
          o.hasOwnProperty(n) ? {space: o[n], local: t} : t
        );
      };
    var u = function(t) {
      var n = i(t);
      return (n.local
        ? function(t) {
            return function() {
              return this.ownerDocument.createElementNS(t.space, t.local);
            };
          }
        : function(t) {
            return function() {
              var n = this.ownerDocument,
                e = this.namespaceURI;
              return e === r && n.documentElement.namespaceURI === r
                ? n.createElement(t)
                : n.createElementNS(e, t);
            };
          })(n);
    };
    function a() {}
    var s = function(t) {
      return null == t
        ? a
        : function() {
            return this.querySelector(t);
          };
    };
    function c() {
      return [];
    }
    var f = function(t) {
        return null == t
          ? c
          : function() {
              return this.querySelectorAll(t);
            };
      },
      l = function(t) {
        return function() {
          return this.matches(t);
        };
      },
      C = function(t) {
        return new Array(t.length);
      };
    function h(t, n) {
      (this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = n);
    }
    h.prototype = {
      constructor: h,
      appendChild: function(t) {
        return this._parent.insertBefore(t, this._next);
      },
      insertBefore: function(t, n) {
        return this._parent.insertBefore(t, n);
      },
      querySelector: function(t) {
        return this._parent.querySelector(t);
      },
      querySelectorAll: function(t) {
        return this._parent.querySelectorAll(t);
      },
    };
    var p = '$';
    function R(t, n, e, r, o, i) {
      for (var u, a = 0, s = n.length, c = i.length; a < c; ++a)
        (u = n[a])
          ? ((u.__data__ = i[a]), (r[a] = u))
          : (e[a] = new h(t, i[a]));
      for (; a < s; ++a) (u = n[a]) && (o[a] = u);
    }
    function d(t, n, e, r, o, i, u) {
      var a,
        s,
        c,
        f = {},
        l = n.length,
        C = i.length,
        R = new Array(l);
      for (a = 0; a < l; ++a)
        (s = n[a]) &&
          ((R[a] = c = p + u.call(s, s.__data__, a, n)),
          c in f ? (o[a] = s) : (f[c] = s));
      for (a = 0; a < C; ++a)
        (s = f[(c = p + u.call(t, i[a], a, i))])
          ? ((r[a] = s), (s.__data__ = i[a]), (f[c] = null))
          : (e[a] = new h(t, i[a]));
      for (a = 0; a < l; ++a) (s = n[a]) && f[R[a]] === s && (o[a] = s);
    }
    function E(t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    }
    function _(t) {
      return function() {
        this.removeAttribute(t);
      };
    }
    function N(t) {
      return function() {
        this.removeAttributeNS(t.space, t.local);
      };
    }
    function m(t, n) {
      return function() {
        this.setAttribute(t, n);
      };
    }
    function v(t, n) {
      return function() {
        this.setAttributeNS(t.space, t.local, n);
      };
    }
    function y(t, n) {
      return function() {
        var e = n.apply(this, arguments);
        null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
      };
    }
    function g(t, n) {
      return function() {
        var e = n.apply(this, arguments);
        null == e
          ? this.removeAttributeNS(t.space, t.local)
          : this.setAttributeNS(t.space, t.local, e);
      };
    }
    var U = function(t) {
      return (
        (t.ownerDocument && t.ownerDocument.defaultView) ||
        (t.document && t) ||
        t.defaultView
      );
    };
    function T(t) {
      return function() {
        this.style.removeProperty(t);
      };
    }
    function Y(t, n, e) {
      return function() {
        this.style.setProperty(t, n, e);
      };
    }
    function w(t, n, e) {
      return function() {
        var r = n.apply(this, arguments);
        null == r
          ? this.style.removeProperty(t)
          : this.style.setProperty(t, r, e);
      };
    }
    function A(t, n) {
      return (
        t.style.getPropertyValue(n) ||
        U(t)
          .getComputedStyle(t, null)
          .getPropertyValue(n)
      );
    }
    function O(t) {
      return function() {
        delete this[t];
      };
    }
    function I(t, n) {
      return function() {
        this[t] = n;
      };
    }
    function D(t, n) {
      return function() {
        var e = n.apply(this, arguments);
        null == e ? delete this[t] : (this[t] = e);
      };
    }
    function S(t) {
      return t.trim().split(/^|\s+/);
    }
    function b(t) {
      return t.classList || new L(t);
    }
    function L(t) {
      (this._node = t), (this._names = S(t.getAttribute('class') || ''));
    }
    function x(t, n) {
      for (var e = b(t), r = -1, o = n.length; ++r < o; ) e.add(n[r]);
    }
    function M(t, n) {
      for (var e = b(t), r = -1, o = n.length; ++r < o; ) e.remove(n[r]);
    }
    function P(t) {
      return function() {
        x(this, t);
      };
    }
    function B(t) {
      return function() {
        M(this, t);
      };
    }
    function H(t, n) {
      return function() {
        (n.apply(this, arguments) ? x : M)(this, t);
      };
    }
    L.prototype = {
      add: function(t) {
        this._names.indexOf(t) < 0 &&
          (this._names.push(t),
          this._node.setAttribute('class', this._names.join(' ')));
      },
      remove: function(t) {
        var n = this._names.indexOf(t);
        n >= 0 &&
          (this._names.splice(n, 1),
          this._node.setAttribute('class', this._names.join(' ')));
      },
      contains: function(t) {
        return this._names.indexOf(t) >= 0;
      },
    };
    function F() {
      this.textContent = '';
    }
    function j(t) {
      return function() {
        this.textContent = t;
      };
    }
    function K(t) {
      return function() {
        var n = t.apply(this, arguments);
        this.textContent = null == n ? '' : n;
      };
    }
    function G() {
      this.innerHTML = '';
    }
    function V(t) {
      return function() {
        this.innerHTML = t;
      };
    }
    function Z(t) {
      return function() {
        var n = t.apply(this, arguments);
        this.innerHTML = null == n ? '' : n;
      };
    }
    function q() {
      this.nextSibling && this.parentNode.appendChild(this);
    }
    function W() {
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function X() {
      return null;
    }
    function k() {
      var t = this.parentNode;
      t && t.removeChild(this);
    }
    function z() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
    }
    function $() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
    }
    var J = {},
      Q = null;
    'undefined' != typeof document &&
      ('onmouseenter' in document.documentElement ||
        (J = {mouseenter: 'mouseover', mouseleave: 'mouseout'}));
    function tt(t, n, e) {
      return (
        (t = nt(t, n, e)),
        function(n) {
          var e = n.relatedTarget;
          (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
            t.call(this, n);
        }
      );
    }
    function nt(t, n, e) {
      return function(r) {
        var o = Q;
        Q = r;
        try {
          t.call(this, this.__data__, n, e);
        } finally {
          Q = o;
        }
      };
    }
    function et(t) {
      return t
        .trim()
        .split(/^|\s+/)
        .map(function(t) {
          var n = '',
            e = t.indexOf('.');
          return (
            e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
            {type: t, name: n}
          );
        });
    }
    function rt(t) {
      return function() {
        var n = this.__on;
        if (n) {
          for (var e, r = 0, o = -1, i = n.length; r < i; ++r)
            (e = n[r]),
              (t.type && e.type !== t.type) || e.name !== t.name
                ? (n[++o] = e)
                : this.removeEventListener(e.type, e.listener, e.capture);
          ++o ? (n.length = o) : delete this.__on;
        }
      };
    }
    function ot(t, n, e) {
      var r = J.hasOwnProperty(t.type) ? tt : nt;
      return function(o, i, u) {
        var a,
          s = this.__on,
          c = r(n, i, u);
        if (s)
          for (var f = 0, l = s.length; f < l; ++f)
            if ((a = s[f]).type === t.type && a.name === t.name)
              return (
                this.removeEventListener(a.type, a.listener, a.capture),
                this.addEventListener(
                  a.type,
                  (a.listener = c),
                  (a.capture = e)
                ),
                void (a.value = n)
              );
        this.addEventListener(t.type, c, e),
          (a = {type: t.type, name: t.name, value: n, listener: c, capture: e}),
          s ? s.push(a) : (this.__on = [a]);
      };
    }
    function it(t, n, e, r) {
      var o = Q;
      (t.sourceEvent = Q), (Q = t);
      try {
        return n.apply(e, r);
      } finally {
        Q = o;
      }
    }
    function ut(t, n, e) {
      var r = U(t),
        o = r.CustomEvent;
      'function' == typeof o
        ? (o = new o(n, e))
        : ((o = r.document.createEvent('Event')),
          e
            ? (o.initEvent(n, e.bubbles, e.cancelable), (o.detail = e.detail))
            : o.initEvent(n, !1, !1)),
        t.dispatchEvent(o);
    }
    var at = [null];
    function st(t, n) {
      (this._groups = t), (this._parents = n);
    }
    function ct() {
      return new st([[document.documentElement]], at);
    }
    st.prototype = ct.prototype = {
      constructor: st,
      select: function(t) {
        'function' != typeof t && (t = s(t));
        for (
          var n = this._groups, e = n.length, r = new Array(e), o = 0;
          o < e;
          ++o
        )
          for (
            var i, u, a = n[o], c = a.length, f = (r[o] = new Array(c)), l = 0;
            l < c;
            ++l
          )
            (i = a[l]) &&
              (u = t.call(i, i.__data__, l, a)) &&
              ('__data__' in i && (u.__data__ = i.__data__), (f[l] = u));
        return new st(r, this._parents);
      },
      selectAll: function(t) {
        'function' != typeof t && (t = f(t));
        for (
          var n = this._groups, e = n.length, r = [], o = [], i = 0;
          i < e;
          ++i
        )
          for (var u, a = n[i], s = a.length, c = 0; c < s; ++c)
            (u = a[c]) && (r.push(t.call(u, u.__data__, c, a)), o.push(u));
        return new st(r, o);
      },
      filter: function(t) {
        'function' != typeof t && (t = l(t));
        for (
          var n = this._groups, e = n.length, r = new Array(e), o = 0;
          o < e;
          ++o
        )
          for (
            var i, u = n[o], a = u.length, s = (r[o] = []), c = 0;
            c < a;
            ++c
          )
            (i = u[c]) && t.call(i, i.__data__, c, u) && s.push(i);
        return new st(r, this._parents);
      },
      data: function(t, n) {
        if (!t)
          return (
            (p = new Array(this.size())),
            (f = -1),
            this.each(function(t) {
              p[++f] = t;
            }),
            p
          );
        var e,
          r = n ? d : R,
          o = this._parents,
          i = this._groups;
        'function' != typeof t &&
          ((e = t),
          (t = function() {
            return e;
          }));
        for (
          var u = i.length,
            a = new Array(u),
            s = new Array(u),
            c = new Array(u),
            f = 0;
          f < u;
          ++f
        ) {
          var l = o[f],
            C = i[f],
            h = C.length,
            p = t.call(l, l && l.__data__, f, o),
            E = p.length,
            _ = (s[f] = new Array(E)),
            N = (a[f] = new Array(E));
          r(l, C, _, N, (c[f] = new Array(h)), p, n);
          for (var m, v, y = 0, g = 0; y < E; ++y)
            if ((m = _[y])) {
              for (y >= g && (g = y + 1); !(v = N[g]) && ++g < E; );
              m._next = v || null;
            }
        }
        return ((a = new st(a, o))._enter = s), (a._exit = c), a;
      },
      enter: function() {
        return new st(this._enter || this._groups.map(C), this._parents);
      },
      exit: function() {
        return new st(this._exit || this._groups.map(C), this._parents);
      },
      join: function(t, n, e) {
        var r = this.enter(),
          o = this,
          i = this.exit();
        return (
          (r = 'function' == typeof t ? t(r) : r.append(t + '')),
          null != n && (o = n(o)),
          null == e ? i.remove() : e(i),
          r && o ? r.merge(o).order() : o
        );
      },
      merge: function(t) {
        for (
          var n = this._groups,
            e = t._groups,
            r = n.length,
            o = e.length,
            i = Math.min(r, o),
            u = new Array(r),
            a = 0;
          a < i;
          ++a
        )
          for (
            var s,
              c = n[a],
              f = e[a],
              l = c.length,
              C = (u[a] = new Array(l)),
              h = 0;
            h < l;
            ++h
          )
            (s = c[h] || f[h]) && (C[h] = s);
        for (; a < r; ++a) u[a] = n[a];
        return new st(u, this._parents);
      },
      order: function() {
        for (var t = this._groups, n = -1, e = t.length; ++n < e; )
          for (var r, o = t[n], i = o.length - 1, u = o[i]; --i >= 0; )
            (r = o[i]) &&
              (u &&
                4 ^ r.compareDocumentPosition(u) &&
                u.parentNode.insertBefore(r, u),
              (u = r));
        return this;
      },
      sort: function(t) {
        function n(n, e) {
          return n && e ? t(n.__data__, e.__data__) : !n - !e;
        }
        t || (t = E);
        for (
          var e = this._groups, r = e.length, o = new Array(r), i = 0;
          i < r;
          ++i
        ) {
          for (
            var u, a = e[i], s = a.length, c = (o[i] = new Array(s)), f = 0;
            f < s;
            ++f
          )
            (u = a[f]) && (c[f] = u);
          c.sort(n);
        }
        return new st(o, this._parents).order();
      },
      call: function() {
        var t = arguments[0];
        return (arguments[0] = this), t.apply(null, arguments), this;
      },
      nodes: function() {
        var t = new Array(this.size()),
          n = -1;
        return (
          this.each(function() {
            t[++n] = this;
          }),
          t
        );
      },
      node: function() {
        for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
          for (var r = t[n], o = 0, i = r.length; o < i; ++o) {
            var u = r[o];
            if (u) return u;
          }
        return null;
      },
      size: function() {
        var t = 0;
        return (
          this.each(function() {
            ++t;
          }),
          t
        );
      },
      empty: function() {
        return !this.node();
      },
      each: function(t) {
        for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
          for (var o, i = n[e], u = 0, a = i.length; u < a; ++u)
            (o = i[u]) && t.call(o, o.__data__, u, i);
        return this;
      },
      attr: function(t, n) {
        var e = i(t);
        if (arguments.length < 2) {
          var r = this.node();
          return e.local
            ? r.getAttributeNS(e.space, e.local)
            : r.getAttribute(e);
        }
        return this.each(
          (null == n
            ? e.local
              ? N
              : _
            : 'function' == typeof n
            ? e.local
              ? g
              : y
            : e.local
            ? v
            : m)(e, n)
        );
      },
      style: function(t, n, e) {
        return arguments.length > 1
          ? this.each(
              (null == n ? T : 'function' == typeof n ? w : Y)(
                t,
                n,
                null == e ? '' : e
              )
            )
          : A(this.node(), t);
      },
      property: function(t, n) {
        return arguments.length > 1
          ? this.each((null == n ? O : 'function' == typeof n ? D : I)(t, n))
          : this.node()[t];
      },
      classed: function(t, n) {
        var e = S(t + '');
        if (arguments.length < 2) {
          for (var r = b(this.node()), o = -1, i = e.length; ++o < i; )
            if (!r.contains(e[o])) return !1;
          return !0;
        }
        return this.each(('function' == typeof n ? H : n ? P : B)(e, n));
      },
      text: function(t) {
        return arguments.length
          ? this.each(null == t ? F : ('function' == typeof t ? K : j)(t))
          : this.node().textContent;
      },
      html: function(t) {
        return arguments.length
          ? this.each(null == t ? G : ('function' == typeof t ? Z : V)(t))
          : this.node().innerHTML;
      },
      raise: function() {
        return this.each(q);
      },
      lower: function() {
        return this.each(W);
      },
      append: function(t) {
        var n = 'function' == typeof t ? t : u(t);
        return this.select(function() {
          return this.appendChild(n.apply(this, arguments));
        });
      },
      insert: function(t, n) {
        var e = 'function' == typeof t ? t : u(t),
          r = null == n ? X : 'function' == typeof n ? n : s(n);
        return this.select(function() {
          return this.insertBefore(
            e.apply(this, arguments),
            r.apply(this, arguments) || null
          );
        });
      },
      remove: function() {
        return this.each(k);
      },
      clone: function(t) {
        return this.select(t ? $ : z);
      },
      datum: function(t) {
        return arguments.length
          ? this.property('__data__', t)
          : this.node().__data__;
      },
      on: function(t, n, e) {
        var r,
          o,
          i = et(t + ''),
          u = i.length;
        if (!(arguments.length < 2)) {
          for (a = n ? ot : rt, null == e && (e = !1), r = 0; r < u; ++r)
            this.each(a(i[r], n, e));
          return this;
        }
        var a = this.node().__on;
        if (a)
          for (var s, c = 0, f = a.length; c < f; ++c)
            for (r = 0, s = a[c]; r < u; ++r)
              if ((o = i[r]).type === s.type && o.name === s.name)
                return s.value;
      },
      dispatch: function(t, n) {
        return this.each(
          ('function' == typeof n
            ? function(t, n) {
                return function() {
                  return ut(this, t, n.apply(this, arguments));
                };
              }
            : function(t, n) {
                return function() {
                  return ut(this, t, n);
                };
              })(t, n)
        );
      },
    };
    var ft = ct,
      lt = function(t) {
        return 'string' == typeof t
          ? new st([[document.querySelector(t)]], [document.documentElement])
          : new st([[t]], at);
      },
      Ct = function(t) {
        return lt(u(t).call(document.documentElement));
      },
      ht = 0;
    function pt() {
      return new Rt();
    }
    function Rt() {
      this._ = '@' + (++ht).toString(36);
    }
    Rt.prototype = pt.prototype = {
      constructor: Rt,
      get: function(t) {
        for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
        return t[n];
      },
      set: function(t, n) {
        return (t[this._] = n);
      },
      remove: function(t) {
        return this._ in t && delete t[this._];
      },
      toString: function() {
        return this._;
      },
    };
    var dt = function() {
        for (var t, n = Q; (t = n.sourceEvent); ) n = t;
        return n;
      },
      Et = function(t, n) {
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
          var r = e.createSVGPoint();
          return (
            (r.x = n.clientX),
            (r.y = n.clientY),
            [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
          );
        }
        var o = t.getBoundingClientRect();
        return [
          n.clientX - o.left - t.clientLeft,
          n.clientY - o.top - t.clientTop,
        ];
      },
      _t = function(t) {
        var n = dt();
        return n.changedTouches && (n = n.changedTouches[0]), Et(t, n);
      },
      Nt = function(t) {
        return 'string' == typeof t
          ? new st([document.querySelectorAll(t)], [document.documentElement])
          : new st([null == t ? [] : t], at);
      },
      mt = function(t, n, e) {
        arguments.length < 3 && ((e = n), (n = dt().changedTouches));
        for (var r, o = 0, i = n ? n.length : 0; o < i; ++o)
          if ((r = n[o]).identifier === e) return Et(t, r);
        return null;
      },
      vt = function(t, n) {
        null == n && (n = dt().touches);
        for (var e = 0, r = n ? n.length : 0, o = new Array(r); e < r; ++e)
          o[e] = Et(t, n[e]);
        return o;
      };
    e.d(n, 'create', function() {
      return Ct;
    }),
      e.d(n, 'creator', function() {
        return u;
      }),
      e.d(n, 'local', function() {
        return pt;
      }),
      e.d(n, 'matcher', function() {
        return l;
      }),
      e.d(n, 'mouse', function() {
        return _t;
      }),
      e.d(n, 'namespace', function() {
        return i;
      }),
      e.d(n, 'namespaces', function() {
        return o;
      }),
      e.d(n, 'clientPoint', function() {
        return Et;
      }),
      e.d(n, 'select', function() {
        return lt;
      }),
      e.d(n, 'selectAll', function() {
        return Nt;
      }),
      e.d(n, 'selection', function() {
        return ft;
      }),
      e.d(n, 'selector', function() {
        return s;
      }),
      e.d(n, 'selectorAll', function() {
        return f;
      }),
      e.d(n, 'style', function() {
        return A;
      }),
      e.d(n, 'touch', function() {
        return mt;
      }),
      e.d(n, 'touches', function() {
        return vt;
      }),
      e.d(n, 'window', function() {
        return U;
      }),
      e.d(n, 'event', function() {
        return Q;
      }),
      e.d(n, 'customEvent', function() {
        return it;
      });
  },
  ,
  ,
  function(t, n, e) {
    'use strict';
    e.d(n, 'b', function() {
      return r;
    }),
      e.d(n, 'f', function() {
        return o;
      }),
      e.d(n, 'd', function() {
        return i;
      }),
      e.d(n, 'c', function() {
        return u;
      }),
      e.d(n, 'g', function() {
        return a;
      }),
      e.d(n, 'a', function() {
        return s;
      }),
      e.d(n, 'e', function() {
        return c;
      });
    const r = 'ERROR',
      o = 'PLEASE RESIZE',
      i = 'LOADING DATA',
      u = 'Something went wrong:',
      a =
        'This visualization deserves more space! Please make your box bigger.',
      s = '...please be patient...',
      c =
        'M0 50.6532C0 42.1596 2.52489 35.7895 7.57468 31.5427C12.6245 26.8712 19.7783 24.7479 28.6155 24.7479C34.0861 24.7479 38.715 25.5972 42.5024 27.2959C45.8689 28.9946 47.973 31.118 47.973 34.5154C47.973 36.2141 47.5522 37.4882 46.7105 38.7622C45.8689 40.0362 45.0273 41.3103 44.6064 41.3103C42.9232 40.4609 41.2399 40.0362 39.1358 39.1869C37.0318 38.7622 34.5069 38.3375 31.5612 38.3375C21.0408 38.3375 15.991 43.8583 15.991 54.8999V93.9702H0.841631C0 94.3949 0 50.6532 0 50.6532ZM100.154 74.0104H74.4844C67.3305 74.0104 62.2807 72.7364 58.4934 70.613C54.706 68.0649 53.0228 64.2428 53.0228 59.1467C53.0228 55.3246 53.8644 51.0778 55.5477 46.8311C57.2309 42.5843 59.335 38.3375 62.2807 34.0907C65.2264 29.844 68.1721 26.0219 71.9595 21.7751C75.7468 17.953 79.5341 14.5556 83.3215 11.5829C87.1088 8.61012 91.317 6.48674 95.1043 4.36335C98.8917 2.66464 102.679 1.81529 105.625 1.81529C108.57 1.81529 111.095 2.23996 112.779 2.66464C114.462 3.514 115.303 3.93867 115.724 3.93867V59.9961H119.932C125.403 59.9961 127.928 62.1194 127.928 66.7909C127.928 68.4896 127.507 70.1883 127.086 71.4623C126.665 72.7364 126.245 73.5857 125.824 74.0104H115.724V94.3949H100.575L100.154 74.0104ZM100.154 59.9961V17.5283C97.2084 19.227 93.8419 21.3504 90.0545 24.3232C86.2672 27.2959 82.9007 30.6933 79.955 34.0907C77.0092 37.4882 74.0635 41.3103 71.9595 45.1324C69.8554 48.9544 69.0137 51.9272 69.0137 54.8999C69.0137 57.0233 69.8554 58.722 71.5386 59.1467C73.2219 59.5714 75.326 59.9961 77.8509 59.9961H100.154ZM134.535 81.0045C135.793 80.1562 137.892 78.8839 140.41 76.7634L149.222 70.4018C152.58 67.8571 155.517 65.7366 158.874 63.192C162.231 60.6473 164.749 58.5268 166.848 56.4062C171.883 51.7411 176.08 47.5 178.598 43.2589C181.535 39.0179 182.794 34.7768 182.794 29.6875C182.794 27.567 182.375 25.4464 181.535 23.75C180.696 21.6295 179.437 19.933 178.178 18.6607C176.5 16.9643 174.821 16.1161 172.303 14.8438C169.785 13.9955 166.848 13.5714 163.49 13.5714C160.133 13.5714 157.196 13.9955 154.678 14.8438C152.16 15.692 150.062 16.9643 148.383 18.2366C146.704 19.5089 145.445 20.7812 144.606 22.4777C143.767 23.75 142.928 25.0223 142.508 25.8705C141.669 25.8705 140.829 25.4464 139.99 25.0223C139.151 24.5982 138.311 24.1741 137.472 23.3259C136.633 22.4777 135.793 21.6295 135.374 20.7812C134.954 19.933 134.535 18.6607 134.535 17.8125C134.535 16.5402 134.954 15.2679 135.374 13.9955C135.793 12.7232 136.633 11.875 137.052 10.6027C137.472 10.1786 138.311 8.90625 139.57 7.63393C140.829 6.36161 142.508 5.08929 145.026 4.24107C147.124 2.96875 150.062 2.12054 153.419 1.27232C156.776 0.424107 160.553 0 165.169 0C170.624 0 175.66 0.848214 179.857 2.12054C184.053 3.81696 187.83 5.51339 190.768 8.05804C193.705 10.6027 195.804 13.5714 197.482 17.3884C199.161 20.7813 199.58 24.5982 199.58 28.8393C199.58 31.808 199.161 34.7768 198.321 37.7455C197.482 40.7143 196.643 42.8348 195.384 45.3795C194.125 47.9241 192.866 49.6205 191.607 51.7411C189.928 53.8616 188.669 55.558 186.991 57.2545C185.312 58.9509 183.214 61.0714 180.696 63.192C178.178 65.7366 175.241 67.8571 172.303 70.4018C169.366 72.9464 166.848 75.067 164.33 76.7634C161.812 78.8839 159.714 80.1562 158.455 81.0045H200V95H134.535V81.0045Z';
  },
  function(t, n, e) {
    'use strict';
    var r = e(3);
    const o = {
      getMaxDimensions(t) {
        const n = {},
          e = document.getElementById(t);
        return (
          (n.w = e.offsetWidth),
          (n.h = e.offsetHeight),
          n.w >= n.h ? (n.max = n.h) : (n.max = n.w),
          n.w >= n.h
            ? (n.direction = 'horizontal')
            : (n.direction = 'vertical'),
          n
        );
      },
      renderErrorMessage(t, n, e) {
        const o = t
          .append('div')
          .attr('id', 'error')
          .append('div')
          .attr('class', 'row');
        o
          .append('svg')
          .attr('width', '40')
          .attr('height', '19')
          .attr('viewbox', '0 0 40 19')
          .attr('fill', 'none')
          .append('path')
          .attr('transform', 'scale(0.2)')
          .attr('d', r.e)
          .attr('fill', '#ABAF2C'),
          o
            .append('h2')
            .attr('id', 'title')
            .text(n),
          o
            .append('p')
            .attr('id', 'message')
            .text(e),
          console.log(`### ${n} : ${e} ###`);
      },
      getScreenCoords: (t, n, e) => ({
        x: e.e + t * e.a + n * e.c,
        y: e.f + t * e.b + n * e.d,
      }),
      getScreenCoordsCanvas: (t, n, e) => ({
        x: e.x + t * e.s,
        y: e.y + n * e.s,
      }),
      loadImage: async t =>
        new Promise((n, e) => {
          const r = new Image();
          r.addEventListener('load', () => n(r)),
            r.addEventListener('error', t => e(t)),
            (r.src = t);
        }),
    };
    n.a = o;
  },
  function(t, n, e) {
    'use strict';
    var r =
      (this && this.__assign) ||
      function() {
        return (r =
          Object.assign ||
          function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++)
              for (var o in (n = arguments[e]))
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            return t;
          }).apply(this, arguments);
      };
    Object.defineProperty(n, '__esModule', {value: !0});
    /*!
  Copyright 2018 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
    var o = e(10),
      i = e(7);
    !(function(t) {
      for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
    })(e(7)),
      (n.getWidth = function() {
        return document.body.clientWidth;
      }),
      (n.getHeight = function() {
        return document.documentElement.clientHeight;
      }),
      (n.getComponentId = function() {
        var t = o(window.location.href, !0).query;
        if (t.dscId) return t.dscId;
        throw new Error(
          'dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new'
        );
      }),
      (n.parseImage = function(t) {
        var n = t.split('  '),
          e = n[0],
          r = n[1];
        return {altText: n[2], originalUrl: e, proxiedUrl: r};
      });
    var u = function(t) {
        return (
          t.type === i.ConfigDataElementType.DIMENSION ||
          t.type === i.ConfigDataElementType.METRIC
        );
      },
      a = function(t) {
        return t === i.ConfigDataElementType.DIMENSION ? -1 : 1;
      },
      s = function(t) {
        var n = [];
        t.config.data.forEach(function(t) {
          t.elements.forEach(function(t) {
            n.push(t);
          });
        });
        var e,
          r = n.filter(u),
          o = ((e = function(t, n) {
            return a(t.type) - a(n.type);
          }),
          r
            .map(function(t, n) {
              return {item: t, index: n};
            })
            .sort(function(t, n) {
              return e(t.item, n.item) || t.index - n.index;
            })
            .map(function(t) {
              return t.item;
            })),
          i = [];
        return (
          o.forEach(function(t) {
            t.value.forEach(function() {
              return i.push(t.id);
            });
          }),
          i
        );
      },
      c = function(t) {
        var n,
          e = s(t),
          r = (((n = {})[i.TableType.DEFAULT] = []), n);
        return (
          t.dataResponse.tables.forEach(function(t) {
            var n = t.rows.map(
              (function(t) {
                return function(n) {
                  var e,
                    r,
                    o = {};
                  return (
                    ((e = n),
                    (r = t),
                    e.length < r.length
                      ? e.map(function(t, n) {
                          return [t, r[n]];
                        })
                      : r.map(function(t, n) {
                          return [e[n], t];
                        })).forEach(function(t) {
                      var n = t[0],
                        e = t[1];
                      void 0 === o[e] && (o[e] = []), o[e].push(n);
                    }, {}),
                    o
                  );
                };
              })(e)
            );
            r[t.id] = n;
          }),
          r
        );
      },
      f = function(t) {
        var e,
          o = n.fieldsByConfigId(t),
          u = s(t),
          a = {},
          c = u.map(function(t) {
            void 0 === a[t] ? (a[t] = 0) : a[t]++;
            var n = a[t],
              e = o[t][n];
            return r({}, e, {configId: t});
          }),
          f = (((e = {})[i.TableType.DEFAULT] = {headers: [], rows: []}), e);
        return (
          t.dataResponse.tables.forEach(function(t) {
            f[t.id] = {headers: c, rows: t.rows};
          }),
          f
        );
      };
    n.fieldsByConfigId = function(t) {
      var n = (function(t) {
          return t.fields.reduce(function(t, n) {
            return (t[n.id] = n), t;
          }, {});
        })(t),
        e = {};
      return (
        t.config.data.forEach(function(t) {
          t.elements.forEach(function(t) {
            e[t.id] = t.value.map(function(t) {
              return n[t];
            });
          });
        }),
        e
      );
    };
    var l = function(t) {
        var n = {};
        return (
          (t.config.style || []).forEach(function(t) {
            t.elements.forEach(function(t) {
              if (void 0 !== n[t.id])
                throw new Error(
                  "styleIds must be unique. Your styleId: '" +
                    t.id +
                    "' is used more than once."
                );
              n[t.id] = {value: t.value, defaultValue: t.defaultValue};
            });
          }, {}),
          n
        );
      },
      C = function(t) {
        return t.config.themeStyle;
      },
      h = function(t) {
        switch (t) {
          case i.DSInteractionType.FILTER:
            return i.InteractionType.FILTER;
        }
      },
      p = function(t) {
        var n = t.config.interactions;
        return void 0 === n
          ? {}
          : n.reduce(function(t, n) {
              var e = n.supportedActions.map(h),
                r = {type: h(n.value.type), data: n.value.data};
              return (t[n.id] = {value: r, supportedActions: e}), t;
            }, {});
      };
    (n.tableTransform = function(t) {
      return {
        tables: f(t),
        fields: n.fieldsByConfigId(t),
        style: l(t),
        theme: C(t),
        interactions: p(t),
      };
    }),
      (n.objectTransform = function(t) {
        return {
          tables: c(t),
          fields: n.fieldsByConfigId(t),
          style: l(t),
          theme: C(t),
          interactions: p(t),
        };
      }),
      (n.subscribeToData = function(t, e) {
        if (
          e.transform === n.tableTransform ||
          e.transform === n.objectTransform
        ) {
          var r = function(n) {
            n.data.type === i.MessageType.RENDER
              ? t(e.transform(n.data))
              : console.error(
                  'MessageType: ' +
                    n.data.type +
                    ' is not supported by this version of the library.'
                );
          };
          window.addEventListener('message', r);
          var o = {
            componentId: n.getComponentId(),
            type: i.ToDSMessageType.VIZ_READY,
          };
          return (
            window.parent.postMessage(o, '*'),
            function() {
              return window.removeEventListener('message', r);
            }
          );
        }
        throw new Error('Only the built in transform functions are supported.');
      }),
      (n.sendInteraction = function(t, e, r) {
        var o = n.getComponentId(),
          u = {
            type: i.ToDSMessageType.INTERACTION,
            id: t,
            data: r,
            componentId: o,
          };
        window.parent.postMessage(u, '*');
      }),
      (n.clearInteraction = function(t, e) {
        n.sendInteraction(t, e, void 0);
      });
  },
  ,
  function(t, n, e) {
    'use strict';
    Object.defineProperty(n, '__esModule', {value: !0}),
      (function(t) {
        (t.METRIC = 'METRIC'), (t.DIMENSION = 'DIMENSION');
      })(n.ConceptType || (n.ConceptType = {})),
      (function(t) {
        t.RENDER = 'RENDER';
      })(n.MessageType || (n.MessageType = {})),
      (function(t) {
        (t.YEAR = 'YEAR'),
          (t.YEAR_QUARTER = 'YEAR_QUARTER'),
          (t.YEAR_MONTH = 'YEAR_MONTH'),
          (t.YEAR_WEEK = 'YEAR_WEEK'),
          (t.YEAR_MONTH_DAY = 'YEAR_MONTH_DAY'),
          (t.YEAR_MONTH_DAY_HOUR = 'YEAR_MONTH_DAY_HOUR'),
          (t.QUARTER = 'QUARTER'),
          (t.MONTH = 'MONTH'),
          (t.WEEK = 'WEEK'),
          (t.MONTH_DAY = 'MONTH_DAY'),
          (t.DAY_OF_WEEK = 'DAY_OF_WEEK'),
          (t.DAY = 'DAY'),
          (t.HOUR = 'HOUR'),
          (t.MINUTE = 'MINUTE'),
          (t.DURATION = 'DURATION'),
          (t.COUNTRY = 'COUNTRY'),
          (t.COUNTRY_CODE = 'COUNTRY_CODE'),
          (t.CONTINENT = 'CONTINENT'),
          (t.CONTINENT_CODE = 'CONTINENT_CODE'),
          (t.SUB_CONTINENT = 'SUB_CONTINENT'),
          (t.SUB_CONTINENT_CODE = 'SUB_CONTINENT_CODE'),
          (t.REGION = 'REGION'),
          (t.REGION_CODE = 'REGION_CODE'),
          (t.CITY = 'CITY'),
          (t.CITY_CODE = 'CITY_CODE'),
          (t.METRO_CODE = 'METRO_CODE'),
          (t.LATITUDE_LONGITUDE = 'LATITUDE_LONGITUDE'),
          (t.NUMBER = 'NUMBER'),
          (t.PERCENT = 'PERCENT'),
          (t.TEXT = 'TEXT'),
          (t.BOOLEAN = 'BOOLEAN'),
          (t.URL = 'URL'),
          (t.IMAGE = 'IMAGE'),
          (t.CURRENCY_AED = 'CURRENCY_AED'),
          (t.CURRENCY_ALL = 'CURRENCY_ALL'),
          (t.CURRENCY_ARS = 'CURRENCY_ARS'),
          (t.CURRENCY_AUD = 'CURRENCY_AUD'),
          (t.CURRENCY_BDT = 'CURRENCY_BDT'),
          (t.CURRENCY_BGN = 'CURRENCY_BGN'),
          (t.CURRENCY_BOB = 'CURRENCY_BOB'),
          (t.CURRENCY_BRL = 'CURRENCY_BRL'),
          (t.CURRENCY_CAD = 'CURRENCY_CAD'),
          (t.CURRENCY_CDF = 'CURRENCY_CDF'),
          (t.CURRENCY_CHF = 'CURRENCY_CHF'),
          (t.CURRENCY_CLP = 'CURRENCY_CLP'),
          (t.CURRENCY_CNY = 'CURRENCY_CNY'),
          (t.CURRENCY_COP = 'CURRENCY_COP'),
          (t.CURRENCY_CRC = 'CURRENCY_CRC'),
          (t.CURRENCY_CZK = 'CURRENCY_CZK'),
          (t.CURRENCY_DKK = 'CURRENCY_DKK'),
          (t.CURRENCY_DOP = 'CURRENCY_DOP'),
          (t.CURRENCY_EGP = 'CURRENCY_EGP'),
          (t.CURRENCY_ETB = 'CURRENCY_ETB'),
          (t.CURRENCY_EUR = 'CURRENCY_EUR'),
          (t.CURRENCY_GBP = 'CURRENCY_GBP'),
          (t.CURRENCY_HKD = 'CURRENCY_HKD'),
          (t.CURRENCY_HRK = 'CURRENCY_HRK'),
          (t.CURRENCY_HUF = 'CURRENCY_HUF'),
          (t.CURRENCY_IDR = 'CURRENCY_IDR'),
          (t.CURRENCY_ILS = 'CURRENCY_ILS'),
          (t.CURRENCY_INR = 'CURRENCY_INR'),
          (t.CURRENCY_IRR = 'CURRENCY_IRR'),
          (t.CURRENCY_ISK = 'CURRENCY_ISK'),
          (t.CURRENCY_JMD = 'CURRENCY_JMD'),
          (t.CURRENCY_JPY = 'CURRENCY_JPY'),
          (t.CURRENCY_KRW = 'CURRENCY_KRW'),
          (t.CURRENCY_LKR = 'CURRENCY_LKR'),
          (t.CURRENCY_LTL = 'CURRENCY_LTL'),
          (t.CURRENCY_MNT = 'CURRENCY_MNT'),
          (t.CURRENCY_MVR = 'CURRENCY_MVR'),
          (t.CURRENCY_MXN = 'CURRENCY_MXN'),
          (t.CURRENCY_MYR = 'CURRENCY_MYR'),
          (t.CURRENCY_NOK = 'CURRENCY_NOK'),
          (t.CURRENCY_NZD = 'CURRENCY_NZD'),
          (t.CURRENCY_PAB = 'CURRENCY_PAB'),
          (t.CURRENCY_PEN = 'CURRENCY_PEN'),
          (t.CURRENCY_PHP = 'CURRENCY_PHP'),
          (t.CURRENCY_PKR = 'CURRENCY_PKR'),
          (t.CURRENCY_PLN = 'CURRENCY_PLN'),
          (t.CURRENCY_RON = 'CURRENCY_RON'),
          (t.CURRENCY_RSD = 'CURRENCY_RSD'),
          (t.CURRENCY_RUB = 'CURRENCY_RUB'),
          (t.CURRENCY_SAR = 'CURRENCY_SAR'),
          (t.CURRENCY_SEK = 'CURRENCY_SEK'),
          (t.CURRENCY_SGD = 'CURRENCY_SGD'),
          (t.CURRENCY_THB = 'CURRENCY_THB'),
          (t.CURRENCY_TRY = 'CURRENCY_TRY'),
          (t.CURRENCY_TWD = 'CURRENCY_TWD'),
          (t.CURRENCY_TZS = 'CURRENCY_TZS'),
          (t.CURRENCY_UAH = 'CURRENCY_UAH'),
          (t.CURRENCY_USD = 'CURRENCY_USD'),
          (t.CURRENCY_UYU = 'CURRENCY_UYU'),
          (t.CURRENCY_VEF = 'CURRENCY_VEF'),
          (t.CURRENCY_VND = 'CURRENCY_VND'),
          (t.CURRENCY_YER = 'CURRENCY_YER'),
          (t.CURRENCY_ZAR = 'CURRENCY_ZAR');
      })(n.FieldType || (n.FieldType = {})),
      (function(t) {
        (t.DEFAULT = 'DEFAULT'),
          (t.COMPARISON = 'COMPARISON'),
          (t.SUMMARY = 'SUMMARY');
      })(n.TableType || (n.TableType = {})),
      (function(t) {
        (t.METRIC = 'METRIC'),
          (t.DIMENSION = 'DIMENSION'),
          (t.SORT = 'SORT'),
          (t.MAX_RESULTS = 'MAX_RESULTS');
      })(n.ConfigDataElementType || (n.ConfigDataElementType = {})),
      (function(t) {
        (t.TEXTINPUT = 'TEXTINPUT'),
          (t.SELECT_SINGLE = 'SELECT_SINGLE'),
          (t.CHECKBOX = 'CHECKBOX'),
          (t.FONT_COLOR = 'FONT_COLOR'),
          (t.FONT_SIZE = 'FONT_SIZE'),
          (t.FONT_FAMILY = 'FONT_FAMILY'),
          (t.FILL_COLOR = 'FILL_COLOR'),
          (t.BORDER_COLOR = 'BORDER_COLOR'),
          (t.AXIS_COLOR = 'AXIS_COLOR'),
          (t.GRID_COLOR = 'GRID_COLOR'),
          (t.OPACITY = 'OPACITY'),
          (t.LINE_WEIGHT = 'LINE_WEIGHT'),
          (t.LINE_STYLE = 'LINE_STYLE'),
          (t.BORDER_RADIUS = 'BORDER_RADIUS'),
          (t.INTERVAL = 'INTERVAL'),
          (t.SELECT_RADIO = 'SELECT_RADIO');
      })(n.ConfigStyleElementType || (n.ConfigStyleElementType = {})),
      (function(t) {
        t.FILTER = 'FILTER';
      })(n.DSInteractionType || (n.DSInteractionType = {})),
      (function(t) {
        (t.VIZ_READY = 'vizReady'), (t.INTERACTION = 'vizAction');
      })(n.ToDSMessageType || (n.ToDSMessageType = {})),
      (function(t) {
        t.FILTER = 'FILTER';
      })(n.InteractionType || (n.InteractionType = {}));
  },
  function(t, n) {
    var e;
    e = (function() {
      return this;
    })();
    try {
      e = e || new Function('return this')();
    } catch (t) {
      'object' == typeof window && (e = window);
    }
    t.exports = e;
  },
  function(t, n, e) {
    'use strict';
    function r(t) {
      if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
      return t.blob();
    }
    e.r(n);
    var o = function(t, n) {
      return fetch(t, n).then(r);
    };
    function i(t) {
      if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
      return t.arrayBuffer();
    }
    var u = function(t, n) {
        return fetch(t, n).then(i);
      },
      a = {},
      s = {},
      c = 34,
      f = 10,
      l = 13;
    function C(t) {
      return new Function(
        'd',
        'return {' +
          t
            .map(function(t, n) {
              return JSON.stringify(t) + ': d[' + n + ']';
            })
            .join(',') +
          '}'
      );
    }
    function h(t) {
      var n = Object.create(null),
        e = [];
      return (
        t.forEach(function(t) {
          for (var r in t) r in n || e.push((n[r] = r));
        }),
        e
      );
    }
    function p(t, n) {
      var e = t + '',
        r = e.length;
      return r < n ? new Array(n - r + 1).join(0) + e : e;
    }
    function R(t) {
      var n,
        e = t.getUTCHours(),
        r = t.getUTCMinutes(),
        o = t.getUTCSeconds(),
        i = t.getUTCMilliseconds();
      return isNaN(t)
        ? 'Invalid Date'
        : ((n = t.getUTCFullYear()) < 0
            ? '-' + p(-n, 6)
            : n > 9999
            ? '+' + p(n, 6)
            : p(n, 4)) +
            '-' +
            p(t.getUTCMonth() + 1, 2) +
            '-' +
            p(t.getUTCDate(), 2) +
            (i
              ? 'T' +
                p(e, 2) +
                ':' +
                p(r, 2) +
                ':' +
                p(o, 2) +
                '.' +
                p(i, 3) +
                'Z'
              : o
              ? 'T' + p(e, 2) + ':' + p(r, 2) + ':' + p(o, 2) + 'Z'
              : r || e
              ? 'T' + p(e, 2) + ':' + p(r, 2) + 'Z'
              : '');
    }
    var d = function(t) {
        var n = new RegExp('["' + t + '\n\r]'),
          e = t.charCodeAt(0);
        function r(t, n) {
          var r,
            o = [],
            i = t.length,
            u = 0,
            C = 0,
            h = i <= 0,
            p = !1;
          function R() {
            if (h) return s;
            if (p) return (p = !1), a;
            var n,
              r,
              o = u;
            if (t.charCodeAt(o) === c) {
              for (
                ;
                (u++ < i && t.charCodeAt(u) !== c) || t.charCodeAt(++u) === c;

              );
              return (
                (n = u) >= i
                  ? (h = !0)
                  : (r = t.charCodeAt(u++)) === f
                  ? (p = !0)
                  : r === l && ((p = !0), t.charCodeAt(u) === f && ++u),
                t.slice(o + 1, n - 1).replace(/""/g, '"')
              );
            }
            for (; u < i; ) {
              if ((r = t.charCodeAt((n = u++))) === f) p = !0;
              else if (r === l) (p = !0), t.charCodeAt(u) === f && ++u;
              else if (r !== e) continue;
              return t.slice(o, n);
            }
            return (h = !0), t.slice(o, i);
          }
          for (
            t.charCodeAt(i - 1) === f && --i, t.charCodeAt(i - 1) === l && --i;
            (r = R()) !== s;

          ) {
            for (var d = []; r !== a && r !== s; ) d.push(r), (r = R());
            (n && null == (d = n(d, C++))) || o.push(d);
          }
          return o;
        }
        function o(n, e) {
          return n.map(function(n) {
            return e
              .map(function(t) {
                return u(n[t]);
              })
              .join(t);
          });
        }
        function i(n) {
          return n.map(u).join(t);
        }
        function u(t) {
          return null == t
            ? ''
            : t instanceof Date
            ? R(t)
            : n.test((t += ''))
            ? '"' + t.replace(/"/g, '""') + '"'
            : t;
        }
        return {
          parse: function(t, n) {
            var e,
              o,
              i = r(t, function(t, r) {
                if (e) return e(t, r - 1);
                (o = t),
                  (e = n
                    ? (function(t, n) {
                        var e = C(t);
                        return function(r, o) {
                          return n(e(r), o, t);
                        };
                      })(t, n)
                    : C(t));
              });
            return (i.columns = o || []), i;
          },
          parseRows: r,
          format: function(n, e) {
            return (
              null == e && (e = h(n)),
              [e.map(u).join(t)].concat(o(n, e)).join('\n')
            );
          },
          formatBody: function(t, n) {
            return null == n && (n = h(t)), o(t, n).join('\n');
          },
          formatRows: function(t) {
            return t.map(i).join('\n');
          },
        };
      },
      E = d(','),
      _ = E.parse,
      N = (E.parseRows, E.format, E.formatBody, E.formatRows, d('\t')),
      m = N.parse;
    N.parseRows, N.format, N.formatBody, N.formatRows;
    function v(t) {
      if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
      return t.text();
    }
    var y = function(t, n) {
      return fetch(t, n).then(v);
    };
    function g(t) {
      return function(n, e, r) {
        return (
          2 === arguments.length &&
            'function' == typeof e &&
            ((r = e), (e = void 0)),
          y(n, e).then(function(n) {
            return t(n, r);
          })
        );
      };
    }
    function U(t, n, e, r) {
      3 === arguments.length &&
        'function' == typeof e &&
        ((r = e), (e = void 0));
      var o = d(t);
      return y(n, e).then(function(t) {
        return o.parse(t, r);
      });
    }
    var T = g(_),
      Y = g(m),
      w = function(t, n) {
        return new Promise(function(e, r) {
          var o = new Image();
          for (var i in n) o[i] = n[i];
          (o.onerror = r),
            (o.onload = function() {
              e(o);
            }),
            (o.src = t);
        });
      };
    function A(t) {
      if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
      return t.json();
    }
    var O = function(t, n) {
      return fetch(t, n).then(A);
    };
    function I(t) {
      return function(n, e) {
        return y(n, e).then(function(n) {
          return new DOMParser().parseFromString(n, t);
        });
      };
    }
    var D = I('application/xml'),
      S = I('text/html'),
      b = I('image/svg+xml');
    e.d(n, 'blob', function() {
      return o;
    }),
      e.d(n, 'buffer', function() {
        return u;
      }),
      e.d(n, 'dsv', function() {
        return U;
      }),
      e.d(n, 'csv', function() {
        return T;
      }),
      e.d(n, 'tsv', function() {
        return Y;
      }),
      e.d(n, 'image', function() {
        return w;
      }),
      e.d(n, 'json', function() {
        return O;
      }),
      e.d(n, 'text', function() {
        return y;
      }),
      e.d(n, 'xml', function() {
        return D;
      }),
      e.d(n, 'html', function() {
        return S;
      }),
      e.d(n, 'svg', function() {
        return b;
      });
  },
  function(t, n, e) {
    'use strict';
    (function(n) {
      var r = e(11),
        o = e(12),
        i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
        a = new RegExp(
          '^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+'
        );
      function s(t) {
        return (t || '').toString().replace(a, '');
      }
      var c = [
          ['#', 'hash'],
          ['?', 'query'],
          function(t) {
            return t.replace('\\', '/');
          },
          ['/', 'pathname'],
          ['@', 'auth', 1],
          [NaN, 'host', void 0, 1, 1],
          [/:(\d+)$/, 'port', void 0, 1],
          [NaN, 'hostname', void 0, 1, 1],
        ],
        f = {hash: 1, query: 1};
      function l(t) {
        var e,
          r =
            ('undefined' != typeof window
              ? window
              : void 0 !== n
              ? n
              : 'undefined' != typeof self
              ? self
              : {}
            ).location || {},
          o = {},
          u = typeof (t = t || r);
        if ('blob:' === t.protocol) o = new h(unescape(t.pathname), {});
        else if ('string' === u) for (e in ((o = new h(t, {})), f)) delete o[e];
        else if ('object' === u) {
          for (e in t) e in f || (o[e] = t[e]);
          void 0 === o.slashes && (o.slashes = i.test(t.href));
        }
        return o;
      }
      function C(t) {
        t = s(t);
        var n = u.exec(t);
        return {
          protocol: n[1] ? n[1].toLowerCase() : '',
          slashes: !!n[2],
          rest: n[3],
        };
      }
      function h(t, n, e) {
        if (((t = s(t)), !(this instanceof h))) return new h(t, n, e);
        var i,
          u,
          a,
          f,
          p,
          R,
          d = c.slice(),
          E = typeof n,
          _ = this,
          N = 0;
        for (
          'object' !== E && 'string' !== E && ((e = n), (n = null)),
            e && 'function' != typeof e && (e = o.parse),
            n = l(n),
            i = !(u = C(t || '')).protocol && !u.slashes,
            _.slashes = u.slashes || (i && n.slashes),
            _.protocol = u.protocol || n.protocol || '',
            t = u.rest,
            u.slashes || (d[3] = [/(.*)/, 'pathname']);
          N < d.length;
          N++
        )
          'function' != typeof (f = d[N])
            ? ((a = f[0]),
              (R = f[1]),
              a != a
                ? (_[R] = t)
                : 'string' == typeof a
                ? ~(p = t.indexOf(a)) &&
                  ('number' == typeof f[2]
                    ? ((_[R] = t.slice(0, p)), (t = t.slice(p + f[2])))
                    : ((_[R] = t.slice(p)), (t = t.slice(0, p))))
                : (p = a.exec(t)) && ((_[R] = p[1]), (t = t.slice(0, p.index))),
              (_[R] = _[R] || (i && f[3] && n[R]) || ''),
              f[4] && (_[R] = _[R].toLowerCase()))
            : (t = f(t));
        e && (_.query = e(_.query)),
          i &&
            n.slashes &&
            '/' !== _.pathname.charAt(0) &&
            ('' !== _.pathname || '' !== n.pathname) &&
            (_.pathname = (function(t, n) {
              if ('' === t) return n;
              for (
                var e = (n || '/')
                    .split('/')
                    .slice(0, -1)
                    .concat(t.split('/')),
                  r = e.length,
                  o = e[r - 1],
                  i = !1,
                  u = 0;
                r--;

              )
                '.' === e[r]
                  ? e.splice(r, 1)
                  : '..' === e[r]
                  ? (e.splice(r, 1), u++)
                  : u && (0 === r && (i = !0), e.splice(r, 1), u--);
              return (
                i && e.unshift(''),
                ('.' !== o && '..' !== o) || e.push(''),
                e.join('/')
              );
            })(_.pathname, n.pathname)),
          r(_.port, _.protocol) || ((_.host = _.hostname), (_.port = '')),
          (_.username = _.password = ''),
          _.auth &&
            ((f = _.auth.split(':')),
            (_.username = f[0] || ''),
            (_.password = f[1] || '')),
          (_.origin =
            _.protocol && _.host && 'file:' !== _.protocol
              ? _.protocol + '//' + _.host
              : 'null'),
          (_.href = _.toString());
      }
      (h.prototype = {
        set: function(t, n, e) {
          var i = this;
          switch (t) {
            case 'query':
              'string' == typeof n && n.length && (n = (e || o.parse)(n)),
                (i[t] = n);
              break;
            case 'port':
              (i[t] = n),
                r(n, i.protocol)
                  ? n && (i.host = i.hostname + ':' + n)
                  : ((i.host = i.hostname), (i[t] = ''));
              break;
            case 'hostname':
              (i[t] = n), i.port && (n += ':' + i.port), (i.host = n);
              break;
            case 'host':
              (i[t] = n),
                /:\d+$/.test(n)
                  ? ((n = n.split(':')),
                    (i.port = n.pop()),
                    (i.hostname = n.join(':')))
                  : ((i.hostname = n), (i.port = ''));
              break;
            case 'protocol':
              (i.protocol = n.toLowerCase()), (i.slashes = !e);
              break;
            case 'pathname':
            case 'hash':
              if (n) {
                var u = 'pathname' === t ? '/' : '#';
                i[t] = n.charAt(0) !== u ? u + n : n;
              } else i[t] = n;
              break;
            default:
              i[t] = n;
          }
          for (var a = 0; a < c.length; a++) {
            var s = c[a];
            s[4] && (i[s[1]] = i[s[1]].toLowerCase());
          }
          return (
            (i.origin =
              i.protocol && i.host && 'file:' !== i.protocol
                ? i.protocol + '//' + i.host
                : 'null'),
            (i.href = i.toString()),
            i
          );
        },
        toString: function(t) {
          (t && 'function' == typeof t) || (t = o.stringify);
          var n,
            e = this,
            r = e.protocol;
          r && ':' !== r.charAt(r.length - 1) && (r += ':');
          var i = r + (e.slashes ? '//' : '');
          return (
            e.username &&
              ((i += e.username),
              e.password && (i += ':' + e.password),
              (i += '@')),
            (i += e.host + e.pathname),
            (n = 'object' == typeof e.query ? t(e.query) : e.query) &&
              (i += '?' !== n.charAt(0) ? '?' + n : n),
            e.hash && (i += e.hash),
            i
          );
        },
      }),
        (h.extractProtocol = C),
        (h.location = l),
        (h.trimLeft = s),
        (h.qs = o),
        (t.exports = h);
    }.call(this, e(8)));
  },
  function(t, n, e) {
    'use strict';
    t.exports = function(t, n) {
      if (((n = n.split(':')[0]), !(t = +t))) return !1;
      switch (n) {
        case 'http':
        case 'ws':
          return 80 !== t;
        case 'https':
        case 'wss':
          return 443 !== t;
        case 'ftp':
          return 21 !== t;
        case 'gopher':
          return 70 !== t;
        case 'file':
          return !1;
      }
      return 0 !== t;
    };
  },
  function(t, n, e) {
    'use strict';
    var r,
      o = Object.prototype.hasOwnProperty;
    function i(t) {
      try {
        return decodeURIComponent(t.replace(/\+/g, ' '));
      } catch (t) {
        return null;
      }
    }
    (n.stringify = function(t, n) {
      n = n || '';
      var e,
        i,
        u = [];
      for (i in ('string' != typeof n && (n = '?'), t))
        if (o.call(t, i)) {
          if (
            ((e = t[i]) || (null !== e && e !== r && !isNaN(e)) || (e = ''),
            (i = encodeURIComponent(i)),
            (e = encodeURIComponent(e)),
            null === i || null === e)
          )
            continue;
          u.push(i + '=' + e);
        }
      return u.length ? n + u.join('&') : '';
    }),
      (n.parse = function(t) {
        for (var n, e = /([^=?&]+)=?([^&]*)/g, r = {}; (n = e.exec(t)); ) {
          var o = i(n[1]),
            u = i(n[2]);
          null === o || null === u || o in r || (r[o] = u);
        }
        return r;
      });
  },
  ,
  ,
  ,
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = e(5),
      o = e(4),
      i = e(3);
    e(17);
    const u = Object.assign({}, e(9), e(0)),
      a = 'localhost',
      s = 200;
    function c(t) {
      f();
      const n = o.a.getMaxDimensions('body');
      if (n.max < s) return void C(i.b, i.g);
      const e = n.max,
        r = (function(t) {
          const n = t.tables.DEFAULT;
          if (
            (console.log(`Dataset contains ${n.length} records`), 0 == n.length)
          )
            return;
          const e = {tables: [1, 2, 3, 4, 5], fields: ['a', 'b']};
          return (
            (e.style = t.style),
            (e.theme = t.theme),
            (e.interactions = t.interactions),
            e
          );
        })(t);
      if (r) {
        const t = f();
        !(function(t) {
          const n = t
            .append('div')
            .attr('id', 'tooltip')
            .attr('class', 'tooltip');
          n.append('span').attr('id', 'title'),
            n.append('span').attr('id', 'count');
        })(t),
          t
            .append('svg')
            .attr('height', 150)
            .attr('width', e)
            .attr('x', 0)
            .attr('y', 0)
            .append('text')
            .attr('text-anchor', 'middle')
            .text(`dataset contains ${r.tables.length} records`)
            .attr('height', 40)
            .attr('width', 250)
            .attr('x', e / 2)
            .attr('y', 30);
      } else C(i.d, i.a);
    }
    function f() {
      const t = u.select('body').attr('id', 'body');
      return (
        u
          .select('body')
          .selectAll('svg')
          .remove(),
        u.select('#tooltip').remove(),
        t
      );
    }
    function l(t) {
      if (a) c(t);
      else
        try {
          c(t);
        } catch (t) {
          C(i.b, `${i.c} ${t}`);
        }
    }
    function C(t, n) {
      const e = f()
        .append('div')
        .attr('id', 'error')
        .append('div')
        .attr('class', 'row');
      e
        .append('h2')
        .attr('id', 'title')
        .text(t),
        e
          .append('p')
          .attr('id', 'message')
          .text(n),
        console.log(`### ${t} : ${n} ###`);
    }
    !(async function() {
      window.location.hostname == a
        ? l(await u.json('./data/DS-data.json'))
        : r.subscribeToData(l, {transform: r.objectTransform});
    })();
  },
  function(t, n, e) {},
]);
