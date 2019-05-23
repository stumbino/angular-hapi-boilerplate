const Hapi =  require("hapi");

const server = new Hapi.Server({
    port: 8080
});


server.route({
    method: 'GET',
    path: '/api/hello',
    handler: function (request, h) {
        return 'hello world';
      }

});

server.start(err => {

    if (err) {

        // Fancy error handling here
        console.error( 'Error was handled!' );
        console.error( err );

    }

    console.log( `Server started at ${ server.info.uri }` );

});