[Vine Hill](https://github.com/featurist/vinehill) is a virtual HTTP adapter to allow in process XHR.

## Why?

Full stack testing of server and client code allows you to describe at a high level what an application does. Actually starting and running servers along with dispatching requests is slow and prone to errors.

Vine Hill allows you to "start" a server virtually and connect it with your client code by installing a bridge between XmlHttpRequest and your server. This allows the server to respond to requests in the same process as your client code and tests are running.

What you get is high performance tests with easy to ready stacktraces and great debugability.
