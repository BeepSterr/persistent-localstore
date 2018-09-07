    
    var store = require('./index.js')({
        filePath: './local-data.json'
    });

    console.log( JSON.stringify(store.raw) );
    console.log( store.set('test', 'Hello Store!') )
    console.log( store.set('data', [ 1,2,3,4,5,"String!" ]) )
    
    console.log( store.get('test') )    
    console.log( store.get('data') )

    console.log( JSON.stringify(store.raw) );

    store.clear();
    console.log( JSON.stringify(store.raw) );

    store.save();