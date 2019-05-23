app.filter('dateRange', function() {
    return function(dateTime) {
        return $scope.startDateRange <= dateTime <= $scope.endDateRange;
    };
});

app.filter('trackingType', function() {
    return function(trackingCode) {
        switch(trackingCode) {
            case "0": 
                return "Click";
            case "1":
                return "Open";
            case "2":
                return "Unsubscribe";
            default:
                return "Unkown"
        }
    }
});