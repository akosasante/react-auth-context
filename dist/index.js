"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const A=require("react/jsx-runtime"),L=require("axios"),r=require("react"),f=require("react-router-dom");exports.AuthStatus=void 0;(function(t){t.NotSure="not_sure",t.LoggedIn="logged_in",t.NotLoggedIn="not_logged_in",t.LoggedOut="logged_out"})(exports.AuthStatus||(exports.AuthStatus={}));const R=r.createContext({status:exports.AuthStatus.NotSure,setStatus:()=>null,user:null,setUser:()=>null,token:null,setToken:()=>null,fetchUser:()=>null,loginPath:"/login",logoutRedirectPath:"/",defaultAxiosOptions:null}),N=(t,e)=>{const[o,n]=r.useState(()=>{const u=localStorage.getItem(t);try{return u?JSON.parse(u):e}catch(a){return console.error("Invalid JSON:",a),e}});return r.useEffect(()=>{localStorage.setItem(t,o?JSON.stringify(o):"{}")},[t,o]),[o,n]};function x({children:t,fetchUserInterval:e=0,getCurrentUserPath:o="/user",loginPath:n="/login",logoutRedirectPath:u="/",defaultAxiosOptions:a={}}){const l=r.useRef(),[S,c]=N("auth_status",exports.AuthStatus.NotSure),[O,p]=N("auth_user",null),[v,b]=N("auth_token",null),[m,_]=r.useState(0);v&&(L.defaults.headers.Authorization=`Bearer ${v}`);const g=r.useCallback(()=>{l.current=L.get(o,a).then(i=>{c(exports.AuthStatus.LoggedIn),p(i.data)}).catch(i=>{console.error(i),c(exports.AuthStatus.NotLoggedIn)})},[]);if(r.useEffect(()=>{g()},[g,m]),r.useEffect(()=>{let i=0;return e>0&&(i=window.setInterval(g,Math.max(e,3e3))),()=>{clearInterval(i)}},[g,e]),S===exports.AuthStatus.NotSure&&l.current)throw l.current;return A.jsx(R.Provider,{value:{status:S,setStatus:c,user:O,setUser:p,token:v,setToken:b,fetchUser:()=>_(i=>i+1),loginPath:n,logoutRedirectPath:u,defaultAxiosOptions:a},children:t})}function d(){return r.useContext(R)}function U({to:t}){var e,o;const n=d(),u=f.useLocation();return n.status===exports.AuthStatus.LoggedIn?A.jsx(f.Navigate,{to:((o=(e=u.state)===null||e===void 0?void 0:e.from)===null||o===void 0?void 0:o.pathname)||t||"/"}):null}function I({children:t}){const e=d(),o=f.useLocation(),n=f.useNavigate();return r.useEffect(()=>{e.status===exports.AuthStatus.LoggedOut&&(n(e.logoutRedirectPath),e.setStatus(exports.AuthStatus.NotLoggedIn))},[e,n]),e.status===exports.AuthStatus.NotLoggedIn?A.jsx(f.Navigate,{to:e.loginPath,state:{from:o}}):A.jsx(A.Fragment,{children:t})}function y(t,e){const{errorHandler:o=s=>console.error(s),apiUrl:n="/login",getUserFromResponse:u=s=>s==null?void 0:s.user,getJwtTokenFromResponse:a=s=>{var h;return((h=s==null?void 0:s.token)===null||h===void 0?void 0:h.token)||(s==null?void 0:s.token)},actionAxiosOptions:l=null}=e||{},{setStatus:S,setUser:c,setToken:O,fetchUser:p,defaultAxiosOptions:v}=d(),[b,m]=r.useState(!1),[_,g]=r.useState(null);return{submit:()=>{m(!0),L.post(n,t,l||v||{}).then(s=>{S(exports.AuthStatus.LoggedIn),typeof u=="function"?c(u(s.data)):p(),typeof a=="function"&&O(a(s.data)),g(null)}).catch(s=>{var h;g(((h=s.response)===null||h===void 0?void 0:h.data)||s.message||"Unknown error"),o&&o(s)}).finally(()=>{m(!1)})},loading:b,errors:_}}function P(t){const{errorHandler:e=c=>console.error(c),apiUrl:o="/logout"}=t||{},{setStatus:n,setUser:u}=d(),[a,l]=r.useState(!1);return{submit:()=>{l(!0),L.post(o).then(()=>{n(exports.AuthStatus.LoggedOut),u(null)}).catch(e).finally(()=>{l(!1)})},loading:a}}var j=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,n=Object.getOwnPropertySymbols(t);u<n.length;u++)e.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(t,n[u])&&(o[n[u]]=t[n[u]]);return o};function k(t,e){const o=e||{},{apiUrl:n="/register"}=o,u=j(o,["apiUrl"]);return y(t,Object.assign({apiUrl:n},u))}function q(){const t=d(),e=f.useLocation(),o=f.useNavigate();return r.useCallback(()=>t.status===exports.AuthStatus.NotLoggedIn?(o(t.loginPath,{state:{from:e}}),!1):!0,[t,e,o])}exports.AuthProvider=x;exports.RedirectAfterAuth=U;exports.RequireAuth=I;exports.useAuth=d;exports.useLogin=y;exports.useLogout=P;exports.useRegister=k;exports.useRequireAuth=q;
