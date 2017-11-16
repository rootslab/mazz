### Mazz

[![NPM VERSION](http://img.shields.io/npm/v/mazz.svg?style=flat)](https://www.npmjs.org/package/mazz)
[![CODACY BADGE](https://img.shields.io/codacy/b18ed7d95b0a4707a0ff7b88b30d3def.svg?style=flat)](https://www.codacy.com/public/44gatti/mazz)
[![CODECLIMATE-TEST-COVERAGE](https://img.shields.io/codeclimate/coverage/github/rootslab/mazz.svg?style=flat)](https://codeclimate.com/github/rootslab/mazz)
[![LICENSE](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/rootslab/mazz#mit-license)

![NODE VERSION](https://img.shields.io/node/v/mazz.svg)
[![TRAVIS CI BUILD](http://img.shields.io/travis/rootslab/mazz.svg?style=flat)](http://travis-ci.org/rootslab/mazz)
[![BUILD STATUS](http://img.shields.io/david/rootslab/mazz.svg?style=flat)](https://david-dm.org/rootslab/mazz)
[![DEVDEPENDENCY STATUS](http://img.shields.io/david/dev/rootslab/mazz.svg?style=flat)](https://david-dm.org/rootslab/mazz#info=devDependencies)

[![NPM MONTHLY](http://img.shields.io/npm/dm/mazz.svg?style=flat)](http://npm-stat.com/charts.html?package=mazz)
![NPM YEARLY](https://img.shields.io/npm/dy/mazz.svg)

[![NPM GRAPH](https://nodei.co/npm/mazz.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/mazz/)

> __Mazz__, the fast way of the tonto, to simulate 16 indipendent hash functions,
> using a crypto digest. If you need a set of independent pseudo-random hash functions,
> try __[Hazz](https://github.com/rootslab/hazz)__.
	

> PROS:
> - you can hash inputs of arbitrary length ( > 64 bytes ) with the best performances
> - no random table in memory, like __Hazz__

> CONS: 
>  - the maximum number of hash functions are 16 (from index 0 to 15), if u need more (or less) try __Hazz__
>  - the same input produces the same result every time, no pseudo-randomness was involved for generating functions results
>  - it is slower than __Hazz__ for inputs ~<= 64 bytes

### Install

```bash
$ npm install mazz [-g]
```

> __require__:

```javascript
var Mazz  = require( 'mazz' );
```
### Run Tests

> __to run all test files, install devDependecies:__

```bash
 $ cd mazz/
 # install or update devDependecies
 $ npm install 
 # run tests
 $ npm test
```

### Constructor

> No reason to create multiple instances (results are the same).
```javascript
var Mazz  = require( 'mazz' );
	, h = Mazz.do( .. )
```

###  Properties

```javascript
/*
 * total number of hash functions  
 */
Mazz.hfn
```

### Methods

> Arguments between [] are optional.

```javascript

/*
 * Specify a positive integer (from 0 to 15) to use the i-th
 * hash function. If specified it returns a number within a
 * range.
 * NOTE: the minimum range is obviously 2 (0, 1).
 */
Mazz#do( Number hfn, Buffer data [, Number range ] ) : Number

/*
 * hash with all functions in parallel,
 * it returns an array of results
 */
Mazz#all( Buffer data [, Number range ] ) : Array


```

> See [examples](example/).

### MIT License

> Copyright (c) 2017-present &lt; Guglielmo Ferri : 44gatti@gmail.com &gt;

> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:

> __The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.__

> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![GA](https://ga-beacon.appspot.com/UA-53998692-1/mazz/Readme?pixel)](https://github.com/igrigorik/ga-beacon)