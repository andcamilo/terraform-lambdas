exports.handler = async (event, context, cb) => {
    const { Client } = require('pg');
    const client = new Client({
                     user: 'edu',
                     host: 'education.cpaqxezlwqeb.us-east-2.rds.amazonaws.com',
                     database: 'harmonic',
                     password: 'hashicorp',
                     port: 5432
                   });
    await client.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
    
    // Your other interactions with RDS...
    client.end();
  };