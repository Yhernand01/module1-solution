(function(){
    'use strict';

    angular.module('LunchCheck',[])

    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.items="";
        $scope.response = "";

        $scope.calculate = function(){
            var totalValue = calculateLunch($scope.items); // Value calculated from function
            $scope.response = totalValue;
        };

        function calculateLunch(string){
            var itemCount = 1;
            var responseString = "";
            if(string.length == 0){
                responseString = "Please enter data first!";
            }
            else{
                for(var i = 0; i < string.length; i++){
                    if(string.substring(i,i+1) == ",")
                    {
                        itemCount++;
                    }
                }
                if(itemCount > 4){
                    responseString = "Too much!";
                }
                else{
                    responseString = "Enjoy!";
                }
            }
            return responseString;
        }
    }
})();
