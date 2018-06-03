const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

let todo = new Todo({
    text: 'Something to do'
});

// todo.save().then((res) => {
//     console.log(res);
// });

let anotherTodo = new Todo({
    text: 'Learn Node',
    completed: false,
    completedAt: 123
});

anotherTodo.save().then((doc)=> {
    console.log(JSON.stringify(doc, undefined, 2));
});