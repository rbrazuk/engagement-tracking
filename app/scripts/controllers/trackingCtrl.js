app.controller("trackingCtrl", function($scope, $http) {
    $scope.notifications = [];
    $scope.sortBy = "-unixTime";
    $scope.term = "";
    $scope.appliedFilter = {};
    $scope.startDateRange = 0;
    $scope.endDateRange = 1;
    $scope.selectedServer = {};
    $scope.servers = [];

    var prodEndpoint = "https://sl-notifications.herokuapp.com/api";
    var devEndpoint = "http://localhost:8080/api";

    $scope.sortByColumn = function(selectedColumn) {
        if ($scope.sortBy.includes(selectedColumn)) {
            
             if ($scope.sortBy.startsWith("-")) {
                 $scope.sortBy = selectedColumn; 
             } else {
                $scope.sortBy = "-" + selectedColumn;
            }
        } else {
            $scope.sortBy = selectedColumn;
        }        
    }

    $scope.filterByText = function(text) {
        //var textFilter = {};
        //console.log(text);
        //textFilter[column] = text;
        //$scope.appliedFilter = textFilter;
        console.log(text);
    }

    $scope.selectServer = function(server) {
        console.log(server);
        $http.get(prodEndpoint + "/notifications/" + $scope.selectedServer.serverId)
        .then(response => {
            $scope.notifications = response.data;
        });
    }

    $http.get(prodEndpoint + "/servers")
    .then(response => {
        $scope.servers = response.data;
        $scope.selectedServer = $scope.servers[0];
        $scope.selectServer($scope.selectedServer);
        
    });   
});