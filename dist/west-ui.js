import { jsx as $a } from "react/jsx-runtime";
import * as h from "react";
import D, { version as _a, isValidElement as Ra, useContext as xe, createContext as gn, useRef as Ze, useLayoutEffect as Ma, useEffect as Je, forwardRef as Ro, useMemo as ja, useState as Bn, Children as Ia, createRef as La } from "react";
import * as Na from "react-dom";
import kn from "react-dom";
const Ba = "_button_1mcxb_1", ka = {
  button: Ba
};
function Ha(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mo = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", a = 0; a < arguments.length; a++) {
        var c = arguments[a];
        c && (i = o(i, n(c)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var a = "";
      for (var c in i)
        t.call(i, c) && i[c] && (a = o(a, c));
      return a;
    }
    function o(i, a) {
      return a ? i ? i + " " + a : i + a : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Mo);
var Da = Mo.exports;
const me = /* @__PURE__ */ Ha(Da);
function ft() {
  return ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ft.apply(null, arguments);
}
var kr = { exports: {} }, U = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn;
function za() {
  if (Hn) return U;
  Hn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), C;
  C = Symbol.for("react.module.reference");
  function m(p) {
    if (typeof p == "object" && p !== null) {
      var A = p.$$typeof;
      switch (A) {
        case e:
          switch (p = p.type, p) {
            case r:
            case o:
            case n:
            case s:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case a:
                case l:
                case d:
                case f:
                case i:
                  return p;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  return U.ContextConsumer = a, U.ContextProvider = i, U.Element = e, U.ForwardRef = l, U.Fragment = r, U.Lazy = d, U.Memo = f, U.Portal = t, U.Profiler = o, U.StrictMode = n, U.Suspense = s, U.SuspenseList = u, U.isAsyncMode = function() {
    return !1;
  }, U.isConcurrentMode = function() {
    return !1;
  }, U.isContextConsumer = function(p) {
    return m(p) === a;
  }, U.isContextProvider = function(p) {
    return m(p) === i;
  }, U.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, U.isForwardRef = function(p) {
    return m(p) === l;
  }, U.isFragment = function(p) {
    return m(p) === r;
  }, U.isLazy = function(p) {
    return m(p) === d;
  }, U.isMemo = function(p) {
    return m(p) === f;
  }, U.isPortal = function(p) {
    return m(p) === t;
  }, U.isProfiler = function(p) {
    return m(p) === o;
  }, U.isStrictMode = function(p) {
    return m(p) === n;
  }, U.isSuspense = function(p) {
    return m(p) === s;
  }, U.isSuspenseList = function(p) {
    return m(p) === u;
  }, U.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === n || p === s || p === u || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === f || p.$$typeof === i || p.$$typeof === a || p.$$typeof === l || p.$$typeof === C || p.getModuleId !== void 0);
  }, U.typeOf = m, U;
}
var X = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dn;
function Fa() {
  return Dn || (Dn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), C = !1, m = !1, p = !1, A = !1, E = !1, _;
    _ = Symbol.for("react.module.reference");
    function $(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === o || E || M === n || M === s || M === u || A || M === g || C || m || p || typeof M == "object" && M !== null && (M.$$typeof === d || M.$$typeof === f || M.$$typeof === i || M.$$typeof === a || M.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === _ || M.getModuleId !== void 0));
    }
    function w(M) {
      if (typeof M == "object" && M !== null) {
        var Oe = M.$$typeof;
        switch (Oe) {
          case e:
            var te = M.type;
            switch (te) {
              case r:
              case o:
              case n:
              case s:
              case u:
                return te;
              default:
                var Te = te && te.$$typeof;
                switch (Te) {
                  case c:
                  case a:
                  case l:
                  case d:
                  case f:
                  case i:
                    return Te;
                  default:
                    return Oe;
                }
            }
          case t:
            return Oe;
        }
      }
    }
    var O = a, S = i, P = e, N = l, F = r, G = d, H = f, B = t, j = o, W = n, y = s, v = u, b = !1, x = !1;
    function R(M) {
      return b || (b = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function T(M) {
      return x || (x = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function I(M) {
      return w(M) === a;
    }
    function k(M) {
      return w(M) === i;
    }
    function K(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function ne(M) {
      return w(M) === l;
    }
    function ce(M) {
      return w(M) === r;
    }
    function Q(M) {
      return w(M) === d;
    }
    function Be(M) {
      return w(M) === f;
    }
    function ke(M) {
      return w(M) === t;
    }
    function Ke(M) {
      return w(M) === o;
    }
    function we(M) {
      return w(M) === n;
    }
    function pe(M) {
      return w(M) === s;
    }
    function He(M) {
      return w(M) === u;
    }
    X.ContextConsumer = O, X.ContextProvider = S, X.Element = P, X.ForwardRef = N, X.Fragment = F, X.Lazy = G, X.Memo = H, X.Portal = B, X.Profiler = j, X.StrictMode = W, X.Suspense = y, X.SuspenseList = v, X.isAsyncMode = R, X.isConcurrentMode = T, X.isContextConsumer = I, X.isContextProvider = k, X.isElement = K, X.isForwardRef = ne, X.isFragment = ce, X.isLazy = Q, X.isMemo = Be, X.isPortal = ke, X.isProfiler = Ke, X.isStrictMode = we, X.isSuspense = pe, X.isSuspenseList = He, X.isValidElementType = $, X.typeOf = w;
  }()), X;
}
process.env.NODE_ENV === "production" ? kr.exports = za() : kr.exports = Fa();
var Kt = kr.exports, Hr = {}, hn = [], Va = function(t) {
  hn.push(t);
};
function mn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = hn.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Wa(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = hn.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function jo() {
  Hr = {};
}
function Io(e, t, r) {
  !t && !Hr[r] && (e(!1, r), Hr[r] = !0);
}
function Ue(e, t) {
  Io(mn, e, t);
}
function Ga(e, t) {
  Io(Wa, e, t);
}
Ue.preMessage = Va;
Ue.resetWarned = jo;
Ue.noteOnce = Ga;
function q(e) {
  "@babel/helpers - typeof";
  return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, q(e);
}
function Ua(e, t) {
  if (q(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (q(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lo(e) {
  var t = Ua(e, "string");
  return q(t) == "symbol" ? t : t + "";
}
function V(e, t, r) {
  return (t = Lo(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function zn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zn(Object(r), !0).forEach(function(n) {
      V(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Fn(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Xa(e) {
  return e && q(e) === "object" && Fn(e.nativeElement) ? e.nativeElement : Fn(e) ? e : null;
}
function Ka(e) {
  var t = Xa(e);
  if (t)
    return t;
  if (e instanceof D.Component) {
    var r;
    return (r = kn.findDOMNode) === null || r === void 0 ? void 0 : r.call(kn, e);
  }
  return null;
}
function No(e, t, r) {
  var n = h.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var Bo = function(t, r) {
  typeof t == "function" ? t(r) : q(t) === "object" && t && "current" in t && (t.current = r);
}, bn = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    r.forEach(function(a) {
      Bo(a, i);
    });
  };
}, ko = function(t) {
  var r, n, o = Kt.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== Kt.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== Kt.ForwardRef);
};
function Vn(e) {
  return /* @__PURE__ */ Ra(e) && !Kt.isFragment(e);
}
Number(_a.split(".")[0]) >= 19;
function Ie(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Wn(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Lo(n.key), n);
  }
}
function Le(e, t, r) {
  return t && Wn(e.prototype, t), r && Wn(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Dr(e, t) {
  return Dr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Dr(e, t);
}
function sr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Dr(e, t);
}
function dt(e) {
  return dt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, dt(e);
}
function yn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yn = function() {
    return !!e;
  })();
}
function zr(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ho(e, t) {
  if (t && (q(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return zr(e);
}
function Do(e) {
  var t = yn();
  return function() {
    var r, n = dt(e);
    if (t) {
      var o = dt(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return Ho(this, r);
  };
}
function qa(e, t) {
  var r = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Fr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ya(e) {
  if (Array.isArray(e)) return Fr(e);
}
function zo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Sn(e, t) {
  if (e) {
    if (typeof e == "string") return Fr(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Fr(e, t) : void 0;
  }
}
function Qa() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Me(e) {
  return Ya(e) || zo(e) || Sn(e) || Qa();
}
var Fo = function(t) {
  return +setTimeout(t, 16);
}, Vo = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Fo = function(t) {
  return window.requestAnimationFrame(t);
}, Vo = function(t) {
  return window.cancelAnimationFrame(t);
});
var Gn = 0, lr = /* @__PURE__ */ new Map();
function Wo(e) {
  lr.delete(e);
}
var We = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Gn += 1;
  var n = Gn;
  function o(i) {
    if (i === 0)
      Wo(n), t();
    else {
      var a = Fo(function() {
        o(i - 1);
      });
      lr.set(n, a);
    }
  }
  return o(r), n;
};
We.cancel = function(e) {
  var t = lr.get(e);
  return Wo(e), Vo(t);
};
process.env.NODE_ENV !== "production" && (We.ids = function() {
  return lr;
});
function Go(e) {
  if (Array.isArray(e)) return e;
}
function Za(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, i, a, c = [], l = !0, s = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (u) {
      s = !0, o = u;
    } finally {
      try {
        if (!l && r.return != null && (a = r.return(), Object(a) !== a)) return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function Uo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z(e, t) {
  return Go(e) || Za(e, t) || Sn(e, t) || Uo();
}
function At(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Ne() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ja(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var Un = "data-rc-order", Xn = "data-rc-priority", ec = "rc-util-key", Vr = /* @__PURE__ */ new Map();
function Xo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : ec;
}
function ur(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function tc(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Cn(e) {
  return Array.from((Vr.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Ko(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ne())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = tc(n), c = a === "prependQueue", l = document.createElement("style");
  l.setAttribute(Un, a), c && i && l.setAttribute(Xn, "".concat(i)), r != null && r.nonce && (l.nonce = r == null ? void 0 : r.nonce), l.innerHTML = e;
  var s = ur(t), u = s.firstChild;
  if (n) {
    if (c) {
      var f = (t.styles || Cn(s)).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Un)))
          return !1;
        var g = Number(d.getAttribute(Xn) || 0);
        return i >= g;
      });
      if (f.length)
        return s.insertBefore(l, f[f.length - 1].nextSibling), l;
    }
    s.insertBefore(l, u);
  } else
    s.appendChild(l);
  return l;
}
function qo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ur(t);
  return (t.styles || Cn(r)).find(function(n) {
    return n.getAttribute(Xo(t)) === e;
  });
}
function Yo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = qo(e, t);
  if (r) {
    var n = ur(t);
    n.removeChild(r);
  }
}
function rc(e, t) {
  var r = Vr.get(e);
  if (!r || !Ja(document, r)) {
    var n = Ko("", t), o = n.parentNode;
    Vr.set(e, o), e.removeChild(n);
  }
}
function et(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = ur(r), o = Cn(n), i = L(L({}, r), {}, {
    styles: o
  });
  rc(n, i);
  var a = qo(t, i);
  if (a) {
    var c, l;
    if ((c = i.csp) !== null && c !== void 0 && c.nonce && a.nonce !== ((l = i.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var s;
      a.nonce = (s = i.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return a.innerHTML !== e && (a.innerHTML = e), a;
  }
  var u = Ko(e, i);
  return u.setAttribute(Xo(i), t), u;
}
function nc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e[n];
  }
  return r;
}
function Pt(e, t) {
  if (e == null) return {};
  var r, n, o = nc(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function oc(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(i, a) {
    var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = n.has(i);
    if (Ue(!l, "Warning: There may be circular references"), l)
      return !1;
    if (i === a)
      return !0;
    if (r && c > 1)
      return !1;
    n.add(i);
    var s = c + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length)
        return !1;
      for (var u = 0; u < i.length; u++)
        if (!o(i[u], a[u], s))
          return !1;
      return !0;
    }
    if (i && a && q(i) === "object" && q(a) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(a).length ? !1 : f.every(function(d) {
        return o(i[d], a[d], s);
      });
    }
    return !1;
  }
  return o(e, t);
}
var ic = "%";
function Wr(e) {
  return e.join(ic);
}
var ac = /* @__PURE__ */ function() {
  function e(t) {
    Ie(this, e), V(this, "instanceId", void 0), V(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Le(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(Wr(r));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(r) {
      return this.cache.get(r) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      return this.opUpdate(Wr(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var o = this.cache.get(r), i = n(o);
      i === null ? this.cache.delete(r) : this.cache.set(r, i);
    }
  }]), e;
}(), pt = "data-token-hash", be = "data-css-hash", cc = "data-cache-path", Fe = "__cssinjs_instance__";
function sc() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(be, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Fe] = o[Fe] || e, o[Fe] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(be, "]"))).forEach(function(o) {
      var i = o.getAttribute(be);
      if (n[i]) {
        if (o[Fe] === e) {
          var a;
          (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
        }
      } else
        n[i] = !0;
    });
  }
  return new ac(e);
}
var lc = /* @__PURE__ */ h.createContext({
  hashPriority: "low",
  cache: sc(),
  defaultCache: !0
});
const fr = lc;
function uc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var En = /* @__PURE__ */ function() {
  function e() {
    Ie(this, e), V(this, "cache", void 0), V(this, "keys", void 0), V(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Le(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = {
        map: this.cache
      };
      return r.forEach(function(c) {
        if (!a)
          a = void 0;
        else {
          var l;
          a = (l = a) === null || l === void 0 || (l = l.map) === null || l === void 0 ? void 0 : l.get(c);
        }
      }), (n = a) !== null && n !== void 0 && n.value && i && (a.value[1] = this.cacheCallTimes++), (o = a) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var o = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(s, u) {
            var f = z(s, 2), d = f[1];
            return o.internalGet(u)[1] < d ? [u, o.internalGet(u)[1]] : s;
          }, [this.keys[0], this.cacheCallTimes]), a = z(i, 1), c = a[0];
          this.delete(c);
        }
        this.keys.push(r);
      }
      var l = this.cache;
      r.forEach(function(s, u) {
        if (u === r.length - 1)
          l.set(s, {
            value: [n, o.cacheCallTimes++]
          });
        else {
          var f = l.get(s);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : l.set(s, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(s).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var o = r.get(n[0]);
      if (n.length === 1) {
        var i;
        return o.map ? r.set(n[0], {
          map: o.map
        }) : r.delete(n[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0];
      }
      var a = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), a;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !uc(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
V(En, "MAX_CACHE_SIZE", 20);
V(En, "MAX_CACHE_OFFSET", 5);
var Kn = 0, Qo = /* @__PURE__ */ function() {
  function e(t) {
    Ie(this, e), V(this, "derivatives", void 0), V(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Kn, t.length === 0 && mn(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Kn += 1;
  }
  return Le(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), Cr = new En();
function Gr(e) {
  var t = Array.isArray(e) ? e : [e];
  return Cr.has(t) || Cr.set(t, new Qo(t)), Cr.get(t);
}
var fc = /* @__PURE__ */ new WeakMap(), Er = {};
function dc(e, t) {
  for (var r = fc, n = 0; n < t.length; n += 1) {
    var o = t[n];
    r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
  }
  return r.has(Er) || r.set(Er, e()), r.get(Er);
}
var qn = /* @__PURE__ */ new WeakMap();
function Ot(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = qn.get(e) || "";
  return r || (Object.keys(e).forEach(function(n) {
    var o = e[n];
    r += n, o instanceof Qo ? r += o.id : o && q(o) === "object" ? r += Ot(o, t) : r += o;
  }), t && (r = At(r)), qn.set(e, r)), r;
}
function Yn(e, t) {
  return At("".concat(t, "_").concat(Ot(e, !0)));
}
var Ur = Ne();
function Ge(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function nr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var i = L(L({}, n), {}, V(V({}, pt, t), be, r)), a = Object.keys(i).map(function(c) {
    var l = i[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var qt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, pc = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var i = z(o, 2), a = i[0], c = i[1];
    return "".concat(a, ":").concat(c, ";");
  }).join(""), "}") : "";
}, Zo = function(t, r, n) {
  var o = {}, i = {};
  return Object.entries(t).forEach(function(a) {
    var c, l, s = z(a, 2), u = s[0], f = s[1];
    if (n != null && (c = n.preserve) !== null && c !== void 0 && c[u])
      i[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(n != null && (l = n.ignore) !== null && l !== void 0 && l[u])) {
      var d, g = qt(u, n == null ? void 0 : n.prefix);
      o[g] = typeof f == "number" && !(n != null && (d = n.unitless) !== null && d !== void 0 && d[u]) ? "".concat(f, "px") : String(f), i[u] = "var(".concat(g, ")");
    }
  }), [i, pc(o, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, Qn = process.env.NODE_ENV !== "test" && Ne() ? h.useLayoutEffect : h.useEffect, vc = function(t, r) {
  var n = h.useRef(!0);
  Qn(function() {
    return t(n.current);
  }, r), Qn(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, gc = L({}, h), Zn = gc.useInsertionEffect, hc = function(t, r, n) {
  h.useMemo(t, n), vc(function() {
    return r(!0);
  }, n);
}, mc = Zn ? function(e, t, r) {
  return Zn(function() {
    return e(), t();
  }, r);
} : hc;
const bc = mc;
var yc = L({}, h), Sc = yc.useInsertionEffect, Cc = function(t) {
  var r = [], n = !1;
  function o(i) {
    if (n) {
      process.env.NODE_ENV !== "production" && mn(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(i);
  }
  return h.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(i) {
        return i();
      });
    };
  }, t), o;
}, Ec = function() {
  return function(t) {
    t();
  };
}, xc = typeof Sc < "u" ? Cc : Ec;
const wc = xc;
function Oc() {
  return !1;
}
var Xr = !1;
function Tc() {
  return Xr;
}
const Ac = process.env.NODE_ENV === "production" ? Oc : Tc;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var xr = window;
  if (typeof xr.webpackHotUpdate == "function") {
    var Pc = xr.webpackHotUpdate;
    xr.webpackHotUpdate = function() {
      return Xr = !0, setTimeout(function() {
        Xr = !1;
      }, 0), Pc.apply(void 0, arguments);
    };
  }
}
function xn(e, t, r, n, o) {
  var i = h.useContext(fr), a = i.cache, c = [e].concat(Me(t)), l = Wr(c), s = wc([l]), u = Ac(), f = function(m) {
    a.opUpdate(l, function(p) {
      var A = p || [void 0, void 0], E = z(A, 2), _ = E[0], $ = _ === void 0 ? 0 : _, w = E[1], O = w;
      process.env.NODE_ENV !== "production" && w && u && (n == null || n(O, u), O = null);
      var S = O || r(), P = [$, S];
      return m ? m(P) : P;
    });
  };
  h.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var d = a.opGet(l);
  process.env.NODE_ENV !== "production" && !d && (f(), d = a.opGet(l));
  var g = d[1];
  return bc(function() {
    o == null || o(g);
  }, function(C) {
    return f(function(m) {
      var p = z(m, 2), A = p[0], E = p[1];
      return C && A === 0 && (o == null || o(g)), [A + 1, E];
    }), function() {
      a.opUpdate(l, function(m) {
        var p = m || [], A = z(p, 2), E = A[0], _ = E === void 0 ? 0 : E, $ = A[1], w = _ - 1;
        return w === 0 ? (s(function() {
          (C || !a.opGet(l)) && (n == null || n($, !1));
        }), null) : [_ - 1, $];
      });
    };
  }, [l]), g;
}
var $c = {}, _c = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Ye = /* @__PURE__ */ new Map();
function Rc(e) {
  Ye.set(e, (Ye.get(e) || 0) + 1);
}
function Mc(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(pt, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[Fe] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var jc = 0;
function Ic(e, t) {
  Ye.set(e, (Ye.get(e) || 0) - 1);
  var r = Array.from(Ye.keys()), n = r.filter(function(o) {
    var i = Ye.get(o) || 0;
    return i <= 0;
  });
  r.length - n.length > jc && n.forEach(function(o) {
    Mc(o, t), Ye.delete(o);
  });
}
var Lc = function(t, r, n, o) {
  var i = n.getDerivativeToken(t), a = L(L({}, i), r);
  return o && (a = o(a)), a;
}, Jo = "token";
function Nc(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = xe(fr), o = n.cache.instanceId, i = n.container, a = r.salt, c = a === void 0 ? "" : a, l = r.override, s = l === void 0 ? $c : l, u = r.formatToken, f = r.getComputedToken, d = r.cssVar, g = dc(function() {
    return Object.assign.apply(Object, [{}].concat(Me(t)));
  }, t), C = Ot(g), m = Ot(s), p = d ? Ot(d) : "", A = xn(Jo, [c, e.id, C, m, p], function() {
    var E, _ = f ? f(g, s, e) : Lc(g, s, e, u), $ = L({}, _), w = "";
    if (d) {
      var O = Zo(_, d.key, {
        prefix: d.prefix,
        ignore: d.ignore,
        unitless: d.unitless,
        preserve: d.preserve
      }), S = z(O, 2);
      _ = S[0], w = S[1];
    }
    var P = Yn(_, c);
    _._tokenKey = P, $._tokenKey = Yn($, c);
    var N = (E = d == null ? void 0 : d.key) !== null && E !== void 0 ? E : P;
    _._themeKey = N, Rc(N);
    var F = "".concat(_c, "-").concat(At(P));
    return _._hashId = F, [_, F, $, w, (d == null ? void 0 : d.key) || ""];
  }, function(E) {
    Ic(E[0]._themeKey, o);
  }, function(E) {
    var _ = z(E, 4), $ = _[0], w = _[3];
    if (d && w) {
      var O = et(w, At("css-variables-".concat($._themeKey)), {
        mark: be,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      O[Fe] = o, O.setAttribute(pt, $._themeKey);
    }
  });
  return A;
}
var Bc = function(t, r, n) {
  var o = z(t, 5), i = o[2], a = o[3], c = o[4], l = n || {}, s = l.plain;
  if (!a)
    return null;
  var u = i._tokenKey, f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, g = nr(a, c, u, d, s);
  return [f, u, g];
}, kc = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ei = "comm", ti = "rule", ri = "decl", Hc = "@import", Dc = "@keyframes", zc = "@layer", ni = Math.abs, wn = String.fromCharCode;
function oi(e) {
  return e.trim();
}
function Yt(e, t, r) {
  return e.replace(t, r);
}
function Fc(e, t, r) {
  return e.indexOf(t, r);
}
function $t(e, t) {
  return e.charCodeAt(t) | 0;
}
function _t(e, t, r) {
  return e.slice(t, r);
}
function Re(e) {
  return e.length;
}
function Vc(e) {
  return e.length;
}
function Bt(e, t) {
  return t.push(e), e;
}
var dr = 1, vt = 1, ii = 0, de = 0, ee = 0, ht = "";
function On(e, t, r, n, o, i, a, c) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: dr, column: vt, length: a, return: "", siblings: c };
}
function Wc() {
  return ee;
}
function Gc() {
  return ee = de > 0 ? $t(ht, --de) : 0, vt--, ee === 10 && (vt = 1, dr--), ee;
}
function ye() {
  return ee = de < ii ? $t(ht, de++) : 0, vt++, ee === 10 && (vt = 1, dr++), ee;
}
function tt() {
  return $t(ht, de);
}
function Qt() {
  return de;
}
function pr(e, t) {
  return _t(ht, e, t);
}
function Kr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Uc(e) {
  return dr = vt = 1, ii = Re(ht = e), de = 0, [];
}
function Xc(e) {
  return ht = "", e;
}
function wr(e) {
  return oi(pr(de - 1, qr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Kc(e) {
  for (; (ee = tt()) && ee < 33; )
    ye();
  return Kr(e) > 2 || Kr(ee) > 3 ? "" : " ";
}
function qc(e, t) {
  for (; --t && ye() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return pr(e, Qt() + (t < 6 && tt() == 32 && ye() == 32));
}
function qr(e) {
  for (; ye(); )
    switch (ee) {
      case e:
        return de;
      case 34:
      case 39:
        e !== 34 && e !== 39 && qr(ee);
        break;
      case 40:
        e === 41 && qr(e);
        break;
      case 92:
        ye();
        break;
    }
  return de;
}
function Yc(e, t) {
  for (; ye() && e + ee !== 57; )
    if (e + ee === 84 && tt() === 47)
      break;
  return "/*" + pr(t, de - 1) + "*" + wn(e === 47 ? e : ye());
}
function Qc(e) {
  for (; !Kr(tt()); )
    ye();
  return pr(e, de);
}
function Zc(e) {
  return Xc(Zt("", null, null, null, [""], e = Uc(e), 0, [0], e));
}
function Zt(e, t, r, n, o, i, a, c, l) {
  for (var s = 0, u = 0, f = a, d = 0, g = 0, C = 0, m = 1, p = 1, A = 1, E = 0, _ = "", $ = o, w = i, O = n, S = _; p; )
    switch (C = E, E = ye()) {
      case 40:
        if (C != 108 && $t(S, f - 1) == 58) {
          Fc(S += Yt(wr(E), "&", "&\f"), "&\f", ni(s ? c[s - 1] : 0)) != -1 && (A = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += wr(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Kc(C);
        break;
      case 92:
        S += qc(Qt() - 1, 7);
        continue;
      case 47:
        switch (tt()) {
          case 42:
          case 47:
            Bt(Jc(Yc(ye(), Qt()), t, r, l), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * m:
        c[s++] = Re(S) * A;
      case 125 * m:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            p = 0;
          case 59 + u:
            A == -1 && (S = Yt(S, /\f/g, "")), g > 0 && Re(S) - f && Bt(g > 32 ? eo(S + ";", n, r, f - 1, l) : eo(Yt(S, " ", "") + ";", n, r, f - 2, l), l);
            break;
          case 59:
            S += ";";
          default:
            if (Bt(O = Jn(S, t, r, s, u, o, c, _, $ = [], w = [], f, i), i), E === 123)
              if (u === 0)
                Zt(S, t, O, O, $, i, f, c, w);
              else
                switch (d === 99 && $t(S, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Zt(e, O, O, n && Bt(Jn(e, O, O, 0, 0, o, c, _, o, $ = [], f, w), w), o, w, f, c, n ? $ : w);
                    break;
                  default:
                    Zt(S, O, O, O, [""], w, 0, c, w);
                }
        }
        s = u = g = 0, m = A = 1, _ = S = "", f = a;
        break;
      case 58:
        f = 1 + Re(S), g = C;
      default:
        if (m < 1) {
          if (E == 123)
            --m;
          else if (E == 125 && m++ == 0 && Gc() == 125)
            continue;
        }
        switch (S += wn(E), E * m) {
          case 38:
            A = u > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            c[s++] = (Re(S) - 1) * A, A = 1;
            break;
          case 64:
            tt() === 45 && (S += wr(ye())), d = tt(), u = f = Re(_ = S += Qc(Qt())), E++;
            break;
          case 45:
            C === 45 && Re(S) == 2 && (m = 0);
        }
    }
  return i;
}
function Jn(e, t, r, n, o, i, a, c, l, s, u, f) {
  for (var d = o - 1, g = o === 0 ? i : [""], C = Vc(g), m = 0, p = 0, A = 0; m < n; ++m)
    for (var E = 0, _ = _t(e, d + 1, d = ni(p = a[m])), $ = e; E < C; ++E)
      ($ = oi(p > 0 ? g[E] + " " + _ : Yt(_, /&\f/g, g[E]))) && (l[A++] = $);
  return On(e, t, r, o === 0 ? ti : c, l, s, u, f);
}
function Jc(e, t, r, n) {
  return On(e, t, r, ei, wn(Wc()), _t(e, 2, -2), 0, n);
}
function eo(e, t, r, n, o) {
  return On(e, t, r, ri, _t(e, 0, n), _t(e, n + 1, -1), n, o);
}
function Yr(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function es(e, t, r, n) {
  switch (e.type) {
    case zc:
      if (e.children.length) break;
    case Hc:
    case ri:
      return e.return = e.return || e.value;
    case ei:
      return "";
    case Dc:
      return e.return = e.value + "{" + Yr(e.children, n) + "}";
    case ti:
      if (!Re(e.value = e.props.join(","))) return "";
  }
  return Re(r = Yr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ai(e, t) {
  var r = t.path, n = t.parentSelectors;
  Ue(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var ts = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || i.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && ai("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, rs = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && ai("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, to = "data-ant-cssinjs-cache-path", ci = "_FILE_STYLE__", rt, si = !0;
function ns() {
  if (!rt && (rt = {}, Ne())) {
    var e = document.createElement("div");
    e.className = to, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), a = z(i, 2), c = a[0], l = a[1];
      rt[c] = l;
    });
    var r = document.querySelector("style[".concat(to, "]"));
    if (r) {
      var n;
      si = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function os(e) {
  return ns(), !!rt[e];
}
function is(e) {
  var t = rt[e], r = null;
  if (t && Ne())
    if (si)
      r = ci;
    else {
      var n = document.querySelector("style[".concat(be, '="').concat(rt[e], '"]'));
      n ? r = n.innerHTML : delete rt[e];
    }
  return [r, t];
}
var li = "_skip_check_", ui = "_multi_value_";
function Jt(e) {
  var t = Yr(Zc(e), es);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function as(e) {
  return q(e) === "object" && e && (li in e || ui in e);
}
function cs(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(a) {
    var c, l = a.trim().split(/\s+/), s = l[0] || "", u = ((c = s.match(/^\w+/)) === null || c === void 0 ? void 0 : c[0]) || "";
    return s = "".concat(u).concat(o).concat(s.slice(u.length)), [s].concat(Me(l.slice(1))).join(" ");
  });
  return i.join(",");
}
var ss = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, i = n.injectHash, a = n.parentSelectors, c = r.hashId, l = r.layer, s = r.path, u = r.hashPriority, f = r.transformers, d = f === void 0 ? [] : f, g = r.linters, C = g === void 0 ? [] : g, m = "", p = {};
  function A($) {
    var w = $.getName(c);
    if (!p[w]) {
      var O = e($.style, r, {
        root: !1,
        parentSelectors: a
      }), S = z(O, 1), P = S[0];
      p[w] = "@keyframes ".concat($.getName(c)).concat(P);
    }
  }
  function E($) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return $.forEach(function(O) {
      Array.isArray(O) ? E(O, w) : O && w.push(O);
    }), w;
  }
  var _ = E(Array.isArray(t) ? t : [t]);
  return _.forEach(function($) {
    var w = typeof $ == "string" && !o ? {} : $;
    if (typeof w == "string")
      m += "".concat(w, `
`);
    else if (w._keyframe)
      A(w);
    else {
      var O = d.reduce(function(S, P) {
        var N;
        return (P == null || (N = P.visit) === null || N === void 0 ? void 0 : N.call(P, S)) || S;
      }, w);
      Object.keys(O).forEach(function(S) {
        var P = O[S];
        if (q(P) === "object" && P && (S !== "animationName" || !P._keyframe) && !as(P)) {
          var N = !1, F = S.trim(), G = !1;
          (o || i) && c ? F.startsWith("@") ? N = !0 : F = cs(S, c, u) : o && !c && (F === "&" || F === "") && (F = "", G = !0);
          var H = e(P, r, {
            root: G,
            injectHash: N,
            parentSelectors: [].concat(Me(a), [F])
          }), B = z(H, 2), j = B[0], W = B[1];
          p = L(L({}, p), W), m += "".concat(F).concat(j);
        } else {
          let b = function(x, R) {
            process.env.NODE_ENV !== "production" && (q(P) !== "object" || !(P != null && P[li])) && [ts, rs].concat(Me(C)).forEach(function(k) {
              return k(x, R, {
                path: s,
                hashId: c,
                parentSelectors: a
              });
            });
            var T = x.replace(/[A-Z]/g, function(k) {
              return "-".concat(k.toLowerCase());
            }), I = R;
            !kc[x] && typeof I == "number" && I !== 0 && (I = "".concat(I, "px")), x === "animationName" && R !== null && R !== void 0 && R._keyframe && (A(R), I = R.getName(c)), m += "".concat(T, ":").concat(I, ";");
          };
          var y, v = (y = P == null ? void 0 : P.value) !== null && y !== void 0 ? y : P;
          q(P) === "object" && P !== null && P !== void 0 && P[ui] && Array.isArray(v) ? v.forEach(function(x) {
            b(S, x);
          }) : b(S, v);
        }
      });
    }
  }), o ? l && (m = "@layer ".concat(l.name, " {").concat(m, "}"), l.dependencies && (p["@layer ".concat(l.name)] = l.dependencies.map(function($) {
    return "@layer ".concat($, ", ").concat(l.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, p];
};
function fi(e, t) {
  return At("".concat(e.join("%")).concat(t));
}
function ls() {
  return null;
}
var di = "style";
function Qr(e, t) {
  var r = e.token, n = e.path, o = e.hashId, i = e.layer, a = e.nonce, c = e.clientOnly, l = e.order, s = l === void 0 ? 0 : l, u = h.useContext(fr), f = u.autoClear, d = u.mock, g = u.defaultCache, C = u.hashPriority, m = u.container, p = u.ssrInline, A = u.transformers, E = u.linters, _ = u.cache, $ = u.layer, w = r._tokenKey, O = [w];
  $ && O.push("layer"), O.push.apply(O, Me(n));
  var S = Ur;
  process.env.NODE_ENV !== "production" && d !== void 0 && (S = d === "client");
  var P = xn(
    di,
    O,
    // Create cache if needed
    function() {
      var B = O.join("|");
      if (os(B)) {
        var j = is(B), W = z(j, 2), y = W[0], v = W[1];
        if (y)
          return [y, w, v, {}, c, s];
      }
      var b = t(), x = ss(b, {
        hashId: o,
        hashPriority: C,
        layer: $ ? i : void 0,
        path: n.join("-"),
        transformers: A,
        linters: E
      }), R = z(x, 2), T = R[0], I = R[1], k = Jt(T), K = fi(O, k);
      return [k, w, K, I, c, s];
    },
    // Remove cache if no need
    function(B, j) {
      var W = z(B, 3), y = W[2];
      (j || f) && Ur && Yo(y, {
        mark: be
      });
    },
    // Effect: Inject style here
    function(B) {
      var j = z(B, 4), W = j[0];
      j[1];
      var y = j[2], v = j[3];
      if (S && W !== ci) {
        var b = {
          mark: be,
          prepend: $ ? !1 : "queue",
          attachTo: m,
          priority: s
        }, x = typeof a == "function" ? a() : a;
        x && (b.csp = {
          nonce: x
        });
        var R = [], T = [];
        Object.keys(v).forEach(function(k) {
          k.startsWith("@layer") ? R.push(k) : T.push(k);
        }), R.forEach(function(k) {
          et(Jt(v[k]), "_layer-".concat(k), L(L({}, b), {}, {
            prepend: !0
          }));
        });
        var I = et(W, y, b);
        I[Fe] = _.instanceId, I.setAttribute(pt, w), process.env.NODE_ENV !== "production" && I.setAttribute(cc, O.join("|")), T.forEach(function(k) {
          et(Jt(v[k]), "_effect-".concat(k), b);
        });
      }
    }
  ), N = z(P, 3), F = N[0], G = N[1], H = N[2];
  return function(B) {
    var j;
    return !p || S || !g ? j = /* @__PURE__ */ h.createElement(ls, null) : j = /* @__PURE__ */ h.createElement("style", ft({}, V(V({}, pt, G), be, H), {
      dangerouslySetInnerHTML: {
        __html: F
      }
    })), /* @__PURE__ */ h.createElement(h.Fragment, null, j, B);
  };
}
var us = function(t, r, n) {
  var o = z(t, 6), i = o[0], a = o[1], c = o[2], l = o[3], s = o[4], u = o[5], f = n || {}, d = f.plain;
  if (s)
    return null;
  var g = i, C = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return g = nr(i, a, c, C, d), l && Object.keys(l).forEach(function(m) {
    if (!r[m]) {
      r[m] = !0;
      var p = Jt(l[m]), A = nr(p, a, "_effect-".concat(m), C, d);
      m.startsWith("@layer") ? g = A + g : g += A;
    }
  }), [u, c, g];
}, pi = "cssVar", fs = function(t, r) {
  var n = t.key, o = t.prefix, i = t.unitless, a = t.ignore, c = t.token, l = t.scope, s = l === void 0 ? "" : l, u = xe(fr), f = u.cache.instanceId, d = u.container, g = c._tokenKey, C = [].concat(Me(t.path), [n, s, g]), m = xn(pi, C, function() {
    var p = r(), A = Zo(p, n, {
      prefix: o,
      unitless: i,
      ignore: a,
      scope: s
    }), E = z(A, 2), _ = E[0], $ = E[1], w = fi(C, $);
    return [_, $, w, n];
  }, function(p) {
    var A = z(p, 3), E = A[2];
    Ur && Yo(E, {
      mark: be
    });
  }, function(p) {
    var A = z(p, 3), E = A[1], _ = A[2];
    if (E) {
      var $ = et(E, _, {
        mark: be,
        prepend: "queue",
        attachTo: d,
        priority: -999
      });
      $[Fe] = f, $.setAttribute(pt, n);
    }
  });
  return m;
}, ds = function(t, r, n) {
  var o = z(t, 4), i = o[1], a = o[2], c = o[3], l = n || {}, s = l.plain;
  if (!i)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, d = nr(i, c, a, f, s);
  return [u, a, d];
};
V(V(V({}, di, us), Jo, Bc), pi, ds);
function ct(e) {
  return e.notSplit = !0, e;
}
ct(["borderTop", "borderBottom"]), ct(["borderTop"]), ct(["borderBottom"]), ct(["borderLeft", "borderRight"]), ct(["borderLeft"]), ct(["borderRight"]);
var Tn = /* @__PURE__ */ gn({});
function ps(e) {
  return Go(e) || zo(e) || Sn(e) || Uo();
}
function Zr(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function vi(e, t, r, n) {
  if (!t.length)
    return r;
  var o = ps(t), i = o[0], a = o.slice(1), c;
  return !e && typeof i == "number" ? c = [] : Array.isArray(e) ? c = Me(e) : c = L({}, e), n && r === void 0 && a.length === 1 ? delete c[i][a[0]] : c[i] = vi(c[i], a, r, n), c;
}
function Or(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Zr(e, t.slice(0, -1)) ? e : vi(e, t, r, n);
}
function vs(e) {
  return q(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function ro(e) {
  return Array.isArray(e) ? [] : {};
}
var gs = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function hs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = ro(t[0]);
  return t.forEach(function(o) {
    function i(a, c) {
      var l = new Set(c), s = Zr(o, a), u = Array.isArray(s);
      if (u || vs(s)) {
        if (!l.has(s)) {
          l.add(s);
          var f = Zr(n, a);
          u ? n = Or(n, a, []) : (!f || q(f) !== "object") && (n = Or(n, a, ro(s))), gs(s).forEach(function(d) {
            i([].concat(Me(a), [d]), l);
          });
        }
      } else
        n = Or(n, a, s);
    }
    i([]);
  }), n;
}
function gi() {
}
let _e = null;
function ms() {
  _e = null, jo();
}
let An = gi;
process.env.NODE_ENV !== "production" && (An = (e, t, r) => {
  Ue(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && ms();
});
const hi = /* @__PURE__ */ h.createContext({}), mt = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = h.useContext(hi), r = (n, o, i) => {
    if (!n)
      if (t === !1 && o === "deprecated") {
        const a = _e;
        _e || (_e = {}), _e[e] = _e[e] || [], _e[e].includes(i || "") || _e[e].push(i || ""), a || console.warn("[antd] There exists deprecated usage in your code:", _e);
      } else
        process.env.NODE_ENV !== "production" && An(n, e, i);
  };
  return r.deprecated = (n, o, i, a) => {
    r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${a ? ` ${a}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = gi, e;
}, vr = An, bs = /* @__PURE__ */ gn(void 0);
var ys = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, Ss = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const mi = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, no = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, Ss),
  timePickerLocale: Object.assign({}, mi)
}, le = "${label} is not a valid ${type}", gr = {
  locale: "en",
  Pagination: ys,
  DatePicker: no,
  TimePicker: mi,
  Calendar: no,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: le,
        method: le,
        array: le,
        object: le,
        number: le,
        date: le,
        boolean: le,
        integer: le,
        float: le,
        regexp: le,
        email: le,
        url: le,
        hex: le
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
};
Object.assign({}, gr.Modal);
let er = [];
const oo = () => er.reduce((e, t) => Object.assign(Object.assign({}, e), t), gr.Modal);
function Cs(e) {
  if (e) {
    const t = Object.assign({}, e);
    return er.push(t), oo(), () => {
      er = er.filter((r) => r !== t), oo();
    };
  }
  Object.assign({}, gr.Modal);
}
const bi = /* @__PURE__ */ gn(void 0), yi = "internalMark", Si = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = mt("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(n === yi, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  h.useEffect(() => Cs(t && t.Modal), [t]);
  const o = h.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ h.createElement(bi.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (Si.displayName = "LocaleProvider");
function ae(e, t) {
  Es(e) && (e = "100%");
  var r = xs(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function kt(e) {
  return Math.min(1, Math.max(0, e));
}
function Es(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function xs(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ci(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ht(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Qe(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function ws(e, t, r) {
  return {
    r: ae(e, 255) * 255,
    g: ae(t, 255) * 255,
    b: ae(r, 255) * 255
  };
}
function io(e, t, r) {
  e = ae(e, 255), t = ae(t, 255), r = ae(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), i = 0, a = 0, c = (n + o) / 2;
  if (n === o)
    a = 0, i = 0;
  else {
    var l = n - o;
    switch (a = c > 0.5 ? l / (2 - n - o) : l / (n + o), n) {
      case e:
        i = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / l + 2;
        break;
      case r:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l: c };
}
function Tr(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Os(e, t, r) {
  var n, o, i;
  if (e = ae(e, 360), t = ae(t, 100), r = ae(r, 100), t === 0)
    o = r, i = r, n = r;
  else {
    var a = r < 0.5 ? r * (1 + t) : r + t - r * t, c = 2 * r - a;
    n = Tr(c, a, e + 1 / 3), o = Tr(c, a, e), i = Tr(c, a, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: i * 255 };
}
function Jr(e, t, r) {
  e = ae(e, 255), t = ae(t, 255), r = ae(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), i = 0, a = n, c = n - o, l = n === 0 ? 0 : c / n;
  if (n === o)
    i = 0;
  else {
    switch (n) {
      case e:
        i = (t - r) / c + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / c + 2;
        break;
      case r:
        i = (e - t) / c + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: l, v: a };
}
function Ts(e, t, r) {
  e = ae(e, 360) * 6, t = ae(t, 100), r = ae(r, 100);
  var n = Math.floor(e), o = e - n, i = r * (1 - t), a = r * (1 - o * t), c = r * (1 - (1 - o) * t), l = n % 6, s = [r, a, i, i, c, r][l], u = [c, r, r, a, i, i][l], f = [i, i, c, r, r, a][l];
  return { r: s * 255, g: u * 255, b: f * 255 };
}
function en(e, t, r, n) {
  var o = [
    Qe(Math.round(e).toString(16)),
    Qe(Math.round(t).toString(16)),
    Qe(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function As(e, t, r, n, o) {
  var i = [
    Qe(Math.round(e).toString(16)),
    Qe(Math.round(t).toString(16)),
    Qe(Math.round(r).toString(16)),
    Qe(Ps(n))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function Ps(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ao(e) {
  return ue(e) / 255;
}
function ue(e) {
  return parseInt(e, 16);
}
function $s(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var tn = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function st(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, i = null, a = !1, c = !1;
  return typeof e == "string" && (e = Ms(e)), typeof e == "object" && (Pe(e.r) && Pe(e.g) && Pe(e.b) ? (t = ws(e.r, e.g, e.b), a = !0, c = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Pe(e.h) && Pe(e.s) && Pe(e.v) ? (n = Ht(e.s), o = Ht(e.v), t = Ts(e.h, n, o), a = !0, c = "hsv") : Pe(e.h) && Pe(e.s) && Pe(e.l) && (n = Ht(e.s), i = Ht(e.l), t = Os(e.h, n, i), a = !0, c = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Ci(r), {
    ok: a,
    format: e.format || c,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var _s = "[-\\+]?\\d+%?", Rs = "[-\\+]?\\d*\\.\\d+%?", Ve = "(?:".concat(Rs, ")|(?:").concat(_s, ")"), Ar = "[\\s|\\(]+(".concat(Ve, ")[,|\\s]+(").concat(Ve, ")[,|\\s]+(").concat(Ve, ")\\s*\\)?"), Pr = "[\\s|\\(]+(".concat(Ve, ")[,|\\s]+(").concat(Ve, ")[,|\\s]+(").concat(Ve, ")[,|\\s]+(").concat(Ve, ")\\s*\\)?"), ge = {
  CSS_UNIT: new RegExp(Ve),
  rgb: new RegExp("rgb" + Ar),
  rgba: new RegExp("rgba" + Pr),
  hsl: new RegExp("hsl" + Ar),
  hsla: new RegExp("hsla" + Pr),
  hsv: new RegExp("hsv" + Ar),
  hsva: new RegExp("hsva" + Pr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Ms(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (tn[e])
    e = tn[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = ge.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = ge.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = ge.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = ge.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = ge.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = ge.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = ge.hex8.exec(e), r ? {
    r: ue(r[1]),
    g: ue(r[2]),
    b: ue(r[3]),
    a: ao(r[4]),
    format: t ? "name" : "hex8"
  } : (r = ge.hex6.exec(e), r ? {
    r: ue(r[1]),
    g: ue(r[2]),
    b: ue(r[3]),
    format: t ? "name" : "hex"
  } : (r = ge.hex4.exec(e), r ? {
    r: ue(r[1] + r[1]),
    g: ue(r[2] + r[2]),
    b: ue(r[3] + r[3]),
    a: ao(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = ge.hex3.exec(e), r ? {
    r: ue(r[1] + r[1]),
    g: ue(r[2] + r[2]),
    b: ue(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Pe(e) {
  return !!ge.CSS_UNIT.exec(String(e));
}
var fe = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = $s(t)), this.originalInput = t;
      var o = st(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : o.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), r, n, o, i = t.r / 255, a = t.g / 255, c = t.b / 255;
      return i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), c <= 0.03928 ? o = c / 12.92 : o = Math.pow((c + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Ci(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Jr(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Jr(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = io(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = io(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), en(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), As(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(r) {
        return "".concat(Math.round(ae(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(ae(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + en(this.r, this.g, this.b, !1), r = 0, n = Object.entries(tn); r < n.length; r++) {
        var o = n[r], i = o[0], a = o[1];
        if (t === a)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var r = !!t;
      t = t ?? this.format;
      var n = !1, o = this.a < 1 && this.a >= 0, i = !r && o && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l += t / 100, r.l = kt(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = kt(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = kt(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = kt(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var r = this.toHsl(), n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, new e(r);
    }, e.prototype.mix = function(t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), o = new e(t).toRgb(), i = r / 100, a = {
        r: (o.r - n.r) * i + n.r,
        g: (o.g - n.g) * i + n.g,
        b: (o.b - n.b) * i + n.b,
        a: (o.a - n.a) * i + n.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), o = 360 / r, i = [this];
      for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t; )
        n.h = (n.h + o) % 360, i.push(new e(n));
      return i;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var r = this.toHsv(), n = r.h, o = r.s, i = r.v, a = [], c = 1 / t; t--; )
        a.push(new e({ h: n, s: o, v: i })), i = (i + c) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var r = this.toRgb(), n = new e(t).toRgb(), o = r.a + n.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var r = this.toHsl(), n = r.h, o = [this], i = 360 / t, a = 1; a < t; a++)
        o.push(new e({ h: (n + a * i) % 360, s: r.s, l: r.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), Dt = 2, co = 0.16, js = 0.05, Is = 0.05, Ls = 0.15, Ei = 5, xi = 4, Ns = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function so(e) {
  var t = e.r, r = e.g, n = e.b, o = Jr(t, r, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function zt(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(en(t, r, n, !1));
}
function Bs(e, t, r) {
  var n = r / 100, o = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return o;
}
function lo(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Dt * t : Math.round(e.h) + Dt * t : n = r ? Math.round(e.h) + Dt * t : Math.round(e.h) - Dt * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function uo(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - co * t : t === xi ? n = e.s + co : n = e.s + js * t, n > 1 && (n = 1), r && t === Ei && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function fo(e, t, r) {
  var n;
  return r ? n = e.v + Is * t : n = e.v - Ls * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function nt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = st(e), o = Ei; o > 0; o -= 1) {
    var i = so(n), a = zt(st({
      h: lo(i, o, !0),
      s: uo(i, o, !0),
      v: fo(i, o, !0)
    }));
    r.push(a);
  }
  r.push(zt(n));
  for (var c = 1; c <= xi; c += 1) {
    var l = so(n), s = zt(st({
      h: lo(l, c),
      s: uo(l, c),
      v: fo(l, c)
    }));
    r.push(s);
  }
  return t.theme === "dark" ? Ns.map(function(u) {
    var f = u.index, d = u.opacity, g = zt(Bs(st(t.backgroundColor || "#141414"), st(r[f]), d * 100));
    return g;
  }) : r;
}
var $r = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, tr = {}, _r = {};
Object.keys($r).forEach(function(e) {
  tr[e] = nt($r[e]), tr[e].primary = tr[e][5], _r[e] = nt($r[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), _r[e].primary = _r[e][5];
});
var ks = tr.blue;
const wi = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Rt = Object.assign(Object.assign({}, wi), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function Hs(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: a,
    colorInfo: c,
    colorPrimary: l,
    colorBgBase: s,
    colorTextBase: u
  } = e, f = r(l), d = r(o), g = r(i), C = r(a), m = r(c), p = n(s, u), A = e.colorLink || e.colorInfo, E = r(A);
  return Object.assign(Object.assign({}, p), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: C[1],
    colorErrorBgHover: C[2],
    colorErrorBgActive: C[3],
    colorErrorBorder: C[3],
    colorErrorBorderHover: C[4],
    colorErrorHover: C[5],
    colorError: C[6],
    colorErrorActive: C[7],
    colorErrorTextHover: C[8],
    colorErrorText: C[9],
    colorErrorTextActive: C[10],
    colorWarningBg: g[1],
    colorWarningBgHover: g[2],
    colorWarningBorder: g[3],
    colorWarningBorderHover: g[4],
    colorWarningHover: g[4],
    colorWarning: g[6],
    colorWarningActive: g[7],
    colorWarningTextHover: g[8],
    colorWarningText: g[9],
    colorWarningTextActive: g[10],
    colorInfoBg: m[1],
    colorInfoBgHover: m[2],
    colorInfoBorder: m[3],
    colorInfoBorderHover: m[4],
    colorInfoHover: m[4],
    colorInfo: m[6],
    colorInfoActive: m[7],
    colorInfoTextHover: m[8],
    colorInfoText: m[9],
    colorInfoTextActive: m[10],
    colorLinkHover: E[4],
    colorLink: E[6],
    colorLinkActive: E[7],
    colorBgMask: new fe("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Ds = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function zs(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, Ds(n));
}
const Fs = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function rr(e) {
  return (e + 8) / e;
}
function Vs(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const o = n - 1, i = e * Math.pow(2.71828, o / 5), a = n > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: rr(r)
  }));
}
const Ws = (e) => {
  const t = Vs(e), r = t.map((u) => u.size), n = t.map((u) => u.lineHeight), o = r[1], i = r[0], a = r[2], c = n[1], l = n[0], s = n[2];
  return {
    fontSizeSM: i,
    fontSize: o,
    fontSizeLG: a,
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: c,
    lineHeightLG: s,
    lineHeightSM: l,
    fontHeight: Math.round(c * o),
    fontHeightLG: Math.round(s * a),
    fontHeightSM: Math.round(l * i),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function Gs(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    // 48
    sizeXL: t * (r + 4),
    // 32
    sizeLG: t * (r + 2),
    // 24
    sizeMD: t * (r + 1),
    // 20
    sizeMS: t * r,
    // 16
    size: t * r,
    // 16
    sizeSM: t * (r - 1),
    // 12
    sizeXS: t * (r - 2),
    // 8
    sizeXXS: t * (r - 3)
    // 4
  };
}
const $e = (e, t) => new fe(e).setAlpha(t).toRgbString(), wt = (e, t) => new fe(e).darken(t).toHexString(), Us = (e) => {
  const t = nt(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Xs = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: $e(n, 0.88),
    colorTextSecondary: $e(n, 0.65),
    colorTextTertiary: $e(n, 0.45),
    colorTextQuaternary: $e(n, 0.25),
    colorFill: $e(n, 0.15),
    colorFillSecondary: $e(n, 0.06),
    colorFillTertiary: $e(n, 0.04),
    colorFillQuaternary: $e(n, 0.02),
    colorBgLayout: wt(r, 4),
    colorBgContainer: wt(r, 0),
    colorBgElevated: wt(r, 0),
    colorBgSpotlight: $e(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: wt(r, 15),
    colorBorderSecondary: wt(r, 6)
  };
};
function Ks(e) {
  const t = Object.keys(wi).map((r) => {
    const n = nt(e[r]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${r}-${a + 1}`] = n[a], o[`${r}${a + 1}`] = n[a], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Hs(e, {
    generateColorPalettes: Us,
    generateNeutralColorPalettes: Xs
  })), Ws(e.fontSize)), Gs(e)), Fs(e)), zs(e));
}
const Oi = Gr(Ks), rn = {
  token: Rt,
  override: {
    override: Rt
  },
  hashed: !0
}, Ti = /* @__PURE__ */ D.createContext(rn), Ai = "anticon", qs = (e, t) => t || (e ? `ant-${e}` : "ant"), Xe = /* @__PURE__ */ h.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: qs,
  iconPrefixCls: Ai
}), Ys = `-ant-${Date.now()}-${Math.random()}`;
function Qs(e, t) {
  const r = {}, n = (a, c) => {
    let l = a.clone();
    return l = (c == null ? void 0 : c(l)) || l, l.toRgbString();
  }, o = (a, c) => {
    const l = new fe(a), s = nt(l.toRgbString());
    r[`${c}-color`] = n(l), r[`${c}-color-disabled`] = s[1], r[`${c}-color-hover`] = s[4], r[`${c}-color-active`] = s[6], r[`${c}-color-outline`] = l.clone().setAlpha(0.2).toRgbString(), r[`${c}-color-deprecated-bg`] = s[0], r[`${c}-color-deprecated-border`] = s[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new fe(t.primaryColor), c = nt(a.toRgbString());
    c.forEach((s, u) => {
      r[`primary-${u + 1}`] = s;
    }), r["primary-color-deprecated-l-35"] = n(a, (s) => s.lighten(35)), r["primary-color-deprecated-l-20"] = n(a, (s) => s.lighten(20)), r["primary-color-deprecated-t-20"] = n(a, (s) => s.tint(20)), r["primary-color-deprecated-t-50"] = n(a, (s) => s.tint(50)), r["primary-color-deprecated-f-12"] = n(a, (s) => s.setAlpha(s.getAlpha() * 0.12));
    const l = new fe(c[0]);
    r["primary-color-active-deprecated-f-30"] = n(l, (s) => s.setAlpha(s.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(l, (s) => s.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((a) => `--${e}-${a}: ${r[a]};`).join(`
`)}
  }
  `.trim();
}
function Zs(e, t) {
  const r = Qs(e, t);
  Ne() ? et(r, `${Ys}-dynamic-theme`) : process.env.NODE_ENV !== "production" && vr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const or = /* @__PURE__ */ h.createContext(!1), Js = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = h.useContext(or);
  return /* @__PURE__ */ h.createElement(or.Provider, {
    value: r ?? n
  }, t);
}, gt = /* @__PURE__ */ h.createContext(void 0), el = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = h.useContext(gt);
  return /* @__PURE__ */ h.createElement(gt.Provider, {
    value: r || n
  }, t);
};
function tl() {
  const e = xe(or), t = xe(gt);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const rl = "5.18.2";
function Rr(e) {
  return e >= 0 && e <= 255;
}
function Ft(e, t) {
  const {
    r,
    g: n,
    b: o,
    a: i
  } = new fe(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: c,
    b: l
  } = new fe(t).toRgb();
  for (let s = 0.01; s <= 1; s += 0.01) {
    const u = Math.round((r - a * (1 - s)) / s), f = Math.round((n - c * (1 - s)) / s), d = Math.round((o - l * (1 - s)) / s);
    if (Rr(u) && Rr(f) && Rr(d))
      return new fe({
        r: u,
        g: f,
        b: d,
        a: Math.round(s * 100) / 100
      }).toRgbString();
  }
  return new fe({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var nl = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Pi(e) {
  const {
    override: t
  } = e, r = nl(e, ["override"]), n = Object.assign({}, t);
  Object.keys(Rt).forEach((d) => {
    delete n[d];
  });
  const o = Object.assign(Object.assign({}, r), n), i = 480, a = 576, c = 768, l = 992, s = 1200, u = 1600;
  if (o.motion === !1) {
    const d = "0s";
    o.motionDurationFast = d, o.motionDurationMid = d, o.motionDurationSlow = d;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: Ft(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: Ft(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Ft(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 4,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: Ft(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: a - 1,
    screenSM: a,
    screenSMMin: a,
    screenSMMax: c - 1,
    screenMD: c,
    screenMDMin: c,
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: s - 1,
    screenXL: s,
    screenXLMin: s,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new fe("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new fe("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new fe("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var po = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const $i = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0
}, _i = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, ol = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, Ri = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, i = po(t, ["override"]);
  let a = Object.assign(Object.assign({}, n), {
    override: o
  });
  return a = Pi(a), i && Object.entries(i).forEach((c) => {
    let [l, s] = c;
    const {
      theme: u
    } = s, f = po(s, ["theme"]);
    let d = f;
    u && (d = Ri(Object.assign(Object.assign({}, a), f), {
      override: f
    }, u)), a[l] = d;
  }), a;
};
function ot() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: o
  } = D.useContext(Ti), i = `${rl}-${t || ""}`, a = r || Oi, [c, l, s] = Nc(a, [Rt, e], {
    salt: i,
    override: n,
    getComputedToken: Ri,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Pi,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: $i,
      ignore: _i,
      preserve: ol
    }
  });
  return [a, s, t ? l : "", c, o];
}
function Mi(e, t, r) {
  return t = dt(t), Ho(e, yn() ? Reflect.construct(t, [], dt(e).constructor) : t.apply(e, r));
}
let ji = /* @__PURE__ */ Le(function e() {
  Ie(this, e);
});
const Ii = "CALC_UNIT", il = new RegExp(Ii, "g");
function Mr(e) {
  return typeof e == "number" ? `${e}${Ii}` : e;
}
let al = /* @__PURE__ */ function(e) {
  function t(r, n) {
    var o;
    Ie(this, t), o = Mi(this, t), o.result = "";
    const i = typeof r;
    return o.unitlessCssVar = n, r instanceof t ? o.result = `(${r.result})` : i === "number" ? o.result = Mr(r) : i === "string" && (o.result = r), o;
  }
  return sr(t, e), Le(t, [{
    key: "add",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} + ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} + ${Mr(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} - ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} - ${Mr(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(n) {
      return this.lowPriority && (this.result = `(${this.result})`), n instanceof t ? this.result = `${this.result} * ${n.getResult(!0)}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} * ${n}`), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(n) {
      return this.lowPriority && (this.result = `(${this.result})`), n instanceof t ? this.result = `${this.result} / ${n.getResult(!0)}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} / ${n}`), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(n) {
      return this.lowPriority || n ? `(${this.result})` : this.result;
    }
  }, {
    key: "equal",
    value: function(n) {
      const {
        unit: o
      } = n || {};
      let i = !0;
      return typeof o == "boolean" ? i = o : Array.from(this.unitlessCssVar).some((a) => this.result.includes(a)) && (i = !1), this.result = this.result.replace(il, i ? "px" : ""), typeof this.lowPriority < "u" ? `calc(${this.result})` : this.result;
    }
  }]);
}(ji), cl = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return Ie(this, t), n = Mi(this, t), n.result = 0, r instanceof t ? n.result = r.result : typeof r == "number" && (n.result = r), n;
  }
  return sr(t, e), Le(t, [{
    key: "add",
    value: function(n) {
      return n instanceof t ? this.result += n.result : typeof n == "number" && (this.result += n), this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof t ? this.result -= n.result : typeof n == "number" && (this.result -= n), this;
    }
  }, {
    key: "mul",
    value: function(n) {
      return n instanceof t ? this.result *= n.result : typeof n == "number" && (this.result *= n), this;
    }
  }, {
    key: "div",
    value: function(n) {
      return n instanceof t ? this.result /= n.result : typeof n == "number" && (this.result /= n), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]);
}(ji);
const sl = (e, t) => {
  const r = e === "css" ? al : cl;
  return (n) => new r(n, t);
}, ll = 1e3 * 60 * 10;
let ul = /* @__PURE__ */ function() {
  function e() {
    Ie(this, e), this.map = /* @__PURE__ */ new Map(), this.objectIDMap = /* @__PURE__ */ new WeakMap(), this.nextID = 0, this.lastAccessBeat = /* @__PURE__ */ new Map(), this.accessBeat = 0;
  }
  return Le(e, [{
    key: "set",
    value: function(r, n) {
      this.clear();
      const o = this.getCompositeKey(r);
      this.map.set(o, n), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(r) {
      const n = this.getCompositeKey(r), o = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(r) {
      return r.map((o) => o && typeof o == "object" ? `obj_${this.getObjectID(o)}` : `${typeof o}_${o}`).join("|");
    }
  }, {
    key: "getObjectID",
    value: function(r) {
      if (this.objectIDMap.has(r))
        return this.objectIDMap.get(r);
      const n = this.nextID;
      return this.objectIDMap.set(r, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      if (this.accessBeat > 1e4) {
        const r = Date.now();
        this.lastAccessBeat.forEach((n, o) => {
          r - n > ll && (this.map.delete(o), this.lastAccessBeat.delete(o));
        }), this.accessBeat = 0;
      }
    }
  }]);
}();
const vo = new ul();
function fl(e, t) {
  return D.useMemo(() => {
    const r = vo.get(t);
    if (r)
      return r;
    const n = e();
    return vo.set(t, n), n;
  }, t);
}
function ir(e) {
  var t = h.useRef();
  t.current = e;
  var r = h.useCallback(function() {
    for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(i));
  }, []);
  return r;
}
function nn(e) {
  var t = h.useRef(!1), r = h.useState(e), n = z(r, 2), o = n[0], i = n[1];
  h.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(c, l) {
    l && t.current || i(c);
  }
  return [o, a];
}
const dl = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), pl = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), vl = (e, t, r, n) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, i = r ? `.${r}` : o, a = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let c = {};
  return n !== !1 && (c = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [i]: Object.assign(Object.assign(Object.assign({}, c), a), {
      [o]: a
    })
  };
}, gl = (e) => ({
  outline: `${Ge(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), hl = (e) => ({
  "&:focus-visible": Object.assign({}, gl(e))
});
function ml(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `max(${r.map((o) => Ge(o)).join(",")})`;
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `min(${r.map((o) => Ge(o)).join(",")})`;
    }
  };
}
const Li = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let on = !0;
function bt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Li)
    return Object.assign.apply(Object, [{}].concat(t));
  on = !1;
  const n = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(n, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), on = !0, n;
}
const go = {};
function bl() {
}
const yl = (e) => {
  let t, r = e, n = bl;
  return Li && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(o, i) {
      return on && t.add(i), o[i];
    }
  }), n = (o, i) => {
    var a;
    go[o] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (a = go[o]) === null || a === void 0 ? void 0 : a.component), i)
    };
  }), {
    token: r,
    keys: t,
    flush: n
  };
}, Ni = (e, t) => {
  const [r, n] = ot();
  return Qr({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, dl()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, Bi = (e, t, r) => {
  var n;
  return typeof r == "function" ? r(bt(t, (n = t[e]) !== null && n !== void 0 ? n : {})) : r ?? {};
}, ki = (e, t, r, n) => {
  const o = Object.assign({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    const {
      deprecatedTokens: a
    } = n;
    a.forEach((c) => {
      let [l, s] = c;
      var u;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && Ue(!(o != null && o[l]), `Component Token \`${String(l)}\` of ${e} is deprecated. Please use \`${String(s)}\` instead.`), (o != null && o[l] || o != null && o[s]) && ((u = o[s]) !== null && u !== void 0 || (o[s] = o == null ? void 0 : o[l]));
    });
  }
  const i = Object.assign(Object.assign({}, r), o);
  return Object.keys(i).forEach((a) => {
    i[a] === t[a] && delete i[a];
  }), i;
}, ho = (e, t) => `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function Pn(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Array.isArray(e) ? e : [e, e], [i] = o, a = o.join("-");
  return function(c) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
    const [s, u, f, d, g] = ot(), {
      getPrefixCls: C,
      iconPrefixCls: m,
      csp: p
    } = xe(Xe), A = C(), E = g ? "css" : "js", _ = fl(() => {
      const P = /* @__PURE__ */ new Set();
      return g && Object.keys(n.unitless || {}).forEach((N) => {
        P.add(qt(N, g.prefix)), P.add(qt(N, ho(i, g.prefix)));
      }), sl(E, P);
    }, [E, i, g && g.prefix]), {
      max: $,
      min: w
    } = ml(E), O = {
      theme: s,
      token: d,
      hashId: f,
      nonce: () => p == null ? void 0 : p.nonce,
      clientOnly: n.clientOnly,
      layer: {
        name: "antd"
      },
      // antd is always at top of styles
      order: n.order || -999
    };
    return Qr(Object.assign(Object.assign({}, O), {
      clientOnly: !1,
      path: ["Shared", A]
    }), () => [{
      // Link
      "&": pl(d)
    }]), Ni(m, p), [Qr(Object.assign(Object.assign({}, O), {
      path: [a, c, m]
    }), () => {
      if (n.injectStyle === !1)
        return [];
      const {
        token: P,
        flush: N
      } = yl(d), F = Bi(i, u, r), G = `.${c}`, H = ki(i, u, F, {
        deprecatedTokens: n.deprecatedTokens
      });
      g && Object.keys(F).forEach((W) => {
        F[W] = `var(${qt(W, ho(i, g.prefix))})`;
      });
      const B = bt(P, {
        componentCls: G,
        prefixCls: c,
        iconCls: `.${m}`,
        antCls: `.${A}`,
        calc: _,
        // @ts-ignore
        max: $,
        // @ts-ignore
        min: w
      }, g ? F : H), j = t(B, {
        hashId: f,
        prefixCls: c,
        rootPrefixCls: A,
        iconPrefixCls: m
      });
      return N(i, H), [n.resetStyle === !1 ? null : vl(B, c, l, n.resetFont), j];
    }), f];
  };
}
const Sl = (e, t, r, n) => {
  const o = Pn(e, t, r, Object.assign({
    resetStyle: !1,
    // Sub Style should default after root one
    order: -998
  }, n)), i = (a) => {
    let {
      prefixCls: c,
      rootCls: l = c
    } = a;
    return o(c, l), null;
  };
  return process.env.NODE_ENV !== "production" && (i.displayName = `SubStyle_${Array.isArray(e) ? e.join(".") : e}`), i;
}, Cl = (e, t, r) => {
  const {
    unitless: n,
    injectStyle: o = !0,
    prefixToken: i
  } = r, a = (l) => {
    let {
      rootCls: s,
      cssVar: u
    } = l;
    const [, f] = ot();
    return fs({
      path: [e],
      prefix: u.prefix,
      key: u == null ? void 0 : u.key,
      unitless: n,
      ignore: _i,
      token: f,
      scope: s
    }, () => {
      const d = Bi(e, f, t), g = ki(e, f, d, {
        deprecatedTokens: r == null ? void 0 : r.deprecatedTokens
      });
      return Object.keys(d).forEach((C) => {
        g[i(C)] = g[C], delete g[C];
      }), g;
    }), null;
  };
  return (l) => {
    const [, , , , s] = ot();
    return [(u) => o && s ? /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(a, {
      rootCls: l,
      cssVar: s,
      component: e
    }), u) : u, s == null ? void 0 : s.key];
  };
}, El = (e, t, r, n) => {
  const o = Array.isArray(e) ? e[0] : e;
  function i(f) {
    return `${o}${f.slice(0, 1).toUpperCase()}${f.slice(1)}`;
  }
  const a = n && n.unitless || {}, c = Object.assign(Object.assign({}, $i), {
    [i("zIndexPopup")]: !0
  });
  Object.keys(a).forEach((f) => {
    c[i(f)] = a[f];
  });
  const l = Object.assign(Object.assign({}, n), {
    unitless: c,
    prefixToken: i
  }), s = Pn(e, t, r, l), u = Cl(o, r, l);
  return function(f) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
    const [, g] = s(f, d), [C, m] = u(d);
    return [C, g, m];
  };
}, xl = Object.assign({}, h), {
  useId: mo
} = xl, wl = () => "", Ol = typeof mo > "u" ? wl : mo;
function Tl(e, t, r) {
  var n, o;
  const i = mt("ConfigProvider"), a = e || {}, c = a.inherit === !1 || !t ? Object.assign(Object.assign({}, rn), {
    hashed: (n = t == null ? void 0 : t.hashed) !== null && n !== void 0 ? n : rn.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, l = Ol();
  if (process.env.NODE_ENV !== "production") {
    const s = a.cssVar || c.cssVar, u = !!(typeof a.cssVar == "object" && (!((o = a.cssVar) === null || o === void 0) && o.key) || l);
    process.env.NODE_ENV !== "production" && i(!s || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return No(() => {
    var s, u;
    if (!e)
      return t;
    const f = Object.assign({}, c.components);
    Object.keys(e.components || {}).forEach((C) => {
      f[C] = Object.assign(Object.assign({}, f[C]), e.components[C]);
    });
    const d = `css-var-${l.replace(/:/g, "")}`, g = ((s = a.cssVar) !== null && s !== void 0 ? s : c.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: r == null ? void 0 : r.prefixCls
    }, typeof c.cssVar == "object" ? c.cssVar : {}), typeof a.cssVar == "object" ? a.cssVar : {}), {
      key: typeof a.cssVar == "object" && ((u = a.cssVar) === null || u === void 0 ? void 0 : u.key) || d
    });
    return Object.assign(Object.assign(Object.assign({}, c), a), {
      token: Object.assign(Object.assign({}, c.token), a.token),
      components: f,
      cssVar: g
    });
  }, [a, c], (s, u) => s.some((f, d) => {
    const g = u[d];
    return !oc(f, g, !0);
  }));
}
var Al = ["children"], Hi = /* @__PURE__ */ h.createContext({});
function Pl(e) {
  var t = e.children, r = Pt(e, Al);
  return /* @__PURE__ */ h.createElement(Hi.Provider, {
    value: r
  }, t);
}
var $l = /* @__PURE__ */ function(e) {
  sr(r, e);
  var t = Do(r);
  function r() {
    return Ie(this, r), t.apply(this, arguments);
  }
  return Le(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(h.Component);
function _l(e) {
  var t = h.useReducer(function(c) {
    return c + 1;
  }, 0), r = z(t, 2), n = r[1], o = h.useRef(e), i = ir(function() {
    return o.current;
  }), a = ir(function(c) {
    o.current = typeof c == "function" ? c(o.current) : c, n();
  });
  return [i, a];
}
var ze = "none", Vt = "appear", Wt = "enter", Gt = "leave", bo = "none", he = "prepare", lt = "start", ut = "active", $n = "end", Di = "prepared";
function yo(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function Rl(e, t) {
  var r = {
    animationend: yo("Animation", "AnimationEnd"),
    transitionend: yo("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var Ml = Rl(Ne(), typeof window < "u" ? window : {}), zi = {};
if (Ne()) {
  var jl = document.createElement("div");
  zi = jl.style;
}
var Ut = {};
function Fi(e) {
  if (Ut[e])
    return Ut[e];
  var t = Ml[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var i = r[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in zi)
        return Ut[e] = t[i], Ut[e];
    }
  return "";
}
var Vi = Fi("animationend"), Wi = Fi("transitionend"), Gi = !!(Vi && Wi), So = Vi || "animationend", Co = Wi || "transitionend";
function Eo(e, t) {
  if (!e) return null;
  if (q(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const Il = function(e) {
  var t = Ze();
  function r(o) {
    o && (o.removeEventListener(Co, e), o.removeEventListener(So, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(Co, e), o.addEventListener(So, e), t.current = o);
  }
  return h.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var Ui = Ne() ? Ma : Je;
const Ll = function() {
  var e = h.useRef(null);
  function t() {
    We.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = We(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = i;
  }
  return h.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var Nl = [he, lt, ut, $n], Bl = [he, Di], Xi = !1, kl = !0;
function Ki(e) {
  return e === ut || e === $n;
}
const Hl = function(e, t, r) {
  var n = nn(bo), o = z(n, 2), i = o[0], a = o[1], c = Ll(), l = z(c, 2), s = l[0], u = l[1];
  function f() {
    a(he, !0);
  }
  var d = t ? Bl : Nl;
  return Ui(function() {
    if (i !== bo && i !== $n) {
      var g = d.indexOf(i), C = d[g + 1], m = r(i);
      m === Xi ? a(C, !0) : C && s(function(p) {
        function A() {
          p.isCanceled() || a(C, !0);
        }
        m === !0 ? A() : Promise.resolve(m).then(A);
      });
    }
  }, [e, i]), h.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, i];
};
function Dl(e, t, r, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, a = n.motionAppear, c = a === void 0 ? !0 : a, l = n.motionLeave, s = l === void 0 ? !0 : l, u = n.motionDeadline, f = n.motionLeaveImmediately, d = n.onAppearPrepare, g = n.onEnterPrepare, C = n.onLeavePrepare, m = n.onAppearStart, p = n.onEnterStart, A = n.onLeaveStart, E = n.onAppearActive, _ = n.onEnterActive, $ = n.onLeaveActive, w = n.onAppearEnd, O = n.onEnterEnd, S = n.onLeaveEnd, P = n.onVisibleChanged, N = nn(), F = z(N, 2), G = F[0], H = F[1], B = _l(ze), j = z(B, 2), W = j[0], y = j[1], v = nn(null), b = z(v, 2), x = b[0], R = b[1], T = W(), I = Ze(!1), k = Ze(null);
  function K() {
    return r();
  }
  var ne = Ze(!1);
  function ce() {
    y(ze), R(null, !0);
  }
  var Q = ir(function(re) {
    var Z = W();
    if (Z !== ze) {
      var se = K();
      if (!(re && !re.deadline && re.target !== se)) {
        var Se = ne.current, Y;
        Z === Vt && Se ? Y = w == null ? void 0 : w(se, re) : Z === Wt && Se ? Y = O == null ? void 0 : O(se, re) : Z === Gt && Se && (Y = S == null ? void 0 : S(se, re)), Se && Y !== !1 && ce();
      }
    }
  }), Be = Il(Q), ke = z(Be, 1), Ke = ke[0], we = function(Z) {
    switch (Z) {
      case Vt:
        return V(V(V({}, he, d), lt, m), ut, E);
      case Wt:
        return V(V(V({}, he, g), lt, p), ut, _);
      case Gt:
        return V(V(V({}, he, C), lt, A), ut, $);
      default:
        return {};
    }
  }, pe = h.useMemo(function() {
    return we(T);
  }, [T]), He = Hl(T, !e, function(re) {
    if (re === he) {
      var Z = pe[he];
      return Z ? Z(K()) : Xi;
    }
    if (te in pe) {
      var se;
      R(((se = pe[te]) === null || se === void 0 ? void 0 : se.call(pe, K(), null)) || null);
    }
    return te === ut && T !== ze && (Ke(K()), u > 0 && (clearTimeout(k.current), k.current = setTimeout(function() {
      Q({
        deadline: !0
      });
    }, u))), te === Di && ce(), kl;
  }), M = z(He, 2), Oe = M[0], te = M[1], Te = Ki(te);
  ne.current = Te, Ui(function() {
    H(t);
    var re = I.current;
    I.current = !0;
    var Z;
    !re && t && c && (Z = Vt), re && t && i && (Z = Wt), (re && !t && s || !re && f && !t && s) && (Z = Gt);
    var se = we(Z);
    Z && (e || se[he]) ? (y(Z), Oe()) : y(ze);
  }, [t]), Je(function() {
    // Cancel appear
    (T === Vt && !c || // Cancel enter
    T === Wt && !i || // Cancel leave
    T === Gt && !s) && y(ze);
  }, [c, i, s]), Je(function() {
    return function() {
      I.current = !1, clearTimeout(k.current);
    };
  }, []);
  var De = h.useRef(!1);
  Je(function() {
    G && (De.current = !0), G !== void 0 && T === ze && ((De.current || G) && (P == null || P(G)), De.current = !0);
  }, [G, T]);
  var qe = x;
  return pe[he] && te === lt && (qe = L({
    transition: "none"
  }, qe)), [T, te, qe, G ?? t];
}
function zl(e) {
  var t = e;
  q(e) === "object" && (t = e.transitionSupport);
  function r(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ h.forwardRef(function(o, i) {
    var a = o.visible, c = a === void 0 ? !0 : a, l = o.removeOnLeave, s = l === void 0 ? !0 : l, u = o.forceRender, f = o.children, d = o.motionName, g = o.leavedClassName, C = o.eventProps, m = h.useContext(Hi), p = m.motion, A = r(o, p), E = Ze(), _ = Ze();
    function $() {
      try {
        return E.current instanceof HTMLElement ? E.current : Ka(_.current);
      } catch {
        return null;
      }
    }
    var w = Dl(A, c, $, o), O = z(w, 4), S = O[0], P = O[1], N = O[2], F = O[3], G = h.useRef(F);
    F && (G.current = !0);
    var H = h.useCallback(function(x) {
      E.current = x, Bo(i, x);
    }, [i]), B, j = L(L({}, C), {}, {
      visible: c
    });
    if (!f)
      B = null;
    else if (S === ze)
      F ? B = f(L({}, j), H) : !s && G.current && g ? B = f(L(L({}, j), {}, {
        className: g
      }), H) : u || !s && !g ? B = f(L(L({}, j), {}, {
        style: {
          display: "none"
        }
      }), H) : B = null;
    else {
      var W;
      P === he ? W = "prepare" : Ki(P) ? W = "active" : P === lt && (W = "start");
      var y = Eo(d, "".concat(S, "-").concat(W));
      B = f(L(L({}, j), {}, {
        className: me(Eo(d, S), V(V({}, y, y && W), d, typeof d == "string")),
        style: N
      }), H);
    }
    if (/* @__PURE__ */ h.isValidElement(B) && ko(B)) {
      var v = B, b = v.ref;
      b || (B = /* @__PURE__ */ h.cloneElement(B, {
        ref: H
      }));
    }
    return /* @__PURE__ */ h.createElement($l, {
      ref: _
    }, B);
  });
  return n.displayName = "CSSMotion", n;
}
const _n = zl(Gi);
var an = "add", cn = "keep", sn = "remove", jr = "removed";
function Fl(e) {
  var t;
  return e && q(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, L(L({}, t), {}, {
    key: String(t.key)
  });
}
function ln() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Fl);
}
function Vl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, i = ln(e), a = ln(t);
  i.forEach(function(s) {
    for (var u = !1, f = n; f < o; f += 1) {
      var d = a[f];
      if (d.key === s.key) {
        n < f && (r = r.concat(a.slice(n, f).map(function(g) {
          return L(L({}, g), {}, {
            status: an
          });
        })), n = f), r.push(L(L({}, d), {}, {
          status: cn
        })), n += 1, u = !0;
        break;
      }
    }
    u || r.push(L(L({}, s), {}, {
      status: sn
    }));
  }), n < o && (r = r.concat(a.slice(n).map(function(s) {
    return L(L({}, s), {}, {
      status: an
    });
  })));
  var c = {};
  r.forEach(function(s) {
    var u = s.key;
    c[u] = (c[u] || 0) + 1;
  });
  var l = Object.keys(c).filter(function(s) {
    return c[s] > 1;
  });
  return l.forEach(function(s) {
    r = r.filter(function(u) {
      var f = u.key, d = u.status;
      return f !== s || d !== sn;
    }), r.forEach(function(u) {
      u.key === s && (u.status = cn);
    });
  }), r;
}
var Wl = ["component", "children", "onVisibleChanged", "onAllRemoved"], Gl = ["status"], Ul = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Xl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _n, r = /* @__PURE__ */ function(n) {
    sr(i, n);
    var o = Do(i);
    function i() {
      var a;
      Ie(this, i);
      for (var c = arguments.length, l = new Array(c), s = 0; s < c; s++)
        l[s] = arguments[s];
      return a = o.call.apply(o, [this].concat(l)), V(zr(a), "state", {
        keyEntities: []
      }), V(zr(a), "removeKey", function(u) {
        var f = a.state.keyEntities, d = f.map(function(g) {
          return g.key !== u ? g : L(L({}, g), {}, {
            status: jr
          });
        });
        return a.setState({
          keyEntities: d
        }), d.filter(function(g) {
          var C = g.status;
          return C !== jr;
        }).length;
      }), a;
    }
    return Le(i, [{
      key: "render",
      value: function() {
        var c = this, l = this.state.keyEntities, s = this.props, u = s.component, f = s.children, d = s.onVisibleChanged, g = s.onAllRemoved, C = Pt(s, Wl), m = u || h.Fragment, p = {};
        return Ul.forEach(function(A) {
          p[A] = C[A], delete C[A];
        }), delete C.keys, /* @__PURE__ */ h.createElement(m, C, l.map(function(A, E) {
          var _ = A.status, $ = Pt(A, Gl), w = _ === an || _ === cn;
          return /* @__PURE__ */ h.createElement(t, ft({}, p, {
            key: $.key,
            visible: w,
            eventProps: $,
            onVisibleChanged: function(S) {
              if (d == null || d(S, {
                key: $.key
              }), !S) {
                var P = c.removeKey($.key);
                P === 0 && g && g();
              }
            }
          }), function(O, S) {
            return f(L(L({}, O), {}, {
              index: E
            }), S);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(c, l) {
        var s = c.keys, u = l.keyEntities, f = ln(s), d = Vl(u, f);
        return {
          keyEntities: d.filter(function(g) {
            var C = u.find(function(m) {
              var p = m.key;
              return g.key === p;
            });
            return !(C && C.status === jr && g.status === sn);
          })
        };
      }
    }]), i;
  }(h.Component);
  return V(r, "defaultProps", {
    component: "div"
  }), r;
}
Xl(Gi);
function Kl(e) {
  const {
    children: t
  } = e, [, r] = ot(), {
    motion: n
  } = r, o = h.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ h.createElement(Pl, {
    motion: n
  }, t) : t;
}
const qi = /* @__PURE__ */ h.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return mt("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (qi.displayName = "PropWarning");
const ql = process.env.NODE_ENV !== "production" ? qi : () => null;
var Yl = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let un = !1;
process.env.NODE_ENV;
const Ql = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], Yi = "ant";
let Qi;
function Zl() {
  return Qi || Yi;
}
function Jl(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const eu = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: o
  } = e;
  t !== void 0 && (Qi = t), n && Jl(n) && (process.env.NODE_ENV !== "production" && vr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Zs(Zl(), n));
}, tu = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    form: a,
    locale: c,
    componentSize: l,
    direction: s,
    space: u,
    virtual: f,
    dropdownMatchSelectWidth: d,
    popupMatchSelectWidth: g,
    popupOverflow: C,
    legacyLocale: m,
    parentContext: p,
    iconPrefixCls: A,
    theme: E,
    componentDisabled: _,
    segmented: $,
    statistic: w,
    spin: O,
    calendar: S,
    carousel: P,
    cascader: N,
    collapse: F,
    typography: G,
    checkbox: H,
    descriptions: B,
    divider: j,
    drawer: W,
    skeleton: y,
    steps: v,
    image: b,
    layout: x,
    list: R,
    mentions: T,
    modal: I,
    progress: k,
    result: K,
    slider: ne,
    breadcrumb: ce,
    menu: Q,
    pagination: Be,
    input: ke,
    textArea: Ke,
    empty: we,
    badge: pe,
    radio: He,
    rate: M,
    switch: Oe,
    transfer: te,
    avatar: Te,
    message: De,
    tag: qe,
    table: re,
    card: Z,
    tabs: se,
    timeline: Se,
    timePicker: Y,
    upload: ve,
    notification: Ct,
    tree: pa,
    colorPicker: va,
    datePicker: ga,
    rangePicker: ha,
    flex: ma,
    wave: ba,
    dropdown: ya,
    warning: Sa,
    tour: Ca,
    floatButtonGroup: Ea
  } = e, jn = h.useCallback((J, ie) => {
    const {
      prefixCls: Ce
    } = e;
    if (ie)
      return ie;
    const Ee = Ce || p.getPrefixCls("");
    return J ? `${Ee}-${J}` : Ee;
  }, [p.getPrefixCls, e.prefixCls]), Et = A || p.iconPrefixCls || Ai, xt = r || p.csp;
  Ni(Et, xt);
  const Lt = Tl(E, p.theme, {
    prefixCls: jn("")
  });
  process.env.NODE_ENV !== "production" && (un = un || !!Lt);
  const yr = {
    csp: xt,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    locale: c || m,
    direction: s,
    space: u,
    virtual: f,
    popupMatchSelectWidth: g ?? d,
    popupOverflow: C,
    getPrefixCls: jn,
    iconPrefixCls: Et,
    theme: Lt,
    segmented: $,
    statistic: w,
    spin: O,
    calendar: S,
    carousel: P,
    cascader: N,
    collapse: F,
    typography: G,
    checkbox: H,
    descriptions: B,
    divider: j,
    drawer: W,
    skeleton: y,
    steps: v,
    image: b,
    input: ke,
    textArea: Ke,
    layout: x,
    list: R,
    mentions: T,
    modal: I,
    progress: k,
    result: K,
    slider: ne,
    breadcrumb: ce,
    menu: Q,
    pagination: Be,
    empty: we,
    badge: pe,
    radio: He,
    rate: M,
    switch: Oe,
    transfer: te,
    avatar: Te,
    message: De,
    tag: qe,
    table: re,
    card: Z,
    tabs: se,
    timeline: Se,
    timePicker: Y,
    upload: ve,
    notification: Ct,
    tree: pa,
    colorPicker: va,
    datePicker: ga,
    rangePicker: ha,
    flex: ma,
    wave: ba,
    dropdown: ya,
    warning: Sa,
    tour: Ca,
    floatButtonGroup: Ea
  };
  process.env.NODE_ENV !== "production" && mt("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const it = Object.assign({}, p);
  Object.keys(yr).forEach((J) => {
    yr[J] !== void 0 && (it[J] = yr[J]);
  }), Ql.forEach((J) => {
    const ie = e[J];
    ie && (it[J] = ie);
  }), typeof n < "u" && (it.button = Object.assign({
    autoInsertSpace: n
  }, it.button));
  const at = No(() => it, it, (J, ie) => {
    const Ce = Object.keys(J), Ee = Object.keys(ie);
    return Ce.length !== Ee.length || Ce.some((Nt) => J[Nt] !== ie[Nt]);
  }), xa = h.useMemo(() => ({
    prefixCls: Et,
    csp: xt
  }), [Et, xt]);
  let oe = /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(ql, {
    dropdownMatchSelectWidth: d
  }), t);
  const In = h.useMemo(() => {
    var J, ie, Ce, Ee;
    return hs(((J = gr.Form) === null || J === void 0 ? void 0 : J.defaultValidateMessages) || {}, ((Ce = (ie = at.locale) === null || ie === void 0 ? void 0 : ie.Form) === null || Ce === void 0 ? void 0 : Ce.defaultValidateMessages) || {}, ((Ee = at.form) === null || Ee === void 0 ? void 0 : Ee.validateMessages) || {}, (a == null ? void 0 : a.validateMessages) || {});
  }, [at, a == null ? void 0 : a.validateMessages]);
  Object.keys(In).length > 0 && (oe = /* @__PURE__ */ h.createElement(bs.Provider, {
    value: In
  }, oe)), c && (oe = /* @__PURE__ */ h.createElement(Si, {
    locale: c,
    _ANT_MARK__: yi
  }, oe)), (Et || xt) && (oe = /* @__PURE__ */ h.createElement(Tn.Provider, {
    value: xa
  }, oe)), l && (oe = /* @__PURE__ */ h.createElement(el, {
    size: l
  }, oe)), oe = /* @__PURE__ */ h.createElement(Kl, null, oe);
  const wa = h.useMemo(() => {
    const J = Lt || {}, {
      algorithm: ie,
      token: Ce,
      components: Ee,
      cssVar: Nt
    } = J, Oa = Yl(J, ["algorithm", "token", "components", "cssVar"]), Ln = ie && (!Array.isArray(ie) || ie.length > 0) ? Gr(ie) : Oi, Sr = {};
    Object.entries(Ee || {}).forEach((Ta) => {
      let [Aa, Pa] = Ta;
      const Ae = Object.assign({}, Pa);
      "algorithm" in Ae && (Ae.algorithm === !0 ? Ae.theme = Ln : (Array.isArray(Ae.algorithm) || typeof Ae.algorithm == "function") && (Ae.theme = Gr(Ae.algorithm)), delete Ae.algorithm), Sr[Aa] = Ae;
    });
    const Nn = Object.assign(Object.assign({}, Rt), Ce);
    return Object.assign(Object.assign({}, Oa), {
      theme: Ln,
      token: Nn,
      components: Sr,
      override: Object.assign({
        override: Nn
      }, Sr),
      cssVar: Nt
    });
  }, [Lt]);
  return E && (oe = /* @__PURE__ */ h.createElement(Ti.Provider, {
    value: wa
  }, oe)), at.warning && (oe = /* @__PURE__ */ h.createElement(hi.Provider, {
    value: at.warning
  }, oe)), _ !== void 0 && (oe = /* @__PURE__ */ h.createElement(Js, {
    disabled: _
  }, oe)), /* @__PURE__ */ h.createElement(Xe.Provider, {
    value: at
  }, oe);
}, yt = (e) => {
  const t = h.useContext(Xe), r = h.useContext(bi);
  return /* @__PURE__ */ h.createElement(tu, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
yt.ConfigContext = Xe;
yt.SizeContext = gt;
yt.config = eu;
yt.useConfig = tl;
Object.defineProperty(yt, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && vr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), gt)
});
process.env.NODE_ENV !== "production" && (yt.displayName = "ConfigProvider");
function Zi(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function ru(e) {
  return Zi(e) instanceof ShadowRoot;
}
function nu(e) {
  return ru(e) ? Zi(e) : null;
}
function ou(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function iu(e, t) {
  Ue(e, "[@ant-design/icons] ".concat(t));
}
function xo(e) {
  return q(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (q(e.icon) === "object" || typeof e.icon == "function");
}
function wo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[ou(r)] = n;
    }
    return t;
  }, {});
}
function fn(e, t, r) {
  return r ? /* @__PURE__ */ D.createElement(e.tag, L(L({
    key: t
  }, wo(e.attrs)), r), (e.children || []).map(function(n, o) {
    return fn(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ D.createElement(e.tag, L({
    key: t
  }, wo(e.attrs)), (e.children || []).map(function(n, o) {
    return fn(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function Ji(e) {
  return nt(e)[0];
}
function ea(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var au = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, cu = function(t) {
  var r = xe(Tn), n = r.csp, o = r.prefixCls, i = au;
  o && (i = i.replace(/anticon/g, o)), Je(function() {
    var a = t.current, c = nu(a);
    et(i, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: c
    });
  }, []);
}, su = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Tt = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function lu(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  Tt.primaryColor = t, Tt.secondaryColor = r || Ji(t), Tt.calculated = !!r;
}
function uu() {
  return L({}, Tt);
}
var St = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, i = t.style, a = t.primaryColor, c = t.secondaryColor, l = Pt(t, su), s = h.useRef(), u = Tt;
  if (a && (u = {
    primaryColor: a,
    secondaryColor: c || Ji(a)
  }), cu(s), iu(xo(r), "icon should be icon definiton, but got ".concat(r)), !xo(r))
    return null;
  var f = r;
  return f && typeof f.icon == "function" && (f = L(L({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), fn(f.icon, "svg-".concat(f.name), L(L({
    className: n,
    onClick: o,
    style: i,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: s
  }));
};
St.displayName = "IconReact";
St.getTwoToneColors = uu;
St.setTwoToneColors = lu;
function ta(e) {
  var t = ea(e), r = z(t, 2), n = r[0], o = r[1];
  return St.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function fu() {
  var e = St.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var du = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
ta(ks.primary);
var hr = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, o = e.spin, i = e.rotate, a = e.tabIndex, c = e.onClick, l = e.twoToneColor, s = Pt(e, du), u = h.useContext(Tn), f = u.prefixCls, d = f === void 0 ? "anticon" : f, g = u.rootClassName, C = me(g, d, V(V({}, "".concat(d, "-").concat(n.name), !!n.name), "".concat(d, "-spin"), !!o || n.name === "loading"), r), m = a;
  m === void 0 && c && (m = -1);
  var p = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, A = ea(l), E = z(A, 2), _ = E[0], $ = E[1];
  return /* @__PURE__ */ h.createElement("span", ft({
    role: "img",
    "aria-label": n.name
  }, s, {
    ref: t,
    tabIndex: m,
    onClick: c,
    className: C
  }), /* @__PURE__ */ h.createElement(St, {
    icon: n,
    primaryColor: _,
    secondaryColor: $,
    style: p
  }));
});
hr.displayName = "AntdIcon";
hr.getTwoToneColor = fu;
hr.setTwoToneColor = ta;
function pu(e) {
  return e && /* @__PURE__ */ D.isValidElement(e) && e.type === D.Fragment;
}
const vu = (e, t, r) => /* @__PURE__ */ D.isValidElement(e) ? /* @__PURE__ */ D.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
function ra(e, t) {
  return vu(e, e, t);
}
var gu = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, hu = function(t, r) {
  return /* @__PURE__ */ h.createElement(hr, ft({}, t, {
    ref: r,
    icon: gu
  }));
}, na = /* @__PURE__ */ h.forwardRef(hu);
process.env.NODE_ENV !== "production" && (na.displayName = "LoadingOutlined");
function Mt() {
  Mt = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(y, v, b) {
    y[v] = b.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", l = i.toStringTag || "@@toStringTag";
  function s(y, v, b) {
    return Object.defineProperty(y, v, {
      value: b,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), y[v];
  }
  try {
    s({}, "");
  } catch {
    s = function(b, x, R) {
      return b[x] = R;
    };
  }
  function u(y, v, b, x) {
    var R = v && v.prototype instanceof A ? v : A, T = Object.create(R.prototype), I = new j(x || []);
    return o(T, "_invoke", {
      value: F(y, b, I)
    }), T;
  }
  function f(y, v, b) {
    try {
      return {
        type: "normal",
        arg: y.call(v, b)
      };
    } catch (x) {
      return {
        type: "throw",
        arg: x
      };
    }
  }
  t.wrap = u;
  var d = "suspendedStart", g = "suspendedYield", C = "executing", m = "completed", p = {};
  function A() {
  }
  function E() {
  }
  function _() {
  }
  var $ = {};
  s($, a, function() {
    return this;
  });
  var w = Object.getPrototypeOf, O = w && w(w(W([])));
  O && O !== r && n.call(O, a) && ($ = O);
  var S = _.prototype = A.prototype = Object.create($);
  function P(y) {
    ["next", "throw", "return"].forEach(function(v) {
      s(y, v, function(b) {
        return this._invoke(v, b);
      });
    });
  }
  function N(y, v) {
    function b(R, T, I, k) {
      var K = f(y[R], y, T);
      if (K.type !== "throw") {
        var ne = K.arg, ce = ne.value;
        return ce && q(ce) == "object" && n.call(ce, "__await") ? v.resolve(ce.__await).then(function(Q) {
          b("next", Q, I, k);
        }, function(Q) {
          b("throw", Q, I, k);
        }) : v.resolve(ce).then(function(Q) {
          ne.value = Q, I(ne);
        }, function(Q) {
          return b("throw", Q, I, k);
        });
      }
      k(K.arg);
    }
    var x;
    o(this, "_invoke", {
      value: function(T, I) {
        function k() {
          return new v(function(K, ne) {
            b(T, I, K, ne);
          });
        }
        return x = x ? x.then(k, k) : k();
      }
    });
  }
  function F(y, v, b) {
    var x = d;
    return function(R, T) {
      if (x === C) throw Error("Generator is already running");
      if (x === m) {
        if (R === "throw") throw T;
        return {
          value: e,
          done: !0
        };
      }
      for (b.method = R, b.arg = T; ; ) {
        var I = b.delegate;
        if (I) {
          var k = G(I, b);
          if (k) {
            if (k === p) continue;
            return k;
          }
        }
        if (b.method === "next") b.sent = b._sent = b.arg;
        else if (b.method === "throw") {
          if (x === d) throw x = m, b.arg;
          b.dispatchException(b.arg);
        } else b.method === "return" && b.abrupt("return", b.arg);
        x = C;
        var K = f(y, v, b);
        if (K.type === "normal") {
          if (x = b.done ? m : g, K.arg === p) continue;
          return {
            value: K.arg,
            done: b.done
          };
        }
        K.type === "throw" && (x = m, b.method = "throw", b.arg = K.arg);
      }
    };
  }
  function G(y, v) {
    var b = v.method, x = y.iterator[b];
    if (x === e) return v.delegate = null, b === "throw" && y.iterator.return && (v.method = "return", v.arg = e, G(y, v), v.method === "throw") || b !== "return" && (v.method = "throw", v.arg = new TypeError("The iterator does not provide a '" + b + "' method")), p;
    var R = f(x, y.iterator, v.arg);
    if (R.type === "throw") return v.method = "throw", v.arg = R.arg, v.delegate = null, p;
    var T = R.arg;
    return T ? T.done ? (v[y.resultName] = T.value, v.next = y.nextLoc, v.method !== "return" && (v.method = "next", v.arg = e), v.delegate = null, p) : T : (v.method = "throw", v.arg = new TypeError("iterator result is not an object"), v.delegate = null, p);
  }
  function H(y) {
    var v = {
      tryLoc: y[0]
    };
    1 in y && (v.catchLoc = y[1]), 2 in y && (v.finallyLoc = y[2], v.afterLoc = y[3]), this.tryEntries.push(v);
  }
  function B(y) {
    var v = y.completion || {};
    v.type = "normal", delete v.arg, y.completion = v;
  }
  function j(y) {
    this.tryEntries = [{
      tryLoc: "root"
    }], y.forEach(H, this), this.reset(!0);
  }
  function W(y) {
    if (y || y === "") {
      var v = y[a];
      if (v) return v.call(y);
      if (typeof y.next == "function") return y;
      if (!isNaN(y.length)) {
        var b = -1, x = function R() {
          for (; ++b < y.length; ) if (n.call(y, b)) return R.value = y[b], R.done = !1, R;
          return R.value = e, R.done = !0, R;
        };
        return x.next = x;
      }
    }
    throw new TypeError(q(y) + " is not iterable");
  }
  return E.prototype = _, o(S, "constructor", {
    value: _,
    configurable: !0
  }), o(_, "constructor", {
    value: E,
    configurable: !0
  }), E.displayName = s(_, l, "GeneratorFunction"), t.isGeneratorFunction = function(y) {
    var v = typeof y == "function" && y.constructor;
    return !!v && (v === E || (v.displayName || v.name) === "GeneratorFunction");
  }, t.mark = function(y) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(y, _) : (y.__proto__ = _, s(y, l, "GeneratorFunction")), y.prototype = Object.create(S), y;
  }, t.awrap = function(y) {
    return {
      __await: y
    };
  }, P(N.prototype), s(N.prototype, c, function() {
    return this;
  }), t.AsyncIterator = N, t.async = function(y, v, b, x, R) {
    R === void 0 && (R = Promise);
    var T = new N(u(y, v, b, x), R);
    return t.isGeneratorFunction(v) ? T : T.next().then(function(I) {
      return I.done ? I.value : T.next();
    });
  }, P(S), s(S, l, "Generator"), s(S, a, function() {
    return this;
  }), s(S, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(y) {
    var v = Object(y), b = [];
    for (var x in v) b.push(x);
    return b.reverse(), function R() {
      for (; b.length; ) {
        var T = b.pop();
        if (T in v) return R.value = T, R.done = !1, R;
      }
      return R.done = !0, R;
    };
  }, t.values = W, j.prototype = {
    constructor: j,
    reset: function(v) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(B), !v) for (var b in this) b.charAt(0) === "t" && n.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = e);
    },
    stop: function() {
      this.done = !0;
      var v = this.tryEntries[0].completion;
      if (v.type === "throw") throw v.arg;
      return this.rval;
    },
    dispatchException: function(v) {
      if (this.done) throw v;
      var b = this;
      function x(ne, ce) {
        return I.type = "throw", I.arg = v, b.next = ne, ce && (b.method = "next", b.arg = e), !!ce;
      }
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var T = this.tryEntries[R], I = T.completion;
        if (T.tryLoc === "root") return x("end");
        if (T.tryLoc <= this.prev) {
          var k = n.call(T, "catchLoc"), K = n.call(T, "finallyLoc");
          if (k && K) {
            if (this.prev < T.catchLoc) return x(T.catchLoc, !0);
            if (this.prev < T.finallyLoc) return x(T.finallyLoc);
          } else if (k) {
            if (this.prev < T.catchLoc) return x(T.catchLoc, !0);
          } else {
            if (!K) throw Error("try statement without catch or finally");
            if (this.prev < T.finallyLoc) return x(T.finallyLoc);
          }
        }
      }
    },
    abrupt: function(v, b) {
      for (var x = this.tryEntries.length - 1; x >= 0; --x) {
        var R = this.tryEntries[x];
        if (R.tryLoc <= this.prev && n.call(R, "finallyLoc") && this.prev < R.finallyLoc) {
          var T = R;
          break;
        }
      }
      T && (v === "break" || v === "continue") && T.tryLoc <= b && b <= T.finallyLoc && (T = null);
      var I = T ? T.completion : {};
      return I.type = v, I.arg = b, T ? (this.method = "next", this.next = T.finallyLoc, p) : this.complete(I);
    },
    complete: function(v, b) {
      if (v.type === "throw") throw v.arg;
      return v.type === "break" || v.type === "continue" ? this.next = v.arg : v.type === "return" ? (this.rval = this.arg = v.arg, this.method = "return", this.next = "end") : v.type === "normal" && b && (this.next = b), p;
    },
    finish: function(v) {
      for (var b = this.tryEntries.length - 1; b >= 0; --b) {
        var x = this.tryEntries[b];
        if (x.finallyLoc === v) return this.complete(x.completion, x.afterLoc), B(x), p;
      }
    },
    catch: function(v) {
      for (var b = this.tryEntries.length - 1; b >= 0; --b) {
        var x = this.tryEntries[b];
        if (x.tryLoc === v) {
          var R = x.completion;
          if (R.type === "throw") {
            var T = R.arg;
            B(x);
          }
          return T;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(v, b, x) {
      return this.delegate = {
        iterator: W(v),
        resultName: b,
        nextLoc: x
      }, this.method === "next" && (this.arg = e), p;
    }
  }, t;
}
function Oo(e, t, r, n, o, i, a) {
  try {
    var c = e[i](a), l = c.value;
  } catch (s) {
    return void r(s);
  }
  c.done ? t(l) : Promise.resolve(l).then(n, o);
}
function oa(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var i = e.apply(t, r);
      function a(l) {
        Oo(i, n, o, a, c, "next", l);
      }
      function c(l) {
        Oo(i, n, o, a, c, "throw", l);
      }
      a(void 0);
    });
  };
}
var It = L({}, Na), mu = It.version, bu = It.render, yu = It.unmountComponentAtNode, mr;
try {
  var Su = Number((mu || "").split(".")[0]);
  Su >= 18 && (mr = It.createRoot);
} catch {
}
function To(e) {
  var t = It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && q(t) === "object" && (t.usingClientEntryPoint = e);
}
var ar = "__rc_react_root__";
function Cu(e, t) {
  To(!0);
  var r = t[ar] || mr(t);
  To(!1), r.render(e), t[ar] = r;
}
function Eu(e, t) {
  bu(e, t);
}
function xu(e, t) {
  if (mr) {
    Cu(e, t);
    return;
  }
  Eu(e, t);
}
function wu(e) {
  return dn.apply(this, arguments);
}
function dn() {
  return dn = oa(/* @__PURE__ */ Mt().mark(function e(t) {
    return Mt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[ar]) === null || o === void 0 || o.unmount(), delete t[ar];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), dn.apply(this, arguments);
}
function Ou(e) {
  yu(e);
}
function Tu(e) {
  return pn.apply(this, arguments);
}
function pn() {
  return pn = oa(/* @__PURE__ */ Mt().mark(function e(t) {
    return Mt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (mr === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", wu(t));
        case 2:
          Ou(t);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), pn.apply(this, arguments);
}
const Au = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), i = o.width, a = o.height;
      if (i || a)
        return !0;
    }
  }
  return !1;
}, Pu = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, $u = Pn("Wave", (e) => [Pu(e)]), ia = `${Yi}-wave-target`;
function _u(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Ir(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && _u(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Ru(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return Ir(t) ? t : Ir(r) ? r : Ir(n) ? n : null;
}
function Lr(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Mu = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, o = h.useRef(null), [i, a] = h.useState(null), [c, l] = h.useState([]), [s, u] = h.useState(0), [f, d] = h.useState(0), [g, C] = h.useState(0), [m, p] = h.useState(0), [A, E] = h.useState(!1), _ = {
    left: s,
    top: f,
    width: g,
    height: m,
    borderRadius: c.map((O) => `${O}px`).join(" ")
  };
  i && (_["--wave-color"] = i);
  function $() {
    const O = getComputedStyle(r);
    a(Ru(r));
    const S = O.position === "static", {
      borderLeftWidth: P,
      borderTopWidth: N
    } = O;
    u(S ? r.offsetLeft : Lr(-parseFloat(P))), d(S ? r.offsetTop : Lr(-parseFloat(N))), C(r.offsetWidth), p(r.offsetHeight);
    const {
      borderTopLeftRadius: F,
      borderTopRightRadius: G,
      borderBottomLeftRadius: H,
      borderBottomRightRadius: B
    } = O;
    l([F, G, B, H].map((j) => Lr(parseFloat(j))));
  }
  if (h.useEffect(() => {
    if (r) {
      const O = We(() => {
        $(), E(!0);
      });
      let S;
      return typeof ResizeObserver < "u" && (S = new ResizeObserver($), S.observe(r)), () => {
        We.cancel(O), S == null || S.disconnect();
      };
    }
  }, []), !A)
    return null;
  const w = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(ia));
  return /* @__PURE__ */ h.createElement(_n, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (O, S) => {
      var P;
      if (S.deadline || S.propertyName === "opacity") {
        const N = (P = o.current) === null || P === void 0 ? void 0 : P.parentElement;
        Tu(N).then(() => {
          N == null || N.remove();
        });
      }
      return !1;
    }
  }, (O, S) => {
    let {
      className: P
    } = O;
    return /* @__PURE__ */ h.createElement("div", {
      ref: bn(o, S),
      className: me(t, P, {
        "wave-quick": w
      }),
      style: _
    });
  });
}, ju = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild), xu(/* @__PURE__ */ h.createElement(Mu, Object.assign({}, t, {
    target: e
  })), o);
}, Iu = (e, t, r) => {
  const {
    wave: n
  } = h.useContext(Xe), [, o, i] = ot(), a = ir((s) => {
    const u = e.current;
    if (n != null && n.disabled || !u)
      return;
    const f = u.querySelector(`.${ia}`) || u, {
      showEffect: d
    } = n || {};
    (d || ju)(f, {
      className: t,
      token: o,
      component: r,
      event: s,
      hashId: i
    });
  }), c = h.useRef();
  return (s) => {
    We.cancel(c.current), c.current = We(() => {
      a(s);
    });
  };
}, aa = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: o
  } = xe(Xe), i = Ze(null), a = o("wave"), [, c] = $u(a), l = Iu(i, me(a, c), n);
  if (D.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || r)
      return;
    const f = (d) => {
      !Au(d.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || l(d);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ D.isValidElement(t))
    return t ?? null;
  const s = ko(t) ? bn(t.ref, i) : i;
  return ra(t, {
    ref: s
  });
};
process.env.NODE_ENV !== "production" && (aa.displayName = "Wave");
const Lu = (e) => {
  const t = D.useContext(gt);
  return D.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, Nu = /* @__PURE__ */ h.createContext(null), Bu = (e, t) => {
  const r = h.useContext(Nu), n = h.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = r, c = o === "vertical" ? "-vertical-" : "-";
    return me(`${e}-compact${c}item`, {
      [`${e}-compact${c}first-item`]: i,
      [`${e}-compact${c}last-item`]: a,
      [`${e}-compact${c}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r == null ? void 0 : r.compactSize,
    compactDirection: r == null ? void 0 : r.compactDirection,
    compactItemClassnames: n
  };
};
var ku = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const ca = /* @__PURE__ */ h.createContext(void 0), Hu = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = h.useContext(Xe), {
    prefixCls: n,
    size: o,
    className: i
  } = e, a = ku(e, ["prefixCls", "size", "className"]), c = t("btn-group", n), [, , l] = ot();
  let s = "";
  switch (o) {
    case "large":
      s = "lg";
      break;
    case "small":
      s = "sm";
      break;
  }
  if (process.env.NODE_ENV !== "production") {
    const f = mt("Button.Group");
    process.env.NODE_ENV !== "production" && f(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = me(c, {
    [`${c}-${s}`]: s,
    [`${c}-rtl`]: r === "rtl"
  }, i, l);
  return /* @__PURE__ */ h.createElement(ca.Provider, {
    value: o
  }, /* @__PURE__ */ h.createElement("div", Object.assign({}, a, {
    className: u
  })));
}, Ao = /^[\u4e00-\u9fa5]{2}$/, vn = Ao.test.bind(Ao);
function Po(e) {
  return typeof e == "string";
}
function Xt(e) {
  return e === "text" || e === "link";
}
function Du(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Po(e.type) && vn(e.props.children) ? ra(e, {
    children: e.props.children.split("").join(r)
  }) : Po(e) ? vn(e) ? /* @__PURE__ */ D.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ D.createElement("span", null, e) : pu(e) ? /* @__PURE__ */ D.createElement("span", null, e) : e;
}
function zu(e, t) {
  let r = !1;
  const n = [];
  return D.Children.forEach(e, (o) => {
    const i = typeof o, a = i === "string" || i === "number";
    if (r && a) {
      const c = n.length - 1, l = n[c];
      n[c] = `${l}${o}`;
    } else
      n.push(o);
    r = a;
  }), D.Children.map(n, (o) => Du(o, t));
}
const sa = /* @__PURE__ */ Ro((e, t) => {
  const {
    className: r,
    style: n,
    children: o,
    prefixCls: i
  } = e, a = me(`${i}-icon`, r);
  return /* @__PURE__ */ D.createElement("span", {
    ref: t,
    className: a,
    style: n
  }, o);
}), $o = /* @__PURE__ */ Ro((e, t) => {
  const {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: i
  } = e, a = me(`${r}-loading-icon`, n);
  return /* @__PURE__ */ D.createElement(sa, {
    prefixCls: r,
    className: a,
    style: o,
    ref: t
  }, /* @__PURE__ */ D.createElement(na, {
    className: i
  }));
}), Nr = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), Br = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), Fu = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: i
  } = e, a = !!r;
  return n ? /* @__PURE__ */ D.createElement($o, {
    prefixCls: t,
    className: o,
    style: i
  }) : /* @__PURE__ */ D.createElement(_n, {
    visible: a,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: a,
    removeOnLeave: !0,
    onAppearStart: Nr,
    onAppearActive: Br,
    onEnterStart: Nr,
    onEnterActive: Br,
    onLeaveStart: Br,
    onLeaveActive: Nr
  }, (c, l) => {
    let {
      className: s,
      style: u
    } = c;
    return /* @__PURE__ */ D.createElement($o, {
      prefixCls: t,
      className: o,
      style: Object.assign(Object.assign({}, i), u),
      ref: l,
      iconClassName: s
    });
  });
}, _o = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), Vu = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
    groupBorderColor: o,
    colorErrorHover: i
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(n).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: r
        }
      },
      // Border Color
      _o(`${t}-primary`, o),
      _o(`${t}-danger`, i)
    ]
  };
}, la = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r,
    paddingBlock: n
  } = e;
  return bt(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: n,
    buttonIconOnlyFontSize: r
  });
}, ua = (e) => {
  var t, r, n, o, i, a;
  const c = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, l = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, s = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : rr(c), f = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : rr(l), d = (a = e.contentLineHeightLG) !== null && a !== void 0 ? a : rr(s);
  return {
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: e.fontSizeLG,
    onlyIconSizeSM: e.fontSizeLG - 2,
    onlyIconSizeLG: e.fontSizeLG + 2,
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textHoverBg: e.colorBgTextHover,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    defaultHoverBg: e.colorBgContainer,
    defaultHoverColor: e.colorPrimaryHover,
    defaultHoverBorderColor: e.colorPrimaryHover,
    defaultActiveBg: e.colorBgContainer,
    defaultActiveColor: e.colorPrimaryActive,
    defaultActiveBorderColor: e.colorPrimaryActive,
    contentFontSize: c,
    contentFontSizeSM: l,
    contentFontSizeLG: s,
    contentLineHeight: u,
    contentLineHeightSM: f,
    contentLineHeightLG: d,
    paddingBlock: Math.max((e.controlHeight - c * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - l * f) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - s * d) / 2 - e.lineWidth, 0)
  };
}, Wu = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontWeight: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: e.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${Ge(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        display: "inline-block"
      },
      [`${t}-icon`]: {
        lineHeight: 1
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, hl(e)),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${r})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      // iconPosition="end"
      "&-icon-end": {
        flexDirection: "row-reverse"
      }
    }
  };
}, je = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), Gu = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Uu = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), Xu = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), jt = (e, t, r, n, o, i, a, c) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, je(e, Object.assign({
    background: t
  }, a), Object.assign({
    background: t
  }, c))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: i || void 0
    }
  })
}), Rn = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Xu(e))
}), fa = (e) => Object.assign({}, Rn(e)), cr = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), da = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, fa(e)), {
  background: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), je(e.componentCls, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), jt(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, je(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), jt(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Rn(e))
}), Ku = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, fa(e)), {
  color: e.primaryColor,
  background: e.colorPrimary,
  boxShadow: e.primaryShadow
}), je(e.componentCls, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryActive
})), jt(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    background: e.colorError,
    boxShadow: e.dangerShadow,
    color: e.dangerColor
  }, je(e.componentCls, {
    background: e.colorErrorHover
  }, {
    background: e.colorErrorActive
  })), jt(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Rn(e))
}), qu = (e) => Object.assign(Object.assign({}, da(e)), {
  borderStyle: "dashed"
}), Yu = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, je(e.componentCls, {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), cr(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, je(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), cr(e))
}), Qu = (e) => Object.assign(Object.assign(Object.assign({}, je(e.componentCls, {
  color: e.colorText,
  background: e.textHoverBg
}, {
  color: e.colorText,
  background: e.colorBgTextActive
})), cr(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, cr(e)), je(e.componentCls, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    background: e.colorErrorBgActive
  }))
}), Zu = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: da(e),
    [`${t}-primary`]: Ku(e),
    [`${t}-dashed`]: qu(e),
    [`${t}-link`]: Yu(e),
    [`${t}-text`]: Qu(e),
    [`${t}-ghost`]: jt(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, Mn = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: o,
    lineHeight: i,
    borderRadius: a,
    buttonPaddingHorizontal: c,
    iconCls: l,
    buttonPaddingVertical: s
  } = e, u = `${r}-icon-only`;
  return [
    {
      [`${t}`]: {
        fontSize: o,
        lineHeight: i,
        height: n,
        padding: `${Ge(s)} ${Ge(c)}`,
        borderRadius: a,
        [`&${u}`]: {
          width: n,
          paddingInline: 0,
          // make `btn-icon-only` not too narrow
          [`&${r}-compact-item`]: {
            flex: "none"
          },
          [`&${r}-round`]: {
            width: "auto"
          },
          [l]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${r}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${r}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: Gu(e)
    },
    {
      [`${r}${r}-round${t}`]: Uu(e)
    }
  ];
}, Ju = (e) => {
  const t = bt(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return Mn(t, e.componentCls);
}, ef = (e) => {
  const t = bt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    lineHeight: e.contentLineHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: e.paddingBlockSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return Mn(t, `${e.componentCls}-sm`);
}, tf = (e) => {
  const t = bt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return Mn(t, `${e.componentCls}-lg`);
}, rf = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, nf = El("Button", (e) => {
  const t = la(e);
  return [
    // Shared
    Wu(t),
    // Size
    Ju(t),
    ef(t),
    tf(t),
    // Block
    rf(t),
    // Group (type, ghost, danger, loading)
    Zu(t),
    // Button Group
    Vu(t)
  ];
}, ua, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function of(e, t, r) {
  const {
    focusElCls: n,
    focus: o,
    borderElCls: i
  } = r, a = i ? "> *" : "", c = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${a}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [c]: {
        zIndex: 2
      }
    }, n ? {
      [`&${n}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${a}`]: {
        zIndex: 0
      }
    })
  };
}
function af(e, t, r) {
  const {
    borderElCls: n
  } = r, o = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function cf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, of(e, n, t)), af(r, n, t))
  };
}
function sf(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function lf(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function uf(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, sf(e, t)), lf(e.componentCls, t))
  };
}
const ff = (e) => {
  const {
    componentCls: t,
    calc: r
  } = e;
  return {
    [t]: {
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: r(e.lineWidth).mul(-1).equal(),
            insetInlineStart: r(e.lineWidth).mul(-1).equal(),
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${Ge(e.lineWidth)} * 2)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: r(e.lineWidth).mul(-1).equal(),
              insetInlineStart: r(e.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: `calc(100% + ${Ge(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, df = Sl(["Button", "compact"], (e) => {
  const t = la(e);
  return [
    // Space Compact
    cf(t),
    uf(t),
    ff(t)
  ];
}, ua);
var pf = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function vf(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const gf = /* @__PURE__ */ D.forwardRef((e, t) => {
  var r, n, o;
  const {
    loading: i = !1,
    prefixCls: a,
    type: c,
    danger: l = !1,
    shape: s = "default",
    size: u,
    styles: f,
    disabled: d,
    className: g,
    rootClassName: C,
    children: m,
    icon: p,
    iconPosition: A = "start",
    ghost: E = !1,
    block: _ = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: $ = "button",
    classNames: w,
    style: O = {},
    autoInsertSpace: S
  } = e, P = pf(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), N = c || "default", {
    getPrefixCls: F,
    direction: G,
    button: H
  } = xe(Xe), B = (r = S ?? (H == null ? void 0 : H.autoInsertSpace)) !== null && r !== void 0 ? r : !0, j = F("btn", a), [W, y, v] = nf(j), b = xe(or), x = d ?? b, R = xe(ca), T = ja(() => vf(i), [i]), [I, k] = Bn(T.loading), [K, ne] = Bn(!1), Q = bn(t, /* @__PURE__ */ La()), Be = Ia.count(m) === 1 && !p && !Xt(N);
  Je(() => {
    let Y = null;
    T.delay > 0 ? Y = setTimeout(() => {
      Y = null, k(!0);
    }, T.delay) : k(T.loading);
    function ve() {
      Y && (clearTimeout(Y), Y = null);
    }
    return ve;
  }, [T]), Je(() => {
    if (!Q || !Q.current || !B)
      return;
    const Y = Q.current.textContent;
    Be && vn(Y) ? K || ne(!0) : K && ne(!1);
  }, [Q]);
  const ke = (Y) => {
    const {
      onClick: ve
    } = e;
    if (I || x) {
      Y.preventDefault();
      return;
    }
    ve == null || ve(Y);
  };
  if (process.env.NODE_ENV !== "production") {
    const Y = mt("Button");
    process.env.NODE_ENV !== "production" && Y(!(typeof p == "string" && p.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${p}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && Y(!(E && Xt(N)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: Ke,
    compactItemClassnames: we
  } = Bu(j, G), pe = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, He = Lu((Y) => {
    var ve, Ct;
    return (Ct = (ve = u ?? Ke) !== null && ve !== void 0 ? ve : R) !== null && Ct !== void 0 ? Ct : Y;
  }), M = He && pe[He] || "", Oe = I ? "loading" : p, te = qa(P, ["navigate"]), Te = me(j, y, v, {
    [`${j}-${s}`]: s !== "default" && s,
    [`${j}-${N}`]: N,
    [`${j}-${M}`]: M,
    [`${j}-icon-only`]: !m && m !== 0 && !!Oe,
    [`${j}-background-ghost`]: E && !Xt(N),
    [`${j}-loading`]: I,
    [`${j}-two-chinese-chars`]: K && B && !I,
    [`${j}-block`]: _,
    [`${j}-dangerous`]: l,
    [`${j}-rtl`]: G === "rtl",
    [`${j}-icon-end`]: A === "end"
  }, we, g, C, H == null ? void 0 : H.className), De = Object.assign(Object.assign({}, H == null ? void 0 : H.style), O), qe = me(w == null ? void 0 : w.icon, (n = H == null ? void 0 : H.classNames) === null || n === void 0 ? void 0 : n.icon), re = Object.assign(Object.assign({}, (f == null ? void 0 : f.icon) || {}), ((o = H == null ? void 0 : H.styles) === null || o === void 0 ? void 0 : o.icon) || {}), Z = p && !I ? /* @__PURE__ */ D.createElement(sa, {
    prefixCls: j,
    className: qe,
    style: re
  }, p) : /* @__PURE__ */ D.createElement(Fu, {
    existIcon: !!p,
    prefixCls: j,
    loading: I
  }), se = m || m === 0 ? zu(m, Be && B) : null;
  if (te.href !== void 0)
    return W(/* @__PURE__ */ D.createElement("a", Object.assign({}, te, {
      className: me(Te, {
        [`${j}-disabled`]: x
      }),
      href: x ? void 0 : te.href,
      style: De,
      onClick: ke,
      ref: Q,
      tabIndex: x ? -1 : 0
    }), Z, se));
  let Se = /* @__PURE__ */ D.createElement("button", Object.assign({}, P, {
    type: $,
    className: Te,
    style: De,
    onClick: ke,
    disabled: x,
    ref: Q
  }), Z, se, !!we && /* @__PURE__ */ D.createElement(df, {
    key: "compact",
    prefixCls: j
  }));
  return Xt(N) || (Se = /* @__PURE__ */ D.createElement(aa, {
    component: "Button",
    disabled: I
  }, Se)), W(Se);
}), br = gf;
br.Group = Hu;
br.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (br.displayName = "Button");
const yf = (e) => /* @__PURE__ */ $a(br, { className: ka.button, ...e });
export {
  yf as Button
};
