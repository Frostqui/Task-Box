
var Todo = require('../models/todo');
module.exports = function() {

	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
	});

	app.post('/api/todos', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});

	});


	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});
	});

	app.patch('/api/todos/:todo_id', function(req, res) {
		
		Todo.findById(req.params.todo_id, function (err, todo) {  
    // Handle any possible database errors
    if (err) {
        res.status(500).send(err);
    } else {
        // Update each attribute with any possible attribute that may have been submitted in the body of the request
        // If that attribute isn't in the request body, default back to whatever it was before.
        
		
		todo.done = !todo.done;
        
        // Save the updated document back to the database
        todo.save(function (err, todo) {
            if (err) {
                res.status(500).send(err)
            }


			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
					
				res.json(todos);
			});
			
           
        });

		
    }
});


	});


app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

}
