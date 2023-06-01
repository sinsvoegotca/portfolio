(() => {
    var __webpack_modules__ = {
        732: function (module) {
            !(function (n, t) {
                true ? (module.exports = t()) : 0;
            })(0, function () {
                "use strict";
                function n() {
                    return (
                        (n =
                            Object.assign ||
                            function (n) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var e = arguments[t];
                                    for (var i in e)
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            i
                                        ) && (n[i] = e[i]);
                                }
                                return n;
                            }),
                        n.apply(this, arguments)
                    );
                }
                var t = "undefined" != typeof window,
                    e =
                        (t && !("onscroll" in window)) ||
                        ("undefined" != typeof navigator &&
                            /(gle|ing|ro)bot|crawl|spider/i.test(
                                navigator.userAgent
                            )),
                    i = t && "IntersectionObserver" in window,
                    o = t && "classList" in document.createElement("p"),
                    a = t && window.devicePixelRatio > 1,
                    r = {
                        elements_selector: ".lazy",
                        container: e || t ? document : null,
                        threshold: 300,
                        thresholds: null,
                        data_src: "src",
                        data_srcset: "srcset",
                        data_sizes: "sizes",
                        data_bg: "bg",
                        data_bg_hidpi: "bg-hidpi",
                        data_bg_multi: "bg-multi",
                        data_bg_multi_hidpi: "bg-multi-hidpi",
                        data_bg_set: "bg-set",
                        data_poster: "poster",
                        class_applied: "applied",
                        class_loading: "loading",
                        class_loaded: "loaded",
                        class_error: "error",
                        class_entered: "entered",
                        class_exited: "exited",
                        unobserve_completed: !0,
                        unobserve_entered: !1,
                        cancel_on_exit: !0,
                        callback_enter: null,
                        callback_exit: null,
                        callback_applied: null,
                        callback_loading: null,
                        callback_loaded: null,
                        callback_error: null,
                        callback_finish: null,
                        callback_cancel: null,
                        use_native: !1,
                        restore_on_error: !1,
                    },
                    c = function (t) {
                        return n({}, r, t);
                    },
                    l = function (n, t) {
                        var e,
                            i = "LazyLoad::Initialized",
                            o = new n(t);
                        try {
                            e = new CustomEvent(i, {
                                detail: {
                                    instance: o,
                                },
                            });
                        } catch (n) {
                            (e =
                                document.createEvent(
                                    "CustomEvent"
                                )).initCustomEvent(i, !1, !1, {
                                instance: o,
                            });
                        }
                        window.dispatchEvent(e);
                    },
                    u = "src",
                    s = "srcset",
                    d = "sizes",
                    f = "poster",
                    _ = "llOriginalAttrs",
                    g = "data",
                    v = "loading",
                    b = "loaded",
                    m = "applied",
                    p = "error",
                    h = "native",
                    E = "data-",
                    I = "ll-status",
                    y = function (n, t) {
                        return n.getAttribute(E + t);
                    },
                    k = function (n) {
                        return y(n, I);
                    },
                    w = function (n, t) {
                        return (function (n, t, e) {
                            var i = "data-ll-status";
                            null !== e
                                ? n.setAttribute(i, e)
                                : n.removeAttribute(i);
                        })(n, 0, t);
                    },
                    A = function (n) {
                        return w(n, null);
                    },
                    L = function (n) {
                        return null === k(n);
                    },
                    O = function (n) {
                        return k(n) === h;
                    },
                    x = [v, b, m, p],
                    C = function (n, t, e, i) {
                        n &&
                            (void 0 === i
                                ? void 0 === e
                                    ? n(t)
                                    : n(t, e)
                                : n(t, e, i));
                    },
                    N = function (n, t) {
                        o
                            ? n.classList.add(t)
                            : (n.className += (n.className ? " " : "") + t);
                    },
                    M = function (n, t) {
                        o
                            ? n.classList.remove(t)
                            : (n.className = n.className
                                  .replace(
                                      new RegExp("(^|\\s+)" + t + "(\\s+|$)"),
                                      " "
                                  )
                                  .replace(/^\s+/, "")
                                  .replace(/\s+$/, ""));
                    },
                    z = function (n) {
                        return n.llTempImage;
                    },
                    T = function (n, t) {
                        if (t) {
                            var e = t._observer;
                            e && e.unobserve(n);
                        }
                    },
                    R = function (n, t) {
                        n && (n.loadingCount += t);
                    },
                    G = function (n, t) {
                        n && (n.toLoadCount = t);
                    },
                    j = function (n) {
                        for (var t, e = [], i = 0; (t = n.children[i]); i += 1)
                            "SOURCE" === t.tagName && e.push(t);
                        return e;
                    },
                    D = function (n, t) {
                        var e = n.parentNode;
                        e && "PICTURE" === e.tagName && j(e).forEach(t);
                    },
                    H = function (n, t) {
                        j(n).forEach(t);
                    },
                    V = [u],
                    F = [u, f],
                    B = [u, s, d],
                    J = [g],
                    P = function (n) {
                        return !!n[_];
                    },
                    S = function (n) {
                        return n[_];
                    },
                    U = function (n) {
                        return delete n[_];
                    },
                    $ = function (n, t) {
                        if (!P(n)) {
                            var e = {};
                            t.forEach(function (t) {
                                e[t] = n.getAttribute(t);
                            }),
                                (n[_] = e);
                        }
                    },
                    q = function (n, t) {
                        if (P(n)) {
                            var e = S(n);
                            t.forEach(function (t) {
                                !(function (n, t, e) {
                                    e
                                        ? n.setAttribute(t, e)
                                        : n.removeAttribute(t);
                                })(n, t, e[t]);
                            });
                        }
                    },
                    K = function (n, t, e) {
                        N(n, t.class_applied),
                            w(n, m),
                            e &&
                                (t.unobserve_completed && T(n, t),
                                C(t.callback_applied, n, e));
                    },
                    Q = function (n, t, e) {
                        N(n, t.class_loading),
                            w(n, v),
                            e && (R(e, 1), C(t.callback_loading, n, e));
                    },
                    W = function (n, t, e) {
                        e && n.setAttribute(t, e);
                    },
                    X = function (n, t) {
                        W(n, d, y(n, t.data_sizes)),
                            W(n, s, y(n, t.data_srcset)),
                            W(n, u, y(n, t.data_src));
                    },
                    Y = {
                        IMG: function (n, t) {
                            D(n, function (n) {
                                $(n, B), X(n, t);
                            }),
                                $(n, B),
                                X(n, t);
                        },
                        IFRAME: function (n, t) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        },
                        VIDEO: function (n, t) {
                            H(n, function (n) {
                                $(n, V), W(n, u, y(n, t.data_src));
                            }),
                                $(n, F),
                                W(n, f, y(n, t.data_poster)),
                                W(n, u, y(n, t.data_src)),
                                n.load();
                        },
                        OBJECT: function (n, t) {
                            $(n, J), W(n, g, y(n, t.data_src));
                        },
                    },
                    Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
                    nn = function (n, t) {
                        !t ||
                            (function (n) {
                                return n.loadingCount > 0;
                            })(t) ||
                            (function (n) {
                                return n.toLoadCount > 0;
                            })(t) ||
                            C(n.callback_finish, t);
                    },
                    tn = function (n, t, e) {
                        n.addEventListener(t, e), (n.llEvLisnrs[t] = e);
                    },
                    en = function (n, t, e) {
                        n.removeEventListener(t, e);
                    },
                    on = function (n) {
                        return !!n.llEvLisnrs;
                    },
                    an = function (n) {
                        if (on(n)) {
                            var t = n.llEvLisnrs;
                            for (var e in t) {
                                var i = t[e];
                                en(n, e, i);
                            }
                            delete n.llEvLisnrs;
                        }
                    },
                    rn = function (n, t, e) {
                        !(function (n) {
                            delete n.llTempImage;
                        })(n),
                            R(e, -1),
                            (function (n) {
                                n && (n.toLoadCount -= 1);
                            })(e),
                            M(n, t.class_loading),
                            t.unobserve_completed && T(n, e);
                    },
                    cn = function (n, t, e) {
                        var i = z(n) || n;
                        on(i) ||
                            (function (n, t, e) {
                                on(n) || (n.llEvLisnrs = {});
                                var i =
                                    "VIDEO" === n.tagName
                                        ? "loadeddata"
                                        : "load";
                                tn(n, i, t), tn(n, "error", e);
                            })(
                                i,
                                function (o) {
                                    !(function (n, t, e, i) {
                                        var o = O(t);
                                        rn(t, e, i),
                                            N(t, e.class_loaded),
                                            w(t, b),
                                            C(e.callback_loaded, t, i),
                                            o || nn(e, i);
                                    })(0, n, t, e),
                                        an(i);
                                },
                                function (o) {
                                    !(function (n, t, e, i) {
                                        var o = O(t);
                                        rn(t, e, i),
                                            N(t, e.class_error),
                                            w(t, p),
                                            C(e.callback_error, t, i),
                                            e.restore_on_error && q(t, B),
                                            o || nn(e, i);
                                    })(0, n, t, e),
                                        an(i);
                                }
                            );
                    },
                    ln = function (n, t, e) {
                        !(function (n) {
                            return Z.indexOf(n.tagName) > -1;
                        })(n)
                            ? (function (n, t, e) {
                                  !(function (n) {
                                      n.llTempImage =
                                          document.createElement("IMG");
                                  })(n),
                                      cn(n, t, e),
                                      (function (n) {
                                          P(n) ||
                                              (n[_] = {
                                                  backgroundImage:
                                                      n.style.backgroundImage,
                                              });
                                      })(n),
                                      (function (n, t, e) {
                                          var i = y(n, t.data_bg),
                                              o = y(n, t.data_bg_hidpi),
                                              r = a && o ? o : i;
                                          r &&
                                              ((n.style.backgroundImage =
                                                  'url("'.concat(r, '")')),
                                              z(n).setAttribute(u, r),
                                              Q(n, t, e));
                                      })(n, t, e),
                                      (function (n, t, e) {
                                          var i = y(n, t.data_bg_multi),
                                              o = y(n, t.data_bg_multi_hidpi),
                                              r = a && o ? o : i;
                                          r &&
                                              ((n.style.backgroundImage = r),
                                              K(n, t, e));
                                      })(n, t, e),
                                      (function (n, t, e) {
                                          var i = y(n, t.data_bg_set);
                                          if (i) {
                                              var o = i.split("|"),
                                                  a = o.map(function (n) {
                                                      return "image-set(".concat(
                                                          n,
                                                          ")"
                                                      );
                                                  });
                                              (n.style.backgroundImage =
                                                  a.join()),
                                                  "" ===
                                                      n.style.backgroundImage &&
                                                      ((a = o.map(function (n) {
                                                          return "-webkit-image-set(".concat(
                                                              n,
                                                              ")"
                                                          );
                                                      })),
                                                      (n.style.backgroundImage =
                                                          a.join())),
                                                  K(n, t, e);
                                          }
                                      })(n, t, e);
                              })(n, t, e)
                            : (function (n, t, e) {
                                  cn(n, t, e),
                                      (function (n, t, e) {
                                          var i = Y[n.tagName];
                                          i && (i(n, t), Q(n, t, e));
                                      })(n, t, e);
                              })(n, t, e);
                    },
                    un = function (n) {
                        n.removeAttribute(u),
                            n.removeAttribute(s),
                            n.removeAttribute(d);
                    },
                    sn = function (n) {
                        D(n, function (n) {
                            q(n, B);
                        }),
                            q(n, B);
                    },
                    dn = {
                        IMG: sn,
                        IFRAME: function (n) {
                            q(n, V);
                        },
                        VIDEO: function (n) {
                            H(n, function (n) {
                                q(n, V);
                            }),
                                q(n, F),
                                n.load();
                        },
                        OBJECT: function (n) {
                            q(n, J);
                        },
                    },
                    fn = function (n, t) {
                        (function (n) {
                            var t = dn[n.tagName];
                            t
                                ? t(n)
                                : (function (n) {
                                      if (P(n)) {
                                          var t = S(n);
                                          n.style.backgroundImage =
                                              t.backgroundImage;
                                      }
                                  })(n);
                        })(n),
                            (function (n, t) {
                                L(n) ||
                                    O(n) ||
                                    (M(n, t.class_entered),
                                    M(n, t.class_exited),
                                    M(n, t.class_applied),
                                    M(n, t.class_loading),
                                    M(n, t.class_loaded),
                                    M(n, t.class_error));
                            })(n, t),
                            A(n),
                            U(n);
                    },
                    _n = ["IMG", "IFRAME", "VIDEO"],
                    gn = function (n) {
                        return (
                            n.use_native &&
                            "loading" in HTMLImageElement.prototype
                        );
                    },
                    vn = function (n, t, e) {
                        n.forEach(function (n) {
                            return (function (n) {
                                return (
                                    n.isIntersecting || n.intersectionRatio > 0
                                );
                            })(n)
                                ? (function (n, t, e, i) {
                                      var o = (function (n) {
                                          return x.indexOf(k(n)) >= 0;
                                      })(n);
                                      w(n, "entered"),
                                          N(n, e.class_entered),
                                          M(n, e.class_exited),
                                          (function (n, t, e) {
                                              t.unobserve_entered && T(n, e);
                                          })(n, e, i),
                                          C(e.callback_enter, n, t, i),
                                          o || ln(n, e, i);
                                  })(n.target, n, t, e)
                                : (function (n, t, e, i) {
                                      L(n) ||
                                          (N(n, e.class_exited),
                                          (function (n, t, e, i) {
                                              e.cancel_on_exit &&
                                                  (function (n) {
                                                      return k(n) === v;
                                                  })(n) &&
                                                  "IMG" === n.tagName &&
                                                  (an(n),
                                                  (function (n) {
                                                      D(n, function (n) {
                                                          un(n);
                                                      }),
                                                          un(n);
                                                  })(n),
                                                  sn(n),
                                                  M(n, e.class_loading),
                                                  R(i, -1),
                                                  A(n),
                                                  C(
                                                      e.callback_cancel,
                                                      n,
                                                      t,
                                                      i
                                                  ));
                                          })(n, t, e, i),
                                          C(e.callback_exit, n, t, i));
                                  })(n.target, n, t, e);
                        });
                    },
                    bn = function (n) {
                        return Array.prototype.slice.call(n);
                    },
                    mn = function (n) {
                        return n.container.querySelectorAll(
                            n.elements_selector
                        );
                    },
                    pn = function (n) {
                        return (function (n) {
                            return k(n) === p;
                        })(n);
                    },
                    hn = function (n, t) {
                        return (function (n) {
                            return bn(n).filter(L);
                        })(n || mn(t));
                    },
                    En = function (n, e) {
                        var o = c(n);
                        (this._settings = o),
                            (this.loadingCount = 0),
                            (function (n, t) {
                                i &&
                                    !gn(n) &&
                                    (t._observer = new IntersectionObserver(
                                        function (e) {
                                            vn(e, n, t);
                                        },
                                        (function (n) {
                                            return {
                                                root:
                                                    n.container === document
                                                        ? null
                                                        : n.container,
                                                rootMargin:
                                                    n.thresholds ||
                                                    n.threshold + "px",
                                            };
                                        })(n)
                                    ));
                            })(o, this),
                            (function (n, e) {
                                t &&
                                    ((e._onlineHandler = function () {
                                        !(function (n, t) {
                                            var e;
                                            ((e = mn(n)),
                                            bn(e).filter(pn)).forEach(function (
                                                t
                                            ) {
                                                M(t, n.class_error), A(t);
                                            }),
                                                t.update();
                                        })(n, e);
                                    }),
                                    window.addEventListener(
                                        "online",
                                        e._onlineHandler
                                    ));
                            })(o, this),
                            this.update(e);
                    };
                return (
                    (En.prototype = {
                        update: function (n) {
                            var t,
                                o,
                                a = this._settings,
                                r = hn(n, a);
                            G(this, r.length),
                                !e && i
                                    ? gn(a)
                                        ? (function (n, t, e) {
                                              n.forEach(function (n) {
                                                  -1 !==
                                                      _n.indexOf(n.tagName) &&
                                                      (function (n, t, e) {
                                                          n.setAttribute(
                                                              "loading",
                                                              "lazy"
                                                          ),
                                                              cn(n, t, e),
                                                              (function (n, t) {
                                                                  var e =
                                                                      Y[
                                                                          n
                                                                              .tagName
                                                                      ];
                                                                  e && e(n, t);
                                                              })(n, t),
                                                              w(n, h);
                                                      })(n, t, e);
                                              }),
                                                  G(e, 0);
                                          })(r, a, this)
                                        : ((o = r),
                                          (function (n) {
                                              n.disconnect();
                                          })((t = this._observer)),
                                          (function (n, t) {
                                              t.forEach(function (t) {
                                                  n.observe(t);
                                              });
                                          })(t, o))
                                    : this.loadAll(r);
                        },
                        destroy: function () {
                            this._observer && this._observer.disconnect(),
                                t &&
                                    window.removeEventListener(
                                        "online",
                                        this._onlineHandler
                                    ),
                                mn(this._settings).forEach(function (n) {
                                    U(n);
                                }),
                                delete this._observer,
                                delete this._settings,
                                delete this._onlineHandler,
                                delete this.loadingCount,
                                delete this.toLoadCount;
                        },
                        loadAll: function (n) {
                            var t = this,
                                e = this._settings;
                            hn(n, e).forEach(function (n) {
                                T(n, t), ln(n, e, t);
                            });
                        },
                        restoreAll: function () {
                            var n = this._settings;
                            mn(n).forEach(function (t) {
                                fn(t, n);
                            });
                        },
                    }),
                    (En.load = function (n, t) {
                        var e = c(t);
                        ln(n, e);
                    }),
                    (En.resetStatus = function (n) {
                        A(n);
                    }),
                    t &&
                        (function (n, t) {
                            if (t)
                                if (t.length)
                                    for (var e, i = 0; (e = t[i]); i += 1)
                                        l(n, e);
                                else l(n, t);
                        })(En, window.lazyLoadOptions),
                    En
                );
            });
        },
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = (__webpack_module_cache__[moduleId] = {
            exports: {},
        });
        __webpack_modules__[moduleId].call(
            module.exports,
            module,
            module.exports,
            __webpack_require__
        );
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image();
                webP.onload = webP.onerror = function () {
                    callback(webP.height == 2);
                };
                webP.src =
                    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP(function (support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            });
        }
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout(() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }, delay);
                bodyLockStatus = false;
                setTimeout(function () {
                    bodyLockStatus = true;
                }, delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight =
                        window.innerWidth -
                        document.querySelector(".wrapper").offsetWidth +
                        "px";
                }
                body.style.paddingRight =
                    window.innerWidth -
                    document.querySelector(".wrapper").offsetWidth +
                    "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout(function () {
                    bodyLockStatus = true;
                }, delay);
            }
        };
        function functions_FLS(message) {
            setTimeout(() => {
                if (window.FLS) console.log(message);
            }, 0);
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show",
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true,
                    },
                    on: {
                        beforeOpen: function () {},
                        afterOpen: function () {},
                        beforeClose: function () {},
                        afterClose: function () {},
                    },
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false,
                };
                this.previousOpen = {
                    selector: false,
                    element: false,
                };
                this.lastClosed = {
                    selector: false,
                    element: false,
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [
                    "a[href]",
                    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                    "button:not([disabled]):not([aria-hidden])",
                    "select:not([disabled]):not([aria-hidden])",
                    "textarea:not([disabled]):not([aria-hidden])",
                    "area[href]",
                    "iframe",
                    "object",
                    "embed",
                    "[contenteditable]",
                    '[tabindex]:not([tabindex^="-"])',
                ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes,
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings,
                    },
                    on: {
                        ...config.on,
                        ...options?.on,
                    },
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Проснулся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener(
                    "click",
                    function (e) {
                        const buttonOpen = e.target.closest(
                            `[${this.options.attributeOpenButton}]`
                        );
                        if (buttonOpen) {
                            e.preventDefault();
                            this._dataValue = buttonOpen.getAttribute(
                                this.options.attributeOpenButton
                            )
                                ? buttonOpen.getAttribute(
                                      this.options.attributeOpenButton
                                  )
                                : "error";
                            this.youTubeCode = buttonOpen.getAttribute(
                                this.options.youtubeAttribute
                            )
                                ? buttonOpen.getAttribute(
                                      this.options.youtubeAttribute
                                  )
                                : null;
                            if (this._dataValue !== "error") {
                                if (!this.isOpen) this.lastFocusEl = buttonOpen;
                                this.targetOpen.selector = `${this._dataValue}`;
                                this._selectorOpen = true;
                                this.open();
                                return;
                            } else
                                this.popupLogging(
                                    `Ой ой, не заполнен атрибут у ${buttonOpen.classList}`
                                );
                            return;
                        }
                        const buttonClose = e.target.closest(
                            `[${this.options.attributeCloseButton}]`
                        );
                        if (
                            buttonClose ||
                            (!e.target.closest(
                                `.${this.options.classes.popupContent}`
                            ) &&
                                this.isOpen)
                        ) {
                            e.preventDefault();
                            this.close();
                            return;
                        }
                    }.bind(this)
                );
                document.addEventListener(
                    "keydown",
                    function (e) {
                        if (
                            this.options.closeEsc &&
                            e.which == 27 &&
                            e.code === "Escape" &&
                            this.isOpen
                        ) {
                            e.preventDefault();
                            this.close();
                            return;
                        }
                        if (
                            this.options.focusCatch &&
                            e.which == 9 &&
                            this.isOpen
                        ) {
                            this._focusCatch(e);
                            return;
                        }
                    }.bind(this)
                );
                if (this.options.hashSettings.goHash) {
                    window.addEventListener(
                        "hashchange",
                        function () {
                            if (window.location.hash) this._openToHash();
                            else this.close(this.targetOpen.selector);
                        }.bind(this)
                    );
                    window.addEventListener(
                        "load",
                        function () {
                            if (window.location.hash) this._openToHash();
                        }.bind(this)
                    );
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock =
                        document.documentElement.classList.contains("lock") &&
                        !this.isOpen
                            ? true
                            : false;
                    if (
                        selectorValue &&
                        typeof selectorValue === "string" &&
                        selectorValue.trim() !== ""
                    ) {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen)
                        this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen)
                        this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(
                        this.targetOpen.selector
                    );
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube
                                ? "autoplay;"
                                : "";
                            iframe.setAttribute(
                                "allow",
                                `${autoplay}; encrypted-media`
                            );
                            iframe.setAttribute("src", urlVideo);
                            if (
                                !this.targetOpen.element.querySelector(
                                    `[${this.options.youtubePlaceAttribute}]`
                                )
                            ) {
                                this.targetOpen.element
                                    .querySelector(".popup__text")
                                    .setAttribute(
                                        `${this.options.youtubePlaceAttribute}`,
                                        ""
                                    );
                            }
                            this.targetOpen.element
                                .querySelector(
                                    `[${this.options.youtubePlaceAttribute}]`
                                )
                                .appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(
                            new CustomEvent("beforePopupOpen", {
                                detail: {
                                    popup: this,
                                },
                            })
                        );
                        this.targetOpen.element.classList.add(
                            this.options.classes.popupActive
                        );
                        document.documentElement.classList.add(
                            this.options.classes.bodyActive
                        );
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null;
                        else this._reopen = false;
                        this.targetOpen.element.setAttribute(
                            "aria-hidden",
                            "false"
                        );
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout(() => {
                            this._focusTrap();
                        }, 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(
                            new CustomEvent("afterPopupOpen", {
                                detail: {
                                    popup: this,
                                },
                            })
                        );
                        this.popupLogging(`Открыл попап`);
                    } else
                        this.popupLogging(
                            `Ой ой, такого попапа нет.Проверьте корректность ввода. `
                        );
                }
            }
            close(selectorValue) {
                if (
                    selectorValue &&
                    typeof selectorValue === "string" &&
                    selectorValue.trim() !== ""
                )
                    this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(
                    new CustomEvent("beforePopupClose", {
                        detail: {
                            popup: this,
                        },
                    })
                );
                if (this.youTubeCode)
                    if (
                        this.targetOpen.element.querySelector(
                            `[${this.options.youtubePlaceAttribute}]`
                        )
                    )
                        this.targetOpen.element.querySelector(
                            `[${this.options.youtubePlaceAttribute}]`
                        ).innerHTML = "";
                this.previousOpen.element.classList.remove(
                    this.options.classes.popupActive
                );
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(
                        this.options.classes.bodyActive
                    );
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(
                    new CustomEvent("afterPopupClose", {
                        detail: {
                            popup: this,
                        },
                    })
                );
                setTimeout(() => {
                    this._focusTrap();
                }, 50);
                this.popupLogging(`Закрыл попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location)
                    this.hash = this.targetOpen.selector.includes("#")
                        ? this.targetOpen.selector
                        : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(
                    `.${window.location.hash.replace("#", "")}`
                )
                    ? `.${window.location.hash.replace("#", "")}`
                    : document.querySelector(`${window.location.hash}`)
                    ? `${window.location.hash}`
                    : null;
                const buttons = document.querySelector(
                    `[${this.options.attributeOpenButton} = "${classInHash}"]`
                )
                    ? document.querySelector(
                          `[${this.options.attributeOpenButton} = "${classInHash}"]`
                      )
                    : document.querySelector(
                          `[${
                              this.options.attributeOpenButton
                          } = "${classInHash.replace(".", "#")}"]`
                      );
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(
                    this._focusEl
                );
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(
                    this._focusEl
                );
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus();
                else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging
                    ? functions_FLS(`[Попапос]: ${message}`)
                    : null;
            }
        }
        modules_flsModules.popup = new Popup({});
        class MousePRLX {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true,
                };
                this.config = Object.assign(defaultConfig, props);
                if (this.config.init) {
                    const paralaxMouse =
                        document.querySelectorAll("[data-prlx-mouse]");
                    if (paralaxMouse.length) {
                        this.paralaxMouseInit(paralaxMouse);
                        this.setLogging(
                            `Проснулся, слежу за объектами: (${paralaxMouse.length})`
                        );
                    } else
                        this.setLogging(
                            "Нет ни одного объекта. Сплю...zzZZZzZZz..."
                        );
                }
            }
            paralaxMouseInit(paralaxMouse) {
                paralaxMouse.forEach((el) => {
                    const paralaxMouseWrapper = el.closest(
                        "[data-prlx-mouse-wrapper]"
                    );
                    const paramСoefficientX = el.dataset.prlxCx
                        ? +el.dataset.prlxCx
                        : 100;
                    const paramСoefficientY = el.dataset.prlxCy
                        ? +el.dataset.prlxCy
                        : 100;
                    const directionX = el.hasAttribute("data-prlx-dxr")
                        ? -1
                        : 1;
                    const directionY = el.hasAttribute("data-prlx-dyr")
                        ? -1
                        : 1;
                    const paramAnimation = el.dataset.prlxA
                        ? +el.dataset.prlxA
                        : 50;
                    let positionX = 0,
                        positionY = 0;
                    let coordXprocent = 0,
                        coordYprocent = 0;
                    setMouseParallaxStyle();
                    if (paralaxMouseWrapper)
                        mouseMoveParalax(paralaxMouseWrapper);
                    else mouseMoveParalax();
                    function setMouseParallaxStyle() {
                        const distX = coordXprocent - positionX;
                        const distY = coordYprocent - positionY;
                        positionX += (distX * paramAnimation) / 1e3;
                        positionY += (distY * paramAnimation) / 1e3;
                        el.style.cssText = `transform: translate3D(${
                            (directionX * positionX) / (paramСoefficientX / 10)
                        }%,${
                            (directionY * positionY) / (paramСoefficientY / 10)
                        }%,0);`;
                        requestAnimationFrame(setMouseParallaxStyle);
                    }
                    function mouseMoveParalax(wrapper = window) {
                        wrapper.addEventListener("mousemove", function (e) {
                            const offsetTop =
                                el.getBoundingClientRect().top + window.scrollY;
                            if (
                                offsetTop >= window.scrollY ||
                                offsetTop + el.offsetHeight >= window.scrollY
                            ) {
                                const parallaxWidth = window.innerWidth;
                                const parallaxHeight = window.innerHeight;
                                const coordX = e.clientX - parallaxWidth / 2;
                                const coordY = e.clientY - parallaxHeight / 2;
                                coordXprocent = (coordX / parallaxWidth) * 100;
                                coordYprocent = (coordY / parallaxHeight) * 100;
                            }
                        });
                    }
                });
            }
            setLogging(message) {
                this.config.logging
                    ? functions_FLS(`[PRLX Mouse]: ${message}`)
                    : null;
            }
        }
        modules_flsModules.mousePrlx = new MousePRLX({});
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true,
        });
        let addWindowScrollEvent = false;
        setTimeout(() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", function (e) {
                    document.dispatchEvent(windowScroll);
                });
            }
        }, 0);
        const buttonSave = document.querySelector(".personal-account__btn");
        const textAreaEl = document.querySelector(
            ".personal-account__textarea"
        );
        const inpPersonalAccount = document.querySelectorAll(
            ".personal-account__input"
        );
        const contacts = document.querySelectorAll(
            ".personal-account__contact"
        );
        const linkProject = document.querySelector(".personal-account__link");
        const uploadedFiles = document.querySelectorAll(".example__input");
        window["FLS"] = true;
        isWebp();
    })();
})();

