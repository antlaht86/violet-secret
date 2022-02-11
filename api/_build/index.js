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
var cache = import_flat_cache.default.load("cacheId");
function getSecret(id) {
  console.log("\u{1F921} cache: ", cache.all());
  return cache.getKey(id);
}
function setSecret(id, pd, text) {
  cache.setKey(id, { pd, text });
  cache.save();
  console.log("\u{1F921} cache: ", cache.all());
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbnR0aWxhaHRpbmVuL0RldmVsb3BtZW50L2dpdC90ZXN0LXJlbWl4L2FwcC9yb290LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9uYXYudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdGVzdC1yZW1peC9hcHAvcm91dGVzL3JlYWQvJHJlYWRpZC50c3giLCAiLi4vLi4vYXBwL2RiL2RiLnRzIiwgIi4uLy4uL2FwcC9jcnlwdG8vaW5kZXgudHMiLCAiLi4vLi4vYXBwL3JvdXRlcy9jcmVhdGUudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdGVzdC1yZW1peC9hcHAvcm91dGVzL3N1Y2Nlc3MudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdGVzdC1yZW1peC9hcHAvcm91dGVzL2NyZWF0ZS50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbnR0aWxhaHRpbmVuL0RldmVsb3BtZW50L2dpdC90ZXN0LXJlbWl4L2FwcC9yb3V0ZXMvYWJvdXQudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdGVzdC1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Rlc3QtcmVtaXgvYXBwL3JvdXRlcy9yZWFkeS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9hbnR0aWxhaHRpbmVuL0RldmVsb3BtZW50L2dpdC90ZXN0LXJlbWl4L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9hbnR0aWxhaHRpbmVuL0RldmVsb3BtZW50L2dpdC90ZXN0LXJlbWl4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdGVzdC1yZW1peC9hcHAvcm91dGVzL3JlYWQvJHJlYWRpZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Rlc3QtcmVtaXgvYXBwL3JvdXRlcy9zdWNjZXNzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdGVzdC1yZW1peC9hcHAvcm91dGVzL2NyZWF0ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Rlc3QtcmVtaXgvYXBwL3JvdXRlcy9hYm91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Rlc3QtcmVtaXgvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Rlc3QtcmVtaXgvYXBwL3JvdXRlcy9yZWFkeS50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL3JlYWQvJHJlYWRpZFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JlYWQvJHJlYWRpZFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInJlYWQvOnJlYWRpZFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL3N1Y2Nlc3NcIjoge1xuICAgIGlkOiBcInJvdXRlcy9zdWNjZXNzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwic3VjY2Vzc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2NyZWF0ZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2NyZWF0ZVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImNyZWF0ZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL2Fib3V0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWJvdXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJhYm91dFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9yZWFkeVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JlYWR5XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicmVhZHlcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNlxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IE5hdkxpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJWaW9sZXQgc2VjcmV0XCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgc2l6ZXM9XCIxODB4MTgwXCJcbiAgICAgICAgICBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24tMTZ4MTYucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIj48L2xpbms+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxOYXZMaXN0IC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ29pcHN1bS1sb2dvLTE1LnN2Z1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TGlzdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS0xMDAgYm9yZGVyLWdyYXktMjAwIHB4LTIgc206cHgtNCBweS0yLjVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xMCBjb250YWluZXIgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvY3JlYXRlXCIgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17TG9nb30gYWx0PVwiQ29tcGFueSBMb2dvXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTMuNVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvY3JlYXRlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBwci00IHBsLTMgdGV4dC12aW9sZXQtNTAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ3JlYXRlIHNlY3JldFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEFjdGlvbkZ1bmN0aW9uLFxuICBGb3JtLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVBhcmFtcyxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRTZWNyZXQsIHJlbW92ZVNlY3JldCB9IGZyb20gXCJ+L2RiL2RiXCI7XG5pbXBvcnQgeyBkZWNyeXB0VGV4dCwgZW5jcnlwdFBhc3N3b3JkIH0gZnJvbSBcIn4vY3J5cHRvXCI7XG5pbXBvcnQgeyBDdXN0b21FcnJvciwgZ2V0SW5wdXRTdHlsZSwgaW5wdXRTdHlsZSwgbGFiZWxTdHlsZSB9IGZyb20gXCIuLi9jcmVhdGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGlzTW9iaWxlID1cbiAgICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwidXNlci1hZ2VudFwiKSFcbiAgICApO1xuXG4gIHJldHVybiBpc01vYmlsZTtcbn07XG5cbnR5cGUgSUFjdGlvblR5cGVzID0gXCJyZWFkXCIgfCBcInJlYWR5XCI7XG50eXBlIEVycm9yc0tleXMgPSBrZXlvZiB7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59O1xuXG50eXBlIElHZXRIc2V0QWxsID0ge1xuICBwZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59O1xuXG50eXBlIElDdXN0b21FcnJvciA9IFJlY29yZDxFcnJvcnNLZXlzLCB7IGlkOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9W10+O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKTtcbiAgY29uc3QgcmVhZElkID0gZm9ybURhdGEuZ2V0KFwicmVhZElkXCIpO1xuICBjb25zdCBhY3Rpb24gPSBmb3JtRGF0YS5nZXQoXCJfYWN0aW9uXCIpIGFzIElBY3Rpb25UeXBlcztcblxuICBpZiAoYWN0aW9uID09PSBcInJlYWR5XCIpIHtcbiAgICByZW1vdmVTZWNyZXQocmVhZElkIGFzIHN0cmluZyk7XG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL3JlYWR5XCIpO1xuICB9XG5cbiAgY29uc3QgcmVzID0gZ2V0U2VjcmV0KFN0cmluZyhyZWFkSWQpKSBhcyB1bmtub3duIGFzIElHZXRIc2V0QWxsO1xuICBjb25zb2xlLmxvZyhcIlx1RDgzRVx1REQyMSByZXM6IFwiLCByZXMpO1xuXG4gIGNvbnN0IGVycm9yczogSUN1c3RvbUVycm9yID0ge1xuICAgIHBhc3N3b3JkOiBbXSxcbiAgfTtcblxuICBpZiAoIXBhc3N3b3JkKVxuICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKHsgaWQ6IFwicmVxdWlyZWRcIiwgbWVzc2FnZTogXCJJcyByZXF1aXJlZFwiIH0pO1xuXG4gIGlmICghcmVzIHx8IGVuY3J5cHRQYXNzd29yZChwYXNzd29yZCBhcyBzdHJpbmcpICE9PSByZXMucGQpXG4gICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goe1xuICAgICAgaWQ6IFwibm90TWF0Y2hcIixcbiAgICAgIG1lc3NhZ2U6IFwicGFzc3dvcmQgZG9lcyBub3QgbWF0Y2ggb3IgdGhlcmUgaXMgbm8gc2VjcmV0IGZvciB5b3VcIixcbiAgICB9KTtcblxuICBmb3IgKGNvbnN0IFtfLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZXJyb3JzKSkge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgcmV0dXJuIGRlY3J5cHRUZXh0KHBhc3N3b3JkIGFzIHN0cmluZywgcmVzLnRleHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVhZCgpIHtcbiAgbGV0IGlzVGFibGV0T3JNb2JpbGUgPSB1c2VMb2FkZXJEYXRhPGJvb2xlYW4+KCk7XG5cbiAgY29uc3QgZGF0YSA9IHVzZUFjdGlvbkRhdGE8c3RyaW5nIHwgSUN1c3RvbUVycm9yPigpO1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbnB1dFJlZj8uY3VycmVudD8uZm9jdXMoKTtcbiAgfSwgW10pO1xuXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGNvbnRhaW5lciBteC1hdXRvICR7XG4gICAgICAgICAgaXNUYWJsZXRPck1vYmlsZSA/IFwidy0xMS8xMlwiIDogXCJ3LTEvMlwiXG4gICAgICAgIH0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXQtMTRgfVxuICAgICAgPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMyB3LWZ1bGwgdGV4dC1sZWZ0IHRleHQtdmlvbGV0LTcwMFwiPllvdXIgU2VjcmV0OjwvaDI+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgbmFtZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRTdHlsZX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGF9XG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIHJlcGxhY2VcbiAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW0tY2VudGVyIGp1c3RpZnktc2VsZi1jZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17cGFyYW1zLnJlYWRpZH0gbmFtZT1cInJlYWRJZFwiIHR5cGU9XCJoaWRkZW5cIiAvPlxuICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e1wicmVhZHlcIn0gbmFtZT1cIl9hY3Rpb25cIiB0eXBlPVwiaGlkZGVuXCIgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiZGVsZXRlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTE0IGJnLXZpb2xldC01MDAgaG92ZXI6YmctdmlvbGV0LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci12aW9sZXQtNzAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGVsZXRlIHRoaXMgc2VjcmV0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTE0XCI+XG4gICAgICA8Rm9ybVxuICAgICAgICByZXBsYWNlXG4gICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICBjbGFzc05hbWU9XCIgdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTE0XCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17cGFyYW1zLnJlYWRpZH0gbmFtZT1cInJlYWRJZFwiIHR5cGU9XCJoaWRkZW5cIiAvPlxuICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXtcInJlYWRcIn0gbmFtZT1cIl9hY3Rpb25cIiB0eXBlPVwiaGlkZGVuXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtLTUgJHtpc1RhYmxldE9yTW9iaWxlID8gXCJ3LTExLzEyXCIgOiBcInctMS8yXCJ9YH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17bGFiZWxTdHlsZX0+XG4gICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtnZXRJbnB1dFN0eWxlKFxuICAgICAgICAgICAgICB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiA/IFtdIDogZGF0YT8ucGFzc3dvcmRcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q3VzdG9tRXJyb3IgZGF0YT17dHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgPyBbXSA6IGRhdGE/LnBhc3N3b3JkfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctdmlvbGV0LTUwMCBob3ZlcjpiZy12aW9sZXQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXZpb2xldC03MDAgcm91bmRlZFwiXG4gICAgICAgID5cbiAgICAgICAgICBSZWFkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBSZWRpcyBmcm9tIFwiaW9yZWRpc1wiO1xuaW1wb3J0IGZsYXRDYWNoZSBmcm9tIFwiZmxhdC1jYWNoZVwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuY29uc3QgY2FjaGUgPSBmbGF0Q2FjaGUubG9hZChcImNhY2hlSWRcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWNyZXQoaWQ6IHN0cmluZyk6IHsgcGQ6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0gfCBudWxsIHtcbiAgY29uc29sZS5sb2coXCJcdUQ4M0VcdUREMjEgY2FjaGU6IFwiLCBjYWNoZS5hbGwoKSk7XG5cbiAgcmV0dXJuIGNhY2hlLmdldEtleShpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWNyZXQoaWQ6IHN0cmluZywgcGQ6IHN0cmluZywgdGV4dDogc3RyaW5nKSB7XG4gIGNhY2hlLnNldEtleShpZCwgeyBwZCwgdGV4dCB9KTtcbiAgY2FjaGUuc2F2ZSgpO1xuICBjb25zb2xlLmxvZyhcIlx1RDgzRVx1REQyMSBjYWNoZTogXCIsIGNhY2hlLmFsbCgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNlY3JldChpZDogc3RyaW5nKSB7XG4gIGNhY2hlLnJlbW92ZUtleShpZCk7XG59XG4iLCAiaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCBDcnlwdG9KUyBmcm9tIFwiY3J5cHRvLWpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNyeXB0VGV4dChwYXNzd29yZDogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpIHtcbiAgcmV0dXJuIENyeXB0b0pTLkFFUy5lbmNyeXB0KHRleHQsIHBhc3N3b3JkKS50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjcnlwdFRleHQocGFzc3dvcmQ6IHN0cmluZywgdGV4dDogc3RyaW5nKSB7XG4gIGNvbnN0IGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dCwgcGFzc3dvcmQpO1xuICByZXR1cm4gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jcnlwdFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgaW52YXJpYW50KHByb2Nlc3MuZW52LlNFQ1JFVF9LRVksIFwicHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSBpcyByZXF1aXJlZFwiKTtcbiAgY29uc3Qga2V5NTEyQml0cyA9IENyeXB0b0pTLlBCS0RGMihwYXNzd29yZCwgcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSwge1xuICAgIGtleVNpemU6IDUxMiAvIDMyLFxuICB9KTtcbiAgcmV0dXJuIGtleTUxMkJpdHMudG9TdHJpbmcoKTtcbn1cbiIsICJpbXBvcnQge1xuICBGb3JtLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVNlYXJjaFBhcmFtcyxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBzZXRTZWNyZXQgfSBmcm9tIFwiLi4vZGIvZGJcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBTZWNyZXRGb3JtRGF0YSB9IGZyb20gXCJ+L3R5cGVzXCI7XG5pbXBvcnQgeyBlbmNyeXB0UGFzc3dvcmQsIGVuY3J5cHRUZXh0IH0gZnJvbSBcIn4vY3J5cHRvXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlQ2xpcGJvYXJkIGZyb20gXCJyZWFjdC11c2UtY2xpcGJvYXJkXCI7XG5cbnR5cGUgRXJyb3JzS2V5cyA9IGtleW9mIFNlY3JldEZvcm1EYXRhO1xudHlwZSBDdXN0b21FcnJvciA9IFJlY29yZDxFcnJvcnNLZXlzLCB7IGlkOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9W10+O1xuXG5jb25zdCBNQVhfTEVOR1RIID0gMzI7XG5jb25zdCBNSU5fTEVOR1RIID0gNTtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGlzTW9iaWxlID1cbiAgICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwidXNlci1hZ2VudFwiKSFcbiAgICApO1xuXG4gIHJldHVybiB7XG4gICAgYmFzZVVybDogcHJvY2Vzcy5lbnYuQkFTRV9VUkwgPz8gXCJodHRwOi8vMTkyLjE2OC4xLjE1NDozMDAwXCIsXG4gICAgaXNNb2JpbGUsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmcgfCBudWxsO1xuICBjb25zdCB0ZXh0ID0gZm9ybURhdGEuZ2V0KFwidGV4dFwiKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0IGVycm9yczogQ3VzdG9tRXJyb3IgPSB7XG4gICAgcGFzc3dvcmQ6IFtdLFxuICAgIHRleHQ6IFtdLFxuICB9O1xuXG4gIGlmICghcGFzc3dvcmQpIHtcbiAgICBlcnJvcnMucGFzc3dvcmQucHVzaCh7IGlkOiBcInJlcXVpcmVkXCIsIG1lc3NhZ2U6IFwiSXMgcmVxdWlyZWRcIiB9KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFzc3dvcmQ/Lmxlbmd0aCA8IE1JTl9MRU5HVEgpIHtcbiAgICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKHtcbiAgICAgICAgaWQ6IFwibWluTGVuZ3RoXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwicGFzc3dvcmQgaXMgdG9vIHNob3J0XCIsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHBhc3N3b3JkPy5sZW5ndGggPiBNQVhfTEVOR1RIKSB7XG4gICAgICBlcnJvcnMucGFzc3dvcmQucHVzaCh7XG4gICAgICAgIGlkOiBcIm1heExlbmd0aFwiLFxuICAgICAgICBtZXNzYWdlOiBcInBhc3N3b3JkIGlzIHRvbyBsb25nXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaWYgKCF0ZXh0KSBlcnJvcnMudGV4dC5wdXNoKHsgaWQ6IFwicmVxdWlyZWRcIiwgbWVzc2FnZTogXCJJcyByZXF1aXJlZFwiIH0pO1xuXG4gIGZvciAoY29uc3QgW18sIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhlcnJvcnMpKSB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBjb25zdCByZWFkSWQgPSB1dWlkdjQoKTtcblxuICBzZXRTZWNyZXQoXG4gICAgcmVhZElkLFxuICAgIGVuY3J5cHRQYXNzd29yZChwYXNzd29yZCBhcyBzdHJpbmcpLFxuICAgIGVuY3J5cHRUZXh0KHBhc3N3b3JkISwgdGV4dCEpXG4gICk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KGAvY3JlYXRlLz9pZD0ke3JlYWRJZH1gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZSgpIHtcbiAgbGV0IGxvYWRlckRhdGEgPSB1c2VMb2FkZXJEYXRhPHsgYmFzZVVybDogc3RyaW5nOyBpc01vYmlsZTogYm9vbGVhbiB9PigpO1xuICBjb25zdCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhPEN1c3RvbUVycm9yPigpO1xuICBjb25zdCBpc1RhYmxldE9yTW9iaWxlID0gbG9hZGVyRGF0YS5pc01vYmlsZTtcbiAgbGV0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGxldCBpZCA9IHNlYXJjaFBhcmFtcy5nZXRBbGwoXCJpZFwiKTtcblxuICBjb25zdCBbaXNDb3BpZWQsIHNldENvcGllZF0gPSB1c2VDbGlwYm9hcmQoXG4gICAgYCR7bG9hZGVyRGF0YS5iYXNlVXJsfS9yZWFkLyR7aWR9YCxcbiAgICB7XG4gICAgICBzdWNjZXNzRHVyYXRpb246IDEwMDAsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5wdXRSZWY/LmN1cnJlbnQ/LmZvY3VzKCk7XG4gIH0sIFtdKTtcblxuICBpZiAoaWRbMF0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTE0XCI+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgIGxvYWRlckRhdGEuaXNNb2JpbGUgPyBcInRleHQtY2VudGVyXCIgOiBcInRleHQtbGVmdFwiXG4gICAgICAgICAgICB9IHRleHQtdmlvbGV0LTQwMGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgWW91ciBzZWNyZXQgdXJsIGlzOlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgb25DbGljaz17c2V0Q29waWVkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgbG9hZGVyRGF0YS5pc01vYmlsZSA/IFwidGV4dC1jZW50ZXJcIiA6IFwidGV4dC1sZWZ0XCJcbiAgICAgICAgICAgIH0gJHtpc0NvcGllZCA/IFwidGV4dC12aW9sZXQtNzAwXCIgOiBcInRleHQtdmlvbGV0LTQwMFwifWB9XG4gICAgICAgICAgPntgJHtsb2FkZXJEYXRhLmJhc2VVcmx9L3JlYWQvJHtpZH1gfTwvcD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtzZXRDb3BpZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG10LTUgYmctdmlvbGV0LTUwMCBob3ZlcjpiZy12aW9sZXQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXZpb2xldC03MDAgcm91bmRlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVlDQVlBQUFEZ2R6MzRBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDWUVsRVFWUklpYTFVUzJnVFVSUTlMek1wSm9aUW81QTBYZnBmcU9qR3JSdVg0a2JkU0ZXc1ZpdG9XMGtYSXBTNjhrT3RiVU1hZy9XRENDNTBvU2dLdWhKM2dpaFN3U0t1bWlhckxpUXBVc203eDBXYk1XL01UQ2ZGQzQvTHpKczVuL3Z1ZlFvQjQ4Q1JyZ0ZscVF4Rm9BVTNYajE1TkI3a1ArVzNlZkRvc2F1V0N2VUxzU2E2Tm9adE8vZUFBS1kvZmtDMThoT2svTkphajd4OTluUW9FTUdocnU3RHRtMWxoVXhTQkVKaTc3NzlzT3d3Q0lKc1hNRHZ4VVc4Zi9NU0lnUXBBRkhTV3A5OTkvcjVpenFtM1VoZ2grM3NsVXVEeVMyYk5nSUFldm95V0toV0VHOWZCNUFBbHhNQmdxaFdLOWlRU0NBL2VoMUtLY3g4LzVFZUhCck9BMmhPQU5JQkI0RGVrOGN4T1hVZm4rZm5JU1FvQWhGQ0tLQVE2eFB0T05kOUFrb3BLS1d3ZmV0bWtLclRFRzNndStxM2U5Y081RzVlUTZWU1dhcW5VazRPaFVMR2MzMlJKa3JJTk9DbUFOcmEyaENQeHgxQVAvQVZDYndpSEE0akZvc1o0RjZMYU5GQk14SXY5VXFwZitwc092QWhBQURidGhHTlJyM0JtNGcwSGZqQy95V0pSQ0pOd2V2WitONDBZRktjNmM5Z3JsUUdDYWMxaGVJTWxnaVJUaVZ4THpmbUVMZ3hmQWtLWXlPK2JyVFdxTlZxRG5pelEvWjMwSmRCc1ZUMlZFOEswcWtVSHVRbkd0clVGT0U3YUlWeGZ3ZU53clRXSzVmSVRYLzZ3a1VVUytYbTZrRlFpSFJIQ28vdjNvWmxXVXZndmdTdXVETXhHc2dCc01vek9IVitBTVc1c3FHK3N5T0ZoNFdjSjVIL0diaDJwN0szQWp2d3dtaDUwRnFOd0hkUjBQQy9UZjhEZ2JzT0JvRUl5MSsvemF3YSt0T1hhWUNZYlh4bnRxbld2Wm5MdzVNQTAwSWFmZTlNc3dqSTVRenpHNUN6SUhvYUlmOEFhcVY1dEs2SkI3NEFBQUFBU1VWT1JLNUNZSUk9XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkNvcHkgbGluazwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICA8Rm9ybVxuICAgICAgICByZXBsYWNlXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTE0XCJcbiAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbS01ICR7aXNUYWJsZXRPck1vYmlsZSA/IFwidy0xMS8xMlwiIDogXCJ3LTEvMlwifWB9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9e2xhYmVsU3R5bGV9PlxuICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICAgIG1heExlbmd0aD17TUFYX0xFTkdUSH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Z2V0SW5wdXRTdHlsZShlcnJvcnM/LnBhc3N3b3JkKX1cbiAgICAgICAgICAgIG1pbkxlbmd0aD17TUlOX0xFTkdUSH1cbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEN1c3RvbUVycm9yIGRhdGE9e2Vycm9ycz8ucGFzc3dvcmR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG0tNSAke2lzVGFibGV0T3JNb2JpbGUgPyBcInctMTEvMTJcIiA6IFwidy0xLzJcIn1gfT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtsYWJlbFN0eWxlfSBodG1sRm9yPVwidGV4dFwiPlxuICAgICAgICAgICAgU2VjcmV0IHRleHRcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgICBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2dldElucHV0U3R5bGUoZXJyb3JzPy50ZXh0KX1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8Q3VzdG9tRXJyb3IgZGF0YT17ZXJyb3JzPy50ZXh0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXZpb2xldC01MDAgaG92ZXI6YmctdmlvbGV0LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci12aW9sZXQtNzAwIHJvdW5kZWRcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICA+XG4gICAgICAgICAgQ3JlYXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tRXJyb3Ioe1xuICBkYXRhLFxufToge1xuICBkYXRhOiB7IGlkOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9W10gfCB1bmRlZmluZWQ7XG59KSB7XG4gIGlmIChkYXRhICYmIEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBsLTEgbXQtMSB0ZXh0LXJlZC01MDAgdGV4dC14cyBpdGFsaWNcIiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAge2l0ZW0ubWVzc2FnZX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW52aXNpYmxlXCI+RXJyb3Igc3BhY2U8L2xpPlxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBpbnB1dFN0eWxlID1cbiAgXCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC12aW9sZXQtNTAwICBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiO1xuZXhwb3J0IGNvbnN0IGlucHV0RXJyb3JTdHlsZSA9XG4gIFwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLXJlZC01MDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtdmlvbGV0LTUwMCAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIjtcbmV4cG9ydCBjb25zdCBsYWJlbFN0eWxlID0gXCJibG9jayB0ZXh0LXZpb2xldC01MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXRTdHlsZShcbiAgZGF0YTogeyBpZDogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfVtdIHwgdW5kZWZpbmVkXG4pIHtcbiAgaWYgKGRhdGEgJiYgQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4gaW5wdXRFcnJvclN0eWxlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpbnB1dFN0eWxlO1xuICB9XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VjY2VzcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHctMS8yIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG10LTE0XCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtgdGV4dC12aW9sZXQtNDAwIHRleHQtY2VudGVyYH0+XG4gICAgICAgIFlvdXIgc2VjcmV0IGhhcyBiZWVuIGVyYXNlZCBmcm9tIHRoZSBkYXRhYmFzZSFcbiAgICAgIDwvaDI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgRm9ybSxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VTZWFyY2hQYXJhbXMsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgc2V0U2VjcmV0IH0gZnJvbSBcIi4uL2RiL2RiXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgU2VjcmV0Rm9ybURhdGEgfSBmcm9tIFwifi90eXBlc1wiO1xuaW1wb3J0IHsgZW5jcnlwdFBhc3N3b3JkLCBlbmNyeXB0VGV4dCB9IGZyb20gXCJ+L2NyeXB0b1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUNsaXBib2FyZCBmcm9tIFwicmVhY3QtdXNlLWNsaXBib2FyZFwiO1xuXG50eXBlIEVycm9yc0tleXMgPSBrZXlvZiBTZWNyZXRGb3JtRGF0YTtcbnR5cGUgQ3VzdG9tRXJyb3IgPSBSZWNvcmQ8RXJyb3JzS2V5cywgeyBpZDogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfVtdPjtcblxuY29uc3QgTUFYX0xFTkdUSCA9IDMyO1xuY29uc3QgTUlOX0xFTkdUSCA9IDU7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBpc01vYmlsZSA9XG4gICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmdldChcInVzZXItYWdlbnRcIikhXG4gICAgKTtcblxuICByZXR1cm4ge1xuICAgIGJhc2VVcmw6IHByb2Nlc3MuZW52LkJBU0VfVVJMID8/IFwiaHR0cDovLzE5Mi4xNjguMS4xNTQ6MzAwMFwiLFxuICAgIGlzTW9iaWxlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIikgYXMgc3RyaW5nIHwgbnVsbDtcbiAgY29uc3QgdGV4dCA9IGZvcm1EYXRhLmdldChcInRleHRcIikgYXMgc3RyaW5nIHwgbnVsbDtcblxuICBjb25zdCBlcnJvcnM6IEN1c3RvbUVycm9yID0ge1xuICAgIHBhc3N3b3JkOiBbXSxcbiAgICB0ZXh0OiBbXSxcbiAgfTtcblxuICBpZiAoIXBhc3N3b3JkKSB7XG4gICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goeyBpZDogXCJyZXF1aXJlZFwiLCBtZXNzYWdlOiBcIklzIHJlcXVpcmVkXCIgfSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhc3N3b3JkPy5sZW5ndGggPCBNSU5fTEVOR1RIKSB7XG4gICAgICBlcnJvcnMucGFzc3dvcmQucHVzaCh7XG4gICAgICAgIGlkOiBcIm1pbkxlbmd0aFwiLFxuICAgICAgICBtZXNzYWdlOiBcInBhc3N3b3JkIGlzIHRvbyBzaG9ydFwiLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwYXNzd29yZD8ubGVuZ3RoID4gTUFYX0xFTkdUSCkge1xuICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goe1xuICAgICAgICBpZDogXCJtYXhMZW5ndGhcIixcbiAgICAgICAgbWVzc2FnZTogXCJwYXNzd29yZCBpcyB0b28gbG9uZ1wiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGlmICghdGV4dCkgZXJyb3JzLnRleHQucHVzaCh7IGlkOiBcInJlcXVpcmVkXCIsIG1lc3NhZ2U6IFwiSXMgcmVxdWlyZWRcIiB9KTtcblxuICBmb3IgKGNvbnN0IFtfLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZXJyb3JzKSkge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgY29uc3QgcmVhZElkID0gdXVpZHY0KCk7XG5cbiAgc2V0U2VjcmV0KFxuICAgIHJlYWRJZCxcbiAgICBlbmNyeXB0UGFzc3dvcmQocGFzc3dvcmQgYXMgc3RyaW5nKSxcbiAgICBlbmNyeXB0VGV4dChwYXNzd29yZCEsIHRleHQhKVxuICApO1xuXG4gIHJldHVybiByZWRpcmVjdChgL2NyZWF0ZS8/aWQ9JHtyZWFkSWR9YCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGUoKSB7XG4gIGxldCBsb2FkZXJEYXRhID0gdXNlTG9hZGVyRGF0YTx7IGJhc2VVcmw6IHN0cmluZzsgaXNNb2JpbGU6IGJvb2xlYW4gfT4oKTtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YTxDdXN0b21FcnJvcj4oKTtcbiAgY29uc3QgaXNUYWJsZXRPck1vYmlsZSA9IGxvYWRlckRhdGEuaXNNb2JpbGU7XG4gIGxldCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBsZXQgaWQgPSBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwiaWRcIik7XG5cbiAgY29uc3QgW2lzQ29waWVkLCBzZXRDb3BpZWRdID0gdXNlQ2xpcGJvYXJkKFxuICAgIGAke2xvYWRlckRhdGEuYmFzZVVybH0vcmVhZC8ke2lkfWAsXG4gICAge1xuICAgICAgc3VjY2Vzc0R1cmF0aW9uOiAxMDAwLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlucHV0UmVmPy5jdXJyZW50Py5mb2N1cygpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGlkWzBdKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC0xNFwiPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICBsb2FkZXJEYXRhLmlzTW9iaWxlID8gXCJ0ZXh0LWNlbnRlclwiIDogXCJ0ZXh0LWxlZnRcIlxuICAgICAgICAgICAgfSB0ZXh0LXZpb2xldC00MDBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFlvdXIgc2VjcmV0IHVybCBpczpcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NldENvcGllZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgIGxvYWRlckRhdGEuaXNNb2JpbGUgPyBcInRleHQtY2VudGVyXCIgOiBcInRleHQtbGVmdFwiXG4gICAgICAgICAgICB9ICR7aXNDb3BpZWQgPyBcInRleHQtdmlvbGV0LTcwMFwiIDogXCJ0ZXh0LXZpb2xldC00MDBcIn1gfVxuICAgICAgICAgID57YCR7bG9hZGVyRGF0YS5iYXNlVXJsfS9yZWFkLyR7aWR9YH08L3A+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17c2V0Q29waWVkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtdC01IGJnLXZpb2xldC01MDAgaG92ZXI6YmctdmlvbGV0LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci12aW9sZXQtNzAwIHJvdW5kZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFZQ0FZQUFBRGdkejM0QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQ1lFbEVRVlJJaWExVVMyZ1RVUlE5THpNcEpvWlFvNUEwWGZwZnFPakdyUnVYNGtiZFNGV3NWaXRvVzBrWElwUzY4a090YlVNYWcvV0RDQzUwb1NnS3VoSjNnaWhTd1NLdW1pYXJMaVFwVXNtN3gwV2JNVy9NVENmRkM0L0x6SnM1bi92dWZRb0I0OENScmdGbHFReEZvQVUzWGoxNU5CN2tQK1czZWZEb3NhdVdDdlVMc1NhNk5vWnRPL2VBQUtZL2ZrQzE4aE9rL05KYWo3eDk5blFvRU1HaHJ1N0R0bTFsaFV4U0JFSmk3Nzc5c093d0NJSnNYTUR2eFVXOGYvTVNJZ1FwQUZIU1dwOTk5L3I1aXpxbTNVaGdoKzNzbFV1RHlTMmJOZ0lBZXZveVdLaFdFRzlmQjVBQWx4TUJncWhXSzlpUVNDQS9laDFLS2N4OC81RWVIQnJPQTJoT0FOSUJCNERlazhjeE9YVWZuK2ZuSVNRb0FoRkNLS0FRNnhQdE9OZDlBa29wS0tXd2ZldG1rS3JURUczZ3UrcTNlOWNPNUc1ZVE2VlNXYXFuVWs0T2hVTEdjMzJSSmtySU5PQ21BTnJhMmhDUHh4MUFQL0FWQ2J3aUhBNGpGb3NaNEY2TGFORkJNeEl2OVVxcGYrcHNPdkFoQUFEYnRoR05ScjNCbTRnMEhmakMveVdKUkNKTndldlorTjQwWUZLYzZjOWdybFFHQ2FjMWhlSU1sZ2lSVGlWeEx6Zm1FTGd4ZkFrS1l5TyticlRXcU5WcURuaXpRL1ozMEpkQnNWVDJWRThLMHFrVUh1UW5HdHJVRk9FN2FJVnhmd2VOd3JUV0s1ZklUWC82d2tVVVMrWG02a0ZRaUhSSENvL3Yzb1psV1V2Z3ZnU3V1RE14R3NnQnNNb3pPSFYrQU1XNXNxRytzeU9GaDRXY0o1SC9HYmgycDdLM0Fqdnd3bWg1MEZxTndIZFIwUEMvVGY4RGdic09Cb0VJeTErL3phd2ErdE9YYVlDWWJYeG50cW5XdlpuTHc1TUEwMElhZmU5TXN3akk1UXp6RzVDeklIb2FJZjhBYXFWNXRLNkpCNzRBQUFBQVNVVk9SSzVDWUlJPVwiIC8+XG4gICAgICAgICAgICA8c3Bhbj5Db3B5IGxpbms8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgPEZvcm1cbiAgICAgICAgcmVwbGFjZVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC0xNFwiXG4gICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG0tNSAke2lzVGFibGV0T3JNb2JpbGUgPyBcInctMTEvMTJcIiA6IFwidy0xLzJcIn1gfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXtsYWJlbFN0eWxlfT5cbiAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICBtYXhMZW5ndGg9e01BWF9MRU5HVEh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2dldElucHV0U3R5bGUoZXJyb3JzPy5wYXNzd29yZCl9XG4gICAgICAgICAgICBtaW5MZW5ndGg9e01JTl9MRU5HVEh9XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDdXN0b21FcnJvciBkYXRhPXtlcnJvcnM/LnBhc3N3b3JkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtLTUgJHtpc1RhYmxldE9yTW9iaWxlID8gXCJ3LTExLzEyXCIgOiBcInctMS8yXCJ9YH0+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17bGFiZWxTdHlsZX0gaHRtbEZvcj1cInRleHRcIj5cbiAgICAgICAgICAgIFNlY3JldCB0ZXh0XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHJvd3M9ezEwfVxuICAgICAgICAgICAgbmFtZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtnZXRJbnB1dFN0eWxlKGVycm9ycz8udGV4dCl9XG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPEN1c3RvbUVycm9yIGRhdGE9e2Vycm9ycz8udGV4dH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy12aW9sZXQtNTAwIGhvdmVyOmJnLXZpb2xldC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IGJvcmRlciBib3JkZXItdmlvbGV0LTcwMCByb3VuZGVkXCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgPlxuICAgICAgICAgIENyZWF0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbUVycm9yKHtcbiAgZGF0YSxcbn06IHtcbiAgZGF0YTogeyBpZDogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfVtdIHwgdW5kZWZpbmVkO1xufSkge1xuICBpZiAoZGF0YSAmJiBBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dWw+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwbC0xIG10LTEgdGV4dC1yZWQtNTAwIHRleHQteHMgaXRhbGljXCIga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgIHtpdGVtLm1lc3NhZ2V9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImludmlzaWJsZVwiPkVycm9yIHNwYWNlPC9saT5cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaW5wdXRTdHlsZSA9XG4gIFwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtdmlvbGV0LTUwMCAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIjtcbmV4cG9ydCBjb25zdCBpbnB1dEVycm9yU3R5bGUgPVxuICBcInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LXZpb2xldC01MDAgIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCI7XG5leHBvcnQgY29uc3QgbGFiZWxTdHlsZSA9IFwiYmxvY2sgdGV4dC12aW9sZXQtNTAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldElucHV0U3R5bGUoXG4gIGRhdGE6IHsgaWQ6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH1bXSB8IHVuZGVmaW5lZFxuKSB7XG4gIGlmIChkYXRhICYmIEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGlucHV0RXJyb3JTdHlsZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW5wdXRTdHlsZTtcbiAgfVxufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOiAxLCBuYW1lOiBcIkphY2tcIiB9LFxuICAgIHsgaWQ6IDIsIG5hbWU6IFwiTWFyeVwiIH0sXG4gICAgeyBpZDogMywgbmFtZTogXCJEaWFuYVwiIH0sXG4gICAgeyBpZDogNCwgbmFtZTogXCJHZW9yZ2VcIiB9LFxuICBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8QXJyYXk8eyBpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfT4+KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5BYm91dDwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PntpdGVtLm5hbWV9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9jcmVhdGVcIik7XG59O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlYWR5KCkge1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbmF2aWdhdGUoXCIuLi9zdWNjZXNzXCIpO1xuICB9LCBbXSk7XG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7IHZpc2liaWxpdHk6IFwiaGlkZGVuXCIgfX0+bW9pPC9kaXY+O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
