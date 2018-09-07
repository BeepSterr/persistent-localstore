    module.exports = function( options ) {

        var fs = require('fs');
        this.ready = false;
        this.raw= {};

        this.set = function(key, value){
            this.raw[key] = value;
            return this.raw[key]
            this.save();
        }

        this.get = function(key, fallbackValue){
            return this.raw[key]
        }

        this.unset = function(key){
            delete this.raw[key];
            return this.raw[key]
            this.save();
        }

        this.clear = function(){
            this.raw = {};
        }

        this.save = function() {

            var file = {
                meta: {
                    lastSaved: new Date()
                },
                keys: this.raw
            }

            fs.writeFile ('./data.json', JSON.stringify(file), { flag: 'w', encoding: 'utf8' }, function(err) {
                
                if (err) throw err;

                this.load();

            });

        }

        this.load = function() {

            fs.readFile('./data.json', { flag: 'r', encoding: 'utf8' }, function (err, data) {
                
                if (err) throw err;

                var file = JSON.parse(data);
                this.raw = file.keys 

            });

        }


        if(!fs.existsSync('./data.json')){

            this.save();
            this.raw = {};
            ready = true;

            console.log('datafield created')

        }else{

            var file = fs.readFileSync('./data.json');
            this.raw = JSON.parse(file).keys;
            console.log('datafield loaded')

        }

        return this;

    };