document.querySelector(".auth__button")?.addEventListener("click", async () => {
    const login = document.querySelector(".forms-popup__mail > input").value;
    const password = document.querySelector(
        ".forms-popup__password > input"
    ).value;
    const response = await fetch("http://zkno.ru:3070/user/signIn", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((res) => res.json());
    console.log(response);
    if (!response.code) {
        localStorage.setItem("token", response.token);
        location.reload();
    } else alert(response.message);
});

document
    .querySelector(".register__button")
    ?.addEventListener("click", async () => {
        console.log("clicked");
        const login = document.querySelector(
            ".forms-popup__login > input"
        ).value;
        const email = document.querySelector(
            "#popup_1 > div > div > div > div.popup__forms.forms-popup > div.forms-popup__inp.forms-popup__mail._icon-dot > input"
        ).value;
        const password = document.querySelector(
            "#popup_1 > div > div > div > div.popup__forms.forms-popup > div.forms-popup__inp.forms-popup__password._icon-dot > input"
        ).value;
        const repeatPassword = document.querySelector(
            ".forms-popup__repeat-password > input"
        ).value;
        console.log(password, repeatPassword);
        if (password !== repeatPassword)
            return alert("Введённые пароли не совпадают");
        const firstName = document.querySelector(
            ".forms-popup__name > input"
        ).value;
        const lastName = document.querySelector(
            ".forms-popup__surname > input"
        ).value;
        const response = await fetch("http://zkno.ru:3070/user/signUp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                login,
                firstName,
                lastName,
                email,
                password,
            }),
        }).then((res) => res.json());
        console.log(response);
        if (!response.code) {
            localStorage.setItem("token", response.token);
            location.reload();
        } else alert(response.message);
    });

