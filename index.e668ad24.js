// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dfsH9":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "710c6a17e668ad24";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3LleC":[function(require,module,exports) {
let currPage = 1;
const productsPerPage = 24;
const totalProducts = 461;
const totalPages = Math.ceil(totalProducts / productsPerPage);
const storedCart = localStorage.getItem("cart");
const cart = storedCart ? JSON.parse(storedCart) : [];
function updateCart(product, quantity) {
    const existingItemIndex = cart.findIndex((item)=>item.id === product.id);
    if (existingItemIndex !== -1) cart[existingItemIndex].quantity += quantity;
    else cart.push({
        id: product.id,
        title: product.title,
        image: product.images[0]?.src || "https://cdn.shopify.com/s/files/1/0690/0075/7529/products/5196c9302b12ec8d50d0e700e2865c2a.png?v=1694603298",
        price: product.variants[0].price,
        quantity
    });
    localStorage.setItem("cart", JSON.stringify(cart));
}
async function fetchProducts(page) {
    const BASE_URL = `https://voodoo-sandbox.myshopify.com/products.json?limit=${productsPerPage}&page=${page}`;
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.products;
}
function createProduct(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("w-72", "h-max", "m-4", "rounded", "mt-12");
    const productImage = document.createElement("img");
    productImage.classList.add("w-72", "h-72", "border", "border-black", "rounded", "relative", "mb-2", "object-cover");
    productImage.setAttribute("alt", "Product Image");
    if (product.images.length > 0) productImage.setAttribute("src", product.images[0].src);
    else productImage.setAttribute("src", "https://cdn.shopify.com/s/files/1/0690/0075/7529/products/5196c9302b12ec8d50d0e700e2865c2a.png?v=1694603298");
    const productSource = document.createElement("div");
    productSource.classList.add("bg-black", "text-sm", "font-space", "text-white", "uppercase", "absolute", "m-3", "rounded", "block", "p-2", "z-10");
    productSource.textContent = "Used";
    const firstLine = document.createElement("div");
    firstLine.classList.add("flex", "justify-between");
    const productName = document.createElement("p");
    productName.classList.add("font-bold", "text-black", "text-sm", "capitalize");
    productName.textContent = product.title;
    const productCondition = document.createElement("p");
    productCondition.classList.add("text-sm", "font-bold", "text-black");
    productCondition.textContent = "Condition";
    const secondLine = document.createElement("div");
    secondLine.classList.add("flex", "justify-between");
    const productPrice = document.createElement("p");
    productPrice.classList.add("font-bold", "text-black", "text-sm");
    productPrice.textContent = product.variants[0].price;
    const productDescription = document.createElement("p");
    productDescription.classList.add("text-sm", "text-black");
    productDescription.textContent = "Slightly used";
    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("bg-black", "text-white", "w-full", "my-4", "p-4", "hover:bg-gray-900");
    addToCartButton.textContent = "Add to cart";
    addToCartButton.setAttribute("id", `button-${product.id}`);
    addToCartButton.addEventListener("click", ()=>{
        updateCart(product, 1);
        addToCartButton.textContent = "Added to cart";
        addToCartButton.classList.remove("bg-black");
        addToCartButton.classList.add("bg-gray-300");
        addToCartButton.disabled = true;
        renderCartProducts();
        getTotalPrice();
    });
    firstLine.appendChild(productName, productCondition);
    firstLine.appendChild(productCondition);
    secondLine.appendChild(productPrice, productDescription);
    secondLine.appendChild(productDescription);
    productCard.appendChild(productSource);
    productCard.appendChild(productImage);
    productCard.appendChild(firstLine);
    productCard.appendChild(secondLine);
    productCard.appendChild(addToCartButton);
    const container = document.getElementById("products");
    container.appendChild(productCard);
}
function getPageNumbers(pageCount, currentPage, visiblePages) {
    const pages = [];
    if (pageCount <= visiblePages) for(let i = 1; i < pageCount; i++)pages.push(i);
    else {
        const halfVisiblePages = Math.floor(visiblePages / 2);
        if (currentPage <= halfVisiblePages + 1) {
            for(let i = 1; i <= visiblePages - 1; i++)pages.push(i);
            pages.push("...");
            pages.push(pageCount);
        } else if (currentPage >= pageCount - halfVisiblePages) {
            pages.push(1);
            pages.push("...");
            for(let i = pageCount - visiblePages + 2; i <= pageCount; i++)pages.push(i);
        } else {
            pages.push(1);
            pages.push("...");
            for(let i = currentPage - halfVisiblePages + 1; i <= currentPage + halfVisiblePages - 1; i++)pages.push(i);
            pages.push("...");
            pages.push(pageCount);
        }
    }
    return pages;
}
function renderPagination() {
    const paginationContainer = document.createElement("div");
    paginationContainer.classList.add("flex", "gap-4", "content-center");
    const maxVisiblePages = 5;
    const pageNumbers = getPageNumbers(totalPages, currPage, maxVisiblePages);
    pageNumbers.forEach((page)=>{
        const pageButton = document.createElement("button");
        pageButton.textContent = page;
        pageButton.classList.add("w-10", "h-10", "rounded-full", "border", "border-black");
        if (currPage === page) pageButton.classList.add("bg-gray-900", "text-white");
        else pageButton.classList.remove("bg-gray-900", "text-white");
        if (page === "...") {
            pageButton.disabled = true;
            pageButton.classList.add("pointer-events-none");
        } else pageButton.addEventListener("click", ()=>{
            currPage = page;
            fetchProducts(currPage).then((products)=>{
                const container = document.getElementById("products");
                container.innerHTML = "";
                products.forEach((product)=>{
                    createProduct(product);
                });
            });
            renderPagination();
        });
        paginationContainer.appendChild(pageButton);
    });
    const container = document.getElementById("pagination");
    container.innerHTML = "";
    container.appendChild(paginationContainer);
}
fetchProducts(currPage).then((products)=>{
    return products.forEach((product)=>{
        createProduct(product);
    });
}).then(()=>{
    renderPagination();
});
function handleOpenCart() {
    const asideCart = document.querySelector("aside");
    asideCart.classList.remove("translate-x-full");
    asideCart.classList.remove("w-0");
    asideCart.classList.add("w-96");
}
function handleCloseCart() {
    const asideCart = document.querySelector("aside");
    asideCart.classList.add("translate-x-full");
    asideCart.classList.add("w-0");
    asideCart.classList.remove("w-96");
}
function handleOpenInfo() {
    const info = document.getElementById("info");
    const openButton = document.getElementById("more-info");
    openButton.classList.toggle("hidden");
    const closeButton = document.getElementById("less-info");
    closeButton.classList.toggle("hidden");
    info.classList.toggle("hidden");
}
const closeCartButton = document.getElementById("close");
const openCartButton = document.getElementById("cart");
const openInfoButton = document.getElementById("more-info");
const closeInfoButton = document.getElementById("less-info");
openCartButton.addEventListener("click", handleOpenCart);
closeCartButton.addEventListener("click", handleCloseCart);
openInfoButton.addEventListener("click", handleOpenInfo);
closeInfoButton.addEventListener("click", handleOpenInfo);
function removeItem(id) {
    const index = cart.findIndex((item)=>item.id === id);
    if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCartProducts();
        getTotalPrice();
    }
    const prodBtn = document.getElementById(`button-${id}`);
    prodBtn.textContent = "Add to cart";
    prodBtn.classList.add("bg-black");
    prodBtn.classList.remove("bg-gray-300");
    prodBtn.disabled = false;
}
function renderCartProducts() {
    const cartContainer = document.getElementById("cart-products");
    cartContainer.innerHTML = "";
    cart.forEach((item)=>{
        const cartItem = document.createElement("div");
        cartItem.classList.add("flex", "flex-row", "justify-between", "mt-4");
        const info = document.createElement("div");
        info.classList.add("flex", "flex-row");
        const image = document.createElement("img");
        image.classList.add("w-20", "h-20", "rounded");
        if (item.image) image.setAttribute("src", item.image);
        else image.setAttribute("src", "https://cdn.shopify.com/s/files/1/0690/0075/7529/products/5196c9302b12ec8d50d0e700e2865c2a.png?v=1694603298");
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("flex", "flex-col", "ml-3", "mb-3");
        const amount = document.createElement("p");
        amount.classList.add("text-white", "font-bold", "mr-2");
        amount.setAttribute("id", `amount-${item.id}`);
        amount.textContent = item.quantity;
        const itemName = document.createElement("h3");
        itemName.classList.add("text-md", "font-bold", "text-white");
        itemName.textContent = item.title;
        const itemPrice = document.createElement("p");
        itemPrice.classList.add("text-md", "font-bold", "text-white");
        itemPrice.textContent = +item.price;
        itemPrice.setAttribute("id", `price-${item.id}`);
        const amountDiv = document.createElement("div");
        amountDiv.classList.add("flex", "flex-row");
        const decreaseAmountBtn = document.createElement("button");
        decreaseAmountBtn.classList.add("text-white", "mr-2");
        decreaseAmountBtn.textContent = "-";
        decreaseAmountBtn.addEventListener("click", ()=>{
            if (item.quantity > 1) {
                updateCart(item, -1);
                renderCartProducts();
                getTotalPrice();
            }
        });
        const increaseAmountBtn = document.createElement("button");
        increaseAmountBtn.classList.add("text-white");
        increaseAmountBtn.textContent = "+";
        increaseAmountBtn.addEventListener("click", ()=>{
            updateCart(item, 1);
            renderCartProducts();
            getTotalPrice();
        });
        amountDiv.appendChild(decreaseAmountBtn);
        amountDiv.appendChild(amount);
        amountDiv.appendChild(increaseAmountBtn);
        infoDiv.appendChild(itemName);
        infoDiv.appendChild(itemPrice);
        infoDiv.appendChild(amountDiv);
        info.appendChild(image);
        info.appendChild(infoDiv);
        const removeButton = document.createElement("button");
        const removeImg = document.createElement("img");
        removeImg.setAttribute("src", new URL(require("935f3cad888002aa")));
        removeImg.setAttribute("alt", "remove item");
        removeButton.appendChild(removeImg);
        removeButton.addEventListener("click", ()=>removeItem(item.id));
        cartItem.appendChild(info);
        cartItem.append(removeButton);
        cartContainer.appendChild(cartItem);
    });
    localStorage.setItem("cart", JSON.stringify(cart));
}
renderCartProducts();
function getTotalPrice() {
    const totalPrice = cart.map((item)=>item.price);
    const ids = cart.map((item)=>item.id);
    let sum = 0;
    for(let i = 0; i < totalPrice.length; i++){
        const amount = document.getElementById(`amount-${ids[i]}`);
        sum += totalPrice[i] * amount.textContent;
    }
    const totalPricePar = document.getElementById("total");
    totalPricePar.textContent = `${sum.toFixed(2)} KR`;
}
getTotalPrice();

},{"935f3cad888002aa":"lQR0e"}],"lQR0e":[function(require,module,exports) {
module.exports = require("ff0943be816e611d").getBundleURL("9HKMd") + "delete-bin.2b429979.svg" + "?" + Date.now();

},{"ff0943be816e611d":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["dfsH9","3LleC"], "3LleC", "parcelRequiref85c")

//# sourceMappingURL=index.e668ad24.js.map
