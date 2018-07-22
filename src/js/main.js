;(function() {
  // Header expand toggle
  var siteHeader = document.querySelector('.js-site-header')
  var expandToggle = document.querySelector('.js-expand-toggle')
  expandToggle.addEventListener('click', function() {
    siteHeader.classList.toggle('is-expanded')
    expandToggle.classList.toggle('is-active')
  })

  // Header shadow on scroll
  window.addEventListener(
    'scroll',
    debounce(function() {
      if (window.scrollY > 0) {
        siteHeader.classList.add('is-scrolled')
      } else {
        siteHeader.classList.remove('is-scrolled')
      }
    }, 250)
  )

  // ScrollTrigger
  // https://github.com/terwanerik/ScrollTrigger
  if (window.matchMedia('(min-width: 768px)').matches) {
    document.addEventListener('DOMContentLoaded', function() {
      var trigger = new ScrollTrigger() // eslint-disable-line
    })
  }

  // Scroll to element
  var pageJumpAnchor = document.querySelector('.js-page-jump')
  if (pageJumpAnchor) {
    var pageJumpId = pageJumpAnchor.hash.substring(1)
    var pageJumpElem = document.getElementById(pageJumpId)
    pageJumpAnchor.onclick = function(event) {
      event.preventDefault()
      pageJumpElem.scrollIntoView({ behavior: 'smooth' })
      var scrolledY = window.scrollY
      if (scrolledY) {
        window.scroll(0, scrolledY - siteHeader.offsetHeight)
      }
    }
  }

  // Lozad.js
  // https://github.com/ApoorvSaxena/lozad.js
  var observer = lozad('.js-lazyload')
  observer.observe()

  // Debounce
  // https://remysharp.com/2010/07/21/throttling-function-calls
  function debounce(fn, delay) {
    var timer = null
    return function() {
      var context = this
      var args = arguments
      clearTimeout(timer)
      timer = setTimeout(function() {
        fn.apply(context, args)
      }, delay)
    }
  }
})()
