import { jsx as S, Fragment as R } from "react/jsx-runtime";
import _ from "axios";
import { createContext as w, useState as v, useEffect as b, useRef as j, useCallback as I, useContext as T } from "react";
import { useLocation as y, Navigate as A, useNavigate as k } from "react-router-dom";
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
}), x = (t, e) => {
  const [o, n] = v(() => {
    const r = localStorage.getItem(t);
    try {
      return r ? JSON.parse(r) : e;
    } catch (l) {
      return console.error("Invalid JSON:", l), e;
    }
  });
  return b(() => {
    localStorage.setItem(t, o ? JSON.stringify(o) : "{}");
  }, [t, o]), [o, n];
};
function z({ children: t, fetchUserInterval: e = 0, getCurrentUserPath: o = "/user", loginPath: n = "/login", logoutRedirectPath: r = "/", defaultAxiosOptions: l = {} }) {
  const g = j(), [h, a] = x("auth_status", u.NotSure), [O, c] = x("auth_user", null), [p, N] = x("auth_token", null), [L, U] = v(0);
  p && (_.defaults.headers.Authorization = `Bearer ${p}`);
  const f = I(() => {
    g.current = _.get(o, l).then((i) => {
      a(u.LoggedIn), c(i.data);
    }).catch((i) => {
      console.error(i), a(u.NotLoggedIn);
    });
  }, []);
  if (b(() => {
    f();
  }, [f, L]), b(() => {
    let i = 0;
    return e > 0 && (i = window.setInterval(f, Math.max(e, 3e3))), () => {
      clearInterval(i);
    };
  }, [f, e]), h === u.NotSure && g.current)
    throw g.current;
  return S(P.Provider, { value: {
    status: h,
    setStatus: a,
    user: O,
    setUser: c,
    token: p,
    setToken: N,
    fetchUser: () => U((i) => i + 1),
    loginPath: n,
    logoutRedirectPath: r,
    defaultAxiosOptions: l
  }, children: t });
}
function m() {
  return T(P);
}
function B({ to: t }) {
  var e, o;
  const n = m(), r = y();
  return n.status === u.LoggedIn ? S(A, { to: ((o = (e = r.state) === null || e === void 0 ? void 0 : e.from) === null || o === void 0 ? void 0 : o.pathname) || t || "/" }) : null;
}
function M({ children: t }) {
  const e = m(), o = y(), n = k();
  return b(() => {
    e.status === u.LoggedOut && (n(e.logoutRedirectPath), e.setStatus(u.NotLoggedIn));
  }, [e, n]), e.status === u.NotLoggedIn ? S(A, { to: e.loginPath, state: { from: o } }) : S(R, { children: t });
}
function F(t, e) {
  const { errorHandler: o = (s) => console.error(s), apiUrl: n = "/login", getUserFromResponse: r = (s) => s == null ? void 0 : s.user, getJwtTokenFromResponse: l = (s) => {
    var d;
    return ((d = s == null ? void 0 : s.token) === null || d === void 0 ? void 0 : d.token) || (s == null ? void 0 : s.token);
  }, actionAxiosOptions: g = null } = e || {}, { setStatus: h, setUser: a, setToken: O, fetchUser: c, defaultAxiosOptions: p } = m(), [N, L] = v(!1), [U, f] = v(null);
  return { submit: () => (L(!0), _.post(n, t, g || p || {}).then((s) => (h(u.LoggedIn), typeof r == "function" ? a(r(s.data)) : c(), typeof l == "function" && O(l(s.data)), f(null), s)).catch((s) => {
    var d;
    f(((d = s.response) === null || d === void 0 ? void 0 : d.data) || s.message || "Unknown error"), o && o(s);
  }).finally(() => {
    L(!1);
  })), loading: N, errors: U };
}
function V(t) {
  const { errorHandler: e = (c) => console.error(c), apiUrl: o = "/logout", actionAxiosOptions: n = null } = t || {}, { setStatus: r, setUser: l, defaultAxiosOptions: g } = m(), [h, a] = v(!1);
  return { submit: () => (a(!0), _.post(o, null, n || g || {}).then((c) => (r(u.LoggedOut), l(null), c)).catch(e).finally(() => {
    a(!1);
  })), loading: h };
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
  const t = m(), e = y(), o = k();
  return I(() => t.status === u.NotLoggedIn ? (o(t.loginPath, { state: { from: e } }), !1) : !0, [t, e, o]);
}
export {
  z as AuthProvider,
  u as AuthStatus,
  B as RedirectAfterAuth,
  M as RequireAuth,
  m as useAuth,
  F as useLogin,
  V as useLogout,
  $ as useRegister,
  D as useRequireAuth
};
