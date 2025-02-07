'use strict';
export const Constants = {
    
    // when true, the skill logs additional detail, including the full request received from Alexa
    debug : true,

    // when developing offline, use local dynamodb (do not forget to start the DB and to create the table)
    useLocalDB : false, 

    // when defined, it tries to read / write DynamoDB to save the last time Jingle was played for that user
    // this allows to avoid to repeat the jingle at each invocation 
    jingle : {
        databaseTable : "project_neighbor_db",
        playOnceEvery : 1000 /*ms*/ * 60 * 60 * 24 // 24 hours
        //playOnceEvery : 1000 /*ms*/ * 60 * 3 // 3 minutes 
    }

};
