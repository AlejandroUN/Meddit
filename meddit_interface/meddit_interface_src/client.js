// npm install soap
import soap from 'soap';


// const url = 'https://meddit-interface-3fafemp3rq-uc.a.run.app/wsdl?wsdl';

const url = 'https://gamestack-soap-e3wbalmwuq-uc.a.run.app/service/videogamesWSDL.wsdl'


// Create client
soap.createClient(url, function(err, client) {
    if (err) {
        throw err;
    }
    /* 
     * Parameters of the service call: they need to be called as specified
     * in the WSDL file
     */
    var args = {
        // id: 1
    };
    // call the service
    client.Videogame(args, function(err, res) {
        if (err){
            console.log(err.message);}
        // print the service returned result
        console.log(res);
    });
});