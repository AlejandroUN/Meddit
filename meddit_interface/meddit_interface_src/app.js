/*jslint node: true */
"use strict";

import soap from 'soap';
import express from 'express';
import fs from 'fs';

import { request, gql } from 'graphql-request'

const url = "https://meddit-ag-3fafemp3rq-uc.a.run.app/graphql";

function getQueryForId(id) {
    const query = gql `
         {
            comunityById(id:${id}){
              name
        }
    }`
    return query
}

// the splitter function, used by the service
function main(args, callback) {
    const id = args.id;
    console.log(id);
    request(url, getQueryForId(id))
        .then((data) => {
            const name = data.comunityById.name;
            callback({
                comunity_name: name
            })
        })
}

// the service
var serviceObject = {
    ComunityBIdService: {
        ComunityBIdServiceSoapPort: {
            ComunityBId: main
        }
    }
};

const xml = fs.readFileSync('service.wsdl', 'utf8');
const app = express();

// root handler
app.get('/', function(req, res) {
    res.send('Node Soap Example!<br /><a href="/wsdl?wsdl">Wsdl endpoint</a>');
})

// Launch the server and listen
const port = 8000;
app.listen(port, function() {
    console.log('Listening on port ' + port);
    const wsdl_path = "/wsdl";
    soap.listen(app, wsdl_path, serviceObject, xml);
    console.log("Check port " + port + wsdl_path + " to see if the service is working");
});