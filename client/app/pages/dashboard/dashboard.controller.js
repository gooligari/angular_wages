class DashboardController {
  constructor( $rootScope, $scope, auth,$timeout) {
      'ngInject';
      $timeout(function(){
        $scope.name = 'dashboard';
        $scope.auth = auth;
        $scope.auth.service_test();

        $scope.isAuthenticated = $rootScope.$root.isAuthenticated;

        $scope.$on('userProfileSet', function(event, userProfile) {
              $scope.profile = userProfile;
            });

        $scope.profile = auth.userProfile();
      },50);
    }
}

export default DashboardController;
