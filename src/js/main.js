(function () {
  // Headroom.js
  // https://github.com/WickyNilliams/headroom.js
  var siteHeader = document.querySelector('.SiteHeader')
  var headroom = new Headroom(siteHeader, {
    classes: {
      initial: 'SiteHeader',
      pinned: 'is-pinned',
      unpinned: 'is-unpinned',
      top: 'is-top',
      notTop: 'is-notTop',
      bottom: 'is-bottom',
      notBottom: 'is-notBottom'
    },
    onTop: function () {
      document.body.style.paddingTop = '0'
    },
    onNotTop: function () {
      document.body.style.paddingTop = siteHeader.offsetHeight + 'px'
    }
  })
  headroom.init()

  // ScrollTrigger
  // https://github.com/terwanerik/ScrollTrigger
  if (window.matchMedia('(min-width: 768px)').matches) {
    document.addEventListener('DOMContentLoaded', function () {
      new ScrollTrigger({ // eslint-disable-line no-new
        once: true
      })
    })
  }

  var pageJumpAnchor = document.querySelector('.js-page-jump')
  if (pageJumpAnchor) {
    var pageJumpId = pageJumpAnchor.hash.substring(1)
    var pageJumpElem = document.getElementById(pageJumpId)
    pageJumpAnchor.onclick = function (event) {
      event.preventDefault()
      pageJumpElem.scrollIntoView({behavior: 'smooth'})
      var scrolledY = window.scrollY
      if (scrolledY) {
        window.scroll(0, scrolledY - siteHeader.offsetHeight)
      }
    }
  }
})()
