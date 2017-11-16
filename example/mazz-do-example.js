var log = console.log
    , Mazz = require( '../' )
    , maxlen = 6
    , range = 100
    , sdata = [ 'HAZZ!', 'HAZZ!?' ]
    , bdata = new Buffer( sdata[ 0 ] )
    , h0 = null
    , h1 = null
    ;


h0 = Mazz.do( 0, bdata, range )
h1 = Mazz.do( 1, bdata, range )

log( '\n - (h0, h1): (%d, %d), max length: %d, k(Buffer): "%s" (%d bytes)'
     , h0, h1, maxlen, bdata, bdata.length
);

bdata = new Buffer( sdata[ 1 ] )

h0 = Mazz.do( 0, bdata, range )
h1 = Mazz.do( 1, bdata, range )

log( ' - (h0, h1): (%d, %d), max length: %d, k(Buffer): "%s" (%d bytes)'
     , h0, h1, maxlen, bdata, bdata.length
);
log()