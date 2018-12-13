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
    "revision": "373bb5b69bf07dad3902016bf125a88d"
  },
  {
    "url": "about/images/featurist-team.jpg",
    "revision": "0bc395100cef9f6ec33bfbfdfba1c83b"
  },
  {
    "url": "about/index.html",
    "revision": "932de5aae4ffbb3675f1723a92d761bc"
  },
  {
    "url": "careers/images/featurists-discussing.jpg",
    "revision": "ca8b974becd498e098e4e56e7fcc9da3"
  },
  {
    "url": "careers/index.html",
    "revision": "a3f22fcea88c91475b7b8a978eb2194a"
  },
  {
    "url": "contact/index.html",
    "revision": "34b817bd239761c0f51bf3e23a0bb747"
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
    "revision": "d0c4d2b6e693306c2b71f00e69ebfda4"
  },
  {
    "url": "js/main.js",
    "revision": "5e0923e0cee9337ac8cdefaed4680f69"
  },
  {
    "url": "js/plugins.js",
    "revision": "497e30214c60d977c8a80fde2068cde7"
  },
  {
    "url": "learn/full-stack-apps/index.html",
    "revision": "02dcc5f3cb353cecc4acfde8fbc93a70"
  },
  {
    "url": "learn/full-stack-bdd/index.html",
    "revision": "ad9aaa2cf4691e9e331dcd726cc8444e"
  },
  {
    "url": "learn/full-stack-testing/images/artemave-fullstack-testing.jpg",
    "revision": "8ba2e54346b23be318308514963b62f7"
  },
  {
    "url": "learn/full-stack-testing/index.html",
    "revision": "19d4a14a40a6f264ba2cb688c9e5b5d5"
  },
  {
    "url": "learn/index.html",
    "revision": "6d540425bad0f9060521bb378ead35e8"
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
    "revision": "dac18be25fafc32df034d4e05dba911e"
  },
  {
    "url": "projects/coypu/index.html",
    "revision": "89878fe3acd42d1a8dd0b5358506aefa"
  },
  {
    "url": "projects/cucumber-electron/index.html",
    "revision": "ec01a4ffa914080b9cb0d771fca2a79d"
  },
  {
    "url": "projects/httpism/index.html",
    "revision": "3c9236a9a50e01ce8e5ebdfac10a4f13"
  },
  {
    "url": "projects/hyperdom/index.html",
    "revision": "3c6ef4ed58c5fca72ad548a85b22156a"
  },
  {
    "url": "projects/index.html",
    "revision": "dda7dc672ed76caf2431870ea5ca71e8"
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
    "revision": "1d3f2da63e50d90c226f762c8ed0c737"
  },
  {
    "url": "projects/sworm/index.html",
    "revision": "9735db1175f7b09a375e8adbf1fb85c6"
  },
  {
    "url": "projects/vinehill/index.html",
    "revision": "0ab96653dabe5711a654ebfc1898d17f"
  },
  {
    "url": "styles.css",
    "revision": "9e2cd9e37207a6b57a2bfdb276cf607d"
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
    "revision": "2bb2726dbe7392a66e553e172059896a"
  },
  {
    "url": "work/bbc/images/bbc2.png",
    "revision": "b2478c7cea7bb1666e2c5118d0d40e41"
  },
  {
    "url": "work/bbc/index.html",
    "revision": "f9620aaf18d8629cfa49cf931db79e66"
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
    "revision": "f2f7d385dece2cbe70fd4499742ef080"
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
    "revision": "376ab3e658546fff23c137d852455582"
  },
  {
    "url": "work/euromoney/index.html",
    "revision": "dc38b7cad07d884c79a00f029e058831"
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
    "revision": "ee69202a11389331aa438c01c33a3f97"
  },
  {
    "url": "work/imd/index.html",
    "revision": "bb01245596209beb854051c0412b5e5e"
  },
  {
    "url": "work/index.html",
    "revision": "a3cf25ba921eb39da298d2c7f66a4783"
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
    "revision": "e2a32543ff8af3736e82e20736c05ce0"
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
    "revision": "180744066781249313d436e40dacd98e"
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
    "revision": "398f2b44265551ae6549039c64c30592"
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
    "revision": "78a235d1ee32448ae5126a3c6efa1e7d"
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
    "revision": "0698c75db74a8fab912b258b2f2f81df"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
