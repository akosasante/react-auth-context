import { jsx as L, Fragment as R } from "react/jsx-runtime";
import S from "axios";
import { createContext as w, useState as v, useEffect as _, useRef as j, useCallback as x, useContext as T } from "react";
import { useLocation as I, Navigate as k, useNavigate as A } from "react-router-dom";
var u;
(function(t) {
  t.NotSure = "not_sure", t.LoggedIn = "logged_in", t.NotLoggedIn = "not_logged_in", t.LoggedOut = "logged_out";
})(u || (u = {}));
const P = w({
  status: u.NotSure,
  setStatus: () => null,
  user: null,
  setUser: () => null,
  token: null,
  setToken: () => null,
  fetchUser: () => null,
  loginPath: "/login",
  logoutRedirectPath: "/",
  defaultAxiosOptions: void 0
}), y = (t, e) => {
  const [o, n] = v(() => {
    const r = localStorage.getItem(t);
    try {
      return r ? JSON.parse(r) : e;
    } catch (l) {
      return console.error("Invalid JSON:", l), e;
    }
  });
  return _(() => {
    localStorage.setItem(t, o ? JSON.stringify(o) : "{}");
  }, [t, o]), [o, n];
};
function z({ children: t, fetchUserInterval: e = 0, getCurrentUserPath: o = "/user", loginPath: n = "/login", logoutRedirectPath: r = "/", defaultAxiosOptions: l = {} }) {
  const c = j(), [d, i] = y("auth_status", u.NotSure), [b, m] = y("auth_user", null), [h, N] = y("auth_token", null), [O, U] = v(0);
  h && (S.defaults.headers.Authorization = `Bearer ${h}`);
  const g = x(() => {
    c.current = S.get(o, l).then((a) => {
      i(u.LoggedIn), m(a.data);
    }).catch((a) => {
      console.error(a), i(u.NotLoggedIn);
    });
  }, []);
  if (_(() => {
    g();
  }, [g, O]), _(() => {
    let a = 0;
    return e > 0 && (a = window.setInterval(g, Math.max(e, 3e3))), () => {
      clearInterval(a);
    };
  }, [g, e]), d === u.NotSure && c.current)
    throw c.current;
  return L(P.Provider, { value: {
    status: d,
    setStatus: i,
    user: b,
    setUser: m,
    token: h,
    setToken: N,
    fetchUser: () => U((a) => a + 1),
    loginPath: n,
    logoutRedirectPath: r,
    defaultAxiosOptions: l
  }, children: t });
}
function p() {
  return T(P);
}
function B({ to: t }) {
  var e, o;
  const n = p(), r = I();
  return n.status === u.LoggedIn ? L(k, { to: ((o = (e = r.state) === null || e === void 0 ? void 0 : e.from) === null || o === void 0 ? void 0 : o.pathname) || t || "/" }) : null;
}
function M({ children: t }) {
  const e = p(), o = I(), n = A();
  return _(() => {
    e.status === u.LoggedOut && (n(e.logoutRedirectPath), e.setStatus(u.NotLoggedIn));
  }, [e, n]), e.status === u.NotLoggedIn ? L(k, { to: e.loginPath, state: { from: o } }) : L(R, { children: t });
}
function F(t, e) {
  const { errorHandler: o = (s) => console.error(s), apiUrl: n = "/login", getUserFromResponse: r = (s) => s == null ? void 0 : s.user, getJwtTokenFromResponse: l = (s) => {
    var f;
    return ((f = s == null ? void 0 : s.token) === null || f === void 0 ? void 0 : f.token) || (s == null ? void 0 : s.token);
  }, actionAxiosOptions: c = null } = e || {}, { setStatus: d, setUser: i, setToken: b, fetchUser: m, defaultAxiosOptions: h } = p(), [N, O] = v(!1), [U, g] = v(null);
  return { submit: () => (O(!0), S.post(n, t, c || h || {}).then((s) => (d(u.LoggedIn), typeof r == "function" ? i(r(s.data)) : m(), typeof l == "function" && b(l(s.data)), g(null), s)).catch((s) => {
    var f;
    g(((f = s.response) === null || f === void 0 ? void 0 : f.data) || s.message || "Unknown error"), o && o(s);
  }).finally(() => {
    O(!1);
  })), loading: N, errors: U };
}
function V(t) {
  const { errorHandler: e = (i) => console.error(i), apiUrl: o = "/logout" } = t || {}, { setStatus: n, setUser: r } = p(), [l, c] = v(!1);
  return { submit: () => (c(!0), S.post(o).then((i) => (n(u.LoggedOut), r(null), i)).catch(e).finally(() => {
    c(!1);
  })), loading: l };
}
var q = globalThis && globalThis.__rest || function(t, e) {
  var o = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (o[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++)
      e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (o[n[r]] = t[n[r]]);
  return o;
};
function $(t, e) {
  const o = e || {}, { apiUrl: n = "/register" } = o, r = q(o, ["apiUrl"]);
  return F(t, Object.assign({ apiUrl: n }, r));
}
function D() {
  const t = p(), e = I(), o = A();
  return x(() => t.status === u.NotLoggedIn ? (o(t.loginPath, { state: { from: e } }), !1) : !0, [t, e, o]);
}
export {
  z as AuthProvider,
  u as AuthStatus,
  B as RedirectAfterAuth,
  M as RequireAuth,
  p as useAuth,
  F as useLogin,
  V as useLogout,
  $ as useRegister,
  D as useRequireAuth
};
