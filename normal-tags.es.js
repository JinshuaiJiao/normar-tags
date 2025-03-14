import { defineComponent as we, h as W, resolveComponent as z, createElementBlock as le, openBlock as V, createVNode as fe, createElementVNode as Se, normalizeStyle as ke, normalizeClass as K, createTextVNode as _e, createBlock as Ce, createCommentVNode as Te, toDisplayString as Pe, withCtx as je } from "vue";
const ue = /^[a-z0-9]+(-[a-z0-9]+)*$/, A = (e, o, t, i = "") => {
  const n = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (n.length < 2 || n.length > 3)
      return null;
    i = n.shift().slice(1);
  }
  if (n.length > 3 || !n.length)
    return null;
  if (n.length > 1) {
    const c = n.pop(), l = n.pop(), f = {
      // Allow provider without '@': "provider:prefix:name"
      provider: n.length > 0 ? n[0] : i,
      prefix: l,
      name: c
    };
    return o && !E(f) ? null : f;
  }
  const s = n[0], r = s.split("-");
  if (r.length > 1) {
    const c = {
      provider: i,
      prefix: r.shift(),
      name: r.join("-")
    };
    return o && !E(c) ? null : c;
  }
  if (t && i === "") {
    const c = {
      provider: i,
      prefix: "",
      name: s
    };
    return o && !E(c, t) ? null : c;
  }
  return null;
}, E = (e, o) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((o && e.prefix === "" || e.prefix) && e.name) : !1, ae = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), O = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), M = Object.freeze({
  ...ae,
  ...O
}), $ = Object.freeze({
  ...M,
  body: "",
  hidden: !1
});
function Ee(e, o) {
  const t = {};
  !e.hFlip != !o.hFlip && (t.hFlip = !0), !e.vFlip != !o.vFlip && (t.vFlip = !0);
  const i = ((e.rotate || 0) + (o.rotate || 0)) % 4;
  return i && (t.rotate = i), t;
}
function J(e, o) {
  const t = Ee(e, o);
  for (const i in $)
    i in O ? i in e && !(i in t) && (t[i] = O[i]) : i in o ? t[i] = o[i] : i in e && (t[i] = e[i]);
  return t;
}
function Le(e, o) {
  const t = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  function s(r) {
    if (t[r])
      return n[r] = [];
    if (!(r in n)) {
      n[r] = null;
      const c = i[r] && i[r].parent, l = c && s(c);
      l && (n[r] = [c].concat(l));
    }
    return n[r];
  }
  return Object.keys(t).concat(Object.keys(i)).forEach(s), n;
}
function Fe(e, o, t) {
  const i = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function r(c) {
    s = J(
      i[c] || n[c],
      s
    );
  }
  return r(o), t.forEach(r), J(e, s);
}
function de(e, o) {
  const t = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return t;
  e.not_found instanceof Array && e.not_found.forEach((n) => {
    o(n, null), t.push(n);
  });
  const i = Le(e);
  for (const n in i) {
    const s = i[n];
    s && (o(n, Fe(e, n, s)), t.push(n));
  }
  return t;
}
const Oe = {
  provider: "",
  aliases: {},
  not_found: {},
  ...ae
};
function D(e, o) {
  for (const t in o)
    if (t in e && typeof e[t] != typeof o[t])
      return !1;
  return !0;
}
function pe(e) {
  if (typeof e != "object" || e === null)
    return null;
  const o = e;
  if (typeof o.prefix != "string" || !e.icons || typeof e.icons != "object" || !D(e, Oe))
    return null;
  const t = o.icons;
  for (const n in t) {
    const s = t[n];
    if (
      // Name cannot be empty
      !n || // Must have body
      typeof s.body != "string" || // Check other props
      !D(
        s,
        $
      )
    )
      return null;
  }
  const i = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const n in i) {
    const s = i[n], r = s.parent;
    if (
      // Name cannot be empty
      !n || // Parent must be set and point to existing icon
      typeof r != "string" || !t[r] && !i[r] || // Check other props
      !D(
        s,
        $
      )
    )
      return null;
  }
  return o;
}
const X = /* @__PURE__ */ Object.create(null);
function Ae(e, o) {
  return {
    provider: e,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function k(e, o) {
  const t = X[e] || (X[e] = /* @__PURE__ */ Object.create(null));
  return t[o] || (t[o] = Ae(e, o));
}
function he(e, o) {
  return pe(o) ? de(o, (t, i) => {
    i ? e.icons[t] = i : e.missing.add(t);
  }) : [];
}
function Me(e, o, t) {
  try {
    if (typeof t.body == "string")
      return e.icons[o] = { ...t }, !0;
  } catch {
  }
  return !1;
}
let P = !1;
function ge(e) {
  return typeof e == "boolean" && (P = e), P;
}
function Ne(e) {
  const o = typeof e == "string" ? A(e, !0, P) : e;
  if (o) {
    const t = k(o.provider, o.prefix), i = o.name;
    return t.icons[i] || (t.missing.has(i) ? null : void 0);
  }
}
function De(e, o) {
  const t = A(e, !0, P);
  if (!t)
    return !1;
  const i = k(t.provider, t.prefix);
  return o ? Me(i, t.name, o) : (i.missing.add(t.name), !0);
}
function Re(e, o) {
  if (typeof e != "object")
    return !1;
  if (typeof o != "string" && (o = e.provider || ""), P && !o && !e.prefix) {
    let n = !1;
    return pe(e) && (e.prefix = "", de(e, (s, r) => {
      De(s, r) && (n = !0);
    })), n;
  }
  const t = e.prefix;
  if (!E({
    prefix: t,
    name: "a"
  }))
    return !1;
  const i = k(o, t);
  return !!he(i, e);
}
const me = Object.freeze({
  width: null,
  height: null
}), ye = Object.freeze({
  // Dimensions
  ...me,
  // Transformations
  ...O
}), ze = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Ve = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Y(e, o, t) {
  if (o === 1)
    return e;
  if (t = t || 100, typeof e == "number")
    return Math.ceil(e * o * t) / t;
  if (typeof e != "string")
    return e;
  const i = e.split(ze);
  if (i === null || !i.length)
    return e;
  const n = [];
  let s = i.shift(), r = Ve.test(s);
  for (; ; ) {
    if (r) {
      const c = parseFloat(s);
      isNaN(c) ? n.push(s) : n.push(Math.ceil(c * o * t) / t);
    } else
      n.push(s);
    if (s = i.shift(), s === void 0)
      return n.join("");
    r = !r;
  }
}
function $e(e, o = "defs") {
  let t = "";
  const i = e.indexOf("<" + o);
  for (; i >= 0; ) {
    const n = e.indexOf(">", i), s = e.indexOf("</" + o);
    if (n === -1 || s === -1)
      break;
    const r = e.indexOf(">", s);
    if (r === -1)
      break;
    t += e.slice(n + 1, s).trim(), e = e.slice(0, i).trim() + e.slice(r + 1);
  }
  return {
    defs: t,
    content: e
  };
}
function Qe(e, o) {
  return e ? "<defs>" + e + "</defs>" + o : o;
}
function qe(e, o, t) {
  const i = $e(e);
  return Qe(i.defs, o + i.content + t);
}
const Ue = (e) => e === "unset" || e === "undefined" || e === "none";
function Be(e, o) {
  const t = {
    ...M,
    ...e
  }, i = {
    ...ye,
    ...o
  }, n = {
    left: t.left,
    top: t.top,
    width: t.width,
    height: t.height
  };
  let s = t.body;
  [t, i].forEach((g) => {
    const u = [], S = g.hFlip, v = g.vFlip;
    let x = g.rotate;
    S ? v ? x += 2 : (u.push(
      "translate(" + (n.width + n.left).toString() + " " + (0 - n.top).toString() + ")"
    ), u.push("scale(-1 1)"), n.top = n.left = 0) : v && (u.push(
      "translate(" + (0 - n.left).toString() + " " + (n.height + n.top).toString() + ")"
    ), u.push("scale(1 -1)"), n.top = n.left = 0);
    let y;
    switch (x < 0 && (x -= Math.floor(x / 4) * 4), x = x % 4, x) {
      case 1:
        y = n.height / 2 + n.top, u.unshift(
          "rotate(90 " + y.toString() + " " + y.toString() + ")"
        );
        break;
      case 2:
        u.unshift(
          "rotate(180 " + (n.width / 2 + n.left).toString() + " " + (n.height / 2 + n.top).toString() + ")"
        );
        break;
      case 3:
        y = n.width / 2 + n.left, u.unshift(
          "rotate(-90 " + y.toString() + " " + y.toString() + ")"
        );
        break;
    }
    x % 2 === 1 && (n.left !== n.top && (y = n.left, n.left = n.top, n.top = y), n.width !== n.height && (y = n.width, n.width = n.height, n.height = y)), u.length && (s = qe(
      s,
      '<g transform="' + u.join(" ") + '">',
      "</g>"
    ));
  });
  const r = i.width, c = i.height, l = n.width, f = n.height;
  let a, d;
  r === null ? (d = c === null ? "1em" : c === "auto" ? f : c, a = Y(d, l / f)) : (a = r === "auto" ? l : r, d = c === null ? Y(a, f / l) : c === "auto" ? f : c);
  const h = {}, m = (g, u) => {
    Ue(u) || (h[g] = u.toString());
  };
  m("width", a), m("height", d);
  const I = [n.left, n.top, l, f];
  return h.viewBox = I.join(" "), {
    attributes: h,
    viewBox: I,
    body: s
  };
}
const He = /\sid="(\S+)"/g, Ge = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let We = 0;
function Ke(e, o = Ge) {
  const t = [];
  let i;
  for (; i = He.exec(e); )
    t.push(i[1]);
  if (!t.length)
    return e;
  const n = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((s) => {
    const r = typeof o == "function" ? o(s) : o + (We++).toString(), c = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + r + n + "$3"
    );
  }), e = e.replace(new RegExp(n, "g"), ""), e;
}
const Q = /* @__PURE__ */ Object.create(null);
function Je(e, o) {
  Q[e] = o;
}
function q(e) {
  return Q[e] || Q[""];
}
function B(e) {
  let o;
  if (typeof e.resources == "string")
    o = [e.resources];
  else if (o = e.resources, !(o instanceof Array) || !o.length)
    return null;
  return {
    // API hosts
    resources: o,
    // Root path
    path: e.path || "/",
    // URL length limit
    maxURL: e.maxURL || 500,
    // Timeout before next host is used.
    rotate: e.rotate || 750,
    // Timeout before failing query.
    timeout: e.timeout || 5e3,
    // Randomise default API end point.
    random: e.random === !0,
    // Start index
    index: e.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: e.dataAfterTimeout !== !1
  };
}
const H = /* @__PURE__ */ Object.create(null), C = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], L = [];
for (; C.length > 0; )
  C.length === 1 || Math.random() > 0.5 ? L.push(C.shift()) : L.push(C.pop());
