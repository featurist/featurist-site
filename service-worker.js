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
    "revision": "810a868fedd0b2414cc4ed7eb6cabb61"
  },
  {
    "url": "about/images/featurist-team.jpg",
    "revision": "0bc395100cef9f6ec33bfbfdfba1c83b"
  },
  {
    "url": "about/index.html",
    "revision": "83077bcfaaa4c94d27434ed58bc51394"
  },
  {
    "url": "careers/images/aa_de_retreat.jpg",
    "revision": "29ffc0ac1ba34985ad87df4b96858289"
  },
  {
    "url": "careers/index.html",
    "revision": "897fe54029242ab64a83df71c2bd6b7b"
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
    "revision": "c44d61914a53f203441d6aade149d064"
  },
  {
    "url": "code/coypu/index.html",
    "revision": "0d89f2cb865a5b2405d24d4b4e6fa972"
  },
  {
    "url": "code/cucumber-electron/index.html",
    "revision": "50be669b68f6bb4c74bb5676157db057"
  },
  {
    "url": "code/httpism/index.html",
    "revision": "eb0c1892cf0440f36a08a4083241090c"
  },
  {
    "url": "code/hyperdom/index.html",
    "revision": "3cfc463cdcb22f4d65cc166e6a166e84"
  },
  {
    "url": "code/index.html",
    "revision": "33438536dbf26cef8b43f9635ac1a334"
  },
  {
    "url": "code/sworm/index.html",
    "revision": "554ac9986663bf5d618e8b9bb92583dd"
  },
  {
    "url": "code/vinehill/index.html",
    "revision": "f45e80db07ab01b8e50f17bdbbf6a017"
  },
  {
    "url": "contact/index.html",
    "revision": "c1a740caff587f2d1ca8539889074b30"
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
    "url": "images/team-avatars/alex.png",
    "revision": "56d3f9791bc68109c01aea12a5e7da69"
  },
  {
    "url": "images/team-avatars/andrei.jpg",
    "revision": "71b833611fdc0e18e1663b2b527a33d6"
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
    "revision": "06242b462548a77a1dac7b4eedc9eadf"
  },
  {
    "url": "js/main.js",
    "revision": "c5a7a903f8fa4b8ebcdb6db9c38f74fd"
  },
  {
    "url": "js/plugins.js",
    "revision": "b57b5427845a12e4d367d2d7f3f2439c"
  },
  {
    "url": "learn/full-stack-apps/index.html",
    "revision": "1e6379a7f56ba697f75a946049abaf16"
  },
  {
    "url": "learn/full-stack-bdd/index.html",
    "revision": "88725392ac48645e82c9a9a16da32098"
  },
  {
    "url": "learn/full-stack-testing/images/artemave-fullstack-testing.jpg",
    "revision": "8ba2e54346b23be318308514963b62f7"
  },
  {
    "url": "learn/full-stack-testing/index.html",
    "revision": "9cc367e0f92a3d90811c01cc7c742517"
  },
  {
    "url": "learn/index.html",
    "revision": "69160c7a8541fb46c45a4f5e23ab0a60"
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
    "revision": "8a6e059b02293480a9bbbab8e1000d4c"
  },
  {
    "url": "work/bbc/images/bbc2.png",
    "revision": "b2478c7cea7bb1666e2c5118d0d40e41"
  },
  {
    "url": "work/bbc/index.html",
    "revision": "b42589b5a5bc1fe1ff0498e6c07d9b99"
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
    "revision": "ccff9b59d1d5b2776f5f2ec8f5cd5ed0"
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
    "revision": "c59401c297e2149d8519925bc6f5b217"
  },
  {
    "url": "work/euromoney/index.html",
    "revision": "4995be7c3bbae13edfedb4a50417967f"
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
    "revision": "1165db2a9bc153958df9797a04037d37"
  },
  {
    "url": "work/imd/index.html",
    "revision": "de71b021bdf7085ed95de57746852efa"
  },
  {
    "url": "work/index.html",
    "revision": "a553b59903f5d42676f52eec5cef2036"
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
    "revision": "e461ac77277ba5da422021f050ea2764"
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
    "revision": "e24aab1c5529df85fec69bcff59fdc5c"
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
    "revision": "2fe0d90d7fcb244e040e4327a9d86a03"
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
    "revision": "770c3942cb5d888706b0e47c0c564df9"
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
    "revision": "f8e983c4705a0521265af66c3c60ee41"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
