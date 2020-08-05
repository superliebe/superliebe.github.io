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

var precacheConfig = [["E:/个人项目/hexo/superKM/public/2020/04/26/kbone-vue创建支持web和微信小程序的项目/index.html","04526bfe5253e6530914a644280f5c9c"],["E:/个人项目/hexo/superKM/public/2020/05/24/常用Markdown语法/index.html","bbdf4489ad04d622cf4a1c02fd09be0a"],["E:/个人项目/hexo/superKM/public/2020/05/31/linux常用命令/index.html","bb740138324b3ff345fe7d33795da24c"],["E:/个人项目/hexo/superKM/public/2020/06/01/yarn使安装健步如飞/index.html","e4e60dda1df7eb86b9ed62ad31191239"],["E:/个人项目/hexo/superKM/public/2020/06/03/vue常用小方法合集/index.html","240d8aef1ee30d1560018a63e99b42e8"],["E:/个人项目/hexo/superKM/public/2020/06/04/vue-cli4性能优化之路/index.html","b572682c11f5e5432238ce4dbde645ce"],["E:/个人项目/hexo/superKM/public/2020/06/10/koa下一代web开发框架/index.html","76f0c368909fca282973a83b1059fc5f"],["E:/个人项目/hexo/superKM/public/2020/06/17/dockerTool-box的安装配置/index.html","5260180241c8c232227c76c4c9cb025a"],["E:/个人项目/hexo/superKM/public/2020/06/18/docker常用命令操作/index.html","c6a41f090532ec8b364df2628f336f97"],["E:/个人项目/hexo/superKM/public/2020/06/28/网站变灰技巧/index.html","4ee337c437be0fdca232b6dd517e06e2"],["E:/个人项目/hexo/superKM/public/2020/06/29/npm发布第一个包/index.html","6e9f26bbd23e1993ebf278b274ece3f9"],["E:/个人项目/hexo/superKM/public/2020/07/01/git常用命令/index.html","3be6bd6f7ddb4be9a58b1c0567331bdb"],["E:/个人项目/hexo/superKM/public/2020/07/09/dockerfile的使用/index.html","5e39f7abacd5db6514b99ea2003d1150"],["E:/个人项目/hexo/superKM/public/2020/07/11/docker镜像发布/index.html","ec5caf43003ec1abf3a113b99b1cfca5"],["E:/个人项目/hexo/superKM/public/2020/07/17/pwa渐进式webapp/index.html","e4835090c216a1ac58be969d9d481c78"],["E:/个人项目/hexo/superKM/public/2020/07/20/vue3-vite初探/index.html","32a25817f554af99fa0d0597b9f611ef"],["E:/个人项目/hexo/superKM/public/2020/07/24/typescript文档/index.html","ccffe0c6de7688340b96757bb8994038"],["E:/个人项目/hexo/superKM/public/2020/07/27/数据结构与算法/index.html","6a22ef1d0e907dd31477ccb34d76a6d8"],["E:/个人项目/hexo/superKM/public/2020/07/31/前端性能优化/index.html","c7ae7d316006a5b8d303c93d3bfceb7a"],["E:/个人项目/hexo/superKM/public/404.html","8d89d99490bd5d793ca0e9e8cfea43e7"],["E:/个人项目/hexo/superKM/public/about/index.html","00f02ffd15771f2bf7d9ac3d7f5c56c3"],["E:/个人项目/hexo/superKM/public/archives/2020/04/index.html","c27618d4afa56d350a16e6717ba5e2f9"],["E:/个人项目/hexo/superKM/public/archives/2020/05/index.html","8df889739b4f55ab0d386b8041d6ffc0"],["E:/个人项目/hexo/superKM/public/archives/2020/06/index.html","c993da689c1b68c642380f37d734e521"],["E:/个人项目/hexo/superKM/public/archives/2020/07/index.html","0c5b3fc26e9b4c3b5ff090f57c3027c2"],["E:/个人项目/hexo/superKM/public/archives/2020/index.html","7528ff812cffb24872a75f56c630e09e"],["E:/个人项目/hexo/superKM/public/archives/2020/page/2/index.html","0cf1e771ba30a42956f8beee4b936b64"],["E:/个人项目/hexo/superKM/public/archives/2020/page/3/index.html","1b68517ed5d8821f3c7799b1ecfec9ee"],["E:/个人项目/hexo/superKM/public/archives/index.html","f4b9e99130b2bca4220a1b92905690da"],["E:/个人项目/hexo/superKM/public/archives/page/2/index.html","f4b9e99130b2bca4220a1b92905690da"],["E:/个人项目/hexo/superKM/public/archives/page/3/index.html","f4b9e99130b2bca4220a1b92905690da"],["E:/个人项目/hexo/superKM/public/categories/Markdown/index.html","e1ea6d312b68da4007251db17bf1950a"],["E:/个人项目/hexo/superKM/public/categories/docker/index.html","8353d01e95029e72bbec84686ab80ca4"],["E:/个人项目/hexo/superKM/public/categories/git/index.html","1eeb73f3cee9d3db3ab49f618127fb79"],["E:/个人项目/hexo/superKM/public/categories/index.html","5d96bb5cc0c5c975bc7ad641920252dc"],["E:/个人项目/hexo/superKM/public/categories/koa/index.html","889d78a66a385029e0def7b8963357d9"],["E:/个人项目/hexo/superKM/public/categories/linux/index.html","83510185a00a4ec9abf0e974189a7f53"],["E:/个人项目/hexo/superKM/public/categories/pwa/index.html","05f6714741e6097826974bab08d965bd"],["E:/个人项目/hexo/superKM/public/categories/typescript/index.html","dc83f50ae524016c53dee62015f0eec5"],["E:/个人项目/hexo/superKM/public/categories/vue/index.html","b8412b2fe2b6231289b630a71a29a270"],["E:/个人项目/hexo/superKM/public/categories/vue/node/index.html","dfe07a7fad3b894f48327c364278c985"],["E:/个人项目/hexo/superKM/public/categories/vue/vite/index.html","62465237598211b116a834f9e1296e09"],["E:/个人项目/hexo/superKM/public/categories/vue/微信小程序/index.html","812778c47b5da87e831abae172a0df54"],["E:/个人项目/hexo/superKM/public/categories/性能优化/index.html","87f9ab9d3e7ef1054d5f2b913ac90b48"],["E:/个人项目/hexo/superKM/public/categories/数据结构/index.html","be8784f56a3fcd4b15f27a179b480025"],["E:/个人项目/hexo/superKM/public/css/style.css","f33f441fe3e14584325c8126888e52cd"],["E:/个人项目/hexo/superKM/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/个人项目/hexo/superKM/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/个人项目/hexo/superKM/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/个人项目/hexo/superKM/public/friends/index.html","ed965ccaa58d5569909c0bad726b68d7"],["E:/个人项目/hexo/superKM/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/个人项目/hexo/superKM/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/个人项目/hexo/superKM/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/个人项目/hexo/superKM/public/index.html","ca50aaf00fa3253a18bf8f86cb46a270"],["E:/个人项目/hexo/superKM/public/js/app.js","d89efa1c5649ea2a08658cd3f43adbde"],["E:/个人项目/hexo/superKM/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/个人项目/hexo/superKM/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/个人项目/hexo/superKM/public/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["E:/个人项目/hexo/superKM/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["E:/个人项目/hexo/superKM/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["E:/个人项目/hexo/superKM/public/mylist/index.html","cbaea868973fef1b9db8060f1b66e641"],["E:/个人项目/hexo/superKM/public/page/2/index.html","787f3406dbcac5738e6051061f6fcef8"],["E:/个人项目/hexo/superKM/public/tags/Markdown/index.html","8ba437661e67ce27e2d6b86d808ffdaf"],["E:/个人项目/hexo/superKM/public/tags/docker/index.html","76a22dfba29f81a4ee48ae151335ac15"],["E:/个人项目/hexo/superKM/public/tags/git/index.html","40d7bb8eadcaa53b52b4d9e9ef04c40d"],["E:/个人项目/hexo/superKM/public/tags/index.html","84f708942ab4536c5bfe775b907b774b"],["E:/个人项目/hexo/superKM/public/tags/kbone-vue/index.html","bb6118e0b1a426de7f765e7be08fa15a"],["E:/个人项目/hexo/superKM/public/tags/linux/index.html","8c6349f3958e662e106f81ccaf7a0338"],["E:/个人项目/hexo/superKM/public/tags/nodejs-koa/index.html","d7ff2c4f3b41e8e95e256965651dab02"],["E:/个人项目/hexo/superKM/public/tags/npm-yarn/index.html","769293ecf16b88ebf1d6d6b810860bc1"],["E:/个人项目/hexo/superKM/public/tags/pwa/index.html","55a6d40d93ca31bb430bab316efb14d9"],["E:/个人项目/hexo/superKM/public/tags/typescript/index.html","5924cae7854f952d25b4c4bd3fcf581a"],["E:/个人项目/hexo/superKM/public/tags/vite/index.html","b489ef78936903a62496ee6282928140"],["E:/个人项目/hexo/superKM/public/tags/vue/index.html","4a022005b12eb1f1e1ec85ab9792fa2c"],["E:/个人项目/hexo/superKM/public/tags/性能优化/index.html","6ef75ff7e9b590f2b3730814eb1b71dc"],["E:/个人项目/hexo/superKM/public/tags/算法/index.html","3f145d36b0778872c3619fd7dd3d4b7f"]];
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