H[""] = B({
  resources: ["https://api.iconify.design"].concat(L)
});
function Xe(e, o) {
  const t = B(o);
  return t === null ? !1 : (H[e] = t, !0);
}
function G(e) {
  return H[e];
}
const Ye = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Z = Ye();
function Ze(e, o) {
  const t = G(e);
  if (!t)
    return 0;
  let i;
  if (!t.maxURL)
    i = 0;
  else {
    let n = 0;
    t.resources.forEach((r) => {
      n = Math.max(n, r.length);
    });
    const s = o + ".json?icons=";
    i = t.maxURL - n - t.path.length - s.length;
  }
  return i;
}
function et(e) {
  return e === 404;
}
const tt = (e, o, t) => {
  const i = [], n = Ze(e, o), s = "icons";
  let r = {
    type: s,
    provider: e,
    prefix: o,
    icons: []
  }, c = 0;
  return t.forEach((l, f) => {
    c += l.length + 1, c >= n && f > 0 && (i.push(r), r = {
      type: s,
      provider: e,
      prefix: o,
      icons: []
    }, c = l.length), r.icons.push(l);
  }), i.push(r), i;
};
function nt(e) {
  if (typeof e == "string") {
    const o = G(e);
    if (o)
      return o.path;
  }
  return "/";
}
const ot = (e, o, t) => {
  if (!Z) {
    t("abort", 424);
    return;
  }
  let i = nt(o.provider);
  switch (o.type) {
    case "icons": {
      const s = o.prefix, c = o.icons.join(","), l = new URLSearchParams({
        icons: c
      });
      i += s + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const s = o.uri;
      i += s.slice(0, 1) === "/" ? s.slice(1) : s;
      break;
    }
    default:
      t("abort", 400);
      return;
  }
  let n = 503;
  Z(e + i).then((s) => {
    const r = s.status;
    if (r !== 200) {
      setTimeout(() => {
        t(et(r) ? "abort" : "next", r);
      });
      return;
    }
    return n = 501, s.json();
  }).then((s) => {
    if (typeof s != "object" || s === null) {
      setTimeout(() => {
        s === 404 ? t("abort", s) : t("next", n);
      });
      return;
    }
    setTimeout(() => {
      t("success", s);
    });
  }).catch(() => {
    t("next", n);
  });
}, it = {
  prepare: tt,
  send: ot
};
function st(e) {
  const o = {
    loaded: [],
    missing: [],
    pending: []
  }, t = /* @__PURE__ */ Object.create(null);
  e.sort((n, s) => n.provider !== s.provider ? n.provider.localeCompare(s.provider) : n.prefix !== s.prefix ? n.prefix.localeCompare(s.prefix) : n.name.localeCompare(s.name));
  let i = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((n) => {
    if (i.name === n.name && i.prefix === n.prefix && i.provider === n.provider)
      return;
    i = n;
    const s = n.provider, r = n.prefix, c = n.name, l = t[s] || (t[s] = /* @__PURE__ */ Object.create(null)), f = l[r] || (l[r] = k(s, r));
    let a;
    c in f.icons ? a = o.loaded : r === "" || f.missing.has(c) ? a = o.missing : a = o.pending;
    const d = {
      provider: s,
      prefix: r,
      name: c
    };
    a.push(d);
  }), o;
}
function be(e, o) {
  e.forEach((t) => {
    const i = t.loaderCallbacks;
    i && (t.loaderCallbacks = i.filter((n) => n.id !== o));
  });
}
function rt(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const o = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!o.length)
      return;
    let t = !1;
    const i = e.provider, n = e.prefix;
    o.forEach((s) => {
      const r = s.icons, c = r.pending.length;
      r.pending = r.pending.filter((l) => {
        if (l.prefix !== n)
          return !0;
        const f = l.name;
        if (e.icons[f])
          r.loaded.push({
            provider: i,
            prefix: n,
            name: f
          });
        else if (e.missing.has(f))
          r.missing.push({
            provider: i,
            prefix: n,
            name: f
          });
        else
          return t = !0, !0;
        return !1;
      }), r.pending.length !== c && (t || be([e], s.id), s.callback(
        r.loaded.slice(0),
        r.missing.slice(0),
        r.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let ct = 0;
function lt(e, o, t) {
  const i = ct++, n = be.bind(null, t, i);
  if (!o.pending.length)
    return n;
  const s = {
    id: i,
    icons: o,
    callback: e,
    abort: n
  };
  return t.forEach((r) => {
    (r.loaderCallbacks || (r.loaderCallbacks = [])).push(s);
  }), n;
}
function ft(e, o = !0, t = !1) {
  const i = [];
  return e.forEach((n) => {
    const s = typeof n == "string" ? A(n, o, t) : n;
    s && i.push(s);
  }), i;
}
var ut = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function at(e, o, t, i) {
  const n = e.resources.length, s = e.random ? Math.floor(Math.random() * n) : e.index;
  let r;
  if (e.random) {
    let p = e.resources.slice(0);
    for (r = []; p.length > 1; ) {
      const b = Math.floor(Math.random() * p.length);
      r.push(p[b]), p = p.slice(0, b).concat(p.slice(b + 1));
    }
    r = r.concat(p);
  } else
    r = e.resources.slice(s).concat(e.resources.slice(0, s));
  const c = Date.now();
  let l = "pending", f = 0, a, d = null, h = [], m = [];
  typeof i == "function" && m.push(i);
  function I() {
    d && (clearTimeout(d), d = null);
  }
  function g() {
    l === "pending" && (l = "aborted"), I(), h.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }), h = [];
  }
  function u(p, b) {
    b && (m = []), typeof p == "function" && m.push(p);
  }
  function S() {
    return {
      startTime: c,
      payload: o,
      status: l,
      queriesSent: f,
      queriesPending: h.length,
      subscribe: u,
      abort: g
    };
  }
  function v() {
    l = "failed", m.forEach((p) => {
      p(void 0, a);
    });
  }
  function x() {
    h.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }), h = [];
  }
  function y(p, b, _) {
    const j = b !== "success";
    switch (h = h.filter((w) => w !== p), l) {
      case "pending":
        break;
      case "failed":
        if (j || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (b === "abort") {
      a = _, v();
      return;
    }
    if (j) {
      a = _, h.length || (r.length ? N() : v());
      return;
    }
    if (I(), x(), !e.random) {
      const w = e.resources.indexOf(p.resource);
      w !== -1 && w !== e.index && (e.index = w);
    }
    l = "completed", m.forEach((w) => {
      w(_);
    });
  }
  function N() {
    if (l !== "pending")
      return;
    I();
    const p = r.shift();
    if (p === void 0) {
      if (h.length) {
        d = setTimeout(() => {
          I(), l === "pending" && (x(), v());
        }, e.timeout);
        return;
      }
      v();
      return;
    }
    const b = {
      status: "pending",
      resource: p,
      callback: (_, j) => {
        y(b, _, j);
      }
    };
    h.push(b), f++, d = setTimeout(N, e.rotate), t(p, o, b.callback);
  }
  return setTimeout(N), S;
}
function xe(e) {
  const o = {
    ...ut,
    ...e
  };
  let t = [];
  function i() {
    t = t.filter((c) => c().status === "pending");
  }
  function n(c, l, f) {
    const a = at(
      o,
      c,
      l,
      (d, h) => {
        i(), f && f(d, h);
      }
    );
    return t.push(a), a;
  }
  function s(c) {
    return t.find((l) => c(l)) || null;
  }
  return {
    query: n,
    find: s,
    setIndex: (c) => {
      o.index = c;
    },
    getIndex: () => o.index,
    cleanup: i
  };
}
function ee() {
}
const R = /* @__PURE__ */ Object.create(null);
function dt(e) {
  if (!R[e]) {
    const o = G(e);
    if (!o)
      return;
    const t = xe(o), i = {
      config: o,
      redundancy: t
    };
    R[e] = i;
  }
  return R[e];
}
function pt(e, o, t) {
  let i, n;
  if (typeof e == "string") {
    const s = q(e);
    if (!s)
      return t(void 0, 424), ee;
    n = s.send;
    const r = dt(e);
    r && (i = r.redundancy);
  } else {
    const s = B(e);
    if (s) {
      i = xe(s);
      const r = e.resources ? e.resources[0] : "", c = q(r);
      c && (n = c.send);
    }
  }
  return !i || !n ? (t(void 0, 424), ee) : i.query(o, n, t)().abort;
}
function te() {
}
function ht(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, rt(e);
  }));
}
function gt(e) {
  const o = [], t = [];
  return e.forEach((i) => {
    (i.match(ue) ? o : t).push(i);
  }), {
    valid: o,
    invalid: t
  };
}
function T(e, o, t) {
  function i() {
    const n = e.pendingIcons;
    o.forEach((s) => {
      n && n.delete(s), e.icons[s] || e.missing.add(s);
    });
  }
  if (t && typeof t == "object")
    try {
      if (!he(e, t).length) {
        i();
        return;
      }
    } catch (n) {
      console.error(n);
    }
  i(), ht(e);
}
function ne(e, o) {
  e instanceof Promise ? e.then((t) => {
    o(t);
  }).catch(() => {
    o(null);
  }) : o(e);
}
function mt(e, o) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(o).sort() : e.iconsToLoad = o, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: t, prefix: i } = e, n = e.iconsToLoad;
    if (delete e.iconsToLoad, !n || !n.length)
      return;
    const s = e.loadIcon;
    if (e.loadIcons && (n.length > 1 || !s)) {
      ne(
        e.loadIcons(n, i, t),
        (a) => {
          T(e, n, a);
        }
      );
      return;
    }
    if (s) {
      n.forEach((a) => {
        const d = s(a, i, t);
        ne(d, (h) => {
          const m = h ? {
            prefix: i,
            icons: {
              [a]: h
            }
          } : null;
          T(e, [a], m);
        });
      });
      return;
    }
    const { valid: r, invalid: c } = gt(n);
    if (c.length && T(e, c, null), !r.length)
      return;
    const l = i.match(ue) ? q(t) : null;
    if (!l) {
      T(e, r, null);
      return;
    }
    l.prepare(t, i, r).forEach((a) => {
      pt(t, a, (d) => {
        T(e, a.icons, d);
      });
    });
  }));
}
const yt = (e, o) => {
  const t = ft(e, !0, ge()), i = st(t);
  if (!i.pending.length) {
    let l = !0;
    return o && setTimeout(() => {
      l && o(
        i.loaded,
        i.missing,
        i.pending,
        te
      );
    }), () => {
      l = !1;
    };
  }
  const n = /* @__PURE__ */ Object.create(null), s = [];
  let r, c;
  return i.pending.forEach((l) => {
    const { provider: f, prefix: a } = l;
    if (a === c && f === r)
      return;
    r = f, c = a, s.push(k(f, a));
    const d = n[f] || (n[f] = /* @__PURE__ */ Object.create(null));
    d[a] || (d[a] = []);
  }), i.pending.forEach((l) => {
    const { provider: f, prefix: a, name: d } = l, h = k(f, a), m = h.pendingIcons || (h.pendingIcons = /* @__PURE__ */ new Set());
    m.has(d) || (m.add(d), n[f][a].push(d));
  }), s.forEach((l) => {
    const f = n[l.provider][l.prefix];
    f.length && mt(l, f);
  }), o ? lt(o, i, s) : te;
};
function bt(e, o) {
  const t = {
    ...e
  };
  for (const i in o) {
    const n = o[i], s = typeof n;
    i in me ? (n === null || n && (s === "string" || s === "number")) && (t[i] = n) : s === typeof t[i] && (t[i] = i === "rotate" ? n % 4 : n);
  }
  return t;
}
const xt = /[\s,]+/;
function It(e, o) {
  o.split(xt).forEach((t) => {
    switch (t.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function vt(e, o = 0) {
  const t = e.replace(/^-?[0-9.]*/, "");
  function i(n) {
    for (; n < 0; )
      n += 4;
    return n % 4;
  }
  if (t === "") {
    const n = parseInt(e);
    return isNaN(n) ? 0 : i(n);
  } else if (t !== e) {
    let n = 0;
    switch (t) {
      case "%":
        n = 25;
        break;
      case "deg":
        n = 90;
    }
    if (n) {
      let s = parseFloat(e.slice(0, e.length - t.length));
      return isNaN(s) ? 0 : (s = s / n, s % 1 === 0 ? i(s) : 0);
    }
  }
  return o;
}
function wt(e, o) {
  let t = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in o)
    t += " " + i + '="' + o[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + e + "</svg>";
}
function St(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function kt(e) {
  return "data:image/svg+xml," + St(e);
}
function _t(e) {
  return 'url("' + kt(e) + '")';
}
const oe = {
  ...ye,
  inline: !1
}, Ct = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Tt = {
  display: "inline-block"
}, U = {
  backgroundColor: "currentColor"
}, Ie = {
  backgroundColor: "transparent"
}, ie = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, se = {
  webkitMask: U,
  mask: U,
  background: Ie
};
for (const e in se) {
  const o = se[e];
  for (const t in ie)
    o[e + t] = ie[t];
}
const F = {};
["horizontal", "vertical"].forEach((e) => {
  const o = e.slice(0, 1) + "Flip";
  F[e + "-flip"] = o, F[e.slice(0, 1) + "-flip"] = o, F[e + "Flip"] = o;
});
function re(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const ce = (e, o) => {
  const t = bt(oe, o), i = { ...Ct }, n = o.mode || "svg", s = {}, r = o.style, c = typeof r == "object" && !(r instanceof Array) ? r : {};
  for (let g in o) {
    const u = o[g];
    if (u !== void 0)
      switch (g) {
        // Properties to ignore
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
        case "ssr":
          break;
        // Boolean attributes
        case "inline":
        case "hFlip":
        case "vFlip":
          t[g] = u === !0 || u === "true" || u === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof u == "string" && It(t, u);
          break;
        // Color: override style
        case "color":
          s.color = u;
          break;
        // Rotation as string
        case "rotate":
          typeof u == "string" ? t[g] = vt(u) : typeof u == "number" && (t[g] = u);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          u !== !0 && u !== "true" && delete i["aria-hidden"];
          break;
        default: {
          const S = F[g];
          S ? (u === !0 || u === "true" || u === 1) && (t[S] = !0) : oe[g] === void 0 && (i[g] = u);
        }
      }
  }
  const l = Be(e, t), f = l.attributes;
  if (t.inline && (s.verticalAlign = "-0.125em"), n === "svg") {
    i.style = {
      ...s,
      ...c
    }, Object.assign(i, f);
    let g = 0, u = o.id;
    return typeof u == "string" && (u = u.replace(/-/g, "_")), i.innerHTML = Ke(l.body, u ? () => u + "ID" + g++ : "iconifyVue"), W("svg", i);
  }
  const { body: a, width: d, height: h } = e, m = n === "mask" || (n === "bg" ? !1 : a.indexOf("currentColor") !== -1), I = wt(a, {
    ...f,
    width: d + "",
    height: h + ""
  });
  return i.style = {
    ...s,
    "--svg": _t(I),
    width: re(f.width),
    height: re(f.height),
    ...Tt,
    ...m ? U : Ie,
    ...c
  }, W("span", i);
};
ge(!0);
Je("", it);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const o = e.IconifyPreload, t = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((i) => {
      try {
        // Check if item is an object and not null/array
        (typeof i != "object" || i === null || i instanceof Array || // Check for 'icons' and 'prefix'
        typeof i.icons != "object" || typeof i.prefix != "string" || // Add icon set
        !Re(i)) && console.error(t);
      } catch {
        console.error(t);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const o = e.IconifyProviders;
    if (typeof o == "object" && o !== null)
      for (let t in o) {
        const i = "IconifyProviders[" + t + "] is invalid.";
        try {
          const n = o[t];
          if (typeof n != "object" || !n || n.resources === void 0)
            continue;
          Xe(t, n) || console.error(i);
        } catch {
          console.error(i);
        }
      }
  }
}
const Pt = {
  ...M,
  body: ""
}, jt = we({
  // Do not inherit other attributes: it is handled by render()
  inheritAttrs: !1,
  // Set initial data
  data() {
    return {
      // Current icon name
      _name: "",
      // Loading
      _loadingIcon: null,
      // Mounted status
      iconMounted: !1,
      // Callback counter to trigger re-render
      counter: 0
    };
  },
  mounted() {
    this.iconMounted = !0;
  },
  unmounted() {
    this.abortLoading();
  },
  methods: {
    abortLoading() {
      this._loadingIcon && (this._loadingIcon.abort(), this._loadingIcon = null);
    },
    // Get data for icon to render or null
    getIcon(e, o, t) {
      if (typeof e == "object" && e !== null && typeof e.body == "string")
        return this._name = "", this.abortLoading(), {
          data: e
        };
      let i;
      if (typeof e != "string" || (i = A(e, !1, !0)) === null)
        return this.abortLoading(), null;
      let n = Ne(i);
      if (!n)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", n !== null && (this._loadingIcon = {
          name: e,
          abort: yt([i], () => {
            this.counter++;
          })
        })), null;
      if (this.abortLoading(), this._name !== e && (this._name = e, o && o(e)), t) {
        n = Object.assign({}, n);
        const r = t(n.body, i.name, i.prefix, i.provider);
        typeof r == "string" && (n.body = r);
      }
      const s = ["iconify"];
      return i.prefix !== "" && s.push("iconify--" + i.prefix), i.provider !== "" && s.push("iconify--" + i.provider), { data: n, classes: s };
    }
  },
  // Render icon
  render() {
    this.counter;
    const e = this.$attrs, o = this.iconMounted || e.ssr ? this.getIcon(e.icon, e.onLoad, e.customise) : null;
    if (!o)
      return ce(Pt, e);
    let t = e;
    return o.classes && (t = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + o.classes.join(" ")
    }), ce({
      ...M,
      ...o.data
    }, t);
  }
}), ve = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [i, n] of o)
    t[i] = n;
  return t;
}, Et = {
  components: {
    IconifyIcon: jt
  },
  props: {
    icon: {
      type: String,
      default: ""
    }
  }
}, Lt = { class: "svg-icon" };
function Ft(e, o, t, i, n, s) {
  const r = z("IconifyIcon");
  return V(), le("div", Lt, [
    fe(r, { icon: t.icon }, null, 8, ["icon"])
  ]);
}
const Ot = /* @__PURE__ */ ve(Et, [["render", Ft], ["__scopeId", "data-v-39e09656"]]), At = {
  components: { SvgIcon: Ot },
  props: {
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    content: {
      type: String,
      default: ""
    },
    minWidth: {
      type: Number,
      default: 56
    },
    placement: {
      type: String,
      default: "top"
    },
    effect: {
      type: String,
      default: "light"
    }
  }
}, Mt = { class: "normal-tags" };
function Nt(e, o, t, i, n, s) {
  const r = z("svg-icon"), c = z("el-tooltip");
  return V(), le("div", Mt, [
    Se("div", {
      class: K(["label", t.type]),
      style: ke({ minWidth: t.minWidth + "px" })
    }, [
      _e(Pe(t.label) + " ", 1),
      t.content ? (V(), Ce(c, {
        key: 0,
        content: t.content,
        effect: t.effect,
        placement: t.placement
      }, {
        default: je(() => [
          fe(r, {
            class: K(t.type),
            icon: "material-symbols:error-outline-rounded"
          }, null, 8, ["class"])
        ]),
        _: 1
      }, 8, ["content", "effect", "placement"])) : Te("", !0)
    ], 6)
  ]);
}
const Dt = /* @__PURE__ */ ve(At, [["render", Nt], ["__scopeId", "data-v-63dfa8a2"]]), Rt = [Dt];
function Vt(e) {
  Rt.forEach((o) => {
    e.component("normal-tags", o);
  });
}
export {
  Vt as default
};
