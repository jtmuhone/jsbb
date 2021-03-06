JSBB, the JavaScript Bulleting Board
====================================

Tech stack
----------

### DoneJS ([http://donejs.com/](http://donejs.com))

As the front-end client JavaScript framework.   
 
> "DoneJS is the next generation of JavaScriptMVC."

> "JavaScriptMVC (JMVC) is a MIT licensed, client-side, JavaScript framework
>  that builds maintainable, error-free, lightweight applications as quick
>  as possible. It packs best-of-breed libraries and tools that are
>  guaranteed to work together. It supports every browser that jQuery
>  supports."
	 
- CanJS ([http://canjs.us/](http://canjs.us))
- jQuery ([http://jquery.com/](http://jquery.com))
- jQuery++ ([http://jquerypp.com/](http://jquerypp.com))
- StealJS ([http://stealjs.com/](http://stealjs.com))
- FuncUnit ([http://funcunit.com/](http://funcunit.com))
- PhantomJS ([http://www.phantomjs.org](http://www.phantomjs.org/))

### Node.js ([http://nodejs.org](http://nodejs.org/))

As the back-end server framework.

> "Node.js is a platform built on Chrome's JavaScript runtime for easily
>  building fast, scalable network applications. Node.js uses an
>  event-driven, non-blocking I/O model that makes it lightweight and
>  efficient, perfect for data-intensive real-time applications that run
>  across distributed devices."
	 	
- Mongoose ([http://mongoosejs.com](http://mongoosejs.com/))
- Redis ([https://github.com/mranney/node_redis](https://github.com/mranney/node_redis/))
- Express ([http://expressjs.com](http://expressjs.com/))
- Optimist ([http://github.com/substack/node-optimist](http://github.com/substack/node-optimist/))

### socket.io ([http://socket.io](http://socket.io/))

As the WebSocket framework and library between client and server.

> "Socket.IO aims to make realtime apps possible in every browser and mobile
> device, blurring the differences between the different transport mechanisms.
> It's care-free realtime 100% in JavaScript."

### MongoDB ([http://www.mongodb.org](http://www.mongodb.org/))

As the main back-end database.

> "MongoDB (from "humongous") is an open source document-oriented NoSQL
>  database system written in the C++ programming language. It manages
>  collections of BSON documents."

### Redis ([http://redis.io](http://redis.io/))

As the session store.

> "Redis is an open source, advanced key-value store. It is often referred
>  to as a data structure server since keys can contain strings, hashes,
>  lists, sets and sorted sets."

Installation
------------

### Ubuntu 11.10

#### Basic libraries

    sudo apt-get install nodejs npm mongodb-server redis-server phantomjs
    npm install mongoose hiredis redis express socket.io optimist
    sudo apt-get install markdown

Getting started
---------------

    git clone --recursive git://github.com/jtmuhone/jsbb.git
    cd jsbb/client
    bin/unit-test
    bin/func-test
    
    TODO
