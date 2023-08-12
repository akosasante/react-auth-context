import { jsx as S, Fragment as w } from "react/jsx-runtime";
import U from "axios";
import { createContext as F, useState as d, useEffect as I, useRef as q, useCallback as O, useContext as C } from "react";
import { useLocation as A, Navigate as _, useNavigate as P } from "react-router-dom";
var r = /* @__PURE__ */ ((t) => (t.NotSure = "not_sure", t.LoggedIn = "logged_in", t.NotLoggedIn = "not_logged_in", t.LoggedOut = "logged_out", t))(r || {});
const b = F({
  status: r.NotSure,
  setStatus: () => null,
  user: null,
  setUser: () => null,
  token: null,
  setToken: () => null,
  fetchUser: () => null,
  loginPath: "/login",
  logoutRedirectPath: "/",
  defaultAxiosOptions: null
}), x = (t, e) => {
  const [o, s] = d(() => {
    const u = localStorage.getItem(t);
    return u ? JSON.parse(u) : e;
  });
  return I(() => {
    localStorage.setItem(t, JSON.stringify(o));
  }, [t, o]), [o, s];
};
function V({
  children: t,
  fetchUserInterval: e = 0,
  getCurrentUserPath: o = "/user",
  loginPath: s = "/login",
  logoutRedirectPath: u = "/",
  defaultAxiosOptions: c = {}
}) {
  const i = q(), [f, a] = x(
    "auth_status",
    r.NotSure
  ), [k, L] = x("auth_user", null), [h, R] = x("auth_token", null), [N, v] = d(0);
  h && (U.defaults.headers.Authorization = `Bearer ${h}`);
  const g = O(() => {
    i.current = U.get(o, c).then((l) => {
      a(r.LoggedIn), L(l.data);
    }).catch((l) => {
      console.error(l), a(r.NotLoggedIn);
    });
  }, []);
  if (I(() => {
    g();
  }, [g, N]), I(() => {
    let l = 0;
    return e > 0 && (l = window.setInterval(g, Math.max(e, 3e3))), () => {
      clearInterval(l);
    };
  }, [g, e]), f === r.NotSure && i.current)
    throw i.current;
  return /* @__PURE__ */ S(
    b.Provider,
    {
      value: {
        status: f,
        setStatus: a,
        user: k,
        setUser: L,
        token: h,
        setToken: R,
        fetchUser: () => v((l) => l + 1),
        loginPath: s,
        logoutRedirectPath: u,
        defaultAxiosOptions: c
      },
      children: t
    }
  );
}
function p() {
  return C(b);
}
function j({ to: t }) {
  var s, u;
  const e = p(), o = A();
  return e.status === r.LoggedIn ? /* @__PURE__ */ S(_, { to: ((u = (s = o.state) == null ? void 0 : s.from) == null ? void 0 : u.pathname) || t || "/" }) : null;
}
function z({ children: t }) {
  const e = p(), o = A(), s = P();
  return I(() => {
    e.status === r.LoggedOut && (s(e.logoutRedirectPath), e.setStatus(r.NotLoggedIn));
  }, [e, s]), e.status === r.NotLoggedIn ? /* @__PURE__ */ S(_, { to: e.loginPath, state: { from: o } }) : /* @__PURE__ */ S(w, { children: t });
}
function T(t, e) {
  const {
    errorHandler: o = (n) => console.error(n),
    apiUrl: s = "/login",
    getUserFromResponse: u = (n) => n == null ? void 0 : n.user,
    getJwtTokenFromResponse: c = (n) => {
      var m;
      return ((m = n == null ? void 0 : n.token) == null ? void 0 : m.token) || (n == null ? void 0 : n.token);
    },
    actionAxiosOptions: i = null
  } = e || {}, { setStatus: f, setUser: a, setToken: k, fetchUser: L, defaultAxiosOptions: h } = p(), [R, N] = d(!1), [v, g] = d(null);
  return { submit: () => {
    N(!0), U.post(
      s,
      t,
      i || h || {}
    ).then((n) => {
      f(r.LoggedIn), typeof u == "function" ? a(u(n.data)) : L(), typeof c == "function" && k(c(n.data)), g(null);
    }).catch((n) => {
      var m;
      g(((m = n.response) == null ? void 0 : m.data) || n.message || "Unknown error"), o && o(n);
    }).finally(() => {
      N(!1);
    });
  }, loading: R, errors: v };
}
function B(t) {
  const {
    errorHandler: e = (a) => console.error(a),
    apiUrl: o = "/logout"
  } = t || {}, { setStatus: s, setUser: u } = p(), [c, i] = d(!1);
  return { submit: () => {
    i(!0), U.post(o).then(() => {
      s(r.LoggedOut), u(null);
    }).catch(e).finally(() => {
      i(!1);
    });
  }, loading: c };
}
function M(t, e) {
  const { apiUrl: o = "/register", ...s } = e || {};
  return T(t, { apiUrl: o, ...s });
}
function $() {
  const t = p(), e = A(), o = P();
  return O(() => t.status === r.NotLoggedIn ? (o(t.loginPath, { state: { from: e } }), !1) : !0, [t, e, o]);
}
export {
  V as AuthProvider,
  r as AuthStatus,
  j as RedirectAfterAuth,
  z as RequireAuth,
  p as useAuth,
  T as useLogin,
  B as useLogout,
  M as useRegister,
  $ as useRequireAuth
};
