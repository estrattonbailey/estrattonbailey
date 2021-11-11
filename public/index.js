(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) =>
    __defProp(target, "__esModule", { value: true });
  var __require =
    typeof require !== "undefined"
      ? require
      : (x3) => {
          throw new Error('Dynamic require of "' + x3 + '" is not supported');
        };
  var __commonJS = (cb, mod) =>
    function __require2() {
      return (
        mod ||
          (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod),
        mod.exports
      );
    };
  var __reExport = (target, module, desc) => {
    if (
      (module && typeof module === "object") ||
      typeof module === "function"
    ) {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {
            get: () => module[key],
            enumerable:
              !(desc = __getOwnPropDesc(module, key)) || desc.enumerable,
          });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(
      __markAsModule(
        __defProp(
          module != null ? __create(__getProtoOf(module)) : {},
          "default",
          module && module.__esModule && "default" in module
            ? { get: () => module.default, enumerable: true }
            : { value: module, enumerable: true }
        )
      ),
      module
    );
  };

  // node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/index.js
  var require_nano_css = __commonJS({
    "node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/index.js"(
      exports
    ) {
      "use strict";
      var KEBAB_REGEX = /[A-Z]/g;
      var hash = function (str) {
        var h2 = 5381,
          i3 = str.length;
        while (i3) h2 = (h2 * 33) ^ str.charCodeAt(--i3);
        return (h2 >>> 0).toString(36);
      };
      exports.create = function (config) {
        config = config || {};
        var assign = config.assign || Object.assign;
        var client = typeof window === "object";
        if (true) {
          if (client) {
            if (
              typeof document !== "object" ||
              !document.getElementsByTagName("HTML")
            ) {
              console.error(
                'nano-css detected browser environment because of "window" global, but "document" global seems to be defective.'
              );
            }
          }
        }
        var renderer = assign(
          {
            raw: "",
            pfx: "_",
            client,
            assign,
            stringify: JSON.stringify,
            kebab: function (prop) {
              return prop.replace(KEBAB_REGEX, "-$&").toLowerCase();
            },
            decl: function (key, value) {
              key = renderer.kebab(key);
              return key + ":" + value + ";";
            },
            hash: function (obj) {
              return hash(renderer.stringify(obj));
            },
            selector: function (parent, selector) {
              return parent + (selector[0] === ":" ? "" : " ") + selector;
            },
            putRaw: function (rawCssRule) {
              renderer.raw += rawCssRule;
            },
          },
          config
        );
        if (renderer.client) {
          if (!renderer.sh)
            document.head.appendChild(
              (renderer.sh = document.createElement("style"))
            );
          if (true) {
            renderer.sh.setAttribute("data-nano-css-dev", "");
            renderer.shTest = document.createElement("style");
            renderer.shTest.setAttribute("data-nano-css-dev-tests", "");
            document.head.appendChild(renderer.shTest);
          }
          renderer.putRaw = function (rawCssRule) {
            if (false) {
              var sheet = renderer.sh.sheet;
              try {
                sheet.insertRule(rawCssRule, sheet.cssRules.length);
              } catch (error) {}
            } else {
              try {
                renderer.shTest.sheet.insertRule(
                  rawCssRule,
                  renderer.shTest.sheet.cssRules.length
                );
              } catch (error) {
                if (config.verbose) {
                  console.error(error);
                }
              }
              renderer.sh.appendChild(document.createTextNode(rawCssRule));
            }
          };
        }
        renderer.put = function (selector, decls, atrule) {
          var str = "";
          var prop, value;
          var postponed = [];
          for (prop in decls) {
            value = decls[prop];
            if (value instanceof Object && !(value instanceof Array)) {
              postponed.push(prop);
            } else {
              if (!renderer.sourcemaps) {
                str +=
                  "    " + renderer.decl(prop, value, selector, atrule) + "\n";
              } else {
                str += renderer.decl(prop, value, selector, atrule);
              }
            }
          }
          if (str) {
            if (!renderer.sourcemaps) {
              str = "\n" + selector + " {\n" + str + "}\n";
            } else {
              str = selector + "{" + str + "}";
            }
            renderer.putRaw(atrule ? atrule + "{" + str + "}" : str);
          }
          for (var i3 = 0; i3 < postponed.length; i3++) {
            prop = postponed[i3];
            if (prop[0] === "@" && prop !== "@font-face") {
              renderer.putAt(selector, decls[prop], prop);
            } else {
              renderer.put(
                renderer.selector(selector, prop),
                decls[prop],
                atrule
              );
            }
          }
        };
        renderer.putAt = renderer.put;
        return renderer;
      };
    },
  });

  // node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/cache.js
  var require_cache = __commonJS({
    "node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/cache.js"(
      exports
    ) {
      "use strict";
      exports.addon = function (renderer) {
        var cache = {};
        renderer.cache = function (css) {
          if (!css) return "";
          var key = renderer.hash(css);
          if (!cache[key]) {
            cache[key] = renderer.rule(css, key);
          }
          return cache[key];
        };
      };
    },
  });

  // node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/nesting.js
  var require_nesting = __commonJS({
    "node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/nesting.js"(
      exports
    ) {
      "use strict";
      exports.addon = function (renderer) {
        renderer.selector = function (parentSelectors, selector) {
          var parents = parentSelectors.split(",");
          var result = [];
          var selectors = selector.split(",");
          var len1 = parents.length;
          var len2 = selectors.length;
          var i3, j3, sel, pos, parent, replacedSelector;
          for (i3 = 0; i3 < len2; i3++) {
            sel = selectors[i3];
            pos = sel.indexOf("&");
            if (pos > -1) {
              for (j3 = 0; j3 < len1; j3++) {
                parent = parents[j3];
                replacedSelector = sel.replace(/&/g, parent);
                result.push(replacedSelector);
              }
            } else {
              for (j3 = 0; j3 < len1; j3++) {
                parent = parents[j3];
                if (parent) {
                  result.push(parent + " " + sel);
                } else {
                  result.push(sel);
                }
              }
            }
          }
          return result.join(",");
        };
      };
    },
  });

  // node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js
  var require_warnOnMissingDependencies = __commonJS({
    "node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js"(
      exports,
      module
    ) {
      "use strict";
      var pkgName = "nano-css";
      module.exports = function warnOnMissingDependencies(
        addon,
        renderer,
        deps
      ) {
        var missing = [];
        for (var i3 = 0; i3 < deps.length; i3++) {
          var name = deps[i3];
          if (!renderer[name]) {
            missing.push(name);
          }
        }
        if (missing.length) {
          var str =
            'Addon "' + addon + '" is missing the following dependencies:';
          for (var j3 = 0; j3 < missing.length; j3++) {
            str +=
              '\n require("' +
              pkgName +
              "/addon/" +
              missing[j3] +
              '").addon(nano);';
          }
          throw new Error(str);
        }
      };
    },
  });

  // node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/keyframes.js
  var require_keyframes = __commonJS({
    "node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/keyframes.js"(
      exports
    ) {
      "use strict";
      exports.addon = function (renderer, config) {
        if (true) {
          require_warnOnMissingDependencies()("keyframes", renderer, [
            "putRaw",
            "put",
          ]);
        }
        config = renderer.assign(
          {
            prefixes: ["-webkit-", "-moz-", "-o-", ""],
          },
          config || {}
        );
        var prefixes = config.prefixes;
        if (renderer.client) {
          document.head.appendChild(
            (renderer.ksh = document.createElement("style"))
          );
        }
        var putAt = renderer.putAt;
        renderer.putAt = function (__, keyframes, prelude) {
          if (prelude[1] === "k") {
            var str = "";
            for (var keyframe in keyframes) {
              var decls = keyframes[keyframe];
              var strDecls = "";
              for (var prop in decls)
                strDecls += renderer.decl(prop, decls[prop]);
              str += keyframe + "{" + strDecls + "}";
            }
            for (var i3 = 0; i3 < prefixes.length; i3++) {
              var prefix = prefixes[i3];
              var rawKeyframes =
                prelude.replace("@keyframes", "@" + prefix + "keyframes") +
                "{" +
                str +
                "}";
              if (renderer.client) {
                renderer.ksh.appendChild(document.createTextNode(rawKeyframes));
              } else {
                renderer.putRaw(rawKeyframes);
              }
            }
            return;
          }
          putAt(__, keyframes, prelude);
        };
        renderer.keyframes = function (keyframes, block) {
          if (!block) block = renderer.hash(keyframes);
          block = renderer.pfx + block;
          renderer.putAt("", keyframes, "@keyframes " + block);
          return block;
        };
      };
    },
  });

  // node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/rule.js
  var require_rule = __commonJS({
    "node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/rule.js"(
      exports
    ) {
      "use strict";
      exports.addon = function (renderer) {
        if (true) {
          require_warnOnMissingDependencies()("rule", renderer, ["put"]);
        }
        var blocks;
        if (true) {
          blocks = {};
        }
        renderer.rule = function (css, block) {
          if (true) {
            if (block) {
              if (typeof block !== "string") {
                throw new TypeError(
                  'nano-css block name must be a string. For example, use nano.rule({color: "red", "RedText").'
                );
              }
              if (blocks[block]) {
                console.error(
                  'Block name "' + block + '" used more than once.'
                );
              }
              blocks[block] = 1;
            }
          }
          block = block || renderer.hash(css);
          block = renderer.pfx + block;
          renderer.put("." + block, css);
          return " " + block;
        };
      };
    },
  });

  // node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/global.js
  var require_global = __commonJS({
    "node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/global.js"(
      exports
    ) {
      "use strict";
      exports.addon = function (renderer) {
        if (true) {
          require_warnOnMissingDependencies()("global", renderer, ["put"]);
        }
        var selector = renderer.selector;
        renderer.selector = function (parent, current) {
          if (parent.indexOf(":global") > -1) parent = "";
          return selector(parent, current);
        };
        renderer.global = function (css) {
          return renderer.put("", css);
        };
      };
    },
  });

  // node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/hydrate.js
  var require_hydrate = __commonJS({
    "node_modules/.pnpm/github.com+estrattonbailey+nano-css@f543daab20a282072b4e1bf90930f701c6228a9d_react-dom@17.0.2+react@17.0.2/node_modules/nano-css/addon/hydrate.js"(
      exports
    ) {
      "use strict";
      exports.addon = function (renderer) {
        if (true) {
          require_warnOnMissingDependencies()("hydrate", renderer, ["put"]);
        }
        var hydrated = {};
        renderer.hydrate = function (sh) {
          var cssRules = sh.cssRules || sh.sheet.cssRules;
          for (var i3 = 0; i3 < cssRules.length; i3++)
            hydrated[cssRules[i3].selectorText] = 1;
        };
        if (renderer.client) {
          if (renderer.sh) renderer.hydrate(renderer.sh);
          var put = renderer.put;
          renderer.put = function (selector, css) {
            if (selector in hydrated) return;
            put(selector, css);
          };
        }
      };
    },
  });

  // node_modules/.pnpm/hypostyle@3.1.2_react-dom@17.0.2+react@17.0.2/node_modules/hypostyle/utils.js
  var require_utils = __commonJS({
    "node_modules/.pnpm/hypostyle@3.1.2_react-dom@17.0.2+react@17.0.2/node_modules/hypostyle/utils.js"(
      exports,
      module
    ) {
      function px(v3) {
        return typeof v3 === "number" ? v3 + "px" : v3;
      }
      function str(v3) {
        return v3 + "";
      }
      function percOrPx(v3) {
        return typeof v3 === "number"
          ? v3 <= 1
            ? v3 * 100 + "%"
            : v3 + "px"
          : v3;
      }
      module.exports = {
        px,
        str,
        percOrPx,
      };
    },
  });

  // node_modules/.pnpm/hypostyle@3.1.2_react-dom@17.0.2+react@17.0.2/node_modules/hypostyle/properties.js
  var require_properties = __commonJS({
    "node_modules/.pnpm/hypostyle@3.1.2_react-dom@17.0.2+react@17.0.2/node_modules/hypostyle/properties.js"(
      exports,
      module
    ) {
      var { px, str, percOrPx } = require_utils();
      module.exports = {
        display: {},
        position: {},
        top: {
          token: "space",
          unit: px,
        },
        bottom: {
          token: "space",
          unit: px,
        },
        left: {
          token: "space",
          unit: px,
        },
        right: {
          token: "space",
          unit: px,
        },
        width: {
          token: "width",
          unit: percOrPx,
        },
        minWidth: {
          token: "width",
          unit: percOrPx,
        },
        maxWidth: {
          token: "width",
          unit: percOrPx,
        },
        height: {
          token: "height",
          unit: percOrPx,
        },
        minHeight: {
          token: "height",
          unit: percOrPx,
        },
        maxHeight: {
          token: "height",
          unit: percOrPx,
        },
        color: {
          token: "color",
        },
        background: {
          token: "color",
        },
        backgroundColor: {
          token: "color",
        },
        backgroundImage: {},
        backgroundRepeat: {},
        backgroundSize: {},
        opacity: {},
        flex: {},
        flexWrap: {},
        alignItems: {},
        alignContent: {},
        justifyItems: {},
        justifyContent: {},
        flexDirection: {},
        flexGrow: {},
        flexShrink: {},
        flexBasis: {},
        justifySelf: {},
        alignSelf: {},
        order: {
          unit: str,
        },
        margin: {
          token: "space",
          unit: px,
        },
        marginTop: {
          token: "space",
          unit: px,
        },
        marginBottom: {
          token: "space",
          unit: px,
        },
        marginLeft: {
          token: "space",
          unit: px,
        },
        marginRight: {
          token: "space",
          unit: px,
        },
        padding: {
          token: "space",
          unit: px,
        },
        paddingTop: {
          token: "space",
          unit: px,
        },
        paddingBottom: {
          token: "space",
          unit: px,
        },
        paddingLeft: {
          token: "space",
          unit: px,
        },
        paddingRight: {
          token: "space",
          unit: px,
        },
        zIndex: {
          token: "zIndex",
          unit: str,
        },
        fontSize: {
          token: "fontSize",
        },
        fontFamily: {
          token: "fontFamily",
        },
        fontWeight: {
          token: "fontWeight",
          unit: str,
        },
        lineHeight: {
          token: "lineHeight",
        },
        letterSpacing: {
          token: "letterSpacing",
        },
        textAlign: {},
        overflow: {},
        boxShadow: {
          token: "boxShadow",
        },
        border: {
          token: "border",
        },
        borderColor: {
          token: "color",
        },
        borderWidth: {
          token: "borderWidth",
        },
        borderStyle: {
          token: "borderStyle",
        },
        borderRadius: {
          token: "borderRadius",
        },
        fill: {
          token: "color",
        },
        stroke: {
          token: "color",
        },
        transition: {
          token: "transition",
        },
        transitionProperty: {},
        transitionDuration: {
          token: "transitionDuration",
        },
        transitionTimingFunction: {
          token: "transitionTimingFunction",
        },
        transform: {},
      };
    },
  });

  // node_modules/.pnpm/hypostyle@3.1.2_react-dom@17.0.2+react@17.0.2/node_modules/hypostyle/index.js
  var require_hypostyle = __commonJS({
    "node_modules/.pnpm/hypostyle@3.1.2_react-dom@17.0.2+react@17.0.2/node_modules/hypostyle/index.js"(
      exports,
      module
    ) {
      var { create } = require_nano_css();
      var { addon: cache } = require_cache();
      var { addon: nesting } = require_nesting();
      var { addon: keyframes } = require_keyframes();
      var { addon: rule } = require_rule();
      var { addon: globalAddon } = require_global();
      var { addon: hydrate } = require_hydrate();
      var defaultCssProps = require_properties();
      function obj(o3, theme) {
        return typeof o3 === "function" ? o3(theme) : o3;
      }
      function explode(props, theme) {
        const styles = {};
        for (const prop of Object.keys(props)) {
          if (
            theme.macros[prop] &&
            (props[prop] === true || props[prop] === false)
          ) {
            if (props[prop] === true) Object.assign(styles, theme.macros[prop]);
          } else if (theme.variants[prop]) {
            Object.assign(styles, theme.variants[prop][props[prop]]);
          } else {
            styles[prop] = props[prop];
          }
        }
        for (const prop of Object.keys(styles)) {
          const value = styles[prop];
          if (
            typeof value === "object" &&
            !Array.isArray(value) &&
            !/^\d/.test(Object.keys(value)[0])
          ) {
            styles[prop] = explode(value, theme);
            continue;
          }
          if (theme.shorthands[prop]) {
            for (const p2 of [].concat(theme.shorthands[prop])) {
              styles[p2] = value;
            }
            delete styles[prop];
          } else {
            styles[prop] = value;
          }
        }
        return styles;
      }
      function style(props, theme) {
        const styles = {};
        for (const prop of Object.keys(props)) {
          const value = props[prop];
          const { token, unit } = theme.properties[prop] || {};
          const tokens = theme.tokens[token];
          if (typeof value === "object" && !Array.isArray(value)) {
            const keyIndicies = Object.keys(value);
            if (/^\d/.test(keyIndicies[0])) {
              const arr = [];
              for (const i3 of keyIndicies) {
                arr[i3] = value[i3];
              }
              props[prop] = arr;
            } else {
              styles[prop] = style(value, theme);
              continue;
            }
          }
          const values = [].concat(props[prop]);
          for (let i3 = 0; i3 < values.length; i3++) {
            const value2 = values[i3];
            const token2 = tokens ? tokens[value2] || value2 : value2;
            const unitValue = unit ? unit(token2) : token2;
            if (unitValue === void 0) continue;
            let s2 = styles;
            const breakpoint = theme.breakpoints[i3 - 1];
            if (breakpoint) {
              const media = `@media (min-width: ${breakpoint})`;
              s2 = styles[media] = styles[media] || {};
            }
            if (!breakpoint && i3 > 0) continue;
            s2[prop] = unitValue;
          }
        }
        return styles;
      }
      function pick(props, theme) {
        const styles = {};
        const extra = {};
        for (const prop of Object.keys(props)) {
          if (
            theme.macros[prop] ||
            theme.variants[prop] ||
            theme.shorthands[prop] ||
            theme.properties[prop]
          ) {
            styles[prop] = props[prop];
          } else {
            extra[prop] = props[prop];
          }
        }
        return {
          styles,
          props: extra,
        };
      }
      function createNano({ addons, prefix = "_" }) {
        const nano = create({
          pfx: prefix,
          sh:
            typeof document === "object"
              ? document.getElementById("hypo")
              : null,
        });
        addons.map((a3) => a3(nano));
        return nano;
      }
      function hypostyle2(theme = {}, config = {}) {
        const t3 = {
          tokens: {},
          breakpoints: [],
          macros: {},
          variants: {},
          ...theme,
          properties: {
            ...defaultCssProps,
            ...(theme.properties || {}),
          },
          shorthands: {
            ...(theme.shorthands || {}),
          },
        };
        const addons = [
          cache,
          nesting,
          keyframes,
          rule,
          globalAddon,
          hydrate,
        ].concat(config.addons || []);
        let nano = createNano({ addons, prefix: config.prefix });
        return {
          explode(props) {
            return explode(obj(props, t3), t3);
          },
          style(props) {
            return style(explode(obj(props, t3), t3), t3);
          },
          css(props) {
            const styles = style(explode(obj(props, t3), t3), t3);
            return Object.keys(styles).length ? nano.rule(styles) : "";
          },
          pick(props) {
            return pick(props, t3);
          },
          injectGlobal(props) {
            nano.global(style(explode(obj(props, t3), t3), t3));
          },
          keyframes: nano.keyframes,
          flush() {
            const raw = nano.raw;
            nano = createNano({ addons });
            return raw;
          },
          get theme() {
            return t3;
          },
        };
      }
      module.exports = { hypostyle: hypostyle2 };
    },
  });

  // node_modules/.pnpm/hypostyle@3.1.2_react-dom@17.0.2+react@17.0.2/node_modules/hypostyle/presets.js
  var require_presets = __commonJS({
    "node_modules/.pnpm/hypostyle@3.1.2_react-dom@17.0.2+react@17.0.2/node_modules/hypostyle/presets.js"(
      exports,
      module
    ) {
      var breakpoints = ["400px", "800px", "1200px"];
      var tokens = {
        space: [
          0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64,
        ],
        fontSize: [
          "3rem",
          "3rem",
          "2.2rem",
          "1.8rem",
          "1.4rem",
          "1rem",
          "0.875rem",
        ],
        fontWeight: [
          "0",
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900",
          "1000",
        ],
        lineHeight: [1.1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6],
      };
      var shorthands = {
        d: "display",
        w: "width",
        h: "height",
        c: "color",
        bg: "background",
        m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
        mt: "marginTop",
        mb: "marginBottom",
        ml: "marginLeft",
        mr: "marginRight",
        my: ["marginTop", "marginBottom"],
        mx: ["marginLeft", "marginRight"],
        p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
        pt: "paddingTop",
        pb: "paddingBottom",
        pl: "paddingLeft",
        pr: "paddingRight",
        py: ["paddingTop", "paddingBottom"],
        px: ["paddingLeft", "paddingRight"],
        z: "zIndex",
        fs: "fontSize",
        ff: "fontFamily",
        fw: "fontWeight",
        lh: "lineHeight",
        ta: "textAlign",
      };
      var macros = {
        db: { display: "block" },
        dib: { display: "inline-block" },
        di: { display: "inline" },
        f: { display: "flex" },
        fw: { flexWrap: "wrap" },
        ais: { alignItems: "flex-start" },
        aic: { alignItems: "center" },
        aie: { alignItems: "flex-end" },
        jcs: { justifyContent: "flex-start" },
        jcc: { justifyContent: "center" },
        jce: { justifyContent: "flex-end" },
        jca: { justifyContent: "space-around" },
        jcb: { justifyContent: "space-between" },
        rel: { position: "relative" },
        abs: { position: "absolute" },
        fix: { position: "fixed" },
        top: { top: 0 },
        bottom: { bottom: 0 },
        left: { left: 0 },
        right: { right: 0 },
        cover: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        w: { width: 1 },
        h: { height: 1 },
        tac: { textAlign: "center" },
        tar: { textAlign: "right" },
        taj: { textAlign: "justify" },
        ma: { m: "auto" },
        mxa: { mx: "auto" },
        mya: { my: "auto" },
      };
      module.exports = {
        breakpoints,
        tokens,
        shorthands,
        macros,
      };
    },
  });

  // node_modules/.pnpm/preact@10.5.14/node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f;
  var e = {};
  var c = [];
  var s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function a(n2, l3) {
    for (var u3 in l3) n2[u3] = l3[u3];
    return n2;
  }
  function h(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function v(l3, u3, i3) {
    var t3,
      o3,
      r3,
      f3 = {};
    for (r3 in u3)
      r3 == "key"
        ? (t3 = u3[r3])
        : r3 == "ref"
        ? (o3 = u3[r3])
        : (f3[r3] = u3[r3]);
    if (
      (arguments.length > 2 &&
        (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3),
      typeof l3 == "function" && l3.defaultProps != null)
    )
      for (r3 in l3.defaultProps)
        f3[r3] === void 0 && (f3[r3] = l3.defaultProps[r3]);
    return y(l3, f3, t3, o3, null);
  }
  function y(n2, i3, t3, o3, r3) {
    var f3 = {
      type: n2,
      props: i3,
      key: t3,
      ref: o3,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: r3 == null ? ++u : r3,
    };
    return l.vnode != null && l.vnode(f3), f3;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l3) {
    (this.props = n2), (this.context = l3);
  }
  function k(n2, l3) {
    if (l3 == null) return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if ((u3 = n2.__k[l3]) != null && u3.__e != null) return u3.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l3, u3;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if ((u3 = n2.__k[l3]) != null && u3.__e != null) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    ((!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++) ||
      r !== l.debounceRendering) &&
      ((r = l.debounceRendering) || o)(g);
  }
  function g() {
    for (var n2; (g.__r = t.length); )
      (n2 = t.sort(function (n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      })),
        (t = []),
        n2.some(function (n3) {
          var l3, u3, i3, t3, o3, r3;
          n3.__d &&
            ((o3 = (t3 = (l3 = n3).__v).__e),
            (r3 = l3.__P) &&
              ((u3 = []),
              ((i3 = a({}, t3)).__v = t3.__v + 1),
              j(
                r3,
                t3,
                i3,
                l3.__n,
                r3.ownerSVGElement !== void 0,
                t3.__h != null ? [o3] : null,
                u3,
                o3 == null ? k(t3) : o3,
                t3.__h
              ),
              z(u3, t3),
              t3.__e != o3 && b(t3)));
        });
  }
  function w(n2, l3, u3, i3, t3, o3, r3, f3, s2, a3) {
    var h2,
      v3,
      p2,
      _2,
      b3,
      m3,
      g3,
      w3 = (i3 && i3.__k) || c,
      A2 = w3.length;
    for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
      if (
        (_2 = u3.__k[h2] =
          (_2 = l3[h2]) == null || typeof _2 == "boolean"
            ? null
            : typeof _2 == "string" ||
              typeof _2 == "number" ||
              typeof _2 == "bigint"
            ? y(null, _2, null, null, _2)
            : Array.isArray(_2)
            ? y(d, { children: _2 }, null, null, null)
            : _2.__b > 0
            ? y(_2.type, _2.props, _2.key, null, _2.__v)
            : _2) != null
      ) {
        if (
          ((_2.__ = u3),
          (_2.__b = u3.__b + 1),
          (p2 = w3[h2]) === null ||
            (p2 && _2.key == p2.key && _2.type === p2.type))
        )
          w3[h2] = void 0;
        else
          for (v3 = 0; v3 < A2; v3++) {
            if ((p2 = w3[v3]) && _2.key == p2.key && _2.type === p2.type) {
              w3[v3] = void 0;
              break;
            }
            p2 = null;
          }
        j(n2, _2, (p2 = p2 || e), t3, o3, r3, f3, s2, a3),
          (b3 = _2.__e),
          (v3 = _2.ref) &&
            p2.ref != v3 &&
            (g3 || (g3 = []),
            p2.ref && g3.push(p2.ref, null, _2),
            g3.push(v3, _2.__c || b3, _2)),
          b3 != null
            ? (m3 == null && (m3 = b3),
              typeof _2.type == "function" &&
              _2.__k != null &&
              _2.__k === p2.__k
                ? (_2.__d = s2 = x(_2, s2, n2))
                : (s2 = P(n2, _2, p2, w3, b3, s2)),
              a3 || u3.type !== "option"
                ? typeof u3.type == "function" && (u3.__d = s2)
                : (n2.value = ""))
            : s2 && p2.__e == s2 && s2.parentNode != n2 && (s2 = k(p2));
      }
    for (u3.__e = m3, h2 = A2; h2--; )
      w3[h2] != null &&
        (typeof u3.type == "function" &&
          w3[h2].__e != null &&
          w3[h2].__e == u3.__d &&
          (u3.__d = k(i3, h2 + 1)),
        N(w3[h2], w3[h2]));
    if (g3) for (h2 = 0; h2 < g3.length; h2++) M(g3[h2], g3[++h2], g3[++h2]);
  }
  function x(n2, l3, u3) {
    var i3, t3;
    for (i3 = 0; i3 < n2.__k.length; i3++)
      (t3 = n2.__k[i3]) &&
        ((t3.__ = n2),
        (l3 =
          typeof t3.type == "function"
            ? x(t3, l3, u3)
            : P(u3, t3, t3, n2.__k, t3.__e, l3)));
    return l3;
  }
  function P(n2, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (l3.__d !== void 0) (r3 = l3.__d), (l3.__d = void 0);
    else if (u3 == null || t3 != o3 || t3.parentNode == null)
      n: if (o3 == null || o3.parentNode !== n2)
        n2.appendChild(t3), (r3 = null);
      else {
        for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
          if (f3 == t3) break n;
        n2.insertBefore(t3, o3), (r3 = o3);
      }
    return r3 !== void 0 ? r3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      o3 === "children" ||
        o3 === "key" ||
        o3 in l3 ||
        H(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      (t3 && typeof l3[o3] != "function") ||
        o3 === "children" ||
        o3 === "key" ||
        o3 === "value" ||
        o3 === "checked" ||
        u3[o3] === l3[o3] ||
        H(n2, o3, l3[o3], u3[o3], i3);
  }
  function $(n2, l3, u3) {
    l3[0] === "-"
      ? n2.setProperty(l3, u3)
      : (n2[l3] =
          u3 == null
            ? ""
            : typeof u3 != "number" || s.test(l3)
            ? u3
            : u3 + "px");
  }
  function H(n2, l3, u3, i3, t3) {
    var o3;
    n: if (l3 === "style")
      if (typeof u3 == "string") n2.style.cssText = u3;
      else {
        if ((typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3))
          for (l3 in i3) (u3 && l3 in u3) || $(n2.style, l3, "");
        if (u3)
          for (l3 in u3) (i3 && u3[l3] === i3[l3]) || $(n2.style, l3, u3[l3]);
      }
    else if (l3[0] === "o" && l3[1] === "n")
      (o3 = l3 !== (l3 = l3.replace(/Capture$/, ""))),
        (l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2)),
        n2.l || (n2.l = {}),
        (n2.l[l3 + o3] = u3),
        u3
          ? i3 || n2.addEventListener(l3, o3 ? T : I, o3)
          : n2.removeEventListener(l3, o3 ? T : I, o3);
    else if (l3 !== "dangerouslySetInnerHTML") {
      if (t3) l3 = l3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (
        l3 !== "href" &&
        l3 !== "list" &&
        l3 !== "form" &&
        l3 !== "tabIndex" &&
        l3 !== "download" &&
        l3 in n2
      )
        try {
          n2[l3] = u3 == null ? "" : u3;
          break n;
        } catch (n3) {}
      typeof u3 == "function" ||
        (u3 != null && (u3 !== false || (l3[0] === "a" && l3[1] === "r"))
          ? n2.setAttribute(l3, u3)
          : n2.removeAttribute(l3));
    }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
    var s2,
      h2,
      v3,
      y2,
      p2,
      k3,
      b3,
      m3,
      g3,
      x3,
      A2,
      P2 = u3.type;
    if (u3.constructor !== void 0) return null;
    i3.__h != null &&
      ((c3 = i3.__h), (e3 = u3.__e = i3.__e), (u3.__h = null), (r3 = [e3])),
      (s2 = l.__b) && s2(u3);
    try {
      n: if (typeof P2 == "function") {
        if (
          ((m3 = u3.props),
          (g3 = (s2 = P2.contextType) && t3[s2.__c]),
          (x3 = s2 ? (g3 ? g3.props.value : s2.__) : t3),
          i3.__c
            ? (b3 = (h2 = u3.__c = i3.__c).__ = h2.__E)
            : ("prototype" in P2 && P2.prototype.render
                ? (u3.__c = h2 = new P2(m3, x3))
                : ((u3.__c = h2 = new _(m3, x3)),
                  (h2.constructor = P2),
                  (h2.render = O)),
              g3 && g3.sub(h2),
              (h2.props = m3),
              h2.state || (h2.state = {}),
              (h2.context = x3),
              (h2.__n = t3),
              (v3 = h2.__d = true),
              (h2.__h = [])),
          h2.__s == null && (h2.__s = h2.state),
          P2.getDerivedStateFromProps != null &&
            (h2.__s == h2.state && (h2.__s = a({}, h2.__s)),
            a(h2.__s, P2.getDerivedStateFromProps(m3, h2.__s))),
          (y2 = h2.props),
          (p2 = h2.state),
          v3)
        )
          P2.getDerivedStateFromProps == null &&
            h2.componentWillMount != null &&
            h2.componentWillMount(),
            h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
        else {
          if (
            (P2.getDerivedStateFromProps == null &&
              m3 !== y2 &&
              h2.componentWillReceiveProps != null &&
              h2.componentWillReceiveProps(m3, x3),
            (!h2.__e &&
              h2.shouldComponentUpdate != null &&
              h2.shouldComponentUpdate(m3, h2.__s, x3) === false) ||
              u3.__v === i3.__v)
          ) {
            (h2.props = m3),
              (h2.state = h2.__s),
              u3.__v !== i3.__v && (h2.__d = false),
              (h2.__v = u3),
              (u3.__e = i3.__e),
              (u3.__k = i3.__k),
              u3.__k.forEach(function (n3) {
                n3 && (n3.__ = u3);
              }),
              h2.__h.length && f3.push(h2);
            break n;
          }
          h2.componentWillUpdate != null &&
            h2.componentWillUpdate(m3, h2.__s, x3),
            h2.componentDidUpdate != null &&
              h2.__h.push(function () {
                h2.componentDidUpdate(y2, p2, k3);
              });
        }
        (h2.context = x3),
          (h2.props = m3),
          (h2.state = h2.__s),
          (s2 = l.__r) && s2(u3),
          (h2.__d = false),
          (h2.__v = u3),
          (h2.__P = n2),
          (s2 = h2.render(h2.props, h2.state, h2.context)),
          (h2.state = h2.__s),
          h2.getChildContext != null &&
            (t3 = a(a({}, t3), h2.getChildContext())),
          v3 ||
            h2.getSnapshotBeforeUpdate == null ||
            (k3 = h2.getSnapshotBeforeUpdate(y2, p2)),
          (A2 =
            s2 != null && s2.type === d && s2.key == null
              ? s2.props.children
              : s2),
          w(n2, Array.isArray(A2) ? A2 : [A2], u3, i3, t3, o3, r3, f3, e3, c3),
          (h2.base = u3.__e),
          (u3.__h = null),
          h2.__h.length && f3.push(h2),
          b3 && (h2.__E = h2.__ = null),
          (h2.__e = false);
      } else
        r3 == null && u3.__v === i3.__v
          ? ((u3.__k = i3.__k), (u3.__e = i3.__e))
          : (u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3));
      (s2 = l.diffed) && s2(u3);
    } catch (n3) {
      (u3.__v = null),
        (c3 || r3 != null) &&
          ((u3.__e = e3), (u3.__h = !!c3), (r3[r3.indexOf(e3)] = null)),
        l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2),
      n2.some(function (u4) {
        try {
          (n2 = u4.__h),
            (u4.__h = []),
            n2.some(function (n3) {
              n3.call(u4);
            });
        } catch (n3) {
          l.__e(n3, u4.__v);
        }
      });
  }
  function L(l3, u3, i3, t3, o3, r3, f3, c3) {
    var s2,
      a3,
      v3,
      y2 = i3.props,
      p2 = u3.props,
      d3 = u3.type,
      _2 = 0;
    if ((d3 === "svg" && (o3 = true), r3 != null)) {
      for (; _2 < r3.length; _2++)
        if (
          (s2 = r3[_2]) &&
          (s2 === l3 || (d3 ? s2.localName == d3 : s2.nodeType == 3))
        ) {
          (l3 = s2), (r3[_2] = null);
          break;
        }
    }
    if (l3 == null) {
      if (d3 === null) return document.createTextNode(p2);
      (l3 = o3
        ? document.createElementNS("http://www.w3.org/2000/svg", d3)
        : document.createElement(d3, p2.is && p2)),
        (r3 = null),
        (c3 = false);
    }
    if (d3 === null) y2 === p2 || (c3 && l3.data === p2) || (l3.data = p2);
    else {
      if (
        ((r3 = r3 && n.call(l3.childNodes)),
        (a3 = (y2 = i3.props || e).dangerouslySetInnerHTML),
        (v3 = p2.dangerouslySetInnerHTML),
        !c3)
      ) {
        if (r3 != null)
          for (y2 = {}, _2 = 0; _2 < l3.attributes.length; _2++)
            y2[l3.attributes[_2].name] = l3.attributes[_2].value;
        (v3 || a3) &&
          ((v3 &&
            ((a3 && v3.__html == a3.__html) || v3.__html === l3.innerHTML)) ||
            (l3.innerHTML = (v3 && v3.__html) || ""));
      }
      if ((C(l3, p2, y2, o3, c3), v3)) u3.__k = [];
      else if (
        ((_2 = u3.props.children),
        w(
          l3,
          Array.isArray(_2) ? _2 : [_2],
          u3,
          i3,
          t3,
          o3 && d3 !== "foreignObject",
          r3,
          f3,
          r3 ? r3[0] : i3.__k && k(i3, 0),
          c3
        ),
        r3 != null)
      )
        for (_2 = r3.length; _2--; ) r3[_2] != null && h(r3[_2]);
      c3 ||
        ("value" in p2 &&
          (_2 = p2.value) !== void 0 &&
          (_2 !== l3.value || (d3 === "progress" && !_2)) &&
          H(l3, "value", _2, y2.value, false),
        "checked" in p2 &&
          (_2 = p2.checked) !== void 0 &&
          _2 !== l3.checked &&
          H(l3, "checked", _2, y2.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      typeof n2 == "function" ? n2(u3) : (n2.current = u3);
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, o3;
    if (
      (l.unmount && l.unmount(n2),
      (t3 = n2.ref) &&
        ((t3.current && t3.current !== n2.__e) || M(t3, null, u3)),
      (t3 = n2.__c) != null)
    ) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null;
    }
    if ((t3 = n2.__k))
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && N(t3[o3], u3, typeof n2.type != "function");
    i3 || n2.__e == null || h(n2.__e), (n2.__e = n2.__d = void 0);
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i3, t3) {
    var o3, r3, f3;
    l.__ && l.__(u3, i3),
      (r3 = (o3 = typeof t3 == "function") ? null : (t3 && t3.__k) || i3.__k),
      (f3 = []),
      j(
        i3,
        (u3 = ((!o3 && t3) || i3).__k = v(d, null, [u3])),
        r3 || e,
        e,
        i3.ownerSVGElement !== void 0,
        !o3 && t3
          ? [t3]
          : r3
          ? null
          : i3.firstChild
          ? n.call(i3.childNodes)
          : null,
        f3,
        !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild,
        o3
      ),
      z(f3, u3);
  }
  (n = c.slice),
    (l = {
      __e: function (n2, l3) {
        for (var u3, i3, t3; (l3 = l3.__); )
          if ((u3 = l3.__c) && !u3.__)
            try {
              if (
                ((i3 = u3.constructor) &&
                  i3.getDerivedStateFromError != null &&
                  (u3.setState(i3.getDerivedStateFromError(n2)), (t3 = u3.__d)),
                u3.componentDidCatch != null &&
                  (u3.componentDidCatch(n2), (t3 = u3.__d)),
                t3)
              )
                return (u3.__E = u3);
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      },
    }),
    (u = 0),
    (i = function (n2) {
      return n2 != null && n2.constructor === void 0;
    }),
    (_.prototype.setState = function (n2, l3) {
      var u3;
      (u3 =
        this.__s != null && this.__s !== this.state
          ? this.__s
          : (this.__s = a({}, this.state))),
        typeof n2 == "function" && (n2 = n2(a({}, u3), this.props)),
        n2 && a(u3, n2),
        n2 != null && this.__v && (l3 && this.__h.push(l3), m(this));
    }),
    (_.prototype.forceUpdate = function (n2) {
      this.__v && ((this.__e = true), n2 && this.__h.push(n2), m(this));
    }),
    (_.prototype.render = d),
    (t = []),
    (o =
      typeof Promise == "function"
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (g.__r = 0),
    (f = 0);

  // node_modules/.pnpm/preact@10.5.14/node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var u2;
  var r2;
  var o2 = 0;
  var i2 = [];
  var c2 = l.__b;
  var f2 = l.__r;
  var e2 = l.diffed;
  var a2 = l.__c;
  var v2 = l.unmount;
  function m2(t3, r3) {
    l.__h && l.__h(u2, t3, o2 || r3), (o2 = 0);
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
  }
  function l2(n2) {
    return (o2 = 1), p(w2, n2);
  }
  function p(n2, r3, o3) {
    var i3 = m2(t2++, 2);
    return (
      (i3.t = n2),
      i3.__c ||
        ((i3.__ = [
          o3 ? o3(r3) : w2(void 0, r3),
          function (n3) {
            var t3 = i3.t(i3.__[0], n3);
            i3.__[0] !== t3 && ((i3.__ = [t3, i3.__[1]]), i3.__c.setState({}));
          },
        ]),
        (i3.__c = u2)),
      i3.__
    );
  }
  function d2(n2, u3) {
    var r3 = m2(t2++, 7);
    return (
      k2(r3.__H, u3) && ((r3.__ = n2()), (r3.__H = u3), (r3.__h = n2)), r3.__
    );
  }
  function A(n2, t3) {
    return (
      (o2 = 8),
      d2(function () {
        return n2;
      }, t3)
    );
  }
  function x2() {
    i2.forEach(function (t3) {
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), (t3.__H.__h = []);
        } catch (u3) {
          (t3.__H.__h = []), l.__e(u3, t3.__v);
        }
    }),
      (i2 = []);
  }
  (l.__b = function (n2) {
    (u2 = null), c2 && c2(n2);
  }),
    (l.__r = function (n2) {
      f2 && f2(n2), (t2 = 0);
      var r3 = (u2 = n2.__c).__H;
      r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), (r3.__h = []));
    }),
    (l.diffed = function (t3) {
      e2 && e2(t3);
      var o3 = t3.__c;
      o3 &&
        o3.__H &&
        o3.__H.__h.length &&
        ((i2.push(o3) !== 1 && r2 === l.requestAnimationFrame) ||
          (
            (r2 = l.requestAnimationFrame) ||
            function (n2) {
              var t4,
                u3 = function () {
                  clearTimeout(r3),
                    b2 && cancelAnimationFrame(t4),
                    setTimeout(n2);
                },
                r3 = setTimeout(u3, 100);
              b2 && (t4 = requestAnimationFrame(u3));
            }
          )(x2)),
        (u2 = void 0);
    }),
    (l.__c = function (t3, u3) {
      u3.some(function (t4) {
        try {
          t4.__h.forEach(g2),
            (t4.__h = t4.__h.filter(function (n2) {
              return !n2.__ || j2(n2);
            }));
        } catch (r3) {
          u3.some(function (n2) {
            n2.__h && (n2.__h = []);
          }),
            (u3 = []),
            l.__e(r3, t4.__v);
        }
      }),
        a2 && a2(t3, u3);
    }),
    (l.unmount = function (t3) {
      v2 && v2(t3);
      var u3 = t3.__c;
      if (u3 && u3.__H)
        try {
          u3.__H.__.forEach(g2);
        } catch (t4) {
          l.__e(t4, u3.__v);
        }
    });
  var b2 = typeof requestAnimationFrame == "function";
  function g2(n2) {
    var t3 = u2;
    typeof n2.__c == "function" && n2.__c(), (u2 = t3);
  }
  function j2(n2) {
    var t3 = u2;
    (n2.__c = n2.__()), (u2 = t3);
  }
  function k2(n2, t3) {
    return (
      !n2 ||
      n2.length !== t3.length ||
      t3.some(function (t4, u3) {
        return t4 !== n2[u3];
      })
    );
  }
  function w2(n2, t3) {
    return typeof t3 == "function" ? t3(n2) : t3;
  }

  // index.tsx
  var import_hypostyle = __toModule(require_hypostyle());
  var presets = __toModule(require_presets());
  var LS_MATRIX_KEY = "ass-ski-matrix";
  var LS_FRAMES_KEY = "ass-ski-frames";
  var hypo = (0, import_hypostyle.hypostyle)({
    ...presets,
    tokens: {
      ...presets.tokens,
      color: {
        dark: "#223355",
        gray: "#414856",
        light: "#9FB1D4",
      },
      fontFamily: {
        mono: "monospace",
      },
    },
  });
  var defaultMatrix = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ];
  var initialMatrix = JSON.parse(
    localStorage.getItem(LS_MATRIX_KEY) || JSON.stringify(defaultMatrix)
  );
  var initialFrames = JSON.parse(localStorage.getItem(LS_FRAMES_KEY) || "[]");
  console.log(initialMatrix[0][0]);
  function createMatrix(prev = defaultMatrix, patch = {}) {
    if (patch.row !== void 0) {
      prev[patch.row][patch.col] = patch.val;
    }
    return prev;
  }
  function Box({ as = "div", cx = {}, children, ...rest }) {
    const { props, styles } = hypo.pick(rest);
    return v(
      as,
      {
        ...props,
        className: [
          props.className,
          hypo.css({
            ...styles,
            ...hypo.explode(cx),
          }),
        ]
          .filter(Boolean)
          .map((s2) => s2.trim())
          .join(" "),
      },
      children
    );
  }
  function App() {
    const [matrix, setMatrix] = l2(initialMatrix);
    const [frames, setFrames] = l2(initialFrames);
    const [str, setStr] = l2(JSON.stringify(matrix));
    const resetMatrix = A(() => {
      localStorage.removeItem(LS_MATRIX_KEY);
      setMatrix(defaultMatrix);
      setStr(JSON.stringify(defaultMatrix));
    }, [setMatrix, defaultMatrix]);
    const resetAll = A(() => {
      resetMatrix();
      localStorage.removeItem(LS_FRAMES_KEY);
      setFrames([]);
    }, [resetMatrix, setFrames]);
    console.count();
    return /* @__PURE__ */ v(
      "div",
      {
        className: "p12",
      },
      /* @__PURE__ */ v("h3", null, "Ascii Art Animation Generator"),
      /* @__PURE__ */ v(
        "div",
        {
          className: "f",
        },
        /* @__PURE__ */ v(
          "div",
          {
            className: "matrix f mono fs2",
          },
          matrix.map((row, rowIndex) =>
            /* @__PURE__ */ v(
              Box,
              {
                key: rowIndex,
                f: true,
                cx: {
                  borderBottom: "1px solid",
                  borderColor: "light",
                },
              },
              row.map((col, colIndex) =>
                /* @__PURE__ */ v("div", {
                  key: colIndex,
                  "data-row": rowIndex,
                  "data-col": colIndex,
                  d: "block",
                  contenteditable: "true",
                  tac: true,
                  ff: "mono",
                  lh: "1.0",
                  style: {
                    width: "1em",
                    height: "1em",
                  },
                  cx: (theme) => ({
                    overflow: "hidden",
                    borderRight: "1px solid",
                    borderColor: "light",
                    w: "1em",
                    h: "1em",
                    zIndex: 0,
                    textShadow: `0 0 0 ${theme.tokens.color.dark}`,
                    color: "transparent",
                    cursor: "pointer",
                    "&:-webkit-autofill": {
                      "-webkit-text-fill-color": `${theme.tokens.color.dark}`,
                      "-webkit-box-shadow": "0 0 0px 1000px #fff inset",
                    },
                    "&:hover": {
                      outline: `3px solid ${theme.tokens.color.light}`,
                      zIndex: 1,
                    },
                    "&:focus": {
                      outline: `3px solid ${theme.tokens.color.gray}`,
                      zIndex: 1,
                    },
                  }),
                  textContent: col,
                  onInput: ({ target }) => {
                    const val = target.innerHTML.slice(-1) || " ";
                    const m3 = createMatrix(matrix, {
                      row: rowIndex,
                      col: colIndex,
                      val,
                    });
                    localStorage.setItem(LS_MATRIX_KEY, JSON.stringify(m3));
                    setMatrix(m3);
                    setStr(JSON.stringify(m3));
                  },
                  onBeforeInput: ({ target }) => {
                    target.textContent = col;
                  },
                })
              )
            )
          )
        )
      ),
      /* @__PURE__ */ v("button", null, "Capture"),
      /* @__PURE__ */ v(
        "button",
        {
          onClick: resetMatrix,
        },
        "Reset Current Frame"
      ),
      /* @__PURE__ */ v(
        "button",
        {
          onClick: resetAll,
        },
        "Reset All"
      )
    );
  }
  S(/* @__PURE__ */ v(App, null), document.getElementById("root"));
})();
