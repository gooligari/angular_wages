class primitiveController{
    constructor(auth,$scope,$rootScope){
    'ngInject';
    this.name = 'primitiveElements';
    this.auth = auth;
    this.auth.service_test();

    console.log('scope auth :'+$scope.isAuthenticated);

    $scope.isAuthenticated = $rootScope.isAuthenticated;

    console.log($rootScope.isAuthenticated) ;

    $scope.$on('userProfileSet', function(event, userProfile) {
            $scope.profile = userProfile;
        });

    $scope.profile = auth.userProfile();
            this.runButtons();
    }

    runButtons(){

      this.button1Properties = {
      text: 'Button',
      type: 'default',
      onClick: () => { }
    };

    this.button2Properties = {
      text: 'Button',
      type: 'primary',
      onClick: () => { },
    };

    this.logo = true;

    this.button3Properties = {
      text: 'Button',
      type: 'success',
      logo: this.logo,
      onClick: () => { },
    };

    this.button4Properties = {
      text: 'Button',
      type: 'info',
      onClick: () => { },
    };
    }
}

export default primitiveController;