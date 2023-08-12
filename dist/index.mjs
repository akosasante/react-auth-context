import { jsx as S, Fragment as w } from "react/jsx-runtime";
import U from "axios";
import { createContext as F, useState as d, useEffect as I, useRef as q, useCallback as O, useContext as y } from "react";
import { useLocation as A, Navigate as _, useNavigate as P } from "react-router-dom";
var s = /* @__PURE__ */ ((t) => (t.NotSure = "not_sure", t.LoggedIn = "logged_in", t.NotLoggedIn = "not_logged_in", t.LoggedOut = "logged_out", t))(s || {});
const b = F({
  status: s.NotSure,
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
  const [o, r] = d(() => {
    const u = localStorage.getItem(t);
    try {
      return u ? JSON.parse(u) : e;
    } catch (l) {
      return console.error("Invalid JSON:", l), e;
    }
  });
  return I(() => {
    localStorage.setItem(t, o ? JSON.stringify(o) : "{}");
  }, [t, o]), [o, r];
};
function j({
  children: t,
  fetchUserInterval: e = 0,
  getCurrentUserPath: o = "/user",
  loginPath: r = "/login",
  logoutRedirectPath: u = "/",
  defaultAxiosOptions: l = {}
}) {
  const c = q(), [f, a] = x(
    "auth_status",
    s.NotSure
  ), [k, L] = x("auth_user", null), [h, v] = x("auth_token", null), [N, R] = d(0);
  h && (U.defaults.headers.Authorization = `Bearer ${h}`);
  const g = O(() => {
    c.current = U.get(o, l).then((i) => {
      a(s.LoggedIn), L(i.data);
    }).catch((i) => {
      console.error(i), a(s.NotLoggedIn);
    });
  }, []);
  if (I(() => {
    g();
  }, [g, N]), I(() => {
    let i = 0;
    return e > 0 && (i = window.setInterval(g, Math.max(e, 3e3))), () => {
      clearInterval(i);
    };
  }, [g, e]), f === s.NotSure && c.current)
    throw c.current;
  return /* @__PURE__ */ S(
    b.Provider,
    {
      value: {
        status: f,
        setStatus: a,
        user: k,
        setUser: L,
        token: h,
        setToken: v,
        fetchUser: () => R((i) => i + 1),
        loginPath: r,
        logoutRedirectPath: u,
        defaultAxiosOptions: l
      },
      children: t
    }
  );
}
function p() {
  return y(b);
}
function z({ to: t }) {
  var r, u;
  const e = p(), o = A();
  return e.status === s.LoggedIn ? /* @__PURE__ */ S(_, { to: ((u = (r = o.state) == null ? void 0 : r.from) == null ? void 0 : u.pathname) || t || "/" }) : null;
}
function B({ children: t }) {
  const e = p(), o = A(), r = P();
  return I(() => {
    e.status === s.LoggedOut && (r(e.logoutRedirectPath), e.setStatus(s.NotLoggedIn));
  }, [e, r]), e.status === s.NotLoggedIn ? /* @__PURE__ */ S(_, { to: e.loginPath, state: { from: o } }) : /* @__PURE__ */ S(w, { children: t });
}
function C(t, e) {
  const {
    errorHandler: o = (n) => console.error(n),
    apiUrl: r = "/login",
    getUserFromResponse: u = (n) => n == null ? void 0 : n.user,
    getJwtTokenFromResponse: l = (n) => {
      var m;
      return ((m = n == null ? void 0 : n.token) == null ? void 0 : m.token) || (n == null ? void 0 : n.token);
    },
    actionAxiosOptions: c = null
  } = e || {}, { setStatus: f, setUser: a, setToken: k, fetchUser: L, defaultAxiosOptions: h } = p(), [v, N] = d(!1), [R, g] = d(null);
  return { submit: () => {
    N(!0), U.post(
      r,
      t,
      c || h || {}
    ).then((n) => {
      f(s.LoggedIn), typeof u == "function" ? a(u(n.data)) : L(), typeof l == "function" && k(l(n.data)), g(null);
    }).catch((n) => {
      var m;
      g(((m = n.response) == null ? void 0 : m.data) || n.message || "Unknown error"), o && o(n);
    }).finally(() => {
      N(!1);
    });
  }, loading: v, errors: R };
}
function M(t) {
  const {
    errorHandler: e = (a) => console.error(a),
    apiUrl: o = "/logout"
  } = t || {}, { setStatus: r, setUser: u } = p(), [l, c] = d(!1);
  return { submit: () => {
    c(!0), U.post(o).then(() => {
      r(s.LoggedOut), u(null);
    }).catch(e).finally(() => {
      c(!1);
    });
  }, loading: l };
}
function V(t, e) {
  const { apiUrl: o = "/register", ...r } = e || {};
  return C(t, { apiUrl: o, ...r });
}
function $() {
  const t = p(), e = A(), o = P();
  return O(() => t.status === s.NotLoggedIn ? (o(t.loginPath, { state: { from: e } }), !1) : !0, [t, e, o]);
}
export {
  j as AuthProvider,
  s as AuthStatus,
  z as RedirectAfterAuth,
  B as RequireAuth,
  p as useAuth,
  C as useLogin,
  M as useLogout,
  V as useRegister,
  $ as useRequireAuth
};
