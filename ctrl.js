app.run(function($rootScope){
		$rootScope.back = function(){
			history.back();
		}
	});

app.controller("indexCtrl", function ($http, $interval, $rootScope, $scope, $window) {

	$scope.ppp = "Start indexCtrl";
	console.log( $scope.ppp );
	
	$http.post('/q', {}).then(function(res){
	
		$scope.r = res.data;

		console.log($scope.r);
	
	},function(res) {
			
			console.log('error');
			console.log(res);
	
	});


	$scope.adtSearch = function(){
		console.log( $scope.search_string );
		if(!$scope.search_string) {
			$window.alert('검색오류');
			return;
		}
	
		if($scope.search_string.length > 30)
			$scope.txSearch($scope.search_string);
		else
			$scope.blockSearch($scope.search_string);

	}

	$scope.blockSearch = function(no) {

		$window.location.href = '#!/block/'+no;
	}

	$scope.txSearch = function(txid){

		$window.location.href = '#!/tx/'+txid;

	}
});

app.controller("blockInfoCtrl", function ($http, $interval, $rootScope, $scope, $window, $routeParams) {


    var no = $routeParams.no;

    var j = {};
        j.no = no;

    $http.post('/q/block', j).then(function(res){

        $scope.r = res.data;

        $scope.search_string = no;

        console.log($scope.r);

    },function(res) {

            console.log('error');
            console.log(res);

    });


    console.log("block page");

});

app.controller("txInfoCtrl", function ($http, $interval, $rootScope, $scope, $window, $routeParams) {


	var txid = $routeParams.txid;

	var j = {};
		j.txid = txid;

	$http.post('/q/tx', j).then(function(res){

        $scope.r = res.data;

		$scope.search_string = txid;

        console.log($scope.r);

    },function(res) {

            console.log('error');
            console.log(res);

    });


	console.log("tx page");

});
