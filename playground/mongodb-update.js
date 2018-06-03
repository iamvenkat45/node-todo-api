const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to Mongo server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    //Find one and update - using set operator
    // db.collection('Todos').findOneAndUpdate({
    //     text: 'Sleep'
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }).then((res) => {
    //         console.log(res);
    //     });

    //Find one and update - using increment operator
    db.collection('Users').findOneAndUpdate({
        name: 'Venkat'
    }, {
            $inc: {
                age: -1
            }
        }).then((res) => {
            console.log(res);
        });

    client.close();
});