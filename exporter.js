var fs = require('fs-extra');

init();

function init(){
    var file = 'exportConfig.json';
    var hasConfig = false;

    fs.ensureFile(file, function (err) {
        if (err){
            console.log(err) // => null
        }// file has now been created, including the directory it is to be placed in
    });

    if (!hasConfig){
        return;
    }

    fs.readJson("exportConfig.json", function(err, configCopy){
        if (err){
            console.log(err);
            return;
        }
        
        for (var fromFolder in configCopy.folders){
            copyFolderRecursive(fromFolder, configCopy.folders[fromFolder]);
        }
        
        for (var from in configCopy.files){
            copyFile(from, configCopy.files[from]);
        }
    });
}
    
function copyFile(source, target, callBack) {
    var cbCalled = false;
    var rd = fs.createReadStream(source);
    var wr = fs.createWriteStream(target);

    rd.on("error", function(err) {
        done(err);
    });

    wr.on("error", function(err) {
        done(err);
    });

    wr.on("close", function(ex) {
        done();
    });

    rd.pipe(wr);

    function done(err) {
        if (err){
            console.log(err);
        } else {
            console.log("Copy file " + source + " to " + target);
        }
        
        if (!cbCalled && callBack) {
            callBack(source, target, err);
            cbCalled = true;
        }
    }
}


function copyFolderRecursive(source, target, callBack) {
    fs.copy(source, target, function(err){
        if (err){
            console.log(err);
        } else {
            console.log("Copy folder " + source + " to " + target);
        }
        
        if (callBack){
            callBack(source, target, err);
        }
    });
}