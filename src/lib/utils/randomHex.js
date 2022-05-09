function randomHex() {
    const
        MAX_LENGTH = 8,
        LENGTH = 6,
        min = Math.pow(16, Math.min(LENGTH, MAX_LENGTH) - 1),
        max = Math.pow(16, Math.min(LENGTH, MAX_LENGTH)) - 1,
        n = Math.floor( Math.random() * (max - min + 1) ) + min;

    let
        r = n.toString(16);

    while ( r.length < LENGTH ) {
        r = r + randomHex( LENGTH - MAX_LENGTH );
    }

    return r;
}

export { randomHex };