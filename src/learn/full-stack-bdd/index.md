On the [cucumber podcast from Feb 2017](https://cucumber.io/blog/2017/02/23/cucumber-electron) Josh rants about the perils of testing through browser UIs and challenges the traditional advice of how many tests to write at each level of the test pyramid.

Running test automation and application code in the same process results in faster, more reliable tests that are easier to debug. This makes it practical to write more full stack tests and fewer unit tests, turning the pyramid upside down.

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/309144529&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

Josh introduces cucumber-electron, an open source tool he developed with the help of other Featurist developers, that allows running full stack tests in a single process. He goes on to talk about a few libraries that complement cucumber-electron: [browser-monkey](https://github.com/featurist/browser-monkey) for DOM manipulation and assertions, and [vinehill](https://github.com/featurist/vinehill) bridging the client-server gap instead of HTTP.

Finally he talks briefly about the future of full stack testing as he sees it, challenging the notion that asynchronous web apps necessarily imply asynchronous full stack tests.

## Links

* Listen to or download the [podcast on soundcloud](https://soundcloud.com/cucumber-podcast/cucumber-electron/s-xIqQF)
* Listen or subscribe to the [podcast on iTunes](https://itunes.apple.com/gb/podcast/cucumber-podcast-rss/id1078896635)
* Check out an [example of all the bits in action](https://github.com/joshski/cucumbers-on-vine-hill)
* Get a sneak preview of [banana-shark: joshski's synchronous test runner](https://github.com/featurist/banana-shark)
