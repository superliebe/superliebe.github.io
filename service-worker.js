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

var precacheConfig = [["E:/个人项目/hexo/superKM/public/2020/04/26/kbone-vue创建支持web和微信小程序的项目/index.html","ca9e64359e886aac97d9e815aaf74416"],["E:/个人项目/hexo/superKM/public/2020/05/24/常用Markdown语法/index.html","6b8d733a53ca9ef646e3720916b0534e"],["E:/个人项目/hexo/superKM/public/2020/05/31/linux常用命令/index.html","bf16c5493f4e86365bfb41e653bf8297"],["E:/个人项目/hexo/superKM/public/2020/06/01/yarn使安装健步如飞/index.html","37ea6e7cfe3f06dc9ce2eca612748eda"],["E:/个人项目/hexo/superKM/public/2020/06/03/vue常用小方法合集/index.html","28315554dcdba7d8451a47fe5bb27fe8"],["E:/个人项目/hexo/superKM/public/2020/06/04/vue-cli4性能优化之路/index.html","348d309808a6fc41af3ba1d791338d82"],["E:/个人项目/hexo/superKM/public/2020/06/10/koa下一代web开发框架/index.html","9f83fea4019fc52f0040f01c4326cc4d"],["E:/个人项目/hexo/superKM/public/2020/06/17/dockerTool-box的安装配置/index.html","ec3b123b905e607bee0eb236d4f6c1dc"],["E:/个人项目/hexo/superKM/public/2020/06/18/docker常用命令操作/index.html","323d1810f70558855cbf4cc76a5131f2"],["E:/个人项目/hexo/superKM/public/2020/06/28/网站变灰技巧/index.html","e4f0bebe1366133fa4dbc3070582b135"],["E:/个人项目/hexo/superKM/public/2020/06/29/npm发布第一个包/index.html","7d84cbd5aa6a83961d389dd1eb98b17b"],["E:/个人项目/hexo/superKM/public/2020/07/01/git常用命令/index.html","cd716062eb56f257eadb57a340f2b156"],["E:/个人项目/hexo/superKM/public/2020/07/09/dockerfile的使用/index.html","bb8d94fb89d1582dd3aac65a2ab0b7f5"],["E:/个人项目/hexo/superKM/public/2020/07/11/docker镜像发布/index.html","46a2ad2efe9d8f160e0e7f078647c87f"],["E:/个人项目/hexo/superKM/public/2020/07/17/pwa渐进式webapp/index.html","8564a0514797016a221df0ab967b7f48"],["E:/个人项目/hexo/superKM/public/404.html","2d64eb217b41e64c330b2ea1222f7de1"],["E:/个人项目/hexo/superKM/public/about/index.html","dd0cfd9e8dc0992522dfd3a3db2e2d9d"],["E:/个人项目/hexo/superKM/public/archives/2020/04/index.html","a35be41970ceae9722de668bfb522009"],["E:/个人项目/hexo/superKM/public/archives/2020/05/index.html","cbe112100197506a446b0c874cc7262f"],["E:/个人项目/hexo/superKM/public/archives/2020/06/index.html","e315cae82bf381b4636b38c969667858"],["E:/个人项目/hexo/superKM/public/archives/2020/07/index.html","359e7367f5d6c5b6f0e3da346548317d"],["E:/个人项目/hexo/superKM/public/archives/2020/index.html","6efa8f08e3d2af30a96bb5f74bfabc6e"],["E:/个人项目/hexo/superKM/public/archives/2020/page/2/index.html","106d193192f47e04488dd51979513971"],["E:/个人项目/hexo/superKM/public/archives/index.html","40710c503dcf1ac786dd5a60ad841ff1"],["E:/个人项目/hexo/superKM/public/archives/page/2/index.html","40710c503dcf1ac786dd5a60ad841ff1"],["E:/个人项目/hexo/superKM/public/categories/Markdown/index.html","15ef6ed743badb0e2c7434a129282abe"],["E:/个人项目/hexo/superKM/public/categories/docker/index.html","ff81422a069d1a042a072dbb8bd7778f"],["E:/个人项目/hexo/superKM/public/categories/git/index.html","744ac62fddb4e401c8d962c6da8bb40a"],["E:/个人项目/hexo/superKM/public/categories/index.html","d3cb8912f5845a367ad16e90b2fe89a9"],["E:/个人项目/hexo/superKM/public/categories/koa/index.html","35b3aa17742fdd75cd9b9b5bd42635c1"],["E:/个人项目/hexo/superKM/public/categories/linux/index.html","776a2ef0b76d714eb56d16521b2db487"],["E:/个人项目/hexo/superKM/public/categories/pwa/index.html","bd32e76e1080ac4512ffb5b26b86d4a0"],["E:/个人项目/hexo/superKM/public/categories/vue/index.html","44bb7d399e2ccdf964b033557a7f32f5"],["E:/个人项目/hexo/superKM/public/categories/vue/node/index.html","64ab7e64a5d0430e362a3f3267b19b16"],["E:/个人项目/hexo/superKM/public/categories/vue/微信小程序/index.html","33976b95f29437fd7df96278530dfbbc"],["E:/个人项目/hexo/superKM/public/css/style.css","e50cd8c1209b51a57316370082949883"],["E:/个人项目/hexo/superKM/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/个人项目/hexo/superKM/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/个人项目/hexo/superKM/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/个人项目/hexo/superKM/public/friends/index.html","44c11b801464386a65611e3194808286"],["E:/个人项目/hexo/superKM/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/个人项目/hexo/superKM/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/个人项目/hexo/superKM/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/个人项目/hexo/superKM/public/index.html","dc2b29d6f0542d40c9aac8a08cdb1916"],["E:/个人项目/hexo/superKM/public/js/app.js","d89efa1c5649ea2a08658cd3f43adbde"],["E:/个人项目/hexo/superKM/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/个人项目/hexo/superKM/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/个人项目/hexo/superKM/public/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["E:/个人项目/hexo/superKM/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["E:/个人项目/hexo/superKM/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["E:/个人项目/hexo/superKM/public/mylist/index.html","98817e22777f756e6509d5c56a50a021"],["E:/个人项目/hexo/superKM/public/page/2/index.html","93791600c89ed61b446c7008fc4bf48b"],["E:/个人项目/hexo/superKM/public/tags/Markdown/index.html","aaf31a4e0a4230817e94efbd1842ca02"],["E:/个人项目/hexo/superKM/public/tags/docker/index.html","872c2c22ca761031693e81f806620421"],["E:/个人项目/hexo/superKM/public/tags/git/index.html","15d9be2a98d4ffcf424e8ab92178f21b"],["E:/个人项目/hexo/superKM/public/tags/index.html","0c95e3789295b0006d3dcd1b5d2438bf"],["E:/个人项目/hexo/superKM/public/tags/kbone-vue/index.html","5a247b9de7afc9a64bdf10d5b6519c17"],["E:/个人项目/hexo/superKM/public/tags/linux/index.html","25fc4815ee6d4d8ab60fcce838257d0d"],["E:/个人项目/hexo/superKM/public/tags/nodejs-koa/index.html","6d4cb16953120fb2728dc353775cef14"],["E:/个人项目/hexo/superKM/public/tags/npm-yarn/index.html","78101e33452ece1e381dd6271af4f8d6"],["E:/个人项目/hexo/superKM/public/tags/pwa/index.html","6cbbf30273ca88e0c746cf35551d795c"],["E:/个人项目/hexo/superKM/public/tags/vue/index.html","c8ab059b9ed81ef81723fdd28fb968b1"]];
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