function renderUsers(users) {
    users.forEach((user) => {
        // Создаем родительский элемент
        const pageBody = document.createElement("div");
        pageBody.classList.add("page__body");

        // Создаем ссылку-изображение
        const linkPersonImage = document.createElement("a");
        linkPersonImage.classList.add("page__link-person");
        linkPersonImage.href = "";

        // Создаем блок изображения
        const pageImage = document.createElement("div");
        pageImage.classList.add("page__image");
        linkPersonImage.appendChild(pageImage);

        const image = document.createElement("img");
        console.log(user);
        image.src = "http://zkno.ru:3070/public/" + user.photo;
        image.alt = "";
        pageImage.appendChild(image);

        pageBody.appendChild(linkPersonImage);

        // Создаем блок информации о персоне
        const aboutBlock = document.createElement("div");
        aboutBlock.classList.add("page__about-block");

        const linkPersonInfo = document.createElement("a");
        linkPersonInfo.classList.add("page__link-person");
        linkPersonInfo.href = "";

        const pageInfo = document.createElement("div");
        pageInfo.classList.add("page__info");
        pageInfo.textContent = user.lastName + " " + user.firstName;
        linkPersonInfo.appendChild(pageInfo);

        aboutBlock.appendChild(linkPersonInfo);

        // Создаем блок проектов
        const itemProjects = document.createElement("div");
        itemProjects.classList.add("page__item-projects");

        const linkPersonProjects = document.createElement("a");
        linkPersonProjects.classList.add("page__link-person");
        linkPersonProjects.href = "";

        const aboutProjects = document.createElement("p");
        aboutProjects.classList.add("page__about-projects");
        aboutProjects.textContent = "Мои работы";
        linkPersonProjects.appendChild(aboutProjects);

        itemProjects.appendChild(linkPersonProjects);

        const blockItems = document.createElement("div");
        blockItems.classList.add("page__block-items");

        user.works.forEach((work) => {
            const linkPersonItem1 = document.createElement("a");
            linkPersonItem1.classList.add("page__link-person");
            linkPersonItem1.href = work.link;

            const project1 = document.createElement("div");
            project1.classList.add("page__project");

            const linkPersonProject1 = document.createElement("a");
            linkPersonProject1.classList.add("page__link-person");
            linkPersonProject1.href = work.link;
            const projectItem = document.createElement("a");
            projectItem.classList.add("page__project-item");
            projectItem.href = work.link;
            projectItem.textContent = work.name;

            linkPersonItem1.appendChild(linkPersonProject1);
            linkPersonItem1.appendChild(projectItem);
            project1.appendChild(linkPersonItem1);
            blockItems.appendChild(project1);
        });

        itemProjects.appendChild(blockItems);

        aboutBlock.appendChild(itemProjects);
        pageBody.appendChild(aboutBlock);

        // Создаем блок информации о персоне
        const infoPerson = document.createElement("div");
        infoPerson.classList.add("page__info-person");

        const pageText = document.createElement("div");
        pageText.classList.add("page__text");
        pageText.textContent = user.shortDescription;

        const linkProfile = document.createElement("a");
        linkProfile.classList.add("page__button", "button");
        linkProfile.href = "user.html?" + user.id;
        linkProfile.textContent = "Перейти в профиль";

        infoPerson.appendChild(pageText);
        infoPerson.appendChild(linkProfile);
        pageBody.appendChild(infoPerson);

        // Вставляем созданную структуру в нужное место на странице
        const container = document.querySelector(".page__block");
        container.appendChild(pageBody);
    });
}

