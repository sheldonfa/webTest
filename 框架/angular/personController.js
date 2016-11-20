/**
 * Created by Administrator on 2016/11/20.
 */

var app = angular.module('myApp',[]);
app.controller('personCtrl',function($scope){
    $scope.firstName = "fang";
    $scope.lastName = "xin";
    $scope.fullName = function(){
        return $scope.firstName +" "+$scope.lastName;
    }
});
