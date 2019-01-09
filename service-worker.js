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
    "revision": "51e8b7d38c8e531788f194cc2e1549b3"
  },
  {
    "url": "about/images/featurist-team.jpg",
    "revision": "0bc395100cef9f6ec33bfbfdfba1c83b"
  },
  {
    "url": "about/index.html",
    "revision": "f23589b76fafa27dbaf28da9a0ab2156"
  },
  {
    "url": "careers/images/featurists-discussing.jpg",
    "revision": "ca8b974becd498e098e4e56e7fcc9da3"
  },
  {
    "url": "careers/index.html",
    "revision": "69ec3a99d2e06159972f36b9efbdb59a"
  },
  {
    "url": "contact/index.html",
    "revision": "f12ce12963d89deca8f870482ed492e2"
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
    "revision": "7524d51bd0b1d2da7c86414dfd835a27"
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
    "revision": "75695bd674ae1de4dc2f632db50d3dc9"
  },
  {
    "url": "js/main.js",
    "revision": "b3cbd8b04f92056ffe5528a2c5d05dd5"
  },
  {
    "url": "js/plugins.js",
    "revision": "7592ccee3f3ed2202beb041dbb0461ba"
  },
  {
    "url": "learn/full-stack-apps/index.html",
    "revision": "5e0e9f917405cf99a44db486bca5c2fd"
  },
  {
    "url": "learn/full-stack-bdd/index.html",
    "revision": "ce3fc6395efcd8f0fdca908b99db4421"
  },
  {
    "url": "learn/full-stack-testing/images/artemave-fullstack-testing.jpg",
    "revision": "8ba2e54346b23be318308514963b62f7"
  },
  {
    "url": "learn/full-stack-testing/index.html",
    "revision": "030692ef67ded67eb0a87417bf5d6176"
  },
  {
    "url": "learn/index.html",
    "revision": "5ac737d8195d55da8a261ade1ba048a3"
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
    "revision": "c46f3b55bfba0d80e5922f4daec7a2f8"
  },
  {
    "url": "projects/coypu/index.html",
    "revision": "7a8edbdade7217a16ae000cceb979117"
  },
  {
    "url": "projects/cucumber-electron/index.html",
    "revision": "03bf919c635507311fdba84a9008d486"
  },
  {
    "url": "projects/httpism/index.html",
    "revision": "f2086400ae4821f21300bb5cae5db2fb"
  },
  {
    "url": "projects/hyperdom/index.html",
    "revision": "49daceaa6e20a7ff9c456526780aa8fa"
  },
  {
    "url": "projects/index.html",
    "revision": "721ac3487cdd57565d8821424f056e8a"
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
    "revision": "43a6bdd85c93eeedef5700c15ce1b782"
  },
  {
    "url": "projects/sworm/index.html",
    "revision": "f2a9890a4edb3d003a3143db2e5f9801"
  },
  {
    "url": "projects/vinehill/index.html",
    "revision": "6576f0520471403417bb4932edc1d079"
  },
  {
    "url": "styles.css",
    "revision": "6c38f270c04091e6f6059316f0f43512"
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
    "revision": "52aabc274eb6132bf5f2205fbf7260c4"
  },
  {
    "url": "work/bbc/images/bbc2.png",
    "revision": "b2478c7cea7bb1666e2c5118d0d40e41"
  },
  {
    "url": "work/bbc/index.html",
    "revision": "d983dcef065584a0291df5915f1bd061"
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
    "revision": "44d268d24074db4ccdcdc0786395419a"
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
    "revision": "4dd36b8e2ec6d5f4853d5e1d410c6d60"
  },
  {
    "url": "work/euromoney/index.html",
    "revision": "f19e02831315b1b576489eccb465acd1"
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
    "revision": "83b54ef871793b080ba5fe1a380186b8"
  },
  {
    "url": "work/imd/index.html",
    "revision": "5d6b7a51bbf0bba38736eb8b35f7308d"
  },
  {
    "url": "work/index.html",
    "revision": "38574e47ca0d2af87e97d4bed23b0915"
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
    "revision": "5b287b77d3580ee45c6db5c65b97413b"
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
    "revision": "cb2178b62b7b3a423331c9a1bc8ee89b"
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
    "revision": "43f05ac1b1b4b0339e0b092148a55dce"
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
    "revision": "4fc4cebfa337d9957adecfb6b2d0f464"
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
    "revision": "96b8490c7c544b87f201ffe6691abdf9"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
