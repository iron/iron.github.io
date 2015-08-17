## Introduction

Iron is a fast and flexible middleware-oriented framework that provides a small
but robust foundation for creating complex applications and RESTful APIs. No
middleware are bundled with Iron - instead, everything is drag-and-drop,
allowing for ridiculously modular setups.

## Installation

Iron can be used on any channel of the [Rust language](https://www.rust-lang.org):
stable, beta, or nightly.

To quickly get started creating Iron applications, you should use
[Iron-Core](https://github.com/iron/core), which bundles several common
middleware, including Routing, Body Parsing, and Logging.

## Iron::new()

Iron applications are thin wrappers around a middleware dispatcher which,
usually, runs requests through registered middleware in a stack-like order.
Iron provides an expressive base upon which you can build complex middleware
but remains extremely lightweight by not bundling any middleware.

Middleware is registered using `Iron::link`.

Such is Hello World:

```rust
extern crate iron;
use std::io::net::ip::Ipv4Addr;
use iron::{Iron, Request, Response, ServerT, Alloy};
use iron::middleware::{Status, Continue};

fn hello_world(_: &mut Request, res: &mut Response, _: &mut Alloy) -> Status {
    res.write(b"Hello World!");
    Continue
}

fn main() {
  let mut server: ServerT = Iron::new();
  server.link(hello_world);
  server.listen(Ipv4Addr(127, 0, 0, 1), 3000);
}

```

### Middleware

In Iron, any middleware must implement the Middleware trait, which is defined
like so:

```
pub trait Middleware {
    fn enter(&mut self, _: &mut Request, _: &mut Response, _: &mut Alloy) -> Status;
    fn exit(&mut self, _: &mut Request, _: &mut Response, _: &mut Alloy) -> Status;
}
```

The `enter` method of any middleware gets called when a request is going down
the middleware stack, and the `exit` method is called when a request is making
its way back up either because it hit an unwinding middleware or made it
through the entire stack.

Both `enter` and `exit` are optional and have default no-op implementations.

There is a convenience implementation of Middleware for all functions with the
same signature as `enter` or `exit` sans `self` which will simply register
that function to be called as the `enter` callback. This is extremely useful
for rapidly creating simple, single-direction middleware. Multidirectional
middleware will still need to implement the Middleware trait.

Here is an example that integrates both:

```rust
#[deriving(Clone)]
struct ResponseTime { entry: u64 };

impl Middleware for ResponseTime {
    fn enter(&mut self, _: &mut Request, _: &mut Response, _: &mut Alloy) -> Status {
        self.entry = time::now(); Continue
    }
    fn exit(&mut self, _: &mut Request, _: &mut Response, _: &mut Alloy) -> Status {
        println!("Response took: {} ms", time::now() - self.entry);
    }
}

fn hello_world(_: &mut Request, res: &mut Response, _: &mut Alloy) -> Status {
    res.write(b"Hello World!");
    Continue
}

fn main() {
    let mut server: ServerT = Iron::new();
    server.link(ResponseTime { entry: 0u });
    server.link(hello_world);
}

```

### Request + Response

Request and Response are aliases for Request and ResponseWriter from rust-http.

Request contains all of the request information, and Response is a `Writer`
which represents the body of the response that will be sent to the client.

Iron provides several utility methods on Request and Response implemented as
mixin traits that can be found in the `Iron::mixin` module.

### Alloy

Alloy is an extremely flexible data store that is a wrapper around AnyMap, a
general data structure written by Chris Morgan. Alloy is a map *keyed by
types*, which allows your Middleware to store and expose arbitrary information
to other middleware and controllers.

For instance, BodyParser exposes a Parsed object which contains a Json object
that represents the parsed body. For instance:

```rust

fn echo(_: &mut Request, res: &mut Response, alloy: &mut Alloy) {
    let Parsed(body) = alloy.find::<Parsed>().unwrap();
    res.write(body.as_bytes());
}

fn main() {
    let mut server: ServerT = Iron::new();
    server.link(BodyParser::new());
    server.link(echo);
}

```

### Mixins

To provide additional APIs for the Request and Response objects, Iron utilizes
Mixin traits which add additional methods to Request and Response. To get
access to these methods you must bring their associated traits into scope by
`use`ing them.

Iron comes bundles with a few mixins for Request and Response for extremely
common methods that are comparatively annoying to work with otherwise, such as
getting the uri of the request or serving files with the correct MIME type.

### Chains

Chains are the internal representation of the middleware stack in Iron. The
default furnace behaves just as you would expect - it stores middleware as a
stack and unwinds the stack after all middleware have been run. However, Iron
is built to work with any implementation of the Chain trait, which can be
used to implement custom middleware dispatching for your Iron instance.

Most applications will be fine with the default Chain.

### Core

* [bodyparser](https://github.com/iron/bodyparser)
* [logger](https://github.com/iron/logger)
* [mount](https://github.com/iron/mount)
* [router](https://github.com/iron/router)
* [filter](https://github.com/iron/filter)
* [staticfile](https://github.com/iron/staticfile)
* [urlencoded](https://github.com/iron/urlencoded)

