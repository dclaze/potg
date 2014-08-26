angular.module('potg', ['angularFileUpload']);
angular.module('potg').controller('Main', ['$scope', '$upload',
    function($scope, $upload) {
        $scope.helloWorld = "Hello, World.";
        $scope.openFileUploadDialog = function() {
            alert("YO")
        }
    }
]);
