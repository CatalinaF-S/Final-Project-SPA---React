function gc(o, s) {
    for (var a = 0; a < s.length; a++) {
        const p = s[a];
        if (typeof p != "string" && !Array.isArray(p)) {
            for (const m in p)
                if (m !== "default" && !(m in o)) {
                    const v = Object.getOwnPropertyDescriptor(p, m);
                    v &&
                        Object.defineProperty(
                            o,
                            m,
                            v.get ? v : { enumerable: !0, get: () => p[m] }
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(o, Symbol.toStringTag, { value: "Module" })
    );
}
(function () {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const m of document.querySelectorAll('link[rel="modulepreload"]'))
        p(m);
    new MutationObserver((m) => {
        for (const v of m)
            if (v.type === "childList")
                for (const _ of v.addedNodes)
                    _.tagName === "LINK" && _.rel === "modulepreload" && p(_);
    }).observe(document, { childList: !0, subtree: !0 });
    function a(m) {
        const v = {};
        return (
            m.integrity && (v.integrity = m.integrity),
            m.referrerPolicy && (v.referrerPolicy = m.referrerPolicy),
            m.crossOrigin === "use-credentials"
                ? (v.credentials = "include")
                : m.crossOrigin === "anonymous"
                ? (v.credentials = "omit")
                : (v.credentials = "same-origin"),
            v
        );
    }
    function p(m) {
        if (m.ep) return;
        m.ep = !0;
        const v = a(m);
        fetch(m.href, v);
    }
})();
function wc(o) {
    return o &&
        o.__esModule &&
        Object.prototype.hasOwnProperty.call(o, "default")
        ? o.default
        : o;
}
function Sc(o) {
    if (o.__esModule) return o;
    var s = o.default;
    if (typeof s == "function") {
        var a = function p() {
            return this instanceof p
                ? Reflect.construct(s, arguments, this.constructor)
                : s.apply(this, arguments);
        };
        a.prototype = s.prototype;
    } else a = {};
    return (
        Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.keys(o).forEach(function (p) {
            var m = Object.getOwnPropertyDescriptor(o, p);
            Object.defineProperty(
                a,
                p,
                m.get
                    ? m
                    : {
                          enumerable: !0,
                          get: function () {
                              return o[p];
                          },
                      }
            );
        }),
        a
    );
}
var xc = { exports: {} },
    Lr = {},
    kc = { exports: {} },
    G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lc;
function Bd() {
    if (lc) return G;
    lc = 1;
    var o = Symbol.for("react.element"),
        s = Symbol.for("react.portal"),
        a = Symbol.for("react.fragment"),
        p = Symbol.for("react.strict_mode"),
        m = Symbol.for("react.profiler"),
        v = Symbol.for("react.provider"),
        _ = Symbol.for("react.context"),
        x = Symbol.for("react.forward_ref"),
        S = Symbol.for("react.suspense"),
        R = Symbol.for("react.memo"),
        B = Symbol.for("react.lazy"),
        A = Symbol.iterator;
    function Q(d) {
        return d === null || typeof d != "object"
            ? null
            : ((d = (A && d[A]) || d["@@iterator"]),
              typeof d == "function" ? d : null);
    }
    var J = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        q = Object.assign,
        D = {};
    function O(d, E, $) {
        (this.props = d),
            (this.context = E),
            (this.refs = D),
            (this.updater = $ || J);
    }
    (O.prototype.isReactComponent = {}),
        (O.prototype.setState = function (d, E) {
            if (typeof d != "object" && typeof d != "function" && d != null)
                throw Error(
                    "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                );
            this.updater.enqueueSetState(this, d, E, "setState");
        }),
        (O.prototype.forceUpdate = function (d) {
            this.updater.enqueueForceUpdate(this, d, "forceUpdate");
        });
    function Z() {}
    Z.prototype = O.prototype;
    function Y(d, E, $) {
        (this.props = d),
            (this.context = E),
            (this.refs = D),
            (this.updater = $ || J);
    }
    var re = (Y.prototype = new Z());
    (re.constructor = Y), q(re, O.prototype), (re.isPureReactComponent = !0);
    var oe = Array.isArray,
        ke = Object.prototype.hasOwnProperty,
        ye = { current: null },
        ze = { key: !0, ref: !0, __self: !0, __source: !0 };
    function $e(d, E, $) {
        var b,
            X = {},
            se = null,
            ne = null;
        if (E != null)
            for (b in (E.ref !== void 0 && (ne = E.ref),
            E.key !== void 0 && (se = "" + E.key),
            E))
                ke.call(E, b) && !ze.hasOwnProperty(b) && (X[b] = E[b]);
        var ue = arguments.length - 2;
        if (ue === 1) X.children = $;
        else if (1 < ue) {
            for (var le = Array(ue), He = 0; He < ue; He++)
                le[He] = arguments[He + 2];
            X.children = le;
        }
        if (d && d.defaultProps)
            for (b in ((ue = d.defaultProps), ue))
                X[b] === void 0 && (X[b] = ue[b]);
        return {
            $$typeof: o,
            type: d,
            key: se,
            ref: ne,
            props: X,
            _owner: ye.current,
        };
    }
    function yt(d, E) {
        return {
            $$typeof: o,
            type: d.type,
            key: E,
            ref: d.ref,
            props: d.props,
            _owner: d._owner,
        };
    }
    function at(d) {
        return typeof d == "object" && d !== null && d.$$typeof === o;
    }
    function Ct(d) {
        var E = { "=": "=0", ":": "=2" };
        return (
            "$" +
            d.replace(/[=:]/g, function ($) {
                return E[$];
            })
        );
    }
    var Je = /\/+/g;
    function Oe(d, E) {
        return typeof d == "object" && d !== null && d.key != null
            ? Ct("" + d.key)
            : E.toString(36);
    }
    function Ve(d, E, $, b, X) {
        var se = typeof d;
        (se === "undefined" || se === "boolean") && (d = null);
        var ne = !1;
        if (d === null) ne = !0;
        else
            switch (se) {
                case "string":
                case "number":
                    ne = !0;
                    break;
                case "object":
                    switch (d.$$typeof) {
                        case o:
                        case s:
                            ne = !0;
                    }
            }
        if (ne)
            return (
                (ne = d),
                (X = X(ne)),
                (d = b === "" ? "." + Oe(ne, 0) : b),
                oe(X)
                    ? (($ = ""),
                      d != null && ($ = d.replace(Je, "$&/") + "/"),
                      Ve(X, E, $, "", function (He) {
                          return He;
                      }))
                    : X != null &&
                      (at(X) &&
                          (X = yt(
                              X,
                              $ +
                                  (!X.key || (ne && ne.key === X.key)
                                      ? ""
                                      : ("" + X.key).replace(Je, "$&/") + "/") +
                                  d
                          )),
                      E.push(X)),
                1
            );
        if (((ne = 0), (b = b === "" ? "." : b + ":"), oe(d)))
            for (var ue = 0; ue < d.length; ue++) {
                se = d[ue];
                var le = b + Oe(se, ue);
                ne += Ve(se, E, $, le, X);
            }
        else if (((le = Q(d)), typeof le == "function"))
            for (d = le.call(d), ue = 0; !(se = d.next()).done; )
                (se = se.value),
                    (le = b + Oe(se, ue++)),
                    (ne += Ve(se, E, $, le, X));
        else if (se === "object")
            throw (
                ((E = String(d)),
                Error(
                    "Objects are not valid as a React child (found: " +
                        (E === "[object Object]"
                            ? "object with keys {" +
                              Object.keys(d).join(", ") +
                              "}"
                            : E) +
                        "). If you meant to render a collection of children, use an array instead."
                ))
            );
        return ne;
    }
    function nt(d, E, $) {
        if (d == null) return d;
        var b = [],
            X = 0;
        return (
            Ve(d, b, "", "", function (se) {
                return E.call($, se, X++);
            }),
            b
        );
    }
    function Pe(d) {
        if (d._status === -1) {
            var E = d._result;
            (E = E()),
                E.then(
                    function ($) {
                        (d._status === 0 || d._status === -1) &&
                            ((d._status = 1), (d._result = $));
                    },
                    function ($) {
                        (d._status === 0 || d._status === -1) &&
                            ((d._status = 2), (d._result = $));
                    }
                ),
                d._status === -1 && ((d._status = 0), (d._result = E));
        }
        if (d._status === 1) return d._result.default;
        throw d._result;
    }
    var pe = { current: null },
        L = { transition: null },
        W = {
            ReactCurrentDispatcher: pe,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: ye,
        };
    return (
        (G.Children = {
            map: nt,
            forEach: function (d, E, $) {
                nt(
                    d,
                    function () {
                        E.apply(this, arguments);
                    },
                    $
                );
            },
            count: function (d) {
                var E = 0;
                return (
                    nt(d, function () {
                        E++;
                    }),
                    E
                );
            },
            toArray: function (d) {
                return (
                    nt(d, function (E) {
                        return E;
                    }) || []
                );
            },
            only: function (d) {
                if (!at(d))
                    throw Error(
                        "React.Children.only expected to receive a single React element child."
                    );
                return d;
            },
        }),
        (G.Component = O),
        (G.Fragment = a),
        (G.Profiler = m),
        (G.PureComponent = Y),
        (G.StrictMode = p),
        (G.Suspense = S),
        (G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W),
        (G.cloneElement = function (d, E, $) {
            if (d == null)
                throw Error(
                    "React.cloneElement(...): The argument must be a React element, but you passed " +
                        d +
                        "."
                );
            var b = q({}, d.props),
                X = d.key,
                se = d.ref,
                ne = d._owner;
            if (E != null) {
                if (
                    (E.ref !== void 0 && ((se = E.ref), (ne = ye.current)),
                    E.key !== void 0 && (X = "" + E.key),
                    d.type && d.type.defaultProps)
                )
                    var ue = d.type.defaultProps;
                for (le in E)
                    ke.call(E, le) &&
                        !ze.hasOwnProperty(le) &&
                        (b[le] =
                            E[le] === void 0 && ue !== void 0 ? ue[le] : E[le]);
            }
            var le = arguments.length - 2;
            if (le === 1) b.children = $;
            else if (1 < le) {
                ue = Array(le);
                for (var He = 0; He < le; He++) ue[He] = arguments[He + 2];
                b.children = ue;
            }
            return {
                $$typeof: o,
                type: d.type,
                key: X,
                ref: se,
                props: b,
                _owner: ne,
            };
        }),
        (G.createContext = function (d) {
            return (
                (d = {
                    $$typeof: _,
                    _currentValue: d,
                    _currentValue2: d,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null,
                }),
                (d.Provider = { $$typeof: v, _context: d }),
                (d.Consumer = d)
            );
        }),
        (G.createElement = $e),
        (G.createFactory = function (d) {
            var E = $e.bind(null, d);
            return (E.type = d), E;
        }),
        (G.createRef = function () {
            return { current: null };
        }),
        (G.forwardRef = function (d) {
            return { $$typeof: x, render: d };
        }),
        (G.isValidElement = at),
        (G.lazy = function (d) {
            return {
                $$typeof: B,
                _payload: { _status: -1, _result: d },
                _init: Pe,
            };
        }),
        (G.memo = function (d, E) {
            return { $$typeof: R, type: d, compare: E === void 0 ? null : E };
        }),
        (G.startTransition = function (d) {
            var E = L.transition;
            L.transition = {};
            try {
                d();
            } finally {
                L.transition = E;
            }
        }),
        (G.unstable_act = function () {
            throw Error(
                "act(...) is not supported in production builds of React."
            );
        }),
        (G.useCallback = function (d, E) {
            return pe.current.useCallback(d, E);
        }),
        (G.useContext = function (d) {
            return pe.current.useContext(d);
        }),
        (G.useDebugValue = function () {}),
        (G.useDeferredValue = function (d) {
            return pe.current.useDeferredValue(d);
        }),
        (G.useEffect = function (d, E) {
            return pe.current.useEffect(d, E);
        }),
        (G.useId = function () {
            return pe.current.useId();
        }),
        (G.useImperativeHandle = function (d, E, $) {
            return pe.current.useImperativeHandle(d, E, $);
        }),
        (G.useInsertionEffect = function (d, E) {
            return pe.current.useInsertionEffect(d, E);
        }),
        (G.useLayoutEffect = function (d, E) {
            return pe.current.useLayoutEffect(d, E);
        }),
        (G.useMemo = function (d, E) {
            return pe.current.useMemo(d, E);
        }),
        (G.useReducer = function (d, E, $) {
            return pe.current.useReducer(d, E, $);
        }),
        (G.useRef = function (d) {
            return pe.current.useRef(d);
        }),
        (G.useState = function (d) {
            return pe.current.useState(d);
        }),
        (G.useSyncExternalStore = function (d, E, $) {
            return pe.current.useSyncExternalStore(d, E, $);
        }),
        (G.useTransition = function () {
            return pe.current.useTransition();
        }),
        (G.version = "18.2.0"),
        G
    );
}
kc.exports = Bd();
var T = kc.exports;
const Zt = wc(T),
    Ad = gc({ __proto__: null, default: Zt }, [T]),
    Ec = Sc(Ad);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ic;
function $d() {
    if (ic) return Lr;
    ic = 1;
    var o = Ec,
        s = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        p = Object.prototype.hasOwnProperty,
        m =
            o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
        v = { key: !0, ref: !0, __self: !0, __source: !0 };
    function _(x, S, R) {
        var B,
            A = {},
            Q = null,
            J = null;
        R !== void 0 && (Q = "" + R),
            S.key !== void 0 && (Q = "" + S.key),
            S.ref !== void 0 && (J = S.ref);
        for (B in S) p.call(S, B) && !v.hasOwnProperty(B) && (A[B] = S[B]);
        if (x && x.defaultProps)
            for (B in ((S = x.defaultProps), S))
                A[B] === void 0 && (A[B] = S[B]);
        return {
            $$typeof: s,
            type: x,
            key: Q,
            ref: J,
            props: A,
            _owner: m.current,
        };
    }
    return (Lr.Fragment = a), (Lr.jsx = _), (Lr.jsxs = _), Lr;
}
xc.exports = $d();
var N = xc.exports,
    Zo = {},
    Cc = { exports: {} },
    Xe = {},
    Yo = { exports: {} },
    Xo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oc;
function Vd() {
    return (
        oc ||
            ((oc = 1),
            (function (o) {
                function s(L, W) {
                    var d = L.length;
                    L.push(W);
                    e: for (; 0 < d; ) {
                        var E = (d - 1) >>> 1,
                            $ = L[E];
                        if (0 < m($, W)) (L[E] = W), (L[d] = $), (d = E);
                        else break e;
                    }
                }
                function a(L) {
                    return L.length === 0 ? null : L[0];
                }
                function p(L) {
                    if (L.length === 0) return null;
                    var W = L[0],
                        d = L.pop();
                    if (d !== W) {
                        L[0] = d;
                        e: for (var E = 0, $ = L.length, b = $ >>> 1; E < b; ) {
                            var X = 2 * (E + 1) - 1,
                                se = L[X],
                                ne = X + 1,
                                ue = L[ne];
                            if (0 > m(se, d))
                                ne < $ && 0 > m(ue, se)
                                    ? ((L[E] = ue), (L[ne] = d), (E = ne))
                                    : ((L[E] = se), (L[X] = d), (E = X));
                            else if (ne < $ && 0 > m(ue, d))
                                (L[E] = ue), (L[ne] = d), (E = ne);
                            else break e;
                        }
                    }
                    return W;
                }
                function m(L, W) {
                    var d = L.sortIndex - W.sortIndex;
                    return d !== 0 ? d : L.id - W.id;
                }
                if (
                    typeof performance == "object" &&
                    typeof performance.now == "function"
                ) {
                    var v = performance;
                    o.unstable_now = function () {
                        return v.now();
                    };
                } else {
                    var _ = Date,
                        x = _.now();
                    o.unstable_now = function () {
                        return _.now() - x;
                    };
                }
                var S = [],
                    R = [],
                    B = 1,
                    A = null,
                    Q = 3,
                    J = !1,
                    q = !1,
                    D = !1,
                    O = typeof setTimeout == "function" ? setTimeout : null,
                    Z = typeof clearTimeout == "function" ? clearTimeout : null,
                    Y = typeof setImmediate < "u" ? setImmediate : null;
                typeof navigator < "u" &&
                    navigator.scheduling !== void 0 &&
                    navigator.scheduling.isInputPending !== void 0 &&
                    navigator.scheduling.isInputPending.bind(
                        navigator.scheduling
                    );
                function re(L) {
                    for (var W = a(R); W !== null; ) {
                        if (W.callback === null) p(R);
                        else if (W.startTime <= L)
                            p(R), (W.sortIndex = W.expirationTime), s(S, W);
                        else break;
                        W = a(R);
                    }
                }
                function oe(L) {
                    if (((D = !1), re(L), !q))
                        if (a(S) !== null) (q = !0), Pe(ke);
                        else {
                            var W = a(R);
                            W !== null && pe(oe, W.startTime - L);
                        }
                }
                function ke(L, W) {
                    (q = !1), D && ((D = !1), Z($e), ($e = -1)), (J = !0);
                    var d = Q;
                    try {
                        for (
                            re(W), A = a(S);
                            A !== null &&
                            (!(A.expirationTime > W) || (L && !Ct()));

                        ) {
                            var E = A.callback;
                            if (typeof E == "function") {
                                (A.callback = null), (Q = A.priorityLevel);
                                var $ = E(A.expirationTime <= W);
                                (W = o.unstable_now()),
                                    typeof $ == "function"
                                        ? (A.callback = $)
                                        : A === a(S) && p(S),
                                    re(W);
                            } else p(S);
                            A = a(S);
                        }
                        if (A !== null) var b = !0;
                        else {
                            var X = a(R);
                            X !== null && pe(oe, X.startTime - W), (b = !1);
                        }
                        return b;
                    } finally {
                        (A = null), (Q = d), (J = !1);
                    }
                }
                var ye = !1,
                    ze = null,
                    $e = -1,
                    yt = 5,
                    at = -1;
                function Ct() {
                    return !(o.unstable_now() - at < yt);
                }
                function Je() {
                    if (ze !== null) {
                        var L = o.unstable_now();
                        at = L;
                        var W = !0;
                        try {
                            W = ze(!0, L);
                        } finally {
                            W ? Oe() : ((ye = !1), (ze = null));
                        }
                    } else ye = !1;
                }
                var Oe;
                if (typeof Y == "function")
                    Oe = function () {
                        Y(Je);
                    };
                else if (typeof MessageChannel < "u") {
                    var Ve = new MessageChannel(),
                        nt = Ve.port2;
                    (Ve.port1.onmessage = Je),
                        (Oe = function () {
                            nt.postMessage(null);
                        });
                } else
                    Oe = function () {
                        O(Je, 0);
                    };
                function Pe(L) {
                    (ze = L), ye || ((ye = !0), Oe());
                }
                function pe(L, W) {
                    $e = O(function () {
                        L(o.unstable_now());
                    }, W);
                }
                (o.unstable_IdlePriority = 5),
                    (o.unstable_ImmediatePriority = 1),
                    (o.unstable_LowPriority = 4),
                    (o.unstable_NormalPriority = 3),
                    (o.unstable_Profiling = null),
                    (o.unstable_UserBlockingPriority = 2),
                    (o.unstable_cancelCallback = function (L) {
                        L.callback = null;
                    }),
                    (o.unstable_continueExecution = function () {
                        q || J || ((q = !0), Pe(ke));
                    }),
                    (o.unstable_forceFrameRate = function (L) {
                        0 > L || 125 < L
                            ? console.error(
                                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                              )
                            : (yt = 0 < L ? Math.floor(1e3 / L) : 5);
                    }),
                    (o.unstable_getCurrentPriorityLevel = function () {
                        return Q;
                    }),
                    (o.unstable_getFirstCallbackNode = function () {
                        return a(S);
                    }),
                    (o.unstable_next = function (L) {
                        switch (Q) {
                            case 1:
                            case 2:
                            case 3:
                                var W = 3;
                                break;
                            default:
                                W = Q;
                        }
                        var d = Q;
                        Q = W;
                        try {
                            return L();
                        } finally {
                            Q = d;
                        }
                    }),
                    (o.unstable_pauseExecution = function () {}),
                    (o.unstable_requestPaint = function () {}),
                    (o.unstable_runWithPriority = function (L, W) {
                        switch (L) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                L = 3;
                        }
                        var d = Q;
                        Q = L;
                        try {
                            return W();
                        } finally {
                            Q = d;
                        }
                    }),
                    (o.unstable_scheduleCallback = function (L, W, d) {
                        var E = o.unstable_now();
                        switch (
                            (typeof d == "object" && d !== null
                                ? ((d = d.delay),
                                  (d =
                                      typeof d == "number" && 0 < d
                                          ? E + d
                                          : E))
                                : (d = E),
                            L)
                        ) {
                            case 1:
                                var $ = -1;
                                break;
                            case 2:
                                $ = 250;
                                break;
                            case 5:
                                $ = 1073741823;
                                break;
                            case 4:
                                $ = 1e4;
                                break;
                            default:
                                $ = 5e3;
                        }
                        return (
                            ($ = d + $),
                            (L = {
                                id: B++,
                                callback: W,
                                priorityLevel: L,
                                startTime: d,
                                expirationTime: $,
                                sortIndex: -1,
                            }),
                            d > E
                                ? ((L.sortIndex = d),
                                  s(R, L),
                                  a(S) === null &&
                                      L === a(R) &&
                                      (D ? (Z($e), ($e = -1)) : (D = !0),
                                      pe(oe, d - E)))
                                : ((L.sortIndex = $),
                                  s(S, L),
                                  q || J || ((q = !0), Pe(ke))),
                            L
                        );
                    }),
                    (o.unstable_shouldYield = Ct),
                    (o.unstable_wrapCallback = function (L) {
                        var W = Q;
                        return function () {
                            var d = Q;
                            Q = W;
                            try {
                                return L.apply(this, arguments);
                            } finally {
                                Q = d;
                            }
                        };
                    });
            })(Xo)),
        Xo
    );
}
var uc;
function Hd() {
    return uc || ((uc = 1), (Yo.exports = Vd())), Yo.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sc;
function Wd() {
    if (sc) return Xe;
    sc = 1;
    var o = Ec,
        s = Hd();
    function a(e) {
        for (
            var t =
                    "https://reactjs.org/docs/error-decoder.html?invariant=" +
                    e,
                n = 1;
            n < arguments.length;
            n++
        )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    var p = new Set(),
        m = {};
    function v(e, t) {
        _(e, t), _(e + "Capture", t);
    }
    function _(e, t) {
        for (m[e] = t, e = 0; e < t.length; e++) p.add(t[e]);
    }
    var x = !(
            typeof window > "u" ||
            typeof window.document > "u" ||
            typeof window.document.createElement > "u"
        ),
        S = Object.prototype.hasOwnProperty,
        R =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        B = {},
        A = {};
    function Q(e) {
        return S.call(A, e)
            ? !0
            : S.call(B, e)
            ? !1
            : R.test(e)
            ? (A[e] = !0)
            : ((B[e] = !0), !1);
    }
    function J(e, t, n, r) {
        if (n !== null && n.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r
                    ? !1
                    : n !== null
                    ? !n.acceptsBooleans
                    : ((e = e.toLowerCase().slice(0, 5)),
                      e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function q(e, t, n, r) {
        if (t === null || typeof t > "u" || J(e, t, n, r)) return !0;
        if (r) return !1;
        if (n !== null)
            switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return t === !1;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t;
            }
        return !1;
    }
    function D(e, t, n, r, l, i, u) {
        (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
            (this.attributeName = r),
            (this.attributeNamespace = l),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = u);
    }
    var O = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
            O[e] = new D(e, 0, !1, e, null, !1, !1);
        }),
        [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
            var t = e[0];
            O[t] = new D(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
                O[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
        ),
        [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
        ].forEach(function (e) {
            O[e] = new D(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
                O[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            O[e] = new D(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
            O[e] = new D(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
            O[e] = new D(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
            O[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
    var Z = /[\-:]([a-z])/g;
    function Y(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
            var t = e.replace(Z, Y);
            O[t] = new D(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
                var t = e.replace(Z, Y);
                O[t] = new D(
                    t,
                    1,
                    !1,
                    e,
                    "http://www.w3.org/1999/xlink",
                    !1,
                    !1
                );
            }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(Z, Y);
            O[t] = new D(
                t,
                1,
                !1,
                e,
                "http://www.w3.org/XML/1998/namespace",
                !1,
                !1
            );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
            O[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (O.xlinkHref = new D(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
            O[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
    function re(e, t, n, r) {
        var l = O.hasOwnProperty(t) ? O[t] : null;
        (l !== null
            ? l.type !== 0
            : r ||
              !(2 < t.length) ||
              (t[0] !== "o" && t[0] !== "O") ||
              (t[1] !== "n" && t[1] !== "N")) &&
            (q(t, n, l, r) && (n = null),
            r || l === null
                ? Q(t) &&
                  (n === null
                      ? e.removeAttribute(t)
                      : e.setAttribute(t, "" + n))
                : l.mustUseProperty
                ? (e[l.propertyName] =
                      n === null ? (l.type === 3 ? !1 : "") : n)
                : ((t = l.attributeName),
                  (r = l.attributeNamespace),
                  n === null
                      ? e.removeAttribute(t)
                      : ((l = l.type),
                        (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var oe = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        ke = Symbol.for("react.element"),
        ye = Symbol.for("react.portal"),
        ze = Symbol.for("react.fragment"),
        $e = Symbol.for("react.strict_mode"),
        yt = Symbol.for("react.profiler"),
        at = Symbol.for("react.provider"),
        Ct = Symbol.for("react.context"),
        Je = Symbol.for("react.forward_ref"),
        Oe = Symbol.for("react.suspense"),
        Ve = Symbol.for("react.suspense_list"),
        nt = Symbol.for("react.memo"),
        Pe = Symbol.for("react.lazy"),
        pe = Symbol.for("react.offscreen"),
        L = Symbol.iterator;
    function W(e) {
        return e === null || typeof e != "object"
            ? null
            : ((e = (L && e[L]) || e["@@iterator"]),
              typeof e == "function" ? e : null);
    }
    var d = Object.assign,
        E;
    function $(e) {
        if (E === void 0)
            try {
                throw Error();
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                E = (t && t[1]) || "";
            }
        return (
            `
` +
            E +
            e
        );
    }
    var b = !1;
    function X(e, t) {
        if (!e || b) return "";
        b = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (
                    ((t = function () {
                        throw Error();
                    }),
                    Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error();
                        },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
                ) {
                    try {
                        Reflect.construct(t, []);
                    } catch (w) {
                        var r = w;
                    }
                    Reflect.construct(e, [], t);
                } else {
                    try {
                        t.call();
                    } catch (w) {
                        r = w;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                } catch (w) {
                    r = w;
                }
                e();
            }
        } catch (w) {
            if (w && r && typeof w.stack == "string") {
                for (
                    var l = w.stack.split(`
`),
                        i = r.stack.split(`
`),
                        u = l.length - 1,
                        c = i.length - 1;
                    1 <= u && 0 <= c && l[u] !== i[c];

                )
                    c--;
                for (; 1 <= u && 0 <= c; u--, c--)
                    if (l[u] !== i[c]) {
                        if (u !== 1 || c !== 1)
                            do
                                if ((u--, c--, 0 > c || l[u] !== i[c])) {
                                    var f =
                                        `
` + l[u].replace(" at new ", " at ");
                                    return (
                                        e.displayName &&
                                            f.includes("<anonymous>") &&
                                            (f = f.replace(
                                                "<anonymous>",
                                                e.displayName
                                            )),
                                        f
                                    );
                                }
                            while (1 <= u && 0 <= c);
                        break;
                    }
            }
        } finally {
            (b = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? $(e) : "";
    }
    function se(e) {
        switch (e.tag) {
            case 5:
                return $(e.type);
            case 16:
                return $("Lazy");
            case 13:
                return $("Suspense");
            case 19:
                return $("SuspenseList");
            case 0:
            case 2:
            case 15:
                return (e = X(e.type, !1)), e;
            case 11:
                return (e = X(e.type.render, !1)), e;
            case 1:
                return (e = X(e.type, !0)), e;
            default:
                return "";
        }
    }
    function ne(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case ze:
                return "Fragment";
            case ye:
                return "Portal";
            case yt:
                return "Profiler";
            case $e:
                return "StrictMode";
            case Oe:
                return "Suspense";
            case Ve:
                return "SuspenseList";
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
                case Ct:
                    return (e.displayName || "Context") + ".Consumer";
                case at:
                    return (e._context.displayName || "Context") + ".Provider";
                case Je:
                    var t = e.render;
                    return (
                        (e = e.displayName),
                        e ||
                            ((e = t.displayName || t.name || ""),
                            (e =
                                e !== ""
                                    ? "ForwardRef(" + e + ")"
                                    : "ForwardRef")),
                        e
                    );
                case nt:
                    return (
                        (t = e.displayName || null),
                        t !== null ? t : ne(e.type) || "Memo"
                    );
                case Pe:
                    (t = e._payload), (e = e._init);
                    try {
                        return ne(e(t));
                    } catch {}
            }
        return null;
    }
    function ue(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return (
                    (e = t.render),
                    (e = e.displayName || e.name || ""),
                    t.displayName ||
                        (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
                );
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return ne(t);
            case 8:
                return t === $e ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function")
                    return t.displayName || t.name || null;
                if (typeof t == "string") return t;
        }
        return null;
    }
    function le(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return "";
        }
    }
    function He(e) {
        var t = e.type;
        return (
            (e = e.nodeName) &&
            e.toLowerCase() === "input" &&
            (t === "checkbox" || t === "radio")
        );
    }
    function $c(e) {
        var t = He(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (
            !e.hasOwnProperty(t) &&
            typeof n < "u" &&
            typeof n.get == "function" &&
            typeof n.set == "function"
        ) {
            var l = n.get,
                i = n.set;
            return (
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return l.call(this);
                    },
                    set: function (u) {
                        (r = "" + u), i.call(this, u);
                    },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                    getValue: function () {
                        return r;
                    },
                    setValue: function (u) {
                        r = "" + u;
                    },
                    stopTracking: function () {
                        (e._valueTracker = null), delete e[t];
                    },
                }
            );
        }
    }
    function Fr(e) {
        e._valueTracker || (e._valueTracker = $c(e));
    }
    function au(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return (
            e && (r = He(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r),
            e !== n ? (t.setValue(e), !0) : !1
        );
    }
    function Br(e) {
        if (
            ((e = e || (typeof document < "u" ? document : void 0)),
            typeof e > "u")
        )
            return null;
        try {
            return e.activeElement || e.body;
        } catch {
            return e.body;
        }
    }
    function ei(e, t) {
        var n = t.checked;
        return d({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked,
        });
    }
    function cu(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue,
            r = t.checked != null ? t.checked : t.defaultChecked;
        (n = le(t.value != null ? t.value : n)),
            (e._wrapperState = {
                initialChecked: r,
                initialValue: n,
                controlled:
                    t.type === "checkbox" || t.type === "radio"
                        ? t.checked != null
                        : t.value != null,
            });
    }
    function fu(e, t) {
        (t = t.checked), t != null && re(e, "checked", t, !1);
    }
    function ti(e, t) {
        fu(e, t);
        var n = le(t.value),
            r = t.type;
        if (n != null)
            r === "number"
                ? ((n === 0 && e.value === "") || e.value != n) &&
                  (e.value = "" + n)
                : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value")
            ? ni(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ni(e, t.type, le(t.defaultValue)),
            t.checked == null &&
                t.defaultChecked != null &&
                (e.defaultChecked = !!t.defaultChecked);
    }
    function du(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
                !(
                    (r !== "submit" && r !== "reset") ||
                    (t.value !== void 0 && t.value !== null)
                )
            )
                return;
            (t = "" + e._wrapperState.initialValue),
                n || t === e.value || (e.value = t),
                (e.defaultValue = t);
        }
        (n = e.name),
            n !== "" && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            n !== "" && (e.name = n);
    }
    function ni(e, t, n) {
        (t !== "number" || Br(e.ownerDocument) !== e) &&
            (n == null
                ? (e.defaultValue = "" + e._wrapperState.initialValue)
                : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var Kn = Array.isArray;
    function Sn(e, t, n, r) {
        if (((e = e.options), t)) {
            t = {};
            for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
            for (n = 0; n < e.length; n++)
                (l = t.hasOwnProperty("$" + e[n].value)),
                    e[n].selected !== l && (e[n].selected = l),
                    l && r && (e[n].defaultSelected = !0);
        } else {
            for (n = "" + le(n), t = null, l = 0; l < e.length; l++) {
                if (e[l].value === n) {
                    (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                    return;
                }
                t !== null || e[l].disabled || (t = e[l]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function ri(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
        return d({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
        });
    }
    function pu(e, t) {
        var n = t.value;
        if (n == null) {
            if (((n = t.children), (t = t.defaultValue), n != null)) {
                if (t != null) throw Error(a(92));
                if (Kn(n)) {
                    if (1 < n.length) throw Error(a(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: le(n) };
    }
    function hu(e, t) {
        var n = le(t.value),
            r = le(t.defaultValue);
        n != null &&
            ((n = "" + n),
            n !== e.value && (e.value = n),
            t.defaultValue == null &&
                e.defaultValue !== n &&
                (e.defaultValue = n)),
            r != null && (e.defaultValue = "" + r);
    }
    function mu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
            t !== "" &&
            t !== null &&
            (e.value = t);
    }
    function vu(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function li(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml"
            ? vu(t)
            : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
            ? "http://www.w3.org/1999/xhtml"
            : e;
    }
    var Ar,
        yu = (function (e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
                ? function (t, n, r, l) {
                      MSApp.execUnsafeLocalFunction(function () {
                          return e(t, n, r, l);
                      });
                  }
                : e;
        })(function (e, t) {
            if (
                e.namespaceURI !== "http://www.w3.org/2000/svg" ||
                "innerHTML" in e
            )
                e.innerHTML = t;
            else {
                for (
                    Ar = Ar || document.createElement("div"),
                        Ar.innerHTML =
                            "<svg>" + t.valueOf().toString() + "</svg>",
                        t = Ar.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        });
    function qn(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Yn = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
        },
        Vc = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Yn).forEach(function (e) {
        Vc.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
                (Yn[t] = Yn[e]);
        });
    });
    function gu(e, t, n) {
        return t == null || typeof t == "boolean" || t === ""
            ? ""
            : n ||
              typeof t != "number" ||
              t === 0 ||
              (Yn.hasOwnProperty(e) && Yn[e])
            ? ("" + t).trim()
            : t + "px";
    }
    function wu(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = n.indexOf("--") === 0,
                    l = gu(n, t[n], r);
                n === "float" && (n = "cssFloat"),
                    r ? e.setProperty(n, l) : (e[n] = l);
            }
    }
    var Hc = d(
        { menuitem: !0 },
        {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
        }
    );
    function ii(e, t) {
        if (t) {
            if (
                Hc[e] &&
                (t.children != null || t.dangerouslySetInnerHTML != null)
            )
                throw Error(a(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(a(60));
                if (
                    typeof t.dangerouslySetInnerHTML != "object" ||
                    !("__html" in t.dangerouslySetInnerHTML)
                )
                    throw Error(a(61));
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(a(62));
        }
    }
    function oi(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    var ui = null;
    function si(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        );
    }
    var ai = null,
        xn = null,
        kn = null;
    function Su(e) {
        if ((e = vr(e))) {
            if (typeof ai != "function") throw Error(a(280));
            var t = e.stateNode;
            t && ((t = al(t)), ai(e.stateNode, e.type, t));
        }
    }
    function xu(e) {
        xn ? (kn ? kn.push(e) : (kn = [e])) : (xn = e);
    }
    function ku() {
        if (xn) {
            var e = xn,
                t = kn;
            if (((kn = xn = null), Su(e), t))
                for (e = 0; e < t.length; e++) Su(t[e]);
        }
    }
    function Eu(e, t) {
        return e(t);
    }
    function Cu() {}
    var ci = !1;
    function _u(e, t, n) {
        if (ci) return e(t, n);
        ci = !0;
        try {
            return Eu(e, t, n);
        } finally {
            (ci = !1), (xn !== null || kn !== null) && (Cu(), ku());
        }
    }
    function Xn(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = al(n);
        if (r === null) return null;
        n = r[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) ||
                    ((e = e.type),
                    (r = !(
                        e === "button" ||
                        e === "input" ||
                        e === "select" ||
                        e === "textarea"
                    ))),
                    (e = !r);
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(a(231, t, typeof n));
        return n;
    }
    var fi = !1;
    if (x)
        try {
            var Gn = {};
            Object.defineProperty(Gn, "passive", {
                get: function () {
                    fi = !0;
                },
            }),
                window.addEventListener("test", Gn, Gn),
                window.removeEventListener("test", Gn, Gn);
        } catch {
            fi = !1;
        }
    function Wc(e, t, n, r, l, i, u, c, f) {
        var w = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, w);
        } catch (C) {
            this.onError(C);
        }
    }
    var Jn = !1,
        $r = null,
        Vr = !1,
        di = null,
        Qc = {
            onError: function (e) {
                (Jn = !0), ($r = e);
            },
        };
    function Kc(e, t, n, r, l, i, u, c, f) {
        (Jn = !1), ($r = null), Wc.apply(Qc, arguments);
    }
    function qc(e, t, n, r, l, i, u, c, f) {
        if ((Kc.apply(this, arguments), Jn)) {
            if (Jn) {
                var w = $r;
                (Jn = !1), ($r = null);
            } else throw Error(a(198));
            Vr || ((Vr = !0), (di = w));
        }
    }
    function tn(e) {
        var t = e,
            n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
            e = t;
            do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function Pu(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (
                (t === null &&
                    ((e = e.alternate), e !== null && (t = e.memoizedState)),
                t !== null)
            )
                return t.dehydrated;
        }
        return null;
    }
    function Nu(e) {
        if (tn(e) !== e) throw Error(a(188));
    }
    function Yc(e) {
        var t = e.alternate;
        if (!t) {
            if (((t = tn(e)), t === null)) throw Error(a(188));
            return t !== e ? null : e;
        }
        for (var n = e, r = t; ; ) {
            var l = n.return;
            if (l === null) break;
            var i = l.alternate;
            if (i === null) {
                if (((r = l.return), r !== null)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (l.child === i.child) {
                for (i = l.child; i; ) {
                    if (i === n) return Nu(l), e;
                    if (i === r) return Nu(l), t;
                    i = i.sibling;
                }
                throw Error(a(188));
            }
            if (n.return !== r.return) (n = l), (r = i);
            else {
                for (var u = !1, c = l.child; c; ) {
                    if (c === n) {
                        (u = !0), (n = l), (r = i);
                        break;
                    }
                    if (c === r) {
                        (u = !0), (r = l), (n = i);
                        break;
                    }
                    c = c.sibling;
                }
                if (!u) {
                    for (c = i.child; c; ) {
                        if (c === n) {
                            (u = !0), (n = i), (r = l);
                            break;
                        }
                        if (c === r) {
                            (u = !0), (r = i), (n = l);
                            break;
                        }
                        c = c.sibling;
                    }
                    if (!u) throw Error(a(189));
                }
            }
            if (n.alternate !== r) throw Error(a(190));
        }
        if (n.tag !== 3) throw Error(a(188));
        return n.stateNode.current === n ? e : t;
    }
    function ju(e) {
        return (e = Yc(e)), e !== null ? Ru(e) : null;
    }
    function Ru(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null; ) {
            var t = Ru(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var Tu = s.unstable_scheduleCallback,
        Lu = s.unstable_cancelCallback,
        Xc = s.unstable_shouldYield,
        Gc = s.unstable_requestPaint,
        ge = s.unstable_now,
        Jc = s.unstable_getCurrentPriorityLevel,
        pi = s.unstable_ImmediatePriority,
        zu = s.unstable_UserBlockingPriority,
        Hr = s.unstable_NormalPriority,
        Zc = s.unstable_LowPriority,
        Ou = s.unstable_IdlePriority,
        Wr = null,
        gt = null;
    function bc(e) {
        if (gt && typeof gt.onCommitFiberRoot == "function")
            try {
                gt.onCommitFiberRoot(
                    Wr,
                    e,
                    void 0,
                    (e.current.flags & 128) === 128
                );
            } catch {}
    }
    var ct = Math.clz32 ? Math.clz32 : nf,
        ef = Math.log,
        tf = Math.LN2;
    function nf(e) {
        return (e >>>= 0), e === 0 ? 32 : (31 - ((ef(e) / tf) | 0)) | 0;
    }
    var Qr = 64,
        Kr = 4194304;
    function Zn(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e;
        }
    }
    function qr(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0,
            l = e.suspendedLanes,
            i = e.pingedLanes,
            u = n & 268435455;
        if (u !== 0) {
            var c = u & ~l;
            c !== 0 ? (r = Zn(c)) : ((i &= u), i !== 0 && (r = Zn(i)));
        } else (u = n & ~l), u !== 0 ? (r = Zn(u)) : i !== 0 && (r = Zn(i));
        if (r === 0) return 0;
        if (
            t !== 0 &&
            t !== r &&
            !(t & l) &&
            ((l = r & -r),
            (i = t & -t),
            l >= i || (l === 16 && (i & 4194240) !== 0))
        )
            return t;
        if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
            for (e = e.entanglements, t &= r; 0 < t; )
                (n = 31 - ct(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
        return r;
    }
    function rf(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function lf(e, t) {
        for (
            var n = e.suspendedLanes,
                r = e.pingedLanes,
                l = e.expirationTimes,
                i = e.pendingLanes;
            0 < i;

        ) {
            var u = 31 - ct(i),
                c = 1 << u,
                f = l[u];
            f === -1
                ? (!(c & n) || c & r) && (l[u] = rf(c, t))
                : f <= t && (e.expiredLanes |= c),
                (i &= ~c);
        }
    }
    function hi(e) {
        return (
            (e = e.pendingLanes & -1073741825),
            e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
        );
    }
    function Mu() {
        var e = Qr;
        return (Qr <<= 1), !(Qr & 4194240) && (Qr = 64), e;
    }
    function mi(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
    }
    function bn(e, t, n) {
        (e.pendingLanes |= t),
            t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            (e = e.eventTimes),
            (t = 31 - ct(t)),
            (e[t] = n);
    }
    function of(e, t) {
        var n = e.pendingLanes & ~t;
        (e.pendingLanes = t),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= t),
            (e.mutableReadLanes &= t),
            (e.entangledLanes &= t),
            (t = e.entanglements);
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n; ) {
            var l = 31 - ct(n),
                i = 1 << l;
            (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
        }
    }
    function vi(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
            var r = 31 - ct(n),
                l = 1 << r;
            (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
        }
    }
    var ie = 0;
    function Iu(e) {
        return (
            (e &= -e),
            1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
        );
    }
    var Du,
        yi,
        Uu,
        Fu,
        Bu,
        gi = !1,
        Yr = [],
        Ot = null,
        Mt = null,
        It = null,
        er = new Map(),
        tr = new Map(),
        Dt = [],
        uf =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                " "
            );
    function Au(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Ot = null;
                break;
            case "dragenter":
            case "dragleave":
                Mt = null;
                break;
            case "mouseover":
            case "mouseout":
                It = null;
                break;
            case "pointerover":
            case "pointerout":
                er.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                tr.delete(t.pointerId);
        }
    }
    function nr(e, t, n, r, l, i) {
        return e === null || e.nativeEvent !== i
            ? ((e = {
                  blockedOn: t,
                  domEventName: n,
                  eventSystemFlags: r,
                  nativeEvent: i,
                  targetContainers: [l],
              }),
              t !== null && ((t = vr(t)), t !== null && yi(t)),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              l !== null && t.indexOf(l) === -1 && t.push(l),
              e);
    }
    function sf(e, t, n, r, l) {
        switch (t) {
            case "focusin":
                return (Ot = nr(Ot, e, t, n, r, l)), !0;
            case "dragenter":
                return (Mt = nr(Mt, e, t, n, r, l)), !0;
            case "mouseover":
                return (It = nr(It, e, t, n, r, l)), !0;
            case "pointerover":
                var i = l.pointerId;
                return er.set(i, nr(er.get(i) || null, e, t, n, r, l)), !0;
            case "gotpointercapture":
                return (
                    (i = l.pointerId),
                    tr.set(i, nr(tr.get(i) || null, e, t, n, r, l)),
                    !0
                );
        }
        return !1;
    }
    function $u(e) {
        var t = nn(e.target);
        if (t !== null) {
            var n = tn(t);
            if (n !== null) {
                if (((t = n.tag), t === 13)) {
                    if (((t = Pu(n)), t !== null)) {
                        (e.blockedOn = t),
                            Bu(e.priority, function () {
                                Uu(n);
                            });
                        return;
                    }
                } else if (
                    t === 3 &&
                    n.stateNode.current.memoizedState.isDehydrated
                ) {
                    e.blockedOn =
                        n.tag === 3 ? n.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function Xr(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Si(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                (ui = r), n.target.dispatchEvent(r), (ui = null);
            } else
                return (t = vr(n)), t !== null && yi(t), (e.blockedOn = n), !1;
            t.shift();
        }
        return !0;
    }
    function Vu(e, t, n) {
        Xr(e) && n.delete(t);
    }
    function af() {
        (gi = !1),
            Ot !== null && Xr(Ot) && (Ot = null),
            Mt !== null && Xr(Mt) && (Mt = null),
            It !== null && Xr(It) && (It = null),
            er.forEach(Vu),
            tr.forEach(Vu);
    }
    function rr(e, t) {
        e.blockedOn === t &&
            ((e.blockedOn = null),
            gi ||
                ((gi = !0),
                s.unstable_scheduleCallback(s.unstable_NormalPriority, af)));
    }
    function lr(e) {
        function t(l) {
            return rr(l, e);
        }
        if (0 < Yr.length) {
            rr(Yr[0], e);
            for (var n = 1; n < Yr.length; n++) {
                var r = Yr[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for (
            Ot !== null && rr(Ot, e),
                Mt !== null && rr(Mt, e),
                It !== null && rr(It, e),
                er.forEach(t),
                tr.forEach(t),
                n = 0;
            n < Dt.length;
            n++
        )
            (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
            $u(n), n.blockedOn === null && Dt.shift();
    }
    var En = oe.ReactCurrentBatchConfig,
        Gr = !0;
    function cf(e, t, n, r) {
        var l = ie,
            i = En.transition;
        En.transition = null;
        try {
            (ie = 1), wi(e, t, n, r);
        } finally {
            (ie = l), (En.transition = i);
        }
    }
    function ff(e, t, n, r) {
        var l = ie,
            i = En.transition;
        En.transition = null;
        try {
            (ie = 4), wi(e, t, n, r);
        } finally {
            (ie = l), (En.transition = i);
        }
    }
    function wi(e, t, n, r) {
        if (Gr) {
            var l = Si(e, t, n, r);
            if (l === null) Ui(e, t, r, Jr, n), Au(e, r);
            else if (sf(l, e, t, n, r)) r.stopPropagation();
            else if ((Au(e, r), t & 4 && -1 < uf.indexOf(e))) {
                for (; l !== null; ) {
                    var i = vr(l);
                    if (
                        (i !== null && Du(i),
                        (i = Si(e, t, n, r)),
                        i === null && Ui(e, t, r, Jr, n),
                        i === l)
                    )
                        break;
                    l = i;
                }
                l !== null && r.stopPropagation();
            } else Ui(e, t, r, null, n);
        }
    }
    var Jr = null;
    function Si(e, t, n, r) {
        if (((Jr = null), (e = si(r)), (e = nn(e)), e !== null))
            if (((t = tn(e)), t === null)) e = null;
            else if (((n = t.tag), n === 13)) {
                if (((e = Pu(t)), e !== null)) return e;
                e = null;
            } else if (n === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null;
            } else t !== e && (e = null);
        return (Jr = e), null;
    }
    function Hu(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (Jc()) {
                    case pi:
                        return 1;
                    case zu:
                        return 4;
                    case Hr:
                    case Zc:
                        return 16;
                    case Ou:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Ut = null,
        xi = null,
        Zr = null;
    function Wu() {
        if (Zr) return Zr;
        var e,
            t = xi,
            n = t.length,
            r,
            l = "value" in Ut ? Ut.value : Ut.textContent,
            i = l.length;
        for (e = 0; e < n && t[e] === l[e]; e++);
        var u = n - e;
        for (r = 1; r <= u && t[n - r] === l[i - r]; r++);
        return (Zr = l.slice(e, 1 < r ? 1 - r : void 0));
    }
    function br(e) {
        var t = e.keyCode;
        return (
            "charCode" in e
                ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
                : (e = t),
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
        );
    }
    function el() {
        return !0;
    }
    function Qu() {
        return !1;
    }
    function Ze(e) {
        function t(n, r, l, i, u) {
            (this._reactName = n),
                (this._targetInst = l),
                (this.type = r),
                (this.nativeEvent = i),
                (this.target = u),
                (this.currentTarget = null);
            for (var c in e)
                e.hasOwnProperty(c) &&
                    ((n = e[c]), (this[c] = n ? n(i) : i[c]));
            return (
                (this.isDefaultPrevented = (
                    i.defaultPrevented != null
                        ? i.defaultPrevented
                        : i.returnValue === !1
                )
                    ? el
                    : Qu),
                (this.isPropagationStopped = Qu),
                this
            );
        }
        return (
            d(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var n = this.nativeEvent;
                    n &&
                        (n.preventDefault
                            ? n.preventDefault()
                            : typeof n.returnValue != "unknown" &&
                              (n.returnValue = !1),
                        (this.isDefaultPrevented = el));
                },
                stopPropagation: function () {
                    var n = this.nativeEvent;
                    n &&
                        (n.stopPropagation
                            ? n.stopPropagation()
                            : typeof n.cancelBubble != "unknown" &&
                              (n.cancelBubble = !0),
                        (this.isPropagationStopped = el));
                },
                persist: function () {},
                isPersistent: el,
            }),
            t
        );
    }
    var Cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        ki = Ze(Cn),
        ir = d({}, Cn, { view: 0, detail: 0 }),
        df = Ze(ir),
        Ei,
        Ci,
        or,
        tl = d({}, ir, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Pi,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0
                    ? e.fromElement === e.srcElement
                        ? e.toElement
                        : e.fromElement
                    : e.relatedTarget;
            },
            movementX: function (e) {
                return "movementX" in e
                    ? e.movementX
                    : (e !== or &&
                          (or && e.type === "mousemove"
                              ? ((Ei = e.screenX - or.screenX),
                                (Ci = e.screenY - or.screenY))
                              : (Ci = Ei = 0),
                          (or = e)),
                      Ei);
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : Ci;
            },
        }),
        Ku = Ze(tl),
        pf = d({}, tl, { dataTransfer: 0 }),
        hf = Ze(pf),
        mf = d({}, ir, { relatedTarget: 0 }),
        _i = Ze(mf),
        vf = d({}, Cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        yf = Ze(vf),
        gf = d({}, Cn, {
            clipboardData: function (e) {
                return "clipboardData" in e
                    ? e.clipboardData
                    : window.clipboardData;
            },
        }),
        wf = Ze(gf),
        Sf = d({}, Cn, { data: 0 }),
        qu = Ze(Sf),
        xf = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
        },
        kf = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
        },
        Ef = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
        };
    function Cf(e) {
        var t = this.nativeEvent;
        return t.getModifierState
            ? t.getModifierState(e)
            : (e = Ef[e])
            ? !!t[e]
            : !1;
    }
    function Pi() {
        return Cf;
    }
    var _f = d({}, ir, {
            key: function (e) {
                if (e.key) {
                    var t = xf[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress"
                    ? ((e = br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                    : e.type === "keydown" || e.type === "keyup"
                    ? kf[e.keyCode] || "Unidentified"
                    : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Pi,
            charCode: function (e) {
                return e.type === "keypress" ? br(e) : 0;
            },
            keyCode: function (e) {
                return e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
            },
            which: function (e) {
                return e.type === "keypress"
                    ? br(e)
                    : e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
            },
        }),
        Pf = Ze(_f),
        Nf = d({}, tl, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        Yu = Ze(Nf),
        jf = d({}, ir, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Pi,
        }),
        Rf = Ze(jf),
        Tf = d({}, Cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Lf = Ze(Tf),
        zf = d({}, tl, {
            deltaX: function (e) {
                return "deltaX" in e
                    ? e.deltaX
                    : "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0;
            },
            deltaY: function (e) {
                return "deltaY" in e
                    ? e.deltaY
                    : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        Of = Ze(zf),
        Mf = [9, 13, 27, 32],
        Ni = x && "CompositionEvent" in window,
        ur = null;
    x && "documentMode" in document && (ur = document.documentMode);
    var If = x && "TextEvent" in window && !ur,
        Xu = x && (!Ni || (ur && 8 < ur && 11 >= ur)),
        Gu = String.fromCharCode(32),
        Ju = !1;
    function Zu(e, t) {
        switch (e) {
            case "keyup":
                return Mf.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function bu(e) {
        return (
            (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
        );
    }
    var _n = !1;
    function Df(e, t) {
        switch (e) {
            case "compositionend":
                return bu(t);
            case "keypress":
                return t.which !== 32 ? null : ((Ju = !0), Gu);
            case "textInput":
                return (e = t.data), e === Gu && Ju ? null : e;
            default:
                return null;
        }
    }
    function Uf(e, t) {
        if (_n)
            return e === "compositionend" || (!Ni && Zu(e, t))
                ? ((e = Wu()), (Zr = xi = Ut = null), (_n = !1), e)
                : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (
                    !(t.ctrlKey || t.altKey || t.metaKey) ||
                    (t.ctrlKey && t.altKey)
                ) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case "compositionend":
                return Xu && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var Ff = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
    };
    function es(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Ff[e.type] : t === "textarea";
    }
    function ts(e, t, n, r) {
        xu(r),
            (t = ol(t, "onChange")),
            0 < t.length &&
                ((n = new ki("onChange", "change", null, n, r)),
                e.push({ event: n, listeners: t }));
    }
    var sr = null,
        ar = null;
    function Bf(e) {
        ws(e, 0);
    }
    function nl(e) {
        var t = Tn(e);
        if (au(t)) return e;
    }
    function Af(e, t) {
        if (e === "change") return t;
    }
    var ns = !1;
    if (x) {
        var ji;
        if (x) {
            var Ri = "oninput" in document;
            if (!Ri) {
                var rs = document.createElement("div");
                rs.setAttribute("oninput", "return;"),
                    (Ri = typeof rs.oninput == "function");
            }
            ji = Ri;
        } else ji = !1;
        ns = ji && (!document.documentMode || 9 < document.documentMode);
    }
    function ls() {
        sr && (sr.detachEvent("onpropertychange", is), (ar = sr = null));
    }
    function is(e) {
        if (e.propertyName === "value" && nl(ar)) {
            var t = [];
            ts(t, ar, e, si(e)), _u(Bf, t);
        }
    }
    function $f(e, t, n) {
        e === "focusin"
            ? (ls(), (sr = t), (ar = n), sr.attachEvent("onpropertychange", is))
            : e === "focusout" && ls();
    }
    function Vf(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return nl(ar);
    }
    function Hf(e, t) {
        if (e === "click") return nl(t);
    }
    function Wf(e, t) {
        if (e === "input" || e === "change") return nl(t);
    }
    function Qf(e, t) {
        return (
            (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
        );
    }
    var ft = typeof Object.is == "function" ? Object.is : Qf;
    function cr(e, t) {
        if (ft(e, t)) return !0;
        if (
            typeof e != "object" ||
            e === null ||
            typeof t != "object" ||
            t === null
        )
            return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var l = n[r];
            if (!S.call(t, l) || !ft(e[l], t[l])) return !1;
        }
        return !0;
    }
    function os(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function us(e, t) {
        var n = os(e);
        e = 0;
        for (var r; n; ) {
            if (n.nodeType === 3) {
                if (((r = e + n.textContent.length), e <= t && r >= t))
                    return { node: n, offset: t - e };
                e = r;
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e;
                    }
                    n = n.parentNode;
                }
                n = void 0;
            }
            n = os(n);
        }
    }
    function ss(e, t) {
        return e && t
            ? e === t
                ? !0
                : e && e.nodeType === 3
                ? !1
                : t && t.nodeType === 3
                ? ss(e, t.parentNode)
                : "contains" in e
                ? e.contains(t)
                : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
            : !1;
    }
    function as() {
        for (var e = window, t = Br(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = Br(e.document);
        }
        return t;
    }
    function Ti(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
            t &&
            ((t === "input" &&
                (e.type === "text" ||
                    e.type === "search" ||
                    e.type === "tel" ||
                    e.type === "url" ||
                    e.type === "password")) ||
                t === "textarea" ||
                e.contentEditable === "true")
        );
    }
    function Kf(e) {
        var t = as(),
            n = e.focusedElem,
            r = e.selectionRange;
        if (
            t !== n &&
            n &&
            n.ownerDocument &&
            ss(n.ownerDocument.documentElement, n)
        ) {
            if (r !== null && Ti(n)) {
                if (
                    ((t = r.start),
                    (e = r.end),
                    e === void 0 && (e = t),
                    "selectionStart" in n)
                )
                    (n.selectionStart = t),
                        (n.selectionEnd = Math.min(e, n.value.length));
                else if (
                    ((e =
                        ((t = n.ownerDocument || document) && t.defaultView) ||
                        window),
                    e.getSelection)
                ) {
                    e = e.getSelection();
                    var l = n.textContent.length,
                        i = Math.min(r.start, l);
                    (r = r.end === void 0 ? i : Math.min(r.end, l)),
                        !e.extend && i > r && ((l = r), (r = i), (i = l)),
                        (l = us(n, i));
                    var u = us(n, r);
                    l &&
                        u &&
                        (e.rangeCount !== 1 ||
                            e.anchorNode !== l.node ||
                            e.anchorOffset !== l.offset ||
                            e.focusNode !== u.node ||
                            e.focusOffset !== u.offset) &&
                        ((t = t.createRange()),
                        t.setStart(l.node, l.offset),
                        e.removeAllRanges(),
                        i > r
                            ? (e.addRange(t), e.extend(u.node, u.offset))
                            : (t.setEnd(u.node, u.offset), e.addRange(t)));
                }
            }
            for (t = [], e = n; (e = e.parentNode); )
                e.nodeType === 1 &&
                    t.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop,
                    });
            for (
                typeof n.focus == "function" && n.focus(), n = 0;
                n < t.length;
                n++
            )
                (e = t[n]),
                    (e.element.scrollLeft = e.left),
                    (e.element.scrollTop = e.top);
        }
    }
    var qf = x && "documentMode" in document && 11 >= document.documentMode,
        Pn = null,
        Li = null,
        fr = null,
        zi = !1;
    function cs(e, t, n) {
        var r =
            n.window === n
                ? n.document
                : n.nodeType === 9
                ? n
                : n.ownerDocument;
        zi ||
            Pn == null ||
            Pn !== Br(r) ||
            ((r = Pn),
            "selectionStart" in r && Ti(r)
                ? (r = { start: r.selectionStart, end: r.selectionEnd })
                : ((r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                  ).getSelection()),
                  (r = {
                      anchorNode: r.anchorNode,
                      anchorOffset: r.anchorOffset,
                      focusNode: r.focusNode,
                      focusOffset: r.focusOffset,
                  })),
            (fr && cr(fr, r)) ||
                ((fr = r),
                (r = ol(Li, "onSelect")),
                0 < r.length &&
                    ((t = new ki("onSelect", "select", null, t, n)),
                    e.push({ event: t, listeners: r }),
                    (t.target = Pn))));
    }
    function rl(e, t) {
        var n = {};
        return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
        );
    }
    var Nn = {
            animationend: rl("Animation", "AnimationEnd"),
            animationiteration: rl("Animation", "AnimationIteration"),
            animationstart: rl("Animation", "AnimationStart"),
            transitionend: rl("Transition", "TransitionEnd"),
        },
        Oi = {},
        fs = {};
    x &&
        ((fs = document.createElement("div").style),
        "AnimationEvent" in window ||
            (delete Nn.animationend.animation,
            delete Nn.animationiteration.animation,
            delete Nn.animationstart.animation),
        "TransitionEvent" in window || delete Nn.transitionend.transition);
    function ll(e) {
        if (Oi[e]) return Oi[e];
        if (!Nn[e]) return e;
        var t = Nn[e],
            n;
        for (n in t) if (t.hasOwnProperty(n) && n in fs) return (Oi[e] = t[n]);
        return e;
    }
    var ds = ll("animationend"),
        ps = ll("animationiteration"),
        hs = ll("animationstart"),
        ms = ll("transitionend"),
        vs = new Map(),
        ys =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                " "
            );
    function Ft(e, t) {
        vs.set(e, t), v(t, [e]);
    }
    for (var Mi = 0; Mi < ys.length; Mi++) {
        var Ii = ys[Mi],
            Yf = Ii.toLowerCase(),
            Xf = Ii[0].toUpperCase() + Ii.slice(1);
        Ft(Yf, "on" + Xf);
    }
    Ft(ds, "onAnimationEnd"),
        Ft(ps, "onAnimationIteration"),
        Ft(hs, "onAnimationStart"),
        Ft("dblclick", "onDoubleClick"),
        Ft("focusin", "onFocus"),
        Ft("focusout", "onBlur"),
        Ft(ms, "onTransitionEnd"),
        _("onMouseEnter", ["mouseout", "mouseover"]),
        _("onMouseLeave", ["mouseout", "mouseover"]),
        _("onPointerEnter", ["pointerout", "pointerover"]),
        _("onPointerLeave", ["pointerout", "pointerover"]),
        v(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
                " "
            )
        ),
        v(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                " "
            )
        ),
        v("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
        ]),
        v(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
                " "
            )
        ),
        v(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
                " "
            )
        ),
        v(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
                " "
            )
        );
    var dr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " "
            ),
        Gf = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(dr)
        );
    function gs(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n), qc(r, t, void 0, e), (e.currentTarget = null);
    }
    function ws(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                l = r.event;
            r = r.listeners;
            e: {
                var i = void 0;
                if (t)
                    for (var u = r.length - 1; 0 <= u; u--) {
                        var c = r[u],
                            f = c.instance,
                            w = c.currentTarget;
                        if (
                            ((c = c.listener),
                            f !== i && l.isPropagationStopped())
                        )
                            break e;
                        gs(l, c, w), (i = f);
                    }
                else
                    for (u = 0; u < r.length; u++) {
                        if (
                            ((c = r[u]),
                            (f = c.instance),
                            (w = c.currentTarget),
                            (c = c.listener),
                            f !== i && l.isPropagationStopped())
                        )
                            break e;
                        gs(l, c, w), (i = f);
                    }
            }
        }
        if (Vr) throw ((e = di), (Vr = !1), (di = null), e);
    }
    function ce(e, t) {
        var n = t[Hi];
        n === void 0 && (n = t[Hi] = new Set());
        var r = e + "__bubble";
        n.has(r) || (Ss(t, e, 2, !1), n.add(r));
    }
    function Di(e, t, n) {
        var r = 0;
        t && (r |= 4), Ss(n, e, r, t);
    }
    var il = "_reactListening" + Math.random().toString(36).slice(2);
    function pr(e) {
        if (!e[il]) {
            (e[il] = !0),
                p.forEach(function (n) {
                    n !== "selectionchange" &&
                        (Gf.has(n) || Di(n, !1, e), Di(n, !0, e));
                });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[il] || ((t[il] = !0), Di("selectionchange", !1, t));
        }
    }
    function Ss(e, t, n, r) {
        switch (Hu(t)) {
            case 1:
                var l = cf;
                break;
            case 4:
                l = ff;
                break;
            default:
                l = wi;
        }
        (n = l.bind(null, t, n, e)),
            (l = void 0),
            !fi ||
                (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
                (l = !0),
            r
                ? l !== void 0
                    ? e.addEventListener(t, n, { capture: !0, passive: l })
                    : e.addEventListener(t, n, !0)
                : l !== void 0
                ? e.addEventListener(t, n, { passive: l })
                : e.addEventListener(t, n, !1);
    }
    function Ui(e, t, n, r, l) {
        var i = r;
        if (!(t & 1) && !(t & 2) && r !== null)
            e: for (;;) {
                if (r === null) return;
                var u = r.tag;
                if (u === 3 || u === 4) {
                    var c = r.stateNode.containerInfo;
                    if (c === l || (c.nodeType === 8 && c.parentNode === l))
                        break;
                    if (u === 4)
                        for (u = r.return; u !== null; ) {
                            var f = u.tag;
                            if (
                                (f === 3 || f === 4) &&
                                ((f = u.stateNode.containerInfo),
                                f === l ||
                                    (f.nodeType === 8 && f.parentNode === l))
                            )
                                return;
                            u = u.return;
                        }
                    for (; c !== null; ) {
                        if (((u = nn(c)), u === null)) return;
                        if (((f = u.tag), f === 5 || f === 6)) {
                            r = i = u;
                            continue e;
                        }
                        c = c.parentNode;
                    }
                }
                r = r.return;
            }
        _u(function () {
            var w = i,
                C = si(n),
                P = [];
            e: {
                var k = vs.get(e);
                if (k !== void 0) {
                    var z = ki,
                        I = e;
                    switch (e) {
                        case "keypress":
                            if (br(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            z = Pf;
                            break;
                        case "focusin":
                            (I = "focus"), (z = _i);
                            break;
                        case "focusout":
                            (I = "blur"), (z = _i);
                            break;
                        case "beforeblur":
                        case "afterblur":
                            z = _i;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            z = Ku;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            z = hf;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            z = Rf;
                            break;
                        case ds:
                        case ps:
                        case hs:
                            z = yf;
                            break;
                        case ms:
                            z = Lf;
                            break;
                        case "scroll":
                            z = df;
                            break;
                        case "wheel":
                            z = Of;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            z = wf;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            z = Yu;
                    }
                    var U = (t & 4) !== 0,
                        we = !U && e === "scroll",
                        y = U ? (k !== null ? k + "Capture" : null) : k;
                    U = [];
                    for (var h = w, g; h !== null; ) {
                        g = h;
                        var j = g.stateNode;
                        if (
                            (g.tag === 5 &&
                                j !== null &&
                                ((g = j),
                                y !== null &&
                                    ((j = Xn(h, y)),
                                    j != null && U.push(hr(h, j, g)))),
                            we)
                        )
                            break;
                        h = h.return;
                    }
                    0 < U.length &&
                        ((k = new z(k, I, null, n, C)),
                        P.push({ event: k, listeners: U }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (
                        ((k = e === "mouseover" || e === "pointerover"),
                        (z = e === "mouseout" || e === "pointerout"),
                        k &&
                            n !== ui &&
                            (I = n.relatedTarget || n.fromElement) &&
                            (nn(I) || I[_t]))
                    )
                        break e;
                    if (
                        (z || k) &&
                        ((k =
                            C.window === C
                                ? C
                                : (k = C.ownerDocument)
                                ? k.defaultView || k.parentWindow
                                : window),
                        z
                            ? ((I = n.relatedTarget || n.toElement),
                              (z = w),
                              (I = I ? nn(I) : null),
                              I !== null &&
                                  ((we = tn(I)),
                                  I !== we || (I.tag !== 5 && I.tag !== 6)) &&
                                  (I = null))
                            : ((z = null), (I = w)),
                        z !== I)
                    ) {
                        if (
                            ((U = Ku),
                            (j = "onMouseLeave"),
                            (y = "onMouseEnter"),
                            (h = "mouse"),
                            (e === "pointerout" || e === "pointerover") &&
                                ((U = Yu),
                                (j = "onPointerLeave"),
                                (y = "onPointerEnter"),
                                (h = "pointer")),
                            (we = z == null ? k : Tn(z)),
                            (g = I == null ? k : Tn(I)),
                            (k = new U(j, h + "leave", z, n, C)),
                            (k.target = we),
                            (k.relatedTarget = g),
                            (j = null),
                            nn(C) === w &&
                                ((U = new U(y, h + "enter", I, n, C)),
                                (U.target = g),
                                (U.relatedTarget = we),
                                (j = U)),
                            (we = j),
                            z && I)
                        )
                            t: {
                                for (U = z, y = I, h = 0, g = U; g; g = jn(g))
                                    h++;
                                for (g = 0, j = y; j; j = jn(j)) g++;
                                for (; 0 < h - g; ) (U = jn(U)), h--;
                                for (; 0 < g - h; ) (y = jn(y)), g--;
                                for (; h--; ) {
                                    if (
                                        U === y ||
                                        (y !== null && U === y.alternate)
                                    )
                                        break t;
                                    (U = jn(U)), (y = jn(y));
                                }
                                U = null;
                            }
                        else U = null;
                        z !== null && xs(P, k, z, U, !1),
                            I !== null && we !== null && xs(P, we, I, U, !0);
                    }
                }
                e: {
                    if (
                        ((k = w ? Tn(w) : window),
                        (z = k.nodeName && k.nodeName.toLowerCase()),
                        z === "select" || (z === "input" && k.type === "file"))
                    )
                        var F = Af;
                    else if (es(k))
                        if (ns) F = Wf;
                        else {
                            F = Vf;
                            var V = $f;
                        }
                    else
                        (z = k.nodeName) &&
                            z.toLowerCase() === "input" &&
                            (k.type === "checkbox" || k.type === "radio") &&
                            (F = Hf);
                    if (F && (F = F(e, w))) {
                        ts(P, F, n, C);
                        break e;
                    }
                    V && V(e, k, w),
                        e === "focusout" &&
                            (V = k._wrapperState) &&
                            V.controlled &&
                            k.type === "number" &&
                            ni(k, "number", k.value);
                }
                switch (((V = w ? Tn(w) : window), e)) {
                    case "focusin":
                        (es(V) || V.contentEditable === "true") &&
                            ((Pn = V), (Li = w), (fr = null));
                        break;
                    case "focusout":
                        fr = Li = Pn = null;
                        break;
                    case "mousedown":
                        zi = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        (zi = !1), cs(P, n, C);
                        break;
                    case "selectionchange":
                        if (qf) break;
                    case "keydown":
                    case "keyup":
                        cs(P, n, C);
                }
                var H;
                if (Ni)
                    e: {
                        switch (e) {
                            case "compositionstart":
                                var K = "onCompositionStart";
                                break e;
                            case "compositionend":
                                K = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                K = "onCompositionUpdate";
                                break e;
                        }
                        K = void 0;
                    }
                else
                    _n
                        ? Zu(e, n) && (K = "onCompositionEnd")
                        : e === "keydown" &&
                          n.keyCode === 229 &&
                          (K = "onCompositionStart");
                K &&
                    (Xu &&
                        n.locale !== "ko" &&
                        (_n || K !== "onCompositionStart"
                            ? K === "onCompositionEnd" && _n && (H = Wu())
                            : ((Ut = C),
                              (xi = "value" in Ut ? Ut.value : Ut.textContent),
                              (_n = !0))),
                    (V = ol(w, K)),
                    0 < V.length &&
                        ((K = new qu(K, e, null, n, C)),
                        P.push({ event: K, listeners: V }),
                        H
                            ? (K.data = H)
                            : ((H = bu(n)), H !== null && (K.data = H)))),
                    (H = If ? Df(e, n) : Uf(e, n)) &&
                        ((w = ol(w, "onBeforeInput")),
                        0 < w.length &&
                            ((C = new qu(
                                "onBeforeInput",
                                "beforeinput",
                                null,
                                n,
                                C
                            )),
                            P.push({ event: C, listeners: w }),
                            (C.data = H)));
            }
            ws(P, t);
        });
    }
    function hr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
    }
    function ol(e, t) {
        for (var n = t + "Capture", r = []; e !== null; ) {
            var l = e,
                i = l.stateNode;
            l.tag === 5 &&
                i !== null &&
                ((l = i),
                (i = Xn(e, n)),
                i != null && r.unshift(hr(e, i, l)),
                (i = Xn(e, t)),
                i != null && r.push(hr(e, i, l))),
                (e = e.return);
        }
        return r;
    }
    function jn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function xs(e, t, n, r, l) {
        for (var i = t._reactName, u = []; n !== null && n !== r; ) {
            var c = n,
                f = c.alternate,
                w = c.stateNode;
            if (f !== null && f === r) break;
            c.tag === 5 &&
                w !== null &&
                ((c = w),
                l
                    ? ((f = Xn(n, i)), f != null && u.unshift(hr(n, f, c)))
                    : l || ((f = Xn(n, i)), f != null && u.push(hr(n, f, c)))),
                (n = n.return);
        }
        u.length !== 0 && e.push({ event: t, listeners: u });
    }
    var Jf = /\r\n?/g,
        Zf = /\u0000|\uFFFD/g;
    function ks(e) {
        return (typeof e == "string" ? e : "" + e)
            .replace(
                Jf,
                `
`
            )
            .replace(Zf, "");
    }
    function ul(e, t, n) {
        if (((t = ks(t)), ks(e) !== t && n)) throw Error(a(425));
    }
    function sl() {}
    var Fi = null,
        Bi = null;
    function Ai(e, t) {
        return (
            e === "textarea" ||
            e === "noscript" ||
            typeof t.children == "string" ||
            typeof t.children == "number" ||
            (typeof t.dangerouslySetInnerHTML == "object" &&
                t.dangerouslySetInnerHTML !== null &&
                t.dangerouslySetInnerHTML.__html != null)
        );
    }
    var $i = typeof setTimeout == "function" ? setTimeout : void 0,
        bf = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Es = typeof Promise == "function" ? Promise : void 0,
        ed =
            typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof Es < "u"
                ? function (e) {
                      return Es.resolve(null).then(e).catch(td);
                  }
                : $i;
    function td(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function Vi(e, t) {
        var n = t,
            r = 0;
        do {
            var l = n.nextSibling;
            if ((e.removeChild(n), l && l.nodeType === 8))
                if (((n = l.data), n === "/$")) {
                    if (r === 0) {
                        e.removeChild(l), lr(t);
                        return;
                    }
                    r--;
                } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
            n = l;
        } while (n);
        lr(t);
    }
    function Bt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (((t = e.data), t === "$" || t === "$!" || t === "$?"))
                    break;
                if (t === "/$") return null;
            }
        }
        return e;
    }
    function Cs(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--;
                } else n === "/$" && t++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    var Rn = Math.random().toString(36).slice(2),
        wt = "__reactFiber$" + Rn,
        mr = "__reactProps$" + Rn,
        _t = "__reactContainer$" + Rn,
        Hi = "__reactEvents$" + Rn,
        nd = "__reactListeners$" + Rn,
        rd = "__reactHandles$" + Rn;
    function nn(e) {
        var t = e[wt];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
            if ((t = n[_t] || n[wt])) {
                if (
                    ((n = t.alternate),
                    t.child !== null || (n !== null && n.child !== null))
                )
                    for (e = Cs(e); e !== null; ) {
                        if ((n = e[wt])) return n;
                        e = Cs(e);
                    }
                return t;
            }
            (e = n), (n = e.parentNode);
        }
        return null;
    }
    function vr(e) {
        return (
            (e = e[wt] || e[_t]),
            !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
                ? null
                : e
        );
    }
    function Tn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(a(33));
    }
    function al(e) {
        return e[mr] || null;
    }
    var Wi = [],
        Ln = -1;
    function At(e) {
        return { current: e };
    }
    function fe(e) {
        0 > Ln || ((e.current = Wi[Ln]), (Wi[Ln] = null), Ln--);
    }
    function ae(e, t) {
        Ln++, (Wi[Ln] = e.current), (e.current = t);
    }
    var $t = {},
        Me = At($t),
        We = At(!1),
        rn = $t;
    function zn(e, t) {
        var n = e.type.contextTypes;
        if (!n) return $t;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
        var l = {},
            i;
        for (i in n) l[i] = t[i];
        return (
            r &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = t),
                (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
        );
    }
    function Qe(e) {
        return (e = e.childContextTypes), e != null;
    }
    function cl() {
        fe(We), fe(Me);
    }
    function _s(e, t, n) {
        if (Me.current !== $t) throw Error(a(168));
        ae(Me, t), ae(We, n);
    }
    function Ps(e, t, n) {
        var r = e.stateNode;
        if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
            return n;
        r = r.getChildContext();
        for (var l in r)
            if (!(l in t)) throw Error(a(108, ue(e) || "Unknown", l));
        return d({}, n, r);
    }
    function fl(e) {
        return (
            (e =
                ((e = e.stateNode) &&
                    e.__reactInternalMemoizedMergedChildContext) ||
                $t),
            (rn = Me.current),
            ae(Me, e),
            ae(We, We.current),
            !0
        );
    }
    function Ns(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(a(169));
        n
            ? ((e = Ps(e, t, rn)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              fe(We),
              fe(Me),
              ae(Me, e))
            : fe(We),
            ae(We, n);
    }
    var Pt = null,
        dl = !1,
        Qi = !1;
    function js(e) {
        Pt === null ? (Pt = [e]) : Pt.push(e);
    }
    function ld(e) {
        (dl = !0), js(e);
    }
    function Vt() {
        if (!Qi && Pt !== null) {
            Qi = !0;
            var e = 0,
                t = ie;
            try {
                var n = Pt;
                for (ie = 1; e < n.length; e++) {
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                (Pt = null), (dl = !1);
            } catch (l) {
                throw (Pt !== null && (Pt = Pt.slice(e + 1)), Tu(pi, Vt), l);
            } finally {
                (ie = t), (Qi = !1);
            }
        }
        return null;
    }
    var On = [],
        Mn = 0,
        pl = null,
        hl = 0,
        rt = [],
        lt = 0,
        ln = null,
        Nt = 1,
        jt = "";
    function on(e, t) {
        (On[Mn++] = hl), (On[Mn++] = pl), (pl = e), (hl = t);
    }
    function Rs(e, t, n) {
        (rt[lt++] = Nt), (rt[lt++] = jt), (rt[lt++] = ln), (ln = e);
        var r = Nt;
        e = jt;
        var l = 32 - ct(r) - 1;
        (r &= ~(1 << l)), (n += 1);
        var i = 32 - ct(t) + l;
        if (30 < i) {
            var u = l - (l % 5);
            (i = (r & ((1 << u) - 1)).toString(32)),
                (r >>= u),
                (l -= u),
                (Nt = (1 << (32 - ct(t) + l)) | (n << l) | r),
                (jt = i + e);
        } else (Nt = (1 << i) | (n << l) | r), (jt = e);
    }
    function Ki(e) {
        e.return !== null && (on(e, 1), Rs(e, 1, 0));
    }
    function qi(e) {
        for (; e === pl; )
            (pl = On[--Mn]), (On[Mn] = null), (hl = On[--Mn]), (On[Mn] = null);
        for (; e === ln; )
            (ln = rt[--lt]),
                (rt[lt] = null),
                (jt = rt[--lt]),
                (rt[lt] = null),
                (Nt = rt[--lt]),
                (rt[lt] = null);
    }
    var be = null,
        et = null,
        de = !1,
        dt = null;
    function Ts(e, t) {
        var n = st(5, null, null, 0);
        (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (t = e.deletions),
            t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
    }
    function Ls(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return (
                    (t =
                        t.nodeType !== 1 ||
                        n.toLowerCase() !== t.nodeName.toLowerCase()
                            ? null
                            : t),
                    t !== null
                        ? ((e.stateNode = t),
                          (be = e),
                          (et = Bt(t.firstChild)),
                          !0)
                        : !1
                );
            case 6:
                return (
                    (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                    t !== null
                        ? ((e.stateNode = t), (be = e), (et = null), !0)
                        : !1
                );
            case 13:
                return (
                    (t = t.nodeType !== 8 ? null : t),
                    t !== null
                        ? ((n = ln !== null ? { id: Nt, overflow: jt } : null),
                          (e.memoizedState = {
                              dehydrated: t,
                              treeContext: n,
                              retryLane: 1073741824,
                          }),
                          (n = st(18, null, null, 0)),
                          (n.stateNode = t),
                          (n.return = e),
                          (e.child = n),
                          (be = e),
                          (et = null),
                          !0)
                        : !1
                );
            default:
                return !1;
        }
    }
    function Yi(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Xi(e) {
        if (de) {
            var t = et;
            if (t) {
                var n = t;
                if (!Ls(e, t)) {
                    if (Yi(e)) throw Error(a(418));
                    t = Bt(n.nextSibling);
                    var r = be;
                    t && Ls(e, t)
                        ? Ts(r, n)
                        : ((e.flags = (e.flags & -4097) | 2),
                          (de = !1),
                          (be = e));
                }
            } else {
                if (Yi(e)) throw Error(a(418));
                (e.flags = (e.flags & -4097) | 2), (de = !1), (be = e);
            }
        }
    }
    function zs(e) {
        for (
            e = e.return;
            e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

        )
            e = e.return;
        be = e;
    }
    function ml(e) {
        if (e !== be) return !1;
        if (!de) return zs(e), (de = !0), !1;
        var t;
        if (
            ((t = e.tag !== 3) &&
                !(t = e.tag !== 5) &&
                ((t = e.type),
                (t =
                    t !== "head" &&
                    t !== "body" &&
                    !Ai(e.type, e.memoizedProps))),
            t && (t = et))
        ) {
            if (Yi(e)) throw (Os(), Error(a(418)));
            for (; t; ) Ts(e, t), (t = Bt(t.nextSibling));
        }
        if ((zs(e), e.tag === 13)) {
            if (
                ((e = e.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
            )
                throw Error(a(317));
            e: {
                for (e = e.nextSibling, t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                et = Bt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                    }
                    e = e.nextSibling;
                }
                et = null;
            }
        } else et = be ? Bt(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Os() {
        for (var e = et; e; ) e = Bt(e.nextSibling);
    }
    function In() {
        (et = be = null), (de = !1);
    }
    function Gi(e) {
        dt === null ? (dt = [e]) : dt.push(e);
    }
    var id = oe.ReactCurrentBatchConfig;
    function pt(e, t) {
        if (e && e.defaultProps) {
            (t = d({}, t)), (e = e.defaultProps);
            for (var n in e) t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    var vl = At(null),
        yl = null,
        Dn = null,
        Ji = null;
    function Zi() {
        Ji = Dn = yl = null;
    }
    function bi(e) {
        var t = vl.current;
        fe(vl), (e._currentValue = t);
    }
    function eo(e, t, n) {
        for (; e !== null; ) {
            var r = e.alternate;
            if (
                ((e.childLanes & t) !== t
                    ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                    : r !== null &&
                      (r.childLanes & t) !== t &&
                      (r.childLanes |= t),
                e === n)
            )
                break;
            e = e.return;
        }
    }
    function Un(e, t) {
        (yl = e),
            (Ji = Dn = null),
            (e = e.dependencies),
            e !== null &&
                e.firstContext !== null &&
                (e.lanes & t && (Ke = !0), (e.firstContext = null));
    }
    function it(e) {
        var t = e._currentValue;
        if (Ji !== e)
            if (
                ((e = { context: e, memoizedValue: t, next: null }),
                Dn === null)
            ) {
                if (yl === null) throw Error(a(308));
                (Dn = e), (yl.dependencies = { lanes: 0, firstContext: e });
            } else Dn = Dn.next = e;
        return t;
    }
    var un = null;
    function to(e) {
        un === null ? (un = [e]) : un.push(e);
    }
    function Ms(e, t, n, r) {
        var l = t.interleaved;
        return (
            l === null
                ? ((n.next = n), to(t))
                : ((n.next = l.next), (l.next = n)),
            (t.interleaved = n),
            Rt(e, r)
        );
    }
    function Rt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
            (e.childLanes |= t),
                (n = e.alternate),
                n !== null && (n.childLanes |= t),
                (n = e),
                (e = e.return);
        return n.tag === 3 ? n.stateNode : null;
    }
    var Ht = !1;
    function no(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
        };
    }
    function Is(e, t) {
        (e = e.updateQueue),
            t.updateQueue === e &&
                (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects,
                });
    }
    function Tt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
        };
    }
    function Wt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (((r = r.shared), ee & 2)) {
            var l = r.pending;
            return (
                l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
                (r.pending = t),
                Rt(e, n)
            );
        }
        return (
            (l = r.interleaved),
            l === null
                ? ((t.next = t), to(r))
                : ((t.next = l.next), (l.next = t)),
            (r.interleaved = t),
            Rt(e, n)
        );
    }
    function gl(e, t, n) {
        if (
            ((t = t.updateQueue),
            t !== null && ((t = t.shared), (n & 4194240) !== 0))
        ) {
            var r = t.lanes;
            (r &= e.pendingLanes), (n |= r), (t.lanes = n), vi(e, n);
        }
    }
    function Ds(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (r !== null && ((r = r.updateQueue), n === r)) {
            var l = null,
                i = null;
            if (((n = n.firstBaseUpdate), n !== null)) {
                do {
                    var u = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null,
                    };
                    i === null ? (l = i = u) : (i = i.next = u), (n = n.next);
                } while (n !== null);
                i === null ? (l = i = t) : (i = i.next = t);
            } else l = i = t;
            (n = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
            }),
                (e.updateQueue = n);
            return;
        }
        (e = n.lastBaseUpdate),
            e === null ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t);
    }
    function wl(e, t, n, r) {
        var l = e.updateQueue;
        Ht = !1;
        var i = l.firstBaseUpdate,
            u = l.lastBaseUpdate,
            c = l.shared.pending;
        if (c !== null) {
            l.shared.pending = null;
            var f = c,
                w = f.next;
            (f.next = null), u === null ? (i = w) : (u.next = w), (u = f);
            var C = e.alternate;
            C !== null &&
                ((C = C.updateQueue),
                (c = C.lastBaseUpdate),
                c !== u &&
                    (c === null ? (C.firstBaseUpdate = w) : (c.next = w),
                    (C.lastBaseUpdate = f)));
        }
        if (i !== null) {
            var P = l.baseState;
            (u = 0), (C = w = f = null), (c = i);
            do {
                var k = c.lane,
                    z = c.eventTime;
                if ((r & k) === k) {
                    C !== null &&
                        (C = C.next =
                            {
                                eventTime: z,
                                lane: 0,
                                tag: c.tag,
                                payload: c.payload,
                                callback: c.callback,
                                next: null,
                            });
                    e: {
                        var I = e,
                            U = c;
                        switch (((k = t), (z = n), U.tag)) {
                            case 1:
                                if (((I = U.payload), typeof I == "function")) {
                                    P = I.call(z, P, k);
                                    break e;
                                }
                                P = I;
                                break e;
                            case 3:
                                I.flags = (I.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((I = U.payload),
                                    (k =
                                        typeof I == "function"
                                            ? I.call(z, P, k)
                                            : I),
                                    k == null)
                                )
                                    break e;
                                P = d({}, P, k);
                                break e;
                            case 2:
                                Ht = !0;
                        }
                    }
                    c.callback !== null &&
                        c.lane !== 0 &&
                        ((e.flags |= 64),
                        (k = l.effects),
                        k === null ? (l.effects = [c]) : k.push(c));
                } else
                    (z = {
                        eventTime: z,
                        lane: k,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null,
                    }),
                        C === null ? ((w = C = z), (f = P)) : (C = C.next = z),
                        (u |= k);
                if (((c = c.next), c === null)) {
                    if (((c = l.shared.pending), c === null)) break;
                    (k = c),
                        (c = k.next),
                        (k.next = null),
                        (l.lastBaseUpdate = k),
                        (l.shared.pending = null);
                }
            } while (1);
            if (
                (C === null && (f = P),
                (l.baseState = f),
                (l.firstBaseUpdate = w),
                (l.lastBaseUpdate = C),
                (t = l.shared.interleaved),
                t !== null)
            ) {
                l = t;
                do (u |= l.lane), (l = l.next);
                while (l !== t);
            } else i === null && (l.shared.lanes = 0);
            (cn |= u), (e.lanes = u), (e.memoizedState = P);
        }
    }
    function Us(e, t, n) {
        if (((e = t.effects), (t.effects = null), e !== null))
            for (t = 0; t < e.length; t++) {
                var r = e[t],
                    l = r.callback;
                if (l !== null) {
                    if (((r.callback = null), (r = n), typeof l != "function"))
                        throw Error(a(191, l));
                    l.call(r);
                }
            }
    }
    var Fs = new o.Component().refs;
    function ro(e, t, n, r) {
        (t = e.memoizedState),
            (n = n(r, t)),
            (n = n == null ? t : d({}, t, n)),
            (e.memoizedState = n),
            e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Sl = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? tn(e) === e : !1;
        },
        enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ae(),
                l = Yt(e),
                i = Tt(r, l);
            (i.payload = t),
                n != null && (i.callback = n),
                (t = Wt(e, i, l)),
                t !== null && (vt(t, e, l, r), gl(t, e, l));
        },
        enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ae(),
                l = Yt(e),
                i = Tt(r, l);
            (i.tag = 1),
                (i.payload = t),
                n != null && (i.callback = n),
                (t = Wt(e, i, l)),
                t !== null && (vt(t, e, l, r), gl(t, e, l));
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Ae(),
                r = Yt(e),
                l = Tt(n, r);
            (l.tag = 2),
                t != null && (l.callback = t),
                (t = Wt(e, l, r)),
                t !== null && (vt(t, e, r, n), gl(t, e, r));
        },
    };
    function Bs(e, t, n, r, l, i, u) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == "function"
                ? e.shouldComponentUpdate(r, i, u)
                : t.prototype && t.prototype.isPureReactComponent
                ? !cr(n, r) || !cr(l, i)
                : !0
        );
    }
    function As(e, t, n) {
        var r = !1,
            l = $t,
            i = t.contextType;
        return (
            typeof i == "object" && i !== null
                ? (i = it(i))
                : ((l = Qe(t) ? rn : Me.current),
                  (r = t.contextTypes),
                  (i = (r = r != null) ? zn(e, l) : $t)),
            (t = new t(n, i)),
            (e.memoizedState =
                t.state !== null && t.state !== void 0 ? t.state : null),
            (t.updater = Sl),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = l),
                (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
        );
    }
    function $s(e, t, n, r) {
        (e = t.state),
            typeof t.componentWillReceiveProps == "function" &&
                t.componentWillReceiveProps(n, r),
            typeof t.UNSAFE_componentWillReceiveProps == "function" &&
                t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Sl.enqueueReplaceState(t, t.state, null);
    }
    function lo(e, t, n, r) {
        var l = e.stateNode;
        (l.props = n), (l.state = e.memoizedState), (l.refs = Fs), no(e);
        var i = t.contextType;
        typeof i == "object" && i !== null
            ? (l.context = it(i))
            : ((i = Qe(t) ? rn : Me.current), (l.context = zn(e, i))),
            (l.state = e.memoizedState),
            (i = t.getDerivedStateFromProps),
            typeof i == "function" &&
                (ro(e, t, i, n), (l.state = e.memoizedState)),
            typeof t.getDerivedStateFromProps == "function" ||
                typeof l.getSnapshotBeforeUpdate == "function" ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                    typeof l.componentWillMount != "function") ||
                ((t = l.state),
                typeof l.componentWillMount == "function" &&
                    l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                    l.UNSAFE_componentWillMount(),
                t !== l.state && Sl.enqueueReplaceState(l, l.state, null),
                wl(e, n, l, r),
                (l.state = e.memoizedState)),
            typeof l.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function yr(e, t, n) {
        if (
            ((e = n.ref),
            e !== null && typeof e != "function" && typeof e != "object")
        ) {
            if (n._owner) {
                if (((n = n._owner), n)) {
                    if (n.tag !== 1) throw Error(a(309));
                    var r = n.stateNode;
                }
                if (!r) throw Error(a(147, e));
                var l = r,
                    i = "" + e;
                return t !== null &&
                    t.ref !== null &&
                    typeof t.ref == "function" &&
                    t.ref._stringRef === i
                    ? t.ref
                    : ((t = function (u) {
                          var c = l.refs;
                          c === Fs && (c = l.refs = {}),
                              u === null ? delete c[i] : (c[i] = u);
                      }),
                      (t._stringRef = i),
                      t);
            }
            if (typeof e != "string") throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
        }
        return e;
    }
    function xl(e, t) {
        throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
                a(
                    31,
                    e === "[object Object]"
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : e
                )
            ))
        );
    }
    function Vs(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Hs(e) {
        function t(y, h) {
            if (e) {
                var g = y.deletions;
                g === null ? ((y.deletions = [h]), (y.flags |= 16)) : g.push(h);
            }
        }
        function n(y, h) {
            if (!e) return null;
            for (; h !== null; ) t(y, h), (h = h.sibling);
            return null;
        }
        function r(y, h) {
            for (y = new Map(); h !== null; )
                h.key !== null ? y.set(h.key, h) : y.set(h.index, h),
                    (h = h.sibling);
            return y;
        }
        function l(y, h) {
            return (y = Gt(y, h)), (y.index = 0), (y.sibling = null), y;
        }
        function i(y, h, g) {
            return (
                (y.index = g),
                e
                    ? ((g = y.alternate),
                      g !== null
                          ? ((g = g.index), g < h ? ((y.flags |= 2), h) : g)
                          : ((y.flags |= 2), h))
                    : ((y.flags |= 1048576), h)
            );
        }
        function u(y) {
            return e && y.alternate === null && (y.flags |= 2), y;
        }
        function c(y, h, g, j) {
            return h === null || h.tag !== 6
                ? ((h = Vo(g, y.mode, j)), (h.return = y), h)
                : ((h = l(h, g)), (h.return = y), h);
        }
        function f(y, h, g, j) {
            var F = g.type;
            return F === ze
                ? C(y, h, g.props.children, j, g.key)
                : h !== null &&
                  (h.elementType === F ||
                      (typeof F == "object" &&
                          F !== null &&
                          F.$$typeof === Pe &&
                          Vs(F) === h.type))
                ? ((j = l(h, g.props)),
                  (j.ref = yr(y, h, g)),
                  (j.return = y),
                  j)
                : ((j = Al(g.type, g.key, g.props, null, y.mode, j)),
                  (j.ref = yr(y, h, g)),
                  (j.return = y),
                  j);
        }
        function w(y, h, g, j) {
            return h === null ||
                h.tag !== 4 ||
                h.stateNode.containerInfo !== g.containerInfo ||
                h.stateNode.implementation !== g.implementation
                ? ((h = Ho(g, y.mode, j)), (h.return = y), h)
                : ((h = l(h, g.children || [])), (h.return = y), h);
        }
        function C(y, h, g, j, F) {
            return h === null || h.tag !== 7
                ? ((h = hn(g, y.mode, j, F)), (h.return = y), h)
                : ((h = l(h, g)), (h.return = y), h);
        }
        function P(y, h, g) {
            if ((typeof h == "string" && h !== "") || typeof h == "number")
                return (h = Vo("" + h, y.mode, g)), (h.return = y), h;
            if (typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                    case ke:
                        return (
                            (g = Al(h.type, h.key, h.props, null, y.mode, g)),
                            (g.ref = yr(y, null, h)),
                            (g.return = y),
                            g
                        );
                    case ye:
                        return (h = Ho(h, y.mode, g)), (h.return = y), h;
                    case Pe:
                        var j = h._init;
                        return P(y, j(h._payload), g);
                }
                if (Kn(h) || W(h))
                    return (h = hn(h, y.mode, g, null)), (h.return = y), h;
                xl(y, h);
            }
            return null;
        }
        function k(y, h, g, j) {
            var F = h !== null ? h.key : null;
            if ((typeof g == "string" && g !== "") || typeof g == "number")
                return F !== null ? null : c(y, h, "" + g, j);
            if (typeof g == "object" && g !== null) {
                switch (g.$$typeof) {
                    case ke:
                        return g.key === F ? f(y, h, g, j) : null;
                    case ye:
                        return g.key === F ? w(y, h, g, j) : null;
                    case Pe:
                        return (F = g._init), k(y, h, F(g._payload), j);
                }
                if (Kn(g) || W(g))
                    return F !== null ? null : C(y, h, g, j, null);
                xl(y, g);
            }
            return null;
        }
        function z(y, h, g, j, F) {
            if ((typeof j == "string" && j !== "") || typeof j == "number")
                return (y = y.get(g) || null), c(h, y, "" + j, F);
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                    case ke:
                        return (
                            (y = y.get(j.key === null ? g : j.key) || null),
                            f(h, y, j, F)
                        );
                    case ye:
                        return (
                            (y = y.get(j.key === null ? g : j.key) || null),
                            w(h, y, j, F)
                        );
                    case Pe:
                        var V = j._init;
                        return z(y, h, g, V(j._payload), F);
                }
                if (Kn(j) || W(j))
                    return (y = y.get(g) || null), C(h, y, j, F, null);
                xl(h, j);
            }
            return null;
        }
        function I(y, h, g, j) {
            for (
                var F = null, V = null, H = h, K = (h = 0), Re = null;
                H !== null && K < g.length;
                K++
            ) {
                H.index > K ? ((Re = H), (H = null)) : (Re = H.sibling);
                var te = k(y, H, g[K], j);
                if (te === null) {
                    H === null && (H = Re);
                    break;
                }
                e && H && te.alternate === null && t(y, H),
                    (h = i(te, h, K)),
                    V === null ? (F = te) : (V.sibling = te),
                    (V = te),
                    (H = Re);
            }
            if (K === g.length) return n(y, H), de && on(y, K), F;
            if (H === null) {
                for (; K < g.length; K++)
                    (H = P(y, g[K], j)),
                        H !== null &&
                            ((h = i(H, h, K)),
                            V === null ? (F = H) : (V.sibling = H),
                            (V = H));
                return de && on(y, K), F;
            }
            for (H = r(y, H); K < g.length; K++)
                (Re = z(H, y, K, g[K], j)),
                    Re !== null &&
                        (e &&
                            Re.alternate !== null &&
                            H.delete(Re.key === null ? K : Re.key),
                        (h = i(Re, h, K)),
                        V === null ? (F = Re) : (V.sibling = Re),
                        (V = Re));
            return (
                e &&
                    H.forEach(function (Jt) {
                        return t(y, Jt);
                    }),
                de && on(y, K),
                F
            );
        }
        function U(y, h, g, j) {
            var F = W(g);
            if (typeof F != "function") throw Error(a(150));
            if (((g = F.call(g)), g == null)) throw Error(a(151));
            for (
                var V = (F = null),
                    H = h,
                    K = (h = 0),
                    Re = null,
                    te = g.next();
                H !== null && !te.done;
                K++, te = g.next()
            ) {
                H.index > K ? ((Re = H), (H = null)) : (Re = H.sibling);
                var Jt = k(y, H, te.value, j);
                if (Jt === null) {
                    H === null && (H = Re);
                    break;
                }
                e && H && Jt.alternate === null && t(y, H),
                    (h = i(Jt, h, K)),
                    V === null ? (F = Jt) : (V.sibling = Jt),
                    (V = Jt),
                    (H = Re);
            }
            if (te.done) return n(y, H), de && on(y, K), F;
            if (H === null) {
                for (; !te.done; K++, te = g.next())
                    (te = P(y, te.value, j)),
                        te !== null &&
                            ((h = i(te, h, K)),
                            V === null ? (F = te) : (V.sibling = te),
                            (V = te));
                return de && on(y, K), F;
            }
            for (H = r(y, H); !te.done; K++, te = g.next())
                (te = z(H, y, K, te.value, j)),
                    te !== null &&
                        (e &&
                            te.alternate !== null &&
                            H.delete(te.key === null ? K : te.key),
                        (h = i(te, h, K)),
                        V === null ? (F = te) : (V.sibling = te),
                        (V = te));
            return (
                e &&
                    H.forEach(function (Fd) {
                        return t(y, Fd);
                    }),
                de && on(y, K),
                F
            );
        }
        function we(y, h, g, j) {
            if (
                (typeof g == "object" &&
                    g !== null &&
                    g.type === ze &&
                    g.key === null &&
                    (g = g.props.children),
                typeof g == "object" && g !== null)
            ) {
                switch (g.$$typeof) {
                    case ke:
                        e: {
                            for (var F = g.key, V = h; V !== null; ) {
                                if (V.key === F) {
                                    if (((F = g.type), F === ze)) {
                                        if (V.tag === 7) {
                                            n(y, V.sibling),
                                                (h = l(V, g.props.children)),
                                                (h.return = y),
                                                (y = h);
                                            break e;
                                        }
                                    } else if (
                                        V.elementType === F ||
                                        (typeof F == "object" &&
                                            F !== null &&
                                            F.$$typeof === Pe &&
                                            Vs(F) === V.type)
                                    ) {
                                        n(y, V.sibling),
                                            (h = l(V, g.props)),
                                            (h.ref = yr(y, V, g)),
                                            (h.return = y),
                                            (y = h);
                                        break e;
                                    }
                                    n(y, V);
                                    break;
                                } else t(y, V);
                                V = V.sibling;
                            }
                            g.type === ze
                                ? ((h = hn(g.props.children, y.mode, j, g.key)),
                                  (h.return = y),
                                  (y = h))
                                : ((j = Al(
                                      g.type,
                                      g.key,
                                      g.props,
                                      null,
                                      y.mode,
                                      j
                                  )),
                                  (j.ref = yr(y, h, g)),
                                  (j.return = y),
                                  (y = j));
                        }
                        return u(y);
                    case ye:
                        e: {
                            for (V = g.key; h !== null; ) {
                                if (h.key === V)
                                    if (
                                        h.tag === 4 &&
                                        h.stateNode.containerInfo ===
                                            g.containerInfo &&
                                        h.stateNode.implementation ===
                                            g.implementation
                                    ) {
                                        n(y, h.sibling),
                                            (h = l(h, g.children || [])),
                                            (h.return = y),
                                            (y = h);
                                        break e;
                                    } else {
                                        n(y, h);
                                        break;
                                    }
                                else t(y, h);
                                h = h.sibling;
                            }
                            (h = Ho(g, y.mode, j)), (h.return = y), (y = h);
                        }
                        return u(y);
                    case Pe:
                        return (V = g._init), we(y, h, V(g._payload), j);
                }
                if (Kn(g)) return I(y, h, g, j);
                if (W(g)) return U(y, h, g, j);
                xl(y, g);
            }
            return (typeof g == "string" && g !== "") || typeof g == "number"
                ? ((g = "" + g),
                  h !== null && h.tag === 6
                      ? (n(y, h.sibling),
                        (h = l(h, g)),
                        (h.return = y),
                        (y = h))
                      : (n(y, h),
                        (h = Vo(g, y.mode, j)),
                        (h.return = y),
                        (y = h)),
                  u(y))
                : n(y, h);
        }
        return we;
    }
    var Fn = Hs(!0),
        Ws = Hs(!1),
        gr = {},
        St = At(gr),
        wr = At(gr),
        Sr = At(gr);
    function sn(e) {
        if (e === gr) throw Error(a(174));
        return e;
    }
    function io(e, t) {
        switch ((ae(Sr, t), ae(wr, e), ae(St, gr), (e = t.nodeType), e)) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : li(null, "");
                break;
            default:
                (e = e === 8 ? t.parentNode : t),
                    (t = e.namespaceURI || null),
                    (e = e.tagName),
                    (t = li(t, e));
        }
        fe(St), ae(St, t);
    }
    function Bn() {
        fe(St), fe(wr), fe(Sr);
    }
    function Qs(e) {
        sn(Sr.current);
        var t = sn(St.current),
            n = li(t, e.type);
        t !== n && (ae(wr, e), ae(St, n));
    }
    function oo(e) {
        wr.current === e && (fe(St), fe(wr));
    }
    var he = At(0);
    function kl(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (
                    n !== null &&
                    ((n = n.dehydrated),
                    n === null || n.data === "$?" || n.data === "$!")
                )
                    return t;
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128) return t;
            } else if (t.child !== null) {
                (t.child.return = t), (t = t.child);
                continue;
            }
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return null;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
    }
    var uo = [];
    function so() {
        for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
        uo.length = 0;
    }
    var El = oe.ReactCurrentDispatcher,
        ao = oe.ReactCurrentBatchConfig,
        an = 0,
        me = null,
        Ee = null,
        Ne = null,
        Cl = !1,
        xr = !1,
        kr = 0,
        od = 0;
    function Ie() {
        throw Error(a(321));
    }
    function co(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!ft(e[n], t[n])) return !1;
        return !0;
    }
    function fo(e, t, n, r, l, i) {
        if (
            ((an = i),
            (me = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (El.current = e === null || e.memoizedState === null ? cd : fd),
            (e = n(r, l)),
            xr)
        ) {
            i = 0;
            do {
                if (((xr = !1), (kr = 0), 25 <= i)) throw Error(a(301));
                (i += 1),
                    (Ne = Ee = null),
                    (t.updateQueue = null),
                    (El.current = dd),
                    (e = n(r, l));
            } while (xr);
        }
        if (
            ((El.current = Nl),
            (t = Ee !== null && Ee.next !== null),
            (an = 0),
            (Ne = Ee = me = null),
            (Cl = !1),
            t)
        )
            throw Error(a(300));
        return e;
    }
    function po() {
        var e = kr !== 0;
        return (kr = 0), e;
    }
    function xt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        };
        return (
            Ne === null ? (me.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne
        );
    }
    function ot() {
        if (Ee === null) {
            var e = me.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = Ee.next;
        var t = Ne === null ? me.memoizedState : Ne.next;
        if (t !== null) (Ne = t), (Ee = e);
        else {
            if (e === null) throw Error(a(310));
            (Ee = e),
                (e = {
                    memoizedState: Ee.memoizedState,
                    baseState: Ee.baseState,
                    baseQueue: Ee.baseQueue,
                    queue: Ee.queue,
                    next: null,
                }),
                Ne === null ? (me.memoizedState = Ne = e) : (Ne = Ne.next = e);
        }
        return Ne;
    }
    function Er(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function ho(e) {
        var t = ot(),
            n = t.queue;
        if (n === null) throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = Ee,
            l = r.baseQueue,
            i = n.pending;
        if (i !== null) {
            if (l !== null) {
                var u = l.next;
                (l.next = i.next), (i.next = u);
            }
            (r.baseQueue = l = i), (n.pending = null);
        }
        if (l !== null) {
            (i = l.next), (r = r.baseState);
            var c = (u = null),
                f = null,
                w = i;
            do {
                var C = w.lane;
                if ((an & C) === C)
                    f !== null &&
                        (f = f.next =
                            {
                                lane: 0,
                                action: w.action,
                                hasEagerState: w.hasEagerState,
                                eagerState: w.eagerState,
                                next: null,
                            }),
                        (r = w.hasEagerState ? w.eagerState : e(r, w.action));
                else {
                    var P = {
                        lane: C,
                        action: w.action,
                        hasEagerState: w.hasEagerState,
                        eagerState: w.eagerState,
                        next: null,
                    };
                    f === null ? ((c = f = P), (u = r)) : (f = f.next = P),
                        (me.lanes |= C),
                        (cn |= C);
                }
                w = w.next;
            } while (w !== null && w !== i);
            f === null ? (u = r) : (f.next = c),
                ft(r, t.memoizedState) || (Ke = !0),
                (t.memoizedState = r),
                (t.baseState = u),
                (t.baseQueue = f),
                (n.lastRenderedState = r);
        }
        if (((e = n.interleaved), e !== null)) {
            l = e;
            do (i = l.lane), (me.lanes |= i), (cn |= i), (l = l.next);
            while (l !== e);
        } else l === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch];
    }
    function mo(e) {
        var t = ot(),
            n = t.queue;
        if (n === null) throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            l = n.pending,
            i = t.memoizedState;
        if (l !== null) {
            n.pending = null;
            var u = (l = l.next);
            do (i = e(i, u.action)), (u = u.next);
            while (u !== l);
            ft(i, t.memoizedState) || (Ke = !0),
                (t.memoizedState = i),
                t.baseQueue === null && (t.baseState = i),
                (n.lastRenderedState = i);
        }
        return [i, r];
    }
    function Ks() {}
    function qs(e, t) {
        var n = me,
            r = ot(),
            l = t(),
            i = !ft(r.memoizedState, l);
        if (
            (i && ((r.memoizedState = l), (Ke = !0)),
            (r = r.queue),
            vo(Gs.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
                i ||
                (Ne !== null && Ne.memoizedState.tag & 1))
        ) {
            if (
                ((n.flags |= 2048),
                Cr(9, Xs.bind(null, n, r, l, t), void 0, null),
                je === null)
            )
                throw Error(a(349));
            an & 30 || Ys(n, t, l);
        }
        return l;
    }
    function Ys(e, t, n) {
        (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            (t = me.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }),
                  (me.updateQueue = t),
                  (t.stores = [e]))
                : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
    }
    function Xs(e, t, n, r) {
        (t.value = n), (t.getSnapshot = r), Js(t) && Zs(e);
    }
    function Gs(e, t, n) {
        return n(function () {
            Js(t) && Zs(e);
        });
    }
    function Js(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !ft(e, n);
        } catch {
            return !0;
        }
    }
    function Zs(e) {
        var t = Rt(e, 1);
        t !== null && vt(t, e, 1, -1);
    }
    function bs(e) {
        var t = xt();
        return (
            typeof e == "function" && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Er,
                lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ad.bind(null, me, e)),
            [t.memoizedState, e]
        );
    }
    function Cr(e, t, n, r) {
        return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            (t = me.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }),
                  (me.updateQueue = t),
                  (t.lastEffect = e.next = e))
                : ((n = t.lastEffect),
                  n === null
                      ? (t.lastEffect = e.next = e)
                      : ((r = n.next),
                        (n.next = e),
                        (e.next = r),
                        (t.lastEffect = e))),
            e
        );
    }
    function ea() {
        return ot().memoizedState;
    }
    function _l(e, t, n, r) {
        var l = xt();
        (me.flags |= e),
            (l.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r));
    }
    function Pl(e, t, n, r) {
        var l = ot();
        r = r === void 0 ? null : r;
        var i = void 0;
        if (Ee !== null) {
            var u = Ee.memoizedState;
            if (((i = u.destroy), r !== null && co(r, u.deps))) {
                l.memoizedState = Cr(t, n, i, r);
                return;
            }
        }
        (me.flags |= e), (l.memoizedState = Cr(1 | t, n, i, r));
    }
    function ta(e, t) {
        return _l(8390656, 8, e, t);
    }
    function vo(e, t) {
        return Pl(2048, 8, e, t);
    }
    function na(e, t) {
        return Pl(4, 2, e, t);
    }
    function ra(e, t) {
        return Pl(4, 4, e, t);
    }
    function la(e, t) {
        if (typeof t == "function")
            return (
                (e = e()),
                t(e),
                function () {
                    t(null);
                }
            );
        if (t != null)
            return (
                (e = e()),
                (t.current = e),
                function () {
                    t.current = null;
                }
            );
    }
    function ia(e, t, n) {
        return (
            (n = n != null ? n.concat([e]) : null),
            Pl(4, 4, la.bind(null, t, e), n)
        );
    }
    function yo() {}
    function oa(e, t) {
        var n = ot();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && co(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
    }
    function ua(e, t) {
        var n = ot();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && co(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function sa(e, t, n) {
        return an & 21
            ? (ft(n, t) ||
                  ((n = Mu()), (me.lanes |= n), (cn |= n), (e.baseState = !0)),
              t)
            : (e.baseState && ((e.baseState = !1), (Ke = !0)),
              (e.memoizedState = n));
    }
    function ud(e, t) {
        var n = ie;
        (ie = n !== 0 && 4 > n ? n : 4), e(!0);
        var r = ao.transition;
        ao.transition = {};
        try {
            e(!1), t();
        } finally {
            (ie = n), (ao.transition = r);
        }
    }
    function aa() {
        return ot().memoizedState;
    }
    function sd(e, t, n) {
        var r = Yt(e);
        if (
            ((n = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            ca(e))
        )
            fa(t, n);
        else if (((n = Ms(e, t, n, r)), n !== null)) {
            var l = Ae();
            vt(n, e, r, l), da(n, t, r);
        }
    }
    function ad(e, t, n) {
        var r = Yt(e),
            l = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            };
        if (ca(e)) fa(t, l);
        else {
            var i = e.alternate;
            if (
                e.lanes === 0 &&
                (i === null || i.lanes === 0) &&
                ((i = t.lastRenderedReducer), i !== null)
            )
                try {
                    var u = t.lastRenderedState,
                        c = i(u, n);
                    if (
                        ((l.hasEagerState = !0), (l.eagerState = c), ft(c, u))
                    ) {
                        var f = t.interleaved;
                        f === null
                            ? ((l.next = l), to(t))
                            : ((l.next = f.next), (f.next = l)),
                            (t.interleaved = l);
                        return;
                    }
                } catch {
                } finally {
                }
            (n = Ms(e, t, l, r)),
                n !== null && ((l = Ae()), vt(n, e, r, l), da(n, t, r));
        }
    }
    function ca(e) {
        var t = e.alternate;
        return e === me || (t !== null && t === me);
    }
    function fa(e, t) {
        xr = Cl = !0;
        var n = e.pending;
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
    }
    function da(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            (r &= e.pendingLanes), (n |= r), (t.lanes = n), vi(e, n);
        }
    }
    var Nl = {
            readContext: it,
            useCallback: Ie,
            useContext: Ie,
            useEffect: Ie,
            useImperativeHandle: Ie,
            useInsertionEffect: Ie,
            useLayoutEffect: Ie,
            useMemo: Ie,
            useReducer: Ie,
            useRef: Ie,
            useState: Ie,
            useDebugValue: Ie,
            useDeferredValue: Ie,
            useTransition: Ie,
            useMutableSource: Ie,
            useSyncExternalStore: Ie,
            useId: Ie,
            unstable_isNewReconciler: !1,
        },
        cd = {
            readContext: it,
            useCallback: function (e, t) {
                return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
            },
            useContext: it,
            useEffect: ta,
            useImperativeHandle: function (e, t, n) {
                return (
                    (n = n != null ? n.concat([e]) : null),
                    _l(4194308, 4, la.bind(null, t, e), n)
                );
            },
            useLayoutEffect: function (e, t) {
                return _l(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
                return _l(4, 2, e, t);
            },
            useMemo: function (e, t) {
                var n = xt();
                return (
                    (t = t === void 0 ? null : t),
                    (e = e()),
                    (n.memoizedState = [e, t]),
                    e
                );
            },
            useReducer: function (e, t, n) {
                var r = xt();
                return (
                    (t = n !== void 0 ? n(t) : t),
                    (r.memoizedState = r.baseState = t),
                    (e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t,
                    }),
                    (r.queue = e),
                    (e = e.dispatch = sd.bind(null, me, e)),
                    [r.memoizedState, e]
                );
            },
            useRef: function (e) {
                var t = xt();
                return (e = { current: e }), (t.memoizedState = e);
            },
            useState: bs,
            useDebugValue: yo,
            useDeferredValue: function (e) {
                return (xt().memoizedState = e);
            },
            useTransition: function () {
                var e = bs(!1),
                    t = e[0];
                return (
                    (e = ud.bind(null, e[1])), (xt().memoizedState = e), [t, e]
                );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
                var r = me,
                    l = xt();
                if (de) {
                    if (n === void 0) throw Error(a(407));
                    n = n();
                } else {
                    if (((n = t()), je === null)) throw Error(a(349));
                    an & 30 || Ys(r, t, n);
                }
                l.memoizedState = n;
                var i = { value: n, getSnapshot: t };
                return (
                    (l.queue = i),
                    ta(Gs.bind(null, r, i, e), [e]),
                    (r.flags |= 2048),
                    Cr(9, Xs.bind(null, r, i, n, t), void 0, null),
                    n
                );
            },
            useId: function () {
                var e = xt(),
                    t = je.identifierPrefix;
                if (de) {
                    var n = jt,
                        r = Nt;
                    (n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
                        (t = ":" + t + "R" + n),
                        (n = kr++),
                        0 < n && (t += "H" + n.toString(32)),
                        (t += ":");
                } else (n = od++), (t = ":" + t + "r" + n.toString(32) + ":");
                return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
        },
        fd = {
            readContext: it,
            useCallback: oa,
            useContext: it,
            useEffect: vo,
            useImperativeHandle: ia,
            useInsertionEffect: na,
            useLayoutEffect: ra,
            useMemo: ua,
            useReducer: ho,
            useRef: ea,
            useState: function () {
                return ho(Er);
            },
            useDebugValue: yo,
            useDeferredValue: function (e) {
                var t = ot();
                return sa(t, Ee.memoizedState, e);
            },
            useTransition: function () {
                var e = ho(Er)[0],
                    t = ot().memoizedState;
                return [e, t];
            },
            useMutableSource: Ks,
            useSyncExternalStore: qs,
            useId: aa,
            unstable_isNewReconciler: !1,
        },
        dd = {
            readContext: it,
            useCallback: oa,
            useContext: it,
            useEffect: vo,
            useImperativeHandle: ia,
            useInsertionEffect: na,
            useLayoutEffect: ra,
            useMemo: ua,
            useReducer: mo,
            useRef: ea,
            useState: function () {
                return mo(Er);
            },
            useDebugValue: yo,
            useDeferredValue: function (e) {
                var t = ot();
                return Ee === null
                    ? (t.memoizedState = e)
                    : sa(t, Ee.memoizedState, e);
            },
            useTransition: function () {
                var e = mo(Er)[0],
                    t = ot().memoizedState;
                return [e, t];
            },
            useMutableSource: Ks,
            useSyncExternalStore: qs,
            useId: aa,
            unstable_isNewReconciler: !1,
        };
    function An(e, t) {
        try {
            var n = "",
                r = t;
            do (n += se(r)), (r = r.return);
            while (r);
            var l = n;
        } catch (i) {
            l =
                `
Error generating stack: ` +
                i.message +
                `
` +
                i.stack;
        }
        return { value: e, source: t, stack: l, digest: null };
    }
    function go(e, t, n) {
        return { value: e, source: null, stack: n ?? null, digest: t ?? null };
    }
    function wo(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function () {
                throw n;
            });
        }
    }
    var pd = typeof WeakMap == "function" ? WeakMap : Map;
    function pa(e, t, n) {
        (n = Tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
            (n.callback = function () {
                Ml || ((Ml = !0), (Mo = r)), wo(e, t);
            }),
            n
        );
    }
    function ha(e, t, n) {
        (n = Tt(-1, n)), (n.tag = 3);
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = t.value;
            (n.payload = function () {
                return r(l);
            }),
                (n.callback = function () {
                    wo(e, t);
                });
        }
        var i = e.stateNode;
        return (
            i !== null &&
                typeof i.componentDidCatch == "function" &&
                (n.callback = function () {
                    wo(e, t),
                        typeof r != "function" &&
                            (Kt === null
                                ? (Kt = new Set([this]))
                                : Kt.add(this));
                    var u = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: u !== null ? u : "",
                    });
                }),
            n
        );
    }
    function ma(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new pd();
            var l = new Set();
            r.set(t, l);
        } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
        l.has(n) || (l.add(n), (e = Nd.bind(null, e, t, n)), t.then(e, e));
    }
    function va(e) {
        do {
            var t;
            if (
                ((t = e.tag === 13) &&
                    ((t = e.memoizedState),
                    (t = t !== null ? t.dehydrated !== null : !0)),
                t)
            )
                return e;
            e = e.return;
        } while (e !== null);
        return null;
    }
    function ya(e, t, n, r, l) {
        return e.mode & 1
            ? ((e.flags |= 65536), (e.lanes = l), e)
            : (e === t
                  ? (e.flags |= 65536)
                  : ((e.flags |= 128),
                    (n.flags |= 131072),
                    (n.flags &= -52805),
                    n.tag === 1 &&
                        (n.alternate === null
                            ? (n.tag = 17)
                            : ((t = Tt(-1, 1)), (t.tag = 2), Wt(n, t, 1))),
                    (n.lanes |= 1)),
              e);
    }
    var hd = oe.ReactCurrentOwner,
        Ke = !1;
    function Be(e, t, n, r) {
        t.child = e === null ? Ws(t, null, n, r) : Fn(t, e.child, n, r);
    }
    function ga(e, t, n, r, l) {
        n = n.render;
        var i = t.ref;
        return (
            Un(t, l),
            (r = fo(e, t, n, r, i, l)),
            (n = po()),
            e !== null && !Ke
                ? ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~l),
                  Lt(e, t, l))
                : (de && n && Ki(t), (t.flags |= 1), Be(e, t, r, l), t.child)
        );
    }
    function wa(e, t, n, r, l) {
        if (e === null) {
            var i = n.type;
            return typeof i == "function" &&
                !$o(i) &&
                i.defaultProps === void 0 &&
                n.compare === null &&
                n.defaultProps === void 0
                ? ((t.tag = 15), (t.type = i), Sa(e, t, i, r, l))
                : ((e = Al(n.type, null, r, t, t.mode, l)),
                  (e.ref = t.ref),
                  (e.return = t),
                  (t.child = e));
        }
        if (((i = e.child), !(e.lanes & l))) {
            var u = i.memoizedProps;
            if (
                ((n = n.compare),
                (n = n !== null ? n : cr),
                n(u, r) && e.ref === t.ref)
            )
                return Lt(e, t, l);
        }
        return (
            (t.flags |= 1),
            (e = Gt(i, r)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e)
        );
    }
    function Sa(e, t, n, r, l) {
        if (e !== null) {
            var i = e.memoizedProps;
            if (cr(i, r) && e.ref === t.ref)
                if (((Ke = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
                    e.flags & 131072 && (Ke = !0);
                else return (t.lanes = e.lanes), Lt(e, t, l);
        }
        return So(e, t, n, r, l);
    }
    function xa(e, t, n) {
        var r = t.pendingProps,
            l = r.children,
            i = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if (!(t.mode & 1))
                (t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                }),
                    ae(Vn, tt),
                    (tt |= n);
            else {
                if (!(n & 1073741824))
                    return (
                        (e = i !== null ? i.baseLanes | n : n),
                        (t.lanes = t.childLanes = 1073741824),
                        (t.memoizedState = {
                            baseLanes: e,
                            cachePool: null,
                            transitions: null,
                        }),
                        (t.updateQueue = null),
                        ae(Vn, tt),
                        (tt |= e),
                        null
                    );
                (t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                }),
                    (r = i !== null ? i.baseLanes : n),
                    ae(Vn, tt),
                    (tt |= r);
            }
        else
            i !== null
                ? ((r = i.baseLanes | n), (t.memoizedState = null))
                : (r = n),
                ae(Vn, tt),
                (tt |= r);
        return Be(e, t, l, n), t.child;
    }
    function ka(e, t) {
        var n = t.ref;
        ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
    }
    function So(e, t, n, r, l) {
        var i = Qe(n) ? rn : Me.current;
        return (
            (i = zn(t, i)),
            Un(t, l),
            (n = fo(e, t, n, r, i, l)),
            (r = po()),
            e !== null && !Ke
                ? ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~l),
                  Lt(e, t, l))
                : (de && r && Ki(t), (t.flags |= 1), Be(e, t, n, l), t.child)
        );
    }
    function Ea(e, t, n, r, l) {
        if (Qe(n)) {
            var i = !0;
            fl(t);
        } else i = !1;
        if ((Un(t, l), t.stateNode === null))
            Rl(e, t), As(t, n, r), lo(t, n, r, l), (r = !0);
        else if (e === null) {
            var u = t.stateNode,
                c = t.memoizedProps;
            u.props = c;
            var f = u.context,
                w = n.contextType;
            typeof w == "object" && w !== null
                ? (w = it(w))
                : ((w = Qe(n) ? rn : Me.current), (w = zn(t, w)));
            var C = n.getDerivedStateFromProps,
                P =
                    typeof C == "function" ||
                    typeof u.getSnapshotBeforeUpdate == "function";
            P ||
                (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof u.componentWillReceiveProps != "function") ||
                ((c !== r || f !== w) && $s(t, u, r, w)),
                (Ht = !1);
            var k = t.memoizedState;
            (u.state = k),
                wl(t, r, u, l),
                (f = t.memoizedState),
                c !== r || k !== f || We.current || Ht
                    ? (typeof C == "function" &&
                          (ro(t, n, C, r), (f = t.memoizedState)),
                      (c = Ht || Bs(t, n, c, r, k, f, w))
                          ? (P ||
                                (typeof u.UNSAFE_componentWillMount !=
                                    "function" &&
                                    typeof u.componentWillMount !=
                                        "function") ||
                                (typeof u.componentWillMount == "function" &&
                                    u.componentWillMount(),
                                typeof u.UNSAFE_componentWillMount ==
                                    "function" &&
                                    u.UNSAFE_componentWillMount()),
                            typeof u.componentDidMount == "function" &&
                                (t.flags |= 4194308))
                          : (typeof u.componentDidMount == "function" &&
                                (t.flags |= 4194308),
                            (t.memoizedProps = r),
                            (t.memoizedState = f)),
                      (u.props = r),
                      (u.state = f),
                      (u.context = w),
                      (r = c))
                    : (typeof u.componentDidMount == "function" &&
                          (t.flags |= 4194308),
                      (r = !1));
        } else {
            (u = t.stateNode),
                Is(e, t),
                (c = t.memoizedProps),
                (w = t.type === t.elementType ? c : pt(t.type, c)),
                (u.props = w),
                (P = t.pendingProps),
                (k = u.context),
                (f = n.contextType),
                typeof f == "object" && f !== null
                    ? (f = it(f))
                    : ((f = Qe(n) ? rn : Me.current), (f = zn(t, f)));
            var z = n.getDerivedStateFromProps;
            (C =
                typeof z == "function" ||
                typeof u.getSnapshotBeforeUpdate == "function") ||
                (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof u.componentWillReceiveProps != "function") ||
                ((c !== P || k !== f) && $s(t, u, r, f)),
                (Ht = !1),
                (k = t.memoizedState),
                (u.state = k),
                wl(t, r, u, l);
            var I = t.memoizedState;
            c !== P || k !== I || We.current || Ht
                ? (typeof z == "function" &&
                      (ro(t, n, z, r), (I = t.memoizedState)),
                  (w = Ht || Bs(t, n, w, r, k, I, f) || !1)
                      ? (C ||
                            (typeof u.UNSAFE_componentWillUpdate !=
                                "function" &&
                                typeof u.componentWillUpdate != "function") ||
                            (typeof u.componentWillUpdate == "function" &&
                                u.componentWillUpdate(r, I, f),
                            typeof u.UNSAFE_componentWillUpdate == "function" &&
                                u.UNSAFE_componentWillUpdate(r, I, f)),
                        typeof u.componentDidUpdate == "function" &&
                            (t.flags |= 4),
                        typeof u.getSnapshotBeforeUpdate == "function" &&
                            (t.flags |= 1024))
                      : (typeof u.componentDidUpdate != "function" ||
                            (c === e.memoizedProps && k === e.memoizedState) ||
                            (t.flags |= 4),
                        typeof u.getSnapshotBeforeUpdate != "function" ||
                            (c === e.memoizedProps && k === e.memoizedState) ||
                            (t.flags |= 1024),
                        (t.memoizedProps = r),
                        (t.memoizedState = I)),
                  (u.props = r),
                  (u.state = I),
                  (u.context = f),
                  (r = w))
                : (typeof u.componentDidUpdate != "function" ||
                      (c === e.memoizedProps && k === e.memoizedState) ||
                      (t.flags |= 4),
                  typeof u.getSnapshotBeforeUpdate != "function" ||
                      (c === e.memoizedProps && k === e.memoizedState) ||
                      (t.flags |= 1024),
                  (r = !1));
        }
        return xo(e, t, n, r, i, l);
    }
    function xo(e, t, n, r, l, i) {
        ka(e, t);
        var u = (t.flags & 128) !== 0;
        if (!r && !u) return l && Ns(t, n, !1), Lt(e, t, i);
        (r = t.stateNode), (hd.current = t);
        var c =
            u && typeof n.getDerivedStateFromError != "function"
                ? null
                : r.render();
        return (
            (t.flags |= 1),
            e !== null && u
                ? ((t.child = Fn(t, e.child, null, i)),
                  (t.child = Fn(t, null, c, i)))
                : Be(e, t, c, i),
            (t.memoizedState = r.state),
            l && Ns(t, n, !0),
            t.child
        );
    }
    function Ca(e) {
        var t = e.stateNode;
        t.pendingContext
            ? _s(e, t.pendingContext, t.pendingContext !== t.context)
            : t.context && _s(e, t.context, !1),
            io(e, t.containerInfo);
    }
    function _a(e, t, n, r, l) {
        return In(), Gi(l), (t.flags |= 256), Be(e, t, n, r), t.child;
    }
    var ko = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Eo(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
    }
    function Pa(e, t, n) {
        var r = t.pendingProps,
            l = he.current,
            i = !1,
            u = (t.flags & 128) !== 0,
            c;
        if (
            ((c = u) ||
                (c =
                    e !== null && e.memoizedState === null
                        ? !1
                        : (l & 2) !== 0),
            c
                ? ((i = !0), (t.flags &= -129))
                : (e === null || e.memoizedState !== null) && (l |= 1),
            ae(he, l & 1),
            e === null)
        )
            return (
                Xi(t),
                (e = t.memoizedState),
                e !== null && ((e = e.dehydrated), e !== null)
                    ? (t.mode & 1
                          ? e.data === "$!"
                              ? (t.lanes = 8)
                              : (t.lanes = 1073741824)
                          : (t.lanes = 1),
                      null)
                    : ((u = r.children),
                      (e = r.fallback),
                      i
                          ? ((r = t.mode),
                            (i = t.child),
                            (u = { mode: "hidden", children: u }),
                            !(r & 1) && i !== null
                                ? ((i.childLanes = 0), (i.pendingProps = u))
                                : (i = $l(u, r, 0, null)),
                            (e = hn(e, r, n, null)),
                            (i.return = t),
                            (e.return = t),
                            (i.sibling = e),
                            (t.child = i),
                            (t.child.memoizedState = Eo(n)),
                            (t.memoizedState = ko),
                            e)
                          : Co(t, u))
            );
        if (
            ((l = e.memoizedState),
            l !== null && ((c = l.dehydrated), c !== null))
        )
            return md(e, t, u, r, c, l, n);
        if (i) {
            (i = r.fallback), (u = t.mode), (l = e.child), (c = l.sibling);
            var f = { mode: "hidden", children: r.children };
            return (
                !(u & 1) && t.child !== l
                    ? ((r = t.child),
                      (r.childLanes = 0),
                      (r.pendingProps = f),
                      (t.deletions = null))
                    : ((r = Gt(l, f)),
                      (r.subtreeFlags = l.subtreeFlags & 14680064)),
                c !== null
                    ? (i = Gt(c, i))
                    : ((i = hn(i, u, n, null)), (i.flags |= 2)),
                (i.return = t),
                (r.return = t),
                (r.sibling = i),
                (t.child = r),
                (r = i),
                (i = t.child),
                (u = e.child.memoizedState),
                (u =
                    u === null
                        ? Eo(n)
                        : {
                              baseLanes: u.baseLanes | n,
                              cachePool: null,
                              transitions: u.transitions,
                          }),
                (i.memoizedState = u),
                (i.childLanes = e.childLanes & ~n),
                (t.memoizedState = ko),
                r
            );
        }
        return (
            (i = e.child),
            (e = i.sibling),
            (r = Gt(i, { mode: "visible", children: r.children })),
            !(t.mode & 1) && (r.lanes = n),
            (r.return = t),
            (r.sibling = null),
            e !== null &&
                ((n = t.deletions),
                n === null
                    ? ((t.deletions = [e]), (t.flags |= 16))
                    : n.push(e)),
            (t.child = r),
            (t.memoizedState = null),
            r
        );
    }
    function Co(e, t) {
        return (
            (t = $l({ mode: "visible", children: t }, e.mode, 0, null)),
            (t.return = e),
            (e.child = t)
        );
    }
    function jl(e, t, n, r) {
        return (
            r !== null && Gi(r),
            Fn(t, e.child, null, n),
            (e = Co(t, t.pendingProps.children)),
            (e.flags |= 2),
            (t.memoizedState = null),
            e
        );
    }
    function md(e, t, n, r, l, i, u) {
        if (n)
            return t.flags & 256
                ? ((t.flags &= -257), (r = go(Error(a(422)))), jl(e, t, u, r))
                : t.memoizedState !== null
                ? ((t.child = e.child), (t.flags |= 128), null)
                : ((i = r.fallback),
                  (l = t.mode),
                  (r = $l(
                      { mode: "visible", children: r.children },
                      l,
                      0,
                      null
                  )),
                  (i = hn(i, l, u, null)),
                  (i.flags |= 2),
                  (r.return = t),
                  (i.return = t),
                  (r.sibling = i),
                  (t.child = r),
                  t.mode & 1 && Fn(t, e.child, null, u),
                  (t.child.memoizedState = Eo(u)),
                  (t.memoizedState = ko),
                  i);
        if (!(t.mode & 1)) return jl(e, t, u, null);
        if (l.data === "$!") {
            if (((r = l.nextSibling && l.nextSibling.dataset), r))
                var c = r.dgst;
            return (
                (r = c),
                (i = Error(a(419))),
                (r = go(i, r, void 0)),
                jl(e, t, u, r)
            );
        }
        if (((c = (u & e.childLanes) !== 0), Ke || c)) {
            if (((r = je), r !== null)) {
                switch (u & -u) {
                    case 4:
                        l = 2;
                        break;
                    case 16:
                        l = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        l = 32;
                        break;
                    case 536870912:
                        l = 268435456;
                        break;
                    default:
                        l = 0;
                }
                (l = l & (r.suspendedLanes | u) ? 0 : l),
                    l !== 0 &&
                        l !== i.retryLane &&
                        ((i.retryLane = l), Rt(e, l), vt(r, e, l, -1));
            }
            return Ao(), (r = go(Error(a(421)))), jl(e, t, u, r);
        }
        return l.data === "$?"
            ? ((t.flags |= 128),
              (t.child = e.child),
              (t = jd.bind(null, e)),
              (l._reactRetry = t),
              null)
            : ((e = i.treeContext),
              (et = Bt(l.nextSibling)),
              (be = t),
              (de = !0),
              (dt = null),
              e !== null &&
                  ((rt[lt++] = Nt),
                  (rt[lt++] = jt),
                  (rt[lt++] = ln),
                  (Nt = e.id),
                  (jt = e.overflow),
                  (ln = t)),
              (t = Co(t, r.children)),
              (t.flags |= 4096),
              t);
    }
    function Na(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), eo(e.return, t, n);
    }
    function _o(e, t, n, r, l) {
        var i = e.memoizedState;
        i === null
            ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: r,
                  tail: n,
                  tailMode: l,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = l));
    }
    function ja(e, t, n) {
        var r = t.pendingProps,
            l = r.revealOrder,
            i = r.tail;
        if ((Be(e, t, r.children, n), (r = he.current), r & 2))
            (r = (r & 1) | 2), (t.flags |= 128);
        else {
            if (e !== null && e.flags & 128)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13) e.memoizedState !== null && Na(e, n, t);
                    else if (e.tag === 19) Na(e, n, t);
                    else if (e.child !== null) {
                        (e.child.return = e), (e = e.child);
                        continue;
                    }
                    if (e === t) break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t) break e;
                        e = e.return;
                    }
                    (e.sibling.return = e.return), (e = e.sibling);
                }
            r &= 1;
        }
        if ((ae(he, r), !(t.mode & 1))) t.memoizedState = null;
        else
            switch (l) {
                case "forwards":
                    for (n = t.child, l = null; n !== null; )
                        (e = n.alternate),
                            e !== null && kl(e) === null && (l = n),
                            (n = n.sibling);
                    (n = l),
                        n === null
                            ? ((l = t.child), (t.child = null))
                            : ((l = n.sibling), (n.sibling = null)),
                        _o(t, !1, l, n, i);
                    break;
                case "backwards":
                    for (n = null, l = t.child, t.child = null; l !== null; ) {
                        if (((e = l.alternate), e !== null && kl(e) === null)) {
                            t.child = l;
                            break;
                        }
                        (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                    }
                    _o(t, !0, n, null, i);
                    break;
                case "together":
                    _o(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
        return t.child;
    }
    function Rl(e, t) {
        !(t.mode & 1) &&
            e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function Lt(e, t, n) {
        if (
            (e !== null && (t.dependencies = e.dependencies),
            (cn |= t.lanes),
            !(n & t.childLanes))
        )
            return null;
        if (e !== null && t.child !== e.child) throw Error(a(153));
        if (t.child !== null) {
            for (
                e = t.child,
                    n = Gt(e, e.pendingProps),
                    t.child = n,
                    n.return = t;
                e.sibling !== null;

            )
                (e = e.sibling),
                    (n = n.sibling = Gt(e, e.pendingProps)),
                    (n.return = t);
            n.sibling = null;
        }
        return t.child;
    }
    function vd(e, t, n) {
        switch (t.tag) {
            case 3:
                Ca(t), In();
                break;
            case 5:
                Qs(t);
                break;
            case 1:
                Qe(t.type) && fl(t);
                break;
            case 4:
                io(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context,
                    l = t.memoizedProps.value;
                ae(vl, r._currentValue), (r._currentValue = l);
                break;
            case 13:
                if (((r = t.memoizedState), r !== null))
                    return r.dehydrated !== null
                        ? (ae(he, he.current & 1), (t.flags |= 128), null)
                        : n & t.child.childLanes
                        ? Pa(e, t, n)
                        : (ae(he, he.current & 1),
                          (e = Lt(e, t, n)),
                          e !== null ? e.sibling : null);
                ae(he, he.current & 1);
                break;
            case 19:
                if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                    if (r) return ja(e, t, n);
                    t.flags |= 128;
                }
                if (
                    ((l = t.memoizedState),
                    l !== null &&
                        ((l.rendering = null),
                        (l.tail = null),
                        (l.lastEffect = null)),
                    ae(he, he.current),
                    r)
                )
                    break;
                return null;
            case 22:
            case 23:
                return (t.lanes = 0), xa(e, t, n);
        }
        return Lt(e, t, n);
    }
    var Ra, Po, Ta, La;
    (Ra = function (e, t) {
        for (var n = t.child; n !== null; ) {
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
            }
            if (n === t) break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) return;
                n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
        }
    }),
        (Po = function () {}),
        (Ta = function (e, t, n, r) {
            var l = e.memoizedProps;
            if (l !== r) {
                (e = t.stateNode), sn(St.current);
                var i = null;
                switch (n) {
                    case "input":
                        (l = ei(e, l)), (r = ei(e, r)), (i = []);
                        break;
                    case "select":
                        (l = d({}, l, { value: void 0 })),
                            (r = d({}, r, { value: void 0 })),
                            (i = []);
                        break;
                    case "textarea":
                        (l = ri(e, l)), (r = ri(e, r)), (i = []);
                        break;
                    default:
                        typeof l.onClick != "function" &&
                            typeof r.onClick == "function" &&
                            (e.onclick = sl);
                }
                ii(n, r);
                var u;
                n = null;
                for (w in l)
                    if (
                        !r.hasOwnProperty(w) &&
                        l.hasOwnProperty(w) &&
                        l[w] != null
                    )
                        if (w === "style") {
                            var c = l[w];
                            for (u in c)
                                c.hasOwnProperty(u) &&
                                    (n || (n = {}), (n[u] = ""));
                        } else
                            w !== "dangerouslySetInnerHTML" &&
                                w !== "children" &&
                                w !== "suppressContentEditableWarning" &&
                                w !== "suppressHydrationWarning" &&
                                w !== "autoFocus" &&
                                (m.hasOwnProperty(w)
                                    ? i || (i = [])
                                    : (i = i || []).push(w, null));
                for (w in r) {
                    var f = r[w];
                    if (
                        ((c = l != null ? l[w] : void 0),
                        r.hasOwnProperty(w) &&
                            f !== c &&
                            (f != null || c != null))
                    )
                        if (w === "style")
                            if (c) {
                                for (u in c)
                                    !c.hasOwnProperty(u) ||
                                        (f && f.hasOwnProperty(u)) ||
                                        (n || (n = {}), (n[u] = ""));
                                for (u in f)
                                    f.hasOwnProperty(u) &&
                                        c[u] !== f[u] &&
                                        (n || (n = {}), (n[u] = f[u]));
                            } else n || (i || (i = []), i.push(w, n)), (n = f);
                        else
                            w === "dangerouslySetInnerHTML"
                                ? ((f = f ? f.__html : void 0),
                                  (c = c ? c.__html : void 0),
                                  f != null &&
                                      c !== f &&
                                      (i = i || []).push(w, f))
                                : w === "children"
                                ? (typeof f != "string" &&
                                      typeof f != "number") ||
                                  (i = i || []).push(w, "" + f)
                                : w !== "suppressContentEditableWarning" &&
                                  w !== "suppressHydrationWarning" &&
                                  (m.hasOwnProperty(w)
                                      ? (f != null &&
                                            w === "onScroll" &&
                                            ce("scroll", e),
                                        i || c === f || (i = []))
                                      : (i = i || []).push(w, f));
                }
                n && (i = i || []).push("style", n);
                var w = i;
                (t.updateQueue = w) && (t.flags |= 4);
            }
        }),
        (La = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
        });
    function _r(e, t) {
        if (!de)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; t !== null; )
                        t.alternate !== null && (n = t), (t = t.sibling);
                    n === null ? (e.tail = null) : (n.sibling = null);
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; n !== null; )
                        n.alternate !== null && (r = n), (n = n.sibling);
                    r === null
                        ? t || e.tail === null
                            ? (e.tail = null)
                            : (e.tail.sibling = null)
                        : (r.sibling = null);
            }
    }
    function De(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var l = e.child; l !== null; )
                (n |= l.lanes | l.childLanes),
                    (r |= l.subtreeFlags & 14680064),
                    (r |= l.flags & 14680064),
                    (l.return = e),
                    (l = l.sibling);
        else
            for (l = e.child; l !== null; )
                (n |= l.lanes | l.childLanes),
                    (r |= l.subtreeFlags),
                    (r |= l.flags),
                    (l.return = e),
                    (l = l.sibling);
        return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    function yd(e, t, n) {
        var r = t.pendingProps;
        switch ((qi(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return De(t), null;
            case 1:
                return Qe(t.type) && cl(), De(t), null;
            case 3:
                return (
                    (r = t.stateNode),
                    Bn(),
                    fe(We),
                    fe(Me),
                    so(),
                    r.pendingContext &&
                        ((r.context = r.pendingContext),
                        (r.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (ml(t)
                            ? (t.flags |= 4)
                            : e === null ||
                              (e.memoizedState.isDehydrated &&
                                  !(t.flags & 256)) ||
                              ((t.flags |= 1024),
                              dt !== null && (Uo(dt), (dt = null)))),
                    Po(e, t),
                    De(t),
                    null
                );
            case 5:
                oo(t);
                var l = sn(Sr.current);
                if (((n = t.type), e !== null && t.stateNode != null))
                    Ta(e, t, n, r, l),
                        e.ref !== t.ref &&
                            ((t.flags |= 512), (t.flags |= 2097152));
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(a(166));
                        return De(t), null;
                    }
                    if (((e = sn(St.current)), ml(t))) {
                        (r = t.stateNode), (n = t.type);
                        var i = t.memoizedProps;
                        switch (
                            ((r[wt] = t),
                            (r[mr] = i),
                            (e = (t.mode & 1) !== 0),
                            n)
                        ) {
                            case "dialog":
                                ce("cancel", r), ce("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ce("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < dr.length; l++) ce(dr[l], r);
                                break;
                            case "source":
                                ce("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ce("error", r), ce("load", r);
                                break;
                            case "details":
                                ce("toggle", r);
                                break;
                            case "input":
                                cu(r, i), ce("invalid", r);
                                break;
                            case "select":
                                (r._wrapperState = {
                                    wasMultiple: !!i.multiple,
                                }),
                                    ce("invalid", r);
                                break;
                            case "textarea":
                                pu(r, i), ce("invalid", r);
                        }
                        ii(n, i), (l = null);
                        for (var u in i)
                            if (i.hasOwnProperty(u)) {
                                var c = i[u];
                                u === "children"
                                    ? typeof c == "string"
                                        ? r.textContent !== c &&
                                          (i.suppressHydrationWarning !== !0 &&
                                              ul(r.textContent, c, e),
                                          (l = ["children", c]))
                                        : typeof c == "number" &&
                                          r.textContent !== "" + c &&
                                          (i.suppressHydrationWarning !== !0 &&
                                              ul(r.textContent, c, e),
                                          (l = ["children", "" + c]))
                                    : m.hasOwnProperty(u) &&
                                      c != null &&
                                      u === "onScroll" &&
                                      ce("scroll", r);
                            }
                        switch (n) {
                            case "input":
                                Fr(r), du(r, i, !0);
                                break;
                            case "textarea":
                                Fr(r), mu(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof i.onClick == "function" &&
                                    (r.onclick = sl);
                        }
                        (r = l),
                            (t.updateQueue = r),
                            r !== null && (t.flags |= 4);
                    } else {
                        (u = l.nodeType === 9 ? l : l.ownerDocument),
                            e === "http://www.w3.org/1999/xhtml" && (e = vu(n)),
                            e === "http://www.w3.org/1999/xhtml"
                                ? n === "script"
                                    ? ((e = u.createElement("div")),
                                      (e.innerHTML = "<script></script>"),
                                      (e = e.removeChild(e.firstChild)))
                                    : typeof r.is == "string"
                                    ? (e = u.createElement(n, { is: r.is }))
                                    : ((e = u.createElement(n)),
                                      n === "select" &&
                                          ((u = e),
                                          r.multiple
                                              ? (u.multiple = !0)
                                              : r.size && (u.size = r.size)))
                                : (e = u.createElementNS(e, n)),
                            (e[wt] = t),
                            (e[mr] = r),
                            Ra(e, t, !1, !1),
                            (t.stateNode = e);
                        e: {
                            switch (((u = oi(n, r)), n)) {
                                case "dialog":
                                    ce("cancel", e), ce("close", e), (l = r);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    ce("load", e), (l = r);
                                    break;
                                case "video":
                                case "audio":
                                    for (l = 0; l < dr.length; l++)
                                        ce(dr[l], e);
                                    l = r;
                                    break;
                                case "source":
                                    ce("error", e), (l = r);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    ce("error", e), ce("load", e), (l = r);
                                    break;
                                case "details":
                                    ce("toggle", e), (l = r);
                                    break;
                                case "input":
                                    cu(e, r), (l = ei(e, r)), ce("invalid", e);
                                    break;
                                case "option":
                                    l = r;
                                    break;
                                case "select":
                                    (e._wrapperState = {
                                        wasMultiple: !!r.multiple,
                                    }),
                                        (l = d({}, r, { value: void 0 })),
                                        ce("invalid", e);
                                    break;
                                case "textarea":
                                    pu(e, r), (l = ri(e, r)), ce("invalid", e);
                                    break;
                                default:
                                    l = r;
                            }
                            ii(n, l), (c = l);
                            for (i in c)
                                if (c.hasOwnProperty(i)) {
                                    var f = c[i];
                                    i === "style"
                                        ? wu(e, f)
                                        : i === "dangerouslySetInnerHTML"
                                        ? ((f = f ? f.__html : void 0),
                                          f != null && yu(e, f))
                                        : i === "children"
                                        ? typeof f == "string"
                                            ? (n !== "textarea" || f !== "") &&
                                              qn(e, f)
                                            : typeof f == "number" &&
                                              qn(e, "" + f)
                                        : i !==
                                              "suppressContentEditableWarning" &&
                                          i !== "suppressHydrationWarning" &&
                                          i !== "autoFocus" &&
                                          (m.hasOwnProperty(i)
                                              ? f != null &&
                                                i === "onScroll" &&
                                                ce("scroll", e)
                                              : f != null && re(e, i, f, u));
                                }
                            switch (n) {
                                case "input":
                                    Fr(e), du(e, r, !1);
                                    break;
                                case "textarea":
                                    Fr(e), mu(e);
                                    break;
                                case "option":
                                    r.value != null &&
                                        e.setAttribute(
                                            "value",
                                            "" + le(r.value)
                                        );
                                    break;
                                case "select":
                                    (e.multiple = !!r.multiple),
                                        (i = r.value),
                                        i != null
                                            ? Sn(e, !!r.multiple, i, !1)
                                            : r.defaultValue != null &&
                                              Sn(
                                                  e,
                                                  !!r.multiple,
                                                  r.defaultValue,
                                                  !0
                                              );
                                    break;
                                default:
                                    typeof l.onClick == "function" &&
                                        (e.onclick = sl);
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1;
                            }
                        }
                        r && (t.flags |= 4);
                    }
                    t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
                }
                return De(t), null;
            case 6:
                if (e && t.stateNode != null) La(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null)
                        throw Error(a(166));
                    if (((n = sn(Sr.current)), sn(St.current), ml(t))) {
                        if (
                            ((r = t.stateNode),
                            (n = t.memoizedProps),
                            (r[wt] = t),
                            (i = r.nodeValue !== n) && ((e = be), e !== null))
                        )
                            switch (e.tag) {
                                case 3:
                                    ul(r.nodeValue, n, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !==
                                        !0 &&
                                        ul(r.nodeValue, n, (e.mode & 1) !== 0);
                            }
                        i && (t.flags |= 4);
                    } else
                        (r = (
                            n.nodeType === 9 ? n : n.ownerDocument
                        ).createTextNode(r)),
                            (r[wt] = t),
                            (t.stateNode = r);
                }
                return De(t), null;
            case 13:
                if (
                    (fe(he),
                    (r = t.memoizedState),
                    e === null ||
                        (e.memoizedState !== null &&
                            e.memoizedState.dehydrated !== null))
                ) {
                    if (de && et !== null && t.mode & 1 && !(t.flags & 128))
                        Os(), In(), (t.flags |= 98560), (i = !1);
                    else if (
                        ((i = ml(t)), r !== null && r.dehydrated !== null)
                    ) {
                        if (e === null) {
                            if (!i) throw Error(a(318));
                            if (
                                ((i = t.memoizedState),
                                (i = i !== null ? i.dehydrated : null),
                                !i)
                            )
                                throw Error(a(317));
                            i[wt] = t;
                        } else
                            In(),
                                !(t.flags & 128) && (t.memoizedState = null),
                                (t.flags |= 4);
                        De(t), (i = !1);
                    } else dt !== null && (Uo(dt), (dt = null)), (i = !0);
                    if (!i) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128
                    ? ((t.lanes = n), t)
                    : ((r = r !== null),
                      r !== (e !== null && e.memoizedState !== null) &&
                          r &&
                          ((t.child.flags |= 8192),
                          t.mode & 1 &&
                              (e === null || he.current & 1
                                  ? Ce === 0 && (Ce = 3)
                                  : Ao())),
                      t.updateQueue !== null && (t.flags |= 4),
                      De(t),
                      null);
            case 4:
                return (
                    Bn(),
                    Po(e, t),
                    e === null && pr(t.stateNode.containerInfo),
                    De(t),
                    null
                );
            case 10:
                return bi(t.type._context), De(t), null;
            case 17:
                return Qe(t.type) && cl(), De(t), null;
            case 19:
                if ((fe(he), (i = t.memoizedState), i === null))
                    return De(t), null;
                if (
                    ((r = (t.flags & 128) !== 0), (u = i.rendering), u === null)
                )
                    if (r) _r(i, !1);
                    else {
                        if (Ce !== 0 || (e !== null && e.flags & 128))
                            for (e = t.child; e !== null; ) {
                                if (((u = kl(e)), u !== null)) {
                                    for (
                                        t.flags |= 128,
                                            _r(i, !1),
                                            r = u.updateQueue,
                                            r !== null &&
                                                ((t.updateQueue = r),
                                                (t.flags |= 4)),
                                            t.subtreeFlags = 0,
                                            r = n,
                                            n = t.child;
                                        n !== null;

                                    )
                                        (i = n),
                                            (e = r),
                                            (i.flags &= 14680066),
                                            (u = i.alternate),
                                            u === null
                                                ? ((i.childLanes = 0),
                                                  (i.lanes = e),
                                                  (i.child = null),
                                                  (i.subtreeFlags = 0),
                                                  (i.memoizedProps = null),
                                                  (i.memoizedState = null),
                                                  (i.updateQueue = null),
                                                  (i.dependencies = null),
                                                  (i.stateNode = null))
                                                : ((i.childLanes =
                                                      u.childLanes),
                                                  (i.lanes = u.lanes),
                                                  (i.child = u.child),
                                                  (i.subtreeFlags = 0),
                                                  (i.deletions = null),
                                                  (i.memoizedProps =
                                                      u.memoizedProps),
                                                  (i.memoizedState =
                                                      u.memoizedState),
                                                  (i.updateQueue =
                                                      u.updateQueue),
                                                  (i.type = u.type),
                                                  (e = u.dependencies),
                                                  (i.dependencies =
                                                      e === null
                                                          ? null
                                                          : {
                                                                lanes: e.lanes,
                                                                firstContext:
                                                                    e.firstContext,
                                                            })),
                                            (n = n.sibling);
                                    return (
                                        ae(he, (he.current & 1) | 2), t.child
                                    );
                                }
                                e = e.sibling;
                            }
                        i.tail !== null &&
                            ge() > Hn &&
                            ((t.flags |= 128),
                            (r = !0),
                            _r(i, !1),
                            (t.lanes = 4194304));
                    }
                else {
                    if (!r)
                        if (((e = kl(u)), e !== null)) {
                            if (
                                ((t.flags |= 128),
                                (r = !0),
                                (n = e.updateQueue),
                                n !== null &&
                                    ((t.updateQueue = n), (t.flags |= 4)),
                                _r(i, !0),
                                i.tail === null &&
                                    i.tailMode === "hidden" &&
                                    !u.alternate &&
                                    !de)
                            )
                                return De(t), null;
                        } else
                            2 * ge() - i.renderingStartTime > Hn &&
                                n !== 1073741824 &&
                                ((t.flags |= 128),
                                (r = !0),
                                _r(i, !1),
                                (t.lanes = 4194304));
                    i.isBackwards
                        ? ((u.sibling = t.child), (t.child = u))
                        : ((n = i.last),
                          n !== null ? (n.sibling = u) : (t.child = u),
                          (i.last = u));
                }
                return i.tail !== null
                    ? ((t = i.tail),
                      (i.rendering = t),
                      (i.tail = t.sibling),
                      (i.renderingStartTime = ge()),
                      (t.sibling = null),
                      (n = he.current),
                      ae(he, r ? (n & 1) | 2 : n & 1),
                      t)
                    : (De(t), null);
            case 22:
            case 23:
                return (
                    Bo(),
                    (r = t.memoizedState !== null),
                    e !== null &&
                        (e.memoizedState !== null) !== r &&
                        (t.flags |= 8192),
                    r && t.mode & 1
                        ? tt & 1073741824 &&
                          (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                        : De(t),
                    null
                );
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(a(156, t.tag));
    }
    function gd(e, t) {
        switch ((qi(t), t.tag)) {
            case 1:
                return (
                    Qe(t.type) && cl(),
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 3:
                return (
                    Bn(),
                    fe(We),
                    fe(Me),
                    so(),
                    (e = t.flags),
                    e & 65536 && !(e & 128)
                        ? ((t.flags = (e & -65537) | 128), t)
                        : null
                );
            case 5:
                return oo(t), null;
            case 13:
                if (
                    (fe(he),
                    (e = t.memoizedState),
                    e !== null && e.dehydrated !== null)
                ) {
                    if (t.alternate === null) throw Error(a(340));
                    In();
                }
                return (
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 19:
                return fe(he), null;
            case 4:
                return Bn(), null;
            case 10:
                return bi(t.type._context), null;
            case 22:
            case 23:
                return Bo(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Tl = !1,
        Ue = !1,
        wd = typeof WeakSet == "function" ? WeakSet : Set,
        M = null;
    function $n(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function")
                try {
                    n(null);
                } catch (r) {
                    ve(e, t, r);
                }
            else n.current = null;
    }
    function No(e, t, n) {
        try {
            n();
        } catch (r) {
            ve(e, t, r);
        }
    }
    var za = !1;
    function Sd(e, t) {
        if (((Fi = Gr), (e = as()), Ti(e))) {
            if ("selectionStart" in e)
                var n = { start: e.selectionStart, end: e.selectionEnd };
            else
                e: {
                    n = ((n = e.ownerDocument) && n.defaultView) || window;
                    var r = n.getSelection && n.getSelection();
                    if (r && r.rangeCount !== 0) {
                        n = r.anchorNode;
                        var l = r.anchorOffset,
                            i = r.focusNode;
                        r = r.focusOffset;
                        try {
                            n.nodeType, i.nodeType;
                        } catch {
                            n = null;
                            break e;
                        }
                        var u = 0,
                            c = -1,
                            f = -1,
                            w = 0,
                            C = 0,
                            P = e,
                            k = null;
                        t: for (;;) {
                            for (
                                var z;
                                P !== n ||
                                    (l !== 0 && P.nodeType !== 3) ||
                                    (c = u + l),
                                    P !== i ||
                                        (r !== 0 && P.nodeType !== 3) ||
                                        (f = u + r),
                                    P.nodeType === 3 &&
                                        (u += P.nodeValue.length),
                                    (z = P.firstChild) !== null;

                            )
                                (k = P), (P = z);
                            for (;;) {
                                if (P === e) break t;
                                if (
                                    (k === n && ++w === l && (c = u),
                                    k === i && ++C === r && (f = u),
                                    (z = P.nextSibling) !== null)
                                )
                                    break;
                                (P = k), (k = P.parentNode);
                            }
                            P = z;
                        }
                        n = c === -1 || f === -1 ? null : { start: c, end: f };
                    } else n = null;
                }
            n = n || { start: 0, end: 0 };
        } else n = null;
        for (
            Bi = { focusedElem: e, selectionRange: n }, Gr = !1, M = t;
            M !== null;

        )
            if (
                ((t = M),
                (e = t.child),
                (t.subtreeFlags & 1028) !== 0 && e !== null)
            )
                (e.return = t), (M = e);
            else
                for (; M !== null; ) {
                    t = M;
                    try {
                        var I = t.alternate;
                        if (t.flags & 1024)
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if (I !== null) {
                                        var U = I.memoizedProps,
                                            we = I.memoizedState,
                                            y = t.stateNode,
                                            h = y.getSnapshotBeforeUpdate(
                                                t.elementType === t.type
                                                    ? U
                                                    : pt(t.type, U),
                                                we
                                            );
                                        y.__reactInternalSnapshotBeforeUpdate =
                                            h;
                                    }
                                    break;
                                case 3:
                                    var g = t.stateNode.containerInfo;
                                    g.nodeType === 1
                                        ? (g.textContent = "")
                                        : g.nodeType === 9 &&
                                          g.documentElement &&
                                          g.removeChild(g.documentElement);
                                    break;
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                default:
                                    throw Error(a(163));
                            }
                    } catch (j) {
                        ve(t, t.return, j);
                    }
                    if (((e = t.sibling), e !== null)) {
                        (e.return = t.return), (M = e);
                        break;
                    }
                    M = t.return;
                }
        return (I = za), (za = !1), I;
    }
    function Pr(e, t, n) {
        var r = t.updateQueue;
        if (((r = r !== null ? r.lastEffect : null), r !== null)) {
            var l = (r = r.next);
            do {
                if ((l.tag & e) === e) {
                    var i = l.destroy;
                    (l.destroy = void 0), i !== void 0 && No(t, n, i);
                }
                l = l.next;
            } while (l !== r);
        }
    }
    function Ll(e, t) {
        if (
            ((t = t.updateQueue),
            (t = t !== null ? t.lastEffect : null),
            t !== null)
        ) {
            var n = (t = t.next);
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            } while (n !== t);
        }
    }
    function jo(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = n;
                    break;
                default:
                    e = n;
            }
            typeof t == "function" ? t(e) : (t.current = e);
        }
    }
    function Oa(e) {
        var t = e.alternate;
        t !== null && ((e.alternate = null), Oa(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 &&
                ((t = e.stateNode),
                t !== null &&
                    (delete t[wt],
                    delete t[mr],
                    delete t[Hi],
                    delete t[nd],
                    delete t[rd])),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
    }
    function Ma(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Ia(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || Ma(e.return)) return null;
                e = e.return;
            }
            for (
                e.sibling.return = e.return, e = e.sibling;
                e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

            ) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                (e.child.return = e), (e = e.child);
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Ro(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            (e = e.stateNode),
                t
                    ? n.nodeType === 8
                        ? n.parentNode.insertBefore(e, t)
                        : n.insertBefore(e, t)
                    : (n.nodeType === 8
                          ? ((t = n.parentNode), t.insertBefore(e, n))
                          : ((t = n), t.appendChild(e)),
                      (n = n._reactRootContainer),
                      n != null || t.onclick !== null || (t.onclick = sl));
        else if (r !== 4 && ((e = e.child), e !== null))
            for (Ro(e, t, n), e = e.sibling; e !== null; )
                Ro(e, t, n), (e = e.sibling);
    }
    function To(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && ((e = e.child), e !== null))
            for (To(e, t, n), e = e.sibling; e !== null; )
                To(e, t, n), (e = e.sibling);
    }
    var Te = null,
        ht = !1;
    function Qt(e, t, n) {
        for (n = n.child; n !== null; ) Da(e, t, n), (n = n.sibling);
    }
    function Da(e, t, n) {
        if (gt && typeof gt.onCommitFiberUnmount == "function")
            try {
                gt.onCommitFiberUnmount(Wr, n);
            } catch {}
        switch (n.tag) {
            case 5:
                Ue || $n(n, t);
            case 6:
                var r = Te,
                    l = ht;
                (Te = null),
                    Qt(e, t, n),
                    (Te = r),
                    (ht = l),
                    Te !== null &&
                        (ht
                            ? ((e = Te),
                              (n = n.stateNode),
                              e.nodeType === 8
                                  ? e.parentNode.removeChild(n)
                                  : e.removeChild(n))
                            : Te.removeChild(n.stateNode));
                break;
            case 18:
                Te !== null &&
                    (ht
                        ? ((e = Te),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? Vi(e.parentNode, n)
                              : e.nodeType === 1 && Vi(e, n),
                          lr(e))
                        : Vi(Te, n.stateNode));
                break;
            case 4:
                (r = Te),
                    (l = ht),
                    (Te = n.stateNode.containerInfo),
                    (ht = !0),
                    Qt(e, t, n),
                    (Te = r),
                    (ht = l);
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (
                    !Ue &&
                    ((r = n.updateQueue),
                    r !== null && ((r = r.lastEffect), r !== null))
                ) {
                    l = r = r.next;
                    do {
                        var i = l,
                            u = i.destroy;
                        (i = i.tag),
                            u !== void 0 && (i & 2 || i & 4) && No(n, t, u),
                            (l = l.next);
                    } while (l !== r);
                }
                Qt(e, t, n);
                break;
            case 1:
                if (
                    !Ue &&
                    ($n(n, t),
                    (r = n.stateNode),
                    typeof r.componentWillUnmount == "function")
                )
                    try {
                        (r.props = n.memoizedProps),
                            (r.state = n.memoizedState),
                            r.componentWillUnmount();
                    } catch (c) {
                        ve(n, t, c);
                    }
                Qt(e, t, n);
                break;
            case 21:
                Qt(e, t, n);
                break;
            case 22:
                n.mode & 1
                    ? ((Ue = (r = Ue) || n.memoizedState !== null),
                      Qt(e, t, n),
                      (Ue = r))
                    : Qt(e, t, n);
                break;
            default:
                Qt(e, t, n);
        }
    }
    function Ua(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new wd()),
                t.forEach(function (r) {
                    var l = Rd.bind(null, e, r);
                    n.has(r) || (n.add(r), r.then(l, l));
                });
        }
    }
    function mt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var l = n[r];
                try {
                    var i = e,
                        u = t,
                        c = u;
                    e: for (; c !== null; ) {
                        switch (c.tag) {
                            case 5:
                                (Te = c.stateNode), (ht = !1);
                                break e;
                            case 3:
                                (Te = c.stateNode.containerInfo), (ht = !0);
                                break e;
                            case 4:
                                (Te = c.stateNode.containerInfo), (ht = !0);
                                break e;
                        }
                        c = c.return;
                    }
                    if (Te === null) throw Error(a(160));
                    Da(i, u, l), (Te = null), (ht = !1);
                    var f = l.alternate;
                    f !== null && (f.return = null), (l.return = null);
                } catch (w) {
                    ve(l, t, w);
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; ) Fa(t, e), (t = t.sibling);
    }
    function Fa(e, t) {
        var n = e.alternate,
            r = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if ((mt(t, e), kt(e), r & 4)) {
                    try {
                        Pr(3, e, e.return), Ll(3, e);
                    } catch (U) {
                        ve(e, e.return, U);
                    }
                    try {
                        Pr(5, e, e.return);
                    } catch (U) {
                        ve(e, e.return, U);
                    }
                }
                break;
            case 1:
                mt(t, e), kt(e), r & 512 && n !== null && $n(n, n.return);
                break;
            case 5:
                if (
                    (mt(t, e),
                    kt(e),
                    r & 512 && n !== null && $n(n, n.return),
                    e.flags & 32)
                ) {
                    var l = e.stateNode;
                    try {
                        qn(l, "");
                    } catch (U) {
                        ve(e, e.return, U);
                    }
                }
                if (r & 4 && ((l = e.stateNode), l != null)) {
                    var i = e.memoizedProps,
                        u = n !== null ? n.memoizedProps : i,
                        c = e.type,
                        f = e.updateQueue;
                    if (((e.updateQueue = null), f !== null))
                        try {
                            c === "input" &&
                                i.type === "radio" &&
                                i.name != null &&
                                fu(l, i),
                                oi(c, u);
                            var w = oi(c, i);
                            for (u = 0; u < f.length; u += 2) {
                                var C = f[u],
                                    P = f[u + 1];
                                C === "style"
                                    ? wu(l, P)
                                    : C === "dangerouslySetInnerHTML"
                                    ? yu(l, P)
                                    : C === "children"
                                    ? qn(l, P)
                                    : re(l, C, P, w);
                            }
                            switch (c) {
                                case "input":
                                    ti(l, i);
                                    break;
                                case "textarea":
                                    hu(l, i);
                                    break;
                                case "select":
                                    var k = l._wrapperState.wasMultiple;
                                    l._wrapperState.wasMultiple = !!i.multiple;
                                    var z = i.value;
                                    z != null
                                        ? Sn(l, !!i.multiple, z, !1)
                                        : k !== !!i.multiple &&
                                          (i.defaultValue != null
                                              ? Sn(
                                                    l,
                                                    !!i.multiple,
                                                    i.defaultValue,
                                                    !0
                                                )
                                              : Sn(
                                                    l,
                                                    !!i.multiple,
                                                    i.multiple ? [] : "",
                                                    !1
                                                ));
                            }
                            l[mr] = i;
                        } catch (U) {
                            ve(e, e.return, U);
                        }
                }
                break;
            case 6:
                if ((mt(t, e), kt(e), r & 4)) {
                    if (e.stateNode === null) throw Error(a(162));
                    (l = e.stateNode), (i = e.memoizedProps);
                    try {
                        l.nodeValue = i;
                    } catch (U) {
                        ve(e, e.return, U);
                    }
                }
                break;
            case 3:
                if (
                    (mt(t, e),
                    kt(e),
                    r & 4 && n !== null && n.memoizedState.isDehydrated)
                )
                    try {
                        lr(t.containerInfo);
                    } catch (U) {
                        ve(e, e.return, U);
                    }
                break;
            case 4:
                mt(t, e), kt(e);
                break;
            case 13:
                mt(t, e),
                    kt(e),
                    (l = e.child),
                    l.flags & 8192 &&
                        ((i = l.memoizedState !== null),
                        (l.stateNode.isHidden = i),
                        !i ||
                            (l.alternate !== null &&
                                l.alternate.memoizedState !== null) ||
                            (Oo = ge())),
                    r & 4 && Ua(e);
                break;
            case 22:
                if (
                    ((C = n !== null && n.memoizedState !== null),
                    e.mode & 1
                        ? ((Ue = (w = Ue) || C), mt(t, e), (Ue = w))
                        : mt(t, e),
                    kt(e),
                    r & 8192)
                ) {
                    if (
                        ((w = e.memoizedState !== null),
                        (e.stateNode.isHidden = w) && !C && e.mode & 1)
                    )
                        for (M = e, C = e.child; C !== null; ) {
                            for (P = M = C; M !== null; ) {
                                switch (((k = M), (z = k.child), k.tag)) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        Pr(4, k, k.return);
                                        break;
                                    case 1:
                                        $n(k, k.return);
                                        var I = k.stateNode;
                                        if (
                                            typeof I.componentWillUnmount ==
                                            "function"
                                        ) {
                                            (r = k), (n = k.return);
                                            try {
                                                (t = r),
                                                    (I.props = t.memoizedProps),
                                                    (I.state = t.memoizedState),
                                                    I.componentWillUnmount();
                                            } catch (U) {
                                                ve(r, n, U);
                                            }
                                        }
                                        break;
                                    case 5:
                                        $n(k, k.return);
                                        break;
                                    case 22:
                                        if (k.memoizedState !== null) {
                                            $a(P);
                                            continue;
                                        }
                                }
                                z !== null ? ((z.return = k), (M = z)) : $a(P);
                            }
                            C = C.sibling;
                        }
                    e: for (C = null, P = e; ; ) {
                        if (P.tag === 5) {
                            if (C === null) {
                                C = P;
                                try {
                                    (l = P.stateNode),
                                        w
                                            ? ((i = l.style),
                                              typeof i.setProperty == "function"
                                                  ? i.setProperty(
                                                        "display",
                                                        "none",
                                                        "important"
                                                    )
                                                  : (i.display = "none"))
                                            : ((c = P.stateNode),
                                              (f = P.memoizedProps.style),
                                              (u =
                                                  f != null &&
                                                  f.hasOwnProperty("display")
                                                      ? f.display
                                                      : null),
                                              (c.style.display = gu(
                                                  "display",
                                                  u
                                              )));
                                } catch (U) {
                                    ve(e, e.return, U);
                                }
                            }
                        } else if (P.tag === 6) {
                            if (C === null)
                                try {
                                    P.stateNode.nodeValue = w
                                        ? ""
                                        : P.memoizedProps;
                                } catch (U) {
                                    ve(e, e.return, U);
                                }
                        } else if (
                            ((P.tag !== 22 && P.tag !== 23) ||
                                P.memoizedState === null ||
                                P === e) &&
                            P.child !== null
                        ) {
                            (P.child.return = P), (P = P.child);
                            continue;
                        }
                        if (P === e) break e;
                        for (; P.sibling === null; ) {
                            if (P.return === null || P.return === e) break e;
                            C === P && (C = null), (P = P.return);
                        }
                        C === P && (C = null),
                            (P.sibling.return = P.return),
                            (P = P.sibling);
                    }
                }
                break;
            case 19:
                mt(t, e), kt(e), r & 4 && Ua(e);
                break;
            case 21:
                break;
            default:
                mt(t, e), kt(e);
        }
    }
    function kt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null; ) {
                        if (Ma(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(a(160));
                }
                switch (r.tag) {
                    case 5:
                        var l = r.stateNode;
                        r.flags & 32 && (qn(l, ""), (r.flags &= -33));
                        var i = Ia(e);
                        To(e, i, l);
                        break;
                    case 3:
                    case 4:
                        var u = r.stateNode.containerInfo,
                            c = Ia(e);
                        Ro(e, c, u);
                        break;
                    default:
                        throw Error(a(161));
                }
            } catch (f) {
                ve(e, e.return, f);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function xd(e, t, n) {
        (M = e), Ba(e);
    }
    function Ba(e, t, n) {
        for (var r = (e.mode & 1) !== 0; M !== null; ) {
            var l = M,
                i = l.child;
            if (l.tag === 22 && r) {
                var u = l.memoizedState !== null || Tl;
                if (!u) {
                    var c = l.alternate,
                        f = (c !== null && c.memoizedState !== null) || Ue;
                    c = Tl;
                    var w = Ue;
                    if (((Tl = u), (Ue = f) && !w))
                        for (M = l; M !== null; )
                            (u = M),
                                (f = u.child),
                                u.tag === 22 && u.memoizedState !== null
                                    ? Va(l)
                                    : f !== null
                                    ? ((f.return = u), (M = f))
                                    : Va(l);
                    for (; i !== null; ) (M = i), Ba(i), (i = i.sibling);
                    (M = l), (Tl = c), (Ue = w);
                }
                Aa(e);
            } else
                l.subtreeFlags & 8772 && i !== null
                    ? ((i.return = l), (M = i))
                    : Aa(e);
        }
    }
    function Aa(e) {
        for (; M !== null; ) {
            var t = M;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ue || Ll(5, t);
                                break;
                            case 1:
                                var r = t.stateNode;
                                if (t.flags & 4 && !Ue)
                                    if (n === null) r.componentDidMount();
                                    else {
                                        var l =
                                            t.elementType === t.type
                                                ? n.memoizedProps
                                                : pt(t.type, n.memoizedProps);
                                        r.componentDidUpdate(
                                            l,
                                            n.memoizedState,
                                            r.__reactInternalSnapshotBeforeUpdate
                                        );
                                    }
                                var i = t.updateQueue;
                                i !== null && Us(t, i, r);
                                break;
                            case 3:
                                var u = t.updateQueue;
                                if (u !== null) {
                                    if (((n = null), t.child !== null))
                                        switch (t.child.tag) {
                                            case 5:
                                                n = t.child.stateNode;
                                                break;
                                            case 1:
                                                n = t.child.stateNode;
                                        }
                                    Us(t, u, n);
                                }
                                break;
                            case 5:
                                var c = t.stateNode;
                                if (n === null && t.flags & 4) {
                                    n = c;
                                    var f = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            f.autoFocus && n.focus();
                                            break;
                                        case "img":
                                            f.src && (n.src = f.src);
                                    }
                                }
                                break;
                            case 6:
                                break;
                            case 4:
                                break;
                            case 12:
                                break;
                            case 13:
                                if (t.memoizedState === null) {
                                    var w = t.alternate;
                                    if (w !== null) {
                                        var C = w.memoizedState;
                                        if (C !== null) {
                                            var P = C.dehydrated;
                                            P !== null && lr(P);
                                        }
                                    }
                                }
                                break;
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25:
                                break;
                            default:
                                throw Error(a(163));
                        }
                    Ue || (t.flags & 512 && jo(t));
                } catch (k) {
                    ve(t, t.return, k);
                }
            }
            if (t === e) {
                M = null;
                break;
            }
            if (((n = t.sibling), n !== null)) {
                (n.return = t.return), (M = n);
                break;
            }
            M = t.return;
        }
    }
    function $a(e) {
        for (; M !== null; ) {
            var t = M;
            if (t === e) {
                M = null;
                break;
            }
            var n = t.sibling;
            if (n !== null) {
                (n.return = t.return), (M = n);
                break;
            }
            M = t.return;
        }
    }
    function Va(e) {
        for (; M !== null; ) {
            var t = M;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Ll(4, t);
                        } catch (f) {
                            ve(t, n, f);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var l = t.return;
                            try {
                                r.componentDidMount();
                            } catch (f) {
                                ve(t, l, f);
                            }
                        }
                        var i = t.return;
                        try {
                            jo(t);
                        } catch (f) {
                            ve(t, i, f);
                        }
                        break;
                    case 5:
                        var u = t.return;
                        try {
                            jo(t);
                        } catch (f) {
                            ve(t, u, f);
                        }
                }
            } catch (f) {
                ve(t, t.return, f);
            }
            if (t === e) {
                M = null;
                break;
            }
            var c = t.sibling;
            if (c !== null) {
                (c.return = t.return), (M = c);
                break;
            }
            M = t.return;
        }
    }
    var kd = Math.ceil,
        zl = oe.ReactCurrentDispatcher,
        Lo = oe.ReactCurrentOwner,
        ut = oe.ReactCurrentBatchConfig,
        ee = 0,
        je = null,
        Se = null,
        Le = 0,
        tt = 0,
        Vn = At(0),
        Ce = 0,
        Nr = null,
        cn = 0,
        Ol = 0,
        zo = 0,
        jr = null,
        qe = null,
        Oo = 0,
        Hn = 1 / 0,
        zt = null,
        Ml = !1,
        Mo = null,
        Kt = null,
        Il = !1,
        qt = null,
        Dl = 0,
        Rr = 0,
        Io = null,
        Ul = -1,
        Fl = 0;
    function Ae() {
        return ee & 6 ? ge() : Ul !== -1 ? Ul : (Ul = ge());
    }
    function Yt(e) {
        return e.mode & 1
            ? ee & 2 && Le !== 0
                ? Le & -Le
                : id.transition !== null
                ? (Fl === 0 && (Fl = Mu()), Fl)
                : ((e = ie),
                  e !== 0 ||
                      ((e = window.event),
                      (e = e === void 0 ? 16 : Hu(e.type))),
                  e)
            : 1;
    }
    function vt(e, t, n, r) {
        if (50 < Rr) throw ((Rr = 0), (Io = null), Error(a(185)));
        bn(e, n, r),
            (!(ee & 2) || e !== je) &&
                (e === je && (!(ee & 2) && (Ol |= n), Ce === 4 && Xt(e, Le)),
                Ye(e, r),
                n === 1 &&
                    ee === 0 &&
                    !(t.mode & 1) &&
                    ((Hn = ge() + 500), dl && Vt()));
    }
    function Ye(e, t) {
        var n = e.callbackNode;
        lf(e, t);
        var r = qr(e, e === je ? Le : 0);
        if (r === 0)
            n !== null && Lu(n),
                (e.callbackNode = null),
                (e.callbackPriority = 0);
        else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((n != null && Lu(n), t === 1))
                e.tag === 0 ? ld(Wa.bind(null, e)) : js(Wa.bind(null, e)),
                    ed(function () {
                        !(ee & 6) && Vt();
                    }),
                    (n = null);
            else {
                switch (Iu(r)) {
                    case 1:
                        n = pi;
                        break;
                    case 4:
                        n = zu;
                        break;
                    case 16:
                        n = Hr;
                        break;
                    case 536870912:
                        n = Ou;
                        break;
                    default:
                        n = Hr;
                }
                n = Za(n, Ha.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
        }
    }
    function Ha(e, t) {
        if (((Ul = -1), (Fl = 0), ee & 6)) throw Error(a(327));
        var n = e.callbackNode;
        if (Wn() && e.callbackNode !== n) return null;
        var r = qr(e, e === je ? Le : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Bl(e, r);
        else {
            t = r;
            var l = ee;
            ee |= 2;
            var i = Ka();
            (je !== e || Le !== t) &&
                ((zt = null), (Hn = ge() + 500), dn(e, t));
            do
                try {
                    _d();
                    break;
                } catch (c) {
                    Qa(e, c);
                }
            while (1);
            Zi(),
                (zl.current = i),
                (ee = l),
                Se !== null ? (t = 0) : ((je = null), (Le = 0), (t = Ce));
        }
        if (t !== 0) {
            if (
                (t === 2 && ((l = hi(e)), l !== 0 && ((r = l), (t = Do(e, l)))),
                t === 1)
            )
                throw ((n = Nr), dn(e, 0), Xt(e, r), Ye(e, ge()), n);
            if (t === 6) Xt(e, r);
            else {
                if (
                    ((l = e.current.alternate),
                    !(r & 30) &&
                        !Ed(l) &&
                        ((t = Bl(e, r)),
                        t === 2 &&
                            ((i = hi(e)), i !== 0 && ((r = i), (t = Do(e, i)))),
                        t === 1))
                )
                    throw ((n = Nr), dn(e, 0), Xt(e, r), Ye(e, ge()), n);
                switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                    case 0:
                    case 1:
                        throw Error(a(345));
                    case 2:
                        pn(e, qe, zt);
                        break;
                    case 3:
                        if (
                            (Xt(e, r),
                            (r & 130023424) === r &&
                                ((t = Oo + 500 - ge()), 10 < t))
                        ) {
                            if (qr(e, 0) !== 0) break;
                            if (((l = e.suspendedLanes), (l & r) !== r)) {
                                Ae(), (e.pingedLanes |= e.suspendedLanes & l);
                                break;
                            }
                            e.timeoutHandle = $i(pn.bind(null, e, qe, zt), t);
                            break;
                        }
                        pn(e, qe, zt);
                        break;
                    case 4:
                        if ((Xt(e, r), (r & 4194240) === r)) break;
                        for (t = e.eventTimes, l = -1; 0 < r; ) {
                            var u = 31 - ct(r);
                            (i = 1 << u),
                                (u = t[u]),
                                u > l && (l = u),
                                (r &= ~i);
                        }
                        if (
                            ((r = l),
                            (r = ge() - r),
                            (r =
                                (120 > r
                                    ? 120
                                    : 480 > r
                                    ? 480
                                    : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                    ? 1920
                                    : 3e3 > r
                                    ? 3e3
                                    : 4320 > r
                                    ? 4320
                                    : 1960 * kd(r / 1960)) - r),
                            10 < r)
                        ) {
                            e.timeoutHandle = $i(pn.bind(null, e, qe, zt), r);
                            break;
                        }
                        pn(e, qe, zt);
                        break;
                    case 5:
                        pn(e, qe, zt);
                        break;
                    default:
                        throw Error(a(329));
                }
            }
        }
        return Ye(e, ge()), e.callbackNode === n ? Ha.bind(null, e) : null;
    }
    function Do(e, t) {
        var n = jr;
        return (
            e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256),
            (e = Bl(e, t)),
            e !== 2 && ((t = qe), (qe = n), t !== null && Uo(t)),
            e
        );
    }
    function Uo(e) {
        qe === null ? (qe = e) : qe.push.apply(qe, e);
    }
    function Ed(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && ((n = n.stores), n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var l = n[r],
                            i = l.getSnapshot;
                        l = l.value;
                        try {
                            if (!ft(i(), l)) return !1;
                        } catch {
                            return !1;
                        }
                    }
            }
            if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
                (n.return = t), (t = n);
            else {
                if (t === e) break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
        }
        return !0;
    }
    function Xt(e, t) {
        for (
            t &= ~zo,
                t &= ~Ol,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes;
            0 < t;

        ) {
            var n = 31 - ct(t),
                r = 1 << n;
            (e[n] = -1), (t &= ~r);
        }
    }
    function Wa(e) {
        if (ee & 6) throw Error(a(327));
        Wn();
        var t = qr(e, 0);
        if (!(t & 1)) return Ye(e, ge()), null;
        var n = Bl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = hi(e);
            r !== 0 && ((t = r), (n = Do(e, r)));
        }
        if (n === 1) throw ((n = Nr), dn(e, 0), Xt(e, t), Ye(e, ge()), n);
        if (n === 6) throw Error(a(345));
        return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            pn(e, qe, zt),
            Ye(e, ge()),
            null
        );
    }
    function Fo(e, t) {
        var n = ee;
        ee |= 1;
        try {
            return e(t);
        } finally {
            (ee = n), ee === 0 && ((Hn = ge() + 500), dl && Vt());
        }
    }
    function fn(e) {
        qt !== null && qt.tag === 0 && !(ee & 6) && Wn();
        var t = ee;
        ee |= 1;
        var n = ut.transition,
            r = ie;
        try {
            if (((ut.transition = null), (ie = 1), e)) return e();
        } finally {
            (ie = r), (ut.transition = n), (ee = t), !(ee & 6) && Vt();
        }
    }
    function Bo() {
        (tt = Vn.current), fe(Vn);
    }
    function dn(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((n !== -1 && ((e.timeoutHandle = -1), bf(n)), Se !== null))
            for (n = Se.return; n !== null; ) {
                var r = n;
                switch ((qi(r), r.tag)) {
                    case 1:
                        (r = r.type.childContextTypes), r != null && cl();
                        break;
                    case 3:
                        Bn(), fe(We), fe(Me), so();
                        break;
                    case 5:
                        oo(r);
                        break;
                    case 4:
                        Bn();
                        break;
                    case 13:
                        fe(he);
                        break;
                    case 19:
                        fe(he);
                        break;
                    case 10:
                        bi(r.type._context);
                        break;
                    case 22:
                    case 23:
                        Bo();
                }
                n = n.return;
            }
        if (
            ((je = e),
            (Se = e = Gt(e.current, null)),
            (Le = tt = t),
            (Ce = 0),
            (Nr = null),
            (zo = Ol = cn = 0),
            (qe = jr = null),
            un !== null)
        ) {
            for (t = 0; t < un.length; t++)
                if (((n = un[t]), (r = n.interleaved), r !== null)) {
                    n.interleaved = null;
                    var l = r.next,
                        i = n.pending;
                    if (i !== null) {
                        var u = i.next;
                        (i.next = l), (r.next = u);
                    }
                    n.pending = r;
                }
            un = null;
        }
        return e;
    }
    function Qa(e, t) {
        do {
            var n = Se;
            try {
                if ((Zi(), (El.current = Nl), Cl)) {
                    for (var r = me.memoizedState; r !== null; ) {
                        var l = r.queue;
                        l !== null && (l.pending = null), (r = r.next);
                    }
                    Cl = !1;
                }
                if (
                    ((an = 0),
                    (Ne = Ee = me = null),
                    (xr = !1),
                    (kr = 0),
                    (Lo.current = null),
                    n === null || n.return === null)
                ) {
                    (Ce = 1), (Nr = t), (Se = null);
                    break;
                }
                e: {
                    var i = e,
                        u = n.return,
                        c = n,
                        f = t;
                    if (
                        ((t = Le),
                        (c.flags |= 32768),
                        f !== null &&
                            typeof f == "object" &&
                            typeof f.then == "function")
                    ) {
                        var w = f,
                            C = c,
                            P = C.tag;
                        if (
                            !(C.mode & 1) &&
                            (P === 0 || P === 11 || P === 15)
                        ) {
                            var k = C.alternate;
                            k
                                ? ((C.updateQueue = k.updateQueue),
                                  (C.memoizedState = k.memoizedState),
                                  (C.lanes = k.lanes))
                                : ((C.updateQueue = null),
                                  (C.memoizedState = null));
                        }
                        var z = va(u);
                        if (z !== null) {
                            (z.flags &= -257),
                                ya(z, u, c, i, t),
                                z.mode & 1 && ma(i, w, t),
                                (t = z),
                                (f = w);
                            var I = t.updateQueue;
                            if (I === null) {
                                var U = new Set();
                                U.add(f), (t.updateQueue = U);
                            } else I.add(f);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                ma(i, w, t), Ao();
                                break e;
                            }
                            f = Error(a(426));
                        }
                    } else if (de && c.mode & 1) {
                        var we = va(u);
                        if (we !== null) {
                            !(we.flags & 65536) && (we.flags |= 256),
                                ya(we, u, c, i, t),
                                Gi(An(f, c));
                            break e;
                        }
                    }
                    (i = f = An(f, c)),
                        Ce !== 4 && (Ce = 2),
                        jr === null ? (jr = [i]) : jr.push(i),
                        (i = u);
                    do {
                        switch (i.tag) {
                            case 3:
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var y = pa(i, f, t);
                                Ds(i, y);
                                break e;
                            case 1:
                                c = f;
                                var h = i.type,
                                    g = i.stateNode;
                                if (
                                    !(i.flags & 128) &&
                                    (typeof h.getDerivedStateFromError ==
                                        "function" ||
                                        (g !== null &&
                                            typeof g.componentDidCatch ==
                                                "function" &&
                                            (Kt === null || !Kt.has(g))))
                                ) {
                                    (i.flags |= 65536),
                                        (t &= -t),
                                        (i.lanes |= t);
                                    var j = ha(i, c, t);
                                    Ds(i, j);
                                    break e;
                                }
                        }
                        i = i.return;
                    } while (i !== null);
                }
                Ya(n);
            } catch (F) {
                (t = F), Se === n && n !== null && (Se = n = n.return);
                continue;
            }
            break;
        } while (1);
    }
    function Ka() {
        var e = zl.current;
        return (zl.current = Nl), e === null ? Nl : e;
    }
    function Ao() {
        (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
            je === null ||
                (!(cn & 268435455) && !(Ol & 268435455)) ||
                Xt(je, Le);
    }
    function Bl(e, t) {
        var n = ee;
        ee |= 2;
        var r = Ka();
        (je !== e || Le !== t) && ((zt = null), dn(e, t));
        do
            try {
                Cd();
                break;
            } catch (l) {
                Qa(e, l);
            }
        while (1);
        if ((Zi(), (ee = n), (zl.current = r), Se !== null))
            throw Error(a(261));
        return (je = null), (Le = 0), Ce;
    }
    function Cd() {
        for (; Se !== null; ) qa(Se);
    }
    function _d() {
        for (; Se !== null && !Xc(); ) qa(Se);
    }
    function qa(e) {
        var t = Ja(e.alternate, e, tt);
        (e.memoizedProps = e.pendingProps),
            t === null ? Ya(e) : (Se = t),
            (Lo.current = null);
    }
    function Ya(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (((e = t.return), t.flags & 32768)) {
                if (((n = gd(n, t)), n !== null)) {
                    (n.flags &= 32767), (Se = n);
                    return;
                }
                if (e !== null)
                    (e.flags |= 32768),
                        (e.subtreeFlags = 0),
                        (e.deletions = null);
                else {
                    (Ce = 6), (Se = null);
                    return;
                }
            } else if (((n = yd(n, t, tt)), n !== null)) {
                Se = n;
                return;
            }
            if (((t = t.sibling), t !== null)) {
                Se = t;
                return;
            }
            Se = t = e;
        } while (t !== null);
        Ce === 0 && (Ce = 5);
    }
    function pn(e, t, n) {
        var r = ie,
            l = ut.transition;
        try {
            (ut.transition = null), (ie = 1), Pd(e, t, n, r);
        } finally {
            (ut.transition = l), (ie = r);
        }
        return null;
    }
    function Pd(e, t, n, r) {
        do Wn();
        while (qt !== null);
        if (ee & 6) throw Error(a(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(a(177));
        (e.callbackNode = null), (e.callbackPriority = 0);
        var i = n.lanes | n.childLanes;
        if (
            (of(e, i),
            e === je && ((Se = je = null), (Le = 0)),
            (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
                Il ||
                ((Il = !0),
                Za(Hr, function () {
                    return Wn(), null;
                })),
            (i = (n.flags & 15990) !== 0),
            n.subtreeFlags & 15990 || i)
        ) {
            (i = ut.transition), (ut.transition = null);
            var u = ie;
            ie = 1;
            var c = ee;
            (ee |= 4),
                (Lo.current = null),
                Sd(e, n),
                Fa(n, e),
                Kf(Bi),
                (Gr = !!Fi),
                (Bi = Fi = null),
                (e.current = n),
                xd(n),
                Gc(),
                (ee = c),
                (ie = u),
                (ut.transition = i);
        } else e.current = n;
        if (
            (Il && ((Il = !1), (qt = e), (Dl = l)),
            (i = e.pendingLanes),
            i === 0 && (Kt = null),
            bc(n.stateNode),
            Ye(e, ge()),
            t !== null)
        )
            for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                (l = t[n]),
                    r(l.value, { componentStack: l.stack, digest: l.digest });
        if (Ml) throw ((Ml = !1), (e = Mo), (Mo = null), e);
        return (
            Dl & 1 && e.tag !== 0 && Wn(),
            (i = e.pendingLanes),
            i & 1 ? (e === Io ? Rr++ : ((Rr = 0), (Io = e))) : (Rr = 0),
            Vt(),
            null
        );
    }
    function Wn() {
        if (qt !== null) {
            var e = Iu(Dl),
                t = ut.transition,
                n = ie;
            try {
                if (
                    ((ut.transition = null),
                    (ie = 16 > e ? 16 : e),
                    qt === null)
                )
                    var r = !1;
                else {
                    if (((e = qt), (qt = null), (Dl = 0), ee & 6))
                        throw Error(a(331));
                    var l = ee;
                    for (ee |= 4, M = e.current; M !== null; ) {
                        var i = M,
                            u = i.child;
                        if (M.flags & 16) {
                            var c = i.deletions;
                            if (c !== null) {
                                for (var f = 0; f < c.length; f++) {
                                    var w = c[f];
                                    for (M = w; M !== null; ) {
                                        var C = M;
                                        switch (C.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Pr(8, C, i);
                                        }
                                        var P = C.child;
                                        if (P !== null) (P.return = C), (M = P);
                                        else
                                            for (; M !== null; ) {
                                                C = M;
                                                var k = C.sibling,
                                                    z = C.return;
                                                if ((Oa(C), C === w)) {
                                                    M = null;
                                                    break;
                                                }
                                                if (k !== null) {
                                                    (k.return = z), (M = k);
                                                    break;
                                                }
                                                M = z;
                                            }
                                    }
                                }
                                var I = i.alternate;
                                if (I !== null) {
                                    var U = I.child;
                                    if (U !== null) {
                                        I.child = null;
                                        do {
                                            var we = U.sibling;
                                            (U.sibling = null), (U = we);
                                        } while (U !== null);
                                    }
                                }
                                M = i;
                            }
                        }
                        if (i.subtreeFlags & 2064 && u !== null)
                            (u.return = i), (M = u);
                        else
                            e: for (; M !== null; ) {
                                if (((i = M), i.flags & 2048))
                                    switch (i.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Pr(9, i, i.return);
                                    }
                                var y = i.sibling;
                                if (y !== null) {
                                    (y.return = i.return), (M = y);
                                    break e;
                                }
                                M = i.return;
                            }
                    }
                    var h = e.current;
                    for (M = h; M !== null; ) {
                        u = M;
                        var g = u.child;
                        if (u.subtreeFlags & 2064 && g !== null)
                            (g.return = u), (M = g);
                        else
                            e: for (u = h; M !== null; ) {
                                if (((c = M), c.flags & 2048))
                                    try {
                                        switch (c.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Ll(9, c);
                                        }
                                    } catch (F) {
                                        ve(c, c.return, F);
                                    }
                                if (c === u) {
                                    M = null;
                                    break e;
                                }
                                var j = c.sibling;
                                if (j !== null) {
                                    (j.return = c.return), (M = j);
                                    break e;
                                }
                                M = c.return;
                            }
                    }
                    if (
                        ((ee = l),
                        Vt(),
                        gt && typeof gt.onPostCommitFiberRoot == "function")
                    )
                        try {
                            gt.onPostCommitFiberRoot(Wr, e);
                        } catch {}
                    r = !0;
                }
                return r;
            } finally {
                (ie = n), (ut.transition = t);
            }
        }
        return !1;
    }
    function Xa(e, t, n) {
        (t = An(n, t)),
            (t = pa(e, t, 1)),
            (e = Wt(e, t, 1)),
            (t = Ae()),
            e !== null && (bn(e, 1, t), Ye(e, t));
    }
    function ve(e, t, n) {
        if (e.tag === 3) Xa(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Xa(t, e, n);
                    break;
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == "function" ||
                        (typeof r.componentDidCatch == "function" &&
                            (Kt === null || !Kt.has(r)))
                    ) {
                        (e = An(n, e)),
                            (e = ha(t, e, 1)),
                            (t = Wt(t, e, 1)),
                            (e = Ae()),
                            t !== null && (bn(t, 1, e), Ye(t, e));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function Nd(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t),
            (t = Ae()),
            (e.pingedLanes |= e.suspendedLanes & n),
            je === e &&
                (Le & n) === n &&
                (Ce === 4 ||
                (Ce === 3 && (Le & 130023424) === Le && 500 > ge() - Oo)
                    ? dn(e, 0)
                    : (zo |= n)),
            Ye(e, t);
    }
    function Ga(e, t) {
        t === 0 &&
            (e.mode & 1
                ? ((t = Kr), (Kr <<= 1), !(Kr & 130023424) && (Kr = 4194304))
                : (t = 1));
        var n = Ae();
        (e = Rt(e, t)), e !== null && (bn(e, t, n), Ye(e, n));
    }
    function jd(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), Ga(e, n);
    }
    function Rd(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var r = e.stateNode,
                    l = e.memoizedState;
                l !== null && (n = l.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(a(314));
        }
        r !== null && r.delete(t), Ga(e, n);
    }
    var Ja;
    Ja = function (e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || We.current) Ke = !0;
            else {
                if (!(e.lanes & n) && !(t.flags & 128))
                    return (Ke = !1), vd(e, t, n);
                Ke = !!(e.flags & 131072);
            }
        else (Ke = !1), de && t.flags & 1048576 && Rs(t, hl, t.index);
        switch (((t.lanes = 0), t.tag)) {
            case 2:
                var r = t.type;
                Rl(e, t), (e = t.pendingProps);
                var l = zn(t, Me.current);
                Un(t, n), (l = fo(null, t, r, e, l, n));
                var i = po();
                return (
                    (t.flags |= 1),
                    typeof l == "object" &&
                    l !== null &&
                    typeof l.render == "function" &&
                    l.$$typeof === void 0
                        ? ((t.tag = 1),
                          (t.memoizedState = null),
                          (t.updateQueue = null),
                          Qe(r) ? ((i = !0), fl(t)) : (i = !1),
                          (t.memoizedState =
                              l.state !== null && l.state !== void 0
                                  ? l.state
                                  : null),
                          no(t),
                          (l.updater = Sl),
                          (t.stateNode = l),
                          (l._reactInternals = t),
                          lo(t, r, e, n),
                          (t = xo(null, t, r, !0, i, n)))
                        : ((t.tag = 0),
                          de && i && Ki(t),
                          Be(null, t, l, n),
                          (t = t.child)),
                    t
                );
            case 16:
                r = t.elementType;
                e: {
                    switch (
                        (Rl(e, t),
                        (e = t.pendingProps),
                        (l = r._init),
                        (r = l(r._payload)),
                        (t.type = r),
                        (l = t.tag = Ld(r)),
                        (e = pt(r, e)),
                        l)
                    ) {
                        case 0:
                            t = So(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Ea(null, t, r, e, n);
                            break e;
                        case 11:
                            t = ga(null, t, r, e, n);
                            break e;
                        case 14:
                            t = wa(null, t, r, pt(r.type, e), n);
                            break e;
                    }
                    throw Error(a(306, r, ""));
                }
                return t;
            case 0:
                return (
                    (r = t.type),
                    (l = t.pendingProps),
                    (l = t.elementType === r ? l : pt(r, l)),
                    So(e, t, r, l, n)
                );
            case 1:
                return (
                    (r = t.type),
                    (l = t.pendingProps),
                    (l = t.elementType === r ? l : pt(r, l)),
                    Ea(e, t, r, l, n)
                );
            case 3:
                e: {
                    if ((Ca(t), e === null)) throw Error(a(387));
                    (r = t.pendingProps),
                        (i = t.memoizedState),
                        (l = i.element),
                        Is(e, t),
                        wl(t, r, null, n);
                    var u = t.memoizedState;
                    if (((r = u.element), i.isDehydrated))
                        if (
                            ((i = {
                                element: r,
                                isDehydrated: !1,
                                cache: u.cache,
                                pendingSuspenseBoundaries:
                                    u.pendingSuspenseBoundaries,
                                transitions: u.transitions,
                            }),
                            (t.updateQueue.baseState = i),
                            (t.memoizedState = i),
                            t.flags & 256)
                        ) {
                            (l = An(Error(a(423)), t)), (t = _a(e, t, r, n, l));
                            break e;
                        } else if (r !== l) {
                            (l = An(Error(a(424)), t)), (t = _a(e, t, r, n, l));
                            break e;
                        } else
                            for (
                                et = Bt(t.stateNode.containerInfo.firstChild),
                                    be = t,
                                    de = !0,
                                    dt = null,
                                    n = Ws(t, null, r, n),
                                    t.child = n;
                                n;

                            )
                                (n.flags = (n.flags & -3) | 4096),
                                    (n = n.sibling);
                    else {
                        if ((In(), r === l)) {
                            t = Lt(e, t, n);
                            break e;
                        }
                        Be(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return (
                    Qs(t),
                    e === null && Xi(t),
                    (r = t.type),
                    (l = t.pendingProps),
                    (i = e !== null ? e.memoizedProps : null),
                    (u = l.children),
                    Ai(r, l)
                        ? (u = null)
                        : i !== null && Ai(r, i) && (t.flags |= 32),
                    ka(e, t),
                    Be(e, t, u, n),
                    t.child
                );
            case 6:
                return e === null && Xi(t), null;
            case 13:
                return Pa(e, t, n);
            case 4:
                return (
                    io(t, t.stateNode.containerInfo),
                    (r = t.pendingProps),
                    e === null ? (t.child = Fn(t, null, r, n)) : Be(e, t, r, n),
                    t.child
                );
            case 11:
                return (
                    (r = t.type),
                    (l = t.pendingProps),
                    (l = t.elementType === r ? l : pt(r, l)),
                    ga(e, t, r, l, n)
                );
            case 7:
                return Be(e, t, t.pendingProps, n), t.child;
            case 8:
                return Be(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Be(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (
                        ((r = t.type._context),
                        (l = t.pendingProps),
                        (i = t.memoizedProps),
                        (u = l.value),
                        ae(vl, r._currentValue),
                        (r._currentValue = u),
                        i !== null)
                    )
                        if (ft(i.value, u)) {
                            if (i.children === l.children && !We.current) {
                                t = Lt(e, t, n);
                                break e;
                            }
                        } else
                            for (
                                i = t.child, i !== null && (i.return = t);
                                i !== null;

                            ) {
                                var c = i.dependencies;
                                if (c !== null) {
                                    u = i.child;
                                    for (var f = c.firstContext; f !== null; ) {
                                        if (f.context === r) {
                                            if (i.tag === 1) {
                                                (f = Tt(-1, n & -n)),
                                                    (f.tag = 2);
                                                var w = i.updateQueue;
                                                if (w !== null) {
                                                    w = w.shared;
                                                    var C = w.pending;
                                                    C === null
                                                        ? (f.next = f)
                                                        : ((f.next = C.next),
                                                          (C.next = f)),
                                                        (w.pending = f);
                                                }
                                            }
                                            (i.lanes |= n),
                                                (f = i.alternate),
                                                f !== null && (f.lanes |= n),
                                                eo(i.return, n, t),
                                                (c.lanes |= n);
                                            break;
                                        }
                                        f = f.next;
                                    }
                                } else if (i.tag === 10)
                                    u = i.type === t.type ? null : i.child;
                                else if (i.tag === 18) {
                                    if (((u = i.return), u === null))
                                        throw Error(a(341));
                                    (u.lanes |= n),
                                        (c = u.alternate),
                                        c !== null && (c.lanes |= n),
                                        eo(u, n, t),
                                        (u = i.sibling);
                                } else u = i.child;
                                if (u !== null) u.return = i;
                                else
                                    for (u = i; u !== null; ) {
                                        if (u === t) {
                                            u = null;
                                            break;
                                        }
                                        if (((i = u.sibling), i !== null)) {
                                            (i.return = u.return), (u = i);
                                            break;
                                        }
                                        u = u.return;
                                    }
                                i = u;
                            }
                    Be(e, t, l.children, n), (t = t.child);
                }
                return t;
            case 9:
                return (
                    (l = t.type),
                    (r = t.pendingProps.children),
                    Un(t, n),
                    (l = it(l)),
                    (r = r(l)),
                    (t.flags |= 1),
                    Be(e, t, r, n),
                    t.child
                );
            case 14:
                return (
                    (r = t.type),
                    (l = pt(r, t.pendingProps)),
                    (l = pt(r.type, l)),
                    wa(e, t, r, l, n)
                );
            case 15:
                return Sa(e, t, t.type, t.pendingProps, n);
            case 17:
                return (
                    (r = t.type),
                    (l = t.pendingProps),
                    (l = t.elementType === r ? l : pt(r, l)),
                    Rl(e, t),
                    (t.tag = 1),
                    Qe(r) ? ((e = !0), fl(t)) : (e = !1),
                    Un(t, n),
                    As(t, r, l),
                    lo(t, r, l, n),
                    xo(null, t, r, !0, e, n)
                );
            case 19:
                return ja(e, t, n);
            case 22:
                return xa(e, t, n);
        }
        throw Error(a(156, t.tag));
    };
    function Za(e, t) {
        return Tu(e, t);
    }
    function Td(e, t, n, r) {
        (this.tag = e),
            (this.key = n),
            (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                    null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                    null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
    }
    function st(e, t, n, r) {
        return new Td(e, t, n, r);
    }
    function $o(e) {
        return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function Ld(e) {
        if (typeof e == "function") return $o(e) ? 1 : 0;
        if (e != null) {
            if (((e = e.$$typeof), e === Je)) return 11;
            if (e === nt) return 14;
        }
        return 2;
    }
    function Gt(e, t) {
        var n = e.alternate;
        return (
            n === null
                ? ((n = st(e.tag, t, e.key, e.mode)),
                  (n.elementType = e.elementType),
                  (n.type = e.type),
                  (n.stateNode = e.stateNode),
                  (n.alternate = e),
                  (e.alternate = n))
                : ((n.pendingProps = t),
                  (n.type = e.type),
                  (n.flags = 0),
                  (n.subtreeFlags = 0),
                  (n.deletions = null)),
            (n.flags = e.flags & 14680064),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
                t === null
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
        );
    }
    function Al(e, t, n, r, l, i) {
        var u = 2;
        if (((r = e), typeof e == "function")) $o(e) && (u = 1);
        else if (typeof e == "string") u = 5;
        else
            e: switch (e) {
                case ze:
                    return hn(n.children, l, i, t);
                case $e:
                    (u = 8), (l |= 8);
                    break;
                case yt:
                    return (
                        (e = st(12, n, t, l | 2)),
                        (e.elementType = yt),
                        (e.lanes = i),
                        e
                    );
                case Oe:
                    return (
                        (e = st(13, n, t, l)),
                        (e.elementType = Oe),
                        (e.lanes = i),
                        e
                    );
                case Ve:
                    return (
                        (e = st(19, n, t, l)),
                        (e.elementType = Ve),
                        (e.lanes = i),
                        e
                    );
                case pe:
                    return $l(n, l, i, t);
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case at:
                                u = 10;
                                break e;
                            case Ct:
                                u = 9;
                                break e;
                            case Je:
                                u = 11;
                                break e;
                            case nt:
                                u = 14;
                                break e;
                            case Pe:
                                (u = 16), (r = null);
                                break e;
                        }
                    throw Error(a(130, e == null ? e : typeof e, ""));
            }
        return (
            (t = st(u, n, t, l)),
            (t.elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
        );
    }
    function hn(e, t, n, r) {
        return (e = st(7, e, r, t)), (e.lanes = n), e;
    }
    function $l(e, t, n, r) {
        return (
            (e = st(22, e, r, t)),
            (e.elementType = pe),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
        );
    }
    function Vo(e, t, n) {
        return (e = st(6, e, null, t)), (e.lanes = n), e;
    }
    function Ho(e, t, n) {
        return (
            (t = st(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = n),
            (t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
            }),
            t
        );
    }
    function zd(e, t, n, r, l) {
        (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
                this.pingCache =
                this.current =
                this.pendingChildren =
                    null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mi(0)),
            (this.expirationTimes = mi(-1)),
            (this.entangledLanes =
                this.finishedLanes =
                this.mutableReadLanes =
                this.expiredLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = mi(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = l),
            (this.mutableSourceEagerHydrationData = null);
    }
    function Wo(e, t, n, r, l, i, u, c, f) {
        return (
            (e = new zd(e, t, n, c, f)),
            t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
            (i = st(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
                element: r,
                isDehydrated: n,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
            }),
            no(i),
            e
        );
    }
    function Od(e, t, n) {
        var r =
            3 < arguments.length && arguments[3] !== void 0
                ? arguments[3]
                : null;
        return {
            $$typeof: ye,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
        };
    }
    function ba(e) {
        if (!e) return $t;
        e = e._reactInternals;
        e: {
            if (tn(e) !== e || e.tag !== 1) throw Error(a(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (Qe(t.type)) {
                            t =
                                t.stateNode
                                    .__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                t = t.return;
            } while (t !== null);
            throw Error(a(171));
        }
        if (e.tag === 1) {
            var n = e.type;
            if (Qe(n)) return Ps(e, n, t);
        }
        return t;
    }
    function ec(e, t, n, r, l, i, u, c, f) {
        return (
            (e = Wo(n, r, !0, e, l, i, u, c, f)),
            (e.context = ba(null)),
            (n = e.current),
            (r = Ae()),
            (l = Yt(n)),
            (i = Tt(r, l)),
            (i.callback = t ?? null),
            Wt(n, i, l),
            (e.current.lanes = l),
            bn(e, l, r),
            Ye(e, r),
            e
        );
    }
    function Vl(e, t, n, r) {
        var l = t.current,
            i = Ae(),
            u = Yt(l);
        return (
            (n = ba(n)),
            t.context === null ? (t.context = n) : (t.pendingContext = n),
            (t = Tt(i, u)),
            (t.payload = { element: e }),
            (r = r === void 0 ? null : r),
            r !== null && (t.callback = r),
            (e = Wt(l, t, u)),
            e !== null && (vt(e, l, u, i), gl(e, l, u)),
            u
        );
    }
    function Hl(e) {
        if (((e = e.current), !e.child)) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function tc(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Qo(e, t) {
        tc(e, t), (e = e.alternate) && tc(e, t);
    }
    function Md() {
        return null;
    }
    var nc =
        typeof reportError == "function"
            ? reportError
            : function (e) {
                  console.error(e);
              };
    function Ko(e) {
        this._internalRoot = e;
    }
    (Wl.prototype.render = Ko.prototype.render =
        function (e) {
            var t = this._internalRoot;
            if (t === null) throw Error(a(409));
            Vl(e, t, null, null);
        }),
        (Wl.prototype.unmount = Ko.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    fn(function () {
                        Vl(null, e, null, null);
                    }),
                        (t[_t] = null);
                }
            });
    function Wl(e) {
        this._internalRoot = e;
    }
    Wl.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = Fu();
            e = { blockedOn: null, target: e, priority: t };
            for (
                var n = 0;
                n < Dt.length && t !== 0 && t < Dt[n].priority;
                n++
            );
            Dt.splice(n, 0, e), n === 0 && $u(e);
        }
    };
    function qo(e) {
        return !(
            !e ||
            (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        );
    }
    function Ql(e) {
        return !(
            !e ||
            (e.nodeType !== 1 &&
                e.nodeType !== 9 &&
                e.nodeType !== 11 &&
                (e.nodeType !== 8 ||
                    e.nodeValue !== " react-mount-point-unstable "))
        );
    }
    function rc() {}
    function Id(e, t, n, r, l) {
        if (l) {
            if (typeof r == "function") {
                var i = r;
                r = function () {
                    var w = Hl(u);
                    i.call(w);
                };
            }
            var u = ec(t, r, e, 0, null, !1, !1, "", rc);
            return (
                (e._reactRootContainer = u),
                (e[_t] = u.current),
                pr(e.nodeType === 8 ? e.parentNode : e),
                fn(),
                u
            );
        }
        for (; (l = e.lastChild); ) e.removeChild(l);
        if (typeof r == "function") {
            var c = r;
            r = function () {
                var w = Hl(f);
                c.call(w);
            };
        }
        var f = Wo(e, 0, !1, null, null, !1, !1, "", rc);
        return (
            (e._reactRootContainer = f),
            (e[_t] = f.current),
            pr(e.nodeType === 8 ? e.parentNode : e),
            fn(function () {
                Vl(t, f, n, r);
            }),
            f
        );
    }
    function Kl(e, t, n, r, l) {
        var i = n._reactRootContainer;
        if (i) {
            var u = i;
            if (typeof l == "function") {
                var c = l;
                l = function () {
                    var f = Hl(u);
                    c.call(f);
                };
            }
            Vl(t, u, e, l);
        } else u = Id(n, t, e, l, r);
        return Hl(u);
    }
    (Du = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Zn(t.pendingLanes);
                    n !== 0 &&
                        (vi(t, n | 1),
                        Ye(t, ge()),
                        !(ee & 6) && ((Hn = ge() + 500), Vt()));
                }
                break;
            case 13:
                fn(function () {
                    var r = Rt(e, 1);
                    if (r !== null) {
                        var l = Ae();
                        vt(r, e, 1, l);
                    }
                }),
                    Qo(e, 1);
        }
    }),
        (yi = function (e) {
            if (e.tag === 13) {
                var t = Rt(e, 134217728);
                if (t !== null) {
                    var n = Ae();
                    vt(t, e, 134217728, n);
                }
                Qo(e, 134217728);
            }
        }),
        (Uu = function (e) {
            if (e.tag === 13) {
                var t = Yt(e),
                    n = Rt(e, t);
                if (n !== null) {
                    var r = Ae();
                    vt(n, e, t, r);
                }
                Qo(e, t);
            }
        }),
        (Fu = function () {
            return ie;
        }),
        (Bu = function (e, t) {
            var n = ie;
            try {
                return (ie = e), t();
            } finally {
                ie = n;
            }
        }),
        (ai = function (e, t, n) {
            switch (t) {
                case "input":
                    if (
                        (ti(e, n),
                        (t = n.name),
                        n.type === "radio" && t != null)
                    ) {
                        for (n = e; n.parentNode; ) n = n.parentNode;
                        for (
                            n = n.querySelectorAll(
                                "input[name=" +
                                    JSON.stringify("" + t) +
                                    '][type="radio"]'
                            ),
                                t = 0;
                            t < n.length;
                            t++
                        ) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var l = al(r);
                                if (!l) throw Error(a(90));
                                au(r), ti(r, l);
                            }
                        }
                    }
                    break;
                case "textarea":
                    hu(e, n);
                    break;
                case "select":
                    (t = n.value), t != null && Sn(e, !!n.multiple, t, !1);
            }
        }),
        (Eu = Fo),
        (Cu = fn);
    var Dd = { usingClientEntryPoint: !1, Events: [vr, Tn, al, xu, ku, Fo] },
        Tr = {
            findFiberByHostInstance: nn,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
        },
        Ud = {
            bundleType: Tr.bundleType,
            version: Tr.version,
            rendererPackageName: Tr.rendererPackageName,
            rendererConfig: Tr.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: oe.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return (e = ju(e)), e === null ? null : e.stateNode;
            },
            findFiberByHostInstance: Tr.findFiberByHostInstance || Md,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ql.isDisabled && ql.supportsFiber)
            try {
                (Wr = ql.inject(Ud)), (gt = ql);
            } catch {}
    }
    return (
        (Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dd),
        (Xe.createPortal = function (e, t) {
            var n =
                2 < arguments.length && arguments[2] !== void 0
                    ? arguments[2]
                    : null;
            if (!qo(t)) throw Error(a(200));
            return Od(e, t, null, n);
        }),
        (Xe.createRoot = function (e, t) {
            if (!qo(e)) throw Error(a(299));
            var n = !1,
                r = "",
                l = nc;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (n = !0),
                    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
                    t.onRecoverableError !== void 0 &&
                        (l = t.onRecoverableError)),
                (t = Wo(e, 1, !1, null, null, n, !1, r, l)),
                (e[_t] = t.current),
                pr(e.nodeType === 8 ? e.parentNode : e),
                new Ko(t)
            );
        }),
        (Xe.findDOMNode = function (e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0)
                throw typeof e.render == "function"
                    ? Error(a(188))
                    : ((e = Object.keys(e).join(",")), Error(a(268, e)));
            return (e = ju(t)), (e = e === null ? null : e.stateNode), e;
        }),
        (Xe.flushSync = function (e) {
            return fn(e);
        }),
        (Xe.hydrate = function (e, t, n) {
            if (!Ql(t)) throw Error(a(200));
            return Kl(null, e, t, !0, n);
        }),
        (Xe.hydrateRoot = function (e, t, n) {
            if (!qo(e)) throw Error(a(405));
            var r = (n != null && n.hydratedSources) || null,
                l = !1,
                i = "",
                u = nc;
            if (
                (n != null &&
                    (n.unstable_strictMode === !0 && (l = !0),
                    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
                    n.onRecoverableError !== void 0 &&
                        (u = n.onRecoverableError)),
                (t = ec(t, null, e, 1, n ?? null, l, !1, i, u)),
                (e[_t] = t.current),
                pr(e),
                r)
            )
                for (e = 0; e < r.length; e++)
                    (n = r[e]),
                        (l = n._getVersion),
                        (l = l(n._source)),
                        t.mutableSourceEagerHydrationData == null
                            ? (t.mutableSourceEagerHydrationData = [n, l])
                            : t.mutableSourceEagerHydrationData.push(n, l);
            return new Wl(t);
        }),
        (Xe.render = function (e, t, n) {
            if (!Ql(t)) throw Error(a(200));
            return Kl(null, e, t, !1, n);
        }),
        (Xe.unmountComponentAtNode = function (e) {
            if (!Ql(e)) throw Error(a(40));
            return e._reactRootContainer
                ? (fn(function () {
                      Kl(null, null, e, !1, function () {
                          (e._reactRootContainer = null), (e[_t] = null);
                      });
                  }),
                  !0)
                : !1;
        }),
        (Xe.unstable_batchedUpdates = Fo),
        (Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ql(n)) throw Error(a(200));
            if (e == null || e._reactInternals === void 0) throw Error(a(38));
            return Kl(e, t, n, !1, r);
        }),
        (Xe.version = "18.2.0-next-9e3b772b8-20220608"),
        Xe
    );
}
function _c() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_c);
        } catch (o) {
            console.error(o);
        }
}
_c(), (Cc.exports = Wd());
var Pc = Cc.exports;
const Qd = wc(Pc),
    Kd = gc({ __proto__: null, default: Qd }, [Pc]),
    qd = Sc(Kd);
