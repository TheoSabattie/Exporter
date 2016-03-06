# Exporter
Copy files and folders where you want.<br />

## Instructions:
Download and install [nodeJs](https://nodejs.org/en/)<br />
Download exporter.js and package.json<br /><br />
Install node module with command line 
```
npm install
```
<br />Launch application with 
```
node exporter.js
```

<br />Configure exportConfig.json
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
