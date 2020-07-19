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

var precacheConfig = [["E:/个人项目/hexo/superKM/public/2020/04/26/kbone-vue创建支持web和微信小程序的项目/index.html","ca9e64359e886aac97d9e815aaf74416"],["E:/个人项目/hexo/superKM/public/2020/05/24/常用Markdown语法/index.html","6b8d733a53ca9ef646e3720916b0534e"],["E:/个人项目/hexo/superKM/public/2020/05/31/linux常用命令/index.html","bf16c5493f4e86365bfb41e653bf8297"],["E:/个人项目/hexo/superKM/public/2020/06/01/yarn使安装健步如飞/index.html","37ea6e7cfe3f06dc9ce2eca612748eda"],["E:/个人项目/hexo/superKM/public/2020/06/03/vue常用小方法合集/index.html","28315554dcdba7d8451a47fe5bb27fe8"],["E:/个人项目/hexo/superKM/public/2020/06/04/vue-cli4性能优化之路/index.html","348d309808a6fc41af3ba1d791338d82"],["E:/个人项目/hexo/superKM/public/2020/06/10/koa下一代web开发框架/index.html","9f83fea4019fc52f0040f01c4326cc4d"],["E:/个人项目/hexo/superKM/public/2020/06/17/dockerTool-box的安装配置/index.html","ec3b123b905e607bee0eb236d4f6c1dc"],["E:/个人项目/hexo/superKM/public/2020/06/18/docker常用命令操作/index.html","cb673cd523ccab7853965ae25c7caadb"],["E:/个人项目/hexo/superKM/public/2020/06/28/网站变灰技巧/index.html","e4f0bebe1366133fa4dbc3070582b135"],["E:/个人项目/hexo/superKM/public/2020/06/29/npm发布第一个包/index.html","7d84cbd5aa6a83961d389dd1eb98b17b"],["E:/个人项目/hexo/superKM/public/2020/07/01/git常用命令/index.html","cd716062eb56f257eadb57a340f2b156"],["E:/个人项目/hexo/superKM/public/2020/07/09/dockerfile的使用/index.html","bb8d94fb89d1582dd3aac65a2ab0b7f5"],["E:/个人项目/hexo/superKM/public/2020/07/11/docker镜像发布/index.html","46a2ad2efe9d8f160e0e7f078647c87f"],["E:/个人项目/hexo/superKM/public/2020/07/17/pwa渐进式webapp/index.html","ec5709540540799b6b112f2ba178a4f8"],["E:/个人项目/hexo/superKM/public/404.html","2d64eb217b41e64c330b2ea1222f7de1"],["E:/个人项目/hexo/superKM/public/about/index.html","dd0cfd9e8dc0992522dfd3a3db2e2d9d"],["E:/个人项目/hexo/superKM/public/archives/2020/04/index.html","7786618120b7abd3a411f0c5dcc64736"],["E:/个人项目/hexo/superKM/public/archives/2020/05/index.html","4e102f78d01143ee9a5351e83a991afd"],["E:/个人项目/hexo/superKM/public/archives/2020/06/index.html","5f451d3230a7ea13770dd6a7baabeaa8"],["E:/个人项目/hexo/superKM/public/archives/2020/07/index.html","e0645b9215845833924da157d4846768"],["E:/个人项目/hexo/superKM/public/archives/2020/index.html","90ea00b385971631fd9c5aa57cfd0ba9"],["E:/个人项目/hexo/superKM/public/archives/2020/page/2/index.html","aca1d1becbeebff00c79c9b213e067a8"],["E:/个人项目/hexo/superKM/public/archives/index.html","16731a37868bdee9ab75c6ea1b5aaf34"],["E:/个人项目/hexo/superKM/public/archives/page/2/index.html","16731a37868bdee9ab75c6ea1b5aaf34"],["E:/个人项目/hexo/superKM/public/categories/Markdown/index.html","92bfbad6bea00f00ebec2451f587e914"],["E:/个人项目/hexo/superKM/public/categories/docker/index.html","d9c1d71f6571b9d6cdd358fc92aebe06"],["E:/个人项目/hexo/superKM/public/categories/git/index.html","11dc3b699a889cc963adeee845102d1f"],["E:/个人项目/hexo/superKM/public/categories/index.html","38e1d8e524604238ccd490b2f3f6551f"],["E:/个人项目/hexo/superKM/public/categories/koa/index.html","9bc01942de6497574aab8b11fb3e5534"],["E:/个人项目/hexo/superKM/public/categories/linux/index.html","b53a9fc83fd69f78c0a8a0393644ece5"],["E:/个人项目/hexo/superKM/public/categories/vue/index.html","3dd227528682a679467ddf5607772680"],["E:/个人项目/hexo/superKM/public/categories/vue/node/index.html","4232642d4cb373b00127eaca071818d8"],["E:/个人项目/hexo/superKM/public/categories/vue/微信小程序/index.html","9ce7cfd38c8898fdb259bdeaf105557c"],["E:/个人项目/hexo/superKM/public/css/style.css","e50cd8c1209b51a57316370082949883"],["E:/个人项目/hexo/superKM/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/个人项目/hexo/superKM/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/个人项目/hexo/superKM/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/个人项目/hexo/superKM/public/friends/index.html","44c11b801464386a65611e3194808286"],["E:/个人项目/hexo/superKM/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/个人项目/hexo/superKM/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/个人项目/hexo/superKM/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/个人项目/hexo/superKM/public/index.html","35f4ae4824da4c127f21fe3ef33577a9"],["E:/个人项目/hexo/superKM/public/js/app.js","d89efa1c5649ea2a08658cd3f43adbde"],["E:/个人项目/hexo/superKM/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/个人项目/hexo/superKM/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/个人项目/hexo/superKM/public/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["E:/个人项目/hexo/superKM/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["E:/个人项目/hexo/superKM/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["E:/个人项目/hexo/superKM/public/mylist/index.html","d172ff99d4dedc716a03dab762579bae"],["E:/个人项目/hexo/superKM/public/page/2/index.html","af1cc5279ae8d68002ee446cf47528c3"],["E:/个人项目/hexo/superKM/public/tags/Markdown/index.html","f92d07f7b923e123050cbc5ad55ba7eb"],["E:/个人项目/hexo/superKM/public/tags/docker/index.html","7ac5693fe071ffb4083fe16e05a7578b"],["E:/个人项目/hexo/superKM/public/tags/git/index.html","c28dd3d94f5fab6863437c9751ca0fd7"],["E:/个人项目/hexo/superKM/public/tags/index.html","8d4ba5a507c739ccfd8c2018f9f1aca0"],["E:/个人项目/hexo/superKM/public/tags/kbone-vue/index.html","c8166d8ef4fb3743c92b7e78a5f3b851"],["E:/个人项目/hexo/superKM/public/tags/linux/index.html","e22f6364fe32e4056b8149af26718137"],["E:/个人项目/hexo/superKM/public/tags/nodejs-koa/index.html","73cf68383a0f4535787004d40311f9b7"],["E:/个人项目/hexo/superKM/public/tags/npm-yarn/index.html","bbe73f932a98926aaffd404b99f80316"],["E:/个人项目/hexo/superKM/public/tags/vue/index.html","352bb717177d74e901393ba9d8454006"]];
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







