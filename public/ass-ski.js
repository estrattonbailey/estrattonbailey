(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = typeof require !== "undefined" ? require : (x) => {
    throw new Error('Dynamic require of "' + x + '" is not supported');
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/.pnpm/hyposcript@1.0.4/node_modules/hyposcript/index.js
  var require_hyposcript = __commonJS({
    "node_modules/.pnpm/hyposcript@1.0.4/node_modules/hyposcript/index.js"(exports, module) {
      var aliases = {
        className: "class",
        htmlFor: "for"
      };
      var voids = [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ];
      function styleObjectToString(style) {
        let s = "";
        for (const p in style) {
          const k = p.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
          s += k + ":" + style[p] + ";";
        }
        return s;
      }
      function h2(t, props, ...children) {
        if (t.children)
          return t.children.join("");
        props = props || {};
        const c = [];
        children = children.length ? children : props.children || [];
        while (children.length) {
          const child = children.shift();
          if (child) {
            child.pop ? children.push(...child) : c.push(child);
          }
        }
        if (t.call)
          return t({ ...props, children: c });
        let attrs = "";
        for (const k in props) {
          if (k === "children")
            continue;
          let v2 = props[k];
          const key = aliases[k] || k;
          if (typeof v2 === "boolean") {
            attrs += `${key}`;
            continue;
          }
          if (k === "style")
            v2 = styleObjectToString(v2);
          attrs += `${key}="${v2}"`;
        }
        const a = attrs ? " " + attrs : "";
        const v = voids.indexOf(t) > -1;
        let childs = "";
        while (c.length) {
          childs += c.shift();
        }
        return v ? "<" + t + a + " />" : "<" + t + a + ">" + childs + "</" + t + ">";
      }
      module.exports = { h: h2, styleObjectToString };
    }
  });

  // ass-ski.tsx
  var import_hyposcript = __toModule(require_hyposcript());
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
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
  ];
  function getStorage() {
    return JSON.parse(localStorage.getItem("ass_ski") || `{ "matrix": ${JSON.stringify(defaultMatrix)}, "frames": ${JSON.stringify([])} }`);
  }
  function renderMatrix(matrix2) {
    document.getElementById("matrix").innerHTML = /* @__PURE__ */ (0, import_hyposcript.h)("div", {
      className: "matrix f mono fs2"
    }, matrix2.map((row, rowIndex) => /* @__PURE__ */ (0, import_hyposcript.h)("div", {
      className: "matrix__row f"
    }, row.map((col, colIndex) => /* @__PURE__ */ (0, import_hyposcript.h)("div", {
      id: `r${rowIndex}c${colIndex}`,
      className: "matrix__cell db tac mono",
      contentEditable: "true"
    }, col)))));
  }
  function renderFrames(frames2) {
    document.getElementById("frames").innerHTML = /* @__PURE__ */ (0, import_hyposcript.h)("div", {
      style: { marginLeft: "-8px", marginRight: "-8px" }
    }, frames2.map((frame) => /* @__PURE__ */ (0, import_hyposcript.h)("div", {
      className: "p2"
    }, /* @__PURE__ */ (0, import_hyposcript.h)("div", {
      className: "frame mono fs6"
    }, frame.map((row, rowIndex) => /* @__PURE__ */ (0, import_hyposcript.h)("div", {
      className: "frame__row f"
    }, row.map((col, colIndex) => /* @__PURE__ */ (0, import_hyposcript.h)("div", {
      id: `r${rowIndex}c${colIndex}`,
      className: "frame__cell db tac mono"
    }, col))))))));
  }
  var { matrix, frames } = getStorage();
  document.getElementById("root").innerHTML = /* @__PURE__ */ (0, import_hyposcript.h)("div", {
    className: "p12"
  }, /* @__PURE__ */ (0, import_hyposcript.h)("h3", null, "Ascii Art Animation Generator"), /* @__PURE__ */ (0, import_hyposcript.h)("div", {
    className: "f",
    id: "matrix"
  }), /* @__PURE__ */ (0, import_hyposcript.h)("button", {
    id: "capture"
  }, "Capture"), /* @__PURE__ */ (0, import_hyposcript.h)("button", {
    id: "resetFrame"
  }, "Reset Current Frame"), /* @__PURE__ */ (0, import_hyposcript.h)("button", {
    id: "resetAll"
  }, "Reset All"), /* @__PURE__ */ (0, import_hyposcript.h)("div", {
    className: "f fw",
    id: "frames"
  }));
  document.getElementById("root").addEventListener("input", (e) => {
    if (!e.target.classList.contains("matrix__cell"))
      return;
    const { textContent: value, id } = e.target;
    const val = value.slice(0, 1);
    const [row, col] = id.split("c").map((s) => s.replace(/[^\d]/g, "")).map((v) => parseInt(v));
    matrix[row][col] = val;
    renderMatrix(matrix);
    const previouslyFocusedElement = document.getElementById(`r${row}c${col}`);
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  });
  document.getElementById("capture").addEventListener("click", (e) => {
    frames.push(matrix);
    renderMatrix(defaultMatrix);
    matrix = defaultMatrix;
    renderFrames(frames);
  });
  document.getElementById("resetFrame").addEventListener("click", (e) => {
    renderMatrix(defaultMatrix);
    matrix = defaultMatrix;
  });
  renderMatrix(matrix);
  renderFrames(frames);
})();
