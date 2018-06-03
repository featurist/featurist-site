importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404.html",
    "revision": "d6a2316aa6f0eabc55bb287ee6fe14d9"
  },
  {
    "url": "about/images/featurist-team.jpg",
    "revision": "0bc395100cef9f6ec33bfbfdfba1c83b"
  },
  {
    "url": "about/index.html",
    "revision": "503987e4ae1a1f5c7c873ea91a6170c4"
  },
  {
    "url": "careers/images/featurists-discussing.jpg",
    "revision": "ca8b974becd498e098e4e56e7fcc9da3"
  },
  {
    "url": "careers/index.html",
    "revision": "d9a72a3b7bdde1b9fdd93dd795b4fdfe"
  },
  {
    "url": "contact/index.html",
    "revision": "ba573bec3bbfa100f8aafcf2bcfefb2d"
  },
  {
    "url": "images/client-logos/7digital.png",
    "revision": "117dc4737438ff14289a8c516211e539"
  },
  {
    "url": "images/client-logos/bbc.png",
    "revision": "4dc7e031b6eea5f45ae15bdd656da5f1"
  },
  {
    "url": "images/client-logos/broadband-choices.png",
    "revision": "092ee17b365e892eabe0b97f4276ab06"
  },
  {
    "url": "images/client-logos/camden.png",
    "revision": "dae41873c8c94b3241c3dc1e594c0554"
  },
  {
    "url": "images/client-logos/euromoney.png",
    "revision": "3605324aa3b05bc8cf986a01c49159dd"
  },
  {
    "url": "images/client-logos/farmdrop.png",
    "revision": "65e44f4e3c588144a3e3726b75bd0591"
  },
  {
    "url": "images/client-logos/imd.png",
    "revision": "f16de349298ec382542a94ee265d03b0"
  },
  {
    "url": "images/client-logos/logos-sprite.png",
    "revision": "1f91e2aa5032dda55afa3997db650603"
  },
  {
    "url": "images/client-logos/scribeasy.png",
    "revision": "003f237c8f3126fe26a3705773ce0de7"
  },
  {
    "url": "images/client-logos/shopa.png",
    "revision": "f9621a5e81cf2790c7ae6f496685b46e"
  },
  {
    "url": "images/client-logos/snoozle.png",
    "revision": "6ddbf51e3cfe555dc6b00e6f33956eed"
  },
  {
    "url": "images/client-logos/the-pigeonhole.png",
    "revision": "8c955141ee46a1911db98581b85e8b62"
  },
  {
    "url": "images/client-logos/travcorp.png",
    "revision": "24cacea5365e41761b37b24c3a1a7eaf"
  },
  {
    "url": "images/devices.png",
    "revision": "443d32b076e55c2ea1a4034fe00da596"
  },
  {
    "url": "images/favicon.png",
    "revision": "0ab77a697d1104b2cfd91d88df4da0bf"
  },
  {
    "url": "images/icon-192x192.png",
    "revision": "10fe250d26d9f82c294ca66cb3aada7e"
  },
  {
    "url": "images/icon-256x256.png",
    "revision": "87a1574f589da6279de1ea5e3fc84245"
  },
  {
    "url": "images/icon-384x384.png",
    "revision": "716e621e17d749cea4cb4066c67cd774"
  },
  {
    "url": "images/icon-512x512.png",
    "revision": "c9610689f074e29a6b75a4449eecd6b7"
  },
  {
    "url": "images/icon-sprite.svg",
    "revision": "677433a0892aaed7b7d2628c313c9775"
  },
  {
    "url": "images/project-logos/browser-monkey.png",
    "revision": "624f347fb2f9a57fffb7afe375ca900f"
  },
  {
    "url": "images/project-logos/hyperdom.png",
    "revision": "aa85c9cf2be345f0d1e21a9a508927b8"
  },
  {
    "url": "images/sprout.svg",
    "revision": "308c1943a0e84e48107cfa45ec5ef326"
  },
  {
    "url": "images/stars-bg.svg",
    "revision": "1c4a993dbf9ad6ad61bbe35b760733e7"
  },
  {
    "url": "images/team-avatars/adrian.jpg",
    "revision": "903501dca176ed6591f560371e0b9b5c"
  },
  {
    "url": "images/team-avatars/alec.jpg",
    "revision": "a7b8d1d60752191e3a3b3cf6a1277102"
  },
  {
    "url": "images/team-avatars/alex.jpg",
    "revision": "97241a4b10e478254f7d1dd4a89d1b5f"
  },
  {
    "url": "images/team-avatars/andrei.jpg",
    "revision": "28dd09d5e2e9bccb74eaa2753002c283"
  },
  {
    "url": "images/team-avatars/artem.jpg",
    "revision": "08c42e61c121b013fecc87d871e2c705"
  },
  {
    "url": "images/team-avatars/derek.jpg",
    "revision": "2d890c614aa56e6c281893ff3bdfd88f"
  },
  {
    "url": "images/team-avatars/josh.jpg",
    "revision": "6f98a1b1313b60d4b91843979404f0ea"
  },
  {
    "url": "images/team-avatars/paul.jpg",
    "revision": "f897042de4e4d54e2e38f48b2f374cd4"
  },
  {
    "url": "images/team-avatars/tim.jpg",
    "revision": "f3a2a6bc24b44ab62620e1ca1dcfc00b"
  },
  {
    "url": "images/team-avatars/you.png",
    "revision": "15e5be118ae35f5ce4308595f42d094c"
  },
  {
    "url": "images/tile-wide.png",
    "revision": "ce0dd4d7230bfcc81a09f107f110dc5f"
  },
  {
    "url": "images/tile.png",
    "revision": "74cd11c71049d7f4e11e858e266c36fc"
  },
  {
    "url": "index.html",
    "revision": "4af28cec69ebf932b27d7d30fa85c27f"
  },
  {
    "url": "js/main.js",
    "revision": "9220b60b32955a3370a635ba088694f9"
  },
  {
    "url": "js/plugins.js",
    "revision": "be48f904542fff8c91566f58cba1f46b"
  },
  {
    "url": "learn/full-stack-apps/index.html",
    "revision": "07379423db94b682fb984f044b246f9b"
  },
  {
    "url": "learn/full-stack-bdd/index.html",
    "revision": "d09d86858ad1bdf59ca013313c92c4c9"
  },
  {
    "url": "learn/full-stack-testing/images/artemave-fullstack-testing.jpg",
    "revision": "8ba2e54346b23be318308514963b62f7"
  },
  {
    "url": "learn/full-stack-testing/index.html",
    "revision": "1b5069bf9e25773bb3f6f00f702b1ea5"
  },
  {
    "url": "learn/index.html",
    "revision": "abdf650b97626d85d66ffb9db146c165"
  },
  {
    "url": "projects/browser-monkey/images/monkey.png",
    "revision": "81fcf838b1c5b603dd14a26482a03fb2"
  },
  {
    "url": "projects/browser-monkey/images/screen-code.jpg",
    "revision": "b1791ef4ec533b67fe47f27636e15144"
  },
  {
    "url": "projects/browser-monkey/index.html",
    "revision": "95dcc354c6e2a9069ad102e346b5cfdf"
  },
  {
    "url": "projects/coypu/index.html",
    "revision": "dbf9df6d5776a1ebcefaa7b45b1b179f"
  },
  {
    "url": "projects/cucumber-electron/index.html",
    "revision": "25b07800616877734dfd3fb5f9ce2a3d"
  },
  {
    "url": "projects/httpism/index.html",
    "revision": "37629b150b26f3da637de84c1d87717b"
  },
  {
    "url": "projects/hyperdom/index.html",
    "revision": "8fcd9deea12b9bf014eb70bfbc0bf47c"
  },
  {
    "url": "projects/index.html",
    "revision": "858e15a01ea5fffd56153f39b88a9421"
  },
  {
    "url": "projects/shipping-report/images/shipping-report-logo.png",
    "revision": "b7dd7ae23d6f350b741b1fde26f058c3"
  },
  {
    "url": "projects/shipping-report/images/shipping-report-screenshot.png",
    "revision": "e0dd07dafe743a77e98e9858c7d4d020"
  },
  {
    "url": "projects/shipping-report/index.html",
    "revision": "80c427e45465cf8ba94092a8b25c69f7"
  },
  {
    "url": "projects/sworm/index.html",
    "revision": "7cb689d3d732af51818de2a77bca1fd5"
  },
  {
    "url": "projects/vinehill/index.html",
    "revision": "cb141045afe1c5a5af63f366cafa1c4c"
  },
  {
    "url": "styles.css",
    "revision": "7a7babe392345da81f7cc7d55d300659"
  },
  {
    "url": "work/7digital/images/7digital-800x445.jpg",
    "revision": "fa56cb6989436aded883ac55ae064eff"
  },
  {
    "url": "work/7digital/images/musichub.jpg",
    "revision": "662514d0361d0a94524e7eef7df3ca83"
  },
  {
    "url": "work/7digital/index.html",
    "revision": "c0ae92dafe2d7edbfc4cb207124ea4c1"
  },
  {
    "url": "work/bbc/images/bbc2.png",
    "revision": "b2478c7cea7bb1666e2c5118d0d40e41"
  },
  {
    "url": "work/bbc/index.html",
    "revision": "d998b1280536977812241c7f94226c51"
  },
  {
    "url": "work/broadband-choices/images/bc.png",
    "revision": "bbc5531b017a5268e8e990c38225ab23"
  },
  {
    "url": "work/broadband-choices/images/comparaiso.png",
    "revision": "2ba3cc3d0c13bf7baf777a11742c793d"
  },
  {
    "url": "work/broadband-choices/index.html",
    "revision": "eec47b30afbe6dd94fb2e14756644410"
  },
  {
    "url": "work/camden/images/camden-lock.jpg",
    "revision": "1c05e1ffb561fdaed66ea017a1876fbe"
  },
  {
    "url": "work/camden/images/laptop-screenshot.jpg",
    "revision": "52779ba9875277eeaecfae29a839727a"
  },
  {
    "url": "work/camden/index.html",
    "revision": "ea9bbb0412b6bef7efc8e04768bba56a"
  },
  {
    "url": "work/euromoney/index.html",
    "revision": "9d9726825bd3b1f00ee0ccec49143e7a"
  },
  {
    "url": "work/farmdrop/images/farm1.png",
    "revision": "ecbbf055f32734ddf8b0d24905ca3711"
  },
  {
    "url": "work/farmdrop/images/farm2.jpg",
    "revision": "0173ca0a737f8b6c66628e8137309e6b"
  },
  {
    "url": "work/farmdrop/index.html",
    "revision": "3858ba67673ca5179b1b5fdfa7052328"
  },
  {
    "url": "work/imd/index.html",
    "revision": "632ee4ee608667b68f6f479fc7069ff0"
  },
  {
    "url": "work/index.html",
    "revision": "8ef21ea96087c69a3044f5376028ba07"
  },
  {
    "url": "work/scribeasy/images/classroom.jpg",
    "revision": "6e4187e7f0580c16a14db3707b91094c"
  },
  {
    "url": "work/scribeasy/images/hand-drawing.jpg",
    "revision": "a1e0d9804da133dde9788341aba02caf"
  },
  {
    "url": "work/scribeasy/images/ipad-table.jpg",
    "revision": "ac03d21afb5468448d7022b7f02beff1"
  },
  {
    "url": "work/scribeasy/images/scribeasy-logo.png",
    "revision": "db27825664c0456bcd847ef65d27d1cf"
  },
  {
    "url": "work/scribeasy/index.html",
    "revision": "5eb8d6707e7aed64b4f61631f8979a80"
  },
  {
    "url": "work/shopa/images/shopa1.png",
    "revision": "f0ac23c9b032ebbab66c7ff6480056f9"
  },
  {
    "url": "work/shopa/images/shopa2.png",
    "revision": "f4f38c96e1fe6abbda5a546036b9b24b"
  },
  {
    "url": "work/shopa/index.html",
    "revision": "a5284f8ca3c6662f9a0dae71d125a0c8"
  },
  {
    "url": "work/snoozle/images/screenshot.png",
    "revision": "401785bf133c7027cfb045cb3bf9ddbb"
  },
  {
    "url": "work/snoozle/images/splash.jpg",
    "revision": "1e9da770998f25c5489b0bf25802fa9d"
  },
  {
    "url": "work/snoozle/index.html",
    "revision": "22d1b9feff8ae5cd429ada01e1dd5de4"
  },
  {
    "url": "work/the-pigeonhole/images/book.png",
    "revision": "76a9e408a9ffdbc93f912fccea15b53c"
  },
  {
    "url": "work/the-pigeonhole/images/splash.jpg",
    "revision": "a4f9155557767d37db84a5d0722931a6"
  },
  {
    "url": "work/the-pigeonhole/index.html",
    "revision": "4d53d1284ee0052393792bffbd4ac8ea"
  },
  {
    "url": "work/travcorp/images/ipad-laptop.jpg",
    "revision": "1595c907b61680e4059d6c4317a3c0ec"
  },
  {
    "url": "work/travcorp/images/lap-laptop.jpg",
    "revision": "eb6b46214eda15f87b111b5099b85199"
  },
  {
    "url": "work/travcorp/images/map-car.jpg",
    "revision": "1f2ed4d3ff0aef214283b080c24092c5"
  },
  {
    "url": "work/travcorp/index.html",
    "revision": "9cbf0f439db56f3ea09c39de15854afa"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
