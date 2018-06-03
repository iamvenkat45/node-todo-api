const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to Mongo server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=> {
    //     if(err) {
    //         return console.log('unable to inster', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
        name: 'Venkat',
        age: 29,
        location: 'Atlanta'
    }, (err, result) => {
        if (err) {
            return console.log('Cannot insert', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});