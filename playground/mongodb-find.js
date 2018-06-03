const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=> {
    if(err) {
        return console.log('Cannot connect to db', err);
    }
    console.log('Conntected to Mongo DB server');
    const db = client.db('TodoApp');

    db.collection('Todos').find().toArray().then((list)=> {
        console.log('List of Todos');
        console.log(JSON.stringify(list, undefined, 2));
    });

    db.collection('Users').count().then((length)=> {
        console.log(`Total users ${length}`);
    });
});