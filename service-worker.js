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

var precacheConfig = [["E:/个人项目/hexo/superKM/public/2020/04/26/kbone-vue创建支持web和微信小程序的项目/index.html","4f9a9798801b2b86747b660c0e96e689"],["E:/个人项目/hexo/superKM/public/2020/05/24/常用Markdown语法/index.html","85c26fb0321e146e2fef7a38605ef96a"],["E:/个人项目/hexo/superKM/public/2020/05/31/linux常用命令/index.html","250165ebc4240fba35d89185a6ed9ca1"],["E:/个人项目/hexo/superKM/public/2020/06/01/yarn使安装健步如飞/index.html","b774f18544bdf5c5d578e81b247b625f"],["E:/个人项目/hexo/superKM/public/2020/06/03/vue常用小方法合集/index.html","0296f318dad5f52922563253d2a8212a"],["E:/个人项目/hexo/superKM/public/2020/06/04/vue-cli4性能优化之路/index.html","7b5d8a42fc072d45ad99c95457d84b08"],["E:/个人项目/hexo/superKM/public/2020/06/10/koa下一代web开发框架/index.html","726911ca200f7a39a0065392cdf5aa93"],["E:/个人项目/hexo/superKM/public/2020/06/17/dockerTool-box的安装配置/index.html","a4515c946ba0e9ddd1907b6f77ac49fd"],["E:/个人项目/hexo/superKM/public/404.html","e0f13195f46a084503338a32c22e463b"],["E:/个人项目/hexo/superKM/public/about/index.html","383047fd35fde7d6466091178b5d99d5"],["E:/个人项目/hexo/superKM/public/archives/2020/04/index.html","9dc521e9443b75f687adc6f767c6c211"],["E:/个人项目/hexo/superKM/public/archives/2020/05/index.html","77b0167eae657b5db0b3d5ad01531802"],["E:/个人项目/hexo/superKM/public/archives/2020/06/index.html","42fd7d76ea5bcb9b06215d9bba653acc"],["E:/个人项目/hexo/superKM/public/archives/2020/index.html","696a8f9896602dbd668c4d32a45c8e2d"],["E:/个人项目/hexo/superKM/public/archives/index.html","7c20b4d03df483be0174f485993c523b"],["E:/个人项目/hexo/superKM/public/categories/Markdown/index.html","f72ec61148c5f8d694438fb53f740271"],["E:/个人项目/hexo/superKM/public/categories/docker/index.html","e559a7aba3dad19baee037148b32dac7"],["E:/个人项目/hexo/superKM/public/categories/index.html","ce69bded6c135ffb86004a38f0b32022"],["E:/个人项目/hexo/superKM/public/categories/koa/index.html","ba35c3b7243fdc9bc37295e3c495712e"],["E:/个人项目/hexo/superKM/public/categories/vue/index.html","c28df836b2f5837b88192e697fa5db79"],["E:/个人项目/hexo/superKM/public/categories/vue/kbone/index.html","340b1fedb7996de655d398c5058a3b84"],["E:/个人项目/hexo/superKM/public/categories/vue/kbone/微信小程序/index.html","7ab3dc416a460f72e929a4cdd4576140"],["E:/个人项目/hexo/superKM/public/css/style.css","0a210dc9b853e1ae0ffcd947e1e8c173"],["E:/个人项目/hexo/superKM/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/个人项目/hexo/superKM/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/个人项目/hexo/superKM/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/个人项目/hexo/superKM/public/friends/index.html","f55ec6f413fbb220450444e713e92715"],["E:/个人项目/hexo/superKM/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/个人项目/hexo/superKM/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/个人项目/hexo/superKM/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/个人项目/hexo/superKM/public/index.html","36bc248f615607d960f5c99084a181db"],["E:/个人项目/hexo/superKM/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["E:/个人项目/hexo/superKM/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["E:/个人项目/hexo/superKM/public/js/valine.js","430596db58e60567246c52c474816ee6"],["E:/个人项目/hexo/superKM/public/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["E:/个人项目/hexo/superKM/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["E:/个人项目/hexo/superKM/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["E:/个人项目/hexo/superKM/public/mylist/index.html","59ea4842344a99d733cc1b3005b4d242"],["E:/个人项目/hexo/superKM/public/tags/Markdown/index.html","cd934534c6976e8026ce19c5669579e1"],["E:/个人项目/hexo/superKM/public/tags/docker/index.html","19629013fbb2a5e13c1455a058981170"],["E:/个人项目/hexo/superKM/public/tags/index.html","722da973cc34c6a4fc42bcedba7c941f"],["E:/个人项目/hexo/superKM/public/tags/kbone-vue/index.html","2b1a28da86876ff2006fd4ead2249aea"],["E:/个人项目/hexo/superKM/public/tags/linux/index.html","4cc379a78ef44b2e009b81cd0075fd0e"],["E:/个人项目/hexo/superKM/public/tags/nodejs-koa/index.html","688051f2e38027c788ab50c411120c14"],["E:/个人项目/hexo/superKM/public/tags/npm-yarn/index.html","eab1c3d4bf8db0cff79f9e0fd3da17e7"],["E:/个人项目/hexo/superKM/public/tags/vue/index.html","d8dd562bea193c0ade693b5d9f059a16"]];
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







