"use strict";

import soap from 'soap';
import express, { response } from 'express';
import fs from 'fs';
import axios from 'axios';
import { request, gql } from 'graphql-request'
import xmlParser from 'xml2json';
import cors from 'cors';

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
app.use(cors({
    origin: '*'
}))

const removePrefix = function(objectArray) {
    const newObjArray = objectArray.map( obj => {
        var newObj = { };
        const keys = Object.keys(obj);
        for(let key of keys) {
            newObj[key.split(":")[1]] = obj[key];
        }
        return newObj;
    })
    return newObjArray;
}

// root handler
app.get('/videoGames', function(req, res) {
    const url = 'https://gamestack-soap-e3wbalmwuq-uc.a.run.app/service/videogamesWSDL.wsdl'
    let xmls='\
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:vid="http://www.gamestack.com/xml/videogames">\
            <soapenv:Header/>\
            <soapenv:Body>\
                <vid:VideogameRequest/>\
            </soapenv:Body>\
        </soapenv:Envelope>';

    axios.post(url, xmls, { headers: {'Content-Type': 'text/xml'}})
        .then( response => { 
            const jsonResponse = JSON.parse(xmlParser.toJson(response.data));
            const parsedResponse = removePrefix(jsonResponse["SOAP-ENV:Envelope"]["SOAP-ENV:Body"]["ns2:VideogameResponse"]['ns2:fetched']);
            console.log(parsedResponse)
            return res.status(200).json(parsedResponse); 
        })
        .catch( err => { 
            const errResponse = {
                message: "Error consumiendo el servicio de video juegos",
                err
            }
            return res.status(500).json(errResponse); 
         });
})

// Launch the server and listen
const port = 8000;
app.listen(port, function() {
    console.log('Listening on port ' + port);
    const wsdl_path = "/wsdl";
    soap.listen(app, wsdl_path, serviceObject, xml);
    console.log("Check port " + port + wsdl_path + " to see if the service is working");
});