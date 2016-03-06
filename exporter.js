var fs = require('fs-extra');

init();

function init(){
    fs.readJson("./exportConfig.json", function(err, config){
        if (err){
            if (err.code == 'ENOENT'){
                console.log("ConfigException : Config do not exist. Creation of default config file 'exportConfig.json'. Please complete it.");
                fs.writeJson('./exportConfig.json', 
                    {
                        folders : {},
                        files   : {}
                    }, 
                    function (err) {
                        if (err) {
                            console.log(err)
                        }
                    }
                );
                return;
            }

            console.log("ConfigException : " + err);
            return;
        }

        if ((!config.folders || !Object.keys(config.folders).length) && (!config.files || !Object.keys(config.files).length)){
            console.log("ConfigException : do not find any folders or files to copy");
            return;
        }

        for (var fromFolder in config.folders){
            copy(fromFolder, config.folders[fromFolder], "folder");
        }
        
        for (var fromFile in config.files){
            copy(fromFile, config.files[fromFile], "file");
        }
    });
}

function copy(from, to, type){
    fs.copy(from, to, function (err) {
        if (err){
            console.error(err);
            return;
        }

        console.log("Copy " + type + " " + from + " to " + to);
    });
}