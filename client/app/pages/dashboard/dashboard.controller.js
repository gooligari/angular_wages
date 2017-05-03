class DashboardController {
  constructor( $rootScope, $scope, auth, $timeout) {
      'ngInject';
      $timeout(function(){

        $scope.name = 'dashboard';
        $scope.auth = auth;
        $scope.auth.service_test();
          $scope.plotData = [];

          // big number
          // const series = { };
          // series.data= { key:"pressure",seriesIndex:0,values:[{series:0, x:123344, y:1212}]};
          // $scope.plotData.push(series);


        $scope.isAuthenticated = $rootScope.$root.isAuthenticated;

        $scope.$on('userProfileSet', function(event, userProfile) {
              $scope.profile = userProfile;
            });

        $scope.profile = auth.userProfile();

      },50);
    }
}

export default DashboardController;
