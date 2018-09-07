## persistent-localstore
Simple module to set/get variables to/from a JSON file.

## usage
```
    // Prepare the storage.
    var store = require('persistent-localstore')();

    store.set(key, data)    // SET data
    store.get(key)          // GET data
    store.clear()           // PURGE all data

```