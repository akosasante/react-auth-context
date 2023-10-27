import { jsx as L, Fragment as P } from "react/jsx-runtime";
import y from "axios";
import { createContext as j, useState as O, useEffect as N, useCallback as U, useRef as F, useContext as T } from "react";
import { useLocation as A, Navigate as k, useNavigate as R } from "react-router-dom";
var u;
(function(t) {
  t.NotSure = "not_sure", t.LoggedIn = "logged_in", t.NotLoggedIn = "not_logged_in", t.LoggedOut = "logged_out";
})(u || (u = {}));
const w = j({
  status: u.NotSure,
  setStatus: () => null,
  user: null,
  setUser: () => null,
  token: null,
  setToken: () => null,
  fetchUser: () => null,
  loginPath: "/login",
  logoutRedirectPath: "/",
  defaultAxiosOptions: void 0,
  logMsg: () => null
}), I = (t, e, r) => {
  const [n, s] = O(() => {
    const l = localStorage.getItem(t);
    try {
      return l ? JSON.parse(l) : e;
    } catch (i) {
      return r(`Invalid JSON parsed for parsing value from localstorage, will return default value (${e}): `, i), e;
    }
  });
  return N(() => {
    try {
      localStorage.setItem(t, n ? JSON.stringify(n) : JSON.stringify(e) || "{}");
    } catch (l) {
      r(`Failed to save ${n} or default (${e}) in local storage: `, l);
    }
  }, [t, n]), [n, s];
};
function H({ children: t, fetchUserInterval: e = 0, getCurrentUserPath: r = "/user", loginPath: n = "/login", logoutRedirectPath: s = "/", defaultAxiosOptions: l = {}, logLevel: i = null }) {
  const a = U((o, ...c) => {
    i && console[i](`[react-auth-context]: ${o}`, ...c);
  }, [i]), d = F(), [g, f] = I("auth_status", u.NotSure, a), [h, p] = I("auth_user", null, a), [v, _] = I("auth_token", null, a), [x, b] = O(0);
  v && (y.defaults.headers.Authorization = `Bearer ${v}`);
  const m = U(() => {
    d.current = y.get(r, l).then((o) => {
      f(u.LoggedIn), p(o.data);
    }).catch((o) => {
      a(o), f(u.NotLoggedIn), p(null);
    });
  }, [l, r, f, p]);
  if (N(() => {
    m();
  }, [m, x]), N(() => {
    let o = 0;
    return e > 0 && (o = window.setInterval(m, Math.max(e, 3e3))), () => {
      clearInterval(o);
    };
  }, [m, e]), g === u.NotSure && d.current)
    throw d.current;
  return L(w.Provider, { value: {
    status: g,
    setStatus: f,
    user: h,
    setUser: p,
    token: v,
    setToken: _,
    fetchUser: () => b((o) => o + 1),
    loginPath: n,
    logoutRedirectPath: s,
    defaultAxiosOptions: l,
    logMsg: a
  }, children: t });
}
function S() {
  return T(w);
}
function z({ to: t }) {
  var e, r;
  const n = S(), s = A();
  return n.status === u.LoggedIn ? L(k, { to: ((r = (e = s.state) === null || e === void 0 ? void 0 : e.from) === null || r === void 0 ? void 0 : r.pathname) || t || "/" }) : null;
}
function B({ children: t }) {
  const e = S(), r = A(), n = R();
  return N(() => {
    e.status === u.LoggedOut && (n(e.logoutRedirectPath), e.setStatus(u.NotLoggedIn));
  }, [e, n]), e.status === u.NotLoggedIn ? L(k, { to: e.loginPath, state: { from: r } }) : L(P, { children: t });
}
function J(t, e) {
  const { setStatus: r, setUser: n, setToken: s, fetchUser: l, defaultAxiosOptions: i, logMsg: a } = S(), { apiUrl: d = "/login", getUserFromResponse: g = (o) => o == null ? void 0 : o.user, getJwtTokenFromResponse: f = (o) => {
    var c;
    return ((c = o == null ? void 0 : o.token) === null || c === void 0 ? void 0 : c.token) || (o == null ? void 0 : o.token);
  }, actionAxiosOptions: h = null, errorHandler: p = (o) => a(o) } = e || {}, [v, _] = O(!1), [x, b] = O(null);
  return { submit: () => (_(!0), y.post(d, t, h || i || {}).then((o) => (r(u.LoggedIn), typeof g == "function" ? n(g(o.data)) : l(), typeof f == "function" && s(f(o.data)), b(null), o)).catch((o) => {
    var c;
    b(((c = o.response) === null || c === void 0 ? void 0 : c.data) || o.message || "Unknown error"), p && p(o);
  }).finally(() => {
    _(!1);
  })), loading: v, errors: x };
}
function D(t) {
  const { setStatus: e, setUser: r, defaultAxiosOptions: n, logMsg: s } = S(), { errorHandler: l = (h) => s(h), apiUrl: i = "/logout", actionAxiosOptions: a = null } = t || {}, [d, g] = O(!1);
  return { submit: () => (g(!0), y.post(i, null, a || n || {}).then((h) => (e(u.LoggedOut), r(null), h)).catch(l).finally(() => {
    g(!1);
  })), loading: d };
}
var $ = globalThis && globalThis.__rest || function(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
};
function G(t, e) {
  const r = e || {}, { apiUrl: n = "/register" } = r, s = $(r, ["apiUrl"]);
  return J(t, Object.assign({ apiUrl: n }, s));
}
function K() {
  const t = S(), e = A(), r = R();
  return U(() => t.status === u.NotLoggedIn ? (r(t.loginPath, { state: { from: e } }), !1) : !0, [t, e, r]);
}
export {
  H as AuthProvider,
  u as AuthStatus,
  z as RedirectAfterAuth,
  B as RequireAuth,
  S as useAuth,
  J as useLogin,
  D as useLogout,
  G as useRegister,
  K as useRequireAuth
};
