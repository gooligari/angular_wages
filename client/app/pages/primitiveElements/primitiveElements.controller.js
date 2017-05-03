class primitiveController{
    constructor(auth,$scope,$rootScope , $interval){
    'ngInject';
    this.name = 'primitiveElements';
    this.auth = auth;
    this.auth.service_test();
    this.$interval = $interval;

    // $scope.showCode = false;

    // $scope.showSourceCode = function(){
    //   $scope.showCode = !$scope.showCode;
    // }

    $scope.isAuthenticated = $rootScope.isAuthenticated;

    $scope.$on('userProfileSet', function(event, userProfile) {
            $scope.profile = userProfile;
        });

    $scope.profile = auth.userProfile();

    // button elements
      this.runButtons();

    // big number
      this.runBigNumbers();

    // Column Chart
      this.runColumnChart();

    // More Options
      this.runMoreOptions();

    }

// buttons
runButtons(){

   this.button1Properties = {
   text: 'Button',
   type: 'default',
   width: '120px',
   height: '50px',
   background: '#ff0000',
   color: '#fff',
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

// big number
    runBigNumbers() {
      this.bignumbers = true;
      this.bigNumberProperties = {
        decimals:10,
        value: 10,
        title: 'degrees',
        unit: '°F',
      };

      this.logo = true;

      this.bigNumbers = [];
      this.bigNumbers.push({
        value: 70,
      });
      this.bigNumbers.push({
        value: 70,
      });
      this.bigNumbers.push({
        value: 70,
      });
      this.$interval(() => {
        this.bigNumbers[0].value = Math.floor(Math.random() * 100);
        this.bigNumbers[1].value = Math.floor(Math.random() * 100);
        this.bigNumbers[2].value = Math.floor(Math.random() * 100);
      }, 2000);
    }


    //Column Chart
    runColumnChart(){
      this.columnChartProperties = {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        series: ['Series A', 'Series B'],
        data: [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ],
      options: { legend: { display: true } },
      colors: ['#00ADF9', '#949FB1']
      }
    }

    //more options
    runMoreOptions(){
      this.moreOptionsProperties = {
        text: ['Option 1','Option 2','Option 3']
      }
    }
}

export default primitiveController;
