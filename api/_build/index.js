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
    var client2 = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client2).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client2[k];
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

// route-module:/Users/anttilahtinen/Development/git/violet-secret/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-AVYY3YUO.css";

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

// route-module:/Users/anttilahtinen/Development/git/violet-secret/app/root.tsx
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

// route-module:/Users/anttilahtinen/Development/git/violet-secret/app/routes/read/$readid.tsx
var readid_exports = {};
__export(readid_exports, {
  action: () => action,
  default: () => Read,
  loader: () => loader
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/routes/create.tsx
init_react();

// app/db/db.ts
init_react();
var import_mongodb = __toModule(require("mongodb"));
var import_tiny_invariant = __toModule(require("tiny-invariant"));
(0, import_tiny_invariant.default)(process.env.MONGO_USER);
(0, import_tiny_invariant.default)(process.env.MONGO_PASSWORD);
var client = new import_mongodb.MongoClient(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster1.ratni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`);
async function getSecret(id) {
  try {
    const database = client.db("violetsecret");
    const secrets = database.collection("secrets");
    const query = { id };
    const secret = await secrets.findOne(query);
    console.log(secret);
    return secret;
  } catch (e) {
    console.log("-> getSecret e: ", e);
    return null;
  } finally {
    await client.close();
  }
}
async function setSecret(id, pd, text) {
  try {
    const database = client.db("violetsecret");
    const secrets = database.collection("secrets");
    const query = { id };
    const secret = await secrets.insertOne({
      id,
      pd,
      text
    });
    console.log(secret);
    return secret;
  } catch (e) {
    console.log("-> setSecret e: ", e);
  } finally {
    await client.close();
  }
}
async function removeSecret(id) {
  try {
    const database = client.db("violetsecret");
    const secrets = database.collection("secrets");
    const query = { id };
    const secret = await secrets.deleteOne({ id });
    console.log(secret);
    return secret;
  } catch (e) {
    console.log("-> removeSecret e: ", e);
  } finally {
    await client.close();
  }
}

// app/routes/create.tsx
var import_uuid = __toModule(require("uuid"));

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
var import_react = __toModule(require("react"));
var import_react_use_clipboard = __toModule(require("react-use-clipboard"));
var import_react_router_dom = __toModule(require("react-router-dom"));
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

// route-module:/Users/anttilahtinen/Development/git/violet-secret/app/routes/read/$readid.tsx
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
  const res = await getSecret(String(readId));
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
  return decryptText(password, (res == null ? void 0 : res.text) ?? "this is empty");
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

// route-module:/Users/anttilahtinen/Development/git/violet-secret/app/routes/success.tsx
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

// route-module:/Users/anttilahtinen/Development/git/violet-secret/app/routes/create.tsx
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
var import_react_router_dom2 = __toModule(require("react-router-dom"));
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
    }, "Your secret url is:"), /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ import_react3.default.createElement("p", {
      onClick: setCopied,
      className: `cursor-pointer ${loaderData.isMobile ? "text-center" : "text-left"} ${isCopied ? "text-violet-700" : "text-violet-400"}`
    }, `${loaderData.baseUrl}/read/${id}`), /* @__PURE__ */ import_react3.default.createElement(import_react_router_dom2.Link, {
      className: "ml-2 text-xl text-violet-400",
      to: `/read/${id}`
    }, "\u25BA")), /* @__PURE__ */ import_react3.default.createElement("button", {
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

// route-module:/Users/anttilahtinen/Development/git/violet-secret/app/routes/about.tsx
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

// route-module:/Users/anttilahtinen/Development/git/violet-secret/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader4
});
init_react();
var import_remix7 = __toModule(require_remix());
var loader4 = async () => {
  return (0, import_remix7.redirect)("/create");
};

// route-module:/Users/anttilahtinen/Development/git/violet-secret/app/routes/ready.tsx
var ready_exports = {};
__export(ready_exports, {
  default: () => Ready
});
init_react();
var import_react4 = __toModule(require("react"));
var import_react_router_dom3 = __toModule(require("react-router-dom"));
function Ready() {
  let navigate = (0, import_react_router_dom3.useNavigate)();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbnR0aWxhaHRpbmVuL0RldmVsb3BtZW50L2dpdC92aW9sZXQtc2VjcmV0L2FwcC9yb290LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9uYXYudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdmlvbGV0LXNlY3JldC9hcHAvcm91dGVzL3JlYWQvJHJlYWRpZC50c3giLCAiLi4vLi4vYXBwL3JvdXRlcy9jcmVhdGUudHN4IiwgIi4uLy4uL2FwcC9kYi9kYi50cyIsICIuLi8uLi9hcHAvY3J5cHRvL2luZGV4LnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdmlvbGV0LXNlY3JldC9hcHAvcm91dGVzL3N1Y2Nlc3MudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdmlvbGV0LXNlY3JldC9hcHAvcm91dGVzL2NyZWF0ZS50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbnR0aWxhaHRpbmVuL0RldmVsb3BtZW50L2dpdC92aW9sZXQtc2VjcmV0L2FwcC9yb3V0ZXMvYWJvdXQudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdmlvbGV0LXNlY3JldC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Zpb2xldC1zZWNyZXQvYXBwL3JvdXRlcy9yZWFkeS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9hbnR0aWxhaHRpbmVuL0RldmVsb3BtZW50L2dpdC92aW9sZXQtc2VjcmV0L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9hbnR0aWxhaHRpbmVuL0RldmVsb3BtZW50L2dpdC92aW9sZXQtc2VjcmV0L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdmlvbGV0LXNlY3JldC9hcHAvcm91dGVzL3JlYWQvJHJlYWRpZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Zpb2xldC1zZWNyZXQvYXBwL3JvdXRlcy9zdWNjZXNzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvYW50dGlsYWh0aW5lbi9EZXZlbG9wbWVudC9naXQvdmlvbGV0LXNlY3JldC9hcHAvcm91dGVzL2NyZWF0ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Zpb2xldC1zZWNyZXQvYXBwL3JvdXRlcy9hYm91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Zpb2xldC1zZWNyZXQvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2FudHRpbGFodGluZW4vRGV2ZWxvcG1lbnQvZ2l0L3Zpb2xldC1zZWNyZXQvYXBwL3JvdXRlcy9yZWFkeS50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL3JlYWQvJHJlYWRpZFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JlYWQvJHJlYWRpZFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInJlYWQvOnJlYWRpZFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL3N1Y2Nlc3NcIjoge1xuICAgIGlkOiBcInJvdXRlcy9zdWNjZXNzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwic3VjY2Vzc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2NyZWF0ZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2NyZWF0ZVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImNyZWF0ZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL2Fib3V0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWJvdXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJhYm91dFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9yZWFkeVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JlYWR5XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicmVhZHlcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNlxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IE5hdkxpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJWaW9sZXQgc2VjcmV0XCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgc2l6ZXM9XCIxODB4MTgwXCJcbiAgICAgICAgICBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24tMTZ4MTYucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIj48L2xpbms+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxOYXZMaXN0IC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ29pcHN1bS1sb2dvLTE1LnN2Z1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TGlzdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS0xMDAgYm9yZGVyLWdyYXktMjAwIHB4LTIgc206cHgtNCBweS0yLjVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xMCBjb250YWluZXIgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvY3JlYXRlXCIgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17TG9nb30gYWx0PVwiQ29tcGFueSBMb2dvXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTMuNVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvY3JlYXRlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBwci00IHBsLTMgdGV4dC12aW9sZXQtNTAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ3JlYXRlIHNlY3JldFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEFjdGlvbkZ1bmN0aW9uLFxuICBGb3JtLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVBhcmFtcyxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDdXN0b21FcnJvciwgZ2V0SW5wdXRTdHlsZSwgaW5wdXRTdHlsZSwgbGFiZWxTdHlsZSB9IGZyb20gXCIuLi9jcmVhdGVcIjtcbmltcG9ydCB7IGRlY3J5cHRUZXh0LCBlbmNyeXB0UGFzc3dvcmQgfSBmcm9tIFwifi9jcnlwdG9cIjtcbmltcG9ydCB7IGdldFNlY3JldCwgcmVtb3ZlU2VjcmV0IH0gZnJvbSBcIn4vZGIvZGJcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgaXNNb2JpbGUgPVxuICAgIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJ1c2VyLWFnZW50XCIpIVxuICAgICk7XG5cbiAgcmV0dXJuIGlzTW9iaWxlO1xufTtcblxudHlwZSBJQWN0aW9uVHlwZXMgPSBcInJlYWRcIiB8IFwicmVhZHlcIjtcbnR5cGUgRXJyb3JzS2V5cyA9IGtleW9mIHtcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbnR5cGUgSUdldEhzZXRBbGwgPSB7XG4gIHBkOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbn07XG5cbnR5cGUgSUN1c3RvbUVycm9yID0gUmVjb3JkPEVycm9yc0tleXMsIHsgaWQ6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH1bXT47XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpO1xuICBjb25zdCByZWFkSWQgPSBmb3JtRGF0YS5nZXQoXCJyZWFkSWRcIik7XG4gIGNvbnN0IGFjdGlvbiA9IGZvcm1EYXRhLmdldChcIl9hY3Rpb25cIikgYXMgSUFjdGlvblR5cGVzO1xuXG4gIGlmIChhY3Rpb24gPT09IFwicmVhZHlcIikge1xuICAgIHJlbW92ZVNlY3JldChyZWFkSWQgYXMgc3RyaW5nKTtcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvcmVhZHlcIik7XG4gIH1cblxuICBjb25zdCByZXMgPSBhd2FpdCBnZXRTZWNyZXQoU3RyaW5nKHJlYWRJZCkpO1xuICBjb25zb2xlLmxvZyhcIlx1RDgzRVx1REQyMSByZXM6IFwiLCByZXMpO1xuXG4gIGNvbnN0IGVycm9yczogSUN1c3RvbUVycm9yID0ge1xuICAgIHBhc3N3b3JkOiBbXSxcbiAgfTtcblxuICBpZiAoIXBhc3N3b3JkKVxuICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKHsgaWQ6IFwicmVxdWlyZWRcIiwgbWVzc2FnZTogXCJJcyByZXF1aXJlZFwiIH0pO1xuXG4gIGlmICghcmVzIHx8IGVuY3J5cHRQYXNzd29yZChwYXNzd29yZCBhcyBzdHJpbmcpICE9PSByZXMucGQpXG4gICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goe1xuICAgICAgaWQ6IFwibm90TWF0Y2hcIixcbiAgICAgIG1lc3NhZ2U6IFwicGFzc3dvcmQgZG9lcyBub3QgbWF0Y2ggb3IgdGhlcmUgaXMgbm8gc2VjcmV0IGZvciB5b3VcIixcbiAgICB9KTtcblxuICBmb3IgKGNvbnN0IFtfLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZXJyb3JzKSkge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgcmV0dXJuIGRlY3J5cHRUZXh0KHBhc3N3b3JkIGFzIHN0cmluZywgcmVzPy50ZXh0ID8/IFwidGhpcyBpcyBlbXB0eVwiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlYWQoKSB7XG4gIGxldCBpc1RhYmxldE9yTW9iaWxlID0gdXNlTG9hZGVyRGF0YTxib29sZWFuPigpO1xuXG4gIGNvbnN0IGRhdGEgPSB1c2VBY3Rpb25EYXRhPHN0cmluZyB8IElDdXN0b21FcnJvcj4oKTtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5wdXRSZWY/LmN1cnJlbnQ/LmZvY3VzKCk7XG4gIH0sIFtdKTtcblxuICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Bjb250YWluZXIgbXgtYXV0byAke1xuICAgICAgICAgIGlzVGFibGV0T3JNb2JpbGUgPyBcInctMTEvMTJcIiA6IFwidy0xLzJcIlxuICAgICAgICB9IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG10LTE0YH1cbiAgICAgID5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTMgdy1mdWxsIHRleHQtbGVmdCB0ZXh0LXZpb2xldC03MDBcIj5Zb3VyIFNlY3JldDo8L2gyPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgIHJvd3M9ezEwfVxuICAgICAgICAgIG5hbWU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2lucHV0U3R5bGV9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhfVxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICByZXBsYWNlXG4gICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtLWNlbnRlciBqdXN0aWZ5LXNlbGYtY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e3BhcmFtcy5yZWFkaWR9IG5hbWU9XCJyZWFkSWRcIiB0eXBlPVwiaGlkZGVuXCIgLz5cbiAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXtcInJlYWR5XCJ9IG5hbWU9XCJfYWN0aW9uXCIgdHlwZT1cImhpZGRlblwiIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImRlbGV0ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xNCBiZy12aW9sZXQtNTAwIGhvdmVyOmJnLXZpb2xldC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IGJvcmRlciBib3JkZXItdmlvbGV0LTcwMCByb3VuZGVkXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIERlbGV0ZSB0aGlzIHNlY3JldFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC0xNFwiPlxuICAgICAgPEZvcm1cbiAgICAgICAgcmVwbGFjZVxuICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC0xNFwiXG4gICAgICA+XG4gICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e3BhcmFtcy5yZWFkaWR9IG5hbWU9XCJyZWFkSWRcIiB0eXBlPVwiaGlkZGVuXCIgLz5cbiAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17XCJyZWFkXCJ9IG5hbWU9XCJfYWN0aW9uXCIgdHlwZT1cImhpZGRlblwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbS01ICR7aXNUYWJsZXRPck1vYmlsZSA/IFwidy0xMS8xMlwiIDogXCJ3LTEvMlwifWB9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9e2xhYmVsU3R5bGV9PlxuICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Z2V0SW5wdXRTdHlsZShcbiAgICAgICAgICAgICAgdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgPyBbXSA6IGRhdGE/LnBhc3N3b3JkXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEN1c3RvbUVycm9yIGRhdGE9e3R5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiID8gW10gOiBkYXRhPy5wYXNzd29yZH0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXZpb2xldC01MDAgaG92ZXI6YmctdmlvbGV0LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci12aW9sZXQtNzAwIHJvdW5kZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgUmVhZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBGb3JtLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVNlYXJjaFBhcmFtcyxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBzZXRTZWNyZXQgfSBmcm9tIFwiLi4vZGIvZGJcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBTZWNyZXRGb3JtRGF0YSB9IGZyb20gXCJ+L3R5cGVzXCI7XG5pbXBvcnQgeyBlbmNyeXB0UGFzc3dvcmQsIGVuY3J5cHRUZXh0IH0gZnJvbSBcIn4vY3J5cHRvXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlQ2xpcGJvYXJkIGZyb20gXCJyZWFjdC11c2UtY2xpcGJvYXJkXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxudHlwZSBFcnJvcnNLZXlzID0ga2V5b2YgU2VjcmV0Rm9ybURhdGE7XG50eXBlIEN1c3RvbUVycm9yID0gUmVjb3JkPEVycm9yc0tleXMsIHsgaWQ6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH1bXT47XG5cbmNvbnN0IE1BWF9MRU5HVEggPSAzMjtcbmNvbnN0IE1JTl9MRU5HVEggPSA1O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgaXNNb2JpbGUgPVxuICAgIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJ1c2VyLWFnZW50XCIpIVxuICAgICk7XG5cbiAgcmV0dXJuIHtcbiAgICBiYXNlVXJsOiBwcm9jZXNzLmVudi5CQVNFX1VSTCA/PyBcImh0dHA6Ly8xOTIuMTY4LjEuMTU0OjMwMDBcIixcbiAgICBpc01vYmlsZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZyB8IG51bGw7XG4gIGNvbnN0IHRleHQgPSBmb3JtRGF0YS5nZXQoXCJ0ZXh0XCIpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgY29uc3QgZXJyb3JzOiBDdXN0b21FcnJvciA9IHtcbiAgICBwYXNzd29yZDogW10sXG4gICAgdGV4dDogW10sXG4gIH07XG5cbiAgaWYgKCFwYXNzd29yZCkge1xuICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKHsgaWQ6IFwicmVxdWlyZWRcIiwgbWVzc2FnZTogXCJJcyByZXF1aXJlZFwiIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXNzd29yZD8ubGVuZ3RoIDwgTUlOX0xFTkdUSCkge1xuICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goe1xuICAgICAgICBpZDogXCJtaW5MZW5ndGhcIixcbiAgICAgICAgbWVzc2FnZTogXCJwYXNzd29yZCBpcyB0b28gc2hvcnRcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocGFzc3dvcmQ/Lmxlbmd0aCA+IE1BWF9MRU5HVEgpIHtcbiAgICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKHtcbiAgICAgICAgaWQ6IFwibWF4TGVuZ3RoXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwicGFzc3dvcmQgaXMgdG9vIGxvbmdcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAoIXRleHQpIGVycm9ycy50ZXh0LnB1c2goeyBpZDogXCJyZXF1aXJlZFwiLCBtZXNzYWdlOiBcIklzIHJlcXVpcmVkXCIgfSk7XG5cbiAgZm9yIChjb25zdCBbXywgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGVycm9ycykpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGNvbnN0IHJlYWRJZCA9IHV1aWR2NCgpO1xuXG4gIHNldFNlY3JldChcbiAgICByZWFkSWQsXG4gICAgZW5jcnlwdFBhc3N3b3JkKHBhc3N3b3JkIGFzIHN0cmluZyksXG4gICAgZW5jcnlwdFRleHQocGFzc3dvcmQhLCB0ZXh0ISlcbiAgKTtcblxuICByZXR1cm4gcmVkaXJlY3QoYC9jcmVhdGUvP2lkPSR7cmVhZElkfWApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlKCkge1xuICBsZXQgbG9hZGVyRGF0YSA9IHVzZUxvYWRlckRhdGE8eyBiYXNlVXJsOiBzdHJpbmc7IGlzTW9iaWxlOiBib29sZWFuIH0+KCk7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGE8Q3VzdG9tRXJyb3I+KCk7XG4gIGNvbnN0IGlzVGFibGV0T3JNb2JpbGUgPSBsb2FkZXJEYXRhLmlzTW9iaWxlO1xuICBsZXQgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgbGV0IGlkID0gc2VhcmNoUGFyYW1zLmdldEFsbChcImlkXCIpO1xuXG4gIGNvbnN0IFtpc0NvcGllZCwgc2V0Q29waWVkXSA9IHVzZUNsaXBib2FyZChcbiAgICBgJHtsb2FkZXJEYXRhLmJhc2VVcmx9L3JlYWQvJHtpZH1gLFxuICAgIHtcbiAgICAgIHN1Y2Nlc3NEdXJhdGlvbjogMTAwMCxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbnB1dFJlZj8uY3VycmVudD8uZm9jdXMoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChpZFswXSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTRcIj5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgbG9hZGVyRGF0YS5pc01vYmlsZSA/IFwidGV4dC1jZW50ZXJcIiA6IFwidGV4dC1sZWZ0XCJcbiAgICAgICAgICAgIH0gdGV4dC12aW9sZXQtNDAwYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBZb3VyIHNlY3JldCB1cmwgaXM6XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3NldENvcGllZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICBsb2FkZXJEYXRhLmlzTW9iaWxlID8gXCJ0ZXh0LWNlbnRlclwiIDogXCJ0ZXh0LWxlZnRcIlxuICAgICAgICAgICAgICB9ICR7aXNDb3BpZWQgPyBcInRleHQtdmlvbGV0LTcwMFwiIDogXCJ0ZXh0LXZpb2xldC00MDBcIn1gfVxuICAgICAgICAgICAgPntgJHtsb2FkZXJEYXRhLmJhc2VVcmx9L3JlYWQvJHtpZH1gfTwvcD5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17XCJtbC0yIHRleHQteGwgdGV4dC12aW9sZXQtNDAwXCJ9IHRvPXtgL3JlYWQvJHtpZH1gfT5cbiAgICAgICAgICAgICAgXHUyNUJBXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtzZXRDb3BpZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG10LTUgYmctdmlvbGV0LTUwMCBob3ZlcjpiZy12aW9sZXQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXZpb2xldC03MDAgcm91bmRlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVlDQVlBQUFEZ2R6MzRBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDWUVsRVFWUklpYTFVUzJnVFVSUTlMek1wSm9aUW81QTBYZnBmcU9qR3JSdVg0a2JkU0ZXc1ZpdG9XMGtYSXBTNjhrT3RiVU1hZy9XRENDNTBvU2dLdWhKM2dpaFN3U0t1bWlhckxpUXBVc203eDBXYk1XL01UQ2ZGQzQvTHpKczVuL3Z1ZlFvQjQ4Q1JyZ0ZscVF4Rm9BVTNYajE1TkI3a1ArVzNlZkRvc2F1V0N2VUxzU2E2Tm9adE8vZUFBS1kvZmtDMThoT2svTkphajd4OTluUW9FTUdocnU3RHRtMWxoVXhTQkVKaTc3NzlzT3d3Q0lKc1hNRHZ4VVc4Zi9NU0lnUXBBRkhTV3A5OTkvcjVpenFtM1VoZ2grM3NsVXVEeVMyYk5nSUFldm95V0toV0VHOWZCNUFBbHhNQmdxaFdLOWlRU0NBL2VoMUtLY3g4LzVFZUhCck9BMmhPQU5JQkI0RGVrOGN4T1hVZm4rZm5JU1FvQWhGQ0tLQVE2eFB0T05kOUFrb3BLS1d3ZmV0bWtLclRFRzNndStxM2U5Y081RzVlUTZWU1dhcW5VazRPaFVMR2MzMlJKa3JJTk9DbUFOcmEyaENQeHgxQVAvQVZDYndpSEE0akZvc1o0RjZMYU5GQk14SXY5VXFwZitwc092QWhBQURidGhHTlJyM0JtNGcwSGZqQy95V0pSQ0pOd2V2WitONDBZRktjNmM5Z3JsUUdDYWMxaGVJTWxnaVJUaVZ4THpmbUVMZ3hmQWtLWXlPK2JyVFdxTlZxRG5pelEvWjMwSmRCc1ZUMlZFOEswcWtVSHVRbkd0clVGT0U3YUlWeGZ3ZU53clRXSzVmSVRYLzZ3a1VVUytYbTZrRlFpSFJIQ28vdjNvWmxXVXZndmdTdXVETXhHc2dCc01vek9IVitBTVc1c3FHK3N5T0ZoNFdjSjVIL0diaDJwN0szQWp2d3dtaDUwRnFOd0hkUjBQQy9UZjhEZ2JzT0JvRUl5MSsvemF3YSt0T1hhWUNZYlh4bnRxbld2Wm5MdzVNQTAwSWFmZTlNc3dqSTVRenpHNUN6SUhvYUlmOEFhcVY1dEs2SkI3NEFBQUFBU1VWT1JLNUNZSUk9XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkNvcHkgbGluazwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICA8Rm9ybVxuICAgICAgICByZXBsYWNlXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTE0XCJcbiAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbS01ICR7aXNUYWJsZXRPck1vYmlsZSA/IFwidy0xMS8xMlwiIDogXCJ3LTEvMlwifWB9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9e2xhYmVsU3R5bGV9PlxuICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICAgIG1heExlbmd0aD17TUFYX0xFTkdUSH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Z2V0SW5wdXRTdHlsZShlcnJvcnM/LnBhc3N3b3JkKX1cbiAgICAgICAgICAgIG1pbkxlbmd0aD17TUlOX0xFTkdUSH1cbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEN1c3RvbUVycm9yIGRhdGE9e2Vycm9ycz8ucGFzc3dvcmR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG0tNSAke2lzVGFibGV0T3JNb2JpbGUgPyBcInctMTEvMTJcIiA6IFwidy0xLzJcIn1gfT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtsYWJlbFN0eWxlfSBodG1sRm9yPVwidGV4dFwiPlxuICAgICAgICAgICAgU2VjcmV0IHRleHRcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgICBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2dldElucHV0U3R5bGUoZXJyb3JzPy50ZXh0KX1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8Q3VzdG9tRXJyb3IgZGF0YT17ZXJyb3JzPy50ZXh0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXZpb2xldC01MDAgaG92ZXI6YmctdmlvbGV0LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci12aW9sZXQtNzAwIHJvdW5kZWRcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICA+XG4gICAgICAgICAgQ3JlYXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tRXJyb3Ioe1xuICBkYXRhLFxufToge1xuICBkYXRhOiB7IGlkOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9W10gfCB1bmRlZmluZWQ7XG59KSB7XG4gIGlmIChkYXRhICYmIEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBsLTEgbXQtMSB0ZXh0LXJlZC01MDAgdGV4dC14cyBpdGFsaWNcIiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAge2l0ZW0ubWVzc2FnZX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW52aXNpYmxlXCI+RXJyb3Igc3BhY2U8L2xpPlxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBpbnB1dFN0eWxlID1cbiAgXCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC12aW9sZXQtNTAwICBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiO1xuZXhwb3J0IGNvbnN0IGlucHV0RXJyb3JTdHlsZSA9XG4gIFwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLXJlZC01MDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtdmlvbGV0LTUwMCAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIjtcbmV4cG9ydCBjb25zdCBsYWJlbFN0eWxlID0gXCJibG9jayB0ZXh0LXZpb2xldC01MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXRTdHlsZShcbiAgZGF0YTogeyBpZDogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfVtdIHwgdW5kZWZpbmVkXG4pIHtcbiAgaWYgKGRhdGEgJiYgQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4gaW5wdXRFcnJvclN0eWxlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpbnB1dFN0eWxlO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW52YXJpYW50KHByb2Nlc3MuZW52Lk1PTkdPX1VTRVIpO1xuaW52YXJpYW50KHByb2Nlc3MuZW52Lk1PTkdPX1BBU1NXT1JEKTtcbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChcbiAgYG1vbmdvZGIrc3J2Oi8vJHtwcm9jZXNzLmVudi5NT05HT19VU0VSfToke3Byb2Nlc3MuZW52Lk1PTkdPX1BBU1NXT1JEfUBjbHVzdGVyMS5yYXRuaS5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JmFwcE5hbWU9Q2x1c3RlcjFgXG4pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VjcmV0KGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhYmFzZSA9IGNsaWVudC5kYihcInZpb2xldHNlY3JldFwiKTtcbiAgICBjb25zdCBzZWNyZXRzID0gZGF0YWJhc2UuY29sbGVjdGlvbihcInNlY3JldHNcIik7XG5cbiAgICBjb25zdCBxdWVyeSA9IHsgaWQ6IGlkIH07XG4gICAgY29uc3Qgc2VjcmV0ID0gYXdhaXQgc2VjcmV0cy5maW5kT25lPHsgcGQ6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0+KHF1ZXJ5KTtcbiAgICBjb25zb2xlLmxvZyhzZWNyZXQpO1xuXG4gICAgcmV0dXJuIHNlY3JldDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiLT4gZ2V0U2VjcmV0IGU6IFwiLCBlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBFbnN1cmVzIHRoYXQgdGhlIGNsaWVudCB3aWxsIGNsb3NlIHdoZW4geW91IGZpbmlzaC9lcnJvclxuICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRTZWNyZXQoaWQ6IHN0cmluZywgcGQ6IHN0cmluZywgdGV4dDogc3RyaW5nKSB7XG4gIC8vIGNhY2hlLnB1dChpZCwgSlNPTi5zdHJpbmdpZnkoeyBwZCwgdGV4dCB9KSk7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YWJhc2UgPSBjbGllbnQuZGIoXCJ2aW9sZXRzZWNyZXRcIik7XG4gICAgY29uc3Qgc2VjcmV0cyA9IGRhdGFiYXNlLmNvbGxlY3Rpb24oXCJzZWNyZXRzXCIpO1xuXG4gICAgY29uc3QgcXVlcnkgPSB7IGlkOiBpZCB9O1xuICAgIGNvbnN0IHNlY3JldCA9IGF3YWl0IHNlY3JldHMuaW5zZXJ0T25lKHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHBkOiBwZCxcbiAgICAgIHRleHQsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coc2VjcmV0KTtcbiAgICByZXR1cm4gc2VjcmV0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coXCItPiBzZXRTZWNyZXQgZTogXCIsIGUpO1xuICB9IGZpbmFsbHkge1xuICAgIC8vIEVuc3VyZXMgdGhhdCB0aGUgY2xpZW50IHdpbGwgY2xvc2Ugd2hlbiB5b3UgZmluaXNoL2Vycm9yXG4gICAgYXdhaXQgY2xpZW50LmNsb3NlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZVNlY3JldChpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YWJhc2UgPSBjbGllbnQuZGIoXCJ2aW9sZXRzZWNyZXRcIik7XG4gICAgY29uc3Qgc2VjcmV0cyA9IGRhdGFiYXNlLmNvbGxlY3Rpb24oXCJzZWNyZXRzXCIpO1xuXG4gICAgY29uc3QgcXVlcnkgPSB7IGlkOiBpZCB9O1xuICAgIGNvbnN0IHNlY3JldCA9IGF3YWl0IHNlY3JldHMuZGVsZXRlT25lKHsgaWQ6IGlkIH0pO1xuICAgIGNvbnNvbGUubG9nKHNlY3JldCk7XG4gICAgcmV0dXJuIHNlY3JldDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiLT4gcmVtb3ZlU2VjcmV0IGU6IFwiLCBlKTtcbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBFbnN1cmVzIHRoYXQgdGhlIGNsaWVudCB3aWxsIGNsb3NlIHdoZW4geW91IGZpbmlzaC9lcnJvclxuICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xuICB9XG59XG4iLCAiaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCBDcnlwdG9KUyBmcm9tIFwiY3J5cHRvLWpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNyeXB0VGV4dChwYXNzd29yZDogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpIHtcbiAgcmV0dXJuIENyeXB0b0pTLkFFUy5lbmNyeXB0KHRleHQsIHBhc3N3b3JkKS50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjcnlwdFRleHQocGFzc3dvcmQ6IHN0cmluZywgdGV4dDogc3RyaW5nKSB7XG4gIGNvbnN0IGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dCwgcGFzc3dvcmQpO1xuICByZXR1cm4gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jcnlwdFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgaW52YXJpYW50KHByb2Nlc3MuZW52LlNFQ1JFVF9LRVksIFwicHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSBpcyByZXF1aXJlZFwiKTtcbiAgY29uc3Qga2V5NTEyQml0cyA9IENyeXB0b0pTLlBCS0RGMihwYXNzd29yZCwgcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSwge1xuICAgIGtleVNpemU6IDUxMiAvIDMyLFxuICB9KTtcbiAgcmV0dXJuIGtleTUxMkJpdHMudG9TdHJpbmcoKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWNjZXNzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gdy0xLzIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXQtMTRcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9e2B0ZXh0LXZpb2xldC00MDAgdGV4dC1jZW50ZXJgfT5cbiAgICAgICAgWW91ciBzZWNyZXQgaGFzIGJlZW4gZXJhc2VkIGZyb20gdGhlIGRhdGFiYXNlIVxuICAgICAgPC9oMj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBGb3JtLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVNlYXJjaFBhcmFtcyxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBzZXRTZWNyZXQgfSBmcm9tIFwiLi4vZGIvZGJcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBTZWNyZXRGb3JtRGF0YSB9IGZyb20gXCJ+L3R5cGVzXCI7XG5pbXBvcnQgeyBlbmNyeXB0UGFzc3dvcmQsIGVuY3J5cHRUZXh0IH0gZnJvbSBcIn4vY3J5cHRvXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlQ2xpcGJvYXJkIGZyb20gXCJyZWFjdC11c2UtY2xpcGJvYXJkXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxudHlwZSBFcnJvcnNLZXlzID0ga2V5b2YgU2VjcmV0Rm9ybURhdGE7XG50eXBlIEN1c3RvbUVycm9yID0gUmVjb3JkPEVycm9yc0tleXMsIHsgaWQ6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH1bXT47XG5cbmNvbnN0IE1BWF9MRU5HVEggPSAzMjtcbmNvbnN0IE1JTl9MRU5HVEggPSA1O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgaXNNb2JpbGUgPVxuICAgIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJ1c2VyLWFnZW50XCIpIVxuICAgICk7XG5cbiAgcmV0dXJuIHtcbiAgICBiYXNlVXJsOiBwcm9jZXNzLmVudi5CQVNFX1VSTCA/PyBcImh0dHA6Ly8xOTIuMTY4LjEuMTU0OjMwMDBcIixcbiAgICBpc01vYmlsZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZyB8IG51bGw7XG4gIGNvbnN0IHRleHQgPSBmb3JtRGF0YS5nZXQoXCJ0ZXh0XCIpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgY29uc3QgZXJyb3JzOiBDdXN0b21FcnJvciA9IHtcbiAgICBwYXNzd29yZDogW10sXG4gICAgdGV4dDogW10sXG4gIH07XG5cbiAgaWYgKCFwYXNzd29yZCkge1xuICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKHsgaWQ6IFwicmVxdWlyZWRcIiwgbWVzc2FnZTogXCJJcyByZXF1aXJlZFwiIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXNzd29yZD8ubGVuZ3RoIDwgTUlOX0xFTkdUSCkge1xuICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goe1xuICAgICAgICBpZDogXCJtaW5MZW5ndGhcIixcbiAgICAgICAgbWVzc2FnZTogXCJwYXNzd29yZCBpcyB0b28gc2hvcnRcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocGFzc3dvcmQ/Lmxlbmd0aCA+IE1BWF9MRU5HVEgpIHtcbiAgICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKHtcbiAgICAgICAgaWQ6IFwibWF4TGVuZ3RoXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwicGFzc3dvcmQgaXMgdG9vIGxvbmdcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAoIXRleHQpIGVycm9ycy50ZXh0LnB1c2goeyBpZDogXCJyZXF1aXJlZFwiLCBtZXNzYWdlOiBcIklzIHJlcXVpcmVkXCIgfSk7XG5cbiAgZm9yIChjb25zdCBbXywgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGVycm9ycykpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGNvbnN0IHJlYWRJZCA9IHV1aWR2NCgpO1xuXG4gIHNldFNlY3JldChcbiAgICByZWFkSWQsXG4gICAgZW5jcnlwdFBhc3N3b3JkKHBhc3N3b3JkIGFzIHN0cmluZyksXG4gICAgZW5jcnlwdFRleHQocGFzc3dvcmQhLCB0ZXh0ISlcbiAgKTtcblxuICByZXR1cm4gcmVkaXJlY3QoYC9jcmVhdGUvP2lkPSR7cmVhZElkfWApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlKCkge1xuICBsZXQgbG9hZGVyRGF0YSA9IHVzZUxvYWRlckRhdGE8eyBiYXNlVXJsOiBzdHJpbmc7IGlzTW9iaWxlOiBib29sZWFuIH0+KCk7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGE8Q3VzdG9tRXJyb3I+KCk7XG4gIGNvbnN0IGlzVGFibGV0T3JNb2JpbGUgPSBsb2FkZXJEYXRhLmlzTW9iaWxlO1xuICBsZXQgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgbGV0IGlkID0gc2VhcmNoUGFyYW1zLmdldEFsbChcImlkXCIpO1xuXG4gIGNvbnN0IFtpc0NvcGllZCwgc2V0Q29waWVkXSA9IHVzZUNsaXBib2FyZChcbiAgICBgJHtsb2FkZXJEYXRhLmJhc2VVcmx9L3JlYWQvJHtpZH1gLFxuICAgIHtcbiAgICAgIHN1Y2Nlc3NEdXJhdGlvbjogMTAwMCxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbnB1dFJlZj8uY3VycmVudD8uZm9jdXMoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChpZFswXSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTRcIj5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgbG9hZGVyRGF0YS5pc01vYmlsZSA/IFwidGV4dC1jZW50ZXJcIiA6IFwidGV4dC1sZWZ0XCJcbiAgICAgICAgICAgIH0gdGV4dC12aW9sZXQtNDAwYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBZb3VyIHNlY3JldCB1cmwgaXM6XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3NldENvcGllZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICBsb2FkZXJEYXRhLmlzTW9iaWxlID8gXCJ0ZXh0LWNlbnRlclwiIDogXCJ0ZXh0LWxlZnRcIlxuICAgICAgICAgICAgICB9ICR7aXNDb3BpZWQgPyBcInRleHQtdmlvbGV0LTcwMFwiIDogXCJ0ZXh0LXZpb2xldC00MDBcIn1gfVxuICAgICAgICAgICAgPntgJHtsb2FkZXJEYXRhLmJhc2VVcmx9L3JlYWQvJHtpZH1gfTwvcD5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17XCJtbC0yIHRleHQteGwgdGV4dC12aW9sZXQtNDAwXCJ9IHRvPXtgL3JlYWQvJHtpZH1gfT5cbiAgICAgICAgICAgICAgXHUyNUJBXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtzZXRDb3BpZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG10LTUgYmctdmlvbGV0LTUwMCBob3ZlcjpiZy12aW9sZXQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXZpb2xldC03MDAgcm91bmRlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVlDQVlBQUFEZ2R6MzRBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDWUVsRVFWUklpYTFVUzJnVFVSUTlMek1wSm9aUW81QTBYZnBmcU9qR3JSdVg0a2JkU0ZXc1ZpdG9XMGtYSXBTNjhrT3RiVU1hZy9XRENDNTBvU2dLdWhKM2dpaFN3U0t1bWlhckxpUXBVc203eDBXYk1XL01UQ2ZGQzQvTHpKczVuL3Z1ZlFvQjQ4Q1JyZ0ZscVF4Rm9BVTNYajE1TkI3a1ArVzNlZkRvc2F1V0N2VUxzU2E2Tm9adE8vZUFBS1kvZmtDMThoT2svTkphajd4OTluUW9FTUdocnU3RHRtMWxoVXhTQkVKaTc3NzlzT3d3Q0lKc1hNRHZ4VVc4Zi9NU0lnUXBBRkhTV3A5OTkvcjVpenFtM1VoZ2grM3NsVXVEeVMyYk5nSUFldm95V0toV0VHOWZCNUFBbHhNQmdxaFdLOWlRU0NBL2VoMUtLY3g4LzVFZUhCck9BMmhPQU5JQkI0RGVrOGN4T1hVZm4rZm5JU1FvQWhGQ0tLQVE2eFB0T05kOUFrb3BLS1d3ZmV0bWtLclRFRzNndStxM2U5Y081RzVlUTZWU1dhcW5VazRPaFVMR2MzMlJKa3JJTk9DbUFOcmEyaENQeHgxQVAvQVZDYndpSEE0akZvc1o0RjZMYU5GQk14SXY5VXFwZitwc092QWhBQURidGhHTlJyM0JtNGcwSGZqQy95V0pSQ0pOd2V2WitONDBZRktjNmM5Z3JsUUdDYWMxaGVJTWxnaVJUaVZ4THpmbUVMZ3hmQWtLWXlPK2JyVFdxTlZxRG5pelEvWjMwSmRCc1ZUMlZFOEswcWtVSHVRbkd0clVGT0U3YUlWeGZ3ZU53clRXSzVmSVRYLzZ3a1VVUytYbTZrRlFpSFJIQ28vdjNvWmxXVXZndmdTdXVETXhHc2dCc01vek9IVitBTVc1c3FHK3N5T0ZoNFdjSjVIL0diaDJwN0szQWp2d3dtaDUwRnFOd0hkUjBQQy9UZjhEZ2JzT0JvRUl5MSsvemF3YSt0T1hhWUNZYlh4bnRxbld2Wm5MdzVNQTAwSWFmZTlNc3dqSTVRenpHNUN6SUhvYUlmOEFhcVY1dEs2SkI3NEFBQUFBU1VWT1JLNUNZSUk9XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkNvcHkgbGluazwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICA8Rm9ybVxuICAgICAgICByZXBsYWNlXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTE0XCJcbiAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbS01ICR7aXNUYWJsZXRPck1vYmlsZSA/IFwidy0xMS8xMlwiIDogXCJ3LTEvMlwifWB9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9e2xhYmVsU3R5bGV9PlxuICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICAgIG1heExlbmd0aD17TUFYX0xFTkdUSH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Z2V0SW5wdXRTdHlsZShlcnJvcnM/LnBhc3N3b3JkKX1cbiAgICAgICAgICAgIG1pbkxlbmd0aD17TUlOX0xFTkdUSH1cbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEN1c3RvbUVycm9yIGRhdGE9e2Vycm9ycz8ucGFzc3dvcmR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG0tNSAke2lzVGFibGV0T3JNb2JpbGUgPyBcInctMTEvMTJcIiA6IFwidy0xLzJcIn1gfT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtsYWJlbFN0eWxlfSBodG1sRm9yPVwidGV4dFwiPlxuICAgICAgICAgICAgU2VjcmV0IHRleHRcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgICBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2dldElucHV0U3R5bGUoZXJyb3JzPy50ZXh0KX1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8Q3VzdG9tRXJyb3IgZGF0YT17ZXJyb3JzPy50ZXh0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXZpb2xldC01MDAgaG92ZXI6YmctdmlvbGV0LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci12aW9sZXQtNzAwIHJvdW5kZWRcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICA+XG4gICAgICAgICAgQ3JlYXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tRXJyb3Ioe1xuICBkYXRhLFxufToge1xuICBkYXRhOiB7IGlkOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9W10gfCB1bmRlZmluZWQ7XG59KSB7XG4gIGlmIChkYXRhICYmIEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBsLTEgbXQtMSB0ZXh0LXJlZC01MDAgdGV4dC14cyBpdGFsaWNcIiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAge2l0ZW0ubWVzc2FnZX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW52aXNpYmxlXCI+RXJyb3Igc3BhY2U8L2xpPlxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBpbnB1dFN0eWxlID1cbiAgXCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC12aW9sZXQtNTAwICBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiO1xuZXhwb3J0IGNvbnN0IGlucHV0RXJyb3JTdHlsZSA9XG4gIFwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLXJlZC01MDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtdmlvbGV0LTUwMCAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIjtcbmV4cG9ydCBjb25zdCBsYWJlbFN0eWxlID0gXCJibG9jayB0ZXh0LXZpb2xldC01MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXRTdHlsZShcbiAgZGF0YTogeyBpZDogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfVtdIHwgdW5kZWZpbmVkXG4pIHtcbiAgaWYgKGRhdGEgJiYgQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4gaW5wdXRFcnJvclN0eWxlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpbnB1dFN0eWxlO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyKCkge1xuICByZXR1cm4gW1xuICAgIHsgaWQ6IDEsIG5hbWU6IFwiSmFja1wiIH0sXG4gICAgeyBpZDogMiwgbmFtZTogXCJNYXJ5XCIgfSxcbiAgICB7IGlkOiAzLCBuYW1lOiBcIkRpYW5hXCIgfSxcbiAgICB7IGlkOiA0LCBuYW1lOiBcIkdlb3JnZVwiIH0sXG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxBcnJheTx7IGlkOiBudW1iZXI7IG5hbWU6IHN0cmluZyB9Pj4oKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkFib3V0PC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2NyZWF0ZVwiKTtcbn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVhZHkoKSB7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBuYXZpZ2F0ZShcIi4uL3N1Y2Nlc3NcIik7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiB9fT5tb2k8L2Rpdj47XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdB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
