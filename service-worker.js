importScripts('workbox-sw.prod.v2.1.2.js');

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
    "revision": "b2b6f427e9cb55220ef168e834dc8e8c"
  },
  {
    "url": "about/images/featurist-team.jpg",
    "revision": "0bc395100cef9f6ec33bfbfdfba1c83b"
  },
  {
    "url": "about/index.html",
    "revision": "7dfa3d45bf901810ae91627e3e7f8360"
  },
  {
    "url": "careers/images/aa_de_retreat.jpg",
    "revision": "29ffc0ac1ba34985ad87df4b96858289"
  },
  {
    "url": "careers/index.html",
    "revision": "fb71748193fb2992b5e227677708b8bf"
  },
  {
    "url": "code/browser-monkey/images/monkey.png",
    "revision": "81fcf838b1c5b603dd14a26482a03fb2"
  },
  {
    "url": "code/browser-monkey/images/screen-code.jpg",
    "revision": "b1791ef4ec533b67fe47f27636e15144"
  },
  {
    "url": "code/browser-monkey/index.html",
    "revision": "0f701588c9577761f15dfb5cd8f10f15"
  },
  {
    "url": "code/coypu/index.html",
    "revision": "24c2e30748a4a4ec58aec1db6d348c28"
  },
  {
    "url": "code/cucumber-electron/index.html",
    "revision": "d904f9d304299c4bcaa4f1dad722fd50"
  },
  {
    "url": "code/httpism/index.html",
    "revision": "804ff9ccca1ca696a4d9dd7d31f5ba2f"
  },
  {
    "url": "code/hyperdom/index.html",
    "revision": "77ccd63bb1b7c106a0679846412f3650"
  },
  {
    "url": "code/index.html",
    "revision": "ade9fe74a44b5442bb7d230796d4da09"
  },
  {
    "url": "code/sworm/index.html",
    "revision": "cc781d63ea24c6d82ba31fa27b3c2307"
  },
  {
    "url": "code/vinehill/index.html",
    "revision": "de175f357ac75998a34394a51c8bde5b"
  },
  {
    "url": "contact/index.html",
    "revision": "b78b0f48eb0a817170e57597857741ba"
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
    "revision": "627858107dbe56c48c67a64c9b64572c"
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
    "revision": "b38c5ddb260c665398cbb9b78819fd5f"
  },
  {
    "url": "js/main.js",
    "revision": "c5a7a903f8fa4b8ebcdb6db9c38f74fd"
  },
  {
    "url": "js/plugins.js",
    "revision": "ae07f7474e32ee7b37e6b525a655a8ea"
  },
  {
    "url": "learn/full-stack-apps/index.html",
    "revision": "0cefaa5e0b17484936f993cacadce9c8"
  },
  {
    "url": "learn/full-stack-bdd/index.html",
    "revision": "4da3924876f14240cbf2cc8129bedc33"
  },
  {
    "url": "learn/full-stack-testing/images/artemave-fullstack-testing.jpg",
    "revision": "8ba2e54346b23be318308514963b62f7"
  },
  {
    "url": "learn/full-stack-testing/index.html",
    "revision": "3f37d22f2ca208d725742a84ebdc77b4"
  },
  {
    "url": "learn/index.html",
    "revision": "877c512d79b99edc1da6a093ca7507d0"
  },
  {
    "url": "styles.css",
    "revision": "831e338f2dfc63e2e163e568dc4cf63a"
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
    "revision": "39b10ffff7c3cf3771f4b834825380d6"
  },
  {
    "url": "work/bbc/images/bbc2.png",
    "revision": "b2478c7cea7bb1666e2c5118d0d40e41"
  },
  {
    "url": "work/bbc/index.html",
    "revision": "77306dbb49efa31acfccbfda1fb50e81"
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
    "revision": "9df27cf17bb11d28daaaffb627c62528"
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
    "revision": "a068116fbd646db324f0390b85b0e2a5"
  },
  {
    "url": "work/euromoney/index.html",
    "revision": "975c579396f9477db60cb5af7e6e9189"
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
    "revision": "e25c90bcf4e83900c7a6e641e28f29af"
  },
  {
    "url": "work/imd/index.html",
    "revision": "c14b50f3c453220e6bd8d8f36eb6f03d"
  },
  {
    "url": "work/index.html",
    "revision": "29c47e68e48e51a5a9dd16dc3903f315"
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
    "revision": "95f23df6f0353408e7ac893c1fc0eb1a"
  },
  {
    "url": "work/scribeasy/index.html",
    "revision": "2efce7824b1c46592c7cda1ea9097e7b"
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
    "revision": "8a4a0c94ec6458b1d6212433a4fda576"
  },
  {
    "url": "work/snoozle/images/screenshot.png",
    "revision": "4d458106df607664f051e8882bb15216"
  },
  {
    "url": "work/snoozle/images/splash.jpg",
    "revision": "1c2d6c027e578a31cce8202d96abe3b3"
  },
  {
    "url": "work/snoozle/index.html",
    "revision": "cec664e4a4140709cf42e425f78ce73d"
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
    "revision": "1af07459bc02cff9092b213f38d8e9ff"
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
    "revision": "a973d555af60e6fba2a144427c724233"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