var ac = qd;
(Zo.createRoot = ac.createRoot), (Zo.hydrateRoot = ac.hydrateRoot);
/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Or() {
    return (
        (Or = Object.assign
            ? Object.assign.bind()
            : function (o) {
                  for (var s = 1; s < arguments.length; s++) {
                      var a = arguments[s];
                      for (var p in a)
                          Object.prototype.hasOwnProperty.call(a, p) &&
                              (o[p] = a[p]);
                  }
                  return o;
              }),
        Or.apply(this, arguments)
    );
}
var bt;
(function (o) {
    (o.Pop = "POP"), (o.Push = "PUSH"), (o.Replace = "REPLACE");
})(bt || (bt = {}));
const cc = "popstate";
function Yd(o) {
    o === void 0 && (o = {});
    function s(p, m) {
        let { pathname: v, search: _, hash: x } = p.location;
        return bo(
            "",
            { pathname: v, search: _, hash: x },
            (m.state && m.state.usr) || null,
            (m.state && m.state.key) || "default"
        );
    }
    function a(p, m) {
        return typeof m == "string" ? m : Xl(m);
    }
    return Gd(s, a, null, o);
}
function xe(o, s) {
    if (o === !1 || o === null || typeof o > "u") throw new Error(s);
}
function ru(o, s) {
    if (!o) {
        typeof console < "u" && console.warn(s);
        try {
            throw new Error(s);
        } catch {}
    }
}
function Xd() {
    return Math.random().toString(36).substr(2, 8);
}
function fc(o, s) {
    return { usr: o.state, key: o.key, idx: s };
}
function bo(o, s, a, p) {
    return (
        a === void 0 && (a = null),
        Or(
            {
                pathname: typeof o == "string" ? o : o.pathname,
                search: "",
                hash: "",
            },
            typeof s == "string" ? Qn(s) : s,
            { state: a, key: (s && s.key) || p || Xd() }
        )
    );
}
function Xl(o) {
    let { pathname: s = "/", search: a = "", hash: p = "" } = o;
    return (
        a && a !== "?" && (s += a.charAt(0) === "?" ? a : "?" + a),
        p && p !== "#" && (s += p.charAt(0) === "#" ? p : "#" + p),
        s
    );
}
function Qn(o) {
    let s = {};
    if (o) {
        let a = o.indexOf("#");
        a >= 0 && ((s.hash = o.substr(a)), (o = o.substr(0, a)));
        let p = o.indexOf("?");
        p >= 0 && ((s.search = o.substr(p)), (o = o.substr(0, p))),
            o && (s.pathname = o);
    }
    return s;
}
function Gd(o, s, a, p) {
    p === void 0 && (p = {});
    let { window: m = document.defaultView, v5Compat: v = !1 } = p,
        _ = m.history,
        x = bt.Pop,
        S = null,
        R = B();
    R == null && ((R = 0), _.replaceState(Or({}, _.state, { idx: R }), ""));
    function B() {
        return (_.state || { idx: null }).idx;
    }
    function A() {
        x = bt.Pop;
        let O = B(),
            Z = O == null ? null : O - R;
        (R = O), S && S({ action: x, location: D.location, delta: Z });
    }
    function Q(O, Z) {
        x = bt.Push;
        let Y = bo(D.location, O, Z);
        a && a(Y, O), (R = B() + 1);
        let re = fc(Y, R),
            oe = D.createHref(Y);
        try {
            _.pushState(re, "", oe);
        } catch {
            m.location.assign(oe);
        }
        v && S && S({ action: x, location: D.location, delta: 1 });
    }
    function J(O, Z) {
        x = bt.Replace;
        let Y = bo(D.location, O, Z);
        a && a(Y, O), (R = B());
        let re = fc(Y, R),
            oe = D.createHref(Y);
        _.replaceState(re, "", oe),
            v && S && S({ action: x, location: D.location, delta: 0 });
    }
    function q(O) {
        let Z =
                m.location.origin !== "null"
                    ? m.location.origin
                    : m.location.href,
            Y = typeof O == "string" ? O : Xl(O);
        return (
            xe(
                Z,
                "No window.location.(origin|href) available to create URL for href: " +
                    Y
            ),
            new URL(Y, Z)
        );
    }
    let D = {
        get action() {
            return x;
        },
        get location() {
            return o(m, _);
        },
        listen(O) {
            if (S)
                throw new Error("A history only accepts one active listener");
            return (
                m.addEventListener(cc, A),
                (S = O),
                () => {
                    m.removeEventListener(cc, A), (S = null);
                }
            );
        },
        createHref(O) {
            return s(m, O);
        },
        createURL: q,
        encodeLocation(O) {
            let Z = q(O);
            return { pathname: Z.pathname, search: Z.search, hash: Z.hash };
        },
        push: Q,
        replace: J,
        go(O) {
            return _.go(O);
        },
    };
    return D;
}
var dc;
(function (o) {
    (o.data = "data"),
        (o.deferred = "deferred"),
        (o.redirect = "redirect"),
        (o.error = "error");
})(dc || (dc = {}));
function Jd(o, s, a) {
    a === void 0 && (a = "/");
    let p = typeof s == "string" ? Qn(s) : s,
        m = lu(p.pathname || "/", a);
    if (m == null) return null;
    let v = Nc(o);
    Zd(v);
    let _ = null;
    for (let x = 0; _ == null && x < v.length; ++x) _ = up(v[x], cp(m));
    return _;
}
function Nc(o, s, a, p) {
    s === void 0 && (s = []),
        a === void 0 && (a = []),
        p === void 0 && (p = "");
    let m = (v, _, x) => {
        let S = {
            relativePath: x === void 0 ? v.path || "" : x,
            caseSensitive: v.caseSensitive === !0,
            childrenIndex: _,
            route: v,
        };
        S.relativePath.startsWith("/") &&
            (xe(
                S.relativePath.startsWith(p),
                'Absolute route path "' +
                    S.relativePath +
                    '" nested under path ' +
                    ('"' +
                        p +
                        '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (S.relativePath = S.relativePath.slice(p.length)));
        let R = en([p, S.relativePath]),
            B = a.concat(S);
        v.children &&
            v.children.length > 0 &&
            (xe(
                v.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + R + '".')
            ),
            Nc(v.children, s, B, R)),
            !(v.path == null && !v.index) &&
                s.push({ path: R, score: ip(R, v.index), routesMeta: B });
    };
    return (
        o.forEach((v, _) => {
            var x;
            if (v.path === "" || !((x = v.path) != null && x.includes("?")))
                m(v, _);
            else for (let S of jc(v.path)) m(v, _, S);
        }),
        s
    );
}
function jc(o) {
    let s = o.split("/");
    if (s.length === 0) return [];
    let [a, ...p] = s,
        m = a.endsWith("?"),
        v = a.replace(/\?$/, "");
    if (p.length === 0) return m ? [v, ""] : [v];
    let _ = jc(p.join("/")),
        x = [];
    return (
        x.push(..._.map((S) => (S === "" ? v : [v, S].join("/")))),
        m && x.push(..._),
        x.map((S) => (o.startsWith("/") && S === "" ? "/" : S))
    );
}
function Zd(o) {
    o.sort((s, a) =>
        s.score !== a.score
            ? a.score - s.score
            : op(
                  s.routesMeta.map((p) => p.childrenIndex),
                  a.routesMeta.map((p) => p.childrenIndex)
              )
    );
}
const bd = /^:\w+$/,
    ep = 3,
    tp = 2,
    np = 1,
    rp = 10,
    lp = -2,
    pc = (o) => o === "*";
function ip(o, s) {
    let a = o.split("/"),
        p = a.length;
    return (
        a.some(pc) && (p += lp),
        s && (p += tp),
        a
            .filter((m) => !pc(m))
            .reduce((m, v) => m + (bd.test(v) ? ep : v === "" ? np : rp), p)
    );
}
function op(o, s) {
    return o.length === s.length && o.slice(0, -1).every((p, m) => p === s[m])
        ? o[o.length - 1] - s[s.length - 1]
        : 0;
}
function up(o, s) {
    let { routesMeta: a } = o,
        p = {},
        m = "/",
        v = [];
    for (let _ = 0; _ < a.length; ++_) {
        let x = a[_],
            S = _ === a.length - 1,
            R = m === "/" ? s : s.slice(m.length) || "/",
            B = sp(
                {
                    path: x.relativePath,
                    caseSensitive: x.caseSensitive,
                    end: S,
                },
                R
            );
        if (!B) return null;
        Object.assign(p, B.params);
        let A = x.route;
        v.push({
            params: p,
            pathname: en([m, B.pathname]),
            pathnameBase: hp(en([m, B.pathnameBase])),
            route: A,
        }),
            B.pathnameBase !== "/" && (m = en([m, B.pathnameBase]));
    }
    return v;
}
function sp(o, s) {
    typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
    let [a, p] = ap(o.path, o.caseSensitive, o.end),
        m = s.match(a);
    if (!m) return null;
    let v = m[0],
        _ = v.replace(/(.)\/+$/, "$1"),
        x = m.slice(1);
    return {
        params: p.reduce((R, B, A) => {
            if (B === "*") {
                let Q = x[A] || "";
                _ = v.slice(0, v.length - Q.length).replace(/(.)\/+$/, "$1");
            }
            return (R[B] = fp(x[A] || "", B)), R;
        }, {}),
        pathname: v,
        pathnameBase: _,
        pattern: o,
    };
}
function ap(o, s, a) {
    s === void 0 && (s = !1),
        a === void 0 && (a = !0),
        ru(
            o === "*" || !o.endsWith("*") || o.endsWith("/*"),
            'Route path "' +
                o +
                '" will be treated as if it were ' +
                ('"' +
                    o.replace(/\*$/, "/*") +
                    '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' +
                    o.replace(/\*$/, "/*") +
                    '".')
        );
    let p = [],
        m =
            "^" +
            o
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                .replace(/\/:(\w+)/g, (_, x) => (p.push(x), "/([^\\/]+)"));
    return (
        o.endsWith("*")
            ? (p.push("*"),
              (m += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : a
            ? (m += "\\/*$")
            : o !== "" && o !== "/" && (m += "(?:(?=\\/|$))"),
        [new RegExp(m, s ? void 0 : "i"), p]
    );
}
function cp(o) {
    try {
        return decodeURI(o);
    } catch (s) {
        return (
            ru(
                !1,
                'The URL path "' +
                    o +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + s + ").")
            ),
            o
        );
    }
}
function fp(o, s) {
    try {
        return decodeURIComponent(o);
    } catch (a) {
        return (
            ru(
                !1,
                'The value for the URL param "' +
                    s +
                    '" will not be decoded because' +
                    (' the string "' +
                        o +
                        '" is a malformed URL segment. This is probably') +
                    (" due to a bad percent encoding (" + a + ").")
            ),
            o
        );
    }
}
function lu(o, s) {
    if (s === "/") return o;
    if (!o.toLowerCase().startsWith(s.toLowerCase())) return null;
    let a = s.endsWith("/") ? s.length - 1 : s.length,
        p = o.charAt(a);
    return p && p !== "/" ? null : o.slice(a) || "/";
}
function dp(o, s) {
    s === void 0 && (s = "/");
    let {
        pathname: a,
        search: p = "",
        hash: m = "",
    } = typeof o == "string" ? Qn(o) : o;
    return {
        pathname: a ? (a.startsWith("/") ? a : pp(a, s)) : s,
        search: mp(p),
        hash: vp(m),
    };
}
function pp(o, s) {
    let a = s.replace(/\/+$/, "").split("/");
    return (
        o.split("/").forEach((m) => {
            m === ".." ? a.length > 1 && a.pop() : m !== "." && a.push(m);
        }),
        a.length > 1 ? a.join("/") : "/"
    );
}
function Go(o, s, a, p) {
    return (
        "Cannot include a '" +
        o +
        "' character in a manually specified " +
        ("`to." +
            s +
            "` field [" +
            JSON.stringify(p) +
            "].  Please separate it out to the ") +
        ("`to." +
            a +
            "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function Rc(o) {
    return o.filter(
        (s, a) => a === 0 || (s.route.path && s.route.path.length > 0)
    );
}
function Tc(o, s, a, p) {
    p === void 0 && (p = !1);
    let m;
    typeof o == "string"
        ? (m = Qn(o))
        : ((m = Or({}, o)),
          xe(
              !m.pathname || !m.pathname.includes("?"),
              Go("?", "pathname", "search", m)
          ),
          xe(
              !m.pathname || !m.pathname.includes("#"),
              Go("#", "pathname", "hash", m)
          ),
          xe(
              !m.search || !m.search.includes("#"),
              Go("#", "search", "hash", m)
          ));
    let v = o === "" || m.pathname === "",
        _ = v ? "/" : m.pathname,
        x;
    if (p || _ == null) x = a;
    else {
        let A = s.length - 1;
        if (_.startsWith("..")) {
            let Q = _.split("/");
            for (; Q[0] === ".."; ) Q.shift(), (A -= 1);
            m.pathname = Q.join("/");
        }
        x = A >= 0 ? s[A] : "/";
    }
    let S = dp(m, x),
        R = _ && _ !== "/" && _.endsWith("/"),
        B = (v || _ === ".") && a.endsWith("/");
    return !S.pathname.endsWith("/") && (R || B) && (S.pathname += "/"), S;
}
const en = (o) => o.join("/").replace(/\/\/+/g, "/"),
    hp = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"),
    mp = (o) => (!o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o),
    vp = (o) => (!o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o);
function yp(o) {
    return (
        o != null &&
        typeof o.status == "number" &&
        typeof o.statusText == "string" &&
        typeof o.internal == "boolean" &&
        "data" in o
    );
}
const Lc = ["post", "put", "patch", "delete"];
new Set(Lc);
const gp = ["get", ...Lc];
new Set(gp);
/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gl() {
    return (
        (Gl = Object.assign
            ? Object.assign.bind()
            : function (o) {
                  for (var s = 1; s < arguments.length; s++) {
                      var a = arguments[s];
                      for (var p in a)
                          Object.prototype.hasOwnProperty.call(a, p) &&
                              (o[p] = a[p]);
                  }
                  return o;
              }),
        Gl.apply(this, arguments)
    );
}
const iu = T.createContext(null),
    zc = T.createContext(null),
    gn = T.createContext(null),
    Zl = T.createContext(null),
    wn = T.createContext({ outlet: null, matches: [] }),
    Oc = T.createContext(null);
function wp(o, s) {
    let { relative: a } = s === void 0 ? {} : s;
    Ir() || xe(!1);
    let { basename: p, navigator: m } = T.useContext(gn),
        { hash: v, pathname: _, search: x } = ou(o, { relative: a }),
        S = _;
    return (
        p !== "/" && (S = _ === "/" ? p : en([p, _])),
        m.createHref({ pathname: S, search: x, hash: v })
    );
}
function Ir() {
    return T.useContext(Zl) != null;
}
function Dr() {
    return Ir() || xe(!1), T.useContext(Zl).location;
}
function Mc(o) {
    T.useContext(gn).static || T.useLayoutEffect(o);
}
function Sp() {
    return T.useContext(iu) != null ? Ip() : xp();
}
function xp() {
    Ir() || xe(!1);
    let { basename: o, navigator: s } = T.useContext(gn),
        { matches: a } = T.useContext(wn),
        { pathname: p } = Dr(),
        m = JSON.stringify(Rc(a).map((x) => x.pathnameBase)),
        v = T.useRef(!1);
    return (
        Mc(() => {
            v.current = !0;
        }),
        T.useCallback(
            function (x, S) {
                if ((S === void 0 && (S = {}), !v.current)) return;
                if (typeof x == "number") {
                    s.go(x);
                    return;
                }
                let R = Tc(x, JSON.parse(m), p, S.relative === "path");
                o !== "/" &&
                    (R.pathname = R.pathname === "/" ? o : en([o, R.pathname])),
                    (S.replace ? s.replace : s.push)(R, S.state, S);
            },
            [o, s, m, p]
        )
    );
}
const kp = T.createContext(null);
function Ep(o) {
    let s = T.useContext(wn).outlet;
    return s && T.createElement(kp.Provider, { value: o }, s);
}
function ou(o, s) {
    let { relative: a } = s === void 0 ? {} : s,
        { matches: p } = T.useContext(wn),
        { pathname: m } = Dr(),
        v = JSON.stringify(Rc(p).map((_) => _.pathnameBase));
    return T.useMemo(() => Tc(o, JSON.parse(v), m, a === "path"), [o, v, m, a]);
}
function Cp(o, s) {
    return _p(o, s);
}
function _p(o, s, a) {
    Ir() || xe(!1);
    let { navigator: p } = T.useContext(gn),
        { matches: m } = T.useContext(wn),
        v = m[m.length - 1],
        _ = v ? v.params : {};
    v && v.pathname;
    let x = v ? v.pathnameBase : "/";
    v && v.route;
    let S = Dr(),
        R;
    if (s) {
        var B;
        let D = typeof s == "string" ? Qn(s) : s;
        x === "/" || ((B = D.pathname) != null && B.startsWith(x)) || xe(!1),
            (R = D);
    } else R = S;
    let A = R.pathname || "/",
        Q = x === "/" ? A : A.slice(x.length) || "/",
        J = Jd(o, { pathname: Q }),
        q = Tp(
            J &&
                J.map((D) =>
                    Object.assign({}, D, {
                        params: Object.assign({}, _, D.params),
                        pathname: en([
                            x,
                            p.encodeLocation
                                ? p.encodeLocation(D.pathname).pathname
                                : D.pathname,
                        ]),
                        pathnameBase:
                            D.pathnameBase === "/"
                                ? x
                                : en([
                                      x,
                                      p.encodeLocation
                                          ? p.encodeLocation(D.pathnameBase)
                                                .pathname
                                          : D.pathnameBase,
                                  ]),
                    })
                ),
            m,
            a
        );
    return s && q
        ? T.createElement(
              Zl.Provider,
              {
                  value: {
                      location: Gl(
                          {
                              pathname: "/",
                              search: "",
                              hash: "",
                              state: null,
                              key: "default",
                          },
                          R
                      ),
                      navigationType: bt.Pop,
                  },
              },
              q
          )
        : q;
}
function Pp() {
    let o = Mp(),
        s = yp(o)
            ? o.status + " " + o.statusText
            : o instanceof Error
            ? o.message
            : JSON.stringify(o),
        a = o instanceof Error ? o.stack : null,
        m = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
        v = null;
    return T.createElement(
        T.Fragment,
        null,
        T.createElement("h2", null, "Unexpected Application Error!"),
        T.createElement("h3", { style: { fontStyle: "italic" } }, s),
        a ? T.createElement("pre", { style: m }, a) : null,
        v
    );
}
const Np = T.createElement(Pp, null);
class jp extends T.Component {
    constructor(s) {
        super(s),
            (this.state = {
                location: s.location,
                revalidation: s.revalidation,
                error: s.error,
            });
    }
    static getDerivedStateFromError(s) {
        return { error: s };
    }
    static getDerivedStateFromProps(s, a) {
        return a.location !== s.location ||
            (a.revalidation !== "idle" && s.revalidation === "idle")
            ? {
                  error: s.error,
                  location: s.location,
                  revalidation: s.revalidation,
              }
            : {
                  error: s.error || a.error,
                  location: a.location,
                  revalidation: s.revalidation || a.revalidation,
              };
    }
    componentDidCatch(s, a) {
        console.error(
            "React Router caught the following error during render",
            s,
            a
        );
    }
    render() {
        return this.state.error
            ? T.createElement(
                  wn.Provider,
                  { value: this.props.routeContext },
                  T.createElement(Oc.Provider, {
                      value: this.state.error,
                      children: this.props.component,
                  })
              )
            : this.props.children;
    }
}
function Rp(o) {
    let { routeContext: s, match: a, children: p } = o,
        m = T.useContext(iu);
    return (
        m &&
            m.static &&
            m.staticContext &&
            (a.route.errorElement || a.route.ErrorBoundary) &&
            (m.staticContext._deepestRenderedBoundaryId = a.route.id),
        T.createElement(wn.Provider, { value: s }, p)
    );
}
function Tp(o, s, a) {
    var p;
    if ((s === void 0 && (s = []), a === void 0 && (a = null), o == null)) {
        var m;
        if ((m = a) != null && m.errors) o = a.matches;
        else return null;
    }
    let v = o,
        _ = (p = a) == null ? void 0 : p.errors;
    if (_ != null) {
        let x = v.findIndex(
            (S) => S.route.id && (_ == null ? void 0 : _[S.route.id])
        );
        x >= 0 || xe(!1), (v = v.slice(0, Math.min(v.length, x + 1)));
    }
    return v.reduceRight((x, S, R) => {
        let B = S.route.id ? (_ == null ? void 0 : _[S.route.id]) : null,
            A = null;
        a && (A = S.route.errorElement || Np);
        let Q = s.concat(v.slice(0, R + 1)),
            J = () => {
                let q;
                return (
                    B
                        ? (q = A)
                        : S.route.element
                        ? (q = S.route.element)
                        : (q = x),
                    T.createElement(Rp, {
                        match: S,
                        routeContext: { outlet: x, matches: Q },
                        children: q,
                    })
                );
            };
        return a && (S.route.ErrorBoundary || S.route.errorElement || R === 0)
            ? T.createElement(jp, {
                  location: a.location,
                  revalidation: a.revalidation,
                  component: A,
                  error: B,
                  children: J(),
                  routeContext: { outlet: null, matches: Q },
              })
            : J();
    }, null);
}
var eu;
(function (o) {
    (o.UseBlocker = "useBlocker"),
        (o.UseRevalidator = "useRevalidator"),
        (o.UseNavigateStable = "useNavigate");
})(eu || (eu = {}));
var Mr;
(function (o) {
    (o.UseBlocker = "useBlocker"),
        (o.UseLoaderData = "useLoaderData"),
        (o.UseActionData = "useActionData"),
        (o.UseRouteError = "useRouteError"),
        (o.UseNavigation = "useNavigation"),
        (o.UseRouteLoaderData = "useRouteLoaderData"),
        (o.UseMatches = "useMatches"),
        (o.UseRevalidator = "useRevalidator"),
        (o.UseNavigateStable = "useNavigate"),
        (o.UseRouteId = "useRouteId");
})(Mr || (Mr = {}));
function Lp(o) {
    let s = T.useContext(iu);
    return s || xe(!1), s;
}
function zp(o) {
    let s = T.useContext(zc);
    return s || xe(!1), s;
}
function Op(o) {
    let s = T.useContext(wn);
    return s || xe(!1), s;
}
function Ic(o) {
    let s = Op(),
        a = s.matches[s.matches.length - 1];
    return a.route.id || xe(!1), a.route.id;
}
function Mp() {
    var o;
    let s = T.useContext(Oc),
        a = zp(Mr.UseRouteError),
        p = Ic(Mr.UseRouteError);
    return s || ((o = a.errors) == null ? void 0 : o[p]);
}
function Ip() {
    let { router: o } = Lp(eu.UseNavigateStable),
        s = Ic(Mr.UseNavigateStable),
        a = T.useRef(!1);
    return (
        Mc(() => {
            a.current = !0;
        }),
        T.useCallback(
            function (m, v) {
                v === void 0 && (v = {}),
                    a.current &&
                        (typeof m == "number"
                            ? o.navigate(m)
                            : o.navigate(m, Gl({ fromRouteId: s }, v)));
            },
            [o, s]
        )
    );
}
function Dp(o) {
    return Ep(o.context);
}
function mn(o) {
    xe(!1);
}
function Up(o) {
    let {
        basename: s = "/",
        children: a = null,
        location: p,
        navigationType: m = bt.Pop,
        navigator: v,
        static: _ = !1,
    } = o;
    Ir() && xe(!1);
    let x = s.replace(/^\/*/, "/"),
        S = T.useMemo(
            () => ({ basename: x, navigator: v, static: _ }),
            [x, v, _]
        );
    typeof p == "string" && (p = Qn(p));
    let {
            pathname: R = "/",
            search: B = "",
            hash: A = "",
            state: Q = null,
            key: J = "default",
        } = p,
        q = T.useMemo(() => {
            let D = lu(R, x);
            return D == null
                ? null
                : {
                      location: {
                          pathname: D,
                          search: B,
                          hash: A,
                          state: Q,
                          key: J,
                      },
                      navigationType: m,
                  };
        }, [x, R, B, A, Q, J, m]);
    return q == null
        ? null
        : T.createElement(
              gn.Provider,
              { value: S },
              T.createElement(Zl.Provider, { children: a, value: q })
          );
}
function Fp(o) {
    let { children: s, location: a } = o;
    return Cp(tu(s), a);
}
var hc;
(function (o) {
    (o[(o.pending = 0)] = "pending"),
        (o[(o.success = 1)] = "success"),
        (o[(o.error = 2)] = "error");
})(hc || (hc = {}));
new Promise(() => {});
function tu(o, s) {
    s === void 0 && (s = []);
    let a = [];
    return (
        T.Children.forEach(o, (p, m) => {
            if (!T.isValidElement(p)) return;
            let v = [...s, m];
            if (p.type === T.Fragment) {
                a.push.apply(a, tu(p.props.children, v));
                return;
            }
            p.type !== mn && xe(!1),
                !p.props.index || !p.props.children || xe(!1);
            let _ = {
                id: p.props.id || v.join("-"),
                caseSensitive: p.props.caseSensitive,
                element: p.props.element,
                Component: p.props.Component,
                index: p.props.index,
                path: p.props.path,
                loader: p.props.loader,
                action: p.props.action,
                errorElement: p.props.errorElement,
                ErrorBoundary: p.props.ErrorBoundary,
                hasErrorBoundary:
                    p.props.ErrorBoundary != null ||
                    p.props.errorElement != null,
                shouldRevalidate: p.props.shouldRevalidate,
                handle: p.props.handle,
                lazy: p.props.lazy,
            };
            p.props.children && (_.children = tu(p.props.children, v)),
                a.push(_);
        }),
        a
    );
}
/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Jl() {
    return (
        (Jl = Object.assign
            ? Object.assign.bind()
            : function (o) {
                  for (var s = 1; s < arguments.length; s++) {
                      var a = arguments[s];
                      for (var p in a)
                          Object.prototype.hasOwnProperty.call(a, p) &&
                              (o[p] = a[p]);
                  }
                  return o;
              }),
        Jl.apply(this, arguments)
    );
}
function Dc(o, s) {
    if (o == null) return {};
    var a = {},
        p = Object.keys(o),
        m,
        v;
    for (v = 0; v < p.length; v++)
        (m = p[v]), !(s.indexOf(m) >= 0) && (a[m] = o[m]);
    return a;
}
function Bp(o) {
    return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function Ap(o, s) {
    return o.button === 0 && (!s || s === "_self") && !Bp(o);
}
const $p = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
    ],
    Vp = [
        "aria-current",
        "caseSensitive",
        "className",
        "end",
        "style",
        "to",
        "children",
    ];
function Hp(o) {
    let { basename: s, children: a, window: p } = o,
        m = T.useRef();
    m.current == null && (m.current = Yd({ window: p, v5Compat: !0 }));
    let v = m.current,
        [_, x] = T.useState({ action: v.action, location: v.location });
    return (
        T.useLayoutEffect(() => v.listen(x), [v]),
        T.createElement(Up, {
            basename: s,
            children: a,
            location: _.location,
            navigationType: _.action,
            navigator: v,
        })
    );
}
const Wp =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    Qp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Kp = T.forwardRef(function (s, a) {
        let {
                onClick: p,
                relative: m,
                reloadDocument: v,
                replace: _,
                state: x,
                target: S,
                to: R,
                preventScrollReset: B,
            } = s,
            A = Dc(s, $p),
            { basename: Q } = T.useContext(gn),
            J,
            q = !1;
        if (typeof R == "string" && Qp.test(R) && ((J = R), Wp))
            try {
                let Y = new URL(window.location.href),
                    re = R.startsWith("//")
                        ? new URL(Y.protocol + R)
                        : new URL(R),
                    oe = lu(re.pathname, Q);
                re.origin === Y.origin && oe != null
                    ? (R = oe + re.search + re.hash)
                    : (q = !0);
            } catch {}
        let D = wp(R, { relative: m }),
            O = qp(R, {
                replace: _,
                state: x,
                target: S,
                preventScrollReset: B,
                relative: m,
            });
        function Z(Y) {
            p && p(Y), Y.defaultPrevented || O(Y);
        }
        return T.createElement(
            "a",
            Jl({}, A, {
                href: J || D,
                onClick: q || v ? p : Z,
                ref: a,
                target: S,
            })
        );
    }),
    Yl = T.forwardRef(function (s, a) {
        let {
                "aria-current": p = "page",
                caseSensitive: m = !1,
                className: v = "",
                end: _ = !1,
                style: x,
                to: S,
                children: R,
            } = s,
            B = Dc(s, Vp),
            A = ou(S, { relative: B.relative }),
            Q = Dr(),
            J = T.useContext(zc),
            { navigator: q } = T.useContext(gn),
            D = q.encodeLocation ? q.encodeLocation(A).pathname : A.pathname,
            O = Q.pathname,
            Z =
                J && J.navigation && J.navigation.location
                    ? J.navigation.location.pathname
                    : null;
        m ||
            ((O = O.toLowerCase()),
            (Z = Z ? Z.toLowerCase() : null),
            (D = D.toLowerCase()));
        let Y =
                O === D ||
                (!_ && O.startsWith(D) && O.charAt(D.length) === "/"),
            re =
                Z != null &&
                (Z === D ||
                    (!_ && Z.startsWith(D) && Z.charAt(D.length) === "/")),
            oe = Y ? p : void 0,
            ke;
        typeof v == "function"
            ? (ke = v({ isActive: Y, isPending: re }))
            : (ke = [v, Y ? "active" : null, re ? "pending" : null]
                  .filter(Boolean)
                  .join(" "));
        let ye = typeof x == "function" ? x({ isActive: Y, isPending: re }) : x;
        return T.createElement(
            Kp,
            Jl({}, B, {
                "aria-current": oe,
                className: ke,
                ref: a,
                style: ye,
                to: S,
            }),
            typeof R == "function" ? R({ isActive: Y, isPending: re }) : R
        );
    });
var mc;
(function (o) {
    (o.UseScrollRestoration = "useScrollRestoration"),
        (o.UseSubmitImpl = "useSubmitImpl"),
        (o.UseFetcher = "useFetcher");
})(mc || (mc = {}));
var vc;
(function (o) {
    (o.UseFetchers = "useFetchers"),
        (o.UseScrollRestoration = "useScrollRestoration");
})(vc || (vc = {}));
function qp(o, s) {
    let {
            target: a,
            replace: p,
            state: m,
            preventScrollReset: v,
            relative: _,
        } = s === void 0 ? {} : s,
        x = Sp(),
        S = Dr(),
        R = ou(o, { relative: _ });
    return T.useCallback(
        (B) => {
            if (Ap(B, a)) {
                B.preventDefault();
                let A = p !== void 0 ? p : Xl(S) === Xl(R);
                x(o, {
                    replace: A,
                    state: m,
                    preventScrollReset: v,
                    relative: _,
                });
            }
        },
        [S, x, R, p, m, a, o, v, _]
    );
}
var Fe =
        (typeof globalThis < "u" && globalThis) ||
        (typeof self < "u" && self) ||
        (typeof Fe < "u" && Fe),
    Ge = {
        searchParams: "URLSearchParams" in Fe,
        iterable: "Symbol" in Fe && "iterator" in Symbol,
        blob:
            "FileReader" in Fe &&
            "Blob" in Fe &&
            (function () {
                try {
                    return new Blob(), !0;
                } catch {
                    return !1;
                }
            })(),
        formData: "FormData" in Fe,
        arrayBuffer: "ArrayBuffer" in Fe,
    };
function Yp(o) {
    return o && DataView.prototype.isPrototypeOf(o);
}
if (Ge.arrayBuffer)
    var Xp = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
        ],
        Gp =
            ArrayBuffer.isView ||
            function (o) {
                return o && Xp.indexOf(Object.prototype.toString.call(o)) > -1;
            };
function Ur(o) {
    if (
        (typeof o != "string" && (o = String(o)),
        /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(o) || o === "")
    )
        throw new TypeError(
            'Invalid character in header field name: "' + o + '"'
        );
    return o.toLowerCase();
}
function uu(o) {
    return typeof o != "string" && (o = String(o)), o;
}
function su(o) {
    var s = {
        next: function () {
            var a = o.shift();
            return { done: a === void 0, value: a };
        },
    };
    return (
        Ge.iterable &&
            (s[Symbol.iterator] = function () {
                return s;
            }),
        s
    );
}
function _e(o) {
    (this.map = {}),
        o instanceof _e
            ? o.forEach(function (s, a) {
                  this.append(a, s);
              }, this)
            : Array.isArray(o)
            ? o.forEach(function (s) {
                  this.append(s[0], s[1]);
              }, this)
            : o &&
              Object.getOwnPropertyNames(o).forEach(function (s) {
                  this.append(s, o[s]);
              }, this);
}
_e.prototype.append = function (o, s) {
    (o = Ur(o)), (s = uu(s));
    var a = this.map[o];
    this.map[o] = a ? a + ", " + s : s;
};
_e.prototype.delete = function (o) {
    delete this.map[Ur(o)];
};
_e.prototype.get = function (o) {
    return (o = Ur(o)), this.has(o) ? this.map[o] : null;
};
_e.prototype.has = function (o) {
    return this.map.hasOwnProperty(Ur(o));
};
_e.prototype.set = function (o, s) {
    this.map[Ur(o)] = uu(s);
};
_e.prototype.forEach = function (o, s) {
    for (var a in this.map)
        this.map.hasOwnProperty(a) && o.call(s, this.map[a], a, this);
};
_e.prototype.keys = function () {
    var o = [];
    return (
        this.forEach(function (s, a) {
            o.push(a);
        }),
        su(o)
    );
};
_e.prototype.values = function () {
    var o = [];
    return (
        this.forEach(function (s) {
            o.push(s);
        }),
        su(o)
    );
};
_e.prototype.entries = function () {
    var o = [];
    return (
        this.forEach(function (s, a) {
            o.push([a, s]);
        }),
        su(o)
    );
};
Ge.iterable && (_e.prototype[Symbol.iterator] = _e.prototype.entries);
function Jo(o) {
    if (o.bodyUsed) return Promise.reject(new TypeError("Already read"));
    o.bodyUsed = !0;
}
function Uc(o) {
    return new Promise(function (s, a) {
        (o.onload = function () {
            s(o.result);
        }),
            (o.onerror = function () {
                a(o.error);
            });
    });
}
function Jp(o) {
    var s = new FileReader(),
        a = Uc(s);
    return s.readAsArrayBuffer(o), a;
}
function Zp(o) {
    var s = new FileReader(),
        a = Uc(s);
    return s.readAsText(o), a;
}
function bp(o) {
    for (
        var s = new Uint8Array(o), a = new Array(s.length), p = 0;
        p < s.length;
        p++
    )
        a[p] = String.fromCharCode(s[p]);
    return a.join("");
}
function yc(o) {
    if (o.slice) return o.slice(0);
    var s = new Uint8Array(o.byteLength);
    return s.set(new Uint8Array(o)), s.buffer;
}
function Fc() {
    return (
        (this.bodyUsed = !1),
        (this._initBody = function (o) {
            (this.bodyUsed = this.bodyUsed),
                (this._bodyInit = o),
                o
                    ? typeof o == "string"
                        ? (this._bodyText = o)
                        : Ge.blob && Blob.prototype.isPrototypeOf(o)
                        ? (this._bodyBlob = o)
                        : Ge.formData && FormData.prototype.isPrototypeOf(o)
                        ? (this._bodyFormData = o)
                        : Ge.searchParams &&
                          URLSearchParams.prototype.isPrototypeOf(o)
                        ? (this._bodyText = o.toString())
                        : Ge.arrayBuffer && Ge.blob && Yp(o)
                        ? ((this._bodyArrayBuffer = yc(o.buffer)),
                          (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                        : Ge.arrayBuffer &&
                          (ArrayBuffer.prototype.isPrototypeOf(o) || Gp(o))
                        ? (this._bodyArrayBuffer = yc(o))
                        : (this._bodyText = o =
                              Object.prototype.toString.call(o))
                    : (this._bodyText = ""),
                this.headers.get("content-type") ||
                    (typeof o == "string"
                        ? this.headers.set(
                              "content-type",
                              "text/plain;charset=UTF-8"
                          )
                        : this._bodyBlob && this._bodyBlob.type
                        ? this.headers.set("content-type", this._bodyBlob.type)
                        : Ge.searchParams &&
                          URLSearchParams.prototype.isPrototypeOf(o) &&
                          this.headers.set(
                              "content-type",
                              "application/x-www-form-urlencoded;charset=UTF-8"
                          ));
        }),
        Ge.blob &&
            ((this.blob = function () {
                var o = Jo(this);
                if (o) return o;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                    var o = Jo(this);
                    return (
                        o ||
                        (ArrayBuffer.isView(this._bodyArrayBuffer)
                            ? Promise.resolve(
                                  this._bodyArrayBuffer.buffer.slice(
                                      this._bodyArrayBuffer.byteOffset,
                                      this._bodyArrayBuffer.byteOffset +
                                          this._bodyArrayBuffer.byteLength
                                  )
                              )
                            : Promise.resolve(this._bodyArrayBuffer))
                    );
                } else return this.blob().then(Jp);
            })),
        (this.text = function () {
            var o = Jo(this);
            if (o) return o;
            if (this._bodyBlob) return Zp(this._bodyBlob);
            if (this._bodyArrayBuffer)
                return Promise.resolve(bp(this._bodyArrayBuffer));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
        }),
        Ge.formData &&
            (this.formData = function () {
                return this.text().then(nh);
            }),
        (this.json = function () {
            return this.text().then(JSON.parse);
        }),
        this
    );
}
var eh = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
function th(o) {
    var s = o.toUpperCase();
    return eh.indexOf(s) > -1 ? s : o;
}
function yn(o, s) {
    if (!(this instanceof yn))
        throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
        );
    s = s || {};
    var a = s.body;
    if (o instanceof yn) {
        if (o.bodyUsed) throw new TypeError("Already read");
        (this.url = o.url),
            (this.credentials = o.credentials),
            s.headers || (this.headers = new _e(o.headers)),
            (this.method = o.method),
            (this.mode = o.mode),
            (this.signal = o.signal),
            !a && o._bodyInit != null && ((a = o._bodyInit), (o.bodyUsed = !0));
    } else this.url = String(o);
    if (
        ((this.credentials =
            s.credentials || this.credentials || "same-origin"),
        (s.headers || !this.headers) && (this.headers = new _e(s.headers)),
        (this.method = th(s.method || this.method || "GET")),
        (this.mode = s.mode || this.mode || null),
        (this.signal = s.signal || this.signal),
        (this.referrer = null),
        (this.method === "GET" || this.method === "HEAD") && a)
    )
        throw new TypeError("Body not allowed for GET or HEAD requests");
    if (
        (this._initBody(a),
        (this.method === "GET" || this.method === "HEAD") &&
            (s.cache === "no-store" || s.cache === "no-cache"))
    ) {
        var p = /([?&])_=[^&]*/;
        if (p.test(this.url))
            this.url = this.url.replace(p, "$1_=" + new Date().getTime());
        else {
            var m = /\?/;
            this.url +=
                (m.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
        }
    }
}
yn.prototype.clone = function () {
    return new yn(this, { body: this._bodyInit });
};
function nh(o) {
    var s = new FormData();
    return (
        o
            .trim()
            .split("&")
            .forEach(function (a) {
                if (a) {
                    var p = a.split("="),
                        m = p.shift().replace(/\+/g, " "),
                        v = p.join("=").replace(/\+/g, " ");
                    s.append(decodeURIComponent(m), decodeURIComponent(v));
                }
            }),
        s
    );
}
function rh(o) {
    var s = new _e(),
        a = o.replace(/\r?\n[\t ]+/g, " ");
    return (
        a
            .split("\r")
            .map(function (p) {
                return p.indexOf(`
`) === 0
                    ? p.substr(1, p.length)
                    : p;
            })
            .forEach(function (p) {
                var m = p.split(":"),
                    v = m.shift().trim();
                if (v) {
                    var _ = m.join(":").trim();
                    s.append(v, _);
                }
            }),
        s
    );
}
Fc.call(yn.prototype);
function Et(o, s) {
    if (!(this instanceof Et))
        throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
        );
    s || (s = {}),
        (this.type = "default"),
        (this.status = s.status === void 0 ? 200 : s.status),
        (this.ok = this.status >= 200 && this.status < 300),
        (this.statusText = s.statusText === void 0 ? "" : "" + s.statusText),
        (this.headers = new _e(s.headers)),
        (this.url = s.url || ""),
        this._initBody(o);
}
Fc.call(Et.prototype);
Et.prototype.clone = function () {
    return new Et(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new _e(this.headers),
        url: this.url,
    });
};
Et.error = function () {
    var o = new Et(null, { status: 0, statusText: "" });
    return (o.type = "error"), o;
};
var lh = [301, 302, 303, 307, 308];
Et.redirect = function (o, s) {
    if (lh.indexOf(s) === -1) throw new RangeError("Invalid status code");
    return new Et(null, { status: s, headers: { location: o } });
};
var vn = Fe.DOMException;
try {
    new vn();
} catch {
    (vn = function (s, a) {
        (this.message = s), (this.name = a);
        var p = Error(s);
        this.stack = p.stack;
    }),
        (vn.prototype = Object.create(Error.prototype)),
        (vn.prototype.constructor = vn);
}
function Bc(o, s) {
    return new Promise(function (a, p) {
        var m = new yn(o, s);
        if (m.signal && m.signal.aborted)
            return p(new vn("Aborted", "AbortError"));
        var v = new XMLHttpRequest();
        function _() {
            v.abort();
        }
        (v.onload = function () {
            var S = {
                status: v.status,
                statusText: v.statusText,
                headers: rh(v.getAllResponseHeaders() || ""),
            };
            S.url =
                "responseURL" in v
                    ? v.responseURL
                    : S.headers.get("X-Request-URL");
            var R = "response" in v ? v.response : v.responseText;
            setTimeout(function () {
                a(new Et(R, S));
            }, 0);
        }),
            (v.onerror = function () {
                setTimeout(function () {
                    p(new TypeError("Network request failed"));
                }, 0);
            }),
            (v.ontimeout = function () {
                setTimeout(function () {
                    p(new TypeError("Network request failed"));
                }, 0);
            }),
            (v.onabort = function () {
                setTimeout(function () {
                    p(new vn("Aborted", "AbortError"));
                }, 0);
            });
        function x(S) {
            try {
                return S === "" && Fe.location.href ? Fe.location.href : S;
            } catch {
                return S;
            }
        }
        v.open(m.method, x(m.url), !0),
            m.credentials === "include"
                ? (v.withCredentials = !0)
                : m.credentials === "omit" && (v.withCredentials = !1),
            "responseType" in v &&
                (Ge.blob
                    ? (v.responseType = "blob")
                    : Ge.arrayBuffer &&
                      m.headers.get("Content-Type") &&
                      m.headers
                          .get("Content-Type")
                          .indexOf("application/octet-stream") !== -1 &&
                      (v.responseType = "arraybuffer")),
            s && typeof s.headers == "object" && !(s.headers instanceof _e)
                ? Object.getOwnPropertyNames(s.headers).forEach(function (S) {
                      v.setRequestHeader(S, uu(s.headers[S]));
                  })
                : m.headers.forEach(function (S, R) {
                      v.setRequestHeader(R, S);
                  }),
            m.signal &&
                (m.signal.addEventListener("abort", _),
                (v.onreadystatechange = function () {
                    v.readyState === 4 &&
                        m.signal.removeEventListener("abort", _);
                })),
            v.send(typeof m._bodyInit > "u" ? null : m._bodyInit);
    });
}
Bc.polyfill = !0;
Fe.fetch ||
    ((Fe.fetch = Bc), (Fe.Headers = _e), (Fe.Request = yn), (Fe.Response = Et));
self.fetch.bind(self);
const bl = Zt.createContext(),
    ih = (o) => {
        const [s, a] = T.useState([]),
            [p, m] = T.useState(!1),
            [v, _] = T.useState(0),
            x = 3,
            S = "R0cquR0l8PZjLvSvssOxjOE1aSJX86FDwr7OFGKlHHBIMJPyfHpTSKMZ",
            R = "Knit";
        T.useEffect(() => {
            (async () => {
                try {
                    const O = await (
                        await fetch(
                            `https://api.pexels.com/v1/search?query=${R}&per_page=10`,
                            { headers: { Authorization: S } }
                        )
                    ).json();
                    console.log("Test:", O), a(O.photos);
                } catch (D) {
                    console.error("Error fetching photos:", D);
                }
            })();
        }, []);
        const B = T.useMemo(() => s, [s]);
        console.log("cachedData:  ", B);
        const A = () => {
                m(!p);
            },
            Q = () => {
                let q = v + 1;
                _(q <= x ? q : 0);
            },
            J = () => {
                let q = v - 1;
                _(q < 0 ? x : q);
            };
        return N.jsx(bl.Provider, {
            value: {
                cachedData: B,
                setData: a,
                showNav: p,
                setShowNav: m,
                handleShowNavbar: A,
                index: v,
                handleBackwards: J,
                handleForwards: Q,
            },
            children: o.children,
        });
    },
    zr = 48,
    oh = ({
        color: o = "currentColor",
        direction: s = "left",
        distance: a = "md",
        duration: p = 0.4,
        easing: m = "cubic-bezier(0, 0, 0, 1)",
        hideOutline: v = !0,
        label: _,
        lines: x = 3,
        onToggle: S,
        render: R,
        rounded: B = !1,
        size: A = 32,
        toggle: Q,
        toggled: J,
    }) => {
        const [q, D] = T.useState(!1),
            O = Math.max(12, Math.min(zr, A)),
            Z = Math.round((zr - O) / 2),
            Y = O / 12,
            re = Math.round(Y),
            ke =
                O /
                (x *
                    ((a === "lg" ? 0.25 : a === "sm" ? 0.75 : 0.5) +
                        (x === 3 ? 1 : 1.25))),
            ye = Math.round(ke),
            ze = re * x + ye * (x - 1),
            $e = Math.round((zr - ze) / 2),
            yt =
                x === 3
                    ? a === "lg"
                        ? 4.0425
                        : a === "sm"
                        ? 5.1625
                        : 4.6325
                    : a === "lg"
                    ? 6.7875
                    : a === "sm"
                    ? 8.4875
                    : 7.6675,
            at = (Y - re + (ke - ye)) / (x === 3 ? 1 : 2),
            Ct = parseFloat((O / yt - at / (4 / 3)).toFixed(2)),
            Je = Math.max(0, p),
            Oe = {
                cursor: "pointer",
                height: `${zr}px`,
                position: "relative",
                transition: `${Je}s ${m}`,
                userSelect: "none",
                width: `${zr}px`,
            },
            Ve = {
                background: o,
                height: `${re}px`,
                left: `${Z}px`,
                position: "absolute",
            };
        v && (Oe.outline = "none"), B && (Ve.borderRadius = "9em");
        const nt = Q || D,
            Pe = J !== void 0 ? J : q;
        return R({
            barHeight: re,
            barStyles: Ve,
            burgerStyles: Oe,
            easing: m,
            handler: () => {
                nt(!Pe), typeof S == "function" && S(!Pe);
            },
            isLeft: s === "left",
            isToggled: Pe,
            label: _,
            margin: ye,
            move: Ct,
            time: Je,
            topOffset: $e,
            width: O,
        });
    };
function nu() {
    return (
        (nu =
            Object.assign ||
            function (o) {
                for (var s = 1; s < arguments.length; s++) {
                    var a = arguments[s];
                    for (var p in a)
                        Object.prototype.hasOwnProperty.call(a, p) &&
                            (o[p] = a[p]);
                }
                return o;
            }),
        nu.apply(this, arguments)
    );
}
const uh = (o) =>
        Zt.createElement(
            oh,
            nu({}, o, {
                render: (s) =>
                    Zt.createElement(
                        "div",
                        {
                            className: "hamburger-react",
                            "aria-label": s.label,
                            "aria-expanded": s.isToggled,
                            onClick: s.handler,
                            onKeyUp: (a) => a.key === "Enter" && s.handler(),
                            role: "button",
                            style: {
                                ...s.burgerStyles,
                                transform: `${
                                    s.isToggled
                                        ? `rotate(${
                                              180 * (s.isLeft ? -1 : 1)
                                          }deg)`
                                        : "none"
                                }`,
                            },
                            tabIndex: 0,
                        },
                        Zt.createElement("div", {
                            style: {
                                ...s.barStyles,
                                width: `${s.width}px`,
                                top: `${s.topOffset}px`,
                                transition: `${s.time}s ${s.easing}`,
                                transform: `${
                                    s.isToggled
                                        ? `rotate(${
                                              45 * (s.isLeft ? -1 : 1)
                                          }deg) translate(${
                                              s.move * (s.isLeft ? -1 : 1)
                                          }px, ${s.move}px)`
                                        : "none"
                                }`,
                            },
                        }),
                        Zt.createElement("div", {
                            style: {
                                ...s.barStyles,
                                width: `${s.width}px`,
                                top: `${
                                    s.topOffset + s.barHeight + s.margin
                                }px`,
                                transition: `${s.time}s ${s.easing}`,
                                opacity: `${s.isToggled ? "0" : "1"}`,
                            },
                        }),
                        Zt.createElement("div", {
                            style: {
                                ...s.barStyles,
                                width: `${s.width}px`,
                                top: `${
                                    s.topOffset + s.barHeight * 2 + s.margin * 2
                                }px`,
                                transition: `${s.time}s ${s.easing}`,
                                transform: `${
                                    s.isToggled
                                        ? `rotate(${
                                              45 * (s.isLeft ? 1 : -1)
                                          }deg) translate(${
                                              s.move * (s.isLeft ? -1 : 1)
                                          }px, ${s.move * -1}px)`
                                        : "none"
                                }`,
                            },
                        })
                    ),
            })
        ),
    sh = () => {
        const { showNav: o, handleShowNavbar: s } = T.useContext(bl);
        return N.jsx(N.Fragment, {
            children: N.jsx("nav", {
                className: "navbar",
                children: N.jsxs("div", {
                    className: "nav-container",
                    children: [
                        N.jsx("div", {
                            className: "menu-icon",
                            onClick: s,
                            children: N.jsx(uh, {
                                rounded: !0,
                                "aria-label": "icon menu mobil view",
                            }),
                        }),
                        N.jsx("div", {
                            className: `nav-elements  ${o && "active"}`,
                            children: N.jsxs("ul", {
                                children: [
                                    N.jsx("li", {
                                        children: N.jsx(Yl, {
                                            className: ({ isActive: a }) =>
                                                a ? "link active" : "link",
                                            to: "/",
                                            "aria-label": "link menu home",
                                            children: "Home",
                                        }),
                                    }),
                                    N.jsx("li", {
                                        children: N.jsx(Yl, {
                                            className: ({ isActive: a }) =>
                                                a ? "link active" : "link",
                                            to: "/projects",
                                            "aria-label":
                                                "link menu my projects",
                                            children: "My Projects",
                                        }),
                                    }),
                                    N.jsx("li", {
                                        children: N.jsx(Yl, {
                                            className: ({ isActive: a }) =>
                                                a ? "link active" : "link",
                                            to: "/inspiration",
                                            "aria-label":
                                                "link menu inspiration",
                                            children: "Inspiration",
                                        }),
                                    }),
                                    N.jsx("li", {
                                        children: N.jsx(Yl, {
                                            className: ({ isActive: a }) =>
                                                a ? "link active" : "link",
                                            to: "/about",
                                            "aria-label": "link menu about me",
                                            children: "About me",
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        });
    },
    ah = () =>
        N.jsxs("div", {
            children: [
                N.jsx("div", {
                    className: "hero-img",
                    children: N.jsx("h1", { children: "The Endless Yarn 🧶" }),
                }),
                N.jsx(sh, {}),
                N.jsx(Dp, {}),
                N.jsxs("footer", {
                    children: [
                        N.jsx("a", {
                            target: "_blank",
                            href: "https://github.com/CatalinaFonsecaSilva/Final-Project-SPA---React",
                            children: "GitHub",
                        }),
                        N.jsx("p", { children: " CaTaLiNa © 2023" }),
                    ],
                }),
            ],
        }),
    ch = () => {
        const {
            index: o,
            handleForwards: s,
            handleBackwards: a,
        } = T.useContext(bl);
        return N.jsxs("section", {
            className: "carousel-container",
            children: [
                N.jsxs("div", {
                    className: o == 0 ? "active-slide" : "hidde",
                    children: [
                        " ",
                        N.jsx("img", {
                            src: "src/assets/images/baby_kit.jpg",
                            alt: "knitted baby kit",
                        }),
                    ],
                }),
                N.jsxs("div", {
                    className: o == 1 ? "active-slide" : "hidde",
                    children: [
                        " ",
                        N.jsx("img", {
                            src: "src/assets/images/headband.jpg",
                            alt: "knitted headband",
                        }),
                    ],
                }),
                N.jsxs("div", {
                    className: o == 2 ? "active-slide" : "hidde",
                    children: [
                        " ",
                        N.jsx("img", {
                            src: "src/assets/images/pullover_M.jpeg",
                            alt: "knitted pullover",
                        }),
                        " ",
                    ],
                }),
                N.jsxs("div", {
                    className: o == 3 ? "active-slide" : "hidde",
                    children: [
                        " ",
                        N.jsx("img", {
                            src: "src/assets/images/socken_M.jpg",
                            alt: "knitted socken",
                        }),
                        " ",
                    ],
                }),
                N.jsxs("div", {
                    className: "carousel-buttons",
                    children: [
                        N.jsxs("button", {
                            "aria-label":
                                "button image carousel - previous image",
                            onClick: a,
                            children: [" ", "← Previous", " "],
                        }),
                        N.jsxs("button", {
                            "aria-label": "button image carousel - next image",
                            onClick: s,
                            children: [" ", "Next →", " "],
                        }),
                    ],
                }),
            ],
        });
    },
    Ac = () =>
        N.jsxs("section", {
            className: "about-section",
            children: [
                N.jsx("h2", { children: "About me" }),
                N.jsx("img", {
                    src: "src/assets/images/yarn-hero2.jpeg",
                    alt: "image person with yarn on arms",
                }),
                N.jsx("p", {
                    children:
                        "Cat ipsum dolor sit amet, autem for in, and officia for aliqua. Veniam. Magni vitae dolor, so consequatur excepteur occaecat sed. Modi. Suscipit. Irure error aliqua perspiciatis, for magnam id aliquid. In consequuntur et for nihil suscipit for perspiciatis. Vitae nequeporro illum voluptatem. Cat ipsum dolor sit amet, autem for in, and officia for aliqua. Veniam. Magni vitae dolor, so consequatur excepteur occaecat sed. Modi. Cat ipsum dolor sit amet, autem for in, and officia for aliqua. Veniam. Magni vitae dolor, so consequatur excepteur occaecat sed. Modi.",
                }),
            ],
        }),
    fh = () =>
        N.jsxs("section", {
            className: "home-section",
            children: [
                N.jsx("h2", { children: "Welcome to my page!" }),
                N.jsx("p", {
                    children:
                        "Cat ipsum dolor sit amet, autem for in, and officia for aliqua. Veniam. Magni vitae dolor, so consequatur excepteur occaecat sed. Modi. Suscipit. Irure error aliqua perspiciatis, for magnam id aliquid. In consequuntur et for nihil suscipit for perspiciatis. Ut sed and pariatur ipsum, dolores nemo.",
                }),
                N.jsx(ch, {}),
                N.jsx("article", {
                    className: "about-home-section",
                    children: N.jsx(Ac, {}),
                }),
            ],
        }),
    dh = () =>
        N.jsxs("div", {
            children: [
                N.jsx("h2", {
                    className: "title-projects",
                    children: " My Projects",
                }),
                N.jsx("p", {
                    children:
                        "Cat ipsum dolor sit amet, autem for in, and officia for aliqua. Veniam. Magni vitae dolor, so consequatur excepteur occaecat sed. Modi. Cat ipsum dolor sit amet, autem for in, and officia for aliqua. Veniam. Magni vitae dolor, so consequatur excepteur occaecat sed. Modi.",
                }),
                N.jsxs("section", {
                    className: "projects-section",
                    children: [
                        N.jsxs("article", {
                            className: "project-article",
                            children: [
                                N.jsx("h3", { children: "Current Project" }),
                                N.jsx("img", {
                                    src: "src/assets/images/pullover_M.jpeg",
                                    alt: "knitted pullover",
                                }),
                                N.jsx("p", {
                                    children:
                                        "Cat ipsum dolor sit amet, autem for in, and officia for aliqua. Veniam. Magni vitae dolor, so consequatur excepteur occaecat sed. Modi.",
                                }),
                            ],
                        }),
                        N.jsxs("article", {
                            className: "project-article",
                            children: [
                                N.jsx("h3", { children: "Funniest Project" }),
                                N.jsx("img", {
                                    src: "src/assets/images/headband.jpg",
                                    alt: "knitted headband",
                                }),
                                N.jsx("p", {
                                    children:
                                        "Cat ipsum dolor sit amet, autem for in, and officia for aliqua. Veniam. Magni vitae dolor, so consequatur excepteur occaecat sed. Modi.",
                                }),
                            ],
                        }),
                        N.jsxs("article", {
                            className: "project-article",
                            children: [
                                N.jsx("h3", { children: "Cutest Project" }),
                                N.jsx("img", {
                                    src: "src/assets/images/baby_kit.jpg",
                                    alt: "knitted baby socks and bennie",
                                }),
                                N.jsx("p", {
                                    children:
                                        "Cat ipsum dolor sit amet, autem for in, and officia for aliqua. Veniam. Magni vitae dolor, so consequatur excepteur occaecat sed. Modi.",
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    ph = () => {
        const { cachedData: o } = T.useContext(bl);
        return N.jsxs("div", {
            children: [
                " ",
                N.jsxs("section", {
                    className: "inpiration-section",
                    children: [
                        N.jsx("h2", { children: " Inspiration" }),
                        N.jsx("p", {
                            children: N.jsx("a", {
                                className: "pexel-tag",
                                target: "blank",
                                href: "https://www.pexels.com",
                                children: "Photos provided by Pexels",
                            }),
                        }),
                        N.jsxs("p", {
                            children: [
                                " ",
                                "Cat ipsum dolor sit amet, autem for in, and officia for aliqua. Veniam. Magni vitae dolor, so consequatur excepteur occaecat sed. Modi. Cat ipsum dolor sit amet, autem for in, and officia for aliqua. Veniam. Magni vitae dolor, so consequatur excepteur occaecat sed. Modi.",
                            ],
                        }),
                    ],
                }),
                o.map((s, a) =>
                    N.jsxs(
                        "div",
                        {
                            className: "inspiration-box",
                            children: [
                                N.jsx("img", { src: s.src.tiny, alt: s.alt }),
                                N.jsxs("p", {
                                    children: [
                                        N.jsx("em", {
                                            children: "Photographer:",
                                        }),
                                        " ",
                                        s.photographer,
                                    ],
                                }),
                            ],
                        },
                        a + 1
                    )
                ),
            ],
        });
    },
    hh = () =>
        N.jsx("div", {
            children: N.jsx("h1", { children: "404 - Page not found 😮" }),
        });
function mh() {
    return N.jsx(ih, {
        children: N.jsx("div", {
            className: "App",
            children: N.jsx(Fp, {
                children: N.jsxs(mn, {
                    path: "/",
                    element: N.jsx(ah, {}),
                    children: [
                        N.jsx(mn, { index: !0, element: N.jsx(fh, {}) }),
                        N.jsx(mn, {
                            path: "/projects",
                            element: N.jsx(dh, {}),
                        }),
                        N.jsx(mn, {
                            path: "/inspiration",
                            element: N.jsx(ph, {}),
                        }),
                        N.jsx(mn, { path: "/about", element: N.jsx(Ac, {}) }),
                        N.jsx(mn, { path: "*", element: N.jsx(hh, {}) }),
                    ],
                }),
            }),
        }),
    });
}
Zo.createRoot(document.getElementById("root")).render(
    N.jsx(Zt.StrictMode, { children: N.jsx(Hp, { children: N.jsx(mh, {}) }) })
);
