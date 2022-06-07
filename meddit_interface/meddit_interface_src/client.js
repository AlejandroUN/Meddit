// npm install soap
import soap from 'soap';


const url = 'https://meddit-interface-3fafemp3rq-uc.a.run.app/wsdl?wsdl';



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
        id: 1
    };
    // call the service
    client.ComunityBId(args, function(err, res) {
        if (err){
            throw err;}
        // print the service returned result
        console.log(res);
    });
});