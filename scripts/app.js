angular.module("bucketListApp", [])

.controller('mainCtrl', function($scope) {

    $scope.todos = [];
    $scope.addTodo = function(){
        if (this.todoName === undefined || this.todoName === "")
            return false;
        
        this.todos.unshift({
            name: this.todoName,
            completed: false
        });
        
    };

    $scope.deleteTodo = function(){
        this.todos.splice(this.$index, 1);
    };
});

