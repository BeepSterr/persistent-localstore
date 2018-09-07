## persistent-localstore
Simple module to set/get variables to/from a JSON file.

## usage
```
    // Prepare the storage.
    var store = require('persistent-localstore')( { filePath: './data.json' } );

    store.set(key, data)    // SET data
    store.get(key)          // GET data
    store.clear()           // PURGE all data

    store.raw               // Object containing all data. Can be modified directly from here.

```