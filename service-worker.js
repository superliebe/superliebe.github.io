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

var precacheConfig = [["E:/个人项目/hexo/superKM/public/2020/04/26/kbone-vue创建支持web和微信小程序的项目/index.html","cdbc21b247056713887cee70185ee6f4"],["E:/个人项目/hexo/superKM/public/2020/05/24/常用Markdown语法/index.html","9e60d7b52fdb02f9c98aa70577d4a800"],["E:/个人项目/hexo/superKM/public/2020/05/31/linux常用命令/index.html","feec4c5bf92e7aab3d76388a14eedc65"],["E:/个人项目/hexo/superKM/public/2020/06/01/yarn使安装健步如飞/index.html","73f33e9bf39a79dea01aa1090113803f"],["E:/个人项目/hexo/superKM/public/2020/06/03/vue常用小方法合集/index.html","094d59bb49b8d35b232feca90511735b"],["E:/个人项目/hexo/superKM/public/2020/06/04/vue-cli4性能优化之路/index.html","7b5d8a42fc072d45ad99c95457d84b08"],["E:/个人项目/hexo/superKM/public/2020/06/10/koa下一代web开发框架/index.html","62cdc5d37f9fe7aa8bfea1c01a190dca"],["E:/个人项目/hexo/superKM/public/2020/06/17/dockerTool-box的安装配置/index.html","e3d0dbf5d3132aabc09292684be2c7d9"],["E:/个人项目/hexo/superKM/public/2020/06/18/docker常用命令操作/index.html","d98acb314c665dee8f23c115e2aa190f"],["E:/个人项目/hexo/superKM/public/2020/06/28/网站变灰技巧/index.html","3a2455a64cfe350a8f09461737bedb1c"],["E:/个人项目/hexo/superKM/public/2020/06/29/npm发布第一个包/index.html","9fa9ad46c508b40c86f8a5d8149fcf55"],["E:/个人项目/hexo/superKM/public/2020/07/01/git常用命令/index.html","37152ea40c336cae578468e196c02163"],["E:/个人项目/hexo/superKM/public/2020/07/09/dockerfile的使用/index.html","ccdf4cd3c6b023271a673df67ac5b281"],["E:/个人项目/hexo/superKM/public/2020/07/11/docker镜像发布/index.html","67e3d172377e72140e0feeda9db74df8"],["E:/个人项目/hexo/superKM/public/404.html","e0f13195f46a084503338a32c22e463b"],["E:/个人项目/hexo/superKM/public/about/index.html","db2cf556e7cf1880cb5c53fddd6c88d5"],["E:/个人项目/hexo/superKM/public/archives/2020/04/index.html","142b39cea4249650ddb210644d99a89f"],["E:/个人项目/hexo/superKM/public/archives/2020/05/index.html","5ec8efea7361426d9b4313137452b58a"],["E:/个人项目/hexo/superKM/public/archives/2020/06/index.html","c972a785a24b864f0a291d92399b94cd"],["E:/个人项目/hexo/superKM/public/archives/2020/07/index.html","89ae2d8f61a6060fc092bb6f250de4e3"],["E:/个人项目/hexo/superKM/public/archives/2020/index.html","82215afd910b54243fd0e9499289d380"],["E:/个人项目/hexo/superKM/public/archives/2020/page/2/index.html","a0765c720d1483b1a7d2a6d56953b723"],["E:/个人项目/hexo/superKM/public/archives/index.html","0593c2831c1d693aeaeaac3aa73f5c20"],["E:/个人项目/hexo/superKM/public/archives/page/2/index.html","0593c2831c1d693aeaeaac3aa73f5c20"],["E:/个人项目/hexo/superKM/public/categories/Markdown/index.html","39b7cbd5e07e707f9a6f363db17a591e"],["E:/个人项目/hexo/superKM/public/categories/docker/index.html","436efe905e90b1695199728f43b9c041"],["E:/个人项目/hexo/superKM/public/categories/git/index.html","49ed8f7142e827e7e1a99a56816b048c"],["E:/个人项目/hexo/superKM/public/categories/index.html","c4f5e32bb0926992adb93c4802b47cef"],["E:/个人项目/hexo/superKM/public/categories/koa/index.html","60d0ec201cef6443c5d43a9cce640e0a"],["E:/个人项目/hexo/superKM/public/categories/linux/index.html","171246bf24b584fb63f66a904c158cb4"],["E:/个人项目/hexo/superKM/public/categories/vue/index.html","837eea4d8cbe21c81336a0ca184edd22"],["E:/个人项目/hexo/superKM/public/categories/vue/node/index.html","119da74174ee3fe2867f2818665825da"],["E:/个人项目/hexo/superKM/public/categories/vue/微信小程序/index.html","8b27c139b7a761f76b626cc83fbc5b9c"],["E:/个人项目/hexo/superKM/public/css/style.css","0a210dc9b853e1ae0ffcd947e1e8c173"],["E:/个人项目/hexo/superKM/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/个人项目/hexo/superKM/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/个人项目/hexo/superKM/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/个人项目/hexo/superKM/public/friends/index.html","f55ec6f413fbb220450444e713e92715"],["E:/个人项目/hexo/superKM/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/个人项目/hexo/superKM/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/个人项目/hexo/superKM/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/个人项目/hexo/superKM/public/index.html","0c3d6289c9620df9cc4c1b2565d5fb0d"],["E:/个人项目/hexo/superKM/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["E:/个人项目/hexo/superKM/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["E:/个人项目/hexo/superKM/public/js/valine.js","430596db58e60567246c52c474816ee6"],["E:/个人项目/hexo/superKM/public/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["E:/个人项目/hexo/superKM/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["E:/个人项目/hexo/superKM/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["E:/个人项目/hexo/superKM/public/mylist/index.html","64575416c7e4d8ffa13ee87f82feff94"],["E:/个人项目/hexo/superKM/public/page/2/index.html","f698af3b3b0a7c3a262592dc6880dde0"],["E:/个人项目/hexo/superKM/public/tags/Markdown/index.html","f3fa3326ac0b5702cc1a700329e7c26c"],["E:/个人项目/hexo/superKM/public/tags/docker/index.html","7a292e022c1e86a5883e2b9291a724f8"],["E:/个人项目/hexo/superKM/public/tags/git/index.html","5d5d7d8d55770c659d08fc890d48cabc"],["E:/个人项目/hexo/superKM/public/tags/index.html","3d8603bb6583dcc845a943af50cb0caa"],["E:/个人项目/hexo/superKM/public/tags/kbone-vue/index.html","8c04cf3198b18269d4279f34d6ca5695"],["E:/个人项目/hexo/superKM/public/tags/linux/index.html","02f5429a6f3ecfa7c6e291d7bafb7ff9"],["E:/个人项目/hexo/superKM/public/tags/nodejs-koa/index.html","61295d3964810bed2c2575263e35b80f"],["E:/个人项目/hexo/superKM/public/tags/npm-yarn/index.html","dc2bc6b258ec9eeb10dc13475c1fa592"],["E:/个人项目/hexo/superKM/public/tags/vue/index.html","f001b69740508f91e725aef020c18069"]];
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







