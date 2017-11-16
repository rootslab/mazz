/*
 * Mazz test.
 */

exports.test  = function ( done, assertions ) {
    var log = console.log
        , exit = typeof done === 'function' ? done : function () {}
        , assert = assertions || require( 'assert' )
        , Mazz = require( '../' )
        , hfn  = 2
        , s1 = '-HAZZ?!'
        , s2 = '-HAZZ??'
        , b1 = new Buffer( s1 )
        , b2 = new Buffer( s2 )
        , r1 = -1
        , r2 = -1
        ;

     log( '- hashing different size Buffers' );
    r1 = Mazz.do( 0, b1 );
    r2 = Mazz.do( 0, b2 );
    assert.ok( r1 !== r2, 'the result should not be the same! now: ' + r1 + ',' + r2 );
    log()
    exit();
};

// single test execution with node
if ( process.argv[ 1 ] === __filename  ) exports.test = exports.test();