self.addEventListener('install',function (event) {
    console.log('Installing...');
})

self.addEventListener('activate',function (event) {
    console.log('Activating Service Worker');
})

self.addEventListener('fetch',function (event) {
    console.log('fetch Service Worker');
    console.log(event.request.url);
    const url = new URL(event.request.url);
})