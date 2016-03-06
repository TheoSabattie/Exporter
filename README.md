# Exporter
Copy files and folders where you want.

## Instructions:
Download and install nodeJs
Download exporter.js and package.json
Install node module with command line 
```
npm install
```
Launch application with 
```
node exporter.js
```

Configure exportConfig.json
```
{
    "folders" : {
        "./myPathToMyFolder/myFolder"   : "./pathWhereIWantCopyMyFolder/myNewFolderName",
        "./myPathToMyFolder2/myFolder2" : "./pathWhereIWantCopyMyFolder2/myNewFolderName"
    },
    "files" : {
        "./myPathToMyFile/myFile.extension"   : "./myPathWhereIWantCopyMyFile/myNewFileName.extension",
        "./myPathToMyFile2/myFile2.extension" : "./myPathWhereIWantCopyMyFile2/myNewFileName2.extension"
    }

}
```
