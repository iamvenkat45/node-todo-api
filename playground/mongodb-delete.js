const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Cannot connect to db', err);
    }
    console.log('Conntected to Mongo DB server');
    const db = client.db('TodoApp');

    //delete many
    // db.collection('Todos').deleteMany({ text: 'Sleep' }).then((res) => {
    //     console.log(res);
    // });

    //find one and delete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((res) => {
    //     console.log(res);
    // });

    //find by id and delete
    db.collection('Todos').findOneAndDelete({ _id: new ObjectID('5b1467bbb5e3482ebc07286f') }).
        then((res) => {
            console.log(res);
        });
});