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
      $scope.activePageTitle = $state.current.name;
      // console.log('contentTop');
      // console.log($state.current);
    });


  }
}

export default ContentTopController;
