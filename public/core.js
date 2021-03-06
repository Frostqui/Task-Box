var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
        .success(function (data) {

            angular.forEach(data, function (value, key) {

                value.created = moment(value.created).fromNow();




            });

            $scope.todos = data;
            console.log(data);

        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function () {
        $http.post('/api/todos', $scope.formData)
            .success(function (data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                angular.forEach(data, function (value, key) {


                    value.created = moment(value.created).fromNow();




                });

                $scope.todos = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function (id) {
        $http.delete('/api/todos/' + id)
            .success(function (data) {

                  angular.forEach(data, function (value, key) {

                value.created = moment(value.created).fromNow();




            });


                $scope.todos = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };



    $scope.doneTodo = function (id) {
        $http.patch('/api/todos/' + id)
            
            .success(function (data) {

                  angular.forEach(data, function (value, key) {

                value.created = moment(value.created).fromNow();




            });


                $scope.todos = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

}