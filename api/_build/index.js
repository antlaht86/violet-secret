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
var tailwind_default = "/build/_assets/tailwind-33AIAJTJ.css";

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
  return { title: "New Remix App" };
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
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(NavList, null), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), false));
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
var import_ioredis = __toModule(require("ioredis"));
var import_tiny_invariant = __toModule(require("tiny-invariant"));
var redis = new import_ioredis.default(process.env.REDIS_URL);
async function getSecret(id) {
  const promise = redis.hgetall(id, (err, result) => {
    if (err) {
      console.error(err);
      return null;
    } else {
      return result;
    }
  });
  return promise;
}
async function setSecret(id, pd, text) {
  const promise = redis.hset(id, ["password", pd, "text", text], (err, result) => {
    if (err) {
      console.error(err);
      return null;
    } else {
      return result;
    }
  });
  return promise;
}
async function removeSecret(id) {
  (0, import_tiny_invariant.default)(id, "id is required");
  const promise = redis.hdel(id, ["password", "text"], (err, result) => {
    if (err) {
      console.error(err);
      return null;
    } else {
      return result;
    }
  });
  return promise;
}

// app/crypto/index.ts
init_react();
var import_tiny_invariant2 = __toModule(require("tiny-invariant"));
var import_crypto_js = __toModule(require("crypto-js"));
function encryptText(password, text) {
  return import_crypto_js.default.AES.encrypt(text, password).toString();
}
function decryptText(password, text) {
  const bytes = import_crypto_js.default.AES.decrypt(text, password);
  return bytes.toString(import_crypto_js.default.enc.Utf8);
}
function encryptPassword(password) {
  (0, import_tiny_invariant2.default)(process.env.SECRET_KEY, "process.env.SECRET_KEY is required");
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
    await removeSecret(readId);
    return (0, import_remix4.redirect)("/ready");
  }
  const res = await getSecret(String(readId));
  const errors = {
    password: []
  };
  if (!password)
    errors.password.push({ id: "required", message: "Is required" });
  if (encryptPassword(password) !== res.password)
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
    }), /* @__PURE__ */ import_react2.default.createElement("form", {
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
  }, /* @__PURE__ */ import_react2.default.createElement("form", {
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
  await setSecret(readId, encryptPassword(password), encryptText(password, text));
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
    }, "Your secret url is:", " "), /* @__PURE__ */ import_react3.default.createElement("p", {
      onClick: setCopied,
      className: `cursor-pointer ${loaderData.isMobile ? "text-center" : "text-left"} ${isCopied ? "text-violet-700" : "text-violet-400"}`
    }, `${loaderData.baseUrl}/read/${id}`)));
  }
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ import_react3.default.createElement("form", {
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
