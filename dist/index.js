"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const O=require("react/jsx-runtime"),I=require("axios"),r=require("react"),S=require("react-router-dom"),U=t=>t&&t.__esModule?t:{default:t},L=U(I);exports.AuthStatus=void 0;(function(t){t.NotSure="not_sure",t.LoggedIn="logged_in",t.NotLoggedIn="not_logged_in",t.LoggedOut="logged_out"})(exports.AuthStatus||(exports.AuthStatus={}));const N=r.createContext({status:exports.AuthStatus.NotSure,setStatus:()=>null,user:null,setUser:()=>null,token:null,setToken:()=>null,fetchUser:()=>null,loginPath:"/login",logoutRedirectPath:"/",defaultAxiosOptions:void 0,logMsg:()=>null}),y=(t,e,u)=>{const[n,s]=r.useState(()=>{const a=localStorage.getItem(t);try{return a?JSON.parse(a):e}catch(l){return u(`Invalid JSON parsed for parsing value from localstorage, will return default value (${e}): `,l),e}});return r.useEffect(()=>{try{localStorage.setItem(t,n?JSON.stringify(n):JSON.stringify(e)||"{}")}catch(a){u(`Failed to save ${n} or default (${e}) in local storage: `,a)}},[t,n]),[n,s]};function k({children:t,fetchUserInterval:e=0,getCurrentUserPath:u="/user",loginPath:n="/login",logoutRedirectPath:s="/",defaultAxiosOptions:a={},logLevel:l=null}){const i=r.useCallback((o,...c)=>{l&&console[l](`[react-auth-context]: ${o}`,...c)},[l]),d=r.useRef(),[g,f]=y("auth_status",exports.AuthStatus.NotSure,i),[h,v]=y("auth_user",null,i),[p,_]=y("auth_token",null,i),[x,b]=r.useState(0);p&&(L.default.defaults.headers.Authorization=`Bearer ${p}`);const m=r.useCallback(()=>{d.current=L.default.get(u,a).then(o=>{f(exports.AuthStatus.LoggedIn),v(o.data)}).catch(o=>{i(o),f(exports.AuthStatus.NotLoggedIn)})},[a,u,f,v]);if(r.useEffect(()=>{m()},[m,x]),r.useEffect(()=>{let o=0;return e>0&&(o=window.setInterval(m,Math.max(e,3e3))),()=>{clearInterval(o)}},[m,e]),g===exports.AuthStatus.NotSure&&d.current)throw d.current;return O.jsx(N.Provider,{value:{status:g,setStatus:f,user:h,setUser:v,token:p,setToken:_,fetchUser:()=>b(o=>o+1),loginPath:n,logoutRedirectPath:s,defaultAxiosOptions:a,logMsg:i},children:t})}function A(){return r.useContext(N)}function j({to:t}){var e,u;const n=A(),s=S.useLocation();return n.status===exports.AuthStatus.LoggedIn?O.jsx(S.Navigate,{to:((u=(e=s.state)===null||e===void 0?void 0:e.from)===null||u===void 0?void 0:u.pathname)||t||"/"}):null}function P({children:t}){const e=A(),u=S.useLocation(),n=S.useNavigate();return r.useEffect(()=>{e.status===exports.AuthStatus.LoggedOut&&(n(e.logoutRedirectPath),e.setStatus(exports.AuthStatus.NotLoggedIn))},[e,n]),e.status===exports.AuthStatus.NotLoggedIn?O.jsx(S.Navigate,{to:e.loginPath,state:{from:u}}):O.jsx(O.Fragment,{children:t})}function R(t,e){const{setStatus:u,setUser:n,setToken:s,fetchUser:a,defaultAxiosOptions:l,logMsg:i}=A(),{apiUrl:d="/login",getUserFromResponse:g=o=>o==null?void 0:o.user,getJwtTokenFromResponse:f=o=>{var c;return((c=o==null?void 0:o.token)===null||c===void 0?void 0:c.token)||(o==null?void 0:o.token)},actionAxiosOptions:h=null,errorHandler:v=o=>i(o)}=e||{},[p,_]=r.useState(!1),[x,b]=r.useState(null);return{submit:()=>(_(!0),L.default.post(d,t,h||l||{}).then(o=>(u(exports.AuthStatus.LoggedIn),typeof g=="function"?n(g(o.data)):a(),typeof f=="function"&&s(f(o.data)),b(null),o)).catch(o=>{var c;b(((c=o.response)===null||c===void 0?void 0:c.data)||o.message||"Unknown error"),v&&v(o)}).finally(()=>{_(!1)})),loading:p,errors:x}}function q(t){const{setStatus:e,setUser:u,defaultAxiosOptions:n,logMsg:s}=A(),{errorHandler:a=h=>s(h),apiUrl:l="/logout",actionAxiosOptions:i=null}=t||{},[d,g]=r.useState(!1);return{submit:()=>(g(!0),L.default.post(l,null,i||n||{}).then(h=>(e(exports.AuthStatus.LoggedOut),u(null),h)).catch(a).finally(()=>{g(!1)})),loading:d}}var w=globalThis&&globalThis.__rest||function(t,e){var u={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(u[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(u[n[s]]=t[n[s]]);return u};function T(t,e){const u=e||{},{apiUrl:n="/register"}=u,s=w(u,["apiUrl"]);return R(t,Object.assign({apiUrl:n},s))}function E(){const t=A(),e=S.useLocation(),u=S.useNavigate();return r.useCallback(()=>t.status===exports.AuthStatus.NotLoggedIn?(u(t.loginPath,{state:{from:e}}),!1):!0,[t,e,u])}exports.AuthProvider=k;exports.RedirectAfterAuth=j;exports.RequireAuth=P;exports.useAuth=A;exports.useLogin=R;exports.useLogout=q;exports.useRegister=T;exports.useRequireAuth=E;
