importScripts("precache-manifest.45d6036252bf6101ad4dd1cef387c42a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

console.log("hello from service worker");

workbox.routing.registerRoute(
	/https:\/\/jsonplaceholder\.typicode\.com/,
	workbox.strategies.networkFirst()
)

//workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);
