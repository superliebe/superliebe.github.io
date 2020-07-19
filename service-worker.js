/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/个人项目/hexo/superKM/public/2020/04/26/kbone-vue创建支持web和微信小程序的项目/index.html","04526bfe5253e6530914a644280f5c9c"],["E:/个人项目/hexo/superKM/public/2020/05/24/常用Markdown语法/index.html","7b917bc4dc9b2b5c690bd53068026d1a"],["E:/个人项目/hexo/superKM/public/2020/05/31/linux常用命令/index.html","135d6eb6f695e07f85b691e865d42dd4"],["E:/个人项目/hexo/superKM/public/2020/06/01/yarn使安装健步如飞/index.html","2d5a5b0fa9def2141ca367d23dc42fe6"],["E:/个人项目/hexo/superKM/public/2020/06/03/vue常用小方法合集/index.html","0a685266e9d8de136a8ca2057fd7de16"],["E:/个人项目/hexo/superKM/public/2020/06/04/vue-cli4性能优化之路/index.html","c5f6933090121b3fc809fdc0bdba2e6c"],["E:/个人项目/hexo/superKM/public/2020/06/10/koa下一代web开发框架/index.html","3f5c219f1975371aae04b0fa8abbc33c"],["E:/个人项目/hexo/superKM/public/2020/06/17/dockerTool-box的安装配置/index.html","5260180241c8c232227c76c4c9cb025a"],["E:/个人项目/hexo/superKM/public/2020/06/18/docker常用命令操作/index.html","c6a41f090532ec8b364df2628f336f97"],["E:/个人项目/hexo/superKM/public/2020/06/28/网站变灰技巧/index.html","4ee337c437be0fdca232b6dd517e06e2"],["E:/个人项目/hexo/superKM/public/2020/06/29/npm发布第一个包/index.html","1bb7672d97aa3d2a45a308895f69d9be"],["E:/个人项目/hexo/superKM/public/2020/07/01/git常用命令/index.html","3be6bd6f7ddb4be9a58b1c0567331bdb"],["E:/个人项目/hexo/superKM/public/2020/07/09/dockerfile的使用/index.html","5e39f7abacd5db6514b99ea2003d1150"],["E:/个人项目/hexo/superKM/public/2020/07/11/docker镜像发布/index.html","ec5caf43003ec1abf3a113b99b1cfca5"],["E:/个人项目/hexo/superKM/public/2020/07/17/pwa渐进式webapp/index.html","335caa4362374c7840ed1e609adc566d"],["E:/个人项目/hexo/superKM/public/404.html","8d89d99490bd5d793ca0e9e8cfea43e7"],["E:/个人项目/hexo/superKM/public/about/index.html","131f850ca0ddc001042ec631f68c088f"],["E:/个人项目/hexo/superKM/public/archives/2020/04/index.html","bfea7e981b528e15c30e7f7eb7b185c8"],["E:/个人项目/hexo/superKM/public/archives/2020/05/index.html","9cf992a0c76db6b613b7ca0093bef2be"],["E:/个人项目/hexo/superKM/public/archives/2020/06/index.html","ce442092ca573306f61b3754f571ad6a"],["E:/个人项目/hexo/superKM/public/archives/2020/07/index.html","8804b9a610f3cdc13ac0db1eaa7f09bb"],["E:/个人项目/hexo/superKM/public/archives/2020/index.html","727573198f62519794bc0e19730d0a6b"],["E:/个人项目/hexo/superKM/public/archives/2020/page/2/index.html","d4a80d1e29926493675abc355af7303c"],["E:/个人项目/hexo/superKM/public/archives/index.html","764feedba435dedf19aa703481400642"],["E:/个人项目/hexo/superKM/public/archives/page/2/index.html","764feedba435dedf19aa703481400642"],["E:/个人项目/hexo/superKM/public/categories/Markdown/index.html","5759fdd21eb1bf16ac11591a602a3f10"],["E:/个人项目/hexo/superKM/public/categories/docker/index.html","2fa8cf1ca2ca9e9356b36387ed57bbdb"],["E:/个人项目/hexo/superKM/public/categories/git/index.html","81d6f4faa1f00f899a07fd818669ad68"],["E:/个人项目/hexo/superKM/public/categories/index.html","407bed555bbf5143b88f81d606bb086f"],["E:/个人项目/hexo/superKM/public/categories/koa/index.html","8498c6bf62b9c983f6a110770454f51e"],["E:/个人项目/hexo/superKM/public/categories/linux/index.html","89643089a0b2f34d61064de4d3d02861"],["E:/个人项目/hexo/superKM/public/categories/pwa/index.html","2f4719349f34a15dc18180b3181416de"],["E:/个人项目/hexo/superKM/public/categories/vue/index.html","b13315025555eb1a6cd5994018032f9f"],["E:/个人项目/hexo/superKM/public/categories/vue/node/index.html","67a65a8c3e9181c25a63f7a8f005e6d0"],["E:/个人项目/hexo/superKM/public/categories/vue/微信小程序/index.html","6ef66d16a2bf1b80c8253a69f6e9fe20"],["E:/个人项目/hexo/superKM/public/css/style.css","e50cd8c1209b51a57316370082949883"],["E:/个人项目/hexo/superKM/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/个人项目/hexo/superKM/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/个人项目/hexo/superKM/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/个人项目/hexo/superKM/public/friends/index.html","ed965ccaa58d5569909c0bad726b68d7"],["E:/个人项目/hexo/superKM/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/个人项目/hexo/superKM/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/个人项目/hexo/superKM/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/个人项目/hexo/superKM/public/index.html","0e0ba14625785942da0024fde5d88f6f"],["E:/个人项目/hexo/superKM/public/js/app.js","d89efa1c5649ea2a08658cd3f43adbde"],["E:/个人项目/hexo/superKM/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/个人项目/hexo/superKM/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/个人项目/hexo/superKM/public/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["E:/个人项目/hexo/superKM/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["E:/个人项目/hexo/superKM/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["E:/个人项目/hexo/superKM/public/mylist/index.html","46b1bc1b6aa40400bc46ece4b262ee55"],["E:/个人项目/hexo/superKM/public/page/2/index.html","0d5c74086e99eb182ec0f4f7fd9f059a"],["E:/个人项目/hexo/superKM/public/tags/Markdown/index.html","76c8a1e98ca7cb548dd98525fe46937b"],["E:/个人项目/hexo/superKM/public/tags/docker/index.html","3a42cce5453261ed02a8422680d0374e"],["E:/个人项目/hexo/superKM/public/tags/git/index.html","12f6264285d99ad2c94c723229348496"],["E:/个人项目/hexo/superKM/public/tags/index.html","6059048e826004275db18f8c8259023b"],["E:/个人项目/hexo/superKM/public/tags/kbone-vue/index.html","08d9fb2e415f09115824e965ad89c98c"],["E:/个人项目/hexo/superKM/public/tags/linux/index.html","6058a2e18e669b8399f06e771f2cbe23"],["E:/个人项目/hexo/superKM/public/tags/nodejs-koa/index.html","a74eba70d50863173d2f1ae7c24b207a"],["E:/个人项目/hexo/superKM/public/tags/npm-yarn/index.html","f212d1e0cdb087f56a460ed97bc4cf29"],["E:/个人项目/hexo/superKM/public/tags/pwa/index.html","c136c694cb8ab5895834028b9918c4cb"],["E:/个人项目/hexo/superKM/public/tags/vue/index.html","b69fd4a9b6f72134b3cbe2583748d4f2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







