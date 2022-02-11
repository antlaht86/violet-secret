var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/anttilahtinen/Development/git/test-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KJ72XP56.css";

// app/components/nav.tsx
init_react();
var import_remix2 = __toModule(require_remix());

// app/components/logoipsum-logo-15.svg
var logoipsum_logo_15_default = "/build/_assets/logoipsum-logo-15-34HVFCNL.svg";

// app/components/nav.tsx
function NavList() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("nav", {
    className: "bg-slate-100 border-gray-200 px-2 sm:px-4 py-2.5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ml-10 container flex justify-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/create",
    className: "flex"
  }, /* @__PURE__ */ React.createElement("img", {
    src: logoipsum_logo_15_default,
    alt: "Company Logo"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "ml-3.5"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/create",
    className: "block py-2 pr-4 pl-3 text-violet-500 rounded",
    "aria-current": "page"
  }, "Create secret")))));
}

// route-module:/Users/anttilahtinen/Development/git/test-remix/app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = () => {
  return { title: "Violet secret" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "manifest",
    href: "/site.webmanifest"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(NavList, null), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route-module:/Users/anttilahtinen/Development/git/test-remix/app/routes/read/$readid.tsx
var readid_exports = {};
__export(readid_exports, {
  action: () => action,
  default: () => Read,
  loader: () => loader
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/db/db.ts
init_react();
var import_flat_cache = __toModule(require("flat-cache"));
var cache = import_flat_cache.default.load("cacheId", "../static/");
function getSecret(id) {
  return cache.getKey(id);
}
function setSecret(id, pd, text) {
  cache.setKey(id, { pd, text });
  cache.save();
}
function removeSecret(id) {
  cache.removeKey(id);
}

// app/crypto/index.ts
init_react();
var import_tiny_invariant = __toModule(require("tiny-invariant"));
var import_crypto_js = __toModule(require("crypto-js"));
function encryptText(password, text) {
  return import_crypto_js.default.AES.encrypt(text, password).toString();
}
function decryptText(password, text) {
  const bytes = import_crypto_js.default.AES.decrypt(text, password);
  return bytes.toString(import_crypto_js.default.enc.Utf8);
}
function encryptPassword(password) {
  (0, import_tiny_invariant.default)(process.env.SECRET_KEY, "process.env.SECRET_KEY is required");
  const key512Bits = import_crypto_js.default.PBKDF2(password, process.env.SECRET_KEY, {
    keySize: 512 / 32
  });
  return key512Bits.toString();
}

// app/routes/create.tsx
init_react();
var import_uuid = __toModule(require("uuid"));
var import_react = __toModule(require("react"));
var import_react_use_clipboard = __toModule(require("react-use-clipboard"));
function CustomError({
  data
}) {
  if (data && Array.isArray(data) && data.length > 0) {
    return /* @__PURE__ */ import_react.default.createElement("ul", null, data.map((item) => /* @__PURE__ */ import_react.default.createElement("li", {
      className: "pl-1 mt-1 text-red-500 text-xs italic",
      key: item.id
    }, item.message)));
  } else {
    return /* @__PURE__ */ import_react.default.createElement("ul", null, /* @__PURE__ */ import_react.default.createElement("li", {
      className: "invisible"
    }, "Error space"));
  }
}
var inputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-violet-500  leading-tight focus:outline-none focus:shadow-outline";
var inputErrorStyle = "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-violet-500  leading-tight focus:outline-none focus:shadow-outline";
var labelStyle = "block text-violet-500 text-sm font-bold mb-2";
function getInputStyle(data) {
  if (data && Array.isArray(data) && data.length > 0) {
    console.log(data);
    return inputErrorStyle;
  } else {
    return inputStyle;
  }
}

// route-module:/Users/anttilahtinen/Development/git/test-remix/app/routes/read/$readid.tsx
var import_react2 = __toModule(require("react"));
var loader = ({ request }) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(request.headers.get("user-agent"));
  return isMobile;
};
var action = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get("password");
  const readId = formData.get("readId");
  const action3 = formData.get("_action");
  if (action3 === "ready") {
    removeSecret(readId);
    return (0, import_remix4.redirect)("/ready");
  }
  const res = getSecret(String(readId));
  console.log("\u{1F921} res: ", res);
  const errors = {
    password: []
  };
  if (!password)
    errors.password.push({ id: "required", message: "Is required" });
  if (!res || encryptPassword(password) !== res.pd)
    errors.password.push({
      id: "notMatch",
      message: "password does not match or there is no secret for you"
    });
  for (const [_, value] of Object.entries(errors)) {
    if (value.length > 0)
      return errors;
  }
  return decryptText(password, res.text);
};
function Read() {
  let isTabletOrMobile = (0, import_remix4.useLoaderData)();
  const data = (0, import_remix4.useActionData)();
  const params = (0, import_remix4.useParams)();
  const inputRef = import_react2.default.useRef(null);
  import_react2.default.useEffect(() => {
    var _a;
    (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.focus();
  }, []);
  if (typeof data === "string") {
    return /* @__PURE__ */ import_react2.default.createElement("div", {
      className: `container mx-auto ${isTabletOrMobile ? "w-11/12" : "w-1/2"} flex flex-col items-center mt-14`
    }, /* @__PURE__ */ import_react2.default.createElement("h2", {
      className: "mb-3 w-full text-left text-violet-700"
    }, "Your Secret:"), /* @__PURE__ */ import_react2.default.createElement("textarea", {
      disabled: true,
      rows: 10,
      name: "text",
      className: inputStyle,
      defaultValue: data
    }), /* @__PURE__ */ import_react2.default.createElement(import_remix4.Form, {
      replace: true,
      method: "post",
      className: "flex flex-col item-center justify-self-center"
    }, /* @__PURE__ */ import_react2.default.createElement("input", {
      defaultValue: params.readid,
      name: "readId",
      type: "hidden"
    }), /* @__PURE__ */ import_react2.default.createElement("input", {
      defaultValue: "ready",
      name: "_action",
      type: "hidden"
    }), /* @__PURE__ */ import_react2.default.createElement("button", {
      "aria-label": "delete",
      className: "mt-14 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 border border-violet-700 rounded",
      type: "submit"
    }, "Delete this secret")));
  }
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "container mx-auto w-full flex flex-col justify-center items-center mt-14"
  }, /* @__PURE__ */ import_react2.default.createElement(import_remix4.Form, {
    replace: true,
    method: "post",
    className: " w-full flex flex-col justify-center items-center mt-14"
  }, /* @__PURE__ */ import_react2.default.createElement("input", {
    defaultValue: params.readid,
    name: "readId",
    type: "hidden"
  }), /* @__PURE__ */ import_react2.default.createElement("input", {
    defaultValue: "read",
    name: "_action",
    type: "hidden"
  }), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: `m-5 ${isTabletOrMobile ? "w-11/12" : "w-1/2"}`
  }, /* @__PURE__ */ import_react2.default.createElement("label", {
    htmlFor: "password",
    className: labelStyle
  }, "Password"), /* @__PURE__ */ import_react2.default.createElement("input", {
    ref: inputRef,
    className: getInputStyle(typeof data === "string" ? [] : data == null ? void 0 : data.password),
    name: "password",
    type: "password",
    autoComplete: "off"
  }), /* @__PURE__ */ import_react2.default.createElement(CustomError, {
    data: typeof data === "string" ? [] : data == null ? void 0 : data.password
  })), /* @__PURE__ */ import_react2.default.createElement("button", {
    type: "submit",
    className: "bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 border border-violet-700 rounded"
  }, "Read")));
}

