var log = console.log
    , Mazz = require( '../' )
    , maxlen = 6
    , range = 100
    , sdata = [ 'HAZZ!', 'HAZZ!?' ]
    , bdata = new Buffer( sdata[ 0 ] )
    , hr = null
    , h0 = null
    , h1 = null
    , h2 = null
    ;


h0 = Mazz.do( 0, bdata, range )
h1 = Mazz.do( 1, bdata, range )
h2 = Mazz.do( 2, bdata, range )

hr = Mazz.all( bdata, range )

log( '\n - [h0, h1, h2]: [%d, %d, %d], max length: %d, k(Buffer): "%s" (%d bytes)'
     , hr[ 0 ], hr[ 1 ], hr[ 2 ], maxlen, bdata, bdata.length
);

log( ' - (h0, h1, h2): (%d, %d, %d), max length: %d, k(Buffer): "%s" (%d bytes)'
     , h0, h1, h2, maxlen, bdata, bdata.length
);

bdata = new Buffer( sdata[ 1 ] )

h0 = Mazz.do( 0, bdata, range )
h1 = Mazz.do( 1, bdata, range )
h2 = Mazz.do( 2, bdata, range )

hr = Mazz.all( bdata, range )

log( '\n - [h0, h1, h2]: [%d, %d, %d], max length: %d, k(Buffer): "%s" (%d bytes)'
     , hr[ 0 ], hr[ 1 ], hr[ 2 ], maxlen, bdata, bdata.length
);

log( ' - (h0, h1, h2): (%d, %d, %d), max length: %d, k(Buffer): "%s" (%d bytes)'
     , h0, h1, h2, maxlen, bdata, bdata.length
);
log()