if (/home\.html/i.test(location.pathname)) {
    fetch(`http://zkno.ru:3070/user/list?`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
            if (response.code) return alert(response.message);
            renderUsers(response);
        });
    document
        .querySelector(
            "body > div.wrapper > main > div > div > div.page__block > div.page__block-header > div > input"
        )
        .addEventListener("input", (e) => {
            const elements = document.querySelectorAll(".page__body");
            elements.forEach((element) => {
                element.remove();
            });
            fetch(
                `http://zkno.ru:3070/user/list${
                    !e.target.value.length ? "" : `?query=${e.target.value}`
                }`,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
                .then((res) => res.json())
                .then((response) => {
                    console.log(response);
                    if (response.code) return alert(response.message);
                    renderUsers(response);
                });
        });
}

if (/user\.html/i.test(location.pathname)) {
    fetch(
        `http://zkno.ru:3070/user/${
            location.search.length ? location.search.slice(1) : ""
        }`,
        {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }
    )
        .then((res) => res.json())
        .then((user) => {
            console.log(user);
            if (user?.code) return alert(user.message);

            const headerText = document.querySelector(
                "body > div.wrapper > main > div.page__about.about > div > div > div.about__info > h2"
            );

            headerText.textContent = `Я ${user.lastName} ${user.firstName}`;
            const descText = document.querySelector(
                "body > div.wrapper > main > div.page__about.about > div > div > div.about__info > div"
            );
            descText.textContent = user.shortDescription;

            const fullDescText = document.querySelector(
                "body > div.wrapper > main > div.page__why-me.why-me > div > div > div.why-me__text"
            );
            fullDescText.textContent = user.fullDescription;

            const button = document.querySelector(
                "body > div.wrapper > main > div.page__projects.projects > div > div > div.projects__info > button"
            );
            button.addEventListener(
                "click",
                () => (location.href = "https://t.me/" + user.contacts.tg)
            );
            const secondButton = document.querySelector(
                "body > div.wrapper > main > div.page__about.about > div > div > div.about__info > button"
            );
            secondButton.addEventListener(
                "click",
                () => (location.href = "https://t.me/" + user.contacts.tg)
            );

            user.photoWorks.forEach((work) => {
                console.log(work);
                const contentBlock = document.querySelector(".projects__cards");

                // Создаем новый элемент div
                const newCard = document.createElement("div");
                newCard.classList.add("projects__card", "card");

                // Создаем новый элемент a
                const newLink = document.createElement("a");
                newLink.href = "";
                newLink.classList.add("card__project");

                // Создаем новый элемент picture
                const newPicture = document.createElement("picture");

                // Создаем новый элемент img
                const newImage = document.createElement("img");
                newImage.src = "http://zkno.ru:3070/public/" + work;
                newImage.alt = "";

                // Добавляем элементы в DOM
                newPicture.appendChild(newImage);
                newLink.appendChild(newPicture);
                newCard.appendChild(newLink);
                contentBlock.appendChild(newCard);
            });
        });
}

