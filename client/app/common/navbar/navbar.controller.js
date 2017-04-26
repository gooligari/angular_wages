class NavbarController {
constructor(auth, $scope, $rootScope,$location) {
  'ngInject';
    this.name = 'Navbar';

    $scope.auth = auth;
    $scope.isAuthenticated = $rootScope.isAuthenticated;
    $scope.$on('userProfileSet', function(event, userProfile) {
          $scope.profile = userProfile;
        });
    $scope.profile = auth.userProfile();

    $scope.logoutClick = function()
    {
    auth.logout();
//    window.location.assign("/");

    $location.path('/login');
    }

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  }
}

export default NavbarController;
