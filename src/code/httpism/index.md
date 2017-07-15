[httpism](https://github.com/featurist/httpism) is a node and browser HTTP client that does a few things differently:

- middleware: customise a HTTP client for your API by sticking together middleware, for example, for content handlers or authentication schemes.
- hypermedia: responses can be used to make further requests relative to the response URI, just like a browser.
- useful by default: sends and receives JSON, throws exceptions on 400-500s, follows redirects. Of course, you can disable this stuff when it gets in your way, or hit raw HTTP and streams when you need to get clever.
- promises: no messing about with callbacks.
for browser and server alike.
