// ServiceWorker

// Caching on install 
self.addEventListener('install', (event) => {
	const urlsToCache = [
		'/',
		'/index.html',
		'/restaurant.html',
		'/js/dbhelper.js',
		'/js/main.js',
		'/js/idb.js',
		'/js/worker.js',
		'/js/restaurant_info.js',
		'/css/general-styles.css',
		'/css/index-styles.css',
		'/css/restaurant-styles.css',
		'/img/icons/favorite.svg',
		'/img/icons/favorized.svg',
		'/img/icons/icon-placeholder.png',
		'/img/1.jpg',
		'/img/2.jpg',
		'/img/3.jpg',
		'/img/4.jpg',
		'/img/5.jpg',
		'/img/6.jpg',
		'/img/7.jpg',
		'/img/8.jpg',
		'/img/9.jpg',
		'/img/10.jpg',
		'/restaurant.html?id=1',
		'/restaurant.html?id=2',
		'/restaurant.html?id=3',
		'/restaurant.html?id=4',
		'/restaurant.html?id=5',
		'/restaurant.html?id=6',
		'/restaurant.html?id=7',
		'/restaurant.html?id=8',
		'/restaurant.html?id=9',
		'/restaurant.html?id=10',
	];

	event.waitUntil(
		caches.open('restaurant-cache-v1').then( (cache) => {
			return cache.addAll(urlsToCache);
		})
	);
});

// Fetching from cache
self.addEventListener('fetch', (event) => {

	event.respondWith(
		caches.match(event.request).then( (response) => {
			if(response) return response;
			return fetch(event.request);
		}).catch( err => console.log(err))
	);
});
