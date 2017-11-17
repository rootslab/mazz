/*
 * Mazz#all test.
 */

exports.test  = function ( done, assertions ) {
    var log = console.log
        , exit = typeof done === 'function' ? done : function () {}
        , assert = assertions || require( 'assert' )
        , Mazz = require( '../' )
        , range = 1 << 16
        , s1 = 'HAZZ?!'
        , s2 = 'HAZZ??'
        , s3 = 'PAZZ??'
        , b1 = new Buffer( s1 )
        , b2 = new Buffer( s2 )
        , b3 = new Buffer( s3 )
        , h0 = -1
        , h1 = -1
        , h2 = -1
        , hr = []
        , kr = []
        ;

    log( '\n- hashing Buffers with hash functions, one at a time' );
    
    h0 = Mazz.do( 0, b1 );
    h1 = Mazz.do( 1, b1 );
    h2 = Mazz.do( 2, b1 );

    log( ' - h0: %d', h0 );
    log( ' - h1: %d', h1 );
    log( ' - h2: %d', h2 );

    log( '\n- hashing Buffers with hash functions, all together' );
    hr = Mazz.all( b1 );
    log( ' - hr[0]: %s', hr[ 0 ] );
    log( ' - hr[1]: %s', hr[ 1 ] );
    log( ' - hr[2]: %s', hr[ 2 ] );

    log( '\n- check if results are the same' );

    assert.ok( h0 === hr[ 0 ], 'the result should be the same! now: ' + h0 + ',' + hr[ 0 ] );
    assert.ok( h1 === hr[ 1 ], 'the result should be the same! now: ' + h1 + ',' + hr[ 1 ] );
    assert.ok( h2 === hr[ 2 ], 'the result should be the same! now: ' + h2 + ',' + hr[ 2 ] );


    log( '-> all instances returns the same results on the same input' );
    log( '-> hashing Buffers, with hash functions, one at a time, within range: %d', range );
    
    k0 = Mazz.do( 0, b1, range );
    k1 = Mazz.do( 1, b1, range );
    k2 = Mazz.do( 2, b1, range );

    log( ' - k0: %d', h0 );
    log( ' - k1: %d', h1 );
    log( ' - k2: %d', h2 );

    log( '\n- hashing Buffers with hash functions, all together' );
    kr = Mazz.all( b1, range );
    log( ' - kr[0]: %s', kr[ 0 ] );
    log( ' - kr[1]: %s', kr[ 1 ] );
    log( ' - kr[2]: %s', kr[ 2 ] );

    
    log( '\n- check if results are the same' );
    assert.ok( kr[ 0 ] === k0, 'the result should be the same! now: ' + h0 + ',' + hr[ 0 ] );
    assert.ok( kr[ 1 ] === k1, 'the result should be the same! now: ' + h1 + ',' + hr[ 1 ] );
    assert.ok( kr[ 2 ] === k2, 'the result should be the same! now: ' + h2 + ',' + hr[ 2 ] );
    log()
    exit();
};

// single test execution with node
if ( process.argv[ 1 ] === __filename ) exports.test = exports.test();