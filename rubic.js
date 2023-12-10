const cube = document.querySelector( "div#cube" );

const data = [
    { text : "_", color : "b", x : 3, y : 0 },
    { text : "_", color : "g", x : 4, y : 0 },
    { text : ":", color : "y", x : 5, y : 0 },
    { text : "_", color : "o", x : 3, y : 1 },
    { text : "O", color : "r", x : 4, y : 1 },
    { text : "S", color : "g", x : 5, y : 1 },
    { text : "U", color : "y", x : 3, y : 2 },
    { text : "S", color : "r", x : 4, y : 2 },
    { text : "M", color : "g", x : 5, y : 2 },

    { text : "L", color : "o", x : 0, y : 3 },
    { text : "D", color : "b", x : 1, y : 3 },
    { text : "P", color : "g", x : 2, y : 3 },
    { text : "B", color : "y", x : 0, y : 4 },
    { text : "T", color : "b", x : 1, y : 4 },
    { text : "L", color : "o", x : 2, y : 4 },
    { text : "_", color : "w", x : 0, y : 5 },
    { text : "E", color : "w", x : 1, y : 5 },
    { text : "Ø", color : "b", x : 2, y : 5 },
    
    { text : "R", color : "o", x : 3, y : 3 },
    { text : "D", color : "w", x : 4, y : 3 },
    { text : "T", color : "r", x : 5, y : 3 },
    { text : "S", color : "w", x : 3, y : 4 },
    { text : "N", color : "w", x : 4, y : 4 },
    { text : "?", color : "y", x : 5, y : 4 },
    { text : "P", color : "r", x : 3, y : 5 },
    { text : "E", color : "o", x : 4, y : 5 },
    { text : "P", color : "g", x : 5, y : 5 },
    
    { text : "E", color : "w", x : 6, y : 3 },
    { text : "L", color : "o", x : 7, y : 3 },
    { text : "{", color : "b", x : 8, y : 3 },
    { text : "L", color : "g", x : 6, y : 4 },
    { text : "S", color : "g", x : 7, y : 4 },
    { text : "E", color : "b", x : 8, y : 4 },
    { text : "W", color : "r", x : 6, y : 5 },
    { text : ")", color : "y", x : 7, y : 5 },
    { text : "O", color : "w", x : 8, y : 5 },
    
    { text : "_", color : "w", x : 3, y : 6 },
    { text : "K", color : "y", x : 4, y : 6 },
    { text : "}", color : "y", x : 5, y : 6 },
    { text : "U", color : "g", x : 3, y : 7 },
    { text : "E", color : "o", x : 4, y : 7 },
    { text : "B", color : "r", x : 5, y : 7 },
    { text : "I", color : "o", x : 3, y : 8 },
    { text : "G", color : "r", x : 4, y : 8 },
    { text : "L", color : "o", x : 5, y : 8 },
    
    { text : "U", color : "b", x : 3, y : 9  },
    { text : "L", color : "b", x : 4, y : 9  },
    { text : "E", color : "g", x : 5, y : 9  },
    { text : "S", color : "b", x : 3, y : 10 },
    { text : "E", color : "y", x : 4, y : 10 },
    { text : "N", color : "w", x : 5, y : 10 },
    { text : "_", color : "y", x : 3, y : 11 },
    { text : "Y", color : "r", x : 4, y : 11 },
    { text : "R", color : "r", x : 5, y : 11 },
];

const squares = data.reduce( ( acc, { text, color, x, y } ) => (
    acc[y][x] = { text, color }, acc
), Array( 12 ).fill().map( _ => Array( 9 ).fill({ color : "", text : "" }) ) );

cube.append( ...Array( 9 * 12 ).fill().map( ( _, i ) => {
    const element         = document.createElement( "div" );
    const { text, color } = squares.at( Math.floor( i / 9 ) )?.at( i % 9 );

    element.textContent = `${ text }`;
    element.className   = color;

    return element;
}));