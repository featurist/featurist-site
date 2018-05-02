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
    "revision": "df637d08040ef7a7d51fcac334feb032"
  },
  {
    "url": "about/images/featurist-team.jpg",
    "revision": "0bc395100cef9f6ec33bfbfdfba1c83b"
  },
  {
    "url": "about/index.html",
    "revision": "229f09b912ec54301cb20bc61c7a5e14"
  },
  {
    "url": "careers/images/featurists-discussing.jpg",
    "revision": "ca8b974becd498e098e4e56e7fcc9da3"
  },
  {
    "url": "careers/index.html",
    "revision": "695f85f515f7bf934300b13dcabb8a42"
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
    "revision": "838a771258f27958bc5dc328791f621f"
  },
  {
    "url": "code/coypu/index.html",
    "revision": "3458957a55cac5a5c06ef7a8e4199a24"
  },
  {
    "url": "code/cucumber-electron/index.html",
    "revision": "210124ed13cf0b5251ad9ceec15c06d9"
  },
  {
    "url": "code/httpism/index.html",
    "revision": "7043aaa9d55fe5921f2d5b236a6d1f76"
  },
  {
    "url": "code/hyperdom/index.html",
    "revision": "a6d9d3684385aa67b84412afec690331"
  },
  {
    "url": "code/index.html",
    "revision": "2dc4aacef11b9c0d041ee05378ce36d3"
  },
  {
    "url": "code/sworm/index.html",
    "revision": "f9eccf31eb1caafaa09ade0caa8d0306"
  },
  {
    "url": "code/vinehill/index.html",
    "revision": "fef06e67a903d3346b2a1e2a1b9412b9"
  },
  {
    "url": "contact/index.html",
    "revision": "02a632d1e550e281a6d3b3adf4b758df"
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
    "revision": "cd46838f8a849d81e711288c375f359b"
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
    "revision": "dd5437f72b84647aa9f54ae0acf8916d"
  },
  {
    "url": "learn/full-stack-bdd/index.html",
    "revision": "018345e0e0e1c1f70a001500a98e4f48"
  },
  {
    "url": "learn/full-stack-testing/images/artemave-fullstack-testing.jpg",
    "revision": "8ba2e54346b23be318308514963b62f7"
  },
  {
    "url": "learn/full-stack-testing/index.html",
    "revision": "d2dd13ab33a486b871b47eca16048649"
  },
  {
    "url": "learn/index.html",
    "revision": "ddf7fac26b40ab0523f0bcea6826ec34"
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
    "revision": "03bf3f4201d75b43c846a21ed33b6869"
  },
  {
    "url": "work/bbc/images/bbc2.png",
    "revision": "b2478c7cea7bb1666e2c5118d0d40e41"
  },
  {
    "url": "work/bbc/index.html",
    "revision": "b3b7b986a8de3c4bdfa50a3ffdb05e55"
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
    "revision": "07fc23c8f3b09addab3057d63d2c757a"
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
    "revision": "0996c361aff06525d56dc437b9716661"
  },
  {
    "url": "work/euromoney/index.html",
    "revision": "68aeea8085c3d74a004abbf085aa7527"
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
    "revision": "5734e7821f1dc933f04e043238500a40"
  },
  {
    "url": "work/imd/index.html",
    "revision": "aec728e205a2847556bf2e1cbf351a52"
  },
  {
    "url": "work/index.html",
    "revision": "5199a15657a1d097f74c583697ca6fc1"
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
    "revision": "d25d6160205d1768c54e43e5cc44ff2d"
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
    "revision": "2207a2a1da9f71be3fa4457a295b6bf5"
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
    "revision": "e7fc78fa0dcf723a879bda3277d9a15e"
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
    "revision": "4fcba10f410ac29f2a1e4d64849d0b68"
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
    "revision": "b3b3151a5675a57f6642e1c1e8532c2e"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
