---
layout: default
---

<h1 class="title">Iron</h1>
<p class="subtitle">extensible web framework for rust</p>

```rust
extern crate iron;

use iron::prelude::*;
use iron::status;

fn main() {
    Iron::new(|_: &mut Request| {
        Ok(Response::with((status::Ok, "Hello World!")))
    }).http("localhost:3000").unwrap();
}
```

## Introduction

Iron is a fast and flexible middleware-oriented server framework that provides a small but robust foundation for creating complex applications and RESTful APIs. No middleware are bundled with Iron – instead, everything is drag-and-drop, allowing for ridiculously modular setups.

## Installation

Iron targets stable Rust, which you can install [here](http://www.rust-lang.org/). To get Iron itself, just add it to your project's `Cargo.toml`.

```toml
[dependencies]
iron = "0.6.*"
```

## Documentation

Iron's documentation can be found on [Docs.rs](https://docs.rs/iron).

The preferred way to get help with Iron is to ask around on the mozilla IRC network on `#iron`, `#rust-webdev` or `#rust`.
