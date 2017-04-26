class LoginController {

  constructor(auth, $scope, $rootScope, $timeout) {

  'ngInject';

      $timeout(function(){

        $scope.name = 'login';

        $scope.auth = auth;

        $scope.isAuthenticated = $scope.$root.isAuthenticated;

        if($scope.$root.isAuthenticated){window.location.assign("/");}

        $scope.loginClick = function()
        {

          auth.login();

        }

        if($scope.$root.isAuthenticated)
        {

          $location.path('/');
          
        }

      },50);

  }

}

export default LoginController;
