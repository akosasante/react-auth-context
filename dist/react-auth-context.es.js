var wr = { exports: {} }, it = {}, Sr = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fn;
function xo() {
  if (fn)
    return L;
  fn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function j(l) {
    return l === null || typeof l != "object" ? null : (l = _ && l[_] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var A = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, w = Object.assign, T = {};
  function q(l, b, k) {
    this.props = l, this.context = b, this.refs = T, this.updater = k || A;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(l, b) {
    if (typeof l != "object" && typeof l != "function" && l != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, l, b, "setState");
  }, q.prototype.forceUpdate = function(l) {
    this.updater.enqueueForceUpdate(this, l, "forceUpdate");
  };
  function N() {
  }
  N.prototype = q.prototype;
  function $(l, b, k) {
    this.props = l, this.context = b, this.refs = T, this.updater = k || A;
  }
  var he = $.prototype = new N();
  he.constructor = $, w(he, q.prototype), he.isPureReactComponent = !0;
  var me = Array.isArray, re = Object.prototype.hasOwnProperty, ce = { current: null }, be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Oe(l, b, k) {
    var W, I = {}, K = null, G = null;
    if (b != null)
      for (W in b.ref !== void 0 && (G = b.ref), b.key !== void 0 && (K = "" + b.key), b)
        re.call(b, W) && !be.hasOwnProperty(W) && (I[W] = b[W]);
    var Y = arguments.length - 2;
    if (Y === 1)
      I.children = k;
    else if (1 < Y) {
      for (var z = Array(Y), oe = 0; oe < Y; oe++)
        z[oe] = arguments[oe + 2];
      I.children = z;
    }
    if (l && l.defaultProps)
      for (W in Y = l.defaultProps, Y)
        I[W] === void 0 && (I[W] = Y[W]);
    return { $$typeof: e, type: l, key: K, ref: G, props: I, _owner: ce.current };
  }
  function De(l, b) {
    return { $$typeof: e, type: l.type, key: b, ref: l.ref, props: l.props, _owner: l._owner };
  }
  function Fe(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }
  function tt(l) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + l.replace(/[=:]/g, function(k) {
      return b[k];
    });
  }
  var Le = /\/+/g;
  function le(l, b) {
    return typeof l == "object" && l !== null && l.key != null ? tt("" + l.key) : b.toString(36);
  }
  function de(l, b, k, W, I) {
    var K = typeof l;
    (K === "undefined" || K === "boolean") && (l = null);
    var G = !1;
    if (l === null)
      G = !0;
    else
      switch (K) {
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (l.$$typeof) {
            case e:
            case t:
              G = !0;
          }
      }
    if (G)
      return G = l, I = I(G), l = W === "" ? "." + le(G, 0) : W, me(I) ? (k = "", l != null && (k = l.replace(Le, "$&/") + "/"), de(I, b, k, "", function(oe) {
        return oe;
      })) : I != null && (Fe(I) && (I = De(I, k + (!I.key || G && G.key === I.key ? "" : ("" + I.key).replace(Le, "$&/") + "/") + l)), b.push(I)), 1;
    if (G = 0, W = W === "" ? "." : W + ":", me(l))
      for (var Y = 0; Y < l.length; Y++) {
        K = l[Y];
        var z = W + le(K, Y);
        G += de(K, b, k, z, I);
      }
    else if (z = j(l), typeof z == "function")
      for (l = z.call(l), Y = 0; !(K = l.next()).done; )
        K = K.value, z = W + le(K, Y++), G += de(K, b, k, z, I);
    else if (K === "object")
      throw b = String(l), Error("Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return G;
  }
  function ie(l, b, k) {
    if (l == null)
      return l;
    var W = [], I = 0;
    return de(l, W, "", "", function(K) {
      return b.call(k, K, I++);
    }), W;
  }
  function ge(l) {
    if (l._status === -1) {
      var b = l._result;
      b = b(), b.then(function(k) {
        (l._status === 0 || l._status === -1) && (l._status = 1, l._result = k);
      }, function(k) {
        (l._status === 0 || l._status === -1) && (l._status = 2, l._result = k);
      }), l._status === -1 && (l._status = 0, l._result = b);
    }
    if (l._status === 1)
      return l._result.default;
    throw l._result;
  }
  var C = { current: null }, Re = { transition: null }, Ie = { ReactCurrentDispatcher: C, ReactCurrentBatchConfig: Re, ReactCurrentOwner: ce };
  return L.Children = { map: ie, forEach: function(l, b, k) {
    ie(l, function() {
      b.apply(this, arguments);
    }, k);
  }, count: function(l) {
    var b = 0;
    return ie(l, function() {
      b++;
    }), b;
  }, toArray: function(l) {
    return ie(l, function(b) {
      return b;
    }) || [];
  }, only: function(l) {
    if (!Fe(l))
      throw Error("React.Children.only expected to receive a single React element child.");
    return l;
  } }, L.Component = q, L.Fragment = n, L.Profiler = s, L.PureComponent = $, L.StrictMode = o, L.Suspense = g, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ie, L.cloneElement = function(l, b, k) {
    if (l == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + l + ".");
    var W = w({}, l.props), I = l.key, K = l.ref, G = l._owner;
    if (b != null) {
      if (b.ref !== void 0 && (K = b.ref, G = ce.current), b.key !== void 0 && (I = "" + b.key), l.type && l.type.defaultProps)
        var Y = l.type.defaultProps;
      for (z in b)
        re.call(b, z) && !be.hasOwnProperty(z) && (W[z] = b[z] === void 0 && Y !== void 0 ? Y[z] : b[z]);
    }
    var z = arguments.length - 2;
    if (z === 1)
      W.children = k;
    else if (1 < z) {
      Y = Array(z);
      for (var oe = 0; oe < z; oe++)
        Y[oe] = arguments[oe + 2];
      W.children = Y;
    }
    return { $$typeof: e, type: l.type, key: I, ref: K, props: W, _owner: G };
  }, L.createContext = function(l) {
    return l = { $$typeof: c, _currentValue: l, _currentValue2: l, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, l.Provider = { $$typeof: u, _context: l }, l.Consumer = l;
  }, L.createElement = Oe, L.createFactory = function(l) {
    var b = Oe.bind(null, l);
    return b.type = l, b;
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(l) {
    return { $$typeof: m, render: l };
  }, L.isValidElement = Fe, L.lazy = function(l) {
    return { $$typeof: y, _payload: { _status: -1, _result: l }, _init: ge };
  }, L.memo = function(l, b) {
    return { $$typeof: h, type: l, compare: b === void 0 ? null : b };
  }, L.startTransition = function(l) {
    var b = Re.transition;
    Re.transition = {};
    try {
      l();
    } finally {
      Re.transition = b;
    }
  }, L.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, L.useCallback = function(l, b) {
    return C.current.useCallback(l, b);
  }, L.useContext = function(l) {
    return C.current.useContext(l);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(l) {
    return C.current.useDeferredValue(l);
  }, L.useEffect = function(l, b) {
    return C.current.useEffect(l, b);
  }, L.useId = function() {
    return C.current.useId();
  }, L.useImperativeHandle = function(l, b, k) {
    return C.current.useImperativeHandle(l, b, k);
  }, L.useInsertionEffect = function(l, b) {
    return C.current.useInsertionEffect(l, b);
  }, L.useLayoutEffect = function(l, b) {
    return C.current.useLayoutEffect(l, b);
  }, L.useMemo = function(l, b) {
    return C.current.useMemo(l, b);
  }, L.useReducer = function(l, b, k) {
    return C.current.useReducer(l, b, k);
  }, L.useRef = function(l) {
    return C.current.useRef(l);
  }, L.useState = function(l) {
    return C.current.useState(l);
  }, L.useSyncExternalStore = function(l, b, k) {
    return C.current.useSyncExternalStore(l, b, k);
  }, L.useTransition = function() {
    return C.current.useTransition();
  }, L.version = "18.2.0", L;
}
var ct = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ct.exports;
var dn;
function No() {
  return dn || (dn = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.2.0", o = Symbol.for("react.element"), s = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), q = Symbol.iterator, N = "@@iterator";
      function $(r) {
        if (r === null || typeof r != "object")
          return null;
        var a = q && r[q] || r[N];
        return typeof a == "function" ? a : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, me = {
        transition: null
      }, re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ce = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, be = {}, Oe = null;
      function De(r) {
        Oe = r;
      }
      be.setExtraStackFrame = function(r) {
        Oe = r;
      }, be.getCurrentStack = null, be.getStackAddendum = function() {
        var r = "";
        Oe && (r += Oe);
        var a = be.getCurrentStack;
        return a && (r += a() || ""), r;
      };
      var Fe = !1, tt = !1, Le = !1, le = !1, de = !1, ie = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: me,
        ReactCurrentOwner: ce
      };
      ie.ReactDebugCurrentFrame = be, ie.ReactCurrentActQueue = re;
      function ge(r) {
        {
          for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), d = 1; d < a; d++)
            f[d - 1] = arguments[d];
          Re("warn", r, f);
        }
      }
      function C(r) {
        {
          for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), d = 1; d < a; d++)
            f[d - 1] = arguments[d];
          Re("error", r, f);
        }
      }
      function Re(r, a, f) {
        {
          var d = ie.ReactDebugCurrentFrame, E = d.getStackAddendum();
          E !== "" && (a += "%s", f = f.concat([E]));
          var P = f.map(function(O) {
            return String(O);
          });
          P.unshift("Warning: " + a), Function.prototype.apply.call(console[r], console, P);
        }
      }
      var Ie = {};
      function l(r, a) {
        {
          var f = r.constructor, d = f && (f.displayName || f.name) || "ReactClass", E = d + "." + a;
          if (Ie[E])
            return;
          C("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", a, d), Ie[E] = !0;
        }
      }
      var b = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(r) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(r, a, f) {
          l(r, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(r, a, f, d) {
          l(r, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(r, a, f, d) {
          l(r, "setState");
        }
      }, k = Object.assign, W = {};
      Object.freeze(W);
      function I(r, a, f) {
        this.props = r, this.context = a, this.refs = W, this.updater = f || b;
      }
      I.prototype.isReactComponent = {}, I.prototype.setState = function(r, a) {
        if (typeof r != "object" && typeof r != "function" && r != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, r, a, "setState");
      }, I.prototype.forceUpdate = function(r) {
        this.updater.enqueueForceUpdate(this, r, "forceUpdate");
      };
      {
        var K = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, G = function(r, a) {
          Object.defineProperty(I.prototype, r, {
            get: function() {
              ge("%s(...) is deprecated in plain JavaScript React classes. %s", a[0], a[1]);
            }
          });
        };
        for (var Y in K)
          K.hasOwnProperty(Y) && G(Y, K[Y]);
      }
      function z() {
      }
      z.prototype = I.prototype;
      function oe(r, a, f) {
        this.props = r, this.context = a, this.refs = W, this.updater = f || b;
      }
      var Pe = oe.prototype = new z();
      Pe.constructor = oe, k(Pe, I.prototype), Pe.isPureReactComponent = !0;
      function Kt() {
        var r = {
          current: null
        };
        return Object.seal(r), r;
      }
      var yt = Array.isArray;
      function He(r) {
        return yt(r);
      }
      function Gt(r) {
        {
          var a = typeof Symbol == "function" && Symbol.toStringTag, f = a && r[Symbol.toStringTag] || r.constructor.name || "Object";
          return f;
        }
      }
      function Ye(r) {
        try {
          return Ue(r), !1;
        } catch {
          return !0;
        }
      }
      function Ue(r) {
        return "" + r;
      }
      function $e(r) {
        if (Ye(r))
          return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Gt(r)), Ue(r);
      }
      function gt(r, a, f) {
        var d = r.displayName;
        if (d)
          return d;
        var E = a.displayName || a.name || "";
        return E !== "" ? f + "(" + E + ")" : f;
      }
      function Be(r) {
        return r.displayName || "Context";
      }
      function _e(r) {
        if (r == null)
          return null;
        if (typeof r.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
        switch (r) {
          case u:
            return "Fragment";
          case s:
            return "Portal";
          case m:
            return "Profiler";
          case c:
            return "StrictMode";
          case _:
            return "Suspense";
          case j:
            return "SuspenseList";
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case h:
              var a = r;
              return Be(a) + ".Consumer";
            case g:
              var f = r;
              return Be(f._context) + ".Provider";
            case y:
              return gt(r, r.render, "ForwardRef");
            case A:
              var d = r.displayName || null;
              return d !== null ? d : _e(r.type) || "Memo";
            case w: {
              var E = r, P = E._payload, O = E._init;
              try {
                return _e(O(P));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Me = Object.prototype.hasOwnProperty, Je = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Et, bt, Ke;
      Ke = {};
      function rt(r) {
        if (Me.call(r, "ref")) {
          var a = Object.getOwnPropertyDescriptor(r, "ref").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return r.ref !== void 0;
      }
      function Ae(r) {
        if (Me.call(r, "key")) {
          var a = Object.getOwnPropertyDescriptor(r, "key").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return r.key !== void 0;
      }
      function Xt(r, a) {
        var f = function() {
          Et || (Et = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: f,
          configurable: !0
        });
      }
      function Rt(r, a) {
        var f = function() {
          bt || (bt = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: f,
          configurable: !0
        });
      }
      function _t(r) {
        if (typeof r.ref == "string" && ce.current && r.__self && ce.current.stateNode !== r.__self) {
          var a = _e(ce.current.type);
          Ke[a] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', a, r.ref), Ke[a] = !0);
        }
      }
      var Ve = function(r, a, f, d, E, P, O) {
        var x = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: o,
          // Built-in properties that belong on the element
          type: r,
          key: a,
          ref: f,
          props: O,
          // Record the component responsible for creating this element.
          _owner: P
        };
        return x._store = {}, Object.defineProperty(x._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(x, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: d
        }), Object.defineProperty(x, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: E
        }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
      };
      function Qt(r, a, f) {
        var d, E = {}, P = null, O = null, x = null, B = null;
        if (a != null) {
          rt(a) && (O = a.ref, _t(a)), Ae(a) && ($e(a.key), P = "" + a.key), x = a.__self === void 0 ? null : a.__self, B = a.__source === void 0 ? null : a.__source;
          for (d in a)
            Me.call(a, d) && !Je.hasOwnProperty(d) && (E[d] = a[d]);
        }
        var J = arguments.length - 2;
        if (J === 1)
          E.children = f;
        else if (J > 1) {
          for (var X = Array(J), Q = 0; Q < J; Q++)
            X[Q] = arguments[Q + 2];
          Object.freeze && Object.freeze(X), E.children = X;
        }
        if (r && r.defaultProps) {
          var ee = r.defaultProps;
          for (d in ee)
            E[d] === void 0 && (E[d] = ee[d]);
        }
        if (P || O) {
          var ne = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          P && Xt(E, ne), O && Rt(E, ne);
        }
        return Ve(r, P, O, x, B, ce.current, E);
      }
      function Zt(r, a) {
        var f = Ve(r.type, a, r.ref, r._self, r._source, r._owner, r.props);
        return f;
      }
      function er(r, a, f) {
        if (r == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
        var d, E = k({}, r.props), P = r.key, O = r.ref, x = r._self, B = r._source, J = r._owner;
        if (a != null) {
          rt(a) && (O = a.ref, J = ce.current), Ae(a) && ($e(a.key), P = "" + a.key);
          var X;
          r.type && r.type.defaultProps && (X = r.type.defaultProps);
          for (d in a)
            Me.call(a, d) && !Je.hasOwnProperty(d) && (a[d] === void 0 && X !== void 0 ? E[d] = X[d] : E[d] = a[d]);
        }
        var Q = arguments.length - 2;
        if (Q === 1)
          E.children = f;
        else if (Q > 1) {
          for (var ee = Array(Q), ne = 0; ne < Q; ne++)
            ee[ne] = arguments[ne + 2];
          E.children = ee;
        }
        return Ve(r.type, P, O, x, B, J, E);
      }
      function xe(r) {
        return typeof r == "object" && r !== null && r.$$typeof === o;
      }
      var wt = ".", tr = ":";
      function rr(r) {
        var a = /[=:]/g, f = {
          "=": "=0",
          ":": "=2"
        }, d = r.replace(a, function(E) {
          return f[E];
        });
        return "$" + d;
      }
      var Ge = !1, St = /\/+/g;
      function Ce(r) {
        return r.replace(St, "$&/");
      }
      function We(r, a) {
        return typeof r == "object" && r !== null && r.key != null ? ($e(r.key), rr("" + r.key)) : a.toString(36);
      }
      function Ne(r, a, f, d, E) {
        var P = typeof r;
        (P === "undefined" || P === "boolean") && (r = null);
        var O = !1;
        if (r === null)
          O = !0;
        else
          switch (P) {
            case "string":
            case "number":
              O = !0;
              break;
            case "object":
              switch (r.$$typeof) {
                case o:
                case s:
                  O = !0;
              }
          }
        if (O) {
          var x = r, B = E(x), J = d === "" ? wt + We(x, 0) : d;
          if (He(B)) {
            var X = "";
            J != null && (X = Ce(J) + "/"), Ne(B, a, X, "", function(Ao) {
              return Ao;
            });
          } else
            B != null && (xe(B) && (B.key && (!x || x.key !== B.key) && $e(B.key), B = Zt(
              B,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              f + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (B.key && (!x || x.key !== B.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Ce("" + B.key) + "/"
              ) : "") + J
            )), a.push(B));
          return 1;
        }
        var Q, ee, ne = 0, ue = d === "" ? wt : d + tr;
        if (He(r))
          for (var Ft = 0; Ft < r.length; Ft++)
            Q = r[Ft], ee = ue + We(Q, Ft), ne += Ne(Q, a, f, ee, E);
        else {
          var vr = $(r);
          if (typeof vr == "function") {
            var un = r;
            vr === un.entries && (Ge || ge("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ge = !0);
            for (var To = vr.call(un), cn, Po = 0; !(cn = To.next()).done; )
              Q = cn.value, ee = ue + We(Q, Po++), ne += Ne(Q, a, f, ee, E);
          } else if (P === "object") {
            var ln = String(r);
            throw new Error("Objects are not valid as a React child (found: " + (ln === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : ln) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ne;
      }
      function qe(r, a, f) {
        if (r == null)
          return r;
        var d = [], E = 0;
        return Ne(r, d, "", "", function(P) {
          return a.call(f, P, E++);
        }), d;
      }
      function nr(r) {
        var a = 0;
        return qe(r, function() {
          a++;
        }), a;
      }
      function Ot(r, a, f) {
        qe(r, function() {
          a.apply(this, arguments);
        }, f);
      }
      function or(r) {
        return qe(r, function(a) {
          return a;
        }) || [];
      }
      function Ct(r) {
        if (!xe(r))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return r;
      }
      function Tt(r) {
        var a = {
          $$typeof: h,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: r,
          _currentValue2: r,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        a.Provider = {
          $$typeof: g,
          _context: a
        };
        var f = !1, d = !1, E = !1;
        {
          var P = {
            $$typeof: h,
            _context: a
          };
          Object.defineProperties(P, {
            Provider: {
              get: function() {
                return d || (d = !0, C("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), a.Provider;
              },
              set: function(O) {
                a.Provider = O;
              }
            },
            _currentValue: {
              get: function() {
                return a._currentValue;
              },
              set: function(O) {
                a._currentValue = O;
              }
            },
            _currentValue2: {
              get: function() {
                return a._currentValue2;
              },
              set: function(O) {
                a._currentValue2 = O;
              }
            },
            _threadCount: {
              get: function() {
                return a._threadCount;
              },
              set: function(O) {
                a._threadCount = O;
              }
            },
            Consumer: {
              get: function() {
                return f || (f = !0, C("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), a.Consumer;
              }
            },
            displayName: {
              get: function() {
                return a.displayName;
              },
              set: function(O) {
                E || (ge("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", O), E = !0);
              }
            }
          }), a.Consumer = P;
        }
        return a._currentRenderer = null, a._currentRenderer2 = null, a;
      }
      var ze = -1, nt = 0, ot = 1, ar = 2;
      function ir(r) {
        if (r._status === ze) {
          var a = r._result, f = a();
          if (f.then(function(P) {
            if (r._status === nt || r._status === ze) {
              var O = r;
              O._status = ot, O._result = P;
            }
          }, function(P) {
            if (r._status === nt || r._status === ze) {
              var O = r;
              O._status = ar, O._result = P;
            }
          }), r._status === ze) {
            var d = r;
            d._status = nt, d._result = f;
          }
        }
        if (r._status === ot) {
          var E = r._result;
          return E === void 0 && C(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, E), "default" in E || C(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, E), E.default;
        } else
          throw r._result;
      }
      function sr(r) {
        var a = {
          // We use these fields to store the result.
          _status: ze,
          _result: r
        }, f = {
          $$typeof: w,
          _payload: a,
          _init: ir
        };
        {
          var d, E;
          Object.defineProperties(f, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return d;
              },
              set: function(P) {
                C("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), d = P, Object.defineProperty(f, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return E;
              },
              set: function(P) {
                C("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), E = P, Object.defineProperty(f, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return f;
      }
      function ur(r) {
        r != null && r.$$typeof === A ? C("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof r != "function" ? C("forwardRef requires a render function but was given %s.", r === null ? "null" : typeof r) : r.length !== 0 && r.length !== 2 && C("forwardRef render functions accept exactly two parameters: props and ref. %s", r.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), r != null && (r.defaultProps != null || r.propTypes != null) && C("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var a = {
          $$typeof: y,
          render: r
        };
        {
          var f;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return f;
            },
            set: function(d) {
              f = d, !r.name && !r.displayName && (r.displayName = d);
            }
          });
        }
        return a;
      }
      var i;
      i = Symbol.for("react.module.reference");
      function v(r) {
        return !!(typeof r == "string" || typeof r == "function" || r === u || r === m || de || r === c || r === _ || r === j || le || r === T || Fe || tt || Le || typeof r == "object" && r !== null && (r.$$typeof === w || r.$$typeof === A || r.$$typeof === g || r.$$typeof === h || r.$$typeof === y || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        r.$$typeof === i || r.getModuleId !== void 0));
      }
      function R(r, a) {
        v(r) || C("memo: The first argument must be a component. Instead received: %s", r === null ? "null" : typeof r);
        var f = {
          $$typeof: A,
          type: r,
          compare: a === void 0 ? null : a
        };
        {
          var d;
          Object.defineProperty(f, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return d;
            },
            set: function(E) {
              d = E, !r.name && !r.displayName && (r.displayName = E);
            }
          });
        }
        return f;
      }
      function S() {
        var r = he.current;
        return r === null && C(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), r;
      }
      function M(r) {
        var a = S();
        if (r._context !== void 0) {
          var f = r._context;
          f.Consumer === r ? C("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : f.Provider === r && C("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return a.useContext(r);
      }
      function H(r) {
        var a = S();
        return a.useState(r);
      }
      function U(r, a, f) {
        var d = S();
        return d.useReducer(r, a, f);
      }
      function F(r) {
        var a = S();
        return a.useRef(r);
      }
      function se(r, a) {
        var f = S();
        return f.useEffect(r, a);
      }
      function Z(r, a) {
        var f = S();
        return f.useInsertionEffect(r, a);
      }
      function te(r, a) {
        var f = S();
        return f.useLayoutEffect(r, a);
      }
      function pe(r, a) {
        var f = S();
        return f.useCallback(r, a);
      }
      function ke(r, a) {
        var f = S();
        return f.useMemo(r, a);
      }
      function Pt(r, a, f) {
        var d = S();
        return d.useImperativeHandle(r, a, f);
      }
      function Ee(r, a) {
        {
          var f = S();
          return f.useDebugValue(r, a);
        }
      }
      function no() {
        var r = S();
        return r.useTransition();
      }
      function oo(r) {
        var a = S();
        return a.useDeferredValue(r);
      }
      function ao() {
        var r = S();
        return r.useId();
      }
      function io(r, a, f) {
        var d = S();
        return d.useSyncExternalStore(r, a, f);
      }
      var at = 0, Mr, Vr, Wr, qr, zr, Hr, Yr;
      function Jr() {
      }
      Jr.__reactDisabledLog = !0;
      function so() {
        {
          if (at === 0) {
            Mr = console.log, Vr = console.info, Wr = console.warn, qr = console.error, zr = console.group, Hr = console.groupCollapsed, Yr = console.groupEnd;
            var r = {
              configurable: !0,
              enumerable: !0,
              value: Jr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: r,
              log: r,
              warn: r,
              error: r,
              group: r,
              groupCollapsed: r,
              groupEnd: r
            });
          }
          at++;
        }
      }
      function uo() {
        {
          if (at--, at === 0) {
            var r = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: k({}, r, {
                value: Mr
              }),
              info: k({}, r, {
                value: Vr
              }),
              warn: k({}, r, {
                value: Wr
              }),
              error: k({}, r, {
                value: qr
              }),
              group: k({}, r, {
                value: zr
              }),
              groupCollapsed: k({}, r, {
                value: Hr
              }),
              groupEnd: k({}, r, {
                value: Yr
              })
            });
          }
          at < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var cr = ie.ReactCurrentDispatcher, lr;
      function At(r, a, f) {
        {
          if (lr === void 0)
            try {
              throw Error();
            } catch (E) {
              var d = E.stack.trim().match(/\n( *(at )?)/);
              lr = d && d[1] || "";
            }
          return `
` + lr + r;
        }
      }
      var fr = !1, xt;
      {
        var co = typeof WeakMap == "function" ? WeakMap : Map;
        xt = new co();
      }
      function Kr(r, a) {
        if (!r || fr)
          return "";
        {
          var f = xt.get(r);
          if (f !== void 0)
            return f;
        }
        var d;
        fr = !0;
        var E = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var P;
        P = cr.current, cr.current = null, so();
        try {
          if (a) {
            var O = function() {
              throw Error();
            };
            if (Object.defineProperty(O.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(O, []);
              } catch (ue) {
                d = ue;
              }
              Reflect.construct(r, [], O);
            } else {
              try {
                O.call();
              } catch (ue) {
                d = ue;
              }
              r.call(O.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ue) {
              d = ue;
            }
            r();
          }
        } catch (ue) {
          if (ue && d && typeof ue.stack == "string") {
            for (var x = ue.stack.split(`
`), B = d.stack.split(`
`), J = x.length - 1, X = B.length - 1; J >= 1 && X >= 0 && x[J] !== B[X]; )
              X--;
            for (; J >= 1 && X >= 0; J--, X--)
              if (x[J] !== B[X]) {
                if (J !== 1 || X !== 1)
                  do
                    if (J--, X--, X < 0 || x[J] !== B[X]) {
                      var Q = `
` + x[J].replace(" at new ", " at ");
                      return r.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", r.displayName)), typeof r == "function" && xt.set(r, Q), Q;
                    }
                  while (J >= 1 && X >= 0);
                break;
              }
          }
        } finally {
          fr = !1, cr.current = P, uo(), Error.prepareStackTrace = E;
        }
        var ee = r ? r.displayName || r.name : "", ne = ee ? At(ee) : "";
        return typeof r == "function" && xt.set(r, ne), ne;
      }
      function lo(r, a, f) {
        return Kr(r, !1);
      }
      function fo(r) {
        var a = r.prototype;
        return !!(a && a.isReactComponent);
      }
      function Nt(r, a, f) {
        if (r == null)
          return "";
        if (typeof r == "function")
          return Kr(r, fo(r));
        if (typeof r == "string")
          return At(r);
        switch (r) {
          case _:
            return At("Suspense");
          case j:
            return At("SuspenseList");
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case y:
              return lo(r.render);
            case A:
              return Nt(r.type, a, f);
            case w: {
              var d = r, E = d._payload, P = d._init;
              try {
                return Nt(P(E), a, f);
              } catch {
              }
            }
          }
        return "";
      }
      var Gr = {}, Xr = ie.ReactDebugCurrentFrame;
      function kt(r) {
        if (r) {
          var a = r._owner, f = Nt(r.type, r._source, a ? a.type : null);
          Xr.setExtraStackFrame(f);
        } else
          Xr.setExtraStackFrame(null);
      }
      function po(r, a, f, d, E) {
        {
          var P = Function.call.bind(Me);
          for (var O in r)
            if (P(r, O)) {
              var x = void 0;
              try {
                if (typeof r[O] != "function") {
                  var B = Error((d || "React class") + ": " + f + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw B.name = "Invariant Violation", B;
                }
                x = r[O](a, O, d, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (J) {
                x = J;
              }
              x && !(x instanceof Error) && (kt(E), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", f, O, typeof x), kt(null)), x instanceof Error && !(x.message in Gr) && (Gr[x.message] = !0, kt(E), C("Failed %s type: %s", f, x.message), kt(null));
            }
        }
      }
      function Xe(r) {
        if (r) {
          var a = r._owner, f = Nt(r.type, r._source, a ? a.type : null);
          De(f);
        } else
          De(null);
      }
      var dr;
      dr = !1;
      function Qr() {
        if (ce.current) {
          var r = _e(ce.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
      function ho(r) {
        if (r !== void 0) {
          var a = r.fileName.replace(/^.*[\\\/]/, ""), f = r.lineNumber;
          return `

Check your code at ` + a + ":" + f + ".";
        }
        return "";
      }
      function mo(r) {
        return r != null ? ho(r.__source) : "";
      }
      var Zr = {};
      function vo(r) {
        var a = Qr();
        if (!a) {
          var f = typeof r == "string" ? r : r.displayName || r.name;
          f && (a = `

Check the top-level render call using <` + f + ">.");
        }
        return a;
      }
      function en(r, a) {
        if (!(!r._store || r._store.validated || r.key != null)) {
          r._store.validated = !0;
          var f = vo(a);
          if (!Zr[f]) {
            Zr[f] = !0;
            var d = "";
            r && r._owner && r._owner !== ce.current && (d = " It was passed a child from " + _e(r._owner.type) + "."), Xe(r), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, d), Xe(null);
          }
        }
      }
      function tn(r, a) {
        if (typeof r == "object") {
          if (He(r))
            for (var f = 0; f < r.length; f++) {
              var d = r[f];
              xe(d) && en(d, a);
            }
          else if (xe(r))
            r._store && (r._store.validated = !0);
          else if (r) {
            var E = $(r);
            if (typeof E == "function" && E !== r.entries)
              for (var P = E.call(r), O; !(O = P.next()).done; )
                xe(O.value) && en(O.value, a);
          }
        }
      }
      function rn(r) {
        {
          var a = r.type;
          if (a == null || typeof a == "string")
            return;
          var f;
          if (typeof a == "function")
            f = a.propTypes;
          else if (typeof a == "object" && (a.$$typeof === y || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          a.$$typeof === A))
            f = a.propTypes;
          else
            return;
          if (f) {
            var d = _e(a);
            po(f, r.props, "prop", d, r);
          } else if (a.PropTypes !== void 0 && !dr) {
            dr = !0;
            var E = _e(a);
            C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
          }
          typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function yo(r) {
        {
          for (var a = Object.keys(r.props), f = 0; f < a.length; f++) {
            var d = a[f];
            if (d !== "children" && d !== "key") {
              Xe(r), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), Xe(null);
              break;
            }
          }
          r.ref !== null && (Xe(r), C("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
        }
      }
      function nn(r, a, f) {
        var d = v(r);
        if (!d) {
          var E = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = mo(a);
          P ? E += P : E += Qr();
          var O;
          r === null ? O = "null" : He(r) ? O = "array" : r !== void 0 && r.$$typeof === o ? (O = "<" + (_e(r.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : O = typeof r, C("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, E);
        }
        var x = Qt.apply(this, arguments);
        if (x == null)
          return x;
        if (d)
          for (var B = 2; B < arguments.length; B++)
            tn(arguments[B], r);
        return r === u ? yo(x) : rn(x), x;
      }
      var on = !1;
      function go(r) {
        var a = nn.bind(null, r);
        return a.type = r, on || (on = !0, ge("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(a, "type", {
          enumerable: !1,
          get: function() {
            return ge("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: r
            }), r;
          }
        }), a;
      }
      function Eo(r, a, f) {
        for (var d = er.apply(this, arguments), E = 2; E < arguments.length; E++)
          tn(arguments[E], d.type);
        return rn(d), d;
      }
      function bo(r, a) {
        var f = me.transition;
        me.transition = {};
        var d = me.transition;
        me.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          r();
        } finally {
          if (me.transition = f, f === null && d._updatedFibers) {
            var E = d._updatedFibers.size;
            E > 10 && ge("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
          }
        }
      }
      var an = !1, jt = null;
      function Ro(r) {
        if (jt === null)
          try {
            var a = ("require" + Math.random()).slice(0, 7), f = e && e[a];
            jt = f.call(e, "timers").setImmediate;
          } catch {
            jt = function(E) {
              an === !1 && (an = !0, typeof MessageChannel > "u" && C("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var P = new MessageChannel();
              P.port1.onmessage = E, P.port2.postMessage(void 0);
            };
          }
        return jt(r);
      }
      var Qe = 0, sn = !1;
      function _o(r) {
        {
          var a = Qe;
          Qe++, re.current === null && (re.current = []);
          var f = re.isBatchingLegacy, d;
          try {
            if (re.isBatchingLegacy = !0, d = r(), !f && re.didScheduleLegacyUpdate) {
              var E = re.current;
              E !== null && (re.didScheduleLegacyUpdate = !1, mr(E));
            }
          } catch (ee) {
            throw Dt(a), ee;
          } finally {
            re.isBatchingLegacy = f;
          }
          if (d !== null && typeof d == "object" && typeof d.then == "function") {
            var P = d, O = !1, x = {
              then: function(ee, ne) {
                O = !0, P.then(function(ue) {
                  Dt(a), Qe === 0 ? pr(ue, ee, ne) : ee(ue);
                }, function(ue) {
                  Dt(a), ne(ue);
                });
              }
            };
            return !sn && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              O || (sn = !0, C("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), x;
          } else {
            var B = d;
            if (Dt(a), Qe === 0) {
              var J = re.current;
              J !== null && (mr(J), re.current = null);
              var X = {
                then: function(ee, ne) {
                  re.current === null ? (re.current = [], pr(B, ee, ne)) : ee(B);
                }
              };
              return X;
            } else {
              var Q = {
                then: function(ee, ne) {
                  ee(B);
                }
              };
              return Q;
            }
          }
        }
      }
      function Dt(r) {
        r !== Qe - 1 && C("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Qe = r;
      }
      function pr(r, a, f) {
        {
          var d = re.current;
          if (d !== null)
            try {
              mr(d), Ro(function() {
                d.length === 0 ? (re.current = null, a(r)) : pr(r, a, f);
              });
            } catch (E) {
              f(E);
            }
          else
            a(r);
        }
      }
      var hr = !1;
      function mr(r) {
        if (!hr) {
          hr = !0;
          var a = 0;
          try {
            for (; a < r.length; a++) {
              var f = r[a];
              do
                f = f(!0);
              while (f !== null);
            }
            r.length = 0;
          } catch (d) {
            throw r = r.slice(a + 1), d;
          } finally {
            hr = !1;
          }
        }
      }
      var wo = nn, So = Eo, Oo = go, Co = {
        map: qe,
        forEach: Ot,
        count: nr,
        toArray: or,
        only: Ct
      };
      t.Children = Co, t.Component = I, t.Fragment = u, t.Profiler = m, t.PureComponent = oe, t.StrictMode = c, t.Suspense = _, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie, t.cloneElement = So, t.createContext = Tt, t.createElement = wo, t.createFactory = Oo, t.createRef = Kt, t.forwardRef = ur, t.isValidElement = xe, t.lazy = sr, t.memo = R, t.startTransition = bo, t.unstable_act = _o, t.useCallback = pe, t.useContext = M, t.useDebugValue = Ee, t.useDeferredValue = oo, t.useEffect = se, t.useId = ao, t.useImperativeHandle = Pt, t.useInsertionEffect = Z, t.useLayoutEffect = te, t.useMemo = ke, t.useReducer = U, t.useRef = F, t.useState = H, t.useSyncExternalStore = io, t.useTransition = no, t.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ct, ct.exports)), ct.exports;
}
process.env.NODE_ENV === "production" ? Sr.exports = xo() : Sr.exports = No();
var D = Sr.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pn;
function ko() {
  if (pn)
    return it;
  pn = 1;
  var e = D, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(m, g, h) {
    var y, _ = {}, j = null, A = null;
    h !== void 0 && (j = "" + h), g.key !== void 0 && (j = "" + g.key), g.ref !== void 0 && (A = g.ref);
    for (y in g)
      o.call(g, y) && !u.hasOwnProperty(y) && (_[y] = g[y]);
    if (m && m.defaultProps)
      for (y in g = m.defaultProps, g)
        _[y] === void 0 && (_[y] = g[y]);
    return { $$typeof: t, type: m, key: j, ref: A, props: _, _owner: s.current };
  }
  return it.Fragment = n, it.jsx = c, it.jsxs = c, it;
}
var st = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hn;
function jo() {
  return hn || (hn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = D, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), m = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), w = Symbol.iterator, T = "@@iterator";
    function q(i) {
      if (i === null || typeof i != "object")
        return null;
      var v = w && i[w] || i[T];
      return typeof v == "function" ? v : null;
    }
    var N = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(i) {
      {
        for (var v = arguments.length, R = new Array(v > 1 ? v - 1 : 0), S = 1; S < v; S++)
          R[S - 1] = arguments[S];
        he("error", i, R);
      }
    }
    function he(i, v, R) {
      {
        var S = N.ReactDebugCurrentFrame, M = S.getStackAddendum();
        M !== "" && (v += "%s", R = R.concat([M]));
        var H = R.map(function(U) {
          return String(U);
        });
        H.unshift("Warning: " + v), Function.prototype.apply.call(console[i], console, H);
      }
    }
    var me = !1, re = !1, ce = !1, be = !1, Oe = !1, De;
    De = Symbol.for("react.module.reference");
    function Fe(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === o || i === u || Oe || i === s || i === h || i === y || be || i === A || me || re || ce || typeof i == "object" && i !== null && (i.$$typeof === j || i.$$typeof === _ || i.$$typeof === c || i.$$typeof === m || i.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === De || i.getModuleId !== void 0));
    }
    function tt(i, v, R) {
      var S = i.displayName;
      if (S)
        return S;
      var M = v.displayName || v.name || "";
      return M !== "" ? R + "(" + M + ")" : R;
    }
    function Le(i) {
      return i.displayName || "Context";
    }
    function le(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case s:
          return "StrictMode";
        case h:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case m:
            var v = i;
            return Le(v) + ".Consumer";
          case c:
            var R = i;
            return Le(R._context) + ".Provider";
          case g:
            return tt(i, i.render, "ForwardRef");
          case _:
            var S = i.displayName || null;
            return S !== null ? S : le(i.type) || "Memo";
          case j: {
            var M = i, H = M._payload, U = M._init;
            try {
              return le(U(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var de = Object.assign, ie = 0, ge, C, Re, Ie, l, b, k;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function I() {
      {
        if (ie === 0) {
          ge = console.log, C = console.info, Re = console.warn, Ie = console.error, l = console.group, b = console.groupCollapsed, k = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        ie++;
      }
    }
    function K() {
      {
        if (ie--, ie === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: de({}, i, {
              value: ge
            }),
            info: de({}, i, {
              value: C
            }),
            warn: de({}, i, {
              value: Re
            }),
            error: de({}, i, {
              value: Ie
            }),
            group: de({}, i, {
              value: l
            }),
            groupCollapsed: de({}, i, {
              value: b
            }),
            groupEnd: de({}, i, {
              value: k
            })
          });
        }
        ie < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = N.ReactCurrentDispatcher, Y;
    function z(i, v, R) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (M) {
            var S = M.stack.trim().match(/\n( *(at )?)/);
            Y = S && S[1] || "";
          }
        return `
` + Y + i;
      }
    }
    var oe = !1, Pe;
    {
      var Kt = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new Kt();
    }
    function yt(i, v) {
      if (!i || oe)
        return "";
      {
        var R = Pe.get(i);
        if (R !== void 0)
          return R;
      }
      var S;
      oe = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = G.current, G.current = null, I();
      try {
        if (v) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (Ee) {
              S = Ee;
            }
            Reflect.construct(i, [], U);
          } else {
            try {
              U.call();
            } catch (Ee) {
              S = Ee;
            }
            i.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ee) {
            S = Ee;
          }
          i();
        }
      } catch (Ee) {
        if (Ee && S && typeof Ee.stack == "string") {
          for (var F = Ee.stack.split(`
`), se = S.stack.split(`
`), Z = F.length - 1, te = se.length - 1; Z >= 1 && te >= 0 && F[Z] !== se[te]; )
            te--;
          for (; Z >= 1 && te >= 0; Z--, te--)
            if (F[Z] !== se[te]) {
              if (Z !== 1 || te !== 1)
                do
                  if (Z--, te--, te < 0 || F[Z] !== se[te]) {
                    var pe = `
` + F[Z].replace(" at new ", " at ");
                    return i.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", i.displayName)), typeof i == "function" && Pe.set(i, pe), pe;
                  }
                while (Z >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        oe = !1, G.current = H, K(), Error.prepareStackTrace = M;
      }
      var ke = i ? i.displayName || i.name : "", Pt = ke ? z(ke) : "";
      return typeof i == "function" && Pe.set(i, Pt), Pt;
    }
    function He(i, v, R) {
      return yt(i, !1);
    }
    function Gt(i) {
      var v = i.prototype;
      return !!(v && v.isReactComponent);
    }
    function Ye(i, v, R) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return yt(i, Gt(i));
      if (typeof i == "string")
        return z(i);
      switch (i) {
        case h:
          return z("Suspense");
        case y:
          return z("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case g:
            return He(i.render);
          case _:
            return Ye(i.type, v, R);
          case j: {
            var S = i, M = S._payload, H = S._init;
            try {
              return Ye(H(M), v, R);
            } catch {
            }
          }
        }
      return "";
    }
    var Ue = Object.prototype.hasOwnProperty, $e = {}, gt = N.ReactDebugCurrentFrame;
    function Be(i) {
      if (i) {
        var v = i._owner, R = Ye(i.type, i._source, v ? v.type : null);
        gt.setExtraStackFrame(R);
      } else
        gt.setExtraStackFrame(null);
    }
    function _e(i, v, R, S, M) {
      {
        var H = Function.call.bind(Ue);
        for (var U in i)
          if (H(i, U)) {
            var F = void 0;
            try {
              if (typeof i[U] != "function") {
                var se = Error((S || "React class") + ": " + R + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              F = i[U](v, U, S, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              F = Z;
            }
            F && !(F instanceof Error) && (Be(M), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", R, U, typeof F), Be(null)), F instanceof Error && !(F.message in $e) && ($e[F.message] = !0, Be(M), $("Failed %s type: %s", R, F.message), Be(null));
          }
      }
    }
    var Me = Array.isArray;
    function Je(i) {
      return Me(i);
    }
    function Et(i) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, R = v && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return R;
      }
    }
    function bt(i) {
      try {
        return Ke(i), !1;
      } catch {
        return !0;
      }
    }
    function Ke(i) {
      return "" + i;
    }
    function rt(i) {
      if (bt(i))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Et(i)), Ke(i);
    }
    var Ae = N.ReactCurrentOwner, Xt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rt, _t, Ve;
    Ve = {};
    function Qt(i) {
      if (Ue.call(i, "ref")) {
        var v = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function Zt(i) {
      if (Ue.call(i, "key")) {
        var v = Object.getOwnPropertyDescriptor(i, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function er(i, v) {
      if (typeof i.ref == "string" && Ae.current && v && Ae.current.stateNode !== v) {
        var R = le(Ae.current.type);
        Ve[R] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', le(Ae.current.type), i.ref), Ve[R] = !0);
      }
    }
    function xe(i, v) {
      {
        var R = function() {
          Rt || (Rt = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        R.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function wt(i, v) {
      {
        var R = function() {
          _t || (_t = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        R.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var tr = function(i, v, R, S, M, H, U) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: v,
        ref: R,
        props: U,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return F._store = {}, Object.defineProperty(F._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(F, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(F, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function rr(i, v, R, S, M) {
      {
        var H, U = {}, F = null, se = null;
        R !== void 0 && (rt(R), F = "" + R), Zt(v) && (rt(v.key), F = "" + v.key), Qt(v) && (se = v.ref, er(v, M));
        for (H in v)
          Ue.call(v, H) && !Xt.hasOwnProperty(H) && (U[H] = v[H]);
        if (i && i.defaultProps) {
          var Z = i.defaultProps;
          for (H in Z)
            U[H] === void 0 && (U[H] = Z[H]);
        }
        if (F || se) {
          var te = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          F && xe(U, te), se && wt(U, te);
        }
        return tr(i, F, se, M, S, Ae.current, U);
      }
    }
    var Ge = N.ReactCurrentOwner, St = N.ReactDebugCurrentFrame;
    function Ce(i) {
      if (i) {
        var v = i._owner, R = Ye(i.type, i._source, v ? v.type : null);
        St.setExtraStackFrame(R);
      } else
        St.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function Ne(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function qe() {
      {
        if (Ge.current) {
          var i = le(Ge.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function nr(i) {
      {
        if (i !== void 0) {
          var v = i.fileName.replace(/^.*[\\\/]/, ""), R = i.lineNumber;
          return `

Check your code at ` + v + ":" + R + ".";
        }
        return "";
      }
    }
    var Ot = {};
    function or(i) {
      {
        var v = qe();
        if (!v) {
          var R = typeof i == "string" ? i : i.displayName || i.name;
          R && (v = `

Check the top-level render call using <` + R + ">.");
        }
        return v;
      }
    }
    function Ct(i, v) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var R = or(v);
        if (Ot[R])
          return;
        Ot[R] = !0;
        var S = "";
        i && i._owner && i._owner !== Ge.current && (S = " It was passed a child from " + le(i._owner.type) + "."), Ce(i), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, S), Ce(null);
      }
    }
    function Tt(i, v) {
      {
        if (typeof i != "object")
          return;
        if (Je(i))
          for (var R = 0; R < i.length; R++) {
            var S = i[R];
            Ne(S) && Ct(S, v);
          }
        else if (Ne(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var M = q(i);
          if (typeof M == "function" && M !== i.entries)
            for (var H = M.call(i), U; !(U = H.next()).done; )
              Ne(U.value) && Ct(U.value, v);
        }
      }
    }
    function ze(i) {
      {
        var v = i.type;
        if (v == null || typeof v == "string")
          return;
        var R;
        if (typeof v == "function")
          R = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === _))
          R = v.propTypes;
        else
          return;
        if (R) {
          var S = le(v);
          _e(R, i.props, "prop", S, i);
        } else if (v.PropTypes !== void 0 && !We) {
          We = !0;
          var M = le(v);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", M || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nt(i) {
      {
        for (var v = Object.keys(i.props), R = 0; R < v.length; R++) {
          var S = v[R];
          if (S !== "children" && S !== "key") {
            Ce(i), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Ce(null);
            break;
          }
        }
        i.ref !== null && (Ce(i), $("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    function ot(i, v, R, S, M, H) {
      {
        var U = Fe(i);
        if (!U) {
          var F = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = nr(M);
          se ? F += se : F += qe();
          var Z;
          i === null ? Z = "null" : Je(i) ? Z = "array" : i !== void 0 && i.$$typeof === t ? (Z = "<" + (le(i.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof i, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, F);
        }
        var te = rr(i, v, R, M, H);
        if (te == null)
          return te;
        if (U) {
          var pe = v.children;
          if (pe !== void 0)
            if (S)
              if (Je(pe)) {
                for (var ke = 0; ke < pe.length; ke++)
                  Tt(pe[ke], i);
                Object.freeze && Object.freeze(pe);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tt(pe, i);
        }
        return i === o ? nt(te) : ze(te), te;
      }
    }
    function ar(i, v, R) {
      return ot(i, v, R, !0);
    }
    function ir(i, v, R) {
      return ot(i, v, R, !1);
    }
    var sr = ir, ur = ar;
    st.Fragment = o, st.jsx = sr, st.jsxs = ur;
  }()), st;
}
process.env.NODE_ENV === "production" ? wr.exports = ko() : wr.exports = jo();
var lt = wr.exports;
function Tn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Do } = Object.prototype, { getPrototypeOf: Nr } = Object, Vt = ((e) => (t) => {
  const n = Do.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Se = (e) => (e = e.toLowerCase(), (t) => Vt(t) === e), Wt = (e) => (t) => typeof t === e, { isArray: et } = Array, ft = Wt("undefined");
function Fo(e) {
  return e !== null && !ft(e) && e.constructor !== null && !ft(e.constructor) && ye(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Pn = Se("ArrayBuffer");
function Lo(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Pn(e.buffer), t;
}
const Io = Wt("string"), ye = Wt("function"), An = Wt("number"), qt = (e) => e !== null && typeof e == "object", Uo = (e) => e === !0 || e === !1, Lt = (e) => {
  if (Vt(e) !== "object")
    return !1;
  const t = Nr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, $o = Se("Date"), Bo = Se("File"), Mo = Se("Blob"), Vo = Se("FileList"), Wo = (e) => qt(e) && ye(e.pipe), qo = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ye(e.append) && ((t = Vt(e)) === "formdata" || // detect form-data instance
  t === "object" && ye(e.toString) && e.toString() === "[object FormData]"));
}, zo = Se("URLSearchParams"), Ho = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function dt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, s;
  if (typeof e != "object" && (e = [e]), et(e))
    for (o = 0, s = e.length; o < s; o++)
      t.call(null, e[o], o, e);
  else {
    const u = n ? Object.getOwnPropertyNames(e) : Object.keys(e), c = u.length;
    let m;
    for (o = 0; o < c; o++)
      m = u[o], t.call(null, e[m], m, e);
  }
}
function xn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let o = n.length, s;
  for (; o-- > 0; )
    if (s = n[o], t === s.toLowerCase())
      return s;
  return null;
}
const Nn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), kn = (e) => !ft(e) && e !== Nn;
function Or() {
  const { caseless: e } = kn(this) && this || {}, t = {}, n = (o, s) => {
    const u = e && xn(t, s) || s;
    Lt(t[u]) && Lt(o) ? t[u] = Or(t[u], o) : Lt(o) ? t[u] = Or({}, o) : et(o) ? t[u] = o.slice() : t[u] = o;
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && dt(arguments[o], n);
  return t;
}
const Yo = (e, t, n, { allOwnKeys: o } = {}) => (dt(t, (s, u) => {
  n && ye(s) ? e[u] = Tn(s, n) : e[u] = s;
}, { allOwnKeys: o }), e), Jo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ko = (e, t, n, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Go = (e, t, n, o) => {
  let s, u, c;
  const m = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), u = s.length; u-- > 0; )
      c = s[u], (!o || o(c, e, t)) && !m[c] && (t[c] = e[c], m[c] = !0);
    e = n !== !1 && Nr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Xo = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const o = e.indexOf(t, n);
  return o !== -1 && o === n;
}, Qo = (e) => {
  if (!e)
    return null;
  if (et(e))
    return e;
  let t = e.length;
  if (!An(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Zo = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Nr(Uint8Array)), ea = (e, t) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = o.next()) && !s.done; ) {
    const u = s.value;
    t.call(e, u[0], u[1]);
  }
}, ta = (e, t) => {
  let n;
  const o = [];
  for (; (n = e.exec(t)) !== null; )
    o.push(n);
  return o;
}, ra = Se("HTMLFormElement"), na = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, o, s) {
    return o.toUpperCase() + s;
  }
), mn = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), oa = Se("RegExp"), jn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), o = {};
  dt(n, (s, u) => {
    t(s, u, e) !== !1 && (o[u] = s);
  }), Object.defineProperties(e, o);
}, aa = (e) => {
  jn(e, (t, n) => {
    if (ye(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const o = e[n];
    if (ye(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ia = (e, t) => {
  const n = {}, o = (s) => {
    s.forEach((u) => {
      n[u] = !0;
    });
  };
  return et(e) ? o(e) : o(String(e).split(t)), n;
}, sa = () => {
}, ua = (e, t) => (e = +e, Number.isFinite(e) ? e : t), yr = "abcdefghijklmnopqrstuvwxyz", vn = "0123456789", Dn = {
  DIGIT: vn,
  ALPHA: yr,
  ALPHA_DIGIT: yr + yr.toUpperCase() + vn
}, ca = (e = 16, t = Dn.ALPHA_DIGIT) => {
  let n = "";
  const { length: o } = t;
  for (; e--; )
    n += t[Math.random() * o | 0];
  return n;
};
function la(e) {
  return !!(e && ye(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const fa = (e) => {
  const t = new Array(10), n = (o, s) => {
    if (qt(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[s] = o;
        const u = et(o) ? [] : {};
        return dt(o, (c, m) => {
          const g = n(c, s + 1);
          !ft(g) && (u[m] = g);
        }), t[s] = void 0, u;
      }
    }
    return o;
  };
  return n(e, 0);
}, da = Se("AsyncFunction"), pa = (e) => e && (qt(e) || ye(e)) && ye(e.then) && ye(e.catch), p = {
  isArray: et,
  isArrayBuffer: Pn,
  isBuffer: Fo,
  isFormData: qo,
  isArrayBufferView: Lo,
  isString: Io,
  isNumber: An,
  isBoolean: Uo,
  isObject: qt,
  isPlainObject: Lt,
  isUndefined: ft,
  isDate: $o,
  isFile: Bo,
  isBlob: Mo,
  isRegExp: oa,
  isFunction: ye,
  isStream: Wo,
  isURLSearchParams: zo,
  isTypedArray: Zo,
  isFileList: Vo,
  forEach: dt,
  merge: Or,
  extend: Yo,
  trim: Ho,
  stripBOM: Jo,
  inherits: Ko,
  toFlatObject: Go,
  kindOf: Vt,
  kindOfTest: Se,
  endsWith: Xo,
  toArray: Qo,
  forEachEntry: ea,
  matchAll: ta,
  isHTMLForm: ra,
  hasOwnProperty: mn,
  hasOwnProp: mn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: jn,
  freezeMethods: aa,
  toObjectSet: ia,
  toCamelCase: na,
  noop: sa,
  toFiniteNumber: ua,
  findKey: xn,
  global: Nn,
  isContextDefined: kn,
  ALPHABET: Dn,
  generateString: ca,
  isSpecCompliantForm: la,
  toJSONObject: fa,
  isAsyncFn: da,
  isThenable: pa
};
function V(e, t, n, o, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), o && (this.request = o), s && (this.response = s);
}
p.inherits(V, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: p.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Fn = V.prototype, Ln = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ln[e] = { value: e };
});
Object.defineProperties(V, Ln);
Object.defineProperty(Fn, "isAxiosError", { value: !0 });
V.from = (e, t, n, o, s, u) => {
  const c = Object.create(Fn);
  return p.toFlatObject(e, c, function(g) {
    return g !== Error.prototype;
  }, (m) => m !== "isAxiosError"), V.call(c, e.message, t, n, o, s), c.cause = e, c.name = e.name, u && Object.assign(c, u), c;
};
const ha = null;
function Cr(e) {
  return p.isPlainObject(e) || p.isArray(e);
}
function In(e) {
  return p.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function yn(e, t, n) {
  return e ? e.concat(t).map(function(s, u) {
    return s = In(s), !n && u ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function ma(e) {
  return p.isArray(e) && !e.some(Cr);
}
const va = p.toFlatObject(p, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function zt(e, t, n) {
  if (!p.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = p.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(T, q) {
    return !p.isUndefined(q[T]);
  });
  const o = n.metaTokens, s = n.visitor || y, u = n.dots, c = n.indexes, g = (n.Blob || typeof Blob < "u" && Blob) && p.isSpecCompliantForm(t);
  if (!p.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(w) {
    if (w === null)
      return "";
    if (p.isDate(w))
      return w.toISOString();
    if (!g && p.isBlob(w))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return p.isArrayBuffer(w) || p.isTypedArray(w) ? g && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w;
  }
  function y(w, T, q) {
    let N = w;
    if (w && !q && typeof w == "object") {
      if (p.endsWith(T, "{}"))
        T = o ? T : T.slice(0, -2), w = JSON.stringify(w);
      else if (p.isArray(w) && ma(w) || (p.isFileList(w) || p.endsWith(T, "[]")) && (N = p.toArray(w)))
        return T = In(T), N.forEach(function(he, me) {
          !(p.isUndefined(he) || he === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? yn([T], me, u) : c === null ? T : T + "[]",
            h(he)
          );
        }), !1;
    }
    return Cr(w) ? !0 : (t.append(yn(q, T, u), h(w)), !1);
  }
  const _ = [], j = Object.assign(va, {
    defaultVisitor: y,
    convertValue: h,
    isVisitable: Cr
  });
  function A(w, T) {
    if (!p.isUndefined(w)) {
      if (_.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      _.push(w), p.forEach(w, function(N, $) {
        (!(p.isUndefined(N) || N === null) && s.call(
          t,
          N,
          p.isString($) ? $.trim() : $,
          T,
          j
        )) === !0 && A(N, T ? T.concat($) : [$]);
      }), _.pop();
    }
  }
  if (!p.isObject(e))
    throw new TypeError("data must be an object");
  return A(e), t;
}
function gn(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
    return t[o];
  });
}
function kr(e, t) {
  this._pairs = [], e && zt(e, this, t);
}
const Un = kr.prototype;
Un.append = function(t, n) {
  this._pairs.push([t, n]);
};
Un.toString = function(t) {
  const n = t ? function(o) {
    return t.call(this, o, gn);
  } : gn;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function ya(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $n(e, t, n) {
  if (!t)
    return e;
  const o = n && n.encode || ya, s = n && n.serialize;
  let u;
  if (s ? u = s(t, n) : u = p.isURLSearchParams(t) ? t.toString() : new kr(t, n).toString(o), u) {
    const c = e.indexOf("#");
    c !== -1 && (e = e.slice(0, c)), e += (e.indexOf("?") === -1 ? "?" : "&") + u;
  }
  return e;
}
class ga {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, o) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    p.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const En = ga, Bn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ea = typeof URLSearchParams < "u" ? URLSearchParams : kr, ba = typeof FormData < "u" ? FormData : null, Ra = typeof Blob < "u" ? Blob : null, _a = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), wa = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), we = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ea,
    FormData: ba,
    Blob: Ra
  },
  isStandardBrowserEnv: _a,
  isStandardBrowserWebWorkerEnv: wa,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Sa(e, t) {
  return zt(e, new we.classes.URLSearchParams(), Object.assign({
    visitor: function(n, o, s, u) {
      return we.isNode && p.isBuffer(n) ? (this.append(o, n.toString("base64")), !1) : u.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Oa(e) {
  return p.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ca(e) {
  const t = {}, n = Object.keys(e);
  let o;
  const s = n.length;
  let u;
  for (o = 0; o < s; o++)
    u = n[o], t[u] = e[u];
  return t;
}
function Mn(e) {
  function t(n, o, s, u) {
    let c = n[u++];
    const m = Number.isFinite(+c), g = u >= n.length;
    return c = !c && p.isArray(s) ? s.length : c, g ? (p.hasOwnProp(s, c) ? s[c] = [s[c], o] : s[c] = o, !m) : ((!s[c] || !p.isObject(s[c])) && (s[c] = []), t(n, o, s[c], u) && p.isArray(s[c]) && (s[c] = Ca(s[c])), !m);
  }
  if (p.isFormData(e) && p.isFunction(e.entries)) {
    const n = {};
    return p.forEachEntry(e, (o, s) => {
      t(Oa(o), s, n, 0);
    }), n;
  }
  return null;
}
const Ta = {
  "Content-Type": void 0
};
function Pa(e, t, n) {
  if (p.isString(e))
    try {
      return (t || JSON.parse)(e), p.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (n || JSON.stringify)(e);
}
const Ht = {
  transitional: Bn,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const o = n.getContentType() || "", s = o.indexOf("application/json") > -1, u = p.isObject(t);
    if (u && p.isHTMLForm(t) && (t = new FormData(t)), p.isFormData(t))
      return s && s ? JSON.stringify(Mn(t)) : t;
    if (p.isArrayBuffer(t) || p.isBuffer(t) || p.isStream(t) || p.isFile(t) || p.isBlob(t))
      return t;
    if (p.isArrayBufferView(t))
      return t.buffer;
    if (p.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let m;
    if (u) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Sa(t, this.formSerializer).toString();
      if ((m = p.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return zt(
          m ? { "files[]": t } : t,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return u || s ? (n.setContentType("application/json", !1), Pa(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ht.transitional, o = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && p.isString(t) && (o && !this.responseType || s)) {
      const c = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (m) {
        if (c)
          throw m.name === "SyntaxError" ? V.from(m, V.ERR_BAD_RESPONSE, this, null, this.response) : m;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: we.classes.FormData,
    Blob: we.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
p.forEach(["delete", "get", "head"], function(t) {
  Ht.headers[t] = {};
});
p.forEach(["post", "put", "patch"], function(t) {
  Ht.headers[t] = p.merge(Ta);
});
const jr = Ht, Aa = p.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), xa = (e) => {
  const t = {};
  let n, o, s;
  return e && e.split(`
`).forEach(function(c) {
    s = c.indexOf(":"), n = c.substring(0, s).trim().toLowerCase(), o = c.substring(s + 1).trim(), !(!n || t[n] && Aa[n]) && (n === "set-cookie" ? t[n] ? t[n].push(o) : t[n] = [o] : t[n] = t[n] ? t[n] + ", " + o : o);
  }), t;
}, bn = Symbol("internals");
function ut(e) {
  return e && String(e).trim().toLowerCase();
}
function It(e) {
  return e === !1 || e == null ? e : p.isArray(e) ? e.map(It) : String(e);
}
function Na(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = n.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const ka = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function gr(e, t, n, o, s) {
  if (p.isFunction(o))
    return o.call(this, t, n);
  if (s && (t = n), !!p.isString(t)) {
    if (p.isString(o))
      return t.indexOf(o) !== -1;
    if (p.isRegExp(o))
      return o.test(t);
  }
}
function ja(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, o) => n.toUpperCase() + o);
}
function Da(e, t) {
  const n = p.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + n, {
      value: function(s, u, c) {
        return this[o].call(this, t, s, u, c);
      },
      configurable: !0
    });
  });
}
class Yt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, o) {
    const s = this;
    function u(m, g, h) {
      const y = ut(g);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const _ = p.findKey(s, y);
      (!_ || s[_] === void 0 || h === !0 || h === void 0 && s[_] !== !1) && (s[_ || g] = It(m));
    }
    const c = (m, g) => p.forEach(m, (h, y) => u(h, y, g));
    return p.isPlainObject(t) || t instanceof this.constructor ? c(t, n) : p.isString(t) && (t = t.trim()) && !ka(t) ? c(xa(t), n) : t != null && u(n, t, o), this;
  }
  get(t, n) {
    if (t = ut(t), t) {
      const o = p.findKey(this, t);
      if (o) {
        const s = this[o];
        if (!n)
          return s;
        if (n === !0)
          return Na(s);
        if (p.isFunction(n))
          return n.call(this, s, o);
        if (p.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ut(t), t) {
      const o = p.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!n || gr(this, this[o], o, n)));
    }
    return !1;
  }
  delete(t, n) {
    const o = this;
    let s = !1;
    function u(c) {
      if (c = ut(c), c) {
        const m = p.findKey(o, c);
        m && (!n || gr(o, o[m], m, n)) && (delete o[m], s = !0);
      }
    }
    return p.isArray(t) ? t.forEach(u) : u(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let o = n.length, s = !1;
    for (; o--; ) {
      const u = n[o];
      (!t || gr(this, this[u], u, t, !0)) && (delete this[u], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, o = {};
    return p.forEach(this, (s, u) => {
      const c = p.findKey(o, u);
      if (c) {
        n[c] = It(s), delete n[u];
        return;
      }
      const m = t ? ja(u) : String(u).trim();
      m !== u && delete n[u], n[m] = It(s), o[m] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return p.forEach(this, (o, s) => {
      o != null && o !== !1 && (n[s] = t && p.isArray(o) ? o.join(", ") : o);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const o = new this(t);
    return n.forEach((s) => o.set(s)), o;
  }
  static accessor(t) {
    const o = (this[bn] = this[bn] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function u(c) {
      const m = ut(c);
      o[m] || (Da(s, c), o[m] = !0);
    }
    return p.isArray(t) ? t.forEach(u) : u(t), this;
  }
}
Yt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
p.freezeMethods(Yt.prototype);
p.freezeMethods(Yt);
const Te = Yt;
function Er(e, t) {
  const n = this || jr, o = t || n, s = Te.from(o.headers);
  let u = o.data;
  return p.forEach(e, function(m) {
    u = m.call(n, u, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), u;
}
function Vn(e) {
  return !!(e && e.__CANCEL__);
}
function pt(e, t, n) {
  V.call(this, e ?? "canceled", V.ERR_CANCELED, t, n), this.name = "CanceledError";
}
p.inherits(pt, V, {
  __CANCEL__: !0
});
function Fa(e, t, n) {
  const o = n.config.validateStatus;
  !n.status || !o || o(n.status) ? e(n) : t(new V(
    "Request failed with status code " + n.status,
    [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const La = we.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, o, s, u, c, m) {
        const g = [];
        g.push(n + "=" + encodeURIComponent(o)), p.isNumber(s) && g.push("expires=" + new Date(s).toGMTString()), p.isString(u) && g.push("path=" + u), p.isString(c) && g.push("domain=" + c), m === !0 && g.push("secure"), document.cookie = g.join("; ");
      },
      read: function(n) {
        const o = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return o ? decodeURIComponent(o[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Ia(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ua(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Wn(e, t) {
  return e && !Ia(t) ? Ua(e, t) : t;
}
const $a = we.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let o;
    function s(u) {
      let c = u;
      return t && (n.setAttribute("href", c), c = n.href), n.setAttribute("href", c), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return o = s(window.location.href), function(c) {
      const m = p.isString(c) ? s(c) : c;
      return m.protocol === o.protocol && m.host === o.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Ba(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ma(e, t) {
  e = e || 10;
  const n = new Array(e), o = new Array(e);
  let s = 0, u = 0, c;
  return t = t !== void 0 ? t : 1e3, function(g) {
    const h = Date.now(), y = o[u];
    c || (c = h), n[s] = g, o[s] = h;
    let _ = u, j = 0;
    for (; _ !== s; )
      j += n[_++], _ = _ % e;
    if (s = (s + 1) % e, s === u && (u = (u + 1) % e), h - c < t)
      return;
    const A = y && h - y;
    return A ? Math.round(j * 1e3 / A) : void 0;
  };
}
function Rn(e, t) {
  let n = 0;
  const o = Ma(50, 250);
  return (s) => {
    const u = s.loaded, c = s.lengthComputable ? s.total : void 0, m = u - n, g = o(m), h = u <= c;
    n = u;
    const y = {
      loaded: u,
      total: c,
      progress: c ? u / c : void 0,
      bytes: m,
      rate: g || void 0,
      estimated: g && c && h ? (c - u) / g : void 0,
      event: s
    };
    y[t ? "download" : "upload"] = !0, e(y);
  };
}
const Va = typeof XMLHttpRequest < "u", Wa = Va && function(e) {
  return new Promise(function(n, o) {
    let s = e.data;
    const u = Te.from(e.headers).normalize(), c = e.responseType;
    let m;
    function g() {
      e.cancelToken && e.cancelToken.unsubscribe(m), e.signal && e.signal.removeEventListener("abort", m);
    }
    p.isFormData(s) && (we.isStandardBrowserEnv || we.isStandardBrowserWebWorkerEnv ? u.setContentType(!1) : u.setContentType("multipart/form-data;", !1));
    let h = new XMLHttpRequest();
    if (e.auth) {
      const A = e.auth.username || "", w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      u.set("Authorization", "Basic " + btoa(A + ":" + w));
    }
    const y = Wn(e.baseURL, e.url);
    h.open(e.method.toUpperCase(), $n(y, e.params, e.paramsSerializer), !0), h.timeout = e.timeout;
    function _() {
      if (!h)
        return;
      const A = Te.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), T = {
        data: !c || c === "text" || c === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: A,
        config: e,
        request: h
      };
      Fa(function(N) {
        n(N), g();
      }, function(N) {
        o(N), g();
      }, T), h = null;
    }
    if ("onloadend" in h ? h.onloadend = _ : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, h.onabort = function() {
      h && (o(new V("Request aborted", V.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      o(new V("Network Error", V.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let w = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const T = e.transitional || Bn;
      e.timeoutErrorMessage && (w = e.timeoutErrorMessage), o(new V(
        w,
        T.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
        e,
        h
      )), h = null;
    }, we.isStandardBrowserEnv) {
      const A = (e.withCredentials || $a(y)) && e.xsrfCookieName && La.read(e.xsrfCookieName);
      A && u.set(e.xsrfHeaderName, A);
    }
    s === void 0 && u.setContentType(null), "setRequestHeader" in h && p.forEach(u.toJSON(), function(w, T) {
      h.setRequestHeader(T, w);
    }), p.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials), c && c !== "json" && (h.responseType = e.responseType), typeof e.onDownloadProgress == "function" && h.addEventListener("progress", Rn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && h.upload && h.upload.addEventListener("progress", Rn(e.onUploadProgress)), (e.cancelToken || e.signal) && (m = (A) => {
      h && (o(!A || A.type ? new pt(null, e, h) : A), h.abort(), h = null);
    }, e.cancelToken && e.cancelToken.subscribe(m), e.signal && (e.signal.aborted ? m() : e.signal.addEventListener("abort", m)));
    const j = Ba(y);
    if (j && we.protocols.indexOf(j) === -1) {
      o(new V("Unsupported protocol " + j + ":", V.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(s || null);
  });
}, Ut = {
  http: ha,
  xhr: Wa
};
p.forEach(Ut, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const qa = {
  getAdapter: (e) => {
    e = p.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, o;
    for (let s = 0; s < t && (n = e[s], !(o = p.isString(n) ? Ut[n.toLowerCase()] : n)); s++)
      ;
    if (!o)
      throw o === !1 ? new V(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        p.hasOwnProp(Ut, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!p.isFunction(o))
      throw new TypeError("adapter is not a function");
    return o;
  },
  adapters: Ut
};
function br(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new pt(null, e);
}
function _n(e) {
  return br(e), e.headers = Te.from(e.headers), e.data = Er.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), qa.getAdapter(e.adapter || jr.adapter)(e).then(function(o) {
    return br(e), o.data = Er.call(
      e,
      e.transformResponse,
      o
    ), o.headers = Te.from(o.headers), o;
  }, function(o) {
    return Vn(o) || (br(e), o && o.response && (o.response.data = Er.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = Te.from(o.response.headers))), Promise.reject(o);
  });
}
const wn = (e) => e instanceof Te ? e.toJSON() : e;
function Ze(e, t) {
  t = t || {};
  const n = {};
  function o(h, y, _) {
    return p.isPlainObject(h) && p.isPlainObject(y) ? p.merge.call({ caseless: _ }, h, y) : p.isPlainObject(y) ? p.merge({}, y) : p.isArray(y) ? y.slice() : y;
  }
  function s(h, y, _) {
    if (p.isUndefined(y)) {
      if (!p.isUndefined(h))
        return o(void 0, h, _);
    } else
      return o(h, y, _);
  }
  function u(h, y) {
    if (!p.isUndefined(y))
      return o(void 0, y);
  }
  function c(h, y) {
    if (p.isUndefined(y)) {
      if (!p.isUndefined(h))
        return o(void 0, h);
    } else
      return o(void 0, y);
  }
  function m(h, y, _) {
    if (_ in t)
      return o(h, y);
    if (_ in e)
      return o(void 0, h);
  }
  const g = {
    url: u,
    method: u,
    data: u,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: m,
    headers: (h, y) => s(wn(h), wn(y), !0)
  };
  return p.forEach(Object.keys(Object.assign({}, e, t)), function(y) {
    const _ = g[y] || s, j = _(e[y], t[y], y);
    p.isUndefined(j) && _ !== m || (n[y] = j);
  }), n;
}
const qn = "1.4.0", Dr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Dr[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Sn = {};
Dr.transitional = function(t, n, o) {
  function s(u, c) {
    return "[Axios v" + qn + "] Transitional option '" + u + "'" + c + (o ? ". " + o : "");
  }
  return (u, c, m) => {
    if (t === !1)
      throw new V(
        s(c, " has been removed" + (n ? " in " + n : "")),
        V.ERR_DEPRECATED
      );
    return n && !Sn[c] && (Sn[c] = !0, console.warn(
      s(
        c,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(u, c, m) : !0;
  };
};
function za(e, t, n) {
  if (typeof e != "object")
    throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let s = o.length;
  for (; s-- > 0; ) {
    const u = o[s], c = t[u];
    if (c) {
      const m = e[u], g = m === void 0 || c(m, u, e);
      if (g !== !0)
        throw new V("option " + u + " must be " + g, V.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new V("Unknown option " + u, V.ERR_BAD_OPTION);
  }
}
const Tr = {
  assertOptions: za,
  validators: Dr
}, je = Tr.validators;
class Bt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new En(),
      response: new En()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ze(this.defaults, n);
    const { transitional: o, paramsSerializer: s, headers: u } = n;
    o !== void 0 && Tr.assertOptions(o, {
      silentJSONParsing: je.transitional(je.boolean),
      forcedJSONParsing: je.transitional(je.boolean),
      clarifyTimeoutError: je.transitional(je.boolean)
    }, !1), s != null && (p.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Tr.assertOptions(s, {
      encode: je.function,
      serialize: je.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let c;
    c = u && p.merge(
      u.common,
      u[n.method]
    ), c && p.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (w) => {
        delete u[w];
      }
    ), n.headers = Te.concat(c, u);
    const m = [];
    let g = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(n) === !1 || (g = g && T.synchronous, m.unshift(T.fulfilled, T.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(T) {
      h.push(T.fulfilled, T.rejected);
    });
    let y, _ = 0, j;
    if (!g) {
      const w = [_n.bind(this), void 0];
      for (w.unshift.apply(w, m), w.push.apply(w, h), j = w.length, y = Promise.resolve(n); _ < j; )
        y = y.then(w[_++], w[_++]);
      return y;
    }
    j = m.length;
    let A = n;
    for (_ = 0; _ < j; ) {
      const w = m[_++], T = m[_++];
      try {
        A = w(A);
      } catch (q) {
        T.call(this, q);
        break;
      }
    }
    try {
      y = _n.call(this, A);
    } catch (w) {
      return Promise.reject(w);
    }
    for (_ = 0, j = h.length; _ < j; )
      y = y.then(h[_++], h[_++]);
    return y;
  }
  getUri(t) {
    t = Ze(this.defaults, t);
    const n = Wn(t.baseURL, t.url);
    return $n(n, t.params, t.paramsSerializer);
  }
}
p.forEach(["delete", "get", "head", "options"], function(t) {
  Bt.prototype[t] = function(n, o) {
    return this.request(Ze(o || {}, {
      method: t,
      url: n,
      data: (o || {}).data
    }));
  };
});
p.forEach(["post", "put", "patch"], function(t) {
  function n(o) {
    return function(u, c, m) {
      return this.request(Ze(m || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  Bt.prototype[t] = n(), Bt.prototype[t + "Form"] = n(!0);
});
const $t = Bt;
class Fr {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(u) {
      n = u;
    });
    const o = this;
    this.promise.then((s) => {
      if (!o._listeners)
        return;
      let u = o._listeners.length;
      for (; u-- > 0; )
        o._listeners[u](s);
      o._listeners = null;
    }), this.promise.then = (s) => {
      let u;
      const c = new Promise((m) => {
        o.subscribe(m), u = m;
      }).then(s);
      return c.cancel = function() {
        o.unsubscribe(u);
      }, c;
    }, t(function(u, c, m) {
      o.reason || (o.reason = new pt(u, c, m), n(o.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Fr(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Ha = Fr;
function Ya(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ja(e) {
  return p.isObject(e) && e.isAxiosError === !0;
}
const Pr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Pr).forEach(([e, t]) => {
  Pr[t] = e;
});
const Ka = Pr;
function zn(e) {
  const t = new $t(e), n = Tn($t.prototype.request, t);
  return p.extend(n, $t.prototype, t, { allOwnKeys: !0 }), p.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return zn(Ze(e, s));
  }, n;
}
const ae = zn(jr);
ae.Axios = $t;
ae.CanceledError = pt;
ae.CancelToken = Ha;
ae.isCancel = Vn;
ae.VERSION = qn;
ae.toFormData = zt;
ae.AxiosError = V;
ae.Cancel = ae.CanceledError;
ae.all = function(t) {
  return Promise.all(t);
};
ae.spread = Ya;
ae.isAxiosError = Ja;
ae.mergeConfig = Ze;
ae.AxiosHeaders = Te;
ae.formToJSON = (e) => Mn(p.isHTMLForm(e) ? new FormData(e) : e);
ae.HttpStatusCode = Ka;
ae.default = ae;
const Mt = ae;
var ve = /* @__PURE__ */ ((e) => (e.NotSure = "not_sure", e.LoggedIn = "logged_in", e.NotLoggedIn = "not_logged_in", e.LoggedOut = "logged_out", e))(ve || {});
const Hn = D.createContext({
  status: ve.NotSure,
  setStatus: () => null,
  user: null,
  setUser: () => null,
  token: null,
  setToken: () => null,
  fetchUser: () => null,
  loginPath: "/login",
  logoutRedirectPath: "/",
  defaultAxiosOptions: null
}), Rr = (e, t) => {
  const [n, o] = D.useState(() => {
    const s = localStorage.getItem(e);
    return s ? JSON.parse(s) : t;
  });
  return D.useEffect(() => {
    localStorage.setItem(e, JSON.stringify(n));
  }, [e, n]), [n, o];
};
function fi({
  children: e,
  fetchUserInterval: t = 0,
  getCurrentUserPath: n = "/user",
  loginPath: o = "/login",
  logoutRedirectPath: s = "/",
  defaultAxiosOptions: u = {}
}) {
  const c = D.useRef(), [m, g] = Rr(
    "auth_status",
    ve.NotSure
  ), [h, y] = Rr("auth_user", null), [_, j] = Rr("auth_token", null), [A, w] = D.useState(0);
  _ && (Mt.defaults.headers.Authorization = `Bearer ${_}`);
  const T = D.useCallback(() => {
    c.current = Mt.get(n, u).then((q) => {
      g(ve.LoggedIn), y(q.data);
    }).catch((q) => {
      console.error(q), g(ve.NotLoggedIn);
    });
  }, []);
  if (D.useEffect(() => {
    T();
  }, [T, A]), D.useEffect(() => {
    let q = 0;
    return t > 0 && (q = window.setInterval(T, Math.max(t, 3e3))), () => {
      clearInterval(q);
    };
  }, [T, t]), m === ve.NotSure && c.current)
    throw c.current;
  return /* @__PURE__ */ lt.jsx(
    Hn.Provider,
    {
      value: {
        status: m,
        setStatus: g,
        user: h,
        setUser: y,
        token: _,
        setToken: j,
        fetchUser: () => w((q) => q + 1),
        loginPath: o,
        logoutRedirectPath: s,
        defaultAxiosOptions: u
      },
      children: e
    }
  );
}
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ar() {
  return Ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, Ar.apply(this, arguments);
}
var On;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(On || (On = {}));
function fe(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Lr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Yn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let o = e.indexOf("?");
    o >= 0 && (t.search = e.substr(o), e = e.substr(0, o)), e && (t.pathname = e);
  }
  return t;
}
var Cn;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Cn || (Cn = {}));
function Ga(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: o = "",
    hash: s = ""
  } = typeof e == "string" ? Yn(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Xa(n, t) : t,
    search: Za(o),
    hash: ei(s)
  };
}
function Xa(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((s) => {
    s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
  }), n.length > 1 ? n.join("/") : "/";
}
function _r(e, t, n, o) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(o) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Jn(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function Kn(e, t, n, o) {
  o === void 0 && (o = !1);
  let s;
  typeof e == "string" ? s = Yn(e) : (s = Ar({}, e), fe(!s.pathname || !s.pathname.includes("?"), _r("?", "pathname", "search", s)), fe(!s.pathname || !s.pathname.includes("#"), _r("#", "pathname", "hash", s)), fe(!s.search || !s.search.includes("#"), _r("#", "search", "hash", s)));
  let u = e === "" || s.pathname === "", c = u ? "/" : s.pathname, m;
  if (o || c == null)
    m = n;
  else {
    let _ = t.length - 1;
    if (c.startsWith("..")) {
      let j = c.split("/");
      for (; j[0] === ".."; )
        j.shift(), _ -= 1;
      s.pathname = j.join("/");
    }
    m = _ >= 0 ? t[_] : "/";
  }
  let g = Ga(s, m), h = c && c !== "/" && c.endsWith("/"), y = (u || c === ".") && n.endsWith("/");
  return !g.pathname.endsWith("/") && (h || y) && (g.pathname += "/"), g;
}
const Qa = (e) => e.join("/").replace(/\/\/+/g, "/"), Za = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, ei = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Gn = ["post", "put", "patch", "delete"];
new Set(Gn);
const ti = ["get", ...Gn];
new Set(ti);
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, xr.apply(this, arguments);
}
const Ir = /* @__PURE__ */ D.createContext(null);
process.env.NODE_ENV !== "production" && (Ir.displayName = "DataRouter");
const ri = /* @__PURE__ */ D.createContext(null);
process.env.NODE_ENV !== "production" && (ri.displayName = "DataRouterState");
const ni = /* @__PURE__ */ D.createContext(null);
process.env.NODE_ENV !== "production" && (ni.displayName = "Await");
const Jt = /* @__PURE__ */ D.createContext(null);
process.env.NODE_ENV !== "production" && (Jt.displayName = "Navigation");
const Ur = /* @__PURE__ */ D.createContext(null);
process.env.NODE_ENV !== "production" && (Ur.displayName = "Location");
const ht = /* @__PURE__ */ D.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (ht.displayName = "Route");
const oi = /* @__PURE__ */ D.createContext(null);
process.env.NODE_ENV !== "production" && (oi.displayName = "RouteError");
function $r() {
  return D.useContext(Ur) != null;
}
function mt() {
  return $r() || (process.env.NODE_ENV !== "production" ? fe(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : fe(!1)), D.useContext(Ur).location;
}
const Xn = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Qn(e) {
  D.useContext(Jt).static || D.useLayoutEffect(e);
}
function Br() {
  let {
    isDataRoute: e
  } = D.useContext(ht);
  return e ? ci() : ai();
}
function ai() {
  $r() || (process.env.NODE_ENV !== "production" ? fe(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : fe(!1));
  let e = D.useContext(Ir), {
    basename: t,
    navigator: n
  } = D.useContext(Jt), {
    matches: o
  } = D.useContext(ht), {
    pathname: s
  } = mt(), u = JSON.stringify(Jn(o).map((g) => g.pathnameBase)), c = D.useRef(!1);
  return Qn(() => {
    c.current = !0;
  }), D.useCallback(function(g, h) {
    if (h === void 0 && (h = {}), process.env.NODE_ENV !== "production" && Lr(c.current, Xn), !c.current)
      return;
    if (typeof g == "number") {
      n.go(g);
      return;
    }
    let y = Kn(g, JSON.parse(u), s, h.relative === "path");
    e == null && t !== "/" && (y.pathname = y.pathname === "/" ? t : Qa([t, y.pathname])), (h.replace ? n.replace : n.push)(y, h.state, h);
  }, [t, n, u, s, e]);
}
var Zn = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Zn || {}), eo = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(eo || {});
function to(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function ii(e) {
  let t = D.useContext(Ir);
  return t || (process.env.NODE_ENV !== "production" ? fe(!1, to(e)) : fe(!1)), t;
}
function si(e) {
  let t = D.useContext(ht);
  return t || (process.env.NODE_ENV !== "production" ? fe(!1, to(e)) : fe(!1)), t;
}
function ui(e) {
  let t = si(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? fe(!1, e + ' can only be used on routes that contain a unique "id"') : fe(!1)), n.route.id;
}
function ci() {
  let {
    router: e
  } = ii(Zn.UseNavigateStable), t = ui(eo.UseNavigateStable), n = D.useRef(!1);
  return Qn(() => {
    n.current = !0;
  }), D.useCallback(function(s, u) {
    u === void 0 && (u = {}), process.env.NODE_ENV !== "production" && Lr(n.current, Xn), n.current && (typeof s == "number" ? e.navigate(s) : e.navigate(s, xr({
      fromRouteId: t
    }, u)));
  }, [e, t]);
}
function ro(e) {
  let {
    to: t,
    replace: n,
    state: o,
    relative: s
  } = e;
  $r() || (process.env.NODE_ENV !== "production" ? fe(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : fe(!1)), process.env.NODE_ENV !== "production" && Lr(!D.useContext(Jt).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let {
    matches: u
  } = D.useContext(ht), {
    pathname: c
  } = mt(), m = Br(), g = Kn(t, Jn(u).map((y) => y.pathnameBase), c, s === "path"), h = JSON.stringify(g);
  return D.useEffect(() => m(JSON.parse(h), {
    replace: n,
    state: o,
    relative: s
  }), [m, h, s, n, o]), null;
}
new Promise(() => {
});
function vt() {
  return D.useContext(Hn);
}
function di({ to: e }) {
  var o, s;
  const t = vt(), n = mt();
  return t.status === ve.LoggedIn ? /* @__PURE__ */ lt.jsx(ro, { to: ((s = (o = n.state) == null ? void 0 : o.from) == null ? void 0 : s.pathname) || e || "/" }) : null;
}
function pi({ children: e }) {
  const t = vt(), n = mt(), o = Br();
  return D.useEffect(() => {
    t.status === ve.LoggedOut && (o(t.logoutRedirectPath), t.setStatus(ve.NotLoggedIn));
  }, [t, o]), t.status === ve.NotLoggedIn ? /* @__PURE__ */ lt.jsx(ro, { to: t.loginPath, state: { from: n } }) : /* @__PURE__ */ lt.jsx(lt.Fragment, { children: e });
}
function li(e, t) {
  const {
    errorHandler: n = (N) => console.error(N),
    apiUrl: o = "/login",
    getUserFromResponse: s = (N) => N == null ? void 0 : N.user,
    getJwtTokenFromResponse: u = (N) => {
      var $;
      return (($ = N == null ? void 0 : N.token) == null ? void 0 : $.token) || (N == null ? void 0 : N.token);
    },
    actionAxiosOptions: c = null
  } = t || {}, { setStatus: m, setUser: g, setToken: h, fetchUser: y, defaultAxiosOptions: _ } = vt(), [j, A] = D.useState(!1), [w, T] = D.useState(null);
  return { submit: () => {
    A(!0), Mt.post(
      o,
      e,
      c || _ || {}
    ).then((N) => {
      m(ve.LoggedIn), typeof s == "function" ? g(s(N.data)) : y(), typeof u == "function" && h(u(N.data)), T(null);
    }).catch((N) => {
      var $;
      T((($ = N.response) == null ? void 0 : $.data) || N.message || "Unknown error"), n && n(N);
    }).finally(() => {
      A(!1);
    });
  }, loading: j, errors: w };
}
function hi(e) {
  const {
    errorHandler: t = (g) => console.error(g),
    apiUrl: n = "/logout"
  } = e || {}, { setStatus: o, setUser: s } = vt(), [u, c] = D.useState(!1);
  return { submit: () => {
    c(!0), Mt.post(n).then(() => {
      o(ve.LoggedOut), s(null);
    }).catch(t).finally(() => {
      c(!1);
    });
  }, loading: u };
}
function mi(e, t) {
  const { apiUrl: n = "/register", ...o } = t || {};
  return li(e, { apiUrl: n, ...o });
}
function vi() {
  const e = vt(), t = mt(), n = Br();
  return D.useCallback(() => e.status === ve.NotLoggedIn ? (n(e.loginPath, { state: { from: t } }), !1) : !0, [e, t, n]);
}
export {
  fi as AuthProvider,
  ve as AuthStatus,
  di as RedirectAfterAuth,
  pi as RequireAuth,
  vt as useAuth,
  li as useLogin,
  hi as useLogout,
  mi as useRegister,
  vi as useRequireAuth
};
