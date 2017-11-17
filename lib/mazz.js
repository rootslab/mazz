/*
 * Mazz, the fast way of the tonto, to simulate 16 indipendent
 * hash functions, using a crypto digest.
 *
 * Copyright(c) 2017 Guglielmo Ferri <44gatti@gmail.com>
 * MIT Licensed
 */
exports.Mazz = ( function () {
    var crypto = require( 'crypto' )
        , max = Math.max
        , min = Math.min
        ;
    return {
        do : function ( n, data, range ) {
            var input = data || new Buffer( 0 )
                , pos = min( n, 15 ) << 2
                , hash = crypto.createHash( 'sha512' )
                , digest = hash.update( input ).digest( 'buffer' )
                , result = ( digest[ pos ] << 24 >>> 0 )
                    + ( digest[ pos + 1 ] << 16 )
                    + ( digest[ pos + 2 ] << 8 )
                    + ( digest[ pos + 3 ] )
                ;
            return ( range >>> 1 ) ? result % range : result;
        }

        , all : function ( data, range ) {
            var input = data || new Buffer( 0 )
                , hash = crypto.createHash( 'sha512' )
                , digest = hash.update( input ).digest( 'buffer' )
                , pos = 0
                , results = new Array( 16 )
                ;
            for ( ; pos < 64; pos += 4 ) {
                results[ pos >>> 2 ] = ( ( digest[ pos ] << 24 >>> 0 )
                    + ( digest[ pos + 1 ] << 16 )
                    + ( digest[ pos + 2 ] << 8 )
                    + ( digest[ pos + 3 ] )
                );
            }
            if ( range >>> 1 )
                for ( pos = 0; pos < 16; ++pos ) results[ pos ] %= range;
            return results;
        }
    };

} )();