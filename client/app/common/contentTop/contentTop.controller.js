class ContentTopController {
constructor(auth, $scope, $rootScope,$location,$state) {
  'ngInject';
    this.name = 'ContentTop';

    $scope.auth = auth;
    $scope.isAuthenticated = $rootScope.isAuthenticated;
    $scope.$on('userProfileSet', function(event, userProfile) {
          $scope.profile = userProfile;
        });
    $scope.profile = auth.userProfile();

    $scope.$watch(function () {
      $state.current.name = ($state.current.name).replace(/([a-z])([A-Z])/g, '$1 $2');
      $scope.activePageTitle = $state.current.name;

      // console.log('contentTop');
      // console.log($state.current);
    });


  }
}

export default ContentTopController;
