import { jsx as S, Fragment as P } from "react/jsx-runtime";
import _ from "axios";
import { createContext as w, useState as v, useEffect as b, useRef as j, useCallback as x, useContext as T } from "react";
import { useLocation as U, Navigate as A, useNavigate as k } from "react-router-dom";
var u;
(function(t) {
  t.NotSure = "not_sure", t.LoggedIn = "logged_in", t.NotLoggedIn = "not_logged_in", t.LoggedOut = "logged_out";
})(u || (u = {}));
const R = w({
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
}), I = (t, e) => {
  const [o, n] = v(() => {
    const r = localStorage.getItem(t);
    try {
      return r ? JSON.parse(r) : e;
    } catch (l) {
      return console.error("Invalid JSON:", l), e;
    }
  });
  return b(() => {
    localStorage.setItem(t, o ? JSON.stringify(o) : JSON.stringify(e) || "{}");
  }, [t, o]), [o, n];
};
function z({ children: t, fetchUserInterval: e = 0, getCurrentUserPath: o = "/user", loginPath: n = "/login", logoutRedirectPath: r = "/", defaultAxiosOptions: l = {} }) {
  const g = j(), [h, i] = I("auth_status", u.NotSure), [O, a] = I("auth_user", null), [p, N] = I("auth_token", null), [L, y] = v(0);
  p && (_.defaults.headers.Authorization = `Bearer ${p}`);
  const f = x(() => {
    g.current = _.get(o, l).then((c) => {
      i(u.LoggedIn), a(c.data);
    }).catch((c) => {
      console.error(c), i(u.NotLoggedIn);
    });
  }, [l, o, i, a]);
  if (b(() => {
    f();
  }, [f, L]), b(() => {
    let c = 0;
    return e > 0 && (c = window.setInterval(f, Math.max(e, 3e3))), () => {
      clearInterval(c);
    };
  }, [f, e]), h === u.NotSure && g.current)
    throw g.current;
  return S(R.Provider, { value: {
    status: h,
    setStatus: i,
    user: O,
    setUser: a,
    token: p,
    setToken: N,
    fetchUser: () => y((c) => c + 1),
    loginPath: n,
    logoutRedirectPath: r,
    defaultAxiosOptions: l
  }, children: t });
}
function m() {
  return T(R);
}
function B({ to: t }) {
  var e, o;
  const n = m(), r = U();
  return n.status === u.LoggedIn ? S(A, { to: ((o = (e = r.state) === null || e === void 0 ? void 0 : e.from) === null || o === void 0 ? void 0 : o.pathname) || t || "/" }) : null;
}
function M({ children: t }) {
  const e = m(), o = U(), n = k();
  return b(() => {
    e.status === u.LoggedOut && (n(e.logoutRedirectPath), e.setStatus(u.NotLoggedIn));
  }, [e, n]), e.status === u.NotLoggedIn ? S(A, { to: e.loginPath, state: { from: o } }) : S(P, { children: t });
}
function F(t, e) {
  const { errorHandler: o = (s) => console.error(s), apiUrl: n = "/login", getUserFromResponse: r = (s) => s == null ? void 0 : s.user, getJwtTokenFromResponse: l = (s) => {
    var d;
    return ((d = s == null ? void 0 : s.token) === null || d === void 0 ? void 0 : d.token) || (s == null ? void 0 : s.token);
  }, actionAxiosOptions: g = null } = e || {}, { setStatus: h, setUser: i, setToken: O, fetchUser: a, defaultAxiosOptions: p } = m(), [N, L] = v(!1), [y, f] = v(null);
  return { submit: () => (L(!0), _.post(n, t, g || p || {}).then((s) => (h(u.LoggedIn), typeof r == "function" ? i(r(s.data)) : a(), typeof l == "function" && O(l(s.data)), f(null), s)).catch((s) => {
    var d;
    f(((d = s.response) === null || d === void 0 ? void 0 : d.data) || s.message || "Unknown error"), o && o(s);
  }).finally(() => {
    L(!1);
  })), loading: N, errors: y };
}
function $(t) {
  const { errorHandler: e = (a) => console.error(a), apiUrl: o = "/logout", actionAxiosOptions: n = null } = t || {}, { setStatus: r, setUser: l, defaultAxiosOptions: g } = m(), [h, i] = v(!1);
  return { submit: () => (i(!0), _.post(o, null, n || g || {}).then((a) => (r(u.LoggedOut), l(null), a)).catch(e).finally(() => {
    i(!1);
  })), loading: h };
}
var J = globalThis && globalThis.__rest || function(t, e) {
  var o = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (o[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++)
      e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (o[n[r]] = t[n[r]]);
  return o;
};
function D(t, e) {
  const o = e || {}, { apiUrl: n = "/register" } = o, r = J(o, ["apiUrl"]);
  return F(t, Object.assign({ apiUrl: n }, r));
}
function G() {
  const t = m(), e = U(), o = k();
  return x(() => t.status === u.NotLoggedIn ? (o(t.loginPath, { state: { from: e } }), !1) : !0, [t, e, o]);
}
export {
  z as AuthProvider,
  u as AuthStatus,
  B as RedirectAfterAuth,
  M as RequireAuth,
  m as useAuth,
  F as useLogin,
  $ as useLogout,
  D as useRegister,
  G as useRequireAuth
};