// route-module:/Users/anttilahtinen/Development/git/test-remix/app/routes/success.tsx
var success_exports = {};
__export(success_exports, {
  default: () => Success
});
init_react();
function Success() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto w-1/2 flex flex-col items-center mt-14"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: `text-violet-400 text-center`
  }, "Your secret has been erased from the database!"));
}

// route-module:/Users/anttilahtinen/Development/git/test-remix/app/routes/create.tsx
var create_exports = {};
__export(create_exports, {
  CustomError: () => CustomError2,
  action: () => action2,
  default: () => Create,
  getInputStyle: () => getInputStyle2,
  inputErrorStyle: () => inputErrorStyle2,
  inputStyle: () => inputStyle2,
  labelStyle: () => labelStyle2,
  loader: () => loader2
});
init_react();
var import_remix5 = __toModule(require_remix());
var import_uuid2 = __toModule(require("uuid"));
var import_react3 = __toModule(require("react"));
var import_react_use_clipboard2 = __toModule(require("react-use-clipboard"));
var MAX_LENGTH = 32;
var MIN_LENGTH = 5;
var loader2 = ({ request }) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(request.headers.get("user-agent"));
  return {
    baseUrl: process.env.BASE_URL ?? "http://192.168.1.154:3000",
    isMobile
  };
};
var action2 = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get("password");
  const text = formData.get("text");
  const errors = {
    password: [],
    text: []
  };
  if (!password) {
    errors.password.push({ id: "required", message: "Is required" });
  } else {
    if ((password == null ? void 0 : password.length) < MIN_LENGTH) {
      errors.password.push({
        id: "minLength",
        message: "password is too short"
      });
    } else if ((password == null ? void 0 : password.length) > MAX_LENGTH) {
      errors.password.push({
        id: "maxLength",
        message: "password is too long"
      });
    }
  }
  if (!text)
    errors.text.push({ id: "required", message: "Is required" });
  for (const [_, value] of Object.entries(errors)) {
    if (value.length > 0)
      return errors;
  }
  const readId = (0, import_uuid2.v4)();
  setSecret(readId, encryptPassword(password), encryptText(password, text));
  return (0, import_remix5.redirect)(`/create/?id=${readId}`);
};
function Create() {
  let loaderData = (0, import_remix5.useLoaderData)();
  const errors = (0, import_remix5.useActionData)();
  const isTabletOrMobile = loaderData.isMobile;
  let [searchParams] = (0, import_remix5.useSearchParams)();
  let id = searchParams.getAll("id");
  const [isCopied, setCopied] = (0, import_react_use_clipboard2.default)(`${loaderData.baseUrl}/read/${id}`, {
    successDuration: 1e3
  });
  const inputRef = import_react3.default.useRef(null);
  import_react3.default.useEffect(() => {
    var _a;
    (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.focus();
  }, []);
  if (id[0]) {
    return /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "container mx-auto"
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "flex flex-col justify-center items-center mt-14"
    }, /* @__PURE__ */ import_react3.default.createElement("p", {
      className: `${loaderData.isMobile ? "text-center" : "text-left"} text-violet-400`
    }, "Your secret url is:"), /* @__PURE__ */ import_react3.default.createElement("p", {
      onClick: setCopied,
      className: `cursor-pointer ${loaderData.isMobile ? "text-center" : "text-left"} ${isCopied ? "text-violet-700" : "text-violet-400"}`
    }, `${loaderData.baseUrl}/read/${id}`), /* @__PURE__ */ import_react3.default.createElement("button", {
      onClick: setCopied,
      className: "flex mt-5 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 border border-violet-700 rounded"
    }, /* @__PURE__ */ import_react3.default.createElement("img", {
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACYElEQVRIia1US2gTURQ9LzMpJoZQo5A0XfpfqOjGrRuX4kbdSFWsVitoW0kXIpS68kOtbUMag/WDCC50oSgKuhJ3gihSwSKumiarLiQpUsm7x0WbMW/MTCfFC4/LzJs5n/vufQoB48CRrgFlqQxFoAU3Xj15NB7kP+W3efDosauWCvULsSa6NoZtO/eAAKY/fkC18hOk/NJaj7x99nQoEMGhru7Dtm1lhUxSBEJi7779sOwwCIJsXMDvxUW8f/MSIgQpAFHSWp999/r5izqm3Uhgh+3slUuDyS2bNgIAevoyWKhWEG9fB5AAlxMBgqhWK9iQSCA/eh1KKcx8/5EeHBrOA2hOANIBB4Dek8cxOXUfn+fnISQoAhFCKKAQ6xPtONd9AkopKKWwfetmkKrTEG3gu+q3e9cO5G5eQ6VSWaqnUk4OhULGc32RJkrINOCmANra2hCPxx1AP/AVCbwiHA4jFosZ4F6LaNFBMxIv9Uqpf+psOvAhAADbthGNRr3Bm4g0HfjC/yWJRCJNwevZ+N40YFKc6c9grlQGCac1heIMlgiRTiVxLzfmELgxfAkKYyO+brTWqNVqDnizQ/Z30JdBsVT2VE8K0qkUHuQnGtrUFOE7aIVxfweNwrTWK5fITX/6wkUUS+Xm6kFQiHRHCo/v3oZlWUvgvgSuuDMxGsgBsMozOHV+AMW5sqG+syOFh4WcJ5H/Gbh2p7K3Ajvwwmh50FqNwHdR0PC/Tf8DgbsOBoEIy1+/zawa+tOXaYCYbXxntqnWvZnLw5MA00Iafe9MswjI5QzzG5CzIHoaIf8AaqV5tK6JB74AAAAASUVORK5CYII="
    }), /* @__PURE__ */ import_react3.default.createElement("span", null, "Copy link"))));
  }
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ import_react3.default.createElement(import_remix5.Form, {
    replace: true,
    className: "flex flex-col justify-center items-center mt-14",
    method: "post"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: `m-5 ${isTabletOrMobile ? "w-11/12" : "w-1/2"}`
  }, /* @__PURE__ */ import_react3.default.createElement("label", {
    htmlFor: "password",
    className: labelStyle2
  }, "Password"), /* @__PURE__ */ import_react3.default.createElement("input", {
    ref: inputRef,
    maxLength: MAX_LENGTH,
    className: getInputStyle2(errors == null ? void 0 : errors.password),
    minLength: MIN_LENGTH,
    name: "password",
    type: "text",
    autoComplete: "off"
  }), /* @__PURE__ */ import_react3.default.createElement(CustomError2, {
    data: errors == null ? void 0 : errors.password
  })), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: `m-5 ${isTabletOrMobile ? "w-11/12" : "w-1/2"}`
  }, /* @__PURE__ */ import_react3.default.createElement("label", {
    className: labelStyle2,
    htmlFor: "text"
  }, "Secret text"), /* @__PURE__ */ import_react3.default.createElement("textarea", {
    rows: 10,
    name: "text",
    className: getInputStyle2(errors == null ? void 0 : errors.text)
  }), /* @__PURE__ */ import_react3.default.createElement(CustomError2, {
    data: errors == null ? void 0 : errors.text
  })), /* @__PURE__ */ import_react3.default.createElement("button", {
    className: "bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 border border-violet-700 rounded",
    type: "submit"
  }, "Create")));
}
function CustomError2({
  data
}) {
  if (data && Array.isArray(data) && data.length > 0) {
    return /* @__PURE__ */ import_react3.default.createElement("ul", null, data.map((item) => /* @__PURE__ */ import_react3.default.createElement("li", {
      className: "pl-1 mt-1 text-red-500 text-xs italic",
      key: item.id
    }, item.message)));
  } else {
    return /* @__PURE__ */ import_react3.default.createElement("ul", null, /* @__PURE__ */ import_react3.default.createElement("li", {
      className: "invisible"
    }, "Error space"));
  }
}
var inputStyle2 = "shadow appearance-none border rounded w-full py-2 px-3 text-violet-500  leading-tight focus:outline-none focus:shadow-outline";
var inputErrorStyle2 = "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-violet-500  leading-tight focus:outline-none focus:shadow-outline";
var labelStyle2 = "block text-violet-500 text-sm font-bold mb-2";
function getInputStyle2(data) {
  if (data && Array.isArray(data) && data.length > 0) {
    console.log(data);
    return inputErrorStyle2;
  } else {
    return inputStyle2;
  }
}