function renderLKworks(works) {
    const content = document.querySelector(".examples__body");
    works.forEach((work) => {
        const exampleDiv2 = document.createElement("div");
        exampleDiv2.classList.add("example__img");
        const uploadedImg = document.createElement("img");
        uploadedImg.src = "http://zkno.ru:3070/public/" + work;
        uploadedImg.id = "uploadedImg";

        exampleDiv2.appendChild(uploadedImg);
        content.insertBefore(exampleDiv2, content.firstChild);
    });

    const exampleDiv = document.createElement("div");
    exampleDiv.classList.add("examples__example", "example");

    const exampleImg = document.createElement("img");
    exampleImg.src = "img/icons/add-big.svg";
    exampleImg.alt = "";
    const iconDiv = document.createElement("div");
    iconDiv.classList.add("example__icon");
    iconDiv.appendChild(exampleImg);
    exampleDiv.appendChild(iconDiv);

    const exampleInput = document.createElement("input");
    exampleInput.type = "file";
    exampleInput.name = "example1";
    exampleInput.setAttribute("autocomplete", "off");
    exampleInput.setAttribute("data-error", "Ошибка");
    exampleInput.placeholder = "";
    exampleInput.classList.add("example__input", "input");

    exampleInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const exampleDiv2 = document.createElement("div");
            exampleDiv2.classList.add("example__img");
            const uploadedImg = document.createElement("img");
            uploadedImg.src = e.target.result;
            uploadedImg.id = "uploadedImg";

            exampleDiv2.appendChild(uploadedImg);
            content.insertBefore(exampleDiv2, content.firstChild);
        };

        reader.readAsDataURL(file);
    });
    exampleDiv.appendChild(exampleInput);

    content.appendChild(exampleDiv);
}

