var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var fs = require('fs');
var file = './config.json';

writeConfig = function () {
    var obj = {
        "server": "yoursandbox.demandware.net",
        "site_id": "SiteGenesis",
        "version": "v20_3",
        "client_id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "port": 8080
    };
    jsonfile.writeFile(file, obj, function (err) {
        if (err != null) {
            console.error(err);
        }
    });

    console.log("Creating config.json");
    try {
        fs.mkdirSync("./logs");
        } catch (err) {
            
        }
};

writeConfig();