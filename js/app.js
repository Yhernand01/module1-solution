(function(){
    'use strict';

    angular.module('LunchCheck',[])

    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject ['$scope'];

    function LunchCheckController($scope){
        $scope.name="";
        $scope.totalValue = 0;

        $scope.calculate = function(){
            var totalNameValue = calculateLunch($scope.name); // total value
            $scope.totalValue = totalNameValue;
        };

        function calculateLunch(string){
            var totalStringValue = 0;
            for(var i = 0; i < string.length; i++){
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }
    }
})();