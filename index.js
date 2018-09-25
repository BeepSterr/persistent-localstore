    module.exports = function( options ) {

        var fs = require('fs');
        this.ready = false;
        this.raw= {};

        this.options = {
            filePath: './local-data.json'
        };

        if(options != undefined){
            this.options = options;
        }

        this.set = function(key, value){
            this.raw[key] = value;
            this.save();

            return this.raw[key]
        }

        this.get = function(key, fallbackValue){
            return this.raw[key]
        }

        this.unset = function(key){
            delete this.raw[key];
            this.save();

            return this.raw[key]
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

            fs.writeFile (this.options.filePath, JSON.stringify(file), { flag: 'w', encoding: 'utf8' }, function(err) {
                
                if (err) throw err;

                this.load();

            });

        }

        this.load = function() {

            fs.readFile(this.options.filePath, { flag: 'r', encoding: 'utf8' }, function (err, data) {
                
                if (err) throw err;

                var file = JSON.parse(data);
                this.raw = file.keys 

            });

        }


        if(!fs.existsSync(this.options.filePath)){

            this.save();
            this.raw = {};
            ready = true;

        }else{

            var file = fs.readFileSync(this.options.filePath);
            this.raw = JSON.parse(file).keys;

        }

        return this;

    };