// route-module:/Users/anttilahtinen/Development/git/test-remix/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  loader: () => loader3
});
init_react();
var import_remix6 = __toModule(require_remix());
function loader3() {
  return [
    { id: 1, name: "Jack" },
    { id: 2, name: "Mary" },
    { id: 3, name: "Diana" },
    { id: 4, name: "George" }
  ];
}
function About() {
  const data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "About"), /* @__PURE__ */ React.createElement("ul", null, data.map((item) => /* @__PURE__ */ React.createElement("li", {
    key: item.id
  }, item.name))));
}

// route-module:/Users/anttilahtinen/Development/git/test-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader4
});
init_react();
var import_remix7 = __toModule(require_remix());
var loader4 = async () => {
  return (0, import_remix7.redirect)("/create");
};

// route-module:/Users/anttilahtinen/Development/git/test-remix/app/routes/ready.tsx
var ready_exports = {};
__export(ready_exports, {
  default: () => Ready
});
init_react();
var import_react4 = __toModule(require("react"));
var import_react_router_dom = __toModule(require("react-router-dom"));
function Ready() {
  let navigate = (0, import_react_router_dom.useNavigate)();
  import_react4.default.useEffect(() => {
    navigate("../success");
  }, []);
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    style: { visibility: "hidden" }
  }, "moi");
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/read/$readid": {
    id: "routes/read/$readid",
    parentId: "root",
    path: "read/:readid",
    index: void 0,
    caseSensitive: void 0,
    module: readid_exports
  },
  "routes/success": {
    id: "routes/success",
    parentId: "root",
    path: "success",
    index: void 0,
    caseSensitive: void 0,
    module: success_exports
  },
  "routes/create": {
    id: "routes/create",
    parentId: "root",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/ready": {
    id: "routes/ready",
    parentId: "root",
    path: "ready",
    index: void 0,
    caseSensitive: void 0,
    module: ready_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbnR0aWxhaHRpbmVuL0RldmVsb3BtZW50L2dpdC90ZXN0LXJlbWl4L2FwcC9yb290LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9uYXYudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdGVzdC1yZW1peC9hcHAvcm91dGVzL3JlYWQvJHJlYWRpZC50c3giLCAiLi4vLi4vYXBwL2RiL2RiLnRzIiwgIi4uLy4uL2FwcC9jcnlwdG8vaW5kZXgudHMiLCAiLi4vLi4vYXBwL3JvdXRlcy9jcmVhdGUudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdGVzdC1yZW1peC9hcHAvcm91dGVzL3N1Y2Nlc3MudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdGVzdC1yZW1peC9hcHAvcm91dGVzL2NyZWF0ZS50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbnR0aWxhaHRpbmVuL0RldmVsb3BtZW50L2dpdC90ZXN0LXJlbWl4L2FwcC9yb3V0ZXMvYWJvdXQudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdGVzdC1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Rlc3QtcmVtaXgvYXBwL3JvdXRlcy9yZWFkeS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9hbnR0aWxhaHRpbmVuL0RldmVsb3BtZW50L2dpdC90ZXN0LXJlbWl4L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9hbnR0aWxhaHRpbmVuL0RldmVsb3BtZW50L2dpdC90ZXN0LXJlbWl4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdGVzdC1yZW1peC9hcHAvcm91dGVzL3JlYWQvJHJlYWRpZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Rlc3QtcmVtaXgvYXBwL3JvdXRlcy9zdWNjZXNzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdGVzdC1yZW1peC9hcHAvcm91dGVzL2NyZWF0ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Rlc3QtcmVtaXgvYXBwL3JvdXRlcy9hYm91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Rlc3QtcmVtaXgvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Rlc3QtcmVtaXgvYXBwL3JvdXRlcy9yZWFkeS50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL3JlYWQvJHJlYWRpZFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JlYWQvJHJlYWRpZFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInJlYWQvOnJlYWRpZFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL3N1Y2Nlc3NcIjoge1xuICAgIGlkOiBcInJvdXRlcy9zdWNjZXNzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwic3VjY2Vzc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2NyZWF0ZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2NyZWF0ZVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImNyZWF0ZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL2Fib3V0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWJvdXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJhYm91dFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9yZWFkeVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JlYWR5XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicmVhZHlcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNlxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IE5hdkxpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJWaW9sZXQgc2VjcmV0XCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgc2l6ZXM9XCIxODB4MTgwXCJcbiAgICAgICAgICBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24tMTZ4MTYucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIj48L2xpbms+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxOYXZMaXN0IC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ29pcHN1bS1sb2dvLTE1LnN2Z1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TGlzdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS0xMDAgYm9yZGVyLWdyYXktMjAwIHB4LTIgc206cHgtNCBweS0yLjVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xMCBjb250YWluZXIgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvY3JlYXRlXCIgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17TG9nb30gYWx0PVwiQ29tcGFueSBMb2dvXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTMuNVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvY3JlYXRlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBwci00IHBsLTMgdGV4dC12aW9sZXQtNTAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ3JlYXRlIHNlY3JldFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEFjdGlvbkZ1bmN0aW9uLFxuICBGb3JtLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVBhcmFtcyxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRTZWNyZXQsIHJlbW92ZVNlY3JldCB9IGZyb20gXCJ+L2RiL2RiXCI7XG5pbXBvcnQgeyBkZWNyeXB0VGV4dCwgZW5jcnlwdFBhc3N3b3JkIH0gZnJvbSBcIn4vY3J5cHRvXCI7XG5pbXBvcnQgeyBDdXN0b21FcnJvciwgZ2V0SW5wdXRTdHlsZSwgaW5wdXRTdHlsZSwgbGFiZWxTdHlsZSB9IGZyb20gXCIuLi9jcmVhdGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGlzTW9iaWxlID1cbiAgICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwidXNlci1hZ2VudFwiKSFcbiAgICApO1xuXG4gIHJldHVybiBpc01vYmlsZTtcbn07XG5cbnR5cGUgSUFjdGlvblR5cGVzID0gXCJyZWFkXCIgfCBcInJlYWR5XCI7XG50eXBlIEVycm9yc0tleXMgPSBrZXlvZiB7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59O1xuXG50eXBlIElHZXRIc2V0QWxsID0ge1xuICBwZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59O1xuXG50eXBlIElDdXN0b21FcnJvciA9IFJlY29yZDxFcnJvcnNLZXlzLCB7IGlkOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9W10+O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKTtcbiAgY29uc3QgcmVhZElkID0gZm9ybURhdGEuZ2V0KFwicmVhZElkXCIpO1xuICBjb25zdCBhY3Rpb24gPSBmb3JtRGF0YS5nZXQoXCJfYWN0aW9uXCIpIGFzIElBY3Rpb25UeXBlcztcblxuICBpZiAoYWN0aW9uID09PSBcInJlYWR5XCIpIHtcbiAgICByZW1vdmVTZWNyZXQocmVhZElkIGFzIHN0cmluZyk7XG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL3JlYWR5XCIpO1xuICB9XG5cbiAgY29uc3QgcmVzID0gZ2V0U2VjcmV0KFN0cmluZyhyZWFkSWQpKSBhcyB1bmtub3duIGFzIElHZXRIc2V0QWxsO1xuICBjb25zb2xlLmxvZyhcIlx1RDgzRVx1REQyMSByZXM6IFwiLCByZXMpO1xuXG4gIGNvbnN0IGVycm9yczogSUN1c3RvbUVycm9yID0ge1xuICAgIHBhc3N3b3JkOiBbXSxcbiAgfTtcblxuICBpZiAoIXBhc3N3b3JkKVxuICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKHsgaWQ6IFwicmVxdWlyZWRcIiwgbWVzc2FnZTogXCJJcyByZXF1aXJlZFwiIH0pO1xuXG4gIGlmICghcmVzIHx8IGVuY3J5cHRQYXNzd29yZChwYXNzd29yZCBhcyBzdHJpbmcpICE9PSByZXMucGQpXG4gICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goe1xuICAgICAgaWQ6IFwibm90TWF0Y2hcIixcbiAgICAgIG1lc3NhZ2U6IFwicGFzc3dvcmQgZG9lcyBub3QgbWF0Y2ggb3IgdGhlcmUgaXMgbm8gc2VjcmV0IGZvciB5b3VcIixcbiAgICB9KTtcblxuICBmb3IgKGNvbnN0IFtfLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZXJyb3JzKSkge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgcmV0dXJuIGRlY3J5cHRUZXh0KHBhc3N3b3JkIGFzIHN0cmluZywgcmVzLnRleHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVhZCgpIHtcbiAgbGV0IGlzVGFibGV0T3JNb2JpbGUgPSB1c2VMb2FkZXJEYXRhPGJvb2xlYW4+KCk7XG5cbiAgY29uc3QgZGF0YSA9IHVzZUFjdGlvbkRhdGE8c3RyaW5nIHwgSUN1c3RvbUVycm9yPigpO1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbnB1dFJlZj8uY3VycmVudD8uZm9jdXMoKTtcbiAgfSwgW10pO1xuXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGNvbnRhaW5lciBteC1hdXRvICR7XG4gICAgICAgICAgaXNUYWJsZXRPck1vYmlsZSA/IFwidy0xMS8xMlwiIDogXCJ3LTEvMlwiXG4gICAgICAgIH0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXQtMTRgfVxuICAgICAgPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMyB3LWZ1bGwgdGV4dC1sZWZ0IHRleHQtdmlvbGV0LTcwMFwiPllvdXIgU2VjcmV0OjwvaDI+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgbmFtZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRTdHlsZX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGF9XG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIHJlcGxhY2VcbiAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW0tY2VudGVyIGp1c3RpZnktc2VsZi1jZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17cGFyYW1zLnJlYWRpZH0gbmFtZT1cInJlYWRJZFwiIHR5cGU9XCJoaWRkZW5cIiAvPlxuICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e1wicmVhZHlcIn0gbmFtZT1cIl9hY3Rpb25cIiB0eXBlPVwiaGlkZGVuXCIgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiZGVsZXRlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTE0IGJnLXZpb2xldC01MDAgaG92ZXI6YmctdmlvbGV0LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci12aW9sZXQtNzAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGVsZXRlIHRoaXMgc2VjcmV0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTE0XCI+XG4gICAgICA8Rm9ybVxuICAgICAgICByZXBsYWNlXG4gICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICBjbGFzc05hbWU9XCIgdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTE0XCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17cGFyYW1zLnJlYWRpZH0gbmFtZT1cInJlYWRJZFwiIHR5cGU9XCJoaWRkZW5cIiAvPlxuICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXtcInJlYWRcIn0gbmFtZT1cIl9hY3Rpb25cIiB0eXBlPVwiaGlkZGVuXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtLTUgJHtpc1RhYmxldE9yTW9iaWxlID8gXCJ3LTExLzEyXCIgOiBcInctMS8yXCJ9YH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17bGFiZWxTdHlsZX0+XG4gICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtnZXRJbnB1dFN0eWxlKFxuICAgICAgICAgICAgICB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiA/IFtdIDogZGF0YT8ucGFzc3dvcmRcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q3VzdG9tRXJyb3IgZGF0YT17dHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgPyBbXSA6IGRhdGE/LnBhc3N3b3JkfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctdmlvbGV0LTUwMCBob3ZlcjpiZy12aW9sZXQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXZpb2xldC03MDAgcm91bmRlZFwiXG4gICAgICAgID5cbiAgICAgICAgICBSZWFkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBmbGF0Q2FjaGUgZnJvbSBcImZsYXQtY2FjaGVcIjtcbmltcG9ydCBvcyBmcm9tIFwib3NcIjtcbmNvbnN0IGNhY2hlID0gZmxhdENhY2hlLmxvYWQoXCJjYWNoZUlkXCIsIFwiLi4vc3RhdGljL1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlY3JldChpZDogc3RyaW5nKTogeyBwZDogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfSB8IG51bGwge1xuICByZXR1cm4gY2FjaGUuZ2V0S2V5KGlkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlY3JldChpZDogc3RyaW5nLCBwZDogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpIHtcbiAgY2FjaGUuc2V0S2V5KGlkLCB7IHBkLCB0ZXh0IH0pO1xuICBjYWNoZS5zYXZlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTZWNyZXQoaWQ6IHN0cmluZykge1xuICBjYWNoZS5yZW1vdmVLZXkoaWQpO1xufVxuIiwgImltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5pbXBvcnQgQ3J5cHRvSlMgZnJvbSBcImNyeXB0by1qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5jcnlwdFRleHQocGFzc3dvcmQ6IHN0cmluZywgdGV4dDogc3RyaW5nKSB7XG4gIHJldHVybiBDcnlwdG9KUy5BRVMuZW5jcnlwdCh0ZXh0LCBwYXNzd29yZCkudG9TdHJpbmcoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY3J5cHRUZXh0KHBhc3N3b3JkOiBzdHJpbmcsIHRleHQ6IHN0cmluZykge1xuICBjb25zdCBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHRleHQsIHBhc3N3b3JkKTtcbiAgcmV0dXJuIGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY3J5cHRQYXNzd29yZChwYXNzd29yZDogc3RyaW5nKSB7XG4gIGludmFyaWFudChwcm9jZXNzLmVudi5TRUNSRVRfS0VZLCBcInByb2Nlc3MuZW52LlNFQ1JFVF9LRVkgaXMgcmVxdWlyZWRcIik7XG4gIGNvbnN0IGtleTUxMkJpdHMgPSBDcnlwdG9KUy5QQktERjIocGFzc3dvcmQsIHByb2Nlc3MuZW52LlNFQ1JFVF9LRVksIHtcbiAgICBrZXlTaXplOiA1MTIgLyAzMixcbiAgfSk7XG4gIHJldHVybiBrZXk1MTJCaXRzLnRvU3RyaW5nKCk7XG59XG4iLCAiaW1wb3J0IHtcbiAgRm9ybSxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VTZWFyY2hQYXJhbXMsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgc2V0U2VjcmV0IH0gZnJvbSBcIi4uL2RiL2RiXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgU2VjcmV0Rm9ybURhdGEgfSBmcm9tIFwifi90eXBlc1wiO1xuaW1wb3J0IHsgZW5jcnlwdFBhc3N3b3JkLCBlbmNyeXB0VGV4dCB9IGZyb20gXCJ+L2NyeXB0b1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUNsaXBib2FyZCBmcm9tIFwicmVhY3QtdXNlLWNsaXBib2FyZFwiO1xuXG50eXBlIEVycm9yc0tleXMgPSBrZXlvZiBTZWNyZXRGb3JtRGF0YTtcbnR5cGUgQ3VzdG9tRXJyb3IgPSBSZWNvcmQ8RXJyb3JzS2V5cywgeyBpZDogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfVtdPjtcblxuY29uc3QgTUFYX0xFTkdUSCA9IDMyO1xuY29uc3QgTUlOX0xFTkdUSCA9IDU7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBpc01vYmlsZSA9XG4gICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmdldChcInVzZXItYWdlbnRcIikhXG4gICAgKTtcblxuICByZXR1cm4ge1xuICAgIGJhc2VVcmw6IHByb2Nlc3MuZW52LkJBU0VfVVJMID8/IFwiaHR0cDovLzE5Mi4xNjguMS4xNTQ6MzAwMFwiLFxuICAgIGlzTW9iaWxlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIikgYXMgc3RyaW5nIHwgbnVsbDtcbiAgY29uc3QgdGV4dCA9IGZvcm1EYXRhLmdldChcInRleHRcIikgYXMgc3RyaW5nIHwgbnVsbDtcblxuICBjb25zdCBlcnJvcnM6IEN1c3RvbUVycm9yID0ge1xuICAgIHBhc3N3b3JkOiBbXSxcbiAgICB0ZXh0OiBbXSxcbiAgfTtcblxuICBpZiAoIXBhc3N3b3JkKSB7XG4gICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goeyBpZDogXCJyZXF1aXJlZFwiLCBtZXNzYWdlOiBcIklzIHJlcXVpcmVkXCIgfSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhc3N3b3JkPy5sZW5ndGggPCBNSU5fTEVOR1RIKSB7XG4gICAgICBlcnJvcnMucGFzc3dvcmQucHVzaCh7XG4gICAgICAgIGlkOiBcIm1pbkxlbmd0aFwiLFxuICAgICAgICBtZXNzYWdlOiBcInBhc3N3b3JkIGlzIHRvbyBzaG9ydFwiLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwYXNzd29yZD8ubGVuZ3RoID4gTUFYX0xFTkdUSCkge1xuICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goe1xuICAgICAgICBpZDogXCJtYXhMZW5ndGhcIixcbiAgICAgICAgbWVzc2FnZTogXCJwYXNzd29yZCBpcyB0b28gbG9uZ1wiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGlmICghdGV4dCkgZXJyb3JzLnRleHQucHVzaCh7IGlkOiBcInJlcXVpcmVkXCIsIG1lc3NhZ2U6IFwiSXMgcmVxdWlyZWRcIiB9KTtcblxuICBmb3IgKGNvbnN0IFtfLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZXJyb3JzKSkge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgY29uc3QgcmVhZElkID0gdXVpZHY0KCk7XG5cbiAgc2V0U2VjcmV0KFxuICAgIHJlYWRJZCxcbiAgICBlbmNyeXB0UGFzc3dvcmQocGFzc3dvcmQgYXMgc3RyaW5nKSxcbiAgICBlbmNyeXB0VGV4dChwYXNzd29yZCEsIHRleHQhKVxuICApO1xuXG4gIHJldHVybiByZWRpcmVjdChgL2NyZWF0ZS8/aWQ9JHtyZWFkSWR9YCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGUoKSB7XG4gIGxldCBsb2FkZXJEYXRhID0gdXNlTG9hZGVyRGF0YTx7IGJhc2VVcmw6IHN0cmluZzsgaXNNb2JpbGU6IGJvb2xlYW4gfT4oKTtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YTxDdXN0b21FcnJvcj4oKTtcbiAgY29uc3QgaXNUYWJsZXRPck1vYmlsZSA9IGxvYWRlckRhdGEuaXNNb2JpbGU7XG4gIGxldCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBsZXQgaWQgPSBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwiaWRcIik7XG5cbiAgY29uc3QgW2lzQ29waWVkLCBzZXRDb3BpZWRdID0gdXNlQ2xpcGJvYXJkKFxuICAgIGAke2xvYWRlckRhdGEuYmFzZVVybH0vcmVhZC8ke2lkfWAsXG4gICAge1xuICAgICAgc3VjY2Vzc0R1cmF0aW9uOiAxMDAwLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlucHV0UmVmPy5jdXJyZW50Py5mb2N1cygpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGlkWzBdKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC0xNFwiPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICBsb2FkZXJEYXRhLmlzTW9iaWxlID8gXCJ0ZXh0LWNlbnRlclwiIDogXCJ0ZXh0LWxlZnRcIlxuICAgICAgICAgICAgfSB0ZXh0LXZpb2xldC00MDBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFlvdXIgc2VjcmV0IHVybCBpczpcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NldENvcGllZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgIGxvYWRlckRhdGEuaXNNb2JpbGUgPyBcInRleHQtY2VudGVyXCIgOiBcInRleHQtbGVmdFwiXG4gICAgICAgICAgICB9ICR7aXNDb3BpZWQgPyBcInRleHQtdmlvbGV0LTcwMFwiIDogXCJ0ZXh0LXZpb2xldC00MDBcIn1gfVxuICAgICAgICAgID57YCR7bG9hZGVyRGF0YS5iYXNlVXJsfS9yZWFkLyR7aWR9YH08L3A+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17c2V0Q29waWVkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtdC01IGJnLXZpb2xldC01MDAgaG92ZXI6YmctdmlvbGV0LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci12aW9sZXQtNzAwIHJvdW5kZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFZQ0FZQUFBRGdkejM0QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQ1lFbEVRVlJJaWExVVMyZ1RVUlE5THpNcEpvWlFvNUEwWGZwZnFPakdyUnVYNGtiZFNGV3NWaXRvVzBrWElwUzY4a090YlVNYWcvV0RDQzUwb1NnS3VoSjNnaWhTd1NLdW1pYXJMaVFwVXNtN3gwV2JNVy9NVENmRkM0L0x6SnM1bi92dWZRb0I0OENScmdGbHFReEZvQVUzWGoxNU5CN2tQK1czZWZEb3NhdVdDdlVMc1NhNk5vWnRPL2VBQUtZL2ZrQzE4aE9rL05KYWo3eDk5blFvRU1HaHJ1N0R0bTFsaFV4U0JFSmk3Nzc5c093d0NJSnNYTUR2eFVXOGYvTVNJZ1FwQUZIU1dwOTk5L3I1aXpxbTNVaGdoKzNzbFV1RHlTMmJOZ0lBZXZveVdLaFdFRzlmQjVBQWx4TUJncWhXSzlpUVNDQS9laDFLS2N4OC81RWVIQnJPQTJoT0FOSUJCNERlazhjeE9YVWZuK2ZuSVNRb0FoRkNLS0FRNnhQdE9OZDlBa29wS0tXd2ZldG1rS3JURUczZ3UrcTNlOWNPNUc1ZVE2VlNXYXFuVWs0T2hVTEdjMzJSSmtySU5PQ21BTnJhMmhDUHh4MUFQL0FWQ2J3aUhBNGpGb3NaNEY2TGFORkJNeEl2OVVxcGYrcHNPdkFoQUFEYnRoR05ScjNCbTRnMEhmakMveVdKUkNKTndldlorTjQwWUZLYzZjOWdybFFHQ2FjMWhlSU1sZ2lSVGlWeEx6Zm1FTGd4ZkFrS1l5TyticlRXcU5WcURuaXpRL1ozMEpkQnNWVDJWRThLMHFrVUh1UW5HdHJVRk9FN2FJVnhmd2VOd3JUV0s1ZklUWC82d2tVVVMrWG02a0ZRaUhSSENvL3Yzb1psV1V2Z3ZnU3V1RE14R3NnQnNNb3pPSFYrQU1XNXNxRytzeU9GaDRXY0o1SC9HYmgycDdLM0Fqdnd3bWg1MEZxTndIZFIwUEMvVGY4RGdic09Cb0VJeTErL3phd2ErdE9YYVlDWWJYeG50cW5XdlpuTHc1TUEwMElhZmU5TXN3akk1UXp6RzVDeklIb2FJZjhBYXFWNXRLNkpCNzRBQUFBQVNVVk9SSzVDWUlJPVwiIC8+XG4gICAgICAgICAgICA8c3Bhbj5Db3B5IGxpbms8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgPEZvcm1cbiAgICAgICAgcmVwbGFjZVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC0xNFwiXG4gICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG0tNSAke2lzVGFibGV0T3JNb2JpbGUgPyBcInctMTEvMTJcIiA6IFwidy0xLzJcIn1gfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXtsYWJlbFN0eWxlfT5cbiAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICBtYXhMZW5ndGg9e01BWF9MRU5HVEh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2dldElucHV0U3R5bGUoZXJyb3JzPy5wYXNzd29yZCl9XG4gICAgICAgICAgICBtaW5MZW5ndGg9e01JTl9MRU5HVEh9XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDdXN0b21FcnJvciBkYXRhPXtlcnJvcnM/LnBhc3N3b3JkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtLTUgJHtpc1RhYmxldE9yTW9iaWxlID8gXCJ3LTExLzEyXCIgOiBcInctMS8yXCJ9YH0+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17bGFiZWxTdHlsZX0gaHRtbEZvcj1cInRleHRcIj5cbiAgICAgICAgICAgIFNlY3JldCB0ZXh0XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHJvd3M9ezEwfVxuICAgICAgICAgICAgbmFtZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtnZXRJbnB1dFN0eWxlKGVycm9ycz8udGV4dCl9XG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPEN1c3RvbUVycm9yIGRhdGE9e2Vycm9ycz8udGV4dH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy12aW9sZXQtNTAwIGhvdmVyOmJnLXZpb2xldC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IGJvcmRlciBib3JkZXItdmlvbGV0LTcwMCByb3VuZGVkXCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgPlxuICAgICAgICAgIENyZWF0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbUVycm9yKHtcbiAgZGF0YSxcbn06IHtcbiAgZGF0YTogeyBpZDogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfVtdIHwgdW5kZWZpbmVkO1xufSkge1xuICBpZiAoZGF0YSAmJiBBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dWw+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwbC0xIG10LTEgdGV4dC1yZWQtNTAwIHRleHQteHMgaXRhbGljXCIga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgIHtpdGVtLm1lc3NhZ2V9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImludmlzaWJsZVwiPkVycm9yIHNwYWNlPC9saT5cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaW5wdXRTdHlsZSA9XG4gIFwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtdmlvbGV0LTUwMCAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIjtcbmV4cG9ydCBjb25zdCBpbnB1dEVycm9yU3R5bGUgPVxuICBcInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LXZpb2xldC01MDAgIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCI7XG5leHBvcnQgY29uc3QgbGFiZWxTdHlsZSA9IFwiYmxvY2sgdGV4dC12aW9sZXQtNTAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldElucHV0U3R5bGUoXG4gIGRhdGE6IHsgaWQ6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH1bXSB8IHVuZGVmaW5lZFxuKSB7XG4gIGlmIChkYXRhICYmIEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGlucHV0RXJyb3JTdHlsZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW5wdXRTdHlsZTtcbiAgfVxufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Y2Nlc3MoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byB3LTEvMiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC0xNFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT17YHRleHQtdmlvbGV0LTQwMCB0ZXh0LWNlbnRlcmB9PlxuICAgICAgICBZb3VyIHNlY3JldCBoYXMgYmVlbiBlcmFzZWQgZnJvbSB0aGUgZGF0YWJhc2UhXG4gICAgICA8L2gyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEZvcm0sXG4gIExvYWRlckZ1bmN0aW9uLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlU2VhcmNoUGFyYW1zLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHNldFNlY3JldCB9IGZyb20gXCIuLi9kYi9kYlwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IFNlY3JldEZvcm1EYXRhIH0gZnJvbSBcIn4vdHlwZXNcIjtcbmltcG9ydCB7IGVuY3J5cHRQYXNzd29yZCwgZW5jcnlwdFRleHQgfSBmcm9tIFwifi9jcnlwdG9cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VDbGlwYm9hcmQgZnJvbSBcInJlYWN0LXVzZS1jbGlwYm9hcmRcIjtcblxudHlwZSBFcnJvcnNLZXlzID0ga2V5b2YgU2VjcmV0Rm9ybURhdGE7XG50eXBlIEN1c3RvbUVycm9yID0gUmVjb3JkPEVycm9yc0tleXMsIHsgaWQ6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH1bXT47XG5cbmNvbnN0IE1BWF9MRU5HVEggPSAzMjtcbmNvbnN0IE1JTl9MRU5HVEggPSA1O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgaXNNb2JpbGUgPVxuICAgIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJ1c2VyLWFnZW50XCIpIVxuICAgICk7XG5cbiAgcmV0dXJuIHtcbiAgICBiYXNlVXJsOiBwcm9jZXNzLmVudi5CQVNFX1VSTCA/PyBcImh0dHA6Ly8xOTIuMTY4LjEuMTU0OjMwMDBcIixcbiAgICBpc01vYmlsZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZyB8IG51bGw7XG4gIGNvbnN0IHRleHQgPSBmb3JtRGF0YS5nZXQoXCJ0ZXh0XCIpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgY29uc3QgZXJyb3JzOiBDdXN0b21FcnJvciA9IHtcbiAgICBwYXNzd29yZDogW10sXG4gICAgdGV4dDogW10sXG4gIH07XG5cbiAgaWYgKCFwYXNzd29yZCkge1xuICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKHsgaWQ6IFwicmVxdWlyZWRcIiwgbWVzc2FnZTogXCJJcyByZXF1aXJlZFwiIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXNzd29yZD8ubGVuZ3RoIDwgTUlOX0xFTkdUSCkge1xuICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goe1xuICAgICAgICBpZDogXCJtaW5MZW5ndGhcIixcbiAgICAgICAgbWVzc2FnZTogXCJwYXNzd29yZCBpcyB0b28gc2hvcnRcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocGFzc3dvcmQ/Lmxlbmd0aCA+IE1BWF9MRU5HVEgpIHtcbiAgICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKHtcbiAgICAgICAgaWQ6IFwibWF4TGVuZ3RoXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwicGFzc3dvcmQgaXMgdG9vIGxvbmdcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAoIXRleHQpIGVycm9ycy50ZXh0LnB1c2goeyBpZDogXCJyZXF1aXJlZFwiLCBtZXNzYWdlOiBcIklzIHJlcXVpcmVkXCIgfSk7XG5cbiAgZm9yIChjb25zdCBbXywgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGVycm9ycykpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGNvbnN0IHJlYWRJZCA9IHV1aWR2NCgpO1xuXG4gIHNldFNlY3JldChcbiAgICByZWFkSWQsXG4gICAgZW5jcnlwdFBhc3N3b3JkKHBhc3N3b3JkIGFzIHN0cmluZyksXG4gICAgZW5jcnlwdFRleHQocGFzc3dvcmQhLCB0ZXh0ISlcbiAgKTtcblxuICByZXR1cm4gcmVkaXJlY3QoYC9jcmVhdGUvP2lkPSR7cmVhZElkfWApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlKCkge1xuICBsZXQgbG9hZGVyRGF0YSA9IHVzZUxvYWRlckRhdGE8eyBiYXNlVXJsOiBzdHJpbmc7IGlzTW9iaWxlOiBib29sZWFuIH0+KCk7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGE8Q3VzdG9tRXJyb3I+KCk7XG4gIGNvbnN0IGlzVGFibGV0T3JNb2JpbGUgPSBsb2FkZXJEYXRhLmlzTW9iaWxlO1xuICBsZXQgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgbGV0IGlkID0gc2VhcmNoUGFyYW1zLmdldEFsbChcImlkXCIpO1xuXG4gIGNvbnN0IFtpc0NvcGllZCwgc2V0Q29waWVkXSA9IHVzZUNsaXBib2FyZChcbiAgICBgJHtsb2FkZXJEYXRhLmJhc2VVcmx9L3JlYWQvJHtpZH1gLFxuICAgIHtcbiAgICAgIHN1Y2Nlc3NEdXJhdGlvbjogMTAwMCxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbnB1dFJlZj8uY3VycmVudD8uZm9jdXMoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChpZFswXSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTRcIj5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgbG9hZGVyRGF0YS5pc01vYmlsZSA/IFwidGV4dC1jZW50ZXJcIiA6IFwidGV4dC1sZWZ0XCJcbiAgICAgICAgICAgIH0gdGV4dC12aW9sZXQtNDAwYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBZb3VyIHNlY3JldCB1cmwgaXM6XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBvbkNsaWNrPXtzZXRDb3BpZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICBsb2FkZXJEYXRhLmlzTW9iaWxlID8gXCJ0ZXh0LWNlbnRlclwiIDogXCJ0ZXh0LWxlZnRcIlxuICAgICAgICAgICAgfSAke2lzQ29waWVkID8gXCJ0ZXh0LXZpb2xldC03MDBcIiA6IFwidGV4dC12aW9sZXQtNDAwXCJ9YH1cbiAgICAgICAgICA+e2Ake2xvYWRlckRhdGEuYmFzZVVybH0vcmVhZC8ke2lkfWB9PC9wPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3NldENvcGllZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbXQtNSBiZy12aW9sZXQtNTAwIGhvdmVyOmJnLXZpb2xldC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IGJvcmRlciBib3JkZXItdmlvbGV0LTcwMCByb3VuZGVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBWUFBQURnZHozNEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUNZRWxFUVZSSWlhMVVTMmdUVVJROUx6TXBKb1pRbzVBMFhmcGZxT2pHclJ1WDRrYmRTRldzVml0b1cwa1hJcFM2OGtPdGJVTWFnL1dEQ0M1MG9TZ0t1aEozZ2loU3dTS3VtaWFyTGlRcFVzbTd4MFdiTVcvTVRDZkZDNC9MekpzNW4vdnVmUW9CNDhDUnJnRmxxUXhGb0FVM1hqMTVOQjdrUCtXM2VmRG9zYXVXQ3ZVTHNTYTZOb1p0Ty9lQUFLWS9ma0MxOGhPay9OSmFqN3g5OW5Rb0VNR2hydTdEdG0xbGhVeFNCRUppNzc3OXNPd3dDSUpzWE1EdnhVVzhmL01TSWdRcEFGSFNXcDk5OS9yNWl6cW0zVWhnaCszc2xVdUR5UzJiTmdJQWV2b3lXS2hXRUc5ZkI1QUFseE1CZ3FoV0s5aVFTQ0EvZWgxS0tjeDgvNUVlSEJyT0EyaE9BTklCQjREZWs4Y3hPWFVmbitmbklTUW9BaEZDS0tBUTZ4UHRPTmQ5QWtvcEtLV3dmZXRta0tyVEVHM2d1K3EzZTljTzVHNWVRNlZTV2FxblVrNE9oVUxHYzMyUkprcklOT0NtQU5yYTJoQ1B4eDFBUC9BVkNid2lIQTRqRm9zWjRGNkxhTkZCTXhJdjlVcXBmK3BzT3ZBaEFBRGJ0aEdOUnIzQm00ZzBIZmpDL3lXSlJDSk53ZXZaK040MFlGS2M2YzlncmxRR0NhYzFoZUlNbGdpUlRpVnhMemZtRUxneGZBa0tZeU8rYnJUV3FOVnFEbml6US9aMzBKZEJzVlQyVkU4SzBxa1VIdVFuR3RyVUZPRTdhSVZ4ZndlTndyVFdLNWZJVFgvNndrVVVTK1htNmtGUWlIUkhDby92M29abFdVdmd2Z1N1dURNeEdzZ0JzTW96T0hWK0FNVzVzcUcrc3lPRmg0V2NKNUgvR2JoMnA3SzNBanZ3d21oNTBGcU53SGRSMFBDL1RmOERnYnNPQm9FSXkxKy96YXdhK3RPWGFZQ1liWHhudHFuV3Zabkx3NU1BMDBJYWZlOU1zd2pJNVF6ekc1Q3pJSG9hSWY4QWFxVjV0SzZKQjc0QUFBQUFTVVZPUks1Q1lJST1cIiAvPlxuICAgICAgICAgICAgPHNwYW4+Q29weSBsaW5rPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDxGb3JtXG4gICAgICAgIHJlcGxhY2VcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTRcIlxuICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtLTUgJHtpc1RhYmxldE9yTW9iaWxlID8gXCJ3LTExLzEyXCIgOiBcInctMS8yXCJ9YH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17bGFiZWxTdHlsZX0+XG4gICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgICAgbWF4TGVuZ3RoPXtNQVhfTEVOR1RIfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtnZXRJbnB1dFN0eWxlKGVycm9ycz8ucGFzc3dvcmQpfVxuICAgICAgICAgICAgbWluTGVuZ3RoPXtNSU5fTEVOR1RIfVxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q3VzdG9tRXJyb3IgZGF0YT17ZXJyb3JzPy5wYXNzd29yZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbS01ICR7aXNUYWJsZXRPck1vYmlsZSA/IFwidy0xMS8xMlwiIDogXCJ3LTEvMlwifWB9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2xhYmVsU3R5bGV9IGh0bWxGb3I9XCJ0ZXh0XCI+XG4gICAgICAgICAgICBTZWNyZXQgdGV4dFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICAgIG5hbWU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Z2V0SW5wdXRTdHlsZShlcnJvcnM/LnRleHQpfVxuICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgIDxDdXN0b21FcnJvciBkYXRhPXtlcnJvcnM/LnRleHR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctdmlvbGV0LTUwMCBob3ZlcjpiZy12aW9sZXQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXZpb2xldC03MDAgcm91bmRlZFwiXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgID5cbiAgICAgICAgICBDcmVhdGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDdXN0b21FcnJvcih7XG4gIGRhdGEsXG59OiB7XG4gIGRhdGE6IHsgaWQ6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH1bXSB8IHVuZGVmaW5lZDtcbn0pIHtcbiAgaWYgKGRhdGEgJiYgQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGwtMSBtdC0xIHRleHQtcmVkLTUwMCB0ZXh0LXhzIGl0YWxpY1wiIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICB7aXRlbS5tZXNzYWdlfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbnZpc2libGVcIj5FcnJvciBzcGFjZTwvbGk+XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGlucHV0U3R5bGUgPVxuICBcInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LXZpb2xldC01MDAgIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCI7XG5leHBvcnQgY29uc3QgaW5wdXRFcnJvclN0eWxlID1cbiAgXCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItcmVkLTUwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC12aW9sZXQtNTAwICBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiO1xuZXhwb3J0IGNvbnN0IGxhYmVsU3R5bGUgPSBcImJsb2NrIHRleHQtdmlvbGV0LTUwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnB1dFN0eWxlKFxuICBkYXRhOiB7IGlkOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9W10gfCB1bmRlZmluZWRcbikge1xuICBpZiAoZGF0YSAmJiBBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiBpbnB1dEVycm9yU3R5bGU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlucHV0U3R5bGU7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkZXIoKSB7XG4gIHJldHVybiBbXG4gICAgeyBpZDogMSwgbmFtZTogXCJKYWNrXCIgfSxcbiAgICB7IGlkOiAyLCBuYW1lOiBcIk1hcnlcIiB9LFxuICAgIHsgaWQ6IDMsIG5hbWU6IFwiRGlhbmFcIiB9LFxuICAgIHsgaWQ6IDQsIG5hbWU6IFwiR2VvcmdlXCIgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPEFycmF5PHsgaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nIH0+PigpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+QWJvdXQ8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT57aXRlbS5uYW1lfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gcmVkaXJlY3QoXCIvY3JlYXRlXCIpO1xufTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWFkeSgpIHtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5hdmlnYXRlKFwiLi4vc3VjY2Vzc1wiKTtcbiAgfSwgW10pO1xuICByZXR1cm4gPGRpdiBzdHlsZT17eyB2aXNpYmlsaXR5OiBcImhpZGRlblwiIH19Pm1vaTwvZGl2Pjtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxN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