if (/lk\.html/i.test(location.pathname)) {
    const form2 = document.querySelector(
        "#popup__2 > div > div > form > div.popup__btn-save > button"
    );
    console.log(form2);
    form2.addEventListener("click", (e) => {
        e.preventDefault();
        const name = document.querySelector(
            "#popup__2 > div > div > form > div.popup__block-items > div > div:nth-child(1) > input"
        );
        const link = document.querySelector(
            "#popup__2 > div > div > form > div.popup__block-items > div > div:nth-child(2) > input"
        );
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("personal-account__project");

        const projectLink = document.createElement("a");
        projectLink.href = link.value;
        projectLink.classList.add("personal-account__link");
        projectLink.textContent = name.value;
        projectDiv.appendChild(projectLink);

        const container = document.querySelector(
            "body > div.wrapper > main > div > div > form > div.personal-account__about-me > div.personal-account__my-projects"
        );
        console.log(container);
        container.insertBefore(
            projectDiv,
            document.querySelector(".personal-account__add-icon")
        );
    });

    const form = document.querySelector(
        "body > div.wrapper > main > div > div > form"
    );
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData();
        const a = document.querySelector(
            "body > div.wrapper > main > div > div > form > div.personal-account__about-me > div.personal-account__photo > input"
        );

        if (a.files[0]) formData.append("avatar", a.files[0]);
        const shortText = document.querySelector("#message");
        formData.append("shortDescription", shortText.value);

        const fullText = document.querySelector("#skills");
        formData.append("fullDescription", fullText.value);

        const tg = document.querySelector("#telegram");
        formData.append("tg", tg.value);

        const phone = document.querySelector("#phone");
        formData.append("phone", phone.value);
        const name = document.querySelector("#name");
        formData.append("name", name.value);
        const photoWorks = Array.from(
            document.querySelectorAll("#uploadedImg")
        );
        console.log(photoWorks);
        await Promise.all(
            photoWorks
                .filter((work) => !work.currentSrc.startsWith("http:"))
                .map(async (work) => {
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");

                    canvas.width = work.naturalWidth;
                    canvas.height = work.naturalHeight;

                    ctx.drawImage(work, 0, 0);
                    await new Promise((resolve) => {
                        canvas.toBlob(
                            (blob) => {
                                formData.append("work", blob, "image.jpg");
                                resolve();
                                console.log(1);
                            },
                            "image/jpeg",
                            0.8
                        );
                    });
                })
        );
        const works = Array.from(
            document.querySelectorAll(
                "body > div.wrapper > main > div > div > form > div.personal-account__about-me > div.personal-account__my-projects > div.personal-account__project > a"
            )
        ).map((work) => {
            console.log(work.attributes);
            return { name: work.textContent, link: work.attributes.href.value };
        });
        console.log(works);
        formData.append("works", JSON.stringify(works));
        const response = await fetch("http://zkno.ru:3070/user/", {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: formData,
        }).then((res) => res.json());
        console.log(response);
        if (!response.code) {
            alert("Успешно загружено");
        } else alert(response.message);
    });

    fetch(`http://zkno.ru:3070/user/`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((res) => res.json())
        .then((user) => {
            console.log(user);
            if (user?.code) return alert(user.message);
            document.querySelector(".personal-account__input_text").value =
                user.shortDescription;
            document.querySelector(".personal-account__textarea").value =
                user.fullDescription;
            document.querySelector(".personal-account__input_name").value =
                user.lastName + " " + user.firstName;
            document.querySelector(".personal-account__tg-inp").value =
                user.contacts.tg || "";
            document.querySelector(".personal-account__number-inp").value =
                user.contacts.phone || "";
            // document.querySelector(".popup__project-name").value =
            //     "Название говна";
            // document.querySelector(".popup__project-link").value =
            //     "Ссылка на гавно";
            renderLKworks(user.photoWorks);
            user.works.forEach((work) => {
                const projectDiv = document.createElement("div");
                projectDiv.classList.add("personal-account__project");

                const projectLink = document.createElement("a");
                projectLink.href = work.link;
                projectLink.classList.add("personal-account__link");
                projectLink.textContent = work.name;
                projectDiv.appendChild(projectLink);

                const container = document.querySelector(
                    ".personal-account__my-projects"
                );
                container.insertBefore(
                    projectDiv,
                    document.querySelector(".personal-account__add-icon")
                );
            });
        });

    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            uploadedImg.src = e.target.result;
            fileInput.style.display = "none";
            uploadLabel.style.display = "none";
        };

        reader.readAsDataURL(file);
    });
}
