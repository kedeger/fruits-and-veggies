var produceApp = angular.module('ProduceApp', []);

produceApp.run(function(){
  console.log("init")
})

produceApp.controller('ProduceCtrl', ['$scope', function($scope) {

  $scope.moveLeft = function(index) {
    $scope.fruityList.push($scope.produceList[index]);
    $scope.produceList.splice(index, 1);
  }

  $scope.moveRight = function(index) {
    $scope.veggyList.push($scope.produceList[index]);
    $scope.produceList.splice(index, 1);
  }

  $scope.produceList = [
  'Potato',
  'Cherry',
  'Spinach',
  'tomato',
  'bok choi',
  'banana',
  'carrot',
  'corn',
  'green pepper',
  'honey dew melon',
  'blueberry',
  'onion',
  'cucumber',
  'banana'
];

$scope.veggyList = [];
$scope.fruityList = [];

}]);
